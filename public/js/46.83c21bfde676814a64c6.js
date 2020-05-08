(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1614:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n.n(a),o=n(24),i=n.n(o),l=n(26),s=n.n(l),c=n(27),u=n.n(c),d=n(21),m=n.n(d),p=n(28),f=n.n(p),h=n(6),v=n.n(h),b=n(0),g=n.n(b),E=n(682),y=n(683),N=n(33),C=(n(197),n(9)),k=n.n(C),w=n(4),O=function(e){function t(e){return r()(this,t),s()(this,u()(t).call(this,e))}return f()(t,e),i()(t,[{key:"render",value:function(){var e=this;return g.a.createElement("nav",{className:"orders-list open sticky"},g.a.createElement("div",{className:"send-orders-sidebar-menu",style:{color:"$brand-primary"}},g.a.createElement(k.a,{highlightColor:"$brand-primary",highlightBgColor:"#e5e5e5",hoverBgColor:"#F1EFF0",defaultSelected:"order"},this.props.orders.length>0?this.props.orders.map((function(t,n){return g.a.createElement(C.Nav,{onNavClick:function(){return e.props.changeOrder(t.id)},key:n,id:"administration-".concat(t.id)},g.a.createElement(C.NavText,null,g.a.createElement(w.b,{className:"".concat(t.totalPriceInclVat<0?"send-orders-list-link-error":"send-orders-list-link")},t.number," - ",t.contactName)))})):g.a.createElement(C.Nav,{id:"order"},g.a.createElement(C.NavText,null,g.a.createElement(w.b,{className:"send-orders-list-link"},"Geen orders beschikbaar."))))))}}]),t}(b.Component),T=Object(N.b)((function(e){return{administrationDetails:e.administrationDetails}}))(O),_=n(209),R=n(727),P=n(90),j=function(e){function t(e){var n;return r()(this,t),(n=s()(this,u()(t).call(this,e))).state={file:null},n}return f()(t,e),i()(t,[{key:"componentWillReceiveProps",value:function(e){this.props.orderId!==e.orderId&&e.orderId&&this.downloadFile(e.orderId)}},{key:"downloadFile",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;P.a.downloadPreview(e).then((function(e){t.setState({file:e.data})})).catch((function(){n<2&&setTimeout((function(){t.downloadFile(e,n)}),500),n++}))}},{key:"render",value:function(){return this.state.file?g.a.createElement("div",null,g.a.createElement(R.a,{file:this.state.file})):g.a.createElement("div",null,"Geen gegevens gevonden.")}}]),t}(b.Component),I=n(728),M=function(e){function t(e){var n;return r()(this,t),(n=s()(this,u()(t).call(this,e))).state={email:null},n}return f()(t,e),i()(t,[{key:"componentWillReceiveProps",value:function(e){this.props.orderId!==e.orderId&&e.orderId&&this.downloadEmail(e.orderId)}},{key:"downloadEmail",value:function(e){var t=this;P.a.getEmailPreview(e).then((function(e){t.setState({email:e})}))}},{key:"render",value:function(){return this.state.email?g.a.createElement("div",null,g.a.createElement("div",{className:"row margin-10-top"},g.a.createElement("div",{className:"col-sm-12"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-sm-3"},g.a.createElement("label",{className:"col-sm-12"},"Aan")),g.a.createElement("div",{className:"col-sm-9"},this.state.email.to)))),g.a.createElement("div",{className:"row margin-10-top"},g.a.createElement("div",{className:"col-sm-12"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-sm-3"},g.a.createElement("label",{className:"col-sm-12"},"Onderwerp")),g.a.createElement("div",{className:"col-sm-9"},this.state.email.subject)))),g.a.createElement("div",{className:"row"},g.a.createElement(I.a,{label:"Tekst",value:this.state.email.htmlBody}))):g.a.createElement("div",null,"Geen gegevens gevonden.")}}]),t}(b.Component),D=n(685),A=n(98),q=function(e){function t(e){var n;return r()(this,t),n=s()(this,u()(t).call(this,e)),v()(m()(n),"confirmAction",(function(e){n.setState({loading:!0}),e.preventDefault(),P.a.createAll(n.props.orderIds).then((function(e){w.f.push("/financieel/".concat(n.props.administrationId,"/notas/te-verzenden-incasso"))}))})),n=s()(this,u()(t).call(this,e)),v()(m()(n),"confirmAction",(function(e){n.setState({loading:!0}),e.preventDefault(),P.a.createAll(n.props.orderIds).then((function(e){w.f.push("/financieel/".concat(n.props.administrationId,"/notas/te-verzenden-incasso"))}))})),n.state={loading:!1},n}return f()(t,e),i()(t,[{key:"render",value:function(){return g.a.createElement(A.a,{modalClassName:"modal-lg",closeModal:this.props.closeModal,confirmAction:this.confirmAction,title:"Nota aanmaken",buttonConfirmText:"Aanmaken",loading:this.state.loading},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-sm-12 margin-10-bottom"},g.a.createElement("span",null,"Wilt u alle concept nota's (",this.props.amountOfOrders,") aanmaken? Let op. Nadat je op \"maak concept nota's\" hebt geklikt staan de concept nota's klaar om te verzenden. Je kunt geen wijzigingen aanmaken in de order. Dit kan pas weer, nadat de aangemaakte nota werkelijk is verzonden. Zorg er daarom voor dat je order juist is.",g.a.createElement("br",null),g.a.createElement("br",null),"De aangemaakte concept nota's komen in de map “Te verzenden - incasso nota's” of “Te verzenden – overboek nota's”. Vanuit deze mappen kun je de nota's definitief maken en verzenden.",g.a.createElement("br",null),g.a.createElement("br",null),'Deze orders gaan van de order map "Actief - te factureren orders" naar de order map “Actief – te verzenden orders”.'))))}}]),t}(b.Component),x=n(684),S=function(e){function t(e){var n;return r()(this,t),n=s()(this,u()(t).call(this,e)),v()(m()(n),"showCreate",(function(){n.setState({showCreate:!n.state.showCreate})})),n.state={showCreate:!1},n}return f()(t,e),i()(t,[{key:"render",value:function(){return g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-4"},g.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},g.a.createElement(D.a,{iconName:"glyphicon-arrow-left",onClickAction:w.e.goBack}),this.props.amountOfOrders>0&&g.a.createElement(x.a,{buttonText:"Maak concept nota's",onClickAction:this.showCreate}))),g.a.createElement("div",{className:"col-md-4"},g.a.createElement("h4",{className:"text-center"},"Concept nota's aanmaken(",this.props.amountOfOrders,")")),g.a.createElement("div",{className:"col-md-4"}),this.state.showCreate&&g.a.createElement(q,{closeModal:this.showCreate,administrationId:this.props.administrationId,amountOfOrders:this.props.amountOfOrders,orderIds:this.props.orderIds}))}}]),t}(b.Component),F=n(801),z=function(e){function t(e){var n;return r()(this,t),n=s()(this,u()(t).call(this,e)),v()(m()(n),"changeOrder",(function(e){n.setState({orderId:e})})),n.state={orders:[],orderId:""},n}return f()(t,e),i()(t,[{key:"componentWillUnmount",value:function(){this.props.clearPreviewCreate()}},{key:"componentDidMount",value:function(){var e=this;_.a.getOrdersForCreating(this.props.orderPreviewCreate).then((function(t){e.setState({orders:t.data})}))}},{key:"render",value:function(){return g.a.createElement("div",null,g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(E.a,null,g.a.createElement(y.a,{className:"panel-small"},g.a.createElement(S,{amountOfOrders:this.state.orders?this.state.orders.length:0,administrationId:this.props.params.id,orderIds:this.props.orderPreviewCreate})))))),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-2"},g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(E.a,null,g.a.createElement(y.a,{className:"panel-orders-list"},g.a.createElement(T,{orders:this.state.orders,changeOrder:this.changeOrder}))))),g.a.createElement("div",{className:"col-md-5"},g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(E.a,null,g.a.createElement(y.a,null,g.a.createElement(j,{orderId:this.state.orderId}))))),g.a.createElement("div",{className:"col-md-5"},g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(E.a,null,g.a.createElement(y.a,null,g.a.createElement(M,{orderId:this.state.orderId})))))))}}]),t}(b.Component);t.default=Object(N.b)((function(e){return{orderPreviewCreate:e.orderPreviewCreate}}),(function(e){return{clearPreviewCreate:function(){e(Object(F.b)())}}}))(z)},682:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),i=n.n(o),l=function(e){var t=e.children,n=e.className,a=e.onMouseEnter,o=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(n),onMouseEnter:a,onMouseLeave:o},t)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:i.a.string,onMouseEnter:i.a.func,onMouseLeave:i.a.func},t.a=l},683:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),i=n.n(o),l=function(e){var t=e.className,n=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},n)};l.defaultProps={className:""},l.propTypes={className:i.a.string},t.a=l},684:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),i=n.n(o),l=function(e){var t=e.buttonClassName,n=e.buttonText,a=e.onClickAction,o=e.type,i=e.value,l=e.loading,s=e.loadText,c=e.disabled;return l?r.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(t),value:i,disabled:l},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",s):r.a.createElement("button",{type:o,className:"btn btn-sm ".concat(t),onClick:a,value:i,disabled:c},n)};l.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},l.propTypes={buttonClassName:i.a.string,buttonText:i.a.string.isRequired,onClickAction:i.a.func,type:i.a.string,value:i.a.string,loading:i.a.bool,loadText:i.a.string,disabled:i.a.bool},t.a=l},685:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),i=n.n(o),l=function(e){var t=e.buttonClassName,n=e.iconName,a=e.onClickAction,o=e.title,i=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:a,disabled:i,title:o},r.a.createElement("span",{className:"glyphicon ".concat(n)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:i.a.string,iconName:i.a.string.isRequired,onClickAction:i.a.func,title:i.a.string,disabled:i.a.bool},t.a=l},727:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),i=n.n(o),l=n(783),s=n.n(l),c=function(e){var t=e.page,n=(e.pages,e.handlePrevClick);return 1===t?r.a.createElement("div",null):r.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginRight:24,marginTop:0},onClick:n},"<")};c.propTypes={page:i.a.number.isRequired,pages:i.a.number.isRequired,handlePrevClick:i.a.func.isRequired};var u=function(e){var t=e.page,n=e.pages,a=e.handleNextClick;return t===n?r.a.createElement("div",null):r.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginLeft:24,marginTop:0},onClick:a},">")};u.propTypes={page:i.a.number.isRequired,pages:i.a.number.isRequired,handleNextClick:i.a.func.isRequired};var d=function(e){var t=e.page,n=e.pages;return r.a.createElement("h3",{style:{display:"inline-block",marginTop:0}},"Pagina ",t," van ",n)};d.propTypes={page:i.a.number.isRequired,pages:i.a.number.isRequired};var m=function(e){var t=e.page,n=e.pages,a=e.handlePrevClick,o=e.handleNextClick;return r.a.createElement("div",{className:"customWrapper"},r.a.createElement(c,{page:t,pages:n,handlePrevClick:a}),r.a.createElement(d,{page:t,pages:n}),r.a.createElement(u,{page:t,pages:n,handleNextClick:o}))};m.propTypes={page:i.a.number.isRequired,pages:i.a.number.isRequired,handlePrevClick:i.a.func.isRequired,handleNextClick:i.a.func.isRequired};var p=m;s.a.defaultProps={file:"",scale:1},s.a.propTypes={file:i.a.string,scale:i.a.number};t.a=function(e){var t=e.file,n=e.scale;return r.a.createElement("div",{className:"panel-heading"},r.a.createElement(s.a,{document:{file:t},navigation:p,scale:n}))}},728:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(736),i=n.n(o),l=n(14),s=n.n(l),c=n(682),u=n(684),d=function(e){var t=e.label,n=e.className,a=e.id,o=e.value,l=e.switchToEdit;return r.a.createElement("div",{className:n},r.a.createElement("label",{htmlFor:a,className:"col-sm-3"},t,l?r.a.createElement("span",null,r.a.createElement("br",null),r.a.createElement(u.a,{buttonClassName:"btn-success btn-padding-small",buttonText:"Wijzig",onClickAction:l})):""),r.a.createElement(c.a,{className:"col-sm-9"},r.a.createElement(i.a,null,r.a.createElement("div",{id:a,dangerouslySetInnerHTML:{__html:o}}))))};d.defaultProps={className:"col-sm-12",value:""},d.propTypes={label:s.a.string.isRequired,className:s.a.string,id:s.a.string,value:s.a.oneOfType([s.a.string,s.a.number])},t.a=d},736:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(737),o=(a=r)&&a.__esModule?a:{default:a};t.default=o.default},737:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=u(o),l=u(n(79)),s=u(n(14)),c=u(n(738));function u(e){return e&&e.__esModule?e:{default:e}}var d,m="undefined"!=typeof window&&window.console,p=function(){},f=p,h=p;m&&(d=console.error,f=function(){console.error=function(e){/<head>/.test(e)||d.call(console,e)}},h=function(){return console.error=d});var v=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a._isMounted=!1,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.renderFrameContents()}},{key:"componentDidUpdate",value:function(){this.renderFrameContents()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1;var e=this.getDoc(),t=this.getMountTarget();e&&t&&l.default.unmountComponentAtNode(t)}},{key:"getDoc",value:function(){return l.default.findDOMNode(this).contentDocument}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(this._isMounted){var e=this.getDoc();if(e&&"complete"===e.readyState){null===e.querySelector("div")&&(this._setInitialContent=!1);var t=e.defaultView||e.parentView,n=!this._setInitialContent,a=i.default.createElement(c.default,{document:e,window:t},i.default.createElement("div",{className:"frame-content"},this.props.head,this.props.children));n&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close(),this._setInitialContent=!0),f();var r=n?this.props.contentDidMount:this.props.contentDidUpdate,o=this.getMountTarget();l.default.unstable_renderSubtreeIntoContainer(this,a,o,r),h()}else setTimeout(this.renderFrameContents.bind(this),0)}}},{key:"render",value:function(){var e=a({},this.props,{children:void 0});return delete e.head,delete e.initialContent,delete e.mountTarget,delete e.contentDidMount,delete e.contentDidUpdate,i.default.createElement("iframe",e)}}]),t}(o.Component);v.propTypes={style:s.default.object,head:s.default.node,initialContent:s.default.string,mountTarget:s.default.string,contentDidMount:s.default.func,contentDidUpdate:s.default.func,children:s.default.oneOfType([s.default.element,s.default.arrayOf(s.default.element)])},v.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=v},738:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=(i(r),i(n(14)));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getChildContext",value:function(){return{document:this.props.document,window:this.props.window}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);c.propTypes={document:o.default.object.isRequired,window:o.default.object.isRequired,children:o.default.element.isRequired},c.childContextTypes={document:o.default.object.isRequired,window:o.default.object.isRequired},t.default=c},784:function(e,t){},785:function(e,t){},786:function(e,t){},787:function(e,t){},801:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return l}));var a=function(e,t,n,a){return{type:"FETCH_ORDERS",filters:e,sorts:t,pagination:n,administrationId:a}},r=function(){return{type:"CLEAR_ORDERS"}},o=function(e){return{type:"DELETE_ORDER",id:e}},i=function(e){return{type:"ORDER_PREVIEW_CREATE",data:e}},l=function(){return{type:"CLEAR_ORDER_PREVIEW_CREATE"}}}}]);