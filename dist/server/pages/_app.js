/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/config/theme/index.ts":
/*!***********************************!*\
  !*** ./src/config/theme/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"paletteBase\": () => (/* reexport safe */ _palette_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"paletteDark\": () => (/* reexport safe */ _palette_dark__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"paletteLight\": () => (/* reexport safe */ _palette_light__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"shadows\": () => (/* reexport safe */ _shadows__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"typography\": () => (/* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography */ \"./src/config/theme/typography.ts\");\n/* harmony import */ var _palette_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette-base */ \"./src/config/theme/palette-base.ts\");\n/* harmony import */ var _palette_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./palette-light */ \"./src/config/theme/palette-light.ts\");\n/* harmony import */ var _palette_dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette-dark */ \"./src/config/theme/palette-dark.ts\");\n/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shadows */ \"./src/config/theme/shadows.ts\");\n\n\n\n\n\n\n// default\nconst createTheme = (darkMode)=>{\n    const palette = darkMode ? {\n        ..._palette_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        ..._palette_dark__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    } : {\n        ..._palette_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        ..._palette_light__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    };\n    return (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n        palette,\n        typography: _typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        shadows: _shadows__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    });\n};\nconst theme = createTheme(false);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3RoZW1lL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkU7QUFFdEM7QUFDRztBQUNFO0FBQ0Y7QUFDVDtBQUUvQixVQUFVO0FBQ1YsTUFBTUEsV0FBVyxHQUFHLENBQUNPLFFBQWtCLEdBQVk7SUFDakQsTUFBTUMsT0FBTyxHQUFHRCxRQUFRLEdBQUc7UUFBRSxHQUFHSixxREFBVztRQUFFLEdBQUdFLHFEQUFXO0tBQUUsR0FBRztRQUFFLEdBQUdGLHFEQUFXO1FBQUUsR0FBR0Msc0RBQVk7S0FBRTtJQUNuRyxPQUFPSCxpRUFBYyxDQUFDO1FBQ3BCTyxPQUFPO1FBQ1BOLFVBQVU7UUFDVkksT0FBTztLQUNSLENBQUM7Q0FDSDtBQUVELE1BQU1HLEtBQUssR0FBR1QsV0FBVyxDQUFDLEtBQUssQ0FBQztBQUVzQztBQUN0RSxpRUFBZVMsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZXNwYWNlLWxhbmRpbmctcGFnZS8uL3NyYy9jb25maWcvdGhlbWUvaW5kZXgudHM/NTZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSBhcyBjcmVhdGVNdWlUaGVtZSwgVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcydcblxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHBhbGV0dGVCYXNlIGZyb20gJy4vcGFsZXR0ZS1iYXNlJ1xuaW1wb3J0IHBhbGV0dGVMaWdodCBmcm9tICcuL3BhbGV0dGUtbGlnaHQnXG5pbXBvcnQgcGFsZXR0ZURhcmsgZnJvbSAnLi9wYWxldHRlLWRhcmsnXG5pbXBvcnQgc2hhZG93cyBmcm9tICcuL3NoYWRvd3MnXG5cbi8vIGRlZmF1bHRcbmNvbnN0IGNyZWF0ZVRoZW1lID0gKGRhcmtNb2RlPzogYm9vbGVhbik6IFRoZW1lID0+IHtcbiAgY29uc3QgcGFsZXR0ZSA9IGRhcmtNb2RlID8geyAuLi5wYWxldHRlQmFzZSwgLi4ucGFsZXR0ZURhcmsgfSA6IHsgLi4ucGFsZXR0ZUJhc2UsIC4uLnBhbGV0dGVMaWdodCB9XG4gIHJldHVybiBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZSxcbiAgICB0eXBvZ3JhcGh5LFxuICAgIHNoYWRvd3MsXG4gIH0pXG59XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoZmFsc2UpXG5cbmV4cG9ydCB7IHBhbGV0dGVCYXNlLCBwYWxldHRlTGlnaHQsIHBhbGV0dGVEYXJrLCB0eXBvZ3JhcGh5LCBzaGFkb3dzIH1cbmV4cG9ydCBkZWZhdWx0IHRoZW1lXG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJwYWxldHRlQmFzZSIsInBhbGV0dGVMaWdodCIsInBhbGV0dGVEYXJrIiwic2hhZG93cyIsImRhcmtNb2RlIiwicGFsZXR0ZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/theme/index.ts\n");

/***/ }),

