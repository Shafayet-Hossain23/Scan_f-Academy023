import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [courseName, setCourseName] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/course-name')
            .then(res => res.json())
            .then(data => setCourseName(data))
    }, [])
    // console.log(courseName)
    return (
        <div style={{ height: '450px' }}>
            <p>Learn programming Language :</p>
            {
                courseName.map(c => <p key={c.id}><Link className='text-warning'>{c.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSide;