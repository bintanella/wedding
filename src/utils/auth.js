import api from '@/utils/api';

function getAccessToken() {
  return localStorage.getItem('accessToken') || null;
}
function getRefreshToken() {
  return localStorage.getItem('refreshToken') || null;
}
function setAccessToken(token) {
  localStorage.setItem('accessToken', token);
}
function setRefreshToken(token) {
  localStorage.setItem('refreshToken', token);
}
function removeAccessToken() {
  localStorage.removeItem('accessToken');
}
function removeRefreshToken() {
  localStorage.removeItem('refreshToken');
}

function login(username, password) {
  // dummy request
  return api.get(`/users`)
    .then(response => {
      const user = response.data.find(data => {
        return data.email == username && data.password == password
      });
      if (user && user.accessToken) {
        setAccessToken(user.accessToken);
        setRefreshToken(user.refreshToken);
        response.data.accessToken = user.accessToken;
        response.data.refreshToken = user.refreshToken;
      } else {
        removeAccessToken();
        removeRefreshToken();
        response.data.accessToken = null;
        response.data.refreshToken = null;
      }

      return user;
    })
    .catch(() => Promise.reject(error));

  // the real request
  return api.get(`/auth/login`, { username: username, password: password })
    .then(response => {
      if (response.data.accessToken) {
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
      } else {
        removeAccessToken();
        removeRefreshToken();
      }

      return response;
    })
    .catch(() => Promise.reject(error));
}

function logout() {
  removeAccessToken();
  removeRefreshToken();
}

function isLoggedIn() {
  return !!getAccessToken();
}

const auth = {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  login,
  logout,
  isLoggedIn,
};
 export default auth;