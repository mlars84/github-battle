import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Stateless Functional Component
function SelectLanguage (props) {
  console.log('props =>', props)
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <ul className='languages'>
        {languages.map((lang) => {
          return (
            <li
              style={lang === props.selectedLanguage ? {color: '#d0021b'}: null}
              onClick={props.onSelect.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
}//end SelectLanguage class

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}//end PropTypes

class Popular extends Component{
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }//end constructor method

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
    })
  }//end updateLanguage

  render(){
    return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }//end render method
}//end Popular class

export default Popular
