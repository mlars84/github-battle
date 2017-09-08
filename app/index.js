import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from 'index'

class App extends React {
  render(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
