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

### Pure Functions: The whole concept of a pure function is consistency and predictability.
  - Pure functions always return the same result given the same arguments.
  - Pure function's execution doesn't depend on the state of the application.
  - Pure functions don't modify the variables outside of their scope.

### PropTypes
- $ yarn add prop-types
- import PropTypes from 'prop-types'
```
Component.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}
```
- Whenever you build a component, you'll always want to specify the PropTypes for
the component because it'll warn you if you use a component incorrectly.
[Docs](https://facebook.github.io/react/docs/components-and-props.html)

### Quiz
  - Select all which are characteristics of a pure function
    - Doesn't depend on variables outside its scope
    - Doesn't modify variables outside its scope
    - Doesn't make Ajax requests
    - Doesn't manipulate the DOM
  - You access attributes that were passed to a component via this.attrs.ATTRIBUTE-NAME
    - false: this.props.ATTRIBUTE-NAME
  - You should treat props to a component as immutable
    - true
  - You should always add PropType validation to your component if that component is accepting props
    - true
