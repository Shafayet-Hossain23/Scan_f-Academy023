import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const FAQ = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <p>This is FAQ {user?.name} </p>
        </div>
    );
};

export default FAQ;