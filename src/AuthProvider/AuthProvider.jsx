import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log(user)

    //create user
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])


    const values = {
        createAccount,
        signInUser,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={values}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;