/***/ "./src/config/theme/palette-base.ts":
/*!******************************************!*\
  !*** ./src/config/theme/palette-base.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst paletteBase = {\n    primary: {\n        light: \"#9FF1D2\",\n        main: \"#127C71\",\n        dark: \"#0D6A69\",\n        contrastText: \"#fbfbfb\"\n    },\n    secondary: {\n        light: \"#FDE6A8\",\n        main: \"#ffaf35\",\n        dark: \"#D0821C\",\n        contrastText: \"#fbfbfb\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paletteBase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3RoZW1lL3BhbGV0dGUtYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTUEsV0FBVyxHQUE0QjtJQUMzQ0MsT0FBTyxFQUFFO1FBQ1BDLEtBQUssRUFBRSxTQUFTO1FBQ2hCQyxJQUFJLEVBQUUsU0FBUztRQUNmQyxJQUFJLEVBQUUsU0FBUztRQUNmQyxZQUFZLEVBQUUsU0FBUztLQUN4QjtJQUNEQyxTQUFTLEVBQUU7UUFDVEosS0FBSyxFQUFFLFNBQVM7UUFDaEJDLElBQUksRUFBRSxTQUFTO1FBQ2ZDLElBQUksRUFBRSxTQUFTO1FBQ2ZDLFlBQVksRUFBRSxTQUFTO0tBQ3hCO0NBQ0Y7QUFFRCxpRUFBZUwsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZXNwYWNlLWxhbmRpbmctcGFnZS8uL3NyYy9jb25maWcvdGhlbWUvcGFsZXR0ZS1iYXNlLnRzPzA4MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFsZXR0ZU9wdGlvbnMgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuXG5jb25zdCBwYWxldHRlQmFzZTogUGFydGlhbDxQYWxldHRlT3B0aW9ucz4gPSB7XG4gIHByaW1hcnk6IHtcbiAgICBsaWdodDogJyM5RkYxRDInLFxuICAgIG1haW46ICcjMTI3QzcxJyxcbiAgICBkYXJrOiAnIzBENkE2OScsXG4gICAgY29udHJhc3RUZXh0OiAnI2ZiZmJmYicsXG4gIH0sXG4gIHNlY29uZGFyeToge1xuICAgIGxpZ2h0OiAnI0ZERTZBOCcsXG4gICAgbWFpbjogJyNmZmFmMzUnLFxuICAgIGRhcms6ICcjRDA4MjFDJyxcbiAgICBjb250cmFzdFRleHQ6ICcjZmJmYmZiJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFsZXR0ZUJhc2VcbiJdLCJuYW1lcyI6WyJwYWxldHRlQmFzZSIsInByaW1hcnkiLCJsaWdodCIsIm1haW4iLCJkYXJrIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/theme/palette-base.ts\n");

/***/ }),

/***/ "./src/config/theme/palette-dark.ts":
/*!******************************************!*\
  !*** ./src/config/theme/palette-dark.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_0__);\n\nconst paletteDark = {\n    mode: \"dark\",\n    background: {\n        default: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.grey[900],\n        paper: \"#222128\"\n    },\n    text: {\n        primary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.grey[100],\n        secondary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.grey[200],\n        disabled: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.grey[300]\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paletteDark);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3RoZW1lL3BhbGV0dGUtZGFyay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDMkM7QUFFM0MsTUFBTUMsV0FBVyxHQUFtQjtJQUNsQ0MsSUFBSSxFQUFFLE1BQU07SUFDWkMsVUFBVSxFQUFFO1FBQ1ZDLE9BQU8sRUFBRUosMkRBQVM7UUFDbEJLLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0RDLElBQUksRUFBRTtRQUNKQyxPQUFPLEVBQUVQLDJEQUFTO1FBQ2xCUSxTQUFTLEVBQUVSLDJEQUFTO1FBQ3BCUyxRQUFRLEVBQUVULDJEQUFTO0tBQ3BCO0NBQ0Y7QUFFRCxpRUFBZUMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZXNwYWNlLWxhbmRpbmctcGFnZS8uL3NyYy9jb25maWcvdGhlbWUvcGFsZXR0ZS1kYXJrLnRzPzQxNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFsZXR0ZU9wdGlvbnMgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IHsgZ3JleSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvY29sb3JzJ1xuXG5jb25zdCBwYWxldHRlRGFyazogUGFsZXR0ZU9wdGlvbnMgPSB7XG4gIG1vZGU6ICdkYXJrJyxcbiAgYmFja2dyb3VuZDoge1xuICAgIGRlZmF1bHQ6IGdyZXlbOTAwXSxcbiAgICBwYXBlcjogJyMyMjIxMjgnLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgcHJpbWFyeTogZ3JleVsxMDBdLFxuICAgIHNlY29uZGFyeTogZ3JleVsyMDBdLFxuICAgIGRpc2FibGVkOiBncmV5WzMwMF0sXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhbGV0dGVEYXJrXG4iXSwibmFtZXMiOlsiZ3JleSIsInBhbGV0dGVEYXJrIiwibW9kZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJ0ZXh0IiwicHJpbWFyeSIsInNlY29uZGFyeSIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/theme/palette-dark.ts\n");

/***/ }),

