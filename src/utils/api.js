import axios from 'axios';

// auth methods, can't import all these shits from auth as it'll create circular import
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
  console.log('accessToken', localStorage.getItem('accessToken'))
}
function removeRefreshToken() {
  localStorage.removeItem('refreshToken');
}

const detectErrorType = function (error) {
  if (error.response) {
    if (error.response.status === 503 || error.response.status === 504) {
      return api.errorTypes.SERVER_TIMEOUT;
    } else if (error.response.status === 0) {
      return api.errorTypes.NETWORK_ERROR;
    }
  } else if (error.request) {
    // client timeout
    if (error.message.match(/^timeout.+/)) {
      return api.errorTypes.SERVER_TIMEOUT;
    } else {
      return api.errorTypes.NETWORK_ERROR;
    }
  }

  return api.errorTypes.UNEXPECTED_ERROR;
};

function createApi () {
  return axios.create({
    baseURL: `https://628c7997a3fd714fd032a771.mockapi.io`,
    timeout: 60000,
    headers: { Authorization: `Bearer ${getAccessToken()}` },
  });
}
let api = createApi();

api.errorTypes = {
  NETWORK_ERROR: "networkError",
  SERVER_TIMEOUT: "serverTimeout",
  UNEXPECTED_ERROR: "unexpectedError",
};

api.interceptors.response.use(response => response, error => {
  const { response, config } = error;

  if (response.status !== 401) {
    return Promise.reject(error);
  }

  // Use default axios instance without the interceptor to refresh the token. No more infinite refresh loop.
  return axios
    .post('/auth/refresh-token/', {
      token: getRefreshToken(),
    })
    .then(response => {
      setAccessToken(response.data.access_token);
      return createApi();
    })
    .catch(() => Promise.reject(error));
})

api.retry = function (options = null) {
  var instance = axios.create(this.defaults);
  var retries = (options && options.retries) || 5;
  var retryCount = 0;

  instance.interceptors.response.use(null, function (error) {
    error._type = detectErrorType(error);

    if (error.config && retryCount < retries &&
      (error._type === api.errorTypes.SERVER_TIMEOUT || error._type === api.errorTypes.NETWORK_ERROR)) {
      error._retrying = true;
      error._retryCount = retryCount;

      if (typeof options.beforeRetry === "function") {
        // console.log('x', error)
        options.beforeRetry(error, 'haha');
      }

      return new Promise(resolve => {
        setTimeout(function () {
          resolve(instance.request(error.config))
        }, (Math.pow(2, retryCount) * 1000) + (Math.random() * 1000));

        retryCount += 1;
      });
    }

    error._retrying = false;

    return Promise.reject(error);
  });

  return instance;
}

export default api;
