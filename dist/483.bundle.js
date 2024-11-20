"use strict";
(self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || []).push([[483],{

/***/ 483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadRestaurantDetails: () => (/* binding */ loadRestaurantDetails),
/* harmony export */   submitReview: () => (/* binding */ submitReview)
/* harmony export */ });
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(470);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function submitReview(_x) {
  return _submitReview.apply(this, arguments);
}

// Tambahkan fungsi untuk menampilkan toast notification
function _submitReview() {
  _submitReview = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
    var response, responseData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("".concat(_global_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.BASE_URL, "review"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          responseData = _context.sent;
          return _context.abrupt("return", responseData);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          throw new Error('Gagal mengirim review');
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _submitReview.apply(this, arguments);
}
function showToast(message) {
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(function () {
    toast.remove();
  }, 3000);
}

// Tambahkan fungsi untuk mengoptimasi gambar restoran
function getOptimizedImageUrl(pictureId) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'small';
  var sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large'
  };
  return "".concat(_global_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.BASE_IMAGE_URL).concat(sizes[size], "/").concat(pictureId);
}

// Tambahkan fungsi untuk mengecek status favorit
function updateFavoriteButtonState(_x2) {
  return _updateFavoriteButtonState.apply(this, arguments);
}
function _updateFavoriteButtonState() {
  _updateFavoriteButtonState = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(restaurantId) {
    var favoriteButton, isFavorited;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          favoriteButton = document.querySelector('.favorite-btn');
          if (favoriteButton) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return");
        case 4:
          _context2.next = 6;
          return (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__/* .getFavoriteRestaurant */ .eE)(restaurantId);
        case 6:
          isFavorited = _context2.sent;
          // Update tampilan button berdasarkan status
          if (isFavorited) {
            favoriteButton.classList.add('favorited');
            favoriteButton.querySelector('i').className = 'fas fa-heart';
            favoriteButton.setAttribute('aria-label', 'Hapus dari favorit');
          } else {
            favoriteButton.classList.remove('favorited');
            favoriteButton.querySelector('i').className = 'far fa-heart';
            favoriteButton.setAttribute('aria-label', 'Tambah ke favorit');
          }
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error('Error updating favorite button state:', _context2.t0);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return _updateFavoriteButtonState.apply(this, arguments);
}
function loadRestaurantDetails(_x3) {
  return _loadRestaurantDetails.apply(this, arguments);
}
function _loadRestaurantDetails() {
  _loadRestaurantDetails = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
    var response, _yield$response$json, restaurant, imageUrl, favoriteBtn;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return fetch("".concat(_global_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.BASE_URL, "detail/").concat(id));
        case 3:
          response = _context5.sent;
          if (response.ok) {
            _context5.next = 6;
            break;
          }
          throw new Error('Restaurant not found');
        case 6:
          _context5.next = 8;
          return response.json();
        case 8:
          _yield$response$json = _context5.sent;
          restaurant = _yield$response$json.restaurant;
          // Gunakan getOptimizedImageUrl untuk mengoptimalkan gambar
          imageUrl = getOptimizedImageUrl(restaurant.pictureId, 'large');
          document.getElementById('restaurantDetailContainer').innerHTML = "\n      <div class=\"restaurant-detail\">\n        <div class=\"restaurant-header\">\n          <h1 class=\"restaurant-title\">".concat(restaurant.name, "</h1>\n          <div class=\"restaurant-actions\">\n            <div class=\"restaurant-rating\">\u2B50\uFE0F ").concat(restaurant.rating, "</div>\n            <button \n              class=\"favorite-btn\"\n              aria-label=\"Tambah ke favorit\"\n              data-favorite-id=\"").concat(restaurant.id, "\">\n              <i class=\"far fa-heart\"></i>\n            </button>\n          </div>\n        </div>\n        \n        <div class=\"restaurant-main\">\n          <img \n            class=\"restaurant-image lazyload\" \n            src=\"").concat(imageUrl, "\"\n            alt=\"").concat(restaurant.name, "\"\n            loading=\"lazy\"\n          />\n          \n          <div class=\"restaurant-info-grid\">\n            <div class=\"info-card location\">\n              <h3>Lokasi</h3>\n              <p class=\"city\"><i class=\"fas fa-city\"></i> ").concat(restaurant.city, "</p>\n              <p class=\"address\"><i class=\"fas fa-map-marker-alt\"></i> ").concat(restaurant.address, "</p>\n            </div>\n            \n            <div class=\"info-card description\">\n              <h3>Tentang</h3>\n              <p>").concat(restaurant.description, "</p>\n            </div>\n          </div>\n          \n          <div class=\"menu-grid\">\n            <div class=\"menu-card foods\">\n              <h3><i class=\"fas fa-utensils\"></i> Menu Makanan</h3>\n              <ul>\n                ").concat(restaurant.menus.foods.map(function (food) {
            return "<li>".concat(food.name, "</li>");
          }).join(''), "\n              </ul>\n            </div>\n            \n            <div class=\"menu-card drinks\">\n              <h3><i class=\"fas fa-coffee\"></i> Menu Minuman</h3>\n              <ul>\n                ").concat(restaurant.menus.drinks.map(function (drink) {
            return "<li>".concat(drink.name, "</li>");
          }).join(''), "\n              </ul>\n            </div>\n          </div>\n          \n          <div class=\"reviews-section\">\n            <h3><i class=\"fas fa-comments\"></i> Ulasan Pelanggan</h3>\n            \n            <form id=\"reviewForm\" class=\"review-form\">\n              <h4>Tambah Ulasan</h4>\n              <input type=\"hidden\" name=\"id\" value=\"").concat(restaurant.id, "\">\n              <div class=\"form-group\">\n                <label for=\"name\">Nama</label>\n                <input type=\"text\" id=\"name\" name=\"name\" required>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"review\">Ulasan</label>\n                <textarea id=\"review\" name=\"review\" required></textarea>\n              </div>\n              <button type=\"submit\" class=\"submit-review\">Kirim Ulasan</button>\n            </form>\n\n            <div class=\"reviews-container\">\n              ").concat(restaurant.customerReviews.map(function (review) {
            return "\n                <div class=\"review-card\">\n                  <div class=\"review-header\">\n                    <p class=\"review-name\"><i class=\"fas fa-user\"></i> ".concat(review.name, "</p>\n                    <p class=\"review-date\">").concat(review.date, "</p>\n                  </div>\n                  <p class=\"review-text\">").concat(review.review, "</p>\n                </div>\n              ");
          }).join(''), "\n            </div>\n          </div>\n        </div>\n      </div>\n    ");

          // Perbaikan event listener untuk tombol favorit
          favoriteBtn = document.querySelector('.favorite-btn');
          favoriteBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var currentStatus;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__/* .getFavoriteRestaurant */ .eE)(id);
                case 3:
                  currentStatus = _context3.sent;
                  if (!currentStatus) {
                    _context3.next = 13;
                    break;
                  }
                  _context3.next = 7;
                  return (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__/* .removeFavorite */ .Fy)(id);
                case 7:
                  favoriteBtn.classList.remove('favorited');
                  favoriteBtn.querySelector('i').className = 'far fa-heart';
                  favoriteBtn.setAttribute('aria-label', 'Tambah ke favorit');
                  showToast('Dihapus dari favorit');
                  _context3.next = 19;
                  break;
                case 13:
                  _context3.next = 15;
                  return (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__/* .saveRestaurant */ .vu)(restaurant);
                case 15:
                  favoriteBtn.classList.add('favorited');
                  favoriteBtn.querySelector('i').className = 'fas fa-heart';
                  favoriteBtn.setAttribute('aria-label', 'Hapus dari favorit');
                  showToast('Ditambahkan ke favorit');
                case 19:
                  _context3.next = 21;
                  return updateFavoriteButtonState(id);
                case 21:
                  _context3.next = 27;
                  break;
                case 23:
                  _context3.prev = 23;
                  _context3.t0 = _context3["catch"](0);
                  showToast('Gagal mengubah status favorit');
                  console.error('Error toggling favorite:', _context3.t0);
                case 27:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, null, [[0, 23]]);
          })));

          // Inisialisasi status awal
          _context5.next = 16;
          return updateFavoriteButtonState(id);
        case 16:
          // Add event listener for review form
          document.getElementById('reviewForm').addEventListener('submit', /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
              var formData, reviewData;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    e.preventDefault();
                    formData = new FormData(e.target);
                    reviewData = {
                      id: formData.get('id'),
                      name: formData.get('name'),
                      review: formData.get('review')
                    };
                    _context4.prev = 3;
                    _context4.next = 6;
                    return submitReview(reviewData);
                  case 6:
                    _context4.next = 8;
                    return loadRestaurantDetails(restaurant.id);
                  case 8:
                    alert('Review berhasil ditambahkan!');
                    _context4.next = 14;
                    break;
                  case 11:
                    _context4.prev = 11;
                    _context4.t0 = _context4["catch"](3);
                    alert('Gagal menambahkan review');
                  case 14:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, null, [[3, 11]]);
            }));
            return function (_x4) {
              return _ref2.apply(this, arguments);
            };
          }());
          _context5.next = 23;
          break;
        case 19:
          _context5.prev = 19;
          _context5.t0 = _context5["catch"](0);
          console.error('Error loading restaurant details:', _context5.t0);
          throw _context5.t0;
        case 23:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 19]]);
  }));
  return _loadRestaurantDetails.apply(this, arguments);
}

