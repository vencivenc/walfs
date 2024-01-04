const CracoLessPlugin = require("craco-less");

module.exports = {
  devServer: {
    port: 9000,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};
