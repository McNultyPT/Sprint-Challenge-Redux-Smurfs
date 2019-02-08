<!-- 1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`? -->

1) In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is basically all of the state of data that takes in a single reducer. It's known as the 'single source of truth' because all of the data flows from there. Reducers are functions that essentially take an action and give us a new version of state based off of the current state. Actions are the information that we want sent to reducer. 

2) What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state generally holds state that will be passed down to other components, while Component state is state that is created in the Component. Component state would be used if you need to manage that state in the Component. For example, posting items to from a form Component would require the Component to hold the state.

3) Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is a middleware that allows us to use asynchronous requests. Basically, the middleware intercepts the flow of the action-creator. If a function is returned it will invoke it.
