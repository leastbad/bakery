/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs-test/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./oven_channel.js": "./app/javascript/channels/oven_channel.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/consumer.js":
/*!*********************************************!*\
  !*** ./app/javascript/channels/consumer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_actioncable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/actioncable */ "./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js");
/* harmony import */ var _rails_actioncable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_actioncable__WEBPACK_IMPORTED_MODULE_0__);
// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `bin/rails generate channel` command.

/* harmony default export */ __webpack_exports__["default"] = (Object(_rails_actioncable__WEBPACK_IMPORTED_MODULE_0__["createConsumer"])());

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/channels/oven_channel.js":
/*!*************************************************!*\
  !*** ./app/javascript/channels/oven_channel.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cable_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cable_ready */ "./node_modules/cable_ready/javascript/index.js");
/* harmony import */ var _consumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consumer */ "./app/javascript/channels/consumer.js");


_consumer__WEBPACK_IMPORTED_MODULE_1__["default"].subscriptions.create('OvenChannel', {
  connected: function connected() {
    this.send({
      message: 'Client is live'
    });
  },
  received: function received(data) {
    if (data.cableReady) cable_ready__WEBPACK_IMPORTED_MODULE_0__["default"].perform(data.operations);
  }
});

/***/ }),

/***/ "./app/javascript/controllers sync recursive _controller\\.js$":
/*!**********************************************************!*\
  !*** ./app/javascript/controllers sync _controller\.js$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./hello_controller.js": "./app/javascript/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/controllers sync recursive _controller\\.js$";

/***/ }),

/***/ "./app/javascript/controllers/hello_controller.js":
/*!********************************************************!*\
  !*** ./app/javascript/controllers/hello_controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>


var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.outputTarget.textContent = 'Hello, Stimulus!';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

_default.targets = ["output"];


/***/ }),

/***/ "./app/javascript/controllers/index.js":
/*!*********************************************!*\
  !*** ./app/javascript/controllers/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus/webpack-helpers */ "./node_modules/stimulus/webpack-helpers.js");
/* harmony import */ var _channels_consumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channels/consumer */ "./app/javascript/channels/consumer.js");
// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.



var application = stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start();

var context = __webpack_require__("./app/javascript/controllers sync recursive _controller\\.js$");

application.load(Object(stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__["definitionsFromContext"])(context));
application.consumer = _channels_consumer__WEBPACK_IMPORTED_MODULE_2__["default"];

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! controllers */ "./app/javascript/controllers/index.js");
/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
__webpack_require__(/*! channels */ "./app/javascript/channels/index.js");



/***/ }),

/***/ "./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof2(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  var adapters = {
    logger: self.console,
    WebSocket: self.WebSocket
  };
  var logger = {
    log: function log() {
      if (this.enabled) {
        var _adapters$logger;

        for (var _len = arguments.length, messages = Array(_len), _key = 0; _key < _len; _key++) {
          messages[_key] = arguments[_key];
        }

        messages.push(Date.now());

        (_adapters$logger = adapters.logger).log.apply(_adapters$logger, ["[ActionCable]"].concat(messages));
      }
    }
  };

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var now = function now() {
    return new Date().getTime();
  };

  var secondsSince = function secondsSince(time) {
    return (now() - time) / 1e3;
  };

  var clamp = function clamp(number, min, max) {
    return Math.max(min, Math.min(max, number));
  };

  var ConnectionMonitor = function () {
    function ConnectionMonitor(connection) {
      classCallCheck(this, ConnectionMonitor);
      this.visibilityDidChange = this.visibilityDidChange.bind(this);
      this.connection = connection;
      this.reconnectAttempts = 0;
    }

    ConnectionMonitor.prototype.start = function start() {
      if (!this.isRunning()) {
        this.startedAt = now();
        delete this.stoppedAt;
        this.startPolling();
        addEventListener("visibilitychange", this.visibilityDidChange);
        logger.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms");
      }
    };

    ConnectionMonitor.prototype.stop = function stop() {
      if (this.isRunning()) {
        this.stoppedAt = now();
        this.stopPolling();
        removeEventListener("visibilitychange", this.visibilityDidChange);
        logger.log("ConnectionMonitor stopped");
      }
    };

    ConnectionMonitor.prototype.isRunning = function isRunning() {
      return this.startedAt && !this.stoppedAt;
    };

    ConnectionMonitor.prototype.recordPing = function recordPing() {
      this.pingedAt = now();
    };

    ConnectionMonitor.prototype.recordConnect = function recordConnect() {
      this.reconnectAttempts = 0;
      this.recordPing();
      delete this.disconnectedAt;
      logger.log("ConnectionMonitor recorded connect");
    };

    ConnectionMonitor.prototype.recordDisconnect = function recordDisconnect() {
      this.disconnectedAt = now();
      logger.log("ConnectionMonitor recorded disconnect");
    };

    ConnectionMonitor.prototype.startPolling = function startPolling() {
      this.stopPolling();
      this.poll();
    };

    ConnectionMonitor.prototype.stopPolling = function stopPolling() {
      clearTimeout(this.pollTimeout);
    };

    ConnectionMonitor.prototype.poll = function poll() {
      var _this = this;

      this.pollTimeout = setTimeout(function () {
        _this.reconnectIfStale();

        _this.poll();
      }, this.getPollInterval());
    };

    ConnectionMonitor.prototype.getPollInterval = function getPollInterval() {
      var _constructor$pollInte = this.constructor.pollInterval,
          min = _constructor$pollInte.min,
          max = _constructor$pollInte.max,
          multiplier = _constructor$pollInte.multiplier;
      var interval = multiplier * Math.log(this.reconnectAttempts + 1);
      return Math.round(clamp(interval, min, max) * 1e3);
    };

    ConnectionMonitor.prototype.reconnectIfStale = function reconnectIfStale() {
      if (this.connectionIsStale()) {
        logger.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + secondsSince(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s");
        this.reconnectAttempts++;

        if (this.disconnectedRecently()) {
          logger.log("ConnectionMonitor skipping reopening recent disconnect");
        } else {
          logger.log("ConnectionMonitor reopening");
          this.connection.reopen();
        }
      }
    };

    ConnectionMonitor.prototype.connectionIsStale = function connectionIsStale() {
      return secondsSince(this.pingedAt ? this.pingedAt : this.startedAt) > this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.disconnectedRecently = function disconnectedRecently() {
      return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.visibilityDidChange = function visibilityDidChange() {
      var _this2 = this;

      if (document.visibilityState === "visible") {
        setTimeout(function () {
          if (_this2.connectionIsStale() || !_this2.connection.isOpen()) {
            logger.log("ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = " + document.visibilityState);

            _this2.connection.reopen();
          }
        }, 200);
      }
    };

    return ConnectionMonitor;
  }();

  ConnectionMonitor.pollInterval = {
    min: 3,
    max: 30,
    multiplier: 5
  };
  ConnectionMonitor.staleThreshold = 6;
  var INTERNAL = {
    message_types: {
      welcome: "welcome",
      disconnect: "disconnect",
      ping: "ping",
      confirmation: "confirm_subscription",
      rejection: "reject_subscription"
    },
    disconnect_reasons: {
      unauthorized: "unauthorized",
      invalid_request: "invalid_request",
      server_restart: "server_restart"
    },
    default_mount_path: "/cable",
    protocols: ["actioncable-v1-json", "actioncable-unsupported"]
  };
  var message_types = INTERNAL.message_types,
      protocols = INTERNAL.protocols;
  var supportedProtocols = protocols.slice(0, protocols.length - 1);
  var indexOf = [].indexOf;

  var Connection = function () {
    function Connection(consumer) {
      classCallCheck(this, Connection);
      this.open = this.open.bind(this);
      this.consumer = consumer;
      this.subscriptions = this.consumer.subscriptions;
      this.monitor = new ConnectionMonitor(this);
      this.disconnected = true;
    }

    Connection.prototype.send = function send(data) {
      if (this.isOpen()) {
        this.webSocket.send(JSON.stringify(data));
        return true;
      } else {
        return false;
      }
    };

    Connection.prototype.open = function open() {
      if (this.isActive()) {
        logger.log("Attempted to open WebSocket, but existing socket is " + this.getState());
        return false;
      } else {
        logger.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + protocols);

        if (this.webSocket) {
          this.uninstallEventHandlers();
        }

        this.webSocket = new adapters.WebSocket(this.consumer.url, protocols);
        this.installEventHandlers();
        this.monitor.start();
        return true;
      }
    };

    Connection.prototype.close = function close() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        allowReconnect: true
      },
          allowReconnect = _ref.allowReconnect;

      if (!allowReconnect) {
        this.monitor.stop();
      }

      if (this.isActive()) {
        return this.webSocket.close();
      }
    };

    Connection.prototype.reopen = function reopen() {
      logger.log("Reopening WebSocket, current state is " + this.getState());

      if (this.isActive()) {
        try {
          return this.close();
        } catch (error) {
          logger.log("Failed to reopen WebSocket", error);
        } finally {
          logger.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms");
          setTimeout(this.open, this.constructor.reopenDelay);
        }
      } else {
        return this.open();
      }
    };

    Connection.prototype.getProtocol = function getProtocol() {
      if (this.webSocket) {
        return this.webSocket.protocol;
      }
    };

    Connection.prototype.isOpen = function isOpen() {
      return this.isState("open");
    };

    Connection.prototype.isActive = function isActive() {
      return this.isState("open", "connecting");
    };

    Connection.prototype.isProtocolSupported = function isProtocolSupported() {
      return indexOf.call(supportedProtocols, this.getProtocol()) >= 0;
    };

    Connection.prototype.isState = function isState() {
      for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
        states[_key] = arguments[_key];
      }

      return indexOf.call(states, this.getState()) >= 0;
    };

    Connection.prototype.getState = function getState() {
      if (this.webSocket) {
        for (var state in adapters.WebSocket) {
          if (adapters.WebSocket[state] === this.webSocket.readyState) {
            return state.toLowerCase();
          }
        }
      }

      return null;
    };

    Connection.prototype.installEventHandlers = function installEventHandlers() {
      for (var eventName in this.events) {
        var handler = this.events[eventName].bind(this);
        this.webSocket["on" + eventName] = handler;
      }
    };

    Connection.prototype.uninstallEventHandlers = function uninstallEventHandlers() {
      for (var eventName in this.events) {
        this.webSocket["on" + eventName] = function () {};
      }
    };

    return Connection;
  }();

  Connection.reopenDelay = 500;
  Connection.prototype.events = {
    message: function message(event) {
      if (!this.isProtocolSupported()) {
        return;
      }

      var _JSON$parse = JSON.parse(event.data),
          identifier = _JSON$parse.identifier,
          message = _JSON$parse.message,
          reason = _JSON$parse.reason,
          reconnect = _JSON$parse.reconnect,
          type = _JSON$parse.type;

      switch (type) {
        case message_types.welcome:
          this.monitor.recordConnect();
          return this.subscriptions.reload();

        case message_types.disconnect:
          logger.log("Disconnecting. Reason: " + reason);
          return this.close({
            allowReconnect: reconnect
          });

        case message_types.ping:
          return this.monitor.recordPing();

        case message_types.confirmation:
          return this.subscriptions.notify(identifier, "connected");

        case message_types.rejection:
          return this.subscriptions.reject(identifier);

        default:
          return this.subscriptions.notify(identifier, "received", message);
      }
    },
    open: function open() {
      logger.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol");
      this.disconnected = false;

      if (!this.isProtocolSupported()) {
        logger.log("Protocol is unsupported. Stopping monitor and disconnecting.");
        return this.close({
          allowReconnect: false
        });
      }
    },
    close: function close(event) {
      logger.log("WebSocket onclose event");

      if (this.disconnected) {
        return;
      }

      this.disconnected = true;
      this.monitor.recordDisconnect();
      return this.subscriptions.notifyAll("disconnected", {
        willAttemptReconnect: this.monitor.isRunning()
      });
    },
    error: function error() {
      logger.log("WebSocket onerror event");
    }
  };

  var extend = function extend(object, properties) {
    if (properties != null) {
      for (var key in properties) {
        var value = properties[key];
        object[key] = value;
      }
    }

    return object;
  };

  var Subscription = function () {
    function Subscription(consumer) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var mixin = arguments[2];
      classCallCheck(this, Subscription);
      this.consumer = consumer;
      this.identifier = JSON.stringify(params);
      extend(this, mixin);
    }

    Subscription.prototype.perform = function perform(action) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.action = action;
      return this.send(data);
    };

    Subscription.prototype.send = function send(data) {
      return this.consumer.send({
        command: "message",
        identifier: this.identifier,
        data: JSON.stringify(data)
      });
    };

    Subscription.prototype.unsubscribe = function unsubscribe() {
      return this.consumer.subscriptions.remove(this);
    };

    return Subscription;
  }();

  var Subscriptions = function () {
    function Subscriptions(consumer) {
      classCallCheck(this, Subscriptions);
      this.consumer = consumer;
      this.subscriptions = [];
    }

    Subscriptions.prototype.create = function create(channelName, mixin) {
      var channel = channelName;
      var params = (typeof channel === "undefined" ? "undefined" : _typeof(channel)) === "object" ? channel : {
        channel: channel
      };
      var subscription = new Subscription(this.consumer, params, mixin);
      return this.add(subscription);
    };

    Subscriptions.prototype.add = function add(subscription) {
      this.subscriptions.push(subscription);
      this.consumer.ensureActiveConnection();
      this.notify(subscription, "initialized");
      this.sendCommand(subscription, "subscribe");
      return subscription;
    };

    Subscriptions.prototype.remove = function remove(subscription) {
      this.forget(subscription);

      if (!this.findAll(subscription.identifier).length) {
        this.sendCommand(subscription, "unsubscribe");
      }

      return subscription;
    };

    Subscriptions.prototype.reject = function reject(identifier) {
      var _this = this;

      return this.findAll(identifier).map(function (subscription) {
        _this.forget(subscription);

        _this.notify(subscription, "rejected");

        return subscription;
      });
    };

    Subscriptions.prototype.forget = function forget(subscription) {
      this.subscriptions = this.subscriptions.filter(function (s) {
        return s !== subscription;
      });
      return subscription;
    };

    Subscriptions.prototype.findAll = function findAll(identifier) {
      return this.subscriptions.filter(function (s) {
        return s.identifier === identifier;
      });
    };

    Subscriptions.prototype.reload = function reload() {
      var _this2 = this;

      return this.subscriptions.map(function (subscription) {
        return _this2.sendCommand(subscription, "subscribe");
      });
    };

    Subscriptions.prototype.notifyAll = function notifyAll(callbackName) {
      var _this3 = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this.subscriptions.map(function (subscription) {
        return _this3.notify.apply(_this3, [subscription, callbackName].concat(args));
      });
    };

    Subscriptions.prototype.notify = function notify(subscription, callbackName) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      var subscriptions = void 0;

      if (typeof subscription === "string") {
        subscriptions = this.findAll(subscription);
      } else {
        subscriptions = [subscription];
      }

      return subscriptions.map(function (subscription) {
        return typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : undefined;
      });
    };

    Subscriptions.prototype.sendCommand = function sendCommand(subscription, command) {
      var identifier = subscription.identifier;
      return this.consumer.send({
        command: command,
        identifier: identifier
      });
    };

    return Subscriptions;
  }();

  var Consumer = function () {
    function Consumer(url) {
      classCallCheck(this, Consumer);
      this._url = url;
      this.subscriptions = new Subscriptions(this);
      this.connection = new Connection(this);
    }

    Consumer.prototype.send = function send(data) {
      return this.connection.send(data);
    };

    Consumer.prototype.connect = function connect() {
      return this.connection.open();
    };

    Consumer.prototype.disconnect = function disconnect() {
      return this.connection.close({
        allowReconnect: false
      });
    };

    Consumer.prototype.ensureActiveConnection = function ensureActiveConnection() {
      if (!this.connection.isActive()) {
        return this.connection.open();
      }
    };

    createClass(Consumer, [{
      key: "url",
      get: function get$$1() {
        return createWebSocketURL(this._url);
      }
    }]);
    return Consumer;
  }();

  function createWebSocketURL(url) {
    if (typeof url === "function") {
      url = url();
    }

    if (url && !/^wss?:/i.test(url)) {
      var a = document.createElement("a");
      a.href = url;
      a.href = a.href;
      a.protocol = a.protocol.replace("http", "ws");
      return a.href;
    } else {
      return url;
    }
  }

  function createConsumer() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getConfig("url") || INTERNAL.default_mount_path;
    return new Consumer(url);
  }

  function getConfig(name) {
    var element = document.head.querySelector("meta[name='action-cable-" + name + "']");

    if (element) {
      return element.getAttribute("content");
    }
  }

  exports.Connection = Connection;
  exports.ConnectionMonitor = ConnectionMonitor;
  exports.Consumer = Consumer;
  exports.INTERNAL = INTERNAL;
  exports.Subscription = Subscription;
  exports.Subscriptions = Subscriptions;
  exports.adapters = adapters;
  exports.createWebSocketURL = createWebSocketURL;
  exports.logger = logger;
  exports.createConsumer = createConsumer;
  exports.getConfig = getConfig;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/action.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/action.js ***!
  \****************************************************/
