/*!Picture Delayed Loading*/ 
! function(a, b) {
	"function" == typeof define && define.amd ? define(function() {
		return b(a)
	}) : "object" == typeof exports ? module.exports = b : a.echo = b(a)
}(this, function(a) {
	"use strict";
	var d, e, f, g, h, b = {},
		c = function() {},
		i = function(a) {
			return null === a.offsetParent
		},
		j = function(a, b) {
			if (i(a)) return !1;
			var c = a.getBoundingClientRect();
			return c.right >= b.l && c.bottom >= b.t && c.left <= b.r && c.top <= b.b
		},
		k = function() {
			(g || !e) && (clearTimeout(e), e = setTimeout(function() {
				b.render(), e = null
			}, f))
		};
	return b.init = function(e) {
		var i, j, l, m;
		e = e || {}, i = e.offset || 0, j = e.offsetVertical || i, l = e.offsetHorizontal || i, m = function(a, b) {
			return parseInt(a || b, 10)
		}, d = {
			t: m(e.offsetTop, j),
			b: m(e.offsetBottom, j),
			l: m(e.offsetLeft, l),
			r: m(e.offsetRight, l)
		}, f = m(e.throttle, 250), g = e.debounce !== !1, h = !!e.unload, c = e.callback || c, b.render(), document.addEventListener ? (a.addEventListener("scroll", k, !1), a.addEventListener("load", k, !1)) : (a.attachEvent("onscroll", k), a.attachEvent("onload", k))
	}, b.render = function(e) {
		var i, k, m, f = (e || document)
			.querySelectorAll("[data-original], [data-echo-background]"),
			g = f.length,
			l = {
				l: 0 - d.l,
				t: 0 - d.t,
				b: (a.innerHeight || document.documentElement.clientHeight) + d.b,
				r: (a.innerWidth || document.documentElement.clientWidth) + d.r
			};
		for (m = 0; g > m; m++) k = f[m], j(k, l) ? (h && k.setAttribute("data-echo-placeholder", k.src), null !== k.getAttribute("data-echo-background") ? k.style.backgroundImage = "url(" + k.getAttribute("data-echo-background") + ")" : k.src !== (i = k.getAttribute("data-original")) && (k.src = i), h || (k.removeAttribute("data-original"), k.removeAttribute("data-echo-background")), c(k, "load")) : h && (i = k.getAttribute("data-echo-placeholder")) && (null !== k.getAttribute("data-echo-background") ? k.style.backgroundImage = "url(" + i + ")" : k.src = i, k.removeAttribute("data-echo-placeholder"), c(k, "unload"));
		g || b.detach()
	}, b.detach = function() {
		document.removeEventListener ? a.removeEventListener("scroll", k) : a.detachEvent("onscroll", k), clearTimeout(e)
	}, b
});
(jQuery); /*!clipboard.js v1.7.1*/
! function(t) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
	else if ("function" == typeof define && define.amd) define([], t);
	else {
		var e;
		e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Clipboard = t()
	}
}(function() {
	var t, e, n;
	return function t(e, n, o) {
		function i(a, c) {
			if (!n[a]) {
				if (!e[a]) {
					var l = "function" == typeof require && require;
					if (!c && l) return l(a, !0);
					if (r) return r(a, !0);
					var s = new Error("Cannot find module '" + a + "'");
					throw s.code = "MODULE_NOT_FOUND", s
				}
				var u = n[a] = {
					exports: {}
				};
				e[a][0].call(u.exports, function(t) {
					var n = e[a][1][t];
					return i(n || t)
				}, u, u.exports, t, e, n, o)
			}
			return n[a].exports
		}
		for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
		return i
	}({
		1: [function(t, e, n) {
			function o(t, e) {
				for (; t && t.nodeType !== i;) {
					if ("function" == typeof t.matches && t.matches(e)) return t;
					t = t.parentNode
				}
			}
			var i = 9;
			if ("undefined" != typeof Element && !Element.prototype.matches) {
				var r = Element.prototype;
				r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
			}
			e.exports = o
		}, {}],
		2: [function(t, e, n) {
			function o(t, e, n, o, r) {
				var a = i.apply(this, arguments);
				return t.addEventListener(n, a, r), {
					destroy: function() {
						t.removeEventListener(n, a, r)
					}
				}
			}

			function i(t, e, n, o) {
				return function(n) {
					n.delegateTarget = r(n.target, e), n.delegateTarget && o.call(t, n)
				}
			}
			var r = t("./closest");
			e.exports = o
		}, {
			"./closest": 1
		}],
		3: [function(t, e, n) {
			n.node = function(t) {
				return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
			}, n.nodeList = function(t) {
				var e = Object.prototype.toString.call(t);
				return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
			}, n.string = function(t) {
				return "string" == typeof t || t instanceof String
			}, n.fn = function(t) {
				return "[object Function]" === Object.prototype.toString.call(t)
			}
		}, {}],
		4: [function(t, e, n) {
			function o(t, e, n) {
				if (!t && !e && !n) throw new Error("Missing required arguments");
				if (!c.string(e)) throw new TypeError("Second argument must be a String");
				if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
				if (c.node(t)) return i(t, e, n);
				if (c.nodeList(t)) return r(t, e, n);
				if (c.string(t)) return a(t, e, n);
				throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
			}

			function i(t, e, n) {
				return t.addEventListener(e, n), {
					destroy: function() {
						t.removeEventListener(e, n)
					}
				}
			}

			function r(t, e, n) {
				return Array.prototype.forEach.call(t, function(t) {
					t.addEventListener(e, n)
				}), {
					destroy: function() {
						Array.prototype.forEach.call(t, function(t) {
							t.removeEventListener(e, n)
						})
					}
				}
			}

			function a(t, e, n) {
				return l(document.body, t, e, n)
			}
			var c = t("./is"),
				l = t("delegate");
			e.exports = o
		}, {
			"./is": 3,
			delegate: 2
		}],
		5: [function(t, e, n) {
			function o(t) {
				var e;
				if ("SELECT" === t.nodeName) t.focus(), e = t.value;
				else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
					var n = t.hasAttribute("readonly");
					n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
				} else {
					t.hasAttribute("contenteditable") && t.focus();
					var o = window.getSelection(),
						i = document.createRange();
					i.selectNodeContents(t), o.removeAllRanges(), o.addRange(i), e = o.toString()
				}
				return e
			}
			e.exports = o
		}, {}],
		6: [function(t, e, n) {
			function o() {}
			o.prototype = {
				on: function(t, e, n) {
					var o = this.e || (this.e = {});
					return (o[t] || (o[t] = []))
						.push({
							fn: e,
							ctx: n
						}), this
				},
				once: function(t, e, n) {
					function o() {
						i.off(t, o), e.apply(n, arguments)
					}
					var i = this;
					return o._ = e, this.on(t, o, n)
				},
				emit: function(t) {
					var e = [].slice.call(arguments, 1),
						n = ((this.e || (this.e = {}))[t] || [])
						.slice(),
						o = 0,
						i = n.length;
					for (o; o < i; o++) n[o].fn.apply(n[o].ctx, e);
					return this
				},
				off: function(t, e) {
					var n = this.e || (this.e = {}),
						o = n[t],
						i = [];
					if (o && e)
						for (var r = 0, a = o.length; r < a; r++) o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
					return i.length ? n[t] = i : delete n[t], this
				}
			}, e.exports = o
		}, {}],
		7: [function(e, n, o) {
			! function(i, r) {
				if ("function" == typeof t && t.amd) t(["module", "select"], r);
				else if (void 0 !== o) r(n, e("select"));
				else {
					var a = {
						exports: {}
					};
					r(a, i.select), i.clipboardAction = a.exports
				}
			}(this, function(t, e) {
				"use strict";

				function n(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function o(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}
				var i = n(e),
					r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					},
					a = function() {
						function t(t, e) {
							for (var n = 0; n < e.length; n++) {
								var o = e[n];
								o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
							}
						}
						return function(e, n, o) {
							return n && t(e.prototype, n), o && t(e, o), e
						}
					}(),
					c = function() {
						function t(e) {
							o(this, t), this.resolveOptions(e), this.initSelection()
						}
						return a(t, [{
							key: "resolveOptions",
							value: function t() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
							}
						}, {
							key: "initSelection",
							value: function t() {
								this.text ? this.selectFake() : this.target && this.selectTarget()
							}
						}, {
							key: "selectFake",
							value: function t() {
								var e = this,
									n = "rtl" == document.documentElement.getAttribute("dir");
								this.removeFake(), this.fakeHandlerCallback = function() {
									return e.removeFake()
								}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[n ? "right" : "left"] = "-9999px";
								var o = window.pageYOffset || document.documentElement.scrollTop;
								this.fakeElem.style.top = o + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText()
							}
						}, {
							key: "removeFake",
							value: function t() {
								this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
							}
						}, {
							key: "selectTarget",
							value: function t() {
								this.selectedText = (0, i.default)(this.target), this.copyText()
							}
						}, {
							key: "copyText",
							value: function t() {
								var e = void 0;
								try {
									e = document.execCommand(this.action)
								} catch (t) {
									e = !1
								}
								this.handleResult(e)
							}
						}, {
							key: "handleResult",
							value: function t(e) {
								this.emitter.emit(e ? "success" : "error", {
									action: this.action,
									text: this.selectedText,
									trigger: this.trigger,
									clearSelection: this.clearSelection.bind(this)
								})
							}
						}, {
							key: "clearSelection",
							value: function t() {
								this.trigger && this.trigger.focus(), window.getSelection()
									.removeAllRanges()
							}
						}, {
							key: "destroy",
							value: function t() {
								this.removeFake()
							}
						}, {
							key: "action",
							set: function t() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
								if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
							},
							get: function t() {
								return this._action
							}
						}, {
							key: "target",
							set: function t(e) {
								if (void 0 !== e) {
									if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
									if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
									if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
									this._target = e
								}
							},
							get: function t() {
								return this._target
							}
						}]), t
					}();
				t.exports = c
			})
		}, {
			select: 5
		}],
		8: [function(e, n, o) {
			! function(i, r) {
				if ("function" == typeof t && t.amd) t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r);
				else if (void 0 !== o) r(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
				else {
					var a = {
						exports: {}
					};
					r(a, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = a.exports
				}
			}(this, function(t, e, n, o) {
				"use strict";

				function i(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function r(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function a(t, e) {
					if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !e || "object" != typeof e && "function" != typeof e ? t : e
				}

				function c(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}

				function l(t, e) {
					var n = "data-clipboard-" + t;
					if (e.hasAttribute(n)) return e.getAttribute(n)
				}
				var s = i(e),
					u = i(n),
					f = i(o),
					d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					},
					h = function() {
						function t(t, e) {
							for (var n = 0; n < e.length; n++) {
								var o = e[n];
								o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
							}
						}
						return function(e, n, o) {
							return n && t(e.prototype, n), o && t(e, o), e
						}
					}(),
					p = function(t) {
						function e(t, n) {
							r(this, e);
							var o = a(this, (e.__proto__ || Object.getPrototypeOf(e))
								.call(this));
							return o.resolveOptions(n), o.listenClick(t), o
						}
						return c(e, t), h(e, [{
							key: "resolveOptions",
							value: function t() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === d(e.container) ? e.container : document.body
							}
						}, {
							key: "listenClick",
							value: function t(e) {
								var n = this;
								this.listener = (0, f.default)(e, "click", function(t) {
									return n.onClick(t)
								})
							}
						}, {
							key: "onClick",
							value: function t(e) {
								var n = e.delegateTarget || e.currentTarget;
								this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s.default({
									action: this.action(n),
									target: this.target(n),
									text: this.text(n),
									container: this.container,
									trigger: n,
									emitter: this
								})
							}
						}, {
							key: "defaultAction",
							value: function t(e) {
								return l("action", e)
							}
						}, {
							key: "defaultTarget",
							value: function t(e) {
								var n = l("target", e);
								if (n) return document.querySelector(n)
							}
						}, {
							key: "defaultText",
							value: function t(e) {
								return l("text", e)
							}
						}, {
							key: "destroy",
							value: function t() {
								this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
							}
						}], [{
							key: "isSupported",
							value: function t() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
									n = "string" == typeof e ? [e] : e,
									o = !!document.queryCommandSupported;
								return n.forEach(function(t) {
									o = o && !!document.queryCommandSupported(t)
								}), o
							}
						}]), e
					}(u.default);
				t.exports = p
			})
		}, {
			"./clipboard-action": 7,
			"good-listener": 4,
			"tiny-emitter": 6
		}]
	}, {}, [8])(8)
});

