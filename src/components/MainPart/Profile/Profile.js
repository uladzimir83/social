import React from 'react';
import ProfileData from './ProfileData';
import ProfileGallary from './ProfileGallary';
import ProfileVideo from './ProfileVideo';
import ProfileFriends from './ProfileFriends';
import '../Profile/profile.scss';
import ProfileAddNews from './ProfileAddNews';
import ProfileLastNews from './ProfileLastNews';

function Profile(props) {
    return (
        <div className="profile__wrapper">
            <div className="profile__info profile__box">
                <div className="profile__photo">
                    <img src={props.store.photo} alt="user" />
                </div>
                <ProfileData store={props.store} />
            </div>
            <ProfileAddNews />
            <ProfileLastNews />
            <ProfileFriends />
            <ProfileGallary />
            <ProfileVideo />
        </div>
    )
}

export default Profile;
