/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Landing_Landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Landing/Landing */ \"./src/client/Components/Landing/Landing.js\");\n/* harmony import */ var _Components_FindSitter_FindSitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/FindSitter/FindSitter */ \"./src/client/Components/FindSitter/FindSitter.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Landing_Landing__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/search\",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FindSitter_FindSitter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null);\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/Components/Auth/AuthHelper.js":
/*!**************************************************!*\
  !*** ./src/client/Components/Auth/AuthHelper.js ***!
  \**************************************************/
/*! exports provided: signUpFormChecker, logInFormChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUpFormChecker\", function() { return signUpFormChecker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logInFormChecker\", function() { return logInFormChecker; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar signUpFormChecker = function signUpFormChecker(formData) {\n  var errorExists = null;\n  var errorData = {\n    email: \"\",\n    username: \"\",\n    password: \"\",\n    userType: \"\"\n  };\n\n  for (var data in formData) {\n    if (formData[data] == \"\") {\n      errorData[data] = \"\".concat(data.charAt(0).toUpperCase() + data.slice(1), \" can't be empty!\");\n      errorExists = true;\n    } else if (data == \"email\" && !validator__WEBPACK_IMPORTED_MODULE_1___default.a.isEmail(formData[data])) {\n      errorData[data] = \"Please enter a valid email!\";\n      errorExists = true;\n    } else if (data == \"password\" && formData[data].length < 6) {\n      errorData[data] = \"Password should be longer than 6 !\";\n      errorExists = true;\n    }\n  }\n\n  return _objectSpread(_objectSpread({}, errorData), {}, {\n    errorExists: errorExists\n  });\n};\nvar logInFormChecker = function logInFormChecker(formData) {\n  var errorExists = null;\n  var errorData = {\n    email: \"\",\n    password: \"\"\n  };\n\n  for (var data in formData) {\n    if (formData[data] == \"\") {\n      errorData[data] = \"\".concat(data.charAt(0).toUpperCase() + data.slice(1), \" can't be empty!\");\n      errorExists = true;\n    }\n  }\n\n  return _objectSpread(_objectSpread({}, errorData), {}, {\n    errorExists: errorExists\n  });\n};\n\n//# sourceURL=webpack:///./src/client/Components/Auth/AuthHelper.js?");

/***/ }),

/***/ "./src/client/Components/Auth/AuthModal.js":
/*!*************************************************!*\
  !*** ./src/client/Components/Auth/AuthModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login/Login */ \"./src/client/Components/Auth/Login/Login.js\");\n/* harmony import */ var _SignUp_SignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignUp/SignUp */ \"./src/client/Components/Auth/SignUp/SignUp.js\");\n/* harmony import */ var _AuthTabs_AuthTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthTabs/AuthTabs */ \"./src/client/Components/Auth/AuthTabs/AuthTabs.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store_actions_AuthModalActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/AuthModalActions */ \"./src/client/store/actions/AuthModalActions.js\");\n/* harmony import */ var _AuthHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AuthHelper */ \"./src/client/Components/Auth/AuthHelper.js\");\n/* harmony import */ var _store_actions_GeneralActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/GeneralActions */ \"./src/client/store/actions/GeneralActions.js\");\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import \"./AuthModal.css\";\n\n\n\n\n\n\n\n\nvar initialUserState = {\n  email: \"\",\n  username: \"\",\n  password: \"\",\n  userType: \"\"\n};\n\nvar AuthModal = function AuthModal() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(initialUserState),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),\n      userInfo = _useState2[0],\n      setUserInfo = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({}),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),\n      formError = _useState4[0],\n      setFormError = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),\n      errorMessageFromServer = _useState6[0],\n      setErrorMessageFromServer = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),\n      isLoading = _useState8[0],\n      setIsLoading = _useState8[1];\n\n  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useSelector\"])(function (state) {\n    return state;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useDispatch\"])();\n\n  var submitHandler = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e, type) {\n      var errors, response, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(123);\n              e.preventDefault();\n              errors = type === \"login\" ? Object(_AuthHelper__WEBPACK_IMPORTED_MODULE_10__[\"logInFormChecker\"])(userInfo) : Object(_AuthHelper__WEBPACK_IMPORTED_MODULE_10__[\"signUpFormChecker\"])(userInfo);\n              setFormError(errors);\n              console.log(errors);\n\n              if (errors.errorExists) {\n                _context.next = 15;\n                break;\n              }\n\n              setIsLoading(true);\n              _context.next = 9;\n              return fetch(\"http://localhost:5000/\".concat(type), {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(userInfo)\n              });\n\n            case 9:\n              response = _context.sent;\n              _context.next = 12;\n              return response.json();\n\n            case 12:\n              data = _context.sent;\n\n              if (data.user && data.token) {\n                dispatch(Object(_store_actions_GeneralActions__WEBPACK_IMPORTED_MODULE_11__[\"generalDispatchBundler\"])({\n                  user: data.user,\n                  loggedIn: true\n                }));\n                dispatch(Object(_store_actions_AuthModalActions__WEBPACK_IMPORTED_MODULE_9__[\"changeIsModalOpen\"])(false));\n                localStorage.setItem(\"jwt-token\", data.token);\n              } else {\n                setErrorMessageFromServer(data.message);\n                setUserInfo(initialUserState);\n              }\n\n              setIsLoading(false);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function submitHandler(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var onChange = function onChange(e) {\n    setUserInfo(_objectSpread(_objectSpread({}, userInfo), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, e.target.getAttribute(\"name\"), e.target.value)));\n  };\n\n  var changeTab = function changeTab(e) {\n    e.target.getAttribute(\"name\") === \"login\" ? dispatch(Object(_store_actions_AuthModalActions__WEBPACK_IMPORTED_MODULE_9__[\"changeIsLogInOpen\"])(true)) : dispatch(Object(_store_actions_AuthModalActions__WEBPACK_IMPORTED_MODULE_9__[\"changeIsSignUpOpen\"])(true));\n    setFormError({});\n    setErrorMessageFromServer(null);\n    setUserInfo(initialUserState);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    className: \"form-wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_AuthTabs_AuthTabs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    changeTab: changeTab,\n    errorMessageFromServer: errorMessageFromServer\n  }), state.modalState.isLogInOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Login_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onChange: onChange,\n    submitHandler: submitHandler,\n    formError: formError,\n    isLoading: isLoading\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SignUp_SignUp__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onChange: onChange,\n    submitHandler: submitHandler,\n    formError: formError,\n    isLoading: isLoading\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthModal);\n\n//# sourceURL=webpack:///./src/client/Components/Auth/AuthModal.js?");

