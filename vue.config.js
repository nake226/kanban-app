/* eslint-disable @typescript-eslint/no-var-requires */
const backend = require("./build/dev-server");
const config = require("./config/index");

module.exports = {
  devServer: {
    before: backend,
    proxy: config.dev.proxyTable
  }
};
