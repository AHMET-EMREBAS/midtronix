// const { NxWebpackPlugin } = require('@nx/webpack');
// const { join } = require('path');

// module.exports = {
//   output: {
//     path: join(__dirname, '../../dist/apps/api'),
//   },
//   plugins: [
//     new NxWebpackPlugin({
//       target: 'node',
//       compiler: 'tsc',
//       main: './src/main.ts',
//       tsConfig: './tsconfig.app.json',
//       assets: ['./src/assets'],
//       optimization: false,
//       outputHashing: 'none',
//       watch: true,
//     }),
//   ],
// };
const { composePlugins, withNx } = require('@nx/webpack');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  return config;
});
