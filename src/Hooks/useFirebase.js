import initializeAuthentication from "../components/Login/Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLodding, setIsLodding] = useState(true);

    initializeAuthentication();


    const auth = getAuth();

    //=========== Handle Sign in==========
    const handleGoogleSignin = () => {
        setIsLodding(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result);
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLodding(false))
    };
    //============ Handle Sign Out=======
    const handleSignout = () => {
        setIsLodding(true)
        signOut(auth)
            .then(() => {

            })
            .finally(() => setIsLodding(false))

    };

    // On auth state change
    useEffect(() => {
        const unsubscribed = setIsLodding(true);
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLodding(false);
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        error,
        isLodding,
        handleGoogleSignin,
        handleSignout
    };
};

export default useFirebase;