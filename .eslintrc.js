module.exports = {
  "root": true,
  "extends": "standard",
  "parser": "babel-eslint",
  "env": {
    "mocha": true
  },
  "plugins": [
  ],
  "globals": {
    "_": true,
    "sails": true,
    "VError": true,
    "ERROR_CODES": true,
    "ERROR_PAYLOADS": true,
    "UtilService": true
  },
  "rules": {
    "no-useless-return": "off",
    "indent.ignoreComments": true
  }
};