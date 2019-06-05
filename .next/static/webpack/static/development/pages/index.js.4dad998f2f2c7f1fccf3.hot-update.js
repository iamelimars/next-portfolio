webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/projects/projects.js":
/*!**********************************************!*\
  !*** ./components/home/projects/projects.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projects_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.scss */ "./components/home/projects/projects.scss");
/* harmony import */ var _projects_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projects_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _projectContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectContainer */ "./components/home/projects/projectContainer.js");
/* harmony import */ var _PrismicContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PrismicContext */ "./components/PrismicContext.js");
var _jsxFileName = "E:\\sites\\next-portfolio\\components\\home\\projects\\projects.js";






var Projects = function Projects() {
  var data = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_PrismicContext__WEBPACK_IMPORTED_MODULE_4__["PrismicContext"]);
  console.log(data.projects.results);
  var projects = data.projects.results;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "PROJECTS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, projects.map(function (project, index) {
    console.log(project);

    if (index % 2) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        alt: "right",
        project: project,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        alt: "left",
        project: project,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.4dad998f2f2c7f1fccf3.hot-update.js.map