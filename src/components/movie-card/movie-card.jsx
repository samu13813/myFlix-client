import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Container, Row} from 'react-bootstrap/';



class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Container className='mx-auto w-50 mt-3'>
        <Row className='d-block'>
          <Card className='mx-auto'>
            <Card.Body>
              <Card.Img variant='pr-2 mb-2 w-25' src={movie.ImagePath} />
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <Button size='lg' onClick={() => onMovieClick(movie)} variant='secondary'>Open</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({ //props object must include a movie object. shape is an object
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MovieCard;
