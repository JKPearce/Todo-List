/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: #bae6fd;\n  color: #075985;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.6;\n  min-height: 100vh;\n}\n\nheader {\n  width: 100%;\n  background-color: #075985;\n  color: #bae6fd;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  height: 90px;\n}\n\nmain {\n  display: flex;\n}\nmain button {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n  background-color: inherit;\n  text-align: left;\n}\nmain button:hover {\n  background-color: #0ea5e9;\n}\nmain aside {\n  width: 300px;\n  min-width: 250px;\n  height: calc(100vh - 90px);\n  background: #f0f9ff;\n  padding: 20px;\n}\nmain aside nav {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\nmain aside nav .top-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\nmain aside nav h1 {\n  padding: 5px;\n}\nmain aside nav .project-btn-wrapper {\n  margin-left: 2rem;\n}\nmain aside nav .project-btn-wrapper button {\n  margin: 10px 0;\n}\nmain aside nav .add-project-btn {\n  display: inline-block;\n}\nmain aside nav .add-project-btn.active {\n  display: none;\n}\nmain aside nav form {\n  display: none;\n  flex-direction: column;\n  padding: 10px;\n  gap: 1rem;\n}\nmain aside nav form.active {\n  display: flex;\n}\nmain aside nav form input {\n  font-size: 1.6rem;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n}\nmain aside nav form .add-project-form-buttons {\n  display: flex;\n  gap: 0.5rem;\n}\nmain aside nav form .add-project-form-buttons .btn-submit {\n  background: lightgreen;\n  color: #075985;\n  font-weight: bold;\n}\nmain aside nav form .add-project-form-buttons .btn-cancel {\n  background-color: rgba(255, 0, 0, 0.3);\n  color: #075985;\n  font-weight: bold;\n}\nmain aside nav form .add-project-form-buttons button:hover {\n  background: #ccc;\n}\nmain .content {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 1rem;\n  width: 900px;\n  gap: 1rem;\n}\nmain .content .add-new-task-btn {\n  height: 50px;\n  display: inline-block;\n}\nmain .content .add-new-task-btn.active {\n  display: none;\n}\nmain .content .project-todo-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\nmain .content .project-todo-card {\n  background-color: #f0f9ff;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n}\nmain .content .add-new-task-form {\n  flex-direction: column;\n  gap: 1rem;\n  display: none;\n}\nmain .content .add-new-task-form.active {\n  display: flex;\n}\nmain .content .add-new-task-form input {\n  font-size: 1.6rem;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n}\nmain .content .add-new-task-form input[type=radio] {\n  box-shadow: none;\n}\nmain .content .add-new-task-form #taskDescription {\n  overflow: auto;\n  height: 200px;\n}\nmain .content .add-new-task-form #taskDueDate {\n  max-width: 30%;\n  font-size: 1rem;\n}\nmain .content .add-new-task-form .priority-wrapper {\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  margin: 1rem 0;\n}\nmain .content .add-new-task-form .btn-submit {\n  background: lightgreen;\n  color: #075985;\n  font-weight: bold;\n}\nmain .content .add-new-task-form .btn-cancel {\n  background-color: rgba(255, 0, 0, 0.3);\n  color: #075985;\n  font-weight: bold;\n}\nmain .content .add-new-task-form button:hover {\n  background: #ccc;\n}\nmain .content .add-new-task-form .form-buttons {\n  display: flex;\n  gap: 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/scss/main.scss"],"names":[],"mappings":"AAOA;;;EAGI,sBAAA;EACA,UAAA;EACA,SAAA;AALJ;;AAQA;EACI,yBAZY;EAaZ,cAfW;EAgBX,iCAAA;EACA,gBAAA;EACA,iBAAA;AALJ;;AAQA;EACI,WAAA;EACA,yBAvBW;EAwBX,cAtBY;EAuBZ,aAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;AALJ;;AAQA;EACI,aAAA;AALJ;AAOI;EACI,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,cAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,yBAAA;EACA,gBAAA;AALR;AAQI;EACI,yBAhDS;AA0CjB;AASI;EACI,YAAA;EACA,gBAAA;EACA,0BAAA;EACA,mBArDU;EAsDV,aAAA;AAPR;AASQ;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAPZ;AASY;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAPhB;AAUY;EACI,YAAA;AARhB;AAWY;EACI,iBAAA;AAThB;AAWgB;EACI,cAAA;AATpB;AAaY;EACI,qBAAA;AAXhB;AAYgB;EACI,aAAA;AAVpB;AAcY;EACI,aAAA;EACA,sBAAA;EACA,aAAA;EACA,SAAA;AAZhB;AAcgB;EACI,aAAA;AAZpB;AAegB;EACI,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,sCAAA;AAbpB;AAgBgB;EACI,aAAA;EACA,WAAA;AAdpB;AAgBoB;EACI,sBAAA;EACA,cAjHT;EAkHS,iBAAA;AAdxB;AAiBoB;EACI,sCAAA;EACA,cAvHT;EAwHS,iBAAA;AAfxB;AAkBoB;EACI,gBAAA;AAhBxB;AAuBI;EACI,aAAA;EACA,sBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,SAAA;AArBR;AAuBQ;EACI,YAAA;EACA,qBAAA;AArBZ;AAuBY;EACI,aAAA;AArBhB;AAyBQ;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAvBZ;AA0BQ;EACI,yBAxJM;EAyJN,aAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;EACA,mBAAA;EACA,sCAAA;AAxBZ;AA2BQ;EACI,sBAAA;EACA,SAAA;EACA,aAAA;AAzBZ;AA2BY;EACI,aAAA;AAzBhB;AA4BY;EACI,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,sCAAA;AA1BhB;AA6BY;EACI,gBAAA;AA3BhB;AA8BY;EACI,cAAA;EACA,aAAA;AA5BhB;AA+BY;EACI,cAAA;EACA,eAAA;AA7BhB;AAgCY;EACI,aAAA;EACA,2BAAA;EACA,SAAA;EACA,cAAA;AA9BhB;AAiCY;EACI,sBAAA;EACA,cA5MD;EA6MC,iBAAA;AA/BhB;AAkCY;EACI,sCAAA;EACA,cAlND;EAmNC,iBAAA;AAhChB;AAmCY;EACI,gBAAA;AAjChB;AAoCY;EACI,aAAA;EACA,WAAA;AAlChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n$primary-dark: #075985;\n$secondary-dark: #0ea5e9;\n$primary-light: #bae6fd;\n$secondary-light: #f0f9ff;\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    background-color: $primary-light;\n    color: $primary-dark;\n    font-family: 'Roboto', sans-serif;\n    line-height: 1.6;\n    min-height: 100vh;\n}\n\nheader {\n    width: 100%;\n    background-color: $primary-dark;\n    color: $primary-light;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    height: 90px;\n}\n\nmain {\n    display: flex;\n\n    button {\n        width: 100%;\n        padding: 10px 20px;\n        border-radius: 5px;\n        cursor: pointer;\n        border: none;\n        color: inherit;\n        font-family: inherit;\n        font-size: inherit;\n        outline: none;\n        background-color: inherit;\n        text-align: left;\n    }\n\n    button:hover {\n        background-color: $secondary-dark;\n    }\n\n    aside {\n        width: 300px;\n        min-width: 250px;\n        height: calc(100vh - 90px);\n        background: $secondary-light;\n        padding: 20px;\n\n        nav {\n            display: flex;\n            flex-direction: column;\n            gap: 2rem;\n\n            .top-section {\n                display: flex;\n                flex-direction: column;\n                gap: 2rem;\n            }\n\n            h1 {\n                padding: 5px;\n            }\n\n            .project-btn-wrapper {\n                margin-left: 2rem;\n\n                button {\n                    margin: 10px 0;\n                }\n            }\n\n            .add-project-btn{\n                display: inline-block;\n                &.active{\n                    display: none;\n                }\n            }\n\n            form{\n                display: none;\n                flex-direction: column;\n                padding: 10px;\n                gap: 1rem;\n\n                &.active{\n                    display: flex;\n                }\n\n                input{\n                    font-size: 1.6rem;\n                    padding: 10px;\n                    border-radius: 10px;\n                    border: none;\n                    box-shadow: 2px 2px rgba($color: #000000, $alpha: 0.3);\n                }\n\n                .add-project-form-buttons{\n                    display: flex;\n                    gap: 0.5rem;\n                    \n                    .btn-submit {\n                        background: lightgreen;\n                        color: $primary-dark;\n                        font-weight: bold;\n                    }\n        \n                    .btn-cancel {\n                        background-color: rgba($color: red, $alpha: 0.3);\n                        color: $primary-dark;\n                        font-weight: bold;\n                    }\n        \n                    button:hover {\n                        background: #ccc;\n                    }\n                }\n            }\n        }\n    }\n\n    .content {\n        display: flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n        padding: 1rem;\n        width: 900px;\n        gap: 1rem;\n\n        .add-new-task-btn {\n            height: 50px;\n            display: inline-block;\n\n            &.active {\n                display: none;\n            }\n        }\n\n        .project-todo-wrapper {\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n        }\n\n        .project-todo-card {\n            background-color: $secondary-light;\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n            padding: 1rem;\n            border-radius: 1rem;\n            box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n        }\n\n        .add-new-task-form {\n            flex-direction: column;\n            gap: 1rem;\n            display: none;\n\n            &.active {\n                display: flex;\n            }\n\n            input {\n                font-size: 1.6rem;\n                padding: 10px;\n                border-radius: 10px;\n                border: none;\n                box-shadow: 2px 2px rgba($color: #000000, $alpha: 0.3);\n            }\n\n            input[type=\"radio\"]{\n                box-shadow: none;\n            }\n\n            #taskDescription {\n                overflow: auto;\n                height: 200px;\n            }\n\n            #taskDueDate {\n                max-width: 30%;\n                font-size: 1rem;\n            }\n\n            .priority-wrapper {\n                display: flex;\n                justify-content: flex-start;\n                gap: 1rem;\n                margin: 1rem 0;\n            }\n\n            .btn-submit {\n                background: lightgreen;\n                color: $primary-dark;\n                font-weight: bold;\n            }\n\n            .btn-cancel {\n                background-color: rgba($color: red, $alpha: 0.3);\n                color: $primary-dark;\n                font-weight: bold;\n            }\n\n            button:hover {\n                background: #ccc;\n            }\n\n            .form-buttons {\n                display: flex;\n                gap: 0.5rem;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project{
    constructor(name){
        this.name = name;
        this.tasks = []
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setTasks(tasks){
        this.tasks = tasks;
    }

    getTasks(){
        return this.tasks;
    }

    addTask(newTask){
        this.tasks.push(newTask);
    }
}

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getDueDate(){
        return this.dueDate;
    }

    getPriority(){
        return this.priority;
    }

    setTitle(title){
        this.title = title;
    }

    setDescription(description){
        this.description = description;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    setPriority(priority){
        this.priority = priority;
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Task */ "./src/modules/Task.js");
/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Project */ "./src/modules/Project.js");