/***/ }),

/***/ "./src/client/Components/Auth/AuthTabs/AuthTabs.js":
/*!*********************************************************!*\
  !*** ./src/client/Components/Auth/AuthTabs/AuthTabs.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n // import \"../AuthModal.css\";\n\nvar AuthTabs = function AuthTabs(_ref) {\n  var changeTab = _ref.changeTab,\n      errorMessageFromServer = _ref.errorMessageFromServer;\n  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state;\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tabs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"signup-tab\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: state.modalState.isSignUpOpen ? \"active\" : \"\",\n    onClick: changeTab\n  }, \"Sign Up\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"login-tab\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: state.modalState.isLogInOpen ? \"active\" : \"\",\n    name: \"login\",\n    onClick: changeTab\n  }, \"Login\"))), errorMessageFromServer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"error-message padding-left\"\n  }, errorMessageFromServer));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthTabs);\n\n//# sourceURL=webpack:///./src/client/Components/Auth/AuthTabs/AuthTabs.js?");

/***/ }),

/***/ "./src/client/Components/Auth/Login/Login.js":
/*!***************************************************!*\
  !*** ./src/client/Components/Auth/Login/Login.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // import \"../AuthModal.css\";\n\nvar Login = function Login(_ref) {\n  var onChange = _ref.onChange,\n      submitHandler = _ref.submitHandler,\n      formError = _ref.formError,\n      isLoading = _ref.isLoading;\n  return isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"spinner\"\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"login-tab-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"login-form\",\n    onSubmit: function onSubmit(e) {\n      return submitHandler(e, \"login\");\n    }\n  }, formError.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"error-message\"\n  }, formError.email) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"input \".concat(formError.email ? \"error\" : \"\"),\n    id: formError.email ? \"error\" : \"\",\n    name: \"email\",\n    placeholder: \"Email\",\n    onChange: onChange\n  }), formError.password ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"error-message\"\n  }, formError.password) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"password\",\n    className: \"input \".concat(formError.password ? \"error\" : \"\"),\n    name: \"password\",\n    placeholder: \"Password\",\n    onChange: onChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    className: \"button\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"help-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Forget your password?\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/client/Components/Auth/Login/Login.js?");

/***/ }),

/***/ "./src/client/Components/Auth/SignUp/SignUp.js":
/*!*****************************************************!*\
  !*** ./src/client/Components/Auth/SignUp/SignUp.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // import \"../AuthModal.css\";\n\nvar SignUp = function SignUp(_ref) {\n  var onChange = _ref.onChange,\n      submitHandler = _ref.submitHandler,\n      formError = _ref.formError,\n      isLoading = _ref.isLoading;\n  return isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"spinner\"\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tabs-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"signup-tab-content\",\n    className: \"active\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"signup-form\",\n    onSubmit: function onSubmit(e) {\n      return submitHandler(e, \"sign-up\");\n    }\n  }, formError.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"error-message\"\n  }, formError.email) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    // type=\"email\"\n    className: \"input \".concat(formError.email ? \"error\" : \"\"),\n    name: \"email\",\n    placeholder: \"Email\",\n    onChange: onChange\n  }), formError.username ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"error-message\"\n  }, formError.username) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    className: \"input \".concat(formError.username ? \"error\" : \"\"),\n    name: \"username\",\n    placeholder: \"Username\",\n    onChange: onChange\n  }), formError.password ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"error-message\"\n  }, formError.password) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"password\",\n    className: \"input \".concat(formError.password ? \"error\" : \"\"),\n    name: \"password\",\n    placeholder: \"Password\",\n    onChange: onChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, formError.userType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    id: \"radio-error\"\n  }, \"Please don't leave this empty!\") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"radio\",\n    name: \"userType\",\n    value: \"sitter\",\n    onChange: onChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Sitter\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"radio\",\n    name: \"userType\",\n    value: \"owner\",\n    onChange: onChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Owner\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    className: \"button\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"help-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"By signing up, you agree to our\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Terms of service\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\n\n//# sourceURL=webpack:///./src/client/Components/Auth/SignUp/SignUp.js?");

/***/ }),

/***/ "./src/client/Components/FindSitter/FindSitter.js":
/*!********************************************************!*\
  !*** ./src/client/Components/FindSitter/FindSitter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar FindSitter = function FindSitter() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, \"Find a sitter here\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FindSitter);\n\n//# sourceURL=webpack:///./src/client/Components/FindSitter/FindSitter.js?");

/***/ }),

