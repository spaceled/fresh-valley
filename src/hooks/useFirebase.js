import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile, getIdToken } from "firebase/auth";
import initializeAuthentication from './../components/Login/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    // const registerUser = (email, password, name, navigate) => {
    //     setIsLoading(true);
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(user => {
    //         setAuthError('');
    //         const newUser = {email, displayName: name};
    //         setUser(newUser);
    //         saveUser(email, name, 'POST');
    //         updateProfile(auth.currentUser, {
    //             displayName: name
    //         })
    //         .then(() => {

    //         })
    //         .catch((error) => {

    //         });
    //         navigate('/');
    //     }) 
    //     .catch((error) => {
    //         setAuthError(error.message);
    //         console.log(error);
    //     })
    //     .finally(() => setIsLoading(false));
    // }

    // const loginUserWithEmail = (email, password, location, navigate) => {
    //     setIsLoading(true);
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(user => {
    //             const destination = location?.state?.from || '/';
    //             navigate(destination);
    //             setAuthError('');
    //         })
    //         .catch(error => {
    //             setAuthError(error.message);
    //         })
    //         .finally(() => setIsLoading(false));
    // }

    // const signInUsingGoogle = (location, navigate) => {
    //     setIsLoading(true);
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const user = result.user;
    //             saveUser(user.email, user.displayName, 'PUT');
    //             setAuthError('');
    //             const destination = location?.state?.from || '/';
    //             navigate(destination);
    //         })
    //         .catch(error => {
    //             setAuthError(error.message);
    //         })
    //         .finally(() => setIsLoading(false));
    // }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // const signInUsingGithub = () => {
    //     signInWithPopup(auth, githubProvider)
    //     .then( result => {
    //         setUser(result.user);
    //     })
    //     .catch(error => {
    //         setError(error.message)
    //     })
    // }

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    // const saveUser = (email, displayName, method) => {
    //     const user = {email, displayName};
    //     fetch(`http://localhost:5000/users`, {
    //         method: method,
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then()
    // }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email])

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } 
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    return {
        user,
        // admin,
        // token,
        // isLoading,
        // authError,
        // registerUser,
        // loginUserWithEmail,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;