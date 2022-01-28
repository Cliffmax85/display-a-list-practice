import React from 'react';
import BFF from './BFFs';

export default function BFFsList(props) {
  return <div className='BFFsList'>
    { props.BFFs.map((bff, i) => <BFF key={i}
      {...bff}/>)
    }
  </div>;
}