/*! exports provided: Action, getDefaultEventNameForElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventNameForElement", function() { return getDefaultEventNameForElement; });
/* harmony import */ var _action_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_descriptor */ "./node_modules/@stimulus/core/dist/action_descriptor.js");


var Action = function () {
  function Action(element, index, descriptor) {
    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.eventOptions = descriptor.eventOptions || {};
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
  }

  Action.forToken = function (token) {
    return new this(token.element, token.index, Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["parseActionDescriptorString"])(token.content));
  };

  Action.prototype.toString = function () {
    var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
    return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
  };

  Object.defineProperty(Action.prototype, "eventTargetName", {
    get: function get() {
      return Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["stringifyEventTarget"])(this.eventTarget);
    },
    enumerable: false,
    configurable: true
  });
  return Action;
}();


var defaultEventNames = {
  "a": function a(e) {
    return "click";
  },
  "button": function button(e) {
    return "click";
  },
  "form": function form(e) {
    return "submit";
  },
  "input": function input(e) {
    return e.getAttribute("type") == "submit" ? "click" : "input";
  },
  "select": function select(e) {
    return "change";
  },
  "textarea": function textarea(e) {
    return "input";
  }
};
function getDefaultEventNameForElement(element) {
  var tagName = element.tagName.toLowerCase();

  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}

function error(message) {
  throw new Error(message);
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/action_descriptor.js":
/*!***************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/action_descriptor.js ***!
  \***************************************************************/
/*! exports provided: parseActionDescriptorString, stringifyEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseActionDescriptorString", function() { return parseActionDescriptorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyEventTarget", function() { return stringifyEventTarget; });
// capture nos.:            12   23 4               43   1 5   56 7      768 9  98
var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#([^:]+?))(:(.+))?$/;
function parseActionDescriptorString(descriptorString) {
  var source = descriptorString.trim();
  var matches = source.match(descriptorPattern) || [];
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: matches[2],
    eventOptions: matches[9] ? parseEventOptions(matches[9]) : {},
    identifier: matches[5],
    methodName: matches[7]
  };
}

function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}

function parseEventOptions(eventOptions) {
  return eventOptions.split(":").reduce(function (options, token) {
    var _a;

    return Object.assign(options, (_a = {}, _a[token.replace(/^!/, "")] = !/^!/.test(token), _a));
  }, {});
}

function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/application.js":
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/application.js ***!
  \*********************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher */ "./node_modules/@stimulus/core/dist/dispatcher.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./node_modules/@stimulus/core/dist/router.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./node_modules/@stimulus/core/dist/schema.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};





var Application = function () {
  function Application(element, schema) {
    if (element === void 0) {
      element = document.documentElement;
    }

    if (schema === void 0) {
      schema = _schema__WEBPACK_IMPORTED_MODULE_2__["defaultSchema"];
    }

    this.logger = console;
    this.element = element;
    this.schema = schema;
    this.dispatcher = new _dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"](this);
    this.router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"](this);
  }

  Application.start = function (element, schema) {
    var application = new Application(element, schema);
    application.start();
    return application;
  };

  Application.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , domReady()];

          case 1:
            _a.sent();

            this.dispatcher.start();
            this.router.start();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Application.prototype.stop = function () {
    this.dispatcher.stop();
    this.router.stop();
  };

  Application.prototype.register = function (identifier, controllerConstructor) {
    this.load({
      identifier: identifier,
      controllerConstructor: controllerConstructor
    });
  };

  Application.prototype.load = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var definitions = Array.isArray(head) ? head : __spreadArrays([head], rest);
    definitions.forEach(function (definition) {
      return _this.router.loadDefinition(definition);
    });
  };

  Application.prototype.unload = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var identifiers = Array.isArray(head) ? head : __spreadArrays([head], rest);
    identifiers.forEach(function (identifier) {
      return _this.router.unloadIdentifier(identifier);
    });
  };

  Object.defineProperty(Application.prototype, "controllers", {
    // Controllers
    get: function get() {
      return this.router.contexts.map(function (context) {
        return context.controller;
      });
    },
    enumerable: false,
    configurable: true
  });

  Application.prototype.getControllerForElementAndIdentifier = function (element, identifier) {
    var context = this.router.getContextForElementAndIdentifier(element, identifier);
    return context ? context.controller : null;
  }; // Error handling


  Application.prototype.handleError = function (error, message, detail) {
    this.logger.error("%s\n\n%o\n\n%o", message, error, detail);
  };

  return Application;
}();



function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/binding.js":
/*!*****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/binding.js ***!
  \*****************************************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
var Binding = function () {
  function Binding(context, action) {
    this.context = context;
    this.action = action;
  }

  Object.defineProperty(Binding.prototype, "index", {
    get: function get() {
      return this.action.index;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "eventTarget", {
    get: function get() {
      return this.action.eventTarget;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "eventOptions", {
    get: function get() {
      return this.action.eventOptions;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: false,
    configurable: true
  });

  Binding.prototype.handleEvent = function (event) {
    if (this.willBeInvokedByEvent(event)) {
      this.invokeWithEvent(event);
    }
  };

  Object.defineProperty(Binding.prototype, "eventName", {
    get: function get() {
      return this.action.eventName;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "method", {
    get: function get() {
      var method = this.controller[this.methodName];

      if (typeof method == "function") {
        return method;
      }

      throw new Error("Action \"" + this.action + "\" references undefined method \"" + this.methodName + "\"");
    },
    enumerable: false,
    configurable: true
  });

  Binding.prototype.invokeWithEvent = function (event) {
    try {
      this.method.call(this.controller, event);
    } catch (error) {
      var _a = this,
          identifier = _a.identifier,
          controller = _a.controller,
          element = _a.element,
          index = _a.index;

      var detail = {
        identifier: identifier,
        controller: controller,
        element: element,
        index: index,
        event: event
      };
      this.context.handleError(error, "invoking action \"" + this.action + "\"", detail);
    }
  };

  Binding.prototype.willBeInvokedByEvent = function (event) {
    var eventTarget = event.target;

    if (this.element === eventTarget) {
      return true;
    } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
      return this.scope.containsElement(eventTarget);
    } else {
      return this.scope.containsElement(this.action.element);
    }
  };

  Object.defineProperty(Binding.prototype, "controller", {
    get: function get() {
      return this.context.controller;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "methodName", {
    get: function get() {
      return this.action.methodName;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: false,
    configurable: true
  });
  return Binding;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/binding_observer.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/binding_observer.js ***!
  \**************************************************************/
/*! exports provided: BindingObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingObserver", function() { return BindingObserver; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./node_modules/@stimulus/core/dist/action.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding */ "./node_modules/@stimulus/core/dist/binding.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");




