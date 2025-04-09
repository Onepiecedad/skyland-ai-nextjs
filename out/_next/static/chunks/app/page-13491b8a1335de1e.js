(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    6414: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 6349)),
        Promise.resolve().then(s.bind(s, 5066)),
        Promise.resolve().then(s.bind(s, 5210));
    },
    6349: function (e, t, s) {
      'use strict';
      s.d(t, {
        AuroraBackground: function () {
          return r;
        },
      });
      var a = s(7437),
        n = s(4508);
      s(2265);
      let r = (e) => {
        let { className: t, children: s, showRadialGradient: r = !0, enabled: i = !0, ...l } = e;
        return i
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)('div', {
                  className: (0, n.cn)('fixed inset-0 -z-10 overflow-hidden bg-zinc-900', t),
                  ...l,
                  children: (0, a.jsx)('div', {
                    className: (0, n.cn)(
                      'absolute -inset-[10px] opacity-50 will-change-transform\n            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]\n            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_0%,var(--indigo-300)_15%,var(--blue-300)_30%,var(--violet-200)_45%,var(--blue-400)_60%)]\n            [background-image:var(--dark-gradient),var(--aurora)]\n            [background-size:200%,_150%]\n            [background-position:50%_50%,50%_50%]\n            filter blur-[3px]\n            after:content-[""] after:absolute after:inset-0 \n            after:[background-image:var(--dark-gradient),var(--aurora)]\n            after:[background-size:150%,_120%] \n            after:animate-aurora after:[background-attachment:fixed] \n            pointer-events-none',
                      r &&
                        '[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,var(--transparent)_70%)]'
                    ),
                  }),
                }),
                s,
              ],
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)('div', {
                  className: (0, n.cn)('fixed inset-0 -z-10 overflow-hidden bg-zinc-900', t),
                  ...l,
                }),
                s,
              ],
            });
      };
    },
    5066: function (e, t, s) {
      'use strict';
      s.d(t, {
        PageSections: function () {
          return ed;
        },
      });
      var a = s(7437),
        n = s(2265),
        r = s(4508);
      let i = {
          padding: {
            none: 'p-0',
            sm: 'p-2',
            card: 'p-6',
            section: 'py-12 px-6 md:py-16 md:px-8 lg:py-20 lg:px-10',
            modal: 'p-8',
            button: 'px-6 py-3',
          },
          width: { full: 'w-full', screen: 'w-screen', auto: 'w-auto' },
          alignment: { left: 'text-left', center: 'text-center', right: 'text-right' },
          stack: { xs: 'space-y-2', sm: 'space-y-4', md: 'space-y-6', lg: 'space-y-8' },
          flex: {
            center: 'flex items-center justify-center',
            between: 'flex items-center justify-between',
            col: 'flex flex-col',
            row: 'flex flex-row items-center',
            grow: 'flex-grow',
            shrink: { none: 'flex-shrink-0' },
          },
          gap: { xs: 'gap-1', sm: 'gap-2', md: 'gap-4', lg: 'gap-6', base: 'gap-4' },
          section: {
            base: 'relative isolate min-h-[40vh] py-12 md:py-16',
            padding: 'px-4 md:px-6',
          },
          elementSpacing: 'space-y-3',
          maxWidth: {
            sm: 'max-w-sm',
            md: 'max-w-md',
            lg: 'max-w-lg',
            xl: 'max-w-xl',
            '2xl': 'max-w-2xl',
          },
          container: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
        },
        l = {
          interaction: {
            cursor: {
              pointer: 'cursor-pointer',
              wait: 'cursor-wait',
              notAllowed: 'cursor-not-allowed',
            },
            focus: {
              primary:
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-opacity-50',
              ring: 'ring-2 ring-offset-2 ring-primary ring-opacity-50',
            },
          },
          hover: {
            scale: 'hover:scale-[1.02] transition-transform duration-300',
            shadow: 'hover:shadow-lg hover:shadow-white/10 transition-shadow duration-300',
            opacity: 'hover:opacity-95 transition-opacity duration-300',
            premium:
              'hover:translate-y-[-4px] hover:shadow-xl hover:shadow-white/20 hover:border-white/20 transition-all duration-300',
          },
          overflow: {
            hidden: 'overflow-hidden',
            visible: 'overflow-visible',
            auto: 'overflow-auto',
          },
          glass: {
            light: 'backdrop-blur-sm bg-white/5 border border-white/10',
            medium: 'backdrop-blur-md bg-white/10 border border-white/15',
            heavy: 'backdrop-blur-lg bg-white/15 border border-white/20',
            lighter: 'bg-white/5 hover:bg-white/10 transition-colors',
            premium:
              'backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20 shadow-lg',
          },
          transition: {
            base: 'transition-all duration-300 ease-out',
            fast: 'transition-all duration-200 ease-out',
            slow: 'transition-all duration-500 ease-out',
            transform: 'transition-transform duration-300 ease-out',
            opacity: 'transition-opacity duration-300 ease-in-out',
            colors: 'transition-colors duration-300 ease-in-out',
            shadow: 'transition-shadow duration-300 ease-in-out',
          },
          z: { background: 'z-0', content: 'z-10', modal: 'z-30', tooltip: 'z-40' },
          shadow: {
            none: 'shadow-none',
            sm: 'shadow-sm shadow-white/5',
            base: 'shadow shadow-white/10',
            md: 'shadow-md shadow-white/10',
            lg: 'shadow-lg shadow-white/10',
            xl: 'shadow-xl shadow-white/15',
            '2xl': 'shadow-2xl shadow-white/20',
            inner: 'shadow-inner shadow-white/5',
            card: 'shadow-md hover:shadow-xl transition-shadow duration-300',
            button: 'shadow-md hover:shadow-lg transition-shadow duration-200',
            premium:
              'shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 transition-all duration-300',
          },
        },
        o = {
          heading: {
            h1: 'text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl',
            h2: 'text-3xl font-bold tracking-tight sm:text-4xl',
            h3: 'text-2xl font-bold tracking-tight sm:text-3xl',
            h4: 'text-xl font-bold tracking-tight sm:text-2xl',
            h5: 'text-lg font-bold tracking-tight',
            h6: 'text-base font-bold tracking-tight',
          },
          text: {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
          },
          weight: {
            thin: 'font-thin',
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
            extrabold: 'font-extrabold',
          },
          icon: {
            xs: 'w-4 h-4',
            sm: 'w-5 h-5',
            md: 'w-6 h-6',
            base: 'w-6 h-6',
            lg: 'w-8 h-8',
            xl: 'w-10 h-10',
            '2xl': 'w-12 h-12',
          },
          buttonText: 'text-base font-medium',
          logo: 'text-xl font-bold tracking-tight',
        },
        c = { md: 'rounded-md', lg: 'rounded-lg' },
        d = {
          surface: { default: 'bg-zinc-900', card: 'bg-white/10' },
          text: {
            primary: 'text-white',
            secondary: 'text-white/90',
            muted: 'text-white/75',
            tertiary: 'text-white/70',
            accent: 'text-primary/95',
            success: 'text-green-400',
            error: 'text-red-400',
            warning: 'text-yellow-400',
            logo: { icon: 'text-white', text: 'text-white' },
          },
        },
        m = {
          base: 'relative isolate min-h-[40vh] py-12 md:py-16 lg:py-20',
          content: 'relative max-w-7xl mx-auto px-6 lg:px-8',
          wrapper: 'w-full',
        },
        h = {
          container: 'relative isolate overflow-visible min-h-[80vh] flex items-center',
          content: 'mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-24 lg:px-8 lg:pt-28',
          wrapper: 'relative',
        },
        u = {
          base: 'flex flex-col justify-between bg-white/8 rounded-xl transition-all duration-300',
          compact: 'max-h-[400px]',
          responsive: {
            three: 'p-6 md:p-8 h-full w-full md:min-w-[240px]',
            four: 'p-5 md:p-6 md:min-w-[180px] h-full',
            six: 'p-4 md:p-5 h-full',
          },
          content: { base: 'flex flex-col gap-3', title: '', description: '' },
          hover:
            'hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 transition-all duration-300',
        },
        x = {
          base: 'grid gap-6 md:gap-8 auto-rows-fr',
          responsive: {
            two: 'grid-cols-1 lg:grid-cols-2',
            three: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
            four: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
            six: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
          },
          gap: { sm: 'gap-4', md: 'gap-6', lg: 'gap-8', xl: 'gap-10 md:gap-12' },
        };
      function p(e, t, s) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { skip: !0 };
        function i(i) {
          let { themeTokens: l = [], debug: o = !1, skip: c = r.skip, className: d = '', ...m } = i;
          return (
            n.useEffect(() => {
              !c &&
                d &&
                (function (e, t, s) {
                  arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                })(t, [...l, ...d.split(' ')], s, o);
            }, [d, l, o, c]),
            (0, a.jsx)(e, { ...m, className: d })
          );
        }
        return (i.displayName = 'withThemeValidation('.concat(t, ')')), i;
      }
      let g = p(
          function (e) {
            let {
                children: t,
                className: s,
                id: o,
                'data-theme-debug': c,
                role: d = 'region',
                ariaLabel: m,
                ariaLabelledBy: h,
                ariaDescribedBy: u,
                tabIndex: x,
                focusable: p = !1,
                onFocus: g,
                onBlur: y,
                suppressHydrationWarning: b,
              } = e,
              f = (0, n.useId)();
            return (0, a.jsx)('section', {
              id: o || f,
              role: d,
              'aria-label':
                m ||
                ('main' === d
                  ? 'Main content'
                  : 'navigation' === d
                    ? 'Primary navigation'
                    : 'contentinfo' === d
                      ? 'Footer content'
                      : void 0),
              'aria-labelledby': h,
              'aria-describedby': u,
              tabIndex: p ? (null != x ? x : 0) : void 0,
              onFocus: g,
              onBlur: y,
              className: (0, r.cn)(
                i.section.base,
                i.width.full,
                i.flex.col,
                i.flex.center,
                p && l.interaction.focus.primary,
                l.transition.base,
                s
              ),
              'data-theme-debug': c || 'section-wrapper',
              suppressHydrationWarning: b,
              children: (0, a.jsx)('div', {
                className: (0, r.cn)(
                  i.container,
                  i.elementSpacing,
                  i.padding.section,
                  i.width.full,
                  i.flex.col,
                  i.flex.center,
                  l.overflow.auto
                ),
                children: t,
              }),
            });
          },
          'SectionWrapper',
          ['spacing', 'effects']
        ),
        y = p(
          function (e) {
            let {
              children: t,
              className: s,
              intensity: n = 'medium',
              suppressHydrationWarning: i,
            } = e;
            return (0, a.jsx)('div', {
              className: (0, r.cn)(l.glass[n], s),
              suppressHydrationWarning: i,
              children: t,
            });
          },
          'GlassLayer',
          ['effects']
        );
      var b = s(5210);
      let f = p(
          function (e) {
            let {
                children: t,
                className: s,
                glass: n = !0,
                glassIntensity: l = 'light',
                padding: o = 'none',
              } = e,
              { isHydrated: c } = (0, b.U)(),
              d = (0, r.cn)(
                i.container,
                i.padding[o],
                !c && 'invisible',
                c && 'visible transition-[visibility] duration-300',
                s
              );
            return n
              ? (0, a.jsx)(y, {
                  intensity: l,
                  className: d,
                  suppressHydrationWarning: !0,
                  children: t,
                })
              : (0, a.jsx)('div', { className: d, suppressHydrationWarning: !0, children: t });
          },
          'Container',
          ['spacing']
        ),
        w = p(
          function (e) {
            let {
                children: t,
                align: s = 'left',
                spacing: n = 'md',
                maxWidth: l,
                className: o,
                role: c,
                'aria-label': d,
                'aria-labelledby': m,
                'aria-describedby': h,
              } = e,
              u = { left: i.alignment.left, center: i.alignment.center, right: i.alignment.right };
            return (0, a.jsx)('div', {
              className: (0, r.cn)(i.stack[n], u[s], l && i.maxWidth[l], o),
              role: c,
              'aria-label': d,
              'aria-labelledby': m,
              'aria-describedby': h,
              children: t,
            });
          },
          'ContentStack',
          ['spacing']
        ),
        j = p(
          function (e) {
            let {
                id: t,
                children: s,
                ariaLabel: n,
                role: i = 'region',
                className: h,
                containerGlass: u = !1,
                glassIntensity: x = 'light',
                containerPadding: p = 'section',
                spacing: y = 'lg',
              } = e,
              { isHydrated: j } = (0, b.U)();
            return (0, a.jsx)(g, {
              id: t,
              className: (0, r.cn)(
                h,
                !j && 'opacity-0',
                j && 'opacity-100 transition-opacity duration-300',
                o.text.base,
                d.text.primary,
                l.transition.base,
                c.lg,
                m.base
              ),
              'aria-label': n,
              role: i,
              suppressHydrationWarning: !0,
              children: (0, a.jsx)(f, {
                glass: u,
                glassIntensity: x,
                padding: p,
                children: (0, a.jsx)(w, { spacing: y, children: s }),
              }),
            });
          },
          'BaseSection',
          ['spacing', 'typography', 'colors', 'effects', 'radius', 'layout']
        );
      var N = s(2489);
      let v = p(
          function (e) {
            let { className: t, hideLabel: s = !1 } = e,
              l = (0, n.useId)(),
              c = ''.concat(l, '-label');
            return (0, a.jsxs)('div', {
              role: 'status',
              'aria-labelledby': c,
              className: (0, r.cn)(i.flex.col, i.gap.sm, t),
              children: [
                (0, a.jsx)('div', {
                  className: (0, r.cn)(
                    'animate-spin rounded-full border-4 border-current border-t-transparent h-6 w-6',
                    d.text.primary
                  ),
                  'aria-hidden': 'true',
                }),
                !s &&
                  (0, a.jsx)('p', {
                    id: c,
                    className: (0, r.cn)(o.text.sm, d.text.secondary),
                    children: 'Loading...',
                  }),
              ],
            });
          },
          'LoadingSpinner',
          ['spacing', 'typography', 'colors']
        ),
        k = p(
          function (e) {
            let {
                isOpen: t,
                onClose: s,
                children: m,
                title: h,
                description: u,
                showCloseButton: x = !0,
                closeButtonLabel: p = 'Close modal',
                loading: g = !1,
                loadingMessage: y = 'Loading...',
                error: b,
                errorMessage: f = 'An error occurred. Please try again.',
                onRetry: w,
                retryLabel: j = 'Retry',
                onErrorAnnounce: k,
                onStatusAnnounce: A,
                className: C,
              } = e,
              I = (0, n.useRef)(null),
              D = (0, n.useRef)(t),
              [S, T] = (0, n.useState)('idle'),
              [W, L] = (0, n.useState)(!1);
            !(function (e, t, s) {
              let a = (0, n.useRef)(null);
              (0, n.useEffect)(() => {
                if (!t) return;
                a.current = document.activeElement;
                let s = (t) => {
                  if ('Tab' !== t.key || !e.current) return;
                  let s = e.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                  );
                  if (0 === s.length) return;
                  let a = s[0],
                    n = s[s.length - 1];
                  t.shiftKey
                    ? document.activeElement === a && (t.preventDefault(), n.focus())
                    : document.activeElement === n && (t.preventDefault(), a.focus());
                };
                return (
                  (() => {
                    if (e.current) {
                      let t = e.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                      );
                      t.length > 0 && t[0].focus();
                    }
                  })(),
                  document.addEventListener('keydown', s),
                  () => {
                    document.removeEventListener('keydown', s), a.current && a.current.focus();
                  }
                );
              }, [t, e, void 0]);
            })(I, t),
              (function (e, t) {
                let s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                (0, n.useEffect)(() => {
                  if (s)
                    return (
                      document.addEventListener('keydown', a),
                      () => document.removeEventListener('keydown', a)
                    );
                  function a(s) {
                    s.key === e && (s.preventDefault(), t());
                  }
                }, [e, t, s]);
              })('Escape', s, t),
              (0, n.useEffect)(() => (L(!0), () => L(!1)), []),
              (0, n.useEffect)(() => {
                b && (null == k || k(b));
              }, [b, k]),
              (0, n.useEffect)(() => {
                if (t !== D.current) {
                  let e = t ? 'Modal opened' : 'Modal closed';
                  null == A || A(e), (D.current = t);
                }
              }, [t, A]),
              (0, n.useEffect)(() => {
                g ? (T('loading'), null == A || A(y)) : b ? T('error') : T('ready');
              }, [g, b, y, A]),
              (0, n.useEffect)(
                () => (
                  t
                    ? (document.body.style.overflow = 'hidden')
                    : (document.body.style.overflow = ''),
                  () => {
                    document.body.style.overflow = '';
                  }
                ),
                [t]
              );
            let E = (0, n.useCallback)(() => {
              T('idle'), null == w || w();
            }, [w]);
            return W && t
              ? (0, a.jsxs)('div', {
                  role: 'dialog',
                  'aria-modal': 'true',
                  'aria-labelledby': h ? 'dialog-title' : void 0,
                  'aria-describedby': u ? 'dialog-description' : void 0,
                  className: (0, r.cn)(l.z.modal, 'fixed inset-0'),
                  children: [
                    (0, a.jsx)('div', {
                      className: (0, r.cn)(
                        'fixed inset-0',
                        d.surface.default,
                        'bg-opacity-90',
                        l.transition.base,
                        'cursor-pointer'
                      ),
                      'aria-hidden': 'true',
                      onClick: s,
                    }),
                    (0, a.jsx)('div', {
                      ref: I,
                      className: (0, r.cn)(
                        'fixed inset-0',
                        i.flex.center,
                        i.padding.section,
                        l.overflow.auto,
                        'pt-16 md:pt-20'
                      ),
                      onClick: (e) => {
                        e.target === e.currentTarget && s();
                      },
                      children: (0, a.jsxs)('div', {
                        className: (0, r.cn)(
                          i.width.full,
                          i.maxWidth.lg,
                          'py-10 px-5 md:px-8',
                          i.flex.col,
                          i.gap.md,
                          'bg-zinc-900/95',
                          'backdrop-blur-md',
                          'border border-white/15',
                          'shadow-xl',
                          c.lg,
                          l.transition.base,
                          'max-h-[80vh]',
                          'overflow-y-auto',
                          'scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent',
                          C
                        ),
                        onClick: (e) => e.stopPropagation(),
                        children: [
                          x &&
                            (0, a.jsx)('button', {
                              type: 'button',
                              className: (0, r.cn)(
                                'absolute top-3 right-3',
                                'p-1.5',
                                'rounded-full',
                                'bg-white/5 hover:bg-white/10',
                                'border border-white/10',
                                l.transition.base
                              ),
                              onClick: s,
                              'aria-label': p,
                              children: (0, a.jsx)(N.Z, { className: 'w-3.5 h-3.5 text-white/70' }),
                            }),
                          h &&
                            (0, a.jsx)('h2', {
                              id: 'dialog-title',
                              className: (0, r.cn)(o.heading.h2, d.text.primary),
                              children: h,
                            }),
                          u &&
                            (0, a.jsx)('p', {
                              id: 'dialog-description',
                              className: (0, r.cn)(o.text.lg, d.text.secondary),
                              children: u,
                            }),
                          'loading' === S
                            ? (0, a.jsx)(v, { hideLabel: !1, className: i.flex.center })
                            : 'error' === S
                              ? (0, a.jsxs)('div', {
                                  className: (0, r.cn)(i.stack.md, i.flex.col),
                                  children: [
                                    (0, a.jsx)('p', {
                                      className: (0, r.cn)(o.text.base, d.text.error),
                                      children: b || f,
                                    }),
                                    w &&
                                      (0, a.jsx)('button', {
                                        type: 'button',
                                        onClick: E,
                                        className: (0, r.cn)(
                                          i.padding.button,
                                          o.text.base,
                                          d.text.primary,
                                          l.glass.light,
                                          l.hover.opacity,
                                          l.transition.base,
                                          c.md
                                        ),
                                        'aria-label': ''.concat(j, ' after error: ').concat(b || f),
                                        children: j,
                                      }),
                                  ],
                                })
                              : m,
                        ],
                      }),
                    }),
                  ],
                })
              : null;
          },
          'Modal',
          ['spacing', 'typography', 'colors', 'effects', 'radius']
        ),
        A = p(
          function (e) {
            let {
                title: t,
                description: s,
                expandedContent: i,
                className: m,
                ariaLabel: h,
                variant: x = 'three',
                centerText: p = !1,
                debugMode: g = !1,
              } = e,
              [y, b] = (0, n.useState)(!1),
              f = (0, n.useId)(),
              w = ''.concat(f, '-description'),
              j = p ? 'text-center' : 'text-left',
              N = (0, a.jsxs)('div', {
                className: (0, r.cn)(
                  'flex flex-col justify-between h-full',
                  o.text.base,
                  d.text.primary,
                  j,
                  'break-words hyphens-auto overflow-hidden',
                  p ? 'items-center' : ''
                ),
                children: [
                  (() => {
                    let e = 'text-xl sm:text-2xl';
                    if (
                      (t.length > 50
                        ? (e = 'text-lg sm:text-xl')
                        : t.length > 30 && (e = 'text-lg sm:text-xl'),
                      'four' === x && t.length <= 15)
                    )
                      return (0, a.jsx)('h3', {
                        className: (0, r.cn)(
                          d.text.primary,
                          'mb-2 tracking-tight break-words hyphens-auto',
                          'font-normal',
                          e
                        ),
                        children: t,
                      });
                    let s =
                      'four' === x
                        ? o.heading.h4
                        : 'six' === x
                          ? o.heading.h5
                          : 'text-xl sm:text-2xl';
                    return (0, a.jsx)('h3', {
                      className: (0, r.cn)(
                        d.text.primary,
                        'mb-2 tracking-tight break-words hyphens-auto whitespace-normal',
                        'font-normal',
                        s,
                        e
                      ),
                      children: t,
                    });
                  })(),
                  (0, a.jsx)('p', {
                    id: w,
                    className: (0, r.cn)(
                      (() => {
                        let e = 'four' === x ? 'text-xs sm:text-sm' : 'text-sm';
                        return s.split(/\?\s+/).length > 1 || s.length > 80
                          ? (0, r.cn)(e, 'leading-relaxed')
                          : e;
                      })(),
                      d.text.secondary,
                      'max-w-prose break-words hyphens-auto whitespace-pre-line',
                      p ? 'mx-auto' : ''
                    ),
                    children: s.includes('? What if') ? s.replace(/\? What if/, '?\n\nWhat if') : s,
                  }),
                ],
              }),
              v = (0, r.cn)(
                'flex flex-col justify-between rounded-xl min-w-[220px]',
                u.responsive[x],
                'backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20',
                l.shadow.premium,
                l.hover.premium,
                l.transition.base,
                c.lg,
                o.text.base,
                d.text.primary,
                j,
                'h-full',
                m
              );
            return i
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)('div', {
                      role: 'button',
                      tabIndex: 0,
                      onClick: () => {
                        g && console.log('Card clicked, expandedContent exists:', !!i), i && b(!0);
                      },
                      onKeyDown: (e) => {
                        i &&
                          ('Enter' === e.key || ' ' === e.key || 'Space' === e.key) &&
                          (e.preventDefault(), b(!0));
                      },
                      'aria-label': h || t,
                      'aria-expanded': y,
                      'aria-controls': ''.concat(w, '-modal'),
                      className: (0, r.cn)(
                        v,
                        'cursor-pointer w-full',
                        o.weight.normal,
                        'hover:shadow-xl hover:border-white/20'
                      ),
                      children: N,
                    }),
                    (0, a.jsx)(k, {
                      isOpen: y,
                      onClose: () => b(!1),
                      closeButtonLabel: 'Close',
                      'aria-labelledby': ''.concat(w, '-title'),
                      children: i,
                    }),
                  ],
                })
              : (0, a.jsx)('div', {
                  role: 'article',
                  'aria-label': h || t,
                  className: v,
                  children: N,
                });
          },
          'Card',
          ['typography', 'colors', 'layout', 'effects', 'radius']
        );
      var C = s(4972);
      let I = p(
        function (e) {
          let { className: t } = e,
            s = [d.text.primary, l.transition.base];
          return (0, a.jsxs)('div', {
            className: (0, r.cn)('flex items-center space-x-3', s, t),
            children: [
              (0, a.jsx)(C.Z, { className: 'h-6 w-6 text-blue-500', strokeWidth: 2 }),
              (0, a.jsxs)('div', {
                className: 'flex items-center tracking-tight font-medium',
                children: [
                  (0, a.jsx)('span', { className: 'text-white', children: 'Skyland' }),
                  (0, a.jsx)('span', { className: 'text-white font-bold', children: 'AI' }),
                ],
              }),
            ],
          });
        },
        'Logo',
        ['typography', 'colors', 'effects']
      );
      function D() {
        let e = {
          title: 'Meet Dana—Our AI Assistant',
          description:
            "She's here to show you how automation can save time, reduce workload, and help your business grow.\nWhat's the one task you'd automate today if you could?",
          expandedContent: (0, a.jsxs)(w, {
            spacing: 'lg',
            children: [
              (0, a.jsx)('h4', {
                className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                children: 'Meet Dana—Our Always-On AI Strategy Assistant',
              }),
              (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.lg),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      "Dana isn't just a chatbot—she's an AI assistant trained to answer your questions, handle leads, and help you automate key parts of your business.",
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-6'),
                    children: "Here's what Dana can help you with:",
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.lg, 'mt-4'),
                    children: [
                      (0, a.jsxs)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal'),
                        children: [
                          '\uD83E\uDDE0 ',
                          (0, a.jsx)('span', {
                            className: 'font-medium',
                            children: 'Understand & Explore',
                          }),
                        ],
                      }),
                      (0, a.jsxs)('ul', {
                        className: (0, r.cn)(i.stack.md, 'ml-6 list-disc'),
                        children: [
                          (0, a.jsx)('li', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children: 'Answer your questions about Skyland AI',
                          }),
                          (0, a.jsx)('li', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children: 'Explain how our services, trial model, and pricing work',
                          }),
                          (0, a.jsx)('li', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              'Suggest automation ideas tailored to your business and goals',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.lg, 'mt-6'),
                    children: [
                      (0, a.jsxs)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal'),
                        children: [
                          '⚙️ ',
                          (0, a.jsx)('span', { className: 'font-medium', children: 'Take Action' }),
                        ],
                      }),
                      (0, a.jsxs)('ul', {
                        className: (0, r.cn)(i.stack.md, 'ml-6 list-disc'),
                        children: [
                          (0, a.jsx)('li', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children: 'Collect and save lead info directly into our CRM',
                          }),
                          (0, a.jsx)('li', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children: 'Send custom emails and take messages',
                          }),
                          (0, a.jsx)('li', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children: 'Book meetings or appointments through calendar integrations',
                          }),
                          (0, a.jsx)('li', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children: 'Follow up with visitors via email or summaries',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-6'),
                    children:
                      "She's not here to sell. She's here to help you explore if—and how—automation can work for your business.",
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md, 'mt-8'),
                    children: [
                      (0, a.jsxs)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal'),
                        children: [
                          '\uD83D\uDCAC ',
                          (0, a.jsx)('span', {
                            className: 'font-medium',
                            children: 'You can ask her things like:',
                          }),
                        ],
                      }),
                      (0, a.jsxs)('ul', {
                        className: (0, r.cn)(i.stack.md, 'ml-6'),
                        children: [
                          (0, a.jsx)('li', {
                            className: (0, r.cn)(o.text.base, d.text.secondary, 'italic'),
                            children: '"What would you automate first in a business like mine?"',
                          }),
                          (0, a.jsx)('li', {
                            className: (0, r.cn)(o.text.base, d.text.secondary, 'italic'),
                            children: '"Can AI help me respond faster to new leads?"',
                          }),
                          (0, a.jsx)('li', {
                            className: (0, r.cn)(o.text.base, d.text.secondary, 'italic'),
                            children: '"How does the two-week trial work?"',
                          }),
                          (0, a.jsx)('li', {
                            className: (0, r.cn)(o.text.base, d.text.secondary, 'italic'),
                            children: '"What\'s a voice agent, and do I need one?"',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)('p', {
                    className: (0, r.cn)(
                      o.text.base,
                      d.text.accent,
                      'mt-8 flex items-center font-medium'
                    ),
                    children: [
                      (0, a.jsx)('span', {
                        className: 'inline-block mr-2',
                        children: '\uD83D\uDC49',
                      }),
                      ' Ask Dana now and see what AI can actually do—for your business',
                    ],
                  }),
                ],
              }),
            ],
          }),
        };
        return (0, a.jsxs)(j, {
          id: 'hero',
          className: (0, r.cn)(
            m.base,
            h.container,
            'min-h-screen py-16 md:py-20 lg:py-24',
            'flex items-center justify-center'
          ),
          ariaLabel: 'Hero Section',
          containerGlass: !1,
          children: [
            (0, a.jsx)('div', {
              className: 'absolute top-6 left-6 md:top-8 md:left-8 lg:top-10 lg:left-10 z-20',
              children: (0, a.jsx)(I, { className: 'text-lg sm:text-xl' }),
            }),
            (0, a.jsx)(w, {
              spacing: 'lg',
              className: 'max-w-7xl mx-auto px-6 md:px-8 lg:px-10 w-full',
              children: (0, a.jsxs)('div', {
                className: 'grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center',
                children: [
                  (0, a.jsxs)(w, {
                    spacing: 'md',
                    className: (0, r.cn)('space-y-6'),
                    children: [
                      (0, a.jsx)('h1', {
                        className: (0, r.cn)(
                          o.heading.h1,
                          d.text.primary,
                          'font-normal leading-tight'
                        ),
                        children: "What if growing your business didn't mean more work?",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.lg, d.text.secondary, 'leading-relaxed'),
                        children:
                          'Let AI Handle 80% of Your Work—Effortlessly. Meet Your 24/7 Digital Employee—For Free',
                      }),
                    ],
                  }),
                  (0, a.jsx)('div', {
                    children: (0, a.jsx)(A, {
                      title: e.title,
                      description: e.description,
                      expandedContent: e.expandedContent,
                      ariaLabel: 'Meet Dana AI Assistant',
                      className: (0, r.cn)(
                        l.hover.scale,
                        l.transition.base,
                        'bg-white/5 w-full p-6 md:p-8',
                        l.shadow.card,
                        c.lg,
                        'border border-white/10',
                        'backdrop-blur-sm'
                      ),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function S(e) {
        let { className: t } = e,
          s = [
            {
              id: 'voice-agents',
              title: 'AI Voice Agents',
              description:
                "Want to answer every call instantly—even when you're busy? What if your phone system could follow up with leads automatically while you focus on delivering results?",
              expandedContent: (0, a.jsxs)(w, {
                spacing: 'md',
                children: [
                  (0, a.jsx)('h4', {
                    className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                    children: 'Never Miss a Call—or a Client—Again',
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "Every missed call is a missed opportunity. Most leads won't leave a voicemail—they just move on.",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: 'AI Voice Agents fix that instantly.',
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          'They answer inbound calls 24/7, handle FAQs, qualify leads, and book meetings automatically. They can also make up to 2,000 outbound calls per hour—following up with leads in their own language, fully customized to your business.',
                      }),
                      (0, a.jsx)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                        children: "And they don't just talk—they take action.",
                      }),
                      (0, a.jsxs)('div', {
                        className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                        children: [
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              'Push updates directly to your CRM. Trigger workflows. Route calls.',
                          }),
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children: 'All with zero human effort.',
                          }),
                        ],
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                        children: [
                          (0, a.jsx)('span', {
                            className: 'inline-block mr-2',
                            children: '\uD83D\uDCAC',
                          }),
                          ' Talk to Dana to see how AI voice agents could work like 10 reps—on autopilot.',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              id: 'custom-assistants',
              title: 'Custom AI Assistants',
              description:
                'Want to engage with every website visitor and qualify leads 24/7? What if you had a personal AI assistant that could handle questions, meetings, and support without you being there?',
              expandedContent: (0, a.jsxs)(w, {
                spacing: 'md',
                children: [
                  (0, a.jsx)('h4', {
                    className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                    children: 'Your Always-On Lead Qualifier, Support Agent & Personal Assistant',
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "Website traffic is great—but only if it turns into action. Most visitors never fill out forms or wait for a reply. That's where Custom AI Assistants step in.",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          'These intelligent chatbots engage every visitor in real time, answer questions, qualify leads, and guide them toward next steps—without missing a beat.',
                      }),
                      (0, a.jsx)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                        children: "But they're not limited to your website.",
                      }),
                      (0, a.jsxs)('div', {
                        className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                        children: [
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              'These assistants can also act as personal AI sidekicks—connected to your email, calendar, and web—helping you stay productive, on schedule, and in control.',
                          }),
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              "Need them tailored to your brand voice, lead process, or support flow? No problem. They're fully customizable—and available 24/7 without human oversight.",
                          }),
                        ],
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                        children:
                          'From lead gen to personal productivity, these assistants do the work of a full team—without the overhead.',
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                        children: [
                          (0, a.jsx)('span', {
                            className: 'inline-block mr-2',
                            children: '\uD83D\uDCAC',
                          }),
                          ' Talk to Dana to see how a Custom AI Assistant could turn your traffic—and time—into revenue.',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              id: 'business-automation',
              title: 'Business Automation',
              description:
                "Tired of wasting time on repetitive tasks that don't grow your business? What if your workflows could run themselves in the background—saving you hours, mistakes, and mental load?",
              expandedContent: (0, a.jsxs)(w, {
                spacing: 'md',
                children: [
                  (0, a.jsx)('h4', {
                    className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                    children: 'Let AI Handle the Busywork—So You Can Focus on Growth',
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "How much time does your team waste on manual tasks that don't move the needle?",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          'Scheduling. Copy-pasting. Data entry. Reporting. The kind of work that keeps things running—but keeps your team from scaling.',
                      }),
                      (0, a.jsx)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                        children: 'Business Automation changes that.',
                      }),
                      (0, a.jsxs)('div', {
                        className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                        children: [
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              'From onboarding flows to invoice reminders, contract processing to task routing—AI-powered workflows handle it all in the background, with perfect precision.',
                          }),
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              "They don't call in sick. They don't forget steps. They just run—quietly, automatically, and exactly how you want them to.",
                          }),
                        ],
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                        children:
                          'Whether you need full process automation or help eliminating small inefficiencies, these systems are built to adapt to your business—not the other way around.',
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                        children: [
                          (0, a.jsx)('span', {
                            className: 'inline-block mr-2',
                            children: '\uD83D\uDCAC',
                          }),
                          ' Talk to Dana to find out how much time (and sanity) you could save this week.',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
          ];
        return (0, a.jsx)(j, {
          id: 'ai-solutions',
          className: (0, r.cn)(i.section.base, i.padding.section, l.glass, t),
          ariaLabel: 'AI Solutions',
          children: (0, a.jsxs)(w, {
            spacing: 'lg',
            maxWidth: '2xl',
            className: (0, r.cn)(i.section.padding, 'w-full max-w-7xl'),
            children: [
              (0, a.jsxs)(w, {
                spacing: 'md',
                className: (0, r.cn)(i.alignment.center),
                children: [
                  (0, a.jsx)('h2', {
                    className: (0, r.cn)(o.heading.h2, d.text.primary, 'font-normal'),
                    children: 'AI Solutions That Do the Work for You',
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, i.stack.md),
                    children:
                      "From missed calls to admin overload—these AI tools handle real work so you don't have to.",
                  }),
                ],
              }),
              (0, a.jsx)('div', {
                className:
                  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12',
                children: s.map((e) =>
                  (0, a.jsx)(
                    'div',
                    {
                      className: (0, r.cn)(i.flex.col),
                      children: (0, a.jsx)(A, {
                        title: e.title,
                        description: e.description,
                        expandedContent: e.expandedContent,
                        ariaLabel: ''.concat(e.title, ' solution'),
                        className: (0, r.cn)(
                          l.hover.scale,
                          l.transition.base,
                          'bg-white/5 w-full',
                          l.shadow.card,
                          c.lg
                        ),
                      }),
                    },
                    e.id
                  )
                ),
              }),
            ],
          }),
        });
      }
      function T(e) {
        let { className: t } = e,
          s = [
            {
              id: 'real-estate',
              title: 'AI for Real Estate',
              description:
                'Capture leads, book viewings, and follow up—automatically, 24/7. Never miss a buyer again.',
              expandedContent: (0, a.jsxs)(w, {
                spacing: 'md',
                children: [
                  (0, a.jsx)('h4', {
                    className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                    children: 'Turn Missed Calls Into Closed Deals—While You Sleep',
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "Real estate doesn't stop at 5 PM—but you do. Missed calls, unqualified leads, and non-stop questions pull you away from what really matters: closing deals.",
                      }),
                      (0, a.jsx)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                        children: 'The solution:',
                      }),
                      (0, a.jsx)('div', {
                        className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                        children: (0, a.jsx)('p', {
                          className: (0, r.cn)(o.text.base, d.text.secondary),
                          children:
                            'Your AI agent answers instantly—day or night—knows every listing in real time, and handles follow-ups without missing a beat.',
                        }),
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                        children:
                          'No more chasing. No more stress. Just more showings, more sleep, and more deals.',
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                        children: [
                          (0, a.jsx)('span', {
                            className: 'inline-block mr-2',
                            children: '\uD83D\uDC49',
                          }),
                          ' Curious what this could look like in your agency? Talk to Dana to find out.',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              id: 'customer-support',
              title: 'AI for Customer Support',
              description:
                'Answer instantly, resolve faster, and scale support—without adding headcount.',
              expandedContent: (0, a.jsxs)(w, {
                spacing: 'md',
                children: [
                  (0, a.jsx)('h4', {
                    className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                    children: "Your AI Support Agent—Working 24/7, So Your Team Doesn't Have To",
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: "Support teams are stretched thin—and customers don't wait.",
                      }),
                      (0, a.jsx)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                        children: 'The solution:',
                      }),
                      (0, a.jsxs)('div', {
                        className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                        children: [
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              'Your AI support agent handles up to 80% of incoming questions instantly, 24/7—by voice or chat.',
                          }),
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              'It works across channels, speaks multiple languages, and integrates directly into your CRM or helpdesk.',
                          }),
                        ],
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                        children:
                          'No more ticket backlogs. No more missed calls. Just faster answers, happier customers, and a team that can finally breathe.',
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                        children: [
                          (0, a.jsx)('span', {
                            className: 'inline-block mr-2',
                            children: '\uD83D\uDC49',
                          }),
                          ' Want to see what this looks like for your business? Talk to Dana now.',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              id: 'hospitality',
              title: 'AI for Hospitality',
              description:
                'Answer guest questions, handle bookings, and increase upsells—day or night, no staff needed.',
              expandedContent: (0, a.jsxs)(w, {
                spacing: 'md',
                children: [
                  (0, a.jsx)('h4', {
                    className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                    children: 'Give Guests Instant Answers—Without Adding to Your Team',
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: 'Guests expect fast, helpful service—no matter the hour.',
                      }),
                      (0, a.jsx)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                        children: 'The solution:',
                      }),
                      (0, a.jsxs)('div', {
                        className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                        children: [
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              'Your AI concierge responds instantly by voice or chat, handles bookings, FAQs, and even upsells room upgrades or services automatically.',
                          }),
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              'It works 24/7, speaks multiple languages, and connects with your existing booking system or CRM.',
                          }),
                        ],
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                        children:
                          'Fewer delays. Happier guests. More revenue—without hiring more staff.',
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                        children: [
                          (0, a.jsx)('span', {
                            className: 'inline-block mr-2',
                            children: '\uD83D\uDC49',
                          }),
                          ' Wondering how this could work at your front desk? Talk to Dana to find out.',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              id: 'admin',
              title: 'AI for Admin & Workflow Automation',
              description:
                'Free up your time by automating repetitive tasks, reminders, and follow-ups—without hiring or micromanaging.',
              expandedContent: (0, a.jsxs)(w, {
                spacing: 'md',
                children: [
                  (0, a.jsx)('h4', {
                    className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                    children: 'Handle the Busywork—Without Lifting a Finger',
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          'Emails, reminders, scheduling, updates, follow-ups… admin never ends.',
                      }),
                      (0, a.jsx)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                        children: 'The solution:',
                      }),
                      (0, a.jsxs)('div', {
                        className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                        children: [
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              'Your AI assistant handles repetitive tasks automatically—so you can focus on work that actually moves the needle.',
                          }),
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              'It updates systems, sends messages, reminds clients, tracks progress, and more—without dropping the ball.',
                          }),
                        ],
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                        children: 'Save hours, prevent mistakes, and finally get your time back.',
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                        children: [
                          (0, a.jsx)('span', {
                            className: 'inline-block mr-2',
                            children: '\uD83D\uDC49',
                          }),
                          ' Wondering how much of your admin could disappear? Talk to Dana to find out.',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
          ];
        return (0, a.jsx)(j, {
          id: 'industry-solutions',
          className: (0, r.cn)(i.section.base, i.padding.section, l.glass, t),
          ariaLabel: 'Industry Solutions',
          children: (0, a.jsxs)(w, {
            spacing: 'lg',
            maxWidth: '2xl',
            className: (0, r.cn)(i.section.padding, 'w-full max-w-7xl'),
            children: [
              (0, a.jsxs)(w, {
                spacing: 'md',
                className: (0, r.cn)(i.alignment.center),
                children: [
                  (0, a.jsx)('h2', {
                    className: (0, r.cn)(o.heading.h2, d.text.primary, 'font-normal'),
                    children: 'Real AI, Solving Real Problems—Across Industries',
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, i.stack.md),
                    children:
                      'From real estate to hospitality to customer support—AI is already handling the work that slows businesses down.',
                  }),
                ],
              }),
              (0, a.jsx)('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12',
                children: s.map((e) =>
                  (0, a.jsx)(
                    'div',
                    {
                      className: (0, r.cn)(i.flex.col),
                      children: (0, a.jsx)(A, {
                        title: e.title,
                        description: e.description,
                        expandedContent: e.expandedContent,
                        ariaLabel: ''.concat(e.title, ' solution'),
                        className: (0, r.cn)(
                          l.hover.scale,
                          l.transition.base,
                          'bg-white/5 w-full',
                          l.shadow.card,
                          c.lg
                        ),
                      }),
                    },
                    e.id
                  )
                ),
              }),
            ],
          }),
        });
      }
      let W = p(
          function (e) {
            let {
                children: t,
                columns: s = 'three',
                gap: i = 'lg',
                className: l,
                ariaLabel: o,
                adaptiveHeight: c = !0,
              } = e,
              d = n.Children.count(t),
              m =
                'three' !== s
                  ? s
                  : 1 === d || 2 === d
                    ? 'two'
                    : 3 === d || 6 === d
                      ? 'three'
                      : 4 === d
                        ? 'four'
                        : 5 === d
                          ? 'three'
                          : s,
              h = n.Children.map(t, (e) =>
                n.isValidElement(e) && 'function' == typeof e.type && 'Card' === e.type.displayName
                  ? n.cloneElement(e, { variant: m, ...e.props })
                  : e
              );
            return (0, a.jsx)('div', {
              role: 'grid',
              'aria-label': o,
              className: (0, r.cn)(x.base, x.responsive[m], x.gap[i], c ? 'grid-rows-auto' : '', l),
              children: h,
            });
          },
          'GridSection',
          ['layout']
        ),
        L = [
          {
            id: 'manual-tasks',
            title: 'Every missed call could be a lost client. How many did you miss today?',
            description:
              "What if your business could respond instantly—even when you can't? What if you could have fewer lost leads—and more clients saying yes?",
            modalContent: (0, a.jsxs)(w, {
              spacing: 'md',
              children: [
                (0, a.jsx)('h4', {
                  className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                  children: 'Too Many Customer Calls & Repetitive Inquiries?',
                }),
                (0, a.jsxs)('div', {
                  className: (0, r.cn)(i.stack.md),
                  children: [
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary),
                      children:
                        "You're deep in work—then the phone rings. Again. And again. Same questions. Same interruptions. Same stress.",
                    }),
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary),
                      children:
                        "And every missed call? That's a cold lead. A lost sale. How much is one client worth to you? Now multiply that by ten.",
                    }),
                    (0, a.jsx)('h5', {
                      className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                      children: 'Now imagine this:',
                    }),
                    (0, a.jsxs)('div', {
                      className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                      children: [
                        (0, a.jsx)('p', {
                          className: (0, r.cn)(o.text.base, d.text.secondary),
                          children: 'An AI voice assistant that answers instantly—24/7.',
                        }),
                        (0, a.jsx)('p', {
                          className: (0, r.cn)(o.text.base, d.text.secondary),
                          children:
                            'It books appointments. Handles FAQs. Qualifies leads—without you lifting a finger.',
                        }),
                      ],
                    }),
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                      children:
                        "This isn't about replacing you. It's about reclaiming your time and sealing the cracks in your growth.",
                    }),
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary),
                      children:
                        'Now your customers get answers. You stay in control. And growth stops leaking through the cracks.',
                    }),
                    (0, a.jsxs)('p', {
                      className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                      children: [
                        (0, a.jsx)('span', {
                          className: 'inline-block mr-2',
                          children: '\uD83D\uDCAC',
                        }),
                        ' Talk to Dana to see what that could look like in your business.',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          },
          {
            id: 'scaling',
            title: "Still buried in admin that doesn't grow your business?",
            description:
              'What if your daily busywork ran itself—without extra staff? What if you could free up hours and finally focus on real growth?',
            modalContent: (0, a.jsxs)(w, {
              spacing: 'md',
              children: [
                (0, a.jsx)('h4', {
                  className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                  children: 'Let AI Turn Admin Chaos Into Growth Hours',
                }),
                (0, a.jsxs)('div', {
                  className: (0, r.cn)(i.stack.md),
                  children: [
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary),
                      children:
                        "You didn't start your business to spend your days filling out forms, updating spreadsheets, or chasing paperwork.",
                    }),
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary),
                      children:
                        'But somehow, all that "small stuff" eats up your time—and pulls your focus away from the work that actually moves the needle.',
                    }),
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary),
                      children:
                        "It's not just exhausting. It's expensive. Because every hour spent on admin is an hour not spent on growth.",
                    }),
                    (0, a.jsx)('h5', {
                      className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                      children: 'Now imagine this:',
                    }),
                    (0, a.jsxs)('div', {
                      className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                      children: [
                        (0, a.jsx)('p', {
                          className: (0, r.cn)(o.text.base, d.text.secondary),
                          children:
                            'AI systems that quietly run your backend operations—automating reports, scheduling, client intake, follow-ups, and more.',
                        }),
                        (0, a.jsx)('p', {
                          className: (0, r.cn)(o.text.base, d.text.secondary),
                          children:
                            'No new hires. No complicated tech. Just your workflows—streamlined and self-managing.',
                        }),
                      ],
                    }),
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                      children:
                        "This isn't about doing more. It's about finally doing what matters most.",
                    }),
                    (0, a.jsxs)('p', {
                      className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                      children: [
                        (0, a.jsx)('span', {
                          className: 'inline-block mr-2',
                          children: '\uD83D\uDCAC',
                        }),
                        ' Talk to Dana to find out what your business could automate first.',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          },
          {
            id: 'costs',
            title: "Losing leads because you didn't respond fast enough?",
            description:
              'What if your leads got a reply in seconds—not hours? What if your leads never went cold again?',
            modalContent: (0, a.jsxs)(w, {
              spacing: 'md',
              children: [
                (0, a.jsx)('h4', {
                  className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                  children: 'Turn Cold Leads Into Instant Conversations',
                }),
                (0, a.jsxs)('div', {
                  className: (0, r.cn)(i.stack.md),
                  children: [
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary),
                      children:
                        "You had their attention—but you didn't reply fast enough. They moved on. Or worse—your competitor beat you to it.",
                    }),
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary),
                      children:
                        "In today's world, leads expect instant answers. If you're not responding within minutes, you're losing deals you never even knew you had.",
                    }),
                    (0, a.jsx)('h5', {
                      className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                      children: 'Now imagine this:',
                    }),
                    (0, a.jsxs)('div', {
                      className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                      children: [
                        (0, a.jsx)('p', {
                          className: (0, r.cn)(o.text.base, d.text.secondary),
                          children:
                            'AI-powered assistants that engage new leads the moment they reach out—via chat, voice, or form.',
                        }),
                        (0, a.jsx)('p', {
                          className: (0, r.cn)(o.text.base, d.text.secondary),
                          children:
                            'They qualify, respond, and even book meetings while you focus on the work that matters.',
                        }),
                      ],
                    }),
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                      children:
                        'No missed messages. No cold leads. Just warm conversations happening on autopilot.',
                    }),
                    (0, a.jsxs)('p', {
                      className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                      children: [
                        (0, a.jsx)('span', {
                          className: 'inline-block mr-2',
                          children: '\uD83D\uDCAC',
                        }),
                        ' Talk to Dana to see how fast you could start winning back lost leads.',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          },
          {
            id: 'staff',
            title: 'Scaling feels impossible without hiring more staff?',
            description:
              'What if your operations scaled automatically as your business grew? What if you could serve more clients—without growing your team?',
            modalContent: (0, a.jsxs)(w, {
              spacing: 'md',
              children: [
                (0, a.jsx)('h4', {
                  className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                  children: 'Scale Smarter—Without Hiring or Burning Out',
                }),
                (0, a.jsxs)('div', {
                  className: (0, r.cn)(i.stack.md),
                  children: [
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary),
                      children:
                        'Growth should feel exciting—not exhausting. But when every new client means more staff, more training, and more overhead… scaling starts to feel like a trap.',
                    }),
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary),
                      children:
                        'What if your business could handle more leads, more clients, and more complexity—without growing your team?',
                    }),
                    (0, a.jsx)('h5', {
                      className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                      children: 'Now imagine this:',
                    }),
                    (0, a.jsxs)('div', {
                      className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                      children: [
                        (0, a.jsx)('p', {
                          className: (0, r.cn)(o.text.base, d.text.secondary),
                          children: "That's what AI automation delivers.",
                        }),
                        (0, a.jsx)('p', {
                          className: (0, r.cn)(o.text.base, d.text.secondary),
                          children:
                            'It replaces manual busywork with intelligent systems that work behind the scenes—handling onboarding, follow-ups, scheduling, reporting, and more.',
                        }),
                      ],
                    }),
                    (0, a.jsx)('p', {
                      className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                      children:
                        'No burnout. No bloated payroll. Just a lean, scalable business that grows without friction.',
                    }),
                    (0, a.jsxs)('p', {
                      className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                      children: [
                        (0, a.jsx)('span', {
                          className: 'inline-block mr-2',
                          children: '\uD83D\uDCAC',
                        }),
                        ' Talk to Dana to see how your business could scale faster—with less stress.',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          },
        ];
      function E() {
        return (0, a.jsx)(j, {
          id: 'pain-points',
          className: (0, r.cn)(i.section.base, i.padding.section, l.glass),
          ariaLabel: 'Common Business Challenges',
          children: (0, a.jsxs)(w, {
            spacing: 'lg',
            maxWidth: '2xl',
            className: (0, r.cn)(i.section.padding),
            children: [
              (0, a.jsxs)(w, {
                spacing: 'md',
                className: (0, r.cn)(i.alignment.center),
                children: [
                  (0, a.jsx)('h2', {
                    className: (0, r.cn)(o.heading.h2, d.text.primary, 'font-normal'),
                    children: 'Which of These Problems Is Costing You the Most Right Now?',
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, i.stack.md),
                    children:
                      "These issues don't just slow you down—they quietly drain your time, energy, and profit. AI can start fixing them in days—not months.",
                  }),
                ],
              }),
              (0, a.jsx)(W, {
                columns: 'two',
                gap: 'lg',
                ariaLabel: 'Common Business Challenges Grid',
                children: L.map((e) =>
                  (0, a.jsx)(
                    'div',
                    {
                      className: (0, r.cn)(i.flex.col),
                      children: (0, a.jsx)(A, {
                        title: e.title,
                        description: e.description,
                        expandedContent: e.modalContent,
                        ariaLabel: ''.concat(e.title, ' challenge card'),
                      }),
                    },
                    e.id
                  )
                ),
              }),
            ],
          }),
        });
      }
      let Y = [
        {
          id: 'discovery',
          title: 'Step 1: Book Your Free AI Strategy Call',
          description:
            "Let's break down your workflow to uncover time-wasters, bottlenecks, and untapped opportunities—then map out how AI can fix them fast.",
          modalContent: (0, a.jsxs)(w, {
            spacing: 'md',
            children: [
              (0, a.jsx)('h4', {
                className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                children: "Let's Talk About What's Not Working—And How to Fix It Fast",
              }),
              (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.md),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      "This 15-minute call is where your transformation starts. We'll walk through your daily workflows and identify what's costing you time, money, and momentum.",
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      "You'll get expert insight into what's possible with AI—without the jargon or sales pitch. Just clarity, strategy, and next steps you can act on.",
                  }),
                  (0, a.jsxs)('p', {
                    className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                    children: [
                      (0, a.jsx)('span', {
                        className: 'inline-block mr-2',
                        children: '\uD83D\uDCAC',
                      }),
                      ' Talk to Dana to schedule your free AI strategy call.',
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        {
          id: 'solution-design',
          title: 'Step 2: Get Your Custom AI Plan',
          description:
            "You'll receive a personalized automation roadmap—tailored to your workflows, goals, and growth potential.",
          modalContent: (0, a.jsxs)(w, {
            spacing: 'md',
            children: [
              (0, a.jsx)('h4', {
                className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                children: 'Your Custom AI Plan—Built for Growth and Efficiency',
              }),
              (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.md),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      "After the strategy call, you'll receive a tailored automation plan based on your workflows, goals, and biggest opportunities. No generic advice—just clear, actionable next steps.",
                  }),
                  (0, a.jsx)('h5', {
                    className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                    children: 'What your plan includes:',
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "We'll show you what to automate, how it works, and the results you can expect.",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "You'll know exactly what it costs, what it delivers, and how quickly it can go live—so you can move forward with total confidence.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)('p', {
                    className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                    children: [
                      (0, a.jsx)('span', {
                        className: 'inline-block mr-2',
                        children: '\uD83D\uDCAC',
                      }),
                      ' Talk to Dana to learn more about our custom AI planning process.',
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        {
          id: 'implementation',
          title: 'Step 3: We Build & Test Your AI Solution',
          description:
            "We build, train, and test your custom AI system—so it's ready to perform from day one.",
          modalContent: (0, a.jsxs)(w, {
            spacing: 'md',
            children: [
              (0, a.jsx)('h4', {
                className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                children: 'Your AI Solution—Fully Built, Tested, and Ready to Launch',
              }),
              (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.md),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children: 'Once you approve the plan, we get to work.',
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      "Your custom AI system is built, trained, and configured to match your workflows, rules, and preferences. We handle the complexity—so you don't have to lift a finger.",
                  }),
                  (0, a.jsx)('h5', {
                    className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                    children: 'The final stages:',
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "You'll preview the system, test it live, and make any final tweaks—so it works exactly how you want it.",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: 'Launch in days, not months.',
                      }),
                    ],
                  }),
                  (0, a.jsxs)('p', {
                    className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                    children: [
                      (0, a.jsx)('span', {
                        className: 'inline-block mr-2',
                        children: '\uD83D\uDCAC',
                      }),
                      ' Talk to Dana to find out how quickly we could build your custom AI solution.',
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        {
          id: 'optimization',
          title: 'Step 4: Launch & Start Seeing Results',
          description: 'Your AI system goes live—and keeps getting smarter with every interaction.',
          modalContent: (0, a.jsxs)(w, {
            spacing: 'md',
            children: [
              (0, a.jsx)('h4', {
                className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                children: 'Your AI Gets Smarter—So You Keep Getting Better Results',
              }),
              (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.md),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children: "Once your system goes live, it doesn't just run—it learns.",
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      'Every call, click, and conversation helps your AI improve accuracy, speed, and impact automatically.',
                  }),
                  (0, a.jsx)('h5', {
                    className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                    children: 'Continuous improvement:',
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          'We monitor performance, refine workflows, and make smart updates—so your results keep compounding.',
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          'No extra work on your part. Just better outcomes, week after week.',
                      }),
                    ],
                  }),
                  (0, a.jsxs)('p', {
                    className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                    children: [
                      (0, a.jsx)('span', {
                        className: 'inline-block mr-2',
                        children: '\uD83D\uDCAC',
                      }),
                      ' Talk to Dana to see how our AI solutions continuously improve over time.',
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
      ];
      function F() {
        return (0, a.jsx)(j, {
          id: 'how-it-works',
          className: (0, r.cn)(i.section.base, i.padding.section, l.glass),
          ariaLabel: 'How It Works',
          children: (0, a.jsxs)(w, {
            spacing: 'lg',
            maxWidth: '2xl',
            className: (0, r.cn)(i.section.padding),
            children: [
              (0, a.jsxs)(w, {
                spacing: 'md',
                className: (0, r.cn)(i.alignment.center),
                children: [
                  (0, a.jsx)('h2', {
                    className: (0, r.cn)(o.heading.h2, d.text.primary, 'font-normal'),
                    children: 'Your AI Employee—Fully Trained in Days, No Effort Required',
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, i.stack.md),
                    children:
                      "You focus on the results—we'll handle the setup. Just follow 4 simple steps.",
                  }),
                ],
              }),
              (0, a.jsx)(W, {
                columns: 'two',
                gap: 'lg',
                ariaLabel: 'How It Works Process Grid',
                children: Y.map((e) =>
                  (0, a.jsx)(
                    'div',
                    {
                      className: (0, r.cn)(i.flex.col),
                      children: (0, a.jsx)(A, {
                        title: e.title,
                        description: e.description,
                        expandedContent: e.modalContent,
                        ariaLabel: ''.concat(e.title, ' process step'),
                      }),
                    },
                    e.id
                  )
                ),
              }),
            ],
          }),
        });
      }
      function q(e) {
        let { className: t } = e,
          s = [
            {
              title: 'Why Skyland AI Was Built – The Future of Work Starts Here',
              description: "AI isn't just the future—it's the great equalizer.",
              expandedContent: (0, a.jsxs)(w, {
                spacing: 'md',
                children: [
                  (0, a.jsx)('h4', {
                    className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                    children: 'The Vision Behind Skyland AI',
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "AI isn't just for tech giants. It's a revolution for the rest of us.",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "Skyland was born from a simple belief: small teams shouldn't be held back by manual work, burnout, or limited resources. We saw how time and energy were being wasted—and how automation could change everything.",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "So we built a smarter path forward—where AI doesn't just save time, it gives you freedom. Freedom to grow. To compete. To build something bigger than your bandwidth.",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: 'And this is only the beginning.',
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              title: "Your Team Isn't the Problem—Your Systems Are",
              description:
                "It's not about working harder. It's about removing what's slowing you down.",
              expandedContent: (0, a.jsxs)(w, {
                spacing: 'md',
                children: [
                  (0, a.jsx)('h4', {
                    className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                    children: "The Cost of Chaos You've Learned to Live With",
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "Most teams aren't falling short—they're buried in broken systems. Manual tasks. Constant interruptions. Endless admin.",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "It's the silent chaos you've learned to live with. And it's draining time, money, and energy every single day.",
                      }),
                      (0, a.jsx)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                        children: 'The solution:',
                      }),
                      (0, a.jsx)('div', {
                        className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                        children: (0, a.jsx)('p', {
                          className: (0, r.cn)(o.text.base, d.text.secondary),
                          children:
                            'Skyland AI replaces that chaos with flow: Automated workflows. Clean handoffs. No friction.',
                        }),
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                        children:
                          'Your team gets to focus. Your business gets to move. No burnout. No bottlenecks. Just growth without drag.',
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                        children: [
                          (0, a.jsx)('span', {
                            className: 'inline-block mr-2',
                            children: '\uD83D\uDC49',
                          }),
                          ' Talk to Dana to see what you could stop doing—starting today.',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              title: 'From Chaos to Control—In Days, Not Months',
              description: 'Get your time, team, and sanity back—without adding complexity.',
              expandedContent: (0, a.jsxs)(w, {
                spacing: 'md',
                children: [
                  (0, a.jsx)('h4', {
                    className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                    children: 'This Is What It Feels Like When Business Just Works',
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          'No more firefighting. No more missed messages. No more lost opportunities.',
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          'Skyland AI replaces chaos with calm—automating repetitive tasks, syncing systems, and making everything run exactly the way it should.',
                      }),
                      (0, a.jsx)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                        children: 'The result?',
                      }),
                      (0, a.jsx)('div', {
                        className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                        children: (0, a.jsx)('p', {
                          className: (0, r.cn)(o.text.base, d.text.secondary),
                          children:
                            'Your team moves faster. Your clients get answers. And you finally get to run your business—not chase it.',
                        }),
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                        children: [
                          (0, a.jsx)('span', {
                            className: 'inline-block mr-2',
                            children: '\uD83D\uDC49',
                          }),
                          ' Talk to Dana to see how fast clarity can replace chaos.',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            {
              title: 'There Was Before AI—And Then the World Changed',
              description: 'This is the revolution—and those who act will lead it',
              expandedContent: (0, a.jsxs)(w, {
                spacing: 'md',
                children: [
                  (0, a.jsx)('h4', {
                    className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                    children: "This Shift Is Bigger Than Any One Tool—It's a New Era",
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: "Change is never easy—but it's always inevitable.",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "We're entering a new era of business—faster, smarter, more automated. And the gap is growing between those who embrace it and those who resist it.",
                      }),
                      (0, a.jsx)('h5', {
                        className: (0, r.cn)(o.heading.h5, d.text.primary, 'font-normal', 'mt-4'),
                        children: 'The opportunity:',
                      }),
                      (0, a.jsxs)('div', {
                        className: (0, r.cn)(i.stack.sm, 'ml-2 border-l-2 border-blue-500/40 pl-4'),
                        children: [
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              "AI isn't just about saving time. It's about staying relevant. About building systems that scale without stress.",
                          }),
                          (0, a.jsx)('p', {
                            className: (0, r.cn)(o.text.base, d.text.secondary),
                            children:
                              "Skyland helps you step confidently into what's next—without overwhelm, without guesswork.",
                          }),
                        ],
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary, 'mt-4'),
                        children:
                          "Because the future doesn't wait. But with the right systems in place, neither do you.",
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                        children: [
                          (0, a.jsx)('span', {
                            className: 'inline-block mr-2',
                            children: '\uD83D\uDC49',
                          }),
                          ' Talk to Dana and take your first step into the after-AI era.',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
          ];
        return (0, a.jsx)(j, {
          id: 'about',
          className: (0, r.cn)(i.section.base, i.padding.section, l.glass, t),
          ariaLabel: 'About Skyland AI',
          children: (0, a.jsxs)(w, {
            spacing: 'lg',
            maxWidth: '2xl',
            className: (0, r.cn)(i.section.padding),
            children: [
              (0, a.jsxs)(w, {
                spacing: 'md',
                className: (0, r.cn)(i.alignment.center),
                children: [
                  (0, a.jsx)('h2', {
                    className: (0, r.cn)(o.heading.h2, d.text.primary, 'font-normal'),
                    children: "What's Really Holding Your Business Back?",
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, i.stack.md),
                    children:
                      "It's not a lack of leads—it's the silent drain of repetitive tasks, manual work, and slow response times.",
                  }),
                ],
              }),
              (0, a.jsx)(W, {
                columns: 'two',
                gap: 'lg',
                ariaLabel: 'Features Grid',
                children: s.map((e, t) =>
                  (0, a.jsx)(
                    'div',
                    {
                      className: (0, r.cn)(i.flex.col),
                      children: (0, a.jsx)(A, {
                        title: e.title,
                        description: e.description,
                        expandedContent: e.expandedContent,
                        className: (0, r.cn)(
                          l.hover.scale,
                          l.transition.base,
                          'bg-white/5',
                          l.shadow.card,
                          c.lg
                        ),
                        ariaLabel: ''.concat(e.title, ' feature card'),
                      }),
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
      }
      let P = [
        {
          id: 'value',
          title: 'No Fixed Pricing—Just Real Results',
          description: 'Every business is different. So is every price.',
          modalContent: (0, a.jsxs)(w, {
            spacing: 'md',
            children: [
              (0, a.jsx)('h4', {
                className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                children: 'A Simple Model That Puts Results First',
              }),
              (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.md),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      "We don't do fixed prices. You pay based on the value we create. Here's how it works:",
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.sm),
                    children: [
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: [
                          '• You pay a ',
                          (0, a.jsx)('strong', { children: '10–15% deposit' }),
                          ' to get started.',
                        ],
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: '• We build and deliver a working system.',
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: [
                          '• You test it for ',
                          (0, a.jsx)('strong', { children: 'two full weeks—risk-free.' }),
                        ],
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "• If you're happy, you pay the rest and start your monthly plan.",
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "• If not, you walk away. The deposit is non-refundable, but there's no further cost.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)('p', {
                    className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                    children: [
                      (0, a.jsx)('span', {
                        className: 'inline-block mr-2',
                        children: '\uD83D\uDC49',
                      }),
                      ' Book a free call to see what your custom solution could look like.',
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        {
          id: 'roi',
          title: "It's Not About Cost—It's About Value",
          description: "What matters isn't what it costs. It's what it earns.",
          modalContent: (0, a.jsxs)(w, {
            spacing: 'md',
            children: [
              (0, a.jsx)('h4', {
                className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                children: 'Every Project Is Tailored Around ROI',
              }),
              (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.md),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      "Skyland AI isn't a standard product—it's a custom solution built to generate measurable results.",
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.sm, 'mt-4'),
                    children: [
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: [
                          'Some clients save ',
                          (0, a.jsx)('strong', { children: '10+ hours a week' }),
                          '.',
                        ],
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: 'Others double their conversion rates.',
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: 'A few do both—and more.',
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.sm, 'mt-4'),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: "That's why we don't publish prices.",
                      }),
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: [
                          'We design solutions around ',
                          (0, a.jsx)('strong', { children: 'what your business stands to gain' }),
                          '—not just what they cost.',
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)('p', {
                    className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                    children: [
                      (0, a.jsx)('span', {
                        className: 'inline-block mr-2',
                        children: '\uD83D\uDC49',
                      }),
                      " Curious what's possible for your business? Let's talk.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        {
          id: 'trial',
          title: 'Try It First. Decide Later',
          description: 'No pressure. No risk. Just results.',
          modalContent: (0, a.jsxs)(w, {
            spacing: 'md',
            children: [
              (0, a.jsx)('h4', {
                className: (0, r.cn)(o.heading.h4, d.text.primary, 'font-normal'),
                children: 'You Only Commit When You See the Value',
              }),
              (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.md),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children: "You shouldn't have to guess if AI will work for your business.",
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.sm, 'mt-4'),
                    children: [
                      (0, a.jsxs)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: [
                          "That's why we let you test your custom-built system for ",
                          (0, a.jsx)('strong', { children: 'two weeks' }),
                          ', in real conditions.',
                        ],
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children:
                          "You'll see what it can do—before committing to anything beyond the deposit.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.stack.sm, 'mt-4'),
                    children: [
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: 'Not impressed? You walk away.',
                      }),
                      (0, a.jsx)('p', {
                        className: (0, r.cn)(o.text.base, d.text.secondary),
                        children: "Happy? We move forward and scale what's working.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)('p', {
                    className: (0, r.cn)(o.text.base, d.text.accent, 'mt-4 flex items-center'),
                    children: [
                      (0, a.jsx)('span', {
                        className: 'inline-block mr-2',
                        children: '\uD83D\uDC49',
                      }),
                      " Schedule a free strategy call and see what's possible.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
      ];
      function _() {
        return (0, a.jsx)(j, {
          id: 'pricing',
          className: (0, r.cn)(i.section.base, i.padding.section, l.glass),
          ariaLabel: 'Pricing Options',
          children: (0, a.jsxs)(w, {
            spacing: 'lg',
            maxWidth: '2xl',
            className: (0, r.cn)(i.section.padding, 'w-full max-w-7xl'),
            children: [
              (0, a.jsxs)(w, {
                spacing: 'md',
                className: (0, r.cn)(i.alignment.center),
                children: [
                  (0, a.jsx)('h2', {
                    className: (0, r.cn)(o.heading.h2, d.text.primary, 'font-normal'),
                    children: 'AI That Pays for Itself—And Drives Real Growth',
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, i.stack.md),
                    children:
                      'See measurable savings and growth tailored to your business in just two weeks',
                  }),
                ],
              }),
              (0, a.jsx)('div', {
                className:
                  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12',
                children: P.map((e) =>
                  (0, a.jsx)(
                    'div',
                    {
                      className: (0, r.cn)(i.flex.col),
                      children: (0, a.jsx)(A, {
                        title: e.title,
                        description: e.description,
                        expandedContent: e.modalContent,
                        ariaLabel: ''.concat(e.title, ' pricing option'),
                        className: (0, r.cn)(
                          l.hover.scale,
                          l.transition.base,
                          'bg-white/5 w-full',
                          l.shadow.card,
                          c.lg
                        ),
                      }),
                    },
                    e.id
                  )
                ),
              }),
            ],
          }),
        });
      }
      function B(e) {
        let { className: t } = e,
          s = [
            {
              title: 'What exactly is Skyland AI?',
              description: '',
              expandedContent: (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.lg),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary),
                    children:
                      'Skyland AI builds tailored automation systems using AI. From voice agents and chatbots to workflow automation and lead qualification—we design intelligent tools to save you time and grow your business, fast.',
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, 'mt-4'),
                    children: 'Our platform offers:',
                  }),
                  (0, a.jsxs)('ul', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('li', { children: 'Voice agents that handle inbound calls' }),
                      (0, a.jsx)('li', { children: 'Chatbots that answer customer questions' }),
                      (0, a.jsx)('li', { children: 'Booking systems and reminders' }),
                      (0, a.jsx)('li', { children: 'Lead capture and qualification' }),
                      (0, a.jsx)('li', { children: 'Internal process automation' }),
                    ],
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      "We always start by identifying what's slowing you down—then we build a system that handles it.",
                  }),
                ],
              }),
            },
            {
              title: 'How much does it cost?',
              description: '',
              expandedContent: (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.lg),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary),
                    children:
                      "It depends on what we build for you. There's no fixed pricing—just value-driven pricing based on your needs.",
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, 'mt-4'),
                    children: "Here's how it works:",
                  }),
                  (0, a.jsxs)('ul', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsxs)('li', {
                        children: [
                          'You pay a ',
                          (0, a.jsx)('strong', { children: '10–15% deposit' }),
                          ' to get started',
                        ],
                      }),
                      (0, a.jsxs)('li', {
                        children: [
                          'We build your solution and let you try it for ',
                          (0, a.jsx)('strong', { children: 'two full weeks, risk-free' }),
                        ],
                      }),
                      (0, a.jsx)('li', {
                        children:
                          "If you're happy, you pay the rest and begin your monthly subscription",
                      }),
                      (0, a.jsx)('li', {
                        children:
                          "If not, you walk away. The deposit is non-refundable, but there's no ongoing cost",
                      }),
                    ],
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      "Our pricing model ensures you only pay for the value we deliver, making it a risk-free investment in your business's future.",
                  }),
                ],
              }),
            },
            {
              title: 'How does the trial actually work?',
              description: '',
              expandedContent: (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.lg),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary),
                    children:
                      'After the strategy call, we build a working version tailored to your business. You test it in real conditions for two weeks—no sandbox, no fake data.',
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, 'mt-4'),
                    children: 'At the end of the trial, you decide:',
                  }),
                  (0, a.jsxs)('ul', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('li', { children: '✅ Move forward and scale' }),
                      (0, a.jsx)('li', { children: '❌ Walk away (no additional cost)' }),
                    ],
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      'This risk-free approach lets you see exactly what our AI solutions can do for your specific business before making a full commitment.',
                  }),
                ],
              }),
            },
            {
              title: 'What kinds of things can you automate?',
              description: '',
              expandedContent: (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.lg),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary),
                    children:
                      "Plenty. From customer interactions to internal workflows, we can automate virtually any repetitive process that's eating up your time.",
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, 'mt-4'),
                    children: 'Common use cases include:',
                  }),
                  (0, a.jsxs)('ul', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('li', { children: 'Voice agents that handle inbound calls' }),
                      (0, a.jsx)('li', { children: 'Chatbots that answer customer questions' }),
                      (0, a.jsx)('li', { children: 'Booking systems and reminders' }),
                      (0, a.jsx)('li', { children: 'Lead capture and qualification' }),
                      (0, a.jsx)('li', { children: 'Internal process automation' }),
                    ],
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      "We always start by identifying what's slowing you down—then we build a system that handles it.",
                  }),
                ],
              }),
            },
            {
              title: 'How fast can I get started?',
              description: '',
              expandedContent: (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.lg),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary),
                    children:
                      'Very. Once your strategy call is done and the plan is approved, we usually deliver a working system within a few days.',
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, 'mt-4'),
                    children: 'Our streamlined process includes:',
                  }),
                  (0, a.jsxs)('ul', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('li', {
                        children: 'Initial strategy call to understand your needs',
                      }),
                      (0, a.jsx)('li', { children: 'Custom solution design (1-2 days)' }),
                      (0, a.jsx)('li', { children: 'Development and implementation (a few days)' }),
                      (0, a.jsx)('li', { children: 'Your two-week trial period' }),
                    ],
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      "Then you test it for two weeks and decide what's next. The entire process is designed to get you results fast.",
                  }),
                ],
              }),
            },
            {
              title: 'Will this replace my team?',
              description: '',
              expandedContent: (0, a.jsxs)('div', {
                className: (0, r.cn)(i.stack.lg),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary),
                    children:
                      "No—it makes them faster. Skyland AI doesn't replace people. It eliminates repetitive, low-value tasks so your team can focus on what matters.",
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, 'mt-4'),
                    children: 'Our AI solutions help your team by:',
                  }),
                  (0, a.jsxs)('ul', {
                    className: (0, r.cn)(i.stack.md),
                    children: [
                      (0, a.jsx)('li', { children: 'Handling repetitive tasks automatically' }),
                      (0, a.jsx)('li', { children: 'Reducing manual data entry and processing' }),
                      (0, a.jsx)('li', { children: 'Freeing up time for high-value work' }),
                      (0, a.jsx)('li', { children: 'Supporting decision-making with better data' }),
                      (0, a.jsx)('li', {
                        children: 'Scaling their efforts without increasing workload',
                      }),
                    ],
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children:
                      'Think of Skyland AI as giving your team superpowers—not replacing them. The goal is to make them more effective, not obsolete.',
                  }),
                ],
              }),
            },
          ];
        return (0, a.jsx)(j, {
          id: 'faq',
          className: (0, r.cn)(i.section.base, i.padding.section, l.glass, t),
          ariaLabel: 'Frequently Asked Questions',
          children: (0, a.jsxs)(w, {
            spacing: 'lg',
            maxWidth: '2xl',
            className: (0, r.cn)(i.section.padding),
            children: [
              (0, a.jsxs)(w, {
                spacing: 'md',
                className: (0, r.cn)(i.alignment.center),
                children: [
                  (0, a.jsx)('h2', {
                    className: (0, r.cn)(o.heading.h2, d.text.primary, 'font-normal'),
                    children: 'Frequently Asked Questions',
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, i.stack.md),
                    children: 'Straight answers about how Skyland AI works for your business',
                  }),
                ],
              }),
              (0, a.jsx)(W, {
                columns: 'two',
                gap: 'lg',
                ariaLabel: 'FAQ Grid',
                children: s.map((e) =>
                  (0, a.jsx)(
                    A,
                    {
                      title: e.title,
                      description: e.description,
                      expandedContent: e.expandedContent,
                      ariaLabel: 'FAQ: '.concat(e.title),
                      variant: 'three',
                      centerText: !0,
                    },
                    e.title
                  )
                ),
              }),
            ],
          }),
        });
      }
      let H = (0, n.forwardRef)((e, t) => {
        let { children: s, required: n, className: i, ...l } = e;
        return (0, a.jsxs)('label', {
          ref: t,
          className: (0, r.cn)(o.text.base, d.text.primary, 'flex items-center gap-1', i),
          ...l,
          children: [
            s,
            n &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)('span', {
                    className: d.text.accent,
                    'aria-hidden': 'true',
                    children: '*',
                  }),
                  (0, a.jsx)('span', { className: 'sr-only', children: 'required' }),
                ],
              }),
          ],
        });
      });
      H.displayName = 'Label';
      let R = (e) => {
          let { children: t, id: s, className: n } = e;
          return (0, a.jsx)('div', {
            id: s,
            role: 'alert',
            'aria-live': 'assertive',
            className: (0, r.cn)(o.text.sm, d.text.error, i.stack.xs, n),
            children: t,
          });
        },
        M = (0, n.forwardRef)((e, t) => {
          let {
              label: s,
              error: n,
              description: m,
              className: h,
              inputClassName: u,
              labelClassName: x,
              errorClassName: p,
              descriptionClassName: g,
              hideLabel: y = !1,
              required: b = !1,
              'aria-label': f,
              'aria-describedby': w,
              id: j,
              ...N
            } = e,
            v = j || (null == s ? void 0 : s.toLowerCase().replace(/\s+/g, '-')) || 'input',
            k = ''.concat(v, '-description'),
            A = ''.concat(v, '-error');
          return (0, a.jsxs)('div', {
            className: (0, r.cn)(i.flex.col, i.gap.xs, h),
            children: [
              s &&
                !y &&
                (0, a.jsx)(H, {
                  htmlFor: v,
                  required: b,
                  className: (0, r.cn)(o.text.base, x),
                  children: s,
                }),
              (0, a.jsx)('input', {
                ref: t,
                id: v,
                'aria-label': y ? s : f,
                'aria-describedby': (0, r.cn)(m && k, n && A, w),
                'aria-invalid': !!n,
                required: b,
                className: (0, r.cn)(
                  i.padding.sm,
                  o.text.base,
                  d.text.primary,
                  d.surface.card,
                  d.text.primary,
                  c.md,
                  l.transition.base,
                  l.interaction.focus.primary,
                  n && d.text.error,
                  u
                ),
                ...N,
              }),
              m &&
                !n &&
                (0, a.jsx)('p', {
                  id: k,
                  className: (0, r.cn)(o.text.sm, d.text.secondary, g),
                  children: m,
                }),
              n && (0, a.jsx)(R, { id: A, className: (0, r.cn)(o.text.sm, p), children: n }),
            ],
          });
        });
      M.displayName = 'InputField';
      let z = p(M, 'InputField', ['spacing', 'typography', 'colors', 'effects', 'radius']);
      var O = s(257);
      function G(e) {
        let t = O.env[e];
        if (!t) throw Error('Missing required environment variable: '.concat(e));
        return t;
      }
      class V extends Error {
        constructor(e, t, s) {
          super(e), (this.statusCode = t), (this.response = s), (this.name = 'WebhookError');
        }
      }
      let J = { maxAttempts: 3, initialDelay: 1e3, maxDelay: 1e4, backoffFactor: 2 };
      async function U(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      async function Q(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = { ...J, ...t },
          a = null,
          n = s.initialDelay;
        for (let t = 1; t <= s.maxAttempts; t++)
          try {
            return await e();
          } catch (e) {
            if (((a = e), t === s.maxAttempts)) break;
            await U(n), (n = Math.min(n * s.backoffFactor, s.maxDelay));
          }
        throw a || Error('Operation failed after retries');
      }
      async function Z(e, t) {
        let s = await fetch(e, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'User-Agent': 'Skyland-Website/1.0' },
          body: JSON.stringify(t),
        });
        if (!s.ok) {
          let e;
          try {
            e = await s.json();
          } catch (t) {
            e = await s.text();
          }
          throw new V('Webhook request failed', s.status, e);
        }
        return s;
      }
      let K = {
        async sendContactForm(e) {
          let t = G('NEXT_PUBLIC_VITE_N8N_WEBHOOK_URL'),
            s = {
              data: e,
              conversationId: 'contact-'.concat(Date.now()),
              timestamp: new Date().toISOString(),
              source: 'website_contact_form',
            };
          return await Q(() => Z(t, s));
        },
        async sendDanaConversation(e) {
          let t = G('DANA_WEBHOOK_URL'),
            s = {
              data: e,
              conversationId: 'dana-'.concat(Date.now()),
              timestamp: new Date().toISOString(),
              source: 'dana_voice_agent',
            };
          return await Q(() => Z(t, s));
        },
      };
      var X = s(1229);
      let $ = X.z.object({
        name: X.z
          .string()
          .min(2, 'Name must be at least 2 characters')
          .max(100, 'Name must be less than 100 characters'),
        email: X.z
          .string()
          .email('Invalid email address')
          .max(100, 'Email must be less than 100 characters'),
        phone: X.z
          .string()
          .min(8, 'Phone number must be at least 8 characters')
          .max(20, 'Phone number must be less than 20 characters')
          .regex(/^[+\d\s-()]+$/, 'Invalid phone number format'),
        website: X.z
          .string()
          .url('Invalid website URL')
          .max(200, 'Website URL must be less than 200 characters')
          .optional()
          .default(''),
        message: X.z
          .string()
          .min(10, 'Message must be at least 10 characters')
          .max(1e3, 'Message must be less than 1000 characters'),
      });
      class ee extends Error {
        constructor(e) {
          super('Validation failed'), (this.errors = e), (this.name = 'ValidationError');
        }
      }
      let et = { name: '', email: '', phone: '', website: '', message: '' };
      function es() {
        let [e, t] = (0, n.useState)(et),
          [s, m] = (0, n.useState)({ status: 'idle', errors: {} }),
          h = (e) => {
            let t = {};
            e.errors.errors.forEach((e) => {
              e.path && (t[e.path[0]] = e.message);
            }),
              m((e) => ({ ...e, status: 'error', errors: t }));
          },
          u = (e) => {
            m((e) => ({
              ...e,
              status: 'error',
              generalError: 'Failed to send message. Please try again or contact us directly.',
            })),
              console.error('Webhook error:', e);
          },
          x = async (s) => {
            s.preventDefault(), m({ status: 'submitting', errors: {} });
            try {
              let s = (function (e) {
                try {
                  return $.parse(e);
                } catch (e) {
                  if (e instanceof X.z.ZodError) throw new ee(e);
                  throw e;
                }
              })(e);
              await K.sendContactForm(s), m({ status: 'success', errors: {} }), t(et);
            } catch (e) {
              'ValidationError' === e.name
                ? h(e)
                : 'WebhookError' === e.name
                  ? u(e)
                  : (m((e) => ({
                      ...e,
                      status: 'error',
                      generalError: 'An unexpected error occurred. Please try again.',
                    })),
                    console.error('Unexpected error:', e));
            }
          },
          p = (e) => {
            let { name: a, value: n } = e.target;
            t((e) => ({ ...e, [a]: n })),
              s.errors[a] && m((e) => ({ ...e, errors: { ...e.errors, [a]: '' } }));
          };
        return (0, a.jsxs)('form', {
          onSubmit: x,
          className: (0, r.cn)(i.stack.md),
          'aria-busy': 'submitting' === s.status,
          children: [
            (0, a.jsx)(z, {
              label: 'Name',
              name: 'name',
              value: e.name,
              onChange: p,
              required: !0,
              disabled: 'submitting' === s.status,
              error: s.errors.name,
              'aria-invalid': !!s.errors.name,
              'aria-describedby': s.errors.name ? 'name-error' : void 0,
            }),
            (0, a.jsx)(z, {
              label: 'Email',
              name: 'email',
              type: 'email',
              value: e.email,
              onChange: p,
              required: !0,
              disabled: 'submitting' === s.status,
              error: s.errors.email,
              'aria-invalid': !!s.errors.email,
              'aria-describedby': s.errors.email ? 'email-error' : void 0,
            }),
            (0, a.jsx)(z, {
              label: 'Phone',
              name: 'phone',
              type: 'tel',
              value: e.phone,
              onChange: p,
              required: !0,
              disabled: 'submitting' === s.status,
              error: s.errors.phone,
              'aria-invalid': !!s.errors.phone,
              'aria-describedby': s.errors.phone ? 'phone-error' : void 0,
            }),
            (0, a.jsx)(z, {
              label: 'Website (optional)',
              name: 'website',
              type: 'url',
              value: e.website,
              onChange: p,
              disabled: 'submitting' === s.status,
              error: s.errors.website,
              'aria-invalid': !!s.errors.website,
              'aria-describedby': s.errors.website ? 'website-error' : void 0,
            }),
            (0, a.jsxs)('div', {
              className: i.stack.sm,
              children: [
                (0, a.jsx)('label', {
                  htmlFor: 'message',
                  className: (0, r.cn)(o.text.base, d.text.primary),
                  children: 'Message',
                }),
                (0, a.jsx)('textarea', {
                  id: 'message',
                  name: 'message',
                  value: e.message,
                  onChange: p,
                  required: !0,
                  disabled: 'submitting' === s.status,
                  rows: 4,
                  className: (0, r.cn)(
                    o.text.base,
                    d.text.primary,
                    l.glass.light,
                    c.md,
                    'w-full p-3 resize-none',
                    'focus:outline-none focus:ring-2 focus:ring-primary/50',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    s.errors.message && 'border-red-500'
                  ),
                  'aria-invalid': !!s.errors.message,
                  'aria-describedby': s.errors.message ? 'message-error' : void 0,
                }),
                s.errors.message &&
                  (0, a.jsx)('p', {
                    id: 'message-error',
                    className: (0, r.cn)(o.text.sm, d.text.error),
                    children: s.errors.message,
                  }),
              ],
            }),
            s.generalError &&
              (0, a.jsx)('div', {
                role: 'alert',
                className: (0, r.cn)(
                  o.text.base,
                  d.text.error,
                  'text-center p-4',
                  l.glass.light,
                  c.md
                ),
                children: s.generalError,
              }),
            'success' === s.status &&
              (0, a.jsxs)('div', {
                role: 'alert',
                className: (0, r.cn)('text-center p-4', l.glass.light, c.md, i.stack.sm),
                children: [
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.success, 'font-semibold'),
                    children: 'Thank you for your message!',
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.base, d.text.secondary),
                    children: "We'll get back to you as soon as possible.",
                  }),
                ],
              }),
            (0, a.jsx)('button', {
              type: 'submit',
              disabled: 'submitting' === s.status,
              className: (0, r.cn)(
                o.buttonText,
                d.text.primary,
                l.glass.lighter,
                l.hover.scale,
                c.lg,
                'w-full px-6 py-3',
                'focus:outline-none focus:ring-2 focus:ring-primary/50',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'submitting' === s.status && 'animate-pulse'
              ),
              'aria-disabled': 'submitting' === s.status,
              children: 'submitting' === s.status ? 'Sending...' : 'Send Message',
            }),
          ],
        });
      }
      function ea(e) {
        let { className: t } = e;
        return (0, a.jsx)(j, {
          id: 'contact',
          className: (0, r.cn)(i.section.base, i.padding.section, t),
          ariaLabel: 'Contact',
          children: (0, a.jsxs)(w, {
            spacing: 'lg',
            maxWidth: '2xl',
            className: (0, r.cn)(i.section.padding, 'w-full max-w-4xl'),
            children: [
              (0, a.jsxs)(w, {
                spacing: 'md',
                className: (0, r.cn)(i.alignment.center),
                children: [
                  (0, a.jsx)('h2', {
                    className: (0, r.cn)(o.heading.h2, d.text.primary, 'font-normal'),
                    children: "Let's Talk",
                  }),
                  (0, a.jsx)('p', {
                    className: (0, r.cn)(o.text.lg, d.text.secondary, i.stack.md),
                    children: "We'll get back to you within 24 hours",
                  }),
                ],
              }),
              (0, a.jsx)(es, {}),
            ],
          }),
        });
      }
      var en = s(7648),
        er = s(3774),
        ei = s(9345),
        el = s(3041),
        eo = s(598);
      function ec(e) {
        let { className: t } = e,
          s = new Date().getFullYear();
        return (0, a.jsx)('footer', {
          className: (0, r.cn)('w-full border-t border-white/10', 'bg-zinc-900/50', 'py-10'),
          children: (0, a.jsxs)('div', {
            className: 'max-w-7xl mx-auto px-6 md:px-8 lg:px-10',
            children: [
              (0, a.jsxs)('div', {
                className: 'grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12',
                children: [
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.flex.col, i.gap.md),
                    children: [
                      (0, a.jsxs)(en.default, {
                        href: '/',
                        className: (0, r.cn)(i.flex.row, i.gap.sm, 'group', l.hover.opacity),
                        children: [
                          (0, a.jsx)(C.Z, {
                            className: (0, r.cn)(o.icon.md, d.text.primary, l.transition.base),
                          }),
                          (0, a.jsx)('span', {
                            className: (0, r.cn)(o.logo, d.text.primary, l.transition.base),
                            children: 'SKYLAND AI',
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className: (0, r.cn)(i.flex.col, i.gap.sm),
                        children: [
                          (0, a.jsxs)('div', {
                            className: (0, r.cn)(i.flex.row, i.gap.sm, 'items-center'),
                            children: [
                              (0, a.jsx)(er.Z, {
                                className: (0, r.cn)(o.icon.sm, d.text.secondary),
                              }),
                              (0, a.jsx)('span', {
                                className: (0, r.cn)(o.text.sm, d.text.secondary),
                                children: 'Gothenburg, Sweden',
                              }),
                            ],
                          }),
                          (0, a.jsxs)('div', {
                            className: (0, r.cn)(i.flex.row, i.gap.sm, 'items-center'),
                            children: [
                              (0, a.jsx)(ei.Z, {
                                className: (0, r.cn)(o.icon.sm, d.text.secondary),
                              }),
                              (0, a.jsx)('a', {
                                href: 'mailto:info@skylandai.se',
                                className: (0, r.cn)(
                                  o.text.sm,
                                  d.text.secondary,
                                  'hover:text-white',
                                  l.transition.colors
                                ),
                                children: 'info@skylandai.se',
                              }),
                            ],
                          }),
                          (0, a.jsxs)('div', {
                            className: (0, r.cn)(i.flex.row, i.gap.sm, 'items-center'),
                            children: [
                              (0, a.jsx)(el.Z, {
                                className: (0, r.cn)(o.icon.sm, d.text.secondary),
                              }),
                              (0, a.jsx)('a', {
                                href: 'tel:+46737329083',
                                className: (0, r.cn)(
                                  o.text.sm,
                                  d.text.secondary,
                                  'hover:text-white',
                                  l.transition.colors
                                ),
                                children: '+46 737 329 083',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.flex.col, i.gap.md),
                    children: [
                      (0, a.jsx)('h3', {
                        className: (0, r.cn)(o.text.base, d.text.primary, 'font-medium'),
                        children: 'Quick Links',
                      }),
                      (0, a.jsx)('nav', {
                        className: (0, r.cn)(i.flex.col, i.gap.sm),
                        children: [
                          { href: '#about', label: 'About' },
                          { href: '#pricing', label: 'Pricing' },
                          { href: '#contact', label: 'Contact' },
                        ].map((e) =>
                          (0, a.jsx)(
                            en.default,
                            {
                              href: e.href,
                              className: (0, r.cn)(
                                o.text.sm,
                                d.text.secondary,
                                'hover:text-white',
                                l.transition.colors
                              ),
                              children: e.label,
                            },
                            e.href
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.flex.col, i.gap.md),
                    children: [
                      (0, a.jsx)('h3', {
                        className: (0, r.cn)(o.text.base, d.text.primary, 'font-medium'),
                        children: 'Connect',
                      }),
                      (0, a.jsx)('div', {
                        className: (0, r.cn)(i.flex.col, i.gap.sm),
                        children: (0, a.jsxs)('a', {
                          href: 'https://linkedin.com/company/skylandai',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className: (0, r.cn)(
                            i.flex.row,
                            i.gap.sm,
                            o.text.sm,
                            d.text.secondary,
                            'hover:text-white items-center',
                            l.transition.colors
                          ),
                          children: [
                            (0, a.jsx)(eo.Z, { className: o.icon.sm }),
                            'Follow us on LinkedIn',
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)('div', {
                className: (0, r.cn)(
                  i.flex.col,
                  'md:flex-row md:justify-between',
                  'pt-6 mt-6 border-t border-white/10',
                  i.gap.md
                ),
                children: [
                  (0, a.jsxs)('p', {
                    className: (0, r.cn)(o.text.xs, d.text.secondary),
                    children: ['\xa9 ', s, ' Skyland AI. All rights reserved.'],
                  }),
                  (0, a.jsxs)('div', {
                    className: (0, r.cn)(i.flex.row, i.gap.md),
                    children: [
                      (0, a.jsx)(en.default, {
                        href: '/privacy',
                        className: (0, r.cn)(
                          o.text.xs,
                          d.text.secondary,
                          'hover:text-white',
                          l.transition.colors
                        ),
                        children: 'Privacy Policy',
                      }),
                      (0, a.jsx)(en.default, {
                        href: '/terms',
                        className: (0, r.cn)(
                          o.text.xs,
                          d.text.secondary,
                          'hover:text-white',
                          l.transition.colors
                        ),
                        children: 'Terms of Service',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function ed() {
        let e = (0, n.useId)();
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)('main', {
            id: e,
            role: 'main',
            'aria-label': 'Page Content',
            tabIndex: -1,
            children: [
              (0, a.jsx)(D, {}),
              (0, a.jsx)(E, {}),
              (0, a.jsx)(S, {}),
              (0, a.jsx)(F, {}),
              (0, a.jsx)(T, {}),
              (0, a.jsx)(q, {}),
              (0, a.jsx)(_, {}),
              (0, a.jsx)(B, {}),
              (0, a.jsx)(ea, {}),
              (0, a.jsx)(ec, {}),
            ],
          }),
        });
      }
    },
    5210: function (e, t, s) {
      'use strict';
      s.d(t, {
        SectionProvider: function () {
          return l;
        },
        U: function () {
          return o;
        },
      });
      var a = s(7437),
        n = s(2265);
      let r = (0, n.createContext)({
          visibleSections: [],
          addSection: () => {},
          removeSection: () => {},
          isHydrated: !0,
        }),
        i = n.useLayoutEffect;
      function l(e) {
        let { children: t } = e,
          [s, l] = (0, n.useState)([]),
          [o, c] = (0, n.useState)(!0);
        i(() => (c(!0), () => c(!1)), []);
        let d = (0, n.useCallback)((e) => {
            l((t) => (t.includes(e) ? t : [...t, e]));
          }, []),
          m = (0, n.useCallback)((e) => {
            l((t) => t.filter((t) => t !== e));
          }, []);
        return (0, a.jsx)(r.Provider, {
          value: { visibleSections: s, addSection: d, removeSection: m, isHydrated: o },
          children: t,
        });
      }
      function o() {
        let e = (0, n.useContext)(r);
        if (!e) throw Error('useSectionContext must be used within a SectionProvider');
        return e;
      }
    },
    4508: function (e, t, s) {
      'use strict';
      s.d(t, {
        cn: function () {
          return r;
        },
      });
      var a = s(1994),
        n = s(3335);
      function r() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        return (0, n.m6)((0, a.W)(t));
      }
    },
  },
  function (e) {
    e.O(0, [297, 971, 117, 744], function () {
      return e((e.s = 6414));
    }),
      (_N_E = e.O());
  },
]);
