import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';

const mapStateToProps = (state) => {
    return {
        userData: state.profileData
    }
}

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;