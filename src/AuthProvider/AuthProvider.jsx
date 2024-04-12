import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const values = {
        createAccount
    }
    return (
        <AuthContext.Provider value={values}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;