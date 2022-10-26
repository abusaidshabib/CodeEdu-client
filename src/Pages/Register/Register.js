import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const Register = () => {
    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPass.value;
        const url = form.url.value;

        if(password.length < 6){
            setError('password should be 6 character or more');
            return;
        }

        if(password!== confirm){
            setError('Password and Confirm password did not match');
            return;
        }

        createUser (email, password)
        .then(result => {
            const user  = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error =>{
            console.error(error);
            setError(error.code);
        });
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
                            <Form.Control name='confirmPass' type="password" placeholder="Again Type Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicURL">
                            <Form.Label>Enter Your Photo URL</Form.Label>
                            <Form.Control name='url' type="url" placeholder="Enter Your Photo Url" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            SignUp
                        </Button><br></br><br></br>
                        <Form.Text className="text-danger">
                            <p>{error}</p>
                        </Form.Text>
                    </Form>
                    <p>Already have an account <Link to='/login'>login form here</Link> </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;