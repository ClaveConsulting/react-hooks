# React hooks

[Documentation and demo](https://claveconsulting.github.io/react-hooks/)

## Contribute

Follow these steps to set up locally:

1. Clone this repository

   `git clone git@github.com:ClaveConsulting/react-hooks.git`

2. Install dependencies

   `npm install`

3. Bootstrap packages

   `npm run bootstrap`

### Available scripts

There are `npm run` scripts defined in the root `package.json` file for all of your needs. Here are some of them explained:

- `npm run bootstrap`: Initialize all of the hooks.

  You probably only need to run this once, or if you create a new hook.

- `npm run watch-docs`: Build the docs for local development.

  Use this if you want to make changes to the documentation.

- `npm run compile`: First tsc then babel.

  This is the same as running tsc and babel, one after the other.

- `npm run create-hook`: Create a new hook.

  This uses a bunch of templates to scaffold up the new hook in the hooks folder.

Here are the rest of the npm scripts, in case you need them.

- `npm run clean`: Clean built files in each hook's /es and /js.

  This might be useful before running compile.

- `npm run tsc`: Build the /es files from the /ts source code.

  This is the first step in compiling the project. Configured in `tsconfig.json`.

- `npm run babel`: Build the /js files from the /es code.

  This is the second step in compiling the project, and relies on the output of `npm run tsc`. Configured in `.babelrc`.

- `npm run lint`: Lints the TypeScript for each hook.

  ES-lint is used to check the TypeScript source. Configured in `.eslintrc.json`.

- `npm run test`: Run tests for all hooks.

  Jest is used as the testrunner, the results are output to the console. Configured in `jest.config.js`.

- `npm run prepare`: Prepare for publishing.

  This will clean, lint, test and compile all of the hooks.

- `npm run clean-docs`: Clean the output from build-docs and watch-docs.

  This will clean up the output from building the docs. You probably don't need to run this.

- `npm run build-docs`: Build the docs for github pages.

  This is run by the github action, you probably don't have to run this yourself.

- `npm run lerna -- [command] [args]`: Run lerna commands.

  Useful if you don't have lerna installed globally. Supply commands and args after --.

- `npm run ci-publish`: Run by ci to publish the packages.

  This is run by github actions to publish new versions automatically.

- `npm run ci-test`: Run by ci when a branch is pushed.

  This is run by github actions to test in a branch.

### Commit messages

For automatic versioning to work correctly the [angular commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular#angular-convention) is used. In short, your commit message should look like this:

```
feat(use-hook-name): heading describing the change

longer message describing what has been done, if you want

footer, for example 'BREAKING CHANGE: something has been broken' or 'Closes #28'
```

`feat` indicates that a new feature has been added, and will result in a **minor version** bump. To make a **major version** bump, add `BREAKING CHANGE: <description>` at the bottom of the commit message. All other commits will be interpreted as **patch version** bumps.
