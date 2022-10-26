import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className='py-5' style={{backgroundColor: '#F9FBF2'}}>
            <Row className='text-center'>
                <Col lg="6">
                    <h1>Sorry, page not found</h1>
                </Col> 
                <Col lg="6">
                <h1 className='text-danger'>404</h1>
                <Link to='/'>Go to Home</Link>
                </Col> 
            </Row>
        </Container>
    );
};

export default NotFound;