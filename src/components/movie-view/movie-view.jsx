import React from 'react';
import {Form, Button, Card, CardGroup, Container, Col, Row} from 'react-bootstrap';

class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container className='pt-5 mx-auto'>
        <Col>
          <Row>
            <Card>
              <Card.Img variant='top' src={movie.ImagePath} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
                <Button onClick={() => onBackClick(null)} variant='secondary'>Back</Button>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default MovieView;
