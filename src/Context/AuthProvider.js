import React from 'react';
import { createContext } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,onAuthStateChanged,signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(true)

    


    const authInfo ={
        loading
    }
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
        {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;