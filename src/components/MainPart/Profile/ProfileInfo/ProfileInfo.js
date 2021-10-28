import React, { Component } from 'react';
import ProfileData from '../ProfileData';

export default class ProfileInfo extends Component {

    render() {
        return (
            <div className="profile__info profile__box">
                <div className="profile__photo">
                    <img src={props.store.photo} alt="user" />
                </div>
                <ProfileData store={props.store} />
            </div>
        )
    }
}


