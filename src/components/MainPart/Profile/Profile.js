import React from 'react';
import ProfileGallary from './ProfileGallary';
import ProfileVideo from './ProfileVideo';
import ProfileFriends from './ProfileFriends';
import '../Profile/profile.scss';
import ProfileLastNews from './ProfileLastNews';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import ProfileAddNews from './ProfileAddNews';

function Profile(props) {
    return (
        <div className="profile__wrapper">
            <ProfileInfoContainer />
            <ProfileAddNews />
            <ProfileLastNews />
            <ProfileFriends />
            <ProfileGallary />
            <ProfileVideo />
        </div>
    )
}

export default Profile;
