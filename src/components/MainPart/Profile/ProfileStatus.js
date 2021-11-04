import React, { useState } from 'react'

function ProfileStatus(props) {
    let [state, setState] = useState(false);

    let statusClasses = ['status__input'];

    let setStatusByKeyEvent = (e) => {
        if (e.key === 'Enter') {
            setState(false);
            e.target.blur();
        }
    }

    if (state) {
        statusClasses.push('active')
    };

    return (
        <div className="profile__status">
            <input 
                className={statusClasses.join(' ')} 
                type="text" value={props.userStatus} 
                onBlur={() => {setState(false)}} 
                onFocus={() => {setState(true)}} 
                onChange={(e) => {props.setStatus(e.target.value)}}
                onKeyDown={setStatusByKeyEvent} />
        </div>
    )
}

export default ProfileStatus;