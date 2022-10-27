import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSide.css'

const LeftSide = () => {
    const [courseName, setCourseName] = useState([])
    useEffect(() => {
        fetch('https://learning-platform-server-side-lime.vercel.app/course-name')
            .then(res => res.json())
            .then(data => setCourseName(data))
    }, [])
    // console.log(courseName)
    return (
        <div className='pb-3 leftsideStyle' style={{
            position: "sticky",
            top: "80px"
        }}>
            <h5>Learn Language :</h5>
            {
                courseName.map(c => <p key={c.id}><Link to={`/details/${c.id}`} className='text-warning'>{c.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSide;