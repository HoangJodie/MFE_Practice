const baseConfig = require('../.eslintrc.json');

module.exports = [
  ...baseConfig,
  {
    ignores: ['**/out-tsc'],
  },
];
