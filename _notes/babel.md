## Dependencies
```
    npm i babel-cli babel-core babel-prest-env babel-prest-react babel-prest-statge-2 -D
```

## .babelrc
```
    {
    "presets": ["env", "react", "stage-2"]
    }
```
- env preset implicitly includes babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 together, which means you can run ES6, ES7, and ES8 code.

- stage-2 allows us to utilize the JavaScript features that are currently at Stage 2 or later in the process.