import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../Utilities/FirebaseInit/FirebaseInit";

initFirebase();

const useFirebase = () => {
    const [ user, setUser ] = useState({});
    const [ loading, setLoading ] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }
    const signInUsingEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        .finally(()=> {setLoading(false)});
    }
    const registerUsingEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        .finally(()=> {setLoading(false)});
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // Still unclear about this so just copied it 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        signInUsingEmail,
        registerUsingEmail,
        signInUsingGoogle,
        logOut,
        loading
    }
}

export default useFirebase;