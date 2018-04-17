'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Profile from './Profile.js'
import SearchInput from './SearchInput.js'

const people = [
  {
    displayPicture: 'images/avatars/face1.jpg',
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
  },
  {
    displayPicture: 'images/avatars/face2.jpg',
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
  },
  {
    displayPicture: 'images/avatars/face3.jpg',
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
  },
  {
    displayPicture: 'images/avatars/face4.jpg',
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
  },
  {
    displayPicture: 'images/avatars/face5.jpg',
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
  },
  {
    displayPicture: 'images/avatars/face6.jpg',
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
  },
  {
    displayPicture: 'images/avatars/face7.jpg',
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
  },
  {
    displayPicture: 'images/avatars/face8.jpg',
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
  },
  {
    displayPicture: 'images/avatars/face9.jpg',
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
  },
  {
    displayPicture: 'images/avatars/face10.jpg',
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
  displayPicture: 'images/avatars/face1.jpg',
  name: 'Sudar Ganes',
  skills: [
    ['html', 5],
    ['css', 10],
    ['JavaScript', 10],
    ['Visual Design', 9],
    ['Invision', 8],
    ['Interaction Design', 10]
  ]
}


ReactDOM.render(
  <div>
    <Profile person={person} />
    <SearchInput people={people} />
  </div>,
  document.getElementById('app-container')
)
