/*
  From [Unit test api calls in React , Enzyme and Jest](https://medium.com/@manastunga/unit-testing-api-calls-in-react-enzyme-and-jest-133b87aaacb4)
*/

/*
Test 1: component must render a loading span before the success of api call
Test 2: Must render a paragraphtag with user name after the success of api call and hide the loading spans
*/

import React from "react";
import { shallow } from "enzyme";
import FetchData from "./fetch-data";

// mocking the api call with jest.fn()
beforeAll(() => {
  global.fetch = jest.fn();
  //window.fetch = jest.fn(); if running browser environment
});

let wrapper;

beforeEach(() => {
  /*
    { disableLifecycleMethods: true } prevents the shallow render to call react lifecycle events 
  like componentDidMount after the render
    As a result componentDidMount will not be called automatically after the shallow render and 
  we can test the existence of loading span before the success call of the api.
  */
  wrapper = shallow(<FetchData />, { disableLifecycleMethods: true });
});

afterEach(() => {
  wrapper.unmount();
});

it("must render a loading span before api call success", () => {
  expect(wrapper.find("span.spinner").exists()).toBeTruthy();
});


it("must show the p.user and hide the loading span after api call success",
  (done) => {
    // here we are spying on componentDidMount to know that it has been called
    const spyDidMount = jest.spyOn(FetchData.prototype, "componentDidMount");

    //mock implementation of the fetch call to the API
    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve({
            userName: "manas",
            userId: 1
          });
        }
      });
    });

    // Call the componentDidMount method manually of the wrapper instance object that return a promise as 
    // our componentDidMount is a async function.
    const didMount = wrapper.instance().componentDidMount();
    
    // expecting componentDidMount have been called
    expect(spyDidMount).toHaveBeenCalled();
    
    didMount.then(() => {
      // updating the wrapper
      // success of api call must have called the setState({user}) and that must have updated component.
      wrapper.update();

      expect(wrapper.find("p.user").text()).toContain("manas");
      expect(wrapper.find("spans.loading").length).toBe(0);
      
      spyDidMount.mockRestore();
      fetch.mockClear();

      //call the done() this tells the jest we are done with the async test.
      done();
    });
  });