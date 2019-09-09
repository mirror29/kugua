"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************************************************!*\
  !*** E:/公司/项目/KuGuaVUE/main.js?{"page":"pages%2Fproduct%2Fvideo"} ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_product_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/product/video.nvue?mpType=page */ 1);


_pages_product_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = 'page'
_pages_product_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].route = 'pages/product/video'
_pages_product_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].el = '#root'
_pages_product_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].appStyle = {}
Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 21).default,_pages_product_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].appStyle)

new Vue(_pages_product_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),
/* 1 */
/*!**************************************************************!*\
  !*** E:/公司/项目/KuGuaVUE/pages/product/video.nvue?mpType=page ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_nvue_vue_type_template_id_527c5858_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=527c5858&scoped=true&mpType=page */ 2);
/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 4);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&id=527c5858&scoped=true&lang=css&mpType=page */ 19).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&id=527c5858&scoped=true&lang=css&mpType=page */ 19).default)
          }

}

/* normalize component */

var component = Object(_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _video_nvue_vue_type_template_id_527c5858_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _video_nvue_vue_type_template_id_527c5858_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "527c5858",
  "646bcd86"
  
)

component.options.__file = "项目/KuGuaVUE/pages/product/video.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 2 */
/*!********************************************************************************************************!*\
  !*** E:/公司/项目/KuGuaVUE/pages/product/video.nvue?vue&type=template&id=527c5858&scoped=true&mpType=page ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_template_id_527c5858_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--4-0!./video.nvue?vue&type=template&id=527c5858&scoped=true&mpType=page */ 3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_template_id_527c5858_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_template_id_527c5858_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 3 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??ref--4-0!E:/公司/项目/KuGuaVUE/pages/product/video.nvue?vue&type=template&id=527c5858&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "div",
        { staticClass: ["page"] },
        [
          _c(
            "swiper",
            {
              staticClass: ["swiper"],
              style: { height: _vm.height },
              attrs: { vertical: true, current: _vm.index },
              on: { change: _vm.changeCurrent }
            },
            _vm._l(_vm.videoList, function(item, index) {
              return _c(
                "swiper-item",
                { key: item.id },
                [
                  _c("chunlei-video", {
                    staticClass: ["video"],
                    style: { height: _vm.height, width: _vm.width },
                    attrs: { src: item.src, play: item.flag },
                    on: { click: _vm.clickVideo }
                  }),
                  _c(
                    "cover-view",
                    { staticClass: ["cover-view-top"] },
                    [
                      _c("u-text", { staticClass: ["top-text"] }, [
                        _vm._v(_vm._s(item.content))
                      ])
                    ],
                    1
                  ),
                  _c("cover-view", {
                    staticClass: ["cover-view-center"],
                    style: { height: _vm.height, width: _vm.width }
                  }),
                  _c(
                    "cover-view",
                    {
                      staticClass: ["cover-view-left"],
                      on: {
                        click: function($event) {
                          return _vm.toDetail(item.id)
                        }
                      }
                    },
                    [
                      _c("cover-image", {
                        staticClass: ["goods-img"],
                        attrs: { src: item.img }
                      }),
                      _c("u-text", { staticClass: ["left-text"] }, [
                        _vm._v(_vm._s(item.name))
                      ])
                    ],
                    1
                  ),
                  _c(
                    "cover-view",
                    { staticClass: ["cover-view-right"] },
                    [
                      _c("cover-image", {
                        staticClass: ["img"],
                        attrs: {
                          src: item.check
                            ? "../../static/aixinRed.png"
                            : "../../static/aixin.png"
                        },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.tapLove($event)
                          }
                        }
                      }),
                      _c("cover-image", {
                        staticClass: ["img"],
                        attrs: { src: "../../static/share-fill.png" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.tapShare($event)
                          }
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 4 */
/*!**************************************************************************************!*\
  !*** E:/公司/项目/KuGuaVUE/pages/product/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--3-0!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--4-0!./video.nvue?vue&type=script&lang=js&mpType=page */ 5);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 5 */
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??ref--4-0!E:/公司/项目/KuGuaVUE/pages/product/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni, __f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));


































var _chunleiVideo = _interopRequireDefault(__webpack_require__(/*! ../../components/chunlei-video/chunlei-video.vue */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  components: {
    chunleiVideo: _chunleiVideo.default },

  data: function data() {
    return {
      sysheight: 0,
      videoList: [],
      height: '667px',
      index: 0,
      width: '',
      page: 1,
      limit: 5,
      tag: '视频' };

  },
  created: function created() {

    plus.screen.lockOrientation("portrait-primary");

    this.sysheight = uni.getSystemInfoSync().windowHeight;
    this.height = "".concat(this.sysheight, "px");
    var width = uni.getSystemInfoSync().windowWidth;
    this.width = "".concat(width, "px");
  },
  mounted: function () {var _mounted = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _this;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              _this = this;_context.next = 3;return (
                this.pushVideoList());case 3:
              setTimeout(function () {
                _this.videoPlay(_this.index);
              }, 20);case 4:case "end":return _context.stop();}}}, _callee, this);}));function mounted() {return _mounted.apply(this, arguments);}return mounted;}(),

  updated: function updated() {
    var allLength = this.page * this.limit;
    console.log(__f__(this.index, allLength, " at pages\\product\\video.nvue:71"));
    if (this.index + 1 === allLength) {
      this.page++;
      this.pushVideoList();
    }
  },
  methods: {
    changeCurrent: function changeCurrent(e) {
      this.index = e.detail.current;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
        for (var _iterator = this.videoList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var item = _step.value;
          item.flag = false;
        }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return != null) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
      this.videoList[this.index].flag = !this.videoList[this.index].flag;
    },
    pushVideoList: function pushVideoList() {var _this2 = this;
      var promise = new Promise(function (resolve, reject) {
        uni.request({
          url: 'https://api.kuguayouhui.com/api/amoy/product/index',
          data: {
            tag: _this2.tag,
            page: _this2.page,
            limit: _this2.limit },

          method: 'POST',
          header: {
            "content-type": "application/x-www-form-urlencoded" },

          success: function success(res) {
            var videoGroup = [];
            var data = res.data.data;
            console.log(__f__(res, " at pages\\product\\video.nvue:101"));
            console.log(__f__(_this2.page, " at pages\\product\\video.nvue:102"));
            for (var key in data) {
              videoGroup.push({
                src: data[key].video.videoUrl,
                content: data[key].video.subTitle,
                img: data[key].images,
                id: data[key].id,
                name: data[key].name,
                flag: false,
                check: false });

            }
            _this2.videoList = [].concat(_toConsumableArray(_this2.videoList), videoGroup);
            resolve();
          } });

      });
      return promise;
    },
    tapLove: function tapLove() {
      this.videoList[this.index].check = !this.videoList[this.index].check;
      this.videoList = _toConsumableArray(this.videoList);
    },
    tapShare: function tapShare() {
      var id = this.videoList[this.index].id;
      uni.navigateTo({
        url: "/pages/product/share?type=other&id=".concat(id) });

    },
    toDetail: function toDetail(id) {
      uni.navigateTo({
        url: "/pages/product/detail?id=".concat(id) });

    },
    videoPlay: function videoPlay(index) {var _this3 = this;
      var promise = new Promise(function (resolve, reject) {
        resolve();
      });
      promise.then(function (res) {
        _this3.videoList[index].flag = !_this3.videoList[index].flag;
      });
    },
    clickVideo: function clickVideo() {
      this.videoList[this.index].flag = !this.videoList[this.index].flag;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)["default"]))

/***/ }),
/* 6 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default, weexPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexPlus", function() { return weexPlus; });
function initUni() {

    var isFn = function isFn(v) {
        return typeof v === 'function';
    };

    var handlePromise = function handlePromise(promise) {
        return promise.then(function(data) {
            return [null, data];
        }).catch(function(err) {
            return [err];
        });
    };

    var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
    var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
        'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
        'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
        'pageScrollTo', 'drawCanvas'
    ];

    var shouldPromise = function shouldPromise(name) {
        if (REGEX.test(name) && name !== 'createBLEConnection') {
            return false;
        }
        if (~API_NORMAL_LIST.indexOf(name)) {
            return false;
        }
        return true;
    };

    var promisify = function promisify(api) {
        return function() {
            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                params[_key - 1] = arguments[_key];
            }

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
                return api.apply(undefined, [options].concat(params));
            }
            return handlePromise(new Promise(function(resolve, reject) {
                api.apply(undefined, [Object.assign({}, options, {
                    success: resolve,
                    fail: reject
                })].concat(params));
                /* eslint-disable no-extend-native */
                Promise.prototype.finally = function(callback) {
                    var promise = this.constructor;
                    return this.then(function(value) {
                        return promise.resolve(callback()).then(function() {
                            return value;
                        });
                    }, function(reason) {
                        return promise.resolve(callback()).then(function() {
                            throw reason;
                        });
                    });
                };
            }));
        };
    };

    var onMessageCallbacks = [];

    var origin = void 0;

    function onSubNVueMessage(data) {
        onMessageCallbacks.forEach(function(callback) {
            return callback({
                origin: origin,
                data: data
            });
        });
    }

    var webviewId = weexPlus.webview.currentWebview().id;

    var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
    channel.onmessage = function(event) {
        if (event.data.to === webviewId) {
            onSubNVueMessage(event.data.data);
        }
    };

    function wrapper(webview) {
        webview.$processed = true;

        var currentWebviewId = weexPlus.webview.currentWebview().id;
        var isPopupNVue = currentWebviewId === webview.id;

        var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
        var popupNVueId = webview.id;

        webview.postMessage = function(data) {
            if (hostNVueId) {
                channel.postMessage({
                    data: data,
                    to: isPopupNVue ? hostNVueId : popupNVueId
                });
            } else {
                postMessage({
                    type: 'UniAppSubNVue',
                    data: data
                });
            }
        };
        webview.onMessage = function(callback) {
            onMessageCallbacks.push(callback);
        };

        if (!webview.__uniapp_mask_id) {
            return;
        }
        origin = webview.__uniapp_host;

        var maskColor = webview.__uniapp_mask;

        var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
        maskWebview = maskWebview.parent() || maskWebview;//再次检测父
        var oldShow = webview.show;
        var oldHide = webview.hide;
        var oldClose = webview.close;

        var showMask = function showMask() {
            maskWebview.setStyle({
                mask: maskColor
            });
        };
        var closeMask = function closeMask() {
            maskWebview.setStyle({
                mask: 'none'
            });
        };
        webview.show = function() {
            showMask();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return oldShow.apply(webview, args);
        };
        webview.hide = function() {
            closeMask();

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return oldHide.apply(webview, args);
        };
        webview.close = function() {
            closeMask();

            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return oldClose.apply(webview, args);
        };
    }

    function getSubNVueById(id) {
        var webview = weexPlus.webview.getWebviewById(id);
        if (webview && !webview.$processed) {
            wrapper(webview);
        }
        return webview;
    }

    function getCurrentSubNVue() {
        return getSubNVueById(weexPlus.webview.currentWebview().id);
    }

    var plus = weex.requireModule('plus');
    var globalEvent = weex.requireModule('globalEvent');

    var id = 0;
    var callbacks = {};

    var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

    globalEvent.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppJsApi') {
            invoke(e.data.id, e.data.data);
        } else if (e.data.type === 'UniAppSubNVue') {
            onSubNVueMessage(e.data.data, e.data.options);
        } else if (e.data.type === 'onNavigationBarButtonTap') {
            if (typeof onNavigationBarButtonTapCallback === 'function') {
                onNavigationBarButtonTapCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
            if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
                onNavigationBarSearchInputChangedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
            if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
                onNavigationBarSearchInputConfirmedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
            if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
                onNavigationBarSearchInputClickedCallback(e.data.data);
            }
        }
    });

    var createCallback = function createCallback(args, type) {
        var callback = function callback(res) {
            if (isFn(args)) {
                args(res);
            } else if (args) {
                if (~res.errMsg.indexOf(':ok')) {
                    isFn(args.success) && args.success(res);
                } else if (~res.errMsg.indexOf(':fail')) {
                    isFn(args.fail) && args.fail(res);
                }
                isFn(args.complete) && args.complete(res);
            }
        };
        if (isFn(args) || args && isFn(args.callback)) {
            callback.keepAlive = true;
        }
        return callback;
    };

    var invoke = function invoke(callbackId, data) {
        var callback = callbacks[callbackId];
        if (callback) {
            callback(data);
            if (!callback.keepAlive) {
                delete callbacks[callbackId];
            }
        } else {
            console.error('callback[' + callbackId + '] is undefined');
        }
    };

    var publish = function publish(_ref) {
        var id = _ref.id,
            type = _ref.type,
            params = _ref.params;

        callbacks[id] = createCallback(params, type);
        plus.postMessage({
            id: id,
            type: type,
            params: params
        }, UNIAPP_SERVICE_NVUE_ID);
    };

    function postMessage(data) {
        plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
    }

    var createPublish = function createPublish(name) {
        return function(args) {
            publish({
                id: id++,
                type: name,
                params: args
            });
        };
    };

    var onNavigationBarButtonTapCallback = void 0;
    var onNavigationBarSearchInputChangedCallback = void 0;
    var onNavigationBarSearchInputConfirmedCallback = void 0;
    var onNavigationBarSearchInputClickedCallback = void 0;

    function onNavigationBarButtonTap(callback) {
        onNavigationBarButtonTapCallback = callback;
    }

    function onNavigationBarSearchInputChanged(callback) {
        onNavigationBarSearchInputChangedCallback = callback;
    }

    function onNavigationBarSearchInputConfirmed(callback) {
        onNavigationBarSearchInputConfirmedCallback = callback;
    }

    function onNavigationBarSearchInputClicked(callback) {
        onNavigationBarSearchInputClickedCallback = callback;
    }

    function requireNativePlugin(pluginName) {
        return weex.requireModule(pluginName);
    }

    var dom = weex.requireModule('dom');

    function loadFontFace(_ref) {
        var family = _ref.family,
            source = _ref.source,
            desc = _ref.desc,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        dom.addRule('fontFace', {
            fontFamily: family,
            src: source.replace(/"/g, '\'')
        });
        var res = {
            errMsg: 'loadFontFace:ok',
            status: 'loaded'
        };
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var globalEvent$1 = weex.requireModule('globalEvent');

    var callbacks$1 = [];

    globalEvent$1.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppReady') {
            ready.isUniAppReady = true;
            if (callbacks$1.length) {
                callbacks$1.forEach(function(callback) {
                    return callback();
                });
                callbacks$1 = [];
            }
        }
    });

    function ready(callback) {
        if (typeof callback === 'function') {
            if (this.isUniAppReady) {
                callback();
            } else {
                callbacks$1.push(callback);
            }
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
            "symbol" : typeof obj;
    };

    var stream = weex.requireModule('stream');

    // let requestTaskId = 0

    var METHOD_GET = 'GET';
    var METHOD_POST = 'POST';
    var CONTENT_TYPE_JSON = 'application/json';
    var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

    var serialize = function serialize(data) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
        var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
                return JSON.stringify(data);
            } else {
                return Object.keys(data).map(function(key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                }).join('&');
            }
        }
        return data;
    };

    function request(_ref) {
        var url = _ref.url,
            data = _ref.data,
            header = _ref.header,
            _ref$method = _ref.method,
            method = _ref$method === undefined ? 'GET' : _ref$method,
            _ref$dataType = _ref.dataType,
            dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
            responseType = _ref.responseType,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        // requestTaskId++
        var aborted = false;

        var hasContentType = false;
        var headers = {};
        if (header) {
            for (var name in header) {
                if (!hasContentType && name.toLowerCase() === 'content-type') {
                    hasContentType = true;
                    headers['Content-Type'] = header[name];
                } else {
                    headers[name] = header[name];
                }
            }
        }
        if (method === METHOD_GET && data) {
            url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
                serialize(data);
        }
        stream.fetch({
            url: url,
            method: method,
            headers: headers,
            type: dataType === 'json' ? 'json' : 'text',
            body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : ''
        }, function(_ref2) {
            var status = _ref2.status,
                ok = _ref2.ok,
                statusText = _ref2.statusText,
                data = _ref2.data,
                headers = _ref2.headers;

            var ret = {};
            if (!status || status === -1 || aborted) {
                ret.errMsg = 'request:fail';
                isFn(fail) && fail(ret);
            } else {
                ret.data = data;
                ret.statusCode = status;
                ret.header = headers;
                isFn(success) && success(ret);
            }
            isFn(complete) && complete(ret);
        });
        return {
            abort: function abort() {
                aborted = true;
            }
        };
    }

    var storage = weex.requireModule('plusstorage');
    var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

    function getStorage(_ref) {
        var key = _ref.key,
            data = _ref.data,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function(ret) {
            if (ret.result === 'success') {
                var dataType = ret.data;
                storage.getItem(key, function(res) {
                    if (res.result === 'success') {
                        var result = res.data;
                        if (dataType && result) {
                            if (dataType !== 'String') {
                                result = JSON.parse(result);
                            }
                            isFn(success) && success({
                                errMsg: 'getStorage:ok',
                                data: result
                            });
                        } else {
                            res.errMsg = 'setStorage:fail';
                            isFn(fail) && fail(res);
                        }
                    } else {
                        res.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(res);
                    }
                    isFn(complete) && complete(res);
                });
            } else {
                ret.errMsg = 'setStorage:fail';
                isFn(fail) && fail(ret);
                isFn(complete) && complete(ret);
            }
        });
    }

    function setStorage(_ref2) {
        var key = _ref2.key,
            data = _ref2.data,
            success = _ref2.success,
            fail = _ref2.fail,
            complete = _ref2.complete;

        var dataType = 'String';
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            dataType = 'Object';
            data = JSON.stringify(data);
        }
        storage.setItem(key, data, function(res) {
            if (res.result === 'success') {
                storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function(ret) {
                    if (ret.result === 'success') {
                        isFn(success) && success({
                            errMsg: 'setStorage:ok'
                        });
                    } else {
                        ret.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(ret);
                    }
                });
            } else {
                res.errMsg = 'setStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
    }

    function removeStorage(_ref3) {
        var key = _ref3.key,
            data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        storage.removeItem(key, function(res) {
            if (res.result === 'success') {
                isFn(success) && success({
                    errMsg: 'removeStorage:ok'
                });
            } else {
                res.errMsg = 'removeStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
        storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
    }

    function clearStorage(_ref4) {
        var key = _ref4.key,
            data = _ref4.data,
            success = _ref4.success,
            fail = _ref4.fail,
            complete = _ref4.complete;
    }

    var clipboard = weex.requireModule('clipboard');

    function getClipboardData(_ref) {
        var success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        clipboard.getString(function(_ref2) {
            var data = _ref2.data;

            var res = {
                errMsg: 'getClipboardData:ok',
                data: data
            };
            isFn(success) && success(res);
            isFn(complete) && complete(res);
        });
    }

    function setClipboardData(_ref3) {
        var data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        var res = {
            errMsg: 'setClipboardData:ok'
        };
        clipboard.setString(data);
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var getEmitter = function() {
        if (typeof getUniEmitter === 'function') {
            /* eslint-disable no-undef */
            return getUniEmitter;
        }
        var Emitter = {
            $on: function $on() {
                console.warn('uni.$on failed');
            },
            $off: function $off() {
                console.warn('uni.$off failed');
            },
            $once: function $once() {
                console.warn('uni.$once failed');
            },
            $emit: function $emit() {
                console.warn('uni.$emit failed');
            }
        };
        return function getUniEmitter() {
            return Emitter;
        };
    }();

    function apply(ctx, method, args) {
        return ctx[method].apply(ctx, args);
    }

    function $on() {
        return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $off() {
        return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $once() {
        return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $emit() {
        return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
    }



    var api = /*#__PURE__*/ Object.freeze({
        loadFontFace: loadFontFace,
        ready: ready,
        request: request,
        getStorage: getStorage,
        setStorage: setStorage,
        removeStorage: removeStorage,
        clearStorage: clearStorage,
        getClipboardData: getClipboardData,
        setClipboardData: setClipboardData,
        onSubNVueMessage: onSubNVueMessage,
        getSubNVueById: getSubNVueById,
        getCurrentSubNVue: getCurrentSubNVue,
        $on: $on,
        $off: $off,
        $once: $once,
        $emit: $emit
    });


    var wx = {
        uploadFile: true,
        downloadFile: true,
        chooseImage: true,
        previewImage: true,
        getImageInfo: true,
        saveImageToPhotosAlbum: true,
        chooseVideo: true,
        saveVideoToPhotosAlbum: true,
        saveFile: true,
        getSavedFileList: true,
        getSavedFileInfo: true,
        removeSavedFile: true,
        openDocument: true,
        setStorage: true,
        getStorage: true,
        getStorageInfo: true,
        removeStorage: true,
        clearStorage: true,
        getLocation: true,
        chooseLocation: true,
        openLocation: true,
        getSystemInfo: true,
        getNetworkType: true,
        makePhoneCall: true,
        scanCode: true,
        setScreenBrightness: true,
        getScreenBrightness: true,
        setKeepScreenOn: true,
        vibrateLong: true,
        vibrateShort: true,
        addPhoneContact: true,
        showToast: true,
        showLoading: true,
        hideToast: true,
        hideLoading: true,
        showModal: true,
        showActionSheet: true,
        setNavigationBarTitle: true,
        setNavigationBarColor: true,
        navigateTo: true,
        redirectTo: true,
        reLaunch: true,
        switchTab: true,
        navigateBack: true,
        getProvider: true,
        login: true,
        getUserInfo: true,
        share: true,
        requestPayment: true,
        subscribePush: true,
        unsubscribePush: true,
        onPush: true,
        offPush: true
    };

    var baseUni = {
        os: {
            nvue: true
        }
    };

    var uni = {};

    if (typeof Proxy !== 'undefined') {
        uni = new Proxy({}, {
            get: function get(target, name) {
                if (name === 'os') {
                    return {
                        nvue: true
                    };
                }
                if (name === 'postMessage') {
                    return postMessage;
                }
                if (name === 'requireNativePlugin') {
                    return requireNativePlugin;
                }
                if (name === 'onNavigationBarButtonTap') {
                    return onNavigationBarButtonTap;
                }
                if (name === 'onNavigationBarSearchInputChanged') {
                    return onNavigationBarSearchInputChanged;
                }
                if (name === 'onNavigationBarSearchInputConfirmed') {
                    return onNavigationBarSearchInputConfirmed;
                }
                if (name === 'onNavigationBarSearchInputClicked') {
                    return onNavigationBarSearchInputClicked;
                }
                var method = api[name];
                if (!method) {
                    method = createPublish(name);
                }
                if (shouldPromise(name)) {
                    return promisify(method);
                }
                return method;
            }
        });
    } else {
        Object.keys(baseUni).forEach(function(key) {
            uni[key] = baseUni[key];
        });

        uni.postMessage = postMessage;

        uni.requireNativePlugin = requireNativePlugin;

        uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

        uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

        uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

        uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

        Object.keys(wx).forEach(function(name) {
            var method = api[name];
            if (!method) {
                method = createPublish(name);
            }
            if (shouldPromise(name)) {
                uni[name] = promisify(method);
            } else {
                uni[name] = method;
            }
        });
    }
    return uni;
}

var createUni;

if (typeof getUni === 'function') {
    createUni = getUni;
} else {
    createUni = initUni;
}
var weexPlus = new WeexPlus(weex);
/* harmony default export */ __webpack_exports__["default"] = (createUni(weex, weexPlus, BroadcastChannel));



/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  const s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function formatLog (...args) {
  const msgs = args.map((v) => {
    const type = Object.prototype.toString.call(v)
    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        const vType = typof(v).toUpperCase()
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }
    return v
  })
  let msg = ''
  if (msgs.length > 1) {
    const lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }
  return msg
}


/***/ }),
/* 8 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 9);


/***/ }),
/* 9 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 10);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 10 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 11 */
/*!********************************************************************!*\
  !*** E:/公司/项目/KuGuaVUE/components/chunlei-video/chunlei-video.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunlei_video_vue_vue_type_template_id_5a5287c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunlei-video.vue?vue&type=template&id=5a5287c4& */ 12);
/* harmony import */ var _chunlei_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunlei-video.vue?vue&type=script&lang=js& */ 14);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunlei_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunlei_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./chunlei-video.vue?vue&type=style&index=0&lang=css& */ 16).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./chunlei-video.vue?vue&type=style&index=0&lang=css& */ 16).default)
          }

}

/* normalize component */

var component = Object(_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _chunlei_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chunlei_video_vue_vue_type_template_id_5a5287c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chunlei_video_vue_vue_type_template_id_5a5287c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "90f80d16"
  
)

component.options.__file = "项目/KuGuaVUE/components/chunlei-video/chunlei-video.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/*!***************************************************************************************************!*\
  !*** E:/公司/项目/KuGuaVUE/components/chunlei-video/chunlei-video.vue?vue&type=template&id=5a5287c4& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_template_id_5a5287c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./chunlei-video.vue?vue&type=template&id=5a5287c4& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_template_id_5a5287c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_template_id_5a5287c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 13 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!E:/公司/项目/KuGuaVUE/components/chunlei-video/chunlei-video.vue?vue&type=template&id=5a5287c4& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("u-video", {
    ref: "video",
    staticClass: ["video"],
    attrs: {
      src: _vm.src,
      controls: false,
      enableProgressGesture: false,
      id: "video",
      loop: true,
      showCenterPlayBtn: true
    },
    on: { click: _vm.clickVideo }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!*********************************************************************************************!*\
  !*** E:/公司/项目/KuGuaVUE/components/chunlei-video/chunlei-video.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--3-0!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./chunlei-video.vue?vue&type=script&lang=js& */ 15);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!E:/公司/项目/KuGuaVUE/components/chunlei-video/chunlei-video.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
var _default =
{
  props: {
    src: {
      type: String,
      default: '' },

    play: {
      type: Boolean,
      default: false } },


  data: function data() {
    return {};


  },
  methods: {
    clickVideo: function clickVideo() {
      this.$emit('click');
    },
    videoPlay: function videoPlay() {
      if (this.play) {
        this.videoCtx = uni.createVideoContext('video', this);
        this.videoCtx.play();
      } else {
        this.videoCtx = uni.createVideoContext('video', this);
        this.videoCtx.pause();
      }
    } },

  watch: {
    play: function play(newVal, oldVal) {
      this.videoPlay();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["default"]))

/***/ }),
/* 16 */
/*!*****************************************************************************************************!*\
  !*** E:/公司/项目/KuGuaVUE/components/chunlei-video/chunlei-video.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./chunlei-video.vue?vue&type=style&index=0&lang=css& */ 17);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chunlei_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??vue-loader-options!E:/公司/项目/KuGuaVUE/components/chunlei-video/chunlei-video.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video": {
    "width": 100,
    "height": 100
  }
}

/***/ }),
/* 18 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 19 */
/*!**********************************************************************************************************************!*\
  !*** E:/公司/项目/KuGuaVUE/pages/product/video.nvue?vue&type=style&index=0&id=527c5858&scoped=true&lang=css&mpType=page ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_style_index_0_id_527c5858_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--4-0!./video.nvue?vue&type=style&index=0&id=527c5858&scoped=true&lang=css&mpType=page */ 20);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_style_index_0_id_527c5858_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_style_index_0_id_527c5858_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_style_index_0_id_527c5858_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_style_index_0_id_527c5858_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_4_0_video_nvue_vue_type_style_index_0_id_527c5858_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??ref--4-0!E:/公司/项目/KuGuaVUE/pages/product/video.nvue?vue&type=style&index=0&id=527c5858&scoped=true&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "cover-view-top": {
    "position": "absolute",
    "top": "260rpx",
    "zIndex": 9999,
    "fontSize": "20",
    "color": "#FFFFFF",
    "left": "40rpx"
  },
  "cover-view-center": {
    "position": "absolute",
    "justifyContent": "center",
    "alignItems": "center",
    "opacity": 0.1,
    "zIndex": 999
  },
  "cover-view-left": {
    "position": "absolute",
    "marginLeft": "10rpx",
    "width": "550rpx",
    "bottom": "100rpx",
    "zIndex": 9999,
    "color": "#FFFFFF",
    "backgroundColor": "#ffffff",
    "paddingTop": "16rpx",
    "paddingRight": "16rpx",
    "paddingBottom": "16rpx",
    "paddingLeft": "16rpx",
    "borderRadius": "16rpx",
    "height": "190rpx"
  },
  "top-text": {
    "fontSize": "20",
    "color": "#FFFFFF"
  },
  "left-text": {
    "fontSize": "14",
    "color": "#000000",
    "width": "360rpx",
    "marginLeft": "174rpx"
  },
  "avater": {
    "borderRadius": "40rpx"
  },
  "goods-img": {
    "position": "absolute",
    "height": "160rpx",
    "width": "160rpx"
  },
  "cover-view-right": {
    "position": "absolute",
    "bottom": "80rpx",
    "marginRight": "20rpx",
    "right": 0,
    "zIndex": 9999
  },
  "img": {
    "height": "80rpx",
    "width": "80rpx",
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  }
}

/***/ }),
/* 21 */
/*!*****************************************************************!*\
  !*** E:/公司/项目/KuGuaVUE/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../apps/HBuilderX.2.0.1.20190614.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 22);
/* harmony import */ var _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_apps_HBuilderX_2_0_1_20190614_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 22 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/vue-loader/lib??vue-loader-options!E:/公司/项目/KuGuaVUE/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "round": {
    "borderRadius": "5000rpx"
  },
  "radius": {
    "borderRadius": "6rpx"
  },
  "response": {
    "width": 100
  },
  "switch-sex": {
    "content::after": "\"\\e71c\"",
    "content::before": "\"\\e71a\""
  },
  "solid": {
    "position": "relative",
    "content::after": "\" \"",
    "width::after": 200,
    "height::after": 200,
    "position::after": "absolute",
    "top::after": 0,
    "left::after": 0,
    "transform::after": "scale(0.5)",
    "transformOrigin::after": "0 0",
    "pointerEvents::after": "none",
    "boxSizing::after": "border-box",
    "border::after": "1rpx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-top": {
    "position": "relative",
    "content::after::after": "\" \"",
    "width::after::after": 200,
    "height::after::after": 200,
    "position::after::after": "absolute",
    "top::after::after": 0,
    "left::after::after": 0,
    "transform::after::after": "scale(0.5)",
    "transformOrigin::after::after": "0 0",
    "pointerEvents::after::after": "none",
    "boxSizing::after::after": "border-box",
    "borderTop::after": "1rpx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-right": {
    "position": "relative",
    "content::after::after::after": "\" \"",
    "width::after::after::after": 200,
    "height::after::after::after": 200,
    "position::after::after::after": "absolute",
    "top::after::after::after": 0,
    "left::after::after::after": 0,
    "transform::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after": "0 0",
    "pointerEvents::after::after::after": "none",
    "boxSizing::after::after::after": "border-box",
    "borderRight::after": "1rpx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-bottom": {
    "position": "relative",
    "content::after::after::after::after": "\" \"",
    "width::after::after::after::after": 200,
    "height::after::after::after::after": 200,
    "position::after::after::after::after": "absolute",
    "top::after::after::after::after": 0,
    "left::after::after::after::after": 0,
    "transform::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after": "none",
    "boxSizing::after::after::after::after": "border-box",
    "borderBottom::after": "1rpx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-left": {
    "position": "relative",
    "content::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after": 200,
    "height::after::after::after::after::after": 200,
    "position::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after": 0,
    "left::after::after::after::after::after": 0,
    "transform::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after": "border-box",
    "borderLeft::after": "1rpx solid rgba(0, 0, 0, 0.1)"
  },
  "solids": {
    "position": "relative",
    "content::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after": "border-box",
    "border::after": "8rpx solid #eee"
  },
  "solids-top": {
    "position": "relative",
    "content::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after": "border-box",
    "borderTop::after": "8rpx solid #eee"
  },
  "solids-right": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after": "border-box",
    "borderRight::after": "8rpx solid #eee"
  },
  "solids-bottom": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after": "border-box",
    "borderBottom::after": "8rpx solid #eee"
  },
  "solids-left": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderLeft::after": "8rpx solid #eee"
  },
  "dashed": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "border::after": "1rpx dashed #ddd"
  },
  "dashed-top": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderTop::after": "1rpx dashed #ddd"
  },
  "dashed-right": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderRight::after": "1rpx dashed #ddd"
  },
  "dashed-bottom": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderBottom::after": "1rpx dashed #ddd"
  },
  "dashed-left": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderLeft::after": "1rpx dashed #ddd"
  },
  "shadow-lg": {
    "--ShadowSize": "0rpx 40rpx 100rpx 0rpx"
  },
  "shadow-warp": {
    "position": "relative",
    "boxShadow": "0 0 10rpx rgba(0, 0, 0, 0.1)",
    "position:before": "absolute",
    "content:before": "\"\"",
    "top:before": "20rpx",
    "bottom:before": "30rpx",
    "left:before": "20rpx",
    "width:before": 50,
    "boxShadow:before": "0 30rpx 20rpx rgba(0, 0, 0, 0.2)",
    "transform:before": "rotate(-3deg)",
    "zIndex:before": -1,
    "position:before:after": "absolute",
    "content:before:after": "\"\"",
    "top:before:after": "20rpx",
    "bottom:before:after": "30rpx",
    "left:before:after": "20rpx",
    "width:before:after": 50,
    "boxShadow:before:after": "0 30rpx 20rpx rgba(0, 0, 0, 0.2)",
    "transform:before:after": "rotate(-3deg)",
    "zIndex:before:after": -1,
    "right:after": "20rpx",
    "transform:after": "rotate(3deg)"
  },
  "shadow-blur": {
    "position": "relative",
    "content::before": "\"\"",
    "display::before": "block",
    "background::before": "inherit",
    "filter::before": "blur(10rpx)",
    "position::before": "absolute",
    "width::before": 100,
    "height::before": 100,
    "top::before": "10rpx",
    "left::before": "10rpx",
    "zIndex::before": -1,
    "opacity::before": 0.4,
    "transformOrigin::before": "0 0",
    "transform::before": "scale(1, 1)"
  },
  "cu-btn": {
    "position": "relative",
    "border": "0rpx",
    "display": "inline-flex",
    "alignItems": "center",
    "justifyContent": "center",
    "boxSizing": "border-box",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx",
    "fontSize": "28rpx",
    "height": "64rpx",
    "lineHeight": 1,
    "textAlign": "center",
    "textDecoration": "none",
    "transform": "translate(0rpx, 0rpx)",
    "display::after": "none"
  },
  "block": {
    "display": "block"
  },
  "cu-tag": {
    "fontSize": "24rpx",
    "verticalAlign": "middle",
    "position": "relative",
    "display": "inline-flex",
    "alignItems": "center",
    "justifyContent": "center",
    "boxSizing": "border-box",
    "paddingTop": "0rpx",
    "paddingRight": "16rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "16rpx",
    "height": "48rpx",
    "fontFamily": "Helvetica Neue, Helvetica, sans-serif",
    "whiteSpace": "nowrap"
  },
  "cu-capsule": {
    "display": "inline-flex",
    "verticalAlign": "middle"
  },
  "cu-avatar": {
    "fontVariant": "small-caps",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "display": "inline-flex",
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#cccccc",
    "color": "#ffffff",
    "whiteSpace": "nowrap",
    "position": "relative",
    "width": "64rpx",
    "height": "64rpx",
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "verticalAlign": "middle",
    "fontSize": 1.5
  },
  "cu-avatar-group": {
    "direction": "rtl",
    "unicodeBidi": "bidi-override",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "40rpx",
    "display": "inline-block"
  },
  "cu-progress": {
    "overflow": "hidden",
    "height": "28rpx",
    "backgroundColor": "#ebeef5",
    "display": "inline-flex",
    "alignItems": "center",
    "width": 100
  },
  "cu-load": {
    "display": "block",
    "lineHeight": 3,
    "textAlign": "center",
    "fontFamily::before": "\"cuIcon\"",
    "display::before": "inline-block",
    "marginRight::before": "6rpx"
  },
  "load-progress": {
    "pointerEvents": "none",
    "top": 0,
    "position": "fixed",
    "width": 100,
    "left": 0,
    "zIndex": 2000
  },
  "grayscale": {
    "filter": "grayscale(1)"
  },
  "cu-bar": {
    "display": "flex",
    "position": "relative",
    "alignItems": "center",
    "minHeight": "100rpx",
    "justifyContent": "space-between"
  },
  "cu-tabbar-height": {
    "minHeight": "100rpx"
  },
  "cu-custom": {
    "display": "block",
    "position": "relative"
  },
  "nav": {
    "whiteSpace": "nowrap"
  },
  "cu-timeline": {
    "display": "block",
    "backgroundColor": "#ffffff"
  },
  "cu-chat": {
    "display": "flex",
    "flexDirection": "column"
  },
  "cu-card": {
    "display": "block",
    "overflow": "hidden"
  },
  "cu-form-group": {
    "backgroundColor": "#ffffff",
    "paddingTop": "1rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "1rpx",
    "paddingLeft": "30rpx",
    "display": "flex",
    "alignItems": "center",
    "minHeight": "100rpx",
    "justifyContent": "space-between"
  },
  "cu-modal": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1110,
    "opacity": 0,
    "outline": 0,
    "textAlign": "center",
    "MsTransform": "scale(1.185)",
    "transform": "scale(1.185)",
    "backfaceVisibility": "hidden",
    "perspective": "2000rpx",
    "background": "rgba(0, 0, 0, 0.6)",
    "transitionDuration": 300,
    "transitionTimingFunction": "ease-in-out",
    "transitionDelay": 0,
    "pointerEvents": "none",
    "content::before": "\"\\200B\"",
    "display::before": "inline-block",
    "height::before": 100,
    "verticalAlign::before": "middle"
  },
  "@TRANSITION": {
    "cu-modal": {
      "duration": 300,
      "timingFunction": "ease-in-out",
      "delay": 0
    }
  },
  "cu-dialog": {
    "position": "relative",
    "display": "inline-block",
    "verticalAlign": "middle",
    "width": "680rpx",
    "maxWidth": 100,
    "backgroundColor": "#f8f8f8",
    "borderRadius": "10rpx",
    "overflow": "hidden"
  },
  "screen-swiper": {
    "minHeight": "375rpx"
  },
  "card-swiper": {
    "height": "470rpx"
  },
  "tower-swiper": {
    "height": "420rpx",
    "position": "relative",
    "maxWidth": "750rpx",
    "overflow": "hidden"
  },
  "cu-steps": {
    "display": "flex"
  },
  "flex": {
    "display": "flex"
  },
  "basis-xs": {
    "flexBasis": 20
  },
  "basis-sm": {
    "flexBasis": 40
  },
  "basis-df": {
    "flexBasis": 50
  },
  "basis-lg": {
    "flexBasis": 60
  },
  "basis-xl": {
    "flexBasis": 80
  },
  "flex-sub": {
    "flex": 1
  },
  "flex-twice": {
    "flex": 2
  },
  "flex-treble": {
    "flex": 3
  },
  "flex-direction": {
    "flexDirection": "column"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "self-start": {
    "alignSelf": "flex-start"
  },
  "self-center": {
    "alignSelf": "flex-center"
  },
  "self-end": {
    "alignSelf": "flex-end"
  },
  "self-stretch": {
    "alignSelf": "stretch"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-around": {
    "justifyContent": "space-around"
  },
  "grid": {
    "display": "flex",
    "flexWrap": "wrap"
  },
  "margin-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "margin-xs": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx"
  },
  "margin-sm": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "margin": {
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "margin-lg": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "margin-xl": {
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx"
  },
  "margin-top-xs": {
    "marginTop": "10rpx"
  },
  "margin-top-sm": {
    "marginTop": "20rpx"
  },
  "margin-top": {
    "marginTop": "30rpx"
  },
  "margin-top-lg": {
    "marginTop": "40rpx"
  },
  "margin-top-xl": {
    "marginTop": "50rpx"
  },
  "margin-right-xs": {
    "marginRight": "10rpx"
  },
  "margin-right-sm": {
    "marginRight": "20rpx"
  },
  "margin-right": {
    "marginRight": "30rpx"
  },
  "margin-right-lg": {
    "marginRight": "40rpx"
  },
  "margin-right-xl": {
    "marginRight": "50rpx"
  },
  "margin-bottom-xs": {
    "marginBottom": "10rpx"
  },
  "margin-bottom-sm": {
    "marginBottom": "20rpx"
  },
  "margin-bottom": {
    "marginBottom": "30rpx"
  },
  "margin-bottom-lg": {
    "marginBottom": "40rpx"
  },
  "margin-bottom-xl": {
    "marginBottom": "50rpx"
  },
  "margin-left-xs": {
    "marginLeft": "10rpx"
  },
  "margin-left-sm": {
    "marginLeft": "20rpx"
  },
  "margin-left": {
    "marginLeft": "30rpx"
  },
  "margin-left-lg": {
    "marginLeft": "40rpx"
  },
  "margin-left-xl": {
    "marginLeft": "50rpx"
  },
  "margin-lr-xs": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "margin-lr-sm": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "margin-lr": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "margin-lr-lg": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "margin-lr-xl": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "margin-tb-xs": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "margin-tb-sm": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "margin-tb": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "margin-tb-lg": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "margin-tb-xl": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "padding-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "padding-xs": {
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "padding-sm": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "padding": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "padding-lg": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "padding-xl": {
    "paddingTop": "50rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "50rpx",
    "paddingLeft": "50rpx"
  },
  "padding-top-xs": {
    "paddingTop": "10rpx"
  },
  "padding-top-sm": {
    "paddingTop": "20rpx"
  },
  "padding-top": {
    "paddingTop": "30rpx"
  },
  "padding-top-lg": {
    "paddingTop": "40rpx"
  },
  "padding-top-xl": {
    "paddingTop": "50rpx"
  },
  "padding-right-xs": {
    "paddingRight": "10rpx"
  },
  "padding-right-sm": {
    "paddingRight": "20rpx"
  },
  "padding-right": {
    "paddingRight": "30rpx"
  },
  "padding-right-lg": {
    "paddingRight": "40rpx"
  },
  "padding-right-xl": {
    "paddingRight": "50rpx"
  },
  "padding-bottom-xs": {
    "paddingBottom": "10rpx"
  },
  "padding-bottom-sm": {
    "paddingBottom": "20rpx"
  },
  "padding-bottom": {
    "paddingBottom": "30rpx"
  },
  "padding-bottom-lg": {
    "paddingBottom": "40rpx"
  },
  "padding-bottom-xl": {
    "paddingBottom": "50rpx"
  },
  "padding-left-xs": {
    "paddingLeft": "10rpx"
  },
  "padding-left-sm": {
    "paddingLeft": "20rpx"
  },
  "padding-left": {
    "paddingLeft": "30rpx"
  },
  "padding-left-lg": {
    "paddingLeft": "40rpx"
  },
  "padding-left-xl": {
    "paddingLeft": "50rpx"
  },
  "padding-lr-xs": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "padding-lr-sm": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "padding-lr": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "padding-lr-lg": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "padding-lr-xl": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "padding-tb-xs": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "padding-tb-sm": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "padding-tb": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "padding-tb-lg": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "padding-tb-xl": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "cf": {
    "content::after": "\" \"",
    "display::after": "table",
    "content::after::before": "\" \"",
    "display::after::before": "table",
    "clear::after": "both"
  },
  "fl": {
    "float": "left"
  },
  "fr": {
    "float": "right"
  },
  "line-red": {
    "borderColor::after": "#e54d42",
    "color": "#e54d42"
  },
  "lines-red": {
    "borderColor::after::after": "#e54d42",
    "color": "#e54d42"
  },
  "line-orange": {
    "borderColor::after": "#f37b1d",
    "color": "#f37b1d"
  },
  "lines-orange": {
    "borderColor::after::after": "#f37b1d",
    "color": "#f37b1d"
  },
  "line-yellow": {
    "borderColor::after": "#fbbd08",
    "color": "#fbbd08"
  },
  "lines-yellow": {
    "borderColor::after::after": "#fbbd08",
    "color": "#fbbd08"
  },
  "line-olive": {
    "borderColor::after": "#8dc63f",
    "color": "#8dc63f"
  },
  "lines-olive": {
    "borderColor::after::after": "#8dc63f",
    "color": "#8dc63f"
  },
  "line-green": {
    "borderColor::after": "#39b54a",
    "color": "#39b54a"
  },
  "lines-green": {
    "borderColor::after::after": "#39b54a",
    "color": "#39b54a"
  },
  "line-cyan": {
    "borderColor::after": "#1cbbb4",
    "color": "#1cbbb4"
  },
  "lines-cyan": {
    "borderColor::after::after": "#1cbbb4",
    "color": "#1cbbb4"
  },
  "line-blue": {
    "borderColor::after": "#0081ff",
    "color": "#0081ff"
  },
  "lines-blue": {
    "borderColor::after::after": "#0081ff",
    "color": "#0081ff"
  },
  "line-purple": {
    "borderColor::after": "#6739b6",
    "color": "#6739b6"
  },
  "lines-purple": {
    "borderColor::after::after": "#6739b6",
    "color": "#6739b6"
  },
  "line-mauve": {
    "borderColor::after": "#9c26b0",
    "color": "#9c26b0"
  },
  "lines-mauve": {
    "borderColor::after::after": "#9c26b0",
    "color": "#9c26b0"
  },
  "line-pink": {
    "borderColor::after": "#e03997",
    "color": "#e03997"
  },
  "lines-pink": {
    "borderColor::after::after": "#e03997",
    "color": "#e03997"
  },
  "line-brown": {
    "borderColor::after": "#a5673f",
    "color": "#a5673f"
  },
  "lines-brown": {
    "borderColor::after::after": "#a5673f",
    "color": "#a5673f"
  },
  "line-grey": {
    "borderColor::after": "#8799a3",
    "color": "#8799a3"
  },
  "lines-grey": {
    "borderColor::after::after": "#8799a3",
    "color": "#8799a3"
  },
  "line-gray": {
    "borderColor::after": "#aaaaaa",
    "color": "#aaaaaa"
  },
  "lines-gray": {
    "borderColor::after::after": "#aaaaaa",
    "color": "#aaaaaa"
  },
  "line-black": {
    "borderColor::after": "#333333",
    "color": "#333333"
  },
  "lines-black": {
    "borderColor::after::after": "#333333",
    "color": "#333333"
  },
  "line-white": {
    "borderColor::after": "#ffffff",
    "color": "#ffffff"
  },
  "lines-white": {
    "borderColor::after::after": "#ffffff",
    "color": "#ffffff"
  },
  "bg-red": {
    "backgroundColor": "#e54d42",
    "color": "#ffffff"
  },
  "bg-orange": {
    "backgroundColor": "#f37b1d",
    "color": "#ffffff"
  },
  "bg-yellow": {
    "backgroundColor": "#fbbd08",
    "color": "#333333"
  },
  "bg-olive": {
    "backgroundColor": "#8dc63f",
    "color": "#ffffff"
  },
  "bg-green": {
    "backgroundColor": "#39b54a",
    "color": "#ffffff"
  },
  "bg-cyan": {
    "backgroundColor": "#1cbbb4",
    "color": "#ffffff"
  },
  "bg-blue": {
    "backgroundColor": "#0081ff",
    "color": "#ffffff"
  },
  "bg-purple": {
    "backgroundColor": "#6739b6",
    "color": "#ffffff"
  },
  "bg-mauve": {
    "backgroundColor": "#9c26b0",
    "color": "#ffffff"
  },
  "bg-pink": {
    "backgroundColor": "#e03997",
    "color": "#ffffff"
  },
  "bg-brown": {
    "backgroundColor": "#a5673f",
    "color": "#ffffff"
  },
  "bg-grey": {
    "backgroundColor": "#8799a3",
    "color": "#ffffff"
  },
  "bg-gray": {
    "backgroundColor": "#f0f0f0",
    "color": "#333333"
  },
  "bg-black": {
    "backgroundColor": "#333333",
    "color": "#ffffff"
  },
  "bg-white": {
    "backgroundColor": "#ffffff",
    "color": "#666666"
  },
  "bg-shadeTop": {
    "backgroundImage": "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01))",
    "color": "#ffffff"
  },
  "bg-shadeBottom": {
    "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 1))",
    "color": "#ffffff"
  },
  "bg-gradual-red": {
    "backgroundImage": "linear-gradient(45deg, #f43f3b, #ec008c)",
    "color": "#ffffff"
  },
  "bg-gradual-orange": {
    "backgroundImage": "linear-gradient(45deg, #ff9700, #ed1c24)",
    "color": "#ffffff"
  },
  "bg-gradual-green": {
    "backgroundImage": "linear-gradient(45deg, #39b54a, #8dc63f)",
    "color": "#ffffff"
  },
  "bg-gradual-purple": {
    "backgroundImage": "linear-gradient(45deg, #9000ff, #5e00ff)",
    "color": "#ffffff"
  },
  "bg-gradual-pink": {
    "backgroundImage": "linear-gradient(45deg, #ec008c, #6739b6)",
    "color": "#ffffff"
  },
  "bg-gradual-blue": {
    "backgroundImage": "linear-gradient(45deg, #0081ff, #1cbbb4)",
    "color": "#ffffff"
  },
  "bg-img": {
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "backgroundRepeat": "no-repeat"
  },
  "bg-mask": {
    "backgroundColor": "#333333",
    "position": "relative",
    "content::after": "\"\"",
    "width::after": 100,
    "height::after": 100,
    "display::after": "block",
    "backgroundColor::after": "rgba(0,0,0,0.4)",
    "position::after": "absolute",
    "left::after": 0,
    "right::after": 0,
    "bottom::after": 0,
    "top::after": 0
  },
  "bg-video": {
    "position": "relative"
  },
  "text-xs": {
    "fontSize": "20rpx"
  },
  "text-sm": {
    "fontSize": "24rpx"
  },
  "text-df": {
    "fontSize": "28rpx"
  },
  "text-lg": {
    "fontSize": "32rpx"
  },
  "text-xl": {
    "fontSize": "36rpx"
  },
  "text-xxl": {
    "fontSize": "44rpx"
  },
  "text-sl": {
    "fontSize": "80rpx"
  },
  "text-xsl": {
    "fontSize": "120rpx"
  },
  "text-Abc": {
    "textTransform": "Capitalize"
  },
  "text-ABC": {
    "textTransform": "Uppercase"
  },
  "text-abc": {
    "textTransform": "Lowercase"
  },
  "text-price": {
    "content::before": "\"¥\"",
    "fontSize::before": 80,
    "marginRight::before": "4rpx"
  },
  "text-cut": {
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "overflow": "hidden"
  },
  "text-bold": {
    "fontWeight": "bold"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-content": {
    "lineHeight": 1.6
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-red": {
    "color": "#e54d42"
  },
  "text-orange": {
    "color": "#f37b1d"
  },
  "text-yellow": {
    "color": "#fbbd08"
  },
  "text-olive": {
    "color": "#8dc63f"
  },
  "text-green": {
    "color": "#39b54a"
  },
  "text-cyan": {
    "color": "#1cbbb4"
  },
  "text-blue": {
    "color": "#0081ff"
  },
  "text-purple": {
    "color": "#6739b6"
  },
  "text-mauve": {
    "color": "#9c26b0"
  },
  "text-pink": {
    "color": "#e03997"
  },
  "text-brown": {
    "color": "#a5673f"
  },
  "text-grey": {
    "color": "#8799a3"
  },
  "text-gray": {
    "color": "#aaaaaa"
  },
  "text-black": {
    "color": "#333333"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "cuIconfont-spin": {
    "WebkitAnimation": "cuIcon-spin 2s infinite linear",
    "animation": "cuIcon-spin 2s infinite linear",
    "display": "inline-block"
  },
  "cuIconfont-pulse": {
    "WebkitAnimation": "cuIcon-spin 1s infinite steps(8)",
    "animation": "cuIcon-spin 1s infinite steps(8)",
    "display": "inline-block"
  },
  "@FONT-FACE": [
    {
      "fontFamily": "cuIcon",
      "src": "url('//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831#iefix') format('embedded-opentype'),\r\n\t\t\r\n\t\turl('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),\r\n\t\turl('//at.alicdn.com/t/font_533566_yfq2d9wdij.ttf?t=1545239985831') format('truetype'),\r\n\t\t\r\n\t\turl('//at.alicdn.com/t/font_533566_yfq2d9wdij.svg?t=1545239985831#cuIconfont') format('svg')"
    },
    {
      "fontFamily": "BMXY",
      "src": "url(\"https://www.kuguayouhui.com/fonts/BMXY.ttf\")"
    },
    {
      "fontFamily": "iconfont",
      "src": "url(\"https://at.alicdn.com/t/font_1250144_xq75i9p8psi.ttf\")\r\n    format(\"truetype\")"
    }
  ],
  "cuIcon-appreciate": {
    "content:before": "\"\\e644\""
  },
  "cuIcon-check": {
    "content:before": "\"\\e645\""
  },
  "cuIcon-close": {
    "content:before": "\"\\e646\""
  },
  "cuIcon-edit": {
    "content:before": "\"\\e649\""
  },
  "cuIcon-emoji": {
    "content:before": "\"\\e64a\""
  },
  "cuIcon-favorfill": {
    "content:before": "\"\\e64b\""
  },
  "cuIcon-favor": {
    "content:before": "\"\\e64c\""
  },
  "cuIcon-loading": {
    "content:before": "\"\\e64f\""
  },
  "cuIcon-locationfill": {
    "content:before": "\"\\e650\""
  },
  "cuIcon-location": {
    "content:before": "\"\\e651\""
  },
  "cuIcon-phone": {
    "content:before": "\"\\e652\""
  },
  "cuIcon-roundcheckfill": {
    "content:before": "\"\\e656\""
  },
  "cuIcon-roundcheck": {
    "content:before": "\"\\e657\""
  },
  "cuIcon-roundclosefill": {
    "content:before": "\"\\e658\""
  },
  "cuIcon-roundclose": {
    "content:before": "\"\\e659\""
  },
  "cuIcon-roundrightfill": {
    "content:before": "\"\\e65a\""
  },
  "cuIcon-roundright": {
    "content:before": "\"\\e65b\""
  },
  "cuIcon-search": {
    "content:before": "\"\\e65c\""
  },
  "cuIcon-taxi": {
    "content:before": "\"\\e65d\""
  },
  "cuIcon-timefill": {
    "content:before": "\"\\e65e\""
  },
  "cuIcon-time": {
    "content:before": "\"\\e65f\""
  },
  "cuIcon-unfold": {
    "content:before": "\"\\e661\""
  },
  "cuIcon-warnfill": {
    "content:before": "\"\\e662\""
  },
  "cuIcon-warn": {
    "content:before": "\"\\e663\""
  },
  "cuIcon-camerafill": {
    "content:before": "\"\\e664\""
  },
  "cuIcon-camera": {
    "content:before": "\"\\e665\""
  },
  "cuIcon-commentfill": {
    "content:before": "\"\\e666\""
  },
  "cuIcon-comment": {
    "content:before": "\"\\e667\""
  },
  "cuIcon-likefill": {
    "content:before": "\"\\e668\""
  },
  "cuIcon-like": {
    "content:before": "\"\\e669\""
  },
  "cuIcon-notificationfill": {
    "content:before": "\"\\e66a\""
  },
  "cuIcon-notification": {
    "content:before": "\"\\e66b\""
  },
  "cuIcon-order": {
    "content:before": "\"\\e66c\""
  },
  "cuIcon-samefill": {
    "content:before": "\"\\e66d\""
  },
  "cuIcon-same": {
    "content:before": "\"\\e66e\""
  },
  "cuIcon-deliver": {
    "content:before": "\"\\e671\""
  },
  "cuIcon-evaluate": {
    "content:before": "\"\\e672\""
  },
  "cuIcon-pay": {
    "content:before": "\"\\e673\""
  },
  "cuIcon-send": {
    "content:before": "\"\\e675\""
  },
  "cuIcon-shop": {
    "content:before": "\"\\e676\""
  },
  "cuIcon-ticket": {
    "content:before": "\"\\e677\""
  },
  "cuIcon-back": {
    "content:before": "\"\\e679\""
  },
  "cuIcon-cascades": {
    "content:before": "\"\\e67c\""
  },
  "cuIcon-discover": {
    "content:before": "\"\\e67e\""
  },
  "cuIcon-list": {
    "content:before": "\"\\e682\""
  },
  "cuIcon-more": {
    "content:before": "\"\\e684\""
  },
  "cuIcon-scan": {
    "content:before": "\"\\e689\""
  },
  "cuIcon-settings": {
    "content:before": "\"\\e68a\""
  },
  "cuIcon-questionfill": {
    "content:before": "\"\\e690\""
  },
  "cuIcon-question": {
    "content:before": "\"\\e691\""
  },
  "cuIcon-shopfill": {
    "content:before": "\"\\e697\""
  },
  "cuIcon-form": {
    "content:before": "\"\\e699\""
  },
  "cuIcon-pic": {
    "content:before": "\"\\e69b\""
  },
  "cuIcon-filter": {
    "content:before": "\"\\e69c\""
  },
  "cuIcon-footprint": {
    "content:before": "\"\\e69d\""
  },
  "cuIcon-top": {
    "content:before": "\"\\e69e\""
  },
  "cuIcon-pulldown": {
    "content:before": "\"\\e69f\""
  },
  "cuIcon-pullup": {
    "content:before": "\"\\e6a0\""
  },
  "cuIcon-right": {
    "content:before": "\"\\e6a3\""
  },
  "cuIcon-refresh": {
    "content:before": "\"\\e6a4\""
  },
  "cuIcon-moreandroid": {
    "content:before": "\"\\e6a5\""
  },
  "cuIcon-deletefill": {
    "content:before": "\"\\e6a6\""
  },
  "cuIcon-refund": {
    "content:before": "\"\\e6ac\""
  },
  "cuIcon-cart": {
    "content:before": "\"\\e6af\""
  },
  "cuIcon-qrcode": {
    "content:before": "\"\\e6b0\""
  },
  "cuIcon-remind": {
    "content:before": "\"\\e6b2\""
  },
  "cuIcon-delete": {
    "content:before": "\"\\e6b4\""
  },
  "cuIcon-profile": {
    "content:before": "\"\\e6b7\""
  },
  "cuIcon-home": {
    "content:before": "\"\\e6b8\""
  },
  "cuIcon-cartfill": {
    "content:before": "\"\\e6b9\""
  },
  "cuIcon-discoverfill": {
    "content:before": "\"\\e6ba\""
  },
  "cuIcon-homefill": {
    "content:before": "\"\\e6bb\""
  },
  "cuIcon-message": {
    "content:before": "\"\\e6bc\""
  },
  "cuIcon-addressbook": {
    "content:before": "\"\\e6bd\""
  },
  "cuIcon-link": {
    "content:before": "\"\\e6bf\""
  },
  "cuIcon-lock": {
    "content:before": "\"\\e6c0\""
  },
  "cuIcon-unlock": {
    "content:before": "\"\\e6c2\""
  },
  "cuIcon-vip": {
    "content:before": "\"\\e6c3\""
  },
  "cuIcon-weibo": {
    "content:before": "\"\\e6c4\""
  },
  "cuIcon-activity": {
    "content:before": "\"\\e6c5\""
  },
  "cuIcon-friendaddfill": {
    "content:before": "\"\\e6c9\""
  },
  "cuIcon-friendadd": {
    "content:before": "\"\\e6ca\""
  },
  "cuIcon-friendfamous": {
    "content:before": "\"\\e6cb\""
  },
  "cuIcon-friend": {
    "content:before": "\"\\e6cc\""
  },
  "cuIcon-goods": {
    "content:before": "\"\\e6cd\""
  },
  "cuIcon-selection": {
    "content:before": "\"\\e6ce\""
  },
  "cuIcon-explore": {
    "content:before": "\"\\e6d2\""
  },
  "cuIcon-present": {
    "content:before": "\"\\e6d3\""
  },
  "cuIcon-squarecheckfill": {
    "content:before": "\"\\e6d4\""
  },
  "cuIcon-square": {
    "content:before": "\"\\e6d5\""
  },
  "cuIcon-squarecheck": {
    "content:before": "\"\\e6d6\""
  },
  "cuIcon-round": {
    "content:before": "\"\\e6d7\""
  },
  "cuIcon-roundaddfill": {
    "content:before": "\"\\e6d8\""
  },
  "cuIcon-roundadd": {
    "content:before": "\"\\e6d9\""
  },
  "cuIcon-add": {
    "content:before": "\"\\e6da\""
  },
  "cuIcon-notificationforbidfill": {
    "content:before": "\"\\e6db\""
  },
  "cuIcon-explorefill": {
    "content:before": "\"\\e6dd\""
  },
  "cuIcon-fold": {
    "content:before": "\"\\e6de\""
  },
  "cuIcon-game": {
    "content:before": "\"\\e6df\""
  },
  "cuIcon-redpacket": {
    "content:before": "\"\\e6e0\""
  },
  "cuIcon-selectionfill": {
    "content:before": "\"\\e6e1\""
  },
  "cuIcon-similar": {
    "content:before": "\"\\e6e2\""
  },
  "cuIcon-appreciatefill": {
    "content:before": "\"\\e6e3\""
  },
  "cuIcon-infofill": {
    "content:before": "\"\\e6e4\""
  },
  "cuIcon-info": {
    "content:before": "\"\\e6e5\""
  },
  "cuIcon-forwardfill": {
    "content:before": "\"\\e6ea\""
  },
  "cuIcon-forward": {
    "content:before": "\"\\e6eb\""
  },
  "cuIcon-rechargefill": {
    "content:before": "\"\\e6ec\""
  },
  "cuIcon-recharge": {
    "content:before": "\"\\e6ed\""
  },
  "cuIcon-vipcard": {
    "content:before": "\"\\e6ee\""
  },
  "cuIcon-voice": {
    "content:before": "\"\\e6ef\""
  },
  "cuIcon-voicefill": {
    "content:before": "\"\\e6f0\""
  },
  "cuIcon-friendfavor": {
    "content:before": "\"\\e6f1\""
  },
  "cuIcon-wifi": {
    "content:before": "\"\\e6f2\""
  },
  "cuIcon-share": {
    "content:before": "\"\\e6f3\""
  },
  "cuIcon-wefill": {
    "content:before": "\"\\e6f4\""
  },
  "cuIcon-we": {
    "content:before": "\"\\e6f5\""
  },
  "cuIcon-lightauto": {
    "content:before": "\"\\e6f6\""
  },
  "cuIcon-lightforbid": {
    "content:before": "\"\\e6f7\""
  },
  "cuIcon-lightfill": {
    "content:before": "\"\\e6f8\""
  },
  "cuIcon-camerarotate": {
    "content:before": "\"\\e6f9\""
  },
  "cuIcon-light": {
    "content:before": "\"\\e6fa\""
  },
  "cuIcon-barcode": {
    "content:before": "\"\\e6fb\""
  },
  "cuIcon-flashlightclose": {
    "content:before": "\"\\e6fc\""
  },
  "cuIcon-flashlightopen": {
    "content:before": "\"\\e6fd\""
  },
  "cuIcon-searchlist": {
    "content:before": "\"\\e6fe\""
  },
  "cuIcon-service": {
    "content:before": "\"\\e6ff\""
  },
  "cuIcon-sort": {
    "content:before": "\"\\e700\""
  },
  "cuIcon-down": {
    "content:before": "\"\\e703\""
  },
  "cuIcon-mobile": {
    "content:before": "\"\\e704\""
  },
  "cuIcon-mobilefill": {
    "content:before": "\"\\e705\""
  },
  "cuIcon-copy": {
    "content:before": "\"\\e706\""
  },
  "cuIcon-countdownfill": {
    "content:before": "\"\\e707\""
  },
  "cuIcon-countdown": {
    "content:before": "\"\\e708\""
  },
  "cuIcon-noticefill": {
    "content:before": "\"\\e709\""
  },
  "cuIcon-notice": {
    "content:before": "\"\\e70a\""
  },
  "cuIcon-upstagefill": {
    "content:before": "\"\\e70e\""
  },
  "cuIcon-upstage": {
    "content:before": "\"\\e70f\""
  },
  "cuIcon-babyfill": {
    "content:before": "\"\\e710\""
  },
  "cuIcon-baby": {
    "content:before": "\"\\e711\""
  },
  "cuIcon-brandfill": {
    "content:before": "\"\\e712\""
  },
  "cuIcon-brand": {
    "content:before": "\"\\e713\""
  },
  "cuIcon-choicenessfill": {
    "content:before": "\"\\e714\""
  },
  "cuIcon-choiceness": {
    "content:before": "\"\\e715\""
  },
  "cuIcon-clothesfill": {
    "content:before": "\"\\e716\""
  },
  "cuIcon-clothes": {
    "content:before": "\"\\e717\""
  },
  "cuIcon-creativefill": {
    "content:before": "\"\\e718\""
  },
  "cuIcon-creative": {
    "content:before": "\"\\e719\""
  },
  "cuIcon-female": {
    "content:before": "\"\\e71a\""
  },
  "cuIcon-keyboard": {
    "content:before": "\"\\e71b\""
  },
  "cuIcon-male": {
    "content:before": "\"\\e71c\""
  },
  "cuIcon-newfill": {
    "content:before": "\"\\e71d\""
  },
  "cuIcon-new": {
    "content:before": "\"\\e71e\""
  },
  "cuIcon-pullleft": {
    "content:before": "\"\\e71f\""
  },
  "cuIcon-pullright": {
    "content:before": "\"\\e720\""
  },
  "cuIcon-rankfill": {
    "content:before": "\"\\e721\""
  },
  "cuIcon-rank": {
    "content:before": "\"\\e722\""
  },
  "cuIcon-bad": {
    "content:before": "\"\\e723\""
  },
  "cuIcon-cameraadd": {
    "content:before": "\"\\e724\""
  },
  "cuIcon-focus": {
    "content:before": "\"\\e725\""
  },
  "cuIcon-friendfill": {
    "content:before": "\"\\e726\""
  },
  "cuIcon-cameraaddfill": {
    "content:before": "\"\\e727\""
  },
  "cuIcon-apps": {
    "content:before": "\"\\e729\""
  },
  "cuIcon-paintfill": {
    "content:before": "\"\\e72a\""
  },
  "cuIcon-paint": {
    "content:before": "\"\\e72b\""
  },
  "cuIcon-picfill": {
    "content:before": "\"\\e72c\""
  },
  "cuIcon-refresharrow": {
    "content:before": "\"\\e72d\""
  },
  "cuIcon-colorlens": {
    "content:before": "\"\\e6e6\""
  },
  "cuIcon-markfill": {
    "content:before": "\"\\e730\""
  },
  "cuIcon-mark": {
    "content:before": "\"\\e731\""
  },
  "cuIcon-presentfill": {
    "content:before": "\"\\e732\""
  },
  "cuIcon-repeal": {
    "content:before": "\"\\e733\""
  },
  "cuIcon-album": {
    "content:before": "\"\\e734\""
  },
  "cuIcon-peoplefill": {
    "content:before": "\"\\e735\""
  },
  "cuIcon-people": {
    "content:before": "\"\\e736\""
  },
  "cuIcon-servicefill": {
    "content:before": "\"\\e737\""
  },
  "cuIcon-repair": {
    "content:before": "\"\\e738\""
  },
  "cuIcon-file": {
    "content:before": "\"\\e739\""
  },
  "cuIcon-repairfill": {
    "content:before": "\"\\e73a\""
  },
  "cuIcon-taoxiaopu": {
    "content:before": "\"\\e73b\""
  },
  "cuIcon-weixin": {
    "content:before": "\"\\e612\""
  },
  "cuIcon-attentionfill": {
    "content:before": "\"\\e73c\""
  },
  "cuIcon-attention": {
    "content:before": "\"\\e73d\""
  },
  "cuIcon-commandfill": {
    "content:before": "\"\\e73e\""
  },
  "cuIcon-command": {
    "content:before": "\"\\e73f\""
  },
  "cuIcon-communityfill": {
    "content:before": "\"\\e740\""
  },
  "cuIcon-community": {
    "content:before": "\"\\e741\""
  },
  "cuIcon-read": {
    "content:before": "\"\\e742\""
  },
  "cuIcon-calendar": {
    "content:before": "\"\\e74a\""
  },
  "cuIcon-cut": {
    "content:before": "\"\\e74b\""
  },
  "cuIcon-magic": {
    "content:before": "\"\\e74c\""
  },
  "cuIcon-backwardfill": {
    "content:before": "\"\\e74d\""
  },
  "cuIcon-playfill": {
    "content:before": "\"\\e74f\""
  },
  "cuIcon-stop": {
    "content:before": "\"\\e750\""
  },
  "cuIcon-tagfill": {
    "content:before": "\"\\e751\""
  },
  "cuIcon-tag": {
    "content:before": "\"\\e752\""
  },
  "cuIcon-group": {
    "content:before": "\"\\e753\""
  },
  "cuIcon-all": {
    "content:before": "\"\\e755\""
  },
  "cuIcon-backdelete": {
    "content:before": "\"\\e756\""
  },
  "cuIcon-hotfill": {
    "content:before": "\"\\e757\""
  },
  "cuIcon-hot": {
    "content:before": "\"\\e758\""
  },
  "cuIcon-post": {
    "content:before": "\"\\e759\""
  },
  "cuIcon-radiobox": {
    "content:before": "\"\\e75b\""
  },
  "cuIcon-rounddown": {
    "content:before": "\"\\e75c\""
  },
  "cuIcon-upload": {
    "content:before": "\"\\e75d\""
  },
  "cuIcon-writefill": {
    "content:before": "\"\\e760\""
  },
  "cuIcon-write": {
    "content:before": "\"\\e761\""
  },
  "cuIcon-radioboxfill": {
    "content:before": "\"\\e763\""
  },
  "cuIcon-punch": {
    "content:before": "\"\\e764\""
  },
  "cuIcon-shake": {
    "content:before": "\"\\e765\""
  },
  "cuIcon-move": {
    "content:before": "\"\\e768\""
  },
  "cuIcon-safe": {
    "content:before": "\"\\e769\""
  },
  "cuIcon-activityfill": {
    "content:before": "\"\\e775\""
  },
  "cuIcon-crownfill": {
    "content:before": "\"\\e776\""
  },
  "cuIcon-crown": {
    "content:before": "\"\\e777\""
  },
  "cuIcon-goodsfill": {
    "content:before": "\"\\e778\""
  },
  "cuIcon-messagefill": {
    "content:before": "\"\\e779\""
  },
  "cuIcon-profilefill": {
    "content:before": "\"\\e77a\""
  },
  "cuIcon-sound": {
    "content:before": "\"\\e77b\""
  },
  "cuIcon-sponsorfill": {
    "content:before": "\"\\e77c\""
  },
  "cuIcon-sponsor": {
    "content:before": "\"\\e77d\""
  },
  "cuIcon-upblock": {
    "content:before": "\"\\e77e\""
  },
  "cuIcon-weblock": {
    "content:before": "\"\\e77f\""
  },
  "cuIcon-weunblock": {
    "content:before": "\"\\e780\""
  },
  "cuIcon-my": {
    "content:before": "\"\\e78b\""
  },
  "cuIcon-myfill": {
    "content:before": "\"\\e78c\""
  },
  "cuIcon-emojifill": {
    "content:before": "\"\\e78d\""
  },
  "cuIcon-emojiflashfill": {
    "content:before": "\"\\e78e\""
  },
  "cuIcon-flashbuyfill": {
    "content:before": "\"\\e78f\""
  },
  "cuIcon-text": {
    "content:before": "\"\\e791\""
  },
  "cuIcon-goodsfavor": {
    "content:before": "\"\\e794\""
  },
  "cuIcon-musicfill": {
    "content:before": "\"\\e795\""
  },
  "cuIcon-musicforbidfill": {
    "content:before": "\"\\e796\""
  },
  "cuIcon-card": {
    "content:before": "\"\\e624\""
  },
  "cuIcon-triangledownfill": {
    "content:before": "\"\\e79b\""
  },
  "cuIcon-triangleupfill": {
    "content:before": "\"\\e79c\""
  },
  "cuIcon-roundleftfill-copy": {
    "content:before": "\"\\e79e\""
  },
  "cuIcon-font": {
    "content:before": "\"\\e76a\""
  },
  "cuIcon-title": {
    "content:before": "\"\\e82f\""
  },
  "cuIcon-recordfill": {
    "content:before": "\"\\e7a4\""
  },
  "cuIcon-record": {
    "content:before": "\"\\e7a6\""
  },
  "cuIcon-cardboardfill": {
    "content:before": "\"\\e7a9\""
  },
  "cuIcon-cardboard": {
    "content:before": "\"\\e7aa\""
  },
  "cuIcon-formfill": {
    "content:before": "\"\\e7ab\""
  },
  "cuIcon-coin": {
    "content:before": "\"\\e7ac\""
  },
  "cuIcon-cardboardforbid": {
    "content:before": "\"\\e7af\""
  },
  "cuIcon-circlefill": {
    "content:before": "\"\\e7b0\""
  },
  "cuIcon-circle": {
    "content:before": "\"\\e7b1\""
  },
  "cuIcon-attentionforbid": {
    "content:before": "\"\\e7b2\""
  },
  "cuIcon-attentionforbidfill": {
    "content:before": "\"\\e7b3\""
  },
  "cuIcon-attentionfavorfill": {
    "content:before": "\"\\e7b4\""
  },
  "cuIcon-attentionfavor": {
    "content:before": "\"\\e7b5\""
  },
  "cuIcon-titles": {
    "content:before": "\"\\e701\""
  },
  "cuIcon-icloading": {
    "content:before": "\"\\e67a\""
  },
  "cuIcon-full": {
    "content:before": "\"\\e7bc\""
  },
  "cuIcon-mail": {
    "content:before": "\"\\e7bd\""
  },
  "cuIcon-peoplelist": {
    "content:before": "\"\\e7be\""
  },
  "cuIcon-goodsnewfill": {
    "content:before": "\"\\e7bf\""
  },
  "cuIcon-goodsnew": {
    "content:before": "\"\\e7c0\""
  },
  "cuIcon-medalfill": {
    "content:before": "\"\\e7c1\""
  },
  "cuIcon-medal": {
    "content:before": "\"\\e7c2\""
  },
  "cuIcon-newsfill": {
    "content:before": "\"\\e7c3\""
  },
  "cuIcon-newshotfill": {
    "content:before": "\"\\e7c4\""
  },
  "cuIcon-newshot": {
    "content:before": "\"\\e7c5\""
  },
  "cuIcon-news": {
    "content:before": "\"\\e7c6\""
  },
  "cuIcon-videofill": {
    "content:before": "\"\\e7c7\""
  },
  "cuIcon-video": {
    "content:before": "\"\\e7c8\""
  },
  "cuIcon-exit": {
    "content:before": "\"\\e7cb\""
  },
  "cuIcon-skinfill": {
    "content:before": "\"\\e7cc\""
  },
  "cuIcon-skin": {
    "content:before": "\"\\e7cd\""
  },
  "cuIcon-moneybagfill": {
    "content:before": "\"\\e7ce\""
  },
  "cuIcon-usefullfill": {
    "content:before": "\"\\e7cf\""
  },
  "cuIcon-usefull": {
    "content:before": "\"\\e7d0\""
  },
  "cuIcon-moneybag": {
    "content:before": "\"\\e7d1\""
  },
  "cuIcon-redpacket_fill": {
    "content:before": "\"\\e7d3\""
  },
  "cuIcon-subscription": {
    "content:before": "\"\\e7d4\""
  },
  "cuIcon-loading1": {
    "content:before": "\"\\e633\""
  },
  "cuIcon-github": {
    "content:before": "\"\\e692\""
  },
  "cuIcon-global": {
    "content:before": "\"\\e7eb\""
  },
  "cuIcon-settingsfill": {
    "content:before": "\"\\e6ab\""
  },
  "cuIcon-back_android": {
    "content:before": "\"\\e7ed\""
  },
  "cuIcon-expressman": {
    "content:before": "\"\\e7ef\""
  },
  "cuIcon-evaluate_fill": {
    "content:before": "\"\\e7f0\""
  },
  "cuIcon-group_fill": {
    "content:before": "\"\\e7f5\""
  },
  "cuIcon-play_forward_fill": {
    "content:before": "\"\\e7f6\""
  },
  "cuIcon-deliver_fill": {
    "content:before": "\"\\e7f7\""
  },
  "cuIcon-notice_forbid_fill": {
    "content:before": "\"\\e7f8\""
  },
  "cuIcon-fork": {
    "content:before": "\"\\e60c\""
  },
  "cuIcon-pick": {
    "content:before": "\"\\e7fa\""
  },
  "cuIcon-wenzi": {
    "content:before": "\"\\e6a7\""
  },
  "cuIcon-ellipse": {
    "content:before": "\"\\e600\""
  },
  "cuIcon-qr_code": {
    "content:before": "\"\\e61b\""
  },
  "cuIcon-dianhua": {
    "content:before": "\"\\e64d\""
  },
  "cuIcon-cuIcon": {
    "content:before": "\"\\e602\""
  },
  "cuIcon-loading2": {
    "content:before": "\"\\e7f1\""
  },
  "cuIcon-btn": {
    "content:before": "\"\\e601\""
  },
  "icon": {
    "fontFamily": "\"iconfont\"",
    "fontSize": "16",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9FOi/lhazlj7gv6aG555uuL0t1R3VhVlVFL21haW4uanM/YzBmZiIsIndlYnBhY2s6Ly8vRTov5YWs5Y+4L+mhueebri9LdUd1YVZVRS9wYWdlcy9wcm9kdWN0L3ZpZGVvLm52dWU/NzNiNiIsIndlYnBhY2s6Ly8vRTov5YWs5Y+4L+mhueebri9LdUd1YVZVRS9wYWdlcy9wcm9kdWN0L3ZpZGVvLm52dWU/MmU0YyIsIndlYnBhY2s6Ly8vRTov5YWs5Y+4L+mhueebri9LdUd1YVZVRS9wYWdlcy9wcm9kdWN0L3ZpZGVvLm52dWU/MWI2MyIsIndlYnBhY2s6Ly8vRTov5YWs5Y+4L+mhueebri9LdUd1YVZVRS9wYWdlcy9wcm9kdWN0L3ZpZGVvLm52dWU/MjE2NiIsInVuaS1hcHA6Ly8vcGFnZXMvcHJvZHVjdC92aWRlby5udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcz9hMzRhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzP2JiZGQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcz85NmNmIiwid2VicGFjazovLy9FOi/lhazlj7gv6aG555uuL0t1R3VhVlVFL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVubGVpLXZpZGVvLnZ1ZT83YjdkIiwid2VicGFjazovLy9FOi/lhazlj7gv6aG555uuL0t1R3VhVlVFL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVubGVpLXZpZGVvLnZ1ZT9kMGNjIiwid2VicGFjazovLy9FOi/lhazlj7gv6aG555uuL0t1R3VhVlVFL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVubGVpLXZpZGVvLnZ1ZT82ZTM4Iiwid2VicGFjazovLy9FOi/lhazlj7gv6aG555uuL0t1R3VhVlVFL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVubGVpLXZpZGVvLnZ1ZT82ZjQ2IiwidW5pLWFwcDovLy9jb21wb25lbnRzL2NodW5sZWktdmlkZW8vY2h1bmxlaS12aWRlby52dWUiLCJ3ZWJwYWNrOi8vL0U6L+WFrOWPuC/pobnnm64vS3VHdWFWVUUvY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5sZWktdmlkZW8udnVlPzY4MGUiLCJ3ZWJwYWNrOi8vL0U6L+WFrOWPuC/pobnnm64vS3VHdWFWVUUvY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5sZWktdmlkZW8udnVlPzk2ZWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz8yODc3Iiwid2VicGFjazovLy9FOi/lhazlj7gv6aG555uuL0t1R3VhVlVFL3BhZ2VzL3Byb2R1Y3QvdmlkZW8ubnZ1ZT80NzU2Iiwid2VicGFjazovLy9FOi/lhazlj7gv6aG555uuL0t1R3VhVlVFL3BhZ2VzL3Byb2R1Y3QvdmlkZW8ubnZ1ZT9kYWI4Iiwid2VicGFjazovLy9FOi/lhazlj7gv6aG555uuL0t1R3VhVlVFL0FwcC52dWU/ZWViNiIsIndlYnBhY2s6Ly8vRTov5YWs5Y+4L+mhueebri9LdUd1YVZVRS9BcHAudnVlPzgzMDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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MkUsYUFBYTtBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhFQUE4RSxlQUFlO0FBQzdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFLGVBQWU7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FB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Q0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFBQTtBQUE4ekIsQ0FBZ0IsczJCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0FsMUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHNLQUFzSyxjQUFjO0FBQ3BMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoicGFnZXMvcHJvZHVjdC92aWRlby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxuaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL3Byb2R1Y3QvdmlkZW8ubnZ1ZT9tcFR5cGU9cGFnZSdcbkFwcC5tcFR5cGUgPSAncGFnZSdcbkFwcC5yb3V0ZSA9ICdwYWdlcy9wcm9kdWN0L3ZpZGVvJ1xuQXBwLmVsID0gJyNyb290J1xuQXBwLmFwcFN0eWxlID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxBcHAuYXBwU3R5bGUpXG5cbm5ldyBWdWUoQXBwKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyN2M1ODU4JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMuJG9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMuJG9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlICYmIHRoaXMuJHJvb3QgJiYgdGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSl7XG4gIHRoaXMuX19tZXJnZV9zdHlsZSh0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgdGhpcy5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MjdjNTg1OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJG9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUyN2M1ODU4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIFwiNTI3YzU4NThcIixcbiAgXCI2NDZiY2Q4NlwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIumhueebri9LdUd1YVZVRS9wYWdlcy9wcm9kdWN0L3ZpZGVvLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuL3ZpZGVvLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTI3YzU4NTgmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogW1wicGFnZVwiXSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInN3aXBlclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wic3dpcGVyXCJdLFxuICAgICAgICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IF92bS5oZWlnaHQgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdmVydGljYWw6IHRydWUsIGN1cnJlbnQ6IF92bS5pbmRleCB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5jaGFuZ2VDdXJyZW50IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnZpZGVvTGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwic3dpcGVyLWl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IGtleTogaXRlbS5pZCB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiY2h1bmxlaS12aWRlb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ2aWRlb1wiXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBfdm0uaGVpZ2h0LCB3aWR0aDogX3ZtLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5zcmMsIHBsYXk6IGl0ZW0uZmxhZyB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsaWNrVmlkZW8gfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjb3Zlci12aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImNvdmVyLXZpZXctdG9wXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0b3AtdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uY29udGVudCkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiY292ZXItdmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJjb3Zlci12aWV3LWNlbnRlclwiXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBfdm0uaGVpZ2h0LCB3aWR0aDogX3ZtLndpZHRoIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY292ZXItdmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImNvdmVyLXZpZXctbGVmdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvRGV0YWlsKGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJjb3Zlci1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiZ29vZHMtaW1nXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmltZyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wibGVmdC10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY292ZXItdmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJjb3Zlci12aWV3LXJpZ2h0XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImNvdmVyLWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpbWdcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGl0ZW0uY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiLi4vLi4vc3RhdGljL2FpeGluUmVkLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi4uLy4uL3N0YXRpYy9haXhpbi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRhcExvdmUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJjb3Zlci1pbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaW1nXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi4uLy4uL3N0YXRpYy9zaGFyZS1maWxsLnBuZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50YXBTaGFyZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTMtMCEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTEhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTMtMCEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTEhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxyXG5cdFx0PHN3aXBlclxyXG5cdFx0XHRjbGFzcz1cInN3aXBlclwiXHJcblx0XHRcdDp2ZXJ0aWNhbD1cInRydWVcIlxyXG5cdFx0XHRAY2hhbmdlPVwiY2hhbmdlQ3VycmVudFwiXHJcblx0XHRcdDpzdHlsZT1cInsgaGVpZ2h0OiBoZWlnaHQgfVwiXHJcblx0XHRcdDpjdXJyZW50PVwiaW5kZXhcIj5cclxuXHRcdFx0PHN3aXBlci1pdGVtIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB2aWRlb0xpc3RcIiA6a2V5PVwiaXRlbS5pZFwiPlxyXG5cdFx0XHRcdDxjaHVubGVpLXZpZGVvIGNsYXNzPVwidmlkZW9cIiA6c3JjPVwiaXRlbS5zcmNcIiA6c3R5bGU9XCJ7IGhlaWdodDogaGVpZ2h0LHdpZHRoOiB3aWR0aCB9XCIgOnBsYXk9XCJpdGVtLmZsYWdcIiBAY2xpY2s9XCJjbGlja1ZpZGVvXCI+XHJcblx0XHRcdFx0PC9jaHVubGVpLXZpZGVvPlxyXG4gICAgICAgICAgICAgICAgPGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci12aWV3LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgXHQ8IS0tICNpZmRlZiBBUFAtUExVUy1OVlVFLS0+XHJcbiAgICAgICAgICAgICAgICBcdDx0ZXh0IGNsYXNzPVwidG9wLXRleHRcIj57e2l0ZW0uY29udGVudH19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgXHQ8IS0tICNlbmRpZiAtLT5cclxuICAgICAgICAgICAgICAgIDwvY292ZXItdmlldz5cclxuXHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci12aWV3LWNlbnRlclwiIDpzdHlsZT1cInsgaGVpZ2h0OiBoZWlnaHQsd2lkdGg6IHdpZHRoIH1cIj5cclxuXHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1sZWZ0XCIgQGNsaWNrPVwidG9EZXRhaWwoaXRlbS5pZClcIj5cclxuXHRcdFx0XHRcdDwhLS0gI2lmZGVmIEFQUC1QTFVTLU5WVUUtLT5cclxuICAgICAgICAgICAgICAgICAgICA8Y292ZXItaW1hZ2UgOnNyYz1cIml0ZW0uaW1nXCIgY2xhc3M9XCJnb29kcy1pbWdcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsZWZ0LXRleHRcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1yaWdodFwiPlxyXG5cdFx0XHRcdFx0PGNvdmVyLWltYWdlIDpzcmM9XCJpdGVtLmNoZWNrPycuLi8uLi9zdGF0aWMvYWl4aW5SZWQucG5nJzonLi4vLi4vc3RhdGljL2FpeGluLnBuZydcIiBjbGFzcz1cImltZ1wiIEBjbGljay5zdG9wPVwidGFwTG92ZVwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0XHQ8Y292ZXItaW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3NoYXJlLWZpbGwucG5nXCIgY2xhc3M9XCJpbWdcIiBAY2xpY2suc3RvcD1cInRhcFNoYXJlXCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHQ8L3N3aXBlcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBjaHVubGVpVmlkZW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5sZWktdmlkZW8udnVlJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czp7XHJcblx0XHRcdGNodW5sZWlWaWRlb1xyXG5cdFx0fSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cdFx0XHRcdHN5c2hlaWdodDowLFxyXG5cdFx0XHRcdHZpZGVvTGlzdDpbXSxcclxuXHRcdFx0XHRoZWlnaHQ6JzY2N3B4JyxcclxuXHRcdFx0XHRpbmRleDowLFxyXG5cdFx0XHRcdHdpZHRoOicnLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIGxpbWl0OiA1LFxyXG4gICAgICAgICAgICAgICAgdGFnOiAn6KeG6aKRJ1xyXG5cdFx0XHR9XHJcbiAgICAgICAgfSxcclxuXHRcdGNyZWF0ZWQoKXtcclxuXHRcdFx0Ly8jaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKFwicG9ydHJhaXQtcHJpbWFyeVwiKVxyXG5cdFx0XHQvLyNlbmRpZlxyXG5cdFx0XHR0aGlzLnN5c2hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxyXG5cdFx0XHR0aGlzLmhlaWdodCA9IGAke3RoaXMuc3lzaGVpZ2h0fXB4YFxyXG5cdFx0XHRsZXQgd2lkdGggPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aFxyXG5cdFx0XHR0aGlzLndpZHRoID0gYCR7d2lkdGh9cHhgXHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuXHRcdFx0YXdhaXQgdGhpcy5wdXNoVmlkZW9MaXN0KClcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnZpZGVvUGxheShfdGhpcy5pbmRleClcclxuICAgICAgICAgICAgfSwgMjApO1xyXG5cdFx0fSxcclxuICAgICAgICB1cGRhdGVkKCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsTGVuZ3RoID0gdGhpcy5wYWdlKnRoaXMubGltaXRcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleCxhbGxMZW5ndGgpXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXgrMSA9PT0gYWxsTGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSsrXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hWaWRlb0xpc3QoKVxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHRcdFx0Y2hhbmdlQ3VycmVudChlKXtcclxuXHRcdFx0XHR0aGlzLmluZGV4ID0gZS5kZXRhaWwuY3VycmVudDtcclxuXHRcdFx0XHRmb3IgKGxldCBpdGVtIG9mIHRoaXMudmlkZW9MaXN0KSB7XHJcblx0XHRcdFx0XHRpdGVtLmZsYWcgPSBmYWxzZVxyXG5cdFx0XHRcdH0gXHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uZmxhZyA9ICF0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5mbGFnXHJcblx0XHRcdH0sXHJcblx0XHRcdHB1c2hWaWRlb0xpc3QoKXtcclxuXHRcdFx0XHRsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuXHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly9hcGkua3VndWF5b3VodWkuY29tL2FwaS9hbW95L3Byb2R1Y3QvaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IHRoaXMudGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMubGltaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHZpZGVvR3JvdXAgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhZ2UpXHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0dyb3VwLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6ZGF0YVtrZXldLnZpZGVvLnZpZGVvVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OmRhdGFba2V5XS52aWRlby5zdWJUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBkYXRhW2tleV0uaW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZGF0YVtrZXldLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhW2tleV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2s6ZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdCA9IFsuLi50aGlzLnZpZGVvTGlzdCwuLi52aWRlb0dyb3VwXVxyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHByb21pc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFwTG92ZSgpe1xyXG5cdFx0XHRcdHRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmNoZWNrID0gIXRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmNoZWNrXHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3QgPSBbLi4udGhpcy52aWRlb0xpc3RdXHJcblx0XHRcdH0sXHJcblx0XHRcdHRhcFNoYXJlKCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSB0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5pZFxyXG4gICAgICAgICAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9wcm9kdWN0L3NoYXJlP3R5cGU9b3RoZXImaWQ9JHtpZH1gXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cdFx0XHR9LFxyXG4gICAgICAgICAgICB0b0RldGFpbChpZCl7XHJcbiAgICAgICAgICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3Byb2R1Y3QvZGV0YWlsP2lkPSR7aWR9YFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuXHRcdFx0dmlkZW9QbGF5KGluZGV4KXtcclxuXHRcdFx0XHRsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuXHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cHJvbWlzZS50aGVuKHJlcz0+e1xyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0xpc3RbaW5kZXhdLmZsYWcgPSAhdGhpcy52aWRlb0xpc3RbaW5kZXhdLmZsYWdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGlja1ZpZGVvKCl7XHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uZmxhZyA9ICF0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5mbGFnXHJcblx0XHRcdH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5zd2lwZXJ7XHJcblxyXG5cdH1cclxuICAgIC52aWRlbyB7XHJcblxyXG4gICAgfVxyXG4gICAgLmNvdmVyLXZpZXctdG9we1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDI2MHVweDtcclxuICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBsZWZ0OiA0MHVweDtcclxuICAgIH1cclxuXHQuY292ZXItdmlldy1jZW50ZXJ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRvcGFjaXR5OiAwLjE7XHJcblx0XHR6LWluZGV4OiA5OTk7XHJcblx0fVxyXG5cdC5jb3Zlci12aWV3LWxlZnR7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRtYXJnaW4tbGVmdDogMTB1cHg7XHJcblx0XHR3aWR0aDogNTUwdXB4O1xyXG5cdFx0Ym90dG9tOiAxMDB1cHg7XHJcblx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxNnVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnVweDtcclxuICAgICAgICBoZWlnaHQ6IDE5MHVweDtcclxuXHR9XHJcbiAgICAudG9wLXRleHR7XHJcbiAgICBcdGZvbnQtc2l6ZTogMjBweDtcclxuICAgIFx0Y29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcblx0LmxlZnQtdGV4dHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHdpZHRoOiAzNjB1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3NHVweDtcclxuXHR9XHJcblx0LmF2YXRlcntcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwdXB4O1xyXG5cdH1cclxuICAgIC5nb29kcy1pbWd7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogMTYwdXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNjB1cHg7XHJcbiAgICB9XHJcblxyXG5cdC5jb3Zlci12aWV3LXJpZ2h0e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiA4MHVweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjB1cHg7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdC8vI2lmbmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdC8vI2VuZGlmXHJcblx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdH1cclxuXHJcblx0LmltZ3tcclxuXHRcdGhlaWdodDogODB1cHg7XHJcblx0XHR3aWR0aDogODB1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHVweDtcclxuXHR9XHJcblx0LnBhZ2V7XHJcblxyXG5cdH1cclxuXHJcbjwvc3R5bGU+XHJcbiIsImZ1bmN0aW9uIGluaXRVbmkoKSB7XHJcblxyXG4gICAgdmFyIGlzRm4gPSBmdW5jdGlvbiBpc0ZuKHYpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYW5kbGVQcm9taXNlID0gZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZGF0YV07XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbZXJyXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFJFR0VYID0gL15cXCR8Xm9ufF5jcmVhdGV8U3luYyR8TWFuYWdlciR8XnBhdXNlLztcclxuICAgIHZhciBBUElfTk9STUFMX0xJU1QgPSBbJ29zJywgJ2dldEN1cnJlbnRTdWJOVnVlJywgJ2dldFN1Yk5WdWVCeUlkJywgJ3N0b3BSZWNvcmQnLCAnc3RvcFZvaWNlJyxcclxuICAgICAgICAnc3RvcEJhY2tncm91bmRBdWRpbycsICdzdG9wUHVsbERvd25SZWZyZXNoJywgJ2hpZGVLZXlib2FyZCcsICdoaWRlVG9hc3QnLCAnaGlkZUxvYWRpbmcnLFxyXG4gICAgICAgICdzaG93TmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2NhbklVc2UnLCAnbmF2aWdhdGVCYWNrJywgJ2Nsb3NlU29ja2V0JyxcclxuICAgICAgICAncGFnZVNjcm9sbFRvJywgJ2RyYXdDYW52YXMnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzaG91bGRQcm9taXNlID0gZnVuY3Rpb24gc2hvdWxkUHJvbWlzZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKFJFR0VYLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKH5BUElfTk9STUFMX0xJU1QuaW5kZXhPZihuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KGFwaSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGkuYXBwbHkodW5kZWZpbmVkLCBbb3B0aW9uc10uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYXBpLmFwcGx5KHVuZGVmaW5lZCwgW09iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICAgICAgICAgICAgfSldLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuICAgICAgICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTWVzc2FnZUNhbGxiYWNrcyA9IFtdO1xyXG5cclxuICAgIHZhciBvcmlnaW4gPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJOVnVlTWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG5cclxuICAgIHZhciBjaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ1VOSS1BUFAtU1VCTlZVRScpO1xyXG4gICAgY2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5kYXRhLnRvID09PSB3ZWJ2aWV3SWQpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShldmVudC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gd3JhcHBlcih3ZWJ2aWV3KSB7XHJcbiAgICAgICAgd2Vidmlldy4kcHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRXZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcbiAgICAgICAgdmFyIGlzUG9wdXBOVnVlID0gY3VycmVudFdlYnZpZXdJZCA9PT0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROVnVlSWQgPSB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl90eXBlID09PSAndW5pTlZpZXcnICYmIHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX2lkO1xyXG4gICAgICAgIHZhciBwb3B1cE5WdWVJZCA9IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHdlYnZpZXcucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChob3N0TlZ1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBpc1BvcHVwTlZ1ZSA/IGhvc3ROVnVlSWQgOiBwb3B1cE5WdWVJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VuaUFwcFN1Yk5WdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3Lm9uTWVzc2FnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXdlYnZpZXcuX191bmlhcHBfbWFza19pZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9yaWdpbiA9IHdlYnZpZXcuX191bmlhcHBfaG9zdDtcclxuXHJcbiAgICAgICAgdmFyIG1hc2tDb2xvciA9IHdlYnZpZXcuX191bmlhcHBfbWFzaztcclxuXHJcbiAgICAgICAgdmFyIG1hc2tXZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZCh3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpO1xuICAgICAgICBtYXNrV2VidmlldyA9IG1hc2tXZWJ2aWV3LnBhcmVudCgpIHx8IG1hc2tXZWJ2aWV3Oy8v5YaN5qyh5qOA5rWL54i2XHJcbiAgICAgICAgdmFyIG9sZFNob3cgPSB3ZWJ2aWV3LnNob3c7XHJcbiAgICAgICAgdmFyIG9sZEhpZGUgPSB3ZWJ2aWV3LmhpZGU7XHJcbiAgICAgICAgdmFyIG9sZENsb3NlID0gd2Vidmlldy5jbG9zZTtcclxuXHJcbiAgICAgICAgdmFyIHNob3dNYXNrID0gZnVuY3Rpb24gc2hvd01hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IG1hc2tDb2xvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjbG9zZU1hc2sgPSBmdW5jdGlvbiBjbG9zZU1hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzaG93TWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRTaG93LmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5oaWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZEhpZGUuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZENsb3NlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3ViTlZ1ZUJ5SWQoaWQpIHtcclxuICAgICAgICB2YXIgd2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQoaWQpO1xyXG4gICAgICAgIGlmICh3ZWJ2aWV3ICYmICF3ZWJ2aWV3LiRwcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgd3JhcHBlcih3ZWJ2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlYnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFN1Yk5WdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN1Yk5WdWVCeUlkKHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBsdXMgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXMnKTtcclxuICAgIHZhciBnbG9iYWxFdmVudCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgaWQgPSAwO1xyXG4gICAgdmFyIGNhbGxiYWNrcyA9IHt9O1xyXG5cclxuICAgIHZhciBVTklBUFBfU0VSVklDRV9OVlVFX0lEID0gJ19fdW5pYXBwX19zZXJ2aWNlJztcclxuXHJcbiAgICBnbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBKc0FwaScpIHtcclxuICAgICAgICAgICAgaW52b2tlKGUuZGF0YS5pZCwgZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBTdWJOVnVlJykge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGUuZGF0YS5kYXRhLCBlLmRhdGEub3B0aW9ucyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGNyZWF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2soYXJncywgdHlwZSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKHJlcykge1xyXG4gICAgICAgICAgICBpZiAoaXNGbihhcmdzKSkge1xyXG4gICAgICAgICAgICAgICAgYXJncyhyZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6b2snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5zdWNjZXNzKSAmJiBhcmdzLnN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOmZhaWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5mYWlsKSAmJiBhcmdzLmZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlzRm4oYXJncy5jb21wbGV0ZSkgJiYgYXJncy5jb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaXNGbihhcmdzKSB8fCBhcmdzICYmIGlzRm4oYXJncy5jYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sua2VlcEFsaXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaW52b2tlID0gZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrSWQsIGRhdGEpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmtlZXBBbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbGxiYWNrWycgKyBjYWxsYmFja0lkICsgJ10gaXMgdW5kZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHVibGlzaCA9IGZ1bmN0aW9uIHB1Ymxpc2goX3JlZikge1xyXG4gICAgICAgIHZhciBpZCA9IF9yZWYuaWQsXHJcbiAgICAgICAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtcyA9IF9yZWYucGFyYW1zO1xyXG5cclxuICAgICAgICBjYWxsYmFja3NbaWRdID0gY3JlYXRlQ2FsbGJhY2socGFyYW1zLCB0eXBlKTtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgIH0sIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0TWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZShkYXRhLCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3JlYXRlUHVibGlzaCA9IGZ1bmN0aW9uIGNyZWF0ZVB1Ymxpc2gobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgIHB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkKyssXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBhcmdzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVpcmVOYXRpdmVQbHVnaW4ocGx1Z2luTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB3ZWV4LnJlcXVpcmVNb2R1bGUocGx1Z2luTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEZvbnRGYWNlKF9yZWYpIHtcclxuICAgICAgICB2YXIgZmFtaWx5ID0gX3JlZi5mYW1pbHksXHJcbiAgICAgICAgICAgIHNvdXJjZSA9IF9yZWYuc291cmNlLFxyXG4gICAgICAgICAgICBkZXNjID0gX3JlZi5kZXNjLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGRvbS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogZmFtaWx5LFxyXG4gICAgICAgICAgICBzcmM6IHNvdXJjZS5yZXBsYWNlKC9cIi9nLCAnXFwnJylcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdsb2FkRm9udEZhY2U6b2snLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdsb2FkZWQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnbG9iYWxFdmVudCQxID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBjYWxsYmFja3MkMSA9IFtdO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50JDEuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwUmVhZHknKSB7XHJcbiAgICAgICAgICAgIHJlYWR5LmlzVW5pQXBwUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tzJDEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmlBcHBSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH0gOiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgP1xyXG4gICAgICAgICAgICBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHN0cmVhbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnc3RyZWFtJyk7XHJcblxyXG4gICAgLy8gbGV0IHJlcXVlc3RUYXNrSWQgPSAwXHJcblxyXG4gICAgdmFyIE1FVEhPRF9HRVQgPSAnR0VUJztcclxuICAgIHZhciBNRVRIT0RfUE9TVCA9ICdQT1NUJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfSlNPTiA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfRk9STSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xyXG5cclxuICAgIHZhciBzZXJpYWxpemUgPSBmdW5jdGlvbiBzZXJpYWxpemUoZGF0YSkge1xyXG4gICAgICAgIHZhciBtZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IE1FVEhPRF9HRVQ7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBDT05URU5UX1RZUEVfRk9STTtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09IE1FVEhPRF9QT1NUICYmIGNvbnRlbnRUeXBlLnRvTG93ZXJDYXNlKCkgPT09IENPTlRFTlRfVFlQRV9KU09OKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfSkuam9pbignJicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0KF9yZWYpIHtcclxuICAgICAgICB2YXIgdXJsID0gX3JlZi51cmwsXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlciA9IF9yZWYuaGVhZGVyLFxyXG4gICAgICAgICAgICBfcmVmJG1ldGhvZCA9IF9yZWYubWV0aG9kLFxyXG4gICAgICAgICAgICBtZXRob2QgPSBfcmVmJG1ldGhvZCA9PT0gdW5kZWZpbmVkID8gJ0dFVCcgOiBfcmVmJG1ldGhvZCxcclxuICAgICAgICAgICAgX3JlZiRkYXRhVHlwZSA9IF9yZWYuZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gX3JlZiRkYXRhVHlwZSA9PT0gdW5kZWZpbmVkID8gJ2pzb24nIDogX3JlZiRkYXRhVHlwZSxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlID0gX3JlZi5yZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgLy8gcmVxdWVzdFRhc2tJZCsrXHJcbiAgICAgICAgdmFyIGFib3J0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGhhc0NvbnRlbnRUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NvbnRlbnRUeXBlICYmIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNDb250ZW50VHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbbmFtZV0gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gTUVUSE9EX0dFVCAmJiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICh+dXJsLmluZGV4T2YoJz8nKSA/IHVybC5zdWJzdHIoLTEpID09PSAnJicgfHwgdXJsLnN1YnN0cigtMSkgPT09ICc/JyA/ICcnIDogJyYnIDogJz8nKSArXHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemUoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0cmVhbS5mZXRjaCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgdHlwZTogZGF0YVR5cGUgPT09ICdqc29uJyA/ICdqc29uJyA6ICd0ZXh0JyxcclxuICAgICAgICAgICAgYm9keTogbWV0aG9kICE9PSBNRVRIT0RfR0VUID8gc2VyaWFsaXplKGRhdGEsIG1ldGhvZCwgaGVhZGVyc1snQ29udGVudC1UeXBlJ10pIDogJydcclxuICAgICAgICB9LCBmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gX3JlZjIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgb2sgPSBfcmVmMi5vayxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBfcmVmMi5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzID0gX3JlZjIuaGVhZGVycztcclxuXHJcbiAgICAgICAgICAgIHZhciByZXQgPSB7fTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAtMSB8fCBhYm9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3JlcXVlc3Q6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldC5zdGF0dXNDb2RlID0gc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcmV0LmhlYWRlciA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcclxuICAgICAgICAgICAgICAgIGFib3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3RvcmFnZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1c3N0b3JhZ2UnKTtcclxuICAgIHZhciBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUgPSAnX19UWVBFJztcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdG9yYWdlKF9yZWYpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhVHlwZSA9IHJldC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAmJiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAhPT0gJ1N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldFN0b3JhZ2U6b2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN0b3JhZ2UoX3JlZjIpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjIua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYyLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYyLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgZGF0YVR5cGUgPSAnU3RyaW5nJztcclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gJ09iamVjdCc7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGRhdGFUeXBlLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdzZXRTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVTdG9yYWdlKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYzLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAncmVtb3ZlU3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdyZW1vdmVTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoX3JlZjQpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjQua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjQuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWY0LnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmNC5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWY0LmNvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjbGlwYm9hcmQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2NsaXBib2FyZCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENsaXBib2FyZERhdGEoX3JlZikge1xyXG4gICAgICAgIHZhciBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGNsaXBib2FyZC5nZXRTdHJpbmcoZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldENsaXBib2FyZERhdGE6b2snLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDbGlwYm9hcmREYXRhKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ3NldENsaXBib2FyZERhdGE6b2snXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjbGlwYm9hcmQuc2V0U3RyaW5nKGRhdGEpO1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdldEVtaXR0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGdldFVuaUVtaXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgcmV0dXJuIGdldFVuaUVtaXR0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBFbWl0dGVyID0ge1xyXG4gICAgICAgICAgICAkb246IGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9mZjogZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvZmYgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvbmNlOiBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbmNlIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkZW1pdDogZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kZW1pdCBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldFVuaUVtaXR0ZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbWl0dGVyO1xyXG4gICAgICAgIH07XHJcbiAgICB9KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwbHkoY3R4LCBtZXRob2QsIGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gY3R4W21ldGhvZF0uYXBwbHkoY3R4LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9mZicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbmNlJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJGVtaXQnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGFwaSA9IC8qI19fUFVSRV9fKi8gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgbG9hZEZvbnRGYWNlOiBsb2FkRm9udEZhY2UsXHJcbiAgICAgICAgcmVhZHk6IHJlYWR5LFxyXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogZ2V0U3RvcmFnZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiBzZXRTdG9yYWdlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHJlbW92ZVN0b3JhZ2UsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiBjbGVhclN0b3JhZ2UsXHJcbiAgICAgICAgZ2V0Q2xpcGJvYXJkRGF0YTogZ2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBzZXRDbGlwYm9hcmREYXRhOiBzZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2U6IG9uU3ViTlZ1ZU1lc3NhZ2UsXHJcbiAgICAgICAgZ2V0U3ViTlZ1ZUJ5SWQ6IGdldFN1Yk5WdWVCeUlkLFxyXG4gICAgICAgIGdldEN1cnJlbnRTdWJOVnVlOiBnZXRDdXJyZW50U3ViTlZ1ZSxcclxuICAgICAgICAkb246ICRvbixcclxuICAgICAgICAkb2ZmOiAkb2ZmLFxyXG4gICAgICAgICRvbmNlOiAkb25jZSxcclxuICAgICAgICAkZW1pdDogJGVtaXRcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgd3ggPSB7XHJcbiAgICAgICAgdXBsb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBkb3dubG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgY2hvb3NlSW1hZ2U6IHRydWUsXHJcbiAgICAgICAgcHJldmlld0ltYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldEltYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICBzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIGNob29zZVZpZGVvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVWaWRlb1RvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgc2F2ZUZpbGU6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlTGlzdDogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVNhdmVkRmlsZTogdHJ1ZSxcclxuICAgICAgICBvcGVuRG9jdW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldExvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Mb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBnZXRTeXN0ZW1JbmZvOiB0cnVlLFxyXG4gICAgICAgIGdldE5ldHdvcmtUeXBlOiB0cnVlLFxyXG4gICAgICAgIG1ha2VQaG9uZUNhbGw6IHRydWUsXHJcbiAgICAgICAgc2NhbkNvZGU6IHRydWUsXHJcbiAgICAgICAgc2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBnZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIHNldEtlZXBTY3JlZW5PbjogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlTG9uZzogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlU2hvcnQ6IHRydWUsXHJcbiAgICAgICAgYWRkUGhvbmVDb250YWN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dUb2FzdDogdHJ1ZSxcclxuICAgICAgICBzaG93TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBoaWRlVG9hc3Q6IHRydWUsXHJcbiAgICAgICAgaGlkZUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgc2hvd01vZGFsOiB0cnVlLFxyXG4gICAgICAgIHNob3dBY3Rpb25TaGVldDogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyVGl0bGU6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhckNvbG9yOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlVG86IHRydWUsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogdHJ1ZSxcclxuICAgICAgICByZUxhdW5jaDogdHJ1ZSxcclxuICAgICAgICBzd2l0Y2hUYWI6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVCYWNrOiB0cnVlLFxyXG4gICAgICAgIGdldFByb3ZpZGVyOiB0cnVlLFxyXG4gICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICAgIGdldFVzZXJJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNoYXJlOiB0cnVlLFxyXG4gICAgICAgIHJlcXVlc3RQYXltZW50OiB0cnVlLFxyXG4gICAgICAgIHN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgdW5zdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIG9uUHVzaDogdHJ1ZSxcclxuICAgICAgICBvZmZQdXNoOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYXNlVW5pID0ge1xyXG4gICAgICAgIG9zOiB7XHJcbiAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB1bmkgPSB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHVuaSA9IG5ldyBQcm94eSh7fSwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3Bvc3RNZXNzYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncmVxdWlyZU5hdGl2ZVBsdWdpbicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhiYXNlVW5pKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICB1bmlba2V5XSA9IGJhc2VVbmlba2V5XTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdW5pLnBvc3RNZXNzYWdlID0gcG9zdE1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luID0gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCA9IG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHd4KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5pO1xyXG59XHJcblxyXG52YXIgY3JlYXRlVW5pO1xyXG5cclxuaWYgKHR5cGVvZiBnZXRVbmkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGNyZWF0ZVVuaSA9IGdldFVuaTtcclxufSBlbHNlIHtcclxuICAgIGNyZWF0ZVVuaSA9IGluaXRVbmk7XHJcbn1cclxudmFyIHdlZXhQbHVzID0gbmV3IFdlZXhQbHVzKHdlZXgpO1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVbmkod2VleCwgd2VleFBsdXMsIEJyb2FkY2FzdENoYW5uZWwpO1xyXG5leHBvcnQge1xyXG4gICAgd2VleFBsdXNcclxufTtcbiIsImZ1bmN0aW9uIHR5cG9mICh2KSB7XHJcbiAgY29uc3QgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvZyAoLi4uYXJncykge1xyXG4gIGNvbnN0IG1zZ3MgPSBhcmdzLm1hcCgodikgPT4ge1xyXG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2ID0gJy0tLUJFR0lOOkpTT04tLS0nICsgSlNPTi5zdHJpbmdpZnkodikgKyAnLS0tRU5EOkpTT04tLS0nXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHYgPT09IG51bGwpIHtcclxuICAgICAgICB2ID0gJy0tLU5VTEwtLS0nXHJcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XHJcbiAgICAgICAgICB2ID0gJy0tLUJFR0lOOicgKyB2VHlwZSArICctLS0nICsgdiArICctLS1FTkQ6JyArIHZUeXBlICsgJy0tLSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZcclxuICB9KVxyXG4gIGxldCBtc2cgPSAnJ1xyXG4gIGlmIChtc2dzLmxlbmd0aCA+IDEpIHtcclxuICAgIGNvbnN0IGxhc3RNc2cgPSBtc2dzLnBvcCgpXHJcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcclxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xyXG4gICAgICBtc2cgKz0gbGFzdE1zZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1zZyA9IG1zZ3NbMF1cclxuICB9XHJcbiAgcmV0dXJuIG1zZ1xyXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbn0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xuICB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2h1bmxlaS12aWRlby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE1Mjg3YzQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2h1bmxlaS12aWRlby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NodW5sZWktdmlkZW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVubGVpLXZpZGVvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJG9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2h1bmxlaS12aWRlby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCI5MGY4MGQxNlwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIumhueebri9LdUd1YVZVRS9jb21wb25lbnRzL2NodW5sZWktdmlkZW8vY2h1bmxlaS12aWRlby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bmxlaS12aWRlby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE1Mjg3YzQmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidS12aWRlb1wiLCB7XG4gICAgcmVmOiBcInZpZGVvXCIsXG4gICAgc3RhdGljQ2xhc3M6IFtcInZpZGVvXCJdLFxuICAgIGF0dHJzOiB7XG4gICAgICBzcmM6IF92bS5zcmMsXG4gICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICBlbmFibGVQcm9ncmVzc0dlc3R1cmU6IGZhbHNlLFxuICAgICAgaWQ6IFwidmlkZW9cIixcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBzaG93Q2VudGVyUGxheUJ0bjogdHJ1ZVxuICAgIH0sXG4gICAgb246IHsgY2xpY2s6IF92bS5jbGlja1ZpZGVvIH1cbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zLTAhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0xIS4uLy4uLy4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NodW5sZWktdmlkZW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zLTAhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0xIS4uLy4uLy4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NodW5sZWktdmlkZW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWRlbyA6c3JjPVwic3JjXCIgOmNvbnRyb2xzPVwiZmFsc2VcIiBcclxuXHRcdDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCIgQGNsaWNrPVwiY2xpY2tWaWRlb1wiXHJcblx0XHRpZD1cInZpZGVvXCIgcmVmPVwidmlkZW9cIiBjbGFzcz1cInZpZGVvXCIgOmxvb3A9XCJ0cnVlXCIgOnNob3ctY2VudGVyLXBsYXktYnRuPVwidHJ1ZVwiPjwvdmlkZW8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0e1xyXG5cdFx0cHJvcHM6e1xyXG5cdFx0XHRzcmM6e1xyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6JydcclxuXHRcdFx0fSxcclxuXHRcdFx0cGxheTp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKXtcclxuXHRcdFx0cmV0dXJue1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRjbGlja1ZpZGVvKCl7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR2aWRlb1BsYXkoKXtcclxuXHRcdFx0XHRpZih0aGlzLnBsYXkpe1xyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0N0eCA9IHVuaS5jcmVhdGVWaWRlb0NvbnRleHQoJ3ZpZGVvJyx0aGlzKTtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9DdHgucGxheSgpO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0N0eCA9IHVuaS5jcmVhdGVWaWRlb0NvbnRleHQoJ3ZpZGVvJyx0aGlzKTtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9DdHgucGF1c2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDp7XHJcblx0XHRcdHBsYXkobmV3VmFsLG9sZFZhbCl7XHJcblx0XHRcdFx0dGhpcy52aWRlb1BsYXkoKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQudmlkZW97XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVubGVpLXZpZGVvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bmxlaS12aWRlby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInZpZGVvXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImhlaWdodFwiOiAxMDBcbiAgfVxufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTI3YzU4NTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUyN2M1ODU4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb3Zlci12aWV3LXRvcFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogXCIyNjBycHhcIixcbiAgICBcInpJbmRleFwiOiA5OTk5LFxuICAgIFwiZm9udFNpemVcIjogXCIyMFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJsZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcImNvdmVyLXZpZXctY2VudGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuMSxcbiAgICBcInpJbmRleFwiOiA5OTlcbiAgfSxcbiAgXCJjb3Zlci12aWV3LWxlZnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjU1MHJweFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMTAwcnB4XCIsXG4gICAgXCJ6SW5kZXhcIjogOTk5OSxcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE2cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE2cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE2cnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNnJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTkwcnB4XCJcbiAgfSxcbiAgXCJ0b3AtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwXCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcImxlZnQtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcIndpZHRoXCI6IFwiMzYwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTc0cnB4XCJcbiAgfSxcbiAgXCJhdmF0ZXJcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDBycHhcIlxuICB9LFxuICBcImdvb2RzLWltZ1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxNjBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTYwcnB4XCJcbiAgfSxcbiAgXCJjb3Zlci12aWV3LXJpZ2h0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiBcIjgwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiekluZGV4XCI6IDk5OTlcbiAgfSxcbiAgXCJpbWdcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiODBycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vYXBwcy9IQnVpbGRlclguMi4wLjEuMjAxOTA2MTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9hcHBzL0hCdWlsZGVyWC4yLjAuMS4yMDE5MDYxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uL2FwcHMvSEJ1aWxkZXJYLjIuMC4xLjIwMTkwNjE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicm91bmRcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNTAwMHJweFwiXG4gIH0sXG4gIFwicmFkaXVzXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjZycHhcIlxuICB9LFxuICBcInJlc3BvbnNlXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMFxuICB9LFxuICBcInN3aXRjaC1zZXhcIjoge1xuICAgIFwiY29udGVudDo6YWZ0ZXJcIjogXCJcXFwiXFxcXGU3MWNcXFwiXCIsXG4gICAgXCJjb250ZW50OjpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWFcXFwiXCJcbiAgfSxcbiAgXCJzb2xpZFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyOjphZnRlclwiOiBcIjFycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpXCJcbiAgfSxcbiAgXCJzb2xpZC10b3BcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJUb3A6OmFmdGVyXCI6IFwiMXJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICB9LFxuICBcInNvbGlkLXJpZ2h0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlclJpZ2h0OjphZnRlclwiOiBcIjFycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpXCJcbiAgfSxcbiAgXCJzb2xpZC1ib3R0b21cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlckJvdHRvbTo6YWZ0ZXJcIjogXCIxcnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKVwiXG4gIH0sXG4gIFwic29saWQtbGVmdFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlckxlZnQ6OmFmdGVyXCI6IFwiMXJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICB9LFxuICBcInNvbGlkc1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXI6OmFmdGVyXCI6IFwiOHJweCBzb2xpZCAjZWVlXCJcbiAgfSxcbiAgXCJzb2xpZHMtdG9wXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJUb3A6OmFmdGVyXCI6IFwiOHJweCBzb2xpZCAjZWVlXCJcbiAgfSxcbiAgXCJzb2xpZHMtcmlnaHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJSaWdodDo6YWZ0ZXJcIjogXCI4cnB4IHNvbGlkICNlZWVcIlxuICB9LFxuICBcInNvbGlkcy1ib3R0b21cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyQm90dG9tOjphZnRlclwiOiBcIjhycHggc29saWQgI2VlZVwiXG4gIH0sXG4gIFwic29saWRzLWxlZnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlckxlZnQ6OmFmdGVyXCI6IFwiOHJweCBzb2xpZCAjZWVlXCJcbiAgfSxcbiAgXCJkYXNoZWRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXI6OmFmdGVyXCI6IFwiMXJweCBkYXNoZWQgI2RkZFwiXG4gIH0sXG4gIFwiZGFzaGVkLXRvcFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJUb3A6OmFmdGVyXCI6IFwiMXJweCBkYXNoZWQgI2RkZFwiXG4gIH0sXG4gIFwiZGFzaGVkLXJpZ2h0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJSaWdodDo6YWZ0ZXJcIjogXCIxcnB4IGRhc2hlZCAjZGRkXCJcbiAgfSxcbiAgXCJkYXNoZWQtYm90dG9tXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyQm90dG9tOjphZnRlclwiOiBcIjFycHggZGFzaGVkICNkZGRcIlxuICB9LFxuICBcImRhc2hlZC1sZWZ0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlckxlZnQ6OmFmdGVyXCI6IFwiMXJweCBkYXNoZWQgI2RkZFwiXG4gIH0sXG4gIFwic2hhZG93LWxnXCI6IHtcbiAgICBcIi0tU2hhZG93U2l6ZVwiOiBcIjBycHggNDBycHggMTAwcnB4IDBycHhcIlxuICB9LFxuICBcInNoYWRvdy13YXJwXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImJveFNoYWRvd1wiOiBcIjAgMCAxMHJweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICBcInBvc2l0aW9uOmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFwiXCIsXG4gICAgXCJ0b3A6YmVmb3JlXCI6IFwiMjBycHhcIixcbiAgICBcImJvdHRvbTpiZWZvcmVcIjogXCIzMHJweFwiLFxuICAgIFwibGVmdDpiZWZvcmVcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGg6YmVmb3JlXCI6IDUwLFxuICAgIFwiYm94U2hhZG93OmJlZm9yZVwiOiBcIjAgMzBycHggMjBycHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXG4gICAgXCJ0cmFuc2Zvcm06YmVmb3JlXCI6IFwicm90YXRlKC0zZGVnKVwiLFxuICAgIFwiekluZGV4OmJlZm9yZVwiOiAtMSxcbiAgICBcInBvc2l0aW9uOmJlZm9yZTphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJjb250ZW50OmJlZm9yZTphZnRlclwiOiBcIlxcXCJcXFwiXCIsXG4gICAgXCJ0b3A6YmVmb3JlOmFmdGVyXCI6IFwiMjBycHhcIixcbiAgICBcImJvdHRvbTpiZWZvcmU6YWZ0ZXJcIjogXCIzMHJweFwiLFxuICAgIFwibGVmdDpiZWZvcmU6YWZ0ZXJcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGg6YmVmb3JlOmFmdGVyXCI6IDUwLFxuICAgIFwiYm94U2hhZG93OmJlZm9yZTphZnRlclwiOiBcIjAgMzBycHggMjBycHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXG4gICAgXCJ0cmFuc2Zvcm06YmVmb3JlOmFmdGVyXCI6IFwicm90YXRlKC0zZGVnKVwiLFxuICAgIFwiekluZGV4OmJlZm9yZTphZnRlclwiOiAtMSxcbiAgICBcInJpZ2h0OmFmdGVyXCI6IFwiMjBycHhcIixcbiAgICBcInRyYW5zZm9ybTphZnRlclwiOiBcInJvdGF0ZSgzZGVnKVwiXG4gIH0sXG4gIFwic2hhZG93LWJsdXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YmVmb3JlXCI6IFwiXFxcIlxcXCJcIixcbiAgICBcImRpc3BsYXk6OmJlZm9yZVwiOiBcImJsb2NrXCIsXG4gICAgXCJiYWNrZ3JvdW5kOjpiZWZvcmVcIjogXCJpbmhlcml0XCIsXG4gICAgXCJmaWx0ZXI6OmJlZm9yZVwiOiBcImJsdXIoMTBycHgpXCIsXG4gICAgXCJwb3NpdGlvbjo6YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcIndpZHRoOjpiZWZvcmVcIjogMTAwLFxuICAgIFwiaGVpZ2h0OjpiZWZvcmVcIjogMTAwLFxuICAgIFwidG9wOjpiZWZvcmVcIjogXCIxMHJweFwiLFxuICAgIFwibGVmdDo6YmVmb3JlXCI6IFwiMTBycHhcIixcbiAgICBcInpJbmRleDo6YmVmb3JlXCI6IC0xLFxuICAgIFwib3BhY2l0eTo6YmVmb3JlXCI6IDAuNCxcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YmVmb3JlXCI6IFwiMCAwXCIsXG4gICAgXCJ0cmFuc2Zvcm06OmJlZm9yZVwiOiBcInNjYWxlKDEsIDEpXCJcbiAgfSxcbiAgXCJjdS1idG5cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibm9uZVwiLFxuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlKDBycHgsIDBycHgpXCIsXG4gICAgXCJkaXNwbGF5OjphZnRlclwiOiBcIm5vbmVcIlxuICB9LFxuICBcImJsb2NrXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gIH0sXG4gIFwiY3UtdGFnXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcInZlcnRpY2FsQWxpZ25cIjogXCJtaWRkbGVcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNnJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTZycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZlwiLFxuICAgIFwid2hpdGVTcGFjZVwiOiBcIm5vd3JhcFwiXG4gIH0sXG4gIFwiY3UtY2Fwc3VsZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcInZlcnRpY2FsQWxpZ25cIjogXCJtaWRkbGVcIlxuICB9LFxuICBcImN1LWF2YXRhclwiOiB7XG4gICAgXCJmb250VmFyaWFudFwiOiBcInNtYWxsLWNhcHNcIixcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIndoaXRlU3BhY2VcIjogXCJub3dyYXBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcIndpZHRoXCI6IFwiNjRycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0cnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiBcImNvdmVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25cIjogXCJjZW50ZXJcIixcbiAgICBcInZlcnRpY2FsQWxpZ25cIjogXCJtaWRkbGVcIixcbiAgICBcImZvbnRTaXplXCI6IDEuNVxuICB9LFxuICBcImN1LWF2YXRhci1ncm91cFwiOiB7XG4gICAgXCJkaXJlY3Rpb25cIjogXCJydGxcIixcbiAgICBcInVuaWNvZGVCaWRpXCI6IFwiYmlkaS1vdmVycmlkZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIlxuICB9LFxuICBcImN1LXByb2dyZXNzXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJoZWlnaHRcIjogXCIyOHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ViZWVmNVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiAxMDBcbiAgfSxcbiAgXCJjdS1sb2FkXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwibGluZUhlaWdodFwiOiAzLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250RmFtaWx5OjpiZWZvcmVcIjogXCJcXFwiY3VJY29uXFxcIlwiLFxuICAgIFwiZGlzcGxheTo6YmVmb3JlXCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJtYXJnaW5SaWdodDo6YmVmb3JlXCI6IFwiNnJweFwiXG4gIH0sXG4gIFwibG9hZC1wcm9ncmVzc1wiOiB7XG4gICAgXCJwb2ludGVyRXZlbnRzXCI6IFwibm9uZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogMjAwMFxuICB9LFxuICBcImdyYXlzY2FsZVwiOiB7XG4gICAgXCJmaWx0ZXJcIjogXCJncmF5c2NhbGUoMSlcIlxuICB9LFxuICBcImN1LWJhclwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiMTAwcnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcImN1LXRhYmJhci1oZWlnaHRcIjoge1xuICAgIFwibWluSGVpZ2h0XCI6IFwiMTAwcnB4XCJcbiAgfSxcbiAgXCJjdS1jdXN0b21cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJuYXZcIjoge1xuICAgIFwid2hpdGVTcGFjZVwiOiBcIm5vd3JhcFwiXG4gIH0sXG4gIFwiY3UtdGltZWxpbmVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJjdS1jaGF0XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJjdS1jYXJkXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcImN1LWZvcm0tZ3JvdXBcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjFycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMXJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJjdS1tb2RhbFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInpJbmRleFwiOiAxMTEwLFxuICAgIFwib3BhY2l0eVwiOiAwLFxuICAgIFwib3V0bGluZVwiOiAwLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJNc1RyYW5zZm9ybVwiOiBcInNjYWxlKDEuMTg1KVwiLFxuICAgIFwidHJhbnNmb3JtXCI6IFwic2NhbGUoMS4xODUpXCIsXG4gICAgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogXCJoaWRkZW5cIixcbiAgICBcInBlcnNwZWN0aXZlXCI6IFwiMjAwMHJweFwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDMwMCxcbiAgICBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgXCJ0cmFuc2l0aW9uRGVsYXlcIjogMCxcbiAgICBcInBvaW50ZXJFdmVudHNcIjogXCJub25lXCIsXG4gICAgXCJjb250ZW50OjpiZWZvcmVcIjogXCJcXFwiXFxcXDIwMEJcXFwiXCIsXG4gICAgXCJkaXNwbGF5OjpiZWZvcmVcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcImhlaWdodDo6YmVmb3JlXCI6IDEwMCxcbiAgICBcInZlcnRpY2FsQWxpZ246OmJlZm9yZVwiOiBcIm1pZGRsZVwiXG4gIH0sXG4gIFwiQFRSQU5TSVRJT05cIjoge1xuICAgIFwiY3UtbW9kYWxcIjoge1xuICAgICAgXCJkdXJhdGlvblwiOiAzMDAsXG4gICAgICBcInRpbWluZ0Z1bmN0aW9uXCI6IFwiZWFzZS1pbi1vdXRcIixcbiAgICAgIFwiZGVsYXlcIjogMFxuICAgIH1cbiAgfSxcbiAgXCJjdS1kaWFsb2dcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwidmVydGljYWxBbGlnblwiOiBcIm1pZGRsZVwiLFxuICAgIFwid2lkdGhcIjogXCI2ODBycHhcIixcbiAgICBcIm1heFdpZHRoXCI6IDEwMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGY4ZjhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwcnB4XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwic2NyZWVuLXN3aXBlclwiOiB7XG4gICAgXCJtaW5IZWlnaHRcIjogXCIzNzVycHhcIlxuICB9LFxuICBcImNhcmQtc3dpcGVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjQ3MHJweFwiXG4gIH0sXG4gIFwidG93ZXItc3dpcGVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjQyMHJweFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwibWF4V2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJjdS1zdGVwc1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiXG4gIH0sXG4gIFwiZmxleFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiXG4gIH0sXG4gIFwiYmFzaXMteHNcIjoge1xuICAgIFwiZmxleEJhc2lzXCI6IDIwXG4gIH0sXG4gIFwiYmFzaXMtc21cIjoge1xuICAgIFwiZmxleEJhc2lzXCI6IDQwXG4gIH0sXG4gIFwiYmFzaXMtZGZcIjoge1xuICAgIFwiZmxleEJhc2lzXCI6IDUwXG4gIH0sXG4gIFwiYmFzaXMtbGdcIjoge1xuICAgIFwiZmxleEJhc2lzXCI6IDYwXG4gIH0sXG4gIFwiYmFzaXMteGxcIjoge1xuICAgIFwiZmxleEJhc2lzXCI6IDgwXG4gIH0sXG4gIFwiZmxleC1zdWJcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiZmxleC10d2ljZVwiOiB7XG4gICAgXCJmbGV4XCI6IDJcbiAgfSxcbiAgXCJmbGV4LXRyZWJsZVwiOiB7XG4gICAgXCJmbGV4XCI6IDNcbiAgfSxcbiAgXCJmbGV4LWRpcmVjdGlvblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJmbGV4LXdyYXBcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJhbGlnbi1zdGFydFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiYWxpZ24tZW5kXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiYWxpZ24tY2VudGVyXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImFsaWduLXN0cmV0Y2hcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcInN0cmV0Y2hcIlxuICB9LFxuICBcInNlbGYtc3RhcnRcIjoge1xuICAgIFwiYWxpZ25TZWxmXCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwic2VsZi1jZW50ZXJcIjoge1xuICAgIFwiYWxpZ25TZWxmXCI6IFwiZmxleC1jZW50ZXJcIlxuICB9LFxuICBcInNlbGYtZW5kXCI6IHtcbiAgICBcImFsaWduU2VsZlwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCJzZWxmLXN0cmV0Y2hcIjoge1xuICAgIFwiYWxpZ25TZWxmXCI6IFwic3RyZXRjaFwiXG4gIH0sXG4gIFwianVzdGlmeS1zdGFydFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImp1c3RpZnktZW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImp1c3RpZnktY2VudGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJqdXN0aWZ5LWJldHdlZW5cIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJqdXN0aWZ5LWFyb3VuZFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiXG4gIH0sXG4gIFwiZ3JpZFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJtYXJnaW4tMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm1hcmdpbi14c1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXNtXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW5cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1sZ1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXhsXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdG9wLXhzXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdG9wLXNtXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdG9wXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdG9wLWxnXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdG9wLXhsXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tcmlnaHQteHNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXJpZ2h0LXNtXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1yaWdodFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tcmlnaHQtbGdcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXJpZ2h0LXhsXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1ib3R0b20teHNcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1ib3R0b20tc21cIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1ib3R0b21cIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1ib3R0b20tbGdcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1ib3R0b20teGxcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1sZWZ0LXhzXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLWxlZnQtc21cIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbGVmdFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1sZWZ0LWxnXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLWxlZnQteGxcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbHIteHNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbHItc21cIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbHJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbHItbGdcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbHIteGxcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdGIteHNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdGItc21cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdGJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdGItbGdcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdGIteGxcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwicGFkZGluZy14c1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInBhZGRpbmctc21cIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInBhZGRpbmcteGxcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLXRvcC14c1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcInBhZGRpbmctdG9wLXNtXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy10b3BcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLXRvcC1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcInBhZGRpbmctdG9wLXhsXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1yaWdodC14c1wiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1yaWdodC1zbVwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1yaWdodFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1yaWdodC1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1yaWdodC14bFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1ib3R0b20teHNcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLWJvdHRvbS1zbVwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBhZGRpbmctYm90dG9tXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1ib3R0b20tbGdcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLWJvdHRvbS14bFwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBhZGRpbmctbGVmdC14c1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLWxlZnQtc21cIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sZWZ0XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBhZGRpbmctbGVmdC1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLWxlZnQteGxcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sci14c1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sci1zbVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sclwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sci1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sci14bFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy10Yi14c1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy10Yi1zbVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy10YlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy10Yi1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy10Yi14bFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwiY2ZcIjoge1xuICAgIFwiY29udGVudDo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcImRpc3BsYXk6OmFmdGVyXCI6IFwidGFibGVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjpiZWZvcmVcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcImRpc3BsYXk6OmFmdGVyOjpiZWZvcmVcIjogXCJ0YWJsZVwiLFxuICAgIFwiY2xlYXI6OmFmdGVyXCI6IFwiYm90aFwiXG4gIH0sXG4gIFwiZmxcIjoge1xuICAgIFwiZmxvYXRcIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJmclwiOiB7XG4gICAgXCJmbG9hdFwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCJsaW5lLXJlZFwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjZTU0ZDQyXCIsXG4gICAgXCJjb2xvclwiOiBcIiNlNTRkNDJcIlxuICB9LFxuICBcImxpbmVzLXJlZFwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiI2U1NGQ0MlwiLFxuICAgIFwiY29sb3JcIjogXCIjZTU0ZDQyXCJcbiAgfSxcbiAgXCJsaW5lLW9yYW5nZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjZjM3YjFkXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmMzdiMWRcIlxuICB9LFxuICBcImxpbmVzLW9yYW5nZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiI2YzN2IxZFwiLFxuICAgIFwiY29sb3JcIjogXCIjZjM3YjFkXCJcbiAgfSxcbiAgXCJsaW5lLXllbGxvd1wiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjZmJiZDA4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmYmJkMDhcIlxuICB9LFxuICBcImxpbmVzLXllbGxvd1wiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiI2ZiYmQwOFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmJiZDA4XCJcbiAgfSxcbiAgXCJsaW5lLW9saXZlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiM4ZGM2M2ZcIixcbiAgICBcImNvbG9yXCI6IFwiIzhkYzYzZlwiXG4gIH0sXG4gIFwibGluZXMtb2xpdmVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiM4ZGM2M2ZcIixcbiAgICBcImNvbG9yXCI6IFwiIzhkYzYzZlwiXG4gIH0sXG4gIFwibGluZS1ncmVlblwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjMzliNTRhXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzOWI1NGFcIlxuICB9LFxuICBcImxpbmVzLWdyZWVuXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlcjo6YWZ0ZXJcIjogXCIjMzliNTRhXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzOWI1NGFcIlxuICB9LFxuICBcImxpbmUtY3lhblwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjMWNiYmI0XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxY2JiYjRcIlxuICB9LFxuICBcImxpbmVzLWN5YW5cIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiMxY2JiYjRcIixcbiAgICBcImNvbG9yXCI6IFwiIzFjYmJiNFwiXG4gIH0sXG4gIFwibGluZS1ibHVlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiMwMDgxZmZcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwODFmZlwiXG4gIH0sXG4gIFwibGluZXMtYmx1ZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiIzAwODFmZlwiLFxuICAgIFwiY29sb3JcIjogXCIjMDA4MWZmXCJcbiAgfSxcbiAgXCJsaW5lLXB1cnBsZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjNjczOWI2XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NzM5YjZcIlxuICB9LFxuICBcImxpbmVzLXB1cnBsZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiIzY3MzliNlwiLFxuICAgIFwiY29sb3JcIjogXCIjNjczOWI2XCJcbiAgfSxcbiAgXCJsaW5lLW1hdXZlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiM5YzI2YjBcIixcbiAgICBcImNvbG9yXCI6IFwiIzljMjZiMFwiXG4gIH0sXG4gIFwibGluZXMtbWF1dmVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiM5YzI2YjBcIixcbiAgICBcImNvbG9yXCI6IFwiIzljMjZiMFwiXG4gIH0sXG4gIFwibGluZS1waW5rXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiNlMDM5OTdcIixcbiAgICBcImNvbG9yXCI6IFwiI2UwMzk5N1wiXG4gIH0sXG4gIFwibGluZXMtcGlua1wiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiI2UwMzk5N1wiLFxuICAgIFwiY29sb3JcIjogXCIjZTAzOTk3XCJcbiAgfSxcbiAgXCJsaW5lLWJyb3duXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiNhNTY3M2ZcIixcbiAgICBcImNvbG9yXCI6IFwiI2E1NjczZlwiXG4gIH0sXG4gIFwibGluZXMtYnJvd25cIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiNhNTY3M2ZcIixcbiAgICBcImNvbG9yXCI6IFwiI2E1NjczZlwiXG4gIH0sXG4gIFwibGluZS1ncmV5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiM4Nzk5YTNcIixcbiAgICBcImNvbG9yXCI6IFwiIzg3OTlhM1wiXG4gIH0sXG4gIFwibGluZXMtZ3JleVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiIzg3OTlhM1wiLFxuICAgIFwiY29sb3JcIjogXCIjODc5OWEzXCJcbiAgfSxcbiAgXCJsaW5lLWdyYXlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyXCI6IFwiI2FhYWFhYVwiLFxuICAgIFwiY29sb3JcIjogXCIjYWFhYWFhXCJcbiAgfSxcbiAgXCJsaW5lcy1ncmF5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlcjo6YWZ0ZXJcIjogXCIjYWFhYWFhXCIsXG4gICAgXCJjb2xvclwiOiBcIiNhYWFhYWFcIlxuICB9LFxuICBcImxpbmUtYmxhY2tcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJsaW5lcy1ibGFja1wiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJsaW5lLXdoaXRlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwibGluZXMtd2hpdGVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctcmVkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlNTRkNDJcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctb3JhbmdlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMzdiMWRcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmcteWVsbG93XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmYmJkMDhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwiYmctb2xpdmVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzhkYzYzZlwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ncmVlblwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzliNTRhXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLWN5YW5cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzFjYmJiNFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ibHVlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDgxZmZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctcHVycGxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2NzM5YjZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctbWF1dmVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzljMjZiMFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1waW5rXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlMDM5OTdcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctYnJvd25cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2E1NjczZlwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ncmV5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM4Nzk5YTNcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZ3JheVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjBmMGYwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImJnLWJsYWNrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctd2hpdGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCJcbiAgfSxcbiAgXCJiZy1zaGFkZVRvcFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAwLjAxKSlcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctc2hhZGVCb3R0b21cIjoge1xuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4wMSksIHJnYmEoMCwgMCwgMCwgMSkpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLWdyYWR1YWwtcmVkXCI6IHtcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI2Y0M2YzYiwgI2VjMDA4YylcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZ3JhZHVhbC1vcmFuZ2VcIjoge1xuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmY5NzAwLCAjZWQxYzI0KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ncmFkdWFsLWdyZWVuXCI6IHtcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzM5YjU0YSwgIzhkYzYzZilcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZ3JhZHVhbC1wdXJwbGVcIjoge1xuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjOTAwMGZmLCAjNWUwMGZmKVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ncmFkdWFsLXBpbmtcIjoge1xuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZWMwMDhjLCAjNjczOWI2KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ncmFkdWFsLWJsdWVcIjoge1xuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDA4MWZmLCAjMWNiYmI0KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1pbWdcIjoge1xuICAgIFwiYmFja2dyb3VuZFNpemVcIjogXCJjb3ZlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUmVwZWF0XCI6IFwibm8tcmVwZWF0XCJcbiAgfSxcbiAgXCJiZy1tYXNrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyXCI6IFwiXFxcIlxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlclwiOiAxMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyXCI6IDEwMCxcbiAgICBcImRpc3BsYXk6OmFmdGVyXCI6IFwiYmxvY2tcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjo6YWZ0ZXJcIjogXCJyZ2JhKDAsMCwwLDAuNClcIixcbiAgICBcInBvc2l0aW9uOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0OjphZnRlclwiOiAwLFxuICAgIFwicmlnaHQ6OmFmdGVyXCI6IDAsXG4gICAgXCJib3R0b206OmFmdGVyXCI6IDAsXG4gICAgXCJ0b3A6OmFmdGVyXCI6IDBcbiAgfSxcbiAgXCJiZy12aWRlb1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJ0ZXh0LXhzXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBycHhcIlxuICB9LFxuICBcInRleHQtc21cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwidGV4dC1kZlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCJcbiAgfSxcbiAgXCJ0ZXh0LWxnXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzJycHhcIlxuICB9LFxuICBcInRleHQteGxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNnJweFwiXG4gIH0sXG4gIFwidGV4dC14eGxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0NHJweFwiXG4gIH0sXG4gIFwidGV4dC1zbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjgwcnB4XCJcbiAgfSxcbiAgXCJ0ZXh0LXhzbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEyMHJweFwiXG4gIH0sXG4gIFwidGV4dC1BYmNcIjoge1xuICAgIFwidGV4dFRyYW5zZm9ybVwiOiBcIkNhcGl0YWxpemVcIlxuICB9LFxuICBcInRleHQtQUJDXCI6IHtcbiAgICBcInRleHRUcmFuc2Zvcm1cIjogXCJVcHBlcmNhc2VcIlxuICB9LFxuICBcInRleHQtYWJjXCI6IHtcbiAgICBcInRleHRUcmFuc2Zvcm1cIjogXCJMb3dlcmNhc2VcIlxuICB9LFxuICBcInRleHQtcHJpY2VcIjoge1xuICAgIFwiY29udGVudDo6YmVmb3JlXCI6IFwiXFxcIsKlXFxcIlwiLFxuICAgIFwiZm9udFNpemU6OmJlZm9yZVwiOiA4MCxcbiAgICBcIm1hcmdpblJpZ2h0OjpiZWZvcmVcIjogXCI0cnB4XCJcbiAgfSxcbiAgXCJ0ZXh0LWN1dFwiOiB7XG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiLFxuICAgIFwid2hpdGVTcGFjZVwiOiBcIm5vd3JhcFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInRleHQtYm9sZFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwidGV4dC1jZW50ZXJcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ0ZXh0LWNvbnRlbnRcIjoge1xuICAgIFwibGluZUhlaWdodFwiOiAxLjZcbiAgfSxcbiAgXCJ0ZXh0LWxlZnRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiXG4gIH0sXG4gIFwidGV4dC1yaWdodFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwidGV4dC1yZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZTU0ZDQyXCJcbiAgfSxcbiAgXCJ0ZXh0LW9yYW5nZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmMzdiMWRcIlxuICB9LFxuICBcInRleHQteWVsbG93XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZiYmQwOFwiXG4gIH0sXG4gIFwidGV4dC1vbGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM4ZGM2M2ZcIlxuICB9LFxuICBcInRleHQtZ3JlZW5cIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzliNTRhXCJcbiAgfSxcbiAgXCJ0ZXh0LWN5YW5cIjoge1xuICAgIFwiY29sb3JcIjogXCIjMWNiYmI0XCJcbiAgfSxcbiAgXCJ0ZXh0LWJsdWVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA4MWZmXCJcbiAgfSxcbiAgXCJ0ZXh0LXB1cnBsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2NzM5YjZcIlxuICB9LFxuICBcInRleHQtbWF1dmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjOWMyNmIwXCJcbiAgfSxcbiAgXCJ0ZXh0LXBpbmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZTAzOTk3XCJcbiAgfSxcbiAgXCJ0ZXh0LWJyb3duXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2E1NjczZlwiXG4gIH0sXG4gIFwidGV4dC1ncmV5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzg3OTlhM1wiXG4gIH0sXG4gIFwidGV4dC1ncmF5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2FhYWFhYVwiXG4gIH0sXG4gIFwidGV4dC1ibGFja1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcInRleHQtd2hpdGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJjdUljb25mb250LXNwaW5cIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uXCI6IFwiY3VJY29uLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyXCIsXG4gICAgXCJhbmltYXRpb25cIjogXCJjdUljb24tc3BpbiAycyBpbmZpbml0ZSBsaW5lYXJcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIlxuICB9LFxuICBcImN1SWNvbmZvbnQtcHVsc2VcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uXCI6IFwiY3VJY29uLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOClcIixcbiAgICBcImFuaW1hdGlvblwiOiBcImN1SWNvbi1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJcbiAgfSxcbiAgXCJARk9OVC1GQUNFXCI6IFtcbiAgICB7XG4gICAgICBcImZvbnRGYW1pbHlcIjogXCJjdUljb25cIixcbiAgICAgIFwic3JjXCI6IFwidXJsKCcvL2F0LmFsaWNkbi5jb20vdC9mb250XzUzMzU2Nl95ZnEyZDl3ZGlqLmVvdD90PTE1NDUyMzk5ODU4MzEjaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0dXJsKCdkYXRhOmFwcGxpY2F0aW9uL3gtZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdSZ0FCQUFBQUFLUWNBQXNBQUFBQk5LQUFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCSFUxVkNBQUFCQ0FBQUFETUFBQUJDc1A2ejdVOVRMeklBQUFFOEFBQUFSQUFBQUZZOGRrb2lZMjFoY0FBQUFZQUFBQWlhQUFBVGtpbFpQcTluYkhsbUFBQUtIQUFBanFvQUFRa1VPallsQ21obFlXUUFBSmpJQUFBQUx3QUFBRFlVTW9GZ2FHaGxZUUFBbVBnQUFBQWZBQUFBSkFod0JjcG9iWFI0QUFDWkdBQUFBQmtBQUFTY25TSUFBR3h2WTJFQUFKazBBQUFDVUFBQUFsQWhYMkMrYldGNGNBQUFtNFFBQUFBZkFBQUFJQUpBQU9wdVlXMWxBQUNicEFBQUFVVUFBQUp0UGxUK2ZYQnZjM1FBQUp6c0FBQUhMUUFBRE1ZaThLWEplSnhqWUdSZ1lPQmlrR1BRWVdCMGNmTUpZZUJnWUdHQUFKQU1ZMDVtZWlKUURNb0R5ckdBYVE0Z1pvT0lBZ0NLSXdOUEFIaWNZMkJrWVdTY3dNREt3TUhVeVhTR2dZR2hIMEl6dm1Zd1l1UmdZR0JpWUdWbXdBb0MwbHhUR0J5ZU1ielFaMjc0MzhBUXc5ekEwQUFVWmdUSkFRRGhIUXdWZUp6TjEvbmYxbU1heHZIUDlaUWlTVUtXYkNYWjErdzdRME5xSW1OSmhTU1NaU3lUbE1RWXM5aGxMR1BLTW9SQk15VTF0bElpSXJLVWZleWNaeU9wa0NWTGMxelBZYno4QnpQZHI3ZmI4L3lRMi8yOXp1TTZUbUE1b0lsc0lVMzE0NjBVNnIrTzFtOUw0KytiMEtMeDkwMmJucTZmTCtJQ210RTBHcUpsdElsMjBURTZSNWZvSGozam1EZ3R6b29oTVN5R3g0aTRNQzZLUytMcXVENXVpRnZpemhnYjQyTkNUSXdwTVMxbXhPeDRJeUpMdHNpTmM4dmNON3Zub2RrcisyYS9ISkNEOG9LOE1rZm1kVGs2YjhveGVVZU96VWs1TTEvSXVUay9GK1RpL0NxWHp0dDYyVElJZnZJcDlvc0RvMGNjSHYzaWpCZ2NRMy84RkJmSFZZMmZZbFRjRnZmRXVNWlBjWDlNamVueFZMd1liOFpIMlNSYjVhYTVUWGJOSG5sWTlzNWpzMzhPek1GNXFUN0ZOVG5xaDA5eFY0N0x5VGtyNXpSK2lvVzU1TCtmNG4vK3AraXAvUEVucjh1NGhyOHdsaWQ0bXRrOC8rUHJSVjV1ZkwzRFBEN2k0OGJYVnl3dGxCWmxuYkpWNlZNR2xkRmxUSmxaWnBlWHkxdmx2ZkpCbVZjK2JtaG9hS0ZYcTRiV1A3emFOblJvMkxXaFM4TUJqYTl1RFQwYmV1cER0QytkU3NleUhwTktCK2FWVmZXcEduUjJtdXFFTmFONTJaRGxXVUVuYVVWYXNoS3RXSm5XckVJYlZtVTFWcWN0YTdBbWE3RTI3VmlIZFZtUDlkbUE5blJnUXpxeUVaM1ltRTNZbE0zNGxzMTFKcmRrSzdabUc3Wmx1N0lhbmRtZUhkaVJuZGlaWGRpVjNkaWRQZGl6YkZEYXNoZDdzdy83OGpQMlkzKzY4SE1PNEVDNmNoRGQ2TTR2Nk1IQkhFSlBEdVdYSE1iaEhNR1I5T0lvZXRPSHZoek5NUnhMUDQ2alA4Y3pnQk00a1lHY3hOOFl4TW1jd3FtY3hxODRuVE00azdQNE5ZTTVteUdjdzFDR2NTN0RPWThSbksrSitZYmZjQ0cvMVhQNkhiL25EM3BHRjNNSmwrcEpYYzRWWE1sVmpPUnEvcVRuZGkzWGNUMS81Z1k5d1ZHTTVrWnU0bVp1NGEvY3ltMk00WGJ1NEU3dTRtN3UwUlArTy85Z0hPTzVsd25jeDBUK3lmMDh3SU04eE1OTVpncVBNSlZwUE1wMEh1TnhadWhFUE1sTW50SzVtTVV6UEt2VDhaek94UXM2R1hPWXE5UHdrazdISzd6S2E3ek9HL3lMTjNtTHQzVmV4dW0vOHk3djhUNGY4S0hHTHZtM1R0QjhQbUVoaTFqTXAzekc1eXpoQzc3VWlmcWFwWHpIOXl6VHlTcWxvVFFwVGN0eXBWbHBYcFl2Sytpc3JWaGFscFZLcTdKeWFWMVdLVzNLNm1XTnNtWlpxMnhVMWk3dGRCTFhMZXV6UUNlcTJmOTZzUDRQL3JTcy8xaHBrWDhvbTlUTXM5SmU3OFZLSjcwM1dPbW85NWFtYVNUYUdKUDAzczQwb1VSSFV4WVFuVTFUUyt4bk5mMWpmNlArM1YyczNoWnhvTlViSTdwYXZVbmlJTlBFRTkyTTVucnZia29Cb29jcEQ0aURUY2xBSEdMMXRvbWVwclFnRHJmNlRjUVJwZ1FoampSbENkSExsQ3JFVWFaOElYcWJrb2JvWTlUdm82OVIvMytQTnVVUWNZd3BrWWgrcG13aWpqT2xGTkhmbEZmRThhYmtJZ2FZTW93NHdhamY5NG1tWENNR21oS09PTW1vejJpUUtmV0lrMDM1UjV4aTFHZDlxbEdmM1dsRy9UN1BNT3J6UE5PVW1NUlpSajBiZzAwcFNweHQxTE0weEpTc3hGQlR4aExEVEdsTEREZmxMakhDYWx1SUMwMVpURnhrU21YaVlsTStFNWVZa3BxNHlwVFp4RWhqTzcxZmJhVisvOWNiOVR6ZVlNcDJZcFFwNVluUnByd25ialFsUDNHVDZRNGdiamJkQnNRdHBudUJ1TTEwUXhCalRIY0ZjYnZwMWlEdU1QYlUrNTFXNnJPNHgwbzlEMk5OdHdzeHpuVFBFT05OTnc0eHdYVDNFQk5OdHhCeHYxSG43QUdqenRtRFJwMnpoMHkzRmZHdzZkNGlKaHQxL3FZWWRmNm1HblgrcGhsMS9xWWJkZjRlTTkxNXhPTkduY1VaUnAzRnA0dzZpMDhiZFJabm1XNUo0aG5UZlVrOGE3bzVpZGxHbmRjWGpUcXZjNHc2cjNPTk9xOHZHWFZlWHpicXZMNWkxSGw5MWFqeitwcFI1L1Yxbzg3ckc2WjdtbmpUcUxQN2xsRm45MjJqenU0N1JwM2RkNDA2dSs4WmRYYmZOK3JzZm1EVTJmM1FxTE1icGk1QWZHVFVPWjV2MURuKzJLaHp2TUNvYy95SlVlZDRvYWxIRUl0TWpZSlliTlQ1L3RTbzgvMlpVZWY3YzFQeklKWVlkZGEvTU9xc2YyblVXZi9LMUZDSXI0MDY5MHVOT3ZmZm1Qb0w4YTFSTStBN1U2Y2h2amRxSGl3ejlSelZBbFBqSVl1cCs1Qk5UQzJJYkdycVErUnlwbVpFTmpOMUpMSzVxUzJSeTV0NkU3bUNxVUdSTFV4ZGlteGxhbFhreXFaK1JiWTJOUzF5RlZQbkl0dVkyaGU1cXFtSGthdVpHaG01dXFtYmtXMU5MWTFjdzlUWHlEVk56WTFjeTlUaHlMVk5iWTVzWitwMTVEcW1oa2V1YStwNjVIcW0xa2V1YitwLzVBYW1Ka2kyTjNWQ3NvT3BIWklibW5vaTJkSFVHTW1OVE4yUjdHUnFrZVRHcGo1SmJtcHFsdVJtcG81SmJtNXFtK1FXcHQ1SmJtbHFvT1EycGk1S2JtdHFwZVIycG41S2RqWTFWWEo3VTJjbGR6QzFTbkpIVThja2R6STFXbkpuVTdjbGR6RzFYSEpYVTk4bGR6TTFYM0ozVXdjbTl6QzFZWEpQVXk4bTl6STFaSEp2VTFjbTl6RzFabkpmVTM4bXU1cWFOSG1RcVZPVDNVenRtdXh1NnRsa0QxUGpKZzgyZFcveUVGTUxKM3VhK2poNXFLbVprNGVaT2pwNXVLbXRrMGVZZWp0NXBLbkJrNzFNWFo3c2JXcjFaQjlUdnlmN21wbytlYXlwODVQOVRPMmY3Ry9hQThqalRSc0JPY0MwRzVBRFRWc0NlWkpwWHlBSG1UWUhjckJwaHlEUE5tMFQ1QkRUWGtHZVk5b3d5S0dtWFlNY1p0bzZ5SE5OK3djNTNMU0prT2VaZGhKeWhHazdJYzgzN1Nua0JhYU5oYnpVR3MvVlpkWjQzaTQzN1RQa0ZhYk5ocnpTdE9PUUkwM2JEbm1OYWU4aHI3VmF3UE02cTRHWG8weGJFVG5hdEIrUk41azJKWEtNYVdjaTd6QnRUK1JkcGoyS3ZOdTBVWkgzbUhZcmNxeHB5eUxIbWZZdGNyeHA4eUx2TmUxZzVBVFROa2JlWjlyTHlJbW1EWTJjWk5yVnlNbW1yWTJjWXRyZnlFY001WHRPdFJycE9jMUt6ZmhIcldoSHlPbFdhdDQvWnFYbS9lTldhdDdQc0xyZDVSTldhdDQvYWFYbS9Vd3JOZTluV2FsNS80d1Y3UVg1ckJYdEJUbmJpdmFDZk01S3ZST2V0MUx2aEJlczFEdGhqcFY2Sjh5MVV1K0UrVlpxOWkrd1V2TitvWldhOTR1czFMeGZiS1ZtN1JJck5mdS9zRkt6LzBzck5mdS9zbEt6ZjZscDEyWGUxc2FDL3dCL0lERGNBQUI0bkx5OUNaZ2N4WGt3M0ZYVjkzVDNURS9QVE0reE16dkh6c3plMSt6TzdFcmFTN3U2N3dNSlNTQldpRk1nekdHREVTQ3R3SUNRQVFNTzJBNFlMUksySHgvZ0E0TWRiR0JCK0NBRTI1K2RMNG5qZkdGdDU3Sng4ajhoMzIvSENkUDY2K2llblYyMEFpZmYvNEcydTdxbnU3cnFyYXIzZnQvaUVNZWRlUlBOb0NZdXd5M25ObkVjeUEyRFlpY29Ga1RKQUg1QWpsSXVLNGJOVUtTVUtRZjdPd0hLNU16U01LZ01vOG93c0ZQQWpvaVNHTEVqZHFrM1lvc1FzSWQ3eS8xbVh3RWRlRUgxaTBKUE1kbHZXcmFpUzBwaXZYYWgzelQ5TUxmM0l0Qi90ek02dmlFMG1kVUNocW5Cc0Y5UGltSU9RY0Q3L1A4c1dFQThyenFBSDA2Wkpwak43aC9vSFBVclNpQzBvbGlLK3BzTDBQUTdvMzR6Q2k1b2FTODdFK0EydnEvZnFnd3Y4VUhJdzFUVHBwdVFiRXArRURTV083OERUN09IVFQrWThac2M3aWIrNDlBZDhDTE94aGU0czdqSFdURmtDNUZHRU9rZEFlVUtLUGVoRDZ0eHhUbnZWMnJjVWdGQVBCSTFrVWM4ZUZtQk94U2dPa3YrUVFuRjFDb0NDQ0lJRVhoVGpYRzF1c2ZnaTF5QzR4UmNUeUVyS1lCV3J3QVJnNmFpNEcrVSs0cXdBNmlLRlZlZDN6bS9WMk1oRlVqTzcxUjhEUlNnNEc4cTRBaVFGWHgyL2gyZnJaanEvTHZ6NzJvTTM1ZWQvNWU4aHovRDQvR2JRYWZSQ0pmanVybGwzR3FPRXpKNCtFdzhRSm5lU0VqTVpiekJveU5TN28yRVRRT2diS0VQOXhBL0lBR3hEZUNyOGxKQUhyY3pwRnlpcjZKMGRhYWxERUM1QmN3WXdhRGhqSklqSk1lR0lDai92WTViTWt6YTZieWlQa2lmSUlldk9WT2tDTWh4Rkw4THAzQWQrSVdnVWFVL1FJN1d4ZUc3WjBoZmh5a0VYbEhJSXczQkdYYmlCTnF2bDlBbzU4TWoxTTROY2l0eHozREhjTC93bE1NOXdQTVNGL0JsSitsTnNUQU1Jbmd5OXBieHBFd0JpWGF4MkQrTU8yV0hEWkNwdndCblhxd0tRdlZGZGp6MVU1Ny82U2w2UERueG9WWVpoZU55WnMrQkN6SnlQSXprMWh2L1BKUUFJTkZNRGtDYks0L1dLbml4aXBaNk5lQmo5Y2hndnk4ZVFHcHJlMGVyRHdYaXZ2SVNBQlBoMFZBaUVSb05KK1pLN2x3NTgyMDhmcU5jbXN6RFloNFZpajJpaEFRRE5BSWtSa2J3OGxwS2V0VlhSSlV5ZWtHMG5ILzlzR3FGbEVQT3YxcWEvbW9YVEp0dnZ5M0pRQThDMlBFZEhmd21pRm9CTWdFd0hhZUZiekwrMVBrbFhuaDMzc1VIRFZFQTltdkczRGZITUZRNUlkc0ZKTEZRc1lxRk1wNzJLU0Q2OFNmOW9GSnV4RXRpQlA5MUVXaDJnb3BWcnZSRWJFdElZYlJnUlNRUm5wR2x0OTgyMDdEclZWMExQcWFIZWNPNDZMTXFMSDdmSC9oZUFmcWUvTGtwWFhLSkdJMHF3dTFLeUZJL0RQeEJYZjlPSnd6SW8veGRkeXEyQlpKL2FqVHhjV2drd2lqd0JTM3cxald5Y3MxdkFyN1BaNUgvZi82NXBtaFJEUVJwVjZxdEtHKzhocnVpaVJ3SGFmdWZSMXN4L0xySUNzT0Qyd25MbFhJVHhVWUdCaU5CWUR4dU5ybHVxcmh6Z3VJeUVUM3FYTHI2MkxMVnUrSnQ1UnZCeFk4Tm4yY2hQUkZCZ1RYbE81My9jV2xYUHJKaCtFN1FkV2x2RUVYaUJnd3ZxWHhpVndiTVZLc2Q3WlZQUFBPRjFZLzBYdE4xZEwwZUVYVjk3QVBOZTl1bWhoLzYxTzFkZTl1bnhqY2J1aERSTDlxNGVyZk9rN0dGZEE1UDRyRU5jQTBZN1BqckVZNE81d2dJa21sYk41MGg5L0QzZUF0RVU0b0JET1hnWHdQK2V3OVA3SVp3OXdROW9sRjgvYWp6ZUV6MTNRYTBleC8rbnNON1ArRWpRVGUxYjVIMWdzY1ZMTDVXK2lwbDh2a2l2aHVLTUhoQjkxbVJ3K1BLYlRrSTRjRXQ3RmhlQThDYU1qdHFJV1g5ckErZE9uVG9GTHB5djRMQ01ZVTJsRFRkK2FlVUN0SzExN1ljQk1PMTk4cHJxdnVDY1hVajZMd0d2NG5mSDN6aFpsL2NSQ3J0Q3U5MWpYUDc4VzFNajRZd1BWckhYY2R4K2JCRUJuTVlWa3E5ZHFSTXBtT2gyRmV1bEJqaE1VQXhRb1lYajNqT0FHRjhNMHhJRWNVQUdDa1VhVGZ4M2U2ZVNxK2R4WmVZWkVWS0ZCTDEvZThFL1I2d3dIVm1lUlVFd1Z4SG5HL09kdTZKcXpKcWhDdkxmTWU0VDlkMzczNmtHSmphdnRHbmlobTdJUWRVVVJSNWFKazl1YkZ1bStkRlMwL21ZQzZCaEUvdTJhYXB2cWkyYW1NTndhU1NrbWpINUV6T1F4M0xBUUFyeTdHdVFnaEVBNGV5a29weUhlVzFDSlRiNDA4ZHZYNTBRdWkrOHJvSEF0RUcySlF3UWlMQUgrSURlMVoxcElBQ2tTQURtTy9QQXZEZG5CQ05LWHlxaG9JcWwzZHFNVVBRK204ZTlSQVVtNHN2WTN3Nmd1ZEhqczFGYjBaWUlJelh2SWp4QUlGdFh4bFR3RXE1TjRXbjVBdnZDTUk3TDlCai9BeUhLUittZjVnS0hpRlU3L0pmWTBvRTBMRDNBRDQ2RHpwVlFJZ2hvWWEzWThJQWxBTy93ZGlkcTgzUEdYZCtkaTJPeTYxQzFrOUdVd3hoUWp4SGl3dVFXd1JwOTZreDlkZVhZL0twSEptajBKd0tGa1hRem44cXltOE9LQUNUbmRzaEk5d0k4RXJjWGErc2pjWDVNRUtZSEZKRWlWY1B3WW1ZamxJb1JVSitNSzlsRXFGbTl4d25ITVB4NDNWbFZOK2M2cmNJdFQ5K0QvbjkyUEc2OGtJNGxjNUI4eXFFci9BenRxV1JUSGNDS3B2eEZZdkI2c2JqaEwzQUg4TkUrOWc5Q3NEamVKeTBUMWtjV0hjY0k3L2Zjdy9oUCs0NVJ0cDY3RjZYOTZpSFYrTUNlTTJIVk1UdWlZanpXdFU4VGNDQ0s4Uk5PTUVqL0Y5OUU1eU94OGtQeDJoRHAzbFJzZDQ5aDlyUEFadnVIaktWR1dBSXd6V0NsLzJpUU1GVCtnVHRGeGt2NVFrSkxRNk1qNG44TkhtSUFlSnh5YUswOUFWS1MwbDdjR3Y2R1dMQlRlbkZhS2tUZno5WGEyVUlNOHFoUmhUcEhRYm8rVTkxOWdwdmZlV3JiL0g4VzEvZHZWVlRmRkY5eGZwSHZzdnozMzBFNDhSU2w2SWkrRm44R2FDZEdyaDdMWHZ1SzI4SmVSR3ZkaUdOY1NaN2RzVnR2WGdCUVA2cmFwQXNORXdlejd4SVlTUnpKcGZrOW5KWGNDYzV6aHFtM0YyMmtDY2NJQ2xVNmhpOVNuOWZGK2dqdURLSEMrUkVXUDlRR1BQOWZpZ215Y0FTekZvS013RDN6eFhJb1JOZzZCTHVzUkhrUUlod2svUVZ3bkgxRmQ1MVZSZ0N1QW5sL2lLR1RpbVR3bHhPT0pTQzRWblFWRzdDLzhCTVU2VUovMHZYY1pGZnhYUWx1REtmQTViVWtYbzYxU0dHbXBwV0IwRWFZUHlMR2N3MG96TlQ3SlFtSEd1dStoOUFsWitXZlNEd1cvQ2ZRUU96cktSK1FEbFV0NFR2V1FrTE5DcDVDOHlZQlYrS01MVmNnbnk4cVlHZEhtUE02RElCenhBZTRYRkVhRGllQVNBZEcrRlJTNXN3alhqZTE1MCszZHdQSUtOMDBEdUQvdWJUNlc2d0FzcXlVS3Irclc0R2pTeXVOSkVsdmZKS3BuNGFOOEpvK0ZRb0RLTG1KNU9ZaHdzYTg5ZFZ3NEoxbFhNQkdFbUNFaG02ZWJPNjhTWGR3dTA5Z2I4eGZ6a0psbjZHZlBoTndsb3ZXRWZOQzc1UXY2WnllTXlZK0VCNDBMN0ZrVENhcGh6K3pNSXZ2L09kdXVVRGJwMGxqVGpEVVFIQ2s1TStBa2M0Y2pFbkpCRXNSc1d2UTNobU85OTB2azdscjMwUUMyTmdyd3I3RmNWNUZxd2hDTUk1Q1JVRlhJekZMdEtuV2J3T0crbXNMMkMrQWMvakxCYnJDUFhIczN3WUZBQVRmc2prNzdmSjVLY3l6cGVkTDVwZC9WMm04NlVBU3ZSbDRjbHNYd0k1R1RieWFjeXBOeWNTUitDK1ZDYVRxcDVJRFhiRllsMkQ0RTBxd3REZXpDWmFFdmdmNllwQVpXbldoaFRYaGpGQ1A1SEdzcDJFZ2xIaEE3Y0ZNeGk0VlZoZXptQ21CUlF3TytaSlpSZzc1THhsaXJaVTk1S0dCTUIyMmpwd0htbWRjMStRdERORVdoa0tPRjhNQkNra2cwWTNFVXJ3djB5OGMwbXExdGdsblhIRWdXVDE4U1JtRTdKSmVISFN5ZUlsbGZZYWYyMkl0RHhCWUlmSFlRYWw4V3pJRVR3R01nd0hTT1RQeEZNQnQ3Vmk0blZlTnplc1R1QkNjTktaeHF0d0ZLKzdTU1l0UWlZMU9qZlY4WkZ2TWtoQ1Q2QXN0MUFKa0R5Tno5V2Z6MmNjV1c4NGhzL2N0cEc1T3M1TmNCdTRDL0hvTG9MNWdTZjcwc1hSQnViSnZvV2NpL1B3MDBRR3JrRTdUeDh0OVBjd0tUaThLQWNNV3F1anJOV1RCSWowQUpsc1BFM1JGWVBBTG04OG5EZURCc1ZqK0RDOUdHL3NaRndvTUNuWjRXcFNNcEd5S1p4Z0Z3UGYzNUdmeUIrVisyZlJOQjY2TUo1clJTejc0MUZ6UjZ0a0U0cFhxbzBaR3lmN1hRVTBXcDFpdmZuSkRqV3U3dmdKdmFqK0kvdldsK2FkOEVSeWgyeW5vdXgwRyt3Y2Rmc0pGcHk1dXZiMWM4UGNLbTR6a3pROXhvbWdFM2RFUFBSQ3g4dlRYTEFSa25KWVhGdTgvWkRUMVVuQ2k2eFpvK3AwTVRJTkF4c2JkM2JOOWZDRnMvVXJyVXdTL21idFdtVk9NK0ZCSHJvejFPMDJtRjYwdDB5bW5rV3p1TCtZQ3VOcDUzY2xFakl6QVZWTEFEcEI0V3p2N3FidXJxWTl2UWNmUUtBN0FZYXN0dDQyQzR3azJ3RjZBSEZOMmU2dWJCNDljSEQ0Z2dibkpTc1NDWUhsMmEyakJ4OXd2L0VtL2NZQWhxWllkSmRqcjAyd1NyR1FZL0lNSU1pVENUaFp5dGNUUGd6VFdycFdNT2FCWEZ1Nzh6TDkzTUV0eTMxQ0lLYjFET0dKbVVxQ1pYYVREWWJDVFFCUDBxYnh4RjJFKzdvN3Y2dWJOTFdyd1RuZG5nYXRZSncyQjNYSnNRZ3Y1ZkNUN2N0eXpzdDJGSXlHVjNiaWV1TFJ1d2lUZVhjbTUvWmlwczNsM1g2SjEzRVN6OWR1UEIvb2JDQ2NFWkc3U3BVeTBSM2lFYThRRVkwMHQ0OHdjTU5FQXFEdHh2MndNUjZ0c0g2NXVoN1NIeEVhallYbnRyR0IydlpjUGgxc0JDRDFNVlh4OGJJV3o2V2pwc3hIWWtvZzBZcFhRa0x6WGVnTEFibDNOWVNyZTJVUWpxbjkyeUhjM3U5cnlIOER2MCtRMHpmeWlVeDFOSk40UlpSanZtQjZ4ZjZ4bE8yTEJYaGZPTE45Zkd4WDF0UVBtbkcxZk9mT25YZVcxWGdRcWtzZXZmenlSNWY0WEYyYzE4Y2l0NXpidFZndktVOUVKMzBqTkhIWGN1RC9UTGVkRTNUbTYrcU1vc3lvT25qZ3Z3OEcyRUNwdWpLandDZnh3Zm5zSHc0V3dzL2dDZkFFL0FWbmNTMVUyK29IakN1djZZa0JFV1ZNajluQUVqb1IrL3JBZXNXU1pxZ1VoVmVrRHk3SFdPcEtVbEpFVVZlbkZmaTNDRWt6WlAwZXIvNHp4WnFUYXNBWlVwUUQwS0xvWUZvTjhGREJvb2FMajU3QWRBUnhNZHlLSmJnZHBYQU96T2ZZeXhVcVFJRitSZ2lTakowdENLR2FqclNmMG1vd09UVUZLdysxZGRlNG0xV0hTdy9paGxTbkdCTkUrY3pKb0VHcHdoUnVNa3hQT1RjOVdEcThxc1kwZGJjOWhIc0dicWdwVHJkU3ZFTXhHRmZYWGorR1doUEJuOERsL2J5V0ZVdjlPWEt2MWl4eUUxQWtXNWt2aHhDdDNnSTV4S2I0cy9idHA2ZW1BRmRyTEdaRGRmVnppdExaalo0OWR1eFpoSTlMSzdxdHF2cnl1ZlozdGVQMmt6NTZsWXhPT2JOZUIzQlZ6cXp5T1R4ZW5UZU1zUnJ3TWN5cnNhZ1Fxd0Z0eFpFK0FqU1BkL3BiU3VjRFhDdVdlNWR4QjFpUDUvVk9JRFNoMWpHeXBqekNMM2hFb1Zhd0NEa00rekZxREpzcFJtNUdZSmtzc240czcxREp4N05UWUNvNXlTZ0g3ZnptcmhXK1czMHJ1Z2JXQXJCMm9ITkNPNnhOZE5JTFoyT3lVQmdzRk1EZUJuek81KzkwdXJNZDREU2ZTSUpnSXBqNE1ZOGdEeUZRSlBBamw0aUFVWHlhZEZtQVBXQ2d2WDJBVkVwcTYyOXI2MmZsN3dCUzZXQUJBRkxwWUFFVDI0N3NCUmZEMEdET2VaSHlGY3NMb1NzUmhBSVNrWEN0cEZoRzlRazYzeTlxcVhDdXJ2dzRHc2Q4WjQ1YnkxM09mWkJnSG94U3BCNEN3RXFaYXJsS0RKTmdEQklTY3owRlBDT0tPZkpRa2Q3R3M4ckdUMVo2eWtSY3A1T002ZGZ3WTBzSlBjSHNLbjZGNk5TbzFnMmZDREpxOUNRNnBsbC94RkJYUENEanB1bmFVOXNWRUhwZHM0Q3k0MHMrSFRkV2VtQ2x1dkl5Z2Q5NlowY3BrdVg5cXJwbjQrQXFuZy80K1ZVRG0vYXFxcC9QaHZzNjd0ektYN29iN2pnUWE3SEQ1Ni9TNG1MUDRKSnVNYTZ0UEM5c3Q4UU83T2pDdFNlQ0FBU2JmT01wUklwOGZwc2FONE14MzdZbW5vd0RTazJvcDRCdnovcmRyMjlYMU96bGZRaEtDbCs2c2tsVnRyKytaOTBlSHhqVnp1OWE5Y1FFS2txeXZyK25kMUpUcER5YWVHSlYxL25hbWFEeEVtNnQvcElSOU9ibGY2SVplTWJsNTFkd2Erb3RMRVRmU0RoSUl0eldXMXFHS0w5UEJGK1U4eVJ1K2xhLzk1WUI4dUZNUDJxc0huVVpsZHNKQTVnZ0VtRDFNQjNiSXhpRmtCdmxaeHFEQ2RQRUpkV1pTVFFCMEpRQW8vVHNmQWFNOHVUZDVheU92ZVE5ZXFqU2FYTXhQZURmanVJZXhZUEI2L0NyVTZ3R2ZIcHBhc3JqcjEvRzVObkhKYmdzeG96ZHhOTGlyVHpTOGhwZjZVb0JVampYandsWnZtUVdDMzVBRVJKR3BCa3N4NVRDSVlhNjdVaTUwbDh5UTZCeG1EU0JIT0RLYWp6ZERrQnpDcjZkYWdhZzNYcnp4NExzakp4Y3BXbmp6c3V5OFBZWitQdXFJWjB4WkZVVTkxL3Vid0J2Z2lrbWhtSFp2ajFkL1hpcUNFQXhCUSttMjlmZjhZQXNPNTlzNFBrR3NFZVFIM0FDUUFCZitINUFGVkZ6czJnRnZ1L3NFQmdPZlpQaWxBWnVGRXNPVjFET2pPQVJJZ2pnV1ZzZ1YyN0g4QUJhZUZKbktNOFV0cW0rbzR5UkpUVytrQk4rWmdnVThoazdJK1R3TW1BdjQ0VkFMcGlZVEM3SUVHZHdDVTM2VFUycWZsYlN6SlFKdXJOd2Q3WWJtQnNQS0tIcWxCcUEyM2tBdHcrMXJpbGFZeTB0TFdOV2FLQ3BkV2c3QkZVRDdoaXZkc05QdEFhSEVYNlRYeE5vTVZmendhUUplOUpGWEFWQkRTQmkrazlMbWlhZEpnYk4wL2d1L2dBdWc0NDMvRUJYZmlUSzJ1YmhiUkMwUjJ5TTVpTncyL0EyUXowNU5Rc2o3ZVFGUFc5QmFPVlZNakpOU1FDNmNwczNaTHRkL3VVMGVoRXQ1NXE1OVpoN3VjemoyYW1xRWE5OVdnWlVvVWMwV1NtaUFjVmxZa01zdWpKN0YrWm1zcDJ3MGxjaDZBY1FLeFlHSDVKQ1JjcUhNbzJwYU5kZmdLZHpzUWxGamJRTlJYd3hkY0tPZ1cvRkovQWRvSkJibUlUZ1c4NksyR1MzR0JEQnQwUUJBNktoMUJ3Q1lYTERtUkNBMkozQmQ0cGhrTk10OVd1RUhYaEczYWFUWXd3ZmxLSFlTbHhKZUxnOWpLdGNHVnNSQmMvWTBWVnFUSTBNdFlPd1FtN0ZuSTNSRC9lS0l2Z2FyckkzRkdudWJXak85T0thblkza2hnVkF1TG5VVVB4ZlZoelhaOFhVWjVSSnpKUjhUYVVIeXBmL1AvQkhLSUR4TDhHN29HWmJWUUFoczlPV0g0dUhXRGowRjVLRzh3b1lOcElCZXVVSGswYXk0SGRlY1Y3QlAzR3lLek1SbXQvSWRYRWozQ2J1SXU0RDNCR3lIajBta3VFT1ZPTWd5MlFlNTh6MytIM2grOFVGdi9mblBMblpsWTNudEQ1VVRBTlRydURPVHIveStBWmprZHRnNWc5OGZycDJrNTVHNXRpS0tyZm9UODZNcTNoZ3A1ZW9VbzhlcG9pT3dmM0ZJVy9oM3h6MnBWR0syR1ZYQjdhSjZrbmptRzQyY1IyWWJoNmxsck1zWVUvTFJROXpZM3BIcnZzS2txYzJFbXE2QThKUDlCV1l1MFNLVU1rU3BabzVRbllKcytHYWxucnR5REF4U0xsQ0duN0NqbFFvWmlGeU9tR0FpNVRHVmlMRUdKZ0c1YTFsL084SXczL1haanM2SmpvNnNwS2lHSW9DMW94Nnl0SktLdXNUVTN1YWZaSWUwL0pGRVR6MjVTKzlsWXMwUVFnbEtEUTBZQjVyMTJZdHFzbmFoVmU4V0JXU0NWQ0t4c3g0YWtQYndPRUpmQ1B2WEhyRitaYzhFWms0WE9vQy9FOGhGcHJKaDF1WVd1a2hRTDQ2MFhFUithcWhZTnBEUGd2K3BYTjl3b3lJc1VSVWlrWWxLYVNuZi9IbHo1MlFCeW9JeVhKSTZieTBIM04zUlZHSlJzVk9vZnJpNERXOVlNTytXQUJrR2dwRmZMMzhsdXBwVUZyejhjajQvZU03TGpuMVU2NXUzdnVvQm1wdTVuT2dUa3N0MWJzbUxITC92N3RPMEJUVDZzMHB5ZDZqWEgzN0Q1dm8wQ1ZwMCt4MGhwdDNDU2IvSzh2QXRZM2d3eFNZZGVjelp5MnVONWxsby95N2VTZmd6VG13NE14NG9GbFhCOWVJZWZQVlJBTlhQekxJNHhiS25tN2FBQUtGdE11NHUvb2RSS2h1dlhLTzBHS1hGSHNDRnVPbzBQUTd0SGVJTE9ocmFtSUs0YWlydjV2MlZHVkVZUGtYZzZocXBsMmhJd2pmbmpjQ1JBaWprSFdtYW04WTB3eUt0WGVJZE1idTFqM2pLWUdtR1h4NWFsZDVCZE5HQXQ4UGN0K2xlSUxCczhqUUJXWWdNTFVVaTR3N0p2SjhvY2dZWnVKWlVhQVVrYm9pRUpLSTcxVUlZNDdMTm1IS0NTL3R4NHczNWRVeDQrMG5aTlYyblJad3JSTDFzcExFUEhrRW80NHlxNFRVNFpYNmlMc0crU1Q1b2xlU1JQWXllZGNyaFloL0I2c0hYeEl0VjkyaXZ6S2dyZ21GMW9pVzJ0Y3BZdzdlcjkrcW1rTGNEMFg1VWdBdWxVWG9qd3VtZXF2dUR3RkY3dXhUTGJIMnZDSy85L09DOHhkaGU2WFBhbXkwZkN2dHNBV05tS1VGYjFMbGZSanZRV0RzazlXYmdwb1ZNNkQxUHA4REM3Q2xrOVl2aGZEc0xWVkQ2dG1iK3A0djFNTUM3S1RONFBsM045ZWY5cis3dmU5K1VBdmlCNFBhM0lNTDdac2hyckxBTHVPUkhvdUl0WVR5RERHcHJFTHRITlNxTWVkTVVtK21ZWXJPRlpFc21kNmdzeUhjU0pjMnVXSStKS0J0dm5WYVlDWU5zQ3JjR2lvVFdhaGNISW1IQ29HV1NuOEx1WnpZQmVHZWlkd1NUejVpYmVZNGhRdHpHU3doY2ZrYWRiUVhzOUIyZ3NXYkw3RWVRczVUbzNjdFluVTZaU3pTbndUcHJHdmVlSFJSUjYxZmdFVzYxalFZWjExblkrTGdkWi9tQ2x3dmR6NGVrNzUrWWlJbHdoNmVPR0dxck9xaGhKeFJjMkwxN2UrcnAwa1dwaXRacWNjQXpCa0ZDNHVZUGNDQ2VSY1dzdWJrRC9RbmNKM2FtNjMrYTZaYjNReVUzcmFtcnVZVnNkaUtUZml3c3JtN3FhMzd0TU9SSmxJdDlRMUJRK0NEcldaaEtORXd2bjZpSWJHaUVNbGlVa2dBa29PN01lNkZHQ3JDdDVLWmRQSkZJWkhvM1JxMU1xbFVPbzMvUXZiV25nYkJvejlHRUVvU2dKWnR4OE4yMUZZa0ZEUytpTjhIWFZreXZpckYvVk11VDlxR1orVUFOOFl0NTlaaENlRzhCWkl3MDJ6T003alUwMms3UXhDbVI2ZHJkdWphWEprcnpUa2VRc2JEVlQ5Ujh6dzBUakF0SjlpSGo1dWRNVnArU2Jjc1o2S2J6ZHN6ZU5yTUw2VHJEQUhFNUFIUDFKd1I4ZEU1WWlXQ3dZVDFFcEcyaWNEOU5KczQ0WGtuTnRlcExZcWpjNTFvRWM5ai9ySXVKN2dRRnZQRjVpSlY4bGJZSktlY0l2bEhYVFRabEJlcHR4SzdBS01landmWFZnLzBqQU13M2dNZm9lZnFZQ1FGUUNvQ0gySG42c09Db0drSTdyNGczaEZPOURYNmc2cTI2Z0xTdVVxSG9UUjN0RTQwV1BrUTZCcFJrUWs1eHNNNUNWSmZoTlZiL1hYUE9IeUoxUFJydCtZSVBsZGZBa0pFTng5WGdJclpUaDVtczczN2VRd29NRkRLVHlpaXBvb3lFUFpuZlJxelM4eWdPekJjQ2tUK0tSUk5MTnhsN0VqWXBKWUpMRFgybTRoNFh1R3hKNXBJWk9MRlBha0hnZktqNmhzL2xrc3FDc1o4dzlydlJTVDdWZmlLR3BDZzlQdmdLQjdYV1UxNTZ5MUZjOTVzVVdKaGhKLzBneVpnUzhHZ3FnYURrdk1ycDUxUVowS2JIME9uMFFiWFBuZ1J4a0FGbzZZcnp4YVlra3NpMEVkWUZzV2tNQVVvK2UxRUJpUyt5Mlg2TE9QRjhkU2ZtNUx1a0xrV0Z2d2l1dEVYTTZFdm1BR2cwaHB0TmZqUmh0NkR3djdyZldMWDVzbkxkZzdIUk1FdlNkR1lGQmJsek1hcmJydnhzbUZGdis4MmNWY3VPU1RZNDRVVmV5RG9ldWRmOE9oU040Y2ZtWWFmMTlHOWQ0WENjanEwKzBMby93dUZPS0FHaHFPdEZSQ3hwSjNwTGhORzd0cldNdEVkOUhldTJOVFMyS0JGRFVrcnRGV3UzRFVZakF6dnFSejhjZ1BRRzlNN3hGUUc3bG5SZkQ2WVlvUDhZWitSRDJnN0xUN2RIT0gxc2hTWTgwbWNvbmFxQXZHZExFaEZZaWFmcDQrblNuQ3Juc0ZiNHN5cU9wSTB3YWtTb2ZjSEdIWDhCZ3ZheWVwb3pRUUt6Z01aRmVNYzhrZ3NwUDZnK21mMHAvNS94aStBRDdsdXZRdDhEN3Jmd3cvTXRRaTRQazdVRjZ4dlVSK0VrR3NkdUpKb0FLYXhmRCt0THU3SmMwaFJyZ0FsZ2srZDE2OGlyZ1JQcU5ST01MOTl2ZWRvSDU0WmZyRFFra0VodDJnTHJjY2xTNEU4OHlHNmdqWTFGbHE4amM5UFM1aHpnTXc3NlhMbmh4VFZsUTZveEtPT3JMa3p4TzJjaStBTFBKVUxSVURudkFJTWFnSEVvSUsvQjBEa05lZUV2OWlBMnpya3ZHcUFaTUVQOXVJNndkVUFHaWtmMklpbDFvTGYrWis0OWtKS0Ixc2hFRnhiNXF1b2p4dHlyVFYxN3JTRXhMRzFBeWhEeXRlNTNoWkpDL0E0TFNVd3dnMG9vQzlxVVQ0V0dXOS95UG42QjNwYm90c25CcWVXWC95VmtZcUZqSGdFQmJyMk92OXd5NUpWb1Z6clhoQy90VzA0ZUkwZVZWVHRwQ2dDWGczd1MzZ2ZuT0o5K29xZTdabkx1ajQ2L3ZobjcrdHRiVGx2eTVyejlZaWdHMnVIUHRTOG8rMm0rKzRjeE9mMGViMXR2QnF6eFJFSWdFOTlRcmVaVEFRdlJwd25Fd0Z2WFV2dktvQ1RvTHlsVXRsQ2FNUzhNNXcrbTdUayt0MlRlUkttbk1Fd29RVEU1a0t0RGpraUVSQWkyRmVRTWoxa0NudDBBRXY2bE5kaFBoOVdYUmxOVDROeXMvTVNKbFBUTmRIbi91cU1ibEVIZkNLZE9BL05jNUtIMDU3dWcxMVBZY2swN2ZwWFlBbVZ1ZXVEeVhyM0JHcGNndFRXOGd1VXdmanl3MVNPOFlQeVBDdFltY29weEhtTnloOTFsaU1KVDNzRE5FSTJ6TDJWRWxWeTVJZHBKZTc0cys0dm5UdVR0VEZFNWcwUjgvcTlNL3ByT2FZTit2bmZmUFdyYnduQ1cxK3RYTmtsQ0lrb0psTnhueFZHcU9XQzdvZS96L1BmZi9pUjc2Tm9oeENOcWNKcW5oZWhJQXFJQnp6NmxJOTNicU51bkpzM1VXZlQzVXo3dzQ0WUh2V1hvTmZIeXkzbHdhLytobWNmYkVnQUZBaGhzZ0psdnc1QUxNWi83NUZIaUMveUkrTkRCelhWWit0UFNRTHhESVh3b0JMN3BZSS9vRzdZb09MUEtUdUprMVVhLzQyVHFzZmRDOFBGSGNTWHY0ZGJnbUdMMXc1aEU4bE1vQjdKaUNpZU1TZ1JwZlBrQnhJeTB3Z3NkM0pZNVFKMUZTQklUL0FLNktsWXNmcHZOR0pHVjBXODRMc0RxaFBIaExDY0ZFcjVBdm1ob0FaUXNpVDI1TUEvNUhyRUVsU3Fhekh6a00rWG04QTdIaGV4UDBuMDBBSlNaT2Nya2dhQ0tyamgwOWtPWU1Vc1lHaVBPZmZtdXdGb1NZTnRWcjc2UlVZK0V1eEVlUjJHRDRqdDFNSllzWWo1d0tYY2FzejlYSXo3YUdiTS9BSUxnYkRnSHJYd251VTVxOTc1eVY3MEFwdzZnM0hTR2M2MWZiQXorTTZDbS9tOEk1emx1Yy9nTVVxYTFnTTBqTWg2aEYzQldmSWtKc0tKK3FkSHpuYlRBV2U5KzRUcEJ4d0IvaGxPczhDaUY1eUVZZmMzNkFrMHdtbVlZeVIyelNGdWtydWFXQ0k4YnhpTWYvTDErbkNCT2ZZV3NwSkw5OFJ3aWtXQTFOU1BSVkR6WU1mUXBORlh4T3hDSHlORllxd0ROWEVLaTF0VHJxY01Qcnp6djNVTG56R05uRlRoR25KenltcTNxQmZNUHBVS1V1b09wZ3F3UUJldWlIOExMeGNlakF6MHlLSlBWa3kxdmYrMmU0LzBkYW9CVmZZSlVuV0NCUURRSS93MGM2Y2hCOGcrUnc0M2szdEhWWFVmdmJRaUdJZTJSS3cxbU9mR0RHWGErZHZCUHpydkt3UUZmR1hId3dOcnRaZ3NHT1BGdHZibWNZTTRHNENydk5yeHNVN2VKUERzNGdZSkQ1NnZueTI1ZVZQbnJEZzV6L2lhSk1nd250MTlla0dNRkp4a1lQZ0JPNEczejRLZnF3OWhyRHFtQjUwcE1PMk1laG9rRWk1RldPWHkxTm53THluRDlIelV6WkJVTmUyaWJvTEk2UXZNMFREVFV2Wms3WmVvbmpTR2FVNFo0NWlWTE02RFRRTWlRaENNUWxCM3BVU1JzanNCTVA0V01relR5WXlUbUN6bCtrdVNpNG16bUIxR0hEcDV5eTBuRWRnNGNjR1JNTlQ5U0ROUjlFczNpcmVjZEJBOFBEbDVHTUxiOWlwN0Q4SERaK2pzcG5POGEyWm1LazJ1OEFGWWtNTVY0R3EyM3BIUFAzeVpaaU5kdi80Qkh0OGdMeCtldlBDd0lCeitwZW1mSVM5Z3NqWXpOVWtpKzFLbXg1ZXlPTVFJOFE2eVJLSWd3eXVDdVV3V3lXb2dycFBVQmFJVGlrUS93THpGM0xHelMyNTRWeWxTTjRTVGZwK0NWSEJ6dy9JWXVGbEZvYWpxM0NOSFpPY3VRWUd2L3dpM3VhMnpHUVNOUDIzcUJBUTdQQVUzVG02Qlg1RmxqQ05RTzVnR2hwcVFRUm5MbG0vSWlSQ3VxSVBublQvam9UTnEraDhKeGtFczlBaXh1bVZCTittUzh5TS91TEZuNmRLZUc0Rm9nQTUycTZtTnE2TUxoQS9wNHJqTXU3QzhoU25GT2FnQ1dvalB2NFNKd24zMm9nUmdIZ2FIcTVQWG5oM1YxL1EzcDlGeXJvSExjNTNVVjQ4RGZWVFdJWHlmYTY4d3FNaGE1aXJsWUUzdFdmRUtlU2EvOXRSc0dUVUh3eWRRZENEaHk4ZEtIeUtoS0psVUxzTkRYYmdKckc4LzlzUHFKNWhWNHlwWC8vekp2b2MySjM1d1EvK3Q0L2pSblBOejFualU0c05vUnhlaS9uUVdzOGpETi9UMmI0b0xQREJCcE90T29EcGpybzNpVFlCNU5jeXhYYlh1OHhzYnZyazJWOEFQajk3b3RMcndjbjNudm92WFRwRktQVm5tR2J3VVVJZEp6MkJ2aHoyYkYyVnkwVFBPOGZoNDNMbGJGZVNBbWdhZFRXL2c4Vzd1Yk1OejVrZjV0alFHdXdqK0dwVHdCSGxOQ0ZtcTgvRjhCMGIvSHcvRzQ4R1ArODMySWppb0t5RTYvaS9SOFNjeXhkWUZWbzA2UzN1K3RwYXBzYWhPOHZBRGFtQ1N5a1NkVEliRVhlME0xK04vY0lxNlZSdUFITmVkSmtWeUFOY3g2UUxzMnFiRi9JSnZ4VHBRa3pBRUxjU0xmVTBhTC9nc0xJd0xLS2p4dktUb2twaStPZmV0MzROWmo2dWtwMG4yMHZtUERVcENKQ1ozVDYydXVmVUE2UE1aeFhCcld2QURFTlFWeVY5SktaYWtJSDFGbS9SWDlmWURqUnZBRXZwbTdsNjh3dWNjMlltTFFiMnhvTTVkbDFvSVhGV25wMWFwQXhpcUs5dlV6NW9GSlBUM2xWSk1qWmh5WlhlcUFjQ2ZJQStVOFlLemllS09WRTQxTDB6Ykg0UmZxOWFDVmVGVXphR1VPWU15L1ZHMU11ZjVXenRjNXpNRlhaZXVIT2p0blBuZ0pnUTNkRmV1a0hSRERCdmk0YkllQUhyTEtnaUdqZzJCWXJ0dTZ1VWpJZy9TYzNZR1lzVnNwbnFzTWQzOXNFOGtYaTVHRis2U3A3SWFjWlhicnFWb254R05JQmlSUXExMzdKdEJONjI4L0NOTklTa01TY2dpZ2pFZW12cFlRRTE4WU0vRTBOREUrUWN6U2dEWERmZ1lCTFdZWVVKREc3a1JiaDIzazNBalZDSEpYQThyUlRkNmgxbjZpUXVWbENWS1QrcEgya09RVXlSRTlEcVNYZkVNK290SXlUQUxkRnZKS3lBVVYvSlA5NjZtdnJaV2Y3QTNDSUpmVWV3ZnhFS2xJTENlVVd3ZFA5WksySU9XWjByckNIT3l6cnByRVNrYWNBRzF6VWY0OGVabkt1dUlLTDB1YVBXSFN0YWZLUDRicko1Z3YvVXROUkJRT3RRRWxnbGFudTJtUE00YTY0M0Y1R3dYSHRPVXAyamcyZ2tHek5mUHp2ZFFjcktnRnJaMDV4VHp6STdsdW5FSFFhL25hdTNObzUxR2JaTGhLY1RmdUhyTjlRZy95WC95NHNsUEMwU1U4MllYc1hGN252VU9NVks5T1orZHVIM2JsUkRzMzMwN0xYLzRUZ0NQWDMvN25NMks5R3ZNN2RlS1A2eGZ1ZnhjVjl3Z1NVeWVwUGZicXlybVkvanB5elo4SkNmSzBhaVV1SFRweHB2UnV6cm12dStROHhuY01mb3FpZnJCQzJUczVqc0IyRHloUlRWSjZ4dStkRGRlSXk0dWZkbkZwWlhGOVRNZ2l6R2xXY01QWWJQaWxWTTBBR05SSlkxVGxTUVRqTHFOL0NmaXpHYnNVMDFKbEowVGk4ZkpWVThpSlFTV013LytYN3lJejVwbFNjNmJNaDRIaWVxTnZ3Ly9pVXR5TGR3WWR6NTNDWGVRdTVIeWJvUlRwNmlkYUhCb0lWenJBYkVkTXVjOWtjamlQZFRCb0p5Q1VnL1ZYL2FVQzVpMVoyNEhQWE8zeXdXaHdCSXlrRElOM1NiUnp4V3ZBSCtxbXJ3UCtPejlFekNDZkVLZytPVE9rUlhpMzM3c0d6K0JjSm56ekhYVEtuL3Z0ZlFJOW5iZFBHSUVKTnZmdm5QTTFBVzlJU2FFWW5kSGxqWnF1aERTL2Nrd0ZzVjkwVEN2YXM3bkJpNlAyY1hLMG12aWthNXJ0V0tUWWhlYTFEenZONUJzR0R6NEdGUzBSTWxNS1EyUTkyZjd6TnpJOXBIRGd3Y1BBZUd4bmIxTG5COHEyOWFzdVZhblI5amZsZE5RcEFHL0dSdmYzbXpZc3M4WS9GRFdEb3FZZ2RNZ1V1d0dRd3RMcXRhdzlKVGUzdDF6dm1WMjlwVjJmc3pVQXBtTVptUmFKUUZqWS96bnJZRlpOSWxwVHc1TFhnelhkYUtpQWFtUXdMVHgxTm1hMElXSWJZWXd3UEx1TGN3Q21FVDVnY2pLeHV2RXlyaU1KU1hjbVRyYUEzL1lzemEwcmlXL05wMzBLY0pGbFlGZEFvSkxXbG9HUUNBTi9IQ044OTN5aFFJUGw3WEVXM1d6emU1ZGJhMXVTUTJGN01GcktUNm5uZ1RPMTBiSVZDTUh3TUdFendZZ2JGZ21JRDdNS0FsaENrRVFoZENHQ241MjBsUlIrakJNSWdpalVCZkJCYUxDWGpFazU1U2tPYmpEZEEybUdiV2dxbGMzYm40S0pia0V0NXhZNmZxWkU5dFoxRFFTY1FnaVVkYVlLRmZZQ3Bzblp4QTFZS1pZUUpPam1HK21lVFc4d3BmVEpMZ3RiZm94amwrK0diaFN4ZWJsRjB5RmVGVXdKTmdxOHBORHBIRkQrSTF4OHVvNEx0eVJvMkY1U2F0Qk1xTlM4KzJibVNpeDdYWWlTdmdKL3lXN3NlR2svVVQrV2Y2K1pSOXdqbzZpOUFLNVI5U0NrTWc5TnoreFFPNFpmbGRYUVpVMWNzdEhQSGxIdStGakFucnk1c25ieUt0N0QvUFNZZWZGZWEvUWdqY3ZuMGV2dWJMY2FtNnkxaHZLYlorck40VXVXTWo2SVhHdG84dDhoQ3BseWJOZEJKMUlZdGd1ZHRJUWxFb1ozK2t0RTMvTVJvQlUxdE5ORXhjZUNVSGRrS2lBOXlISjYraHRDTjEyb1hyaElmaThFTnBXVlBELzIwS3FieWlBWkNrUVdyT1dsd1JGbFdTb0QwbkNFVlZNWTA1UkV0S1M0RThXSllNUEJNUlE0ZjNJZjg3dmdyeSsyYkkyNjN4ZUg5cXRtb0lpdHJaQ1lqY3cxZDFEa3RtdldvVUF2b2FCZ3VGUGlwcVVUaHVDU0huSU01aUg1akM4OGxoSzJjSmQrdjdHSDR1K1dUSmRsOVppWWlUS0V4S1JocVc1RVYzakQza2k3Nm93YXpjd0pPR24wWU5Ya3hDWWlZRXRId3BCVFNPUWk1KzRIRjE5dnpOZUMrcmFlalZ3L0xqaGxvYTJISUR3eWsxR0VJR0FSb0s4MW41UmJrdHFNVm1TVkRNcElGTVQvYnJ6UlV1UEdid1dhaHZXeVIzZDRNMjFrTHY2UVlRL3R2SzZYUFlqdXlrQUx6c0swUU1INnNMUk5vWDhtaWxkdDNYTEI1U0FqcjhoYmlnUGJ2anI5UElRcmwyTFNiN09rR2FnOEoyNkpFUmpzcGJlMDYvcnlOWW1QdUQ2Rjd5RVhrVkxhQ1FkeWZYVFY2QWVxelRVcnlDR2tTdHlFdXQxMFNxRktUSEN6RUJmb2Q1bmF1NWV5U0wreld4UjBjWDBXVXUvSjN6SCtkYXUyOFBIL1daU1hOa0RqL2VzUUxkVkQwVXl5TDZNeHQ3bVRUKzhZb08xOFRMb1hlNlBnelJ6OXlHcUFUaXBCY0MyS3lDOFloc00rS3MvS1kwQU1OWlRTa1doZXBlY01nbDJNVlB5dlpzdXcwOXNlRUR5N2tqSHE3K05wdUNVcTFKZ3VwTHIwRWJ1U3U1NjdoVDNaZTViR09PVjZZb2drNlNmSkpLb2xHbWlFS0s0SnA0eTVFekZBYkt3L0lCSUNJM3VWUXFTUlVSQ0tUQlhUSW9sWEl0ZExMQTRMN0lVaVN4R2Z4bkcwck5BalVPVmlGMmhtcndpSnNRa2JRVmRva1JEUjJvaGsyd0V2NGJuWHlPZ1REWStTY1hGR09sL0ZFVWZRTDBCT1l5eHZONGFsOFhRY0l2dTc3RkUvLzZMQTZMVjQ5ZGJoa09pakNrTXdLMlFBcjBJK0xRZEl0QkR2azI5dmdEaVEyS0xLT1R6aWk0TTllTlpZc3NKUWJEalBpRXNoUkFLK0hvMys4SzY2Q3lKeWJZVzZram43bFNqYXVkNFB3Lzgra2dTOVBzRU1aUHFIOVlpUW5UNThxZ1EwWWI3VXhsUjhQV0Q1SWp1QjN6LytNUmVzc3ozc3VQNExnaDNqZFBqMDFqQTlKZGtwTGZzN2pRRFNySlQ5M2R1U2ltOHY5dlBOelRRazVMYTFPblhPNU5Ld096YzNhSWp1ZVQzS2ZlcVlWTkVrVUVOSTRmUVBWRElaaFhnUzYwUk1PWkpHN3BQdGZXbEZnK0FOaGhCWWpDc0NFbEY0b1UxUWUxaVJXbnp0NDNxRmxTSEovS3k3UnNjYXJkNG43WXNFRmltK1hpcmZXalFaOHY1aVdFVld2cG9tMzlUcmRGN0Q0TkRYcXZ4MGZQSklYSEZhZTRROXhIdVkzZ09vVTVpMFI1eXcrUWxsNWg0WVRrdTYyRGxpbDRZZmM0YXBvSlRwWC91R2R2VHZPRkZWS3VIQ1ZvSXp6V0NlRVpjUjdsRzl2Z3dGREMvTVFKS2hEK2gwVWhkb0dSSDBFd3JGdUVGQy9RM1o1b0hpT1JxR1JuZGhCMWgzb3lqOU91cU1OaDhXOE9RcEw0ZVFnbFRUeGRBU0U4Ykp1ak1Ya3ZXMjdVSVQ1YitsalIrTlJUUTB4MUNIR214Yk9oNGNZbGdJVnU4elIrQmxyQ2tlRjhvRy9OVjl4L1hEQWhmdzFJblhDMXA5eGsyUUsvellCdzhrVittQXI2ZEtqUTdzdDI2WmVuZGdpOW9qQzdyUWtCSW1jN3BTNHA5QUsrS1M4Q29WVlFrY3pSUG1aT2hWdHJnb0RuRVpJQjBNQ2VMNWxqZXVkQnFTdnBCWC9PTUhnWWgvMHh6SC9Bbm13SUJJNXMwd3JJY05wSk5tc3ZYdll4NnNWUnpIcmNiYzlUVUV3T3Y2Sm92N2dqTjlTSlI1WlNmYUExY053Q1JzaTgyZGI3QnVMOW1qeGdtK29GQ25ta0tDcFR2YmdRNUlaeVIrb2wrb3QvTW1FU2x0YzZ3UmFNUndnMG4yMzI4UCtaRGlRLzNLYnpVcExlMUI0VmRBSUtHN2Y1ZG4reERNR1dJdHJGVkR3SFZ4dWdHM2xYc0I3WUt6T3B6Wm51SGxwTjR1ZTl3WGdoM0hZYmhLcy9EMDlWRG1nbG5NUHFEemFIT0ZnUUhCbk55ekJaa2lBVXlqT2hUZkVBRmdJZng5YjZoWUR0RUxaMmhabWdaMDFpc2Q3N1h0Z1NBcGExZ0VBVDFhY01DQUhQNFNVdlhzOTBOZkxCdGRCTHNjemlDVUpZNDMvVkhHQi9vK1prWDYrS0dYYXNNV2lRZnpGeTRzQ3Z0UGJSSVRwaTBxN1B3SG5XK3VIaGVtUHEyTkw0UGY2S0ZiYWlYT00vdDV1T3Q1V2thNTE2ay9uV0w1SnF4M3FNVjhDOFh5VGt6ZVk3V2dkK2RQZTFNOWQvZW85bno4a0hZaTB1OGkwcTBpd3F0YnQydjRMcUh1UUNOL01lTW93RkRLWWdSRHFibk9WZWZNVDhPajdydm9xSFJVMTgvZFdSaTRnZzdQVWFNMG95SXV3WDRyZEh4OFNNbnYzN3lDRHM1ZnpmdloxcWdZL0t5Ky8wTThUY1FzcDJ3YnhqMnBtRElnR2l1TVozUU9nY2JEN25kZFcwNWNtcjN4bzhlWExMazRFY2Z2WmVlSG5wWDQ0YnJXM1prSEMxYmN2RDRIeDhuRDlPVGMvSXNiV1g1S2tiaERNbnJCekt1YzRwcjRYVWRRREpNcUtCKzNaNUdsaVlXSVdMZE5EMFpDMytzdDM5a3VDQ0pNTE84bEN2RVJSZXpEVU5Bb2FHcWZRWEtibUQ4aFVkR0twWXI5QVpGYUdGOGJkSklCRGNwa0UyVERNNjA5bU1VMzdydEc1bXNvdnBONXd2d3p3WWJtNFlHOGVSRmFuYzVFYjNRRDdJWk9hYkZySGdERUE2WmZxc2pjdUM0R2cycGNGWnVDTUpSaklsUDQwcGV5R0wwSThmTldiRFdpVlFxdDR6dFBEbUJLV2hNWFhML3V2NzliYnY2K3l0WGRHcThHb28xN1doUFJXOEFMYUdFSVBtakIrNVNRMUcxT29xUE5YcEs5UENydUczVVU0dlNVM0dPRUNZQkRhRDR3NGhqdms0WXJ4Zk0wZWtlQWROSDNvZGgwTnpVakVHQkpLRDZOdk9hUi9kc1N2Y1MwQmZQaHFZcDNRdndrNWkyaFREbFBCWEt4bjNWUDZZR09YS0F3VnJSSlh2QVRIdDBUMUFhVlNpRi9LTXRKUUJLbUpybGxmblV6QWpOVWJQdW1senVqaitiVzBmaEZJa2hVc2dBU3ZXcEl0Rk56Z21TLzhRNVNYeVZ3R3F3bnFCUkcreUZpdXFjb0RraDF6blB1VGlWeGZUOUEvdzdiajEzQmVWL2IrQnU1YmhLTnVjNXN6RjlYcUZZVXhSUjM3eEl6UzJ4UmlnOXIzeFhEZVc2S2VJaE9kZGluSFAvblV0bzhvWWdidDJqR2pkdnk1ZUNNbS9INUd5c2E1Y3VqM1UzcndvajB3ZmFmU2FLckc2Sk5CdW1UOHZFSWwxMnNsRU4wS0R1ditubzIzckVsUFJRZUx4MStQTEdkeG91R2lCcURjcERlQVh3WTg5ZmNzd3JaSHh2Zk9KVHovTjhaMXlMQlFTMUI4QkhqaDQ5S2FMZG0zMjY3dHV5aTRmdGhmWnJiajdRbk10QnZzUEFGUTBLd3A5OFl1SzIwdUFvTDE1NjBlNUx3T1B6dmtFTG84d3NkYW5uSE1HNy9uU2puTVdsdUNYY1FhSkxMK1pkOTJZM1BsUVM4a0xlaXhBOWw4a1pNYlp3Zm1xdmMzdlRRQjRoNXpHZjMzT1c5ZnVjSjUzbndBUllocWtJeGwxd2t2clNNcHZHcUd2TitCVnhmT3RicitMVnUyRU44UzViVzFyZ09rTWVHSVZwTUFwTnpWVStUMkwrWlBUUWtpVXJ5RVB2ekM0MFZidGxHcHJTRUNTMUttdldrR0M1dGE2RFRLM3l0S3YvZUFFZHhmTFpHTGVCbStRK2hPSDIva1V5R25oTTQweXBQY2VUNmVvcEkvWDhMTktzdEN3ZXRWek0wMmhuK2pZVjRhZzBoNmJldnpoVjJOTXI2RW8rci9sNzl4UThhY3g1WU4xK0NQZXZvOGN2RjNmM2lFS0RGQkt4UUxYWEZ4SjEzVG1FVU9uQzRsWk5seXpmaGE0azFnaCtLcngvVVNqYkxnTWxtL1VodVQxYkU2V2U4cjZKanc4MnRpcmdnQ1ZvUzJ3a3lSYW0wVXBiOXNhUUpVdklIdFFCSDc2Y1kzcm9NeStpejZCVUxjNXFLY2JDMXkrZUsvSVB2ajh2bTBLcGQ1NFJrNXJhOFBCQm1tR2h4SnErOWhJSUwxbmJqVVg4a2U2dVVRQkd3VUYyaS8zY05RTGhTQmY5MmVsWmR3a0FsOHgvZy93TWx5MFBoZDBmZHE3Z3RTQUs2TzJEZ0wwWENhdElGa1MwZ1NSU2U2RU9Za1ErNkdhMWRJODRQMS9zbDJwanJaSDBsOUV1cjYzT3oxYllTOUxzcDRsOXFqOGVodUp3RysxRFY2TERsT09xaUlSTk5DbmJuRzlEaHV0OFB4bVc4MzlJQ3VWMy91TDlaVWdHOHpJZ283cDhrRGJOUFZzZm5WSG5sbGljeTdaVGx3N3kwL1B5WTgzTEFsbTkzS2dGeWszV011UUk4NzRYWlpCWWpKT2RJeHZ6UE1UbXRlQ0ZrMy9GODM5MWtoMXJnU0xNTGxYZkhGU3BQWFh5cjc3QTJ1dE0xRWZ5dWY3ckw2UGxCQTRLSUF3V3pYbUhweXUxcUJDeGlDVWxvVm5KdnVsTVNaYmx1L2E1c2Q0aWdISXdKUE0vZnBha0pERVVNS1dBaDhBcG1aY0M2cytsNnk3YmZsUlVMY3dWS0xjRW5MOGp1VWhVOEdrbDZ1VUxJdDhjcGpZc2dwajZUY05OdEZ1ZzlOaUxES0JCQW5oQkE1Y1g3eU5aWUZqUU5VeUxvdUo3OXNkSXhrc2RnbUx2eXUvZVFucjExVzgwRG4zM0kwWVE5RGwvUnRLbFdKWUVwbVRGbVZKR0lSRWpHODFiRlFuaGxvbEh0MTl6SFg1Q2ZtMXZjU1VNR3Y4QzFvSk5iYVNLMjlRQWxsQ2RTVFdxT1B2VitUTEk2SUxad3FMNUZvZ0szcGxrcmVsMUpVZy9DTHVoZitGNXdzb1FvVGI3Y0RzdUlwKytpQjF2VkFFbUhsZGZTaGdkOWNaOTlKRUZXZTFxYnhEcWd2OUNOeEw3OHRWWDRWV24zdW9uTnhmNGM2OC9SNjQ3bDU0U3gyWkdlNGxDN2oxY1dSY1Z1V2lhdjMwM0VXbFB1ZXdxMW9XTFNCY3VZa2Rxd1NlUG5DdGJIbjdJZjZzYUQ2cFhYVTFNMkRlRzNHN085Wm5TVVJLVEFtZHI4VGxjL2oyazEvbnhzblc4OHA3cTJyWkJBQWJiNEhQMFhHME1oTU1CK0J3NUxxM08xRUp3bkdETjh5R05ud2EvWlc4NWF0c2dQQklPT0NwNUFmdzJFSGI5bEoyWk9UN1h5MU04d3VsWWlwcGdtZHhNTmdnbXd3SW1HeDZTbGFYZnk3SWdVZWNOTDE5RHZTOWZHd212aHR6V3F5RzhldXRaRXJiaDc3S0V4YVR3ekhIYUM1Yk9mT2I0TXkvaXA0SDc3aG1TOUkza1pUdkRsVWxpcERMZ3ltdWNVMVFRbjdybFNZU2V2SVdWNzNzMTREcGpqQVJlcmMvelRQcFV4ajF5NDMxWVYvTHZ2dzkxV243dzFUK28zYlB2MlVyZTFmMm5YZHZaenZmdk9aakZnbVhCZlRJY0tkRUlBSnBHaDdwODAvQjJvandwVXdmV2NFUkV5VG1UMmxTSW10U1lLMkdkcGVuV3ZjVFN0RFRVNU5jYjBoMTQrZ1JWQUM5WElxcHRYZVkzd2JMQS92MlNDT3dHSmFlR1pVdkpoNkcwaUhYcHladHIxaVhwMXRPNnJ2b0JHR2lOWnpRQUp4WFYydTl2Q3JVTzNEcUp5NUkvQkFSYlFoZzNoL3l5N3EyZFYrQTBGNklab1VhSVZ4SVZrVWp1RzR6T3FCbE5Fa25xaW5mZEJOUWp4cjFOOUdWRkcyT1UvMDN5M1N6OXhPY2VYa3BXYk0vaCs0NzBxaWQwUzluMWkvOTRjeGVKbk5uMDJ1enJtMVh3b0taTUtrQzJoMWVOMkRKVUwxYVdkdmZhV0RMRUdHOW9aR2dKUVdPOXBmNlNlZ3JmMkxYM2dwM0VJMmJqMXUyYkZlYys1WHdsNW9zbkc1TnFURGxQL25CSG16SG4wM01VNDdsT2pBTkdpUTRCY3hGU3Z0emZWOHg3Z1Uxa0VDTzJVRXRNVjY0SVlzM2RBS1dvcTFWZnVSWWxNZWZIQnhKZHB2T25maEgwbUcweGQzbXRoa0J5Zmh6c2pMUHJZaU1ZRThEcUNsMDdBd25pcmRoVS9abm5majdHYnN5RWdsK0tweTN6Qlgrd2xnQXhZbjNiRExsWG9XY0NRYmI0S3F2aG1QdXljOVFOV252VURacnlmR0hQb0ZtRU1DL1JnU1dJYTdoN1NOUVhDOWVpQ1JsWXNyUXdaVHN6V2NyR1VHOGxtc3lCaktSRWRPamtOdEg2c1JSWjdtOHNmWGlHK1VCNTlibTV3MnQxMHRTRUVqTUFTUWFrdW9pbGJCa1VFS2NxS2k4bGsvbU1pckRBM3RKUmFJSzZvK2xLZTA5WEp4SFhzODJGSmlVNEptaEM5NUxSc1dVUm42YkZMYVRhd2Y2QlNpbG9xMGlGT2h3MGdtclJsTnZhU3QxMmc0cndYTWhHSzh0SzNYcHJRTDdmMzJRMVIrUHgyUHFNMzRTYU5va25Pb28wK3llajhpbmNsWVNhMzk3WnZTZVB2NFhVenV1WERSeG9Fd1MxN1FNM1g5Tk9aTEw4emd0Mk5tR2UrQlFQdTFkOTdwdGZtTEExRWhFZFU0UDIwb2VtSHhpeWcycE1GZVJRVkcwT3FvTjNydDd3c1NVTlVUVWFRa295T1hGcTE5WkhscHZ0ZmhYOFd0T2dtRXluRytXNG5pdm16WnNDRmd5Wk4yVTIxNDNQRUxlRHU0cjdLUGNsNm4zVUJRcVZZV1JUblhLbHpLTGVEZXBhUmwwYnZjU0pXZUlJUTBPK3ZOVDl3di9kc1FWVmpKc21iUUFEU1FibmFMUFY1RS9LMFE0NWFnR3BWVUZLUUpWMHVIYWxZRWgrbnlBcGsycEJsYUlodkxEYXdmLy93ejhUTkc5S3RvZHlNVFlBU1JGcWVzUG1kTGVLeklSYTBodDhBcENGWGJzRVdlVkorMjQwREJYaVg3S1lzLzIvTkRrOGUvTU1Hc01VWnkxZW8wUzNDeXBXamlYRVpadVBZSDdRNzdwMHV0R2hRTXlUQUJrOFVYSkZpYXI5L0dRakRNSis0OUVzZWVFTkZSdU1La0dKdi9adHpLa2lDY3pTalVoMi9DUmdDWnZBUjM3Q1pCRDZVM1ZXaFFkdlExQkV2TUFqZk9TUkFPRWtyK3FDaUhueXdLMjJZc21pcGp5ZktvNzZ3ajdRN3d0aWZubVdia3V5TXhINEszQUg0YUh4dmVxczBnazQrallnLzlFcXozQzZMVUNmMnRZWlJGSjA3NlpOSHEwOVJmdmRpK25LOHZmZDgzcm1sTVJhbFlrYmExL0ZKcm43L29EdWd1OE1iWUZ3eTlEUVZnQzJXdUtWaHBudE9DRmNwaHZaanZmc0lVaDdMdzROYmJuZjlGOHBnWTZzb1Y4bWdJNDV1ZVYyTENzbEtBZEJsRlVrRXREMXBrWWlEWUhIcXdrZHhwTEd2MWVnYklWbEp5MFNpZWp0YTNrcHFPZ3FURXNJYW9ydjl6NUxSWktUbHF5Z3oza2ROMHlGalhLd3h0TmlYb1h3c3p0SU5qdmdhdG5kRUk4TUV3dVoxMEhiZ2tEcmZDMnNJUlN4cUphbndEQUVGYnY5dEtVMjVtRHd6OEFORTJhNkNZK3hZZkZ3V1BLZXJQZXpySG91Z1hPNVpWbVFldlViak9QQ2g3MnlIRlJGVWNzMU4rYzBVUlJENnVPR0lRUjlDQzF0R0FRQkxhYUxXbE5MYzg2SGZ6UHhnNDlxcWhyVjI0Skw0RXh3c2R5L1hvNWtOeVYxOVZVK29FWGw4TXF0SzhOeVZGTWxsRWFSbUE2QTF2UEIvV0MzS05reEtieHkyNHFJRk5Oa0ZZMklObDZyd1piT3BaZlV4bTZNeFdtL3Z4bjUvbWZkZTA0dE1xeDZuUzg0NFVSTG1GZlp3TzJtT1F1UGN2ZHpqM0tmSTF4WW5mNGpVMzlSV3ZCTEVyam1kL0xMM01XOFgvTHM1TWEvL0hjdjdNd2MzKzY2allPdnNmUGI3RlIxTDYvM25HVG4zNzUvM3VrSFo3dTVzUzc1RGNtd09aZTVhdkh5N0RrT00zTzVndjd3dzJoTmVHTTg1Z282ZG8xVWV6amZueGdVU0tSVkl3dXBJR3V4VXBiSWNMSGsybVpmRjhnVTY1MG1QUy9pVHNXcXpsaEI5UlkzdGRFdHlrc0MvYlJ3RVhqdHpscGpadWRjaDhFUEF3QmtBdDkwMXJyaHJsOS9QdkJsV1hHV015bEpsZTkzMC82NDh1WkhxRzkzRDRuU1hkQmlVVUwxVFN3aTVzMVQxNFdDVVA5R3JkR1grMkxLeXhKdG1maWlFb3NnNlp0dTg3OGxJNGVGRGRRM0dkb3k4cDNoRk5WcnBFOEduQThGWXI1L2Q5YTV2WGptZDc3NHgrWUNBN2hhem9uVGNJYUxjRm5NMjlPWXIvdzhQV3N0NUs4KzRxKzRXSlJFZlZULzgvZmtXOUVEQjVuVDJZcUI0ejYvcXZoUTFhSHViRXlldnIwRy9vMDFMUGZqT3JTNDlldE5leXNISDBDc0dwQitWaE9WR1Bod25UaitZeS9UQ0R2UHp1a0NlRGVlcllrTDRINWR5ZDFDSXRrN3FVTFVWYmRFeWhXV05NVlBkWEpzUlJPbXpWVXBrMkJqYjVuUEtSTWprcWUyTzd0SEpRV2U3V1dJcVBuNW9YRkJpVVlGZmRjRTBaS3FZN2RkM0txLytyRUhYL1ZaZ2t5aXd3U1p5Ylc2MG9vdmRlZmcraXNndUd6VGhzc2g0S0dlc0JGQ0FCMC9jT1ZINFZEcHZCdUNyaTlwK05Gck1YOXUvYjJhOEVNdE44NmMvZnd3c0JXVTlLaXFhTVFCeFFTNTd3ZnVmUjZoRnorbVkzYnRic00walE5cWdsOWhFcThhUUlHclNadnVrdjMvQTE2MkNYOFhYcmJSQ21tMm9QdTFoSGI1dlFnZVB6QjJJSnVjMnFYYnlOQXUrU0FBcHVFM2wwa3drcERqMjRkMUhZV05EVmV3V0Y0OG42YXh6TXRzQUNUclhhZWIxUVZUV1lMVldNeXlrS21QWVo4cnp5WEhzTTlTQWxOMVNkUmhQVDJyTDFkN1BTUGR5THNLME1VMzAvT21DNWhtTXVCMzVwMXEvaU1rUHczTlp3RVdabzBnOFlQRUwyOUJQb3VZR2xlSWF2VFhkTnU5UmtHVFRPV01NbHlmenVLUFZmVjEyRU1wL3h0dkVkSGRlVk1RZ09Hb01XZnozQndtKzYxTW8xRTBTZlZ2elZ3N3Q0em9SOS9UajZVV3lkdmRFNjY0N0l6SDN1UXpaZ2JPT3FQZTNudHNOd1Y3VGdNMDY4YjN6ZFJ0a3VJOEJFYWRHWkkvRHJsTVF4V2YwUkhjZkFwNGhJL3Z6RElCZWpROWhYdkpQTVF4ZVJnRnN5NXVUMk04Q2JrZzV1MGFNWmJwNzdFV3VnWjV6YTZRSm5LNGpXNUlOTXRMKzUrc1haOXhwc0JVT28wNC9FdlZEWnBHK1B6T3krenpNekJONGNic3BuNmFVODZOUTNvdjNXVnRFT3VNcG1CZWpxR3o1d1dFMCtjQTUxU2RCWk93WGM1ZjFzWFM5UzVDY0VmbnNoTzFFQXNyZkluWlc1bU85QjNHejBIR09VN2puNC9NbTliVDNneVNYRGlRM0hvWnZCWUh1UlhNTDZKZU0ydTdCdUdhNG9hR1dlWTltb1Juejd4OHZhNmRnQ2FZa01SY3RyYXpuMTFQZlVkcitQenZtd2k3bHVtN2UwTk5nOTNpM09PaGJXYjZKaXVpbDkzNm8ya0ZFd29acWRPK21JbHVyLzBPM2JYNmZJNXdpWm1ld1pveWUreURIL1VlTWp4bE1NdWh5QUIvOTVTa1lYSTZKYU53N0lINTlHRU9ObXVvenZJOW9lTHBqUEU4Y3VVQWZOc2xFc3pyanhBV0F5QnFqZlFZL3ZlQ3htdTRTUi84dEo0aUQ2WDBUMzl3L3FVOHJTSlo5ZnNVZkRaajU0S0RzMWdWN0JMODZaUVM4Mm5TRkVsM1JIbVhhWFFIWGlQRVZqdkFkT1ZFaVV3MWtHRTNhNVJMeER6UzVuSXFSUDZSckd5aEdPbXQ0TTRla3ErUTRONXhHdDQvdmhkS1Y4aXlxSXUzN3pOWFhiREtuTHdEbDUyOWhGRlhJNm92YmFaOHlTVkpYK29oK2JtTGJ6c2U5Wk53ZlgvMCtHMFhQeWRwRFpJd2FQY3VXOVpyRC9KU0E5eE54dytBS3JBQ0NBV3N1allUdS82T2Q3ZVp4aEV2Qlo0UHZzU29kcCtiVHlaOHRoNWxKZGZ4ak9MTnMvUklscEFRMFJPcHlNNUpnTlkzZG54Mjc0V2Y3VXl2UXpsUmpFYmx0clAxOWdiVlIvdnJPMXRuVGRGU2RSOVN3SzNYYlQvVkZlbURzRC9TZVdyNzNtVWs5Wkp2M1FmT0JnZ0lHU2lxbkFzSno5ZUo1QXNyNFhVOVFtWXZVY2V5NUhHNHJ5RXlHNG4rdFhJMmUwQ0Z6V2VoRkxFN2dWQ3VsSENucC9kakhpT29WYitqQndGQyt6RWpmT1VPb1hqdHhOUWNpcHFhdUxhWjMzRWxDTDd6NTZ0OW9kWXl2RC9rV3kyVjRXUW0yNURUQXdFOTE1RE5CSTFMYjRaZ3l5VytvMnlxSHZWZHNnWEFteS9GdEdCOHFieDg3ZEx4dmpFdmRzcHIvempSS2YvWGV3QUtzTmhYeWRnaXJQeVgrd0p1dXVvaEJJQUQwRU5mK3NONzVmeWJBT0FMdXIvaEJjZDVrZldRNlpGZlFHTjR2cklzUGl4Q3JGQXNWNmp2bVdlbWw1Z1htczNJSWVsanhTelVJNk5LWGJub0ZZaFFrWitYSjFWVzhSU3BOSDlBenZsOWphcWVGRy9BRk1RSXh3QlkxZ2FlYVYyR096ZFZNNjcxZW9KQThBZDFvczlVSGRHSFk3SVFhU0ErTnpBVjBvQWVUQ0xpU0oySUdCME5Ua2ZiTWx6cFQxcWQ0V0I5SUxjcnRENDloMmZuWUxDTVcwK2pFNjlkQ0lPc0J3T2E2TFM4MUJVMVNpenRmeTdqN1JUbFFnWXhIUTJoNUpTcEVlcFVNblpkd0loVUh6eFNEeHcxN1FHSDB0RWJ3c1dBMlJiNWdFN3kvdXZPbEJCdEc1Z0QyWWdkY0RhWUVZQnhFUGhHd0hZdXFrSHc2Um9FTjlidXpZT1pUdyttSUhCem40SkUwR3dBbENnQnNLUjlEb0FvWU5zQjhCTXpZZ2MreWNBMk9nK2tDM3gwSnhaWW1iMTB0OFNoR3VZOEV6aWJMNmJyVWt1MmZpbk9iVTlGb0QzUHVOeEJBOEpIUlFFS3ZIRGpwclJIcmFoVEdrbFIxZUx4TEd4VFdINStTczg3OFZNUVFGNzRtcGRTbjlZd09UOXhKcmN3UDl2bXhlM2xGc21yd2hZODFaOTVXOFhWalNqSjlkVG9KZ1JqMThYU09mWmhITUtOOERwQk9qVHQrZDJ4Zm02NkVmY2NDaUxGREYzbjhSTzd6MkU3L3h2Y0c4ckw0ZTdSa1hlOGJBWmZFM2dNQ0ZLQ3Uydnl3L2RRaHJPSTdSWXczT1luZ1FGazEwcWlHNU15Yk04NE04T0dqQm9MaVAyQzdwWE1uS0ZucnVBRGF2VnBTN2xUQUJKNFFnMzRWZkM0NzNOMW5yNnZUNnN3R1BPOThab3ZGb1RxcDc5UFpxTDlXMFVOL0p0c3lkVi8wd0RRb09MUE83UzFnUFQ5R0VsT3BUejl0QUxETWVWWUhVL2t0VGVDdWFMMnM3ZTVLQlVsMjhYSHBnSk1GeWxYN0VWYSt2TmYvR2psekE4WTdKM1BnMDh3UitYVFA5NTBsamIrN0xubjdNOFREdTUyOEdWbkpTQ000dWVmbi9QbG4wR0k0bExPUTUyZG50cVZjUElqb0NaTzJCRzI5VTg5Z3Z6OEw0MG8xTGFOVlBZRWhiQnZWdFZ0L3lFdlRQeVEzOWFkZjY1andlRkxvOGh2REs4RXd1VTVWY0ZDbU9rN3cva3RGSFUrNS9MNmcxRmsrVUhhWjFhZmRGZnFYQnRYMCt5ZGJodkpCdUt1UG9EUXJUQytYYWRvTHZoQmY0WHBoUmZ0aFVmNUNHVmszZkR0WEdZWFRTMW1pTDdJUUc3ZGRkRXY0UjZ3RVBlb2NlZzFYWk5zL2QwOXJONVhMMnl3TGk1ZEF3SStzbmV3WkdBc3QyMmkrK2VrWDY0V1pvcjArT1ZCM281cjV3YkJxd3p4TTVuMUZIb0N5NnhNQjBzNHRhdUkzK3JjRHVCaWhwcTNoMmswa3poUFp5WXhoRUFJdnFzazYvY1MrZFlybWl5U2lJbnVtT3Z1SHo3aXJocUNEMFEwYVZoQXpaQ2RvcFNNVXUzVDhCRUdNZHV0QWd1d2paQ0N4ckZuRVQ4azJXbGlKWjRpNXVHMExRM3g2Tm5WTlY1OW1TQ29KZ29zVmVQcTBnQ0dnSTlQaTFsOXpSbzlLNlpKN2tDOGNGSUtETVhVcEN3bnNhZ1A4V1VzUE9YS0hmZ1FRYzhlMjM0Wkg5K2VHMkIyNTRIYzlqaC8yZlpqejFZSFhVU1poWnJhdFV4UmxuWHBQdG5XSjAxWlc3dFdrODFKM1haOUtoa3M0MXcvbHR3bXVZUGNJZTR1VEZSempPdXREK2lqR1VscXJtNW5nNkIxRHBoSm92WCtSc2lhTCtiVlFlNVlIVWh2SkZxN2JyNnhCWGk3d3JRMDh0MElQV0NkQTZTNjhMUDNIcmplMnZoY1dBOVJWQTlySk1BSER5N2ZCSE1IdWdhWWhtQ2c2MEFPYmg0NytLRHp5VVVCamxIMzZIdU9xUmYwWHJmL2VoUGRIN0dtTVQycjEzb2JkZG1lNTVJNHlkS09vYS9mdzNvVWRIZTNtcnJuNjg0cHRwTTVQWUpabHFMc3ZsZjhWSDJWOWdqektQUy84bkh2S1h4a3VmUmVRUy9UdlpwSU5vaCt1dnAyY1plU3ZjNUJuVU05VTJyVzUwK3VqM0h3MkllRnJHZHBrVGdJYTdHWUlTeUZUOVpvckpzeGttQlk1KzJhWFA5MHJmVFFXVXJPMTJyRnJ5MUMyRWwyZmFxUEoxL3g1SCtYRHpuTGhXdm4raVh2ZU1UZFFjdnFvNWJtWXNZNjZFNzNoVDY2M1hNWDZPNXhlY3lsaE9yVWF3V0tuZ3FnRDlWa3poUkFKd0NKeEVLQ0tGRnR4RWMvMlhGZ1dTM2JYRy83NDdnZE0zWERoeVQ4T0RIL0l1S1ZkWGMyWDB0OXQrSlExMGR2cHBweTNsbFdOek5xdVhiR3FPMDBRWGFFelJjdDJySkdzQ0NIRTFuL0VtTVVxZHFtdHY2SkN3UzQ0OUpma0VSTzUyL2RpWUlhbWt2VTlPOFlSTW1qaWdrQzZnV3JWRXVTTkZuY3B6U3BrNWVTOE1IclcrQm5TTnFtUndkVytjdkp1YXhNVDV6NnFmUFV0dzNqL28rYVNJcHFMd1NnLytHSE5kNGY0N3k5NGw5Rnk3a2wzUGI2ZGVObXBhb2xhcS9QU2tWU3c3d3JLMVhlM1EyS091RVRDWjg0VmhMa0ZVR25hNG1wZkhHLzRGdTVickc4VkR3TTZ2WGRyWDVLa2l4MTFRVzB4MGNsRWt0eTZhU2FsL2VKTW5pRjFiRHIwVUY2djN0cTlkM1A4dnl6ZDVNa1ZVRFY5T1lRU1ZJVk5HU1Nva29OU2dvME1ERCtFaUh6M3ZzTllMemdpd1VFMzhOLzVJZUJiK3ZSOTc4WE93aVZhUGdnMmY0b1F6ajVYTWJWVFMzTXhWK2ZaK1lJVGUwYnQ1UXJBRlV6T3o4NFFMd3Z6cmtCK1llQklKd2d5dWpMU2JKeW11bjRoQlI4Rjk5K2pyWmFkWHVqdS96N2UyK1J2Z1NkSlFteE9pM3g3NzFWdXBmbW1PNldYdHVuQkovWUhrZEVvemR2cXlGaHdmWEMzMEc2UmwxQThHeEZPTW0wMmt6RFBWT2ZMSW5ZVXVkVS9HNmNGR3VMeGVWb1RPaFNqc3ZrYXQ0RlZCMWZMSmwwbjhYM2RXK3VkZGVNam9LcHhhOFdLT0Nycy9YcElVZEIycG4ydGhZbUxSNkZVNTQrOUVrM1ZuWUx5U0JVSVU1TkpSS2IxVXR0V0RUMVR3cVE1V2VUOEF0aUFTc3pCd2lTK2FLSGJTa2FGb1BVblliZVR0R056b2FwYkVaT1djWUpZMzZEQ1A0c2NwMEZqYmxPRW5oQ0hTR0p5b1RMaG1rczc4WTc0UDlTSHQxQkkxdFhISklNQzVvZG9mSHNzZ1pla0RmLy9iVjc3c2pMUVI5UUJlWGluNmcrL0t0NjBiV0pMVC9jelp0cU5NU0gxKzFDdWphVHphcW1naVFmSDV6OHlVakZBcndsNUQvWWYrSHAxY2xCZzljYXhtS2h5bEV5NDJIRHNCcU1xUnV6Z3BEY1NseWp4MjNlVEZodmRtNU90MCtvSVdsMEUxZ3lvT1RUUW5NckNqdlRyOG1SbUhMZVUrczJYNkVEbzdDMkVRU0JFRE1RVUN4TDFnYWFRb2QzYjFzTGZDMEtLT1VBR0M3MUplV01MelplUUtLN1A5U3N1eWRSaVZ1RjVZVXQzSVhjell0THhQWWlYaWxVdVRGdnQwa21PTS90SVZYdnNYS3VaRFZnZHBGOXFWdWRtbnJEYzA2aFNVbzNVa21DdVpKUW8xYXF0alAxUlhNTGhockwyYnR1QWFick5xdDJYcW5iclBxSmQ3bW5FTzNCcUx1ck81WGN5WjNOTE5EaVZaZVdUOCtyblJibTVhRWorNTBzb3pIODlWRWd0ZnlTdVRuUGFSWXJRd0JEUStzaUxITmpoWUhuZmFyK0lWY0h1cks3cTlXZHdQL25qK0YyUGZibkdHdVRuc3k3ZEs0bitzU3ZHRzZLcHE4Y25YOEp1VG9RdmVSYU1pODZlMVhlcFhOMGtjcllaVTJuOUFwcXhIekRLTEhIRFlOYVJLeElGVzlTS01LOG1qQzJaN0lHNW5BWUowRnpCYnRpUjVpZG9EVGFnTUExbDRpVGx3Q1VXWHZoTWY3Snovem9Ya0Y4Q093eWd2eE42N1NBMXRJUDBQWmVFcUt3OXdBQVM3clhQaVNDb1A2MjFQdmdTbVAvUVFDdXVyVHltYVdpdG1icDFpMEFYYkowZUNXbVEzcDRYQU5CYmR5dlptOGUzVnlCZEhmT0t5NVljMTlIekw5ajBEQ0JwMk44bks2bkZOM2ZkWVRiYzdaOTVqRk9Jc2dtd2pabG5hOXVtdHYrWmk1TzZCeng2YU8xM2VHOEZYSFNzQkIvOG5wLzdPeDcwemN3elJrOTh1K0tNRjI0YzMwNG9WOXpSNVMzQXFCdHNmM3JuYXBYSFQ1K2UxNXR0RURnSXJ2Ny9HYmUxNTUva2lzd0xyYVgyYnpmODJmZjYreGM3OC83SGR3eDAxd2hDbGwzRHpPbWZLVWthZEVmd0F2ejl6MGp5VURZRzJlL0RhWnIxYlNRU3NtdVpyWHFxdHc1ZnB6NnI3N0kxdFdyZUM1ZWpLRzlubXE2cWRzQWk1Z243R3JJVFgvQjRvRDhZRzd6Q1JKcDJtdjN1SzZDN0xvb2tpMGZNUzRuVVZsb0ZpU2NlNUliazhjYUdzQk5EWnVTdWJncVQ2b3g5ZmZKRFNsbFdJbXJqemMwWElmTGp5dktQcFhjTjVxQ2hZYkpob2JFUU9KV0xIUTdMOUljODJCY0FSOHRKc0ZOaWNReC9MUnpUeUxSbEZCajhsWlYvWDFEZ3pxc0tDZVNHNUxYTnpTY3dGWHVVL0JkdzBoc3hVL0dLdzEwajBCTW1sWG5HMnJNeGJNbmNYOUh1ZVYwZGwzMWZ2cmMzU010N0hiL3ZHN1RKMmdTYy94NlhxSkFvRGxEQ1JnQUNaOWlDUWlLQzBDeXVlRmRJSWtjT3h0TUxrb1NtRlEvT29IdlhLY294eDRILzNRM0FkQnhWU1ZuY0tQcVRORzAvR0E1NFlQQmxlY0VsMzNNZzFjQ2YwUlJ3WC9NQWN6NWwzRlZ2UTUvNXRpSk40L2huMjRpUlVWeGppbHhjQ1htZEJVU1doOVR1UnIvT2tONXhpamhzeGRtVHhGcVlSUWhNU2RrQysvZThDZHNvM1VMOS9SNTBrM1Z2QlN6ZTY4RUxCNmN2NmVoS3h3dnB3eEw5WkhkZkNEaTNLMTZnTHQxendrdlBHSU1vOWhZSVBCcHRYNm5ucUJ4eE0wcE1BWm42ZDRYWi9PTTZTM1RpTVlLQnVldk1FTDZGWVZqV3RBMFRRQnBCZHlrS0wrR05ESzgrc2F2cVV2bkxDOElQRWlyY1Erbi93UDZZeFRud2hpckY3bHVLbzE3K0prNDFyTndJaFl4dkNCcDlMdTNKWVRjMC84b0NQLzRkTEtZQmFDWTNMeHZDZ24vNkp5ZkxCYVhGQXBYSlF1RkpjWGk5K1pkb1RoK0hMK0VuMDdrRThrQ2dFZjMvZkVQbkFPQS9MaWs4S3g3QnU3NUcrNTVUbzlPZUk4QUYrT3lYSnZYY2pibDV6ZjZiRzNGVWc4NmZXSk1UYXRqSjA0am9lcGNmRFlQSlRTS3BhRjczMmpjbyt0N0d0KzRGOHRGRTk3ZW5Rdk9OVnBBMmtUMjhXNm44QnppVm5KcjJUNjg4OUpCaTY1TXh3SXA1amVYK0JRSjlSZFMvUVhrQW02VFgvVDZFTUJTRzNycVhsM3U2cEwxZTU5Q1dEaTl6WFV4QXU2dW53blA1eWp0ZG9UM09vYlM2TmxqTnoxbFE5L1ltQS9hVDkxMDdGbm5EcytySzUwK1M4bUxBL3c1N211Sm0rRE80L2E5Wi9ZbW1qK3RMbmtUY3djczFSYWU2K3JySm0wcTVOd3NUc3k0VUtFbUtqUzkzbStMZWdxaTlhZmFmRUxBVGQwa1NEbTl2UzBvbmcvUnloWTNjNU11MnY2dGxENzFGZUdkeldYQ3QxWGpwU041SWRSOUdLRmdlN3VXa3dRNDVhWHAwWW5ZcWFXRFhjMElEZ3cweWJHSUlNRklYMFkzcktSQThqWWhORmJ3TFNONW01cTdnbW1ONW1rSzByeE5jTEFOREFaSkhxZURHWnF1eWMzZVpEZ24yVGJuaWJyOElLTXNmemxWYmMzZkZZbXVicGVXMStRTXVFUzgrVk9RU2Q5a1B5UXFqOE1QWFNqdXVwcXk3UStnTkh6d0JtY2JrK1l4U2FFeVB2aml6b01RWEwzTEVTa0UvdU9ERDlSeWl0VHZmVFpFOTlPZWsyRVc3dTJCTCt1ZHVTbzFZK0ZjKzVEcnd0SUppeVRXbXNWNFZFamEwYnBjSk5RMFNuZmdZUDZCYWowU3hHZCs0YzVsNjZyUDBsRlpoOHRFVGhuLzJkNEJKUGowV0RUYzFIamhDdnhWblVlK0lHd3RRek9rbUozRnJrYkVOdzdnTWZRbSs4OXc3WTZMb1FIRzBOWGZzdXJCLzFmYmU4QkpWcFY1dy9lY2MzUGRXTGR5NmdwZFZaMVRkVlZONk9udW1lbEpQUkVHWjVoSXp3ekRCTWxSa05DQUtDQzRBeWlMQ05LRWxXVUJCVlNNU0NNS0tJdWlmdkl1L2tUSHNMdnZ1b3NKZFgrR3Vud24zRnRkUFVGNTkzcy82TG4zM0ZEMzNwT2U4OFQvNDZWYyt6MTViQ2JpWGtJYjZJT0R5OTFadEw0OWJrRmVOSEY5YmpDTU1BSkdRTm9oeW1KQUU5V0ZpYmE4MTVHQStyeGVpL3N4U2ZNUm5RQldOVUl4TU9ETmMraXBOSkNTVjVFbXcxbFREZkRoNjRCWWV0K20xbmhJVTVWRVlLam1XUi94NDI2dThXSTlGN3p6U00valhXTGZLVG9xZUpMQXkyc0xWdXN3U1AxYnphM3ZCQTMwQllwU1dUbzRTakFyamJWWCszcXNHWlRpZ3R4aTdnRHgxMlptRG9aU1E0TzM2b1RsTC9mNUx0Q1ljL0ZENDhlWVh3SXhpVkNBYThMZGlvV3lXUGFmVVBOeCs4Sk5BWW82RStMMjNwTUl4blVMaGZTbE40ZWtXRXdSMDlmLzNBaDJLeHJUNWVvazZZL3VxRisvN2UrK3B2VW9XdEQ5YlRpblJxSmJIVDJaRlR1UzlmMXhBQzdjSDlwL1BtcGJzZmRxNkJqd1lpTU9ManNLSVhTU0ZwQ0NXVjNXWWxvbGx3c2E1MXJJQ2pBMXNhMFlGNU5oZElPbDZrZSt6UE5mdU5Ya0xmVUdJM2hFdFFvUkhnRElkOVd6U0ZEVVNLVGp3RVVJWFh4ZythTWpxamxaTlVJaG96clo5S04rQ2Ezakl0dzUzSDNjNjM3ZWRvTGZYaS83V1diSW9qRXdXS3NPTEFSTVhVNytSQlA1UkNUS0ZKaVVBeHlEQkFaVXBBbk82TVJrc0IzNEtzVy9yTkc4VDdRQW1KNmFaYm9sWFJUMThRdG9iRiswQ1J4VXlKY2xXaWpUbnFUNVBmeHV4Yjh1REhxOFpKN2hoTkNRSWc4UjIwOHpqd1oxOVRYQ2ljM21uaVcwN0RWRjJhaitFcElrVFR4Q0NHNTljam1FRDZqcVhzempMWmdnek13T05hRXNxSDRRd3JiSkR0SFFRRG9zWVg1UmdUeGNTUzVQWUhiR2l1bDlJMUFRSU1uMkJOMy9wNmRzQ29IVGM2ZHJXU2tlN2k0ZEhQNmxGUytsVnBRN1M2WVkySmJicHVXa1JMZzd1YUxjbG5uVGpwVlRLM3FUUTZFVUZxQjVDUVFrUnkxdVRJY2N1RnJWZFhXRG9xeEtEQWJUaG8wdnVyL0RGOXMzcEIySHBLUEhsenFWMXdpOWZUYjNMT0hWdjQrL2RLT0NPdkVDUno0Rmp4cVFMeXpEMWNIODhWNkZWQWZUNkIyNFVMMFpMMUFGWGxBMW1HN0hLMG1udy9Ob0pXbVY1YXFpcEtOYVNRREUxUVB3L0YrK0dwU3oydW01clpwb0xyaTR1eFMzZmpWOG9KeE0yMUpPMjViYkhoQ05oWmYwWVBiNGw4TUhPNUxwY2VBNG1RMGx4WkZ4UFJCdkc2blFVSElOYm1MOEJhdWNZR1lkdVlScmdYZ0xYeHBJckZTVURiZ21Qay84SE9ZejA5d3dSWWZBYzZ5YkdpbnA0azFjY2ZGVTh4T2FsRDI3T21LT3ZIUTBZWHBmYkhFK1I4OWhBZTZMcEZONFhqY2xYclhkVXpwcGltcUdsRGZPRVBLeW1QcCtxdEF2cVlqL1J5emYvZVZ0bHBtSEtzTVlvaDZaUGxwZnhoQUNKRitqdTVmS2hHVm9CQjBUZk53STV0dEtSb0FKNDhFNWZBSXlsOVppL3I3T0hTTFdtdmtTSUNnTlVndEdjOUlzQnA1SXhLWUdyaUFGWGhkb2RIemRONDNnSVMyVlBBWHFXRE5sRXgzN2RhK0E3dncrWHFRM3FuaFlrUEhoM2dkT2YzTDV3NHF5Rng4dW1GQjBvQ3Q0MUV3Z1hwRDFVSFFrcDFvQ3I0QXpwVnhnT3g2Vm9sbnFLcTlJbG1PMGo3dkNNZHpIVzNPbjR6N3U2S2JuN1RjejJkTEtaSGRveDJ1czQ4anNVWkx3KzZCUVdQWUoxUnRsWkVZbDFPVnlRTmJ0V0RTSlFFRFJZeGNZWW1CNy9uUTg4dTEwc254ZytKZG12TlI5OFFLOEdteWw4OFJKSnpzT1Z0OVUwOG1lUzdpNXVQcWZlanFORlJ6bjJGNmNPY3VYSUFvdHg0UWNIM3ZzdENRRXlWWDluT0xqVE11bXE5L0V2VDN2WUNrTkdjY3Q5TEp1NzI1Z1hwWHlONlJmUVR0ODBUMHExMWNCc0tvT3VsWGQwTjJmS0xWVkVLNnFnUjdjcWtBLzdrUmpQV2hQTWswbDJ5YmJmVi8vWjlCbjRCT1l6aEpmZitJVHVSNlA5cUZvTTg1RVlpbUFpUktyelBpaTRWb3phOWZjTWt6U2RHRm12a2lOdTlSdTJ5ekJ1MDB6K3RqRjEzMEtMVjNVZG5acU9HV1lLcnFqRmd5SDI1UEpyd2RUcVVJNERHOUFmMy8yK1hkQWVNZjVzYjdvYWRHQnhlN0RtdU5vZGpoOGx4WU1hc0ZRQ0x3TTkxOEQwVDJYVFp6WHZYZWhxSUpjKzdtMzc0eVVJdmp2Vkxaei8zVG1CeUQ4d0puN1B3QlZjZkRVNHRTZVVEelUvR1A2Ujl5UFIvRzhMbktETENzUUh1WHRaWkduSzBORkNvV2pnOFR3eFZQMGZCTENQVmliWjNjNlNxSmtWN3pOZmVRamIzTXJ5R1FrcWJzQlhBSEltUldRbm5DekxYbzNNSzFBVVJBLy9Fa0lQM2tISm9KeUFDRVRJWjZldUIzeFFBYjgzN2RvMWJ5eHhyNXhBYzMrK2c2L3N4d2FERk5UY0Qvd3N3QVVUNlI4ZmtkMVdEcjY0K3V1K3pHSndHSjdkNnFsVGhOZWdxTjNVRFVKZ0dzL0N1RmQxL0U4MlgvMFd1SCtsc3E2WHA3ek9UcEY3TW95bGw2WFVkOEJMd245eVkzTFpFRDJBeWtTRGhtUWVEd05zM1hhUytJQ2ZwUW9sYkFNSlozQXpKei9NakV6eDRrT29GeTFuV0xmY0Yrd1ZBcjJKWXFaRzhsQzJnRytVS3FVaXRVaStJQm5iYmFxeDFpYlAwc3dMRHFHMC9sRVg5RnhuUEpaSFVISHVaSEFHWGJNcTg4aWJnZTFCTHdqcTNPWndBUWNhM1ZHRkhTYlVGMHhSUHpJUjJGMXVGejMySnQ2YlJpSjNveEVzM05HYUdMNWJURkNpNEVXSTdURFEyZWV5ZjNubUViZW1Da21XQ01NNHdyWjFUSnRodzdsKzg1d3FZUWJZdlovbWpBSmJGVFZHeDBuMkhGV0diZFRzUytSVHc5M0VIYW5vME9OdS84N1NCdDZ6dC91T2R4ME1acXp4c09kOFFXeENrbE9Yb21NQVpyZ2pka291d0ZMcVpRbXVIcWVRWVNZNTJzVVk1UTlBRkx0YnJXcjhRYmJGM1JGTlFQWGc1K1JIRzl4eDlHenBvMG1oY0NESkNUdDdvc1VWZVNScEJHWTBmcURSRUYrTC91WnU2KzhBTXlvdGdDTVQ0T2pkanBvbSs2RFpMVWxIaFJMRnZFazQ5cDJBVThmd1ZEUEFZTmxzS3VqN3Z2TXN6b3RvdXZ2eVdxRk85OEwybXdHVGtrNXFRdUlCUlBrdzFJVkM0My9WK3A5QitMRmNkMGhjR3RrNno2SUFBOFI3c05OT2p6bmY5NGtTeURBM011OTlKSDdOQWZRNk1HTGRta20rTWYvczdZaXNkUzJqNTFiOE9HVWhJeWZnNXpHVHdrc0NXZkJvZkhlUldaS3gxdzNQV0szU21BV1F2ZW5CQ01WZjNHZTd0Mm5EUnQvWlk1czd5ZkllZ2JBdkpOdE5QUVFzblNBQ0R0VjdjaG1ZYTBERWlzTEtkQm9wN2Z4c0c1Z1ppeUw5eVFJcXRGdUpVSWdUU0tpOEdxZEFsWVNINUhJcVptT0d2U3hDVmtPSmhhWHVNYnpwWnNYa3hodEtUc3ROdE9pN3pPRlpicGM5V1M0QU1qMzU4eVZXd082YzYwSHVJbXBIZk80d01WWG1wN2s0RjZXbXd1emxJM3hvTTRTZDNXMG9ENzMyWXc3aGJPZXE3MzdTYllISGlDVG43NTM2Wnd2dVcxU1RvTmFWVnN4cEJzNXFtSTRPbk5zeWpHeW1Wc0hua2ZMcVMrWjUzbGVkbWcwVFlCQzJVVWRxWVh2b01sQ2prZHhGQ2d5UzVQRW9tRHR0UERxMzRoU0xDNys4R1VzRGN2Q1QwNEp2MnNCdzBpc3ZTdHk4WDVuMjJKNjFQZ3d3enlrdUlqZ042bCt5eFNiaDFtd29QY0llRkdMYTVMbTdnWDNha1FDZGhmKy9jQml3REFlRi9hLzhVcDFHYUFnaSs1UGZVaEg4dXQ0cE0wSytrZWNaNDkvenN2N3lXSTFKcmt0M0htRS8vSTZrRmkvSExaanA1eW1hb3dNR0Y5ZFZoc3VBMS9VeFF1RTBPS3hMc3dmVkFTQ053UHFvQkptV0x5QVBwV09DcXFhNjlXWmdpNzRPVjNkVE5aR3ZNbVNaZUFNc21sOGorVlVqVHNLZkkyb0NIV2lMZnpMVTlRQmhRQ3N3dDZuZE5XOWs2Q3dncjAzdVA5RUlOVEJHUW9XWFR4L1BMeHB6T0o3NlErTUlQaXp1cGs4RFc5Qzd1Vms1VHlETEF2Z3UwVDRvN2xWLzUyTktFK2VtVkhjZTVtQlpOdjczWHZ3TDFWd2pxSi8yZ2pPNlJQaFB6SGJnRW1VS1pKbkRxclg2dFVvM2RrbDFHOWIzd0k1eTUwMkREQXRCeVVMZkl0dUFYeEFWbSs1d0FtcTdwL1Z2T0wrU1VDcWMrR3RaQXRWcC9uOC95Q0lEd3Bac1czaXBFTE5EWU11WjJVQnNDUmJocHdKUGdZbWxHQ3c4WjZneWd0Z1FzMHp2aFBPd21uYTEvT3p1K2JtWlhlZE11WkJMRXo3RVowdGpveTB6TmJLSDZJSFVCdTFWVFF6UUViRFlvUUdzd0NxWld3eWZUZTRmOHhzenJoZjZNd0FmdkxpOTQxczdRZDV3elFiVHpKZURrdlhYRExwenBaR3FrZjI3UUpMaGtDblVld3N1cGQ2V1NoOSs4SURtRGFUbko5bFFwMkxUUzE4azFVcmlLVjZkUzdSYVlncVBSelIvN0k2aGJ3QlpNQ1d3SEwyYWhhcUV0ejR2b3NuRVdqckJLc3ltOU5Bd3Q5bXVEL3FQMzJIcGJwZmFMY0I2dDc4dnRKNGZ4SklxdUwrRWE4WjdMdXVJWU0xR1hSL0IzYnZ1N1c2dUF6R0U0bTNPYU85cTZpN3J3OHV3V1JiY1dmejdZVmJOdzNCM29FRTBOUTJGZENZY2Nabi93ek9VbC9hMDJqZThHTzFsMDNGb20vdndsemJ2RVE4ZlQ1QUxGVUZaM3hNMkpDbmRDU1c1MkxONS9Vb3FUOUI5UDVRRFo1VEdRTk0rd2lXVkNkMkJUMk1PZWVLelp1dmNGRFkwRTFvNzNZL0JiZXRXRUZTZVpEdDFlcklRQ0tGeTJTRnhndHpSMTR6ZUVPclRxaEVZV2xhalNSdjZHMWxOTnhwMm82K1lndE14dnBHVmUvQjZrUlZNMEE2ZldDTTZTN0hEcVNUNTYyaG9mYW5FRkRhVS9BTFVkaGNjOTZQbXUrRDIyNGJtSXpFbHBaWDdZSWt3SDloVDdrcW80aXVXVUJkM0tkaEtUTjB1eEVSNUdxNVp5RlozY0hPTmVXbHNjamtBSDFxMzJMVlptUG9iZXFmNW1PbGNQT0dmNlgxb0g3eVdUTE5oc3hiYlBjZHRtdDRjNmJWeTR5VWlXbWVsR2U4RUxPV2xIeXN6TmFjTjlCUFVJRXpNUFVnZVJSRWpyRGFFYzV6aXNLeVY2M2Q4OXRvQWJMMi9Bem5HSEU0K2xuM3FaQWtoY0NHeno3NUpzKy8rZVRsN3EvV3JnWDI1WGVTeE84Rk5hNGVQa2c5SkE4UzdkY2g2dTk0K0xDQzhsSDNzWFk1b2hUY3g2TDRWMCsrMmVBQ2Y5aXo1dzhCL3FVNzczd0ovRXJCdnlCRUVmOHVIbElPVXIvS3c0ZVVCT2ZsZ1ozR2NzWWtsVEdZcXJFUCtMRDZ0QWlKSGh3ekV5RUtsYjZZSmQ4bXZqVWw0aTNITkpaMDlES1lDYUk5L3IyRUtTRkpjckh5YzZic1dBcEFZazVOV2FVendyYU1KSDRBQVhISE9sa0d4S0VWSWFoWU9UT1FsR084dk9vRENLckJrRlJkeUY4T1B5OGl4Vll6aTJJSDdsVUVvTmlLOW9zTFFrVXRZZ0lDb2JQL0VoNmRmbDhmSHpSa1VTL29mRzgya05KbFh1dTR0dGI3dmpWS2tIalFWYTVZL2NwTG5wM2g4K2doTk1WOWdOQjNwbE9OWWhwZk1tQTBJbm0ydEpZUVlwcnd0dVJoR21MU0g0b1FSanRTcHo1RUdlak5hL3liMnJ6ZmhqejRlTzl5T0JRbS82SmhQS25EV0NKckEwUGhTb1NKbi9BMU5TUkxFcS93cXo0V2tDd2RDMVh2VjZKeVVJa0RsSGJzakJ4Nzk2MkN4TXU2SUFrYXVua3lKTWROUjBXNkdqSWZVVHNQdFNQVnRrUW5CTHNub0hwTGZQZDVlUGt3QWFwbFU5MGl6WVNGQ3RGazFkbzZNSXlJTGhpejZCQTRndkRlNndYMEQvQnB2TFpKWWJ4a2Z2Z0FnTHhxU2RjK1hlcVNKU2pFMmxlMHR5MXZ2L0NwZFJESWdoYVgrQTIzYm1oYjJKWks0OGVyRnVLTmJ6NFluYjVjMWdSZXNIdGpsYnZlZGZPaGEvKzhnUWQ0a1Z1MnE1eGIwNnVGRUF6cWJRdFN1UzBMdC96dUVHSGpkUWpZTndDSTVRVEFMLy9VZ1gvNGQ5K2Y2M2thenozUWloRkJvWDV6ODZBT2ZHd0RBajNwd1RPSktOdnduWkJhVnJrbXFMdjdPZDFSd0FQVThXTzNPdTd6bzlUeDNqTlVldndzU1dGT2VJMlBVNXMrZ2ZjOUJnKzY4RmR3Y2x1akIwNEt5TnlpL3BnSER2MlhiN1NnTWNORXF5Ym5XQi9tM3IvaXcremwzYUw4SFBWSUlYemVTYjJYdzBSYXY1RlpRWFdSWkt1Wk9Ya2lUL2ZMS2xBK2VCUDFacDFSOFJqaUgxQVRyWGxxNHFUdkNFcDBnYXFCQ1VYekRKcVVzRGxFa01oVm05aFJubmlCNnU1UFBKUVJadzU2WkF3emVEU1VsTUp6Qk1IdlFjN0RHQW1wTHplb3J6V3NFUEFSOS91WUc1ejJSUkFQSElqaGl0K1BhVmtJeTMrY2x6UkNRaUxOVkZha3ZoM01xV2VZaEJGRVF1ak9QeEFIbXFvRWx5Qk4wUkVQMmxVUi9GQnhOVXhwbnlhb3lVK3JjTVZ2RmNYdGxCVDNzNVl1QTdBVWllQ1hhc0xOcWNxakNwYmhsTWNJR2ZYZS9RQjlkM2IrdXl2ZXUwdE51dStBS0xycnY1V2tRbDQ5aWpSVjR4RW9LaEorTlhEdDl4S2U5b0x2Vk1BbnY5SHljbHRUd0ZJbzRYZkgzWEhLN0o3WEQyendoYS83OFFuK1dEM3BTSjAvT2s4Mkloc1B6eHVFSXEzWGpPZjMyNGZsak0zY1R1YWxmcUtnWmVDSHUzdnBxcjM0VnlkbjUwaktWcGJPUFJKMmNnNGhrb3loUWN6UnNVN000OVY2TGhwcUFaK1kyN2hQamJOWm5tWExMdkVhUEpkQXZNQXNLRWVCWVZzNlREWW1rd0JwVnRCSUZiQ3MxWkdCWDR3WHdmTEdXaWdDK0JVQXArZEYxOUJnVko5eWtPSlJkd3FZUFNVc3dkaVFOOTBLK0RhbXlUYVdiSHJ5alorMTk0UE8zZ2hRSlVNem03NHBYL1Y4ejdNMGorMDI3aENUMEU4aVozdUtHVFNIRGtSZ09obkFVemprSyt6S1ZCTDFQY3RiRkhtWWVaeFBFMHVvWUZmZ0o5MkhDQnBpWHdIc3BIdGJsZDJIWkZXVndVNVpuVzM2TjM4cWs2SXhJTG4yUWtHMUZUa2dTcGtNYk1nSnpIUWxpUlUvalZjWkdhKzIrUUlBQmZlbkxaQXZmYk96S0l0ZjBEaVR2UWplVStock9PUVY4QjZ5YlR6QUhFWkJvV2Q3SjFVY0RweGJIYitpWmdweVBOQjNDS2pVdWFSemUwLzlVRjhnTGd0bTdZcng2cmtmYnhWTDNIRXc3Y2xJMDRCZ01jM0xDWSttR3N1SnZBaWYwU2tBbkdlZFF0VCtRSEFsSTE1RW0rVDdnTXdscnhvdWlTaGZFSGtweUVWcm5GTnFSeVVPc1NrQk9malNmOUNzVlZjMzgzWUJnT25SSzRLd3pmMk9aWUhCblR0QnpUYmNIMTR3NHY3SzRsLyswSkZ2Q2JiN256RDVYNGVKbEhvZFcxYnh1c2FUZkFvZ3BVMXRjLytYZTVHc2dOdEErMmw3L3ZKS0FPekYzT3o2UkhKOTJ2MlYrM0YvemR1THgwMDd5N2dsZVVwM0pqa1E5VlNHR3UwUjFjM2pYZ1k1dTQvQy9oak5tRnAwaW1YQkJaMmRpd0F2YktzdjJDMHFBWkRLVGhZNzF6bVRRL1hWeUhDUHVqTkVFTmZ0b0E3dUk5YS92OGdLakVJWXd5dHdCc0kwNHJGZ05HVTdSaGpBU0NBSllSWnpFMkFtMkdDRTEyaHdWSTV2NXVMQjMveGovTTJMai9HZHlKZU95WVJiYnMyTmk0ZTA0NGNRMStyT0tFQS9vaG9OQVBwTGhjbDRiSE4vdmdPQTFkWGFLZ2c2ODVVTlRuNWpHK2E0MkQzWlJBVHE4SE12dmZnNXpIMkdFbTF3S2NzMDBiRllXYkVQWGo5dExpblhpQTJyVmw1aTNuZ3hRUHRHbE1VZDdKWnN4WENYV1lxMGhPZEhSY1VHejVnVkwvL2xVWlRCZFpqZ1R1VjIwSmw2WEYycWZYTUlhZVUrTU8vTS9McVVtZXlhWjdCRFJITHJJZzdLZ20vbDhnRE9DWEViY29Ma1orakhnT1h1NkMvbDE4WmpwdzdrTzJubGNkMkhOZ2J6bTlwS0EreUdiRElDZFBqNUYvMnEzNWZzVE9JLzk0WkN0UURhNGtoRThUYjNXM2pPZFNZUzhQdUpoMjYvL2FHRW1kblF1MmYvd2YwZGt4azRUcHA0ckw5emtUcXhEMTAvYlMwcFY0azFyOW94WXQxNE1VUjdSOVRGSGV5V2JNVjBsOXVLT0lwYlNsSXM4QlZ6eUV0aGNWR3lVRWpHOGdqbFk0eUFORjQweXBENEpmWDFUZ0NndWY4RjRLcEJQMmJoTHRTTitZQUNWNk9ZS0JUcHdNOVVSY0tWL0R5cXdIZXV6dUdtSVptVVBVc21oUmtXamorRnJ0UGxhWDU2S25qR05KcVdkWnNmNllhYnUwYjR4aVB3NFByZytvUFFuUTRINDVxaU9ab2FpSUc3Z3JHQWlzdUtGb2Zkc3E1TVhZUFFOVk9LcGpUK3U0djRaM2ZCOG9ZREpFdXE4cDhnRmd5RWhKMXFJS0R1RkVLQllBd2NkNGJ6OGl2UG9pVTB4KzRnVzFrSnh0N3hwcVRXU085Nks4NFc0Y0cybjNZYWNnS0lsMVJ0TGtUeGl1ZkpQQ09iL2haU2k1WlFFOG1pNGVEU25CS1U1RGx6VVhrK3dnYjdOcFluTUVtUkozUHpHU3lwNVlzazZ0VmVQM2F5ZXY1VitPdW4zK1pvSmhTOGRXN05raUxlT0srQTltUUY1Y3Z6MGxaZkUrWURVSmZBQ3p4OGhpV29OVEg5dnBlbG1WMU9jTTlRekdqbXE1NXp4cEpNYnc3NnVlcDc4SXI1cnBQenRJaUJ6Qk0wYWp3aUdDYXRXR1p3OU94a3BIbVNwb1gzUUt2WnVaUHl2bWZxanRyVjA5TkZ5UGR3clRhc25FMFE2aE9wVkpKb0d3dWxZa0U1aDRKNWhZQkR3S3NDNFdnMHJDekZEM20yd2ZPTlozM3UrRjhFNFY5SW12c2JDSnoxZ1FzUGRKSmxaT2lhVzY4ZVVwWml2akc1YXVPcUpJMEdLKzQrdUt0ZFBaWGdlVmw5RnNHeGt1Mis0VDViOHZuNzUyZzg5bklTdlZiMDRYVUlvZkh6YzViejNva2NpME9nZ3pCYVlScWlTTFJjR29YVXR5aEthWlZFKzlzRFZabUxCK2tETEFrSjIzc3VVSjZkRXozVy9iODZuVnhBRVVRVU1RcG5Mb3JXRW9WVjdhbW9hWnB0VDV4RmdKeFVkK3M5ci9JSzdOdFVqbFNjc1NxdmlLbXVtQ1NIOWl4czcrQmY3YUVLV2FhV2RaSmVZaXU2clV6U2pGZnJpTEoxM2NlRHA2blF0SXkwSVdjY0k2SU9wVG9XZ1pCV0c5anlHWU40Z0tvVy9BVC82ajFkSFdDOEp6YWdSRVUxMU5zWnhYTXIwbmZoMkQydnVrVEpuQ1VibG8yTHJGQlpzcGtrYXBESlNkS0JrOXc4dWFuQ1hjYmRUZW44L094aDBVclkzelBkT0hXcUpQZ3NiRTlRdHZCS05MZVNSY21pWEM2MTJGeGJ1MHIwdTBxYzMxVlNUaUowa0l4T3I3OHlvRTY5cVNrRUdLR0U4QzRsb2E0ajBRbktHaHBuTkQ1WHVhV2t0SlJ1SzJzVjRnZGIzdEkvQkhBVDNmc3FaanRDU1F1ekg0OWRlKzJqUEJqc0I3bWhRRXNuTG96aFRseFpURVZNdzI3L3hrSHdJOXlKVlhjWjJQQllWZ0pBaEhZdG5obkxqMTlRemdhZG9CWUlsNlhJQTZmQU94V2dzaVJsYTVxTnpRdzZ6Y1plaldXZm9HVGxLOU1yN3YwMnozLzczbGhNTjFISWNFTFhQb2J3MTR4ZjBJTjBDeUxMMGpPNjNCWUVabGl0SkRzV2tVemd3NzA3dnlpem5yNDdtNVVlV0JzaTRjeVZSRzZSRWJNQWhIemVpQTlxUUJqTnZkdjNwMzhXODlpY1orR2d5T0dld1lKQjQ4OFRONHUrS1l5UXdGWlMwa1FPcnpIa2NLUVNlZEw5VjhVSldPalB2dnc1UHhoMjQzekVjTlBLOTgwQW5rS0dBd3FJQjlJVzBOUS9FZTNDeTQzdjBwOE52T3JadDR3VFFZWnIrd2xrdUV6cDlvL2duN2dSYmhOM2tKdm03dVVlNFo3aXZraTBoaGtxdUROOUVzdjRSZ2FVbjBpQitrNng5QnY5Skw2RzVudWtIZ3U0YWxGUkl0NmcwVnAxVG5kWHBEQlZWSnRNbEZuRFhsNkE0YUlIN3VMait6UGFVU3Q1Q1FJSXNJdVhIb0M4dWhLaEx6N0dHYVNNMnpJdjFzdFVIU2JDTFJJSXhhU3VtTmhtems4UDRLZGhrSUNxUm1YVmtXeGhTa0VoVTlMaHFwVkNRREt4U1BVd3lDdFdLQ2lsQWFiTEpHTkF2dWpxV0FMdjYrL3JFYkJ3TEtocXJsaHFWK0NpVkU1Tm1rQkp4UVlxcG0xRTVWaU1YOWdvVnVvTHFpVVZoV0pxTExab2ZIelJBSStmRzFDUUdvTkIxbzJqcHdCd3lpanVPaUFja016bGg0MGdLWU5OQlBCZkdjNXVTdW56MHdaY1pnZGh5TWFmSUFIRndQTFpwWG9xeE5JSGhGSzZ1SG9NRVMrWHNkVmpGL1hSakorZHU1NVFsTDd6TGordlQ4RC9xVEcxZVBxZTA5dlYrTDU4akNKelJGT0xQclMyZTJOSlM5aVZzeGRzZmFqeG55TzN6ZHkrdUVUUk9rTHhpVTk4L3VHSkFSNENRMDNLenBIbTl5NDU1VWVncDJDcVo2SEtZWUhrMVBTd2FtYlJ6L0djR01HcjV6bmNCN2gvNUw3TU5Kb25IQmgwanZ6VlVUWHFCNmMwRTZsUzVpWmFINjRWNlhBNWZoUUp6WUNXMXBFVXdlT0RNWEVzazRTdkZnMlRjVVJWcDJRWXRlaS8vZWdwdUZLTlNhb2pXOGNQalU0cEZKTTdZMExXS0RybGVDSWVMNGZ3c0pKaVUvaVlEQ3NML0RpVzdPMGthWmFsZlB0Q0dXcXFrcFVibjhXakJmZEx6MkRMQUlJdkNCSWZpWTdVeVNDeWtacUtEbFJBVG5NYWZkVUZDNm9PNXZ1UWduczhGaHRaaW9lUXJ0QVJGSVVmdytkdUpxdTdPaTVvZ3FITUtFQ2ZOeXEyYjZlam9vSy9BYXFWM0thVXBrTXhrODFtUktocnFVMjVTK2xZMHVMVnpxMERaTUNRQkJpbFhaV2RHOVNFTElLc0lINStrSXlWa05wejNuc3Y2S0VES0s2MmIvK0lvQWdEQjZ2Ykhwekl4ZkJ2a2pJZFJGdldDNEhEaTIvYnNPbjJ4YUdBaEc4MGtCeUtyWHhrOTA0OGd2QVlJU01JcjRmcVRaMGt5ZXc0ZnRhTUdwdkREbjIyNlU5UVAwWlBSUFAyaEEyU1pMYllVaGJvMXNzdk1zUTh6c0hiTGJ6VkxxSmZBSFRqSHAwcmc0ZTZMcjN4a2k0WlJlSktkc2ZoblRrNUVVYnpzNVU5aFFXTjBIZzRtUXlQTjB0ZnJTMWFXQTBrTElSNXRONnVBTElTeDM3N0FKYmVEczcvZGtBOEJVbVl4RkNFT0UxU3hnZGZqakpVR09yZ25pK2RxQ0wxdWJzb3NoL3pPV1JQaW5wUG1sZFpkN2tpcGZLNDh4WFFFWmRrV1lvVkJRSzJLY2w4SVNZcDRPY25xTFJJN2xGRWhDL1RtOWdUZEx5Y2x4T2lvc3h2a3dkRXRaQVdWVlZNNVNDNUIrWmpXR3BRSlQ2UkJjcC9IdGM0L3pMdnVxRVUwdlQ1OUxkTm5lUVZXRWFZcEFpNnd4N29LRWtIVTZaS0JTd3cwSDdHVTVsZHk3RFFBZi9ZQkNHS2V1RFJpeWh6MVJ3bFZJWEE2STZSUUdNOGd5TVU5ZzFkQ3JMZE9WelhBR0FGVFlHMEFJQWN3TVZjZHhhVHpVU3hhRHFGY25KaUlKTUxYN2htODhlNk05WVgzeThvaUErQTZETE12MXluWUxLOVRGWEEyRDMzSnBMSnhIZFVGWVNKWVRhUnVHcHdiUURQMDdXSEpzbUZqWi9Zb0NxcXVtcDZWVFFhaWZ6a3NzUGwwVFlOZ0VVZCsxZVcrdHJhd2VLSjJudVVaeVVnR3VjRTVhOEVWUDBjajM0eWZPd2dGK2JLSHRLeWh4blhxcmNiTGtjcHVqSlQyNFdKZ3BQWURsc2NJazZHQ0k0dW14VTAwY2RYcHBqSXN4ZGROTlh3QW55RHhreXc4VnNXQkV4MDNCdE9BcWdNdDg3eVFxdjdDNmVmZFJHQnhTQlowS25LekFoQ2JwNVUySkpYVHZDd01jYnhiSzlqNldJSHpScEM4cFA0SWVhNHQzMjVuQVltT1pVVytJQTVNSUdLWTRDNVdoTzVoTkJ2OGdSSzFZZHF4NlErbzRzUEN4bXNVTDBJdWhWemZyZEtsNTF1YmJ0TU9vS2xMVWRjMWdlMzlpMFRMMjg4RmtrajV4eGk3dDJ5M0JyZkNvTnAreHdMcGQwcEpsY1NiN0l2ZHhNbEJFMGttajgvRk5mQzJrVzZBOGJOODgvSE15b1pVbTBoZ1JmY2hCU1VRa2tnd1hIZFlUWnAyMnk4MmI4RWdDWDl2ZmcyOE9zcDhzUWprM3NnM0RONUJ5bFB1VTRrQWJOTWNKMU5JNVRHOTNibno0NERWVHZmS0tUNmw5eHl6am15TFlYaW9oUlIxWWdrWWduUDhQVmhiNkQzSVlIRWR4WXg1MWttUEpGQTVvZ1l0a3VGUEZYa1VSc2l0UjB1QWJXeVhUenVBcnFHZU5LR2RUZHJHSmo1elpSelN3YnRZRURXVnd4a3N6MGpBWkpXWjZhdG5CMmRPenV5OUNvSTRCUVNkQk51Z21HRDV3WDNWRE9VajhTcmlmWnUxYXpuSlVYUWRmREhGVzU0N25Ub1ZFWkQzOEN5cHNCcFhJSm1HZUdLelNRdjlWb2RWSXQyMUtzSUhoamhFOWVpQ21oVU00dHBGdUVoV2ZLL3pOVGRxOERNdUZjaFhSWXo4ejZjVlFkeW10cklFcnNLUEtvNi95REw3UHNFRVY2cHJIRGJSK0VTcjJhcSs1ZFhqNi9XdjdudlZlQXNFYlFiNDNqcjVZSjRDdjZjVXppSEkraFhpNmoyaWZwR2huUGhuQWZBV20xRkNpdlVXMElnQ3d3ZmpJeDNmSUNlYklzMlZGeGp0UGN2SHdlcE1IVEQ2Y2IzLzBVelRZMXU2dTV2eUE2WUFkTU12RklqNVZyQXNnTHc4V2diQUczUnMydnUybkE2SFQ3ZndxSnoxRHJIakpvQW1LVE05czI0UmZnMThEM2NENWhySXdLTHA2dUdzN3pzM2lYTDRxY0ZqZitNQ0Y2V0xlbTdQUDlkcWZtYnQ2bGVuTVZmUk1qRWhWOWg5OG95T0lqL2RYeFhFTDRya1hmTngxOXRPMmF0WjI3UGhGZGtPUXBENW55a0krcUVmQjlQakxiU0RCRndicG9QbnZvTThWeWU0WG1vT05MSHliMDNNbnZJNzlBdFNLTng0RG11eUMzRksvVU83dkR4OWhESlY1RVcvQUkxRHhYeXd6U2RWYWdiU0pVNjVXVUxKRndHVnVyUmdrRHNReFdTL0tLSzd5clFHQkpNb0VqT05FSmxDRHdZWHJUUWhzYVpDV0srU01CNzZINEM5MVRFTkU4TGtENHdiMmxjQ205dS9MY1FNK1B2a1ZCS2hPOUdncWtLZmVhZGp1d2dkTXJCK0RuQWlJL0VncE9JRDhsOFd5bWtDTVBid2huVkRLYTFXRUJmVXNUcnRZYWYzdnFXbGF5RDJSOStnZU5lYUViTDVXQkkwNENSK1BWYmFTeHVhNy81d0huRFhkdnc0b1JFelpyaHdkbmpzZmg3Q3VHRUlFN3NOb3lVSDFzQVg0TmJPWTZPakRMeEh4a2k3SFlwRCtHZG82TkxIMWsyT3Jyc0VYRGRuVjVwNlNqWGpFbVloYk5jQ3JlNTc3bFdibTN5cHU5YU13WWFmY3F5emlOTHkxRnZhU0hvditkVC93SFFXT3FGM2w4cEt5dTYySFYvTFNzdkUzZzFDR2FkVHplRHRGSHovVU5jaldKNmwweElzNVNGSlh1ZTRZdDZxcDdvczFDNVN0eHp5UTE1RVQxaFdUTUlRZUlzMElwYlJjckhmK3pZMUZTakdRaUxQM2dLMHhpQnBEVHpNSzVtbThnOHg5UWc2SjYxOEkyRjVXYmFqR2JNMW95SFFqZzNhaXRzaVJ2eUVocXlNVHpQVjdSVmczbDJnd0JFZy83Q2k0bE9kUkZ2aHl4K2tkb1pmN0Y5QUlDQnhvT3R2cUhudFdUemh2ZUIvblozZFhzL1NNVnVJenJvMjJJcGZBWjh2cjNmdmM3UEJkN2ZraGVjT0lHS0xkKzhFTk8rNVY2OHgxLzlja1FZWHVyWFFoVW9VcUhGTWptWFo3cllMUDMxR3BtYThtSkFXS1FOakF4b2l3VDlSVG1neXZCMVJmdlVKdEE3MGRjMzBlcytUa3E5K08rdlZMSHhleVVBQXJlbGNyblViUUdneWVEenNoWlF2cFFuUCt2TnN4M1h5cnVaZExUMzBUcWZ6TjdLNmxUMjRTZWFCUUt5MHpRcytxRkljNjRrWGc2TGY4UzgySDEwRE8weGdnK0VpZjBsK2FVUTNZR3Z1VlFuQnA3VkhTZk56cUhzTVk3SzdoUyttQXdHMzhMaVVDckZ4Q0t5ZDNPQStSeUNhMUxFcnBJNnpzL2pxci9pNTBITVZMajN5bElHWXBrYmMrS29IMkxCSFJKdmcwSVZ6NmF5QVVtUGxxTzF5aWlzVjhJRjBROWFyUmJDbFdxaFJpam1HSjZibGVvWTV1VXI5UnFUM1lldzlINXlwWG1BMXlVZXlXWUl5YkZzV01IY3ZCbFVTQ2d1UUh4bXdZQTlhUE1YVllZeUM4NjVjSkdWcU1aMTB3NFBMVWlMUWpFaks0NHNLSEJxaWpjamxwYktpY0lLMDlRMUxSQTNIUkVSZnlCNGNzK1ROQjVMVUczRDBqc2luSklRYWN0YmJicXNtSmtFRDJHN0lzaXI3YWlKZUZDaFlVZ1ZXVUVRWCtCQjE5RmJKRUhBNGp4NEM3ZzBJa2tpTm1oQkNSWU16N2YrYmR6ZWdNYnVxNWgzeUhsU3dBbkdQOGhGYVRSRmxFRXdTWDVtTEtKR1o5WmFOczl3MjR1STRZaFFEU1Y4MVIvNDdxZWFVK0FXRnk0SFgxTFV1Z0w2M01naVFYdEoxalJKcVFiRFlLRHdFcGxmZ3RZZitqUFJsbU1PaVRnbzN6RnZFb0QrY1UxeHQxV3RFSjQyQSs1VlI3UUFtU3o2VUtBWWRWY1g2TlRTaEY0VFBFK1U0WTF4c20zbEJjb2tMb1p3Nlo1VnM4QlFRVU5VM0E4ejZhN0NzdU1PbHdTcVM4eEwxUWc5TGxkb1pvT2hlcGk1b1ViUmRDWVBMejI5ZTIzNmMrbjFQYWRmQ3ZNWmVxSm5mZm96M2dsM3lDSjNGSXZkK01qYVk3Y2NnTktUNlhXOXVBU3lxV04vNWovbkcreldLZmFRY3MrMlM2QzFpeDM0OFlkK3ZaZ2M5Mjd1c25kZVArVDc0WkxJdzVaeUt6WnMvYSszUVZ2ck92QU8ydU9UbmxhWmJOMWR2b3E0ZVlvcGphOC9hWnZOdHR6N1R0b1AvSzVGRVMyMGxCdXc1V0QwNUswODNuTGJYSTVoNE9tUWxsS2NrcWpYUk1SWmxPWXBaVTBFV3VaQ2tVWVZFdW9FbWhHSU5QeHdpTXlhdWZoRUtVclU5TVF4VnZJakU4dUROYmhyVklEYko2TGhKZW5PYnZ4UFpJZnVQUVR2RUI1VmlIL2ZPVFRhc0c5ZFg5ZEVuTVVrQW9GRUpGYlBHaGlhQkxmNUlZdUg5d3hOYnB5N05jYWlGY0ZIRmp2T3hIWW9MUmJLTCtOL2FYWUlvM09UcUpQR0lPNlo2QzN0cXZteGlzWWRqOE40ZExBTlpQMUFSdEEzMEVhQ0ZCRzlzY3BpR0JsOVorMlc0QmJRNkY5Y2RWSnpnc295UEs5Vm9zVmpHaU1hYW0wSzFDcCtsVWdGRCsrZENVZnh4d3FmbjZzNWVuYXV2aCtQK0ZlOXlrNVRFY3lKVXhFTVRPRTZnUDZQU3JoQm5lQVRwWjNOeWdYbjZuUVh1Um9LUG9scnhDT0lhK1RlTkU4TTgzaW5uOENqWElqR29HQ1pHRlBNa01nUXRPZ01HY0tkU3ExblE3aFcrSjlmb1JPRnB0YUh3L1ZhWkRqS0dxbDFncTBKalhScXlsbWFyWjBsNndCMGpvUWk5N1RENVpYT3RteEhLaFlQZXQxNVhId3F6VTRMU0hOdFBmV1JGc2UzSHpvZGJYWTBjRURYRDBpSllGdUhFN21vM0ZlWkFMR1kxdDdKNmhvOFBrYVY1MGxZRkFDazZiTDN6M2ZacEhQa0tJMi9aZHpKRGhLUlV5eGhybWV3UEZ5dDUzRzEyK3NSbmlyRXFhck44L3pCSzNTRTl6SXp0OWE1YkFBV0d3R2FFVWswcFFGMXR5WnNObDd4MjFnZWFBYkhqMitDSEtrNlQ5MXRhVmd1NEZhUUZaUUc2ZmlSdWF1QWNMc2U1azI5dlhpQzJGekJDTXRudFlIRlBWMlp0czZleFNBWU9DaUh0OWdSb0pORTlORmNJS0lrbFdnZ0N6LzVZZFZFS0NCTGQ1QTIrakJ1TEtoZzVrZ1hXTHd1RW02L093ek5aQmlLc3llSTNIV2hyaHpJa1JlQVZBcmcxeVZ6MmlGRi94V0k1SXd6ejFRMEJiOFJ2d3FvRWRYVHU5d05MMEZua1JnYVA1ak5pMVhrQnBkQnVHeVFidEYrc0d5d2tSbGNCdkFlL25Sd1dUTytoOFFPSlBIOFk2MUxOWjF6c1dCRU9kQUhwaGtIVWxoVVFMZWR6VEpCcGd1RjlJT3ZnMm5HbUpBamRoNXY4VzM4Njc2TytzY1V0ekNGNS9pN0tIbzVsdXJKZ3dkeDU5U0pacVhzT1VvU3YzOWhrR2hmUFo5ZDJzbVZLTTBQUk9JMHlVK0dTYnBuOG1sWXpLME1FazBjZGFjdG05UW1QVWprcTZqRW1BL1BZbzBGeFd0MDlac2tndFlnVXdIdmYwSzY0cTV2NFlsdUdNRnZrQ243OVNONjBEWitCS0VlQk1IR0JEMzZNYUJIOUJZczJmZWU2QkhFL3hjY3BUOG5aNzBIcE9oRGp3YU52NmMzMEpjbjUzNElqczQvWnQrU1VOOCs0V05hWkZtVGVEc2Z4OWMzWlVrZ2tybGdBQ3JZRU13MkxHbWlIWTNKN29VQUxPeUdUN045WTlJS2h5MzR1UHZQZ1l6K2V6VmhRL1czWnFuY2ppWGtNSnpGTjdoZDdFYndXdmZDeHYxaEM3eG1oZDMvalFXUWI4c2t4Y2dycG1rYUlJNTVtTEJ2aTU3eE1JUjhyZkU3eEJHYVN3Q1RGMXZ6NWM1TDk0UG1RUXNaaHFqYk1QN29wZUpsRHg0RExmUWwyNXdoQ3N3WnpYbDJ6bS9ITmh0VVNqWnQ1eVJJUXc5ZDNrUWFrcTcrdWtuVW52Ylpkam9ZVE52VGJOZlVHOCtnQ2J6Q3QzRTltRi9jZkhLOU1haXdBbXJOdGlBUUZsbHNTZGhRcjFFQ1JYd2ZXakx4b1p1Qm94MldidDRmT3ZPRDBtR2lGdWFYOXNIVCtwYUo3cGJRbXJNa2QxbzY2MWI2a1E0NHNsMEk4YVo2L3JnWWpTdkNWbWhKam5yK2NpR21HOG9JMDkvQzVWVHZ5MTlEOUw2L0hpVElBNFB3VlJwNjVENWdtK09rZmNZMTU5eFpQQlB1dUZWVDFKaitqS1FnWU54NVJKTjVGSjJtTjVCTjA5NUVZbStKMTljR1ltK2lzUW1ZYlBqWkJ2d1dtUFA3aW1MaGJGNWlXYy8weEJKbDBYbzNGZXNpT2tIN1VGdXRoSG9iai9jdkUzRnphUFNicGh5VWljRE5rVFNLN0NQSDA3aWxJdno0SDVuOUFIYzJ5YVo2Y0YxbzNVRVNWb1Z1T1JBNmRET3kvOEhDalVXZ3BQaXR5SlJDeXZuTHhWaE1FYmFyNWpoWTBnOGp1b003M0xVaW1PWVMzVGhwUTlwc2NDOGVCZmpTZE5Ed1ZPVkh5SHVPN0g4L2hPL2ZmMFJ6M0MrejlndEVXOXBQamVxemVBelNzVE9EcHRBZXpCOTJjVFZ1R1c0N0R2akNLNTRwUlJKSk9WeXVsV2kydERUd2ZPa3lYbElDMUpMQXNUV1pZeXRERHFaYmtJWEJvYzBDVUxTdnU4c2tIYW9BN3VvYkJ2d0xkOTc1QWovMkhCc1g3bEZQdjk4Q2J3dGE0WTVmUFNLcWR4c2tZWjRnRzNmemt2Q0p2aXRYNGdmZ3gyeDZQLzVtWFB0blNMcy80N1czYmVMWk9JZHRTMlhKZTlCZVhPY001b2k3bTNHNEhLajdQa0FucUdzTmkvRGxha1VRcFdvbFRESzBFK2lOTWppSjJEL1BpZi9OelJEa1lvMHZDSm93cjhad0xMcytzdTl0YnRubzBkaUErOUlVbE5GbWtHV0VnR3dmdXB4OU04dEV6Sks3MEJhQTRoRkI0dStPcXFEWkJBUHZYZTAxd1UwL3VGNy90MWtRLzhFcmdqejdCeVRBSTQwQjc0RmtDOTQ0R1M2Mnh3dGhldjQxekFzUkgvbHVpa2R5UEQ0b216Q2txNmxrTGJSNFQ0S1RKbzdiMTFoQzBBU3FYZkI1dW0vVTV2b0o3bXJRam9Ka1BydmZ3WE9HVGh6VEJ0a1djZ21QZ25xSHkzbFA0VHJxRHpUNzJoc3pJTXRvNUhuczBNY1ZtNEtOWnU3cHVkb00xU3IxS0pNc3ZhWEsvOWJ5U2NxSWN4SFRGd2tLZlBQWGdpalFiN25acFI4UEtERTZTUmsyQ0N6RDlmaCtkTWNka0ZiZ3FxNnF5N01Qblo2M2EvcFJzZS91b2IydzZlUmZIaEtKRkZlZ2VVVExUY1hnU1V5ZDg4eWVKNjZQYW1oL3dHVlZmRXMxQ2NJRFhxQ20vOGRWYkxSck5yb1RBZjVPWkd2d0t0Smp1MDVjYVduZTJPdWZ5Nmo3dDZJemdKZmQza1BJaUJBbFdyRzF5bk1HNEVxckJmaTRJYWxpa3JxRWpzUG5UYnN4MWFRaWZWZGRCZE10QS9IdnZORkpEbHNHN25IanMzRS92VVovaU1rYW8wajRxYzljTmV2UnVIazc3cS9iZ0FUaUxWUXVsZTBhUVRJV2lLRjJudnFQcG1iSC9VYXNTVkpRd2w4S3hQbStDc1Y3aVFZUXM1YmpqaW9JRHl1T1BMZDJrbmM2M2l3aDhlcnpYeVFKb2hPdW55eUlEc3pNZjYwaXZjMkprUWYzblVRM09Ydk1OeUQ4V2VWLzN1Y3VQNWxhMFk5ZHU1L215RjdGTEdySFpmK0F3NVZhU1dJZ0thM2p3MCs2ZnF5TkJRK0FPMmZVV0VnOTVMNUMrN0p5U0EybTVCbUFKRUJOejQyanRQc1lUU0ZqKzZqWHRWbTh0d0grY1NpbUhzYlhEcE9uUEFpZ0hQMlZ4NUxBT2U1a25QMm9NYzMyK0p5bnozd09YWXVHT1lzYjRWYmdWWGNyZDRDN2d1UHFKS2hJTExEWWM2S3hLa3BpcVJvUkpWeUYrdUJRbFhwa1VZNDFVcXNUck9veFdLdldTSG9nVVNyNkN0QjZzK0JIUEJCbk1NelBrVGg5cWw4cmtuQm5ZdlVuUW4wUVA3UlFPb3Fseno0ZTdhalZoNWJuWTZWZXNENWI3ckdEV21uelpBRUJFNGw0SlZ1L09CSkl5MFNTaGdMbWZSWlZWcXh6ZDROVVR6cmRrem9EUkF1eFdDRjZreGt5OFovN2RLazl2a1ZYb2hBc2FWOVhldkExZUhuWi9WelUwcEpLYW9HbFZGOExDNXFtVGlsRnVkakJ4MUw1Q3dZY01IeEdwUjJneWxKTnhSd1MwR055TU5hMUFFdkVNUUpyQ0tHSlFIVnM0NDNWOTM5NFR3Uy9NWjIrSnhnbDc5eXRraGZpR2JiMGtvRWVCM1lzQXVBVGVPbjR3ZHU5N29xMjZLS2dhT3RwNXl4d1Y0OXA4MTdiRTdsZ09lWVVOM0hidUwzYzMzRjNjbzgwWTZuRElhbXBneFFsNmtEQllnYjhwdmZpaFluNzVTandZWjBnZzNqeUFrOW9NTExqVzhqcVRCK1F4endpalIzRHR6RFFBQzlYY0NoU3hjZFYwY3NiekREMWFtVUZYNnlXaVVhQnZaekZOZVBoZ2JiTHlSQXZMVW9ydHJKc0crVFJ3bEVzdVRsYTM1Wk9pZVIzZ3BqcEd1NXdIQzBpeDJJdzF4alJKTWx4K09kdUN4YmpVY0hVN2U3UVkvL0doMk9DSmZOU3R4ZHVkZ2J6UkhrRmRNcUJjcGZwWG9ISE13OVJicVVtcWlKQ3VvUEpqU1RIMTNlMUxVbVVaWmk1R2t5NWYrRGhKcFJabGNIVDM1SkVBVUd4MDlnR05IaVJ5cHRKOWRUM3JCNkZBRzVhckVhVU9BRVpBakFjUVFGQk1nVEh5ZllBSVBLeTFyTm5ZT1VWN3JRY1UwdVRwZHVmNHpHZE0rTlJBaVVrL092ai9WdDdKUVhURlJiZ2NxWG5xM3NxN0ExMXhnVEh0ZkJBMUpJYUZDRHM3TStWQS9oWHZLVmkrVnkxaFdBV0pGTERoeFgxYlBDOHEvSUFEcnlaQllhZ0NMR2lJa1VzTEdVT2hFY29YWGtDUFlUMmNpbnVGSVlIUVpCcnBVTEpRMmttVGpOOFBkSmU5NHpnM2NCUGZucE0zZ1ovUDk5UlB3eWZ5QXdDa01zZUdGc3lzanViQTdBLzllNXAzRC9aQ3k4RU9SMjg3MHVVUkRCQ2dibjRGai84OFcyRXZHemFSUHdNcCtEeXpDbDkxVnhHSnhYT0xSellsRjc0NGtVdmJWV1VyUzlkOHZWWHNBU1F4ZitXazZjc3gwL0o0bi9PRnZMRDlldUpzWCtuM3ZSalFEUHdEVXpudVNJb0ZRWUc4MUlBRUtScVRDWkh3VEM2MDUwSjVmT2h6enlpQWhNTGFHUlptb0haZE5wOTAzM0x6Sk0xS3QrMFg5OVBkWWRSR3NWQ0lKaVN4SHRvWUpDQ2dFaWlBbkpvcWpGTzVCdjE4VS9MS1RNZkFsTXFIdmZ1RmU0TW5NVVhNTGVpQThlMDA1aks1czA4UEtOeDFGdi9Qb2ZwNGtITWtWOXpvdjd3a05US2RFWkdLelN0b0lmQlFlZE9SQ3lMaE96VnFVdTBBY0tzOS9EQ3dGQjB2SVVqN0tlbU9XRVd2YXEvaDBkUy9aRDAzdmpJb2wyNDkvZ05tUUJSU25RT0FLQ2c0SnIrNVpYVGdnSVBCbnNrQWZIbXJ0dDUrTkJYdnZJUVhEcENuWXhYcnRkQmpuWDA5UjhqSFlGN0U2OFUyMXA3R2ZmYmVNc1lnSk5wM05INWpBNmhtc2t0WEhZZ3FxQlFVaXF1YTRzNTBCQUJrS3lBRWttdmJSY3R5UXprSDcvNjRuMEE3THQ0elkwMTZoZzlObk02R3hXWGZtMGZpVWxldjU0NDFXNTF2RUhCUm9nM1hQU21IWE1hci8xQnJyM0phNUhJVmlGU0x4SnhpSVNxUzBLUkpCTnQrdGtKNzJRbUVNL05sb2dWWnEwMUErQk1VUVE3QXlhbzlXaW0rd24zRTJiVU4rRzZSMXVpS1FpcTFMeWdGT0RFMURYcmFWUUtJc2dBVTVvTnh5SCtzN1dwenByN0F3V05qcEtVb2xrUFgrQ28rU3NQUjhocmFIWXdxY1ljbVFSTUpOUTFqUGR4OFZyQVVidGluc2dIOVlKUHRwMDhoWEd2MXlvODU0UWtDcFdCcFdISWdlWUZxdTFuRjZwOTRDM2Zhcmd6WDlCTjVPaHRiWGl0M0NwQllDY2RUS3NrOTMzdXo5b0x1aUdFakhUbXhzOWk0Y3hJaHBISXY3NkpHUXZoaHhCeUVqYm1RTnhIWExjamJEakkxaTBuQzlMZ1N2ZmZKUlJPR0ZCQW43MHhuZGJEZ21Ia0M0UTNZdlA2ZWNxL2NTeklKUlR4WmdQMW5FV3pnUi9jWlVVZG96NjhaQ29SNFVFNEhRSFBmZlIxRFlRelljQkhFbWVNVnVxR0UyM0dqZDZEbnpXT0Qyb0VuRkNpWHFaMFpZdm15UnlzRzE3WUtJbGR5aE9GSHF5SEl3YU01bXA5a0hybDBzQUhkSG8wenEvY2dpZUFkbUVPYkZuSngyUGlxSjM0NkVxWUFXQUpaaS94QnZIbGFDaTVmd3lJR1NTRGMyV1VFUUZxZ3lzL21yQ1h3SWVyVXp4ZjVRMUpNdkNPbjZwZWNzVUZteEhvS3NPd0hxeEFZY2lJT0lYc29qYmpFa0NTWWRETkMrVXVnRFpmY01VbFRiMFk0V3RqbUwvYXdYMkVlNEsxVDk1RC9tRFdSZXBsZ2RmYkVNc1dKdExRWGt4QXFFUHhLT29IYzRzLzhjV25mQms1aWZ1ZU5CQXU0Q2JBMUFreHU0QW5oaEZyQ2ZPcXI5V2pRNUZLbEtTYTl4Z3VFbjVoMG9qRUtLVlJ4ZUU2dzJUeEE0NUlVbFVDTjQyWmZnTHZPSExCUVB1QzBJTEZ1R2lrVFhGb1k5dFpsNC8xOWNTM1cxcDdCQy8zaHlBdnQybWlaUWRVSllhRWtYam5Za0ZzdzZSR25od1lWeFVraEM3VE0rYURyN3YvTFVGQnRnUTlWWGZLdVg4VmtKeXJKbFJKME0yaWFTZ2E0bUhXQ3NVeU5Ud3Nld3VXSkZ5c1JOUkpPeWtGd3FYZUNjemcyMFU3YWJqZlN4djlXUzJxR0IxR3Nod05MQ3RBeGRiQ0d0RzJZK2E5TGVrTXhrWS91cG5rWlVDNXlPSnZYcjN5NmlHOVN4RkVza3dma0N3WXN5VkJVTXgxV2FTWDlHaHZTaDFhSkNGcFU3WWcyR3BJakFzQy8zcmoxOW1GSVVFVzlVUXM1Z0RNcVdxMU1RSHkxcjd4RUo1V21CTk02THF1WkpIcXFKWmtDWk1TcjZ6WDRyS3FSV0xWQWlhemZDQzBjUDJHc2VvdVEwQ0N0akRXUFFoZ1NMZlE1aTRJbU82ZnJEUGZSZytnUWVvN1JFWUZpUWdyNE5WREVna0lER0dXSzZWYXRGNXJnajU1WXMvOWd5Rm8vTER2UnVIc0owWTFHRHg4NVpyQVA0L2VMSnozNk9JQXRQZTUzNXZZRHNEMmlRa0Nud1RUcHhaUlFMdlBmakovSU1TalIyOTZqdzRmdFovSW54bEUvQmVlSVhleGU3ZlBZWm5OVWl3emxucVJZcGxWYU1nRnpjcElSZFpzNDgzL0lIeUIrelBpWXBFbThRMUI1UmZRTW0wSHpQeUNyQzd1VVJWZlBpb0krSzVmRUttUzZSSkl6cjBzTjh4TmNLdHBSa3h2aWZ0YjZuQlB3dkswNHNjRnJGWXJVb3VqTWVLdUp3dk1UYkdQSG1xR25rSlRwNGo3ajE0c3Z2Y0JxaFpmZDFIVWZaeDY0K3lDVit6V2RsOEJyMjZScmZ0blo2ZjljRmJnUUE3WFlPK1ZzS2thTjhLdElQemc5Rlg0T3NYaC94bDFQc1liM1ptZG52SUZhcmErM1lqRzZQcTJFVk4zeXMvWG1pRUZmc0pCaXV3Mk9wZjBoVUZlNHltZEoxU08rT1JJUk1SaURMcnZkbzJiYVlaOHBTYmZOaUZvcWk1Z2p2MjBUOExQQmg3Ym9vQ0FrbFJXL3Ayc08zWi8xY2tyVG1WSDU4SUpBQ1ZEUmdLL2VzSG1QWTZTRDFmNnJqODFqYjgwZmVvTjF4TUdHYVdYay9RMGFsemRYRUI4KzJaY1VKVGxXUVJzUTdjZjIvSHlhWTdsSEJ3R3hOa09pTVA3ODRBUG52YnlqclU3VkdaZVVIYzAvZUorUnYwTHh5a083UWxqaUNNTTlxbjQveGVpR2E4S2hnUTVNOEJEZXpmby83OFBYbWFwZ293NWVsMWVjNTc4L3hXb2pNMi9hK0UvY1dFUDY0L2tUeWU2Z2pHeVRGRE12d3ZkYVNzSHZvWC9nUndGRkFUVEJyZ2JpR3JRdWVBV3ZHbjh3UWt5T0VFZ0tubmY5KzFyZU43MVlCbC9DYmZHMHpKVERvc05LWm9VZE5pUFVjVU5YL0dLbUxWaXprdWVpcFVzUUhpSVNrNmhSVGN2dEI2Z0tYY2cydzllSUlvM0VEVDJJUzhtRGU1akJjejZvVnJqYWFxM0VnNjNxeWJ1Wk9mOFZnL0Yvem9mNzluUndCaktndDc4OW4wQWx0ZTR6eGhCWGhLWUk0c2c4UllyV2JZSjkzWFUzV3RKanc2TTZ6d1VBcWE3eVgvQU1WdFB6M1FmWFk4emVDNHU0cFppMlFHdnRGNmVHeS9RUlpUS2MxNG96T3dFNkdLZFFmNlVyZU1USUZJWDgrVUllbm9ibGxJUHlIRDNjbEE5clFxNjg3c0lDWVJINVZUUUphVERmUU5mNVNHZWRkZFAyYXQycnJLTEs5S05CaDQzS0oyT1RjVFN0YTBBS2svdnVmcURVYXVyV3UyeWpQd1dRbDBiNDNnTFAwUDFkdC9iODdTQ2wwaFZYUkNwakl4VXBMQUtmaEdydVgyQXorZDUzNDU4SzFxSTFuaytOdXR4dllaeGJlaDhHNm81TFdXQmxXa0VjNTJoanhsMHRUY0FGYUpzRWc4L1JEd0tiQzhqRW8zZU90ZEtaVk1tQVBsS0RyUVVqNUN5UllwTFFEWXBQNzVsY2pGb3o0VEhObzlGMmdxRnRnZ3VoRFB0L1lOYnp3Q2xkTnVhMDJ1Q2xiTHdYenlmaC8vZUxOYnRwR1VsYlZ5SzUycldRMWVHdzEzZGRuak5wb0dCVFd2Q2tQTkw3amZEUm16OTd1akcwN3JNcFI0MjVEU21xOFBjS200dlJlWW96NW5MaWY5cWdUaXJGakNmVjZoVEk1d0haNHRsWWtwK1JnR0pJeVJhOTM3aVFzNXdJaXNTaVZ3Sis4bkRmVUEzbG9ZWVQ4TW95WmxFc291VzBWVVZ1WkxYU1EvcG1FTDAzaTBaUW0ybUZqRHY3a1cyeHM3bkszSnRBTjhGM3NLbExMekcxZkZDMUhVenZ1bDVjdmZOQ1dTN2c4dnB1ckZFdFFVb0tsK1VRdkx6bWlvNnIyeFI5R2xkQVYzL2tTOERMQ3NaMmd1eXNHbVRDVjdRREVKQnV2SnZhbThXTy9EKzExQjIvNGd2YnpLQUxHeCtSZEdoRndtaks1aWRtZWI1YVRIazZKY3VSSlk2TzR1L2xOR0YxOUhEcUl6NTBrRnVCYzNKZW9nZ0g5TjBUelQzSlVWUGlFWkNGTm9PNWVtT0lmbXh3STVoZXV1eHVTT3BEZFBEQzJCWUFuT1JFdEk4aElzdEc5ZGVrczNsc3BlczNmallobldzdUc3RGxyVVRTODlLcHRQSnM1Wk9mR1JpMmY1VU9wM2F2MnppZ3NWbXpGeHM0UDhleGY5KytZaG1XUnJacU0xUzByMkVGTUVIOGJaRUgvWFlzUzlBb1ZScS9tTS9nbCtXU24zM3E3WmxXMS9WUWhyK093VllNUXYvWFk3L0FWTCtFRHRtY3NudDZOZm9ZcHB2V1dUWWZjVHZobnJlbFB6LzY2VTZkWmNsSzNsVEJJcWdYd0dlVDRST1dkdy90R1BuMG1WOU8zcFhENVlzVFpUd0lncGtLZHh4UWFVMk5qMWVHVHB0NDRKVndhQVlBTmVOalczZFBISkt4SklNaUJkYnc0Z3M2Ri9VMmIxNGNYLy8rblhMeHkvc2RtU0Z4N3lrbElsc1dsQ3BuOEdaVFd3MWs5cmdGM0lyUGZUbnE3aGJ1WHU1eDdsbnVGZTROM0F2bnpoajVXSVA3cmNBV3UzeWxkYURjdXVCZE5LRCtZYjlBanZ5elhYTzMzaTdkTXo5Zit0cmo3MGZUTTlQa3VsSHpCayt6TzJGYkdldzNZZm03YnlUN25kOXNPRGcwRW1lTnQ2OEEvejJiOTZTYlY2bHV6SHZCaEtPZDNRT21IZ09rcnJsNVBnY21Obk1YQkZ3UVlNbFFLV25tOURHNHlkOVVRc0E4dlE3dWNuSGluNkt5dlFoUEo1Nk1SKzNuN3VTZUpwVC9SckJqNjh6NHBnbjBkejFES0w2ZkJLZWdhVnc3NnhEcklJUzlTOHY5NkZ5eVVNS0tQZkJRcjZKbXVrWkVtc3NucnlNYUJnWnZ0RHlRRmdHdnl0MlNieGpTVnJBNFBYMXF5UXpLZ2J0enE2SlBrdEJRVnZVOGVsQWVPbnVoWklaa1lJVzVqR1ViRkVOYWpJbWlxV1ZTd1pzS0VwTFl6a3pxcWt4SnhCSjJXZExmTmYyK3VXVHBjbkMwclZDZTByTGpmQXJlRVFlYTQwZlhoM1R2YWVpdGs4L0RINHVqNWVzRkE4azFWcDlzUTJDYlNsMHRkeS84cFJPTzRsUEt0YWk4L2FPYThET0pubjNYRlZzVjhLRU56cHQ5NzRoU1VkSnRmMlVOU25IRVRUK2pNT0o3OSsrK1QzZHNRanFsZkp0MFpLVzY0YndEUG84WTlXNVZ5MjFVZ2l6YzlZL0FiUHN5WWh2MGZnb215S1ZEV1ZndURVK3hsdlNNSi9XRW1HNkdOZ3NTM01GalZqcGlOYVRhOXpRM3RQZERoNnhUTk9xZ3dXV3Jscy90RFROd3IrM0RNTkNtaFpPMjQzMzUzdjdDL0E5YmYyTlhXYmNnZ2c4YTBVdC9PY3VGYXk0U2ZHTE9YUUlBVHdlaXBpYlhNL3Q0YzdtTHVGdTRtN0dYeGFpSzhNb0hDYTBNRThwWXlnRDZRbElEeDF5V0dOTEJ6N0ZxR2UwNVI1WUQzblpmR29NSThCQW50R0NwcnZ5TldMbCtYZlIvQlJoVUhLeTBmQkFUOTd5OXJMMHNKa3Vsb3NwMDB5Vnl1MXBTZGx1eEhMRnJDR3FTTlJqZVZxQzRtOEM0WFJiT2h5Z3U1RDJ6Nm9jU3VweHhWRVZ2SThGMWQzNS9ueSszMVprQ2NTSVpTbjJMcEl4U3RSNHhkL0REOGE2ODdJU3pIWDNzMzA0OXFkUTg3V0drWFlzOTgxZ0xxN3BXTVNRclBaOFREZEl5VDdiU2tVQ2VCamkxNVBtWHpmM1dqVUlnQnFNM1JQTDV3Znl3RkxDZHdTajBmWlk3SXpXOS9LQ1pESys3NC84N1NqbzhYMWtaU3BsSmRHaWJxR1E4SFMrNTVSRDFta0NsT3FYdmZQOHJ0Mk52cWxLWlFxK09qVU1HdThIVGpvVVNvV2ZTbmVuQWNDYjIwUDRPQjJDUDZwVVRtMzg3dFJoVU4wTU5mY1dramJ0ZGJKeGZ4OUpweU5nQ2RtNnZ6Y2R4M3lkYkxqL0Yxa255SXNBQUhpY1kyQmtZR0FBWXJ2N2RucngvRFpmR2JoWkdFRGdoc084alFqNmZ5L0xKT1lTSUplRGdRa2tDZ0FqUUFxckFIaWNZMkJrWUdCdStOL0FFTU9xeEFBRUxKTVlHQmxRQUtNNkFGVnhBMFlBZUp4allXQmdZQm5GbzNnVWorSkJoRm1WR0JnQXJsd0V3QUFBQUFBQUFBQUFmQUNxQU9BQlRBSEFBZm9DV2dLdUF1UURTQVAwQkRRRWhnVElCUjRGVmdXZ0JlZ0d5Z2I2Qno0SFpBZW1DQUlJVUFqY0NTd0pwQW5XQ2pRS3Bnc3lDM1FMekF4RURPSU5rQTRBRG00UEJnK2lEOFlRZkJGQ0VlUVNFaEtVRThZVUlCU1FGUkFWbGhZaUZtSVcrQmM0RjRnWDNCZ0tHRzRZbkJqNkdhWWFFaHF3RzFnYjFoeEVITElkQUIxMEhiSWVNaDc2SDRJZjdpQllJTEloY0NIMklsWWl2Q05VSS9Za2JDV1FKbHdtK2lkQUozWW4waWdBS0VBb2xpakVLVGdweENucUtxQXJQQ3YyTExJcy9DMDBMWUl0dkM0VUxuQXU0Qzg0TDZJdjlEQitNT1F4WERJc015NHpxalFZTkVvMDlqVTROaFkyY0RiUU56NDMrRGhnT0tBNUJEazhPY0E2VGpyT095ZzdyandPUElBOUFqMmtQZ2crZ0Q3WVB5WS9lRC82UUtCQmJrRzRRbHBDc0VNS1E0NUQ1RVE0Ukg1RTFrV01SajVHemtjMFI4Qklla2p5U1poSjdrb2VTbnhLeGtzOFM5Uk1GRXk0VE9wTlNFM2lUeUpQaUZBcVVKWlJEbEZnVWR4U1JGTGVVMGhUM2xSRVZPQlZWRlg4Vml4V1NsWjBWcXhYRkZmT1dCcFllRmpzV2JaYUJGcEdXcFJhM2xzY1cxcGJpRndVWEw1YzFsMHdYWXBkN0Y2WVh3WmZWRit1WURaZzRtSEdZakJqVUdSc1pNcGxabVh3Wm1SbkVtZHNaOVpvTUdoS2FHUm9uR2s4YVZocG1HbjhhbFpxem1zNmEvSnNhbXpXYlk1dUttNmFieUJ2em0vc2NCeHd2bkVNY1lCeUFuS2VjeGh6cG5RT2RHcDA1SFZtZGFCMThuWmFkeGg0SG5pVWVMaDQ1bm1lZWg1NmdIcW1ld3g4R254aWZKQjlEbjJJZmlKK1RIN1VmMEIvdW9CWWdQS0JRb0pxZ3l5RGNvUThoSXA0bkdOZ1pHQmdWR2U0eDhEUEFBSk1RTXdGaEF3TS84RjhCZ0FqaWdJc0FIaWNaWTlOVHNNd0VJVmYrZ2VrRXFxb1lJZmtCV0lCS1AwUnEyNVlWR3IzWFhUZnBrNmJLb2tqeDYzVUEzQWVqc0FKT0FMY2dEdndTQ2ViTnBiSDM3eDVZMDhBM09BSEhvN2ZMZmVSUFZ3eU8zSU5GN2dYcmxOL0VHNlFYNFNiYU9OVnVFWDlUZGpITTZiQ2JYUmhlWVBYdUdMMmhIZGhEeDE4Q05kd2pVL2hPdlV2NFFiNVc3aUpPL3dLdDlEeDZzSSs1bDVYdUkxSEwvYkhWaStjWHFubFFjV2h5U0tUT2IrQ21WN3Zrb1d0MHVxY2ExdkVKbE9Eb0Y5SlU1MXBXOTFUN05kRDV5SVZXWk9xQ2FzNlNZektyZG5xMEFVYjUvSlJyeGVKSG9RbTVWaGovcmJHQW81eEJZVWxEb3d4UWhoa2lNcm82RHRWWnZTdnNVUENYbnRXUGMzbmRGc1UxUDl6aFFFQzlNOWNVN3F5MG5rNlQ0RTlYeHRTZFhRcmJzdWVsRFNSWHMxSkVySkNYdGEyVkVMcUFUWmxWNDRSZWx6UmlUOG9aMGovQUFsYWJzZ0FBQUI0bkcxV0JaVHJ1QldkcXhpVHpNeUgzYi9NV05pMnUyVm1adVpPWlZ0SnRMRXRqeVFuTTF0bVptWm1abVptWm1abTVncnN5ZCtlemprVDNTZkowdE45OXoxcGphejV2K0hhLy8zRFdTQVlJRUNJQ0RFU3BCaGloREhXc1lGTjdNTitITUJCSElFamNRaEg0V2djZzJOeEhJN0hDVGdSSitGa25JSlRjUnBPeHhrNDA2eDFOaTZDaStKaXVEak93U1Z3U1Z3SzUrSThYQnFYd1dWeE9Wd2VWOEFWY1NWY0dWZkJWWEUxWEIzWHdEVnhMVndiMThGMWNUMWNIemZBRFhFajNCZzN3VTF4TTl3Y3Q4QXRjU3ZjR3JmQmJYRTczQjUzd0IxeEo5d1pkOEZkY1RkczRlNmd5SkNqQU1NRVU4ekFjVDdtS0ZHaGhrQ0RiVWdvYUxSWVlJa2Q3T0lDM0FQM3hMMXdiOXdIOThYOWNIODhBQS9FZy9CZ1BBUVB4Y1B3Y0R3Q2o4U2o4R2c4Qm8vRjQvQjRQQUZQeEpQd1pEd0ZUOFhUOEhROEE4L0VzL0JzUEFmUHhmUHdmTHdBTDhTTDhHSzhCQy9GeS9CeXZBS3Z4S3Z3YXJ3R3I4WHI4SHE4QVcvRW0vQm12QVZ2eGR2d2Ryd0Q3OFM3OEc2OEIrL0YrL0IrZkFBZnhJZndZWHdFSDhYSDhIRjhBcC9FcC9CcGZBYWZ4ZWZ3ZVh3Qlg4U1g4R1Y4QlYvRjEvQjFmQVBmeExmd2JYd0gzOFgzOEgzOEFEL0VqL0JqL0FRL3hjL3djL3dDdjhTdjhHdjhCci9GNy9CNy9BRi94Si93Wi93RmY4WGY4SGY4QS8vRXYvQnYvSWVzRVJCQ0JpUWdJWWxJVEJLU2tpRVprVEZaSnh0a2srd2orOGtCY3BBY1FZNGtoOGhSNUdoeUREbVdIRWVPSnllUUU4bEo1R1J5Q2ptVm5FWk9KMmVRTThsWjVPeTFJVzBheVhKT05RdnpHY3ZuWVY0S3hRSldjQjJ5U3B6UDB3bGRDRG5oWlJrNkZKZUNGcnllamt1UlU4MUZiWWVTM2dpYm1halpoaFJ0WGJqMTdPaHdaWFlqZG8vRFJxenBSeVNmenZScXhKbVJZbFRtczBEVEhaNW9Ycmt2QXd1aXRwNklza2lXVkRvM0FndUdPYTJZcE5hT1BCemxvcXBZN2RhTk81eVVmTzRYc21CZkxUU2Y4TldCeG9kM2hFSVdUQ2FLZGx0YkVCZXM1QXZUeXhhMGJBMTlnNGJ1Qm9yVlJhQm1vb2sweitkTUJ4bk41MGxPVlU0THBwS0NxMXlZajh5ZVNnZVZrQ3d3STNXaW1OYUdValhlYnBuYTQ3UTNFcnVnMjNnaVpEVm9lQjRaU3pPWlRvVFFqZVMxSG1qUkpFMWJsb1ZZMXBFRmJSTTY4bUxKSnBLcDJjanVSZzJqZ2hkRDR6dlQ3aXlSR1RZOEJ6bVZPdHFXdVNpWTZhcDRYVVIrVXR4SVlTYXlZQ1lxbHRocGpwNytKTTVSTytTNHJaaFNkTXBHdENqTW5pb1RZbTZPV3BzZmtjOU5zR3d6V1BBbVhES2VpWVRtbWkrNDNsMmZTRzZJTTEvWlZkSTlhK3pSaEZhaVZaRTN3cWtRaFVxVmNTNjM1TVJzcHluTjBZeWZ6TEN2TjlWMlM0MmllKzFGM2g0ZDFoMDZhWTNkYjdkbjBoc0Q4My9vUW1JUU11TnV6cWpicVl0RVdRUlRvNE5Vc3FLaE50YnJlejQ1TGhTdmVFbmx4aXJCM0ViY3JPaFdzR0JrVmplU2RjdkhIUjViTDZtYyt1bTlFUnZXRFBsRnVCQThaNm43ZFU3MUZKbk1ESmJHNjFDWitTeGF1bEd5WkdscFZVQmJMVVlPK2ZQNFhoZEpueUpTYUZzQ1hIZWNVU2VFelVsSjFjeDErUXhkMmFKaDlkQ25wWlZ5ckpoY0dJOENKYVFPbkFZcmtSblZESDNqRHB5TFpuYzlOenhyTzhGRmVzOGFXc3I5aVNJUFIyMmpOUFVzeEIxT01wcnR1clVzU0ROcDlPd0trME1iK2N5eVVodmh1UUt5TWtmR2ZUMWp5dWUveCtQY3BJT1JuNmU1TjZJSnEyakpram5iellTaE83QldYTE9sblRVd3JVc3ljeUNkV3VBeUxER2JPNmtGRmd3eVdxU2VVeU9sY0NMeVZnMjdJSms1NjN0RDdnc2pEcFUybFB2YUZEb1Vtd1Iza2VreWwwb3Bsb1lxbzcyUzFTcXBxUFRiV1REcVpOL2xjc05vR2RJeWE2dGh3MFRqbVk4OEhIVkI2cWRTTGdPYjJVT1BYVUEwRlR1Y2lxWTFBdUk3dkY2bldwdlZPMDJuZTVhcnFCMzdjWWZYYmR2V0pwKzcySFpXWUxndFRPVW9iVkxMUWQ3cXNLSlRubzl0YmV6Vm56UWw5YUZWUmx5eGliWmozTFRoMU9SbU02QW1vdmFEcmlyTmhEdnl3TFJCSTVRTlFzRkZKblpTbDhsT2dtMWpyNnAwS2JuUHZkQ2hjVC9UTTk3Vytjem16SnlaZXJ3d0NxWVROdTRMa3orSTdPUWFPcFM2QXVSeXJ5dDNEbmRsMHMxVDFvV1Jha1N0L00wWmQ5Z0lPYk0xTUY0eTE2WkwxdFlldWJ2V3p0M3d5S2FhVTRGRFdldkowV3hIRDcwRE51UFRxbFZlTEpzZTdSVXJXOUNMZlZweVdrOUwxaWZjUnQvUnV2dmtnT1BLcXRsYTU5Z0VOWVd0MXFIbTJ1a2lGejQ2a1lmcmRsR1hGNTZZM2tyc3ZkVGxPSzgzVjdPY084T2N5N3hUb29lYksxVzVHUWYveDNhK3JmcjY5OGZHaGJzaTU2VktlZDY5U0lKSjY3S0NsNTM0YldrYU83YTZERTU2STYxWVFVc1hMSWNTMCtkamFrRW5ycmpEZ1czVEJTK1lxOXloUXdIYjRUcFJjKzRmSGhhTUsvUDAyYzI4ZEVldGVlRVlmM3o5OGpqcEoyenNYUnBiTHNhcXpWUXVlZU51Kys0MDUwWlRybWR0RmsxTGtWRXpwM3NqdUE5c0ptejF0N201bCt4dGEzSnd2WCtNdUdXSExuTWMzRy9UYTZ1N1lmeWUzZnZGR1FkOHpkM3k5Ry8xYjQxNVlFclIzRnpXOVFVOFptWEpHOFhpYmJsbEw0ZTRNRXFhdFRUZytjcm44d2FacnRmVy9ndGhubUpUQUFBQScpIGZvcm1hdCgnd29mZicpLFxcclxcblxcdFxcdHVybCgnLy9hdC5hbGljZG4uY29tL3QvZm9udF81MzM1NjZfeWZxMmQ5d2Rpai50dGY/dD0xNTQ1MjM5OTg1ODMxJykgZm9ybWF0KCd0cnVldHlwZScpLFxcclxcblxcdFxcdFxcclxcblxcdFxcdHVybCgnLy9hdC5hbGljZG4uY29tL3QvZm9udF81MzM1NjZfeWZxMmQ5d2Rpai5zdmc/dD0xNTQ1MjM5OTg1ODMxI2N1SWNvbmZvbnQnKSBmb3JtYXQoJ3N2ZycpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZm9udEZhbWlseVwiOiBcIkJNWFlcIixcbiAgICAgIFwic3JjXCI6IFwidXJsKFxcXCJodHRwczovL3d3dy5rdWd1YXlvdWh1aS5jb20vZm9udHMvQk1YWS50dGZcXFwiKVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiLFxuICAgICAgXCJzcmNcIjogXCJ1cmwoXFxcImh0dHBzOi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTI1MDE0NF94cTc1aTlwOHBzaS50dGZcXFwiKVxcclxcbiAgICBmb3JtYXQoXFxcInRydWV0eXBlXFxcIilcIlxuICAgIH1cbiAgXSxcbiAgXCJjdUljb24tYXBwcmVjaWF0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0NFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jaGVja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0NVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jbG9zZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0NlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1lZGl0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWVtb2ppXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZhdm9yZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0YlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mYXZvclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0Y1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1sb2FkaW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxvY2F0aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1MFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1sb2NhdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1MVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1waG9uZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1MlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yb3VuZGNoZWNrZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1NlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yb3VuZGNoZWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJvdW5kY2xvc2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJvdW5kY2xvc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcm91bmRyaWdodGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcm91bmRyaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1YlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zZWFyY2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdGF4aVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1ZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10aW1lZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1ZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10aW1lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXVuZm9sZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2MVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi13YXJuZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2MlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi13YXJuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjYzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhbWVyYWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FtZXJhXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNvbW1lbnRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNvbW1lbnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbGlrZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjhcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbGlrZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2OVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ub3RpZmljYXRpb25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5vdGlmaWNhdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2YlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1vcmRlclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2Y1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zYW1lZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2ZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zYW1lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWRlbGl2ZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZXZhbHVhdGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGF5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjczXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNlbmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2hvcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3NlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10aWNrZXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYmFja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3OVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYXNjYWRlc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3Y1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1kaXNjb3ZlclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3ZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1saXN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjgyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1vcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ODRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2NhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4OVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zZXR0aW5nc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4YVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1xdWVzdGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcXVlc3Rpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2hvcGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZm9ybVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5OVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1waWNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZmlsdGVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjljXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZvb3RwcmludFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5ZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10b3BcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcHVsbGRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcHVsbHVwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmEwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmEzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlZnJlc2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbW9yZWFuZHJvaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZGVsZXRlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhNlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZWZ1bmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YWNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FydFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1xcmNvZGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVtaW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmIyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWRlbGV0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wcm9maWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWhvbWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjhcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FydGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZGlzY292ZXJmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmJhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWhvbWVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmJiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1lc3NhZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYWRkcmVzc2Jvb2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbGlua1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1sb2NrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmMwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXVubG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi12aXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td2VpYm9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYWN0aXZpdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZnJpZW5kYWRkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjOVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mcmllbmRhZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2FcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZnJpZW5kZmFtb3VzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZyaWVuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1nb29kc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zZWxlY3Rpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2VcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZXhwbG9yZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wcmVzZW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNxdWFyZWNoZWNrZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zcXVhcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc3F1YXJlY2hlY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcm91bmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcm91bmRhZGRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJvdW5kYWRkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkYVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ub3RpZmljYXRpb25mb3JiaWRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWV4cGxvcmVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZvbGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZ2FtZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZWRwYWNrZXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2VsZWN0aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlMVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zaW1pbGFyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmUyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWFwcHJlY2lhdGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmUzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWluZm9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmU0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWluZm9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZm9yd2FyZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZm9yd2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZWNoYXJnZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVjaGFyZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdmlwY2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi12b2ljZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi12b2ljZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZnJpZW5kZmF2b3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td2lmaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zaGFyZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi13ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbGlnaHRhdXRvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxpZ2h0Zm9yYmlkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxpZ2h0ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmOFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYW1lcmFyb3RhdGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYmFyY29kZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mbGFzaGxpZ2h0Y2xvc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZmxhc2hsaWdodG9wZW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2VhcmNobGlzdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zZXJ2aWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNvcnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tb2JpbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbW9iaWxlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jb3B5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNvdW50ZG93bmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY291bnRkb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5vdGljZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbm90aWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXVwc3RhZ2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXVwc3RhZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MGZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYmFieWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYmFieVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxMVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1icmFuZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYnJhbmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2hvaWNlbmVzc2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2hvaWNlbmVzc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jbG90aGVzZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxNlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jbG90aGVzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNyZWF0aXZlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxOFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jcmVhdGl2ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxOVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mZW1hbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24ta2V5Ym9hcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbWFsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1uZXdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5ld1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wdWxsbGVmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wdWxscmlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmFua2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmFua1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1iYWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FtZXJhYWRkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZvY3VzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZyaWVuZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FtZXJhYWRkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyN1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hcHBzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBhaW50ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyYVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wYWludFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1waWNmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlZnJlc2hhcnJvd1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jb2xvcmxlbnNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbWFya2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbWFya1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczMVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wcmVzZW50ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZXBlYWxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYWxidW1cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGVvcGxlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wZW9wbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2VydmljZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVwYWlyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZpbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVwYWlyZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczYVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10YW94aWFvcHVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2JcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td2VpeGluXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjEyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWF0dGVudGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2NcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYXR0ZW50aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNvbW1hbmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNvbW1hbmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2ZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY29tbXVuaXR5ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0MFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jb21tdW5pdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVhZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0MlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYWxlbmRhclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0YVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jdXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbWFnaWNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYmFja3dhcmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBsYXlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXN0b3BcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdGFnZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1MVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10YWdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZ3JvdXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWJhY2tkZWxldGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24taG90ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1N1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ob3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NThcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcG9zdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1OVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yYWRpb2JveFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1YlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yb3VuZGRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NWNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdXBsb2FkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzVkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdyaXRlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2MFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi13cml0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2MVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yYWRpb2JveGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcHVuY2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2hha2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbW92ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2OFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zYWZlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWFjdGl2aXR5ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3NVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jcm93bmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY3Jvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZ29vZHNmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1lc3NhZ2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXByb2ZpbGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNvdW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNwb25zb3JmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNwb25zb3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2RcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdXBibG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3ZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi13ZWJsb2NrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdldW5ibG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4MFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1teVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4YlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1teWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZW1vamlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzhkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWVtb2ppZmxhc2hmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzhlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZsYXNoYnV5ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4ZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10ZXh0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzkxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWdvb2RzZmF2b3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbXVzaWNmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzk1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW11c2ljZm9yYmlkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5NlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYXJkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjI0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRyaWFuZ2xlZG93bmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OWJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdHJpYW5nbGV1cGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OWNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcm91bmRsZWZ0ZmlsbC1jb3B5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzllXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZvbnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NmFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdGl0bGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MmZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVjb3JkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZWNvcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FyZGJvYXJkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhOVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYXJkYm9hcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YWFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZm9ybWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YWJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY29pblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYXJkYm9hcmRmb3JiaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YWZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2lyY2xlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jaXJjbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYXR0ZW50aW9uZm9yYmlkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2IyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWF0dGVudGlvbmZvcmJpZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYXR0ZW50aW9uZmF2b3JmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2I0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWF0dGVudGlvbmZhdm9yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2I1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRpdGxlc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwMVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1pY2xvYWRpbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2N2FcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZnVsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tYWlsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2JkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBlb3BsZWxpc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZ29vZHNuZXdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2JmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWdvb2RzbmV3XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2MwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1lZGFsZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjMVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tZWRhbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1uZXdzZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1uZXdzaG90ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1uZXdzaG90XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2M1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5ld3NcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdmlkZW9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2M3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXZpZGVvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2M4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWV4aXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2JcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2tpbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2NcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2tpblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tb25leWJhZ2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2VcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdXNlZnVsbGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2ZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdXNlZnVsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tb25leWJhZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkMVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZWRwYWNrZXRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zdWJzY3JpcHRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbG9hZGluZzFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MzNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZ2l0aHViXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjkyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWdsb2JhbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zZXR0aW5nc2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YWJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYmFja19hbmRyb2lkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWV4cHJlc3NtYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZXZhbHVhdGVfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ncm91cF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBsYXlfZm9yd2FyZF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWRlbGl2ZXJfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmN1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ub3RpY2VfZm9yYmlkX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjhcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZm9ya1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1waWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ZhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdlbnppXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmE3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWVsbGlwc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcXJfY29kZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1kaWFuaHVhXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWN1SWNvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1sb2FkaW5nMlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmMVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1idG5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDFcXFwiXCJcbiAgfSxcbiAgXCJpY29uXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJcXFwiaWNvbmZvbnRcXFwiXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE2XCIsXG4gICAgXCJmb250U3R5bGVcIjogXCJub3JtYWxcIixcbiAgICBcIldlYmtpdEZvbnRTbW9vdGhpbmdcIjogXCJhbnRpYWxpYXNlZFwiLFxuICAgIFwiTW96T3N4Rm9udFNtb290aGluZ1wiOiBcImdyYXlzY2FsZVwiXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9