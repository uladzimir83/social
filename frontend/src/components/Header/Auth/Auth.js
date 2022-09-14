import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { authUser, setAuthData } from '../../../actions/actions.js';
import { login, registration } from '../../../asyncActions/asyncActions';
import './auth.scss';
import AuthError from './AuthError';

const Login = (props) => {

    const location = useLocation();
    const dispatch = useDispatch();
    const isRegistration = location.pathname === '/registration';
    const navigate = useNavigate();
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');
    const [loginUser, setLoginUser] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorData, setErrorData] = useState('');
    
    const submitData = async () => {
        try {
            let data;
            if (isRegistration) {
                data = await registration({email: emailUser, login: loginUser, password: passwordUser});
            } else {
                data = await login({email: emailUser, password: passwordUser});
            }
            dispatch(authUser(true));
            dispatch(setAuthData(data));
            navigate('/');
        } catch (e) {
            console.log(e.response);
            if (!showError) {
                setShowError(!showError);
                setErrorData(e.response.data.message);
            }
        }
    }
    const removeErrorMessage = () => {
        setShowError(false);
    }

    return (
        <section className='auth__section'>
            <div className={clsx('auth__wrapper', {'auth__wrapper__is__checked': props.isCheck})}>
                <h2 className="auth__title">{isRegistration ? 'Sign Up' : 'Log In'}</h2>
                <form className="auth__form" onSubmit={(e) => {e.preventDefault()}}>
                    <div className="auth__form__row">
                        <label className="auth__form__label" htmlFor="email">Email</label>
                        <input 
                            className="auth__form__input" 
                            id="email" 
                            onChange={(e) => {setEmailUser(e.target.value)}}
                            onFocus={removeErrorMessage}
                            value={emailUser} 
                            type="email" 
                            placeholder="Email" 
                        />
                    </div>
                    {isRegistration && 
                    <div className="auth__form__row">
                        <label className="auth__form__label" htmlFor="login">Login</label>
                        <input 
                            className="auth__form__input" 
                            id="login" 
                            onChange={(e) => {setLoginUser(e.target.value)}}
                            onFocus={removeErrorMessage}
                            value={loginUser} 
                            type="text" 
                            placeholder="Login" 
                        />
                    </div>
                    }
                    <div className="auth__form__row">
                        <label className="auth__form__label" htmlFor="pass">Password</label>
                        <input 
                            className="auth__form__input" 
                            id="pass" 
                            onChange={(e) => {setPasswordUser(e.target.value)}}
                            onFocus={removeErrorMessage}
                            value={passwordUser} 
                            type="password" 
                            placeholder="Password" 
                        />
                    </div>
                    <div className="auth__form__row auth__form__footer">{
                        isRegistration ? <div className="auth__form__question">Have an account? <NavLink to="login">Log In</NavLink></div> : 
                        <div className="auth__form__question">Don't have an account? <NavLink to="registration">Register!</NavLink></div>
                    }
                        
                        <button className="auth__form__submit" onClick={submitData} type="submit">{isRegistration ? 'SignUp' : 'Log In'}</button>
                    </div>
                </form>
                {showError && (
                    <Transition
                    in={showError}
                    timeout={2000}
                    appear
                    mountOnEnter
                    exit
                >
                    {state => (
                        <AuthError error={errorData} state={state} closeError={removeErrorMessage}/>
                    )}
                </Transition>
                )}
            </div>
        </section>
    )
}

export default Login;
