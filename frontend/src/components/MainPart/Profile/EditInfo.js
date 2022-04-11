import React, { useState } from 'react';
import { fields } from '../../../static/form.js';
import { addInfo } from '../../../asyncActions/asyncActions.js';

function EditInfo(props) {
    let [info, setInfo] = useState({});

    const sendInfo = (e) => {
        e.preventDefault();
        addInfo(info)
    }

    return (
        <div className='edit__wrapper'>
            <h1 className='title--center'>Tell us about yourself</h1>
            <form className='edit__form'>
                {fields.map((item, i) => {
                    let infoName = Object.keys(item);
                    return (
                        <div key={i} className='data__field__wrapper'>
                            <label className='edit__label' htmlFor={Object.keys(item)}>{Object.values(item)}</label>
                            <input className='data__field edit__data__field'
                                   id={infoName} 
                                   type='text'
                                   onChange={(e) => {setInfo({...info, [e.target.id]: e.target.value})}} />
                        </div>
                    )
                })}
                <button className='btn' onClick={(e) => {sendInfo(e)}}>Submit</button>
            </form>
        </div>
    )
}

export default EditInfo;