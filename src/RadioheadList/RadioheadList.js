import React from 'react';
import Radiohead from './Radiohead';

export default function RadioheadList(props) {
  return <div>
    {
      props.radioheadAlbums.map((album, i) => <Radiohead key={i}
        {...album} />
      )}
    
  </div>;
}

