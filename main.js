(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/ZgE":
/*!****************************************!*\
  !*** ./src/app/store/chunk.reducer.ts ***!
  \****************************************/
/*! exports provided: initialState, chunkReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunkReducer", function() { return chunkReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _chunk_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk.actions */ "Rji5");


const initialState = 0;
const _chunkReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_chunk_actions__WEBPACK_IMPORTED_MODULE_1__["INCREMENT_CHUNK"], (state) => state + 1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_chunk_actions__WEBPACK_IMPORTED_MODULE_1__["RESET_CHUNK"], (state) => 0));
function chunkReducer(state, action) {
    return _chunkReducer(state, action);
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SECA\Employment test task\user-table\src\main.ts */"zUnb");


/***/ }),

/***/ "9Hu7":
/*!**************************************************************!*\
  !*** ./src/app/column-selector/column-selector.component.ts ***!
  \**************************************************************/
/*! exports provided: ColumnSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnSelectorComponent", function() { return ColumnSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ColumnSelectorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ColumnSelectorComponent.ɵfac = function ColumnSelectorComponent_Factory(t) { return new (t || ColumnSelectorComponent)(); };
ColumnSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColumnSelectorComponent, selectors: [["app-column-selector"]], decls: 13, vars: 0, consts: [[1, "column-selector-wrapper"], [1, "column-selector-text"], [1, "column-selector"], [1, "options"], [1, "option"]], template: function ColumnSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Active status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Birth Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.column-selector-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #F7F6FA;\n  border-radius: 4px;\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n\n.column-selector[_ngcontent-%COMP%] {\n  background-color: #fff;\n  outline: none;\n  border: none;\n  padding: 10px 16px 10px 4px;\n  box-sizing: border-box;\n  width: 100%;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-image: url('dropdown-icon.png');\n  background-position: top 50% right 16px;\n  background-repeat: no-repeat;\n  font-weight: 300;\n  font-size: 16px;\n  position: relative;\n}\n\n.options[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 0;\n  border: 1px solid #F7F6FA;\n  background-color: #fff;\n  width: 100%;\n  box-shadow: 2px 4px 6px #CBCACF;\n  padding: 8px 0;\n}\n\n.option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 6px 16px;\n}\n\n.option[_ngcontent-%COMP%]:hover {\n  background-color: #F7F6FA;\n}\n\n.column-selector-text[_ngcontent-%COMP%] {\n  padding: 10px 4px 10px 16px;\n  font-weight: 300;\n  color: #CBCACF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7QUFERjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esa0JDd0JXO0VEdkJYLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVDWGU7RURZZixrQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQzNDUztBRCtDYjs7QUFGQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzNDRztBRGdEUCIsImZpbGUiOiJjb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Fzcy12YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb2x1bW4tc2VsZWN0b3Itd3JhcHBlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJHNtYWxsLXJhZGl1cztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jb2x1bW4tc2VsZWN0b3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweCAxMHB4IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFwcGVhcmFuY2U6bm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZHJvcGRvd24taWNvbi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIDUwJSByaWdodCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6ICRtZWRpdW0tZm9udC1zaXplO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5vcHRpb25ze1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA2cHggJGdyZXk7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxufVxyXG4ub3B0aW9ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbn1cclxuLm9wdGlvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xyXG59XHJcbi5jb2x1bW4tc2VsZWN0b3ItdGV4dHtcclxuICAgIHBhZGRpbmc6IDEwcHggNHB4IDEwcHggMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogJGdyZXk7XHJcbn0iLCIvL0NvbG9yc1xyXG4kbGlnaHQtZ3JleTogI0Y3RjZGQTtcclxuJGxpZ2h0LWJsdWU6ICNENUU0Rjg7XHJcbiRsaWdodC1wdXJwbGU6ICNFM0RCRjc7XHJcbiRsaWdodC1ncmVlbjogI0M3RThFNTtcclxuXHJcbiRncmV5OiAjQ0JDQUNGO1xyXG4kYmx1ZTogIzdEQTBEMTtcclxuJHB1cnBsZTogIzhDNzdDRDtcclxuJGdyZWVuOiAjNThCM0E3O1xyXG4kcmVkOiAjRjY5NzlEO1xyXG5cclxuXHJcbi8vRm9udHNcclxuJHNtYWxsLWZvbnQtc2l6ZTogMTNweDtcclxuJG1lZGl1bS1mb250LXNpemU6IDE2cHg7XHJcblxyXG5cclxuLy9Gb250cy1tb2JpbGVcclxuJGgxLW1vYmlsZTogMjhweDtcclxuXHJcblxyXG4vL0ZvbnRzLXRhYmxldFxyXG4kaDEtdGFibGV0OiAzMnB4O1xyXG5cclxuXHJcbi8vRm9udHMtZGVza3RvcFxyXG4kaDEtZGVza3RvcDogMzZweDtcclxuXHJcbi8vUmFkaXVzXHJcbiRleHRyYS1zbWFsbC1yYWRpdXM6IDJweDtcclxuJHNtYWxsLXJhZGl1czogNHB4O1xyXG4kbWVkaXVtLXJhZGl1czogOHB4O1xyXG5cclxuIl19 */"] });


