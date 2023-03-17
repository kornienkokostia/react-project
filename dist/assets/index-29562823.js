function Ic(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ir = {},
  Dc = {
    get exports() {
      return Ir;
    },
    set exports(e) {
      Ir = e;
    },
  },
  il = {},
  N = {},
  Fc = {
    get exports() {
      return N;
    },
    set exports(e) {
      N = e;
    },
  },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jn = Symbol.for('react.element'),
  jc = Symbol.for('react.portal'),
  Uc = Symbol.for('react.fragment'),
  $c = Symbol.for('react.strict_mode'),
  Bc = Symbol.for('react.profiler'),
  Vc = Symbol.for('react.provider'),
  Ac = Symbol.for('react.context'),
  Wc = Symbol.for('react.forward_ref'),
  Hc = Symbol.for('react.suspense'),
  Qc = Symbol.for('react.memo'),
  Kc = Symbol.for('react.lazy'),
  qi = Symbol.iterator;
function Yc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (qi && e[qi]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var ms = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vs = Object.assign,
  ys = {};
function sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ys),
    (this.updater = n || ms);
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function gs() {}
gs.prototype = sn.prototype;
function ti(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ys),
    (this.updater = n || ms);
}
var ni = (ti.prototype = new gs());
ni.constructor = ti;
vs(ni, sn.prototype);
ni.isPureReactComponent = !0;
var bi = Array.isArray,
  ws = Object.prototype.hasOwnProperty,
  ri = { current: null },
  Ss = { key: !0, ref: !0, __self: !0, __source: !0 };
