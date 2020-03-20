(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1605:function(e,t,a){"use strict";a.r(t);var n=a(25),l=a.n(n),r=a(24),i=a.n(r),o=a(26),s=a.n(o),c=a(27),u=a.n(c),d=a(21),m=a.n(d),p=a(28),f=a.n(p),g=a(0),h=a.n(g),v=a(33),b=a(4),P=a(685),C=Object(v.b)((function(e){return{permissions:e.meDetails.permissions,projects:e.projects.list}}))((function(e){var t=e.permissions,a=void 0===t?{}:t,n=e.projects.meta,l=void 0===n?{}:n;return h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-4"},h.a.createElement("div",{className:"btn-group",role:"group"},h.a.createElement(P.a,{iconName:"glyphicon-arrow-left",onClickAction:b.e.goBack}),a.manageProject&&h.a.createElement(P.a,{iconName:"glyphicon-plus",onClickAction:function(){b.f.push("project/nieuw")}}))),h.a.createElement("div",{className:"col-md-4"},h.a.createElement("h3",{className:"text-center table-title"},"Projecten")),h.a.createElement("div",{className:"col-md-4"},h.a.createElement("div",{className:"pull-right"},"Resultaten: ",l.total||0)))})),E=a(197),N=a.n(E),y=a(6),k=a.n(y),j=a(144),w=a(145),D=a(199),O=a(99),L=a(709),x=function(e){function t(e){var a;return l()(this,t),(a=s()(this,u()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},a}return f()(t,e),i()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){b.f.push("project/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.code,l=t.name,r=t.projectType,i=t.projectTypeCodeRef,o=t.totalParticipations,s=t.participationsDefinitive,c=t.amountOfLoanNeeded,u=t.amountDefinitive,d=o-s,m=c-u,p=0;return"loan"===i?c&&u&&(p=u/c*100):o&&s&&(p=s/o*100),h.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(a)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},h.a.createElement("td",null,n),h.a.createElement("td",null,l),h.a.createElement("td",null,r),h.a.createElement("td",null,"loan"!==i?o:"-"),h.a.createElement("td",null,"loan"!==i?s:"-"),h.a.createElement("td",null,"loan"!==i?d:"-"),h.a.createElement("td",null,"loan"===i?Object(L.a)(c):"-"),h.a.createElement("td",null,"loan"===i?Object(L.a)(u):"-"),h.a.createElement("td",null,"loan"===i?Object(L.a)(m):"-"),h.a.createElement("td",null,"".concat(p.toLocaleString("nl",{maximumFractionDigits:2}),"%")),h.a.createElement("td",null,this.state.showActionButtons?h.a.createElement("a",{role:"button",onClick:function(){return e.openItem(a)}},h.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):"",(this.state.showActionButtons&&this.props.permissions.manageProject,"")))}}]),t}(g.Component),I=Object(v.b)((function(e){return{permissions:e.meDetails.permissions}}))(x),R=a(98),_=a(151),M=function(e){return h.a.createElement(R.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return _.a.deleteProject(e.id).then((function(){e.fetchProjectsData()})),void e.closeDeleteItemModal()},title:"Verwijderen"},"Verwijder project ",h.a.createElement("strong",null,e.code),"?")},A=a(707);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){k()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B=function(e){function t(e){var a;return l()(this,t),a=s()(this,u()(t).call(this,e)),k()(m()(a),"showDeleteItemModal",(function(e,t){a.setState(T({},a.state,{showDeleteItem:!0,deleteItem:T({},a.state.deleteItem,{id:e,name:t})}))})),k()(m()(a),"closeDeleteItemModal",(function(){a.setState(T({},a.state,{showDeleteItem:!1,deleteItem:T({},a.state.deleteItem,{id:"",name:""})}))})),a.state={showDeleteItem:!1,deleteItem:{id:"",name:""}},a}return f()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=this.props.projects,a=t.data,n=void 0===a?[]:a,l=t.meta,r=void 0===l?{}:l,i="",o=!0;return this.props.hasError?i="Fout bij het ophalen van projecten.":this.props.isLoading?i="Gegevens aan het laden.":0===n.length?i="Geen projecten gevonden!":o=!1,h.a.createElement("div",null,h.a.createElement(j.a,null,h.a.createElement(w.a,null,h.a.createElement("tr",{className:"thead-title-quaternary"},h.a.createElement(O.a,{title:"Projectcode",width:"10%"}),h.a.createElement(O.a,{title:"Project",width:"18%"}),h.a.createElement(O.a,{title:"Type project",width:"10%"}),h.a.createElement(O.a,{title:"# deelnames nodig",width:"8%"}),h.a.createElement(O.a,{title:"Uitgegeven deelnames",width:"8%"}),h.a.createElement(O.a,{title:"Uit te geven deelnames",width:"8%"}),h.a.createElement(O.a,{title:"Lening nodig",width:"8%"}),h.a.createElement(O.a,{title:"Lening opgehaald",width:"8%"}),h.a.createElement(O.a,{title:"Lening uit te geven",width:"8%"}),h.a.createElement(O.a,{title:"Percentage uitgegeven",width:"8%"}),h.a.createElement(O.a,{title:"",width:"6%"}))),h.a.createElement(D.a,null,o?h.a.createElement("tr",null,h.a.createElement("td",{colSpan:11},i)):n.map((function(t){return h.a.createElement(I,N()({key:t.id},t,{showDeleteItemModal:e.showDeleteItemModal}))})))),h.a.createElement("div",{className:"col-md-6 col-md-offset-3"},h.a.createElement(A.a,{onPageChangeAction:this.props.handlePageClick,totalRecords:r.total,initialPage:this.props.projectsPagination.page})),this.state.showDeleteItem&&h.a.createElement(M,N()({closeDeleteItemModal:this.closeDeleteItemModal,fetchProjectsData:this.props.fetchProjectsData},this.state.deleteItem)))}}]),t}(g.Component),q=Object(v.b)((function(e){return{projects:e.projects.list,projectsPagination:e.projects.pagination,isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}),null)(B),F=function(e){function t(e){var a;return l()(this,t),(a=s()(this,u()(t).call(this,e))).fetchProjectsData=a.fetchProjectsData.bind(m()(a)),a.handlePageClick=a.handlePageClick.bind(m()(a)),a}return f()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.fetchProjectsData()}},{key:"componentWillUnmount",value:function(){this.props.clearProjects()}},{key:"fetchProjectsData",value:function(){var e=this;setTimeout((function(){var t={limit:20,offset:e.props.projectsPagination.offset};e.props.fetchProjects(t)}),100)}},{key:"handlePageClick",value:function(e){var t=e.selected,a=Math.ceil(20*t);this.props.setProjectsPagination({page:t,offset:a}),this.fetchProjectsData()}},{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement("div",{className:"panel panel-default col-md-12"},h.a.createElement("div",{className:"panel-body"},h.a.createElement("div",{className:"col-md-12 margin-10-top"},h.a.createElement(C,null)),h.a.createElement("div",{className:"col-md-12 margin-10-top"},h.a.createElement(q,{handlePageClick:this.handlePageClick,fetchProjectsData:this.fetchProjectsData})))))}}]),t}(g.Component);t.default=Object(v.b)((function(e){return{projectsPagination:e.projects.pagination}}),(function(e){return{fetchProjects:function(t){e(function(e){return{type:"FETCH_PROJECTS",pagination:e}}(t))},clearProjects:function(){e({type:"CLEAR_PROJECTS"})},setProjectsPagination:function(t){e(function(e){return{type:"SET_PROJECTS_PAGINATION",pagination:e}}(t))}}}))(F)},685:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(14),i=a.n(r),o=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,r=e.title,i=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:i,title:r},l.a.createElement("span",{className:"glyphicon ".concat(a)}))};o.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},o.propTypes={buttonClassName:i.a.string,iconName:i.a.string.isRequired,onClickAction:i.a.func,title:i.a.string,disabled:i.a.bool},t.a=o},707:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(14),i=a.n(r),o=a(711),s=a.n(o),c=function(e){var t=e.onPageChangeAction,a=e.initialPage,n=e.recordsPerPage,r=e.totalRecords;return l.a.createElement(s.a,{onPageChange:t,pageCount:Math.ceil(r/n)||1,pageRangeDisplayed:5,marginPagesDisplayed:2,breakLabel:l.a.createElement("a",null,"..."),breakClassName:"break-me",containerClassName:"pagination",activeClassName:"active",previousLabel:l.a.createElement("span",{"aria-hidden":"true"},"«"),nextLabel:l.a.createElement("span",{"aria-hidden":"true"},"»"),initialPage:a||0,forcePage:a,disableInitialCallback:!0})};c.defaultProps={recordsPerPage:20},c.propTypes={initialPage:i.a.number.isRequired,recordsPerPage:i.a.number,totalRecords:i.a.number,onPageChangeAction:i.a.func.isRequired},t.a=c},709:function(e,t,a){"use strict";t.a=function(e){return e||(e=0),e=parseFloat(e),isNaN(e)?"Ongeldig bedrag":"€ ".concat(e.toLocaleString("nl",{minimumFractionDigits:2,maximumFractionDigits:2}))}},711:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(712),r=(n=l)&&n.__esModule?n:{default:n};t.default=r.default},712:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),r=c(l),i=c(a(14)),o=c(a(713)),s=c(a(714));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handlePreviousPage=function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)},a.handleNextPage=function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)},a.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))},a.callCallback=function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})},a.pagination=function(){var e=[],t=a.props,n=t.pageRangeDisplayed,l=t.pageCount,i=t.marginPagesDisplayed,o=t.breakLabel,c=t.breakClassName,u=a.state.selected;if(l<=n)for(var d=0;d<l;d++)e.push(a.getPageElement(d));else{var m=n/2,p=n-m;u>l-n/2?m=n-(p=l-u):u<n/2&&(p=n-(m=u));var f=void 0,g=void 0,h=void 0,v=function(e){return a.getPageElement(e)};for(f=0;f<l;f++)(g=f+1)<=i||g>l-i||f>=u-m&&f<=u+p?e.push(v(f)):o&&e[e.length-1]!==h&&(h=r.default.createElement(s.default,{key:f,breakLabel:o,breakClassName:c}),e.push(h))}return e},a.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback;void 0===t||a||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,l=a.pageLinkClassName,i=a.activeClassName,s=a.activeLinkClassName,c=a.extraAriaContext;return r.default.createElement(o.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:l,activeClassName:i,activeLinkClassName:s,extraAriaContext:c,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.previousClassName,n=e.nextClassName,l=e.pageCount,i=e.containerClassName,o=e.previousLinkClassName,s=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,d=this.state.selected,m=a+(0===d?" "+t:""),p=n+(d===l-1?" "+t:"");return r.default.createElement("ul",{className:i},r.default.createElement("li",{className:m},r.default.createElement("a",{onClick:this.handlePreviousPage,className:o,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},s)),this.pagination(),r.default.createElement("li",{className:p},r.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},u)))}}]),t}(l.Component);u.propTypes={pageCount:i.default.number.isRequired,pageRangeDisplayed:i.default.number.isRequired,marginPagesDisplayed:i.default.number.isRequired,previousLabel:i.default.node,nextLabel:i.default.node,breakLabel:i.default.node,hrefBuilder:i.default.func,onPageChange:i.default.func,initialPage:i.default.number,forcePage:i.default.number,disableInitialCallback:i.default.bool,containerClassName:i.default.string,pageClassName:i.default.string,pageLinkClassName:i.default.string,activeClassName:i.default.string,activeLinkClassName:i.default.string,previousClassName:i.default.string,nextClassName:i.default.string,previousLinkClassName:i.default.string,nextLinkClassName:i.default.string,disabledClassName:i.default.string,breakClassName:i.default.string},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=u},713:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),r=(n=l)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.onClick,l=e.href,i="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),o=null;return e.selected&&(o="page",i="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName,void 0!==a?(a=a,void 0!==e.activeLinkClassName&&(a=a+" "+e.activeLinkClassName)):a=e.activeLinkClassName),r.default.createElement("li",{className:t},r.default.createElement("a",{onClick:n,role:"button",className:a,href:l,tabIndex:"0","aria-label":i,"aria-current":o,onKeyPress:n},e.page))}},714:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),r=(n=l)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.breakLabel,a=e.breakClassName||"break";return r.default.createElement("li",{className:a},t)}}}]);