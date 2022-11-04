import React from 'react';
import { useContext } from 'react';
import {Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">CodEdu</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">We help to grow your knowledge and help to push to the top. Here we will help you to learn about JavaScript. So, You must have to basic Knowledge about computer simple works.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        {
                            user?.uid ?
                                <>

                                </>
                                :
                                <>
                                    <Link to="/login" type="button" className="btn btn-primary btn-lg px-4 gap-3">LOG IN</Link>
                                    <Link to="/register" type='button' className="btn btn-info btn-lg px-4">REGISTER</Link>
                                </>
                        }

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;