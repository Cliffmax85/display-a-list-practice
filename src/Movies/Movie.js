import React from 'react';

export default function Movie({
  title,
  stars,
  boxOffice,
  director
}) {
  return <div>
    <h2>Title: {title}</h2>
    <h3>Stars: {stars}</h3>
    <h3>Director: {director.firstName} {director.lastName}</h3>
    <h3>Box Office: {boxOffice}</h3>

  </div>;
}

