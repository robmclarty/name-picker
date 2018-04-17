'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Profile from './Profile.js'
import SearchInput from './SearchInput.js'

const people = [
  {
    displayPicture: 'images/avatars/face1.jpg',
    name: 'David Cunningham',
    skills: [
      ['html', 5],
      ['css', 10],
      ['javaScript', 10],
      ['visualDesign', 9],
      ['invision', 8],
      ['interactionDesign', 10]
    ]
  },
  {
    displayPicture: 'images/avatars/face2.jpg',
    name: 'Ann McCoy',
    skills: [
      ['html', 5],
      ['css', 10],
      ['javaScript', 10],
      ['visualDesign', 9],
      ['invision', 8],
      ['interactionDesign', 10]
    ]
  },
  {
    displayPicture: 'images/avatars/face3.jpg',
    name: 'Mary Schuelke',
    skills: [
      ['html', 5],
      ['css', 10],
      ['javaScript', 10],
      ['visualDesign', 9],
      ['invision', 8],
      ['interactionDesign', 10]
    ]
  },
  {
    displayPicture: 'images/avatars/face4.jpg',
    name: 'James Bell',
    skills: [
      ['html', 5],
      ['css', 10],
      ['javaScript', 10],
      ['visualDesign', 9],
      ['invision', 8],
      ['interactionDesign', 10]
    ]
  },
  {
    displayPicture: 'images/avatars/face5.jpg',
    name: 'Don Tull',
    skills: [
      ['html', 5],
      ['css', 10],
      ['javaScript', 10],
      ['visualDesign', 9],
      ['invision', 8],
      ['interactionDesign', 10]
    ]
  },
  {
    displayPicture: 'images/avatars/face6.jpg',
    name: 'Jennifer Scarlett',
    skills: [
      ['html', 5],
      ['css', 10],
      ['javaScript', 10],
      ['visualDesign', 9],
      ['invision', 8],
      ['interactionDesign', 10]
    ]
  },
  {
    displayPicture: 'images/avatars/face7.jpg',
    name: 'Sudar Ganes',
    skills: [
      ['html', 5],
      ['css', 10],
      ['javaScript', 10],
      ['visualDesign', 9],
      ['invision', 8],
      ['interactionDesign', 10]
    ]
  },
  {
    displayPicture: 'images/avatars/face8.jpg',
    name: 'Son Greenleaf',
    skills: [
      ['html', 5],
      ['css', 10],
      ['javaScript', 10],
      ['visualDesign', 9],
      ['invision', 8],
      ['interactionDesign', 10]
    ]
  },
  {
    displayPicture: 'images/avatars/face9.jpg',
    name: 'Tina Tibbetts',
    skills: [
      ['html', 5],
      ['css', 10],
      ['javaScript', 10],
      ['visualDesign', 9],
      ['invision', 8],
      ['interactionDesign', 10]
    ]
  },
  {
    displayPicture: 'images/avatars/face10.jpg',
    name: 'John Newton',
    skills: [
      ['html', 5],
      ['css', 10],
      ['javaScript', 10],
      ['visualDesign', 9],
      ['invision', 8],
      ['interactionDesign', 10]
    ]
  }
];

ReactDOM.render(
  <div className="name-picker">
    <SearchInput people={people} />
    <Profile person={people[0]} />
  </div>,
  document.getElementById('app-container')
)
