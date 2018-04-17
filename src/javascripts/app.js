'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Profile from './Profile.js'
import SearchInput from './SearchInput.js'

const people = [
  {
    displayPicture: 'https://media.licdn.com/dms/image/C4E03AQGtNUSpc-Jcjw/profile-displayphoto-shrink_800_800/0?e=1529172000&v=beta&t=hrX1a6H6qsU2f0kvufeEgp7ZiIzFybYn5HOPPO0yn1w',
    name: 'Sudar Ganes',
    skills: {
      dev: [
        {html: 5},
        {css: 10},
        {javaScript: 10}
      ],
      design: [
        {visualDesign: 9},
        {invision: 8},
        {interactionDesign: 10}
      ]
    }
  }
]

const person = {
  displayPicture: 'https://media.licdn.com/dms/image/C4E03AQGtNUSpc-Jcjw/profile-displayphoto-shrink_800_800/0?e=1529172000&v=beta&t=hrX1a6H6qsU2f0kvufeEgp7ZiIzFybYn5HOPPO0yn1w',
  name: 'Sudar Ganes',
  skills: [
    ['html', 5],
    ['css', 10],
    ['javaScript', 10],
    ['visualDesign', 9],
    ['invision', 8],
    ['interactionDesign', 10]
  ]
}


ReactDOM.render(
  <div>
    <Profile person={person} />
    <SearchInput people={people} />
  </div>,
  document.getElementById('app-container')
)
