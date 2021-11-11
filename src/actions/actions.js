export const ADD_PROFILE_DATA = 'ADD_PROFILE_DATA',
             ADD_PROFILE_STATUS = 'ADD_PROFILE_STATUS',
             ADD_PROFILE_NEWS = 'ADD_PROFILE_NEWS',
             ADD_FULL_NEWS = 'ADD_FULL_NEWS';


export const setProfileData = (data) => ({
    type: ADD_PROFILE_DATA,
    data,
});

export const setProfileStatus = (status) => ({
    type: ADD_PROFILE_STATUS,
    status: status,
});

export const setProfileNews = (news) => ({
    type: ADD_PROFILE_NEWS,
    news,
});

export const setFullNews = (news) => ({
    type: ADD_FULL_NEWS,
    news,
})