/***/ "./src/client/Components/Landing/Header/Header.js":
/*!********************************************************!*\
  !*** ./src/client/Components/Landing/Header/Header.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _HeaderCss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderCss */ \"./src/client/Components/Landing/Header/HeaderCss.js\");\n/* harmony import */ var _CustomHooks_Hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../CustomHooks/Hooks */ \"./src/client/CustomHooks/Hooks.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_actions_AuthModalActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/actions/AuthModalActions */ \"./src/client/store/actions/AuthModalActions.js\");\n/* harmony import */ var _ProfileDropdown_ProfileDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProfileDropdown/ProfileDropdown */ \"./src/client/Components/Landing/Header/ProfileDropdown/ProfileDropdown.js\");\n/* harmony import */ var _store_actions_GeneralActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/actions/GeneralActions */ \"./src/client/store/actions/GeneralActions.js\");\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  var _useResponsive = Object(_CustomHooks_Hooks__WEBPACK_IMPORTED_MODULE_4__[\"useResponsive\"])(),\n      _useResponsive2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useResponsive, 2),\n      showHamburger = _useResponsive2[0],\n      isHamburgerOpen = _useResponsive2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      isDropdownOpen = _useState2[0],\n      setIsDropdownOpen = _useState2[1];\n\n  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n\n  var openModal = function openModal(event) {\n    dispatch(Object(_store_actions_AuthModalActions__WEBPACK_IMPORTED_MODULE_6__[\"changeIsModalOpen\"])(true));\n    event.target.getAttribute(\"name\") === \"login\" ? dispatch(Object(_store_actions_AuthModalActions__WEBPACK_IMPORTED_MODULE_6__[\"changeIsLogInOpen\"])(true)) : dispatch(Object(_store_actions_AuthModalActions__WEBPACK_IMPORTED_MODULE_6__[\"changeIsSignUpOpen\"])(true));\n  };\n\n  var logOut = function logOut() {\n    localStorage.removeItem(\"jwt-token\");\n    dispatch(Object(_store_actions_GeneralActions__WEBPACK_IMPORTED_MODULE_8__[\"changeLoggedIn\"])(false));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"Brand\"], null, \"Sit!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n    onClick: showHamburger,\n    className: \"fas fa-bars fa-3x\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"], {\n    close: isHamburgerOpen\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    style: {\n      width: \"100%\"\n    }\n  }, \"Find A Sitter\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    variant: \"outlined\"\n  }, \"Blog\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"EmptyDiv\"], null), state.appState.loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, state.appState.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    variant: \"outlined\",\n    onClick: logOut\n  }, \"Log Out\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    onClick: function onClick() {\n      return setIsDropdownOpen(!isDropdownOpen);\n    },\n    name: \"login\"\n  }, \"Log In\", isDropdownOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"ExpandUp\"], {\n    className: \"fas fa-chevron-up\"\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"ExpandDown\"], {\n    className: \"fas fa-chevron-down\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProfileDropdown_ProfileDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    open: isDropdownOpen\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    onClick: openModal\n  }, \"Sign Up\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/client/Components/Landing/Header/Header.js?");

/***/ }),

/***/ "./src/client/Components/Landing/Header/HeaderCss.js":
/*!***********************************************************!*\
  !*** ./src/client/Components/Landing/Header/HeaderCss.js ***!
  \***********************************************************/
/*! exports provided: Navbar, Nav, Menu, Brand, EmptyDiv, Button, DropdownWrapper, DropdownItem, ExpandDown, ExpandUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navbar\", function() { return Navbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nav\", function() { return Nav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Brand\", function() { return Brand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmptyDiv\", function() { return EmptyDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DropdownWrapper\", function() { return DropdownWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DropdownItem\", function() { return DropdownItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExpandDown\", function() { return ExpandDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExpandUp\", function() { return ExpandUp; });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject10() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    padding-left: 8px;\\n\"]);\n\n  _templateObject10 = function _templateObject10() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject9() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    padding-left: 8px;\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    color: white;\\n    font-weight: 550;\\n    padding-top: 14px;\\n\\n    &:hover {\\n        background-color: rgba(255, 255, 255, 0.2);\\n    }\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    position: absolute;\\n    display: \", \";\\n    grid-auto-rows: 50px;\\n    right: 144px;\\n    top: 72px;\\n    width: 115px;\\n    border-radius: 5px;\\n    border: white 2px solid;\\n    cursor: pointer;\\n    outline: none;\\n    font-size: 1.1rem;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    font-family: inherit;\\n\\n    color: white;\\n    background-color: Transparent;\\n    background-repeat: no-repeat;\\n    border: white 2px solid;\\n    cursor: pointer;\\n    outline: none;\\n    font-size: 1.1rem;\\n    height: 45px;\\n    border-radius: 5px;\\n    &:hover {\\n        background-color: rgba(255, 255, 255, 0.2);\\n    }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    @media (max-width: 700px) {\\n        display: none;\\n    }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    grid-area: brand;\\n    font-size: 3rem;\\n    color: white;\\n    margin: 0px;\\n    font-family: \\\"Quicksand\\\", sans-serif;\\n    @media (max-width: 700px) {\\n        display: block;\\n        grid-area: brand;\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    grid-area: menu;\\n    display: none;\\n    color: white;\\n    @media (max-width: 700px) {\\n        display: block;\\n        justify-self: end;\\n        padding-right: 20px;\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    grid-area: nav;\\n    width: 100%;\\n    display: \", \";\\n    grid-gap: 10px;\\n    grid-template-columns: 120px 120px 1fr 120px 120px;\\n    @media (max-width: 700px) {\\n        grid-template-columns: none;\\n        grid-template-rows: repeat(4, auto);\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    padding: 20px 30px 20px 20px;\\n    display: grid;\\n    grid-template-areas: \\\"brand nav\\\";\\n    grid-template-columns: 100px auto;\\n    align-items: center;\\n    justify-items: center;\\n    @media (max-width: 700px) {\\n        grid-template-areas:\\n            \\\"brand menu\\\"\\n            \\\"nav nav\\\";\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Navbar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (props) {\n  return props.close === false ? \"none\" : \"grid\";\n});\nvar Menu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i(_templateObject3());\nvar Brand = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject4());\nvar EmptyDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject6());\nvar DropdownWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7(), function (props) {\n  return props.open ? \"grid\" : \"none\";\n});\nvar DropdownItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject8());\nvar ExpandDown = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i(_templateObject9());\nvar ExpandUp = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i(_templateObject10());\n\n//# sourceURL=webpack:///./src/client/Components/Landing/Header/HeaderCss.js?");

/***/ }),

