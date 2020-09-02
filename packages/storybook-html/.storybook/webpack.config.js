const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        }
      ],
    }, {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        {
          loader: 'css-loader',
          options: {
            url: true
          }
        },
        // Compiles Sass to CSS
        {
          loader: 'sass-loader',
          options: {
            // Prefer 'dart-sass' as it supports Sass Modules
            implementation: require('sass'),
            sourceMap: true,
            sassOptions: {
              outputStyle: mode == 'PRODUCTION' ? "compressed" : "expanded",
              // TODO: we should implement `glob` here:
              includePaths: [
                'node_modules/@uq-uidf/core/node_modules',
                'node_modules'
              ]
            }
          }
        }
      ]
    }
  );
  
  // Temporary workaround: https://github.com/storybookjs/storybook/issues/11255#issuecomment-673899817
  // Due to breaking change during Storybook v5.3 to v6.0 migration
  config.resolve.alias['core-js/modules'] = path.resolve(__dirname, '..', 'node_modules/core-js/modules');

  // Return the altered config
  return config;
};
