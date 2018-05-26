webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalstorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalstorageProvider = /** @class */ (function () {
    function LocalstorageProvider(sqlite) {
        this.sqlite = sqlite;
        this.configTable = [
            {
                table: "user(id INTEGER, created VARCHAR(100), ttl INTEGER, userId INTEGER)"
            },
            {
                table: "securitySite(id INTEGER, email VARCHAR(225), emailVerified VARCHAR(225), username VARCHAR(225), name VARCHAR(225), phone INTEGER, realm VARCHAR(225))"
            },
            {
                table: "site(id INTEGER, district_id INTEGER, discobj_id INTEGER, label VARCHAR(225), address VARCHAR(225), zoom INTEGER, latitude VARCHAR(225), longitude VARCHAR(225))"
            },
            {
                table: "securitySites(id INTEGER, security_id INTEGER, site_id INTEGER)"
            }
        ];
    }
    LocalstorageProvider.prototype.createDatabase = function () {
        var _this = this;
        this.sqlite
            .create({
            name: "amsdb.db",
            location: "default"
        })
            .then(function (db) {
            for (var _i = 0, _a = _this.configTable; _i < _a.length; _i++) {
                var i = _a[_i];
                db.executeSql("CREATE TABLE IF NOT EXISTS " + i["table"], [])
                    .then(function (resultCreate) {
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }
        });
    };
    LocalstorageProvider.prototype.get = function (tableName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite
                .create({
                name: "amsdb.db",
                location: "default"
            })
                .then(function (db) {
                db
                    .executeSql("SELECT * FROM " + tableName, [])
                    .then(function (result) {
                    var value = [];
                    for (var i = 0; i < result.rows.length; i++) {
                        value.push(result.rows.item(i));
                    }
                    resolve(value);
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    LocalstorageProvider.prototype.insert = function (tableName, value, incrementId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite
                .create({
                name: "amsdb.db",
                location: "default"
            })
                .then(function (db) {
                var objectKeys = Object.keys(value);
                var valuesInsert = [];
                var descValues = "";
                for (var i = 0; i < objectKeys.length; i++) {
                    valuesInsert.push(value[objectKeys[i]]);
                    if (i == objectKeys.length - 1) {
                        break;
                    }
                    descValues += "?, ";
                }
                descValues += "?";
                var values;
                if (incrementId) {
                    values = "VALUES(NULL, " + descValues + ")";
                }
                else {
                    values = "VALUES(" + descValues + ")";
                }
                db
                    .executeSql("INSERT INTO " + tableName + " " + values, valuesInsert)
                    .then(function (result) {
                    resolve(result);
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    LocalstorageProvider.prototype.delete = function (tableName, param) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite
                .create({
                name: "amsdb.db",
                location: "default"
            })
                .then(function (db) {
                var propertyId = Object.keys(param);
                db
                    .executeSql("DELETE FROM " + tableName + " WHERE " + (propertyId[0] + "=?"), [param[propertyId[0]]])
                    .then(function (result) {
                    resolve(result);
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    LocalstorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], LocalstorageProvider);
    return LocalstorageProvider;
}());

//# sourceMappingURL=localstorage.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PushNotificationProvider = /** @class */ (function () {
    function PushNotificationProvider(platform, event, fcm) {
        this.platform = platform;
        this.event = event;
        this.fcm = fcm;
    }
    PushNotificationProvider.prototype.regristrationDevice = function () {
        var _this = this;
        this.platform.ready().then(function (ready) {
            _this.fcm.getToken()
                .then(function (token) { })
                .catch(function (err) { return console.log(err); });
            _this.fcm.onNotification().subscribe(function (notification) {
                console.log('notification');
                _this.event.publish("notification");
            }, function (err) { return console.log(err); });
            _this.fcm.onTokenRefresh().subscribe(function (tokenRefresh) {
                // console.log(tokenRefresh);
            });
        });
    };
    PushNotificationProvider.prototype.subscribeTopic = function (topic) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.platform.ready().then(function (ready) {
                _this.fcm.subscribeToTopic(topic).then(function (subscribe) {
                    resolve(subscribe);
                }, function (err) {
                    reject(err);
                    console.log(err);
                });
            });
        });
    };
    PushNotificationProvider.prototype.unsubscribeTopic = function (topic) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.platform.ready().then(function (ready) {
                _this.fcm.unsubscribeFromTopic(topic).then(function (subscribe) {
                    resolve(subscribe);
                }, function (err) {
                    reject(err);
                    console.log(err);
                });
            });
        });
    };
    PushNotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__["a" /* FCM */]])
    ], PushNotificationProvider);
    return PushNotificationProvider;
}());

//# sourceMappingURL=push-notification.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/active-alarm/active-alarm.module": [
		285,
		2
	],
	"../pages/alarm-image/alarm-image.module": [
		286,
		5
	],
	"../pages/history-alarm/history-alarm.module": [
		287,
		1
	],
	"../pages/login/login.module": [
		288,
		3
	],
	"../pages/site-list/site-list.module": [
		289,
		4
	],
	"../pages/tabs/tabs.module": [
		290,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterStringImgPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FilterStringPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FilterStringImgPipe = /** @class */ (function () {
    function FilterStringImgPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FilterStringImgPipe.prototype.transform = function (value) {
        if (value != undefined && value != null) {
            var str = value.split(" ");
            var strImg = str.filter(function (string) {
                var myRegexp = /[^/]+(jpg|png|gif)$/;
                var match = myRegexp.exec(string);
                if (match != null) {
                    if (string == match[0]) {
                        return string;
                    }
                }
            });
            return strImg[0];
        }
    };
    FilterStringImgPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: "filterString"
        })
    ], FilterStringImgPipe);
    return FilterStringImgPipe;
}());

