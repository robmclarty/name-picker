import React from 'react';
import Bar from './Bar';

const Profile = ({ person }) => {
  if (person) {
    return (
      <div className='profile'>
        <img src={person.displayPicture} className='-img'/>
        <p>{person.name}</p>
        <div>
          <ul className='-skill-list'>
            {
              person.skills.map((skill, index) =>
                <li key={index}>
                  <span>{skill[0]}</span>
                  <Bar value={skill[1]}/>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  } else {
    return <div>Type to search!</div>
  }

}

export default Profile;