/***/ }),

/***/ "9Rdk":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _store_chunk_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/chunk.actions */ "Rji5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _search_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-service.service */ "Cv/E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TableComponent_div_0_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Super User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TableComponent_div_0_div_1_div_5_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TableComponent_div_0_div_1_ng_template_6_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TableComponent_div_0_div_1_div_9_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TableComponent_div_0_div_1_ng_template_10_Template, 3, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", user_r3.firstName, " ", user_r3.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r3.roles.length === 1)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r3.isActive)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r3.birthDate, " ");
} }
function TableComponent_div_0_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_div_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Super User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TableComponent_div_0_div_2_div_5_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TableComponent_div_0_div_2_ng_template_6_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Birth Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TableComponent_div_0_div_2_div_13_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TableComponent_div_0_div_2_ng_template_14_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r10 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", user_r10.firstName, " ", user_r10.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r10.isActive)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r10.birthDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r10.roles.length === 1)("ngIfElse", _r15);
} }
function TableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TableComponent_div_0_div_1_Template, 15, 7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_div_0_div_2_Template, 16, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
class TableComponent {
    constructor(http, store, searchService) {
        this.http = http;
        this.store = store;
        this.searchService = searchService;
        this.users = [];
        this.oldSearch = '';
        this.lazyLoad = () => {
            var target = document.getElementById('intersect-marker');
            const io = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.store.dispatch(Object(_store_chunk_actions__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_CHUNK"])());
                    }
                });
            });
            io.observe(target);
        };
        this.chunk$ = store.select('chunk');
        this.search$ = store.select('search');
    }
    ;
    ngOnInit() {
        this.chunk$.subscribe(res => {
            this.getUsers(res);
        });
        this.search$.subscribe(res => {
            this.searchUsers(res);
        });
        this.lazyLoad();
    }
    getUsers(res) {
        this.http.get('Seca-User-Table/', { params: { chunk: res.toString(), search: this.oldSearch } })
            .subscribe(response => {
            this.users = [...this.users, ...response];
        });
    }
    searchUsers(res) {
        let ser = res.search;
        this.http.get('Seca-User-Table/search', { params: { search: ser.toString() } })
            .subscribe(response => {
            this.users = [...response];
        });
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_search_service_service__WEBPACK_IMPORTED_MODULE_4__["SearchServiceService"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], decls: 2, vars: 1, consts: [[4, "ngIf"], ["id", "intersect-marker"], ["class", "row responsive-table-desktop table-row underline", 4, "ngFor", "ngForOf"], ["class", "row responsive-table-mobile table-row underline space-between", 4, "ngFor", "ngForOf"], [1, "row", "responsive-table-desktop", "table-row", "underline"], [1, "col"], [1, "table-user"], [4, "ngIf", "ngIfElse"], ["super", ""], ["offline", ""], [1, "table-birth-date"], [1, "tag", "tag-blue"], [1, "tag", "tag-purple"], [1, "tag", "tag-green"], [1, "tag", "tag-grey"], [1, "row", "responsive-table-mobile", "table-row", "underline", "space-between"], [1, "row", "space-between", "margin-bot-small"], [1, "row", "space-between"], [1, "table-birth-date-span"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TableComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users.length >= 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["#intersect-checker[_ngcontent-%COMP%] {\n  opacity: 0;\n  height: 24px;\n  width: 100%;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  padding: 12px 32px;\n  box-sizing: border-box;\n}\n\n.table-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #F7F6FA;\n}\n\n.tag[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 4px;\n  font-weight: 700;\n  font-size: 13px;\n  padding: 2px 12px;\n  margin-left: 0px;\n  display: inline;\n}\n\n.tag-green[_ngcontent-%COMP%] {\n  background-color: #C7E8E5;\n  color: #58B3A7;\n}\n\n.tag-blue[_ngcontent-%COMP%] {\n  background-color: #D5E4F8;\n  color: #7DA0D1;\n}\n\n.tag-purple[_ngcontent-%COMP%] {\n  background-color: #E3DBF7;\n  color: #8C77CD;\n}\n\n.tag-grey[_ngcontent-%COMP%] {\n  background-color: #F7F6FA;\n  color: #CBCACF;\n}\n\n.table-user[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n}\n\n.table-birth-date-span[_ngcontent-%COMP%] {\n  color: #CBCACF;\n}\n\n.responsive-table-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.responsive-table-desktop[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n@media (max-width: 768px) {\n  .tag[_ngcontent-%COMP%] {\n    margin-left: 6px;\n  }\n\n  .responsive-table-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .responsive-table-mobile[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYmxlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxzYXNzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUE7RUFDRSx5QkNYVztBRFliOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxrQkNlVztFRGRYLGdCQUFBO0VBQ0EsZUNKYztFREtkLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkNwQlU7RURxQlYsY0NoQkk7QURtQlI7O0FBREE7RUFDSSx5QkMxQlM7RUQyQlQsY0N0Qkc7QUQwQlA7O0FBRkE7RUFDSSx5QkM3Qlc7RUQ4QlgsY0N6Qks7QUQ4QlQ7O0FBSEE7RUFDRSx5QkNuQ1c7RURvQ1gsY0MvQks7QURxQ1A7O0FBSkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLGNDdENHO0FEOENQOztBQU5BO0VBQ0UsYUFBQTtBQVNGOztBQVBBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFVSjs7QUFQQTtFQUNJO0lBQ0ksZ0JBQUE7RUFVTjs7RUFSRTtJQUNJLGFBQUE7RUFXTjs7RUFURTtJQUNFLGFBQUE7RUFZSjtBQUNGIiwiZmlsZSI6InRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Fzcy12YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4jaW50ZXJzZWN0LWNoZWNrZXJ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRhYmxlLXJvd3tcclxuICAgIHBhZGRpbmc6IDEycHggMzJweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnRhYmxlLXJvdzpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbn1cclxuLnRhZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRzbWFsbC1yYWRpdXM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAkc21hbGwtZm9udC1zaXplO1xyXG4gICAgcGFkZGluZzogMnB4IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi50YWctZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JlZW47XHJcbiAgICBjb2xvcjogJGdyZWVuO1xyXG59XHJcbi50YWctYmx1ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ibHVlO1xyXG4gICAgY29sb3I6ICRibHVlO1xyXG59XHJcbi50YWctcHVycGxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXB1cnBsZTtcclxuICAgIGNvbG9yOiAkcHVycGxlO1xyXG59XHJcbi50YWctZ3JleSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgY29sb3I6ICRncmV5O1xyXG59XHJcbi50YWJsZS11c2Vye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi50YWJsZS1iaXJ0aC1kYXRlLXNwYW57XHJcbiAgICBjb2xvcjogJGdyZXlcclxufVxyXG4ucmVzcG9uc2l2ZS10YWJsZS1tb2JpbGV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ucmVzcG9uc2l2ZS10YWJsZS1kZXNrdG9wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudGFne1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICB9XHJcbiAgICAucmVzcG9uc2l2ZS10YWJsZS1kZXNrdG9we1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucmVzcG9uc2l2ZS10YWJsZS1tb2JpbGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vQ29sb3JzXHJcbiRsaWdodC1ncmV5OiAjRjdGNkZBO1xyXG4kbGlnaHQtYmx1ZTogI0Q1RTRGODtcclxuJGxpZ2h0LXB1cnBsZTogI0UzREJGNztcclxuJGxpZ2h0LWdyZWVuOiAjQzdFOEU1O1xyXG5cclxuJGdyZXk6ICNDQkNBQ0Y7XHJcbiRibHVlOiAjN0RBMEQxO1xyXG4kcHVycGxlOiAjOEM3N0NEO1xyXG4kZ3JlZW46ICM1OEIzQTc7XHJcbiRyZWQ6ICNGNjk3OUQ7XHJcblxyXG5cclxuLy9Gb250c1xyXG4kc21hbGwtZm9udC1zaXplOiAxM3B4O1xyXG4kbWVkaXVtLWZvbnQtc2l6ZTogMTZweDtcclxuXHJcblxyXG4vL0ZvbnRzLW1vYmlsZVxyXG4kaDEtbW9iaWxlOiAyOHB4O1xyXG5cclxuXHJcbi8vRm9udHMtdGFibGV0XHJcbiRoMS10YWJsZXQ6IDMycHg7XHJcblxyXG5cclxuLy9Gb250cy1kZXNrdG9wXHJcbiRoMS1kZXNrdG9wOiAzNnB4O1xyXG5cclxuLy9SYWRpdXNcclxuJGV4dHJhLXNtYWxsLXJhZGl1czogMnB4O1xyXG4kc21hbGwtcmFkaXVzOiA0cHg7XHJcbiRtZWRpdW0tcmFkaXVzOiA4cHg7XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cv/E":
/*!*******************************************!*\
  !*** ./src/app/search-service.service.ts ***!
  \*******************************************/
/*! exports provided: SearchServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchServiceService", function() { return SearchServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");



class SearchServiceService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this.search$ = store.select('search');
    }
    searchUsers(res) {
        this.http.get('/', { params: { search: res } })
            .subscribe(response => {
        });
    }
}
SearchServiceService.ɵfac = function SearchServiceService_Factory(t) { return new (t || SearchServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SearchServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchServiceService, factory: SearchServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "F4IY":
/*!*****************************************!*\
  !*** ./src/app/store/search.reducer.ts ***!
  \*****************************************/
/*! exports provided: initialState, searchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchReducer", function() { return searchReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _search_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.actions */ "yyV7");


const initialState = {
    search: ''
};
const _searchReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_search_actions__WEBPACK_IMPORTED_MODULE_1__["SEARCH"], (state, { search }) => ({ search })));
function searchReducer(state, action) {
    return _searchReducer(state, action);
}


/***/ }),

