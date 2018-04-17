import React from 'react';

const Bar = ({value}) => {
  return (
    <div className='bar' style={{width: `${(value/10) * 100}px`}}/>
  )
}

export default Bar;
