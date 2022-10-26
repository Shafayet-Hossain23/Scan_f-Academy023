import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SubCourse from './SubCourse';

const Courses = () => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    console.log(details)
    return (
        <div>
            <div className='container'>
                <div className='row g-4'>
                    {
                        details.map(dInfo => <SubCourse
                            key={dInfo.id}
                            dInfo={dInfo}
                        ></SubCourse>)
                    }
                </div>

            </div>
        </div>


    );
};

export default Courses;