var BindingObserver = function () {
  function BindingObserver(context, delegate) {
    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }

  BindingObserver.prototype.start = function () {
    if (!this.valueListObserver) {
      this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__["ValueListObserver"](this.element, this.actionAttribute, this);
      this.valueListObserver.start();
    }
  };

  BindingObserver.prototype.stop = function () {
    if (this.valueListObserver) {
      this.valueListObserver.stop();
      delete this.valueListObserver;
      this.disconnectAllActions();
    }
  };

  Object.defineProperty(BindingObserver.prototype, "element", {
    get: function get() {
      return this.context.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "actionAttribute", {
    get: function get() {
      return this.schema.actionAttribute;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "schema", {
    get: function get() {
      return this.context.schema;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "bindings", {
    get: function get() {
      return Array.from(this.bindingsByAction.values());
    },
    enumerable: false,
    configurable: true
  });

  BindingObserver.prototype.connectAction = function (action) {
    var binding = new _binding__WEBPACK_IMPORTED_MODULE_1__["Binding"](this.context, action);
    this.bindingsByAction.set(action, binding);
    this.delegate.bindingConnected(binding);
  };

  BindingObserver.prototype.disconnectAction = function (action) {
    var binding = this.bindingsByAction.get(action);

    if (binding) {
      this.bindingsByAction.delete(action);
      this.delegate.bindingDisconnected(binding);
    }
  };

  BindingObserver.prototype.disconnectAllActions = function () {
    var _this = this;

    this.bindings.forEach(function (binding) {
      return _this.delegate.bindingDisconnected(binding);
    });
    this.bindingsByAction.clear();
  }; // Value observer delegate


  BindingObserver.prototype.parseValueForToken = function (token) {
    var action = _action__WEBPACK_IMPORTED_MODULE_0__["Action"].forToken(token);

    if (action.identifier == this.identifier) {
      return action;
    }
  };

  BindingObserver.prototype.elementMatchedValue = function (element, action) {
    this.connectAction(action);
  };

  BindingObserver.prototype.elementUnmatchedValue = function (element, action) {
    this.disconnectAction(action);
  };

  return BindingObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/blessing.js":
/*!******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/blessing.js ***!
  \******************************************************/
/*! exports provided: bless */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bless", function() { return bless; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};


/** @hidden */

function bless(constructor) {
  return shadow(constructor, getBlessedProperties(constructor));
}

function shadow(constructor, properties) {
  var shadowConstructor = extend(constructor);
  var shadowProperties = getShadowProperties(constructor.prototype, properties);
  Object.defineProperties(shadowConstructor.prototype, shadowProperties);
  return shadowConstructor;
}

function getBlessedProperties(constructor) {
  var blessings = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticArrayValues"])(constructor, "blessings");
  return blessings.reduce(function (blessedProperties, blessing) {
    var properties = blessing(constructor);

    for (var key in properties) {
      var descriptor = blessedProperties[key] || {};
      blessedProperties[key] = Object.assign(descriptor, properties[key]);
    }

    return blessedProperties;
  }, {});
}

function getShadowProperties(prototype, properties) {
  return getOwnKeys(properties).reduce(function (shadowProperties, key) {
    var _a;

    var descriptor = getShadowedDescriptor(prototype, properties, key);

    if (descriptor) {
      Object.assign(shadowProperties, (_a = {}, _a[key] = descriptor, _a));
    }

    return shadowProperties;
  }, {});
}

function getShadowedDescriptor(prototype, properties, key) {
  var shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
  var shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;

  if (!shadowedByValue) {
    var descriptor = Object.getOwnPropertyDescriptor(properties, key).value;

    if (shadowingDescriptor) {
      descriptor.get = shadowingDescriptor.get || descriptor.get;
      descriptor.set = shadowingDescriptor.set || descriptor.set;
    }

    return descriptor;
  }
}

var getOwnKeys = function () {
  if (typeof Object.getOwnPropertySymbols == "function") {
    return function (object) {
      return __spreadArrays(Object.getOwnPropertyNames(object), Object.getOwnPropertySymbols(object));
    };
  } else {
    return Object.getOwnPropertyNames;
  }
}();

var extend = function () {
  function extendWithReflect(constructor) {
    function extended() {
      var _newTarget = this && this instanceof extended ? this.constructor : void 0;

      return Reflect.construct(constructor, arguments, _newTarget);
    }

    extended.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: extended
      }
    });
    Reflect.setPrototypeOf(extended, constructor);
    return extended;
  }

  function testReflectExtension() {
    var a = function a() {
      this.a.call(this);
    };

    var b = extendWithReflect(a);

    b.prototype.a = function () {};

    return new b();
  }

  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return function (constructor) {
      return function (_super) {
        __extends(extended, _super);

        function extended() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        return extended;
      }(constructor);
    };
  }
}();

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/class_map.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/class_map.js ***!
  \*******************************************************/
/*! exports provided: ClassMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassMap", function() { return ClassMap; });
var ClassMap = function () {
  function ClassMap(scope) {
    this.scope = scope;
  }

  ClassMap.prototype.has = function (name) {
    return this.data.has(this.getDataKey(name));
  };

  ClassMap.prototype.get = function (name) {
    return this.data.get(this.getDataKey(name));
  };

  ClassMap.prototype.getAttributeName = function (name) {
    return this.data.getAttributeNameForKey(this.getDataKey(name));
  };

  ClassMap.prototype.getDataKey = function (name) {
    return name + "-class";
  };

  Object.defineProperty(ClassMap.prototype, "data", {
    get: function get() {
      return this.scope.data;
    },
    enumerable: false,
    configurable: true
  });
  return ClassMap;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/class_properties.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/class_properties.js ***!
  \**************************************************************/
/*! exports provided: ClassPropertiesBlessing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassPropertiesBlessing", function() { return ClassPropertiesBlessing; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");


/** @hidden */

function ClassPropertiesBlessing(constructor) {
  var classes = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticArrayValues"])(constructor, "classes");
  return classes.reduce(function (properties, classDefinition) {
    return Object.assign(properties, propertiesForClassDefinition(classDefinition));
  }, {});
}

function propertiesForClassDefinition(key) {
  var _a;

  var name = key + "Class";
  return _a = {}, _a[name] = {
    get: function get() {
      var classes = this.classes;

      if (classes.has(key)) {
        return classes.get(key);
      } else {
        var attribute = classes.getAttributeName(key);
        throw new Error("Missing attribute \"" + attribute + "\"");
      }
    }
  }, _a["has" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name)] = {
    get: function get() {
      return this.classes.has(key);
    }
  }, _a;
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/context.js":
/*!*****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/context.js ***!
  \*****************************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _binding_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_observer */ "./node_modules/@stimulus/core/dist/binding_observer.js");
/* harmony import */ var _value_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value_observer */ "./node_modules/@stimulus/core/dist/value_observer.js");



var Context = function () {
  function Context(module, scope) {
    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.bindingObserver = new _binding_observer__WEBPACK_IMPORTED_MODULE_0__["BindingObserver"](this, this.dispatcher);
    this.valueObserver = new _value_observer__WEBPACK_IMPORTED_MODULE_1__["ValueObserver"](this, this.controller);

    try {
      this.controller.initialize();
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }

  Context.prototype.connect = function () {
    this.bindingObserver.start();
    this.valueObserver.start();

    try {
      this.controller.connect();
    } catch (error) {
      this.handleError(error, "connecting controller");
    }
  };

  Context.prototype.disconnect = function () {
    try {
      this.controller.disconnect();
    } catch (error) {
      this.handleError(error, "disconnecting controller");
    }

    this.valueObserver.stop();
    this.bindingObserver.stop();
  };

  Object.defineProperty(Context.prototype, "application", {
    get: function get() {
      return this.module.application;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "identifier", {
    get: function get() {
      return this.module.identifier;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "dispatcher", {
    get: function get() {
      return this.application.dispatcher;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "parentElement", {
    get: function get() {
      return this.element.parentElement;
    },
    enumerable: false,
    configurable: true
  }); // Error handling

  Context.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    var _a = this,
        identifier = _a.identifier,
        controller = _a.controller,
        element = _a.element;

    detail = Object.assign({
      identifier: identifier,
      controller: controller,
      element: element
    }, detail);
    this.application.handleError(error, "Error " + message, detail);
  };

  return Context;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/controller.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/controller.js ***!
  \********************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _class_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class_properties */ "./node_modules/@stimulus/core/dist/class_properties.js");
/* harmony import */ var _target_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target_properties */ "./node_modules/@stimulus/core/dist/target_properties.js");
/* harmony import */ var _value_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./value_properties */ "./node_modules/@stimulus/core/dist/value_properties.js");




var Controller = function () {
  function Controller(context) {
    this.context = context;
  }

  Object.defineProperty(Controller.prototype, "application", {
    get: function get() {
      return this.context.application;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "targets", {
    get: function get() {
      return this.scope.targets;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "classes", {
    get: function get() {
      return this.scope.classes;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "data", {
    get: function get() {
      return this.scope.data;
    },
    enumerable: false,
    configurable: true
  });

  Controller.prototype.initialize = function () {// Override in your subclass to set up initial controller state
  };

  Controller.prototype.connect = function () {// Override in your subclass to respond when the controller is connected to the DOM
  };

  Controller.prototype.disconnect = function () {// Override in your subclass to respond when the controller is disconnected from the DOM
  };

  Controller.blessings = [_class_properties__WEBPACK_IMPORTED_MODULE_0__["ClassPropertiesBlessing"], _target_properties__WEBPACK_IMPORTED_MODULE_1__["TargetPropertiesBlessing"], _value_properties__WEBPACK_IMPORTED_MODULE_2__["ValuePropertiesBlessing"]];
  Controller.targets = [];
  Controller.values = {};
  return Controller;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/data_map.js":
/*!******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/data_map.js ***!
  \******************************************************/
/*! exports provided: DataMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMap", function() { return DataMap; });
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");


var DataMap = function () {
  function DataMap(scope) {
    this.scope = scope;
  }

  Object.defineProperty(DataMap.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(DataMap.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: false,
    configurable: true
  });

  DataMap.prototype.get = function (key) {
    var name = this.getAttributeNameForKey(key);
    return this.element.getAttribute(name);
  };

  DataMap.prototype.set = function (key, value) {
    var name = this.getAttributeNameForKey(key);
    this.element.setAttribute(name, value);
    return this.get(key);
  };

  DataMap.prototype.has = function (key) {
    var name = this.getAttributeNameForKey(key);
    return this.element.hasAttribute(name);
  };

  DataMap.prototype.delete = function (key) {
    if (this.has(key)) {
      var name_1 = this.getAttributeNameForKey(key);
      this.element.removeAttribute(name_1);
      return true;
    } else {
      return false;
    }
  };

  DataMap.prototype.getAttributeNameForKey = function (key) {
    return "data-" + this.identifier + "-" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_0__["dasherize"])(key);
  };

  return DataMap;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/definition.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/definition.js ***!
  \********************************************************/
/*! exports provided: blessDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessDefinition", function() { return blessDefinition; });
/* harmony import */ var _blessing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blessing */ "./node_modules/@stimulus/core/dist/blessing.js");

/** @hidden */

function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: Object(_blessing__WEBPACK_IMPORTED_MODULE_0__["bless"])(definition.controllerConstructor)
  };
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/dispatcher.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/dispatcher.js ***!
  \********************************************************/
/*! exports provided: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony import */ var _event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listener */ "./node_modules/@stimulus/core/dist/event_listener.js");


var Dispatcher = function () {
  function Dispatcher(application) {
    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }

  Dispatcher.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.connect();
      });
    }
  };

  Dispatcher.prototype.stop = function () {
    if (this.started) {
      this.started = false;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.disconnect();
      });
    }
  };

  Object.defineProperty(Dispatcher.prototype, "eventListeners", {
    get: function get() {
      return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) {
        return listeners.concat(Array.from(map.values()));
      }, []);
    },
    enumerable: false,
    configurable: true
  }); // Binding observer delegate

  /** @hidden */

  Dispatcher.prototype.bindingConnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingConnected(binding);
  };
  /** @hidden */


  Dispatcher.prototype.bindingDisconnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
  }; // Error handling


  Dispatcher.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    this.application.handleError(error, "Error " + message, detail);
  };

  Dispatcher.prototype.fetchEventListenerForBinding = function (binding) {
    var eventTarget = binding.eventTarget,
        eventName = binding.eventName,
        eventOptions = binding.eventOptions;
    return this.fetchEventListener(eventTarget, eventName, eventOptions);
  };

  Dispatcher.prototype.fetchEventListener = function (eventTarget, eventName, eventOptions) {
    var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
    var cacheKey = this.cacheKey(eventName, eventOptions);
    var eventListener = eventListenerMap.get(cacheKey);

    if (!eventListener) {
      eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
      eventListenerMap.set(cacheKey, eventListener);
    }

    return eventListener;
  };

  Dispatcher.prototype.createEventListener = function (eventTarget, eventName, eventOptions) {
    var eventListener = new _event_listener__WEBPACK_IMPORTED_MODULE_0__["EventListener"](eventTarget, eventName, eventOptions);

    if (this.started) {
      eventListener.connect();
    }

    return eventListener;
  };

  Dispatcher.prototype.fetchEventListenerMapForEventTarget = function (eventTarget) {
    var eventListenerMap = this.eventListenerMaps.get(eventTarget);

    if (!eventListenerMap) {
      eventListenerMap = new Map();
      this.eventListenerMaps.set(eventTarget, eventListenerMap);
    }

    return eventListenerMap;
  };

  Dispatcher.prototype.cacheKey = function (eventName, eventOptions) {
    var parts = [eventName];
    Object.keys(eventOptions).sort().forEach(function (key) {
      parts.push("" + (eventOptions[key] ? "" : "!") + key);
    });
    return parts.join(":");
  };

  return Dispatcher;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/event_listener.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/event_listener.js ***!
  \************************************************************/
/*! exports provided: EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
var EventListener = function () {
  function EventListener(eventTarget, eventName, eventOptions) {
    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.eventOptions = eventOptions;
    this.unorderedBindings = new Set();
  }

  EventListener.prototype.connect = function () {
    this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
  };

  EventListener.prototype.disconnect = function () {
    this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
  }; // Binding observer delegate

  /** @hidden */


  EventListener.prototype.bindingConnected = function (binding) {
    this.unorderedBindings.add(binding);
  };
  /** @hidden */


  EventListener.prototype.bindingDisconnected = function (binding) {
    this.unorderedBindings.delete(binding);
  };

  EventListener.prototype.handleEvent = function (event) {
    var extendedEvent = extendEvent(event);

    for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
      var binding = _a[_i];

      if (extendedEvent.immediatePropagationStopped) {
        break;
      } else {
        binding.handleEvent(extendedEvent);
      }
    }
  };

  Object.defineProperty(EventListener.prototype, "bindings", {
    get: function get() {
      return Array.from(this.unorderedBindings).sort(function (left, right) {
        var leftIndex = left.index,
            rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    },
    enumerable: false,
    configurable: true
  });
  return EventListener;
}();



function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    var stopImmediatePropagation_1 = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.immediatePropagationStopped = true;
        stopImmediatePropagation_1.call(this);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/guide.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/guide.js ***!
  \***************************************************/
/*! exports provided: Guide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guide", function() { return Guide; });
var Guide = function () {
  function Guide(logger) {
    this.warnedKeysByObject = new WeakMap();
    this.logger = logger;
  }

  Guide.prototype.warn = function (object, key, message) {
    var warnedKeys = this.warnedKeysByObject.get(object);

    if (!warnedKeys) {
      warnedKeys = new Set();
      this.warnedKeysByObject.set(object, warnedKeys);
    }

    if (!warnedKeys.has(key)) {
      warnedKeys.add(key);
      this.logger.warn(message, object);
    }
  };

  return Guide;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/index.js ***!
  \***************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./node_modules/@stimulus/core/dist/application.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _application__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./node_modules/@stimulus/core/dist/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _context__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./node_modules/@stimulus/core/dist/controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]; });

/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema */ "./node_modules/@stimulus/core/dist/schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _schema__WEBPACK_IMPORTED_MODULE_3__["defaultSchema"]; });






/***/ }),

/***/ "./node_modules/@stimulus/core/dist/inheritable_statics.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/inheritable_statics.js ***!
  \*****************************************************************/
/*! exports provided: readInheritableStaticArrayValues, readInheritableStaticObjectPairs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readInheritableStaticArrayValues", function() { return readInheritableStaticArrayValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readInheritableStaticObjectPairs", function() { return readInheritableStaticObjectPairs; });
function readInheritableStaticArrayValues(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce(function (values, constructor) {
    getOwnStaticArrayValues(constructor, propertyName).forEach(function (name) {
      return values.add(name);
    });
    return values;
  }, new Set()));
}
function readInheritableStaticObjectPairs(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return ancestors.reduce(function (pairs, constructor) {
    pairs.push.apply(pairs, getOwnStaticObjectPairs(constructor, propertyName));
    return pairs;
  }, []);
}

function getAncestorsForConstructor(constructor) {
  var ancestors = [];

  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }

  return ancestors.reverse();
}

function getOwnStaticArrayValues(constructor, propertyName) {
  var definition = constructor[propertyName];
  return Array.isArray(definition) ? definition : [];
}

function getOwnStaticObjectPairs(constructor, propertyName) {
  var definition = constructor[propertyName];
  return definition ? Object.keys(definition).map(function (key) {
    return [key, definition[key]];
  }) : [];
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/module.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/module.js ***!
  \****************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./node_modules/@stimulus/core/dist/context.js");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "./node_modules/@stimulus/core/dist/definition.js");



var Module = function () {
  function Module(application, definition) {
    this.application = application;
    this.definition = Object(_definition__WEBPACK_IMPORTED_MODULE_1__["blessDefinition"])(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }

  Object.defineProperty(Module.prototype, "identifier", {
    get: function get() {
      return this.definition.identifier;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "controllerConstructor", {
    get: function get() {
      return this.definition.controllerConstructor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "contexts", {
    get: function get() {
      return Array.from(this.connectedContexts);
    },
    enumerable: false,
    configurable: true
  });

  Module.prototype.connectContextForScope = function (scope) {
    var context = this.fetchContextForScope(scope);
    this.connectedContexts.add(context);
    context.connect();
  };

  Module.prototype.disconnectContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (context) {
      this.connectedContexts.delete(context);
      context.disconnect();
    }
  };

  Module.prototype.fetchContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (!context) {
      context = new _context__WEBPACK_IMPORTED_MODULE_0__["Context"](this, scope);
      this.contextsByScope.set(scope, context);
    }

    return context;
  };

  return Module;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/router.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/router.js ***!
  \****************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./node_modules/@stimulus/core/dist/module.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope */ "./node_modules/@stimulus/core/dist/scope.js");
/* harmony import */ var _scope_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scope_observer */ "./node_modules/@stimulus/core/dist/scope_observer.js");





