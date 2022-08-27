(self["webpackChunkhello_world"] = self["webpackChunkhello_world"] || []).push([[179],{

/***/ 4274:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(2023);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(8345);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(9826);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/utils/api.js




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
  console.log('accessToken', localStorage.getItem('accessToken'));
}

function removeRefreshToken() {
  localStorage.removeItem('refreshToken');
}

var detectErrorType = function detectErrorType(error) {
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

function createApi() {
  return axios_default().create({
    baseURL: "https://628c7997a3fd714fd032a771.mockapi.io",
    timeout: 60000,
    headers: {
      Authorization: "Bearer ".concat(getAccessToken())
    }
  });
}

var api = createApi();
api.errorTypes = {
  NETWORK_ERROR: "networkError",
  SERVER_TIMEOUT: "serverTimeout",
  UNEXPECTED_ERROR: "unexpectedError"
};
api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var response = error.response,
      config = error.config;

  if (response.status !== 401) {
    return Promise.reject(error);
  } // Use default axios instance without the interceptor to refresh the token. No more infinite refresh loop.


  return axios_default().post('/auth/refresh-token/', {
    token: getRefreshToken()
  }).then(function (response) {
    setAccessToken(response.data.access_token);
    return createApi();
  }).catch(function () {
    return Promise.reject(error);
  });
});

api.retry = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var instance = axios_default().create(this.defaults);
  var retries = options && options.retries || 5;
  var retryCount = 0;
  instance.interceptors.response.use(null, function (error) {
    error._type = detectErrorType(error);

    if (error.config && retryCount < retries && (error._type === api.errorTypes.SERVER_TIMEOUT || error._type === api.errorTypes.NETWORK_ERROR)) {
      error._retrying = true;
      error._retryCount = retryCount;

      if (typeof options.beforeRetry === "function") {
        // console.log('x', error)
        options.beforeRetry(error, 'haha');
      }

      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(instance.request(error.config));
        }, Math.pow(2, retryCount) * 1000 + Math.random() * 1000);
        retryCount += 1;
      });
    }

    error._retrying = false;
    return Promise.reject(error);
  });
  return instance;
};

/* harmony default export */ var utils_api = (api);
;// CONCATENATED MODULE: ./src/utils/auth.js





function auth_getAccessToken() {
  return localStorage.getItem('accessToken') || null;
}

function auth_getRefreshToken() {
  return localStorage.getItem('refreshToken') || null;
}

function auth_setAccessToken(token) {
  localStorage.setItem('accessToken', token);
}

function auth_setRefreshToken(token) {
  localStorage.setItem('refreshToken', token);
}

function auth_removeAccessToken() {
  localStorage.removeItem('accessToken');
}

function auth_removeRefreshToken() {
  localStorage.removeItem('refreshToken');
}

function login(username, password) {
  // dummy request
  return utils_api.get("/users").then(function (response) {
    var user = response.data.find(function (data) {
      return data.email == username && data.password == password;
    });

    if (user && user.accessToken) {
      auth_setAccessToken(user.accessToken);
      auth_setRefreshToken(user.refreshToken);
      response.data.accessToken = user.accessToken;
      response.data.refreshToken = user.refreshToken;
    } else {
      auth_removeAccessToken();
      auth_removeRefreshToken();
      response.data.accessToken = null;
      response.data.refreshToken = null;
    }

    return user;
  }).catch(function () {
    return Promise.reject(error);
  }); // the real request

  return utils_api.get("/auth/login", {
    username: username,
    password: password
  }).then(function (response) {
    if (response.data.accessToken) {
      auth_setAccessToken(response.data.accessToken);
      auth_setRefreshToken(response.data.refreshToken);
    } else {
      auth_removeAccessToken();
      auth_removeRefreshToken();
    }

    return response;
  }).catch(function () {
    return Promise.reject(error);
  });
}

function logout() {
  auth_removeAccessToken();
  auth_removeRefreshToken();
}

function isLoggedIn() {
  return !!auth_getAccessToken();
}

var auth = {
  getAccessToken: auth_getAccessToken,
  getRefreshToken: auth_getRefreshToken,
  setAccessToken: auth_setAccessToken,
  setRefreshToken: auth_setRefreshToken,
  removeAccessToken: auth_removeAccessToken,
  removeRefreshToken: auth_removeRefreshToken,
  login: login,
  logout: logout,
  isLoggedIn: isLoggedIn
};
/* harmony default export */ var utils_auth = (auth);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js + 13 modules
var i18next = __webpack_require__(7268);
// EXTERNAL MODULE: ./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var i18nextBrowserLanguageDetector = __webpack_require__(6071);
;// CONCATENATED MODULE: ./src/utils/i18next.js


