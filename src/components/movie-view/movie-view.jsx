import React from 'react';
import { Button, Card, Container, Col, Row } from 'react-bootstrap';

class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container>
        <Col>
          <Row className='d-block'>
            <Card className='mt-3'>
              <Card.Body>
                <Card.Img className='pr-2 mb-2 w-25 float-left' src={movie.ImagePath} />
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
                <Button className='mt-5 mb-0' onClick={() => onBackClick(null)} variant='secondary'>Back</Button>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default MovieView;
