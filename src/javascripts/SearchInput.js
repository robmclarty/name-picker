import React from 'react'
import SuggestibleInput from 'suggestible-input'

const SearchInput = ({
  people,
  choosePerson
}) => {
  const names = people.map(person => person.name)

  const onChoose = name => {
    choosePerson(name)
  }

  return (
    <div className="search-input">
      <SuggestibleInput
          suggestions={names}
          onChoose={onChoose}
          placeholder="Choose a name..."
          clearOnSelect={true}
      />
    </div>
  )
}

export default SearchInput
