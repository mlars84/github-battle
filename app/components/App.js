import React, { Component } from 'react'
import Home from './Home'
import Battle from './Battle'
import Popular from './Popular'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav'


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className='container'>
          <Nav />
          <Route exact path='/' component={ Home } />
          <Route path='/battle' component={ Battle } />
          <Route path='/popular' component={ Popular } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
