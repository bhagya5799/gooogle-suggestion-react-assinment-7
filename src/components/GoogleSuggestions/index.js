// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateFinalValue = suggestion => {
    const {suggestionsList} = this.props
    this.setState({searchInput: suggestion})
  }

  onChangeSearchInput = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
    console.log(searchInput)
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggesion =>
      eachSuggesion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="google-items-container">
          <div className="input-container">
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              placeholder="Search google"
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
          </div>
          <ul className="items-container">
            {searchResults.map(eachItem => (
              <SuggestionItem
                details={eachItem}
                key={eachItem.id}
                updateFinalValue={this.updateFinalValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
