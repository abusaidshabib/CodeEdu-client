import React from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, ToggleButton, ToggleButtonGroup, Tooltip } from 'react-bootstrap';
import { HiSun } from 'react-icons/hi';
import { BsFillMoonFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';

const NavMenu = () => {
    const { logOut,user } = useContext(AuthContext);

    const renderTooltip = (props) => (

        <Tooltip id="button-tooltip" {...props}
        >
            {user?.email}
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
                                    <Link className='nav-link'>
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
                                        user?.photoURL?
                                        <img src={user.photoURL} class="img-fluid img-thumbnail" alt=""></img>
                                        :
                                        <FaUserAlt></FaUserAlt>
                                    }
                                </Nav.Link>

                            </OverlayTrigger>
                        </div>
                        <Nav.Link eventKey={2} href="#memes">
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton id="tbg-radio-2" value={2}>
                                    <HiSun></HiSun>
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-3" value={3}>
                                    <BsFillMoonFill></BsFillMoonFill>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavMenu;