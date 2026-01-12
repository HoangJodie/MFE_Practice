import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/module-federation/webpack';
import baseConfig from './module-federation.config';

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(baseConfig),
  (config) => {
    const webpack = require('webpack');
    
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.VITE_API_BASE_URL': JSON.stringify(
          process.env['VITE_API_BASE_URL'] || 'http://localhost:3001/api'
        ),
      })
    );
    
    return config;
  }
);