/***/ "./src/client/Components/Landing/Header/ProfileDropdown/ProfileDropdown.js":
/*!*********************************************************************************!*\
  !*** ./src/client/Components/Landing/Header/ProfileDropdown/ProfileDropdown.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HeaderCss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HeaderCss */ \"./src/client/Components/Landing/Header/HeaderCss.js\");\n\n\n\nvar ProfileDropdown = function ProfileDropdown(_ref) {\n  var open = _ref.open;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_1__[\"DropdownWrapper\"], {\n    open: open\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_1__[\"DropdownItem\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-user-circle\"\n  }), \" Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_1__[\"DropdownItem\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-cog\"\n  }), \" Settings\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderCss__WEBPACK_IMPORTED_MODULE_1__[\"DropdownItem\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-question\"\n  }), \" Help\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileDropdown);\n\n//# sourceURL=webpack:///./src/client/Components/Landing/Header/ProfileDropdown/ProfileDropdown.js?");

/***/ }),

/***/ "./src/client/Components/Landing/Information/Information.js":
/*!******************************************************************!*\
  !*** ./src/client/Components/Landing/Information/Information.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _InformationCss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationCss */ \"./src/client/Components/Landing/Information/InformationCss.js\");\n\n // import handshake from \"../../../images/steps-handshake.png\";\n// import profile from \"../../../images/steps-profile.png\";\n// import search from \"../../../images/steps-search.png\";\n// import customerImage from \"../../../images/petsitter.jpg\";\n\nvar Information = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"InformationWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], null, \"How We Make It All Work\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"Step\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepImage\"], {\n    src: \"/static/images/steps-profile.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepNumber\"], null, \"STEP 1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepTitle\"], null, \"Create a Sit Account and Get Comfortable\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepParagraph\"], null, \"Start your Sit account whether you are a Sitter or an Owner. Fill your information for us to find a good match for you.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"Step\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepImage\"], {\n    src: \"/static/images/steps-search.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepNumber\"], null, \"STEP 2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepTitle\"], null, \"Sort for a Sitter Using Our Connections\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepParagraph\"], null, \"Use our directory to read reviews and filter for someone with your desired skills to take care of your pet.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"Step\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepImage\"], {\n    src: \"/static/images/steps-profile.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepNumber\"], null, \"STEP 3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepTitle\"], null, \"Meet the Most Qualified Sitters In Your Area\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"StepParagraph\"], null, \"After picking out the perfect Sitter you can book and pay securely on our website. Then it is time for you to relax.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"CustomerWrap\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"CustomerImage\"], {\n    src: \"/static/images/petsitter.jpg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"CustomerQuoteWrap\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"GreenLine\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"CustomerQuote\"], null, \"My sitter sent me pictures everytime she took Buddy for walks. It was so thoughtful and reassuring!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"CustomerName\"], null, \" - Abby H.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"SitterName\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Audrey F. \"), \" in Vienna, VA\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], null, \"Who We Are\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"InformationParagraph\"], null, \"Are you looking for a Pet sitter or Pet sitting job? At Sit we have built a community that revolves around our love for pets. Sit makes it easier for everyone to connect other pet lovers for their services. We can find care for your pets when you can't take care of them.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"Footer\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InformationCss__WEBPACK_IMPORTED_MODULE_1__[\"SocialMediaWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/ios/30/ffffff/facebook-new.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/ios/30/ffffff/instagram-new.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/ios/30/ffffff/youtube-play.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/ios/30/ffffff/pinterest.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/ios/30/ffffff/linkedin.png\"\n  }), \" \\xA9 2020 Sit. All rights reserved.\")));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Information);\n\n//# sourceURL=webpack:///./src/client/Components/Landing/Information/Information.js?");

/***/ }),

/***/ "./src/client/Components/Landing/Information/InformationCss.js":
/*!*********************************************************************!*\
  !*** ./src/client/Components/Landing/Information/InformationCss.js ***!
  \*********************************************************************/
