import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';

class ProfileInfoContainer extends Component {
    render() {
        return (
            <ProfileInfo />
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        
    }
}

export default connect(mapStateToProps)(ProfileInfoContainer);