import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../SharedPage/Header/Header';
import LeftSide from '../SharedPage/LeftSideNav/LeftSide';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ minHeight: '480px' }} className='bg-dark text-white pb-4 mt-5 pt-5' >
                <div className='pt-2'>
                    <Container>
                        <Row>
                            <Col sm={3}>
                                <LeftSide></LeftSide>
                            </Col>
                            <Col sm={9}>
                                <Outlet></Outlet>
                            </Col>
                        </Row>
                        <hr className='mt-5 ' />
                        <footer>
                            <p className='text-center text-warning mb-3'>Copyright © 2025 All Rights Reserved by Scan_f Academy.</p>
                        </footer>
                    </Container>

                </div>
            </div>
        </div >
    );
};

export default Main;