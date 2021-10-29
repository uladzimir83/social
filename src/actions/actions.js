export const ADD_PROFILE_DATA = 'ADD_PROFILE_DATA';


export const setProfileData = (data) => ({
    type: ADD_PROFILE_DATA,
    payload: data,
});