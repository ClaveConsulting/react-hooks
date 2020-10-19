import { promises as fs } from 'fs';
import glob from 'glob-promise';
import mkdirp from 'mkdirp';
import Mustache from 'mustache';
import { dirname, resolve } from 'path';
import prompts from 'prompts';

Promise.resolve().then(async () => {
  const name = await getName();
  const id = await getId(name);
  const root = resolve(__dirname, '..');
  const cwd = resolve(__dirname, 'template');
  const files = await glob('**/*.handlebars', {cwd});
  const destDirectory = resolve(root, 'hooks', id);

  console.log(`Creating ${name}...`);
  await mkdirp(destDirectory);

  for (const path of files) {
    const template = await fs.readFile(resolve(cwd, path), 'utf-8');
    const contents = Mustache.render(template, {id, name});
    const destination = resolve(destDirectory, path.replace('.handlebars', ''));
    await mkdirp(dirname(destination));
    await fs.writeFile(destination, contents)
  }

  const packageJsonPath = resolve(root, 'package.json');

  let packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
  packageJson = addToPackageJson(packageJson, id);
  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2)+'\n');

  console.log('Done!');
});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
function addToPackageJson(packageJson: any, id: string) {
  return {
    ...packageJson,
    dependencies: Object.fromEntries([
    ...Object.entries(packageJson.dependencies),
    [`@clave/${id}`, `file:hooks/${id}`]
  ].sort((a, b) => a[0].localeCompare(b[0])))
 };

}

async function getName(): Promise<string> {
  const {name} = await prompts({
    type: 'text',
    name: 'name',
    message: 'Name of the hook',
    initial: 'useSomething'
  });

  return name as string;
}

async function getId(name: string): Promise<string> {
  const {id} = await prompts({
    type: 'text',
    name: 'id',
    message: 'npm package name',
    initial: `@clave/${toNpmName(name)}`
  });

  return (id as string).replace('@clave/', '');
}

function toNpmName(value: string) {
  return value.replace(/[A-Z]/g, v => '-' + v.toLowerCase());
}