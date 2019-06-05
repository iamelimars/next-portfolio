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
  var tags = project.tags;
  console.log(tags);

  if (alt === "left") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
      direction: alt,
      tags: tags,
      project: project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
      direction: alt,
      tags: tags,
      project: project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }
};

var Left = function Left(_ref2) {
  var direction = _ref2.direction,
      project = _ref2.project,
      tags = _ref2.tags;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: project.data.image.url,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, project.data.title[0].text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, project.data.body[0].text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: project.data.link.url,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "DISCOVER")));
};

var Right = function Right(_ref3) {
  var direction = _ref3.direction,
      project = _ref3.project,
      tags = _ref3.tags;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, project.data.title[0].text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, project.data.body[0].text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "test")), tags.map(function (tags, index) {
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, index);
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: project.data.link.url,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "DISCOVER")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: project.data.image.url,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectContainer);

/***/ })

})
//# sourceMappingURL=index.js.36aaf185544b6d183616.hot-update.js.map