import React from 'react';

export default function BFF(props) {
  return <div className='BFF'>
    <p>{props.name}</p>
    <p>{props.age}</p>
    <p>{props.favoriteFood}</p>
  </div>;
}
