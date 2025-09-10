var Vo = Object.defineProperty;
var Fo = (e, t, n) => t in e ? Vo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var u = (e, t, n) => Fo(e, typeof t != "symbol" ? t + "" : t, n);
import { defineComponent as R, withDirectives as Ke, openBlock as m, createBlock as N, resolveDynamicComponent as it, withCtx as P, renderSlot as L, vShow as nt, createCommentVNode as M, createElementBlock as I, normalizeClass as H, normalizeStyle as Ye, unref as Qt, resolveComponent as T, mergeProps as G, toHandlers as Wo, createVNode as W, normalizeProps as rt, guardReactiveProps as Mt, toDisplayString as X, markRaw as j, defineAsyncComponent as q, createElementVNode as U, ref as at, createTextVNode as Be, Fragment as ce, renderList as ye, vModelCheckbox as vr, Transition as ot, Teleport as Xn, getCurrentInstance as gn, h as Ss, render as Uo, effectScope as xo, inject as Qn, onMounted as Ho, onUnmounted as Yo, computed as et, watch as ya, isRef as Cr, shallowRef as zo, Text as jo, createSlots as wa, TransitionGroup as Dr, withModifiers as _r, reactive as qo } from "vue";
const $r = 6048e5, Go = 864e5, Ko = 6e4, Xo = 36e5, Qo = 1e3, gi = Symbol.for("constructDateFrom");
function Re(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && gi in e ? e[gi](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Oe(e, t) {
  return Re(t || e, e);
}
function Sr(e, t, n) {
  const s = Oe(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Re((n == null ? void 0 : n.in) || e, NaN) : (t && s.setDate(s.getDate() + t), s);
}
let Jo = {};
function vn() {
  return Jo;
}
function Dt(e, t) {
  var o, l, c, h;
  const n = vn(), s = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((h = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : h.weekStartsOn) ?? 0, a = Oe(e, t == null ? void 0 : t.in), i = a.getDay(), r = (i < s ? 7 : 0) + i - s;
  return a.setDate(a.getDate() - r), a.setHours(0, 0, 0, 0), a;
}
function bn(e, t) {
  return Dt(e, { ...t, weekStartsOn: 1 });
}
function Er(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), s = n.getFullYear(), a = Re(n, 0);
  a.setFullYear(s + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const i = bn(a), r = Re(n, 0);
  r.setFullYear(s, 0, 4), r.setHours(0, 0, 0, 0);
  const o = bn(r);
  return n.getTime() >= i.getTime() ? s + 1 : n.getTime() >= o.getTime() ? s : s - 1;
}
function vs(e) {
  const t = Oe(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Ir(e, ...t) {
  const n = Re.bind(
    null,
    e || t.find((s) => typeof s == "object")
  );
  return t.map(n);
}
function bi(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Zo(e, t, n) {
  const [s, a] = Ir(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = bi(s), r = bi(a), o = +i - vs(i), l = +r - vs(r);
  return Math.round((o - l) / Go);
}
function el(e, t) {
  const n = Er(e, t), s = Re(e, 0);
  return s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0), bn(s);
}
function tl(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function nl(e) {
  return !(!tl(e) && typeof e != "number" || isNaN(+Oe(e)));
}
function sl(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const al = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, il = (e, t, n) => {
  let s;
  const a = al[e];
  return typeof a == "string" ? s = a : t === 1 ? s = a.one : s = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + s : s + " ago" : s;
};
function pn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const rl = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ol = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ll = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ul = {
  date: pn({
    formats: rl,
    defaultWidth: "full"
  }),
  time: pn({
    formats: ol,
    defaultWidth: "full"
  }),
  dateTime: pn({
    formats: ll,
    defaultWidth: "full"
  })
}, cl = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, dl = (e, t, n, s) => cl[e];
function bt(e) {
  return (t, n) => {
    const s = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (s === "formatting" && e.formattingValues) {
      const r = e.defaultFormattingWidth || e.defaultWidth, o = n != null && n.width ? String(n.width) : r;
      a = e.formattingValues[o] || e.formattingValues[r];
    } else {
      const r = e.defaultWidth, o = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[o] || e.values[r];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[i];
  };
}
const fl = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ml = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, hl = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, pl = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, gl = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, bl = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, yl = (e, t) => {
  const n = Number(e), s = n % 100;
  if (s > 20 || s < 10)
    switch (s % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, wl = {
  ordinalNumber: yl,
  era: bt({
    values: fl,
    defaultWidth: "wide"
  }),
  quarter: bt({
    values: ml,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: bt({
    values: hl,
    defaultWidth: "wide"
  }),
  day: bt({
    values: pl,
    defaultWidth: "wide"
  }),
  dayPeriod: bt({
    values: gl,
    defaultWidth: "wide",
    formattingValues: bl,
    defaultFormattingWidth: "wide"
  })
};
function yt(e) {
  return (t, n = {}) => {
    const s = n.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    const r = i[0], o = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(o) ? Cl(o, (v) => v.test(r)) : (
      // [TODO] -- I challenge you to fix the type
      vl(o, (v) => v.test(r))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(c)
    ) : c;
    const h = t.slice(r.length);
    return { value: c, rest: h };
  };
}
function vl(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Cl(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function kr(e) {
  return (t, n = {}) => {
    const s = t.match(e.matchPattern);
    if (!s) return null;
    const a = s[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let r = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    r = n.valueCallback ? n.valueCallback(r) : r;
    const o = t.slice(a.length);
    return { value: r, rest: o };
  };
}
const Dl = /^(\d+)(th|st|nd|rd)?/i, _l = /\d+/i, $l = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Sl = {
  any: [/^b/i, /^(a|c)/i]
}, El = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Il = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, kl = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Tl = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Al = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Nl = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ol = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Pl = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Ml = {
  ordinalNumber: kr({
    matchPattern: Dl,
    parsePattern: _l,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: yt({
    matchPatterns: $l,
    defaultMatchWidth: "wide",
    parsePatterns: Sl,
    defaultParseWidth: "any"
  }),
  quarter: yt({
    matchPatterns: El,
    defaultMatchWidth: "wide",
    parsePatterns: Il,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: yt({
    matchPatterns: kl,
    defaultMatchWidth: "wide",
    parsePatterns: Tl,
    defaultParseWidth: "any"
  }),
  day: yt({
    matchPatterns: Al,
    defaultMatchWidth: "wide",
    parsePatterns: Nl,
    defaultParseWidth: "any"
  }),
  dayPeriod: yt({
    matchPatterns: Ol,
    defaultMatchWidth: "any",
    parsePatterns: Pl,
    defaultParseWidth: "any"
  })
}, Tr = {
  code: "en-US",
  formatDistance: il,
  formatLong: ul,
  formatRelative: dl,
  localize: wl,
  match: Ml,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Bl(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in);
  return Zo(n, sl(n)) + 1;
}
function Ar(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), s = +bn(n) - +el(n);
  return Math.round(s / $r) + 1;
}
function Wa(e, t) {
  var h, v, C, w;
  const n = Oe(e, t == null ? void 0 : t.in), s = n.getFullYear(), a = vn(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((v = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((w = (C = a.locale) == null ? void 0 : C.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, r = Re((t == null ? void 0 : t.in) || e, 0);
  r.setFullYear(s + 1, 0, i), r.setHours(0, 0, 0, 0);
  const o = Dt(r, t), l = Re((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(s, 0, i), l.setHours(0, 0, 0, 0);
  const c = Dt(l, t);
  return +n >= +o ? s + 1 : +n >= +c ? s : s - 1;
}
function Ll(e, t) {
  var o, l, c, h;
  const n = vn(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((h = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, a = Wa(e, t), i = Re((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(a, 0, s), i.setHours(0, 0, 0, 0), Dt(i, t);
}
function Nr(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), s = +Dt(n, t) - +Ll(n, t);
  return Math.round(s / $r) + 1;
}
function ae(e, t) {
  const n = e < 0 ? "-" : "", s = Math.abs(e).toString().padStart(t, "0");
  return n + s;
}
const Bt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), s = n > 0 ? n : 1 - n;
    return ae(t === "yy" ? s % 100 : s, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ae(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ae(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ae(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ae(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ae(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ae(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, s = e.getMilliseconds(), a = Math.trunc(
      s * Math.pow(10, n - 3)
    );
    return ae(a, t.length);
  }
}, rn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, yi = {
  // Era
  G: function(e, t, n) {
    const s = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(s, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(s, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(s, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const s = e.getFullYear(), a = s > 0 ? s : 1 - s;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return Bt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, s) {
    const a = Wa(e, s), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const r = i % 100;
      return ae(r, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : ae(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Er(e);
    return ae(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return ae(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const s = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(s);
      // 01, 02, 03, 04
      case "QQ":
        return ae(s, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(s, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(s, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const s = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(s);
      // 01, 02, 03, 04
      case "qq":
        return ae(s, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(s, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(s, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(s, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const s = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Bt.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(s + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(s, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(s, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const s = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(s + 1);
      // 01, 02, ..., 12
      case "LL":
        return ae(s + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(s + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(s, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(s, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(s, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, s) {
    const a = Nr(e, s);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : ae(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const s = Ar(e);
    return t === "Io" ? n.ordinalNumber(s, { unit: "week" }) : ae(s, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Bt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const s = Bl(e);
    return t === "Do" ? n.ordinalNumber(s, { unit: "dayOfYear" }) : ae(s, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const s = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(s, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(s, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, s) {
    const a = e.getDay(), i = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(i);
      // Padded numerical value
      case "ee":
        return ae(i, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, s) {
    const a = e.getDay(), i = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(i);
      // Padded numerical value
      case "cc":
        return ae(i, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const s = e.getDay(), a = s === 0 ? 7 : s;
    switch (t) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return ae(a, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return n.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(s, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(s, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const s = e.getHours();
    let a;
    switch (s === 12 ? a = rn.noon : s === 0 ? a = rn.midnight : a = s / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const s = e.getHours();
    let a;
    switch (s >= 17 ? a = rn.evening : s >= 12 ? a = rn.afternoon : s >= 4 ? a = rn.morning : a = rn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let s = e.getHours() % 12;
      return s === 0 && (s = 12), n.ordinalNumber(s, { unit: "hour" });
    }
    return Bt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Bt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const s = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(s, { unit: "hour" }) : ae(s, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let s = e.getHours();
    return s === 0 && (s = 24), t === "ko" ? n.ordinalNumber(s, { unit: "hour" }) : ae(s, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Bt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Bt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Bt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const s = e.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return vi(s);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Kt(s);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Kt(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const s = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return vi(s);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Kt(s);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Kt(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const s = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + wi(s, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Kt(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const s = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + wi(s, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Kt(s, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const s = Math.trunc(+e / 1e3);
    return ae(s, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return ae(+e, t.length);
  }
};
function wi(e, t = "") {
  const n = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.trunc(s / 60), i = s % 60;
  return i === 0 ? n + String(a) : n + String(a) + t + ae(i, 2);
}
function vi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ae(Math.abs(e) / 60, 2) : Kt(e, t);
}
function Kt(e, t = "") {
  const n = e > 0 ? "-" : "+", s = Math.abs(e), a = ae(Math.trunc(s / 60), 2), i = ae(s % 60, 2);
  return n + a + t + i;
}
const Ci = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Or = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Rl = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], s = n[1], a = n[2];
  if (!a)
    return Ci(e, t);
  let i;
  switch (s) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", Ci(s, t)).replace("{{time}}", Or(a, t));
}, va = {
  p: Or,
  P: Rl
}, Vl = /^D+$/, Fl = /^Y+$/, Wl = ["D", "DD", "YY", "YYYY"];
function Pr(e) {
  return Vl.test(e);
}
function Mr(e) {
  return Fl.test(e);
}
function Ca(e, t, n) {
  const s = Ul(e, t, n);
  if (console.warn(s), Wl.includes(e)) throw new RangeError(s);
}
function Ul(e, t, n) {
  const s = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${s} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const xl = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Hl = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Yl = /^'([^]*?)'?$/, zl = /''/g, jl = /[a-zA-Z]/;
function Br(e, t, n) {
  var h, v, C, w, E, B, k, y;
  const s = vn(), a = (n == null ? void 0 : n.locale) ?? s.locale ?? Tr, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((v = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : v.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((w = (C = s.locale) == null ? void 0 : C.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, r = (n == null ? void 0 : n.weekStartsOn) ?? ((B = (E = n == null ? void 0 : n.locale) == null ? void 0 : E.options) == null ? void 0 : B.weekStartsOn) ?? s.weekStartsOn ?? ((y = (k = s.locale) == null ? void 0 : k.options) == null ? void 0 : y.weekStartsOn) ?? 0, o = Oe(e, n == null ? void 0 : n.in);
  if (!nl(o))
    throw new RangeError("Invalid time value");
  let l = t.match(Hl).map((g) => {
    const b = g[0];
    if (b === "p" || b === "P") {
      const d = va[b];
      return d(g, a.formatLong);
    }
    return g;
  }).join("").match(xl).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const b = g[0];
    if (b === "'")
      return { isToken: !1, value: ql(g) };
    if (yi[b])
      return { isToken: !0, value: g };
    if (b.match(jl))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: g };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(o, l));
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: r,
    locale: a
  };
  return l.map((g) => {
    if (!g.isToken) return g.value;
    const b = g.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Mr(b) || !(n != null && n.useAdditionalDayOfYearTokens) && Pr(b)) && Ca(b, t, String(e));
    const d = yi[b[0]];
    return d(o, b, a.localize, c);
  }).join("");
}
function ql(e) {
  const t = e.match(Yl);
  return t ? t[1].replace(zl, "'") : e;
}
function Gl() {
  return Object.assign({}, vn());
}
function Kl(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in).getDay();
  return n === 0 ? 7 : n;
}
function Xl(e, t) {
  const n = Ql(t) ? new t(0) : Re(t, 0);
  return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), n;
}
function Ql(e) {
  var t;
  return typeof e == "function" && ((t = e.prototype) == null ? void 0 : t.constructor) === e;
}
const Jl = 10;
class Lr {
  constructor() {
    u(this, "subPriority", 0);
  }
  validate(t, n) {
    return !0;
  }
}
class Zl extends Lr {
  constructor(t, n, s, a, i) {
    super(), this.value = t, this.validateValue = n, this.setValue = s, this.priority = a, i && (this.subPriority = i);
  }
  validate(t, n) {
    return this.validateValue(t, this.value, n);
  }
  set(t, n, s) {
    return this.setValue(t, n, this.value, s);
  }
}
class eu extends Lr {
  constructor(n, s) {
    super();
    u(this, "priority", Jl);
    u(this, "subPriority", -1);
    this.context = n || ((a) => Re(s, a));
  }
  set(n, s) {
    return s.timestampIsSet ? n : Re(n, Xl(n, this.context));
  }
}
class se {
  run(t, n, s, a) {
    const i = this.parse(t, n, s, a);
    return i ? {
      setter: new Zl(
        i.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: i.rest
    } : null;
  }
  validate(t, n, s) {
    return !0;
  }
}
class tu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 140);
    u(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(n, s, a) {
    switch (s) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return a.era(n, { width: "abbreviated" }) || a.era(n, { width: "narrow" });
      // A, B
      case "GGGGG":
        return a.era(n, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return a.era(n, { width: "wide" }) || a.era(n, { width: "abbreviated" }) || a.era(n, { width: "narrow" });
    }
  }
  set(n, s, a) {
    return s.era = a, n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
const Ie = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, wt = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function ke(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function be(e, t) {
  const n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function vt(e, t) {
  const n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const s = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, i = n[3] ? parseInt(n[3], 10) : 0, r = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: s * (a * Xo + i * Ko + r * Qo),
    rest: t.slice(n[0].length)
  };
}
function Rr(e) {
  return be(Ie.anyDigitsSigned, e);
}
function Ce(e, t) {
  switch (e) {
    case 1:
      return be(Ie.singleDigit, t);
    case 2:
      return be(Ie.twoDigits, t);
    case 3:
      return be(Ie.threeDigits, t);
    case 4:
      return be(Ie.fourDigits, t);
    default:
      return be(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function Cs(e, t) {
  switch (e) {
    case 1:
      return be(Ie.singleDigitSigned, t);
    case 2:
      return be(Ie.twoDigitsSigned, t);
    case 3:
      return be(Ie.threeDigitsSigned, t);
    case 4:
      return be(Ie.fourDigitsSigned, t);
    default:
      return be(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Ua(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Vr(e, t) {
  const n = t > 0, s = n ? t : 1 - t;
  let a;
  if (s <= 50)
    a = e || 100;
  else {
    const i = s + 50, r = Math.trunc(i / 100) * 100, o = e >= i % 100;
    a = e + r - (o ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function Fr(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class nu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 130);
    u(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, s, a) {
    const i = (r) => ({
      year: r,
      isTwoDigitYear: s === "yy"
    });
    switch (s) {
      case "y":
        return ke(Ce(4, n), i);
      case "yo":
        return ke(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          i
        );
      default:
        return ke(Ce(s.length, n), i);
    }
  }
  validate(n, s) {
    return s.isTwoDigitYear || s.year > 0;
  }
  set(n, s, a) {
    const i = n.getFullYear();
    if (a.isTwoDigitYear) {
      const o = Vr(
        a.year,
        i
      );
      return n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    const r = !("era" in s) || s.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(r, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class su extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 130);
    u(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(n, s, a) {
    const i = (r) => ({
      year: r,
      isTwoDigitYear: s === "YY"
    });
    switch (s) {
      case "Y":
        return ke(Ce(4, n), i);
      case "Yo":
        return ke(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          i
        );
      default:
        return ke(Ce(s.length, n), i);
    }
  }
  validate(n, s) {
    return s.isTwoDigitYear || s.year > 0;
  }
  set(n, s, a, i) {
    const r = Wa(n, i);
    if (a.isTwoDigitYear) {
      const l = Vr(
        a.year,
        r
      );
      return n.setFullYear(
        l,
        0,
        i.firstWeekContainsDate
      ), n.setHours(0, 0, 0, 0), Dt(n, i);
    }
    const o = !("era" in s) || s.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(o, 0, i.firstWeekContainsDate), n.setHours(0, 0, 0, 0), Dt(n, i);
  }
}
class au extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 130);
    u(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, s) {
    return Cs(s === "R" ? 4 : s.length, n);
  }
  set(n, s, a) {
    const i = Re(n, 0);
    return i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0), bn(i);
  }
}
class iu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 130);
    u(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, s) {
    return Cs(s === "u" ? 4 : s.length, n);
  }
  set(n, s, a) {
    return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class ru extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 120);
    u(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, s, a) {
    switch (s) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return Ce(s.length, n);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return a.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return a.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(n, s) {
    return s >= 1 && s <= 4;
  }
  set(n, s, a) {
    return n.setMonth((a - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class ou extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 120);
    u(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, s, a) {
    switch (s) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return Ce(s.length, n);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return a.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return a.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(n, s) {
    return s >= 1 && s <= 4;
  }
  set(n, s, a) {
    return n.setMonth((a - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class lu extends se {
  constructor() {
    super(...arguments);
    u(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    u(this, "priority", 110);
  }
  parse(n, s, a) {
    const i = (r) => r - 1;
    switch (s) {
      // 1, 2, ..., 12
      case "M":
        return ke(
          be(Ie.month, n),
          i
        );
      // 01, 02, ..., 12
      case "MM":
        return ke(Ce(2, n), i);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return ke(
          a.ordinalNumber(n, {
            unit: "month"
          }),
          i
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return a.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(n, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return a.month(n, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return a.month(n, { width: "wide", context: "formatting" }) || a.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, s) {
    return s >= 0 && s <= 11;
  }
  set(n, s, a) {
    return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class uu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 110);
    u(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, s, a) {
    const i = (r) => r - 1;
    switch (s) {
      // 1, 2, ..., 12
      case "L":
        return ke(
          be(Ie.month, n),
          i
        );
      // 01, 02, ..., 12
      case "LL":
        return ke(Ce(2, n), i);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return ke(
          a.ordinalNumber(n, {
            unit: "month"
          }),
          i
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return a.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(n, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return a.month(n, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return a.month(n, { width: "wide", context: "standalone" }) || a.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, s) {
    return s >= 0 && s <= 11;
  }
  set(n, s, a) {
    return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
  }
}
function cu(e, t, n) {
  const s = Oe(e, n == null ? void 0 : n.in), a = Nr(s, n) - t;
  return s.setDate(s.getDate() - a * 7), Oe(s, n == null ? void 0 : n.in);
}
class du extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 100);
    u(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(n, s, a) {
    switch (s) {
      case "w":
        return be(Ie.week, n);
      case "wo":
        return a.ordinalNumber(n, { unit: "week" });
      default:
        return Ce(s.length, n);
    }
  }
  validate(n, s) {
    return s >= 1 && s <= 53;
  }
  set(n, s, a, i) {
    return Dt(cu(n, a, i), i);
  }
}
function fu(e, t, n) {
  const s = Oe(e, n == null ? void 0 : n.in), a = Ar(s, n) - t;
  return s.setDate(s.getDate() - a * 7), s;
}
class mu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 100);
    u(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, s, a) {
    switch (s) {
      case "I":
        return be(Ie.week, n);
      case "Io":
        return a.ordinalNumber(n, { unit: "week" });
      default:
        return Ce(s.length, n);
    }
  }
  validate(n, s) {
    return s >= 1 && s <= 53;
  }
  set(n, s, a) {
    return bn(fu(n, a));
  }
}
const hu = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], pu = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class gu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 90);
    u(this, "subPriority", 1);
    u(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, s, a) {
    switch (s) {
      case "d":
        return be(Ie.date, n);
      case "do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return Ce(s.length, n);
    }
  }
  validate(n, s) {
    const a = n.getFullYear(), i = Fr(a), r = n.getMonth();
    return i ? s >= 1 && s <= pu[r] : s >= 1 && s <= hu[r];
  }
  set(n, s, a) {
    return n.setDate(a), n.setHours(0, 0, 0, 0), n;
  }
}
class bu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 90);
    u(this, "subpriority", 1);
    u(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, s, a) {
    switch (s) {
      case "D":
      case "DD":
        return be(Ie.dayOfYear, n);
      case "Do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return Ce(s.length, n);
    }
  }
  validate(n, s) {
    const a = n.getFullYear();
    return Fr(a) ? s >= 1 && s <= 366 : s >= 1 && s <= 365;
  }
  set(n, s, a) {
    return n.setMonth(0, a), n.setHours(0, 0, 0, 0), n;
  }
}
function xa(e, t, n) {
  var v, C, w, E;
  const s = vn(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((C = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) == null ? void 0 : C.weekStartsOn) ?? s.weekStartsOn ?? ((E = (w = s.locale) == null ? void 0 : w.options) == null ? void 0 : E.weekStartsOn) ?? 0, i = Oe(e, n == null ? void 0 : n.in), r = i.getDay(), l = (t % 7 + 7) % 7, c = 7 - a, h = t < 0 || t > 6 ? t - (r + c) % 7 : (l + c) % 7 - (r + c) % 7;
  return Sr(i, h, n);
}
class yu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 90);
    u(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(n, s, a) {
    switch (s) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return a.day(n, { width: "wide", context: "formatting" }) || a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, s) {
    return s >= 0 && s <= 6;
  }
  set(n, s, a, i) {
    return n = xa(n, a, i), n.setHours(0, 0, 0, 0), n;
  }
}
class wu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 90);
    u(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, s, a, i) {
    const r = (o) => {
      const l = Math.floor((o - 1) / 7) * 7;
      return (o + i.weekStartsOn + 6) % 7 + l;
    };
    switch (s) {
      // 3
      case "e":
      case "ee":
        return ke(Ce(s.length, n), r);
      // 3rd
      case "eo":
        return ke(
          a.ordinalNumber(n, {
            unit: "day"
          }),
          r
        );
      // Tue
      case "eee":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return a.day(n, { width: "wide", context: "formatting" }) || a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, s) {
    return s >= 0 && s <= 6;
  }
  set(n, s, a, i) {
    return n = xa(n, a, i), n.setHours(0, 0, 0, 0), n;
  }
}
class vu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 90);
    u(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(n, s, a, i) {
    const r = (o) => {
      const l = Math.floor((o - 1) / 7) * 7;
      return (o + i.weekStartsOn + 6) % 7 + l;
    };
    switch (s) {
      // 3
      case "c":
      case "cc":
        return ke(Ce(s.length, n), r);
      // 3rd
      case "co":
        return ke(
          a.ordinalNumber(n, {
            unit: "day"
          }),
          r
        );
      // Tue
      case "ccc":
        return a.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return a.day(n, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return a.day(n, { width: "wide", context: "standalone" }) || a.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, s) {
    return s >= 0 && s <= 6;
  }
  set(n, s, a, i) {
    return n = xa(n, a, i), n.setHours(0, 0, 0, 0), n;
  }
}
function Cu(e, t, n) {
  const s = Oe(e, n == null ? void 0 : n.in), a = Kl(s, n), i = t - a;
  return Sr(s, i, n);
}
class Du extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 90);
    u(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, s, a) {
    const i = (r) => r === 0 ? 7 : r;
    switch (s) {
      // 2
      case "i":
      case "ii":
        return Ce(s.length, n);
      // 2nd
      case "io":
        return a.ordinalNumber(n, { unit: "day" });
      // Tue
      case "iii":
        return ke(
          a.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      // T
      case "iiiii":
        return ke(
          a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      // Tu
      case "iiiiii":
        return ke(
          a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      // Tuesday
      case "iiii":
      default:
        return ke(
          a.day(n, {
            width: "wide",
            context: "formatting"
          }) || a.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
    }
  }
  validate(n, s) {
    return s >= 1 && s <= 7;
  }
  set(n, s, a) {
    return n = Cu(n, a), n.setHours(0, 0, 0, 0), n;
  }
}
class _u extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 80);
    u(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(n, s, a) {
    switch (s) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, s, a) {
    return n.setHours(Ua(a), 0, 0, 0), n;
  }
}
class $u extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 80);
    u(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(n, s, a) {
    switch (s) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, s, a) {
    return n.setHours(Ua(a), 0, 0, 0), n;
  }
}
class Su extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 80);
    u(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(n, s, a) {
    switch (s) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, s, a) {
    return n.setHours(Ua(a), 0, 0, 0), n;
  }
}
class Eu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 70);
    u(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(n, s, a) {
    switch (s) {
      case "h":
        return be(Ie.hour12h, n);
      case "ho":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return Ce(s.length, n);
    }
  }
  validate(n, s) {
    return s >= 1 && s <= 12;
  }
  set(n, s, a) {
    const i = n.getHours() >= 12;
    return i && a < 12 ? n.setHours(a + 12, 0, 0, 0) : !i && a === 12 ? n.setHours(0, 0, 0, 0) : n.setHours(a, 0, 0, 0), n;
  }
}
class Iu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 70);
    u(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(n, s, a) {
    switch (s) {
      case "H":
        return be(Ie.hour23h, n);
      case "Ho":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return Ce(s.length, n);
    }
  }
  validate(n, s) {
    return s >= 0 && s <= 23;
  }
  set(n, s, a) {
    return n.setHours(a, 0, 0, 0), n;
  }
}
class ku extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 70);
    u(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(n, s, a) {
    switch (s) {
      case "K":
        return be(Ie.hour11h, n);
      case "Ko":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return Ce(s.length, n);
    }
  }
  validate(n, s) {
    return s >= 0 && s <= 11;
  }
  set(n, s, a) {
    return n.getHours() >= 12 && a < 12 ? n.setHours(a + 12, 0, 0, 0) : n.setHours(a, 0, 0, 0), n;
  }
}
class Tu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 70);
    u(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(n, s, a) {
    switch (s) {
      case "k":
        return be(Ie.hour24h, n);
      case "ko":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return Ce(s.length, n);
    }
  }
  validate(n, s) {
    return s >= 1 && s <= 24;
  }
  set(n, s, a) {
    const i = a <= 24 ? a % 24 : a;
    return n.setHours(i, 0, 0, 0), n;
  }
}
class Au extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 60);
    u(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, s, a) {
    switch (s) {
      case "m":
        return be(Ie.minute, n);
      case "mo":
        return a.ordinalNumber(n, { unit: "minute" });
      default:
        return Ce(s.length, n);
    }
  }
  validate(n, s) {
    return s >= 0 && s <= 59;
  }
  set(n, s, a) {
    return n.setMinutes(a, 0, 0), n;
  }
}
class Nu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 50);
    u(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, s, a) {
    switch (s) {
      case "s":
        return be(Ie.second, n);
      case "so":
        return a.ordinalNumber(n, { unit: "second" });
      default:
        return Ce(s.length, n);
    }
  }
  validate(n, s) {
    return s >= 0 && s <= 59;
  }
  set(n, s, a) {
    return n.setSeconds(a, 0), n;
  }
}
class Ou extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 30);
    u(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, s) {
    const a = (i) => Math.trunc(i * Math.pow(10, -s.length + 3));
    return ke(Ce(s.length, n), a);
  }
  set(n, s, a) {
    return n.setMilliseconds(a), n;
  }
}
class Pu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 10);
    u(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(n, s) {
    switch (s) {
      case "X":
        return vt(
          wt.basicOptionalMinutes,
          n
        );
      case "XX":
        return vt(wt.basic, n);
      case "XXXX":
        return vt(
          wt.basicOptionalSeconds,
          n
        );
      case "XXXXX":
        return vt(
          wt.extendedOptionalSeconds,
          n
        );
      case "XXX":
      default:
        return vt(wt.extended, n);
    }
  }
  set(n, s, a) {
    return s.timestampIsSet ? n : Re(
      n,
      n.getTime() - vs(n) - a
    );
  }
}
class Mu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 10);
    u(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(n, s) {
    switch (s) {
      case "x":
        return vt(
          wt.basicOptionalMinutes,
          n
        );
      case "xx":
        return vt(wt.basic, n);
      case "xxxx":
        return vt(
          wt.basicOptionalSeconds,
          n
        );
      case "xxxxx":
        return vt(
          wt.extendedOptionalSeconds,
          n
        );
      case "xxx":
      default:
        return vt(wt.extended, n);
    }
  }
  set(n, s, a) {
    return s.timestampIsSet ? n : Re(
      n,
      n.getTime() - vs(n) - a
    );
  }
}
class Bu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 40);
    u(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Rr(n);
  }
  set(n, s, a) {
    return [Re(n, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Lu extends se {
  constructor() {
    super(...arguments);
    u(this, "priority", 20);
    u(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Rr(n);
  }
  set(n, s, a) {
    return [Re(n, a), { timestampIsSet: !0 }];
  }
}
const Ru = {
  G: new tu(),
  y: new nu(),
  Y: new su(),
  R: new au(),
  u: new iu(),
  Q: new ru(),
  q: new ou(),
  M: new lu(),
  L: new uu(),
  w: new du(),
  I: new mu(),
  d: new gu(),
  D: new bu(),
  E: new yu(),
  e: new wu(),
  c: new vu(),
  i: new Du(),
  a: new _u(),
  b: new $u(),
  B: new Su(),
  h: new Eu(),
  H: new Iu(),
  K: new ku(),
  k: new Tu(),
  m: new Au(),
  s: new Nu(),
  S: new Ou(),
  X: new Pu(),
  x: new Mu(),
  t: new Bu(),
  T: new Lu()
}, Vu = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Fu = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Wu = /^'([^]*?)'?$/, Uu = /''/g, xu = /\S/, Hu = /[a-zA-Z]/;
function Yu(e, t, n, s) {
  var k, y, g, b;
  const a = () => Re(n, NaN), i = Gl(), r = i.locale ?? Tr, o = i.firstWeekContainsDate ?? ((y = (k = i.locale) == null ? void 0 : k.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, l = i.weekStartsOn ?? ((b = (g = i.locale) == null ? void 0 : g.options) == null ? void 0 : b.weekStartsOn) ?? 0;
  if (!t)
    return e ? a() : Oe(n, s == null ? void 0 : s.in);
  const c = {
    firstWeekContainsDate: o,
    weekStartsOn: l,
    locale: r
  }, h = [new eu(s == null ? void 0 : s.in, n)], v = t.match(Fu).map((d) => {
    const _ = d[0];
    if (_ in va) {
      const D = va[_];
      return D(d, r.formatLong);
    }
    return d;
  }).join("").match(Vu), C = [];
  for (let d of v) {
    Mr(d) && Ca(d, t, e), Pr(d) && Ca(d, t, e);
    const _ = d[0], D = Ru[_];
    if (D) {
      const { incompatibleTokens: S } = D;
      if (Array.isArray(S)) {
        const Q = C.find(
          (fe) => S.includes(fe.token) || fe.token === _
        );
        if (Q)
          throw new RangeError(
            `The format string mustn't contain \`${Q.fullToken}\` and \`${d}\` at the same time`
          );
      } else if (D.incompatibleTokens === "*" && C.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${d}\` and any other token at the same time`
        );
      C.push({ token: _, fullToken: d });
      const Y = D.run(
        e,
        d,
        r.match,
        c
      );
      if (!Y)
        return a();
      h.push(Y.setter), e = Y.rest;
    } else {
      if (_.match(Hu))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + _ + "`"
        );
      if (d === "''" ? d = "'" : _ === "'" && (d = zu(d)), e.indexOf(d) === 0)
        e = e.slice(d.length);
      else
        return a();
    }
  }
  if (e.length > 0 && xu.test(e))
    return a();
  const w = h.map((d) => d.priority).sort((d, _) => _ - d).filter((d, _, D) => D.indexOf(d) === _).map(
    (d) => h.filter((_) => _.priority === d).sort((_, D) => D.subPriority - _.subPriority)
  ).map((d) => d[0]);
  let E = Oe(n, s == null ? void 0 : s.in);
  if (isNaN(+E)) return a();
  const B = {};
  for (const d of w) {
    if (!d.validate(E, c))
      return a();
    const _ = d.set(E, B, c);
    Array.isArray(_) ? (E = _[0], Object.assign(B, _[1])) : E = _;
  }
  return E;
}
function zu(e) {
  return e.match(Wu)[1].replace(Uu, "'");
}
function Di(e, t, n) {
  const [s, a] = Ir(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Dt(s, n) == +Dt(a, n);
}
const hv = {
  theme: {
    extend: {
      colors: {
        primary: {
          basic: "#0f172a",
          background: "#f9f9f9",
          border: "#e0e0e0",
          accent: "#ff9211"
        },
        red: {
          50: "#fdf4f3",
          100: "#fce7e4",
          200: "#fad4ce",
          300: "#f5b7ac",
          400: "#ed8c7c",
          500: "#e16752",
          600: "#d15b47",
          700: "#ac3c29",
          800: "#8e3526",
          900: "#773125",
          950: "#40160f"
        },
        sky: {
          50: "#f3f7fc",
          100: "#e5eef9",
          200: "#c6dbf1",
          300: "#94bfe5",
          400: "#5b9cd5",
          500: "#428bca",
          600: "#2665a3",
          700: "#205284",
          800: "#1e466e",
          900: "#1e3c5c",
          950: "#14273d"
        },
        green: {
          50: "#f2f8f1",
          100: "#e2eedd",
          200: "#c4dcbe",
          300: "#87b87f",
          400: "#6ba364",
          500: "#488643",
          600: "#336b30",
          700: "#285527",
          800: "#224421",
          900: "#1c381c",
          950: "#0f1f0f"
        },
        amber: {
          50: "#fff9ed",
          100: "#fff3d4",
          200: "#ffe3a8",
          300: "#ffcd71",
          400: "#ffb752",
          500: "#fe9211",
          600: "#ef7607",
          700: "#c65808",
          800: "#9d460f",
          900: "#7e3b10",
          950: "#441b06"
        }
      },
      borderRadius: {
        "md-4": "4px"
      },
      fontSize: {
        exs: "0.6875rem",
        //11px
        xssm: "0.8125rem",
        // 13px
        md: "0.9375rem"
        // 15px
      },
      screens: {
        mobile: { max: "480px" },
        tablet: { min: "481px", max: "1024px" },
        laptop: { min: "1025px", max: "1440px" },
        desktop: { min: "1441px" }
      }
    }
  }
};
var Ha = /* @__PURE__ */ ((e) => (e.Rect = "rect", e.Circle = "circle", e))(Ha || {}), Jn = /* @__PURE__ */ ((e) => (e.Wave = "wave", e.Pulse = "pulse", e))(Jn || {});
function Es(e, t = {}) {
  return { ...e, ...t };
}
const Ds = {
  id: void 0,
  component: null,
  visible: !0,
  hidden: !0
};
function we(e = {}) {
  return Es(Ds, e);
}
const ju = R({
  name: "BComponent",
  emits: ["update:visible", "hide", "show", "mounted", "toggleVisible", "created"],
  props: {
    id: {
      type: String,
      default: void 0
    },
    component: {
      type: null
    },
    visible: {
      type: [Boolean, Object],
      default: Ds.visible
    },
    hidden: {
      type: Boolean,
      default: Ds.hidden
    }
  },
  data() {
    return {
      stateVisible: this.visible
    };
  },
  watch: {
    visible: {
      immediate: !0,
      deep: !0,
      handler(e) {
        e = typeof e == "object" ? e.value : e, e !== this.stateVisible && (e ? this.show() : this.hide(!0));
      }
    }
  },
  computed: {
    getId() {
      return this.id || String(this.$.uid);
    },
    classes() {
      return [this.visible ? "b-component" : "b-component b-component--hidden"];
    },
    /**
     * @description The component will be removed from Dom
     */
    isHidden() {
      return this.hidden ? !!this.stateVisible : !0;
    },
    /**
     * @description The component is hidden and not removed from Dom
     */
    isVisibility() {
      return this.hidden ? !0 : !!this.stateVisible;
    }
  },
  methods: {
    beforeShow() {
      return !0;
    },
    show() {
      return this.beforeShow() ? (this.stateVisible = !0, this.$emit("update:visible", !0), this.$emit("show"), this.$emit("toggleVisible", !0), this.afterShow(), !0) : !1;
    },
    beforeHide() {
      return !0;
    },
    /**
     * Hides the component
     * @param {boolean} forward - If true, the component will be hidden.
     */
    hide(e = !1) {
      return !this.beforeHide() && !e ? !1 : (this.stateVisible = !1, this.$emit("update:visible", !1), this.$emit("hide"), this.$emit("toggleVisible", !1), this.afterHide(), !0);
    },
    afterShow() {
    },
    afterHide() {
    }
  },
  mounted() {
    this.$emit("mounted", this);
  },
  created() {
    this.$emit("created", this);
  }
}), F = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
};
function qu(e, t, n, s, a, i) {
  return e.isHidden ? Ke((m(), N(it(e.component), {
    key: 0,
    "data-id": e.getId
  }, {
    default: P(() => [
      L(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["data-id"])), [
    [nt, e.isVisibility]
  ]) : M("", !0);
}
const de = /* @__PURE__ */ F(ju, [["render", qu]]);
function Gu(e = {}) {
  return { ...{
    ...we(),
    width: "100%",
    height: "50px",
    type: Ha.Rect,
    animation: Jn.Wave
  }, ...e };
}
const Ln = Gu();
class pv {
  constructor(t = {}) {
    u(this, "width");
    u(this, "height");
    u(this, "type");
    u(this, "animation");
    u(this, "visible");
    Object.assign(this, Ln, t);
  }
}
const Ku = R({
  name: "BSkeleton",
  extends: de,
  props: {
    width: {
      type: String,
      default: Ln.width
    },
    height: {
      type: String,
      default: Ln.height
    },
    type: {
      type: String,
      default: Ln.type
    },
    animation: {
      type: String,
      default: Ln.animation
    }
  },
  data() {
    return {
      cssClass: "b-skeleton"
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        `${this.cssClass}--${this.animation}`,
        `${this.cssClass}--${this.type}`
      ];
    },
    styles() {
      return {
        width: this.type === Ha.Circle ? this.height : this.width,
        height: this.height
      };
    }
  }
});
function Xu(e, t, n, s, a, i) {
  return e.visible ? (m(), I("span", {
    key: 0,
    class: H(e.classes),
    style: Ye(e.styles)
  }, null, 6)) : M("", !0);
}
const Ya = /* @__PURE__ */ F(Ku, [["render", Xu]]);
var ge = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Success = "success", e.Danger = "danger", e.Warning = "warning", e))(ge || {}), ie = /* @__PURE__ */ ((e) => (e.ExtraSmall = "xs", e.Small = "sm", e.Medium = "md", e.Large = "lg", e.ExtraLarge = "xl", e.TwoXL = "2xl", e))(ie || {}), Wr = /* @__PURE__ */ ((e) => (e.String = "string", e.Number = "number", e.Boolean = "boolean", e.Date = "date", e.DateTime = "datetime", e))(Wr || {}), gs = /* @__PURE__ */ ((e) => (e.Horizontal = "horizontal", e.Vertical = "vertical", e))(gs || {}), te = /* @__PURE__ */ ((e) => (e.Equal = "eq", e.NotEqual = "ne", e.Less = "lt", e.LessOrEqual = "le", e.Greater = "gt", e.GreaterOrEqual = "ge", e.Contains = "cn", e.NotContains = "nc", e.StartsWith = "bw", e.NotStartsWith = "bn", e.EndsWith = "ew", e.NotEndsWith = "en", e.In = "in", e.NotIn = "ni", e.Between = "between", e.NotBetween = "notBetween", e.IsNull = "nu", e.IsNotNull = "nn", e))(te || {}), Zt = /* @__PURE__ */ ((e) => (e.Skeleton = "skeleton", e.Spinner = "spinner", e))(Zt || {});
function Qu(e) {
  return typeof e == "object" && e.name === "AsyncComponentWrapper";
}
function ft(e) {
  const t = Qt(e);
  return typeof t == "boolean" || !t ? {
    visible: !!t,
    type: Zt.Spinner
  } : {
    visible: t.visible,
    type: t.type || Zt.Spinner,
    animation: t.animation || Jn.Wave
  };
}
function Ur(e) {
  const t = Qt(e);
  return t ? typeof t == "boolean" ? t : t.visible : !1;
}
function Un(e) {
  return ft(e).type === Zt.Spinner;
}
function Ju(e) {
  return ft(e).type === Zt.Skeleton;
}
const Wn = {
  ...Ds,
  text: "",
  disabled: !1,
  focused: !1
};
function Cn(e = {}) {
  return Es(Wn, e);
}
const _t = R({
  name: "BControl",
  extends: de,
  emits: ["update:text", "update:focused"],
  props: {
    text: {
      type: [String, Number],
      default: Wn.text
    },
    disabled: {
      type: Boolean,
      default: Wn.disabled
    },
    focused: {
      type: Boolean,
      default: Wn.focused
    }
  },
  data() {
    return {
      stateDisabled: this.disabled
    };
  },
  computed: {
    rootClasses() {
      var e;
      return ((e = this.$attrs) == null ? void 0 : e.class) || "";
    },
    attributes() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  methods: {
    focus() {
      const e = this.$refs.refControl;
      e && e.focus();
    }
  },
  watch: {
    focused: {
      immediate: !0,
      handler(e) {
        e && this.$nextTick(() => {
          this.focus();
        }), this.$emit("update:focused", e);
      }
    },
    stateVisible(e) {
      e || this.$emit("update:focused", !1);
    },
    disabled(e) {
      this.stateDisabled = e;
    }
  }
});
function xr(e = {}) {
  return { ...{
    ...we()
  }, ...e };
}
const An = xr();
function $t(e) {
  if (e)
    return typeof e == "object" || Qu(e) ? xr({ icon: e }) : e;
}
const Zu = R({
  name: "BIcon",
  extends: de,
  props: {
    alt: {
      type: String,
      default: An.alt
    },
    icon: {
      type: Object,
      default: An.icon
    },
    size: {
      type: [String, Number],
      default: An.size
    },
    width: {
      type: [String, Number],
      default: An.width
    },
    height: {
      type: [String, Number],
      default: An.height
    }
  },
  computed: {
    sizeStyle() {
      const e = this.width || (typeof this.size == "object" ? this.size.width : this.size), t = this.height || (typeof this.size == "object" ? this.size.height : this.size);
      if (e === "auto" || t === "auto")
        return {};
      const n = {};
      return e && (n.width = isNaN(Number(e)) ? `${e}` : `${e}px`), t && (n.height = isNaN(Number(t)) ? `${t}` : `${t}px`), n;
    }
  }
});
function ec(e, t, n, s, a, i) {
  return e.visible ? (m(), N(it(e.icon), {
    key: 0,
    alt: e.alt,
    style: Ye(e.sizeStyle),
    class: "b-icon"
  }, null, 8, ["alt", "style"])) : M("", !0);
}
const Ae = /* @__PURE__ */ F(Zu, [["render", ec]]);
function Dn(e = {}) {
  return { ...{
    ...Cn(),
    plain: !1,
    outlined: !1,
    simple: !1,
    loading: ft(!1),
    form: "button",
    sizeControl: ie.Medium
  }, ...e };
}
const Ze = Dn(), tc = ["id", "style", "disabled", "target"], _i = {
  disabled: !1
};
function nc(e, t) {
  return Object.prototype.hasOwnProperty.call(_i, e) && _i[e] === t;
}
function sc(e) {
  const t = {};
  return tc.forEach((n) => {
    Object.prototype.hasOwnProperty.call(e, n) && !nc(n, e[n]) && (t[n] = e[n]);
  }), t;
}
function ac(e = {}) {
  return { ...{
    ...we(),
    size: ie.Medium,
    borderSize: 1,
    visible: !1
  }, ...e };
}
const $i = ac(), ic = R({
  name: "BSpinner",
  extends: de,
  props: {
    borderSize: {
      type: Number,
      default: $i.borderSize
    },
    size: {
      type: String,
      default: $i.size
    }
  },
  data() {
    return {
      cssClass: "b-spinner"
    };
  },
  computed: {
    classes() {
      return [this.cssClass, `${this.cssClass}--${this.size}`];
    },
    styles() {
      return {
        borderWidth: `${this.borderSize}px`
      };
    }
  }
});
function rc(e, t, n, s, a, i) {
  return e.visible ? (m(), I("span", {
    key: 0,
    class: H(e.classes),
    style: Ye(e.styles)
  }, null, 6)) : M("", !0);
}
const Is = /* @__PURE__ */ F(ic, [["render", rc]]), oc = R({
  name: "BButton",
  extends: _t,
  components: { BIcon: Ae, BSpinner: Is, BSkeleton: Ya },
  ELoadingType: Zt,
  ESkeletonAnimation: Jn,
  isSpinner: Un,
  emits: ["click"],
  props: {
    href: {
      type: String,
      default: Ze.href
    },
    icon: {
      type: [String, Object],
      default: Ze.icon
    },
    outlined: {
      type: Boolean,
      default: Ze.outlined
    },
    plain: {
      type: Boolean,
      default: Ze.plain
    },
    simple: {
      type: Boolean,
      default: Ze.simple
    },
    target: {
      type: String,
      default: Ze.target
    },
    to: {
      type: [String, Object],
      default: Ze.to
    },
    type: {
      type: String,
      default: Ze.type
    },
    form: {
      type: String,
      default: Ze.form
    },
    loading: {
      type: [Boolean, Object],
      default: Ze.loading
    },
    sizeControl: {
      type: String,
      default: Ze.sizeControl
    },
    asLabel: {
      type: Boolean,
      default: Ze.asLabel
    },
    onPropClick: {
      type: Function,
      default: Ze.onPropClick
    }
  },
  data() {
    return {
      cssClass: "b-button",
      iconProps: null,
      stateDisabled: !1,
      stateLoading: { visible: !1 }
    };
  },
  computed: {
    getComponentParams() {
      return this.to ? { tag: "router-link", attrs: { to: this.to } } : this.href ? { tag: "a", attrs: { href: this.href } } : this.asLabel ? { tag: "label", attrs: {} } : { tag: "button", attrs: {} };
    },
    attrs() {
      const e = { ...this.$props, disabled: this.stateDisabled };
      return Object.assign({}, this.getComponentParams.attrs, sc(e));
    },
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--disabled`]: !!this.stateDisabled,
          [`${this.cssClass}--plain`]: !!this.plain,
          [`${this.cssClass}--outlined`]: !!this.outlined,
          [`${this.cssClass}--simple`]: !!this.simple,
          [`${this.cssClass}--${this.type}`]: !!this.type,
          [`${this.cssClass}--default`]: !this.plain && !this.outlined && !this.simple,
          [`${this.cssClass}--${this.sizeControl}`]: this.sizeControl !== ie.Medium,
          [`${this.cssClass}--as-label`]: !!this.asLabel
        }
      ];
    },
    getComponent() {
      return this.getComponentParams.tag;
    },
    listeners() {
      return this.form === "submit" ? {} : {
        click: this.onClick
      };
    }
  },
  watch: {
    icon: {
      immediate: !0,
      handler(e) {
        this.iconProps = $t(e) || null;
      }
    },
    loading: {
      immediate: !0,
      deep: !0,
      handler(e) {
        this.setLoading(e);
      }
    },
    disabled: {
      immediate: !0,
      handler(e) {
        this.stateDisabled = e;
      }
    }
  },
  methods: {
    onClick(e) {
      this.onPropClick && this.onPropClick(e), this.$emit("click", e);
    },
    setLoading(e) {
      this.stateLoading = ft(e);
    }
  }
}), lc = {
  key: 0,
  class: "b-button__text"
};
function uc(e, t, n, s, a, i) {
  const r = T("BIcon"), o = T("BSpinner"), l = T("BSkeleton");
  return e.isHidden ? Ke((m(), N(it(e.getComponent), G({ key: 0 }, e.attrs, Wo(e.listeners), {
    class: e.classes,
    type: e.form,
    "aria-disabled": e.stateDisabled,
    ref: "refControl"
  }), {
    default: P(() => [
      L(e.$slots, "before", {}, () => [
        W(r, rt(Mt(e.iconProps)), null, 16)
      ]),
      L(e.$slots, "default", {}, () => [
        e.text ? (m(), I("span", lc, X(e.text), 1)) : M("", !0)
      ]),
      L(e.$slots, "after"),
      e.stateLoading.visible && e.$options.isSpinner(e.stateLoading) ? (m(), N(o, {
        key: 0,
        class: "b-button__spinner",
        size: "md"
      })) : e.stateLoading.visible ? (m(), N(l, {
        key: 1,
        animation: e.stateLoading.animation,
        class: "b-button__skeleton",
        width: "100%",
        height: "100%"
      }, null, 8, ["animation"])) : M("", !0)
    ]),
    _: 3
  }, 16, ["class", "type", "aria-disabled"])), [
    [nt, e.isVisibility]
  ]) : M("", !0);
}
const ze = /* @__PURE__ */ F(oc, [["render", uc]]), ks = {
  ...Wn,
  value: null
};
function lt(e = {}) {
  return Es(ks, e);
}
const We = R({
  name: "BControlValue",
  extends: _t,
  emits: ["update:value"],
  props: {
    value: {
      type: [String, Number, Boolean, Array, Object],
      default: ks.value
    }
  }
});
function Ts(e = {}) {
  return { ...{
    ...Dn(),
    sizeControl: ie.Medium
  }, ...e };
}
const Si = Ts(), Hr = {
  computed: {
    classes() {
      return [
        "b-button__collection",
        {
          [`b-button__collection--${this.effectiveSizeControl}`]: this.effectiveSizeControl != ie.Medium
        }
      ];
    }
  }
}, cc = {
  name: "BButtonCollection",
  extends: We,
  components: {
    BButton: ze
  },
  props: {
    sizeControl: {
      type: String,
      default: Si.sizeControl
    }
  },
  emits: ["click"],
  inject: {
    injectedSizeControl: {
      from: "sizeControl",
      default: Si.sizeControl
    },
    injectedDisabled: {
      from: "disabled",
      default: !1
    }
  },
  data() {
    return {
      cssClass: "b-button__collection"
    };
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  },
  computed: {
    effectiveSizeControl() {
      return this.injectedSizeControl !== void 0 ? this.injectedSizeControl : this.sizeControl;
    },
    effectiveDisabled() {
      return this.disabled !== void 0 ? !!this.disabled : !!this.injectedDisabled;
    }
  },
  mixins: [Hr]
};
function dc(e, t, n, s, a, i) {
  const r = T("BButton");
  return m(), N(r, {
    class: H(e.classes),
    disabled: i.effectiveDisabled,
    onClick: i.onClick,
    plain: "",
    icon: e.$options.Icon
  }, null, 8, ["class", "disabled", "onClick", "icon"]);
}
const As = /* @__PURE__ */ F(cc, [["render", dc]]);
function fc(e = {}) {
  const t = Dn(), n = Ts();
  return { ...{
    ...t,
    ...n,
    invisible: !0
  }, ...e };
}
const Yr = fc();
class gv {
  constructor(t = {}) {
    u(this, "invisible");
    Object.assign(this, Yr, t);
  }
}
const mc = j(q(() => import("./clear-D7CnYKqA.js"))), zr = {
  name: "BButtonClear",
  extends: As,
  components: {
    BButton: ze
  },
  props: {
    invisible: {
      type: Boolean,
      default: Yr.invisible
    }
  },
  emits: ["clear", "update:value", "update:text"],
  methods: {
    onClick(e) {
      this.$emit("update:text", ""), this.$emit("update:value", null), this.$emit("clear", e);
    }
  },
  computed: {
    classes() {
      return [
        ...Hr.computed.classes.call(this),
        { "b-button__collection--invisible": !!this.invisible }
      ];
    }
  },
  Icon: mc
};
function hc(e = {}) {
  const t = Dn(), n = Ts();
  return { ...{
    ...t,
    ...n,
    visibility: !0
  }, ...e };
}
const pc = hc(), gc = j(
  q(() => import("./visibility-B0W2HKWg.js"))
), bc = j(
  q(() => import("./visibility_off-3I-hyIrZ.js"))
), yc = {
  name: "BButtonVisibility",
  extends: As,
  components: {
    BButton: ze,
    BIcon: Ae
  },
  emits: ["update:visibility", "visibility"],
  props: {
    visibility: {
      type: Boolean,
      default: pc.visibility
    }
  },
  data() {
    return {
      stateVisibility: this.visibility
    };
  },
  inject: {
    injectOnVisibility: {
      from: "onVisibility",
      default: () => {
      }
    },
    injectVisibility: {
      from: "visibility",
      default: !0
    }
  },
  watch: {
    visibility(e) {
      this.stateVisibility = e;
    },
    injectVisibility: {
      handler(e) {
        this.stateVisibility = e;
      },
      immediate: !0
    }
  },
  methods: {
    onToggle() {
      this.stateVisibility = !this.stateVisibility, this.injectOnVisibility(), this.$emit("update:visibility", this.stateVisibility), this.$emit("visibility", this.stateVisibility);
    }
  },
  VisibilityIcon: gc,
  VisibilityOffIcon: bc
}, wc = { class: "b-button__collection--icon-wrapper" };
function vc(e, t, n, s, a, i) {
  const r = T("BIcon"), o = T("b-button");
  return m(), N(o, {
    class: H(e.classes),
    disabled: e.disabled,
    onClick: i.onToggle,
    plain: ""
  }, {
    default: P(() => [
      U("div", wc, [
        a.stateVisibility ? (m(), N(r, {
          key: 0,
          icon: e.$options.VisibilityIcon
        }, null, 8, ["icon"])) : (m(), N(r, {
          key: 1,
          icon: e.$options.VisibilityOffIcon
        }, null, 8, ["icon"]))
      ])
    ]),
    _: 1
  }, 8, ["class", "disabled", "onClick"]);
}
const bv = /* @__PURE__ */ F(yc, [["render", vc]]), Cc = j(q(() => import("./more-DCauS87b.js"))), yv = {
  name: "BButtonMore",
  extends: As,
  components: {
    BButton: ze
  },
  emits: ["click"],
  methods: {
    onClick() {
      this.$emit("click");
    }
  },
  Icon: Cc
}, Dc = j(q(() => import("./search-Ci13YHat.js"))), wv = {
  name: "BButtonElement",
  extends: As,
  components: {
    BButton: ze
  },
  emits: ["click"],
  methods: {
    onClick() {
      this.$emit("click");
    }
  },
  Icon: Dc
};
function _c(e = {}) {
  const t = Dn(), n = Ts();
  return { ...{
    ...t,
    ...n,
    controlForm: !1
  }, ...e };
}
const $c = _c(), vv = R({
  name: "BButtonSubmit",
  extends: ze,
  emits: ["clear", "update:value", "update:text"],
  props: {
    form: {
      default: "submit"
    },
    controlForm: {
      type: Boolean,
      default: $c.controlForm
    }
  },
  inject: {
    injectedModified: {
      from: "modified",
      default: !1
    },
    injectedSubmit: {
      from: "submit",
      default: !1
    }
  },
  watch: {
    injectedModified(e) {
      this.controlForm && (this.stateDisabled = !e);
    },
    injectedSubmit(e) {
      const t = ft({
        visible: e,
        type: Zt.Skeleton
      });
      this.setLoading(t), this.stateDisabled = e;
    }
  },
  mounted() {
    this.controlForm && (this.stateDisabled = !0);
  }
});
function Zn(e = {}) {
  return { ...{
    ...lt(),
    items: [],
    selected: void 0
    // Added property of Selected
  }, ...e };
}
const Ei = Zn(), za = {
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--disabled`]: this.disabled
        }
      ];
    }
  }
}, _n = R({
  name: "BCollection",
  extends: We,
  components: { BComponent: de },
  props: {
    items: {
      type: Array,
      default: Ei.items
    },
    selected: {
      type: [Array, Object, Boolean],
      default: Ei.selected
    }
  },
  data() {
    return {
      cssClass: "b-collection"
    };
  },
  mixins: [za]
});
function Sc(e = {}) {
  return { ...{
    ...Zn(),
    items: [],
    selected: void 0,
    maxItems: 5,
    showCurrentPage: !0,
    lastItemInactive: !0
  }, ...e };
}
const on = Sc(), ln = at([]);
let is = null;
function Ec() {
  return is || (is = {
    items: ln,
    push: (i) => {
      ln.value.push(i);
    },
    pop: () => {
      ln.value.pop();
    },
    unshift: (i) => {
      ln.value.unshift(i);
    },
    clear: () => {
      ln.value = [];
    },
    path: (i) => {
      ln.value = [...i];
    }
  }, is);
}
function Ic(e = {}) {
  return { ...{
    ...Cn(),
    text: ""
  }, ...e };
}
const Nn = Ic(), kc = R({
  name: "BBreadCrumbsItem",
  extends: _t,
  components: {
    BIcon: Ae
  },
  props: {
    text: {
      type: [String, Object, Function],
      default: Nn.text
    },
    href: {
      type: String,
      default: Nn.href
    },
    active: {
      type: Boolean,
      default: Nn.active
    },
    icon: {
      type: [String, Object],
      default: Nn.icon
    },
    meta: {
      type: Object,
      default: Nn.meta
    }
  },
  data() {
    return {
      cssClass: "b-bread-crumbs-item",
      iconProps: null
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--inactive`]: !this.active
        }
      ];
    },
    itemComponent() {
      const e = typeof this.text;
      return e === "object" || e === "function" ? this.text : "li";
    }
  },
  watch: {
    icon: {
      immediate: !0,
      handler(e) {
        this.iconProps = $t(e) || null;
      }
    }
  }
}), Tc = { class: "b-bread-crumbs-item__title" };
function Ac(e, t, n, s, a, i) {
  const r = T("BIcon");
  return e.isHidden ? Ke((m(), N(it(e.itemComponent), G({ key: 0 }, e.$attrs, { class: e.classes }), {
    default: P(() => [
      L(e.$slots, "item-icon", {
        item: { text: e.text, icon: e.iconProps }
      }, () => [
        e.icon ? (m(), N(r, rt(G({ key: 0 }, e.iconProps)), null, 16)) : M("", !0)
      ]),
      U("span", Tc, [
        L(e.$slots, "item", {
          item: { text: e.text, active: e.active, icon: e.iconProps, meta: e.meta }
        }, () => [
          Be(X(e.text), 1)
        ])
      ])
    ]),
    _: 3
  }, 16, ["class"])), [
    [nt, e.isVisibility]
  ]) : M("", !0);
}
const Nc = /* @__PURE__ */ F(kc, [["render", Ac]]), Oc = j(
  q(() => import("./arrow_right-COASAA_Q.js"))
), Pc = R({
  name: "BBreadCrumbs",
  extends: de,
  components: {
    BBreadCrumbsItem: Nc,
    BIcon: Ae
  },
  props: {
    items: {
      type: Array,
      default: on.items
    },
    selected: {
      type: Array,
      default: on.selected
    },
    separator: {
      type: String,
      default: on.separator
    },
    maxItems: {
      type: Number,
      default: on.maxItems
    },
    showCurrentPage: {
      type: Boolean,
      default: on.showCurrentPage
    },
    lastItemInactive: {
      type: Boolean,
      default: on.lastItemInactive
    }
  },
  data() {
    return {
      cssClass: "b-bread-crumbs"
    };
  },
  computed: {
    classes() {
      return [this.cssClass];
    }
  },
  setup(e) {
    const { items: t } = Ec();
    return {
      actualItems: e.items.length > 0 ? e.items : t
    };
  },
  ArrowRight: Oc
}), Mc = {
  key: 1,
  class: "b-bread-crumbs__separator--text"
};
function Bc(e, t, n, s, a, i) {
  const r = T("BBreadCrumbsItem"), o = T("BIcon");
  return m(), I("ul", {
    class: H(e.classes)
  }, [
    (m(!0), I(ce, null, ye(e.actualItems, (l, c) => (m(), I(ce, { key: c }, [
      !e.showCurrentPage || e.showCurrentPage && c < e.maxItems - 1 ? (m(), N(r, {
        key: 0,
        text: l.text,
        href: l.href,
        icon: l.icon,
        meta: l.meta,
        active: !e.lastItemInactive || c < e.actualItems.length - 1
      }, {
        "item-icon": P((h) => [
          L(e.$slots, "item-icon", G({ ref_for: !0 }, h, { index: c }))
        ]),
        item: P((h) => [
          L(e.$slots, "item", G({ ref_for: !0 }, h, { index: c }))
        ]),
        _: 2
      }, 1032, ["text", "href", "icon", "meta", "active"])) : M("", !0),
      e.actualItems.length > 0 && c < e.actualItems.length - 1 ? (m(), I(ce, { key: 1 }, [
        e.separator ? (m(), I("span", Mc, X(e.separator), 1)) : (m(), N(o, {
          key: 0,
          icon: e.$options.ArrowRight,
          class: "b-bread-crumbs__separator--icon"
        }, null, 8, ["icon"]))
      ], 64)) : M("", !0)
    ], 64))), 128))
  ], 2);
}
const Cv = /* @__PURE__ */ F(Pc, [["render", Bc]]), rs = {
  ...ks,
  readonly: !1,
  required: !1,
  invalid: !1,
  state: "normal"
};
function ja(e = {}) {
  return Es(ks, e);
}
const Ns = R({
  name: "BControlInput",
  extends: We,
  props: {
    readonly: {
      type: Boolean,
      default: rs.readonly
    },
    required: {
      type: Boolean,
      default: rs.required
    },
    invalid: {
      type: Boolean,
      default: rs.invalid
    },
    state: {
      type: String,
      default: rs.state
    }
  },
  form: {},
  data() {
    return {
      stateText: this.text,
      stateState: this.state,
      stateInvalid: this.invalid,
      stateValue: this.value,
      stateDisabled: !1,
      stateName: this.$attrs.name
    };
  },
  inject: {
    // We accept the value from Form and transmit to Disabled
    injectedDisabled: {
      from: "disabled",
      default: !1
    },
    // We accept the value from Form and transmit to Name
    injectName: {
      from: "name",
      default: void 0
    }
  },
  watch: {
    text(e) {
      this.stateText = e;
    },
    state: {
      immediate: !0,
      handler(e) {
        this.stateState = e;
      }
    },
    invalid(e) {
      this.stateInvalid = e;
    },
    stateInvalid(e) {
      this.stateState = e ? "error" : "normal";
    },
    // If Disabled came from Form> Injectdisabled, we update Statededisabled
    injectedDisabled(e) {
      this.stateDisabled = e;
    },
    // The name from Formitem is transmitted
    injectName: {
      immediate: !0,
      handler(e) {
        this.stateName = e;
      }
    }
  }
});
function Lc(e = {}) {
  return { ...{
    ...ja(),
    indeterminate: !1,
    sizeControl: ie.Medium
  }, ...e };
}
const ia = Lc(), Rc = j(q(() => import("./check-9eem0v_3.js"))), Vc = j(
  q(() => import("./indeterminate-CntlJyyN.js"))
), Fc = R({
  name: "BCheckBox",
  extends: Ns,
  components: { BIcon: Ae },
  emits: ["change", "focus", "blur", "update:indeterminate", "update:value"],
  props: {
    indeterminate: {
      type: Boolean,
      default: ia.indeterminate
    },
    sizeControl: {
      type: String,
      default: ia.sizeControl
    },
    marked: {
      type: Boolean,
      default: ia.marked
    }
  },
  data() {
    return {
      cssClass: "b-checkbox",
      stateValue: !!this.value,
      stateType: typeof this.value,
      stateIndeterminate: this.indeterminate,
      refInput: null
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--marked`]: !!this.marked,
          "b-checkbox--indeterminate": !!this.stateIndeterminate,
          [`${this.cssClass}--${this.sizeControl}`]: this.sizeControl !== ie.Medium
        }
      ];
    },
    checked() {
      return this.stateIndeterminate ? -1 : this.stateValue ? 1 : 0;
    },
    getName() {
      return this.$attrs.name || this.getId;
    }
  },
  methods: {
    onChange(e) {
      if (!this.disabled && !this.readonly) {
        this.stateIndeterminate && (this.stateIndeterminate = !1, this.$emit("update:indeterminate", this.stateIndeterminate));
        const t = this.stateType === "boolean" ? !!this.checked : this.checked;
        this.$emit("change", { event: e, value: t }), this.$emit("update:value", t);
      }
    },
    onFocus(e) {
      this.$emit("focus", e);
    },
    onBlur(e) {
      this.$emit("blur", e);
    },
    onClick(e) {
      (this.readonly || this.disabled) && e.preventDefault();
    }
  },
  watch: {
    indeterminate(e) {
      this.stateIndeterminate = e;
    },
    value(e) {
      this.stateValue = !!e;
    },
    disabled: {
      immediate: !0,
      handler(e) {
        this.stateDisabled = e;
      }
    }
  },
  CheckIcon: Rc,
  IndeterminateIcon: Vc
}), Wc = ["id", "name", "disabled", "readonly", "required", "aria-checked"], Uc = { class: "b-checkbox__container" };
function xc(e, t, n, s, a, i) {
  const r = T("BIcon");
  return m(), I("div", {
    class: H(e.classes)
  }, [
    Ke(U("input", G({
      ref: "inputRef",
      type: "checkbox",
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.stateValue = o)
    }, e.$attrs, {
      id: e.getId,
      name: e.getName,
      disabled: e.stateDisabled,
      readonly: e.readonly,
      required: e.required,
      "aria-checked": e.stateIndeterminate ? "mixed" : void 0,
      onFocus: t[1] || (t[1] = (...o) => e.onFocus && e.onFocus(...o)),
      onBlur: t[2] || (t[2] = (...o) => e.onBlur && e.onBlur(...o)),
      onChange: t[3] || (t[3] = (...o) => e.onChange && e.onChange(...o)),
      onClick: t[4] || (t[4] = (...o) => e.onClick && e.onClick(...o))
    }), null, 16, Wc), [
      [vr, e.stateValue]
    ]),
    U("div", Uc, [
      L(e.$slots, "icon", {
        value: e.stateValue,
        indeterminate: e.stateIndeterminate
      }, () => [
        e.stateValue ? (m(), N(r, {
          key: 0,
          icon: e.$options.CheckIcon,
          size: "1.3em"
        }, null, 8, ["icon"])) : e.stateIndeterminate ? (m(), N(r, {
          key: 1,
          icon: e.$options.IndeterminateIcon,
          size: "1.3em"
        }, null, 8, ["icon"])) : M("", !0)
      ])
    ])
  ], 2);
}
const jr = /* @__PURE__ */ F(Fc, [["render", xc]]);
function Os(e = {}) {
  return { ...{
    ...lt(),
    readonly: !1,
    selected: !1,
    required: !1
  }, ...e };
}
const mt = Os(), qa = {
  computed: {
    attributes() {
      return {};
    }
  }
}, qr = {
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--disabled`]: this.disabled,
          [`${this.cssClass}--readonly`]: this.readonly,
          [`${this.cssClass}--selected`]: this.stateSelected
        }
      ];
    }
  }
}, Hc = R({
  name: "BCollectionItem",
  extends: We,
  components: { BIcon: Ae },
  emits: ["click", "selected", "drop", "dragstart", "dragenter", "dragleave", "dragend"],
  props: {
    component: {
      type: [String, Function, Object],
      default: "li"
    },
    text: {
      type: [String, Number, Object, Function],
      default: mt.text
    },
    icon: {
      type: [String, Object],
      default: mt.icon
    },
    selected: {
      type: Boolean,
      default: mt.selected
    },
    readonly: {
      type: Boolean,
      default: mt.readonly
    },
    required: {
      type: Boolean,
      default: mt.required
    },
    meta: {
      type: Object,
      default: mt.meta
    },
    toggleable: {
      type: Boolean,
      default: mt.toggleable
    },
    draggable: {
      type: Boolean,
      default: mt.draggable
    },
    onPropClick: {
      type: Function,
      default: mt.onPropClick
    },
    onPropSelected: {
      type: Function,
      default: mt.onPropSelected
    }
  },
  data() {
    return {
      cssClass: "b-collection__item",
      iconProps: null,
      stateSelected: this.selected,
      draggedIndex: -1
    };
  },
  computed: {
    classIcon() {
      return this.icon ? `${this.cssClass}--icon` : "";
    },
    classText() {
      return `${this.cssClass}--text`;
    },
    itemComponent() {
      const e = typeof this.text;
      return e === "object" || e === "function" ? this.text : this.component;
    }
  },
  methods: {
    onClick(e) {
      this.readonly || this.disabled || (this.toggleable && this.toggle(), this.onPropClick && this.onPropClick(this, e), this.onPropSelected && this.onPropSelected(this.stateSelected, this), this.$emit("click", {
        event: e,
        item: this
      }));
    },
    toggle() {
      this.stateSelected = !this.stateSelected, this.$emit("selected", {
        selected: this.stateSelected,
        item: this
      });
    },
    /**
     * Drag start
     * @param {DragEvent} event
     */
    onDragStart(e) {
      var t, n;
      this.draggable && (this.draggedIndex = Number((t = e.currentTarget) == null ? void 0 : t.dataset.index), (n = e.dataTransfer) == null || n.setData("text/plain", String(this.value)), e.dataTransfer.effectAllowed = "move", this.$emit("dragstart", {
        event: e,
        item: this,
        draggedIndex: this.draggedIndex
      }));
    },
    /**
     * Drag end
     */
    onDragEnd(e) {
      this.draggable && this.$emit("dragend", {
        event: e,
        item: this,
        draggedIndex: this.draggedIndex
      });
    },
    /**
     * Drag over
     * @param {DragEvent} event
     */
    onDragOver(e) {
      e.preventDefault(), e.dataTransfer.dropEffect = "move";
    },
    /**
     * Drop
     * @param {DragEvent} event
     */
    onDrop(e) {
      e.preventDefault(), this.$emit("drop", {
        event: e,
        value: this.value
      });
    },
    /**
     * Drag enter
     * @param {DragEvent} event
     */
    onDragEnter(e) {
      this.draggable && e.target === e.currentTarget && this.$emit("dragenter", {
        event: e,
        item: this
      });
    },
    /**
     * Drag leave
     * @param {DragEvent} event
     */
    onDragLeave(e) {
      e.target === e.currentTarget && this.$emit("dragleave", {
        event: e,
        item: this
      });
    }
  },
  watch: {
    selected(e) {
      e !== this.stateSelected && (this.stateSelected = e);
    },
    icon: {
      immediate: !0,
      handler(e) {
        this.iconProps = $t(e) || null;
      }
    }
  },
  mixins: [qa, qr]
});
function Yc(e, t, n, s, a, i) {
  const r = T("BIcon");
  return e.visible ? (m(), N(it(e.itemComponent), G({ key: 0 }, e.attributes, {
    class: e.classes,
    draggable: e.draggable,
    onClick: e.onClick,
    onDragstart: e.onDragStart,
    onDragend: e.onDragEnd,
    onDragover: e.onDragOver,
    onDrop: e.onDrop,
    onDragenter: e.onDragEnter,
    onDragleave: e.onDragLeave
  }), {
    default: P(() => [
      e.draggable ? L(e.$slots, "drag-icon", { key: 0 }) : M("", !0),
      L(e.$slots, "item-icon", {
        item: { text: e.text, value: e.value, selected: e.stateSelected, icon: e.iconProps, meta: e.meta }
      }, () => [
        e.icon ? (m(), N(r, G({ key: 0 }, e.iconProps, { class: e.classIcon }), null, 16, ["class"])) : M("", !0)
      ]),
      L(e.$slots, "default", {
        item: { text: e.text, value: e.value, selected: e.stateSelected, icon: e.iconProps, meta: e.meta }
      }, () => [
        U("span", {
          class: H(e.classText)
        }, X(e.text), 3)
      ])
    ]),
    _: 3
  }, 16, ["class", "draggable", "onClick", "onDragstart", "onDragend", "onDragover", "onDrop", "onDragenter", "onDragleave"])) : M("", !0);
}
const Ga = /* @__PURE__ */ F(Hc, [["render", Yc]]);
function zc(e = {}) {
  return { ...{
    ...Os(),
    content: ""
  }, ...e };
}
const Gr = zc();
class Dv {
  constructor(t = {}) {
    u(this, "disabled");
    u(this, "visible");
    u(this, "text");
    u(this, "value");
    u(this, "icon");
    u(this, "readonly");
    u(this, "selected");
    u(this, "content");
    u(this, "onPropClick");
    u(this, "onPropSelected");
    Object.assign(this, Gr, t);
  }
}
const jc = j(
  q(() => import("./collapse-B7tU9dc-.js"))
), qc = j(q(() => import("./expand-DCN5Xszi.js"))), Gc = R({
  name: "BCollapseItem",
  extends: Ga,
  components: { BButton: ze, BIcon: Ae },
  props: {
    content: {
      type: String,
      default: Gr.content
    }
  },
  computed: {
    attributes() {
      return {
        ...qa.computed.attributes.call(this),
        tabindex: 0,
        "aria-container": this.stateSelected,
        "aria-controls": this.value
      };
    },
    attributesContent() {
      return {
        role: "region",
        "aria-labelledby": this.value,
        "aria-hidden": !this.stateSelected
      };
    }
  },
  created() {
    this.cssClass = "b-collapse__item";
  },
  CollapseIcon: jc,
  ExpandIcon: qc
}), Kc = { class: "b-collapse__item--header_text" }, Xc = {
  key: 0,
  class: "b-collapse__item--header_icon"
}, Qc = { class: "b-collapse__item--container_content" };
function Jc(e, t, n, s, a, i) {
  const r = T("BIcon"), o = T("b-button");
  return e.visible ? (m(), N(it(e.component), {
    key: 0,
    class: H(e.classes)
  }, {
    default: P(() => [
      L(e.$slots, "header", {}, () => [
        W(o, G({ simple: "" }, e.attributes, {
          class: "b-collapse__item--header",
          disabled: e.disabled,
          onClick: e.onClick
        }), {
          default: P(() => [
            U("div", Kc, [
              e.icon ? (m(), N(r, rt(G({ key: 0 }, e.iconProps)), null, 16)) : M("", !0),
              U("span", null, X(e.text), 1)
            ]),
            e.readonly ? M("", !0) : (m(), I("div", Xc, [
              W(ot, { name: "rotate" }, {
                default: P(() => [
                  e.stateSelected ? (m(), N(r, {
                    icon: e.$options.CollapseIcon,
                    key: "collapse",
                    class: "rotate-icon"
                  }, null, 8, ["icon"])) : (m(), N(r, {
                    icon: e.$options.ExpandIcon,
                    key: "expand",
                    class: "rotate-icon"
                  }, null, 8, ["icon"]))
                ]),
                _: 1
              })
            ]))
          ]),
          _: 1
        }, 16, ["disabled", "onClick"])
      ]),
      W(ot, { name: "slidedown" }, {
        default: P(() => [
          e.stateSelected ? (m(), I("div", G({ key: 0 }, e.attributesContent, { class: "b-collapse__item--container" }), [
            U("div", Qc, [
              L(e.$slots, "default", {}, () => [
                Be(X(e.content), 1)
              ])
            ])
          ], 16)) : M("", !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["class"])) : M("", !0);
}
const Kr = /* @__PURE__ */ F(Gc, [["render", Jc]]);
function Ps(e = {}) {
  return { ...{
    ...Zn(),
    items: [],
    multiple: !1,
    selected: void 0,
    singleSelection: !1,
    noSelect: !1,
    separator: ";"
  }, ...e };
}
const Lt = Ps(), Ve = [];
for (let e = 0; e < 256; ++e)
  Ve.push((e + 256).toString(16).slice(1));
function Zc(e, t = 0) {
  return (Ve[e[t + 0]] + Ve[e[t + 1]] + Ve[e[t + 2]] + Ve[e[t + 3]] + "-" + Ve[e[t + 4]] + Ve[e[t + 5]] + "-" + Ve[e[t + 6]] + Ve[e[t + 7]] + "-" + Ve[e[t + 8]] + Ve[e[t + 9]] + "-" + Ve[e[t + 10]] + Ve[e[t + 11]] + Ve[e[t + 12]] + Ve[e[t + 13]] + Ve[e[t + 14]] + Ve[e[t + 15]]).toLowerCase();
}
let ra;
const ed = new Uint8Array(16);
function td() {
  if (!ra) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ra = crypto.getRandomValues.bind(crypto);
  }
  return ra(ed);
}
const nd = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ii = { randomUUID: nd };
function Ka(e, t, n) {
  var a;
  if (Ii.randomUUID && !e)
    return Ii.randomUUID();
  e = e || {};
  const s = e.random ?? ((a = e.rng) == null ? void 0 : a.call(e)) ?? td();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, Zc(s);
}
const Xa = R({
  name: "BListBoxAbstract",
  extends: _n,
  emits: [
    "selected-item",
    "selected-items",
    "update:value",
    "update:text",
    "update:selected",
    "click",
    "change"
  ],
  props: {
    items: {
      type: [Array, Object],
      default: Lt.items
    },
    selected: {
      type: [Array, Object, Boolean],
      default: Lt.selected
    },
    multiple: {
      type: Boolean,
      default: Lt.multiple
    },
    separator: {
      type: String,
      default: Lt.separator
    },
    singleSelection: {
      type: Boolean,
      default: Lt.singleSelection
    },
    noSelect: {
      type: Boolean,
      default: Lt.noSelect
    },
    onPropItemSelected: {
      type: Function,
      default: Lt.onPropItemSelected
    },
    onPropItemsSelected: {
      type: Function,
      default: Lt.onPropItemsSelected
    }
  },
  data() {
    return {
      cssClass: "b-listbox-abstract",
      // Link to the pointer of the selected element or array of selected elements
      stateSelected: [],
      stateItems: [],
      currentIndex: -1,
      isFocused: !1
    };
  },
  isMouseEnter: !1,
  provide() {
    return {
      updateSelected: this.updateSelected
    };
  },
  watch: {
    value: {
      handler(e) {
        this.searchByValue(e) || this.resetSelected();
      },
      immediate: !0
    },
    selected: {
      handler(e) {
        if (typeof e > "u")
          return;
        if (typeof e == "boolean") {
          e || this.resetSelected();
          return;
        }
        const t = Array.isArray(e) ? e : [e];
        if (!t.length) {
          this.resetSelected();
          return;
        }
        const n = t.filter(
          (s) => !this.stateSelected.some(
            (a) => a.value === s.value
          )
        );
        n.length && this.$nextTick(() => {
          for (const s of n) {
            const a = s.value || s, i = this.getItemByValue(a);
            i && this.updateSelected(i.value, !0);
          }
        });
      },
      deep: !0,
      immediate: !0
    },
    items: {
      handler(e) {
        this.watcherHandlerItems(e);
      },
      immediate: !0,
      deep: !0
    },
    stateSelected: {
      handler(e, t) {
        (!t || t.length === 0) && e.length === 0 || (Array.isArray(e) && (Array.isArray(t) && e.length === t.length && e.every((s, a) => s.value === t[a].value) || this.$emit("change", {
          selected: e,
          text: this.getSelectedText(),
          value: this.getSelectedValue()
        })), this.sendEventSelectedItems());
      },
      deep: !0,
      immediate: !0
    },
    stateVisible(e) {
      if (e) {
        const t = this.stateItems.findIndex((n) => n.selected);
        t !== -1 && (this.currentIndex = t);
      }
    }
  },
  methods: {
    watcherHandlerItems(e) {
      if (!Qt(e).length) {
        this.stateItems = [], this.stateSelected = [];
        return;
      }
      const t = this.initItems();
      this.stateItems = [...t];
      const n = this.initSelected();
      n.length && (this.stateSelected = [...n]), this.searchByValue(this.value);
    },
    /**
     * Initialize items
     * @returns {ICollectionItemAttributes[]}
     */
    initItems() {
      return Qt(this.items).map((e) => {
        const t = typeof e.value > "u" ? Ka() : e.value;
        return {
          ...e,
          value: t
        };
      });
    },
    /**
     * Get the selected items
     * @returns {ICollectionItemAttributes[]}
     */
    initSelected() {
      return Qt(this.items).filter((e) => e.selected);
    },
    toggleItemSelected(e) {
      this.updateSelected(e.value, !e.selected);
    },
    onClickItem({ event: e, item: t }) {
      this.toggleItemSelected(t), this.$emit("click", {
        event: e,
        item: t
      });
    },
    /**
     * Get the number of items
     * @returns {number}
     */
    count() {
      return this.stateItems.length;
    },
    /**
     * Check if the list is empty
     * @returns {boolean}
     */
    isEmpty() {
      return this.count() === 0;
    },
    /**
     * Check if the item is selected
     * @returns {boolean}
     */
    isSelected() {
      return this.stateSelected.length > 0;
    },
    /**
     * Get an item by value
     * @param value any
     * @returns {ICollectionItemAttributes | undefined}
     */
    getItemByValue(e) {
      return this.stateItems.find((t) => t.value === e);
    },
    /**
     * Get the index of the item by value
     * @param value any
     * @returns { number }
     */
    getIndexByValue(e) {
      return this.stateItems.findIndex((t) => t.value === e);
    },
    /**
     * Remove the selected item
     * @param value
     * @returns {boolean}
     */
    removeSelectedItem(e) {
      const t = this.getItemByValue(e);
      return t ? (t.selected = !1, this.stateSelected = this.stateSelected.filter(
        (n) => n.value !== e
      ), !0) : !1;
    },
    /**
     * Update the selected item
     * @param value
     * @param selected
     * @returns {boolean}
     */
    updateSelected(e, t, n = !1) {
      const s = this.getItemByValue(e);
      if (!s || s.disabled || s.readonly || this.noSelect)
        return !1;
      if (this.currentIndex = this.getIndexByValue(e), !t && (!this.singleSelection || this.multiple || n))
        return this.removeSelectedItem(e);
      if (s.selected && this.singleSelection)
        return !0;
      if (s.selected = !0, this.$emit("selected-item", s), this.multiple)
        this.stateSelected.find((i) => i.value === e) || this.stateSelected.push(s);
      else {
        const a = this.stateSelected[0] || null;
        a && (a.selected = !1), this.stateSelected = [s];
      }
      return !0;
    },
    /**
     * Send an event with selected items
     */
    sendEventSelectedItems() {
      const e = this.getSelectedText(), t = this.getSelectedValue();
      this.$emit("update:text", e), this.$emit("update:value", t), this.$emit("update:selected", this.stateSelected), this.$emit("selected-items", {
        selected: this.stateSelected,
        text: e,
        value: t
      });
    },
    /**
     * Reset the selected elements
     */
    resetSelected() {
      for (const e of this.stateSelected)
        this.updateSelected(e.value, !1, !0);
    },
    searchByValue(e) {
      var s;
      if (typeof e > "u" || e === null)
        return !1;
      const t = Array.isArray(e) ? e.map((a) => a.toString()) : e.toString().split(this.separator);
      let n = !1;
      for (const a of this.stateItems) {
        const i = t.includes(((s = a.value) == null ? void 0 : s.toString()) || "");
        if (i && (n = !0), i && !a.selected && typeof e < "u" && this.updateSelected(a.value, !0), i && !this.multiple)
          break;
      }
      return n;
    },
    /**
     * Get the text of the selected elements
     * @returns {string}
     */
    getSelectedText() {
      var e;
      return (e = this.stateSelected) == null ? void 0 : e.map((t) => t.text).join(this.separator);
    },
    /**
     * Get the meaning of the selected elements
     * @returns {string}
     */
    getSelectedValue() {
      var e;
      return this.stateSelected.length ? this.multiple ? this.stateSelected.map((t) => t.value) : (e = this.stateSelected[0]) == null ? void 0 : e.value : null;
    },
    /**
     * Get the next valid index that is not disabled
     * @param {number} startIndex - The starting index
     * @param {number} direction - The direction to move (1 for down, -1 for up)
     * @returns {number} - The next valid index or -1 if all items are disabled
     */
    getNextValidIndex(e, t) {
      const n = this.stateItems.length;
      let s = e;
      do
        s = s + t;
      while (s >= 0 && s < n && this.stateItems[s].disabled);
      return this.isItemValidateByIndex(s) ? s : this.isItemValidateByIndex(e) ? e : -1;
    },
    /**
     * Move the active item to the next or previous item
     */
    nextActiveItem() {
      this.currentIndex = this.getNextValidIndex(this.currentIndex, 1);
    },
    /**
     * Move the active item to the previous item
     */
    prevActiveItem() {
      this.currentIndex = this.getNextValidIndex(this.currentIndex, -1);
    },
    /**
     * Set the selected item as the active item
     */
    setSelectedActiveItem() {
      const e = this.count();
      if (this.currentIndex >= 0 && this.currentIndex < e) {
        const t = this.stateItems[this.currentIndex];
        !t.disabled && !t.selected && this.updateSelected(t.value, !0);
      }
    },
    /**
     * Check if the item is valid by index
     * @param {number} index - The index of the item
     * @returns {boolean} - True if the item is valid, otherwise false
     */
    isItemValidateByIndex(e) {
      return e >= 0 && e < this.stateItems.length && !this.stateItems[e].disabled;
    },
    /**
     * Handle keydown event
     * @param {KeyboardEvent} event
     */
    handleKeydown(e) {
      var n;
      if (this.isEmpty()) return;
      const t = {
        ArrowDown: this.nextActiveItem,
        ArrowUp: this.prevActiveItem,
        Enter: this.setSelectedActiveItem
      };
      (n = t[e.key]) == null || n.call(t);
    },
    /**
     * Handle focus event
     */
    handleFocus() {
      this.isFocused = !0, this.currentIndex === -1 && (this.currentIndex = this.getNextValidIndex(-1, 1));
    },
    /**
     * Handle blur event
     */
    handleBlur() {
      this.isFocused = !1;
    },
    /**
     * Handle mouseenter event on an item
     */
    handleMouseEnterInItem(e) {
      this.$options.isMouseEnter = !0, this.stateVisible && (this.currentIndex = e);
    },
    /**
     * Handle mouseleave event on an item
     */
    handleMouseLeaveInItem() {
      this.$options.isMouseEnter = !1;
    }
  },
  created() {
  }
});
function sd(e = {}) {
  return { ...{
    ...Ps()
  }, ...e };
}
const ad = sd();
class _v {
  constructor(t = {}) {
    u(this, "disabled");
    u(this, "items");
    u(this, "selected");
    u(this, "multiple");
    u(this, "content");
    u(this, "visible");
    u(this, "text");
    u(this, "onSelectedItem");
    u(this, "onSelectedItems");
    this.items = [], Object.assign(this, ad, t);
  }
}
const id = R({
  name: "BCollapse",
  extends: Xa,
  components: {
    BCollapseItem: Kr
  },
  created() {
    this.cssClass = "b-collapse";
  }
}), rd = {
  class: "b-collapse__list",
  role: "listbox",
  tabindex: "0"
};
function od(e, t, n, s, a, i) {
  const r = T("BCollapseItem");
  return m(), I("div", {
    class: H(e.classes)
  }, [
    U("ul", rd, [
      L(e.$slots, "default", {}, () => [
        (m(!0), I(ce, null, ye(e.stateItems, (o) => (m(), N(r, G({
          key: o.value,
          ref_for: !0
        }, o, {
          onClick: (l) => e.onClickItem({ event: l.event, item: o })
        }), null, 16, ["onClick"]))), 128))
      ])
    ])
  ], 2);
}
const $v = /* @__PURE__ */ F(id, [["render", od]]);
function Xr(e = {}) {
  return { ...{
    ...we(),
    visible: !1,
    closeOnEsc: !0,
    align: "center",
    modal: !1,
    layer: 100
  }, ...e };
}
const At = Xr();
class Sv {
  constructor(t = {}) {
    u(this, "height");
    u(this, "width");
    u(this, "closeOnEsc");
    u(this, "visible");
    u(this, "align");
    u(this, "modal");
    u(this, "layer");
    Object.assign(this, At, t);
  }
}
let Qr = At.layer || 100;
function ld() {
  return Qr++;
}
function ud() {
  return Qr--;
}
const _s = at([]);
function cd() {
  return _s;
}
function dd(e) {
  _s.value.push(e);
}
function fd(e) {
  const t = _s.value.indexOf(e);
  t !== -1 && _s.value.splice(t, 1);
}
const md = R({
  name: "BModalManage",
  extends: de,
  setup() {
    return {
      instances: cd()
    };
  }
});
function hd(e, t, n, s, a, i) {
  return m(!0), I(ce, null, ye(e.instances, (r) => (m(), N(it(r)))), 256);
}
const Ev = /* @__PURE__ */ F(md, [["render", hd]]);
function pd(e = {}) {
  return { ...{
    ...we(),
    teleportTo: "body",
    transparent: !1,
    visible: !1
  }, ...e };
}
const bs = pd();
class Iv {
  constructor(t = {}) {
    u(this, "visible");
    u(this, "teleportTo");
    u(this, "transparent");
    Object.assign(this, bs, t);
  }
}
const gd = R({
  name: "BOverlay",
  extends: de,
  props: {
    teleportTo: {
      type: [Object, String, Boolean],
      default: bs.teleportTo
    },
    transparent: {
      type: Boolean,
      default: bs.transparent
    },
    visible: {
      type: [Boolean, Object],
      default: bs.visible
    }
  },
  inheritAttrs: !1,
  data() {
    return {
      cssClass: "b-overlay"
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        `${this.cssClass}__base`,
        this.transparent ? `${this.cssClass}__transparent` : ""
      ];
    }
  }
});
function bd(e, t, n, s, a, i) {
  return e.teleportTo ? (m(), N(Xn, {
    key: 0,
    to: e.teleportTo
  }, [
    W(ot, { name: "fade" }, {
      default: P(() => [
        e.isHidden ? (m(), I("div", {
          key: 0,
          class: H(e.classes),
          onClick: t[0] || (t[0] = (...r) => e.hide && e.hide(...r))
        }, [
          L(e.$slots, "default")
        ], 2)) : M("", !0)
      ]),
      _: 3
    })
  ], 8, ["to"])) : (m(), N(ot, {
    key: 1,
    name: "fade"
  }, {
    default: P(() => [
      e.isHidden ? (m(), I("div", {
        key: 0,
        class: H(e.classes),
        onClick: t[1] || (t[1] = (...r) => e.hide && e.hide(...r))
      }, [
        L(e.$slots, "default")
      ], 2)) : M("", !0)
    ]),
    _: 3
  }));
}
const Qa = /* @__PURE__ */ F(gd, [["render", bd]]), os = at(null), ls = at(!1), Rt = [];
function yd() {
  const e = gn();
  !os.value && e && (os.value = Ss(Qa, {
    visible: ls,
    onHide: () => {
      const r = Rt[Rt.length - 1];
      r && r.hide() === !0 && Rt.pop(), ls.value = Rt.length > 0;
    }
  }), Uo(os.value, document.body));
  const t = (r) => {
    ls.value = !0, s(r);
  }, n = (r) => {
    i(r), Rt.length === 0 && (ls.value = !1);
  }, s = (r) => {
    Rt.push(r);
  }, a = (r) => Rt.findIndex((o) => o === r), i = (r) => {
    const o = a(r);
    o !== -1 && Rt.splice(o, 1);
  };
  return {
    component: os.value,
    show: t,
    hide: n
  };
}
const wd = R({
  name: "BModal",
  extends: de,
  components: { BOverlay: Qa },
  emits: ["update:visible", "closed"],
  props: {
    align: {
      type: String,
      default: At.align
    },
    height: {
      type: [Number, String],
      default: At.height
    },
    width: {
      type: [Number, String],
      default: At.width
    },
    closeOnEsc: {
      type: Boolean,
      default: At.closeOnEsc
    },
    visible: {
      type: [Boolean, Object],
      default: At.visible
    },
    modal: {
      type: Boolean,
      default: At.modal
    },
    layer: {
      type: Number,
      default: void 0
    },
    fullScreen: {
      type: Boolean,
      default: At.fullScreen
    }
  },
  inheritAttrs: !1,
  data() {
    return {
      cssClass: "b-modal",
      stateVisible: !1,
      cmpOverlay: yd(),
      stateLayer: this.layer
    };
  },
  provide() {
    return {
      modalLayer: () => this.stateLayer
    };
  },
  computed: {
    effectiveWidth() {
      const e = this.width;
      return isNaN(Number(e)) ? String(e) || "" : `${String(e)}px`;
    },
    effectiveHeight() {
      const e = this.height;
      return isNaN(Number(e)) ? String(e) || "" : `${String(e)}px`;
    },
    styles() {
      const e = {
        zIndex: String(this.stateLayer)
      };
      if (!this.fullScreen) {
        const t = this.effectiveWidth, n = this.effectiveHeight;
        t && (e.width = t), n && (e.height = n);
      }
      return e;
    },
    classes() {
      return [this.cssClass];
    }
  },
  methods: {
    handleEsc(e) {
      e.key === "Escape" && this.closeOnEsc && !this.modal && this.hide();
    },
    beforeHide() {
      return !this.modal;
    },
    afterShow() {
      this.stateLayer = this.layer || ld(), this.cmpOverlay.show(this);
    },
    afterHide() {
      ud(), this.cmpOverlay.hide(this);
    },
    onAfterLeave() {
      this.$emit("closed");
    }
  },
  mounted() {
    document.addEventListener("keydown", this.handleEsc);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleEsc);
  }
});
function vd(e, t, n, s, a, i) {
  return m(), N(Xn, { to: "body" }, [
    U("div", G({ class: e.classes }, e.$attrs), [
      W(ot, {
        name: "pop",
        appear: "",
        onAfterLeave: e.onAfterLeave
      }, {
        default: P(() => [
          e.isHidden ? (m(), I("div", {
            key: 0,
            class: H(["b-modal__content", [
              !e.fullScreen && `b-modal__content--${e.align}`,
              e.fullScreen && "b-modal__content--fullscreen"
            ]]),
            style: Ye(e.styles),
            role: "dialog",
            "aria-modal": "true"
          }, [
            L(e.$slots, "default")
          ], 6)) : M("", !0)
        ]),
        _: 3
      }, 8, ["onAfterLeave"])
    ], 16)
  ]);
}
const Da = /* @__PURE__ */ F(wd, [["render", vd]]);
function Jr({
  component: e,
  props: t,
  slots: n
}) {
  e ?? (e = Da);
  let s = null;
  const a = at(!1);
  let i = null, r = null, o = null, l = null;
  const c = () => new Promise((D) => {
    i = (S) => D();
  }), h = () => new Promise((D) => {
    r = D;
  }), v = () => new Promise((D) => {
    o = D;
  }), C = () => new Promise((D) => {
    l = D;
  }), w = () => {
    s = Ss(
      e,
      {
        ...t,
        visible: a,
        "onUpdate:visible": (D) => {
          a.value = D;
        },
        onConfirm: (D) => {
          i && i(D);
        },
        onCancel: () => {
          r && r();
        },
        onHide: () => {
          l && l();
        },
        onShow: () => {
          o && o();
        },
        onClosed: () => {
          s && fd(s);
        }
      },
      {
        ...n
      }
    );
  }, E = () => {
    a.value = !0, s && dd(s);
  }, B = () => {
    a.value = !1;
  }, k = (D) => {
    s && s.props && Object.assign(s.props, D);
  }, y = (D) => {
    if (D)
      i = D;
    else
      return c();
  }, g = (D) => {
    if (D)
      r = D;
    else
      return h();
  }, b = (D) => {
    if (D)
      o = D;
    else
      return v();
  }, d = (D) => {
    if (D)
      l = D;
    else
      return C();
  }, _ = () => s;
  return w(), {
    getInstance: _,
    props: k,
    show: E,
    hide: B,
    onConfirm: y,
    onCancel: g,
    onShow: b,
    onHide: d
  };
}
function Zr(e = {}) {
  return { ...{
    ...Xr(),
    closable: !0,
    height: 300,
    width: 500,
    confirmType: ge.Secondary,
    confirmText: "OK",
    defaultActions: !0
  }, ...e };
}
const Tt = Zr();
class kv {
  constructor(t = {}) {
    u(this, "closable");
    u(this, "header");
    u(this, "height");
    u(this, "width");
    u(this, "visible");
    u(this, "confirmText");
    u(this, "confirmType");
    u(this, "defaultActions");
    Object.assign(this, Tt, t);
  }
}
/*!
  * shared v11.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const dt = typeof window < "u";
let tt, en;
if (process.env.NODE_ENV !== "production") {
  const e = dt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (tt = (t) => {
    e.mark(t);
  }, en = (t, n, s) => {
    e.measure(t, n, s), e.clearMarks(n), e.clearMarks(s);
  });
}
const Cd = /\{([0-9a-zA-Z]+)\}/g;
function Ms(e, ...t) {
  return t.length === 1 && J(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Cd, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const St = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Dd = (e, t, n) => _d({ l: e, k: t, s: n }), _d = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ne = (e) => typeof e == "number" && isFinite(e), $d = (e) => Ja(e) === "[object Date]", yn = (e) => Ja(e) === "[object RegExp]", Bs = (e) => K(e) && Object.keys(e).length === 0, Le = Object.assign, Sd = Object.create, oe = (e = null) => Sd(e);
let ki;
const Xt = () => ki || (ki = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : oe());
function Ti(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Ed = Object.prototype.hasOwnProperty;
function ct(e, t) {
  return Ed.call(e, t);
}
const Te = Array.isArray, ue = (e) => typeof e == "function", V = (e) => typeof e == "string", Z = (e) => typeof e == "boolean", J = (e) => e !== null && typeof e == "object", Id = (e) => J(e) && ue(e.then) && ue(e.catch), eo = Object.prototype.toString, Ja = (e) => eo.call(e), K = (e) => Ja(e) === "[object Object]", kd = (e) => e == null ? "" : Te(e) || K(e) && e.toString === eo ? JSON.stringify(e, null, 2) : String(e);
function Za(e, t = "") {
  return e.reduce((n, s, a) => a === 0 ? n + s : n + t + s, "");
}
const Ai = 2;
function Td(e, t = 0, n = e.length) {
  const s = e.split(/\r?\n/);
  let a = 0;
  const i = [];
  for (let r = 0; r < s.length; r++)
    if (a += s[r].length + 1, a >= t) {
      for (let o = r - Ai; o <= r + Ai || n > a; o++) {
        if (o < 0 || o >= s.length)
          continue;
        const l = o + 1;
        i.push(`${l}${" ".repeat(3 - String(l).length)}|  ${s[o]}`);
        const c = s[o].length;
        if (o === r) {
          const h = t - (a - c) + 1, v = Math.max(1, n > a ? c - h : n - t);
          i.push("   |  " + " ".repeat(h) + "^".repeat(v));
        } else if (o > r) {
          if (n > a) {
            const h = Math.max(Math.min(n - a, c), 1);
            i.push("   |  " + "^".repeat(h));
          }
          a += c + 1;
        }
      }
      break;
    }
  return i.join(`
`);
}
function xt(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ni = {};
function ei(e) {
  Ni[e] || (Ni[e] = !0, xt(e));
}
function ti() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, s) {
      const a = e.get(n);
      a && a.push(s) || e.set(n, [s]);
    },
    off(n, s) {
      const a = e.get(n);
      a && a.splice(a.indexOf(s) >>> 0, 1);
    },
    emit(n, s) {
      (e.get(n) || []).slice().map((a) => a(s)), (e.get("*") || []).slice().map((a) => a(n, s));
    }
  };
}
const us = (e) => !J(e) || Te(e);
function ys(e, t) {
  if (us(e) || us(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: s, des: a } = n.pop();
    Object.keys(s).forEach((i) => {
      i !== "__proto__" && (J(s[i]) && !J(a[i]) && (a[i] = Array.isArray(s[i]) ? [] : oe()), us(a[i]) || us(s[i]) ? a[i] = s[i] : n.push({ src: s[i], des: a[i] }));
    });
  }
}
/*!
  * message-compiler v11.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ad(e, t, n) {
  return { line: e, column: t, offset: n };
}
function _a(e, t, n) {
  return { start: e, end: t };
}
const z = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
}, Nd = 17, Od = {
  // tokenizer error messages
  [z.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [z.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [z.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [z.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [z.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [z.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [z.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [z.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [z.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [z.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [z.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [z.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [z.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [z.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [z.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [z.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function $n(e, t, n = {}) {
  const { domain: s, messages: a, args: i } = n, r = process.env.NODE_ENV !== "production" ? Ms((a || Od)[e] || "", ...i || []) : e, o = new SyntaxError(String(r));
  return o.code = e, t && (o.location = t), o.domain = s, o;
}
function Pd(e) {
  throw e;
}
const Md = /<\/?[\w\s="/.':;#-\/]+>/, Bd = (e) => Md.test(e), It = " ", Ld = "\r", Ge = `
`, Rd = "\u2028", Vd = "\u2029";
function Fd(e) {
  const t = e;
  let n = 0, s = 1, a = 1, i = 0;
  const r = (S) => t[S] === Ld && t[S + 1] === Ge, o = (S) => t[S] === Ge, l = (S) => t[S] === Vd, c = (S) => t[S] === Rd, h = (S) => r(S) || o(S) || l(S) || c(S), v = () => n, C = () => s, w = () => a, E = () => i, B = (S) => r(S) || l(S) || c(S) ? Ge : t[S], k = () => B(n), y = () => B(n + i);
  function g() {
    return i = 0, h(n) && (s++, a = 0), r(n) && n++, n++, a++, t[n];
  }
  function b() {
    return r(n + i) && i++, i++, t[n + i];
  }
  function d() {
    n = 0, s = 1, a = 1, i = 0;
  }
  function _(S = 0) {
    i = S;
  }
  function D() {
    const S = n + i;
    for (; S !== n; )
      g();
    i = 0;
  }
  return {
    index: v,
    line: C,
    column: w,
    peekOffset: E,
    charAt: B,
    currentChar: k,
    currentPeek: y,
    next: g,
    peek: b,
    reset: d,
    resetPeek: _,
    skipToPeek: D
  };
}
const Vt = void 0, Wd = ".", Oi = "'", Ud = "tokenizer";
function xd(e, t = {}) {
  const n = t.location !== !1, s = Fd(e), a = () => s.index(), i = () => Ad(s.line(), s.column(), s.index()), r = i(), o = a(), l = {
    currentType: 13,
    offset: o,
    startLoc: r,
    endLoc: r,
    lastType: 13,
    lastOffset: o,
    lastStartLoc: r,
    lastEndLoc: r,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => l, { onError: h } = t;
  function v(f, p, A, ...x) {
    const De = c();
    if (p.column += A, p.offset += A, h) {
      const _e = n ? _a(De.startLoc, p) : null, ee = $n(f, _e, {
        domain: Ud,
        args: x
      });
      h(ee);
    }
  }
  function C(f, p, A) {
    f.endLoc = i(), f.currentType = p;
    const x = { type: p };
    return n && (x.loc = _a(f.startLoc, f.endLoc)), A != null && (x.value = A), x;
  }
  const w = (f) => C(
    f,
    13
    /* TokenTypes.EOF */
  );
  function E(f, p) {
    return f.currentChar() === p ? (f.next(), p) : (v(z.EXPECTED_TOKEN, i(), 0, p), "");
  }
  function B(f) {
    let p = "";
    for (; f.currentPeek() === It || f.currentPeek() === Ge; )
      p += f.currentPeek(), f.peek();
    return p;
  }
  function k(f) {
    const p = B(f);
    return f.skipToPeek(), p;
  }
  function y(f) {
    if (f === Vt)
      return !1;
    const p = f.charCodeAt(0);
    return p >= 97 && p <= 122 || // a-z
    p >= 65 && p <= 90 || // A-Z
    p === 95;
  }
  function g(f) {
    if (f === Vt)
      return !1;
    const p = f.charCodeAt(0);
    return p >= 48 && p <= 57;
  }
  function b(f, p) {
    const { currentType: A } = p;
    if (A !== 2)
      return !1;
    B(f);
    const x = y(f.currentPeek());
    return f.resetPeek(), x;
  }
  function d(f, p) {
    const { currentType: A } = p;
    if (A !== 2)
      return !1;
    B(f);
    const x = f.currentPeek() === "-" ? f.peek() : f.currentPeek(), De = g(x);
    return f.resetPeek(), De;
  }
  function _(f, p) {
    const { currentType: A } = p;
    if (A !== 2)
      return !1;
    B(f);
    const x = f.currentPeek() === Oi;
    return f.resetPeek(), x;
  }
  function D(f, p) {
    const { currentType: A } = p;
    if (A !== 7)
      return !1;
    B(f);
    const x = f.currentPeek() === ".";
    return f.resetPeek(), x;
  }
  function S(f, p) {
    const { currentType: A } = p;
    if (A !== 8)
      return !1;
    B(f);
    const x = y(f.currentPeek());
    return f.resetPeek(), x;
  }
  function Y(f, p) {
    const { currentType: A } = p;
    if (!(A === 7 || A === 11))
      return !1;
    B(f);
    const x = f.currentPeek() === ":";
    return f.resetPeek(), x;
  }
  function Q(f, p) {
    const { currentType: A } = p;
    if (A !== 9)
      return !1;
    const x = () => {
      const _e = f.currentPeek();
      return _e === "{" ? y(f.peek()) : _e === "@" || _e === "|" || _e === ":" || _e === "." || _e === It || !_e ? !1 : _e === Ge ? (f.peek(), x()) : ut(f, !1);
    }, De = x();
    return f.resetPeek(), De;
  }
  function fe(f) {
    B(f);
    const p = f.currentPeek() === "|";
    return f.resetPeek(), p;
  }
  function ut(f, p = !0) {
    const A = (De = !1, _e = "") => {
      const ee = f.currentPeek();
      return ee === "{" || ee === "@" || !ee ? De : ee === "|" ? !(_e === It || _e === Ge) : ee === It ? (f.peek(), A(!0, It)) : ee === Ge ? (f.peek(), A(!0, Ge)) : !0;
    }, x = A();
    return p && f.resetPeek(), x;
  }
  function Pe(f, p) {
    const A = f.currentChar();
    return A === Vt ? Vt : p(A) ? (f.next(), A) : null;
  }
  function sn(f) {
    const p = f.charCodeAt(0);
    return p >= 97 && p <= 122 || // a-z
    p >= 65 && p <= 90 || // A-Z
    p >= 48 && p <= 57 || // 0-9
    p === 95 || // _
    p === 36;
  }
  function Hs(f) {
    return Pe(f, sn);
  }
  function Ys(f) {
    const p = f.charCodeAt(0);
    return p >= 97 && p <= 122 || // a-z
    p >= 65 && p <= 90 || // A-Z
    p >= 48 && p <= 57 || // 0-9
    p === 95 || // _
    p === 36 || // $
    p === 45;
  }
  function zs(f) {
    return Pe(f, Ys);
  }
  function js(f) {
    const p = f.charCodeAt(0);
    return p >= 48 && p <= 57;
  }
  function qs(f) {
    return Pe(f, js);
  }
  function Gs(f) {
    const p = f.charCodeAt(0);
    return p >= 48 && p <= 57 || // 0-9
    p >= 65 && p <= 70 || // A-F
    p >= 97 && p <= 102;
  }
  function Et(f) {
    return Pe(f, Gs);
  }
  function En(f) {
    let p = "", A = "";
    for (; p = qs(f); )
      A += p;
    return A;
  }
  function Ks(f) {
    let p = "";
    for (; ; ) {
      const A = f.currentChar();
      if (A === "{" || A === "}" || A === "@" || A === "|" || !A)
        break;
      if (A === It || A === Ge)
        if (ut(f))
          p += A, f.next();
        else {
          if (fe(f))
            break;
          p += A, f.next();
        }
      else
        p += A, f.next();
    }
    return p;
  }
  function Xs(f) {
    k(f);
    let p = "", A = "";
    for (; p = zs(f); )
      A += p;
    return f.currentChar() === Vt && v(z.UNTERMINATED_CLOSING_BRACE, i(), 0), A;
  }
  function Qs(f) {
    k(f);
    let p = "";
    return f.currentChar() === "-" ? (f.next(), p += `-${En(f)}`) : p += En(f), f.currentChar() === Vt && v(z.UNTERMINATED_CLOSING_BRACE, i(), 0), p;
  }
  function Js(f) {
    return f !== Oi && f !== Ge;
  }
  function hi(f) {
    k(f), E(f, "'");
    let p = "", A = "";
    for (; p = Pe(f, Js); )
      p === "\\" ? A += Zs(f) : A += p;
    const x = f.currentChar();
    return x === Ge || x === Vt ? (v(z.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), x === Ge && (f.next(), E(f, "'")), A) : (E(f, "'"), A);
  }
  function Zs(f) {
    const p = f.currentChar();
    switch (p) {
      case "\\":
      case "'":
        return f.next(), `\\${p}`;
      case "u":
        return ss(f, p, 4);
      case "U":
        return ss(f, p, 6);
      default:
        return v(z.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, p), "";
    }
  }
  function ss(f, p, A) {
    E(f, p);
    let x = "";
    for (let De = 0; De < A; De++) {
      const _e = Et(f);
      if (!_e) {
        v(z.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${p}${x}${f.currentChar()}`);
        break;
      }
      x += _e;
    }
    return `\\${p}${x}`;
  }
  function ea(f) {
    return f !== "{" && f !== "}" && f !== It && f !== Ge;
  }
  function ta(f) {
    k(f);
    let p = "", A = "";
    for (; p = Pe(f, ea); )
      A += p;
    return A;
  }
  function na(f) {
    let p = "", A = "";
    for (; p = Hs(f); )
      A += p;
    return A;
  }
  function sa(f) {
    const p = (A) => {
      const x = f.currentChar();
      return x === "{" || x === "@" || x === "|" || x === "(" || x === ")" || !x || x === It ? A : (A += x, f.next(), p(A));
    };
    return p("");
  }
  function In(f) {
    k(f);
    const p = E(
      f,
      "|"
      /* TokenChars.Pipe */
    );
    return k(f), p;
  }
  function kn(f, p) {
    let A = null;
    switch (f.currentChar()) {
      case "{":
        return p.braceNest >= 1 && v(z.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), f.next(), A = C(
          p,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), k(f), p.braceNest++, A;
      case "}":
        return p.braceNest > 0 && p.currentType === 2 && v(z.EMPTY_PLACEHOLDER, i(), 0), f.next(), A = C(
          p,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), p.braceNest--, p.braceNest > 0 && k(f), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), A;
      case "@":
        return p.braceNest > 0 && v(z.UNTERMINATED_CLOSING_BRACE, i(), 0), A = zt(f, p) || w(p), p.braceNest = 0, A;
      default: {
        let De = !0, _e = !0, ee = !0;
        if (fe(f))
          return p.braceNest > 0 && v(z.UNTERMINATED_CLOSING_BRACE, i(), 0), A = C(p, 1, In(f)), p.braceNest = 0, p.inLinked = !1, A;
        if (p.braceNest > 0 && (p.currentType === 4 || p.currentType === 5 || p.currentType === 6))
          return v(z.UNTERMINATED_CLOSING_BRACE, i(), 0), p.braceNest = 0, Tn(f, p);
        if (De = b(f, p))
          return A = C(p, 4, Xs(f)), k(f), A;
        if (_e = d(f, p))
          return A = C(p, 5, Qs(f)), k(f), A;
        if (ee = _(f, p))
          return A = C(p, 6, hi(f)), k(f), A;
        if (!De && !_e && !ee)
          return A = C(p, 12, ta(f)), v(z.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, A.value), k(f), A;
        break;
      }
    }
    return A;
  }
  function zt(f, p) {
    const { currentType: A } = p;
    let x = null;
    const De = f.currentChar();
    switch ((A === 7 || A === 8 || A === 11 || A === 9) && (De === Ge || De === It) && v(z.INVALID_LINKED_FORMAT, i(), 0), De) {
      case "@":
        return f.next(), x = C(
          p,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), p.inLinked = !0, x;
      case ".":
        return k(f), f.next(), C(
          p,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return k(f), f.next(), C(
          p,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return fe(f) ? (x = C(p, 1, In(f)), p.braceNest = 0, p.inLinked = !1, x) : D(f, p) || Y(f, p) ? (k(f), zt(f, p)) : S(f, p) ? (k(f), C(p, 11, na(f))) : Q(f, p) ? (k(f), De === "{" ? kn(f, p) || x : C(p, 10, sa(f))) : (A === 7 && v(z.INVALID_LINKED_FORMAT, i(), 0), p.braceNest = 0, p.inLinked = !1, Tn(f, p));
    }
  }
  function Tn(f, p) {
    let A = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (p.braceNest > 0)
      return kn(f, p) || w(p);
    if (p.inLinked)
      return zt(f, p) || w(p);
    switch (f.currentChar()) {
      case "{":
        return kn(f, p) || w(p);
      case "}":
        return v(z.UNBALANCED_CLOSING_BRACE, i(), 0), f.next(), C(
          p,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return zt(f, p) || w(p);
      default: {
        if (fe(f))
          return A = C(p, 1, In(f)), p.braceNest = 0, p.inLinked = !1, A;
        if (ut(f))
          return C(p, 0, Ks(f));
        break;
      }
    }
    return A;
  }
  function aa() {
    const { currentType: f, offset: p, startLoc: A, endLoc: x } = l;
    return l.lastType = f, l.lastOffset = p, l.lastStartLoc = A, l.lastEndLoc = x, l.offset = a(), l.startLoc = i(), s.currentChar() === Vt ? C(
      l,
      13
      /* TokenTypes.EOF */
    ) : Tn(s, l);
  }
  return {
    nextToken: aa,
    currentOffset: a,
    currentPosition: i,
    context: c
  };
}
const Hd = "parser", Yd = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function zd(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const s = parseInt(t || n, 16);
      return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�";
    }
  }
}
function jd(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function s(y, g, b, d, ..._) {
    const D = y.currentPosition();
    if (D.offset += d, D.column += d, n) {
      const S = t ? _a(b, D) : null, Y = $n(g, S, {
        domain: Hd,
        args: _
      });
      n(Y);
    }
  }
  function a(y, g, b) {
    const d = { type: y };
    return t && (d.start = g, d.end = g, d.loc = { start: b, end: b }), d;
  }
  function i(y, g, b, d) {
    t && (y.end = g, y.loc && (y.loc.end = b));
  }
  function r(y, g) {
    const b = y.context(), d = a(3, b.offset, b.startLoc);
    return d.value = g, i(d, y.currentOffset(), y.currentPosition()), d;
  }
  function o(y, g) {
    const b = y.context(), { lastOffset: d, lastStartLoc: _ } = b, D = a(5, d, _);
    return D.index = parseInt(g, 10), y.nextToken(), i(D, y.currentOffset(), y.currentPosition()), D;
  }
  function l(y, g) {
    const b = y.context(), { lastOffset: d, lastStartLoc: _ } = b, D = a(4, d, _);
    return D.key = g, y.nextToken(), i(D, y.currentOffset(), y.currentPosition()), D;
  }
  function c(y, g) {
    const b = y.context(), { lastOffset: d, lastStartLoc: _ } = b, D = a(9, d, _);
    return D.value = g.replace(Yd, zd), y.nextToken(), i(D, y.currentOffset(), y.currentPosition()), D;
  }
  function h(y) {
    const g = y.nextToken(), b = y.context(), { lastOffset: d, lastStartLoc: _ } = b, D = a(8, d, _);
    return g.type !== 11 ? (s(y, z.UNEXPECTED_EMPTY_LINKED_MODIFIER, b.lastStartLoc, 0), D.value = "", i(D, d, _), {
      nextConsumeToken: g,
      node: D
    }) : (g.value == null && s(y, z.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ht(g)), D.value = g.value || "", i(D, y.currentOffset(), y.currentPosition()), {
      node: D
    });
  }
  function v(y, g) {
    const b = y.context(), d = a(7, b.offset, b.startLoc);
    return d.value = g, i(d, y.currentOffset(), y.currentPosition()), d;
  }
  function C(y) {
    const g = y.context(), b = a(6, g.offset, g.startLoc);
    let d = y.nextToken();
    if (d.type === 8) {
      const _ = h(y);
      b.modifier = _.node, d = _.nextConsumeToken || y.nextToken();
    }
    switch (d.type !== 9 && s(y, z.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ht(d)), d = y.nextToken(), d.type === 2 && (d = y.nextToken()), d.type) {
      case 10:
        d.value == null && s(y, z.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ht(d)), b.key = v(y, d.value || "");
        break;
      case 4:
        d.value == null && s(y, z.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ht(d)), b.key = l(y, d.value || "");
        break;
      case 5:
        d.value == null && s(y, z.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ht(d)), b.key = o(y, d.value || "");
        break;
      case 6:
        d.value == null && s(y, z.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ht(d)), b.key = c(y, d.value || "");
        break;
      default: {
        s(y, z.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
        const _ = y.context(), D = a(7, _.offset, _.startLoc);
        return D.value = "", i(D, _.offset, _.startLoc), b.key = D, i(b, _.offset, _.startLoc), {
          nextConsumeToken: d,
          node: b
        };
      }
    }
    return i(b, y.currentOffset(), y.currentPosition()), {
      node: b
    };
  }
  function w(y) {
    const g = y.context(), b = g.currentType === 1 ? y.currentOffset() : g.offset, d = g.currentType === 1 ? g.endLoc : g.startLoc, _ = a(2, b, d);
    _.items = [];
    let D = null;
    do {
      const Q = D || y.nextToken();
      switch (D = null, Q.type) {
        case 0:
          Q.value == null && s(y, z.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ht(Q)), _.items.push(r(y, Q.value || ""));
          break;
        case 5:
          Q.value == null && s(y, z.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ht(Q)), _.items.push(o(y, Q.value || ""));
          break;
        case 4:
          Q.value == null && s(y, z.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ht(Q)), _.items.push(l(y, Q.value || ""));
          break;
        case 6:
          Q.value == null && s(y, z.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ht(Q)), _.items.push(c(y, Q.value || ""));
          break;
        case 7: {
          const fe = C(y);
          _.items.push(fe.node), D = fe.nextConsumeToken || null;
          break;
        }
      }
    } while (g.currentType !== 13 && g.currentType !== 1);
    const S = g.currentType === 1 ? g.lastOffset : y.currentOffset(), Y = g.currentType === 1 ? g.lastEndLoc : y.currentPosition();
    return i(_, S, Y), _;
  }
  function E(y, g, b, d) {
    const _ = y.context();
    let D = d.items.length === 0;
    const S = a(1, g, b);
    S.cases = [], S.cases.push(d);
    do {
      const Y = w(y);
      D || (D = Y.items.length === 0), S.cases.push(Y);
    } while (_.currentType !== 13);
    return D && s(y, z.MUST_HAVE_MESSAGES_IN_PLURAL, b, 0), i(S, y.currentOffset(), y.currentPosition()), S;
  }
  function B(y) {
    const g = y.context(), { offset: b, startLoc: d } = g, _ = w(y);
    return g.currentType === 13 ? _ : E(y, b, d, _);
  }
  function k(y) {
    const g = xd(y, Le({}, e)), b = g.context(), d = a(0, b.offset, b.startLoc);
    return t && d.loc && (d.loc.source = y), d.body = B(g), e.onCacheKey && (d.cacheKey = e.onCacheKey(y)), b.currentType !== 13 && s(g, z.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, y[b.offset] || ""), i(d, g.currentOffset(), g.currentPosition()), d;
  }
  return { parse: k };
}
function ht(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function qd(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (i) => (n.helpers.add(i), i) };
}
function Pi(e, t) {
  for (let n = 0; n < e.length; n++)
    ni(e[n], t);
}
function ni(e, t) {
  switch (e.type) {
    case 1:
      Pi(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Pi(e.items, t);
      break;
    case 6: {
      ni(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function Gd(e, t = {}) {
  const n = qd(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ni(e.body, n);
  const s = n.context();
  e.helpers = Array.from(s.helpers);
}
function Kd(e) {
  const t = e.body;
  return t.type === 2 ? Mi(t) : t.cases.forEach((n) => Mi(n)), e;
}
function Mi(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const s = e.items[n];
      if (!(s.type === 3 || s.type === 9) || s.value == null)
        break;
      t.push(s.value);
    }
    if (t.length === e.items.length) {
      e.static = Za(t);
      for (let n = 0; n < e.items.length; n++) {
        const s = e.items[n];
        (s.type === 3 || s.type === 9) && delete s.value;
      }
    }
  }
}
const Xd = "minifier";
function fn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      fn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let s = 0; s < n.length; s++)
        fn(n[s]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let s = 0; s < n.length; s++)
        fn(n[s]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      fn(t.key), t.k = t.key, delete t.key, t.modifier && (fn(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      if (process.env.NODE_ENV !== "production")
        throw $n(z.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: Xd,
          args: [e.type]
        });
  }
  delete e.type;
}
const Qd = "parser";
function Jd(e, t) {
  const { sourceMap: n, filename: s, breakLineCode: a, needIndent: i } = t, r = t.location !== !1, o = {
    filename: s,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: i,
    indentLevel: 0
  };
  r && e.loc && (o.source = e.loc.source);
  const l = () => o;
  function c(k, y) {
    o.code += k;
  }
  function h(k, y = !0) {
    const g = y ? a : "";
    c(i ? g + "  ".repeat(k) : g);
  }
  function v(k = !0) {
    const y = ++o.indentLevel;
    k && h(y);
  }
  function C(k = !0) {
    const y = --o.indentLevel;
    k && h(y);
  }
  function w() {
    h(o.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: v,
    deindent: C,
    newline: w,
    helper: (k) => `_${k}`,
    needIndent: () => o.needIndent
  };
}
function Zd(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), wn(e, t.key), t.modifier ? (e.push(", "), wn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ef(e, t) {
  const { helper: n, needIndent: s } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(s());
  const a = t.items.length;
  for (let i = 0; i < a && (wn(e, t.items[i]), i !== a - 1); i++)
    e.push(", ");
  e.deindent(s()), e.push("])");
}
function tf(e, t) {
  const { helper: n, needIndent: s } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(s());
    const a = t.cases.length;
    for (let i = 0; i < a && (wn(e, t.cases[i]), i !== a - 1); i++)
      e.push(", ");
    e.deindent(s()), e.push("])");
  }
}
function nf(e, t) {
  t.body ? wn(e, t.body) : e.push("null");
}
function wn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      nf(e, t);
      break;
    case 1:
      tf(e, t);
      break;
    case 2:
      ef(e, t);
      break;
    case 6:
      Zd(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw $n(z.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: Qd,
          args: [t.type]
        });
  }
}
const sf = (e, t = {}) => {
  const n = V(t.mode) ? t.mode : "normal", s = V(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, i = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, r = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], l = Jd(e, {
    mode: n,
    filename: s,
    sourceMap: a,
    breakLineCode: i,
    needIndent: r
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(r), o.length > 0 && (l.push(`const { ${Za(o.map((v) => `${v}: _${v}`), ", ")} } = ctx`), l.newline()), l.push("return "), wn(l, e), l.deindent(r), l.push("}"), delete e.helpers;
  const { code: c, map: h } = l.context();
  return {
    ast: e,
    code: c,
    map: h ? h.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function af(e, t = {}) {
  const n = Le({}, t), s = !!n.jit, a = !!n.minify, i = n.optimize == null ? !0 : n.optimize, o = jd(n).parse(e);
  return s ? (i && Kd(o), a && fn(o), { ast: o, code: "" }) : (Gd(o, n), sf(o, n));
}
/*!
  * core-base v11.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function rf() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Xt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Xt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function oa(e) {
  return (n) => of(n, e);
}
function of(e, t) {
  const n = uf(t);
  if (n == null)
    throw xn(
      0
      /* NodeTypes.Resource */
    );
  if (si(n) === 1) {
    const i = df(n);
    return e.plural(i.reduce((r, o) => [
      ...r,
      Bi(e, o)
    ], []));
  } else
    return Bi(e, n);
}
const lf = ["b", "body"];
function uf(e) {
  return Ht(e, lf);
}
const cf = ["c", "cases"];
function df(e) {
  return Ht(e, cf, []);
}
function Bi(e, t) {
  const n = mf(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const s = pf(t).reduce((a, i) => [...a, $a(e, i)], []);
    return e.normalize(s);
  }
}
const ff = ["s", "static"];
function mf(e) {
  return Ht(e, ff);
}
const hf = ["i", "items"];
function pf(e) {
  return Ht(e, hf, []);
}
function $a(e, t) {
  const n = si(t);
  switch (n) {
    case 3:
      return cs(t, n);
    case 9:
      return cs(t, n);
    case 4: {
      const s = t;
      if (ct(s, "k") && s.k)
        return e.interpolate(e.named(s.k));
      if (ct(s, "key") && s.key)
        return e.interpolate(e.named(s.key));
      throw xn(n);
    }
    case 5: {
      const s = t;
      if (ct(s, "i") && Ne(s.i))
        return e.interpolate(e.list(s.i));
      if (ct(s, "index") && Ne(s.index))
        return e.interpolate(e.list(s.index));
      throw xn(n);
    }
    case 6: {
      const s = t, a = wf(s), i = Cf(s);
      return e.linked($a(e, i), a ? $a(e, a) : void 0, e.type);
    }
    case 7:
      return cs(t, n);
    case 8:
      return cs(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const gf = ["t", "type"];
function si(e) {
  return Ht(e, gf);
}
const bf = ["v", "value"];
function cs(e, t) {
  const n = Ht(e, bf);
  if (n)
    return n;
  throw xn(t);
}
const yf = ["m", "modifier"];
function wf(e) {
  return Ht(e, yf);
}
const vf = ["k", "key"];
function Cf(e) {
  const t = Ht(e, vf);
  if (t)
    return t;
  throw xn(
    6
    /* NodeTypes.Linked */
  );
}
function Ht(e, t, n) {
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    if (ct(e, a) && e[a] != null)
      return e[a];
  }
  return n;
}
function xn(e) {
  return new Error(`unhandled node type: ${e}`);
}
const Df = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function _f(e, t) {
  t && Bd(e) && xt(Ms(Df, { source: e }));
}
const $f = (e) => e;
let ds = oe();
function Ut(e) {
  return J(e) && si(e) === 0 && (ct(e, "b") || ct(e, "body"));
}
function Sf(e, t = {}) {
  let n = !1;
  const s = t.onError || Pd;
  return t.onError = (a) => {
    n = !0, s(a);
  }, { ...af(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Ef(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && V(e)) {
    const n = Z(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && _f(e, n);
    const a = (t.onCacheKey || $f)(e), i = ds[a];
    if (i)
      return i;
    const { ast: r, detectError: o } = Sf(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = oa(r);
    return o ? l : ds[a] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !Ut(e))
      return xt(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const s = ds[n];
      return s || (ds[n] = oa(e));
    } else
      return oa(e);
  }
}
let Hn = null;
function If(e) {
  Hn = e;
}
function kf(e, t, n) {
  Hn && Hn.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Tf = /* @__PURE__ */ Af("function:translate");
function Af(e) {
  return (t) => Hn && Hn.emit(e, t);
}
const He = {
  INVALID_ARGUMENT: Nd,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Nf = 24;
function Ot(e) {
  return $n(e, null, process.env.NODE_ENV !== "production" ? { messages: Of } : void 0);
}
const Of = {
  [He.INVALID_ARGUMENT]: "Invalid arguments",
  [He.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [He.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [He.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [He.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [He.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [He.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function ai(e, t) {
  return t.locale != null ? Li(t.locale) : Li(e.locale);
}
let la;
function Li(e) {
  if (V(e))
    return e;
  if (ue(e)) {
    if (e.resolvedOnce && la != null)
      return la;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Id(t))
        throw Ot(He.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return la = t;
    } else
      throw Ot(He.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Ot(He.NOT_SUPPORT_LOCALE_TYPE);
}
function Pf(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Te(t) ? t : J(t) ? Object.keys(t) : V(t) ? [t] : [n]
  ])];
}
function to(e, t, n) {
  const s = V(n) ? n : Yn, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let i = a.__localeChainCache.get(s);
  if (!i) {
    i = [];
    let r = [n];
    for (; Te(r); )
      r = Ri(i, r, t);
    const o = Te(t) || !K(t) ? t : t.default ? t.default : null;
    r = V(o) ? [o] : o, Te(r) && Ri(i, r, !1), a.__localeChainCache.set(s, i);
  }
  return i;
}
function Ri(e, t, n) {
  let s = !0;
  for (let a = 0; a < t.length && Z(s); a++) {
    const i = t[a];
    V(i) && (s = Mf(e, t[a], n));
  }
  return s;
}
function Mf(e, t, n) {
  let s;
  const a = t.split("-");
  do {
    const i = a.join("-");
    s = Bf(e, i, n), a.splice(-1, 1);
  } while (a.length && s === !0);
  return s;
}
function Bf(e, t, n) {
  let s = !1;
  if (!e.includes(t) && (s = !0, t)) {
    s = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (Te(n) || K(n)) && n[a] && (s = n[a]);
  }
  return s;
}
const Yt = [];
Yt[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Yt[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Yt[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Yt[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Yt[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Yt[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Yt[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const Lf = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Rf(e) {
  return Lf.test(e);
}
function Vf(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ff(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return e;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function Wf(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Rf(t) ? Vf(t) : "*" + t;
}
function Uf(e) {
  const t = [];
  let n = -1, s = 0, a = 0, i, r, o, l, c, h, v;
  const C = [];
  C[
    0
    /* Actions.APPEND */
  ] = () => {
    r === void 0 ? r = o : r += o;
  }, C[
    1
    /* Actions.PUSH */
  ] = () => {
    r !== void 0 && (t.push(r), r = void 0);
  }, C[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    C[
      0
      /* Actions.APPEND */
    ](), a++;
  }, C[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (a > 0)
      a--, s = 4, C[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (a = 0, r === void 0 || (r = Wf(r), r === !1))
        return !1;
      C[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function w() {
    const E = e[n + 1];
    if (s === 5 && E === "'" || s === 6 && E === '"')
      return n++, o = "\\" + E, C[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; s !== null; )
    if (n++, i = e[n], !(i === "\\" && w())) {
      if (l = Ff(i), v = Yt[s], c = v[l] || v.l || 8, c === 8 || (s = c[0], c[1] !== void 0 && (h = C[c[1]], h && (o = i, h() === !1))))
        return;
      if (s === 7)
        return t;
    }
}
const Vi = /* @__PURE__ */ new Map();
function xf(e, t) {
  return J(e) ? e[t] : null;
}
function Hf(e, t) {
  if (!J(e))
    return null;
  let n = Vi.get(t);
  if (n || (n = Uf(t), n && Vi.set(t, n)), !n)
    return null;
  const s = n.length;
  let a = e, i = 0;
  for (; i < s; ) {
    const r = a[n[i]];
    if (r === void 0 || ue(a))
      return null;
    a = r, i++;
  }
  return a;
}
const Qe = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Yf = 8, zf = {
  [Qe.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Qe.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Qe.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Qe.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Qe.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Qe.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Qe.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function tn(e, ...t) {
  return Ms(zf[e], ...t);
}
const jf = "11.0.1", Ls = -1, Yn = "en-US", $s = "", Fi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function qf() {
  return {
    upper: (e, t) => t === "text" && V(e) ? e.toUpperCase() : t === "vnode" && J(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && V(e) ? e.toLowerCase() : t === "vnode" && J(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && V(e) ? Fi(e) : t === "vnode" && J(e) && "__v_isVNode" in e ? Fi(e.children) : e
  };
}
let no;
function Gf(e) {
  no = e;
}
let so;
function Kf(e) {
  so = e;
}
let ao;
function Xf(e) {
  ao = e;
}
let io = null;
const Qf = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  io = e;
}, Jf = /* @__NO_SIDE_EFFECTS__ */ () => io;
let ro = null;
const Wi = (e) => {
  ro = e;
}, Zf = () => ro;
let Ui = 0;
function em(e = {}) {
  const t = ue(e.onWarn) ? e.onWarn : xt, n = V(e.version) ? e.version : jf, s = V(e.locale) || ue(e.locale) ? e.locale : Yn, a = ue(s) ? Yn : s, i = Te(e.fallbackLocale) || K(e.fallbackLocale) || V(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, r = K(e.messages) ? e.messages : ua(a), o = K(e.datetimeFormats) ? e.datetimeFormats : ua(a), l = K(e.numberFormats) ? e.numberFormats : ua(a), c = Le(oe(), e.modifiers, qf()), h = e.pluralRules || oe(), v = ue(e.missing) ? e.missing : null, C = Z(e.missingWarn) || yn(e.missingWarn) ? e.missingWarn : !0, w = Z(e.fallbackWarn) || yn(e.fallbackWarn) ? e.fallbackWarn : !0, E = !!e.fallbackFormat, B = !!e.unresolving, k = ue(e.postTranslation) ? e.postTranslation : null, y = K(e.processor) ? e.processor : null, g = Z(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter, d = ue(e.messageCompiler) ? e.messageCompiler : no;
  process.env.NODE_ENV !== "production" && ue(e.messageCompiler) && ei(tn(Qe.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const _ = ue(e.messageResolver) ? e.messageResolver : so || xf, D = ue(e.localeFallbacker) ? e.localeFallbacker : ao || Pf, S = J(e.fallbackContext) ? e.fallbackContext : void 0, Y = e, Q = J(Y.__datetimeFormatters) ? Y.__datetimeFormatters : /* @__PURE__ */ new Map(), fe = J(Y.__numberFormatters) ? Y.__numberFormatters : /* @__PURE__ */ new Map(), ut = J(Y.__meta) ? Y.__meta : {};
  Ui++;
  const Pe = {
    version: n,
    cid: Ui,
    locale: s,
    fallbackLocale: i,
    messages: r,
    modifiers: c,
    pluralRules: h,
    missing: v,
    missingWarn: C,
    fallbackWarn: w,
    fallbackFormat: E,
    unresolving: B,
    postTranslation: k,
    processor: y,
    warnHtmlMessage: g,
    escapeParameter: b,
    messageCompiler: d,
    messageResolver: _,
    localeFallbacker: D,
    fallbackContext: S,
    onWarn: t,
    __meta: ut
  };
  return Pe.datetimeFormats = o, Pe.numberFormats = l, Pe.__datetimeFormatters = Q, Pe.__numberFormatters = fe, process.env.NODE_ENV !== "production" && (Pe.__v_emitter = Y.__v_emitter != null ? Y.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && kf(Pe, n, ut), Pe;
}
const ua = (e) => ({ [e]: oe() });
function Rs(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function oo(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function ii(e, t, n, s, a) {
  const { missing: i, onWarn: r } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = e.__v_emitter;
    o && o.emit("missing", {
      locale: n,
      key: t,
      type: a,
      groupId: `${a}:${t}`
    });
  }
  if (i !== null) {
    const o = i(e, n, t, a);
    return V(o) ? o : t;
  } else
    return process.env.NODE_ENV !== "production" && oo(s, t) && r(tn(Qe.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function On(e, t, n) {
  const s = e;
  s.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function lo(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function tm(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let s = n + 1; s < t.length; s++)
    if (lo(e, t[s]))
      return !0;
  return !1;
}
const xi = typeof Intl < "u", uo = {
  dateTimeFormat: xi && typeof Intl.DateTimeFormat < "u",
  numberFormat: xi && typeof Intl.NumberFormat < "u"
};
function Hi(e, ...t) {
  const { datetimeFormats: n, unresolving: s, fallbackLocale: a, onWarn: i, localeFallbacker: r } = e, { __datetimeFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !uo.dateTimeFormat)
    return i(tn(Qe.CANNOT_FORMAT_DATE)), $s;
  const [l, c, h, v] = Sa(...t), C = Z(h.missingWarn) ? h.missingWarn : e.missingWarn, w = Z(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, E = !!h.part, B = ai(e, h), k = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    B
  );
  if (!V(l) || l === "")
    return new Intl.DateTimeFormat(B, v).format(c);
  let y = {}, g, b = null, d = B, _ = null;
  const D = "datetime format";
  for (let Q = 0; Q < k.length; Q++) {
    if (g = _ = k[Q], process.env.NODE_ENV !== "production" && B !== g && Rs(w, l) && i(tn(Qe.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: g
    })), process.env.NODE_ENV !== "production" && B !== g) {
      const fe = e.__v_emitter;
      fe && fe.emit("fallback", {
        type: D,
        key: l,
        from: d,
        to: _,
        groupId: `${D}:${l}`
      });
    }
    if (y = n[g] || {}, b = y[l], K(b))
      break;
    ii(e, l, g, C, D), d = _;
  }
  if (!K(b) || !V(g))
    return s ? Ls : l;
  let S = `${g}__${l}`;
  Bs(v) || (S = `${S}__${JSON.stringify(v)}`);
  let Y = o.get(S);
  return Y || (Y = new Intl.DateTimeFormat(g, Le({}, b, v)), o.set(S, Y)), E ? Y.formatToParts(c) : Y.format(c);
}
const co = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Sa(...e) {
  const [t, n, s, a] = e, i = oe();
  let r = oe(), o;
  if (V(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Ot(He.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    o = new Date(c);
    try {
      o.toISOString();
    } catch {
      throw Ot(He.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if ($d(t)) {
    if (isNaN(t.getTime()))
      throw Ot(He.INVALID_DATE_ARGUMENT);
    o = t;
  } else if (Ne(t))
    o = t;
  else
    throw Ot(He.INVALID_ARGUMENT);
  return V(n) ? i.key = n : K(n) && Object.keys(n).forEach((l) => {
    co.includes(l) ? r[l] = n[l] : i[l] = n[l];
  }), V(s) ? i.locale = s : K(s) && (r = s), K(a) && (r = a), [i.key || "", o, i, r];
}
function Yi(e, t, n) {
  const s = e;
  for (const a in n) {
    const i = `${t}__${a}`;
    s.__datetimeFormatters.has(i) && s.__datetimeFormatters.delete(i);
  }
}
function zi(e, ...t) {
  const { numberFormats: n, unresolving: s, fallbackLocale: a, onWarn: i, localeFallbacker: r } = e, { __numberFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !uo.numberFormat)
    return i(tn(Qe.CANNOT_FORMAT_NUMBER)), $s;
  const [l, c, h, v] = Ea(...t), C = Z(h.missingWarn) ? h.missingWarn : e.missingWarn, w = Z(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, E = !!h.part, B = ai(e, h), k = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    B
  );
  if (!V(l) || l === "")
    return new Intl.NumberFormat(B, v).format(c);
  let y = {}, g, b = null, d = B, _ = null;
  const D = "number format";
  for (let Q = 0; Q < k.length; Q++) {
    if (g = _ = k[Q], process.env.NODE_ENV !== "production" && B !== g && Rs(w, l) && i(tn(Qe.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: g
    })), process.env.NODE_ENV !== "production" && B !== g) {
      const fe = e.__v_emitter;
      fe && fe.emit("fallback", {
        type: D,
        key: l,
        from: d,
        to: _,
        groupId: `${D}:${l}`
      });
    }
    if (y = n[g] || {}, b = y[l], K(b))
      break;
    ii(e, l, g, C, D), d = _;
  }
  if (!K(b) || !V(g))
    return s ? Ls : l;
  let S = `${g}__${l}`;
  Bs(v) || (S = `${S}__${JSON.stringify(v)}`);
  let Y = o.get(S);
  return Y || (Y = new Intl.NumberFormat(g, Le({}, b, v)), o.set(S, Y)), E ? Y.formatToParts(c) : Y.format(c);
}
const fo = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Ea(...e) {
  const [t, n, s, a] = e, i = oe();
  let r = oe();
  if (!Ne(t))
    throw Ot(He.INVALID_ARGUMENT);
  const o = t;
  return V(n) ? i.key = n : K(n) && Object.keys(n).forEach((l) => {
    fo.includes(l) ? r[l] = n[l] : i[l] = n[l];
  }), V(s) ? i.locale = s : K(s) && (r = s), K(a) && (r = a), [i.key || "", o, i, r];
}
function ji(e, t, n) {
  const s = e;
  for (const a in n) {
    const i = `${t}__${a}`;
    s.__numberFormatters.has(i) && s.__numberFormatters.delete(i);
  }
}
const nm = (e) => e, sm = (e) => "", am = "text", im = (e) => e.length === 0 ? "" : Za(e), rm = kd;
function qi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function om(e) {
  const t = Ne(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ne(e.named.count) || Ne(e.named.n)) ? Ne(e.named.count) ? e.named.count : Ne(e.named.n) ? e.named.n : t : t;
}
function lm(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function um(e = {}) {
  const t = e.locale, n = om(e), s = J(e.pluralRules) && V(t) && ue(e.pluralRules[t]) ? e.pluralRules[t] : qi, a = J(e.pluralRules) && V(t) && ue(e.pluralRules[t]) ? qi : void 0, i = (y) => y[s(n, y.length, a)], r = e.list || [], o = (y) => r[y], l = e.named || oe();
  Ne(e.pluralIndex) && lm(n, l);
  const c = (y) => l[y];
  function h(y, g) {
    const b = ue(e.messages) ? e.messages(y, !!g) : J(e.messages) ? e.messages[y] : !1;
    return b || (e.parent ? e.parent.message(y) : sm);
  }
  const v = (y) => e.modifiers ? e.modifiers[y] : nm, C = K(e.processor) && ue(e.processor.normalize) ? e.processor.normalize : im, w = K(e.processor) && ue(e.processor.interpolate) ? e.processor.interpolate : rm, E = K(e.processor) && V(e.processor.type) ? e.processor.type : am, k = {
    list: o,
    named: c,
    plural: i,
    linked: (y, ...g) => {
      const [b, d] = g;
      let _ = "text", D = "";
      g.length === 1 ? J(b) ? (D = b.modifier || D, _ = b.type || _) : V(b) && (D = b || D) : g.length === 2 && (V(b) && (D = b || D), V(d) && (_ = d || _));
      const S = h(y, !0)(k), Y = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        _ === "vnode" && Te(S) && D ? S[0] : S
      );
      return D ? v(D)(Y, _) : Y;
    },
    message: h,
    type: E,
    interpolate: w,
    normalize: C,
    values: Le(oe(), r, l)
  };
  return k;
}
const Gi = () => "", st = (e) => ue(e);
function Ki(e, ...t) {
  const { fallbackFormat: n, postTranslation: s, unresolving: a, messageCompiler: i, fallbackLocale: r, messages: o } = e, [l, c] = Ia(...t), h = Z(c.missingWarn) ? c.missingWarn : e.missingWarn, v = Z(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, C = Z(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, w = !!c.resolvedMessage, E = V(c.default) || Z(c.default) ? Z(c.default) ? i ? l : () => l : c.default : n ? i ? l : () => l : null, B = n || E != null && (V(E) || ue(E)), k = ai(e, c);
  C && cm(c);
  let [y, g, b] = w ? [
    l,
    k,
    o[k] || oe()
  ] : mo(e, l, k, r, v, h), d = y, _ = l;
  if (!w && !(V(d) || Ut(d) || st(d)) && B && (d = E, _ = d), !w && (!(V(d) || Ut(d) || st(d)) || !V(g)))
    return a ? Ls : l;
  if (process.env.NODE_ENV !== "production" && V(d) && e.messageCompiler == null)
    return xt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let D = !1;
  const S = () => {
    D = !0;
  }, Y = st(d) ? d : ho(e, l, g, d, _, S);
  if (D)
    return d;
  const Q = hm(e, g, b, c), fe = um(Q), ut = dm(e, Y, fe), Pe = s ? s(ut, l) : ut;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const sn = {
      timestamp: Date.now(),
      key: V(l) ? l : st(d) ? d.key : "",
      locale: g || (st(d) ? d.locale : ""),
      format: V(d) ? d : st(d) ? d.source : "",
      message: Pe
    };
    sn.meta = Le({}, e.__meta, /* @__PURE__ */ Jf() || {}), Tf(sn);
  }
  return Pe;
}
function cm(e) {
  Te(e.list) ? e.list = e.list.map((t) => V(t) ? Ti(t) : t) : J(e.named) && Object.keys(e.named).forEach((t) => {
    V(e.named[t]) && (e.named[t] = Ti(e.named[t]));
  });
}
function mo(e, t, n, s, a, i) {
  const { messages: r, onWarn: o, messageResolver: l, localeFallbacker: c } = e, h = c(e, s, n);
  let v = oe(), C, w = null, E = n, B = null;
  const k = "translate";
  for (let y = 0; y < h.length; y++) {
    if (C = B = h[y], process.env.NODE_ENV !== "production" && n !== C && !lo(n, C) && Rs(a, t) && o(tn(Qe.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: C
    })), process.env.NODE_ENV !== "production" && n !== C) {
      const _ = e.__v_emitter;
      _ && _.emit("fallback", {
        type: k,
        key: t,
        from: E,
        to: B,
        groupId: `${k}:${t}`
      });
    }
    v = r[C] || oe();
    let g = null, b, d;
    if (process.env.NODE_ENV !== "production" && dt && (g = window.performance.now(), b = "intlify-message-resolve-start", d = "intlify-message-resolve-end", tt && tt(b)), (w = l(v, t)) === null && (w = v[t]), process.env.NODE_ENV !== "production" && dt) {
      const _ = window.performance.now(), D = e.__v_emitter;
      D && g && w && D.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: w,
        time: _ - g,
        groupId: `${k}:${t}`
      }), b && d && tt && en && (tt(d), en("intlify message resolve", b, d));
    }
    if (V(w) || Ut(w) || st(w))
      break;
    if (!tm(C, h)) {
      const _ = ii(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        C,
        i,
        k
      );
      _ !== t && (w = _);
    }
    E = B;
  }
  return [w, C, v];
}
function ho(e, t, n, s, a, i) {
  const { messageCompiler: r, warnHtmlMessage: o } = e;
  if (st(s)) {
    const C = s;
    return C.locale = C.locale || n, C.key = C.key || t, C;
  }
  if (r == null) {
    const C = () => s;
    return C.locale = n, C.key = t, C;
  }
  let l = null, c, h;
  process.env.NODE_ENV !== "production" && dt && (l = window.performance.now(), c = "intlify-message-compilation-start", h = "intlify-message-compilation-end", tt && tt(c));
  const v = r(s, fm(e, n, a, s, o, i));
  if (process.env.NODE_ENV !== "production" && dt) {
    const C = window.performance.now(), w = e.__v_emitter;
    w && l && w.emit("message-compilation", {
      type: "message-compilation",
      message: s,
      time: C - l,
      groupId: `translate:${t}`
    }), c && h && tt && en && (tt(h), en("intlify message compilation", c, h));
  }
  return v.locale = n, v.key = t, v.source = s, v;
}
function dm(e, t, n) {
  let s = null, a, i;
  process.env.NODE_ENV !== "production" && dt && (s = window.performance.now(), a = "intlify-message-evaluation-start", i = "intlify-message-evaluation-end", tt && tt(a));
  const r = t(n);
  if (process.env.NODE_ENV !== "production" && dt) {
    const o = window.performance.now(), l = e.__v_emitter;
    l && s && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: r,
      time: o - s,
      groupId: `translate:${t.key}`
    }), a && i && tt && en && (tt(i), en("intlify message evaluation", a, i));
  }
  return r;
}
function Ia(...e) {
  const [t, n, s] = e, a = oe();
  if (!V(t) && !Ne(t) && !st(t) && !Ut(t))
    throw Ot(He.INVALID_ARGUMENT);
  const i = Ne(t) ? String(t) : (st(t), t);
  return Ne(n) ? a.plural = n : V(n) ? a.default = n : K(n) && !Bs(n) ? a.named = n : Te(n) && (a.list = n), Ne(s) ? a.plural = s : V(s) ? a.default = s : K(s) && Le(a, s), [i, a];
}
function fm(e, t, n, s, a, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (r) => {
      if (i && i(r), process.env.NODE_ENV !== "production") {
        const o = mm(s), l = `Message compilation error: ${r.message}`, c = r.location && o && Td(o, r.location.start.offset, r.location.end.offset), h = e.__v_emitter;
        h && o && h.emit("compile-error", {
          message: o,
          error: r.message,
          start: r.location && r.location.start.offset,
          end: r.location && r.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(c ? `${l}
${c}` : l);
      } else
        throw r;
    },
    onCacheKey: (r) => Dd(t, n, r)
  };
}
function mm(e) {
  if (V(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function hm(e, t, n, s) {
  const { modifiers: a, pluralRules: i, messageResolver: r, fallbackLocale: o, fallbackWarn: l, missingWarn: c, fallbackContext: h } = e, C = {
    locale: t,
    modifiers: a,
    pluralRules: i,
    messages: (w, E) => {
      let B = r(n, w);
      if (B == null && (h || E)) {
        const [, , k] = mo(
          h || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          w,
          t,
          o,
          l,
          c
        );
        B = r(k, w);
      }
      if (V(B) || Ut(B)) {
        let k = !1;
        const g = ho(e, w, t, B, w, () => {
          k = !0;
        });
        return k ? Gi : g;
      } else return st(B) ? B : Gi;
    }
  };
  return e.processor && (C.processor = e.processor), s.list && (C.list = s.list), s.named && (C.named = s.named), Ne(s.plural) && (C.pluralIndex = s.plural), C;
}
rf();
function pm() {
  return po().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function po() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const gm = typeof Proxy == "function", bm = "devtools-plugin:setup", ym = "plugin:settings:set";
let un, ka;
function wm() {
  var e;
  return un !== void 0 || (typeof window < "u" && window.performance ? (un = !0, ka = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (un = !0, ka = globalThis.perf_hooks.performance) : un = !1), un;
}
function vm() {
  return wm() ? ka.now() : Date.now();
}
class Cm {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const r in t.settings) {
        const o = t.settings[r];
        s[r] = o.defaultValue;
      }
    const a = `__vue-devtools-plugin-settings__${t.id}`;
    let i = Object.assign({}, s);
    try {
      const r = localStorage.getItem(a), o = JSON.parse(r);
      Object.assign(i, o);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return i;
      },
      setSettings(r) {
        try {
          localStorage.setItem(a, JSON.stringify(r));
        } catch {
        }
        i = r;
      },
      now() {
        return vm();
      }
    }, n && n.on(ym, (r, o) => {
      r === this.plugin.id && this.fallbacks.setSettings(o);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, o) => this.target ? this.target.on[o] : (...l) => {
        this.onQueue.push({
          method: o,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, o) => this.target ? this.target[o] : o === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(o) ? (...l) => (this.targetQueue.push({
        method: o,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[o](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: o,
          args: l,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Dm(e, t) {
  const n = e, s = po(), a = pm(), i = gm && n.enableEarlyProxy;
  if (a && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
    a.emit(bm, e, t);
  else {
    const r = i ? new Cm(n, a) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: r
    }), r && t(r.proxiedTarget);
  }
}
/*!
  * vue-i18n v11.0.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const _m = "11.0.1";
function $m() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Xt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Xt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Xt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Xt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const he = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Nf,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function Je(e, ...t) {
  return $n(e, null, process.env.NODE_ENV !== "production" ? { messages: Sm, args: t } : void 0);
}
const Sm = {
  [he.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [he.INVALID_ARGUMENT]: "Invalid argument",
  [he.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [he.NOT_INSTALLED]: "Need to install with `app.use` function",
  [he.UNEXPECTED_ERROR]: "Unexpected error",
  [he.REQUIRED_VALUE]: "Required in value: {0}",
  [he.INVALID_VALUE]: "Invalid value",
  [he.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [he.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [he.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [he.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Ta = /* @__PURE__ */ St("__translateVNode"), Aa = /* @__PURE__ */ St("__datetimeParts"), Na = /* @__PURE__ */ St("__numberParts"), nn = /* @__PURE__ */ St("__enableEmitter"), zn = /* @__PURE__ */ St("__disableEmitter"), go = St("__setPluralRules"), bo = /* @__PURE__ */ St("__injectWithOption"), Oa = /* @__PURE__ */ St("__dispose"), Ct = {
  FALLBACK_TO_ROOT: Yf,
  // 8
  NOT_FOUND_PARENT_SCOPE: 9,
  IGNORE_OBJ_FLATTEN: 10,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_LEGACY_MODE: 11,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 12
}, Em = {
  [Ct.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Ct.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Ct.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [Ct.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [Ct.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead."
};
function es(e, ...t) {
  return Ms(Em[e], ...t);
}
function jn(e) {
  if (!J(e))
    return e;
  for (const t in e)
    if (ct(e, t))
      if (!t.includes("."))
        J(e[t]) && jn(e[t]);
      else {
        const n = t.split("."), s = n.length - 1;
        let a = e, i = !1;
        for (let r = 0; r < s; r++) {
          if (n[r] in a || (a[n[r]] = oe()), !J(a[n[r]])) {
            process.env.NODE_ENV !== "production" && xt(es(Ct.IGNORE_OBJ_FLATTEN, {
              key: n[r]
            })), i = !0;
            break;
          }
          a = a[n[r]];
        }
        i || (a[n[s]] = e[t], delete e[t]), J(a[n[s]]) && jn(a[n[s]]);
      }
  return e;
}
function ri(e, t) {
  const { messages: n, __i18n: s, messageResolver: a, flatJson: i } = t, r = K(n) ? n : Te(s) ? oe() : { [e]: oe() };
  if (Te(s) && s.forEach((o) => {
    if ("locale" in o && "resource" in o) {
      const { locale: l, resource: c } = o;
      l ? (r[l] = r[l] || oe(), ys(c, r[l])) : ys(c, r);
    } else
      V(o) && ys(JSON.parse(o), r);
  }), a == null && i)
    for (const o in r)
      ct(r, o) && jn(r[o]);
  return r;
}
function yo(e) {
  return e.type;
}
function wo(e, t, n) {
  let s = J(t.messages) ? t.messages : oe();
  "__i18nGlobal" in n && (s = ri(e.locale.value, {
    messages: s,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(s);
  a.length && a.forEach((i) => {
    e.mergeLocaleMessage(i, s[i]);
  });
  {
    if (J(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length && i.forEach((r) => {
        e.mergeDateTimeFormat(r, t.datetimeFormats[r]);
      });
    }
    if (J(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach((r) => {
        e.mergeNumberFormat(r, t.numberFormats[r]);
      });
    }
  }
}
function Xi(e) {
  return W(jo, null, e, 0);
}
const Qi = "__INTLIFY_META__", Ji = () => [], Im = () => !1;
let Zi = 0;
function er(e) {
  return (t, n, s, a) => e(n, s, gn() || void 0, a);
}
const km = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = gn();
  let t = null;
  return e && (t = yo(e)[Qi]) ? { [Qi]: t } : null;
};
function oi(e = {}) {
  const { __root: t, __injectWithOption: n } = e, s = t === void 0, a = e.flatJson, i = dt ? at : zo;
  let r = Z(e.inheritLocale) ? e.inheritLocale : !0;
  const o = i(
    // prettier-ignore
    t && r ? t.locale.value : V(e.locale) ? e.locale : Yn
  ), l = i(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : V(e.fallbackLocale) || Te(e.fallbackLocale) || K(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), c = i(ri(o.value, e)), h = i(K(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), v = i(K(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let C = t ? t.missingWarn : Z(e.missingWarn) || yn(e.missingWarn) ? e.missingWarn : !0, w = t ? t.fallbackWarn : Z(e.fallbackWarn) || yn(e.fallbackWarn) ? e.fallbackWarn : !0, E = t ? t.fallbackRoot : Z(e.fallbackRoot) ? e.fallbackRoot : !0, B = !!e.fallbackFormat, k = ue(e.missing) ? e.missing : null, y = ue(e.missing) ? er(e.missing) : null, g = ue(e.postTranslation) ? e.postTranslation : null, b = t ? t.warnHtmlMessage : Z(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, d = !!e.escapeParameter;
  const _ = t ? t.modifiers : K(e.modifiers) ? e.modifiers : {};
  let D = e.pluralRules || t && t.pluralRules, S;
  S = (() => {
    s && Wi(null);
    const $ = {
      version: _m,
      locale: o.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: _,
      pluralRules: D,
      missing: y === null ? void 0 : y,
      missingWarn: C,
      fallbackWarn: w,
      fallbackFormat: B,
      unresolving: !0,
      postTranslation: g === null ? void 0 : g,
      warnHtmlMessage: b,
      escapeParameter: d,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    $.datetimeFormats = h.value, $.numberFormats = v.value, $.__datetimeFormatters = K(S) ? S.__datetimeFormatters : void 0, $.__numberFormatters = K(S) ? S.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && ($.__v_emitter = K(S) ? S.__v_emitter : void 0);
    const O = em($);
    return s && Wi(O), O;
  })(), On(S, o.value, l.value);
  function Q() {
    return [
      o.value,
      l.value,
      c.value,
      h.value,
      v.value
    ];
  }
  const fe = et({
    get: () => o.value,
    set: ($) => {
      o.value = $, S.locale = o.value;
    }
  }), ut = et({
    get: () => l.value,
    set: ($) => {
      l.value = $, S.fallbackLocale = l.value, On(S, o.value, $);
    }
  }), Pe = et(() => c.value), sn = /* @__PURE__ */ et(() => h.value), Hs = /* @__PURE__ */ et(() => v.value);
  function Ys() {
    return ue(g) ? g : null;
  }
  function zs($) {
    g = $, S.postTranslation = $;
  }
  function js() {
    return k;
  }
  function qs($) {
    $ !== null && (y = er($)), k = $, S.missing = y;
  }
  function Gs($, O) {
    return $ !== "translate" || !O.resolvedMessage;
  }
  const Et = ($, O, ne, $e, jt, as) => {
    Q();
    let an;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (S.fallbackContext = t ? Zf() : void 0), an = $(S);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (S.fallbackContext = void 0);
    }
    if (ne !== "translate exists" && // for not `te` (e.g `t`)
    Ne(an) && an === Ls || ne === "translate exists" && !an) {
      const [qt, Ro] = O();
      if (process.env.NODE_ENV !== "production" && t && V(qt) && Gs(ne, Ro) && (E && (Rs(w, qt) || oo(C, qt)) && xt(es(Ct.FALLBACK_TO_ROOT, {
        key: qt,
        type: ne
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: pi } = S;
        pi && E && pi.emit("fallback", {
          type: ne,
          key: qt,
          to: "global",
          groupId: `${ne}:${qt}`
        });
      }
      return t && E ? $e(t) : jt(qt);
    } else {
      if (as(an))
        return an;
      throw Je(he.UNEXPECTED_RETURN_TYPE);
    }
  };
  function En(...$) {
    return Et((O) => Reflect.apply(Ki, null, [O, ...$]), () => Ia(...$), "translate", (O) => Reflect.apply(O.t, O, [...$]), (O) => O, (O) => V(O));
  }
  function Ks(...$) {
    const [O, ne, $e] = $;
    if ($e && !J($e))
      throw Je(he.INVALID_ARGUMENT);
    return En(O, ne, Le({ resolvedMessage: !0 }, $e || {}));
  }
  function Xs(...$) {
    return Et((O) => Reflect.apply(Hi, null, [O, ...$]), () => Sa(...$), "datetime format", (O) => Reflect.apply(O.d, O, [...$]), () => $s, (O) => V(O));
  }
  function Qs(...$) {
    return Et((O) => Reflect.apply(zi, null, [O, ...$]), () => Ea(...$), "number format", (O) => Reflect.apply(O.n, O, [...$]), () => $s, (O) => V(O));
  }
  function Js($) {
    return $.map((O) => V(O) || Ne(O) || Z(O) ? Xi(String(O)) : O);
  }
  const Zs = {
    normalize: Js,
    interpolate: ($) => $,
    type: "vnode"
  };
  function ss(...$) {
    return Et((O) => {
      let ne;
      const $e = O;
      try {
        $e.processor = Zs, ne = Reflect.apply(Ki, null, [$e, ...$]);
      } finally {
        $e.processor = null;
      }
      return ne;
    }, () => Ia(...$), "translate", (O) => O[Ta](...$), (O) => [Xi(O)], (O) => Te(O));
  }
  function ea(...$) {
    return Et((O) => Reflect.apply(zi, null, [O, ...$]), () => Ea(...$), "number format", (O) => O[Na](...$), Ji, (O) => V(O) || Te(O));
  }
  function ta(...$) {
    return Et((O) => Reflect.apply(Hi, null, [O, ...$]), () => Sa(...$), "datetime format", (O) => O[Aa](...$), Ji, (O) => V(O) || Te(O));
  }
  function na($) {
    D = $, S.pluralRules = D;
  }
  function sa($, O) {
    return Et(() => {
      if (!$)
        return !1;
      const ne = V(O) ? O : o.value, $e = zt(ne), jt = S.messageResolver($e, $);
      return Ut(jt) || st(jt) || V(jt);
    }, () => [$], "translate exists", (ne) => Reflect.apply(ne.te, ne, [$, O]), Im, (ne) => Z(ne));
  }
  function In($) {
    let O = null;
    const ne = to(S, l.value, o.value);
    for (let $e = 0; $e < ne.length; $e++) {
      const jt = c.value[ne[$e]] || {}, as = S.messageResolver(jt, $);
      if (as != null) {
        O = as;
        break;
      }
    }
    return O;
  }
  function kn($) {
    const O = In($);
    return O ?? (t ? t.tm($) || {} : {});
  }
  function zt($) {
    return c.value[$] || {};
  }
  function Tn($, O) {
    if (a) {
      const ne = { [$]: O };
      for (const $e in ne)
        ct(ne, $e) && jn(ne[$e]);
      O = ne[$];
    }
    c.value[$] = O, S.messages = c.value;
  }
  function aa($, O) {
    c.value[$] = c.value[$] || {};
    const ne = { [$]: O };
    if (a)
      for (const $e in ne)
        ct(ne, $e) && jn(ne[$e]);
    O = ne[$], ys(O, c.value[$]), S.messages = c.value;
  }
  function f($) {
    return h.value[$] || {};
  }
  function p($, O) {
    h.value[$] = O, S.datetimeFormats = h.value, Yi(S, $, O);
  }
  function A($, O) {
    h.value[$] = Le(h.value[$] || {}, O), S.datetimeFormats = h.value, Yi(S, $, O);
  }
  function x($) {
    return v.value[$] || {};
  }
  function De($, O) {
    v.value[$] = O, S.numberFormats = v.value, ji(S, $, O);
  }
  function _e($, O) {
    v.value[$] = Le(v.value[$] || {}, O), S.numberFormats = v.value, ji(S, $, O);
  }
  Zi++, t && dt && (ya(t.locale, ($) => {
    r && (o.value = $, S.locale = $, On(S, o.value, l.value));
  }), ya(t.fallbackLocale, ($) => {
    r && (l.value = $, S.fallbackLocale = $, On(S, o.value, l.value));
  }));
  const ee = {
    id: Zi,
    locale: fe,
    fallbackLocale: ut,
    get inheritLocale() {
      return r;
    },
    set inheritLocale($) {
      r = $, $ && t && (o.value = t.locale.value, l.value = t.fallbackLocale.value, On(S, o.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: Pe,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return D || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return C;
    },
    set missingWarn($) {
      C = $, S.missingWarn = C;
    },
    get fallbackWarn() {
      return w;
    },
    set fallbackWarn($) {
      w = $, S.fallbackWarn = w;
    },
    get fallbackRoot() {
      return E;
    },
    set fallbackRoot($) {
      E = $;
    },
    get fallbackFormat() {
      return B;
    },
    set fallbackFormat($) {
      B = $, S.fallbackFormat = B;
    },
    get warnHtmlMessage() {
      return b;
    },
    set warnHtmlMessage($) {
      b = $, S.warnHtmlMessage = $;
    },
    get escapeParameter() {
      return d;
    },
    set escapeParameter($) {
      d = $, S.escapeParameter = $;
    },
    t: En,
    getLocaleMessage: zt,
    setLocaleMessage: Tn,
    mergeLocaleMessage: aa,
    getPostTranslationHandler: Ys,
    setPostTranslationHandler: zs,
    getMissingHandler: js,
    setMissingHandler: qs,
    [go]: na
  };
  return ee.datetimeFormats = sn, ee.numberFormats = Hs, ee.rt = Ks, ee.te = sa, ee.tm = kn, ee.d = Xs, ee.n = Qs, ee.getDateTimeFormat = f, ee.setDateTimeFormat = p, ee.mergeDateTimeFormat = A, ee.getNumberFormat = x, ee.setNumberFormat = De, ee.mergeNumberFormat = _e, ee[bo] = n, ee[Ta] = ss, ee[Aa] = ta, ee[Na] = ea, process.env.NODE_ENV !== "production" && (ee[nn] = ($) => {
    S.__v_emitter = $;
  }, ee[zn] = () => {
    S.__v_emitter = void 0;
  }), ee;
}
const vo = "vue-i18n: composer properties", ca = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
  "vue-i18n-resource-inspector": "Vue I18n DevTools",
  "vue-i18n-timeline": "Vue I18n"
}, Tm = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, Am = {
  "vue-i18n-timeline": 16764185
};
let Pa;
async function Nm(e, t) {
  return new Promise((n, s) => {
    try {
      Dm({
        id: "vue-devtools-plugin-vue-i18n",
        label: ca["vue-devtools-plugin-vue-i18n"],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [vo],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (a) => {
        Pa = a, a.on.visitComponentTree(({ componentInstance: r, treeNode: o }) => {
          Om(r, o, t);
        }), a.on.inspectComponent(({ componentInstance: r, instanceData: o }) => {
          r.vnode.el && r.vnode.el.__VUE_I18N__ && o && (t.mode === "legacy" ? r.vnode.el.__VUE_I18N__ !== t.global.__composer && tr(o, r.vnode.el.__VUE_I18N__) : tr(o, r.vnode.el.__VUE_I18N__));
        }), a.addInspector({
          id: "vue-i18n-resource-inspector",
          label: ca["vue-i18n-resource-inspector"],
          icon: "language",
          treeFilterPlaceholder: Tm["vue-i18n-resource-inspector"]
        }), a.on.getInspectorTree((r) => {
          r.app === e && r.inspectorId === "vue-i18n-resource-inspector" && Rm(r, t);
        });
        const i = /* @__PURE__ */ new Map();
        a.on.getInspectorState(async (r) => {
          if (r.app === e && r.inspectorId === "vue-i18n-resource-inspector")
            if (a.unhighlightElement(), Fm(r, t), r.nodeId === "global") {
              if (!i.has(r.app)) {
                const [o] = await a.getComponentInstances(r.app);
                i.set(r.app, o);
              }
              a.highlightElement(i.get(r.app));
            } else {
              const o = Vm(r.nodeId, t);
              o && a.highlightElement(o);
            }
        }), a.on.editInspectorState((r) => {
          r.app === e && r.inspectorId === "vue-i18n-resource-inspector" && Um(r, t);
        }), a.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: ca["vue-i18n-timeline"],
          color: Am["vue-i18n-timeline"]
        }), n(!0);
      });
    } catch (a) {
      console.error(a), s(!1);
    }
  });
}
function Co(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function Om(e, t, n) {
  const s = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== s) {
    const a = {
      label: `i18n (${Co(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(a);
  }
}
function tr(e, t) {
  const n = vo;
  e.state.push({
    type: n,
    key: "locale",
    editable: !0,
    value: t.locale.value
  }), e.state.push({
    type: n,
    key: "availableLocales",
    editable: !1,
    value: t.availableLocales
  }), e.state.push({
    type: n,
    key: "fallbackLocale",
    editable: !0,
    value: t.fallbackLocale.value
  }), e.state.push({
    type: n,
    key: "inheritLocale",
    editable: !0,
    value: t.inheritLocale
  }), e.state.push({
    type: n,
    key: "messages",
    editable: !1,
    value: li(t.messages.value)
  }), e.state.push({
    type: n,
    key: "datetimeFormats",
    editable: !1,
    value: t.datetimeFormats.value
  }), e.state.push({
    type: n,
    key: "numberFormats",
    editable: !1,
    value: t.numberFormats.value
  });
}
function li(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const s = e[n];
    ue(s) && "source" in s ? t[n] = Lm(s) : Ut(s) && s.loc && s.loc.source ? t[n] = s.loc.source : J(s) ? t[n] = li(s) : t[n] = s;
  }), t;
}
const Pm = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function Mm(e) {
  return e.replace(/[<>"&]/g, Bm);
}
function Bm(e) {
  return Pm[e] || e;
}
function Lm(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${Mm(e.source)}")` : "(?)"}`
    }
  };
}
function Rm(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [s, a] of t.__instances) {
    const i = t.mode === "composition" ? a : a.__composer;
    n !== i && e.rootNodes.push({
      id: i.id.toString(),
      label: `${Co(s)} Scope`
    });
  }
}
function Vm(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [s, a] of t.__instances.entries())
      if (a.id.toString() === e) {
        n = s;
        break;
      }
  }
  return n;
}
function Do(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((s) => s.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function Fm(e, t) {
  const n = Do(e.nodeId, t);
  return n && (e.state = Wm(n)), null;
}
function Wm(e) {
  const t = {}, n = "Locale related info", s = [
    {
      type: n,
      key: "locale",
      editable: !0,
      value: e.locale.value
    },
    {
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: e.fallbackLocale.value
    },
    {
      type: n,
      key: "availableLocales",
      editable: !1,
      value: e.availableLocales
    },
    {
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: e.inheritLocale
    }
  ];
  t[n] = s;
  const a = "Locale messages info", i = [
    {
      type: a,
      key: "messages",
      editable: !1,
      value: li(e.messages.value)
    }
  ];
  t[a] = i;
  {
    const r = "Datetime formats info", o = [
      {
        type: r,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[r] = o;
    const l = "Datetime formats info", c = [
      {
        type: l,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[l] = c;
  }
  return t;
}
function qn(e, t) {
  if (Pa) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Pa.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: e,
        groupId: n,
        time: Date.now(),
        meta: {},
        data: t || {},
        logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
      }
    });
  }
}
function Um(e, t) {
  const n = Do(e.nodeId, t);
  if (n) {
    const [s] = e.path;
    s === "locale" && V(e.state.value) ? n.locale.value = e.state.value : s === "fallbackLocale" && (V(e.state.value) || Te(e.state.value) || J(e.state.value)) ? n.fallbackLocale.value = e.state.value : s === "inheritLocale" && Z(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function xm(e) {
  const t = V(e.locale) ? e.locale : Yn, n = V(e.fallbackLocale) || Te(e.fallbackLocale) || K(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, s = ue(e.missing) ? e.missing : void 0, a = Z(e.silentTranslationWarn) || yn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, i = Z(e.silentFallbackWarn) || yn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, r = Z(e.fallbackRoot) ? e.fallbackRoot : !0, o = !!e.formatFallbackMessages, l = K(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, h = ue(e.postTranslation) ? e.postTranslation : void 0, v = V(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, C = !!e.escapeParameterHtml, w = Z(e.sync) ? e.sync : !0;
  let E = e.messages;
  if (K(e.sharedMessages)) {
    const _ = e.sharedMessages;
    E = Object.keys(_).reduce((S, Y) => {
      const Q = S[Y] || (S[Y] = {});
      return Le(Q, _[Y]), S;
    }, E || {});
  }
  const { __i18n: B, __root: k, __injectWithOption: y } = e, g = e.datetimeFormats, b = e.numberFormats, d = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: E,
    flatJson: d,
    datetimeFormats: g,
    numberFormats: b,
    missing: s,
    missingWarn: a,
    fallbackWarn: i,
    fallbackRoot: r,
    fallbackFormat: o,
    modifiers: l,
    pluralRules: c,
    postTranslation: h,
    warnHtmlMessage: v,
    escapeParameter: C,
    messageResolver: e.messageResolver,
    inheritLocale: w,
    __i18n: B,
    __root: k,
    __injectWithOption: y
  };
}
function Ma(e = {}) {
  const t = oi(xm(e)), { __extender: n } = e, s = {
    // id
    id: t.id,
    // locale
    get locale() {
      return t.locale.value;
    },
    set locale(a) {
      t.locale.value = a;
    },
    // fallbackLocale
    get fallbackLocale() {
      return t.fallbackLocale.value;
    },
    set fallbackLocale(a) {
      t.fallbackLocale.value = a;
    },
    // messages
    get messages() {
      return t.messages.value;
    },
    // datetimeFormats
    get datetimeFormats() {
      return t.datetimeFormats.value;
    },
    // numberFormats
    get numberFormats() {
      return t.numberFormats.value;
    },
    // availableLocales
    get availableLocales() {
      return t.availableLocales;
    },
    // missing
    get missing() {
      return t.getMissingHandler();
    },
    set missing(a) {
      t.setMissingHandler(a);
    },
    // silentTranslationWarn
    get silentTranslationWarn() {
      return Z(t.missingWarn) ? !t.missingWarn : t.missingWarn;
    },
    set silentTranslationWarn(a) {
      t.missingWarn = Z(a) ? !a : a;
    },
    // silentFallbackWarn
    get silentFallbackWarn() {
      return Z(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
    },
    set silentFallbackWarn(a) {
      t.fallbackWarn = Z(a) ? !a : a;
    },
    // modifiers
    get modifiers() {
      return t.modifiers;
    },
    // formatFallbackMessages
    get formatFallbackMessages() {
      return t.fallbackFormat;
    },
    set formatFallbackMessages(a) {
      t.fallbackFormat = a;
    },
    // postTranslation
    get postTranslation() {
      return t.getPostTranslationHandler();
    },
    set postTranslation(a) {
      t.setPostTranslationHandler(a);
    },
    // sync
    get sync() {
      return t.inheritLocale;
    },
    set sync(a) {
      t.inheritLocale = a;
    },
    // warnInHtmlMessage
    get warnHtmlInMessage() {
      return t.warnHtmlMessage ? "warn" : "off";
    },
    set warnHtmlInMessage(a) {
      t.warnHtmlMessage = a !== "off";
    },
    // escapeParameterHtml
    get escapeParameterHtml() {
      return t.escapeParameter;
    },
    set escapeParameterHtml(a) {
      t.escapeParameter = a;
    },
    // pluralizationRules
    get pluralizationRules() {
      return t.pluralRules || {};
    },
    // for internal
    __composer: t,
    // t
    t(...a) {
      return Reflect.apply(t.t, t, [...a]);
    },
    // rt
    rt(...a) {
      return Reflect.apply(t.rt, t, [...a]);
    },
    // te
    te(a, i) {
      return t.te(a, i);
    },
    // tm
    tm(a) {
      return t.tm(a);
    },
    // getLocaleMessage
    getLocaleMessage(a) {
      return t.getLocaleMessage(a);
    },
    // setLocaleMessage
    setLocaleMessage(a, i) {
      t.setLocaleMessage(a, i);
    },
    // mergeLocaleMessage
    mergeLocaleMessage(a, i) {
      t.mergeLocaleMessage(a, i);
    },
    // d
    d(...a) {
      return Reflect.apply(t.d, t, [...a]);
    },
    // getDateTimeFormat
    getDateTimeFormat(a) {
      return t.getDateTimeFormat(a);
    },
    // setDateTimeFormat
    setDateTimeFormat(a, i) {
      t.setDateTimeFormat(a, i);
    },
    // mergeDateTimeFormat
    mergeDateTimeFormat(a, i) {
      t.mergeDateTimeFormat(a, i);
    },
    // n
    n(...a) {
      return Reflect.apply(t.n, t, [...a]);
    },
    // getNumberFormat
    getNumberFormat(a) {
      return t.getNumberFormat(a);
    },
    // setNumberFormat
    setNumberFormat(a, i) {
      t.setNumberFormat(a, i);
    },
    // mergeNumberFormat
    mergeNumberFormat(a, i) {
      t.mergeNumberFormat(a, i);
    }
  };
  return s.__extender = n, process.env.NODE_ENV !== "production" && (s.__enableEmitter = (a) => {
    const i = t;
    i[nn] && i[nn](a);
  }, s.__disableEmitter = () => {
    const a = t;
    a[zn] && a[zn]();
  }), s;
}
function Hm(e, t, n) {
  return {
    beforeCreate() {
      const s = gn();
      if (!s)
        throw Je(he.UNEXPECTED_ERROR);
      const a = this.$options;
      if (a.i18n) {
        const i = a.i18n;
        if (a.__i18n && (i.__i18n = a.__i18n), i.__root = t, this === this.$root)
          this.$i18n = nr(e, i);
        else {
          i.__injectWithOption = !0, i.__extender = n.__vueI18nExtend, this.$i18n = Ma(i);
          const r = this.$i18n;
          r.__extender && (r.__disposer = r.__extender(this.$i18n));
        }
      } else if (a.__i18n)
        if (this === this.$root)
          this.$i18n = nr(e, a);
        else {
          this.$i18n = Ma({
            __i18n: a.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      a.__i18nGlobal && wo(t, a, a), this.$t = (...i) => this.$i18n.t(...i), this.$rt = (...i) => this.$i18n.rt(...i), this.$te = (i, r) => this.$i18n.te(i, r), this.$d = (...i) => this.$i18n.d(...i), this.$n = (...i) => this.$i18n.n(...i), this.$tm = (i) => this.$i18n.tm(i), n.__setInstance(s, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const s = this.$i18n;
        this.$el.__VUE_I18N__ = s.__composer;
        const a = this.__v_emitter = ti();
        s.__enableEmitter && s.__enableEmitter(a), a.on("*", qn);
      }
    },
    unmounted() {
      const s = gn();
      if (!s)
        throw Je(he.UNEXPECTED_ERROR);
      const a = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", qn), delete this.__v_emitter), this.$i18n && (a.__disableEmitter && a.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, a.__disposer && (a.__disposer(), delete a.__disposer, delete a.__extender), n.__deleteInstance(s), delete this.$i18n;
    }
  };
}
function nr(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[go](t.pluralizationRules || e.pluralizationRules);
  const n = ri(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((s) => e.mergeLocaleMessage(s, n[s])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((s) => e.mergeDateTimeFormat(s, t.datetimeFormats[s])), t.numberFormats && Object.keys(t.numberFormats).forEach((s) => e.mergeNumberFormat(s, t.numberFormats[s])), e;
}
const ui = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Ym({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((s, a) => [
    ...s,
    // prettier-ignore
    ...a.type === ce ? a.children : [a]
  ], []) : t.reduce((n, s) => {
    const a = e[s];
    return a && (n[s] = a()), n;
  }, oe());
}
function _o() {
  return ce;
}
const zm = /* @__PURE__ */ R({
  /* eslint-disable */
  name: "i18n-t",
  props: Le({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => Ne(e) || !isNaN(e)
    }
  }, ui),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: s } = t, a = e.i18n || ci({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const i = Object.keys(n).filter((v) => v !== "_"), r = oe();
      e.locale && (r.locale = e.locale), e.plural !== void 0 && (r.plural = V(e.plural) ? +e.plural : e.plural);
      const o = Ym(t, i), l = a[Ta](e.keypath, o, r), c = Le(oe(), s), h = V(e.tag) || J(e.tag) ? e.tag : _o();
      return Ss(h, c, l);
    };
  }
}), sr = zm;
function jm(e) {
  return Te(e) && !V(e[0]);
}
function $o(e, t, n, s) {
  const { slots: a, attrs: i } = t;
  return () => {
    const r = { part: !0 };
    let o = oe();
    e.locale && (r.locale = e.locale), V(e.format) ? r.key = e.format : J(e.format) && (V(e.format.key) && (r.key = e.format.key), o = Object.keys(e.format).reduce((C, w) => n.includes(w) ? Le(oe(), C, { [w]: e.format[w] }) : C, oe()));
    const l = s(e.value, r, o);
    let c = [r.key];
    Te(l) ? c = l.map((C, w) => {
      const E = a[C.type], B = E ? E({ [C.type]: C.value, index: w, parts: l }) : [C.value];
      return jm(B) && (B[0].key = `${C.type}-${w}`), B;
    }) : V(l) && (c = [l]);
    const h = Le(oe(), i), v = V(e.tag) || J(e.tag) ? e.tag : _o();
    return Ss(v, h, c);
  };
}
const qm = /* @__PURE__ */ R({
  /* eslint-disable */
  name: "i18n-n",
  props: Le({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ui),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || ci({
      useScope: e.scope,
      __useComponent: !0
    });
    return $o(e, t, fo, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Na](...s)
    ));
  }
}), ar = qm;
function Gm(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const s = n.__getInstance(t);
    return s != null ? s.__composer : e.global.__composer;
  }
}
function Km(e) {
  const t = (r) => {
    process.env.NODE_ENV !== "production" && ei(es(Ct.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE));
    const { instance: o, value: l } = r;
    if (!o || !o.$)
      throw Je(he.UNEXPECTED_ERROR);
    const c = Gm(e, o.$), h = ir(l);
    return [
      Reflect.apply(c.t, c, [...rr(h)]),
      c
    ];
  };
  return {
    created: (r, o) => {
      const [l, c] = t(o);
      dt && e.global === c && (r.__i18nWatcher = ya(c.locale, () => {
        o.instance && o.instance.$forceUpdate();
      })), r.__composer = c, r.textContent = l;
    },
    unmounted: (r) => {
      dt && r.__i18nWatcher && (r.__i18nWatcher(), r.__i18nWatcher = void 0, delete r.__i18nWatcher), r.__composer && (r.__composer = void 0, delete r.__composer);
    },
    beforeUpdate: (r, { value: o }) => {
      if (r.__composer) {
        const l = r.__composer, c = ir(o);
        r.textContent = Reflect.apply(l.t, l, [
          ...rr(c)
        ]);
      }
    },
    getSSRProps: (r) => {
      const [o] = t(r);
      return { textContent: o };
    }
  };
}
function ir(e) {
  if (V(e))
    return { path: e };
  if (K(e)) {
    if (!("path" in e))
      throw Je(he.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Je(he.INVALID_VALUE);
}
function rr(e) {
  const { path: t, locale: n, args: s, choice: a, plural: i } = e, r = {}, o = s || {};
  return V(n) && (r.locale = n), Ne(a) && (r.plural = a), Ne(i) && (r.plural = i), [t, o, r];
}
function Xm(e, t, ...n) {
  const s = K(n[0]) ? n[0] : {};
  (Z(s.globalInstall) ? s.globalInstall : !0) && ([sr.name, "I18nT"].forEach((i) => e.component(i, sr)), [ar.name, "I18nN"].forEach((i) => e.component(i, ar)), [lr.name, "I18nD"].forEach((i) => e.component(i, lr))), e.directive("t", Km(t));
}
const Qm = /* @__PURE__ */ St("global-vue-i18n");
function Jm(e = {}) {
  const t = __VUE_I18N_LEGACY_API__ && Z(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__;
  process.env.NODE_ENV !== "production" && t && ei(es(Ct.DEPRECATE_LEGACY_MODE));
  const n = Z(e.globalInjection) ? e.globalInjection : !0, s = /* @__PURE__ */ new Map(), [a, i] = Zm(e, t), r = /* @__PURE__ */ St(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  function o(v) {
    return s.get(v) || null;
  }
  function l(v, C) {
    s.set(v, C);
  }
  function c(v) {
    s.delete(v);
  }
  const h = {
    // mode
    get mode() {
      return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition";
    },
    // install plugin
    async install(v, ...C) {
      if (process.env.NODE_ENV !== "production" && (v.__VUE_I18N__ = h), v.__VUE_I18N_SYMBOL__ = r, v.provide(v.__VUE_I18N_SYMBOL__, h), K(C[0])) {
        const B = C[0];
        h.__composerExtend = B.__composerExtend, h.__vueI18nExtend = B.__vueI18nExtend;
      }
      let w = null;
      !t && n && (w = oh(v, h.global)), __VUE_I18N_FULL_INSTALL__ && Xm(v, h, ...C), __VUE_I18N_LEGACY_API__ && t && v.mixin(Hm(i, i.__composer, h));
      const E = v.unmount;
      if (v.unmount = () => {
        w && w(), h.dispose(), E();
      }, process.env.NODE_ENV !== "production") {
        if (!await Nm(v, h))
          throw Je(he.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
        const k = ti();
        if (t) {
          const y = i;
          y.__enableEmitter && y.__enableEmitter(k);
        } else {
          const y = i;
          y[nn] && y[nn](k);
        }
        k.on("*", qn);
      }
    },
    // global accessor
    get global() {
      return i;
    },
    dispose() {
      a.stop();
    },
    // @internal
    __instances: s,
    // @internal
    __getInstance: o,
    // @internal
    __setInstance: l,
    // @internal
    __deleteInstance: c
  };
  return h;
}
function ci(e = {}) {
  const t = gn();
  if (t == null)
    throw Je(he.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Je(he.NOT_INSTALLED);
  const n = eh(t), s = nh(n), a = yo(t), i = th(e, a);
  if (i === "global")
    return wo(s, e, a), s;
  if (i === "parent") {
    let l = sh(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && xt(es(Ct.NOT_FOUND_PARENT_SCOPE)), l = s), l;
  }
  const r = n;
  let o = r.__getInstance(t);
  if (o == null) {
    const l = Le({}, e);
    "__i18n" in a && (l.__i18n = a.__i18n), s && (l.__root = s), o = oi(l), r.__composerExtend && (o[Oa] = r.__composerExtend(o)), ih(r, t, o), r.__setInstance(t, o);
  }
  return o;
}
function Zm(e, t) {
  const n = xo(), s = __VUE_I18N_LEGACY_API__ && t ? n.run(() => Ma(e)) : n.run(() => oi(e));
  if (s == null)
    throw Je(he.UNEXPECTED_ERROR);
  return [n, s];
}
function eh(e) {
  const t = Qn(e.isCE ? Qm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Je(e.isCE ? he.NOT_INSTALLED_WITH_PROVIDE : he.UNEXPECTED_ERROR);
  return t;
}
function th(e, t) {
  return Bs(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function nh(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function sh(e, t, n = !1) {
  let s = null;
  const a = t.root;
  let i = ah(t, n);
  for (; i != null; ) {
    const r = e;
    if (e.mode === "composition")
      s = r.__getInstance(i);
    else if (__VUE_I18N_LEGACY_API__) {
      const o = r.__getInstance(i);
      o != null && (s = o.__composer, n && s && !s[bo] && (s = null));
    }
    if (s != null || a === i)
      break;
    i = i.parent;
  }
  return s;
}
function ah(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ih(e, t, n) {
  let s = null;
  Ho(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, s = ti();
      const a = n;
      a[nn] && a[nn](s), s.on("*", qn);
    }
  }, t), Yo(() => {
    const a = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (s && s.off("*", qn), a[zn] && a[zn](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const i = a[Oa];
    i && (i(), delete a[Oa]);
  }, t);
}
const rh = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], or = ["t", "rt", "d", "n", "tm", "te"];
function oh(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return rh.forEach((a) => {
    const i = Object.getOwnPropertyDescriptor(t, a);
    if (!i)
      throw Je(he.UNEXPECTED_ERROR);
    const r = Cr(i.value) ? {
      get() {
        return i.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(o) {
        i.value.value = o;
      }
    } : {
      get() {
        return i.get && i.get();
      }
    };
    Object.defineProperty(n, a, r);
  }), e.config.globalProperties.$i18n = n, or.forEach((a) => {
    const i = Object.getOwnPropertyDescriptor(t, a);
    if (!i || !i.value)
      throw Je(he.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${a}`, i);
  }), () => {
    delete e.config.globalProperties.$i18n, or.forEach((a) => {
      delete e.config.globalProperties[`$${a}`];
    });
  };
}
const lh = /* @__PURE__ */ R({
  /* eslint-disable */
  name: "i18n-d",
  props: Le({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ui),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || ci({
      useScope: e.scope,
      __useComponent: !0
    });
    return $o(e, t, co, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Aa](...s)
    ));
  }
}), lr = lh;
$m();
Gf(Ef);
Kf(Hf);
Xf(to);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Xt();
  e.__INTLIFY__ = !0, If(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const uh = {
  common: {
    noData: "No data",
    of: "of",
    ok: "Ok",
    cancel: "Cancel",
    yes: "Yes",
    no: "No",
    operations: {
      equal: "Equal",
      notEqual: "Not equal",
      less: "Less",
      lessOrEqual: "Less or equal",
      greater: "Greater",
      greaterOrEqual: "Greater or equal",
      contains: "Contains",
      notContains: "Not contains",
      startsWith: "Starts with",
      notStartsWith: "Not starts with",
      endsWith: "Ends with",
      notEndsWith: "Not ends with",
      in: "In",
      notIn: "Not in",
      isNull: "Empty",
      isNotNull: "Not empty"
    },
    sortDirection: {
      asc: "Ascending",
      desc: "Descending",
      none: "None"
    }
  },
  datatable: {
    paginationSummary: "{beginRows}-{endRows} of {totalRows}",
    rowsPerPage: "Rows per page"
  },
  select: {
    emptyText: "No items found"
  },
  validate: {
    required: "Field cannot be blank.",
    min: "Minimum length is {value}",
    minValue: "Minimum value is {value}",
    max: "Maximum length is {value}",
    maxValue: "Maximum value is {value}",
    type_string: "Must be a string",
    type_number: "Must be a number",
    type_boolean: "Must be a boolean",
    invalid: "Invalid value"
  },
  dateRangePicker: {
    startDate: "Start date",
    endDate: "End date",
    startDateTime: "Start date and time",
    endDateTime: "End date and time"
  }
}, ch = {
  calendar_month_title: {
    month: "short"
  },
  calendar_month_list: {
    month: "long"
  },
  calendar_weekday: {
    weekday: "short"
  }
}, dh = {
  common: {
    noData: "Данные отсуствуют",
    of: "из",
    ok: "Ок",
    cancel: "Отмена",
    yes: "Да",
    no: "Нет",
    operations: {
      equal: "Равно",
      notEqual: "Не равно",
      less: "Меньше",
      lessOrEqual: "Меньше или равно",
      greater: "Больше",
      greaterOrEqual: "Больше или равно",
      contains: "Содержит",
      notContains: "Не содержит",
      startsWith: "Начинается с",
      notStartsWith: "Не начинается с",
      endsWith: "Заканчивается на",
      notEndsWith: "Не заканчивается на",
      in: "В",
      notIn: "Не в",
      isNull: "Пусто",
      isNotNull: "Не пусто"
    },
    sortDirection: {
      asc: "По возрастанию",
      desc: "По убыванию",
      none: "Нет"
    }
  },
  datatable: {
    paginationSummary: "{beginRows}-{endRows} of {totalRows}",
    rowsPerPage: "Строк на странице"
  },
  select: {
    emptyText: "Ничего не найдено"
  },
  validate: {
    required: "Необходимо заполнить поле",
    min: "Минимальная длина — {value}",
    minValue: "Минимальное значение — {value}",
    max: "Максимальная длина — {value}",
    maxValue: "Максимальное значение — {value}",
    type_string: "Значение должно быть строкой",
    type_number: "Значение должно быть числом",
    type_boolean: "Значение должно быть булевым",
    invalid: "Некорректное значение"
  },
  dateRangePicker: {
    startDate: "Дата начала",
    endDate: "Дата окончания",
    startDateTime: "Дата и время начала",
    endDateTime: "Дата и время окончания"
  }
}, fh = {
  calendar_month_title: {
    month: "short"
  },
  calendar_month_list: {
    month: "long"
  },
  calendar_weekday: {
    weekday: "short"
  }
}, mh = {
  en: uh,
  ru: dh
}, hh = {
  en: ch,
  ru: fh
}, re = Jm({
  locale: "en",
  messages: mh,
  datetimeFormats: hh
}), ph = j(q(() => import("./close-Bn8_ySvr.js"))), gh = R({
  name: "BDialog",
  extends: Da,
  components: { BModal: Da, BButton: ze },
  IconClose: ph,
  emits: ["update:visible", "confirm", "cancel", "closed"],
  props: {
    closable: {
      type: Boolean,
      default: Tt.closable
    },
    header: {
      type: String,
      default: Tt.header
    },
    height: {
      type: [Number, String],
      default: Tt.height
    },
    width: {
      type: [Number, String],
      default: Tt.width
    },
    confirmText: {
      type: String,
      default: Tt.confirmText
    },
    confirmType: {
      type: String,
      default: Tt.confirmType
    },
    fullScreen: {
      type: Boolean,
      default: Tt.fullScreen
    },
    defaultActions: {
      type: Boolean,
      default: Tt.defaultActions
    }
  },
  inheritAttrs: !1,
  methods: {
    async onConfirm() {
      let e = !1, t = !1, n = !1;
      const s = () => {
        e = !0;
      }, a = () => {
        t = !0;
      }, i = () => {
        n = !0;
      };
      this.$emit("confirm", { preventDefault: s, complete: a, abort: i }), e ? (await new Promise((o) => {
        const l = () => {
          if (t || n) return o();
          requestAnimationFrame(l);
        };
        l();
      }), t && this.hide()) : n || this.hide();
    },
    onCancel() {
      this.$emit("cancel"), this.hide();
    }
    // Crimean for creating dynamic windows
    // t(key: string): string {
    //     return i18n.global.t(key) as string
    // }
  },
  computed: {
    confirmButtonText() {
      return this.confirmText || re.global.t("common.ok");
    }
  },
  setup() {
    return {
      t: re.global.t
    };
  }
}), bh = {
  key: 0,
  class: "b-dialog__close"
}, yh = {
  key: 1,
  class: "b-dialog__header"
}, wh = { class: "b-dialog__content" }, vh = {
  key: 2,
  class: "b-dialog__footer"
};
function Ch(e, t, n, s, a, i) {
  const r = T("b-button"), o = T("b-modal");
  return m(), N(o, {
    visible: e.stateVisible,
    onHide: e.hide,
    onClosed: t[0] || (t[0] = (l) => e.$emit("closed")),
    align: e.align,
    height: e.height,
    width: e.width,
    modal: e.modal,
    "close-on-esc": e.closeOnEsc,
    "full-screen": e.fullScreen
  }, {
    default: P(() => [
      U("div", G({ class: "b-dialog" }, e.$attrs), [
        e.closable ? (m(), I("div", bh, [
          W(r, {
            onClick: e.hide,
            plain: "",
            icon: e.$options.IconClose
          }, null, 8, ["onClick", "icon"])
        ])) : M("", !0),
        e.header ? (m(), I("div", yh, [
          L(e.$slots, "header", {}, () => [
            Be(X(e.header), 1)
          ])
        ])) : M("", !0),
        U("div", wh, [
          L(e.$slots, "default")
        ]),
        e.defaultActions ? (m(), I("div", vh, [
          L(e.$slots, "footer", {
            onConfirm: e.onConfirm,
            onCancel: e.onCancel
          }, () => [
            W(r, {
              focus: "",
              class: "w-[60px]",
              onClick: e.onConfirm,
              type: e.confirmType
            }, {
              default: P(() => [
                Be(X(e.confirmButtonText), 1)
              ]),
              _: 1
            }, 8, ["onClick", "type"]),
            W(r, {
              class: "w-[80px]",
              onClick: e.onCancel,
              plain: ""
            }, {
              default: P(() => [
                Be(X(e.t("common.cancel")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ])) : M("", !0)
      ], 16)
    ]),
    _: 3
  }, 8, ["visible", "onHide", "align", "height", "width", "modal", "close-on-esc", "full-screen"]);
}
const Ba = /* @__PURE__ */ F(gh, [["render", Ch]]);
function Tv(e = {}, t = {}) {
  return Jr({
    component: Ba,
    props: e,
    slots: t
  });
}
function Dh(e = {}) {
  return { ...{
    ...Zr(),
    align: "top",
    height: "fit-content",
    width: "auto",
    header: "Confirmation",
    visible: !1
  }, ...e };
}
const cn = Dh(), _h = j(
  q(() => import("./error_circle-CDe4rl39.js"))
), $h = j(
  q(() => import("./info_circle-BG05LnfA.js"))
), Sh = j(
  q(() => import("./warn_circle-DfeyrUXl.js"))
), Eh = j(
  q(() => import("./check_circle-DDxXqkce.js"))
), Ih = R({
  name: "BConfirmDialog",
  extends: Ba,
  components: { BDialog: Ba, BIcon: Ae },
  EVariant: ge,
  emits: ["update:visible", "confirm", "cancel"],
  props: {
    align: {
      type: String,
      default: cn.align
    },
    text: {
      type: String,
      default: cn.text
    },
    height: {
      type: [Number, String],
      default: cn.height
    },
    width: {
      type: [Number, String],
      default: cn.width
    },
    icon: {
      type: [String, Object],
      default: cn.icon
    },
    fullScreen: {
      type: Boolean,
      default: cn.fullScreen
    }
  },
  data() {
    return {
      cssClass: "b-confirm-dialog",
      iconProps: null,
      icons: {
        [ge.Danger]: "IconDanger",
        [ge.Primary]: "IconInfo",
        [ge.Warning]: "IconWarning",
        [ge.Success]: "IconSuccess",
        [ge.Secondary]: ""
      }
    };
  },
  computed: {
    classes() {
      return [this.cssClass, `${this.cssClass}--${this.confirmType}`];
    }
  },
  watch: {
    icon: {
      immediate: !0,
      handler(e) {
        this.iconProps = $t(e) || null;
      }
    }
  },
  IconDanger: _h,
  IconInfo: $h,
  IconWarning: Sh,
  IconSuccess: Eh
});
function kh(e, t, n, s, a, i) {
  const r = T("BIcon"), o = T("b-dialog");
  return m(), N(o, {
    visible: e.stateVisible,
    onHide: e.hide,
    onConfirm: e.onConfirm,
    onCancel: e.onCancel,
    class: H(e.classes),
    align: e.align,
    height: e.height,
    width: e.width,
    header: e.header,
    closable: e.closable,
    "confirm-text": e.confirmText,
    "confirm-type": e.confirmType,
    "full-screen": e.fullScreen
  }, {
    header: P(() => [
      e.iconProps ? (m(), N(r, {
        key: 0,
        class: "b-confirm-dialog__icon",
        props: e.iconProps,
        size: "1.4em"
      }, null, 8, ["props"])) : (m(), N(r, {
        key: 1,
        class: "b-confirm-dialog__icon",
        icon: e.$options[e.icons[e.confirmType]],
        size: "1.4em"
      }, null, 8, ["icon"])),
      Be(" " + X(e.header), 1)
    ]),
    default: P(() => [
      L(e.$slots, "default", {}, () => [
        Be(X(e.text), 1)
      ])
    ]),
    _: 3
  }, 8, ["visible", "onHide", "onConfirm", "onCancel", "class", "align", "height", "width", "header", "closable", "confirm-text", "confirm-type", "full-screen"]);
}
const Th = /* @__PURE__ */ F(Ih, [["render", kh]]);
function Av(e = {}, t = {}) {
  return Jr({
    component: Th,
    props: e,
    slots: t
  });
}
function So(e = {}) {
  return { ...{
    ...we(),
    currentPage: 1,
    pageSize: 10,
    totalRows: 0,
    visiblePages: 7
  }, ...e };
}
const mn = So(), Ah = j(
  q(() => import("./chevron_left-D-T3ohis.js"))
), Nh = j(
  q(() => import("./chevron_right-BlaLUlyq.js"))
), Oh = R({
  name: "BPagination",
  extends: de,
  components: { BButton: ze, BIcon: Ae },
  props: {
    currentPage: {
      type: Number,
      default: mn.currentPage
    },
    totalRows: {
      type: Number,
      default: mn.totalRows
    },
    pageSize: {
      type: Number,
      default: mn.pageSize
    },
    visiblePages: {
      type: Number,
      default: mn.visiblePages
    }
  },
  emits: ["update:currentPage", "change", "summary"],
  data() {
    return {
      stateCurrentPage: 1,
      stateTotalRows: Number(this.totalRows)
    };
  },
  computed: {
    effectivePageSize() {
      return this.stateTotalRows < Number(this.pageSize) ? this.stateTotalRows : Number(this.pageSize) > 0 ? Number(this.pageSize) : mn.pageSize;
    },
    effectiveVisiblePages() {
      return Number(this.visiblePages) > 0 ? Number(this.visiblePages) : 1;
    },
    totalPages() {
      return this.stateTotalRows === 0 ? 1 : Math.ceil(this.stateTotalRows / this.effectivePageSize);
    },
    pages() {
      const e = this.effectiveVisiblePages > this.totalPages ? this.totalPages : this.effectiveVisiblePages;
      return this.pagination(this.stateCurrentPage, e, this.totalPages);
    },
    isFirstPage() {
      return this.stateCurrentPage === 1 || this.totalPages === 1;
    },
    isLastPage() {
      return this.stateCurrentPage === this.totalPages || this.totalPages === 1;
    },
    isEmpty() {
      return this.totalPages <= 1;
    }
  },
  watch: {
    currentPage: {
      handler(e) {
        e || (e = 1), this.stateCurrentPage = Number(e) > this.totalPages ? this.totalPages : Number(e);
      },
      immediate: !0
    },
    totalRows: {
      handler(e) {
        this.stateTotalRows = Number(e), this.stateCurrentPage = this.stateCurrentPage > this.totalPages ? this.totalPages : this.stateCurrentPage, this.$emit("summary", this.getSummary());
      }
    },
    pageSize: {
      handler() {
        this.stateCurrentPage = 1, this.change();
      }
    },
    stateCurrentPage: {
      handler(e, t) {
        typeof e == "number" && e !== t && (this.$emit("update:currentPage", e), this.$emit("summary", this.getSummary()), this.change());
      }
    }
  },
  methods: {
    pagination(e, t, n) {
      const s = t === n ? t : Math.trunc((t - 1) / 2);
      let a = Math.min(e - 1, s), i = Math.max(0, Math.min(n - e, t - s - 1));
      a < s && (i = t - a - 1), i < s && (a = t - i - 1);
      const r = this.generateLeftPagination(e, a), o = t > 1 ? this.generateRightPagination(e, i, n) : [], l = [...r, ...o];
      return e !== 1 && e !== n && l.splice(r.length, 0, e), l;
    },
    generateLeftPagination(e, t) {
      const n = [1];
      e - t > 1 && n.push("...");
      const s = e - (t - n.length);
      for (let a = s; a < e; a++)
        n.push(a);
      return n;
    },
    generateRightPagination(e, t, n) {
      const s = [n];
      e + t < n && s.unshift("...");
      const a = e + t - s.length;
      for (let i = a; i >= e + 1; i--)
        s.unshift(i);
      return s;
    },
    getSummary() {
      const e = this.stateTotalRows > 0 ? (this.stateCurrentPage - 1) * this.effectivePageSize + 1 : 0, t = Math.min(
        this.stateCurrentPage * this.effectivePageSize,
        this.stateTotalRows
      );
      return {
        currentPage: this.stateCurrentPage,
        beginRows: e,
        endRows: t,
        pageSize: this.pageSize,
        totalRows: this.stateTotalRows
      };
    },
    change() {
      if (typeof this.stateCurrentPage == "number") {
        const e = this.getSummary();
        this.$emit("change", e);
      }
    },
    onChangePage(e) {
      typeof e == "number" && (this.stateCurrentPage = e);
    },
    prevPage() {
      this.stateCurrentPage > 1 && this.onChangePage(this.stateCurrentPage - 1);
    },
    nextPage() {
      this.stateCurrentPage < this.totalPages && this.onChangePage(this.stateCurrentPage + 1);
    },
    isCurrentPage(e) {
      return e === this.stateCurrentPage && !this.isEmpty;
    }
  },
  // mounted() {
  // },
  // beforeMount() {
  //     const summary = this.getSummary()
  //     this.$emit('init', summary)
  // },
  LeftIcon: Ah,
  RightIcon: Nh
}), Ph = { class: "b-pagination" };
function Mh(e, t, n, s, a, i) {
  const r = T("BIcon"), o = T("b-button");
  return m(), I("div", Ph, [
    W(o, {
      class: "b-pagination__arrow",
      disabled: e.isFirstPage,
      onClick: e.prevPage,
      outlined: ""
    }, {
      default: P(() => [
        W(r, {
          icon: e.$options.LeftIcon
        }, null, 8, ["icon"])
      ]),
      _: 1
    }, 8, ["disabled", "onClick"]),
    (m(!0), I(ce, null, ye(e.pages, (l) => (m(), N(o, {
      key: l,
      plain: "",
      disabled: e.isEmpty,
      class: H(["b-pagination__page", { "b-pagination__selected": e.isCurrentPage(l) }]),
      onClick: (c) => e.onChangePage(l)
    }, {
      default: P(() => [
        Be(X(l), 1)
      ]),
      _: 2
    }, 1032, ["disabled", "class", "onClick"]))), 128)),
    W(o, {
      class: "b-pagination__arrow",
      disabled: e.isLastPage,
      onClick: e.nextPage,
      outlined: ""
    }, {
      default: P(() => [
        W(r, {
          icon: e.$options.RightIcon
        }, null, 8, ["icon"])
      ]),
      _: 1
    }, 8, ["disabled", "onClick"])
  ]);
}
const Bh = /* @__PURE__ */ F(Oh, [["render", Mh]]);
function Lh(e = {}) {
  return { ...{
    ...Cn(),
    columns: [],
    text: "",
    draggable: !0,
    resizable: !0,
    showFilters: !0
  }, ...e };
}
const Nt = Lh();
function Rh(e = {}) {
  return { ...{
    ...So({
      visible: !0
    }),
    sizes: [10, 20, 50, 100]
  }, ...e };
}
function Vh(e = {}) {
  return { ...{
    ...we(),
    value: [],
    columns: [],
    height: "auto",
    width: "100%",
    multiSelect: !1,
    multiSort: !1,
    draggableColumn: Nt.draggable,
    resizableColumn: Nt.resizable,
    optionsBody: {
      evenRow: !1
    },
    pagination: Rh(),
    filter: Nt.filter
  }, ...e };
}
const ve = Vh();
function Fh(e = {}) {
  return { ...{
    ...we(),
    columns: [],
    rows: [],
    options: {
      evenRow: !1
    }
  }, ...e };
}
const dn = Fh();
function Wh(e = {}) {
  return { ...{
    ...we(),
    cells: [],
    uuid: "",
    selected: !1,
    evenRow: !1
  }, ...e };
}
const fs = Wh();
function Uh(e = {}) {
  return { ...{
    ...lt(),
    field: "",
    value: void 0,
    selection: !0
  }, ...e };
}
const da = Uh();
function xh(e = {}) {
  return { ...{
    ...we(),
    loading: !1,
    offsetTopOverlay: 0
  }, ...e };
}
const ur = xh();
let Jt = at(ft({ visible: !1 }));
function Hh(e) {
  Jt.value = ft(e);
}
const Yh = R({
  name: "BBodyCell",
  extends: We,
  components: { BSkeleton: Ya },
  emits: ["click", "dblclick"],
  props: {
    field: {
      type: String,
      default: da.field
    },
    value: {
      type: [String, Number, Boolean, Object, Function, Array],
      default: da.value
    },
    // Select cell on hover
    selection: {
      type: Boolean,
      default: da.selection
    }
  },
  data() {
    return {
      cssClass: "b-body-cell"
    };
  },
  loadingGeneral: Jt,
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          // [`${this.cssClass}__empty`]: this.isEmpty && !this.hasLoading,
          [`${this.cssClass}__skeleton`]: this.hasLoading && this.hasSkeleton,
          [`${this.cssClass}__no-selection`]: !this.selection
        }
      ];
    },
    /**
     * Checks whether the value is empty
     */
    isEmpty() {
      const e = this.value;
      return !!(e == null || typeof e == "string" && e.trim() === "" || Array.isArray(e) && e.length === 0 || typeof e == "object" && Object.keys(e).length === 0);
    },
    valueComponent() {
      return typeof this.value === "function" ? this.value : "div";
    },
    hasLoading() {
      return Ur(Jt.value);
    },
    hasSkeleton() {
      return Ju(Jt.value);
    }
  }
});
function zh(e, t, n, s, a, i) {
  const r = T("BSkeleton");
  return m(), I("td", {
    class: H(e.classes),
    onClick: t[0] || (t[0] = (o) => e.$emit("click", {
      event: o,
      field: e.field,
      value: e.value
    })),
    onDblclick: t[1] || (t[1] = (o) => e.$emit("dblclick", {
      event: o,
      field: e.field,
      value: e.value
    }))
  }, [
    e.hasLoading && e.hasSkeleton ? (m(), N(r, {
      key: 0,
      width: "auto",
      height: "auto",
      animation: e.$options.loadingGeneral.value.animation
    }, null, 8, ["animation"])) : M("", !0),
    (m(), N(it(e.valueComponent), {
      class: "b-body-cell__content",
      title: e.value
    }, {
      default: P(() => [
        L(e.$slots, "default", {
          field: e.field,
          value: e.value
        }, () => [
          Be(X(e.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["title"]))
  ], 34);
}
const jh = /* @__PURE__ */ F(Yh, [["render", zh]]), qh = R({
  name: "BBodyRow",
  extends: de,
  components: { BBodyCell: jh, BCheckBox: jr },
  emits: ["click", "dblclick", "cell-click", "cell-dblclick"],
  props: {
    cells: {
      type: Array,
      default: fs.cells
    },
    uuid: {
      type: String,
      required: !0
    },
    selected: {
      type: Boolean,
      default: !1
    },
    evenRow: {
      type: Boolean,
      default: fs.evenRow
    },
    showSelection: {
      type: Boolean,
      default: fs.showSelection
    },
    highlighted: {
      type: Boolean,
      default: fs.highlighted
    }
  },
  inject: ["updateSelected"],
  computed: {
    classes() {
      return [
        "b-body-row",
        {
          "b-body-row__event": !!this.evenRow,
          "b-body-row__selected": !!this.selected
        }
      ];
    },
    stateSelected() {
      return this.selected;
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
    onDblClick(e) {
      this.$emit("dblclick", e);
    }
  },
  ESizeControl: ie
});
function Gh(e, t, n, s, a, i) {
  const r = T("BBodyCell"), o = T("b-check-box"), l = T("b-body-cell");
  return m(), I("tr", {
    class: H(e.classes),
    onClick: t[2] || (t[2] = (...c) => e.onClick && e.onClick(...c)),
    onDblclick: t[3] || (t[3] = (...c) => e.onDblClick && e.onDblClick(...c))
  }, [
    W(r, {
      class: H({ "b-body-cell__hl": e.highlighted, "b-body-cell__hl-none": !e.highlighted })
    }, null, 8, ["class"]),
    e.showSelection ? (m(), N(l, {
      key: 0,
      class: "b-body-cell__checkbox",
      value: e.stateSelected,
      selection: !1
    }, {
      default: P(({ value: c }) => [
        W(o, {
          value: c,
          "size-control": e.$options.ESizeControl.Small
        }, null, 8, ["value", "size-control"])
      ]),
      _: 1
    }, 8, ["value"])) : M("", !0),
    (m(!0), I(ce, null, ye(e.cells, (c, h) => (m(), N(l, {
      key: h,
      field: c.field,
      value: c.value,
      onClick: t[0] || (t[0] = (v) => e.$emit("cell-click", v)),
      onDblclick: t[1] || (t[1] = (v) => e.$emit("cell-dblclick", v))
    }, {
      default: P((v) => [
        L(e.$slots, "body-" + v.field, G({ ref_for: !0 }, v))
      ]),
      _: 2
    }, 1032, ["field", "value"]))), 128))
  ], 34);
}
const Eo = /* @__PURE__ */ F(qh, [["render", Gh]]), Kh = R({
  name: "BBody",
  extends: de,
  components: { BBodyRow: Eo },
  emits: [
    "update:selected",
    "selected-rows",
    "row-click",
    "row-dblclick",
    "cell-click",
    "cell-dblclick"
  ],
  props: {
    columns: {
      type: Array,
      default: dn.columns
    },
    rows: {
      type: Array,
      default: dn.rows
    },
    selected: {
      type: [Object, Array],
      default: dn.selected
    },
    highlighted: {
      type: [Object, Array],
      default: dn.highlighted
    },
    options: {
      type: Object,
      default: dn.options
    },
    showSelection: {
      type: Boolean,
      default: dn.showSelection
    }
  },
  data() {
    return {
      selectedRows: [],
      stateRows: this.rows
    };
  },
  provide() {
    return {
      updateSelected: this.updateSelected
    };
  },
  computed: {
    multiSelect() {
      return !!this.$parent.multiSelect;
    },
    cells() {
      return this.stateRows.map((e) => {
        const t = e.data;
        return this.columns.map((n) => ({
          field: n.field,
          value: t ? t[n.field] : void 0
        }));
      });
    }
  },
  watch: {
    rows: {
      handler(e, t) {
        this.stateRows = e, this.selected && (!t || t.length === 0) && this.selectRowsBySelected(this.selected), this.highlighted && this.selectRowsByHighlight(this.highlighted);
      },
      immediate: !0
    },
    selected: {
      handler(e) {
        const t = this.normalizeSelected(this.selectedRows), n = this.normalizeSelected(e);
        t.length === n.length && t.every((s, a) => Object.keys(s).every((i) => s[i] === n[a][i])) || this.selectRowsBySelected(e);
      }
    },
    highlighted: {
      handler(e) {
        this.selectRowsByHighlight(e);
      },
      immediate: !0,
      deep: !0
    }
  },
  methods: {
    /**
     * The Selected converts any format to the IDatatableValvalue [] array (for example [{id: '1'}, {id: '2'}])
     * This is necessary for the correct selection of rows in the table.
     * @param {IBodySelectedByKeyValue | IDataTableValue[] | IBodyRow[] | undefined} selected
     * @returns {IDataTableValue[]}
     */
    normalizeSelected(e) {
      if (!e) return [];
      if (typeof e == "object" && "key" in e && "value" in e) {
        const t = e.key;
        return (Array.isArray(e.value) ? e.value : [e.value]).map((s) => ({ [t]: s }));
      }
      return Array.isArray(e) && e.length && typeof e[0] == "object" && "id" in e[0] ? e : Array.isArray(e) && e.length && "uuid" in e[0] ? e.map((t) => t.data && "id" in t.data ? { id: t.data.id } : { uuid: t.uuid }) : [];
    },
    /**
     * Select rows based on the selected value
     * @param {IBodySelectedByKeyValue | IDataTableValue[] | IBodyRow[]} selected
     * This method resets the current selection and selects rows based on the provided selected value.
     * It compares each row's data against the selected value, which can be in various formats
     * (e.g., an object with a key-value pair, an array of objects, or an array of IBodyRow).
     * It updates the `selectedRows` array and emits the `update:selected` and `selected-rows` events.
     * @returns {void}
     */
    selectRowsBySelected(e) {
      this.selectedRows.forEach((n) => n.selected = !1), this.selectedRows = [];
      const t = this.normalizeSelected(e);
      this.stateRows.forEach((n) => {
        t.find((a) => Object.keys(a).every((i) => (n.data && i in n.data ? n.data[i] : n[i]) === a[i])) && this.updateSelected(n.uuid, !0);
      });
    },
    selectRowsByHighlight(e) {
      if (!e) return;
      const t = this.normalizeSelected(e);
      if (!t.length) {
        this.stateRows.forEach((a) => a.highlighted = !1);
        return;
      }
      let n = 0;
      const s = t.length;
      for (const a of this.stateRows) {
        let i = !1;
        for (const r of t) {
          for (const o of Object.keys(r))
            if ((a.data && o in a.data ? a.data[o] : a[o]) === r[o]) {
              i = !0, n++;
              break;
            }
          if (i) break;
        }
        if (a.highlighted = i, n >= s) break;
      }
    },
    /**
     * Get row by uuid
     * @param {string} uuid
     */
    getRowByUuid(e) {
      return this.stateRows.find((t) => t.uuid === e);
    },
    /**
     * Remove selected row
     * @param {string} uuid
     */
    removeSelectedRow(e) {
      const t = this.getRowByUuid(e);
      t && (t.selected = !1, this.selectedRows = this.selectedRows.filter((n) => n.uuid !== e));
    },
    toggleSelected(e) {
      e && this.updateSelected(e.uuid, !e.selected);
    },
    // getRowsSe
    updateSelected(e, t) {
      if (!t)
        this.removeSelectedRow(e);
      else {
        const n = this.getRowByUuid(e);
        if (!n)
          return;
        if (n.selected = !0, this.multiSelect)
          this.selectedRows.find(
            (a) => a.uuid === e
          ) || this.selectedRows.push(n);
        else {
          const s = this.selectedRows[0] || null;
          s && (s.selected = !1), this.selectedRows = [n];
        }
      }
      this.$emit("update:selected", this.selectedRows), this.$emit("selected-rows", this.selectedRows);
    },
    selectAll(e) {
      this.stateRows.forEach((t) => {
        t.selected = e;
      }), e ? this.selectedRows = this.stateRows : this.selectedRows = [], this.$emit("update:selected", this.selectedRows), this.$emit("selected-rows", this.selectedRows);
    },
    /**
     * Removes the `data` property from the row object
     * @param {object} row
     * @returns {object} New object without `data` property
     */
    omitData(e) {
      const { data: t, ...n } = e;
      return n;
    },
    onRowClick(e, t, n) {
      e.detail > 1 || (this.showSelection && this.toggleSelected(t), this.$emit("row-click", { event: e, row: t, index: n }));
    },
    onRowDblClick(e, t, n) {
      this.$emit("row-dblclick", { event: e, row: t, index: n });
    }
  }
}), Xh = { class: "b-data-table__body" };
function Qh(e, t, n, s, a, i) {
  const r = T("b-body-row");
  return m(), I("tbody", Xh, [
    (m(!0), I(ce, null, ye(e.stateRows, (o, l) => (m(), N(r, G({
      key: o.uuid,
      ref_for: !0
    }, { ...e.options, ...e.omitData(o) }, {
      cells: e.cells[l],
      uuid: o.uuid,
      "show-selection": e.showSelection,
      onClick: (c) => e.onRowClick(c, o, l),
      onDblclick: (c) => e.onRowDblClick(c, o, l),
      onCellClick: (c) => e.$emit("cell-click", { ...c, row: o, index: l }),
      onCellDblclick: (c) => e.$emit("cell-dblclick", { ...c, row: o, index: l })
    }), wa({ _: 2 }, [
      ye(e.columns, (c) => ({
        name: `body-${c.field}`,
        fn: P((h) => [
          L(e.$slots, `body-${c.field}`, G({ ref_for: !0 }, { ...h, row: o, index: l }))
        ])
      }))
    ]), 1040, ["cells", "uuid", "show-selection", "onClick", "onDblclick", "onCellClick", "onCellDblclick"]))), 128))
  ]);
}
const Jh = /* @__PURE__ */ F(Kh, [["render", Qh]]);
function Zh(e = {}) {
  return { ...{
    ...we(),
    columns: [],
    rows: []
  }, ...e };
}
const fa = Zh();
function ep(e = {}) {
  return { ...{
    ...lt(),
    field: "",
    value: void 0
  }, ...e };
}
const cr = ep(), tp = R({
  name: "BFooterCell",
  extends: We,
  props: {
    field: {
      type: String,
      default: cr.field
    },
    value: {
      type: [String, Number, Boolean, Object, Function, Array],
      default: cr.value
    }
  },
  data() {
    return {
      cssClass: "b-footer-cell"
    };
  },
  computed: {
    classes() {
      return [this.cssClass];
    },
    valueComponent() {
      return typeof this.value === "function" ? this.value : "div";
    }
  }
});
function np(e, t, n, s, a, i) {
  return m(), I("td", {
    class: H(e.classes)
  }, [
    (m(), N(it(e.valueComponent), { class: "b-footer-cell__content" }, {
      default: P(() => [
        L(e.$slots, "default", {
          field: e.field,
          value: e.value
        }, () => [
          Be(X(e.value), 1)
        ])
      ]),
      _: 3
    }))
  ], 2);
}
const sp = /* @__PURE__ */ F(tp, [["render", np]]), ap = R({
  name: "BFooter",
  extends: de,
  components: { BFooterCell: sp },
  emits: ["cell-click", "cell-dblclick"],
  props: {
    columns: {
      type: Array,
      default: fa.columns
    },
    rows: {
      type: Array,
      default: fa.rows
    },
    showSelection: {
      type: Boolean,
      default: fa.showSelection
    }
  },
  data() {
    return {};
  }
}), ip = { class: "b-data-table__footer" }, rp = { key: 0 }, op = { key: 1 };
function lp(e, t, n, s, a, i) {
  const r = T("b-footer-cell");
  return m(), I("tfoot", ip, [
    (m(!0), I(ce, null, ye(e.rows, (o, l) => (m(), I("tr", { key: l }, [
      e.showSelection ? (m(), I("td", rp)) : M("", !0),
      (m(!0), I(ce, null, ye(e.columns, (c, h) => (m(), I(ce, { key: h }, [
        o[c.field] ? (m(), N(r, {
          key: 0,
          field: c.field,
          value: o[c.field],
          onClick: (v) => e.$emit("cell-click", {
            value: o[c.field],
            row: o,
            column: c,
            index: l
          }),
          onDblclick: (v) => e.$emit("cell-dblclick", {
            value: o[c.field],
            row: o,
            column: c,
            index: l
          })
        }, {
          default: P(({ field: v, value: C }) => [
            L(e.$slots, "footer-" + c.field, {
              field: v,
              value: C,
              row: o,
              column: c
            })
          ]),
          _: 2
        }, 1032, ["field", "value", "onClick", "onDblclick"])) : (m(), I("td", op))
      ], 64))), 128))
    ]))), 128))
  ]);
}
const up = /* @__PURE__ */ F(ap, [["render", lp]]), cp = R({
  name: "BBodyLoading",
  extends: de,
  components: { BSpinner: Is, BOverlay: Qa },
  props: {
    loading: {
      type: [Boolean, Object],
      default: ur.loading
    },
    offsetTopOverlay: {
      type: Number,
      default: ur.offsetTopOverlay
    }
  },
  ESizeControl: ie,
  watch: {
    loading: {
      immediate: !0,
      deep: !0,
      handler(e) {
        Hh(e);
      }
    }
  },
  data() {
    return {
      cssClass: "b-body-loading"
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--spinner`]: Un(Jt.value)
        }
      ];
    },
    styles() {
      return {
        marginTop: `${this.offsetTopOverlay}px`
      };
    },
    hasLoading() {
      return Ur(Jt.value);
    },
    hasSpinner() {
      return Un(Jt.value);
    }
  }
});
function dp(e, t, n, s, a, i) {
  const r = T("BOverlay"), o = T("BSpinner");
  return m(), N(ot, { name: "fade" }, {
    default: P(() => [
      e.hasLoading ? (m(), I("div", {
        key: 0,
        class: H(e.classes),
        style: Ye(e.styles)
      }, [
        W(r, {
          visible: e.hasLoading,
          "teleport-to": !1
        }, null, 8, ["visible"]),
        e.hasSpinner ? (m(), N(o, {
          key: 0,
          size: e.$options.ESizeControl.TwoXL,
          "border-size": 2
        }, null, 8, ["size"])) : M("", !0)
      ], 6)) : M("", !0)
    ]),
    _: 1
  });
}
const fp = /* @__PURE__ */ F(cp, [["render", dp]]);
var Ee = /* @__PURE__ */ ((e) => (e.Asc = "asc", e.Desc = "desc", e.None = "none", e))(Ee || {});
function Pt(e = !0) {
  return typeof e == "object" && e !== null && "direction" in e ? {
    sortable: !0,
    direction: e.direction ?? Ee.None
  } : e === Ee.Asc || e === Ee.Desc || e === Ee.None ? {
    sortable: !0,
    direction: e
  } : {
    sortable: !!e,
    direction: Ee.None
  };
}
function mp(e) {
  switch (e) {
    case Ee.Asc:
      return Ee.Desc;
    case Ee.Desc:
      return Ee.None;
    default:
      return Ee.Asc;
  }
}
function Nv() {
  return [
    { value: Ee.None, text: re.global.t("common.sortDirection.none") },
    { value: Ee.Asc, text: re.global.t("common.sortDirection.asc") },
    { value: Ee.Desc, text: re.global.t("common.sortDirection.desc") }
  ];
}
function hp(e) {
  return e.filter((t) => typeof t.sort == "boolean" ? t.sort === !0 : t.sort && t.sort.direction !== Ee.None);
}
function pp(e) {
  return e.length ? e.map((t) => {
    const n = typeof t.sort == "boolean" ? Pt(t.sort) : t.sort;
    return {
      field: t.field,
      direction: n.direction
    };
  }) : [];
}
function Ov(e) {
  switch (e) {
    case "asc":
    case "ascending":
      return Ee.Asc;
    case "desc":
    case "descending":
      return Ee.Desc;
    default:
      return Ee.None;
  }
}
function gp(e = {}) {
  return { ...{
    ...Cn(),
    header: "",
    field: "",
    sort: Pt(),
    draggable: !0,
    resizable: !0,
    width: 100,
    minWidth: 50,
    maxWidth: 700,
    separator: !0
  }, ...e };
}
const gt = gp(), bp = j(q(() => import("./up-Chfb8uGO.js"))), yp = j(q(() => import("./down-CKxlyzIl.js"))), wp = j(q(() => import("./none-C6R3hfk8.js"))), vp = R({
  name: "HeaderCellContent",
  extends: _t,
  components: { BIcon: Ae },
  props: {
    field: {
      type: String,
      default: gt.field
    },
    sort: {
      type: Object,
      default: gt.sort
    }
  },
  data() {
    return {
      iconSize: "1.2em"
    };
  },
  UpIcon: bp,
  DownIcon: yp,
  NoneIcon: wp
}), Cp = { class: "b-header-cell__text" }, Dp = {
  key: 0,
  class: "b-header-cell__sort"
};
function _p(e, t, n, s, a, i) {
  const r = T("BIcon");
  return m(), I(ce, null, [
    U("span", Cp, [
      L(e.$slots, "default", {}, () => [
        Be(X(e.text), 1)
      ])
    ]),
    e.sort.sortable ? (m(), I("div", Dp, [
      e.sort.direction === "asc" ? (m(), N(r, {
        key: 0,
        icon: e.$options.UpIcon,
        size: e.iconSize
      }, null, 8, ["icon", "size"])) : e.sort.direction === "desc" ? (m(), N(r, {
        key: 1,
        icon: e.$options.DownIcon,
        size: e.iconSize
      }, null, 8, ["icon", "size"])) : (m(), N(r, {
        key: 2,
        icon: e.$options.NoneIcon,
        size: e.iconSize,
        class: "b-header-cell__sort--none"
      }, null, 8, ["icon", "size"]))
    ])) : M("", !0)
  ], 64);
}
const $p = /* @__PURE__ */ F(vp, [["render", _p]]), Sp = R({
  name: "BHeaderCell",
  extends: _t,
  components: { BButton: ze, BHeaderCellContent: $p },
  emits: ["drop", "resize", "start-resize", "end-resize", "change-sort"],
  props: {
    field: {
      type: String,
      default: gt.field
    },
    sort: {
      type: [Object, Boolean],
      default: gt.sort
    },
    width: {
      type: [Number, String],
      default: gt.width
    },
    minWidth: {
      type: Number,
      default: gt.minWidth
    },
    maxWidth: {
      type: Number,
      default: gt.maxWidth
    },
    draggable: {
      type: Boolean,
      default: gt.draggable
    },
    resizable: {
      type: Boolean,
      default: gt.resizable
    },
    separator: {
      type: Boolean,
      default: gt.separator
    }
  },
  // inject: ['updateSort'],
  data() {
    return {
      cssClass: "b-header-cell",
      stateSort: Pt(),
      isDragging: !1,
      dragOverLeft: !1,
      dragOverRight: !1,
      isSizing: !1,
      startX: 0,
      stateWidth: 0,
      initWidth: parseInt(String(this.width))
    };
  },
  draggedIndex: null,
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--sortable`]: this.stateSort.sortable,
          [`${this.cssClass}--dragging`]: this.isDragging,
          [`${this.cssClass}--resizable`]: this.resizable,
          [`${this.cssClass}--no-separator`]: !this.separator
        }
      ];
    },
    style() {
      const e = parseInt(String(this.stateWidth));
      let t = {};
      return e && (t.width = `${e}px`, t.maxWidth = `${e}px`, t.minWidth = `${e}px`), t;
    },
    content() {
      return this.$el.querySelector(".b-header-cell__content");
    }
  },
  watch: {
    sort: {
      handler(e) {
        this.stateSort = typeof e == "boolean" ? Pt(e) : e;
      },
      immediate: !0,
      deep: !0
    },
    width: {
      handler(e) {
        this.stateWidth = this.validateWidth(e);
      },
      immediate: !0
    }
  },
  methods: {
    onSort() {
      const e = mp(this.stateSort.direction);
      this.$emit("change-sort", { field: this.field, direction: e });
    },
    /**
     * Drag start
     * @param {DragEvent} event
     */
    onDragStart(e) {
      var n, s;
      if (!this.draggable || this.isSizing)
        return;
      this.isDragging = !0;
      const t = (n = e.currentTarget) == null ? void 0 : n.closest("th");
      this.$options.draggedIndex = Number(t == null ? void 0 : t.dataset.index), (s = e.dataTransfer) == null || s.setData("text/plain", this.field), e.dataTransfer.effectAllowed = "move";
    },
    /**
     * Drag end
     */
    onDragEnd() {
      this.isDragging = !1;
    },
    /**
     * Drag over
     * @param {DragEvent} event
     */
    onDragOver(e) {
      e.preventDefault(), e.dataTransfer.dropEffect = "move";
    },
    /**
     * Drop
     * @param {DragEvent} event
     */
    onDrop(e) {
      var n;
      e.preventDefault();
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("text/plain");
      this.dragOverLeft = !1, this.dragOverRight = !1, !(!t || t === this.field) && this.$emit("drop", { draggedField: t, targetField: this.field });
    },
    /**
     * Drag enter
     * @param {DragEvent} event
     */
    onDragEnter(e) {
      var s;
      const t = (s = e.currentTarget) == null ? void 0 : s.closest("th"), n = Number(t == null ? void 0 : t.dataset.index);
      n !== this.$options.draggedIndex && (n < this.$options.draggedIndex ? this.dragOverLeft = !0 : this.dragOverRight = !0);
    },
    /**
     * Drag leave
     * @param {DragEvent} event
     */
    onDragLeave(e) {
      const t = e.relatedTarget;
      (!t || !this.content.contains(t)) && (this.dragOverLeft || this.dragOverRight) && (this.dragOverLeft = !1, this.dragOverRight = !1);
    },
    onMouseDownSeparator(e) {
      this.resizable && (this.isSizing = !0, this.startX = e.clientX, document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUpSeparator), this.$emit("start-resize", { field: this.field }));
    },
    onMouseMove(e) {
      if (!this.isSizing)
        return;
      const t = e.clientX - this.startX, n = this.initWidth + t;
      this.stateWidth = this.validateWidth(n);
    },
    onMouseUpSeparator() {
      this.isSizing && (this.isSizing = !1, this.initWidth = this.stateWidth, document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onMouseUpSeparator), this.$emit("resize", { field: this.field, width: this.stateWidth }), this.$emit("end-resize", { field: this.field }));
    },
    /**
     * Validate width
     * @param {number} width
     */
    validateWidth(e) {
      return this.minWidth && e < this.minWidth ? this.minWidth : this.maxWidth && e > this.maxWidth ? this.maxWidth : e;
    }
  }
}), Ep = ["draggable"], Ip = { class: "b-header-cell__content--title" };
function kp(e, t, n, s, a, i) {
  const r = T("BHeaderCellContent"), o = T("b-button");
  return m(), I("th", {
    class: H(e.classes),
    style: Ye(e.style)
  }, [
    U("div", {
      class: H(["b-header-cell__conteiner", { "drag-over-left": e.dragOverLeft, "drag-over-right": e.dragOverRight }])
    }, [
      U("div", {
        class: "b-header-cell__content",
        draggable: e.draggable,
        onDragstart: t[0] || (t[0] = (...l) => e.onDragStart && e.onDragStart(...l)),
        onDragend: t[1] || (t[1] = (...l) => e.onDragEnd && e.onDragEnd(...l)),
        onDragover: t[2] || (t[2] = (...l) => e.onDragOver && e.onDragOver(...l)),
        onDrop: t[3] || (t[3] = (...l) => e.onDrop && e.onDrop(...l)),
        onDragenter: t[4] || (t[4] = (...l) => e.onDragEnter && e.onDragEnter(...l)),
        onDragleave: t[5] || (t[5] = (...l) => e.onDragLeave && e.onDragLeave(...l))
      }, [
        U("div", Ip, [
          L(e.$slots, "default", {}, () => [
            e.stateSort.sortable ? (m(), N(o, {
              key: 0,
              onClick: e.onSort,
              title: e.text
            }, {
              default: P(() => [
                W(r, {
                  field: e.field,
                  sort: e.stateSort,
                  text: e.text
                }, null, 8, ["field", "sort", "text"])
              ]),
              _: 1
            }, 8, ["onClick", "title"])) : (m(), N(r, {
              key: 1,
              field: e.field,
              sort: e.stateSort,
              text: e.text
            }, null, 8, ["field", "sort", "text"]))
          ])
        ])
      ], 40, Ep),
      e.separator ? (m(), I("div", {
        key: 0,
        class: "b-header-cell__conteiner--separator",
        onMousedown: t[6] || (t[6] = (...l) => e.onMouseDownSeparator && e.onMouseDownSeparator(...l)),
        onMouseup: t[7] || (t[7] = (...l) => e.onMouseUpSeparator && e.onMouseUpSeparator(...l))
      }, null, 32)) : M("", !0)
    ], 2)
  ], 6);
}
const Tp = /* @__PURE__ */ F(Sp, [["render", kp]]), Ap = R({
  name: "HeaderCellSelection",
  extends: We,
  emits: ["selectAll"],
  components: { BCheckBox: jr }
});
function Np(e, t, n, s, a, i) {
  const r = T("BCheckBox");
  return m(), N(r, {
    value: e.value,
    disabled: e.disabled,
    onChange: t[0] || (t[0] = (o) => e.$emit("selectAll", o))
  }, null, 8, ["value", "disabled"]);
}
const Op = /* @__PURE__ */ F(Ap, [["render", Np]]);
function Vs(e = {}) {
  return { ...{
    ...lt(),
    visible: !1,
    // Cannot be removed from DOM, otherwise, we get not correct calculations and re -examples of coordinates
    hidden: !1,
    placement: "bottom-start",
    triggerActivate: "click",
    owner: void 0,
    offsetTop: 0,
    autoFocus: !1,
    autoClose: !0,
    teleportTo: "body"
  }, ...e };
}
const pt = Vs();
function Io(e, t, n) {
  const s = (a) => {
    const i = a.relatedTarget;
    if (!i)
      return;
    const r = t && (t.contains(i) || i.contains(t));
    !e.contains(i) && !r && n();
  };
  e._focusOutHandler = s, e.addEventListener("focusout", s);
}
function ko(e) {
  const t = e ? e._focusOutHandler : null;
  t && (e.removeEventListener("focusout", t), delete e._focusOutHandler);
}
function Pp(e, t, n = 50, s = 100) {
  let a = 0;
  const i = () => {
    const r = e();
    r ? t(r) : a < s && (a++, setTimeout(i, n));
  };
  i();
}
const Mp = R({
  name: "BDropDownComponent",
  extends: We,
  emits: ["update:value", "update:text", "update:selected", "mounted"],
  props: {
    hidden: {
      type: Boolean,
      default: pt.hidden
    },
    required: {
      type: Boolean,
      default: pt.required
    },
    placement: {
      type: String,
      default: pt.placement
    },
    triggerActivate: {
      type: String,
      default: pt.triggerActivate
    },
    owner: {
      type: Object,
      default: pt.owner
    },
    visible: {
      type: Boolean,
      default: pt.visible
    },
    offsetTop: {
      type: Number,
      default: pt.offsetTop
    },
    autoFocus: {
      type: Boolean,
      default: pt.autoFocus
    },
    autoClose: {
      type: Boolean,
      default: pt.autoClose
    },
    teleportTo: {
      type: [Object, String],
      default: pt.teleportTo
    }
  },
  inheritAttrs: !1,
  data() {
    return {
      cssClass: "b-drop-down-component",
      stateVisible: !1,
      position: { top: "0px", left: "0px" },
      marginY: 6,
      cmpComponent: null,
      registeredElements: /* @__PURE__ */ new Set()
      // Set for storing elements
    };
  },
  inject: {
    // Inject modal layer for z-index management
    modalLayer: {
      default: null
    }
  },
  computed: {
    classes() {
      return [this.cssClass, `${this.placement}`];
    },
    styles() {
      const e = {
        ...this.position
      };
      if (this.modalLayer) {
        const t = this.modalLayer();
        t !== null && (e.zIndex = String(t));
      }
      return e;
    }
  },
  watch: {
    stateVisible(e) {
      e && this.updateComponentPosition();
    }
  },
  methods: {
    elementRoot() {
      return this.$refs.refRoot;
    },
    elementOwner() {
      var e;
      return ((e = this.owner) == null ? void 0 : e.$el) || this.owner;
    },
    /**
     * Register an element as part of the component
     * @param {HTMLElement} element
     */
    registerElement(e) {
      e = Array.isArray(e) ? e : [e], e.forEach((t) => {
        t instanceof HTMLElement && this.registeredElements.add(t);
      });
    },
    /**
     * Delete an element from registered
     * @param {HTMLElement} element
     */
    unregisterElement(e) {
      this.registeredElements.delete(e);
    },
    /**
     * Check if the element is part of the component
     * @param {Node} target
     * @returns {boolean}
     */
    isPartOfComponent(e) {
      return Array.from(this.registeredElements).some((t) => t.contains(e));
    },
    /**
     * Check if the element is outside the component
     * @param {Node} target
     * @returns {boolean}
     */
    isOutsideComponent(e) {
      return this.stateVisible && !this.$refs.refRoot.contains(e) && this.elementOwner() && !this.elementOwner().contains(e) && !this.isPartOfComponent(e);
    },
    /**
     * Handle document click
     * @param {MouseEvent} event
     */
    handleDocumentClick(e) {
      const t = e.target;
      this.isOutsideComponent(t) && this.visible && this.hide();
    },
    /**
     * Handle key down
     * @param {KeyboardEvent} event
     */
    handleKeyDown(e) {
      (e.key === "Escape" && this.stateVisible || e.key === "Enter" && this.stateVisible && this.autoClose) && this.visible && this.hide();
    },
    handleFocusOut(e) {
      const t = e.relatedTarget;
      (!t || t && this.isOutsideComponent(t)) && this.hide();
    },
    /**
     * !TODO - It is necessary to modify logic
     * Handle context menu
     * @param {MouseEvent} event
     */
    // handleContextMenu(event: MouseEvent) {
    //     event.preventDefault()
    //     this.calculatePosition(event)
    //     this.show()
    // },
    /**
     * Calculate position of the drop-down
     * @param {MouseEvent} event
     */
    calculatePosition(e) {
      if (!this.elementOwner())
        return this.position = { top: "0px", left: "0px" };
      const t = this.elementOwner().getBoundingClientRect(), n = {
        ...t,
        top: t.top + window.scrollY,
        right: t.right + window.scrollX,
        bottom: t.bottom + window.scrollY,
        left: t.left + window.scrollX,
        width: t.width
      }, a = {
        "top-start": this.calculateTopStart,
        "top-end": this.calculateTopEnd,
        "bottom-start": this.calculateBottomStart,
        "bottom-end": this.calculateBottomEnd,
        inner: this.calculateInner
      }[this.placement](n);
      this.position = {
        top: `${a.top + this.offsetTop}px`,
        left: `${a.left}px`
      };
    },
    calculateTopStart(e, t = !1) {
      const n = e.top - this.elementRoot().offsetHeight - this.marginY, s = e.left;
      return n < 0 && !t ? this.calculateBottomStart(e, !0) : s + this.elementRoot().offsetWidth > window.innerWidth ? this.calculateTopEnd(e, !0) : { top: n, left: s };
    },
    calculateTopEnd(e, t = !1) {
      const n = e.top - this.elementRoot().offsetHeight - this.marginY;
      let s = e.right - this.elementRoot().offsetWidth;
      return n < 0 && !t ? this.calculateBottomEnd(e, !0) : (s < 0 && (s = 0), { top: n, left: s });
    },
    calculateBottomStart(e, t = !1) {
      const n = e.bottom + this.marginY, s = e.left;
      return n + this.elementRoot().offsetHeight - window.scrollY > window.innerHeight && !t ? this.calculateTopStart(e, !0) : s + this.elementRoot().offsetWidth > window.innerWidth ? this.calculateBottomEnd(e, !0) : { top: n, left: s };
    },
    calculateBottomEnd(e, t = !1) {
      const n = e.bottom + this.marginY;
      let s = e.right - this.elementRoot().offsetWidth;
      return n + this.elementRoot().offsetHeight - window.scrollY > window.innerHeight && !t ? this.calculateTopEnd(e, !0) : (s < 0 && (s = 0), { top: n, left: s });
    },
    /**
     * Update list box width
     */
    updateComponentPosition() {
      this.$nextTick(() => {
        this.calculatePosition();
      });
    },
    /**
     * !TODO - It is necessary to modify logic
     */
    calculateInner(e, t) {
      const n = t ? t.clientY - e.top : 0, s = t ? t.clientX - e.left : 0;
      return { top: n, left: s };
    },
    /**
     * Update list box rect
     */
    onUpdateComponentRect() {
      this.updateComponentPosition();
    },
    /**
     * Event mounted component
     * @param {ComponentPublicInstance} cmpComponent
     * @param {boolean} register - Register element
     */
    onMountedComponent(e, t = !0) {
      this.cmpComponent = e, t && this.registerElement(e.$el);
    },
    /**
     * Show drop-down. Method reference to the parent component
     * @borrows BCollection.show
     */
    afterShow() {
      this.$nextTick(() => {
        var e;
        this.autoFocus && ((e = this.cmpComponent) == null || e.focus());
      });
    }
  },
  mounted() {
    document.addEventListener("click", this.handleDocumentClick), document.addEventListener("keydown", this.handleKeyDown), Pp(
      () => this.$refs.refRoot,
      (e) => {
        e.addEventListener("focusout", this.handleFocusOut);
      }
    );
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleDocumentClick), document.removeEventListener("keydown", this.handleKeyDown);
    const e = this.$refs.refRoot;
    e && e.removeEventListener("focusout", this.handleFocusOut);
  }
});
function Bp(e, t, n, s, a, i) {
  return m(), N(Xn, { to: e.teleportTo }, [
    e.isHidden ? Ke((m(), I("div", G({
      key: 0,
      class: e.classes,
      style: e.styles,
      role: "dialog",
      "aria-modal": "true",
      ref: "refRoot"
    }, e.$attrs), [
      W(ot, { name: "pop" }, {
        default: P(() => [
          L(e.$slots, "component", {
            onUpdateComponentRect: e.onUpdateComponentRect,
            onMountedComponent: e.onMountedComponent,
            hide: e.hide,
            registerElement: e.registerElement,
            unregisterElement: e.unregisterElement
          })
        ]),
        _: 3
      })
    ], 16)), [
      [nt, e.isVisibility]
    ]) : M("", !0)
  ], 8, ["to"]);
}
const Fs = /* @__PURE__ */ F(Mp, [["render", Bp]]);
function Lp(e = {}) {
  return { ...{
    ...we(),
    minWidth: 150
  }, ...e };
}
const dr = Lp();
function Rp(e, t) {
  return typeof e == "function" && (e = e()), e.props = { ...t, ...e.props }, e;
}
function Vp(e = {}) {
  return { ...{
    ...lt(),
    field: "",
    operation: te.Equal,
    showOperation: !0,
    operations: [
      te.Equal,
      te.NotEqual,
      te.Less,
      te.LessOrEqual,
      te.Greater,
      te.GreaterOrEqual,
      te.Contains,
      te.NotContains,
      te.StartsWith,
      te.NotStartsWith,
      te.EndsWith,
      te.NotEndsWith,
      te.In,
      te.NotIn,
      te.Between,
      te.NotBetween,
      te.IsNull,
      te.IsNotNull
    ]
  }, ...e };
}
const hn = Vp();
function Fp(e = {}) {
  return { ...{
    ...lt(),
    operation: te.Equal,
    equal: !0,
    notEqual: !0,
    less: !0,
    lessOrEqual: !0,
    greater: !0,
    greaterOrEqual: !0,
    contains: !0,
    notContains: !0,
    startsWith: !0,
    endsWith: !0,
    in: !0,
    notIn: !0,
    between: !0,
    notBetween: !0,
    isNull: !0,
    isNotNull: !0
  }, ...e };
}
const Me = Fp();
function Ue(e, t) {
  const n = e.charAt(0).toLowerCase() + e.slice(1);
  return {
    prop: n,
    value: te[e],
    text: re.global.t(`common.operations.${n}`),
    meta: { o: t }
  };
}
const Ws = [
  Ue("Equal", "=="),
  Ue("NotEqual", "!="),
  Ue("Less", "<"),
  Ue("LessOrEqual", "<="),
  Ue("Greater", ">"),
  Ue("GreaterOrEqual", ">="),
  Ue("Contains", "~"),
  Ue("NotContains", "!~"),
  Ue("StartsWith", "^"),
  Ue("NotStartsWith", "!^"),
  Ue("EndsWith", "|"),
  Ue("NotEndsWith", "!@"),
  Ue("In", "="),
  Ue("NotIn", "!="),
  Ue("IsNull", "#"),
  Ue("IsNotNull", "!#")
];
function Wp(e) {
  return Ws.find((t) => t.value === e);
}
function Up(e) {
  return e.map((t) => Ws.find((n) => n.value === t)).filter(Boolean);
}
const Sn = R({
  name: "BFilterComponent",
  extends: We,
  emits: ["change", "update:value"],
  props: {
    field: {
      type: String,
      default: hn.field
    },
    operation: {
      type: String,
      default: hn.operation
    },
    operations: {
      type: Array,
      default: hn.operations
    },
    value: {
      type: [String, Number, Boolean, Array, Object],
      default: hn.value
    },
    showOperation: {
      type: Boolean,
      default: hn.showOperation
    }
  },
  data() {
    return {
      stateText: this.text,
      stateValue: this.value,
      stateOperation: Wp(this.operation),
      stateOperations: this.operations,
      // HTML which will be excluded for drop-down-component
      registeredElements: []
    };
  },
  computed: {
    operationText() {
      var e, t;
      return (t = (e = this.stateOperation) == null ? void 0 : e.meta) == null ? void 0 : t.o;
    },
    operationsProps() {
      const e = Up(this.stateOperations), t = Ws, n = {};
      return t.forEach((s) => {
        n[s.prop] = e.some((a) => a.value === s.value);
      }), n;
    }
  },
  watch: {
    text: {
      handler(e) {
        this.stateText = e;
      }
    },
    value: {
      handler(e) {
        this.stateValue = e;
      }
    },
    operations: {
      handler(e) {
        this.stateOperations = e;
      }
    }
  },
  methods: {
    change() {
      this.$emit("change", {
        field: this.field,
        operation: this.stateOperation.value,
        value: this.stateValue,
        text: this.stateText
      }), this.$emit("update:value", this.stateValue);
    },
    onChangeOperation(e) {
      var t;
      ((t = this.stateOperation) == null ? void 0 : t.value) !== e.value && (this.stateOperation = e, this.change());
    }
  }
}), xp = j(
  q(() => import("./filter_list-CeK-ynQZ.js"))
), Hp = R({
  name: "BFilterCell",
  extends: de,
  components: { BButton: ze, BButtonClear: zr, BDropDownComponent: Fs, BFilterComponent: Sn },
  emits: ["change-filter"],
  props: {
    column: {
      type: Object,
      default: dr.column
    },
    minWidth: {
      type: Number,
      default: dr.minWidth
    }
  },
  data() {
    return {
      cssClass: "b-filter-cell",
      visibleMenu: !1
    };
  },
  computed: {
    isBelowMinWidth() {
      const e = this.column.width < this.minWidth;
      return e && (this.visibleMenu = !1), e;
    }
  },
  methods: {
    onShowMenu() {
      this.visibleMenu = !this.visibleMenu;
    },
    /**
     * Handle change filter
     * @param {IFilterComponentAttributes} data
     */
    onChangeFilter(e) {
      this.$emit("change-filter", e);
    },
    /**
     * Clear filter
     */
    onClear() {
      this.column.filter = void 0, this.$emit("change-filter", {
        field: this.column.field,
        operation: null,
        value: null,
        text: null
      });
    }
  },
  getFilterComponent: Rp,
  IconFilterList: xp,
  useIcon: $t
}), Yp = {
  key: 0,
  class: "b-filter-cell__content"
}, zp = {
  key: 0,
  class: "b-filter-cell__content--min"
};
function jp(e, t, n, s, a, i) {
  const r = T("BButton"), o = T("BButtonClear"), l = T("b-drop-down-component");
  return m(), I("th", {
    class: H(e.cssClass)
  }, [
    e.isHidden ? Ke((m(), I("div", Yp, [
      L(e.$slots, "default", {}, () => [
        W(ot, {
          name: "fade",
          mode: "out-in"
        }, {
          default: P(() => {
            var c, h, v, C, w;
            return [
              e.isBelowMinWidth ? (m(), I("div", zp, [
                W(r, {
                  class: "b-filter-cell__content--min__actions--menu",
                  onClick: e.onShowMenu,
                  key: "button",
                  text: ((c = e.column.filter) == null ? void 0 : c.text) || "...",
                  ref: "refOwnerDropDown",
                  plain: "",
                  title: ((h = e.column.filter) == null ? void 0 : h.text) || ""
                }, null, 8, ["onClick", "text", "title"]),
                W(ot, { name: "fade-transform" }, {
                  default: P(() => {
                    var E;
                    return [
                      (E = e.column.filter) != null && E.text ? (m(), N(o, {
                        key: 0,
                        class: "b-filter-cell__content--min__actions--clear",
                        plain: "",
                        onClear: e.onClear
                      }, null, 8, ["onClear"])) : M("", !0)
                    ];
                  }),
                  _: 1
                }),
                W(l, {
                  owner: e.$refs.refOwnerDropDown,
                  visible: e.visibleMenu,
                  "onUpdate:visible": t[0] || (t[0] = (E) => e.visibleMenu = E),
                  "offset-top": 3,
                  "auto-close": !1,
                  class: "b-filter-cell__content--min__menu"
                }, {
                  component: P(({ hide: E, registerElement: B }) => {
                    var k, y, g;
                    return [
                      (m(), N(it(
                        e.$options.getFilterComponent(e.column.filterComponent, {
                          field: e.column.field
                        })
                      ), {
                        field: e.column.field,
                        placeholder: e.column.header,
                        operation: (k = e.column.filter) == null ? void 0 : k.operation,
                        text: (y = e.column.filter) == null ? void 0 : y.text,
                        value: (g = e.column.filter) == null ? void 0 : g.value,
                        onChange: (b) => {
                          e.onChangeFilter(b), E();
                        },
                        onMounted: (b) => {
                          b.registeredElements.length && B(b.registeredElements);
                        }
                      }, null, 40, ["field", "placeholder", "operation", "text", "value", "onChange", "onMounted"]))
                    ];
                  }),
                  _: 1
                }, 8, ["owner", "visible"])
              ])) : (m(), N(it(
                e.$options.getFilterComponent(e.column.filterComponent, {
                  field: e.column.field,
                  placeholder: e.column.header
                })
              ), {
                key: 1,
                field: e.column.field,
                operation: (v = e.column.filter) == null ? void 0 : v.operation,
                value: (C = e.column.filter) == null ? void 0 : C.value,
                text: (w = e.column.filter) == null ? void 0 : w.text,
                onChange: e.onChangeFilter
              }, null, 40, ["field", "operation", "value", "text", "onChange"]))
            ];
          }),
          _: 1
        })
      ])
    ], 512)), [
      [nt, e.isVisibility]
    ]) : M("", !0)
  ], 2);
}
const To = /* @__PURE__ */ F(Hp, [["render", jp]]);
function qp(e = {}) {
  return { ...{
    ...we()
  }, ...e };
}
const ma = qp(), Gp = R({
  name: "BFilterRow",
  extends: de,
  components: { BFilterCell: To },
  emits: ["change-filter", "change-filters"],
  props: {
    columns: {
      type: Array,
      default: ma.columns
    },
    showSelection: {
      type: Boolean,
      default: ma.showSelection
    },
    showHighlighted: {
      type: Boolean,
      default: ma.showHighlighted
    }
  },
  data() {
    return {
      cssClass: "b-filter-row",
      filters: []
    };
  },
  methods: {
    updateFilters(e) {
      var a;
      const t = this.filters.findIndex((i) => i.field === e.field), n = e.value === null || e.value === void 0 || e.value === "" || ((a = e.value) == null ? void 0 : a.length) === 0, s = [...this.filters];
      n ? t !== -1 && this.filters.splice(t, 1) : t === -1 ? this.filters.push(e) : this.filters[t] = e, !this.areFiltersEqual(s, this.filters) && this.$emit("change-filters", this.filters);
    },
    /**
     * Compare filters for equality (old and new)
     * @param {IFilterComponentAttributes[]} oldFilters - Old filters
     * @param {IFilterComponentAttributes[]} filters - New filters
     * @returns {boolean} - Are filters equal
     */
    areFiltersEqual(e, t) {
      return e.length !== t.length ? !1 : (e.sort((n, s) => n.field.localeCompare(s.field)), t.sort((n, s) => n.field.localeCompare(s.field)), JSON.stringify(e) === JSON.stringify(t));
    },
    onChangeFilter(e) {
      this.$emit("change-filter", e), this.updateFilters(e);
    }
  }
}), Kp = { key: 0 }, Xp = { key: 1 };
function Qp(e, t, n, s, a, i) {
  const r = T("BFilterCell");
  return m(), I("tr", {
    class: H(e.cssClass)
  }, [
    e.showHighlighted ? (m(), I("th", Kp)) : M("", !0),
    e.showSelection ? (m(), I("th", Xp)) : M("", !0),
    (m(!0), I(ce, null, ye(e.columns, (o) => (m(), N(r, {
      visible: !!o.filterComponent,
      key: o.field,
      column: o,
      onChangeFilter: e.onChangeFilter
    }, null, 8, ["visible", "column", "onChangeFilter"]))), 128))
  ], 2);
}
const Jp = /* @__PURE__ */ F(Gp, [["render", Qp]]), Zp = R({
  name: "BHeader",
  extends: _t,
  components: { BHeaderCell: Tp, BFilterCell: To, BFilterRow: Jp, BHeaderSelection: Op },
  emits: [
    "update:sort",
    "change-sort",
    "move-column",
    "resize-column",
    "start-resize-column",
    "end-resize-column",
    "change-filter",
    "change-filters",
    "select-all"
  ],
  props: {
    columns: {
      type: Array,
      default: Nt.columns
    },
    draggable: {
      type: Boolean,
      default: Nt.draggable
    },
    resizable: {
      type: Boolean,
      default: Nt.resizable
    },
    showFilters: {
      type: Boolean,
      default: Nt.showFilters
    },
    showSelectAll: {
      type: Boolean,
      default: Nt.showSelectAll
    },
    highlighted: {
      type: Boolean,
      default: Nt.highlighted
    }
  },
  data() {
    return {
      sortColumns: []
    };
  },
  methods: {
    /**
     * Init columns
     */
    initColumns() {
      this.columns.forEach((e) => {
        if (typeof e.sort != "object") {
          const t = !!(e.sort || typeof e.sort > "u");
          e.sort = Pt(t);
        }
      });
    },
    /**
     * Get column by field
     * @param field
     */
    getColumnByField(e) {
      return this.columns.find((t) => t.field === e);
    },
    /**
     * Update sort
     * @param field
     * @param direction
     */
    updateSort(e, t) {
      var s;
      const n = this.getColumnByField(e);
      if (n)
        if (n.sort.direction = t, this.multiSort)
          if (t === Ee.None)
            this.sortColumns = this.sortColumns.filter((a) => a.field !== e);
          else {
            const a = this.sortColumns.find((i) => i.field === e);
            a ? a.sort.direction = t : this.sortColumns.push({ ...n, sort: Pt(t) });
          }
        else {
          const a = this.sortColumns[0] ?? null;
          a && a.field !== n.field && (typeof a.sort == "object" && ((s = a.sort) != null && s.direction) ? a.sort.direction = Ee.None : a.sort = Pt({ direction: Ee.None })), this.sortColumns = [n];
        }
    },
    /**
     * Handle drop column
     * @param {{ draggedField: string, targetField: string }} fields - The fields being moved
     * @param {string} fields.draggedField - The field of the column being dragged
     * @param {string} fields.targetField - The field of the target column
     */
    onDropColumn({ draggedField: e, targetField: t }) {
      const n = this.getColumnByField(e), s = this.getColumnByField(t);
      !n || !s || this.$emit("move-column", { draggedColumn: n, targetColumn: s });
    },
    /**
     * Handle resize column
     * @param {{ field: string, width: number }} fields - The field and width of the column being resized
     * @param {string} fields.field - The field of the column being resized
     * @param {number} fields.width - The width of the column being resized
     */
    onResizeColumn({ field: e, width: t }) {
      const n = this.getColumnByField(e);
      n && (n.width = t, this.$emit("resize-column", { column: n }));
    },
    /**
     * Handle start resize column
     * @param {{ field: string }} fields - The field of the column being resized
     */
    onStartResizeColumn({ field: e }) {
      const t = this.getColumnByField(e);
      t && this.$emit("start-resize-column", { column: t });
    },
    /**
     * Handle end resize column
     * @param {{ field: string }} fields - The field of the column being resized
     */
    onEndResizeColumn({ field: e }) {
      const t = this.getColumnByField(e);
      t && this.$emit("end-resize-column", { column: t });
    },
    /**
     * Handle change sort
     * @param {{ field: string, direction: TSortDirection }} fields - The field and direction of the column being sorted
     * @param {string} fields.field - The field of the column being sorted
     * @param {TSortDirection} fields.direction - The direction of the column being sorted
     */
    onChangeSort({ field: e, direction: t }) {
      this.updateSort(e, t);
      const n = hp(this.columns), s = pp(n);
      s && (this.$emit("update:sort", s), this.$emit("change-sort", s));
    }
  },
  computed: {
    multiSort() {
      return !!this.$parent.multiSort;
    },
    hasFilters() {
      return !!this.showFilters && this.columns.some((e) => e.filterComponent);
    }
  },
  created() {
    this.$watch(
      "columns",
      () => {
        this.initColumns();
      },
      { immediate: !0 }
    );
  }
}), eg = { class: "b-header" }, tg = { class: "b-header__row" };
function ng(e, t, n, s, a, i) {
  const r = T("BHeaderCell"), o = T("BHeaderSelection"), l = T("b-header-cell"), c = T("BFilterRow");
  return m(), I("thead", eg, [
    U("tr", tg, [
      e.highlighted ? (m(), N(r, {
        key: 0,
        class: "b-header-cell__highlight",
        width: 2,
        "min-width": 2,
        draggable: !1,
        resizable: !1,
        separator: !1
      })) : M("", !0),
      e.showSelectAll ? (m(), N(l, {
        key: 1,
        class: "b-header-cell__checkbox",
        width: 45,
        "min-width": 45,
        draggable: !1,
        resizable: !1
      }, {
        default: P(() => [
          W(o, {
            onSelectAll: t[0] || (t[0] = (h) => e.$emit("select-all", h))
          })
        ]),
        _: 1
      })) : M("", !0),
      (m(!0), I(ce, null, ye(e.columns, (h, v) => (m(), N(r, {
        key: h.field,
        "data-index": v,
        field: h.field,
        text: h.header,
        sort: h.sort,
        width: h.width,
        draggable: h.draggable && e.draggable,
        resizable: h.resizable && e.resizable,
        onDrop: e.onDropColumn,
        onResize: e.onResizeColumn,
        onStartResize: e.onStartResizeColumn,
        onEndResize: e.onEndResizeColumn,
        onChangeSort: e.onChangeSort
      }, null, 8, ["data-index", "field", "text", "sort", "width", "draggable", "resizable", "onDrop", "onResize", "onStartResize", "onEndResize", "onChangeSort"]))), 128))
    ]),
    e.hasFilters ? (m(), N(c, {
      key: 0,
      "show-selection": e.showSelectAll,
      "show-highlighted": e.highlighted,
      class: "b-header__row",
      columns: e.columns,
      onChangeFilters: t[1] || (t[1] = (h) => e.$emit("change-filters", h)),
      onChangeFilter: t[2] || (t[2] = (h) => e.$emit("change-filter", h))
    }, null, 8, ["show-selection", "show-highlighted", "columns"])) : M("", !0)
  ]);
}
const sg = /* @__PURE__ */ F(Zp, [["render", ng]]);
function ag(e = {}) {
  return { ...{
    ...we(),
    text: "No data"
  }, ...e };
}
const Ao = ag();
class Pv {
  constructor(t = {}) {
    u(this, "text");
    u(this, "visible");
    Object.assign(this, Ao, t);
  }
}
const ig = j(
  q(() => import("./no_data-T3rWKgjd.js"))
), rg = R({
  name: "BEmpty",
  extends: de,
  components: { NoDataIcon: ig },
  props: {
    text: {
      type: String,
      default: Ao.text
    }
  },
  data() {
    return {
      cssClass: "b-empty"
    };
  },
  computed: {
    classes() {
      return [this.cssClass];
    }
  }
});
function og(e, t, n, s, a, i) {
  const r = T("NoDataIcon");
  return m(), I("div", {
    class: H(e.classes)
  }, [
    W(r),
    L(e.$slots, "default", {}, () => [
      U("p", null, X(e.text), 1)
    ])
  ], 2);
}
const lg = /* @__PURE__ */ F(rg, [["render", og]]);
function di(e = {}) {
  return { ...{
    ...Ps(),
    maxRows: 6,
    autoWidth: !1,
    wordWrap: !1,
    separator: ";"
  }, ...e };
}
const Pn = di();
function ug(e = {}) {
  return { ...{
    ...Os(),
    wordWrap: !1
  }, ...e };
}
const No = ug();
class Mv {
  constructor(t = {}) {
    u(this, "disabled");
    u(this, "visible");
    u(this, "text");
    u(this, "value");
    u(this, "icon");
    u(this, "readonly");
    u(this, "selected");
    u(this, "wordWrap");
    u(this, "onPropClick");
    u(this, "onPropSelected");
    Object.assign(this, No, t);
  }
}
const Oo = R({
  name: "BListBoxItem",
  extends: Ga,
  props: {
    wordWrap: {
      type: Boolean,
      default: No.selected
    }
  },
  computed: {
    attributes() {
      return {
        ...qa.computed.attributes.call(this),
        role: "option",
        "aria-label": this.text,
        "aria-selected": this.selected && !this.disabled,
        "aria-disabled": this.disabled
      };
    },
    classText() {
      const e = [`${this.cssClass}--text`];
      return this.wordWrap || e.push(`${this.cssClass}--nowrap`), e.join(" ");
    }
  },
  created() {
    this.cssClass = "b-listbox__item";
  }
}), cg = j(q(() => import("./drag-B89FlOil.js"))), dg = R({
  name: "BListBox",
  extends: Xa,
  components: {
    BCollection: _n,
    BListBoxItem: Oo,
    BIcon: Ae
  },
  emits: ["refresh", "click", "move-item"],
  props: {
    filterText: {
      type: String,
      default: Pn.filterText
    },
    maxRows: {
      type: Number,
      default: Pn.maxRows
    },
    autoWidth: {
      type: Boolean,
      default: Pn.autoWidth
    },
    wordWrap: {
      type: Boolean,
      default: Pn.wordWrap
    },
    draggable: {
      type: Boolean,
      default: Pn.draggable
    }
  },
  data() {
    return {
      containerHeight: "auto",
      isHeightCalculated: !1,
      stateFilterText: "",
      copyStateItems: [],
      draggedItem: null,
      draggedIndex: -1
    };
  },
  computed: {
    classes() {
      return [
        ...za.computed.classes.call(this),
        {
          [`${this.cssClass}--auto-width`]: !!this.autoWidth
        }
      ];
    },
    outItems() {
      let e;
      if (this.stateFilterText) {
        const t = this.stateFilterText.toLowerCase();
        e = this.stateItems.filter(
          (n) => {
            var s;
            return (s = String(n.text)) == null ? void 0 : s.toLowerCase().includes(t);
          }
        );
      } else
        e = this.stateItems;
      return this.draggedIndex === -1 && (e.length ? this.currentIndex = 0 : this.currentIndex = -1, (e.length !== this.stateItems.length || !this.stateFilterText) && (this.isHeightCalculated = !1, this.calculateContainerHeightNextTick())), e;
    },
    /**
     * Maximum number of rows, which can be displayed
     * If 0, then we display all lines
     * @returns {number}
     */
    maxRowsVisible() {
      return this.maxRows === 0 ? this.outItems.length : Math.min(this.maxRows, this.outItems.length);
    },
    transitionGroupName() {
      return this.draggable ? "b-listbox__item" : "disabled";
    }
  },
  watch: {
    text: {
      handler(e) {
        this.isSelected() && this.getSelectedText() !== e && this.resetSelected(), this.stateFilterText || this.searchByText(e);
      }
    },
    stateVisible() {
      this.stateVisible && this.calculateContainerHeightNextTick();
    },
    currentIndex: {
      handler(e) {
        this.stateVisible && e !== -1 && !this.$options.isMouseEnter && this.scrollToActiveItem();
      },
      immediate: !0
    },
    filterText: {
      handler(e) {
        this.isSelected() || (this.stateFilterText = e, this.currentIndex = 0);
      },
      immediate: !0
    },
    stateSelected: {
      handler(e) {
        e.length && (this.stateFilterText = "");
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    this.cssClass = "b-listbox";
  },
  mounted() {
    this.calculateContainerHeightNextTick();
  },
  methods: {
    /**
     * Get items as ComponentPublicInstance[]
     * @returns ComponentPublicInstance[]
     */
    getRefItems() {
      return this.$refs.refItems || [];
    },
    /**
     * Get the first visible element
     * @returns {HTMLElement}
     */
    getRefLastVisibleItem() {
      const e = this.getRefItems();
      return e.length > 0 ? e[this.maxRowsVisible - 1].$el : void 0;
    },
    /**
     * Get visible items height
     * @returns number
     */
    getVisibleItemsHeight() {
      if (this.isEmpty())
        return 40;
      const t = this.$refs.refContainer.getBoundingClientRect().top, s = this.getRefLastVisibleItem().getBoundingClientRect();
      return s.top - t + s.height;
    },
    createObserver(e, t) {
      const n = new IntersectionObserver((s) => {
        s[0].isIntersecting && (t(), n.disconnect());
      });
      n.observe(e);
    },
    /**
     * Scroll to the active item
     */
    scrollToActiveItem() {
      const e = () => {
        if (!this.isHeightCalculated) {
          requestAnimationFrame(e);
          return;
        }
        const t = this.getRefItems();
        if (t.length === 0 || this.currentIndex === -1 || this.currentIndex >= t.length)
          return;
        const n = t[this.currentIndex].$el, s = this.$refs.refContainer;
        if (n && s) {
          const a = s.scrollTop, i = s.offsetHeight, r = n.offsetTop, o = n.offsetHeight;
          if (!(r >= a && r + o <= a + i) && this.maxRowsVisible !== this.outItems.length) {
            const h = () => {
              if (n.offsetParent !== null) {
                const v = r - i / 2 + o / 2;
                s.scrollTo({
                  top: v,
                  behavior: "smooth"
                });
              } else
                requestAnimationFrame(h);
            };
            requestAnimationFrame(h);
          }
        }
      };
      e();
    },
    /**
     * Calculate container height
     * @returns void
     */
    calculateContainerHeight() {
      !this.stateVisible || this.isHeightCalculated || (this.containerHeight = this.maxRowsVisible === this.outItems.length ? "auto" : `${this.getVisibleItemsHeight()}px`, this.isHeightCalculated = !0, this.$emit("refresh"));
    },
    calculateContainerHeightNextTick() {
      this.$nextTick(() => {
        this.calculateContainerHeight();
      });
    },
    /**
     * Search and installation of an active element by text
     * @param {string} text
     */
    searchByText(e) {
      var t;
      if (!e) {
        this.currentIndex = 0;
        return;
      }
      e = e.toLowerCase();
      for (let n = 0; n < this.outItems.length; n++) {
        const s = this.outItems[n];
        if ((((t = String(s.text)) == null ? void 0 : t.toLowerCase()) || "").includes(e)) {
          this.currentIndex = n;
          break;
        }
      }
    },
    onDragStart({ event: e }) {
      if (!this.draggable)
        return;
      const t = e.currentTarget, n = Number(t.dataset.index);
      n !== void 0 && (this.draggedItem = this.outItems[n], this.draggedIndex = n);
    },
    onDragEnter({ event: e }) {
      if (!this.draggable || this.draggedItem === null)
        return;
      const t = e.currentTarget, n = Number(t.dataset.index);
      if (n === void 0 || n === this.draggedIndex)
        return;
      const s = (n > this.draggedIndex, n);
      this.stateItems.splice(this.draggedIndex, 1), this.stateItems.splice(s, 0, this.draggedItem), this.draggedIndex = n;
    },
    onDragEnd({ event: e }) {
      !this.draggable || this.draggedItem === null || (this.draggedIndex = -1, this.draggedItem = null);
    },
    onDrop({ event: e, value: t }) {
      if (!this.draggable)
        return;
      const n = this.outItems.find((s) => s.value === t);
      this.$emit("move-item", {
        event: e,
        item: n,
        targetIndex: this.draggedIndex
      });
    }
  },
  DragIcon: cg
});
function fg(e, t, n, s, a, i) {
  const r = T("BIcon"), o = T("b-list-box-item");
  return e.isHidden ? Ke((m(), I("div", {
    key: 0,
    class: H(e.classes)
  }, [
    U("div", {
      class: "b-listbox__container",
      ref: "refContainer",
      style: Ye({ height: e.containerHeight }),
      tabindex: "-1"
    }, [
      W(Dr, G({
        name: e.transitionGroupName,
        tag: "ul",
        class: "b-listbox__list",
        role: "listbox",
        onKeydown: e.handleKeydown,
        onFocus: e.handleFocus,
        onBlur: e.handleBlur,
        tabindex: "0",
        ref: "refControl"
      }, e.attributes), {
        default: P(() => [
          (m(!0), I(ce, null, ye(e.outItems, (l, c) => (m(), N(o, G({
            key: c,
            "data-index": c,
            ref_for: !0
          }, l, {
            draggable: e.draggable && l.draggable !== !1 && !l.disabled,
            "word-wrap": e.wordWrap,
            ref_for: !0,
            ref: "refItems",
            onClick: (h) => e.onClickItem({ event: h.event, item: l }),
            onDragstart: e.onDragStart,
            onDragenter: e.onDragEnter,
            onDragend: e.onDragEnd,
            onDrop: e.onDrop,
            onMouseenter: (h) => e.handleMouseEnterInItem(c),
            onMouseleave: t[0] || (t[0] = (h) => e.handleMouseLeaveInItem()),
            class: {
              "b-listbox__item--active": e.isFocused && c === e.currentIndex && !l.disabled && !l.readonly,
              "b-listbox__item--dragged": e.draggedItem === l
            }
          }), {
            "drag-icon": P(() => [
              W(r, {
                icon: e.$options.DragIcon,
                size: "1.3em",
                class: "b-listbox__list--drag-icon"
              }, null, 8, ["icon"])
            ]),
            "item-icon": P(({ item: h }) => [
              L(e.$slots, "item-icon", { item: h })
            ]),
            default: P(({ item: h }) => [
              L(e.$slots, "item", { item: h })
            ]),
            _: 2
          }, 1040, ["data-index", "draggable", "word-wrap", "onClick", "onDragstart", "onDragenter", "onDragend", "onDrop", "onMouseenter", "class"]))), 128))
        ]),
        _: 3
      }, 16, ["name", "onKeydown", "onFocus", "onBlur"])
    ], 4)
  ], 2)), [
    [nt, e.isVisibility]
  ]) : M("", !0);
}
const mg = /* @__PURE__ */ F(dg, [["render", fg]]);
var hg = /* @__PURE__ */ ((e) => (e.Text = "text", e.Password = "password", e.Number = "number", e.Email = "email", e.Url = "url", e.Tel = "tel", e.Search = "search", e.Hidden = "hidden", e.File = "file", e))(hg || {});
function Us(e = {}) {
  return { ...{
    ...ja(),
    placeholder: "",
    type: "text",
    maxlength: void 0,
    minlength: void 0,
    visibility: !0,
    clearButton: !0,
    clearWithText: !1,
    state: "normal",
    showStateIcon: !1,
    sizeControl: ie.Medium,
    loading: ft(!1)
  }, ...e };
}
const xe = Us();
class Bv {
  constructor(t = {}) {
    u(this, "placeholder");
    u(this, "type");
    u(this, "pattern");
    u(this, "required");
    u(this, "autocomplete");
    u(this, "maxlength");
    u(this, "minlength");
    u(this, "readonly");
    u(this, "visibility");
    u(this, "clearButton");
    u(this, "clearWithText");
    u(this, "text");
    u(this, "value");
    u(this, "disabled");
    u(this, "state");
    u(this, "showStateIcon");
    u(this, "sizeControl");
    u(this, "loading");
    u(this, "simple");
    Object.assign(this, xe, t);
  }
}
const pg = j(
  q(() => import("./check_circle-DDxXqkce.js"))
), gg = j(
  q(() => import("./error_circle-CDe4rl39.js"))
), bg = R({
  name: "BInput",
  extends: Ns,
  components: { BButtonClear: zr, BIcon: Ae, BSpinner: Is, BSkeleton: Ya },
  ESkeletonAnimation: Jn,
  isSpinner: Un,
  emits: [
    "change",
    "clear",
    "click-clear",
    "update:value",
    "update:text",
    "update:visibility",
    "click-body"
  ],
  props: {
    placeholder: {
      type: String,
      default: xe.placeholder
    },
    type: {
      type: String,
      default: xe.type
    },
    pattern: {
      type: String,
      default: xe.pattern
    },
    required: {
      type: Boolean,
      default: xe.required
    },
    autocomplete: {
      type: String,
      default: xe.autocomplete
    },
    maxlength: {
      type: Number,
      default: xe.maxlength
    },
    minlength: {
      type: Number,
      default: xe.minlength
    },
    visibility: {
      type: Boolean,
      default: xe.visibility
    },
    clearButton: {
      type: Boolean,
      default: xe.clearButton
    },
    clearWithText: {
      type: Boolean,
      default: xe.clearWithText
    },
    showStateIcon: {
      type: Boolean,
      default: xe.showStateIcon
    },
    sizeControl: {
      type: String,
      default: xe.sizeControl
    },
    loading: {
      type: [Boolean, Object],
      default: xe.loading
    },
    simple: {
      type: Boolean,
      default: xe.simple
    },
    asSelect: {
      type: Boolean,
      default: xe.asSelect
    }
  },
  inheritAttrs: !1,
  ESizeControl: ie,
  data() {
    return {
      cssClass: "b-input",
      stateVisibility: this.visibility,
      stateLoading: { visible: !1 },
      keysup: [],
      keysdown: []
    };
  },
  provide() {
    return {
      sizeControl: et(() => this.sizeControl),
      disabled: et(() => this.stateDisabled),
      visibility: et(() => this.stateVisibility),
      onVisibility: this.onVisibility
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--disabled`]: this.stateDisabled,
          [`${this.cssClass}--readonly`]: !!this.readonly,
          [`${this.cssClass}--${this.stateState}`]: !!(this.stateState && this.stateState !== "normal"),
          [`${this.cssClass}--simple`]: !!this.simple
        },
        {
          [`${this.cssClass}--${this.sizeControl}`]: this.sizeControl !== ie.Medium
        },
        this.rootClasses
      ];
    },
    effectiveType() {
      return this.stateVisibility ? this.type || "text" : "password";
    },
    visibleClearButton() {
      return !!this.clearButton && !this.clearWithText || !!this.clearWithText && !!this.stateText;
    }
  },
  watch: {
    value: {
      immediate: !0,
      handler(e) {
        this.stateValue = e;
      }
    },
    visibility(e) {
      this.stateVisibility = e;
    },
    loading: {
      immediate: !0,
      deep: !0,
      handler(e) {
        this.stateLoading = ft(e);
      }
    },
    disabled: {
      immediate: !0,
      handler(e) {
        this.stateDisabled = e;
      }
    }
  },
  methods: {
    onVisibility() {
      this.stateVisibility = !this.stateVisibility, this.$emit("update:visibility", this.stateVisibility), this.focus();
    },
    onClear(e) {
      if (e.stopPropagation(), this.stateDisabled || this.readonly) {
        this.readonly && this.$emit("click-clear", e);
        return;
      }
      this.reset(), this.$emit("update:text", this.stateText), this.$emit("update:value", this.stateValue), this.$emit("clear", e), this.$emit("change", { text: this.stateText, value: this.stateValue }), this.focus();
    },
    onInput(e) {
      var t;
      this.stateText = ((t = e.target) == null ? void 0 : t.value) || "", this.asSelect || (this.stateValue = this.stateText), this.$emit("change", { text: this.stateText, value: this.stateValue }), this.$emit("update:text", this.stateText), this.$emit("update:value", this.stateValue);
    },
    focus() {
      const e = this.$refs.refControl;
      e && (e.focus(), setTimeout(() => {
        e.setSelectionRange(e.value.length, e.value.length);
      }, 0));
    },
    reset() {
      this.stateText = "", this.stateValue = this.asSelect ? null : "";
    },
    validateInput(e) {
      const t = e.target;
      this.stateInvalid = !t.checkValidity();
    },
    onChange(e) {
      this.validateInput(e);
    },
    onClickBody(e) {
      if (e.currentTarget === e.target) {
        this.focus(), this.$emit("click-body", e);
        const t = this.$refs.refControl;
        t && t.click();
      }
    }
  },
  CheckIcon: pg,
  ErrorIcon: gg
}), yg = { class: "b-input__actions" }, wg = { class: "b-input__field" }, vg = ["type", "placeholder", "pattern", "required", "autocomplete", "maxlength", "minlength", "readonly", "disabled", "name", "value"], Cg = { class: "b-input__actions" };
function Dg(e, t, n, s, a, i) {
  const r = T("BIcon"), o = T("BSpinner"), l = T("BSkeleton"), c = T("BButtonClear");
  return m(), I("div", {
    class: H(e.classes),
    onClick: t[2] || (t[2] = (...h) => e.onClickBody && e.onClickBody(...h))
  }, [
    U("div", yg, [
      e.showStateIcon && e.state === "success" ? (m(), N(r, {
        key: 0,
        class: "b-input__actions--state",
        icon: e.$options.CheckIcon
      }, null, 8, ["icon"])) : M("", !0),
      e.showStateIcon && e.state === "success" ? (m(), N(r, {
        key: 1,
        class: "b-input__actions--state",
        icon: e.$options.ErrorIcon
      }, null, 8, ["icon"])) : M("", !0),
      L(e.$slots, "prefix", {
        text: e.stateText,
        value: e.stateValue,
        disabled: e.stateDisabled,
        visibility: e.stateVisibility,
        onVisibility: e.onVisibility
      })
    ]),
    U("div", wg, [
      L(e.$slots, "default", {}, () => [
        U("input", G({
          ref: "refControl",
          type: e.effectiveType,
          placeholder: e.placeholder,
          pattern: e.pattern,
          required: e.required,
          autocomplete: e.autocomplete,
          maxlength: e.maxlength,
          minlength: e.minlength,
          readonly: e.readonly,
          disabled: e.stateDisabled,
          name: e.stateName,
          value: e.stateText,
          onInput: t[0] || (t[0] = (...h) => e.onInput && e.onInput(...h)),
          onChange: t[1] || (t[1] = (...h) => e.onChange && e.onChange(...h))
        }, e.attributes), null, 16, vg)
      ])
    ]),
    U("div", Cg, [
      e.stateLoading.visible && e.$options.isSpinner(e.stateLoading) ? (m(), N(o, {
        key: 0,
        class: "b-input__actions--spinner",
        size: e.$options.ESizeControl.Medium
      }, null, 8, ["size"])) : e.stateLoading.visible ? (m(), N(l, {
        key: 1,
        animation: e.stateLoading.animation,
        class: "b-input__actions--skeleton",
        width: "auto",
        height: "auto"
      }, null, 8, ["animation"])) : M("", !0),
      W(ot, { name: "fade" }, {
        default: P(() => [
          e.visibleClearButton ? (m(), N(c, {
            key: 0,
            onClear: e.onClear
          }, null, 8, ["onClear"])) : M("", !0)
        ]),
        _: 1
      }),
      L(e.$slots, "suffix", {
        text: e.stateText,
        value: e.stateValue,
        disabled: e.disabled,
        onVisibility: e.onVisibility
      })
    ])
  ], 2);
}
const Gn = /* @__PURE__ */ F(bg, [["render", Dg]]);
function _g(e = {}) {
  const t = di(), n = Us();
  return { ...{
    ...t,
    placement: "bottom-start",
    triggerActivate: "click",
    maxRows: 6,
    autoWidth: !1,
    wordWrap: !1,
    readonly: !1,
    editable: !0,
    showIcon: !0,
    ...n
  }, ...e };
}
const le = _g();
class Lv {
  constructor(t = {}) {
    u(this, "disabled");
    u(this, "items");
    u(this, "selected");
    u(this, "multiple");
    u(this, "readonly");
    u(this, "editable");
    u(this, "visible");
    u(this, "text");
    u(this, "value");
    u(this, "onSelectedItem");
    u(this, "onSelectedItems");
    u(this, "placement");
    u(this, "triggerActivate");
    u(this, "placeholder");
    u(this, "type");
    u(this, "maxlength");
    u(this, "minlength");
    u(this, "visibility");
    u(this, "clearButton");
    u(this, "clearWithText");
    u(this, "state");
    u(this, "showStateIcon");
    u(this, "sizeControl");
    u(this, "loading");
    this.items = [], Object.assign(this, le, t);
  }
}
function $g(e = {}) {
  const t = Vs(), n = di();
  return { ...{
    ...t,
    ...n,
    maxRows: 6,
    contextMenu: !0,
    autoWidth: !1,
    wordWrap: !1
  }, ...e };
}
const Se = $g();
class Rv {
  constructor(t = {}) {
    u(this, "disabled");
    u(this, "items");
    u(this, "selected");
    u(this, "multiple");
    u(this, "visible");
    u(this, "text");
    u(this, "onSelectedItem");
    u(this, "onSelectedItems");
    u(this, "placement");
    u(this, "triggerActivate");
    u(this, "owner");
    u(this, "contextMenu");
    u(this, "autoWidth");
    u(this, "wordWrap");
    u(this, "offsetTop");
    u(this, "maxRows");
    u(this, "autoFocus");
    u(this, "autoClose");
    u(this, "teleportTo");
    this.items = [], Object.assign(this, Se, t);
  }
}
const Sg = R({
  name: "BDropDown",
  extends: _n,
  components: { BDropDownComponent: Fs, BListBox: mg },
  emits: [
    "selected-item",
    "selected-items",
    "update:value",
    "update:text",
    "update:selected",
    "update:visible",
    "mounted",
    "click",
    "change"
  ],
  props: {
    hidden: {
      type: Boolean,
      default: Se.hidden
    },
    items: {
      type: [Array, Object],
      default: Se.items
    },
    selected: {
      type: [Array, Object],
      default: Se.selected
    },
    multiple: {
      type: Boolean,
      default: Se.multiple
    },
    maxRows: {
      type: Number,
      default: Se.maxRows
    },
    autoWidth: {
      type: Boolean,
      default: Se.autoWidth
    },
    wordWrap: {
      type: Boolean,
      default: Se.wordWrap
    },
    filterText: {
      type: String,
      default: Se.filterText
    },
    singleSelection: {
      type: Boolean,
      default: Se.singleSelection
    },
    onPropItemSelected: {
      type: Function,
      default: Se.onPropItemSelected
    },
    onPropItemsSelected: {
      type: Function,
      default: Se.onPropItemsSelected
    },
    placement: {
      type: String,
      default: Se.placement
    },
    triggerActivate: {
      type: String,
      default: Se.triggerActivate
    },
    owner: {
      type: Object,
      default: Se.owner
    },
    contextMenu: {
      type: Boolean,
      default: Se.contextMenu
    },
    visible: {
      type: Boolean,
      default: Se.visible
    },
    offsetTop: {
      type: Number,
      default: Se.offsetTop
    },
    autoFocus: {
      type: Boolean,
      default: Se.autoFocus
    },
    autoClose: {
      type: Boolean,
      default: Se.autoClose
    },
    teleportTo: {
      type: [Object, String],
      default: Se.teleportTo
    }
  },
  data() {
    return {
      cmpControl: null,
      registeredElements: []
    };
  },
  computed: {
    classes() {
      return [this.cssClass];
    }
  },
  created() {
    this.cssClass = "b-drop-down";
  },
  methods: {
    /**
     * A separate event
     * @param { ICollectionItemAttributes } data
     */
    onSelectedItem(e) {
      this.$emit("selected-item", e);
    },
    /**
     * A separate event
     * @param { ICollectionItemAttributes[] } data
     */
    onSelectedItems({
      selected: e,
      text: t,
      value: n
    }) {
      this.$emit("update:selected", e), this.$emit("update:text", t), this.$emit("update:value", n), this.$emit("selected-items", {
        selected: e,
        text: t,
        value: n
      });
    },
    onToggleVisible(e) {
      this.$emit("update:visible", e);
    },
    onMounted(e) {
      this.cmpControl = e;
    },
    afterShow() {
      this.$nextTick(() => {
        this.cmpControl.cmpComponent.scrollToActiveItem();
      });
    },
    onClick({ event: e, item: t }) {
      this.$emit("click", {
        event: e,
        item: t
      });
    }
  }
});
function Eg(e, t, n, s, a, i) {
  const r = T("b-list-box"), o = T("b-drop-down-component");
  return m(), N(o, {
    class: H(e.classes),
    hidden: e.hidden,
    placement: e.placement,
    visible: e.visible,
    "offset-top": e.offsetTop,
    "auto-focus": e.autoFocus,
    "auto-close": e.autoClose,
    "teleport-to": e.teleportTo,
    "trigger-activate": e.triggerActivate,
    owner: e.owner,
    "context-menu": e.contextMenu,
    onToggleVisible: e.onToggleVisible,
    onMounted: e.onMounted,
    tabindex: "0"
  }, {
    component: P(({ onUpdateComponentRect: l, onMountedComponent: c, hide: h, registerElement: v }) => [
      W(r, {
        tabindex: "-1",
        visible: e.visible,
        hidden: e.hidden,
        items: e.items,
        selected: e.selected,
        text: e.text,
        value: e.value,
        multiple: e.multiple,
        "max-rows": e.maxRows,
        focused: e.focused,
        "auto-width": e.autoWidth,
        "word-wrap": e.wordWrap,
        "filter-text": e.filterText,
        "single-selection": e.singleSelection,
        "no-select": e.contextMenu && !e.multiple && !e.singleSelection,
        onPropItemSelected: e.onPropItemSelected,
        onPropItemsSelected: e.onPropItemsSelected,
        onMounted: c,
        onSelectedItem: e.onSelectedItem,
        onSelectedItems: e.onSelectedItems,
        onClick: ({ event: C, item: w }) => {
          e.onClick({ event: C, item: w }), !e.multiple && e.$nextTick(() => {
            h();
          });
        },
        onChange: t[0] || (t[0] = (C) => e.$emit("change", C)),
        onRefresh: l
      }, {
        "item-icon": P(({ item: C }) => [
          L(e.$slots, "item-icon", { item: C })
        ]),
        item: P(({ item: C }) => [
          L(e.$slots, "item", { item: C })
        ]),
        _: 2
      }, 1032, ["visible", "hidden", "items", "selected", "text", "value", "multiple", "max-rows", "focused", "auto-width", "word-wrap", "filter-text", "single-selection", "no-select", "onPropItemSelected", "onPropItemsSelected", "onMounted", "onSelectedItem", "onSelectedItems", "onClick", "onRefresh"])
    ]),
    _: 3
  }, 8, ["class", "hidden", "placement", "visible", "offset-top", "auto-focus", "auto-close", "teleport-to", "trigger-activate", "owner", "context-menu", "onToggleVisible", "onMounted"]);
}
const xs = /* @__PURE__ */ F(Sg, [["render", Eg]]);
function Ig(e = {}) {
  return { ...{
    ...Zn(),
    sizeControl: ie.Medium
  }, ...e };
}
const ha = Ig();
function kg(e = {}) {
  const t = lt(), n = Dn();
  return { ...{
    ...t,
    ...n,
    sizeControl: ie.Medium,
    asLabel: !0
  }, ...e };
}
const Ft = kg(), Tg = j(q(() => import("./close-Bn8_ySvr.js"))), Ag = R({
  name: "BTag",
  extends: We,
  components: {
    BButton: ze,
    BIcon: Ae
  },
  emits: ["click", "remove"],
  props: {
    type: {
      type: String,
      default: Ft.type
    },
    sizeControl: {
      type: String,
      default: Ft.sizeControl
    },
    asLabel: {
      type: Boolean,
      default: Ft.asLabel
    },
    // BButton attributes
    outlined: {
      type: Boolean,
      default: Ft.outlined
    },
    plain: {
      type: Boolean,
      default: Ft.plain
    },
    simple: {
      type: Boolean,
      default: Ft.simple
    },
    loading: {
      type: [Boolean, Object],
      default: Ft.loading
    },
    onPropClick: {
      type: Function,
      default: Ft.onPropClick
    }
  },
  ESizeControl: ie,
  data() {
    return {
      cssClass: "b-tag"
    };
  },
  computed: {
    classes() {
      return [
        {
          [`${this.cssClass}--${this.sizeControl}`]: this.sizeControl !== ie.Medium
        }
      ];
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", {
        event: e,
        value: this.value
      });
    }
  },
  IconClose: Tg
});
function Ng(e, t, n, s, a, i) {
  const r = T("BButton");
  return m(), N(r, {
    class: "b-tag",
    text: e.text,
    type: e.type,
    disabled: e.disabled,
    "size-control": e.sizeControl,
    outlined: e.outlined,
    plain: e.plain,
    simple: e.simple,
    loading: e.loading,
    "as-label": e.asLabel,
    title: e.text,
    onClick: t[0] || (t[0] = (o) => e.onClick(o))
  }, {
    before: P(() => [
      L(e.$slots, "before")
    ]),
    after: P(() => [
      L(e.$slots, "after")
    ]),
    default: P(() => [
      L(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["text", "type", "disabled", "size-control", "outlined", "plain", "simple", "loading", "as-label", "title"]);
}
const Og = /* @__PURE__ */ F(Ag, [["render", Ng]]), Pg = j(q(() => import("./close-Bn8_ySvr.js"))), Mg = R({
  name: "BTags",
  extends: _n,
  components: {
    BIcon: Ae,
    BTag: Og
  },
  emits: ["click", "remove", "update:items", "change"],
  props: {
    items: {
      type: Array,
      default: ha.items
    },
    type: {
      type: String,
      default: ha.type
    },
    sizeControl: {
      type: String,
      default: ha.sizeControl
    }
  },
  ESizeControl: ie,
  data() {
    return {
      stateItems: this.items
    };
  },
  computed: {
    classes() {
      return [
        ...za.computed.classes.call(this),
        {
          [`${this.cssClass}--${this.sizeControl}`]: this.sizeControl !== ie.Medium
        }
      ];
    }
  },
  watch: {
    items: {
      handler(e) {
        this.stateItems = e;
      },
      deep: !0
    }
  },
  methods: {
    onClick(e, t) {
      this.$emit("click", {
        event: e,
        item: t
      });
    },
    onRemove(e, t) {
      t.disabled || t.closeable === !1 || (t.onRemove && t.onRemove(e, t), this.$emit("remove", {
        event: e,
        item: t
      }), this.stateItems = this.stateItems.filter((n) => n.value !== t.value), this.$emit("update:items", this.stateItems));
    },
    onKeyDown(e, t) {
      [" ", "Enter", "Delete", "Backspace"].includes(e.key) && (e.preventDefault(), this.onRemove(e, t));
    }
  },
  created() {
    this.cssClass = "b-tags";
  },
  IconClose: Pg
});
function Bg(e, t, n, s, a, i) {
  const r = T("BIcon"), o = T("b-tag");
  return m(), I("div", {
    class: H(e.classes)
  }, [
    (m(!0), I(ce, null, ye(e.stateItems, (l, c) => (m(), N(o, G({
      key: c,
      type: e.type,
      disabled: e.disabled,
      "size-control": e.sizeControl,
      "as-label": !1,
      ref_for: !0
    }, l, {
      onClick: (h) => e.onClick(h, l),
      onKeydown: (h) => e.onKeyDown(h, l)
    }), {
      after: P(() => [
        l.closeable !== !1 ? (m(), N(r, {
          key: 0,
          icon: e.$options.IconClose,
          class: "b-tags__item--close-icon",
          onClick: _r((h) => e.onRemove(h, l), ["stop", "prevent"])
        }, null, 8, ["icon", "onClick"])) : M("", !0)
      ]),
      _: 2
    }, 1040, ["type", "disabled", "size-control", "onClick", "onKeydown"]))), 128))
  ], 2);
}
const Lg = /* @__PURE__ */ F(Mg, [["render", Bg]]), Rg = j(q(() => import("./arrow_up-BmDHfIfU.js"))), Vg = j(
  q(() => import("./arrow_down-q8T3lSlg.js"))
), Fg = j(
  q(() => import("./double_arrow_up-BzJjMCiC.js"))
), Wg = j(
  q(() => import("./double_arrow_down-DQ11OcUO.js"))
), Ug = R({
  name: "BSelect",
  extends: Ns,
  components: { BDropDown: xs, BInput: Gn, BIcon: Ae, BTags: Lg },
  emits: [
    "selected-item",
    "selected-items",
    "update:value",
    "update:text",
    "update:selected",
    "change",
    "click"
  ],
  props: {
    // BDropDown props
    items: {
      type: [Array, Object],
      default: le.items
    },
    selected: {
      type: [Array, Object],
      default: le.selected
    },
    multiple: {
      type: Boolean,
      default: le.multiple
    },
    maxRows: {
      type: Number,
      default: le.maxRows
    },
    autoWidth: {
      type: Boolean,
      default: le.autoWidth
    },
    wordWrap: {
      type: Boolean,
      default: le.wordWrap
    },
    filter: {
      type: Boolean,
      default: le.filter
    },
    placement: {
      type: String,
      default: le.placement
    },
    triggerActivate: {
      type: String,
      default: le.triggerActivate
    },
    onPropItemSelected: {
      type: Function,
      default: le.onPropItemSelected
    },
    onPropItemsSelected: {
      type: Function,
      default: le.onPropItemsSelected
    },
    // BInput props
    placeholder: {
      type: String,
      default: le.placeholder
    },
    type: {
      type: String,
      default: le.type
    },
    maxlength: {
      type: Number,
      default: le.maxlength
    },
    minlength: {
      type: Number,
      default: le.minlength
    },
    visibility: {
      type: Boolean,
      default: le.visibility
    },
    readonly: {
      type: Boolean,
      default: le.readonly
    },
    clearButton: {
      type: Boolean,
      default: le.clearButton
    },
    clearWithText: {
      type: Boolean,
      default: le.clearWithText
    },
    showStateIcon: {
      type: Boolean,
      default: le.showStateIcon
    },
    sizeControl: {
      type: String,
      default: le.sizeControl
    },
    loading: {
      type: [Boolean, Object],
      default: le.loading
    },
    simple: {
      type: Boolean,
      default: le.simple
    },
    // BSelect props
    editable: {
      type: Boolean,
      default: le.editable
    },
    emptyText: {
      type: [Boolean, String],
      default: le.emptyText
    },
    showIcon: {
      type: Boolean,
      default: le.showIcon
    }
  },
  inheritAttrs: !1,
  ESizeControl: ie,
  data() {
    return {
      cssClass: "b-select",
      showDialog: !1,
      elementOwner: void 0,
      cmpInput: null,
      cmpDialog: null,
      filterText: "",
      isChangeText: !1
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--editable`]: !!this.editable && !this.multiple
        },
        this.rootClasses
      ];
    },
    effectiveItems() {
      return Qt(this.items).length === 0 && this.emptyText ? [{ text: typeof this.emptyText == "string" ? this.emptyText : re.global.t("select.emptyText"), value: -1, disabled: !0 }] : this.items;
    }
  },
  watch: {
    text: {
      handler(e) {
        this.stateText = e;
      },
      immediate: !0
    },
    value: {
      handler(e) {
        this.stateValue = e;
      },
      immediate: !0
    },
    stateText: {
      handler(e) {
        this.filter && (this.filterText = e);
      },
      immediate: !0
    }
  },
  methods: {
    /**
     * Open or close the drop-down list
     */
    toggleDropDown() {
      this.showDialog ? this.hideDropDown() : this.openDropDown();
    },
    /**
     * Click on the arrow to open the drop-down list
     */
    onClickToggleDropDown() {
      var e;
      this.toggleDropDown(), this.showDialog && ((e = this.cmpInput) == null || e.focus());
    },
    onInputClick() {
      this.toggleDropDown();
    },
    /**
     * Initialization when opening a drop-down list
     */
    openDropDown() {
      this.showDialog = !0, this.cmpDialog.currentIndex = -1, this.cmpDialog.handleFocus();
    },
    hideDropDown() {
      this.showDialog = !1;
    },
    /**
     * Switching the active element in the list
     * @param {boolean} init - If the list is not displayed, then the list is displayed and the first element is selected
     */
    nextActiveItem(e = !0) {
      this.showDialog && this.cmpDialog.currentIndex > -1 && this.cmpDialog.nextActiveItem(), !this.showDialog && e && this.openDropDown();
    },
    /**
     * Switching the active element in the list
     * @param {boolean} close - If the list is displayed and the first element is selected, then the list is closed
     */
    prevActiveItem(e = !0) {
      this.cmpDialog.currentIndex == 0 && e ? this.hideDropDown() : this.cmpDialog.prevActiveItem();
    },
    onInput(e) {
      this.isChangeText = !0, !this.showDialog && e.data && /^[a-zA-Zа-яА-Я0-9]$/.test(String(e.data)) && this.openDropDown();
    },
    onInputKeyDown(e) {
      var t;
      if (["ArrowDown", "ArrowUp", "Enter"].includes(e.key)) {
        ["ArrowDown", "ArrowUp"].includes(e.key) && e.preventDefault();
        const n = () => {
          this.showDialog && this.cmpDialog.currentIndex > -1 && (this.cmpDialog.setSelectedActiveItem(), this.hideDropDown());
        }, s = {
          ArrowDown: this.nextActiveItem,
          ArrowUp: this.prevActiveItem,
          Enter: n
        };
        e.key === "Enter" && this.showDialog && e.preventDefault(), (t = s[e.key]) == null || t.call(s);
      } else
        ["Escape"].includes(e.key) && this.hideDropDown();
    },
    /**
     * TODO Додлелать selection
     */
    // updateInputSelection() {
    //     const input = this.cmpInput.$refs.refControl as HTMLInputElement
    //     const currentItem = this.items[this.cmpDialog.currentIndex]
    //     // console.log('currentItem', this.cmpInput.$refs.refControl)
    //     if (currentItem && input) {
    //         const inputValue = input.value
    //         const matchedText = currentItem.text.slice(inputValue.length)
    //         input.value = inputValue + matchedText
    //         this.$nextTick(() => {
    //             input.setSelectionRange(inputValue.length, input.value.length)
    //         })
    //         // input.setSelectionRange(inputValue.length, input.value.length)
    //     }
    // },
    onSelectedItem(e) {
      this.$emit("selected-item", e);
    },
    onSelectedItems({
      selected: e,
      text: t,
      value: n
    }) {
      (!this.isChangeText || t || this.multiple) && (this.multiple || (this.stateText = t), this.$emit("update:text", t)), this.stateValue = n, this.$emit("update:selected", e), this.$emit("update:value", n), this.$emit("selected-items", {
        selected: e,
        text: t,
        value: n
      }), this.isChangeText = !1;
    },
    onInputClear() {
      this.showDialog = !1, this.cmpDialog.resetSelected();
    },
    onInputClickClear() {
      var e;
      (e = this.cmpInput) == null || e.focus(), this.reset();
    },
    onMountedInput(e) {
      this.cmpInput = e;
    },
    onMountedDropDown(e) {
      this.cmpDialog = e.cmpControl.cmpComponent;
    },
    reset() {
      var e;
      this.stateText = "", this.stateValue = null, (e = this.cmpInput) == null || e.reset(), this.cmpDialog.resetSelected(), this.hideDropDown();
    },
    onRemoveTag({ event: e, item: t }) {
      if (t.disabled || t.readonly)
        return;
      const n = t.value;
      this.cmpDialog.removeSelectedItem(n);
    }
  },
  mounted() {
    var n;
    const e = this.$refs.refRoot, t = (n = this.cmpDialog) == null ? void 0 : n.$el;
    Io(e, t, () => {
      this.hideDropDown();
    });
  },
  unmounted() {
    const e = this.$refs.refRoot;
    ko(e);
  },
  ArrowUp: Rg,
  ArrowDown: Vg,
  DoubleArrowUp: Fg,
  DoubleArrowDown: Wg
}), xg = ["aria-expanded"];
function Hg(e, t, n, s, a, i) {
  var h, v, C;
  const r = T("BTags"), o = T("BIcon"), l = T("b-input"), c = T("b-drop-down");
  return e.isHidden ? Ke((m(), I("div", {
    key: 0,
    ref: "refRoot",
    class: H(e.classes),
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-expanded": e.showDialog ? "true" : "false"
  }, [
    W(l, G({
      text: e.stateText,
      "onUpdate:text": t[0] || (t[0] = (w) => e.stateText = w),
      value: e.stateValue,
      "as-select": "",
      onMounted: e.onMountedInput,
      onClick: e.onInputClick,
      onInput: e.onInput,
      onKeydown: e.onInputKeyDown,
      onClear: e.onInputClear,
      onClickClear: e.onInputClickClear,
      ref: "refOwner",
      placeholder: e.placeholder,
      type: e.type,
      maxlength: e.maxlength,
      minlength: e.minlength,
      visibility: e.visibility,
      "clear-button": e.clearButton,
      "clear-with-text": e.clearWithText,
      "show-state-icon": e.showStateIcon,
      "size-control": e.sizeControl,
      loading: e.loading,
      focused: e.focused,
      simple: e.simple,
      disabled: e.disabled,
      invalid: e.invalid,
      state: e.state,
      readonly: e.multiple || e.readonly || !e.editable,
      enterkeyhint: "enter"
    }, e.attributes), {
      prefix: P((w) => {
        var E;
        return [
          L(e.$slots, "prefix", rt(Mt(w))),
          e.multiple ? (m(), N(r, {
            key: 0,
            items: (E = e.cmpDialog) == null ? void 0 : E.stateSelected,
            "size-control": e.$options.ESizeControl.ExtraSmall,
            class: "b-select__tags",
            onRemove: e.onRemoveTag
          }, null, 8, ["items", "size-control", "onRemove"])) : M("", !0)
        ];
      }),
      suffix: P((w) => [
        L(e.$slots, "suffix", rt(Mt(w))),
        (e.placement == "top-start" || e.placement == "top-end") && e.showIcon ? (m(), N(o, {
          key: 0,
          icon: e.$options.ArrowUp,
          size: "1.3em",
          class: "b-select__arrow",
          onClick: e.onClickToggleDropDown
        }, null, 8, ["icon", "onClick"])) : (m(), I(ce, { key: 1 }, [
          e.showIcon ? (m(), N(o, {
            key: 0,
            icon: e.$options.ArrowDown,
            size: "1.3em",
            class: "b-select__arrow",
            onClick: e.onClickToggleDropDown
          }, null, 8, ["icon", "onClick"])) : M("", !0)
        ], 64))
      ]),
      _: 3
    }, 16, ["text", "value", "onMounted", "onClick", "onInput", "onKeydown", "onClear", "onClickClear", "placeholder", "type", "maxlength", "minlength", "visibility", "clear-button", "clear-with-text", "show-state-icon", "size-control", "loading", "focused", "simple", "disabled", "invalid", "state", "readonly"]),
    W(c, {
      class: H(e.cssClass),
      hidden: !1,
      style: Ye(e.autoWidth ? "" : { width: `${(v = (h = e.$refs.refOwner) == null ? void 0 : h.$el) == null ? void 0 : v.clientWidth}px` }),
      owner: (C = e.$refs.refOwner) == null ? void 0 : C.$el,
      visible: e.showDialog,
      "onUpdate:visible": t[1] || (t[1] = (w) => e.showDialog = w),
      items: e.effectiveItems,
      text: e.stateText,
      value: e.stateValue,
      "context-menu": !1,
      multiple: e.multiple,
      "max-rows": e.maxRows,
      "auto-width": e.autoWidth,
      "word-wrap": e.wordWrap,
      placement: e.placement,
      "filter-text": e.filterText,
      "single-selection": "",
      onMounted: e.onMountedDropDown,
      onSelectedItem: e.onSelectedItem,
      onSelectedItems: e.onSelectedItems,
      onClick: t[2] || (t[2] = (w) => e.$emit("click", w)),
      onChange: t[3] || (t[3] = (w) => e.$emit("change", w))
    }, {
      "item-icon": P(({ item: w }) => [
        L(e.$slots, "item-icon", { item: w })
      ]),
      item: P(({ item: w }) => [
        L(e.$slots, "item", { item: w })
      ]),
      _: 3
    }, 8, ["class", "style", "owner", "visible", "items", "text", "value", "multiple", "max-rows", "auto-width", "word-wrap", "placement", "filter-text", "onMounted", "onSelectedItem", "onSelectedItems"])
  ], 10, xg)), [
    [nt, e.isVisibility]
  ]) : M("", !0);
}
const Kn = /* @__PURE__ */ F(Ug, [["render", Hg]]), Yg = R({
  name: "BDataTable",
  extends: de,
  components: {
    BBody: Jh,
    BFooter: up,
    BRow: Eo,
    BHeader: sg,
    BPagination: Bh,
    BEmpty: lg,
    BBodyLoading: fp,
    BSelect: Kn
  },
  emits: [
    "update:selected",
    "selected-rows",
    "change-columns",
    "change-sort",
    "change-filter",
    "change-filters",
    "change-pagination",
    "change-page-size",
    "change-combined",
    "row-click",
    "row-dblclick",
    "cell-click",
    "cell-dblclick",
    "footer-cell-click",
    "footer-cell-dblclick"
  ],
  props: {
    value: {
      type: Array,
      default: ve.value
    },
    columns: {
      type: Array,
      default: ve.columns
    },
    height: {
      type: [Number, String],
      default: ve.height
    },
    width: {
      type: [Number, String],
      default: ve.width
    },
    multiSelect: {
      type: Boolean,
      default: ve.multiSelect
    },
    multiSort: {
      type: Boolean,
      default: ve.multiSort
    },
    optionsBody: {
      type: Object,
      default: ve.optionsBody
    },
    pagination: {
      type: Object,
      default: ve.pagination
    },
    draggableColumn: {
      type: Boolean,
      default: ve.draggableColumn
    },
    resizableColumn: {
      type: Boolean,
      default: ve.resizableColumn
    },
    showFilters: {
      type: Boolean,
      default: ve.showFilters
    },
    loading: {
      type: [Boolean, Object],
      default: ve.loading
    },
    showSelection: {
      type: Boolean,
      default: ve.showSelection
    },
    showFooter: {
      type: Boolean,
      default: ve.showFooter
    },
    footerValue: {
      type: [Array, Object],
      default: ve.footerValue
    },
    sort: {
      type: [Object, Array],
      default: ve.sort
    },
    selected: {
      type: [Object, Array],
      default: ve.selected
    },
    highlighted: {
      type: [Object, Array],
      default: ve.highlighted
    }
  },
  data() {
    var e;
    return {
      rows: [],
      cssClass: "b-data-table",
      stateSort: [],
      filters: [],
      statePaginationSummary: {
        currentPage: 1,
        beginRows: 0,
        endRows: 0,
        totalRows: 0,
        pageSize: ((e = ve.pagination) == null ? void 0 : e.pageSize) || 10
      },
      stateColumns: [],
      doResize: !1,
      offsetTopOverlay: 0,
      isMounted: !1,
      cmpBody: null,
      cmpHeader: null,
      // Process the speakers if the property of sort appears
      isSortReady: !1
    };
  },
  watch: {
    value: {
      handler(e) {
        if (!e || !Array.isArray(e)) {
          this.rows = [];
          return;
        }
        this.rows = e.map((t) => ({
          uuid: Ka(),
          selected: !1,
          data: t
        }));
      },
      immediate: !0,
      deep: !0
    },
    sort: {
      handler(e) {
        typeof e > "u" || e === null ? this.stateSort = [] : this.stateSort = Array.isArray(e) ? e : [e], this.processSortColumns();
      },
      immediate: !0
    },
    columns: {
      handler(e) {
        this.stateColumns = e.map((t) => ({
          ...t,
          visible: t.visible ?? !0
        })), this.processSortColumns();
      },
      immediate: !0,
      deep: !0
    }
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--do-resize`]: this.doResize
        }
      ];
    },
    visibleColumns() {
      return this.stateColumns.filter((e) => e.visible);
    },
    footerRows() {
      if (!this.showFooter)
        return [];
      const e = {};
      this.visibleColumns.forEach((s) => {
        s.footerValue && (e[s.field] = s.footerValue);
      });
      const t = Object.keys(e).length > 0 ? [e] : [];
      if (!this.footerValue)
        return t;
      const n = (s, a) => {
        const i = s || {};
        return this.visibleColumns.forEach((r) => {
          a[r.field] && (i[r.field] = a[r.field]);
        }), i;
      };
      return this.footerValue.forEach((s, a) => {
        const i = n(t[a], s);
        t[a] = i;
      }), t;
    },
    totalRows() {
      return this.value ? this.value.length : 0;
    },
    empty() {
      return !this.value || this.value.length === 0 || !this.visibleColumns || this.visibleColumns.length === 0;
    },
    paginationProps() {
      var t, n;
      const e = {
        ...this.pagination,
        totalRows: ((t = this.pagination) == null ? void 0 : t.totalRows) || this.totalRows,
        pageSize: ((n = this.pagination) == null ? void 0 : n.pageSize) || mn.pageSize
      };
      return delete e.sizes, e;
    },
    pageSizes() {
      var t, n;
      return (((t = this.pagination) == null ? void 0 : t.sizes) || ((n = ve == null ? void 0 : ve.pagination) == null ? void 0 : n.sizes) || []).map((s) => ({
        value: s,
        text: s
      }));
    }
  },
  methods: {
    onMountedBody(e) {
      this.cmpBody = e;
    },
    onMountedHeader(e) {
      this.cmpHeader = e;
    },
    onChangePagination(e) {
      this.statePaginationSummary = e, this.$emit("change-pagination", e), this.emitChangeCombined();
    },
    onChangestatePaginationSummary(e) {
      this.statePaginationSummary = e;
    },
    onChangePageSizes({ value: e }) {
      this.paginationProps.pageSize !== e && (this.pagination.pageSize = e, this.$emit("change-page-size", e));
    },
    /**
     * Process the speakers if the property of sort appears
     */
    processSortColumns() {
      if (this.isSortReady || !this.sort || !this.visibleColumns.length)
        return;
      this.isSortReady = !0;
      const e = Array.isArray(this.sort) ? this.sort : [this.sort];
      this.visibleColumns.forEach((t) => {
        const n = e.find((s) => s.field === t.field);
        n && (t.sort = Pt(n.direction));
      });
    },
    /**
     * Handle move column
     * @param {{ draggedColumn: IColumnAttributes, targetColumn: IColumnAttributes }} columns - The columns being moved
     * @param {IColumnAttributes} columns.draggedColumn - The column being dragged
     * @param {IColumnAttributes} columns.targetColumn - The target column
     */
    onMoveColumn({
      draggedColumn: e,
      targetColumn: t
    }) {
      const n = this.stateColumns.indexOf(e), s = this.stateColumns.indexOf(t);
      this.stateColumns.splice(n, 1), this.stateColumns.splice(s, 0, e), this.$emit("change-columns", this.stateColumns);
    },
    /**
     * Handle resize column
     * @param {{ column: IColumnAttributes }} columns - The column being resized
     * @param {IColumnAttributes} columns.column - The column being resized
     */
    onResizeColumn({ column: e }) {
      this.$emit("change-columns", this.stateColumns);
    },
    onStartResizeColumn({ column: e }) {
      this.doResize = !0;
    },
    onEndResizeColumn({ column: e }) {
      this.doResize = !1;
    },
    onSelectedRows(e) {
      this.$emit("selected-rows", e), this.$emit("update:selected", e);
    },
    onChangeSort(e) {
      this.stateSort = e, this.$emit("change-sort", e), this.emitChangeCombined();
    },
    onChangeFilters(e) {
      this.filters = e, this.$emit("change-filters", e), this.emitChangeCombined();
    },
    emitChangeCombined() {
      if (!this.isMounted)
        return;
      const e = {
        filters: this.filters,
        sort: this.stateSort,
        pagination: this.statePaginationSummary
      };
      this.$emit("change-combined", e);
    },
    updateOffsetTopOverlay() {
      this.$nextTick(() => {
        var e;
        this.offsetTopOverlay = ((e = this.$refs.refBody) == null ? void 0 : e.$el.offsetTop) || 0;
      });
    },
    onSelectAllRows({ value: e }) {
      var t;
      (t = this.cmpBody) == null || t.selectAll(!!e);
    }
  },
  mounted() {
    this.isMounted = !0, this.updateOffsetTopOverlay();
  },
  updated() {
    this.updateOffsetTopOverlay();
  },
  setup() {
    return {
      t: re.global.t
    };
  },
  ESizeControl: ie
}), zg = {
  class: "b-data-table__content",
  ref: "refDataTableContent"
}, jg = {
  class: "b-data-table__content--table",
  role: "table"
}, qg = {
  key: 0,
  class: "b-data-table__pagination"
}, Gg = { class: "b-data-table__pagination--summary" };
function Kg(e, t, n, s, a, i) {
  const r = T("BHeader"), o = T("b-body"), l = T("b-footer"), c = T("BEmpty"), h = T("BBodyLoading"), v = T("BSelect"), C = T("BPagination");
  return m(), I("div", {
    class: H(e.classes),
    style: Ye({ height: e.height, width: e.width })
  }, [
    U("div", zg, [
      U("table", jg, [
        W(r, {
          columns: e.visibleColumns,
          draggable: e.draggableColumn,
          resizable: e.resizableColumn,
          "show-filters": e.showFilters,
          sort: e.sort,
          "show-select-all": e.showSelection,
          highlighted: "",
          onMounted: e.onMountedHeader,
          onMoveColumn: e.onMoveColumn,
          onResizeColumn: e.onResizeColumn,
          onStartResizeColumn: e.onStartResizeColumn,
          onEndResizeColumn: e.onEndResizeColumn,
          onChangeFilter: t[0] || (t[0] = (w) => e.$emit("change-filter", w)),
          onChangeFilters: e.onChangeFilters,
          onChangeSort: e.onChangeSort,
          onSelectAll: e.onSelectAllRows
        }, null, 8, ["columns", "draggable", "resizable", "show-filters", "sort", "show-select-all", "onMounted", "onMoveColumn", "onResizeColumn", "onStartResizeColumn", "onEndResizeColumn", "onChangeFilters", "onChangeSort", "onSelectAll"]),
        W(o, {
          columns: e.visibleColumns,
          rows: e.rows,
          options: e.optionsBody,
          "show-selection": e.showSelection,
          selected: e.selected,
          highlighted: e.highlighted,
          onSelectedRows: e.onSelectedRows,
          onRowClick: t[1] || (t[1] = (w) => e.$emit("row-click", w)),
          onRowDblclick: t[2] || (t[2] = (w) => e.$emit("row-dblclick", w)),
          onCellClick: t[3] || (t[3] = (w) => e.$emit("cell-click", w)),
          onCellDblclick: t[4] || (t[4] = (w) => e.$emit("cell-dblclick", w)),
          ref: "refBody",
          onMounted: e.onMountedBody
        }, wa({ _: 2 }, [
          ye(e.visibleColumns, (w) => ({
            name: `body-${w.field}`,
            fn: P((E) => [
              L(e.$slots, `body-${w.field}`, rt(Mt(E)))
            ])
          }))
        ]), 1032, ["columns", "rows", "options", "show-selection", "selected", "highlighted", "onSelectedRows", "onMounted"]),
        e.showFooter && e.footerRows.length > 0 ? (m(), N(l, {
          key: 0,
          columns: e.visibleColumns,
          rows: e.footerRows,
          "show-selection": e.showSelection,
          onCellClick: t[5] || (t[5] = (w) => e.$emit("footer-cell-click", w)),
          onCellDblclick: t[6] || (t[6] = (w) => e.$emit("footer-cell-dblclick", w))
        }, wa({ _: 2 }, [
          ye(e.visibleColumns, (w) => ({
            name: `footer-${w.field}`,
            fn: P((E) => [
              L(e.$slots, `footer-${w.field}`, rt(Mt(E)), () => [
                Be(X(E.value), 1)
              ])
            ])
          }))
        ]), 1032, ["columns", "rows", "show-selection"])) : M("", !0)
      ]),
      e.empty ? (m(), N(c, {
        key: 0,
        text: e.t("common.noData")
      }, null, 8, ["text"])) : M("", !0),
      W(h, {
        loading: e.loading,
        "offset-top-overlay": e.offsetTopOverlay
      }, null, 8, ["loading", "offset-top-overlay"])
    ], 512),
    e.pagination && e.pagination.visible ? (m(), I("div", qg, [
      U("div", Gg, [
        U("span", null, X(e.t("datatable.rowsPerPage")) + ":", 1),
        U("span", null, X(e.t("datatable.paginationSummary", {
          beginRows: e.statePaginationSummary.beginRows,
          endRows: e.statePaginationSummary.endRows,
          totalRows: e.statePaginationSummary.totalRows
        })), 1),
        e.pageSizes.length > 0 ? (m(), N(v, {
          key: 0,
          items: e.pageSizes,
          value: e.paginationProps.pageSize,
          editable: !1,
          "clear-button": !1,
          "size-control": e.$options.ESizeControl.ExtraSmall,
          onChange: e.onChangePageSizes
        }, null, 8, ["items", "value", "size-control", "onChange"])) : M("", !0)
      ]),
      W(C, G(e.paginationProps, {
        onChange: e.onChangePagination,
        onSummary: e.onChangestatePaginationSummary
      }), null, 16, ["onChange", "onSummary"])
    ])) : M("", !0)
  ], 6);
}
const Vv = /* @__PURE__ */ F(Yg, [["render", Kg]]);
function Xg(e = {}) {
  return { ...{
    ...Cn(),
    header: "",
    field: "",
    dataType: Wr.String,
    sort: Pt()
  }, ...e };
}
const Gt = Xg(), Fv = R({
  name: "BColumn",
  extends: _t,
  components: { BControl: _t },
  props: {
    header: {
      type: String,
      default: Gt.header
    },
    field: {
      type: String,
      default: Gt.field
    },
    dataType: {
      type: String,
      default: Gt.dataType
    },
    sort: {
      type: Object,
      default: Gt.sort
    },
    width: {
      type: Number,
      default: Gt.width
    },
    minWidth: {
      type: Number,
      default: Gt.minWidth
    },
    maxWidth: {
      type: Number,
      default: Gt.maxWidth
    }
  }
}), Qg = R({
  name: "BFilterOperation",
  extends: We,
  components: { BDropDown: xs, BButton: ze },
  emits: ["change"],
  props: {
    operation: {
      type: String,
      default: Me.operation
    },
    equal: {
      type: Boolean,
      default: Me.equal
    },
    notEqual: {
      type: Boolean,
      default: Me.notEqual
    },
    less: {
      type: Boolean,
      default: Me.less
    },
    lessOrEqual: {
      type: Boolean,
      default: Me.lessOrEqual
    },
    greater: {
      type: Boolean,
      default: Me.greater
    },
    greaterOrEqual: {
      type: Boolean,
      default: Me.greaterOrEqual
    },
    contains: {
      type: Boolean,
      default: Me.contains
    },
    notContains: {
      type: Boolean,
      default: Me.notContains
    },
    startsWith: {
      type: Boolean,
      default: Me.startsWith
    },
    notStartsWith: {
      type: Boolean,
      default: Me.notStartsWith
    },
    endsWith: {
      type: Boolean,
      default: Me.endsWith
    },
    notEndsWith: {
      type: Boolean,
      default: Me.notEndsWith
    },
    in: {
      type: Boolean,
      default: Me.in
    },
    notIn: {
      type: Boolean,
      default: Me.notIn
    },
    between: {
      type: Boolean,
      default: Me.between
    },
    notBetween: {
      type: Boolean,
      default: Me.notBetween
    },
    isNull: {
      type: Boolean,
      default: Me.isNull
    },
    isNotNull: {
      type: Boolean,
      default: Me.isNotNull
    }
  },
  data() {
    return {
      showMenu: !1,
      items: [],
      selected: null
    };
  },
  computed: {
    operationText() {
      return this.selected ? this.selected.meta.o : "";
    }
  },
  mounted() {
    this.items = Ws.filter((e) => this[e.prop]);
  },
  methods: {
    onShowMenu() {
      this.showMenu = !this.showMenu;
    },
    onSelectedItem(e) {
      this.selected = e, this.$emit("change", e);
    }
  }
}), Jg = { class: "b-filter-operation" }, Zg = {
  key: 0,
  class: "b-filter-operation__drop-down--op"
}, eb = { class: "b-filter-operation__drop-down--text" };
function tb(e, t, n, s, a, i) {
  const r = T("b-button"), o = T("b-drop-down");
  return m(), I("div", Jg, [
    W(r, {
      ref: "refOwner",
      onClick: e.onShowMenu,
      plain: ""
    }, {
      default: P(() => [
        Be(X(e.operationText), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    W(o, {
      value: e.operation,
      hidden: !1,
      owner: e.$refs.refOwner,
      items: e.items,
      visible: e.showMenu,
      "onUpdate:visible": t[0] || (t[0] = (l) => e.showMenu = l),
      "context-menu": !1,
      "max-rows": 0,
      "offset-top": 6,
      onSelectedItem: e.onSelectedItem,
      class: "b-filter-operation__drop-down"
    }, {
      item: P(({ item: l }) => [
        l.meta ? (m(), I("div", Zg, X(l.meta.o), 1)) : M("", !0),
        U("div", eb, X(l.text), 1)
      ]),
      _: 1
    }, 8, ["value", "owner", "items", "visible", "onSelectedItem"])
  ]);
}
const ts = /* @__PURE__ */ F(Qg, [["render", tb]]), nb = R({
  name: "BFilterComponentInput",
  extends: Sn,
  components: {
    BInput: Gn,
    BFilterOperation: ts
  },
  props: {
    ...Gn.props
  },
  ESizeControl: ie,
  methods: {
    onChange(e) {
      this.stateText = e.text, this.stateValue = e.text;
    },
    onClear() {
      this.stateText = "", this.stateValue = "", this.change();
    },
    onKeyDown(e) {
      e.key === "Enter" && this.change();
    }
  }
});
function sb(e, t, n, s, a, i) {
  const r = T("BFilterOperation"), o = T("b-input");
  return m(), N(o, {
    class: "b-filter-component",
    text: e.stateText,
    "size-control": e.$options.ESizeControl.ExtraSmall,
    onChange: e.onChange,
    onClear: e.onClear,
    onKeydown: e.onKeyDown,
    enterkeyhint: "search",
    placeholder: e.placeholder,
    type: e.type,
    maxlength: e.maxlength,
    minlength: e.minlength,
    visibility: e.visibility,
    "clear-button": e.clearButton,
    "clear-with-text": e.clearWithText || !0,
    disabled: e.disabled,
    simple: ""
  }, {
    prefix: P(() => [
      e.showOperation ? (m(), N(r, G({
        key: 0,
        onChange: e.onChangeOperation,
        operation: e.operation
      }, e.operationsProps), null, 16, ["onChange", "operation"])) : M("", !0)
    ]),
    _: 1
  }, 8, ["text", "size-control", "onChange", "onClear", "onKeydown", "placeholder", "type", "maxlength", "minlength", "visibility", "clear-button", "clear-with-text", "disabled"]);
}
const Wv = /* @__PURE__ */ F(nb, [["render", sb]]), ab = R({
  name: "BFilterComponentSelect",
  extends: Sn,
  components: {
    BSelect: Kn,
    BFilterOperation: ts
  },
  props: {
    ...Kn.props
  },
  ESizeControl: ie,
  computed: {},
  methods: {
    onChange({ value: e, text: t }) {
      this.stateValue = e, this.stateText = t, this.change();
    },
    onMounted(e) {
      this.registeredElements.push(e.$el), this.registeredElements.push(e.cmpDialog.$el);
    }
  },
  created() {
    this.stateOperations = [te.Equal, te.NotEqual];
  }
});
function ib(e, t, n, s, a, i) {
  const r = T("BFilterOperation"), o = T("b-select");
  return m(), N(o, {
    "size-control": e.$options.ESizeControl.ExtraSmall,
    onChange: e.onChange,
    enterkeyhint: "search",
    items: e.items,
    value: e.stateValue,
    selected: e.selected,
    multiple: e.multiple,
    "max-rows": e.maxRows,
    "auto-width": e.autoWidth,
    filter: e.filter,
    placeholder: e.placeholder,
    "clear-button": e.clearButton,
    "clear-with-text": e.clearWithText || !0,
    readonly: e.readonly,
    disabled: e.disabled,
    editable: e.editable,
    simple: "",
    onMounted: e.onMounted
  }, {
    prefix: P(() => [
      e.showOperation ? (m(), N(r, G({
        key: 0,
        onChange: e.onChangeOperation,
        operation: e.operation
      }, e.operationsProps), null, 16, ["onChange", "operation"])) : M("", !0)
    ]),
    _: 1
  }, 8, ["size-control", "onChange", "items", "value", "selected", "multiple", "max-rows", "auto-width", "filter", "placeholder", "clear-button", "clear-with-text", "readonly", "disabled", "editable", "onMounted"]);
}
const Uv = /* @__PURE__ */ F(ab, [["render", ib]]);
function fi(e = {}) {
  const t = lt(), n = Po();
  return { ...{
    ...t,
    format: "dd.MM.yyyy",
    // Now date
    minDate: new Date(1940, 0, 1),
    maxDate: new Date(n.getYear() + 30, 11, 31),
    multiple: !1,
    separator: ",",
    currentMonth: n.getMonth(),
    currentYear: n.getYear(),
    toggle: !0,
    pop: !1,
    arrowKeys: !0
  }, ...e };
}
const qe = fi();
class xv {
  constructor(t = {}) {
    u(this, "format");
    u(this, "date");
    u(this, "minDate");
    u(this, "maxDate");
    u(this, "multiple");
    u(this, "separator");
    u(this, "currentMonth");
    u(this, "currentYear");
    u(this, "maxSelections");
    u(this, "toggle");
    u(this, "disabled");
    u(this, "text");
    u(this, "value");
    u(this, "visible");
    Object.assign(this, qe, t);
  }
}
function Po(e, t) {
  let n = at(/* @__PURE__ */ new Date()), s = t || "dd.MM.yyyy";
  const a = {
    date: n,
    update: o,
    setFormat: l,
    text: c,
    setYear: h,
    getYear: v,
    setMonth: C,
    getMonth: w,
    setDay: E,
    getDay: B,
    getUnixTime: k,
    getValue: y,
    setDate: i,
    getDate: r,
    diffDays: g,
    add: b
  };
  function i(d) {
    return o(d), a;
  }
  function r() {
    return n.value;
  }
  function o(d, _) {
    _ && l(_);
    let D;
    try {
      if (d instanceof Date ? D = d : typeof d == "number" ? (d = Number(d) * 1e3, D = new Date(d)) : D = Yu(d.toString(), s, /* @__PURE__ */ new Date()), isNaN(D.getTime()) || D.getFullYear() < 1900 || D.getFullYear() > 2100)
        throw new Error(`Error parsing date: ${d}`);
      n.value = D;
    } catch (S) {
      throw S;
    }
    return a;
  }
  function l(d) {
    return s = d, a;
  }
  function c() {
    return Br(r(), s);
  }
  function h(d) {
    return r().setFullYear(d), a;
  }
  function v() {
    return r().getFullYear();
  }
  function C(d) {
    return r().setMonth(d), a;
  }
  function w() {
    return r().getMonth();
  }
  function E(d) {
    return r().setDate(d), a;
  }
  function B() {
    return r().getDate();
  }
  function k(d) {
    const _ = r();
    return d || _.setHours(0, 0, 0, 0), Math.floor(r().getTime() / 1e3);
  }
  function y(d) {
    return k(d);
  }
  function g(d) {
    d instanceof Date || (d = d.getDate());
    const _ = Math.abs(d.getTime() - r().getTime());
    return Math.ceil(_ / (1e3 * 60 * 60 * 24));
  }
  function b(d, _ = "days") {
    const D = new Date(r());
    switch (_) {
      case "days":
        D.setDate(D.getDate() + d);
        break;
      case "months":
        D.setMonth(D.getMonth() + d);
        break;
      case "years":
        D.setFullYear(D.getFullYear() + d);
        break;
    }
    return n.value = D, a;
  }
  return e && o(e), a;
}
const Fe = {
  toUseDate: (e, t) => {
    try {
      return Po(e, t);
    } catch (n) {
      throw n;
    }
  },
  toUnixTime: (e, t) => {
    var n;
    return typeof e == "number" ? e : ((n = Fe.toUseDate(e, t)) == null ? void 0 : n.getUnixTime()) || 0;
  },
  toDateByUnixTime: (e) => new Date(e * 1e3)
}, ns = {
  locale: "en",
  dateFormat: "dd.MM.yyyy"
}, fr = qo({ ...ns });
function Hv(e, t = {}) {
  Object.assign(fr, t), e.provide("componentsConfig", fr), t.locale && re.global.locale && (re.global.locale = t.locale, t.messages && Object.entries(t.messages).forEach(([n, s]) => {
    re.global.setLocaleMessage(n, s);
  }), t.datetimeFormats && Object.entries(t.datetimeFormats).forEach(([n, s]) => {
    re.global.setDateTimeFormat(n, s);
  }));
}
const rb = j(
  q(() => import("./arrow_down-q8T3lSlg.js"))
), ob = j(
  q(() => import("./arrow_left-048ReJnM.js"))
), lb = j(
  q(() => import("./arrow_right-COASAA_Q.js"))
), ub = j(
  q(() => import("./double_arrow_left-Dw2rOZNP.js"))
), cb = j(
  q(() => import("./double_arrow_right-w0xYhNce.js"))
), db = R({
  name: "BDate",
  extends: We,
  emits: [
    "update:text",
    "update:value",
    "update:date",
    "change",
    "click",
    "month-changed",
    "year-changed",
    "period-changed",
    "toggle-selected",
    "mouse-enter-day",
    "mouse-leave-day",
    "error"
  ],
  components: {
    BButton: ze,
    BDropDown: xs,
    BIcon: Ae
  },
  props: {
    date: {
      type: [Date, Array],
      default: qe.date
    },
    format: {
      type: String,
      default() {
        const e = Qn("componentsConfig", ns);
        return (e == null ? void 0 : e.dateFormat) || qe.format;
      }
    },
    text: {
      type: [String, Array],
      default: qe.text
    },
    value: {
      type: [Number, String, Array],
      default: qe.value
    },
    // The minimum date for the calendar
    minDate: {
      type: [Date, String, Number],
      default: qe.minDate
    },
    // The maximum date for the calendar
    maxDate: {
      type: [Date, String, Number],
      default: qe.maxDate
    },
    // The multiple selection of dates
    multiple: {
      type: Boolean,
      default: qe.multiple
    },
    // The maximum number of selected dates if multiple is true
    maxSelections: {
      type: Number,
      default: qe.maxSelections
    },
    pop: {
      type: Boolean,
      default: qe.pop
    },
    // The separator for the text and value
    separator: {
      type: String,
      default: qe.separator
    },
    // The current month for the calendar
    currentMonth: {
      type: Number,
      default: qe.currentMonth
    },
    // The current year for the calendar
    currentYear: {
      type: Number,
      default: qe.currentYear
    },
    // Toggle selection
    toggle: {
      type: Boolean,
      default: qe.toggle
    },
    // Additional class for the calendar
    additionalClass: {
      type: Function,
      default: () => ""
    },
    // Keyboard navigation
    arrowKeys: {
      type: Boolean,
      default: qe.arrowKeys
    }
  },
  ArrowLeft: ob,
  ArrowRight: lb,
  ArrowDown: rb,
  DoubleArrowLeft: ub,
  DoubleArrowRight: cb,
  data() {
    const e = /* @__PURE__ */ new Date();
    return e.setHours(0, 0, 0, 0), {
      cssClass: "b-date",
      today: e.getTime() / 1e3,
      // We convert into seconds
      selected: [],
      displayedMonth: this.currentMonth,
      displayedYear: this.currentYear,
      showMonths: !1,
      showYears: !1,
      styleForList: {},
      stateMinDate: 0,
      stateMaxDate: 0,
      invalid: !1,
      disableWatchSelected: !1
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--disabled`]: this.disabled
        }
      ];
    },
    /**
     * Get the days of the calendar
     */
    days() {
      const e = [];
      let t = new Date(this.displayedYear, this.displayedMonth, 1);
      const n = (t.getDay() + 6) % 7, s = new Date(
        this.displayedYear,
        this.displayedMonth,
        0
      ).getDate(), a = new Date(
        this.displayedYear,
        this.displayedMonth + 1,
        0
      ).getDate();
      let i = 1 - n;
      for (let r = 0; r < 6; r++) {
        const o = [];
        for (let l = 0; l < 7; l++) {
          i < 1 ? t = new Date(
            this.displayedYear,
            this.displayedMonth - 1,
            s + i
          ) : i > a ? t = new Date(
            this.displayedYear,
            this.displayedMonth + 1,
            i - a
          ) : t = new Date(this.displayedYear, this.displayedMonth, i);
          const c = t.getTime() / 1e3;
          o.push({
            unixTime: c,
            day: t.getDate(),
            current: i > 0 && i <= a,
            selected: this.getSelectedIndex(c) > -1
          }), i++;
        }
        e.push(o);
      }
      return e;
    },
    /**
     * Get the names of the days of the week
     */
    weekDayNames() {
      return this.days[0].map(
        (t) => re.global.d(Fe.toDateByUnixTime(t.unixTime), "calendar_weekday")
      );
    },
    /**
     * Get the name of the month
     */
    monthName() {
      return re.global.d(
        new Date(this.displayedYear, this.displayedMonth || 0),
        "calendar_month_title"
      );
    },
    /**
     * Get the months of the year
     */
    months() {
      const e = [], t = (/* @__PURE__ */ new Date()).getFullYear();
      for (let n = 0; n < 12; n++)
        e.push({
          text: re.global.d(new Date(t, n), "calendar_month_list"),
          value: n
        });
      return e;
    },
    /**
     * Get list of years
     */
    years() {
      const e = [], t = Fe.toDateByUnixTime(this.stateMinDate).getFullYear(), n = Fe.toDateByUnixTime(this.stateMaxDate).getFullYear();
      for (let s = t; s <= n; s++)
        e.push({
          text: s.toString(),
          value: s
        });
      return e;
    }
  },
  watch: {
    date: {
      immediate: !0,
      handler(e) {
        e && (e = Array.isArray(e) ? e : [e], e = e.map((t) => (t.setHours(0, 0, 0, 0), t)), e.join(this.separator) !== this.getSelectedDates().join(this.separator) && this.updateSelectedFromArray(e));
      }
    },
    value: {
      immediate: !0,
      handler(e) {
        e && (typeof e == "string" && (e.includes(this.separator) ? e = e.split(this.separator).map((t) => parseInt(t)) : e = parseInt(e)), e = Array.isArray(e) ? e : [e], e.join(this.separator) !== this.getSelectedValues().join(this.separator) && this.updateSelectedFromArray(e));
      }
    },
    text: {
      immediate: !0,
      handler(e) {
        e && (typeof e == "string" && e.includes(this.separator) && (e = e.split(this.separator)), e = Array.isArray(e) ? e : [e], e.join(this.separator) !== this.getSelectedTexts().join(this.separator) && this.updateSelectedFromArray(e));
      }
    },
    selected: {
      deep: !0,
      immediate: !0,
      handler(e) {
        if (this.disableWatchSelected)
          return;
        const t = this.getTexts(), n = this.getValues(), s = this.getDates();
        this.$emit("update:text", t), this.$emit("update:value", n), this.$emit("update:date", s), this.$emit("change", {
          data: e.map((a) => ({
            text: a.text(),
            value: a.getUnixTime(),
            date: a.getDate()
          })),
          texts: t,
          values: n,
          dates: s
        }), this.invalid = !1;
      }
    },
    minDate: {
      immediate: !0,
      handler(e) {
        try {
          const t = Fe.toUseDate(e, this.format);
          this.stateMinDate = t.getUnixTime();
        } catch (t) {
          console.error(t);
        }
      }
    },
    maxDate: {
      immediate: !0,
      handler(e) {
        try {
          const t = Fe.toUseDate(e, this.format);
          this.stateMaxDate = t.getUnixTime();
        } catch (t) {
          console.error(t);
        }
      }
    },
    currentMonth(e) {
      this.displayedMonth = e;
    },
    currentYear(e) {
      this.displayedYear = e;
    },
    displayedMonth(e) {
      typeof e > "u" || (this.$emit("month-changed", e), this.$emit("period-changed", { month: e, year: this.displayedYear }));
    },
    displayedYear(e) {
      typeof e > "u" || (this.$emit("year-changed", e), this.$emit("period-changed", { month: this.displayedMonth, year: e }));
    }
  },
  methods: {
    /**
     * Update the current month
     * @param {number} value
     */
    updateCurrentMonth(e) {
      typeof e > "u" && (e = this.selected.length > 0 ? this.selected[0].getMonth() : this.currentMonth), this.displayedMonth !== e && (this.displayedMonth = e);
    },
    /**
     * Update the current year
     * @param {number} value
     */
    updateCurrentYear(e) {
      typeof e > "u" && (e = this.selected.length > 0 ? this.selected[0].getYear() : this.currentYear), this.displayedYear !== e && (this.displayedYear = e);
    },
    /**
     * Remove the selected date
     * @param {number} unixTime
     * @returns {boolean}
     */
    removeSelected(e) {
      const t = this.getSelectedIndex(e);
      return t > -1 ? (this.selected.splice(t, 1), !0) : !1;
    },
    /**
     * Toggle the selected date
     * @param {TDate} value
     */
    toggleSelected(e) {
      const t = Fe.toUseDate(e, this.format), n = t.getUnixTime(), s = this.getSelectedIndex(n);
      let a = !1;
      s > -1 && this.toggle ? (this.selected.splice(s, 1)[0], a = !0) : a = this.addSelected(e), a && this.$emit("toggle-selected", {
        index: s,
        date: t,
        unixTime: n,
        selected: this.selected
      });
    },
    /**
     * Validate the date
     * @param {TDate} value
     * @returns {boolean}
     */
    validateDate(e) {
      const t = Fe.toUnixTime(e, this.format);
      return (t >= this.stateMinDate || !this.stateMinDate) && (t <= this.stateMaxDate || !this.stateMaxDate);
    },
    /**
     * Set the selected date
     * @param {TDate} value
     * @param {boolean} updateCalendar
     * @returns {boolean}
     */
    addSelected(e, t = !0) {
      try {
        const n = Fe.toUseDate(e, this.format), s = n.getUnixTime();
        if (!this.validateDate(s) || this.getSelectedIndex(s) > -1)
          return !1;
        if (this.maxSelections && this.selected.length >= this.maxSelections) {
          if (!this.pop)
            return !1;
          this.selected.shift();
        }
        return this.multiple ? this.selected.push(n) : this.selected = [n], t && (this.updateCurrentMonth(n.getMonth()), this.updateCurrentYear(n.getYear())), !0;
      } catch (n) {
        this.invalid = !0, this.$emit("error", { value: e, error: n });
      }
      return !1;
    },
    /**
     * Update the selected dates
     * @param {string[] | number[] | Date[]} values
     * @param {boolean} updateCalendar
     * @returns {void}
     */
    updateSelectedFromArray(e, t = !0) {
      if (e.length === 0) {
        this.selected = [];
        return;
      }
      this.disableWatchSelected = !0;
      for (let n = 0; n < e.length; n++)
        this.addSelected(e[n], t);
      this.disableWatchSelected = !1;
    },
    getSelectedTexts() {
      return this.selected.map((e) => e.text());
    },
    getSelectedValues() {
      return this.selected.map((e) => e.getUnixTime());
    },
    getSelectedDates() {
      return this.selected.map((e) => e.getDate());
    },
    getTexts() {
      return this.getSelectedTexts().join(this.separator);
    },
    getValues() {
      return this.getSelectedValues();
    },
    getDates() {
      return this.getSelectedDates();
    },
    /**
     * Check if the unixTime is selected
     * @param {number} unixTime
     * @returns {number}
     */
    getSelectedIndex(e) {
      return this.selected.findIndex((t) => t.getUnixTime() === e);
    },
    /**
     * Go to the previous month
     */
    prevMonth() {
      this.displayedMonth === 0 ? (this.displayedMonth = 11, this.displayedYear--) : this.displayedMonth--;
    },
    /**
     * Go to the next month
     */
    nextMonth() {
      this.displayedMonth === 11 ? (this.displayedMonth = 0, this.displayedYear++) : this.displayedMonth++;
    },
    /**
     * Go to the previous year
     */
    prevYear() {
      this.displayedYear--;
    },
    /**
     * Go to the next year
     */
    nextYear() {
      this.displayedYear++;
    },
    /**
     * Event when the date is clicked
     * @param {MouseEvent} event
     * @param {number} unixTime
     */
    onClick(e, t) {
      this.toggleSelected(t);
      const n = Fe.toUseDate(t, this.format), s = this.getSelectedIndex(t);
      this.$emit("click", {
        event: e,
        date: n.getDate(),
        unixTime: n.getUnixTime(),
        text: n.text(),
        selected: s > -1
      });
    },
    /**
     * Event when the month is selected
     */
    onClickShowMonths() {
      this.showMonths = !this.showMonths;
    },
    /**
     * Event when the year is selected
     */
    onClickShowYears() {
      this.showYears = !this.showYears;
    },
    onSelectedMonth(e) {
      e && this.updateCurrentMonth(e.value);
    },
    onSelectedYear(e) {
      e && this.updateCurrentYear(e.value);
    },
    /**
     * Clear the selected dates
     */
    reset() {
      this.selected.length && (this.selected = [], this.invalid = !1);
    },
    onKeyDown(e) {
      if (!this.selected.length || this.disabled || this.multiple || !this.arrowKeys)
        return;
      const t = this.selected[0];
      let n = null;
      const s = {
        ArrowLeft: () => {
          const a = new Date(t.getDate());
          return a.setDate(a.getDate() - 1), a;
        },
        ArrowRight: () => {
          const a = new Date(t.getDate());
          return a.setDate(a.getDate() + 1), a;
        },
        ArrowUp: () => {
          const a = new Date(t.getDate());
          return a.setMonth(a.getMonth() - 1), a;
        },
        ArrowDown: () => {
          const a = new Date(t.getDate());
          return a.setMonth(a.getMonth() + 1), a;
        }
      };
      s[e.key] && (n = s[e.key](), this.selected = [Fe.toUseDate(n, this.format)], this.updateCurrentMonth(n.getMonth()), this.updateCurrentYear(n.getFullYear()), e.preventDefault());
    }
  },
  mounted() {
    const e = this.$refs.refControl;
    e && e instanceof HTMLElement && e.addEventListener("keydown", this.onKeyDown);
  },
  beforeUnmount() {
    const e = this.$refs.refControl;
    e && e instanceof HTMLElement && e.removeEventListener("keydown", this.onKeyDown);
  }
}), fb = { class: "b-date__header" }, mb = { class: "b-date__header--actions" }, hb = { class: "b-date__header--title" }, pb = { class: "b-date__header--actions" }, gb = { class: "b-date__weekdays" }, bb = { class: "b-date__calendar" }, yb = ["onClick", "onMouseenter", "onMouseleave"];
function wb(e, t, n, s, a, i) {
  var h, v, C, w, E, B;
  const r = T("BButton"), o = T("b-icon"), l = T("b-button"), c = T("BDropDown");
  return e.isHidden ? Ke((m(), I("div", {
    key: 0,
    class: H(e.classes),
    ref: "refControl",
    tabindex: "0"
  }, [
    U("div", fb, [
      U("div", mb, [
        W(r, {
          onClick: e.prevMonth,
          icon: e.$options.ArrowLeft,
          plain: "",
          disabled: e.disabled
        }, null, 8, ["onClick", "icon", "disabled"]),
        W(r, {
          onClick: e.prevYear,
          icon: e.$options.DoubleArrowLeft,
          plain: "",
          disabled: e.disabled
        }, null, 8, ["onClick", "icon", "disabled"])
      ]),
      U("div", hb, [
        W(l, {
          onClick: e.onClickShowMonths,
          text: e.monthName,
          outlined: "",
          disabled: e.disabled,
          ref: "refOwnerMonth"
        }, {
          after: P(() => [
            W(o, {
              icon: e.$options.ArrowDown
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["onClick", "text", "disabled"]),
        W(l, {
          onClick: e.onClickShowYears,
          text: e.displayedYear,
          outlined: "",
          disabled: e.disabled,
          ref: "refOwnerYear"
        }, {
          after: P(() => [
            W(o, {
              icon: e.$options.ArrowDown
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["onClick", "text", "disabled"]),
        W(c, {
          "teleport-to": e.$refs.refControl,
          "single-selection": "",
          hidden: !1,
          "context-menu": !1,
          "auto-focus": !0,
          "auto-close": !0,
          required: !0,
          items: e.months,
          owner: (h = e.$refs) == null ? void 0 : h.refOwnerMonth,
          visible: e.showMonths,
          "onUpdate:visible": t[0] || (t[0] = (k) => e.showMonths = k),
          value: e.displayedMonth,
          onSelectedItem: e.onSelectedMonth,
          inheritAttrs: "false",
          class: "b-date__list b-date__list--months",
          style: Ye({
            width: `${((v = e.$refs.refControl) == null ? void 0 : v.offsetWidth) - 2}px`,
            height: `${((C = e.$refs.refControl) == null ? void 0 : C.offsetHeight) - 57}px`,
            top: "54px",
            left: "0px"
          })
        }, null, 8, ["teleport-to", "items", "owner", "visible", "value", "onSelectedItem", "style"]),
        W(c, {
          "teleport-to": e.$refs.refControl,
          "single-selection": "",
          hidden: !1,
          "context-menu": !1,
          "auto-focus": !0,
          "auto-close": !0,
          required: !0,
          items: e.years,
          owner: (w = e.$refs) == null ? void 0 : w.refOwnerYear,
          visible: e.showYears,
          "onUpdate:visible": t[1] || (t[1] = (k) => e.showYears = k),
          value: e.displayedYear,
          onSelectedItem: e.onSelectedYear,
          class: "b-date__list b-date__list--years",
          style: Ye({
            width: `${((E = e.$refs.refControl) == null ? void 0 : E.offsetWidth) - 2}px`,
            height: `${((B = e.$refs.refControl) == null ? void 0 : B.offsetHeight) - 57}px`,
            top: "54px",
            left: "0px"
          })
        }, null, 8, ["teleport-to", "items", "owner", "visible", "value", "onSelectedItem", "style"])
      ]),
      U("div", pb, [
        W(r, {
          onClick: e.nextYear,
          icon: e.$options.DoubleArrowRight,
          plain: "",
          disabled: e.disabled
        }, null, 8, ["onClick", "icon", "disabled"]),
        W(r, {
          onClick: e.nextMonth,
          icon: e.$options.ArrowRight,
          plain: "",
          disabled: e.disabled
        }, null, 8, ["onClick", "icon", "disabled"])
      ])
    ]),
    U("div", gb, [
      (m(!0), I(ce, null, ye(e.weekDayNames, (k) => (m(), I("div", {
        key: k,
        class: "b-date__weekdays--name"
      }, X(k), 1))), 128))
    ]),
    U("div", bb, [
      (m(!0), I(ce, null, ye(e.days, (k, y) => (m(), I("div", {
        key: y,
        class: "b-date__calendar--week"
      }, [
        (m(!0), I(ce, null, ye(k, (g) => (m(), I("div", {
          key: g.unixTime,
          class: H([
            "b-date__calendar--day",
            {
              "b-date__calendar--day-today": g.unixTime === e.today,
              "b-date__calendar--day-selected": g.selected,
              "b-date__calendar--day-other-month": !g.current,
              "b-date__calendar--day-disabled": g.unixTime < e.stateMinDate || g.unixTime > e.stateMaxDate
            },
            e.additionalClass(g)
          ]),
          onClick: (b) => e.onClick(b, g.unixTime),
          onMouseenter: () => e.$emit("mouse-enter-day", g),
          onMouseleave: () => e.$emit("mouse-leave-day", g)
        }, X(g.day), 43, yb))), 128))
      ]))), 128))
    ])
  ], 2)), [
    [nt, e.isVisibility]
  ]) : M("", !0);
}
const Mo = /* @__PURE__ */ F(db, [["render", wb]]), vb = j(
  q(() => import("./calendar-D82Gwal2.js"))
);
function Cb(e = {}) {
  var o;
  const t = fi(), n = Us(), s = Vs(), a = ((o = t.format) == null ? void 0 : o.toLowerCase()) || "", i = $t(vb);
  return { ...{
    ...t,
    ...n,
    ...s,
    editable: !0,
    placeholder: a,
    icon: i
  }, ...e };
}
const me = Cb();
class Yv {
  constructor(t = {}) {
    u(this, "format");
    u(this, "date");
    u(this, "minDatePicker");
    u(this, "maxDatePicker");
    u(this, "multiple");
    u(this, "separator");
    u(this, "currentMonth");
    u(this, "currentYear");
    u(this, "maxSelections");
    u(this, "toggle");
    u(this, "disabled");
    u(this, "text");
    u(this, "value");
    u(this, "visible");
    // input
    u(this, "placeholder");
    u(this, "visibility");
    u(this, "clearButton");
    u(this, "clearWithText");
    u(this, "state");
    u(this, "showStateIcon");
    u(this, "sizeControl");
    u(this, "readonly");
    u(this, "editable");
    u(this, "placement");
    u(this, "icon");
    Object.assign(this, me, t);
  }
}
const Db = j(
  q(() => import("./calendar-D82Gwal2.js"))
), _b = R({
  name: "BDatePicker",
  extends: We,
  emits: [
    "update:text",
    "update:value",
    "update:date",
    "click",
    "change",
    "selected",
    "month-changed",
    "year-changed",
    "period-changed",
    "toggle-selected",
    "mouse-enter-day",
    "mouse-leave-day",
    "error"
  ],
  components: {
    BDate: Mo,
    BInput: Gn,
    BDropDownComponent: Fs,
    BIcon: Ae,
    IconCalendar: Db
  },
  props: {
    // BDate props
    date: {
      type: [Date, Array],
      default: me.date
    },
    format: {
      type: String,
      default() {
        const e = Qn("componentsConfig", ns);
        return (e == null ? void 0 : e.dateFormat) || me.format;
      }
    },
    text: {
      type: [String, Array],
      default: me.text
    },
    value: {
      type: [Number, String, Array],
      default: me.value
    },
    // The minimum date for the calendar
    minDate: {
      type: [Date, String, Number],
      default: me.minDate
    },
    // The maximum date for the calendar
    maxDate: {
      type: [Date, String, Number],
      default: me.maxDate
    },
    // The multiple selection of dates
    multiple: {
      type: Boolean,
      default: me.multiple
    },
    // The maximum number of selected dates if multiple is true
    maxSelections: {
      type: Number,
      default: me.maxSelections
    },
    // The separator for the text and value
    separator: {
      type: String,
      default: me.separator
    },
    // The current month for the calendar
    currentMonth: {
      type: Number,
      default: me.currentMonth
    },
    // The current year for the calendar
    currentYear: {
      type: Number,
      default: me.currentYear
    },
    // Toggle selection
    toggle: {
      type: Boolean,
      default: me.toggle
    },
    arrowKeys: {
      type: Boolean,
      default: me.arrowKeys
    },
    // BInput props
    placeholder: {
      type: String,
      default: me.placeholder
    },
    visibility: {
      type: Boolean,
      default: me.visibility
    },
    readonly: {
      type: Boolean,
      default: me.readonly
    },
    clearButton: {
      type: Boolean,
      default: me.clearButton
    },
    clearWithText: {
      type: Boolean,
      default: me.clearWithText
    },
    showStateIcon: {
      type: Boolean,
      default: me.showStateIcon
    },
    sizeControl: {
      type: String,
      default: me.sizeControl
    },
    simple: {
      type: Boolean,
      default: me.simple
    },
    // DropDownComponent props
    placement: {
      type: String,
      default: me.placement
    },
    required: {
      type: Boolean,
      default: me.required
    },
    // BDatePicker props
    editable: {
      type: Boolean,
      default: me.editable
    },
    icon: {
      type: [String, Object],
      default: me.icon
    }
  },
  data() {
    return {
      cssClass: "b-date-picker",
      stateText: "",
      stateValue: void 0,
      showDialog: !1,
      cmpInput: null,
      cmpDialog: null,
      iconProps: null
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--editable`]: !!this.editable
        },
        this.rootClasses
      ];
    }
  },
  watch: {
    icon: {
      immediate: !0,
      handler(e) {
        this.iconProps = $t(e) || null;
      }
    },
    text: {
      handler(e) {
        this.stateText = e;
      },
      immediate: !0
    },
    value: {
      handler(e) {
        this.stateValue = e;
      },
      immediate: !0
    }
  },
  methods: {
    /**
     * Open or close the drop-down list
     */
    toggleDropDown() {
      this.showDialog ? this.hideDropDown() : this.openDropDown();
    },
    /**
     * Click on the arrow to open the drop-down list
     */
    onClickToggleDropDown() {
      var e;
      this.toggleDropDown(), this.showDialog && ((e = this.cmpInput) == null || e.focus());
    },
    onInputClick() {
      this.toggleDropDown();
    },
    /**
     * Blur from the input field
     */
    onInputBlur() {
      var e;
      (e = this.cmpDialog) != null && e.invalid && this.reset();
    },
    /**
     * Initialization when opening a drop-down list
     */
    openDropDown() {
      this.showDialog = !0;
    },
    hideDropDown() {
      this.showDialog = !1;
    },
    onInputKeyDown(e) {
      var t;
      if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Enter", "Escape"].includes(
        e.key
      )) {
        ["ArrowDown", "ArrowUp"].includes(e.key) && e.preventDefault();
        const s = {
          ArrowDown: this.openDropDown,
          ArrowUp: this.hideDropDown,
          Enter: this.toggleDropDown,
          Escape: this.hideDropDown
        }[e.key];
        s && s.call(this), this.arrowKeys && ((t = this.cmpDialog) == null || t.onKeyDown(e));
      }
    },
    onInputClear() {
      this.reset();
    },
    onInputClickClear() {
      var e;
      (e = this.cmpInput) == null || e.focus(), this.onInputClear();
    },
    onMountedInput(e) {
      this.cmpInput = e;
    },
    onMountedDate(e) {
      this.cmpDialog = e;
    },
    onDateChange({ texts: e, values: t, dates: n }) {
      this.stateText = e, this.stateValue = t, this.$emit("update:text", e), this.$emit("update:value", t), this.$emit("update:date", n), this.$emit("change", { texts: e, values: t, dates: n });
    },
    onToggleSelected({ selected: e }) {
      var s, a;
      const t = ((s = this.cmpDialog) == null ? void 0 : s.getTexts()) || "", n = ((a = this.cmpDialog) == null ? void 0 : a.getValues()) || null;
      this.$emit("selected", { selected: e, texts: t, values: n });
    },
    reset() {
      var e, t;
      (e = this.cmpInput) == null || e.reset(), (t = this.cmpDialog) == null || t.reset(), this.hideDropDown();
    }
  },
  mounted() {
    var n;
    const e = this.$refs.refRoot, t = (n = this.cmpDialog) == null ? void 0 : n.$el;
    Io(e, t, () => {
      this.hideDropDown();
    });
  },
  unmounted() {
    const e = this.$refs.refRoot;
    ko(e);
  }
}), $b = ["aria-expanded"];
function Sb(e, t, n, s, a, i) {
  var h;
  const r = T("b-icon"), o = T("b-input"), l = T("BDate"), c = T("b-drop-down-component");
  return e.isHidden ? Ke((m(), I("div", {
    key: 0,
    ref: "refRoot",
    class: H(e.classes),
    role: "combobox",
    "aria-haspopup": "dialog",
    "aria-expanded": e.showDialog ? "true" : "false"
  }, [
    W(o, G({
      text: e.stateText,
      "onUpdate:text": t[0] || (t[0] = (v) => e.stateText = v),
      "as-select": "",
      onMounted: e.onMountedInput,
      onClick: e.onInputClick,
      onBlur: e.onInputBlur,
      onKeydown: e.onInputKeyDown,
      onKeyup: e.$attrs.onKeyUp,
      onClear: e.onInputClear,
      onClickClear: e.onInputClickClear,
      ref: "refOwner",
      placeholder: e.placeholder,
      visibility: e.visibility,
      "clear-button": e.clearButton,
      "clear-with-text": e.clearWithText,
      "show-state-icon": e.showStateIcon,
      "size-control": e.sizeControl,
      focused: e.focused,
      simple: e.simple,
      readonly: e.readonly || !e.editable
    }, e.attributes), {
      prefix: P((v) => [
        L(e.$slots, "prefix", rt(Mt(v)))
      ]),
      suffix: P((v) => [
        L(e.$slots, "suffix", rt(Mt(v))),
        e.icon ? (m(), N(r, G({ key: 0 }, e.iconProps, {
          size: "1.4em",
          onClick: e.onClickToggleDropDown,
          class: "b-date-picker__arrow"
        }), null, 16, ["onClick"])) : M("", !0)
      ]),
      _: 3
    }, 16, ["text", "onMounted", "onClick", "onBlur", "onKeydown", "onKeyup", "onClear", "onClickClear", "placeholder", "visibility", "clear-button", "clear-with-text", "show-state-icon", "size-control", "focused", "simple", "readonly"]),
    W(c, {
      class: H(e.classes),
      hidden: !1,
      visible: e.showDialog,
      "onUpdate:visible": t[8] || (t[8] = (v) => e.showDialog = v),
      required: e.required,
      placement: e.placement,
      "auto-focus": !1,
      "auto-close": !1,
      owner: (h = e.$refs.refOwner) == null ? void 0 : h.$el,
      "context-menu": !1,
      tabindex: "0"
    }, {
      component: P(({ onUpdateComponentRect: v, onMountedComponent: C, hide: w }) => [
        W(l, {
          hidden: !1,
          visible: e.showDialog,
          date: e.date,
          text: e.stateText,
          value: e.stateValue,
          format: e.format,
          "min-date": e.minDate,
          "max-date": e.maxDate,
          multiple: e.multiple,
          "max-selections": e.maxSelections,
          "current-month": e.currentMonth,
          "current-year": e.currentYear,
          separator: e.separator,
          toggle: e.toggle,
          onMounted: (E) => {
            e.onMountedDate(E), C(E);
          },
          onShow: v,
          onChange: e.onDateChange,
          onToggleSelected: ({ index: E }) => {
            E === -1 && !e.multiple && w(), e.onToggleSelected({ selected: e.selected });
          },
          onClick: t[1] || (t[1] = (E) => e.$emit("click", E)),
          onMonthChanged: t[2] || (t[2] = (E) => e.$emit("month-changed", E)),
          onYearChanged: t[3] || (t[3] = (E) => e.$emit("year-changed", E)),
          onPeriodChanged: t[4] || (t[4] = (E) => e.$emit("period-changed", E)),
          onMouseEnterDay: t[5] || (t[5] = (E) => e.$emit("mouse-enter-day", E)),
          onMouseLeaveDay: t[6] || (t[6] = (E) => e.$emit("mouse-leave-day", E)),
          onError: t[7] || (t[7] = (E) => e.$emit("error", E))
        }, null, 8, ["visible", "date", "text", "value", "format", "min-date", "max-date", "multiple", "max-selections", "current-month", "current-year", "separator", "toggle", "onMounted", "onShow", "onChange", "onToggleSelected"])
      ]),
      _: 1
    }, 8, ["class", "visible", "required", "placement", "owner"])
  ], 10, $b)), [
    [nt, e.isVisibility]
  ]) : M("", !0);
}
const mr = /* @__PURE__ */ F(_b, [["render", Sb]]), Eb = R({
  name: "BFilterComponentDatePicker",
  extends: Sn,
  components: {
    BDatePicker: mr,
    BFilterOperation: ts
  },
  props: {
    ...mr.props
  },
  ESizeControl: ie,
  methods: {
    onChange({ texts: e, values: t }) {
      this.stateText = e, this.stateValue = t, this.change();
    },
    onKeyDown(e) {
      e.key === "Enter" && this.editable && this.change();
    }
  },
  created() {
    this.stateOperations = [
      te.Equal,
      te.NotEqual,
      te.Less,
      te.LessOrEqual,
      te.Greater,
      te.GreaterOrEqual
    ];
  }
});
function Ib(e, t, n, s, a, i) {
  const r = T("BFilterOperation"), o = T("b-date-picker");
  return m(), N(o, {
    "size-control": e.$options.ESizeControl.ExtraSmall,
    onChange: e.onChange,
    onKeydown: e.onKeyDown,
    date: e.date,
    format: e.format,
    text: e.text,
    value: e.stateValue,
    "min-date": e.minDate,
    "max-date": e.maxDate,
    multiple: e.multiple,
    separator: e.separator,
    placeholder: e.placeholder,
    readonly: e.readonly,
    "clear-button": e.clearButton,
    "clear-with-text": e.clearWithText || !0,
    editable: e.editable,
    simple: "",
    enterkeyhint: "search"
  }, {
    prefix: P(() => [
      e.showOperation ? (m(), N(r, G({
        key: 0,
        onChange: e.onChangeOperation,
        operation: e.operation
      }, e.operationsProps), null, 16, ["onChange", "operation"])) : M("", !0)
    ]),
    _: 1
  }, 8, ["size-control", "onChange", "onKeydown", "date", "format", "text", "value", "min-date", "max-date", "multiple", "separator", "placeholder", "readonly", "clear-button", "clear-with-text", "editable"]);
}
const zv = /* @__PURE__ */ F(Eb, [["render", Ib]]);
function Bo(e = {}) {
  const t = lt(), n = fi();
  return { ...{
    ...t,
    format: n.format,
    value: 0,
    value1: 0,
    value2: 0,
    text: "",
    text1: "",
    text2: "",
    minDate: n.minDate,
    maxDate: n.maxDate
  }, ...e };
}
const Xe = Bo();
class jv {
  constructor(t = {}) {
    u(this, "format");
    u(this, "disabled");
    u(this, "text");
    u(this, "value");
    u(this, "visible");
    u(this, "date1");
    u(this, "date2");
    u(this, "text1");
    u(this, "text2");
    u(this, "value1");
    u(this, "value2");
    u(this, "minDate");
    u(this, "maxDate");
    u(this, "secondDate");
    Object.assign(this, Xe, t);
  }
}
function kb(e = {}) {
  return { ...{
    ...we(),
    vertical: !1,
    type: "solid",
    text: "",
    textAlign: "center"
  }, ...e };
}
const Rn = kb();
class qv {
  constructor(t = {}) {
    u(this, "vertical");
    u(this, "type");
    u(this, "text");
    u(this, "textAlign");
    Object.assign(this, Rn, t);
  }
}
const Tb = R({
  name: "BDivider",
  extends: de,
  props: {
    vertical: {
      type: Boolean,
      default: Rn.vertical
    },
    type: {
      type: String,
      default: Rn.type
    },
    text: {
      type: String,
      default: Rn.text
    },
    textAlign: {
      type: String,
      default: Rn.textAlign
    }
  },
  EDirection: gs,
  data() {
    return {
      cssClass: "b-divider"
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        `b-divider--${this.direction}`,
        `b-divider--${this.type}`,
        `b-divider--text-${this.textAlign}`
      ];
    },
    direction() {
      return this.vertical ? gs.Vertical : gs.Horizontal;
    }
  }
}), Ab = ["aria-orientation"], Nb = {
  key: 0,
  class: "b-divider__text"
};
function Ob(e, t, n, s, a, i) {
  return m(), I("div", {
    class: H(e.classes),
    "aria-orientation": e.direction
  }, [
    e.text && !e.vertical ? (m(), I("span", Nb, [
      L(e.$slots, "default", {}, () => [
        Be(X(e.text), 1)
      ])
    ])) : M("", !0)
  ], 10, Ab);
}
const Pb = /* @__PURE__ */ F(Tb, [["render", Ob]]), Mb = R({
  name: "BDateRange",
  extends: We,
  emits: [
    "update:date1",
    "update:date2",
    "update:text1",
    "update:text2",
    "update:value1",
    "update:value2",
    "change",
    "click",
    "count",
    "range",
    "error"
  ],
  components: {
    BButton: ze,
    BDropDown: xs,
    BDate: Mo,
    BDivider: Pb
  },
  props: {
    date1: {
      type: Date,
      default: Xe.date1
    },
    date2: {
      type: Date,
      default: Xe.date2
    },
    text1: {
      type: String,
      default: Xe.text1
    },
    text2: {
      type: String,
      default: Xe.text2
    },
    value1: {
      type: Number,
      default: Xe.value1
    },
    value2: {
      type: Number,
      default: Xe.value2
    },
    format: {
      type: String,
      default() {
        const e = Qn("componentsConfig", ns);
        return (e == null ? void 0 : e.dateFormat) || Xe.format;
      }
    },
    text: {
      type: String,
      default: Xe.text
    },
    value: {
      type: Number,
      default: Xe.value
    },
    minDate: {
      type: [Date, String, Number],
      default: Xe.minDate
    },
    maxDate: {
      type: [Date, String, Number],
      default: Xe.maxDate
    },
    firstDate: {
      type: Boolean,
      default: Xe.firstDate
    },
    secondDate: {
      type: Boolean,
      default: Xe.secondDate
    }
  },
  data() {
    return {
      cssClass: "b-date-range",
      stateDate1: null,
      stateDate2: null,
      stateMinDate: 0,
      stateMaxDate: 0,
      selectionDate2: 0,
      selected: [],
      calendar1: null,
      calendar2: null,
      invalid: !1
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--disabled`]: this.disabled
        }
      ];
    }
  },
  watch: {
    date1: {
      handler(e, t) {
        this.handleDateChange(e, t, "stateDate1");
      }
    },
    date2: {
      handler(e, t) {
        this.handleDateChange(e, t, "stateDate2");
      }
    },
    text1: {
      handler(e, t) {
        this.handleDateChange(e, t, "stateDate1");
      }
    },
    text2: {
      handler(e, t) {
        this.handleDateChange(e, t, "stateDate2");
      }
    },
    value1: {
      handler(e, t) {
        this.handleDateChange(e, t, "stateDate1");
      }
    },
    value2: {
      handler(e, t) {
        this.handleDateChange(e, t, "stateDate2");
      }
    },
    stateDate1: {
      deep: !0,
      handler(e) {
        this.emitChange(e, this.stateDate2);
      }
    },
    stateDate2: {
      deep: !0,
      handler(e) {
        this.emitChange(this.stateDate1, e);
      }
    },
    minDate: {
      immediate: !0,
      handler(e) {
        try {
          const t = Fe.toUseDate(e, this.format);
          this.stateMinDate = t.getUnixTime();
        } catch (t) {
          console.error(t);
        }
      }
    },
    maxDate: {
      immediate: !0,
      handler(e) {
        try {
          const t = Fe.toUseDate(e, this.format);
          this.stateMaxDate = t.getUnixTime();
        } catch (t) {
          console.error(t);
        }
      }
    }
  },
  methods: {
    /**
     * Validate the date
     * @param {TDate} value
     * @returns {boolean}
     */
    validateDate(e) {
      const t = Fe.toUnixTime(e, this.format);
      return t > 0 && (t >= this.stateMinDate || !this.stateMinDate) && (t <= this.stateMaxDate || !this.stateMaxDate);
    },
    /**
     * Change the date depending on the selected value
     * @param value TDate
     * @param old TDate | null
     * @param stateKey 'stateDate1' | 'stateDate2'
     */
    handleDateChange(e, t, n) {
      if (!(!this[n] && !e))
        try {
          let s = null;
          if (e && (s = Fe.toUseDate(e, this.format), this.getSelectedIndex(s.getUnixTime()) !== -1) || !this.validateDate(e))
            return;
          if (this[n] = s, t) {
            const a = Fe.toUseDate(t, this.format), i = this.getSelectedIndex(a.getUnixTime());
            i !== -1 && this.selected.splice(i, 1);
          }
          if (this.$nextTick(() => {
            this.updateCalendares();
          }), !e)
            return;
          this.addSelected(s);
        } catch (s) {
          console.error(s);
        }
    },
    /**
     * Emit change event
     * @param IUseDate date1
     * @param IUseDate date2
     */
    emitChange(e, t) {
      this.$emit("update:text1", e == null ? void 0 : e.text()), this.$emit("update:value1", e == null ? void 0 : e.getUnixTime()), this.$emit("update:date1", e == null ? void 0 : e.getDate()), this.$emit("update:text2", t == null ? void 0 : t.text()), this.$emit("update:value2", t == null ? void 0 : t.getUnixTime()), this.$emit("update:date2", t == null ? void 0 : t.getDate());
      const n = this.getCountDays(), s = {
        date1: e == null ? void 0 : e.getDate(),
        text1: e == null ? void 0 : e.text(),
        value1: e == null ? void 0 : e.getUnixTime(),
        date2: t == null ? void 0 : t.getDate(),
        text2: t == null ? void 0 : t.text(),
        value2: t == null ? void 0 : t.getUnixTime(),
        count: n
      };
      this.$emit("change", s), this.$emit("count", n), e && t && this.$emit("range", s);
    },
    /**
     * Update Calendares
     */
    updateCalendares() {
      var e, t, n, s, a, i, r, o, l, c;
      (e = this.calendar1) == null || e.reset(), (t = this.calendar2) == null || t.reset(), (n = this.calendar1) == null || n.updateSelectedFromArray(
        this.selected.map((h) => h.getUnixTime()),
        !1
      ), (s = this.calendar2) == null || s.updateSelectedFromArray(
        this.selected.map((h) => h.getUnixTime()),
        !1
      ), this.stateDate1 && (this.calendar1.displayedMonth = ((a = this.stateDate1) == null ? void 0 : a.getMonth()) || 0, this.calendar1.displayedYear = (i = this.stateDate1) == null ? void 0 : i.getYear()), this.stateDate1 && this.stateDate2 && ((r = this.stateDate1) == null ? void 0 : r.getUnixTime) !== ((o = this.stateDate2) == null ? void 0 : o.getUnixTime) && (this.calendar2.displayedMonth = ((l = this.stateDate2) == null ? void 0 : l.getMonth()) || 0, this.calendar2.displayedYear = (c = this.stateDate2) == null ? void 0 : c.getYear());
    },
    /**
     * Get count days
     * @returns number
     */
    getCountDays() {
      return !this.stateDate1 || !this.stateDate2 ? 0 : Math.abs(this.stateDate1.getUnixTime() - this.stateDate2.getUnixTime()) / 86400;
    },
    /**
     * Is begin selected
     * @returns boolean
     */
    isBeginSelected() {
      const e = this.selected.length;
      return e === 1 || e > 2;
    },
    /**
     * Add selected date
     * @param date IUseDate
     */
    addSelected(e) {
      this.selected.push(e), this.selected.sort((t, n) => t.getUnixTime() - n.getUnixTime());
    },
    /**
     * Get selected index
     * @param unixTime number
     * @returns number
     */
    getSelectedIndex(e) {
      return this.selected.findIndex((t) => t.getUnixTime() === e);
    },
    handleToggleSelected(e, t, n) {
      var a, i;
      const s = Fe.toUseDate(e, this.format);
      this.selected.length === 2 && !this.secondDate && !this.firstDate ? this.reset() : this.selected.length === 2 && (this.secondDate || this.firstDate) && (this.firstDate ? this.selected.shift() : this.selected.pop()), this.addSelected(s), t == null || t.reset(), t == null || t.updateSelectedFromArray(
        this.selected.map((r) => r.getUnixTime()),
        !1
      ), n == null || n.reset(), n == null || n.updateSelectedFromArray(
        this.selected.map((r) => r.getUnixTime()),
        !1
      ), this.stateDate1 = (a = this.selected) == null ? void 0 : a[0], this.stateDate2 = (i = this.selected) == null ? void 0 : i[1], this.invalid = !1;
    },
    reset() {
      var e, t;
      this.selected = [], (e = this.calendar1) == null || e.reset(), (t = this.calendar2) == null || t.reset(), this.stateDate1 = null, this.stateDate2 = null, this.selectionDate2 = 0, this.invalid = !1;
    },
    onPeriodChange1({ month: e, year: t }) {
      this.calendar2 && (this.calendar2.displayedYear < t || this.calendar2.displayedYear === t && this.calendar2.displayedMonth <= e) && (this.calendar2.displayedMonth = (e + 1) % 12, this.calendar2.displayedYear = e + 1 === 12 ? t + 1 : t);
    },
    onPeriodChange2({ month: e, year: t }) {
      this.calendar1 && (this.calendar1.displayedYear > t || this.calendar1.displayedYear === t && this.calendar1.displayedMonth >= e) && (this.calendar1.displayedMonth = (e - 1 + 12) % 12, this.calendar1.displayedYear = e - 1 === -1 ? t - 1 : t);
    },
    onMountedDate1(e) {
      this.calendar1 = e;
    },
    onMountedDate2(e) {
      this.calendar2 = e;
    },
    additionalClass(e) {
      var s, a;
      if (!e.current)
        return "";
      const t = (s = this.stateDate1) == null ? void 0 : s.getUnixTime(), n = ((a = this.stateDate2) == null ? void 0 : a.getUnixTime()) || this.selectionDate2;
      return t !== void 0 && n > 0 && e.unixTime > t && e.unixTime < n || t !== void 0 && n > 0 && e.unixTime < t && e.unixTime > n ? "b-date-range__calendar--day-selected" : "";
    },
    onMouseEnterDay(e) {
      this.selected.length === 1 && (this.selectionDate2 = e.unixTime);
    },
    onError({ error: e }) {
      this.invalid = !0, this.$emit("error", e);
    },
    onClick1({
      event: e,
      date: t,
      unixTime: n,
      text: s
    }) {
      this.handleToggleSelected(t, this.calendar1, this.calendar2), this.$emit("click", {
        event: e,
        date: t,
        unixTime: n,
        text: s
      });
    },
    onClick2({
      event: e,
      date: t,
      unixTime: n,
      text: s
    }) {
      this.handleToggleSelected(t, this.calendar2, this.calendar1), this.$emit("click", {
        event: e,
        date: t,
        unixTime: n,
        text: s
      });
    }
  },
  mounted() {
    var s, a;
    const e = this.text1 || this.value1 || this.date1, t = this.text2 || this.value2 || this.date2;
    this.handleDateChange(e, null, "stateDate1"), this.handleDateChange(t, null, "stateDate2");
    const n = /* @__PURE__ */ new Date();
    this.onPeriodChange1({
      month: ((s = this.calendar1) == null ? void 0 : s.displayedMonth) || n.getMonth(),
      year: ((a = this.calendar1) == null ? void 0 : a.displayedYear) || n.getFullYear()
    });
  }
});
function Bb(e, t, n, s, a, i) {
  const r = T("BDate"), o = T("BDivider");
  return e.isHidden ? Ke((m(), I("div", {
    key: 0,
    class: H(e.classes),
    ref: "refControl"
  }, [
    W(r, {
      format: e.format,
      "max-selections": 2,
      "min-date": e.minDate,
      "max-date": e.maxDate,
      "additional-class": e.additionalClass,
      pop: !1,
      multiple: "",
      class: "b-date-range__date1",
      onPeriodChanged: e.onPeriodChange1,
      onMounted: e.onMountedDate1,
      onMouseEnterDay: e.onMouseEnterDay,
      onError: e.onError,
      onClick: e.onClick1
    }, null, 8, ["format", "min-date", "max-date", "additional-class", "onPeriodChanged", "onMounted", "onMouseEnterDay", "onError", "onClick"]),
    W(o, {
      vertical: "",
      class: "b-date-range__divider"
    }),
    W(r, {
      format: e.format,
      "max-selections": 2,
      "min-date": e.minDate,
      "max-date": e.maxDate,
      "additional-class": e.additionalClass,
      multiple: "",
      class: "b-date-range__date2",
      onPeriodChanged: e.onPeriodChange2,
      onMounted: e.onMountedDate2,
      onMouseEnterDay: e.onMouseEnterDay,
      onError: e.onError,
      onClick: e.onClick2
    }, null, 8, ["format", "min-date", "max-date", "additional-class", "onPeriodChanged", "onMounted", "onMouseEnterDay", "onError", "onClick"])
  ], 2)), [
    [nt, e.isVisibility]
  ]) : M("", !0);
}
const Lb = /* @__PURE__ */ F(Mb, [["render", Bb]]), Rb = j(
  q(() => import("./calendar-D82Gwal2.js"))
);
function Vb(e = {}) {
  var c;
  const t = Bo(), n = Us(), s = Vs();
  let a = "", i = "";
  try {
    a = re.global.t("dateRangePicker.startDate"), i = re.global.t("dateRangePicker.endDate");
  } catch {
  }
  const r = ((c = t.format) == null ? void 0 : c.toLowerCase()) || "";
  a ? (a = r ? `${a} (${r})` : a, i = r ? `${i} (${r})` : i) : (a = r, i = r);
  const o = $t(Rb);
  return { ...{
    ...t,
    ...n,
    ...s,
    editable: !0,
    placeholder1: a,
    placeholder2: i,
    icon: o
  }, ...e };
}
const pe = Vb();
class Gv {
  constructor(t = {}) {
    u(this, "format");
    u(this, "disabled");
    u(this, "text");
    u(this, "value");
    u(this, "visible");
    u(this, "date1");
    u(this, "date2");
    u(this, "text1");
    u(this, "text2");
    u(this, "value1");
    u(this, "value2");
    u(this, "minDate");
    u(this, "maxDate");
    u(this, "placeholder1");
    u(this, "placeholder2");
    // input
    u(this, "placeholder");
    u(this, "clearButton");
    u(this, "clearWithText");
    u(this, "state");
    u(this, "showStateIcon");
    u(this, "sizeControl");
    u(this, "readonly");
    u(this, "editable");
    u(this, "placement");
    u(this, "icon");
    Object.assign(this, pe, t);
  }
}
const Fb = j(
  q(() => import("./chevron_right-BlaLUlyq.js"))
), Wb = R({
  name: "BDateRangePicker",
  extends: We,
  emits: [
    "update:date1",
    "update:date2",
    "update:text1",
    "update:text2",
    "update:value1",
    "update:value2",
    "change",
    "click",
    "count",
    "range",
    "error"
  ],
  components: {
    BDateRange: Lb,
    BInput: Gn,
    BDropDownComponent: Fs,
    BIcon: Ae,
    IconMiddle: Fb
  },
  props: {
    // BDateRange props
    date1: {
      type: Date,
      default: pe.date1
    },
    date2: {
      type: Date,
      default: pe.date2
    },
    text1: {
      type: String,
      default: pe.text1
    },
    text2: {
      type: String,
      default: pe.text2
    },
    value1: {
      type: Number,
      default: pe.value1
    },
    value2: {
      type: Number,
      default: pe.value2
    },
    format: {
      type: String,
      default() {
        const e = Qn("componentsConfig", ns);
        return (e == null ? void 0 : e.dateFormat) || pe.format;
      }
    },
    text: {
      type: String,
      default: pe.text
    },
    value: {
      type: Number,
      default: pe.value
    },
    minDate: {
      type: [Date, String, Number],
      default: pe.minDate
    },
    maxDate: {
      type: [Date, String, Number],
      default: pe.maxDate
    },
    // BInput props
    visibility: {
      type: Boolean,
      default: pe.visibility
    },
    readonly: {
      type: Boolean,
      default: pe.readonly
    },
    clearButton: {
      type: Boolean,
      default: pe.clearButton
    },
    clearWithText: {
      type: Boolean,
      default: pe.clearWithText
    },
    showStateIcon: {
      type: Boolean,
      default: pe.showStateIcon
    },
    sizeControl: {
      type: String,
      default: pe.sizeControl
    },
    simple: {
      type: Boolean,
      default: pe.simple
    },
    // DropDownComponent props
    placement: {
      type: String,
      default: pe.placement
    },
    required: {
      type: Boolean,
      default: pe.required
    },
    // BDateRangePicker props
    editable: {
      type: Boolean,
      default: pe.editable
    },
    placeholder1: {
      type: String,
      default: pe.placeholder1
    },
    placeholder2: {
      type: String,
      default: pe.placeholder2
    },
    icon: {
      type: [String, Object, Boolean],
      default: pe.icon
    }
  },
  data() {
    return {
      cssClass: "b-date-range-picker",
      stateText1: "",
      stateValue1: void 0,
      stateText2: "",
      stateValue2: void 0,
      showDialog: !1,
      cmpInput1: null,
      cmpInput2: null,
      cmpDialog: null,
      cmpDialogBox: null,
      isFocused: !1,
      iconProps: null,
      inputIndex: -1
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--editable`]: !!this.editable
        },
        this.rootClasses
      ];
    }
  },
  watch: {
    icon: {
      immediate: !0,
      handler(e) {
        this.iconProps = $t(e) || null;
      }
    },
    text1: {
      handler(e) {
        this.stateText1 = e;
      },
      immediate: !0
    },
    value1: {
      handler(e) {
        this.stateValue1 = e;
      },
      immediate: !0
    },
    text2: {
      handler(e) {
        this.stateText2 = e;
      },
      immediate: !0
    },
    value2: {
      handler(e) {
        this.stateValue2 = e;
      },
      immediate: !0
    }
  },
  methods: {
    /**
     * Open or close the drop-down list
     */
    toggleDropDown() {
      this.showDialog ? this.hideDropDown() : this.openDropDown();
    },
    /**
     * Click on the arrow to open the drop-down list
     */
    onClickToggleDropDown() {
      var e, t, n;
      !((e = this.cmpInput1) != null && e.$el.contains(document.activeElement)) && !((t = this.cmpInput2) != null && t.$el.contains(document.activeElement)) && (this.toggleDropDown(), this.showDialog && ((n = this.cmpInput1) == null || n.focus()));
    },
    onInputClick1() {
      (this.inputIndex === -1 || !this.showDialog) && this.toggleDropDown(), this.onInputFocus1();
    },
    onInputClick2() {
      (this.inputIndex === -1 || !this.showDialog) && this.toggleDropDown(), this.onInputFocus2();
    },
    /**
     * Focus on the input field
     */
    onBaseInputFocus() {
      this.isFocused = !0;
    },
    onInputFocus1() {
      var e, t;
      this.inputIndex = (e = this.cmpDialog) != null && e.stateDate1 && ((t = this.cmpDialog) != null && t.stateDate2) ? 0 : -1, this.onBaseInputFocus();
    },
    onInputFocus2() {
      var e, t;
      this.inputIndex = (e = this.cmpDialog) != null && e.stateDate1 && ((t = this.cmpDialog) != null && t.stateDate2) ? 1 : -1, this.onBaseInputFocus();
    },
    /**
     * Blur from the input field
     */
    onFocusOut() {
    },
    /**
     * Initialization when opening a drop-down list
     */
    openDropDown() {
      this.showDialog = !0;
    },
    hideDropDown() {
      this.showDialog = !1;
    },
    onInputKeyDown(e) {
      var t;
      if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key)) {
        ["ArrowDown", "ArrowUp"].includes(e.key) && e.preventDefault();
        const n = {
          ArrowDown: this.openDropDown,
          ArrowUp: this.hideDropDown,
          Enter: this.toggleDropDown,
          Escape: this.hideDropDown
        };
        (t = n[e.key]) == null || t.call(n);
      }
    },
    onInputClear() {
      this.reset();
    },
    onInputClickClear() {
      var e;
      (e = this.cmpInput1) == null || e.focus(), this.onInputClear();
    },
    onMountedInput1(e) {
      this.cmpInput1 = e;
    },
    onMountedInput2(e) {
      this.cmpInput2 = e;
    },
    onMountedDate(e) {
      this.cmpDialog = e;
    },
    onMountedDialogBox(e) {
      this.cmpDialogBox = e;
    },
    onDateChange({
      text1: e,
      value1: t,
      date1: n,
      text2: s,
      value2: a,
      date2: i
    }) {
      var r, o;
      this.isFocused && (t && !a ? (r = this.cmpInput1) == null || r.focus() : t && a && ((o = this.cmpInput2) == null || o.focus())), this.stateText1 = e, this.stateValue1 = t, this.stateText2 = s, this.stateValue2 = a, this.$emit("update:text1", e), this.$emit("update:value1", t), this.$emit("update:date1", n), this.$emit("update:text2", s), this.$emit("update:value2", a), this.$emit("update:date2", i), this.$emit("change", {
        text1: e,
        value1: t,
        date1: n,
        text2: s,
        value2: a,
        date2: i
      }), t && a && this.hideDropDown();
    },
    reset() {
      var e, t, n;
      (e = this.cmpInput1) == null || e.reset(), (t = this.cmpInput2) == null || t.reset(), (n = this.cmpDialog) == null || n.reset(), this.hideDropDown();
    }
  },
  mounted() {
    this.$el.addEventListener("focusout", this.onFocusOut);
  },
  beforeUnmount() {
    this.$el.removeEventListener("focusout", this.onFocusOut);
  }
}), Ub = ["aria-expanded"], xb = { class: "b-date-range-picker__input--box" };
function Hb(e, t, n, s, a, i) {
  var C;
  const r = T("BInput"), o = T("IconMiddle"), l = T("b-icon"), c = T("b-input"), h = T("BDateRange"), v = T("b-drop-down-component");
  return e.isHidden ? Ke((m(), I("div", {
    key: 0,
    class: H(e.classes),
    role: "combobox",
    "aria-haspopup": "dialog",
    "aria-expanded": e.showDialog ? "true" : "false"
  }, [
    W(c, {
      class: "b-date-range-picker__input",
      onClear: e.onInputClear,
      onClickClear: e.onInputClickClear,
      ref: "refOwner",
      text: e.stateText1 || e.stateText2,
      "clear-button": e.clearButton,
      "clear-with-text": e.clearWithText,
      "show-state-icon": e.showStateIcon,
      "size-control": e.sizeControl,
      simple: e.simple
    }, {
      prefix: P((w) => [
        L(e.$slots, "prefix", rt(Mt(w)))
      ]),
      default: P(() => [
        U("div", xb, [
          W(r, G({
            text: e.stateText1,
            "onUpdate:text": t[0] || (t[0] = (w) => e.stateText1 = w),
            value: e.stateValue1,
            "onUpdate:value": t[1] || (t[1] = (w) => e.stateValue1 = w),
            "as-select": "",
            placeholder: e.placeholder1,
            "clear-button": !1,
            visibility: e.visibility,
            readonly: e.readonly || !e.editable,
            focused: e.focused,
            "size-control": e.sizeControl,
            onClick: e.onInputClick1,
            onMounted: e.onMountedInput1,
            onKeydown: e.onInputKeyDown,
            onFocus: e.onInputFocus1
          }, e.attributes), null, 16, ["text", "value", "placeholder", "visibility", "readonly", "focused", "size-control", "onClick", "onMounted", "onKeydown", "onFocus"]),
          W(o, {
            class: "b-date-range-picker__input--box__icon",
            width: "20",
            height: "20"
          }),
          W(r, G({
            text: e.stateText2,
            "onUpdate:text": t[2] || (t[2] = (w) => e.stateText2 = w),
            value: e.stateValue2,
            "onUpdate:value": t[3] || (t[3] = (w) => e.stateValue2 = w),
            "as-select": "",
            placeholder: e.placeholder2,
            "clear-button": !1,
            readonly: e.readonly || !e.editable,
            focused: e.focused,
            "size-control": e.sizeControl,
            onMounted: e.onMountedInput2,
            onKeydown: e.onInputKeyDown,
            onFocus: e.onInputFocus2,
            onClick: e.onInputClick2
          }, e.attributes), null, 16, ["text", "value", "placeholder", "readonly", "focused", "size-control", "onMounted", "onKeydown", "onFocus", "onClick"])
        ])
      ]),
      suffix: P((w) => [
        L(e.$slots, "suffix", rt(Mt(w))),
        e.icon ? (m(), N(l, G({ key: 0 }, e.iconProps, {
          onClick: e.onClickToggleDropDown,
          class: "b-date-range-picker__arrow"
        }), null, 16, ["onClick"])) : M("", !0)
      ]),
      _: 3
    }, 8, ["onClear", "onClickClear", "text", "clear-button", "clear-with-text", "show-state-icon", "size-control", "simple"]),
    W(v, {
      class: H(e.cssClass),
      hidden: !1,
      visible: e.showDialog,
      "onUpdate:visible": t[8] || (t[8] = (w) => e.showDialog = w),
      required: e.required,
      placement: e.placement,
      "auto-focus": !1,
      "auto-close": !1,
      owner: (C = e.$refs.refOwner) == null ? void 0 : C.$el,
      "context-menu": !1,
      onMounted: e.onMountedDialogBox,
      tabindex: "0"
    }, {
      component: P(({ onUpdateComponentRect: w, onMountedComponent: E, registerElement: B }) => [
        W(h, {
          hidden: !1,
          visible: e.showDialog,
          date1: e.date1,
          date2: e.date2,
          text1: e.stateText1,
          value1: e.stateValue1,
          text2: e.stateText2,
          value2: e.stateValue2,
          format: e.format,
          "min-date": e.minDate,
          "max-date": e.maxDate,
          "first-date": e.inputIndex == 0,
          "second-date": e.inputIndex == 1,
          onMounted: (k) => {
            e.onMountedDate(k), E(k);
          },
          onShow: w,
          onChange: e.onDateChange,
          onClick: t[4] || (t[4] = (k) => e.$emit("click", k)),
          onCount: t[5] || (t[5] = (k) => e.$emit("count", k)),
          onRange: t[6] || (t[6] = (k) => e.$emit("range", k)),
          onError: t[7] || (t[7] = (k) => e.$emit("error", k))
        }, null, 8, ["visible", "date1", "date2", "text1", "value1", "text2", "value2", "format", "min-date", "max-date", "first-date", "second-date", "onMounted", "onShow", "onChange"])
      ]),
      _: 1
    }, 8, ["class", "visible", "required", "placement", "owner", "onMounted"])
  ], 10, Ub)), [
    [nt, e.isVisibility]
  ]) : M("", !0);
}
const hr = /* @__PURE__ */ F(Wb, [["render", Hb]]), Yb = R({
  name: "BFilterComponentDateRangePicker",
  extends: Sn,
  components: {
    BDateRangePicker: hr,
    BFilterOperation: ts
  },
  props: {
    ...hr.props,
    value: {
      type: [String, Number, Boolean, Array],
      default: hn.value
    }
  },
  data() {
    return {
      stateValue1: null,
      stateValue2: null
    };
  },
  watch: {
    stateValue: {
      handler(e) {
        Array.isArray(e) && (this.stateValue1 = e[0], this.stateValue2 = e[1]);
      },
      immediate: !0
    }
  },
  methods: {
    onRange({
      text1: e,
      text2: t,
      value1: n,
      value2: s
    }) {
      this.stateText !== `${e},${t}` && (this.stateText = `${e},${t}`, this.stateValue = [n, s], this.change());
    },
    onChange({ text1: e, text2: t }) {
      !e && !t && (this.stateText = "", this.stateValue = null, this.change());
    },
    onMounted(e) {
      this.registeredElements.push(e.$el), this.registeredElements.push(e.cmpDialog.$el);
    }
  },
  ESizeControl: ie
});
function zb(e, t, n, s, a, i) {
  const r = T("b-date-range-picker");
  return m(), N(r, {
    "size-control": e.$options.ESizeControl.ExtraSmall,
    onRange: e.onRange,
    onChange: e.onChange,
    date1: e.date1,
    date2: e.date2,
    text1: e.text1,
    text2: e.text2,
    value1: e.stateValue1 || e.value1,
    value2: e.stateValue2 || e.value2,
    format: e.format,
    "min-date": e.minDate,
    "max-date": e.maxDate,
    readonly: e.readonly,
    "clear-button": e.clearButton,
    placeholder1: e.placeholder1,
    placeholder2: e.placeholder2,
    icon: !1,
    "clear-with-text": e.clearWithText || !0,
    editable: e.editable,
    simple: "",
    enterkeyhint: "search",
    onMounted: e.onMounted
  }, null, 8, ["size-control", "onRange", "onChange", "date1", "date2", "text1", "text2", "value1", "value2", "format", "min-date", "max-date", "readonly", "clear-button", "placeholder1", "placeholder2", "clear-with-text", "editable", "onMounted"]);
}
const Kv = /* @__PURE__ */ F(Yb, [["render", zb]]), jb = R({
  name: "BFilterComponentBoolSelect",
  extends: Sn,
  components: {
    BSelect: Kn,
    BFilterOperation: ts
  },
  props: {
    ...Kn.props,
    trueText: {
      type: String
    },
    falseText: {
      type: String
    }
  },
  data() {
    return {
      stateItems: []
    };
  },
  ESizeControl: ie,
  methods: {
    onChange({ value: e, text: t }) {
      this.stateValue = e, this.stateText = t, this.change();
    }
  },
  created() {
    this.stateItems = [
      { text: this.trueText || re.global.t("common.yes"), value: 0 },
      { text: this.falseText || re.global.t("common.no"), value: 1 }
    ];
  },
  created() {
    this.stateOperations = [te.Equal, te.NotEqual];
  }
});
function qb(e, t, n, s, a, i) {
  const r = T("BFilterOperation"), o = T("b-select");
  return m(), N(o, {
    "size-control": e.$options.ESizeControl.ExtraSmall,
    onChange: e.onChange,
    items: e.stateItems,
    value: e.stateValue,
    enterkeyhint: "search",
    selected: e.selected,
    multiple: e.multiple,
    "max-rows": e.maxRows,
    "auto-width": e.autoWidth,
    filter: e.filter,
    placeholder: e.placeholder,
    "clear-button": e.clearButton,
    "clear-with-text": e.clearWithText || !0,
    readonly: e.readonly,
    disabled: e.disabled,
    editable: e.editable,
    simple: ""
  }, {
    prefix: P(() => [
      e.showOperation ? (m(), N(r, G({
        key: 0,
        onChange: e.onChangeOperation,
        operation: e.operation
      }, e.operationsProps), null, 16, ["onChange", "operation"])) : M("", !0)
    ]),
    _: 1
  }, 8, ["size-control", "onChange", "items", "value", "selected", "multiple", "max-rows", "auto-width", "filter", "placeholder", "clear-button", "clear-with-text", "readonly", "disabled", "editable"]);
}
const Xv = /* @__PURE__ */ F(jb, [["render", qb]]);
function Gb(e = {}) {
  return { ...{
    ...we(),
    size: 300
  }, ...e };
}
const La = Gb();
class Qv {
  constructor(t = {}) {
    u(this, "size");
    u(this, "visible");
    Object.assign(this, La, t);
  }
}
const Kb = R({
  name: "BDrawer",
  extends: de,
  components: { BComponent: de },
  props: {
    size: {
      type: [Number, String],
      default: La.size
    },
    overlay: {
      type: Boolean,
      default: La.overlay
    }
  },
  data() {
    return {
      cssClass: "b-drawer"
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--overlay`]: this.overlay
        }
      ];
    },
    styles() {
      const e = this.size, t = {};
      return e && (t.width = isNaN(Number(e)) ? `${e}` : `${e}px`), t;
    }
  }
});
function Xb(e, t, n, s, a, i) {
  return m(), I("div", {
    class: H(e.classes)
  }, [
    W(ot, { name: "slide-left" }, {
      default: P(() => [
        e.stateVisible ? (m(), I("aside", {
          key: 0,
          class: "b-drawer__aside",
          style: Ye(e.styles)
        }, [
          L(e.$slots, "default")
        ], 4)) : M("", !0)
      ]),
      _: 3
    })
  ], 2);
}
const Jv = /* @__PURE__ */ F(Kb, [["render", Xb]]);
function Qb(e = {}) {
  return { ...{
    ...we(),
    model: {},
    errors: {},
    autoValidate: !0
  }, ...e };
}
const kt = Qb();
function Mn(e, t) {
  if (e.one !== void 0 && t === 1)
    return e.one;
  const n = t % 10, s = t % 100;
  return n === 1 && s !== 11 ? e.singularNominative.replace("{{count}}", String(t)) : n >= 2 && n <= 4 && (s < 10 || s > 20) ? e.singularGenitive.replace("{{count}}", String(t)) : e.pluralGenitive.replace("{{count}}", String(t));
}
function je(e) {
  return (t, n) => n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? e.future ? Mn(e.future, t) : "через " + Mn(e.regular, t) : e.past ? Mn(e.past, t) : Mn(e.regular, t) + " назад" : Mn(e.regular, t);
}
const Jb = {
  lessThanXSeconds: je({
    regular: {
      one: "меньше секунды",
      singularNominative: "меньше {{count}} секунды",
      singularGenitive: "меньше {{count}} секунд",
      pluralGenitive: "меньше {{count}} секунд"
    },
    future: {
      one: "меньше, чем через секунду",
      singularNominative: "меньше, чем через {{count}} секунду",
      singularGenitive: "меньше, чем через {{count}} секунды",
      pluralGenitive: "меньше, чем через {{count}} секунд"
    }
  }),
  xSeconds: je({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунды",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду назад",
      singularGenitive: "{{count}} секунды назад",
      pluralGenitive: "{{count}} секунд назад"
    },
    future: {
      singularNominative: "через {{count}} секунду",
      singularGenitive: "через {{count}} секунды",
      pluralGenitive: "через {{count}} секунд"
    }
  }),
  halfAMinute: (e, t) => t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "через полминуты" : "полминуты назад" : "полминуты",
  lessThanXMinutes: je({
    regular: {
      one: "меньше минуты",
      singularNominative: "меньше {{count}} минуты",
      singularGenitive: "меньше {{count}} минут",
      pluralGenitive: "меньше {{count}} минут"
    },
    future: {
      one: "меньше, чем через минуту",
      singularNominative: "меньше, чем через {{count}} минуту",
      singularGenitive: "меньше, чем через {{count}} минуты",
      pluralGenitive: "меньше, чем через {{count}} минут"
    }
  }),
  xMinutes: je({
    regular: {
      singularNominative: "{{count}} минута",
      singularGenitive: "{{count}} минуты",
      pluralGenitive: "{{count}} минут"
    },
    past: {
      singularNominative: "{{count}} минуту назад",
      singularGenitive: "{{count}} минуты назад",
      pluralGenitive: "{{count}} минут назад"
    },
    future: {
      singularNominative: "через {{count}} минуту",
      singularGenitive: "через {{count}} минуты",
      pluralGenitive: "через {{count}} минут"
    }
  }),
  aboutXHours: je({
    regular: {
      singularNominative: "около {{count}} часа",
      singularGenitive: "около {{count}} часов",
      pluralGenitive: "около {{count}} часов"
    },
    future: {
      singularNominative: "приблизительно через {{count}} час",
      singularGenitive: "приблизительно через {{count}} часа",
      pluralGenitive: "приблизительно через {{count}} часов"
    }
  }),
  xHours: je({
    regular: {
      singularNominative: "{{count}} час",
      singularGenitive: "{{count}} часа",
      pluralGenitive: "{{count}} часов"
    }
  }),
  xDays: je({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} дня",
      pluralGenitive: "{{count}} дней"
    }
  }),
  aboutXWeeks: je({
    regular: {
      singularNominative: "около {{count}} недели",
      singularGenitive: "около {{count}} недель",
      pluralGenitive: "около {{count}} недель"
    },
    future: {
      singularNominative: "приблизительно через {{count}} неделю",
      singularGenitive: "приблизительно через {{count}} недели",
      pluralGenitive: "приблизительно через {{count}} недель"
    }
  }),
  xWeeks: je({
    regular: {
      singularNominative: "{{count}} неделя",
      singularGenitive: "{{count}} недели",
      pluralGenitive: "{{count}} недель"
    }
  }),
  aboutXMonths: je({
    regular: {
      singularNominative: "около {{count}} месяца",
      singularGenitive: "около {{count}} месяцев",
      pluralGenitive: "около {{count}} месяцев"
    },
    future: {
      singularNominative: "приблизительно через {{count}} месяц",
      singularGenitive: "приблизительно через {{count}} месяца",
      pluralGenitive: "приблизительно через {{count}} месяцев"
    }
  }),
  xMonths: je({
    regular: {
      singularNominative: "{{count}} месяц",
      singularGenitive: "{{count}} месяца",
      pluralGenitive: "{{count}} месяцев"
    }
  }),
  aboutXYears: je({
    regular: {
      singularNominative: "около {{count}} года",
      singularGenitive: "около {{count}} лет",
      pluralGenitive: "около {{count}} лет"
    },
    future: {
      singularNominative: "приблизительно через {{count}} год",
      singularGenitive: "приблизительно через {{count}} года",
      pluralGenitive: "приблизительно через {{count}} лет"
    }
  }),
  xYears: je({
    regular: {
      singularNominative: "{{count}} год",
      singularGenitive: "{{count}} года",
      pluralGenitive: "{{count}} лет"
    }
  }),
  overXYears: je({
    regular: {
      singularNominative: "больше {{count}} года",
      singularGenitive: "больше {{count}} лет",
      pluralGenitive: "больше {{count}} лет"
    },
    future: {
      singularNominative: "больше, чем через {{count}} год",
      singularGenitive: "больше, чем через {{count}} года",
      pluralGenitive: "больше, чем через {{count}} лет"
    }
  }),
  almostXYears: je({
    regular: {
      singularNominative: "почти {{count}} год",
      singularGenitive: "почти {{count}} года",
      pluralGenitive: "почти {{count}} лет"
    },
    future: {
      singularNominative: "почти через {{count}} год",
      singularGenitive: "почти через {{count}} года",
      pluralGenitive: "почти через {{count}} лет"
    }
  })
}, Zb = (e, t, n) => Jb[e](t, n), ey = {
  full: "EEEE, d MMMM y 'г.'",
  long: "d MMMM y 'г.'",
  medium: "d MMM y 'г.'",
  short: "dd.MM.y"
}, ty = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, ny = {
  any: "{{date}}, {{time}}"
}, sy = {
  date: pn({
    formats: ey,
    defaultWidth: "full"
  }),
  time: pn({
    formats: ty,
    defaultWidth: "full"
  }),
  dateTime: pn({
    formats: ny,
    defaultWidth: "any"
  })
}, mi = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среду",
  "четверг",
  "пятницу",
  "субботу"
];
function ay(e) {
  const t = mi[e];
  switch (e) {
    case 0:
      return "'в прошлое " + t + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + t + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + t + " в' p";
  }
}
function pr(e) {
  const t = mi[e];
  return e === 2 ? "'во " + t + " в' p" : "'в " + t + " в' p";
}
function iy(e) {
  const t = mi[e];
  switch (e) {
    case 0:
      return "'в следующее " + t + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в следующий " + t + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в следующую " + t + " в' p";
  }
}
const ry = {
  lastWeek: (e, t, n) => {
    const s = e.getDay();
    return Di(e, t, n) ? pr(s) : ay(s);
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: (e, t, n) => {
    const s = e.getDay();
    return Di(e, t, n) ? pr(s) : iy(s);
  },
  other: "P"
}, oy = (e, t, n, s) => {
  const a = ry[e];
  return typeof a == "function" ? a(t, n, s) : a;
}, ly = {
  narrow: ["до н.э.", "н.э."],
  abbreviated: ["до н. э.", "н. э."],
  wide: ["до нашей эры", "нашей эры"]
}, uy = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
}, cy = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "март",
    "апр.",
    "май",
    "июнь",
    "июль",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
  ]
}, dy = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "мар.",
    "апр.",
    "мая",
    "июн.",
    "июл.",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ]
}, fy = {
  narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
  wide: [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ]
}, my = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утро",
    afternoon: "день",
    evening: "вечер",
    night: "ночь"
  }
}, hy = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утра",
    afternoon: "дня",
    evening: "вечера",
    night: "ночи"
  }
}, py = (e, t) => {
  const n = Number(e), s = t == null ? void 0 : t.unit;
  let a;
  return s === "date" ? a = "-е" : s === "week" || s === "minute" || s === "second" ? a = "-я" : a = "-й", n + a;
}, gy = {
  ordinalNumber: py,
  era: bt({
    values: ly,
    defaultWidth: "wide"
  }),
  quarter: bt({
    values: uy,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: bt({
    values: cy,
    defaultWidth: "wide",
    formattingValues: dy,
    defaultFormattingWidth: "wide"
  }),
  day: bt({
    values: fy,
    defaultWidth: "wide"
  }),
  dayPeriod: bt({
    values: my,
    defaultWidth: "any",
    formattingValues: hy,
    defaultFormattingWidth: "wide"
  })
}, by = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i, yy = /\d+/i, wy = {
  narrow: /^((до )?н\.?\s?э\.?)/i,
  abbreviated: /^((до )?н\.?\s?э\.?)/i,
  wide: /^(до нашей эры|нашей эры|наша эра)/i
}, vy = {
  any: [/^д/i, /^н/i]
}, Cy = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
  wide: /^[1234](-?[ыои]?й?)? квартал/i
}, Dy = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, _y = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
}, $y = {
  narrow: [
    /^я/i,
    /^ф/i,
    /^м/i,
    /^а/i,
    /^м/i,
    /^и/i,
    /^и/i,
    /^а/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^я/i
  ],
  any: [
    /^я/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^ма[йя]/i,
    /^июн/i,
    /^июл/i,
    /^ав/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i
  ]
}, Sy = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
}, Ey = {
  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
}, Iy = {
  narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
}, ky = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^полн/i,
    noon: /^полд/i,
    morning: /^у/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
}, Ty = {
  ordinalNumber: kr({
    matchPattern: by,
    parsePattern: yy,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: yt({
    matchPatterns: wy,
    defaultMatchWidth: "wide",
    parsePatterns: vy,
    defaultParseWidth: "any"
  }),
  quarter: yt({
    matchPatterns: Cy,
    defaultMatchWidth: "wide",
    parsePatterns: Dy,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: yt({
    matchPatterns: _y,
    defaultMatchWidth: "wide",
    parsePatterns: $y,
    defaultParseWidth: "any"
  }),
  day: yt({
    matchPatterns: Sy,
    defaultMatchWidth: "wide",
    parsePatterns: Ey,
    defaultParseWidth: "any"
  }),
  dayPeriod: yt({
    matchPatterns: Iy,
    defaultMatchWidth: "wide",
    parsePatterns: ky,
    defaultParseWidth: "any"
  })
}, Ay = {
  code: "ru",
  formatDistance: Zb,
  formatLong: sy,
  formatRelative: oy,
  localize: gy,
  match: Ty,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
function Ra(e) {
  return e === "" || e === void 0 || e === null;
}
function Ny(e, t) {
  let n = e || {}, s = {}, a = t || {};
  function i(b) {
    n = b;
  }
  function r(b) {
    a = b;
  }
  function o(b) {
    return Cr(n) ? Qt(n)[b] : n[b];
  }
  function l(b, d) {
    return Ra(b) ? d.message || re.global.t("validate.required") : null;
  }
  function c(b, d) {
    if (d.type !== "min") return null;
    if (typeof b == "string" || Array.isArray(b)) {
      if (b.length < d.value)
        return d.message || re.global.t("validate.min", { value: d.value });
    } else if (typeof b == "number" && b < d.value)
      return d.message || re.global.t("validate.minValue", { value: d.value });
    return null;
  }
  function h(b, d) {
    if (d.type !== "max") return null;
    if (typeof b == "string" || Array.isArray(b)) {
      if (b.length > d.value)
        return d.message || re.global.t("validate.max", { value: d.value });
    } else if (typeof b == "number" && b > d.value)
      return d.message || re.global.t("validate.maxValue", { value: d.value });
    return null;
  }
  function v(b, d) {
    return d.type !== "type" ? null : d.value === "string" && typeof b != "string" ? d.message || re.global.t("validate.type_string") : d.value === "number" && typeof b != "number" ? d.message || re.global.t("validate.type_number") : d.value === "boolean" && typeof b != "boolean" ? d.message || re.global.t("validate.type_boolean") : null;
  }
  function C(b, d) {
    if (d.type !== "function" || typeof d.validate != "function")
      return null;
    const _ = d.validate(b, n);
    return _ === !1 ? d.message || re.global.t("validate.invalid") : typeof _ == "string" && _ ? _ : null;
  }
  function w() {
    return Object.keys(s).length === 0;
  }
  function E(b, d = []) {
    if (!d || Array.isArray(d) && d.length === 0)
      return !0;
    if (!("on" in b) || b.on === void 0)
      return !1;
    const _ = Array.isArray(d) ? d : [d];
    return (Array.isArray(b.on) ? b.on : [b.on]).some((S) => _.includes(S));
  }
  function B(b, d = []) {
    if (delete s[b], !a) return !0;
    const _ = a[b];
    if (!_) return !0;
    const D = o(b);
    for (const S of _) {
      if (!E(S, d)) continue;
      let Y = null;
      const fe = {
        required: l,
        min: c,
        max: h,
        type: v,
        function: C
      }[S.type];
      if (Y = (fe == null ? void 0 : fe(D, S)) || null, Y)
        return s[b] = Y, !1;
    }
    return !0;
  }
  function k(b = []) {
    if (y(), !a) return !0;
    for (const d in a)
      B(d, b);
    return w();
  }
  function y() {
    s = {};
  }
  function g(b) {
    return b ? s[b] || "" : s;
  }
  return {
    errors: s,
    setModel: i,
    setRules: r,
    validate: k,
    validateField: B,
    getErrors: g,
    clear: y,
    isValid: w
  };
}
function Oy(e, t) {
  let n = e || {};
  const s = Ny(n, t);
  function a(g) {
    n = g, s.setModel(g);
  }
  function i() {
    return n;
  }
  function r(g) {
    s.setRules(g);
  }
  function o() {
    return Object.keys(n).length > 0;
  }
  function l(g) {
    return g in n;
  }
  function c(g, b) {
    return l(g) ? n[g] : b;
  }
  function h(g, b) {
    n[g] = b;
  }
  function v(g, b) {
    return Ra(g) && Ra(b) || (g === !0 || g === 1) && (b === !0 || b === 1) || (g === !1 || g === 0) && (b === !1 || b === 0) ? !0 : JSON.stringify(g) === JSON.stringify(b);
  }
  function C(g) {
    const b = [], d = Object.keys(n);
    for (const _ of d) {
      const D = c(_), S = g[_];
      v(D, S) || b.push(_);
    }
    return b;
  }
  function w(g) {
    return C(g).length === 0;
  }
  function E() {
    return s.validate();
  }
  function B(g, b = []) {
    return s.validateField(g, b);
  }
  function k(g, b = "change") {
    s.clear();
    const d = C(g);
    for (const _ of d)
      s.validateField(_, b);
    return s.isValid();
  }
  function y(g) {
    return s.getErrors(g);
  }
  return {
    model: n,
    hasModel: o,
    getModel: i,
    setModel: a,
    setRules: r,
    hasField: l,
    getValue: c,
    setValue: h,
    getChangedFields: C,
    compareValues: w,
    validate: E,
    validateField: B,
    validateChangedFields: k,
    getErrors: y
  };
}
const Py = R({
  name: "BForm",
  extends: de,
  emits: [
    "update:model",
    "update:modified",
    "update:errors",
    "update:complete",
    "update:invalidate",
    "update:disabled",
    "update:submitting",
    "submit",
    "submitting",
    "errors",
    "modified",
    "formComplete",
    "formInvalidate",
    "disabled"
  ],
  props: {
    modified: {
      type: Boolean,
      default: kt.modified
    },
    model: {
      type: Object,
      default: kt.model
    },
    errors: {
      type: Object,
      default: kt.errors
    },
    rules: {
      type: Object,
      default: kt.rules
    },
    disableEnterSubmit: {
      type: Boolean,
      default: kt.disableEnterSubmit
    },
    submitHidden: {
      type: Boolean,
      default: kt.submitHidden
    },
    complete: {
      type: Boolean,
      default: kt.complete
    },
    invalidate: {
      type: Boolean,
      default: kt.invalidate
    },
    autoValidate: {
      type: Boolean,
      default: kt.autoValidate
    }
  },
  data() {
    return {
      stateErrors: {},
      originalModel: {},
      form: Oy({}),
      stateModified: !!this.modified,
      stateDisabled: !1,
      stateSubmit: !1
    };
  },
  provide() {
    return {
      modified: et(() => this.stateModified),
      disabled: et(() => this.stateDisabled),
      submit: et(() => this.stateSubmit)
    };
  },
  watch: {
    model: {
      handler(e, t) {
        e !== t ? this.initModel(e) : (this.stateModified = !this.form.compareValues(this.originalModel), this.autoValidate && (this.form.validateChangedFields(this.originalModel) ? this.stateErrors = {} : this.stateErrors = this.form.getErrors()));
      },
      immediate: !0,
      deep: !0
    },
    modified(e) {
      this.stateModified = e;
    },
    stateSubmit(e) {
      this.$emit("submitting", e), this.$emit("update:submitting", e);
    },
    stateModified(e) {
      this.updateTitle(), this.$emit("update:modified", e), this.$emit("modified", e);
    },
    errors: {
      handler(e) {
        this.stateErrors = e;
      },
      immediate: !0,
      deep: !0
    },
    stateErrors(e) {
      this.$emit("errors", e), this.$emit("update:errors", e);
    },
    rules: {
      handler(e) {
        this.form.setRules(e);
      },
      immediate: !0
    },
    complete(e, t) {
      e !== t && (this.formComplete(), this.$emit("update:complete", e));
    },
    invalidate(e, t) {
      e !== t && (this.formInvalidate(this.stateErrors), this.$emit("update:invalidate", e));
    },
    stateDisabled(e) {
      this.$emit("update:disabled", e), this.$emit("disabled", e);
    }
  },
  methods: {
    /**
     * Initializes the form model and resets the state.
     * This method should be called when the form is first created or when the model changes.
     * @param model - The model to initialize the form with.
     */
    initModel(e) {
      this.stateDisabled = !1, this.stateSubmit = !1, this.stateModified = !1, this.form.setModel(e), this.updateTitle(), this.setOriginalModel(e);
    },
    /**
     * Sets the original model to the current state model.
     * This is used to track changes in the form.
     * @param model - The model to set as the original model.
     */
    setOriginalModel(e) {
      this.originalModel = JSON.parse(JSON.stringify(e));
    },
    /**
     * Updates the document title based on the modified state of the form.
     * If the form is modified, it prepends an asterisk to the title.
     */
    updateTitle() {
      const e = document.title.replace(/^\*\s*/, "").trim();
      document.title = this.stateModified ? `* ${e}` : e;
    },
    /**
     * Handles form submission.
     * Validates the form and emits the submit event with the model and errors.
     */
    submit() {
      if (this.stateModified) {
        if (this.autoValidate && !this.form.validate()) {
          this.stateErrors = this.form.getErrors();
          return;
        }
        this.stateErrors = {}, this.stateSubmit = !0, this.stateDisabled = !0, this.$emit("submit", {
          complete: this.formComplete,
          invalidate: this.formInvalidate,
          formModel: this.model,
          formErrors: this.stateErrors
        });
      }
    },
    /**
     * Prevents form submission on Enter key press for input fields
     * except for textarea elements.
     */
    onFormKeyDown(e) {
      this.disableEnterSubmit && e.key === "Enter" && e.target instanceof HTMLInputElement && e.target.type !== "textarea" && e.preventDefault();
    },
    /**
     * Handles changes in the model.
     * @param name - The name of the model field.
     * @param value - The new value for the model field.
     */
    updateModelField(e, t) {
      this.model[e] = t;
    },
    /**
     * Validates the entire form.
     * If the form is valid, resets the errors; otherwise, sets the errors.
     * @returns True if the form is valid, false otherwise.
     */
    validate() {
      return this.form.validate() ? this.stateErrors = {} : this.stateErrors = this.form.getErrors(), !this.stateErrors || Object.keys(this.stateErrors).length === 0;
    },
    /**
     * Validates a specific field in the form.
     * @param name - The name of the field to validate.
     * @param events - The event type that triggered the validation (default is 'change').
     * @returns True if the field is valid, false otherwise.
     */
    validateField(e, t = []) {
      return this.form.validateField(e, t) ? delete this.stateErrors[e] : this.stateErrors = {
        [e]: this.form.getErrors(e)
      }, !this.stateErrors[e];
    },
    /**
     * Retrieves the current validation errors.
     * @returns The current validation errors.
     */
    getErrors() {
      return this.stateErrors;
    },
    /**
     * Completes the form submission process.
     * Resets the state and emits the complete event with the model.
     */
    formComplete() {
      this.setOriginalModel(this.model), this.stateDisabled = !1, this.stateSubmit = !1, this.stateModified = !1, this.$emit("formComplete", this.model);
    },
    /**
     * Invalidates the form with the provided validation errors.
     * Resets the state and emits the invalidate event with the errors.
     * @param errors - The validation errors to set.
     */
    formInvalidate(e) {
      this.stateErrors = e || {}, this.stateDisabled = !1, this.stateSubmit = !1, this.$emit("formInvalidate", this.stateErrors);
    }
  }
}), My = ["disabled"];
function By(e, t, n, s, a, i) {
  return m(), I("form", {
    class: "form-element-wrapper",
    onSubmit: t[0] || (t[0] = _r((...r) => e.submit && e.submit(...r), ["prevent"])),
    onKeydown: t[1] || (t[1] = (...r) => e.onFormKeyDown && e.onFormKeyDown(...r))
  }, [
    L(e.$slots, "default", {
      form: e.form,
      formModel: e.model,
      formErrors: e.stateErrors,
      formModified: e.stateModified,
      formDisabled: e.stateDisabled,
      formSubmit: e.stateSubmit,
      formUpdateModelField: e.updateModelField,
      formValidateField: e.validateField
    }),
    e.submitHidden ? (m(), I("input", {
      key: 0,
      type: "submit",
      class: "hidden",
      disabled: e.stateDisabled || !e.stateModified
    }, null, 8, My)) : M("", !0)
  ], 32);
}
const Zv = /* @__PURE__ */ F(Py, [["render", By]]);
function Ly(e = {}) {
  return we(), { ...{}, ...e };
}
const eC = Ly(), Ry = R({
  name: "BFormItem",
  extends: de
}), Vy = { class: "form-item" };
function Fy(e, t, n, s, a, i) {
  return m(), I("div", Vy, [
    L(e.$slots, "default")
  ]);
}
const tC = /* @__PURE__ */ F(Ry, [["render", Fy]]);
function Wy(e = {}) {
  return { ...{
    ...we(),
    invalid: !1,
    state: "normal",
    stateTexts: {
      normal: "",
      success: "",
      error: "",
      warning: ""
    }
  }, ...e };
}
const ws = Wy();
class nC {
  constructor(t = {}) {
    u(this, "invalid");
    u(this, "state");
    u(this, "stateTexts");
    u(this, "visible");
    this.state = "normal", Object.assign(this, ws, t);
  }
}
const Uy = R({
  name: "BHelperText",
  extends: _t,
  props: {
    invalid: {
      type: Boolean,
      default: ws.invalid
    },
    state: {
      type: String,
      default: ws.state
    },
    stateTexts: {
      type: Object,
      default: ws.stateTexts
    }
  },
  data() {
    return {
      cssClass: "b-helper-text",
      stateState: this.state,
      stateInvalid: this.invalid,
      stateName: this.$attrs.name
    };
  },
  inject: {
    // We accept the value from Form and transmit to Name
    injectName: {
      from: "name",
      default: void 0
    }
  },
  computed: {
    classes() {
      return [this.cssClass, `b-helper-text--${this.stateState}`];
    },
    displayText() {
      var e;
      return (((e = this.stateTexts) == null ? void 0 : e[this.stateState]) ?? "") || this.text;
    }
  },
  watch: {
    state: {
      immediate: !0,
      handler(e) {
        this.stateState = e;
      }
    },
    invalid(e) {
      this.stateInvalid = e;
    },
    stateInvalid(e) {
      this.stateState = e ? "error" : "normal";
    },
    // The name from Formitem is transmitted
    injectName: {
      immediate: !0,
      handler(e) {
        this.stateName = e;
      }
    }
  }
});
function xy(e, t, n, s, a, i) {
  return m(), N(ot, { name: "slide-up-down" }, {
    default: P(() => [
      e.visible ? (m(), I("div", {
        key: 0,
        class: H(e.classes)
      }, X(e.displayText), 3)) : M("", !0)
    ]),
    _: 1
  });
}
const sC = /* @__PURE__ */ F(Uy, [["render", xy]]);
function Hy(e = {}) {
  return { ...{
    ...we(),
    align: "top",
    required: !1,
    placementRequired: "left"
  }, ...e };
}
const Vn = Hy();
class aC {
  constructor(t = {}) {
    u(this, "text");
    u(this, "align");
    u(this, "required");
    u(this, "placementRequired");
    Object.assign(this, Vn, t);
  }
}
const Yy = R({
  name: "BLabel",
  extends: de,
  props: {
    text: {
      type: String,
      default: Vn.text
    },
    align: {
      type: String,
      default: Vn.align
    },
    required: {
      type: Boolean,
      default: Vn.required
    },
    placementRequired: {
      type: String,
      default: Vn.placementRequired
    }
  },
  data() {
    return {
      cssClass: "b-label",
      inputId: ""
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        `b-label--${this.align}`,
        {
          "b-label--use-input": this.inputId.length > 0
        }
      ];
    }
  },
  mounted() {
    var e, t;
    this.inputId = (t = (e = this == null ? void 0 : this.$el) == null ? void 0 : e.querySelector("input")) == null ? void 0 : t.id;
  }
}), zy = ["for"], jy = {
  key: 0,
  class: "required"
}, qy = { class: "text" }, Gy = {
  key: 1,
  class: "required required--right"
}, Ky = { class: "b-label__container" };
function Xy(e, t, n, s, a, i) {
  return m(), I("div", {
    class: H(e.classes)
  }, [
    L(e.$slots, "text", {}, () => [
      e.text ? (m(), I("label", {
        key: 0,
        class: "b-label__text",
        for: e.inputId
      }, [
        e.required && e.placementRequired === "left" ? (m(), I("span", jy, "*")) : M("", !0),
        U("span", qy, X(e.text), 1),
        e.required && e.placementRequired === "right" ? (m(), I("span", Gy, "*")) : M("", !0)
      ], 8, zy)) : M("", !0)
    ]),
    U("div", Ky, [
      L(e.$slots, "default")
    ])
  ], 2);
}
const iC = /* @__PURE__ */ F(Yy, [["render", Xy]]);
function Qy(e = {}) {
  return { ...{
    ...we(),
    type: ge.Primary,
    visible: !1
  }, ...e };
}
const Jy = Qy();
let ms = null;
function gr() {
  if (ms)
    return ms;
  let e = at(!1), t = at(!1), n = at(null), s = () => {
  }, a = () => {
  }, i = () => {
  };
  return ms = {
    begin: e,
    end: t,
    variantType: n,
    start: (w = ge.Primary) => {
      e.value = !0, t.value = !1, n.value = w, s();
    },
    finish: (w) => {
      e.value = !1, t.value = !0, w && (n.value = w), a();
    },
    error: () => {
      e.value = !1, t.value = !0, n.value = ge.Danger, a();
    },
    reset: () => {
      e.value = !1, t.value = !1, i();
    },
    onAttachStart: (w) => {
      s = w;
    },
    onAttachFinish: (w) => {
      a = w;
    },
    onAttachReset: (w) => {
      i = w;
    }
  }, ms;
}
const Zy = R({
  name: "BLoadingBar",
  extends: de,
  props: {
    type: {
      type: String,
      default: Jy.type
    }
  },
  data() {
    return {
      cssClass: "b-loading-bar",
      stateType: this.type
    };
  },
  computed: {
    classes() {
      return [this.cssClass, `${this.cssClass}--${this.stateType}`];
    },
    progressClasses() {
      const { begin: e, end: t } = gr();
      return [
        "b-loading-bar__progress",
        {
          [`${this.cssClass}__progress--begin`]: e.value,
          [`${this.cssClass}__progress--end`]: t.value
        }
      ];
    }
  },
  watch: {
    type(e) {
      this.stateType = e;
    }
  },
  methods: {},
  mounted() {
    const { onAttachFinish: e, reset: t, variantType: n } = gr();
    e(() => {
      const s = this.$refs.refProgress;
      if (!s) return;
      const a = (i) => {
        i.propertyName === "width" && (t(), s.removeEventListener("transitionend", a));
      };
      s.addEventListener("transitionend", a);
    }), this.$watch(
      () => n.value,
      (s) => {
        this.stateType = s;
      }
    );
  }
});
function ew(e, t, n, s, a, i) {
  return m(), N(Xn, { to: "body" }, [
    e.isHidden ? (m(), I("div", {
      key: 0,
      class: H(e.classes),
      ref: "refProgress"
    }, [
      U("div", {
        class: H(e.progressClasses)
      }, null, 2)
    ], 2)) : M("", !0)
  ]);
}
const rC = /* @__PURE__ */ F(Zy, [["render", ew]]);
function tw(e = {}) {
  return { ...{
    ...Os(),
    asHeader: !1,
    asCollapse: !0,
    level: 0
  }, ...e };
}
const Bn = tw();
function nw(e = {}) {
  return { ...{
    items: void 0
  }, ...e };
}
const Va = nw();
class oC {
  constructor(t = {}) {
    u(this, "items");
    Object.assign(this, Va, t);
  }
}
const sw = R({
  name: "BMenuSub",
  emits: ["click"],
  props: {
    items: {
      type: Array,
      default: Va.items
    },
    level: {
      type: Number,
      default: Va.level
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
}), aw = {
  class: "b-menu-sub__list",
  role: "menu",
  tabindex: "0"
};
function iw(e, t, n, s, a, i) {
  const r = T("b-menu-item");
  return m(), I("ul", aw, [
    (m(!0), I(ce, null, ye(e.items, (o) => (m(), N(r, G({
      key: o.value,
      ref_for: !0
    }, o, {
      readonly: o.asHeader,
      level: e.level,
      onClick: e.onClick
    }), {
      "item-icon": P(({ item: l }) => [
        L(e.$slots, "item-icon", { item: l })
      ]),
      item: P(({ item: l }) => [
        L(e.$slots, "item", { item: l })
      ]),
      _: 2
    }, 1040, ["readonly", "level", "onClick"]))), 128))
  ]);
}
const rw = /* @__PURE__ */ F(sw, [["render", iw]]), ow = R({
  name: "BMenuItem",
  extends: Ga,
  emits: ["click"],
  components: { BListBoxItem: Oo, BCollapseItem: Kr, BMenuSub: rw },
  props: {
    asCollapse: {
      type: Boolean,
      default: Bn.asCollapse
    },
    asHeader: {
      type: Boolean,
      default: Bn.asHeader
    },
    // to: {
    //     type: String as PropType<IMenuItemAttributes['to']>,
    //     default: defaultAttributes.to
    // },
    items: {
      type: Array,
      default: Bn.items
    },
    level: {
      type: Number,
      default: Bn.level
    },
    expanded: {
      type: Boolean,
      default: Bn.expanded
    }
  },
  computed: {
    classes() {
      return [
        ...qr.computed.classes.call(this),
        {
          [`${this.cssClass}--header`]: this.asHeader,
          [`${this.cssClass}--expanded`]: !this.asCollapse
          // [`${this.cssClass}--to`]: !!this.to
        }
      ];
    },
    styles() {
      return {
        paddingLeft: this.level ? "1.5rem" : "0"
      };
    }
  },
  created() {
    this.cssClass = "b-menu__item";
  }
});
function lw(e, t, n, s, a, i) {
  const r = T("b-list-box-item"), o = T("b-menu-sub"), l = T("b-collapse-item");
  return m(), I("li", {
    class: H(e.classes),
    style: Ye(e.styles),
    role: "menuitem",
    tabindex: "0"
  }, [
    e.items ? (m(), N(l, {
      key: 1,
      component: "div",
      selected: !e.asCollapse || e.expanded,
      readonly: e.asHeader && !e.asCollapse,
      text: e.text,
      value: e.value,
      icon: e.icon,
      disabled: e.disabled,
      toggleable: ""
    }, {
      default: P(() => [
        W(o, {
          items: e.items,
          level: e.level + 1,
          onClick: t[1] || (t[1] = (c) => e.$emit("click", c))
        }, {
          "item-icon": P(({ item: c }) => [
            L(e.$slots, "item-icon", { item: c })
          ]),
          item: P(({ item: c }) => [
            L(e.$slots, "item", { item: c })
          ]),
          _: 3
        }, 8, ["items", "level"])
      ]),
      _: 3
    }, 8, ["selected", "readonly", "text", "value", "icon", "disabled"])) : (m(), N(r, {
      key: 0,
      component: "div",
      text: e.text,
      value: e.value,
      icon: e.icon,
      disabled: e.disabled,
      selected: e.selected,
      readonly: e.readonly,
      meta: e.meta,
      onPropClick: e.onPropClick,
      onPropSelected: e.onPropSelected,
      onClick: t[0] || (t[0] = (c) => e.$emit("click", c))
    }, {
      "item-icon": P(({ item: c }) => [
        L(e.$slots, "item-icon", { item: c })
      ]),
      default: P(({ item: c }) => [
        L(e.$slots, "item", { item: c })
      ]),
      _: 3
    }, 8, ["text", "value", "icon", "disabled", "selected", "readonly", "meta", "onPropClick", "onPropSelected"]))
  ], 6);
}
const uw = /* @__PURE__ */ F(ow, [["render", lw]]);
function cw(e = {}) {
  return { ...{
    ...Ps()
  }, ...e };
}
const dw = cw();
class lC {
  constructor(t = {}) {
    u(this, "disabled");
    u(this, "items");
    u(this, "selected");
    u(this, "multiple");
    u(this, "visible");
    u(this, "text");
    u(this, "onSelectedItem");
    u(this, "onSelectedItems");
    this.items = [], Object.assign(this, dw, t);
  }
}
const fw = R({
  name: "BMenu",
  extends: Xa,
  components: {
    BCollection: _n,
    BMenuItem: uw
  },
  data() {
    return {
      cssClass: "b-menu"
    };
  },
  methods: {
    /**
     * override init items method to collect all items
     */
    initItems() {
      const e = (t) => t.map((n) => {
        const s = n.value || Ka();
        return {
          ...n,
          value: s,
          items: n.items ? e(n.items) : void 0
        };
      });
      return this.items ? e(this.items) : void 0;
    },
    initSelected() {
      const e = (t) => t.reduce((n, s) => (s.selected && n.push(s), s.items && n.push(...e(s.items)), n), []);
      return this.stateItems ? e(this.stateItems) : [];
    },
    /**
     * override method to get item by value. Recursive menu search
     */
    getItemByValue(e) {
      const t = (n) => n.reduce((s, a) => {
        if (s) return s;
        if (a.value === e && !a.readonly && !a.disabled && !a.items)
          return a;
        if (a.items) return t(a.items);
      }, void 0);
      return t(this.stateItems);
    },
    /**
     * Expanded all items in the menu
     * @param this
     * @param items - items to expand or collapse, default is all items in the menu
     */
    expanded(e = this.stateItems) {
      e.forEach((t) => {
        t.items && (!t.asCollapse && !t.expanded && (t.expanded = !0), this.expanded(t.items));
      });
    },
    /**
     * Collapse all items in the menu
     * @param this
     * @param items - items to collapse, default is all items in the menu
     */
    collapsed(e = this.stateItems) {
      e.forEach((t) => {
        t.items && (!t.asCollapse && t.expanded && (t.expanded = !1), this.collapsed(t.items));
      });
    },
    /**
     * Expand all items in the menu to the selected item
     * @param this
     * @param items - items to expand, default is all items in the menu
     */
    expandToSelected(e = this.stateItems) {
      let t = !1;
      return e.forEach((n) => {
        let s = !1;
        n.items && (s = this.expandToSelected(n.items)), n.selected || s ? (!n.asCollapse && !n.expanded && (n.expanded = !0), t = !0) : !n.asCollapse && n.expanded && (n.expanded = !1);
      }), t;
    }
  },
  created() {
    this.cssClass = "b-menu";
  }
}), mw = {
  class: "b-menu__list",
  role: "menu",
  tabindex: "0"
};
function hw(e, t, n, s, a, i) {
  const r = T("b-menu-item");
  return m(), I("div", {
    class: H(e.classes)
  }, [
    U("ul", mw, [
      (m(!0), I(ce, null, ye(e.stateItems, (o) => (m(), N(r, G({
        key: o.value,
        ref_for: !0
      }, o, {
        readonly: o.asHeader,
        onClick: e.onClickItem
      }), {
        "item-icon": P(({ item: l }) => [
          L(e.$slots, "item-icon", { item: l })
        ]),
        item: P(({ item: l }) => [
          L(e.$slots, "item", { item: l })
        ]),
        _: 2
      }, 1040, ["readonly", "onClick"]))), 128))
    ])
  ], 2);
}
const uC = /* @__PURE__ */ F(fw, [["render", hw]]);
function Lo(e = {}) {
  return { ...{
    ...we(),
    value: 0,
    max: 100,
    showValue: !0,
    mode: "normal",
    type: ge.Primary,
    unit: "%",
    bgSimilar: !1
  }, ...e };
}
const Wt = Lo();
class cC {
  constructor(t = {}) {
    u(this, "value");
    u(this, "max");
    u(this, "showValue");
    u(this, "mode");
    u(this, "type");
    u(this, "unit");
    u(this, "bgSimilar");
    Object.assign(this, Wt, t);
  }
}
const pw = R({
  name: "BProgressBar",
  extends: de,
  props: {
    value: {
      type: Number,
      default: Wt.value
    },
    showValue: {
      type: Boolean,
      default: Wt.showValue
    },
    max: {
      type: Number,
      default: Wt.max
    },
    mode: {
      type: String,
      default: Wt.mode
    },
    type: {
      type: String,
      default: Wt.type
    },
    unit: {
      type: String,
      default: Wt.unit
    },
    bgSimilar: {
      type: Boolean,
      default: Wt.bgSimilar
    }
  },
  data() {
    return {
      cssClass: "b-progress-bar"
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`b-progress-bar--${this.mode}`]: this.mode !== "normal",
          [`b-progress-bar--${this.type}`]: !!this.type,
          "b-progress-bar--bg-similar": !!this.bgSimilar
        }
      ];
    },
    stylesProgress() {
      return this.mode === "normal" ? `width: ${this.value}%` : "";
    }
  }
}), gw = ["aria-valuemin", "aria-valuemax", "aria-valuenow"], bw = {
  key: 0,
  class: "b-progress-bar__progress--label"
};
function yw(e, t, n, s, a, i) {
  return m(), I("div", {
    class: H(e.classes),
    "aria-valuemin": e.value,
    "aria-valuemax": e.max,
    "aria-valuenow": e.value
  }, [
    L(e.$slots, "progress", {}, () => [
      U("div", {
        class: "b-progress-bar__progress",
        style: Ye(e.stylesProgress)
      }, [
        e.showValue && e.mode === "normal" ? (m(), I("div", bw, [
          L(e.$slots, "default", {}, () => [
            Be(X(e.value) + X(e.unit), 1)
          ])
        ])) : M("", !0)
      ], 4)
    ])
  ], 10, gw);
}
const br = /* @__PURE__ */ F(pw, [["render", yw]]);
function ww(e = {}) {
  return { ...{
    ...Lo(),
    size: 125,
    strokeWidth: 10
  }, ...e };
}
const Fa = ww();
class dC {
  constructor(t = {}) {
    u(this, "value");
    u(this, "max");
    u(this, "showValue");
    u(this, "mode");
    u(this, "type");
    u(this, "unit");
    u(this, "size");
    u(this, "strokeWidth");
    Object.assign(this, Fa, t);
  }
}
const vw = R({
  name: "BProgressBarCircular",
  extends: br,
  components: {
    BProgressBar: br
  },
  props: {
    size: {
      type: Number,
      default: Fa.size
    },
    strokeWidth: {
      type: Number,
      default: Fa.strokeWidth
    }
  },
  data() {
    return {
      cssClass: "b-progress-bar-circular"
    };
  },
  computed: {
    styles() {
      return `height: ${this.size}px; width: ${this.size}px`;
    },
    viewBox() {
      return `0 0 ${this.size} ${this.size}`;
    },
    halfSize() {
      return this.size / 2;
    },
    radius() {
      return this.halfSize - this.strokeWidth;
    },
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    dash() {
      return this.circumference * ((100 - this.value) / 100);
    }
  }
}), Cw = ["width", "height", "viewBox"], Dw = ["r", "cx", "cy", "stroke-width"], _w = ["r", "cx", "cy", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], $w = {
  key: 0,
  class: "b-progress-bar__progress--label"
};
function Sw(e, t, n, s, a, i) {
  const r = T("b-progress-bar");
  return m(), N(r, {
    class: "b-progress-bar--circular",
    value: e.value,
    "show-value": e.showValue,
    max: e.max,
    mode: e.mode,
    type: e.type,
    unit: e.unit,
    style: Ye(e.styles)
  }, {
    progress: P(() => [
      (m(), I("svg", {
        width: e.size,
        height: e.size,
        viewBox: e.viewBox
      }, [
        U("circle", {
          class: "bg",
          r: e.radius,
          cx: e.halfSize,
          cy: e.halfSize,
          fill: "transparent",
          "stroke-width": e.strokeWidth
        }, null, 8, Dw),
        U("circle", {
          class: "fg",
          r: e.radius,
          cx: e.halfSize,
          cy: e.halfSize,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-width": e.strokeWidth,
          "stroke-dasharray": e.circumference,
          "stroke-dashoffset": e.dash
        }, null, 8, _w)
      ], 8, Cw)),
      e.showValue ? (m(), I("div", $w, [
        L(e.$slots, "default", {}, () => [
          Be(X(e.value) + X(e.unit), 1)
        ])
      ])) : M("", !0)
    ]),
    _: 3
  }, 8, ["value", "show-value", "max", "mode", "type", "unit", "style"]);
}
const fC = /* @__PURE__ */ F(vw, [["render", Sw]]);
function Ew(e = {}) {
  return { ...{
    ...we()
    // items: []
  }, ...e };
}
const Iw = Ew();
class mC {
  // items?: IToastItemAttributes[]
  constructor(t = {}) {
    Object.assign(this, Iw, t);
  }
}
let pa = 0;
const hs = at([]), kw = 4500;
let ps = null;
function Tw() {
  if (ps)
    return ps;
  const e = ({
    header: o,
    text: l,
    type: c,
    timeout: h = kw,
    icon: v = !0,
    closable: C = !0
  }) => {
    pa++;
    const w = pa;
    hs.value.push({ id: String(pa), header: o, text: l, type: c, icon: v, closable: C }), setTimeout(() => {
      t(w);
    }, h);
  }, t = (o) => {
    hs.value = hs.value.filter((l) => l.id !== String(o));
  };
  return ps = { add: e, remove: t, error: (o, l) => {
    e({ header: l, text: o, type: ge.Danger });
  }, success: (o, l) => {
    e({ header: l, text: o, type: ge.Success });
  }, info: (o, l) => {
    e({ header: l, text: o, type: ge.Primary });
  }, warning: (o, l) => {
    e({ header: l, text: o, type: ge.Warning });
  }, message: (o, l) => {
    e({ header: l, text: o, type: ge.Secondary });
  }, items: hs }, ps;
}
function Aw(e = {}) {
  return { ...{
    ...Cn(),
    type: ge.Primary,
    icon: !0,
    closable: !0,
    datetime: (/* @__PURE__ */ new Date()).toISOString()
  }, ...e };
}
const Fn = Aw();
class hC {
  constructor(t = {}) {
    u(this, "header");
    u(this, "type");
    u(this, "icon");
    u(this, "closable");
    u(this, "datetime");
    u(this, "text");
    u(this, "visible");
    Object.assign(this, Fn, t);
  }
}
const Nw = j(
  q(() => import("./error_circle-CDe4rl39.js"))
), Ow = j(
  q(() => import("./info_circle-BG05LnfA.js"))
), Pw = j(
  q(() => import("./warn_circle-DfeyrUXl.js"))
), Mw = j(
  q(() => import("./check_circle-DDxXqkce.js"))
), Bw = j(q(() => import("./close-Bn8_ySvr.js"))), Lw = R({
  name: "BToastItem",
  extends: _t,
  components: {
    BButton: ze,
    BIcon: Ae
  },
  IconDanger: Nw,
  IconInfo: Ow,
  IconWarning: Pw,
  IconSuccess: Mw,
  IconClose: Bw,
  emits: ["hide"],
  props: {
    header: {
      type: String,
      default: Fn.header
    },
    type: {
      type: String,
      default: Fn.type
    },
    icon: {
      type: Boolean,
      default: Fn.icon
    },
    closable: {
      type: Boolean,
      default: Fn.closable
    }
  },
  data() {
    return {
      cssClass: "b-toast-item",
      datetime: Br(/* @__PURE__ */ new Date(), "dd.MM.yyyy HH:mm:ss", { locale: Ay }),
      icons: {
        [ge.Danger]: "IconDanger",
        [ge.Primary]: "IconInfo",
        [ge.Warning]: "IconWarning",
        [ge.Success]: "IconSuccess",
        [ge.Secondary]: ""
      }
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--${this.type}`]: !!this.type
        }
      ];
    }
  },
  methods: {
    onHide() {
      this.$emit("hide", this.id);
    }
  }
}), Rw = {
  key: 0,
  class: "b-toast-item__icon"
}, Vw = { key: 0 }, Fw = { class: "b-toast-item__content--text" }, Ww = {
  key: 1,
  class: "b-toast-item__close"
};
function Uw(e, t, n, s, a, i) {
  const r = T("BIcon"), o = T("BButton");
  return e.visible ? (m(), I("output", {
    key: 0,
    class: H(e.classes)
  }, [
    t[0] || (t[0] = U("div", { class: "b-toast-item__border" }, null, -1)),
    e.type && e.icons[e.type] && e.icon ? (m(), I("div", Rw, [
      W(r, {
        icon: e.$options[e.icons[e.type]],
        size: "1.4em"
      }, null, 8, ["icon"])
    ])) : M("", !0),
    U("div", {
      class: H(["b-toast-item__content", { "ml-1": !e.icons[e.type] }])
    }, [
      e.header ? (m(), I("header", Vw, X(e.header), 1)) : M("", !0),
      U("div", Fw, [
        L(e.$slots, "default", {}, () => [
          Be(X(e.text), 1)
        ])
      ]),
      U("footer", null, [
        U("time", null, X(e.datetime), 1)
      ])
    ], 2),
    e.closable ? (m(), I("div", Ww, [
      W(o, {
        simple: "",
        icon: e.$options.IconClose,
        onClick: e.onHide
      }, null, 8, ["icon", "onClick"])
    ])) : M("", !0)
  ], 2)) : M("", !0);
}
const xw = /* @__PURE__ */ F(Lw, [["render", Uw]]), Hw = R({
  name: "BToast",
  extends: de,
  components: {
    BToastItem: xw
  },
  setup() {
    const { items: e, remove: t } = Tw();
    return {
      notifications: e,
      remove: t,
      onHideItem: (s) => {
        t(Number(s));
      }
    };
  }
}), Yw = { class: "b-toast" };
function zw(e, t, n, s, a, i) {
  const r = T("BToastItem");
  return m(), N(Xn, { to: "body" }, [
    U("div", Yw, [
      W(Dr, { name: "toast-items" }, {
        default: P(() => [
          (m(!0), I(ce, null, ye(e.notifications, (o) => (m(), N(r, G({
            key: o.id,
            ref_for: !0
          }, o, { onHide: e.onHideItem }), null, 16, ["onHide"]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const pC = /* @__PURE__ */ F(Hw, [["render", zw]]);
function jw(e = {}) {
  return { ...{
    ...lt(),
    text: ""
  }, ...e };
}
const ga = jw(), qw = R({
  name: "BTab",
  extends: We,
  components: {
    BIcon: Ae
  },
  props: {
    text: {
      type: [String, Object, Function],
      default: ga.text
    },
    active: {
      type: Boolean,
      default: ga.active
    },
    icon: {
      type: [String, Object],
      default: ga.icon
    }
  },
  data() {
    return {
      cssClass: "b-tab",
      stateActive: this.active,
      iconProps: null
    };
  },
  inject: {
    injectOnTabClick: {
      from: "onTabClick",
      default: null
    },
    injectSetActive: {
      from: "setActive",
      default: null
    },
    injectActiveValue: {
      from: "activeValue",
      default: null
    },
    injectDisabled: {
      from: "disabledTabs",
      default: null
    },
    injectSetUnderlineStyle: {
      from: "setUnderlineStyle",
      default: null
    }
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--active`]: !!this.stateActive,
          [`${this.cssClass}--disabled`]: !!this.stateDisabled
        }
      ];
    },
    itemComponent() {
      const e = typeof this.text;
      return e === "object" || e === "function" ? this.text : "li";
    }
  },
  watch: {
    active(e) {
      this.stateActive = e;
    },
    injectActiveValue: {
      immediate: !0,
      deep: !0,
      handler(e) {
        this.stateActive = e === this.value;
      }
    },
    injectDisabled: {
      immediate: !0,
      handler(e) {
        var t;
        this.stateDisabled = !!e || this.disabled, this.active && typeof this.injectSetUnderlineStyle == "function" && ((t = this.injectSetUnderlineStyle) == null || t.call(this, this));
      }
    },
    icon: {
      immediate: !0,
      handler(e) {
        this.iconProps = $t(e) || null;
      }
    }
  },
  methods: {
    onClick(e) {
      if (this.stateDisabled) {
        e.preventDefault();
        return;
      }
      typeof this.injectOnTabClick == "function" && this.injectOnTabClick({
        event: e,
        value: this.value,
        tab: this
      });
    }
  },
  mounted() {
    this.active && typeof this.injectSetActive == "function" && this.injectSetActive({
      value: this.value,
      tab: this
    });
  }
}), Gw = { class: "b-tab__title" };
function Kw(e, t, n, s, a, i) {
  const r = T("BIcon");
  return e.isHidden ? Ke((m(), N(it(e.itemComponent), G({ key: 0 }, e.$attrs, {
    class: e.classes,
    role: "tab",
    "aria-selected": e.active,
    "tab-index": e.active ? 0 : -1,
    onClick: e.onClick
  }), {
    default: P(() => [
      L(e.$slots, "tab-icon", {
        item: { text: e.text, icon: e.iconProps }
      }, () => [
        e.icon ? (m(), N(r, rt(G({ key: 0 }, e.iconProps)), null, 16)) : M("", !0)
      ]),
      U("span", Gw, [
        L(e.$slots, "tab", {
          item: { text: e.text, active: e.active, icon: e.iconProps }
        }, () => [
          Be(X(e.text), 1)
        ])
      ])
    ]),
    _: 3
  }, 16, ["class", "aria-selected", "tab-index", "onClick"])), [
    [nt, e.isVisibility]
  ]) : M("", !0);
}
const Xw = /* @__PURE__ */ F(qw, [["render", Kw]]);
function Qw(e = {}) {
  return { ...{
    ...lt(),
    visible: !1
  }, ...e };
}
const yr = Qw(), Jw = R({
  name: "BTabPanel",
  extends: We,
  props: {
    content: {
      type: [String, Number, Boolean, Object],
      default: yr.content
    },
    visible: {
      type: Boolean,
      default: yr.visible
    }
  },
  inject: {
    injectActiveValue: {
      from: "activeValue",
      default: null
    }
  },
  watch: {
    injectActiveValue(e) {
      this.stateVisible = this.value === e;
    }
  }
}), Zw = ["tabindex"];
function ev(e, t, n, s, a, i) {
  return e.isHidden ? Ke((m(), I("div", {
    key: 0,
    class: "b-tab-panel",
    role: "tabpanel",
    tabindex: e.stateVisible ? 0 : -1
  }, [
    L(e.$slots, "default", {}, () => [
      Be(X(e.content), 1)
    ])
  ], 8, Zw)), [
    [nt, e.isVisibility]
  ]) : M("", !0);
}
const tv = /* @__PURE__ */ F(Jw, [["render", ev]]);
function nv(e = {}) {
  return { ...{
    ...Zn(),
    items: [],
    selected: void 0
  }, ...e };
}
const wr = nv(), sv = R({
  name: "BTabs",
  extends: _n,
  components: {
    BTabPanel: tv,
    BTab: Xw
  },
  emits: ["update:selected", "tab-click", "selected"],
  props: {
    items: {
      type: Array,
      default: wr.items
    },
    selected: {
      type: [Number, String],
      default: wr.selected
    }
  },
  data() {
    return {
      underlineStyle: {
        left: "0px",
        width: "0px",
        opacity: 1
      },
      stateSelected: this.selected
    };
  },
  provide() {
    return {
      onTabClick: this.onTabClick,
      setActive: this.setActive,
      activeValue: et(() => this.stateSelected),
      disabledTabs: et(() => this.stateDisabled),
      setUnderlineStyle: this.setUnderlineStyle
    };
  },
  watch: {
    selected(e) {
      this.stateSelected = e;
    }
  },
  methods: {
    setUnderlineStyle(e) {
      const t = e.$el;
      if (this.underlineStyle = {
        left: "0px",
        width: "0px",
        opacity: 1
      }, t) {
        const n = t;
        n && (this.underlineStyle = {
          left: n.offsetLeft + "px",
          width: n.offsetWidth + "px",
          opacity: e.stateDisabled ? 0.3 : 1
        });
      }
    },
    onTabClick({
      event: e,
      value: t,
      tab: n
    }) {
      this.setActive({ value: t, tab: n }), this.$emit("tab-click", { event: e, value: t, tab: n });
    },
    setActive({
      value: e,
      tab: t
    }) {
      this.setUnderlineStyle(t), this.stateSelected = e, this.$emit("update:selected", e), this.$emit("selected", { tab: t, value: e });
    }
  }
}), av = { class: "b-tabs" }, iv = { class: "b-tabs__list" }, rv = { class: "b-tabs__content" };
function ov(e, t, n, s, a, i) {
  const r = T("b-tab"), o = T("b-tab-panel");
  return m(), I("div", av, [
    U("div", {
      class: "b-tabs__header",
      style: Ye({
        "--underline-left": e.underlineStyle.left,
        "--underline-width": e.underlineStyle.width,
        "--underline-opacity": e.underlineStyle.opacity
      })
    }, [
      U("ul", iv, [
        L(e.$slots, "tabs-header", {}, () => [
          (m(!0), I(ce, null, ye(e.items, (l, c) => (m(), N(r, {
            key: c,
            text: l.text,
            icon: l.icon,
            value: l.value,
            active: l.active,
            disabled: l.disabled || e.disabled,
            class: "b-tab",
            ref_for: !0,
            ref: "refTabs"
          }, {
            "tab-icon": P(() => [
              L(e.$slots, "tab-icon", { item: l })
            ]),
            tab: P(() => [
              L(e.$slots, "tab", { item: l })
            ]),
            _: 2
          }, 1032, ["text", "icon", "value", "active", "disabled"]))), 128))
        ])
      ])
    ], 4),
    U("div", rv, [
      L(e.$slots, "tabs-content", {}, () => [
        (m(!0), I(ce, null, ye(e.items, (l, c) => (m(), N(o, {
          key: c,
          content: l.content,
          visible: e.stateSelected === l.value
        }, {
          default: P(() => [
            L(e.$slots, "panel", { item: l })
          ]),
          _: 2
        }, 1032, ["content", "visible"]))), 128))
      ])
    ])
  ]);
}
const gC = /* @__PURE__ */ F(sv, [["render", ov]]);
function lv(e = {}) {
  return { ...{
    ...ja(),
    sizeControl: ie.Medium,
    loading: ft(!1)
  }, ...e };
}
const ba = lv(), uv = R({
  name: "BSwitch",
  extends: Ns,
  components: { BIcon: Ae, BSpinner: Is },
  emits: ["change", "update:value"],
  props: {
    checked: {
      type: Boolean,
      default: ba.checked
    },
    sizeControl: {
      type: String,
      default: ba.sizeControl
    },
    loading: {
      type: [Boolean, Object],
      default: ba.loading
    }
  },
  data() {
    return {
      cssClass: "b-switch",
      stateValue: !1,
      stateType: "boolean",
      // refInput: null as HTMLInputElement | null,
      stateLoading: { visible: !1 }
    };
  },
  computed: {
    classes() {
      return [
        this.cssClass,
        {
          [`${this.cssClass}--${this.sizeControl}`]: this.sizeControl !== ie.Medium
        }
      ];
    },
    trackClasses() {
      return [
        {
          [`${this.cssClass}__track--checked`]: this.stateValue,
          [`${this.cssClass}__track--disabled`]: this.stateDisabled
        }
      ];
    },
    thumbClasses() {
      return [
        {
          [`${this.cssClass}__thumb--checked`]: this.stateValue,
          [`${this.cssClass}__thumb--loading`]: this.stateLoading.visible
        }
      ];
    },
    getName() {
      return this.$attrs.name || this.getId;
    }
  },
  methods: {
    onChange(e) {
      if (!this.disabled && !this.readonly) {
        const t = this.stateType === "boolean" ? !!this.checked : this.checked;
        this.$emit("change", { event: e, value: t }), this.$emit("update:value", t);
      }
    }
  },
  watch: {
    value: {
      immediate: !0,
      handler(e) {
        this.stateValue = !!e, this.stateType = typeof e;
      }
    },
    checked: {
      immediate: !0,
      handler(e) {
        this.stateValue = e, this.stateType = typeof e;
      }
    },
    disabled: {
      immediate: !0,
      handler(e) {
        this.stateDisabled = e;
      }
    },
    loading: {
      immediate: !0,
      deep: !0,
      handler(e) {
        this.stateLoading = ft(e);
      }
    }
  },
  inheritAttrs: !1,
  ESizeControl: ie,
  isSpinner: Un
}), cv = ["id", "name", "disabled", "readonly", "required", "aria-checked"];
function dv(e, t, n, s, a, i) {
  const r = T("BSpinner");
  return m(), I("div", {
    class: H(e.classes)
  }, [
    Ke(U("input", G({
      ref: "inputRef",
      type: "checkbox",
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.stateValue = o)
    }, e.attributes, {
      id: e.getId,
      name: e.getName,
      disabled: e.stateDisabled,
      readonly: e.readonly,
      required: e.required,
      "aria-checked": e.stateValue,
      onChange: t[1] || (t[1] = (...o) => e.onChange && e.onChange(...o)),
      class: "b-switch__input"
    }), null, 16, cv), [
      [vr, e.stateValue]
    ]),
    U("div", {
      class: H(["b-switch__track", e.trackClasses])
    }, [
      U("div", {
        class: H(["b-switch__thumb", e.thumbClasses])
      }, [
        e.stateLoading.visible ? (m(), N(r, { key: 0 })) : M("", !0)
      ], 2)
    ], 2)
  ], 2);
}
const bC = /* @__PURE__ */ F(uv, [["render", dv]]);
export {
  Cv as BBreadCrumbs,
  Nc as BBreadCrumbsItem,
  ze as BButton,
  zr as BButtonClear,
  wv as BButtonElement,
  yv as BButtonMore,
  vv as BButtonSubmit,
  bv as BButtonVisibility,
  jr as BCheckBox,
  $v as BCollapse,
  Kr as BCollapseItem,
  Fv as BColumn,
  de as BComponent,
  Th as BConfirmDialog,
  Vv as BDataTable,
  Mo as BDate,
  mr as BDatePicker,
  Lb as BDateRange,
  hr as BDateRangePicker,
  Ba as BDialog,
  Pb as BDivider,
  Jv as BDrawer,
  xs as BDropDown,
  Fs as BDropDownComponent,
  lg as BEmpty,
  Sn as BFilterComponent,
  Xv as BFilterComponentBoolSelect,
  zv as BFilterComponentDatePicker,
  Kv as BFilterComponentDateRangePicker,
  Wv as BFilterComponentInput,
  Uv as BFilterComponentSelect,
  Zv as BForm,
  tC as BFormItem,
  sC as BHelperText,
  Ae as BIcon,
  Gn as BInput,
  iC as BLabel,
  mg as BListBox,
  Oo as BListBoxItem,
  rC as BLoadingBar,
  uC as BMenu,
  uw as BMenuItem,
  rw as BMenuSub,
  Da as BModal,
  Ev as BModalManage,
  Qa as BOverlay,
  Bh as BPagination,
  br as BProgressBar,
  fC as BProgressBarCircular,
  Kn as BSelect,
  Ya as BSkeleton,
  Is as BSpinner,
  bC as BSwitch,
  Xw as BTab,
  tv as BTabPanel,
  gC as BTabs,
  Og as BTag,
  Lg as BTags,
  pC as BToast,
  xw as BToastItem,
  gv as ButtonClear,
  _v as Collapse,
  Dv as CollapseItem,
  xv as DateComponent,
  Yv as DatePickerComponent,
  jv as DateRangeComponent,
  Gv as DateRangePicker,
  kv as Dialog,
  qv as Divider,
  Qv as Drawer,
  Rv as DropDown,
  Wr as EDataType,
  gs as EDirection,
  te as EFilterOperation,
  hg as EInputType,
  Zt as ELoadingType,
  ie as ESizeControl,
  Jn as ESkeletonAnimation,
  Ha as ESkeletonType,
  Ee as ESortDirection,
  ge as EVariant,
  Pv as Empty,
  nC as HelperText,
  Bv as Input,
  aC as Label,
  Mv as ListBoxItem,
  lC as Menu,
  oC as MenuSub,
  Sv as Modal,
  Iv as Overlay,
  cC as ProgressBar,
  dC as ProgressBarCircular,
  Lv as Select,
  pv as Skeleton,
  mC as Toast,
  hC as ToastItem,
  dd as addInstance,
  Io as attachFocusOutEvent,
  fr as componentsConfig,
  Yr as defaultAttributesClear,
  pc as defaultAttributesVisibility,
  on as defaultBreadCrumbsAttributes,
  Nn as defaultBreadCrumbsItemAttributes,
  Ze as defaultButtonAttributes,
  ia as defaultCheckBoxAttributes,
  ad as defaultCollapseAttributes,
  Gr as defaultCollapseItemAttributes,
  Gt as defaultColumnAttributes,
  Ds as defaultComponentAttributes,
  ns as defaultConfig,
  cn as defaultConfirmDialogAttributes,
  ve as defaultDataTableAttributes,
  qe as defaultDateAttributes,
  me as defaultDatePickerAttributes,
  Xe as defaultDateRangeAttributes,
  pe as defaultDateRangePickerAttributes,
  Tt as defaultDialogAttributes,
  Rn as defaultDividerAttributes,
  La as defaultDrawerAttributes,
  Se as defaultDropDownAttributes,
  pt as defaultDropDownComponentAttributes,
  Ao as defaultEmptyAttributes,
  hn as defaultFilterComponentAttributes,
  kt as defaultFormAttributes,
  eC as defaultFormItemAttributes,
  ws as defaultHelperTextAttributes,
  An as defaultIconAttributes,
  xe as defaultInputAttributes,
  Vn as defaultLabelAttributes,
  Pn as defaultListBoxAttributes,
  No as defaultListBoxItemAttributes,
  Jy as defaultLoadingBarAttributes,
  dw as defaultMenuAttributes,
  Bn as defaultMenuItemAttributes,
  Va as defaultMenuSubAttributes,
  At as defaultModalAttributes,
  bs as defaultOverlayAttributes,
  mn as defaultPaginationAttributes,
  Wt as defaultProgressBarAttributes,
  Fa as defaultProgressBarCircularAttributes,
  le as defaultSelectAttributes,
  Ln as defaultSkeletonAttributes,
  $i as defaultSpinnerAttributes,
  ba as defaultSwitchAttributes,
  ga as defaultTabAttributes,
  yr as defaultTabPanelAttributes,
  wr as defaultTabsAttributes,
  Ft as defaultTagAttributes,
  ha as defaultTagsAttributes,
  hv as defaultTheme,
  Iw as defaultToastAttributes,
  Fn as defaultToastItemAttributes,
  ko as detachFocusOutEvent,
  pp as formatterSortColumns,
  Ov as getDirectionByString,
  cd as getInstances,
  Nv as getListSortDirection,
  Hv as installConfig,
  Qu as isAsyncComponent,
  Ra as isEmpty,
  Ur as isLoading,
  Ju as isSkeleton,
  Un as isSpinner,
  mp as nextSortDirection,
  fd as removeInstance,
  Fe as transform,
  Ec as useBreadCrumbs,
  we as useComponentAttributes,
  Av as useConfirm,
  Rh as useDataTablePagination,
  Po as useDate,
  Sc as useDefaultBreadCrumbsAttributes,
  Ic as useDefaultBreadCrumbsItemAttributes,
  Dn as useDefaultButtonAttributes,
  fc as useDefaultButtonClearAttributes,
  hc as useDefaultButtonVisibilityAttributes,
  Lc as useDefaultCheckBoxAttributes,
  sd as useDefaultCollapseAttributes,
  zc as useDefaultCollapseItemAttributes,
  Xg as useDefaultColumnAttributes,
  Dh as useDefaultConfirmDialogAttributes,
  Vh as useDefaultDataTableAttributes,
  fi as useDefaultDateAttributes,
  Cb as useDefaultDatePickerAttributes,
  Bo as useDefaultDateRangeAttributes,
  Vb as useDefaultDateRangePickerAttributes,
  Zr as useDefaultDialogAttributes,
  kb as useDefaultDividerAttributes,
  Gb as useDefaultDrawerAttributes,
  $g as useDefaultDropDownAttributes,
  Vs as useDefaultDropDownComponentAttributes,
  ag as useDefaultEmptyAttributes,
  Vp as useDefaultFilterComponentAttributes,
  Qb as useDefaultFormAttributes,
  Ly as useDefaultFormItemAttributes,
  Wy as useDefaultHelperTextAttributes,
  xr as useDefaultIconAttributes,
  Us as useDefaultInputAttributes,
  Hy as useDefaultLabelAttributes,
  di as useDefaultListBoxAttributes,
  ug as useDefaultListBoxItemAttributes,
  Qy as useDefaultLoadingBarAttributes,
  cw as useDefaultMenuAttributes,
  tw as useDefaultMenuItemAttributes,
  nw as useDefaultMenuSubAttributes,
  Xr as useDefaultModalAttributes,
  pd as useDefaultOverlayAttributes,
  So as useDefaultPaginationAttributes,
  Lo as useDefaultProgressBarAttributes,
  ww as useDefaultProgressBarCircularAttributes,
  _g as useDefaultSelectAttributes,
  Gu as useDefaultSkeletonAttributes,
  ac as useDefaultSpinnerAttributes,
  lv as useDefaultSwitchAttributes,
  jw as useDefaultTabAttributes,
  Qw as useDefaultTabPanelAttributes,
  nv as useDefaultTabsAttributes,
  kg as useDefaultTagAttributes,
  Ig as useDefaultTagsAttributes,
  Ew as useDefaultToastAttributes,
  Aw as useDefaultToastItemAttributes,
  Tv as useDialog,
  Oy as useForm,
  $t as useIcon,
  ft as useLoading,
  gr as useLoadingBar,
  Jr as useModal,
  yd as useOverlay,
  Pt as useSort,
  Tw as useToast,
  Ny as useValidate
};
