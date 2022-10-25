import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';


const Login = () => {
    const loginHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }
    return (
        <div >
            <Container>
                <Row>
                    <Col sm={8}>
                        <div className='me-4'>
                            <Form onSubmit={loginHandler}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-1" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" required />
                                </Form.Group>
                                <small className='ms-2 mb-3 text-warning' style={{ display: 'block' }}>New to Scan_f Academy. Please <Link to='/register' className=''>Register</Link></small>
                                <Button variant="warning" type="submit">
                                    Login
                                </Button>

                            </Form>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='mt-0 pt-2 ms-2'>
                            <p className='text-warning'>Login via Google/Github</p>
                            <div className="d-grid gap-2">
                                <Button variant="outline-primary" size="">
                                    <FaGoogle />  Google login
                                </Button>
                                <Button variant="outline-secondary" size="">
                                    <FaGithub /> Github login
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;