/***/ "./src/config/theme/palette-light.ts":
/*!*******************************************!*\
  !*** ./src/config/theme/palette-light.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_0__);\n\nconst palette = {\n    mode: \"light\",\n    background: {\n        default: \"#f2f5f5\",\n        paper: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.common.white\n    },\n    text: {\n        primary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.grey[900],\n        secondary: \"#717171\",\n        disabled: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.grey[500]\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (palette);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3RoZW1lL3BhbGV0dGUtbGlnaHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ21EO0FBRW5ELE1BQU1FLE9BQU8sR0FBbUI7SUFDOUJDLElBQUksRUFBRSxPQUFPO0lBQ2JDLFVBQVUsRUFBRTtRQUNWQyxPQUFPLEVBQUUsU0FBUztRQUNsQkMsS0FBSyxFQUFFTCw4REFBWTtLQUNwQjtJQUNETyxJQUFJLEVBQUU7UUFDSkMsT0FBTyxFQUFFVCwyREFBUztRQUNsQlUsU0FBUyxFQUFFLFNBQVM7UUFDcEJDLFFBQVEsRUFBRVgsMkRBQVM7S0FDcEI7Q0FDRjtBQUVELGlFQUFlRSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlc3BhY2UtbGFuZGluZy1wYWdlLy4vc3JjL2NvbmZpZy90aGVtZS9wYWxldHRlLWxpZ2h0LnRzPzkzODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFsZXR0ZU9wdGlvbnMgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IHsgZ3JleSwgY29tbW9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnXG5cbmNvbnN0IHBhbGV0dGU6IFBhbGV0dGVPcHRpb25zID0ge1xuICBtb2RlOiAnbGlnaHQnLFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgZGVmYXVsdDogJyNmMmY1ZjUnLCAvLycjZmRmZGZkJyxcbiAgICBwYXBlcjogY29tbW9uLndoaXRlLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgcHJpbWFyeTogZ3JleVs5MDBdLFxuICAgIHNlY29uZGFyeTogJyM3MTcxNzEnLCAvLyBncmV5WzcwMF0sXG4gICAgZGlzYWJsZWQ6IGdyZXlbNTAwXSxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFsZXR0ZVxuIl0sIm5hbWVzIjpbImdyZXkiLCJjb21tb24iLCJwYWxldHRlIiwibW9kZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJ3aGl0ZSIsInRleHQiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/theme/palette-light.ts\n");

/***/ }),

