import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from './firebase.init';
import loginImage from '../../images/loginImage.jpg'
import './Login.css';



initializeAuthentication();

const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     password: ''
    // });
    // https://web.programming-hero.com/update-1/video/update-1-57-4-create-new-user-using-email-and-password
    
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

        if (newUser) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }
        
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            const user = res.user;
            setError('');
            console.log(user)
        })
        .catch(err => {
            setError(err.message)
        })
    }

    const registerNewUser = (email, password) => {
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

    const toggleLogin = (event) => {
        setNewUser(event.target.checked);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    return (
        // <Form className="col-sm-5 ">
        //     <Form.Group className="d-flex mb-3" controlId="formBasicEmail">
        //         <Form.Label className="col-sm-3 col-form-label">Email address</Form.Label>
        //         <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
        //         {/* <Form.Text className="text-muted">
        //             We'll never share your email with anyone else.
        //         </Form.Text> */}
        //     </Form.Group>

        //     <Form.Group className="d-flex mb-3" controlId="formBasicPassword">
        //         <Form.Label className="col-sm-3 col-form-label">Password</Form.Label>
        //         <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Password" required />
        //     </Form.Group>
        //     <Form.Group className="d-flex col-sm-10 offset-sm-2" controlId="formBasicCheckbox">
        //         <Form.Check type="checkbox" label="Check me out" />
        //     </Form.Group>
        //     <Form.Text className="text-danger mb-3">
        //         {error}
        //     </Form.Text><br></br>
        //     <Button variant="primary" type="submit">Register</Button>
        // </Form>
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
                                        <h3 className="mb-4">{newUser ? 'Signup' : 'Sign in'}</h3>
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
                                        {/* <button type="submit" className="form-control btn btn-primary rounded submit px-3">Register</button> */}
                                        <input type="submit" className="form-control btn btn-primary rounded submit px-3" value={newUser ? 'Signup' : 'Sign in'}/>
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
                                    <div className="form-group" style={{color:'red'}}>
                                        {error}
                                    </div>
                                </form>
                                <p onChange={toggleLogin} className="text-center">Already a member? <a data-toggle="tab" href="#signup">{newUser ? 'Sign in' : 'Sign up'}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

};

export default Login;