"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/state/CurrentTask/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/state/CurrentTask/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _components_context_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/context/socket */ \"./src/components/context/socket/index.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/data */ \"./src/data/index.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/snyssss/\\u5DE5\\u4F5C/WFHelper-UI/src/components/state/CurrentTask/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar StyledPaper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Paper)(function () {\n  return (0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, \"&.\".concat(_mui_material__WEBPACK_IMPORTED_MODULE_7__.paperClasses.root), {\n    display: 'inline-flex'\n  });\n});\nvar StyledBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box)(function (_ref2) {\n  var theme = _ref2.theme;\n  return {\n    display: 'flex',\n    flexDirection: 'column',\n    justifyContent: 'space-between',\n    padding: theme.spacing(2),\n    width: theme.spacing(24)\n  };\n});\n\nvar Component = function Component() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_components_context_socket__WEBPACK_IMPORTED_MODULE_3__.SocketContext),\n      sendMessage = _useContext.sendMessage;\n\n  var currentTask = (0,_data__WEBPACK_IMPORTED_MODULE_4__.useGameStateByKey)('currentTargets');\n\n  var _useGameTargetList = (0,_data__WEBPACK_IMPORTED_MODULE_4__.useGameTargetList)(),\n      _useGameTargetList2 = (0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useGameTargetList, 1),\n      taskList = _useGameTargetList2[0];\n\n  var handleChange = function handleChange(event) {\n    sendMessage('changeTargets', event.target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(StyledPaper, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(StyledBox, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n        variant: \"h6\",\n        children: \"\\u5F53\\u524D\\u4EFB\\u52A1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Select, {\n        size: \"small\",\n        value: currentTask,\n        onChange: handleChange,\n        children: (taskList || []).map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {\n            value: item,\n            children: item\n          }, item, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Component, \"REtsBNtDuIfEbBAZklJF1mxWX9s=\", false, function () {\n  return [_data__WEBPACK_IMPORTED_MODULE_4__.useGameStateByKey, _data__WEBPACK_IMPORTED_MODULE_4__.useGameTargetList];\n});\n\n_c = Component;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\nvar _c;\n\n$RefreshReg$(_c, \"Component\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdGF0ZS9DdXJyZW50VGFzay9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFTQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTVksV0FBVyxHQUFHSiw0REFBTSxDQUFDSixnREFBRCxDQUFOLENBQWM7QUFBQSxxS0FDMUJHLDREQUQwQixHQUNKO0FBQzFCTyxJQUFBQSxPQUFPLEVBQUU7QUFEaUIsR0FESTtBQUFBLENBQWQsQ0FBcEI7QUFNQSxJQUFNQyxTQUFTLEdBQUdQLDREQUFNLENBQUNOLDhDQUFELENBQU4sQ0FBWTtBQUFBLE1BQUdjLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQzVDRixJQUFBQSxPQUFPLEVBQUUsTUFEbUM7QUFFNUNHLElBQUFBLGFBQWEsRUFBRSxRQUY2QjtBQUc1Q0MsSUFBQUEsY0FBYyxFQUFFLGVBSDRCO0FBSTVDQyxJQUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FKbUM7QUFLNUNDLElBQUFBLEtBQUssRUFBRUwsS0FBSyxDQUFDSSxPQUFOLENBQWMsRUFBZDtBQUxxQyxHQUFoQjtBQUFBLENBQVosQ0FBbEI7O0FBUUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBb0I7QUFBQTs7QUFDcEMsb0JBQXdCckIsaURBQVUsQ0FBQ1EscUVBQUQsQ0FBbEM7QUFBQSxNQUFRYyxXQUFSLGVBQVFBLFdBQVI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHZCx3REFBaUIsQ0FBQyxnQkFBRCxDQUFyQzs7QUFFQSwyQkFBbUJDLHdEQUFpQixFQUFwQztBQUFBO0FBQUEsTUFBT2MsUUFBUDs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQThCO0FBQ2pESixJQUFBQSxXQUFXLENBQUMsZUFBRCxFQUFrQkksS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQS9CLENBQVg7QUFDRCxHQUZEOztBQUlBLHNCQUNFLDhEQUFDLFdBQUQ7QUFBQSwyQkFDRSw4REFBQyxTQUFEO0FBQUEsOEJBQ0UsOERBQUMscURBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLGlEQUFEO0FBQVEsWUFBSSxFQUFDLE9BQWI7QUFBcUIsYUFBSyxFQUFFTCxXQUE1QjtBQUF5QyxnQkFBUSxFQUFFRSxZQUFuRDtBQUFBLGtCQUNHLENBQUNELFFBQVEsSUFBSSxFQUFiLEVBQWlCSyxHQUFqQixDQUFxQixVQUFDQyxJQUFEO0FBQUEsOEJBQ3BCLDhEQUFDLG1EQUFEO0FBQXFCLGlCQUFLLEVBQUVBLElBQTVCO0FBQUEsc0JBQ0dBO0FBREgsYUFBZUEsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURvQjtBQUFBLFNBQXJCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBekJEOztHQUFNVDtVQUdnQlosc0RBRURDOzs7S0FMZlc7QUEyQk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3RhdGUvQ3VycmVudFRhc2svaW5kZXgudHN4PzEyYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQm94LFxuICBNZW51SXRlbSxcbiAgUGFwZXIsXG4gIFNlbGVjdCxcbiAgU2VsZWN0Q2hhbmdlRXZlbnQsXG4gIFR5cG9ncmFwaHksXG4gIHBhcGVyQ2xhc3Nlcyxcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICd+L2NvbXBvbmVudHMvY29udGV4dC9zb2NrZXQnO1xuaW1wb3J0IHsgdXNlR2FtZVN0YXRlQnlLZXksIHVzZUdhbWVUYXJnZXRMaXN0IH0gZnJvbSAnfi9kYXRhJztcblxuY29uc3QgU3R5bGVkUGFwZXIgPSBzdHlsZWQoUGFwZXIpKCgpID0+ICh7XG4gIFtgJi4ke3BhcGVyQ2xhc3Nlcy5yb290fWBdOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgfSxcbn0pKTtcblxuY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkKEJveCkoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMjQpLFxufSkpO1xuXG5jb25zdCBDb21wb25lbnQgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgeyBzZW5kTWVzc2FnZSB9ID0gdXNlQ29udGV4dChTb2NrZXRDb250ZXh0KTtcblxuICBjb25zdCBjdXJyZW50VGFzayA9IHVzZUdhbWVTdGF0ZUJ5S2V5KCdjdXJyZW50VGFyZ2V0cycpO1xuXG4gIGNvbnN0IFt0YXNrTGlzdF0gPSB1c2VHYW1lVGFyZ2V0TGlzdCgpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogU2VsZWN0Q2hhbmdlRXZlbnQpID0+IHtcbiAgICBzZW5kTWVzc2FnZSgnY2hhbmdlVGFyZ2V0cycsIGV2ZW50LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFBhcGVyPlxuICAgICAgPFN0eWxlZEJveD5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+5b2T5YmN5Lu75YqhPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8U2VsZWN0IHNpemU9XCJzbWFsbFwiIHZhbHVlPXtjdXJyZW50VGFza30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgeyh0YXNrTGlzdCB8fCBbXSkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+XG4gICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L1N0eWxlZEJveD5cbiAgICA8L1N0eWxlZFBhcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIkJveCIsIk1lbnVJdGVtIiwiUGFwZXIiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5IiwicGFwZXJDbGFzc2VzIiwic3R5bGVkIiwiU29ja2V0Q29udGV4dCIsInVzZUdhbWVTdGF0ZUJ5S2V5IiwidXNlR2FtZVRhcmdldExpc3QiLCJTdHlsZWRQYXBlciIsInJvb3QiLCJkaXNwbGF5IiwiU3R5bGVkQm94IiwidGhlbWUiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwic3BhY2luZyIsIndpZHRoIiwiQ29tcG9uZW50Iiwic2VuZE1lc3NhZ2UiLCJjdXJyZW50VGFzayIsInRhc2tMaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/state/CurrentTask/index.tsx\n");

/***/ })

});