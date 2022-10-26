import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const loginHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8}>
                        <div className='ms-2'>
                            <Form onSubmit={loginHandler}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your Full Name *</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="Full Name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Photo URL</Form.Label>
                                    <Form.Control name='photo' type="text" placeholder="Photo URL" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address *</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-1" controlId="formBasicPassword">
                                    <Form.Label>Password *</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" required />
                                </Form.Group>
                                <small className='ms-2 mb-3 text-warning' style={{ display: 'block' }}>Already have an account. Please <Link to='/login' className=''>Login</Link></small>
                                <Button variant="warning" type="submit">
                                    Register
                                </Button>

                            </Form>
                        </div>
                    </Col>
                    <Col sm={4}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;