/***/ "MaWF":
/*!********************************************************!*\
  !*** ./src/app/order-switch/order-switch.component.ts ***!
  \********************************************************/
/*! exports provided: OrderSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSwitchComponent", function() { return OrderSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OrderSwitchComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrderSwitchComponent.ɵfac = function OrderSwitchComponent_Factory(t) { return new (t || OrderSwitchComponent)(); };
OrderSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderSwitchComponent, selectors: [["app-order-switch"]], decls: 3, vars: 0, template: function OrderSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ">");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1zd2l0Y2guY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "QNva":
/*!********************************************************!*\
  !*** ./src/app/table-header/table-header.component.ts ***!
  \********************************************************/
/*! exports provided: TableHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeaderComponent", function() { return TableHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TableHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableHeaderComponent.ɵfac = function TableHeaderComponent_Factory(t) { return new (t || TableHeaderComponent)(); };
TableHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableHeaderComponent, selectors: [["app-table-header"]], decls: 9, vars: 0, consts: [[1, "table-header", "row", "container"], [1, "col"]], template: function TableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Activity Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Birth Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".table-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 16px 32px;\n}\n\n@media (max-width: 768px) {\n  .table-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYmxlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0k7SUFDSSxhQUFBO0VBRE47QUFDRiIsImZpbGUiOiJ0YWJsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zYXNzLXZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi50YWJsZS1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTZweCAzMnB4OyBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfSAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "Rji5":
/*!****************************************!*\
  !*** ./src/app/store/chunk.actions.ts ***!
  \****************************************/
