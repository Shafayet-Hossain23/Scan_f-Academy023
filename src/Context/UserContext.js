import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";




export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(true)
    const registerHandler = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginHandler = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googlePopUpSignin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const updateProfileHandler = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
    }
    const githubPopup = () => {
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, currentUser => {
                setLoading(false)
                setUser(currentUser)
            })
        }
        return () => {
            unsubscribe()
        }
    }, [])

    const userInfo = { user, loading, registerHandler, loginHandler, googlePopUpSignin, updateProfileHandler, githubPopup }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;