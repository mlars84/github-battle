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
### `this` keyword
- `this` allows us to reuse functions with different context
- Four types of binding:
  - implicit binding
  - explicit binding
  - new binding
  - window binding

### Implicit
- Where is this function invoked?

```
sayName = (name) => {
  console.log('Hello ' + name)
}

sayName('Matt')
```


- this is similar to an argument in that you won't know what it is
- until it is invoked. aka name from sayName()

- Implicit binding
- Left of the dot at Call Time

```
let me = {
  name: 'Matt',
  age: 33,
  sayName: function(){
    console.log(this.name)
  }
}

me.sayName()
```
- we have the function invokation (sayName()) and if we look to the left of
- the dot (me) it's as if we did me.name

```
sayNameMixin = (obj) => {
   obj.sayName = function(){
     console.log(this.name)
   }
}

let me2 = {
  name: 'Matt',
  age: 33
}

let you = {
  name: 'Emily',
  age: 35
}

sayNameMixin(me2)
sayNameMixin(you)

me2.sayName()
you.sayName()

let Person = (name, age) => {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(this.name)
    },
    mother: {
      name: 'Vicky',
      sayName: function() {
      console.log(this.name)
    }
    }
  }
}

let Jim = Person('Jim', 42)

Jim.sayName()
Jim.mother.sayName()
```
### Explicit
- .call(), .apply(), .bind()

- .call()
```
let sayName = function() {
    console.log('My name is ' + this.name + '. I am ' + this.age + ' years old.' )
  }

let stacey = {
  name: 'Stacey',
  age: 34
}
sayName.call(stacey)
```
- .apply() is the same thing, but instead of passing in arguments one by one,
you can pass in an array of arguments and it parses it for us.

- .bind() is similar to .call(), except returns a new function instead of invoking
the original.

- They all let us explicitly state what the `this` keyword is going to be in any
given function.

### `new` binding
- `new` keyword binding - new binding rule states that when a function is invoked with the new keyword
- the this keyword inside that function is bound to the new object being constructed

```
var Animal = function(color, name, type){
  //this = {}
  this.color = color
  this.name = name
  this.type = type
}

var zebra = new Animal('black and white', 'Gerald', 'Zebra')
console.log(zebra)
```

### `window` binding
- if no other rules apply, then the `this` key word is going to default to the window object,
- unless you're in strict mode and then it's going to be undefinied.

```
var sayAge = function() {
  console.log(this.age)
}

var me = {
  age: 33
}

sayAge()
```