function ks(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      ws.call(t, r) && !Ss.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Jn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ri.current,
  };
}
function Xc(e, t) {
  return {
    $$typeof: Jn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function li(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Jn;
}
function Gc(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var eu = /\/+/g;
function zl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Gc('' + e.key)
    : t.toString(36);
}
function kr(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Jn:
          case jc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + zl(i, 0) : r),
      bi(l)
        ? ((n = ''),
          e != null && (n = e.replace(eu, '$&/') + '/'),
          kr(l, t, n, '', function (c) {
            return c;
          }))
        : l != null &&
          (li(l) &&
            (l = Xc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(eu, '$&/') + '/') +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), bi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + zl(o, u);
      i += kr(o, t, n, s, l);
    }
  else if (((s = Yc(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + zl(o, u++)), (i += kr(o, t, n, s, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return i;
}
function lr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kr(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Zc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  Er = { transition: null },
  Jc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: ri,
  };
T.Children = {
  map: lr,
  forEach: function (e, t, n) {
    lr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      lr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      lr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!li(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
T.Component = sn;
T.Fragment = Uc;
T.Profiler = Bc;
T.PureComponent = ti;
T.StrictMode = $c;
T.Suspense = Hc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jc;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = vs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ri.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ws.call(t, s) &&
        !Ss.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Jn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ac,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Vc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = ks;
T.createFactory = function (e) {
  var t = ks.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: Wc, render: e };
};
T.isValidElement = li;
T.lazy = function (e) {
  return { $$typeof: Kc, _payload: { _status: -1, _result: e }, _init: Zc };
};
T.memo = function (e, t) {
  return { $$typeof: Qc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = t;
  }
};
T.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
T.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ue.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
T.useId = function () {
  return ue.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ue.current.useRef(e);
};
T.useState = function (e) {
  return ue.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ue.current.useTransition();
};
T.version = '18.2.0';
(function (e) {
  e.exports = T;
})(Fc);
const qc = Mc(N),
  to = Ic({ __proto__: null, default: qc }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bc = N,
  ef = Symbol.for('react.element'),
  tf = Symbol.for('react.fragment'),
  nf = Object.prototype.hasOwnProperty,
  rf = bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Es(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) nf.call(t, r) && !lf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: ef,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: rf.current,
  };
}
il.Fragment = tf;
il.jsx = Es;
il.jsxs = Es;
(function (e) {
  e.exports = il;
})(Dc);
const of = Ir.Fragment,
  tt = Ir.jsx;
var no = {},
  ro = {},
  uf = {
    get exports() {
      return ro;
    },
    set exports(e) {
      ro = e;
    },
  },
  we = {},
  lo = {},
  sf = {
    get exports() {
      return lo;
    },
    set exports(e) {
      lo = e;
    },
  },
  Cs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, L) {
    var R = C.length;
    C.push(L);
    e: for (; 0 < R; ) {
      var H = (R - 1) >>> 1,
        G = C[H];
      if (0 < l(G, L)) (C[H] = L), (C[R] = G), (R = H);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0],
      R = C.pop();
    if (R !== L) {
      C[0] = R;
      e: for (var H = 0, G = C.length, nr = G >>> 1; H < nr; ) {
        var gt = 2 * (H + 1) - 1,
          Nl = C[gt],
          wt = gt + 1,
          rr = C[wt];
        if (0 > l(Nl, R))
          wt < G && 0 > l(rr, Nl)
            ? ((C[H] = rr), (C[wt] = R), (H = wt))
            : ((C[H] = Nl), (C[gt] = R), (H = gt));
        else if (wt < G && 0 > l(rr, R)) (C[H] = rr), (C[wt] = R), (H = wt);
        else break e;
      }
    }
    return L;
  }
  function l(C, L) {
    var R = C.sortIndex - L.sortIndex;
    return R !== 0 ? R : C.id - L.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    w = !1,
    S = !1,
    g = !1,
    z = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= C)
        r(c), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(c);
    }
  }
  function v(C) {
    if (((g = !1), d(C), !S))
      if (n(s) !== null) (S = !0), _l(E);
      else {
        var L = n(c);
        L !== null && Pl(v, L.startTime - C);
      }
  }
  function E(C, L) {
    (S = !1), g && ((g = !1), f(P), (P = -1)), (w = !0);
    var R = p;
    try {
      for (
        d(L), m = n(s);
        m !== null && (!(m.expirationTime > L) || (C && !Ne()));

      ) {
        var H = m.callback;
        if (typeof H == 'function') {
          (m.callback = null), (p = m.priorityLevel);
          var G = H(m.expirationTime <= L);
          (L = e.unstable_now()),
            typeof G == 'function' ? (m.callback = G) : m === n(s) && r(s),
            d(L);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var nr = !0;
      else {
        var gt = n(c);
        gt !== null && Pl(v, gt.startTime - L), (nr = !1);
      }
      return nr;
    } finally {
      (m = null), (p = R), (w = !1);
    }
  }
  var x = !1,
    _ = null,
    P = -1,
    W = 5,
    O = -1;
  function Ne() {
    return !(e.unstable_now() - O < W);
  }
  function fn() {
    if (_ !== null) {
      var C = e.unstable_now();
      O = C;
      var L = !0;
      try {
        L = _(!0, C);
      } finally {
        L ? dn() : ((x = !1), (_ = null));
      }
    } else x = !1;
  }
  var dn;
  if (typeof a == 'function')
    dn = function () {
      a(fn);
    };
  else if (typeof MessageChannel < 'u') {
    var Ji = new MessageChannel(),
      Oc = Ji.port2;
    (Ji.port1.onmessage = fn),
      (dn = function () {
        Oc.postMessage(null);
      });
  } else
    dn = function () {
      z(fn, 0);
    };
  function _l(C) {
    (_ = C), x || ((x = !0), dn());
  }
  function Pl(C, L) {
    P = z(function () {
      C(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || w || ((S = !0), _l(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (W = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = p;
      }
      var R = p;
      p = L;
      try {
        return C();
      } finally {
        p = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, L) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var R = p;
      p = C;
      try {
        return L();
      } finally {
        p = R;
      }
    }),
    (e.unstable_scheduleCallback = function (C, L, R) {
      var H = e.unstable_now();
      switch (
        (typeof R == 'object' && R !== null
          ? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? H + R : H))
          : (R = H),
        C)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = R + G),
        (C = {
          id: h++,
          callback: L,
          priorityLevel: C,
          startTime: R,
          expirationTime: G,
          sortIndex: -1,
        }),
        R > H
          ? ((C.sortIndex = R),
            t(c, C),
            n(s) === null &&
              C === n(c) &&
              (g ? (f(P), (P = -1)) : (g = !0), Pl(v, R - H)))
          : ((C.sortIndex = G), t(s, C), S || w || ((S = !0), _l(E))),
        C
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (C) {
      var L = p;
      return function () {
        var R = p;
        p = L;
        try {
          return C.apply(this, arguments);
        } finally {
          p = R;
        }
      };
    });
})(Cs);
(function (e) {
  e.exports = Cs;
})(sf);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xs = N,
  ge = lo;
function y(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var _s = new Set(),
  Mn = {};
function Ot(e, t) {
  en(e, t), en(e + 'Capture', t);
}
function en(e, t) {
  for (Mn[e] = t, e = 0; e < t.length; e++) _s.add(t[e]);
}
var Qe = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  oo = Object.prototype.hasOwnProperty,
  af =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  tu = {},
  nu = {};
function cf(e) {
  return oo.call(nu, e)
    ? !0
    : oo.call(tu, e)
    ? !1
    : af.test(e)
    ? (nu[e] = !0)
    : ((tu[e] = !0), !1);
}
function ff(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function df(e, t, n, r) {
  if (t === null || typeof t > 'u' || ff(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ee = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var oi = /[\-:]([a-z])/g;
function ii(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(oi, ii);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(oi, ii);
    ee[t] = new se(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(oi, ii);
  ee[t] = new se(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ui(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (df(t, n, l, r) && (n = null),
    r || l === null
      ? cf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = xs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  or = Symbol.for('react.element'),
  Dt = Symbol.for('react.portal'),
  Ft = Symbol.for('react.fragment'),
  si = Symbol.for('react.strict_mode'),
  io = Symbol.for('react.profiler'),
  Ps = Symbol.for('react.provider'),
  Ns = Symbol.for('react.context'),
  ai = Symbol.for('react.forward_ref'),
  uo = Symbol.for('react.suspense'),
  so = Symbol.for('react.suspense_list'),
  ci = Symbol.for('react.memo'),
  Je = Symbol.for('react.lazy'),
  zs = Symbol.for('react.offscreen'),
  ru = Symbol.iterator;
function pn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ru && e[ru]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var V = Object.assign,
  Ll;
function kn(e) {
  if (Ll === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ll = (t && t[1]) || '';
    }
  return (
    `
` +
    Ll +
    e
  );
}
var Rl = !1;
function Tl(e, t) {
  if (!e || Rl) return '';
  Rl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Rl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? kn(e) : '';
}
function pf(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn('Lazy');
    case 13:
      return kn('Suspense');
    case 19:
      return kn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Tl(e.type, !1)), e;
    case 11:
      return (e = Tl(e.type.render, !1)), e;
    case 1:
      return (e = Tl(e.type, !0)), e;
    default:
      return '';
  }
}
function ao(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ft:
      return 'Fragment';
    case Dt:
      return 'Portal';
    case io:
      return 'Profiler';
    case si:
      return 'StrictMode';
    case uo:
      return 'Suspense';
    case so:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ns:
        return (e.displayName || 'Context') + '.Consumer';
      case Ps:
        return (e._context.displayName || 'Context') + '.Provider';
      case ai:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case ci:
        return (
          (t = e.displayName || null), t !== null ? t : ao(e.type) || 'Memo'
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return ao(e(t));
        } catch {}
    }
  return null;
}
function hf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return ao(t);
    case 8:
      return t === si ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function pt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Ls(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function mf(e) {
  var t = Ls(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = mf(e));
}
function Rs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Ls(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Mr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function co(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function lu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Ts(e, t) {
  (t = t.checked), t != null && ui(e, 'checked', t, !1);
}
function fo(e, t) {
  Ts(e, t);
  var n = pt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? po(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && po(e, t.type, pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ou(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function po(e, t, n) {
  (t !== 'number' || Mr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var En = Array.isArray;
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ho(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (En(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: pt(n) };
}
function Os(e, t) {
  var n = pt(t.value),
    r = pt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Is(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function mo(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Is(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var ur,
  Ms = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        ur = ur || document.createElement('div'),
          ur.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _n = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  vf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(_n).forEach(function (e) {
  vf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_n[t] = _n[e]);
  });
});
function Ds(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (_n.hasOwnProperty(e) && _n[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Fs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Ds(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var yf = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function vo(e, t) {
  if (t) {
    if (yf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(y(62));
  }
}
function yo(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var go = null;
function fi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var wo = null,
  Xt = null,
  Gt = null;
function su(e) {
  if ((e = er(e))) {
    if (typeof wo != 'function') throw Error(y(280));
    var t = e.stateNode;
    t && ((t = fl(t)), wo(e.stateNode, e.type, t));
  }
}
function js(e) {
  Xt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Xt = e);
}
function Us() {
  if (Xt) {
    var e = Xt,
      t = Gt;
    if (((Gt = Xt = null), su(e), t)) for (e = 0; e < t.length; e++) su(t[e]);
  }
}
function $s(e, t) {
  return e(t);
}
function Bs() {}
var Ol = !1;
function Vs(e, t, n) {
  if (Ol) return e(t, n);
  Ol = !0;
  try {
    return $s(e, t, n);
  } finally {
    (Ol = !1), (Xt !== null || Gt !== null) && (Bs(), Us());
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(y(231, t, typeof n));
  return n;
}
var So = !1;
if (Qe)
  try {
    var hn = {};
    Object.defineProperty(hn, 'passive', {
      get: function () {
        So = !0;
      },
    }),
      window.addEventListener('test', hn, hn),
      window.removeEventListener('test', hn, hn);
  } catch {
    So = !1;
  }
function gf(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Pn = !1,
  Dr = null,
  Fr = !1,
  ko = null,
  wf = {
    onError: function (e) {
      (Pn = !0), (Dr = e);
    },
  };
function Sf(e, t, n, r, l, o, i, u, s) {
  (Pn = !1), (Dr = null), gf.apply(wf, arguments);
}
function kf(e, t, n, r, l, o, i, u, s) {
  if ((Sf.apply(this, arguments), Pn)) {
    if (Pn) {
      var c = Dr;
      (Pn = !1), (Dr = null);
    } else throw Error(y(198));
    Fr || ((Fr = !0), (ko = c));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function As(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function au(e) {
  if (It(e) !== e) throw Error(y(188));
}
function Ef(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return au(l), e;
        if (o === r) return au(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ws(e) {
  return (e = Ef(e)), e !== null ? Hs(e) : null;
}
function Hs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qs = ge.unstable_scheduleCallback,
  cu = ge.unstable_cancelCallback,
  Cf = ge.unstable_shouldYield,
  xf = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  _f = ge.unstable_getCurrentPriorityLevel,
  di = ge.unstable_ImmediatePriority,
  Ks = ge.unstable_UserBlockingPriority,
  jr = ge.unstable_NormalPriority,
  Pf = ge.unstable_LowPriority,
  Ys = ge.unstable_IdlePriority,
  ul = null,
  Ue = null;
function Nf(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == 'function')
    try {
      Ue.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Rf,
  zf = Math.log,
  Lf = Math.LN2;
function Rf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((zf(e) / Lf) | 0)) | 0;
}
var sr = 64,
  ar = 4194304;
function Cn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ur(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Cn(u)) : ((o &= i), o !== 0 && (r = Cn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Cn(i)) : o !== 0 && (r = Cn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Tf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Of(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Oe(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Tf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Eo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xs() {
  var e = sr;
  return (sr <<= 1), !(sr & 4194240) && (sr = 64), e;
}
function Il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function If(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function pi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function Gs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Zs,
  hi,
  Js,
  qs,
  bs,
  Co = !1,
  cr = [],
  ot = null,
  it = null,
  ut = null,
  jn = new Map(),
  Un = new Map(),
  be = [],
  Mf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function fu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ot = null;
      break;
    case 'dragenter':
    case 'dragleave':
      it = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ut = null;
      break;
    case 'pointerover':
    case 'pointerout':
      jn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Un.delete(t.pointerId);
  }
}
function mn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = er(t)), t !== null && hi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Df(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (ot = mn(ot, e, t, n, r, l)), !0;
    case 'dragenter':
      return (it = mn(it, e, t, n, r, l)), !0;
    case 'mouseover':
      return (ut = mn(ut, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return jn.set(o, mn(jn.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), Un.set(o, mn(Un.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ea(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = As(n)), t !== null)) {
          (e.blockedOn = t),
            bs(e.priority, function () {
              Js(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (go = r), n.target.dispatchEvent(r), (go = null);
    } else return (t = er(n)), t !== null && hi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function du(e, t, n) {
  Cr(e) && n.delete(t);
}
function Ff() {
  (Co = !1),
    ot !== null && Cr(ot) && (ot = null),
    it !== null && Cr(it) && (it = null),
    ut !== null && Cr(ut) && (ut = null),
    jn.forEach(du),
    Un.forEach(du);
}
function vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Co ||
      ((Co = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, Ff)));
}
function $n(e) {
  function t(l) {
    return vn(l, e);
  }
  if (0 < cr.length) {
    vn(cr[0], e);
    for (var n = 1; n < cr.length; n++) {
      var r = cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && vn(ot, e),
      it !== null && vn(it, e),
      ut !== null && vn(ut, e),
      jn.forEach(t),
      Un.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    ea(n), n.blockedOn === null && be.shift();
}
var Zt = Ge.ReactCurrentBatchConfig,
  $r = !0;
function jf(e, t, n, r) {
  var l = M,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (M = 1), mi(e, t, n, r);
  } finally {
    (M = l), (Zt.transition = o);
  }
}
function Uf(e, t, n, r) {
  var l = M,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (M = 4), mi(e, t, n, r);
  } finally {
    (M = l), (Zt.transition = o);
  }
}
function mi(e, t, n, r) {
  if ($r) {
    var l = xo(e, t, n, r);
    if (l === null) Wl(e, t, r, Br, n), fu(e, r);
    else if (Df(l, e, t, n, r)) r.stopPropagation();
    else if ((fu(e, r), t & 4 && -1 < Mf.indexOf(e))) {
      for (; l !== null; ) {
        var o = er(l);
        if (
          (o !== null && Zs(o),
          (o = xo(e, t, n, r)),
          o === null && Wl(e, t, r, Br, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Wl(e, t, r, null, n);
  }
}
var Br = null;
function xo(e, t, n, r) {
  if (((Br = null), (e = fi(r)), (e = Et(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = As(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Br = e), null;
}
function ta(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (_f()) {
        case di:
          return 1;
        case Ks:
          return 4;
        case jr:
        case Pf:
          return 16;
        case Ys:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  vi = null,
  xr = null;
function na() {
  if (xr) return xr;
  var e,
    t = vi,
    n = t.length,
    r,
    l = 'value' in nt ? nt.value : nt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _r(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fr() {
  return !0;
}
function pu() {
  return !1;
}
function Se(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? fr
        : pu),
      (this.isPropagationStopped = pu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = fr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = fr));
      },
      persist: function () {},
      isPersistent: fr,
    }),
    t
  );
}
var an = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yi = Se(an),
  bn = V({}, an, { view: 0, detail: 0 }),
  $f = Se(bn),
  Ml,
  Dl,
  yn,
  sl = V({}, bn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== yn &&
            (yn && e.type === 'mousemove'
              ? ((Ml = e.screenX - yn.screenX), (Dl = e.screenY - yn.screenY))
              : (Dl = Ml = 0),
            (yn = e)),
          Ml);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Dl;
    },
  }),
  hu = Se(sl),
  Bf = V({}, sl, { dataTransfer: 0 }),
  Vf = Se(Bf),
  Af = V({}, bn, { relatedTarget: 0 }),
  Fl = Se(Af),
  Wf = V({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hf = Se(Wf),
  Qf = V({}, an, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Kf = Se(Qf),
  Yf = V({}, an, { data: 0 }),
  mu = Se(Yf),
  Xf = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Gf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Zf = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Jf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zf[e]) ? !!t[e] : !1;
}
function gi() {
  return Jf;
}
var qf = V({}, bn, {
    key: function (e) {
      if (e.key) {
        var t = Xf[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = _r(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Gf[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gi,
    charCode: function (e) {
      return e.type === 'keypress' ? _r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? _r(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  bf = Se(qf),
  ed = V({}, sl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  vu = Se(ed),
  td = V({}, bn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gi,
  }),
  nd = Se(td),
  rd = V({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ld = Se(rd),
  od = V({}, sl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  id = Se(od),
  ud = [9, 13, 27, 32],
  wi = Qe && 'CompositionEvent' in window,
  Nn = null;
Qe && 'documentMode' in document && (Nn = document.documentMode);
var sd = Qe && 'TextEvent' in window && !Nn,
  ra = Qe && (!wi || (Nn && 8 < Nn && 11 >= Nn)),
  yu = String.fromCharCode(32),
  gu = !1;
function la(e, t) {
  switch (e) {
    case 'keyup':
      return ud.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function oa(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var jt = !1;
function ad(e, t) {
  switch (e) {
    case 'compositionend':
      return oa(t);
    case 'keypress':
      return t.which !== 32 ? null : ((gu = !0), yu);
    case 'textInput':
      return (e = t.data), e === yu && gu ? null : e;
    default:
      return null;
  }
}
function cd(e, t) {
  if (jt)
    return e === 'compositionend' || (!wi && la(e, t))
      ? ((e = na()), (xr = vi = nt = null), (jt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return ra && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var fd = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!fd[e.type] : t === 'textarea';
}
function ia(e, t, n, r) {
  js(r),
    (t = Vr(t, 'onChange')),
    0 < t.length &&
      ((n = new yi('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zn = null,
  Bn = null;
function dd(e) {
  ya(e, 0);
}
function al(e) {
  var t = Bt(e);
  if (Rs(t)) return e;
}
function pd(e, t) {
  if (e === 'change') return t;
}
var ua = !1;
if (Qe) {
  var jl;
  if (Qe) {
    var Ul = 'oninput' in document;
    if (!Ul) {
      var Su = document.createElement('div');
      Su.setAttribute('oninput', 'return;'),
        (Ul = typeof Su.oninput == 'function');
    }
    jl = Ul;
  } else jl = !1;
  ua = jl && (!document.documentMode || 9 < document.documentMode);
}
function ku() {
  zn && (zn.detachEvent('onpropertychange', sa), (Bn = zn = null));
}
function sa(e) {
  if (e.propertyName === 'value' && al(Bn)) {
    var t = [];
    ia(t, Bn, e, fi(e)), Vs(dd, t);
  }
}
function hd(e, t, n) {
  e === 'focusin'
    ? (ku(), (zn = t), (Bn = n), zn.attachEvent('onpropertychange', sa))
    : e === 'focusout' && ku();
}
function md(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return al(Bn);
}
function vd(e, t) {
  if (e === 'click') return al(t);
}
function yd(e, t) {
  if (e === 'input' || e === 'change') return al(t);
}
function gd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == 'function' ? Object.is : gd;
function Vn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!oo.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function Eu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Cu(e, t) {
  var n = Eu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Eu(n);
  }
}
function aa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? aa(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ca() {
  for (var e = window, t = Mr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Mr(e.document);
  }
  return t;
}
function Si(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function wd(e) {
  var t = ca(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    aa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Si(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Cu(n, o));
        var i = Cu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Sd = Qe && 'documentMode' in document && 11 >= document.documentMode,
  Ut = null,
  _o = null,
  Ln = null,
  Po = !1;
function xu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Po ||
    Ut == null ||
    Ut !== Mr(r) ||
    ((r = Ut),
    'selectionStart' in r && Si(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ln && Vn(Ln, r)) ||
      ((Ln = r),
      (r = Vr(_o, 'onSelect')),
      0 < r.length &&
        ((t = new yi('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ut))));
}
function dr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var $t = {
    animationend: dr('Animation', 'AnimationEnd'),
    animationiteration: dr('Animation', 'AnimationIteration'),
    animationstart: dr('Animation', 'AnimationStart'),
    transitionend: dr('Transition', 'TransitionEnd'),
  },
  $l = {},
  fa = {};
Qe &&
  ((fa = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete $t.animationend.animation,
    delete $t.animationiteration.animation,
    delete $t.animationstart.animation),
  'TransitionEvent' in window || delete $t.transitionend.transition);
function cl(e) {
  if ($l[e]) return $l[e];
  if (!$t[e]) return e;
  var t = $t[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in fa) return ($l[e] = t[n]);
  return e;
}
var da = cl('animationend'),
  pa = cl('animationiteration'),
  ha = cl('animationstart'),
  ma = cl('transitionend'),
  va = new Map(),
  _u =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function mt(e, t) {
  va.set(e, t), Ot(t, [e]);
}
for (var Bl = 0; Bl < _u.length; Bl++) {
  var Vl = _u[Bl],
    kd = Vl.toLowerCase(),
    Ed = Vl[0].toUpperCase() + Vl.slice(1);
  mt(kd, 'on' + Ed);
}
mt(da, 'onAnimationEnd');
mt(pa, 'onAnimationIteration');
mt(ha, 'onAnimationStart');
mt('dblclick', 'onDoubleClick');
mt('focusin', 'onFocus');
mt('focusout', 'onBlur');
mt(ma, 'onTransitionEnd');
en('onMouseEnter', ['mouseout', 'mouseover']);
en('onMouseLeave', ['mouseout', 'mouseover']);
en('onPointerEnter', ['pointerout', 'pointerover']);
en('onPointerLeave', ['pointerout', 'pointerover']);
Ot(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
Ot(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
Ot('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Ot(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
Ot(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
Ot(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var xn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Cd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(xn));
function Pu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), kf(r, t, void 0, e), (e.currentTarget = null);
}
function ya(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Pu(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Pu(l, u, c), (o = s);
        }
    }
  }
  if (Fr) throw ((e = ko), (Fr = !1), (ko = null), e);
}
function F(e, t) {
  var n = t[To];
  n === void 0 && (n = t[To] = new Set());
  var r = e + '__bubble';
  n.has(r) || (ga(t, e, 2, !1), n.add(r));
}
function Al(e, t, n) {
  var r = 0;
  t && (r |= 4), ga(n, e, r, t);
}
var pr = '_reactListening' + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[pr]) {
    (e[pr] = !0),
      _s.forEach(function (n) {
        n !== 'selectionchange' && (Cd.has(n) || Al(n, !1, e), Al(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pr] || ((t[pr] = !0), Al('selectionchange', !1, t));
  }
}
function ga(e, t, n, r) {
  switch (ta(t)) {
    case 1:
      var l = jf;
      break;
    case 4:
      l = Uf;
      break;
    default:
      l = mi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !So ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Wl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Et(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Vs(function () {
    var c = o,
      h = fi(n),
      m = [];
    e: {
      var p = va.get(e);
      if (p !== void 0) {
        var w = yi,
          S = e;
        switch (e) {
          case 'keypress':
            if (_r(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = bf;
            break;
          case 'focusin':
            (S = 'focus'), (w = Fl);
            break;
          case 'focusout':
            (S = 'blur'), (w = Fl);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = Fl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = hu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = Vf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = nd;
            break;
          case da:
          case pa:
          case ha:
            w = Hf;
            break;
          case ma:
            w = ld;
            break;
          case 'scroll':
            w = $f;
            break;
          case 'wheel':
            w = id;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = Kf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = vu;
        }
        var g = (t & 4) !== 0,
          z = !g && e === 'scroll',
          f = g ? (p !== null ? p + 'Capture' : null) : p;
        g = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Fn(a, f)), v != null && g.push(Wn(a, v, d)))),
            z)
          )
            break;
          a = a.return;
        }
        0 < g.length &&
          ((p = new w(p, S, null, n, h)), m.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== go &&
            (S = n.relatedTarget || n.fromElement) &&
            (Et(S) || S[Ke]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((S = n.relatedTarget || n.toElement),
              (w = c),
              (S = S ? Et(S) : null),
              S !== null &&
                ((z = It(S)), S !== z || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((w = null), (S = c)),
          w !== S)
        ) {
          if (
            ((g = hu),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (a = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = vu),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (a = 'pointer')),
            (z = w == null ? p : Bt(w)),
            (d = S == null ? p : Bt(S)),
            (p = new g(v, a + 'leave', w, n, h)),
            (p.target = z),
            (p.relatedTarget = d),
            (v = null),
            Et(h) === c &&
              ((g = new g(f, a + 'enter', S, n, h)),
              (g.target = d),
              (g.relatedTarget = z),
              (v = g)),
            (z = v),
            w && S)
          )
            t: {
              for (g = w, f = S, a = 0, d = g; d; d = Mt(d)) a++;
              for (d = 0, v = f; v; v = Mt(v)) d++;
              for (; 0 < a - d; ) (g = Mt(g)), a--;
              for (; 0 < d - a; ) (f = Mt(f)), d--;
              for (; a--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                (g = Mt(g)), (f = Mt(f));
              }
              g = null;
            }
          else g = null;
          w !== null && Nu(m, p, w, g, !1),
            S !== null && z !== null && Nu(m, z, S, g, !0);
        }
      }
      e: {
        if (
          ((p = c ? Bt(c) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && p.type === 'file'))
        )
          var E = pd;
        else if (wu(p))
          if (ua) E = yd;
          else {
            E = md;
            var x = hd;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (E = vd);
        if (E && (E = E(e, c))) {
          ia(m, E, n, h);
          break e;
        }
        x && x(e, p, c),
          e === 'focusout' &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === 'number' &&
            po(p, 'number', p.value);
      }
      switch (((x = c ? Bt(c) : window), e)) {
        case 'focusin':
          (wu(x) || x.contentEditable === 'true') &&
            ((Ut = x), (_o = c), (Ln = null));
          break;
        case 'focusout':
          Ln = _o = Ut = null;
          break;
        case 'mousedown':
          Po = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Po = !1), xu(m, n, h);
          break;
        case 'selectionchange':
          if (Sd) break;
        case 'keydown':
        case 'keyup':
          xu(m, n, h);
      }
      var _;
      if (wi)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        jt
          ? la(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (ra &&
          n.locale !== 'ko' &&
          (jt || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && jt && (_ = na())
            : ((nt = h),
              (vi = 'value' in nt ? nt.value : nt.textContent),
              (jt = !0))),
        (x = Vr(c, P)),
        0 < x.length &&
          ((P = new mu(P, e, null, n, h)),
          m.push({ event: P, listeners: x }),
          _ ? (P.data = _) : ((_ = oa(n)), _ !== null && (P.data = _)))),
        (_ = sd ? ad(e, n) : cd(e, n)) &&
          ((c = Vr(c, 'onBeforeInput')),
          0 < c.length &&
            ((h = new mu('onBeforeInput', 'beforeinput', null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = _)));
    }
    ya(m, t);
  });
}
function Wn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Fn(e, n)),
      o != null && r.unshift(Wn(e, o, l)),
      (o = Fn(e, t)),
      o != null && r.push(Wn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Fn(n, o)), s != null && i.unshift(Wn(n, s, u)))
        : l || ((s = Fn(n, o)), s != null && i.push(Wn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var xd = /\r\n?/g,
  _d = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      xd,
      `
`,
    )
    .replace(_d, '');
}
function hr(e, t, n) {
  if (((t = zu(t)), zu(e) !== t && n)) throw Error(y(425));
}
function Ar() {}
var No = null,
  zo = null;
function Lo(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ro = typeof setTimeout == 'function' ? setTimeout : void 0,
  Pd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Lu = typeof Promise == 'function' ? Promise : void 0,
  Nd =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Lu < 'u'
      ? function (e) {
          return Lu.resolve(null).then(e).catch(zd);
        }
      : Ro;
function zd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), $n(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  $n(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Ru(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cn = Math.random().toString(36).slice(2),
  je = '__reactFiber$' + cn,
  Hn = '__reactProps$' + cn,
  Ke = '__reactContainer$' + cn,
  To = '__reactEvents$' + cn,
  Ld = '__reactListeners$' + cn,
  Rd = '__reactHandles$' + cn;
function Et(e) {
  var t = e[je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ru(e); e !== null; ) {
          if ((n = e[je])) return n;
          e = Ru(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function er(e) {
  return (
    (e = e[je] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function fl(e) {
  return e[Hn] || null;
}
var Oo = [],
  Vt = -1;
function vt(e) {
  return { current: e };
}
function j(e) {
  0 > Vt || ((e.current = Oo[Vt]), (Oo[Vt] = null), Vt--);
}
function D(e, t) {
  Vt++, (Oo[Vt] = e.current), (e.current = t);
}
var ht = {},
  le = vt(ht),
  fe = vt(!1),
  Nt = ht;
function tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function Wr() {
  j(fe), j(le);
}
function Tu(e, t, n) {
  if (le.current !== ht) throw Error(y(168));
  D(le, t), D(fe, n);
}
function wa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, hf(e) || 'Unknown', l));
  return V({}, n, r);
}
function Hr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ht),
    (Nt = le.current),
    D(le, e),
    D(fe, fe.current),
    !0
  );
}
function Ou(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = wa(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      j(fe),
      j(le),
      D(le, e))
    : j(fe),
    D(fe, n);
}
var Ve = null,
  dl = !1,
  Ql = !1;
function Sa(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Td(e) {
  (dl = !0), Sa(e);
}
function yt() {
  if (!Ql && Ve !== null) {
    Ql = !0;
    var e = 0,
      t = M;
    try {
      var n = Ve;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (dl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Qs(di, yt), l);
    } finally {
      (M = t), (Ql = !1);
    }
  }
  return null;
}
var At = [],
  Wt = 0,
  Qr = null,
  Kr = 0,
  ke = [],
  Ee = 0,
  zt = null,
  Ae = 1,
  We = '';
function St(e, t) {
  (At[Wt++] = Kr), (At[Wt++] = Qr), (Qr = e), (Kr = t);
}
function ka(e, t, n) {
  (ke[Ee++] = Ae), (ke[Ee++] = We), (ke[Ee++] = zt), (zt = e);
  var r = Ae;
  e = We;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ae = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (We = o + e);
  } else (Ae = (1 << o) | (n << l) | r), (We = e);
}
function ki(e) {
  e.return !== null && (St(e, 1), ka(e, 1, 0));
}
function Ei(e) {
  for (; e === Qr; )
    (Qr = At[--Wt]), (At[Wt] = null), (Kr = At[--Wt]), (At[Wt] = null);
  for (; e === zt; )
    (zt = ke[--Ee]),
      (ke[Ee] = null),
      (We = ke[--Ee]),
      (ke[Ee] = null),
      (Ae = ke[--Ee]),
      (ke[Ee] = null);
}
var ye = null,
  ve = null,
  U = !1,
  Te = null;
function Ea(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Iu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: Ae, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Io(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mo(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!Iu(e, t)) {
        if (Io(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = ye;
        t && Iu(e, t)
          ? Ea(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e));
      }
    } else {
      if (Io(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
    }
  }
}
function Mu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function mr(e) {
  if (e !== ye) return !1;
  if (!U) return Mu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Lo(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (Io(e)) throw (Ca(), Error(y(418)));
    for (; t; ) Ea(e, t), (t = st(t.nextSibling));
  }
  if ((Mu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ve = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function Ca() {
  for (var e = ve; e; ) e = st(e.nextSibling);
}
function nn() {
  (ve = ye = null), (U = !1);
}
function Ci(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var Od = Ge.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Yr = vt(null),
  Xr = null,
  Ht = null,
  xi = null;
function _i() {
  xi = Ht = Xr = null;
}
function Pi(e) {
  var t = Yr.current;
  j(Yr), (e._currentValue = t);
}
function Do(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jt(e, t) {
  (Xr = e),
    (xi = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (xi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Xr === null) throw Error(y(308));
      (Ht = e), (Xr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var Ct = null;
function Ni(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function xa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ni(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function zi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function _a(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ni(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function Pr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), pi(e, n);
  }
}
function Du(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Gr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = c = s = null), (u = o);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            g = u;
          switch (((p = t), (w = n), g.tag)) {
            case 1:
              if (((S = g.payload), typeof S == 'function')) {
                m = S.call(w, m, p);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = g.payload),
                (p = typeof S == 'function' ? S.call(w, m, p) : S),
                p == null)
              )
                break e;
              m = V({}, m, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = w), (s = m)) : (h = h.next = w),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Rt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Fu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var Pa = new xs.Component().refs;
function Fo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = ft(e),
      o = He(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Ie(t, e, l, r), Pr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = ft(e),
      o = He(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Ie(t, e, l, r), Pr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ie(),
      r = ft(e),
      l = He(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Ie(t, e, r, n), Pr(t, e, r));
  },
};
function ju(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Vn(n, r) || !Vn(l, o)
      : !0
  );
}
function Na(e, t, n) {
  var r = !1,
    l = ht,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = _e(o))
      : ((l = de(t) ? Nt : le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? tn(e, l) : ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Uu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function jo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Pa), zi(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = _e(o))
    : ((o = de(t) ? Nt : le.current), (l.context = tn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Fo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && pl.enqueueReplaceState(l, l.state, null),
      Gr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Pa && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function $u(e) {
  var t = e._init;
  return t(e._payload);
}
function za(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = dt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = ql(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Ft
      ? h(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === Je &&
            $u(E) === a.type))
      ? ((v = l(a, d.props)), (v.ref = gn(f, a, d)), (v.return = f), v)
      : ((v = Or(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = gn(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = bl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7
      ? ((a = Pt(d, f.mode, v, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number')
      return (a = ql('' + a, f.mode, d)), (a.return = f), a;
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case or:
          return (
            (d = Or(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = gn(f, null, a)),
            (d.return = f),
            d
          );
        case Dt:
          return (a = bl(a, f.mode, d)), (a.return = f), a;
        case Je:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (En(a) || pn(a))
        return (a = Pt(a, f.mode, d, null)), (a.return = f), a;
      vr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return E !== null ? null : u(f, a, '' + d, v);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case or:
          return d.key === E ? s(f, a, d, v) : null;
        case Dt:
          return d.key === E ? c(f, a, d, v) : null;
        case Je:
          return (E = d._init), p(f, a, E(d._payload), v);
      }
      if (En(d) || pn(d)) return E !== null ? null : h(f, a, d, v, null);
      vr(f, d);
    }
    return null;
  }
  function w(f, a, d, v, E) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (f = f.get(d) || null), u(a, f, '' + v, E);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case or:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, E);
        case Dt:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, E);
        case Je:
          var x = v._init;
          return w(f, a, d, x(v._payload), E);
      }
      if (En(v) || pn(v)) return (f = f.get(d) || null), h(a, f, v, E, null);
      vr(a, v);
    }
    return null;
  }
  function S(f, a, d, v) {
    for (
      var E = null, x = null, _ = a, P = (a = 0), W = null;
      _ !== null && P < d.length;
      P++
    ) {
      _.index > P ? ((W = _), (_ = null)) : (W = _.sibling);
      var O = p(f, _, d[P], v);
      if (O === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && O.alternate === null && t(f, _),
        (a = o(O, a, P)),
        x === null ? (E = O) : (x.sibling = O),
        (x = O),
        (_ = W);
    }
    if (P === d.length) return n(f, _), U && St(f, P), E;
    if (_ === null) {
      for (; P < d.length; P++)
        (_ = m(f, d[P], v)),
          _ !== null &&
            ((a = o(_, a, P)), x === null ? (E = _) : (x.sibling = _), (x = _));
      return U && St(f, P), E;
    }
    for (_ = r(f, _); P < d.length; P++)
      (W = w(_, f, P, d[P], v)),
        W !== null &&
          (e && W.alternate !== null && _.delete(W.key === null ? P : W.key),
          (a = o(W, a, P)),
          x === null ? (E = W) : (x.sibling = W),
          (x = W));
    return (
      e &&
        _.forEach(function (Ne) {
          return t(f, Ne);
        }),
      U && St(f, P),
      E
    );
  }
  function g(f, a, d, v) {
    var E = pn(d);
    if (typeof E != 'function') throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var x = (E = null), _ = a, P = (a = 0), W = null, O = d.next();
      _ !== null && !O.done;
      P++, O = d.next()
    ) {
      _.index > P ? ((W = _), (_ = null)) : (W = _.sibling);
      var Ne = p(f, _, O.value, v);
      if (Ne === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && Ne.alternate === null && t(f, _),
        (a = o(Ne, a, P)),
        x === null ? (E = Ne) : (x.sibling = Ne),
        (x = Ne),
        (_ = W);
    }
    if (O.done) return n(f, _), U && St(f, P), E;
    if (_ === null) {
      for (; !O.done; P++, O = d.next())
        (O = m(f, O.value, v)),
          O !== null &&
            ((a = o(O, a, P)), x === null ? (E = O) : (x.sibling = O), (x = O));
      return U && St(f, P), E;
    }
    for (_ = r(f, _); !O.done; P++, O = d.next())
      (O = w(_, f, P, O.value, v)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? P : O.key),
          (a = o(O, a, P)),
          x === null ? (E = O) : (x.sibling = O),
          (x = O));
    return (
      e &&
        _.forEach(function (fn) {
          return t(f, fn);
        }),
      U && St(f, P),
      E
    );
  }
  function z(f, a, d, v) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Ft &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case or:
          e: {
            for (var E = d.key, x = a; x !== null; ) {
              if (x.key === E) {
                if (((E = d.type), E === Ft)) {
                  if (x.tag === 7) {
                    n(f, x.sibling),
                      (a = l(x, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  x.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === Je &&
                    $u(E) === x.type)
                ) {
                  n(f, x.sibling),
                    (a = l(x, d.props)),
                    (a.ref = gn(f, x, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, x);
                break;
              } else t(f, x);
              x = x.sibling;
            }
            d.type === Ft
              ? ((a = Pt(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = Or(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = gn(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case Dt:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = bl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return i(f);
        case Je:
          return (x = d._init), z(f, a, x(d._payload), v);
      }
      if (En(d)) return S(f, a, d, v);
      if (pn(d)) return g(f, a, d, v);
      vr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = ql(d, f.mode, v)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return z;
}
var rn = za(!0),
  La = za(!1),
  tr = {},
  $e = vt(tr),
  Qn = vt(tr),
  Kn = vt(tr);
function xt(e) {
  if (e === tr) throw Error(y(174));
  return e;
}
function Li(e, t) {
  switch ((D(Kn, t), D(Qn, e), D($e, tr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : mo(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = mo(t, e));
  }
  j($e), D($e, t);
}
function ln() {
  j($e), j(Qn), j(Kn);
}
function Ra(e) {
  xt(Kn.current);
  var t = xt($e.current),
    n = mo(t, e.type);
  t !== n && (D(Qn, e), D($e, n));
}
function Ri(e) {
  Qn.current === e && (j($e), j(Qn));
}
var $ = vt(0);
function Zr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Kl = [];
function Ti() {
  for (var e = 0; e < Kl.length; e++)
    Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var Nr = Ge.ReactCurrentDispatcher,
  Yl = Ge.ReactCurrentBatchConfig,
  Lt = 0,
  B = null,
  Y = null,
  Z = null,
  Jr = !1,
  Rn = !1,
  Yn = 0,
  Id = 0;
function te() {
  throw Error(y(321));
}
function Oi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Ii(e, t, n, r, l, o) {
  if (
    ((Lt = o),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nr.current = e === null || e.memoizedState === null ? jd : Ud),
    (e = n(r, l)),
    Rn)
  ) {
    o = 0;
    do {
      if (((Rn = !1), (Yn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (Z = Y = null),
        (t.updateQueue = null),
        (Nr.current = $d),
        (e = n(r, l));
    } while (Rn);
  }
  if (
    ((Nr.current = qr),
    (t = Y !== null && Y.next !== null),
    (Lt = 0),
    (Z = Y = B = null),
    (Jr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Mi() {
  var e = Yn !== 0;
  return (Yn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (B.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Pe() {
  if (Y === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? B.memoizedState : Z.next;
  if (t !== null) (Z = t), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (B.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Xn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Xl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var h = c.lane;
      if ((Lt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (B.lanes |= h),
          (Rt |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      Me(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (B.lanes |= o), (Rt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Gl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Me(o, t.memoizedState) || (ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ta() {}
function Oa(e, t) {
  var n = B,
    r = Pe(),
    l = t(),
    o = !Me(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    Di(Da.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gn(9, Ma.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    Lt & 30 || Ia(n, t, l);
  }
  return l;
}
function Ia(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ma(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Fa(t) && ja(e);
}
function Da(e, t, n) {
  return n(function () {
    Fa(t) && ja(e);
  });
}
function Fa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function ja(e) {
  var t = Ye(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Bu(e) {
  var t = Fe();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Fd.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function Gn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ua() {
  return Pe().memoizedState;
}
function zr(e, t, n, r) {
  var l = Fe();
  (B.flags |= e),
    (l.memoizedState = Gn(1 | t, n, void 0, r === void 0 ? null : r));
}
function hl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && Oi(r, i.deps))) {
      l.memoizedState = Gn(t, n, o, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = Gn(1 | t, n, o, r));
}
function Vu(e, t) {
  return zr(8390656, 8, e, t);
}
function Di(e, t) {
  return hl(2048, 8, e, t);
}
function $a(e, t) {
  return hl(4, 2, e, t);
}
function Ba(e, t) {
  return hl(4, 4, e, t);
}
function Va(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Aa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), hl(4, 4, Va.bind(null, t, e), n)
  );
}
function Fi() {}
function Wa(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ha(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qa(e, t, n) {
  return Lt & 21
    ? (Me(n, t) || ((n = Xs()), (B.lanes |= n), (Rt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function Md(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Yl.transition;
  Yl.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (Yl.transition = r);
  }
}
function Ka() {
  return Pe().memoizedState;
}
function Dd(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ya(e))
  )
    Xa(t, n);
  else if (((n = xa(e, t, n, r)), n !== null)) {
    var l = ie();
    Ie(n, e, r, l), Ga(n, t, r);
  }
}
function Fd(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ya(e)) Xa(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Ni(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = xa(e, t, l, r)),
      n !== null && ((l = ie()), Ie(n, e, r, l), Ga(n, t, r));
  }
}
function Ya(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function Xa(e, t) {
  Rn = Jr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ga(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), pi(e, n);
  }
}
var qr = {
    readContext: _e,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  jd = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Vu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zr(4194308, 4, Va.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Dd.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Bu,
    useDebugValue: Fi,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Bu(!1),
        t = e[0];
      return (e = Md.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        l = Fe();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        Lt & 30 || Ia(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Vu(Da.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Gn(9, Ma.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = J.identifierPrefix;
      if (U) {
        var n = We,
          r = Ae;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Yn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Id++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ud = {
    readContext: _e,
    useCallback: Wa,
    useContext: _e,
    useEffect: Di,
    useImperativeHandle: Aa,
    useInsertionEffect: $a,
    useLayoutEffect: Ba,
    useMemo: Ha,
    useReducer: Xl,
    useRef: Ua,
    useState: function () {
      return Xl(Xn);
    },
    useDebugValue: Fi,
    useDeferredValue: function (e) {
      var t = Pe();
      return Qa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(Xn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ta,
    useSyncExternalStore: Oa,
    useId: Ka,
    unstable_isNewReconciler: !1,
  },
  $d = {
    readContext: _e,
    useCallback: Wa,
    useContext: _e,
    useEffect: Di,
    useImperativeHandle: Aa,
    useInsertionEffect: $a,
    useLayoutEffect: Ba,
    useMemo: Ha,
    useReducer: Gl,
    useRef: Ua,
    useState: function () {
      return Gl(Xn);
    },
    useDebugValue: Fi,
    useDeferredValue: function (e) {
      var t = Pe();
      return Y === null ? (t.memoizedState = e) : Qa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Gl(Xn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ta,
    useSyncExternalStore: Oa,
    useId: Ka,
    unstable_isNewReconciler: !1,
  };
function on(e, t) {
  try {
    var n = '',
      r = t;
    do (n += pf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Zl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Uo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Bd = typeof WeakMap == 'function' ? WeakMap : Map;
function Za(e, t, n) {
  (n = He(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      el || ((el = !0), (Xo = r)), Uo(e, t);
    }),
    n
  );
}
function Ja(e, t, n) {
  (n = He(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Uo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Uo(e, t),
          typeof r != 'function' &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Au(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Bd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ep.bind(null, e, t, n)), t.then(e, e));
}
function Wu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Hu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = He(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Vd = Ge.ReactCurrentOwner,
  ce = !1;
function oe(e, t, n, r) {
  t.child = e === null ? La(t, null, n, r) : rn(t, e.child, n, r);
}
function Qu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Jt(t, l),
    (r = Ii(e, t, n, r, o, l)),
    (n = Mi()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && n && ki(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function Ku(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Hi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), qa(e, t, o, r, l))
      : ((e = Or(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vn), n(i, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Vn(o, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return $o(e, t, n, r, l);
}
function ba(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Kt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Kt, me),
          (me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(Kt, me),
        (me |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Kt, me),
      (me |= r);
  return oe(e, t, l, n), t.child;
}
function ec(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $o(e, t, n, r, l) {
  var o = de(n) ? Nt : le.current;
  return (
    (o = tn(t, o)),
    Jt(t, l),
    (n = Ii(e, t, n, r, o, l)),
    (r = Mi()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && r && ki(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Yu(e, t, n, r, l) {
  if (de(n)) {
    var o = !0;
    Hr(t);
  } else o = !1;
  if ((Jt(t, l), t.stateNode === null))
    Lr(e, t), Na(t, n, r), jo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = _e(c))
      : ((c = de(n) ? Nt : le.current), (c = tn(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== c) && Uu(t, i, r, c)),
      (qe = !1);
    var p = t.memoizedState;
    (i.state = p),
      Gr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || fe.current || qe
        ? (typeof h == 'function' && (Fo(t, n, h, r), (s = t.memoizedState)),
          (u = qe || ju(t, n, u, r, p, s, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      _a(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Le(t.type, u)),
      (i.props = c),
      (m = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = _e(s))
        : ((s = de(n) ? Nt : le.current), (s = tn(t, s)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== m || p !== s) && Uu(t, i, r, s)),
      (qe = !1),
      (p = t.memoizedState),
      (i.state = p),
      Gr(t, r, i, l);
    var S = t.memoizedState;
    u !== m || p !== S || fe.current || qe
      ? (typeof w == 'function' && (Fo(t, n, w, r), (S = t.memoizedState)),
        (c = qe || ju(t, n, c, r, p, S, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, S, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, S, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Bo(e, t, n, r, o, l);
}
function Bo(e, t, n, r, l, o) {
  ec(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ou(t, n, !1), Xe(e, t, o);
  (r = t.stateNode), (Vd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = rn(t, e.child, null, o)), (t.child = rn(t, null, u, o)))
      : oe(e, t, u, o),
    (t.memoizedState = r.state),
    l && Ou(t, n, !0),
    t.child
  );
}
function tc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Tu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Tu(e, t.context, !1),
    Li(e, t.containerInfo);
}
function Xu(e, t, n, r, l) {
  return nn(), Ci(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ao(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nc(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D($, l & 1),
    e === null)
  )
    return (
      Mo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = yl(i, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ao(n)),
              (t.memoizedState = Vo),
              e)
            : ji(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Ad(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = dt(u, o)) : ((o = Pt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ao(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Vo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ji(e, t) {
  return (
    (t = yl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yr(e, t, n, r) {
  return (
    r !== null && Ci(r),
    rn(t, e.child, null, n),
    (e = ji(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ad(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Zl(Error(y(422)))), yr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = yl({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = Pt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && rn(t, e.child, null, i),
        (t.child.memoizedState = Ao(i)),
        (t.memoizedState = Vo),
        o);
  if (!(t.mode & 1)) return yr(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = Zl(o, r, void 0)), yr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ye(e, l), Ie(r, e, l, -1));
    }
    return Wi(), (r = Zl(Error(y(421)))), yr(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = tp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ve = st(l.nextSibling)),
      (ye = t),
      (U = !0),
      (Te = null),
      e !== null &&
        ((ke[Ee++] = Ae),
        (ke[Ee++] = We),
        (ke[Ee++] = zt),
        (Ae = e.id),
        (We = e.overflow),
        (zt = t)),
      (t = ji(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Gu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Do(e.return, t, n);
}
function Jl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function rc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((oe(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Gu(e, n, t);
        else if (e.tag === 19) Gu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Zr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Jl(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Zr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Jl(t, !0, n, null, o);
        break;
      case 'together':
        Jl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Lr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Rt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Wd(e, t, n) {
  switch (t.tag) {
    case 3:
      tc(t), nn();
      break;
    case 5:
      Ra(t);
      break;
    case 1:
      de(t.type) && Hr(t);
      break;
    case 4:
      Li(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(Yr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? nc(e, t, n)
          : (D($, $.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      D($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return rc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ba(e, t, n);
  }
  return Xe(e, t, n);
}
var lc, Wo, oc, ic;
lc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Wo = function () {};
oc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), xt($e.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = co(e, l)), (r = co(e, r)), (o = []);
        break;
      case 'select':
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = ho(e, l)), (r = ho(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ar);
    }
    vo(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Mn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(c, '' + s)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (Mn.hasOwnProperty(c)
                ? (s != null && c === 'onScroll' && F('scroll', e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push('style', n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ic = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Hd(e, t, n) {
  var r = t.pendingProps;
  switch ((Ei(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return de(t.type) && Wr(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ln(),
        j(fe),
        j(le),
        Ti(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (Jo(Te), (Te = null)))),
        Wo(e, t),
        ne(t),
        null
      );
    case 5:
      Ri(t);
      var l = xt(Kn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        oc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = xt($e.current)), mr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[je] = t), (r[Hn] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              F('cancel', r), F('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              F('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < xn.length; l++) F(xn[l], r);
              break;
            case 'source':
              F('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              F('error', r), F('load', r);
              break;
            case 'details':
              F('toggle', r);
              break;
            case 'input':
              lu(r, o), F('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                F('invalid', r);
              break;
            case 'textarea':
              iu(r, o), F('invalid', r);
          }
          vo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Mn.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  F('scroll', r);
            }
          switch (n) {
            case 'input':
              ir(r), ou(r, o, !0);
              break;
            case 'textarea':
              ir(r), uu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Ar);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Is(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[je] = t),
            (e[Hn] = r),
            lc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = yo(n, r)), n)) {
              case 'dialog':
                F('cancel', e), F('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                F('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < xn.length; l++) F(xn[l], e);
                l = r;
                break;
              case 'source':
                F('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                F('error', e), F('load', e), (l = r);
                break;
              case 'details':
                F('toggle', e), (l = r);
                break;
              case 'input':
                lu(e, r), (l = co(e, r)), F('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  F('invalid', e);
                break;
              case 'textarea':
                iu(e, r), (l = ho(e, r)), F('invalid', e);
                break;
              default:
                l = r;
            }
            vo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === 'style'
                  ? Fs(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Ms(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Dn(e, s)
                    : typeof s == 'number' && Dn(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Mn.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && F('scroll', e)
                      : s != null && ui(e, o, s, i));
              }
            switch (n) {
              case 'input':
                ir(e), ou(e, r, !1);
                break;
              case 'textarea':
                ir(e), uu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + pt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Yt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Yt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Ar);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) ic(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(y(166));
        if (((n = xt(Kn.current)), xt($e.current), mr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[je] = t),
            (o = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[je] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (j($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
          Ca(), nn(), (t.flags |= 98560), (o = !1);
        else if (((o = mr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[je] = t;
          } else
            nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (o = !1);
        } else Te !== null && (Jo(Te), (Te = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : Wi())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        ln(), Wo(e, t), e === null && An(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return Pi(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && Wr(), ne(t), null;
    case 19:
      if ((j($), (o = t.memoizedState), o === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) wn(o, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Zr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    wn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Q() > un &&
            ((t.flags |= 128), (r = !0), wn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wn(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !U)
            )
              return ne(t), null;
          } else
            2 * Q() - o.renderingStartTime > un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Q()),
          (t.sibling = null),
          (n = $.current),
          D($, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        Ai(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Qd(e, t) {
  switch ((Ei(t), t.tag)) {
    case 1:
      return (
        de(t.type) && Wr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ln(),
        j(fe),
        j(le),
        Ti(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ri(t), null;
    case 13:
      if ((j($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return j($), null;
    case 4:
      return ln(), null;
    case 10:
      return Pi(t.type._context), null;
    case 22:
    case 23:
      return Ai(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gr = !1,
  re = !1,
  Kd = typeof WeakSet == 'function' ? WeakSet : Set,
  k = null;
function Qt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        A(e, t, r);
      }
    else n.current = null;
}
function Ho(e, t, n) {
  try {
    n();
  } catch (r) {
    A(e, t, r);
  }
}
var Zu = !1;
function Yd(e, t) {
  if (((No = $r), (e = ca()), Si(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (p = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (u = i),
                p === o && ++h === r && (s = i),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zo = { focusedElem: e, selectionRange: n }, $r = !1, k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (k = e);
    else
      for (; k !== null; ) {
        t = k;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var g = S.memoizedProps,
                    z = S.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Le(t.type, g),
                      z,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          A(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (k = e);
          break;
        }
        k = t.return;
      }
  return (S = Zu), (Zu = !1), S;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ho(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Qo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function uc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), uc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[je], delete t[Hn], delete t[To], delete t[Ld], delete t[Rd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function sc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ju(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || sc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ar));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ko(e, t, n), e = e.sibling; e !== null; ) Ko(e, t, n), (e = e.sibling);
}
function Yo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yo(e, t, n), e = e.sibling; e !== null; ) Yo(e, t, n), (e = e.sibling);
}
var q = null,
  Re = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) ac(e, t, n), (n = n.sibling);
}
function ac(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == 'function')
    try {
      Ue.onCommitFiberUnmount(ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Qt(n, t);
    case 6:
      var r = q,
        l = Re;
      (q = null),
        Ze(e, t, n),
        (q = r),
        (Re = l),
        q !== null &&
          (Re
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Re
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Hl(e.parentNode, n)
              : e.nodeType === 1 && Hl(e, n),
            $n(e))
          : Hl(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Re),
        (q = n.stateNode.containerInfo),
        (Re = !0),
        Ze(e, t, n),
        (q = r),
        (Re = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ho(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          A(n, t, u);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Ze(e, t, n), (re = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function qu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Kd()),
      t.forEach(function (r) {
        var l = np.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Re = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Re = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Re = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        ac(o, i, l), (q = null), (Re = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        A(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cc(t, e), (t = t.sibling);
}
function cc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), De(e), r & 4)) {
        try {
          Tn(3, e, e.return), ml(3, e);
        } catch (g) {
          A(e, e.return, g);
        }
        try {
          Tn(5, e, e.return);
        } catch (g) {
          A(e, e.return, g);
        }
      }
      break;
    case 1:
      ze(t, e), De(e), r & 512 && n !== null && Qt(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        De(e),
        r & 512 && n !== null && Qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Dn(l, '');
        } catch (g) {
          A(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && Ts(l, o),
              yo(u, i);
            var c = yo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                m = s[i + 1];
              h === 'style'
                ? Fs(l, m)
                : h === 'dangerouslySetInnerHTML'
                ? Ms(l, m)
                : h === 'children'
                ? Dn(l, m)
                : ui(l, h, m, c);
            }
            switch (u) {
              case 'input':
                fo(l, o);
                break;
              case 'textarea':
                Os(l, o);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? Yt(l, !!o.multiple, w, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Yt(l, !!o.multiple, o.defaultValue, !0)
                      : Yt(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[Hn] = o;
          } catch (g) {
            A(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ze(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          A(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $n(t.containerInfo);
        } catch (g) {
          A(e, e.return, g);
        }
      break;
    case 4:
      ze(t, e), De(e);
      break;
    case 13:
      ze(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Bi = Q())),
        r & 4 && qu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || h), ze(t, e), (re = c)) : ze(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (k = e, h = e.child; h !== null; ) {
            for (m = k = h; k !== null; ) {
              switch (((p = k), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tn(4, p, p.return);
                  break;
                case 1:
                  Qt(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (g) {
                      A(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Qt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    es(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (k = w)) : es(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = Ds('display', i)));
              } catch (g) {
                A(e, e.return, g);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? '' : m.memoizedProps;
              } catch (g) {
                A(e, e.return, g);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), De(e), r & 4 && qu(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Dn(l, ''), (r.flags &= -33));
          var o = Ju(e);
          Yo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ju(e);
          Ko(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      A(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Xd(e, t, n) {
  (k = e), fc(e);
}
function fc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || gr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = gr;
        var c = re;
        if (((gr = i), (re = s) && !c))
          for (k = l; k !== null; )
            (i = k),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ts(l)
                : s !== null
                ? ((s.return = i), (k = s))
                : ts(l);
        for (; o !== null; ) (k = o), fc(o), (o = o.sibling);
        (k = l), (gr = u), (re = c);
      }
      bu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (k = o)) : bu(e);
  }
}
function bu(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Fu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Fu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && $n(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (t.flags & 512 && Qo(t));
      } catch (p) {
        A(t, t.return, p);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function es(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function ts(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ml(4, t);
          } catch (s) {
            A(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              A(t, l, s);
            }
          }
          var o = t.return;
          try {
            Qo(t);
          } catch (s) {
            A(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Qo(t);
          } catch (s) {
            A(t, i, s);
          }
      }
    } catch (s) {
      A(t, t.return, s);
    }
    if (t === e) {
      k = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (k = u);
      break;
    }
    k = t.return;
  }
}
var Gd = Math.ceil,
  br = Ge.ReactCurrentDispatcher,
  Ui = Ge.ReactCurrentOwner,
  xe = Ge.ReactCurrentBatchConfig,
  I = 0,
  J = null,
  K = null,
  b = 0,
  me = 0,
  Kt = vt(0),
  X = 0,
  Zn = null,
  Rt = 0,
  vl = 0,
  $i = 0,
  On = null,
  ae = null,
  Bi = 0,
  un = 1 / 0,
  Be = null,
  el = !1,
  Xo = null,
  ct = null,
  wr = !1,
  rt = null,
  tl = 0,
  In = 0,
  Go = null,
  Rr = -1,
  Tr = 0;
function ie() {
  return I & 6 ? Q() : Rr !== -1 ? Rr : (Rr = Q());
}
function ft(e) {
  return e.mode & 1
    ? I & 2 && b !== 0
      ? b & -b
      : Od.transition !== null
      ? (Tr === 0 && (Tr = Xs()), Tr)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ta(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < In) throw ((In = 0), (Go = null), Error(y(185)));
  qn(e, n, r),
    (!(I & 2) || e !== J) &&
      (e === J && (!(I & 2) && (vl |= n), X === 4 && et(e, b)),
      pe(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((un = Q() + 500), dl && yt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  Of(e, t);
  var r = Ur(e, e === J ? b : 0);
  if (r === 0)
    n !== null && cu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && cu(n), t === 1))
      e.tag === 0 ? Td(ns.bind(null, e)) : Sa(ns.bind(null, e)),
        Nd(function () {
          !(I & 6) && yt();
        }),
        (n = null);
    else {
      switch (Gs(r)) {
        case 1:
          n = di;
          break;
        case 4:
          n = Ks;
          break;
        case 16:
          n = jr;
          break;
        case 536870912:
          n = Ys;
          break;
        default:
          n = jr;
      }
      n = wc(n, dc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function dc(e, t) {
  if (((Rr = -1), (Tr = 0), I & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = Ur(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = nl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = hc();
    (J !== e || b !== t) && ((Be = null), (un = Q() + 500), _t(e, t));
    do
      try {
        qd();
        break;
      } catch (u) {
        pc(e, u);
      }
    while (1);
    _i(),
      (br.current = o),
      (I = l),
      K !== null ? (t = 0) : ((J = null), (b = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Eo(e)), l !== 0 && ((r = l), (t = Zo(e, l)))), t === 1)
    )
      throw ((n = Zn), _t(e, 0), et(e, r), pe(e, Q()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Zd(l) &&
          ((t = nl(e, r)),
          t === 2 && ((o = Eo(e)), o !== 0 && ((r = o), (t = Zo(e, o)))),
          t === 1))
      )
        throw ((n = Zn), _t(e, 0), et(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          kt(e, ae, Be);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = Bi + 500 - Q()), 10 < t))
          ) {
            if (Ur(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ie(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ro(kt.bind(null, e, ae, Be), t);
            break;
          }
          kt(e, ae, Be);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Gd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ro(kt.bind(null, e, ae, Be), r);
            break;
          }
          kt(e, ae, Be);
          break;
        case 5:
          kt(e, ae, Be);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? dc.bind(null, e) : null;
}
function Zo(e, t) {
  var n = On;
  return (
    e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256),
    (e = nl(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && Jo(t)),
    e
  );
}
function Jo(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function Zd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~$i,
      t &= ~vl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ns(e) {
  if (I & 6) throw Error(y(327));
  qt();
  var t = Ur(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Eo(e);
    r !== 0 && ((t = r), (n = Zo(e, r)));
  }
  if (n === 1) throw ((n = Zn), _t(e, 0), et(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, ae, Be),
    pe(e, Q()),
    null
  );
}
function Vi(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((un = Q() + 500), dl && yt());
  }
}
function Tt(e) {
  rt !== null && rt.tag === 0 && !(I & 6) && qt();
  var t = I;
  I |= 1;
  var n = xe.transition,
    r = M;
  try {
    if (((xe.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (xe.transition = n), (I = t), !(I & 6) && yt();
  }
}
function Ai() {
  (me = Kt.current), j(Kt);
}
function _t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Pd(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((Ei(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Wr();
          break;
        case 3:
          ln(), j(fe), j(le), Ti();
          break;
        case 5:
          Ri(r);
          break;
        case 4:
          ln();
          break;
        case 13:
          j($);
          break;
        case 19:
          j($);
          break;
        case 10:
          Pi(r.type._context);
          break;
        case 22:
        case 23:
          Ai();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (K = e = dt(e.current, null)),
    (b = me = t),
    (X = 0),
    (Zn = null),
    ($i = vl = Rt = 0),
    (ae = On = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function pc(e, t) {
  do {
    var n = K;
    try {
      if ((_i(), (Nr.current = qr), Jr)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Jr = !1;
      }
      if (
        ((Lt = 0),
        (Z = Y = B = null),
        (Rn = !1),
        (Yn = 0),
        (Ui.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Zn = t), (K = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = Wu(i);
          if (w !== null) {
            (w.flags &= -257),
              Hu(w, i, u, o, t),
              w.mode & 1 && Au(o, c, t),
              (t = w),
              (s = c);
            var S = t.updateQueue;
            if (S === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Au(o, c, t), Wi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var z = Wu(i);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256),
              Hu(z, i, u, o, t),
              Ci(on(s, u));
            break e;
          }
        }
        (o = s = on(s, u)),
          X !== 4 && (X = 2),
          On === null ? (On = [o]) : On.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Za(o, s, t);
              Du(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (ct === null || !ct.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Ja(o, u, t);
                Du(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      vc(n);
    } catch (E) {
      (t = E), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function hc() {
  var e = br.current;
  return (br.current = qr), e === null ? qr : e;
}
function Wi() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(Rt & 268435455) && !(vl & 268435455)) || et(J, b);
}
function nl(e, t) {
  var n = I;
  I |= 2;
  var r = hc();
  (J !== e || b !== t) && ((Be = null), _t(e, t));
  do
    try {
      Jd();
      break;
    } catch (l) {
      pc(e, l);
    }
  while (1);
  if ((_i(), (I = n), (br.current = r), K !== null)) throw Error(y(261));
  return (J = null), (b = 0), X;
}
function Jd() {
  for (; K !== null; ) mc(K);
}
function qd() {
  for (; K !== null && !Cf(); ) mc(K);
}
function mc(e) {
  var t = gc(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? vc(e) : (K = t),
    (Ui.current = null);
}
function vc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Qd(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = Hd(n, t, me)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function kt(e, t, n) {
  var r = M,
    l = xe.transition;
  try {
    (xe.transition = null), (M = 1), bd(e, t, n, r);
  } finally {
    (xe.transition = l), (M = r);
  }
  return null;
}
function bd(e, t, n, r) {
  do qt();
  while (rt !== null);
  if (I & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (If(e, o),
    e === J && ((K = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wr ||
      ((wr = !0),
      wc(jr, function () {
        return qt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = xe.transition), (xe.transition = null);
    var i = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Ui.current = null),
      Yd(e, n),
      cc(n, e),
      wd(zo),
      ($r = !!No),
      (zo = No = null),
      (e.current = n),
      Xd(n),
      xf(),
      (I = u),
      (M = i),
      (xe.transition = o);
  } else e.current = n;
  if (
    (wr && ((wr = !1), (rt = e), (tl = l)),
    (o = e.pendingLanes),
    o === 0 && (ct = null),
    Nf(n.stateNode),
    pe(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (el) throw ((el = !1), (e = Xo), (Xo = null), e);
  return (
    tl & 1 && e.tag !== 0 && qt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Go ? In++ : ((In = 0), (Go = e))) : (In = 0),
    yt(),
    null
  );
}
function qt() {
  if (rt !== null) {
    var e = Gs(tl),
      t = xe.transition,
      n = M;
    try {
      if (((xe.transition = null), (M = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (tl = 0), I & 6)) throw Error(y(331));
        var l = I;
        for (I |= 4, k = e.current; k !== null; ) {
          var o = k,
            i = o.child;
          if (k.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (k = c; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (k = m);
                  else
                    for (; k !== null; ) {
                      h = k;
                      var p = h.sibling,
                        w = h.return;
                      if ((uc(h), h === c)) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (k = p);
                        break;
                      }
                      k = w;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var g = S.child;
                if (g !== null) {
                  S.child = null;
                  do {
                    var z = g.sibling;
                    (g.sibling = null), (g = z);
                  } while (g !== null);
                }
              }
              k = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (k = i);
          else
            e: for (; k !== null; ) {
              if (((o = k), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (k = f);
                break e;
              }
              k = o.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          i = k;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (k = d);
          else
            e: for (i = a; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ml(9, u);
                  }
                } catch (E) {
                  A(u, u.return, E);
                }
              if (u === i) {
                k = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (k = v);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((I = l), yt(), Ue && typeof Ue.onPostCommitFiberRoot == 'function')
        )
          try {
            Ue.onPostCommitFiberRoot(ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (xe.transition = t);
    }
  }
  return !1;
}
function rs(e, t, n) {
  (t = on(n, t)),
    (t = Za(e, t, 1)),
    (e = at(e, t, 1)),
    (t = ie()),
    e !== null && (qn(e, 1, t), pe(e, t));
}
function A(e, t, n) {
  if (e.tag === 3) rs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        rs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ct === null || !ct.has(r)))
        ) {
          (e = on(n, e)),
            (e = Ja(t, e, 1)),
            (t = at(t, e, 1)),
            (e = ie()),
            t !== null && (qn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ep(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (b & n) === n &&
      (X === 4 || (X === 3 && (b & 130023424) === b && 500 > Q() - Bi)
        ? _t(e, 0)
        : ($i |= n)),
    pe(e, t);
}
function yc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ar), (ar <<= 1), !(ar & 130023424) && (ar = 4194304))
      : (t = 1));
  var n = ie();
  (e = Ye(e, t)), e !== null && (qn(e, t, n), pe(e, n));
}
function tp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yc(e, n);
}
function np(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), yc(e, n);
}
var gc;
gc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), Wd(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && t.flags & 1048576 && ka(t, Kr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Lr(e, t), (e = t.pendingProps);
      var l = tn(t, le.current);
      Jt(t, n), (l = Ii(null, t, r, e, l, n));
      var o = Mi();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            de(r) ? ((o = !0), Hr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            zi(t),
            (l.updater = pl),
            (t.stateNode = l),
            (l._reactInternals = t),
            jo(t, r, e, n),
            (t = Bo(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && ki(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Lr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = lp(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = $o(null, t, r, e, n);
            break e;
          case 1:
            t = Yu(null, t, r, e, n);
            break e;
          case 11:
            t = Qu(null, t, r, e, n);
            break e;
          case 14:
            t = Ku(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        $o(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Yu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((tc(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          _a(e, t),
          Gr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = on(Error(y(423)), t)), (t = Xu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = on(Error(y(424)), t)), (t = Xu(e, t, r, n, l));
            break e;
          } else
            for (
              ve = st(t.stateNode.containerInfo.firstChild),
                ye = t,
                U = !0,
                Te = null,
                n = La(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nn(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ra(t),
        e === null && Mo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Lo(r, l) ? (i = null) : o !== null && Lo(r, o) && (t.flags |= 32),
        ec(e, t),
        oe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Mo(t), null;
    case 13:
      return nc(e, t, n);
    case 4:
      return (
        Li(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Qu(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          D(Yr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Me(o.value, i)) {
            if (o.children === l.children && !fe.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = He(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Do(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Do(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jt(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        Ku(e, t, r, l, n)
      );
    case 15:
      return qa(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Lr(e, t),
        (t.tag = 1),
        de(r) ? ((e = !0), Hr(t)) : (e = !1),
        Jt(t, n),
        Na(t, r, l),
        jo(t, r, l, n),
        Bo(null, t, r, !0, e, n)
      );
    case 19:
      return rc(e, t, n);
    case 22:
      return ba(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function wc(e, t) {
  return Qs(e, t);
}
function rp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new rp(e, t, n, r);
}
function Hi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function lp(e) {
  if (typeof e == 'function') return Hi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ai)) return 11;
    if (e === ci) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Or(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Hi(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Ft:
        return Pt(n.children, l, o, t);
      case si:
        (i = 8), (l |= 8);
        break;
      case io:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = io), (e.lanes = o), e
        );
      case uo:
        return (e = Ce(13, n, t, l)), (e.elementType = uo), (e.lanes = o), e;
      case so:
        return (e = Ce(19, n, t, l)), (e.elementType = so), (e.lanes = o), e;
      case zs:
        return yl(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ps:
              i = 10;
              break e;
            case Ns:
              i = 9;
              break e;
            case ai:
              i = 11;
              break e;
            case ci:
              i = 14;
              break e;
            case Je:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ce(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Pt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function yl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = zs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ql(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function bl(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function op(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Il(0)),
    (this.expirationTimes = Il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Qi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new op(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ce(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zi(o),
    e
  );
}
function ip(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Sc(e) {
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return wa(e, n, t);
  }
  return t;
}
function kc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Qi(n, r, !0, e, l, o, i, u, s)),
    (e.context = Sc(null)),
    (n = e.current),
    (r = ie()),
    (l = ft(n)),
    (o = He(r, l)),
    (o.callback = t ?? null),
    at(n, o, l),
    (e.current.lanes = l),
    qn(e, l, r),
    pe(e, r),
    e
  );
}
function gl(e, t, n, r) {
  var l = t.current,
    o = ie(),
    i = ft(l);
  return (
    (n = Sc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = He(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, i)),
    e !== null && (Ie(e, l, i, o), Pr(e, l, i)),
    i
  );
}
function rl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ls(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ki(e, t) {
  ls(e, t), (e = e.alternate) && ls(e, t);
}
function up() {
  return null;
}
var Ec =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yi(e) {
  this._internalRoot = e;
}
wl.prototype.render = Yi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  gl(e, t, null, null);
};
wl.prototype.unmount = Yi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      gl(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && ea(e);
  }
};
function Xi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function os() {}
function sp(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var c = rl(i);
        o.call(c);
      };
    }
    var i = kc(t, r, e, 0, null, !1, !1, '', os);
    return (
      (e._reactRootContainer = i),
      (e[Ke] = i.current),
      An(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var c = rl(s);
      u.call(c);
    };
  }
  var s = Qi(e, 0, !1, null, null, !1, !1, '', os);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      gl(t, s, n, r);
    }),
    s
  );
}
function kl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = rl(i);
        u.call(s);
      };
    }
    gl(t, i, e, l);
  } else i = sp(n, t, e, l, r);
  return rl(i);
}
Zs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cn(t.pendingLanes);
        n !== 0 &&
          (pi(t, n | 1), pe(t, Q()), !(I & 6) && ((un = Q() + 500), yt()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ie();
          Ie(r, e, 1, l);
        }
      }),
        Ki(e, 1);
  }
};
hi = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = ie();
      Ie(t, e, 134217728, n);
    }
    Ki(e, 134217728);
  }
};
Js = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = ie();
      Ie(n, e, t, r);
    }
    Ki(e, t);
  }
};
qs = function () {
  return M;
};
bs = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
wo = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((fo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = fl(r);
            if (!l) throw Error(y(90));
            Rs(r), fo(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Os(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Yt(e, !!n.multiple, t, !1);
  }
};
$s = Vi;
Bs = Tt;
var ap = { usingClientEntryPoint: !1, Events: [er, Bt, fl, js, Us, Vi] },
  Sn = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  cp = {
    bundleType: Sn.bundleType,
    version: Sn.version,
    rendererPackageName: Sn.rendererPackageName,
    rendererConfig: Sn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ws(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Sn.findFiberByHostInstance || up,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber)
    try {
      (ul = Sr.inject(cp)), (Ue = Sr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ap;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xi(t)) throw Error(y(200));
  return ip(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Xi(e)) throw Error(y(299));
  var n = !1,
    r = '',
    l = Ec;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Qi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    new Yi(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(y(188))
      : ((e = Object.keys(e).join(',')), Error(y(268, e)));
  return (e = Ws(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Tt(e);
};
we.hydrate = function (e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return kl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Xi(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = Ec;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = kc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ke] = t.current),
    An(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new wl(t);
};
we.render = function (e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return kl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!Sl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tt(function () {
        kl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Vi;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Sl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return kl(e, t, n, !1, r);
};
we.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = we);
})(uf);
var is = ro;
(no.createRoot = is.createRoot), (no.hydrateRoot = is.hydrateRoot);
/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ll() {
  return (
    (ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ll.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(lt || (lt = {}));
const us = 'popstate';
function fp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return qo(
      '',
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default',
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : Cc(l);
  }
  return pp(t, n, null, e);
}
function he(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Gi(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function dp() {
  return Math.random().toString(36).substr(2, 8);
}
function ss(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function qo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ll(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? El(t) : t,
      {
        state: n,
        key: (t && t.key) || r || dp(),
      },
    )
  );
}
function Cc(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function El(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function pp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = lt.Pop,
    s = null,
    c = h();
  c == null && ((c = 0), i.replaceState(ll({}, i.state, { idx: c }), ''));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    u = lt.Pop;
    let z = h(),
      f = z == null ? null : z - c;
    (c = z), s && s({ action: u, location: g.location, delta: f });
  }
  function p(z, f) {
    u = lt.Push;
    let a = qo(g.location, z, f);
    n && n(a, z), (c = h() + 1);
    let d = ss(a, c),
      v = g.createHref(a);
    try {
      i.pushState(d, '', v);
    } catch {
      l.location.assign(v);
    }
    o && s && s({ action: u, location: g.location, delta: 1 });
  }
  function w(z, f) {
    u = lt.Replace;
    let a = qo(g.location, z, f);
    n && n(a, z), (c = h());
    let d = ss(a, c),
      v = g.createHref(a);
    i.replaceState(d, '', v),
      o && s && s({ action: u, location: g.location, delta: 0 });
  }
  function S(z) {
    let f = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      a = typeof z == 'string' ? z : Cc(z);
    return (
      he(
        f,
        'No window.location.(origin|href) available to create URL for href: ' +
          a,
      ),
      new URL(a, f)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(z) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(us, m),
        (s = z),
        () => {
          l.removeEventListener(us, m), (s = null);
        }
      );
    },
    createHref(z) {
      return t(l, z);
    },
    createURL: S,
    encodeLocation(z) {
      let f = S(z);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: p,
    replace: w,
    go(z) {
      return i.go(z);
    },
  };
  return g;
}
var as;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(as || (as = {}));
function hp(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? El(t) : t,
    l = Pc(r.pathname || '/', n);
  if (l == null) return null;
  let o = xc(e);
  mp(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = xp(o[u], Np(l));
  return i;
}
function xc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || '' : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith('/') &&
      (he(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let c = bt([r, s.relativePath]),
      h = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (he(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + c + '".'),
      ),
      xc(o.children, t, h, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: Ep(c, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === '' || !((u = o.path) != null && u.includes('?'))) l(o, i);
      else for (let s of _c(o.path)) l(o, i, s);
    }),
    t
  );
}
function _c(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = _c(r.join('/')),
    u = [];
  return (
    u.push(...i.map((s) => (s === '' ? o : [o, s].join('/')))),
    l && u.push(...i),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function mp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Cp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const vp = /^:\w+$/,
  yp = 3,
  gp = 2,
  wp = 1,
  Sp = 10,
  kp = -2,
  cs = (e) => e === '*';
function Ep(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(cs) && (r += kp),
    t && (r += gp),
    n
      .filter((l) => !cs(l))
      .reduce((l, o) => l + (vp.test(o) ? yp : o === '' ? wp : Sp), r)
  );
}
function Cp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function xp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      c = l === '/' ? t : t.slice(l.length) || '/',
      h = _p(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        c,
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let m = u.route;
    o.push({
      params: r,
      pathname: bt([l, h.pathname]),
      pathnameBase: Lp(bt([l, h.pathnameBase])),
      route: m,
    }),
      h.pathnameBase !== '/' && (l = bt([l, h.pathnameBase]));
  }
  return o;
}
function _p(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Pp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((c, h, m) => {
      if (h === '*') {
        let p = u[m] || '';
        i = o.slice(0, o.length - p.length).replace(/(.)\/+$/, '$1');
      }
      return (c[h] = zp(u[m] || '', h)), c;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Pp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Gi(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Np(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Gi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function zp(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Gi(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    );
  }
}
function Pc(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
const bt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Lp = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/');
function Rp(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Tp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Op = typeof Object.is == 'function' ? Object.is : Tp,
  { useState: Ip, useEffect: Mp, useLayoutEffect: Dp, useDebugValue: Fp } = to;
function jp(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = Ip({ inst: { value: r, getSnapshot: t } });
  return (
    Dp(() => {
      (l.value = r), (l.getSnapshot = t), eo(l) && o({ inst: l });
    }, [e, r, t]),
    Mp(
      () => (
        eo(l) && o({ inst: l }),
        e(() => {
          eo(l) && o({ inst: l });
        })
      ),
      [e],
    ),
    Fp(r),
    r
  );
}
function eo(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Op(n, r);
  } catch {
    return !0;
  }
}
function Up(e, t, n) {
  return t();
}
const $p =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Bp = !$p,
  Vp = Bp ? Up : jp;
'useSyncExternalStore' in to && ((e) => e.useSyncExternalStore)(to);
const Nc = N.createContext(null),
  zc = N.createContext(null),
  Lc = N.createContext(null),
  Cl = N.createContext(null),
  xl = N.createContext({ outlet: null, matches: [] }),
  Rc = N.createContext(null);
function bo() {
  return (
    (bo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bo.apply(this, arguments)
  );
}
function Zi() {
  return N.useContext(Cl) != null;
}
function Ap() {
  return Zi() || he(!1), N.useContext(Cl).location;
}
function Wp(e, t) {
  Zi() || he(!1);
  let { navigator: n } = N.useContext(Lc),
    r = N.useContext(zc),
    { matches: l } = N.useContext(xl),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : '/';
  o && o.route;
  let s = Ap(),
    c;
  if (t) {
    var h;
    let g = typeof t == 'string' ? El(t) : t;
    u === '/' || ((h = g.pathname) != null && h.startsWith(u)) || he(!1),
      (c = g);
  } else c = s;
  let m = c.pathname || '/',
    p = u === '/' ? m : m.slice(u.length) || '/',
    w = hp(e, { pathname: p }),
    S = Yp(
      w &&
        w.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: bt([
              u,
              n.encodeLocation
                ? n.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === '/'
                ? u
                : bt([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          }),
        ),
      l,
      r || void 0,
    );
  return t && S
    ? N.createElement(
        Cl.Provider,
        {
          value: {
            location: bo(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              c,
            ),
            navigationType: lt.Pop,
          },
        },
        S,
      )
    : S;
}
function Hp() {
  let e = Jp(),
    t = Rp(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null;
  return N.createElement(
    N.Fragment,
    null,
    N.createElement('h2', null, 'Unexpected Application Error!'),
    N.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? N.createElement('pre', { style: l }, n) : null,
    o,
  );
}
class Qp extends N.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? N.createElement(
          xl.Provider,
          { value: this.props.routeContext },
          N.createElement(Rc.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Kp(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = N.useContext(Nc);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(xl.Provider, { value: t }, r)
  );
}
function Yp(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex(
      (i) => i.route.id && (l == null ? void 0 : l[i.route.id]),
    );
    o >= 0 || he(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, u) => {
    let s = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      c = null;
    n &&
      (i.route.ErrorBoundary
        ? (c = N.createElement(i.route.ErrorBoundary, null))
        : i.route.errorElement
        ? (c = i.route.errorElement)
        : (c = N.createElement(Hp, null)));
    let h = t.concat(r.slice(0, u + 1)),
      m = () => {
        let p = o;
        return (
          s
            ? (p = c)
            : i.route.Component
            ? (p = N.createElement(i.route.Component, null))
            : i.route.element && (p = i.route.element),
          N.createElement(Kp, {
            match: i,
            routeContext: { outlet: o, matches: h },
            children: p,
          })
        );
      };
    return n && (i.route.ErrorBoundary || i.route.errorElement || u === 0)
      ? N.createElement(Qp, {
          location: n.location,
          component: c,
          error: s,
          children: m(),
          routeContext: { outlet: null, matches: h },
        })
      : m();
  }, null);
}
var fs;
(function (e) {
  (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator');
})(fs || (fs = {}));
var ol;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(ol || (ol = {}));
function Xp(e) {
  let t = N.useContext(zc);
  return t || he(!1), t;
}
function Gp(e) {
  let t = N.useContext(xl);
  return t || he(!1), t;
}
function Zp(e) {
  let t = Gp(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || he(!1), n.route.id;
}
function Jp() {
  var e;
  let t = N.useContext(Rc),
    n = Xp(ol.UseRouteError),
    r = Zp(ol.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Tc(e) {
  he(!1);
}
function qp(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = lt.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  Zi() && he(!1);
  let u = t.replace(/^\/*/, '/'),
    s = N.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == 'string' && (r = El(r));
  let {
      pathname: c = '/',
      search: h = '',
      hash: m = '',
      state: p = null,
      key: w = 'default',
    } = r,
    S = N.useMemo(() => {
      let g = Pc(c, u);
      return g == null
        ? null
        : {
            location: { pathname: g, search: h, hash: m, state: p, key: w },
            navigationType: l,
          };
    }, [u, c, h, m, p, w, l]);
  return S == null
    ? null
    : N.createElement(
        Lc.Provider,
        { value: s },
        N.createElement(Cl.Provider, { children: n, value: S }),
      );
}
function bp(e) {
  let { children: t, location: n } = e,
    r = N.useContext(Nc),
    l = r && !t ? r.router.routes : ei(t);
  return Wp(l, n);
}
var ds;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(ds || (ds = {}));
new Promise(() => {});
function ei(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (r, l) => {
      if (!N.isValidElement(r)) return;
      if (r.type === N.Fragment) {
        n.push.apply(n, ei(r.props.children, t));
        return;
      }
      r.type !== Tc && he(!1), !r.props.index || !r.props.children || he(!1);
      let o = [...t, l],
        i = {
          id: r.props.id || o.join('-'),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
      r.props.children && (i.children = ei(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function eh(e) {
  let { basename: t, children: n, window: r } = e,
    l = N.useRef();
  l.current == null && (l.current = fp({ window: r, v5Compat: !0 }));
  let o = l.current,
    [i, u] = N.useState({ action: o.action, location: o.location });
  return (
    N.useLayoutEffect(() => o.listen(u), [o]),
    N.createElement(qp, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: o,
    })
  );
}
var ps;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(ps || (ps = {}));
var hs;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(hs || (hs = {}));
const th = () =>
    tt('div', {
      className: 'main-page-container',
      children: tt('div', { className: 'main-page' }),
    }),
  nh = () =>
    tt(of, {
      children: tt(bp, {
        children: tt(Tc, { index: !0, element: tt(th, {}) }),
      }),
    });
no.createRoot(document.getElementById('root')).render(
  tt(eh, { children: tt(nh, {}) }),
);
