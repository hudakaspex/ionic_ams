webpackJsonp([3],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingComponent.prototype.loadingDuration = function (content, duration) {
        var loading = this.loadingCtrl.create({
            content: content,
            duration: duration
        });
        loading.present();
        return loading;
    };
    LoadingComponent.prototype.loading = function (content) {
        var loading = this.loadingCtrl.create({
            content: content
        });
        return loading;
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'loading',template:/*ion-inline-start:"/home/satunol/AMS/src/components/loading/loading.html"*/'<div class="container" ngClass="{\'busy\': isBusy}">\n  <div class="backdrop"></div>\n  <!-- <ion-spinner></ion-spinner> -->\n</div>'/*ion-inline-end:"/home/satunol/AMS/src/components/loading/loading.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], LoadingComponent);
    return LoadingComponent;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertComponent.prototype.messageAlert = function (alertOption) {
        var alert = this.alertCtrl.create({
            title: alertOption['title'],
            message: alertOption['message'],
            buttons: ['OK']
        }).present();
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alert',
            template: ''
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertComponent);
    return AlertComponent;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_alert__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__alert_alert__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_2__loading_loading__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__logout_logout__["a" /* LogoutComponent */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__alert_alert__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_2__loading_loading__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_4__logout_logout__["a" /* LogoutComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__loading_loading__["a" /* LoadingComponent */],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_localstorage_localstorage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_push_notification_push_notification__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(storage, notification) {
        this.storage = storage;
        this.notification = notification;
    }
    LogoutComponent.prototype.run = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("securitySite")
                .then(function (result) {
                var _loop_1 = function (i) {
                    _this.storage.delete("user", { userId: i["id"] })
                        .then(function (result) {
                        _this.storage.delete("securitySite", { id: i["id"] })
                            .then(function (result) {
                            _this.deleteSecuritySites().then(function (result) {
                                _this.deleteSite().then(function (result) {
                                    resolve(true);
                                })
                                    .catch(function (err) { return reject(err); });
                            })
                                .catch(function (err) { return reject(err); });
                        })
                            .catch(function (err) { reject(err); });
                    })
                        .catch(function (err) { reject(err); });
                };
                for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                    var i = result_1[_i];
                    _loop_1(i);
                }
            })
                .catch(function (err) { return reject(err); });
        });
    };
    LogoutComponent.prototype.deleteSecuritySites = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage
                .get("securitySites")
                .then(function (result) {
                for (var _i = 0, result_2 = result; _i < result_2.length; _i++) {
                    var i = result_2[_i];
                    _this.storage
                        .delete("securitySites", { id: i["id"] })
                        .then(function (result) {
                        resolve(true);
                    })
                        .catch(function (err) { return reject(err); });
                }
            })
                .catch(function (err) { return reject(err); });
        });
    };
    LogoutComponent.prototype.deleteSite = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("site")
                .then(function (result) {
                var _loop_2 = function (i) {
                    _this.notification.unsubscribeTopic(i["label"])
                        .then(function (unsubscribe) {
                        _this.storage.delete("site", { id: i["id"] })
                            .then(function (result) {
                            resolve(true);
                        })
                            .catch(function (err) { return reject(err); });
                    })
                        .catch(function (err) { return reject(err); });
                };
                for (var _i = 0, result_3 = result; _i < result_3.length; _i++) {
                    var i = result_3[_i];
                    _loop_2(i);
                }
            })
                .catch(function (err) { return reject(err); });
        });
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "logout",template:/*ion-inline-start:"/home/satunol/AMS/src/components/logout/logout.html"*/'<!-- Generated template for the LogoutComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/home/satunol/AMS/src/components/logout/logout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_push_notification_push_notification__["a" /* PushNotificationProvider */]])
    ], LogoutComponent);
    return LogoutComponent;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emsDeploy; });
