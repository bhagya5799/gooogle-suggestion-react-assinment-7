// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, googleSuggestion} = props
  const {suggestion, id} = details
  const onClickArrow = () => {
    googleSuggestion(id)
    console.log('ll')
  }

  return (
    <li className="suggestItem-cart">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickArrow}
      />
    </li>
  )
}
export default SuggestionItem
