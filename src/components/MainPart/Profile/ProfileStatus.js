import React, { useState } from 'react'

function ProfileStatus() {
    let [status, setStatus] = useState({text:'set status', state: false});

    let statusClasses = ['status__input'];

    let setStatusByKeyEvent = (e) => {
        if (e.key === 'Enter') {
            setStatus({...status, state: false});
            e.target.blur();
        }
    }

    if (status.state) {
        statusClasses.push('active')
    };

    return (
        <div className="profile__status">
            <input 
                className={statusClasses.join(' ')} 
                type="text" value={status.text} 
                onBlur={() => {setStatus({...status, state: false})}} 
                onFocus={() => {setStatus({...status, state: true})}} 
                onChange={(e) => {setStatus({...status, text: e.target.value})}}
                onKeyDown={setStatusByKeyEvent} />
        </div>
    )
}

export default ProfileStatus;