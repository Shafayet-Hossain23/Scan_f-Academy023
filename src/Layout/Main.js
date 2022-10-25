import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import LeftSide from '../Components/LeftSideNav/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4 gap-4'>
                <div className=''>
                    <LeftSide></LeftSide>
                </div>
                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Main;