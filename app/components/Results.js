import React, { Component } from 'react'
import queryString from 'query-string'
import api from '../utils/api.js'

class Results extends Component {
  componentDidMount () {
    let players = queryString.parse(this.props.location.search)

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((results) => {
      console.log('results', results)
    })
  }
  render() {
    return (
      <div>Results</div>
    )
  }
}//end Results

export default Results
