import React from 'react';
import { Button, Form } from 'react-bootstrap';
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
        <div className=' me-5 pe-5'>
            <Form onSubmit={loginHandler} className=' me-5 pe-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Full Name *</Form.Label>
                    <Form.Control name='name' type="email" placeholder="Full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photo' type="email" placeholder="Photo URL" />
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
    );
};

export default Register;