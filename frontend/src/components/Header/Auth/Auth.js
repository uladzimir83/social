import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../../../asyncActions/asyncActions';
import { authUser, setAuthData } from '../../../actions/actions.js';

const Login = (props) => {

    const location = useLocation();
    const dispatch = useDispatch();
    const isLogin = location.pathname === '/login';
    const navigate = useNavigate();
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');

    const submitData = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login({email: emailUser, password: passwordUser});
            } else {
                data = await registration({email: emailUser, password: passwordUser});
            }
            dispatch(authUser(true));
            dispatch(setAuthData(data));
            navigate('/');
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <div className="auth__wrapper">
            <h2 className="auth__title">{isLogin ? 'Log In' : 'Sign Up'}</h2>
            <form className="auth__form" onSubmit={(e) => {e.preventDefault()}}>
                <div className="auth__form__row">
                    <label className="auth__form__label" htmlFor="email">Email</label>
                    <input 
                        className="auth__form__input" 
                        id="email" 
                        onChange={(e) => {setEmailUser(e.target.value)}} 
                        value={emailUser} 
                        type="email" 
                        placeholder="Email" 
                    />
                </div>
                <div className="auth__form__row">
                    <label className="auth__form__label" htmlFor="pass">Password</label>
                    <input 
                        className="auth__form__input" 
                        id="pass" 
                        onChange={(e) => {setPasswordUser(e.target.value)}} 
                        value={passwordUser} 
                        type="password" 
                        placeholder="Password" 
                    />
                </div>
                <div className="auth__form__row auth__form__footer">{
                    isLogin ? <div className="auth__form__question">Don't have an account? <NavLink to="registration">Register!</NavLink></div> : 
                    <div className="auth__form__question">Have an account? <NavLink to="login">Log In</NavLink></div>
                }
                    
                    <button className="auth__form__submit" onClick={submitData} type="submit">{isLogin ? 'Log In' : 'SignUp'}</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
