"use strict";
(self["webpackChunkcorpnet_social"] = self["webpackChunkcorpnet_social"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/login/login.component */ 6539);
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/register/register.component */ 9619);
/* harmony import */ var _auth_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/verify-email/verify-email.component */ 3457);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/post-detail/post-detail.component */ 4296);
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ 7844);
/* harmony import */ var _posts_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/post-edit/post-edit.component */ 3020);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ 300);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);












const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  path: 'verify-email',
  component: _auth_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_2__.VerifyEmailComponent
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: 'posts/new',
  component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__.PostCreateComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: 'posts/:id/edit',
  component: _posts_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_6__.PostEditComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: 'posts/:id',
  component: _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__.PostDetailComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: 'profile',
  component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: '**',
  redirectTo: 'home'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 4646);










const _c0 = () => ["/profile"];
function AppComponent_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getInitials(user_r2.name));
  }
}
function AppComponent_div_15_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", user_r2.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function AppComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_15_div_2_Template, 2, 1, "div", 14)(3, AppComponent_div_15_img_3_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "+Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_15_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sair");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !user_r2.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r2.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2.name);
  }
}
function AppComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.user$ = this.authService.currentUser$;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  getInitials(name) {
    if (!name) {
      return 'U';
    }
    const parts = name.trim().split(' ').filter(Boolean);
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 21,
      vars: 4,
      consts: [["loggedOut", ""], [1, "app-toolbar"], [1, "toolbar-left"], [1, "brand"], ["appearance", "outline", 1, "toolbar-select"], ["value", "all"], ["value", "unread"], ["appearance", "outline", 1, "toolbar-search"], ["matInput", "", "type", "text", "placeholder", "Buscar posts..."], [1, "spacer"], ["class", "toolbar-right", 4, "ngIf", "ngIfElse"], [1, "app-shell"], [1, "toolbar-right"], [1, "user-chip", 3, "routerLink"], ["class", "avatar", 4, "ngIf"], ["alt", "Avatar", "class", "avatar-img", 3, "src", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/posts/new"], ["mat-stroked-button", "", "color", "warn", 3, "click"], [1, "avatar"], ["alt", "Avatar", 1, "avatar-img", 3, "src"], ["mat-button", "", "routerLink", "/login"], ["mat-flat-button", "", "color", "accent", "routerLink", "/register"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 1)(1, "div", 2)(2, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "aSync");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 4)(5, "mat-select", 5)(6, "mat-option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Todos os posts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nao lidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 7)(11, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Buscar posts...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppComponent_div_15_Template, 10, 5, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_ng_template_17_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "main", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const loggedOut_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 2, ctx.user$))("ngIfElse", loggedOut_r4);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
      styles: [".app-toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.1);\n  background: #ffffff;\n  color: #1f2937;\n}\n\n.app-toolbar.mat-toolbar[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  font-size: 18px;\n}\n\n.toolbar-select[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n\n.toolbar-search[_ngcontent-%COMP%] {\n  min-width: 240px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n  color: inherit;\n}\n\n.avatar[_ngcontent-%COMP%], .avatar-img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #1d4ed8;\n  display: grid;\n  place-items: center;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.avatar-img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border: 1px solid #e2e8f0;\n}\n\n@media (max-width: 900px) {\n  .toolbar-search[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 700px) {\n  .toolbar-select[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFBRjtFQUdBO0lBQ0UsYUFBQTtFQURGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXRvb2xiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xKTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMxZjI5Mzc7XG59XG5cbi5hcHAtdG9vbGJhci5tYXQtdG9vbGJhciB7XG4gIGNvbG9yOiAjMWYyOTM3O1xufVxuXG4udG9vbGJhci1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uYnJhbmQge1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRvb2xiYXItc2VsZWN0IHtcbiAgbWluLXdpZHRoOiAxNjBweDtcbn1cblxuLnRvb2xiYXItc2VhcmNoIHtcbiAgbWluLXdpZHRoOiAyNDBweDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi50b29sYmFyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4udXNlci1jaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uYXZhdGFyLFxuLmF2YXRhci1pbWcge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hdmF0YXIge1xuICBiYWNrZ3JvdW5kOiAjZTBlN2ZmO1xuICBjb2xvcjogIzFkNGVkODtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYXZhdGFyLWltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnRvb2xiYXItc2VhcmNoIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAudG9vbGJhci1zZWxlY3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAudXNlci1jaGlwIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.module */ 841);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ 5055);
/* harmony import */ var _posts_posts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.module */ 1975);
/* harmony import */ var _comments_comments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments/comments.module */ 9349);
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.module */ 4219);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ 9339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);













class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
        useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__.JwtInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule, _home_home_module__WEBPACK_IMPORTED_MODULE_3__.HomeModule, _posts_posts_module__WEBPACK_IMPORTED_MODULE_4__.PostsModule, _comments_comments_module__WEBPACK_IMPORTED_MODULE_5__.CommentsModule, _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__.ProfileModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule, _home_home_module__WEBPACK_IMPORTED_MODULE_3__.HomeModule, _posts_posts_module__WEBPACK_IMPORTED_MODULE_4__.PostsModule, _comments_comments_module__WEBPACK_IMPORTED_MODULE_5__.CommentsModule, _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__.ProfileModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 841:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 6539);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 9619);
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-email/verify-email.component */ 3457);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);





