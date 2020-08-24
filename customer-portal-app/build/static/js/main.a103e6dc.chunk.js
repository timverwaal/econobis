(this['webpackJsonpcustomer-portal-app'] = this['webpackJsonpcustomer-portal-app'] || []).push([
    [0],
    {
        214: function(e, a, t) {
            e.exports = t(492);
        },
        219: function(e, a, t) {},
        222: function(e, a, t) {},
        223: function(e, a, t) {},
        265: function(e, a) {},
        492: function(e, a, t) {
            'use strict';
            t.r(a);
            var n = t(0),
                r = t.n(n),
                l = t(37),
                i = t.n(l),
                c = (t(219), t(220), t(221), t(222), t(223), t(15)),
                m = t(45),
                o = t(94),
                s = t(7),
                d = t(9),
                u = t.n(d),
                p = r.a.createContext(),
                E = '__customer-portal-econobis-token__',
                g = function(e) {
                    var a = Object(n.useState)(
                            (function() {
                                if (!window.localStorage.getItem(E)) return !1;
                                return !0;
                            })()
                        ),
                        t = Object(s.a)(a, 2),
                        l = t[0],
                        i = t[1];
                    return r.a.createElement(
                        p.Provider,
                        {
                            value: {
                                isAuth: l,
                                login: function(e, a) {
                                    var t = e.access_token;
                                    window.localStorage.removeItem(
                                        '__customer-portal-econobis-current_selected_contact__'
                                    ),
                                        window.localStorage.setItem(E, t),
                                        localStorage.setItem(
                                            '__customer-portal-econobis-last-activity__',
                                            u()().format()
                                        ),
                                        i(!0),
                                        a();
                                },
                                logout: function() {
                                    window.localStorage.removeItem(E),
                                        window.localStorage.removeItem('__customer-portal-econobis-last-activity__'),
                                        i(!1);
                                },
                            },
                        },
                        e.children
                    );
                },
                f = p.Consumer,
                h = t(203),
                b = t(21),
                v = t.n(b),
                N = t(1),
                j = t.n(N),
                y = t(17),
                S = Object(n.createContext)({ user: {}, setInitialUserData: function() {} }),
                w = function(e) {
                    var a = Object(n.useState)({}),
                        t = Object(s.a)(a, 2),
                        l = t[0],
                        i = t[1],
                        c = Object(n.useState)({}),
                        m = Object(s.a)(c, 2),
                        o = m[0],
                        d = m[1];
                    return r.a.createElement(
                        S.Provider,
                        {
                            value: {
                                user: l,
                                setInitialUserData: function(e) {
                                    i(e);
                                    var a = window.localStorage.getItem(
                                        '__customer-portal-econobis-current_selected_contact__'
                                    );
                                    if (a)
                                        if (e.id == a) d(e);
                                        else {
                                            var t = e.occupations.find(function(e) {
                                                return e.primaryContact.id == a;
                                            });
                                            d(t.primaryContact);
                                        }
                                    else {
                                        var n = e.occupations.find(function(e) {
                                            return 'organisation' === e.primaryContact.typeId;
                                        });
                                        n
                                            ? (d(n.primaryContact),
                                              window.localStorage.setItem(
                                                  '__customer-portal-econobis-current_selected_contact__',
                                                  n.primaryContact.id
                                              ))
                                            : (d(e),
                                              window.localStorage.setItem(
                                                  '__customer-portal-econobis-current_selected_contact__',
                                                  e.id
                                              ));
                                    }
                                },
                                currentSelectedContact: o,
                                switchCurrentContact: function(e) {
                                    d(e),
                                        window.localStorage.setItem(
                                            '__customer-portal-econobis-current_selected_contact__',
                                            e.id
                                        );
                                },
                                resetCurrentUserToDefault: function() {
                                    i({}), d({});
                                },
                                updateNameSelectedContact: function(e) {
                                    d(Object(y.a)({}, o, { fullName: e })), l.id === o.id && (l.fullName = e);
                                    var a = l.occupations.map(function(a) {
                                        return a.primaryContact.id === o.id && (a.primaryContact.fullName = e), a;
                                    });
                                    i(Object(y.a)({}, l, { occupations: a }));
                                },
                            },
                        },
                        e.children
                    );
                },
                k = S.Consumer,
                x = t(2),
                O = t.n(x),
                A = t(205),
                C = t.n(A),
                _ = t(213),
                I = t(34),
                z = t.n(I),
                P = t(204),
                V = t.n(P);
            var R = Object(m.g)(function(e) {
                    var a = e.location,
                        t = e.history,
                        l = Object(n.useState)(!1),
                        i = Object(s.a)(l, 2),
                        m = i[0],
                        o = i[1];
                    function d() {
                        o(!1);
                    }
                    function u(e) {
                        t.push('/'.concat(e));
                    }
                    return (
                        (function(e) {
                            function a(a) {
                                e.current && !e.current.contains(a.target) && o(!1);
                            }
                            Object(n.useEffect)(function() {
                                return (
                                    document.addEventListener('mousedown', a),
                                    function() {
                                        document.removeEventListener('mousedown', a);
                                    }
                                );
                            });
                        })(Object(n.useRef)(null)),
                        r.a.createElement(
                            'header',
                            null,
                            r.a.createElement(
                                'div',
                                { className: 'header-portal' },
                                r.a.createElement(
                                    'div',
                                    { className: 'profile-pic' },
                                    r.a.createElement(k, null, function(e) {
                                        var a = e.currentSelectedContact;
                                        return r.a.createElement(
                                            'p',
                                            { className: 'profile-title' },
                                            V()(
                                                (function(e) {
                                                    if (e) {
                                                        if (e.search(',') < 0) return e.replace(/\s(?=\S*$)/, '<br>');
                                                        var a = e.slice(e.search(',') + 2),
                                                            t = e.slice(0, e.search(','));
                                                        return a + '<br>' + (t = t.replace(/\s(?=\S*$)/, '<br>'));
                                                    }
                                                    return '?';
                                                })(a.fullName)
                                            )
                                        );
                                    })
                                ),
                                r.a.createElement(
                                    v.a,
                                    null,
                                    r.a.createElement(
                                        j.a,
                                        null,
                                        r.a.createElement(
                                            O.a,
                                            { xs: 6 },
                                            r.a.createElement(
                                                'div',
                                                { className: 'header-logo' },
                                                r.a.createElement(C.a, { src: 'images/logo.png' })
                                            )
                                        ),
                                        r.a.createElement(
                                            O.a,
                                            { xs: 6 },
                                            r.a.createElement(
                                                'div',
                                                { className: 'd-flex justify-content-end' },
                                                r.a.createElement(
                                                    'div',
                                                    {
                                                        className: 'bm-burger-button',
                                                        onClick: function() {
                                                            o(!0);
                                                        },
                                                    },
                                                    r.a.createElement(
                                                        'span',
                                                        null,
                                                        r.a.createElement('span', {
                                                            className: 'bm-burger-bars bm-burger-bar-1',
                                                        }),
                                                        r.a.createElement('span', {
                                                            className: 'bm-burger-bars bm-burger-bar-2',
                                                        }),
                                                        r.a.createElement('span', {
                                                            className: 'bm-burger-bars bm-burger-bar-3',
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(f, null, function(e) {
                                                    var a = e.logout;
                                                    return r.a.createElement(k, null, function(e) {
                                                        var t = e.user,
                                                            n = e.currentSelectedContact,
                                                            l = e.switchCurrentContact,
                                                            i = e.resetCurrentUserToDefault;
                                                        return r.a.createElement(
                                                            z.a,
                                                            { alignRight: !0 },
                                                            r.a.createElement(
                                                                z.a.Toggle,
                                                                null,
                                                                r.a.createElement(_.a, null)
                                                            ),
                                                            r.a.createElement(
                                                                z.a.Menu,
                                                                null,
                                                                r.a.createElement(z.a.Header, null, 'Ingelogd als'),
                                                                r.a.createElement(
                                                                    z.a.Item,
                                                                    { disabled: !0 },
                                                                    t.fullName
                                                                ),
                                                                r.a.createElement(
                                                                    z.a.Item,
                                                                    null,
                                                                    r.a.createElement(
                                                                        c.b,
                                                                        {
                                                                            to: '/wijzig-inloggegevens',
                                                                            className: 'dropdown-link',
                                                                        },
                                                                        'Wijzig inloggegevens'
                                                                    )
                                                                ),
                                                                r.a.createElement(z.a.Divider, null),
                                                                r.a.createElement(z.a.Header, null, 'Beheren van'),
                                                                r.a.createElement(
                                                                    z.a.Item,
                                                                    {
                                                                        onClick: function() {
                                                                            l(t), u('gegevens');
                                                                        },
                                                                        active: n.id === t.id,
                                                                    },
                                                                    t.fullName
                                                                ),
                                                                t.occupations
                                                                    ? t.occupations.map(function(e) {
                                                                          return ('organisation' ===
                                                                              e.primaryContact.typeId &&
                                                                              e.primary) ||
                                                                              ('person' === e.primaryContact.typeId &&
                                                                                  e.occupation.occupationForPortal)
                                                                              ? r.a.createElement(
                                                                                    z.a.Item,
                                                                                    {
                                                                                        key: e.id,
                                                                                        onClick: function() {
                                                                                            l(e.primaryContact),
                                                                                                u('gegevens');
                                                                                        },
                                                                                        active:
                                                                                            n.id ===
                                                                                            e.primaryContact.id,
                                                                                    },
                                                                                    e.primaryContact.fullName
                                                                                )
                                                                              : null;
                                                                      })
                                                                    : null,
                                                                r.a.createElement(z.a.Divider, null),
                                                                r.a.createElement(
                                                                    z.a.Item,
                                                                    {
                                                                        onClick: function() {
                                                                            a(), i();
                                                                        },
                                                                    },
                                                                    'Log uit'
                                                                )
                                                            )
                                                        );
                                                    });
                                                })
                                            )
                                        )
                                    )
                                )
                            ),
                            r.a.createElement(
                                h.slide,
                                {
                                    right: !0,
                                    width: '300px',
                                    isOpen: m,
                                    onStateChange: function(e) {
                                        return (function(e) {
                                            o(e.isOpen);
                                        })(e);
                                    },
                                    customBurgerIcon: !1,
                                },
                                r.a.createElement(
                                    'div',
                                    { className: 'sidebar-menu' },
                                    r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement('h6', { className: 'heading in-menu' }, 'MENU'),
                                        r.a.createElement(
                                            c.b,
                                            {
                                                to: '/inschrijvingen-projecten',
                                                className: 'nav-link w-nav-link w--nav-link-open '.concat(
                                                    '/inschrijvingen-projecten' === a.pathname ? 'w--current' : ''
                                                ),
                                                onClick: d,
                                            },
                                            'Huidige deelnames'
                                        ),
                                        r.a.createElement(
                                            c.b,
                                            {
                                                to: '/gegevens',
                                                className: 'nav-link w-nav-link w--nav-link-open '.concat(
                                                    '/gegevens' === a.pathname ? 'w--current' : ''
                                                ),
                                                onClick: d,
                                            },
                                            'Gegevens'
                                        ),
                                        r.a.createElement(
                                            c.b,
                                            {
                                                to: '/inschrijven-projecten',
                                                className: 'nav-link w-nav-link w--nav-link-open '.concat(
                                                    '/inschrijven-projecten' === a.pathname ? 'w--current' : ''
                                                ),
                                                onClick: d,
                                            },
                                            'Inschrijven projecten'
                                        )
                                    )
                                )
                            )
                        )
                    );
                }),
                F = t(27),
                T = t.n(F),
                L = window.__SERVER_DATA__.base_url,
                M = T.a.create({ baseURL: ''.concat(L) });
            M.interceptors.request.use(
                function(e) {
                    !(function() {
                        var e = u()(localStorage.getItem('__customer-portal-econobis-last-activity__'));
                        !localStorage.getItem('__customer-portal-econobis-last-activity__') ||
                        e.add('30', 'minutes').format() < u()().format()
                            ? '#/login' !== window.location.hash &&
                              '#/loguit' !== window.location.hash &&
                              setTimeout(function() {
                                  localStorage.removeItem('__customer-portal-econobis-token__'),
                                      localStorage.removeItem('__customer-portal-econobis-last-activity__'),
                                      window.location.reload();
                              }, 100)
                            : localStorage.setItem('__customer-portal-econobis-last-activity__', u()().format());
                    })();
                    var a = 'Bearer ' + localStorage.getItem('__customer-portal-econobis-token__');
                    return (e.headers.Authorization = a), e;
                },
                function(e) {
                    return Promise.reject(e);
                }
            );
            var q = M,
                D = function() {
                    return q.get('/me', {
                        params: {
                            jory: {
                                fld: [
                                    'id',
                                    'number',
                                    'fullName',
                                    'iban',
                                    'ibanAttn',
                                    'didAgreeAvg',
                                    'dateDidAgreeAvg',
                                    'addressLines',
                                ],
                                rlt: {
                                    occupations: {
                                        fld: ['id', 'occupationId', 'primaryContactId', 'contactId', 'primary'],
                                        rlt: {
                                            occupation: {
                                                fld: [
                                                    'id',
                                                    'primaryOccupation',
                                                    'secondaryOccupation',
                                                    'occupationForPortal',
                                                ],
                                            },
                                            primaryContact: { fld: ['id', 'fullName', 'typeId'] },
                                            contact: { fld: ['id', 'fullName'] },
                                        },
                                    },
                                },
                            },
                        },
                    });
                },
                B = function() {
                    return q.get('/portal-user-email');
                },
                G = function(e) {
                    return q.post('/portal-user/change-email', e);
                },
                W = function(e) {
                    return q.post('/portal-user/change-password', e);
                },
                H = function(e) {
                    var a = e.component,
                        t = e.setInitialUserData,
                        l = e.isAuth,
                        i = Object(o.a)(e, ['component', 'setInitialUserData', 'isAuth']);
                    return (
                        Object(n.useEffect)(
                            function() {
                                l &&
                                    D()
                                        .then(function(e) {
                                            t(e.data.data);
                                        })
                                        .catch(function(e) {
                                            alert('Er is iets misgegaan met laden. Herlaad de pagina opnieuw.');
                                        });
                            },
                            [l]
                        ),
                        r.a.createElement(f, null, function(e) {
                            var t = e.isAuth;
                            return r.a.createElement(
                                'div',
                                { className: 'body-2', id: 'body-2' },
                                r.a.createElement(R, null),
                                r.a.createElement(
                                    m.b,
                                    Object.assign(
                                        {
                                            render: function(e) {
                                                return t
                                                    ? r.a.createElement(a, e)
                                                    : r.a.createElement(m.a, { to: '/login' });
                                            },
                                        },
                                        i
                                    )
                                )
                            );
                        })
                    );
                };
            function K(e) {
                return r.a.createElement(f, null, function(a) {
                    var t = a.isAuth;
                    return r.a.createElement(k, null, function(a) {
                        var n = a.setInitialUserData;
                        return r.a.createElement(H, Object.assign({}, e, { setInitialUserData: n, isAuth: t }));
                    });
                });
            }
            var U = function(e) {
                    var a = e.component,
                        t = Object(o.a)(e, ['component']);
                    return r.a.createElement(
                        m.b,
                        Object.assign(
                            {
                                render: function(e) {
                                    return r.a.createElement(a, e);
                                },
                            },
                            t
                        )
                    );
                },
                Y = t(14),
                $ = function(e) {
                    var a = e.field,
                        t = e.type,
                        n = e.className,
                        l = e.id,
                        i = e.readOnly,
                        c = e.placeholder,
                        m = e.showErrorMessage,
                        o = e.errors,
                        s = e.touched,
                        d = e.classNameErrorMessage,
                        u = e.disabled,
                        p = e.customOnChange,
                        E = void 0 === p ? null : p;
                    return (
                        E && (a.onChange = E),
                        r.a.createElement(
                            r.a.Fragment,
                            null,
                            Object(Y.get)(o, a.name, '') && Object(Y.get)(s, a.name, '') && m
                                ? r.a.createElement('small', { className: ''.concat(d) }, Object(Y.get)(o, a.name, ''))
                                : null,
                            r.a.createElement(
                                'input',
                                Object.assign(
                                    {
                                        type: t,
                                        className: 'text-input w-input '
                                            .concat(n, ' ')
                                            .concat(
                                                Boolean(Object(Y.get)(o, a.name, '') && Object(Y.get)(s, a.name, ''))
                                                    ? 'has-error mb-0'
                                                    : '',
                                                ' '
                                            ),
                                        id: l,
                                    },
                                    a,
                                    { readOnly: i, placeholder: c, disabled: u }
                                )
                            )
                        )
                    );
                };
            $.defaultProps = {
                type: 'text',
                className: 'content',
                readOnly: !1,
                placeholder: '',
                showErrorMessage: !0,
                classNameErrorMessage: 'text-danger',
                errors: {},
                touched: {},
            };
            var Z = $,
                J = t(4),
                Q = t(3),
                X = t(35),
                ee = t(13),
                ae = t.n(ee),
                te = function(e) {
                    var a = e.buttonClassName,
                        t = e.buttonText,
                        n = e.onClickAction,
                        l = e.type,
                        i = e.loading,
                        c = e.title,
                        m = e.loadingSpinnerColor,
                        o = e.disabled;
                    return r.a.createElement(
                        ae.a,
                        { type: l, className: ''.concat(a), onClick: n, disabled: i || o, title: c, size: 'sm' },
                        i ? r.a.createElement(X.a, { color: m, size: 17 }) : r.a.createElement('span', null, t)
                    );
                };
            te.defaultProps = {
                buttonClassName: '',
                type: 'button',
                title: '',
                loading: !1,
                loadingSpinnerColor: 'white',
                disabled: !1,
            };
            var ne = te,
                re = Q.object().shape({
                    username: Q.string()
                        .email()
                        .required('Verplicht'),
                    password: Q.string().required('Verplicht'),
                }),
                le = function(e) {
                    var a = e.handleSubmit,
                        t = e.login;
                    return r.a.createElement(J.d, {
                        initialValues: { username: '', password: '' },
                        enableReinitialize: !0,
                        validationSchema: re,
                        onSubmit: function(e, n) {
                            n.setSubmitting(!0), a(e, n, t);
                        },
                        render: function(e) {
                            var a = e.isSubmitting,
                                t = e.errors,
                                n = e.touched;
                            return r.a.createElement(
                                J.c,
                                null,
                                r.a.createElement(J.a, {
                                    name: 'username',
                                    render: function(e) {
                                        var a = e.field;
                                        return r.a.createElement(Z, {
                                            field: a,
                                            id: 'username',
                                            className: '',
                                            placeholder: 'E-mailadres',
                                            errors: t,
                                            touched: n,
                                        });
                                    },
                                }),
                                r.a.createElement(J.a, {
                                    name: 'password',
                                    render: function(e) {
                                        var a = e.field;
                                        return r.a.createElement(Z, {
                                            field: a,
                                            id: 'password',
                                            className: '',
                                            placeholder: 'Wachtwoord',
                                            type: 'password',
                                            errors: t,
                                            touched: n,
                                        });
                                    },
                                }),
                                r.a.createElement(ne, {
                                    buttonText: 'Log in',
                                    buttonClassName: 'authorization-button',
                                    type: 'submit',
                                    loading: a,
                                    loadingSpinnerColor: '#034b8c',
                                })
                            );
                        },
                    });
                },
                ie = {
                    client_id: window.__SERVER_DATA__.client_id,
                    client_secret: window.__SERVER_DATA__.client_key,
                    grant_type: 'password',
                },
                ce = window.__SERVER_DATA__.base_url,
                me = function(e) {
                    var a = ''.concat(ce, '/new-account');
                    return delete T.a.defaults.headers.common.Authorization, T.a.post(a, e);
                },
                oe = function(e) {
                    var a = ''.concat(ce, '/oauth/token');
                    return delete T.a.defaults.headers.common.Authorization, T.a.post(a, Object(y.a)({}, ie, {}, e));
                },
                se = function(e) {
                    var a = ''.concat(ce, '/register');
                    return delete T.a.defaults.headers.common.Authorization, T.a.post(a, e);
                },
                de = function(e) {
                    var a = ''.concat(ce, '/password/email');
                    return delete T.a.defaults.headers.common.Authorization, T.a.post(a, e);
                },
                ue = function(e) {
                    var a = ''.concat(ce, '/password/reset');
                    return delete T.a.defaults.headers.common.Authorization, T.a.post(a, e);
                },
                pe = t(32),
                Ee = t.n(pe),
                ge = function(e) {
                    var a = ''.concat('setting', '/multiple').concat(e);
                    return q.get(a);
                },
                fe = function() {
                    var e = ''.concat('setting', '/cooperative-name');
                    return q.get(e);
                },
                he = function() {
                    var e = ''.concat('setting', '/show-new-at-cooperative-link');
                    return q.get(e);
                },
                be = function(e) {
                    var a = Object(n.useState)(!0),
                        t = Object(s.a)(a, 2),
                        l = t[0],
                        i = t[1],
                        o = Object(n.useState)(!1),
                        d = Object(s.a)(o, 2),
                        u = d[0],
                        p = d[1],
                        E = Object(n.useState)(!1),
                        g = Object(s.a)(E, 2),
                        h = g[0],
                        b = g[1],
                        N = (e.location.state || { from: { pathname: '/gegevens' } }).from,
                        y = Object(n.useState)(''),
                        S = Object(s.a)(y, 2),
                        w = S[0],
                        k = S[1],
                        x = Object(n.useState)(!1),
                        A = Object(s.a)(x, 2),
                        C = A[0],
                        _ = A[1];
                    function I(e, a, t) {
                        oe(e)
                            .then(function(e) {
                                p(!1),
                                    t(e.data, function() {
                                        return b(!0);
                                    });
                            })
                            .catch(function(e) {
                                p(!0), a.setSubmitting(!1);
                            });
                    }
                    return (
                        Object(n.useEffect)(function() {
                            fe()
                                .then(function(e) {
                                    k(e.data), i(!1);
                                })
                                .catch(function(e) {
                                    i(!1);
                                }),
                                he()
                                    .then(function(e) {
                                        _(e.data);
                                    })
                                    .catch(function(e) {});
                        }, []),
                        r.a.createElement(
                            r.a.Fragment,
                            null,
                            h
                                ? r.a.createElement(m.a, { to: N })
                                : r.a.createElement(f, null, function(e) {
                                      e.isAuth;
                                      var a = e.login;
                                      return r.a.createElement(
                                          v.a,
                                          { fluid: !0, className: 'authorization-container' },
                                          r.a.createElement(
                                              j.a,
                                              { className: 'justify-content-center align-content-center full-height' },
                                              r.a.createElement(
                                                  O.a,
                                                  { xs: '12', sm: '6', md: '4', lg: '3', xl: '2' },
                                                  r.a.createElement('img', {
                                                      src: 'images/logo.png',
                                                      alt: '',
                                                      className: 'image logo-container',
                                                  }),
                                                  l || w
                                                      ? r.a.createElement(
                                                            r.a.Fragment,
                                                            null,
                                                            r.a.createElement(le, { handleSubmit: I, login: a }),
                                                            u
                                                                ? r.a.createElement(
                                                                      j.a,
                                                                      { className: 'justify-content-center' },
                                                                      r.a.createElement(
                                                                          Ee.a,
                                                                          {
                                                                              className: 'p-1 m-1 text-danger',
                                                                              variant: 'danger',
                                                                          },
                                                                          'Gebruikte logingegevens zijn onjuist!'
                                                                      )
                                                                  )
                                                                : null,
                                                            r.a.createElement(
                                                                j.a,
                                                                { className: 'justify-content-center' },
                                                                r.a.createElement(
                                                                    c.b,
                                                                    {
                                                                        to: '/wachtwoord-vergeten',
                                                                        className: 'authorization-link',
                                                                    },
                                                                    'Wachtwoord vergeten?'
                                                                )
                                                            ),
                                                            C
                                                                ? r.a.createElement(
                                                                      j.a,
                                                                      { className: 'justify-content-center' },
                                                                      r.a.createElement(
                                                                          'a',
                                                                          {
                                                                              href: '/#/nieuw-account',
                                                                              className: 'authorization-link',
                                                                              target: '_blank',
                                                                          },
                                                                          'Nieuw bij ',
                                                                          w,
                                                                          '?'
                                                                      )
                                                                  )
                                                                : null
                                                        )
                                                      : r.a.createElement(
                                                            r.a.Fragment,
                                                            null,
                                                            r.a.createElement(
                                                                j.a,
                                                                { className: 'justify-content-center' },
                                                                r.a.createElement(
                                                                    Ee.a,
                                                                    {
                                                                        className: 'p-1 m-1 text-danger',
                                                                        variant: 'danger',
                                                                    },
                                                                    'Deze applicatie is nog niet gereed voor gebruik!'
                                                                )
                                                            )
                                                        )
                                              )
                                          )
                                      );
                                  })
                        )
                    );
                },
                ve = t(92),
                Ne = Q.object().shape({
                    password: Q.string()
                        .min(10, 'Minimum van ${min} verplicht')
                        .matches(/([0-9])/, 'Minimaal 1 cijfer is verplicht')
                        .matches(/([A-Z])/, 'Minimaal 1 hoofdletter is verplicht')
                        .required('Verplicht'),
                    passwordConfirmation: Q.string()
                        .oneOf([Q.ref('password'), null], 'Wachtwoorden moeten gelijk zijn')
                        .required('Verplicht'),
                }),
                je = function(e) {
                    var a = e.handleSubmit,
                        t = e.email;
                    return r.a.createElement(J.d, {
                        initialValues: { password: '', passwordConfirmation: '' },
                        enableReinitialize: !0,
                        validationSchema: Ne,
                        onSubmit: function(e, t) {
                            t.setSubmitting(!0), a(e, t);
                        },
                        render: function(e) {
                            var a = e.isSubmitting,
                                n = e.errors,
                                l = e.touched;
                            return r.a.createElement(
                                J.c,
                                null,
                                r.a.createElement(
                                    'div',
                                    { className: 'mb-3' },
                                    r.a.createElement(
                                        'p',
                                        { className: 'authorization-text' },
                                        'Stel je wachtwoord in voor ',
                                        r.a.createElement('strong', null, t),
                                        '. Daarna ben je direct ingelogd.'
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        null,
                                        r.a.createElement(J.a, {
                                            name: 'password',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    id: 'password',
                                                    className: a.value ? 'numeric-password' : '',
                                                    placeholder: 'Nieuw wachtwoord',
                                                    errors: n,
                                                    touched: l,
                                                    classNameErrorMessage: 'authorization-text',
                                                });
                                            },
                                        })
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { className: 'mt-2' },
                                        r.a.createElement(J.a, {
                                            name: 'passwordConfirmation',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    id: 'passwordConfirmation',
                                                    className: a.value ? 'numeric-password' : '',
                                                    placeholder: 'Herhaal nieuw wachtwoord',
                                                    errors: n,
                                                    touched: l,
                                                    classNameErrorMessage: 'authorization-text mb-3',
                                                });
                                            },
                                        })
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { className: 'my-3' },
                                        r.a.createElement(
                                            'small',
                                            { className: 'authorization-text' },
                                            'Het wachtwoord moet minimaal 10 karakters lang zijn en moet minimaal 1 cijfer en 1 hoofdletter bevatten.'
                                        )
                                    )
                                ),
                                r.a.createElement(ne, {
                                    buttonText: 'Verzenden',
                                    buttonClassName: 'authorization-button',
                                    size: 'sm',
                                    type: 'submit',
                                    loading: a,
                                    loadingSpinnerColor: '#034b8c',
                                })
                            );
                        },
                    });
                },
                ye = function(e) {
                    var a = e.location,
                        t = e.match,
                        l = e.login,
                        i = Object(n.useState)(!1),
                        c = Object(s.a)(i, 2),
                        o = (c[0], c[1]),
                        d = Object(n.useState)(!1),
                        u = Object(s.a)(d, 2),
                        p = u[0],
                        E = u[1],
                        g = decodeURIComponent(t.params.registrationCode),
                        f = decodeURIComponent(t.params.email),
                        h = Object(n.useState)(!1),
                        b = Object(s.a)(h, 2),
                        N = b[0],
                        y = b[1],
                        S = (a.state || { from: { pathname: '/gegevens' } }).from;
                    return r.a.createElement(
                        r.a.Fragment,
                        null,
                        N
                            ? r.a.createElement(m.a, { to: S })
                            : r.a.createElement(
                                  v.a,
                                  { fluid: !0, className: 'authorization-container' },
                                  r.a.createElement(
                                      j.a,
                                      { className: 'justify-content-center align-content-center full-height' },
                                      r.a.createElement(
                                          O.a,
                                          { xs: '12', sm: '8', md: '6', lg: '4', xl: '2' },
                                          r.a.createElement('img', {
                                              src: 'images/logo.png',
                                              alt: '',
                                              className: 'image logo-container',
                                          }),
                                          p
                                              ? r.a.createElement(
                                                    r.a.Fragment,
                                                    null,
                                                    r.a.createElement(
                                                        'h3',
                                                        { className: 'authorization-text' },
                                                        'Je account is geactiveerd'
                                                    ),
                                                    r.a.createElement(
                                                        'p',
                                                        { className: 'authorization-text' },
                                                        'Je bent nu ingelogd'
                                                    ),
                                                    r.a.createElement(ne, {
                                                        buttonText: 'Ga verder',
                                                        onClickAction: y,
                                                        buttonClassName: 'authorization-button',
                                                        size: 'sm',
                                                    })
                                                )
                                              : r.a.createElement(
                                                    r.a.Fragment,
                                                    null,
                                                    r.a.createElement(
                                                        'h3',
                                                        { className: 'authorization-text' },
                                                        'Account activeren'
                                                    ),
                                                    r.a.createElement(je, {
                                                        handleSubmit: function(e, a) {
                                                            se({
                                                                registrationCode: g,
                                                                email: f,
                                                                password: e.password,
                                                                password_confirmation: e.passwordConfirmation,
                                                            })
                                                                .then(function(t) {
                                                                    E(!0),
                                                                        oe({ username: f, password: e.password })
                                                                            .then(function(e) {
                                                                                o(!1),
                                                                                    l(e.data, function() {}),
                                                                                    setTimeout(function() {
                                                                                        y(!0);
                                                                                    }, 15e3);
                                                                            })
                                                                            .catch(function(e) {
                                                                                o(!0), a.setSubmitting(!1);
                                                                            });
                                                                })
                                                                .catch(function(e) {
                                                                    a.setSubmitting(!1);
                                                                });
                                                        },
                                                        email: f,
                                                    })
                                                )
                                      )
                                  )
                              )
                    );
                };
            function Se(e) {
                return r.a.createElement(f, null, function(a) {
                    var t = a.login;
                    return r.a.createElement(ye, Object.assign({}, e, { login: t }));
                });
            }
            var we = Q.object().shape({
                    email: Q.string()
                        .email()
                        .required('Verplicht'),
                }),
                ke = function(e) {
                    var a = e.handleSubmit,
                        t = e.showSuccessMessage;
                    return r.a.createElement(J.d, {
                        initialValues: { email: '' },
                        enableReinitialize: !0,
                        validationSchema: we,
                        onSubmit: function(e, t) {
                            t.setSubmitting(!0), a(e, t);
                        },
                        render: function(e) {
                            var a = e.isSubmitting,
                                n = e.errors,
                                l = e.touched;
                            return r.a.createElement(
                                J.c,
                                null,
                                r.a.createElement(J.a, {
                                    name: 'email',
                                    render: function(e) {
                                        var a = e.field;
                                        return r.a.createElement(Z, {
                                            field: a,
                                            id: 'email',
                                            className: '',
                                            placeholder: 'E-mailadres',
                                            errors: n,
                                            touched: l,
                                        });
                                    },
                                }),
                                r.a.createElement(ne, {
                                    buttonText: t ? 'E-mail is verstuurd!' : 'Verstuur wachtwoord reset link',
                                    buttonClassName: 'authorization-button',
                                    size: 'sm',
                                    type: 'submit',
                                    loading: a,
                                    loadingSpinnerColor: '#034b8c',
                                    disabled: t,
                                })
                            );
                        },
                    });
                },
                xe = function(e) {
                    var a = Object(n.useState)(!1),
                        t = Object(s.a)(a, 2),
                        l = t[0],
                        i = t[1],
                        m = Object(n.useState)(!1),
                        o = Object(s.a)(m, 2),
                        d = o[0],
                        u = o[1];
                    return r.a.createElement(
                        v.a,
                        { fluid: !0, className: 'authorization-container' },
                        r.a.createElement(
                            j.a,
                            { className: 'justify-content-center align-content-center full-height' },
                            r.a.createElement(
                                O.a,
                                { xs: '12', sm: '10', md: '8', lg: '6', xl: '4' },
                                r.a.createElement('img', {
                                    src: 'images/logo.png',
                                    alt: '',
                                    className: 'image logo-container',
                                }),
                                d
                                    ? r.a.createElement(
                                          'div',
                                          null,
                                          r.a.createElement(
                                              j.a,
                                              { className: 'justify-content-center ' },
                                              r.a.createElement(
                                                  'h3',
                                                  { className: 'authorization-text' },
                                                  'Een E-mail is onderweg!'
                                              )
                                          ),
                                          r.a.createElement(
                                              j.a,
                                              { className: 'justify-content-center ' },
                                              r.a.createElement(
                                                  'p',
                                                  { className: 'authorization-text' },
                                                  'Als het e-mailadres bij ons bekend is, dan ontvang je binnen enkele minuten een e-mail met een persoonlijke link. Via deze link kun je een nieuw wachtwoord instellen.',
                                                  r.a.createElement('br', null),
                                                  'Het kan zijn dat de mail door een spamfilter is geblokkeerd. Spamfilters van bijvoorbeeld Gmail en Hotmail staan erg "scherp". Kijk even bij de Spam/Reclame of je onze mail daar terug vindt.'
                                              )
                                          )
                                      )
                                    : r.a.createElement(
                                          'div',
                                          null,
                                          r.a.createElement(
                                              j.a,
                                              { className: 'justify-content-center ' },
                                              r.a.createElement(
                                                  'h3',
                                                  { className: 'authorization-text' },
                                                  'Wachtwoord vergeten'
                                              )
                                          ),
                                          r.a.createElement(
                                              j.a,
                                              { className: 'justify-content-center ' },
                                              r.a.createElement(
                                                  'p',
                                                  { className: 'authorization-text' },
                                                  'Vul het e-mailadres in waarmee je inlogt en die bij ons bekend is. Je ontvangt van ons een e-mail waarmee je een nieuw wachtwoord kunt instellen.'
                                              )
                                          ),
                                          r.a.createElement(
                                              j.a,
                                              { className: 'justify-content-center ' },
                                              r.a.createElement(
                                                  O.a,
                                                  { xs: 12, md: 6 },
                                                  r.a.createElement(ke, {
                                                      handleSubmit: function(e, a) {
                                                          de(e)
                                                              .then(function(e) {
                                                                  i(!1), u(!0), a.setSubmitting(!1);
                                                              })
                                                              .catch(function(e) {
                                                                  i(!1), u(!0), a.setSubmitting(!1);
                                                              });
                                                      },
                                                      showSuccessMessage: d,
                                                  }),
                                                  l
                                                      ? r.a.createElement(
                                                            Ee.a,
                                                            { className: 'p-1 m-1 text-danger', variant: 'danger' },
                                                            'E-mailadres is niet bekend!'
                                                        )
                                                      : null
                                              )
                                          )
                                      ),
                                r.a.createElement(
                                    j.a,
                                    { className: 'justify-content-center ' },
                                    r.a.createElement(
                                        c.b,
                                        { to: '/login', className: 'authorization-link' },
                                        'Terug naar inloggen'
                                    )
                                )
                            )
                        )
                    );
                },
                Oe = Q.object().shape({
                    password: Q.string()
                        .min(10, 'Minimum van ${min} verplicht')
                        .matches(/([0-9])/, 'Minimaal 1 cijfer is verplicht')
                        .matches(/([A-Z])/, 'Minimaal 1 hoofdletter is verplicht')
                        .required('Verplicht'),
                    passwordConfirmation: Q.string()
                        .oneOf([Q.ref('password'), null], 'Wachtwoorden moeten gelijk zijn')
                        .required('Verplicht'),
                }),
                Ae = function(e) {
                    var a = e.handleSubmit,
                        t = e.email;
                    return r.a.createElement(J.d, {
                        initialValues: { password: '', passwordConfirmation: '' },
                        enableReinitialize: !0,
                        validationSchema: Oe,
                        onSubmit: function(e, t) {
                            t.setSubmitting(!0), a(e, t);
                        },
                        render: function(e) {
                            var a = e.isSubmitting,
                                n = e.errors,
                                l = e.touched;
                            return r.a.createElement(
                                J.c,
                                null,
                                r.a.createElement(
                                    j.a,
                                    { className: 'justify-content-center' },
                                    r.a.createElement(
                                        'p',
                                        { className: 'authorization-text' },
                                        'Stel een nieuw wachtwoord in voor ',
                                        r.a.createElement('strong', null, t),
                                        '. Daarna ben je direct ingelogd.'
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    { className: 'justify-content-center' },
                                    r.a.createElement(J.a, {
                                        name: 'password',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                id: 'password',
                                                className: a.value ? 'numeric-password' : '',
                                                placeholder: 'Nieuw wachtwoord',
                                                errors: n,
                                                touched: l,
                                                classNameErrorMessage: 'authorization-text',
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    j.a,
                                    { className: 'justify-content-center' },
                                    r.a.createElement(J.a, {
                                        name: 'passwordConfirmation',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                id: 'passwordConfirmation',
                                                className: a.value ? 'numeric-password' : '',
                                                placeholder: 'Herhaal nieuw wachtwoord',
                                                errors: n,
                                                touched: l,
                                                classNameErrorMessage: 'authorization-text mb-3',
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    j.a,
                                    { className: 'justify-content-center' },
                                    r.a.createElement(
                                        'small',
                                        { className: 'authorization-text' },
                                        'Het wachtwoord moet minimaal 10 karakters lang zijn en moet minimaal 1 cijfer en 1 hoofdletter bevatten.'
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    { className: 'justify-content-center' },
                                    r.a.createElement(ne, {
                                        buttonText: 'Verzenden',
                                        buttonClassName: 'authorization-button',
                                        size: 'sm',
                                        type: 'submit',
                                        loading: a,
                                        loadingSpinnerColor: '#034b8c',
                                    })
                                )
                            );
                        },
                    });
                },
                Ce = function(e) {
                    var a = e.location,
                        t = e.match,
                        l = e.login,
                        i = Object(n.useState)(!1),
                        c = Object(s.a)(i, 2),
                        o = (c[0], c[1]),
                        d = Object(n.useState)(!1),
                        u = Object(s.a)(d, 2),
                        p = u[0],
                        E = u[1],
                        g = decodeURIComponent(t.params.token),
                        f = decodeURIComponent(t.params.email),
                        h = Object(n.useState)(!1),
                        b = Object(s.a)(h, 2),
                        N = b[0],
                        y = b[1],
                        S = (a.state || { from: { pathname: '/gegevens' } }).from;
                    return r.a.createElement(
                        r.a.Fragment,
                        null,
                        N
                            ? r.a.createElement(m.a, { to: S })
                            : r.a.createElement(
                                  v.a,
                                  { fluid: !0, className: 'authorization-container' },
                                  r.a.createElement(
                                      j.a,
                                      { className: 'justify-content-center align-content-center full-height' },
                                      r.a.createElement(
                                          O.a,
                                          { xs: '12', sm: '8', md: '6', lg: '4', xl: '2' },
                                          r.a.createElement('img', {
                                              src: 'images/logo.png',
                                              alt: '',
                                              className: 'image logo-container',
                                          }),
                                          p
                                              ? r.a.createElement(
                                                    r.a.Fragment,
                                                    null,
                                                    r.a.createElement(
                                                        j.a,
                                                        { className: 'justify-content-center' },
                                                        r.a.createElement(
                                                            'h3',
                                                            { className: 'authorization-text' },
                                                            'Je wachtwoord is ingesteld'
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        j.a,
                                                        { className: 'justify-content-center' },
                                                        r.a.createElement(
                                                            'p',
                                                            { className: 'authorization-text' },
                                                            'Je bent nu ingelogd'
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        j.a,
                                                        { className: 'justify-content-center' },
                                                        r.a.createElement(ne, {
                                                            buttonText: 'Ga verder',
                                                            onClickAction: y,
                                                            buttonClassName: 'authorization-button',
                                                            size: 'sm',
                                                        })
                                                    )
                                                )
                                              : r.a.createElement(
                                                    r.a.Fragment,
                                                    null,
                                                    r.a.createElement(
                                                        j.a,
                                                        { className: 'justify-content-center' },
                                                        r.a.createElement(
                                                            'h3',
                                                            { className: 'authorization-text' },
                                                            'Wachtwoord wijzigen'
                                                        )
                                                    ),
                                                    r.a.createElement(Ae, {
                                                        handleSubmit: function(e, a) {
                                                            ue({
                                                                token: g,
                                                                email: f,
                                                                password: e.password,
                                                                password_confirmation: e.passwordConfirmation,
                                                            })
                                                                .then(function(t) {
                                                                    E(!0),
                                                                        oe({ username: f, password: e.password })
                                                                            .then(function(e) {
                                                                                o(!1),
                                                                                    l(e.data, function() {}),
                                                                                    setTimeout(function() {
                                                                                        y(!0);
                                                                                    }, 15e3);
                                                                            })
                                                                            .catch(function(e) {
                                                                                o(!0), a.setSubmitting(!1);
                                                                            });
                                                                })
                                                                .catch(function(e) {
                                                                    a.setSubmitting(!1);
                                                                });
                                                        },
                                                        email: f,
                                                    })
                                                )
                                      )
                                  )
                              )
                    );
                };
            function _e(e) {
                return r.a.createElement(f, null, function(a) {
                    var t = a.login;
                    return r.a.createElement(Ce, Object.assign({}, e, { login: t }));
                });
            }
            var Ie = function(e) {
                    var a = '/jory/contact/'.concat(e);
                    return q.get(a, {
                        params: {
                            jory: {
                                fld: [
                                    'id',
                                    'typeId',
                                    'number',
                                    'fullName',
                                    'iban',
                                    'ibanAttn',
                                    'didAgreeAvg',
                                    'dateDidAgreeAvg',
                                    'addressLines',
                                    'isParticipant',
                                    'isParticipantPcrProject',
                                ],
                                rlt: {
                                    person: {
                                        fld: [
                                            'id',
                                            'firstName',
                                            'lastName',
                                            'initials',
                                            'titleId',
                                            'lastNamePrefix',
                                            'lastNamePrefixId',
                                            'dateOfBirth',
                                        ],
                                        rlt: { title: { fld: ['id', 'name'] } },
                                    },
                                    organisation: {
                                        fld: ['id', 'name', 'website', 'chamberOfCommerceNumber', 'vatNumber'],
                                    },
                                    emailAddresses: { fld: ['id', 'email', 'primary', 'typeId'] },
                                    phoneNumbers: { fld: ['id', 'number', 'primary', 'typeId'] },
                                    addresses: {
                                        fld: [
                                            'id',
                                            'street',
                                            'number',
                                            'addition',
                                            'postalCode',
                                            'city',
                                            'countryId',
                                            'primary',
                                            'typeId',
                                        ],
                                        rlt: { country: { fld: ['id', 'name'] } },
                                    },
                                    occupations: {
                                        fld: ['id', 'occupationId', 'primaryContactId', 'contactId', 'primary'],
                                        rlt: {
                                            occupation: {
                                                fld: [
                                                    'id',
                                                    'primaryOccupation',
                                                    'secondaryOccupation',
                                                    'occupationForPortal',
                                                ],
                                            },
                                            primaryContact: { fld: ['id', 'fullName'] },
                                        },
                                    },
                                    primaryContactEnergySupplier: {
                                        fld: [
                                            'id',
                                            'energySupplierId',
                                            'esNumber',
                                            'eanElectricity',
                                            'eanGas',
                                            'memberSince',
                                            'isCurrentSupplier',
                                        ],
                                        rlt: { energySupplier: [] },
                                        flt: { f: 'isCurrentSupplier', d: !0 },
                                    },
                                },
                            },
                        },
                    });
                },
                ze = function(e) {
                    var a = '/jory/contact/'.concat(e);
                    return q.get(a, {
                        params: {
                            jory: {
                                fld: [
                                    'id',
                                    'typeId',
                                    'number',
                                    'fullName',
                                    'iban',
                                    'ibanAttn',
                                    'didAgreeAvg',
                                    'dateDidAgreeAvg',
                                    'addressLines',
                                ],
                                rlt: {
                                    participations: {
                                        fld: [
                                            'id',
                                            'dateRegister',
                                            'didAcceptAgreement',
                                            'dateDidAcceptAgreement',
                                            'didUnderstandInfo',
                                            'dateDidUnderstandInfo',
                                            'participationsDefinitive',
                                            'participationsGranted',
                                            'participationsOptioned',
                                            'participationsInteressed',
                                            'amountDefinitive',
                                            'amountGranted',
                                            'amountOptioned',
                                            'amountInteressed',
                                        ],
                                        rlt: {
                                            project: {
                                                fld: ['id', 'name', 'dateEnd', 'linkUnderstandInfo'],
                                                rlt: { projectType: { fld: ['id', 'codeRef'] } },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    });
                },
                Pe = function(e) {
                    var a = '/contact/'.concat(e.id);
                    return q.post(a, e);
                },
                Ve = function(e) {
                    var a = '/contact/'.concat(e.contactId, '/').concat(e.projectId, '/preview-document');
                    return q.post(a, e);
                },
                Re = function(e) {
                    var a = { street: '', number: '', addition: '', postalCode: '', city: '', countryId: null },
                        t = null,
                        n = null,
                        r = null,
                        l = null;
                    switch (e.typeId ? e.typeId : null) {
                        case 'person':
                            (t = e.addresses.find(function(e) {
                                return e.primary;
                            })),
                                (e.primaryAddress = t ? Object(y.a)({}, a, {}, t) : a);
                            break;
                        case 'organisation':
                            (n = e.addresses.find(function(e) {
                                return 'visit' === e.typeId;
                            })),
                                (e.visitAddress = n ? Object(y.a)({}, a, {}, n) : a),
                                (r = e.addresses.find(function(e) {
                                    return 'postal' === e.typeId;
                                })),
                                (e.postalAddress = r ? Object(y.a)({}, a, {}, r) : a),
                                (l = e.addresses.find(function(e) {
                                    return 'invoice' === e.typeId;
                                })),
                                (e.invoiceAddress = l ? Object(y.a)({}, a, {}, l) : a);
                    }
                    var i = { email: '' },
                        c = e.emailAddresses.find(function(e) {
                            return e.primary;
                        });
                    e.emailCorrespondence = c ? Object(y.a)({}, i, {}, c) : i;
                    var m = e.emailAddresses.find(function(e) {
                        return 'invoice' === e.typeId && !e.primary;
                    });
                    e.emailInvoice = m ? Object(y.a)({}, i, {}, m) : i;
                    var o = { number: '' },
                        s = e.phoneNumbers.find(function(e) {
                            return e.primary;
                        });
                    e.phoneNumberPrimary = s ? Object(y.a)({}, o, {}, s) : o;
                    var d = e.phoneNumbers.filter(function(e) {
                        return !e.primary;
                    })[0];
                    e.phoneNumberTwo = d ? Object(y.a)({}, o, {}, d) : o;
                    return (
                        e.primaryContactEnergySupplier ||
                            (e.primaryContactEnergySupplier = {
                                energySupplierId: null,
                                esNumber: '',
                                eanElectricity: '',
                                memberSince: '',
                                eanGas: '',
                            }),
                        e
                    );
                };
            var Fe = function() {
                    return r.a.createElement(
                        j.a,
                        {
                            className: 'justify-content-center align-content-center flex-wrap',
                            style: { height: '40vh' },
                        },
                        r.a.createElement(X.a, { color: '#3898EC', size: 48 })
                    );
                },
                Te = t(20),
                Le = t.n(Te),
                Me = t(5),
                qe = t.n(Me),
                De = function(e) {
                    var a = e.children,
                        t = e.className,
                        n = e.id,
                        l = e.placeholder,
                        i = '' === a || null === a || void 0 === a;
                    return r.a.createElement(
                        'div',
                        { className: 'text-block '.concat(t, ' ').concat(i ? 'placeholder' : ''), id: n },
                        i ? r.a.createElement('div', { className: 'placeholder-message' }, l) : a
                    );
                };
            De.defaultProps = { className: 'text-block', id: '', children: '', placeholder: '' };
            var Be = De;
            var Ge = function(e) {
                    var a = e.portalSettings,
                        t = e.initialContact,
                        n = t.person,
                        l = void 0 === n ? {} : n,
                        i = t.emailCorrespondence,
                        c = t.emailInvoice,
                        m = t.phoneNumberPrimary,
                        o = t.phoneNumberTwo,
                        s = t.primaryAddress,
                        d = t.iban,
                        p = t.ibanAttn,
                        E = t.didAgreeAvg,
                        g = t.dateDidAgreeAvg,
                        f = t.number,
                        h = t.primaryContactEnergySupplier;
                    return r.a.createElement(
                        j.a,
                        null,
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, { className: 'field-label' }, 'Contactnummer'),
                            r.a.createElement(j.a, null, r.a.createElement(Be, { className: 'col-12 col-sm-8' }, f)),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'Naam'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-6', placeholder: 'Aanhef' },
                                    l.title ? l.title.name : ''
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-4', placeholder: 'Initialen' },
                                    l.initials
                                ),
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-8', placeholder: 'Voornaam' },
                                    l.firstName
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-4', placeholder: 'Tussenvoegsel' },
                                    l.lastNamePrefix
                                ),
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-6', placeholder: 'Achternaam' },
                                    l.lastName
                                )
                            ),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'Geboortedatum'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-6 col-md-4', placeholder: 'Geboortedatum' },
                                    l.dateOfBirth ? u()(l.dateOfBirth).format('L') : ''
                                )
                            ),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'E-mailadres correspondentie'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-8', placeholder: 'E-mailadres' },
                                    i.email
                                )
                            ),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'E-mailadres nota'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-8', placeholder: 'E-mailadres' },
                                    c.email
                                )
                            ),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'Telefoonnummer 1'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-6', placeholder: 'Telefoonnummer' },
                                    m.number
                                )
                            ),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'Telefoonnummer 2'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-6', placeholder: 'Telefoonnummer' },
                                    o.number
                                )
                            ),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'Adres'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(Be, { className: 'col-12 col-sm-8', placeholder: 'Straat' }, s.street)
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-4', placeholder: 'Nummer' },
                                    s.number
                                ),
                                r.a.createElement(
                                    Be,
                                    { className: 'col-6 col-sm-4 ', placeholder: 'Toevoeging' },
                                    s.addition
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-4', placeholder: 'Postcode' },
                                    s.postalCode
                                ),
                                r.a.createElement(Be, { className: 'col-12 col-sm-6', placeholder: 'Plaats' }, s.city)
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-8', placeholder: 'Land' },
                                    s.country ? s.country.name : ''
                                )
                            )
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, { className: 'field-label' }, 'IBAN gegevens'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-8', placeholder: 'Rekeningnummer (IBAN)' },
                                    d
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-8', placeholder: 'IBAN te name van' },
                                    p
                                )
                            ),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'Akkoord privacybeleid'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    'div',
                                    { className: 'col-12 col-sm-8' },
                                    r.a.createElement('input', {
                                        type: 'checkbox',
                                        id: 'did_agree_avg',
                                        checked: E,
                                        className: 'w-checkbox-input checkbox',
                                        disabled: !0,
                                    }),
                                    r.a.createElement(
                                        'span',
                                        { htmlFor: 'did_agree_avg', className: 'checkbox-label w-form-label' },
                                        'Ik ga akkoord met',
                                        ' ',
                                        r.a.createElement(
                                            'a',
                                            { href: a.linkPrivacyPolicy, target: '_blank' },
                                            'privacybeleid'
                                        ),
                                        ' ',
                                        E
                                            ? r.a.createElement('em', null, '(', g ? ' ' + u()(g).format('L') : '', ')')
                                            : ''
                                    )
                                )
                            ),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'Huidige energie leverancier'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    Be,
                                    { className: 'col-12 col-sm-8', placeholder: 'Energieleverancier' },
                                    h.energySupplier ? h.energySupplier.name : ''
                                )
                            ),
                            h && h.energySupplierId
                                ? r.a.createElement(
                                      r.a.Fragment,
                                      null,
                                      r.a.createElement(
                                          qe.a,
                                          { className: 'field-label' },
                                          'Klant nummer bij leverancier'
                                      ),
                                      r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              Be,
                                              { className: 'col-12 col-sm-8', placeholder: 'Klant nummer' },
                                              h.esNumber
                                          )
                                      ),
                                      r.a.createElement(
                                          qe.a,
                                          { className: 'field-label' },
                                          'Klant bij leverancier sinds'
                                      ),
                                      r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              Be,
                                              { className: 'col-12 col-sm-8', placeholder: 'Klant sinds' },
                                              h.memberSince ? u()(h.memberSince).format('L') : ''
                                          )
                                      ),
                                      r.a.createElement(qe.a, { className: 'field-label' }, 'EAN nummer electriciteit'),
                                      r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              Be,
                                              { className: 'col-12 col-sm-8', placeholder: 'EAN nummer electriciteit' },
                                              h.eanElectricity
                                          )
                                      ),
                                      r.a.createElement(qe.a, { className: 'field-label' }, 'EAN nummer gas'),
                                      r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              Be,
                                              { className: 'col-12 col-sm-8', placeholder: 'EAN nummer gas' },
                                              h.eanGas
                                          )
                                      )
                                  )
                                : ''
                        )
                    );
                },
                We = function(e) {
                    var a = e.field,
                        t = e.className,
                        n = e.id,
                        l = e.options,
                        i = e.optionLabel,
                        c = e.emptyOption,
                        m = e.placeholder,
                        o = e.showErrorMessage,
                        s = e.errors,
                        d = e.touched,
                        u = e.classNameErrorMessage,
                        p = e.disabled;
                    return r.a.createElement(
                        r.a.Fragment,
                        null,
                        Object(Y.get)(s, a.name, '') && Object(Y.get)(d, a.name, '') && o
                            ? r.a.createElement('small', { className: ''.concat(u) }, Object(Y.get)(s, a.name, ''))
                            : null,
                        r.a.createElement(
                            'select',
                            Object.assign(
                                {
                                    className: 'select-field w-select content '
                                        .concat(t, ' ')
                                        .concat(
                                            Boolean(Object(Y.get)(s, a.name, '') && Object(Y.get)(d, a.name, ''))
                                                ? 'has-error mb-0'
                                                : '',
                                            ' '
                                        ),
                                    id: n,
                                },
                                a,
                                { disabled: p }
                            ),
                            c ? r.a.createElement('option', { value: '' }, m ? '-- '.concat(m, ' --') : '') : null,
                            l.map(function(e) {
                                return r.a.createElement('option', { key: e.id, value: e.id }, e[i]);
                            })
                        )
                    );
                };
            We.defaultProps = {
                className: '',
                readOnly: !1,
                required: '',
                optionLabel: 'name',
                emptyOption: !0,
                placeholder: '',
                showErrorMessage: !0,
                classNameErrorMessage: 'text-danger',
                errors: {},
                touched: {},
            };
            var He = We,
                Ke = [
                    { id: 'AU', name: 'Australi\xeb' },
                    { id: 'BE', name: 'Belgi\xeb' },
                    { id: 'CA', name: 'Canade' },
                    { id: 'DK', name: 'Denemarken' },
                    { id: 'DE', name: 'Duitsland' },
                    { id: 'FI', name: 'Finland' },
                    { id: 'FR', name: 'Frankrijk' },
                    { id: 'IE', name: 'Ierland' },
                    { id: 'IT', name: 'Itali\xeb' },
                    { id: 'LU', name: 'Luxemburg' },
                    { id: 'NL', name: 'Nederland' },
                    { id: 'NO', name: 'Noorwegen' },
                    { id: 'AT', name: 'Oostenrijk' },
                    { id: 'PL', name: 'Polen' },
                    { id: 'PT', name: 'Portugal' },
                    { id: 'ES', name: 'Spanje' },
                    { id: 'GB', name: 'Verenigd Koninkrijk' },
                    { id: 'VS', name: 'Verenigde Staten' },
                    { id: 'SE', name: 'Zweden' },
                    { id: 'CH', name: 'Zwitserland' },
                ],
                Ue = [
                    { id: 1, name: 'OM' },
                    { id: 2, name: 'Budget Energie' },
                    { id: 3, name: 'E.on' },
                    { id: 4, name: 'Eneco' },
                    { id: 5, name: 'Energiedirect' },
                    { id: 6, name: 'Engie' },
                    { id: 7, name: 'Essent' },
                    { id: 8, name: 'Greenchoice' },
                    { id: 9, name: 'Holland Wind' },
                    { id: 10, name: 'Main energie' },
                    { id: 11, name: 'N.E.M.' },
                    { id: 12, name: 'NL Energie' },
                    { id: 13, name: 'Vattenfall' },
                    { id: 14, name: 'Oxxio' },
                    { id: 15, name: 'Pure energy' },
                    { id: 16, name: 'Qurrent' },
                    { id: 17, name: 'VanDeBron' },
                    { id: 18, name: 'Overig' },
                    { id: 19, name: 'Energie VanOns' },
                    { id: 20, name: 'Huismerk Energie' },
                    { id: 21, name: 'Energieflex' },
                    { id: 22, name: 'United Consumers' },
                    { id: 23, name: 'Innova Energie' },
                    { id: 24, name: 'Betuwe stroom' },
                    { id: 25, name: 'Delta Energie' },
                    { id: 26, name: 'Agem' },
                    { id: 27, name: 'Anode Energie' },
                    { id: 28, name: 'De Groene Stroomfabriek' },
                    { id: 29, name: 'Energie Van Ons' },
                    { id: 30, name: 'HVC Kringloop Energie' },
                    { id: 31, name: 'Sepa Green' },
                    { id: 32, name: 'Servicehouse' },
                    { id: 33, name: 'Holthausen Clean Energy (HCE)' },
                    { id: 34, name: 'Total' },
                    { id: 35, name: 'Fenor energie' },
                    { id: 36, name: 'Power peers' },
                    { id: 37, name: 'Energyhouse' },
                    { id: 38, name: 'NieuweStroom' },
                    { id: 39, name: 'ParkStroom' },
                    { id: 40, name: 'Groenpand' },
                    { id: 41, name: 'Windcentrale' },
                    { id: 42, name: 'Energiebesteding' },
                    { id: 43, name: 'GreenNL' },
                    { id: 44, name: 'Hezelaer' },
                    { id: 45, name: 'Easyenergy' },
                    { id: 46, name: 'Dorpstroom' },
                ],
                Ye = [
                    { id: 1, name: 'Dhr' },
                    { id: 2, name: 'Mevr' },
                    { id: 3, name: 'De heer, Mevrouw' },
                    { id: 4, name: 'Familie' },
                    { id: 5, name: 'De heer of mevrouw' },
                    { id: 6, name: 'De heren' },
                    { id: 7, name: 'De dames' },
                ],
                $e = [
                    { id: 0, name: '' },
                    { id: 1, name: 'van' },
                    { id: 2, name: 'de' },
                    { id: 3, name: 'van der' },
                    { id: 4, name: 'van de' },
                    { id: 5, name: 'van den' },
                    { id: 6, name: 'den' },
                    { id: 7, name: 'ten' },
                    { id: 8, name: 'ter' },
                    { id: 9, name: 'te' },
                    { id: 10, name: "van 't" },
                    { id: 11, name: 'el' },
                    { id: 12, name: 'le' },
                    { id: 13, name: 'van het' },
                    { id: 14, name: "in 't" },
                    { id: 15, name: "'t" },
                    { id: 16, name: 'von' },
                    { id: 17, name: 'du' },
                    { id: 18, name: 'da' },
                    { id: 19, name: 'de la' },
                    { id: 20, name: 'la' },
                    { id: 21, name: 'der' },
                    { id: 22, name: 'van ter' },
                    { id: 23, name: "op 't" },
                    { id: 24, name: 'op den' },
                    { id: 25, name: 'op ten' },
                ],
                Ze = t(210),
                Je = t.n(Ze),
                Qe = t(97),
                Xe = t.n(Qe),
                ea = function(e) {
                    var a = e.className,
                        t = e.id,
                        n = e.value,
                        l = e.required,
                        i = e.readOnly,
                        c = e.name,
                        m = e.onChangeAction,
                        o = e.placeholder,
                        s = e.showErrorMessage,
                        d = e.errors,
                        p = e.touched,
                        E = e.classNameErrorMessage,
                        g = n ? u()(n).format('L') : '';
                    return r.a.createElement(
                        r.a.Fragment,
                        null,
                        Object(Y.get)(d, c, '') && Object(Y.get)(p, c, '') && s
                            ? r.a.createElement('small', { className: ''.concat(E) }, Object(Y.get)(d, c, ''))
                            : null,
                        r.a.createElement(Je.a, {
                            id: t,
                            value: g,
                            onDayChange: function(e) {
                                var a = e ? u()(e).format('Y-MM-DD') : '';
                                m(c, a);
                            },
                            formatDate: Qe.formatDate,
                            parseDate: Qe.parseDate,
                            dayPickerProps: { showWeekNumbers: !0, locale: 'nl', firstDayOfWeek: 1, localeUtils: Xe.a },
                            inputProps: {
                                className: 'text-input content w-input '
                                    .concat(a, ' ')
                                    .concat(
                                        Boolean(Object(Y.get)(d, c, '') && Object(Y.get)(p, c, ''))
                                            ? 'has-error mb-0'
                                            : '',
                                        ' '
                                    ),
                                name: c,
                                autoComplete: 'off',
                                readOnly: i,
                                disabled: i,
                                placeholder: o,
                            },
                            required: l,
                            readOnly: i,
                            placeholder: '',
                        })
                    );
                };
            ea.defaultProps = {
                className: '',
                required: '',
                readOnly: !1,
                value: null,
                placeholder: '',
                showErrorMessage: !0,
                classNameErrorMessage: 'text-danger',
                errors: {},
                touched: {},
            };
            var aa = ea,
                ta = function(e) {
                    var a = e.portalSettings,
                        t = e.initialContact,
                        n = e.projectTypeCodeRef,
                        l = e.errors,
                        i = e.touched,
                        c = e.values,
                        m = e.setFieldValue;
                    return r.a.createElement(
                        j.a,
                        null,
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, { className: 'field-label' }, 'Contactnummer'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(Be, { className: 'col-12 col-sm-8' }, c.number)
                            ),
                            r.a.createElement(qe.a, { className: 'field-label required' }, 'Naam'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 6 },
                                    r.a.createElement(J.a, {
                                        name: 'person.titleId',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(He, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'title_id',
                                                placeholder: 'Aanhef',
                                                options: Ye,
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'person.initials',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'initials',
                                                placeholder: 'Initialen',
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'person.firstName',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'first_name',
                                                placeholder: 'Voornaam',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'person.lastNamePrefixId',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(He, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'last_name_prefix_id',
                                                options: $e,
                                                placeholder: 'Tussenvoegsel',
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'person.lastName',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'last_name',
                                                placeholder: 'Achternaam',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                {
                                    htmlFor: 'date_of_birth',
                                    className: t.isParticipant ? 'field-label required' : 'field-label',
                                },
                                'Geboortedatum'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 6 },
                                    r.a.createElement(J.a, {
                                        name: 'person.dateOfBirth',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(
                                                aa,
                                                Object.assign({}, a, {
                                                    errors: l,
                                                    touched: i,
                                                    onChangeAction: m,
                                                    id: 'date_of_birth',
                                                    placeholder: 'Geboortedatum',
                                                })
                                            );
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                { htmlFor: 'email-correspondence', className: 'field-label required' },
                                'E-mailadres correspondentie'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 12, md: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'emailCorrespondence.email',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'email-correspondence',
                                                placeholder: 'E-mailadres',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                { htmlFor: 'email-invoice', className: 'field-label' },
                                'E-mailadres nota'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 12, md: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'emailInvoice.email',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'email-invoice',
                                                placeholder: 'E-mailadres',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                {
                                    htmlFor: 'telephone-number-1',
                                    className: t.isParticipant ? 'field-label required' : 'field-label',
                                },
                                'Telefoonnummer 1'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 10, md: 6 },
                                    r.a.createElement(J.a, {
                                        name: 'phoneNumberPrimary.number',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'telephone-number-1',
                                                placeholder: 'Nummer',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                { htmlFor: 'telephone-number-2', className: 'field-label' },
                                'Telefoonnummer 2'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 10, md: 6 },
                                    r.a.createElement(J.a, {
                                        name: 'phoneNumberTwo.number',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'telephone-number-2',
                                                placeholder: 'Nummer',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                {
                                    htmlFor: 'street',
                                    className: t.isParticipant ? 'field-label required' : 'field-label',
                                },
                                'Adres'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 12 },
                                    r.a.createElement(J.a, {
                                        name: 'primaryAddress.street',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'street',
                                                placeholder: 'Straat',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'primaryAddress.number',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'street_number',
                                                placeholder: 'Nummer',
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'primaryAddress.addition',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'addition',
                                                placeholder: 'Toevoeging',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'primaryAddress.postalCode',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'postal_code',
                                                placeholder: 'Postcode',
                                                disabled: t.isParticipantPcrProject,
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'primaryAddress.city',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'city',
                                                placeholder: 'Plaats',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'primaryAddress.countryId',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(He, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'country_id',
                                                placeholder: 'Selecteer uw land',
                                                options: Ke,
                                            });
                                        },
                                    })
                                )
                            )
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(
                                qe.a,
                                {
                                    htmlFor: 'iban',
                                    className: t.isParticipant ? 'field-label required' : 'field-label',
                                },
                                'IBAN gegevens'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'iban',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'iban',
                                                placeholder: 'Rekeningnummer (IBAN)',
                                                customOnChange: function(e) {
                                                    m('iban', ('' + e.target.value).toUpperCase());
                                                },
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'ibanAttn',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'iban_attn',
                                                placeholder: 'IBAN te name van',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                { htmlFor: 'did_agree_avg', className: 'field-label required' },
                                'Akkoord privacybeleid'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'didAgreeAvg',
                                        render: function(e) {
                                            var n = e.field;
                                            return r.a.createElement(
                                                'label',
                                                { className: 'w-checkbox checkbox-fld' },
                                                r.a.createElement(
                                                    'input',
                                                    Object.assign({ type: 'checkbox' }, n, {
                                                        id: 'did_agree_avg',
                                                        checked: n.value,
                                                        className: 'w-checkbox-input checkbox',
                                                        disabled: t.didAgreeAvg,
                                                    })
                                                ),
                                                r.a.createElement(
                                                    'span',
                                                    {
                                                        htmlFor: 'did_agree_avg',
                                                        className: 'checkbox-label w-form-label',
                                                    },
                                                    'Ik ga akkoord met',
                                                    ' ',
                                                    r.a.createElement(
                                                        'a',
                                                        { href: a.linkPrivacyPolicy, target: '_blank' },
                                                        'privacybeleid'
                                                    ),
                                                    ' ',
                                                    c.didAgreeAvg
                                                        ? r.a.createElement(
                                                              'em',
                                                              null,
                                                              '(',
                                                              t.dateDidAgreeAvg
                                                                  ? u()(t.dateDidAgreeAvg).format('L')
                                                                  : u()().format('L'),
                                                              ')'
                                                          )
                                                        : ''
                                                ),
                                                i[n.name] && l[n.name]
                                                    ? r.a.createElement(
                                                          'div',
                                                          { className: 'error-message text-danger' },
                                                          l[n.name]
                                                      )
                                                    : null
                                            );
                                        },
                                    })
                                )
                            ),
                            'postalcode_link_capital' === n || void 0 === n
                                ? r.a.createElement(
                                      r.a.Fragment,
                                      null,
                                      r.a.createElement(
                                          qe.a,
                                          {
                                              htmlFor: 'energy_supplier_id',
                                              className:
                                                  t.isParticipantPcrProject || 'postalcode_link_capital' === n
                                                      ? 'field-label required'
                                                      : 'field-label',
                                          },
                                          'Huidige energie leverancier'
                                      ),
                                      r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              O.a,
                                              { xs: 12, sm: 12, md: 8 },
                                              r.a.createElement(J.a, {
                                                  name: 'primaryContactEnergySupplier.energySupplierId',
                                                  render: function(e) {
                                                      var a = e.field;
                                                      return r.a.createElement(He, {
                                                          field: a,
                                                          errors: l,
                                                          touched: i,
                                                          id: 'energy_supplier_id',
                                                          placeholder: 'Selecteer uw leverancier',
                                                          options: Ue,
                                                      });
                                                  },
                                              })
                                          )
                                      ),
                                      c.primaryContactEnergySupplier && c.primaryContactEnergySupplier.energySupplierId
                                          ? r.a.createElement(
                                                r.a.Fragment,
                                                null,
                                                r.a.createElement(
                                                    qe.a,
                                                    {
                                                        htmlFor: 'es_number',
                                                        className:
                                                            'postalcode_link_capital' === n
                                                                ? 'field-label required'
                                                                : 'field-label',
                                                    },
                                                    'Klant nummer bij leverancier'
                                                ),
                                                r.a.createElement(
                                                    j.a,
                                                    null,
                                                    r.a.createElement(
                                                        O.a,
                                                        { xs: 12, sm: 12, md: 8 },
                                                        r.a.createElement(J.a, {
                                                            name: 'primaryContactEnergySupplier.esNumber',
                                                            render: function(e) {
                                                                var a = e.field;
                                                                return r.a.createElement(Z, {
                                                                    field: a,
                                                                    errors: l,
                                                                    touched: i,
                                                                    id: 'es_number',
                                                                    placeholder: 'Klant nummer bij leverancier',
                                                                });
                                                            },
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    qe.a,
                                                    { htmlFor: 'member_since', className: 'field-label' },
                                                    'Klant bij leverancier sinds'
                                                ),
                                                r.a.createElement(
                                                    j.a,
                                                    null,
                                                    r.a.createElement(
                                                        O.a,
                                                        { xs: 12, sm: 12, md: 8 },
                                                        r.a.createElement(J.a, {
                                                            name: 'primaryContactEnergySupplier.memberSince',
                                                            render: function(e) {
                                                                var a = e.field;
                                                                return r.a.createElement(
                                                                    aa,
                                                                    Object.assign({}, a, {
                                                                        errors: l,
                                                                        touched: i,
                                                                        onChangeAction: m,
                                                                        id: 'member_since',
                                                                        placeholder: 'Klant sinds',
                                                                    })
                                                                );
                                                            },
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    qe.a,
                                                    {
                                                        htmlFor: 'ean_electricity',
                                                        className:
                                                            'postalcode_link_capital' === n
                                                                ? 'field-label required'
                                                                : 'field-label',
                                                    },
                                                    'EAN nummer electriciteit'
                                                ),
                                                r.a.createElement(
                                                    j.a,
                                                    null,
                                                    r.a.createElement(
                                                        O.a,
                                                        { xs: 12, sm: 12, md: 8 },
                                                        r.a.createElement(J.a, {
                                                            name: 'primaryContactEnergySupplier.eanElectricity',
                                                            render: function(e) {
                                                                var a = e.field;
                                                                return r.a.createElement(Z, {
                                                                    field: a,
                                                                    errors: l,
                                                                    touched: i,
                                                                    id: 'ean_electricity',
                                                                    placeholder: 'EAN nummer electriciteit',
                                                                });
                                                            },
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    qe.a,
                                                    { htmlFor: 'ean_gas', className: 'field-label' },
                                                    'EAN nummer gas'
                                                ),
                                                r.a.createElement(
                                                    j.a,
                                                    null,
                                                    r.a.createElement(
                                                        O.a,
                                                        { xs: 12, sm: 12, md: 8 },
                                                        r.a.createElement(J.a, {
                                                            name: 'primaryContactEnergySupplier.eanGas',
                                                            render: function(e) {
                                                                var a = e.field;
                                                                return r.a.createElement(Z, {
                                                                    field: a,
                                                                    errors: l,
                                                                    touched: i,
                                                                    id: 'ean_gas',
                                                                    placeholder: 'EAN nummer gas',
                                                                });
                                                            },
                                                        })
                                                    )
                                                )
                                            )
                                          : ''
                                  )
                                : null
                        )
                    );
                },
                na = t(124),
                ra = {
                    validationSchemaBasic: Q.object().shape({
                        didAgreeAvg: Q.bool().test(
                            'didAgreeAvg',
                            'Je dient akkoord te gaan met privacybeleid!',
                            function(e) {
                                return !0 === e;
                            }
                        ),
                        person: Q.object().shape({
                            lastName: Q.string()
                                .trim()
                                .required('Verplicht'),
                        }),
                        emailCorrespondence: Q.object().shape({
                            email: Q.string()
                                .trim()
                                .email('Ongeldig e-mail adres')
                                .required('Verplicht'),
                        }),
                        emailInvoice: Q.object().shape({
                            email: Q.string()
                                .trim()
                                .email('Ongeldig e-mail adres'),
                        }),
                        primaryAddress: Q.object().shape({
                            street: Q.string().trim(),
                            number: Q.string()
                                .nullable()
                                .trim()
                                .test('number', 'Alleen nummers', function(e) {
                                    return Number.isInteger(+e);
                                }),
                            postalCode: Q.string()
                                .trim()
                                .test('postal-code-nl-check', 'Formaat Nederlandse postcode is 1234 AB', function(e) {
                                    return (
                                        ('NL' !== this.parent.countryId &&
                                            null !== this.parent.countryId &&
                                            '' != this.parent.countryId) ||
                                        '' == e.trim() ||
                                        !e.search(/^[1-9][0-9]{3}[ ]?([A-RT-Za-rt-z][A-Za-z]|[sS][BCbcE-Re-rT-Zt-z])$/)
                                    );
                                }),
                            city: Q.string().trim(),
                        }),
                        phoneNumberPrimary: Q.object().shape({
                            number: Q.string()
                                .trim()
                                .matches(/(\d.*){10}|^$/, 'Minimaal 10 cijfers nodig'),
                        }),
                        phoneNumberTwo: Q.object().shape({
                            number: Q.string()
                                .trim()
                                .matches(/(\d.*){10}|^$/, 'Minimaal 10 cijfers nodig'),
                        }),
                        primaryContactEnergySupplier: Q.object().shape({
                            eanElectricity: Q.string()
                                .nullable()
                                .trim()
                                .matches(/(\d.*){18}|^$/, 'Minimaal 18 cijfers nodig'),
                            eanGas: Q.string()
                                .nullable()
                                .trim()
                                .matches(/(\d.*){18}|^$/, 'Minimaal 18 cijfers nodig'),
                        }),
                    }),
                    validationSchemaAdditional: Q.object().shape({
                        person: Q.object().shape({
                            titleId: Q.string()
                                .nullable()
                                .required('Verplicht'),
                            firstName: Q.string()
                                .trim()
                                .required('Verplicht'),
                            dateOfBirth: Q.date()
                                .typeError('Verplicht of ongeldige datum')
                                .required('Verplicht'),
                        }),
                        phoneNumberPrimary: Q.object().shape({
                            number: Q.string()
                                .trim()
                                .matches(/(\d.*){10}/, 'Minimaal 10 cijfers nodig')
                                .required('Verplicht'),
                        }),
                        phoneNumberTwo: Q.object().shape({
                            number: Q.string()
                                .trim()
                                .matches(/(\d.*){10}|^$/, 'Minimaal 10 cijfers nodig'),
                        }),
                        primaryAddress: Q.object().shape({
                            street: Q.string()
                                .trim()
                                .required('Verplicht'),
                            number: Q.string()
                                .nullable()
                                .trim()
                                .test('number', 'Alleen nummers', function(e) {
                                    return Number.isInteger(+e);
                                })
                                .required('Verplicht'),
                            postalCode: Q.string()
                                .trim()
                                .test('postal-code-nl-check', 'Formaat Nederlandse postcode is 1234 AB', function(e) {
                                    return (
                                        ('NL' !== this.parent.countryId &&
                                            null !== this.parent.countryId &&
                                            '' != this.parent.countryId) ||
                                        !e.search(/^[1-9][0-9]{3}[ ]?([A-RT-Za-rt-z][A-Za-z]|[sS][BCbcE-Re-rT-Zt-z])$/)
                                    );
                                })
                                .required('Verplicht'),
                            city: Q.string()
                                .trim()
                                .required('Verplicht'),
                        }),
                        iban: Q.string()
                            .trim()
                            .nullable()
                            .required('Verplicht')
                            .test('iban', 'Ongeldige IBAN !', function(e) {
                                return na.a(e);
                            }),
                        ibanAttn: Q.string()
                            .trim()
                            .nullable()
                            .required('Verplicht'),
                    }),
                    validationSchemaPcrAdditional: Q.object().shape({
                        primaryContactEnergySupplier: Q.object().shape({
                            energySupplierId: Q.string()
                                .nullable()
                                .required('Verplicht'),
                            esNumber: Q.string()
                                .nullable()
                                .trim()
                                .required('Verplicht'),
                            eanElectricity: Q.string()
                                .nullable()
                                .trim()
                                .matches(/(\d.*){18}|^$/, 'Minimaal 18 cijfers nodig')
                                .required('Verplicht'),
                            eanGas: Q.string()
                                .nullable()
                                .trim()
                                .matches(/(\d.*){18}|^$/, 'Minimaal 18 cijfers nodig'),
                        }),
                    }),
                },
                la = t(497);
            var ia = function(e) {
                var a = e.portalSettings,
                    t = e.initialContact,
                    n = e.handleSubmitContactValues,
                    l = e.editButtonGroup,
                    i = e.editForm,
                    c = e.setEditForm,
                    m = t.isParticipantPcrProject
                        ? ra.validationSchemaBasic
                              .concat(ra.validationSchemaAdditional)
                              .concat(ra.validationSchemaPcrAdditional)
                        : t.isParticipant
                        ? ra.validationSchemaBasic.concat(ra.validationSchemaAdditional)
                        : ra.validationSchemaBasic;
                return r.a.createElement(
                    'div',
                    null,
                    i
                        ? r.a.createElement(J.d, {
                              initialValues: t,
                              enableReinitialize: !0,
                              validationSchema: m,
                              onSubmit: function(e, a) {
                                  a.setSubmitting(!0),
                                      n(e, a, function() {
                                          return c(!1);
                                      });
                              },
                              render: function(e) {
                                  var n = e.errors,
                                      l = e.touched,
                                      i = e.setFieldValue,
                                      m = e.isSubmitting,
                                      o = e.values,
                                      s = e.handleSubmit;
                                  return r.a.createElement(
                                      J.c,
                                      null,
                                      r.a.createElement(ta, {
                                          portalSettings: a,
                                          initialContact: t,
                                          touched: l,
                                          errors: n,
                                          setFieldValue: i,
                                          values: o,
                                      }),
                                      r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              O.a,
                                              null,
                                              r.a.createElement(
                                                  Le.a,
                                                  { 'aria-label': 'Steps', className: 'float-right' },
                                                  r.a.createElement(
                                                      ae.a,
                                                      {
                                                          variant: 'outline-dark',
                                                          size: 'sm',
                                                          onClick: function() {
                                                              c(!1);
                                                          },
                                                      },
                                                      'Annuleren'
                                                  ),
                                                  r.a.createElement(
                                                      ae.a,
                                                      { className: 'w-button', size: 'sm', onClick: s, disabled: m },
                                                      m
                                                          ? r.a.createElement(
                                                                'span',
                                                                null,
                                                                r.a.createElement(X.a, { color: 'white', size: 14 }),
                                                                'Bezig met opslaan'
                                                            )
                                                          : 'Opslaan'
                                                  )
                                              )
                                          )
                                      ),
                                      Object(Y.isEmpty)(n)
                                          ? null
                                          : r.a.createElement(
                                                j.a,
                                                null,
                                                r.a.createElement(
                                                    O.a,
                                                    null,
                                                    r.a.createElement(
                                                        'div',
                                                        { className: 'alert-wrapper' },
                                                        r.a.createElement(
                                                            la.a,
                                                            { key: 'form-general-error-alert', variant: 'warning' },
                                                            'Niet alle verplichten velden zijn (juist) ingevuld!'
                                                        )
                                                    )
                                                )
                                            )
                                  );
                              },
                          })
                        : r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(Ge, { portalSettings: a, initialContact: t }),
                              r.a.createElement(j.a, null, r.a.createElement(O.a, null, l))
                          )
                );
            };
            var ca = function(e) {
                    var a = e.portalSettings,
                        t = e.initialContact,
                        n = t.organisation,
                        l = void 0 === n ? {} : n,
                        i = t.emailCorrespondence,
                        c = t.emailInvoice,
                        m = t.phoneNumberPrimary,
                        o = t.phoneNumberTwo,
                        s = t.visitAddress,
                        d = t.postalAddress,
                        p = t.invoiceAddress,
                        E = t.iban,
                        g = t.ibanAttn,
                        f = t.didAgreeAvg,
                        h = t.dateDidAgreeAvg,
                        b = t.number,
                        v = t.primaryContactEnergySupplier;
                    return (
                        t.primaryOccupations,
                        r.a.createElement(
                            j.a,
                            null,
                            r.a.createElement(
                                O.a,
                                { xs: 12, md: 6 },
                                r.a.createElement(qe.a, { className: 'field-label' }, 'Contactnummer'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(Be, { className: 'col-12 col-sm-8' }, b)
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'Bedrijfsnaam'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'Bedrijfsnaam' },
                                        l.name
                                    )
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'KvK'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'KvK' },
                                        l.chamberOfCommerceNumber
                                    )
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'BTW nummer'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'BTW nummer' },
                                        l.vatNumber
                                    )
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'IBAN gegevens'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'Rekeningnummer (IBAN)' },
                                        E
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'IBAN te name van' },
                                        g
                                    )
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'Website'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'Website' },
                                        l.website
                                    )
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'Akkoord privacybeleid'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        'div',
                                        { className: 'col-12 col-sm-8' },
                                        r.a.createElement('input', {
                                            type: 'checkbox',
                                            id: 'did_agree_avg',
                                            checked: f,
                                            className: 'w-checkbox-input checkbox',
                                            disabled: !0,
                                        }),
                                        r.a.createElement(
                                            'span',
                                            { htmlFor: 'did_agree_avg', className: 'checkbox-label w-form-label' },
                                            'Ik ga akkoord met',
                                            ' ',
                                            r.a.createElement(
                                                'a',
                                                { href: a.linkPrivacyPolicy, target: '_blank' },
                                                'privacybeleid'
                                            ),
                                            ' ',
                                            f
                                                ? r.a.createElement('em', null, '(', h ? u()(h).format('L') : '', ')')
                                                : ''
                                        )
                                    )
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'E-mailadres correspondentie'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'E-mailadres' },
                                        i.email
                                    )
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'E-mailadres nota'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'E-mailadres' },
                                        c.email
                                    )
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'Telefoonnummer 1'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-6', placeholder: 'Telefoonnummer' },
                                        m.number
                                    )
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'Telefoonnummer 2'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-6', placeholder: 'Telefoonnummer' },
                                        o.number
                                    )
                                )
                            ),
                            r.a.createElement(
                                O.a,
                                { xs: 12, md: 6 },
                                r.a.createElement(qe.a, { className: 'field-label' }, 'Bezoekadres'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'Straat' },
                                        s.street
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-4', placeholder: 'Nummer' },
                                        s.number
                                    ),
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-6 col-sm-4 ', placeholder: 'Toevoeging' },
                                        s.addition
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-4', placeholder: 'Postcode' },
                                        s.postalCode
                                    ),
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-6', placeholder: 'Plaats' },
                                        s.city
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'Land' },
                                        s.country ? s.country.name : ''
                                    )
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'Postadres'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'Straat' },
                                        d.street
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-4', placeholder: 'Nummer' },
                                        d.number
                                    ),
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-6 col-sm-4 ', placeholder: 'Toevoeging' },
                                        d.addition
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-4', placeholder: 'Postcode' },
                                        d.postalCode
                                    ),
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-6', placeholder: 'Plaats' },
                                        d.city
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'Land' },
                                        d.country ? d.country.name : ''
                                    ),
                                    ' '
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'Nota adres'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'Straat' },
                                        p.street
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-4', placeholder: 'Nummer' },
                                        p.number
                                    ),
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-6 col-sm-4 ', placeholder: 'Toevoeging' },
                                        p.addition
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-4', placeholder: 'Postcode' },
                                        p.postalCode
                                    ),
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-6', placeholder: 'Plaats' },
                                        p.city
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'Land' },
                                        p.country ? p.country.name : ''
                                    )
                                ),
                                r.a.createElement(qe.a, { className: 'field-label' }, 'Huidige energie leverancier'),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        Be,
                                        { className: 'col-12 col-sm-8', placeholder: 'Energieleverancier' },
                                        v.energySupplier ? v.energySupplier.name : ''
                                    )
                                ),
                                v && v.energySupplierId
                                    ? r.a.createElement(
                                          r.a.Fragment,
                                          null,
                                          r.a.createElement(
                                              qe.a,
                                              { className: 'field-label' },
                                              'Klant nummer bij leverancier'
                                          ),
                                          r.a.createElement(
                                              j.a,
                                              null,
                                              r.a.createElement(
                                                  Be,
                                                  { className: 'col-12 col-sm-8', placeholder: 'Klant nummer' },
                                                  v.esNumber
                                              )
                                          ),
                                          r.a.createElement(
                                              qe.a,
                                              { className: 'field-label' },
                                              'Klant bij leverancier sinds'
                                          ),
                                          r.a.createElement(
                                              j.a,
                                              null,
                                              r.a.createElement(
                                                  Be,
                                                  { className: 'col-12 col-sm-8', placeholder: 'Klant sinds' },
                                                  v.memberSince ? u()(v.memberSince).format('L') : ''
                                              )
                                          ),
                                          r.a.createElement(
                                              qe.a,
                                              { className: 'field-label' },
                                              'EAN nummer electriciteit'
                                          ),
                                          r.a.createElement(
                                              j.a,
                                              null,
                                              r.a.createElement(
                                                  Be,
                                                  {
                                                      className: 'col-12 col-sm-8',
                                                      placeholder: 'EAN nummer electriciteit',
                                                  },
                                                  v.eanElectricity
                                              )
                                          ),
                                          r.a.createElement(qe.a, { className: 'field-label' }, 'EAN nummer gas'),
                                          r.a.createElement(
                                              j.a,
                                              null,
                                              r.a.createElement(
                                                  Be,
                                                  { className: 'col-12 col-sm-8', placeholder: 'EAN nummer gas' },
                                                  v.eanGas
                                              )
                                          )
                                      )
                                    : ''
                            )
                        )
                    );
                },
                ma = function(e) {
                    var a = e.portalSettings,
                        t = e.initialContact,
                        n = e.projectTypeCodeRef,
                        l = e.errors,
                        i = e.touched,
                        c = e.values,
                        m = e.setFieldValue;
                    return r.a.createElement(
                        j.a,
                        null,
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, { className: 'field-label' }, 'Contactnummer'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(Be, { className: 'col-12 col-sm-8' }, c.number)
                            ),
                            r.a.createElement(qe.a, { className: 'field-label required' }, 'Naam'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'organisation.name',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'name',
                                                placeholder: 'Naam',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'KvK'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'organisation.chamberOfCommerceNumber',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'chamber_of_commerce_number',
                                                placeholder: 'KvK',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'BTW nummer'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'organisation.vatNumber',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'vat_number',
                                                placeholder: 'BTW nummer',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                {
                                    htmlFor: 'iban',
                                    className: t.isParticipant ? 'field-label required' : 'field-label',
                                },
                                'IBAN gegevens'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'iban',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'iban',
                                                placeholder: 'Rekeningnummer (IBAN)',
                                                customOnChange: function(e) {
                                                    m('iban', ('' + e.target.value).toUpperCase());
                                                },
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'ibanAttn',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'iban_attn',
                                                placeholder: 'IBAN te name van',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(qe.a, { className: 'field-label' }, 'Website'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'organisation.website',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'website',
                                                placeholder: 'Website',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                { htmlFor: 'did_agree_avg', className: 'field-label required' },
                                'Akkoord privacybeleid'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'didAgreeAvg',
                                        render: function(e) {
                                            var n = e.field;
                                            return r.a.createElement(
                                                'label',
                                                { className: 'w-checkbox checkbox-fld' },
                                                r.a.createElement(
                                                    'input',
                                                    Object.assign({ type: 'checkbox' }, n, {
                                                        id: 'did_agree_avg',
                                                        checked: n.value,
                                                        className: 'w-checkbox-input checkbox',
                                                        disabled: t.didAgreeAvg,
                                                    })
                                                ),
                                                r.a.createElement(
                                                    'span',
                                                    {
                                                        htmlFor: 'did_agree_avg',
                                                        className: 'checkbox-label w-form-label',
                                                    },
                                                    'Ik ga akkoord met',
                                                    ' ',
                                                    r.a.createElement(
                                                        'a',
                                                        { href: a.linkPrivacyPolicy, target: '_blank' },
                                                        'privacybeleid'
                                                    ),
                                                    ' ',
                                                    c.didAgreeAvg
                                                        ? r.a.createElement(
                                                              'em',
                                                              null,
                                                              '(',
                                                              t.dateDidAgreeAvg
                                                                  ? u()(t.dateDidAgreeAvg).format('L')
                                                                  : u()().format('L'),
                                                              ')'
                                                          )
                                                        : ''
                                                ),
                                                i[n.name] && l[n.name]
                                                    ? r.a.createElement(
                                                          'div',
                                                          { className: 'error-message text-danger' },
                                                          l[n.name]
                                                      )
                                                    : null
                                            );
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                { htmlFor: 'email-correspondence', className: 'field-label required' },
                                'E-mailadres correspondentie'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 12, md: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'emailCorrespondence.email',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'email-correspondence',
                                                placeholder: 'E-mailadres',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                { htmlFor: 'email-invoice', className: 'field-label' },
                                'E-mailadres nota'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 12, md: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'emailInvoice.email',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'email-invoice',
                                                placeholder: 'E-mailadres',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                {
                                    htmlFor: 'telephone-number-1',
                                    className: t.isParticipant ? 'field-label required' : 'field-label',
                                },
                                'Telefoonnummer 1'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 10, md: 6 },
                                    r.a.createElement(J.a, {
                                        name: 'phoneNumberPrimary.number',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'telephone-number-1',
                                                placeholder: 'Nummer',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                qe.a,
                                { htmlFor: 'telephone-number-2', className: 'field-label' },
                                'Telefoonnummer 2'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 10, md: 6 },
                                    r.a.createElement(J.a, {
                                        name: 'phoneNumberTwo.number',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'telephone-number-2',
                                                placeholder: 'Nummer',
                                            });
                                        },
                                    })
                                )
                            )
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(
                                qe.a,
                                {
                                    htmlFor: 'street',
                                    className: t.isParticipant ? 'field-label required' : 'field-label',
                                },
                                'Bezoekadres'
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 12 },
                                    r.a.createElement(J.a, {
                                        name: 'visitAddress.street',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'street',
                                                placeholder: 'Straat',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'visitAddress.number',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'street_number',
                                                placeholder: 'Nummer',
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'visitAddress.addition',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'addition',
                                                placeholder: 'Toevoeging',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'visitAddress.postalCode',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'postal_code',
                                                placeholder: 'Postcode',
                                                disabled: t.isParticipantPcrProject,
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'visitAddress.city',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'city',
                                                placeholder: 'Plaats',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'visitAddress.countryId',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(He, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'country_id',
                                                placeholder: 'Selecteer uw land',
                                                options: Ke,
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(qe.a, { htmlFor: 'street', className: 'field-label' }, 'Postadres'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 12 },
                                    r.a.createElement(J.a, {
                                        name: 'postalAddress.street',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'street',
                                                placeholder: 'Straat',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'postalAddress.number',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'street_number',
                                                placeholder: 'Nummer',
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'postalAddress.addition',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'addition',
                                                placeholder: 'Toevoeging',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'postalAddress.postalCode',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'postal_code',
                                                placeholder: 'Postcode',
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'postalAddress.city',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'city',
                                                placeholder: 'Plaats',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'postalAddress.countryId',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(He, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'country_id',
                                                placeholder: 'Selecteer uw land',
                                                options: Ke,
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(qe.a, { htmlFor: 'street', className: 'field-label' }, 'Nota adres'),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 12 },
                                    r.a.createElement(J.a, {
                                        name: 'invoiceAddress.street',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'street',
                                                placeholder: 'Straat',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'invoiceAddress.number',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'street_number',
                                                placeholder: 'Nummer',
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'invoiceAddress.addition',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'addition',
                                                placeholder: 'Toevoeging',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 4 },
                                    r.a.createElement(J.a, {
                                        name: 'invoiceAddress.postalCode',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'postal_code',
                                                placeholder: 'Postcode',
                                            });
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'invoiceAddress.city',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(Z, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'city',
                                                placeholder: 'Plaats',
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, sm: 8 },
                                    r.a.createElement(J.a, {
                                        name: 'invoiceAddress.countryId',
                                        render: function(e) {
                                            var a = e.field;
                                            return r.a.createElement(He, {
                                                field: a,
                                                errors: l,
                                                touched: i,
                                                id: 'country_id',
                                                placeholder: 'Selecteer uw land',
                                                options: Ke,
                                            });
                                        },
                                    })
                                )
                            ),
                            'postalcode_link_capital' === n || void 0 === n
                                ? r.a.createElement(
                                      r.a.Fragment,
                                      null,
                                      r.a.createElement(
                                          qe.a,
                                          {
                                              htmlFor: 'energy_supplier_id',
                                              className:
                                                  t.isParticipantPcrProject || 'postalcode_link_capital' === n
                                                      ? 'field-label required'
                                                      : 'field-label',
                                          },
                                          'Huidige energie leverancier'
                                      ),
                                      r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              O.a,
                                              { xs: 12, sm: 12, md: 8 },
                                              r.a.createElement(J.a, {
                                                  name: 'primaryContactEnergySupplier.energySupplierId',
                                                  render: function(e) {
                                                      var a = e.field;
                                                      return r.a.createElement(He, {
                                                          field: a,
                                                          errors: l,
                                                          touched: i,
                                                          id: 'energy_supplier_id',
                                                          placeholder: 'Selecteer uw leverancier',
                                                          options: Ue,
                                                      });
                                                  },
                                              })
                                          )
                                      ),
                                      c.primaryContactEnergySupplier && c.primaryContactEnergySupplier.energySupplierId
                                          ? r.a.createElement(
                                                r.a.Fragment,
                                                null,
                                                r.a.createElement(
                                                    qe.a,
                                                    {
                                                        htmlFor: 'es_number',
                                                        className:
                                                            'postalcode_link_capital' === n
                                                                ? 'field-label required'
                                                                : 'field-label',
                                                    },
                                                    'Klant nummer bij leverancier'
                                                ),
                                                r.a.createElement(
                                                    j.a,
                                                    null,
                                                    r.a.createElement(
                                                        O.a,
                                                        { xs: 12, sm: 12, md: 8 },
                                                        r.a.createElement(J.a, {
                                                            name: 'primaryContactEnergySupplier.esNumber',
                                                            render: function(e) {
                                                                var a = e.field;
                                                                return r.a.createElement(Z, {
                                                                    field: a,
                                                                    errors: l,
                                                                    touched: i,
                                                                    id: 'es_number',
                                                                    placeholder: 'Klant nummer bij leverancier',
                                                                });
                                                            },
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    qe.a,
                                                    { htmlFor: 'member_since', className: 'field-label' },
                                                    'Klant bij leverancier sinds'
                                                ),
                                                r.a.createElement(
                                                    j.a,
                                                    null,
                                                    r.a.createElement(
                                                        O.a,
                                                        { xs: 12, sm: 12, md: 8 },
                                                        r.a.createElement(J.a, {
                                                            name: 'primaryContactEnergySupplier.memberSince',
                                                            render: function(e) {
                                                                var a = e.field;
                                                                return r.a.createElement(
                                                                    aa,
                                                                    Object.assign({}, a, {
                                                                        errors: l,
                                                                        touched: i,
                                                                        onChangeAction: m,
                                                                        id: 'member_since',
                                                                        placeholder: 'Klant sinds',
                                                                    })
                                                                );
                                                            },
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    qe.a,
                                                    {
                                                        htmlFor: 'ean_electricity',
                                                        className:
                                                            'postalcode_link_capital' === n
                                                                ? 'field-label required'
                                                                : 'field-label',
                                                    },
                                                    'EAN nummer electriciteit'
                                                ),
                                                r.a.createElement(
                                                    j.a,
                                                    null,
                                                    r.a.createElement(
                                                        O.a,
                                                        { xs: 12, sm: 12, md: 8 },
                                                        r.a.createElement(J.a, {
                                                            name: 'primaryContactEnergySupplier.eanElectricity',
                                                            render: function(e) {
                                                                var a = e.field;
                                                                return r.a.createElement(Z, {
                                                                    field: a,
                                                                    errors: l,
                                                                    touched: i,
                                                                    id: 'ean_electricity',
                                                                    placeholder: 'EAN nummer electriciteit',
                                                                });
                                                            },
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    qe.a,
                                                    { htmlFor: 'ean_gas', className: 'field-label' },
                                                    'EAN nummer gas'
                                                ),
                                                r.a.createElement(
                                                    j.a,
                                                    null,
                                                    r.a.createElement(
                                                        O.a,
                                                        { xs: 12, sm: 12, md: 8 },
                                                        r.a.createElement(J.a, {
                                                            name: 'primaryContactEnergySupplier.eanGas',
                                                            render: function(e) {
                                                                var a = e.field;
                                                                return r.a.createElement(Z, {
                                                                    field: a,
                                                                    errors: l,
                                                                    touched: i,
                                                                    id: 'ean_gas',
                                                                    placeholder: 'EAN nummer gas',
                                                                });
                                                            },
                                                        })
                                                    )
                                                )
                                            )
                                          : ''
                                  )
                                : null
                        )
                    );
                },
                oa = {
                    validationSchemaBasic: Q.object().shape({
                        didAgreeAvg: Q.bool().test(
                            'didAgreeAvg',
                            'Je dient akkoord te gaan met privacybeleid!',
                            function(e) {
                                return !0 === e;
                            }
                        ),
                        organisation: Q.object().shape({
                            name: Q.string()
                                .trim()
                                .required('Verplicht'),
                        }),
                        emailCorrespondence: Q.object().shape({
                            email: Q.string()
                                .trim()
                                .email('Ongeldig e-mail adres')
                                .required('Verplicht'),
                        }),
                        emailInvoice: Q.object().shape({
                            email: Q.string()
                                .trim()
                                .email('Ongeldig e-mail adres'),
                        }),
                        postalAddress: Q.object().shape({
                            street: Q.string().trim(),
                            number: Q.string()
                                .nullable()
                                .trim()
                                .test('number', 'Alleen nummers', function(e) {
                                    return Number.isInteger(+e);
                                }),
                            postalCode: Q.string()
                                .trim()
                                .test('postal-code-nl-check', 'Formaat Nederlandse postcode is 1234 AB', function(e) {
                                    return (
                                        ('NL' !== this.parent.countryId &&
                                            null !== this.parent.countryId &&
                                            '' != this.parent.countryId) ||
                                        '' == e.trim() ||
                                        !e.search(/^[1-9][0-9]{3}[ ]?([A-RT-Za-rt-z][A-Za-z]|[sS][BCbcE-Re-rT-Zt-z])$/)
                                    );
                                }),
                            city: Q.string().trim(),
                        }),
                        visitAddress: Q.object().shape({
                            street: Q.string().trim(),
                            number: Q.string()
                                .nullable()
                                .trim()
                                .test('number', 'Alleen nummers', function(e) {
                                    return Number.isInteger(+e);
                                }),
                            postalCode: Q.string()
                                .trim()
                                .test('postal-code-nl-check', 'Formaat Nederlandse postcode is 1234 AB', function(e) {
                                    return (
                                        ('NL' !== this.parent.countryId &&
                                            null !== this.parent.countryId &&
                                            '' != this.parent.countryId) ||
                                        '' == e.trim() ||
                                        !e.search(/^[1-9][0-9]{3}[ ]?([A-RT-Za-rt-z][A-Za-z]|[sS][BCbcE-Re-rT-Zt-z])$/)
                                    );
                                }),
                            city: Q.string().trim(),
                        }),
                        invoiceAddress: Q.object().shape({
                            street: Q.string().trim(),
                            number: Q.string()
                                .nullable()
                                .test('number', 'Alleen nummers', function(e) {
                                    return Number.isInteger(+e);
                                }),
                            postalCode: Q.string()
                                .trim()
                                .test('postal-code-nl-check', 'Formaat Nederlandse postcode is 1234 AB', function(e) {
                                    return (
                                        ('NL' !== this.parent.countryId &&
                                            null !== this.parent.countryId &&
                                            '' != this.parent.countryId) ||
                                        '' == e.trim() ||
                                        !e.search(/^[1-9][0-9]{3}[ ]?([A-RT-Za-rt-z][A-Za-z]|[sS][BCbcE-Re-rT-Zt-z])$/)
                                    );
                                }),
                            city: Q.string().trim(),
                        }),
                        phoneNumberPrimary: Q.object().shape({
                            number: Q.string()
                                .trim()
                                .matches(/(\d.*){10}|^$/, 'Minimaal 10 cijfers nodig'),
                        }),
                        phoneNumberTwo: Q.object().shape({
                            number: Q.string()
                                .trim()
                                .matches(/(\d.*){10}|^$/, 'Minimaal 10 cijfers nodig'),
                        }),
                        primaryContactEnergySupplier: Q.object().shape({
                            eanElectricity: Q.string()
                                .nullable()
                                .trim()
                                .matches(/(\d.*){18}|^$/, 'Minimaal 18 cijfers nodig'),
                            eanGas: Q.string()
                                .nullable()
                                .trim()
                                .matches(/(\d.*){18}|^$/, 'Minimaal 18 cijfers nodig'),
                        }),
                    }),
                    validationSchemaAdditional: Q.object().shape({
                        phoneNumberPrimary: Q.object().shape({
                            number: Q.string()
                                .trim()
                                .matches(/(\d.*){10}/, 'Minimaal 10 cijfers nodig')
                                .required('Verplicht'),
                        }),
                        iban: Q.string()
                            .trim()
                            .nullable()
                            .required('Verplicht'),
                        ibanAttn: Q.string()
                            .trim()
                            .nullable()
                            .required('Verplicht'),
                        visitAddress: Q.object().shape({
                            street: Q.string()
                                .trim()
                                .required('Verplicht'),
                            number: Q.string()
                                .nullable()
                                .trim()
                                .test('number', 'Alleen nummers', function(e) {
                                    return Number.isInteger(+e);
                                })
                                .required('Verplicht'),
                            postalCode: Q.string()
                                .trim()
                                .test('postal-code-nl-check', 'Formaat Nederlandse postcode is 1234 AB', function(e) {
                                    return (
                                        ('NL' !== this.parent.countryId &&
                                            null !== this.parent.countryId &&
                                            '' != this.parent.countryId) ||
                                        !e.search(/^[1-9][0-9]{3}[ ]?([A-RT-Za-rt-z][A-Za-z]|[sS][BCbcE-Re-rT-Zt-z])$/)
                                    );
                                })
                                .required('Verplicht'),
                            city: Q.string()
                                .trim()
                                .required('Verplicht'),
                        }),
                    }),
                    validationSchemaPcrAdditional: Q.object().shape({
                        primaryContactEnergySupplier: Q.object().shape({
                            energySupplierId: Q.string()
                                .nullable()
                                .required('Verplicht'),
                            esNumber: Q.string()
                                .nullable()
                                .trim()
                                .required('Verplicht'),
                            eanElectricity: Q.string()
                                .nullable()
                                .trim()
                                .matches(/(\d.*){18}|^$/, 'Minimaal 18 cijfers nodig')
                                .required('Verplicht'),
                            eanGas: Q.string()
                                .nullable()
                                .trim()
                                .matches(/(\d.*){18}|^$/, 'Minimaal 18 cijfers nodig'),
                        }),
                    }),
                };
            var sa = function(e) {
                    var a = e.portalSettings,
                        t = e.initialContact,
                        n = e.handleSubmitContactValues,
                        l = e.editButtonGroup,
                        i = e.editForm,
                        c = e.setEditForm,
                        m = t.isParticipantPcrProject
                            ? oa.validationSchemaBasic
                                  .concat(oa.validationSchemaAdditional)
                                  .concat(oa.validationSchemaPcrAdditional)
                            : t.isParticipant
                            ? oa.validationSchemaBasic.concat(oa.validationSchemaAdditional)
                            : oa.validationSchemaBasic;
                    return r.a.createElement(
                        'div',
                        null,
                        i
                            ? r.a.createElement(J.d, {
                                  initialValues: t,
                                  enableReinitialize: !0,
                                  validationSchema: m,
                                  onSubmit: function(e, a) {
                                      a.setSubmitting(!0),
                                          n(e, a, function() {
                                              return c(!1);
                                          });
                                  },
                                  render: function(e) {
                                      var n = e.errors,
                                          l = e.touched,
                                          i = e.setFieldValue,
                                          m = e.isSubmitting,
                                          o = e.values,
                                          s = e.handleSubmit;
                                      return r.a.createElement(
                                          J.c,
                                          null,
                                          r.a.createElement(ma, {
                                              portalSettings: a,
                                              initialContact: t,
                                              touched: l,
                                              errors: n,
                                              setFieldValue: i,
                                              values: o,
                                          }),
                                          r.a.createElement(
                                              j.a,
                                              null,
                                              r.a.createElement(
                                                  O.a,
                                                  null,
                                                  r.a.createElement(
                                                      Le.a,
                                                      { 'aria-label': 'Steps', className: 'float-right' },
                                                      r.a.createElement(
                                                          ae.a,
                                                          {
                                                              variant: 'outline-dark',
                                                              size: 'sm',
                                                              onClick: function() {
                                                                  c(!1);
                                                              },
                                                          },
                                                          'Annuleren'
                                                      ),
                                                      r.a.createElement(
                                                          ae.a,
                                                          {
                                                              className: 'w-button',
                                                              size: 'sm',
                                                              onClick: s,
                                                              disabled: m,
                                                          },
                                                          m
                                                              ? r.a.createElement(
                                                                    'span',
                                                                    null,
                                                                    r.a.createElement(X.a, {
                                                                        color: 'white',
                                                                        size: 14,
                                                                    }),
                                                                    'Bezig met opslaan'
                                                                )
                                                              : 'Opslaan'
                                                      )
                                                  )
                                              )
                                          ),
                                          Object(Y.isEmpty)(n)
                                              ? null
                                              : r.a.createElement(
                                                    j.a,
                                                    null,
                                                    r.a.createElement(
                                                        O.a,
                                                        null,
                                                        r.a.createElement(
                                                            'div',
                                                            { className: 'alert-wrapper' },
                                                            r.a.createElement(
                                                                la.a,
                                                                { key: 'form-general-error-alert', variant: 'warning' },
                                                                'Niet alle verplichten velden zijn (juist) ingevuld!'
                                                            )
                                                        )
                                                    )
                                                )
                                      );
                                  },
                              })
                            : r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement(ca, { portalSettings: a, initialContact: t }),
                                  r.a.createElement(j.a, null, r.a.createElement(O.a, null, l))
                              )
                    );
                },
                da = function(e) {
                    var a = this,
                        t = Object(n.useState)({}),
                        l = Object(s.a)(t, 2),
                        i = l[0],
                        m = l[1],
                        o = Object(n.useState)({}),
                        d = Object(s.a)(o, 2),
                        u = d[0],
                        p = d[1],
                        E = Object(n.useState)(!0),
                        g = Object(s.a)(E, 2),
                        f = g[0],
                        h = g[1],
                        b = (function(e) {
                            var a = Object(n.useRef)();
                            return (
                                Object(n.useEffect)(function() {
                                    a.current = e;
                                }),
                                a.current
                            );
                        })(e.currentSelectedContact),
                        v = Object(n.useState)(!1),
                        N = Object(s.a)(v, 2),
                        S = N[0],
                        w = N[1];
                    function k() {
                        h(!0),
                            Ie(e.currentSelectedContact.id)
                                .then(function(a) {
                                    var t = Re(a.data.data);
                                    m(t), e.updateNameSelectedContact(t.fullName), h(!1);
                                })
                                .catch(function(e) {
                                    alert('Er is iets misgegaan met laden. Herlaad de pagina opnieuw.'), h(!1);
                                });
                    }
                    function x(e, a, t) {
                        var n = Object(y.a)({}, i, {}, e);
                        Pe(n)
                            .then(function(e) {
                                k(), a.setSubmitting(!1), t();
                            })
                            .catch(function(e) {
                                a.setSubmitting(!1),
                                    alert('Er is iets misgegaan met opslaan! Herlaad de pagina opnieuw.');
                            });
                    }
                    Object(n.useEffect)(
                        function() {
                            ge(
                                '?keys[]=portalName&keys[]=portalWebsite&keys[]=portalUrl&keys[]=responsibleUserId&keys[]=checkContactTaskResponsibleUserId&keys[]=linkPrivacyPolicy'
                            )
                                .then(function(e) {
                                    p(Object(y.a)({}, e.data));
                                })
                                .catch(function(e) {
                                    a.setState({ isLoading: !1, hasError: !0 });
                                }),
                                e.currentSelectedContact.id && ((b && b.id == e.currentSelectedContact.id) || k());
                        },
                        [e.currentSelectedContact]
                    );
                    var A = r.a.createElement(
                        Le.a,
                        { 'aria-label': 'Steps', className: 'float-right' },
                        r.a.createElement(
                            ae.a,
                            {
                                className: 'w-button',
                                size: 'sm',
                                onClick: function() {
                                    w(!0);
                                },
                            },
                            'Wijzig'
                        )
                    );
                    return r.a.createElement(
                        'div',
                        { className: 'content-section' },
                        f
                            ? r.a.createElement(Fe, null)
                            : r.a.createElement(
                                  'div',
                                  { className: 'content-container w-container' },
                                  r.a.createElement(
                                      j.a,
                                      null,
                                      r.a.createElement(
                                          Le.a,
                                          { 'aria-label': 'Steps', className: 'float-left' },
                                          r.a.createElement(
                                              c.b,
                                              { to: '/inschrijven-projecten' },
                                              r.a.createElement(
                                                  ae.a,
                                                  { className: 'w-button', size: 'sm' },
                                                  'Inschrijven projecten'
                                              )
                                          ),
                                          '\xa0',
                                          r.a.createElement(
                                              c.b,
                                              { to: '/inschrijvingen-projecten' },
                                              r.a.createElement(
                                                  ae.a,
                                                  { className: 'w-button', size: 'sm' },
                                                  'Huidige deelnames'
                                              )
                                          )
                                      )
                                  ),
                                  S
                                      ? r.a.createElement(
                                            'h1',
                                            { className: 'content-heading mt-0' },
                                            'Contactgegevens'
                                        )
                                      : r.a.createElement(
                                            j.a,
                                            null,
                                            r.a.createElement(
                                                O.a,
                                                null,
                                                r.a.createElement(
                                                    'h1',
                                                    { className: 'content-heading mt-0' },
                                                    'Contactgegevens'
                                                )
                                            ),
                                            r.a.createElement(O.a, null, A)
                                        ),
                                  r.a.createElement('div', { className: 'w-form' }),
                                  'person' === i.typeId
                                      ? r.a.createElement(ia, {
                                            portalSettings: u,
                                            initialContact: i,
                                            handleSubmitContactValues: x,
                                            editButtonGroup: A,
                                            editForm: S,
                                            setEditForm: w,
                                        })
                                      : null,
                                  'organisation' === i.typeId
                                      ? r.a.createElement(sa, {
                                            portalSettings: u,
                                            initialContact: i,
                                            handleSubmitContactValues: x,
                                            editButtonGroup: A,
                                            editForm: S,
                                            setEditForm: w,
                                        })
                                      : null
                              )
                    );
                };
            function ua(e) {
                return r.a.createElement(k, null, function(a) {
                    var t = a.currentSelectedContact,
                        n = a.updateNameSelectedContact;
                    return r.a.createElement(
                        da,
                        Object.assign({}, e, { currentSelectedContact: t, updateNameSelectedContact: n })
                    );
                });
            }
            var pa = function(e) {
                    e.handleSubmit;
                    var a = e.initialValues;
                    return r.a.createElement(J.d, {
                        initialValues: a,
                        enableReinitialize: !0,
                        onSubmit: function(e, a) {
                            a.setSubmitting(!0), console.log(e);
                        },
                        render: function(e) {
                            e.errors, e.touched, e.setFieldValue;
                            var a = e.isSubmitting,
                                t = e.values;
                            return r.a.createElement(
                                J.c,
                                { id: 'email-form', name: 'email-form' },
                                r.a.createElement(
                                    'div',
                                    { className: 'w-row' },
                                    r.a.createElement(
                                        'div',
                                        { className: 'w-col w-col-6' },
                                        r.a.createElement(
                                            'h6',
                                            { className: 'heading-content' },
                                            'Mijn interessegebieden'
                                        ),
                                        r.a.createElement(J.b, {
                                            name: 'myAreasOfInterest',
                                            render: function(e) {
                                                return r.a.createElement(
                                                    'div',
                                                    null,
                                                    t.myAreasOfInterest &&
                                                        t.myAreasOfInterest.map(function(e, a) {
                                                            return r.a.createElement(
                                                                'div',
                                                                { key: a },
                                                                r.a.createElement(J.a, {
                                                                    name: 'myAreasOfInterest['.concat(a, "]['value']"),
                                                                    render: function(a) {
                                                                        var t = a.field;
                                                                        return r.a.createElement(
                                                                            'label',
                                                                            { className: 'w-checkbox checkbox-fld' },
                                                                            r.a.createElement(
                                                                                'input',
                                                                                Object.assign({ type: 'checkbox' }, t, {
                                                                                    id: e.name,
                                                                                    checked: e.value,
                                                                                    className:
                                                                                        'w-checkbox-input checkbox',
                                                                                })
                                                                            ),
                                                                            r.a.createElement(
                                                                                'span',
                                                                                {
                                                                                    htmlFor: e.name,
                                                                                    className:
                                                                                        'checkbox-label w-form-label',
                                                                                },
                                                                                e.name
                                                                            )
                                                                        );
                                                                    },
                                                                })
                                                            );
                                                        })
                                                );
                                            },
                                        }),
                                        r.a.createElement('h6', { className: 'heading-content' }, 'Deelname'),
                                        r.a.createElement(J.b, {
                                            name: 'participations',
                                            render: function(e) {
                                                return r.a.createElement(
                                                    'div',
                                                    null,
                                                    t.participations &&
                                                        t.participations.map(function(e, a) {
                                                            return r.a.createElement(
                                                                'div',
                                                                { key: a },
                                                                r.a.createElement(J.a, {
                                                                    name: 'participations['.concat(a, "]['value']"),
                                                                    render: function(a) {
                                                                        var t = a.field;
                                                                        return r.a.createElement(
                                                                            'label',
                                                                            { className: 'w-checkbox checkbox-fld' },
                                                                            r.a.createElement(
                                                                                'input',
                                                                                Object.assign({ type: 'checkbox' }, t, {
                                                                                    id: e.name,
                                                                                    checked: e.value,
                                                                                    className:
                                                                                        'w-checkbox-input checkbox',
                                                                                })
                                                                            ),
                                                                            r.a.createElement(
                                                                                'span',
                                                                                {
                                                                                    htmlFor: e.name,
                                                                                    className:
                                                                                        'checkbox-label w-form-label',
                                                                                },
                                                                                e.name
                                                                            )
                                                                        );
                                                                    },
                                                                })
                                                            );
                                                        })
                                                );
                                            },
                                        }),
                                        r.a.createElement('h6', { className: 'heading-content' }, 'Algemeen'),
                                        r.a.createElement(J.b, {
                                            name: 'generalOptions',
                                            render: function(e) {
                                                return r.a.createElement(
                                                    'div',
                                                    null,
                                                    t.generalOptions &&
                                                        t.generalOptions.map(function(e, a) {
                                                            return r.a.createElement(
                                                                'div',
                                                                { key: a },
                                                                r.a.createElement(J.a, {
                                                                    name: 'generalOptions['.concat(a, "]['value']"),
                                                                    render: function(a) {
                                                                        var t = a.field;
                                                                        return r.a.createElement(
                                                                            'label',
                                                                            { className: 'w-checkbox checkbox-fld' },
                                                                            r.a.createElement(
                                                                                'input',
                                                                                Object.assign({ type: 'checkbox' }, t, {
                                                                                    id: e.name,
                                                                                    checked: e.value,
                                                                                    className:
                                                                                        'w-checkbox-input checkbox',
                                                                                })
                                                                            ),
                                                                            r.a.createElement(
                                                                                'span',
                                                                                {
                                                                                    htmlFor: e.name,
                                                                                    className:
                                                                                        'checkbox-label w-form-label',
                                                                                },
                                                                                e.name
                                                                            )
                                                                        );
                                                                    },
                                                                })
                                                            );
                                                        })
                                                );
                                            },
                                        })
                                    )
                                ),
                                r.a.createElement(
                                    'div',
                                    { className: 'w-row' },
                                    r.a.createElement(
                                        'div',
                                        { className: 'w-col w-col-6' },
                                        r.a.createElement(ne, {
                                            buttonText: 'Opslaan',
                                            buttonClassName: 'save-btn w-button',
                                            type: 'submit',
                                            loading: a,
                                        })
                                    ),
                                    r.a.createElement('div', { className: 'w-col w-col-6' })
                                )
                            );
                        },
                    });
                },
                Ea = function() {
                    return r.a.createElement(
                        'div',
                        { className: 'content-section' },
                        r.a.createElement(
                            'div',
                            { className: 'content-container w-container' },
                            r.a.createElement('h1', { className: 'content-heading' }, 'Instellingen'),
                            r.a.createElement('div', { className: 'w-form' }),
                            r.a.createElement(pa, {
                                initialValues: {
                                    myAreasOfInterest: [
                                        { id: 4, name: 'Gevel isolatie', value: !0 },
                                        { id: 5, name: 'Zonnepanelen', value: !1 },
                                        { id: 6, name: 'Dak isolatie', value: !1 },
                                        { id: 7, name: 'Zonneboiler', value: !0 },
                                    ],
                                    participations: [
                                        { id: 2, name: 'Test groep', value: !0 },
                                        { id: 3, name: 'De leuke mensen', value: !1 },
                                    ],
                                    generalOptions: [{ id: 1, name: 'Test algemeen groep', value: !1 }],
                                },
                            })
                        )
                    );
                },
                ga = function() {
                    return q.get('/jory/project', {
                        params: {
                            jory: {
                                fld: ['id', 'name', 'dateStartRegistrations', 'dateEndRegistrations'],
                                flt: {
                                    and: [
                                        { f: 'dateStartRegistrations', o: '<=', d: u()().format('YYYY-MM-DD') },
                                        { f: 'dateEndRegistrations', o: '>=', d: u()().format('YYYY-MM-DD') },
                                    ],
                                },
                            },
                        },
                    });
                },
                fa = function(e) {
                    var a = '/jory/project/'.concat(e);
                    return q.get(a, {
                        params: {
                            jory: {
                                fld: [
                                    'id',
                                    'name',
                                    'description',
                                    'dateStartRegistrations',
                                    'dateEndRegistrations',
                                    'dateEndRegistrations',
                                    'minParticipations',
                                    'maxParticipations',
                                    'totalParticipations',
                                    'participationWorth',
                                    'amountOfLoanNeeded',
                                    'minAmountLoan',
                                    'maxAmountLoan',
                                    'postalcodeLink',
                                    'linkAgreeTerms',
                                    'linkUnderstandInfo',
                                ],
                                rlt: { projectType: { fld: ['id', 'codeRef'] } },
                            },
                        },
                    });
                },
                ha = function(e) {
                    return (
                        e || (e = 0),
                        (e = parseFloat(100 * e) / 100),
                        isNaN(e)
                            ? 'Ongeldig bedrag'
                            : '\u20ac '.concat(
                                  e.toLocaleString('nl', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                              )
                    );
                },
                ba = t(19),
                va = t.n(ba);
            var Na = function(e) {
                var a = e.next,
                    t = e.project,
                    n = e.initialRegisterValues,
                    l = e.handleSubmitRegisterValues,
                    i = Q.object({
                        amountOptioned: Q.string()
                            .required('Verplicht')
                            .test('amountOptioned', 'Minimum van ' + t.minAmountLoan + ' nodig', function(e) {
                                return e.replace(',', '.') >= t.minAmountLoan;
                            })
                            .test('amountOptioned', 'Maximum van ' + t.maxAmountLoan + ' bereikt', function(e) {
                                return e.replace(',', '.') <= t.maxAmountLoan;
                            })
                            .matches(/^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/, 'Fout bedrag'),
                    });
                return r.a.createElement(
                    J.d,
                    {
                        validationSchema: i,
                        onSubmit: function(e, t) {
                            l(e), a();
                        },
                        initialValues: n,
                    },
                    function(e) {
                        var a = e.handleSubmit,
                            n = e.values,
                            l = e.touched,
                            i = e.errors;
                        return r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                                va.a,
                                null,
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(qe.a, { className: 'field-label' }, 'Minimaal bedrag'),
                                        r.a.createElement(Be, null, t.minAmountLoan)
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(qe.a, { className: 'field-label' }, 'Maximaal bedrag'),
                                        r.a.createElement(Be, null, t.maxAmountLoan)
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            va.a.Label,
                                            { className: 'field-label' },
                                            'In te leggen bedrag'
                                        ),
                                        r.a.createElement(J.a, {
                                            name: 'amountOptioned',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    errors: i,
                                                    touched: l,
                                                    id: 'amount_optioned',
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(qe.a, { className: 'field-label' }, 'Te betalen bedrag'),
                                        r.a.createElement(Be, null, ha(n.amountOptioned))
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        null,
                                        r.a.createElement(
                                            Le.a,
                                            { 'aria-label': 'Steps', className: 'float-right' },
                                            r.a.createElement(
                                                ae.a,
                                                { className: 'w-button', size: 'sm', onClick: a },
                                                'Ga naar gegevens'
                                            )
                                        )
                                    )
                                ),
                                Object(Y.isEmpty)(i)
                                    ? null
                                    : r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              O.a,
                                              null,
                                              r.a.createElement(
                                                  'div',
                                                  { className: 'alert-wrapper' },
                                                  r.a.createElement(
                                                      la.a,
                                                      { key: 'form-general-error-alert', variant: 'warning' },
                                                      'Niet alle verplichten velden zijn ingevuld om verder te gaan naar de volgende stap!'
                                                  )
                                              )
                                          )
                                      )
                            )
                        );
                    }
                );
            };
            var ja = function(e) {
                var a = e.next,
                    t = e.project,
                    n = e.initialRegisterValues,
                    l = e.handleSubmitRegisterValues,
                    i = Q.object({
                        participationsOptioned: Q.number()
                            .typeError('Alleen nummers')
                            .test('participationsOptioned', 'Minimum van ' + t.minParticipations + ' nodig', function(
                                e
                            ) {
                                return e >= t.minParticipations;
                            })
                            .max(t.maxParticipations, 'Maximum van ${max} bereikt')
                            .positive('Getal moet groter zijn dan 0')
                            .required('Verplicht'),
                    });
                return r.a.createElement(
                    J.d,
                    {
                        validationSchema: i,
                        onSubmit: function(e, t) {
                            l(e), a();
                        },
                        initialValues: n,
                    },
                    function(e) {
                        var a = e.handleSubmit,
                            n = e.values,
                            l = e.touched,
                            i = e.errors;
                        return r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                                va.a,
                                null,
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            qe.a,
                                            { className: 'field-label' },
                                            'Minimale aantal obligaties'
                                        ),
                                        r.a.createElement(Be, null, t.minParticipations)
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            qe.a,
                                            { className: 'field-label' },
                                            'Maximale aantal obligaties'
                                        ),
                                        r.a.createElement(Be, null, t.maxParticipations)
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            qe.a,
                                            { className: 'field-label' },
                                            'Nominale waarde per obligatie'
                                        ),
                                        r.a.createElement(Be, null, ha(t.participationWorth))
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            va.a.Label,
                                            { className: 'field-label' },
                                            'Gewenst aantal obligaties'
                                        ),
                                        r.a.createElement(J.a, {
                                            name: 'participationsOptioned',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    errors: i,
                                                    touched: l,
                                                    id: 'participations_optioned',
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(qe.a, { className: 'field-label' }, 'Te betalen bedrag'),
                                        r.a.createElement(Be, null, ha(n.participationsOptioned * t.participationWorth))
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        null,
                                        r.a.createElement(
                                            Le.a,
                                            { 'aria-label': 'Steps', className: 'float-right' },
                                            r.a.createElement(
                                                ae.a,
                                                { className: 'w-button', size: 'sm', onClick: a },
                                                'Ga naar gegevens'
                                            )
                                        )
                                    )
                                ),
                                Object(Y.isEmpty)(i)
                                    ? null
                                    : r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              O.a,
                                              null,
                                              r.a.createElement(
                                                  'div',
                                                  { className: 'alert-wrapper' },
                                                  r.a.createElement(
                                                      la.a,
                                                      { key: 'form-general-error-alert', variant: 'warning' },
                                                      'Niet alle verplichten velden zijn ingevuld om verder te gaan naar de volgende stap!'
                                                  )
                                              )
                                          )
                                      )
                            )
                        );
                    }
                );
            };
            var ya = function(e) {
                var a = e.next,
                    t = e.project,
                    n = e.initialRegisterValues,
                    l = e.handleSubmitRegisterValues,
                    i = Q.object({
                        participationsOptioned: Q.number()
                            .typeError('Alleen nummers')
                            .test('participationsOptioned', 'Minimum van ' + t.minParticipations + ' nodig', function(
                                e
                            ) {
                                return e >= t.minParticipations;
                            })
                            .max(t.maxParticipations, 'Maximum van ${max} bereikt')
                            .positive('Getal moet groter zijn dan 0')
                            .required('Verplicht'),
                    });
                return r.a.createElement(
                    J.d,
                    {
                        validationSchema: i,
                        onSubmit: function(e, t) {
                            l(e), a();
                        },
                        initialValues: n,
                    },
                    function(e) {
                        var a = e.handleSubmit,
                            n = e.values,
                            l = e.touched,
                            i = e.errors;
                        return r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                                va.a,
                                null,
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            qe.a,
                                            { className: 'field-label' },
                                            'Minimale aantal participaties'
                                        ),
                                        r.a.createElement(Be, null, t.minParticipations)
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            qe.a,
                                            { className: 'field-label' },
                                            'Maximale aantal participaties'
                                        ),
                                        r.a.createElement(Be, null, t.maxParticipations)
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            qe.a,
                                            { className: 'field-label' },
                                            'Nominale waarde per participatie'
                                        ),
                                        r.a.createElement(Be, null, ha(t.participationWorth))
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            va.a.Label,
                                            { className: 'field-label' },
                                            'Gewenst aantal participaties'
                                        ),
                                        r.a.createElement(J.a, {
                                            name: 'participationsOptioned',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    errors: i,
                                                    touched: l,
                                                    id: 'participations_optioned',
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(qe.a, { className: 'field-label' }, 'Te betalen bedrag'),
                                        r.a.createElement(Be, null, ha(n.participationsOptioned * t.participationWorth))
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        null,
                                        r.a.createElement(
                                            Le.a,
                                            { 'aria-label': 'Steps', className: 'float-right' },
                                            r.a.createElement(
                                                ae.a,
                                                { className: 'w-button', size: 'sm', onClick: a },
                                                'Ga naar gegevens'
                                            )
                                        )
                                    )
                                ),
                                Object(Y.isEmpty)(i)
                                    ? null
                                    : r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              O.a,
                                              null,
                                              r.a.createElement(
                                                  'div',
                                                  { className: 'alert-wrapper' },
                                                  r.a.createElement(
                                                      la.a,
                                                      { key: 'form-general-error-alert', variant: 'warning' },
                                                      'Niet alle verplichten velden zijn ingevuld om verder te gaan naar de volgende stap!'
                                                  )
                                              )
                                          )
                                      )
                            )
                        );
                    }
                );
            };
            var Sa = function(e) {
                var a = e.next,
                    t = e.project,
                    n = (e.initialContact, e.initialRegisterValues),
                    l = e.handleSubmitRegisterValues,
                    i = Q.object({
                        participationsOptioned: Q.number()
                            .typeError('Alleen nummers')
                            .test('participationsOptioned', 'Minimum van ' + t.minParticipations + ' nodig', function(
                                e
                            ) {
                                return e >= t.minParticipations;
                            })
                            .max(t.maxParticipations, 'Maximum van ${max} bereikt')
                            .positive('Getal moet groter zijn dan 0')
                            .required('Verplicht'),
                        pcrYearlyPowerKwhConsumption: Q.number()
                            .typeError('Alleen nummers')
                            .positive('Getal moet groter zijn dan 0')
                            .required('Verplicht'),
                        pcrPostalCode: Q.string()
                            .min(4, 'Minimum van ${min} postcode cijfers nodig')
                            .required('Verplicht')
                            .test(
                                'pcrPostalCode',
                                'Helaas je postcode ligt niet binnen het gebied van potentiele deelnemers',
                                function(e) {
                                    return e && t.postalcodeLink && t.postalcodeLink.includes(e.substring(0, 4));
                                }
                            ),
                        pcrNumberOfSolarPanels: Q.number().typeError('Alleen nummers'),
                        pcrInputGeneratedNumberOfKwh: Q.number().typeError('Alleen nummers'),
                    });
                function c(e) {
                    return e.pcrNumberOfSolarPanels ? 250 * e.pcrNumberOfSolarPanels : 0;
                }
                function m(e) {
                    return e.pcrInputGeneratedNumberOfKwh && e.pcrInputGeneratedNumberOfKwh > 0
                        ? e.pcrInputGeneratedNumberOfKwh
                        : c(e)
                        ? c(e)
                        : 0;
                }
                function o(e) {
                    return e.pcrYearlyPowerKwhConsumption - m(e) > 0 ? e.pcrYearlyPowerKwhConsumption - m(e) : 0;
                }
                return r.a.createElement(
                    J.d,
                    {
                        validationSchema: i,
                        onSubmit: function(e, t) {
                            l(Object(y.a)({}, e, { powerKwhConsumption: o(e) })), a();
                        },
                        initialValues: Object(y.a)({}, n),
                    },
                    function(e) {
                        var a = e.handleSubmit,
                            n = e.values,
                            l = e.touched,
                            i = e.errors,
                            m = e.setFieldValue,
                            s = c(n),
                            d = Math.ceil(0.8 * o(n)),
                            u = (function(e) {
                                var a = o(e) > 0 ? Math.ceil((0.8 * o(e)) / 250) : 0;
                                return (
                                    a < t.minParticipations
                                        ? (a = t.minParticipations)
                                        : a > t.maxParticipations && (a = t.maxParticipations),
                                    a
                                );
                            })(n);
                        return r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                                va.a,
                                null,
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            qe.a,
                                            { className: 'field-label' },
                                            'Minimale aantal participaties'
                                        ),
                                        r.a.createElement(Be, null, t.minParticipations)
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            qe.a,
                                            { className: 'field-label' },
                                            'Maximale aantal participaties'
                                        ),
                                        r.a.createElement(Be, null, t.maxParticipations)
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            qe.a,
                                            { className: 'field-label' },
                                            'Nominale waarde per participatie'
                                        ),
                                        r.a.createElement(Be, null, ha(t.participationWorth))
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            va.a.Label,
                                            { className: 'field-label required' },
                                            'Je postcode'
                                        ),
                                        r.a.createElement(J.a, {
                                            name: 'pcrPostalCode',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    errors: i,
                                                    touched: l,
                                                    id: 'pcr_postal_code',
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            va.a.Label,
                                            { className: 'field-label' },
                                            'Deelnemende postcodes'
                                        ),
                                        r.a.createElement(Be, null, t.postalcodeLink)
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            va.a.Label,
                                            { className: 'field-label required' },
                                            'Je (geschatte) jaarlijks verbruik (in kWh)'
                                        ),
                                        r.a.createElement(J.a, {
                                            name: 'pcrYearlyPowerKwhConsumption',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    errors: i,
                                                    touched: l,
                                                    id: 'pcr_yearly_power_kwh_consumption',
                                                });
                                            },
                                        })
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 10 },
                                        r.a.createElement(
                                            va.a.Label,
                                            { className: 'field-label' },
                                            'Heb je al zonnepanelen op je eigen dak of doe je mee in een ander project?'
                                        )
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 10 },
                                        r.a.createElement(J.a, {
                                            name: 'pcrHasSolarPanels',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(
                                                    r.a.Fragment,
                                                    null,
                                                    r.a.createElement(
                                                        'div',
                                                        { className: 'form-check form-check-inline' },
                                                        r.a.createElement(
                                                            'label',
                                                            { className: 'radio-inline' },
                                                            r.a.createElement(
                                                                'input',
                                                                Object.assign({ type: 'radio' }, a, {
                                                                    id: 'pcr_has_solar_panels_yes',
                                                                    checked: 'Y' === a.value,
                                                                    value: 'Y',
                                                                    onChange: function() {
                                                                        return m('pcrHasSolarPanels', 'Y');
                                                                    },
                                                                })
                                                            ),
                                                            '\xa0Ja'
                                                        ),
                                                        '\xa0\xa0',
                                                        r.a.createElement(
                                                            'label',
                                                            { className: 'radio-inline' },
                                                            r.a.createElement(
                                                                'input',
                                                                Object.assign({ type: 'radio' }, a, {
                                                                    id: 'pcr_has_solar_panels_no',
                                                                    checked: 'N' === a.value,
                                                                    value: 'N',
                                                                    onChange: function() {
                                                                        m('pcrHasSolarPanels', 'N'),
                                                                            m('pcrNumberOfSolarPanels', 0);
                                                                    },
                                                                })
                                                            ),
                                                            '\xa0Nee'
                                                        )
                                                    )
                                                );
                                            },
                                        })
                                    )
                                ),
                                'Y' === n.pcrHasSolarPanels
                                    ? r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              O.a,
                                              { xs: 12, md: 6 },
                                              r.a.createElement(
                                                  va.a.Label,
                                                  { className: 'field-label' },
                                                  'Hoeveel zonnepanelen wekken al stroom voor je op'
                                              ),
                                              r.a.createElement(J.a, {
                                                  name: 'pcrNumberOfSolarPanels',
                                                  render: function(e) {
                                                      var a = e.field;
                                                      return r.a.createElement(Z, {
                                                          field: a,
                                                          errors: i,
                                                          touched: l,
                                                          id: 'pcr_number_of_solar_panels',
                                                      });
                                                  },
                                              })
                                          )
                                      )
                                    : '',
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            va.a.Label,
                                            { className: 'field-label' },
                                            'Wij schatten in dat je panelen jaarlijks opwekken'
                                        ),
                                        r.a.createElement(
                                            Be,
                                            { id: 'pcr_input_estimated_generated_number_of_kwh' },
                                            s,
                                            ' kWh'
                                        )
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 10 },
                                        r.a.createElement(
                                            va.a.Label,
                                            { className: 'field-label' },
                                            'Klopt het geschatte opbrengst?'
                                        )
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 10 },
                                        r.a.createElement(J.a, {
                                            name: 'pcrEstimatedRevenueOk',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(
                                                    r.a.Fragment,
                                                    null,
                                                    r.a.createElement(
                                                        'div',
                                                        { className: 'form-check form-check-inline' },
                                                        r.a.createElement(
                                                            'label',
                                                            { className: 'radio-inline' },
                                                            r.a.createElement(
                                                                'input',
                                                                Object.assign({ type: 'radio' }, a, {
                                                                    id: 'pcr_estimated_revenue_ok_yes',
                                                                    checked: 'Y' === a.value,
                                                                    value: 'Y',
                                                                    onChange: function() {
                                                                        m('pcrEstimatedRevenueOk', 'Y'),
                                                                            m('pcrInputGeneratedNumberOfKwh', 0);
                                                                    },
                                                                })
                                                            ),
                                                            '\xa0Ja'
                                                        ),
                                                        '\xa0\xa0',
                                                        r.a.createElement(
                                                            'label',
                                                            { className: 'radio-inline' },
                                                            r.a.createElement(
                                                                'input',
                                                                Object.assign({ type: 'radio' }, a, {
                                                                    id: 'pcr_estimated_revenue_ok_no',
                                                                    checked: 'N' === a.value,
                                                                    value: 'N',
                                                                    onChange: function() {
                                                                        return m('pcrEstimatedRevenueOk', 'N');
                                                                    },
                                                                })
                                                            ),
                                                            '\xa0Nee'
                                                        )
                                                    )
                                                );
                                            },
                                        })
                                    )
                                ),
                                'N' === n.pcrEstimatedRevenueOk
                                    ? r.a.createElement(
                                          r.a.Fragment,
                                          null,
                                          r.a.createElement(
                                              j.a,
                                              null,
                                              r.a.createElement(
                                                  O.a,
                                                  { xs: 12, md: 6 },
                                                  r.a.createElement(
                                                      va.a.Label,
                                                      { className: 'field-label' },
                                                      'Wat is de jaarlijkse opbrengst van jouw panelen (in kWh)'
                                                  ),
                                                  r.a.createElement(J.a, {
                                                      name: 'pcrInputGeneratedNumberOfKwh',
                                                      render: function(e) {
                                                          var a = e.field;
                                                          return r.a.createElement(Z, {
                                                              field: a,
                                                              errors: i,
                                                              touched: l,
                                                              id: 'pcr_input_generated_number_of_kwh',
                                                          });
                                                      },
                                                  })
                                              )
                                          )
                                      )
                                    : '',
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            'p',
                                            null,
                                            'We adviseren tot 80% van je jaarlijks verbruik minus de jaarlijkse opbrengsten (in jouw geval ',
                                            d,
                                            ' kWh) te dekken met participaties. In het veld hier direct onder is voor je uitgerekend hoeveel participaties dat zijn. Het is een advies, je mag er ook meer kopen. Dit kan echter slecht zijn voor je rendement.'
                                        )
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            va.a.Label,
                                            { className: 'field-label' },
                                            'Advies maximaal aantal participaties'
                                        ),
                                        r.a.createElement(Be, null, u)
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(
                                            va.a.Label,
                                            { className: 'field-label required' },
                                            'Gewenst aantal participaties'
                                        ),
                                        r.a.createElement(J.a, {
                                            name: 'participationsOptioned',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    errors: i,
                                                    touched: l,
                                                    id: 'participations_optioned',
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        O.a,
                                        { xs: 12, md: 6 },
                                        r.a.createElement(qe.a, { className: 'field-label' }, 'Te betalen bedrag'),
                                        r.a.createElement(Be, null, ha(n.participationsOptioned * t.participationWorth))
                                    )
                                ),
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        null,
                                        r.a.createElement(
                                            Le.a,
                                            { 'aria-label': 'Steps', className: 'float-right' },
                                            r.a.createElement(
                                                ae.a,
                                                { className: 'w-button', size: 'sm', onClick: a },
                                                'Ga naar gegevens'
                                            )
                                        )
                                    )
                                ),
                                Object(Y.isEmpty)(i)
                                    ? null
                                    : r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              O.a,
                                              null,
                                              r.a.createElement(
                                                  'div',
                                                  { className: 'alert-wrapper' },
                                                  r.a.createElement(
                                                      la.a,
                                                      { key: 'form-general-error-alert', variant: 'warning' },
                                                      'Niet alle verplichten velden zijn ingevuld om verder te gaan naar de volgende stap!'
                                                  )
                                              )
                                          )
                                      )
                            )
                        );
                    }
                );
            };
            var wa = function(e) {
                var a = e.portalSettings,
                    t = e.previous,
                    n = e.next,
                    l = e.project,
                    i = e.initialContact,
                    c = e.handleSubmitContactValues;
                i.isParticipant = !0;
                var m = i.typeId ? i.typeId : null,
                    o = Q.object().shape({
                        primaryAddress: Q.object().shape({
                            postalCode: Q.string().test(
                                'postal-code-primary-address-in-pcr-area',
                                'Helaas je postcode ligt niet binnen het gebied van potentiele deelnemers',
                                function(e) {
                                    return l.postalcodeLink.includes(e.substring(0, 4));
                                }
                            ),
                        }),
                    }),
                    s = Q.object().shape({
                        visitAddress: Q.object().shape({
                            postalCode: Q.string()
                                .test(
                                    'postal-code-visit-address-in-pcr-area',
                                    'Helaas je postcode ligt niet binnen het gebied van potentiele deelnemers',
                                    function(e) {
                                        return l.postalcodeLink.includes(e.substring(0, 4));
                                    }
                                )
                                .required('Verplicht'),
                        }),
                    }),
                    d = null,
                    u = null,
                    p = null,
                    E = null;
                switch (m) {
                    case 'person':
                        (u = ra.validationSchemaBasic),
                            (p = ra.validationSchemaAdditional),
                            (E = ra.validationSchemaPcrAdditional),
                            (d = u.concat(p)),
                            'postalcode_link_capital' === l.projectType.codeRef && (d = (d = d.concat(E)).concat(o));
                        break;
                    case 'organisation':
                        (u = oa.validationSchemaBasic),
                            (p = oa.validationSchemaAdditional),
                            (E = ra.validationSchemaPcrAdditional),
                            (d = u.concat(p)),
                            'postalcode_link_capital' === l.projectType.codeRef && (d = (d = d.concat(E)).concat(s));
                }
                return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(J.d, {
                        initialValues: i,
                        enableReinitialize: !0,
                        validationSchema: d,
                        onSubmit: function(e, a) {
                            a.setSubmitting(!0), c(e, a, n);
                        },
                        render: function(e) {
                            var n = e.errors,
                                c = e.touched,
                                m = e.setFieldValue,
                                o = e.isSubmitting,
                                s = e.values,
                                d = e.handleSubmit;
                            return r.a.createElement(
                                J.c,
                                null,
                                'person' === i.typeId
                                    ? r.a.createElement(ta, {
                                          portalSettings: a,
                                          initialContact: i,
                                          projectTypeCodeRef: l.projectType.codeRef,
                                          setFieldValue: m,
                                          values: s,
                                          touched: c,
                                          errors: n,
                                      })
                                    : null,
                                'organisation' === i.typeId
                                    ? r.a.createElement(ma, {
                                          portalSettings: a,
                                          initialContact: i,
                                          projectTypeCodeRef: l.projectType.codeRef,
                                          setFieldValue: m,
                                          values: s,
                                          touched: c,
                                          errors: n,
                                      })
                                    : null,
                                r.a.createElement(
                                    j.a,
                                    null,
                                    r.a.createElement(
                                        O.a,
                                        null,
                                        r.a.createElement(
                                            Le.a,
                                            { 'aria-label': 'Steps', className: 'float-right' },
                                            r.a.createElement(
                                                ae.a,
                                                { className: 'w-button', size: 'sm', onClick: t },
                                                'Terug'
                                            ),
                                            r.a.createElement(
                                                ae.a,
                                                { className: 'w-button', size: 'sm', onClick: d, disabled: o },
                                                o
                                                    ? r.a.createElement(
                                                          'span',
                                                          null,
                                                          r.a.createElement(X.a, { color: 'white', size: 14 }),
                                                          'Bezig met opslaan'
                                                      )
                                                    : 'Opslaan en doorgaan'
                                            )
                                        )
                                    )
                                ),
                                Object(Y.isEmpty)(n)
                                    ? null
                                    : r.a.createElement(
                                          j.a,
                                          null,
                                          r.a.createElement(
                                              O.a,
                                              null,
                                              r.a.createElement(
                                                  'div',
                                                  { className: 'alert-wrapper' },
                                                  r.a.createElement(
                                                      la.a,
                                                      { key: 'form-general-error-alert', variant: 'warning' },
                                                      'Niet alle verplichten velden zijn ingevuld om verder te gaan naar de volgende stap!'
                                                  )
                                              )
                                          )
                                      )
                            );
                        },
                    })
                );
            };
            var ka = function(e) {
                    var a = e.project,
                        t = e.previous,
                        n = e.next,
                        l = e.initialRegisterValues,
                        i = e.handleSubmitRegisterValues,
                        c = Q.object({
                            didAcceptAgreement: Q.bool().test(
                                'didAcceptAgreement',
                                'Je dient akkoord te gaan met de voorwaarden!',
                                function(e) {
                                    return !0 === e;
                                }
                            ),
                            didUnderstandInfo: Q.bool().test(
                                'didUnderstandInfo',
                                'Je dient te bevestigen, dat de projectinformatie gelezen en begrepen is!',
                                function(e) {
                                    return !0 === e;
                                }
                            ),
                        });
                    return r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(
                            J.d,
                            {
                                validationSchema: c,
                                onSubmit: function(e, a) {
                                    i(e), n();
                                },
                                initialValues: l,
                            },
                            function(e) {
                                var n = e.handleSubmit,
                                    l = e.touched,
                                    i = e.errors;
                                return r.a.createElement(
                                    r.a.Fragment,
                                    null,
                                    r.a.createElement(
                                        J.c,
                                        null,
                                        r.a.createElement(
                                            j.a,
                                            null,
                                            r.a.createElement(
                                                O.a,
                                                { xs: 12, md: 10 },
                                                r.a.createElement(
                                                    'p',
                                                    null,
                                                    'Om deel te kunnen nemen dien je akkoord te gaan met de voorwaarden en dien je te bevestigen dat je de projectinformatie hebt gelezen en begrepen.'
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            j.a,
                                            null,
                                            r.a.createElement(
                                                O.a,
                                                { xs: 12, md: 10 },
                                                r.a.createElement(J.a, {
                                                    name: 'didAcceptAgreement',
                                                    render: function(e) {
                                                        var t = e.field;
                                                        return r.a.createElement(
                                                            'label',
                                                            { className: 'w-checkbox checkbox-fld' },
                                                            r.a.createElement(
                                                                'input',
                                                                Object.assign({ type: 'checkbox' }, t, {
                                                                    id: 'did_accept_agreement',
                                                                    checked: t.value,
                                                                    className: 'w-checkbox-input checkbox',
                                                                })
                                                            ),
                                                            r.a.createElement(
                                                                'span',
                                                                {
                                                                    htmlFor: 'did_accept_agreement',
                                                                    className: 'checkbox-label w-form-label',
                                                                },
                                                                'Ik ga akkoord met de',
                                                                ' ',
                                                                r.a.createElement(
                                                                    'a',
                                                                    { href: a.linkAgreeTerms, target: '_blank' },
                                                                    'voorwaarden'
                                                                )
                                                            ),
                                                            l[t.name] && i[t.name]
                                                                ? r.a.createElement(
                                                                      'div',
                                                                      { className: 'error-message text-danger' },
                                                                      i[t.name]
                                                                  )
                                                                : null
                                                        );
                                                    },
                                                })
                                            )
                                        ),
                                        r.a.createElement(
                                            j.a,
                                            null,
                                            r.a.createElement(
                                                O.a,
                                                { xs: 12, md: 10 },
                                                r.a.createElement(J.a, {
                                                    name: 'didUnderstandInfo',
                                                    render: function(e) {
                                                        var t = e.field;
                                                        return r.a.createElement(
                                                            'label',
                                                            { className: 'w-checkbox checkbox-fld' },
                                                            r.a.createElement(
                                                                'input',
                                                                Object.assign({ type: 'checkbox' }, t, {
                                                                    id: 'did_understand_info',
                                                                    checked: t.value,
                                                                    className: 'w-checkbox-input checkbox',
                                                                })
                                                            ),
                                                            r.a.createElement(
                                                                'span',
                                                                {
                                                                    htmlFor: 'did_understand_info',
                                                                    className: 'checkbox-label w-form-label',
                                                                },
                                                                'Ik heb de',
                                                                ' ',
                                                                r.a.createElement(
                                                                    'a',
                                                                    {
                                                                        href: ''.concat(a.linkUnderstandInfo),
                                                                        target: '_blank',
                                                                    },
                                                                    'projectinformatie'
                                                                ),
                                                                ' ',
                                                                '(inclusief de daarin beschreven risico\u2019s) behorende bij het project gelezen en begrepen'
                                                            ),
                                                            l[t.name] && i[t.name]
                                                                ? r.a.createElement(
                                                                      'div',
                                                                      { className: 'error-message text-danger' },
                                                                      i[t.name]
                                                                  )
                                                                : null
                                                        );
                                                    },
                                                })
                                            )
                                        ),
                                        r.a.createElement(
                                            j.a,
                                            null,
                                            r.a.createElement(
                                                O.a,
                                                { xs: 12, md: 10 },
                                                r.a.createElement(
                                                    Le.a,
                                                    { 'aria-label': 'Steps', className: 'float-right' },
                                                    r.a.createElement(
                                                        ae.a,
                                                        { className: 'w-button', size: 'sm', onClick: t },
                                                        'Terug'
                                                    ),
                                                    r.a.createElement(
                                                        ae.a,
                                                        { className: 'w-button', size: 'sm', onClick: n },
                                                        'Ga naar inschrijfformulier'
                                                    )
                                                )
                                            )
                                        ),
                                        Object(Y.isEmpty)(i)
                                            ? null
                                            : r.a.createElement(
                                                  j.a,
                                                  null,
                                                  r.a.createElement(
                                                      O.a,
                                                      null,
                                                      r.a.createElement(
                                                          'div',
                                                          { className: 'alert-wrapper' },
                                                          r.a.createElement(
                                                              la.a,
                                                              { key: 'form-general-error-alert', variant: 'warning' },
                                                              'Niet alle verplichten velden zijn ingevuld om verder te gaan naar de volgende stap!'
                                                          )
                                                      )
                                                  )
                                              )
                                    )
                                );
                            }
                        )
                    );
                },
                xa = t(211),
                Oa = t.n(xa),
                Aa = function(e) {
                    var a = e.id,
                        t = e.value;
                    return r.a.createElement(
                        Oa.a,
                        null,
                        r.a.createElement('div', { id: a, dangerouslySetInnerHTML: { __html: t } })
                    );
                };
            Aa.defaultProps = { value: '' };
            var Ca = Aa,
                _a = function(e) {
                    return q.post('/project/participant/create', e);
                };
            var Ia = function(e) {
                var a = e.previous,
                    t = e.next,
                    l = e.registerValues,
                    i = e.setSucces,
                    c = Object(n.useState)(''),
                    m = Object(s.a)(c, 2),
                    o = m[0],
                    d = m[1],
                    u = Object(n.useState)(!0),
                    p = Object(s.a)(u, 2),
                    E = p[0],
                    g = p[1];
                Object(n.useEffect)(
                    function() {
                        g(!0),
                            Ve(l)
                                .then(function(e) {
                                    d(e.data), g(!1);
                                })
                                .catch(function(e) {
                                    alert('Er is iets misgegaan met laden. Herlaad de pagina opnieuw.'), g(!1);
                                });
                    },
                    [l]
                );
                var f = Q.object({
                    didAgreeRegistration: Q.bool().test(
                        'didAgreeRegistration',
                        'Je dient akkoord te gaan met het inschrijfformulier!',
                        function(e) {
                            return !0 === e;
                        }
                    ),
                });
                return r.a.createElement(
                    r.a.Fragment,
                    null,
                    E
                        ? r.a.createElement(Fe, null)
                        : r.a.createElement(
                              J.d,
                              {
                                  validationSchema: f,
                                  onSubmit: function(e, a) {
                                      !(function(e, a) {
                                          _a(l)
                                              .then(function(t) {
                                                  e.setSubmitting(!1), i(!0), a();
                                              })
                                              .catch(function(a) {
                                                  alert('Er is iets misgegaan met opslaan! Herlaad de pagina opnieuw.'),
                                                      e.setSubmitting(!1);
                                              });
                                      })(a, t);
                                  },
                                  initialValues: { didAgreeRegistration: !1 },
                              },
                              function(e) {
                                  var t = e.handleSubmit,
                                      n = e.touched,
                                      l = e.errors,
                                      i = e.isSubmitting;
                                  return r.a.createElement(
                                      r.a.Fragment,
                                      null,
                                      r.a.createElement(
                                          J.c,
                                          null,
                                          r.a.createElement(
                                              j.a,
                                              null,
                                              r.a.createElement(
                                                  O.a,
                                                  { xs: 12, md: 10 },
                                                  r.a.createElement(Ca, { value: o }),
                                                  r.a.createElement(J.a, {
                                                      name: 'didAgreeRegistration',
                                                      render: function(e) {
                                                          var a = e.field;
                                                          return r.a.createElement(
                                                              'label',
                                                              { className: 'w-checkbox checkbox-fld' },
                                                              r.a.createElement(
                                                                  'input',
                                                                  Object.assign({ type: 'checkbox' }, a, {
                                                                      id: 'did_agree_registration',
                                                                      checked: a.value,
                                                                      className: 'w-checkbox-input checkbox',
                                                                  })
                                                              ),
                                                              r.a.createElement(
                                                                  'span',
                                                                  {
                                                                      htmlFor: 'did_agree_registration',
                                                                      className: 'checkbox-label w-form-label',
                                                                  },
                                                                  'Ik ben akkoord met het inschrijfformulier'
                                                              ),
                                                              n[a.name] && l[a.name]
                                                                  ? r.a.createElement(
                                                                        'div',
                                                                        { className: 'error-message text-danger' },
                                                                        l[a.name]
                                                                    )
                                                                  : null
                                                          );
                                                      },
                                                  })
                                              )
                                          ),
                                          r.a.createElement(
                                              j.a,
                                              null,
                                              r.a.createElement(
                                                  O.a,
                                                  { xs: 12, md: 10 },
                                                  r.a.createElement(
                                                      'p',
                                                      null,
                                                      'Wanneer je akkoord gaat met het inschrijfformulier en de inschrijving bevestigt, is je inschrijving definitief.'
                                                  )
                                              )
                                          ),
                                          r.a.createElement(
                                              j.a,
                                              null,
                                              r.a.createElement(
                                                  O.a,
                                                  { xs: 12, md: 10 },
                                                  r.a.createElement(
                                                      Le.a,
                                                      { 'aria-label': 'Steps', className: 'float-right' },
                                                      r.a.createElement(
                                                          ae.a,
                                                          { className: 'w-button', size: 'sm', onClick: a },
                                                          'Terug'
                                                      ),
                                                      r.a.createElement(
                                                          ae.a,
                                                          {
                                                              className: 'w-button',
                                                              size: 'sm',
                                                              onClick: t,
                                                              disabled: i,
                                                          },
                                                          i
                                                              ? r.a.createElement(
                                                                    'span',
                                                                    null,
                                                                    r.a.createElement(X.a, {
                                                                        color: 'white',
                                                                        size: 14,
                                                                    }),
                                                                    'Bezig met verwerken'
                                                                )
                                                              : 'Bevestigen inschrijving'
                                                      )
                                                  )
                                              )
                                          ),
                                          Object(Y.isEmpty)(l)
                                              ? null
                                              : r.a.createElement(
                                                    j.a,
                                                    null,
                                                    r.a.createElement(
                                                        O.a,
                                                        null,
                                                        r.a.createElement(
                                                            'div',
                                                            { className: 'alert-wrapper' },
                                                            r.a.createElement(
                                                                la.a,
                                                                { key: 'form-general-error-alert', variant: 'warning' },
                                                                'Niet alle verplichten velden zijn ingevuld om verder te gaan naar de volgende stap!'
                                                            )
                                                        )
                                                    )
                                                )
                                      )
                                  );
                              }
                          )
                );
            };
            var za = function() {
                return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                        j.a,
                        null,
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 10 },
                            r.a.createElement(
                                'p',
                                null,
                                'Bedankt voor je inschrijving! Je ontvangt van ons een e-mail met daarin alle gegevens van je inschrijving en informatie over de vervolgstappen die we nemen om jouw inschrijving definitief te maken.',
                                r.a.createElement('br', null),
                                'Het kan zijn dat de mail door een spamfilter is geblokkeerd. Spamfilters van bijvoorbeeld Gmail en Hotmail staan erg "scherp". Kijk even bij de Spam/Reclame of je onze mail daar terug vindt.'
                            ),
                            r.a.createElement(
                                'p',
                                null,
                                'Onder de menuknop \u201cHuidige deelnames\u201d vind je je inschrijving terug.'
                            ),
                            r.a.createElement(
                                'p',
                                null,
                                'Wil je je inschrijving aanpassen? Neem dan contact met ons op.'
                            )
                        )
                    ),
                    r.a.createElement(
                        j.a,
                        null,
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 10 },
                            r.a.createElement(
                                Le.a,
                                { className: 'float-right' },
                                r.a.createElement(
                                    c.b,
                                    { to: '/inschrijvingen-projecten' },
                                    r.a.createElement(
                                        ae.a,
                                        { className: 'w-button', size: 'sm' },
                                        'Naar mijn huidige deelnames'
                                    )
                                )
                            )
                        )
                    )
                );
            };
            var Pa = function(e) {
                var a = e.portalSettings,
                    t = e.currentStep,
                    n = e.previous,
                    l = e.next,
                    i = e.project,
                    c = e.initialRegisterValues,
                    m = e.handleSubmitRegisterValues,
                    o = e.initialContact,
                    s = e.handleSubmitContactValues,
                    d = e.setSucces;
                switch (t) {
                    case 1:
                        switch (i.projectType.codeRef) {
                            case 'loan':
                                return r.a.createElement(Na, {
                                    next: l,
                                    project: i,
                                    initialRegisterValues: c,
                                    handleSubmitRegisterValues: m,
                                });
                            case 'obligation':
                                return r.a.createElement(ja, {
                                    next: l,
                                    project: i,
                                    initialRegisterValues: c,
                                    handleSubmitRegisterValues: m,
                                });
                            case 'capital':
                                return r.a.createElement(ya, {
                                    next: l,
                                    project: i,
                                    initialRegisterValues: c,
                                    handleSubmitRegisterValues: m,
                                });
                            case 'postalcode_link_capital':
                                return r.a.createElement(Sa, {
                                    next: l,
                                    project: i,
                                    initialContact: o,
                                    initialRegisterValues: c,
                                    handleSubmitRegisterValues: m,
                                });
                            default:
                                return null;
                        }
                    case 2:
                        return r.a.createElement(wa, {
                            portalSettings: a,
                            previous: n,
                            next: l,
                            project: i,
                            initialContact: o,
                            handleSubmitContactValues: s,
                        });
                    case 3:
                        return r.a.createElement(ka, {
                            project: i,
                            previous: n,
                            next: l,
                            initialRegisterValues: c,
                            handleSubmitRegisterValues: m,
                        });
                    case 4:
                        return r.a.createElement(Ia, { previous: n, next: l, registerValues: c, setSucces: d });
                    case 5:
                        return r.a.createElement(za, null);
                    default:
                        return null;
                }
            };
            var Va = function(e) {
                var a = e.portalSettings,
                    t = e.project,
                    n = e.initialRegisterValues,
                    l = e.handleSubmitRegisterValues,
                    i = e.initialContact,
                    c = e.handleSubmitContactValues,
                    m = e.setSucces,
                    o = r.a.useState(1),
                    d = Object(s.a)(o, 2),
                    u = d[0],
                    p = d[1];
                return r.a.createElement(
                    r.a.Fragment,
                    null,
                    u <= 4
                        ? r.a.createElement(
                              j.a,
                              { className: 'mb-4' },
                              r.a.createElement(
                                  O.a,
                                  null,
                                  r.a.createElement(
                                      'div',
                                      { className: 'arrow-steps clearfix' },
                                      r.a.createElement(
                                          'div',
                                          { className: 'step '.concat(1 === u ? 'current' : '') },
                                          '1. Inschrijven'
                                      ),
                                      r.a.createElement(
                                          'div',
                                          { className: 'step '.concat(2 === u ? 'current' : '') },
                                          '2. Gegevens'
                                      ),
                                      r.a.createElement(
                                          'div',
                                          { className: 'step '.concat(3 === u ? 'current' : '') },
                                          '3. Voorwaarden'
                                      ),
                                      r.a.createElement(
                                          'div',
                                          { className: 'step '.concat(4 === u ? 'current' : '') },
                                          '4. Inschrijfformulier'
                                      )
                                  )
                              )
                          )
                        : null,
                    r.a.createElement(Pa, {
                        portalSettings: a,
                        currentStep: u,
                        previous: function() {
                            p(u <= 2 ? 1 : u - 1);
                        },
                        next: function() {
                            p(u >= 4 ? 5 : u + 1);
                        },
                        project: t,
                        initialRegisterValues: n,
                        handleSubmitRegisterValues: l,
                        initialContact: i,
                        handleSubmitContactValues: c,
                        setSucces: m,
                    })
                );
            };
            function Ra(e) {
                var a = e.match,
                    t = e.currentSelectedContact,
                    l = {
                        pcrYearlyPowerKwhConsumption: 0,
                        pcrPostalCode: '',
                        pcrHasSolarPanels: 'N',
                        pcrInputGeneratedNumberOfKwh: 0,
                        pcrEstimatedRevenueOk: 'Y',
                    },
                    i = Object(n.useState)({
                        contactId: null,
                        projectId: null,
                        participationsOptioned: 0,
                        powerKwhConsumption: 0,
                        amountOptioned: 0,
                        didAcceptAgreement: !1,
                        didUnderstandInfo: !1,
                    }),
                    m = Object(s.a)(i, 2),
                    o = m[0],
                    d = m[1],
                    u = Object(n.useState)({}),
                    p = Object(s.a)(u, 2),
                    E = p[0],
                    g = p[1],
                    f = Object(n.useState)({}),
                    h = Object(s.a)(f, 2),
                    b = h[0],
                    N = h[1],
                    S = Object(n.useState)({}),
                    w = Object(s.a)(S, 2),
                    k = w[0],
                    x = w[1],
                    A = Object(n.useState)(!0),
                    C = Object(s.a)(A, 2),
                    _ = C[0],
                    I = C[1],
                    z = Object(n.useState)(!1),
                    P = Object(s.a)(z, 2),
                    V = P[0],
                    R = P[1],
                    F = Object(n.useState)(!1),
                    L = Object(s.a)(F, 2),
                    M = L[0],
                    q = L[1];
                function D(e) {
                    return e
                        ? e.search(',') < 0
                            ? e
                            : e.slice(e.search(',') + 2) + ' ' + e.slice(0, e.search(','))
                        : ' ';
                }
                return (
                    Object(n.useEffect)(
                        function() {
                            t.id &&
                                (I(!0),
                                T.a
                                    .all([fa(a.params.id), Ie(t.id)])
                                    .then(
                                        T.a.spread(function(e, n) {
                                            var r = n.data.data,
                                                i = e.data.data;
                                            g(i);
                                            var c = Re(r);
                                            if (
                                                (N(c),
                                                ze(t.id)
                                                    .then(function(e) {
                                                        var t = [];
                                                        e.data.data.participations.map(function(e) {
                                                            return t.push(e.project.id);
                                                        });
                                                        var n = a.params.id;
                                                        t.includes(Number(n)) ? q(!0) : q(!1);
                                                    })
                                                    .catch(function(e) {
                                                        alert(
                                                            'Er is iets misgegaan met laden. Herlaad de pagina opnieuw.'
                                                        ),
                                                            I(!1);
                                                    }),
                                                i &&
                                                    i.projectType &&
                                                    'postalcode_link_capital' === i.projectType.codeRef)
                                            ) {
                                                var m = '';
                                                (m =
                                                    'organisation' === c.typeId
                                                        ? c.visitAddress
                                                            ? c.visitAddress.postalCode
                                                            : ''
                                                        : c.primaryAddress
                                                        ? c.primaryAddress.postalCode
                                                        : ''),
                                                    d(
                                                        Object(y.a)(
                                                            {},
                                                            o,
                                                            { projectId: a.params.id, contactId: t.id },
                                                            l,
                                                            { pcrPostalCode: m }
                                                        )
                                                    );
                                            } else d(Object(y.a)({}, o, { projectId: a.params.id, contactId: t.id }));
                                            I(!1);
                                        })
                                    )
                                    .catch(function(e) {
                                        alert('Er is iets misgegaan met laden. Herlaad de pagina opnieuw.'), I(!1);
                                    })),
                                (function() {
                                    var e = this;
                                    I(!0);
                                    ge(
                                        '?keys[]=portalName&keys[]=portalWebsite&keys[]=portalUrl&keys[]=responsibleUserId&keys[]=checkContactTaskResponsibleUserId&keys[]=linkPrivacyPolicy'
                                    )
                                        .then(function(e) {
                                            x(Object(y.a)({}, e.data));
                                        })
                                        .catch(function(a) {
                                            e.setState({ isLoading: !1, hasError: !0 });
                                        });
                                })();
                        },
                        [a, t]
                    ),
                    r.a.createElement(
                        v.a,
                        { className: 'content-section' },
                        _
                            ? r.a.createElement(Fe, null)
                            : M
                            ? r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement(
                                      j.a,
                                      null,
                                      r.a.createElement(
                                          O.a,
                                          null,
                                          r.a.createElement(
                                              'h1',
                                              { className: 'content-heading' },
                                              r.a.createElement('strong', null, D(b.fullName)),
                                              ' is al ingeschreven voor project',
                                              ' ',
                                              r.a.createElement('strong', null, E.name)
                                          )
                                      )
                                  ),
                                  r.a.createElement(
                                      j.a,
                                      null,
                                      r.a.createElement(
                                          O.a,
                                          { xs: 12, md: 10 },
                                          r.a.createElement(
                                              Le.a,
                                              { className: 'float-right' },
                                              r.a.createElement(
                                                  c.b,
                                                  { to: '/inschrijvingen-projecten' },
                                                  r.a.createElement(
                                                      ae.a,
                                                      { className: 'w-button', size: 'sm' },
                                                      'Naar huidige deelnames'
                                                  )
                                              )
                                          )
                                      )
                                  )
                              )
                            : r.a.createElement(
                                  j.a,
                                  null,
                                  r.a.createElement(
                                      O.a,
                                      null,
                                      V
                                          ? r.a.createElement(
                                                'h1',
                                                { className: 'content-heading' },
                                                'Ingeschreven voor project ',
                                                r.a.createElement('strong', null, E.name)
                                            )
                                          : r.a.createElement(
                                                'h1',
                                                { className: 'content-heading' },
                                                'Schrijf ',
                                                r.a.createElement('strong', null, D(b.fullName)),
                                                ' in voor project',
                                                ' ',
                                                r.a.createElement('strong', null, E.name)
                                            ),
                                      r.a.createElement(Va, {
                                          portalSettings: k,
                                          project: E,
                                          initialRegisterValues: o,
                                          handleSubmitRegisterValues: function(e) {
                                              d(Object(y.a)({}, o, {}, e));
                                          },
                                          initialContact: b,
                                          handleSubmitContactValues: function(e, a, n) {
                                              var r = Object(y.a)({}, b, {}, e);
                                              Pe(r)
                                                  .then(function(e) {
                                                      Ie(t.id)
                                                          .then(function(e) {
                                                              var a = Re(e.data.data);
                                                              N(a), n();
                                                          })
                                                          .catch(function(e) {
                                                              alert(
                                                                  'Er is iets misgegaan met laden. Herlaad de pagina opnieuw.'
                                                              ),
                                                                  I(!1);
                                                          });
                                                  })
                                                  .catch(function(e) {
                                                      a.setSubmitting(!1),
                                                          alert(
                                                              'Er is iets misgegaan met opslaan! Herlaad de pagina opnieuw.'
                                                          );
                                                  });
                                          },
                                          setSucces: R,
                                      })
                                  )
                              )
                    )
                );
            }
            function Fa(e) {
                return r.a.createElement(k, null, function(a) {
                    var t = a.currentSelectedContact;
                    return r.a.createElement(Ra, Object.assign({}, e, { currentSelectedContact: t }));
                });
            }
            var Ta = t(93),
                La = t.n(Ta);
            function Ma(e) {
                var a,
                    t = Object(n.useState)([]),
                    l = Object(s.a)(t, 2),
                    i = l[0],
                    m = l[1],
                    o = Object(n.useState)({}),
                    d = Object(s.a)(o, 2),
                    p = d[0],
                    E = d[1],
                    g = Object(n.useState)({}),
                    f = Object(s.a)(g, 2),
                    h = f[0],
                    b = f[1],
                    N = Object(n.useState)(!0),
                    y = Object(s.a)(N, 2),
                    S = y[0],
                    w = y[1],
                    k = (function(e) {
                        var a = Object(n.useRef)();
                        return (
                            Object(n.useEffect)(function() {
                                a.current = e;
                            }),
                            a.current
                        );
                    })(e.currentSelectedContact);
                return (
                    Object(n.useEffect)(
                        function() {
                            w(!0),
                                e.currentSelectedContact.id &&
                                    ((k && k.id == e.currentSelectedContact.id) ||
                                        (ze(e.currentSelectedContact.id)
                                            .then(function(e) {
                                                var a = [];
                                                e.data.data.participations.map(function(e) {
                                                    return a.push(e.project.id);
                                                }),
                                                    m(a);
                                            })
                                            .catch(function(e) {
                                                alert('Er is iets misgegaan met laden. Herlaad de pagina opnieuw.'),
                                                    w(!1);
                                            }),
                                        ze(e.currentSelectedContact.id)
                                            .then(function(e) {
                                                E(e.data.data);
                                            })
                                            .catch(function(e) {
                                                alert('Er is iets misgegaan met laden. Herlaad de pagina opnieuw.'),
                                                    w(!1);
                                            }))),
                                ga()
                                    .then(function(e) {
                                        b(e.data.data), w(!1);
                                    })
                                    .catch(function(e) {
                                        alert('Er is iets misgegaan met laden. Herlaad de pagina opnieuw.'), w(!1);
                                    });
                        },
                        [e.currentSelectedContact]
                    ),
                    r.a.createElement(
                        v.a,
                        { className: 'content-section' },
                        r.a.createElement(
                            j.a,
                            null,
                            r.a.createElement(
                                O.a,
                                null,
                                r.a.createElement(
                                    'h1',
                                    { className: 'content-heading' },
                                    'Overzicht projecten waarop ',
                                    r.a.createElement(
                                        'strong',
                                        null,
                                        (a = p.fullName)
                                            ? a.search(',') < 0
                                                ? a
                                                : a.slice(a.search(',') + 2) + ' ' + a.slice(0, a.search(','))
                                            : ' '
                                    ),
                                    ' kan inschrijven.'
                                )
                            )
                        ),
                        r.a.createElement(
                            j.a,
                            null,
                            r.a.createElement(
                                O.a,
                                null,
                                r.a.createElement('p', null, 'Klik op het project voor meer details.')
                            )
                        ),
                        r.a.createElement(
                            j.a,
                            null,
                            r.a.createElement(
                                O.a,
                                null,
                                S
                                    ? r.a.createElement(Fe, null)
                                    : 0 === h.length
                                    ? 'Geen projecten beschikbaar om op in te schrijven.'
                                    : r.a.createElement(
                                          La.a,
                                          { responsive: !0 },
                                          r.a.createElement(
                                              'thead',
                                              null,
                                              r.a.createElement(
                                                  'tr',
                                                  null,
                                                  r.a.createElement('th', null, 'Project'),
                                                  r.a.createElement('th', null, 'Ingeschreven'),
                                                  r.a.createElement('th', null, 'Start inschrijving'),
                                                  r.a.createElement('th', null, 'Einde inschrijving')
                                              )
                                          ),
                                          r.a.createElement(
                                              'tbody',
                                              null,
                                              h.map(function(e) {
                                                  return r.a.createElement(
                                                      'tr',
                                                      { key: e.id },
                                                      r.a.createElement(
                                                          'td',
                                                          null,
                                                          i.includes(e.id)
                                                              ? e.name
                                                              : r.a.createElement(
                                                                    c.b,
                                                                    { to: '/project/'.concat(e.id) },
                                                                    e.name
                                                                )
                                                      ),
                                                      r.a.createElement(
                                                          'td',
                                                          null,
                                                          i.includes(e.id)
                                                              ? r.a.createElement(
                                                                    'div',
                                                                    { className: 'text-success text-center' },
                                                                    '\u2714'
                                                                )
                                                              : ''
                                                      ),
                                                      r.a.createElement(
                                                          'td',
                                                          null,
                                                          e.dateStartRegistrations
                                                              ? u()(e.dateStartRegistrations).format('LL')
                                                              : ''
                                                      ),
                                                      r.a.createElement(
                                                          'td',
                                                          null,
                                                          e.dateEndRegistrations
                                                              ? u()(e.dateEndRegistrations).format('LL')
                                                              : ''
                                                      )
                                                  );
                                              })
                                          )
                                      )
                            )
                        )
                    )
                );
            }
            function qa(e) {
                return r.a.createElement(k, null, function(a) {
                    var t = a.currentSelectedContact;
                    return r.a.createElement(Ma, Object.assign({}, e, { currentSelectedContact: t }));
                });
            }
            var Da = function(e) {
                var a = e.project;
                return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                        j.a,
                        null,
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Project'),
                            r.a.createElement(Be, null, a.name),
                            r.a.createElement(qe.a, null, 'Lening nodig'),
                            r.a.createElement(Be, null, ha(a.amountOfLoanNeeded))
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Omschrijving project'),
                            r.a.createElement(Be, null, a.description ? a.description : ' ')
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Minimaal bedrag per contact'),
                            r.a.createElement(Be, null, ha(a.minAmountLoan))
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Maximaal bedrag per contact'),
                            r.a.createElement(Be, null, ha(a.maxAmountLoan))
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Start inschrijving'),
                            r.a.createElement(
                                Be,
                                null,
                                a.dateStartRegistrations ? u()(a.dateStartRegistrations).format('LL') : ''
                            )
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Eind inschrijving'),
                            r.a.createElement(
                                Be,
                                null,
                                a.dateEndRegistrations ? u()(a.dateEndRegistrations).format('LL') : ''
                            )
                        )
                    )
                );
            };
            var Ba = function(e) {
                var a = e.project;
                return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                        j.a,
                        null,
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Project'),
                            r.a.createElement(Be, null, a.name)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Omschrijving project'),
                            r.a.createElement(Be, null, a.description ? a.description : ' ')
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Nominale waarde per obligatie'),
                            r.a.createElement(Be, null, ha(a.participationWorth))
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Aantal obligaties nodig'),
                            r.a.createElement(Be, null, a.totalParticipations)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Minimaal aantal obligaties per contact'),
                            r.a.createElement(Be, null, a.minParticipations)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Maximaal aantal obligaties per contact'),
                            r.a.createElement(Be, null, a.maxParticipations)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Start inschrijving'),
                            r.a.createElement(
                                Be,
                                null,
                                a.dateStartRegistrations ? u()(a.dateStartRegistrations).format('LL') : ''
                            )
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Eind inschrijving'),
                            r.a.createElement(
                                Be,
                                null,
                                a.dateEndRegistrations ? u()(a.dateEndRegistrations).format('LL') : ''
                            )
                        )
                    )
                );
            };
            var Ga = function(e) {
                var a = e.project;
                return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                        j.a,
                        null,
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Project'),
                            r.a.createElement(Be, null, a.name)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Omschrijving project'),
                            r.a.createElement(Be, null, a.description ? a.description : ' ')
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Nominale waarde per participatie'),
                            r.a.createElement(Be, null, ha(a.participationWorth))
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Aantal participaties nodig'),
                            r.a.createElement(Be, null, a.totalParticipations)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Minimaal aantal participaties per contact'),
                            r.a.createElement(Be, null, a.minParticipations)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Maximaal aantal participaties per contact'),
                            r.a.createElement(Be, null, a.maxParticipations)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Start inschrijving'),
                            r.a.createElement(
                                Be,
                                null,
                                a.dateStartRegistrations ? u()(a.dateStartRegistrations).format('LL') : ''
                            )
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Eind inschrijving'),
                            r.a.createElement(
                                Be,
                                null,
                                a.dateEndRegistrations ? u()(a.dateEndRegistrations).format('LL') : ''
                            )
                        )
                    )
                );
            };
            var Wa = function(e) {
                var a = e.project;
                return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                        j.a,
                        null,
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Project'),
                            r.a.createElement(Be, null, a.name)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Omschrijving project'),
                            r.a.createElement(Be, null, a.description ? a.description : ' ')
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Nominale waarde per participatie'),
                            r.a.createElement(Be, null, ha(a.participationWorth))
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Aantal participaties nodig'),
                            r.a.createElement(Be, null, a.totalParticipations)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Minimaal aantal participaties per contact'),
                            r.a.createElement(Be, null, a.minParticipations)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Maximaal aantal participaties per contact'),
                            r.a.createElement(Be, null, a.maxParticipations)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Start inschrijving'),
                            r.a.createElement(
                                Be,
                                null,
                                a.dateStartRegistrations ? u()(a.dateStartRegistrations).format('LL') : ''
                            )
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement(qe.a, null, 'Eind inschrijving'),
                            r.a.createElement(
                                Be,
                                null,
                                a.dateEndRegistrations ? u()(a.dateEndRegistrations).format('LL') : ''
                            )
                        )
                    )
                );
            };
            var Ha = function(e) {
                var a = this,
                    t = e.match,
                    l = Object(n.useState)({}),
                    i = Object(s.a)(l, 2),
                    m = (i[0], i[1]),
                    o = Object(n.useState)({}),
                    d = Object(s.a)(o, 2),
                    u = d[0],
                    p = d[1],
                    E = Object(n.useState)(!0),
                    g = Object(s.a)(E, 2),
                    f = g[0],
                    h = g[1];
                return (
                    Object(n.useEffect)(
                        function() {
                            ge(
                                '?keys[]=portalName&keys[]=portalWebsite&keys[]=portalUrl&keys[]=responsibleUserId&keys[]=checkContactTaskResponsibleUserId&keys[]=linkPrivacyPolicy'
                            )
                                .then(function(e) {
                                    m(Object(y.a)({}, e.data));
                                })
                                .catch(function(e) {
                                    a.setState({ isLoading: !1, hasError: !0 });
                                }),
                                h(!0),
                                fa(t.params.id)
                                    .then(function(e) {
                                        p(e.data.data), h(!1);
                                    })
                                    .catch(function(e) {
                                        alert('Er is iets misgegaan met laden. Herlaad de pagina opnieuw.'), h(!1);
                                    });
                        },
                        [t]
                    ),
                    r.a.createElement(
                        v.a,
                        { className: 'content-section' },
                        f
                            ? r.a.createElement(Fe, null)
                            : r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement(
                                      j.a,
                                      null,
                                      r.a.createElement(
                                          O.a,
                                          null,
                                          r.a.createElement(
                                              'h1',
                                              { className: 'content-heading' },
                                              'Inschrijven project'
                                          )
                                      )
                                  ),
                                  (function() {
                                      switch (u.projectType.codeRef) {
                                          case 'loan':
                                              return r.a.createElement(Da, { project: u });
                                          case 'obligation':
                                              return r.a.createElement(Ba, { project: u });
                                          case 'capital':
                                              return r.a.createElement(Ga, { project: u });
                                          case 'postalcode_link_capital':
                                              return r.a.createElement(Wa, { project: u });
                                          default:
                                              return null;
                                      }
                                  })(),
                                  r.a.createElement(
                                      j.a,
                                      { className: 'mt-5' },
                                      r.a.createElement(
                                          O.a,
                                          null,
                                          r.a.createElement(
                                              'p',
                                              null,
                                              'Meer informatie over dit project vind je',
                                              ' ',
                                              r.a.createElement(
                                                  'a',
                                                  { href: ''.concat(u.linkUnderstandInfo), target: '_blank' },
                                                  'hier'
                                              )
                                          ),
                                          r.a.createElement(
                                              'p',
                                              null,
                                              'Wil je inschrijven op dit project. Klik dan op "Ga naar inschrijven".'
                                          )
                                      )
                                  ),
                                  r.a.createElement(
                                      j.a,
                                      null,
                                      r.a.createElement(
                                          O.a,
                                          null,
                                          r.a.createElement(
                                              Le.a,
                                              { className: 'float-right' },
                                              r.a.createElement(
                                                  c.b,
                                                  { to: '/inschrijven/'.concat(u.id) },
                                                  r.a.createElement(
                                                      ae.a,
                                                      { className: 'w-button', size: 'sm' },
                                                      'Ga naar inschrijven'
                                                  )
                                              )
                                          )
                                      )
                                  )
                              )
                    )
                );
            };
            function Ka(e) {
                var a,
                    t = Object(n.useState)({}),
                    l = Object(s.a)(t, 2),
                    i = l[0],
                    c = l[1],
                    m = Object(n.useState)(!0),
                    o = Object(s.a)(m, 2),
                    d = o[0],
                    p = o[1],
                    E = (function(e) {
                        var a = Object(n.useRef)();
                        return (
                            Object(n.useEffect)(function() {
                                a.current = e;
                            }),
                            a.current
                        );
                    })(e.currentSelectedContact);
                return (
                    Object(n.useEffect)(
                        function() {
                            e.currentSelectedContact.id &&
                                ((E && E.id == e.currentSelectedContact.id) ||
                                    (p(!0),
                                    ze(e.currentSelectedContact.id)
                                        .then(function(e) {
                                            c(e.data.data), p(!1);
                                        })
                                        .catch(function(e) {
                                            alert('Er is iets misgegaan met laden. Herlaad de pagina opnieuw.'), p(!1);
                                        })));
                        },
                        [e.currentSelectedContact]
                    ),
                    r.a.createElement(
                        v.a,
                        { className: 'content-section' },
                        r.a.createElement(
                            j.a,
                            null,
                            r.a.createElement(
                                O.a,
                                null,
                                r.a.createElement(
                                    'h1',
                                    { className: 'content-heading' },
                                    'De projecten waarin ',
                                    r.a.createElement(
                                        'strong',
                                        null,
                                        (a = i.fullName)
                                            ? a.search(',') < 0
                                                ? a
                                                : a.slice(a.search(',') + 2) + ' ' + a.slice(0, a.search(','))
                                            : ' '
                                    ),
                                    ' deelneemt.'
                                )
                            )
                        ),
                        r.a.createElement(
                            j.a,
                            null,
                            r.a.createElement(
                                O.a,
                                null,
                                d
                                    ? r.a.createElement(Fe, null)
                                    : 0 === i.length
                                    ? 'Nog geen inschrijvingen.'
                                    : r.a.createElement(
                                          La.a,
                                          { responsive: !0 },
                                          r.a.createElement(
                                              'thead',
                                              null,
                                              r.a.createElement(
                                                  'tr',
                                                  null,
                                                  r.a.createElement('th', null, 'Project'),
                                                  r.a.createElement('th', null, 'Deelname')
                                              )
                                          ),
                                          r.a.createElement(
                                              'tbody',
                                              null,
                                              i.participations.map(function(e) {
                                                  return !e.project.dateEnd ||
                                                      u()(e.project.dateEnd).format('YYYY-MM-DD') >=
                                                          u()().format('YYYY-MM-DD')
                                                      ? r.a.createElement(
                                                            'tr',
                                                            { key: e.id },
                                                            r.a.createElement('td', null, e.project.name),
                                                            r.a.createElement(
                                                                'td',
                                                                null,
                                                                'loan' == e.project.projectType.codeRef
                                                                    ? r.a.createElement(
                                                                          r.a.Fragment,
                                                                          null,
                                                                          0 != e.amountInteressed
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    'Lening',
                                                                                    ' ',
                                                                                    ha(e.amountInteressed),
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Interesse)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.amountOptioned
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    'Lening',
                                                                                    ' ',
                                                                                    ha(e.amountOptioned),
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Ingeschreven)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.amountGranted
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    'Lening ',
                                                                                    ha(e.amountGranted),
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Toegekend)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.amountDefinitive
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    'Lening',
                                                                                    ' ',
                                                                                    ha(e.amountDefinitive),
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Definitief)'
                                                                                    )
                                                                                )
                                                                              : ''
                                                                      )
                                                                    : '',
                                                                'obligation' == e.project.projectType.codeRef
                                                                    ? r.a.createElement(
                                                                          r.a.Fragment,
                                                                          null,
                                                                          0 != e.participationsInteressed
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsInteressed,
                                                                                    ' obligaties ',
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        ' (Interesse)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.participationsOptioned
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsOptioned,
                                                                                    ' obligaties ',
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Ingeschreven)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.participationsGranted
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsGranted,
                                                                                    ' obligaties ',
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Toegekend)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.participationsDefinitive
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsDefinitive,
                                                                                    ' obligaties ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Definitief)'
                                                                                    )
                                                                                )
                                                                              : ''
                                                                      )
                                                                    : '',
                                                                'capital' == e.project.projectType.codeRef
                                                                    ? r.a.createElement(
                                                                          r.a.Fragment,
                                                                          null,
                                                                          0 != e.participationsInteressed
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsInteressed,
                                                                                    ' participaties ',
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Interesse)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.participationsOptioned
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsOptioned,
                                                                                    ' participaties ',
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Ingeschreven)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.participationsGranted
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsGranted,
                                                                                    ' participaties ',
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Toegekend)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.participationsDefinitive
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsDefinitive,
                                                                                    ' participaties ',
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Definitief)'
                                                                                    )
                                                                                )
                                                                              : ''
                                                                      )
                                                                    : '',
                                                                'postalcode_link_capital' ==
                                                                    e.project.projectType.codeRef
                                                                    ? r.a.createElement(
                                                                          r.a.Fragment,
                                                                          null,
                                                                          0 != e.participationsInteressed
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsInteressed,
                                                                                    ' participaties ',
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Interesse)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.participationsOptioned
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsOptioned,
                                                                                    ' participaties ',
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Ingeschreven)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.participationsGranted
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsGranted,
                                                                                    ' participaties ',
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Toegekend)'
                                                                                    )
                                                                                )
                                                                              : '',
                                                                          0 != e.participationsDefinitive
                                                                              ? r.a.createElement(
                                                                                    'span',
                                                                                    null,
                                                                                    e.participationsDefinitive,
                                                                                    ' participaties ',
                                                                                    ' ',
                                                                                    r.a.createElement(
                                                                                        'em',
                                                                                        null,
                                                                                        '(Definitief)'
                                                                                    )
                                                                                )
                                                                              : ''
                                                                      )
                                                                    : ''
                                                            )
                                                        )
                                                      : null;
                                              })
                                          )
                                      )
                            )
                        )
                    )
                );
            }
            function Ua(e) {
                return r.a.createElement(k, null, function(a) {
                    var t = a.currentSelectedContact;
                    return r.a.createElement(Ka, Object.assign({}, e, { currentSelectedContact: t }));
                });
            }
            var Ya = t(127),
                $a = t.n(Ya),
                Za = t(212),
                Ja = Q.object().shape({
                    email: Q.string()
                        .email()
                        .required('Verplicht'),
                    personTitleId: Q.string()
                        .nullable()
                        .required('Verplicht'),
                    personFirstName: Q.string()
                        .trim()
                        .required('Verplicht'),
                    personLastName: Q.string()
                        .trim()
                        .required('Verplicht'),
                }),
                Qa = function(e) {
                    var a = e.handleSubmit,
                        t = e.showSuccessMessage;
                    return r.a.createElement(J.d, {
                        initialValues: { email: '', personTitleId: '', personFirstName: '', personLastName: '' },
                        enableReinitialize: !0,
                        validationSchema: Ja,
                        onSubmit: function(e, t) {
                            t.setSubmitting(!0), a(e, t);
                        },
                        render: function(e) {
                            var a = e.isSubmitting,
                                n = e.errors,
                                l = e.touched;
                            return r.a.createElement(
                                J.c,
                                null,
                                r.a.createElement(
                                    r.a.Fragment,
                                    null,
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(
                                            'p',
                                            { className: 'authorization-text' },
                                            'Account aanmaken voor jezelf'
                                        )
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement('p', { className: 'authorization-text' }, 'Gegevens')
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(J.a, {
                                            name: 'personTitleId',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(He, {
                                                    field: a,
                                                    errors: n,
                                                    touched: l,
                                                    id: 'title_id',
                                                    className: 'select-field-transparent',
                                                    placeholder: 'Aanhef',
                                                    options: Ye,
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(J.a, {
                                            name: 'personFirstName',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    errors: n,
                                                    touched: l,
                                                    id: 'first_name-new-acount',
                                                    className: '',
                                                    placeholder: 'Voornaam',
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(J.a, {
                                            name: 'personLastNamePrefixId',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(He, {
                                                    field: a,
                                                    errors: n,
                                                    touched: l,
                                                    id: 'last_name_prefix_id',
                                                    options: $e,
                                                    className: 'select-field-transparent',
                                                    placeholder: 'Tussenvoegsel',
                                                });
                                            },
                                        }),
                                        r.a.createElement(J.a, {
                                            name: 'personLastName',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    errors: n,
                                                    touched: l,
                                                    id: 'last_name-new-acount',
                                                    className: '',
                                                    placeholder: 'Achternaam',
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(J.a, {
                                            name: 'email',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    id: 'email-new-acount',
                                                    className: '',
                                                    placeholder: 'E-mailadres',
                                                    errors: n,
                                                    touched: l,
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(ne, {
                                            buttonText: 'Account aanmaken',
                                            buttonClassName: 'authorization-button',
                                            size: 'sm',
                                            type: 'submit',
                                            loading: a,
                                            loadingSpinnerColor: '#034b8c',
                                            disabled: t,
                                        })
                                    )
                                )
                            );
                        },
                    });
                },
                Xa = Q.object().shape({
                    email: Q.string()
                        .email()
                        .required('Verplicht'),
                    organisationName: Q.string()
                        .trim()
                        .required('Verplicht'),
                    personTitleId: Q.string()
                        .nullable()
                        .required('Verplicht'),
                    personFirstName: Q.string()
                        .trim()
                        .required('Verplicht'),
                    personLastName: Q.string()
                        .trim()
                        .required('Verplicht'),
                }),
                et = function(e) {
                    var a = e.handleSubmit,
                        t = e.showSuccessMessage;
                    return r.a.createElement(J.d, {
                        initialValues: {
                            email: '',
                            organisationName: '',
                            personTitleId: '',
                            personFirstName: '',
                            personLastName: '',
                        },
                        enableReinitialize: !0,
                        validationSchema: Xa,
                        onSubmit: function(e, t) {
                            t.setSubmitting(!0), a(e, t);
                        },
                        render: function(e) {
                            var a = e.isSubmitting,
                                n = e.errors,
                                l = e.touched;
                            return r.a.createElement(
                                J.c,
                                null,
                                r.a.createElement(
                                    r.a.Fragment,
                                    null,
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(
                                            'p',
                                            { className: 'authorization-text' },
                                            'Account aanmaken voor je organisatie'
                                        )
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(J.a, {
                                            name: 'organisationName',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    id: 'name-new-acount',
                                                    className: '',
                                                    placeholder: 'Naam Organisatie',
                                                    errors: n,
                                                    touched: l,
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(
                                            'p',
                                            { className: 'authorization-text' },
                                            'Gegevens contactpersoon'
                                        )
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(J.a, {
                                            name: 'personTitleId',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(He, {
                                                    field: a,
                                                    errors: n,
                                                    touched: l,
                                                    id: 'title_id',
                                                    className: 'select-field-transparent',
                                                    placeholder: 'Aanhef',
                                                    options: Ye,
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(J.a, {
                                            name: 'personFirstName',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    errors: n,
                                                    touched: l,
                                                    id: 'first_name-new-acount',
                                                    className: '',
                                                    placeholder: 'Voornaam',
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(J.a, {
                                            name: 'personLastNamePrefixId',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(He, {
                                                    field: a,
                                                    errors: n,
                                                    touched: l,
                                                    id: 'last_name_prefix_id',
                                                    options: $e,
                                                    className: 'select-field-transparent',
                                                    placeholder: 'Tussenvoegsel',
                                                });
                                            },
                                        }),
                                        r.a.createElement(J.a, {
                                            name: 'personLastName',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    errors: n,
                                                    touched: l,
                                                    id: 'last_name-new-acount',
                                                    className: '',
                                                    placeholder: 'Achternaam',
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(J.a, {
                                            name: 'email',
                                            render: function(e) {
                                                var a = e.field;
                                                return r.a.createElement(Z, {
                                                    field: a,
                                                    id: 'email-new-acount',
                                                    className: '',
                                                    placeholder: 'E-mailadres',
                                                    errors: n,
                                                    touched: l,
                                                });
                                            },
                                        })
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        { className: 'justify-content-center' },
                                        r.a.createElement(ne, {
                                            buttonText: 'Account aanmaken',
                                            buttonClassName: 'authorization-button',
                                            size: 'sm',
                                            type: 'submit',
                                            loading: a,
                                            loadingSpinnerColor: '#034b8c',
                                            disabled: t,
                                        })
                                    )
                                )
                            );
                        },
                    });
                },
                at = t(495),
                tt = t(496),
                nt = function(e) {
                    var a = Object(ve.b)().executeRecaptcha,
                        t = Object(n.useState)('person'),
                        l = Object(s.a)(t, 2),
                        i = l[0],
                        c = l[1],
                        o = Object(n.useState)(!1),
                        d = Object(s.a)(o, 2),
                        u = d[0],
                        p = d[1],
                        E = Object(n.useState)(!1),
                        g = Object(s.a)(E, 2),
                        f = g[0],
                        h = g[1],
                        b = Object(n.useState)(''),
                        N = Object(s.a)(b, 2),
                        S = N[0],
                        w = N[1];
                    function k(e, a) {
                        return x.apply(this, arguments);
                    }
                    function x() {
                        return (x = Object(Za.a)(
                            $a.a.mark(function e(t, n) {
                                var r;
                                return $a.a.wrap(function(e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                if (a) {
                                                    e.next = 2;
                                                    break;
                                                }
                                                return e.abrupt('return');
                                            case 2:
                                                return (e.next = 4), a('signup_page');
                                            case 4:
                                                (r = e.sent),
                                                    me(Object(y.a)({}, t, { contactType: i, reCaptchaToken: r }))
                                                        .then(function(e) {
                                                            p(!1), h(!0), n.setSubmitting(!1);
                                                        })
                                                        .catch(function(e) {
                                                            p(!0),
                                                                e.response && 404 === e.response.status
                                                                    ? w(
                                                                          'Er bestaat al een account met het e-mailadres dat je hebt ingevuld. Je kunt met dit e-mailadres inloggen als bestaand contact. Wil je een nieuw account aanmaken? Gebruik dan alsjeblieft een ander e-mailadres.'
                                                                      )
                                                                    : e.response && 405 === e.response.status
                                                                    ? w(
                                                                          'Er bestaat al een contact met het e-mailadres, voornaam en achternaam dat je hebt ingevuld. Wil je een nieuw account aanmaken? Gebruik dan alsjeblieft een ander e-mailadres, voornaam of achternaam.'
                                                                      )
                                                                    : w('Fout bij aanmaken nieuw account!'),
                                                                n.setSubmitting(!1);
                                                        });
                                            case 6:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )).apply(this, arguments);
                    }
                    return r.a.createElement(
                        'div',
                        { className: 'authorization-container' },
                        r.a.createElement(
                            v.a,
                            { fluid: !0, className: 'authorization-text' },
                            r.a.createElement(
                                j.a,
                                {
                                    className:
                                        'justify-content-center align-content-start align-content-lg-center full-height p-2',
                                },
                                r.a.createElement(
                                    O.a,
                                    { xs: '12', sm: '6', md: '4', lg: '4', xl: '4' },
                                    r.a.createElement('img', {
                                        src: 'images/logo.png',
                                        alt: '',
                                        className: 'image logo-container-small',
                                    }),
                                    f
                                        ? r.a.createElement(m.a, { to: 'nieuw-account-succes' })
                                        : r.a.createElement(
                                              r.a.Fragment,
                                              null,
                                              r.a.createElement(
                                                  j.a,
                                                  { className: 'justify-content-center' },
                                                  r.a.createElement(
                                                      'h3',
                                                      { className: 'authorization-text' },
                                                      'Nieuw account'
                                                  )
                                              ),
                                              r.a.createElement(
                                                  j.a,
                                                  { className: 'justify-content-center' },
                                                  r.a.createElement(
                                                      'p',
                                                      { className: 'authorization-text' },
                                                      'Maak binnen 2 minuten een account aan.'
                                                  )
                                              ),
                                              r.a.createElement('br', null),
                                              r.a.createElement(
                                                  j.a,
                                                  { className: 'justify-content-center' },
                                                  r.a.createElement(
                                                      at.a,
                                                      { toggle: !0 },
                                                      r.a.createElement(
                                                          O.a,
                                                          null,
                                                          r.a.createElement(
                                                              tt.a,
                                                              {
                                                                  className: 'authorization-button',
                                                                  variant:
                                                                      'person' === i
                                                                          ? 'primary fixed-height'
                                                                          : 'light fixed-height',
                                                                  block: !0,
                                                                  onClick: function() {
                                                                      return c('person');
                                                                  },
                                                              },
                                                              'Voor jezelf'
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          O.a,
                                                          null,
                                                          r.a.createElement(
                                                              tt.a,
                                                              {
                                                                  className: 'authorization-button',
                                                                  variant: 'organisation' === i ? 'primary' : 'light',
                                                                  block: !0,
                                                                  onClick: function() {
                                                                      return c('organisation');
                                                                  },
                                                              },
                                                              'Voor je organisatie'
                                                          )
                                                      )
                                                  )
                                              ),
                                              r.a.createElement('br', null),
                                              'person' === i
                                                  ? r.a.createElement(Qa, { handleSubmit: k, showSuccessMessage: f })
                                                  : r.a.createElement(et, { handleSubmit: k, showSuccessMessage: f }),
                                              r.a.createElement('br', null),
                                              u
                                                  ? r.a.createElement(
                                                        j.a,
                                                        null,
                                                        r.a.createElement(
                                                            Ee.a,
                                                            { className: 'p-1 m-1 text-danger', variant: 'danger' },
                                                            S
                                                        )
                                                    )
                                                  : null
                                          )
                                )
                            )
                        )
                    );
                };
            var rt = function() {
                    return r.a.createElement(
                        ve.a,
                        { reCaptchaKey: '6Ld7HL8UAAAAANvpt7XEMtWCIxxf11dpfpY1ESWN', language: 'nl' },
                        r.a.createElement(nt, null)
                    );
                },
                lt = function() {
                    return r.a.createElement(
                        v.a,
                        { fluid: !0, className: 'authorization-container' },
                        r.a.createElement(
                            j.a,
                            { className: 'justify-content-center align-content-center full-height' },
                            r.a.createElement(
                                O.a,
                                { xs: '12', sm: '10', md: '8', lg: '6', xl: '4' },
                                r.a.createElement('img', {
                                    src: 'images/logo.png',
                                    alt: '',
                                    className: 'image logo-container',
                                }),
                                r.a.createElement(
                                    'div',
                                    null,
                                    r.a.createElement(
                                        'h3',
                                        { className: 'authorization-text' },
                                        'Een E-mail is onderweg!'
                                    ),
                                    r.a.createElement(
                                        'p',
                                        { className: 'authorization-text' },
                                        'Binnen enkele minuten ontvang je een e-mail met een persoonlijke link. Via deze link kun je je account activeren.',
                                        r.a.createElement('br', null),
                                        'Het kan zijn dat de mail door een spamfilter is geblokkeerd. Spamfilters van bijvoorbeeld Gmail en Hotmail staan erg "scherp". Kijk even bij de Spam/Reclame of je onze mail daar terug vindt.'
                                    ),
                                    r.a.createElement(
                                        'a',
                                        { onClick: window.close, href: '#', className: 'authorization-link' },
                                        'Sluit venster'
                                    )
                                )
                            )
                        )
                    );
                },
                it = Q.object({
                    email: Q.string()
                        .email('Geen geldig e-mailadres')
                        .required('Verplicht'),
                });
            var ct = function() {
                    var e = Object(n.useState)(''),
                        a = Object(s.a)(e, 2),
                        t = a[0],
                        l = a[1],
                        i = Object(n.useState)(!1),
                        c = Object(s.a)(i, 2),
                        m = c[0],
                        o = c[1],
                        d = Object(n.useState)(!1),
                        u = Object(s.a)(d, 2),
                        p = u[0],
                        E = u[1];
                    return (
                        Object(n.useEffect)(function() {
                            B()
                                .then(function(e) {
                                    l(e.data);
                                })
                                .catch(function(e) {
                                    alert('Er is iets misgegaan met laden. Herlaad de pagina opnieuw.');
                                });
                        }, []),
                        r.a.createElement(
                            J.d,
                            {
                                initialValues: { email: '', changePrimaryEmailAddress: !1 },
                                validationSchema: it,
                                onSubmit: function(e, a) {
                                    !(function(e, a) {
                                        G(e)
                                            .then(function(t) {
                                                l(e.email), a.resetForm(), E(!1), o(!0), a.setSubmitting(!1);
                                            })
                                            .catch(function(e) {
                                                a.setSubmitting(!1), E(!0), o(!1);
                                            });
                                    })(e, a);
                                },
                            },
                            function(e) {
                                var a = e.touched,
                                    n = e.errors,
                                    l = e.isSubmitting,
                                    i = e.handleSubmit;
                                return r.a.createElement(
                                    va.a,
                                    { onSubmit: i },
                                    m
                                        ? r.a.createElement(
                                              j.a,
                                              null,
                                              r.a.createElement(
                                                  O.a,
                                                  { xs: 12 },
                                                  r.a.createElement(
                                                      Ee.a,
                                                      { className: 'p-1 m-1 text-success', variant: 'success' },
                                                      'Inlog e-mail is succesvol gewijzigd!'
                                                  )
                                              )
                                          )
                                        : null,
                                    p
                                        ? r.a.createElement(
                                              Ee.a,
                                              { className: 'p-1 m-1 text-danger', variant: 'danger' },
                                              'Er bestaat al een account met het e-mailadres dat je hebt ingevuld. Je kunt met dit e-mailadres inloggen als bestaand contact. Wil je een nieuw account aanmaken? Gebruik dan alsjeblieft een ander e-mailadres.'
                                          )
                                        : null,
                                    r.a.createElement(
                                        j.a,
                                        null,
                                        r.a.createElement(
                                            O.a,
                                            { xs: 12 },
                                            r.a.createElement(qe.a, { className: 'field-label' }, 'Huidig e-mailadres'),
                                            r.a.createElement(Be, null, t)
                                        )
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        null,
                                        r.a.createElement(
                                            O.a,
                                            { xs: 12, md: 9 },
                                            r.a.createElement(
                                                va.a.Label,
                                                { className: 'field-label pt-1' },
                                                'Nieuw e-mailadres'
                                            ),
                                            r.a.createElement(J.a, {
                                                name: 'email',
                                                render: function(e) {
                                                    var t = e.field;
                                                    return r.a.createElement(Z, {
                                                        field: t,
                                                        errors: n,
                                                        touched: a,
                                                        id: 'email',
                                                    });
                                                },
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        null,
                                        r.a.createElement(
                                            O.a,
                                            { xs: 12, md: 9 },
                                            r.a.createElement(J.a, {
                                                name: 'changePrimaryEmailAddress',
                                                render: function(e) {
                                                    var a = e.field;
                                                    return r.a.createElement(
                                                        'label',
                                                        { className: 'w-checkbox checkbox-fld' },
                                                        r.a.createElement(
                                                            'input',
                                                            Object.assign({ type: 'checkbox' }, a, {
                                                                id: 'change-primary-email-address',
                                                                checked: a.value,
                                                                className: 'w-checkbox-input checkbox',
                                                            })
                                                        ),
                                                        r.a.createElement(
                                                            'span',
                                                            {
                                                                htmlFor: 'change-primary-email-address',
                                                                className: 'checkbox-label w-form-label',
                                                            },
                                                            'Wijziging ook doorvoeren op huidig correspondentie e-mailadres?'
                                                        )
                                                    );
                                                },
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        j.a,
                                        null,
                                        r.a.createElement(
                                            O.a,
                                            { xs: 12, md: 6 },
                                            r.a.createElement(ne, {
                                                buttonText: 'Wijzig e-mailadres',
                                                size: 'sm',
                                                type: 'submit',
                                                loading: l,
                                            })
                                        )
                                    )
                                );
                            }
                        )
                    );
                },
                mt = Q.object().shape({
                    password: Q.string()
                        .min(10, 'Minimum van ${min} verplicht')
                        .matches(/([0-9])/, 'Minimaal 1 cijfer is verplicht')
                        .matches(/([A-Z])/, 'Minimaal 1 hoofdletter is verplicht')
                        .required('Verplicht'),
                    passwordConfirmation: Q.string()
                        .oneOf([Q.ref('password'), null], 'Wachtwoorden moeten gelijk zijn')
                        .required('Verplicht'),
                });
            var ot = function() {
                var e = Object(n.useState)(!1),
                    a = Object(s.a)(e, 2),
                    t = a[0],
                    l = a[1],
                    i = Object(n.useState)(!1),
                    c = Object(s.a)(i, 2),
                    m = c[0],
                    o = c[1];
                return r.a.createElement(
                    J.d,
                    {
                        initialValues: { password: '', passwordConfirmation: '' },
                        validationSchema: mt,
                        onSubmit: function(e, a) {
                            !(function(e, a) {
                                W(e)
                                    .then(function(e) {
                                        a.resetForm(), o(!1), l(!0), a.setSubmitting(!1);
                                    })
                                    .catch(function(e) {
                                        a.setSubmitting(!1), o(!0), l(!1);
                                    });
                            })(e, a);
                        },
                    },
                    function(e) {
                        var a = e.touched,
                            n = e.errors,
                            l = e.isSubmitting,
                            i = e.handleSubmit;
                        return r.a.createElement(
                            va.a,
                            { onSubmit: i },
                            t
                                ? r.a.createElement(
                                      j.a,
                                      null,
                                      r.a.createElement(
                                          O.a,
                                          { xs: 12 },
                                          r.a.createElement(
                                              Ee.a,
                                              { className: 'p-1 m-1 text-success', variant: 'success' },
                                              'Wachtwoord is succesvol gewijzigd!'
                                          )
                                      )
                                  )
                                : null,
                            m
                                ? r.a.createElement(
                                      Ee.a,
                                      { className: 'p-1 m-1 text-danger', variant: 'danger' },
                                      'Fout bij wijzigen wachtwoord!'
                                  )
                                : null,
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, md: 9 },
                                    r.a.createElement(va.a.Label, { className: 'field-label' }, 'Nieuw wachtwoord'),
                                    r.a.createElement(J.a, {
                                        name: 'password',
                                        render: function(e) {
                                            var t = e.field;
                                            return r.a.createElement(Z, {
                                                field: t,
                                                id: 'password',
                                                className: t.value ? 'content numeric-password' : 'content',
                                                placeholder: 'Nieuw wachtwoord',
                                                errors: n,
                                                touched: a,
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, md: 9 },
                                    r.a.createElement(
                                        va.a.Label,
                                        { className: 'field-label mt-0' },
                                        'Herhaal nieuw wachtwoord'
                                    ),
                                    r.a.createElement(J.a, {
                                        name: 'passwordConfirmation',
                                        render: function(e) {
                                            var t = e.field;
                                            return r.a.createElement(Z, {
                                                field: t,
                                                id: 'passwordConfirmation',
                                                className: t.value ? 'content numeric-password' : 'content',
                                                placeholder: 'Herhaal nieuw wachtwoord',
                                                errors: n,
                                                touched: a,
                                            });
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                j.a,
                                null,
                                r.a.createElement(
                                    O.a,
                                    { xs: 12, md: 6 },
                                    r.a.createElement(ne, {
                                        buttonText: 'Wijzig wachtwoord',
                                        size: 'sm',
                                        type: 'submit',
                                        loading: l,
                                    })
                                )
                            )
                        );
                    }
                );
            };
            var st = function() {
                return r.a.createElement(
                    v.a,
                    { className: 'content-section' },
                    r.a.createElement(
                        j.a,
                        null,
                        r.a.createElement(
                            O.a,
                            null,
                            r.a.createElement('h1', { className: 'content-heading' }, 'Wijzig inloggegevens')
                        )
                    ),
                    r.a.createElement(
                        j.a,
                        null,
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6, className: 'mb-5' },
                            r.a.createElement('h3', { className: 'h3' }, 'Wijzig inlog e-mailadres'),
                            r.a.createElement(ct, null)
                        ),
                        r.a.createElement(
                            O.a,
                            { xs: 12, md: 6 },
                            r.a.createElement('h3', { className: 'h3' }, 'Wijzig wachtwoord'),
                            r.a.createElement(ot, null)
                        )
                    )
                );
            };
            var dt = function() {
                return r.a.createElement(
                    c.a,
                    null,
                    r.a.createElement(
                        g,
                        null,
                        r.a.createElement(
                            w,
                            null,
                            r.a.createElement(
                                m.d,
                                null,
                                r.a.createElement(K, { exact: !0, path: '/', component: ua }),
                                r.a.createElement(K, { path: '/gegevens', component: ua }),
                                r.a.createElement(K, { path: '/mijn-interessegebieden', component: Ea }),
                                r.a.createElement(K, { path: '/inschrijven/:id', component: Fa }),
                                r.a.createElement(K, { path: '/inschrijven-projecten', component: qa }),
                                r.a.createElement(K, { path: '/inschrijvingen-projecten', component: Ua }),
                                r.a.createElement(K, { path: '/project/:id', component: Ha }),
                                r.a.createElement(K, { path: '/wijzig-inloggegevens', component: st }),
                                r.a.createElement(U, { path: '/login', component: be }),
                                r.a.createElement(U, {
                                    path: '/activeer-registratie/:registrationCode/:email',
                                    component: Se,
                                }),
                                r.a.createElement(U, { path: '/wachtwoord-vergeten', component: xe }),
                                r.a.createElement(U, { path: '/wachtwoord-wijzigen/:token/:email', component: _e }),
                                r.a.createElement(U, { path: '/nieuw-account', component: rt }),
                                r.a.createElement(U, { path: '/nieuw-account-succes', component: lt })
                            )
                        )
                    )
                );
            };
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
            );
            t(491);
            i.a.render(r.a.createElement(dt, null), document.getElementById('root')),
                document.getElementById('server-data').remove(),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
    },
    [[214, 1, 2]],
]);
//# sourceMappingURL=main.a103e6dc.chunk.js.map
