System.config({
  "baseURL": "js",
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "typescriptOptions": {
    "noImplicitAny": false
  },
  "paths": {
    "github:*": "js/jspm_packages/github/*",
    "npm:*": "js/jspm_packages/npm/*"
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

