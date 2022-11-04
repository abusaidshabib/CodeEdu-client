import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CoursesLeft = () => {
    const [course, setCourse] = useState([]);



    useEffect(() => {
        fetch('https://client-server-site.vercel.app/details')
        .then(res => res.json())
        .then(data => setCourse(data));
    },[])

    let fixedColor ={
        color: "black",
    }
    return (
        <div className='row'>
            {
                course.map(lesson => <Card className='col-4 m-2' style={{ width: '18rem' }} key={lesson.id}>
                        <Card.Body>
                            <Card.Title style={fixedColor}>{lesson.title}</Card.Title>
                            <Card.Text style={fixedColor}>
                                {lesson.details.slice(0,200)}...<b className='text-primary'><Link to={`/lesson/${lesson.id}`}>read more</Link></b>
                            </Card.Text>
                            <Link to={`/lesson/${lesson.id}`}><Button>Get Premium Access</Button><br></br><br /></Link>
                            
                        </Card.Body>
                </Card>)
            }
        </div>
    );
};

export default CoursesLeft;