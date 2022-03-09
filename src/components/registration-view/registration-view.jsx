import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Card, CardGroup, Container, Col, Row} from 'react-bootstrap';
import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.onRegistration(username);
  };

  return (
    <Container className='pt-5 mx-auto'>
      <Row>
        <Col>
          <CardGroup>
            <Card>
            <Card.Body>
              <Card.Title>Please Register</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control type='text' placeholder='Enter a Username' required value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type='password' placeholder='Enter a Password' minLength='8' required value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type='email' placeholder='Enter a Email Address' required value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Birthday:</Form.Label>
                  <Form.Control type='date' required value={birthday} onChange={e => setBirthday(e.target.value)} />
                </Form.Group>

                <Button variant='primary' type='submit' onClick={handleSubmit}>Submit</Button>

              </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>

  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};
