import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null)
const UseContext = ({ children }) => {
    const [user, setUser] = useState("Shafayet Hossain")
    const userInfo = { user }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;