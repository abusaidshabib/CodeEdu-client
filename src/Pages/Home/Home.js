import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-5 fw-bold">CodEdu</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">We help to grow your knowledge and help to push to the top. Here we will help you to learn about react app. So, You must have to learn JavaScript, html, css must.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <Link to="/login" type="button" className="btn btn-primary btn-lg px-4 gap-3">LOG IN</Link>
                                <Link to="/register" type='button' className="btn btn-outline-secondary btn-lg px-4">REGISTER</Link>

                        </div>
                    </div>
            </div>

            {/* <Row>
                <Col style={{height: '82vh'}} lg="6">
                    <Row className=''>
                        <h1 className='fw-bold'> We help to grow your knowledge and help to push to the top</h1>
                    </Row>
                    <Row>
                        <p>Make trust and relation to build a easy life.
                            We are always ready to help you.</p>
                    </Row>
                </Col>
                <Col lg="6" className='bg-danger'></Col>
            </Row> */}
        </Container>
    );
};

export default Home;