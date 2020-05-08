(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1593:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n.n(a),i=n(24),o=n.n(i),s=n(26),l=n.n(s),c=n(27),u=n.n(c),d=n(21),p=n.n(d),m=n(28),f=n.n(m),v=n(6),h=n.n(v),b=n(0),E=n.n(b),g=n(4),y=n(682),N=n(683),C=(n(197),n(9)),T=n.n(C),R=function(e){function t(e){return r()(this,t),l()(this,u()(t).call(this,e))}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this;return E.a.createElement("nav",{className:"payment-invoices-list open sticky"},E.a.createElement("div",{className:"send-payment-invoices-sidebar-menu",style:{color:"$brand-primary"}},E.a.createElement(T.a,{highlightColor:"$brand-primary",highlightBgColor:"#e5e5e5",hoverBgColor:"#F1EFF0",defaultSelected:"order"},this.props.distributions.length>0?this.props.distributions.map((function(t,n){return E.a.createElement(C.Nav,{onNavClick:function(){return e.props.changeDistribution(t.id)},key:n,id:"administration-".concat(t.id)},E.a.createElement(C.NavText,null,E.a.createElement(g.b,{className:"send-payment-invoices-list-link"},t.id," - ",t.contactName)))})):E.a.createElement(C.Nav,{id:"order"},E.a.createElement(C.NavText,null,E.a.createElement(g.b,{className:"send-payment-invoices-list-link"},"Geen opbrengstverdeling beschikbaar."))))))}}]),t}(b.Component),w=n(202),_=n(726),P=n(91),k=function(e){function t(e){var n;return r()(this,t),(n=l()(this,u()(t).call(this,e))).state={file:null},n}return f()(t,e),o()(t,[{key:"componentWillReceiveProps",value:function(e){this.props.distributionId!==e.distributionId&&e.distributionId&&this.downloadFile(e.distributionId)}},{key:"downloadFile",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;P.a.downloadPreview(e,this.props.subject,this.props.documentTemplateId,this.props.emailTemplateId).then((function(e){t.setState({file:e.data})})).catch((function(){n<2&&setTimeout((function(){t.downloadFile(e,n)}),500),n++}))}},{key:"render",value:function(){return this.state.file?E.a.createElement("div",null,E.a.createElement(_.a,{file:this.state.file})):E.a.createElement("div",null,"Geen gegevens gevonden.")}}]),t}(b.Component),O=n(728),I=function(e){function t(e){var n;return r()(this,t),(n=l()(this,u()(t).call(this,e))).state={email:null},n}return f()(t,e),o()(t,[{key:"componentWillReceiveProps",value:function(e){this.props.distributionId!==e.distributionId&&e.distributionId&&this.downloadEmail(e.distributionId)}},{key:"downloadEmail",value:function(e){var t=this;P.a.previewEmail(e,this.props.subject,this.props.documentTemplateId,this.props.emailTemplateId).then((function(e){t.setState({email:e.data})}))}},{key:"render",value:function(){return this.state.email?E.a.createElement("div",null,E.a.createElement("div",{className:"row margin-10-top"},E.a.createElement("div",{className:"col-sm-12"},E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-sm-3"},E.a.createElement("label",{className:"col-sm-12"},"Aan")),E.a.createElement("div",{className:"col-sm-9"},this.state.email.to)))),E.a.createElement("div",{className:"row margin-10-top"},E.a.createElement("div",{className:"col-sm-12"},E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-sm-3"},E.a.createElement("label",{className:"col-sm-12"},"Onderwerp")),E.a.createElement("div",{className:"col-sm-9"},this.state.email.subject)))),E.a.createElement("div",{className:"row"},E.a.createElement(O.a,{label:"Tekst",value:this.state.email.htmlBody}))):E.a.createElement("div",null,"Geen gegevens gevonden.")}}]),t}(b.Component),j=n(685),M=n(684),D=function(e){var t=e.amountOfDistributions,n=e.createRevenueReport;return E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-4"},E.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},E.a.createElement(j.a,{iconName:"glyphicon-arrow-left",onClickAction:g.e.goBack}),t>0&&E.a.createElement(M.a,{buttonText:"Rapportage versturen",onClickAction:function(){return n()}}))),E.a.createElement("div",{className:"col-md-4"},E.a.createElement("h4",{className:"text-center"},"Rapportage aanmaken(",t,")")),E.a.createElement("div",{className:"col-md-4"}))},A=n(33),x=n(720),q=n(98),S=function(e){function t(e){var n;return r()(this,t),n=l()(this,u()(t).call(this,e)),h()(p()(n),"changeDistribution",(function(e){n.setState({distributionId:e})})),h()(p()(n),"createRevenueReport",(function(){document.body.style.cursor="wait",n.setState({isBusy:!0}),P.a.createRevenueReport(n.props.reportPreview.templateId,n.props.reportPreview.emailTemplateId,n.props.reportPreview.subject,n.props.reportPreview.distributionIds).then((function(e){document.body.style.cursor="default",e.data?n.setState({errorMessage:"Fouten bij verzenden rapporten",isBusy:!1}):n.setState({successMessage:"De rapporten zijn aangeboden voor verzenden.",isBusy:!1})}))})),h()(p()(n),"redirect",(function(){n.state.redirect?g.f.push(n.state.redirect):g.e.goBack()})),n.state={distributions:[],distribution:{},successMessage:"",errorMessage:"",redirect:"",isBusy:!1},n}return f()(t,e),o()(t,[{key:"componentDidMount",value:function(){var e=this;P.a.fetchProjectRevenue(this.props.params.id).then((function(t){e.setState({distribution:t})})),w.a.peekDistributionsById(this.props.reportPreview.distributionIds).then((function(t){e.setState({distributions:t.data})}))}},{key:"componentWillUnmount",value:function(){this.props.clearPreviewReport()}},{key:"render",value:function(){var e="",t=!0;return this.state.isBusy?e="Bezig met versturen rapportage. Dit kan enige tijd duren.":t=!1,t?E.a.createElement("div",null,e):E.a.createElement("div",null,E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-12 margin-10-top"},E.a.createElement("div",{className:"col-md-12 margin-10-top"},E.a.createElement(y.a,null,E.a.createElement(N.a,{className:"panel-small"},E.a.createElement(D,{createRevenueReport:this.createRevenueReport,amountOfDistributions:this.state.distributions?this.state.distributions.length:0,distributionTypeId:this.state.distribution&&this.state.distribution.distributionTypeId,distributionCategoryCodeRef:this.state.distribution&&this.state.distribution.category&&this.state.distribution.category.codeRef})))))),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-2"},E.a.createElement("div",{className:"col-md-12 margin-10-top"},E.a.createElement(y.a,null,E.a.createElement(N.a,{className:"panel-invoice-payments-list"},E.a.createElement(R,{distributions:this.state.distributions,changeDistribution:this.changeDistribution}))))),E.a.createElement("div",{className:"col-md-5"},E.a.createElement("div",{className:"col-md-12 margin-10-top"},E.a.createElement(y.a,null,E.a.createElement(N.a,null,E.a.createElement(k,{subject:this.props.reportPreview.subject,documentTemplateId:this.props.reportPreview.templateId,emailTemplateId:this.props.reportPreview.emailTemplateId,distributionId:this.state.distributionId}))))),E.a.createElement("div",{className:"col-md-5"},E.a.createElement("div",{className:"col-md-12 margin-10-top"},E.a.createElement(y.a,null,E.a.createElement(N.a,null,E.a.createElement(I,{subject:this.props.reportPreview.subject,documentTemplateId:this.props.reportPreview.templateId,emailTemplateId:this.props.reportPreview.emailTemplateId,distributionId:this.state.distributionId})))))),this.state.successMessage&&E.a.createElement(q.a,{closeModal:this.redirect,buttonCancelText:"Ok",showConfirmAction:!1,title:"Succes"},this.state.successMessage),this.state.errorMessage&&E.a.createElement(q.a,{closeModal:this.redirect,buttonCancelText:"Ok",showConfirmAction:!1,title:"Waarschuwing"},E.a.createElement("h4",null,this.state.errorMessage)))}}]),t}(b.Component);t.default=Object(A.b)((function(e){return{reportPreview:e.projectRevenueReportPreview}}),(function(e){return{clearPreviewReport:function(){e(Object(x.b)())}}}))(S)},682:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(14),o=n.n(i),s=function(e){var t=e.children,n=e.className,a=e.onMouseEnter,i=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(n),onMouseEnter:a,onMouseLeave:i},t)};s.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},s.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},t.a=s},683:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(14),o=n.n(i),s=function(e){var t=e.className,n=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},n)};s.defaultProps={className:""},s.propTypes={className:o.a.string},t.a=s},684:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(14),o=n.n(i),s=function(e){var t=e.buttonClassName,n=e.buttonText,a=e.onClickAction,i=e.type,o=e.value,s=e.loading,l=e.loadText,c=e.disabled;return s?r.a.createElement("button",{type:i,className:"btn btn-sm btn-loading ".concat(t),value:o,disabled:s},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",l):r.a.createElement("button",{type:i,className:"btn btn-sm ".concat(t),onClick:a,value:o,disabled:c},n)};s.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},s.propTypes={buttonClassName:o.a.string,buttonText:o.a.string.isRequired,onClickAction:o.a.func,type:o.a.string,value:o.a.string,loading:o.a.bool,loadText:o.a.string,disabled:o.a.bool},t.a=s},685:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(14),o=n.n(i),s=function(e){var t=e.buttonClassName,n=e.iconName,a=e.onClickAction,i=e.title,o=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:a,disabled:o,title:i},r.a.createElement("span",{className:"glyphicon ".concat(n)}))};s.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},s.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},t.a=s},720:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"k",(function(){return o})),n.d(t,"n",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"i",(function(){return c})),n.d(t,"m",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"l",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return v})),n.d(t,"f",(function(){return h}));var a=function(e){return{type:"FETCH_PROJECT",id:e}},r=function(e){return{type:"DELETE_PROJECT",id:e}},i=function(){return{type:"CLEAR_PROJECT"}},o=function(e){return{type:"NEW_VALUE_COURSE",valueCourse:e}},s=function(e){return{type:"UPDATE_VALUE_COURSE",valueCourse:e}},l=function(e){return{type:"DELETE_VALUE_COURSE",id:e}},c=function(e){return{type:"FETCH_PROJECT_REVENUE",id:e}},u=function(e){return{type:"PROJECT_REVENUE_PREVIEW_REPORT",data:e}},d=function(e){return{type:"PROJECT_REVENUE_GET_DISTRIBUTION",data:e}},p=function(){return{type:"CLEAR_PROJECT_REVENUE_PREVIEW_REPORT"}},m=function(e){return{type:"PROJECT_PARTICIPANT_PREVIEW_REPORT",data:e}},f=function(){return{type:"CLEAR_PROJECT_PARTICIPANT_PREVIEW_REPORT"}},v=function(){return{type:"CLEAR_PROJECT_REVENUE"}},h=function(e){return{type:"DELETE_REVENUE",id:e}}},726:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(14),o=n.n(i),s=n(778),l=n.n(s),c=function(e){var t=e.page,n=(e.pages,e.handlePrevClick);return 1===t?r.a.createElement("div",null):r.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginRight:24,marginTop:0},onClick:n},"<")};c.propTypes={page:o.a.number.isRequired,pages:o.a.number.isRequired,handlePrevClick:o.a.func.isRequired};var u=function(e){var t=e.page,n=e.pages,a=e.handleNextClick;return t===n?r.a.createElement("div",null):r.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginLeft:24,marginTop:0},onClick:a},">")};u.propTypes={page:o.a.number.isRequired,pages:o.a.number.isRequired,handleNextClick:o.a.func.isRequired};var d=function(e){var t=e.page,n=e.pages;return r.a.createElement("h3",{style:{display:"inline-block",marginTop:0}},"Pagina ",t," van ",n)};d.propTypes={page:o.a.number.isRequired,pages:o.a.number.isRequired};var p=function(e){var t=e.page,n=e.pages,a=e.handlePrevClick,i=e.handleNextClick;return r.a.createElement("div",{className:"customWrapper"},r.a.createElement(c,{page:t,pages:n,handlePrevClick:a}),r.a.createElement(d,{page:t,pages:n}),r.a.createElement(u,{page:t,pages:n,handleNextClick:i}))};p.propTypes={page:o.a.number.isRequired,pages:o.a.number.isRequired,handlePrevClick:o.a.func.isRequired,handleNextClick:o.a.func.isRequired};var m=p;l.a.defaultProps={file:"",scale:1},l.a.propTypes={file:o.a.string,scale:o.a.number};t.a=function(e){var t=e.file,n=e.scale;return r.a.createElement("div",{className:"panel-heading"},r.a.createElement(l.a,{document:{file:t},navigation:m,scale:n}))}},728:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(736),o=n.n(i),s=n(14),l=n.n(s),c=n(682),u=n(684),d=function(e){var t=e.label,n=e.className,a=e.id,i=e.value,s=e.switchToEdit;return r.a.createElement("div",{className:n},r.a.createElement("label",{htmlFor:a,className:"col-sm-3"},t,s?r.a.createElement("span",null,r.a.createElement("br",null),r.a.createElement(u.a,{buttonClassName:"btn-success btn-padding-small",buttonText:"Wijzig",onClickAction:s})):""),r.a.createElement(c.a,{className:"col-sm-9"},r.a.createElement(o.a,null,r.a.createElement("div",{id:a,dangerouslySetInnerHTML:{__html:i}}))))};d.defaultProps={className:"col-sm-12",value:""},d.propTypes={label:l.a.string.isRequired,className:l.a.string,id:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number])},t.a=d},736:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(737),i=(a=r)&&a.__esModule?a:{default:a};t.default=i.default},737:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),o=u(i),s=u(n(79)),l=u(n(14)),c=u(n(738));function u(e){return e&&e.__esModule?e:{default:e}}var d,p="undefined"!=typeof window&&window.console,m=function(){},f=m,v=m;p&&(d=console.error,f=function(){console.error=function(e){/<head>/.test(e)||d.call(console,e)}},v=function(){return console.error=d});var h=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a._isMounted=!1,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.renderFrameContents()}},{key:"componentDidUpdate",value:function(){this.renderFrameContents()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1;var e=this.getDoc(),t=this.getMountTarget();e&&t&&s.default.unmountComponentAtNode(t)}},{key:"getDoc",value:function(){return s.default.findDOMNode(this).contentDocument}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(this._isMounted){var e=this.getDoc();if(e&&"complete"===e.readyState){null===e.querySelector("div")&&(this._setInitialContent=!1);var t=e.defaultView||e.parentView,n=!this._setInitialContent,a=o.default.createElement(c.default,{document:e,window:t},o.default.createElement("div",{className:"frame-content"},this.props.head,this.props.children));n&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close(),this._setInitialContent=!0),f();var r=n?this.props.contentDidMount:this.props.contentDidUpdate,i=this.getMountTarget();s.default.unstable_renderSubtreeIntoContainer(this,a,i,r),v()}else setTimeout(this.renderFrameContents.bind(this),0)}}},{key:"render",value:function(){var e=a({},this.props,{children:void 0});return delete e.head,delete e.initialContent,delete e.mountTarget,delete e.contentDidMount,delete e.contentDidUpdate,o.default.createElement("iframe",e)}}]),t}(i.Component);h.propTypes={style:l.default.object,head:l.default.node,initialContent:l.default.string,mountTarget:l.default.string,contentDidMount:l.default.func,contentDidUpdate:l.default.func,children:l.default.oneOfType([l.default.element,l.default.arrayOf(l.default.element)])},h.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=h},738:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(o(r),o(n(14)));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getChildContext",value:function(){return{document:this.props.document,window:this.props.window}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);c.propTypes={document:i.default.object.isRequired,window:i.default.object.isRequired,children:i.default.element.isRequired},c.childContextTypes={document:i.default.object.isRequired,window:i.default.object.isRequired},t.default=c},782:function(e,t){},783:function(e,t){},784:function(e,t){},785:function(e,t){}}]);