/*! exports provided: INCREMENT_CHUNK, RESET_CHUNK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_CHUNK", function() { return INCREMENT_CHUNK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CHUNK", function() { return RESET_CHUNK; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const INCREMENT_CHUNK = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Chunk] Increment');
const RESET_CHUNK = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Chunk] Resets');


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _table_header_table_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-header/table-header.component */ "QNva");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/table.component */ "9Rdk");




const _c0 = ["fixed"];
class AppComponent {
    constructor() {
        this.onResize = () => {
            let table = document.getElementById('table');
            table.style.marginTop = this.fixed.nativeElement.offsetHeight + 'px';
        };
    }
    ngOnInit() {
        window.addEventListener('resize', this.onResize);
    }
    ngAfterViewInit() {
        let table = document.getElementById('table');
        table.style.marginTop = this.fixed.nativeElement.offsetHeight + 24 + 'px';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fixed = _t.first);
    } }, decls: 8, vars: 0, consts: [[1, "container"], ["id", "fixed"], ["fixed", ""], ["id", "table"], ["table", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-table-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _table_header_table_header_component__WEBPACK_IMPORTED_MODULE_2__["TableHeaderComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader/loader.component */ "kQyY");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/table.component */ "9Rdk");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _layout_switch_layout_switch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout-switch/layout-switch.component */ "t5H7");
/* harmony import */ var _column_selector_column_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./column-selector/column-selector.component */ "9Hu7");
/* harmony import */ var _order_switch_order_switch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-switch/order-switch.component */ "MaWF");
/* harmony import */ var _table_header_table_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table-header/table-header.component */ "QNva");
/* harmony import */ var _store_chunk_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/chunk.reducer */ "/ZgE");
/* harmony import */ var _store_search_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/search.reducer */ "F4IY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({ chunk: _store_chunk_reducer__WEBPACK_IMPORTED_MODULE_12__["chunkReducer"], search: _store_search_reducer__WEBPACK_IMPORTED_MODULE_13__["searchReducer"] })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"],
        _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
        _layout_switch_layout_switch_component__WEBPACK_IMPORTED_MODULE_8__["LayoutSwitchComponent"],
        _column_selector_column_selector_component__WEBPACK_IMPORTED_MODULE_9__["ColumnSelectorComponent"],
        _order_switch_order_switch_component__WEBPACK_IMPORTED_MODULE_10__["OrderSwitchComponent"],
        _table_header_table_header_component__WEBPACK_IMPORTED_MODULE_11__["TableHeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search.component */ "tq2C");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 0, consts: [[1, "header", "col", "underline", "container"], [1, "underline", "row"], ["src", "../../assets/SECA-Logo-Rot-4c-RZ.png", "alt", "SECA company logo", 1, "logo"], [1, "row", "space-between", "align-center"], [1, "row", "margin-bot-medium"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User Database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]], styles: [".logo[_ngcontent-%COMP%] {\n  max-height: 24px;\n  padding: 32px 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 0 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xyXG4gICAgbWF4LWhlaWdodDogMjRweDtcclxuICAgIHBhZGRpbmc6IDMycHggMDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgcGFkZGluZzogMCAzMnB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "kQyY":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 0, template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loader works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "t5H7":
/*!**********************************************************!*\
  !*** ./src/app/layout-switch/layout-switch.component.ts ***!
  \**********************************************************/
/*! exports provided: LayoutSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSwitchComponent", function() { return LayoutSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LayoutSwitchComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutSwitchComponent.ɵfac = function LayoutSwitchComponent_Factory(t) { return new (t || LayoutSwitchComponent)(); };
LayoutSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutSwitchComponent, selectors: [["app-layout-switch"]], decls: 15, vars: 0, consts: [[1, "layout-switch"], [1, "layout-switch-button", "layout-switch-button-left", "layout-switch-button-selected"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "16", "viewBox", "0 0 18 16"], ["id", "Group_70", "data-name", "Group 70", "transform", "translate(-1785.75 2055)"], ["id", "Rectangle_95", "data-name", "Rectangle 95", "width", "18", "height", "7", "rx", "2", "transform", "translate(1785.75 -2055)", "fill", "#cbcacf"], ["id", "Rectangle_96", "data-name", "Rectangle 96", "width", "18", "height", "7", "rx", "2", "transform", "translate(1785.75 -2046)", "fill", "#cbcacf"], [1, "layout-switch-button", "layout-switch-button-right"], ["id", "Group_36", "data-name", "Group 36", "transform", "translate(-2.373 -0.479)"], ["id", "Rectangle_86", "data-name", "Rectangle 86", "width", "12", "height", "4", "rx", "2", "transform", "translate(2.373 0.479)", "fill", "#cbcacf"], ["id", "Rectangle_87", "data-name", "Rectangle 87", "width", "12", "height", "4", "rx", "2", "transform", "translate(2.373 12.479)", "fill", "#cbcacf"], ["id", "Rectangle_88", "data-name", "Rectangle 88", "width", "4", "height", "4", "rx", "2", "transform", "translate(16.373 0.479)", "fill", "#cbcacf"], ["id", "Rectangle_89", "data-name", "Rectangle 89", "width", "4", "height", "4", "rx", "2", "transform", "translate(16.373 12.479)", "fill", "#cbcacf"], ["id", "Rectangle_90", "data-name", "Rectangle 90", "width", "12", "height", "4", "rx", "2", "transform", "translate(2.373 6.479)", "fill", "#cbcacf"], ["id", "Rectangle_91", "data-name", "Rectangle 91", "width", "4", "height", "4", "rx", "2", "transform", "translate(16.373 6.479)", "fill", "#cbcacf"]], template: function LayoutSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rect", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "rect", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".layout-switch[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 4px;\n}\n\n.layout-switch-button[_ngcontent-%COMP%] {\n  display: inline;\n  outline: none;\n  border: none;\n  padding: 7px 9px;\n  margin: 0;\n  background-color: #fff;\n  z-index: 1;\n}\n\n.layout-switch-button-left[_ngcontent-%COMP%] {\n  border-radius: 4px 0 0 4px;\n  box-shadow: 2px 0px 4px #CBCACF;\n}\n\n.layout-switch-button-right[_ngcontent-%COMP%] {\n  border-radius: 0 4px 4px 0;\n  box-shadow: -2px 0px 4px #CBCACF;\n}\n\n.layout-switch-button-selected[_ngcontent-%COMP%] {\n  background-color: #F7F6FA;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxheW91dC1zd2l0Y2guY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHNhc3MtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFBSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0VBQ0EsZ0NBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQ3ZCUztFRHdCVCxnQkFBQTtBQUdKIiwiZmlsZSI6ImxheW91dC1zd2l0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zYXNzLXZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sYXlvdXQtc3dpdGNoIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ubGF5b3V0LXN3aXRjaC1idXR0b257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogN3B4IDlweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5sYXlvdXQtc3dpdGNoLWJ1dHRvbi1sZWZ0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMHB4IDRweCAkZ3JleTtcclxufVxyXG4ubGF5b3V0LXN3aXRjaC1idXR0b24tcmlnaHQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IDBweCA0cHggJGdyZXk7XHJcbn1cclxuLmxheW91dC1zd2l0Y2gtYnV0dG9uLXNlbGVjdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbiIsIi8vQ29sb3JzXHJcbiRsaWdodC1ncmV5OiAjRjdGNkZBO1xyXG4kbGlnaHQtYmx1ZTogI0Q1RTRGODtcclxuJGxpZ2h0LXB1cnBsZTogI0UzREJGNztcclxuJGxpZ2h0LWdyZWVuOiAjQzdFOEU1O1xyXG5cclxuJGdyZXk6ICNDQkNBQ0Y7XHJcbiRibHVlOiAjN0RBMEQxO1xyXG4kcHVycGxlOiAjOEM3N0NEO1xyXG4kZ3JlZW46ICM1OEIzQTc7XHJcbiRyZWQ6ICNGNjk3OUQ7XHJcblxyXG5cclxuLy9Gb250c1xyXG4kc21hbGwtZm9udC1zaXplOiAxM3B4O1xyXG4kbWVkaXVtLWZvbnQtc2l6ZTogMTZweDtcclxuXHJcblxyXG4vL0ZvbnRzLW1vYmlsZVxyXG4kaDEtbW9iaWxlOiAyOHB4O1xyXG5cclxuXHJcbi8vRm9udHMtdGFibGV0XHJcbiRoMS10YWJsZXQ6IDMycHg7XHJcblxyXG5cclxuLy9Gb250cy1kZXNrdG9wXHJcbiRoMS1kZXNrdG9wOiAzNnB4O1xyXG5cclxuLy9SYWRpdXNcclxuJGV4dHJhLXNtYWxsLXJhZGl1czogMnB4O1xyXG4kc21hbGwtcmFkaXVzOiA0cHg7XHJcbiRtZWRpdW0tcmFkaXVzOiA4cHg7XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _store_search_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/search.actions */ "yyV7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




class SearchComponent {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this.search$ = store.select('search');
    }
    searching($event) {
        this.store.dispatch(Object(_store_search_actions__WEBPACK_IMPORTED_MODULE_0__["SEARCH"])({ search: $event.target.value }));
    }
    ngOnInit() { }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 8, vars: 0, consts: [[1, "search-bar-wrapper"], [1, "search-bar-icon"], ["id", "Group_10", "data-name", "Group 10", "xmlns", "http://www.w3.org/2000/svg", "width", "18.207", "height", "18.207", "viewBox", "0 0 18.207 18.207"], ["id", "Ellipse_1", "data-name", "Ellipse 1", "fill", "none", "stroke", "#000", "stroke-width", "2"], ["cx", "8", "cy", "8", "r", "8", "stroke", "none"], ["cx", "8", "cy", "8", "r", "7", "fill", "none"], ["id", "Line_1", "data-name", "Line 1", "x1", "4", "y1", "4", "transform", "translate(13.5 13.5)", "fill", "none", "stroke", "#000", "stroke-width", "2"], ["type", "text", "placeholder", "Search by name", 1, "search-bar", 3, "keyup"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "line", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_7_listener($event) { return ctx.searching($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.search-bar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  background-color: #F7F6FA;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  padding: 14px 14px 14px 50px;\n  font-size: 16px;\n  width: 100%;\n  max-width: 400px;\n  box-sizing: border-box;\n}\n\n.search-bar-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 18px;\n  transform: translate(0, -38%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2Fzcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSx5QkNSUztFRFNULGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JDbUJXO0VEbEJYLDRCQUFBO0VBQ0EsZUNDZTtFREFmLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFDSiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Fzcy12YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuOmhvc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2VhcmNoLWJhci13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zZWFyY2gtYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJHNtYWxsLXJhZGl1cztcclxuICAgIHBhZGRpbmc6IDE0cHggMTRweCAxNHB4IDUwcHg7XHJcbiAgICBmb250LXNpemU6ICRtZWRpdW0tZm9udC1zaXplO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIFxyXG59XHJcbi5zZWFyY2gtYmFyLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDE4cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMzglKTtcclxufVxyXG4iLCIvL0NvbG9yc1xyXG4kbGlnaHQtZ3JleTogI0Y3RjZGQTtcclxuJGxpZ2h0LWJsdWU6ICNENUU0Rjg7XHJcbiRsaWdodC1wdXJwbGU6ICNFM0RCRjc7XHJcbiRsaWdodC1ncmVlbjogI0M3RThFNTtcclxuXHJcbiRncmV5OiAjQ0JDQUNGO1xyXG4kYmx1ZTogIzdEQTBEMTtcclxuJHB1cnBsZTogIzhDNzdDRDtcclxuJGdyZWVuOiAjNThCM0E3O1xyXG4kcmVkOiAjRjY5NzlEO1xyXG5cclxuXHJcbi8vRm9udHNcclxuJHNtYWxsLWZvbnQtc2l6ZTogMTNweDtcclxuJG1lZGl1bS1mb250LXNpemU6IDE2cHg7XHJcblxyXG5cclxuLy9Gb250cy1tb2JpbGVcclxuJGgxLW1vYmlsZTogMjhweDtcclxuXHJcblxyXG4vL0ZvbnRzLXRhYmxldFxyXG4kaDEtdGFibGV0OiAzMnB4O1xyXG5cclxuXHJcbi8vRm9udHMtZGVza3RvcFxyXG4kaDEtZGVza3RvcDogMzZweDtcclxuXHJcbi8vUmFkaXVzXHJcbiRleHRyYS1zbWFsbC1yYWRpdXM6IDJweDtcclxuJHNtYWxsLXJhZGl1czogNHB4O1xyXG4kbWVkaXVtLXJhZGl1czogOHB4O1xyXG5cclxuIl19 */"] });


/***/ }),

/***/ "yyV7":
/*!*****************************************!*\
  !*** ./src/app/store/search.actions.ts ***!
  \*****************************************/
/*! exports provided: SEARCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH", function() { return SEARCH; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const SEARCH = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Search]', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map