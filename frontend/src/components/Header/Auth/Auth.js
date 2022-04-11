import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { login, registration } from '../../../asyncActions/asyncActions';

const Login = (props) => {

    const location = useLocation();
    const isLogin = location.pathname === '/login';
    const history = useHistory();
    const [loginUser, setLoginUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');

    const submitData = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login({username: loginUser, password: passwordUser});
            } else {
                data = await registration({username: loginUser, password: passwordUser});
            }

            history.push('/');
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <div className="auth__wrapper">
            <h2 className="auth__title">{isLogin ? 'Log In' : 'Sign Up'}</h2>
            <form className="auth__form" onSubmit={(e) => {e.preventDefault()}}>
                <div className="auth__form__row">
                    <label className="auth__form__label" htmlFor="userName">Name</label>
                    <input className="auth__form__input" onChange={(e) => {setLoginUser(e.target.value)}} value={loginUser} type="text" placeholder="Your name" />
                </div>
                <div className="auth__form__row">
                    <label className="auth__form__label" htmlFor="userPass">Password</label>
                    <input className="auth__form__input" onChange={(e) => {setPasswordUser(e.target.value)}} value={passwordUser} type="password" placeholder="Your password" />
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
