(window.webpackJsonp = window.webpackJsonp || []).push([
  [98],
  {
    1462: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(24),
        r = a.n(n),
        i = a(25),
        l = a.n(i),
        s = a(22),
        o = a.n(s),
        c = a(26),
        u = a.n(c),
        m = a(27),
        f = a.n(m),
        p = a(16),
        d = a.n(p),
        g = a(0),
        h = a.n(g),
        v = a(32),
        b = a(4),
        C = a(693),
        y = Object(v.b)(function(e) {
          return {
            permissions: e.meDetails.permissions,
            campaigns: e.campaigns.list
          };
        })(function(e) {
          var t = e.permissions,
            a = void 0 === t ? {} : t,
            n = e.campaigns.meta,
            r = void 0 === n ? {} : n;
          return h.a.createElement(
            "div",
            { className: "row" },
            h.a.createElement(
              "div",
              { className: "col-md-4" },
              h.a.createElement(
                "div",
                { className: "btn-group", role: "group" },
                h.a.createElement(C.a, {
                  iconName: "glyphicon-arrow-left",
                  onClickAction: b.e.goBack
                }),
                a.manageMarketing &&
                  h.a.createElement(C.a, {
                    iconName: "glyphicon-plus",
                    onClickAction: function() {
                      b.f.push("campagne/nieuw");
                    }
                  })
              )
            ),
            h.a.createElement(
              "div",
              { className: "col-md-4" },
              h.a.createElement(
                "h3",
                { className: "text-center table-title" },
                "Campagnes"
              )
            ),
            h.a.createElement(
              "div",
              { className: "col-md-4" },
              h.a.createElement(
                "div",
                { className: "pull-right" },
                "Resultaten: ",
                r.total || 0
              )
            )
          );
        }),
        P = a(199),
        N = a.n(P),
        E = a(6),
        k = a.n(E),
        w = a(146),
        D = a(147),
        R = a(200),
        L = a(101),
        O = a(7),
        I = a.n(O);
      function x(e) {
        var t = (function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var a,
            n = d()(e);
          if (t) {
            var r = d()(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return f()(this, a);
        };
      }
      I.a.locale("nl");
      var j = (function(e) {
          u()(a, e);
          var t = x(a);
          function a(e) {
            var n;
            return (
              r()(this, a),
              ((n = t.call(this, e)).state = {
                showActionButtons: !1,
                highlightRow: ""
              }),
              n
            );
          }
          return (
            l()(a, [
              {
                key: "onRowEnter",
                value: function() {
                  this.setState({
                    showActionButtons: !0,
                    highlightRow: "highlight-row"
                  });
                }
              },
              {
                key: "onRowLeave",
                value: function() {
                  this.setState({ showActionButtons: !1, highlightRow: "" });
                }
              },
              {
                key: "openItem",
                value: function(e) {
                  b.f.push("campagne/".concat(e));
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.id,
                    n = t.number,
                    r = t.startDate,
                    i = t.endDate,
                    l = t.name,
                    s = t.type,
                    o = t.status,
                    c = t.amountResponses;
                  return h.a.createElement(
                    "tr",
                    {
                      className: this.state.highlightRow,
                      onDoubleClick: function() {
                        return e.openItem(a);
                      },
                      onMouseEnter: function() {
                        return e.onRowEnter();
                      },
                      onMouseLeave: function() {
                        return e.onRowLeave();
                      }
                    },
                    h.a.createElement("td", null, n),
                    h.a.createElement("td", null, r ? I()(r).format("L") : ""),
                    h.a.createElement("td", null, i ? I()(i).format("L") : ""),
                    h.a.createElement("td", null, l),
                    h.a.createElement("td", null, s),
                    h.a.createElement("td", null, o),
                    h.a.createElement("td", null, c),
                    h.a.createElement(
                      "td",
                      null,
                      this.state.showActionButtons
                        ? h.a.createElement(
                            "a",
                            {
                              role: "button",
                              onClick: function() {
                                return e.openItem(a);
                              }
                            },
                            h.a.createElement("span", {
                              className:
                                "glyphicon glyphicon-pencil mybtn-success"
                            }),
                            " "
                          )
                        : "",
                      (this.state.showActionButtons &&
                        this.props.permissions.manageMarketing,
                      "")
                    )
                  );
                }
              }
            ]),
            a
          );
        })(g.Component),
        M = Object(v.b)(function(e) {
          return { permissions: e.meDetails.permissions };
        })(j),
        _ = a(100),
        A = a(150),
        S = function(e) {
          return h.a.createElement(
            _.a,
            {
              buttonConfirmText: "Verwijder",
              buttonClassName: "btn-danger",
              closeModal: e.closeDeleteItemModal,
              confirmAction: function() {
                return (
                  A.a.deleteCampaign(e.id).then(function() {
                    e.fetchCampaignsData();
                  }),
                  void e.closeDeleteItemModal()
                );
              },
              title: "Verwijderen"
            },
            "Verwijder campagne ",
            h.a.createElement("strong", null, e.name),
            "?"
          );
        },
        B = a(712);
      function T(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(a), !0).forEach(function(t) {
                k()(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : T(Object(a)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function G(e) {
        var t = (function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var a,
            n = d()(e);
          if (t) {
            var r = d()(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return f()(this, a);
        };
      }
      var V = (function(e) {
          u()(a, e);
          var t = G(a);
          function a(e) {
            var n;
            return (
              r()(this, a),
              (n = t.call(this, e)),
              k()(o()(n), "showDeleteItemModal", function(e, t) {
                n.setState(
                  q(
                    q({}, n.state),
                    {},
                    {
                      showDeleteItem: !0,
                      deleteItem: q(
                        q({}, n.state.deleteItem),
                        {},
                        { id: e, name: t }
                      )
                    }
                  )
                );
              }),
              k()(o()(n), "closeDeleteItemModal", function() {
                n.setState(
                  q(
                    q({}, n.state),
                    {},
                    {
                      showDeleteItem: !1,
                      deleteItem: q(
                        q({}, n.state.deleteItem),
                        {},
                        { id: "", name: "" }
                      )
                    }
                  )
                );
              }),
              (n.state = {
                showDeleteItem: !1,
                deleteItem: { id: "", name: "" }
              }),
              n
            );
          }
          return (
            l()(a, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.campaigns,
                    a = t.data,
                    n = void 0 === a ? [] : a,
                    r = t.meta,
                    i = void 0 === r ? {} : r,
                    l = "",
                    s = !0;
                  return (
                    this.props.hasError
                      ? (l = "Fout bij het ophalen van campagnes.")
                      : this.props.isLoading
                      ? (l = "Gegevens aan het laden.")
                      : 0 === n.length
                      ? (l = "Geen campagnes gevonden!")
                      : (s = !1),
                    h.a.createElement(
                      "div",
                      null,
                      h.a.createElement(
                        w.a,
                        null,
                        h.a.createElement(
                          D.a,
                          null,
                          h.a.createElement(
                            "tr",
                            { className: "thead-title-quaternary" },
                            h.a.createElement(L.a, {
                              title: "Nummer",
                              width: "10%"
                            }),
                            h.a.createElement(L.a, {
                              title: "Begindatum",
                              width: "10%"
                            }),
                            h.a.createElement(L.a, {
                              title: "Einddatum",
                              width: "10%"
                            }),
                            h.a.createElement(L.a, {
                              title: "Naam",
                              width: "20%"
                            }),
                            h.a.createElement(L.a, {
                              title: "Type",
                              width: "20%"
                            }),
                            h.a.createElement(L.a, {
                              title: "Status",
                              width: "10%"
                            }),
                            h.a.createElement(L.a, {
                              title: "Aantal responses",
                              width: "14%"
                            }),
                            h.a.createElement(L.a, { title: "", width: "6%" })
                          )
                        ),
                        h.a.createElement(
                          R.a,
                          null,
                          s
                            ? h.a.createElement(
                                "tr",
                                null,
                                h.a.createElement("td", { colSpan: 9 }, l)
                              )
                            : n.map(function(t) {
                                return h.a.createElement(
                                  M,
                                  N()({ key: t.id }, t, {
                                    showDeleteItemModal: e.showDeleteItemModal
                                  })
                                );
                              })
                        )
                      ),
                      h.a.createElement(
                        "div",
                        { className: "col-md-6 col-md-offset-3" },
                        h.a.createElement(B.a, {
                          onPageChangeAction: this.props.handlePageClick,
                          totalRecords: i.total,
                          initialPage: this.props.campaignsPagination.page
                        })
                      ),
                      this.state.showDeleteItem &&
                        h.a.createElement(
                          S,
                          N()(
                            {
                              closeDeleteItemModal: this.closeDeleteItemModal,
                              fetchCampaignsData: this.props.fetchCampaignsData
                            },
                            this.state.deleteItem
                          )
                        )
                    )
                  );
                }
              }
            ]),
            a
          );
        })(g.Component),
        K = Object(v.b)(function(e) {
          return {
            campaigns: e.campaigns.list,
            campaignsPagination: e.campaigns.pagination,
            isLoading: e.loadingData.isLoading,
            hasError: e.loadingData.hasError
          };
        }, null)(V);
      function F(e) {
        var t = (function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var a,
            n = d()(e);
          if (t) {
            var r = d()(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return f()(this, a);
        };
      }
      var J = (function(e) {
        u()(a, e);
        var t = F(a);
        function a(e) {
          var n;
          return (
            r()(this, a),
            ((n = t.call(
              this,
              e
            )).fetchCampaignsData = n.fetchCampaignsData.bind(o()(n))),
            (n.handlePageClick = n.handlePageClick.bind(o()(n))),
            n
          );
        }
        return (
          l()(a, [
            {
              key: "componentDidMount",
              value: function() {
                this.fetchCampaignsData();
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                this.props.clearCampaigns();
              }
            },
            {
              key: "fetchCampaignsData",
              value: function() {
                var e = this;
                setTimeout(function() {
                  var t = {
                    limit: 20,
                    offset: e.props.campaignsPagination.offset
                  };
                  e.props.fetchCampaigns(t);
                }, 100);
              }
            },
            {
              key: "handlePageClick",
              value: function(e) {
                var t = e.selected,
                  a = Math.ceil(20 * t);
                this.props.setCampaignsPagination({ page: t, offset: a }),
                  this.fetchCampaignsData();
              }
            },
            {
              key: "render",
              value: function() {
                return h.a.createElement(
                  "div",
                  null,
                  h.a.createElement(
                    "div",
                    { className: "panel panel-default col-md-12" },
                    h.a.createElement(
                      "div",
                      { className: "panel-body" },
                      h.a.createElement(
                        "div",
                        { className: "col-md-12 margin-10-top" },
                        h.a.createElement(y, null)
                      ),
                      h.a.createElement(
                        "div",
                        { className: "col-md-12 margin-10-top" },
                        h.a.createElement(K, {
                          handlePageClick: this.handlePageClick,
                          fetchCampaignsData: this.fetchCampaignsData
                        })
                      )
                    )
                  )
                );
              }
            }
          ]),
          a
        );
      })(g.Component);
      t.default = Object(v.b)(
        function(e) {
          return { campaignsPagination: e.campaigns.pagination };
        },
        function(e) {
          return {
            fetchCampaigns: function(t) {
              e(
                (function(e) {
                  return { type: "FETCH_CAMPAIGNS", pagination: e };
                })(t)
              );
            },
            clearCampaigns: function() {
              e({ type: "CLEAR_CAMPAIGNS" });
            },
            setCampaignsPagination: function(t) {
              e(
                (function(e) {
                  return { type: "SET_CAMPAIGNS_PAGINATION", pagination: e };
                })(t)
              );
            }
          };
        }
      )(J);
    },
    693: function(e, t, a) {
      "use strict";
      var n = a(0),
        r = a.n(n),
        i = a(8),
        l = a.n(i),
        s = function(e) {
          var t = e.buttonClassName,
            a = e.iconName,
            n = e.onClickAction,
            i = e.title,
            l = e.disabled;
          return r.a.createElement(
            "button",
            {
              type: "button",
              className: "btn ".concat(t),
              onClick: n,
              disabled: l,
              title: i
            },
            r.a.createElement("span", { className: "glyphicon ".concat(a) })
          );
        };
      (s.defaultProps = {
        buttonClassName: "btn-success btn-sm",
        title: "",
        disabled: !1
      }),
        (s.propTypes = {
          buttonClassName: l.a.string,
          iconName: l.a.string.isRequired,
          onClickAction: l.a.func,
          title: l.a.string,
          disabled: l.a.bool
        }),
        (t.a = s);
    },
    712: function(e, t, a) {
      "use strict";
      var n = a(0),
        r = a.n(n),
        i = a(8),
        l = a.n(i),
        s = a(717),
        o = a.n(s),
        c = function(e) {
          var t = e.onPageChangeAction,
            a = e.initialPage,
            n = e.recordsPerPage,
            i = e.totalRecords;
          return r.a.createElement(o.a, {
            onPageChange: t,
            pageCount: Math.ceil(i / n) || 1,
            pageRangeDisplayed: 5,
            marginPagesDisplayed: 2,
            breakLabel: r.a.createElement("a", null, "..."),
            breakClassName: "break-me",
            containerClassName: "pagination",
            activeClassName: "active",
            previousLabel: r.a.createElement(
              "span",
              { "aria-hidden": "true" },
              "«"
            ),
            nextLabel: r.a.createElement(
              "span",
              { "aria-hidden": "true" },
              "»"
            ),
            initialPage: a || 0,
            forcePage: a,
            disableInitialCallback: !0
          });
        };
      (c.defaultProps = { recordsPerPage: 20 }),
        (c.propTypes = {
          initialPage: l.a.number.isRequired,
          recordsPerPage: l.a.number,
          totalRecords: l.a.number,
          onPageChangeAction: l.a.func.isRequired
        }),
        (t.a = c);
    },
    717: function(e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        r = a(718),
        i = (n = r) && n.__esModule ? n : { default: n };
      t.default = i.default;
    },
    718: function(e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var n = t[a];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
          };
        })(),
        r = a(0),
        i = c(r),
        l = c(a(8)),
        s = c(a(719)),
        o = c(a(720));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var a = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (a.handlePreviousPage = function(e) {
              var t = a.state.selected;
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                t > 0 && a.handlePageSelected(t - 1, e);
            }),
            (a.handleNextPage = function(e) {
              var t = a.state.selected,
                n = a.props.pageCount;
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                t < n - 1 && a.handlePageSelected(t + 1, e);
            }),
            (a.handlePageSelected = function(e, t) {
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
                a.state.selected !== e &&
                  (a.setState({ selected: e }), a.callCallback(e));
            }),
            (a.callCallback = function(e) {
              void 0 !== a.props.onPageChange &&
                "function" == typeof a.props.onPageChange &&
                a.props.onPageChange({ selected: e });
            }),
            (a.pagination = function() {
              var e = [],
                t = a.props,
                n = t.pageRangeDisplayed,
                r = t.pageCount,
                l = t.marginPagesDisplayed,
                s = t.breakLabel,
                c = t.breakClassName,
                u = a.state.selected;
              if (r <= n)
                for (var m = 0; m < r; m++) e.push(a.getPageElement(m));
              else {
                var f = n / 2,
                  p = n - f;
                u > r - n / 2
                  ? (f = n - (p = r - u))
                  : u < n / 2 && (p = n - (f = u));
                var d = void 0,
                  g = void 0,
                  h = void 0,
                  v = function(e) {
                    return a.getPageElement(e);
                  };
                for (d = 0; d < r; d++)
                  (g = d + 1) <= l || g > r - l || (d >= u - f && d <= u + p)
                    ? e.push(v(d))
                    : s &&
                      e[e.length - 1] !== h &&
                      ((h = i.default.createElement(o.default, {
                        key: d,
                        breakLabel: s,
                        breakClassName: c
                      })),
                      e.push(h));
              }
              return e;
            }),
            (a.state = {
              selected: e.initialPage
                ? e.initialPage
                : e.forcePage
                ? e.forcePage
                : 0
            }),
            a
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          n(t, [
            {
              key: "componentDidMount",
              value: function() {
                var e = this.props,
                  t = e.initialPage,
                  a = e.disableInitialCallback;
                void 0 === t || a || this.callCallback(t);
              }
            },
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                void 0 !== e.forcePage &&
                  this.props.forcePage !== e.forcePage &&
                  this.setState({ selected: e.forcePage });
              }
            },
            {
              key: "hrefBuilder",
              value: function(e) {
                var t = this.props,
                  a = t.hrefBuilder,
                  n = t.pageCount;
                if (a && e !== this.state.selected && e >= 0 && e < n)
                  return a(e + 1);
              }
            },
            {
              key: "getPageElement",
              value: function(e) {
                var t = this.state.selected,
                  a = this.props,
                  n = a.pageClassName,
                  r = a.pageLinkClassName,
                  l = a.activeClassName,
                  o = a.activeLinkClassName,
                  c = a.extraAriaContext;
                return i.default.createElement(s.default, {
                  key: e,
                  onClick: this.handlePageSelected.bind(null, e),
                  selected: t === e,
                  pageClassName: n,
                  pageLinkClassName: r,
                  activeClassName: l,
                  activeLinkClassName: o,
                  extraAriaContext: c,
                  href: this.hrefBuilder(e),
                  page: e + 1
                });
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props,
                  t = e.disabledClassName,
                  a = e.previousClassName,
                  n = e.nextClassName,
                  r = e.pageCount,
                  l = e.containerClassName,
                  s = e.previousLinkClassName,
                  o = e.previousLabel,
                  c = e.nextLinkClassName,
                  u = e.nextLabel,
                  m = this.state.selected,
                  f = a + (0 === m ? " " + t : ""),
                  p = n + (m === r - 1 ? " " + t : "");
                return i.default.createElement(
                  "ul",
                  { className: l },
                  i.default.createElement(
                    "li",
                    { className: f },
                    i.default.createElement(
                      "a",
                      {
                        onClick: this.handlePreviousPage,
                        className: s,
                        href: this.hrefBuilder(m - 1),
                        tabIndex: "0",
                        role: "button",
                        onKeyPress: this.handlePreviousPage
                      },
                      o
                    )
                  ),
                  this.pagination(),
                  i.default.createElement(
                    "li",
                    { className: p },
                    i.default.createElement(
                      "a",
                      {
                        onClick: this.handleNextPage,
                        className: c,
                        href: this.hrefBuilder(m + 1),
                        tabIndex: "0",
                        role: "button",
                        onKeyPress: this.handleNextPage
                      },
                      u
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(r.Component);
      (u.propTypes = {
        pageCount: l.default.number.isRequired,
        pageRangeDisplayed: l.default.number.isRequired,
        marginPagesDisplayed: l.default.number.isRequired,
        previousLabel: l.default.node,
        nextLabel: l.default.node,
        breakLabel: l.default.node,
        hrefBuilder: l.default.func,
        onPageChange: l.default.func,
        initialPage: l.default.number,
        forcePage: l.default.number,
        disableInitialCallback: l.default.bool,
        containerClassName: l.default.string,
        pageClassName: l.default.string,
        pageLinkClassName: l.default.string,
        activeClassName: l.default.string,
        activeLinkClassName: l.default.string,
        previousClassName: l.default.string,
        nextClassName: l.default.string,
        previousLinkClassName: l.default.string,
        nextLinkClassName: l.default.string,
        disabledClassName: l.default.string,
        breakClassName: l.default.string
      }),
        (u.defaultProps = {
          pageCount: 10,
          pageRangeDisplayed: 2,
          marginPagesDisplayed: 3,
          activeClassName: "selected",
          previousClassName: "previous",
          nextClassName: "next",
          previousLabel: "Previous",
          nextLabel: "Next",
          breakLabel: "...",
          disabledClassName: "disabled",
          disableInitialCallback: !1
        }),
        (t.default = u);
    },
    719: function(e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        r = a(0),
        i = (n = r) && n.__esModule ? n : { default: n };
      t.default = function(e) {
        var t = e.pageClassName,
          a = e.pageLinkClassName,
          n = e.onClick,
          r = e.href,
          l =
            "Page " +
            e.page +
            (e.extraAriaContext ? " " + e.extraAriaContext : ""),
          s = null;
        return (
          e.selected &&
            ((s = "page"),
            (l = "Page " + e.page + " is your current page"),
            (t =
              void 0 !== t ? t + " " + e.activeClassName : e.activeClassName),
            void 0 !== a
              ? ((a = a),
                void 0 !== e.activeLinkClassName &&
                  (a = a + " " + e.activeLinkClassName))
              : (a = e.activeLinkClassName)),
          i.default.createElement(
            "li",
            { className: t },
            i.default.createElement(
              "a",
              {
                onClick: n,
                role: "button",
                className: a,
                href: r,
                tabIndex: "0",
                "aria-label": l,
                "aria-current": s,
                onKeyPress: n
              },
              e.page
            )
          )
        );
      };
    },
    720: function(e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        r = a(0),
        i = (n = r) && n.__esModule ? n : { default: n };
      t.default = function(e) {
        var t = e.breakLabel,
          a = e.breakClassName || "break";
        return i.default.createElement("li", { className: a }, t);
      };
    }
  }
]);
