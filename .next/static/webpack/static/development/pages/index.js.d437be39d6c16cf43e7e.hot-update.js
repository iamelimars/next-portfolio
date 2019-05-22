webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PrismicContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrismicContext */ "./components/PrismicContext.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismic-javascript */ "./node_modules/prismic-javascript/dist/prismic-javascript.min.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "E:\\sites\\next-portfolio\\components\\Page.js";




var apiEndpoint = 'https://eli-portfolio.cdn.prismic.io/api/v2'; //Custom Hook

function useProjects() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      projects = _useState2[0],
      setProjects = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var projects, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('Mounting or updating'); // const req = context.req

              _context.next = 3;
              return getProjects();

            case 3:
              projects = _context.sent;
              data = projects.results;
              console.log(data);
              setProjects(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return projects;
}

function getProjects() {
  var data = prismic_javascript__WEBPACK_IMPORTED_MODULE_5___default.a.api(apiEndpoint).then(function (api) {
    // console.log(api);
    var proj = api.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_5___default.a.Predicates.at('document.type', 'works'), {
      orderings: '[my.works.first_publication_date desc]'
    }); // console.log(proj);

    return proj;
  }).catch(function (err) {
    console.log(err);
  });
  return data; // const API = Prismic.getApi(apiEndpoint)
  // return API.query(Prismic.Predicates.at('document.type', 'works'), {
  //     orderings: '[my.works.first_publication_date desc]'
  // })
}

function Page(_ref2) {
  var children = _ref2.children;
  var projects = useProjects();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PrismicContext__WEBPACK_IMPORTED_MODULE_4__["PrismicProvider"], {
    value: {
      test: "test"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, children));
}

/***/ })

})
//# sourceMappingURL=index.js.d437be39d6c16cf43e7e.hot-update.js.map