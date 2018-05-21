## Run ES6 with mocha
```
     "test:single":"mocha --compilers js:babel-core/register --require babel-polyfill \"tests/**/math_test.js\""
```


## enzyme render functions
- shallow: 

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