import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiOutlineDownload } from 'react-icons/ai';
import Pdf from 'react-to-pdf';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ref = React.createRef();
const Lesson = () => {
    const lessons = useLoaderData();

    let fixedColor = {
        color: "black",
    }

    return (
        <div className="card my-5 container">
<<<<<<< HEAD
            <Container>
                <Row>
                    <Col sm={8}></Col>
                    <Col sm={4}><Pdf targetRef={ref} filename="lessons.pdf">
                        {({ toPdf }) => <button onClick={toPdf} variant='primary'>Download Pdf<AiOutlineDownload className='text-primary' /></button>}

                    </Pdf></Col>
                </Row>
            </Container>
            <div ref={ref}>
                <h3 className='text-center' style={fixedColor}>You got premium access for <b>{lessons.course_name}</b>

                </h3>
                <img src={lessons.title_img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={fixedColor}>{lessons.title}</h5>
                    <p className="card-text" style={fixedColor}>{lessons.details}</p>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>More</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>author: <b>{lessons.author}
                                <img src={lessons.auth_img} alt="" />
                            </b></ListGroup.Item>
                            <ListGroup.Item>rating: <b>{lessons.rating}</b></ListGroup.Item>
                            <ListGroup.Item>view: <b>{lessons.view}</b></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
=======
            <h3 className='text-center'>You got premium access for <b>{lessons.course_name}</b></h3>
            <img src={lessons.title_img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{lessons.title}</h5>
                <p className="card-text">{lessons.details}</p>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>More</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>author: <b>{lessons.author}
                            <img src={lessons.auth_img} alt="" />
                        </b></ListGroup.Item>
                        <ListGroup.Item>rating: <b>{lessons.rating}</b></ListGroup.Item>
                        <ListGroup.Item>view: <b>{lessons.view}</b></ListGroup.Item>
                    </ListGroup>
                </Card>
>>>>>>> 89e46c5d218e579aa1ec3cceb49b643e379a4002
            </div>
        </div>
    );
};

export default Lesson;