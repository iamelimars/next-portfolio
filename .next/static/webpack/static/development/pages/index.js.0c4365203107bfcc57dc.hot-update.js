webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects/projectContainer.js":
/*!******************************************************!*\
  !*** ./components/home/projects/projectContainer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projectContainer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectContainer.scss */ "./components/home/projects/projectContainer.scss");
/* harmony import */ var _projectContainer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projectContainer_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\sites\\next-portfolio\\components\\home\\projects\\projectContainer.js";



var ProjectContainer = function ProjectContainer(_ref) {
  var alt = _ref.alt,
      project = _ref.project;

  if (alt === "left") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
      direction: alt,
      project: project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
      direction: alt,
      project: project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }
};

var Left = function Left(_ref2) {
  var direction = _ref2.direction,
      project = _ref2.project;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: project.data.image.url,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), project.data.title[0].text);
};

var Right = function Right(_ref3) {
  var direction = _ref3.direction,
      project = _ref3.project;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, project.data.title[0].text);
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectContainer);

/***/ })

})
//# sourceMappingURL=index.js.0c4365203107bfcc57dc.hot-update.js.map