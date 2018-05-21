## Run ES6 with mocha
```
     "test:single":"mocha --compilers js:babel-core/register --require babel-polyfill \"tests/**/math_test.js\""
```


## enzyme render functions
- shallow() is the simplest form of rendering a component with Enzyme. It only renders the component but not the content of components which are children to this component. It makes it possible to test the component in isolation. Be used for component tests in isolation (unit tests, lightweight integration).

- mount() renders all child components as well. It renders the whole component hierarchy. 
It is used for **real** integration tests.

- render() is similar to mount(), it renders all child components. But from a performance point of view, it is less expensive than mount(), because it **doesn’t run the lifecycle methods** of the component. So if you need access to child components but are not interested in lifecycle methods, you can use render() instead of mount().

## Simulate UI evnet
```
    var subject = shallow(<Calculator />);
    subject.find('button').simulate('click');
    
    const resultText = subject.find('.result').text();
    expect(resultText).to.equal('2')
```

## Stub funciton
```
    var mockParseEquation = sinon.stub(math, "parseEquation"); 
    expect(mockParseEquation.calledOnce).to.be.true;
    expect(mockParseEquation.getCall(0).args[0]).to.equal('1 + 1');
```
Replaces object.method with a stub function. 