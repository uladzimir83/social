import { connect } from 'react-redux';
import { setProfileStatus } from '../../../../actions/actions';
import ProfileStatus from './ProfileStatus';

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

const ProfileStatusContainer =  connect(mapStateToProps, mapDispatchToProps)(ProfileStatus);

export default ProfileStatusContainer;
