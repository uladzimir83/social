import React from "react";
import './auth.scss';

const AuthError = ({error, state, closeError}) => {
    return (
        <div className={`auth__error__wrapper ${state}`} onClick={() => {closeError()}}>
            {error}
        </div>
    )
}

export default AuthError;