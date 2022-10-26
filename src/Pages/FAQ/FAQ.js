import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UseContext';

const FAQ = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <p>This is FAQ {user} </p>
        </div>
    );
};

export default FAQ;