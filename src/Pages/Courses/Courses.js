import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import LoaderSpinner from '../../Components/LoaderSpinner';
import SubCourse from './SubCourse';

const Courses = () => {
    const [details, setDetails] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        fetch('https://learning-platform-server-side-lime.vercel.app/')
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                setLoader(false)
            })
    }, [])
    // console.log(details)
    if (loader) {
        return <LoaderSpinner></LoaderSpinner>
    }
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