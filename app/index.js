import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './index.css'

class App extends Component {
  render(){
    return (
      <div>
        Hello React Training vids!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
