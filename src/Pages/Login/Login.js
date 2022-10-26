import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <div>
            <Container>
                <Row className='row justify-content-between'>
                    <Col lg="4" className='mt-5'>
                        <Button>Sign In With Google</Button><br></br><br />
                        <Button>Sign In With Facebook</Button>
                    </Col>
                    <Col lg="5" className='mt-5'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Your Email Address" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Your Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                LogIn
                            </Button><br></br><br></br>
                            <Form.Text className="text-danger">
                                Your Email Or Password is wrong please check and try again
                            </Form.Text>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;