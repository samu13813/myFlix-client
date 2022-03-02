import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({ //props object must include a movie object. shape is an object
    Title: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MovieCard;
