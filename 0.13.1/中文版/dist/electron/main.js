﻿module.exports = function(e)
{
	function t(r)
	{
		if(n[r]) return n[r].exports;
		var o = n[r] = {
			i: r,
			l: !1,
			exports:
			{}
		};
		return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.d = function(e, n, r)
	{
		t.o(e, n) || Object.defineProperty(e, n,
		{
			enumerable: !0,
			get: r
		})
	}, t.r = function(e)
	{
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag,
		{
			value: "Module"
		}), Object.defineProperty(e, "__esModule",
		{
			value: !0
		})
	}, t.t = function(e, n)
	{
		if(1 & n && (e = t(e)), 8 & n) return e;
		if(4 & n && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if(t.r(r), Object.defineProperty(r, "default",
		{
			enumerable: !0,
			value: e
		}), 2 & n && "string" != typeof e)
			for(var o in e) t.d(r, o, function(t)
			{
				return e[t]
			}.bind(null, o));
		return r
	}, t.n = function(e)
	{
		var n = e && e.__esModule ? function()
		{
			return e.default
		} : function()
		{
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function(e, t)
	{
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 5)
}([function(e)
{
	e.exports = require("electron")
}, function(e)
{
	e.exports = require("path")
}, function(e, t, n)
{
	e.exports = n(6)
}, function(e)
{
	function t(e, t, n, r, o, i, a)
	{
		try
		{
			var c = e[i](a),
				u = c.value
		}
		catch (e)
		{
			return void n(e)
		}
		c.done ? t(u) : Promise.resolve(u)
			.then(r, o)
	}
	e.exports = function(e)
	{
		return function()
		{
			var n = this,
				r = arguments;
			return new Promise((function(o, i)
			{
				function a(e)
				{
					t(u, o, i, a, c, "next", e)
				}

				function c(e)
				{
					t(u, o, i, a, c, "throw", e)
				}
				var u = e.apply(n, r);
				a(void 0)
			}))
		}
	}
}, function(e)
{
	e.exports = function(e, t, n)
	{
		return t in e ? Object.defineProperty(e, t,
		{
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
}, function(e, t, n)
{
	"use strict";

	function r(e, t)
	{
		var n = Object.keys(e);
		if(Object.getOwnPropertySymbols)
		{
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter((function(t)
			{
				return Object.getOwnPropertyDescriptor(e, t)
					.enumerable
			}))), n.push.apply(n, r)
		}
		return n
	}

	function o(e)
	{
		for(var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ?
			{} : arguments[n], n % 2 ? r(Object(t), !0)
			.forEach((function(n)
			{
				f()(e, n, t[n])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t))
			.forEach((function(n)
			{
				Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
			}));
		return e
	}

	function i()
	{
		var e = {};
		try
		{
			e = JSON.parse(m.readFileSync(k, "utf8"))
				.bounds
		}
		catch (e)
		{}(v = new d.BrowserWindow(o(
		{
			height: 603,
			width: 850,
			minWidth: 850,
			minHeight: 603,
			backgroundColor: "#f5f5f5",
			useContentSize: !0,
			show: !1,
			minimizable: !0,
			frame: !1,
			titleBarStyle: "hidden",
			webPreferences:
			{
				nodeIntegration: !0,
				webSecurity: !0,
				nodeIntegrationInWorker: !1,
				enableRemoteModule: !0,
				preload: g.resolve(g.join(__dirname, "preload.js"))
			}
		}, e)))
		.setMenu(null), v.webContents.on("will-navigate", (function(e)
		{
			return e.preventDefault()
		})), v.loadURL(O,
		{
			userAgent: "ClashforWindows/".concat(d.app.getVersion())
		}), v.on("hide", (function()
		{
			v.webContents.send("window-event", "hide")
		})), v.on("show", (function()
		{
			"darwin" === process.platform && d.app.dock.show(), v.webContents.send("window-event", "show"), v.setBounds(a(v.getBounds()))
		})), v.on("close", (function(e)
		{
			if(d.app.isQuiting) d.globalShortcut.unregisterAll(), d.app.exit();
			else
			{
				e.preventDefault(), v.hide(), "darwin" === process.platform && d.app.dock.hide();
				try
				{
					m.writeFileSync(k, JSON.stringify(
					{
						bounds: v.getBounds()
					}))
				}
				catch (e)
				{}
			}
			return !1
		})), v.on("session-end", (function(e)
		{
			e.preventDefault(), v.webContents.send("app-exit")
		})), v.webContents.on("crashed", l()(u.a.mark((function e()
		{
			var t, n;
			return u.a.wrap((function(e)
			{
				for(;;) switch (e.prev = e.next)
				{
					case 0:
						if("darwin" !== process.platform)
						{
							e.next = 2;
							break
						}
						return e.abrupt("return");
					case 2:
						return t = {
							type: "error",
							title: "Clash for Windows",
							message: "面板崩溃了！",
							buttons: ["刷新", "退出"]
						}, e.next = 5, d.dialog.showMessageBox(v, t);
					case 5:
						n = e.sent, 0 === n.response ? (d.app.relaunch(), d.app.exit(0)) : d.app.quit();
					case 8:
					case "end":
						return e.stop()
				}
			}), e)
		})))), v.setTouchBar(new h(
		{
			items: [new y(
			{
				label: "General",
				backgroundColor: "#505050",
				click: function()
				{
					v.webContents.send("menu-item-change", 0)
				}
			}), new y(
			{
				label: "Proxies",
				backgroundColor: "#505050",
				click: function()
				{
					v.webContents.send("menu-item-change", 1)
				}
			}), new y(
			{
				label: "Profiles",
				backgroundColor: "#505050",
				click: function()
				{
					v.webContents.send("menu-item-change", 2)
				}
			}), new y(
			{
				label: "Logs",
				backgroundColor: "#505050",
				click: function()
				{
					v.webContents.send("menu-item-change", 3)
				}
			}), new y(
			{
				label: "Connections",
				backgroundColor: "#505050",
				click: function()
				{
					v.webContents.send("menu-item-change", 4)
				}
			}), new y(
			{
				label: "Settings",
				backgroundColor: "#505050",
				click: function()
				{
					v.webContents.send("menu-item-change", 5)
				}
			}), new y(
			{
				label: "Feedback",
				backgroundColor: "#505050",
				click: function()
				{
					v.webContents.send("menu-item-change", 6)
				}
			})]
		})), d.powerMonitor.on("resume", (function()
		{
			v.webContents.send("app-resume")
		}));
		var t = d.nativeImage.createFromPath(n(1)
				.join(__static, "imgs", "logo_64.png"))
			.resize(
			{
				width: 24,
				height: 24
			}),
			r = g.join(__static, "tray_normal.ico");
		(x = new d.Tray("darwin" === process.platform ? t : r))
		.setToolTip("Clash for Windows"), x.on("click", (function()
		{
			v.setBounds(a(v.getBounds())), v.show()
		})), d.ipcMain.on("cleanup-done", (function()
		{
			try
			{
				m.writeFileSync(k, JSON.stringify(
				{
					bounds: v.getBounds()
				}))
			}
			catch (e)
			{}
			d.app.isQuiting = !0, d.app.quit()
		})), d.ipcMain.on("status-changed", (function(e, t)
		{
			try
			{
				"darwin" !== process.platform && x.setImage(t)
			}
			catch (e)
			{}
		})), d.ipcMain.on("show-notification", (function(e, t)
		{
			var n = g.join(global.__static, "imgs/logo_64.png"),
				r = new d.Notification(o(o(
				{}, t),
				{},
				{
					icon: "darwin" === process.platform ? null : d.nativeImage.createFromPath(n)
				}));
			t.folder && r.on("click", (function()
			{
				d.shell.openPath(t.folder)
			})), r.show()
		}));
		var i = d.Menu.buildFromTemplate([
		{
			label: "显示面板",
			click: function()
			{
				return v.show()
			}
		},
		{
			type: "separator"
		},
		{
			label: "系统代理",
			type: "checkbox",
			id: "system-proxy",
			click: function(e)
			{
				var t = e.checked;
				v.webContents.send("system-proxy-changed", t)
			}
		},
		{
			label: "混合配置",
			type: "checkbox",
			id: "mixin",
			click: function(e)
			{
				var t = e.checked;
				v.webContents.send("mixin-changed", t)
			}
		},
		{
			type: "separator"
		},
		{
			label: "代理模式",
			id: "mode",
			submenu: [
			{
				label: "全局",
				type: "radio",
				id: "mode-global",
				click: function()
				{
					return v.webContents.send("mode-changed", "global")
				}
			},
			{
				label: "规则",
				type: "radio",
				id: "mode-rule",
				click: function()
				{
					return v.webContents.send("mode-changed", "rule")
				}
			},
			{
				label: "直连",
				type: "radio",
				id: "mode-direct",
				click: function()
				{
					return v.webContents.send("mode-changed", "direct")
				}
			},
			{
				label: "脚本",
				type: "radio",
				id: "mode-script",
				click: function()
				{
					return v.webContents.send("mode-changed", "script")
				}
			}]
		},
		{
			type: "separator"
		},
		{
			label: "强制退出",
			click: function()
			{
				d.app.isQuiting = !0, d.app.quit()
			}
		},
		{
			label: "退出",
			click: function()
			{
				return v.webContents.send("app-exit")
			}
		}]);
		d.ipcMain.on("clash-core-status-change", (function(e, t)
		{
			var n = i.getMenuItemById("system-proxy");
			n && (n.enabled = 1 !== t);
			var r = i.getMenuItemById("mode");
			r && (r.enabled = 1 !== t)
		})), d.ipcMain.on("mode-changed", (function(e, t)
		{
			var n = "mode-".concat(t),
				r = i.getMenuItemById(n);
			r && (r.checked = !0)
		})), d.ipcMain.on("system-proxy-changed", (function(e, t)
		{
			var n = i.getMenuItemById("system-proxy");
			n && (n.checked = t)
		})), d.ipcMain.on("mixin-changed", (function(e, t)
		{
			var n = i.getMenuItemById("mixin");
			n && (n.checked = t)
		})), d.ipcMain.on("speed-update", (function(e, t, n)
		{
			try
			{
				x && x.setImage(d.nativeImage.createFromDataURL(t)
					.crop(
					{
						x: 0,
						y: 0,
						width: n ? 225 : 60,
						height: 69
					})
					.resize(
					{
						height: 23
					}))
			}
			catch (e)
			{}
		})), x.on("click", (function()
		{
			v.show()
		})), x.on("right-click", (function()
		{
			x.popUpContextMenu(i)
		}))
	}

	function a(e)
	{
		var t = e.x,
			n = e.y;
		if(!d.screen.getAllDisplays()
			.find((function(e)
			{
				var r = e.bounds;
				if(r)
				{
					var o = r.x,
						i = r.y,
						a = r.width,
						c = r.height;
					return w.inRange(t, o, o + a) && w.inRange(n, i, i + c)
				}
			})))
		{
			var r = d.screen.getDisplayNearestPoint(
				{
					x: t,
					y: n
				})
				.bounds;
			if(r) return {
				x: r.x,
				y: r.y
			}
		}
		return {
			x: t,
			y: n
		}
	}
	n.r(t);
	var c = n(2),
		u = n.n(c),
		s = n(3),
		l = n.n(s),
		p = n(4),
		f = n.n(p),
		d = n(0),
		h = (n.n(d), n(0)
			.TouchBar),
		y = h.TouchBarButton,
		g = n(1),
		m = n(7),
		w = n(8),
		b = n(9);
	global.__static = n(1)
		.join(__dirname, "/static")
		.replace(/\\/g, "\\\\"), b(), d.app.disableHardwareAcceleration(), d.app.commandLine.appendSwitch("disable-features", "OutOfBlinkCors");
	var v, x, k = g.join(d.app.getPath("userData"), "window_ocnfig.json"),
		O = "file://".concat(__dirname, "/index.html"),
		C = d.app.requestSingleInstanceLock();
	d.app.setAppUserModelId("com.lbyczf.clashwin"), d.app.setAsDefaultProtocolClient("clash"), d.app.on("open-url", (function(e, t)
	{
		v.webContents.send("app-open", [t])
	})), C ? (d.app.on("second-instance", (function(e, t)
	{
		v && (v.webContents.send("app-open", t), v.isMinimized() && v.restore(), v.show())
	})), d.app.on("ready", (function()
	{
		d.powerMonitor.on("shutdown", (function(e)
		{
			e.preventDefault(), v.webContents.send("app-exit"), setTimeout((function()
			{
				d.app.isQuiting = !0, d.app.quit()
			}), 5e3)
		})), i()
	}))) : d.app.quit(), d.app.on("activate", (function()
	{
		null === v ? i() : v.show()
	}))
}, function(e)
{
	var t = function(e)
	{
		"use strict";

		function t(e, t, n)
		{
			return Object.defineProperty(e, t,
			{
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), e[t]
		}

		function n(e, t, n, r)
		{
			var i = t && t.prototype instanceof o ? t : o,
				a = Object.create(i.prototype),
				c = new d(r || []);
			return a._invoke = s(e, n, c), a
		}

		function r(e, t, n)
		{
			try
			{
				return {
					type: "normal",
					arg: e.call(t, n)
				}
			}
			catch (e)
			{
				return {
					type: "throw",
					arg: e
				}
			}
		}

		function o()
		{}

		function i()
		{}

		function a()
		{}

		function c(e)
		{
			["next", "throw", "return"].forEach((function(n)
			{
				t(e, n, (function(e)
				{
					return this._invoke(n, e)
				}))
			}))
		}

		function u(e, t)
		{
			function n(o, i, a, c)
			{
				var u = r(e[o], e, i);
				if("throw" !== u.type)
				{
					var s = u.arg,
						l = s.value;
					return l && "object" == typeof l && m.call(l, "__await") ? t.resolve(l.__await)
						.then((function(e)
						{
							n("next", e, a, c)
						}), (function(e)
						{
							n("throw", e, a, c)
						})) : t.resolve(l)
						.then((function(e)
						{
							s.value = e, a(s)
						}), (function(e)
						{
							return n("throw", e, a, c)
						}))
				}
				c(u.arg)
			}
			var o;
			this._invoke = function(e, r)
			{
				function i()
				{
					return new t((function(t, o)
					{
						n(e, r, t, o)
					}))
				}
				return o = o ? o.then(i, i) : i()
			}
		}

		function s(e, t, n)
		{
			var o = k;
			return function(i, a)
			{
				if(o == C) throw new Error("Generator is already running");
				if(o == _)
				{
					if("throw" === i) throw a;
					return {
						value: void 0,
						done: !0
					}
				}
				for(n.method = i, n.arg = a;;)
				{
					var c = n.delegate;
					if(c)
					{
						var u = l(c, n);
						if(u)
						{
							if(u === j) continue;
							return u
						}
					}
					if("next" === n.method) n.sent = n._sent = n.arg;
					else if("throw" === n.method)
					{
						if(o == k) throw o = _, n.arg;
						n.dispatchException(n.arg)
					}
					else "return" === n.method && n.abrupt("return", n.arg);
					o = C;
					var s = r(e, t, n);
					if("normal" === s.type)
					{
						if(o = n.done ? _ : O, s.arg === j) continue;
						return {
							value: s.arg,
							done: n.done
						}
					}
					"throw" === s.type && (o = _, n.method = "throw", n.arg = s.arg)
				}
			}
		}

		function l(e, t)
		{
			var n = e.iterator[t.method];
			if(void 0 === n)
			{
				if(t.delegate = null, "throw" === t.method)
				{
					if(e.iterator.return && (t.method = "return", t.arg = void 0, l(e, t), "throw" === t.method)) return j;
					t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return j
			}
			var o = r(n, e.iterator, t.arg);
			if("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, j;
			var i = o.arg;
			return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, j) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, j)
		}

		function p(e)
		{
			var t = {
				tryLoc: e[0]
			};
			1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
		}

		function f(e)
		{
			var t = e.completion ||
			{};
			t.type = "normal", delete t.arg, e.completion = t
		}

		function d(e)
		{
			this.tryEntries = [
			{
				tryLoc: "root"
			}], e.forEach(p, this), this.reset(!0)
		}

		function h(e)
		{
			if(e)
			{
				var t = e[b];
				if(t) return t.call(e);
				if("function" == typeof e.next) return e;
				if(!isNaN(e.length))
				{
					var n = -1,
						r = function t()
						{
							for(; ++n < e.length;)
								if(m.call(e, n)) return t.value = e[n], t.done = !1, t;
							return t.value = void 0, t.done = !0, t
						};
					return r.next = r
				}
			}
			return {
				next: y
			}
		}

		function y()
		{
			return {
				value: void 0,
				done: !0
			}
		}
		var g = Object.prototype,
			m = g.hasOwnProperty,
			w = "function" == typeof Symbol ? Symbol :
			{},
			b = w.iterator || "@@iterator",
			v = w.asyncIterator || "@@asyncIterator",
			x = w.toStringTag || "@@toStringTag";
		try
		{
			t(
			{}, "")
		}
		catch (e)
		{
			t = function(e, t, n)
			{
				return e[t] = n
			}
		}
		e.wrap = n;
		var k = "suspendedStart",
			O = "suspendedYield",
			C = "executing",
			_ = "completed",
			j = {},
			L = {};
		L[b] = function()
		{
			return this
		};
		var P = Object.getPrototypeOf,
			M = P && P(P(h([])));
		M && M !== g && m.call(M, b) && (L = M);
		var S = a.prototype = o.prototype = Object.create(L);
		return i.prototype = S.constructor = a, a.constructor = i, i.displayName = t(a, x, "GeneratorFunction"), e.isGeneratorFunction = function(e)
		{
			var t = "function" == typeof e && e.constructor;
			return !!t && (t === i || "GeneratorFunction" === (t.displayName || t.name))
		}, e.mark = function(e)
		{
			return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, t(e, x, "GeneratorFunction")), e.prototype = Object.create(S), e
		}, e.awrap = function(e)
		{
			return {
				__await: e
			}
		}, c(u.prototype), u.prototype[v] = function()
		{
			return this
		}, e.AsyncIterator = u, e.async = function(t, r, o, i, a)
		{
			void 0 === a && (a = Promise);
			var c = new u(n(t, r, o, i), a);
			return e.isGeneratorFunction(r) ? c : c.next()
				.then((function(e)
				{
					return e.done ? e.value : c.next()
				}))
		}, c(S), t(S, x, "Generator"), S[b] = function()
		{
			return this
		}, S.toString = function()
		{
			return "[object Generator]"
		}, e.keys = function(e)
		{
			var t = [];
			for(var n in e) t.push(n);
			return t.reverse(),
				function n()
				{
					for(; t.length;)
					{
						var r = t.pop();
						if(r in e) return n.value = r, n.done = !1, n
					}
					return n.done = !0, n
				}
		}, e.values = h, d.prototype = {
			constructor: d,
			reset: function(e)
			{
				if(this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(f), !e)
					for(var t in this) "t" === t.charAt(0) && m.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
			},
			stop: function()
			{
				this.done = !0;
				var e = this.tryEntries[0].completion;
				if("throw" === e.type) throw e.arg;
				return this.rval
			},
			dispatchException: function(e)
			{
				function t(t, r)
				{
					return i.type = "throw", i.arg = e, n.next = t, r && (n.method = "next", n.arg = void 0), !!r
				}
				if(this.done) throw e;
				for(var n = this, r = this.tryEntries.length - 1; 0 <= r; --r)
				{
					var o = this.tryEntries[r],
						i = o.completion;
					if("root" === o.tryLoc) return t("end");
					if(o.tryLoc <= this.prev)
					{
						var a = m.call(o, "catchLoc"),
							c = m.call(o, "finallyLoc");
						if(a && c)
						{
							if(this.prev < o.catchLoc) return t(o.catchLoc, !0);
							if(this.prev < o.finallyLoc) return t(o.finallyLoc)
						}
						else if(a)
						{
							if(this.prev < o.catchLoc) return t(o.catchLoc, !0)
						}
						else
						{
							if(!c) throw new Error("try statement without catch or finally");
							if(this.prev < o.finallyLoc) return t(o.finallyLoc)
						}
					}
				}
			},
			abrupt: function(e, t)
			{
				for(var n, r = this.tryEntries.length - 1; 0 <= r; --r)
					if((n = this.tryEntries[r])
						.tryLoc <= this.prev && m.call(n, "finallyLoc") && this.prev < n.finallyLoc)
					{
						var o = n;
						break
					} o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
				var i = o ? o.completion :
				{};
				return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, j) : this.complete(i)
			},
			complete: function(e, t)
			{
				if("throw" === e.type) throw e.arg;
				return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), j
			},
			finish: function(e)
			{
				for(var t, n = this.tryEntries.length - 1; 0 <= n; --n)
					if((t = this.tryEntries[n])
						.finallyLoc === e) return this.complete(t.completion, t.afterLoc), f(t), j
			},
			catch: function(e)
			{
				for(var t, n = this.tryEntries.length - 1; 0 <= n; --n)
					if((t = this.tryEntries[n])
						.tryLoc === e)
					{
						var r = t.completion;
						if("throw" === r.type)
						{
							var o = r.arg;
							f(t)
						}
						return o
					} throw new Error("illegal catch attempt")
			},
			delegateYield: function(e, t, n)
			{
				return this.delegate = {
					iterator: h(e),
					resultName: t,
					nextLoc: n
				}, "next" === this.method && (this.arg = void 0), j
			}
		}, e
	}(e.exports);
	try
	{
		regeneratorRuntime = t
	}
	catch (e)
	{
		Function("r", "regeneratorRuntime = r")(t)
	}
}, function(e)
{
	e.exports = require("fs")
}, function(e)
{
	e.exports = require("lodash")
}, function(e)
{
	e.exports = require("fix-path")
}]);