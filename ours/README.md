# Our translation project

This folder contains a pre-configured react project. Our **typescript and styles** go in `src/`. Our **assets** (images, css we didn't write, fonts) go in `public/`.

## Files

The files here are mostly bookkeeping and project configuration, but it's handy to know what they are and what they do.

### `package.json`

Arguably the file that defines the project. It started out as a way to list which packages (also known as dependencies) your project uses, but it has grown into more of a project definition file. It is a `json` file, which means it has to be in a very specific format.

The main way to interact with `package.json` is through package managers like `npm` or `yarn`. We'll be using `yarn` for this project.

```json
{
  "name": "defines the name of the project/package",
  "private": true, // this means the project can never accidentally be published through npm/yarn
  "dependencies": {
    // everything inside of dependencies is required RUN the project
    "react": "^17.0.1", // we're using react version 17.0.1 or higher
    "react-dom": "^17.0.1" // also react-dom
  },
  "devDependencies": {
    // everything in devDependencies is required to BUILD or DEVELOP the project

    // anything that starts with a @ means it's from an organization

    // snowpack is our build tool
    "@snowpack/plugin-react-refresh": "^2.4.0",

    // @types are typescript type definitions
    "@types/react": "^17.0.0",

    // @typescript-eslint is eslint for typescript
    "@typescript-eslint/eslint-plugin": "^4.14.1",

    // eslint is a linter. it helps with style and some correctness
    "eslint": "^7.18.0"
  },
  "scripts": {
    // scripts are small command line scripts. you can think of them as aliases
    // when you say `yarn start` on the command line, it will run `yarn snowpack dev` for you
    "start": "snowpack dev"
  }
}
```

There's more that can go into package.json, which we might get to eventually!

### `yarn.lock`

`yarn.lock` is a lock file. It contains the exact versions of every dependency being used. It allows us to have deterministic installs, meaning that everything will be installed the same way every time. This eliminates a surprisingly large class of bugs.

### `.eslintrc.js`

Any file that starts with a `.` is a hidden file on a unix system. Instead of going into the file properties and marking it hidden, they can just add the `.` to the front of the name. In projects like this, files that start with `.` are usually configuration files of some sort, and `.eslintrc.js` is no exception.

`eslint` is a tool that helps us catch mistakes in javascript and typescript. It checks our code against a set of rules and recommendations, and will warn us when we're making what we've defined as a mistake. We define what rules and recommendations we care about in this configuration file.

### `.eslintignore`

This file tells eslint to ignore certain things within our project. Most notably, we tell it not to go into the `node_modules` folder, where our dependencies are stored/installed. That's not our code, we don't want to waste time linting it.

### `.stylelintrc.json`

`.stylelintrc.json` is another configuration file, this time for `stylelint`. `stylelint` is like `eslint`. It's another linter, but this time for css and css-like languages. We're using it for sass/scss.

### `tsconfig.json`

This is our configuration file for typescript, which is the language we'll be writing instead of javascript. The typescript compiler/transpiler takes several options, which are all defined here. 

Some of the important ones:

- `include`: which files to transpile from typescript to javascript
- `strict`: turns on strict mode, which means typescript will complain about `null`, `undefined`, and several other potential bugs.
- `allowSyntheticDefaultImports`: allows us to say `import React from 'react';` instead of the more verbose `import * as React from 'react';`

### `snowpack.config.js`

This is the configuration file for snowpack, our build system. Snowpack wrangles the process of getting from a bunch of `.tsx` files containing react code into a useful `index.html` file. It also adds some handy features like hot module reloading (so you don't need to refresh the page to see changes) and sass/scss imports (so we don't need to worry about `<link>` tags, and so our styles get the benefit of HMR).