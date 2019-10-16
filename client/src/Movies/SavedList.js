import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieList from './MovieList';

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

      <NavLink to="/" activeClassName="activeNavButton">Home</NavLink>
    </div>
  );
}
export default SavedList;
