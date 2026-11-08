import { createRequire } from 'node:module'; const require = createRequire(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/utils/is.js
var require_is = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/utils/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boolean = boolean;
    exports.string = string;
    exports.number = number;
    exports.error = error;
    exports.func = func2;
    exports.array = array;
    exports.stringArray = stringArray;
    exports.typedArray = typedArray;
    exports.thenable = thenable;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func2(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    function thenable(value) {
      return value && func2(value.then);
    }
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/is.js
var require_is2 = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boolean = boolean;
    exports.string = string;
    exports.number = number;
    exports.error = error;
    exports.func = func2;
    exports.array = array;
    exports.stringArray = stringArray;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func2(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/messages.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Message = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType = exports.RequestType0 = exports.AbstractMessageSignature = exports.ParameterStructures = exports.ResponseError = exports.ErrorCodes = void 0;
    var is = __importStar(require_is2());
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
    var ResponseError = class _ResponseError extends Error {
      code;
      data;
      constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, _ResponseError.prototype);
      }
      toJson() {
        const result = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        return result;
      }
    };
    exports.ResponseError = ResponseError;
    var ParameterStructures = class _ParameterStructures {
      kind;
      /**
       * The parameter structure is automatically inferred on the number of parameters
       * and the parameter type in case of a single param.
       */
      static auto = new _ParameterStructures("auto");
      /**
       * Forces `byPosition` parameter structure. This is useful if you have a single
       * parameter which has a literal type.
       */
      static byPosition = new _ParameterStructures("byPosition");
      /**
       * Forces `byName` parameter structure. This is only useful when having a single
       * parameter. The library will report errors if used with a different number of
       * parameters.
       */
      static byName = new _ParameterStructures("byName");
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === _ParameterStructures.auto || value === _ParameterStructures.byName || value === _ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    };
    exports.ParameterStructures = ParameterStructures;
    var AbstractMessageSignature = class {
      method;
      numberOfParams;
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    };
    exports.AbstractMessageSignature = AbstractMessageSignature;
    var RequestType0 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 0);
      }
    };
    exports.RequestType0 = RequestType0;
    var RequestType = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.RequestType = RequestType;
    var RequestType1 = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.RequestType1 = RequestType1;
    var RequestType2 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 2);
      }
    };
    exports.RequestType2 = RequestType2;
    var RequestType3 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 3);
      }
    };
    exports.RequestType3 = RequestType3;
    var RequestType4 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 4);
      }
    };
    exports.RequestType4 = RequestType4;
    var RequestType5 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 5);
      }
    };
    exports.RequestType5 = RequestType5;
    var RequestType6 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 6);
      }
    };
    exports.RequestType6 = RequestType6;
    var RequestType7 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 7);
      }
    };
    exports.RequestType7 = RequestType7;
    var RequestType8 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 8);
      }
    };
    exports.RequestType8 = RequestType8;
    var RequestType9 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 9);
      }
    };
    exports.RequestType9 = RequestType9;
    var NotificationType = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.NotificationType = NotificationType;
    var NotificationType0 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 0);
      }
    };
    exports.NotificationType0 = NotificationType0;
    var NotificationType1 = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.NotificationType1 = NotificationType1;
    var NotificationType2 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 2);
      }
    };
    exports.NotificationType2 = NotificationType2;
    var NotificationType3 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 3);
      }
    };
    exports.NotificationType3 = NotificationType3;
    var NotificationType4 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 4);
      }
    };
    exports.NotificationType4 = NotificationType4;
    var NotificationType5 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 5);
      }
    };
    exports.NotificationType5 = NotificationType5;
    var NotificationType6 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 6);
      }
    };
    exports.NotificationType6 = NotificationType6;
    var NotificationType7 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 7);
      }
    };
    exports.NotificationType7 = NotificationType7;
    var NotificationType8 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 8);
      }
    };
    exports.NotificationType8 = NotificationType8;
    var NotificationType9 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 9);
      }
    };
    exports.NotificationType9 = NotificationType9;
    var Message;
    (function(Message2) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      Message2.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      Message2.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      Message2.isResponse = isResponse;
    })(Message || (exports.Message = Message = {}));
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LRUCache = exports.LinkedMap = exports.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch || (exports.Touch = Touch = {}));
    var LinkedMap = class {
      [Symbol.toStringTag] = "LinkedMap";
      _map;
      _head;
      _tail;
      _size;
      _state;
      constructor() {
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      before(key) {
        const item2 = this._map.get(key);
        return item2 ? item2.previous?.value : void 0;
      }
      after(key) {
        const item2 = this._map.get(key);
        return item2 ? item2.next?.value : void 0;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item2 = this._map.get(key);
        if (!item2) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item2, touch);
        }
        return item2.value;
      }
      set(key, value, touch = Touch.None) {
        let item2 = this._map.get(key);
        if (item2) {
          item2.value = value;
          if (touch !== Touch.None) {
            this.touch(item2, touch);
          }
        } else {
          item2 = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item2);
              break;
            case Touch.First:
              this.addItemFirst(item2);
              break;
            case Touch.Last:
              this.addItemLast(item2);
              break;
            default:
              this.addItemLast(item2);
              break;
          }
          this._map.set(key, item2);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item2 = this._map.get(key);
        if (!item2) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item2);
        this._size--;
        return item2.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item2 = this._head;
        this._map.delete(item2.key);
        this.removeItem(item2);
        this._size--;
        return item2.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item2) {
        if (!this._head && !this._tail) {
          this._tail = item2;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item2.next = this._head;
          this._head.previous = item2;
        }
        this._head = item2;
        this._state++;
      }
      addItemLast(item2) {
        if (!this._head && !this._tail) {
          this._head = item2;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item2.previous = this._tail;
          this._tail.next = item2;
        }
        this._tail = item2;
        this._state++;
      }
      removeItem(item2) {
        if (item2 === this._head && item2 === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item2 === this._head) {
          if (!item2.next) {
            throw new Error("Invalid list");
          }
          item2.next.previous = void 0;
          this._head = item2.next;
        } else if (item2 === this._tail) {
          if (!item2.previous) {
            throw new Error("Invalid list");
          }
          item2.previous.next = void 0;
          this._tail = item2.previous;
        } else {
          const next = item2.next;
          const previous = item2.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item2.next = void 0;
        item2.previous = void 0;
        this._state++;
      }
      touch(item2, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item2 === this._head) {
            return;
          }
          const next = item2.next;
          const previous = item2.previous;
          if (item2 === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item2.previous = void 0;
          item2.next = this._head;
          this._head.previous = item2;
          this._head = item2;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item2 === this._tail) {
            return;
          }
          const next = item2.next;
          const previous = item2.previous;
          if (item2 === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item2.next = void 0;
          item2.previous = this._tail;
          this._tail.next = item2;
          this._tail = item2;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    exports.LinkedMap = LinkedMap;
    var LRUCache = class extends LinkedMap {
      _limit;
      _ratio;
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    };
    exports.LRUCache = LRUCache;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Disposable = void 0;
    var Disposable;
    (function(Disposable2) {
      function create(func2) {
        return {
          dispose: func2
        };
      }
      Disposable2.create = create;
    })(Disposable || (exports.Disposable = Disposable = {}));
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/ral.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports.default = RAL;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/events.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Emitter = exports.Event = void 0;
    var ral_1 = __importDefault(require_ral());
    var Event;
    (function(Event2) {
      const _disposable = { dispose() {
      } };
      Event2.None = function() {
        return _disposable;
      };
    })(Event || (exports.Event = Event = {}));
    var CallbackList = class {
      _callbacks;
      _contexts;
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i3 = 0, len = this._callbacks.length; i3 < len; i3++) {
          if (this._callbacks[i3] === callback) {
            if (this._contexts[i3] === context) {
              this._callbacks.splice(i3, 1);
              this._contexts.splice(i3, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args2) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i3 = 0, len = callbacks.length; i3 < len; i3++) {
          try {
            ret.push(callbacks[i3].apply(contexts[i3], args2));
          } catch (e2) {
            (0, ral_1.default)().console.error(e2);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter = class _Emitter {
      _options;
      static _noop = function() {
      };
      _event;
      _callbacks;
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = _Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports.Emitter = Emitter;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CancellationTokenSource = exports.CancellationToken = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is2());
    var events_1 = require_events();
    var CancellationToken;
    (function(CancellationToken2) {
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is2.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken2.is = is;
    })(CancellationToken || (exports.CancellationToken = CancellationToken = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle2 = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle2.dispose();
      } };
    });
    var MutableToken = class {
      _isCancelled = false;
      _emitter;
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource = class {
      _token;
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports.CancellationTokenSource = CancellationTokenSource;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = void 0;
    var cancellation_1 = require_cancellation();
    var CancellationState;
    (function(CancellationState2) {
      CancellationState2.Continue = 0;
      CancellationState2.Cancelled = 1;
    })(CancellationState || (CancellationState = {}));
    var SharedArraySenderStrategy = class {
      buffers;
      constructor() {
        this.buffers = /* @__PURE__ */ new Map();
      }
      enableCancellation(request) {
        if (request.id === null) {
          return;
        }
        const buffer = new SharedArrayBuffer(4);
        const data = new Int32Array(buffer, 0, 1);
        data[0] = CancellationState.Continue;
        this.buffers.set(request.id, buffer);
        request.$cancellationData = buffer;
      }
      async sendCancellation(_conn, id) {
        const buffer = this.buffers.get(id);
        if (buffer === void 0) {
          return;
        }
        const data = new Int32Array(buffer, 0, 1);
        Atomics.store(data, 0, CancellationState.Cancelled);
      }
      cleanup(id) {
        this.buffers.delete(id);
      }
      dispose() {
        this.buffers.clear();
      }
    };
    exports.SharedArraySenderStrategy = SharedArraySenderStrategy;
    var SharedArrayBufferCancellationToken = class {
      data;
      constructor(buffer) {
        this.data = new Int32Array(buffer, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
      }
    };
    var SharedArrayBufferCancellationTokenSource = class {
      token;
      constructor(buffer) {
        this.token = new SharedArrayBufferCancellationToken(buffer);
      }
      cancel() {
      }
      dispose() {
      }
    };
    var SharedArrayReceiverStrategy = class {
      kind = "request";
      createCancellationTokenSource(request) {
        const buffer = request.$cancellationData;
        if (buffer === void 0) {
          return new cancellation_1.CancellationTokenSource();
        }
        return new SharedArrayBufferCancellationTokenSource(buffer);
      }
    };
    exports.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Semaphore = void 0;
    var ral_1 = __importDefault(require_ral());
    var Semaphore = class {
      _capacity;
      _active;
      _waiting;
      constructor(capacity = 1) {
        if (capacity <= 0) {
          throw new Error("Capacity must be greater than 0");
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
      }
      lock(thunk) {
        return new Promise((resolve2, reject) => {
          this._waiting.push({ thunk, resolve: resolve2, reject });
          this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
          throw new Error(`Too many thunks active`);
        }
        try {
          const result = next.thunk();
          if (result instanceof Promise) {
            result.then((value) => {
              this._active--;
              next.resolve(value);
              this.runNext();
            }, (err2) => {
              this._active--;
              next.reject(err2);
              this.runNext();
            });
          } else {
            this._active--;
            next.resolve(result);
            this.runNext();
          }
        } catch (err2) {
          this._active--;
          next.reject(err2);
          this.runNext();
        }
      }
    };
    exports.Semaphore = Semaphore;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is2());
    var events_1 = require_events();
    var semaphore_1 = require_semaphore();
    var MessageReader;
    (function(MessageReader2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.listen) && Is2.func(candidate.dispose) && Is2.func(candidate.onError) && Is2.func(candidate.onClose) && Is2.func(candidate.onPartialMessage);
      }
      MessageReader2.is = is;
    })(MessageReader || (exports.MessageReader = MessageReader = {}));
    var AbstractMessageReader = class {
      errorEmitter;
      closeEmitter;
      partialMessageEmitter;
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
        this.partialMessageEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error) {
        this.errorEmitter.fire(this.asError(error));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info2) {
        this.partialMessageEmitter.fire(info2);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Reader received error. Reason: ${Is2.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options2) {
        let charset;
        let result;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options2 === void 0 || typeof options2 === "string") {
          charset = options2 ?? "utf-8";
        } else {
          charset = options2.charset ?? "utf-8";
          if (options2.contentDecoder !== void 0) {
            contentDecoder = options2.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options2.contentDecoders !== void 0) {
            for (const decoder of options2.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options2.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options2.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options2.contentTypeDecoders !== void 0) {
            for (const decoder of options2.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    var ReadableStreamMessageReader = class extends AbstractMessageReader {
      readable;
      options;
      callback;
      nextMessageLength;
      messageToken;
      buffer;
      partialMessageTimer;
      _partialMessageTimeout;
      readSemaphore;
      constructor(readable, options2) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options2);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result;
      }
      onData(data) {
        try {
          this.buffer.append(data);
          while (true) {
            if (this.nextMessageLength === -1) {
              const headers = this.buffer.tryReadHeaders(true);
              if (!headers) {
                return;
              }
              const contentLength = headers.get("content-length");
              if (!contentLength) {
                this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(headers))}`));
                return;
              }
              const length = parseInt(contentLength);
              if (isNaN(length)) {
                this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
                return;
              }
              this.nextMessageLength = length;
            }
            const body2 = this.buffer.tryReadBody(this.nextMessageLength);
            if (body2 === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            this.readSemaphore.lock(async () => {
              const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body2) : body2;
              const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
              this.callback(message);
            }).catch((error) => {
              this.fireError(error);
            });
          }
        } catch (error) {
          this.fireError(error);
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    };
    exports.ReadableStreamMessageReader = ReadableStreamMessageReader;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is2());
    var semaphore_1 = require_semaphore();
    var events_1 = require_events();
    var ContentLength = "Content-Length: ";
    var CRLF = "\r\n";
    var MessageWriter;
    (function(MessageWriter2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.dispose) && Is2.func(candidate.onClose) && Is2.func(candidate.onError) && Is2.func(candidate.write);
      }
      MessageWriter2.is = is;
    })(MessageWriter || (exports.MessageWriter = MessageWriter = {}));
    var AbstractMessageWriter = class {
      errorEmitter;
      closeEmitter;
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Writer received error. Reason: ${Is2.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options2) {
        if (options2 === void 0 || typeof options2 === "string") {
          return { charset: options2 ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options2.charset ?? "utf-8", contentEncoder: options2.contentEncoder, contentTypeEncoder: options2.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
      writable;
      options;
      errorCount;
      writeSemaphore;
      constructor(writable, options2) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options2);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error) => {
            this.fireError(error);
            throw error;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    };
    exports.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractMessageBuffer = void 0;
    var CR = 13;
    var LF = 10;
    var CRLF = "\r\n";
    var AbstractMessageBuffer = class {
      _encoding;
      _chunks;
      _totalLength;
      constructor(encoding = "utf-8") {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(chunk) {
        const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
      }
      tryReadHeaders(lowerCaseKeys = false) {
        if (this._chunks.length === 0) {
          return void 0;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row: while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          while (offset < chunk.length) {
            const value = chunk[offset];
            switch (value) {
              case CR:
                switch (state) {
                  case 0:
                    state = 1;
                    break;
                  case 2:
                    state = 3;
                    break;
                  default:
                    state = 0;
                }
                break;
              case LF:
                switch (state) {
                  case 1:
                    state = 2;
                    break;
                  case 3:
                    state = 4;
                    offset++;
                    break row;
                  default:
                    state = 0;
                }
                break;
              default:
                state = 0;
            }
            offset++;
          }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
        if (state !== 4) {
          return void 0;
        }
        const buffer = this._read(chunkBytesRead + offset);
        const result = /* @__PURE__ */ new Map();
        const headers = this.toString(buffer, "ascii").split(CRLF);
        if (headers.length < 2) {
          return result;
        }
        for (let i3 = 0; i3 < headers.length - 2; i3++) {
          const header = headers[i3];
          const index2 = header.indexOf(":");
          if (index2 === -1) {
            throw new Error(`Message header must separate key and value using ':'
${header}`);
          }
          const key = header.substr(0, index2);
          const value = header.substr(index2 + 1).trim();
          result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
        }
        return result;
      }
      tryReadBody(length) {
        if (this._totalLength < length) {
          return void 0;
        }
        return this._read(length);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(byteCount) {
        if (byteCount === 0) {
          return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
          throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
          const chunk = this._chunks[0];
          this._chunks.shift();
          this._totalLength -= byteCount;
          return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
          const chunk = this._chunks[0];
          const result2 = this.asNative(chunk, byteCount);
          this._chunks[0] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          return result2;
        }
        const result = this.allocNative(byteCount);
        let resultOffset = 0;
        const chunkIndex = 0;
        while (byteCount > 0) {
          const chunk = this._chunks[chunkIndex];
          if (chunk.byteLength > byteCount) {
            const chunkPart = chunk.slice(0, byteCount);
            result.set(chunkPart, resultOffset);
            resultOffset += byteCount;
            this._chunks[chunkIndex] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            byteCount -= byteCount;
          } else {
            result.set(chunk, resultOffset);
            resultOffset += chunk.byteLength;
            this._chunks.shift();
            this._totalLength -= chunk.byteLength;
            byteCount -= chunk.byteLength;
          }
        }
        return result;
      }
    };
    exports.AbstractMessageBuffer = AbstractMessageBuffer;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/connection.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConnectionOptions = exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.RequestCancellationReceiverStrategy = exports.IdCancellationReceiverStrategy = exports.ConnectionStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.TraceValue = exports.Trace = exports.NullLogger = exports.ProgressType = exports.ProgressToken = void 0;
    exports.createMessageConnection = createMessageConnection;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is2());
    var messages_1 = require_messages();
    var linkedMap_1 = require_linkedMap();
    var events_1 = require_events();
    var cancellation_1 = require_cancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is;
    })(ProgressToken || (exports.ProgressToken = ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    var ProgressType = class {
      /**
       * Clients must not use these properties. They are here to ensure correct typing.
       * in TypeScript
       */
      __;
      _pr;
      constructor() {
      }
    };
    exports.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is(value) {
        return Is2.func(value);
      }
      StarRequestHandler2.is = is;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace;
    (function(Trace2) {
      Trace2[Trace2["Off"] = 0] = "Off";
      Trace2[Trace2["Messages"] = 1] = "Messages";
      Trace2[Trace2["Compact"] = 2] = "Compact";
      Trace2[Trace2["Verbose"] = 3] = "Verbose";
    })(Trace || (exports.Trace = Trace = {}));
    var TraceValue;
    (function(TraceValue2) {
      TraceValue2.Off = "off";
      TraceValue2.Messages = "messages";
      TraceValue2.Compact = "compact";
      TraceValue2.Verbose = "verbose";
    })(TraceValue || (exports.TraceValue = TraceValue = {}));
    exports.TraceValues = TraceValue;
    (function(Trace2) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return Trace2.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace2.Off;
          case "messages":
            return Trace2.Messages;
          case "compact":
            return Trace2.Compact;
          case "verbose":
            return Trace2.Verbose;
          default:
            return Trace2.Off;
        }
      }
      Trace2.fromString = fromString;
      function toString(value) {
        switch (value) {
          case Trace2.Off:
            return "off";
          case Trace2.Messages:
            return "messages";
          case Trace2.Compact:
            return "compact";
          case Trace2.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace2.toString = toString;
    })(Trace || (exports.Trace = Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification || (exports.SetTraceNotification = SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification || (exports.LogTraceNotification = LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors || (exports.ConnectionErrors = ConnectionErrors = {}));
    var ConnectionError = class _ConnectionError extends Error {
      code;
      constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, _ConnectionError.prototype);
      }
    };
    exports.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is;
    })(ConnectionStrategy || (exports.ConnectionStrategy = ConnectionStrategy = {}));
    var IdCancellationReceiverStrategy;
    (function(IdCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is2.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is2.func(candidate.dispose));
      }
      IdCancellationReceiverStrategy2.is = is;
    })(IdCancellationReceiverStrategy || (exports.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
    var RequestCancellationReceiverStrategy;
    (function(RequestCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "request" && Is2.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is2.func(candidate.dispose));
      }
      RequestCancellationReceiverStrategy2.is = is;
    })(RequestCancellationReceiverStrategy || (exports.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_2) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
      }
      CancellationReceiverStrategy2.is = is;
    })(CancellationReceiverStrategy || (exports.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_2) {
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.sendCancellation) && Is2.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is;
    })(CancellationSenderStrategy || (exports.CancellationSenderStrategy = CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is;
    })(CancellationStrategy || (exports.CancellationStrategy = CancellationStrategy = {}));
    var MessageStrategy;
    (function(MessageStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.handleMessage);
      }
      MessageStrategy2.is = is;
    })(MessageStrategy || (exports.MessageStrategy = MessageStrategy = {}));
    var ConnectionOptions;
    (function(ConnectionOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy) || Is2.number(candidate.maxParallelism));
      }
      ConnectionOptions2.is = is;
    })(ConnectionOptions || (exports.ConnectionOptions = ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection(messageReader, messageWriter, _logger, options2) {
      const logger = _logger !== void 0 ? _logger : exports.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      const maxParallelism = options2?.maxParallelism ?? -1;
      let inFlight = 0;
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options2 && options2.cancellationStrategy ? options2.cancellationStrategy : CancellationStrategy.Message;
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error) {
        errorEmitter.fire([error, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader.onClose(closeHandler);
      messageReader.onError(readErrorHandler);
      messageWriter.onClose(closeHandler);
      messageWriter.onError(writeErrorHandler);
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue2, message) {
        if (messages_1.Message.isRequest(message)) {
          queue2.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          if (maxParallelism === -1) {
            queue2.set(createResponseQueueKey(message.id), message);
          } else {
            handleResponse(message);
          }
        } else {
          queue2.set(createNotificationQueueKey(), message);
        }
      }
      function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
          return;
        }
        if (maxParallelism !== -1 && inFlight >= maxParallelism) {
          return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(async () => {
          timer = void 0;
          if (messageQueue.size === 0) {
            return;
          }
          if (maxParallelism !== -1 && inFlight >= maxParallelism) {
            return;
          }
          const message = messageQueue.shift();
          let result;
          try {
            inFlight++;
            const messageStrategy = options2?.messageStrategy;
            if (MessageStrategy.is(messageStrategy)) {
              result = messageStrategy.handleMessage(message, handleMessage);
            } else {
              result = handleMessage(message);
            }
          } catch (error) {
            logger.error(`Processing message queue failed: ${error.toString()}`);
          } finally {
            if (result instanceof Promise) {
              result.then(() => {
              }).catch((error) => {
                logger.error(`Processing message queue failed: ${error.toString()}`);
              }).finally(() => {
                inFlight--;
                triggerMessageQueue();
              });
            } else {
              inFlight--;
            }
            triggerMessageQueue();
          }
        });
      }
      async function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
          return handleRequest(message);
        } else if (messages_1.Message.isNotification(message)) {
          return handleNotification(message);
        } else if (messages_1.Message.isResponse(message)) {
          return handleResponse(message);
        } else {
          return handleInvalidMessage(message);
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options2?.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      async function handleRequest(requestMessage) {
        if (isDisposed()) {
          return Promise.resolve();
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          return messageWriter.write(message);
        }
        function replyError(error, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          return messageWriter.write(message);
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const resultOrError = await handlerResult;
            await reply(resultOrError, requestMessage.method, startTime);
          } catch (error) {
            if (error instanceof messages_1.ResponseError) {
              await reply(error, requestMessage.method, startTime);
            } else if (error && Is2.string(error.message)) {
              await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
            } else {
              await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          } finally {
            requestTokens.delete(tokenKey);
          }
        } else {
          await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      async function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                await notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  await notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  await notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                await notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              await starNotificationHandler(message.method, message.params);
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is2.string(responseMessage.id) || Is2.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}`;
            } else {
              data = "No parameters provided.";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}`;
              } else if (message.error === void 0) {
                data = "No result returned.";
              }
            }
          }
          const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms.${error}`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}`;
            } else {
              data = "No parameters provided.";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}`;
              } else if (message.error === void 0) {
                data = "No result returned.";
              }
            }
          }
          if (responsePromise) {
            const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result = void 0;
            break;
          case 1:
            result = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result = [];
            for (let i3 = 0; i3 < params.length && i3 < numberOfParams; i3++) {
              result.push(undefinedToNull(params[i3]));
            }
            if (params.length < numberOfParams) {
              for (let i3 = params.length; i3 < numberOfParams; i3++) {
                result.push(null);
              }
            }
            break;
        }
        return result;
      }
      const connection2 = {
        sendNotification: (type, ...args2) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is2.string(type)) {
            method = type;
            const first = args2[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            const paramEnd = args2.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args2[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args2.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args2;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter.write(notificationMessage).catch((error) => {
            logger.error(`Sending notification failed.`);
            throw error;
          });
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is2.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is2.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                if (notificationHandlers.get(method)?.handler === handler) {
                  notificationHandlers.delete(method);
                }
              } else if (starNotificationHandler === type) {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              if (progressHandlers.get(token) === handler) {
                progressHandlers.delete(token);
              }
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection2.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args2) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          function sendCancellation(connection3, id2) {
            const p2 = cancellationStrategy.sender.sendCancellation(connection3, id2);
            if (p2 === void 0) {
              logger.log(`Received no promise from cancellation strategy when cancelling id ${id2}`);
            } else {
              p2.catch(() => {
                logger.log(`Sending cancellation messages for id ${id2} failed.`);
              });
            }
          }
          let method;
          let messageParams;
          let token = void 0;
          if (Is2.string(type)) {
            method = type;
            const first = args2[0];
            const last = args2[args2.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args2.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args2[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args2.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args2;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable;
          let tokenWasCancelled = false;
          if (token !== void 0) {
            if (token.isCancellationRequested) {
              tokenWasCancelled = true;
            } else {
              disposable = token.onCancellationRequested(() => {
                sendCancellation(connection2, id);
              });
            }
          }
          const requestMessage = {
            jsonrpc: version,
            id,
            method,
            params: messageParams
          };
          traceSendingRequest(requestMessage);
          if (typeof cancellationStrategy.sender.enableCancellation === "function") {
            cancellationStrategy.sender.enableCancellation(requestMessage);
          }
          return new Promise(async (resolve2, reject) => {
            const resolveWithCleanup = (r2) => {
              resolve2(r2);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const rejectWithCleanup = (r2) => {
              reject(r2);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            try {
              responsePromises.set(id, responsePromise);
              await messageWriter.write(requestMessage);
              if (tokenWasCancelled) {
                sendCancellation(connection2, id);
              }
            } catch (error) {
              responsePromises.delete(id);
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
              logger.error(`Sending request failed.`);
            }
          });
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is2.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                if (requestHandlers.get(method)?.handler === handler) {
                  requestHandlers.delete(method);
                }
              } else if (starRequestHandler === type) {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is2.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection2.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is2.func(messageWriter.dispose)) {
            messageWriter.dispose();
          }
          if (Is2.func(messageReader.dispose)) {
            messageReader.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection2.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection2.onNotification(ProgressNotification.type, async (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          await handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection2;
    }
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/common/api.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProgressType = exports.ProgressToken = exports.createMessageConnection = exports.NullLogger = exports.ConnectionOptions = exports.ConnectionStrategy = exports.AbstractMessageBuffer = exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = exports.CancellationToken = exports.CancellationTokenSource = exports.Emitter = exports.Event = exports.Disposable = exports.LRUCache = exports.Touch = exports.LinkedMap = exports.ParameterStructures = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.ErrorCodes = exports.ResponseError = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType0 = exports.RequestType = exports.Message = exports.RAL = void 0;
    exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.RequestCancellationReceiverStrategy = exports.IdCancellationReceiverStrategy = exports.CancellationReceiverStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.TraceValue = exports.Trace = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    var linkedMap_1 = require_linkedMap();
    Object.defineProperty(exports, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    var disposable_1 = require_disposable();
    Object.defineProperty(exports, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    var events_1 = require_events();
    Object.defineProperty(exports, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    var cancellation_1 = require_cancellation();
    Object.defineProperty(exports, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    var sharedArrayCancellation_1 = require_sharedArrayCancellation();
    Object.defineProperty(exports, "SharedArraySenderStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArraySenderStrategy;
    } });
    Object.defineProperty(exports, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
    } });
    var messageReader_1 = require_messageReader();
    Object.defineProperty(exports, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    var messageWriter_1 = require_messageWriter();
    Object.defineProperty(exports, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    var messageBuffer_1 = require_messageBuffer();
    Object.defineProperty(exports, "AbstractMessageBuffer", { enumerable: true, get: function() {
      return messageBuffer_1.AbstractMessageBuffer;
    } });
    var connection_1 = require_connection();
    Object.defineProperty(exports, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports, "TraceValue", { enumerable: true, get: function() {
      return connection_1.TraceValue;
    } });
    Object.defineProperty(exports, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports, "IdCancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.IdCancellationReceiverStrategy;
    } });
    Object.defineProperty(exports, "RequestCancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.RequestCancellationReceiverStrategy;
    } });
    Object.defineProperty(exports, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    Object.defineProperty(exports, "MessageStrategy", { enumerable: true, get: function() {
      return connection_1.MessageStrategy;
    } });
    Object.defineProperty(exports, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    var ral_1 = __importDefault(require_ral());
    exports.RAL = ral_1.default;
  }
});

// node_modules/.pnpm/vscode-languageserver-types@3.18.5/node_modules/vscode-languageserver-types/lib/esm/main.js
var main_exports = {};
__export(main_exports, {
  AnnotatedTextEdit: () => AnnotatedTextEdit,
  ApplyKind: () => ApplyKind,
  ChangeAnnotation: () => ChangeAnnotation,
  ChangeAnnotationIdentifier: () => ChangeAnnotationIdentifier,
  CodeAction: () => CodeAction,
  CodeActionContext: () => CodeActionContext,
  CodeActionKind: () => CodeActionKind,
  CodeActionTag: () => CodeActionTag,
  CodeActionTriggerKind: () => CodeActionTriggerKind,
  CodeDescription: () => CodeDescription,
  CodeLens: () => CodeLens,
  Color: () => Color,
  ColorInformation: () => ColorInformation,
  ColorPresentation: () => ColorPresentation,
  Command: () => Command,
  CompletionItem: () => CompletionItem,
  CompletionItemKind: () => CompletionItemKind,
  CompletionItemLabelDetails: () => CompletionItemLabelDetails,
  CompletionItemTag: () => CompletionItemTag,
  CompletionList: () => CompletionList,
  CreateFile: () => CreateFile,
  DeleteFile: () => DeleteFile,
  Diagnostic: () => Diagnostic,
  DiagnosticRelatedInformation: () => DiagnosticRelatedInformation,
  DiagnosticSeverity: () => DiagnosticSeverity,
  DiagnosticTag: () => DiagnosticTag,
  DocumentHighlight: () => DocumentHighlight,
  DocumentHighlightKind: () => DocumentHighlightKind,
  DocumentLink: () => DocumentLink,
  DocumentSymbol: () => DocumentSymbol,
  DocumentUri: () => DocumentUri,
  EOL: () => EOL,
  FoldingRange: () => FoldingRange,
  FoldingRangeKind: () => FoldingRangeKind,
  FormattingOptions: () => FormattingOptions,
  Hover: () => Hover,
  InlayHint: () => InlayHint,
  InlayHintKind: () => InlayHintKind,
  InlayHintLabelPart: () => InlayHintLabelPart,
  InlineCompletionContext: () => InlineCompletionContext,
  InlineCompletionItem: () => InlineCompletionItem,
  InlineCompletionList: () => InlineCompletionList,
  InlineCompletionTriggerKind: () => InlineCompletionTriggerKind,
  InlineValueContext: () => InlineValueContext,
  InlineValueEvaluatableExpression: () => InlineValueEvaluatableExpression,
  InlineValueText: () => InlineValueText,
  InlineValueVariableLookup: () => InlineValueVariableLookup,
  InsertReplaceEdit: () => InsertReplaceEdit,
  InsertTextFormat: () => InsertTextFormat,
  InsertTextMode: () => InsertTextMode,
  LanguageKind: () => LanguageKind,
  Location: () => Location,
  LocationLink: () => LocationLink,
  MarkedString: () => MarkedString,
  MarkupContent: () => MarkupContent,
  MarkupKind: () => MarkupKind,
  OptionalVersionedTextDocumentIdentifier: () => OptionalVersionedTextDocumentIdentifier,
  ParameterInformation: () => ParameterInformation,
  Position: () => Position,
  Range: () => Range,
  RenameFile: () => RenameFile,
  SelectedCompletionInfo: () => SelectedCompletionInfo,
  SelectionRange: () => SelectionRange,
  SemanticTokenModifiers: () => SemanticTokenModifiers,
  SemanticTokenTypes: () => SemanticTokenTypes,
  SemanticTokens: () => SemanticTokens,
  SignatureInformation: () => SignatureInformation,
  SnippetTextEdit: () => SnippetTextEdit,
  StringValue: () => StringValue,
  SymbolInformation: () => SymbolInformation,
  SymbolKind: () => SymbolKind,
  SymbolTag: () => SymbolTag,
  TextDocument: () => TextDocument,
  TextDocumentEdit: () => TextDocumentEdit,
  TextDocumentIdentifier: () => TextDocumentIdentifier,
  TextDocumentItem: () => TextDocumentItem,
  TextEdit: () => TextEdit,
  URI: () => URI,
  VersionedTextDocumentIdentifier: () => VersionedTextDocumentIdentifier,
  WorkspaceChange: () => WorkspaceChange,
  WorkspaceEdit: () => WorkspaceEdit,
  WorkspaceFolder: () => WorkspaceFolder,
  WorkspaceSymbol: () => WorkspaceSymbol,
  integer: () => integer,
  uinteger: () => uinteger
});
var DocumentUri, URI, integer, uinteger, Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, DiagnosticTag, CodeDescription, Diagnostic, Command, TextEdit, ChangeAnnotation, ChangeAnnotationIdentifier, AnnotatedTextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, TextEditChangeImpl, SnippetTextEdit, ChangeAnnotations, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, OptionalVersionedTextDocumentIdentifier, LanguageKind, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItemTag, InsertReplaceEdit, InsertTextMode, ApplyKind, CompletionItemLabelDetails, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolTag, SymbolInformation, WorkspaceSymbol, DocumentSymbol, CodeActionKind, CodeActionTriggerKind, CodeActionContext, CodeActionTag, CodeAction, CodeLens, FormattingOptions, DocumentLink, SelectionRange, SemanticTokenTypes, SemanticTokenModifiers, SemanticTokens, InlineValueText, InlineValueVariableLookup, InlineValueEvaluatableExpression, InlineValueContext, InlayHintKind, InlayHintLabelPart, InlayHint, StringValue, InlineCompletionItem, InlineCompletionList, InlineCompletionTriggerKind, SelectedCompletionInfo, InlineCompletionContext, WorkspaceFolder, EOL, TextDocument, FullTextDocument, Is;
var init_main = __esm({
  "node_modules/.pnpm/vscode-languageserver-types@3.18.5/node_modules/vscode-languageserver-types/lib/esm/main.js"() {
    "use strict";
    (function(DocumentUri2) {
      function is(value) {
        return typeof value === "string";
      }
      DocumentUri2.is = is;
    })(DocumentUri || (DocumentUri = {}));
    (function(URI2) {
      function is(value) {
        return typeof value === "string";
      }
      URI2.is = is;
    })(URI || (URI = {}));
    (function(integer2) {
      integer2.MIN_VALUE = -2147483648;
      integer2.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
      }
      integer2.is = is;
    })(integer || (integer = {}));
    (function(uinteger2) {
      uinteger2.MIN_VALUE = 0;
      uinteger2.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
      }
      uinteger2.is = is;
    })(uinteger || (uinteger = {}));
    (function(Position2) {
      function create(line, character) {
        if (line === Number.MAX_VALUE) {
          line = uinteger.MAX_VALUE;
        }
        if (character === Number.MAX_VALUE) {
          character = uinteger.MAX_VALUE;
        }
        return { line, character };
      }
      Position2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
      }
      Position2.is = is;
    })(Position || (Position = {}));
    (function(Range2) {
      function create(one, two, three, four) {
        if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
          return { start: Position.create(one, two), end: Position.create(three, four) };
        } else if (Position.is(one) && Position.is(two)) {
          return { start: one, end: two };
        } else {
          throw new Error(`Range#create called with invalid arguments[${one}, ${two}, ${three}, ${four}]`);
        }
      }
      Range2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
      }
      Range2.is = is;
    })(Range || (Range = {}));
    (function(Location2) {
      function create(uri, range) {
        return { uri, range };
      }
      Location2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
      }
      Location2.is = is;
    })(Location || (Location = {}));
    (function(LocationLink2) {
      function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
      }
      LocationLink2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
      }
      LocationLink2.is = is;
    })(LocationLink || (LocationLink = {}));
    (function(Color2) {
      function create(red, green, blue, alpha) {
        return {
          red,
          green,
          blue,
          alpha
        };
      }
      Color2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
      }
      Color2.is = is;
    })(Color || (Color = {}));
    (function(ColorInformation2) {
      function create(range, color) {
        return {
          range,
          color
        };
      }
      ColorInformation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
      }
      ColorInformation2.is = is;
    })(ColorInformation || (ColorInformation = {}));
    (function(ColorPresentation2) {
      function create(label, textEdit, additionalTextEdits) {
        return {
          label,
          textEdit,
          additionalTextEdits
        };
      }
      ColorPresentation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate.textEdit)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
      }
      ColorPresentation2.is = is;
    })(ColorPresentation || (ColorPresentation = {}));
    (function(FoldingRangeKind2) {
      FoldingRangeKind2.Comment = "comment";
      FoldingRangeKind2.Imports = "imports";
      FoldingRangeKind2.Region = "region";
    })(FoldingRangeKind || (FoldingRangeKind = {}));
    (function(FoldingRange2) {
      function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
        const result = {
          startLine,
          endLine
        };
        if (Is.defined(startCharacter)) {
          result.startCharacter = startCharacter;
        }
        if (Is.defined(endCharacter)) {
          result.endCharacter = endCharacter;
        }
        if (Is.defined(kind)) {
          result.kind = kind;
        }
        if (Is.defined(collapsedText)) {
          result.collapsedText = collapsedText;
        }
        return result;
      }
      FoldingRange2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.endLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
      }
      FoldingRange2.is = is;
    })(FoldingRange || (FoldingRange = {}));
    (function(DiagnosticRelatedInformation2) {
      function create(location2, message) {
        return {
          location: location2,
          message
        };
      }
      DiagnosticRelatedInformation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
      }
      DiagnosticRelatedInformation2.is = is;
    })(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
    (function(DiagnosticSeverity2) {
      DiagnosticSeverity2.Error = 1;
      DiagnosticSeverity2.Warning = 2;
      DiagnosticSeverity2.Information = 3;
      DiagnosticSeverity2.Hint = 4;
    })(DiagnosticSeverity || (DiagnosticSeverity = {}));
    (function(DiagnosticTag2) {
      DiagnosticTag2.Unnecessary = 1;
      DiagnosticTag2.Deprecated = 2;
    })(DiagnosticTag || (DiagnosticTag = {}));
    (function(CodeDescription2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.href);
      }
      CodeDescription2.is = is;
    })(CodeDescription || (CodeDescription = {}));
    (function(Diagnostic2) {
      function create(range, message, severity, code, source, relatedInformation) {
        const result = { range, message };
        if (Is.defined(severity)) {
          result.severity = severity;
        }
        if (Is.defined(code)) {
          result.code = code;
        }
        if (Is.defined(source)) {
          result.source = source;
        }
        if (Is.defined(relatedInformation)) {
          result.relatedInformation = relatedInformation;
        }
        return result;
      }
      Diagnostic2.create = create;
      function is(value) {
        var _a;
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.string(candidate.message) || MarkupContent.is(candidate.message)) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
      }
      Diagnostic2.is = is;
      function is3_17(value) {
        return Is.string(value.message);
      }
      Diagnostic2.is3_17 = is3_17;
      function getMessageString(diagnostic) {
        if (Is.string(diagnostic.message)) {
          return diagnostic.message;
        } else if (MarkupContent.is(diagnostic.message)) {
          return diagnostic.message.value;
        } else {
          throw new Error(`Unknown message type ${typeof diagnostic.message}`);
        }
      }
      Diagnostic2.getMessageString = getMessageString;
    })(Diagnostic || (Diagnostic = {}));
    (function(Command2) {
      function create(title, command, ...args2) {
        const result = { title, command };
        if (Is.defined(args2) && args2.length > 0) {
          result.arguments = args2;
        }
        return result;
      }
      Command2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip)) && Is.string(candidate.command);
      }
      Command2.is = is;
    })(Command || (Command = {}));
    (function(TextEdit2) {
      function replace(range, newText) {
        return { range, newText };
      }
      TextEdit2.replace = replace;
      function insert(position, newText) {
        return { range: { start: position, end: position }, newText };
      }
      TextEdit2.insert = insert;
      function del(range) {
        return { range, newText: "" };
      }
      TextEdit2.del = del;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
      }
      TextEdit2.is = is;
    })(TextEdit || (TextEdit = {}));
    (function(ChangeAnnotation2) {
      function create(label, needsConfirmation, description) {
        const result = { label };
        if (needsConfirmation !== void 0) {
          result.needsConfirmation = needsConfirmation;
        }
        if (description !== void 0) {
          result.description = description;
        }
        return result;
      }
      ChangeAnnotation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
      }
      ChangeAnnotation2.is = is;
    })(ChangeAnnotation || (ChangeAnnotation = {}));
    (function(ChangeAnnotationIdentifier2) {
      function is(value) {
        const candidate = value;
        return Is.string(candidate);
      }
      ChangeAnnotationIdentifier2.is = is;
    })(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
    (function(AnnotatedTextEdit2) {
      function replace(range, newText, annotation) {
        return { range, newText, annotationId: annotation };
      }
      AnnotatedTextEdit2.replace = replace;
      function insert(position, newText, annotation) {
        return { range: { start: position, end: position }, newText, annotationId: annotation };
      }
      AnnotatedTextEdit2.insert = insert;
      function del(range, annotation) {
        return { range, newText: "", annotationId: annotation };
      }
      AnnotatedTextEdit2.del = del;
      function is(value) {
        const candidate = value;
        return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      AnnotatedTextEdit2.is = is;
    })(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
    (function(TextDocumentEdit2) {
      function create(textDocument, edits) {
        return { textDocument, edits };
      }
      TextDocumentEdit2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
      }
      TextDocumentEdit2.is = is;
    })(TextDocumentEdit || (TextDocumentEdit = {}));
    (function(CreateFile2) {
      function create(uri, options2, annotation) {
        const result = {
          kind: "create",
          uri
        };
        if (options2 !== void 0 && (options2.overwrite !== void 0 || options2.ignoreIfExists !== void 0)) {
          result.options = options2;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      CreateFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      CreateFile2.is = is;
    })(CreateFile || (CreateFile = {}));
    (function(RenameFile2) {
      function create(oldUri, newUri, options2, annotation) {
        const result = {
          kind: "rename",
          oldUri,
          newUri
        };
        if (options2 !== void 0 && (options2.overwrite !== void 0 || options2.ignoreIfExists !== void 0)) {
          result.options = options2;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      RenameFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      RenameFile2.is = is;
    })(RenameFile || (RenameFile = {}));
    (function(DeleteFile2) {
      function create(uri, options2, annotation) {
        const result = {
          kind: "delete",
          uri
        };
        if (options2 !== void 0 && (options2.recursive !== void 0 || options2.ignoreIfNotExists !== void 0)) {
          result.options = options2;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      DeleteFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      DeleteFile2.is = is;
    })(DeleteFile || (DeleteFile = {}));
    (function(WorkspaceEdit2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every((change) => {
          if (Is.string(change.kind)) {
            return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
          } else {
            return TextDocumentEdit.is(change);
          }
        }));
      }
      WorkspaceEdit2.is = is;
    })(WorkspaceEdit || (WorkspaceEdit = {}));
    TextEditChangeImpl = class {
      constructor(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
      }
      insert(position, newText, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.insert(position, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      replace(range, newText, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.replace(range, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      delete(range, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.del(range);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.del(range, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.del(range, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      add(edit) {
        this.edits.push(edit);
      }
      all() {
        return this.edits;
      }
      clear() {
        this.edits.splice(0, this.edits.length);
      }
      assertChangeAnnotations(value) {
        if (value === void 0) {
          throw new Error(`Text edit change is not configured to manage change annotations.`);
        }
      }
    };
    (function(SnippetTextEdit2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && StringValue.isSnippet(candidate.snippet) && (candidate.annotationId === void 0 || (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId)));
      }
      SnippetTextEdit2.is = is;
    })(SnippetTextEdit || (SnippetTextEdit = {}));
    ChangeAnnotations = class {
      constructor(annotations) {
        this._annotations = annotations === void 0 ? /* @__PURE__ */ Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
      }
      all() {
        return this._annotations;
      }
      get size() {
        return this._size;
      }
      manage(idOrAnnotation, annotation) {
        let id;
        if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
          id = idOrAnnotation;
        } else {
          id = this.nextId();
          annotation = idOrAnnotation;
        }
        if (this._annotations[id] !== void 0) {
          throw new Error(`Id ${id} is already in use.`);
        }
        if (annotation === void 0) {
          throw new Error(`No annotation provided for id ${id}`);
        }
        this._annotations[id] = annotation;
        this._size++;
        return id;
      }
      nextId() {
        this._counter++;
        return this._counter.toString();
      }
    };
    WorkspaceChange = class {
      constructor(workspaceEdit) {
        this._textEditChanges = /* @__PURE__ */ Object.create(null);
        if (workspaceEdit !== void 0) {
          this._workspaceEdit = workspaceEdit;
          if (workspaceEdit.documentChanges) {
            this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
            workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            workspaceEdit.documentChanges.forEach((change) => {
              if (TextDocumentEdit.is(change)) {
                const textEditChange = new TextEditChangeImpl(change.edits, this._changeAnnotations);
                this._textEditChanges[change.textDocument.uri] = textEditChange;
              }
            });
          } else if (workspaceEdit.changes) {
            Object.keys(workspaceEdit.changes).forEach((key) => {
              const textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
              this._textEditChanges[key] = textEditChange;
            });
          }
        } else {
          this._workspaceEdit = {};
        }
      }
      /**
       * Returns the underlying {@link WorkspaceEdit} literal
       * use to be returned from a workspace edit operation like rename.
       */
      get edit() {
        this.initDocumentChanges();
        if (this._changeAnnotations !== void 0) {
          if (this._changeAnnotations.size === 0) {
            this._workspaceEdit.changeAnnotations = void 0;
          } else {
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
          }
        }
        return this._workspaceEdit;
      }
      getTextEditChange(key) {
        if (OptionalVersionedTextDocumentIdentifier.is(key)) {
          this.initDocumentChanges();
          if (this._workspaceEdit.documentChanges === void 0) {
            throw new Error("Workspace edit is not configured for document changes.");
          }
          const textDocument = { uri: key.uri, version: key.version };
          let result = this._textEditChanges[textDocument.uri];
          if (!result) {
            const edits = [];
            const textDocumentEdit = {
              textDocument,
              edits
            };
            this._workspaceEdit.documentChanges.push(textDocumentEdit);
            result = new TextEditChangeImpl(edits, this._changeAnnotations);
            this._textEditChanges[textDocument.uri] = result;
          }
          return result;
        } else {
          this.initChanges();
          if (this._workspaceEdit.changes === void 0) {
            throw new Error("Workspace edit is not configured for normal text edit changes.");
          }
          let result = this._textEditChanges[key];
          if (!result) {
            const edits = [];
            this._workspaceEdit.changes[key] = edits;
            result = new TextEditChangeImpl(edits);
            this._textEditChanges[key] = result;
          }
          return result;
        }
      }
      initDocumentChanges() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
          this._changeAnnotations = new ChangeAnnotations();
          this._workspaceEdit.documentChanges = [];
          this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
        }
      }
      initChanges() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
          this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null);
        }
      }
      createFile(uri, optionsOrAnnotation, options2) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options2 = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = CreateFile.create(uri, options2);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = CreateFile.create(uri, options2, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
      renameFile(oldUri, newUri, optionsOrAnnotation, options2) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options2 = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = RenameFile.create(oldUri, newUri, options2);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = RenameFile.create(oldUri, newUri, options2, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
      deleteFile(uri, optionsOrAnnotation, options2) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options2 = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = DeleteFile.create(uri, options2);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = DeleteFile.create(uri, options2, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
    };
    (function(TextDocumentIdentifier2) {
      function create(uri) {
        return { uri };
      }
      TextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
      }
      TextDocumentIdentifier2.is = is;
    })(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
    (function(VersionedTextDocumentIdentifier2) {
      function create(uri, version) {
        return { uri, version };
      }
      VersionedTextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
      }
      VersionedTextDocumentIdentifier2.is = is;
    })(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
    (function(OptionalVersionedTextDocumentIdentifier2) {
      function create(uri, version) {
        return { uri, version };
      }
      OptionalVersionedTextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
      }
      OptionalVersionedTextDocumentIdentifier2.is = is;
    })(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
    (function(LanguageKind2) {
      LanguageKind2.ABAP = "abap";
      LanguageKind2.WindowsBat = "bat";
      LanguageKind2.BibTeX = "bibtex";
      LanguageKind2.Clojure = "clojure";
      LanguageKind2.Coffeescript = "coffeescript";
      LanguageKind2.C = "c";
      LanguageKind2.CPP = "cpp";
      LanguageKind2.CSharp = "csharp";
      LanguageKind2.CSS = "css";
      LanguageKind2.D = "d";
      LanguageKind2.Delphi = "pascal";
      LanguageKind2.Diff = "diff";
      LanguageKind2.Dart = "dart";
      LanguageKind2.Dockerfile = "dockerfile";
      LanguageKind2.Elixir = "elixir";
      LanguageKind2.Erlang = "erlang";
      LanguageKind2.FSharp = "fsharp";
      LanguageKind2.GitCommit = "git-commit";
      LanguageKind2.GitRebase = "git-rebase";
      LanguageKind2.Go = "go";
      LanguageKind2.Groovy = "groovy";
      LanguageKind2.Handlebars = "handlebars";
      LanguageKind2.Haskell = "haskell";
      LanguageKind2.HTML = "html";
      LanguageKind2.Ini = "ini";
      LanguageKind2.Java = "java";
      LanguageKind2.JavaScript = "javascript";
      LanguageKind2.JavaScriptReact = "javascriptreact";
      LanguageKind2.JSON = "json";
      LanguageKind2.LaTeX = "latex";
      LanguageKind2.Less = "less";
      LanguageKind2.Lua = "lua";
      LanguageKind2.Makefile = "makefile";
      LanguageKind2.Markdown = "markdown";
      LanguageKind2.ObjectiveC = "objective-c";
      LanguageKind2.ObjectiveCPP = "objective-cpp";
      LanguageKind2.Pascal = "pascal";
      LanguageKind2.Perl = "perl";
      LanguageKind2.Perl6 = "perl6";
      LanguageKind2.PHP = "php";
      LanguageKind2.Plaintext = "plaintext";
      LanguageKind2.Powershell = "powershell";
      LanguageKind2.Pug = "jade";
      LanguageKind2.Python = "python";
      LanguageKind2.R = "r";
      LanguageKind2.Razor = "razor";
      LanguageKind2.Ruby = "ruby";
      LanguageKind2.Rust = "rust";
      LanguageKind2.SCSS = "scss";
      LanguageKind2.SASS = "sass";
      LanguageKind2.Scala = "scala";
      LanguageKind2.ShaderLab = "shaderlab";
      LanguageKind2.ShellScript = "shellscript";
      LanguageKind2.SQL = "sql";
      LanguageKind2.Swift = "swift";
      LanguageKind2.TypeScript = "typescript";
      LanguageKind2.TypeScriptReact = "typescriptreact";
      LanguageKind2.TeX = "tex";
      LanguageKind2.VisualBasic = "vb";
      LanguageKind2.XML = "xml";
      LanguageKind2.XSL = "xsl";
      LanguageKind2.YAML = "yaml";
    })(LanguageKind || (LanguageKind = {}));
    (function(TextDocumentItem2) {
      function create(uri, languageId, version, text) {
        return { uri, languageId, version, text };
      }
      TextDocumentItem2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
      }
      TextDocumentItem2.is = is;
    })(TextDocumentItem || (TextDocumentItem = {}));
    (function(MarkupKind2) {
      MarkupKind2.PlainText = "plaintext";
      MarkupKind2.Markdown = "markdown";
      function is(value) {
        const candidate = value;
        return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
      }
      MarkupKind2.is = is;
    })(MarkupKind || (MarkupKind = {}));
    (function(MarkupContent2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
      }
      MarkupContent2.is = is;
    })(MarkupContent || (MarkupContent = {}));
    (function(CompletionItemKind2) {
      CompletionItemKind2.Text = 1;
      CompletionItemKind2.Method = 2;
      CompletionItemKind2.Function = 3;
      CompletionItemKind2.Constructor = 4;
      CompletionItemKind2.Field = 5;
      CompletionItemKind2.Variable = 6;
      CompletionItemKind2.Class = 7;
      CompletionItemKind2.Interface = 8;
      CompletionItemKind2.Module = 9;
      CompletionItemKind2.Property = 10;
      CompletionItemKind2.Unit = 11;
      CompletionItemKind2.Value = 12;
      CompletionItemKind2.Enum = 13;
      CompletionItemKind2.Keyword = 14;
      CompletionItemKind2.Snippet = 15;
      CompletionItemKind2.Color = 16;
      CompletionItemKind2.File = 17;
      CompletionItemKind2.Reference = 18;
      CompletionItemKind2.Folder = 19;
      CompletionItemKind2.EnumMember = 20;
      CompletionItemKind2.Constant = 21;
      CompletionItemKind2.Struct = 22;
      CompletionItemKind2.Event = 23;
      CompletionItemKind2.Operator = 24;
      CompletionItemKind2.TypeParameter = 25;
    })(CompletionItemKind || (CompletionItemKind = {}));
    (function(InsertTextFormat2) {
      InsertTextFormat2.PlainText = 1;
      InsertTextFormat2.Snippet = 2;
    })(InsertTextFormat || (InsertTextFormat = {}));
    (function(CompletionItemTag2) {
      CompletionItemTag2.Deprecated = 1;
    })(CompletionItemTag || (CompletionItemTag = {}));
    (function(InsertReplaceEdit2) {
      function create(newText, insert, replace) {
        return { newText, insert, replace };
      }
      InsertReplaceEdit2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
      }
      InsertReplaceEdit2.is = is;
    })(InsertReplaceEdit || (InsertReplaceEdit = {}));
    (function(InsertTextMode2) {
      InsertTextMode2.asIs = 1;
      InsertTextMode2.adjustIndentation = 2;
    })(InsertTextMode || (InsertTextMode = {}));
    (function(ApplyKind2) {
      ApplyKind2.Replace = 1;
      ApplyKind2.Merge = 2;
    })(ApplyKind || (ApplyKind = {}));
    (function(CompletionItemLabelDetails2) {
      function is(value) {
        const candidate = value;
        return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
      }
      CompletionItemLabelDetails2.is = is;
    })(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
    (function(CompletionItem2) {
      function create(label) {
        return { label };
      }
      CompletionItem2.create = create;
    })(CompletionItem || (CompletionItem = {}));
    (function(CompletionList2) {
      function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
      }
      CompletionList2.create = create;
    })(CompletionList || (CompletionList = {}));
    (function(MarkedString2) {
      function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
      }
      MarkedString2.fromPlainText = fromPlainText;
      function is(value) {
        const candidate = value;
        return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
      }
      MarkedString2.is = is;
    })(MarkedString || (MarkedString = {}));
    (function(Hover2) {
      function is(value) {
        const candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
      }
      Hover2.is = is;
    })(Hover || (Hover = {}));
    (function(ParameterInformation2) {
      function create(label, documentation) {
        return documentation ? { label, documentation } : { label };
      }
      ParameterInformation2.create = create;
    })(ParameterInformation || (ParameterInformation = {}));
    (function(SignatureInformation2) {
      function create(label, documentation, ...parameters) {
        const result = { label };
        if (Is.defined(documentation)) {
          result.documentation = documentation;
        }
        if (Is.defined(parameters)) {
          result.parameters = parameters;
        } else {
          result.parameters = [];
        }
        return result;
      }
      SignatureInformation2.create = create;
    })(SignatureInformation || (SignatureInformation = {}));
    (function(DocumentHighlightKind2) {
      DocumentHighlightKind2.Text = 1;
      DocumentHighlightKind2.Read = 2;
      DocumentHighlightKind2.Write = 3;
    })(DocumentHighlightKind || (DocumentHighlightKind = {}));
    (function(DocumentHighlight2) {
      function create(range, kind) {
        const result = { range };
        if (Is.number(kind)) {
          result.kind = kind;
        }
        return result;
      }
      DocumentHighlight2.create = create;
    })(DocumentHighlight || (DocumentHighlight = {}));
    (function(SymbolKind2) {
      SymbolKind2.File = 1;
      SymbolKind2.Module = 2;
      SymbolKind2.Namespace = 3;
      SymbolKind2.Package = 4;
      SymbolKind2.Class = 5;
      SymbolKind2.Method = 6;
      SymbolKind2.Property = 7;
      SymbolKind2.Field = 8;
      SymbolKind2.Constructor = 9;
      SymbolKind2.Enum = 10;
      SymbolKind2.Interface = 11;
      SymbolKind2.Function = 12;
      SymbolKind2.Variable = 13;
      SymbolKind2.Constant = 14;
      SymbolKind2.String = 15;
      SymbolKind2.Number = 16;
      SymbolKind2.Boolean = 17;
      SymbolKind2.Array = 18;
      SymbolKind2.Object = 19;
      SymbolKind2.Key = 20;
      SymbolKind2.Null = 21;
      SymbolKind2.EnumMember = 22;
      SymbolKind2.Struct = 23;
      SymbolKind2.Event = 24;
      SymbolKind2.Operator = 25;
      SymbolKind2.TypeParameter = 26;
    })(SymbolKind || (SymbolKind = {}));
    (function(SymbolTag2) {
      SymbolTag2.Deprecated = 1;
    })(SymbolTag || (SymbolTag = {}));
    (function(SymbolInformation2) {
      function create(name2, kind, range, uri, containerName) {
        const result = {
          name: name2,
          kind,
          location: { uri, range }
        };
        if (containerName) {
          result.containerName = containerName;
        }
        return result;
      }
      SymbolInformation2.create = create;
    })(SymbolInformation || (SymbolInformation = {}));
    (function(WorkspaceSymbol2) {
      function create(name2, kind, uri, range) {
        return range !== void 0 ? { name: name2, kind, location: { uri, range } } : { name: name2, kind, location: { uri } };
      }
      WorkspaceSymbol2.create = create;
    })(WorkspaceSymbol || (WorkspaceSymbol = {}));
    (function(DocumentSymbol2) {
      function create(name2, detail, kind, range, selectionRange, children) {
        const result = {
          name: name2,
          detail,
          kind,
          range,
          selectionRange
        };
        if (children !== void 0) {
          result.children = children;
        }
        return result;
      }
      DocumentSymbol2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
      }
      DocumentSymbol2.is = is;
    })(DocumentSymbol || (DocumentSymbol = {}));
    (function(CodeActionKind2) {
      CodeActionKind2.Empty = "";
      CodeActionKind2.QuickFix = "quickfix";
      CodeActionKind2.Refactor = "refactor";
      CodeActionKind2.RefactorExtract = "refactor.extract";
      CodeActionKind2.RefactorInline = "refactor.inline";
      CodeActionKind2.RefactorMove = "refactor.move";
      CodeActionKind2.RefactorRewrite = "refactor.rewrite";
      CodeActionKind2.Source = "source";
      CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
      CodeActionKind2.SourceFixAll = "source.fixAll";
      CodeActionKind2.Notebook = "notebook";
    })(CodeActionKind || (CodeActionKind = {}));
    (function(CodeActionTriggerKind2) {
      CodeActionTriggerKind2.Invoked = 1;
      CodeActionTriggerKind2.Automatic = 2;
    })(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
    (function(CodeActionContext2) {
      function create(diagnostics, only, triggerKind) {
        const result = { diagnostics };
        if (only !== void 0 && only !== null) {
          result.only = only;
        }
        if (triggerKind !== void 0 && triggerKind !== null) {
          result.triggerKind = triggerKind;
        }
        return result;
      }
      CodeActionContext2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
      }
      CodeActionContext2.is = is;
    })(CodeActionContext || (CodeActionContext = {}));
    (function(CodeActionTag2) {
      CodeActionTag2.LLMGenerated = 1;
      function is(value) {
        return Is.defined(value) && value === CodeActionTag2.LLMGenerated;
      }
      CodeActionTag2.is = is;
    })(CodeActionTag || (CodeActionTag = {}));
    (function(CodeAction2) {
      function create(title, kindOrCommandOrEdit, kind) {
        const result = { title };
        let checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
          checkKind = false;
          result.kind = kindOrCommandOrEdit;
        } else if (Command.is(kindOrCommandOrEdit)) {
          result.command = kindOrCommandOrEdit;
        } else {
          result.edit = kindOrCommandOrEdit;
        }
        if (checkKind && kind !== void 0) {
          result.kind = kind;
        }
        return result;
      }
      CodeAction2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit)) && (candidate.tags === void 0 || Is.typedArray(candidate.tags, CodeActionTag.is));
      }
      CodeAction2.is = is;
    })(CodeAction || (CodeAction = {}));
    (function(CodeLens2) {
      function create(range, data) {
        const result = { range };
        if (Is.defined(data)) {
          result.data = data;
        }
        return result;
      }
      CodeLens2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
      }
      CodeLens2.is = is;
    })(CodeLens || (CodeLens = {}));
    (function(FormattingOptions2) {
      function create(tabSize, insertSpaces) {
        return { tabSize, insertSpaces };
      }
      FormattingOptions2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
      }
      FormattingOptions2.is = is;
    })(FormattingOptions || (FormattingOptions = {}));
    (function(DocumentLink2) {
      function create(range, target, data) {
        return { range, target, data };
      }
      DocumentLink2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
      }
      DocumentLink2.is = is;
    })(DocumentLink || (DocumentLink = {}));
    (function(SelectionRange2) {
      function create(range, parent) {
        return { range, parent };
      }
      SelectionRange2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
      }
      SelectionRange2.is = is;
    })(SelectionRange || (SelectionRange = {}));
    (function(SemanticTokenTypes2) {
      SemanticTokenTypes2["namespace"] = "namespace";
      SemanticTokenTypes2["type"] = "type";
      SemanticTokenTypes2["class"] = "class";
      SemanticTokenTypes2["enum"] = "enum";
      SemanticTokenTypes2["interface"] = "interface";
      SemanticTokenTypes2["struct"] = "struct";
      SemanticTokenTypes2["typeParameter"] = "typeParameter";
      SemanticTokenTypes2["parameter"] = "parameter";
      SemanticTokenTypes2["variable"] = "variable";
      SemanticTokenTypes2["property"] = "property";
      SemanticTokenTypes2["enumMember"] = "enumMember";
      SemanticTokenTypes2["event"] = "event";
      SemanticTokenTypes2["function"] = "function";
      SemanticTokenTypes2["method"] = "method";
      SemanticTokenTypes2["macro"] = "macro";
      SemanticTokenTypes2["keyword"] = "keyword";
      SemanticTokenTypes2["modifier"] = "modifier";
      SemanticTokenTypes2["comment"] = "comment";
      SemanticTokenTypes2["string"] = "string";
      SemanticTokenTypes2["number"] = "number";
      SemanticTokenTypes2["regexp"] = "regexp";
      SemanticTokenTypes2["operator"] = "operator";
      SemanticTokenTypes2["decorator"] = "decorator";
      SemanticTokenTypes2["label"] = "label";
    })(SemanticTokenTypes || (SemanticTokenTypes = {}));
    (function(SemanticTokenModifiers2) {
      SemanticTokenModifiers2["declaration"] = "declaration";
      SemanticTokenModifiers2["definition"] = "definition";
      SemanticTokenModifiers2["readonly"] = "readonly";
      SemanticTokenModifiers2["static"] = "static";
      SemanticTokenModifiers2["deprecated"] = "deprecated";
      SemanticTokenModifiers2["abstract"] = "abstract";
      SemanticTokenModifiers2["async"] = "async";
      SemanticTokenModifiers2["modification"] = "modification";
      SemanticTokenModifiers2["documentation"] = "documentation";
      SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
    })(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
    (function(SemanticTokens2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
      }
      SemanticTokens2.is = is;
    })(SemanticTokens || (SemanticTokens = {}));
    (function(InlineValueText2) {
      function create(range, text) {
        return { range, text };
      }
      InlineValueText2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
      }
      InlineValueText2.is = is;
    })(InlineValueText || (InlineValueText = {}));
    (function(InlineValueVariableLookup2) {
      function create(range, variableName, caseSensitiveLookup) {
        return { range, variableName, caseSensitiveLookup };
      }
      InlineValueVariableLookup2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
      }
      InlineValueVariableLookup2.is = is;
    })(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
    (function(InlineValueEvaluatableExpression2) {
      function create(range, expression) {
        return { range, expression };
      }
      InlineValueEvaluatableExpression2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
      }
      InlineValueEvaluatableExpression2.is = is;
    })(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
    (function(InlineValueContext2) {
      function create(frameId, stoppedLocation) {
        return { frameId, stoppedLocation };
      }
      InlineValueContext2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(value.stoppedLocation);
      }
      InlineValueContext2.is = is;
    })(InlineValueContext || (InlineValueContext = {}));
    (function(InlayHintKind2) {
      InlayHintKind2.Type = 1;
      InlayHintKind2.Parameter = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      InlayHintKind2.is = is;
    })(InlayHintKind || (InlayHintKind = {}));
    (function(InlayHintLabelPart2) {
      function create(value) {
        return { value };
      }
      InlayHintLabelPart2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
      }
      InlayHintLabelPart2.is = is;
    })(InlayHintLabelPart || (InlayHintLabelPart = {}));
    (function(InlayHint2) {
      function create(position, label, kind) {
        const result = { position, label };
        if (kind !== void 0) {
          result.kind = kind;
        }
        return result;
      }
      InlayHint2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
      }
      InlayHint2.is = is;
    })(InlayHint || (InlayHint = {}));
    (function(StringValue2) {
      function createSnippet(value) {
        return { kind: "snippet", value };
      }
      StringValue2.createSnippet = createSnippet;
      function isSnippet(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && candidate.kind === "snippet" && Is.string(candidate.value);
      }
      StringValue2.isSnippet = isSnippet;
    })(StringValue || (StringValue = {}));
    (function(InlineCompletionItem2) {
      function create(insertText, filterText, range, command) {
        return { insertText, filterText, range, command };
      }
      InlineCompletionItem2.create = create;
    })(InlineCompletionItem || (InlineCompletionItem = {}));
    (function(InlineCompletionList2) {
      function create(items) {
        return { items };
      }
      InlineCompletionList2.create = create;
    })(InlineCompletionList || (InlineCompletionList = {}));
    (function(InlineCompletionTriggerKind2) {
      InlineCompletionTriggerKind2.Invoked = 1;
      InlineCompletionTriggerKind2.Automatic = 2;
    })(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
    (function(SelectedCompletionInfo2) {
      function create(range, text) {
        return { range, text };
      }
      SelectedCompletionInfo2.create = create;
    })(SelectedCompletionInfo || (SelectedCompletionInfo = {}));
    (function(InlineCompletionContext2) {
      function create(triggerKind, selectedCompletionInfo) {
        return { triggerKind, selectedCompletionInfo };
      }
      InlineCompletionContext2.create = create;
    })(InlineCompletionContext || (InlineCompletionContext = {}));
    (function(WorkspaceFolder2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
      }
      WorkspaceFolder2.is = is;
    })(WorkspaceFolder || (WorkspaceFolder = {}));
    EOL = ["\n", "\r\n", "\r"];
    (function(TextDocument3) {
      function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
      }
      TextDocument3.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
      }
      TextDocument3.is = is;
      function applyEdits(document, edits) {
        let text = document.getText();
        const sortedEdits = mergeSort2(edits, (a2, b2) => {
          const diff = a2.range.start.line - b2.range.start.line;
          if (diff === 0) {
            return a2.range.start.character - b2.range.start.character;
          }
          return diff;
        });
        let lastModifiedOffset = text.length;
        for (let i3 = sortedEdits.length - 1; i3 >= 0; i3--) {
          const e2 = sortedEdits[i3];
          const startOffset = document.offsetAt(e2.range.start);
          const endOffset = document.offsetAt(e2.range.end);
          if (endOffset <= lastModifiedOffset) {
            text = text.substring(0, startOffset) + e2.newText + text.substring(endOffset, text.length);
          } else {
            throw new Error("Overlapping edit");
          }
          lastModifiedOffset = startOffset;
        }
        return text;
      }
      TextDocument3.applyEdits = applyEdits;
      function mergeSort2(data, compare) {
        if (data.length <= 1) {
          return data;
        }
        const p2 = data.length / 2 | 0;
        const left = data.slice(0, p2);
        const right = data.slice(p2);
        mergeSort2(left, compare);
        mergeSort2(right, compare);
        let leftIdx = 0;
        let rightIdx = 0;
        let i3 = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
          const ret = compare(left[leftIdx], right[rightIdx]);
          if (ret <= 0) {
            data[i3++] = left[leftIdx++];
          } else {
            data[i3++] = right[rightIdx++];
          }
        }
        while (leftIdx < left.length) {
          data[i3++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
          data[i3++] = right[rightIdx++];
        }
        return data;
      }
    })(TextDocument || (TextDocument = {}));
    FullTextDocument = class {
      constructor(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(range) {
        if (range) {
          const start2 = this.offsetAt(range.start);
          const end = this.offsetAt(range.end);
          return this._content.substring(start2, end);
        }
        return this._content;
      }
      update(event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = void 0;
      }
      getLineOffsets() {
        if (this._lineOffsets === void 0) {
          const lineOffsets = [];
          const text = this._content;
          let isLineStart = true;
          for (let i3 = 0; i3 < text.length; i3++) {
            if (isLineStart) {
              lineOffsets.push(i3);
              isLineStart = false;
            }
            const ch = text.charAt(i3);
            isLineStart = ch === "\r" || ch === "\n";
            if (ch === "\r" && i3 + 1 < text.length && text.charAt(i3 + 1) === "\n") {
              i3++;
            }
          }
          if (isLineStart && text.length > 0) {
            lineOffsets.push(text.length);
          }
          this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
      }
      positionAt(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        const lineOffsets = this.getLineOffsets();
        let low = 0, high = lineOffsets.length;
        if (high === 0) {
          return Position.create(0, offset);
        }
        while (low < high) {
          const mid = Math.floor((low + high) / 2);
          if (lineOffsets[mid] > offset) {
            high = mid;
          } else {
            low = mid + 1;
          }
        }
        const line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
      }
      offsetAt(position) {
        const lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
          return this._content.length;
        } else if (position.line < 0) {
          return 0;
        }
        const lineOffset = lineOffsets[position.line];
        const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
    };
    (function(Is2) {
      const toString = Object.prototype.toString;
      function defined(value) {
        return typeof value !== "undefined";
      }
      Is2.defined = defined;
      function undefined2(value) {
        return typeof value === "undefined";
      }
      Is2.undefined = undefined2;
      function boolean(value) {
        return value === true || value === false;
      }
      Is2.boolean = boolean;
      function string(value) {
        return toString.call(value) === "[object String]";
      }
      Is2.string = string;
      function number(value) {
        return toString.call(value) === "[object Number]";
      }
      Is2.number = number;
      function numberRange(value, min, max) {
        return toString.call(value) === "[object Number]" && min <= value && value <= max;
      }
      Is2.numberRange = numberRange;
      function integer2(value) {
        return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
      }
      Is2.integer = integer2;
      function uinteger2(value) {
        return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
      }
      Is2.uinteger = uinteger2;
      function func2(value) {
        return toString.call(value) === "[object Function]";
      }
      Is2.func = func2;
      function objectLiteral(value) {
        return value !== null && typeof value === "object";
      }
      Is2.objectLiteral = objectLiteral;
      function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
      }
      Is2.typedArray = typedArray;
    })(Is || (Is = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages2 = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CM = exports.ProtocolNotificationType = exports.ProtocolNotificationType0 = exports.ProtocolRequestType = exports.ProtocolRequestType0 = exports.RegistrationType = exports.MessageDirection = void 0;
    var vscode_jsonrpc_1 = require_api();
    var MessageDirection;
    (function(MessageDirection2) {
      MessageDirection2["clientToServer"] = "clientToServer";
      MessageDirection2["serverToClient"] = "serverToClient";
      MessageDirection2["both"] = "both";
    })(MessageDirection || (exports.MessageDirection = MessageDirection = {}));
    var RegistrationType = class {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ____;
      method;
      constructor(method) {
        this.method = method;
      }
    };
    exports.RegistrationType = RegistrationType;
    var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
      /**
       * Clients must not use these properties. They are here to ensure correct typing.
       * in TypeScript
       */
      __;
      ___;
      ____;
      _pr;
      constructor(method) {
        super(method);
      }
    };
    exports.ProtocolRequestType0 = ProtocolRequestType0;
    var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      __;
      ___;
      ____;
      _pr;
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports.ProtocolRequestType = ProtocolRequestType;
    var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ___;
      ____;
      constructor(method) {
        super(method);
      }
    };
    exports.ProtocolNotificationType0 = ProtocolNotificationType0;
    var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ___;
      ____;
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports.ProtocolNotificationType = ProtocolNotificationType;
    var CM;
    (function(CM2) {
      function create(client, server) {
        return { client, server };
      }
      CM2.create = create;
    })(CM || (exports.CM = CM = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is3 = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boolean = boolean;
    exports.string = string;
    exports.number = number;
    exports.error = error;
    exports.func = func2;
    exports.array = array;
    exports.stringArray = stringArray;
    exports.typedArray = typedArray;
    exports.objectLiteral = objectLiteral;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func2(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    function objectLiteral(value) {
      return value !== null && typeof value === "object";
    }
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImplementationRequest = void 0;
    var messages_1 = require_messages2();
    var ImplementationRequest;
    (function(ImplementationRequest2) {
      ImplementationRequest2.method = "textDocument/implementation";
      ImplementationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ImplementationRequest2.type = new messages_1.ProtocolRequestType(ImplementationRequest2.method);
      ImplementationRequest2.capabilities = messages_1.CM.create("textDocument.implementation", "implementationProvider");
    })(ImplementationRequest || (exports.ImplementationRequest = ImplementationRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeDefinitionRequest = void 0;
    var messages_1 = require_messages2();
    var TypeDefinitionRequest;
    (function(TypeDefinitionRequest2) {
      TypeDefinitionRequest2.method = "textDocument/typeDefinition";
      TypeDefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeDefinitionRequest2.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest2.method);
      TypeDefinitionRequest2.capabilities = messages_1.CM.create("textDocument.typeDefinition", "typeDefinitionProvider");
    })(TypeDefinitionRequest || (exports.TypeDefinitionRequest = TypeDefinitionRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = void 0;
    var messages_1 = require_messages2();
    var WorkspaceFoldersRequest;
    (function(WorkspaceFoldersRequest2) {
      WorkspaceFoldersRequest2.method = "workspace/workspaceFolders";
      WorkspaceFoldersRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkspaceFoldersRequest2.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest2.method);
      WorkspaceFoldersRequest2.capabilities = messages_1.CM.create("workspace.workspaceFolders", "workspace.workspaceFolders");
    })(WorkspaceFoldersRequest || (exports.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
    var DidChangeWorkspaceFoldersNotification;
    (function(DidChangeWorkspaceFoldersNotification2) {
      DidChangeWorkspaceFoldersNotification2.method = "workspace/didChangeWorkspaceFolders";
      DidChangeWorkspaceFoldersNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWorkspaceFoldersNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification2.method);
      DidChangeWorkspaceFoldersNotification2.capabilities = messages_1.CM.create(void 0, "workspace.workspaceFolders.changeNotifications");
    })(DidChangeWorkspaceFoldersNotification || (exports.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigurationRequest = void 0;
    var messages_1 = require_messages2();
    var ConfigurationRequest;
    (function(ConfigurationRequest2) {
      ConfigurationRequest2.method = "workspace/configuration";
      ConfigurationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ConfigurationRequest2.type = new messages_1.ProtocolRequestType(ConfigurationRequest2.method);
      ConfigurationRequest2.capabilities = messages_1.CM.create("workspace.configuration", void 0);
    })(ConfigurationRequest || (exports.ConfigurationRequest = ConfigurationRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColorPresentationRequest = exports.DocumentColorRequest = void 0;
    var messages_1 = require_messages2();
    var DocumentColorRequest;
    (function(DocumentColorRequest2) {
      DocumentColorRequest2.method = "textDocument/documentColor";
      DocumentColorRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentColorRequest2.type = new messages_1.ProtocolRequestType(DocumentColorRequest2.method);
      DocumentColorRequest2.capabilities = messages_1.CM.create("textDocument.colorProvider", "colorProvider");
    })(DocumentColorRequest || (exports.DocumentColorRequest = DocumentColorRequest = {}));
    var ColorPresentationRequest;
    (function(ColorPresentationRequest2) {
      ColorPresentationRequest2.method = "textDocument/colorPresentation";
      ColorPresentationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ColorPresentationRequest2.type = new messages_1.ProtocolRequestType(ColorPresentationRequest2.method);
      ColorPresentationRequest2.capabilities = messages_1.CM.create("textDocument.colorProvider", "colorProvider");
    })(ColorPresentationRequest || (exports.ColorPresentationRequest = ColorPresentationRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FoldingRangeRefreshRequest = exports.FoldingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var FoldingRangeRequest;
    (function(FoldingRangeRequest2) {
      FoldingRangeRequest2.method = "textDocument/foldingRange";
      FoldingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      FoldingRangeRequest2.type = new messages_1.ProtocolRequestType(FoldingRangeRequest2.method);
      FoldingRangeRequest2.capabilities = messages_1.CM.create("textDocument.foldingRange", "foldingRangeProvider");
    })(FoldingRangeRequest || (exports.FoldingRangeRequest = FoldingRangeRequest = {}));
    var FoldingRangeRefreshRequest;
    (function(FoldingRangeRefreshRequest2) {
      FoldingRangeRefreshRequest2.method = `workspace/foldingRange/refresh`;
      FoldingRangeRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      FoldingRangeRefreshRequest2.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest2.method);
      FoldingRangeRefreshRequest2.capabilities = messages_1.CM.create("workspace.foldingRange.refreshSupport", void 0);
    })(FoldingRangeRefreshRequest || (exports.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeclarationRequest = void 0;
    var messages_1 = require_messages2();
    var DeclarationRequest;
    (function(DeclarationRequest2) {
      DeclarationRequest2.method = "textDocument/declaration";
      DeclarationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DeclarationRequest2.type = new messages_1.ProtocolRequestType(DeclarationRequest2.method);
      DeclarationRequest2.capabilities = messages_1.CM.create("textDocument.declaration", "declarationProvider");
    })(DeclarationRequest || (exports.DeclarationRequest = DeclarationRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SelectionRangeRequest = void 0;
    var messages_1 = require_messages2();
    var SelectionRangeRequest;
    (function(SelectionRangeRequest2) {
      SelectionRangeRequest2.method = "textDocument/selectionRange";
      SelectionRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SelectionRangeRequest2.type = new messages_1.ProtocolRequestType(SelectionRangeRequest2.method);
      SelectionRangeRequest2.capabilities = messages_1.CM.create("textDocument.selectionRange", "selectionRangeProvider");
    })(SelectionRangeRequest || (exports.SelectionRangeRequest = SelectionRangeRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = void 0;
    var vscode_jsonrpc_1 = require_api();
    var messages_1 = require_messages2();
    var WorkDoneProgress;
    (function(WorkDoneProgress2) {
      WorkDoneProgress2.type = new vscode_jsonrpc_1.ProgressType();
      function is(value) {
        return value === WorkDoneProgress2.type;
      }
      WorkDoneProgress2.is = is;
    })(WorkDoneProgress || (exports.WorkDoneProgress = WorkDoneProgress = {}));
    var WorkDoneProgressCreateRequest;
    (function(WorkDoneProgressCreateRequest2) {
      WorkDoneProgressCreateRequest2.method = "window/workDoneProgress/create";
      WorkDoneProgressCreateRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkDoneProgressCreateRequest2.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest2.method);
      WorkDoneProgressCreateRequest2.capabilities = messages_1.CM.create("window.workDoneProgress", void 0);
    })(WorkDoneProgressCreateRequest || (exports.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
    var WorkDoneProgressCancelNotification;
    (function(WorkDoneProgressCancelNotification2) {
      WorkDoneProgressCancelNotification2.method = "window/workDoneProgress/cancel";
      WorkDoneProgressCancelNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkDoneProgressCancelNotification2.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification2.method);
    })(WorkDoneProgressCancelNotification || (exports.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.CallHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var CallHierarchyPrepareRequest;
    (function(CallHierarchyPrepareRequest2) {
      CallHierarchyPrepareRequest2.method = "textDocument/prepareCallHierarchy";
      CallHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest2.method);
      CallHierarchyPrepareRequest2.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyPrepareRequest || (exports.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
    var CallHierarchyIncomingCallsRequest;
    (function(CallHierarchyIncomingCallsRequest2) {
      CallHierarchyIncomingCallsRequest2.method = "callHierarchy/incomingCalls";
      CallHierarchyIncomingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyIncomingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest2.method);
      CallHierarchyIncomingCallsRequest2.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyIncomingCallsRequest || (exports.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
    var CallHierarchyOutgoingCallsRequest;
    (function(CallHierarchyOutgoingCallsRequest2) {
      CallHierarchyOutgoingCallsRequest2.method = "callHierarchy/outgoingCalls";
      CallHierarchyOutgoingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyOutgoingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest2.method);
      CallHierarchyOutgoingCallsRequest2.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyOutgoingCallsRequest || (exports.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.SemanticTokensRegistrationType = exports.TokenFormat = void 0;
    var messages_1 = require_messages2();
    var TokenFormat;
    (function(TokenFormat2) {
      TokenFormat2.Relative = "relative";
    })(TokenFormat || (exports.TokenFormat = TokenFormat = {}));
    var SemanticTokensRegistrationType;
    (function(SemanticTokensRegistrationType2) {
      SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
      SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
    })(SemanticTokensRegistrationType || (exports.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
    var SemanticTokensRequest;
    (function(SemanticTokensRequest2) {
      SemanticTokensRequest2.method = "textDocument/semanticTokens/full";
      SemanticTokensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRequest2.method);
      SemanticTokensRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens", "semanticTokensProvider");
    })(SemanticTokensRequest || (exports.SemanticTokensRequest = SemanticTokensRequest = {}));
    var SemanticTokensDeltaRequest;
    (function(SemanticTokensDeltaRequest2) {
      SemanticTokensDeltaRequest2.method = "textDocument/semanticTokens/full/delta";
      SemanticTokensDeltaRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensDeltaRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest2.method);
      SemanticTokensDeltaRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensDeltaRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens.requests.full.delta", "semanticTokensProvider.full.delta");
    })(SemanticTokensDeltaRequest || (exports.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
    var SemanticTokensRangeRequest;
    (function(SemanticTokensRangeRequest2) {
      SemanticTokensRangeRequest2.method = "textDocument/semanticTokens/range";
      SemanticTokensRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRangeRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest2.method);
      SemanticTokensRangeRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensRangeRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens.requests.range", "semanticTokensProvider.range");
    })(SemanticTokensRangeRequest || (exports.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
    var SemanticTokensRefreshRequest;
    (function(SemanticTokensRefreshRequest2) {
      SemanticTokensRefreshRequest2.method = `workspace/semanticTokens/refresh`;
      SemanticTokensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      SemanticTokensRefreshRequest2.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest2.method);
      SemanticTokensRefreshRequest2.capabilities = messages_1.CM.create("workspace.semanticTokens.refreshSupport", void 0);
    })(SemanticTokensRefreshRequest || (exports.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ShowDocumentRequest = void 0;
    var messages_1 = require_messages2();
    var ShowDocumentRequest;
    (function(ShowDocumentRequest2) {
      ShowDocumentRequest2.method = "window/showDocument";
      ShowDocumentRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowDocumentRequest2.type = new messages_1.ProtocolRequestType(ShowDocumentRequest2.method);
      ShowDocumentRequest2.capabilities = messages_1.CM.create("window.showDocument.support", void 0);
    })(ShowDocumentRequest || (exports.ShowDocumentRequest = ShowDocumentRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkedEditingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var LinkedEditingRangeRequest;
    (function(LinkedEditingRangeRequest2) {
      LinkedEditingRangeRequest2.method = "textDocument/linkedEditingRange";
      LinkedEditingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      LinkedEditingRangeRequest2.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest2.method);
      LinkedEditingRangeRequest2.capabilities = messages_1.CM.create("textDocument.linkedEditingRange", "linkedEditingRangeProvider");
    })(LinkedEditingRangeRequest || (exports.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.DidRenameFilesNotification = exports.WillRenameFilesRequest = exports.DidCreateFilesNotification = exports.WillCreateFilesRequest = exports.FileOperationPatternKind = void 0;
    var messages_1 = require_messages2();
    var FileOperationPatternKind;
    (function(FileOperationPatternKind2) {
      FileOperationPatternKind2.file = "file";
      FileOperationPatternKind2.folder = "folder";
    })(FileOperationPatternKind || (exports.FileOperationPatternKind = FileOperationPatternKind = {}));
    var WillCreateFilesRequest;
    (function(WillCreateFilesRequest2) {
      WillCreateFilesRequest2.method = "workspace/willCreateFiles";
      WillCreateFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillCreateFilesRequest2.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest2.method);
      WillCreateFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willCreate", "workspace.fileOperations.willCreate");
    })(WillCreateFilesRequest || (exports.WillCreateFilesRequest = WillCreateFilesRequest = {}));
    var DidCreateFilesNotification;
    (function(DidCreateFilesNotification2) {
      DidCreateFilesNotification2.method = "workspace/didCreateFiles";
      DidCreateFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCreateFilesNotification2.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification2.method);
      DidCreateFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didCreate", "workspace.fileOperations.didCreate");
    })(DidCreateFilesNotification || (exports.DidCreateFilesNotification = DidCreateFilesNotification = {}));
    var WillRenameFilesRequest;
    (function(WillRenameFilesRequest2) {
      WillRenameFilesRequest2.method = "workspace/willRenameFiles";
      WillRenameFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillRenameFilesRequest2.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest2.method);
      WillRenameFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willRename", "workspace.fileOperations.willRename");
    })(WillRenameFilesRequest || (exports.WillRenameFilesRequest = WillRenameFilesRequest = {}));
    var DidRenameFilesNotification;
    (function(DidRenameFilesNotification2) {
      DidRenameFilesNotification2.method = "workspace/didRenameFiles";
      DidRenameFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidRenameFilesNotification2.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification2.method);
      DidRenameFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didRename", "workspace.fileOperations.didRename");
    })(DidRenameFilesNotification || (exports.DidRenameFilesNotification = DidRenameFilesNotification = {}));
    var DidDeleteFilesNotification;
    (function(DidDeleteFilesNotification2) {
      DidDeleteFilesNotification2.method = "workspace/didDeleteFiles";
      DidDeleteFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidDeleteFilesNotification2.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification2.method);
      DidDeleteFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didDelete", "workspace.fileOperations.didDelete");
    })(DidDeleteFilesNotification || (exports.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
    var WillDeleteFilesRequest;
    (function(WillDeleteFilesRequest2) {
      WillDeleteFilesRequest2.method = "workspace/willDeleteFiles";
      WillDeleteFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillDeleteFilesRequest2.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest2.method);
      WillDeleteFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willDelete", "workspace.fileOperations.willDelete");
    })(WillDeleteFilesRequest || (exports.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = void 0;
    var messages_1 = require_messages2();
    var UniquenessLevel;
    (function(UniquenessLevel2) {
      UniquenessLevel2.document = "document";
      UniquenessLevel2.project = "project";
      UniquenessLevel2.group = "group";
      UniquenessLevel2.scheme = "scheme";
      UniquenessLevel2.global = "global";
    })(UniquenessLevel || (exports.UniquenessLevel = UniquenessLevel = {}));
    var MonikerKind;
    (function(MonikerKind2) {
      MonikerKind2.$import = "import";
      MonikerKind2.$export = "export";
      MonikerKind2.local = "local";
    })(MonikerKind || (exports.MonikerKind = MonikerKind = {}));
    var MonikerRequest;
    (function(MonikerRequest2) {
      MonikerRequest2.method = "textDocument/moniker";
      MonikerRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      MonikerRequest2.type = new messages_1.ProtocolRequestType(MonikerRequest2.method);
      MonikerRequest2.capabilities = messages_1.CM.create("textDocument.moniker", "monikerProvider");
    })(MonikerRequest || (exports.MonikerRequest = MonikerRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeHierarchySubtypesRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var TypeHierarchyPrepareRequest;
    (function(TypeHierarchyPrepareRequest2) {
      TypeHierarchyPrepareRequest2.method = "textDocument/prepareTypeHierarchy";
      TypeHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest2.method);
      TypeHierarchyPrepareRequest2.capabilities = messages_1.CM.create("textDocument.typeHierarchy", "typeHierarchyProvider");
    })(TypeHierarchyPrepareRequest || (exports.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
    var TypeHierarchySupertypesRequest;
    (function(TypeHierarchySupertypesRequest2) {
      TypeHierarchySupertypesRequest2.method = "typeHierarchy/supertypes";
      TypeHierarchySupertypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySupertypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest2.method);
    })(TypeHierarchySupertypesRequest || (exports.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
    var TypeHierarchySubtypesRequest;
    (function(TypeHierarchySubtypesRequest2) {
      TypeHierarchySubtypesRequest2.method = "typeHierarchy/subtypes";
      TypeHierarchySubtypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySubtypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest2.method);
    })(TypeHierarchySubtypesRequest || (exports.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineValueRefreshRequest = exports.InlineValueRequest = void 0;
    var messages_1 = require_messages2();
    var InlineValueRequest;
    (function(InlineValueRequest2) {
      InlineValueRequest2.method = "textDocument/inlineValue";
      InlineValueRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineValueRequest2.type = new messages_1.ProtocolRequestType(InlineValueRequest2.method);
      InlineValueRequest2.capabilities = messages_1.CM.create("textDocument.inlineValue", "inlineValueProvider");
    })(InlineValueRequest || (exports.InlineValueRequest = InlineValueRequest = {}));
    var InlineValueRefreshRequest;
    (function(InlineValueRefreshRequest2) {
      InlineValueRefreshRequest2.method = `workspace/inlineValue/refresh`;
      InlineValueRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlineValueRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest2.method);
      InlineValueRefreshRequest2.capabilities = messages_1.CM.create("workspace.inlineValue.refreshSupport", void 0);
    })(InlineValueRefreshRequest || (exports.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = void 0;
    var messages_1 = require_messages2();
    var InlayHintRequest;
    (function(InlayHintRequest2) {
      InlayHintRequest2.method = "textDocument/inlayHint";
      InlayHintRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintRequest2.type = new messages_1.ProtocolRequestType(InlayHintRequest2.method);
      InlayHintRequest2.capabilities = messages_1.CM.create("textDocument.inlayHint", "inlayHintProvider");
    })(InlayHintRequest || (exports.InlayHintRequest = InlayHintRequest = {}));
    var InlayHintResolveRequest;
    (function(InlayHintResolveRequest2) {
      InlayHintResolveRequest2.method = "inlayHint/resolve";
      InlayHintResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintResolveRequest2.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest2.method);
      InlayHintResolveRequest2.capabilities = messages_1.CM.create("textDocument.inlayHint.resolveSupport", "inlayHintProvider.resolveProvider");
    })(InlayHintResolveRequest || (exports.InlayHintResolveRequest = InlayHintResolveRequest = {}));
    var InlayHintRefreshRequest;
    (function(InlayHintRefreshRequest2) {
      InlayHintRefreshRequest2.method = `workspace/inlayHint/refresh`;
      InlayHintRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlayHintRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest2.method);
      InlayHintRefreshRequest2.capabilities = messages_1.CM.create("workspace.inlayHint.refreshSupport", void 0);
    })(InlayHintRefreshRequest || (exports.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = void 0;
    var vscode_jsonrpc_1 = require_api();
    var Is2 = __importStar(require_is3());
    var messages_1 = require_messages2();
    var DiagnosticServerCancellationData;
    (function(DiagnosticServerCancellationData2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.boolean(candidate.retriggerRequest);
      }
      DiagnosticServerCancellationData2.is = is;
    })(DiagnosticServerCancellationData || (exports.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
    var DocumentDiagnosticReportKind;
    (function(DocumentDiagnosticReportKind2) {
      DocumentDiagnosticReportKind2.Full = "full";
      DocumentDiagnosticReportKind2.Unchanged = "unchanged";
    })(DocumentDiagnosticReportKind || (exports.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
    var DocumentDiagnosticRequest;
    (function(DocumentDiagnosticRequest2) {
      DocumentDiagnosticRequest2.method = "textDocument/diagnostic";
      DocumentDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentDiagnosticRequest2.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest2.method);
      DocumentDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
      DocumentDiagnosticRequest2.capabilities = messages_1.CM.create("textDocument.diagnostic", "diagnosticProvider");
    })(DocumentDiagnosticRequest || (exports.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
    var WorkspaceDiagnosticRequest;
    (function(WorkspaceDiagnosticRequest2) {
      WorkspaceDiagnosticRequest2.method = "workspace/diagnostic";
      WorkspaceDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceDiagnosticRequest2.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest2.method);
      WorkspaceDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
      WorkspaceDiagnosticRequest2.capabilities = messages_1.CM.create("workspace.diagnostics", "diagnosticProvider.workspaceDiagnostics");
    })(WorkspaceDiagnosticRequest || (exports.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
    var DiagnosticRefreshRequest;
    (function(DiagnosticRefreshRequest2) {
      DiagnosticRefreshRequest2.method = `workspace/diagnostic/refresh`;
      DiagnosticRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      DiagnosticRefreshRequest2.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest2.method);
      DiagnosticRefreshRequest2.capabilities = messages_1.CM.create("workspace.diagnostics.refreshSupport", void 0);
    })(DiagnosticRefreshRequest || (exports.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = void 0;
    var vscode_languageserver_types_1 = (init_main(), __toCommonJS(main_exports));
    var Is2 = __importStar(require_is3());
    var messages_1 = require_messages2();
    var NotebookCellKind;
    (function(NotebookCellKind2) {
      NotebookCellKind2.Markup = 1;
      NotebookCellKind2.Code = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      NotebookCellKind2.is = is;
    })(NotebookCellKind || (exports.NotebookCellKind = NotebookCellKind = {}));
    var ExecutionSummary;
    (function(ExecutionSummary2) {
      function create(executionOrder, success) {
        const result = { executionOrder };
        if (success === true || success === false) {
          result.success = success;
        }
        return result;
      }
      ExecutionSummary2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is2.boolean(candidate.success));
      }
      ExecutionSummary2.is = is;
      function equals(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        return one.executionOrder === other.executionOrder && one.success === other.success;
      }
      ExecutionSummary2.equals = equals;
    })(ExecutionSummary || (exports.ExecutionSummary = ExecutionSummary = {}));
    var NotebookCell;
    (function(NotebookCell2) {
      function create(kind, document) {
        return { kind, document };
      }
      NotebookCell2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is2.objectLiteral(candidate.metadata));
      }
      NotebookCell2.is = is;
      function diff(one, two) {
        const result = /* @__PURE__ */ new Set();
        if (one.document !== two.document) {
          result.add("document");
        }
        if (one.kind !== two.kind) {
          result.add("kind");
        }
        if (one.executionSummary !== two.executionSummary) {
          result.add("executionSummary");
        }
        if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) {
          result.add("metadata");
        }
        if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
          result.add("executionSummary");
        }
        return result;
      }
      NotebookCell2.diff = diff;
      function equalsMetadata(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        if (typeof one !== typeof other) {
          return false;
        }
        if (typeof one !== "object") {
          return false;
        }
        const oneArray = Array.isArray(one);
        const otherArray = Array.isArray(other);
        if (oneArray !== otherArray) {
          return false;
        }
        if (oneArray && otherArray) {
          if (one.length !== other.length) {
            return false;
          }
          for (let i3 = 0; i3 < one.length; i3++) {
            if (!equalsMetadata(one[i3], other[i3])) {
              return false;
            }
          }
        }
        if (Is2.objectLiteral(one) && Is2.objectLiteral(other)) {
          const oneKeys = Object.keys(one);
          const otherKeys = Object.keys(other);
          if (oneKeys.length !== otherKeys.length) {
            return false;
          }
          oneKeys.sort();
          otherKeys.sort();
          if (!equalsMetadata(oneKeys, otherKeys)) {
            return false;
          }
          for (let i3 = 0; i3 < oneKeys.length; i3++) {
            const prop = oneKeys[i3];
            if (!equalsMetadata(one[prop], other[prop])) {
              return false;
            }
          }
        }
        return true;
      }
    })(NotebookCell || (exports.NotebookCell = NotebookCell = {}));
    var NotebookDocument;
    (function(NotebookDocument2) {
      function create(uri, notebookType, version, cells) {
        return { uri, notebookType, version, cells };
      }
      NotebookDocument2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && Is2.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is2.typedArray(candidate.cells, NotebookCell.is);
      }
      NotebookDocument2.is = is;
    })(NotebookDocument || (exports.NotebookDocument = NotebookDocument = {}));
    var NotebookDocumentSyncRegistrationType;
    (function(NotebookDocumentSyncRegistrationType2) {
      NotebookDocumentSyncRegistrationType2.method = "notebookDocument/sync";
      NotebookDocumentSyncRegistrationType2.messageDirection = messages_1.MessageDirection.clientToServer;
      NotebookDocumentSyncRegistrationType2.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType2.method);
    })(NotebookDocumentSyncRegistrationType || (exports.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
    var DidOpenNotebookDocumentNotification;
    (function(DidOpenNotebookDocumentNotification2) {
      DidOpenNotebookDocumentNotification2.method = "notebookDocument/didOpen";
      DidOpenNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification2.method);
      DidOpenNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidOpenNotebookDocumentNotification || (exports.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
    var NotebookCellArrayChange;
    (function(NotebookCellArrayChange2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is2.typedArray(candidate.cells, NotebookCell.is));
      }
      NotebookCellArrayChange2.is = is;
      function create(start2, deleteCount, cells) {
        const result = { start: start2, deleteCount };
        if (cells !== void 0) {
          result.cells = cells;
        }
        return result;
      }
      NotebookCellArrayChange2.create = create;
    })(NotebookCellArrayChange || (exports.NotebookCellArrayChange = NotebookCellArrayChange = {}));
    var DidChangeNotebookDocumentNotification;
    (function(DidChangeNotebookDocumentNotification2) {
      DidChangeNotebookDocumentNotification2.method = "notebookDocument/didChange";
      DidChangeNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification2.method);
      DidChangeNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidChangeNotebookDocumentNotification || (exports.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
    var DidSaveNotebookDocumentNotification;
    (function(DidSaveNotebookDocumentNotification2) {
      DidSaveNotebookDocumentNotification2.method = "notebookDocument/didSave";
      DidSaveNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification2.method);
      DidSaveNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidSaveNotebookDocumentNotification || (exports.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
    var DidCloseNotebookDocumentNotification;
    (function(DidCloseNotebookDocumentNotification2) {
      DidCloseNotebookDocumentNotification2.method = "notebookDocument/didClose";
      DidCloseNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification2.method);
      DidCloseNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidCloseNotebookDocumentNotification || (exports.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js
var require_protocol_inlineCompletion = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineCompletionRequest = void 0;
    var messages_1 = require_messages2();
    var InlineCompletionRequest;
    (function(InlineCompletionRequest2) {
      InlineCompletionRequest2.method = "textDocument/inlineCompletion";
      InlineCompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineCompletionRequest2.type = new messages_1.ProtocolRequestType(InlineCompletionRequest2.method);
      InlineCompletionRequest2.capabilities = messages_1.CM.create("textDocument.inlineCompletion", "inlineCompletionProvider");
    })(InlineCompletionRequest || (exports.InlineCompletionRequest = InlineCompletionRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.textDocumentContent.js
var require_protocol_textDocumentContent = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.textDocumentContent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextDocumentContentRefreshRequest = exports.TextDocumentContentRequest = void 0;
    var messages_1 = require_messages2();
    var TextDocumentContentRequest;
    (function(TextDocumentContentRequest2) {
      TextDocumentContentRequest2.method = "workspace/textDocumentContent";
      TextDocumentContentRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TextDocumentContentRequest2.type = new messages_1.ProtocolRequestType(TextDocumentContentRequest2.method);
      TextDocumentContentRequest2.capabilities = messages_1.CM.create("workspace.textDocumentContent", "workspace.textDocumentContent");
    })(TextDocumentContentRequest || (exports.TextDocumentContentRequest = TextDocumentContentRequest = {}));
    var TextDocumentContentRefreshRequest;
    (function(TextDocumentContentRefreshRequest2) {
      TextDocumentContentRefreshRequest2.method = `workspace/textDocumentContent/refresh`;
      TextDocumentContentRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      TextDocumentContentRefreshRequest2.type = new messages_1.ProtocolRequestType(TextDocumentContentRefreshRequest2.method);
    })(TextDocumentContentRefreshRequest || (exports.TextDocumentContentRefreshRequest = TextDocumentContentRefreshRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CodeActionRequest = exports.DocumentSymbolRequest = exports.DocumentHighlightRequest = exports.ReferencesRequest = exports.DefinitionRequest = exports.SignatureHelpRequest = exports.SignatureHelpTriggerKind = exports.HoverRequest = exports.CompletionResolveRequest = exports.CompletionRequest = exports.CompletionTriggerKind = exports.PublishDiagnosticsNotification = exports.WatchKind = exports.GlobPattern = exports.RelativePattern = exports.FileChangeType = exports.DidChangeWatchedFilesNotification = exports.WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentNotification = exports.TextDocumentSaveReason = exports.DidSaveTextDocumentNotification = exports.DidCloseTextDocumentNotification = exports.DidChangeTextDocumentNotification = exports.TextDocumentContentChangeEvent = exports.DidOpenTextDocumentNotification = exports.TextDocumentSyncKind = exports.TelemetryEventNotification = exports.LogMessageNotification = exports.ShowMessageRequest = exports.ShowMessageNotification = exports.MessageType = exports.DidChangeConfigurationNotification = exports.ExitNotification = exports.ShutdownRequest = exports.InitializedNotification = exports.InitializeErrorCodes = exports.InitializeRequest = exports.WorkDoneProgressOptions = exports.TextDocumentRegistrationOptions = exports.StaticRegistrationOptions = exports.PositionEncodingKind = exports.RegularExpressionEngineKind = exports.FailureHandlingKind = exports.ResourceOperationKind = exports.UnregistrationRequest = exports.RegistrationRequest = exports.DocumentSelector = exports.NotebookCellTextDocumentFilter = exports.NotebookDocumentFilter = exports.TextDocumentFilter = void 0;
    exports.UniquenessLevel = exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.WillRenameFilesRequest = exports.DidRenameFilesNotification = exports.WillCreateFilesRequest = exports.DidCreateFilesNotification = exports.FileOperationPatternKind = exports.LinkedEditingRangeRequest = exports.ShowDocumentRequest = exports.SemanticTokensRegistrationType = exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.TokenFormat = exports.CallHierarchyPrepareRequest = exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = exports.SelectionRangeRequest = exports.DeclarationRequest = exports.FoldingRangeRefreshRequest = exports.FoldingRangeRequest = exports.ColorPresentationRequest = exports.DocumentColorRequest = exports.ConfigurationRequest = exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = exports.TypeDefinitionRequest = exports.ImplementationRequest = exports.ApplyWorkspaceEditRequest = exports.ExecuteCommandRequest = exports.PrepareRenameRequest = exports.RenameRequest = exports.PrepareSupportDefaultBehavior = exports.DocumentOnTypeFormattingRequest = exports.DocumentRangesFormattingRequest = exports.DocumentRangeFormattingRequest = exports.DocumentFormattingRequest = exports.DocumentLinkResolveRequest = exports.DocumentLinkRequest = exports.CodeLensRefreshRequest = exports.CodeLensResolveRequest = exports.CodeLensRequest = exports.WorkspaceSymbolResolveRequest = exports.WorkspaceSymbolRequest = exports.CodeActionResolveRequest = void 0;
    exports.TextDocumentContentRefreshRequest = exports.TextDocumentContentRequest = exports.InlineCompletionRequest = exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = exports.InlineValueRefreshRequest = exports.InlineValueRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchySubtypesRequest = exports.TypeHierarchyPrepareRequest = exports.MonikerRequest = exports.MonikerKind = void 0;
    var messages_1 = require_messages2();
    var vscode_languageserver_types_1 = (init_main(), __toCommonJS(main_exports));
    var Is2 = __importStar(require_is3());
    var protocol_implementation_1 = require_protocol_implementation();
    Object.defineProperty(exports, "ImplementationRequest", { enumerable: true, get: function() {
      return protocol_implementation_1.ImplementationRequest;
    } });
    var protocol_typeDefinition_1 = require_protocol_typeDefinition();
    Object.defineProperty(exports, "TypeDefinitionRequest", { enumerable: true, get: function() {
      return protocol_typeDefinition_1.TypeDefinitionRequest;
    } });
    var protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
    Object.defineProperty(exports, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
    } });
    Object.defineProperty(exports, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
    } });
    var protocol_configuration_1 = require_protocol_configuration();
    Object.defineProperty(exports, "ConfigurationRequest", { enumerable: true, get: function() {
      return protocol_configuration_1.ConfigurationRequest;
    } });
    var protocol_colorProvider_1 = require_protocol_colorProvider();
    Object.defineProperty(exports, "DocumentColorRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.DocumentColorRequest;
    } });
    Object.defineProperty(exports, "ColorPresentationRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.ColorPresentationRequest;
    } });
    var protocol_foldingRange_1 = require_protocol_foldingRange();
    Object.defineProperty(exports, "FoldingRangeRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRequest;
    } });
    Object.defineProperty(exports, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRefreshRequest;
    } });
    var protocol_declaration_1 = require_protocol_declaration();
    Object.defineProperty(exports, "DeclarationRequest", { enumerable: true, get: function() {
      return protocol_declaration_1.DeclarationRequest;
    } });
    var protocol_selectionRange_1 = require_protocol_selectionRange();
    Object.defineProperty(exports, "SelectionRangeRequest", { enumerable: true, get: function() {
      return protocol_selectionRange_1.SelectionRangeRequest;
    } });
    var protocol_progress_1 = require_protocol_progress();
    Object.defineProperty(exports, "WorkDoneProgress", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgress;
    } });
    Object.defineProperty(exports, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCreateRequest;
    } });
    Object.defineProperty(exports, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCancelNotification;
    } });
    var protocol_callHierarchy_1 = require_protocol_callHierarchy();
    Object.defineProperty(exports, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
    } });
    Object.defineProperty(exports, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
    } });
    Object.defineProperty(exports, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
    } });
    var protocol_semanticTokens_1 = require_protocol_semanticTokens();
    Object.defineProperty(exports, "TokenFormat", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.TokenFormat;
    } });
    Object.defineProperty(exports, "SemanticTokensRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRangeRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRegistrationType;
    } });
    var protocol_showDocument_1 = require_protocol_showDocument();
    Object.defineProperty(exports, "ShowDocumentRequest", { enumerable: true, get: function() {
      return protocol_showDocument_1.ShowDocumentRequest;
    } });
    var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
    Object.defineProperty(exports, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
      return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
    } });
    var protocol_fileOperations_1 = require_protocol_fileOperations();
    Object.defineProperty(exports, "FileOperationPatternKind", { enumerable: true, get: function() {
      return protocol_fileOperations_1.FileOperationPatternKind;
    } });
    Object.defineProperty(exports, "DidCreateFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidCreateFilesNotification;
    } });
    Object.defineProperty(exports, "WillCreateFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillCreateFilesRequest;
    } });
    Object.defineProperty(exports, "DidRenameFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidRenameFilesNotification;
    } });
    Object.defineProperty(exports, "WillRenameFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillRenameFilesRequest;
    } });
    Object.defineProperty(exports, "DidDeleteFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidDeleteFilesNotification;
    } });
    Object.defineProperty(exports, "WillDeleteFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillDeleteFilesRequest;
    } });
    var protocol_moniker_1 = require_protocol_moniker();
    Object.defineProperty(exports, "UniquenessLevel", { enumerable: true, get: function() {
      return protocol_moniker_1.UniquenessLevel;
    } });
    Object.defineProperty(exports, "MonikerKind", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerKind;
    } });
    Object.defineProperty(exports, "MonikerRequest", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerRequest;
    } });
    var protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
    Object.defineProperty(exports, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
    } });
    Object.defineProperty(exports, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
    } });
    Object.defineProperty(exports, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
    } });
    var protocol_inlineValue_1 = require_protocol_inlineValue();
    Object.defineProperty(exports, "InlineValueRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRequest;
    } });
    Object.defineProperty(exports, "InlineValueRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRefreshRequest;
    } });
    var protocol_inlayHint_1 = require_protocol_inlayHint();
    Object.defineProperty(exports, "InlayHintRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRequest;
    } });
    Object.defineProperty(exports, "InlayHintResolveRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintResolveRequest;
    } });
    Object.defineProperty(exports, "InlayHintRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRefreshRequest;
    } });
    var protocol_diagnostic_1 = require_protocol_diagnostic();
    Object.defineProperty(exports, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticServerCancellationData;
    } });
    Object.defineProperty(exports, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticReportKind;
    } });
    Object.defineProperty(exports, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticRequest;
    } });
    Object.defineProperty(exports, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
    } });
    Object.defineProperty(exports, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticRefreshRequest;
    } });
    var protocol_notebook_1 = require_protocol_notebook();
    Object.defineProperty(exports, "NotebookCellKind", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellKind;
    } });
    Object.defineProperty(exports, "ExecutionSummary", { enumerable: true, get: function() {
      return protocol_notebook_1.ExecutionSummary;
    } });
    Object.defineProperty(exports, "NotebookCell", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCell;
    } });
    Object.defineProperty(exports, "NotebookDocument", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocument;
    } });
    Object.defineProperty(exports, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
    } });
    Object.defineProperty(exports, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidOpenNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "NotebookCellArrayChange", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellArrayChange;
    } });
    Object.defineProperty(exports, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidChangeNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidSaveNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidCloseNotebookDocumentNotification;
    } });
    var protocol_inlineCompletion_1 = require_protocol_inlineCompletion();
    Object.defineProperty(exports, "InlineCompletionRequest", { enumerable: true, get: function() {
      return protocol_inlineCompletion_1.InlineCompletionRequest;
    } });
    var protocol_textDocumentContent_1 = require_protocol_textDocumentContent();
    Object.defineProperty(exports, "TextDocumentContentRequest", { enumerable: true, get: function() {
      return protocol_textDocumentContent_1.TextDocumentContentRequest;
    } });
    Object.defineProperty(exports, "TextDocumentContentRefreshRequest", { enumerable: true, get: function() {
      return protocol_textDocumentContent_1.TextDocumentContentRefreshRequest;
    } });
    var TextDocumentFilter;
    (function(TextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.string(candidate) || (Is2.string(candidate.language) || Is2.string(candidate.scheme) || GlobPattern.is(candidate.pattern));
      }
      TextDocumentFilter2.is = is;
    })(TextDocumentFilter || (exports.TextDocumentFilter = TextDocumentFilter = {}));
    var NotebookDocumentFilter;
    (function(NotebookDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebookType) || Is2.string(candidate.scheme) || Is2.string(candidate.pattern));
      }
      NotebookDocumentFilter2.is = is;
    })(NotebookDocumentFilter || (exports.NotebookDocumentFilter = NotebookDocumentFilter = {}));
    var NotebookCellTextDocumentFilter;
    (function(NotebookCellTextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is2.string(candidate.language));
      }
      NotebookCellTextDocumentFilter2.is = is;
    })(NotebookCellTextDocumentFilter || (exports.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
    var DocumentSelector;
    (function(DocumentSelector2) {
      function is(value) {
        if (!Array.isArray(value)) {
          return false;
        }
        for (const elem of value) {
          if (!Is2.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
            return false;
          }
        }
        return true;
      }
      DocumentSelector2.is = is;
    })(DocumentSelector || (exports.DocumentSelector = DocumentSelector = {}));
    var RegistrationRequest;
    (function(RegistrationRequest2) {
      RegistrationRequest2.method = "client/registerCapability";
      RegistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      RegistrationRequest2.type = new messages_1.ProtocolRequestType(RegistrationRequest2.method);
    })(RegistrationRequest || (exports.RegistrationRequest = RegistrationRequest = {}));
    var UnregistrationRequest;
    (function(UnregistrationRequest2) {
      UnregistrationRequest2.method = "client/unregisterCapability";
      UnregistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      UnregistrationRequest2.type = new messages_1.ProtocolRequestType(UnregistrationRequest2.method);
    })(UnregistrationRequest || (exports.UnregistrationRequest = UnregistrationRequest = {}));
    var ResourceOperationKind;
    (function(ResourceOperationKind2) {
      ResourceOperationKind2.Create = "create";
      ResourceOperationKind2.Rename = "rename";
      ResourceOperationKind2.Delete = "delete";
    })(ResourceOperationKind || (exports.ResourceOperationKind = ResourceOperationKind = {}));
    var FailureHandlingKind;
    (function(FailureHandlingKind2) {
      FailureHandlingKind2.Abort = "abort";
      FailureHandlingKind2.Transactional = "transactional";
      FailureHandlingKind2.TextOnlyTransactional = "textOnlyTransactional";
      FailureHandlingKind2.Undo = "undo";
    })(FailureHandlingKind || (exports.FailureHandlingKind = FailureHandlingKind = {}));
    var RegularExpressionEngineKind;
    (function(RegularExpressionEngineKind2) {
      RegularExpressionEngineKind2.ES2020 = "ES2020";
    })(RegularExpressionEngineKind || (exports.RegularExpressionEngineKind = RegularExpressionEngineKind = {}));
    var PositionEncodingKind;
    (function(PositionEncodingKind2) {
      PositionEncodingKind2.UTF8 = "utf-8";
      PositionEncodingKind2.UTF16 = "utf-16";
      PositionEncodingKind2.UTF32 = "utf-32";
    })(PositionEncodingKind || (exports.PositionEncodingKind = PositionEncodingKind = {}));
    var StaticRegistrationOptions;
    (function(StaticRegistrationOptions2) {
      function hasId(value) {
        const candidate = value;
        return candidate && Is2.string(candidate.id) && candidate.id.length > 0;
      }
      StaticRegistrationOptions2.hasId = hasId;
    })(StaticRegistrationOptions || (exports.StaticRegistrationOptions = StaticRegistrationOptions = {}));
    var TextDocumentRegistrationOptions;
    (function(TextDocumentRegistrationOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
      }
      TextDocumentRegistrationOptions2.is = is;
    })(TextDocumentRegistrationOptions || (exports.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
    var WorkDoneProgressOptions;
    (function(WorkDoneProgressOptions2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is2.boolean(candidate.workDoneProgress));
      }
      WorkDoneProgressOptions2.is = is;
      function hasWorkDoneProgress(value) {
        const candidate = value;
        return candidate && Is2.boolean(candidate.workDoneProgress);
      }
      WorkDoneProgressOptions2.hasWorkDoneProgress = hasWorkDoneProgress;
    })(WorkDoneProgressOptions || (exports.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
    var InitializeRequest;
    (function(InitializeRequest2) {
      InitializeRequest2.method = "initialize";
      InitializeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializeRequest2.type = new messages_1.ProtocolRequestType(InitializeRequest2.method);
    })(InitializeRequest || (exports.InitializeRequest = InitializeRequest = {}));
    var InitializeErrorCodes;
    (function(InitializeErrorCodes2) {
      InitializeErrorCodes2.unknownProtocolVersion = 1;
    })(InitializeErrorCodes || (exports.InitializeErrorCodes = InitializeErrorCodes = {}));
    var InitializedNotification;
    (function(InitializedNotification2) {
      InitializedNotification2.method = "initialized";
      InitializedNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializedNotification2.type = new messages_1.ProtocolNotificationType(InitializedNotification2.method);
    })(InitializedNotification || (exports.InitializedNotification = InitializedNotification = {}));
    var ShutdownRequest;
    (function(ShutdownRequest2) {
      ShutdownRequest2.method = "shutdown";
      ShutdownRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ShutdownRequest2.type = new messages_1.ProtocolRequestType0(ShutdownRequest2.method);
    })(ShutdownRequest || (exports.ShutdownRequest = ShutdownRequest = {}));
    var ExitNotification;
    (function(ExitNotification2) {
      ExitNotification2.method = "exit";
      ExitNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExitNotification2.type = new messages_1.ProtocolNotificationType0(ExitNotification2.method);
    })(ExitNotification || (exports.ExitNotification = ExitNotification = {}));
    var DidChangeConfigurationNotification;
    (function(DidChangeConfigurationNotification2) {
      DidChangeConfigurationNotification2.method = "workspace/didChangeConfiguration";
      DidChangeConfigurationNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeConfigurationNotification2.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification2.method);
      DidChangeConfigurationNotification2.capabilities = messages_1.CM.create("workspace.didChangeConfiguration", void 0);
    })(DidChangeConfigurationNotification || (exports.DidChangeConfigurationNotification = DidChangeConfigurationNotification = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2.Error = 1;
      MessageType2.Warning = 2;
      MessageType2.Info = 3;
      MessageType2.Log = 4;
      MessageType2.Debug = 5;
    })(MessageType || (exports.MessageType = MessageType = {}));
    var ShowMessageNotification;
    (function(ShowMessageNotification2) {
      ShowMessageNotification2.method = "window/showMessage";
      ShowMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageNotification2.type = new messages_1.ProtocolNotificationType(ShowMessageNotification2.method);
      ShowMessageNotification2.capabilities = messages_1.CM.create("window.showMessage", void 0);
    })(ShowMessageNotification || (exports.ShowMessageNotification = ShowMessageNotification = {}));
    var ShowMessageRequest;
    (function(ShowMessageRequest2) {
      ShowMessageRequest2.method = "window/showMessageRequest";
      ShowMessageRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageRequest2.type = new messages_1.ProtocolRequestType(ShowMessageRequest2.method);
      ShowMessageRequest2.capabilities = messages_1.CM.create("window.showMessage", void 0);
    })(ShowMessageRequest || (exports.ShowMessageRequest = ShowMessageRequest = {}));
    var LogMessageNotification;
    (function(LogMessageNotification2) {
      LogMessageNotification2.method = "window/logMessage";
      LogMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      LogMessageNotification2.type = new messages_1.ProtocolNotificationType(LogMessageNotification2.method);
    })(LogMessageNotification || (exports.LogMessageNotification = LogMessageNotification = {}));
    var TelemetryEventNotification;
    (function(TelemetryEventNotification2) {
      TelemetryEventNotification2.method = "telemetry/event";
      TelemetryEventNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      TelemetryEventNotification2.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification2.method);
    })(TelemetryEventNotification || (exports.TelemetryEventNotification = TelemetryEventNotification = {}));
    var TextDocumentSyncKind2;
    (function(TextDocumentSyncKind3) {
      TextDocumentSyncKind3.None = 0;
      TextDocumentSyncKind3.Full = 1;
      TextDocumentSyncKind3.Incremental = 2;
    })(TextDocumentSyncKind2 || (exports.TextDocumentSyncKind = TextDocumentSyncKind2 = {}));
    var DidOpenTextDocumentNotification;
    (function(DidOpenTextDocumentNotification2) {
      DidOpenTextDocumentNotification2.method = "textDocument/didOpen";
      DidOpenTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification2.method);
      DidOpenTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
    })(DidOpenTextDocumentNotification || (exports.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
    var TextDocumentContentChangeEvent;
    (function(TextDocumentContentChangeEvent2) {
      function isIncremental(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      TextDocumentContentChangeEvent2.isIncremental = isIncremental;
      function isFull(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
      TextDocumentContentChangeEvent2.isFull = isFull;
    })(TextDocumentContentChangeEvent || (exports.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
    var DidChangeTextDocumentNotification;
    (function(DidChangeTextDocumentNotification2) {
      DidChangeTextDocumentNotification2.method = "textDocument/didChange";
      DidChangeTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification2.method);
      DidChangeTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync");
    })(DidChangeTextDocumentNotification || (exports.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
    var DidCloseTextDocumentNotification;
    (function(DidCloseTextDocumentNotification2) {
      DidCloseTextDocumentNotification2.method = "textDocument/didClose";
      DidCloseTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification2.method);
      DidCloseTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
    })(DidCloseTextDocumentNotification || (exports.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
    var DidSaveTextDocumentNotification;
    (function(DidSaveTextDocumentNotification2) {
      DidSaveTextDocumentNotification2.method = "textDocument/didSave";
      DidSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification2.method);
      DidSaveTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization.didSave", "textDocumentSync.save");
    })(DidSaveTextDocumentNotification || (exports.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
    var TextDocumentSaveReason;
    (function(TextDocumentSaveReason2) {
      TextDocumentSaveReason2.Manual = 1;
      TextDocumentSaveReason2.AfterDelay = 2;
      TextDocumentSaveReason2.FocusOut = 3;
    })(TextDocumentSaveReason || (exports.TextDocumentSaveReason = TextDocumentSaveReason = {}));
    var WillSaveTextDocumentNotification;
    (function(WillSaveTextDocumentNotification2) {
      WillSaveTextDocumentNotification2.method = "textDocument/willSave";
      WillSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification2.method);
      WillSaveTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization.willSave", "textDocumentSync.willSave");
    })(WillSaveTextDocumentNotification || (exports.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
    var WillSaveTextDocumentWaitUntilRequest;
    (function(WillSaveTextDocumentWaitUntilRequest2) {
      WillSaveTextDocumentWaitUntilRequest2.method = "textDocument/willSaveWaitUntil";
      WillSaveTextDocumentWaitUntilRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentWaitUntilRequest2.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest2.method);
      WillSaveTextDocumentWaitUntilRequest2.capabilities = messages_1.CM.create("textDocument.synchronization.willSaveWaitUntil", "textDocumentSync.willSaveWaitUntil");
    })(WillSaveTextDocumentWaitUntilRequest || (exports.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
    var DidChangeWatchedFilesNotification2;
    (function(DidChangeWatchedFilesNotification3) {
      DidChangeWatchedFilesNotification3.method = "workspace/didChangeWatchedFiles";
      DidChangeWatchedFilesNotification3.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWatchedFilesNotification3.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification3.method);
      DidChangeWatchedFilesNotification3.capabilities = messages_1.CM.create("workspace.didChangeWatchedFiles", void 0);
    })(DidChangeWatchedFilesNotification2 || (exports.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification2 = {}));
    var FileChangeType2;
    (function(FileChangeType3) {
      FileChangeType3.Created = 1;
      FileChangeType3.Changed = 2;
      FileChangeType3.Deleted = 3;
    })(FileChangeType2 || (exports.FileChangeType = FileChangeType2 = {}));
    var RelativePattern;
    (function(RelativePattern2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is2.string(candidate.pattern);
      }
      RelativePattern2.is = is;
    })(RelativePattern || (exports.RelativePattern = RelativePattern = {}));
    var GlobPattern;
    (function(GlobPattern2) {
      function is(value) {
        const candidate = value;
        return Is2.string(candidate) || RelativePattern.is(candidate);
      }
      GlobPattern2.is = is;
    })(GlobPattern || (exports.GlobPattern = GlobPattern = {}));
    var WatchKind;
    (function(WatchKind2) {
      WatchKind2.Create = 1;
      WatchKind2.Change = 2;
      WatchKind2.Delete = 4;
    })(WatchKind || (exports.WatchKind = WatchKind = {}));
    var PublishDiagnosticsNotification;
    (function(PublishDiagnosticsNotification2) {
      PublishDiagnosticsNotification2.method = "textDocument/publishDiagnostics";
      PublishDiagnosticsNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      PublishDiagnosticsNotification2.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification2.method);
      PublishDiagnosticsNotification2.capabilities = messages_1.CM.create("textDocument.publishDiagnostics", void 0);
    })(PublishDiagnosticsNotification || (exports.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
    var CompletionTriggerKind;
    (function(CompletionTriggerKind2) {
      CompletionTriggerKind2.Invoked = 1;
      CompletionTriggerKind2.TriggerCharacter = 2;
      CompletionTriggerKind2.TriggerForIncompleteCompletions = 3;
    })(CompletionTriggerKind || (exports.CompletionTriggerKind = CompletionTriggerKind = {}));
    var CompletionRequest;
    (function(CompletionRequest2) {
      CompletionRequest2.method = "textDocument/completion";
      CompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionRequest2.type = new messages_1.ProtocolRequestType(CompletionRequest2.method);
      CompletionRequest2.capabilities = messages_1.CM.create("textDocument.completion", "completionProvider");
    })(CompletionRequest || (exports.CompletionRequest = CompletionRequest = {}));
    var CompletionResolveRequest;
    (function(CompletionResolveRequest2) {
      CompletionResolveRequest2.method = "completionItem/resolve";
      CompletionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionResolveRequest2.type = new messages_1.ProtocolRequestType(CompletionResolveRequest2.method);
      CompletionResolveRequest2.capabilities = messages_1.CM.create("textDocument.completion.completionItem.resolveSupport", "completionProvider.resolveProvider");
    })(CompletionResolveRequest || (exports.CompletionResolveRequest = CompletionResolveRequest = {}));
    var HoverRequest;
    (function(HoverRequest2) {
      HoverRequest2.method = "textDocument/hover";
      HoverRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      HoverRequest2.type = new messages_1.ProtocolRequestType(HoverRequest2.method);
      HoverRequest2.capabilities = messages_1.CM.create("textDocument.hover", "hoverProvider");
    })(HoverRequest || (exports.HoverRequest = HoverRequest = {}));
    var SignatureHelpTriggerKind;
    (function(SignatureHelpTriggerKind2) {
      SignatureHelpTriggerKind2.Invoked = 1;
      SignatureHelpTriggerKind2.TriggerCharacter = 2;
      SignatureHelpTriggerKind2.ContentChange = 3;
    })(SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
    var SignatureHelpRequest;
    (function(SignatureHelpRequest2) {
      SignatureHelpRequest2.method = "textDocument/signatureHelp";
      SignatureHelpRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SignatureHelpRequest2.type = new messages_1.ProtocolRequestType(SignatureHelpRequest2.method);
      SignatureHelpRequest2.capabilities = messages_1.CM.create("textDocument.signatureHelp", "signatureHelpProvider");
    })(SignatureHelpRequest || (exports.SignatureHelpRequest = SignatureHelpRequest = {}));
    var DefinitionRequest;
    (function(DefinitionRequest2) {
      DefinitionRequest2.method = "textDocument/definition";
      DefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DefinitionRequest2.type = new messages_1.ProtocolRequestType(DefinitionRequest2.method);
      DefinitionRequest2.capabilities = messages_1.CM.create("textDocument.definition", "definitionProvider");
    })(DefinitionRequest || (exports.DefinitionRequest = DefinitionRequest = {}));
    var ReferencesRequest;
    (function(ReferencesRequest2) {
      ReferencesRequest2.method = "textDocument/references";
      ReferencesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ReferencesRequest2.type = new messages_1.ProtocolRequestType(ReferencesRequest2.method);
      ReferencesRequest2.capabilities = messages_1.CM.create("textDocument.references", "referencesProvider");
    })(ReferencesRequest || (exports.ReferencesRequest = ReferencesRequest = {}));
    var DocumentHighlightRequest;
    (function(DocumentHighlightRequest2) {
      DocumentHighlightRequest2.method = "textDocument/documentHighlight";
      DocumentHighlightRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentHighlightRequest2.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest2.method);
      DocumentHighlightRequest2.capabilities = messages_1.CM.create("textDocument.documentHighlight", "documentHighlightProvider");
    })(DocumentHighlightRequest || (exports.DocumentHighlightRequest = DocumentHighlightRequest = {}));
    var DocumentSymbolRequest;
    (function(DocumentSymbolRequest2) {
      DocumentSymbolRequest2.method = "textDocument/documentSymbol";
      DocumentSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentSymbolRequest2.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest2.method);
      DocumentSymbolRequest2.capabilities = messages_1.CM.create("textDocument.documentSymbol", "documentSymbolProvider");
    })(DocumentSymbolRequest || (exports.DocumentSymbolRequest = DocumentSymbolRequest = {}));
    var CodeActionRequest;
    (function(CodeActionRequest2) {
      CodeActionRequest2.method = "textDocument/codeAction";
      CodeActionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionRequest2.type = new messages_1.ProtocolRequestType(CodeActionRequest2.method);
      CodeActionRequest2.capabilities = messages_1.CM.create("textDocument.codeAction", "codeActionProvider");
    })(CodeActionRequest || (exports.CodeActionRequest = CodeActionRequest = {}));
    var CodeActionResolveRequest;
    (function(CodeActionResolveRequest2) {
      CodeActionResolveRequest2.method = "codeAction/resolve";
      CodeActionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionResolveRequest2.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest2.method);
      CodeActionResolveRequest2.capabilities = messages_1.CM.create("textDocument.codeAction.resolveSupport", "codeActionProvider.resolveProvider");
    })(CodeActionResolveRequest || (exports.CodeActionResolveRequest = CodeActionResolveRequest = {}));
    var WorkspaceSymbolRequest;
    (function(WorkspaceSymbolRequest2) {
      WorkspaceSymbolRequest2.method = "workspace/symbol";
      WorkspaceSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest2.method);
      WorkspaceSymbolRequest2.capabilities = messages_1.CM.create("workspace.symbol", "workspaceSymbolProvider");
    })(WorkspaceSymbolRequest || (exports.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
    var WorkspaceSymbolResolveRequest;
    (function(WorkspaceSymbolResolveRequest2) {
      WorkspaceSymbolResolveRequest2.method = "workspaceSymbol/resolve";
      WorkspaceSymbolResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolResolveRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest2.method);
      WorkspaceSymbolResolveRequest2.capabilities = messages_1.CM.create("workspace.symbol.resolveSupport", "workspaceSymbolProvider.resolveProvider");
    })(WorkspaceSymbolResolveRequest || (exports.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
    var CodeLensRequest;
    (function(CodeLensRequest2) {
      CodeLensRequest2.method = "textDocument/codeLens";
      CodeLensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensRequest2.type = new messages_1.ProtocolRequestType(CodeLensRequest2.method);
      CodeLensRequest2.capabilities = messages_1.CM.create("textDocument.codeLens", "codeLensProvider");
    })(CodeLensRequest || (exports.CodeLensRequest = CodeLensRequest = {}));
    var CodeLensResolveRequest;
    (function(CodeLensResolveRequest2) {
      CodeLensResolveRequest2.method = "codeLens/resolve";
      CodeLensResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensResolveRequest2.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest2.method);
      CodeLensResolveRequest2.capabilities = messages_1.CM.create("textDocument.codeLens.resolveSupport", "codeLensProvider.resolveProvider");
    })(CodeLensResolveRequest || (exports.CodeLensResolveRequest = CodeLensResolveRequest = {}));
    var CodeLensRefreshRequest;
    (function(CodeLensRefreshRequest2) {
      CodeLensRefreshRequest2.method = `workspace/codeLens/refresh`;
      CodeLensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      CodeLensRefreshRequest2.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest2.method);
      CodeLensRefreshRequest2.capabilities = messages_1.CM.create("workspace.codeLens", void 0);
    })(CodeLensRefreshRequest || (exports.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
    var DocumentLinkRequest;
    (function(DocumentLinkRequest2) {
      DocumentLinkRequest2.method = "textDocument/documentLink";
      DocumentLinkRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkRequest2.method);
      DocumentLinkRequest2.capabilities = messages_1.CM.create("textDocument.documentLink", "documentLinkProvider");
    })(DocumentLinkRequest || (exports.DocumentLinkRequest = DocumentLinkRequest = {}));
    var DocumentLinkResolveRequest;
    (function(DocumentLinkResolveRequest2) {
      DocumentLinkResolveRequest2.method = "documentLink/resolve";
      DocumentLinkResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkResolveRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest2.method);
      DocumentLinkResolveRequest2.capabilities = messages_1.CM.create("textDocument.documentLink", "documentLinkProvider.resolveProvider");
    })(DocumentLinkResolveRequest || (exports.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
    var DocumentFormattingRequest;
    (function(DocumentFormattingRequest2) {
      DocumentFormattingRequest2.method = "textDocument/formatting";
      DocumentFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest2.method);
      DocumentFormattingRequest2.capabilities = messages_1.CM.create("textDocument.formatting", "documentFormattingProvider");
    })(DocumentFormattingRequest || (exports.DocumentFormattingRequest = DocumentFormattingRequest = {}));
    var DocumentRangeFormattingRequest;
    (function(DocumentRangeFormattingRequest2) {
      DocumentRangeFormattingRequest2.method = "textDocument/rangeFormatting";
      DocumentRangeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest2.method);
      DocumentRangeFormattingRequest2.capabilities = messages_1.CM.create("textDocument.rangeFormatting", "documentRangeFormattingProvider");
    })(DocumentRangeFormattingRequest || (exports.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
    var DocumentRangesFormattingRequest;
    (function(DocumentRangesFormattingRequest2) {
      DocumentRangesFormattingRequest2.method = "textDocument/rangesFormatting";
      DocumentRangesFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangesFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest2.method);
      DocumentRangesFormattingRequest2.capabilities = messages_1.CM.create("textDocument.rangeFormatting.rangesSupport", "documentRangeFormattingProvider.rangesSupport");
    })(DocumentRangesFormattingRequest || (exports.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
    var DocumentOnTypeFormattingRequest;
    (function(DocumentOnTypeFormattingRequest2) {
      DocumentOnTypeFormattingRequest2.method = "textDocument/onTypeFormatting";
      DocumentOnTypeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentOnTypeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest2.method);
      DocumentOnTypeFormattingRequest2.capabilities = messages_1.CM.create("textDocument.onTypeFormatting", "documentOnTypeFormattingProvider");
    })(DocumentOnTypeFormattingRequest || (exports.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
    var PrepareSupportDefaultBehavior;
    (function(PrepareSupportDefaultBehavior2) {
      PrepareSupportDefaultBehavior2.Identifier = 1;
    })(PrepareSupportDefaultBehavior || (exports.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
    var RenameRequest;
    (function(RenameRequest2) {
      RenameRequest2.method = "textDocument/rename";
      RenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      RenameRequest2.type = new messages_1.ProtocolRequestType(RenameRequest2.method);
      RenameRequest2.capabilities = messages_1.CM.create("textDocument.rename", "renameProvider");
    })(RenameRequest || (exports.RenameRequest = RenameRequest = {}));
    var PrepareRenameRequest;
    (function(PrepareRenameRequest2) {
      PrepareRenameRequest2.method = "textDocument/prepareRename";
      PrepareRenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      PrepareRenameRequest2.type = new messages_1.ProtocolRequestType(PrepareRenameRequest2.method);
      PrepareRenameRequest2.capabilities = messages_1.CM.create("textDocument.rename.prepareSupport", "renameProvider.prepareProvider");
    })(PrepareRenameRequest || (exports.PrepareRenameRequest = PrepareRenameRequest = {}));
    var ExecuteCommandRequest;
    (function(ExecuteCommandRequest2) {
      ExecuteCommandRequest2.method = "workspace/executeCommand";
      ExecuteCommandRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExecuteCommandRequest2.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest2.method);
      ExecuteCommandRequest2.capabilities = messages_1.CM.create("workspace.executeCommand", "executeCommandProvider");
    })(ExecuteCommandRequest || (exports.ExecuteCommandRequest = ExecuteCommandRequest = {}));
    var ApplyWorkspaceEditRequest;
    (function(ApplyWorkspaceEditRequest2) {
      ApplyWorkspaceEditRequest2.method = "workspace/applyEdit";
      ApplyWorkspaceEditRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ApplyWorkspaceEditRequest2.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
      ApplyWorkspaceEditRequest2.capabilities = messages_1.CM.create("workspace.applyEdit", void 0);
    })(ApplyWorkspaceEditRequest || (exports.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection2 = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/connection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createProtocolConnection = createProtocolConnection;
    var vscode_jsonrpc_1 = require_api();
    function createProtocolConnection(input, output, logger, options2) {
      if (vscode_jsonrpc_1.ConnectionStrategy.is(options2)) {
        options2 = { connectionStrategy: options2 };
      }
      return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options2);
    }
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api2 = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/common/api.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LSPErrorCodes = exports.createProtocolConnection = void 0;
    __exportStar(require_api(), exports);
    __exportStar((init_main(), __toCommonJS(main_exports)), exports);
    __exportStar(require_messages2(), exports);
    __exportStar(require_protocol(), exports);
    var connection_1 = require_connection2();
    Object.defineProperty(exports, "createProtocolConnection", { enumerable: true, get: function() {
      return connection_1.createProtocolConnection;
    } });
    var LSPErrorCodes;
    (function(LSPErrorCodes2) {
      LSPErrorCodes2.lspReservedErrorRangeStart = -32899;
      LSPErrorCodes2.RequestFailed = -32803;
      LSPErrorCodes2.ServerCancelled = -32802;
      LSPErrorCodes2.ContentModified = -32801;
      LSPErrorCodes2.RequestCancelled = -32800;
      LSPErrorCodes2.lspReservedErrorRangeEnd = -32800;
    })(LSPErrorCodes || (exports.LSPErrorCodes = LSPErrorCodes = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/progress.js
var require_progress = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/progress.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProgressFeature = exports.WorkDoneProgressReporter = void 0;
    exports.attachWorkDone = attachWorkDone;
    exports.attachPartialResult = attachPartialResult;
    var vscode_languageserver_protocol_1 = require_api2();
    var WorkDoneProgressReporter;
    (function(WorkDoneProgressReporter2) {
      function isNullInstance(reporter) {
        return reporter instanceof NullProgressReporter;
      }
      WorkDoneProgressReporter2.isNullInstance = isNullInstance;
    })(WorkDoneProgressReporter || (exports.WorkDoneProgressReporter = WorkDoneProgressReporter = {}));
    var WorkDoneProgressReporterImpl = class _WorkDoneProgressReporterImpl {
      _connection;
      _token;
      static Instances = /* @__PURE__ */ new Map();
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
        _WorkDoneProgressReporterImpl.Instances.set(this._token, this);
      }
      begin(title, percentage, message, cancellable) {
        const param = {
          kind: "begin",
          title,
          message,
          cancellable
        };
        if (typeof percentage === "number") {
          param.percentage = Math.round(percentage);
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      report(arg0, arg1) {
        const param = {
          kind: "report"
        };
        if (typeof arg0 === "number") {
          param.percentage = Math.round(arg0);
          if (arg1 !== void 0) {
            param.message = arg1;
          }
        } else {
          param.message = arg0;
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      done() {
        _WorkDoneProgressReporterImpl.Instances.delete(this._token);
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: "end" });
      }
    };
    var WorkDoneProgressServerReporterImpl = class extends WorkDoneProgressReporterImpl {
      _source;
      constructor(connection2, token) {
        super(connection2, token);
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
        super.done();
      }
      cancel() {
        this._source.cancel();
      }
    };
    var NullProgressReporter = class {
      constructor() {
      }
      begin() {
      }
      report() {
      }
      done() {
      }
    };
    var NullProgressServerReporter = class extends NullProgressReporter {
      _source;
      constructor() {
        super();
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
      }
      cancel() {
        this._source.cancel();
      }
    };
    function attachWorkDone(connection2, params) {
      if (params === void 0 || params.workDoneToken === void 0) {
        return new NullProgressReporter();
      }
      const token = params.workDoneToken;
      delete params.workDoneToken;
      return new WorkDoneProgressReporterImpl(connection2, token);
    }
    var ProgressFeature = (Base) => {
      return class extends Base {
        _progressSupported;
        constructor() {
          super();
          this._progressSupported = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          if (capabilities?.window?.workDoneProgress === true) {
            this._progressSupported = true;
            this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
              const progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
              if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
                progress.cancel();
              }
            });
          }
        }
        attachWorkDoneProgress(token) {
          if (token === void 0) {
            return new NullProgressReporter();
          } else {
            return new WorkDoneProgressReporterImpl(this.connection, token);
          }
        }
        createWorkDoneProgress() {
          if (this._progressSupported) {
            const token = (0, vscode_languageserver_protocol_1.RAL)().crypto.randomUUID();
            return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
              const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
              return result;
            });
          } else {
            return Promise.resolve(new NullProgressServerReporter());
          }
        }
      };
    };
    exports.ProgressFeature = ProgressFeature;
    var ResultProgress;
    (function(ResultProgress2) {
      ResultProgress2.type = new vscode_languageserver_protocol_1.ProgressType();
    })(ResultProgress || (ResultProgress = {}));
    var ResultProgressReporterImpl = class {
      _connection;
      _token;
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
      }
      report(data) {
        this._connection.sendProgress(ResultProgress.type, this._token, data);
      }
    };
    function attachPartialResult(connection2, params) {
      if (params === void 0 || params.partialResultToken === void 0) {
        return void 0;
      }
      const token = params.partialResultToken;
      delete params.partialResultToken;
      return new ResultProgressReporterImpl(connection2, token);
    }
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/configuration.js
var require_configuration = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/configuration.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigurationFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var Is2 = __importStar(require_is());
    var ConfigurationFeature = (Base) => {
      return class extends Base {
        getConfiguration(arg) {
          if (!arg) {
            return this._getConfiguration({});
          } else if (Is2.string(arg)) {
            return this._getConfiguration({ section: arg });
          } else {
            return this._getConfiguration(arg);
          }
        }
        _getConfiguration(arg) {
          const params = {
            items: Array.isArray(arg) ? arg : [arg]
          };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
            if (Array.isArray(result)) {
              return Array.isArray(arg) ? result : result[0];
            } else {
              return Array.isArray(arg) ? [] : null;
            }
          });
        }
      };
    };
    exports.ConfigurationFeature = ConfigurationFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/workspaceFolder.js
var require_workspaceFolder = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/workspaceFolder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkspaceFoldersFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var WorkspaceFoldersFeature = (Base) => {
      return class extends Base {
        _onDidChangeWorkspaceFolders;
        _unregistration;
        _notificationIsAutoRegistered;
        constructor() {
          super();
          this._notificationIsAutoRegistered = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          const workspaceCapabilities = capabilities.workspace;
          if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
            this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter();
            this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
              this._onDidChangeWorkspaceFolders.fire(params.event);
            });
          }
        }
        fillServerCapabilities(capabilities) {
          super.fillServerCapabilities(capabilities);
          const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
          this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === "string";
        }
        getWorkspaceFolders() {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
        }
        get onDidChangeWorkspaceFolders() {
          if (!this._onDidChangeWorkspaceFolders) {
            throw new Error("Client doesn't support sending workspace folder change events.");
          }
          if (!this._notificationIsAutoRegistered && !this._unregistration) {
            this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
          }
          return this._onDidChangeWorkspaceFolders.event;
        }
      };
    };
    exports.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/callHierarchy.js
var require_callHierarchy = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/callHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CallHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var CallHierarchyFeature = (Base) => {
      return class extends Base {
        get callHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onIncomingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onOutgoingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports.CallHierarchyFeature = CallHierarchyFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/semanticTokens.js
var require_semanticTokens = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/semanticTokens.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SemanticTokensBuilder = exports.SemanticTokensDiff = exports.SemanticTokensFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var SemanticTokensFeature = (Base) => {
      return class extends Base {
        get semanticTokens() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onDelta: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onRange: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports.SemanticTokensFeature = SemanticTokensFeature;
    var SemanticTokensDiff = class {
      originalSequence;
      modifiedSequence;
      constructor(originalSequence, modifiedSequence) {
        this.originalSequence = originalSequence;
        this.modifiedSequence = modifiedSequence;
      }
      computeDiff() {
        const originalLength = this.originalSequence.length;
        const modifiedLength = this.modifiedSequence.length;
        let startIndex = 0;
        while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) {
          startIndex++;
        }
        if (startIndex < modifiedLength && startIndex < originalLength) {
          let originalEndIndex = originalLength - 1;
          let modifiedEndIndex = modifiedLength - 1;
          while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
            originalEndIndex--;
            modifiedEndIndex--;
          }
          if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
            originalEndIndex++;
            modifiedEndIndex++;
          }
          const deleteCount = originalEndIndex - startIndex + 1;
          const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
          if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) {
            return [
              { start: startIndex, deleteCount: deleteCount - 1 }
            ];
          } else {
            return [
              { start: startIndex, deleteCount, data: newData }
            ];
          }
        } else if (startIndex < modifiedLength) {
          return [
            { start: startIndex, deleteCount: 0, data: this.modifiedSequence.slice(startIndex) }
          ];
        } else if (startIndex < originalLength) {
          return [
            { start: startIndex, deleteCount: originalLength - startIndex }
          ];
        } else {
          return [];
        }
      }
    };
    exports.SemanticTokensDiff = SemanticTokensDiff;
    var SemanticTokensBuilder = class _SemanticTokensBuilder {
      _id;
      _prevLine;
      _prevChar;
      _dataIsSortedAndDeltaEncoded;
      _data;
      _dataNonDelta;
      _dataLen;
      _prevData;
      constructor() {
        this._prevData = void 0;
        this.initialize();
      }
      initialize() {
        this._id = Date.now();
        this._prevLine = 0;
        this._prevChar = 0;
        this._data = [];
        this._dataNonDelta = [];
        this._dataLen = 0;
        this._dataIsSortedAndDeltaEncoded = true;
      }
      push(line, char, length, tokenType, tokenModifiers) {
        if (this._dataIsSortedAndDeltaEncoded && (line < this._prevLine || line === this._prevLine && char < this._prevChar)) {
          this._dataIsSortedAndDeltaEncoded = false;
          this._dataNonDelta = _SemanticTokensBuilder._deltaDecode(this._data);
        }
        let pushLine = line;
        let pushChar = char;
        if (this._dataIsSortedAndDeltaEncoded && this._dataLen > 0) {
          pushLine -= this._prevLine;
          if (pushLine === 0) {
            pushChar -= this._prevChar;
          }
        }
        const dataSource = this._dataIsSortedAndDeltaEncoded ? this._data : this._dataNonDelta;
        dataSource[this._dataLen++] = pushLine;
        dataSource[this._dataLen++] = pushChar;
        dataSource[this._dataLen++] = length;
        dataSource[this._dataLen++] = tokenType;
        dataSource[this._dataLen++] = tokenModifiers;
        this._prevLine = line;
        this._prevChar = char;
      }
      get id() {
        return this._id.toString();
      }
      static _deltaDecode(data) {
        const tokenCount = data.length / 5 | 0;
        let prevLine = 0;
        let prevChar = 0;
        const result = [];
        for (let i3 = 0; i3 < tokenCount; i3++) {
          const dstOffset = 5 * i3;
          let line = data[dstOffset];
          let char = data[dstOffset + 1];
          if (line === 0) {
            line = prevLine;
            char += prevChar;
          } else {
            line += prevLine;
          }
          const length = data[dstOffset + 2];
          const tokenType = data[dstOffset + 3];
          const tokenModifiers = data[dstOffset + 4];
          result[dstOffset + 0] = line;
          result[dstOffset + 1] = char;
          result[dstOffset + 2] = length;
          result[dstOffset + 3] = tokenType;
          result[dstOffset + 4] = tokenModifiers;
          prevLine = line;
          prevChar = char;
        }
        return result;
      }
      static _sortAndDeltaEncode(data) {
        const pos = [];
        const tokenCount = data.length / 5 | 0;
        for (let i3 = 0; i3 < tokenCount; i3++) {
          pos[i3] = i3;
        }
        pos.sort((a2, b2) => {
          const aLine = data[5 * a2];
          const bLine = data[5 * b2];
          if (aLine === bLine) {
            const aChar = data[5 * a2 + 1];
            const bChar = data[5 * b2 + 1];
            return aChar - bChar;
          }
          return aLine - bLine;
        });
        const result = [];
        let prevLine = 0;
        let prevChar = 0;
        for (let i3 = 0; i3 < tokenCount; i3++) {
          const srcOffset = 5 * pos[i3];
          const line = data[srcOffset + 0];
          const char = data[srcOffset + 1];
          const length = data[srcOffset + 2];
          const tokenType = data[srcOffset + 3];
          const tokenModifiers = data[srcOffset + 4];
          const pushLine = line - prevLine;
          const pushChar = pushLine === 0 ? char - prevChar : char;
          const dstOffset = 5 * i3;
          result[dstOffset + 0] = pushLine;
          result[dstOffset + 1] = pushChar;
          result[dstOffset + 2] = length;
          result[dstOffset + 3] = tokenType;
          result[dstOffset + 4] = tokenModifiers;
          prevLine = line;
          prevChar = char;
        }
        return result;
      }
      getFinalDataDelta() {
        if (this._dataIsSortedAndDeltaEncoded) {
          return this._data;
        } else {
          return _SemanticTokensBuilder._sortAndDeltaEncode(this._dataNonDelta);
        }
      }
      previousResult(id) {
        if (this.id === id) {
          this._prevData = this.getFinalDataDelta();
        } else {
          this._prevData = void 0;
        }
        this.initialize();
      }
      build() {
        this._prevData = void 0;
        return {
          resultId: this.id,
          data: this.getFinalDataDelta()
        };
      }
      canBuildEdits() {
        return this._prevData !== void 0;
      }
      buildEdits() {
        if (this._prevData !== void 0) {
          return {
            resultId: this.id,
            edits: new SemanticTokensDiff(this._prevData, this.getFinalDataDelta()).computeDiff()
          };
        } else {
          return this.build();
        }
      }
    };
    exports.SemanticTokensBuilder = SemanticTokensBuilder;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/showDocument.js
var require_showDocument = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/showDocument.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ShowDocumentFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var ShowDocumentFeature = (Base) => {
      return class extends Base {
        showDocument(params) {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
        }
      };
    };
    exports.ShowDocumentFeature = ShowDocumentFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/fileOperations.js
var require_fileOperations = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/fileOperations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileOperationsFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var FileOperationsFeature = (Base) => {
      return class extends Base {
        onDidCreateFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
            return handler(params);
          });
        }
        onDidRenameFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
            return handler(params);
          });
        }
        onDidDeleteFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
            return handler(params);
          });
        }
        onWillCreateFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillRenameFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillDeleteFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
      };
    };
    exports.FileOperationsFeature = FileOperationsFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/linkedEditingRange.js
var require_linkedEditingRange = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/linkedEditingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkedEditingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var LinkedEditingRangeFeature = (Base) => {
      return class extends Base {
        onLinkedEditingRange(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
          });
        }
      };
    };
    exports.LinkedEditingRangeFeature = LinkedEditingRangeFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/typeHierarchy.js
var require_typeHierarchy = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/typeHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var TypeHierarchyFeature = (Base) => {
      return class extends Base {
        get typeHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onSupertypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onSubtypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports.TypeHierarchyFeature = TypeHierarchyFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/inlineValue.js
var require_inlineValue = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/inlineValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineValueFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var InlineValueFeature = (Base) => {
      return class extends Base {
        get inlineValue() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports.InlineValueFeature = InlineValueFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/foldingRange.js
var require_foldingRange = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/foldingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FoldingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var FoldingRangeFeature = (Base) => {
      return class extends Base {
        get foldingRange() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.FoldingRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports.FoldingRangeFeature = FoldingRangeFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/inlayHint.js
var require_inlayHint = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/inlayHint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlayHintFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var InlayHintFeature = (Base) => {
      return class extends Base {
        get inlayHint() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            },
            resolve: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, (params, cancel) => {
                return handler(params, cancel);
              });
            }
          };
        }
      };
    };
    exports.InlayHintFeature = InlayHintFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/diagnostic.js
var require_diagnostic = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/diagnostic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var DiagnosticFeature = (Base) => {
      return class extends Base {
        get diagnostics() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.partialResult, params));
              });
            },
            onWorkspace: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, params));
              });
            }
          };
        }
      };
    };
    exports.DiagnosticFeature = DiagnosticFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/textDocuments.js
var require_textDocuments = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/textDocuments.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextDocuments = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var TextDocuments2 = class {
      _configuration;
      _syncedDocuments;
      _onDidChangeContent;
      _onDidOpen;
      _onDidClose;
      _onDidSave;
      _onWillSave;
      _willSaveWaitUntil;
      /**
       * Create a new text document manager.
       */
      constructor(configuration) {
        this._configuration = configuration;
        this._syncedDocuments = /* @__PURE__ */ new Map();
        this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onWillSave = new vscode_languageserver_protocol_1.Emitter();
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened.
       */
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened or the content changes.
       */
      get onDidChangeContent() {
        return this._onDidChangeContent.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * will be saved.
       */
      get onWillSave() {
        return this._onWillSave.event;
      }
      /**
       * Sets a handler that will be called if a participant wants to provide
       * edits during a text document save.
       */
      onWillSaveWaitUntil(handler) {
        this._willSaveWaitUntil = handler;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been saved.
       */
      get onDidSave() {
        return this._onDidSave.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been closed.
       */
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Returns the document for the given URI. Returns undefined if
       * the document is not managed by this instance.
       *
       * @param uri The text document's URI to retrieve.
       * @return the text document or `undefined`.
       */
      get(uri) {
        return this._syncedDocuments.get(uri);
      }
      /**
       * Returns all text documents managed by this instance.
       *
       * @return all text documents.
       */
      all() {
        return Array.from(this._syncedDocuments.values());
      }
      /**
       * Returns the URIs of all text documents managed by this instance.
       *
       * @return the URI's of all text documents.
       */
      keys() {
        return Array.from(this._syncedDocuments.keys());
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the text documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`,
       * `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`.
       *
       * Use the corresponding events on the TextDocuments instance instead.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        connection2.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
        const disposables = [];
        disposables.push(connection2.onDidOpenTextDocument((event) => {
          const td = event.textDocument;
          const document = this._configuration.create(td.uri, td.languageId, td.version, td.text);
          this._syncedDocuments.set(td.uri, document);
          const toFire = Object.freeze({ document });
          this._onDidOpen.fire(toFire);
          this._onDidChangeContent.fire(toFire);
        }));
        disposables.push(connection2.onDidChangeTextDocument((event) => {
          const td = event.textDocument;
          const changes = event.contentChanges;
          if (changes.length === 0) {
            return;
          }
          const { version } = td;
          if (version === null || version === void 0) {
            throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
          }
          let syncedDocument = this._syncedDocuments.get(td.uri);
          if (syncedDocument !== void 0) {
            syncedDocument = this._configuration.update(syncedDocument, changes, version);
            this._syncedDocuments.set(td.uri, syncedDocument);
            this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onDidCloseTextDocument((event) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._syncedDocuments.delete(event.textDocument.uri);
            this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocument((event) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onWillSave.fire(Object.freeze({ document: syncedDocument, reason: event.reason }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocumentWaitUntil((event, token) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0 && this._willSaveWaitUntil) {
            return this._willSaveWaitUntil(Object.freeze({ document: syncedDocument, reason: event.reason }), token);
          } else {
            return [];
          }
        }));
        disposables.push(connection2.onDidSaveTextDocument((event) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
    };
    exports.TextDocuments = TextDocuments2;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/notebook.js
var require_notebook = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/notebook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NotebookDocuments = exports.NotebookSyncFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var textDocuments_1 = require_textDocuments();
    var NotebookSyncFeature = (Base) => {
      return class extends Base {
        get synchronization() {
          return {
            onDidOpenNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidOpenNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            },
            onDidChangeNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            },
            onDidSaveNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidSaveNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            },
            onDidCloseNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidCloseNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            }
          };
        }
      };
    };
    exports.NotebookSyncFeature = NotebookSyncFeature;
    var CellTextDocumentConnection = class _CellTextDocumentConnection {
      static NULL_DISPOSE = Object.freeze({ dispose: () => {
      } });
      openHandler;
      changeHandler;
      closeHandler;
      onDidOpenTextDocument(handler) {
        this.openHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.openHandler = void 0;
        });
      }
      openTextDocument(params) {
        return this.openHandler && this.openHandler(params);
      }
      onDidChangeTextDocument(handler) {
        this.changeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.changeHandler = handler;
        });
      }
      changeTextDocument(params) {
        return this.changeHandler && this.changeHandler(params);
      }
      onDidCloseTextDocument(handler) {
        this.closeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.closeHandler = void 0;
        });
      }
      closeTextDocument(params) {
        return this.closeHandler && this.closeHandler(params);
      }
      onWillSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onWillSaveTextDocumentWaitUntil() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onDidSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
    };
    var NotebookDocuments = class {
      notebookDocuments;
      notebookCellMap;
      _onDidOpen;
      _onDidSave;
      _onDidChange;
      _onDidClose;
      _cellTextDocuments;
      constructor(configurationOrTextDocuments) {
        if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) {
          this._cellTextDocuments = configurationOrTextDocuments;
        } else {
          this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
        }
        this.notebookDocuments = /* @__PURE__ */ new Map();
        this.notebookCellMap = /* @__PURE__ */ new Map();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidChange = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
      }
      get cellTextDocuments() {
        return this._cellTextDocuments;
      }
      getCellTextDocument(cell) {
        return this._cellTextDocuments.get(cell.document);
      }
      getNotebookDocument(uri) {
        return this.notebookDocuments.get(uri);
      }
      getNotebookCell(uri) {
        const value = this.notebookCellMap.get(uri);
        return value && value[0];
      }
      findNotebookDocumentForCell(cell) {
        const key = typeof cell === "string" ? cell : cell.document;
        const value = this.notebookCellMap.get(key);
        return value && value[1];
      }
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      get onDidSave() {
        return this._onDidSave.event;
      }
      get onDidChange() {
        return this._onDidChange.event;
      }
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the notebook documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`,
       *  and `onDidCloseNotebookDocument`.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        const cellTextDocumentConnection = new CellTextDocumentConnection();
        const disposables = [];
        disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
        disposables.push(connection2.notebooks.synchronization.onDidOpenNotebookDocument(async (params) => {
          this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            await cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
          }
          this.updateCellMap(params.notebookDocument);
          this._onDidOpen.fire(params.notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidChangeNotebookDocument(async (params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          notebookDocument.version = params.notebookDocument.version;
          const oldMetadata = notebookDocument.metadata;
          let metadataChanged = false;
          const change = params.change;
          if (change.metadata !== void 0) {
            metadataChanged = true;
            notebookDocument.metadata = change.metadata;
          }
          const opened = [];
          const closed = [];
          const data = [];
          const text = [];
          if (change.cells !== void 0) {
            const changedCells = change.cells;
            if (changedCells.structure !== void 0) {
              const array = changedCells.structure.array;
              notebookDocument.cells.splice(array.start, array.deleteCount, ...array.cells !== void 0 ? array.cells : []);
              if (changedCells.structure.didOpen !== void 0) {
                for (const open of changedCells.structure.didOpen) {
                  await cellTextDocumentConnection.openTextDocument({ textDocument: open });
                  opened.push(open.uri);
                }
              }
              if (changedCells.structure.didClose) {
                for (const close of changedCells.structure.didClose) {
                  await cellTextDocumentConnection.closeTextDocument({ textDocument: close });
                  closed.push(close.uri);
                }
              }
            }
            if (changedCells.data !== void 0) {
              const cellUpdates = new Map(changedCells.data.map((cell) => [cell.document, cell]));
              for (let i3 = 0; i3 <= notebookDocument.cells.length; i3++) {
                const change2 = cellUpdates.get(notebookDocument.cells[i3].document);
                if (change2 !== void 0) {
                  const old = notebookDocument.cells.splice(i3, 1, change2);
                  data.push({ old: old[0], new: change2 });
                  cellUpdates.delete(change2.document);
                  if (cellUpdates.size === 0) {
                    break;
                  }
                }
              }
            }
            if (changedCells.textContent !== void 0) {
              for (const cellTextDocument of changedCells.textContent) {
                await cellTextDocumentConnection.changeTextDocument({ textDocument: cellTextDocument.document, contentChanges: cellTextDocument.changes });
                text.push(cellTextDocument.document.uri);
              }
            }
          }
          const removed = [];
          for (const close of closed) {
            removed.push(this.getNotebookCell(close));
            this.notebookCellMap.delete(close);
          }
          this.updateCellMap(notebookDocument);
          const changeEvent = { notebookDocument };
          if (metadataChanged) {
            changeEvent.metadata = { old: oldMetadata, new: notebookDocument.metadata };
          }
          const added = [];
          for (const open of opened) {
            added.push(this.getNotebookCell(open));
          }
          const textContent = [];
          for (const change2 of text) {
            textContent.push(this.getNotebookCell(change2));
          }
          if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) {
            changeEvent.cells = { added, removed, changed: { data, textContent } };
          }
          if (changeEvent.metadata !== void 0 || changeEvent.cells !== void 0) {
            this._onDidChange.fire(changeEvent);
          }
        }));
        disposables.push(connection2.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidSave.fire(notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidCloseNotebookDocument(async (params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidClose.fire(notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            await cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
          }
          this.notebookDocuments.delete(params.notebookDocument.uri);
          for (const cell of notebookDocument.cells) {
            this.notebookCellMap.delete(cell.document);
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
      updateCellMap(notebookDocument) {
        for (const cell of notebookDocument.cells) {
          this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
        }
      }
    };
    exports.NotebookDocuments = NotebookDocuments;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/moniker.js
var require_moniker = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/moniker.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MonikerFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var MonikerFeature = (Base) => {
      return class extends Base {
        get moniker() {
          return {
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.MonikerRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports.MonikerFeature = MonikerFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/inlineCompletion.js
var require_inlineCompletion = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/inlineCompletion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineCompletionFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var InlineCompletionFeature = (Base) => {
      return class extends Base {
        get inlineCompletion() {
          return {
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports.InlineCompletionFeature = InlineCompletionFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/textDocumentContent.js
var require_textDocumentContent = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/textDocumentContent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextDocumentContentFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var TextDocumentContentFeature = (Base) => {
      return class extends Base {
        get textDocumentContent() {
          return {
            refresh: (uri) => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.TextDocumentContentRefreshRequest.type, { uri });
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.TextDocumentContentRequest.type, (params, cancel) => {
                return handler(params, cancel);
              });
            }
          };
        }
      };
    };
    exports.TextDocumentContentFeature = TextDocumentContentFeature;
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/server.js
var require_server = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/server.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._NotebooksImpl = exports._LanguagesImpl = exports.BulkUnregistration = exports.BulkRegistration = exports.ErrorMessageTracker = void 0;
    exports.combineConsoleFeatures = combineConsoleFeatures;
    exports.combineTelemetryFeatures = combineTelemetryFeatures;
    exports.combineTracerFeatures = combineTracerFeatures;
    exports.combineClientFeatures = combineClientFeatures;
    exports.combineWindowFeatures = combineWindowFeatures;
    exports.combineWorkspaceFeatures = combineWorkspaceFeatures;
    exports.combineLanguagesFeatures = combineLanguagesFeatures;
    exports.combineNotebooksFeatures = combineNotebooksFeatures;
    exports.combineFeatures = combineFeatures;
    exports.createConnection = createConnection2;
    var vscode_languageserver_protocol_1 = require_api2();
    var Is2 = __importStar(require_is());
    var progress_1 = require_progress();
    var configuration_1 = require_configuration();
    var workspaceFolder_1 = require_workspaceFolder();
    var callHierarchy_1 = require_callHierarchy();
    var semanticTokens_1 = require_semanticTokens();
    var showDocument_1 = require_showDocument();
    var fileOperations_1 = require_fileOperations();
    var linkedEditingRange_1 = require_linkedEditingRange();
    var typeHierarchy_1 = require_typeHierarchy();
    var inlineValue_1 = require_inlineValue();
    var foldingRange_1 = require_foldingRange();
    var inlayHint_1 = require_inlayHint();
    var diagnostic_1 = require_diagnostic();
    var notebook_1 = require_notebook();
    var moniker_1 = require_moniker();
    var inlineCompletion_1 = require_inlineCompletion();
    var textDocumentContent_1 = require_textDocumentContent();
    function null2Undefined(value) {
      if (value === null) {
        return void 0;
      }
      return value;
    }
    var ErrorMessageTracker = class {
      _messages;
      constructor() {
        this._messages = /* @__PURE__ */ Object.create(null);
      }
      /**
       * Add a message to the tracker.
       *
       * @param message The message to add.
       */
      add(message) {
        let count = this._messages[message];
        if (!count) {
          count = 0;
        }
        count++;
        this._messages[message] = count;
      }
      /**
       * Send all tracked messages to the connection's window.
       *
       * @param connection The connection established between client and server.
       */
      sendErrors(connection2) {
        Object.keys(this._messages).forEach((message) => {
          connection2.window.showErrorMessage(message);
        });
      }
    };
    exports.ErrorMessageTracker = ErrorMessageTracker;
    var RemoteConsoleImpl = class {
      _rawConnection;
      _connection;
      constructor() {
      }
      rawAttach(connection2) {
        this._rawConnection = connection2;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      fillServerCapabilities(_capabilities) {
      }
      initialize(_capabilities) {
      }
      error(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
      }
      warn(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
      }
      info(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
      }
      log(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
      }
      debug(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Debug, message);
      }
      send(type, message) {
        if (this._rawConnection) {
          this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message }).catch(() => {
            (0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
          });
        }
      }
    };
    var _RemoteWindowImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      showErrorMessage(message, ...actions) {
        const params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showWarningMessage(message, ...actions) {
        const params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showInformationMessage(message, ...actions) {
        const params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
    };
    var RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
    var BulkRegistration;
    (function(BulkRegistration2) {
      function create() {
        return new BulkRegistrationImpl();
      }
      BulkRegistration2.create = create;
    })(BulkRegistration || (exports.BulkRegistration = BulkRegistration = {}));
    var BulkRegistrationImpl = class {
      _registrations = [];
      _registered = /* @__PURE__ */ new Set();
      add(type, registerOptions) {
        const method = Is2.string(type) ? type : type.method;
        if (this._registered.has(method)) {
          throw new Error(`${method} is already added to this registration`);
        }
        const id = (0, vscode_languageserver_protocol_1.RAL)().crypto.randomUUID();
        this._registrations.push({
          id,
          method,
          registerOptions: registerOptions || {}
        });
        this._registered.add(method);
      }
      asRegistrationParams() {
        return {
          registrations: this._registrations
        };
      }
    };
    var BulkUnregistration;
    (function(BulkUnregistration2) {
      function create() {
        return new BulkUnregistrationImpl(void 0, []);
      }
      BulkUnregistration2.create = create;
    })(BulkUnregistration || (exports.BulkUnregistration = BulkUnregistration = {}));
    var BulkUnregistrationImpl = class {
      _connection;
      _unregistrations = /* @__PURE__ */ new Map();
      constructor(_connection, unregistrations) {
        this._connection = _connection;
        unregistrations.forEach((unregistration) => {
          this._unregistrations.set(unregistration.method, unregistration);
        });
      }
      get isAttached() {
        return !!this._connection;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      add(unregistration) {
        this._unregistrations.set(unregistration.method, unregistration);
      }
      dispose() {
        const unregistrations = [];
        for (const unregistration of this._unregistrations.values()) {
          unregistrations.push(unregistration);
        }
        const params = {
          unregisterations: unregistrations
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this._connection.console.info(`Bulk unregistration failed.`);
        });
      }
      disposeSingle(arg) {
        const method = Is2.string(arg) ? arg : arg.method;
        const unregistration = this._unregistrations.get(method);
        if (!unregistration) {
          return false;
        }
        const params = {
          unregisterations: [unregistration]
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
          this._unregistrations.delete(method);
        }, (_error) => {
          this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
        });
        return true;
      }
    };
    var RemoteClientImpl = class {
      _connection;
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
        if (typeOrRegistrations instanceof BulkRegistrationImpl) {
          return this.registerMany(typeOrRegistrations);
        } else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
          return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
        } else {
          return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
        }
      }
      registerSingle1(unregistration, type, registerOptions) {
        const method = Is2.string(type) ? type : type.method;
        const id = (0, vscode_languageserver_protocol_1.RAL)().crypto.randomUUID();
        const params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        if (!unregistration.isAttached) {
          unregistration.attach(this.connection);
        }
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          unregistration.add({ id, method });
          return unregistration;
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      registerSingle2(type, registerOptions) {
        const method = Is2.string(type) ? type : type.method;
        const id = (0, vscode_languageserver_protocol_1.RAL)().crypto.randomUUID();
        const params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          return vscode_languageserver_protocol_1.Disposable.create(() => {
            this.unregisterSingle(id, method).catch(() => {
              this.connection.console.info(`Un-registering capability with id ${id} failed.`);
            });
          });
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      unregisterSingle(id, method) {
        const params = {
          unregisterations: [{ id, method }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this.connection.console.info(`Un-registering request handler for ${id} failed.`);
        });
      }
      registerMany(registrations) {
        const params = registrations.asRegistrationParams();
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
          return new BulkUnregistrationImpl(this._connection, params.registrations.map((registration) => {
            return { id: registration.id, method: registration.method };
          }));
        }, (_error) => {
          this.connection.console.info(`Bulk registration failed.`);
          return Promise.reject(_error);
        });
      }
    };
    var _RemoteWorkspaceImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      applyEdit(paramOrEdit) {
        function isApplyWorkspaceEditParams(value) {
          return value && !!value.edit;
        }
        const params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
      }
    };
    var RemoteWorkspaceImpl = (0, textDocumentContent_1.TextDocumentContentFeature)((0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl))));
    var TracerImpl = class {
      _trace;
      _connection;
      constructor() {
        this._trace = vscode_languageserver_protocol_1.Trace.Off;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      set trace(value) {
        this._trace = value;
      }
      log(message, verbose) {
        if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
          return;
        }
        this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
          message,
          verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : void 0
        }).catch(() => {
        });
      }
    };
    var TelemetryImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      logEvent(data) {
        this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
          this.connection.console.log(`Sending TelemetryEventNotification failed`);
        });
      }
    };
    var _LanguagesImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports._LanguagesImpl = _LanguagesImpl;
    var LanguagesImpl = (0, inlineCompletion_1.InlineCompletionFeature)((0, foldingRange_1.FoldingRangeFeature)((0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl))))))))));
    var _NotebooksImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports._NotebooksImpl = _NotebooksImpl;
    var NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
    function combineConsoleFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineTelemetryFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineTracerFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineClientFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineWindowFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineWorkspaceFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineLanguagesFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineNotebooksFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineFeatures(one, two) {
      function combine(one2, two2, func2) {
        if (one2 && two2) {
          return func2(one2, two2);
        } else if (one2) {
          return one2;
        } else {
          return two2;
        }
      }
      const result = {
        __brand: "features",
        console: combine(one.console, two.console, combineConsoleFeatures),
        tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
        telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
        client: combine(one.client, two.client, combineClientFeatures),
        window: combine(one.window, two.window, combineWindowFeatures),
        workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
        languages: combine(one.languages, two.languages, combineLanguagesFeatures),
        notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
      };
      return result;
    }
    function createConnection2(connectionFactory, watchDog, factories) {
      const logger = factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl();
      const connection2 = connectionFactory(logger);
      logger.rawAttach(connection2);
      const tracer = factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl();
      const telemetry = factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl();
      const client = factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl();
      const remoteWindow = factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl();
      const workspace = factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl();
      const languages = factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl();
      const notebooks = factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl))() : new NotebooksImpl();
      const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages, notebooks];
      function asPromise(value) {
        if (value instanceof Promise) {
          return value;
        } else if (Is2.thenable(value)) {
          return new Promise((resolve2, reject) => {
            value.then((resolved) => resolve2(resolved), (error) => reject(error));
          });
        } else {
          return Promise.resolve(value);
        }
      }
      let shutdownHandler = void 0;
      let initializeHandler = void 0;
      let exitHandler = void 0;
      const protocolConnection = {
        listen: () => connection2.listen(),
        sendRequest: (type, ...params) => connection2.sendRequest(Is2.string(type) ? type : type.method, ...params),
        onRequest: (type, handler) => connection2.onRequest(type, handler),
        sendNotification: (type, param) => {
          const method = Is2.string(type) ? type : type.method;
          return connection2.sendNotification(method, param);
        },
        onNotification: (type, handler) => connection2.onNotification(type, handler),
        onProgress: connection2.onProgress,
        sendProgress: connection2.sendProgress,
        onInitialize: (handler) => {
          initializeHandler = handler;
          return {
            dispose: () => {
              initializeHandler = void 0;
            }
          };
        },
        onInitialized: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
        onShutdown: (handler) => {
          shutdownHandler = handler;
          return {
            dispose: () => {
              shutdownHandler = void 0;
            }
          };
        },
        onExit: (handler) => {
          exitHandler = handler;
          return {
            dispose: () => {
              exitHandler = void 0;
            }
          };
        },
        get console() {
          return logger;
        },
        get telemetry() {
          return telemetry;
        },
        get tracer() {
          return tracer;
        },
        get client() {
          return client;
        },
        get window() {
          return remoteWindow;
        },
        get workspace() {
          return workspace;
        },
        get languages() {
          return languages;
        },
        get notebooks() {
          return notebooks;
        },
        onDidChangeConfiguration: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
        onDidChangeWatchedFiles: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
        __textDocumentSync: void 0,
        onDidOpenTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
        onDidChangeTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
        onDidCloseTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
        onWillSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
        onWillSaveTextDocumentWaitUntil: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
        onDidSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
        sendDiagnostics: (params) => connection2.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
        onHover: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onCompletion: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCompletionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
        onSignatureHelp: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDeclaration: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onTypeDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onImplementation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onReferences: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentHighlight: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbolResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
        onCodeAction: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeActionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onCodeLens: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeLensResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentRangeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentRangesFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentRangesFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentOnTypeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onRenameRequest: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onPrepareRename: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentLinks: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentLinkResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentColor: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onColorPresentation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onFoldingRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onSelectionRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onExecuteCommand: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        dispose: () => connection2.dispose()
      };
      for (const remote of allRemotes) {
        remote.attach(protocolConnection);
      }
      connection2.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
        watchDog.initialize(params);
        if (Is2.string(params.trace)) {
          tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
        }
        for (const remote of allRemotes) {
          remote.initialize(params.capabilities);
        }
        if (initializeHandler) {
          const result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection2, params), void 0);
          return asPromise(result).then((value) => {
            if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
              return value;
            }
            let result2 = value;
            if (!result2) {
              result2 = { capabilities: {} };
            }
            let capabilities = result2.capabilities;
            if (!capabilities) {
              capabilities = {};
              result2.capabilities = capabilities;
            }
            if (capabilities.textDocumentSync === void 0 || capabilities.textDocumentSync === null) {
              capabilities.textDocumentSync = Is2.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            } else if (!Is2.number(capabilities.textDocumentSync) && !Is2.number(capabilities.textDocumentSync.change)) {
              capabilities.textDocumentSync.change = Is2.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            }
            for (const remote of allRemotes) {
              remote.fillServerCapabilities(capabilities);
            }
            return result2;
          });
        } else {
          const result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
          for (const remote of allRemotes) {
            remote.fillServerCapabilities(result.capabilities);
          }
          return result;
        }
      });
      connection2.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
        watchDog.shutdownReceived = true;
        if (shutdownHandler) {
          return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
        } else {
          return void 0;
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
        try {
          if (exitHandler) {
            return exitHandler();
          }
        } finally {
          if (watchDog.shutdownReceived) {
            watchDog.exit(0);
          } else {
            watchDog.exit(1);
          }
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
        tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
      });
      return protocolConnection;
    }
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/node/files.js
var require_files = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/node/files.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileSystem = void 0;
    exports.uriToFilePath = uriToFilePath;
    exports.resolve = resolve2;
    exports.resolveGlobalNodePath = resolveGlobalNodePath;
    exports.resolveGlobalYarnPath = resolveGlobalYarnPath;
    exports.resolveModulePath = resolveModulePath;
    var url = __importStar(__require("url"));
    var path4 = __importStar(__require("path"));
    var fs2 = __importStar(__require("fs"));
    var child_process_1 = __require("child_process");
    function uriToFilePath(uri) {
      const parsed = url.parse(uri);
      if (parsed.protocol !== "file:" || !parsed.path) {
        return void 0;
      }
      const segments = parsed.path.split("/");
      for (let i3 = 0, len = segments.length; i3 < len; i3++) {
        segments[i3] = decodeURIComponent(segments[i3]);
      }
      if (process.platform === "win32" && segments.length > 1) {
        const first = segments[0];
        const second = segments[1];
        if (first.length === 0 && second.length > 1 && second[1] === ":") {
          segments.shift();
        }
      }
      return path4.normalize(segments.join("/"));
    }
    function isWindows() {
      return process.platform === "win32";
    }
    function resolve2(moduleName, nodePath, cwd, tracer) {
      const nodePathKey = "NODE_PATH";
      const app = [
        "var p = process;",
        "p.on('message',function(m){",
        "if(m.c==='e'){",
        "p.exit(0);",
        "}",
        "else if(m.c==='rs'){",
        "try{",
        "var r=require.resolve(m.a);",
        "p.send({c:'r',s:true,r:r});",
        "}",
        "catch(err){",
        "p.send({c:'r',s:false});",
        "}",
        "}",
        "});"
      ].join("");
      return new Promise((resolve3, reject) => {
        const env = process.env;
        const newEnv = /* @__PURE__ */ Object.create(null);
        Object.keys(env).forEach((key) => newEnv[key] = env[key]);
        if (nodePath && fs2.existsSync(nodePath)) {
          if (newEnv[nodePathKey]) {
            newEnv[nodePathKey] = nodePath + path4.delimiter + newEnv[nodePathKey];
          } else {
            newEnv[nodePathKey] = nodePath;
          }
          if (tracer) {
            tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
          }
        }
        newEnv["ELECTRON_RUN_AS_NODE"] = "1";
        try {
          const cp = (0, child_process_1.fork)("", [], {
            cwd,
            env: newEnv,
            execArgv: ["-e", app]
          });
          if (cp.pid === void 0) {
            reject(new Error(`Starting process to resolve node module  ${moduleName} failed`));
            return;
          }
          cp.on("error", (error) => {
            reject(error);
          });
          cp.on("message", (message2) => {
            if (message2.c === "r") {
              cp.send({ c: "e" });
              if (message2.s) {
                resolve3(message2.r);
              } else {
                reject(new Error(`Failed to resolve module: ${moduleName}`));
              }
            }
          });
          const message = {
            c: "rs",
            a: moduleName
          };
          cp.send(message);
        } catch (error) {
          reject(error);
        }
      });
    }
    function resolveGlobalNodePath(tracer) {
      const env = /* @__PURE__ */ Object.create(null);
      Object.keys(process.env).forEach((key) => env[key] = process.env[key]);
      env["NO_UPDATE_NOTIFIER"] = "true";
      const options2 = {
        encoding: "utf8",
        env
      };
      if (isWindows()) {
        options2.shell = true;
      }
      const handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        const stdout = (isWindows() ? (0, child_process_1.spawnSync)("npm.cmd config get prefix", options2) : (0, child_process_1.spawnSync)("npm", ["config", "get", "prefix"], options2)).stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'npm config get prefix' didn't return a value.`);
          }
          return void 0;
        }
        const prefix = stdout.trim();
        if (tracer) {
          tracer(`'npm config get prefix' value is: ${prefix}`);
        }
        if (prefix.length > 0) {
          if (isWindows()) {
            return path4.join(prefix, "node_modules");
          } else {
            return path4.join(prefix, "lib", "node_modules");
          }
        }
        return void 0;
      } catch (err2) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    function resolveGlobalYarnPath(tracer) {
      const options2 = {
        encoding: "utf8"
      };
      if (isWindows()) {
        options2.shell = true;
      }
      const handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        const results = isWindows() ? (0, child_process_1.spawnSync)("yarn.cmd global dir --json", options2) : (0, child_process_1.spawnSync)("yarn", ["global", "dir", "--json"], options2);
        const stdout = results.stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'yarn global dir' didn't return a value.`);
            if (results.stderr) {
              tracer(results.stderr);
            }
          }
          return void 0;
        }
        const lines = stdout.trim().split(/\r?\n/);
        for (const line of lines) {
          try {
            const yarn = JSON.parse(line);
            if (yarn.type === "log") {
              return path4.join(yarn.data, "node_modules");
            }
          } catch (e2) {
          }
        }
        return void 0;
      } catch (err2) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    var FileSystem;
    (function(FileSystem2) {
      let _isCaseSensitive = void 0;
      function isCaseSensitive() {
        if (_isCaseSensitive !== void 0) {
          return _isCaseSensitive;
        }
        if (process.platform === "win32") {
          _isCaseSensitive = false;
        } else {
          _isCaseSensitive = !fs2.existsSync(__filename.toUpperCase()) || !fs2.existsSync(__filename.toLowerCase());
        }
        return _isCaseSensitive;
      }
      FileSystem2.isCaseSensitive = isCaseSensitive;
      function isParent(parent, child) {
        if (isCaseSensitive()) {
          return path4.normalize(child).indexOf(path4.normalize(parent)) === 0;
        } else {
          return path4.normalize(child).toLowerCase().indexOf(path4.normalize(parent).toLowerCase()) === 0;
        }
      }
      FileSystem2.isParent = isParent;
    })(FileSystem || (exports.FileSystem = FileSystem = {}));
    function resolveModulePath(workspaceRoot, moduleName, nodePath, tracer) {
      if (nodePath) {
        if (!path4.isAbsolute(nodePath)) {
          nodePath = path4.join(workspaceRoot, nodePath);
        }
        return resolve2(moduleName, nodePath, nodePath, tracer).then((value) => {
          if (FileSystem.isParent(nodePath, value)) {
            return value;
          } else {
            return Promise.reject(new Error(`Failed to load ${moduleName} from node path location.`));
          }
        }).then(void 0, (_error) => {
          return resolve2(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
        });
      } else {
        return resolve2(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
      }
    }
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/node/ril.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = __require("util");
    var crypto_1 = __require("crypto");
    var api_1 = require_api();
    var MessageBuffer = class _MessageBuffer extends api_1.AbstractMessageBuffer {
      static emptyBuffer = Buffer.allocUnsafe(0);
      constructor(encoding = "utf-8") {
        super(encoding);
      }
      emptyBuffer() {
        return _MessageBuffer.emptyBuffer;
      }
      fromString(value, encoding) {
        return Buffer.from(value, encoding);
      }
      toString(value, encoding) {
        if (value instanceof Buffer) {
          return value.toString(encoding);
        } else {
          return new util_1.TextDecoder(encoding).decode(value);
        }
      }
      asNative(buffer, length) {
        if (length === void 0) {
          return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        } else {
          return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer.subarray(0, length));
        }
      }
      allocNative(length) {
        return Buffer.allocUnsafe(length);
      }
    };
    var ReadableStreamWrapper = class {
      stream;
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      onData(listener) {
        this.stream.on("data", listener);
        return api_1.Disposable.create(() => this.stream.off("data", listener));
      }
    };
    var WritableStreamWrapper = class {
      stream;
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      write(data, encoding) {
        return new Promise((resolve2, reject) => {
          const callback = (error) => {
            if (error === void 0 || error === null) {
              resolve2();
            } else {
              reject(error);
            }
          };
          if (typeof data === "string") {
            this.stream.write(data, encoding, callback);
          } else {
            this.stream.write(data, callback);
          }
        });
      }
      end() {
        this.stream.end();
      }
    };
    var _ril = Object.freeze({
      crypto: Object.freeze({
        randomUUID: () => (0, crypto_1.randomUUID)()
      }),
      messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (msg, options2) => {
            try {
              return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options2.charset));
            } catch (err2) {
              return Promise.reject(err2);
            }
          }
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (buffer, options2) => {
            try {
              if (buffer instanceof Buffer) {
                return Promise.resolve(JSON.parse(buffer.toString(options2.charset)));
              } else {
                return Promise.resolve(JSON.parse(new util_1.TextDecoder(options2.charset).decode(buffer)));
              }
            } catch (err2) {
              return Promise.reject(err2);
            }
          }
        })
      }),
      stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
      }),
      console,
      timer: Object.freeze({
        setTimeout(callback, ms, ...args2) {
          const handle2 = setTimeout(callback, ms, ...args2);
          return { dispose: () => clearTimeout(handle2) };
        },
        setImmediate(callback, ...args2) {
          const handle2 = setImmediate(callback, ...args2);
          return { dispose: () => clearImmediate(handle2) };
        },
        setInterval(callback, ms, ...args2) {
          const handle2 = setInterval(callback, ms, ...args2);
          return { dispose: () => clearInterval(handle2) };
        }
      })
    });
    function RIL() {
      return _ril;
    }
    (function(RIL2) {
      function install() {
        api_1.RAL.install(_ril);
      }
      RIL2.install = install;
    })(RIL || (RIL = {}));
    exports.default = RIL;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@10.0.0/node_modules/vscode-jsonrpc/lib/node/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m2, p2);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StreamMessageWriter = exports.StreamMessageReader = exports.SocketMessageWriter = exports.SocketMessageReader = exports.PortMessageWriter = exports.PortMessageReader = exports.IPCMessageWriter = exports.IPCMessageReader = void 0;
    exports.generateRandomPipeName = generateRandomPipeName;
    exports.createClientPipeTransport = createClientPipeTransport;
    exports.createServerPipeTransport = createServerPipeTransport;
    exports.createClientSocketTransport = createClientSocketTransport;
    exports.createServerSocketTransport = createServerSocketTransport;
    exports.createMessageConnection = createMessageConnection;
    var ril_1 = __importDefault(require_ril());
    ril_1.default.install();
    var path4 = __importStar(__require("path"));
    var os = __importStar(__require("os"));
    var fs2 = __importStar(__require("fs"));
    var crypto_1 = __require("crypto");
    var net_1 = __require("net");
    var api_1 = require_api();
    __exportStar(require_api(), exports);
    var IPCMessageReader = class extends api_1.AbstractMessageReader {
      process;
      constructor(process2) {
        super();
        this.process = process2;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      listen(callback) {
        this.process.on("message", callback);
        return api_1.Disposable.create(() => this.process.off("message", callback));
      }
    };
    exports.IPCMessageReader = IPCMessageReader;
    var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
      process;
      errorCount;
      constructor(process2) {
        super();
        this.process = process2;
        this.errorCount = 0;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      write(msg) {
        try {
          if (typeof this.process.send === "function") {
            this.process.send(msg, void 0, void 0, (error) => {
              if (error) {
                this.errorCount++;
                this.handleError(error, msg);
              } else {
                this.errorCount = 0;
              }
            });
          }
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports.IPCMessageWriter = IPCMessageWriter;
    var PortMessageReader = class extends api_1.AbstractMessageReader {
      onData;
      constructor(port) {
        super();
        this.onData = new api_1.Emitter();
        port.on("close", () => this.fireClose());
        port.on("error", (error) => this.fireError(error));
        port.on("message", (message) => {
          this.onData.fire(message);
        });
      }
      listen(callback) {
        return this.onData.event(callback);
      }
    };
    exports.PortMessageReader = PortMessageReader;
    var PortMessageWriter = class extends api_1.AbstractMessageWriter {
      port;
      errorCount;
      constructor(port) {
        super();
        this.port = port;
        this.errorCount = 0;
        port.on("close", () => this.fireClose());
        port.on("error", (error) => this.fireError(error));
      }
      write(msg) {
        try {
          this.port.postMessage(msg);
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports.PortMessageWriter = PortMessageWriter;
    var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(socket, encoding = "utf-8") {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
      }
    };
    exports.SocketMessageReader = SocketMessageReader;
    var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      socket;
      constructor(socket, options2) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options2);
        this.socket = socket;
      }
      dispose() {
        super.dispose();
        this.socket.destroy();
      }
    };
    exports.SocketMessageWriter = SocketMessageWriter;
    var StreamMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(readable, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
      }
    };
    exports.StreamMessageReader = StreamMessageReader;
    var StreamMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(writable, options2) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options2);
      }
    };
    exports.StreamMessageWriter = StreamMessageWriter;
    var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    var safeIpcPathLengths = /* @__PURE__ */ new Map([
      ["linux", 107],
      ["darwin", 102]
    ]);
    function generateRandomPipeName() {
      if (process.platform === "win32") {
        return `\\\\.\\pipe\\lsp-${(0, crypto_1.randomBytes)(16).toString("hex")}-sock`;
      }
      let randomLength = 32;
      const fixedLength = "/lsp-.sock".length;
      const tmpDir = fs2.realpathSync(XDG_RUNTIME_DIR ?? os.tmpdir());
      const limit = safeIpcPathLengths.get(process.platform);
      if (limit !== void 0) {
        randomLength = Math.min(limit - tmpDir.length - fixedLength, randomLength);
      }
      if (randomLength < 16) {
        throw new Error(`Unable to generate a random pipe name with ${randomLength} characters.`);
      }
      const randomSuffix = (0, crypto_1.randomBytes)(Math.floor(randomLength / 2)).toString("hex");
      return path4.join(tmpDir, `lsp-${randomSuffix}.sock`);
    }
    function createClientPipeTransport(pipeName, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve2, _reject) => {
        connectResolve = resolve2;
      });
      return new Promise((resolve2, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(pipeName, () => {
          server.removeListener("error", reject);
          resolve2({
            onConnected: () => {
              return connected;
            },
            close: () => {
              server.close();
            }
          });
        });
      });
    }
    function createServerPipeTransport(pipeName, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(pipeName);
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    function createClientSocketTransport(port, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve2, _reject) => {
        connectResolve = resolve2;
      });
      return new Promise((resolve2, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(port, "127.0.0.1", () => {
          server.removeListener("error", reject);
          const address = server.address();
          if (address === null || typeof address === "string") {
            reject(new Error(`Unexpected server address: ${address}`));
            return;
          }
          const boundPort = address.port;
          resolve2({
            port: () => boundPort,
            onConnected: () => {
              return connected;
            },
            close: () => {
              server.close();
            }
          });
        });
      });
    }
    function createServerSocketTransport(port, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(port, "127.0.0.1");
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    function isReadableStream(value) {
      const candidate = value;
      return candidate.read !== void 0 && candidate.addListener !== void 0;
    }
    function isWritableStream(value) {
      const candidate = value;
      return candidate.write !== void 0 && candidate.addListener !== void 0;
    }
    function createMessageConnection(input, output, logger, options2) {
      if (!logger) {
        logger = api_1.NullLogger;
      }
      const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
      const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
      if (api_1.ConnectionStrategy.is(options2)) {
        options2 = { connectionStrategy: options2 };
      }
      return (0, api_1.createMessageConnection)(reader, writer, logger, options2);
    }
  }
});

// node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main2 = __commonJS({
  "node_modules/.pnpm/vscode-languageserver-protocol@3.18.5/node_modules/vscode-languageserver-protocol/lib/node/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createProtocolConnection = createProtocolConnection;
    var node_1 = require_main();
    __exportStar(require_main(), exports);
    __exportStar(require_api2(), exports);
    function createProtocolConnection(input, output, logger, options2) {
      return (0, node_1.createMessageConnection)(input, output, logger, options2);
    }
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/api.js
var require_api3 = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/common/api.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProposedFeatures = exports.NotebookDocuments = exports.TextDocuments = exports.SemanticTokensBuilder = exports.WorkDoneProgressReporter = void 0;
    var semanticTokens_1 = require_semanticTokens();
    Object.defineProperty(exports, "SemanticTokensBuilder", { enumerable: true, get: function() {
      return semanticTokens_1.SemanticTokensBuilder;
    } });
    var progress_1 = require_progress();
    Object.defineProperty(exports, "WorkDoneProgressReporter", { enumerable: true, get: function() {
      return progress_1.WorkDoneProgressReporter;
    } });
    __exportStar(require_api2(), exports);
    var textDocuments_1 = require_textDocuments();
    Object.defineProperty(exports, "TextDocuments", { enumerable: true, get: function() {
      return textDocuments_1.TextDocuments;
    } });
    var notebook_1 = require_notebook();
    Object.defineProperty(exports, "NotebookDocuments", { enumerable: true, get: function() {
      return notebook_1.NotebookDocuments;
    } });
    __exportStar(require_server(), exports);
    var ProposedFeatures2;
    (function(ProposedFeatures3) {
      ProposedFeatures3.all = {
        __brand: "features"
      };
    })(ProposedFeatures2 || (exports.ProposedFeatures = ProposedFeatures2 = {}));
  }
});

// node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/node/main.js
var require_main3 = __commonJS({
  "node_modules/.pnpm/vscode-languageserver@11.0.0/node_modules/vscode-languageserver/lib/node/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    }) : (function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    }) : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o2) {
        ownKeys = Object.getOwnPropertyNames || function(o3) {
          var ar = [];
          for (var k in o3) if (Object.prototype.hasOwnProperty.call(o3, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o2);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i3 = 0; i3 < k.length; i3++) if (k[i3] !== "default") __createBinding(result, mod, k[i3]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Files = void 0;
    exports.createConnection = createConnection2;
    var node_util_1 = __require("node:util");
    var Is2 = __importStar(require_is());
    var server_1 = require_server();
    var fm = __importStar(require_files());
    var node_1 = require_main2();
    __exportStar(require_main2(), exports);
    __exportStar(require_api3(), exports);
    var Files;
    (function(Files2) {
      Files2.uriToFilePath = fm.uriToFilePath;
      Files2.resolveGlobalNodePath = fm.resolveGlobalNodePath;
      Files2.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
      Files2.resolve = fm.resolve;
      Files2.resolveModulePath = fm.resolveModulePath;
    })(Files || (exports.Files = Files = {}));
    var _protocolConnection;
    function endProtocolConnection() {
      if (_protocolConnection === void 0) {
        return;
      }
      try {
        _protocolConnection.end();
      } catch (_err) {
      }
    }
    var _shutdownReceived = false;
    var exitTimer = void 0;
    function setupExitTimer() {
      const argName = "--clientProcessId";
      function runTimer(value) {
        try {
          const processId = parseInt(value);
          if (!isNaN(processId)) {
            exitTimer = setInterval(() => {
              try {
                process.kill(processId, 0);
              } catch (ex) {
                endProtocolConnection();
                process.exit(_shutdownReceived ? 0 : 1);
              }
            }, 3e3);
          }
        } catch (e2) {
        }
      }
      for (let i3 = 2; i3 < process.argv.length; i3++) {
        const arg = process.argv[i3];
        if (arg === argName && i3 + 1 < process.argv.length) {
          runTimer(process.argv[i3 + 1]);
          return;
        } else {
          const args2 = arg.split("=");
          if (args2[0] === argName) {
            runTimer(args2[1]);
          }
        }
      }
    }
    setupExitTimer();
    var watchDog = {
      initialize: (params) => {
        const processId = params.processId;
        if (Is2.number(processId) && exitTimer === void 0) {
          setInterval(() => {
            try {
              process.kill(processId, 0);
            } catch (ex) {
              process.exit(_shutdownReceived ? 0 : 1);
            }
          }, 3e3);
        }
      },
      get shutdownReceived() {
        return _shutdownReceived;
      },
      set shutdownReceived(value) {
        _shutdownReceived = value;
      },
      exit: (code) => {
        endProtocolConnection();
        process.exit(code);
      }
    };
    function createConnection2(arg1, arg2, arg3, arg4) {
      let factories;
      let input;
      let output;
      let options2;
      if (arg1 !== void 0 && arg1.__brand === "features") {
        factories = arg1;
        arg1 = arg2;
        arg2 = arg3;
        arg3 = arg4;
      }
      if (node_1.ConnectionStrategy.is(arg1) || node_1.ConnectionOptions.is(arg1)) {
        options2 = arg1;
      } else {
        input = arg1;
        output = arg2;
        options2 = arg3;
      }
      return _createConnection(input, output, options2, factories);
    }
    function _createConnection(input, output, options2, factories) {
      let stdio = false;
      if (!input && !output && process.argv.length > 2) {
        let port = void 0;
        let pipeName = void 0;
        const argv = process.argv.slice(2);
        for (let i3 = 0; i3 < argv.length; i3++) {
          const arg = argv[i3];
          if (arg === "--node-ipc") {
            input = new node_1.IPCMessageReader(process);
            output = new node_1.IPCMessageWriter(process);
            break;
          } else if (arg === "--stdio") {
            stdio = true;
            input = process.stdin;
            output = process.stdout;
            break;
          } else if (arg === "--socket") {
            port = parseInt(argv[i3 + 1]);
            break;
          } else if (arg === "--pipe") {
            pipeName = argv[i3 + 1];
            break;
          } else {
            const args2 = arg.split("=");
            if (args2[0] === "--socket") {
              port = parseInt(args2[1]);
              break;
            } else if (args2[0] === "--pipe") {
              pipeName = args2[1];
              break;
            }
          }
        }
        if (port) {
          const transport = (0, node_1.createServerSocketTransport)(port);
          input = transport[0];
          output = transport[1];
        } else if (pipeName) {
          const transport = (0, node_1.createServerPipeTransport)(pipeName);
          input = transport[0];
          output = transport[1];
        }
      }
      const commandLineMessage = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
      if (!input) {
        throw new Error("Connection input stream is not set. " + commandLineMessage);
      }
      if (!output) {
        throw new Error("Connection output stream is not set. " + commandLineMessage);
      }
      if (Is2.func(input.read) && Is2.func(input.on)) {
        const inputStream = input;
        inputStream.on("end", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
        inputStream.on("close", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
      }
      const connectionFactory = (logger) => {
        const result = (0, node_1.createProtocolConnection)(input, output, logger, options2);
        if (stdio) {
          patchConsole(logger);
        }
        return result;
      };
      return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
    }
    function patchConsole(logger) {
      function serialize(args2) {
        return args2.map((arg) => typeof arg === "string" ? arg : (0, node_util_1.inspect)(arg)).join(" ");
      }
      const counters = /* @__PURE__ */ new Map();
      console.assert = function assert(assertion, ...args2) {
        if (assertion) {
          return;
        }
        if (args2.length === 0) {
          logger.error("Assertion failed");
        } else {
          const [message, ...rest] = args2;
          logger.error(`Assertion failed: ${message} ${serialize(rest)}`);
        }
      };
      console.count = function count(label = "default") {
        const message = String(label);
        let counter = counters.get(message) ?? 0;
        counter += 1;
        counters.set(message, counter);
        logger.log(`${message}: ${message}`);
      };
      console.countReset = function countReset(label) {
        if (label === void 0) {
          counters.clear();
        } else {
          counters.delete(String(label));
        }
      };
      console.debug = function debug(...args2) {
        logger.log(serialize(args2));
      };
      console.dir = function dir(arg, options2) {
        logger.log((0, node_util_1.inspect)(arg, options2));
      };
      console.log = function log(...args2) {
        logger.log(serialize(args2));
      };
      console.error = function error(...args2) {
        logger.error(serialize(args2));
      };
      console.trace = function trace(...args2) {
        const stack = new Error().stack.replace(/(.+\n){2}/, "");
        let message = "Trace";
        if (args2.length !== 0) {
          message += `: ${serialize(args2)}`;
        }
        logger.log(`${message}
${stack}`);
      };
      console.warn = function warn(...args2) {
        logger.warn(serialize(args2));
      };
      console.info = function info2(...args2) {
        logger.info(serialize(args2));
      };
    }
  }
});

// src/index.mts
var import_node = __toESM(require_main3(), 1);

// node_modules/.pnpm/vscode-languageserver-textdocument@1.0.16/node_modules/vscode-languageserver-textdocument/lib/esm/main.js
var FullTextDocument2 = class _FullTextDocument {
  constructor(uri, languageId, version, content) {
    this._uri = uri;
    this._languageId = languageId;
    this._version = version;
    this._content = content;
    this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(range) {
    if (range) {
      const start2 = this.offsetAt(range.start);
      const end = this.offsetAt(range.end);
      return this._content.substring(start2, end);
    }
    return this._content;
  }
  update(changes, version) {
    for (const change of changes) {
      if (_FullTextDocument.isIncremental(change)) {
        const range = getWellformedRange(change.range);
        const startOffset = this.offsetAt(range.start);
        const endOffset = this.offsetAt(range.end);
        this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
        const insertedEndOffset = startOffset + change.text.length;
        const crlfAtStart = this._content.charCodeAt(startOffset - 1) === 13 && this._content.charCodeAt(startOffset) === 10;
        const crlfAtEnd = this._content.charCodeAt(insertedEndOffset - 1) === 13 && this._content.charCodeAt(insertedEndOffset) === 10;
        if (crlfAtStart || crlfAtEnd) {
          this._lineOffsets = void 0;
          continue;
        }
        const startLine = Math.max(range.start.line, 0);
        const endLine = Math.max(range.end.line, 0);
        let lineOffsets = this._lineOffsets;
        const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
        if (endLine - startLine === addedLineOffsets.length) {
          for (let i3 = 0, len = addedLineOffsets.length; i3 < len; i3++) {
            lineOffsets[i3 + startLine + 1] = addedLineOffsets[i3];
          }
        } else {
          if (addedLineOffsets.length < 1e4) {
            lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
          } else {
            this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
          }
        }
        const diff = change.text.length - (endOffset - startOffset);
        if (diff !== 0) {
          for (let i3 = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i3 < len; i3++) {
            lineOffsets[i3] = lineOffsets[i3] + diff;
          }
        }
      } else if (_FullTextDocument.isFull(change)) {
        this._content = change.text;
        this._lineOffsets = void 0;
      } else {
        throw new Error("Unknown change event received");
      }
    }
    this._version = version;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      this._lineOffsets = computeLineOffsets(this._content, true);
    }
    return this._lineOffsets;
  }
  positionAt(offset) {
    offset = Math.max(Math.min(offset, this._content.length), 0);
    const lineOffsets = this.getLineOffsets();
    let low = 0, high = lineOffsets.length;
    if (high === 0) {
      return { line: 0, character: offset };
    }
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (lineOffsets[mid] > offset) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    const line = low - 1;
    offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
    return { line, character: offset - lineOffsets[line] };
  }
  offsetAt(position) {
    const lineOffsets = this.getLineOffsets();
    if (position.line >= lineOffsets.length) {
      return this._content.length;
    } else if (position.line < 0) {
      return 0;
    }
    const lineOffset = lineOffsets[position.line];
    if (position.character <= 0) {
      return lineOffset;
    }
    const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
    const offset = Math.min(lineOffset + position.character, nextLineOffset);
    return this.ensureBeforeEOL(offset, lineOffset);
  }
  getLineRange(line) {
    const lineOffsets = this.getLineOffsets();
    if (line >= lineOffsets.length) {
      const lastLine = lineOffsets.length - 1;
      return { start: { line: lastLine, character: 0 }, end: { line: lastLine, character: this._content.length - lineOffsets[lastLine] } };
    } else if (line < 0) {
      return { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } };
    }
    const startOffset = lineOffsets[line];
    const nextLineOffset = line + 1 < lineOffsets.length ? lineOffsets[line + 1] : this._content.length;
    const endOffset = this.ensureBeforeEOL(nextLineOffset, startOffset);
    return { start: { line, character: 0 }, end: { line, character: endOffset - startOffset } };
  }
  getEOLCharacters(line) {
    const lineOffsets = this.getLineOffsets();
    if (line >= lineOffsets.length) {
      return "";
    } else if (line < 0) {
      return "";
    }
    const nextLineOffset = line + 1 < lineOffsets.length ? lineOffsets[line + 1] : this._content.length;
    const eolOffset = this.ensureBeforeEOL(nextLineOffset, lineOffsets[line]);
    return this._content.substring(eolOffset, nextLineOffset);
  }
  ensureBeforeEOL(offset, lineOffset) {
    while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
      offset--;
    }
    return offset;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
  }
  static isFull(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
  }
};
var TextDocument2;
(function(TextDocument3) {
  function create(uri, languageId, version, content) {
    return new FullTextDocument2(uri, languageId, version, content);
  }
  TextDocument3.create = create;
  function update(document, changes, version) {
    if (document instanceof FullTextDocument2) {
      document.update(changes, version);
      return document;
    } else {
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
  }
  TextDocument3.update = update;
  function applyEdits(document, edits) {
    const text = document.getText();
    const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a2, b2) => {
      const diff = a2.range.start.line - b2.range.start.line;
      if (diff === 0) {
        return a2.range.start.character - b2.range.start.character;
      }
      return diff;
    });
    let lastModifiedOffset = 0;
    const spans = [];
    for (const e2 of sortedEdits) {
      const startOffset = document.offsetAt(e2.range.start);
      if (startOffset < lastModifiedOffset) {
        throw new Error("Overlapping edit");
      } else if (startOffset > lastModifiedOffset) {
        spans.push(text.substring(lastModifiedOffset, startOffset));
      }
      if (e2.newText.length) {
        spans.push(e2.newText);
      }
      lastModifiedOffset = document.offsetAt(e2.range.end);
    }
    spans.push(text.substr(lastModifiedOffset));
    return spans.join("");
  }
  TextDocument3.applyEdits = applyEdits;
})(TextDocument2 || (TextDocument2 = {}));
function mergeSort(data, compare) {
  if (data.length <= 1) {
    return data;
  }
  const p2 = data.length / 2 | 0;
  const left = data.slice(0, p2);
  const right = data.slice(p2);
  mergeSort(left, compare);
  mergeSort(right, compare);
  let leftIdx = 0;
  let rightIdx = 0;
  let i3 = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    const ret = compare(left[leftIdx], right[rightIdx]);
    if (ret <= 0) {
      data[i3++] = left[leftIdx++];
    } else {
      data[i3++] = right[rightIdx++];
    }
  }
  while (leftIdx < left.length) {
    data[i3++] = left[leftIdx++];
  }
  while (rightIdx < right.length) {
    data[i3++] = right[rightIdx++];
  }
  return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
  const result = isAtLineStart ? [textOffset] : [];
  for (let i3 = 0; i3 < text.length; i3++) {
    const ch = text.charCodeAt(i3);
    if (isEOL(ch)) {
      if (ch === 13 && i3 + 1 < text.length && text.charCodeAt(i3 + 1) === 10) {
        i3++;
      }
      result.push(textOffset + i3 + 1);
    }
  }
  return result;
}
function isEOL(char) {
  return char === 13 || char === 10;
}
function getWellformedRange(range) {
  const start2 = range.start;
  const end = range.end;
  if (start2.line > end.line || start2.line === end.line && start2.character > end.character) {
    return { start: end, end: start2 };
  }
  return range;
}
function getWellformedEdit(textEdit) {
  const range = getWellformedRange(textEdit.range);
  if (range !== textEdit.range) {
    return { newText: textEdit.newText, range };
  }
  return textEdit;
}

// node_modules/.pnpm/vscode-uri@3.2.0/node_modules/vscode-uri/lib/esm/index.mjs
var t = { 975(t2) {
  function e2(t3) {
    if ("string" != typeof t3) throw new TypeError("Path must be a string. Received " + JSON.stringify(t3));
  }
  function r2(t3, e3) {
    for (var r3, n3 = "", i3 = 0, o2 = -1, h2 = 0, s2 = 0; s2 <= t3.length; ++s2) {
      if (s2 < t3.length) r3 = t3.charCodeAt(s2);
      else {
        if (47 === r3) break;
        r3 = 47;
      }
      if (47 === r3) {
        if (o2 === s2 - 1 || 1 === h2) ;
        else if (o2 !== s2 - 1 && 2 === h2) {
          if (n3.length < 2 || 2 !== i3 || 46 !== n3.charCodeAt(n3.length - 1) || 46 !== n3.charCodeAt(n3.length - 2)) {
            if (n3.length > 2) {
              var a2 = n3.lastIndexOf("/");
              if (a2 !== n3.length - 1) {
                -1 === a2 ? (n3 = "", i3 = 0) : i3 = (n3 = n3.slice(0, a2)).length - 1 - n3.lastIndexOf("/"), o2 = s2, h2 = 0;
                continue;
              }
            } else if (2 === n3.length || 1 === n3.length) {
              n3 = "", i3 = 0, o2 = s2, h2 = 0;
              continue;
            }
          }
          e3 && (n3.length > 0 ? n3 += "/.." : n3 = "..", i3 = 2);
        } else n3.length > 0 ? n3 += "/" + t3.slice(o2 + 1, s2) : n3 = t3.slice(o2 + 1, s2), i3 = s2 - o2 - 1;
        o2 = s2, h2 = 0;
      } else 46 === r3 && -1 !== h2 ? ++h2 : h2 = -1;
    }
    return n3;
  }
  var n2 = { resolve: function() {
    for (var t3, n3 = "", i3 = false, o2 = arguments.length - 1; o2 >= -1 && !i3; o2--) {
      var h2;
      o2 >= 0 ? h2 = arguments[o2] : (void 0 === t3 && (t3 = process.cwd()), h2 = t3), e2(h2), 0 !== h2.length && (n3 = h2 + "/" + n3, i3 = 47 === h2.charCodeAt(0));
    }
    return n3 = r2(n3, !i3), i3 ? n3.length > 0 ? "/" + n3 : "/" : n3.length > 0 ? n3 : ".";
  }, normalize: function(t3) {
    if (e2(t3), 0 === t3.length) return ".";
    var n3 = 47 === t3.charCodeAt(0), i3 = 47 === t3.charCodeAt(t3.length - 1);
    return 0 !== (t3 = r2(t3, !n3)).length || n3 || (t3 = "."), t3.length > 0 && i3 && (t3 += "/"), n3 ? "/" + t3 : t3;
  }, isAbsolute: function(t3) {
    return e2(t3), t3.length > 0 && 47 === t3.charCodeAt(0);
  }, join: function() {
    if (0 === arguments.length) return ".";
    for (var t3, r3 = 0; r3 < arguments.length; ++r3) {
      var i3 = arguments[r3];
      e2(i3), i3.length > 0 && (void 0 === t3 ? t3 = i3 : t3 += "/" + i3);
    }
    return void 0 === t3 ? "." : n2.normalize(t3);
  }, relative: function(t3, r3) {
    if (e2(t3), e2(r3), t3 === r3) return "";
    if ((t3 = n2.resolve(t3)) === (r3 = n2.resolve(r3))) return "";
    for (var i3 = 1; i3 < t3.length && 47 === t3.charCodeAt(i3); ++i3) ;
    for (var o2 = t3.length, h2 = o2 - i3, s2 = 1; s2 < r3.length && 47 === r3.charCodeAt(s2); ++s2) ;
    for (var a2 = r3.length - s2, c2 = h2 < a2 ? h2 : a2, f2 = -1, u2 = 0; u2 <= c2; ++u2) {
      if (u2 === c2) {
        if (a2 > c2) {
          if (47 === r3.charCodeAt(s2 + u2)) return r3.slice(s2 + u2 + 1);
          if (0 === u2) return r3.slice(s2 + u2);
        } else h2 > c2 && (47 === t3.charCodeAt(i3 + u2) ? f2 = u2 : 0 === u2 && (f2 = 0));
        break;
      }
      var l2 = t3.charCodeAt(i3 + u2);
      if (l2 !== r3.charCodeAt(s2 + u2)) break;
      47 === l2 && (f2 = u2);
    }
    var g2 = "";
    for (u2 = i3 + f2 + 1; u2 <= o2; ++u2) u2 !== o2 && 47 !== t3.charCodeAt(u2) || (0 === g2.length ? g2 += ".." : g2 += "/..");
    return g2.length > 0 ? g2 + r3.slice(s2 + f2) : (s2 += f2, 47 === r3.charCodeAt(s2) && ++s2, r3.slice(s2));
  }, _makeLong: function(t3) {
    return t3;
  }, dirname: function(t3) {
    if (e2(t3), 0 === t3.length) return ".";
    for (var r3 = t3.charCodeAt(0), n3 = 47 === r3, i3 = -1, o2 = true, h2 = t3.length - 1; h2 >= 1; --h2) if (47 === (r3 = t3.charCodeAt(h2))) {
      if (!o2) {
        i3 = h2;
        break;
      }
    } else o2 = false;
    return -1 === i3 ? n3 ? "/" : "." : n3 && 1 === i3 ? "//" : t3.slice(0, i3);
  }, basename: function(t3, r3) {
    if (void 0 !== r3 && "string" != typeof r3) throw new TypeError('"ext" argument must be a string');
    e2(t3);
    var n3, i3 = 0, o2 = -1, h2 = true;
    if (void 0 !== r3 && r3.length > 0 && r3.length <= t3.length) {
      if (r3.length === t3.length && r3 === t3) return "";
      var s2 = r3.length - 1, a2 = -1;
      for (n3 = t3.length - 1; n3 >= 0; --n3) {
        var c2 = t3.charCodeAt(n3);
        if (47 === c2) {
          if (!h2) {
            i3 = n3 + 1;
            break;
          }
        } else -1 === a2 && (h2 = false, a2 = n3 + 1), s2 >= 0 && (c2 === r3.charCodeAt(s2) ? -1 === --s2 && (o2 = n3) : (s2 = -1, o2 = a2));
      }
      return i3 === o2 ? o2 = a2 : -1 === o2 && (o2 = t3.length), t3.slice(i3, o2);
    }
    for (n3 = t3.length - 1; n3 >= 0; --n3) if (47 === t3.charCodeAt(n3)) {
      if (!h2) {
        i3 = n3 + 1;
        break;
      }
    } else -1 === o2 && (h2 = false, o2 = n3 + 1);
    return -1 === o2 ? "" : t3.slice(i3, o2);
  }, extname: function(t3) {
    e2(t3);
    for (var r3 = -1, n3 = 0, i3 = -1, o2 = true, h2 = 0, s2 = t3.length - 1; s2 >= 0; --s2) {
      var a2 = t3.charCodeAt(s2);
      if (47 !== a2) -1 === i3 && (o2 = false, i3 = s2 + 1), 46 === a2 ? -1 === r3 ? r3 = s2 : 1 !== h2 && (h2 = 1) : -1 !== r3 && (h2 = -1);
      else if (!o2) {
        n3 = s2 + 1;
        break;
      }
    }
    return -1 === r3 || -1 === i3 || 0 === h2 || 1 === h2 && r3 === i3 - 1 && r3 === n3 + 1 ? "" : t3.slice(r3, i3);
  }, format: function(t3) {
    if (null === t3 || "object" != typeof t3) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof t3);
    return (function(t4, e3) {
      var r3 = e3.dir || e3.root, n3 = e3.base || (e3.name || "") + (e3.ext || "");
      return r3 ? r3 === e3.root ? r3 + n3 : r3 + "/" + n3 : n3;
    })(0, t3);
  }, parse: function(t3) {
    e2(t3);
    var r3 = { root: "", dir: "", base: "", ext: "", name: "" };
    if (0 === t3.length) return r3;
    var n3, i3 = t3.charCodeAt(0), o2 = 47 === i3;
    o2 ? (r3.root = "/", n3 = 1) : n3 = 0;
    for (var h2 = -1, s2 = 0, a2 = -1, c2 = true, f2 = t3.length - 1, u2 = 0; f2 >= n3; --f2) if (47 !== (i3 = t3.charCodeAt(f2))) -1 === a2 && (c2 = false, a2 = f2 + 1), 46 === i3 ? -1 === h2 ? h2 = f2 : 1 !== u2 && (u2 = 1) : -1 !== h2 && (u2 = -1);
    else if (!c2) {
      s2 = f2 + 1;
      break;
    }
    return -1 === h2 || -1 === a2 || 0 === u2 || 1 === u2 && h2 === a2 - 1 && h2 === s2 + 1 ? -1 !== a2 && (r3.base = r3.name = 0 === s2 && o2 ? t3.slice(1, a2) : t3.slice(s2, a2)) : (0 === s2 && o2 ? (r3.name = t3.slice(1, h2), r3.base = t3.slice(1, a2)) : (r3.name = t3.slice(s2, h2), r3.base = t3.slice(s2, a2)), r3.ext = t3.slice(h2, a2)), s2 > 0 ? r3.dir = t3.slice(0, s2 - 1) : o2 && (r3.dir = "/"), r3;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  n2.posix = n2, t2.exports = n2;
} };
var e = {};
function r(n2) {
  var i3 = e[n2];
  if (void 0 !== i3) return i3.exports;
  var o2 = e[n2] = { exports: {} };
  return t[n2](o2, o2.exports, r), o2.exports;
}
var n;
if (r.d = (t2, e2) => {
  for (var n2 in e2) r.o(e2, n2) && !r.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
}, r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), "object" == typeof process) n = "win32" === process.platform;
else if ("object" == typeof navigator) {
  let t2 = navigator.userAgent;
  n = t2.indexOf("Windows") >= 0;
}
var i2 = /^\w[\w\d+.-]*$/;
var o = /^\//;
var h = /^\/\//;
function s(t2, e2) {
  if (!t2.scheme && e2) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t2.authority}", path: "${t2.path}", query: "${t2.query}", fragment: "${t2.fragment}"}`);
  if (t2.scheme && !i2.test(t2.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (t2.path) {
    if (t2.authority) {
      if (!o.test(t2.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (h.test(t2.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
var a = "";
var c = "/";
var f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
var u = class _u {
  static isUri(t2) {
    return t2 instanceof _u || !!t2 && "string" == typeof t2.authority && "string" == typeof t2.fragment && "string" == typeof t2.path && "string" == typeof t2.query && "string" == typeof t2.scheme && "string" == typeof t2.fsPath && "function" == typeof t2.with && "function" == typeof t2.toString;
  }
  scheme;
  authority;
  path;
  query;
  fragment;
  constructor(t2, e2, r2, n2, i3, o2 = false) {
    "object" == typeof t2 ? (this.scheme = t2.scheme || a, this.authority = t2.authority || a, this.path = t2.path || a, this.query = t2.query || a, this.fragment = t2.fragment || a) : (this.scheme = /* @__PURE__ */ (function(t3, e3) {
      return t3 || e3 ? t3 : "file";
    })(t2, o2), this.authority = e2 || a, this.path = (function(t3, e3) {
      switch (t3) {
        case "https":
        case "http":
        case "file":
          e3 ? e3[0] !== c && (e3 = c + e3) : e3 = c;
      }
      return e3;
    })(this.scheme, r2 || a), this.query = n2 || a, this.fragment = i3 || a, s(this, o2));
  }
  get fsPath() {
    return y(this, false);
  }
  with(t2) {
    if (!t2) return this;
    let { scheme: e2, authority: r2, path: n2, query: i3, fragment: o2 } = t2;
    return void 0 === e2 ? e2 = this.scheme : null === e2 && (e2 = a), void 0 === r2 ? r2 = this.authority : null === r2 && (r2 = a), void 0 === n2 ? n2 = this.path : null === n2 && (n2 = a), void 0 === i3 ? i3 = this.query : null === i3 && (i3 = a), void 0 === o2 ? o2 = this.fragment : null === o2 && (o2 = a), e2 === this.scheme && r2 === this.authority && n2 === this.path && i3 === this.query && o2 === this.fragment ? this : new g(e2, r2, n2, i3, o2);
  }
  static parse(t2, e2 = false) {
    const r2 = f.exec(t2);
    return r2 ? new g(r2[2] || a, A(r2[4] || a), A(r2[5] || a), A(r2[7] || a), A(r2[9] || a), e2) : new g(a, a, a, a, a);
  }
  static file(t2) {
    let e2 = a;
    if (n && (t2 = t2.replace(/\\/g, c)), t2[0] === c && t2[1] === c) {
      const r2 = t2.indexOf(c, 2);
      -1 === r2 ? (e2 = t2.substring(2), t2 = c) : (e2 = t2.substring(2, r2), t2 = t2.substring(r2) || c);
    }
    return new g("file", e2, t2, a, a);
  }
  static from(t2) {
    const e2 = new g(t2.scheme, t2.authority, t2.path, t2.query, t2.fragment);
    return s(e2, true), e2;
  }
  toString(t2 = false) {
    return v(this, t2);
  }
  toJSON() {
    return this;
  }
  static revive(t2) {
    if (t2) {
      if (t2 instanceof _u) return t2;
      {
        const e2 = new g(t2);
        return e2._formatted = t2.external, e2._fsPath = t2._sep === l ? t2.fsPath : null, e2;
      }
    }
    return t2;
  }
};
var l = n ? 1 : void 0;
var g = class extends u {
  _formatted = null;
  _fsPath = null;
  get fsPath() {
    return this._fsPath || (this._fsPath = y(this, false)), this._fsPath;
  }
  toString(t2 = false) {
    return t2 ? v(this, true) : (this._formatted || (this._formatted = v(this, false)), this._formatted);
  }
  toJSON() {
    const t2 = { $mid: 1 };
    return this._fsPath && (t2.fsPath = this._fsPath, t2._sep = l), this._formatted && (t2.external = this._formatted), this.path && (t2.path = this.path), this.scheme && (t2.scheme = this.scheme), this.authority && (t2.authority = this.authority), this.query && (t2.query = this.query), this.fragment && (t2.fragment = this.fragment), t2;
  }
};
var p = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function d(t2, e2, r2) {
  let n2, i3 = -1;
  for (let o2 = 0; o2 < t2.length; o2++) {
    const h2 = t2.charCodeAt(o2);
    if (h2 >= 97 && h2 <= 122 || h2 >= 65 && h2 <= 90 || h2 >= 48 && h2 <= 57 || 45 === h2 || 46 === h2 || 95 === h2 || 126 === h2 || e2 && 47 === h2 || r2 && 91 === h2 || r2 && 93 === h2 || r2 && 58 === h2) -1 !== i3 && (n2 += encodeURIComponent(t2.substring(i3, o2)), i3 = -1), void 0 !== n2 && (n2 += t2.charAt(o2));
    else {
      void 0 === n2 && (n2 = t2.substr(0, o2));
      const e3 = p[h2];
      void 0 !== e3 ? (-1 !== i3 && (n2 += encodeURIComponent(t2.substring(i3, o2)), i3 = -1), n2 += e3) : -1 === i3 && (i3 = o2);
    }
  }
  return -1 !== i3 && (n2 += encodeURIComponent(t2.substring(i3))), void 0 !== n2 ? n2 : t2;
}
function m(t2) {
  let e2;
  for (let r2 = 0; r2 < t2.length; r2++) {
    const n2 = t2.charCodeAt(r2);
    35 === n2 || 63 === n2 ? (void 0 === e2 && (e2 = t2.substr(0, r2)), e2 += p[n2]) : void 0 !== e2 && (e2 += t2[r2]);
  }
  return void 0 !== e2 ? e2 : t2;
}
function y(t2, e2) {
  let r2;
  return r2 = t2.authority && t2.path.length > 1 && "file" === t2.scheme ? `//${t2.authority}${t2.path}` : 47 === t2.path.charCodeAt(0) && (t2.path.charCodeAt(1) >= 65 && t2.path.charCodeAt(1) <= 90 || t2.path.charCodeAt(1) >= 97 && t2.path.charCodeAt(1) <= 122) && 58 === t2.path.charCodeAt(2) ? e2 ? t2.path.substr(1) : t2.path[1].toLowerCase() + t2.path.substr(2) : t2.path, n && (r2 = r2.replace(/\//g, "\\")), r2;
}
function v(t2, e2) {
  const r2 = e2 ? m : d;
  let n2 = "", { scheme: i3, authority: o2, path: h2, query: s2, fragment: a2 } = t2;
  if (i3 && (n2 += i3, n2 += ":"), (o2 || "file" === i3) && (n2 += c, n2 += c), o2) {
    let t3 = o2.indexOf("@");
    if (-1 !== t3) {
      const e3 = o2.substr(0, t3);
      o2 = o2.substr(t3 + 1), t3 = e3.lastIndexOf(":"), -1 === t3 ? n2 += r2(e3, false, false) : (n2 += r2(e3.substr(0, t3), false, false), n2 += ":", n2 += r2(e3.substr(t3 + 1), false, true)), n2 += "@";
    }
    o2 = o2.toLowerCase(), t3 = o2.lastIndexOf(":"), -1 === t3 ? n2 += r2(o2, false, true) : (n2 += r2(o2.substr(0, t3), false, true), n2 += o2.substr(t3));
  }
  if (h2) {
    if (h2.length >= 3 && 47 === h2.charCodeAt(0) && 58 === h2.charCodeAt(2)) {
      const t3 = h2.charCodeAt(1);
      t3 >= 65 && t3 <= 90 && (h2 = `/${String.fromCharCode(t3 + 32)}:${h2.substr(3)}`);
    } else if (h2.length >= 2 && 58 === h2.charCodeAt(1)) {
      const t3 = h2.charCodeAt(0);
      t3 >= 65 && t3 <= 90 && (h2 = `${String.fromCharCode(t3 + 32)}:${h2.substr(2)}`);
    }
    n2 += r2(h2, true, false);
  }
  return s2 && (n2 += "?", n2 += r2(s2, false, false)), a2 && (n2 += "#", n2 += e2 ? a2 : d(a2, false, false)), n2;
}
function b(t2) {
  try {
    return decodeURIComponent(t2);
  } catch {
    return t2.length > 3 ? t2.substr(0, 3) + b(t2.substr(3)) : t2;
  }
}
var C = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function A(t2) {
  return t2.match(C) ? t2.replace(C, (t3) => b(t3)) : t2;
}
var w = r(975);
var x = w.posix || w;
var P = "/";
var _;
!(function(t2) {
  t2.joinPath = function(t3, ...e2) {
    return t3.with({ path: x.join(t3.path, ...e2) });
  }, t2.resolvePath = function(t3, ...e2) {
    let r2 = t3.path, n2 = false;
    r2[0] !== P && (r2 = P + r2, n2 = true);
    let i3 = x.resolve(r2, ...e2);
    return n2 && i3[0] === P && !t3.authority && (i3 = i3.substring(1)), t3.with({ path: i3 });
  }, t2.dirname = function(t3) {
    if (0 === t3.path.length || t3.path === P) return t3;
    let e2 = x.dirname(t3.path);
    return 1 === e2.length && 46 === e2.charCodeAt(0) && (e2 = ""), t3.with({ path: e2 });
  }, t2.basename = function(t3) {
    return x.basename(t3.path);
  }, t2.extname = function(t3) {
    return x.extname(t3.path);
  };
})(_ || (_ = {}));

// src/index.mts
import * as path3 from "node:path";

// src/project.mts
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import * as path2 from "node:path";

// node_modules/.pnpm/web-tree-sitter@0.27.2/node_modules/web-tree-sitter/web-tree-sitter.js
var __defProp2 = Object.defineProperty;
var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
var Edit = class {
  static {
    __name(this, "Edit");
  }
  /** The start position of the change. */
  startPosition;
  /** The end position of the change before the edit. */
  oldEndPosition;
  /** The end position of the change after the edit. */
  newEndPosition;
  /** The start index of the change. */
  startIndex;
  /** The end index of the change before the edit. */
  oldEndIndex;
  /** The end index of the change after the edit. */
  newEndIndex;
  constructor({
    startIndex,
    oldEndIndex,
    newEndIndex,
    startPosition,
    oldEndPosition,
    newEndPosition
  }) {
    this.startIndex = startIndex >>> 0;
    this.oldEndIndex = oldEndIndex >>> 0;
    this.newEndIndex = newEndIndex >>> 0;
    this.startPosition = startPosition;
    this.oldEndPosition = oldEndPosition;
    this.newEndPosition = newEndPosition;
  }
  /**
   * Edit a point and index to keep it in-sync with source code that has been edited.
   *
   * This function updates a single point's byte offset and row/column position
   * based on an edit operation. This is useful for editing points without
   * requiring a tree or node instance.
   */
  editPoint(point, index2) {
    let newIndex = index2;
    const newPoint = { ...point };
    if (index2 >= this.oldEndIndex) {
      newIndex = this.newEndIndex + (index2 - this.oldEndIndex);
      const originalRow = point.row;
      newPoint.row = this.newEndPosition.row + (point.row - this.oldEndPosition.row);
      newPoint.column = originalRow === this.oldEndPosition.row ? this.newEndPosition.column + (point.column - this.oldEndPosition.column) : point.column;
    } else if (index2 > this.startIndex) {
      newIndex = this.newEndIndex;
      newPoint.row = this.newEndPosition.row;
      newPoint.column = this.newEndPosition.column;
    }
    return { point: newPoint, index: newIndex };
  }
  /**
   * Edit a range to keep it in-sync with source code that has been edited.
   *
   * This function updates a range's start and end positions based on an edit
   * operation. This is useful for editing ranges without requiring a tree
   * or node instance.
   */
  editRange(range) {
    const newRange = {
      startIndex: range.startIndex,
      startPosition: { ...range.startPosition },
      endIndex: range.endIndex,
      endPosition: { ...range.endPosition }
    };
    if (range.endIndex >= this.oldEndIndex) {
      if (range.endIndex !== Number.MAX_SAFE_INTEGER) {
        newRange.endIndex = this.newEndIndex + (range.endIndex - this.oldEndIndex);
        newRange.endPosition = {
          row: this.newEndPosition.row + (range.endPosition.row - this.oldEndPosition.row),
          column: range.endPosition.row === this.oldEndPosition.row ? this.newEndPosition.column + (range.endPosition.column - this.oldEndPosition.column) : range.endPosition.column
        };
        if (newRange.endIndex < this.newEndIndex) {
          newRange.endIndex = Number.MAX_SAFE_INTEGER;
          newRange.endPosition = { row: Number.MAX_SAFE_INTEGER, column: Number.MAX_SAFE_INTEGER };
        }
      }
    } else if (range.endIndex > this.startIndex) {
      newRange.endIndex = this.startIndex;
      newRange.endPosition = { ...this.startPosition };
    }
    if (range.startIndex >= this.oldEndIndex) {
      newRange.startIndex = this.newEndIndex + (range.startIndex - this.oldEndIndex);
      newRange.startPosition = {
        row: this.newEndPosition.row + (range.startPosition.row - this.oldEndPosition.row),
        column: range.startPosition.row === this.oldEndPosition.row ? this.newEndPosition.column + (range.startPosition.column - this.oldEndPosition.column) : range.startPosition.column
      };
      if (newRange.startIndex < this.newEndIndex) {
        newRange.startIndex = Number.MAX_SAFE_INTEGER;
        newRange.startPosition = { row: Number.MAX_SAFE_INTEGER, column: Number.MAX_SAFE_INTEGER };
      }
    } else if (range.startIndex > this.startIndex) {
      newRange.startIndex = this.startIndex;
      newRange.startPosition = { ...this.startPosition };
    }
    return newRange;
  }
};
var SIZE_OF_SHORT = 2;
var SIZE_OF_INT = 4;
var SIZE_OF_CURSOR = 4 * SIZE_OF_INT;
var SIZE_OF_NODE = 5 * SIZE_OF_INT;
var SIZE_OF_POINT = 2 * SIZE_OF_INT;
var SIZE_OF_RANGE = 2 * SIZE_OF_INT + 2 * SIZE_OF_POINT;
var ZERO_POINT = { row: 0, column: 0 };
var INTERNAL = /* @__PURE__ */ Symbol("INTERNAL");
function assertInternal(x2) {
  if (x2 !== INTERNAL) throw new Error("Illegal constructor");
}
__name(assertInternal, "assertInternal");
function isPoint(point) {
  return !!point && typeof point.row === "number" && typeof point.column === "number";
}
__name(isPoint, "isPoint");
function setModule(module2) {
  C2 = module2;
}
__name(setModule, "setModule");
var C2;
function newFinalizer(handler) {
  try {
    return new FinalizationRegistry(handler);
  } catch (e2) {
    console.error("Unsupported FinalizationRegistry:", e2);
    return;
  }
}
__name(newFinalizer, "newFinalizer");
var finalizer = newFinalizer((address) => {
  C2._ts_lookahead_iterator_delete(address);
});
var LookaheadIterator = class {
  static {
    __name(this, "LookaheadIterator");
  }
  /** @internal */
  [0] = 0;
  // Internal handle for Wasm
  /** @internal */
  language;
  /** @internal */
  positioned = false;
  /** @internal */
  constructor(internal, address, language) {
    assertInternal(internal);
    this[0] = address;
    this.language = language;
    finalizer?.register(this, address, this);
  }
  /**
   * Get the current symbol of the lookahead iterator.
   *
   * Returns `null` if the iterator is not positioned on a symbol:
   *
   * - Before the first iteration step
   * - After the iterator is exhausted
   * - After a {@link reset} or {@link resetState} call
   */
  get currentTypeId() {
    return this.positioned ? C2._ts_lookahead_iterator_current_symbol(this[0]) : null;
  }
  /**
   * Get the current symbol name of the lookahead iterator.
   *
   * Returns `null` if the iterator is not positioned on a symbol.
   */
  get currentType() {
    const id = this.currentTypeId;
    if (id === null) return null;
    return this.language.types[id] ?? C2.UTF8ToString(C2._ts_language_symbol_name(this.language[0], id));
  }
  /** Delete the lookahead iterator, freeing its resources. */
  delete() {
    finalizer?.unregister(this);
    C2._ts_lookahead_iterator_delete(this[0]);
    this[0] = 0;
  }
  /**
   * Reset the lookahead iterator.
   *
   * This returns `true` if the language was set successfully and `false`
   * otherwise.
   */
  reset(language, stateId) {
    if (C2._ts_lookahead_iterator_reset(this[0], language[0], stateId)) {
      this.language = language;
      this.positioned = false;
      return true;
    }
    return false;
  }
  /**
   * Reset the lookahead iterator to another state.
   *
   * This returns `true` if the iterator was reset to the given state and
   * `false` otherwise.
   */
  resetState(stateId) {
    if (!C2._ts_lookahead_iterator_reset_state(this[0], stateId)) return false;
    this.positioned = false;
    return true;
  }
  /**
   * Returns an iterator that iterates over the symbols of the lookahead iterator.
   *
   * The iterator will yield the current symbol name as a string for each step
   * until there are no more symbols to iterate over.
   */
  [Symbol.iterator]() {
    return {
      next: /* @__PURE__ */ __name(() => {
        this.positioned = Boolean(C2._ts_lookahead_iterator_next(this[0]));
        const value = this.currentType;
        return value === null ? { done: true, value: "" } : { done: false, value };
      }, "next")
    };
  }
};
function getText(tree, startIndex, endIndex, startPosition) {
  const length = endIndex - startIndex;
  let result = tree.textCallback(startIndex, startPosition);
  if (result) {
    startIndex += result.length;
    while (startIndex < endIndex) {
      const string = tree.textCallback(startIndex, startPosition);
      if (string && string.length > 0) {
        startIndex += string.length;
        result += string;
      } else {
        break;
      }
    }
    if (startIndex > endIndex) {
      result = result.slice(0, length);
    }
  }
  return result ?? "";
}
__name(getText, "getText");
var finalizer2 = newFinalizer((address) => {
  C2._ts_tree_delete(address);
});
var Tree = class _Tree {
  static {
    __name(this, "Tree");
  }
  /** @internal */
  [0] = 0;
  // Internal handle for Wasm
  /** @internal */
  textCallback;
  /** The language that was used to parse the syntax tree. */
  language;
  /** @internal */
  constructor(internal, address, language, textCallback) {
    assertInternal(internal);
    this[0] = address;
    this.language = language;
    this.textCallback = textCallback;
    finalizer2?.register(this, address, this);
  }
  /** Create a shallow copy of the syntax tree. This is very fast. */
  copy() {
    const address = C2._ts_tree_copy(this[0]);
    return new _Tree(INTERNAL, address, this.language, this.textCallback);
  }
  /** Delete the syntax tree, freeing its resources. */
  delete() {
    finalizer2?.unregister(this);
    C2._ts_tree_delete(this[0]);
    this[0] = 0;
  }
  /** Get the root node of the syntax tree. */
  get rootNode() {
    C2._ts_tree_root_node_wasm(this[0]);
    return unmarshalNode(this);
  }
  /**
   * Get the root node of the syntax tree, but with its position shifted
   * forward by the given offset.
   */
  rootNodeWithOffset(offsetBytes, offsetExtent) {
    const address = TRANSFER_BUFFER + SIZE_OF_NODE;
    C2.setValue(address, offsetBytes, "i32");
    marshalPoint(address + SIZE_OF_INT, offsetExtent);
    C2._ts_tree_root_node_with_offset_wasm(this[0]);
    return unmarshalNode(this);
  }
  /**
   * Edit the syntax tree to keep it in sync with source code that has been
   * edited.
   *
   * You must describe the edit both in terms of byte offsets and in terms of
   * row/column coordinates.
   */
  edit(edit) {
    marshalEdit(edit);
    C2._ts_tree_edit_wasm(this[0]);
  }
  /** Create a new {@link TreeCursor} starting from the root of the tree. */
  walk() {
    return this.rootNode.walk();
  }
  /**
   * Compare this old edited syntax tree to a new syntax tree representing
   * the same document, returning a sequence of ranges whose syntactic
   * structure has changed.
   *
   * For this to work correctly, this syntax tree must have been edited such
   * that its ranges match up to the new tree. Generally, you'll want to
   * call this method right after calling one of the [`Parser::parse`]
   * functions. Call it on the old tree that was passed to parse, and
   * pass the new tree that was returned from `parse`.
   */
  getChangedRanges(other) {
    if (!(other instanceof _Tree)) {
      throw new TypeError("Argument must be a Tree");
    }
    C2._ts_tree_get_changed_ranges_wasm(this[0], other[0]);
    const count = C2.getValue(TRANSFER_BUFFER, "i32");
    const buffer = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
    const result = new Array(count);
    if (count > 0) {
      let address = buffer;
      for (let i22 = 0; i22 < count; i22++) {
        result[i22] = unmarshalRange(address);
        address += SIZE_OF_RANGE;
      }
      C2._free(buffer);
    }
    return result;
  }
  /** Get the included ranges that were used to parse the syntax tree. */
  getIncludedRanges() {
    C2._ts_tree_included_ranges_wasm(this[0]);
    const count = C2.getValue(TRANSFER_BUFFER, "i32");
    const buffer = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
    const result = new Array(count);
    if (count > 0) {
      let address = buffer;
      for (let i22 = 0; i22 < count; i22++) {
        result[i22] = unmarshalRange(address);
        address += SIZE_OF_RANGE;
      }
      C2._free(buffer);
    }
    return result;
  }
};
var finalizer3 = newFinalizer((handles) => {
  marshalTreeCursor({ handles });
  C2._ts_tree_cursor_delete_wasm(0);
});
var TreeCursor = class _TreeCursor {
  static {
    __name(this, "TreeCursor");
  }
  /** @internal */
  handles = [0, 0, 0, 0];
  // Internal handles for Wasm, shared with the finalizer.
  /** @internal */
  tree;
  /** @internal */
  constructor(internal, tree) {
    assertInternal(internal);
    this.tree = tree;
    unmarshalTreeCursor(this);
    finalizer3?.register(this, this.handles, this);
  }
  /** Creates a deep copy of the tree cursor. This allocates new memory. */
  copy() {
    marshalTreeCursor(this);
    C2._ts_tree_cursor_copy_wasm(this.tree[0]);
    return new _TreeCursor(INTERNAL, this.tree);
  }
  /** Delete the tree cursor, freeing its resources. */
  delete() {
    finalizer3?.unregister(this);
    marshalTreeCursor(this);
    C2._ts_tree_cursor_delete_wasm(this.tree[0]);
    this.handles.fill(0);
  }
  /** Get the tree cursor's current {@link Node}. */
  get currentNode() {
    marshalTreeCursor(this);
    C2._ts_tree_cursor_current_node_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /**
   * Get the numerical field id of this tree cursor's current node.
   *
   * See also {@link TreeCursor#currentFieldName}.
   */
  get currentFieldId() {
    marshalTreeCursor(this);
    return C2._ts_tree_cursor_current_field_id_wasm(this.tree[0]);
  }
  /** Get the field name of this tree cursor's current node. */
  get currentFieldName() {
    return this.tree.language.fields[this.currentFieldId];
  }
  /**
   * Get the depth of the cursor's current node relative to the original
   * node that the cursor was constructed with.
   */
  get currentDepth() {
    marshalTreeCursor(this);
    return C2._ts_tree_cursor_current_depth_wasm(this.tree[0]);
  }
  /**
   * Get the index of the cursor's current node out of all of the
   * descendants of the original node that the cursor was constructed with.
   */
  get currentDescendantIndex() {
    marshalTreeCursor(this);
    return C2._ts_tree_cursor_current_descendant_index_wasm(this.tree[0]);
  }
  /** Get the type of the cursor's current node. */
  get nodeType() {
    return this.tree.language.types[this.nodeTypeId] || "ERROR";
  }
  /** Get the type id of the cursor's current node. */
  get nodeTypeId() {
    marshalTreeCursor(this);
    return C2._ts_tree_cursor_current_node_type_id_wasm(this.tree[0]);
  }
  /** Get the state id of the cursor's current node. */
  get nodeStateId() {
    marshalTreeCursor(this);
    return C2._ts_tree_cursor_current_node_state_id_wasm(this.tree[0]);
  }
  /** Get the id of the cursor's current node. */
  get nodeId() {
    marshalTreeCursor(this);
    return C2._ts_tree_cursor_current_node_id_wasm(this.tree[0]);
  }
  /**
   * Check if the cursor's current node is *named*.
   *
   * Named nodes correspond to named rules in the grammar, whereas
   * *anonymous* nodes correspond to string literals in the grammar.
   */
  get nodeIsNamed() {
    marshalTreeCursor(this);
    return C2._ts_tree_cursor_current_node_is_named_wasm(this.tree[0]) === 1;
  }
  /**
   * Check if the cursor's current node is *missing*.
   *
   * Missing nodes are inserted by the parser in order to recover from
   * certain kinds of syntax errors.
   */
  get nodeIsMissing() {
    marshalTreeCursor(this);
    return C2._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0]) === 1;
  }
  /** Get the string content of the cursor's current node. */
  get nodeText() {
    marshalTreeCursor(this);
    const startIndex = C2._ts_tree_cursor_start_index_wasm(this.tree[0]);
    const endIndex = C2._ts_tree_cursor_end_index_wasm(this.tree[0]);
    C2._ts_tree_cursor_start_position_wasm(this.tree[0]);
    const startPosition = unmarshalPoint(TRANSFER_BUFFER);
    return getText(this.tree, startIndex, endIndex, startPosition);
  }
  /** Get the start position of the cursor's current node. */
  get startPosition() {
    marshalTreeCursor(this);
    C2._ts_tree_cursor_start_position_wasm(this.tree[0]);
    return unmarshalPoint(TRANSFER_BUFFER);
  }
  /** Get the end position of the cursor's current node. */
  get endPosition() {
    marshalTreeCursor(this);
    C2._ts_tree_cursor_end_position_wasm(this.tree[0]);
    return unmarshalPoint(TRANSFER_BUFFER);
  }
  /** Get the start index of the cursor's current node. */
  get startIndex() {
    marshalTreeCursor(this);
    return C2._ts_tree_cursor_start_index_wasm(this.tree[0]);
  }
  /** Get the end index of the cursor's current node. */
  get endIndex() {
    marshalTreeCursor(this);
    return C2._ts_tree_cursor_end_index_wasm(this.tree[0]);
  }
  /**
   * Move this cursor to the first child of its current node.
   *
   * This returns `true` if the cursor successfully moved, and returns
   * `false` if there were no children.
   */
  gotoFirstChild() {
    marshalTreeCursor(this);
    const result = C2._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);
    unmarshalTreeCursor(this);
    return result === 1;
  }
  /**
   * Move this cursor to the last child of its current node.
   *
   * This returns `true` if the cursor successfully moved, and returns
   * `false` if there were no children.
   *
   * Note that this function may be slower than
   * {@link TreeCursor#gotoFirstChild} because it needs to
   * iterate through all the children to compute the child's position.
   */
  gotoLastChild() {
    marshalTreeCursor(this);
    const result = C2._ts_tree_cursor_goto_last_child_wasm(this.tree[0]);
    unmarshalTreeCursor(this);
    return result === 1;
  }
  /**
   * Move this cursor to the parent of its current node.
   *
   * This returns `true` if the cursor successfully moved, and returns
   * `false` if there was no parent node (the cursor was already on the
   * root node).
   *
   * Note that the node the cursor was constructed with is considered the root
   * of the cursor, and the cursor cannot walk outside this node.
   */
  gotoParent() {
    marshalTreeCursor(this);
    const result = C2._ts_tree_cursor_goto_parent_wasm(this.tree[0]);
    unmarshalTreeCursor(this);
    return result === 1;
  }
  /**
   * Move this cursor to the next sibling of its current node.
   *
   * This returns `true` if the cursor successfully moved, and returns
   * `false` if there was no next sibling node.
   *
   * Note that the node the cursor was constructed with is considered the root
   * of the cursor, and the cursor cannot walk outside this node.
   */
  gotoNextSibling() {
    marshalTreeCursor(this);
    const result = C2._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);
    unmarshalTreeCursor(this);
    return result === 1;
  }
  /**
   * Move this cursor to the previous sibling of its current node.
   *
   * This returns `true` if the cursor successfully moved, and returns
   * `false` if there was no previous sibling node.
   *
   * Note that this function may be slower than
   * {@link TreeCursor#gotoNextSibling} due to how node
   * positions are stored. In the worst case, this will need to iterate
   * through all the children up to the previous sibling node to recalculate
   * its position. Also note that the node the cursor was constructed with is
   * considered the root of the cursor, and the cursor cannot walk outside this node.
   */
  gotoPreviousSibling() {
    marshalTreeCursor(this);
    const result = C2._ts_tree_cursor_goto_previous_sibling_wasm(this.tree[0]);
    unmarshalTreeCursor(this);
    return result === 1;
  }
  /**
   * Move the cursor to the node that is the nth descendant of
   * the original node that the cursor was constructed with, where
   * zero represents the original node itself.
   */
  gotoDescendant(goalDescendantIndex) {
    marshalTreeCursor(this);
    C2._ts_tree_cursor_goto_descendant_wasm(this.tree[0], goalDescendantIndex);
    unmarshalTreeCursor(this);
  }
  /**
   * Move this cursor to the first child of its current node that contains or
   * starts after the given byte offset.
   *
   * This returns `true` if the cursor successfully moved to a child node, and returns
   * `false` if no such child was found.
   */
  gotoFirstChildForIndex(goalIndex) {
    marshalTreeCursor(this);
    C2.setValue(TRANSFER_BUFFER + SIZE_OF_CURSOR, goalIndex, "i32");
    const result = C2._ts_tree_cursor_goto_first_child_for_index_wasm(this.tree[0]);
    unmarshalTreeCursor(this);
    return result === 1;
  }
  /**
   * Move this cursor to the first child of its current node that contains or
   * starts after the given position.
   *
   * This returns `true` if the cursor successfully moved to a child node, and returns
   * `false` if no such child was found.
   */
  gotoFirstChildForPosition(goalPosition) {
    marshalTreeCursor(this);
    marshalPoint(TRANSFER_BUFFER + SIZE_OF_CURSOR, goalPosition);
    const result = C2._ts_tree_cursor_goto_first_child_for_position_wasm(this.tree[0]);
    unmarshalTreeCursor(this);
    return result === 1;
  }
  /**
   * Re-initialize this tree cursor to start at the original node that the
   * cursor was constructed with.
   */
  reset(node) {
    marshalNode(node);
    marshalTreeCursor(this, TRANSFER_BUFFER + SIZE_OF_NODE);
    C2._ts_tree_cursor_reset_wasm(node.tree[0]);
    unmarshalTreeCursor(this);
    this.tree = node.tree;
  }
  /**
   * Re-initialize a tree cursor to the same position as another cursor.
   *
   * Unlike {@link TreeCursor#reset}, this will not lose parent
   * information and allows reusing already created cursors.
   */
  resetTo(cursor) {
    marshalTreeCursor(this, TRANSFER_BUFFER);
    marshalTreeCursor(cursor, TRANSFER_BUFFER + SIZE_OF_CURSOR);
    C2._ts_tree_cursor_reset_to_wasm(this.tree[0], cursor.tree[0]);
    unmarshalTreeCursor(this);
    this.tree = cursor.tree;
  }
};
var Node = class {
  static {
    __name(this, "Node");
  }
  /** @internal */
  // @ts-expect-error: never read
  [0] = 0;
  // Internal handle for Wasm
  /** @internal */
  _children;
  /** @internal */
  _namedChildren;
  /** @internal */
  constructor(internal, {
    id,
    tree,
    startIndex,
    startPosition,
    other
  }) {
    assertInternal(internal);
    this[0] = other;
    this.id = id;
    this.tree = tree;
    this.startIndex = startIndex;
    this.startPosition = startPosition;
  }
  /**
   * The numeric id for this node that is unique.
   *
   * Within a given syntax tree, no two nodes have the same id. However:
   *
   * * If a new tree is created based on an older tree, and a node from the old tree is reused in
   *   the process, then that node will have the same id in both trees.
   *
   * * A node not marked as having changes does not guarantee it was reused.
   *
   * * If a node is marked as having changed in the old tree, it will not be reused.
   */
  id;
  /** The byte index where this node starts. */
  startIndex;
  /** The position where this node starts. */
  startPosition;
  /** The tree that this node belongs to. */
  tree;
  /** Get this node's type as a numerical id. */
  get typeId() {
    marshalNode(this);
    return C2._ts_node_symbol_wasm(this.tree[0]);
  }
  /**
   * Get the node's type as a numerical id as it appears in the grammar,
   * ignoring aliases.
   */
  get grammarId() {
    marshalNode(this);
    return C2._ts_node_grammar_symbol_wasm(this.tree[0]);
  }
  /** Get this node's type as a string. */
  get type() {
    return this.tree.language.types[this.typeId] || "ERROR";
  }
  /**
   * Get this node's symbol name as it appears in the grammar, ignoring
   * aliases as a string.
   */
  get grammarType() {
    return this.tree.language.types[this.grammarId] || "ERROR";
  }
  /**
   * Check if this node is *named*.
   *
   * Named nodes correspond to named rules in the grammar, whereas
   * *anonymous* nodes correspond to string literals in the grammar.
   */
  get isNamed() {
    marshalNode(this);
    return C2._ts_node_is_named_wasm(this.tree[0]) === 1;
  }
  /**
   * Check if this node is *extra*.
   *
   * Extra nodes represent things like comments, which are not required
   * by the grammar, but can appear anywhere.
   */
  get isExtra() {
    marshalNode(this);
    return C2._ts_node_is_extra_wasm(this.tree[0]) === 1;
  }
  /**
   * Check if this node represents a syntax error.
   *
   * Syntax errors represent parts of the code that could not be incorporated
   * into a valid syntax tree.
   */
  get isError() {
    marshalNode(this);
    return C2._ts_node_is_error_wasm(this.tree[0]) === 1;
  }
  /**
   * Check if this node is *missing*.
   *
   * Missing nodes are inserted by the parser in order to recover from
   * certain kinds of syntax errors.
   */
  get isMissing() {
    marshalNode(this);
    return C2._ts_node_is_missing_wasm(this.tree[0]) === 1;
  }
  /** Check if this node has been edited. */
  get hasChanges() {
    marshalNode(this);
    return C2._ts_node_has_changes_wasm(this.tree[0]) === 1;
  }
  /**
   * Check if this node represents a syntax error or contains any syntax
   * errors anywhere within it.
   */
  get hasError() {
    marshalNode(this);
    return C2._ts_node_has_error_wasm(this.tree[0]) === 1;
  }
  /** Get the byte index where this node ends. */
  get endIndex() {
    marshalNode(this);
    return C2._ts_node_end_index_wasm(this.tree[0]);
  }
  /** Get the position where this node ends. */
  get endPosition() {
    marshalNode(this);
    C2._ts_node_end_point_wasm(this.tree[0]);
    return unmarshalPoint(TRANSFER_BUFFER);
  }
  /** Get the string content of this node. */
  get text() {
    return getText(this.tree, this.startIndex, this.endIndex, this.startPosition);
  }
  /** Get this node's parse state. */
  get parseState() {
    marshalNode(this);
    return C2._ts_node_parse_state_wasm(this.tree[0]);
  }
  /** Get the parse state after this node. */
  get nextParseState() {
    marshalNode(this);
    return C2._ts_node_next_parse_state_wasm(this.tree[0]);
  }
  /** Check if this node is equal to another node. */
  equals(other) {
    return this.tree === other.tree && this.id === other.id;
  }
  /**
   * Get the node's child at the given index, where zero represents the first child.
   *
   * This method is fairly fast, but its cost is technically log(n), so if
   * you might be iterating over a long list of children, you should use
   * {@link Node#children} instead.
   */
  child(index2) {
    marshalNode(this);
    C2._ts_node_child_wasm(this.tree[0], index2);
    return unmarshalNode(this.tree);
  }
  /**
   * Get this node's *named* child at the given index.
   *
   * See also {@link Node#isNamed}.
   * This method is fairly fast, but its cost is technically log(n), so if
   * you might be iterating over a long list of children, you should use
   * {@link Node#namedChildren} instead.
   */
  namedChild(index2) {
    marshalNode(this);
    C2._ts_node_named_child_wasm(this.tree[0], index2);
    return unmarshalNode(this.tree);
  }
  /**
   * Get this node's child with the given numerical field id.
   *
   * See also {@link Node#childForFieldName}. You can
   * convert a field name to an id using {@link Language#fieldIdForName}.
   */
  childForFieldId(fieldId) {
    marshalNode(this);
    C2._ts_node_child_by_field_id_wasm(this.tree[0], fieldId);
    return unmarshalNode(this.tree);
  }
  /**
   * Get the first child with the given field name.
   *
   * If multiple children may have the same field name, access them using
   * {@link Node#childrenForFieldName}.
   */
  childForFieldName(fieldName) {
    const fieldId = this.tree.language.fields.indexOf(fieldName);
    if (fieldId !== -1) return this.childForFieldId(fieldId);
    return null;
  }
  /** Get the field name of this node's child at the given index. */
  fieldNameForChild(index2) {
    marshalNode(this);
    const address = C2._ts_node_field_name_for_child_wasm(this.tree[0], index2);
    if (!address) return null;
    return C2.AsciiToString(address);
  }
  /** Get the field name of this node's named child at the given index. */
  fieldNameForNamedChild(index2) {
    marshalNode(this);
    const address = C2._ts_node_field_name_for_named_child_wasm(this.tree[0], index2);
    if (!address) return null;
    return C2.AsciiToString(address);
  }
  /**
   * Get an array of this node's children with a given field name.
   *
   * See also {@link Node#children}.
   */
  childrenForFieldName(fieldName) {
    const fieldId = this.tree.language.fields.indexOf(fieldName);
    if (fieldId !== -1 && fieldId !== 0) return this.childrenForFieldId(fieldId);
    return [];
  }
  /**
    * Get an array of this node's children with a given field id.
    *
    * See also {@link Node#childrenForFieldName}.
    */
  childrenForFieldId(fieldId) {
    marshalNode(this);
    C2._ts_node_children_by_field_id_wasm(this.tree[0], fieldId);
    const count = C2.getValue(TRANSFER_BUFFER, "i32");
    const buffer = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
    const result = new Array(count);
    if (count > 0) {
      let address = buffer;
      for (let i22 = 0; i22 < count; i22++) {
        result[i22] = unmarshalNode(this.tree, address);
        address += SIZE_OF_NODE;
      }
      C2._free(buffer);
    }
    return result;
  }
  /** Get the node's first child that contains or starts after the given byte offset. */
  firstChildForIndex(index2) {
    marshalNode(this);
    const address = TRANSFER_BUFFER + SIZE_OF_NODE;
    C2.setValue(address, index2, "i32");
    C2._ts_node_first_child_for_byte_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /** Get the node's first named child that contains or starts after the given byte offset. */
  firstNamedChildForIndex(index2) {
    marshalNode(this);
    const address = TRANSFER_BUFFER + SIZE_OF_NODE;
    C2.setValue(address, index2, "i32");
    C2._ts_node_first_named_child_for_byte_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /** Get this node's number of children. */
  get childCount() {
    marshalNode(this);
    return C2._ts_node_child_count_wasm(this.tree[0]);
  }
  /**
   * Get this node's number of *named* children.
   *
   * See also {@link Node#isNamed}.
   */
  get namedChildCount() {
    marshalNode(this);
    return C2._ts_node_named_child_count_wasm(this.tree[0]);
  }
  /** Get this node's first child. */
  get firstChild() {
    return this.child(0);
  }
  /**
   * Get this node's first named child.
   *
   * See also {@link Node#isNamed}.
   */
  get firstNamedChild() {
    return this.namedChild(0);
  }
  /** Get this node's last child. */
  get lastChild() {
    return this.child(this.childCount - 1);
  }
  /**
   * Get this node's last named child.
   *
   * See also {@link Node#isNamed}.
   */
  get lastNamedChild() {
    return this.namedChild(this.namedChildCount - 1);
  }
  /**
   * Iterate over this node's children.
   *
   * If you're walking the tree recursively, you may want to use the
   * {@link TreeCursor} APIs directly instead.
   */
  get children() {
    if (!this._children) {
      marshalNode(this);
      C2._ts_node_children_wasm(this.tree[0]);
      const count = C2.getValue(TRANSFER_BUFFER, "i32");
      const buffer = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
      this._children = new Array(count);
      if (count > 0) {
        let address = buffer;
        for (let i22 = 0; i22 < count; i22++) {
          this._children[i22] = unmarshalNode(this.tree, address);
          address += SIZE_OF_NODE;
        }
        C2._free(buffer);
      }
    }
    return this._children;
  }
  /**
   * Iterate over this node's named children.
   *
   * See also {@link Node#children}.
   */
  get namedChildren() {
    if (!this._namedChildren) {
      marshalNode(this);
      C2._ts_node_named_children_wasm(this.tree[0]);
      const count = C2.getValue(TRANSFER_BUFFER, "i32");
      const buffer = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
      this._namedChildren = new Array(count);
      if (count > 0) {
        let address = buffer;
        for (let i22 = 0; i22 < count; i22++) {
          this._namedChildren[i22] = unmarshalNode(this.tree, address);
          address += SIZE_OF_NODE;
        }
        C2._free(buffer);
      }
    }
    return this._namedChildren;
  }
  /**
   * Get the descendants of this node that are the given type, or in the given types array.
   *
   * The types array should contain node type strings, which can be retrieved from {@link Language#types}.
   *
   * Additionally, a `startPosition` and `endPosition` can be passed in to restrict the search to a byte range.
   */
  descendantsOfType(types, startPosition = ZERO_POINT, endPosition = ZERO_POINT) {
    if (!Array.isArray(types)) types = [types];
    const symbols = [];
    const typesBySymbol = this.tree.language.types;
    for (let i22 = 0, n2 = typesBySymbol.length; i22 < n2; i22++) {
      if (types.includes(typesBySymbol[i22])) {
        symbols.push(i22);
      }
    }
    if (types.includes("ERROR")) {
      symbols.push(65535);
    }
    const symbolsAddress = C2._malloc(SIZE_OF_INT * symbols.length);
    for (let i22 = 0, n2 = symbols.length; i22 < n2; i22++) {
      C2.setValue(symbolsAddress + i22 * SIZE_OF_INT, symbols[i22], "i32");
    }
    marshalNode(this);
    C2._ts_node_descendants_of_type_wasm(
      this.tree[0],
      symbolsAddress,
      symbols.length,
      startPosition.row,
      startPosition.column,
      endPosition.row,
      endPosition.column
    );
    const descendantCount = C2.getValue(TRANSFER_BUFFER, "i32");
    const descendantAddress = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
    const result = new Array(descendantCount);
    if (descendantCount > 0) {
      let address = descendantAddress;
      for (let i22 = 0; i22 < descendantCount; i22++) {
        result[i22] = unmarshalNode(this.tree, address);
        address += SIZE_OF_NODE;
      }
    }
    C2._free(descendantAddress);
    C2._free(symbolsAddress);
    return result;
  }
  /** Get this node's next sibling. */
  get nextSibling() {
    marshalNode(this);
    C2._ts_node_next_sibling_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /** Get this node's previous sibling. */
  get previousSibling() {
    marshalNode(this);
    C2._ts_node_prev_sibling_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /**
   * Get this node's next *named* sibling.
   *
   * See also {@link Node#isNamed}.
   */
  get nextNamedSibling() {
    marshalNode(this);
    C2._ts_node_next_named_sibling_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /**
   * Get this node's previous *named* sibling.
   *
   * See also {@link Node#isNamed}.
   */
  get previousNamedSibling() {
    marshalNode(this);
    C2._ts_node_prev_named_sibling_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /** Get the node's number of descendants, including one for the node itself. */
  get descendantCount() {
    marshalNode(this);
    return C2._ts_node_descendant_count_wasm(this.tree[0]);
  }
  /**
   * Get this node's immediate parent.
   * Prefer {@link Node#childWithDescendant} for iterating over this node's ancestors.
   */
  get parent() {
    marshalNode(this);
    C2._ts_node_parent_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /**
   * Get the node that contains `descendant`.
   *
   * Note that this can return `descendant` itself.
   */
  childWithDescendant(descendant) {
    marshalNode(this);
    marshalNode(descendant, 1);
    C2._ts_node_child_with_descendant_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /** Get the smallest node within this node that spans the given byte range. */
  descendantForIndex(start2, end = start2) {
    if (typeof start2 !== "number" || typeof end !== "number") {
      throw new Error("Arguments must be numbers");
    }
    marshalNode(this);
    const address = TRANSFER_BUFFER + SIZE_OF_NODE;
    C2.setValue(address, start2, "i32");
    C2.setValue(address + SIZE_OF_INT, end, "i32");
    C2._ts_node_descendant_for_index_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /** Get the smallest named node within this node that spans the given byte range. */
  namedDescendantForIndex(start2, end = start2) {
    if (typeof start2 !== "number" || typeof end !== "number") {
      throw new Error("Arguments must be numbers");
    }
    marshalNode(this);
    const address = TRANSFER_BUFFER + SIZE_OF_NODE;
    C2.setValue(address, start2, "i32");
    C2.setValue(address + SIZE_OF_INT, end, "i32");
    C2._ts_node_named_descendant_for_index_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /** Get the smallest node within this node that spans the given point range. */
  descendantForPosition(start2, end = start2) {
    if (!isPoint(start2) || !isPoint(end)) {
      throw new Error("Arguments must be {row, column} objects");
    }
    marshalNode(this);
    const address = TRANSFER_BUFFER + SIZE_OF_NODE;
    marshalPoint(address, start2);
    marshalPoint(address + SIZE_OF_POINT, end);
    C2._ts_node_descendant_for_position_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /** Get the smallest named node within this node that spans the given point range. */
  namedDescendantForPosition(start2, end = start2) {
    if (!isPoint(start2) || !isPoint(end)) {
      throw new Error("Arguments must be {row, column} objects");
    }
    marshalNode(this);
    const address = TRANSFER_BUFFER + SIZE_OF_NODE;
    marshalPoint(address, start2);
    marshalPoint(address + SIZE_OF_POINT, end);
    C2._ts_node_named_descendant_for_position_wasm(this.tree[0]);
    return unmarshalNode(this.tree);
  }
  /**
   * Create a new {@link TreeCursor} starting from this node.
   *
   * Note that the given node is considered the root of the cursor,
   * and the cursor cannot walk outside this node.
   */
  walk() {
    marshalNode(this);
    C2._ts_tree_cursor_new_wasm(this.tree[0]);
    return new TreeCursor(INTERNAL, this.tree);
  }
  /**
   * Edit this node to keep it in-sync with source code that has been edited.
   *
   * This function is only rarely needed. When you edit a syntax tree with
   * the {@link Tree#edit} method, all of the nodes that you retrieve from
   * the tree afterward will already reflect the edit. You only need to
   * use {@link Node#edit} when you have a specific {@link Node} instance that
   * you want to keep and continue to use after an edit.
   */
  edit(edit) {
    const { point, index: index2 } = edit.editPoint(this.startPosition, this.startIndex);
    this.startPosition = point;
    this.startIndex = index2;
  }
  /** Get the S-expression representation of this node. */
  toString() {
    marshalNode(this);
    const address = C2._ts_node_to_string_wasm(this.tree[0]);
    const result = C2.AsciiToString(address);
    C2._free(address);
    return result;
  }
};
function unmarshalCaptures(query, tree, address, patternIndex, result) {
  for (let i22 = 0, n2 = result.length; i22 < n2; i22++) {
    const captureIndex = C2.getValue(address, "i32");
    address += SIZE_OF_INT;
    const node = unmarshalNode(tree, address);
    address += SIZE_OF_NODE;
    result[i22] = { patternIndex, name: query.captureNames[captureIndex], node };
  }
  return address;
}
__name(unmarshalCaptures, "unmarshalCaptures");
function marshalNode(node, index2 = 0) {
  let address = TRANSFER_BUFFER + index2 * SIZE_OF_NODE;
  C2.setValue(address, node.id, "i32");
  address += SIZE_OF_INT;
  C2.setValue(address, node.startIndex, "i32");
  address += SIZE_OF_INT;
  C2.setValue(address, node.startPosition.row, "i32");
  address += SIZE_OF_INT;
  C2.setValue(address, node.startPosition.column, "i32");
  address += SIZE_OF_INT;
  C2.setValue(address, node[0], "i32");
}
__name(marshalNode, "marshalNode");
function unmarshalNode(tree, address = TRANSFER_BUFFER) {
  const id = C2.getValue(address, "i32");
  address += SIZE_OF_INT;
  if (id === 0) return null;
  const index2 = C2.getValue(address, "i32");
  address += SIZE_OF_INT;
  const row = C2.getValue(address, "i32");
  address += SIZE_OF_INT;
  const column = C2.getValue(address, "i32");
  address += SIZE_OF_INT;
  const other = C2.getValue(address, "i32");
  const result = new Node(INTERNAL, {
    id,
    tree,
    startIndex: index2,
    startPosition: { row, column },
    other
  });
  return result;
}
__name(unmarshalNode, "unmarshalNode");
function marshalTreeCursor({ handles }, address = TRANSFER_BUFFER) {
  C2.setValue(address + 0 * SIZE_OF_INT, handles[0], "i32");
  C2.setValue(address + 1 * SIZE_OF_INT, handles[1], "i32");
  C2.setValue(address + 2 * SIZE_OF_INT, handles[2], "i32");
  C2.setValue(address + 3 * SIZE_OF_INT, handles[3], "i32");
}
__name(marshalTreeCursor, "marshalTreeCursor");
function unmarshalTreeCursor({ handles }) {
  handles[0] = C2.getValue(TRANSFER_BUFFER + 0 * SIZE_OF_INT, "i32");
  handles[1] = C2.getValue(TRANSFER_BUFFER + 1 * SIZE_OF_INT, "i32");
  handles[2] = C2.getValue(TRANSFER_BUFFER + 2 * SIZE_OF_INT, "i32");
  handles[3] = C2.getValue(TRANSFER_BUFFER + 3 * SIZE_OF_INT, "i32");
}
__name(unmarshalTreeCursor, "unmarshalTreeCursor");
function marshalPoint(address, point) {
  C2.setValue(address, point.row, "i32");
  C2.setValue(address + SIZE_OF_INT, point.column, "i32");
}
__name(marshalPoint, "marshalPoint");
function unmarshalPoint(address) {
  const result = {
    row: C2.getValue(address, "i32") >>> 0,
    column: C2.getValue(address + SIZE_OF_INT, "i32") >>> 0
  };
  return result;
}
__name(unmarshalPoint, "unmarshalPoint");
function marshalRange(address, range) {
  marshalPoint(address, range.startPosition);
  address += SIZE_OF_POINT;
  marshalPoint(address, range.endPosition);
  address += SIZE_OF_POINT;
  C2.setValue(address, range.startIndex, "i32");
  address += SIZE_OF_INT;
  C2.setValue(address, range.endIndex, "i32");
  address += SIZE_OF_INT;
}
__name(marshalRange, "marshalRange");
function unmarshalRange(address) {
  const result = {};
  result.startPosition = unmarshalPoint(address);
  address += SIZE_OF_POINT;
  result.endPosition = unmarshalPoint(address);
  address += SIZE_OF_POINT;
  result.startIndex = C2.getValue(address, "i32") >>> 0;
  address += SIZE_OF_INT;
  result.endIndex = C2.getValue(address, "i32") >>> 0;
  return result;
}
__name(unmarshalRange, "unmarshalRange");
function marshalEdit(edit, address = TRANSFER_BUFFER) {
  marshalPoint(address, edit.startPosition);
  address += SIZE_OF_POINT;
  marshalPoint(address, edit.oldEndPosition);
  address += SIZE_OF_POINT;
  marshalPoint(address, edit.newEndPosition);
  address += SIZE_OF_POINT;
  C2.setValue(address, edit.startIndex, "i32");
  address += SIZE_OF_INT;
  C2.setValue(address, edit.oldEndIndex, "i32");
  address += SIZE_OF_INT;
  C2.setValue(address, edit.newEndIndex, "i32");
  address += SIZE_OF_INT;
}
__name(marshalEdit, "marshalEdit");
function unmarshalLanguageMetadata(address) {
  const major_version = C2.getValue(address, "i32");
  const minor_version = C2.getValue(address += SIZE_OF_INT, "i32");
  const patch_version = C2.getValue(address += SIZE_OF_INT, "i32");
  return { major_version, minor_version, patch_version };
}
__name(unmarshalLanguageMetadata, "unmarshalLanguageMetadata");
var LANGUAGE_FUNCTION_REGEX = /^tree_sitter_\w+$/;
var Language = class _Language {
  static {
    __name(this, "Language");
  }
  /** @internal */
  [0] = 0;
  // Internal handle for Wasm
  /**
   * A list of all node types in the language. The index of each type in this
   * array is its node type id.
   */
  types;
  /**
   * A list of all field names in the language. The index of each field name in
   * this array is its field id.
   */
  fields;
  /** @internal */
  constructor(internal, address) {
    assertInternal(internal);
    this[0] = address;
    this.types = new Array(C2._ts_language_symbol_count(this[0]));
    for (let i22 = 0, n2 = this.types.length; i22 < n2; i22++) {
      if (C2._ts_language_symbol_type(this[0], i22) < 2) {
        this.types[i22] = C2.UTF8ToString(C2._ts_language_symbol_name(this[0], i22));
      }
    }
    this.fields = new Array(C2._ts_language_field_count(this[0]) + 1);
    for (let i22 = 0, n2 = this.fields.length; i22 < n2; i22++) {
      const fieldName = C2._ts_language_field_name_for_id(this[0], i22);
      if (fieldName !== 0) {
        this.fields[i22] = C2.UTF8ToString(fieldName);
      } else {
        this.fields[i22] = null;
      }
    }
  }
  /**
   * Gets the name of the language.
   */
  get name() {
    const ptr = C2._ts_language_name(this[0]);
    if (ptr === 0) return null;
    return C2.UTF8ToString(ptr);
  }
  /**
   * Gets the ABI version of the language.
   */
  get abiVersion() {
    return C2._ts_language_abi_version(this[0]);
  }
  /**
  * Get the metadata for this language. This information is generated by the
  * CLI, and relies on the language author providing the correct metadata in
  * the language's `tree-sitter.json` file.
  */
  get metadata() {
    C2._ts_language_metadata_wasm(this[0]);
    const length = C2.getValue(TRANSFER_BUFFER, "i32");
    if (length === 0) return null;
    return unmarshalLanguageMetadata(TRANSFER_BUFFER + SIZE_OF_INT);
  }
  /**
   * Gets the number of fields in the language.
   */
  get fieldCount() {
    return this.fields.length - 1;
  }
  /**
   * Gets the number of states in the language.
   */
  get stateCount() {
    return C2._ts_language_state_count(this[0]);
  }
  /**
   * Get the field id for a field name.
   */
  fieldIdForName(fieldName) {
    const result = this.fields.indexOf(fieldName);
    return result !== -1 ? result : null;
  }
  /**
   * Get the field name for a field id.
   */
  fieldNameForId(fieldId) {
    return this.fields[fieldId] ?? null;
  }
  /**
   * Get the node type id for a node type name.
   */
  idForNodeType(type, named) {
    const typeLength = C2.lengthBytesUTF8(type);
    const typeAddress = C2._malloc(typeLength + 1);
    C2.stringToUTF8(type, typeAddress, typeLength + 1);
    const result = C2._ts_language_symbol_for_name(this[0], typeAddress, typeLength, named ? 1 : 0);
    C2._free(typeAddress);
    return result || null;
  }
  /**
   * Gets the number of node types in the language.
   */
  get nodeTypeCount() {
    return C2._ts_language_symbol_count(this[0]);
  }
  /**
   * Get the node type name for a node type id.
   */
  nodeTypeForId(typeId) {
    const name2 = C2._ts_language_symbol_name(this[0], typeId);
    return name2 ? C2.UTF8ToString(name2) : null;
  }
  /**
   * Check if a node type is named.
   *
   * @see {@link https://tree-sitter.github.io/tree-sitter/using-parsers/2-basic-parsing.html#named-vs-anonymous-nodes}
   */
  nodeTypeIsNamed(typeId) {
    return C2._ts_language_type_is_named_wasm(this[0], typeId) ? true : false;
  }
  /**
   * Check if a node type is visible.
   */
  nodeTypeIsVisible(typeId) {
    return C2._ts_language_type_is_visible_wasm(this[0], typeId) ? true : false;
  }
  /**
   * Get the supertypes ids of this language.
   *
   * @see {@link https://tree-sitter.github.io/tree-sitter/using-parsers/6-static-node-types.html?highlight=supertype#supertype-nodes}
   */
  get supertypes() {
    C2._ts_language_supertypes_wasm(this[0]);
    const count = C2.getValue(TRANSFER_BUFFER, "i32");
    const buffer = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
    const result = new Array(count);
    if (count > 0) {
      let address = buffer;
      for (let i22 = 0; i22 < count; i22++) {
        result[i22] = C2.getValue(address, "i16");
        address += SIZE_OF_SHORT;
      }
    }
    return result;
  }
  /**
   * Get the subtype ids for a given supertype node id.
   */
  subtypes(supertype) {
    C2._ts_language_subtypes_wasm(this[0], supertype);
    const count = C2.getValue(TRANSFER_BUFFER, "i32");
    const buffer = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
    const result = new Array(count);
    if (count > 0) {
      let address = buffer;
      for (let i22 = 0; i22 < count; i22++) {
        result[i22] = C2.getValue(address, "i16");
        address += SIZE_OF_SHORT;
      }
    }
    return result;
  }
  /**
   * Get the next state id for a given state id and node type id.
   */
  nextState(stateId, typeId) {
    return C2._ts_language_next_state(this[0], stateId, typeId);
  }
  /**
   * Create a new lookahead iterator for this language and parse state.
   *
   * This returns `null` if state is invalid for this language.
   *
   * Iterating {@link LookaheadIterator} will yield valid symbols in the given
   * parse state. A newly created iterator is not positioned on a symbol, so
   * {@link LookaheadIterator#currentType} returns `null` until the first
   * iteration step.
   *
   * Lookahead iterators can be useful for generating suggestions and improving
   * syntax error diagnostics. To get symbols valid in an `ERROR` node, use the
   * lookahead iterator on its first leaf node state. For `MISSING` nodes, a
   * lookahead iterator created on the previous non-extra leaf node may be
   * appropriate.
   */
  lookaheadIterator(stateId) {
    const address = C2._ts_lookahead_iterator_new(this[0], stateId);
    if (address) return new LookaheadIterator(INTERNAL, address, this);
    return null;
  }
  /**
   * Load a language from a WebAssembly module.
   * The module can be provided as a path to a file, a `URL` to a file, or as a
   * buffer.
   */
  static async load(input) {
    let binary2;
    if (input instanceof Uint8Array) {
      binary2 = input;
    } else if (globalThis.process?.versions.node) {
      const fs2 = await import("fs/promises");
      binary2 = await fs2.readFile(input);
    } else {
      const response = await fetch(input);
      if (!response.ok) {
        const body2 = await response.text();
        throw new Error(`Language.load failed with status ${response.status}.

${body2}`);
      }
      const retryResp = response.clone();
      try {
        binary2 = await WebAssembly.compileStreaming(response);
      } catch (reason) {
        console.error("wasm streaming compile failed:", reason);
        console.error("falling back to ArrayBuffer instantiation");
        binary2 = new Uint8Array(await retryResp.arrayBuffer());
      }
    }
    const mod = await C2.loadWebAssemblyModule(binary2, { loadAsync: true });
    return _Language.loadFromWasmExports(mod, { sync: false });
  }
  static loadFromWasmExports(mod, { sync }) {
    const symbolNames = Object.keys(mod);
    const functionName = symbolNames.find((key) => LANGUAGE_FUNCTION_REGEX.test(key) && !key.includes("external_scanner_"));
    if (!functionName) {
      console.log(`Couldn't find language function in Wasm file. Symbols:
${JSON.stringify(symbolNames, null, 2)}`);
      throw new Error(`Language.${sync ? "loadSync" : "load"} failed: no language function found in Wasm file`);
    }
    const languageAddress = mod[functionName]();
    return new _Language(INTERNAL, languageAddress);
  }
  /**
   * Load a language synchronously from a pre-compiled WebAssembly module.
   * Use this when the host environment provides a `WebAssembly.Module` directly.
   */
  static loadSync(wasmModule) {
    const mod = C2.loadWebAssemblyModule(wasmModule, { loadAsync: false });
    return _Language.loadFromWasmExports(mod, { sync: true });
  }
};
async function Module2(moduleArg = {}) {
  var moduleRtn;
  var Module = moduleArg;
  var ENVIRONMENT_IS_WEB = typeof window == "object";
  var ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope != "undefined";
  var ENVIRONMENT_IS_NODE = typeof process == "object" && process.versions?.node && process.type != "renderer";
  if (ENVIRONMENT_IS_NODE) {
    const { createRequire } = await import("module");
    var require = createRequire(import.meta.url);
  }
  Module.currentQueryProgressCallback = null;
  Module.currentProgressCallback = null;
  Module.currentLogCallback = null;
  Module.currentParseCallback = null;
  var arguments_ = [];
  var thisProgram = "./this.program";
  var quit_ = /* @__PURE__ */ __name((status, toThrow) => {
    throw toThrow;
  }, "quit_");
  var _scriptName = import.meta.url;
  var scriptDirectory = "";
  function locateFile(path4) {
    if (Module["locateFile"]) {
      return Module["locateFile"](path4, scriptDirectory);
    }
    return scriptDirectory + path4;
  }
  __name(locateFile, "locateFile");
  var readAsync, readBinary;
  if (ENVIRONMENT_IS_NODE) {
    var fs = require("fs");
    if (_scriptName.startsWith("file:")) {
      scriptDirectory = require("path").dirname(require("url").fileURLToPath(_scriptName)) + "/";
    }
    readBinary = /* @__PURE__ */ __name((filename) => {
      filename = isFileURI(filename) ? new URL(filename) : filename;
      var ret = fs.readFileSync(filename);
      return ret;
    }, "readBinary");
    readAsync = /* @__PURE__ */ __name(async (filename, binary2 = true) => {
      filename = isFileURI(filename) ? new URL(filename) : filename;
      var ret = fs.readFileSync(filename, binary2 ? void 0 : "utf8");
      return ret;
    }, "readAsync");
    if (process.argv.length > 1) {
      thisProgram = process.argv[1].replace(/\\/g, "/");
    }
    arguments_ = process.argv.slice(2);
    quit_ = /* @__PURE__ */ __name((status, toThrow) => {
      process.exitCode = status;
      throw toThrow;
    }, "quit_");
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    try {
      scriptDirectory = new URL(".", _scriptName).href;
    } catch {
    }
    {
      if (ENVIRONMENT_IS_WORKER) {
        readBinary = /* @__PURE__ */ __name((url) => {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.responseType = "arraybuffer";
          xhr.send(null);
          return new Uint8Array(
            /** @type{!ArrayBuffer} */
            xhr.response
          );
        }, "readBinary");
      }
      readAsync = /* @__PURE__ */ __name(async (url) => {
        if (isFileURI(url)) {
          return new Promise((resolve2, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = () => {
              if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                resolve2(xhr.response);
                return;
              }
              reject(xhr.status);
            };
            xhr.onerror = reject;
            xhr.send(null);
          });
        }
        var response = await fetch(url, {
          credentials: "same-origin"
        });
        if (response.ok) {
          return response.arrayBuffer();
        }
        throw new Error(response.status + " : " + response.url);
      }, "readAsync");
    }
  } else {
  }
  var out = console.log.bind(console);
  var err = console.error.bind(console);
  var dynamicLibraries = [];
  var wasmBinary;
  var ABORT = false;
  var EXITSTATUS;
  var isFileURI = /* @__PURE__ */ __name((filename) => filename.startsWith("file://"), "isFileURI");
  var readyPromiseResolve, readyPromiseReject;
  var wasmMemory;
  var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
  var HEAP64, HEAPU64;
  var HEAP_DATA_VIEW;
  var runtimeInitialized = false;
  function updateMemoryViews() {
    var b2 = wasmMemory.buffer;
    Module["HEAP8"] = HEAP8 = new Int8Array(b2);
    Module["HEAP16"] = HEAP16 = new Int16Array(b2);
    Module["HEAPU8"] = HEAPU8 = new Uint8Array(b2);
    Module["HEAPU16"] = HEAPU16 = new Uint16Array(b2);
    Module["HEAP32"] = HEAP32 = new Int32Array(b2);
    Module["HEAPU32"] = HEAPU32 = new Uint32Array(b2);
    Module["HEAPF32"] = HEAPF32 = new Float32Array(b2);
    Module["HEAPF64"] = HEAPF64 = new Float64Array(b2);
    Module["HEAP64"] = HEAP64 = new BigInt64Array(b2);
    Module["HEAPU64"] = HEAPU64 = new BigUint64Array(b2);
    Module["HEAP_DATA_VIEW"] = HEAP_DATA_VIEW = new DataView(b2);
    LE_HEAP_UPDATE();
  }
  __name(updateMemoryViews, "updateMemoryViews");
  function initMemory() {
    if (Module["wasmMemory"]) {
      wasmMemory = Module["wasmMemory"];
    } else {
      var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 33554432;
      wasmMemory = new WebAssembly.Memory({
        "initial": INITIAL_MEMORY / 65536,
        // In theory we should not need to emit the maximum if we want "unlimited"
        // or 4GB of memory, but VMs error on that atm, see
        // https://github.com/emscripten-core/emscripten/issues/14130
        // And in the pthreads case we definitely need to emit a maximum. So
        // always emit one.
        "maximum": 32768
      });
    }
    updateMemoryViews();
  }
  __name(initMemory, "initMemory");
  var __RELOC_FUNCS__ = [];
  function preRun() {
    if (Module["preRun"]) {
      if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
      while (Module["preRun"].length) {
        addOnPreRun(Module["preRun"].shift());
      }
    }
    callRuntimeCallbacks(onPreRuns);
  }
  __name(preRun, "preRun");
  function initRuntime() {
    runtimeInitialized = true;
    callRuntimeCallbacks(__RELOC_FUNCS__);
    wasmExports["__wasm_call_ctors"]();
    callRuntimeCallbacks(onPostCtors);
  }
  __name(initRuntime, "initRuntime");
  function preMain() {
  }
  __name(preMain, "preMain");
  function postRun() {
    if (Module["postRun"]) {
      if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
      while (Module["postRun"].length) {
        addOnPostRun(Module["postRun"].shift());
      }
    }
    callRuntimeCallbacks(onPostRuns);
  }
  __name(postRun, "postRun");
  function abort(what) {
    Module["onAbort"]?.(what);
    what = "Aborted(" + what + ")";
    err(what);
    ABORT = true;
    what += ". Build with -sASSERTIONS for more info.";
    var e2 = new WebAssembly.RuntimeError(what);
    readyPromiseReject?.(e2);
    throw e2;
  }
  __name(abort, "abort");
  var wasmBinaryFile;
  function findWasmBinary() {
    if (Module["locateFile"]) {
      return locateFile("web-tree-sitter.wasm");
    }
    return new URL("web-tree-sitter.wasm", import.meta.url).href;
  }
  __name(findWasmBinary, "findWasmBinary");
  function getBinarySync(file) {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    }
    throw "both async and sync fetching of the wasm failed";
  }
  __name(getBinarySync, "getBinarySync");
  async function getWasmBinary(binaryFile) {
    if (!wasmBinary) {
      try {
        var response = await readAsync(binaryFile);
        return new Uint8Array(response);
      } catch {
      }
    }
    return getBinarySync(binaryFile);
  }
  __name(getWasmBinary, "getWasmBinary");
  async function instantiateArrayBuffer(binaryFile, imports) {
    try {
      var binary2 = await getWasmBinary(binaryFile);
      var instance2 = await WebAssembly.instantiate(binary2, imports);
      return instance2;
    } catch (reason) {
      err(`failed to asynchronously prepare wasm: ${reason}`);
      abort(reason);
    }
  }
  __name(instantiateArrayBuffer, "instantiateArrayBuffer");
  async function instantiateAsync(binary2, binaryFile, imports) {
    if (!binary2 && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE) {
      try {
        var response = fetch(binaryFile, {
          credentials: "same-origin"
        });
        var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
        return instantiationResult;
      } catch (reason) {
        err(`wasm streaming compile failed: ${reason}`);
        err("falling back to ArrayBuffer instantiation");
      }
    }
    return instantiateArrayBuffer(binaryFile, imports);
  }
  __name(instantiateAsync, "instantiateAsync");
  function getWasmImports() {
    return {
      "env": wasmImports,
      "wasi_snapshot_preview1": wasmImports,
      "GOT.mem": new Proxy(wasmImports, GOTHandler),
      "GOT.func": new Proxy(wasmImports, GOTHandler)
    };
  }
  __name(getWasmImports, "getWasmImports");
  async function createWasm() {
    function receiveInstance(instance2, module2) {
      wasmExports = instance2.exports;
      wasmExports = relocateExports(wasmExports, 1024);
      var metadata2 = getDylinkMetadata(module2);
      if (metadata2.neededDynlibs) {
        dynamicLibraries = metadata2.neededDynlibs.concat(dynamicLibraries);
      }
      mergeLibSymbols(wasmExports, "main");
      LDSO.init();
      loadDylibs();
      __RELOC_FUNCS__.push(wasmExports["__wasm_apply_data_relocs"]);
      assignWasmExports(wasmExports);
      return wasmExports;
    }
    __name(receiveInstance, "receiveInstance");
    function receiveInstantiationResult(result2) {
      return receiveInstance(result2["instance"], result2["module"]);
    }
    __name(receiveInstantiationResult, "receiveInstantiationResult");
    var info2 = getWasmImports();
    if (Module["instantiateWasm"]) {
      return new Promise((resolve2, reject) => {
        Module["instantiateWasm"](info2, (mod, inst) => {
          resolve2(receiveInstance(mod, inst));
        });
      });
    }
    wasmBinaryFile ??= findWasmBinary();
    var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info2);
    var exports = receiveInstantiationResult(result);
    return exports;
  }
  __name(createWasm, "createWasm");
  class ExitStatus {
    static {
      __name(this, "ExitStatus");
    }
    name = "ExitStatus";
    constructor(status) {
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }
  }
  var GOT = {};
  var currentModuleWeakSymbols = /* @__PURE__ */ new Set([]);
  var GOTHandler = {
    get(obj, symName) {
      var rtn = GOT[symName];
      if (!rtn) {
        rtn = GOT[symName] = new WebAssembly.Global({
          "value": "i32",
          "mutable": true
        });
      }
      if (!currentModuleWeakSymbols.has(symName)) {
        rtn.required = true;
      }
      return rtn;
    }
  };
  var LE_ATOMICS_NATIVE_BYTE_ORDER = [];
  var LE_HEAP_LOAD_F32 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getFloat32(byteOffset, true), "LE_HEAP_LOAD_F32");
  var LE_HEAP_LOAD_F64 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getFloat64(byteOffset, true), "LE_HEAP_LOAD_F64");
  var LE_HEAP_LOAD_I16 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getInt16(byteOffset, true), "LE_HEAP_LOAD_I16");
  var LE_HEAP_LOAD_I32 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getInt32(byteOffset, true), "LE_HEAP_LOAD_I32");
  var LE_HEAP_LOAD_I64 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getBigInt64(byteOffset, true), "LE_HEAP_LOAD_I64");
  var LE_HEAP_LOAD_U32 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getUint32(byteOffset, true), "LE_HEAP_LOAD_U32");
  var LE_HEAP_STORE_F32 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setFloat32(byteOffset, value, true), "LE_HEAP_STORE_F32");
  var LE_HEAP_STORE_F64 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setFloat64(byteOffset, value, true), "LE_HEAP_STORE_F64");
  var LE_HEAP_STORE_I16 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setInt16(byteOffset, value, true), "LE_HEAP_STORE_I16");
  var LE_HEAP_STORE_I32 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setInt32(byteOffset, value, true), "LE_HEAP_STORE_I32");
  var LE_HEAP_STORE_I64 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setBigInt64(byteOffset, value, true), "LE_HEAP_STORE_I64");
  var LE_HEAP_STORE_U32 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setUint32(byteOffset, value, true), "LE_HEAP_STORE_U32");
  var callRuntimeCallbacks = /* @__PURE__ */ __name((callbacks) => {
    while (callbacks.length > 0) {
      callbacks.shift()(Module);
    }
  }, "callRuntimeCallbacks");
  var onPostRuns = [];
  var addOnPostRun = /* @__PURE__ */ __name((cb) => onPostRuns.push(cb), "addOnPostRun");
  var onPreRuns = [];
  var addOnPreRun = /* @__PURE__ */ __name((cb) => onPreRuns.push(cb), "addOnPreRun");
  var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder() : void 0;
  var findStringEnd = /* @__PURE__ */ __name((heapOrArray, idx, maxBytesToRead, ignoreNul) => {
    var maxIdx = idx + maxBytesToRead;
    if (ignoreNul) return maxIdx;
    while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
    return idx;
  }, "findStringEnd");
  var UTF8ArrayToString = /* @__PURE__ */ __name((heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
    var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
    if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
      return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
    }
    var str = "";
    while (idx < endPtr) {
      var u0 = heapOrArray[idx++];
      if (!(u0 & 128)) {
        str += String.fromCharCode(u0);
        continue;
      }
      var u1 = heapOrArray[idx++] & 63;
      if ((u0 & 224) == 192) {
        str += String.fromCharCode((u0 & 31) << 6 | u1);
        continue;
      }
      var u2 = heapOrArray[idx++] & 63;
      if ((u0 & 240) == 224) {
        u0 = (u0 & 15) << 12 | u1 << 6 | u2;
      } else {
        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
      }
      if (u0 < 65536) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 65536;
        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
      }
    }
    return str;
  }, "UTF8ArrayToString");
  var getDylinkMetadata = /* @__PURE__ */ __name((binary2) => {
    var offset = 0;
    var end = 0;
    function getU8() {
      return binary2[offset++];
    }
    __name(getU8, "getU8");
    function getLEB() {
      var ret = 0;
      var mul = 1;
      while (1) {
        var byte = binary2[offset++];
        ret += (byte & 127) * mul;
        mul *= 128;
        if (!(byte & 128)) break;
      }
      return ret;
    }
    __name(getLEB, "getLEB");
    function getString() {
      var len = getLEB();
      offset += len;
      return UTF8ArrayToString(binary2, offset - len, len);
    }
    __name(getString, "getString");
    function getStringList() {
      var count2 = getLEB();
      var rtn = [];
      while (count2--) rtn.push(getString());
      return rtn;
    }
    __name(getStringList, "getStringList");
    function failIf(condition, message) {
      if (condition) throw new Error(message);
    }
    __name(failIf, "failIf");
    if (binary2 instanceof WebAssembly.Module) {
      var dylinkSection = WebAssembly.Module.customSections(binary2, "dylink.0");
      failIf(dylinkSection.length === 0, "need dylink section");
      binary2 = new Uint8Array(dylinkSection[0]);
      end = binary2.length;
    } else {
      var int32View = new Uint32Array(new Uint8Array(binary2.subarray(0, 24)).buffer);
      var magicNumberFound = int32View[0] == 1836278016 || int32View[0] == 6386541;
      failIf(!magicNumberFound, "need to see wasm magic number");
      failIf(binary2[8] !== 0, "need the dylink section to be first");
      offset = 9;
      var section_size = getLEB();
      end = offset + section_size;
      var name2 = getString();
      failIf(name2 !== "dylink.0");
    }
    var customSection = {
      neededDynlibs: [],
      tlsExports: /* @__PURE__ */ new Set(),
      weakImports: /* @__PURE__ */ new Set(),
      runtimePaths: []
    };
    var WASM_DYLINK_MEM_INFO = 1;
    var WASM_DYLINK_NEEDED = 2;
    var WASM_DYLINK_EXPORT_INFO = 3;
    var WASM_DYLINK_IMPORT_INFO = 4;
    var WASM_DYLINK_RUNTIME_PATH = 5;
    var WASM_SYMBOL_TLS = 256;
    var WASM_SYMBOL_BINDING_MASK = 3;
    var WASM_SYMBOL_BINDING_WEAK = 1;
    while (offset < end) {
      var subsectionType = getU8();
      var subsectionSize = getLEB();
      if (subsectionType === WASM_DYLINK_MEM_INFO) {
        customSection.memorySize = getLEB();
        customSection.memoryAlign = getLEB();
        customSection.tableSize = getLEB();
        customSection.tableAlign = getLEB();
      } else if (subsectionType === WASM_DYLINK_NEEDED) {
        customSection.neededDynlibs = getStringList();
      } else if (subsectionType === WASM_DYLINK_EXPORT_INFO) {
        var count = getLEB();
        while (count--) {
          var symname = getString();
          var flags2 = getLEB();
          if (flags2 & WASM_SYMBOL_TLS) {
            customSection.tlsExports.add(symname);
          }
        }
      } else if (subsectionType === WASM_DYLINK_IMPORT_INFO) {
        var count = getLEB();
        while (count--) {
          var modname = getString();
          var symname = getString();
          var flags2 = getLEB();
          if ((flags2 & WASM_SYMBOL_BINDING_MASK) == WASM_SYMBOL_BINDING_WEAK) {
            customSection.weakImports.add(symname);
          }
        }
      } else if (subsectionType === WASM_DYLINK_RUNTIME_PATH) {
        customSection.runtimePaths = getStringList();
      } else {
        offset += subsectionSize;
      }
    }
    return customSection;
  }, "getDylinkMetadata");
  function getValue(ptr, type = "i8") {
    if (type.endsWith("*")) type = "*";
    switch (type) {
      case "i1":
        return HEAP8[ptr];
      case "i8":
        return HEAP8[ptr];
      case "i16":
        return LE_HEAP_LOAD_I16((ptr >> 1) * 2);
      case "i32":
        return LE_HEAP_LOAD_I32((ptr >> 2) * 4);
      case "i64":
        return LE_HEAP_LOAD_I64((ptr >> 3) * 8);
      case "float":
        return LE_HEAP_LOAD_F32((ptr >> 2) * 4);
      case "double":
        return LE_HEAP_LOAD_F64((ptr >> 3) * 8);
      case "*":
        return LE_HEAP_LOAD_U32((ptr >> 2) * 4);
      default:
        abort(`invalid type for getValue: ${type}`);
    }
  }
  __name(getValue, "getValue");
  var newDSO = /* @__PURE__ */ __name((name2, handle2, syms) => {
    var dso = {
      refcount: Infinity,
      name: name2,
      exports: syms,
      global: true
    };
    LDSO.loadedLibsByName[name2] = dso;
    if (handle2 != void 0) {
      LDSO.loadedLibsByHandle[handle2] = dso;
    }
    return dso;
  }, "newDSO");
  var LDSO = {
    loadedLibsByName: {},
    loadedLibsByHandle: {},
    init() {
      newDSO("__main__", 0, wasmImports);
    }
  };
  var ___heap_base = 82240;
  var alignMemory = /* @__PURE__ */ __name((size, alignment) => Math.ceil(size / alignment) * alignment, "alignMemory");
  var getMemory = /* @__PURE__ */ __name((size) => {
    if (runtimeInitialized) {
      return _calloc(size, 1);
    }
    var ret = ___heap_base;
    var end = ret + alignMemory(size, 16);
    ___heap_base = end;
    GOT["__heap_base"].value = end;
    return ret;
  }, "getMemory");
  var isInternalSym = /* @__PURE__ */ __name((symName) => ["__cpp_exception", "__c_longjmp", "__wasm_apply_data_relocs", "__dso_handle", "__tls_size", "__tls_align", "__set_stack_limits", "_emscripten_tls_init", "__wasm_init_tls", "__wasm_call_ctors", "__start_em_asm", "__stop_em_asm", "__start_em_js", "__stop_em_js"].includes(symName) || symName.startsWith("__em_js__"), "isInternalSym");
  var uleb128EncodeWithLen = /* @__PURE__ */ __name((arr) => {
    const n2 = arr.length;
    return [n2 % 128 | 128, n2 >> 7, ...arr];
  }, "uleb128EncodeWithLen");
  var wasmTypeCodes = {
    "i": 127,
    // i32
    "p": 127,
    // i32
    "j": 126,
    // i64
    "f": 125,
    // f32
    "d": 124,
    // f64
    "e": 111
  };
  var generateTypePack = /* @__PURE__ */ __name((types) => uleb128EncodeWithLen(Array.from(types, (type) => {
    var code = wasmTypeCodes[type];
    return code;
  })), "generateTypePack");
  var convertJsFunctionToWasm = /* @__PURE__ */ __name((func2, sig) => {
    var bytes = Uint8Array.of(
      0,
      97,
      115,
      109,
      // magic ("\0asm")
      1,
      0,
      0,
      0,
      // version: 1
      1,
      ...uleb128EncodeWithLen([
        1,
        // count: 1
        96,
        // param types
        ...generateTypePack(sig.slice(1)),
        // return types (for now only supporting [] if `void` and single [T] otherwise)
        ...generateTypePack(sig[0] === "v" ? "" : sig[0])
      ]),
      // The rest of the module is static
      2,
      7,
      // import section
      // (import "e" "f" (func 0 (type 0)))
      1,
      1,
      101,
      1,
      102,
      0,
      0,
      7,
      5,
      // export section
      // (export "f" (func 0 (type 0)))
      1,
      1,
      102,
      0,
      0
    );
    var module2 = new WebAssembly.Module(bytes);
    var instance2 = new WebAssembly.Instance(module2, {
      "e": {
        "f": func2
      }
    });
    var wrappedFunc = instance2.exports["f"];
    return wrappedFunc;
  }, "convertJsFunctionToWasm");
  var wasmTableMirror = [];
  var wasmTable = new WebAssembly.Table({
    "initial": 31,
    "element": "anyfunc"
  });
  var getWasmTableEntry = /* @__PURE__ */ __name((funcPtr) => {
    var func2 = wasmTableMirror[funcPtr];
    if (!func2) {
      wasmTableMirror[funcPtr] = func2 = wasmTable.get(funcPtr);
    }
    return func2;
  }, "getWasmTableEntry");
  var updateTableMap = /* @__PURE__ */ __name((offset, count) => {
    if (functionsInTableMap) {
      for (var i22 = offset; i22 < offset + count; i22++) {
        var item2 = getWasmTableEntry(i22);
        if (item2) {
          functionsInTableMap.set(item2, i22);
        }
      }
    }
  }, "updateTableMap");
  var functionsInTableMap;
  var getFunctionAddress = /* @__PURE__ */ __name((func2) => {
    if (!functionsInTableMap) {
      functionsInTableMap = /* @__PURE__ */ new WeakMap();
      updateTableMap(0, wasmTable.length);
    }
    return functionsInTableMap.get(func2) || 0;
  }, "getFunctionAddress");
  var freeTableIndexes = [];
  var getEmptyTableSlot = /* @__PURE__ */ __name(() => {
    if (freeTableIndexes.length) {
      return freeTableIndexes.pop();
    }
    return wasmTable["grow"](1);
  }, "getEmptyTableSlot");
  var setWasmTableEntry = /* @__PURE__ */ __name((idx, func2) => {
    wasmTable.set(idx, func2);
    wasmTableMirror[idx] = wasmTable.get(idx);
  }, "setWasmTableEntry");
  var addFunction = /* @__PURE__ */ __name((func2, sig) => {
    var rtn = getFunctionAddress(func2);
    if (rtn) {
      return rtn;
    }
    var ret = getEmptyTableSlot();
    try {
      setWasmTableEntry(ret, func2);
    } catch (err2) {
      if (!(err2 instanceof TypeError)) {
        throw err2;
      }
      var wrapped = convertJsFunctionToWasm(func2, sig);
      setWasmTableEntry(ret, wrapped);
    }
    functionsInTableMap.set(func2, ret);
    return ret;
  }, "addFunction");
  var updateGOT = /* @__PURE__ */ __name((exports, replace) => {
    for (var symName in exports) {
      if (isInternalSym(symName)) {
        continue;
      }
      var value = exports[symName];
      GOT[symName] ||= new WebAssembly.Global({
        "value": "i32",
        "mutable": true
      });
      if (replace || GOT[symName].value == 0) {
        if (typeof value == "function") {
          GOT[symName].value = addFunction(value);
        } else if (typeof value == "number") {
          GOT[symName].value = value;
        } else {
          err(`unhandled export type for '${symName}': ${typeof value}`);
        }
      }
    }
  }, "updateGOT");
  var relocateExports = /* @__PURE__ */ __name((exports, memoryBase2, replace) => {
    var relocated = {};
    for (var e2 in exports) {
      var value = exports[e2];
      if (typeof value == "object") {
        value = value.value;
      }
      if (typeof value == "number") {
        value += memoryBase2;
      }
      relocated[e2] = value;
    }
    updateGOT(relocated, replace);
    return relocated;
  }, "relocateExports");
  var isSymbolDefined = /* @__PURE__ */ __name((symName) => {
    var existing = wasmImports[symName];
    if (!existing || existing.stub) {
      return false;
    }
    return true;
  }, "isSymbolDefined");
  var dynCall = /* @__PURE__ */ __name((sig, ptr, args2 = [], promising = false) => {
    var func2 = getWasmTableEntry(ptr);
    var rtn = func2(...args2);
    function convert(rtn2) {
      return rtn2;
    }
    __name(convert, "convert");
    return convert(rtn);
  }, "dynCall");
  var stackSave = /* @__PURE__ */ __name(() => _emscripten_stack_get_current(), "stackSave");
  var stackRestore = /* @__PURE__ */ __name((val) => __emscripten_stack_restore(val), "stackRestore");
  var createInvokeFunction = /* @__PURE__ */ __name((sig) => (ptr, ...args2) => {
    var sp = stackSave();
    try {
      return dynCall(sig, ptr, args2);
    } catch (e2) {
      stackRestore(sp);
      if (e2 !== e2 + 0) throw e2;
      _setThrew(1, 0);
      if (sig[0] == "j") return 0n;
    }
  }, "createInvokeFunction");
  var resolveGlobalSymbol = /* @__PURE__ */ __name((symName, direct = false) => {
    var sym;
    if (isSymbolDefined(symName)) {
      sym = wasmImports[symName];
    } else if (symName.startsWith("invoke_")) {
      sym = wasmImports[symName] = createInvokeFunction(symName.split("_")[1]);
    }
    return {
      sym,
      name: symName
    };
  }, "resolveGlobalSymbol");
  var onPostCtors = [];
  var addOnPostCtor = /* @__PURE__ */ __name((cb) => onPostCtors.push(cb), "addOnPostCtor");
  var UTF8ToString = /* @__PURE__ */ __name((ptr, maxBytesToRead, ignoreNul) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : "", "UTF8ToString");
  var loadWebAssemblyModule = /* @__PURE__ */ __name((binary, flags, libName, localScope, handle) => {
    var metadata = getDylinkMetadata(binary);
    function loadModule() {
      var memAlign = Math.pow(2, metadata.memoryAlign);
      var memoryBase = metadata.memorySize ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign) : 0;
      var tableBase = metadata.tableSize ? wasmTable.length : 0;
      if (handle) {
        HEAP8[handle + 8] = 1;
        LE_HEAP_STORE_U32((handle + 12 >> 2) * 4, memoryBase);
        LE_HEAP_STORE_I32((handle + 16 >> 2) * 4, metadata.memorySize);
        LE_HEAP_STORE_U32((handle + 20 >> 2) * 4, tableBase);
        LE_HEAP_STORE_I32((handle + 24 >> 2) * 4, metadata.tableSize);
      }
      if (metadata.tableSize) {
        wasmTable.grow(metadata.tableSize);
      }
      var moduleExports;
      function resolveSymbol(sym) {
        var resolved = resolveGlobalSymbol(sym).sym;
        if (!resolved && localScope) {
          resolved = localScope[sym];
        }
        if (!resolved) {
          resolved = moduleExports[sym];
        }
        return resolved;
      }
      __name(resolveSymbol, "resolveSymbol");
      var proxyHandler = {
        get(stubs, prop) {
          switch (prop) {
            case "__memory_base":
              return memoryBase;
            case "__table_base":
              return tableBase;
          }
          if (prop in wasmImports && !wasmImports[prop].stub) {
            var res = wasmImports[prop];
            return res;
          }
          if (!(prop in stubs)) {
            var resolved;
            stubs[prop] = (...args2) => {
              resolved ||= resolveSymbol(prop);
              return resolved(...args2);
            };
          }
          return stubs[prop];
        }
      };
      var proxy = new Proxy({}, proxyHandler);
      currentModuleWeakSymbols = metadata.weakImports;
      var info = {
        "GOT.mem": new Proxy({}, GOTHandler),
        "GOT.func": new Proxy({}, GOTHandler),
        "env": proxy,
        "wasi_snapshot_preview1": proxy
      };
      function postInstantiation(module, instance) {
        updateTableMap(tableBase, metadata.tableSize);
        moduleExports = relocateExports(instance.exports, memoryBase);
        if (!flags.allowUndefined) {
          reportUndefinedSymbols();
        }
        function addEmAsm(addr, body) {
          var args = [];
          var arity = 0;
          for (; arity < 16; arity++) {
            if (body.indexOf("$" + arity) != -1) {
              args.push("$" + arity);
            } else {
              break;
            }
          }
          args = args.join(",");
          var func = `(${args}) => { ${body} };`;
          ASM_CONSTS[start] = eval(func);
        }
        __name(addEmAsm, "addEmAsm");
        if ("__start_em_asm" in moduleExports) {
          var start = moduleExports["__start_em_asm"];
          var stop = moduleExports["__stop_em_asm"];
          while (start < stop) {
            var jsString = UTF8ToString(start);
            addEmAsm(start, jsString);
            start = HEAPU8.indexOf(0, start) + 1;
          }
        }
        function addEmJs(name, cSig, body) {
          var jsArgs = [];
          cSig = cSig.slice(1, -1);
          if (cSig != "void") {
            cSig = cSig.split(",");
            for (var i in cSig) {
              var jsArg = cSig[i].split(" ").pop();
              jsArgs.push(jsArg.replace("*", ""));
            }
          }
          var func = `(${jsArgs}) => ${body};`;
          moduleExports[name] = eval(func);
        }
        __name(addEmJs, "addEmJs");
        for (var name in moduleExports) {
          if (name.startsWith("__em_js__")) {
            var start = moduleExports[name];
            var jsString = UTF8ToString(start);
            var parts = jsString.split("<::>");
            addEmJs(name.replace("__em_js__", ""), parts[0], parts[1]);
            delete moduleExports[name];
          }
        }
        var applyRelocs = moduleExports["__wasm_apply_data_relocs"];
        if (applyRelocs) {
          if (runtimeInitialized) {
            applyRelocs();
          } else {
            __RELOC_FUNCS__.push(applyRelocs);
          }
        }
        var init = moduleExports["__wasm_call_ctors"];
        if (init) {
          if (runtimeInitialized) {
            init();
          } else {
            addOnPostCtor(init);
          }
        }
        return moduleExports;
      }
      __name(postInstantiation, "postInstantiation");
      if (flags.loadAsync) {
        return (async () => {
          var instance2;
          if (binary instanceof WebAssembly.Module) {
            instance2 = new WebAssembly.Instance(binary, info);
          } else {
            ({ module: binary, instance: instance2 } = await WebAssembly.instantiate(binary, info));
          }
          return postInstantiation(binary, instance2);
        })();
      }
      var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary);
      var instance = new WebAssembly.Instance(module, info);
      return postInstantiation(module, instance);
    }
    __name(loadModule, "loadModule");
    flags = {
      ...flags,
      rpath: {
        parentLibPath: libName,
        paths: metadata.runtimePaths
      }
    };
    if (flags.loadAsync) {
      return metadata.neededDynlibs.reduce((chain, dynNeeded) => chain.then(() => loadDynamicLibrary(dynNeeded, flags, localScope)), Promise.resolve()).then(loadModule);
    }
    metadata.neededDynlibs.forEach((needed) => loadDynamicLibrary(needed, flags, localScope));
    return loadModule();
  }, "loadWebAssemblyModule");
  var mergeLibSymbols = /* @__PURE__ */ __name((exports, libName2) => {
    for (var [sym, exp] of Object.entries(exports)) {
      const setImport = /* @__PURE__ */ __name((target) => {
        if (!isSymbolDefined(target)) {
          wasmImports[target] = exp;
        }
      }, "setImport");
      setImport(sym);
      const main_alias = "__main_argc_argv";
      if (sym == "main") {
        setImport(main_alias);
      }
      if (sym == main_alias) {
        setImport("main");
      }
    }
  }, "mergeLibSymbols");
  var asyncLoad = /* @__PURE__ */ __name(async (url) => {
    var arrayBuffer = await readAsync(url);
    return new Uint8Array(arrayBuffer);
  }, "asyncLoad");
  function loadDynamicLibrary(libName2, flags2 = {
    global: true,
    nodelete: true
  }, localScope2, handle2) {
    var dso = LDSO.loadedLibsByName[libName2];
    if (dso) {
      if (!flags2.global) {
        if (localScope2) {
          Object.assign(localScope2, dso.exports);
        }
      } else if (!dso.global) {
        dso.global = true;
        mergeLibSymbols(dso.exports, libName2);
      }
      if (flags2.nodelete && dso.refcount !== Infinity) {
        dso.refcount = Infinity;
      }
      dso.refcount++;
      if (handle2) {
        LDSO.loadedLibsByHandle[handle2] = dso;
      }
      return flags2.loadAsync ? Promise.resolve(true) : true;
    }
    dso = newDSO(libName2, handle2, "loading");
    dso.refcount = flags2.nodelete ? Infinity : 1;
    dso.global = flags2.global;
    function loadLibData() {
      if (handle2) {
        var data = LE_HEAP_LOAD_U32((handle2 + 28 >> 2) * 4);
        var dataSize = LE_HEAP_LOAD_U32((handle2 + 32 >> 2) * 4);
        if (data && dataSize) {
          var libData = HEAP8.slice(data, data + dataSize);
          return flags2.loadAsync ? Promise.resolve(libData) : libData;
        }
      }
      var libFile = locateFile(libName2);
      if (flags2.loadAsync) {
        return asyncLoad(libFile);
      }
      if (!readBinary) {
        throw new Error(`${libFile}: file not found, and synchronous loading of external files is not available`);
      }
      return readBinary(libFile);
    }
    __name(loadLibData, "loadLibData");
    function getExports() {
      if (flags2.loadAsync) {
        return loadLibData().then((libData) => loadWebAssemblyModule(libData, flags2, libName2, localScope2, handle2));
      }
      return loadWebAssemblyModule(loadLibData(), flags2, libName2, localScope2, handle2);
    }
    __name(getExports, "getExports");
    function moduleLoaded(exports) {
      if (dso.global) {
        mergeLibSymbols(exports, libName2);
      } else if (localScope2) {
        Object.assign(localScope2, exports);
      }
      dso.exports = exports;
    }
    __name(moduleLoaded, "moduleLoaded");
    if (flags2.loadAsync) {
      return getExports().then((exports) => {
        moduleLoaded(exports);
        return true;
      });
    }
    moduleLoaded(getExports());
    return true;
  }
  __name(loadDynamicLibrary, "loadDynamicLibrary");
  var reportUndefinedSymbols = /* @__PURE__ */ __name(() => {
    for (var [symName, entry] of Object.entries(GOT)) {
      if (entry.value == 0) {
        var value = resolveGlobalSymbol(symName, true).sym;
        if (!value && !entry.required) {
          continue;
        }
        if (typeof value == "function") {
          entry.value = addFunction(value, value.sig);
        } else if (typeof value == "number") {
          entry.value = value;
        } else {
          throw new Error(`bad export type for '${symName}': ${typeof value}`);
        }
      }
    }
  }, "reportUndefinedSymbols");
  var runDependencies = 0;
  var dependenciesFulfilled = null;
  var removeRunDependency = /* @__PURE__ */ __name((id) => {
    runDependencies--;
    Module["monitorRunDependencies"]?.(runDependencies);
    if (runDependencies == 0) {
      if (dependenciesFulfilled) {
        var callback = dependenciesFulfilled;
        dependenciesFulfilled = null;
        callback();
      }
    }
  }, "removeRunDependency");
  var addRunDependency = /* @__PURE__ */ __name((id) => {
    runDependencies++;
    Module["monitorRunDependencies"]?.(runDependencies);
  }, "addRunDependency");
  var loadDylibs = /* @__PURE__ */ __name(async () => {
    if (!dynamicLibraries.length) {
      reportUndefinedSymbols();
      return;
    }
    addRunDependency("loadDylibs");
    for (var lib of dynamicLibraries) {
      await loadDynamicLibrary(lib, {
        loadAsync: true,
        global: true,
        nodelete: true,
        allowUndefined: true
      });
    }
    reportUndefinedSymbols();
    removeRunDependency("loadDylibs");
  }, "loadDylibs");
  var noExitRuntime = true;
  function setValue(ptr, value, type = "i8") {
    if (type.endsWith("*")) type = "*";
    switch (type) {
      case "i1":
        HEAP8[ptr] = value;
        break;
      case "i8":
        HEAP8[ptr] = value;
        break;
      case "i16":
        LE_HEAP_STORE_I16((ptr >> 1) * 2, value);
        break;
      case "i32":
        LE_HEAP_STORE_I32((ptr >> 2) * 4, value);
        break;
      case "i64":
        LE_HEAP_STORE_I64((ptr >> 3) * 8, BigInt(value));
        break;
      case "float":
        LE_HEAP_STORE_F32((ptr >> 2) * 4, value);
        break;
      case "double":
        LE_HEAP_STORE_F64((ptr >> 3) * 8, value);
        break;
      case "*":
        LE_HEAP_STORE_U32((ptr >> 2) * 4, value);
        break;
      default:
        abort(`invalid type for setValue: ${type}`);
    }
  }
  __name(setValue, "setValue");
  var ___memory_base = new WebAssembly.Global({
    "value": "i32",
    "mutable": false
  }, 1024);
  var ___stack_high = 82240;
  var ___stack_low = 16704;
  var ___stack_pointer = new WebAssembly.Global({
    "value": "i32",
    "mutable": true
  }, 82240);
  var ___table_base = new WebAssembly.Global({
    "value": "i32",
    "mutable": false
  }, 1);
  var __abort_js = /* @__PURE__ */ __name(() => abort(""), "__abort_js");
  __abort_js.sig = "v";
  var getHeapMax = /* @__PURE__ */ __name(() => (
    // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
    // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
    // for any code that deals with heap sizes, which would require special
    // casing all heap size related code to treat 0 specially.
    2147483648
  ), "getHeapMax");
  var growMemory = /* @__PURE__ */ __name((size) => {
    var oldHeapSize = wasmMemory.buffer.byteLength;
    var pages = (size - oldHeapSize + 65535) / 65536 | 0;
    try {
      wasmMemory.grow(pages);
      updateMemoryViews();
      return 1;
    } catch (e2) {
    }
  }, "growMemory");
  var _emscripten_resize_heap = /* @__PURE__ */ __name((requestedSize) => {
    var oldSize = HEAPU8.length;
    requestedSize >>>= 0;
    var maxHeapSize = getHeapMax();
    if (requestedSize > maxHeapSize) {
      return false;
    }
    for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
      var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
      overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
      var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
      var replacement = growMemory(newSize);
      if (replacement) {
        return true;
      }
    }
    return false;
  }, "_emscripten_resize_heap");
  _emscripten_resize_heap.sig = "ip";
  var _fd_close = /* @__PURE__ */ __name((fd) => 52, "_fd_close");
  _fd_close.sig = "ii";
  var INT53_MAX = 9007199254740992;
  var INT53_MIN = -9007199254740992;
  var bigintToI53Checked = /* @__PURE__ */ __name((num) => num < INT53_MIN || num > INT53_MAX ? NaN : Number(num), "bigintToI53Checked");
  function _fd_seek(fd, offset, whence, newOffset) {
    offset = bigintToI53Checked(offset);
    return 70;
  }
  __name(_fd_seek, "_fd_seek");
  _fd_seek.sig = "iijip";
  var printCharBuffers = [null, [], []];
  var printChar = /* @__PURE__ */ __name((stream, curr) => {
    var buffer = printCharBuffers[stream];
    if (curr === 0 || curr === 10) {
      (stream === 1 ? out : err)(UTF8ArrayToString(buffer));
      buffer.length = 0;
    } else {
      buffer.push(curr);
    }
  }, "printChar");
  var _fd_write = /* @__PURE__ */ __name((fd, iov, iovcnt, pnum) => {
    var num = 0;
    for (var i22 = 0; i22 < iovcnt; i22++) {
      var ptr = LE_HEAP_LOAD_U32((iov >> 2) * 4);
      var len = LE_HEAP_LOAD_U32((iov + 4 >> 2) * 4);
      iov += 8;
      for (var j = 0; j < len; j++) {
        printChar(fd, HEAPU8[ptr + j]);
      }
      num += len;
    }
    LE_HEAP_STORE_U32((pnum >> 2) * 4, num);
    return 0;
  }, "_fd_write");
  _fd_write.sig = "iippp";
  function _tree_sitter_log_callback(isLexMessage, messageAddress) {
    if (Module.currentLogCallback) {
      const message = UTF8ToString(messageAddress);
      Module.currentLogCallback(message, isLexMessage !== 0);
    }
  }
  __name(_tree_sitter_log_callback, "_tree_sitter_log_callback");
  function _tree_sitter_parse_callback(inputBufferAddress, index2, row, column, lengthAddress) {
    const INPUT_BUFFER_SIZE = 10 * 1024;
    const string = Module.currentParseCallback(index2, {
      row,
      column
    });
    if (typeof string === "string") {
      setValue(lengthAddress, string.length, "i32");
      stringToUTF16(string, inputBufferAddress, INPUT_BUFFER_SIZE);
    } else {
      setValue(lengthAddress, 0, "i32");
    }
  }
  __name(_tree_sitter_parse_callback, "_tree_sitter_parse_callback");
  function _tree_sitter_progress_callback(currentOffset, hasError) {
    if (Module.currentProgressCallback) {
      return Module.currentProgressCallback({
        currentOffset,
        hasError
      });
    }
    return false;
  }
  __name(_tree_sitter_progress_callback, "_tree_sitter_progress_callback");
  function _tree_sitter_query_progress_callback(currentOffset) {
    if (Module.currentQueryProgressCallback) {
      return Module.currentQueryProgressCallback({
        currentOffset
      });
    }
    return false;
  }
  __name(_tree_sitter_query_progress_callback, "_tree_sitter_query_progress_callback");
  var runtimeKeepaliveCounter = 0;
  var keepRuntimeAlive = /* @__PURE__ */ __name(() => noExitRuntime || runtimeKeepaliveCounter > 0, "keepRuntimeAlive");
  var _proc_exit = /* @__PURE__ */ __name((code) => {
    EXITSTATUS = code;
    if (!keepRuntimeAlive()) {
      Module["onExit"]?.(code);
      ABORT = true;
    }
    quit_(code, new ExitStatus(code));
  }, "_proc_exit");
  _proc_exit.sig = "vi";
  var exitJS = /* @__PURE__ */ __name((status, implicit) => {
    EXITSTATUS = status;
    _proc_exit(status);
  }, "exitJS");
  var handleException = /* @__PURE__ */ __name((e2) => {
    if (e2 instanceof ExitStatus || e2 == "unwind") {
      return EXITSTATUS;
    }
    quit_(1, e2);
  }, "handleException");
  var lengthBytesUTF8 = /* @__PURE__ */ __name((str) => {
    var len = 0;
    for (var i22 = 0; i22 < str.length; ++i22) {
      var c2 = str.charCodeAt(i22);
      if (c2 <= 127) {
        len++;
      } else if (c2 <= 2047) {
        len += 2;
      } else if (c2 >= 55296 && c2 <= 57343) {
        len += 4;
        ++i22;
      } else {
        len += 3;
      }
    }
    return len;
  }, "lengthBytesUTF8");
  var stringToUTF8Array = /* @__PURE__ */ __name((str, heap, outIdx, maxBytesToWrite) => {
    if (!(maxBytesToWrite > 0)) return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1;
    for (var i22 = 0; i22 < str.length; ++i22) {
      var u2 = str.codePointAt(i22);
      if (u2 <= 127) {
        if (outIdx >= endIdx) break;
        heap[outIdx++] = u2;
      } else if (u2 <= 2047) {
        if (outIdx + 1 >= endIdx) break;
        heap[outIdx++] = 192 | u2 >> 6;
        heap[outIdx++] = 128 | u2 & 63;
      } else if (u2 <= 65535) {
        if (outIdx + 2 >= endIdx) break;
        heap[outIdx++] = 224 | u2 >> 12;
        heap[outIdx++] = 128 | u2 >> 6 & 63;
        heap[outIdx++] = 128 | u2 & 63;
      } else {
        if (outIdx + 3 >= endIdx) break;
        heap[outIdx++] = 240 | u2 >> 18;
        heap[outIdx++] = 128 | u2 >> 12 & 63;
        heap[outIdx++] = 128 | u2 >> 6 & 63;
        heap[outIdx++] = 128 | u2 & 63;
        i22++;
      }
    }
    heap[outIdx] = 0;
    return outIdx - startIdx;
  }, "stringToUTF8Array");
  var stringToUTF8 = /* @__PURE__ */ __name((str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite), "stringToUTF8");
  var stackAlloc = /* @__PURE__ */ __name((sz) => __emscripten_stack_alloc(sz), "stackAlloc");
  var stringToUTF8OnStack = /* @__PURE__ */ __name((str) => {
    var size = lengthBytesUTF8(str) + 1;
    var ret = stackAlloc(size);
    stringToUTF8(str, ret, size);
    return ret;
  }, "stringToUTF8OnStack");
  var AsciiToString = /* @__PURE__ */ __name((ptr) => {
    var str = "";
    while (1) {
      var ch = HEAPU8[ptr++];
      if (!ch) return str;
      str += String.fromCharCode(ch);
    }
  }, "AsciiToString");
  var stringToUTF16 = /* @__PURE__ */ __name((str, outPtr, maxBytesToWrite) => {
    maxBytesToWrite ??= 2147483647;
    if (maxBytesToWrite < 2) return 0;
    maxBytesToWrite -= 2;
    var startPtr = outPtr;
    var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
    for (var i22 = 0; i22 < numCharsToWrite; ++i22) {
      var codeUnit = str.charCodeAt(i22);
      LE_HEAP_STORE_I16((outPtr >> 1) * 2, codeUnit);
      outPtr += 2;
    }
    LE_HEAP_STORE_I16((outPtr >> 1) * 2, 0);
    return outPtr - startPtr;
  }, "stringToUTF16");
  LE_ATOMICS_NATIVE_BYTE_ORDER = new Int8Array(new Int16Array([1]).buffer)[0] === 1 ? [
    /* little endian */
    ((x2) => x2),
    ((x2) => x2),
    void 0,
    ((x2) => x2)
  ] : [
    /* big endian */
    ((x2) => x2),
    ((x2) => ((x2 & 65280) << 8 | (x2 & 255) << 24) >> 16),
    void 0,
    ((x2) => x2 >> 24 & 255 | x2 >> 8 & 65280 | (x2 & 65280) << 8 | (x2 & 255) << 24)
  ];
  function LE_HEAP_UPDATE() {
    HEAPU16.unsigned = ((x2) => x2 & 65535);
    HEAPU32.unsigned = ((x2) => x2 >>> 0);
  }
  __name(LE_HEAP_UPDATE, "LE_HEAP_UPDATE");
  {
    initMemory();
    if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
    if (Module["print"]) out = Module["print"];
    if (Module["printErr"]) err = Module["printErr"];
    if (Module["dynamicLibraries"]) dynamicLibraries = Module["dynamicLibraries"];
    if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
    if (Module["arguments"]) arguments_ = Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].shift()();
      }
    }
  }
  Module["setValue"] = setValue;
  Module["getValue"] = getValue;
  Module["UTF8ToString"] = UTF8ToString;
  Module["stringToUTF8"] = stringToUTF8;
  Module["lengthBytesUTF8"] = lengthBytesUTF8;
  Module["AsciiToString"] = AsciiToString;
  Module["stringToUTF16"] = stringToUTF16;
  Module["loadWebAssemblyModule"] = loadWebAssemblyModule;
  Module["LE_HEAP_STORE_I64"] = LE_HEAP_STORE_I64;
  var ASM_CONSTS = {};
  var _malloc, _calloc, _realloc, _free, _ts_range_edit, _memcmp, _ts_language_symbol_count, _ts_language_state_count, _ts_language_abi_version, _ts_language_name, _ts_language_field_count, _ts_language_next_state, _ts_language_symbol_name, _ts_language_symbol_for_name, _strncmp, _strlen, _ts_language_symbol_type, _ts_language_field_name_for_id, _ts_lookahead_iterator_new, _ts_lookahead_iterator_delete, _ts_lookahead_iterator_reset_state, _ts_lookahead_iterator_reset, _ts_lookahead_iterator_next, _ts_lookahead_iterator_current_symbol, _ts_point_edit, _ts_parser_delete, _ts_parser_reset, _ts_parser_set_language, _ts_parser_set_included_ranges, _ts_query_new, _ts_query_delete, _iswspace, _iswalnum, _ts_query_copy, _ts_query_pattern_count, _ts_query_capture_count, _ts_query_string_count, _ts_query_capture_name_for_id, _ts_query_capture_quantifier_for_id, _ts_query_string_value_for_id, _ts_query_predicates_for_pattern, _ts_query_start_byte_for_pattern, _ts_query_end_byte_for_pattern, _ts_query_is_pattern_rooted, _ts_query_is_pattern_non_local, _ts_query_is_pattern_guaranteed_at_step, _ts_query_disable_capture, _ts_query_disable_pattern, _ts_tree_copy, _ts_tree_delete, _ts_init, _ts_parser_new_wasm, _ts_parser_enable_logger_wasm, _ts_parser_parse_wasm, _ts_parser_included_ranges_wasm, _ts_language_type_is_named_wasm, _ts_language_type_is_visible_wasm, _ts_language_metadata_wasm, _ts_language_supertypes_wasm, _ts_language_subtypes_wasm, _ts_tree_root_node_wasm, _ts_tree_root_node_with_offset_wasm, _ts_tree_edit_wasm, _ts_tree_included_ranges_wasm, _ts_tree_get_changed_ranges_wasm, _ts_tree_cursor_new_wasm, _ts_tree_cursor_copy_wasm, _ts_tree_cursor_delete_wasm, _ts_tree_cursor_reset_wasm, _ts_tree_cursor_reset_to_wasm, _ts_tree_cursor_goto_first_child_wasm, _ts_tree_cursor_goto_last_child_wasm, _ts_tree_cursor_goto_first_child_for_index_wasm, _ts_tree_cursor_goto_first_child_for_position_wasm, _ts_tree_cursor_goto_next_sibling_wasm, _ts_tree_cursor_goto_previous_sibling_wasm, _ts_tree_cursor_goto_descendant_wasm, _ts_tree_cursor_goto_parent_wasm, _ts_tree_cursor_current_node_type_id_wasm, _ts_tree_cursor_current_node_state_id_wasm, _ts_tree_cursor_current_node_is_named_wasm, _ts_tree_cursor_current_node_is_missing_wasm, _ts_tree_cursor_current_node_id_wasm, _ts_tree_cursor_start_position_wasm, _ts_tree_cursor_end_position_wasm, _ts_tree_cursor_start_index_wasm, _ts_tree_cursor_end_index_wasm, _ts_tree_cursor_current_field_id_wasm, _ts_tree_cursor_current_depth_wasm, _ts_tree_cursor_current_descendant_index_wasm, _ts_tree_cursor_current_node_wasm, _ts_node_symbol_wasm, _ts_node_field_name_for_child_wasm, _ts_node_field_name_for_named_child_wasm, _ts_node_children_by_field_id_wasm, _ts_node_first_child_for_byte_wasm, _ts_node_first_named_child_for_byte_wasm, _ts_node_grammar_symbol_wasm, _ts_node_child_count_wasm, _ts_node_named_child_count_wasm, _ts_node_child_wasm, _ts_node_named_child_wasm, _ts_node_child_by_field_id_wasm, _ts_node_next_sibling_wasm, _ts_node_prev_sibling_wasm, _ts_node_next_named_sibling_wasm, _ts_node_prev_named_sibling_wasm, _ts_node_descendant_count_wasm, _ts_node_parent_wasm, _ts_node_child_with_descendant_wasm, _ts_node_descendant_for_index_wasm, _ts_node_named_descendant_for_index_wasm, _ts_node_descendant_for_position_wasm, _ts_node_named_descendant_for_position_wasm, _ts_node_start_point_wasm, _ts_node_end_point_wasm, _ts_node_start_index_wasm, _ts_node_end_index_wasm, _ts_node_to_string_wasm, _ts_node_children_wasm, _ts_node_named_children_wasm, _ts_node_descendants_of_type_wasm, _ts_node_is_named_wasm, _ts_node_has_changes_wasm, _ts_node_has_error_wasm, _ts_node_is_error_wasm, _ts_node_is_missing_wasm, _ts_node_is_extra_wasm, _ts_node_parse_state_wasm, _ts_node_next_parse_state_wasm, _ts_query_matches_wasm, _ts_query_captures_wasm, _memset, _memcpy, _memmove, _iswalpha, _iswblank, _iswdigit, _iswlower, _iswpunct, _iswupper, _iswxdigit, _memchr, _strcmp, _strncat, _strncpy, _towlower, _towupper, _setThrew, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, ___wasm_apply_data_relocs;
  function assignWasmExports(wasmExports2) {
    Module["_malloc"] = _malloc = wasmExports2["malloc"];
    Module["_calloc"] = _calloc = wasmExports2["calloc"];
    Module["_realloc"] = _realloc = wasmExports2["realloc"];
    Module["_free"] = _free = wasmExports2["free"];
    Module["_ts_range_edit"] = _ts_range_edit = wasmExports2["ts_range_edit"];
    Module["_memcmp"] = _memcmp = wasmExports2["memcmp"];
    Module["_ts_language_symbol_count"] = _ts_language_symbol_count = wasmExports2["ts_language_symbol_count"];
    Module["_ts_language_state_count"] = _ts_language_state_count = wasmExports2["ts_language_state_count"];
    Module["_ts_language_abi_version"] = _ts_language_abi_version = wasmExports2["ts_language_abi_version"];
    Module["_ts_language_name"] = _ts_language_name = wasmExports2["ts_language_name"];
    Module["_ts_language_field_count"] = _ts_language_field_count = wasmExports2["ts_language_field_count"];
    Module["_ts_language_next_state"] = _ts_language_next_state = wasmExports2["ts_language_next_state"];
    Module["_ts_language_symbol_name"] = _ts_language_symbol_name = wasmExports2["ts_language_symbol_name"];
    Module["_ts_language_symbol_for_name"] = _ts_language_symbol_for_name = wasmExports2["ts_language_symbol_for_name"];
    Module["_strncmp"] = _strncmp = wasmExports2["strncmp"];
    Module["_strlen"] = _strlen = wasmExports2["strlen"];
    Module["_ts_language_symbol_type"] = _ts_language_symbol_type = wasmExports2["ts_language_symbol_type"];
    Module["_ts_language_field_name_for_id"] = _ts_language_field_name_for_id = wasmExports2["ts_language_field_name_for_id"];
    Module["_ts_lookahead_iterator_new"] = _ts_lookahead_iterator_new = wasmExports2["ts_lookahead_iterator_new"];
    Module["_ts_lookahead_iterator_delete"] = _ts_lookahead_iterator_delete = wasmExports2["ts_lookahead_iterator_delete"];
    Module["_ts_lookahead_iterator_reset_state"] = _ts_lookahead_iterator_reset_state = wasmExports2["ts_lookahead_iterator_reset_state"];
    Module["_ts_lookahead_iterator_reset"] = _ts_lookahead_iterator_reset = wasmExports2["ts_lookahead_iterator_reset"];
    Module["_ts_lookahead_iterator_next"] = _ts_lookahead_iterator_next = wasmExports2["ts_lookahead_iterator_next"];
    Module["_ts_lookahead_iterator_current_symbol"] = _ts_lookahead_iterator_current_symbol = wasmExports2["ts_lookahead_iterator_current_symbol"];
    Module["_ts_point_edit"] = _ts_point_edit = wasmExports2["ts_point_edit"];
    Module["_ts_parser_delete"] = _ts_parser_delete = wasmExports2["ts_parser_delete"];
    Module["_ts_parser_reset"] = _ts_parser_reset = wasmExports2["ts_parser_reset"];
    Module["_ts_parser_set_language"] = _ts_parser_set_language = wasmExports2["ts_parser_set_language"];
    Module["_ts_parser_set_included_ranges"] = _ts_parser_set_included_ranges = wasmExports2["ts_parser_set_included_ranges"];
    Module["_ts_query_new"] = _ts_query_new = wasmExports2["ts_query_new"];
    Module["_ts_query_delete"] = _ts_query_delete = wasmExports2["ts_query_delete"];
    Module["_iswspace"] = _iswspace = wasmExports2["iswspace"];
    Module["_iswalnum"] = _iswalnum = wasmExports2["iswalnum"];
    Module["_ts_query_copy"] = _ts_query_copy = wasmExports2["ts_query_copy"];
    Module["_ts_query_pattern_count"] = _ts_query_pattern_count = wasmExports2["ts_query_pattern_count"];
    Module["_ts_query_capture_count"] = _ts_query_capture_count = wasmExports2["ts_query_capture_count"];
    Module["_ts_query_string_count"] = _ts_query_string_count = wasmExports2["ts_query_string_count"];
    Module["_ts_query_capture_name_for_id"] = _ts_query_capture_name_for_id = wasmExports2["ts_query_capture_name_for_id"];
    Module["_ts_query_capture_quantifier_for_id"] = _ts_query_capture_quantifier_for_id = wasmExports2["ts_query_capture_quantifier_for_id"];
    Module["_ts_query_string_value_for_id"] = _ts_query_string_value_for_id = wasmExports2["ts_query_string_value_for_id"];
    Module["_ts_query_predicates_for_pattern"] = _ts_query_predicates_for_pattern = wasmExports2["ts_query_predicates_for_pattern"];
    Module["_ts_query_start_byte_for_pattern"] = _ts_query_start_byte_for_pattern = wasmExports2["ts_query_start_byte_for_pattern"];
    Module["_ts_query_end_byte_for_pattern"] = _ts_query_end_byte_for_pattern = wasmExports2["ts_query_end_byte_for_pattern"];
    Module["_ts_query_is_pattern_rooted"] = _ts_query_is_pattern_rooted = wasmExports2["ts_query_is_pattern_rooted"];
    Module["_ts_query_is_pattern_non_local"] = _ts_query_is_pattern_non_local = wasmExports2["ts_query_is_pattern_non_local"];
    Module["_ts_query_is_pattern_guaranteed_at_step"] = _ts_query_is_pattern_guaranteed_at_step = wasmExports2["ts_query_is_pattern_guaranteed_at_step"];
    Module["_ts_query_disable_capture"] = _ts_query_disable_capture = wasmExports2["ts_query_disable_capture"];
    Module["_ts_query_disable_pattern"] = _ts_query_disable_pattern = wasmExports2["ts_query_disable_pattern"];
    Module["_ts_tree_copy"] = _ts_tree_copy = wasmExports2["ts_tree_copy"];
    Module["_ts_tree_delete"] = _ts_tree_delete = wasmExports2["ts_tree_delete"];
    Module["_ts_init"] = _ts_init = wasmExports2["ts_init"];
    Module["_ts_parser_new_wasm"] = _ts_parser_new_wasm = wasmExports2["ts_parser_new_wasm"];
    Module["_ts_parser_enable_logger_wasm"] = _ts_parser_enable_logger_wasm = wasmExports2["ts_parser_enable_logger_wasm"];
    Module["_ts_parser_parse_wasm"] = _ts_parser_parse_wasm = wasmExports2["ts_parser_parse_wasm"];
    Module["_ts_parser_included_ranges_wasm"] = _ts_parser_included_ranges_wasm = wasmExports2["ts_parser_included_ranges_wasm"];
    Module["_ts_language_type_is_named_wasm"] = _ts_language_type_is_named_wasm = wasmExports2["ts_language_type_is_named_wasm"];
    Module["_ts_language_type_is_visible_wasm"] = _ts_language_type_is_visible_wasm = wasmExports2["ts_language_type_is_visible_wasm"];
    Module["_ts_language_metadata_wasm"] = _ts_language_metadata_wasm = wasmExports2["ts_language_metadata_wasm"];
    Module["_ts_language_supertypes_wasm"] = _ts_language_supertypes_wasm = wasmExports2["ts_language_supertypes_wasm"];
    Module["_ts_language_subtypes_wasm"] = _ts_language_subtypes_wasm = wasmExports2["ts_language_subtypes_wasm"];
    Module["_ts_tree_root_node_wasm"] = _ts_tree_root_node_wasm = wasmExports2["ts_tree_root_node_wasm"];
    Module["_ts_tree_root_node_with_offset_wasm"] = _ts_tree_root_node_with_offset_wasm = wasmExports2["ts_tree_root_node_with_offset_wasm"];
    Module["_ts_tree_edit_wasm"] = _ts_tree_edit_wasm = wasmExports2["ts_tree_edit_wasm"];
    Module["_ts_tree_included_ranges_wasm"] = _ts_tree_included_ranges_wasm = wasmExports2["ts_tree_included_ranges_wasm"];
    Module["_ts_tree_get_changed_ranges_wasm"] = _ts_tree_get_changed_ranges_wasm = wasmExports2["ts_tree_get_changed_ranges_wasm"];
    Module["_ts_tree_cursor_new_wasm"] = _ts_tree_cursor_new_wasm = wasmExports2["ts_tree_cursor_new_wasm"];
    Module["_ts_tree_cursor_copy_wasm"] = _ts_tree_cursor_copy_wasm = wasmExports2["ts_tree_cursor_copy_wasm"];
    Module["_ts_tree_cursor_delete_wasm"] = _ts_tree_cursor_delete_wasm = wasmExports2["ts_tree_cursor_delete_wasm"];
    Module["_ts_tree_cursor_reset_wasm"] = _ts_tree_cursor_reset_wasm = wasmExports2["ts_tree_cursor_reset_wasm"];
    Module["_ts_tree_cursor_reset_to_wasm"] = _ts_tree_cursor_reset_to_wasm = wasmExports2["ts_tree_cursor_reset_to_wasm"];
    Module["_ts_tree_cursor_goto_first_child_wasm"] = _ts_tree_cursor_goto_first_child_wasm = wasmExports2["ts_tree_cursor_goto_first_child_wasm"];
    Module["_ts_tree_cursor_goto_last_child_wasm"] = _ts_tree_cursor_goto_last_child_wasm = wasmExports2["ts_tree_cursor_goto_last_child_wasm"];
    Module["_ts_tree_cursor_goto_first_child_for_index_wasm"] = _ts_tree_cursor_goto_first_child_for_index_wasm = wasmExports2["ts_tree_cursor_goto_first_child_for_index_wasm"];
    Module["_ts_tree_cursor_goto_first_child_for_position_wasm"] = _ts_tree_cursor_goto_first_child_for_position_wasm = wasmExports2["ts_tree_cursor_goto_first_child_for_position_wasm"];
    Module["_ts_tree_cursor_goto_next_sibling_wasm"] = _ts_tree_cursor_goto_next_sibling_wasm = wasmExports2["ts_tree_cursor_goto_next_sibling_wasm"];
    Module["_ts_tree_cursor_goto_previous_sibling_wasm"] = _ts_tree_cursor_goto_previous_sibling_wasm = wasmExports2["ts_tree_cursor_goto_previous_sibling_wasm"];
    Module["_ts_tree_cursor_goto_descendant_wasm"] = _ts_tree_cursor_goto_descendant_wasm = wasmExports2["ts_tree_cursor_goto_descendant_wasm"];
    Module["_ts_tree_cursor_goto_parent_wasm"] = _ts_tree_cursor_goto_parent_wasm = wasmExports2["ts_tree_cursor_goto_parent_wasm"];
    Module["_ts_tree_cursor_current_node_type_id_wasm"] = _ts_tree_cursor_current_node_type_id_wasm = wasmExports2["ts_tree_cursor_current_node_type_id_wasm"];
    Module["_ts_tree_cursor_current_node_state_id_wasm"] = _ts_tree_cursor_current_node_state_id_wasm = wasmExports2["ts_tree_cursor_current_node_state_id_wasm"];
    Module["_ts_tree_cursor_current_node_is_named_wasm"] = _ts_tree_cursor_current_node_is_named_wasm = wasmExports2["ts_tree_cursor_current_node_is_named_wasm"];
    Module["_ts_tree_cursor_current_node_is_missing_wasm"] = _ts_tree_cursor_current_node_is_missing_wasm = wasmExports2["ts_tree_cursor_current_node_is_missing_wasm"];
    Module["_ts_tree_cursor_current_node_id_wasm"] = _ts_tree_cursor_current_node_id_wasm = wasmExports2["ts_tree_cursor_current_node_id_wasm"];
    Module["_ts_tree_cursor_start_position_wasm"] = _ts_tree_cursor_start_position_wasm = wasmExports2["ts_tree_cursor_start_position_wasm"];
    Module["_ts_tree_cursor_end_position_wasm"] = _ts_tree_cursor_end_position_wasm = wasmExports2["ts_tree_cursor_end_position_wasm"];
    Module["_ts_tree_cursor_start_index_wasm"] = _ts_tree_cursor_start_index_wasm = wasmExports2["ts_tree_cursor_start_index_wasm"];
    Module["_ts_tree_cursor_end_index_wasm"] = _ts_tree_cursor_end_index_wasm = wasmExports2["ts_tree_cursor_end_index_wasm"];
    Module["_ts_tree_cursor_current_field_id_wasm"] = _ts_tree_cursor_current_field_id_wasm = wasmExports2["ts_tree_cursor_current_field_id_wasm"];
    Module["_ts_tree_cursor_current_depth_wasm"] = _ts_tree_cursor_current_depth_wasm = wasmExports2["ts_tree_cursor_current_depth_wasm"];
    Module["_ts_tree_cursor_current_descendant_index_wasm"] = _ts_tree_cursor_current_descendant_index_wasm = wasmExports2["ts_tree_cursor_current_descendant_index_wasm"];
    Module["_ts_tree_cursor_current_node_wasm"] = _ts_tree_cursor_current_node_wasm = wasmExports2["ts_tree_cursor_current_node_wasm"];
    Module["_ts_node_symbol_wasm"] = _ts_node_symbol_wasm = wasmExports2["ts_node_symbol_wasm"];
    Module["_ts_node_field_name_for_child_wasm"] = _ts_node_field_name_for_child_wasm = wasmExports2["ts_node_field_name_for_child_wasm"];
    Module["_ts_node_field_name_for_named_child_wasm"] = _ts_node_field_name_for_named_child_wasm = wasmExports2["ts_node_field_name_for_named_child_wasm"];
    Module["_ts_node_children_by_field_id_wasm"] = _ts_node_children_by_field_id_wasm = wasmExports2["ts_node_children_by_field_id_wasm"];
    Module["_ts_node_first_child_for_byte_wasm"] = _ts_node_first_child_for_byte_wasm = wasmExports2["ts_node_first_child_for_byte_wasm"];
    Module["_ts_node_first_named_child_for_byte_wasm"] = _ts_node_first_named_child_for_byte_wasm = wasmExports2["ts_node_first_named_child_for_byte_wasm"];
    Module["_ts_node_grammar_symbol_wasm"] = _ts_node_grammar_symbol_wasm = wasmExports2["ts_node_grammar_symbol_wasm"];
    Module["_ts_node_child_count_wasm"] = _ts_node_child_count_wasm = wasmExports2["ts_node_child_count_wasm"];
    Module["_ts_node_named_child_count_wasm"] = _ts_node_named_child_count_wasm = wasmExports2["ts_node_named_child_count_wasm"];
    Module["_ts_node_child_wasm"] = _ts_node_child_wasm = wasmExports2["ts_node_child_wasm"];
    Module["_ts_node_named_child_wasm"] = _ts_node_named_child_wasm = wasmExports2["ts_node_named_child_wasm"];
    Module["_ts_node_child_by_field_id_wasm"] = _ts_node_child_by_field_id_wasm = wasmExports2["ts_node_child_by_field_id_wasm"];
    Module["_ts_node_next_sibling_wasm"] = _ts_node_next_sibling_wasm = wasmExports2["ts_node_next_sibling_wasm"];
    Module["_ts_node_prev_sibling_wasm"] = _ts_node_prev_sibling_wasm = wasmExports2["ts_node_prev_sibling_wasm"];
    Module["_ts_node_next_named_sibling_wasm"] = _ts_node_next_named_sibling_wasm = wasmExports2["ts_node_next_named_sibling_wasm"];
    Module["_ts_node_prev_named_sibling_wasm"] = _ts_node_prev_named_sibling_wasm = wasmExports2["ts_node_prev_named_sibling_wasm"];
    Module["_ts_node_descendant_count_wasm"] = _ts_node_descendant_count_wasm = wasmExports2["ts_node_descendant_count_wasm"];
    Module["_ts_node_parent_wasm"] = _ts_node_parent_wasm = wasmExports2["ts_node_parent_wasm"];
    Module["_ts_node_child_with_descendant_wasm"] = _ts_node_child_with_descendant_wasm = wasmExports2["ts_node_child_with_descendant_wasm"];
    Module["_ts_node_descendant_for_index_wasm"] = _ts_node_descendant_for_index_wasm = wasmExports2["ts_node_descendant_for_index_wasm"];
    Module["_ts_node_named_descendant_for_index_wasm"] = _ts_node_named_descendant_for_index_wasm = wasmExports2["ts_node_named_descendant_for_index_wasm"];
    Module["_ts_node_descendant_for_position_wasm"] = _ts_node_descendant_for_position_wasm = wasmExports2["ts_node_descendant_for_position_wasm"];
    Module["_ts_node_named_descendant_for_position_wasm"] = _ts_node_named_descendant_for_position_wasm = wasmExports2["ts_node_named_descendant_for_position_wasm"];
    Module["_ts_node_start_point_wasm"] = _ts_node_start_point_wasm = wasmExports2["ts_node_start_point_wasm"];
    Module["_ts_node_end_point_wasm"] = _ts_node_end_point_wasm = wasmExports2["ts_node_end_point_wasm"];
    Module["_ts_node_start_index_wasm"] = _ts_node_start_index_wasm = wasmExports2["ts_node_start_index_wasm"];
    Module["_ts_node_end_index_wasm"] = _ts_node_end_index_wasm = wasmExports2["ts_node_end_index_wasm"];
    Module["_ts_node_to_string_wasm"] = _ts_node_to_string_wasm = wasmExports2["ts_node_to_string_wasm"];
    Module["_ts_node_children_wasm"] = _ts_node_children_wasm = wasmExports2["ts_node_children_wasm"];
    Module["_ts_node_named_children_wasm"] = _ts_node_named_children_wasm = wasmExports2["ts_node_named_children_wasm"];
    Module["_ts_node_descendants_of_type_wasm"] = _ts_node_descendants_of_type_wasm = wasmExports2["ts_node_descendants_of_type_wasm"];
    Module["_ts_node_is_named_wasm"] = _ts_node_is_named_wasm = wasmExports2["ts_node_is_named_wasm"];
    Module["_ts_node_has_changes_wasm"] = _ts_node_has_changes_wasm = wasmExports2["ts_node_has_changes_wasm"];
    Module["_ts_node_has_error_wasm"] = _ts_node_has_error_wasm = wasmExports2["ts_node_has_error_wasm"];
    Module["_ts_node_is_error_wasm"] = _ts_node_is_error_wasm = wasmExports2["ts_node_is_error_wasm"];
    Module["_ts_node_is_missing_wasm"] = _ts_node_is_missing_wasm = wasmExports2["ts_node_is_missing_wasm"];
    Module["_ts_node_is_extra_wasm"] = _ts_node_is_extra_wasm = wasmExports2["ts_node_is_extra_wasm"];
    Module["_ts_node_parse_state_wasm"] = _ts_node_parse_state_wasm = wasmExports2["ts_node_parse_state_wasm"];
    Module["_ts_node_next_parse_state_wasm"] = _ts_node_next_parse_state_wasm = wasmExports2["ts_node_next_parse_state_wasm"];
    Module["_ts_query_matches_wasm"] = _ts_query_matches_wasm = wasmExports2["ts_query_matches_wasm"];
    Module["_ts_query_captures_wasm"] = _ts_query_captures_wasm = wasmExports2["ts_query_captures_wasm"];
    Module["_memset"] = _memset = wasmExports2["memset"];
    Module["_memcpy"] = _memcpy = wasmExports2["memcpy"];
    Module["_memmove"] = _memmove = wasmExports2["memmove"];
    Module["_iswalpha"] = _iswalpha = wasmExports2["iswalpha"];
    Module["_iswblank"] = _iswblank = wasmExports2["iswblank"];
    Module["_iswdigit"] = _iswdigit = wasmExports2["iswdigit"];
    Module["_iswlower"] = _iswlower = wasmExports2["iswlower"];
    Module["_iswpunct"] = _iswpunct = wasmExports2["iswpunct"];
    Module["_iswupper"] = _iswupper = wasmExports2["iswupper"];
    Module["_iswxdigit"] = _iswxdigit = wasmExports2["iswxdigit"];
    Module["_memchr"] = _memchr = wasmExports2["memchr"];
    Module["_strcmp"] = _strcmp = wasmExports2["strcmp"];
    Module["_strncat"] = _strncat = wasmExports2["strncat"];
    Module["_strncpy"] = _strncpy = wasmExports2["strncpy"];
    Module["_towlower"] = _towlower = wasmExports2["towlower"];
    Module["_towupper"] = _towupper = wasmExports2["towupper"];
    _setThrew = wasmExports2["setThrew"];
    __emscripten_stack_restore = wasmExports2["_emscripten_stack_restore"];
    __emscripten_stack_alloc = wasmExports2["_emscripten_stack_alloc"];
    _emscripten_stack_get_current = wasmExports2["emscripten_stack_get_current"];
    ___wasm_apply_data_relocs = wasmExports2["__wasm_apply_data_relocs"];
  }
  __name(assignWasmExports, "assignWasmExports");
  var wasmImports = {
    /** @export */
    __heap_base: ___heap_base,
    /** @export */
    __indirect_function_table: wasmTable,
    /** @export */
    __memory_base: ___memory_base,
    /** @export */
    __stack_high: ___stack_high,
    /** @export */
    __stack_low: ___stack_low,
    /** @export */
    __stack_pointer: ___stack_pointer,
    /** @export */
    __table_base: ___table_base,
    /** @export */
    _abort_js: __abort_js,
    /** @export */
    emscripten_resize_heap: _emscripten_resize_heap,
    /** @export */
    fd_close: _fd_close,
    /** @export */
    fd_seek: _fd_seek,
    /** @export */
    fd_write: _fd_write,
    /** @export */
    memory: wasmMemory,
    /** @export */
    tree_sitter_log_callback: _tree_sitter_log_callback,
    /** @export */
    tree_sitter_parse_callback: _tree_sitter_parse_callback,
    /** @export */
    tree_sitter_progress_callback: _tree_sitter_progress_callback,
    /** @export */
    tree_sitter_query_progress_callback: _tree_sitter_query_progress_callback
  };
  function callMain(args2 = []) {
    var entryFunction = resolveGlobalSymbol("main").sym;
    if (!entryFunction) return;
    args2.unshift(thisProgram);
    var argc = args2.length;
    var argv = stackAlloc((argc + 1) * 4);
    var argv_ptr = argv;
    args2.forEach((arg) => {
      LE_HEAP_STORE_U32((argv_ptr >> 2) * 4, stringToUTF8OnStack(arg));
      argv_ptr += 4;
    });
    LE_HEAP_STORE_U32((argv_ptr >> 2) * 4, 0);
    try {
      var ret = entryFunction(argc, argv);
      exitJS(
        ret,
        /* implicit = */
        true
      );
      return ret;
    } catch (e2) {
      return handleException(e2);
    }
  }
  __name(callMain, "callMain");
  function run(args2 = arguments_) {
    if (runDependencies > 0) {
      dependenciesFulfilled = run;
      return;
    }
    preRun();
    if (runDependencies > 0) {
      dependenciesFulfilled = run;
      return;
    }
    function doRun() {
      Module["calledRun"] = true;
      if (ABORT) return;
      initRuntime();
      preMain();
      readyPromiseResolve?.(Module);
      Module["onRuntimeInitialized"]?.();
      var noInitialRun = Module["noInitialRun"] || false;
      if (!noInitialRun) callMain(args2);
      postRun();
    }
    __name(doRun, "doRun");
    if (Module["setStatus"]) {
      Module["setStatus"]("Running...");
      setTimeout(() => {
        setTimeout(() => Module["setStatus"](""), 1);
        doRun();
      }, 1);
    } else {
      doRun();
    }
  }
  __name(run, "run");
  var wasmExports;
  wasmExports = await createWasm();
  run();
  if (runtimeInitialized) {
    moduleRtn = Module;
  } else {
    moduleRtn = new Promise((resolve2, reject) => {
      readyPromiseResolve = resolve2;
      readyPromiseReject = reject;
    });
  }
  return moduleRtn;
}
__name(Module2, "Module");
var web_tree_sitter_default = Module2;
var Module3 = null;
async function initializeBinding(moduleOptions) {
  return Module3 ??= await web_tree_sitter_default(moduleOptions);
}
__name(initializeBinding, "initializeBinding");
function checkModule() {
  return !!Module3;
}
__name(checkModule, "checkModule");
var TRANSFER_BUFFER;
var LANGUAGE_VERSION;
var MIN_COMPATIBLE_VERSION;
var finalizer4 = newFinalizer((addresses) => {
  C2._ts_parser_delete(addresses[0]);
  C2._free(addresses[1]);
});
var Parser = class {
  static {
    __name(this, "Parser");
  }
  /** @internal */
  [0] = 0;
  // Internal handle for Wasm
  /** @internal */
  [1] = 0;
  // Internal handle for Wasm
  /** @internal */
  logCallback = null;
  /** The parser's current language. */
  language = null;
  /**
   * This must always be called before creating a Parser.
   *
   * You can optionally pass in options to configure the Wasm module, the most common
   * one being `locateFile` to help the module find the `.wasm` file.
   */
  static async init(moduleOptions) {
    setModule(await initializeBinding(moduleOptions));
    TRANSFER_BUFFER = C2._ts_init();
    LANGUAGE_VERSION = C2.getValue(TRANSFER_BUFFER, "i32");
    MIN_COMPATIBLE_VERSION = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
  }
  /**
   * Create a new parser.
   */
  constructor() {
    this.initialize();
    finalizer4?.register(this, [this[0], this[1]], this);
  }
  /** @internal */
  initialize() {
    if (!checkModule()) {
      throw new Error("cannot construct a Parser before calling `init()`");
    }
    C2._ts_parser_new_wasm();
    this[0] = C2.getValue(TRANSFER_BUFFER, "i32");
    this[1] = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
  }
  /** Delete the parser, freeing its resources. */
  delete() {
    finalizer4?.unregister(this);
    C2._ts_parser_delete(this[0]);
    C2._free(this[1]);
    this[0] = 0;
    this[1] = 0;
  }
  /**
   * Set the language that the parser should use for parsing.
   *
   * If the language was not successfully assigned, an error will be thrown.
   * This happens if the language was generated with an incompatible
   * version of the Tree-sitter CLI. Check the language's version using
   * {@link Language#version} and compare it to this library's
   * {@link LANGUAGE_VERSION} and {@link MIN_COMPATIBLE_VERSION} constants.
   */
  setLanguage(language) {
    let address;
    if (!language) {
      address = 0;
      this.language = null;
    } else if (language.constructor === Language) {
      address = language[0];
      const version = C2._ts_language_abi_version(address);
      if (version < MIN_COMPATIBLE_VERSION || LANGUAGE_VERSION < version) {
        throw new Error(
          `Incompatible language version ${version}. Compatibility range ${MIN_COMPATIBLE_VERSION} through ${LANGUAGE_VERSION}.`
        );
      }
      this.language = language;
    } else {
      throw new Error("Argument must be a Language");
    }
    C2._ts_parser_set_language(this[0], address);
    return this;
  }
  /**
   * Parse a slice of UTF8 text.
   *
   * @param {string | ParseCallback} callback - The UTF8-encoded text to parse or a callback function.
   *
   * @param {Tree | null} [oldTree] - A previous syntax tree parsed from the same document. If the text of the
   *   document has changed since `oldTree` was created, then you must edit `oldTree` to match
   *   the new text using {@link Tree#edit}.
   *
   * @param {ParseOptions} [options] - Options for parsing the text.
   *  This can be used to set the included ranges, or a progress callback.
   *
   * @returns {Tree | null} A {@link Tree} if parsing succeeded, or `null` if:
   *  - The parser has not yet had a language assigned with {@link Parser#setLanguage}.
   *  - The progress callback returned true.
   */
  parse(callback, oldTree, options2) {
    if (typeof callback === "string") {
      C2.currentParseCallback = (index2) => callback.slice(index2);
    } else if (typeof callback === "function") {
      C2.currentParseCallback = callback;
    } else {
      throw new Error("Argument must be a string or a function");
    }
    if (options2?.progressCallback) {
      C2.currentProgressCallback = options2.progressCallback;
    } else {
      C2.currentProgressCallback = null;
    }
    if (this.logCallback) {
      C2.currentLogCallback = this.logCallback;
      C2._ts_parser_enable_logger_wasm(this[0], 1);
    } else {
      C2.currentLogCallback = null;
      C2._ts_parser_enable_logger_wasm(this[0], 0);
    }
    let rangeCount = 0;
    let rangeAddress = 0;
    if (options2?.includedRanges) {
      rangeCount = options2.includedRanges.length;
      rangeAddress = C2._calloc(rangeCount, SIZE_OF_RANGE);
      let address = rangeAddress;
      for (let i22 = 0; i22 < rangeCount; i22++) {
        marshalRange(address, options2.includedRanges[i22]);
        address += SIZE_OF_RANGE;
      }
    }
    const treeAddress = C2._ts_parser_parse_wasm(
      this[0],
      this[1],
      oldTree ? oldTree[0] : 0,
      rangeAddress,
      rangeCount
    );
    if (!treeAddress) {
      C2.currentParseCallback = null;
      C2.currentLogCallback = null;
      C2.currentProgressCallback = null;
      return null;
    }
    if (!this.language) {
      throw new Error("Parser must have a language to parse");
    }
    const result = new Tree(INTERNAL, treeAddress, this.language, C2.currentParseCallback);
    C2.currentParseCallback = null;
    C2.currentLogCallback = null;
    C2.currentProgressCallback = null;
    return result;
  }
  /**
   * Instruct the parser to start the next parse from the beginning.
   *
   * If the parser previously failed because of a callback, 
   * then by default, it will resume where it left off on the
   * next call to {@link Parser#parse} or other parsing functions.
   * If you don't want to resume, and instead intend to use this parser to
   * parse some other document, you must call `reset` first.
   */
  reset() {
    C2._ts_parser_reset(this[0]);
  }
  /** Get the ranges of text that the parser will include when parsing. */
  getIncludedRanges() {
    C2._ts_parser_included_ranges_wasm(this[0]);
    const count = C2.getValue(TRANSFER_BUFFER, "i32");
    const buffer = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
    const result = new Array(count);
    if (count > 0) {
      let address = buffer;
      for (let i22 = 0; i22 < count; i22++) {
        result[i22] = unmarshalRange(address);
        address += SIZE_OF_RANGE;
      }
      C2._free(buffer);
    }
    return result;
  }
  /** Set the logging callback that a parser should use during parsing. */
  setLogger(callback) {
    if (!callback) {
      this.logCallback = null;
    } else if (typeof callback !== "function") {
      throw new Error("Logger callback must be a function");
    } else {
      this.logCallback = callback;
    }
    return this;
  }
  /** Get the parser's current logger. */
  getLogger() {
    return this.logCallback;
  }
};
var PREDICATE_STEP_TYPE_CAPTURE = 1;
var PREDICATE_STEP_TYPE_STRING = 2;
var QUERY_WORD_REGEX = /[\w-]+/g;
var CaptureQuantifier = {
  Zero: 0,
  ZeroOrOne: 1,
  ZeroOrMore: 2,
  One: 3,
  OneOrMore: 4
};
var isCaptureStep = /* @__PURE__ */ __name((step) => step.type === "capture", "isCaptureStep");
var isStringStep = /* @__PURE__ */ __name((step) => step.type === "string", "isStringStep");
var QueryErrorKind = {
  Syntax: 1,
  NodeName: 2,
  FieldName: 3,
  CaptureName: 4,
  PatternStructure: 5
};
var QueryError = class _QueryError extends Error {
  constructor(kind, info2, index2, length) {
    super(_QueryError.formatMessage(kind, info2));
    this.kind = kind;
    this.info = info2;
    this.index = index2;
    this.length = length;
    this.name = "QueryError";
  }
  kind;
  info;
  index;
  length;
  static {
    __name(this, "QueryError");
  }
  /** Formats an error message based on the error kind and info */
  static formatMessage(kind, info2) {
    switch (kind) {
      case QueryErrorKind.NodeName:
        return `Bad node name '${info2.word}'`;
      case QueryErrorKind.FieldName:
        return `Bad field name '${info2.word}'`;
      case QueryErrorKind.CaptureName:
        return `Bad capture name @${info2.word}`;
      case QueryErrorKind.PatternStructure:
        return `Bad pattern structure at offset ${info2.suffix}`;
      case QueryErrorKind.Syntax:
        return `Bad syntax at offset ${info2.suffix}`;
    }
  }
};
function parseAnyPredicate(steps, index2, operator, textPredicates) {
  if (steps.length !== 3) {
    throw new Error(
      `Wrong number of arguments to \`#${operator}\` predicate. Expected 2, got ${steps.length - 1}`
    );
  }
  if (!isCaptureStep(steps[1])) {
    throw new Error(
      `First argument of \`#${operator}\` predicate must be a capture. Got "${steps[1].value}"`
    );
  }
  const isPositive = operator === "eq?" || operator === "any-eq?";
  const matchAll = !operator.startsWith("any-");
  if (isCaptureStep(steps[2])) {
    const captureName1 = steps[1].name;
    const captureName2 = steps[2].name;
    textPredicates[index2].push((captures) => {
      const nodes1 = [];
      const nodes2 = [];
      for (const c2 of captures) {
        if (c2.name === captureName1) nodes1.push(c2.node);
        if (c2.name === captureName2) nodes2.push(c2.node);
      }
      const compare = /* @__PURE__ */ __name((n1, n2, positive) => {
        return positive ? n1.text === n2.text : n1.text !== n2.text;
      }, "compare");
      return matchAll ? nodes1.every((n1) => nodes2.some((n2) => compare(n1, n2, isPositive))) : nodes1.some((n1) => nodes2.some((n2) => compare(n1, n2, isPositive)));
    });
  } else {
    const captureName = steps[1].name;
    const stringValue = steps[2].value;
    const matches = /* @__PURE__ */ __name((n2) => n2.text === stringValue, "matches");
    const doesNotMatch = /* @__PURE__ */ __name((n2) => n2.text !== stringValue, "doesNotMatch");
    textPredicates[index2].push((captures) => {
      const nodes = [];
      for (const c2 of captures) {
        if (c2.name === captureName) nodes.push(c2.node);
      }
      const test = isPositive ? matches : doesNotMatch;
      return matchAll ? nodes.every(test) : nodes.some(test);
    });
  }
}
__name(parseAnyPredicate, "parseAnyPredicate");
function parseMatchPredicate(steps, index2, operator, textPredicates) {
  if (steps.length !== 3) {
    throw new Error(
      `Wrong number of arguments to \`#${operator}\` predicate. Expected 2, got ${steps.length - 1}.`
    );
  }
  if (steps[1].type !== "capture") {
    throw new Error(
      `First argument of \`#${operator}\` predicate must be a capture. Got "${steps[1].value}".`
    );
  }
  if (steps[2].type !== "string") {
    throw new Error(
      `Second argument of \`#${operator}\` predicate must be a string. Got @${steps[2].name}.`
    );
  }
  const isPositive = operator === "match?" || operator === "any-match?";
  const matchAll = !operator.startsWith("any-");
  const captureName = steps[1].name;
  const regex = new RegExp(steps[2].value);
  textPredicates[index2].push((captures) => {
    const nodes = [];
    for (const c2 of captures) {
      if (c2.name === captureName) nodes.push(c2.node.text);
    }
    const test = /* @__PURE__ */ __name((text, positive) => {
      return positive ? regex.test(text) : !regex.test(text);
    }, "test");
    if (nodes.length === 0) return !isPositive;
    return matchAll ? nodes.every((text) => test(text, isPositive)) : nodes.some((text) => test(text, isPositive));
  });
}
__name(parseMatchPredicate, "parseMatchPredicate");
function parseAnyOfPredicate(steps, index2, operator, textPredicates) {
  if (steps.length < 2) {
    throw new Error(
      `Wrong number of arguments to \`#${operator}\` predicate. Expected at least 1. Got ${steps.length - 1}.`
    );
  }
  if (steps[1].type !== "capture") {
    throw new Error(
      `First argument of \`#${operator}\` predicate must be a capture. Got "${steps[1].value}".`
    );
  }
  const isPositive = operator === "any-of?";
  const captureName = steps[1].name;
  const stringSteps = steps.slice(2);
  if (!stringSteps.every(isStringStep)) {
    throw new Error(
      `Arguments to \`#${operator}\` predicate must be strings.".`
    );
  }
  const values = stringSteps.map((s2) => s2.value);
  textPredicates[index2].push((captures) => {
    const nodes = [];
    for (const c2 of captures) {
      if (c2.name === captureName) nodes.push(c2.node.text);
    }
    if (nodes.length === 0) return !isPositive;
    return nodes.every((text) => values.includes(text)) === isPositive;
  });
}
__name(parseAnyOfPredicate, "parseAnyOfPredicate");
function parseIsPredicate(steps, index2, operator, assertedProperties, refutedProperties) {
  if (steps.length < 2 || steps.length > 3) {
    throw new Error(
      `Wrong number of arguments to \`#${operator}\` predicate. Expected 1 or 2. Got ${steps.length - 1}.`
    );
  }
  if (!steps.every(isStringStep)) {
    throw new Error(
      `Arguments to \`#${operator}\` predicate must be strings.".`
    );
  }
  const properties = operator === "is?" ? assertedProperties : refutedProperties;
  if (!properties[index2]) properties[index2] = {};
  properties[index2][steps[1].value] = steps[2]?.value ?? null;
}
__name(parseIsPredicate, "parseIsPredicate");
function parseSetDirective(steps, index2, setProperties) {
  if (steps.length < 2 || steps.length > 3) {
    throw new Error(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${steps.length - 1}.`);
  }
  if (!steps.every(isStringStep)) {
    throw new Error(`Arguments to \`#set!\` predicate must be strings.".`);
  }
  if (!setProperties[index2]) setProperties[index2] = {};
  setProperties[index2][steps[1].value] = steps[2]?.value ?? null;
}
__name(parseSetDirective, "parseSetDirective");
function parsePattern(index2, stepType, stepValueId, captureNames, stringValues, steps, textPredicates, predicates, setProperties, assertedProperties, refutedProperties) {
  if (stepType === PREDICATE_STEP_TYPE_CAPTURE) {
    const name2 = captureNames[stepValueId];
    steps.push({ type: "capture", name: name2 });
  } else if (stepType === PREDICATE_STEP_TYPE_STRING) {
    steps.push({ type: "string", value: stringValues[stepValueId] });
  } else if (steps.length > 0) {
    if (steps[0].type !== "string") {
      throw new Error("Predicates must begin with a literal value");
    }
    const operator = steps[0].value;
    switch (operator) {
      case "any-not-eq?":
      case "not-eq?":
      case "any-eq?":
      case "eq?":
        parseAnyPredicate(steps, index2, operator, textPredicates);
        break;
      case "any-not-match?":
      case "not-match?":
      case "any-match?":
      case "match?":
        parseMatchPredicate(steps, index2, operator, textPredicates);
        break;
      case "not-any-of?":
      case "any-of?":
        parseAnyOfPredicate(steps, index2, operator, textPredicates);
        break;
      case "is?":
      case "is-not?":
        parseIsPredicate(steps, index2, operator, assertedProperties, refutedProperties);
        break;
      case "set!":
        parseSetDirective(steps, index2, setProperties);
        break;
      default:
        predicates[index2].push({ operator, operands: steps.slice(1) });
    }
    steps.length = 0;
  }
}
__name(parsePattern, "parsePattern");
function indexForByteOffset(source, byteOffset) {
  return new TextEncoder().encodeInto(source, new Uint8Array(byteOffset)).read;
}
__name(indexForByteOffset, "indexForByteOffset");
var finalizer5 = newFinalizer((address) => {
  C2._ts_query_delete(address);
});
var Query = class {
  static {
    __name(this, "Query");
  }
  /** @internal */
  [0] = 0;
  // Internal handle for Wasm
  /** @internal */
  exceededMatchLimit;
  /** @internal */
  textPredicates;
  /** @internal */
  source;
  /** The names of the captures used in the query. */
  captureNames;
  /** The quantifiers of the captures used in the query. */
  captureQuantifiers;
  /**
   * The other user-defined predicates associated with the given index.
   *
   * This includes predicates with operators other than:
   * - `match?`
   * - `eq?` and `not-eq?`
   * - `any-of?` and `not-any-of?`
   * - `is?` and `is-not?`
   * - `set!`
   */
  predicates;
  /** The properties for predicates with the operator `set!`. */
  setProperties;
  /** The properties for predicates with the operator `is?`. */
  assertedProperties;
  /** The properties for predicates with the operator `is-not?`. */
  refutedProperties;
  /** The maximum number of in-progress matches for this cursor. */
  matchLimit;
  /**
   * Create a new query from a string containing one or more S-expression
   * patterns.
   *
   * The query is associated with a particular language, and can only be run
   * on syntax nodes parsed with that language. References to Queries can be
   * shared between multiple threads.
   *
   * @link {@see https://tree-sitter.github.io/tree-sitter/using-parsers/queries}
   */
  constructor(language, source) {
    const sourceLength = C2.lengthBytesUTF8(source);
    const sourceAddress = C2._malloc(sourceLength + 1);
    C2.stringToUTF8(source, sourceAddress, sourceLength + 1);
    const address = C2._ts_query_new(
      language[0],
      sourceAddress,
      sourceLength,
      TRANSFER_BUFFER,
      TRANSFER_BUFFER + SIZE_OF_INT
    );
    if (!address) {
      const errorId = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
      const errorByte = C2.getValue(TRANSFER_BUFFER, "i32");
      const errorIndex = C2.UTF8ToString(sourceAddress, errorByte).length;
      const suffix = source.slice(errorIndex, errorIndex + 100).split("\n")[0];
      const word = suffix.match(QUERY_WORD_REGEX)?.[0] ?? "";
      C2._free(sourceAddress);
      switch (errorId) {
        case QueryErrorKind.Syntax:
          throw new QueryError(QueryErrorKind.Syntax, { suffix: `${errorIndex}: '${suffix}'...` }, errorIndex, 0);
        case QueryErrorKind.NodeName:
          throw new QueryError(errorId, { word }, errorIndex, word.length);
        case QueryErrorKind.FieldName:
          throw new QueryError(errorId, { word }, errorIndex, word.length);
        case QueryErrorKind.CaptureName:
          throw new QueryError(errorId, { word }, errorIndex, word.length);
        case QueryErrorKind.PatternStructure:
          throw new QueryError(errorId, { suffix: `${errorIndex}: '${suffix}'...` }, errorIndex, 0);
      }
    }
    const stringCount = C2._ts_query_string_count(address);
    const captureCount = C2._ts_query_capture_count(address);
    const patternCount = C2._ts_query_pattern_count(address);
    const captureNames = new Array(captureCount);
    const captureQuantifiers = new Array(patternCount);
    const stringValues = new Array(stringCount);
    for (let i22 = 0; i22 < captureCount; i22++) {
      const nameAddress = C2._ts_query_capture_name_for_id(
        address,
        i22,
        TRANSFER_BUFFER
      );
      const nameLength = C2.getValue(TRANSFER_BUFFER, "i32");
      captureNames[i22] = C2.UTF8ToString(nameAddress, nameLength);
    }
    for (let i22 = 0; i22 < patternCount; i22++) {
      const captureQuantifiersArray = new Array(captureCount);
      for (let j = 0; j < captureCount; j++) {
        const quantifier = C2._ts_query_capture_quantifier_for_id(address, i22, j);
        captureQuantifiersArray[j] = quantifier;
      }
      captureQuantifiers[i22] = captureQuantifiersArray;
    }
    for (let i22 = 0; i22 < stringCount; i22++) {
      const valueAddress = C2._ts_query_string_value_for_id(
        address,
        i22,
        TRANSFER_BUFFER
      );
      const nameLength = C2.getValue(TRANSFER_BUFFER, "i32");
      stringValues[i22] = C2.UTF8ToString(valueAddress, nameLength);
    }
    const setProperties = new Array(patternCount);
    const assertedProperties = new Array(patternCount);
    const refutedProperties = new Array(patternCount);
    const predicates = new Array(patternCount);
    const textPredicates = new Array(patternCount);
    for (let i22 = 0; i22 < patternCount; i22++) {
      const predicatesAddress = C2._ts_query_predicates_for_pattern(address, i22, TRANSFER_BUFFER);
      const stepCount = C2.getValue(TRANSFER_BUFFER, "i32");
      predicates[i22] = [];
      textPredicates[i22] = [];
      const steps = new Array();
      let stepAddress = predicatesAddress;
      for (let j = 0; j < stepCount; j++) {
        const stepType = C2.getValue(stepAddress, "i32");
        stepAddress += SIZE_OF_INT;
        const stepValueId = C2.getValue(stepAddress, "i32");
        stepAddress += SIZE_OF_INT;
        parsePattern(
          i22,
          stepType,
          stepValueId,
          captureNames,
          stringValues,
          steps,
          textPredicates,
          predicates,
          setProperties,
          assertedProperties,
          refutedProperties
        );
      }
      Object.freeze(textPredicates[i22]);
      Object.freeze(predicates[i22]);
      Object.freeze(setProperties[i22]);
      Object.freeze(assertedProperties[i22]);
      Object.freeze(refutedProperties[i22]);
    }
    C2._free(sourceAddress);
    this[0] = address;
    this.captureNames = captureNames;
    this.captureQuantifiers = captureQuantifiers;
    this.textPredicates = textPredicates;
    this.source = source;
    this.predicates = predicates;
    this.setProperties = setProperties;
    this.assertedProperties = assertedProperties;
    this.refutedProperties = refutedProperties;
    this.exceededMatchLimit = false;
    finalizer5?.register(this, address, this);
  }
  /** Delete the query, freeing its resources. */
  delete() {
    finalizer5?.unregister(this);
    C2._ts_query_delete(this[0]);
    this[0] = 0;
  }
  /**
   * Iterate over all of the matches in the order that they were found.
   *
   * Each match contains the index of the pattern that matched, and a list of
   * captures. Because multiple patterns can match the same set of nodes,
   * one match may contain captures that appear *before* some of the
   * captures from a previous match.
   *
   * @param {Node} node - The node to execute the query on.
   *
   * @param {QueryOptions} options - Options for query execution.
   */
  matches(node, options2 = {}) {
    const startPosition = options2.startPosition ?? ZERO_POINT;
    const endPosition = options2.endPosition ?? ZERO_POINT;
    const startIndex = options2.startIndex ?? 0;
    const endIndex = options2.endIndex ?? 0;
    const startContainingPosition = options2.startContainingPosition ?? ZERO_POINT;
    const endContainingPosition = options2.endContainingPosition ?? ZERO_POINT;
    const startContainingIndex = options2.startContainingIndex ?? 0;
    const endContainingIndex = options2.endContainingIndex ?? 0;
    const matchLimit = options2.matchLimit ?? 4294967295;
    const maxStartDepth = options2.maxStartDepth ?? 4294967295;
    const progressCallback = options2.progressCallback;
    if (typeof matchLimit !== "number") {
      throw new Error("Arguments must be numbers");
    }
    this.matchLimit = matchLimit;
    if (endIndex !== 0 && startIndex > endIndex) {
      throw new Error("`startIndex` cannot be greater than `endIndex`");
    }
    if (endPosition !== ZERO_POINT && (startPosition.row > endPosition.row || startPosition.row === endPosition.row && startPosition.column > endPosition.column)) {
      throw new Error("`startPosition` cannot be greater than `endPosition`");
    }
    if (endContainingIndex !== 0 && startContainingIndex > endContainingIndex) {
      throw new Error("`startContainingIndex` cannot be greater than `endContainingIndex`");
    }
    if (endContainingPosition !== ZERO_POINT && (startContainingPosition.row > endContainingPosition.row || startContainingPosition.row === endContainingPosition.row && startContainingPosition.column > endContainingPosition.column)) {
      throw new Error("`startContainingPosition` cannot be greater than `endContainingPosition`");
    }
    if (progressCallback) {
      C2.currentQueryProgressCallback = progressCallback;
    }
    marshalNode(node);
    C2._ts_query_matches_wasm(
      this[0],
      node.tree[0],
      startPosition.row,
      startPosition.column,
      endPosition.row,
      endPosition.column,
      startIndex,
      endIndex,
      startContainingPosition.row,
      startContainingPosition.column,
      endContainingPosition.row,
      endContainingPosition.column,
      startContainingIndex,
      endContainingIndex,
      matchLimit,
      maxStartDepth
    );
    const rawCount = C2.getValue(TRANSFER_BUFFER, "i32");
    const startAddress = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
    const didExceedMatchLimit = C2.getValue(TRANSFER_BUFFER + 2 * SIZE_OF_INT, "i32");
    const result = new Array(rawCount);
    this.exceededMatchLimit = Boolean(didExceedMatchLimit);
    let filteredCount = 0;
    let address = startAddress;
    for (let i22 = 0; i22 < rawCount; i22++) {
      const patternIndex = C2.getValue(address, "i32");
      address += SIZE_OF_INT;
      const captureCount = C2.getValue(address, "i32");
      address += SIZE_OF_INT;
      const captures = new Array(captureCount);
      address = unmarshalCaptures(this, node.tree, address, patternIndex, captures);
      if (this.textPredicates[patternIndex].every((p2) => p2(captures))) {
        result[filteredCount] = { patternIndex, captures };
        const setProperties = this.setProperties[patternIndex];
        result[filteredCount].setProperties = setProperties;
        const assertedProperties = this.assertedProperties[patternIndex];
        result[filteredCount].assertedProperties = assertedProperties;
        const refutedProperties = this.refutedProperties[patternIndex];
        result[filteredCount].refutedProperties = refutedProperties;
        filteredCount++;
      }
    }
    result.length = filteredCount;
    C2._free(startAddress);
    C2.currentQueryProgressCallback = null;
    return result;
  }
  /**
   * Iterate over all of the individual captures in the order that they
   * appear.
   *
   * This is useful if you don't care about which pattern matched, and just
   * want a single, ordered sequence of captures.
   *
   * @param {Node} node - The node to execute the query on.
   *
   * @param {QueryOptions} options - Options for query execution.
   */
  captures(node, options2 = {}) {
    const startPosition = options2.startPosition ?? ZERO_POINT;
    const endPosition = options2.endPosition ?? ZERO_POINT;
    const startIndex = options2.startIndex ?? 0;
    const endIndex = options2.endIndex ?? 0;
    const startContainingPosition = options2.startContainingPosition ?? ZERO_POINT;
    const endContainingPosition = options2.endContainingPosition ?? ZERO_POINT;
    const startContainingIndex = options2.startContainingIndex ?? 0;
    const endContainingIndex = options2.endContainingIndex ?? 0;
    const matchLimit = options2.matchLimit ?? 4294967295;
    const maxStartDepth = options2.maxStartDepth ?? 4294967295;
    const progressCallback = options2.progressCallback;
    if (typeof matchLimit !== "number") {
      throw new Error("Arguments must be numbers");
    }
    this.matchLimit = matchLimit;
    if (endIndex !== 0 && startIndex > endIndex) {
      throw new Error("`startIndex` cannot be greater than `endIndex`");
    }
    if (endPosition !== ZERO_POINT && (startPosition.row > endPosition.row || startPosition.row === endPosition.row && startPosition.column > endPosition.column)) {
      throw new Error("`startPosition` cannot be greater than `endPosition`");
    }
    if (endContainingIndex !== 0 && startContainingIndex > endContainingIndex) {
      throw new Error("`startContainingIndex` cannot be greater than `endContainingIndex`");
    }
    if (endContainingPosition !== ZERO_POINT && (startContainingPosition.row > endContainingPosition.row || startContainingPosition.row === endContainingPosition.row && startContainingPosition.column > endContainingPosition.column)) {
      throw new Error("`startContainingPosition` cannot be greater than `endContainingPosition`");
    }
    if (progressCallback) {
      C2.currentQueryProgressCallback = progressCallback;
    }
    marshalNode(node);
    C2._ts_query_captures_wasm(
      this[0],
      node.tree[0],
      startPosition.row,
      startPosition.column,
      endPosition.row,
      endPosition.column,
      startIndex,
      endIndex,
      startContainingPosition.row,
      startContainingPosition.column,
      endContainingPosition.row,
      endContainingPosition.column,
      startContainingIndex,
      endContainingIndex,
      matchLimit,
      maxStartDepth
    );
    const count = C2.getValue(TRANSFER_BUFFER, "i32");
    const startAddress = C2.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
    const didExceedMatchLimit = C2.getValue(TRANSFER_BUFFER + 2 * SIZE_OF_INT, "i32");
    const result = new Array();
    this.exceededMatchLimit = Boolean(didExceedMatchLimit);
    const captures = new Array();
    let address = startAddress;
    for (let i22 = 0; i22 < count; i22++) {
      const patternIndex = C2.getValue(address, "i32");
      address += SIZE_OF_INT;
      const captureCount = C2.getValue(address, "i32");
      address += SIZE_OF_INT;
      const captureIndex = C2.getValue(address, "i32");
      address += SIZE_OF_INT;
      captures.length = captureCount;
      address = unmarshalCaptures(this, node.tree, address, patternIndex, captures);
      if (this.textPredicates[patternIndex].every((p2) => p2(captures))) {
        const capture = captures[captureIndex];
        const setProperties = this.setProperties[patternIndex];
        capture.setProperties = setProperties;
        const assertedProperties = this.assertedProperties[patternIndex];
        capture.assertedProperties = assertedProperties;
        const refutedProperties = this.refutedProperties[patternIndex];
        capture.refutedProperties = refutedProperties;
        result.push(capture);
      }
    }
    C2._free(startAddress);
    C2.currentQueryProgressCallback = null;
    return result;
  }
  /** Get the predicates for a given pattern. */
  predicatesForPattern(patternIndex) {
    return this.predicates[patternIndex];
  }
  /**
   * Disable a certain capture within a query.
   *
   * This prevents the capture from being returned in matches, and also
   * avoids any resource usage associated with recording the capture.
   */
  disableCapture(captureName) {
    const captureNameLength = C2.lengthBytesUTF8(captureName);
    const captureNameAddress = C2._malloc(captureNameLength + 1);
    C2.stringToUTF8(captureName, captureNameAddress, captureNameLength + 1);
    C2._ts_query_disable_capture(this[0], captureNameAddress, captureNameLength);
    C2._free(captureNameAddress);
  }
  /**
   * Disable a certain pattern within a query.
   *
   * This prevents the pattern from matching, and also avoids any resource
   * usage associated with the pattern. This throws an error if the pattern
   * index is out of bounds.
   */
  disablePattern(patternIndex) {
    if (patternIndex >= this.predicates.length) {
      throw new Error(
        `Pattern index is ${patternIndex} but the pattern count is ${this.predicates.length}`
      );
    }
    C2._ts_query_disable_pattern(this[0], patternIndex);
  }
  /**
   * Check if, on its last execution, this cursor exceeded its maximum number
   * of in-progress matches.
   */
  didExceedMatchLimit() {
    return this.exceededMatchLimit;
  }
  /** Get the index where the given pattern starts in the query's source. */
  startIndexForPattern(patternIndex) {
    if (patternIndex >= this.predicates.length) {
      throw new Error(
        `Pattern index is ${patternIndex} but the pattern count is ${this.predicates.length}`
      );
    }
    const byteOffset = C2._ts_query_start_byte_for_pattern(this[0], patternIndex);
    return indexForByteOffset(this.source, byteOffset);
  }
  /** Get the index where the given pattern ends in the query's source. */
  endIndexForPattern(patternIndex) {
    if (patternIndex >= this.predicates.length) {
      throw new Error(
        `Pattern index is ${patternIndex} but the pattern count is ${this.predicates.length}`
      );
    }
    const byteOffset = C2._ts_query_end_byte_for_pattern(this[0], patternIndex);
    return indexForByteOffset(this.source, byteOffset);
  }
  /** Get the number of patterns in the query. */
  patternCount() {
    return C2._ts_query_pattern_count(this[0]);
  }
  /** Get the index for a given capture name. */
  captureIndexForName(captureName) {
    return this.captureNames.indexOf(captureName);
  }
  /** Check if a given pattern within a query has a single root node. */
  isPatternRooted(patternIndex) {
    return C2._ts_query_is_pattern_rooted(this[0], patternIndex) === 1;
  }
  /** Check if a given pattern within a query has a single root node. */
  isPatternNonLocal(patternIndex) {
    return C2._ts_query_is_pattern_non_local(this[0], patternIndex) === 1;
  }
  /**
   * Check if the step at the given index in the query's source is 'definite'.
   *
   * A query step is 'definite' if its parent pattern will be guaranteed to
   * match successfully once it reaches the step.
   */
  isPatternGuaranteedAtStep(index2) {
    const byteOffset = C2.lengthBytesUTF8(this.source.slice(0, index2));
    return C2._ts_query_is_pattern_guaranteed_at_step(this[0], byteOffset) === 1;
  }
};

// src/tree.mts
import { fileURLToPath } from "node:url";
import * as path from "node:path";
var outDir = path.dirname(fileURLToPath(import.meta.url));
var parsers = null;
function grammarPath(file) {
  return path.join(outDir, "grammars", file);
}
function initParsers() {
  parsers ??= (async () => {
    await Parser.init({
      locateFile: (basename3) => path.join(outDir, basename3)
    });
    const [mybatis, java] = await Promise.all([
      Language.load(grammarPath("mybatis.wasm")),
      Language.load(grammarPath("java.wasm"))
    ]);
    const xml = new Parser();
    xml.setLanguage(mybatis);
    const javaParser = new Parser();
    javaParser.setLanguage(java);
    return { xml, java: javaParser };
  })();
  return parsers;
}
async function parseXml(content) {
  const { xml } = await initParsers();
  return xml.parse(content);
}
async function parseJava(content) {
  const { java } = await initParsers();
  return java.parse(content);
}
var STATEMENT_TAGS = ["select", "insert", "update", "delete", "procedure", "selectKey"];
var ROOT_TAGS = ["mapper", "sqlMap"];
var TYPE_ATTRIBUTES = [
  "namespace",
  "resultType",
  "parameterType",
  "type",
  "javaType",
  "ofType",
  "typeHandler"
];
var PROPERTY_TAGS = ["id", "result", "association", "collection"];
var NAMED_ELEMENT_TYPES = {
  Mapper: "mapper",
  MapperSTag: "mapper",
  MapperETag: "mapper",
  SqlMap: "sqlMap",
  SqlMapSTag: "sqlMap",
  SqlMapETag: "sqlMap"
};
var TAG_TYPES = /* @__PURE__ */ new Set([
  "STag",
  "ETag",
  "EmptyElemTag",
  "MapperSTag",
  "MapperETag",
  "SqlMapSTag",
  "SqlMapETag"
]);
function isTagNode(node) {
  return TAG_TYPES.has(node.type) || isElementNode(node);
}
function isElementNode(node) {
  const t2 = node.type;
  return t2 === "element" || t2 === "Mapper" || t2 === "SqlMap" || t2.endsWith("Elem");
}
function elementName(node) {
  const mapped = NAMED_ELEMENT_TYPES[node.type];
  if (mapped) {
    return mapped;
  }
  if (!isTagNode(node)) {
    return null;
  }
  const child = node.namedChild(0);
  if (child && child.type === "Name") {
    return child.text;
  }
  if (node.type === "element") {
    const stag = node.namedChild(0);
    const name2 = stag && stag.namedChild(0);
    return name2 && name2.type === "Name" ? name2.text : null;
  }
  return null;
}
function attributeOf(node, name2) {
  let target = node;
  while (target && !isTagNode(target)) {
    target = target.parent;
  }
  if (!target) {
    return null;
  }
  const holders = [target];
  for (let i3 = 0; i3 < target.namedChildCount; i3++) {
    const child = target.namedChild(i3);
    if (child && TAG_TYPES.has(child.type)) {
      holders.push(child);
    }
  }
  for (const holder of holders) {
    for (let i3 = 0; i3 < holder.namedChildCount; i3++) {
      const child = holder.namedChild(i3);
      if (child && child.type === "Attribute") {
        const nameNode = child.namedChild(0);
        const valueNode = child.namedChild(1);
        if (nameNode && nameNode.text === name2 && valueNode) {
          return { value: valueNode.text.replace(/^['"]|['"]$/g, ""), node: valueNode };
        }
      }
    }
  }
  return null;
}
function startTagNode(node) {
  const t2 = node.type;
  if (t2 === "STag" || t2 === "EmptyElemTag" || t2 === "MapperSTag" || t2 === "SqlMapSTag") {
    return node;
  }
  for (let i3 = 0; i3 < node.namedChildCount; i3++) {
    const child = node.namedChild(i3);
    if (child && (child.type === "STag" || child.type === "EmptyElemTag")) {
      return child;
    }
  }
  return null;
}
function enclosingStatement(node) {
  let current = node;
  while (current) {
    if (isElementNode(current)) {
      const name2 = elementName(current);
      if (name2 && STATEMENT_TAGS.includes(name2)) {
        return current;
      }
    }
    current = current.parent;
  }
  return null;
}
function enclosingResultMap(node) {
  let current = node;
  while (current) {
    if (isElementNode(current) && elementName(current) === "resultMap") {
      return current;
    }
    current = current.parent;
  }
  return null;
}
function enclosingNamespace(node) {
  let current = node;
  while (current) {
    if (isElementNode(current)) {
      const name2 = elementName(current);
      if (name2 && ROOT_TAGS.includes(name2)) {
        return attributeOf(current, "namespace")?.value ?? null;
      }
    }
    current = current.parent;
  }
  return null;
}
function attributeNameAt(node) {
  let current = node;
  while (current) {
    if (current.type === "Attribute") {
      const nameNode = current.namedChild(0);
      const valueNode = current.namedChild(1);
      if (nameNode && valueNode) {
        return { name: nameNode.text, value: valueNode };
      }
      return null;
    }
    current = current.parent;
  }
  return null;
}
function* walkNamed(node) {
  yield node;
  for (let i3 = 0; i3 < node.namedChildCount; i3++) {
    const child = node.namedChild(i3);
    if (child) {
      yield* walkNamed(child);
    }
  }
}
function simplifyType(node) {
  if (node.type === "type_identifier") {
    return node.text;
  }
  if (node.type === "generic_type") {
    const container = node.namedChild(0);
    if (!container) {
      return null;
    }
    const args2 = node.namedChild(1);
    if (!args2) {
      return container.text;
    }
    if (container.text === "List" || container.text === "Set") {
      const first = args2.namedChild(0);
      return first ? simplifyType(first) : null;
    }
    if (container.text === "Map") {
      const value = args2.namedChild(1);
      return value ? simplifyType(value) : null;
    }
    return container.text;
  }
  return null;
}
function collectParams(parameters) {
  const params = [];
  for (let i3 = 0; i3 < parameters.namedChildCount; i3++) {
    const child = parameters.namedChild(i3);
    if (!child || child.type !== "formal_parameter") {
      continue;
    }
    const nameNode = child.childForFieldName("name");
    const typeNode = child.childForFieldName("type");
    if (!nameNode) {
      continue;
    }
    const annotation = child.text.match(/@Param\s*\(\s*"([^"]+)"\s*\)/)?.[1];
    params.push({
      name: nameNode.text,
      type: typeNode ? simplifyType(typeNode) ?? void 0 : void 0,
      annotation
    });
  }
  return params;
}
function parseJavaFile(tree) {
  const info2 = {
    packageName: "",
    typeName: null,
    isInterface: false,
    methods: /* @__PURE__ */ new Map(),
    fields: /* @__PURE__ */ new Map()
  };
  const visit = (node) => {
    switch (node.type) {
      case "package_declaration": {
        for (let i3 = 0; i3 < node.namedChildCount; i3++) {
          const child = node.namedChild(i3);
          if (child && child.type === "scoped_identifier") {
            info2.packageName = child.text;
            break;
          }
        }
        break;
      }
      case "interface_declaration":
      case "class_declaration":
      case "record_declaration":
      case "enum_declaration": {
        if (info2.typeName === null) {
          const name2 = node.childForFieldName("name");
          if (name2) {
            info2.typeName = name2.text;
            info2.isInterface = node.type === "interface_declaration";
          }
        }
        break;
      }
      case "method_declaration": {
        const name2 = node.childForFieldName("name");
        const parameters = node.childForFieldName("parameters");
        if (name2 && parameters) {
          info2.methods.set(name2.text, { name: name2.text, params: collectParams(parameters) });
        }
        break;
      }
      case "field_declaration": {
        const typeNode = node.childForFieldName("type");
        const declarator = node.childForFieldName("declarator");
        const nameNode = declarator?.childForFieldName("name");
        if (typeNode && nameNode) {
          info2.fields.set(nameNode.text, simplifyType(typeNode) ?? nameNode.text);
        }
        break;
      }
    }
    for (let i3 = 0; i3 < node.namedChildCount; i3++) {
      const child = node.namedChild(i3);
      if (child) {
        visit(child);
      }
    }
  };
  visit(tree.rootNode);
  return info2;
}
function javaMethodTarget(tree, line, character) {
  const node = tree.rootNode.descendantForPosition({ row: line, column: character });
  let method = null;
  let iface = null;
  let current = node;
  while (current) {
    if (current.type === "method_declaration" && !method) {
      method = current;
    } else if (current.type === "interface_declaration") {
      iface = current;
      break;
    }
    current = current.parent;
  }
  if (!method || !iface) {
    return null;
  }
  const methodName = method.childForFieldName("name");
  const interfaceName = iface.childForFieldName("name");
  if (!methodName || !interfaceName) {
    return null;
  }
  const resultType = method.childForFieldName("type");
  const simplified = resultType ? simplifyType(resultType) : null;
  return {
    fqn: `${javaPackageName(tree)}.${interfaceName.text}`,
    interfaceName: interfaceName.text,
    methodName: methodName.text,
    resultType: simplified ? qualifyTypeName(simplified, tree) : null
  };
}
function javaPackageName(tree) {
  for (let i3 = 0; i3 < tree.rootNode.namedChildCount; i3++) {
    const child = tree.rootNode.namedChild(i3);
    if (child && child.type === "package_declaration") {
      for (let j = 0; j < child.namedChildCount; j++) {
        const part = child.namedChild(j);
        if (part && part.type === "scoped_identifier") {
          return part.text;
        }
      }
    }
  }
  return "";
}
var BUILTIN_TYPES = /* @__PURE__ */ new Set([
  "void",
  "boolean",
  "byte",
  "short",
  "int",
  "long",
  "float",
  "double",
  "char",
  "Boolean",
  "Byte",
  "Short",
  "Integer",
  "Long",
  "Float",
  "Double",
  "Character",
  "String",
  "Object"
]);
function qualifyTypeName(name2, tree) {
  if (BUILTIN_TYPES.has(name2) || name2.includes(".")) {
    return name2;
  }
  for (let i3 = 0; i3 < tree.rootNode.namedChildCount; i3++) {
    const child = tree.rootNode.namedChild(i3);
    if (child?.type !== "import_declaration") {
      continue;
    }
    const imported = child.text.match(/^import\s+(?:static\s+)?([\w.]+?)\s*;/)?.[1];
    if (imported && imported.endsWith(`.${name2}`)) {
      return imported;
    }
  }
  const pkg = javaPackageName(tree);
  return pkg ? `${pkg}.${name2}` : name2;
}
function namePosition(declaration, field) {
  const name2 = declaration.childForFieldName(field);
  if (!name2) {
    return null;
  }
  return { row: name2.startPosition.row, column: name2.startPosition.column };
}
var TYPE_DECLARATIONS = [
  "class_declaration",
  "interface_declaration",
  "enum_declaration",
  "record_declaration"
];
function javaTypePosition(tree) {
  for (const node of walkNamed(tree.rootNode)) {
    if (TYPE_DECLARATIONS.includes(node.type)) {
      return namePosition(node, "name");
    }
  }
  return null;
}
function javaMethodPosition(tree, method) {
  for (const node of walkNamed(tree.rootNode)) {
    if (node.type === "method_declaration" && node.childForFieldName("name")?.text === method) {
      return namePosition(node, "name");
    }
  }
  return null;
}
function javaFieldPosition(tree, field) {
  for (const node of walkNamed(tree.rootNode)) {
    if (node.type !== "field_declaration") {
      continue;
    }
    const declarator = node.childForFieldName("declarator");
    const name2 = declarator?.childForFieldName("name");
    if (name2?.text === field) {
      return { row: name2.startPosition.row, column: name2.startPosition.column };
    }
  }
  return null;
}
function javaParamPosition(tree, method, param) {
  for (const node of walkNamed(tree.rootNode)) {
    if (node.type !== "method_declaration" || node.childForFieldName("name")?.text !== method) {
      continue;
    }
    const parameters = node.childForFieldName("parameters");
    if (!parameters) {
      return null;
    }
    for (let i3 = 0; i3 < parameters.namedChildCount; i3++) {
      const child = parameters.namedChild(i3);
      if (!child || child.type !== "formal_parameter") {
        continue;
      }
      const nameNode = child.childForFieldName("name");
      const annotation = child.text.match(/@Param\s*\(\s*"([^"]+)"\s*\)/)?.[1];
      if (nameNode && (nameNode.text === param || annotation === param)) {
        return { row: nameNode.startPosition.row, column: nameNode.startPosition.column };
      }
    }
  }
  return null;
}
function xmlElementPosition(tree, tag, id) {
  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node) || elementName(node) !== tag) {
      continue;
    }
    if (id !== void 0 && attributeOf(node, "id")?.value !== id) {
      continue;
    }
    const stag = startTagNode(node);
    const name2 = stag?.namedChild(0);
    if (name2 && name2.type === "Name") {
      return { row: name2.startPosition.row, column: name2.startPosition.column };
    }
    return { row: node.startPosition.row, column: node.startPosition.column };
  }
  return null;
}

// src/project.mts
var defaultOptions = {
  mapper_glob: "**/*[Mm]apper*",
  classpaths: ["src/main"]
};
function readOptions(raw) {
  const source = raw ?? {};
  return {
    mapper_glob: typeof source.mapper_glob === "string" ? source.mapper_glob : defaultOptions.mapper_glob,
    classpaths: Array.isArray(source.classpaths) ? source.classpaths.filter((c2) => typeof c2 === "string") : defaultOptions.classpaths
  };
}
function globToRegExp(glob) {
  let re = "^";
  let i3 = 0;
  while (i3 < glob.length) {
    const c2 = glob[i3];
    if (c2 === "*") {
      if (glob[i3 + 1] === "*") {
        let j = i3 + 2;
        while (glob[j] === "/") {
          j++;
        }
        re += "(?:.*/)?";
        i3 = j;
      } else {
        re += "[^/]*";
        i3++;
      }
    } else if (c2 === "?") {
      re += "[^/]";
      i3++;
    } else if (c2 === "[") {
      const end = glob.indexOf("]", i3);
      if (end === -1) {
        re += "\\[";
        i3++;
      } else {
        re += "[" + glob.slice(i3 + 1, end) + "]";
        i3 = end + 1;
      }
    } else {
      re += c2.replace(/[.+^${}()|[\]\\]/g, "\\$&");
      i3++;
    }
  }
  return new RegExp(re + "$");
}
var javaBuiltinTypes = [
  { simple: "Object", full: "java.lang.Object" },
  { simple: "String", full: "java.lang.String" },
  { simple: "Character", full: "java.lang.Character" },
  { simple: "Boolean", full: "java.lang.Boolean" },
  { simple: "Byte", full: "java.lang.Byte" },
  { simple: "Short", full: "java.lang.Short" },
  { simple: "Integer", full: "java.lang.Integer" },
  { simple: "Long", full: "java.lang.Long" },
  { simple: "Float", full: "java.lang.Float" },
  { simple: "Double", full: "java.lang.Double" },
  { simple: "BigDecimal", full: "java.math.BigDecimal" },
  { simple: "BigInteger", full: "java.math.BigInteger" },
  { simple: "Date", full: "java.util.Date" },
  { simple: "List", full: "java.util.List" },
  { simple: "Map", full: "java.util.Map" },
  { simple: "Set", full: "java.util.Set" },
  { simple: "LocalDate", full: "java.time.LocalDate" },
  { simple: "LocalTime", full: "java.time.LocalTime" },
  { simple: "LocalDateTime", full: "java.time.LocalDateTime" },
  { simple: "byte", full: "byte" },
  { simple: "short", full: "short" },
  { simple: "int", full: "int" },
  { simple: "long", full: "long" },
  { simple: "float", full: "float" },
  { simple: "double", full: "double" },
  { simple: "boolean", full: "boolean" },
  { simple: "char", full: "char" }
];
var ROOT_FILES = ["pom.xml", "build.gradle", "build.gradle.kts"];
var SKIP_DIRS = /* @__PURE__ */ new Set(["target", "build"]);
function findProjectRoot(startDir) {
  const moduleRoot = findModuleRoot(startDir);
  if (!moduleRoot) {
    return null;
  }
  let root2 = moduleRoot;
  let dir = path2.dirname(moduleRoot);
  for (; ; ) {
    if (hasRootFile(dir)) {
      root2 = dir;
    }
    const parent = path2.dirname(dir);
    if (parent === dir) {
      break;
    }
    dir = parent;
  }
  return root2;
}
function findModuleRoot(startDir) {
  let dir = path2.resolve(startDir);
  for (; ; ) {
    if (hasRootFile(dir)) {
      return dir;
    }
    const parent = path2.dirname(dir);
    if (parent === dir) {
      return null;
    }
    dir = parent;
  }
}
function hasRootFile(dir) {
  return ROOT_FILES.some((file) => existsSync(path2.join(dir, file)));
}
async function sourceRoots(root2, classpaths) {
  const wanted = new Set(
    classpaths.flatMap(
      (classpath) => [`${classpath}/java`, `${classpath}/resources`].map((suffix) => suffix.replace(/\/+$/, ""))
    )
  );
  const roots = [];
  const walk = async (dir) => {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name.startsWith(".") || SKIP_DIRS.has(entry.name)) {
        continue;
      }
      const full = path2.join(dir, entry.name);
      const relative2 = path2.relative(root2, full).split(path2.sep).join("/");
      if (wanted.has(relative2)) {
        roots.push(full);
      }
      await walk(full);
    }
  };
  await walk(root2);
  return roots;
}
async function scanProject(root2, mapperRe2, classpaths) {
  const javaFiles = [];
  const xmlFiles = [];
  const collect = async (dir, isResources) => {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path2.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!entry.name.startsWith(".") && !SKIP_DIRS.has(entry.name)) {
          await collect(full, isResources);
        }
      } else if (isResources) {
        if (entry.name.endsWith(".xml") && mapperRe2.test(entry.name)) {
          xmlFiles.push(full);
        }
      } else if (entry.name.endsWith(".java")) {
        javaFiles.push(full);
      }
    }
  };
  for (const sourceRoot of await sourceRoots(root2, classpaths)) {
    await collect(sourceRoot, path2.basename(sourceRoot) === "resources");
  }
  return { root: root2, javaFiles, xmlFiles };
}
function collectXml(tree, path4) {
  const mapper = {
    path: path4,
    namespace: "",
    statements: /* @__PURE__ */ new Map(),
    resultMaps: /* @__PURE__ */ new Map(),
    sqlIds: /* @__PURE__ */ new Set()
  };
  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node)) {
      continue;
    }
    const name2 = elementName(node);
    if (!name2) {
      continue;
    }
    if (ROOT_TAGS.includes(name2)) {
      mapper.namespace = attributeOf(node, "namespace")?.value ?? mapper.namespace;
    } else if (name2 === "sql") {
      const id = attributeOf(node, "id")?.value;
      if (id) {
        mapper.sqlIds.add(id);
      }
    } else if (name2 === "resultMap") {
      const id = attributeOf(node, "id")?.value;
      if (!id) {
        continue;
      }
      const info2 = {
        id,
        type: attributeOf(node, "type")?.value,
        properties: /* @__PURE__ */ new Map()
      };
      for (const child of walkNamed(node)) {
        if (child === node || !isElementNode(child)) {
          continue;
        }
        const childName = elementName(child);
        if (childName && PROPERTY_TAGS.includes(childName)) {
          const property = attributeOf(child, "property")?.value;
          if (property) {
            info2.properties.set(property, child.startPosition.row);
          }
        }
      }
      mapper.resultMaps.set(id, info2);
    } else if (STATEMENT_TAGS.includes(name2)) {
      const id = attributeOf(node, "id")?.value;
      if (id) {
        mapper.statements.set(id, {
          id,
          parameterType: attributeOf(node, "parameterType")?.value,
          resultMapId: attributeOf(node, "resultMap")?.value
        });
      }
    }
  }
  return mapper;
}
var BindingIndex = class {
  xmlByPath = /* @__PURE__ */ new Map();
  javaByPath = /* @__PURE__ */ new Map();
  javaByFqn = /* @__PURE__ */ new Map();
  simpleToFqns = /* @__PURE__ */ new Map();
  async refreshXml(path4, content) {
    const text = content ?? await readFile(path4, "utf8");
    const tree = await parseXml(text);
    if (!tree) {
      return;
    }
    const mapper = collectXml(tree, path4);
    tree.delete();
    if (mapper.namespace) {
      this.xmlByPath.set(path4, mapper);
    } else {
      this.xmlByPath.delete(path4);
    }
  }
  async refreshJava(path4, content) {
    const text = content ?? await readFile(path4, "utf8");
    this.removeJava(path4);
    const tree = await parseJava(text);
    if (!tree) {
      return;
    }
    const info2 = parseJavaFile(tree);
    tree.delete();
    if (!info2.typeName) {
      return;
    }
    const fqn = info2.packageName ? `${info2.packageName}.${info2.typeName}` : info2.typeName;
    const entry = { path: path4, fqn, name: info2.typeName, info: info2 };
    this.javaByPath.set(path4, entry);
    this.javaByFqn.set(fqn, entry);
    const fqns = this.simpleToFqns.get(info2.typeName) ?? [];
    fqns.push(fqn);
    this.simpleToFqns.set(info2.typeName, fqns);
  }
  deleteFile(path4) {
    this.xmlByPath.delete(path4);
    this.removeJava(path4);
  }
  removeJava(path4) {
    const entry = this.javaByPath.get(path4);
    if (!entry) {
      return;
    }
    this.javaByPath.delete(path4);
    if (this.javaByFqn.get(entry.fqn) === entry) {
      this.javaByFqn.delete(entry.fqn);
    }
    const fqns = this.simpleToFqns.get(entry.name);
    if (fqns) {
      const i3 = fqns.indexOf(entry.fqn);
      if (i3 >= 0) {
        fqns.splice(i3, 1);
      }
      if (fqns.length === 0) {
        this.simpleToFqns.delete(entry.name);
      }
    }
  }
  allJava() {
    return [...this.javaByPath.values()];
  }
  resolveClass(simpleOrFqn) {
    const exact = this.javaByFqn.get(simpleOrFqn);
    if (exact) {
      return exact;
    }
    const fqns = this.simpleToFqns.get(simpleOrFqn);
    if (!fqns || fqns.length !== 1) {
      return null;
    }
    return this.javaByFqn.get(fqns[0]) ?? null;
  }
  mapperMethods(fqn) {
    const entry = this.javaByFqn.get(fqn);
    if (!entry || !entry.info.isInterface) {
      return null;
    }
    return [...entry.info.methods.values()];
  }
  xmlForNamespace(namespace) {
    for (const mapper of this.xmlByPath.values()) {
      if (mapper.namespace === namespace) {
        return mapper;
      }
    }
    return null;
  }
};
function walkEntity(index2, type, segments) {
  let currentType = type;
  let last = segments[0];
  for (const segment of segments) {
    const entity = index2.resolveClass(currentType);
    if (!entity) {
      return null;
    }
    const fieldType = entity.info.fields.get(segment);
    if (!fieldType) {
      return null;
    }
    currentType = fieldType;
    last = segment;
  }
  return { type: currentType, label: `${currentType} ${last}` };
}
function resolveParamPath(index2, methods, parameterType, path4) {
  const segments = path4.split(".").filter((s2) => s2.length > 0);
  if (segments.length === 0) {
    return null;
  }
  if (methods) {
    for (const method of methods) {
      for (const param of method.params) {
        if (param.name === segments[0] || param.annotation === segments[0]) {
          if (segments.length === 1) {
            return {
              type: param.type ?? "",
              label: param.type ? `${param.type} ${param.name}` : param.name
            };
          }
          const viaParam = param.type ? walkEntity(index2, param.type, segments.slice(1)) : null;
          if (viaParam) {
            return viaParam;
          }
          return parameterType ? walkEntity(index2, parameterType, segments.slice(1)) : null;
        }
      }
    }
    if (methods.length === 1 && methods[0].params.length === 1 && methods[0].params[0].type) {
      const resolved = walkEntity(index2, methods[0].params[0].type, segments);
      if (resolved) {
        return resolved;
      }
    }
  }
  if (parameterType) {
    return walkEntity(index2, parameterType, segments);
  }
  return null;
}

// src/completion.mts
var import_vscode_languageserver = __toESM(require_api3(), 1);
var ELEMENTS = {
  select: {
    snippet: '<select id="${1}">${2}</select>',
    attrs: [
      "id",
      "parameterType",
      "resultType",
      "resultMap",
      "flushCache",
      "timeout",
      "fetchSize",
      "statementType"
    ]
  },
  insert: {
    snippet: '<insert id="${1}">${2}</insert>',
    attrs: [
      "id",
      "parameterType",
      "flushCache",
      "timeout",
      "statementType",
      "useGeneratedKeys",
      "keyProperty",
      "keyColumn"
    ]
  },
  update: {
    snippet: '<update id="${1}">${2}</update>',
    attrs: ["id", "parameterType", "flushCache", "timeout", "statementType"]
  },
  delete: {
    snippet: '<delete id="${1}">${2}</delete>',
    attrs: ["id", "parameterType", "flushCache", "timeout", "statementType"]
  },
  sql: {
    snippet: '<sql id="${1}">${2}</sql>',
    attrs: ["id", "databaseId"]
  },
  include: {
    snippet: '<include refid="${1}"/>',
    attrs: ["refid", "databaseId"]
  },
  resultMap: {
    snippet: '<resultMap id="${1}" type="${2}">${3}</resultMap>',
    attrs: ["id", "type", "extends", "autoMapping"]
  },
  result: {
    snippet: '<result property="${1}" column="${2}"/>',
    attrs: ["property", "column", "javaType", "jdbcType", "typeHandler"]
  },
  id: {
    snippet: '<id property="${1}" column="${2}"/>',
    attrs: ["property", "column", "javaType", "jdbcType", "typeHandler"]
  },
  association: {
    snippet: '<association property="${1}" javaType="${2}">${3}</association>',
    attrs: [
      "property",
      "column",
      "javaType",
      "select",
      "resultMap",
      "columnPrefix",
      "notNullColumn"
    ]
  },
  collection: {
    snippet: '<collection property="${1}" ofType="${2}">${3}</collection>',
    attrs: ["property", "column", "ofType", "select", "resultMap", "columnPrefix", "notNullColumn"]
  },
  selectKey: {
    snippet: '<selectKey keyProperty="${1}" resultType="${2}">${3}</selectKey>',
    attrs: ["keyProperty", "resultType", "order", "statementType"]
  },
  if: {
    snippet: '<if test="${1}">${2}</if>',
    attrs: ["test"]
  },
  choose: {
    snippet: "<choose>${1}</choose>",
    attrs: []
  },
  when: {
    snippet: '<when test="${1}">${2}</when>',
    attrs: ["test"]
  },
  otherwise: {
    snippet: "<otherwise>${1}</otherwise>",
    attrs: []
  },
  trim: {
    snippet: '<trim prefix="${1}" suffixOverrides="${2}">${3}</trim>',
    attrs: ["prefix", "prefixOverrides", "suffix", "suffixOverrides"]
  },
  where: {
    snippet: "<where>${1}</where>",
    attrs: []
  },
  set: {
    snippet: "<set>${1}</set>",
    attrs: []
  },
  foreach: {
    snippet: '<foreach collection="${1}" item="${2}">${3}</foreach>',
    attrs: ["collection", "item", "index", "open", "separator", "close", "nullable"]
  },
  bind: {
    snippet: '<bind name="${1}" value="${2}"/>',
    attrs: ["name", "value"]
  }
};
var SQL_KEYWORDS = [
  "SELECT",
  "FROM",
  "WHERE",
  "AND",
  "OR",
  "NOT",
  "NULL",
  "IS",
  "IN",
  "BETWEEN",
  "LIKE",
  "AS",
  "DISTINCT",
  "JOIN",
  "INNER JOIN",
  "LEFT JOIN",
  "RIGHT JOIN",
  "FULL JOIN",
  "ON",
  "GROUP BY",
  "HAVING",
  "ORDER BY",
  "ASC",
  "DESC",
  "LIMIT",
  "OFFSET",
  "UNION",
  "CASE",
  "WHEN",
  "THEN",
  "ELSE",
  "END",
  "INSERT INTO",
  "VALUES",
  "UPDATE",
  "SET",
  "DELETE FROM",
  "TRUNCATE",
  "DUPLICATE",
  "KEY",
  "CALL",
  "CURRENT_TIMESTAMP",
  "OVER",
  "PARTITION BY",
  "TRUE",
  "FALSE"
];
var SQL_TEXT_TAGS = [
  "sql",
  "if",
  "choose",
  "when",
  "otherwise",
  "trim",
  "where",
  "set",
  "foreach",
  "bind"
];
function item(label, kind, detail) {
  return { label, kind, detail, insertText: label, filterText: label };
}
function rank(items, partial) {
  const needle = partial.toLowerCase();
  const scored = items.map((entry, order) => {
    const label = entry.label.toLowerCase();
    let score = 900 + order;
    if (needle.length > 0) {
      if (label.startsWith(needle)) {
        score = label.length - needle.length;
      } else if (label.includes(needle)) {
        score = 400 + label.indexOf(needle);
      }
    }
    entry.sortText = `${String(score).padStart(6, "0")}${entry.label}`;
    return entry;
  });
  scored.sort((a2, b2) => a2.sortText < b2.sortText ? -1 : 1);
  return scored;
}
function sqlIds(tree) {
  const ids = [];
  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node) || elementName(node) !== "sql") {
      continue;
    }
    const id = attributeOf(node, "id")?.value;
    if (id) {
      ids.push(id);
    }
  }
  return ids;
}
function resultMapIds(tree) {
  const ids = [];
  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node) || elementName(node) !== "resultMap") {
      continue;
    }
    const id = attributeOf(node, "id")?.value;
    if (id) {
      ids.push(id);
    }
  }
  return ids;
}
function classItems(index2) {
  const items = index2.allJava().map((entry) => item(entry.fqn, import_vscode_languageserver.CompletionItemKind.Class, entry.name));
  for (const builtin of javaBuiltinTypes) {
    items.push(item(builtin.simple, import_vscode_languageserver.CompletionItemKind.Class, builtin.full));
  }
  return items;
}
function fieldItems(index2, classname) {
  const entity = index2.resolveClass(classname);
  if (!entity) {
    return [];
  }
  return [...entity.info.fields.keys()].map(
    (name2) => item(name2, import_vscode_languageserver.CompletionItemKind.Field, entity.info.fields.get(name2))
  );
}
function paramItems(index2, node, typed) {
  const statement = enclosingStatement(node);
  if (!statement) {
    return [];
  }
  const parameterType = attributeOf(statement, "parameterType")?.value;
  const namespace = enclosingNamespace(node);
  const statementId = attributeOf(statement, "id")?.value;
  let methods = namespace ? index2.mapperMethods(namespace) : null;
  if (methods && statementId) {
    const match = methods.filter((m2) => m2.name === statementId);
    if (match.length > 0) {
      methods = match;
    }
  }
  const raw = typed.split(".").filter((s2) => s2.length > 0);
  const segments = typed.endsWith(".") ? raw : raw.slice(0, -1);
  let baseType;
  let headMatched = false;
  const head = segments[0];
  if (head && methods) {
    outer: for (const method of methods) {
      for (const param of method.params) {
        if (param.name === head || param.annotation === head) {
          baseType = param.type;
          headMatched = true;
          segments.shift();
          break outer;
        }
      }
    }
  }
  if (!baseType && segments.length > 0 && parameterType) {
    baseType = parameterType;
  }
  if (segments.length === 0 && !headMatched && methods) {
    const params = methods.flatMap((m2) => m2.params);
    if (params.length > 1 || params.some((param) => param.annotation)) {
      return params.map(
        (param) => item(param.annotation ?? param.name, import_vscode_languageserver.CompletionItemKind.Field, param.type ?? param.name)
      );
    }
  }
  if (!baseType && methods && methods.length === 1 && methods[0].params.length === 1) {
    baseType = parameterType ?? methods[0].params[0].type;
  }
  if (baseType) {
    const walk = (base) => {
      if (!base) {
        return [];
      }
      let type = base;
      for (const segment of segments) {
        const entity = index2.resolveClass(type);
        const next = entity?.info.fields.get(segment);
        if (!entity || !next) {
          return [];
        }
        type = next;
      }
      return fieldItems(index2, type);
    };
    const viaParam = walk(baseType);
    if (viaParam.length > 0 || !headMatched) {
      return viaParam;
    }
    return walk(parameterType);
  }
  return [];
}
function inSqlRegion(node) {
  let current = node;
  while (current) {
    const t2 = current.type;
    if (t2 === "Attribute") {
      return false;
    }
    if (t2 === "CharData" || t2 === "content") {
      let parent = current.parent;
      while (parent) {
        if (isElementNode(parent)) {
          const name2 = elementName(parent);
          return name2 !== null && (SQL_TEXT_TAGS.includes(name2) || STATEMENT_TAGS.includes(name2));
        }
        parent = parent.parent;
      }
      return false;
    }
    if (isElementNode(current)) {
      return false;
    }
    current = current.parent;
  }
  return false;
}
async function completeAt(text, row, column, index2) {
  const lines = text.split("\n");
  const line = lines[row] ?? "";
  const before = line.slice(0, column);
  const partial = before.match(/[A-Za-z0-9_.]*$/)?.[0] ?? "";
  const tree = await parseXml(text);
  if (!tree) {
    return [];
  }
  const node = tree.rootNode.descendantForPosition({ row, column }) ?? tree.rootNode;
  let items = null;
  const attr = attributeNameAt(node);
  if (attr) {
    if (TYPE_ATTRIBUTES.includes(attr.name)) {
      items = classItems(index2);
    } else if (attr.name === "id") {
      const element = enclosingStatement(node);
      const namespace = enclosingNamespace(node);
      if (element && namespace) {
        const methods = index2.mapperMethods(namespace);
        items = methods ? methods.map((m2) => item(m2.name, import_vscode_languageserver.CompletionItemKind.Field)) : [];
      }
    } else if (attr.name === "property") {
      const resultMap = enclosingResultMap(node);
      const type = resultMap ? attributeOf(resultMap, "type")?.value : void 0;
      items = type ? fieldItems(index2, type) : [];
    } else if (attr.name === "refid") {
      items = sqlIds(tree).map((id) => item(id, import_vscode_languageserver.CompletionItemKind.Property));
    } else if (attr.name === "resultMap" || attr.name === "extends") {
      items = resultMapIds(tree).map((id) => item(id, import_vscode_languageserver.CompletionItemKind.Property));
    } else {
      items = [];
    }
  }
  if (items === null) {
    const typed = before.match(/[#$]\{([^}]*)$/)?.[1];
    if (typed !== void 0) {
      items = paramItems(index2, node, typed);
    }
  }
  if (items === null) {
    const tagPartial = before.match(/<(\w*)$/)?.[1];
    if (tagPartial !== void 0) {
      items = Object.keys(ELEMENTS).map((tag) => ({
        label: tag,
        kind: import_vscode_languageserver.CompletionItemKind.Snippet,
        insertText: ELEMENTS[tag].snippet.replace(/^</, ""),
        filterText: tag,
        detail: ELEMENTS[tag].snippet,
        insertTextFormat: 2
      }));
    }
  }
  if (items === null) {
    const attrCtx = before.match(/<(\w+)\s+([^<>]*)$/);
    if (attrCtx) {
      const quotes = (attrCtx[2].match(/"/g) ?? []).length;
      if (quotes % 2 === 0) {
        const spec = ELEMENTS[attrCtx[1]];
        items = spec ? spec.attrs.map((attr2) => ({
          label: attr2,
          kind: import_vscode_languageserver.CompletionItemKind.Property,
          insertText: `${attr2}=""`,
          filterText: attr2
        })) : [];
      }
    }
  }
  if (items === null && inSqlRegion(node) && /\w/.test(partial)) {
    items = SQL_KEYWORDS.map((keyword) => item(keyword, import_vscode_languageserver.CompletionItemKind.Keyword));
  }
  tree.delete();
  return rank(items ?? [], partial);
}

// src/inlay.mts
function boundMethods(index2, namespace, statementId) {
  if (!namespace) {
    return null;
  }
  const methods = index2.mapperMethods(namespace);
  if (!methods) {
    return null;
  }
  if (statementId) {
    const match = methods.filter((m2) => m2.name === statementId);
    if (match.length > 0) {
      return match;
    }
  }
  return methods;
}
function signature(method) {
  const params = method.params.map((param) => [param.type, param.annotation ?? param.name].filter(Boolean).join(" ")).join(", ");
  return `${method.name}(${params})`;
}
async function inlayHints(text, startRow, endRow, index2) {
  const lines = text.split("\n");
  const tree = await parseXml(text);
  if (!tree) {
    return [];
  }
  const hints = [];
  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node)) {
      continue;
    }
    const name2 = elementName(node);
    if (!name2 || !STATEMENT_TAGS.includes(name2)) {
      continue;
    }
    const id = attributeOf(node, "id")?.value;
    if (!id) {
      continue;
    }
    const tag = startTagNode(node);
    const row = tag ? tag.endPosition.row : node.startPosition.row;
    if (row < startRow || row > endRow) {
      continue;
    }
    const namespace = enclosingNamespace(node);
    const methods = boundMethods(index2, namespace, id);
    if (!methods) {
      continue;
    }
    const match = methods.find((m2) => m2.name === id);
    if (!match) {
      continue;
    }
    const column = lines[row]?.length ?? 0;
    hints.push({
      position: { line: row, character: column },
      label: ` ${signature(match)}`,
      paddingLeft: true
    });
  }
  const parameterRe = /[#$]\{([^}]*)\}/g;
  for (let row = startRow; row <= endRow && row < lines.length; row++) {
    for (const match of lines[row].matchAll(parameterRe)) {
      const parameter = match[1];
      if (!parameter) {
        continue;
      }
      const column = (match.index ?? 0) + match[0].length;
      const node = tree.rootNode.descendantForPosition({ row, column: column - 1 }) ?? tree.rootNode;
      const statement = enclosingStatement(node);
      if (!statement) {
        continue;
      }
      const methods = boundMethods(
        index2,
        enclosingNamespace(node),
        attributeOf(statement, "id")?.value
      );
      const resolved = resolveParamPath(
        index2,
        methods,
        attributeOf(statement, "parameterType")?.value,
        parameter
      );
      if (!resolved || !resolved.type) {
        continue;
      }
      hints.push({
        position: { line: row, character: (match.index ?? 0) + 2 },
        label: resolved.type,
        paddingRight: true
      });
    }
  }
  tree.delete();
  return hints;
}

// src/definition.mts
import { readFile as readFile2 } from "node:fs/promises";
function location(file, position) {
  return {
    uri: u.file(file).toString(),
    range: {
      start: { line: position.row, character: position.column },
      end: { line: position.row, character: position.column }
    }
  };
}
async function fileLocation(file, parse, find) {
  let text;
  try {
    text = await readFile2(file, "utf8");
  } catch {
    return null;
  }
  const tree = await parse(text);
  if (!tree) {
    return null;
  }
  const position = find(tree);
  tree.delete();
  return position ? location(file, position) : null;
}
function attrValue(text) {
  return text.replace(/^['"]|['"]$/g, "");
}
async function classLocation(index2, classname) {
  const entry = index2.resolveClass(classname);
  if (!entry) {
    return null;
  }
  return fileLocation(entry.path, parseJava, (tree) => javaTypePosition(tree));
}
async function methodLocation(index2, namespace, method) {
  const entry = index2.resolveClass(namespace);
  if (!entry) {
    return null;
  }
  return fileLocation(entry.path, parseJava, (tree) => javaMethodPosition(tree, method));
}
async function fieldLocation(index2, classname, field) {
  const entry = index2.resolveClass(classname);
  if (!entry || !entry.info.fields.has(field)) {
    return null;
  }
  return fileLocation(entry.path, parseJava, (tree) => javaFieldPosition(tree, field));
}
async function entityFieldLocation(index2, type, segments) {
  if (segments.length === 0) {
    return null;
  }
  let current = type;
  for (let i3 = 0; i3 < segments.length - 1; i3++) {
    const entity = index2.resolveClass(current);
    const next = entity?.info.fields.get(segments[i3]);
    if (!entity || !next) {
      return null;
    }
    current = next;
  }
  return fieldLocation(index2, current, segments[segments.length - 1]);
}
async function sqlLocation(mapper, id) {
  if (!mapper) {
    return null;
  }
  return fileLocation(mapper.path, parseXml, (tree) => xmlElementPosition(tree, "sql", id));
}
async function refidLocation(index2, file, tree, value) {
  const local = xmlElementPosition(tree, "sql", value);
  if (local) {
    return location(file, local);
  }
  const dot = value.lastIndexOf(".");
  if (dot > 0) {
    const qualified = await sqlLocation(
      index2.xmlForNamespace(value.slice(0, dot)),
      value.slice(dot + 1)
    );
    if (qualified) {
      return qualified;
    }
  }
  for (const mapper of index2.xmlByPath.values()) {
    if (mapper.path === file || !mapper.sqlIds.has(value)) {
      continue;
    }
    const found = await sqlLocation(mapper, value);
    if (found) {
      return found;
    }
  }
  return null;
}
async function paramLocation(index2, node, placeholder) {
  const segments = placeholder.split(".").filter((s2) => s2.length > 0);
  if (segments.length === 0) {
    return null;
  }
  const statement = enclosingStatement(node);
  if (!statement) {
    return null;
  }
  const parameterType = attributeOf(statement, "parameterType")?.value;
  const namespace = enclosingNamespace(node);
  const statementId = attributeOf(statement, "id")?.value;
  let methods = namespace ? index2.mapperMethods(namespace) : null;
  if (methods && statementId) {
    const match = methods.filter((m2) => m2.name === statementId);
    if (match.length > 0) {
      methods = match;
    }
  }
  if (methods && namespace) {
    const entry = index2.resolveClass(namespace);
    for (const method of methods) {
      for (const param of method.params) {
        if (param.name === segments[0] || param.annotation === segments[0]) {
          if (segments.length === 1) {
            return entry ? fileLocation(
              entry.path,
              parseJava,
              (tree) => javaParamPosition(tree, method.name, segments[0])
            ) : null;
          }
          const viaParam = param.type ? await entityFieldLocation(index2, param.type, segments.slice(1)) : null;
          if (viaParam) {
            return viaParam;
          }
          return parameterType ? entityFieldLocation(index2, parameterType, segments.slice(1)) : null;
        }
      }
    }
    if (methods.length === 1 && methods[0].params.length === 1 && methods[0].params[0].type) {
      const resolved = await entityFieldLocation(index2, methods[0].params[0].type, segments);
      if (resolved) {
        return resolved;
      }
    }
  }
  return parameterType ? entityFieldLocation(index2, parameterType, segments) : null;
}
function propertyPosition(tree, property, resultMapId) {
  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node)) {
      continue;
    }
    const name2 = elementName(node);
    if (!name2 || !PROPERTY_TAGS.includes(name2)) {
      continue;
    }
    if (attributeOf(node, "property")?.value !== property) {
      continue;
    }
    const resultMap = enclosingResultMap(node);
    if (!resultMap || attributeOf(resultMap, "id")?.value !== resultMapId) {
      continue;
    }
    const stag = startTagNode(node);
    const tag = stag?.namedChild(0);
    if (tag && tag.type === "Name") {
      return { row: tag.startPosition.row, column: tag.startPosition.column };
    }
  }
  return null;
}
async function resultMapPropertyLocation(index2, fqn, field) {
  for (const mapper of index2.xmlByPath.values()) {
    for (const resultMap of mapper.resultMaps.values()) {
      const typeEntry = resultMap.type ? index2.resolveClass(resultMap.type) : null;
      if (!typeEntry || typeEntry.fqn !== fqn || !resultMap.properties.has(field)) {
        continue;
      }
      const found = await fileLocation(
        mapper.path,
        parseXml,
        (tree) => propertyPosition(tree, field, resultMap.id)
      );
      if (found) {
        return found;
      }
    }
  }
  return null;
}
async function xmlDefinition(file, text, line, character, index2) {
  const tree = await parseXml(text);
  if (!tree) {
    return null;
  }
  try {
    const node = tree.rootNode.descendantForPosition({ row: line, column: character }) ?? tree.rootNode;
    const attr = attributeNameAt(node);
    if (attr) {
      const value = attrValue(attr.value.text);
      if (TYPE_ATTRIBUTES.includes(attr.name)) {
        return classLocation(index2, value);
      }
      if (attr.name === "id" && enclosingStatement(node)) {
        const namespace = enclosingNamespace(node);
        return namespace ? methodLocation(index2, namespace, value) : null;
      }
      if (attr.name === "refid") {
        return refidLocation(index2, file, tree, value);
      }
      if (attr.name === "resultMap" || attr.name === "extends") {
        const local = xmlElementPosition(tree, "resultMap", value);
        return local ? location(file, local) : null;
      }
      if (attr.name === "property") {
        const resultMap = enclosingResultMap(node);
        const type = resultMap ? attributeOf(resultMap, "type")?.value : void 0;
        return type ? fieldLocation(index2, type, value) : null;
      }
      return null;
    }
    const lineText = text.split("\n")[line] ?? "";
    for (const match of lineText.matchAll(/[#$]\{([^}]*)\}/g)) {
      const start2 = (match.index ?? 0) + 2;
      if (character >= start2 && character < start2 + match[1].length) {
        return paramLocation(index2, node, match[1]);
      }
    }
    const statement = enclosingStatement(node);
    if (statement) {
      const id = attributeOf(statement, "id")?.value;
      const namespace = enclosingNamespace(node);
      if (id && namespace) {
        return methodLocation(index2, namespace, id);
      }
      return null;
    }
    let current = node;
    while (current) {
      if (isElementNode(current)) {
        const name2 = elementName(current);
        if (name2 && ROOT_TAGS.includes(name2)) {
          const namespace = attributeOf(current, "namespace")?.value;
          return namespace ? classLocation(index2, namespace) : null;
        }
      }
      current = current.parent;
    }
    return null;
  } finally {
    tree.delete();
  }
}
function onMethodOrParamName(tree, line, character) {
  let node = tree.rootNode.descendantForPosition({ row: line, column: character });
  while (node && node.type !== "method_declaration") {
    const parent = node.parent;
    if (!parent) {
      return false;
    }
    const nameField = parent.childForFieldName("name");
    if (nameField && (parent.type === "method_declaration" || parent.type === "formal_parameter") && nameField.id === node.id) {
      return true;
    }
    node = parent;
  }
  return false;
}
async function javaDefinition(text, line, character, index2) {
  const tree = await parseJava(text);
  if (!tree) {
    return null;
  }
  try {
    const target = javaMethodTarget(tree, line, character);
    if (target && onMethodOrParamName(tree, line, character)) {
      const mapper = index2.xmlForNamespace(target.fqn);
      if (!mapper) {
        return null;
      }
      for (const tag of STATEMENT_TAGS) {
        const found = await fileLocation(
          mapper.path,
          parseXml,
          (t2) => xmlElementPosition(t2, tag, target.methodName)
        );
        if (found) {
          return found;
        }
      }
      return null;
    }
    const info2 = parseJavaFile(tree);
    const cursor = tree.rootNode.descendantForPosition({ row: line, column: character });
    let current = cursor;
    while (current) {
      if (current.type === "field_declaration") {
        const field = current.childForFieldName("declarator")?.childForFieldName("name")?.text;
        if (field && info2.typeName) {
          const fqn = info2.packageName ? `${info2.packageName}.${info2.typeName}` : info2.typeName;
          return resultMapPropertyLocation(index2, fqn, field);
        }
        return null;
      }
      current = current.parent;
    }
    return null;
  } finally {
    tree.delete();
  }
}
async function definitionAt(file, text, line, character, index2) {
  if (file.endsWith(".java")) {
    return javaDefinition(text, line, character, index2);
  }
  return xmlDefinition(file, text, line, character, index2);
}

// src/index.mts
var connection = (0, import_node.createConnection)(import_node.ProposedFeatures.all, process.stdin, process.stdout);
var documents = new import_node.TextDocuments(TextDocument2);
var options = readOptions(void 0);
var mapperRe = globToRegExp(options.mapper_glob);
var projectRoot = null;
var index = new BindingIndex();
var queue = Promise.resolve();
function enqueue(task) {
  queue = queue.then(task).catch((error) => {
    connection.console.error(`${error}`);
  });
  return queue;
}
function docPath(uri) {
  return u.parse(uri).fsPath;
}
function isMapperXml(uri) {
  const file = docPath(uri);
  return file.endsWith(".xml") && mapperRe.test(path3.basename(file));
}
function root() {
  projectRoot ??= findProjectRoot(process.cwd()) ?? process.cwd();
  return projectRoot;
}
function rebuild() {
  return enqueue(async () => {
    await initParsers();
    const files = await scanProject(root(), mapperRe, options.classpaths);
    connection.console.info(
      `indexing ${files.javaFiles.length} java files, ${files.xmlFiles.length} mapper files`
    );
    for (const file of files.xmlFiles) {
      await index.refreshXml(file);
    }
    for (const file of files.javaFiles) {
      await index.refreshJava(file);
    }
  });
}
connection.onInitialize((params) => {
  options = readOptions(params.initializationOptions);
  mapperRe = globToRegExp(options.mapper_glob);
  projectRoot = params.rootUri ? u.parse(params.rootUri).fsPath : null;
  return {
    capabilities: {
      textDocumentSync: {
        openClose: true,
        change: import_node.TextDocumentSyncKind.Full
      },
      completionProvider: {
        triggerCharacters: ["<", ".", '"', "{"]
      },
      definitionProvider: true,
      codeActionProvider: true,
      inlayHintProvider: true
    }
  };
});
connection.onInitialized(async () => {
  await rebuild();
  await connection.client.register(import_node.DidChangeWatchedFilesNotification.type, {
    watchers: [{ globPattern: "**/*.{java,xml}" }]
  });
});
documents.onDidChangeContent((event) => {
  const file = docPath(event.document.uri);
  const text = event.document.getText();
  if (file.endsWith(".java")) {
    void enqueue(() => index.refreshJava(file, text));
  } else if (mapperRe.test(path3.basename(file))) {
    void enqueue(() => index.refreshXml(file, text));
  }
});
connection.onDidChangeWatchedFiles((params) => {
  void enqueue(async () => {
    for (const change of params.changes) {
      const file = docPath(change.uri);
      if (!file.endsWith(".java") && !file.endsWith(".xml")) {
        continue;
      }
      if (change.type === import_node.FileChangeType.Deleted) {
        index.deleteFile(file);
      } else if (file.endsWith(".java")) {
        await index.refreshJava(file);
      } else {
        await index.refreshXml(file);
      }
    }
  });
});
connection.onCompletion(async (params) => {
  const document = documents.get(params.textDocument.uri);
  if (!document || !isMapperXml(document.uri)) {
    return [];
  }
  return completeAt(document.getText(), params.position.line, params.position.character, index);
});
connection.languages.inlayHint.on((params) => {
  const document = documents.get(params.textDocument.uri);
  if (!document || !isMapperXml(document.uri)) {
    return [];
  }
  return inlayHints(document.getText(), params.range.start.line, params.range.end.line, index);
});
connection.onDefinition(async (params) => {
  const document = documents.get(params.textDocument.uri);
  if (!document) {
    return null;
  }
  return definitionAt(
    docPath(document.uri),
    document.getText(),
    params.position.line,
    params.position.character,
    index
  );
});
connection.onCodeAction(async (params) => {
  const document = documents.get(params.textDocument.uri);
  if (!document || !docPath(document.uri).endsWith(".java")) {
    return [];
  }
  const tree = await parseJava(document.getText());
  if (!tree) {
    return [];
  }
  const target = javaMethodTarget(tree, params.range.start.line, params.range.start.character);
  tree.delete();
  if (!target || !index.xmlForNamespace(target.fqn)) {
    return [];
  }
  return [
    {
      title: "Generate MyBatis Tag",
      kind: "refactor",
      command: {
        command: "mybatis.generate_crud",
        title: "Generate MyBatis Tag",
        arguments: [
          {
            interface: target.interfaceName,
            method: target.methodName,
            resultType: target.resultType
          }
        ]
      }
    }
  ];
});
documents.listen(connection);
connection.listen();
