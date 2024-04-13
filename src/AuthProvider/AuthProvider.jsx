import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user
    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out
    const signOutInUser = () => {
        setUser(null)
        signOut(auth)

    }

    //google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
        });
        return () => unSubscribe()
    }, [])


    const values = {
        createAccount,
        signInUser,
        googleLogin,
        githubLogin,
        signOutInUser,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={values}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;