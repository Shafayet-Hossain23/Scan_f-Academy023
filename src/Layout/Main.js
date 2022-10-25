import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../SharedPage/Header/Header';
import LeftSide from '../SharedPage/LeftSideNav/LeftSide';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col sm={4}>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col sm={8}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Main;