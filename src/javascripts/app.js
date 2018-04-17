'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Profile from './Profile.js'
import SearchInput from './SearchInput.js'

const people = [
  {
    name: "Rob",
    dev: 5,
    talk: 1,
    ux: 2
  }
]

ReactDOM.render(
  <div>
    <Profile people={people} person={peron} />
    <SearchInput people={people} />
  </div>,
  document.getElementById('app-container')
)
