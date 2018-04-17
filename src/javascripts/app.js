'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Container from './Container'

const makeNum = () => Math.floor(Math.random() * 10) + 1

const people = [
  {
    displayPicture: 'images/avatars/face1.jpg',
    name: 'David Cunningham',
    skills: [
      ['HTML', makeNum()],
      ['CSS', makeNum()],
      ['Javascript', makeNum()],
      ['Visual Design', makeNum()],
      ['Invision', makeNum()],
      ['Interaction Design', makeNum()]
    ]
  },
  {
    displayPicture: 'images/avatars/face2.jpg',
    name: 'Ann McCoy',
    skills: [
      ['HTML', makeNum()],
      ['CSS', makeNum()],
      ['Javascript', makeNum()],
      ['Visual Design', makeNum()],
      ['Invision', makeNum()],
      ['Interaction Design', makeNum()]
    ]
  },
  {
    displayPicture: 'images/avatars/face3.jpg',
    name: 'Mary Schuelke',
    skills: [
      ['HTML', makeNum()],
      ['CSS', makeNum()],
      ['Javascript', makeNum()],
      ['Visual Design', makeNum()],
      ['Invision', makeNum()],
      ['Interaction Design', makeNum()]
    ]
  },
  {
    displayPicture: 'images/avatars/face4.jpg',
    name: 'James Bell',
    skills: [
      ['HTML', makeNum()],
      ['CSS', makeNum()],
      ['Javascript', makeNum()],
      ['Visual Design', makeNum()],
      ['Invision', makeNum()],
      ['Interaction Design', makeNum()]
    ]
  },
  {
    displayPicture: 'images/avatars/face5.jpg',
    name: 'Don Tull',
    skills: [
      ['HTML', makeNum()],
      ['CSS', makeNum()],
      ['Javascript', makeNum()],
      ['Visual Design', makeNum()],
      ['Invision', makeNum()],
      ['Interaction Design', makeNum()]
    ]
  },
  {
    displayPicture: 'images/avatars/face6.jpg',
    name: 'Jennifer Scarlett',
    skills: [
      ['HTML', makeNum()],
      ['CSS', makeNum()],
      ['Javascript', makeNum()],
      ['Visual Design', makeNum()],
      ['Invision', makeNum()],
      ['Interaction Design', makeNum()]
    ]
  },
  {
    displayPicture: 'images/avatars/face7.jpg',
    name: 'Sudar Ganes',
    skills: [
      ['HTML', makeNum()],
      ['CSS', makeNum()],
      ['Javascript', makeNum()],
      ['Visual Design', makeNum()],
      ['Invision', makeNum()],
      ['Interaction Design', makeNum()]
    ]
  },
  {
    displayPicture: 'images/avatars/face8.jpg',
    name: 'Son Greenleaf',
    skills: [
      ['HTML', makeNum()],
      ['CSS', makeNum()],
      ['Javascript', makeNum()],
      ['Visual Design', makeNum()],
      ['Invision', makeNum()],
      ['Interaction Design', makeNum()]
    ]
  },
  {
    displayPicture: 'images/avatars/face9.jpg',
    name: 'Tina Tibbetts',
    skills: [
      ['HTML', makeNum()],
      ['CSS', makeNum()],
      ['Javascript', makeNum()],
      ['Visual Design', makeNum()],
      ['Invision', makeNum()],
      ['Interaction Design', makeNum()]
    ]
  },
  {
    displayPicture: 'images/avatars/face10.jpg',
    name: 'John Newton',
    skills: [
      ['HTML', makeNum()],
      ['CSS', makeNum()],
      ['Javascript', makeNum()],
      ['Visual Design', makeNum()],
      ['Invision', makeNum()],
      ['Interaction Design', makeNum()]
    ]
  }
];

ReactDOM.render(
  <Container people={people} />,
  document.getElementById('app-container')
)
