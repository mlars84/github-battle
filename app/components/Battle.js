import React, { Component } from 'react'

class Battle extends Component {
  constructor(props){
    super(props)

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
    this.handleSumbit = this.handleSumbit.bind()
  }
  handleSumbit(id, username) {
    this.setState(function() {
      let newState = {}
      newtate[id + 'Name'] = username
      newState[id + 'Image'] = 'https://www.github.com/' + username + '.png?size=200'
      return newState
    })
  }
  render() {
    return (
      <div className='battle-container'>
        <div>
          <h1>
            Battle page
          </h1>
        </div>
      </div>
    )
  }
}

export default Battle
