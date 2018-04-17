import React from 'react'
import SuggestibleInput from 'suggestible-input'

const SearchInput = ({ people }) => {
  const names = people.map(person => person.name)

  return (
    <div className="search-input">
      <SuggestibleInput suggestions={names} />
    </div>
  )
}

export default SearchInput