/***/ "./src/config/theme/shadows.ts":
/*!*************************************!*\
  !*** ./src/config/theme/shadows.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst shadows = [\n    \"none\",\n    \"0 10px 10px 0 rgb(0 0 0 / 3%)\",\n    \"0 15px 15px 0 rgb(0 0 0 / 5%)\",\n    \"0 22px 22px 0 rgb(0 0 0 /6%)\",\n    \"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)\",\n    \"0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)\",\n    \"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)\",\n    \"0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)\",\n    \"0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)\",\n    \"0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)\",\n    \"0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)\",\n    \"0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)\",\n    \"0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)\",\n    \"0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)\",\n    \"0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)\",\n    \"0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)\",\n    \"0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)\",\n    \"0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)\",\n    \"0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)\",\n    \"0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)\",\n    \"0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)\",\n    \"0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)\",\n    \"0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)\",\n    \"0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)\",\n    \"0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)\", \n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadows);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3RoZW1lL3NoYWRvd3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU1BLE9BQU8sR0FBWTtJQUN2QixNQUFNO0lBQ04sK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIscUdBQXFHO0lBQ3JHLHFHQUFxRztJQUNyRyxzR0FBc0c7SUFDdEcsc0dBQXNHO0lBQ3RHLHNHQUFzRztJQUN0RyxzR0FBc0c7SUFDdEcsdUdBQXVHO0lBQ3ZHLHVHQUF1RztJQUN2Ryx1R0FBdUc7SUFDdkcsdUdBQXVHO0lBQ3ZHLHVHQUF1RztJQUN2Ryx1R0FBdUc7SUFDdkcsd0dBQXdHO0lBQ3hHLHdHQUF3RztJQUN4Ryx3R0FBd0c7SUFDeEcsd0dBQXdHO0lBQ3hHLHlHQUF5RztJQUN6Ryx5R0FBeUc7SUFDekcseUdBQXlHO0lBQ3pHLHlHQUF5RztJQUN6Ryx5R0FBeUc7Q0FDMUc7QUFFRCxpRUFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZXNwYWNlLWxhbmRpbmctcGFnZS8uL3NyYy9jb25maWcvdGhlbWUvc2hhZG93cy50cz83NTRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRvd3MgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcy9zaGFkb3dzJ1xuXG5jb25zdCBzaGFkb3dzOiBTaGFkb3dzID0gW1xuICAnbm9uZScsXG4gICcwIDEwcHggMTBweCAwIHJnYigwIDAgMCAvIDMlKScsXG4gICcwIDE1cHggMTVweCAwIHJnYigwIDAgMCAvIDUlKScsXG4gICcwIDIycHggMjJweCAwIHJnYigwIDAgMCAvNiUpJyxcbiAgJzBweCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC4yKSwwcHggNXB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwwcHggMXB4IDE0cHggMHB4IHJnYmEoMCwwLDAsMC4xMiknLFxuICAnMHB4IDNweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggNHB4IDVweCAtMnB4IHJnYmEoMCwwLDAsMC4yKSwwcHggN3B4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC4xNCksMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsMCwwLDAuMTIpJyxcbiAgJzBweCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsMC4xMiknLFxuICAnMHB4IDVweCA2cHggLTNweCByZ2JhKDAsMCwwLDAuMiksMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsMCwwLDAuMTQpLDBweCAzcHggMTZweCAycHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggNnB4IDZweCAtM3B4IHJnYmEoMCwwLDAsMC4yKSwwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsMCwwLDAuMTQpLDBweCA0cHggMThweCAzcHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggNnB4IDdweCAtNHB4IHJnYmEoMCwwLDAsMC4yKSwwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsMCwwLDAuMTQpLDBweCA0cHggMjBweCAzcHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsMCwwLDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsMC4yKSwwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsMCwwLDAuMTQpLDBweCA1cHggMjRweCA0cHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggN3B4IDlweCAtNHB4IHJnYmEoMCwwLDAsMC4yKSwwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsMCwwLDAuMTQpLDBweCA1cHggMjZweCA0cHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggOHB4IDlweCAtNXB4IHJnYmEoMCwwLDAsMC4yKSwwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsMCwwLDAuMTQpLDBweCA2cHggMjhweCA1cHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsMC4xMiknLFxuICAnMHB4IDhweCAxMXB4IC01cHggcmdiYSgwLDAsMCwwLjIpLDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwwLDAsMC4xNCksMHB4IDZweCAzMnB4IDVweCByZ2JhKDAsMCwwLDAuMTIpJyxcbiAgJzBweCA5cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsMC4yKSwwcHggMThweCAyOHB4IDJweCByZ2JhKDAsMCwwLDAuMTQpLDBweCA3cHggMzRweCA2cHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggOXB4IDEycHggLTZweCByZ2JhKDAsMCwwLDAuMiksMHB4IDE5cHggMjlweCAycHggcmdiYSgwLDAsMCwwLjE0KSwwcHggN3B4IDM2cHggNnB4IHJnYmEoMCwwLDAsMC4xMiknLFxuICAnMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsMC4yKSwwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsMCwwLDAuMTQpLDBweCA4cHggMzhweCA3cHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggMTBweCAxM3B4IC02cHggcmdiYSgwLDAsMCwwLjIpLDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwwLDAsMC4xNCksMHB4IDhweCA0MHB4IDdweCByZ2JhKDAsMCwwLDAuMTIpJyxcbiAgJzBweCAxMHB4IDE0cHggLTZweCByZ2JhKDAsMCwwLDAuMiksMHB4IDIycHggMzVweCAzcHggcmdiYSgwLDAsMCwwLjE0KSwwcHggOHB4IDQycHggN3B4IHJnYmEoMCwwLDAsMC4xMiknLFxuICAnMHB4IDExcHggMTRweCAtN3B4IHJnYmEoMCwwLDAsMC4yKSwwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsMCwwLDAuMTQpLDBweCA5cHggNDRweCA4cHggcmdiYSgwLDAsMCwwLjEyKScsXG4gICcwcHggMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLDAuMTIpJyxcbl1cblxuZXhwb3J0IGRlZmF1bHQgc2hhZG93c1xuIl0sIm5hbWVzIjpbInNoYWRvd3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/theme/shadows.ts\n");

/***/ }),

