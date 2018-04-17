import React from 'react';
import Bar from './Bar';

const Profile = ({ person }) => {
  const {displayPicture, name, skills} = person;
  if (person) {
    return (
      <div className='profile'>
        <img src={displayPicture} className='-img'/>
        <p>{name}</p>
        <div>
          <ul className='-skill-list'>
            {
              skills.map((skill, index) =>
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
