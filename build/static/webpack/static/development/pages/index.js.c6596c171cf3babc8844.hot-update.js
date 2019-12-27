webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_style_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/style/header.css */ "./static/style/header.css");
/* harmony import */ var _static_style_header_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_style_header_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/alkun/Desktop/project/reactNext/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Header = function Header(props) {
  var handleClick = function handleClick() {
    if (props.handleClick) {
      console.log(123344);
      props.handleClick();
    } else {
      // Router.push('/writing')
      location.href = './writing.html';
    }
  };

  return __jsx("div", {
    className: "Header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "logo",
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: "../static/images/alkun_logo.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "alkun"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "primary",
    size: "large",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.type !== 'write' ? __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }) : null, props.text || '写文章'));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.c6596c171cf3babc8844.hot-update.js.map