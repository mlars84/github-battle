import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './index.css'
import PropTypes from 'prop-types'

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 200, height: 200}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

ReactDOM.render(
  <Badge
    name='Matt Larson'
    username='mlars84'
    img='https://avatars2.githubusercontent.com/u/25191578?v=4&s=460'
  />,
  document.getElementById('root')
);

// class App extends Component {
//   render(){
//     return (
//       <div>
//         Hello React Training vids!
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