i18next/* default.use */.ZP.use(i18nextBrowserLanguageDetector/* default */.Z).init({
  fallbackLng: 'en',
  supportedLngs: ['id', 'en'],
  debug: false,
  detection: {
    order: ['path'],
    lookupFromPathIndex: 0
  },
  resources: {
    en: {
      translation: {
        components: {
          errors: {
            networkError: {
              title: "Network error",
              message: "There seems to be an issue with the network. Please try again later.",
              retryingMessage: "We are attempting to reload this feature"
            },
            serverTimeout: {
              title: "Server timeout",
              message: "Our servers are taking too long to respond to this request. Please try again later.",
              retryingMessage: "We are attempting to reload this feature"
            },
            unexpectedError: {
              title: "Unexpected error",
              message: "Our team has been informed and will be looking into this shortly."
            }
          }
        },
        resepsi: {
          cover: {
            judul: "THE WEDDING OF",
            tanggal: "11.12.2022",
            pria: "Bintan",
            dan: "dan",
            wanita: "Ella"
          },
          alquran: {
            judul: "Qs Ar-rum 21",
            deskripsi: "Glory be to God who created spouses for you from yourselves for you to gain rest from them, and kept love and mercy between yourselves. By asking for the Grace of Allah SWT, we intend to invite you to our wedding reception."
          },
          mempelai: {
            mempelai1: "THE BRIDE",
            mempelai1Nama: "Bintan<br>Pradika",
            mempelai1Anak: "Second son of:",
            mempelai1Ortu: "Mr. Suratno & Mrs. Yanti",
            mempelai1Linkedin: "https://www.linkedin.com/in/bintanpradika/",
            mempelai2: "THE GROOM",
            mempelai2Nama: "Nabila Nur<br>Harindrastuti",
            mempelai2Anak: "Third daughter of:",
            mempelai2Ortu: "Mr. Haryanto WS & Mrs. Emmy Indrati",
            mempelai2Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/"
          },
          resepsi: {
            judul: "WEDDING RECEPTION",
            tanggal: "SUNDAY, 11 DECEMBER 2022",
            jam: "14:00-16:00 WIB",
            alamat: "Shangri-La Hotel<br>Jl. Jenderal Sudirman No.Kav. 1, Tanah Abang<br>Jakarta",
            google: "https://goo.gl/maps/FcpCyjUg3NavE7ak6"
          },
          reservasi: {
            judul: "RSVP",
            deskripsi: "Invited guests are welocomed to<br>fill out the attendance confirmation below",
            nama: "Name",
            kehadiran: "Attendance",
            jumlah: "Number of guests"
          },
          streaming: {
            judul: "Live Streaming",
            deskripsi: "Our special occasion will also available virtually<br>via zoom through the following link",
            link: "https://zoom.us/"
          },
          gallery: {
            judul: "Our Gallery"
          },
          gift: {
            judul: "Wedding Love Gift",
            deskripsi: "If guests want to send gifts to the bride and groom,<br>we would be very thankful",
            link: "http://link.com",
            aksi: "Click here"
          },
          terimaKasih: {
            judul: "Thank you",
            deskripsi: "We wish you all the very best,<br>We would be honored if you could attend our wedding"
          }
        },
        unduhMantu: {
          cover: {
            judul: "THE WEDDING OF",
            tanggal: "17.12.2022",
            pria: "Bintan",
            dan: "dan",
            wanita: "Ella"
          },
          alquran: {
            judul: "Qs Ar-rum 21",
            deskripsi: "Glory be to God who created spouses for you from yourselves for you to gain rest from them, and kept love and mercy between yourselves. By asking for the Grace of Allah SWT, we intend to invite you to our wedding reception."
          },
          mempelai: {
            mempelai1: "THE BRIDE",
            mempelai1Nama: "Bintan<br>Pradika",
            mempelai1Ortu: "Mr. Suratno & Mrs. Yanti",
            mempelai1Linkedin: "https://www.linkedin.com/in/bintanpradika/",
            mempelai2: "THE GROOM",
            mempelai2Nama: "Nabila Nur<br>Harindrastuti",
            mempelai2Ortu: "Mr. Haryanto WS & Mrs. Emmy Indrati",
            mempelai2Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/"
          },
          resepsi: {
            judul: "NGUNDUH MANTU",
            tanggal: "SATURDAY, 17 DECEMBER 2023",
            jam: "12:30-17:00 WIB",
            alamat: "Planet Holiday Hotel<br>Jl. Raja Ali H., Sei Jodoh,<br>Batam",
            google: "https://maps.app.goo.gl/P6pggUdoGgHs9WCG6"
          },
          reservasi: {
            judul: "RSVP",
            deskripsi: "Invited guests are welocomed to<br>fill out the attendance confirmation below",
            nama: "Name",
            kehadiran: "Attendance",
            jumlah: "Number of guests"
          },
          streaming: {
            judul: "Live Streaming",
            deskripsi: "Our special occasion will also available virtually<br>via zoom through the following link",
            link: "https://zoom.us/"
          },
          gallery: {
            judul: "Our Gallery"
          },
          gift: {
            judul: "Wedding Love Gift",
            deskripsi: "If guests want to send gifts to the bride and groom,<br>we would be very thankful",
            link: "http://link.com",
            aksi: "Click here"
          },
          terimaKasih: {
            judul: "Thank you",
            deskripsi: "We wish you all the very best,<br>We would be honored if you could attend our wedding"
          }
        }
      }
    },
    id: {
      translation: {
        components: {
          errors: {
            networkError: {
              title: "Jaringan bermasalah",
              message: "There seems to be an issue with the network. Please try again later.",
              retryingMessage: "We are attempting to reload this feature"
            },
            serverTimeout: {
              title: "Koneksi ke server terputus",
              message: "Our servers are taking too long to respond to this request. Please try again later.",
              retryingMessage: "We are attempting to reload this feature"
            },
            unexpectedError: {
              title: "Masalah tidak teridentifikasi",
              message: "Our team has been informed and will be looking into this shortly."
            }
          }
        },
        resepsi: {
          cover: {
            judul: "THE WEDDING OF",
            tanggal: "11.12.2022",
            pria: "Bintan",
            dan: "dan",
            wanita: "Ella"
          },
          alquran: {
            judul: "Qs Ar-rum 21",
            deskripsi: "Maha Suci Allah yang telah menciptakan manusia dengan berpasang-pasangan. Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud mengundang Saudara/i dalam acara resepsi pernikahan kami."
          },
          mempelai: {
            mempelai1: "THE BRIDE",
            mempelai1Nama: "Bintan<br>Pradika",
            mempelai1Ortu: "Bapak Suratno & Ibu Yanti",
            mempelai1Linkedin: "https://www.linkedin.com/in/bintanpradika/",
            mempelai2: "THE GROOM",
            mempelai2Nama: "Nabila Nur<br>Harindrastuti",
            mempelai2Ortu: "Bapak Haryanto WS & Ibu Emmy Indrati",
            mempelai2Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/"
          },
          resepsi: {
            judul: "RESEPSI",
            tanggal: "MINGGU, 11 DESEMBER 2022",
            jam: "14:00-16:00 WIB",
            alamat: "Shangri-La Hotel<br>Jl. Jenderal Sudirman No.Kav. 1, Tanah Abang<br>Jakarta",
            google: "https://goo.gl/maps/FcpCyjUg3NavE7ak6"
          },
          reservasi: {
            judul: "Reservasi Kehadiran",
            deskripsi: "Diharapkan kepada tamu undangan untuk<br>mengisi formulir kehadiran dibawah ini",
            nama: "Nama",
            kehadiran: "Kehadiran",
            jumlah: "Jumlah"
          },
          streaming: {
            judul: "Live Streaming",
            deskripsi: "Kami juga akan mempublikasikan pernikahan secara virtual<br>melalui zoom link berikut",
            link: "https://zoom.us/"
          },
          gallery: {
            judul: "Our Gallery"
          },
          gift: {
            judul: "Wedding Love Gift",
            deskripsi: "Apabila tamu ingin mengirimkan hadiah ke pada kedua mempelai,<br>kami akan sangat berterima kasih",
            link: "http://link.com",
            aksi: "Klik disini"
          },
          terimaKasih: {
            judul: "Terima Kasih",
            deskripsi: "Merupakan suatu kebahagiaan dan kehormatan bagi kami,<br>apabila Bapak/Ibu/Saudara/i berkenan hadir dan<br>memberikan do’a restu kepada Kami."
          }
        },
        unduhMantu: {
          cover: {
            judul: "THE WEDDING OF",
            tanggal: "17.12.2022",
            pria: "Bintan",
            dan: "dan",
            wanita: "Ella"
          },
          alquran: {
            judul: "Qs Ar-rum 21",
            deskripsi: "Maha Suci Allah yang telah menciptakan manusia dengan berpasang-pasangan. Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud mengundang Saudara/i dalam acara resepsi pernikahan kami."
          },
          mempelai: {
            mempelai1: "THE BRIDE",
            mempelai1Nama: "Bintan<br>Pradika",
            mempelai1Anak: "Putra kedua dari:",
            mempelai1Ortu: "Bapak Suratno & Ibu Yanti",
            mempelai1Linkedin: "https://www.linkedin.com/in/bintanpradika/",
            mempelai2: "THE GROOM",
            mempelai2Nama: "Nabila Nur<br>Harindrastuti",
            mempelai2Anak: "Putri ketiga dari:",
            mempelai2Ortu: "Bapak Haryanto WS & Ibu Emmy Indrati",
            mempelai2Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/"
          },
          resepsi: {
            judul: "NGUNDUH MANTU",
            tanggal: "SABTU, 17 DESEMBER 2022",
            jam: "12:30-17:00 WIB",
            alamat: "Planet Holiday Hotel<br>Jl. Raja Ali H., Sei Jodoh,<br>Batam",
            google: "https://maps.app.goo.gl/P6pggUdoGgHs9WCG6"
          },
          reservasi: {
            judul: "Reservasi Kehadiran",
            deskripsi: "Diharapkan kepada tamu undangan untuk<br>mengisi formulir kehadiran dibawah ini",
            nama: "Nama",
            kehadiran: "Kehadiran",
            jumlah: "Jumlah"
          },
          streaming: {
            judul: "Live Streaming",
            deskripsi: "Kami juga akan mempublikasikan pernikahan secara virtual<br>melalui zoom link berikut",
            link: "https://zoom.us/"
          },
          gallery: {
            judul: "Our Gallery"
          },
          gift: {
            judul: "Wedding Love Gift",
            deskripsi: "Apabila tamu ingin mengirimkan hadiah ke pada kedua mempelai,<br>kami akan sangat berterima kasih",
            link: "http://link.com",
            aksi: "Klik disini"
          },
          terimaKasih: {
            judul: "Terima Kasih",
            deskripsi: "Merupakan suatu kebahagiaan dan kehormatan bagi kami,<br>apabila Bapak/Ibu/Saudara/i berkenan hadir dan<br>memberikan do’a restu kepada Kami."
          }
        }
      }
    }
  }
});
/* harmony default export */ var utils_i18next = (i18next/* default */.ZP);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(7042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(2772);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
;// CONCATENATED MODULE: ./src/utils/url.js




function url(urlWithoutLocale) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : utils_i18next.language;

  if (urlWithoutLocale === null) {
    var pathname = window.location.pathname;
    urlWithoutLocale = pathname.slice(pathname.indexOf("/", 1));
  }

  return "/".concat(locale).concat(urlWithoutLocale);
} // usage
// url('/user/create') // go to different path without changing locale
// url('/user', 'en') // go to different path with changing locale
// url(null, 'en') // just changing locale without changing current path
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=7ba5bd90&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/App.vue