/*! exports provided: InformationWrapper, Title, StepWrapper, Step, StepNumber, StepImage, StepTitle, StepParagraph, CustomerWrap, CustomerImage, CustomerQuoteWrap, CustomerQuote, CustomerName, GreenLine, SitterName, InformationParagraph, Footer, Brand, SocialMediaWrapper, SocialMediaImage, FooterDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InformationWrapper\", function() { return InformationWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StepWrapper\", function() { return StepWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Step\", function() { return Step; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StepNumber\", function() { return StepNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StepImage\", function() { return StepImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StepTitle\", function() { return StepTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StepParagraph\", function() { return StepParagraph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomerWrap\", function() { return CustomerWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomerImage\", function() { return CustomerImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomerQuoteWrap\", function() { return CustomerQuoteWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomerQuote\", function() { return CustomerQuote; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomerName\", function() { return CustomerName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GreenLine\", function() { return GreenLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SitterName\", function() { return SitterName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InformationParagraph\", function() { return InformationParagraph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Brand\", function() { return Brand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocialMediaWrapper\", function() { return SocialMediaWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocialMediaImage\", function() { return SocialMediaImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FooterDivider\", function() { return FooterDivider; });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject21() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    width: 60%;\\n    border-bottom: 1px solid white;\\n    margin: 20px auto;\\n\"]);\n\n  _templateObject21 = function _templateObject21() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject20() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    cursor: pointer;\\n\"]);\n\n  _templateObject20 = function _templateObject20() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject19() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n    justify-items: center;\\n    width: 60%;\\n    margin: 40px auto 0px auto;\\n    padding-bottom: 20px;\\n    border-bottom: 1px solid white;\\n\"]);\n\n  _templateObject19 = function _templateObject19() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject18() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    font-size: 3rem;\\n    color: white;\\n    margin: 0px;\\n    font-family: \\\"Quicksand\\\", sans-serif;\\n\"]);\n\n  _templateObject18 = function _templateObject18() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject17() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    height: 250px;\\n    width: 100vw;\\n    background: rgb(53, 58, 64);\\n\"]);\n\n  _templateObject17 = function _templateObject17() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject16() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    font-size: 1.4rem;\\n    color: rgb(100, 100, 105);\\n    margin: 5px 0px 50px 0px;\\n    width: 80%;\\n    @media (max-width: 700px) {\\n        font-size: 1.3rem;\\n    }\\n\"]);\n\n  _templateObject16 = function _templateObject16() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject15() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    background-color: rgba(0, 0, 0, 0.5);\\n    color: white;\\n    padding: 7px;\\n    position: absolute;\\n    bottom: 25px;\\n    right: 30px;\\n    box-sizing: border-box;\\n    border-radius: 5px;\\n\"]);\n\n  _templateObject15 = function _templateObject15() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject14() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    width: 30px;\\n    height: 2px;\\n    background-color: #28a55f;\\n    margin-bottom: 10px;\\n\"]);\n\n  _templateObject14 = function _templateObject14() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject13() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    color: rgb(102, 114, 124);\\n\"]);\n\n  _templateObject13 = function _templateObject13() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject12() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    font-size: 22px;\\n    font-weight: 700;\\n    @media (min-width: 400px) and (max-width: 616px) {\\n        font-size: 18px;\\n    }\\n    @media (max-width: 400px) {\\n        font-size: 16px;\\n    }\\n\"]);\n\n  _templateObject12 = function _templateObject12() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject11() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    box-sizing: border-box;\\n    position: absolute;\\n    top: -50px;\\n    left: 50px;\\n    width: 370px;\\n    height: 220px;\\n    padding: 20px;\\n    background-color: white;\\n    border: 1px solid #e5e5e5;\\n    line-height: 2;\\n    border-radius: 5px;\\n    @media (max-width: 760px) {\\n        width: 100vw;\\n        height: 140px;\\n        left: 0px;\\n        top: -100px;\\n    }\\n    @media (min-width: 500px) and (max-width: 616px) {\\n        height: 120px;\\n        top: -100px;\\n    }\\n    @media (min-width: 400px) and (max-width: 500px) {\\n        height: 150px;\\n    }\\n    @media (max-width: 512px) {\\n        top: -120px;\\n    }\\n\"]);\n\n  _templateObject11 = function _templateObject11() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject10() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    width: 100%;\\n    min-width: 334px;\\n\"]);\n\n  _templateObject10 = function _templateObject10() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject9() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    width: 70%;\\n    min-width: 334px;\\n\\n    margin: 100px auto;\\n    position: relative;\\n    @media (max-width: 1100px) {\\n        width: 100vw;\\n    }\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    color: rgb(100, 100, 105);\\n    font-size: 20px;\\n    @media (max-width: 950px) {\\n        width: 300px;\\n    }\\n    line-height: 1.5;\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    margin: 0px;\\n    color: rgb(100, 100, 105);\\n    line-height: 1.5;\\n    text-align: center;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    @media (min-width: 950px) and (max-width: 1200px) {\\n        width: 200px;\\n    }\\n    @media (max-width: 500px) {\\n        width: 200px;\\n    }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    color: #28a55f;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    display: grid;\\n    justify-items: center;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    display: grid;\\n    grid-gap: 20px;\\n    margin: 50px 0px;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    width: 80%;\\n    @media (max-width: 950px) {\\n        grid-template-columns: 1fr;\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    color: rgb(100, 100, 105);\\n    font-size: 3rem;\\n\\n    @media (max-width: 420px) {\\n        font-size: 1.7rem;\\n    }\\n    @media (min-width: 420px) and (max-width: 600px) {\\n        font-size: 2rem;\\n    }\\n    @media (min-width: 600px) and (max-width: 750px) {\\n        font-size: 2.5rem;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    width: 100%;\\n    margin: 50px auto 0px auto;\\n    display: grid;\\n    justify-items: center;\\n    background-color: FFFFF;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar InformationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject2());\nvar StepWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());\nvar Step = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());\nvar StepNumber = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3(_templateObject5());\nvar StepImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject6());\nvar StepTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject7());\nvar StepParagraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject8());\nvar CustomerWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject9());\nvar CustomerImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject10());\nvar CustomerQuoteWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject11());\nvar CustomerQuote = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject12());\nvar CustomerName = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(CustomerQuote)(_templateObject13());\nvar GreenLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject14());\nvar SitterName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject15());\nvar InformationParagraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject16());\nvar Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer(_templateObject17());\nvar Brand = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject18());\nvar SocialMediaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject19());\nvar SocialMediaImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject20());\nvar FooterDivider = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject21());\n\n//# sourceURL=webpack:///./src/client/Components/Landing/Information/InformationCss.js?");

/***/ }),

/***/ "./src/client/Components/Landing/Jumbotron/Jumbotron.js":
/*!**************************************************************!*\
  !*** ./src/client/Components/Landing/Jumbotron/Jumbotron.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _JumbotronCss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JumbotronCss */ \"./src/client/Components/Landing/Jumbotron/JumbotronCss.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar Jumbotron = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JumbotronCss__WEBPACK_IMPORTED_MODULE_1__[\"Section\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JumbotronCss__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], null, \"You love your pets, \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" so do we.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JumbotronCss__WEBPACK_IMPORTED_MODULE_1__[\"Paragraph\"], null, \"At Sit.com we provide the most quality \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"caretakers to your beloved pets.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JumbotronCss__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], null, \"Find a Sitter!\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JumbotronCss__WEBPACK_IMPORTED_MODULE_1__[\"Footer\"], null, \"Are you looking for a pet sitting job?\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JumbotronCss__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    href: \"gugle\"\n  }, \"Apply Now.\")));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jumbotron);\n\n//# sourceURL=webpack:///./src/client/Components/Landing/Jumbotron/Jumbotron.js?");

