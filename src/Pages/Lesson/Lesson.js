import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Lesson = () => {
    const lessons = useLoaderData();
    console.log(lessons);
    return (
        <Container className='text-center my-5'>
            <h2>{lessons.title}</h2>
            <h6 className='my-4'>{lessons.details}</h6>
            <div className='d-flex justify-content-between my-5 align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                    <img src={lessons.image} alt="" />
                    <p><b>Writer Name:</b> {lessons.author}</p>
                </div>
                <div>
                    <p><b>view:</b> {lessons.view}</p>
                </div>
            </div>
        </Container>
    );
};

export default Lesson;