var Router = function () {
  function Router(application) {
    this.application = application;
    this.scopeObserver = new _scope_observer__WEBPACK_IMPORTED_MODULE_3__["ScopeObserver"](this.element, this.schema, this);
    this.scopesByIdentifier = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
    this.modulesByIdentifier = new Map();
  }

  Object.defineProperty(Router.prototype, "element", {
    get: function get() {
      return this.application.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "logger", {
    get: function get() {
      return this.application.logger;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "modules", {
    get: function get() {
      return Array.from(this.modulesByIdentifier.values());
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "contexts", {
    get: function get() {
      return this.modules.reduce(function (contexts, module) {
        return contexts.concat(module.contexts);
      }, []);
    },
    enumerable: false,
    configurable: true
  });

  Router.prototype.start = function () {
    this.scopeObserver.start();
  };

  Router.prototype.stop = function () {
    this.scopeObserver.stop();
  };

  Router.prototype.loadDefinition = function (definition) {
    this.unloadIdentifier(definition.identifier);
    var module = new _module__WEBPACK_IMPORTED_MODULE_0__["Module"](this.application, definition);
    this.connectModule(module);
  };

  Router.prototype.unloadIdentifier = function (identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      this.disconnectModule(module);
    }
  };

  Router.prototype.getContextForElementAndIdentifier = function (element, identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      return module.contexts.find(function (context) {
        return context.element == element;
      });
    }
  }; // Error handler delegate

  /** @hidden */


  Router.prototype.handleError = function (error, message, detail) {
    this.application.handleError(error, message, detail);
  }; // Scope observer delegate

  /** @hidden */


  Router.prototype.createScopeForElementAndIdentifier = function (element, identifier) {
    return new _scope__WEBPACK_IMPORTED_MODULE_2__["Scope"](this.schema, element, identifier, this.logger);
  };
  /** @hidden */


  Router.prototype.scopeConnected = function (scope) {
    this.scopesByIdentifier.add(scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.connectContextForScope(scope);
    }
  };
  /** @hidden */


  Router.prototype.scopeDisconnected = function (scope) {
    this.scopesByIdentifier.delete(scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.disconnectContextForScope(scope);
    }
  }; // Modules


  Router.prototype.connectModule = function (module) {
    this.modulesByIdentifier.set(module.identifier, module);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.connectContextForScope(scope);
    });
  };

  Router.prototype.disconnectModule = function (module) {
    this.modulesByIdentifier.delete(module.identifier);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.disconnectContextForScope(scope);
    });
  };

  return Router;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/schema.js":
/*!****************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/schema.js ***!
  \****************************************************/
/*! exports provided: defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
var defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target"
};

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/scope.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/scope.js ***!
  \***************************************************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony import */ var _class_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class_map */ "./node_modules/@stimulus/core/dist/class_map.js");
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_map */ "./node_modules/@stimulus/core/dist/data_map.js");
/* harmony import */ var _guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guide */ "./node_modules/@stimulus/core/dist/guide.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/selectors.js");
/* harmony import */ var _target_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target_set */ "./node_modules/@stimulus/core/dist/target_set.js");
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};







var Scope = function () {
  function Scope(schema, element, identifier, logger) {
    var _this = this;

    this.targets = new _target_set__WEBPACK_IMPORTED_MODULE_4__["TargetSet"](this);
    this.classes = new _class_map__WEBPACK_IMPORTED_MODULE_0__["ClassMap"](this);
    this.data = new _data_map__WEBPACK_IMPORTED_MODULE_1__["DataMap"](this);

    this.containsElement = function (element) {
      return element.closest(_this.controllerSelector) === _this.element;
    };

    this.schema = schema;
    this.element = element;
    this.identifier = identifier;
    this.guide = new _guide__WEBPACK_IMPORTED_MODULE_2__["Guide"](logger);
  }

  Scope.prototype.findElement = function (selector) {
    return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
  };

  Scope.prototype.findAllElements = function (selector) {
    return __spreadArrays(this.element.matches(selector) ? [this.element] : [], this.queryElements(selector).filter(this.containsElement));
  };

  Scope.prototype.queryElements = function (selector) {
    return Array.from(this.element.querySelectorAll(selector));
  };

  Object.defineProperty(Scope.prototype, "controllerSelector", {
    get: function get() {
      return Object(_selectors__WEBPACK_IMPORTED_MODULE_3__["attributeValueContainsToken"])(this.schema.controllerAttribute, this.identifier);
    },
    enumerable: false,
    configurable: true
  });
  return Scope;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/scope_observer.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/scope_observer.js ***!
  \************************************************************/
/*! exports provided: ScopeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeObserver", function() { return ScopeObserver; });
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");


var ScopeObserver = function () {
  function ScopeObserver(element, schema, delegate) {
    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__["ValueListObserver"](this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }

  ScopeObserver.prototype.start = function () {
    this.valueListObserver.start();
  };

  ScopeObserver.prototype.stop = function () {
    this.valueListObserver.stop();
  };

  Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: false,
    configurable: true
  }); // Value observer delegate

  /** @hidden */

  ScopeObserver.prototype.parseValueForToken = function (token) {
    var element = token.element,
        identifier = token.content;
    var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
    var scope = scopesByIdentifier.get(identifier);

    if (!scope) {
      scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
      scopesByIdentifier.set(identifier, scope);
    }

    return scope;
  };
  /** @hidden */


  ScopeObserver.prototype.elementMatchedValue = function (element, value) {
    var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
    this.scopeReferenceCounts.set(value, referenceCount);

    if (referenceCount == 1) {
      this.delegate.scopeConnected(value);
    }
  };
  /** @hidden */


  ScopeObserver.prototype.elementUnmatchedValue = function (element, value) {
    var referenceCount = this.scopeReferenceCounts.get(value);

    if (referenceCount) {
      this.scopeReferenceCounts.set(value, referenceCount - 1);

      if (referenceCount == 1) {
        this.delegate.scopeDisconnected(value);
      }
    }
  };

  ScopeObserver.prototype.fetchScopesByIdentifierForElement = function (element) {
    var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);

    if (!scopesByIdentifier) {
      scopesByIdentifier = new Map();
      this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
    }

    return scopesByIdentifier;
  };

  return ScopeObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/selectors.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/selectors.js ***!
  \*******************************************************/
/*! exports provided: attributeValueContainsToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValueContainsToken", function() { return attributeValueContainsToken; });
/** @hidden */
function attributeValueContainsToken(attributeName, token) {
  return "[" + attributeName + "~=\"" + token + "\"]";
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/string_helpers.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/string_helpers.js ***!
  \************************************************************/
/*! exports provided: camelize, capitalize, dasherize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dasherize", function() { return dasherize; });
function camelize(value) {
  return value.replace(/(?:[_-])([a-z0-9])/g, function (_, char) {
    return char.toUpperCase();
  });
}
function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
function dasherize(value) {
  return value.replace(/([A-Z])/g, function (_, char) {
    return "-" + char.toLowerCase();
  });
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/target_properties.js":
/*!***************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/target_properties.js ***!
  \***************************************************************/
/*! exports provided: TargetPropertiesBlessing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetPropertiesBlessing", function() { return TargetPropertiesBlessing; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");


/** @hidden */

function TargetPropertiesBlessing(constructor) {
  var targets = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticArrayValues"])(constructor, "targets");
  return targets.reduce(function (properties, targetDefinition) {
    return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
  }, {});
}

function propertiesForTargetDefinition(name) {
  var _a;

  return _a = {}, _a[name + "Target"] = {
    get: function get() {
      var target = this.targets.find(name);

      if (target) {
        return target;
      } else {
        throw new Error("Missing target element \"" + this.identifier + "." + name + "\"");
      }
    }
  }, _a[name + "Targets"] = {
    get: function get() {
      return this.targets.findAll(name);
    }
  }, _a["has" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name) + "Target"] = {
    get: function get() {
      return this.targets.has(name);
    }
  }, _a;
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/target_set.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/target_set.js ***!
  \********************************************************/
/*! exports provided: TargetSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSet", function() { return TargetSet; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/selectors.js");
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};



var TargetSet = function () {
  function TargetSet(scope) {
    this.scope = scope;
  }

  Object.defineProperty(TargetSet.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "schema", {
    get: function get() {
      return this.scope.schema;
    },
    enumerable: false,
    configurable: true
  });

  TargetSet.prototype.has = function (targetName) {
    return this.find(targetName) != null;
  };

  TargetSet.prototype.find = function () {
    var _this = this;

    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    return targetNames.reduce(function (target, targetName) {
      return target || _this.findTarget(targetName) || _this.findLegacyTarget(targetName);
    }, undefined);
  };

  TargetSet.prototype.findAll = function () {
    var _this = this;

    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    return targetNames.reduce(function (targets, targetName) {
      return __spreadArrays(targets, _this.findAllTargets(targetName), _this.findAllLegacyTargets(targetName));
    }, []);
  };

  TargetSet.prototype.findTarget = function (targetName) {
    var selector = this.getSelectorForTargetName(targetName);
    return this.scope.findElement(selector);
  };

  TargetSet.prototype.findAllTargets = function (targetName) {
    var selector = this.getSelectorForTargetName(targetName);
    return this.scope.findAllElements(selector);
  };

  TargetSet.prototype.getSelectorForTargetName = function (targetName) {
    var attributeName = "data-" + this.identifier + "-target";
    return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(attributeName, targetName);
  };

  TargetSet.prototype.findLegacyTarget = function (targetName) {
    var selector = this.getLegacySelectorForTargetName(targetName);
    return this.deprecate(this.scope.findElement(selector), targetName);
  };

  TargetSet.prototype.findAllLegacyTargets = function (targetName) {
    var _this = this;

    var selector = this.getLegacySelectorForTargetName(targetName);
    return this.scope.findAllElements(selector).map(function (element) {
      return _this.deprecate(element, targetName);
    });
  };

  TargetSet.prototype.getLegacySelectorForTargetName = function (targetName) {
    var targetDescriptor = this.identifier + "." + targetName;
    return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(this.schema.targetAttribute, targetDescriptor);
  };

  TargetSet.prototype.deprecate = function (element, targetName) {
    if (element) {
      var identifier = this.identifier;
      var attributeName = this.schema.targetAttribute;
      this.guide.warn(element, "target:" + targetName, "Please replace " + attributeName + "=\"" + identifier + "." + targetName + "\" with data-" + identifier + "-target=\"" + targetName + "\". " + ("The " + attributeName + " attribute is deprecated and will be removed in a future version of Stimulus."));
    }

    return element;
  };

  Object.defineProperty(TargetSet.prototype, "guide", {
    get: function get() {
      return this.scope.guide;
    },
    enumerable: false,
    configurable: true
  });
  return TargetSet;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/value_observer.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/value_observer.js ***!
  \************************************************************/
/*! exports provided: ValueObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueObserver", function() { return ValueObserver; });
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");


var ValueObserver = function () {
  function ValueObserver(context, receiver) {
    this.context = context;
    this.receiver = receiver;
    this.stringMapObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_0__["StringMapObserver"](this.element, this);
    this.valueDescriptorMap = this.controller.valueDescriptorMap;
    this.invokeChangedCallbacksForDefaultValues();
  }

  ValueObserver.prototype.start = function () {
    this.stringMapObserver.start();
  };

  ValueObserver.prototype.stop = function () {
    this.stringMapObserver.stop();
  };

  Object.defineProperty(ValueObserver.prototype, "element", {
    get: function get() {
      return this.context.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ValueObserver.prototype, "controller", {
    get: function get() {
      return this.context.controller;
    },
    enumerable: false,
    configurable: true
  }); // String map observer delegate

  ValueObserver.prototype.getStringMapKeyForAttribute = function (attributeName) {
    if (attributeName in this.valueDescriptorMap) {
      return this.valueDescriptorMap[attributeName].name;
    }
  };

  ValueObserver.prototype.stringMapValueChanged = function (attributeValue, name) {
    this.invokeChangedCallbackForValue(name);
  };

  ValueObserver.prototype.invokeChangedCallbacksForDefaultValues = function () {
    for (var _i = 0, _a = this.valueDescriptors; _i < _a.length; _i++) {
      var _b = _a[_i],
          key = _b.key,
          name_1 = _b.name,
          defaultValue = _b.defaultValue;

      if (defaultValue != undefined && !this.controller.data.has(key)) {
        this.invokeChangedCallbackForValue(name_1);
      }
    }
  };

  ValueObserver.prototype.invokeChangedCallbackForValue = function (name) {
    var methodName = name + "Changed";
    var method = this.receiver[methodName];

    if (typeof method == "function") {
      var value = this.receiver[name];
      method.call(this.receiver, value);
    }
  };

  Object.defineProperty(ValueObserver.prototype, "valueDescriptors", {
    get: function get() {
      var valueDescriptorMap = this.valueDescriptorMap;
      return Object.keys(valueDescriptorMap).map(function (key) {
        return valueDescriptorMap[key];
      });
    },
    enumerable: false,
    configurable: true
  });
  return ValueObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/value_properties.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/value_properties.js ***!
  \**************************************************************/
/*! exports provided: ValuePropertiesBlessing, propertiesForValueDefinitionPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuePropertiesBlessing", function() { return ValuePropertiesBlessing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertiesForValueDefinitionPair", function() { return propertiesForValueDefinitionPair; });
/* harmony import */ var _inheritable_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inheritable_statics */ "./node_modules/@stimulus/core/dist/inheritable_statics.js");
/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string_helpers */ "./node_modules/@stimulus/core/dist/string_helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/** @hidden */

function ValuePropertiesBlessing(constructor) {
  var valueDefinitionPairs = Object(_inheritable_statics__WEBPACK_IMPORTED_MODULE_0__["readInheritableStaticObjectPairs"])(constructor, "values");
  var propertyDescriptorMap = {
    valueDescriptorMap: {
      get: function get() {
        var _this = this;

        return valueDefinitionPairs.reduce(function (result, valueDefinitionPair) {
          var _a;

          var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair);

          var attributeName = _this.data.getAttributeNameForKey(valueDescriptor.key);

          return Object.assign(result, (_a = {}, _a[attributeName] = valueDescriptor, _a));
        }, {});
      }
    }
  };
  return valueDefinitionPairs.reduce(function (properties, valueDefinitionPair) {
    return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
  }, propertyDescriptorMap);
}
/** @hidden */

