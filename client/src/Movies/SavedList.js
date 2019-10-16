import React from 'react';

const SavedList = props => {
  // function routeToMovie(props, movie) {
  //   props.history.push(`/movies/${movie.id}`);
  // };
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
    </div>
  );
}
export default SavedList;
