import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import headerImg from '../../assets/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg';

const Courses = () => {
    const allTopics = useLoaderData();
    console.log(allTopics);
    return (
        <Container>
            <Row className='row justify-content-between'>
                <Col lg='8' className='mt-5'>
                        <h2 className='mb-4'>Course Details</h2>
                        <h6>To full fill your target keep working hard and and follow our daily lessons. Also try to complete our regular task. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, tenetur nobis! Et eos cupiditate aut accusantium facere architecto facilis vel reiciendis repellat? Quis voluptatibus cupiditate exercitationem quisquam numquam labore sequi aut, voluptate inventore nesciunt. Eum, ipsam corporis nam esse debitis enim deleniti quis saepe, distinctio harum quo consequuntur culpa molestiae? Esse ipsa suscipit adipisci magnam iusto laboriosam culpa voluptas modi.</h6>

                        <img className='img-fluid my-4' src={headerImg} alt=""/>
                </Col>
                <Col lg='3' className='mt-5'>
                    <Link to='/premium'><Button>Get Premium Access</Button><br></br><br /></Link>
                    <h3>All Topics</h3>
                    {
                        allTopics.map(topic => <p key={topic.id}>
                            <Link to={`/topics/${topic.id}`}>{topic.topic_Name}</Link>
                        </p>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;