class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(t) {
      return new (t || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_2__.VerifyEmailComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 6539:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4950);










class LoginComponent {
  constructor(fb, authService, router, route, snackBar) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.snackBar = snackBar;
    this.loading = false;
    this.form = this.fb.nonNullable.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(8)]]
    });
  }
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.form.getRawValue()).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
        this.router.navigate([returnUrl]);
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Login failed. Please check your credentials.', 'Close', {
          duration: 3000
        });
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 22,
      vars: 3,
      consts: [[1, "auth-container"], [1, "auth-card", "card-elevated"], [1, "section-title"], [1, "text-muted"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "type", "password", "formControlName", "password"], ["mat-flat-button", "", "color", "primary", 1, "full-width", 3, "disabled"], [1, "auth-links"], ["routerLink", "/register"], ["routerLink", "/verify-email"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Welcome back");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Sign in to your corporate network.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 5)(12, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9)(18, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Create account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Verify email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Signing in..." : "Login", " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: calc(100vh - 128px);\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: min(420px, 92vw);\n  padding: 28px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.auth-links[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  color: var(--muted);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTI4cHgpO1xufVxuXG4uYXV0aC1jYXJkIHtcbiAgd2lkdGg6IG1pbig0MjBweCwgOTJ2dyk7XG4gIHBhZGRpbmc6IDI4cHg7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRoLWxpbmtzIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9619:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4950);










class RegisterComponent {
  constructor(fb, authService, router, snackBar) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
    this.loading = false;
    this.form = this.fb.nonNullable.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(8)]]
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.authService.register(this.form.getRawValue()).subscribe({
      next: response => {
        this.snackBar.open(response.message ?? 'Account created. Please verify your email.', 'Close', {
          duration: 3500
        });
        this.router.navigate(['/verify-email']);
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Registration failed. Try again.', 'Close', {
          duration: 3000
        });
      }
    });
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 26,
      vars: 3,
      consts: [[1, "auth-container"], [1, "auth-card", "card-elevated"], [1, "section-title"], [1, "text-muted"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", "formControlName", "name"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "type", "password", "formControlName", "password"], ["mat-flat-button", "", "color", "primary", 1, "full-width", 3, "disabled"], [1, "auth-links"], ["routerLink", "/login"], ["routerLink", "/verify-email"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Join CorpNet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Create your internal network profile.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 5)(12, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 5)(16, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10)(22, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Already have an account?");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Verify email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Creating account..." : "Register", " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: calc(100vh - 128px);\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: min(420px, 92vw);\n  padding: 28px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.auth-links[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  color: var(--muted);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTI4cHgpO1xufVxuXG4uYXV0aC1jYXJkIHtcbiAgd2lkdGg6IG1pbig0MjBweCwgOTJ2dyk7XG4gIHBhZGRpbmc6IDI4cHg7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRoLWxpbmtzIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG4iLCIuYXV0aC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTI4cHgpO1xufVxuXG4uYXV0aC1jYXJkIHtcbiAgd2lkdGg6IG1pbig0MjBweCwgOTJ2dyk7XG4gIHBhZGRpbmc6IDI4cHg7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRoLWxpbmtzIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3457:
/*!*************************************************************!*\
  !*** ./src/app/auth/verify-email/verify-email.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyEmailComponent: () => (/* binding */ VerifyEmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4950);










class VerifyEmailComponent {
  constructor(fb, authService, snackBar) {
    this.fb = fb;
    this.authService = authService;
    this.snackBar = snackBar;
    this.loading = false;
    this.form = this.fb.nonNullable.group({
      token: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)]]
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.authService.verifyEmail(this.form.getRawValue().token).subscribe({
      next: response => {
        this.loading = false;
        this.snackBar.open(response.message ?? 'Email verified. You can now log in.', 'Close', {
          duration: 3000
        });
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Verification failed. Check the token.', 'Close', {
          duration: 3000
        });
      }
    });
  }
  static {
    this.ɵfac = function VerifyEmailComponent_Factory(t) {
      return new (t || VerifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: VerifyEmailComponent,
      selectors: [["app-verify-email"]],
      decls: 18,
      vars: 3,
      consts: [[1, "auth-container"], [1, "auth-card", "card-elevated"], [1, "section-title"], [1, "text-muted"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", "formControlName", "token"], ["mat-flat-button", "", "color", "primary", 1, "full-width", 3, "disabled"], [1, "auth-links"], ["routerLink", "/login"], ["routerLink", "/register"]],
      template: function VerifyEmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Verify your email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Paste the token that was sent to you.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function VerifyEmailComponent_Template_form_ngSubmit_6_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Verification token");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8)(14, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Back to login");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Create account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Verifying..." : "Verify email", " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: calc(100vh - 128px);\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: min(420px, 92vw);\n  padding: 28px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.auth-links[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  color: var(--muted);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjhweCk7XG59XG5cbi5hdXRoLWNhcmQge1xuICB3aWR0aDogbWluKDQyMHB4LCA5MnZ3KTtcbiAgcGFkZGluZzogMjhweDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmF1dGgtbGlua3Mge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cbiIsIi5hdXRoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjhweCk7XG59XG5cbi5hdXRoLWNhcmQge1xuICB3aWR0aDogbWluKDQyMHB4LCA5MnZ3KTtcbiAgcGFkZGluZzogMjhweDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmF1dGgtbGlua3Mge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 297:
/*!*****************************************************************!*\
  !*** ./src/app/comments/comment-form/comment-form.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommentFormComponent: () => (/* binding */ CommentFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/comment.service */ 387);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 4950);








class CommentFormComponent {
  constructor(fb, commentService) {
    this.fb = fb;
    this.commentService = commentService;
    this.postId = 0;
    this.commentAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.submitting = false;
    this.form = this.fb.nonNullable.group({
      content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(300)]]
    });
  }
  submit() {
    if (this.form.invalid || !this.postId) {
      return;
    }
    this.submitting = true;
    this.commentService.addComment(this.postId, this.form.getRawValue()).subscribe({
      next: comment => {
        this.commentAdded.emit(comment);
        this.form.reset();
        this.submitting = false;
      },
      error: () => {
        this.submitting = false;
      }
    });
  }
  static {
    this.ɵfac = function CommentFormComponent_Factory(t) {
      return new (t || CommentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comment_service__WEBPACK_IMPORTED_MODULE_0__.CommentService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CommentFormComponent,
      selectors: [["app-comment-form"]],
      inputs: {
        postId: "postId"
      },
      outputs: {
        commentAdded: "commentAdded"
      },
      decls: 7,
      vars: 3,
      consts: [[1, "comment-form", 3, "ngSubmit", "formGroup"], ["appearance", "fill", 1, "full-width"], ["matInput", "", "type", "text", "formControlName", "content"], ["mat-stroked-button", "", "color", "primary", 3, "disabled"]],
      template: function CommentFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CommentFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1)(2, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add a comment");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.submitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.submitting ? "Sending..." : "Comment", " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel],
      styles: [".comment-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  align-items: center;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 600px) {\n  .comment-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbWVudHMvY29tbWVudC1mb3JtL2NvbW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBQTtFQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29tbWVudC1mb3JtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3245:
/*!*****************************************************************!*\
  !*** ./src/app/comments/comment-list/comment-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommentListComponent: () => (/* binding */ CommentListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/comment.service */ 387);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comment-form/comment-form.component */ 297);






function CommentListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Carregando comentarios...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CommentListComponent_mat_list_2_mat_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-item")(1, "div", 7)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r1.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 3, comment_r1.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r1.content);
  }
}
function CommentListComponent_mat_list_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CommentListComponent_mat_list_2_mat_list_item_1_Template, 9, 6, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.comments);
  }
}
function CommentListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nenhum comentario ainda. Seja o primeiro a comentar! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class CommentListComponent {
  constructor(commentService) {
    this.commentService = commentService;
    this.postId = 0;
    this.countChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.comments = [];
    this.loading = false;
  }
  ngOnInit() {
    this.loadComments();
  }
  loadComments() {
    if (!this.postId) {
      return;
    }
    this.loading = true;
    this.commentService.listByPost(this.postId).subscribe({
      next: comments => {
        this.comments = comments;
        this.loading = false;
        this.countChanged.emit(this.comments.length);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  handleCommentAdded(comment) {
    this.comments = [...this.comments, comment];
    this.countChanged.emit(this.comments.length);
  }
  static {
    this.ɵfac = function CommentListComponent_Factory(t) {
      return new (t || CommentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_comment_service__WEBPACK_IMPORTED_MODULE_0__.CommentService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CommentListComponent,
      selectors: [["app-comment-list"]],
      inputs: {
        postId: "postId"
      },
      outputs: {
        countChanged: "countChanged"
      },
      decls: 5,
      vars: 4,
      consts: [[1, "comments"], ["class", "text-muted", 4, "ngIf"], [4, "ngIf"], ["class", "empty-state text-muted", 4, "ngIf"], [3, "commentAdded", "postId"], [1, "text-muted"], [4, "ngFor", "ngForOf"], [1, "comment-item"], [1, "empty-state", "text-muted"]],
      template: function CommentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CommentListComponent_div_1_Template, 2, 0, "div", 1)(2, CommentListComponent_mat_list_2_Template, 2, 1, "mat-list", 2)(3, CommentListComponent_div_3_Template, 2, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-comment-form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("commentAdded", function CommentListComponent_Template_app_comment_form_commentAdded_4_listener($event) {
            return ctx.handleCommentAdded($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.comments.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.comments.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("postId", ctx.postId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem, _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_1__.CommentFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: [".comments[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  padding-top: 8px;\n}\n\n.comment-item[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 4px;\n}\n\n.comment-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 12px 0 18px;\n  text-align: center;\n  color: #6b7280;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbWVudHMvY29tbWVudC1saXN0L2NvbW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLmNvbW1lbnQtaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNHB4O1xufVxuXG4uY29tbWVudC1pdGVtIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTJweCAwIDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2YjcyODA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9349:
/*!*********************************************!*\
  !*** ./src/app/comments/comments.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommentsModule: () => (/* binding */ CommentsModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-list/comment-list.component */ 3245);
/* harmony import */ var _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-form/comment-form.component */ 297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class CommentsModule {
  static {
    this.ɵfac = function CommentsModule_Factory(t) {
      return new (t || CommentsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CommentsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CommentsModule, {
    declarations: [_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_1__.CommentListComponent, _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_2__.CommentFormComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
    exports: [_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_1__.CommentListComponent, _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_2__.CommentFormComponent]
  });
})();

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7824:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/post.service */ 1032);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _posts_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/post-card/post-card.component */ 7884);






function HomeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Carregando posts...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "app-post-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("postUpdated", function HomeComponent_div_8_Template_app_post_card_postUpdated_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.handlePostUpdated($event));
    })("postDeleted", function HomeComponent_div_8_Template_app_post_card_postDeleted_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.handlePostDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const post_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("post", post_r3)("currentUserId", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.id) || "")("currentUserName", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.name) || "");
  }
}
class HomeComponent {
  constructor(postService, authService) {
    this.postService = postService;
    this.authService = authService;
    this.posts = [];
    this.currentUser = null;
    this.loading = false;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.loadFeed();
  }
  loadFeed() {
    this.loading = true;
    this.postService.getFeed().subscribe({
      next: posts => {
        this.posts = posts;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  handlePostUpdated(post) {
    this.posts = this.posts.map(item => item.id === post.id ? post : item);
  }
  handlePostDeleted(postId) {
    this.posts = this.posts.filter(item => item.id !== postId);
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_0__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 9,
      vars: 2,
      consts: [[1, "home-layout"], [1, "feed"], [1, "feed-header"], [1, "section-title"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["class", "text-muted", 4, "ngIf"], ["class", "feed-item", 4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "feed-item"], [3, "postUpdated", "postDeleted", "post", "currentUserId", "currentUserName"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Posts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() {
            return ctx.loadFeed();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Atualizar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 2, 0, "div", 5)(8, HomeComponent_div_8_Template, 2, 3, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _posts_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__.PostCardComponent],
      styles: [".home-layout[_ngcontent-%COMP%] {\n  max-width: 980px;\n  margin: 0 auto;\n  display: grid;\n  gap: 16px;\n  padding: 16px 0 32px;\n}\n\n.feed[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0;\n}\n\n.feed-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 4px 12px;\n}\n\n.feed-item[_ngcontent-%COMP%] {\n  padding: 18px 4px;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.feed-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLE1BQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1sYXlvdXQge1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDAgMzJweDtcbn1cblxuLmZlZWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDA7XG59XG5cbi5mZWVkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCA0cHggMTJweDtcbn1cblxuLmZlZWQtaXRlbSB7XG4gIHBhZGRpbmc6IDE4cHggNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbn1cblxuLmZlZWQtaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5055:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 7824);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _posts_posts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/posts.module */ 1975);
/* harmony import */ var _comments_comments_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comments/comments.module */ 9349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);





class HomeModule {
  static {
    this.ɵfac = function HomeModule_Factory(t) {
      return new (t || HomeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _posts_posts_module__WEBPACK_IMPORTED_MODULE_2__.PostsModule, _comments_comments_module__WEBPACK_IMPORTED_MODULE_3__.CommentsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _posts_posts_module__WEBPACK_IMPORTED_MODULE_2__.PostsModule, _comments_comments_module__WEBPACK_IMPORTED_MODULE_3__.CommentsModule]
  });
})();

/***/ }),

/***/ 9339:
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptor: () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);


class JwtInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    const token = this.authService.getToken();
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
  static {
    this.ɵfac = function JwtInterceptor_Factory(t) {
      return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 7884:
/*!********************************************************!*\
  !*** ./src/app/posts/post-card/post-card.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostCardComponent: () => (/* binding */ PostCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/post.service */ 1032);
/* harmony import */ var _services_reaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reaction.service */ 717);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _shared_markdown_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/markdown.pipe */ 6295);








const _c0 = a0 => ["/posts", a0];
function PostCardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.post.author.name.slice(0, 2), " ");
  }
}
function PostCardComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 16);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.post.author.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function PostCardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.getTopicsLine(), " ");
  }
}
function PostCardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostCardComponent_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.editPost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostCardComponent_div_11_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.deletePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class PostCardComponent {
  constructor(postService, reactionService, router) {
    this.postService = postService;
    this.reactionService = reactionService;
    this.router = router;
    this.currentUserId = '';
    this.currentUserName = '';
    this.postUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.postDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.currentReaction = null;
  }
  canEdit() {
    const isOwnerById = this.post.author?.id === this.currentUserId;
    const hasNameMatch = this.currentUserName.length > 0 && this.post.author?.name === this.currentUserName;
    return Boolean(isOwnerById || hasNameMatch);
  }
  getTitle() {
    const subject = this.post.subject?.trim();
    if (subject) {
      return subject;
    }
    const fallback = this.post.content?.trim() || '';
    return fallback ? fallback.split('\n')[0] : 'Sem titulo';
  }
  getExcerpt() {
    const body = this.post.content?.trim() || '';
    if (!body) {
      return '';
    }
    return body.length > 260 ? `${body.slice(0, 260)}...` : body;
  }
  getTopics() {
    return this.post.topics ?? [];
  }
  getTopicsLine() {
    return this.getTopics().join(' • ');
  }
  commentsLabel() {
    const count = this.post.commentsCount ?? 0;
    return count > 0 ? `${count} comentarios` : 'nenhum comentario';
  }
  editPost() {
    this.router.navigate(['/posts', this.post.id, 'edit']);
  }
  deletePost() {
    const confirmed = window.confirm('Delete this post?');
    if (!confirmed) {
      return;
    }
    this.postService.deletePost(this.post.id).subscribe({
      next: () => this.postDeleted.emit(this.post.id)
    });
  }
  react(type) {
    if (this.currentReaction === type) {
      this.reactionService.removeReaction(this.post.id).subscribe({
        next: () => {
          const reactions = {
            ...this.post.reactions
          };
          this.applyDelta(reactions, type, -1);
          this.currentReaction = null;
          this.post = {
            ...this.post,
            reactions
          };
          this.postUpdated.emit(this.post);
        }
      });
      return;
    }
    this.reactionService.react(this.post.id, type).subscribe({
      next: () => {
        const reactions = {
          ...this.post.reactions
        };
        if (this.currentReaction && this.currentReaction !== type) {
          this.applyDelta(reactions, this.currentReaction, -1);
        }
        this.applyDelta(reactions, type, 1);
        this.currentReaction = type;
        this.post = {
          ...this.post,
          reactions
        };
        this.postUpdated.emit(this.post);
      }
    });
  }
  updateCommentsCount(count) {
    this.post = {
      ...this.post,
      commentsCount: count
    };
    this.postUpdated.emit(this.post);
  }
  applyDelta(reactions, type, delta) {
    if (type === 'LIKE') {
      reactions.like = Math.max(0, reactions.like + delta);
    }
    if (type === 'LOVE') {
      reactions.love = Math.max(0, reactions.love + delta);
    }
    if (type === 'WOW') {
      reactions.wow = Math.max(0, reactions.wow + delta);
    }
    if (type === 'HAHA') {
      reactions.haha = Math.max(0, reactions.haha + delta);
    }
  }
  static {
    this.ɵfac = function PostCardComponent_Factory(t) {
      return new (t || PostCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_0__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_reaction_service__WEBPACK_IMPORTED_MODULE_1__.ReactionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PostCardComponent,
      selectors: [["app-post-card"]],
      inputs: {
        post: "post",
        currentUserId: "currentUserId",
        currentUserName: "currentUserName"
      },
      outputs: {
        postUpdated: "postUpdated",
        postDeleted: "postDeleted"
      },
      decls: 27,
      vars: 24,
      consts: [[1, "post-card"], [1, "post-header"], ["class", "avatar", 4, "ngIf"], ["alt", "Avatar", "class", "avatar-img", 3, "src", 4, "ngIf"], [1, "post-meta"], [1, "post-title", 3, "routerLink"], [1, "post-subtitle", "text-muted"], ["class", "post-topics text-muted", 4, "ngIf"], ["class", "actions", 4, "ngIf"], [1, "post-body"], [1, "post-content", 3, "innerHTML"], [1, "reaction-row"], ["mat-button", "", 1, "reaction-btn", 3, "click"], [1, "comment-row"], [3, "routerLink"], [1, "avatar"], ["alt", "Avatar", 1, "avatar-img", 3, "src"], [1, "post-topics", "text-muted"], [1, "actions"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"]],
      template: function PostCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PostCardComponent_div_2_Template, 2, 1, "div", 2)(3, PostCardComponent_img_3_Template, 1, 1, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PostCardComponent_div_10_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PostCardComponent_div_11_Template, 5, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "markdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostCardComponent_Template_button_click_16_listener() {
            return ctx.react("LIKE");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostCardComponent_Template_button_click_18_listener() {
            return ctx.react("LOVE");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostCardComponent_Template_button_click_20_listener() {
            return ctx.react("WOW");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PostCardComponent_Template_button_click_22_listener() {
            return ctx.react("HAHA");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13)(25, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.post.author.avatarUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.post.author.avatarUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c0, ctx.post.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getTitle());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Por ", ctx.post.author.name, " em ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 15, ctx.post.createdAt, "dd MMM yyyy"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getTopics().length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.canEdit());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 18, ctx.getExcerpt()), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\uD83D\uDC4D ", (ctx.post.reactions == null ? null : ctx.post.reactions.like) || 0, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u2764\uFE0F ", (ctx.post.reactions == null ? null : ctx.post.reactions.love) || 0, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\uD83D\uDE80 ", (ctx.post.reactions == null ? null : ctx.post.reactions.wow) || 0, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\uD83D\uDC4F ", (ctx.post.reactions == null ? null : ctx.post.reactions.haha) || 0, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c0, ctx.post.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.commentsLabel());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _shared_markdown_pipe__WEBPACK_IMPORTED_MODULE_2__.MarkdownPipe],
      styles: [".post-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  padding: 0;\n}\n\n.post-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 12px;\n  align-items: start;\n}\n\n.avatar[_ngcontent-%COMP%], .avatar-img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  background: #111827;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.avatar-img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border: 1px solid #e5e7eb;\n}\n\n.post-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111827;\n}\n\n.post-title[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.post-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.post-topics[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  margin-top: 4px;\n}\n\n.post-body[_ngcontent-%COMP%] {\n  margin-left: 56px;\n  display: grid;\n  gap: 8px;\n}\n\n.post-content[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  line-height: 1.6;\n  color: #374151;\n}\n\n.post-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  padding: 2px 6px;\n  border-radius: 6px;\n  font-size: 0.9em;\n}\n\n.post-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 3px solid #cbd5f5;\n  padding: 6px 10px;\n  margin: 8px 0;\n  background: #f8fafc;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n\n.reaction-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n\n.reaction-btn[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  min-width: unset;\n  color: #111827;\n}\n\n.comment-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  text-decoration: underline;\n}\n\n@media (max-width: 720px) {\n  .post-header[_ngcontent-%COMP%] {\n    grid-template-columns: auto 1fr;\n  }\n  .actions[_ngcontent-%COMP%] {\n    grid-column: 2/3;\n  }\n  .post-body[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdC1jYXJkL3Bvc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLCtCQUFBO0VBQ0Y7RUFFQTtJQUNFLGdCQUFBO0VBQUY7RUFHQTtJQUNFLGNBQUE7RUFERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnBvc3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmF2YXRhcixcbi5hdmF0YXItaW1nIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYXZhdGFyIHtcbiAgYmFja2dyb3VuZDogIzExMTgyNztcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5hdmF0YXItaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG59XG5cbi5wb3N0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzExMTgyNztcbn1cblxuLnBvc3QtdGl0bGU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnBvc3Qtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnBvc3QtdG9waWNzIHtcbiAgZm9udC1zaXplOiAxMi41cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnBvc3QtYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiA1NnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDhweDtcbn1cblxuLnBvc3QtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTQuNXB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBjb2xvcjogIzM3NDE1MTtcbn1cblxuLnBvc3QtY29udGVudCBjb2RlIHtcbiAgYmFja2dyb3VuZDogI2VlZjJmZjtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4ucG9zdC1jb250ZW50IGJsb2NrcXVvdGUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNjYmQ1ZjU7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xufVxuXG4ucmVhY3Rpb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnJlYWN0aW9uLWJ0biB7XG4gIHBhZGRpbmc6IDAgNHB4O1xuICBtaW4td2lkdGg6IHVuc2V0O1xuICBjb2xvcjogIzExMTgyNztcbn1cblxuLmNvbW1lbnQtcm93IGEge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNGI1NTYzO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5wb3N0LWhlYWRlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgfVxuXG4gIC5hY3Rpb25zIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIH1cblxuICAucG9zdC1ib2R5IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7844:
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostCreateComponent: () => (/* binding */ PostCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/post.service */ 1032);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post-form/post-form.component */ 2092);






class PostCreateComponent {
  constructor(postService, router, snackBar) {
    this.postService = postService;
    this.router = router;
    this.snackBar = snackBar;
    this.submitting = false;
  }
  handleSave(payload) {
    this.submitting = true;
    this.postService.createPost(payload).subscribe({
      next: post => {
        this.submitting = false;
        this.snackBar.open('Post publicado.', 'Fechar', {
          duration: 2500
        });
        this.router.navigate(['/posts', post.id]);
      },
      error: () => {
        this.submitting = false;
        this.snackBar.open('Falha ao publicar o post.', 'Fechar', {
          duration: 2500
        });
      }
    });
  }
  static {
    this.ɵfac = function PostCreateComponent_Factory(t) {
      return new (t || PostCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_0__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PostCreateComponent,
      selectors: [["app-post-create"]],
      decls: 3,
      vars: 3,
      consts: [[1, "post-page"], [1, "post-card"], [3, "save", "title", "submitLabel", "submitting"]],
      template: function PostCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "app-post-form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("save", function PostCreateComponent_Template_app_post_form_save_2_listener($event) {
            return ctx.handleSave($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Novo Post")("submitLabel", "Publicar post")("submitting", ctx.submitting);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_1__.PostFormComponent],
      styles: [".post-page[_ngcontent-%COMP%] {\n  max-width: 980px;\n  margin: 0 auto;\n  padding: 24px 0 40px;\n}\n\n.post-card[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LXBhZ2Uge1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjRweCAwIDQwcHg7XG59XG5cbi5wb3N0LWNhcmQge1xuICBwYWRkaW5nOiAyMHB4IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4296:
/*!************************************************************!*\
  !*** ./src/app/posts/post-detail/post-detail.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostDetailComponent: () => (/* binding */ PostDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/post.service */ 1032);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _comments_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../comments/comment-list/comment-list.component */ 3245);
/* harmony import */ var _shared_markdown_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/markdown.pipe */ 6295);








function PostDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Carregando artigo...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PostDetailComponent_mat_card_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.post.author.name.slice(0, 2));
  }
}
function PostDetailComponent_mat_card_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 20);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.post.author.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function PostDetailComponent_mat_card_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getPrimaryTopic(ctx_r0.post));
  }
}
function PostDetailComponent_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PostDetailComponent_mat_card_2_div_2_Template, 2, 1, "div", 6)(3, PostDetailComponent_mat_card_2_img_3_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8)(5, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 10)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PostDetailComponent_mat_card_2_div_13_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "markdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 15)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "section", 16)(31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "app-comment-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.post.author.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.post.author.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getTitle(ctx_r0.post));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Por ", ctx_r0.post.author.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("em ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 15, ctx_r0.post.createdAt, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.getPrimaryTopic(ctx_r0.post));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 18, ctx_r0.post.content), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\uD83D\uDC4D ", (ctx_r0.post.reactions == null ? null : ctx_r0.post.reactions.like) || 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u2764\uFE0F ", (ctx_r0.post.reactions == null ? null : ctx_r0.post.reactions.love) || 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\uD83D\uDE80 ", (ctx_r0.post.reactions == null ? null : ctx_r0.post.reactions.wow) || 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\uD83D\uDC4F ", (ctx_r0.post.reactions == null ? null : ctx_r0.post.reactions.haha) || 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.getTotalReactions(ctx_r0.post), " reacoes, ", ctx_r0.commentsLabel(ctx_r0.post), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Comentarios (", ctx_r0.post.commentsCount || 0, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("postId", ctx_r0.post.id);
  }
}
class PostDetailComponent {
  constructor(route, postService) {
    this.route = route;
    this.postService = postService;
    this.post = null;
    this.loading = false;
  }
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : 0;
    if (!id) {
      return;
    }
    this.loading = true;
    this.postService.getPostById(id).subscribe({
      next: post => {
        this.post = post;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getTitle(post) {
    return post.subject?.trim() || 'Sem titulo';
  }
  getPrimaryTopic(post) {
    return post.topics && post.topics.length > 0 ? post.topics[0] : null;
  }
  getTotalReactions(post) {
    const like = post.reactions?.like ?? 0;
    const love = post.reactions?.love ?? 0;
    const wow = post.reactions?.wow ?? 0;
    const haha = post.reactions?.haha ?? 0;
    return like + love + wow + haha;
  }
  commentsLabel(post) {
    const count = post.commentsCount ?? 0;
    return count > 0 ? `${count} comentarios` : 'nenhum comentario';
  }
  static {
    this.ɵfac = function PostDetailComponent_Factory(t) {
      return new (t || PostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_0__.PostService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PostDetailComponent,
      selectors: [["app-post-detail"]],
      decls: 3,
      vars: 2,
      consts: [[1, "detail-page"], ["class", "text-muted", 4, "ngIf"], ["class", "detail-card", 4, "ngIf"], [1, "text-muted"], [1, "detail-card"], [1, "detail-header"], ["class", "avatar", 4, "ngIf"], ["alt", "Avatar", "class", "avatar-img", 3, "src", 4, "ngIf"], [1, "detail-meta"], [1, "detail-title"], [1, "meta-line", "text-muted"], ["class", "meta-line", 4, "ngIf"], [1, "detail-body"], [1, "detail-content", 3, "innerHTML"], [1, "detail-reactions"], [1, "detail-links"], [1, "detail-comments"], [1, "comments-title"], [3, "postId"], [1, "avatar"], ["alt", "Avatar", 1, "avatar-img", 3, "src"], [1, "meta-line"], [1, "topic-pill"]],
      template: function PostDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PostDetailComponent_div_1_Template, 2, 0, "div", 1)(2, PostDetailComponent_mat_card_2_Template, 34, 20, "mat-card", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.post);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _comments_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_1__.CommentListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _shared_markdown_pipe__WEBPACK_IMPORTED_MODULE_2__.MarkdownPipe],
      styles: [".detail-page[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: start center;\n  padding: 24px 12px 64px;\n}\n\n.detail-card[_ngcontent-%COMP%] {\n  width: min(920px, 94vw);\n  padding: 28px;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: none;\n}\n\n.detail-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 16px;\n  align-items: start;\n  margin-bottom: 12px;\n}\n\n.avatar[_ngcontent-%COMP%], .avatar-img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  background: #111827;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.avatar-img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border: 1px solid #e5e7eb;\n}\n\n.detail-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 32px;\n  font-weight: 700;\n  color: #111827;\n}\n\n.meta-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n}\n\n.topic-pill[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #111827;\n  border-radius: 999px;\n  padding: 2px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.detail-body[_ngcontent-%COMP%] {\n  margin-left: 68px;\n}\n\n.detail-content[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.7;\n  margin: 18px 0 16px;\n}\n\n.detail-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .detail-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .detail-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 16px 0 8px;\n}\n\n.detail-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #e2e8f0;\n  padding: 12px;\n  border-radius: 8px;\n  overflow: auto;\n}\n\n.detail-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  padding: 2px 6px;\n  border-radius: 6px;\n  font-size: 0.9em;\n}\n\n.detail-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 4px solid #cbd5f5;\n  padding: 8px 12px;\n  margin: 12px 0;\n  color: #475569;\n  background: #f8fafc;\n}\n\n.detail-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .detail-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.detail-reactions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n\n.detail-links[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 14px;\n  text-decoration: underline;\n}\n\n.detail-comments[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n\n.comments-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 12px;\n  font-size: 18px;\n}\n\n@media (max-width: 720px) {\n  .detail-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .detail-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .detail-body[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBOzs7RUFHRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtFQUVBO0lBQ0UsZUFBQTtFQUFGO0VBR0E7SUFDRSxjQUFBO0VBREY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtcGFnZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBzdGFydCBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHggMTJweCA2NHB4O1xufVxuXG4uZGV0YWlsLWNhcmQge1xuICB3aWR0aDogbWluKDkyMHB4LCA5NHZ3KTtcbiAgcGFkZGluZzogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmRldGFpbC1oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBnYXA6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmF2YXRhcixcbi5hdmF0YXItaW1nIHtcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYXZhdGFyIHtcbiAgYmFja2dyb3VuZDogIzExMTgyNztcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5hdmF0YXItaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG59XG5cbi5kZXRhaWwtdGl0bGUge1xuICBtYXJnaW46IDAgMCA4cHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxMTE4Mjc7XG59XG5cbi5tZXRhLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udG9waWMtcGlsbCB7XG4gIGJhY2tncm91bmQ6ICNlNWU3ZWI7XG4gIGNvbG9yOiAjMTExODI3O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRldGFpbC1ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IDY4cHg7XG59XG5cbi5kZXRhaWwtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgbWFyZ2luOiAxOHB4IDAgMTZweDtcbn1cblxuLmRldGFpbC1jb250ZW50IGgxLFxuLmRldGFpbC1jb250ZW50IGgyLFxuLmRldGFpbC1jb250ZW50IGgzIHtcbiAgbWFyZ2luOiAxNnB4IDAgOHB4O1xufVxuXG4uZGV0YWlsLWNvbnRlbnQgcHJlIHtcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgY29sb3I6ICNlMmU4ZjA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5kZXRhaWwtY29udGVudCBjb2RlIHtcbiAgYmFja2dyb3VuZDogI2VlZjJmZjtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uZGV0YWlsLWNvbnRlbnQgYmxvY2txdW90ZSB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2NiZDVmNTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIG1hcmdpbjogMTJweCAwO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbn1cblxuLmRldGFpbC1jb250ZW50IHVsLFxuLmRldGFpbC1jb250ZW50IG9sIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZGV0YWlsLXJlYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzNzQxNTE7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmRldGFpbC1saW5rcyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZGV0YWlsLWNvbW1lbnRzIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuLmNvbW1lbnRzLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmRldGFpbC1jYXJkIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLmRldGFpbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG5cbiAgLmRldGFpbC1ib2R5IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3020:
/*!********************************************************!*\
  !*** ./src/app/posts/post-edit/post-edit.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostEditComponent: () => (/* binding */ PostEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/post.service */ 1032);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post-form/post-form.component */ 2092);







function PostEditComponent_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 3)(1, "app-post-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("save", function PostEditComponent_mat_card_1_Template_app_post_form_save_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.handleSave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Editar Post")("submitLabel", "Salvar alteracoes")("submitting", ctx_r1.submitting)("initialValue", ctx_r1.initialValue);
  }
}
function PostEditComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Carregando post...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class PostEditComponent {
  constructor(route, router, postService, snackBar) {
    this.route = route;
    this.router = router;
    this.postService = postService;
    this.snackBar = snackBar;
    this.submitting = false;
    this.loading = true;
    this.postId = null;
  }
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;
    if (!id || Number.isNaN(id)) {
      this.router.navigate(['/home']);
      return;
    }
    this.postId = id;
    this.postService.getPostById(id).subscribe({
      next: post => {
        this.initialValue = {
          subject: post.subject,
          content: post.content,
          topics: post.topics ?? []
        };
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Nao foi possivel carregar o post.', 'Fechar', {
          duration: 2500
        });
        this.router.navigate(['/home']);
      }
    });
  }
  handleSave(payload) {
    if (!this.postId) {
      return;
    }
    this.submitting = true;
    this.postService.updatePost(this.postId, payload).subscribe({
      next: post => {
        this.submitting = false;
        this.snackBar.open('Post atualizado.', 'Fechar', {
          duration: 2500
        });
        this.router.navigate(['/posts', post.id]);
      },
      error: () => {
        this.submitting = false;
        this.snackBar.open('Falha ao atualizar o post.', 'Fechar', {
          duration: 2500
        });
      }
    });
  }
  static {
    this.ɵfac = function PostEditComponent_Factory(t) {
      return new (t || PostEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_0__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PostEditComponent,
      selectors: [["app-post-edit"]],
      decls: 4,
      vars: 2,
      consts: [["loadingTpl", ""], [1, "post-page"], ["class", "post-card", 4, "ngIf", "ngIfElse"], [1, "post-card"], [3, "save", "title", "submitLabel", "submitting", "initialValue"], [1, "loading"]],
      template: function PostEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PostEditComponent_mat_card_1_Template, 2, 4, "mat-card", 2)(2, PostEditComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const loadingTpl_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", loadingTpl_r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_1__.PostFormComponent],
      styles: [".post-page[_ngcontent-%COMP%] {\n  max-width: 980px;\n  margin: 0 auto;\n  padding: 24px 0 40px;\n}\n\n.post-card[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: none;\n}\n\n.loading[_ngcontent-%COMP%] {\n  color: #6b7280;\n  padding: 16px 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdC1lZGl0L3Bvc3QtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1wYWdlIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI0cHggMCA0MHB4O1xufVxuXG4ucG9zdC1jYXJkIHtcbiAgcGFkZGluZzogMjBweCAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubG9hZGluZyB7XG4gIGNvbG9yOiAjNmI3MjgwO1xuICBwYWRkaW5nOiAxNnB4IDRweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2092:
/*!********************************************************!*\
  !*** ./src/app/posts/post-form/post-form.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostFormComponent: () => (/* binding */ PostFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);











const _c0 = ["contentInput"];
const _c1 = ["attachmentInput"];
function PostFormComponent_mat_checkbox_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostFormComponent_mat_checkbox_66_Template_mat_checkbox_change_0_listener($event) {
      const topic_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.toggleTopic(topic_r3, $event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const topic_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r3.isTopicSelected(topic_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topic_r3, " ");
  }
}
class PostFormComponent {
  constructor(fb) {
    this.fb = fb;
    this.title = 'Novo Post';
    this.submitLabel = 'Publicar post';
    this.submitting = false;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.undoStack = [];
    this.redoStack = [];
    this.topics = ['NSM News', 'NFSe', 'NFCe', 'Notas Tecnicas', 'NFe', 'CTe', 'CS Stats', 'Semanal Growth', 'RH', 'Custo de Infra News', 'MDe', 'MDFe', 'NFCom', 'aSync', 'DCe', 'Ajuste SINIEF', 'Gateway', 'Backend', 'S.I.', 'OKRs', 'Geral', 'Newsletter Clientes', 'Reforma Tributaria'];
    this.form = this.fb.nonNullable.group({
      subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(3)]],
      content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(2000)]],
      topics: this.fb.nonNullable.control([])
    });
  }
  ngOnChanges(changes) {
    if (changes['initialValue'] && this.initialValue) {
      this.form.patchValue({
        subject: this.initialValue.subject,
        content: this.initialValue.content,
        topics: this.initialValue.topics ?? []
      });
      this.undoStack = [];
      this.redoStack = [];
    }
  }
  toggleTopic(topic, checked) {
    const current = this.form.get('topics')?.value ?? [];
    const next = checked ? Array.from(new Set([...current, topic])) : current.filter(item => item !== topic);
    this.form.patchValue({
      topics: next
    });
  }
  isTopicSelected(topic) {
    return (this.form.get('topics')?.value ?? []).includes(topic);
  }
  applyFormat(action) {
    if (action === 'undo') {
      this.undo();
      return;
    }
    if (action === 'redo') {
      this.redo();
      return;
    }
    if (action === 'attach') {
      this.attachmentInput?.nativeElement.click();
      return;
    }
    const textarea = this.contentInput?.nativeElement;
    if (!textarea) {
      return;
    }
    const value = textarea.value;
    const start = textarea.selectionStart ?? value.length;
    const end = textarea.selectionEnd ?? value.length;
    const selected = value.slice(start, end);
    this.undoStack.push(value);
    this.redoStack = [];
    let nextValue = value;
    let nextStart = start;
    let nextEnd = end;
    switch (action) {
      case 'bold':
        ({
          nextValue,
          nextStart,
          nextEnd
        } = this.wrapSelection(value, start, end, '**', '**', 'negrito'));
        break;
      case 'italic':
        ({
          nextValue,
          nextStart,
          nextEnd
        } = this.wrapSelection(value, start, end, '*', '*', 'italico'));
        break;
      case 'strike':
        ({
          nextValue,
          nextStart,
          nextEnd
        } = this.wrapSelection(value, start, end, '~~', '~~', 'riscado'));
        break;
      case 'link':
        ({
          nextValue,
          nextStart,
          nextEnd
        } = this.wrapSelection(value, start, end, '[', '](url)', 'texto'));
        break;
      case 'heading':
        ({
          nextValue,
          nextStart,
          nextEnd
        } = this.prefixLines(value, start, end, '## '));
        break;
      case 'quote':
        ({
          nextValue,
          nextStart,
          nextEnd
        } = this.prefixLines(value, start, end, '> '));
        break;
      case 'code':
        if (selected.includes('\n')) {
          ({
            nextValue,
            nextStart,
            nextEnd
          } = this.wrapSelection(value, start, end, '```\n', '\n```', 'codigo'));
        } else {
          ({
            nextValue,
            nextStart,
            nextEnd
          } = this.wrapSelection(value, start, end, '`', '`', 'codigo'));
        }
        break;
      case 'bulleted':
        ({
          nextValue,
          nextStart,
          nextEnd
        } = this.prefixLines(value, start, end, '- '));
        break;
      case 'numbered':
        ({
          nextValue,
          nextStart,
          nextEnd
        } = this.numberLines(value, start, end));
        break;
      default:
        return;
    }
    this.updateContent(nextValue, nextStart, nextEnd);
  }
  onAttachmentSelected(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0) {
      return;
    }
    const file = input.files[0];
    const textarea = this.contentInput?.nativeElement;
    if (!textarea) {
      return;
    }
    const value = textarea.value;
    const start = textarea.selectionStart ?? value.length;
    const end = textarea.selectionEnd ?? value.length;
    this.undoStack.push(value);
    this.redoStack = [];
    const insert = `[anexo: ${file.name}]`;
    const nextValue = value.slice(0, start) + insert + value.slice(end);
    const cursor = start + insert.length;
    this.updateContent(nextValue, cursor, cursor);
    input.value = '';
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    const value = this.form.getRawValue();
    const payload = {
      subject: value.subject.trim(),
      content: value.content.trim(),
      topics: value.topics
    };
    this.save.emit(payload);
  }
  undo() {
    const current = this.form.get('content')?.value ?? '';
    if (this.undoStack.length === 0) {
      return;
    }
    const previous = this.undoStack.pop() ?? '';
    this.redoStack.push(current);
    this.updateContent(previous, previous.length, previous.length);
  }
  redo() {
    const current = this.form.get('content')?.value ?? '';
    if (this.redoStack.length === 0) {
      return;
    }
    const next = this.redoStack.pop() ?? '';
    this.undoStack.push(current);
    this.updateContent(next, next.length, next.length);
  }
  updateContent(value, selectionStart, selectionEnd) {
    this.form.patchValue({
      content: value
    });
    const textarea = this.contentInput?.nativeElement;
    if (!textarea) {
      return;
    }
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }, 0);
  }
  wrapSelection(value, start, end, prefix, suffix, placeholder) {
    const selection = value.slice(start, end) || placeholder;
    const wrapped = `${prefix}${selection}${suffix}`;
    const nextValue = value.slice(0, start) + wrapped + value.slice(end);
    const cursorStart = start + prefix.length;
    const cursorEnd = cursorStart + selection.length;
    return {
      nextValue,
      nextStart: cursorStart,
      nextEnd: cursorEnd
    };
  }
  prefixLines(value, start, end, prefix) {
    const {
      lineStart,
      lineEnd
    } = this.expandToLines(value, start, end);
    const block = value.slice(lineStart, lineEnd);
    const lines = block.split('\n');
    const prefixed = lines.map(line => line.trim() ? `${prefix}${line}` : line).join('\n');
    const nextValue = value.slice(0, lineStart) + prefixed + value.slice(lineEnd);
    const offset = prefixed.length - block.length;
    return {
      nextValue,
      nextStart: start + prefix.length,
      nextEnd: end + offset
    };
  }
  numberLines(value, start, end) {
    const {
      lineStart,
      lineEnd
    } = this.expandToLines(value, start, end);
    const block = value.slice(lineStart, lineEnd);
    const lines = block.split('\n');
    let index = 1;
    const numbered = lines.map(line => {
      if (!line.trim()) {
        return line;
      }
      const label = `${index}. `;
      index += 1;
      return `${label}${line}`;
    }).join('\n');
    const nextValue = value.slice(0, lineStart) + numbered + value.slice(lineEnd);
    const offset = numbered.length - block.length;
    return {
      nextValue,
      nextStart: start + 3,
      nextEnd: end + offset
    };
  }
  expandToLines(value, start, end) {
    const lineStart = value.lastIndexOf('\n', start - 1) + 1;
    const lineEndIndex = value.indexOf('\n', end);
    const lineEnd = lineEndIndex === -1 ? value.length : lineEndIndex;
    return {
      lineStart,
      lineEnd
    };
  }
  static {
    this.ɵfac = function PostFormComponent_Factory(t) {
      return new (t || PostFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostFormComponent,
      selectors: [["app-post-form"]],
      viewQuery: function PostFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.attachmentInput = _t.first);
        }
      },
      inputs: {
        title: "title",
        submitLabel: "submitLabel",
        submitting: "submitting",
        initialValue: "initialValue"
      },
      outputs: {
        save: "save"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 70,
      vars: 5,
      consts: [["contentInput", ""], ["attachmentInput", ""], [1, "post-form", 3, "ngSubmit", "formGroup"], [1, "form-title"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", "formControlName", "subject"], [1, "content-label"], [1, "editor-toolbar"], [1, "toolbar-group"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["matInput", "", "rows", "6", "formControlName", "content", "placeholder", "Escreva o conteudo do post..."], ["type", "file", "hidden", "", 3, "change"], [1, "topics"], [1, "topics-title"], [1, "topics-grid"], [3, "checked", "change", 4, "ngFor", "ngForOf"], [1, "form-actions"], ["mat-flat-button", "", "color", "primary", 3, "disabled"], [3, "change", "checked"]],
      template: function PostFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostFormComponent_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.submit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3)(2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Assunto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Conteudo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("bold"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "format_bold");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("italic"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "format_italic");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("strike"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "format_strikethrough");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("link"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "link");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8)(27, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("heading"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "format_size");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("quote"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "format_quote");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("code"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("bulleted"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "format_list_bulleted");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("numbered"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "format_list_numbered");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("heading"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "format_align_left");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8)(46, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("attach"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "attach_file");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8)(50, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("undo"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "undo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFormComponent_Template_button_click_53_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.applyFormat("redo"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "redo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "textarea", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 11, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostFormComponent_Template_input_change_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onAttachmentSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12)(63, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Topicos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PostFormComponent_mat_checkbox_66_Template, 2, 2, "mat-checkbox", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16)(68, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topics);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.submitting ? "Salvando..." : ctx.submitLabel, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox],
      styles: [".post-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 22px;\n  font-weight: 700;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.content-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n\n.editor-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 8px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n}\n\n.toolbar-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n\n.toolbar-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 36px;\n  padding: 0;\n}\n\n.topics[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.topics-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.topics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 8px 16px;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9zdHMvcG9zdC1mb3JtL3Bvc3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uZm9ybS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMTExODI3O1xufVxuXG4uZWRpdG9yLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmOWZhZmI7XG59XG5cbi50b29sYmFyLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG59XG5cbi50b29sYmFyLWdyb3VwIGJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMzZweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRvcGljcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTJweDtcbn1cblxuLnRvcGljcy10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRvcGljcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gIGdhcDogOHB4IDE2cHg7XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1975:
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostsModule: () => (/* binding */ PostsModule)
/* harmony export */ });
/* harmony import */ var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-card/post-card.component */ 7884);
/* harmony import */ var _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-form/post-form.component */ 2092);
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-detail/post-detail.component */ 4296);
/* harmony import */ var _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-create/post-create.component */ 7844);
/* harmony import */ var _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-edit/post-edit.component */ 3020);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _comments_comments_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comments/comments.module */ 9349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);








