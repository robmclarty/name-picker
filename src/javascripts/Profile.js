import React from 'react';
import Bar from './Bar';

const Profile = ({ person }) => {
  if (person) {
    return (
      <div className='profile'>
        <img src={person.displayPicture} className='-img'/>
        <h2>{person.name}</h2>
        <div>
          <table className='-skill-list'>
            <tbody>
            {
              person.skills.map((skill, index) =>
                <tr key={index}>
                  <td><span>{skill[0]}</span></td>
                  <td><Bar value={skill[1]}/></td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }

}

export default Profile;
