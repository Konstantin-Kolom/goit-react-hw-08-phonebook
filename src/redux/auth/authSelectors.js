const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getToken = state => state.auth.token;

const getRefreshingUser = state => state.auth.isRefreshingUser;

const getIsError = state => state.auth.isError;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getRefreshingUser,
  getIsError,
};

export default authSelectors;