var script = {}


/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var App_api; }
component.options.__file = "src/App.vue"
/* harmony default export */ var App = (component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts-vue/LayoutBlank.vue?vue&type=template&id=2749ecd8&
var LayoutBlankvue_type_template_id_2749ecd8_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var LayoutBlankvue_type_template_id_2749ecd8_staticRenderFns = []
LayoutBlankvue_type_template_id_2749ecd8_render._withStripped = true


;// CONCATENATED MODULE: ./src/layouts-vue/LayoutBlank.vue?vue&type=template&id=2749ecd8&

;// CONCATENATED MODULE: ./src/layouts-vue/LayoutBlank.vue

var LayoutBlank_script = {}


/* normalize component */
;
var LayoutBlank_component = (0,componentNormalizer/* default */.Z)(
  LayoutBlank_script,
  LayoutBlankvue_type_template_id_2749ecd8_render,
  LayoutBlankvue_type_template_id_2749ecd8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var LayoutBlank_api; }
LayoutBlank_component.options.__file = "src/layouts-vue/LayoutBlank.vue"
/* harmony default export */ var LayoutBlank = (LayoutBlank_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts-vue/LayoutDefault.vue?vue&type=template&id=520873fe&
var LayoutDefaultvue_type_template_id_520873fe_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex flex-column height-100" }, [
    _c("div", { staticClass: "flex" }, [
      _c(
        "div",
        {
          staticClass:
            "padding-y-12 border-bottom border-primary border-width-2",
          staticStyle: { "min-width": "238px" },
        },
        [
          _c(
            "router-link",
            {
              staticClass:
                "a a-nocolor flex flex-items-center flex-justify-center",
              attrs: { to: "/" },
            },
            [
              _c("span", { staticClass: "margin-left-8 text-primary" }, [
                _vm._v("Showcasing app"),
              ]),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "padding-y-12 padding-x-28 bg-primary text-white grow-1 flex flex-items-center",
        },
        [
          _c("div", { staticClass: "fw-700 margin-right-auto" }),
          _vm._v(" "),
          _vm.isLoggedIn
            ? _c(
                "a",
                {
                  staticClass:
                    "a a-nocolor hover-text-light margin-left-16 cursor-pointer",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.logout.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Logout")]
              )
            : _c(
                "router-link",
                {
                  staticClass: "a a-nocolor hover-text-light margin-left-16",
                  attrs: { to: _vm.$url("/login") },
                },
                [_vm._v("Login")]
              ),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "hidden" },
      [
        _c(
          "router-link",
          { staticClass: "a block margin-4", attrs: { to: "/" } },
          [_vm._v("\n      /")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "a block margin-4", attrs: { to: "/user" } },
          [_vm._v("\n      /user")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "a block margin-4", attrs: { to: "/user/create" } },
          [_vm._v("\n      /user/create")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass: "a block margin-4",
            attrs: { to: "/user/create#foo" },
          },
          [_vm._v("\n      /user/create#foo")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass: "a block margin-4",
            attrs: {
              to: {
                name: "user-create",
                params: { id: "create" },
                query: { foo: "bar" },
              },
              exact: "",
            },
          },
          [_vm._v("\n      /user/create?foo=bar (exact)")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass: "a block margin-4",
            attrs: {
              to: { path: "/user/create", query: { foo: "bar", baz: "qux" } },
            },
          },
          [_vm._v("\n      /user/create?foo=bar&baz=qux")]
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "grow-1 flex" }, [
      _c(
        "div",
        {
          staticClass: "border-right border-light border-width-2",
          staticStyle: { "min-width": "240px" },
        },
        [
          _c(
            "div",
            { staticClass: "padding-12 text-grayer" },
            [
              _c(
                "router-link",
                {
                  staticClass: "a a-nocolor block padding-y-8 padding-x-12",
                  attrs: {
                    "exact-active-class": "text-darkest bg-lighter rounded-4",
                    to: _vm.$url("/"),
                  },
                },
                [_vm._v("\n          Home\n        ")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "a a-nocolor block padding-y-8 padding-x-12",
                  attrs: {
                    "exact-active-class": "text-darkest bg-lighter rounded-4",
                    to: _vm.$url("/user"),
                  },
                },
                [_vm._v("\n          User list\n        ")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "a a-nocolor block padding-y-8 padding-x-12",
                  attrs: {
                    "exact-active-class": "text-darkest bg-lighter rounded-4",
                    to: _vm.$url("/user/datatables"),
                  },
                },
                [_vm._v("\n          User list (datatables)\n        ")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "a a-nocolor block padding-y-8 padding-x-12",
                  attrs: {
                    "exact-active-class": "text-darkest bg-lighter rounded-4",
                    to: _vm.$url("/user/create"),
                  },
                },
                [_vm._v("\n          User form\n        ")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "a a-nocolor block padding-y-8 padding-x-12",
                  attrs: {
                    "exact-active-class": "text-darkest bg-lighter rounded-4",
                    to: "/asdf",
                  },
                },
                [_vm._v("\n          Non exist page\n        ")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "a a-nocolor block padding-y-8 padding-x-12",
                  attrs: {
                    "exact-active-class": "text-darkest bg-lighter rounded-4",
                    to: _vm.$url("/asdf"),
                  },
                },
                [_vm._v("\n          Non exist page (with en)\n        ")]
              ),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "grow-1 bg-lightest padding-top-48" }, [
        _c("div", { staticClass: "container-compact" }, [_c("router-view")], 1),
      ]),
    ]),
  ])
}
var LayoutDefaultvue_type_template_id_520873fe_staticRenderFns = []
LayoutDefaultvue_type_template_id_520873fe_render._withStripped = true


;// CONCATENATED MODULE: ./src/layouts-vue/LayoutDefault.vue?vue&type=template&id=520873fe&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts-vue/LayoutDefault.vue?vue&type=script&lang=js&




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var LayoutDefaultvue_type_script_lang_js_ = ({
  name: 'LayoutDefault',
  data: function data() {
    return {
      isLoggedIn: utils_auth.isLoggedIn()
    };
  },
  mounted: function mounted() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    logout: function logout() {
      utils_auth.logout();
      this.isLoggedIn = utils_auth.isLoggedIn();
      this.$router.push(url(""));
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts-vue/LayoutDefault.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_vue_LayoutDefaultvue_type_script_lang_js_ = (LayoutDefaultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts-vue/LayoutDefault.vue?vue&type=style&index=0&lang=scss&
var LayoutDefaultvue_type_style_index_0_lang_scss_ = __webpack_require__(2181);
;// CONCATENATED MODULE: ./src/layouts-vue/LayoutDefault.vue?vue&type=style&index=0&lang=scss&

;// CONCATENATED MODULE: ./src/layouts-vue/LayoutDefault.vue



;


/* normalize component */

var LayoutDefault_component = (0,componentNormalizer/* default */.Z)(
  layouts_vue_LayoutDefaultvue_type_script_lang_js_,
  LayoutDefaultvue_type_template_id_520873fe_render,
  LayoutDefaultvue_type_template_id_520873fe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var LayoutDefault_api; }
LayoutDefault_component.options.__file = "src/layouts-vue/LayoutDefault.vue"
/* harmony default export */ var LayoutDefault = (LayoutDefault_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages-vue/ErrorPage.vue?vue&type=template&id=3c6abc3c&
var ErrorPagevue_type_template_id_3c6abc3c_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "height-100 flex flex-items-center flex-justify-center bg-lighter",
    },
    [
      _c(
        "div",
        {
          staticClass:
            "padding-x-24 padding-y-36 rounded border shadow bg-white text-center",
          staticStyle: { width: "400px" },
        },
        [
          _c("h1", { staticClass: "text-red" }, [
            _vm._v(_vm._s(this.$route.meta.title)),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "margin-top-20" }, [
            _vm._v(_vm._s(this.$route.meta.description)),
          ]),
        ]
      ),
    ]
  )
}
var ErrorPagevue_type_template_id_3c6abc3c_staticRenderFns = []
ErrorPagevue_type_template_id_3c6abc3c_render._withStripped = true


;// CONCATENATED MODULE: ./src/pages-vue/ErrorPage.vue?vue&type=template&id=3c6abc3c&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages-vue/ErrorPage.vue?vue&type=script&lang=js&




function ErrorPagevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function ErrorPagevue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { ErrorPagevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { ErrorPagevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
/* harmony default export */ var ErrorPagevue_type_script_lang_js_ = ({
  name: 'ErrorPage',
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    return ErrorPagevue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {},
  methods: {}
});
;// CONCATENATED MODULE: ./src/pages-vue/ErrorPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_vue_ErrorPagevue_type_script_lang_js_ = (ErrorPagevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/pages-vue/ErrorPage.vue





/* normalize component */
;
var ErrorPage_component = (0,componentNormalizer/* default */.Z)(
  pages_vue_ErrorPagevue_type_script_lang_js_,
  ErrorPagevue_type_template_id_3c6abc3c_render,
  ErrorPagevue_type_template_id_3c6abc3c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ErrorPage_api; }
ErrorPage_component.options.__file = "src/pages-vue/ErrorPage.vue"
/* harmony default export */ var ErrorPage = (ErrorPage_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages-vue/BintanElla.vue?vue&type=template&id=17e87cfe&
var BintanEllavue_type_template_id_17e87cfe_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "has-bg-img height-100vh height-auto-sm padding-y-96-sm padding-x-24",
      },
      [
        _c("div", {
          staticClass: "bg-img bg-img-no-repeat",
          staticStyle: { transition: "background-image 0.4s ease-in-out" },
          style: {
            backgroundImage: "url('" + _vm.usedCover + "')",
          },
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "bg-img bg-black",
          staticStyle: { opacity: "0.2" },
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex flex-column flex-items-center flex-justify-center text-center height-100 text-white padding-y-96-sm",
          },
          [
            _c(
              "div",
              {
                staticClass: "h5 fw-400",
                staticStyle: { "letter-spacing": "4px" },
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$t("resepsi.cover.judul")) +
                    "\n      "
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "h1 fw-200 margin-top-40 margin-bottom-24-sm ff-vibes fs-cover-mempelai",
                staticStyle: {
                  "font-size": "120px",
                  "line-height": "120px",
                  "letter-spacing": "1px",
                },
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$t("resepsi.cover.pria")) +
                    "\n        "
                ),
                _c(
                  "span",
                  {
                    staticClass: "ff-vibes margin-x-12 fs-cover-dan",
                    staticStyle: { "font-size": "52px" },
                  },
                  [_vm._v("&")]
                ),
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$t("resepsi.cover.wanita")) +
                    "\n      "
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "fw-300 padding-x-8 padding-y-4 rounded-4",
                staticStyle: {
                  "letter-spacing": "4.7px",
                  background: "rgb(0, 0, 0, .5)",
                },
              },
              [
                _c("span", {
                  domProps: {
                    innerHTML: _vm._s(_vm.$t("resepsi.cover.tanggal")),
                  },
                }),
              ]
            ),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "has-bg-img padding-y-92 padding-y-60-sm text-center text-grayer",
      },
      [
        _c("div", {
          staticClass: "bg-img bg-img-no-repeat",
          staticStyle: {
            "background-image":
              "url('https://groovepublic.com/wp-content/uploads/2022/03/shadow.png')",
            opacity: "0.07",
          },
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "padding-x-24 margin-x-auto width-100",
            staticStyle: { "max-width": "546px" },
          },
          [
            _c(
              "div",
              {
                staticClass: "ff-vibes fw-500",
                staticStyle: { "font-size": "44px", "letter-spacing": "2px" },
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$t("resepsi.alquran.judul")) +
                    "\n      "
                ),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "margin-top-36 fw-300" }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$t("resepsi.alquran.deskripsi")) +
                  "\n      "
              ),
            ]),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "padding-y-48",
        staticStyle: { "background-color": "rgba(245, 245, 245, .2)" },
      },
      [
        _c(
          "div",
          {
            staticClass: "padding-x-24 margin-x-auto width-100",
            staticStyle: { "max-width": "900px" },
          },
          [
            _c("div", { staticClass: "flex block-sm" }, [
              _c("div", { staticClass: "width-50 width-100-sm text-center" }, [
                _c(
                  "div",
                  {
                    staticClass: "fw-300 padding-bottom-20 text-dark",
                    staticStyle: { "letter-spacing": "10px" },
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("resepsi.mempelai.mempelai1")) +
                        "\n          "
                    ),
                  ]
                ),
                _vm._v(" "),
                _vm._m(0),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "width-50 width-100-sm text-center flex flex-column flex-justify-center",
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "margin-top-100 margin-top-36-sm margin-x-auto width-100",
                      staticStyle: { "max-width": "384px" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "ff-vibes fw-100 text-wrap text-grayest",
                          staticStyle: {
                            "font-size": "52px",
                            "line-height": "60px",
                          },
                        },
                        [
                          _c("span", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$t("resepsi.mempelai.mempelai1Nama")
                              ),
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("hr", { staticClass: "border-light margin-y-24" }),
                      _vm._v(" "),
                      _c("div", [
                        _c("span", { staticClass: "fw-300 text-grayer" }, [
                          _c("span", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$t("resepsi.mempelai.mempelai1Anak")
                              ),
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "margin-top-4" }, [
                        _c(
                          "span",
                          {
                            staticClass: "h4 fw-300 text-grayest",
                            staticStyle: { "letter-spacing": "1.2px" },
                          },
                          [
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$t("resepsi.mempelai.mempelai1Ortu")
                                ),
                              },
                            }),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("hr", { staticClass: "border-light margin-y-24" }),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "a a-nocolor block text-grayer",
                          staticStyle: { "font-size": "12px" },
                          attrs: {
                            href: _vm.$t("resepsi.mempelai.mempelai1Linkedin"),
                          },
                        },
                        [
                          _c("img", {
                            staticClass: "margin-right-4",
                            staticStyle: { width: "16px" },
                            attrs: {
                              src: "https://www.clipartmax.com/png/middle/30-308556_joshua-fink-linkedin-grey-linkedin-logo-png.png",
                            },
                          }),
                          _vm._v("\n              linkedin\n            "),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex block-sm margin-top-80 margin-top-60-sm padding-top-80 padding-top-60-sm",
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "width-50 width-100-sm text-center hidden-sm-greater",
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "fw-300 padding-bottom-20 text-dark",
                        staticStyle: { "letter-spacing": "10px" },
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("resepsi.mempelai.mempelai1")) +
                            "\n          "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(1),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "width-50 width-100-sm text-center flex flex-column flex-justify-center",
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "margin-top-100 margin-top-36-sm margin-x-auto width-100",
                        staticStyle: { "max-width": "384px" },
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "ff-vibes fw-100 text-wrap text-grayest",
                            staticStyle: {
                              "font-size": "52px",
                              "line-height": "60px",
                            },
                          },
                          [
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$t("resepsi.mempelai.mempelai2Nama")
                                ),
                              },
                            }),
                          ]
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "border-light margin-y-24" }),
                        _vm._v(" "),
                        _c("div", [
                          _c("span", { staticClass: "fw-300 text-grayer" }, [
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$t("resepsi.mempelai.mempelai2Anak")
                                ),
                              },
                            }),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "margin-top-4" }, [
                          _c(
                            "span",
                            {
                              staticClass: "h4 fw-300 text-grayest",
                              staticStyle: { "letter-spacing": "1.2px" },
                            },
                            [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.$t("resepsi.mempelai.mempelai2Ortu")
                                  ),
                                },
                              }),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("hr", { staticClass: "border-light margin-y-24" }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "a a-nocolor block text-grayer",
                            staticStyle: { "font-size": "12px" },
                            attrs: {
                              href: _vm.$t(
                                "resepsi.mempelai.mempelai2Linkedin"
                              ),
                            },
                          },
                          [
                            _c("img", {
                              staticClass: "margin-right-4",
                              staticStyle: { width: "16px" },
                              attrs: {
                                src: "https://www.clipartmax.com/png/middle/30-308556_joshua-fink-linkedin-grey-linkedin-logo-png.png",
                              },
                            }),
                            _vm._v("\n              linkedin\n            "),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "width-50 width-100-sm text-center hidden-sm",
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "fw-300 padding-bottom-20 text-dark",
                        staticStyle: { "letter-spacing": "10px" },
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("resepsi.mempelai.mempelai1")) +
                            "\n          "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(2),
                  ]
                ),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "padding-y-40" }),
      ]
    ),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "has-bg-img padding-y-92 padding-y-60-sm text-center text-grayer",
      },
      [
        _c("div", {
          staticClass: "bg-img bg-img-no-repeat",
          staticStyle: {
            "background-image":
              "url('https://groovepublic.com/wp-content/uploads/2022/03/shadow.png')",
            opacity: "0.07",
          },
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "padding-x-24 margin-x-auto width-100",
            staticStyle: { "max-width": "900px" },
          },
          [
            _c(
              "div",
              {
                staticClass: "h2 fw-300 fs-italic",
                staticStyle: { "letter-spacing": "1.2px" },
              },
              [
                _c("span", {
                  domProps: {
                    innerHTML: _vm._s(_vm.$t("resepsi.resepsi.judul")),
                  },
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "fw-700 margin-top-24",
                staticStyle: { "letter-spacing": "2px" },
              },
              [
                _c(
                  "span",
                  { staticClass: "h4", staticStyle: { color: "#66686b" } },
                  [
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(_vm.$t("resepsi.resepsi.tanggal")),
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("span", { staticClass: "h5" }, [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(_vm.$t("resepsi.resepsi.jam")),
                    },
                  }),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "margin-top-28 margin-x-auto width-100",
                staticStyle: { "max-width": "546px" },
              },
              [
                _c("span", {
                  domProps: {
                    innerHTML: _vm._s(_vm.$t("resepsi.resepsi.alamat")),
                  },
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "a block margin-top-8",
                attrs: { href: _vm.$t("resepsi.resepsi.google") },
              },
              [_vm._v("\n        Google maps\n      ")]
            ),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "has-bg-img padding-y-92 padding-y-60-sm text-grayest" },
      [
        _c("div", {
          staticClass: "bg-img bg-img-no-repeat",
          style: {
            backgroundImage: "url('" + _vm.cover[0] + "')",
            opacity: 0.3,
          },
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "bg-img bg-gray",
          staticStyle: { opacity: "0.1" },
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex padding-x-24 margin-x-auto width-100",
            staticStyle: { "max-width": "900px" },
          },
          [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "width-50 width-100-sm padding-24 rounded-8",
                staticStyle: { "background-color": "rgba(255, 255, 255, .7)" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "h2 fw-300 fs-italic",
                    staticStyle: { "letter-spacing": "1.2px" },
                  },
                  [
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(_vm.$t("resepsi.reservasi.judul")),
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "margin-top-36 fw-300" }, [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(_vm.$t("resepsi.reservasi.deskripsi")),
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "margin-top-28" }, [
                  _c("div", { staticClass: "margin-bottom-24", class: {} }, [
                    _c("label", { staticClass: "form-label" }, [
                      _c("span", {
                        domProps: {
                          innerHTML: _vm._s(_vm.$t("resepsi.reservasi.nama")),
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.tamu.name,
                          expression: "tamu.name",
                        },
                      ],
                      staticClass: "form-text",
                      attrs: { type: "text", required: "" },
                      domProps: { value: _vm.tamu.name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.tamu, "name", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex block-sm" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "width-50 width-100-sm padding-right-4 padding-right-0-sm margin-bottom-24",
                      class: {},
                    },
                    [
                      _c("label", { staticClass: "form-label" }, [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$t("resepsi.reservasi.kehadiran")
                            ),
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.tamu.kehadiran,
                            expression: "tamu.kehadiran",
                          },
                        ],
                        staticClass: "form-text",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.tamu.kehadiran },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.tamu, "kehadiran", $event.target.value)
                          },
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "width-50 width-100-sm padding-left-4 padding-left-0-sm margin-bottom-24",
                      class: {},
                    },
                    [
                      _c("label", { staticClass: "form-label" }, [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$t("resepsi.reservasi.jumlah")
                            ),
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.tamu.jumlah,
                            expression: "tamu.jumlah",
                          },
                        ],
                        staticClass: "form-text",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.tamu.jumlah },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.tamu, "jumlah", $event.target.value)
                          },
                        },
                      }),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "button",
                    {
                      staticClass: "button",
                      attrs: { disabled:  false && 0 },
                      on: {
                        click: function ($event) {
                           false && 0
                        },
                      },
                    },
                    [_vm._v("\n            Submit\n          ")]
                  ),
                ]),
              ]
            ),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "has-bg-img padding-y-92 padding-y-60-sm text-grayest" },
      [
        _c("div", {
          staticClass: "bg-img bg-img-no-repeat",
          staticStyle: {
            "background-image":
              "url('https://groovepublic.com/wp-content/uploads/2022/03/shadow.png')",
            opacity: "0.07",
          },
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex padding-x-24 margin-x-auto width-100",
            staticStyle: { "max-width": "900px" },
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "width-50 width-100-sm padding-right-24 padding-right-0-sm text-right text-center-sm",
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "h2 fw-300 fs-italic",
                    staticStyle: { "letter-spacing": "1.2px" },
                  },
                  [
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(_vm.$t("resepsi.streaming.judul")),
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "margin-top-36 fw-300" }, [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(_vm.$t("resepsi.streaming.deskripsi")),
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "margin-top-28" }, [
                  _c(
                    "a",
                    {
                      staticClass: "button",
                      attrs: { href: _vm.$t("resepsi.streaming.deskripsi") },
                    },
                    [_vm._v("\n            Streaming\n          ")]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _vm._m(5),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "has-bg-img padding-y-92 padding-y-60-sm text-center text-grayer",
      },
      [
        _c("div", {
          staticClass: "bg-img bg-img-no-repeat",
          style: {
            backgroundImage: "url('" + _vm.cover[0] + "')",
            opacity: 0.3,
          },
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "padding-x-24 margin-x-auto width-100",
            staticStyle: { "max-width": "900px" },
          },
          [
            _c(
              "div",
              {
                staticClass: "padding-12 padding-top-24 rounded-8",
                staticStyle: { "background-color": "rgba(255, 255, 255, .7)" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "h2 fw-300 fs-italic",
                    staticStyle: { "letter-spacing": "1.2px" },
                  },
                  [
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(_vm.$t("resepsi.gallery.judul")),
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "margin-top-28" }, [
                  _c("div", { staticClass: "swiper swiper1" }, [
                    _c(
                      "div",
                      { staticClass: "swiper-wrapper" },
                      _vm._l(_vm.gallery1, function (gallery) {
                        return _c(
                          "div",
                          {
                            staticClass:
                              "swiper-slide padding-x-4 width-gallery-1",
                            staticStyle: { width: "50%" },
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "has-bg-img rounded-8 height-gallery-1",
                                staticStyle: { height: "420px" },
                              },
                              [
                                _c("div", {
                                  staticClass: "bg-img bg-img-no-repeat",
                                  style: {
                                    backgroundImage: "url('" + gallery + "')",
                                  },
                                }),
                              ]
                            ),
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "swiper-pagination" }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "swiper swiper2 margin-top-8" }, [
                    _c(
                      "div",
                      { staticClass: "swiper-wrapper" },
                      _vm._l(_vm.gallery2, function (gallery) {
                        return _c(
                          "div",
                          {
                            staticClass:
                              "swiper-slide padding-x-4 width-gallery-2",
                            staticStyle: { width: "33.3%" },
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "has-bg-img rounded-8 height-gallery-2",
                                staticStyle: { height: "132px" },
                              },
                              [
                                _c("div", {
                                  staticClass: "bg-img bg-img-no-repeat",
                                  style: {
                                    backgroundImage: "url('" + gallery + "')",
                                  },
                                }),
                              ]
                            ),
                          ]
                        )
                      }),
                      0
                    ),
                  ]),
                ]),
              ]
            ),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "has-bg-img padding-y-92 padding-y-60-sm text-grayest" },
      [
        _c("div", {
          staticClass: "bg-img bg-img-no-repeat",
          staticStyle: {
            "background-image":
              "url('https://groovepublic.com/wp-content/uploads/2022/03/shadow.png')",
            opacity: "0.07",
          },
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex block-sm padding-x-24 margin-x-auto width-100",
            staticStyle: { "max-width": "900px" },
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "width-50 width-100-sm padding-right-24 padding-right-0-sm text-right text-center-sm",
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "h2 fw-300 fs-italic",
                    staticStyle: { "letter-spacing": "1.2px" },
                  },
                  [
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(_vm.$t("resepsi.gift.judul")),
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "margin-top-36 fw-300" }, [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(_vm.$t("resepsi.gift.deskripsi")),
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "margin-top-28" }, [
                  _c(
                    "a",
                    {
                      staticClass: "button",
                      attrs: { href: _vm.$t("resepsi.gift.deskripsi") },
                    },
                    [
                      _c("span", {
                        domProps: {
                          innerHTML: _vm._s(_vm.$t("resepsi.gift.aksi")),
                        },
                      }),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _vm._m(6),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "has-bg-img text-center text-white padding-y-96 padding-x-24",
      },
      [
        _c("div", {
          staticClass: "bg-img bg-img-no-repeat",
          staticStyle: {
            "background-image":
              "url('https://www.diktatphotography.com/wp-content/uploads/2020/08/1-Tamblingan-a-1.jpg')",
          },
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "bg-img bg-black",
          staticStyle: { opacity: "0.4" },
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "h2 fw-300 fs-italic",
            staticStyle: { "letter-spacing": "1.2px" },
          },
          [
            _c("span", {
              domProps: {
                innerHTML: _vm._s(_vm.$t("resepsi.terimaKasih.judul")),
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "margin-top-36 fw-300" }, [
          _c("span", {
            domProps: {
              innerHTML: _vm._s(_vm.$t("resepsi.terimaKasih.deskripsi")),
            },
          }),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex flex-column flex-items-center flex-justify-center text-white margin-top-32",
          },
          [
            _c(
              "div",
              {
                staticClass: "fw-300 padding-x-8 padding-y-4 rounded-4",
                staticStyle: {
                  "letter-spacing": "4.7px",
                  background: "rgb(0, 0, 0, .5)",
                },
              },
              [
                _c("span", {
                  domProps: {
                    innerHTML: _vm._s(_vm.$t("resepsi.cover.tanggal")),
                  },
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "h1 fw-200 margin-top-32 ff-vibes fs-tk-mempelai",
                staticStyle: { "font-size": "80px", "letter-spacing": "1px" },
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$t("resepsi.cover.pria")) +
                    "\n        "
                ),
                _c(
                  "span",
                  {
                    staticClass: "ff-vibes margin-x-12 fs-tk-dan",
                    staticStyle: { "font-size": "32px" },
                  },
                  [_vm._v("&")]
                ),
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$t("resepsi.cover.wanita")) +
                    "\n      "
                ),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var BintanEllavue_type_template_id_17e87cfe_staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticClass: "margin-x-auto width-100 shadow-1 circle",
        staticStyle: { "max-width": "400px" },
        attrs: { src: __webpack_require__(6056) },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticClass: "margin-x-auto width-100 shadow-1 circle",
        staticStyle: { "max-width": "400px" },
        attrs: { src: __webpack_require__(5045) },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticClass: "margin-x-auto width-100 shadow-1 circle",
        staticStyle: { "max-width": "400px" },
        attrs: { src: __webpack_require__(5045) },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "has-bg-img padding-y-92 padding-y-60-sm text-center text-grayer",
      },
      [
        _c(
          "video",
          {
            staticClass: "absolute width-100 height-100 top-0 left-0",
            staticStyle: { "object-fit": "cover" },
            attrs: { autoplay: "", loop: "", id: "myVideo" },
          },
          [
            _c("source", {
              attrs: { src: __webpack_require__(1493), type: "video/mp4" },
            }),
          ]
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "bg-img bg-black z-1",
          staticStyle: { opacity: "0.4" },
        }),
        _vm._v(" "),
        _c("div", { staticStyle: { height: "400px" } }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "width-50 width-100-sm hidden-sm padding-right-24 text-right text-center-sm",
      },
      [
        _c("img", {
          staticClass: "margin-x-auto rounded-8 width-100",
          staticStyle: { "max-width": "460px" },
          attrs: { src: __webpack_require__(2666) },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "width-50 width-100-sm hidden-sm padding-left-24 text-left text-center-sm",
      },
      [
        _c("img", {
          staticClass: "margin-x-auto rounded-8 width-100",
          staticStyle: { "max-width": "460px" },
          attrs: { src: __webpack_require__(2666) },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "width-50 width-100-sm hidden-sm padding-left-24 text-left text-center-sm",
      },
      [
        _c("img", {
          staticClass: "margin-x-auto rounded-8 width-100",
          staticStyle: { "max-width": "460px" },
          attrs: { src: __webpack_require__(2666) },
        }),
      ]
    )
  },
]
BintanEllavue_type_template_id_17e87cfe_render._withStripped = true


;// CONCATENATED MODULE: ./src/pages-vue/BintanElla.vue?vue&type=template&id=17e87cfe&

// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 90 modules
var swiper_esm = __webpack_require__(9257);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.scss
var swiper = __webpack_require__(3985);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(6486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages-vue/BintanElla.vue?vue&type=script&lang=js&




function BintanEllavue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function BintanEllavue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { BintanEllavue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { BintanEllavue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BintanEllavue_type_script_lang_js_ = ({
  name: 'BintanElla',
  data: function data() {
    return {
      indexCover: 0,
      cover: [__webpack_require__(9926), __webpack_require__(2804), __webpack_require__(5000)],
      gallery1: [__webpack_require__(6713), __webpack_require__(1273), __webpack_require__(4559), __webpack_require__(7397)],
      gallery2: [__webpack_require__(6713), __webpack_require__(1273), __webpack_require__(4559), __webpack_require__(7397), __webpack_require__(6078), __webpack_require__(1273)],
      tamu: {
        nama: "",
        kehadiran: true,
        jumlah: 1
      }
    };
  },
  created: function created() {
    return BintanEllavue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this = this;

    return BintanEllavue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var config, swiper1, swiper2;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              swiper_esm/* Swiper.use */.tq.use([swiper_esm/* Autoplay */.pt, swiper_esm/* Pagination */.tl, swiper_esm/* Navigation */.W_]);
              config = {
                centeredSlides: true,
                loop: true,
                slidesPerView: "auto",
                spaceBetween: 0,
                speed: 1000,
                autoplay: {
                  delay: 2000
                }
              };
              swiper1 = new swiper_esm/* Swiper */.tq(".swiper1", config);
              swiper2 = new swiper_esm/* Swiper */.tq(".swiper2", config);
              setInterval(_this.updateCover, 3000);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  computed: {
    usedCover: function usedCover() {
      return this.cover[this.indexCover];
    }
  },
  methods: {
    updateCover: function updateCover() {
      this.indexCover = lodash_default().random(0, 2);
    }
  }
});
;// CONCATENATED MODULE: ./src/pages-vue/BintanElla.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_vue_BintanEllavue_type_script_lang_js_ = (BintanEllavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages-vue/BintanElla.vue?vue&type=style&index=0&lang=css&
var BintanEllavue_type_style_index_0_lang_css_ = __webpack_require__(716);
;// CONCATENATED MODULE: ./src/pages-vue/BintanElla.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/pages-vue/BintanElla.vue



;


/* normalize component */

var BintanElla_component = (0,componentNormalizer/* default */.Z)(
  pages_vue_BintanEllavue_type_script_lang_js_,
  BintanEllavue_type_template_id_17e87cfe_render,
  BintanEllavue_type_template_id_17e87cfe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var BintanElla_api; }
BintanElla_component.options.__file = "src/pages-vue/BintanElla.vue"
/* harmony default export */ var BintanElla = (BintanElla_component.exports);
;// CONCATENATED MODULE: ./src/index-vue.js







function index_vue_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function index_vue_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { index_vue_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { index_vue_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











vue_runtime_esm/* default.config.productionTip */.Z.config.productionTip = false;
vue_runtime_esm/* default.use */.Z.use(vue_router_esm/* default */.Z);
vue_runtime_esm/* default.prototype.$t */.Z.prototype.$t = utils_i18next.t;
vue_runtime_esm/* default.prototype.$url */.Z.prototype.$url = url; // function dynamicPropsFn (route) {
//   return {
//     msg: `${route.params.any} (${route.params.any.length} chars)`
//   };
// }

var router = new vue_router_esm/* default */.Z({
  mode: 'history',
  // base: __dirname,
  base: '/wedding',
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return savedPosition || {
      x: 0,
      y: 0
    };
  },
  routes: [{
    path: '/:lang',
    component: App,
    children: [{
      path: '',
      component: LayoutBlank,
      children: [{
        path: '',
        beforeEnter: function beforeEnter(to, from, next) {
          next(url('/resepsi'));
        }
      }, {
        path: 'resepsi',
        component: BintanElla,
        meta: {
          type: "resepsi"
        }
      }, {
        path: 'unduh-mantu',
        component: BintanElla,
        meta: {
          type: "unduhMantu"
        }
      }, {
        name: '404',
        path: '404',
        component: ErrorPage,
        meta: {
          title: "404",
          description: "The page you are trying to access doesn't exist."
        }
      }]
    }, {
      path: ':any',
      component: ErrorPage,
      meta: {
        title: "404",
        description: "The page you are trying to access doesn't exist."
      }
    }]
  }, {
    path: '',
    beforeEnter: function beforeEnter(to, from, next) {
      next(url('/resepsi'));
    }
  }]
});
router.beforeEach( /*#__PURE__*/function () {
  var _ref = index_vue_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(to, from, next) {
    var requireAuth;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (to.params.lang) {
              _context.next = 3;
              break;
            }

            next();
            return _context.abrupt("return");

          case 3:
            if (utils_i18next.options.supportedLngs.includes(to.params.lang)) {
              requireAuth = null;
              to.matched.forEach(function (route) {
                if ('requireAuth' in route.meta) {
                  requireAuth = route.meta.requireAuth;
                }
              });

              if (requireAuth === null) {
                next();
              } else {
                if (requireAuth && utils_auth.isLoggedIn()) {
                  next();
                } else if (requireAuth && !utils_auth.isLoggedIn()) {
                  next(url('/login'));
                } else if (!requireAuth && utils_auth.isLoggedIn()) {
                  next(from.fullPath); // doesn't work correctly yet
                } else if (!requireAuth && !utils_auth.isLoggedIn()) {
                  next();
                }
              }
            } else {
              next(url('/404'));
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
new vue_runtime_esm/* default */.Z({
  // el: '#app',
  router: router,
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');

/***/ }),

/***/ 1493:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/1c21e02ed.mp4";

/***/ }),

/***/ 9926:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/cover13a670bc5.jpg";

/***/ }),

/***/ 2804:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/cover25eba5b8c.jpg";

/***/ }),

/***/ 5000:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/cover344fee9af.jpg";

/***/ }),

/***/ 6713:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/gallery_1fd7a1e5d.jpg";

/***/ }),

/***/ 1273:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/gallery_267d459e7.jpg";

/***/ }),

/***/ 4559:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/gallery_384a7175e.jpg";

/***/ }),

/***/ 7397:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/gallery_4746aafd6.jpg";

/***/ }),

/***/ 6078:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/gallery_5246e7474.jpg";

/***/ }),

/***/ 6056:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/mempelai_pria66a218c9.jpg";

/***/ }),

/***/ 5045:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/mempelai_wanita0aaca9c4.jpg";

/***/ }),

/***/ 2666:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/reservasib181f2dc.jpg";

/***/ }),

/***/ 5119:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 676:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2181:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(3379);
            var content = __webpack_require__(5119);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 716:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(3379);
            var content = __webpack_require__(676);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [216], function() { return __webpack_exec__(4274); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.13cedbc0.js.map