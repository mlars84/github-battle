import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1>
          GitHub Battle: Go head-to-head against your friends!
        </h1>
        <Link className='button' to='/battle'>
          Battle
        </Link>
      </div>
    )
  }
}//end Home

export default Home
