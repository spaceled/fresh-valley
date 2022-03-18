import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from './firebase.init';
import loginImage from '../../images/loginImage.jpg'
import './Login.css';



initializeAuthentication();
const Signup = () => {
    const [newUser, setNewUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     password: ''
    // });
    // 
    
    
    const auth = getAuth();
    const handleRegistration = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters.')
            return;
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError('Password must contain a letter and a number with minimum 8 characters.')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    return (
        <section className="ftco-section">
            <div className="container">
                {/* <div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Login #05</h2>
				</div>
			    </div> */}
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-5">
                        <div className="wrap">
                            <div className="img" style={{ backgroundImage: `url(${loginImage})` }}></div>
                            <div className="login-wrap p-4 p-md-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Signup Form</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="social-media d-flex justify-content-end">
                                            <a href="#" className="social-icon d-flex align-items-center justify-content-center"><i className="bi bi-google"></i></a>
                                            <a href="#" className="social-icon d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></a>
                                        </p>
                                    </div>
                                </div>
                                <form onSubmit={handleRegistration} className="signin-form">
                                    <div className="form-group mt-3" >
                                        <input type="text" className="form-control" required />
                                        <label className="form-control-placeholder" htmlFor="name">Name</label>
                                    </div>
                                    <div className="form-group mt-3" >
                                        <input onBlur={handleEmailChange} type="email" className="form-control" required />
                                        <label className="form-control-placeholder" htmlFor="email">Email Address</label>
                                    </div>
                                    <div className="form-group">
                                        <input id="password-field" onBlur={handlePasswordChange} type="password" className="form-control" required />
                                        <label className="form-control-placeholder" htmlFor="password">Password</label>
                                        <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-primary rounded submit px-3">Register</button>
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-50 text-left">
                                            <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                                {/* <input type="checkbox" checked /> */}
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="w-50 text-md-right">
                                            <a href="#">Forgot Password</a>
                                        </div>
                                    </div>
                                </form>
                                <p className="text-center">Already a member? <a data-toggle="tab" href="#signup">Login</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;