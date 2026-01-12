import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'products',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (libraryName, defaultConfig) => {
    // Ensure React libs and our shared lib are singletons to avoid duplicate React instances
    if (libraryName === 'react' || libraryName === 'react-dom' || libraryName === '@org/shared') {
      return {
        ...defaultConfig,
        singleton: true,
        strictVersion: false,
        requiredVersion: false,
      };
    }

    return defaultConfig;
  },
};

export default config;