class PostsModule {
  static {
    this.ɵfac = function PostsModule_Factory(t) {
      return new (t || PostsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: PostsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _comments_comments_module__WEBPACK_IMPORTED_MODULE_6__.CommentsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PostsModule, {
    declarations: [_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_0__.PostCardComponent, _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_1__.PostFormComponent, _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_2__.PostDetailComponent, _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__.PostCreateComponent, _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_4__.PostEditComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _comments_comments_module__WEBPACK_IMPORTED_MODULE_6__.CommentsModule],
    exports: [_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_0__.PostCardComponent, _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_1__.PostFormComponent, _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_2__.PostDetailComponent]
  });
})();

/***/ }),

/***/ 300:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4950);










function ProfileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](((tmp_1_0 = ctx_r0.form.get("name")) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.slice(0, 2)) || "U");
  }
}
function ProfileComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 21);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.avatarPreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class ProfileComponent {
  constructor(fb, authService, snackBar) {
    this.fb = fb;
    this.authService = authService;
    this.snackBar = snackBar;
    this.loading = false;
    this.avatarPreview = '';
    this.form = this.fb.nonNullable.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      email: [{
        value: '',
        disabled: true
      }],
      avatarUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(500)]]
    });
  }
  ngOnInit() {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.form.patchValue({
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl || ''
      });
      this.avatarPreview = user.avatarUrl || '';
    }
  }
  onAvatarUrlInput() {
    const url = this.form.get('avatarUrl')?.value?.trim() || '';
    this.avatarPreview = url;
  }
  onFileSelected(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0) {
      return;
    }
    const file = input.files[0];
    if (!file.type.startsWith('image/')) {
      this.snackBar.open('Selecione um arquivo de imagem.', 'Fechar', {
        duration: 2500
      });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      this.avatarPreview = result;
      if (result.length <= 500) {
        this.form.patchValue({
          avatarUrl: result
        });
      } else {
        this.snackBar.open('A API aceita apenas URL da imagem (ate 500 caracteres). Envie a imagem para um CDN e cole o link.', 'Fechar', {
          duration: 3500
        });
      }
    };
    reader.readAsDataURL(file);
  }
  save() {
    if (this.form.invalid) {
      this.snackBar.open('Verifique os campos antes de salvar.', 'Fechar', {
        duration: 2500
      });
      return;
    }
    this.loading = true;
    const value = this.form.getRawValue();
    this.authService.updateProfile({
      name: value.name,
      avatarUrl: value.avatarUrl || undefined
    }).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Perfil atualizado com sucesso.', 'Fechar', {
          duration: 2500
        });
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Falha ao atualizar o perfil.', 'Fechar', {
          duration: 2500
        });
      }
    });
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 39,
      vars: 5,
      consts: [[1, "profile-page"], [1, "profile-card"], [1, "profile-header"], [1, "avatar-wrapper"], ["class", "avatar", 4, "ngIf"], ["alt", "Foto de perfil", 3, "src", 4, "ngIf"], [1, "text-muted"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", "formControlName", "name"], ["matInput", "", "type", "email", "formControlName", "email", "disabled", ""], ["matInput", "", "type", "url", "formControlName", "avatarUrl", "placeholder", "https://cdn.company.local/avatar/usuario.png", 3, "input"], [1, "upload-section"], [1, "upload-label"], [1, "upload-controls"], ["type", "file", "id", "avatarUpload", "hidden", "", 3, "change"], ["for", "avatarUpload", 1, "upload-button"], [1, "actions"], ["mat-flat-button", "", "color", "primary", 3, "disabled"], [1, "avatar"], ["alt", "Foto de perfil", 3, "src"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_div_4_Template, 2, 1, "div", 4)(5, ProfileComponent_img_5_Template, 1, 1, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Editar perfil");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Atualize seus dados e foto para o feed interno.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_11_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "mat-form-field", 9)(14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nome completo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 9)(18, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 9)(22, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "URL da foto de perfil");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ProfileComponent_Template_input_input_24_listener() {
            return ctx.onAvatarUrlInput();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-hint");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Maximo 500 caracteres. O backend nao aceita base64.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13)(28, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Preview rapido");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15)(31, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_31_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Selecionar imagem");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Apenas para previsualizacao local");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18)(37, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.avatarPreview);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.avatarPreview);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Salvando..." : "Salvar alteracoes", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint],
      styles: [".profile-page[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: start center;\n  padding: 24px 16px 64px;\n}\n\n.profile-card[_ngcontent-%COMP%] {\n  width: min(720px, 95vw);\n  padding: 28px;\n}\n\n.profile-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 16px;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.avatar-wrapper[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #eef2ff;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n}\n\n.avatar-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1d4ed8;\n  font-size: 20px;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n\n.upload-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.upload-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  display: block;\n  margin-bottom: 6px;\n}\n\n.upload-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px dashed #cbd5f5;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #1d4ed8;\n}\n\n.actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 720px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .profile-header[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUFBO0VBQ0Y7RUFFQTtJQUNFLDBCQUFBO0VBQUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBhZ2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogc3RhcnQgY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4IDE2cHggNjRweDtcbn1cblxuLnByb2ZpbGUtY2FyZCB7XG4gIHdpZHRoOiBtaW4oNzIwcHgsIDk1dncpO1xuICBwYWRkaW5nOiAyOHB4O1xufVxuXG4ucHJvZmlsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBnYXA6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hdmF0YXItd3JhcHBlciB7XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2VlZjJmZjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmF2YXRhci13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYXZhdGFyIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxZDRlZDg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvcm0tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMTZweDtcbn1cblxuLnVwbG9hZC1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnVwbG9hZC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi51cGxvYWQtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi51cGxvYWQtYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjY2JkNWY1O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxZDRlZDg7XG59XG5cbi5hY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5mb3JtLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnByb2ZpbGUtaGVhZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4219:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileModule: () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ 300);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class ProfileModule {
  static {
    this.ɵfac = function ProfileModule_Factory(t) {
      return new (t || ProfileModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
    exports: [_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent]
  });
})();

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);




