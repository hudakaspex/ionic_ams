webpackJsonp([4],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteListPageModule", function() { return SiteListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_list__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SiteListPageModule = /** @class */ (function () {
    function SiteListPageModule() {
    }
    SiteListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__site_list__["a" /* SiteListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site_list__["a" /* SiteListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SiteListPageModule);
    return SiteListPageModule;
}());

//# sourceMappingURL=site-list.module.js.map

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

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_localstorage_localstorage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_public_ip__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_push_notification_push_notification__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_loading_loading__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SiteListPage = /** @class */ (function () {
    function SiteListPage(navCtrl, navParams, http, platform, storage, notification, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.platform = platform;
        this.storage = storage;
        this.notification = notification;
        this.loading = loading;
        this.userList = [];
        this.siteList = [];
    }
    SiteListPage.prototype.ionViewDidLoad = function () {
        this.getListSite();
    };
    SiteListPage.prototype.getListSite = function () {
        var _this = this;
        var loading = this.loading.loading("Please wait");
        loading.present();
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
                    _this.http
                        .get(__WEBPACK_IMPORTED_MODULE_5__components_public_ip__["a" /* emsDeploy */] + "/api/securities/findOne?filter=" + filter)
                        .subscribe(function (user) {
                        loading.dismiss();
                        _this.userList.push(user);
                        user["securitySites"].forEach(function (data) {
                            _this.notification
                                .subscribeTopic(data["site"].label)
                                .then(function (result) { return console.log(result); });
                            _this.siteList.push(data);
                        });
                        _this.getAlarm();
                    }, function (error) {
                        loading.dismiss();
                        _this.navCtrl.setRoot("LoginPage");
                    });
                }
                else {
                    loading.dismiss();
                    _this.navCtrl.setRoot("LoginPage");
                }
            });
        });
    };
    SiteListPage.prototype.getAlarm = function () {
        var _this = this;
        this.userList.forEach(function (user) {
            var _loop_1 = function (loc) {
                var lat = loc["site"].location["lat"];
                var lng = loc["site"].location["lng"];
                _this.http
                    .get(__WEBPACK_IMPORTED_MODULE_5__components_public_ip__["a" /* emsDeploy */] + "/api/alarms/" + lat + "/" + lng)
                    .subscribe(function (result) {
                    var alarmsecurity = result.filter(function (type) {
                        return type.type == "Security";
                    });
                    loc["alarmLength"] = alarmsecurity.length;
                }, function (err) {
                    loc["alarmLength"] = 0;
                    console.log(err);
                });
            };
            for (var _i = 0, _a = user["securitySites"]; _i < _a.length; _i++) {
                var loc = _a[_i];
                _loop_1(loc);
            }
        });
    };
    SiteListPage.prototype.mainPageRoot = function (siteData) {
        for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user["id"] == siteData["security_id"]) {
                var site = user;
                site["securitySites"] = siteData;
                this.navCtrl.push("TabsPage", { site: site });
            }
        }
    };
    SiteListPage.prototype.appLogout = function () {
        var _this = this;
        var loading = this.loading.loadingDuration("Please Wait", 1000);
        this.storage.get("user").then(function (result) {
            for (var i in result) {
                _this.storage.delete("user", { userId: result[i].userId }).then();
                loading.onDidDismiss(function () {
                    _this.navCtrl.setRoot("LoginPage");
                });
            }
        });
        this.siteList.forEach(function (siteList) {
            _this.notification
                .unsubscribeTopic(siteList["site"].label)
                .then(function (result) {
                console.log(result);
            });
        });
    };
    SiteListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-site-list",template:/*ion-inline-start:"/home/satunol/AMS/src/pages/site-list/site-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Site List</ion-title>\n    <ion-buttons icon-only end>\n      <button ion-button (click)="appLogout()">\n        <ion-icon name="ios-exit-outline" style="font-size:32px;"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-group>\n      <button ion-item *ngFor="let i of siteList" (click)="mainPageRoot(i)">\n        <ion-icon name="pin" item-start [ngClass]="i.alarmLength != 0 ? \'bounce-animation\':\'defaultIconPin\'"></ion-icon>\n        <h2>{{i[\'site\'].label}}</h2>\n        <p style="font-size:12px;">{{i[\'site\'].address}}</p>\n        <div item-end style="color:rgb(131, 20, 20)">\n          <sup>{{i.alarmLength}}</sup>\n          <ion-icon name="bell-line" style="font-size:30px;"></ion-icon>\n        </div>\n      </button>\n    </ion-item-group>\n  </ion-list>\n  <div class="txtCenter" *ngIf="siteList.length==0">\n    <ion-icon name="pin" style="font-size:70px;"></ion-icon>\n    <p style="font-size:18px;">No available site</p>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/satunol/AMS/src/pages/site-list/site-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_push_notification_push_notification__["a" /* PushNotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_7__components_loading_loading__["a" /* LoadingComponent */]])
    ], SiteListPage);
    return SiteListPage;
}());

//# sourceMappingURL=site-list.js.map

/***/ })

});
//# sourceMappingURL=4.js.map