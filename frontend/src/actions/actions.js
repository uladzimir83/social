export const ADD_PROFILE_DATA = 'ADD_PROFILE_DATA',
             ADD_PROFILE_STATUS = 'ADD_PROFILE_STATUS',
             ADD_PROFILE_NEWS = 'ADD_PROFILE_NEWS',
             ADD_FULL_NEWS = 'ADD_FULL_NEWS',
             CLEAN_NEWS_ARRAY = 'CLEAN_NEWS_ARRAY',
             USER_IS_AUTH = 'USER_IS_AUTH',
             SET_AUTH_DATA = 'SET_AUTH_DATA',
<<<<<<< HEAD
             SET_LOADER = 'SET_LOADER'
=======
             SET_IS_LOADING = 'SET_IS_LOADING'
>>>>>>> f921be14238e08bd754c3e8f8e9a66649424668c


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
});

export const cleanNews = () => ({
    type: CLEAN_NEWS_ARRAY
});

export const authUser = (authData) => ({
    type: USER_IS_AUTH,
    authData
});

export const setAuthData = (authData) => ({
    type: SET_AUTH_DATA,
    authData,
});

<<<<<<< HEAD
export const setLoader = (isLoading) => ({
    type: SET_LOADER,
    isLoading
});
=======
export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    isLoading,
})
>>>>>>> f921be14238e08bd754c3e8f8e9a66649424668c
