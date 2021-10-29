import React from 'react';
import { connect } from 'react-redux';
import { setProfileStatus } from '../../../../actions/actions';
import ProfileStatus from './ProfileStatus';

function ProfileStatusContainer(props) {
    return (
        <ProfileStatus userStatus={props.userStatus} setStatus={props.setStatus} />
    )
}

const mapStateToProps = (state) => {
    return {
        userStatus: state.profileData.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStatus: (status) => {
            dispatch(setProfileStatus(status));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStatusContainer);
