const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

// Note: this can optionally contain two fields:
// - test: A regex used to match the files, defaults to: /\.js($\\|\?)/i
// - prepack: An object containing the prepack configuration.
const prepackPluginConfig = {};

module.exports = function override(config, env) {
  config.plugins.push(new PrepackWebpackPlugin(prepackPluginConfig));
  return config;
}
