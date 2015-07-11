System.config({
  "baseURL": "src",
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "typescriptOptions": {
    "noImplicitAny": false
  },
  "paths": {
    "github:*": "../jspm_packages/github/*",
    'systemjs': '../jspm_packages/system.js',
    "system-polyfills": "../jspm_packages/system-polyfills.js",
    "es6-module-loader": "../node_modules/es6-module-loader/dist/es6-module-loader.js"
  }
});

System.config({
  "map": {
    "ts": "github:frankwallis/plugin-typescript@2.0.1",
    "typescript": "github:mhegazy/typescript@v1.5-beta2",
    "github:frankwallis/plugin-typescript@2.0.1": {
      "typescript": "github:mhegazy/typescript@v1.5-beta2"
    }
  }
});

