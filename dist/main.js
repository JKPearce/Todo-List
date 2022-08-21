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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: #bae6fd;\n  color: #075985;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.6;\n  min-height: 100vh;\n}\n\nheader {\n  width: 100%;\n  background-color: #075985;\n  color: #bae6fd;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  height: 90px;\n}\n\nmain {\n  display: flex;\n}\nmain .selected {\n  background: #ccc;\n}\nmain button {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n  background-color: inherit;\n  text-align: left;\n}\nmain button:hover {\n  background-color: #0ea5e9;\n}\nmain aside {\n  width: 300px;\n  min-width: 250px;\n  min-height: calc(100vh - 90px);\n  background: #f0f9ff;\n  padding: 20px;\n  overflow: auto;\n}\nmain aside nav {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\nmain aside nav .top-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\nmain aside nav h1 {\n  padding: 5px;\n}\nmain aside nav .project-btn-wrapper {\n  margin-left: 2rem;\n}\nmain aside nav .project-btn-wrapper button {\n  margin: 10px 0;\n}\nmain aside nav .add-project-btn {\n  display: inline-block;\n}\nmain aside nav .add-project-btn.active {\n  display: none;\n}\nmain aside nav form {\n  display: none;\n  flex-direction: column;\n  padding: 10px;\n  gap: 1rem;\n}\nmain aside nav form.active {\n  display: flex;\n}\nmain aside nav form input {\n  font-size: 1.6rem;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n}\nmain aside nav form .add-project-form-buttons {\n  display: flex;\n  gap: 0.5rem;\n}\nmain aside nav form .add-project-form-buttons .btn-submit {\n  background: lightgreen;\n  color: #075985;\n  font-weight: bold;\n}\nmain aside nav form .add-project-form-buttons .btn-cancel {\n  background-color: rgba(255, 0, 0, 0.3);\n  color: #075985;\n  font-weight: bold;\n}\nmain aside nav form .add-project-form-buttons button:hover {\n  background: #ccc;\n}\nmain .content {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 1rem;\n  width: 900px;\n  gap: 1rem;\n}\nmain .content .add-new-task-btn {\n  height: 50px;\n  display: inline-block;\n}\nmain .content .add-new-task-btn.active {\n  display: none;\n}\nmain .content .project-todo-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\nmain .content .card {\n  background-color: #f0f9ff;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  border: 2px solid;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n}\nmain .content .card.low {\n  border-color: green;\n}\nmain .content .card.medium {\n  border-color: yellow;\n}\nmain .content .card.high {\n  border-color: red;\n}\nmain .content .card .card-options {\n  display: flex;\n  gap: 0.5rem;\n}\nmain .content .card .card-options .delete-btn {\n  color: red;\n}\nmain .content .add-new-task-form {\n  flex-direction: column;\n  gap: 0.5rem;\n  display: none;\n  font-size: 1rem;\n}\nmain .content .add-new-task-form.active {\n  display: flex;\n}\nmain .content .add-new-task-form input {\n  font-size: 1.2rem;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n}\nmain .content .add-new-task-form .new-description {\n  resize: vertical;\n  font-size: 1.2rem;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n}\nmain .content .add-new-task-form input[type=radio] {\n  box-shadow: none;\n}\nmain .content .add-new-task-form #taskDueDate {\n  max-width: 33%;\n}\nmain .content .add-new-task-form .priority-wrapper {\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  margin: 0.5rem 0;\n}\nmain .content .add-new-task-form .btn-submit {\n  background: lightgreen;\n  color: #075985;\n  font-weight: bold;\n}\nmain .content .add-new-task-form .btn-cancel {\n  background-color: rgba(255, 0, 0, 0.3);\n  color: #075985;\n  font-weight: bold;\n}\nmain .content .add-new-task-form button:hover {\n  background: #ccc;\n}\nmain .content .add-new-task-form .form-buttons {\n  display: flex;\n  gap: 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/scss/main.scss"],"names":[],"mappings":"AAOA;;;EAGI,sBAAA;EACA,UAAA;EACA,SAAA;AALJ;;AAQA;EACI,yBAZY;EAaZ,cAfW;EAgBX,iCAAA;EACA,gBAAA;EACA,iBAAA;AALJ;;AAQA;EACI,WAAA;EACA,yBAvBW;EAwBX,cAtBY;EAuBZ,aAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;AALJ;;AAQA;EACI,aAAA;AALJ;AAOI;EACI,gBAAA;AALR;AAQI;EACI,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,cAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,yBAAA;EACA,gBAAA;AANR;AASI;EACI,yBApDS;AA6CjB;AAUI;EACI,YAAA;EACA,gBAAA;EACA,8BAAA;EACA,mBAzDU;EA0DV,aAAA;EACA,cAAA;AARR;AAUQ;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AARZ;AAUY;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AARhB;AAWY;EACI,YAAA;AAThB;AAYY;EACI,iBAAA;AAVhB;AAYgB;EACI,cAAA;AAVpB;AAcY;EACI,qBAAA;AAZhB;AAagB;EACI,aAAA;AAXpB;AAeY;EACI,aAAA;EACA,sBAAA;EACA,aAAA;EACA,SAAA;AAbhB;AAegB;EACI,aAAA;AAbpB;AAgBgB;EACI,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,sCAAA;AAdpB;AAiBgB;EACI,aAAA;EACA,WAAA;AAfpB;AAiBoB;EACI,sBAAA;EACA,cAtHT;EAuHS,iBAAA;AAfxB;AAkBoB;EACI,sCAAA;EACA,cA5HT;EA6HS,iBAAA;AAhBxB;AAmBoB;EACI,gBAAA;AAjBxB;AAwBI;EACI,aAAA;EACA,sBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,SAAA;AAtBR;AAwBQ;EACI,YAAA;EACA,qBAAA;AAtBZ;AAwBY;EACI,aAAA;AAtBhB;AA0BQ;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAxBZ;AA2BQ;EACI,yBA7JM;EA8JN,aAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,sCAAA;AAzBZ;AA2BY;EACI,mBAAA;AAzBhB;AA4BY;EACI,oBAAA;AA1BhB;AA6BY;EACI,iBAAA;AA3BhB;AA8BY;EACI,aAAA;EACA,WAAA;AA5BhB;AA8BgB;EACI,UAAA;AA5BpB;AAiCQ;EACI,sBAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;AA/BZ;AAiCY;EACI,aAAA;AA/BhB;AAkCY;EACI,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,sCAAA;AAhChB;AAmCY;EACI,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,sCAAA;AAjChB;AAoCY;EACI,gBAAA;AAlChB;AAqCY;EACI,cAAA;AAnChB;AAsCY;EACI,aAAA;EACA,2BAAA;EACA,SAAA;EACA,gBAAA;AApChB;AAuCY;EACI,sBAAA;EACA,cA3OD;EA4OC,iBAAA;AArChB;AAwCY;EACI,sCAAA;EACA,cAjPD;EAkPC,iBAAA;AAtChB;AAyCY;EACI,gBAAA;AAvChB;AA0CY;EACI,aAAA;EACA,WAAA;AAxChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n$primary-dark: #075985;\n$secondary-dark: #0ea5e9;\n$primary-light: #bae6fd;\n$secondary-light: #f0f9ff;\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    background-color: $primary-light;\n    color: $primary-dark;\n    font-family: 'Roboto', sans-serif;\n    line-height: 1.6;\n    min-height: 100vh;\n}\n\nheader {\n    width: 100%;\n    background-color: $primary-dark;\n    color: $primary-light;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    height: 90px;\n}\n\nmain {\n    display: flex;\n\n    .selected{\n        background: #ccc;\n    }\n\n    button {\n        width: 100%;\n        padding: 10px 20px;\n        border-radius: 5px;\n        cursor: pointer;\n        border: none;\n        color: inherit;\n        font-family: inherit;\n        font-size: inherit;\n        outline: none;\n        background-color: inherit;\n        text-align: left;\n    }\n\n    button:hover {\n        background-color: $secondary-dark;\n    }\n\n    aside {\n        width: 300px;\n        min-width: 250px;\n        min-height: calc(100vh - 90px);\n        background: $secondary-light;\n        padding: 20px;\n        overflow: auto;\n\n        nav {\n            display: flex;\n            flex-direction: column;\n            gap: 2rem;\n\n            .top-section {\n                display: flex;\n                flex-direction: column;\n                gap: 2rem;\n            }\n\n            h1 {\n                padding: 5px;\n            }\n\n            .project-btn-wrapper {\n                margin-left: 2rem;\n\n                button {\n                    margin: 10px 0;\n                }\n            }\n\n            .add-project-btn{\n                display: inline-block;\n                &.active{\n                    display: none;\n                }\n            }\n\n            form{\n                display: none;\n                flex-direction: column;\n                padding: 10px;\n                gap: 1rem;\n\n                &.active{\n                    display: flex;\n                }\n\n                input{\n                    font-size: 1.6rem;\n                    padding: 10px;\n                    border-radius: 10px;\n                    border: none;\n                    box-shadow: 2px 2px rgba($color: #000000, $alpha: 0.3);\n                }\n\n                .add-project-form-buttons{\n                    display: flex;\n                    gap: 0.5rem;\n                    \n                    .btn-submit {\n                        background: lightgreen;\n                        color: $primary-dark;\n                        font-weight: bold;\n                    }\n        \n                    .btn-cancel {\n                        background-color: rgba($color: red, $alpha: 0.3);\n                        color: $primary-dark;\n                        font-weight: bold;\n                    }\n        \n                    button:hover {\n                        background: #ccc;\n                    }\n                }\n            }\n        }\n    }\n\n    .content {\n        display: flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n        padding: 1rem;\n        width: 900px;\n        gap: 1rem;\n\n        .add-new-task-btn {\n            height: 50px;\n            display: inline-block;\n\n            &.active {\n                display: none;\n            }\n        }\n\n        .project-todo-wrapper {\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n        }\n\n        .card {\n            background-color: $secondary-light;\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n            padding: 1rem;\n            border-radius: 1rem;\n            border: 2px solid;\n            box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n\n            &.low{\n                border-color: rgba($color: green, $alpha: 1);\n            }\n\n            &.medium{\n                border-color: rgba($color: yellow, $alpha: 1);\n            }\n\n            &.high{\n                border-color: rgba($color: red, $alpha: 1);\n            }\n\n            .card-options{\n                display:flex;\n                gap: 0.5rem;\n\n                .delete-btn{\n                    color:red;\n                }\n            }\n        }\n\n        .add-new-task-form {\n            flex-direction: column;\n            gap: 0.5rem;\n            display: none;\n            font-size: 1rem;\n\n            &.active {\n                display: flex;\n            }\n\n            input {\n                font-size: 1.2rem;\n                padding: 10px;\n                border-radius: 10px;\n                border: none;\n                box-shadow: 2px 2px rgba($color: #000000, $alpha: 0.3);\n            }\n\n            .new-description{\n                resize: vertical;\n                font-size: 1.2rem;\n                padding: 10px;\n                border-radius: 10px;\n                border: none;\n                box-shadow: 2px 2px rgba($color: #000000, $alpha: 0.3);\n            }\n\n            input[type=\"radio\"]{\n                box-shadow: none;\n            }\n\n            #taskDueDate {\n                max-width: 33%;\n            }\n\n            .priority-wrapper {\n                display: flex;\n                justify-content: flex-start;\n                gap: 1rem;\n                margin: 0.5rem 0;\n            }\n\n            .btn-submit {\n                background: lightgreen;\n                color: $primary-dark;\n                font-weight: bold;\n            }\n\n            .btn-cancel {\n                background-color: rgba($color: red, $alpha: 0.3);\n                color: $primary-dark;\n                font-weight: bold;\n            }\n\n            button:hover {\n                background: #ccc;\n            }\n\n            .form-buttons {\n                display: flex;\n                gap: 0.5rem;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTaskList": () => (/* binding */ displayTaskList)
/* harmony export */ });
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Task */ "./src/modules/Task.js");
/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Project */ "./src/modules/Project.js");
/* harmony import */ var _modules_ProjectController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ProjectController */ "./src/modules/ProjectController.js");





