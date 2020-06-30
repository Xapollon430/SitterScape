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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\server.js: Unexpected token (28:49)\\n\\n\\u001b[0m \\u001b[90m 26 | \\u001b[39m      \\u001b[36mreturn\\u001b[39m res\\u001b[33m.\\u001b[39mstatus(\\u001b[35m500\\u001b[39m)\\u001b[33m.\\u001b[39msend(\\u001b[32m\\\"An error occurred\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 27 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 28 | \\u001b[39m    \\u001b[36mconst\\u001b[39m markup \\u001b[33m=\\u001b[39m \\u001b[33mReactDOMServer\\u001b[39m\\u001b[33m.\\u001b[39mrenderToString(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m    console\\u001b[33m.\\u001b[39mlog(markup)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 30 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m res\\u001b[33m.\\u001b[39msend(\\u001b[0m\\n\\u001b[0m \\u001b[90m 31 | \\u001b[39m      data\\u001b[33m.\\u001b[39mreplace(\\u001b[32m'<div id=\\\"root\\\"></div>'\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[32m`<div id=\\\"root\\\">${markup}</div>`\\u001b[39m)\\u001b[0m\\n    at Parser._raise (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:754:17)\\n    at Parser.raiseWithData (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:747:17)\\n    at Parser.raise (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:741:17)\\n    at Parser.unexpected (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8844:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10167:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9693:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9673:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9543:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9516:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9471:21)\\n    at Parser.parseExprListItem (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10829:18)\\n    at Parser.parseCallExpressionArguments (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9887:22)\\n    at Parser.parseSubscript (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9787:31)\\n    at Parser.parseSubscripts (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9716:19)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9699:17)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9673:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9543:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9516:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9471:21)\\n    at Parser.parseVar (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11852:26)\\n    at Parser.parseVarStatement (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11661:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11260:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11193:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11768:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11754:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11738:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10745:24)\\n    at Parser.parseArrowExpression (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10714:10)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10332:12)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Xapol\\\\Desktop\\\\Sit\\\\Backend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10044:21)\");\n\n//# sourceURL=webpack:///./server.js?");

/***/ })

/******/ });