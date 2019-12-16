
## jest配置简单
它会自动识别一些常用的测试文件pattern，比如__test__ 、*.spec.js、 *.test.js等。
```
 "scripts": {
    "test": "jest"
  },
  "jest": {
    "testEnvironment": "node"
  }
```
testEnvironment这个配置是对于nodejs项目是必须的，如果不配置，在async的单元测试中如果抛出异常，则系统不会立刻停止，而只会超时，并且不会定位错误位置。


## Jest 可以省略describe
在mocha中我们必须要describe，比如：
descibe('suiteA', () => {
  before(() => {})
  it('testA', () => {
  })
  it('testA', () => {
  })
) 
可是文件已经把一个个suite分开，为什么还要describe，所以jest可以省略describe，如下：

```
beforeAll(() => {})
it('testA', () => {
})
it('testA', () => {
})
```

## Jest 内置 expect
```
it('make sure transform works', () => {
  const input = `{
    "name": "ron",
    "job": "programmer",
    "tags": ["javascript", "functional programming"],
  }` 
  const expectedOutput = `
    <user><name>ron</><job>programmer<job/><tags><tag>javascript</tag><tag>functional programmer</tags></tags></user>
  `
  expect(jsonToXml(input)).toEqual(expectedOutput)
})
```

## Jest 支持babel
yarn add jest-babel

