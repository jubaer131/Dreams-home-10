import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const authContest = createContext()
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState('')

    const provider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const creatregistation = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }


    const creatUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {

        return signOut(auth)
    }

    const googleSignin = () => {

        return signInWithPopup(auth, provider)
    }
    const githubSignin = () => {

        return signInWithPopup(auth, GithubProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser)

        })
        return () => {
            unsubscribe()
        }


    }, [])

    const authinfo = { creatUser, creatregistation, user, logout, googleSignin, githubSignin }


    return (
        <div>
            <authContest.Provider value={authinfo}>
                {children}
            </authContest.Provider>
        </div>
    );
};

export default AuthProvider;