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

/***/ "./src/components/context/socket/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/context/socket/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SocketContext\": function() { return /* binding */ SocketContext; }\n/* harmony export */ });\n/* harmony import */ var _Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_use_websocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use-websocket */ \"./node_modules/react-use-websocket/dist/index.js\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/data */ \"./src/data/index.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/snyssss/\\u5DE5\\u4F5C/WFHelper-UI/src/components/context/socket/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar SocketContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});\n\nvar SocketContextProvider = function SocketContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_5__.useSnackbar)(),\n      enqueueSnackbar = _useSnackbar.enqueueSnackbar,\n      closeSnackbar = _useSnackbar.closeSnackbar;\n\n  var _useGameLog = (0,_data__WEBPACK_IMPORTED_MODULE_6__.useGameLog)(),\n      _useGameLog2 = (0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useGameLog, 2),\n      gameLog = _useGameLog2[0],\n      setGameLog = _useGameLog2[1];\n\n  var _useGameSettings = (0,_data__WEBPACK_IMPORTED_MODULE_6__.useGameSettings)(),\n      _useGameSettings2 = (0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useGameSettings, 2),\n      gameSettings = _useGameSettings2[0],\n      setGameSettings = _useGameSettings2[1];\n\n  var _useGameState = (0,_data__WEBPACK_IMPORTED_MODULE_6__.useGameState)(),\n      _useGameState2 = (0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useGameState, 2),\n      setGameState = _useGameState2[1];\n\n  var _useGameTargetList = (0,_data__WEBPACK_IMPORTED_MODULE_6__.useGameTargetList)(),\n      _useGameTargetList2 = (0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useGameTargetList, 2),\n      setGameTargetList = _useGameTargetList2[1];\n\n  var server = (0,_data__WEBPACK_IMPORTED_MODULE_6__.useGameSettingsByKey)('server');\n  var socketUrl = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {\n    return server ? \"ws://\".concat(server, \"/websocket\") : null;\n  }, [server]);\n\n  var _useWebSocket = (0,react_use_websocket__WEBPACK_IMPORTED_MODULE_4__.default)(socketUrl, {\n    reconnectAttempts: Infinity,\n    reconnectInterval: 1000 * 10\n  }),\n      sendJsonMessage = _useWebSocket.sendJsonMessage,\n      lastMessage = _useWebSocket.lastMessage,\n      readyState = _useWebSocket.readyState;\n\n  var sendMessage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (type, data) {\n    sendJsonMessage({\n      type: type,\n      data: data\n    });\n  }, [sendJsonMessage]);\n  var connected = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {\n    return readyState === react_use_websocket__WEBPACK_IMPORTED_MODULE_4__.ReadyState.OPEN;\n  }, [readyState]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (connected) {\n      sendJsonMessage({\n        type: 'getState'\n      });\n      sendJsonMessage({\n        type: 'getLogArray'\n      });\n      sendJsonMessage({\n        type: 'getTargetList'\n      });\n      closeSnackbar('socket');\n    } else {\n      enqueueSnackbar('无法连接到服务器', {\n        key: 'socket',\n        variant: 'error',\n        persist: true,\n        preventDuplicate: true\n      });\n    }\n  }, [connected]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (lastMessage) {\n      var reader = new FileReader();\n\n      reader.onload = function (e) {\n        if (e.target && e.target.readyState === 2) {\n          var enc = new TextDecoder('utf-8');\n          var res = JSON.parse(enc.decode(new Uint8Array(e.target.result)));\n\n          if (res.type === 'getState_ACK' || res.type === 'onStateUpdate') {\n            setGameState(res.data);\n          }\n\n          if (res.type === 'getLogArray_ACK') {\n            setGameLog(res.data.reverse());\n          }\n\n          if (res.type === 'getTargetList_ACK') {\n            setGameTargetList(res.data);\n          }\n\n          if (res.type === 'onLogAppend') {\n            setGameLog([res.data].concat((0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(gameLog || [])));\n          }\n        }\n      };\n\n      reader.readAsArrayBuffer(lastMessage.data);\n    }\n  }, [lastMessage]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (window && gameSettings) {\n      setGameSettings(_objectSpread(_objectSpread({}, gameSettings), {}, {\n        server: window.location.host\n      }));\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SocketContext.Provider, {\n    value: {\n      sendMessage: sendMessage,\n      connected: connected\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 131,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SocketContextProvider, \"KogpEPsIkzNrWD8xB2ATKBH4Q24=\", false, function () {\n  return [notistack__WEBPACK_IMPORTED_MODULE_5__.useSnackbar, _data__WEBPACK_IMPORTED_MODULE_6__.useGameLog, _data__WEBPACK_IMPORTED_MODULE_6__.useGameSettings, _data__WEBPACK_IMPORTED_MODULE_6__.useGameState, _data__WEBPACK_IMPORTED_MODULE_6__.useGameTargetList, _data__WEBPACK_IMPORTED_MODULE_6__.useGameSettingsByKey, react_use_websocket__WEBPACK_IMPORTED_MODULE_4__.default];\n});\n\n_c = SocketContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketContextProvider);\n\n\nvar _c;\n\n$RefreshReg$(_c, \"SocketContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0L3NvY2tldC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUVBO0FBRUE7O0FBYUEsSUFBTWEsYUFBYSxnQkFBR1osb0RBQWEsQ0FDakMsRUFEaUMsQ0FBbkM7O0FBSUEsSUFBTWEscUJBQXlCLEdBQUcsU0FBNUJBLHFCQUE0QixPQUFnQztBQUFBOztBQUFBLE1BQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7O0FBQ2hFLHFCQUEyQ1Isc0RBQVcsRUFBdEQ7QUFBQSxNQUFRUyxlQUFSLGdCQUFRQSxlQUFSO0FBQUEsTUFBeUJDLGFBQXpCLGdCQUF5QkEsYUFBekI7O0FBRUEsb0JBQThCVCxpREFBVSxFQUF4QztBQUFBO0FBQUEsTUFBT1UsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSx5QkFBd0NWLHNEQUFlLEVBQXZEO0FBQUE7QUFBQSxNQUFPVyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLHNCQUF5QlYsbURBQVksRUFBckM7QUFBQTtBQUFBLE1BQVNXLFlBQVQ7O0FBQ0EsMkJBQThCVix3REFBaUIsRUFBL0M7QUFBQTtBQUFBLE1BQVNXLGlCQUFUOztBQUVBLE1BQU1DLE1BQU0sR0FBR2QsMkRBQW9CLENBQUMsUUFBRCxDQUFuQztBQUVBLE1BQU1lLFNBQVMsR0FBR3JCLDhDQUFPLENBQ3ZCO0FBQUEsV0FBT29CLE1BQU0sa0JBQVdBLE1BQVgsa0JBQWdDLElBQTdDO0FBQUEsR0FEdUIsRUFFdkIsQ0FBQ0EsTUFBRCxDQUZ1QixDQUF6Qjs7QUFLQSxzQkFBcURuQiw0REFBWSxDQUFDb0IsU0FBRCxFQUFZO0FBQzNFQyxJQUFBQSxpQkFBaUIsRUFBRUMsUUFEd0Q7QUFFM0VDLElBQUFBLGlCQUFpQixFQUFFLE9BQU87QUFGaUQsR0FBWixDQUFqRTtBQUFBLE1BQVFDLGVBQVIsaUJBQVFBLGVBQVI7QUFBQSxNQUF5QkMsV0FBekIsaUJBQXlC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M0IsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSXFELE1BQU0sSUFBSXBDLFlBQWQsRUFBNEI7QUFDMUJDLE1BQUFBLGVBQWUsaUNBQ1ZELFlBRFU7QUFFYkksUUFBQUEsTUFBTSxFQUFFZ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQztBQUZYLFNBQWY7QUFJRDtBQUNGLEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxzQkFDRSw4REFBQyxhQUFELENBQWUsUUFBZjtBQUNFLFNBQUssRUFBRTtBQUNMMUIsTUFBQUEsV0FBVyxFQUFYQSxXQURLO0FBRUxHLE1BQUFBLFNBQVMsRUFBVEE7QUFGSyxLQURUO0FBQUEsY0FNR3BCO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0E5R0Q7O0dBQU1EO1VBQ3VDUCxvREFFYkMsK0NBQ1VDLG9EQUNmRSxpREFDS0Msc0RBRWZGLHlEQU9zQ0w7OztLQWZqRFM7QUFnSE4sK0RBQWVBLHFCQUFmO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29udGV4dC9zb2NrZXQvaW5kZXgudHN4P2ViMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIEZDLFxuICBSZWFjdEVsZW1lbnQsXG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VFZmZlY3QsXG4gIHVzZU1lbW8sXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VXZWJTb2NrZXQsIHsgUmVhZHlTdGF0ZSB9IGZyb20gJ3JlYWN0LXVzZS13ZWJzb2NrZXQnO1xuXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XG5cbmltcG9ydCB7XG4gIHVzZUdhbWVMb2csXG4gIHVzZUdhbWVTZXR0aW5ncyxcbiAgdXNlR2FtZVNldHRpbmdzQnlLZXksXG4gIHVzZUdhbWVTdGF0ZSxcbiAgdXNlR2FtZVRhcmdldExpc3Rcbn0gZnJvbSAnfi9kYXRhJztcblxuZXhwb3J0IHR5cGUgU29ja2V0Q29udGV4dFByb3BzID0ge1xuICBzZW5kTWVzc2FnZTogKHR5cGU6IHN0cmluZywgZGF0YT86IHVua25vd24pID0+IHZvaWQ7XG4gIGNvbm5lY3RlZDogYm9vbGVhbjtcbn07XG5cbmNvbnN0IFNvY2tldENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFNvY2tldENvbnRleHRQcm9wcz4oXG4gIHt9IGFzIFNvY2tldENvbnRleHRQcm9wc1xuKTtcblxuY29uc3QgU29ja2V0Q29udGV4dFByb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pOiBSZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCB7IGVucXVldWVTbmFja2JhciwgY2xvc2VTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcblxuICBjb25zdCBbZ2FtZUxvZywgc2V0R2FtZUxvZ10gPSB1c2VHYW1lTG9nKCk7XG4gIGNvbnN0IFtnYW1lU2V0dGluZ3MsIHNldEdhbWVTZXR0aW5nc10gPSB1c2VHYW1lU2V0dGluZ3MoKTtcbiAgY29uc3QgWywgc2V0R2FtZVN0YXRlXSA9IHVzZUdhbWVTdGF0ZSgpO1xuICBjb25zdCBbLCBzZXRHYW1lVGFyZ2V0TGlzdF0gPSB1c2VHYW1lVGFyZ2V0TGlzdCgpO1xuXG4gIGNvbnN0IHNlcnZlciA9IHVzZUdhbWVTZXR0aW5nc0J5S2V5KCdzZXJ2ZXInKTtcblxuICBjb25zdCBzb2NrZXRVcmwgPSB1c2VNZW1vKFxuICAgICgpID0+IChzZXJ2ZXIgPyBgd3M6Ly8ke3NlcnZlcn0vd2Vic29ja2V0YCA6IG51bGwpLFxuICAgIFtzZXJ2ZXJdXG4gICk7XG5cbiAgY29uc3QgeyBzZW5kSnNvbk1lc3NhZ2UsIGxhc3RNZXNzYWdlLCByZWFkeVN0YXRlIH0gPSB1c2VXZWJTb2NrZXQoc29ja2V0VXJsLCB7XG4gICAgcmVjb25uZWN0QXR0ZW1wdHM6IEluZmluaXR5LFxuICAgIHJlY29ubmVjdEludGVydmFsOiAxMDAwICogMTAsXG4gIH0pO1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHR5cGU6IHN0cmluZywgZGF0YT86IHVua25vd24pID0+IHtcbiAgICAgIHNlbmRKc29uTWVzc2FnZSh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRhdGEsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtzZW5kSnNvbk1lc3NhZ2VdXG4gICk7XG5cbiAgY29uc3QgY29ubmVjdGVkID0gdXNlTWVtbygoKSA9PiByZWFkeVN0YXRlID09PSBSZWFkeVN0YXRlLk9QRU4sIFtyZWFkeVN0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICBzZW5kSnNvbk1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAnZ2V0U3RhdGUnLFxuICAgICAgfSk7XG5cbiAgICAgIHNlbmRKc29uTWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdnZXRMb2dBcnJheScsXG4gICAgICB9KTtcblxuICAgICAgc2VuZEpzb25NZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ2dldFRhcmdldExpc3QnLFxuICAgICAgfSk7XG5cbiAgICAgIGNsb3NlU25hY2tiYXIoJ3NvY2tldCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnF1ZXVlU25hY2tiYXIoJ+aXoOazlei/nuaOpeWIsOacjeWKoeWZqCcsIHtcbiAgICAgICAga2V5OiAnc29ja2V0JyxcbiAgICAgICAgdmFyaWFudDogJ2Vycm9yJyxcbiAgICAgICAgcGVyc2lzdDogdHJ1ZSxcbiAgICAgICAgcHJldmVudER1cGxpY2F0ZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2Nvbm5lY3RlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxhc3RNZXNzYWdlKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgICAgICBjb25zdCBlbmMgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04Jyk7XG5cbiAgICAgICAgICBjb25zdCByZXMgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgZW5jLmRlY29kZShuZXcgVWludDhBcnJheShlLnRhcmdldC5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVzLnR5cGUgPT09ICdnZXRTdGF0ZV9BQ0snIHx8IHJlcy50eXBlID09PSAnb25TdGF0ZVVwZGF0ZScpIHtcbiAgICAgICAgICAgIHNldEdhbWVTdGF0ZShyZXMuZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJlcy50eXBlID09PSAnZ2V0TG9nQXJyYXlfQUNLJykge1xuICAgICAgICAgICAgc2V0R2FtZUxvZyhyZXMuZGF0YS5yZXZlcnNlKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZXMudHlwZSA9PT0gJ2dldFRhcmdldExpc3RfQUNLJykge1xuICAgICAgICAgICAgc2V0R2FtZVRhcmdldExpc3QocmVzLmRhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZXMudHlwZSA9PT0gJ29uTG9nQXBwZW5kJykge1xuICAgICAgICAgICAgc2V0R2FtZUxvZyhbcmVzLmRhdGEsIC4uLihnYW1lTG9nIHx8IFtdKV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGxhc3RNZXNzYWdlLmRhdGEpO1xuICAgIH1cbiAgfSwgW2xhc3RNZXNzYWdlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93ICYmIGdhbWVTZXR0aW5ncykge1xuICAgICAgc2V0R2FtZVNldHRpbmdzKHtcbiAgICAgICAgLi4uZ2FtZVNldHRpbmdzLFxuICAgICAgICBzZXJ2ZXI6IHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U29ja2V0Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgc2VuZE1lc3NhZ2UsXG4gICAgICAgIGNvbm5lY3RlZCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU29ja2V0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2tldENvbnRleHRQcm92aWRlcjtcblxuZXhwb3J0IHsgU29ja2V0Q29udGV4dCB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVdlYlNvY2tldCIsIlJlYWR5U3RhdGUiLCJ1c2VTbmFja2JhciIsInVzZUdhbWVMb2ciLCJ1c2VHYW1lU2V0dGluZ3MiLCJ1c2VHYW1lU2V0dGluZ3NCeUtleSIsInVzZUdhbWVTdGF0ZSIsInVzZUdhbWVUYXJnZXRMaXN0IiwiU29ja2V0Q29udGV4dCIsIlNvY2tldENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsImdhbWVMb2ciLCJzZXRHYW1lTG9nIiwiZ2FtZVNldHRpbmdzIiwic2V0R2FtZVNldHRpbmdzIiwic2V0R2FtZVN0YXRlIiwic2V0R2FtZVRhcmdldExpc3QiLCJzZXJ2ZXIiLCJzb2NrZXRVcmwiLCJyZWNvbm5lY3RBdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0SW50ZXJ2YWwiLCJzZW5kSnNvbk1lc3NhZ2UiLCJsYXN0TWVzc2FnZSIsInJlYWR5U3RhdGUiLCJzZW5kTWVzc2FnZSIsInR5cGUiLCJkYXRhIiwiY29ubmVjdGVkIiwiT1BFTiIsImtleSIsInZhcmlhbnQiLCJwZXJzaXN0IiwicHJldmVudER1cGxpY2F0ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwidGFyZ2V0IiwiZW5jIiwiVGV4dERlY29kZXIiLCJyZXMiLCJKU09OIiwicGFyc2UiLCJkZWNvZGUiLCJVaW50OEFycmF5IiwicmVzdWx0IiwicmV2ZXJzZSIsInJlYWRBc0FycmF5QnVmZmVyIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/context/socket/index.tsx\n");

/***/ })

});