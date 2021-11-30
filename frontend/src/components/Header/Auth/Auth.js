import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Login = (props) => {

    const location = useLocation();
    const isLogin = location.pathname === '/login';

    return (
        <div className="auth__wrapper">
            <h2 className="auth__title">{isLogin ? 'Log In' : 'Sign Up'}</h2>
            <form className="auth__form" action="POST">
                <div className="auth__form__row">
                    <label className="auth__form__label" htmlFor="userName">Name</label>
                    <input className="auth__form__input" type="text" placeholder="Your name" />
                </div>
                <div className="auth__form__row">
                    <label className="auth__form__label" htmlFor="userPass">Password</label>
                    <input className="auth__form__input" type="password" placeholder="Your password" />
                </div>
                <div className="auth__form__row auth__form__footer">{
                    isLogin ? <div className="auth__form__question">Don't have an account? <NavLink to="registration">Register!</NavLink></div> : 
                    <div className="auth__form__question">Have an account? <NavLink to="login">Log In</NavLink></div>
                }
                    
                    <button className="auth__form__submit" type="submit">{isLogin ? 'Log In' : 'SignUp'}</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
