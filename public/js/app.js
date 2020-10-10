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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/dave/Sites/gld/resources/js/app.js: Unexpected token, expected \",\" (31:4)\n\n\u001b[0m \u001b[90m 29 | \u001b[39m    key\u001b[33m:\u001b[39m process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mMIX_PUSHER_APP_KEY\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m    wsHost\u001b[33m:\u001b[39m process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mMIX_PUSHER_LOCATION\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 31 | \u001b[39m    wsPort\u001b[33m:\u001b[39m process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mMIX_PUSHER_PROXY_PORT\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 32 | \u001b[39m    wssPort\u001b[33m:\u001b[39m process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mMIX_PUSHER_PROXY_PORT\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 | \u001b[39m    disableStats\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 34 | \u001b[39m    enabledTransports\u001b[33m:\u001b[39m [\u001b[32m'ws'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'wss'\u001b[39m]\u001b[33m,\u001b[39m\u001b[0m\n    at Parser._raise (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:766:17)\n    at Parser.raiseWithData (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:759:17)\n    at Parser.raise (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:753:17)\n    at Parser.unexpected (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:8966:16)\n    at Parser.expect (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:8952:28)\n    at Parser.parseObjectLike (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:10655:14)\n    at Parser.parseExprAtom (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:10198:23)\n    at Parser.parseExprSubscripts (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9844:23)\n    at Parser.parseUpdate (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9824:21)\n    at Parser.parseMaybeUnary (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9813:17)\n    at Parser.parseExprOps (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9683:23)\n    at Parser.parseMaybeConditional (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9657:23)\n    at Parser.parseMaybeAssign (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9620:21)\n    at /Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9586:39\n    at Parser.allowInAnd (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:11303:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9586:17)\n    at Parser.parseExprListItem (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:11051:18)\n    at Parser.parseCallExpressionArguments (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:10053:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9960:29)\n    at Parser.parseSubscript (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9896:19)\n    at Parser.parseSubscripts (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9867:19)\n    at Parser.parseExprSubscripts (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9850:17)\n    at Parser.parseUpdate (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9824:21)\n    at Parser.parseMaybeUnary (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9813:17)\n    at Parser.parseExprOps (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9683:23)\n    at Parser.parseMaybeConditional (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9657:23)\n    at Parser.parseMaybeAssign (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9620:21)\n    at Parser.parseExpressionBase (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9564:23)\n    at /Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9558:39\n    at Parser.allowInAnd (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:11297:16)\n    at Parser.parseExpression (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:9558:17)\n    at Parser.parseStatementContent (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:11562:23)\n    at Parser.parseStatement (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:12013:25)\n    at Parser.parseBlockBody (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:11999:10)\n    at Parser.parseTopLevel (/Users/dave/Sites/gld/node_modules/@babel/parser/lib/index.js:11362:10)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/dave/Sites/gld/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/dave/Sites/gld/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });