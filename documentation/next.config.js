const { name } = require('../package.json');

const production = process.env.NODE_ENV === "production";

module.exports = {
  basePath: production ? `/${name}` : '',
}