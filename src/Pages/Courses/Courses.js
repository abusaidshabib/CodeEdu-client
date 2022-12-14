import React from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CoursesLeft from '../../Components/CoursesLeft/CoursesLeft';
import { AuthContext } from '../../Context/UserContext/UserContext';

const Courses = () => {
    const allTopics = useLoaderData();
    const {mode} = useContext(AuthContext);
    return (
        <Container>
            <Row className='row justify-content-between'>
                <Col lg='8' className='mt-5'>
                    <CoursesLeft></CoursesLeft>
                </Col>
                <Col lg='3' className='mt-5'>
                    <Link to='/premium'><Button>Get Premium Access</Button><br></br><br /></Link>
                    <h3>All Topics</h3>
                    {
                        allTopics.map(topic => <p key={topic.id}>
                            <Link className={`text-decoration-none ${mode}`} to={`/lesson/${topic.id}`}>{topic.topic_Name}</Link>
                        </p>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;