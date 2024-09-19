/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.css */ \"./pages/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App() {\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileUpload = (event)=>{\n    // Handle file upload logic\n    };\n    const connectAccount = ()=>{\n        // Handle account connection logic\n        setAccount(\"0x1234...abcd\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"AceCoin Document Signing\"\n                }, void 0, false, {\n                    fileName: \"/app/pages/_app.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"account-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Connected Account: \",\n                                    account ? account : \"Not Connected\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/pages/_app.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            !account && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"connect-btn\",\n                                onClick: connectAccount,\n                                children: \"Connect Wallet\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/_app.js\",\n                                lineNumber: 24,\n                                columnNumber: 24\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"upload-section\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"file-input-label\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    onChange: handleFileUpload\n                                }, void 0, false, {\n                                    fileName: \"/app/pages/_app.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/app/pages/_app.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"upload-btn\",\n                                children: \"Upload Document\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/_app.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/_app.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/_app.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/_app.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ3JCO0FBRW5CLFNBQVNFO0lBQ1AsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1JLG1CQUFtQixDQUFDQztJQUN4QiwyQkFBMkI7SUFDN0I7SUFFQSxNQUFNQyxpQkFBaUI7UUFDckIsa0NBQWtDO1FBQ2xDSCxXQUFXO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7MEJBRU4sOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTs7b0NBQUU7b0NBQW9CUixVQUFVQSxVQUFVOzs7Ozs7OzRCQUMxQyxDQUFDQSx5QkFBVyw4REFBQ1M7Z0NBQU9ILFdBQVU7Z0NBQWNJLFNBQVNOOzBDQUFnQjs7Ozs7Ozs7Ozs7O2tDQUV4RSw4REFBQ0M7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FBTUwsV0FBVTswQ0FDZiw0RUFBQ007b0NBQU1DLE1BQUs7b0NBQU9DLFVBQVVaOzs7Ozs7Ozs7OzswQ0FFL0IsOERBQUNPO2dDQUFPSCxXQUFVOzBDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekM7QUFFQSxpRUFBZVAsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9hcHAuY3NzJztcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVGaWxlVXBsb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gSGFuZGxlIGZpbGUgdXBsb2FkIGxvZ2ljXG4gIH07XG5cbiAgY29uc3QgY29ubmVjdEFjY291bnQgPSAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGFjY291bnQgY29ubmVjdGlvbiBsb2dpY1xuICAgIHNldEFjY291bnQoXCIweDEyMzQuLi5hYmNkXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8aDE+QWNlQ29pbiBEb2N1bWVudCBTaWduaW5nPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1pbmZvXCI+XG4gICAgICAgICAgPHA+Q29ubmVjdGVkIEFjY291bnQ6IHthY2NvdW50ID8gYWNjb3VudCA6ICdOb3QgQ29ubmVjdGVkJ308L3A+XG4gICAgICAgICAgeyFhY2NvdW50ICYmIDxidXR0b24gY2xhc3NOYW1lPVwiY29ubmVjdC1idG5cIiBvbkNsaWNrPXtjb25uZWN0QWNjb3VudH0+Q29ubmVjdCBXYWxsZXQ8L2J1dHRvbj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZpbGUtaW5wdXQtbGFiZWxcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlVXBsb2FkfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1cGxvYWQtYnRuXCI+VXBsb2FkIERvY3VtZW50PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXBwIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJoYW5kbGVGaWxlVXBsb2FkIiwiZXZlbnQiLCJjb25uZWN0QWNjb3VudCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/app.css":
/*!***********************!*\
  !*** ./pages/app.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();