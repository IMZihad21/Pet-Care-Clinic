import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../Utilities/FirebaseInit/FirebaseInit";

initFirebase();

const useFirebase = () => {
    const [ user, setUser ] = useState({});
    const [ loading, setLoading ] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = async () => {
        try {
            return await signInWithPopup(auth, googleProvider);
        } finally {
            setLoading(false);
        }
    }
    const signInUsingEmail = async (email, password) => {
        setLoading(true);
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } finally {
            setLoading(false);
        }
    }
    const registerUsingEmail = async (email, password) => {
        setLoading(true);
        try {
            return await createUserWithEmailAndPassword(auth, email, password);
        } finally {
            setLoading(false);
        }
    }

    const setDisplayName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        });
    };

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
    }, [ auth ])

    return {
        user,
        signInUsingEmail,
        registerUsingEmail,
        signInUsingGoogle,
        setDisplayName,
        logOut,
        loading
    }
}

export default useFirebase;