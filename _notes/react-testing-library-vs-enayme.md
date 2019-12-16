## Reference
[Difference between enzyme and react-testing-library](https://techdoma.in/tutorial/difference-between-enzyme-and-react-testing-library/)


## Install React Testing Library





- In Enzyme, you need to configure the adapter to make it work with Reac 16. In React Testing Library, there is not much setup required

- in Enzyme, you have methods to check the state property of the class, check what props are being passed to the component

React Testing Library does not have methods to test the state or props. Instead, it tests the dom, which is what the user is interacting with.

- In Enzyme, you have the forceUpdate method to re-render the component. 
In React Testing Library, you do not have any such methods. Instead, it tests only using the DOM

- In React Testing Library, you do not have direct methods to test the instance of the component. So there is no deep or shallow rendering of the component in React Testing Library.