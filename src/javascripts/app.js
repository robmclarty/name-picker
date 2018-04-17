'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Profile from './Profile.js'
import SearchInput from './SearchInput.js'

const people = [
  {
    displayPicture: 'images/avatar/face1.jpg',
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
    displayPicture: 'images/avatar/face2.jpg',
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
    displayPicture: 'images/avatar/face3.jpg',
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
    displayPicture: 'images/avatar/face4.jpg',
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
    displayPicture: 'images/avatar/face5.jpg',
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
    displayPicture: 'images/avatar/face6.jpg',
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
    displayPicture: 'images/avatar/face7.jpg',
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
    displayPicture: 'images/avatar/face8.jpg',
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
    displayPicture: 'images/avatar/face9.jpg',
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
    displayPicture: 'images/avatar/face10.jpg',
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
  displayPicture: 'images/avatar/face1.jpg',
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