function propertiesForValueDefinitionPair(valueDefinitionPair) {
  var _a;

  var definition = parseValueDefinitionPair(valueDefinitionPair);
  var type = definition.type,
      key = definition.key,
      name = definition.name;
  var read = readers[type],
      write = writers[type] || writers.default;
  return _a = {}, _a[name] = {
    get: function get() {
      var value = this.data.get(key);

      if (value !== null) {
        return read(value);
      } else {
        return definition.defaultValue;
      }
    },
    set: function set(value) {
      if (value === undefined) {
        this.data.delete(key);
      } else {
        this.data.set(key, write(value));
      }
    }
  }, _a["has" + Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name)] = {
    get: function get() {
      return this.data.has(key);
    }
  }, _a;
}

function parseValueDefinitionPair(_a) {
  var token = _a[0],
      typeConstant = _a[1];
  var type = parseValueTypeConstant(typeConstant);
  return valueDescriptorForTokenAndType(token, type);
}

function parseValueTypeConstant(typeConstant) {
  switch (typeConstant) {
    case Array:
      return "array";

    case Boolean:
      return "boolean";

    case Number:
      return "number";

    case Object:
      return "object";

    case String:
      return "string";
  }

  throw new Error("Unknown value type constant \"" + typeConstant + "\"");
}

function valueDescriptorForTokenAndType(token, type) {
  var key = Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["dasherize"])(token) + "-value";
  return {
    type: type,
    key: key,
    name: Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__["camelize"])(key),

    get defaultValue() {
      return defaultValuesByType[type];
    }

  };
}

var defaultValuesByType = {
  get array() {
    return [];
  },

  boolean: false,
  number: 0,

  get object() {
    return {};
  },

  string: ""
};
var readers = {
  array: function array(value) {
    var array = JSON.parse(value);

    if (!Array.isArray(array)) {
      throw new TypeError("Expected array");
    }

    return array;
  },
  boolean: function boolean(value) {
    return !(value == "0" || value == "false");
  },
  number: function number(value) {
    return parseFloat(value);
  },
  object: function object(value) {
    var object = JSON.parse(value);

    if (object === null || _typeof(object) != "object" || Array.isArray(object)) {
      throw new TypeError("Expected object");
    }

    return object;
  },
  string: function string(value) {
    return value;
  }
};
var writers = {
  default: writeString,
  array: writeJSON,
  object: writeJSON
};

function writeJSON(value) {
  return JSON.stringify(value);
}

function writeString(value) {
  return "" + value;
}

/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/index.js ***!
  \*******************************************************/
/*! exports provided: IndexedMultimap, Multimap, add, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexed_multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexed_multimap */ "./node_modules/@stimulus/multimap/dist/indexed_multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return _indexed_multimap__WEBPACK_IMPORTED_MODULE_0__["IndexedMultimap"]; });

/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multimap */ "./node_modules/@stimulus/multimap/dist/multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return _multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]; });

/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/set_operations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["add"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "del", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["del"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["fetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return _set_operations__WEBPACK_IMPORTED_MODULE_2__["prune"]; });





/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/indexed_multimap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/indexed_multimap.js ***!
  \******************************************************************/
/*! exports provided: IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multimap */ "./node_modules/@stimulus/multimap/dist/multimap.js");
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/set_operations.js");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var IndexedMultimap = function (_super) {
  __extends(IndexedMultimap, _super);

  function IndexedMultimap() {
    var _this = _super.call(this) || this;

    _this.keysByValue = new Map();
    return _this;
  }

  Object.defineProperty(IndexedMultimap.prototype, "values", {
    get: function get() {
      return Array.from(this.keysByValue.keys());
    },
    enumerable: false,
    configurable: true
  });

  IndexedMultimap.prototype.add = function (key, value) {
    _super.prototype.add.call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["add"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype.delete = function (key, value) {
    _super.prototype.delete.call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["del"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype.hasValue = function (value) {
    return this.keysByValue.has(value);
  };

  IndexedMultimap.prototype.getKeysForValue = function (value) {
    var set = this.keysByValue.get(value);
    return set ? Array.from(set) : [];
  };

  return IndexedMultimap;
}(_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]);



/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/multimap.js":
/*!**********************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/multimap.js ***!
  \**********************************************************/
/*! exports provided: Multimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/set_operations.js");


var Multimap = function () {
  function Multimap() {
    this.valuesByKey = new Map();
  }

  Object.defineProperty(Multimap.prototype, "values", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (values, set) {
        return values.concat(Array.from(set));
      }, []);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Multimap.prototype, "size", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (size, set) {
        return size + set.size;
      }, 0);
    },
    enumerable: false,
    configurable: true
  });

  Multimap.prototype.add = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["add"])(this.valuesByKey, key, value);
  };

  Multimap.prototype.delete = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["del"])(this.valuesByKey, key, value);
  };

  Multimap.prototype.has = function (key, value) {
    var values = this.valuesByKey.get(key);
    return values != null && values.has(value);
  };

  Multimap.prototype.hasKey = function (key) {
    return this.valuesByKey.has(key);
  };

  Multimap.prototype.hasValue = function (value) {
    var sets = Array.from(this.valuesByKey.values());
    return sets.some(function (set) {
      return set.has(value);
    });
  };

  Multimap.prototype.getValuesForKey = function (key) {
    var values = this.valuesByKey.get(key);
    return values ? Array.from(values) : [];
  };

  Multimap.prototype.getKeysForValue = function (value) {
    return Array.from(this.valuesByKey).filter(function (_a) {
      var key = _a[0],
          values = _a[1];
      return values.has(value);
    }).map(function (_a) {
      var key = _a[0],
          values = _a[1];
      return key;
    });
  };

  return Multimap;
}();



/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/set_operations.js":
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/set_operations.js ***!
  \****************************************************************/
/*! exports provided: add, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
function add(map, key, value) {
  fetch(map, key).add(value);
}
function del(map, key, value) {
  fetch(map, key).delete(value);
  prune(map, key);
}
function fetch(map, key) {
  var values = map.get(key);

  if (!values) {
    values = new Set();
    map.set(key, values);
  }

  return values;
}
function prune(map, key) {
  var values = map.get(key);

  if (values != null && values.size == 0) {
    map.delete(key);
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js ***!
  \******************************************************************************/
/*! exports provided: AttributeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element_observer */ "./node_modules/@stimulus/mutation-observers/dist/element_observer.js");


var AttributeObserver = function () {
  function AttributeObserver(element, attributeName, delegate) {
    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new _element_observer__WEBPACK_IMPORTED_MODULE_0__["ElementObserver"](element, this);
  }

  Object.defineProperty(AttributeObserver.prototype, "element", {
    get: function get() {
      return this.elementObserver.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AttributeObserver.prototype, "selector", {
    get: function get() {
      return "[" + this.attributeName + "]";
    },
    enumerable: false,
    configurable: true
  });

  AttributeObserver.prototype.start = function () {
    this.elementObserver.start();
  };

  AttributeObserver.prototype.stop = function () {
    this.elementObserver.stop();
  };

  AttributeObserver.prototype.refresh = function () {
    this.elementObserver.refresh();
  };

  Object.defineProperty(AttributeObserver.prototype, "started", {
    get: function get() {
      return this.elementObserver.started;
    },
    enumerable: false,
    configurable: true
  }); // Element observer delegate

  AttributeObserver.prototype.matchElement = function (element) {
    return element.hasAttribute(this.attributeName);
  };

  AttributeObserver.prototype.matchElementsInTree = function (tree) {
    var match = this.matchElement(tree) ? [tree] : [];
    var matches = Array.from(tree.querySelectorAll(this.selector));
    return match.concat(matches);
  };

  AttributeObserver.prototype.elementMatched = function (element) {
    if (this.delegate.elementMatchedAttribute) {
      this.delegate.elementMatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementUnmatched = function (element) {
    if (this.delegate.elementUnmatchedAttribute) {
      this.delegate.elementUnmatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementAttributeChanged = function (element, attributeName) {
    if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
      this.delegate.elementAttributeValueChanged(element, attributeName);
    }
  };

  return AttributeObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/element_observer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/element_observer.js ***!
  \****************************************************************************/
/*! exports provided: ElementObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
var ElementObserver = function () {
  function ElementObserver(element, delegate) {
    var _this = this;

    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }

  ElementObserver.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.mutationObserver.observe(this.element, {
        attributes: true,
        childList: true,
        subtree: true
      });
      this.refresh();
    }
  };

  ElementObserver.prototype.stop = function () {
    if (this.started) {
      this.mutationObserver.takeRecords();
      this.mutationObserver.disconnect();
      this.started = false;
    }
  };

  ElementObserver.prototype.refresh = function () {
    if (this.started) {
      var matches = new Set(this.matchElementsInTree());

      for (var _i = 0, _a = Array.from(this.elements); _i < _a.length; _i++) {
        var element = _a[_i];

        if (!matches.has(element)) {
          this.removeElement(element);
        }
      }

      for (var _b = 0, _c = Array.from(matches); _b < _c.length; _b++) {
        var element = _c[_b];
        this.addElement(element);
      }
    }
  }; // Mutation record processing


  ElementObserver.prototype.processMutations = function (mutations) {
    if (this.started) {
      for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
        var mutation = mutations_1[_i];
        this.processMutation(mutation);
      }
    }
  };

  ElementObserver.prototype.processMutation = function (mutation) {
    if (mutation.type == "attributes") {
      this.processAttributeChange(mutation.target, mutation.attributeName);
    } else if (mutation.type == "childList") {
      this.processRemovedNodes(mutation.removedNodes);
      this.processAddedNodes(mutation.addedNodes);
    }
  };

  ElementObserver.prototype.processAttributeChange = function (node, attributeName) {
    var element = node;

    if (this.elements.has(element)) {
      if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
        this.delegate.elementAttributeChanged(element, attributeName);
      } else {
        this.removeElement(element);
      }
    } else if (this.matchElement(element)) {
      this.addElement(element);
    }
  };

  ElementObserver.prototype.processRemovedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element) {
        this.processTree(element, this.removeElement);
      }
    }
  };

  ElementObserver.prototype.processAddedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element && this.elementIsActive(element)) {
        this.processTree(element, this.addElement);
      }
    }
  }; // Element matching


  ElementObserver.prototype.matchElement = function (element) {
    return this.delegate.matchElement(element);
  };

  ElementObserver.prototype.matchElementsInTree = function (tree) {
    if (tree === void 0) {
      tree = this.element;
    }

    return this.delegate.matchElementsInTree(tree);
  };

  ElementObserver.prototype.processTree = function (tree, processor) {
    for (var _i = 0, _a = this.matchElementsInTree(tree); _i < _a.length; _i++) {
      var element = _a[_i];
      processor.call(this, element);
    }
  };

  ElementObserver.prototype.elementFromNode = function (node) {
    if (node.nodeType == Node.ELEMENT_NODE) {
      return node;
    }
  };

  ElementObserver.prototype.elementIsActive = function (element) {
    if (element.isConnected != this.element.isConnected) {
      return false;
    } else {
      return this.element.contains(element);
    }
  }; // Element tracking


  ElementObserver.prototype.addElement = function (element) {
    if (!this.elements.has(element)) {
      if (this.elementIsActive(element)) {
        this.elements.add(element);

        if (this.delegate.elementMatched) {
          this.delegate.elementMatched(element);
        }
      }
    }
  };

  ElementObserver.prototype.removeElement = function (element) {
    if (this.elements.has(element)) {
      this.elements.delete(element);

      if (this.delegate.elementUnmatched) {
        this.delegate.elementUnmatched(element);
      }
    }
  };

  return ElementObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/index.js ***!
  \*****************************************************************/
/*! exports provided: AttributeObserver, ElementObserver, StringMapObserver, TokenListObserver, ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"]; });

/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element_observer */ "./node_modules/@stimulus/mutation-observers/dist/element_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return _element_observer__WEBPACK_IMPORTED_MODULE_1__["ElementObserver"]; });

/* harmony import */ var _string_map_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string_map_observer */ "./node_modules/@stimulus/mutation-observers/dist/string_map_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return _string_map_observer__WEBPACK_IMPORTED_MODULE_2__["StringMapObserver"]; });

/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return _token_list_observer__WEBPACK_IMPORTED_MODULE_3__["TokenListObserver"]; });

/* harmony import */ var _value_list_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/value_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return _value_list_observer__WEBPACK_IMPORTED_MODULE_4__["ValueListObserver"]; });







/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/string_map_observer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/string_map_observer.js ***!
  \*******************************************************************************/
/*! exports provided: StringMapObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return StringMapObserver; });
var StringMapObserver = function () {
  function StringMapObserver(element, delegate) {
    var _this = this;

    this.element = element;
    this.delegate = delegate;
    this.started = false;
    this.stringMap = new Map();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }

  StringMapObserver.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
      this.refresh();
    }
  };

  StringMapObserver.prototype.stop = function () {
    if (this.started) {
      this.mutationObserver.takeRecords();
      this.mutationObserver.disconnect();
      this.started = false;
    }
  };

  StringMapObserver.prototype.refresh = function () {
    if (this.started) {
      for (var _i = 0, _a = this.knownAttributeNames; _i < _a.length; _i++) {
        var attributeName = _a[_i];
        this.refreshAttribute(attributeName);
      }
    }
  }; // Mutation record processing


  StringMapObserver.prototype.processMutations = function (mutations) {
    if (this.started) {
      for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
        var mutation = mutations_1[_i];
        this.processMutation(mutation);
      }
    }
  };

  StringMapObserver.prototype.processMutation = function (mutation) {
    var attributeName = mutation.attributeName;

    if (attributeName) {
      this.refreshAttribute(attributeName);
    }
  }; // State tracking


  StringMapObserver.prototype.refreshAttribute = function (attributeName) {
    var key = this.delegate.getStringMapKeyForAttribute(attributeName);

    if (key != null) {
      if (!this.stringMap.has(attributeName)) {
        this.stringMapKeyAdded(key, attributeName);
      }

      var value = this.element.getAttribute(attributeName);

      if (this.stringMap.get(attributeName) != value) {
        this.stringMapValueChanged(value, key);
      }

      if (value == null) {
        this.stringMap.delete(attributeName);
        this.stringMapKeyRemoved(key, attributeName);
      } else {
        this.stringMap.set(attributeName, value);
      }
    }
  };

  StringMapObserver.prototype.stringMapKeyAdded = function (key, attributeName) {
    if (this.delegate.stringMapKeyAdded) {
      this.delegate.stringMapKeyAdded(key, attributeName);
    }
  };

  StringMapObserver.prototype.stringMapValueChanged = function (value, key) {
    if (this.delegate.stringMapValueChanged) {
      this.delegate.stringMapValueChanged(value, key);
    }
  };

  StringMapObserver.prototype.stringMapKeyRemoved = function (key, attributeName) {
    if (this.delegate.stringMapKeyRemoved) {
      this.delegate.stringMapKeyRemoved(key, attributeName);
    }
  };

  Object.defineProperty(StringMapObserver.prototype, "knownAttributeNames", {
    get: function get() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StringMapObserver.prototype, "currentAttributeNames", {
    get: function get() {
      return Array.from(this.element.attributes).map(function (attribute) {
        return attribute.name;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StringMapObserver.prototype, "recordedAttributeNames", {
    get: function get() {
      return Array.from(this.stringMap.keys());
    },
    enumerable: false,
    configurable: true
  });
  return StringMapObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js ***!
  \*******************************************************************************/
/*! exports provided: TokenListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/attribute_observer.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");



var TokenListObserver = function () {
  function TokenListObserver(element, attributeName, delegate) {
    this.attributeObserver = new _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
  }

  Object.defineProperty(TokenListObserver.prototype, "started", {
    get: function get() {
      return this.attributeObserver.started;
    },
    enumerable: false,
    configurable: true
  });

  TokenListObserver.prototype.start = function () {
    this.attributeObserver.start();
  };

  TokenListObserver.prototype.stop = function () {
    this.attributeObserver.stop();
  };

  TokenListObserver.prototype.refresh = function () {
    this.attributeObserver.refresh();
  };

  Object.defineProperty(TokenListObserver.prototype, "element", {
    get: function get() {
      return this.attributeObserver.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TokenListObserver.prototype, "attributeName", {
    get: function get() {
      return this.attributeObserver.attributeName;
    },
    enumerable: false,
    configurable: true
  }); // Attribute observer delegate

  TokenListObserver.prototype.elementMatchedAttribute = function (element) {
    this.tokensMatched(this.readTokensForElement(element));
  };

  TokenListObserver.prototype.elementAttributeValueChanged = function (element) {
    var _a = this.refreshTokensForElement(element),
        unmatchedTokens = _a[0],
        matchedTokens = _a[1];

    this.tokensUnmatched(unmatchedTokens);
    this.tokensMatched(matchedTokens);
  };

  TokenListObserver.prototype.elementUnmatchedAttribute = function (element) {
    this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
  };

  TokenListObserver.prototype.tokensMatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenMatched(token);
    });
  };

  TokenListObserver.prototype.tokensUnmatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenUnmatched(token);
    });
  };

  TokenListObserver.prototype.tokenMatched = function (token) {
    this.delegate.tokenMatched(token);
    this.tokensByElement.add(token.element, token);
  };

  TokenListObserver.prototype.tokenUnmatched = function (token) {
    this.delegate.tokenUnmatched(token);
    this.tokensByElement.delete(token.element, token);
  };

  TokenListObserver.prototype.refreshTokensForElement = function (element) {
    var previousTokens = this.tokensByElement.getValuesForKey(element);
    var currentTokens = this.readTokensForElement(element);
    var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function (_a) {
      var previousToken = _a[0],
          currentToken = _a[1];
      return !tokensAreEqual(previousToken, currentToken);
    });

    if (firstDifferingIndex == -1) {
      return [[], []];
    } else {
      return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
    }
  };

  TokenListObserver.prototype.readTokensForElement = function (element) {
    var attributeName = this.attributeName;
    var tokenString = element.getAttribute(attributeName) || "";
    return parseTokenString(tokenString, element, attributeName);
  };

  return TokenListObserver;
}();



function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(function (content) {
    return content.length;
  }).map(function (content, index) {
    return {
      element: element,
      attributeName: attributeName,
      content: content,
      index: index
    };
  });
}

function zip(left, right) {
  var length = Math.max(left.length, right.length);
  return Array.from({
    length: length
  }, function (_, index) {
    return [left[index], right[index]];
  });
}

function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/value_list_observer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/value_list_observer.js ***!
  \*******************************************************************************/
/*! exports provided: ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/token_list_observer.js");


var ValueListObserver = function () {
  function ValueListObserver(element, attributeName, delegate) {
    this.tokenListObserver = new _token_list_observer__WEBPACK_IMPORTED_MODULE_0__["TokenListObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }

  Object.defineProperty(ValueListObserver.prototype, "started", {
    get: function get() {
      return this.tokenListObserver.started;
    },
    enumerable: false,
    configurable: true
  });

  ValueListObserver.prototype.start = function () {
    this.tokenListObserver.start();
  };

  ValueListObserver.prototype.stop = function () {
    this.tokenListObserver.stop();
  };

  ValueListObserver.prototype.refresh = function () {
    this.tokenListObserver.refresh();
  };

  Object.defineProperty(ValueListObserver.prototype, "element", {
    get: function get() {
      return this.tokenListObserver.element;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ValueListObserver.prototype, "attributeName", {
    get: function get() {
      return this.tokenListObserver.attributeName;
    },
    enumerable: false,
    configurable: true
  });

  ValueListObserver.prototype.tokenMatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element).set(token, value);
      this.delegate.elementMatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.tokenUnmatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element).delete(token);
      this.delegate.elementUnmatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.fetchParseResultForToken = function (token) {
    var parseResult = this.parseResultsByToken.get(token);

    if (!parseResult) {
      parseResult = this.parseToken(token);
      this.parseResultsByToken.set(token, parseResult);
    }

    return parseResult;
  };

  ValueListObserver.prototype.fetchValuesByTokenForElement = function (element) {
    var valuesByToken = this.valuesByTokenByElement.get(element);

    if (!valuesByToken) {
      valuesByToken = new Map();
      this.valuesByTokenByElement.set(element, valuesByToken);
    }

    return valuesByToken;
  };

  ValueListObserver.prototype.parseToken = function (token) {
    try {
      var value = this.delegate.parseValueForToken(token);
      return {
        value: value
      };
    } catch (error) {
      return {
        error: error
      };
    }
  };

  return ValueListObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/webpack-helpers/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/webpack-helpers/dist/index.js ***!
  \**************************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return definitionsFromContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return identifierForContextKey; });
function definitionsFromContext(context) {
  return context.keys().map(function (key) {
    return definitionForModuleWithContextAndKey(context, key);
  }).filter(function (value) {
    return value;
  });
}

function definitionForModuleWithContextAndKey(context, key) {
  var identifier = identifierForContextKey(key);

  if (identifier) {
    return definitionForModuleAndIdentifier(context(key), identifier);
  }
}

function definitionForModuleAndIdentifier(module, identifier) {
  var controllerConstructor = module.default;

  if (typeof controllerConstructor == "function") {
    return {
      identifier: identifier,
      controllerConstructor: controllerConstructor
    };
  }
}

function identifierForContextKey(key) {
  var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];

  if (logicalName) {
    return logicalName.replace(/_/g, "-").replace(/\//g, "--");
  }
}

/***/ }),

/***/ "./node_modules/cable_ready/javascript/action_cable.js":
/*!*************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/action_cable.js ***!
  \*************************************************************/
/*! exports provided: consumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consumer", function() { return consumer; });
var consumer;
/* harmony default export */ __webpack_exports__["default"] = ({
  setConsumer: function setConsumer(value) {
    consumer = value;
  }
});

/***/ }),

/***/ "./node_modules/cable_ready/javascript/active_element.js":
/*!***************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/active_element.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var activeElement;
/* harmony default export */ __webpack_exports__["default"] = ({
  get element() {
    return activeElement;
  },

  set: function set(element) {
    activeElement = element;
  }
});

/***/ }),

