# React Js

## React Hooks

  * <https://coderpad.io/blog/development/rules-of-react-hooks/>

## States

What is state?

In React, state is a JavaScript object that stores a component's dynamic data and determines the component's behavior. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.

  * <https://www.w3schools.com/react/react_state.asp>
  
## Effects

In React, effect is a function that is called after every render. It is used to perform side effects in function components. Side effects are actions that don't directly relate to the component's rendering. For example, side effects can be API calls, manipulating the DOM, and setting up event listeners.

  * reference: [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)

To understand it more, we need to know the structure of a React component function which consists of two parts:
```
function MyComponent() {
   // part 1: top level of the component
   // the collection of codes other than return 

   // part 2: not top level of the component
   return (
      // JSX
   )
}
```

Top level codes can be divided into further two parts:

  * Rendering code part: the codes that keep returning jsx from failing.
  * effect part: the part that, if removed, will not cause return jsx to fail.

### Examples

#### Fetch data from API

Consider the following code from week15 src/App.jsx:
<https://github.com/tpemartin/econWish/blob/af35a85ea520ceca3e0c625f35fa554d0baec8f0/src/App.jsx#L18-L24>

  * Remove the entire block will not cause the return jsx to fail. (only lock the jsx to its `<div>Loading...</div>` state)

Therefore, the entire block is the effect part.

## useEffect

  * <https://react.dev/reference/react/useEffect>

## Lifecycle of a React Component

  * <https://www.w3schools.com/react/react_lifecycle.asp>

# Unmount React components

  * <https://stackoverflow.com/questions/51708436/how-to-unmount-a-component-in-react>

To remove a react component, we can use `ReactDOM.unmountComponentAtNode()`.
