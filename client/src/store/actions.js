export const changeIsModalOpen = (isModalOpen) => {
  return {
    type: "IS_MODAL_OPEN",
    payload: isModalOpen,
  };
};

export const changeLoggedIn = (loggedIn) => {
  return {
    type: "LOGGED_IN",
    payload: loggedIn,
  };
};

export const logUserIn = (user) => {
  return {
    type: "USER",
    payload: user,
  };
};

export const generalDispatchBundler = (payload) => {
  return {
    type: "GENERAL_BUNDLE",
    payload,
  };
};