const projectController = new _modules_ProjectController__WEBPACK_IMPORTED_MODULE_3__["default"]();
const addNewTaskButton = document.getElementById('addTaskBtn');
const addTaskForm = document.getElementById('newTaskForm');
const addNewProjectButton = document.getElementById('addProjectBtn');
const addProjectForm = document.getElementById('addProjectForm');
const todoWrapper = document.querySelector('.project-todo-wrapper');
const projectButtons = document.querySelectorAll('.project-btn');

addTaskForm.onsubmit = addTaskToProject;
addProjectForm.onsubmit = addNewProject;

projectButtons.forEach(button => {
    button.addEventListener('click', swapProjects);
});

function displayForm(formName, button, toggle) {
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

function displayTaskList() {
    const tasks = projectController.getCurrentProject().getTasks();
    todoWrapper.innerHTML = '';
    tasks.forEach((task, i) => {
        const card = document.createElement('div');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const cardOptions = document.createElement('div');
        const editButton = document.createElement('button');
        const completeButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        card.classList.add('card');
        card.classList.add(task.priority);
        card.dataset.taskId = i;
        title.classList.add('todo-title');
        description.classList.add('todo-description');
        dueDate.classList.add('due-date');
        priority.classList.add('priority');
        cardOptions.classList.add('card-options');
        editButton.classList.add('edit-btn');
        completeButton.classList.add('complete-btn');
        deleteButton.classList.add('delete-btn');

        title.textContent = task.title;
        description.textContent = task.description;
        dueDate.textContent = task.dueDate
        priority.textContent = task.priority;
        editButton.textContent = "Edit";
        completeButton.textContent = "Mark Complete";
        deleteButton.textContent = "Delete"

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(dueDate);
        card.appendChild(priority);
        cardOptions.appendChild(completeButton);
        cardOptions.appendChild(editButton);
        cardOptions.appendChild(deleteButton);
        card.appendChild(cardOptions);

        deleteButton.addEventListener('click', (e) => {
            projectController.getCurrentProject().deleteTask(e);
        });
        todoWrapper.appendChild(card)
    });
}

addNewTaskButton.addEventListener('click', () => {
    displayForm(addProjectForm, addNewProjectButton, false);
    addTaskForm.reset();
    displayForm(addTaskForm, addNewTaskButton, true);
});

addNewProjectButton.addEventListener('click', () => {
    displayForm(addTaskForm, addNewTaskButton, false);
    addProjectForm.reset();
    displayForm(addProjectForm, addNewProjectButton, true);
})

function addTaskToProject(e) {
    e.preventDefault();
    const newTask = getTaskFormData();

    projectController.getCurrentProject().addTask(newTask);

    displayForm(addTaskForm, addNewTaskButton, false);

    displayTaskList();
};

const getTaskFormData = () => {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = new Date(document.getElementById('taskDueDate').value);
    const priority = document.querySelector('input[name="radio"]:checked').value;
    return new _modules_Task__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, dueDate, priority)
};