/***/ "./node_modules/cable_ready/javascript/cable_ready.js":
/*!************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/cable_ready.js ***!
  \************************************************************/
/*! exports provided: perform, performAsync, initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perform", function() { return perform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performAsync", function() { return performAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/cable_ready/javascript/utils.js");
/* harmony import */ var _active_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active_element */ "./node_modules/cable_ready/javascript/active_element.js");
/* harmony import */ var _operation_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operation_store */ "./node_modules/cable_ready/javascript/operation_store.js");
/* harmony import */ var _action_cable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action_cable */ "./node_modules/cable_ready/javascript/action_cable.js");





var perform = function perform(operations) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    emitMissingElementWarnings: true
  };
  var batches = {};
  operations.forEach(function (operation) {
    if (!!operation.batch) batches[operation.batch] = batches[operation.batch] ? ++batches[operation.batch] : 1;
  });
  operations.forEach(function (operation) {
    var name = operation.operation;

    try {
      if (operation.selector) {
        operation.element = operation.xpath ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["xpathToElement"])(operation.selector) : document[operation.selectAll ? 'querySelectorAll' : 'querySelector'](operation.selector);
      } else {
        operation.element = document;
      }

      if (operation.element || options.emitMissingElementWarnings) {
        _active_element__WEBPACK_IMPORTED_MODULE_1__["default"].set(document.activeElement);
        var cableReadyOperation = _operation_store__WEBPACK_IMPORTED_MODULE_2__["default"].all[name];

        if (cableReadyOperation) {
          cableReadyOperation(operation);
          if (!!operation.batch && --batches[operation.batch] === 0) Object(_utils__WEBPACK_IMPORTED_MODULE_0__["dispatch"])(document, 'cable-ready:batch-complete', {
            batch: operation.batch
          });
        } else {
          console.error("CableReady couldn't find the \"".concat(name, "\" operation. Make sure you haven't misspelled the operation name and that you've added all required operations."));
        }
      }
    } catch (e) {
      if (operation.element) {
        console.error("CableReady detected an error in ".concat(name, ": ").concat(e.message, ". If you need to support older browsers make sure you've included the corresponding polyfills. https://docs.stimulusreflex.com/setup#polyfills-for-ie11."));
        console.error(e);
      } else {
        console.warn("CableReady ".concat(name, " failed due to missing DOM element for selector: '").concat(operation.selector, "'"));
      }
    }
  });
};

var performAsync = function performAsync(operations) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    emitMissingElementWarnings: true
  };
  return new Promise(function (resolve, reject) {
    try {
      resolve(perform(operations, options));
    } catch (err) {
      reject(err);
    }
  });
};

var initialize = function initialize() {
  var initializeOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var consumer = initializeOptions.consumer;
  _action_cable__WEBPACK_IMPORTED_MODULE_3__["default"].setConsumer(consumer);
};



/***/ }),

/***/ "./node_modules/cable_ready/javascript/enums.js":
/*!******************************************************!*\
  !*** ./node_modules/cable_ready/javascript/enums.js ***!
  \******************************************************/
/*! exports provided: inputTags, mutableTags, textInputTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputTags", function() { return inputTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutableTags", function() { return mutableTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInputTypes", function() { return textInputTypes; });
var inputTags = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true
};
var mutableTags = {
  INPUT: true,
  TEXTAREA: true,
  OPTION: true
};
var textInputTypes = {
  'datetime-local': true,
  'select-multiple': true,
  'select-one': true,
  color: true,
  date: true,
  datetime: true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  textarea: true,
  time: true,
  url: true,
  week: true
};

/***/ }),

/***/ "./node_modules/cable_ready/javascript/index.js":
/*!******************************************************!*\
  !*** ./node_modules/cable_ready/javascript/index.js ***!
  \******************************************************/
/*! exports provided: Utils, MorphCallbacks, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _morph_callbacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./morph_callbacks */ "./node_modules/cable_ready/javascript/morph_callbacks.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MorphCallbacks", function() { return _morph_callbacks__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/cable_ready/javascript/utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _operation_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operation_store */ "./node_modules/cable_ready/javascript/operation_store.js");
/* harmony import */ var _cable_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cable_ready */ "./node_modules/cable_ready/javascript/cable_ready.js");
/* harmony import */ var _stream_from_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stream_from_element */ "./node_modules/cable_ready/javascript/stream_from_element.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  perform: _cable_ready__WEBPACK_IMPORTED_MODULE_3__["perform"],
  performAsync: _cable_ready__WEBPACK_IMPORTED_MODULE_3__["performAsync"],
  shouldMorphCallbacks: _morph_callbacks__WEBPACK_IMPORTED_MODULE_0__["shouldMorphCallbacks"],
  didMorphCallbacks: _morph_callbacks__WEBPACK_IMPORTED_MODULE_0__["didMorphCallbacks"],
  initialize: _cable_ready__WEBPACK_IMPORTED_MODULE_3__["initialize"],
  addOperation: _operation_store__WEBPACK_IMPORTED_MODULE_2__["addOperation"],
  addOperations: _operation_store__WEBPACK_IMPORTED_MODULE_2__["addOperations"],

  get DOMOperations() {
    console.warn('DEPRECATED: Please use `CableReady.operations` instead of `CableReady.DOMOperations`');
    return _operation_store__WEBPACK_IMPORTED_MODULE_2__["default"].all;
  },

  get operations() {
    return _operation_store__WEBPACK_IMPORTED_MODULE_2__["default"].all;
  }

});

/***/ }),

/***/ "./node_modules/cable_ready/javascript/morph_callbacks.js":
/*!****************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/morph_callbacks.js ***!
  \****************************************************************/
/*! exports provided: shouldMorphCallbacks, didMorphCallbacks, shouldMorph, didMorph, verifyNotMutable, verifyNotPermanent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldMorphCallbacks", function() { return shouldMorphCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didMorphCallbacks", function() { return didMorphCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldMorph", function() { return shouldMorph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didMorph", function() { return didMorph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyNotMutable", function() { return verifyNotMutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyNotPermanent", function() { return verifyNotPermanent; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./node_modules/cable_ready/javascript/enums.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/cable_ready/javascript/utils.js");
/* harmony import */ var _active_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active_element */ "./node_modules/cable_ready/javascript/active_element.js");


 // Indicates whether or not we should morph an element via onBeforeElUpdated callback
// SEE: https://github.com/patrick-steele-idem/morphdom#morphdomfromnode-tonode-options--node
//

var shouldMorph = function shouldMorph(operation) {
  return function (fromEl, toEl) {
    return !shouldMorphCallbacks.map(function (callback) {
      return typeof callback === 'function' ? callback(operation, fromEl, toEl) : true;
    }).includes(false);
  };
}; // Execute any pluggable functions that modify elements after morphing via onElUpdated callback
//