const addTaskButton = document.getElementById('addTaskBtn');
const addTaskForm = document.getElementById('newTaskForm');
const addProjectButton = document.getElementById('addProjectBtn');
const addProjectForm = document.getElementById('addProjectForm');
const todoWrapper = document.querySelector('.project-todo-wrapper');
const currentProject = new _modules_Project__WEBPACK_IMPORTED_MODULE_2__["default"]("Default");

addTaskForm.onsubmit = addTaskToProject;

function displayForm(formName, button, toggle){
    if (toggle) {
        formName.classList.add('active');
        button.classList.add('active');
    } else {
        formName.classList.remove('active');
        button.classList.remove('active');
    }
}

const cancelNewTask = document.querySelectorAll('.btn-cancel');
cancelNewTask.forEach(button => {
    button.addEventListener('click', ((e) => {
        //i hate that i had to wrap the button and form in a section just to select the button
        e.currentTarget.closest('section').querySelector('.add').classList.remove('active');
        e.currentTarget.closest('form').classList.remove('active');
    }));
});

function displayTaskList(){
    const tasks = currentProject.getTasks();
    todoWrapper.innerHTML = '';
    tasks.forEach((task) => {
        console.log(task);
        const card = document.createElement('div');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');

        card.classList.add('project-todo-card');
        title.classList.add('todo-title');
        description.classList.add('todo-description');
        dueDate.classList.add('due-date');
        priority.classList.add('priority');

        title.textContent = task.title;
        description.textContent = task.description;
        dueDate.textContent = task.dueDate
        priority.textContent = task.priority;

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(dueDate);
        card.appendChild(priority);
        todoWrapper.appendChild(card)
    });
}