function addNewProject(e) {
    e.preventDefault();
    projectController.addProject(document.getElementById('projectTitle').value);
    displayForm(addProjectForm, addNewProjectButton, false);
    displayProjects();
}

function displayProjects() {
    const projectWrapper = document.getElementById('projectWrapper');
    const projects = projectController.getProjects();
    projectWrapper.innerHTML = '';

    projects.forEach((project, i) => {
        //stop creation of default project folders
        if (i < 3) return;
        //make all new user created projects
        const projectButton = document.createElement('button');
        projectButton.classList.add('project-btn');
        projectButton.textContent = project.name;
        projectButton.dataset.projectId = i;
        projectButton.addEventListener('click', swapProjects);
        projectWrapper.appendChild(projectButton);
    });
}

function swapProjects(e) {
    projectController.setCurrentProject(e);
    displayTaskList();
}



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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");


class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
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

    deleteTask(e){
        const taskId = parseInt(e.target.closest('.card').dataset.taskId);
        this.tasks.splice(taskId, 1);
        (0,___WEBPACK_IMPORTED_MODULE_0__.displayTaskList)();
    }
}

/***/ }),

/***/ "./src/modules/ProjectController.js":
/*!******************************************!*\
  !*** ./src/modules/ProjectController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectController)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");


class ProjectController{
    constructor(){
        this.projects = [];
        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]("Default"));
        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]("Today"));
        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]("This Week"));
    }

    getProjects(){
        return this.projects;
    }

    setProject(projects){
        this.projects = projects
    }

    addProject(newProject){
        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](newProject));
    }

    getCurrentProject(){
        const selectedProject = document.querySelector('.selected');
        const projectId = parseInt(selectedProject.dataset.projectId);
        return this.projects[projectId];
    }

    setCurrentProject(e){
        document.querySelectorAll('.selected').forEach(button=>{
            button.classList.remove('selected');
        });
        e.target.classList.add('selected');
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7OztBQ2pDZ0M7O0FBRWpCO0FBQ2Y7QUFDQTtBQUNBLCtCQUErQixnREFBTztBQUN0QywrQkFBK0IsZ0RBQU87QUFDdEMsK0JBQStCLGdEQUFPO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsZ0RBQU87QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3ZDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3NzL21haW4uc2Nzcz82ZDI1Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhZTZmZDtcXG4gIGNvbG9yOiAjMDc1OTg1O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc1OTg1O1xcbiAgY29sb3I6ICNiYWU2ZmQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxubWFpbiAuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG59XFxubWFpbiBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5tYWluIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGVhNWU5O1xcbn1cXG5tYWluIGFzaWRlIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XFxuICBiYWNrZ3JvdW5kOiAjZjBmOWZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5tYWluIGFzaWRlIG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxubWFpbiBhc2lkZSBuYXYgLnRvcC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5tYWluIGFzaWRlIG5hdiBoMSB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbm1haW4gYXNpZGUgbmF2IC5wcm9qZWN0LWJ0bi13cmFwcGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5tYWluIGFzaWRlIG5hdiAucHJvamVjdC1idG4td3JhcHBlciBidXR0b24ge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbm1haW4gYXNpZGUgbmF2IC5hZGQtcHJvamVjdC1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5tYWluIGFzaWRlIG5hdiAuYWRkLXByb2plY3QtYnRuLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5tYWluIGFzaWRlIG5hdiBmb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMXJlbTtcXG59XFxubWFpbiBhc2lkZSBuYXYgZm9ybS5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxubWFpbiBhc2lkZSBuYXYgZm9ybSBpbnB1dCB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbm1haW4gYXNpZGUgbmF2IGZvcm0gLmFkZC1wcm9qZWN0LWZvcm0tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbm1haW4gYXNpZGUgbmF2IGZvcm0gLmFkZC1wcm9qZWN0LWZvcm0tYnV0dG9ucyAuYnRuLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbiAgY29sb3I6ICMwNzU5ODU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxubWFpbiBhc2lkZSBuYXYgZm9ybSAuYWRkLXByb2plY3QtZm9ybS1idXR0b25zIC5idG4tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpO1xcbiAgY29sb3I6ICMwNzU5ODU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxubWFpbiBhc2lkZSBuYXYgZm9ybSAuYWRkLXByb2plY3QtZm9ybS1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbn1cXG5tYWluIC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIGdhcDogMXJlbTtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWJ0biB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1idG4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbm1haW4gLmNvbnRlbnQgLnByb2plY3QtdG9kby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBib3gtc2hhZG93OiAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxubWFpbiAuY29udGVudCAuY2FyZC5sb3cge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG59XFxubWFpbiAuY29udGVudCAuY2FyZC5tZWRpdW0ge1xcbiAgYm9yZGVyLWNvbG9yOiB5ZWxsb3c7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNhcmQuaGlnaCB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxubWFpbiAuY29udGVudCAuY2FyZCAuY2FyZC1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxubWFpbiAuY29udGVudCAuY2FyZCAuY2FyZC1vcHRpb25zIC5kZWxldGUtYnRuIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5tYWluIC5jb250ZW50IC5hZGQtbmV3LXRhc2stZm9ybSBpbnB1dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtIC5uZXctZGVzY3JpcHRpb24ge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWZvcm0gaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWZvcm0gI3Rhc2tEdWVEYXRlIHtcXG4gIG1heC13aWR0aDogMzMlO1xcbn1cXG5tYWluIC5jb250ZW50IC5hZGQtbmV3LXRhc2stZm9ybSAucHJpb3JpdHktd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWZvcm0gLmJ0bi1zdWJtaXQge1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG4gIGNvbG9yOiAjMDc1OTg1O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtIC5idG4tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpO1xcbiAgY29sb3I6ICMwNzU5ODU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtIC5mb3JtLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7OztFQUdJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFMSjs7QUFRQTtFQUNJLHlCQVpZO0VBYVosY0FmVztFQWdCWCxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNJLFdBQUE7RUFDQSx5QkF2Qlc7RUF3QlgsY0F0Qlk7RUF1QlosYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7QUFMSjtBQU9JO0VBQ0ksZ0JBQUE7QUFMUjtBQVFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFOUjtBQVNJO0VBQ0kseUJBcERTO0FBNkNqQjtBQVVJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkF6RFU7RUEwRFYsYUFBQTtFQUNBLGNBQUE7QUFSUjtBQVVRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVJaO0FBVVk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBUmhCO0FBV1k7RUFDSSxZQUFBO0FBVGhCO0FBWVk7RUFDSSxpQkFBQTtBQVZoQjtBQVlnQjtFQUNJLGNBQUE7QUFWcEI7QUFjWTtFQUNJLHFCQUFBO0FBWmhCO0FBYWdCO0VBQ0ksYUFBQTtBQVhwQjtBQWVZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFiaEI7QUFlZ0I7RUFDSSxhQUFBO0FBYnBCO0FBZ0JnQjtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBZHBCO0FBaUJnQjtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBZnBCO0FBaUJvQjtFQUNJLHNCQUFBO0VBQ0EsY0F0SFQ7RUF1SFMsaUJBQUE7QUFmeEI7QUFrQm9CO0VBQ0ksc0NBQUE7RUFDQSxjQTVIVDtFQTZIUyxpQkFBQTtBQWhCeEI7QUFtQm9CO0VBQ0ksZ0JBQUE7QUFqQnhCO0FBd0JJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQXRCUjtBQXdCUTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQXRCWjtBQXdCWTtFQUNJLGFBQUE7QUF0QmhCO0FBMEJRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQXhCWjtBQTJCUTtFQUNJLHlCQTdKTTtFQThKTixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtBQXpCWjtBQTJCWTtFQUNJLG1CQUFBO0FBekJoQjtBQTRCWTtFQUNJLG9CQUFBO0FBMUJoQjtBQTZCWTtFQUNJLGlCQUFBO0FBM0JoQjtBQThCWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBNUJoQjtBQThCZ0I7RUFDSSxVQUFBO0FBNUJwQjtBQWlDUTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBL0JaO0FBaUNZO0VBQ0ksYUFBQTtBQS9CaEI7QUFrQ1k7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtBQWhDaEI7QUFtQ1k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBakNoQjtBQW9DWTtFQUNJLGdCQUFBO0FBbENoQjtBQXFDWTtFQUNJLGNBQUE7QUFuQ2hCO0FBc0NZO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBcENoQjtBQXVDWTtFQUNJLHNCQUFBO0VBQ0EsY0EzT0Q7RUE0T0MsaUJBQUE7QUFyQ2hCO0FBd0NZO0VBQ0ksc0NBQUE7RUFDQSxjQWpQRDtFQWtQQyxpQkFBQTtBQXRDaEI7QUF5Q1k7RUFDSSxnQkFBQTtBQXZDaEI7QUEwQ1k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQXhDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbiRwcmltYXJ5LWRhcms6ICMwNzU5ODU7XFxuJHNlY29uZGFyeS1kYXJrOiAjMGVhNWU5O1xcbiRwcmltYXJ5LWxpZ2h0OiAjYmFlNmZkO1xcbiRzZWNvbmRhcnktbGlnaHQ6ICNmMGY5ZmY7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1saWdodDtcXG4gICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1kYXJrO1xcbiAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOTBweDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC5zZWxlY3RlZHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcblxcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1kYXJrO1xcbiAgICB9XFxuXFxuICAgIGFzaWRlIHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWxpZ2h0O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICAgICAgbmF2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAycmVtO1xcblxcbiAgICAgICAgICAgIC50b3Atc2VjdGlvbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaDEge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcm9qZWN0LWJ0bi13cmFwcGVyIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuXFxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYWRkLXByb2plY3QtYnRue1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgICYuYWN0aXZle1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBmb3Jte1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgICAgICAgICAgICYuYWN0aXZle1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpbnB1dHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMyk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmFkZC1wcm9qZWN0LWZvcm0tYnV0dG9uc3tcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1zdWJtaXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIC5idG4tY2FuY2VsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcmVkLCAkYWxwaGE6IDAuMyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICB3aWR0aDogOTAwcHg7XFxuICAgICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgICAuYWRkLW5ldy10YXNrLWJ0biB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3QtdG9kby13cmFwcGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNhcmQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktbGlnaHQ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFxuICAgICAgICAgICAgJi5sb3d7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgkY29sb3I6IGdyZWVuLCAkYWxwaGE6IDEpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLm1lZGl1bXtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvcjogeWVsbG93LCAkYWxwaGE6IDEpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLmhpZ2h7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgkY29sb3I6IHJlZCwgJGFscGhhOiAxKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmNhcmQtb3B0aW9uc3tcXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcXG5cXG4gICAgICAgICAgICAgICAgLmRlbGV0ZS1idG57XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZWQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYWRkLW5ldy10YXNrLWZvcm0ge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAwLjVyZW07XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgICAgICAgICAgJi5hY3RpdmUge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC4zKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLm5ldy1kZXNjcmlwdGlvbntcXG4gICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjMpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJde1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjdGFza0R1ZURhdGUge1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzJTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5LXdyYXBwZXIge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmJ0bi1zdWJtaXQge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktZGFyaztcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5idG4tY2FuY2VsIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IHJlZCwgJGFscGhhOiAwLjMpO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktZGFyaztcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5mb3JtLWJ1dHRvbnMge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvVGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdENvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0Q29udHJvbGxlclwiO1xuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcigpO1xuY29uc3QgYWRkTmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrRm9ybScpO1xuY29uc3QgYWRkTmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuJyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Rm9ybScpO1xuY29uc3QgdG9kb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvLXdyYXBwZXInKTtcbmNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnRuJyk7XG5cbmFkZFRhc2tGb3JtLm9uc3VibWl0ID0gYWRkVGFza1RvUHJvamVjdDtcbmFkZFByb2plY3RGb3JtLm9uc3VibWl0ID0gYWRkTmV3UHJvamVjdDtcblxucHJvamVjdEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3YXBQcm9qZWN0cyk7XG59KTtcblxuZnVuY3Rpb24gZGlzcGxheUZvcm0oZm9ybU5hbWUsIGJ1dHRvbiwgdG9nZ2xlKSB7XG4gICAgaWYgKHRvZ2dsZSkge1xuICAgICAgICBmb3JtTmFtZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1OYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxufVxuXG5jb25zdCBjYW5jZWxOZXdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jYW5jZWwnKTtcbmNhbmNlbE5ld1Rhc2suZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgoZSkgPT4ge1xuICAgICAgICAvL2kgaGF0ZSB0aGF0IGkgaGFkIHRvIHdyYXAgdGhlIGJ1dHRvbiBhbmQgZm9ybSBpbiBhIHNlY3Rpb24ganVzdCB0byBzZWxlY3QgdGhlIGJ1dHRvblxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KSk7XG59KTtcblxuZnVuY3Rpb24gZGlzcGxheVRhc2tMaXN0KCkge1xuICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKS5nZXRUYXNrcygpO1xuICAgIHRvZG9XcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGkpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgY2FyZE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKHRhc2sucHJpb3JpdHkpO1xuICAgICAgICBjYXJkLmRhdGFzZXQudGFza0lkID0gaTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICAgICAgY2FyZE9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnY2FyZC1vcHRpb25zJyk7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgICAgICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGUtYnRuJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG5cbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGVcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJNYXJrIENvbXBsZXRlXCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcblxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBjYXJkT3B0aW9ucy5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG4gICAgICAgIGNhcmRPcHRpb25zLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgICBjYXJkT3B0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRPcHRpb25zKTtcblxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKS5kZWxldGVUYXNrKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICB9KTtcbn1cblxuYWRkTmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNwbGF5Rm9ybShhZGRQcm9qZWN0Rm9ybSwgYWRkTmV3UHJvamVjdEJ1dHRvbiwgZmFsc2UpO1xuICAgIGFkZFRhc2tGb3JtLnJlc2V0KCk7XG4gICAgZGlzcGxheUZvcm0oYWRkVGFza0Zvcm0sIGFkZE5ld1Rhc2tCdXR0b24sIHRydWUpO1xufSk7XG5cbmFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlzcGxheUZvcm0oYWRkVGFza0Zvcm0sIGFkZE5ld1Rhc2tCdXR0b24sIGZhbHNlKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIGRpc3BsYXlGb3JtKGFkZFByb2plY3RGb3JtLCBhZGROZXdQcm9qZWN0QnV0dG9uLCB0cnVlKTtcbn0pXG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdUYXNrID0gZ2V0VGFza0Zvcm1EYXRhKCk7XG5cbiAgICBwcm9qZWN0Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpLmFkZFRhc2sobmV3VGFzayk7XG5cbiAgICBkaXNwbGF5Rm9ybShhZGRUYXNrRm9ybSwgYWRkTmV3VGFza0J1dHRvbiwgZmFsc2UpO1xuXG4gICAgZGlzcGxheVRhc2tMaXN0KCk7XG59O1xuXG5jb25zdCBnZXRUYXNrRm9ybURhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRHVlRGF0ZScpLnZhbHVlKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJyYWRpb1wiXTpjaGVja2VkJykudmFsdWU7XG4gICAgcmV0dXJuIG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG59O1xuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJykudmFsdWUpO1xuICAgIGRpc3BsYXlGb3JtKGFkZFByb2plY3RGb3JtLCBhZGROZXdQcm9qZWN0QnV0dG9uLCBmYWxzZSk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0V3JhcHBlcicpO1xuICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdHMoKTtcbiAgICBwcm9qZWN0V3JhcHBlci5pbm5lckhUTUwgPSAnJztcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGkpID0+IHtcbiAgICAgICAgLy9zdG9wIGNyZWF0aW9uIG9mIGRlZmF1bHQgcHJvamVjdCBmb2xkZXJzXG4gICAgICAgIGlmIChpIDwgMykgcmV0dXJuO1xuICAgICAgICAvL21ha2UgYWxsIG5ldyB1c2VyIGNyZWF0ZWQgcHJvamVjdHNcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XG4gICAgICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2plY3RCdXR0b24uZGF0YXNldC5wcm9qZWN0SWQgPSBpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dhcFByb2plY3RzKTtcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHN3YXBQcm9qZWN0cyhlKSB7XG4gICAgcHJvamVjdENvbnRyb2xsZXIuc2V0Q3VycmVudFByb2plY3QoZSk7XG4gICAgZGlzcGxheVRhc2tMaXN0KCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlUYXNrTGlzdCB9OyIsImltcG9ydCB7IGRpc3BsYXlUYXNrTGlzdCB9IGZyb20gXCIuLlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0VGFza3ModGFza3Mpe1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxuXG4gICAgYWRkVGFzayhuZXdUYXNrKXtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2soZSl7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IHBhcnNlSW50KGUudGFyZ2V0LmNsb3Nlc3QoJy5jYXJkJykuZGF0YXNldC50YXNrSWQpO1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrSWQsIDEpO1xuICAgICAgICBkaXNwbGF5VGFza0xpc3QoKTtcbiAgICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIkRlZmF1bHRcIikpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUb2RheVwiKSk7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIlRoaXMgV2Vla1wiKSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdChwcm9qZWN0cyl7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c1xuICAgIH1cblxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCl7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChuZXdQcm9qZWN0KSk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKXtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHBhcnNlSW50KHNlbGVjdGVkUHJvamVjdC5kYXRhc2V0LnByb2plY3RJZCk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3Byb2plY3RJZF07XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFByb2plY3QoZSl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RlZCcpLmZvckVhY2goYnV0dG9uPT57XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKXtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9