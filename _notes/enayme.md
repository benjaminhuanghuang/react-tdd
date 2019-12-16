# Enzyme

## Tools
- enzyme: Made by AirBnb, specifically made to help test React components
- react-test-renderer: Enzyme requires react-test-renderer for React apps version 15.5 or greater
- enzyme-adapter-react-16: Needed to have enzyme work with React
- enzyme-to-json: customize how Jest serializes snapshots

```
$ npm i -D enzyme react-test-renderer enzyme-adapter-react-16
```

## Setup
For react testing, we need to create a setup file to setup enzyme adapter.

src/jest.setup.js

And mention setupFilesAfterEnv array in a jest.config.js:
```
  module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
  };
```
## 三种渲染方法

- shallow：浅渲染，是对官方的Shallow Renderer的封装。将组件渲染成虚拟DOM对象，只会渲染第一层，子组件将不会被渲染出来，使得效率非常高。不需要DOM环境， 并可以使用jQuery的方式访问组件的信息

- render：静态渲染，它将React组件渲染成静态的HTML字符串，然后使用Cheerio这个库解析这段字符串，并返回一个Cheerio的实例对象，可以用来分析组件的html结构

- mount：完全渲染，它将组件渲染加载成一个真实的DOM节点，用来测试DOM API的交互和组件的生命周期。用到了jsdom来模拟浏览器环境
