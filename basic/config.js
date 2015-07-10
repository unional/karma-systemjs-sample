System.config({
    "baseURL": "base",
    "defaultJSExtensions": true,
    "transpiler": "typescript",
    "typescriptOptions": {
        "noImplicitAny": false
    },
    "paths": {
        "github:*": "jspm_packages/github/*"
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

