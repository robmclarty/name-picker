import React from 'react';
import Bar from './Bar';

const Profile = (props) => {
  const {displayPicture, name, skills} = props.person;
  console.log(props);
  return (
    <div className='profile'>
      <img src={displayPicture}/>
      <p>{name}</p>
      <div>
        <ul>
          {
            skills.map((skill, index) =>
              <li key={index} className='-skill-list'>
                <span>{skill[0]}</span>
                <Bar value={skill[1]}></Bar>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Profile;
