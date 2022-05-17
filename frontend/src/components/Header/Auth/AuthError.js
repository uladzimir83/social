import React from "react";
import './auth.scss';

const AuthError = ({error, closeError}) => {
    return (
        <div className="auth__error__wrapper" onClick={() => {closeError()}}>
            {error}
        </div>
    )
}

export default AuthError;