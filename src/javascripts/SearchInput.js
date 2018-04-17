import React from 'react'
import SuggestibleInput from 'suggestible-input'
//import SuggestibleInput from '../../../tool-boxes/suggestible-input/src/suggestible-input.js'

var suggestions = [
  'Toronto',
  'Montreal',
  'Ottawa',
  'Vancouver',
  'Edmonton',
  'Calgary'
]

const SearchInput = ({ people }) => (
  <div className="search-input">
    <SuggestibleInput suggestions={suggestions} />
  </div>
)

export default SearchInput