/***/ "./src/config/theme/typography.ts":
/*!****************************************!*\
  !*** ./src/config/theme/typography.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"fontFamily\": () => (/* binding */ fontFamily)\n/* harmony export */ });\nconst fontFamily = [\n    '\"Cabin\",-apple-system, BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"', \n].join(\",\");\nconst headingLineHeight = 1.4;\nconst typography = {\n    fontFamily,\n    fontWeightLight: 400,\n    fontWeightRegular: 400,\n    fontWeightMedium: 600,\n    fontWeightBold: 700,\n    h1: {\n        fontSize: 34,\n        lineHeight: headingLineHeight,\n        fontWeight: 700\n    },\n    h2: {\n        fontSize: 28,\n        lineHeight: headingLineHeight,\n        fontWeight: 700\n    },\n    h3: {\n        fontSize: 24,\n        lineHeight: headingLineHeight,\n        fontWeight: 700\n    },\n    h4: {\n        fontSize: 22,\n        lineHeight: headingLineHeight,\n        fontWeight: 700\n    },\n    h5: {\n        fontSize: 17,\n        lineHeight: headingLineHeight,\n        fontWeight: 600\n    },\n    h6: {\n        fontSize: 15,\n        lineHeight: headingLineHeight,\n        fontWeight: 600\n    },\n    body1: {\n        fontSize: \"1rem\"\n    },\n    body2: {\n        fontSize: \"0.9rem\"\n    },\n    subtitle1: {\n        fontSize: \"0.85rem\"\n    },\n    subtitle2: {\n        fontSize: \"0.8rem\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typography);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3RoZW1lL3R5cG9ncmFwaHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFTyxNQUFNQSxVQUFVLEdBQUc7SUFDeEIsc0pBQXNKO0NBQ3ZKLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFFWCxNQUFNQyxpQkFBaUIsR0FBRyxHQUFHO0FBRTdCLE1BQU1DLFVBQVUsR0FBc0I7SUFDcENILFVBQVU7SUFDVkksZUFBZSxFQUFFLEdBQUc7SUFDcEJDLGlCQUFpQixFQUFFLEdBQUc7SUFDdEJDLGdCQUFnQixFQUFFLEdBQUc7SUFDckJDLGNBQWMsRUFBRSxHQUFHO0lBQ25CQyxFQUFFLEVBQUU7UUFDRkMsUUFBUSxFQUFFLEVBQUU7UUFDWkMsVUFBVSxFQUFFUixpQkFBaUI7UUFDN0JTLFVBQVUsRUFBRSxHQUFHO0tBQ2hCO0lBQ0RDLEVBQUUsRUFBRTtRQUNGSCxRQUFRLEVBQUUsRUFBRTtRQUNaQyxVQUFVLEVBQUVSLGlCQUFpQjtRQUM3QlMsVUFBVSxFQUFFLEdBQUc7S0FDaEI7SUFDREUsRUFBRSxFQUFFO1FBQ0ZKLFFBQVEsRUFBRSxFQUFFO1FBQ1pDLFVBQVUsRUFBRVIsaUJBQWlCO1FBQzdCUyxVQUFVLEVBQUUsR0FBRztLQUNoQjtJQUNERyxFQUFFLEVBQUU7UUFDRkwsUUFBUSxFQUFFLEVBQUU7UUFDWkMsVUFBVSxFQUFFUixpQkFBaUI7UUFDN0JTLFVBQVUsRUFBRSxHQUFHO0tBQ2hCO0lBQ0RJLEVBQUUsRUFBRTtRQUNGTixRQUFRLEVBQUUsRUFBRTtRQUNaQyxVQUFVLEVBQUVSLGlCQUFpQjtRQUM3QlMsVUFBVSxFQUFFLEdBQUc7S0FDaEI7SUFDREssRUFBRSxFQUFFO1FBQ0ZQLFFBQVEsRUFBRSxFQUFFO1FBQ1pDLFVBQVUsRUFBRVIsaUJBQWlCO1FBQzdCUyxVQUFVLEVBQUUsR0FBRztLQUNoQjtJQUNETSxLQUFLLEVBQUU7UUFDTFIsUUFBUSxFQUFFLE1BQU07S0FDakI7SUFDRFMsS0FBSyxFQUFFO1FBQ0xULFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0RVLFNBQVMsRUFBRTtRQUNUVixRQUFRLEVBQUUsU0FBUztLQUNwQjtJQUNEVyxTQUFTLEVBQUU7UUFDVFgsUUFBUSxFQUFFLFFBQVE7S0FDbkI7Q0FDRjtBQUVELGlFQUFlTixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlc3BhY2UtbGFuZGluZy1wYWdlLy4vc3JjL2NvbmZpZy90aGVtZS90eXBvZ3JhcGh5LnRzPzljMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeU9wdGlvbnMgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcy9jcmVhdGVUeXBvZ3JhcGh5J1xuXG5leHBvcnQgY29uc3QgZm9udEZhbWlseSA9IFtcbiAgJ1wiQ2FiaW5cIiwtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCInLFxuXS5qb2luKCcsJylcblxuY29uc3QgaGVhZGluZ0xpbmVIZWlnaHQgPSAxLjRcblxuY29uc3QgdHlwb2dyYXBoeTogVHlwb2dyYXBoeU9wdGlvbnMgPSB7XG4gIGZvbnRGYW1pbHksXG4gIGZvbnRXZWlnaHRMaWdodDogNDAwLFxuICBmb250V2VpZ2h0UmVndWxhcjogNDAwLFxuICBmb250V2VpZ2h0TWVkaXVtOiA2MDAsXG4gIGZvbnRXZWlnaHRCb2xkOiA3MDAsXG4gIGgxOiB7XG4gICAgZm9udFNpemU6IDM0LFxuICAgIGxpbmVIZWlnaHQ6IGhlYWRpbmdMaW5lSGVpZ2h0LFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgaDI6IHtcbiAgICBmb250U2l6ZTogMjgsXG4gICAgbGluZUhlaWdodDogaGVhZGluZ0xpbmVIZWlnaHQsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICB9LFxuICBoMzoge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBsaW5lSGVpZ2h0OiBoZWFkaW5nTGluZUhlaWdodCxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gIH0sXG4gIGg0OiB7XG4gICAgZm9udFNpemU6IDIyLFxuICAgIGxpbmVIZWlnaHQ6IGhlYWRpbmdMaW5lSGVpZ2h0LFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgaDU6IHtcbiAgICBmb250U2l6ZTogMTcsXG4gICAgbGluZUhlaWdodDogaGVhZGluZ0xpbmVIZWlnaHQsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICB9LFxuICBoNjoge1xuICAgIGZvbnRTaXplOiAxNSxcbiAgICBsaW5lSGVpZ2h0OiBoZWFkaW5nTGluZUhlaWdodCxcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gIH0sXG4gIGJvZHkxOiB7XG4gICAgZm9udFNpemU6ICcxcmVtJyxcbiAgfSxcbiAgYm9keTI6IHtcbiAgICBmb250U2l6ZTogJzAuOXJlbScsXG4gIH0sXG4gIHN1YnRpdGxlMToge1xuICAgIGZvbnRTaXplOiAnMC44NXJlbScsXG4gIH0sXG4gIHN1YnRpdGxlMjoge1xuICAgIGZvbnRTaXplOiAnMC44cmVtJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHlwb2dyYXBoeVxuIl0sIm5hbWVzIjpbImZvbnRGYW1pbHkiLCJqb2luIiwiaGVhZGluZ0xpbmVIZWlnaHQiLCJ0eXBvZ3JhcGh5IiwiZm9udFdlaWdodExpZ2h0IiwiZm9udFdlaWdodFJlZ3VsYXIiLCJmb250V2VpZ2h0TWVkaXVtIiwiZm9udFdlaWdodEJvbGQiLCJoMSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiYm9keTEiLCJib2R5MiIsInN1YnRpdGxlMSIsInN1YnRpdGxlMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/theme/typography.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/providers */ \"./src/providers/index.ts\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_react_slick_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/react-slick.css */ \"./src/styles/react-slick.css\");\n/* harmony import */ var _styles_react_slick_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_react_slick_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_services_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/services.css */ \"./src/styles/services.css\");\n/* harmony import */ var _styles_services_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_services_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_bookConsult_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/bookConsult.css */ \"./src/styles/bookConsult.css\");\n/* harmony import */ var _styles_bookConsult_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_bookConsult_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_plans_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/styles/plans.css */ \"./src/styles/plans.css\");\n/* harmony import */ var _styles_plans_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_plans_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_contact_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/styles/contact.css */ \"./src/styles/contact.css\");\n/* harmony import */ var _styles_contact_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_contact_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _styles_newHero_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/styles/newHero.css */ \"./src/styles/newHero.css\");\n/* harmony import */ var _styles_newHero_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_newHero_css__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import 'slick-carousel/slick/slick-theme.css'\n// Client-side cache, shared for the whole session of the user in the browser.\nconst clientSideEmotionCache = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.createEmotionCache)();\nconst App = (props)=>{\n    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;\n    // Use the layout defined at the page level, if available\n    const getLayout = Component.getLayout || ((page)=>page\n    );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {\n        value: emotionCache,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cyntax/Documents/coursespace-landing-page/src/pages/_app.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"React Coursespace\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cyntax/Documents/coursespace-landing-page/src/pages/_app.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cyntax/Documents/coursespace-landing-page/src/pages/_app.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers__WEBPACK_IMPORTED_MODULE_6__.MUIProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CssBaseline, {}, void 0, false, {\n                        fileName: \"/Users/cyntax/Documents/coursespace-landing-page/src/pages/_app.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/cyntax/Documents/coursespace-landing-page/src/pages/_app.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 20\n                    }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cyntax/Documents/coursespace-landing-page/src/pages/_app.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cyntax/Documents/coursespace-landing-page/src/pages/_app.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNMO0FBRWU7QUFFRztBQUNGO0FBQ0g7QUFDRjtBQUNWO0FBQ0k7QUFDSDtBQUNHO0FBQ047QUFDRTtBQUNBO0FBRTdCLGdEQUFnRDtBQUVoRCw4RUFBOEU7QUFDOUUsTUFBTU0sc0JBQXNCLEdBQUdGLDBEQUFrQixFQUFFO0FBT25ELE1BQU1HLEdBQUcsR0FBMkIsQ0FBQ0MsS0FBeUIsR0FBSztJQUNqRSxNQUFNLEVBQUVDLFNBQVMsR0FBRUMsWUFBWSxFQUFHSixzQkFBc0IsR0FBRUssU0FBUyxHQUFFLEdBQUdILEtBQUs7SUFFN0UseURBQXlEO0lBQ3pELE1BQU1JLFNBQVMsR0FBR0gsU0FBUyxDQUFDRyxTQUFTLElBQUksQ0FBQyxDQUFDQyxJQUFJLEdBQUtBLElBQUk7SUFBQSxDQUFDO0lBRXpELHFCQUNFLDhEQUFDVix5REFBYTtRQUFDVyxLQUFLLEVBQUVKLFlBQVk7OzBCQUNoQyw4REFBQ1Qsa0RBQUk7O2tDQUNILDhEQUFDYyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLHFDQUFxQzs7Ozs7aUNBQUc7a0NBQ3RFLDhEQUFDQyxPQUFLO2tDQUFDLG1CQUFpQjs7Ozs7aUNBQVE7Ozs7Ozt5QkFDM0I7MEJBQ1AsOERBQUNiLG1EQUFXOztrQ0FFViw4REFBQ0gsc0RBQVc7Ozs7aUNBQUc7b0JBQ2RVLFNBQVMsZUFBQyw4REFBQ0gsU0FBUzt3QkFBRSxHQUFHRSxTQUFTOzs7OztpQ0FBSSxDQUFDOzs7Ozs7eUJBQzVCOzs7Ozs7aUJBQ0EsQ0FDakI7Q0FDRjtBQUVELGlFQUFlSixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlc3BhY2UtbGFuZGluZy1wYWdlLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBDc3NCYXNlbGluZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgeyBFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9jYWNoZSdcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcbmltcG9ydCB7IGNyZWF0ZUVtb3Rpb25DYWNoZSB9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgeyBNVUlQcm92aWRlciB9IGZyb20gJ0AvcHJvdmlkZXJzJ1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICdAL3N0eWxlcy9yZWFjdC1zbGljay5jc3MnXG5pbXBvcnQgJ0Avc3R5bGVzL3NlcnZpY2VzLmNzcydcbmltcG9ydCAnQC9zdHlsZXMvYm9va0NvbnN1bHQuY3NzJ1xuaW1wb3J0ICdAL3N0eWxlcy9wbGFucy5jc3MnXG5pbXBvcnQgJ0Avc3R5bGVzL2NvbnRhY3QuY3NzJ1xuaW1wb3J0ICdAL3N0eWxlcy9uZXdIZXJvLmNzcydcbmltcG9ydCB7IE5leHRQYWdlV2l0aExheW91dCB9IGZyb20gJ0AvaW50ZXJmYWNlcy9sYXlvdXQnXG4vLyBpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcydcblxuLy8gQ2xpZW50LXNpZGUgY2FjaGUsIHNoYXJlZCBmb3IgdGhlIHdob2xlIHNlc3Npb24gb2YgdGhlIHVzZXIgaW4gdGhlIGJyb3dzZXIuXG5jb25zdCBjbGllbnRTaWRlRW1vdGlvbkNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKClcblxudHlwZSBBcHBQcm9wc1dpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcbiAgZW1vdGlvbkNhY2hlOiBFbW90aW9uQ2FjaGVcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXRcbn1cblxuY29uc3QgQXBwOiBGQzxBcHBQcm9wc1dpdGhMYXlvdXQ+ID0gKHByb3BzOiBBcHBQcm9wc1dpdGhMYXlvdXQpID0+IHtcbiAgY29uc3QgeyBDb21wb25lbnQsIGVtb3Rpb25DYWNoZSA9IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUsIHBhZ2VQcm9wcyB9ID0gcHJvcHNcblxuICAvLyBVc2UgdGhlIGxheW91dCBkZWZpbmVkIGF0IHRoZSBwYWdlIGxldmVsLCBpZiBhdmFpbGFibGVcbiAgY29uc3QgZ2V0TGF5b3V0ID0gQ29tcG9uZW50LmdldExheW91dCB8fCAoKHBhZ2UpID0+IHBhZ2UpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8dGl0bGU+UmVhY3QgQ291cnNlc3BhY2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1VSVByb3ZpZGVyPlxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICB7Z2V0TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4pfVxuICAgICAgPC9NVUlQcm92aWRlcj5cbiAgICA8L0NhY2hlUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiQ3NzQmFzZWxpbmUiLCJDYWNoZVByb3ZpZGVyIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwiTVVJUHJvdmlkZXIiLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwiQXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJlbW90aW9uQ2FjaGUiLCJwYWdlUHJvcHMiLCJnZXRMYXlvdXQiLCJwYWdlIiwidmFsdWUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/providers/index.ts":
/*!********************************!*\
  !*** ./src/providers/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MUIProvider\": () => (/* reexport safe */ _mui_provider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mui-provider */ \"./src/providers/mui-provider.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvdmlkZXJzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlc3BhY2UtbGFuZGluZy1wYWdlLy4vc3JjL3Byb3ZpZGVycy9pbmRleC50cz8xOWVhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgTVVJUHJvdmlkZXIgfSBmcm9tICcuL211aS1wcm92aWRlcidcbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiTVVJUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/providers/index.ts\n");

/***/ }),

