webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/contact/contact.js":
/*!********************************************!*\
  !*** ./components/home/contact/contact.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.scss */ "./components/home/contact/contact.scss");
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contact_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Reveal */ "./node_modules/react-reveal/Reveal.js");
/* harmony import */ var react_reveal_Reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Reveal__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\sites\\next-portfolio\\components\\home\\contact\\contact.js";




var Contact = function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Reveal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    effect: "fadeInUp",
    effectOut: "fadeOutLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Contact")));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./node_modules/react-reveal/Fade.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/Fade.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.distance,t=e.left,p=e.right,a=e.up,l=e.down,i=e.top,u=e.bottom,n=e.big,s=e.mirror,d=e.opposite,_=(r?r.toString():0)+((t?1:0)|(p?2:0)|(i||l?4:0)|(u||a?8:0)|(s?16:0)|(d?32:0)|(o?64:0)|(n?128:0));if(lookup.hasOwnProperty(_))return lookup[_];var f=t||p||a||l||i||u,y=void 0,b=void 0;if(f){if(!s!=!(o&&d)){var v=[p,t,u,i,l,a];t=v[0],p=v[1],i=v[2],u=v[3],a=v[4],l=v[5]}var c=r||(n?"2000px":"100%");y=t?"-"+c:p?c:"0",b=l||i?"-"+c:a||u?c:"0"}return lookup[_]=(0,_globals.animation)((o?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+y+", "+b+", 0);":"")+"}\n     "+(o?"from":"to")+" {opacity: 1;transform: none;} "),lookup[_]}function Fade(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=o.children,t=(o.out,o.forever),p=o.timeout,a=o.duration,l=void 0===a?_globals.defaults.duration:a,i=o.delay,u=void 0===i?_globals.defaults.delay:i,n=o.count,s=void 0===n?_globals.defaults.count:n,d=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),_={make:make,duration:void 0===p?l:p,delay:u,forever:t,count:s,style:{animationFillMode:"both"},reverse:d.left};return e?(0,_wrap2.default)(d,_,_,r):_}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,big:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,distance:_propTypes.string,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Fade.propTypes=propTypes,exports.default=Fade,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/Reveal.js":
/*!*********************************************!*\
  !*** ./node_modules/react-reveal/Reveal.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function Reveal(e){function t(e){return e?_?{duration:n,delay:f,count:s,forever:d,className:_,style:{}}:y:i?{duration:void 0===o?u:o,delay:p,count:a,forever:l,className:i,style:{}}:c}var r=e.children,o=e.timeout,u=e.duration,p=e.delay,a=e.count,l=e.forever,n=e.durationOut,f=e.delayOut,s=e.countOut,d=e.foreverOut,i=e.effect,_=e.effectOut,c=e.inEffect,y=e.outEffect,O=_objectWithoutProperties(e,["children","timeout","duration","delay","count","forever","durationOut","delayOut","countOut","foreverOut","effect","effectOut","inEffect","outEffect"]);return(0,_wrap2.default)(O,t(!1),t(!0),r)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),_Fade=__webpack_require__(/*! ./Fade */ "./node_modules/react-reveal/Fade.js"),_Fade2=_interopRequireDefault(_Fade),propTypes={in:_propTypes.object,out:(0,_propTypes.oneOfType)([_propTypes.object,(0,_propTypes.oneOf)([!1])]),effect:_propTypes.string,effectOut:_propTypes.string,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool,durationOut:_propTypes.number,delayOut:_propTypes.number,countOut:_propTypes.number,foreverOut:_propTypes.bool},defaultProps=_extends({},_globals.defaults,{durationOut:_globals.defaults.duration,delayOut:_globals.defaults.delay,countOut:_globals.defaults.count,foreverOut:_globals.defaults.forever,inEffect:(0,_Fade2.default)(_globals.defaults),outEffect:(0,_Fade2.default)(_extends({out:!0},_globals.defaults))});Reveal.propTypes=propTypes,Reveal.defaultProps=defaultProps,exports.default=Reveal,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/Slide.js":
false

})
//# sourceMappingURL=index.js.c3c21c6adc411c5fd8a7.hot-update.js.map