class AuthService {
  constructor(http) {
    this.http = http;
    this.tokenKey = 'corpnet_token';
    this.userKey = 'corpnet_user';
    this.profileKey = 'corpnet_profile';
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.getStoredUser());
    this.currentUser$ = this.currentUserSubject.asObservable();
  }
  login(payload) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/login`, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => this.setSession(response, payload.email)));
  }
  register(payload) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/register`, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this.storeProfile(payload)));
  }
  verifyEmail(token) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/verify`, {
      params: {
        token
      }
    });
  }
  updateProfile(payload) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users/me`, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      const currentUser = this.currentUserSubject.value;
      const resolvedAvatar = response.avatarUrl ?? payload.avatarUrl ?? currentUser?.avatarUrl;
      const user = {
        id: String(response.id),
        name: response.name,
        email: response.email,
        avatarUrl: resolvedAvatar ?? undefined
      };
      localStorage.setItem(this.userKey, JSON.stringify(user));
      this.storeProfile({
        name: response.name,
        email: response.email,
        password: ''
      }, user.avatarUrl);
      this.currentUserSubject.next(user);
    }));
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.currentUserSubject.next(null);
  }
  isLoggedIn() {
    return !!this.getToken();
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  setSession(response, email) {
    localStorage.setItem(this.tokenKey, response.token);
    const user = this.buildUser(email);
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  buildUser(email) {
    const storedProfile = this.getStoredProfile();
    const nameFromProfile = storedProfile && storedProfile.email === email ? storedProfile.name : null;
    const avatarFromProfile = storedProfile && storedProfile.email === email ? storedProfile.avatarUrl : undefined;
    const fallbackName = email.split('@')[0] || email;
    return {
      id: email,
      name: nameFromProfile ?? fallbackName,
      email,
      avatarUrl: avatarFromProfile
    };
  }
  storeProfile(payload, avatarUrl) {
    const profile = {
      name: payload.name,
      email: payload.email,
      avatarUrl
    };
    localStorage.setItem(this.profileKey, JSON.stringify(profile));
  }
  getStoredProfile() {
    const stored = localStorage.getItem(this.profileKey);
    if (!stored) {
      return null;
    }
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  getStoredUser() {
    const stored = localStorage.getItem(this.userKey);
    if (!stored) {
      return null;
    }
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 387:
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommentService: () => (/* binding */ CommentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class CommentService {
  constructor(http) {
    this.http = http;
  }
  listByPost(postId) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/comments/${postId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(comments => comments.map(comment => this.mapComment(comment))));
  }
  addComment(postId, payload) {
    const body = {
      postId,
      comment: payload.content
    };
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/comments`, body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(comment => this.mapComment(comment)));
  }
  mapComment(comment) {
    return {
      id: comment.id,
      author: {
        id: String(comment.userId),
        name: comment.authorName,
        email: '',
        avatarUrl: comment.authorAvatarUrl ?? undefined
      },
      content: comment.comment,
      createdAt: comment.createdAt
    };
  }
  static {
    this.ɵfac = function CommentService_Factory(t) {
      return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CommentService,
      factory: CommentService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1032:
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostService: () => (/* binding */ PostService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class PostService {
  constructor(http) {
    this.http = http;
  }
  getFeed() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/posts`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(posts => posts.map(post => this.mapPost(post))));
  }
  getPostById(id) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/posts/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(post => this.mapPost(post)));
  }
  createPost(payload) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/posts`, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(post => this.mapPost(post)));
  }
  updatePost(id, payload) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/posts/${id}`, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(post => this.mapPost(post)));
  }
  deletePost(id) {
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/posts/${id}`);
  }
  mapPost(post) {
    const like = post.likeCount ?? 0;
    const love = post.loveCount ?? 0;
    const wow = post.wowCount ?? 0;
    const haha = post.hahaCount ?? 0;
    return {
      id: post.id,
      author: {
        id: String(post.userId),
        name: post.authorName,
        email: '',
        avatarUrl: post.authorAvatarUrl ?? undefined
      },
      subject: post.subject,
      content: post.content,
      topics: post.topics ?? [],
      createdAt: post.createdAt,
      reactions: {
        like,
        love,
        wow,
        haha
      },
      commentsCount: post.commentsCount ?? 0,
      imageUrl: post.imageUrl ?? undefined
    };
  }
  static {
    this.ɵfac = function PostService_Factory(t) {
      return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PostService,
      factory: PostService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 717:
/*!**********************************************!*\
  !*** ./src/app/services/reaction.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactionService: () => (/* binding */ ReactionService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class ReactionService {
  constructor(http) {
    this.http = http;
  }
  react(postId, type) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/reactions`, {
      postId,
      type
    });
  }
  removeReaction(postId) {
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/reactions/${postId}`);
  }
  static {
    this.ɵfac = function ReactionService_Factory(t) {
      return new (t || ReactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ReactionService,
      factory: ReactionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6295:
/*!*****************************************!*\
  !*** ./src/app/shared/markdown.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownPipe: () => (/* binding */ MarkdownPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class MarkdownPipe {
  transform(value) {
    if (!value) {
      return '';
    }
    const escaped = this.escapeHtml(value);
    const {
      text,
      codeBlocks
    } = this.extractCodeBlocks(escaped);
    const lines = text.split('\n');
    let html = '';
    let inUl = false;
    let inOl = false;
    const closeLists = () => {
      if (inUl) {
        html += '</ul>';
        inUl = false;
      }
      if (inOl) {
        html += '</ol>';
        inOl = false;
      }
    };
    for (const rawLine of lines) {
      const line = rawLine.trimEnd();
      if (!line.trim()) {
        closeLists();
        html += '<br />';
        continue;
      }
      const headingMatch = line.match(/^(#{1,3})\s+(.*)$/);
      if (headingMatch) {
        closeLists();
        const level = headingMatch[1].length;
        const content = this.applyInlineFormatting(headingMatch[2]);
        html += `<h${level}>${content}</h${level}>`;
        continue;
      }
      const quoteMatch = line.match(/^>\s+(.*)$/);
      if (quoteMatch) {
        closeLists();
        const content = this.applyInlineFormatting(quoteMatch[1]);
        html += `<blockquote>${content}</blockquote>`;
        continue;
      }
      const unorderedMatch = line.match(/^[-*]\s+(.*)$/);
      if (unorderedMatch) {
        if (!inUl) {
          closeLists();
          html += '<ul>';
          inUl = true;
        }
        const content = this.applyInlineFormatting(unorderedMatch[1]);
        html += `<li>${content}</li>`;
        continue;
      }
      const orderedMatch = line.match(/^(\d+)\.\s+(.*)$/);
      if (orderedMatch) {
        if (!inOl) {
          closeLists();
          html += '<ol>';
          inOl = true;
        }
        const content = this.applyInlineFormatting(orderedMatch[2]);
        html += `<li>${content}</li>`;
        continue;
      }
      closeLists();
      const content = this.applyInlineFormatting(line);
      html += `<p>${content}</p>`;
    }
    closeLists();
    let rebuilt = html;
    codeBlocks.forEach((block, index) => {
      const token = `@@CODEBLOCK_${index}@@`;
      rebuilt = rebuilt.replace(token, `<pre><code>${block}</code></pre>`);
    });
    return rebuilt;
  }
  extractCodeBlocks(text) {
    const codeBlocks = [];
    let result = text;
    const regex = /```([\s\S]*?)```/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const code = match[1].trim();
      const token = `@@CODEBLOCK_${codeBlocks.length}@@`;
      codeBlocks.push(code);
      result = result.replace(match[0], token);
    }
    return {
      text: result,
      codeBlocks
    };
  }
  applyInlineFormatting(value) {
    let formatted = value;
    formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/~~([^~]+)~~/g, '<del>$1</del>');
    formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      const safeUrl = this.sanitizeUrl(url);
      return `<a href="${safeUrl}" target="_blank" rel="noopener">${text}</a>`;
    });
    return formatted;
  }
  sanitizeUrl(url) {
    const trimmed = url.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    return '#';
  }
  escapeHtml(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  static {
    this.ɵfac = function MarkdownPipe_Factory(t) {
      return new (t || MarkdownPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "markdown",
      type: MarkdownPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 5851:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);













class MaterialModule {
  static {
    this.ɵfac = function MaterialModule_Factory(t) {
      return new (t || MaterialModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDividerModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDividerModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule]
  });
})();

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 5851);
/* harmony import */ var _markdown_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown.pipe */ 6295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_markdown_pipe__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _markdown_pipe__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipe]
  });
})();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 4124);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 635);



_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map