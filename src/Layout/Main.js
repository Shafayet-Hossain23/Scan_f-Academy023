import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../SharedPage/Header/Header';
import LeftSide from '../SharedPage/LeftSideNav/LeftSide';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ height: '1000px' }} className='bg-dark text-white' >
                <hr className='my-0' />
                <div className='pt-4'>
                    <Container>
                        <Row>
                            <Col sm={3}>
                                <LeftSide></LeftSide>
                            </Col>
                            <Col sm={9}>
                                <Outlet></Outlet>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div >
    );
};

export default Main;