/***/ }),

/***/ "./src/client/Components/Landing/Jumbotron/JumbotronCss.js":
/*!*****************************************************************!*\
  !*** ./src/client/Components/Landing/Jumbotron/JumbotronCss.js ***!
  \*****************************************************************/
/*! exports provided: Section, Title, Paragraph, Button, Footer, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Section\", function() { return Section; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Paragraph\", function() { return Paragraph; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject6() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    color: white;\\n    font-size: 1.2rem;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    color: white;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    background: none;\\n    color: white;\\n    width: 170px;\\n    height: 50px;\\n    font-size: 1.5rem;\\n    outline: none;\\n    cursor: pointer;\\n    border: 1px solid white;\\n    &:hover {\\n        color: black; //\\n        background: white;\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    font-size: 1.4rem;\\n    color: white;\\n    @media (max-width: 700px) {\\n        font-size: 1.3rem;\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    font-size: 3rem;\\n    color: white;\\n    font-family: \\\"Quicksand\\\", sans-serif;\\n    @media (max-width: 700px) {\\n        font-size: 2rem;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    width: 60%;\\n    margin: 120px auto 0px auto;\\n    @media (max-width: 700px) {\\n        width: 80%;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject2());\nvar Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject3());\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject4());\nvar Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject5());\nvar Link = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject6());\n\n//# sourceURL=webpack:///./src/client/Components/Landing/Jumbotron/JumbotronCss.js?");

/***/ }),

/***/ "./src/client/Components/Landing/Landing.js":
/*!**************************************************!*\
  !*** ./src/client/Components/Landing/Landing.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Header */ \"./src/client/Components/Landing/Header/Header.js\");\n/* harmony import */ var _Jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Jumbotron/Jumbotron */ \"./src/client/Components/Landing/Jumbotron/Jumbotron.js\");\n/* harmony import */ var _LandingCss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LandingCss */ \"./src/client/Components/Landing/LandingCss.js\");\n/* harmony import */ var _UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Modal/Modal */ \"./src/client/UI/Modal/Modal.js\");\n/* harmony import */ var _Information_Information__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Information/Information */ \"./src/client/Components/Landing/Information/Information.js\");\n/* harmony import */ var _Auth_AuthModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Auth/AuthModal */ \"./src/client/Components/Auth/AuthModal.js\");\n/* harmony import */ var _store_actions_AuthModalActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/AuthModalActions */ \"./src/client/store/actions/AuthModalActions.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nfunction Landing() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useDispatch\"])();\n  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"useSelector\"])(function (state) {\n    return state;\n  });\n\n  var closeRegisterModal = function closeRegisterModal() {\n    dispatch(Object(_store_actions_AuthModalActions__WEBPACK_IMPORTED_MODULE_7__[\"changeIsModalOpen\"])(false));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingCss__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    showModal: state.modalState.isModalOpen,\n    onCancel: closeRegisterModal\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Auth_AuthModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Information_Information__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\n\n//# sourceURL=webpack:///./src/client/Components/Landing/Landing.js?");

/***/ }),

/***/ "./src/client/Components/Landing/LandingCss.js":
/*!*****************************************************!*\
  !*** ./src/client/Components/Landing/LandingCss.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  min-width: 322px;\\n  background-image: url(\\\"/static/images/background.jpg\\\");\\n  height: 100vh;\\n  width: 100vw;\\n  background-position: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n // import bgImage from \"../../images/background.jpg\";\n\nvar BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackgroundImage);\n\n//# sourceURL=webpack:///./src/client/Components/Landing/LandingCss.js?");

/***/ }),

/***/ "./src/client/CustomHooks/Hooks.js":
/*!*****************************************!*\
  !*** ./src/client/CustomHooks/Hooks.js ***!
  \*****************************************/
/*! exports provided: useResponsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useResponsive\", function() { return useResponsive; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar useResponsive = function useResponsive() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      isHamburgerOpen = _useState2[0],\n      setisHamburgerOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(window.innerWidth),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      innerWidth = _useState4[0],\n      setInnerWidth = _useState4[1];\n\n  var showHamburger = function showHamburger() {\n    setisHamburgerOpen(!isHamburgerOpen);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var resizer = window.addEventListener(\"resize\", function () {\n      setInnerWidth(window.innerWidth);\n    });\n    innerWidth > 700 ? setisHamburgerOpen(true) : setisHamburgerOpen(false);\n    return function () {\n      window.removeEventListener(\"resize\", resizer);\n    };\n  }, [innerWidth]);\n  return [showHamburger, isHamburgerOpen];\n};\n\n//# sourceURL=webpack:///./src/client/CustomHooks/Hooks.js?");

/***/ }),

/***/ "./src/client/UI/Backdrop/Backdrop.js":
/*!********************************************!*\
  !*** ./src/client/UI/Backdrop/Backdrop.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n\\tposition: fixed;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\twidth: 100%;\\n\\theight: 100vh;\\n\\tbackground: rgba(0, 0, 0, 0.75);\\n\\tz-index: 10;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar GrayBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());\n\nvar Backdrop = function Backdrop(props) {\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GrayBackdrop, {\n    onClick: props.onCancel\n  }), document.getElementById(\"backdrop-hook\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Backdrop);\n\n//# sourceURL=webpack:///./src/client/UI/Backdrop/Backdrop.js?");

/***/ }),