var didMorph = function didMorph(operation) {
  return function (el) {
    didMorphCallbacks.forEach(function (callback) {
      if (typeof callback === 'function') callback(operation, el);
    });
  };
};

var verifyNotMutable = function verifyNotMutable(detail, fromEl, toEl) {
  // Skip nodes that are equal:
  // https://github.com/patrick-steele-idem/morphdom#can-i-make-morphdom-blaze-through-the-dom-tree-even-faster-yes
  if (!_enums__WEBPACK_IMPORTED_MODULE_0__["mutableTags"][fromEl.tagName] && fromEl.isEqualNode(toEl)) return false;
  return true;
};

var verifyNotPermanent = function verifyNotPermanent(detail, fromEl, toEl) {
  var permanentAttributeName = detail.permanentAttributeName;
  if (!permanentAttributeName) return true;
  var permanent = fromEl.closest("[".concat(permanentAttributeName, "]")); // only morph attributes on the active non-permanent text input

  if (!permanent && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isTextInput"])(fromEl) && fromEl === _active_element__WEBPACK_IMPORTED_MODULE_2__["default"].element) {
    var ignore = {
      value: true
    };
    Array.from(toEl.attributes).forEach(function (attribute) {
      if (!ignore[attribute.name]) fromEl.setAttribute(attribute.name, attribute.value);
    });
    return false;
  }

  return !permanent;
};

var shouldMorphCallbacks = [verifyNotMutable, verifyNotPermanent];
var didMorphCallbacks = [];


/***/ }),

/***/ "./node_modules/cable_ready/javascript/operation_store.js":
/*!****************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/operation_store.js ***!
  \****************************************************************/
/*! exports provided: addOperation, addOperations, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOperation", function() { return addOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOperations", function() { return addOperations; });
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations */ "./node_modules/cable_ready/javascript/operations.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var operations = _operations__WEBPACK_IMPORTED_MODULE_0__["default"];

var add = function add(newOperations) {
  operations = _objectSpread(_objectSpread({}, operations), newOperations);
};

var addOperations = function addOperations(operations) {
  add(operations);
};

var addOperation = function addOperation(name, operation) {
  var operations = {};
  operations[name] = operation;
  add(operations);
};


/* harmony default export */ __webpack_exports__["default"] = ({
  get all() {
    return operations;
  }

});

/***/ }),

/***/ "./node_modules/cable_ready/javascript/operations.js":
/*!***********************************************************!*\
  !*** ./node_modules/cable_ready/javascript/operations.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morphdom */ "./node_modules/morphdom/dist/morphdom-esm.js");
/* harmony import */ var _morph_callbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./morph_callbacks */ "./node_modules/cable_ready/javascript/morph_callbacks.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/cable_ready/javascript/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ __webpack_exports__["default"] = ({
  // DOM Mutations
  append: function append(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            focusSelector = operation.focusSelector;
        element.insertAdjacentHTML('beforeend', html || '');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  graft: function graft(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var parent = operation.parent,
            focusSelector = operation.focusSelector;
        var parentElement = document.querySelector(parent);

        if (parentElement) {
          parentElement.appendChild(element);
          Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
        }
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  innerHtml: function innerHtml(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            focusSelector = operation.focusSelector;
        element.innerHTML = html || '';
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  insertAdjacentHtml: function insertAdjacentHtml(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            position = operation.position,
            focusSelector = operation.focusSelector;
        element.insertAdjacentHTML(position || 'beforeend', html || '');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  insertAdjacentText: function insertAdjacentText(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var text = operation.text,
            position = operation.position,
            focusSelector = operation.focusSelector;
        element.insertAdjacentText(position || 'beforeend', text || '');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  morph: function morph(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      var html = operation.html;
      var template = document.createElement('template');
      template.innerHTML = String(html).trim();
      operation.content = template.content;
      var parent = element.parentElement;
      var ordinal = Array.from(parent.children).indexOf(element);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var childrenOnly = operation.childrenOnly,
            focusSelector = operation.focusSelector;
        Object(morphdom__WEBPACK_IMPORTED_MODULE_0__["default"])(element, childrenOnly ? template.content : template.innerHTML, {
          childrenOnly: !!childrenOnly,
          onBeforeElUpdated: Object(_morph_callbacks__WEBPACK_IMPORTED_MODULE_1__["shouldMorph"])(operation),
          onElUpdated: Object(_morph_callbacks__WEBPACK_IMPORTED_MODULE_1__["didMorph"])(operation)
        });
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(parent.children[ordinal], operation);
    });
  },
  outerHtml: function outerHtml(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      var parent = element.parentElement;
      var ordinal = Array.from(parent.children).indexOf(element);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            focusSelector = operation.focusSelector;
        element.outerHTML = html || '';
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(parent.children[ordinal], operation);
    });
  },
  prepend: function prepend(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            focusSelector = operation.focusSelector;
        element.insertAdjacentHTML('afterbegin', html || '');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  remove: function remove(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var focusSelector = operation.focusSelector;
        element.remove();
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
    });
  },
  replace: function replace(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      var parent = element.parentElement;
      var ordinal = Array.from(parent.children).indexOf(element);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var html = operation.html,
            focusSelector = operation.focusSelector;
        element.outerHTML = html || '';
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(parent.children[ordinal], operation);
    });
  },
  textContent: function textContent(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var text = operation.text,
            focusSelector = operation.focusSelector;
        element.textContent = text || '';
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(focusSelector);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  // Element Property Mutations
  addCssClass: function addCssClass(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var _element$classList;

        var name = operation.name;

        (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getClassNames"])(name || '')));
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  removeAttribute: function removeAttribute(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name;
        element.removeAttribute(name);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  removeCssClass: function removeCssClass(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var _element$classList2;

        var name = operation.name;

        (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getClassNames"])(name)));
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setAttribute: function setAttribute(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name,
            value = operation.value;
        element.setAttribute(name, value || '');
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setDatasetProperty: function setDatasetProperty(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name,
            value = operation.value;
        element.dataset[name] = value || '';
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setProperty: function setProperty(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name,
            value = operation.value;
        if (name in element) element[name] = value || '';
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setStyle: function setStyle(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name,
            value = operation.value;
        element.style[name] = value || '';
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setStyles: function setStyles(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var styles = operation.styles;

        for (var _i2 = 0, _Object$entries = Object.entries(styles); _i2 < _Object$entries.length; _i2++) {
          var _ref3 = _Object$entries[_i2];

          var _ref2 = _slicedToArray(_ref3, 2);

          var name = _ref2[0];
          var value = _ref2[1];
          element.style[name] = value || '';
        }
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setValue: function setValue(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var value = operation.value;
        element.value = value || '';
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  // DOM Events
  dispatchEvent: function dispatchEvent(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["processElements"])(operation, function (element) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
        var name = operation.name,
            detail = operation.detail;
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(element, name, detail);
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
    });
  },
  setMeta: function setMeta(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var name = operation.name,
          content = operation.content;
      var meta = document.head.querySelector("meta[name='".concat(name, "']"));

      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }

      meta.content = content;
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  // Browser Manipulations
  clearStorage: function clearStorage(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var type = operation.type;
      var storage = type === 'session' ? sessionStorage : localStorage;
      storage.clear();
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  go: function go(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(window, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var delta = operation.delta;
      history.go(delta);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(window, operation);
  },
  pushState: function pushState(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(window, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var state = operation.state,
          title = operation.title,
          url = operation.url;
      history.pushState(state || {}, title || '', url);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(window, operation);
  },
  redirectTo: function redirectTo(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(window, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var url = operation.url,
          action = operation.action;
      action = action || 'advance';
      if (window.Turbo) window.Turbo.visit(url, {
        action: action
      });
      if (window.Turbolinks) window.Turbolinks.visit(url, {
        action: action
      });
      if (!window.Turbo && !window.Turbolinks) window.location.href = url;
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(window, operation);
  },
  reload: function reload(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(window, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      window.location.reload();
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(window, operation);
  },
  removeStorageItem: function removeStorageItem(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var key = operation.key,
          type = operation.type;
      var storage = type === 'session' ? sessionStorage : localStorage;
      storage.removeItem(key);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  replaceState: function replaceState(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(window, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var state = operation.state,
          title = operation.title,
          url = operation.url;
      history.replaceState(state || {}, title || '', url);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(window, operation);
  },
  scrollIntoView: function scrollIntoView(operation) {
    var element = operation.element;
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      element.scrollIntoView(operation);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
  },
  setCookie: function setCookie(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var cookie = operation.cookie;
      document.cookie = cookie || '';
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  setFocus: function setFocus(operation) {
    var element = operation.element;
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(element, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assignFocus"])(element);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(element, operation);
  },
  setStorageItem: function setStorageItem(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var key = operation.key,
          value = operation.value,
          type = operation.type;
      var storage = type === 'session' ? sessionStorage : localStorage;
      storage.setItem(key, value || '');
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  // Notifications
  consoleLog: function consoleLog(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var message = operation.message,
          level = operation.level;
      level && ['warn', 'info', 'error'].includes(level) ? console[level](message || '') : console.log(message || '');
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  consoleTable: function consoleTable(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var data = operation.data,
          columns = operation.columns;
      console.table(data, columns || []);
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  },
  notification: function notification(operation) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["before"])(document, operation);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["operate"])(operation, function () {
      var title = operation.title,
          options = operation.options;
      Notification.requestPermission().then(function (result) {
        operation.permission = result;
        if (result === 'granted') new Notification(title || '', options);
      });
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["after"])(document, operation);
  }
});

/***/ }),

/***/ "./node_modules/cable_ready/javascript/stream_from_element.js":
/*!********************************************************************!*\
  !*** ./node_modules/cable_ready/javascript/stream_from_element.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cable_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cable_ready */ "./node_modules/cable_ready/javascript/index.js");
/* harmony import */ var _action_cable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action_cable */ "./node_modules/cable_ready/javascript/action_cable.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var StreamFromElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(StreamFromElement, _HTMLElement);

  var _super = _createSuper(StreamFromElement);

  function StreamFromElement() {
    _classCallCheck(this, StreamFromElement);

    return _super.apply(this, arguments);
  }

  _createClass(StreamFromElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.preview) return;

      if (_action_cable__WEBPACK_IMPORTED_MODULE_1__["consumer"]) {
        this.channel = _action_cable__WEBPACK_IMPORTED_MODULE_1__["consumer"].subscriptions.create({
          channel: 'CableReady::Stream',
          identifier: this.getAttribute('identifier')
        }, {
          received: function received(data) {
            if (data.cableReady) cable_ready__WEBPACK_IMPORTED_MODULE_0__["default"].perform(data.operations);
          }
        });
      } else {
        console.error('The `stream_from` helper cannot connect without an ActionCable consumer.\nPlease run `rails generate cable_ready:stream_from` to fix this.');
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.channel) this.channel.unsubscribe();
    }
  }, {
    key: "preview",
    get: function get() {
      return document.documentElement.hasAttribute('data-turbolinks-preview') || document.documentElement.hasAttribute('data-turbo-preview');
    }
  }]);

  return StreamFromElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

if (!window.customElements.get('stream-from')) {
  window.customElements.define('stream-from', StreamFromElement);
}

/***/ }),

/***/ "./node_modules/cable_ready/javascript/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/cable_ready/javascript/utils.js ***!
  \******************************************************/
/*! exports provided: isTextInput, assignFocus, dispatch, xpathToElement, getClassNames, processElements, operate, before, after */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextInput", function() { return isTextInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignFocus", function() { return assignFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xpathToElement", function() { return xpathToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processElements", function() { return processElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operate", function() { return operate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./node_modules/cable_ready/javascript/enums.js");
/* harmony import */ var _active_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active_element */ "./node_modules/cable_ready/javascript/active_element.js");

 // Indicates if the passed element is considered a text input.
//

var isTextInput = function isTextInput(element) {
  return _enums__WEBPACK_IMPORTED_MODULE_0__["inputTags"][element.tagName] && _enums__WEBPACK_IMPORTED_MODULE_0__["textInputTypes"][element.type];
}; // Assigns focus to the appropriate element... preferring the explicitly passed selector
//
// * selector - a CSS selector for the element that should have focus
//


var assignFocus = function assignFocus(selector) {
  var element = selector && selector.nodeType === Node.ELEMENT_NODE ? selector : document.querySelector(selector);
  var focusElement = element || _active_element__WEBPACK_IMPORTED_MODULE_1__["default"].element;
  if (focusElement && focusElement.focus) focusElement.focus();
}; // Dispatches an event on the passed element
//
// * element - the element
// * name - the name of the event
// * detail - the event detail
//


var dispatch = function dispatch(element, name) {
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var init = {
    bubbles: true,
    cancelable: true,
    detail: detail
  };
  var evt = new CustomEvent(name, init);
  element.dispatchEvent(evt);
  if (window.jQuery) window.jQuery(element).trigger(name, detail);
}; // Accepts an xPath query and returns the element found at that position in the DOM
//


var xpathToElement = function xpathToElement(xpath) {
  return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}; // Return an array with the class names to be used
//
// * names - could be a string or an array of strings for multiple classes.
//


var getClassNames = function getClassNames(names) {
  return Array(names).flat();
}; // Perform operation for either the first or all of the elements returned by CSS selector
//
// * operation - the instruction payload from perform
// * callback - the operation function to run for each element
//


var processElements = function processElements(operation, callback) {
  Array.from(operation.selectAll ? operation.element : [operation.element]).forEach(callback);
}; // camelCase to kebab-case
//


var kebabize = function kebabize(str) {
  return str.split('').map(function (letter, idx) {
    return letter.toUpperCase() === letter ? "".concat(idx !== 0 ? '-' : '').concat(letter.toLowerCase()) : letter;
  }).join('');
}; // Provide a standardized pipeline of checks and modifications to all operations based on provided options
// Currently skips execution if cancelled and implements an optional delay
//


var operate = function operate(operation, callback) {
  if (!operation.cancel) {
    operation.delay ? setTimeout(callback, operation.delay) : callback();
    return true;
  }

  return false;
}; // Dispatch life-cycle events with standardized naming


var before = function before(target, operation) {
  return dispatch(target, "cable-ready:before-".concat(kebabize(operation.operation)), operation);
};

var after = function after(target, operation) {
  return dispatch(target, "cable-ready:after-".concat(kebabize(operation.operation)), operation);
};



/***/ }),

/***/ "./node_modules/morphdom/dist/morphdom-esm.js":
/*!****************************************************!*\
  !*** ./node_modules/morphdom/dist/morphdom-esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DOCUMENT_FRAGMENT_NODE = 11;

function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue; // document-fragments dont have attributes so lets not do anything

  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  } // update attributes on original DOM element


  for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;

    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

      if (fromValue !== attrValue) {
        if (attr.prefix === 'xmlns') {
          attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
        }

        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);

      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  } // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.


  var fromNodeAttrs = fromNode.attributes;

  for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;

    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;

      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}

var range; // Create a range object for efficently rendering strings to elements.

var NS_XHTML = 'http://www.w3.org/1999/xhtml';
var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();

function createFragmentFromTemplate(str) {
  var template = doc.createElement('template');
  template.innerHTML = str;
  return template.content.childNodes[0];
}

function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }

  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}

function createFragmentFromWrap(str) {
  var fragment = doc.createElement('body');
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}
/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */


function toElement(str) {
  str = str.trim();

  if (HAS_TEMPLATE_SUPPORT) {
    // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
    // createContextualFragment doesn't support
    // <template> support not available in IE
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }

  return createFragmentFromWrap(str);
}
/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */


function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;
  var fromCodeStart, toCodeStart;

  if (fromNodeName === toNodeName) {
    return true;
  }

  fromCodeStart = fromNodeName.charCodeAt(0);
  toCodeStart = toNodeName.charCodeAt(0); // If the target element is a virtual DOM node or SVG node then we may
  // need to normalize the tag name before comparing. Normal HTML elements that are
  // in the "http://www.w3.org/1999/xhtml"
  // are converted to upper case

  if (fromCodeStart <= 90 && toCodeStart >= 97) {
    // from is upper and to is lower
    return fromNodeName === toNodeName.toUpperCase();
  } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
    // to is upper and from is lower
    return toNodeName === fromNodeName.toUpperCase();
  } else {
    return false;
  }
}
/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */


function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}
/**
 * Copies the children of one DOM element to another DOM element
 */


function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;

  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }

  return toEl;
}

function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];

    if (fromEl[name]) {
      fromEl.setAttribute(name, '');
    } else {
      fromEl.removeAttribute(name);
    }
  }
}

