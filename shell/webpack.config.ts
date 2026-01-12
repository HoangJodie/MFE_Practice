import * as path from 'path';
import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/module-federation/webpack';

import baseConfig from './module-federation.config';

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(baseConfig, { dts: false }),
  (config: any) => {
    config.devServer = {
      ...(config.devServer || {}),
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
    };

    return config;
  }
);
