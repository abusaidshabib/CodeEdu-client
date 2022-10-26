import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { HiSun } from 'react-icons/hi';
import { BsFillMoonFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa';



const NavManu = () => {

    const renderTooltip = (props) => (

        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
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
                        <Nav.Link className='text-decoration-none'>
                            <Link className='text-decoration-none' to='courses'>COURSES</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none' to='faq'>FAQ</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none' to='/blog'>BLOG</Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>

                            <Link to='/login'>
                                <Button variant='primary'>Log In
                                </Button>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>

                            <Link to='/register'>
                                <Button variant='primary'>Register
                                </Button>
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="#deets">
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Nav.Link>
                                    <FaUserAlt></FaUserAlt>
                                </Nav.Link>

                            </OverlayTrigger>


                        </Nav.Link>
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

export default NavManu;