/***/ "./src/client/UI/Modal/Modal.js":
/*!**************************************!*\
  !*** ./src/client/UI/Modal/Modal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Backdrop/Backdrop */ \"./src/client/UI/Backdrop/Backdrop.js\");\n/* harmony import */ var _ModalCss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalCss */ \"./src/client/UI/Modal/ModalCss.js\");\n\n\n\n\n\nvar ModalOverlay = function ModalOverlay(props) {\n  var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalCss__WEBPACK_IMPORTED_MODULE_3__[\"ModalWrap\"], null, props.children);\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(content, document.getElementById(\"modal-hook\"));\n};\n\nvar Modal = function Modal(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.showModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onCancel: props.onCancel\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalOverlay, props)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./src/client/UI/Modal/Modal.js?");

/***/ }),

/***/ "./src/client/UI/Modal/ModalCss.js":
/*!*****************************************!*\
  !*** ./src/client/UI/Modal/ModalCss.js ***!
  \*****************************************/
/*! exports provided: ModalWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalWrap\", function() { return ModalWrap; });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n\\tz-index: 100;\\n\\tposition: fixed;\\n\\ttop: 40%;\\n\\tleft: 50%;\\n\\ttransform: translate(-50%, -50%);\\n\\twidth: 60%;\\n\\tmax-width: 400px;\\n\\tbackground: white;\\n\\tbox-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\\n\\tborder-radius: 8px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar ModalWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());\n\n//# sourceURL=webpack:///./src/client/UI/Modal/ModalCss.js?");

/***/ }),

/***/ "./src/client/store/actions/AuthModalActions.js":
/*!******************************************************!*\
  !*** ./src/client/store/actions/AuthModalActions.js ***!
  \******************************************************/
/*! exports provided: changeIsModalOpen, changeIsLogInOpen, changeIsSignUpOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeIsModalOpen\", function() { return changeIsModalOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeIsLogInOpen\", function() { return changeIsLogInOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeIsSignUpOpen\", function() { return changeIsSignUpOpen; });\nvar changeIsModalOpen = function changeIsModalOpen(isModalOpen) {\n  return {\n    type: \"IS_MODAL_OPEN\",\n    payload: isModalOpen\n  };\n};\nvar changeIsLogInOpen = function changeIsLogInOpen(isLogInOpen) {\n  return {\n    type: \"IS_LOG_IN_OPEN\",\n    payload: isLogInOpen\n  };\n};\nvar changeIsSignUpOpen = function changeIsSignUpOpen(isSignUpOpen) {\n  return {\n    type: \"IS_SIGN_UP_OPEN\",\n    payload: isSignUpOpen\n  };\n};\n\n//# sourceURL=webpack:///./src/client/store/actions/AuthModalActions.js?");

/***/ }),

/***/ "./src/client/store/actions/GeneralActions.js":
/*!****************************************************!*\
  !*** ./src/client/store/actions/GeneralActions.js ***!
  \****************************************************/
/*! exports provided: changeLoggedIn, changeUser, generalDispatchBundler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeLoggedIn\", function() { return changeLoggedIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeUser\", function() { return changeUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generalDispatchBundler\", function() { return generalDispatchBundler; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar changeLoggedIn = function changeLoggedIn(loggedIn) {\n  return {\n    type: \"LOGGED_IN\",\n    payload: loggedIn\n  };\n};\nvar changeUser = function changeUser(user) {\n  return {\n    type: \"USER\",\n    payload: user\n  };\n};\nvar generalDispatchBundler = function generalDispatchBundler(payload) {\n  return {\n    type: \"GENERAL_BUNDLE\",\n    payload: _objectSpread({}, payload)\n  };\n};\n\n//# sourceURL=webpack:///./src/client/store/actions/GeneralActions.js?");

/***/ }),

/***/ "./src/server/controllers/controller.js":
/*!**********************************************!*\
  !*** ./src/server/controllers/controller.js ***!
  \**********************************************/
/*! exports provided: signUp, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database_models_Sitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database/models/Sitter */ \"./src/server/database/models/Sitter.js\");\n/* harmony import */ var _database_models_Owner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/models/Owner */ \"./src/server/database/models/Owner.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_4___default.a.config();\nvar signUp = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var userData, user, token;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            userData = req.body;\n            _context.prev = 1;\n            user = new User(userData);\n            token = user.generateAuthToken();\n            _context.next = 6;\n            return user.save();\n\n          case 6:\n            _context.next = 12;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(_context.t0.message);\n            return _context.abrupt(\"return\", res.status(400).send({\n              error: \"Failed signing up.\"\n            }));\n\n          case 12:\n            res.send({\n              user: user,\n              token: token\n            });\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 8]]);\n  }));\n\n  return function signUp(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar login = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res, next) {\n    var _req$body, email, password, foundUser, isValidPassword, token;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _req$body = req.body, email = _req$body.email, password = _req$body.password;\n            _context2.next = 3;\n            return User.findOne({\n              email: email\n            });\n\n          case 3:\n            foundUser = _context2.sent;\n\n            if (foundUser) {\n              _context2.next = 6;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.json({\n              message: \"Wrong password or email\"\n            }, 400));\n\n          case 6:\n            isValidPassword = password === foundUser.password;\n\n            if (isValidPassword) {\n              _context2.next = 9;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.json({\n              message: \"Wrong password or email\"\n            }, 400));\n\n          case 9:\n            _context2.next = 11;\n            return foundUser.generateAuthToken();\n\n          case 11:\n            token = _context2.sent;\n            res.status(200).send({\n              user: {\n                username: foundUser.username,\n                email: foundUser.email\n              },\n              token: token\n            });\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function login(_x3, _x4, _x5) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/controllers/controller.js?");

/***/ }),

