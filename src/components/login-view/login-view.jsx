import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Card, CardGroup, Container, Col, Row} from 'react-bootstrap';
import './login-view.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // Send a request to the server for authentication
    // then call props.onLoggedIn(username)
    props.onLoggedIn(username);
  };

  return (
    <Container className='pt-5 mx-auto'>
      <Row>
        <Col>
          <CardGroup>
            <Card>
            <Card.Body>
              <Card.Title>Log In</Card.Title>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control type='text' placeholder='Enter your Username' required onChange={e => setUsername(e.target.value)} required />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type='password' placeholder='Enter your Password' required onChange={e => setPassword(e.target.value)} required />
                </Form.Group>

                <Button variant='primary' type='submit' onClick={handleSubmit}>
                  Submit
                </Button>

              </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};