/***/ "./src/providers/mui-provider.tsx":
/*!****************************************!*\
  !*** ./src/providers/mui-provider.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/theme */ \"./src/config/theme/index.ts\");\n\n\n\n\nconst MUIProvider = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        theme: _config_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/cyntax/Documents/coursespace-landing-page/src/providers/mui-provider.tsx\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MUIProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvdmlkZXJzL211aS1wcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNDO0FBRVg7QUFNbEMsTUFBTUcsV0FBVyxHQUFjLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDL0MscUJBQU8sOERBQUNILHdEQUFhO1FBQUNDLEtBQUssRUFBRUEscURBQUs7a0JBQUdFLFFBQVE7Ozs7O2lCQUFpQjtDQUMvRDtBQUVELGlFQUFlRCxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlc3BhY2UtbGFuZGluZy1wYWdlLy4vc3JjL3Byb3ZpZGVycy9tdWktcHJvdmlkZXIudHN4PzQxY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnQC9jb25maWcvdGhlbWUnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuY29uc3QgTVVJUHJvdmlkZXI6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+e2NoaWxkcmVufTwvVGhlbWVQcm92aWRlcj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTVVJUHJvdmlkZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsIk1VSVByb3ZpZGVyIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/providers/mui-provider.tsx\n");

