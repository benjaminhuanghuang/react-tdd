## Webpack dependencies
```
    npm i -D webpack webpack-cli webpack-dev-server 
    npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-stage-2 babel-loader
```

- webpack: We need Webpack to bundle our code.

- webpack-cli: We will be using some CLI features for Webpack to make our life easier while writing some scripts.

- webpack-dev-server: Creating server. This is only meant to be used in the development environment, and not for production. 

- @babel/preset-env: This package behaves exactly the same as @babel/preset-latest (or @babel/preset-es2015, 

- @babel/preset-es2016, and @babel/preset-es2017 together)

- @babel/preset-react: This will add support for react while we bundle our code.

- @babel/preset-stage-2: This will add stage-2 feature of the Ecma TC39 proposal.

- @babel/loader: This is a dependency of Webpack. It allows transpiling Babel using Webpack.

- @babel/core: This is a dependency for the @babel/loader itself.


- html-webpack-plugin: It creates HTML files to serve your bundle file(s).


- style-loader: Adds CSS to the DOM by injecting style tag.

- css-loader: interprets @import and url() like import/require() and will resolve them

- sass-loader: compile SCSS to CSS.

- node-sass: sass-loader required node-sass as a peer dependency

- extract-text-webpack-plugin: moves all the required .css modules into a separate CSS file.

- ptimize-css-assets-webpack-plugin: uglify and minimize all our code to reduce the bundle size, used for prduction evn

- uglifyjs-webpack-plugin:  minimize and optimize CSS code, used for prduction evn
