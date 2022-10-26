import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext';


const Login = () => {
    const { loginHandler, googlePopUpSignin, githubPopup } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();
    const loginEventHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        setError('')
        setSuccess('')
        loginHandler(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess("Successfullly Login!")
                form.reset()
                navigate("/courses")
            })
            .catch(error => {
                const errorMessage = error.message
                console.error(error);
                setError(errorMessage)
            })
    }
    const googlePopupHandler = () => {
        setError('')
        setSuccess('')
        googlePopUpSignin()
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess("Successfullly Login via Google!")
            })
            .catch(error => {
                const errorMessage = error.message
                console.error(error);
                setError(errorMessage)
            })
    }
    const gitHubPopUpHandler = () => {
        setError('')
        setSuccess('')
        githubPopup()
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess("Successfullly Login via Github!")
            })
            .catch(error => {
                const errorMessage = error.message
                console.error(error);
                setError(errorMessage)
            })
    }
    return (

        <div >
            <Container>
                <Row>
                    <Col sm={8}>
                        <div className='me-4'>
                            <Form onSubmit={loginEventHandler}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-1" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" required />
                                </Form.Group>
                                <small className='ms-2 mb-3 text-warning' style={{ display: 'block' }}>New to Scan_f Academy. Please <Link to='/register' className=''>Register</Link></small>
                                <div>
                                    {error && <p className='text-danger'>{error}</p>}
                                    {success && <p className='text-success'>{success}</p>}
                                </div>
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
                                <Button onClick={googlePopupHandler} variant="outline-primary" size="">
                                    <FaGoogle />  Google login
                                </Button>
                                <Button onClick={gitHubPopUpHandler} variant="outline-secondary" size="">
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