import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="">
            <div className="d-flex justify-content-end">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/home" className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/addProduct" className="nav-link" >Add Product</Link>
                            </li>
                            {/* <li className="nav-item active">
                                <Link to="/signup" className="nav-link" >Signup</Link>
                            </li> */}
                            {/* <li className="nav-item active">
                                <Link to="/login" className="nav-link" >Login</Link>
                            </li> */}
                            <li className="nav-item active">
                                <Link to="/checkout" className="nav-link" >Checkout</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/shipping" className="nav-link" >Shipping</Link>
                            </li>
                            <span>{user.displayName} </span>
                            {user.email ? <button onClick={logout}>Logout</button>
                            :
                            <li className="nav-item active">
                                <Link to="/login" className="nav-link" >Login</Link>
                            </li>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <nav className="navbar navbar-light">
                    <form className="form-inline">
                        <div className="input-group">
                            <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                            <div className="input-group-prepend">
                                <span type="button" className="input-group-text btn btn-primary" id="basic-addon1">Search</span>
                            </div>
                        </div>
                    </form>
                </nav>
            </div>
        </div>
    );
};

export default Header;