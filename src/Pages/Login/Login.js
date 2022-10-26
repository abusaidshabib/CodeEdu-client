import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Login = () => {

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <Container>
                <Row className='row justify-content-between'>
                    <Col lg="4" className='mt-5'>
                        <Button>Sign In With Google</Button><br></br><br />
                        <Button>Sign In With Facebook</Button>
                    </Col>
                    <Col lg="5" className='mt-5'>
                        <Form onSubmit={handleLogIn}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Your Email Address" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Your Password" required/>
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
    );
};

export default Login;