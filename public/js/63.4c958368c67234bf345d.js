(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1601:function(e,a,t){"use strict";t.r(a);var n=t(25),l=t.n(n),i=t(24),r=t.n(i),s=t(26),o=t.n(s),c=t(27),u=t.n(c),d=t(21),f=t.n(d),m=t(28),p=t.n(m),g=t(0),h=t.n(g),v=t(33),b=t(930),C=t(931),N=t(198),E=t.n(N),P=t(144),k=t(145),y=t(199),L=t(99),w=t(4),x=t(8),D=t.n(x);D.a.locale("nl");var _=function(e){function a(e){var t;return l()(this,a),(t=o()(this,u()(a).call(this,e))).state={showActionButtons:!1,highlightRow:""},t}return p()(a,e),r()(a,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){w.f.push("/email/concept/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props,t=a.id,n=a.createdAt,l=a.mailboxName,i=a.from,r=a.subject;return h.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(t)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},h.a.createElement("td",null,n&&D()(n).format("L")),h.a.createElement("td",null,l),h.a.createElement("td",null,i),h.a.createElement("td",null,r),h.a.createElement("td",null,this.state.showActionButtons?h.a.createElement("a",{role:"button",onClick:function(){return e.openItem(t)}},h.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):""))}}]),a}(g.Component),M=t(705),R=Object(v.b)((function(e){return{emails:e.emails.list,emailsPagination:e.emails.pagination}}),null)((function(e){var a=e.emails,t=a.data,n=void 0===t?[]:t,l=a.meta,i=void 0===l?{}:l;a.isLoading;return h.a.createElement("div",null,h.a.createElement(P.a,null,h.a.createElement(k.a,null,h.a.createElement("tr",{className:"thead-title"},h.a.createElement(L.a,{title:"Datum",width:"10%"}),h.a.createElement(L.a,{title:"Mailbox",width:"20%"}),h.a.createElement(L.a,{title:"Afzender",width:"20%"}),h.a.createElement(L.a,{title:"Onderwerp",width:"45%"}),h.a.createElement(L.a,{title:"",width:"5%"}))),h.a.createElement(y.a,null,0===n.length?h.a.createElement("tr",null,h.a.createElement("td",{colSpan:5},"Geen e-mails gevonden!")):n.map((function(e){return h.a.createElement(_,E()({key:e.id},e))})))),h.a.createElement(M.a,{onPageChangeAction:e.handlePageClick,totalRecords:i.total,initialPage:e.emailsPagination.page}))})),A=t(685),O=function(e){return h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-4"},h.a.createElement("div",{className:"btn-group",role:"group"},h.a.createElement(A.a,{iconName:"glyphicon-refresh",onClickAction:e.refreshData}),h.a.createElement(A.a,{iconName:"glyphicon-plus",onClickAction:function(){w.f.push("/email/nieuw")}}))),h.a.createElement("div",{className:"col-md-4"},h.a.createElement("h3",{className:"text-center table-title"},"E-mail concepten")),h.a.createElement("div",{className:"col-md-4"}))},j=t(682),I=t(683),S=(t(716),function(e){function a(e){var t;return l()(this,a),(t=o()(this,u()(a).call(this,e))).refreshData=t.refreshData.bind(f()(t)),t.handlePageClick=t.handlePageClick.bind(f()(t)),t}return p()(a,e),r()(a,[{key:"componentDidMount",value:function(){this.fetchEmailsData()}},{key:"componentWillUnmount",value:function(){this.props.clearEmails()}},{key:"fetchEmailsData",value:function(){var e=this;setTimeout((function(){var a={limit:20,offset:e.props.emailsPagination.offset};e.props.fetchEmails("concept",{},{},a)}),100)}},{key:"refreshData",value:function(){this.props.clearEmails(),this.fetchEmailsData()}},{key:"handlePageClick",value:function(e){var a=e.selected,t=Math.ceil(20*a);this.props.setEmailsPagination({page:a,offset:t}),this.fetchEmailsData()}},{key:"render",value:function(){return h.a.createElement(j.a,{className:"col-md-9"},h.a.createElement(I.a,null,h.a.createElement("div",{className:"col-md-12 margin-10-top"},h.a.createElement(O,{refreshData:this.refreshData})),h.a.createElement("div",{className:"col-md-12 margin-10-top"},h.a.createElement(R,{handlePageClick:this.handlePageClick}))))}}]),a}(g.Component));a.default=Object(v.b)((function(e){return{emailsPagination:e.emails.pagination}}),(function(e){return{fetchEmails:function(a,t,n,l){e(Object(b.b)(a,t,n,l))},clearEmails:function(){e(Object(b.a)())},setEmailsPagination:function(a){e(Object(C.a)(a))}}}))(S)},682:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(14),r=t.n(i),s=function(e){var a=e.children,t=e.className,n=e.onMouseEnter,i=e.onMouseLeave;return l.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:n,onMouseLeave:i},a)};s.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},s.propTypes={className:r.a.string,onMouseEnter:r.a.func,onMouseLeave:r.a.func},a.a=s},683:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(14),r=t.n(i),s=function(e){var a=e.className,t=e.children;return l.a.createElement("div",{className:"panel-body ".concat(a)},t)};s.defaultProps={className:""},s.propTypes={className:r.a.string},a.a=s},685:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(14),r=t.n(i),s=function(e){var a=e.buttonClassName,t=e.iconName,n=e.onClickAction,i=e.title,r=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:n,disabled:r,title:i},l.a.createElement("span",{className:"glyphicon ".concat(t)}))};s.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},s.propTypes={buttonClassName:r.a.string,iconName:r.a.string.isRequired,onClickAction:r.a.func,title:r.a.string,disabled:r.a.bool},a.a=s},705:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(14),r=t.n(i),s=t(710),o=t.n(s),c=function(e){var a=e.onPageChangeAction,t=e.initialPage,n=e.recordsPerPage,i=e.totalRecords;return l.a.createElement(o.a,{onPageChange:a,pageCount:Math.ceil(i/n)||1,pageRangeDisplayed:5,marginPagesDisplayed:2,breakLabel:l.a.createElement("a",null,"..."),breakClassName:"break-me",containerClassName:"pagination",activeClassName:"active",previousLabel:l.a.createElement("span",{"aria-hidden":"true"},"«"),nextLabel:l.a.createElement("span",{"aria-hidden":"true"},"»"),initialPage:t||0,forcePage:t,disableInitialCallback:!0})};c.defaultProps={recordsPerPage:20},c.propTypes={initialPage:r.a.number.isRequired,recordsPerPage:r.a.number,totalRecords:r.a.number,onPageChangeAction:r.a.func.isRequired},a.a=c},710:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(711),i=(n=l)&&n.__esModule?n:{default:n};a.default=i.default},711:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),l=t(0),i=c(l),r=c(t(14)),s=c(t(712)),o=c(t(713));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.callCallback=function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,n=a.pageRangeDisplayed,l=a.pageCount,r=a.marginPagesDisplayed,s=a.breakLabel,c=a.breakClassName,u=t.state.selected;if(l<=n)for(var d=0;d<l;d++)e.push(t.getPageElement(d));else{var f=n/2,m=n-f;u>l-n/2?f=n-(m=l-u):u<n/2&&(m=n-(f=u));var p=void 0,g=void 0,h=void 0,v=function(e){return t.getPageElement(e)};for(p=0;p<l;p++)(g=p+1)<=r||g>l-r||p>=u-f&&p<=u+m?e.push(v(p)):s&&e[e.length-1]!==h&&(h=i.default.createElement(o.default,{key:p,breakLabel:s,breakClassName:c}),e.push(h))}return e},t.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},t}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback;void 0===a||t||this.callCallback(a)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,l=t.pageLinkClassName,r=t.activeClassName,o=t.activeLinkClassName,c=t.extraAriaContext;return i.default.createElement(s.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:l,activeClassName:r,activeLinkClassName:o,extraAriaContext:c,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,n=e.nextClassName,l=e.pageCount,r=e.containerClassName,s=e.previousLinkClassName,o=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,d=this.state.selected,f=t+(0===d?" "+a:""),m=n+(d===l-1?" "+a:"");return i.default.createElement("ul",{className:r},i.default.createElement("li",{className:f},i.default.createElement("a",{onClick:this.handlePreviousPage,className:s,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},o)),this.pagination(),i.default.createElement("li",{className:m},i.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},u)))}}]),a}(l.Component);u.propTypes={pageCount:r.default.number.isRequired,pageRangeDisplayed:r.default.number.isRequired,marginPagesDisplayed:r.default.number.isRequired,previousLabel:r.default.node,nextLabel:r.default.node,breakLabel:r.default.node,hrefBuilder:r.default.func,onPageChange:r.default.func,initialPage:r.default.number,forcePage:r.default.number,disableInitialCallback:r.default.bool,containerClassName:r.default.string,pageClassName:r.default.string,pageLinkClassName:r.default.string,activeClassName:r.default.string,activeLinkClassName:r.default.string,previousClassName:r.default.string,nextClassName:r.default.string,previousLinkClassName:r.default.string,nextLinkClassName:r.default.string,disabledClassName:r.default.string,breakClassName:r.default.string},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=u},712:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(0),i=(n=l)&&n.__esModule?n:{default:n};a.default=function(e){var a=e.pageClassName,t=e.pageLinkClassName,n=e.onClick,l=e.href,r="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),s=null;return e.selected&&(s="page",r="Page "+e.page+" is your current page",a=void 0!==a?a+" "+e.activeClassName:e.activeClassName,void 0!==t?(t=t,void 0!==e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName)):t=e.activeLinkClassName),i.default.createElement("li",{className:a},i.default.createElement("a",{onClick:n,role:"button",className:t,href:l,tabIndex:"0","aria-label":r,"aria-current":s,onKeyPress:n},e.page))}},713:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(0),i=(n=l)&&n.__esModule?n:{default:n};a.default=function(e){var a=e.breakLabel,t=e.breakClassName||"break";return i.default.createElement("li",{className:t},a)}},716:function(e,a,t){"use strict";a.a=function(e){var a=[];for(var t in e)""!==e[t].data&&a.push(e[t]);return a}},930:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return l}));var n=function(e,a,t,n){return{type:"FETCH_EMAILS",folder:e,filters:a,sorts:t,pagination:n}},l=function(){return{type:"CLEAR_EMAILS"}}},931:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(e){return{type:"SET_EMAILS_PAGINATION",pagination:e}}}}]);