import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Register = () => {

    const handleSignUp = () => {
        console.log('demo');
    }

    return (
        <Container>
            <Row className='row justify-content-between'>
                <Col lg="4" className='mt-5'>
                    <Button>Sign In With Google</Button><br /><br />
                    <Button>Sign In With Facebook</Button>
                </Col>
                <Col lg="5" className='mt-5'>
                    <Form onSubmit={handleSignUp}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Enter Your Full Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Your Email Address" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Your Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control name='confirm' type="password" placeholder="Again Type Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicURL">
                            <Form.Label>Enter Your Photo URL</Form.Label>
                            <Form.Control name='url' type="url" placeholder="Enter Your Photo Url" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            SignUp
                        </Button><br></br><br></br>
                        <Form.Text className="text-danger">
                            Errors here
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;