/***/ }),

/***/ "./src/utils/emotion-cache.ts":
/*!************************************!*\
  !*** ./src/utils/emotion-cache.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEmotionCache\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\n// prepend: true moves MUI styles to the top of the <head> so they're loaded first.\n// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.\nfunction createEmotionCache() {\n    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n        key: \"css\",\n        prepend: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZW1vdGlvbi1jYWNoZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEQ7QUFFMUQsbUZBQW1GO0FBQ25GLHFHQUFxRztBQUM5RixTQUFTQyxrQkFBa0IsR0FBaUI7SUFDakQsT0FBT0QscURBQVcsQ0FBQztRQUFFRSxHQUFHLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUUsSUFBSTtLQUFFLENBQUM7Q0FDbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VzcGFjZS1sYW5kaW5nLXBhZ2UvLi9zcmMvdXRpbHMvZW1vdGlvbi1jYWNoZS50cz8wZDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDYWNoZSwgeyBFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9jYWNoZSdcblxuLy8gcHJlcGVuZDogdHJ1ZSBtb3ZlcyBNVUkgc3R5bGVzIHRvIHRoZSB0b3Agb2YgdGhlIDxoZWFkPiBzbyB0aGV5J3JlIGxvYWRlZCBmaXJzdC5cbi8vIEl0IGFsbG93cyBkZXZlbG9wZXJzIHRvIGVhc2lseSBvdmVycmlkZSBNVUkgc3R5bGVzIHdpdGggb3RoZXIgc3R5bGluZyBzb2x1dGlvbnMsIGxpa2UgQ1NTIG1vZHVsZXMuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCk6IEVtb3Rpb25DYWNoZSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSlcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDYWNoZSIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsImtleSIsInByZXBlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/emotion-cache.ts\n");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emotion-cache */ \"./src/utils/emotion-cache.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _emotion_cache__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _emotion_cache__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VzcGFjZS1sYW5kaW5nLXBhZ2UvLi9zcmMvdXRpbHMvaW5kZXgudHM/YWNhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2Vtb3Rpb24tY2FjaGUnXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/index.ts\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/bookConsult.css":
/*!************************************!*\
  !*** ./src/styles/bookConsult.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/contact.css":
/*!********************************!*\
  !*** ./src/styles/contact.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/newHero.css":
/*!********************************!*\
  !*** ./src/styles/newHero.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/plans.css":
/*!******************************!*\
  !*** ./src/styles/plans.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/react-slick.css":
/*!************************************!*\
  !*** ./src/styles/react-slick.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/services.css":
/*!*********************************!*\
  !*** ./src/styles/services.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();