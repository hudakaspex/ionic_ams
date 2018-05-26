webpackJsonp([1],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryAlarmPageModule", function() { return HistoryAlarmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_alarm__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_accordion_module__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HistoryAlarmPageModule = /** @class */ (function () {
    function HistoryAlarmPageModule() {
    }
    HistoryAlarmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__history_alarm__["a" /* HistoryAlarmPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history_alarm__["a" /* HistoryAlarmPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__accordion_accordion_module__["a" /* AccordionModule */]
            ],
            providers: []
        })
    ], HistoryAlarmPageModule);
    return HistoryAlarmPageModule;
}());

//# sourceMappingURL=history-alarm.module.js.map

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

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryAlarmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_public_ip__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loading_loading__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_filter_string_aftr_char_filter_string_aftr_char__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_filter_stringImg_filter_stringImg__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_localstorage_localstorage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_sort_array_sort_array__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HistoryAlarmPage = /** @class */ (function () {
    function HistoryAlarmPage(navCtrl, http, loadingCtrl, filterStrChar, pipeStringImg, modal, event, storage, sortPipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.filterStrChar = filterStrChar;
        this.pipeStringImg = pipeStringImg;
        this.modal = modal;
        this.event = event;
        this.storage = storage;
        this.sortPipe = sortPipe;
        this.dataAlarm = [];
        this.site = [];
        this.startTimeAlarm = 1;
        this.optionSelect = [
            { label: "24 Hours", value: 24, selected: false },
            { label: "12 Hours", value: 12, selected: false },
            { label: "1 Hours", value: 1, selected: false }
        ];
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]("id");
        event.subscribe("notification", function () {
            _this.getHistoryAlarm(false);
        });
    }
    HistoryAlarmPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("site").then(function (site) {
            _this.site = site;
            if (_this.site.length != 0) {
                _this.getHistoryAlarm(false);
            }
        });
    };
    HistoryAlarmPage.prototype.selectedFilter = function (event) {
        this.startTimeAlarm = event;
        this.getHistoryAlarm(true);
        this.setSelectOption();
    };
    HistoryAlarmPage.prototype.setSelectOption = function () {
        for (var i in this.optionSelect) {
            if (this.optionSelect[i]["value"] == this.startTimeAlarm) {
                this.optionSelect[i]["selected"] = true;
            }
        }
    };
    HistoryAlarmPage.prototype.getHistoryAlarm = function (loading) {
        var _this = this;
        var loader = this.loadingCtrl.loading("Please wait");
        if (loading) {
            loader.present().then();
        }
        var date = new Date();
        date.setHours(date.getHours() - this.startTimeAlarm);
        var startDateTime = date.toISOString();
        var endDateTime = new Date().toISOString();
        var latitude = this.site[0]["latitude"];
        var longitude = this.site[0]["longitude"];
        this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__components_public_ip__["a" /* emsDeploy */] + "/api/alarms/log/" + startDateTime + "/" + endDateTime + "/" + latitude + "/" + longitude)
            .subscribe(function (result) {
            _this.dataAlarm = [];
            result = _this.sortPipe.transform(result, "DESC");
            for (var i in result) {
                if (result[i].type == "Security") {
                    var description = _this.filterStrChar.transform(result[i]["description"], ",");
                    var actTime = _this.datePipe.transform(result[i]["actTime"], "yyyy-MM-dd HH:mm:ss a", "+0700");
                    var clearTime = _this.datePipe.transform(result[i]["clearTime"], "yyyy-MM-dd HH:mm:ss a", "+0700");
                    var ackTime = _this.datePipe.transform(result[i]["ackTime"], "yyyy-MM-dd hh:mm:ss a", "+0700");
                    var accordionData = {
                        title: { title: result[i].severity, subtitle: actTime },
                        content: [
                            {
                                Id: result[i].id,
                                "Acknowledge user": result[i].ackUser,
                                "Acknowledge time": ackTime,
                                Description: description,
                                "Clear time": clearTime
                            }
                        ],
                        buttons: [
                            {
                                label: "see image",
                                value: result[i].description,
                                type: "image"
                            }
                        ]
                    };
                    _this.dataAlarm.push(accordionData);
                }
            }
            if (loading) {
                loader.dismiss();
            }
        }, function (err) {
            if (loading) {
                loader.dismiss();
            }
        });
    };
    HistoryAlarmPage.prototype.showModalImage = function (stringImage) {
        var containImage = this.pipeStringImg.transform(stringImage["value"]);
        var modal = this.modal.create("AlarmImagePage", {
            stringJpg: containImage
        });
        modal.present();
    };
    HistoryAlarmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-history-alarm",template:/*ion-inline-start:"/home/satunol/AMS/src/pages/history-alarm/history-alarm.html"*/'<ion-content>\n  <div class="txtCenter" *ngIf="dataAlarm.length==0">\n    <ion-icon name="time-outline" style="font-size:70px;"></ion-icon>\n    <p style="font-size:18px;">No available history</p>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item no-lines>\n          <ion-label>Filter with hours</ion-label>\n          <ion-select [(ngModel)]="startTimeAlarm" (ionChange)="selectedFilter(startTimeAlarm)">\n            <ion-option *ngFor="let option of optionSelect" [value]="option[\'value\']" [selected]="option[\'selected\']">\n              {{option[\'label\']}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-scroll scrollY="true" style="width: 100%; height: 85%;">\n    <page-accordion *ngFor="let i of dataAlarm"\n    [title]="i[\'title\']"\n    [content]="i[\'content\']"\n    [buttons]="i[\'buttons\']"\n    (action)="showModalImage($event)">\n    </page-accordion>\n  </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"/home/satunol/AMS/src/pages/history-alarm/history-alarm.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__components_loading_loading__["a" /* LoadingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_filter_string_aftr_char_filter_string_aftr_char__["a" /* FilterStringAftrCharPipe */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_filter_stringImg_filter_stringImg__["a" /* FilterStringImgPipe */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_9__pipes_sort_array_sort_array__["a" /* SortArrayPipe */]])
    ], HistoryAlarmPage);
    return HistoryAlarmPage;
}());

//# sourceMappingURL=history-alarm.js.map

/***/ })

});
//# sourceMappingURL=1.js.map