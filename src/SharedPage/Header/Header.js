import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../../Assets/images/image-1.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <div className='text-warning'>

                            <h3>
                                <img style={{ height: '40px' }} src={image1} alt="" />
                                <span className='ms-2 mb-5'>Scan_f Academy</span>
                                {/* <img style={{ height: '40px' }} src={image1} alt="" /> */}
                            </h3>

                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-white' aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 ms-lg-5 ps-lg-5"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className=' mb-1'>
                                <Link to='/courses' style={{ color: "#FFAE6D", textDecoration: 'none' }}>
                                    Courses
                                </Link>
                            </Nav.Link >
                            <Nav.Link className='ms-lg-5'>
                                <Link to='/faq' style={{ color: "#FFAE6D", textDecoration: 'none' }}>
                                    FAQ
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='ms-lg-5'>
                                <Link to='/blog' style={{ color: "#FFAE6D", textDecoration: 'none' }}>
                                    Blog
                                </Link>
                            </Nav.Link>
                        </Nav>

                        <div>
                            <Link to='/login'>
                                <Button variant="outline-warning">Login
                                </Button>
                            </Link>
                        </div>

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </div>
    );
};

export default Header;