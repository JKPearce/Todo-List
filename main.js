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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: #bae6fd;\n  color: #075985;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.6;\n  min-height: 100vh;\n}\n\nheader {\n  width: 100%;\n  background-color: #075985;\n  color: #bae6fd;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  height: 90px;\n}\n\nmain {\n  display: flex;\n}\nmain .selected {\n  background: #ccc;\n}\nmain button {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n  background-color: inherit;\n  text-align: left;\n}\nmain button:hover {\n  background-color: #0ea5e9;\n}\nmain aside {\n  width: 300px;\n  min-width: 250px;\n  min-height: calc(100vh - 90px);\n  background: #f0f9ff;\n  padding: 20px;\n  overflow: auto;\n}\nmain aside nav {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\nmain aside nav .top-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\nmain aside nav h1 {\n  padding: 5px;\n}\nmain aside nav .project-btn-wrapper {\n  margin-left: 2rem;\n}\nmain aside nav .project-btn-wrapper button {\n  margin: 10px 0;\n}\nmain aside nav .add-project-btn {\n  display: inline-block;\n}\nmain aside nav .add-project-btn.active {\n  display: none;\n}\nmain aside nav form {\n  display: none;\n  flex-direction: column;\n  padding: 10px;\n  gap: 1rem;\n}\nmain aside nav form.active {\n  display: flex;\n}\nmain aside nav form input {\n  font-size: 1.6rem;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n}\nmain aside nav form .add-project-form-buttons {\n  display: flex;\n  gap: 0.5rem;\n}\nmain aside nav form .add-project-form-buttons .btn-submit {\n  background: lightgreen;\n  color: #075985;\n  font-weight: bold;\n}\nmain aside nav form .add-project-form-buttons .btn-cancel {\n  background-color: rgba(255, 0, 0, 0.3);\n  color: #075985;\n  font-weight: bold;\n}\nmain aside nav form .add-project-form-buttons button:hover {\n  background: #ccc;\n}\nmain .content {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 1rem;\n  width: 900px;\n  gap: 1rem;\n}\nmain .content .add-new-task-btn {\n  height: 50px;\n  display: inline-block;\n}\nmain .content .add-new-task-btn.active {\n  display: none;\n}\nmain .content .project-todo-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\nmain .content .project-todo-card {\n  background-color: #f0f9ff;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  border: 2px solid;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n}\nmain .content .project-todo-card.low {\n  border-color: green;\n}\nmain .content .project-todo-card.medium {\n  border-color: yellow;\n}\nmain .content .project-todo-card.high {\n  border-color: red;\n}\nmain .content .project-todo-card .card-options {\n  display: flex;\n  gap: 0.5rem;\n}\nmain .content .project-todo-card .card-options .delete-btn {\n  color: red;\n}\nmain .content .add-new-task-form {\n  flex-direction: column;\n  gap: 0.5rem;\n  display: none;\n  font-size: 1rem;\n}\nmain .content .add-new-task-form.active {\n  display: flex;\n}\nmain .content .add-new-task-form input {\n  font-size: 1.2rem;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n}\nmain .content .add-new-task-form .new-description {\n  resize: vertical;\n  font-size: 1.2rem;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n}\nmain .content .add-new-task-form input[type=radio] {\n  box-shadow: none;\n}\nmain .content .add-new-task-form #taskDueDate {\n  max-width: 33%;\n}\nmain .content .add-new-task-form .priority-wrapper {\n  display: flex;\n  justify-content: flex-start;\n  gap: 1rem;\n  margin: 0.5rem 0;\n}\nmain .content .add-new-task-form .btn-submit {\n  background: lightgreen;\n  color: #075985;\n  font-weight: bold;\n}\nmain .content .add-new-task-form .btn-cancel {\n  background-color: rgba(255, 0, 0, 0.3);\n  color: #075985;\n  font-weight: bold;\n}\nmain .content .add-new-task-form button:hover {\n  background: #ccc;\n}\nmain .content .add-new-task-form .form-buttons {\n  display: flex;\n  gap: 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/scss/main.scss"],"names":[],"mappings":"AAOA;;;EAGI,sBAAA;EACA,UAAA;EACA,SAAA;AALJ;;AAQA;EACI,yBAZY;EAaZ,cAfW;EAgBX,iCAAA;EACA,gBAAA;EACA,iBAAA;AALJ;;AAQA;EACI,WAAA;EACA,yBAvBW;EAwBX,cAtBY;EAuBZ,aAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;AALJ;;AAQA;EACI,aAAA;AALJ;AAOI;EACI,gBAAA;AALR;AAQI;EACI,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,cAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,yBAAA;EACA,gBAAA;AANR;AASI;EACI,yBApDS;AA6CjB;AAUI;EACI,YAAA;EACA,gBAAA;EACA,8BAAA;EACA,mBAzDU;EA0DV,aAAA;EACA,cAAA;AARR;AAUQ;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AARZ;AAUY;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AARhB;AAWY;EACI,YAAA;AAThB;AAYY;EACI,iBAAA;AAVhB;AAYgB;EACI,cAAA;AAVpB;AAcY;EACI,qBAAA;AAZhB;AAagB;EACI,aAAA;AAXpB;AAeY;EACI,aAAA;EACA,sBAAA;EACA,aAAA;EACA,SAAA;AAbhB;AAegB;EACI,aAAA;AAbpB;AAgBgB;EACI,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,sCAAA;AAdpB;AAiBgB;EACI,aAAA;EACA,WAAA;AAfpB;AAiBoB;EACI,sBAAA;EACA,cAtHT;EAuHS,iBAAA;AAfxB;AAkBoB;EACI,sCAAA;EACA,cA5HT;EA6HS,iBAAA;AAhBxB;AAmBoB;EACI,gBAAA;AAjBxB;AAwBI;EACI,aAAA;EACA,sBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,SAAA;AAtBR;AAwBQ;EACI,YAAA;EACA,qBAAA;AAtBZ;AAwBY;EACI,aAAA;AAtBhB;AA0BQ;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAxBZ;AA2BQ;EACI,yBA7JM;EA8JN,aAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,sCAAA;AAzBZ;AA2BY;EACI,mBAAA;AAzBhB;AA4BY;EACI,oBAAA;AA1BhB;AA6BY;EACI,iBAAA;AA3BhB;AA8BY;EACI,aAAA;EACA,WAAA;AA5BhB;AA8BgB;EACI,UAAA;AA5BpB;AAiCQ;EACI,sBAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;AA/BZ;AAiCY;EACI,aAAA;AA/BhB;AAkCY;EACI,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,sCAAA;AAhChB;AAmCY;EACI,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,sCAAA;AAjChB;AAoCY;EACI,gBAAA;AAlChB;AAqCY;EACI,cAAA;AAnChB;AAsCY;EACI,aAAA;EACA,2BAAA;EACA,SAAA;EACA,gBAAA;AApChB;AAuCY;EACI,sBAAA;EACA,cA3OD;EA4OC,iBAAA;AArChB;AAwCY;EACI,sCAAA;EACA,cAjPD;EAkPC,iBAAA;AAtChB;AAyCY;EACI,gBAAA;AAvChB;AA0CY;EACI,aAAA;EACA,WAAA;AAxChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n$primary-dark: #075985;\n$secondary-dark: #0ea5e9;\n$primary-light: #bae6fd;\n$secondary-light: #f0f9ff;\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    background-color: $primary-light;\n    color: $primary-dark;\n    font-family: 'Roboto', sans-serif;\n    line-height: 1.6;\n    min-height: 100vh;\n}\n\nheader {\n    width: 100%;\n    background-color: $primary-dark;\n    color: $primary-light;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    height: 90px;\n}\n\nmain {\n    display: flex;\n\n    .selected{\n        background: #ccc;\n    }\n\n    button {\n        width: 100%;\n        padding: 10px 20px;\n        border-radius: 5px;\n        cursor: pointer;\n        border: none;\n        color: inherit;\n        font-family: inherit;\n        font-size: inherit;\n        outline: none;\n        background-color: inherit;\n        text-align: left;\n    }\n\n    button:hover {\n        background-color: $secondary-dark;\n    }\n\n    aside {\n        width: 300px;\n        min-width: 250px;\n        min-height: calc(100vh - 90px);\n        background: $secondary-light;\n        padding: 20px;\n        overflow: auto;\n\n        nav {\n            display: flex;\n            flex-direction: column;\n            gap: 2rem;\n\n            .top-section {\n                display: flex;\n                flex-direction: column;\n                gap: 2rem;\n            }\n\n            h1 {\n                padding: 5px;\n            }\n\n            .project-btn-wrapper {\n                margin-left: 2rem;\n\n                button {\n                    margin: 10px 0;\n                }\n            }\n\n            .add-project-btn{\n                display: inline-block;\n                &.active{\n                    display: none;\n                }\n            }\n\n            form{\n                display: none;\n                flex-direction: column;\n                padding: 10px;\n                gap: 1rem;\n\n                &.active{\n                    display: flex;\n                }\n\n                input{\n                    font-size: 1.6rem;\n                    padding: 10px;\n                    border-radius: 10px;\n                    border: none;\n                    box-shadow: 2px 2px rgba($color: #000000, $alpha: 0.3);\n                }\n\n                .add-project-form-buttons{\n                    display: flex;\n                    gap: 0.5rem;\n                    \n                    .btn-submit {\n                        background: lightgreen;\n                        color: $primary-dark;\n                        font-weight: bold;\n                    }\n        \n                    .btn-cancel {\n                        background-color: rgba($color: red, $alpha: 0.3);\n                        color: $primary-dark;\n                        font-weight: bold;\n                    }\n        \n                    button:hover {\n                        background: #ccc;\n                    }\n                }\n            }\n        }\n    }\n\n    .content {\n        display: flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n        padding: 1rem;\n        width: 900px;\n        gap: 1rem;\n\n        .add-new-task-btn {\n            height: 50px;\n            display: inline-block;\n\n            &.active {\n                display: none;\n            }\n        }\n\n        .project-todo-wrapper {\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n        }\n\n        .project-todo-card {\n            background-color: $secondary-light;\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n            padding: 1rem;\n            border-radius: 1rem;\n            border: 2px solid;\n            box-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n\n            &.low{\n                border-color: rgba($color: green, $alpha: 1);\n            }\n\n            &.medium{\n                border-color: rgba($color: yellow, $alpha: 1);\n            }\n\n            &.high{\n                border-color: rgba($color: red, $alpha: 1);\n            }\n\n            .card-options{\n                display:flex;\n                gap: 0.5rem;\n\n                .delete-btn{\n                    color:red;\n                }\n            }\n        }\n\n        .add-new-task-form {\n            flex-direction: column;\n            gap: 0.5rem;\n            display: none;\n            font-size: 1rem;\n\n            &.active {\n                display: flex;\n            }\n\n            input {\n                font-size: 1.2rem;\n                padding: 10px;\n                border-radius: 10px;\n                border: none;\n                box-shadow: 2px 2px rgba($color: #000000, $alpha: 0.3);\n            }\n\n            .new-description{\n                resize: vertical;\n                font-size: 1.2rem;\n                padding: 10px;\n                border-radius: 10px;\n                border: none;\n                box-shadow: 2px 2px rgba($color: #000000, $alpha: 0.3);\n            }\n\n            input[type=\"radio\"]{\n                box-shadow: none;\n            }\n\n            #taskDueDate {\n                max-width: 33%;\n            }\n\n            .priority-wrapper {\n                display: flex;\n                justify-content: flex-start;\n                gap: 1rem;\n                margin: 0.5rem 0;\n            }\n\n            .btn-submit {\n                background: lightgreen;\n                color: $primary-dark;\n                font-weight: bold;\n            }\n\n            .btn-cancel {\n                background-color: rgba($color: red, $alpha: 0.3);\n                color: $primary-dark;\n                font-weight: bold;\n            }\n\n            button:hover {\n                background: #ccc;\n            }\n\n            .form-buttons {\n                display: flex;\n                gap: 0.5rem;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
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
    tasks.forEach((task) => {
        const card = document.createElement('div');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const cardOptions = document.createElement('div');
        const editButton = document.createElement('button');
        const completeButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        card.classList.add('project-todo-card');
        card.classList.add(task.priority);
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
        if(i < 3)return;
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQUk7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2Nzcy9tYWluLnNjc3M/NmQyNSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhZTZmZDtcXG4gIGNvbG9yOiAjMDc1OTg1O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc1OTg1O1xcbiAgY29sb3I6ICNiYWU2ZmQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxubWFpbiAuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG59XFxubWFpbiBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5tYWluIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGVhNWU5O1xcbn1cXG5tYWluIGFzaWRlIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XFxuICBiYWNrZ3JvdW5kOiAjZjBmOWZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5tYWluIGFzaWRlIG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxubWFpbiBhc2lkZSBuYXYgLnRvcC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5tYWluIGFzaWRlIG5hdiBoMSB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbm1haW4gYXNpZGUgbmF2IC5wcm9qZWN0LWJ0bi13cmFwcGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5tYWluIGFzaWRlIG5hdiAucHJvamVjdC1idG4td3JhcHBlciBidXR0b24ge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbm1haW4gYXNpZGUgbmF2IC5hZGQtcHJvamVjdC1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5tYWluIGFzaWRlIG5hdiAuYWRkLXByb2plY3QtYnRuLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5tYWluIGFzaWRlIG5hdiBmb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMXJlbTtcXG59XFxubWFpbiBhc2lkZSBuYXYgZm9ybS5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxubWFpbiBhc2lkZSBuYXYgZm9ybSBpbnB1dCB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbm1haW4gYXNpZGUgbmF2IGZvcm0gLmFkZC1wcm9qZWN0LWZvcm0tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbm1haW4gYXNpZGUgbmF2IGZvcm0gLmFkZC1wcm9qZWN0LWZvcm0tYnV0dG9ucyAuYnRuLXN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbiAgY29sb3I6ICMwNzU5ODU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxubWFpbiBhc2lkZSBuYXYgZm9ybSAuYWRkLXByb2plY3QtZm9ybS1idXR0b25zIC5idG4tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpO1xcbiAgY29sb3I6ICMwNzU5ODU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxubWFpbiBhc2lkZSBuYXYgZm9ybSAuYWRkLXByb2plY3QtZm9ybS1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbn1cXG5tYWluIC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIGdhcDogMXJlbTtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWJ0biB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1idG4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbm1haW4gLmNvbnRlbnQgLnByb2plY3QtdG9kby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5wcm9qZWN0LXRvZG8tY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOWZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbm1haW4gLmNvbnRlbnQgLnByb2plY3QtdG9kby1jYXJkLmxvdyB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbn1cXG5tYWluIC5jb250ZW50IC5wcm9qZWN0LXRvZG8tY2FyZC5tZWRpdW0ge1xcbiAgYm9yZGVyLWNvbG9yOiB5ZWxsb3c7XFxufVxcbm1haW4gLmNvbnRlbnQgLnByb2plY3QtdG9kby1jYXJkLmhpZ2gge1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLnByb2plY3QtdG9kby1jYXJkIC5jYXJkLW9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5wcm9qZWN0LXRvZG8tY2FyZCAuY2FyZC1vcHRpb25zIC5kZWxldGUtYnRuIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5tYWluIC5jb250ZW50IC5hZGQtbmV3LXRhc2stZm9ybSBpbnB1dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtIC5uZXctZGVzY3JpcHRpb24ge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWZvcm0gaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWZvcm0gI3Rhc2tEdWVEYXRlIHtcXG4gIG1heC13aWR0aDogMzMlO1xcbn1cXG5tYWluIC5jb250ZW50IC5hZGQtbmV3LXRhc2stZm9ybSAucHJpb3JpdHktd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWZvcm0gLmJ0bi1zdWJtaXQge1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG4gIGNvbG9yOiAjMDc1OTg1O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtIC5idG4tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpO1xcbiAgY29sb3I6ICMwNzU5ODU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxubWFpbiAuY29udGVudCAuYWRkLW5ldy10YXNrLWZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxufVxcbm1haW4gLmNvbnRlbnQgLmFkZC1uZXctdGFzay1mb3JtIC5mb3JtLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7OztFQUdJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFM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W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbiRwcmltYXJ5LWRhcms6ICMwNzU5ODU7XFxuJHNlY29uZGFyeS1kYXJrOiAjMGVhNWU5O1xcbiRwcmltYXJ5LWxpZ2h0OiAjYmFlNmZkO1xcbiRzZWNvbmRhcnktbGlnaHQ6ICNmMGY5ZmY7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1saWdodDtcXG4gICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1kYXJrO1xcbiAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOTBweDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC5zZWxlY3RlZHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcblxcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1kYXJrO1xcbiAgICB9XFxuXFxuICAgIGFzaWRlIHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWxpZ2h0O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICAgICAgbmF2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAycmVtO1xcblxcbiAgICAgICAgICAgIC50b3Atc2VjdGlvbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaDEge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcm9qZWN0LWJ0bi13cmFwcGVyIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuXFxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYWRkLXByb2plY3QtYnRue1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgICYuYWN0aXZle1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBmb3Jte1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgICAgICAgICAgICYuYWN0aXZle1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpbnB1dHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMyk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmFkZC1wcm9qZWN0LWZvcm0tYnV0dG9uc3tcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1zdWJtaXQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIC5idG4tY2FuY2VsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcmVkLCAkYWxwaGE6IDAuMyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICB3aWR0aDogOTAwcHg7XFxuICAgICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgICAuYWRkLW5ldy10YXNrLWJ0biB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3QtdG9kby13cmFwcGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3QtdG9kby1jYXJkIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWxpZ2h0O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcbiAgICAgICAgICAgICYubG93e1xcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yOiBncmVlbiwgJGFscGhhOiAxKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi5tZWRpdW17XFxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgkY29sb3I6IHllbGxvdywgJGFscGhhOiAxKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi5oaWdoe1xcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yOiByZWQsICRhbHBoYTogMSk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5jYXJkLW9wdGlvbnN7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgICAgICAgICAgZ2FwOiAwLjVyZW07XFxuXFxuICAgICAgICAgICAgICAgIC5kZWxldGUtYnRue1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6cmVkO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmFkZC1uZXctdGFzay1mb3JtIHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMC41cmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICAgICAgICAgICYuYWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMyk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5uZXctZGVzY3JpcHRpb257XFxuICAgICAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC4zKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXXtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI3Rhc2tEdWVEYXRlIHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMyU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcmlvcml0eS13cmFwcGVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5idG4tc3VibWl0IHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYnRuLWNhbmNlbCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiByZWQsICRhbHBoYTogMC4zKTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZm9ybS1idXR0b25zIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZ2FwOiAwLjVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGdldE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXRUYXNrcyh0YXNrcyl7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpe1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICB9XG5cbiAgICBhZGRUYXNrKG5ld1Rhc2spe1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdENvbnRyb2xsZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJEZWZhdWx0XCIpKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KFwiVG9kYXlcIikpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUaGlzIFdlZWtcIikpO1xuICAgIH1cblxuICAgIGdldFByb2plY3RzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH1cblxuICAgIHNldFByb2plY3QocHJvamVjdHMpe1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3Qpe1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QobmV3UHJvamVjdCkpO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCl7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBwYXJzZUludChzZWxlY3RlZFByb2plY3QuZGF0YXNldC5wcm9qZWN0SWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1twcm9qZWN0SWRdO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRQcm9qZWN0KGUpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWQnKS5mb3JFYWNoKGJ1dHRvbj0+e1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldFRpdGxlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpe1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cblxuICAgIHNldFByaW9yaXR5KHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3Njc3MvbWFpbi5zY3NzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL1Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvUHJvamVjdFwiO1xuaW1wb3J0IFByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvUHJvamVjdENvbnRyb2xsZXJcIjtcblxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIoKTtcbmNvbnN0IGFkZE5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bicpO1xuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0Zvcm0nKTtcbmNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEZvcm0nKTtcbmNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby13cmFwcGVyJyk7XG5jb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ0bicpO1xuXG5hZGRUYXNrRm9ybS5vbnN1Ym1pdCA9IGFkZFRhc2tUb1Byb2plY3Q7XG5hZGRQcm9qZWN0Rm9ybS5vbnN1Ym1pdCA9IGFkZE5ld1Byb2plY3Q7XG5cbnByb2plY3RCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2FwUHJvamVjdHMpO1xufSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb3JtKGZvcm1OYW1lLCBidXR0b24sIHRvZ2dsZSkge1xuICAgIGlmICh0b2dnbGUpIHtcbiAgICAgICAgZm9ybU5hbWUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtTmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbn1cblxuY29uc3QgY2FuY2VsTmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY2FuY2VsJyk7XG5jYW5jZWxOZXdUYXNrLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKGUpID0+IHtcbiAgICAgICAgLy9pIGhhdGUgdGhhdCBpIGhhZCB0byB3cmFwIHRoZSBidXR0b24gYW5kIGZvcm0gaW4gYSBzZWN0aW9uIGp1c3QgdG8gc2VsZWN0IHRoZSBidXR0b25cbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5xdWVyeVNlbGVjdG9yKCcuYWRkJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCdmb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSkpO1xufSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrTGlzdCgpIHtcbiAgICBjb25zdCB0YXNrcyA9IHByb2plY3RDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0VGFza3MoKTtcbiAgICB0b2RvV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNhcmRPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tY2FyZCcpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQodGFzay5wcmlvcml0eSk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIGNhcmRPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2NhcmQtb3B0aW9ucycpO1xuICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnRuJyk7XG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlLWJ0bicpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlXG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWFyayBDb21wbGV0ZVwiO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiXG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgY2FyZE9wdGlvbnMuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuICAgICAgICBjYXJkT3B0aW9ucy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgICAgY2FyZE9wdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkT3B0aW9ucyk7XG4gICAgICAgIHRvZG9XcmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgfSk7XG59XG5cbmFkZE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlzcGxheUZvcm0oYWRkUHJvamVjdEZvcm0sIGFkZE5ld1Byb2plY3RCdXR0b24sIGZhbHNlKTtcbiAgICBhZGRUYXNrRm9ybS5yZXNldCgpO1xuICAgIGRpc3BsYXlGb3JtKGFkZFRhc2tGb3JtLCBhZGROZXdUYXNrQnV0dG9uLCB0cnVlKTtcbn0pO1xuXG5hZGROZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlGb3JtKGFkZFRhc2tGb3JtLCBhZGROZXdUYXNrQnV0dG9uLCBmYWxzZSk7XG4gICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICBkaXNwbGF5Rm9ybShhZGRQcm9qZWN0Rm9ybSwgYWRkTmV3UHJvamVjdEJ1dHRvbiwgdHJ1ZSk7XG59KVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3VGFzayA9IGdldFRhc2tGb3JtRGF0YSgpO1xuXG4gICAgcHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKS5hZGRUYXNrKG5ld1Rhc2spO1xuXG4gICAgZGlzcGxheUZvcm0oYWRkVGFza0Zvcm0sIGFkZE5ld1Rhc2tCdXR0b24sIGZhbHNlKTtcblxuICAgIGRpc3BsYXlUYXNrTGlzdCgpO1xufTtcblxuY29uc3QgZ2V0VGFza0Zvcm1EYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUaXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0R1ZURhdGUnKS52YWx1ZSk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicmFkaW9cIl06Y2hlY2tlZCcpLnZhbHVlO1xuICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxufTtcblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3RDb250cm9sbGVyLmFkZFByb2plY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpLnZhbHVlKTtcbiAgICBkaXNwbGF5Rm9ybShhZGRQcm9qZWN0Rm9ybSwgYWRkTmV3UHJvamVjdEJ1dHRvbiwgZmFsc2UpO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFdyYXBwZXInKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RDb250cm9sbGVyLmdldFByb2plY3RzKCk7XG4gICAgcHJvamVjdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgICAgIC8vc3RvcCBjcmVhdGlvbiBvZiBkZWZhdWx0IHByb2plY3QgZm9sZGVyc1xuICAgICAgICBpZihpIDwgMylyZXR1cm47XG4gICAgICAgIC8vbWFrZSBhbGwgbmV3IHVzZXIgY3JlYXRlZCBwcm9qZWN0c1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5kYXRhc2V0LnByb2plY3RJZCA9IGk7XG4gICAgICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2FwUHJvamVjdHMpO1xuICAgICAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc3dhcFByb2plY3RzKGUpIHtcbiAgICBwcm9qZWN0Q29udHJvbGxlci5zZXRDdXJyZW50UHJvamVjdChlKTtcbiAgICBkaXNwbGF5VGFza0xpc3QoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=