addTaskButton.addEventListener('click', () => {
    displayForm(addProjectForm, addProjectButton, false);
    addTaskForm.reset();
    displayForm(addTaskForm, addTaskButton, true);
});

addProjectButton.addEventListener('click', () =>{
    displayForm(addTaskForm, addTaskButton, false);
    addProjectForm.reset();
    displayForm(addProjectForm, addProjectButton, true);
})

function addTaskToProject(e){
    e.preventDefault();
    const newTask = getTaskFormData();
    currentProject.addTask(newTask);

    displayForm(addTaskForm, addTaskButton, false);
    
    displayTaskList();
};

const getTaskFormData = () => {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = new Date(document.getElementById('taskDueDate').value);
    const priority = document.querySelector('input[name="radio"]:checked').value;
    return new _modules_Task__WEBPACK_IMPORTED_MODULE_1__["default"](title,description,dueDate,priority)
};








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDUTtBQUNNOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdEQUFPOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxREFBSTtBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3NzL21haW4uc2Nzcz82ZDI1Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFlNmZkO1xcbiAgY29sb3I6ICMwNzU5ODU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzU5ODU7XFxuICBjb2xvcjogI2JhZTZmZDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogOTBweDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5tYWluIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbm1haW4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWE1ZTk7XFxufVxcbm1haW4gYXNpZGUge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDkwcHgpO1xcbiAgYmFja2dyb3VuZDogI2YwZjlmZjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbm1haW4gYXNpZGUgbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5tYWluIGFzaWRlIG5hdiAudG9wLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxufVxcbm1haW4gYXNpZGUgbmF2IGgxIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxubWFpbiBhc2lkZSBuYXYgLnByb2plY3QtYnRuLXdyYXBwZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcbm1haW4gYXNpZGUgbmF2IC5wcm9qZWN0LWJ0bi13cmFwcGVyIGJ1dHRvbiB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxubWFpbiBhc2lkZSBuYXYgLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbm1haW4gYXNpZGUgbmF2IC5hZGQtcHJvamVjdC1idG4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbm1haW4gYXNpZGUgbmF2IGZvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5tYWluIGFzaWRlIG5hdiBmb3JtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5tYWluIGFzaWRlIG5hdiBmb3JtIGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxubWFpbiBhc2lkZSBuYXYgZm9ybSAuYWRkLXByb2plY3QtZm9ybS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxubWFpbiBhc2lkZSBuYXYgZm9ybSAuYWRkLXByb2plY3QtZm9ybS1idXR0b25zIC5idG4tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxuICBjb2xvcjogIzA3NTk4NTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5tYWluIGFzaWRlIG5hdiBmb3JtIC5hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMgLmJ0bi1jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMyk7XFxuICBjb2xvcjogIzA3NTk4NTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5tYWluIGFzaWRlIG5hdiBmb3JtIC5hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxufVxcbm1haW4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5hZGQtbmV3LXRhc2stYnRuIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWJ0bi5hY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxubWFpbiAuY29udGVudCAucHJvamVjdC10b2RvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcbm1haW4gLmNvbnRlbnQgLnByb2plY3QtdG9kby1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5tYWluIC5jb250ZW50IC5hZGQtbmV3LXRhc2stZm9ybS5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWZvcm0gaW5wdXQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5tYWluIC5jb250ZW50IC5hZGQtbmV3LXRhc2stZm9ybSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5tYWluIC5jb250ZW50IC5hZGQtbmV3LXRhc2stZm9ybSAjdGFza0Rlc2NyaXB0aW9uIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWZvcm0gI3Rhc2tEdWVEYXRlIHtcXG4gIG1heC13aWR0aDogMzAlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5hZGQtbmV3LXRhc2stZm9ybSAucHJpb3JpdHktd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtIC5idG4tc3VibWl0IHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxuICBjb2xvcjogIzA3NTk4NTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5tYWluIC5jb250ZW50IC5hZGQtbmV3LXRhc2stZm9ybSAuYnRuLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zKTtcXG4gIGNvbG9yOiAjMDc1OTg1O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbn1cXG5tYWluIC5jb250ZW50IC5hZGQtbmV3LXRhc2stZm9ybSAuZm9ybS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BOzs7RUFHSSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBTEo7O0FBUUE7RUFDSSx5QkFaWTtFQWFaLGNBZlc7RUFnQlgsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EseUJBdkJXO0VBd0JYLGNBdEJZO0VBdUJaLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0FBTEo7QUFPSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBTFI7QUFRSTtFQUNJLHlCQWhEUztBQTBDakI7QUFTSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBckRVO0VBc0RWLGFBQUE7QUFQUjtBQVNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVBaO0FBU1k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBUGhCO0FBVVk7RUFDSSxZQUFBO0FBUmhCO0FBV1k7RUFDSSxpQkFBQTtBQVRoQjtBQVdnQjtFQUNJLGNBQUE7QUFUcEI7QUFhWTtFQUNJLHFCQUFBO0FBWGhCO0FBWWdCO0VBQ0ksYUFBQTtBQVZwQjtBQWNZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFaaEI7QUFjZ0I7RUFDSSxhQUFBO0FBWnBCO0FBZWdCO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QUFicEI7QUFnQmdCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFkcEI7QUFnQm9CO0VBQ0ksc0JBQUE7RUFDQSxjQWpIVDtFQWtIUyxpQkFBQTtBQWR4QjtBQWlCb0I7RUFDSSxzQ0FBQTtFQUNBLGNBdkhUO0VBd0hTLGlCQUFBO0FBZnhCO0FBa0JvQjtFQUNJLGdCQUFBO0FBaEJ4QjtBQXVCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFyQlI7QUF1QlE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUFyQlo7QUF1Qlk7RUFDSSxhQUFBO0FBckJoQjtBQXlCUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUF2Qlo7QUEwQlE7RUFDSSx5QkF4Sk07RUF5Sk4sYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FBeEJaO0FBMkJRO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQXpCWjtBQTJCWTtFQUNJLGFBQUE7QUF6QmhCO0FBNEJZO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QUExQmhCO0FBNkJZO0VBQ0ksZ0JBQUE7QUEzQmhCO0FBOEJZO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUE1QmhCO0FBK0JZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUE3QmhCO0FBZ0NZO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUE5QmhCO0FBaUNZO0VBQ0ksc0JBQUE7RUFDQSxjQTVNRDtFQTZNQyxpQkFBQTtBQS9CaEI7QUFrQ1k7RUFDSSxzQ0FBQTtFQUNBLGNBbE5EO0VBbU5DLGlCQUFBO0FBaENoQjtBQW1DWTtFQUNJLGdCQUFBO0FBakNoQjtBQW9DWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBbENoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuJHByaW1hcnktZGFyazogIzA3NTk4NTtcXG4kc2Vjb25kYXJ5LWRhcms6ICMwZWE1ZTk7XFxuJHByaW1hcnktbGlnaHQ6ICNiYWU2ZmQ7XFxuJHNlY29uZGFyeS1saWdodDogI2YwZjlmZjtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xcbiAgICBjb2xvcjogJHByaW1hcnktZGFyaztcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgIGNvbG9yOiAkcHJpbWFyeS1saWdodDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcblxcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1kYXJrO1xcbiAgICB9XFxuXFxuICAgIGFzaWRlIHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktbGlnaHQ7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICAgICAgbmF2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAycmVtO1xcblxcbiAgICAgICAgICAgIC50b3Atc2VjdGlvbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaDEge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcm9qZWN0LWJ0bi13cmFwcGVyIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuXFxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYWRkLXByb2plY3QtYnRue1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgICYuYWN0aXZle1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBmb3Jte1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgICAgICAgICAgICYuYWN0aXZle1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpbnB1dHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMyk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmFkZC1wcm9qZWN0LWZvcm0tYnV0dG9uc3tcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1zdWJtaXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIC5idG4tY2FuY2VsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcmVkLCAkYWxwaGE6IDAuMyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICB3aWR0aDogOTAwcHg7XFxuICAgICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgICAuYWRkLW5ldy10YXNrLWJ0biB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3QtdG9kby13cmFwcGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3QtdG9kby1jYXJkIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWxpZ2h0O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmFkZC1uZXctdGFzay1mb3JtIHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAgICAgICAgICYuYWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMyk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl17XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICN0YXNrRGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI3Rhc2tEdWVEYXRlIHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5LXdyYXBwZXIge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5idG4tc3VibWl0IHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYnRuLWNhbmNlbCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiByZWQsICRhbHBoYTogMC4zKTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZm9ybS1idXR0b25zIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZ2FwOiAwLjVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGdldE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXRUYXNrcyh0YXNrcyl7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpe1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICB9XG5cbiAgICBhZGRUYXNrKG5ld1Rhc2spe1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKXtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvVGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0XCI7XG5cbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bicpO1xuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0Zvcm0nKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEZvcm0nKTtcbmNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby13cmFwcGVyJyk7XG5jb25zdCBjdXJyZW50UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiRGVmYXVsdFwiKTtcblxuYWRkVGFza0Zvcm0ub25zdWJtaXQgPSBhZGRUYXNrVG9Qcm9qZWN0O1xuXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybShmb3JtTmFtZSwgYnV0dG9uLCB0b2dnbGUpe1xuICAgIGlmICh0b2dnbGUpIHtcbiAgICAgICAgZm9ybU5hbWUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtTmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbn1cblxuY29uc3QgY2FuY2VsTmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY2FuY2VsJyk7XG5jYW5jZWxOZXdUYXNrLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKGUpID0+IHtcbiAgICAgICAgLy9pIGhhdGUgdGhhdCBpIGhhZCB0byB3cmFwIHRoZSBidXR0b24gYW5kIGZvcm0gaW4gYSBzZWN0aW9uIGp1c3QgdG8gc2VsZWN0IHRoZSBidXR0b25cbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5xdWVyeVNlbGVjdG9yKCcuYWRkJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCdmb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSkpO1xufSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrTGlzdCgpe1xuICAgIGNvbnN0IHRhc2tzID0gY3VycmVudFByb2plY3QuZ2V0VGFza3MoKTtcbiAgICB0b2RvV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWNhcmQnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZVxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICB9KTtcbn1cblxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNwbGF5Rm9ybShhZGRQcm9qZWN0Rm9ybSwgYWRkUHJvamVjdEJ1dHRvbiwgZmFsc2UpO1xuICAgIGFkZFRhc2tGb3JtLnJlc2V0KCk7XG4gICAgZGlzcGxheUZvcm0oYWRkVGFza0Zvcm0sIGFkZFRhc2tCdXR0b24sIHRydWUpO1xufSk7XG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICBkaXNwbGF5Rm9ybShhZGRUYXNrRm9ybSwgYWRkVGFza0J1dHRvbiwgZmFsc2UpO1xuICAgIGFkZFByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgZGlzcGxheUZvcm0oYWRkUHJvamVjdEZvcm0sIGFkZFByb2plY3RCdXR0b24sIHRydWUpO1xufSlcblxuZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3VGFzayA9IGdldFRhc2tGb3JtRGF0YSgpO1xuICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG5cbiAgICBkaXNwbGF5Rm9ybShhZGRUYXNrRm9ybSwgYWRkVGFza0J1dHRvbiwgZmFsc2UpO1xuICAgIFxuICAgIGRpc3BsYXlUYXNrTGlzdCgpO1xufTtcblxuY29uc3QgZ2V0VGFza0Zvcm1EYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUaXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0R1ZURhdGUnKS52YWx1ZSk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicmFkaW9cIl06Y2hlY2tlZCcpLnZhbHVlO1xuICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KVxufTtcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9