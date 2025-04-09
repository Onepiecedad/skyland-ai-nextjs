(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    738: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 5210)),
        Promise.resolve().then(n.t.bind(n, 8234, 23)),
        Promise.resolve().then(n.t.bind(n, 7960, 23));
    },
    5210: function (e, t, n) {
      'use strict';
      n.d(t, {
        SectionProvider: function () {
          return c;
        },
        U: function () {
          return u;
        },
      });
      var i = n(7437),
        r = n(2265);
      let o = (0, r.createContext)({
          visibleSections: [],
          addSection: () => {},
          removeSection: () => {},
          isHydrated: !0,
        }),
        s = r.useLayoutEffect;
      function c(e) {
        let { children: t } = e,
          [n, c] = (0, r.useState)([]),
          [u, l] = (0, r.useState)(!0);
        s(() => (l(!0), () => l(!1)), []);
        let a = (0, r.useCallback)((e) => {
            c((t) => (t.includes(e) ? t : [...t, e]));
          }, []),
          _ = (0, r.useCallback)((e) => {
            c((t) => t.filter((t) => t !== e));
          }, []);
        return (0, i.jsx)(o.Provider, {
          value: { visibleSections: n, addSection: a, removeSection: _, isHydrated: u },
          children: t,
        });
      }
      function u() {
        let e = (0, r.useContext)(o);
        if (!e) throw Error('useSectionContext must be used within a SectionProvider');
        return e;
      }
    },
    7960: function () {},
    8234: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__Inter_d65c78', '__Inter_Fallback_d65c78', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI",
          fontStyle: 'normal',
        },
        className: '__className_d65c78',
        variable: '__variable_d65c78',
      };
    },
  },
  function (e) {
    e.O(0, [665, 971, 117, 744], function () {
      return e((e.s = 738));
    }),
      (_N_E = e.O());
  },
]);
