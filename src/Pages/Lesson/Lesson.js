import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Lesson = () => {
    const lessons = useLoaderData();
    return (
        <div className="card my-5 container">
            <h3 className='text-center'>You got premium access for <b>{lessons.course_name}</b></h3>
            <img src={lessons.title_img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{lessons.title}</h5>
                <p className="card-text">{lessons.details}</p>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>More</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>author: <b>{lessons.author}
                        <img src={lessons.auth_img} alt=""/>
                        </b></ListGroup.Item>
                        <ListGroup.Item>rating: <b>{lessons.rating}</b></ListGroup.Item>
                        <ListGroup.Item>view: <b>{lessons.view}</b></ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    );
};

export default Lesson;