/***/ }),

/***/ 930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fy: () => (/* binding */ removeFavorite),
/* harmony export */   eE: () => (/* binding */ getFavoriteRestaurant),
/* harmony export */   rg: () => (/* binding */ getAllFavorites),
/* harmony export */   vu: () => (/* binding */ saveRestaurant)
/* harmony export */ });
/* unused harmony export openDB */
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(470);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function openDB() {
  return _openDB.apply(this, arguments);
}
function _openDB() {
  _openDB = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            var request = indexedDB.open(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.DATABASE_NAME, _global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.DATABASE_VERSION);
            request.onupgradeneeded = function (event) {
              var db = event.target.result;
              if (!db.objectStoreNames.contains(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.OBJECT_STORE_NAME)) {
                db.createObjectStore(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.OBJECT_STORE_NAME, {
                  keyPath: 'id'
                });
              }
            };
            request.onsuccess = function (event) {
              return resolve(event.target.result);
            };
            request.onerror = function (event) {
              return reject("IndexedDB error: ".concat(event.target.error.message));
            };
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _openDB.apply(this, arguments);
}
function getAllFavorites() {
  return _getAllFavorites.apply(this, arguments);
}
function _getAllFavorites() {
  _getAllFavorites = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var db;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return openDB();
        case 3:
          db = _context2.sent;
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            var transaction = db.transaction(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.OBJECT_STORE_NAME, 'readonly');
            var store = transaction.objectStore(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.OBJECT_STORE_NAME);
            var request = store.getAll();
            request.onsuccess = function () {
              resolve(request.result || []); // Pastikan selalu mengembalikan array
            };
            request.onerror = function () {
              reject(request.error);
            };
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error('Error getting favorites:', _context2.t0);
          return _context2.abrupt("return", []);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getAllFavorites.apply(this, arguments);
}
function saveRestaurant(_x) {
  return _saveRestaurant.apply(this, arguments);
}
function _saveRestaurant() {
  _saveRestaurant = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(restaurant) {
    var db;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return openDB();
        case 3:
          db = _context3.sent;
          return _context3.abrupt("return", new Promise(function (resolve, reject) {
            var transaction = db.transaction(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.OBJECT_STORE_NAME, 'readwrite');
            var store = transaction.objectStore(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.OBJECT_STORE_NAME);
            var request = store.put(restaurant);
            request.onsuccess = function () {
              return resolve();
            };
            request.onerror = function () {
              return reject(request.error);
            };
          }));
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error('Error saving restaurant:', _context3.t0);
          throw _context3.t0;
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _saveRestaurant.apply(this, arguments);
}
function getFavoriteRestaurant(_x2) {
  return _getFavoriteRestaurant.apply(this, arguments);
}
function _getFavoriteRestaurant() {
  _getFavoriteRestaurant = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
    var db;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return openDB();
        case 3:
          db = _context4.sent;
          return _context4.abrupt("return", new Promise(function (resolve, reject) {
            var transaction = db.transaction(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.OBJECT_STORE_NAME, 'readonly');
            var store = transaction.objectStore(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.OBJECT_STORE_NAME);
            var request = store.get(id);
            request.onsuccess = function () {
              resolve(request.result || null);
            };
            request.onerror = function () {
              reject(request.error);
            };
          }));
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error('Error getting favorite restaurant:', _context4.t0);
          return _context4.abrupt("return", null);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _getFavoriteRestaurant.apply(this, arguments);
}
function removeFavorite(_x3) {
  return _removeFavorite.apply(this, arguments);
}
function _removeFavorite() {
  _removeFavorite = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
    var db;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return openDB();
        case 3:
          db = _context5.sent;
          return _context5.abrupt("return", new Promise(function (resolve, reject) {
            var transaction = db.transaction(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.OBJECT_STORE_NAME, 'readwrite');
            var store = transaction.objectStore(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.OBJECT_STORE_NAME);
            var request = store["delete"](id);
            request.onsuccess = function () {
              return resolve();
            };
            request.onerror = function () {
              return reject(request.error);
            };
          }));
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error('Error removing favorite:', _context5.t0);
          throw _context5.t0;
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _removeFavorite.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=483.bundle.js.map