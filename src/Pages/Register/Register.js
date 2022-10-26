import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Register = () => {
    return (
        <Form>

            <Container>
                <Row className='row justify-content-between'>
                    <Col lg="4" className='mt-5'>
                        <Button>Sign In With Google</Button><br></br><br />
                        <Button>Sign In With Facebook</Button>
                    </Col>
                    <Col lg="5" className='mt-5'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Your Full Name</Form.Label>
                                <Form.Control name='name' type="text" placeholder="Your Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Your Email Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Your Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Your Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Your Photo URL</Form.Label>
                                <Form.Control name='url' type="url" placeholder="Enter Your Photo Url" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Register
                            </Button><br></br><br></br>
                            <Form.Text className="text-danger">
                                Errors here
                            </Form.Text>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
};

export default Register;