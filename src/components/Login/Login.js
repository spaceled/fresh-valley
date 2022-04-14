import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Grid } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import loginImage from '../../images/loginImage.jpg'
import './Login.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import initializeAuthentication from './firebase.init';
import GoogleIcon from '@mui/icons-material/Google';
import './Login.css';

import { useForm } from "react-hook-form";

// https://web.programming-hero.com/update-1/video/update-1-59-8-optional-redirect-to-the-initial-page-after-login


initializeAuthentication();




const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInUsingGoogle, isLoading, authError } = useAuth();
    const [newUser, setNewUser] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/checkout';

// 
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            navigate(redirect_uri);
        })
    }

    // const handleOnChange = (e) => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = { ...loginData };
    //     newLoginData[field] = value;
    //     setLoginData(newLoginData);
    // }

    // const handleLoginSubmit = e => {
    //     loginUser(loginData.email, loginData.password, location, navigate);
    //     e.preventDefault();
    // }

    // const auth = getAuth();
    // const handleRegistration = (event) => {
    //     event.preventDefault();
    //     if (password.length < 6) {
    //         setError('Password must be at least 6 characters.')
    //         return;
    //     }
    //     if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
    //         setError('Password must contain a letter and a number with minimum 8 characters.')
    //         return;
    //     }

    //     if (!newUser) {
    //         processLogin(email, password);
    //     }
    //     else {
    //         registerNewUser(email, password);
    //     }

    // }

    // const processLogin = (email, password) => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(res => {
    //             const user = res.user;
    //             setError('');
    //         })
    //         .catch(err => {
    //             setError(err.message)
    //         })
    // }

    // const registerNewUser = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(res => {
    //             const user = res.user;
    //             setError('');
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //         })
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //       email: data.get('email'),
    //       password: data.get('password'),
    //     });
    //   };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="" {...register("name")} placeholder="Name" /> <br />
                <input defaultValue="" {...register("email", { required: true })} placeholder="Email"  /> <br />
                
                {errors.email && <span>This field is required</span>}

                <input defaultValue="" {...register("password", { required: true })} placeholder="Password"  /> <br />

                <input defaultValue="" {...register("password", { required: true })} placeholder="Re Enter Password"  /> <br />

                {errors.password && <span>This field is required</span>}

                <input type="submit" /> <br /><br />
            </form>
            
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>

    );

};

export default Login;