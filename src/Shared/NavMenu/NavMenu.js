import React from 'react';
import { Button, Container, Image, Nav, Navbar, OverlayTrigger, ToggleButton, ToggleButtonGroup, Tooltip } from 'react-bootstrap';
import { HiSun } from 'react-icons/hi';
import { BsFillMoonFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';

const NavMenu = () => {
    const { logOut, user } = useContext(AuthContext);
    console.log(user);

    const renderTooltip = (props) => (

        <Tooltip id="button-tooltip" {...props}
        >
            {user?.displayName}
        </Tooltip>
    );

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
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
                                            <Image style={{width: '40px'}} roundedCircle src={user.photoURL}></Image>
                                            :
                                            <FaUserAlt></FaUserAlt>
                                    }
                                </Nav.Link>

                            </OverlayTrigger>
                        </div>
                        <Nav.Link className='mt-3' eventKey={2} href="#memes">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavMenu;