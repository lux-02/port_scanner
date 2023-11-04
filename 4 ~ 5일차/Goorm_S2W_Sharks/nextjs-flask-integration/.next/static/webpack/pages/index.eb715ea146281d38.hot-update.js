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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_data_wellKnownPorts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/data/wellKnownPorts */ \"./public/data/wellKnownPorts.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [ip, setIp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [detail, setDetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"ws://127.0.0.1:5001\");\n        socketRef.current = socket;\n        socket.on(\"scanResult\", (data)=>{\n            const result = data.result;\n            console.log(result);\n            if (result) {\n                setResults((prevResults)=>[\n                        ...prevResults,\n                        {\n                            port: result.port,\n                            banner: result.has_banner ? result.banner : \"Port \".concat(result.port, \" is open but no banner retrieved.\")\n                        }\n                    ]);\n            }\n        });\n        socket.on(\"connect\", ()=>{\n            console.log(\"Socket Connected\");\n        });\n        socket.on(\"disconnect\", ()=>{\n            console.log(\"Socket Disconnected\");\n        });\n        return ()=>{\n            socket.close();\n        };\n    }, []);\n    const handleScan = ()=>{\n        if (socketRef.current && socketRef.current.connected) {\n            setIsLoading(true);\n            socketRef.current.emit(\"startScan\", {\n                target_ip: ip\n            });\n        } else {\n            console.error(\"Socket not connected.\");\n        }\n    };\n    function showDetail(port, banner) {\n        setDetail({\n            port,\n            banner\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrap)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title)),\n                children: \"SHARKS SCANNER\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputWrap)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: ip,\n                        onChange: (e)=>setIp(e.target.value),\n                        placeholder: \"43.200.177.222\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleScan,\n                        children: isLoading ? \"Loading...\" : \"START\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().results),\n                children: results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"result-item\"]),\n                        onClick: ()=>showDetail(result.port, result.banner),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    result.port,\n                                    \": \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: parseBanner(result.port, result.banner)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            detail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().detail),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailBox),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                \"Port: \",\n                                detail.port\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: detail.banner\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bde57\\\\Desktop\\\\1차 프로젝트(서비스 포트 스캐너 구현)\\\\4 ~ 5일차\\\\Goorm_S2W_Sharks\\\\nextjs-flask-integration\\\\pages\\\\index.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"kVdQfSoVYGlEavYwfp+rfifWIMA=\");\n_c = Home;\nfunction parseBanner(port, banner) {\n    if (_public_data_wellKnownPorts__WEBPACK_IMPORTED_MODULE_3__[\"default\"][port]) {\n        return _public_data_wellKnownPorts__WEBPACK_IMPORTED_MODULE_3__[\"default\"][port];\n    }\n    return banner;\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7c0NBQ3RCLDhEQUFDZ0M7c0NBQUc3QyxPQUFPYyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQjtHQXZGd0JuQjtLQUFBQTtBQXlGeEIsU0FBUytDLFlBQVk3QixJQUFJLEVBQUVDLE1BQU07SUFDL0IsSUFBSXBCLG1FQUFjLENBQUNtQixLQUFLLEVBQUU7UUFDeEIsT0FBT25CLG1FQUFjLENBQUNtQixLQUFLO0lBQzdCO0lBQ0EsT0FBT0M7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB3ZWxsS25vd25Qb3J0cyBmcm9tICdAL3B1YmxpYy9kYXRhL3dlbGxLbm93blBvcnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2lwLCBzZXRJcF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtkZXRhaWwsIHNldERldGFpbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNvY2tldFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oXCJ3czovLzEyNy4wLjAuMTo1MDAxXCIpO1xyXG4gICAgc29ja2V0UmVmLmN1cnJlbnQgPSBzb2NrZXQ7XHJcblxyXG4gICAgc29ja2V0Lm9uKFwic2NhblJlc3VsdFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBkYXRhLnJlc3VsdDtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcblxyXG4gICAgICBzZXRSZXN1bHRzKChwcmV2UmVzdWx0cykgPT4gW1xyXG4gICAgICAgIC4uLnByZXZSZXN1bHRzLFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBwb3J0OiByZXN1bHQucG9ydCwgXHJcbiAgICAgICAgICBiYW5uZXI6IHJlc3VsdC5oYXNfYmFubmVyID8gcmVzdWx0LmJhbm5lciA6IGBQb3J0ICR7cmVzdWx0LnBvcnR9IGlzIG9wZW4gYnV0IG5vIGJhbm5lciByZXRyaWV2ZWQuYFxyXG4gICAgICAgIH1cclxuICAgICAgXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnU29ja2V0IENvbm5lY3RlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnU29ja2V0IERpc2Nvbm5lY3RlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc29ja2V0LmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY2FuID0gKCkgPT4ge1xyXG4gICAgaWYgKHNvY2tldFJlZi5jdXJyZW50ICYmIHNvY2tldFJlZi5jdXJyZW50LmNvbm5lY3RlZCkge1xyXG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHNvY2tldFJlZi5jdXJyZW50LmVtaXQoXCJzdGFydFNjYW5cIiwge1xyXG4gICAgICAgIHRhcmdldF9pcDogaXBcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdTb2NrZXQgbm90IGNvbm5lY3RlZC4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzaG93RGV0YWlsKHBvcnQsIGJhbm5lcikge1xyXG4gICAgc2V0RGV0YWlsKHsgcG9ydCwgYmFubmVyIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMud3JhcH1gfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRpdGxlfWB9PlNIQVJLUyBTQ0FOTkVSPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbnB1dFdyYXB9YH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17aXB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElwKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNDMuMjAwLjE3Ny4yMjJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY2FufT57aXNMb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1NUQVJUJ308L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0c30+XHJcbiAgICAgICAge3Jlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzW1wicmVzdWx0LWl0ZW1cIl19IG9uQ2xpY2s9eygpID0+IHNob3dEZXRhaWwocmVzdWx0LnBvcnQsIHJlc3VsdC5iYW5uZXIpfT5cclxuICAgICAgICAgICAgPHN0cm9uZz57cmVzdWx0LnBvcnR9OiA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPHNwYW4+e3BhcnNlQmFubmVyKHJlc3VsdC5wb3J0LCByZXN1bHQuYmFubmVyKX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtcclxuICAgICAgICBkZXRhaWwgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbEJveH0+XHJcbiAgICAgICAgICAgICAgPGgzPlBvcnQ6IHtkZXRhaWwucG9ydH08L2gzPlxyXG4gICAgICAgICAgICAgIDxwPntkZXRhaWwuYmFubmVyfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIDwvZGl2ID5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUJhbm5lcihwb3J0LCBiYW5uZXIpIHtcclxuICBpZiAod2VsbEtub3duUG9ydHNbcG9ydF0pIHtcclxuICAgIHJldHVybiB3ZWxsS25vd25Qb3J0c1twb3J0XTtcclxuICB9XHJcbiAgcmV0dXJuIGJhbm5lcjtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJpbyIsInN0eWxlcyIsIndlbGxLbm93blBvcnRzIiwiSG9tZSIsImlwIiwic2V0SXAiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImRldGFpbCIsInNldERldGFpbCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNvY2tldFJlZiIsInNvY2tldCIsImN1cnJlbnQiLCJvbiIsImRhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicHJldlJlc3VsdHMiLCJwb3J0IiwiYmFubmVyIiwiaGFzX2Jhbm5lciIsImNsb3NlIiwiaGFuZGxlU2NhbiIsImNvbm5lY3RlZCIsImVtaXQiLCJ0YXJnZXRfaXAiLCJlcnJvciIsInNob3dEZXRhaWwiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwIiwiaDEiLCJ0aXRsZSIsImlucHV0V3JhcCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaW5kZXgiLCJzdHJvbmciLCJzcGFuIiwicGFyc2VCYW5uZXIiLCJkZXRhaWxCb3giLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});