function killerrors() {
	return !0
}
if (window.onerror = killerrors, void 0 == document.getElementById("body-header-top") || void 0 == document.getElementById("footer-boot")) throw SyntaxError(); /*!qrcode*/
(function(r) {
	r.fn.qrcode = function(h) {
		var s;

		function u(a) {
			this.mode = s;
			this.data = a
		}

		function o(a, c) {
			this.typeNumber = a;
			this.errorCorrectLevel = c;
			this.modules = null;
			this.moduleCount = 0;
			this.dataCache = null;
			this.dataList = []
		}

		function q(a, c) {
			if (void 0 == a.length) throw Error(a.length + "/" + c);
			for (var d = 0; d < a.length && 0 == a[d];) d++;
			this.num = Array(a.length - d + c);
			for (var b = 0; b < a.length - d; b++) this.num[b] = a[b + d]
		}

		function p(a, c) {
			this.totalCount = a;
			this.dataCount = c
		}

		function t() {
			this.buffer = [];
			this.length = 0
		}
		u.prototype = {
			getLength: function() {
				return this.data.length
			},
			write: function(a) {
				for (var c = 0; c < this.data.length; c++) a.put(this.data.charCodeAt(c), 8)
			}
		};
		o.prototype = {
			addData: function(a) {
				this.dataList.push(new u(a));
				this.dataCache = null
			},
			isDark: function(a, c) {
				if (0 > a || this.moduleCount <= a || 0 > c || this.moduleCount <= c) throw Error(a + "," + c);
				return this.modules[a][c]
			},
			getModuleCount: function() {
				return this.moduleCount
			},
			make: function() {
				if (1 > this.typeNumber) {
					for (var a = 1, a = 1; 40 > a; a++) {
						for (var c = p.getRSBlocks(a, this.errorCorrectLevel), d = new t, b = 0, e = 0; e < c.length; e++) b += c[e].dataCount;
						for (e = 0; e < this.dataList.length; e++) c = this.dataList[e], d.put(c.mode, 4), d.put(c.getLength(), j.getLengthInBits(c.mode, a)), c.write(d);
						if (d.getLengthInBits() <= 8 * b) break
					}
					this.typeNumber = a
				}
				this.makeImpl(!1, this.getBestMaskPattern())
			},
			makeImpl: function(a, c) {
				this.moduleCount = 4 * this.typeNumber + 17;
				this.modules = Array(this.moduleCount);
				for (var d = 0; d < this.moduleCount; d++) {
					this.modules[d] = Array(this.moduleCount);
					for (var b = 0; b < this.moduleCount; b++) this.modules[d][b] = null
				}
				this.setupPositionProbePattern(0, 0);
				this.setupPositionProbePattern(this.moduleCount -
					7, 0);
				this.setupPositionProbePattern(0, this.moduleCount - 7);
				this.setupPositionAdjustPattern();
				this.setupTimingPattern();
				this.setupTypeInfo(a, c);
				7 <= this.typeNumber && this.setupTypeNumber(a);
				null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
				this.mapData(this.dataCache, c)
			},
			setupPositionProbePattern: function(a, c) {
				for (var d = -1; 7 >= d; d++)
					if (!(-1 >= a + d || this.moduleCount <= a + d))
						for (var b = -1; 7 >= b; b++) - 1 >= c + b || this.moduleCount <= c + b || (this.modules[a + d][c + b] = 0 <= d && 6 >= d && (0 == b || 6 == b) || 0 <= b && 6 >= b && (0 == d || 6 == d) || 2 <= d && 4 >= d && 2 <= b && 4 >= b ? !0 : !1)
			},
			getBestMaskPattern: function() {
				for (var a = 0, c = 0, d = 0; 8 > d; d++) {
					this.makeImpl(!0, d);
					var b = j.getLostPoint(this);
					if (0 == d || a > b) a = b, c = d
				}
				return c
			},
			createMovieClip: function(a, c, d) {
				a = a.createEmptyMovieClip(c, d);
				this.make();
				for (c = 0; c < this.modules.length; c++)
					for (var d = 1 * c, b = 0; b < this.modules[c].length; b++) {
						var e = 1 * b;
						this.modules[c][b] && (a.beginFill(0, 100), a.moveTo(e, d), a.lineTo(e + 1, d), a.lineTo(e + 1, d + 1), a.lineTo(e, d + 1), a.endFill())
					}
				return a
			},
			setupTimingPattern: function() {
				for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
				for (a = 8; a < this.moduleCount - 8; a++) null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
			},
			setupPositionAdjustPattern: function() {
				for (var a = j.getPatternPosition(this.typeNumber), c = 0; c < a.length; c++)
					for (var d = 0; d < a.length; d++) {
						var b = a[c],
							e = a[d];
						if (null == this.modules[b][e])
							for (var f = -2; 2 >= f; f++)
								for (var i = -2; 2 >= i; i++) this.modules[b + f][e + i] = -2 == f || 2 == f || -2 == i || 2 == i || 0 == f && 0 == i ? !0 : !1
					}
			},
			setupTypeNumber: function(a) {
				for (var c = j.getBCHTypeNumber(this.typeNumber), d = 0; 18 > d; d++) {
					var b = !a && 1 == (c >> d & 1);
					this.modules[Math.floor(d / 3)][d % 3 + this.moduleCount - 8 - 3] = b
				}
				for (d = 0; 18 > d; d++) b = !a && 1 == (c >> d & 1), this.modules[d % 3 + this.moduleCount - 8 - 3][Math.floor(d / 3)] = b
			},
			setupTypeInfo: function(a, c) {
				for (var d = j.getBCHTypeInfo(this.errorCorrectLevel << 3 | c), b = 0; 15 > b; b++) {
					var e = !a && 1 == (d >> b & 1);
					6 > b ? this.modules[b][8] = e : 8 > b ? this.modules[b + 1][8] = e : this.modules[this.moduleCount - 15 + b][8] = e
				}
				for (b = 0; 15 > b; b++) e = !a && 1 == (d >> b & 1), 8 > b ? this.modules[8][this.moduleCount -
					b - 1
				] = e : 9 > b ? this.modules[8][15 - b - 1 + 1] = e : this.modules[8][15 - b - 1] = e;
				this.modules[this.moduleCount - 8][8] = !a
			},
			mapData: function(a, c) {
				for (var d = -1, b = this.moduleCount - 1, e = 7, f = 0, i = this.moduleCount - 1; 0 < i; i -= 2)
					for (6 == i && i--;;) {
						for (var g = 0; 2 > g; g++)
							if (null == this.modules[b][i - g]) {
								var n = !1;
								f < a.length && (n = 1 == (a[f] >>> e & 1));
								j.getMask(c, b, i - g) && (n = !n);
								this.modules[b][i - g] = n;
								e--; - 1 == e && (f++, e = 7)
							} b += d;
						if (0 > b || this.moduleCount <= b) {
							b -= d;
							d = -d;
							break
						}
					}
			}
		};
		o.PAD0 = 236;
		o.PAD1 = 17;
		o.createData = function(a, c, d) {
			for (var c = p.getRSBlocks(a, c), b = new t, e = 0; e < d.length; e++) {
				var f = d[e];
				b.put(f.mode, 4);
				b.put(f.getLength(), j.getLengthInBits(f.mode, a));
				f.write(b)
			}
			for (e = a = 0; e < c.length; e++) a += c[e].dataCount;
			if (b.getLengthInBits() > 8 * a) throw Error("code length overflow. (" + b.getLengthInBits() + ">" + 8 * a + ")");
			for (b.getLengthInBits() + 4 <= 8 * a && b.put(0, 4); 0 != b.getLengthInBits() % 8;) b.putBit(!1);
			for (; !(b.getLengthInBits() >= 8 * a);) {
				b.put(o.PAD0, 8);
				if (b.getLengthInBits() >= 8 * a) break;
				b.put(o.PAD1, 8)
			}
			return o.createBytes(b, c)
		};
		o.createBytes = function(a, c) {
			for (var d = 0, b = 0, e = 0, f = Array(c.length), i = Array(c.length), g = 0; g < c.length; g++) {
				var n = c[g].dataCount,
					h = c[g].totalCount - n,
					b = Math.max(b, n),
					e = Math.max(e, h);
				f[g] = Array(n);
				for (var k = 0; k < f[g].length; k++) f[g][k] = 255 & a.buffer[k + d];
				d += n;
				k = j.getErrorCorrectPolynomial(h);
				n = (new q(f[g], k.getLength() - 1))
					.mod(k);
				i[g] = Array(k.getLength() - 1);
				for (k = 0; k < i[g].length; k++) h = k + n.getLength() - i[g].length, i[g][k] = 0 <= h ? n.get(h) : 0
			}
			for (k = g = 0; k < c.length; k++) g += c[k].totalCount;
			d = Array(g);
			for (k = n = 0; k < b; k++)
				for (g = 0; g < c.length; g++) k < f[g].length && (d[n++] = f[g][k]);
			for (k = 0; k < e; k++)
				for (g = 0; g < c.length; g++) k < i[g].length && (d[n++] = i[g][k]);
			return d
		};
		s = 4;
		for (var j = {
			PATTERN_POSITION_TABLE: [
				[],
				[6, 18],
				[6, 22],
				[6, 26],
				[6, 30],
				[6, 34],
				[6, 22, 38],
				[6, 24, 42],
				[6, 26, 46],
				[6, 28, 50],
				[6, 30, 54],
				[6, 32, 58],
				[6, 34, 62],
				[6, 26, 46, 66],
				[6, 26, 48, 70],
				[6, 26, 50, 74],
				[6, 30, 54, 78],
				[6, 30, 56, 82],
				[6, 30, 58, 86],
				[6, 34, 62, 90],
				[6, 28, 50, 72, 94],
				[6, 26, 50, 74, 98],
				[6, 30, 54, 78, 102],
				[6, 28, 54, 80, 106],
				[6, 32, 58, 84, 110],
				[6, 30, 58, 86, 114],
				[6, 34, 62, 90, 118],
				[6, 26, 50, 74, 98, 122],
				[6, 30, 54, 78, 102, 126],
				[6, 26, 52, 78, 104, 130],
				[6, 30, 56, 82, 108, 134],
				[6, 34, 60, 86, 112, 138],
				[6, 30, 58, 86, 114, 142],
				[6, 34, 62, 90, 118, 146],
				[6, 30, 54, 78, 102, 126, 150],
				[6, 24, 50, 76, 102, 128, 154],
				[6, 28, 54, 80, 106, 132, 158],
				[6, 32, 58, 84, 110, 136, 162],
				[6, 26, 54, 82, 110, 138, 166],
				[6, 30, 58, 86, 114, 142, 170]
			],
			G15: 1335,
			G18: 7973,
			G15_MASK: 21522,
			getBCHTypeInfo: function(a) {
				for (var c = a << 10; 0 <= j.getBCHDigit(c) - j.getBCHDigit(j.G15);) c ^= j.G15 << j.getBCHDigit(c) - j.getBCHDigit(j.G15);
				return (a << 10 | c) ^ j.G15_MASK
			},
			getBCHTypeNumber: function(a) {
				for (var c = a << 12; 0 <= j.getBCHDigit(c) -
					j.getBCHDigit(j.G18);) c ^= j.G18 << j.getBCHDigit(c) - j.getBCHDigit(j.G18);
				return a << 12 | c
			},
			getBCHDigit: function(a) {
				for (var c = 0; 0 != a;) c++, a >>>= 1;
				return c
			},
			getPatternPosition: function(a) {
				return j.PATTERN_POSITION_TABLE[a - 1]
			},
			getMask: function(a, c, d) {
				switch (a) {
					case 0:
						return 0 == (c + d) % 2;
					case 1:
						return 0 == c % 2;
					case 2:
						return 0 == d % 3;
					case 3:
						return 0 == (c + d) % 3;
					case 4:
						return 0 == (Math.floor(c / 2) + Math.floor(d / 3)) % 2;
					case 5:
						return 0 == c * d % 2 + c * d % 3;
					case 6:
						return 0 == (c * d % 2 + c * d % 3) % 2;
					case 7:
						return 0 == (c * d % 3 + (c + d) % 2) % 2;
					default:
						throw Error("bad maskPattern:" +
							a);
				}
			},
			getErrorCorrectPolynomial: function(a) {
				for (var c = new q([1], 0), d = 0; d < a; d++) c = c.multiply(new q([1, l.gexp(d)], 0));
				return c
			},
			getLengthInBits: function(a, c) {
				if (1 <= c && 10 > c) switch (a) {
					case 1:
						return 10;
					case 2:
						return 9;
					case s:
						return 8;
					case 8:
						return 8;
					default:
						throw Error("mode:" + a);
				} else if (27 > c) switch (a) {
					case 1:
						return 12;
					case 2:
						return 11;
					case s:
						return 16;
					case 8:
						return 10;
					default:
						throw Error("mode:" + a);
				} else if (41 > c) switch (a) {
					case 1:
						return 14;
					case 2:
						return 13;
					case s:
						return 16;
					case 8:
						return 12;
					default:
						throw Error("mode:" +
							a);
				} else throw Error("type:" + c);
			},
			getLostPoint: function(a) {
				for (var c = a.getModuleCount(), d = 0, b = 0; b < c; b++)
					for (var e = 0; e < c; e++) {
						for (var f = 0, i = a.isDark(b, e), g = -1; 1 >= g; g++)
							if (!(0 > b + g || c <= b + g))
								for (var h = -1; 1 >= h; h++) 0 > e + h || c <= e + h || 0 == g && 0 == h || i == a.isDark(b + g, e + h) && f++;
						5 < f && (d += 3 + f - 5)
					}
				for (b = 0; b < c - 1; b++)
					for (e = 0; e < c - 1; e++)
						if (f = 0, a.isDark(b, e) && f++, a.isDark(b + 1, e) && f++, a.isDark(b, e + 1) && f++, a.isDark(b + 1, e + 1) && f++, 0 == f || 4 == f) d += 3;
				for (b = 0; b < c; b++)
					for (e = 0; e < c - 6; e++) a.isDark(b, e) && !a.isDark(b, e + 1) && a.isDark(b, e +
						2) && a.isDark(b, e + 3) && a.isDark(b, e + 4) && !a.isDark(b, e + 5) && a.isDark(b, e + 6) && (d += 40);
				for (e = 0; e < c; e++)
					for (b = 0; b < c - 6; b++) a.isDark(b, e) && !a.isDark(b + 1, e) && a.isDark(b + 2, e) && a.isDark(b + 3, e) && a.isDark(b + 4, e) && !a.isDark(b + 5, e) && a.isDark(b + 6, e) && (d += 40);
				for (e = f = 0; e < c; e++)
					for (b = 0; b < c; b++) a.isDark(b, e) && f++;
				a = Math.abs(100 * f / c / c - 50) / 5;
				return d + 10 * a
			}
		}, l = {
			glog: function(a) {
				if (1 > a) throw Error("glog(" + a + ")");
				return l.LOG_TABLE[a]
			},
			gexp: function(a) {
				for (; 0 > a;) a += 255;
				for (; 256 <= a;) a -= 255;
				return l.EXP_TABLE[a]
			},
			EXP_TABLE: Array(256),
			LOG_TABLE: Array(256)
		}, m = 0; 8 > m; m++) l.EXP_TABLE[m] = 1 << m;
		for (m = 8; 256 > m; m++) l.EXP_TABLE[m] = l.EXP_TABLE[m - 4] ^ l.EXP_TABLE[m - 5] ^ l.EXP_TABLE[m - 6] ^ l.EXP_TABLE[m - 8];
		for (m = 0; 255 > m; m++) l.LOG_TABLE[l.EXP_TABLE[m]] = m;
		q.prototype = {
			get: function(a) {
				return this.num[a]
			},
			getLength: function() {
				return this.num.length
			},
			multiply: function(a) {
				for (var c = Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++)
					for (var b = 0; b < a.getLength(); b++) c[d + b] ^= l.gexp(l.glog(this.get(d)) + l.glog(a.get(b)));
				return new q(c, 0)
			},
			mod: function(a) {
				if (0 > this.getLength() - a.getLength()) return this;
				for (var c = l.glog(this.get(0)) - l.glog(a.get(0)), d = Array(this.getLength()), b = 0; b < this.getLength(); b++) d[b] = this.get(b);
				for (b = 0; b < a.getLength(); b++) d[b] ^= l.gexp(l.glog(a.get(b)) + c);
				return (new q(d, 0))
					.mod(a)
			}
		};
		p.RS_BLOCK_TABLE = [
			[1, 26, 19],
			[1, 26, 16],
			[1, 26, 13],
			[1, 26, 9],
			[1, 44, 34],
			[1, 44, 28],
			[1, 44, 22],
			[1, 44, 16],
			[1, 70, 55],
			[1, 70, 44],
			[2, 35, 17],
			[2, 35, 13],
			[1, 100, 80],
			[2, 50, 32],
			[2, 50, 24],
			[4, 25, 9],
			[1, 134, 108],
			[2, 67, 43],
			[2, 33, 15, 2, 34, 16],
			[2, 33, 11, 2, 34, 12],
			[2, 86, 68],
			[4, 43, 27],
			[4, 43, 19],
			[4, 43, 15],
			[2, 98, 78],
			[4, 49, 31],
			[2, 32, 14, 4, 33, 15],
			[4, 39, 13, 1, 40, 14],
			[2, 121, 97],
			[2, 60, 38, 2, 61, 39],
			[4, 40, 18, 2, 41, 19],
			[4, 40, 14, 2, 41, 15],
			[2, 146, 116],
			[3, 58, 36, 2, 59, 37],
			[4, 36, 16, 4, 37, 17],
			[4, 36, 12, 4, 37, 13],
			[2, 86, 68, 2, 87, 69],
			[4, 69, 43, 1, 70, 44],
			[6, 43, 19, 2, 44, 20],
			[6, 43, 15, 2, 44, 16],
			[4, 101, 81],
			[1, 80, 50, 4, 81, 51],
			[4, 50, 22, 4, 51, 23],
			[3, 36, 12, 8, 37, 13],
			[2, 116, 92, 2, 117, 93],
			[6, 58, 36, 2, 59, 37],
			[4, 46, 20, 6, 47, 21],
			[7, 42, 14, 4, 43, 15],
			[4, 133, 107],
			[8, 59, 37, 1, 60, 38],
			[8, 44, 20, 4, 45, 21],
			[12, 33, 11, 4, 34, 12],
			[3, 145, 115, 1, 146, 116],
			[4, 64, 40, 5, 65, 41],
			[11, 36, 16, 5, 37, 17],
			[11, 36, 12, 5, 37, 13],
			[5, 109, 87, 1, 110, 88],
			[5, 65, 41, 5, 66, 42],
			[5, 54, 24, 7, 55, 25],
			[11, 36, 12],
			[5, 122, 98, 1, 123, 99],
			[7, 73, 45, 3, 74, 46],
			[15, 43, 19, 2, 44, 20],
			[3, 45, 15, 13, 46, 16],
			[1, 135, 107, 5, 136, 108],
			[10, 74, 46, 1, 75, 47],
			[1, 50, 22, 15, 51, 23],
			[2, 42, 14, 17, 43, 15],
			[5, 150, 120, 1, 151, 121],
			[9, 69, 43, 4, 70, 44],
			[17, 50, 22, 1, 51, 23],
			[2, 42, 14, 19, 43, 15],
			[3, 141, 113, 4, 142, 114],
			[3, 70, 44, 11, 71, 45],
			[17, 47, 21, 4, 48, 22],
			[9, 39, 13, 16, 40, 14],
			[3, 135, 107, 5, 136, 108],
			[3, 67, 41, 13, 68, 42],
			[15, 54, 24, 5, 55, 25],
			[15, 43, 15, 10, 44, 16],
			[4, 144, 116, 4, 145, 117],
			[17, 68, 42],
			[17, 50, 22, 6, 51, 23],
			[19, 46, 16, 6, 47, 17],
			[2, 139, 111, 7, 140, 112],
			[17, 74, 46],
			[7, 54, 24, 16, 55, 25],
			[34, 37, 13],
			[4, 151, 121, 5, 152, 122],
			[4, 75, 47, 14, 76, 48],
			[11, 54, 24, 14, 55, 25],
			[16, 45, 15, 14, 46, 16],
			[6, 147, 117, 4, 148, 118],
			[6, 73, 45, 14, 74, 46],
			[11, 54, 24, 16, 55, 25],
			[30, 46, 16, 2, 47, 17],
			[8, 132, 106, 4, 133, 107],
			[8, 75, 47, 13, 76, 48],
			[7, 54, 24, 22, 55, 25],
			[22, 45, 15, 13, 46, 16],
			[10, 142, 114, 2, 143, 115],
			[19, 74, 46, 4, 75, 47],
			[28, 50, 22, 6, 51, 23],
			[33, 46, 16, 4, 47, 17],
			[8, 152, 122, 4, 153, 123],
			[22, 73, 45, 3, 74, 46],
			[8, 53, 23, 26, 54, 24],
			[12, 45, 15, 28, 46, 16],
			[3, 147, 117, 10, 148, 118],
			[3, 73, 45, 23, 74, 46],
			[4, 54, 24, 31, 55, 25],
			[11, 45, 15, 31, 46, 16],
			[7, 146, 116, 7, 147, 117],
			[21, 73, 45, 7, 74, 46],
			[1, 53, 23, 37, 54, 24],
			[19, 45, 15, 26, 46, 16],
			[5, 145, 115, 10, 146, 116],
			[19, 75, 47, 10, 76, 48],
			[15, 54, 24, 25, 55, 25],
			[23, 45, 15, 25, 46, 16],
			[13, 145, 115, 3, 146, 116],
			[2, 74, 46, 29, 75, 47],
			[42, 54, 24, 1, 55, 25],
			[23, 45, 15, 28, 46, 16],
			[17, 145, 115],
			[10, 74, 46, 23, 75, 47],
			[10, 54, 24, 35, 55, 25],
			[19, 45, 15, 35, 46, 16],
			[17, 145, 115, 1, 146, 116],
			[14, 74, 46, 21, 75, 47],
			[29, 54, 24, 19, 55, 25],
			[11, 45, 15, 46, 46, 16],
			[13, 145, 115, 6, 146, 116],
			[14, 74, 46, 23, 75, 47],
			[44, 54, 24, 7, 55, 25],
			[59, 46, 16, 1, 47, 17],
			[12, 151, 121, 7, 152, 122],
			[12, 75, 47, 26, 76, 48],
			[39, 54, 24, 14, 55, 25],
			[22, 45, 15, 41, 46, 16],
			[6, 151, 121, 14, 152, 122],
			[6, 75, 47, 34, 76, 48],
			[46, 54, 24, 10, 55, 25],
			[2, 45, 15, 64, 46, 16],
			[17, 152, 122, 4, 153, 123],
			[29, 74, 46, 14, 75, 47],
			[49, 54, 24, 10, 55, 25],
			[24, 45, 15, 46, 46, 16],
			[4, 152, 122, 18, 153, 123],
			[13, 74, 46, 32, 75, 47],
			[48, 54, 24, 14, 55, 25],
			[42, 45, 15, 32, 46, 16],
			[20, 147, 117, 4, 148, 118],
			[40, 75, 47, 7, 76, 48],
			[43, 54, 24, 22, 55, 25],
			[10, 45, 15, 67, 46, 16],
			[19, 148, 118, 6, 149, 119],
			[18, 75, 47, 31, 76, 48],
			[34, 54, 24, 34, 55, 25],
			[20, 45, 15, 61, 46, 16]
		];
		p.getRSBlocks = function(a, c) {
			var d = p.getRsBlockTable(a, c);
			if (void 0 == d) throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + c);
			for (var b = d.length / 3, e = [], f = 0; f < b; f++)
				for (var h = d[3 * f + 0], g = d[3 * f + 1], j = d[3 * f + 2], l = 0; l < h; l++) e.push(new p(g, j));
			return e
		};
		p.getRsBlockTable = function(a, c) {
			switch (c) {
				case 1:
					return p.RS_BLOCK_TABLE[4 * (a - 1) + 0];
				case 0:
					return p.RS_BLOCK_TABLE[4 * (a - 1) + 1];
				case 3:
					return p.RS_BLOCK_TABLE[4 * (a - 1) + 2];
				case 2:
					return p.RS_BLOCK_TABLE[4 * (a - 1) + 3]
			}
		};
		t.prototype = {
			get: function(a) {
				return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
			},
			put: function(a, c) {
				for (var d = 0; d < c; d++) this.putBit(1 == (a >>> c - d - 1 & 1))
			},
			getLengthInBits: function() {
				return this.length
			},
			putBit: function(a) {
				var c = Math.floor(this.length / 8);
				this.buffer.length <= c && this.buffer.push(0);
				a && (this.buffer[c] |= 128 >>> this.length % 8);
				this.length++
			}
		};
		"string" === typeof h && (h = {
			text: h
		});
		h = r.extend({}, {
			render: "canvas",
			width: 256,
			height: 256,
			typeNumber: -1,
			correctLevel: 2,
			background: "#ffffff",
			foreground: "#000000"
		}, h);
		return this.each(function() {
			var a;
			if ("canvas" == h.render) {
				a = new o(h.typeNumber, h.correctLevel);
				a.addData(h.text);
				a.make();
				var c = document.createElement("canvas");
				c.width = h.width;
				c.height = h.height;
				for (var d = c.getContext("2d"), b = h.width / a.getModuleCount(), e = h.height / a.getModuleCount(), f = 0; f < a.getModuleCount(); f++)
					for (var i = 0; i < a.getModuleCount(); i++) {
						d.fillStyle = a.isDark(f, i) ? h.foreground : h.background;
						var g = Math.ceil((i + 1) * b) - Math.floor(i * b),
							j = Math.ceil((f + 1) * b) - Math.floor(f * b);
						d.fillRect(Math.round(i * b), Math.round(f * e), g, j)
					}
			} else {
				a = new o(h.typeNumber, h.correctLevel);
				a.addData(h.text);
				a.make();
				c = r("<table></table>")
					.css("width", h.width + "px")
					.css("height", h.height + "px")
					.css("border", "0px")
					.css("border-collapse", "collapse")
					.css("background-color", h.background);
				d = h.width / a.getModuleCount();
				b = h.height / a.getModuleCount();
				for (e = 0; e < a.getModuleCount(); e++) {
					f = r("<tr></tr>")
						.css("height", b + "px")
						.appendTo(c);
					for (i = 0; i < a.getModuleCount(); i++) r("<td></td>")
						.css("width", d + "px")
						.css("background-color", a.isDark(e, i) ? h.foreground : h.background)
						.appendTo(f)
				}
			}
			a = c;
			jQuery(a)
				.appendTo(this)
		})
	}
})(jQuery); /*!Page Smooth Jump*/
function CX_Scroll(a) {
	document.getElementById(a) ? $("#" + a)
		.HoverTreeScroll(1e3) : window.wxc.xcConfirm("由于页面设置权限，无法定位到下载模块，请确认是否看以查看页面全部内容！", "error")
}
jQuery.getPos = function(a) {
	for (var b = 0, c = 0, d = jQuery.intval(jQuery.css(a, "width")), e = jQuery.intval(jQuery.css(a, "height")), f = a.offsetWidth, g = a.offsetHeight; a.offsetParent;) b += a.offsetLeft + (a.currentStyle ? jQuery.intval(a.currentStyle.borderLeftWidth) : 0), c += a.offsetTop + (a.currentStyle ? jQuery.intval(a.currentStyle.borderTopWidth) : 0), a = a.offsetParent;
	return b += a.offsetLeft + (a.currentStyle ? jQuery.intval(a.currentStyle.borderLeftWidth) : 0), c += a.offsetTop + (a.currentStyle ? jQuery.intval(a.currentStyle.borderTopWidth) : 0), c -= 30, {
		x: b,
		y: c,
		w: d,
		h: e,
		wb: f,
		hb: g
	}
}, jQuery.getClient = function(a) {
	return a ? (w = a.clientWidth, h = a.clientHeight) : (w = window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.offsetWidth, h = window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight), {
		w: w,
		h: h
	}
}, jQuery.getScroll = function(a) {
	return a ? (t = a.scrollTop, l = a.scrollLeft, w = a.scrollWidth, h = a.scrollHeight) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop, l = document.documentElement.scrollLeft, w = document.documentElement.scrollWidth, h = document.documentElement.scrollHeight) : document.body && (t = document.body.scrollTop, l = document.body.scrollLeft, w = document.body.scrollWidth, h = document.body.scrollHeight), {
		t: t,
		l: l,
		w: w,
		h: h
	}
}, jQuery.intval = function(a) {
	return a = parseInt(a), isNaN(a) ? 0 : a
}, jQuery.fn.HoverTreeScroll = function(a) {
	return o = jQuery.speed(a), this.each(function() {
		new jQuery.fx.HoverTreeScroll(this, o)
	})
}, jQuery.fx.HoverTreeScroll = function(a, b) {
	var c = this;
	c.o = b, c.e = a, c.p = jQuery.getPos(a), c.s = jQuery.getScroll(), c.clear = function() {
			clearInterval(c.timer), c.timer = null
		}, c.t = (new Date)
		.getTime(), c.step = function() {
			var a = (new Date)
				.getTime(),
				b = (a - c.t) / c.o.duration;
			a >= c.o.duration + c.t ? (c.clear(), setTimeout(function() {
				c.scroll(c.p.y, c.p.x)
			}, 13)) : (st = (-Math.cos(b * Math.PI) / 2 + .5) * (c.p.y - c.s.t) + c.s.t, sl = (-Math.cos(b * Math.PI) / 2 + .5) * (c.p.x - c.s.l) + c.s.l, c.scroll(st, sl))
		}, c.scroll = function(a, b) {
			window.scrollTo(b, a)
		}, c.timer = setInterval(function() {
			c.step()
		}, 13)
};
! function(a) {
	function i(a, b, c, d, e, f) {
		var g, h, i, j, k, l, m;
		for (a += "", g = 0, h = 0, i = a.length, j = "", k = 0; i > h;) {
			for (l = a.charCodeAt(h), l = 256 > l ? c[l] : -1, g = (g << e) + l, k += e; k >= f;) k -= f, m = g >> k, j += d.charAt(m), g ^= m << k;
			++h
		}
		return !b && k > 0 && (j += d.charAt(g << f - k)), j
	}
	for (var h, j, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = "", d = [256], e = [256], f = 0, g = {
		encode: function(a) {
			var b = a.replace(/[\u0080-\u07ff]/g, function(a) {
					var b = a.charCodeAt(0);
					return String.fromCharCode(192 | b >> 6, 128 | 63 & b)
				})
				.replace(/[\u0800-\uffff]/g, function(a) {
					var b = a.charCodeAt(0);
					return String.fromCharCode(224 | b >> 12, 128 | 63 & b >> 6, 128 | 63 & b)
				});
			return b
		},
		decode: function(a) {
			var b = a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(a) {
					var b = (15 & a.charCodeAt(0)) << 12 | (63 & a.charCodeAt(1)) << 6 | 63 & a.charCodeAt(2);
					return String.fromCharCode(b)
				})
				.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(a) {
					var b = (31 & a.charCodeAt(0)) << 6 | 63 & a.charCodeAt(1);
					return String.fromCharCode(b)
				});
			return b
		}
	}; 256 > f;) h = String.fromCharCode(f), c += h, e[f] = f, d[f] = b.indexOf(h), ++f;
	j = a.CxJM = function(a, b, c) {
		return b ? j[a](b, c) : a ? null : this
	}, j.btoa = j.encode = function(a, c) {
		return a = j.raw === !1 || j.utf8encode || c ? g.encode(a) : a, a = i(a, !1, e, b, 8, 6), a + "====".slice(a.length % 4 || 4)
	}, j.atob = j.decode = function(a, b) {
		a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""), a = (a + "")
			.split("=");
		var e = a.length;
		do --e, a[e] = i(a[e], !0, d, c, 6, 8); while (e > 0);
		return a = a.join(""), j.raw === !1 || j.utf8decode || b ? g.decode(a) : a
	}
}(jQuery); /*!Owl Carousel*/
! function(a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		}, this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		}, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
			this._handlers[c] = a.proxy(this[c], this)
		}, this)), a.each(e.Plugins, a.proxy(function(a, b) {
			this._plugins[a.charAt(0)
				.toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Workers, a.proxy(function(b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}
	e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		checkVisibility: !0,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		fallbackEasing: "swing",
		slideTransition: "",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, e.Type = {
		Event: "event",
		State: "state"
	}, e.Plugins = {}, e.Workers = [{
		filter: ["width", "settings"],
		run: function() {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			this.$stage.children(".cloned")
				.remove()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = this.settings.margin || "",
				c = !this.settings.autoWidth,
				d = this.settings.rtl,
				e = {
					width: "auto",
					"margin-left": d ? b : "",
					"margin-right": d ? "" : b
				};
			!c && this.$stage.children()
				.css(e), a.css = e
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = (this.width() / this.settings.items)
				.toFixed(3) - this.settings.margin,
				c = null,
				d = this._items.length,
				e = !this.settings.autoWidth,
				f = [];
			for (a.items = {
				merge: !1,
				width: b
			}; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
			this._widths = f
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			var b = [],
				c = this._items,
				d = this.settings,
				e = Math.max(2 * d.items, 4),
				f = 2 * Math.ceil(c.length / 2),
				g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
				h = "",
				i = "";
			for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
			this._clones = b, a(h)
				.addClass("cloned")
				.appendTo(this.$stage), a(i)
				.addClass("cloned")
				.prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
			this._coordinates = f
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			var a = this.settings.stagePadding,
				b = this._coordinates,
				c = {
					width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
					"padding-left": a || "",
					"padding-right": a || ""
				};
			this.$stage.css(c)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			var b = this._coordinates.length,
				c = !this.settings.autoWidth,
				d = this.$stage.children();
			if (c && a.items.merge)
				for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b)
					.css(a.css);
			else c && (a.css.width = a.items.width, d.css(a.css))
		}
	}, {
		filter: ["items"],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(a) {
			a.current = a.current ? this.$stage.children()
				.index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
		}
	}, {
		filter: ["position"],
		run: function() {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function() {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1,
				f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f,
				h = g + this.width() * e,
				i = [];
			for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children(".active")
				.removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")")
				.addClass("active"), this.$stage.children(".center")
				.removeClass("center"), this.settings.center && this.$stage.children()
				.eq(this.current())
				.addClass("center")
		}
	}], e.prototype.initializeStage = function() {
		this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
				class: this.settings.stageClass
			})
			.wrap(a("<div/>", {
				class: this.settings.stageOuterClass
			})), this.$element.append(this.$stage.parent()))
	}, e.prototype.initializeItems = function() {
		var b = this.$element.find(".owl-item");
		if (b.length) return this._items = b.get()
			.map(function(b) {
				return a(b)
			}), this._mergers = this._items.map(function() {
				return 1
			}), void this.refresh();
		this.replace(this.$element.children()
				.not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass)
	}, e.prototype.initialize = function() {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var a, b, c;
			a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b)
				.width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
		}
		this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, e.prototype.isVisible = function() {
		return !this.settings.checkVisibility || this.$element.is(":visible")
	}, e.prototype.setup = function() {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c ? (a.each(c, function(a) {
			a <= b && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class")
			.replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, e.prototype.optionsLogic = function() {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function(b) {
		var c = this.trigger("prepare", {
			content: b
		});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>")
			.addClass(this.options.itemClass)
			.append(b)), this.trigger("prepared", {
			content: c.data
		}), c.data
	}, e.prototype.update = function() {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
			return this[a]
		}, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d)
			.length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, e.prototype.width = function(a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function() {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, e.prototype.onThrottledResize = function() {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function() {
		return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize")
			.isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
	}, e.prototype.registerEventHandlers = function() {
		a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
	}, e.prototype.onDragStart = function(b) {
		var d = null;
		3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform")
				.replace(/.*\(|\)| /g, "")
				.split(","), d = {
					x: d[16 === d.length ? 12 : 4],
					y: d[16 === d.length ? 13 : 5]
				}) : (d = this.$stage.position(), d = {
				x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
				y: d.top
			}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date)
			.getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c)
			.on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c)
			.one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
				var d = this.difference(this._drag.pointer, this.pointer(b));
				a(c)
					.on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
			}, this)))
	}, e.prototype.onDragMove = function(a) {
		var b = null,
			c = null,
			d = null,
			e = this.difference(this._drag.pointer, this.pointer(a)),
			f = this.difference(this._drag.stage.start, e);
		this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
	}, e.prototype.onDragEnd = function(b) {
		var d = this.difference(this._drag.pointer, this.pointer(b)),
			e = this._drag.stage.current,
			f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
		a(c)
			.off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date)
				.getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
				return !1
			})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, e.prototype.closest = function(b, c) {
		var e = -1,
			f = 30,
			g = this.width(),
			h = this.coordinates();
		return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
			return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
		}, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
	}, e.prototype.animate = function(b) {
		var c = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
		}) : c ? this.$stage.animate({
			left: b + "px"
		}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
			left: b + "px"
		})
	}, e.prototype.is = function(a) {
		return this._states.current[a] && this._states.current[a] > 0
	}, e.prototype.current = function(a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function(b) {
		return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
			return b
		})
	}, e.prototype.reset = function(a) {
		(a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function(a, b) {
		var c = this._items.length,
			e = b ? 0 : this._clones.length;
		return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
	}, e.prototype.relative = function(a) {
		return a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function(a) {
		var b, c, d, e = this.settings,
			f = this._coordinates.length;
		if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
		else if (e.autoWidth || e.merge) {
			if (b = this._items.length)
				for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
			f = b + 1
		} else f = e.center ? this._items.length - 1 : this._items.length - e.items;
		return a && (f -= this._clones.length / 2), Math.max(f, 0)
	}, e.prototype.minimum = function(a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function(a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function(a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function(b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function(a) {
				return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
			};
		return b === d ? a.map(this._clones, function(a, b) {
			return f(b)
		}) : a.map(this._clones, function(a, c) {
			return a === b ? f(c) : null
		})
	}, e.prototype.speed = function(a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function(b) {
		var c, e = 1,
			f = b - 1;
		return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
	}, e.prototype.duration = function(a, b, c) {
		return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	}, e.prototype.to = function(a, b) {
		var c = this.current(),
			d = null,
			e = a - this.relative(c),
			f = (e > 0) - (e < 0),
			g = this._items.length,
			h = this.minimum(),
			i = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
	}, e.prototype.next = function(a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function(a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.onTransitionEnd = function(a) {
		if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
		this.leave("animating"), this.trigger("translated")
	}, e.prototype.viewport = function() {
		var d;
		return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement)
			.width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
	}, e.prototype.replace = function(b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
				return 1 === this.nodeType
			})
			.each(a.proxy(function(a, b) {
				b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]")
					.addBack("[data-merge]")
					.attr("data-merge") || 1)
			}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function(b, c) {
		var e = this.relative(this._current);
		c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
			content: b,
			position: c
		}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]")
			.addBack("[data-merge]")
			.attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]")
			.addBack("[data-merge]")
			.attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
			content: b,
			position: c
		})
	}, e.prototype.remove = function(a) {
		(a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.preloadAutoWidthImages = function(b) {
		b.each(a.proxy(function(b, c) {
			this.enter("pre-loading"), c = a(c), a(new Image)
				.one("load", a.proxy(function(a) {
					c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
				}, this))
				.attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
		}, this))
	}, e.prototype.destroy = function() {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c)
			.off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
		for (var d in this._plugins) this._plugins[d].destroy();
		this.$stage.children(".cloned")
			.remove(), this.$stage.unwrap(), this.$stage.children()
			.contents()
			.unwrap(), this.$stage.children()
			.unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr("class", this.$element.attr("class")
				.replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
			.removeData("owl.carousel")
	}, e.prototype.op = function(a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case "<":
				return d ? a > c : a < c;
			case ">":
				return d ? a < c : a > c;
			case ">=":
				return d ? a <= c : a >= c;
			case "<=":
				return d ? a >= c : a <= c
		}
	}, e.prototype.on = function(a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function(a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function(b, c, d, f, g) {
		var h = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			i = a.camelCase(a.grep(["on", b, d], function(a) {
					return a
				})
				.join("-")
				.toLowerCase()),
			j = a.Event([b, "owl", d || "carousel"].join(".")
				.toLowerCase(), a.extend({
					relatedTarget: this
				}, h, c));
		return this._supress[b] || (a.each(this._plugins, function(a, b) {
			b.onTrigger && b.onTrigger(j)
		}), this.register({
			type: e.Type.Event,
			name: b
		}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
	}, e.prototype.enter = function(b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
			this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
		}, this))
	}, e.prototype.leave = function(b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
			this._states.current[b]--
		}, this))
	}, e.prototype.register = function(b) {
		if (b.type === e.Type.Event) {
			if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
				var c = a.event.special[b.name]._default;
				a.event.special[b.name]._default = function(a) {
					return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
				}, a.event.special[b.name].owl = !0
			}
		} else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
			return a.inArray(c, this._states.tags[b.name]) === d
		}, this)))
	}, e.prototype.suppress = function(b) {
		a.each(b, a.proxy(function(a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function(b) {
		a.each(b, a.proxy(function(a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.pointer = function(a) {
		var c = {
			x: null,
			y: null
		};
		return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
	}, e.prototype.isNumeric = function(a) {
		return !isNaN(parseFloat(a))
	}, e.prototype.difference = function(a, b) {
		return {
			x: a.x - b.x,
			y: a.y - b.y
		}
	}, a.fn.owlCarousel = function(b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var d = a(this),
				f = d.data("owl.carousel");
			f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
				f.register({
					type: e.Type.Event,
					name: c
				}), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
					a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
				}, f))
			})), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, e.prototype.watch = function() {
		this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, e.prototype.refresh = function() {
		this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, e.prototype.destroy = function() {
		var a, c;
		b.clearInterval(this._interval);
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
					var c = this._core.settings,
						e = c.center && Math.ceil(c.items / 2) || c.items,
						f = c.center && -1 * e || 0,
						g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
						h = this._core.clones()
						.length,
						i = a.proxy(function(a, b) {
							this.load(b)
						}, this);
					for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		lazyLoad: !1,
		lazyLoadEager: 0
	}, e.prototype.load = function(c) {
		var d = this._core.$stage.children()
			.eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
			var e, f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
			this._core.trigger("load", {
					element: f,
					url: g
				}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
					f.css("opacity", 1), this._core.trigger("loaded", {
						element: f,
						url: g
					}, "lazy")
				}, this))
				.attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
					this._core.trigger("loaded", {
						element: f,
						url: g
					}, "lazy")
				}, this))
				.attr("srcset", g) : (e = new Image, e.onload = a.proxy(function() {
					f.css({
						"background-image": 'url("' + g + '")',
						opacity: "1"
					}), this._core.trigger("loaded", {
						element: f,
						url: g
					}, "lazy")
				}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, e.prototype.destroy = function() {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(c) {
		this._core = c, this._previousHeight = null, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
			}, this),
			"loaded.owl.lazy": a.proxy(function(a) {
				a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass)
					.index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
		var d = this;
		a(b)
			.on("load", function() {
				d._core.settings.autoHeight && d.update()
			}), a(b)
			.resize(function() {
				d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function() {
					d.update()
				}, 250))
			})
	};
	e.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, e.prototype.update = function() {
		var b = this._core._current,
			c = b + this._core.settings.items,
			d = this._core.settings.lazyLoad,
			e = this._core.$stage.children()
			.toArray()
			.slice(b, c),
			f = [],
			g = 0;
		a.each(e, function(b, c) {
				f.push(a(c)
					.height())
			}), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent()
			.height(g)
			.addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function() {
		var a, b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			}, this),
			"resize.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
			}, this),
			"refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame")
					.remove()
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" === a.property.name && this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function(b) {
				if (b.namespace) {
					var c = a(b.content)
						.find(".owl-video");
					c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
			this.play(a)
		}, this))
	};
	e.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, e.prototype.fetch = function(a, b) {
		var c = function() {
				return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
			}(),
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
		else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
		else {
			if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			c = "vzaar"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, e.prototype.thumbnail = function(b, c) {
		var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function(c) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
					class: "owl-video-tn " + j,
					srcType: c
				}) : a("<div/>", {
					class: "owl-video-tn",
					style: "opacity:1;background-image:url(" + c + ")"
				}), b.after(d), b.after(e)
			};
		if (b.wrap(a("<div/>", {
			class: "owl-video-wrapper",
			style: g
		})), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
		"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(a) {
				f = a[0].thumbnail_large, l(f)
			}
		}) : "vzaar" === c.type && a.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(a) {
				f = a.framegrab_url, l(f)
			}
		})
	}, e.prototype.stop = function() {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame")
			.remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, e.prototype.play = function(b) {
		var c, d = a(b.target),
			e = d.closest("." + this._core.settings.itemClass),
			f = this._videos[e.attr("data-video")],
			g = f.width || "100%",
			h = f.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c)
			.wrap('<div class="owl-video-frame" />')
			.insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
	}, e.prototype.isInFullScreen = function() {
		var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return b && a(b)
			.parent()
			.hasClass("owl-video-frame")
	}, e.prototype.destroy = function() {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
				a.namespace && (this.swapping = "translated" == a.type)
			}, this),
			"translate.owl.carousel": a.proxy(function(a) {
				a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, e.prototype.swap = function() {
		if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
			this.core.speed(0);
			var b, c = a.proxy(this.clear, this),
				d = this.core.$stage.children()
				.eq(this.previous),
				e = this.core.$stage.children()
				.eq(this.next),
				f = this.core.settings.animateIn,
				g = this.core.settings.animateOut;
			this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c)
					.css({
						left: b + "px"
					})
					.addClass("animated owl-animated-out")
					.addClass(g)), f && e.one(a.support.animation.end, c)
				.addClass("animated owl-animated-in")
				.addClass(f))
		}
	}, e.prototype.clear = function(b) {
		a(b.target)
			.css({
				left: ""
			})
			.removeClass("animated owl-animated-out owl-animated-in")
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
	}, e.prototype.destroy = function() {
		var a, b;
		for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
			}, this),
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": a.proxy(function(a, b, c) {
				a.namespace && this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function(a) {
				a.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this),
			"touchstart.owl.core": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"touchend.owl.core": a.proxy(function() {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
	};
	e.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, e.prototype._next = function(d) {
		this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
	}, e.prototype.read = function() {
		return (new Date)
			.getTime() - this._time
	}, e.prototype.play = function(c, d) {
		var e;
		this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
	}, e.prototype.stop = function() {
		this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
	}, e.prototype.pause = function() {
		this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
	}, e.prototype.destroy = function() {
		var a, b;
		this.stop();
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	"use strict";
	var e = function(b) {
		this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function(b) {
				b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content)
					.find("[data-dot]")
					.addBack("[data-dot]")
					.attr("data-dot") + "</div>")
			}, this),
			"added.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
			}, this),
			"remove.owl.carousel": a.proxy(function(a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				a.namespace && "position" == a.property.name && this.draw()
			}, this),
			"initialized.owl.carousel": a.proxy(function(a) {
				a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this),
			"refreshed.owl.carousel": a.proxy(function(a) {
				a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	e.Defaults = {
		nav: !1,
		navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
		navSpeed: !1,
		navElement: 'button type="button" role="presentation"',
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, e.prototype.initialize = function() {
		var b, c = this._core.settings;
		this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>")
				.addClass(c.navContainerClass)
				.appendTo(this.$element))
			.addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">")
			.addClass(c.navClass[0])
			.html(c.navText[0])
			.prependTo(this._controls.$relative)
			.on("click", a.proxy(function(a) {
				this.prev(c.navSpeed)
			}, this)), this._controls.$next = a("<" + c.navElement + ">")
			.addClass(c.navClass[1])
			.html(c.navText[1])
			.appendTo(this._controls.$relative)
			.on("click", a.proxy(function(a) {
				this.next(c.navSpeed)
			}, this)), c.dotsData || (this._templates = [a('<button role="button">')
				.addClass(c.dotClass)
				.append(a("<span>"))
				.prop("outerHTML")
			]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>")
				.addClass(c.dotsClass)
				.appendTo(this.$element))
			.addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function(b) {
				var d = a(b.target)
					.parent()
					.is(this._controls.$absolute) ? a(b.target)
					.index() : a(b.target)
					.parent()
					.index();
				b.preventDefault(), this.to(d, c.dotsSpeed)
			}, this));
		for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
	}, e.prototype.destroy = function() {
		var a, b, c, d, e;
		e = this._core.settings;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, e.prototype.update = function() {
		var a, b, c, d = this._core.clones()
			.length / 2,
			e = d + this._core.items()
			.length,
			f = this._core.maximum(!0),
			g = this._core.settings,
			h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
		if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
			for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
				if (b >= h || 0 === b) {
					if (this._pages.push({
						start: Math.min(f, a - d),
						end: a - d + h - 1
					}), Math.min(f, a - d) === f) break;
					b = 0, ++c
				}
				b += this._core.mergers(this._core.relative(a))
			}
	}, e.prototype.draw = function() {
		var b, c = this._core.settings,
			d = this._core.items()
			.length <= c.items,
			e = this._core.relative(this._core.current()),
			f = c.loop || c.rewind;
		this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children()
			.length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1)
				.join(this._templates[0])) : b < 0 && this._controls.$absolute.children()
			.slice(b)
			.remove(), this._controls.$absolute.find(".active")
			.removeClass("active"), this._controls.$absolute.children()
			.eq(a.inArray(this.current(), this._pages))
			.addClass("active"))
	}, e.prototype.onTrigger = function(b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
		}
	}, e.prototype.current = function() {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, a.proxy(function(a, c) {
				return a.start <= b && a.end >= b
			}, this))
			.pop()
	}, e.prototype.getPosition = function(b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items()
			.length, b ? c += e.slideBy : c -= e.slideBy), c
	}, e.prototype.next = function(b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, e.prototype.prev = function(b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, e.prototype.to = function(b, c, d) {
		var e;
		!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	"use strict";
	var e = function(c) {
		this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
				"initialized.owl.carousel": a.proxy(function(c) {
					c.namespace && "URLHash" === this._core.settings.startPosition && a(b)
						.trigger("hashchange.owl.navigation")
				}, this),
				"prepared.owl.carousel": a.proxy(function(b) {
					if (b.namespace) {
						var c = a(b.content)
							.find("[data-hash]")
							.addBack("[data-hash]")
							.attr("data-hash");
						if (!c) return;
						this._hashes[c] = b.content
					}
				}, this),
				"changed.owl.carousel": a.proxy(function(c) {
					if (c.namespace && "position" === c.property.name) {
						var d = this._core.items(this._core.relative(this._core.current())),
							e = a.map(this._hashes, function(a, b) {
								return a === d ? b : null
							})
							.join();
						if (!e || b.location.hash.slice(1) === e) return;
						b.location.hash = e
					}
				}, this)
			}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b)
			.on("hashchange.owl.navigation", a.proxy(function(a) {
				var c = b.location.hash.substring(1),
					e = this._core.$stage.children(),
					f = this._hashes[c] && e.index(this._hashes[c]);
				f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
			}, this))
	};
	e.Defaults = {
		URLhashListener: !1
	}, e.prototype.destroy = function() {
		var c, d;
		a(b)
			.off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	function e(b, c) {
		var e = !1,
			f = b.charAt(0)
			.toUpperCase() + b.slice(1);
		return a.each((b + " " + h.join(f + " ") + f)
			.split(" "),
			function(a, b) {
				if (g[b] !== d) return e = !c || b, !1
			}), e
	}

	function f(a) {
		return e(a, !0)
	}
	var g = a("<support>")
		.get(0)
		.style,
		h = "Webkit Moz O ms".split(" "),
		i = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		},
		j = {
			csstransforms: function() {
				return !!e("transform")
			},
			csstransforms3d: function() {
				return !!e("perspective")
			},
			csstransitions: function() {
				return !!e("transition")
			},
			cssanimations: function() {
				return !!e("animation")
			}
		};
	j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
/*!
 * Cxscroll - jQuery Plugin for Infinite Scrolling / Auto-Paging
 * @version 1.0
 * @requires jQuery v1.8.0+
 * @preserve
 */



$(function() {
	
	

	$('.slide-moible-menu')
		.on('click', function() {
			var _this = $(this),
				_iconbox = _this.children('i'),
				_menubox = $('.header-molble-menu');
			if (_menubox.height() == 0) {
				$('body')
					.css('overflow', 'hidden');
				_iconbox.html('&#xe93e;');
				var h_header = _menubox.css("height", "100%")
					.height();
				_menubox.height(0);
				_menubox.animate({
					height: h_header,
					'paddingBottom': '50px'
				});
			} else {
				_iconbox.html('&#xe656;');
				_menubox.animate({
					height: 0,
					'paddingBottom': 0
				});
				$('body')
					.css('overflow', 'auto');
			}
		});
	$('.slide-moible-sosuo')
		.on('click', function() {
			var _this = $(this),
				_iconbox = _this.children('i'),
				_menubox = $('.header-molble-sosuo');
			if (_menubox.height() == 0) {
				$('body')
					.css('overflow', 'hidden');
				_iconbox.html('&#xe93e;');
				var h_header = _menubox.css("height", "70px")
					.height();
				_menubox.height(0);
				_menubox.animate({
					height: h_header
				});
			} else {
				_iconbox.html('&#xe657;');
				_menubox.animate({
					height: 0
				});
				$('body')
					.css('overflow', 'auto');
			}
		});
	$('.angle-up')
		.on('click', function() {
			$("html, body")
				.animate({
					scrollTop: 0
				}, 120);
		});
	var _scrotop = $(document)
		.scrollTop(),
		_timmer = null;
	if (_scrotop > 100) {
		$('.angle-up')
			.show();
	}
	$(window)
		.bind("scroll", function() {
			var d = $(document)
				.scrollTop(),
				e = $(window)
				.height();
			0 < d ? $('.angle-up')
				.show() : $('.angle-up')
				.hide();
			clearTimeout(_timmer);
			_timmer = setTimeout(function() {
				clearTimeout(_timmer);
			}, 100);
		});
});
