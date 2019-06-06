webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/common/footer/footer.js":
/*!********************************************!*\
  !*** ./components/common/footer/footer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ "./components/common/footer/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\sites\\next-portfolio\\components\\common\\footer\\footer.js";



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Footer");
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_common_navbar_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/navbar/navbar */ "./components/common/navbar/navbar.js");
/* harmony import */ var _components_home_header_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home/header/header */ "./components/home/header/header.js");
/* harmony import */ var _components_common_pageHead_pageHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/common/pageHead/pageHead */ "./components/common/pageHead/pageHead.js");
/* harmony import */ var _components_home_about_about__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/home/about/about */ "./components/home/about/about.js");
/* harmony import */ var _components_home_projects_projects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/home/projects/projects */ "./components/home/projects/projects.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismic-javascript */ "./node_modules/prismic-javascript/dist/prismic-javascript.min.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_home_skills_skills__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/home/skills/skills */ "./components/home/skills/skills.js");
/* harmony import */ var _components_common_footer_footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/common/footer/footer */ "./components/common/footer/footer.js");







var _jsxFileName = "E:\\sites\\next-portfolio\\pages\\index.js";











var apiEndpoint = 'https://eli-portfolio.cdn.prismic.io/api/v2';

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, _Component);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    value: function render() {
      // console.log(this.props.projects);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3305584780",
        __self: this
      }, "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzaXRlc1xcbmV4dC1wb3J0Zm9saW9cXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ21DLEFBR2tDLFNBQ2IiLCJmaWxlIjoiRTpcXHNpdGVzXFxuZXh0LXBvcnRmb2xpb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9uYXZiYXIvbmF2YmFyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9oZWFkZXIvaGVhZGVyJ1xyXG5pbXBvcnQgUGFnZUhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vcGFnZUhlYWQvcGFnZUhlYWQnXHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvYWJvdXQvYWJvdXQnXHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvcHJvamVjdHMvcHJvamVjdHMnXHJcbmltcG9ydCBQcmlzbWljIGZyb20gJ3ByaXNtaWMtamF2YXNjcmlwdCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSc7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL3NraWxscy9za2lsbHMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vZm9vdGVyL2Zvb3RlcidcclxuXHJcbmNvbnN0IGFwaUVuZHBvaW50ID0gJ2h0dHBzOi8vZWxpLXBvcnRmb2xpby5jZG4ucHJpc21pYy5pby9hcGkvdjInO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gYXdhaXQgdGhpcy5nZXRQcm9qZWN0cyhyZXEpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHByb2plY3RzOiBwcm9qZWN0cy5yZXN1bHRzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgc3RhdGljIGFzeW5jIGdldFByb2plY3RzIChyZXEpIHsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IEFQSSA9IGF3YWl0IFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50LCB7IHJlcSB9KVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBBUEkucXVlcnkoUHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ3dvcmtzJyksIHtcclxuICAgICAgICAgICAgb3JkZXJpbmdzOiAnW215LndvcmtzLmZpcnN0X3B1YmxpY2F0aW9uX2RhdGUgZGVzY10nXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnByb2plY3RzKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8UGFnZUhlYWQgdGl0bGU9XCJIb21lIHwgRWxpIEogTWFyc2hhbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciBjb2xvcj1cInJnYmEoMSwxLDEsMClcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgICAgICAgICAgIDxTa2lsbHMgLz5cclxuICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdfQ== */\n/*@ sourceURL=E:\\sites\\next-portfolio\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_common_pageHead_pageHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Home | Eli J Marshall",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_common_navbar_navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        color: "rgba(1,1,1,0)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_home_header_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_home_about_about__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_home_projects_projects__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_home_skills_skills__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var req, projects;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = context.req;
                _context.next = 3;
                return this.getProjects(req);

              case 3:
                projects = _context.sent;
                return _context.abrupt("return", {
                  projects: projects.results
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "getProjects",
    value: function () {
      var _getProjects = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req) {
        var API;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return prismic_javascript__WEBPACK_IMPORTED_MODULE_14___default.a.getApi(apiEndpoint, {
                  req: req
                });

              case 2:
                API = _context2.sent;
                _context2.next = 5;
                return API.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_14___default.a.Predicates.at('document.type', 'works'), {
                  orderings: '[my.works.first_publication_date desc]'
                });

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getProjects(_x2) {
        return _getProjects.apply(this, arguments);
      }

      return getProjects;
    }()
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.dfd1ce317f64065046b0.hot-update.js.map