//# sourceMappingURL=filter-stringImg.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortArrayPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortArrayPipe = /** @class */ (function () {
    function SortArrayPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortArrayPipe.prototype.transform = function (value, type) {
        var result;
        if (value != undefined && value != null) {
            if (type == "DESC") {
                result = value.sort(function (a, b) {
                    if (a.actTime > b.actTime)
                        return -1;
                    else if (a.actTime < b.actTime)
                        return 1;
                    else
                        return 0;
                });
            }
            else {
                result = value.sort(function (a, b) {
                    if (a.actTime < b.actTime)
                        return -1;
                    else if (a.actTime > b.actTime)
                        return 1;
                    else
                        return 0;
                });
            }
            return result;
        }
    };
    SortArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: "sortArray"
        })
    ], SortArrayPipe);
    return SortArrayPipe;
}());

//# sourceMappingURL=sort-array.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterStringAftrCharPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FilterStringAftrSymbolPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FilterStringAftrCharPipe = /** @class */ (function () {
    function FilterStringAftrCharPipe() {
    }
    FilterStringAftrCharPipe.prototype.transform = function (value, char) {
        if (value != undefined && value != null) {
            return value.substr(0, value.indexOf(char));
        }
    };
    FilterStringAftrCharPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: "filterStringAftrSymbol"
        })
    ], FilterStringAftrCharPipe);
    return FilterStringAftrCharPipe;
}());

//# sourceMappingURL=filter-string-aftr-char.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_image_directive__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__img_image_directive__["a" /* ImgDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__img_image_directive__["a" /* ImgDirective */]],
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_locales_id__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_fcm__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_push_notification_push_notification__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_localstorage_localstorage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_filter_stringImg_filter_stringImg__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_filter_string_aftr_char_filter_string_aftr_char__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_str_spit_join_str_spit_join__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_sort_array_sort_array__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















Object(__WEBPACK_IMPORTED_MODULE_6__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_7__angular_common_locales_id__["a" /* default */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    scrollPadding: true,
                    scrollAssist: true,
                    autoFocusAssist: true
                }, {
                    links: [
                        { loadChildren: '../pages/active-alarm/active-alarm.module#ActiveAlarmPageModule', name: 'ActiveAlarmPage', segment: 'active-alarm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alarm-image/alarm-image.module#AlarmImagePageModule', name: 'AlarmImagePage', segment: 'alarm-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history-alarm/history-alarm.module#HistoryAlarmPageModule', name: 'HistoryAlarmPage', segment: 'history-alarm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/site-list/site-list.module#SiteListPageModule', name: 'SiteListPage', segment: 'site-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* DirectivesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_filter_stringImg_filter_stringImg__["a" /* FilterStringImgPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_filter_string_aftr_char_filter_string_aftr_char__["a" /* FilterStringAftrCharPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_str_spit_join_str_spit_join__["a" /* StrSpitJoinPipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_sort_array_sort_array__["a" /* SortArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_12__providers_push_notification_push_notification__["a" /* PushNotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_fcm__["a" /* FCM */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_locales_id__["a" /* default */], useValue: "id" }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImgDirective = /** @class */ (function () {
    function ImgDirective() {
    }
    ImgDirective.prototype.updateUrl = function () {
        this.src = this.default;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ImgDirective.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ImgDirective.prototype, "default", void 0);
    ImgDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            // tslint:disable-next-line:directive-selector
            selector: 'img[default]',
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '(error)': 'updateUrl()',
                '[src]': 'src'
            }
        })
    ], ImgDirective);
    return ImgDirective;
}());

//# sourceMappingURL=image.directive.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_localstorage_localstorage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_push_notification_push_notification__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, notification) {
        var _this = this;
        this.platform = platform;
        this.storage = storage;
        this.notification = notification;
        platform.ready().then(function () {
            _this.storage.createDatabase();
            _this.notification.regristrationDevice();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.backgroundColorByHexString("#4881ff");
            statusBar.styleLightContent();
            splashScreen.hide();
            _this.storage.get("user").then(function (user) {
                _this.storage
                    .get("site")
                    .then(function (site) {
                    if (user.length == 0 || site.length == 0) {
                        _this.rootPage = "LoginPage";
                    }
                    else {
                        _this.rootPage = "TabsPage";
                    }
                })
                    .catch(function (err) {
                    _this.rootPage = "LoginPage";
                });
            })
                .catch(function (err) {
                _this.rootPage = "LoginPage";
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/satunol/AMS/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/satunol/AMS/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_localstorage_localstorage__["a" /* LocalstorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_push_notification_push_notification__["a" /* PushNotificationProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrSpitJoinPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the StrSpitJoinPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var StrSpitJoinPipe = /** @class */ (function () {
    function StrSpitJoinPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    StrSpitJoinPipe.prototype.transform = function (value, split, join) {
        if (value != undefined && value != null) {
            return value.split(split).join(join);
        }
    };
    StrSpitJoinPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: "strSpitJoin"
        })
    ], StrSpitJoinPipe);
    return StrSpitJoinPipe;
}());

//# sourceMappingURL=str-spit-join.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map