var emsDeploy = "http://ems-protelindo.ddns.net";
// export const emsDevelop: string = "http://alfademo.ddns.net";
//# sourceMappingURL=public_ip.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name Toast
 * @description
 * This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.
 *
 * Requires Cordova plugin: `cordova-plugin-x-toast`. For more info, please see the [Toast plugin docs](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin).
 *
 * @usage
 * ```typescript
 * import { Toast } from '@ionic-native/toast';
 *
 * constructor(private toast: Toast) { }
 *
 * ...
 *
 * this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
 *   toast => {
 *     console.log(toast);
 *   }
 * );
 * ```
 * @interfaces
 * ToastOptions
 */
var Toast = (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Show a native toast for the given duration at the specified position.
     *
     * @param {string} message  The message to display.
     * @param {string} duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
     * @param {string} position  Where to position the toast, either 'top', 'center', or 'bottom'.
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.show = function (message, duration, position) { return; };
    /**
     * Manually hide any currently visible toast.
     * @returns {Promise<any>} Returns a Promise that resolves on success.
     */
    Toast.prototype.hide = function () { return; };
    /**
     * Show a native toast with the given options.
     *
     * @param {Object} options  Options for showing a toast. Available options:
     *   message  The message to display.
     *   duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
     *   position  Where to position the toast, either 'top', 'center', or 'bottom'.
     *   addPixelsY  Offset in pixels to move the toast up or down from its specified position.
     *
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showWithOptions = function (options) { return; };
    /**
     * Shorthand for `show(message, 'short', 'top')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showShortTop = function (message) { return; };
    /**
     * Shorthand for `show(message, 'short', 'center')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showShortCenter = function (message) { return; };
    /**
     * Shorthand for `show(message, 'short', 'bottom')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showShortBottom = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'top')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showLongTop = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'center')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showLongCenter = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'bottom')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showLongBottom = function (message) { return; };
    Toast.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    Toast.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            observable: true,
            clearFunction: 'hide'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Toast.prototype, "show", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Toast.prototype, "hide", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            observable: true,
            clearFunction: 'hide'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Toast.prototype, "showWithOptions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            observable: true,
            clearFunction: 'hide'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Toast.prototype, "showShortTop", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            observable: true,
            clearFunction: 'hide'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Toast.prototype, "showShortCenter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            observable: true,
            clearFunction: 'hide'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Toast.prototype, "showShortBottom", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            observable: true,
            clearFunction: 'hide'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Toast.prototype, "showLongTop", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            observable: true,
            clearFunction: 'hide'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Toast.prototype, "showLongCenter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            observable: true,
            clearFunction: 'hide'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Toast.prototype, "showLongBottom", null);
    Toast = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'Toast',
            plugin: 'cordova-plugin-x-toast',
            pluginRef: 'plugins.toast',
            repo: 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin',
            platforms: ['Android', 'BlackBerry 10', 'iOS', 'Windows', 'Windows Phone 8']
        })
    ], Toast);
    return Toast;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_localstorage_localstorage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_public_ip__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_alert_alert__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_loading_loading__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, formBuilder, toast, platform, http, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.platform = platform;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.header = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]();
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            username: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.form.valueChanges.subscribe(function (result) {
            var controlValidate = ["username", "password"];
            var _loop_1 = function (control) {
                var required = _this.form.get(control).hasError("required");
                var touched = _this.form.get(control).hasError("touched");
                var dirty = _this.form.get(control).dirty;
                if (required && (touched || dirty)) {
                    _this.platform.ready().then(function (ready) {
                        _this.toast
                            .show(control + " is required", "1000", "bottom")
                            .subscribe(function (toast) { });
                    });
                }
            };
            for (var _i = 0, controlValidate_1 = controlValidate; _i < controlValidate_1.length; _i++) {
                var control = controlValidate_1[_i];
                _loop_1(control);
            }
        });
    };
    LoginPage.prototype.onSubmit = function (value) {
        var _this = this;
        this.loading = this.loadingCtrl.loading("Please wait");
        this.loading.present();
        this.header.set("Content-Type", "application/json");
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_7__components_public_ip__["a" /* emsDeploy */] + "/api/securities/login", value, {
            headers: this.header
        })
            .subscribe(function (result) {
            _this.platform.ready().then(function (ready) {
                _this.storage
                    .get("user")
                    .then(function (user) {
                    if (user.length == 0) {
                        _this.storage
                            .insert("user", result, false)
                            .then(function (value) {
                            _this.getSite();
                        })
                            .catch(function (err) {
                            console.log(err);
                        });
                    }
                    else {
                        _this.getSite();
                    }
                })
                    .catch(function (err) {
                    _this.loading.dismiss();
                });
            });
        }, function (err) {
            _this.loading.dismiss();
            _this.loading.onDidDismiss(function () {
                _this.alert.messageAlert({
                    title: "Failed Login",
                    message: "wrong username or password"
                });
            });
        });
    };
    LoginPage.prototype.getSite = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.storage.get("user").then(function (result) {
                if (result.length != 0) {
                    var config = {
                        where: { id: result[0].userId },
                        include: {
                            relation: "securitySites",
                            scope: { include: ["site"] }
                        }
                    };
                    var filter = encodeURIComponent(JSON.stringify(config));
                    var subscribetion_1 = _this.http
                        .get(__WEBPACK_IMPORTED_MODULE_7__components_public_ip__["a" /* emsDeploy */] + "/api/securities/findOne?filter=" + filter)
                        .subscribe(function (user) {
                        _this.setStorage(user)
                            .then(function (result) {
                            _this.loading.dismiss();
                            _this.loading.onDidDismiss(function () {
                                subscribetion_1.unsubscribe();
                                _this.navCtrl.setRoot("TabsPage");
                            });
                        })
                            .catch(function (err) {
                            _this.loading.dismiss();
                        });
                    }, function (err) {
                        _this.loading.dismiss();
                    });
                }
                else {
                    _this.loading.dismiss();
                }
            });
        });
    };
    LoginPage.prototype.setStorage = function (data) {
        var _this = this;
        var site = [];
        var securitySites = [];
        var securitySite = Object.assign({}, {
            id: data["id"],
            email: data["email"],
            emailVerified: data["emailVerified"],
            username: data["username"],
            name: data["name"],
            phone: data["phone"],
            realm: data["realm"]
        });
        data["securitySites"].forEach(function (value) {
            site.push({
                id: value.site["id"],
                district_id: value.site["district_id"],
                discobj_id: value.site["discobj_id"],
                label: value.site["label"],
                address: value.site["address"],
                zoom: value.site["zoom"],
                latitude: value.site["location"].lat,
                longitude: value.site["location"].lng
            });
            securitySites.push({
                id: value["id"],
                security_id: value["security_id"],
                site_id: value["site_id"]
            });
        });
        return new Promise(function (resolve, reject) {
            _this.storage
                .insert("securitySite", securitySite, false)
                .then(function (result) {
                for (var _i = 0, securitySites_1 = securitySites; _i < securitySites_1.length; _i++) {
                    var i = securitySites_1[_i];
                    _this.storage
                        .insert("securitySites", i, false)
                        .then(function (result) {
                        for (var _i = 0, site_1 = site; _i < site_1.length; _i++) {
                            var j = site_1[_i];
                            _this.storage
                                .insert("site", j, false)
                                .then(function (result) {
                                resolve(result);
                            })
                                .catch(function (err) { return reject(err); });
                        }
                    })
                        .catch(function (err) { return reject(err); });
                }
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("alert"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__components_alert_alert__["a" /* AlertComponent */])
    ], LoginPage.prototype, "alert", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/home/satunol/AMS/src/pages/login/login.html"*/'<alert #alert></alert>\n<ion-content padding>\n  <p>E M S</p>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-list>\n          <div [formGroup]="form">\n            <ion-item>\n              <ion-label floating>Username</ion-label>\n              <ion-input type="text" formControlName="username"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Password</ion-label>\n              <ion-input type="password" formControlName="password"></ion-input>\n            </ion-item>\n            <div style="text-align:center;padding-top:40px;padding-left:14px;">\n              <button ion-button round full [disabled]="form.invalid" type="submit" (click)="onSubmit(form.value)">Login</button>\n            </div>\n          </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/satunol/AMS/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_9__components_loading_loading__["a" /* LoadingComponent */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map