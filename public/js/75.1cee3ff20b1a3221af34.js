(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1585:function(e,t,a){"use strict";a.r(t);var n=a(25),i=a.n(n),l=a(24),s=a.n(l),r=a(26),o=a.n(r),u=a(27),c=a.n(u),d=a(21),f=a.n(d),m=a(28),p=a.n(m),g=a(6),h=a.n(g),v=a(0),b=a.n(v),E=a(33),N=a(15),C=function(e,t,a){return{type:"FETCH_HOUSING_FILES",filters:e,sorts:t,pagination:a}},y=function(){return{type:"CLEAR_HOUSING_FILES"}},F=function(e){return{type:"SET_FILTER_HOUSING_FILE_DATE",createdAt:e}},P=function(e){return{type:"SET_FILTER_HOUSING_FILE_ADDRESS",address:e}},k=function(e){return{type:"SET_FILTER_HOUSING_FILE_FULL_NAME",fullName:e}},L=function(e){return{type:"SET_FILTER_HOUSING_FILE_BUILDING_TYPE",buildingTypeId:e}},_=function(e){return{type:"SET_FILTER_HOUSING_FILE_ENERGY_LABEL",energyLabelId:e}},S=function(){return{type:"CLEAR_FILTER_HOUSING_FILES"}},D=function(e){return{type:"SET_HOUSING_FILES_PAGINATION",pagination:e}},w=a(197),T=a.n(w),I=a(144),H=a(145),R=a(199),A=a(716),O=Object(E.b)(null,(function(e){return{setHousingFilesSortsFilter:function(t,a){e(function(e,t){return{type:"SET_HOUSING_FILES_SORTS_FILTER",field:e,order:t}}(t,a))}}}))((function(e){var t=function(t,a){e.setHousingFilesSortsFilter(t,a),setTimeout((function(){e.refreshHousingFilesData()}),100)};return b.a.createElement("tr",{className:"thead-title"},b.a.createElement(A.a,{sortColumn:"createdAt",title:"Datum",width:"20%",setSorts:t}),b.a.createElement(A.a,{sortColumn:"address",title:"Adres",width:"20%",setSorts:t}),b.a.createElement(A.a,{sortColumn:"fullName",title:"Contact",width:"10%",setSorts:t}),b.a.createElement(A.a,{sortColumn:"buildingType",title:"Type woning",width:"30%",setSorts:t}),b.a.createElement(A.a,{sortColumn:"energyLabel",title:"Energielabel",width:"15%",setSorts:t}),b.a.createElement("th",{width:"5%"}))})),x=a(8),M=a.n(x),j=a(720),U=Object(E.b)((function(e){return{filters:e.housingFiles.filters,energyLabels:e.systemData.energyLabels,buildingTypes:e.systemData.buildingTypes}}),(function(e){return Object(N.b)({setFilterBuildingType:L,clearFilterHousingFiles:S,setFilterFullName:k,setFilterHousingFileAddress:P,setFilterHousingFileEnergyLabel:_,setHousingFileDateFilter:F},e)}))((function(e){return b.a.createElement("tr",{className:"thead-filter"},b.a.createElement(j.a,{value:e.filters.createdAt.data&&e.filters.createdAt.data,onChangeAction:function(t){void 0===t?e.setHousingFileDateFilter(""):e.setHousingFileDateFilter(M()(t).format("Y-MM-DD"))}}),b.a.createElement("th",null,b.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.address.data,onChange:function(t){e.setFilterHousingFileAddress(t.target.value),setTimeout((function(){e.onSubmitFilter()}),100)}})),b.a.createElement("th",null,b.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.fullName.data,onChange:function(t){e.setFilterFullName(t.target.value)}})),b.a.createElement("th",null,b.a.createElement("select",{className:"form-control input-sm",value:e.filters.buildingTypeId.data,onChange:function(t){e.setFilterBuildingType(t.target.value),setTimeout((function(){e.onSubmitFilter()}),100)}},b.a.createElement("option",null),e.buildingTypes.map((function(e){return b.a.createElement("option",{key:e.id,value:e.id},e.name)})))),b.a.createElement("th",null,b.a.createElement("select",{className:"form-control input-sm",value:e.filters.energyLabelId.data,onChange:function(t){e.setFilterHousingFileEnergyLabel(t.target.value),setTimeout((function(){e.onSubmitFilter()}),100)}},b.a.createElement("option",null),e.energyLabels.map((function(e){return b.a.createElement("option",{key:e.id,value:e.id},e.name)})))),b.a.createElement("th",null))})),G=a(4),B=function(e){function t(e){var a;return i()(this,t),(a=o()(this,c()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},a}return p()(t,e),s()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){G.f.push("/woningdossier/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.fullName,i=t.createdAt,l=t.fullAddress,s=t.buildingType,r=t.energyLabel;return b.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(a)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},b.a.createElement("td",null,M()(i).format("DD-MM-Y")),b.a.createElement("td",null,l),b.a.createElement("td",null,n),b.a.createElement("td",null,s||""),b.a.createElement("td",null,r||""),b.a.createElement("td",null,this.state.showActionButtons?b.a.createElement("a",{role:"button",onClick:function(){return e.openItem(a)}},b.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):""))}}]),t}(v.Component),q=a(707),K=function(e){function t(e){var a;return i()(this,t),a=o()(this,c()(t).call(this,e)),h()(f()(a),"handleKeyUp",(function(e){13===e.keyCode&&a.props.onSubmitFilter()})),a}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this,t=this.props.housingFiles,a=t.data,n=void 0===a?[]:a,i=t.meta,l=void 0===i?{}:i,s="",r=!0;return this.props.hasError?s="Fout bij het ophalen van woningdossiers.":this.props.isLoading?s="Gegevens aan het laden.":0===n.length?s="Geen woningdossiers gevonden!":r=!1,b.a.createElement("form",{onKeyUp:this.handleKeyUp},b.a.createElement(I.a,null,b.a.createElement(H.a,null,b.a.createElement(O,{refreshHousingFilesData:function(){return e.props.refreshHousingFilesData()}}),b.a.createElement(U,{onSubmitFilter:this.props.onSubmitFilter})),b.a.createElement(R.a,null,r?b.a.createElement("tr",null,b.a.createElement("td",{colSpan:6},s)):n.map((function(e){return b.a.createElement(B,T()({key:e.id},e))})))),b.a.createElement("div",{className:"col-md-4 col-md-offset-4"},b.a.createElement(q.a,{onPageChangeAction:this.props.handlePageClick,totalRecords:l.total,initialPage:this.props.housingFilesPagination.page})))}}]),t}(v.Component),W=Object(E.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))(K),Y=a(685),V=Object(E.b)((function(e){return{housingFiles:e.housingFiles.list}}),null)((function(e){var t=e.housingFiles.meta,a=void 0===t?{}:t;return b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-4"},b.a.createElement("div",{className:"btn-group",role:"group"},b.a.createElement(Y.a,{iconName:"glyphicon-refresh",onClickAction:e.resetHousingFileFilters}))),b.a.createElement("div",{className:"col-md-4"},b.a.createElement("h3",{className:"text-center table-title"},"Woningdossiers")),b.a.createElement("div",{className:"col-md-4"},b.a.createElement("div",{className:"pull-right"},"Resultaten: ",a.total||0)))})),J=a(717),z=a(682),Q=a(683),X=function(e){function t(e){var a;return i()(this,t),a=o()(this,c()(t).call(this,e)),h()(f()(a),"fetchHousingFilesData",(function(){setTimeout((function(){var e=Object(J.a)(a.props.housingFilesFilters),t=a.props.housingFilesSorts,n={limit:20,offset:a.props.housingFilesPagination.offset};a.props.fetchHousingFiles(e,t,n)}),100)})),h()(f()(a),"resetHousingFileFilters",(function(){a.props.clearFilterHousingFiles(),a.fetchHousingFilesData()})),a.handlePageClick=a.handlePageClick.bind(f()(a)),a}return p()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.fetchHousingFilesData()}},{key:"componentWillUnmount",value:function(){this.props.clearHousingFiles()}},{key:"onSubmitFilter",value:function(){var e=this;Object(J.a)(this.props.housingFilesFilters),this.props.housingFilesSorts;this.props.setHousingFilesPagination({page:0,offset:0}),setTimeout((function(){e.fetchHousingFilesData()}),100)}},{key:"handlePageClick",value:function(e){var t=this,a=e.selected,n=Math.ceil(20*a);this.props.setHousingFilesPagination({page:a,offset:n}),setTimeout((function(){t.fetchHousingFilesData()}),100)}},{key:"render",value:function(){var e=this;return b.a.createElement(z.a,null,b.a.createElement(Q.a,null,b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(V,{resetHousingFileFilters:function(){return e.resetHousingFileFilters()}})),b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(W,{housingFiles:this.props.housingFiles,housingFilesPagination:this.props.housingFilesPagination,onSubmitFilter:function(){return e.onSubmitFilter()},refreshHousingFilesData:function(){return e.fetchHousingFilesData()},handlePageClick:this.handlePageClick}))))}}]),t}(v.Component);t.default=Object(E.b)((function(e){return{housingFiles:e.housingFiles.list,housingFilesFilters:e.housingFiles.filters,housingFilesSorts:e.housingFiles.sorts,housingFilesPagination:e.housingFiles.pagination}}),(function(e){return Object(N.b)({fetchHousingFiles:C,clearHousingFiles:y,setHousingFilesPagination:D,clearFilterHousingFiles:S},e)}))(X)},682:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),s=a.n(l),r=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,l=e.onMouseLeave;return i.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:l},t)};r.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},r.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},t.a=r},683:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),s=a.n(l),r=function(e){var t=e.className,a=e.children;return i.a.createElement("div",{className:"panel-body ".concat(t)},a)};r.defaultProps={className:""},r.propTypes={className:s.a.string},t.a=r},685:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),s=a.n(l),r=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,l=e.title,s=e.disabled;return i.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:s,title:l},i.a.createElement("span",{className:"glyphicon ".concat(a)}))};r.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},r.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},t.a=r},707:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),s=a.n(l),r=a(711),o=a.n(r),u=function(e){var t=e.onPageChangeAction,a=e.initialPage,n=e.recordsPerPage,l=e.totalRecords;return i.a.createElement(o.a,{onPageChange:t,pageCount:Math.ceil(l/n)||1,pageRangeDisplayed:5,marginPagesDisplayed:2,breakLabel:i.a.createElement("a",null,"..."),breakClassName:"break-me",containerClassName:"pagination",activeClassName:"active",previousLabel:i.a.createElement("span",{"aria-hidden":"true"},"«"),nextLabel:i.a.createElement("span",{"aria-hidden":"true"},"»"),initialPage:a||0,forcePage:a,disableInitialCallback:!0})};u.defaultProps={recordsPerPage:20},u.propTypes={initialPage:s.a.number.isRequired,recordsPerPage:s.a.number,totalRecords:s.a.number,onPageChangeAction:s.a.func.isRequired},t.a=u},711:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=a(712),l=(n=i)&&n.__esModule?n:{default:n};t.default=l.default},712:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(0),l=u(i),s=u(a(14)),r=u(a(713)),o=u(a(714));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handlePreviousPage=function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)},a.handleNextPage=function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)},a.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))},a.callCallback=function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})},a.pagination=function(){var e=[],t=a.props,n=t.pageRangeDisplayed,i=t.pageCount,s=t.marginPagesDisplayed,r=t.breakLabel,u=t.breakClassName,c=a.state.selected;if(i<=n)for(var d=0;d<i;d++)e.push(a.getPageElement(d));else{var f=n/2,m=n-f;c>i-n/2?f=n-(m=i-c):c<n/2&&(m=n-(f=c));var p=void 0,g=void 0,h=void 0,v=function(e){return a.getPageElement(e)};for(p=0;p<i;p++)(g=p+1)<=s||g>i-s||p>=c-f&&p<=c+m?e.push(v(p)):r&&e[e.length-1]!==h&&(h=l.default.createElement(o.default,{key:p,breakLabel:r,breakClassName:u}),e.push(h))}return e},a.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback;void 0===t||a||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,i=a.pageLinkClassName,s=a.activeClassName,o=a.activeLinkClassName,u=a.extraAriaContext;return l.default.createElement(r.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:u,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.previousClassName,n=e.nextClassName,i=e.pageCount,s=e.containerClassName,r=e.previousLinkClassName,o=e.previousLabel,u=e.nextLinkClassName,c=e.nextLabel,d=this.state.selected,f=a+(0===d?" "+t:""),m=n+(d===i-1?" "+t:"");return l.default.createElement("ul",{className:s},l.default.createElement("li",{className:f},l.default.createElement("a",{onClick:this.handlePreviousPage,className:r,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},o)),this.pagination(),l.default.createElement("li",{className:m},l.default.createElement("a",{onClick:this.handleNextPage,className:u,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},c)))}}]),t}(i.Component);c.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.node,hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string},c.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=c},713:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=a(0),l=(n=i)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.onClick,i=e.href,s="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),r=null;return e.selected&&(r="page",s="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName,void 0!==a?(a=a,void 0!==e.activeLinkClassName&&(a=a+" "+e.activeLinkClassName)):a=e.activeLinkClassName),l.default.createElement("li",{className:t},l.default.createElement("a",{onClick:n,role:"button",className:a,href:i,tabIndex:"0","aria-label":s,"aria-current":r,onKeyPress:n},e.page))}},714:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=a(0),l=(n=i)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.breakLabel,a=e.breakClassName||"break";return l.default.createElement("li",{className:a},t)}},716:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),s=a.n(l),r=function(e){var t=e.RowClassName,a=e.setSorts,n=e.sortColumn,l=e.title,s=e.width;return i.a.createElement("th",{className:t,width:s},l,i.a.createElement("span",{className:"glyphicon glyphicon-arrow-down pull-right small",role:"button",onClick:a.bind(void 0,n,"ASC")}),i.a.createElement("span",{className:"glyphicon glyphicon-arrow-up pull-right small",role:"button",onClick:a.bind(void 0,n,"DESC")}))};r.defaultProps={RowClassName:""},r.propTypes={setSorts:s.a.func.isRequired,sortColumn:s.a.string.isRequired,title:s.a.string.isRequired,width:s.a.string.isRequired,RowClassName:s.a.string},t.a=r},717:function(e,t,a){"use strict";t.a=function(e){var t=[];for(var a in e)""!==e[a].data&&t.push(e[a]);return t}},720:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),s=a.n(l),r=a(703),o=a.n(r),u=a(704),c=a.n(u),d=a(8),f=a.n(d);f.a.locale("nl");var m=function(e){var t=e.className,a=e.value,n=e.onChangeAction,l=e.placeholder,s=a?f()(a).format("L"):"";return i.a.createElement("th",{className:"DayPicker-overflow ".concat(t)},i.a.createElement(o.a,{value:s,onDayChange:n,formatDate:u.formatDate,parseDate:u.parseDate,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:c.a},inputProps:{className:"form-control input-sm",placeholder:l},placeholder:""}))};m.defaultProps={className:"",value:null,placeholder:""},m.propTypes={className:s.a.string,value:s.a.oneOfType([s.a.string,s.a.object]),onChangeAction:s.a.func,placeholder:s.a.string},t.a=m}}]);