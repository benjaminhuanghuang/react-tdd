## Jest projet structure


## Config Jest tests
[Configuring Jest](https://jestjs.io/docs/en/configuration)

~~Create a file called setupTests.js under /src folder.~~

~~And mention this file in package.json~~

```
"jest": {
    "setupTestFrameworkScriptFile": "src/setupTests.js"
}
```
For react testing, we use this setup file to setup enzyme adapter

Note: setupTestFrameworkScriptFile is deprecated in favor of setupFilesAfterEnv.
(https://jestjs.io/docs/en/configuration)

Create a file like src/jest.setup.js

And mention setupFilesAfterEnv array in a jest.config.js:
```
  module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
  };
```
jest runs this setup file file before each test


To the project using "react-scripts", put 'jest' config node into package.json will cause error:
```
We detected setupFilesAfterEnv in your package.json.

Remove it from Jest configuration, and put the initialization code in src/setupTests.js.
This file will be loaded automatically.
```
## Jest API
- describe(name, fn)：描述块，讲一组功能相关的测试用例组合在一起
- it(name, fn, timeout)：别名test，用来放测试用例

- afterAll(fn, timeout)：所有测试用例跑完以后执行的方法
- beforeAll(fn, timeout)：所有测试用例执行之前执行的方法
- afterEach(fn)：在每个测试用例执行完后执行的方法
- beforeEach(fn)：在每个测试用例执行之前需要执行的方法

全局和describe都可以有上面四个周期函数，describe的after函数优先级要高于全局的after函数，describe的before函数优先级要低于全局的before函数

## Code snippets
```
beforeAll(() => {
  console.log('global before all');
});

afterAll(() => {
  console.log('global after all');
});

beforeEach(() =>{
  console.log('global before each');
});

afterEach(() => {
  console.log('global after each');
});

describe('test1', () => {
  beforeAll(() => {
    console.log('test1 before all');
  });
  
  afterAll(() => {
    console.log('test1 after all');
  });
  
  beforeEach(() => {
    console.log('test1 before each');
  });
  
  afterEach(() => {
    console.log('test1 after each');
  });
  
  it('test sum', () => {
    expect(sum(2, 3)).toEqual(5);
  });
  
  it('test mutil', () => {
    expect(sum(2, 3)).toEqual(7);
  });
  
});
```