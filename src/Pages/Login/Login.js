import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const loginHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }
    return (
        <div className=' me-5 pe-5'>
            <Form onSubmit={loginHandler} className=' me-5 pe-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <small className='ms-2 mb-3 text-warning' style={{ display: 'block' }}>New to Scan_f Academy. Please <Link to='/register' className=''>Register</Link></small>
                <Button variant="warning" type="submit">
                    Login
                </Button>

            </Form>
        </div>
    );
};

export default Login;