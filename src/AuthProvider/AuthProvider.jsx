import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

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

    //sign out
    const signOutInUser = () => {
        signOut(auth)
    }

    //google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
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
        githubLogin,
        signOutInUser,
        user
    }
    return (
        <AuthContext.Provider value={values}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;