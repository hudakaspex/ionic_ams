webpackJsonp([2],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveAlarmPageModule", function() { return ActiveAlarmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__active_alarm__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_accordion_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ActiveAlarmPageModule = /** @class */ (function () {
    function ActiveAlarmPageModule() {
    }
    ActiveAlarmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__active_alarm__["a" /* ActiveAlarmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__active_alarm__["a" /* ActiveAlarmPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__accordion_accordion_module__["a" /* AccordionModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* DirectivesModule */]
            ],
            providers: []
        })
    ], ActiveAlarmPageModule);
    return ActiveAlarmPageModule;
}());

//# sourceMappingURL=active-alarm.module.js.map

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

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionPage */]]
        })
    ], AccordionModule);
    return AccordionModule;
}());

//# sourceMappingURL=accordion.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionPage; });
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



var AccordionPage = /** @class */ (function () {
    function AccordionPage(navCtrl, navParams, renderer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.renderer = renderer;
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.property = [];
        this.expandedCondition = false;
    }
    AccordionPage.prototype.ngOnInit = function () {
        this.expandedCondition = false;
        for (var i in this.content) {
            this.property = Object.keys(this.content[i]);
        }
        this.showDetail();
        this.renderer.setElementStyle(this.cardExpand.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
    };
    AccordionPage.prototype.showDetail = function () {
        if (this.expandedCondition) {
            this.renderer.setElementStyle(this.cardExpand.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.cardExpand.nativeElement, "padding", "10px 16px");
        }
        else {
            this.renderer.setElementStyle(this.cardExpand.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardExpand.nativeElement, "padding", "0px 16px");
        }
        this.expandedCondition = !this.expandedCondition;
    };
    AccordionPage.prototype.outputAction = function (type, value) {
        this.action.emit({ type: type, value: value });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AccordionPage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], AccordionPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], AccordionPage.prototype, "buttons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], AccordionPage.prototype, "action", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("expand"),
        __metadata("design:type", Object)
    ], AccordionPage.prototype, "cardExpand", void 0);
    AccordionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accordion',template:/*ion-inline-start:"/home/satunol/AMS/src/pages/accordion/accordion.html"*/'<ion-card (click)="showDetail()">\n  <ion-card-header no-padding>\n    <ion-list>\n      <ion-item>\n        <ion-icon name="bell-round" item-start [ngClass]="title[\'title\'] == \'CRITICAL\' ? \'critical\' :\n        title[\'label\'] == \'MAJOR\' ? \'major\' : \'warning\'"></ion-icon>\n        <h2 style="font-size:16px;font-weight:bold">{{title[\'title\']}}</h2>\n        <p>{{title[\'subtitle\']}}</p>\n        <button item-end>\n          <ion-icon name="ios-arrow-forward" *ngIf="expandedCondition==true"></ion-icon>\n          <ion-icon name="ios-arrow-down" *ngIf="expandedCondition==false"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-card-header>\n  <ion-card-content #expand>\n    <ion-list *ngFor="let i of content">\n      <ion-item *ngFor="let prop of property">\n        <p>{{prop}} &nbsp;:&nbsp;&nbsp;{{i[prop]}}</p>\n      </ion-item>\n    </ion-list>\n    <ion-item *ngIf="buttons.length!=0">\n      <button round full *ngFor="let button of buttons" item-end ion-button (click)="outputAction(button[\'type\'], button[\'value\'])">\n        {{button[\'label\']}}\n      </button>\n    </ion-item>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/home/satunol/AMS/src/pages/accordion/accordion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionPage);
    return AccordionPage;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveAlarmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_public_ip__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_filter_stringImg_filter_stringImg__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_loading_loading__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_alert_alert__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_sort_array_sort_array__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_filter_string_aftr_char_filter_string_aftr_char__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_localstorage_localstorage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_navigation_nav_controller__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ActiveAlarmPage = /** @class */ (function () {
    function ActiveAlarmPage(http, pipeStringImg, loadingCtrl, sortPipe, event, toastCtrl, pipeStringChar, storage, nav) {
        var _this = this;
        this.http = http;
        this.pipeStringImg = pipeStringImg;
        this.loadingCtrl = loadingCtrl;
        this.sortPipe = sortPipe;
        this.event = event;
        this.toastCtrl = toastCtrl;
        this.pipeStringChar = pipeStringChar;
        this.storage = storage;
        this.nav = nav;
        this.apiImage = __WEBPACK_IMPORTED_MODULE_4__components_public_ip__["a" /* emsDeploy */] + "/api/containers/security/download/";
        this.user = [];
        this.site = [];
        this.dataAlarm = [];
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]('id');
        event.subscribe("notification", function () {
            _this.nav.setRoot('LoginPage');
            _this.getActiveAlarm();
            _this.toast();
        });
    }
    ActiveAlarmPage.prototype.toast = function () {
        var toast = this.toastCtrl.create({
            message: "New notification alarm",
            duration: 1000,
            position: "top"
        });
        toast.present();
    };
    ActiveAlarmPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("securitySite").then(function (user) {
            _this.user = user;
            _this.storage.get("site").then(function (site) {
                _this.site = site;
                if (_this.site.length != 0) {
                    _this.getActiveAlarm();
                }
            });
        });
    };
    ActiveAlarmPage.prototype.getActiveAlarm = function () {
        var _this = this;
        var loading = this.loadingCtrl.loading("Please wait");
        loading.present();
        var latitude = this.site[0]['latitude'];
        var longitude = this.site[0]['longitude'];
        this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__components_public_ip__["a" /* emsDeploy */] + "/api/alarms/" + latitude + "/" + longitude)
            .subscribe(function (result) {
            _this.dataAlarm = [];
            // filter alarm type security
            var alarmsecurity = result.filter(function (type) {
                return type.type == "Security";
            });
            // sort DESC array alarm based on actTime
            alarmsecurity = _this.sortPipe.transform(alarmsecurity, "DESC");
            _this.dataAlarm = alarmsecurity;
            _this.setDataAlarm();
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    ActiveAlarmPage.prototype.setDataAlarm = function () {
        var _this = this;
        this.dataAlarm.forEach(function (alarm) {
            alarm["image"] = _this.pipeStringImg.transform(alarm["description"]);
            alarm["description"] = _this.pipeStringChar.transform(alarm["description"], ",");
            alarm['actTime'] = _this.datePipe.transform(alarm['actTime'], "dd-MM-yyyy hh:mm:ss a", "+0700");
        });
    };
    ActiveAlarmPage.prototype.acknowledgeAlarm = function (idAlarm) {
        var _this = this;
        var loading = this.loadingCtrl.loading("Please wait");
        loading.present();
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__components_public_ip__["a" /* emsDeploy */] + "/api/alarms/acknowledge/" + idAlarm + "/" + this.user[0]["name"], {})
            .subscribe(function (result) {
            loading.dismiss();
            _this.getActiveAlarm();
            loading.onDidDismiss(function () {
                setTimeout(function () {
                    _this.alert.messageAlert({
                        title: "Success",
                        message: "Success to acknowledge alarm"
                    });
                }, 1000);
            });
        }, function (error) {
            loading.dismiss();
            _this.alert.messageAlert({
                title: "Failed",
                message: "Failed to acknowledge alarm"
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("alert"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__components_alert_alert__["a" /* AlertComponent */])
    ], ActiveAlarmPage.prototype, "alert", void 0);
    ActiveAlarmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-active-alarm",template:/*ion-inline-start:"/home/satunol/AMS/src/pages/active-alarm/active-alarm.html"*/'<alert #alert></alert>\n<ion-content>\n  <div class="txtCenter" *ngIf="dataAlarm.length==0">\n    <ion-icon name="bell-outline" style="font-size:65px;"></ion-icon>\n    <p style="font-size:18px;">No available alarm</p>\n  </div>\n  <!-- <ion-list [virtualScroll]="dataAlarm" [approxItemHeight]="\'400px\'" bufferRatio="10"> -->\n    <!-- <div *virtualItem="let i" style="width:100%;"> -->\n      <ion-card *ngFor="let i of dataAlarm">\n        <ion-item>\n          <ion-avatar item-start>\n            <ion-icon name="bell-round" [ngClass]="i[\'severity\'] == \'CRITICAL\' ? \'critical\' :\n          i[\'severity\'] == \'MAJOR\' ? \'major\' : \'warning\'"></ion-icon>\n          </ion-avatar>\n          <h2 style="font-weight:bold">{{i[\'severity\']}}</h2>\n          <p style="font-size:12px; color:rgb(146, 142, 142)">{{i[\'actTime\']}}</p>\n        </ion-item>\n        <img style="height:250px;width:100%" [src]="apiImage+i[\'image\']" [default]="\'assets/imgs/none.jpg\'">\n        <ion-card-content>\n          <p>Description :&nbsp;&nbsp;{{i[\'description\']}}</p>\n          <p>Alarm id :&nbsp;&nbsp;{{i[\'id\']}}</p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-only icon-left small full clear (click)="acknowledgeAlarm(i[\'id\'])">\n              <ion-icon style="font-size:22px;" name="checkmark-circle-outline"></ion-icon>\n              <span>Acknowledge</span>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    <!-- </div> -->\n  <!-- </ion-list> -->\n</ion-content>\n\n\n\n<!-- <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card no-padding *ngFor="let i of dataAlarm">\n          <ion-card-content>\n            <ion-item no-padding>\n              <p style="font-size:20px;font-weight:bold;color:rgb(255, 118, 118)">{{i.severity}}</p>\n              <ion-icon item-end name="acknowledge" style="font-size:40px;color:rgb(38, 125, 255)" (click)="acknowledgeAlarm(i.id)"></ion-icon>\n            </ion-item>\n            <ion-list no-lines>\n              <ion-item no-padding>\n                <ion-icon item-start name="time" style="font-size:25px;"></ion-icon>\n                <p>{{i.actTime}}</p>\n              </ion-item>\n              <ion-item no-padding (click)="modalPresent(i.description)">\n                <ion-icon item-start name="image-outline" style="font-size:25px;"></ion-icon>\n                <p>Images</p>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n'/*ion-inline-end:"/home/satunol/AMS/src/pages/active-alarm/active-alarm.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_filter_stringImg_filter_stringImg__["a" /* FilterStringImgPipe */],
            __WEBPACK_IMPORTED_MODULE_6__components_loading_loading__["a" /* LoadingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pipes_sort_array_sort_array__["a" /* SortArrayPipe */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__pipes_filter_string_aftr_char_filter_string_aftr_char__["a" /* FilterStringAftrCharPipe */],
            __WEBPACK_IMPORTED_MODULE_10__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_11_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], ActiveAlarmPage);
    return ActiveAlarmPage;
}());

//# sourceMappingURL=active-alarm.js.map

/***/ })

});
//# sourceMappingURL=2.js.map