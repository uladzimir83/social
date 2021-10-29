import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';

function ProfileInfoContainer(props) {
    return (
        <ProfileInfo userData={props.userData}/>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.profileData
    }
}

export default connect(mapStateToProps)(ProfileInfoContainer);