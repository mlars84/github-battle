import React, { Component } from 'react'
import Home from './Home'
import Battle from './Battle'
import Results from './Results'
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
          <Route exact path='/battle' component={ Battle } />
          <Route path='/battle/results' component={ Results } />
          <Route path='/popular' component={ Popular } />
        </div>
      </BrowserRouter>
    )
  }
}//end App

export default App
