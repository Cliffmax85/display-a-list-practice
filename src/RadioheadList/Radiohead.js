import React from 'react';

export default function Radiohead({
  title,
  totalSongs,
  songs

}) {
  return <div>
    <h2>{title}</h2>
    <h3>{totalSongs}</h3>
    {
      songs.map((song, i) => <p key={song + i}>{song}</p>)
    }


  </div>;
}

