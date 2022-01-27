import React from 'react';
import Gatorade from './Gatorade';


export default function GatoradeList(props) {
  return <div className='gatorade-list'>
    { props.gatorades.map((gatorade, i) =>
      <Gatorade key={`${gatorade}-${i}`} gatorade={gatorade}/>)
    }
  </div>;
}

