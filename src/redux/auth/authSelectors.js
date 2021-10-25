const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getToken = state => state.auth.token;

const getRefreshingUser = state => state.auth.isRefreshingUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getRefreshingUser,
};

export default authSelectors;