/***/ "./src/server/database/db.js":
/*!***********************************!*\
  !*** ./src/server/database/db.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar connectDB = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            try {\n              mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(process.env.MONGO_URL, {\n                useNewUrlParser: true,\n                useUnifiedTopology: true\n              });\n            } catch (err) {\n              console.error(err);\n              process.exit(1);\n            }\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function connectDB() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDB);\n\n//# sourceURL=webpack:///./src/server/database/db.js?");

/***/ }),

/***/ "./src/server/database/models/Owner.js":
/*!*********************************************!*\
  !*** ./src/server/database/models/Owner.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _email;\n\n\n\nvar ownerSchema = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Schema({\n  username: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  email: (_email = {\n    type: String,\n    required: true,\n    trim: true\n  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_email, \"trim\", true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_email, \"lowercase\", true), _email),\n  password: {\n    type: String,\n    required: true,\n    trim: true,\n    minlength: 6\n  },\n  animals: [{\n    kind: String,\n    weight: String\n  }],\n  picture: String\n});\n\nownerSchema.methods.generateAuthToken = function () {\n  var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n    _id: this._id.toString()\n  }, process.env.JWT_SECRET, {\n    expiresIn: \"10000\"\n  });\n  return token;\n};\n\nvar Owner = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model(\"Owner\", ownerSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Owner);\n\n//# sourceURL=webpack:///./src/server/database/models/Owner.js?");

/***/ }),

/***/ "./src/server/database/models/Sitter.js":
/*!**********************************************!*\
  !*** ./src/server/database/models/Sitter.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _email;\n\n\n\n\nvar sitterSchema = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Schema({\n  username: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  email: (_email = {\n    type: String,\n    required: true,\n    trim: true\n  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_email, \"trim\", true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_email, \"lowercase\", true), _email),\n  password: {\n    type: String,\n    required: true,\n    trim: true,\n    minlength: 6\n  },\n  adress: {\n    street: String,\n    city: String,\n    zip: Number,\n    location: {\n      latitude: String,\n      longitude: String\n    }\n  },\n  phoneNumber: String,\n  rate: Number,\n  rating: Number,\n  // profileComments,\n  picture: String\n});\n\nsitterSchema.methods.generateAuthToken = function () {\n  var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n    _id: this._id.toString()\n  }, process.env.JWT_SECRET, {\n    expiresIn: \"10000\"\n  });\n  return token;\n};\n\nvar Sitter = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model(\"Sitter\", sitterSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sitter);\n\n//# sourceURL=webpack:///./src/server/database/models/Sitter.js?");

/***/ }),

/***/ "./src/server/error/HttpError.js":
/*!***************************************!*\
  !*** ./src/server/error/HttpError.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar HttpError = function HttpError(message, errorCode) {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HttpError);\n\n  this.errorCode = errorCode;\n  this.message = message;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HttpError);\n\n//# sourceURL=webpack:///./src/server/error/HttpError.js?");

/***/ }),

/***/ "./src/server/html.js":
/*!****************************!*\
  !*** ./src/server/html.js ***!
  \****************************/
/*! exports provided: renderHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderHTML\", function() { return renderHTML; });\nvar renderHTML = function renderHTML(markup) {\n  return \"<!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"utf-8\\\" />\\n        <meta name=\\\"viewport\\\" content=\\\"initial-scale=1.0, width=device-width\\\" />\\n    \\n        <link\\n          href=\\\"https://fonts.googleapis.com/css?family=Quicksand&display=swap\\\"\\n          rel=\\\"stylesheet\\\"\\n        />\\n        <link\\n          rel=\\\"stylesheet\\\"\\n          href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css\\\"\\n        />\\n      <link rel=\\\"stylesheet\\\" href=\\\"./static/stylesheets/index.css\\\">\\n        </style>\\n        <title>Sit</title>\\n      </head>\\n      <body>\\n        <div id=\\\"modal-hook\\\"></div>\\n        <div id=\\\"backdrop-hook\\\"></div>\\n        <div id=\\\"root\\\">\".concat(markup, \"</div>\\n        <script src=\\\"./dist/bundle.js\\\"></script>\\n      </body>\\n    </html>\\n    \");\n};\n\n//# sourceURL=webpack:///./src/server/html.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/route */ \"./src/server/routes/route.js\");\n/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database/db */ \"./src/server/database/db.js\");\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html */ \"./src/server/html.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nObject(_database_db__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\nvar PORT = process.env.PORT || 5000;\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(\"/static\", express__WEBPACK_IMPORTED_MODULE_2___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(__dirname, \"static\")));\napp.use(\"/dist\", express__WEBPACK_IMPORTED_MODULE_2___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(__dirname, \"dist\")));\napp.get(\"/\", function (req, res, next) {\n  var markup = react_dom_server__WEBPACK_IMPORTED_MODULE_9___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__[\"StaticRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null)));\n  return res.send(Object(_html__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(markup));\n});\napp.use(_routes_route__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.use( /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res, next) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", res.status(req.error.errorCode).json({\n              error: req.error.message\n            }));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.listen(PORT, function () {\n  console.log(\"Listening\");\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/routes/route.js":
/*!************************************!*\
  !*** ./src/server/routes/route.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/controller */ \"./src/server/controllers/controller.js\");\n/* harmony import */ var _error_HttpError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error/HttpError */ \"./src/server/error/HttpError.js\");\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.post(\"/sign-up\", _controllers_controller__WEBPACK_IMPORTED_MODULE_1__[\"signUp\"]);\nrouter.post(\"/login\", _controllers_controller__WEBPACK_IMPORTED_MODULE_1__[\"login\"]);\nrouter.use(function (req, res, next) {\n  req.error = new _error_HttpError__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Route doesnt exist\", \"400\");\n  return next();\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/route.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/taggedTemplateLiteral\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/taggedTemplateLiteral%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });