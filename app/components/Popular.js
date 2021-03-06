import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'
import Loading from './Loading'

//Stateless Functional Component
const SelectLanguage = (props) => {
    let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

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

const RepoGrid = (props) => {
  console.log('props =>', props)
   return (
     <ul className="popular-list">
       {props.repos.map((repo, index) => {
         return (
           <li key={repo.name} className='popular-item'>
             <div className='popular-rank'>#{index + 1}</div>
             <ul className='space=list-items'>
                <li>
                  <img
                    className='avatar'
                    src={repo.owner.avatar_url}
                    alt={'Avatar for ' + repo.owner.login} />
                </li>
                <li><a href={repo.html_url}>{repo.name}</a></li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
             </ul>
           </li>
         )
       })}
     </ul>
   )
}//end ReposGrid function

RepoGrid.proptypes = {
  repos: PropTypes.array.isRequired
}//end RepoGrid PropTypes

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}//end SelectLanguage PropTypes

class Popular extends Component{
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }//end constructor method

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }//end componentDidMount

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      }
    })
    api.fetchPopularRepos(lang)
      .then(function (repos) {
        this.setState(() => {
          return {
            repos: repos
          }
        })
      }.bind(this))
  }//end updateLanguage

  render(){
    return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos
          ? <Loading />
          : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }//end render method
}//end Popular Component

export default Popular
