import React from 'react'

import Profile from './Profile.js'
import SearchInput from './SearchInput.js'

const Container = (props, context) => {
  const component = { ...React.Component.prototype }

  Container.defaultProps = {
    people: []
  }

  const initialState = {
    selectedPerson: null
  }

  const choosePerson = name => {
    const selectedPerson = component.props.people.find(person => person.name === name)

    component.setState({ selectedPerson })
  }

  const render = () => (
    <div className="name-picker">
      <h1>Burrow</h1>
      <SearchInput choosePerson={choosePerson} people={component.props.people} />
      <Profile person={component.state.selectedPerson} />
    </div>
  )

  return Object.assign(component, {
    props,
    state: initialState,
    choosePerson,
    render
  })
}

export default Container
