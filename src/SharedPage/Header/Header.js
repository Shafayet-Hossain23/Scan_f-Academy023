import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../../Assets/images/image-1.png';
import { AuthContext } from '../../Context/UserContext';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logoutHandler } = useContext(AuthContext)
    const logoutClickHandler = () => {
        logoutHandler()
            .then(() => {

            })
            .catch(error => {

            })
    }
    return (
        <div>
            <Navbar style={{ borderBottom: '1px solid orange' }} fixed="top" bg="dark" expand="lg">
                <Container fluid>
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
                                <Link to='/' style={{ color: "#FFAE6D", textDecoration: 'none' }}>
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
                        <div title='change theme' className='me-3'>
                            <Form >
                                <Form.Check

                                    type="switch"
                                    id="custom-switch"
                                    label=""
                                />
                            </Form>
                        </div>
                        <div>

                            <div>
                                {
                                    user?.uid ?
                                        <>
                                            {
                                                user?.photoURL ?
                                                    <>
                                                        <div>
                                                            <img title={user?.displayName} className='text-white me-2 rounded-circle' style={{ height: '37px', width: "33px" }} src={user.photoURL} alt="" />
                                                            <Button className='ms-2' onClick={logoutClickHandler} variant="outline-danger">Logout
                                                            </Button>
                                                        </div>
                                                    </> :
                                                    <>
                                                        <div>
                                                            <FaUserCircle className='text-white me-2' style={{ height: '40px', width: "33px" }} />
                                                            <Button className='ms-2' onClick={logoutClickHandler} variant="outline-danger">Logout
                                                            </Button>
                                                        </div>
                                                    </>
                                            }
                                        </> :
                                        <>
                                            <Link to='/login'>
                                                <Button variant="outline-warning">Login
                                                </Button>
                                            </Link></>
                                }
                            </div>
                        </div>

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </div>
    );
};

export default Header;