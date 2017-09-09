# Github Battle app built
- following Tyler McGinnis tutorial

## Getting Start
- $ yarn install

## Built With
- React, Babel, Webpack.

## Acknowledgments
- Tyler McGinnis, React team

## Notes
- The way you set what the UI is going to look like for a specific component is
with `render()`.
- a React element describes what you want to see on the screen.
- A `component` is a function or a `Class` which optionally accepts input and
returns a React element.
- JSX is always going to get transpiled to React.createElement invocations
(typically) via Babel.
- just like functions, we do not know what the props (like arguments) of a component
will be until that component is used and the props are passed in.
- `this` inside of a component refers to the specific component instance
- and the instance has a property of `props`, which has anything you've passed in
as an attribute to the component.
- 
