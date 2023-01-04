import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import left_image from '../../assets/jess-bailey-q10VITrVYUM-unsplash.jpg';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <div classNameName="px-4 py-5 my-5 text-center">
                <h1 classNameName="display-5 fw-bold">CodEdu</h1>
                <div classNameName="col-lg-6 mx-auto">
                    <p classNameName="lead mb-4">We help to grow your knowledge and help to push to the top. Here we will help you to learn about JavaScript. So, You must have to basic Knowledge about computer simple works.</p>
                    <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        {
                            user?.uid ?
                                <>

                                </>
                                :
                                <>
                                    <Link to="/login" type="button" classNameName="btn btn-primary btn-lg px-4 gap-3">LOG IN</Link>
                                    <Link to="/register" type='button' classNameName="btn btn-info btn-lg px-4">REGISTER</Link>
                                </>
                        }

                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src={left_image} className="card-img-top w-100" alt="..." />
                        <div className="card-body">
                            <h1>Features</h1>
                            <p className="card-text">Learn new skills and advance your career with our vast selection of online courses taught by industry experts. Discover a world of knowledge at your fingertips with our user-friendly online learning platform. Transform your passion into a profession with our comprehensive courses and dedicated support team. Join a community of over 40 million learners and discover the power of online education with Udemy. Take your education to the next level with our interactive and engaging courses, taught by real professionals in their field. From beginner to expert, we have a course for everyone on our platform. Sign up today and start learning something new.</p>
                        </div>
                    </div>
                </div>
                <div class="text-center row py-5 container">
                    <div className="card col-sm-6 col-lg-4 text-bg-primary mb-3">
                        
                        <div className="card-body">
                            <h5 className="card-title">Slot-1</h5>
                            <p className="card-text">Learn new skills and advance your career with our vast selection of online courses taught by industry experts.</p>
                        </div>
                    </div>
                    <div className="card col-sm-6 col-lg-4 text-bg-secondary mb-3">
                        
                        <div className="card-body">
                            <h5 className="card-title">Slot-2</h5>
                            <p className="card-text">Discover a world of knowledge at your fingertips with our user-friendly online learning platform.</p>
                        </div>
                    </div>
                    <div class="card col-sm-6 col-lg-4 text-bg-success mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Slot-3</h5>
                            <p class="card-text">Transform your passion into a profession with our comprehensive courses and dedicated support team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;