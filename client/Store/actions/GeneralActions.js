export const changeLoggedIn = (loggedIn) => {
    return {
        type: "LOGGED_IN",
        payload: loggedIn,
    };
};

export const changeUser = (user) => {
    return {
        type: "USER",
        payload: user,
    };
};

export const generalDispatchBundler = (payload) => {
    return {
        type: "GENERAL_BUNDLE",
        payload: { ...payload },
    };
};
