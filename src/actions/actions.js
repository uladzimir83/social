export const ADD_PROFILE_DATA = 'ADD_PROFILE_DATA',
             ADD_PROFILE_STATUS = 'ADD_PROFILE_STATUS';


export const setProfileData = (data) => ({
    type: ADD_PROFILE_DATA,
    payload: data,
});

export const setProfileStatus = (status) => ({
    type: ADD_PROFILE_STATUS,
    status: status,
});