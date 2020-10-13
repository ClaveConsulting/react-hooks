const { name } = require('../package.json');
const path = require('path');

const production = process.env.NODE_ENV === "production";

module.exports = {
  basePath: production ? `/${name}` : '',
  webpack(config) {
    //make sure we can import demo from the packages
    config.module.rules[0].include.push(path.join(__dirname, "../hooks"));

    config.module.rules[1].oneOf[2].issuer = {
      or: [
        __dirname,
        path.join(__dirname, "../hooks")
      ],
      not: [/node_modules/]
    }
    console.dir(config.module.rules[1].oneOf, { depth: 5 });

    return config;
  }
}