var specialElHandlers = {
  OPTION: function OPTION(fromEl, toEl) {
    var parentNode = fromEl.parentNode;

    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();

      if (parentName === 'OPTGROUP') {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }

      if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
        if (fromEl.hasAttribute('selected') && !toEl.selected) {
          // Workaround for MS Edge bug where the 'selected' attribute can only be
          // removed if set to a non-empty value:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
          fromEl.setAttribute('selected', 'selected');
          fromEl.removeAttribute('selected');
        } // We have to reset select element's selectedIndex to -1, otherwise setting
        // fromEl.selected using the syncBooleanAttrProp below has no effect.
        // The correct selectedIndex will be set in the SELECT special handler below.


        parentNode.selectedIndex = -1;
      }
    }

    syncBooleanAttrProp(fromEl, toEl, 'selected');
  },

  /**
   * The "value" attribute is special for the <input> element since it sets
   * the initial value. Changing the "value" attribute without changing the
   * "value" property will have no effect since it is only used to the set the
   * initial value.  Similar for the "checked" attribute, and "disabled".
   */
  INPUT: function INPUT(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, 'checked');
    syncBooleanAttrProp(fromEl, toEl, 'disabled');

    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }

    if (!toEl.hasAttribute('value')) {
      fromEl.removeAttribute('value');
    }
  },
  TEXTAREA: function TEXTAREA(fromEl, toEl) {
    var newValue = toEl.value;

    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }

    var firstChild = fromEl.firstChild;

    if (firstChild) {
      // Needed for IE. Apparently IE sets the placeholder as the
      // node value and vise versa. This ignores an empty update.
      var oldValue = firstChild.nodeValue;

      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }

      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function SELECT(fromEl, toEl) {
    if (!toEl.hasAttribute('multiple')) {
      var selectedIndex = -1;
      var i = 0; // We have to loop through children of fromEl, not toEl since nodes can be moved
      // from toEl to fromEl directly when morphing.
      // At the time this special handler is invoked, all children have already been morphed
      // and appended to / removed from fromEl, so using fromEl here is safe and correct.

      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;

      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();

        if (nodeName === 'OPTGROUP') {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === 'OPTION') {
            if (curChild.hasAttribute('selected')) {
              selectedIndex = i;
              break;
            }

            i++;
          }

          curChild = curChild.nextSibling;

          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }

      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

function noop() {}

function defaultGetNodeKey(node) {
  if (node) {
    return node.getAttribute && node.getAttribute('id') || node.id;
  }
}

function morphdomFactory(morphAttrs) {
  return function morphdom(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }

    if (typeof toNode === 'string') {
      if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML' || fromNode.nodeName === 'BODY') {
        var toNodeHtml = toNode;
        toNode = doc.createElement('html');
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    }

    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var childrenOnly = options.childrenOnly === true; // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.

    var fromNodesLookup = Object.create(null);
    var keyedRemovalList = [];

    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }

    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;

        while (curChild) {
          var key = undefined;

          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            // If we are skipping keyed nodes then we add the key
            // to a list so that it can be handled at the very end.
            addKeyedRemoval(key);
          } else {
            // Only report the node as discarded if it is not keyed. We do this because
            // at the end we loop through all keyed elements that were unmatched
            // and then discard them in one final pass.
            onNodeDiscarded(curChild);

            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }

          curChild = curChild.nextSibling;
        }
      }
    }
    /**
     * Removes a DOM node out of the original DOM
     *
     * @param  {Node} node The node to remove
     * @param  {Node} parentNode The nodes parent
     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
     * @return {undefined}
     */


    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }

      if (parentNode) {
        parentNode.removeChild(node);
      }

      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    } // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
    // function indexTree(root) {
    //     var treeWalker = document.createTreeWalker(
    //         root,
    //         NodeFilter.SHOW_ELEMENT);
    //
    //     var el;
    //     while((el = treeWalker.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }
    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
    //
    // function indexTree(node) {
    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
    //     var el;
    //     while((el = nodeIterator.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }


    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;

        while (curChild) {
          var key = getNodeKey(curChild);

          if (key) {
            fromNodesLookup[key] = curChild;
          } // Walk recursively


          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }

    indexTree(fromNode);

    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;

      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);

        if (key) {
          var unmatchedFromEl = fromNodesLookup[key]; // if we find a duplicate #id node in cache, replace `el` with cache value
          // and morph it to the child node.

          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          } else {
            handleNodeAdded(curChild);
          }
        } else {
          // recursively call for curChild and it's children to see if we find something in
          // fromNodesLookup
          handleNodeAdded(curChild);
        }

        curChild = nextSibling;
      }
    }

    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      // We have processed all of the "to nodes". If curFromNodeChild is
      // non-null then we still have some from nodes left over that need
      // to be removed
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;

        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          // Since the node is keyed it might be matched up later so we defer
          // the actual removal to later
          addKeyedRemoval(curFromNodeKey);
        } else {
          // NOTE: we skip nested keyed nodes from being removed since there is
          //       still a chance they will be matched up later
          removeNode(curFromNodeChild, fromEl, true
          /* skip keyed nodes */
          );
        }

        curFromNodeChild = fromNextSibling;
      }
    }

    function morphEl(fromEl, toEl, childrenOnly) {
      var toElKey = getNodeKey(toEl);

      if (toElKey) {
        // If an element with an ID is being morphed then it will be in the final
        // DOM so clear it out of the saved elements collection
        delete fromNodesLookup[toElKey];
      }

      if (!childrenOnly) {
        // optional
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        } // update attributes on original DOM element first


        morphAttrs(fromEl, toEl); // optional

        onElUpdated(fromEl);

        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }

      if (fromEl.nodeName !== 'TEXTAREA') {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }

    function morphChildren(fromEl, toEl) {
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl; // walk the children

      outer: while (curToNodeChild) {
        toNextSibling = curToNodeChild.nextSibling;
        curToNodeKey = getNodeKey(curToNodeChild); // walk the fromNode children all the way through

        while (curFromNodeChild) {
          fromNextSibling = curFromNodeChild.nextSibling;

          if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }

          curFromNodeKey = getNodeKey(curFromNodeChild);
          var curFromNodeType = curFromNodeChild.nodeType; // this means if the curFromNodeChild doesnt have a match with the curToNodeChild

          var isCompatible = undefined;

          if (curFromNodeType === curToNodeChild.nodeType) {
            if (curFromNodeType === ELEMENT_NODE) {
              // Both nodes being compared are Element nodes
              if (curToNodeKey) {
                // The target node has a key so we want to match it up with the correct element
                // in the original DOM tree
                if (curToNodeKey !== curFromNodeKey) {
                  // The current element in the original DOM tree does not have a matching key so
                  // let's check our lookup to see if there is a matching element in the original
                  // DOM tree
                  if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                    if (fromNextSibling === matchingFromEl) {
                      // Special case for single element removals. To avoid removing the original
                      // DOM node out of the tree (since that can break CSS transitions, etc.),
                      // we will instead discard the current node and wait until the next
                      // iteration to properly match up the keyed target element with its matching
                      // element in the original tree
                      isCompatible = false;
                    } else {
                      // We found a matching keyed element somewhere in the original DOM tree.
                      // Let's move the original DOM node into the current position and morph
                      // it.
                      // NOTE: We use insertBefore instead of replaceChild because we want to go through
                      // the `removeNode()` function for the node that is being discarded so that
                      // all lifecycle hooks are correctly invoked
                      fromEl.insertBefore(matchingFromEl, curFromNodeChild); // fromNextSibling = curFromNodeChild.nextSibling;

                      if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                      } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true
                        /* skip keyed nodes */
                        );
                      }

                      curFromNodeChild = matchingFromEl;
                    }
                  } else {
                    // The nodes are not compatible since the "to" node has a key and there
                    // is no matching keyed node in the source tree
                    isCompatible = false;
                  }
                }
              } else if (curFromNodeKey) {
                // The original has a key
                isCompatible = false;
              }

              isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);

              if (isCompatible) {
                // We found compatible DOM elements so transform
                // the current "from" node to match the current
                // target DOM node.
                // MORPH
                morphEl(curFromNodeChild, curToNodeChild);
              }
            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
              // Both nodes being compared are Text or Comment nodes
              isCompatible = true; // Simply update nodeValue on the original node to
              // change the text value

              if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
              }
            }
          }

          if (isCompatible) {
            // Advance both the "to" child and the "from" child since we found a match
            // Nothing else to do as we already recursively called morphChildren above
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          } // No compatible match so remove the old node from the DOM and continue trying to find a
          // match in the original DOM. However, we only do this if the from node is not keyed
          // since it is possible that a keyed node might match up with a node somewhere else in the
          // target tree and we don't want to discard it just yet since it still might find a
          // home in the final DOM tree. After everything is done we will remove any keyed nodes
          // that didn't find a home


          if (curFromNodeKey) {
            // Since the node is keyed it might be matched up later so we defer
            // the actual removal to later
            addKeyedRemoval(curFromNodeKey);
          } else {
            // NOTE: we skip nested keyed nodes from being removed since there is
            //       still a chance they will be matched up later
            removeNode(curFromNodeChild, fromEl, true
            /* skip keyed nodes */
            );
          }

          curFromNodeChild = fromNextSibling;
        } // END: while(curFromNodeChild) {}
        // If we got this far then we did not find a candidate match for
        // our "to node" and we exhausted all of the children "from"
        // nodes. Therefore, we will just append the current "to" node
        // to the end


        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
          fromEl.appendChild(matchingFromEl); // MORPH

          morphEl(matchingFromEl, curToNodeChild);
        } else {
          var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);

          if (onBeforeNodeAddedResult !== false) {
            if (onBeforeNodeAddedResult) {
              curToNodeChild = onBeforeNodeAddedResult;
            }

            if (curToNodeChild.actualize) {
              curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
            }

            fromEl.appendChild(curToNodeChild);
            handleNodeAdded(curToNodeChild);
          }
        }

        curToNodeChild = toNextSibling;
        curFromNodeChild = fromNextSibling;
      }

      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];

      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    } // END: morphChildren(...)


    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;

    if (!childrenOnly) {
      // Handle the case where we are given two DOM nodes that are not
      // compatible (e.g. <div> --> <span> or <div> --> TEXT)
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          // Going from an element node to a text node
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        // Text or comment node
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }

          return morphedNode;
        } else {
          // Text node to something else
          morphedNode = toNode;
        }
      }
    }

    if (morphedNode === toNode) {
      // The "to node" was not compatible with the "from node" so we had to
      // toss out the "from node" and use the "to node"
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }

      morphEl(morphedNode, toNode, childrenOnly); // We now need to loop over any keyed nodes that might need to be
      // removed. We only do the removal if we know that the keyed node
      // never found a match. When a keyed node is matched up we remove
      // it out of fromNodesLookup and we use fromNodesLookup to determine
      // if a keyed node has been matched up or not

      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];

          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }

    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      } // If we had to swap out the from node with a new node because the old
      // node was not compatible with the target node then we need to
      // replace the old DOM node in the original DOM tree. This is only
      // possible if the original DOM node was part of a DOM tree which
      // we know is the case if it has a parent node.


      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }

    return morphedNode;
  };
}

var morphdom = morphdomFactory(morphAttrs);
/* harmony default export */ __webpack_exports__["default"] = (morphdom);

/***/ }),

/***/ "./node_modules/stimulus/index.js":
/*!****************************************!*\
  !*** ./node_modules/stimulus/index.js ***!
  \****************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/core */ "./node_modules/@stimulus/core/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["defaultSchema"]; });



/***/ }),

/***/ "./node_modules/stimulus/webpack-helpers.js":
/*!**************************************************!*\
  !*** ./node_modules/stimulus/webpack-helpers.js ***!
  \**************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/webpack-helpers */ "./node_modules/@stimulus/webpack-helpers/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionsFromContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["identifierForContextKey"]; });



/***/ })

/******/ });
//# sourceMappingURL=application-37c62566a40ce3480012.js.map