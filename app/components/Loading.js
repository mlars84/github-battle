import React, { Component } from 'react'
import PropTypes from 'prop-types'

let styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

class Loading extends Component {
  constructor (props) {
    super (props)

    this.state = {
      text: props.text
    }
  }

  componentDidMount () {
    let stopper = this.props.text + '...'
    this.interval = window.setInterval(function () {
      if (this.state.text === stopper) {
        this.setState(() => {
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState((prevState) => {
          return {
            text: prevState.text + '.'
          }
        })
      }
    }.bind(this), this.props.speed )
  }//end componentDidMount

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }//end componentWillUnmount

  render () {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}//end Loading

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

export default Loading
