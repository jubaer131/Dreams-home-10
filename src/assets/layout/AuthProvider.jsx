import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { updateProfile } from "firebase/auth";

export const authContest = createContext()
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState('')
    const [loading, setloading] = useState(true)

    const provider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const creatregistation = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const creatUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setloading(false)
        return signOut(auth)
    }

    const googleSignin = () => {
        setloading(false)
        return signInWithPopup(auth, provider)
    }
    const githubSignin = () => {
        setloading(true)
        return signInWithPopup(auth, GithubProvider)
    }

    const updateProfilePicture = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser)
            setloading(false)
        })
        return () => {
            unsubscribe()
        }


    }, [])

    const authinfo = { creatUser, creatregistation, user, logout, googleSignin, githubSignin, updateProfilePicture, loading }


    return (
        <div>
            <authContest.Provider value={authinfo}>
                {children}
            </authContest.Provider>
        </div>
    );
};

export default AuthProvider;