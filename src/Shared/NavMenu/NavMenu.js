import React from 'react';
import { Button, Container, Form, Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';
import { useState } from 'react';

const NavMenu = () => {
    const { logOut, user,mode, toggleMode } = useContext(AuthContext);


    const renderTooltip = (props) => (

        <Tooltip id="button-tooltip" {...props}
        >
            {user?.displayName}
        </Tooltip>
    );

    return (
        <Navbar collapseOnSelect expand="lg" bg={`${mode}`} variant={`${mode}`}>
            <Container>
            <Navbar.Brand>

                <Link className='text-decoration-none' to='/'>CodEdu</Link>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/courses" className='nav-link'>COURSES</Link>
                    <Link to="/blog" className='nav-link'>BLOG</Link>
                    <Link to="/faq" className='nav-link'>FAQ</Link>
                </Nav>
                <Nav>
                    {
                        user?.uid ?
                            <>
                                <Link className='nav-link mt-2'>
                                    <Button onClick={logOut} variant='primary'>LogOut</Button>
                                </Link>
                            </>
                            :
                            <>
                                <Link className='nav-link' to='/login'>
                                    <Button variant='primary'>LOG IN</Button>
                                </Link>
                                <Link className='nav-link' to='/register'>
                                    <Button variant='primary'>REGISTER</Button>
                                </Link>
                            </>


                    }
                    <div className='nav-link'>
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Nav.Link>
                                {
                                    user?.photoURL ?
                                        <Image style={{ width: '40px' }} roundedCircle src={user.photoURL}></Image>
                                        :
                                        <FaUserAlt></FaUserAlt>
                                }
                            </Nav.Link>

                        </OverlayTrigger>
                    </div>
                    <Nav.Link className='mt-2' eventKey={2} href="#memes">
                        <Form>

                            <Form.Check
                                onClick={toggleMode}
                                type="switch"
                                id="custom-switch"
                                label="Mode"
                            />
                        </Form>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar >
    );
};

export default NavMenu;