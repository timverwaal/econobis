(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1539:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),o=a(24),i=a.n(o),s=a(26),l=a.n(s),c=a(27),u=a.n(c),p=a(21),d=a.n(p),m=a(28),f=a.n(m),h=a(6),g=a.n(h),y=a(0),b=a.n(y),k=a(33),C=a(15),E=function(e,t,a){return{type:"FETCH_OPPORTUNITIES",filters:e,sorts:t,pagination:a}},v=function(){return{type:"CLEAR_OPPORTUNITIES"}},D=function(e){return{type:"SET_CHECKED_OPPORTUNITY_ALL",checkedValue:e}},P=function(e){return{type:"SET_OPPORTUNITIES_PAGINATION",pagination:e}},O=function(e){return{type:"SET_FILTER_OPPORTUNITY_NUMBER",number:e}},N=function(e){return{type:"SET_FILTER_OPPORTUNITY_CREATED_AT_START",createdAtStart:e}},A=function(e){return{type:"SET_FILTER_OPPORTUNITY_CREATED_AT_END",createdAtEnd:e}},w=function(e){return{type:"SET_FILTER_OPPORTUNITY_DESIRED_DATE_START",desiredDateStart:e}},S=function(e){return{type:"SET_FILTER_OPPORTUNITY_DESIRED_DATE_END",desiredDateEnd:e}},T=function(e){return{type:"SET_FILTER_OPPORTUNITY_NAME",name:e}},I=function(e){return{type:"SET_FILTER_OPPORTUNITY_MEASURE_CATEGORY",measureCategory:e}},x=function(e){return{type:"SET_FILTER_OPPORTUNITY_CAMPAIGN",campaign:e}},R=function(e){return{type:"SET_FILTER_OPPORTUNITY_STATUS_ID",statusId:e}},_=function(e){return{type:"SET_FILTER_OPPORTUNITY_AMOUNT_OF_QUOTATION_REQUESTS",amountOfQuotationRequests:e}},L=function(){return{type:"CLEAR_FILTER_OPPORTUNITY"}},F=a(10),U=a.n(F),B=a(4),M=a(685),j=a(955),Y=function(e){function t(e){var a;return r()(this,t),a=l()(this,u()(t).call(this,e)),g()(d()(a),"bulkEmailContacts",(function(){var e=[];a.props.opportunities.data.map((function(t){return!0===t.checked&&e.push(t.contactId)}));var t=U()(new Set(e));a.props.setBulkEmailToContactIds(t),B.f.push("/email/nieuw/bulk")})),a}return f()(t,e),i()(t,[{key:"render",value:function(){this.props.permissions;var e=this.props.opportunities.meta,t=void 0===e?{}:e;return b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-4"},b.a.createElement("div",{className:"btn-group",role:"group"},b.a.createElement(M.a,{iconName:"glyphicon-arrow-left",onClickAction:B.e.goBack}),b.a.createElement(M.a,{iconName:"glyphicon-refresh",onClickAction:this.props.resetOpportunitiesFilters}),b.a.createElement("div",{className:"nav navbar-nav btn-group",role:"group"},b.a.createElement("button",{className:"btn btn-success btn-sm","data-toggle":"dropdown"},b.a.createElement("span",{className:"glyphicon glyphicon-share-alt"})),b.a.createElement("ul",{className:"dropdown-menu"},b.a.createElement("li",null,b.a.createElement("a",{onClick:this.bulkEmailContacts},"Contacten emailen")))),b.a.createElement(M.a,{iconName:"glyphicon-ok",onClickAction:this.props.toggleShowCheckboxList}),b.a.createElement(M.a,{iconName:"glyphicon-download-alt",onClickAction:this.props.getCSV}))),b.a.createElement("div",{className:"col-md-4"},b.a.createElement("h3",{className:"text-center table-title"},"Kansen")),b.a.createElement("div",{className:"col-md-4"},b.a.createElement("div",{className:"pull-right"},"Resultaten: ",t.total||0)))}}]),t}(y.Component),V=Object(k.b)((function(e){return{permissions:e.meDetails.permissions,opportunities:e.opportunities.list}}),(function(e){return{setBulkEmailToContactIds:function(t){e(Object(j.a)(t))}}}))(Y),K=a(198),W=a.n(K),q=a(144),Q=a(145),z=a(199),G=a(8),H=a.n(G),J=function(e){function t(e){var a;return r()(this,t),(a=l()(this,u()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},a}return f()(t,e),i()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"setCheckedOpportunity",value:function(e){this.props.setCheckedOpportunity(e)}},{key:"openItem",value:function(e){B.f.push("kans/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.checked,n=t.id,r=t.number,o=t.createdAt,i=t.desiredDate,s=t.contactName,l=t.measureCategoryName,c=t.campaignName,u=t.statusName,p=t.amountQuotations;return b.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(n)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},this.props.showCheckbox&&b.a.createElement("td",null,b.a.createElement("input",{type:"checkbox",checked:a,onChange:function(){return e.setCheckedOpportunity(n)}})),b.a.createElement("td",null,r),b.a.createElement("td",null,o?H()(o).format("DD-MM-Y"):"Onbekend"),b.a.createElement("td",null,i?H()(i).format("DD-MM-Y"):"Onbekend"),b.a.createElement("td",null,s),b.a.createElement("td",null,l),b.a.createElement("td",null,c),b.a.createElement("td",null,u),b.a.createElement("td",null,p),b.a.createElement("td",null,this.state.showActionButtons?b.a.createElement("a",{role:"button",onClick:function(){return e.openItem(n)}},b.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):"",this.state.showActionButtons&&this.props.permissions.manageOpportunity?b.a.createElement("a",{role:"button",onClick:this.props.showDeleteItemModal.bind(this,n,s,l)},b.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))}}]),t}(y.Component),X=Object(k.b)((function(e){return{permissions:e.meDetails.permissions}}),(function(e){return{setCheckedOpportunity:function(t){e(function(e){return{type:"SET_CHECKED_OPPORTUNITY",id:e}}(t))}}}))(J),Z=a(98),$=a(813),ee=Object(k.b)(null,(function(e){return{deleteOpportunity:function(t){e(Object($.b)(t))}}}))((function(e){return b.a.createElement(Z.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deleteOpportunity(e.id),void e.closeDeleteItemModal()},title:"Verwijderen"},"Verwijder kans van contact ",b.a.createElement("strong",null,e.contactName)," met maatregel"," ",b.a.createElement("strong",null,e.measureCategoryName),"?")})),te=a(705),ae=a(715),ne=(a(99),Object(k.b)(null,(function(e){return{setOpportunitiesSortsFilter:function(t,a){e(function(e,t){return{type:"SET_OPPORTUNITY_SORTS",field:e,order:t}}(t,a))}}}))((function(e){var t=function(t,a){e.setOpportunitiesSortsFilter(t,a),setTimeout((function(){e.fetchOpportunitiesData()}),100)};return b.a.createElement("tr",{className:"thead-title"},b.a.createElement(ae.a,{sortColumn:"number",title:"Nummer",width:"10%",setSorts:t}),b.a.createElement(ae.a,{sortColumn:"createdAt",title:"Datum",width:"20%",setSorts:t}),b.a.createElement(ae.a,{sortColumn:"desiredDate",title:"Datum Uitvoering",width:"17%",setSorts:t}),b.a.createElement(ae.a,{sortColumn:"name",title:"Naam",width:"10%",setSorts:t}),b.a.createElement(ae.a,{sortColumn:"measureCategory",title:"Maatregel categorie",width:"10%",setSorts:t}),b.a.createElement(ae.a,{sortColumn:"campaign",title:"Campagne",width:"10%",setSorts:t}),b.a.createElement(ae.a,{sortColumn:"statusId",title:"Status",width:"10%",setSorts:t}),b.a.createElement(ae.a,{sortColumn:"amountOfQuotationRequests",title:"Aantal offertes",width:"7%",setSorts:t}),b.a.createElement("th",{width:"6%"}))}))),re=(a(730),a(844)),oe=Object(k.b)((function(e){return{filters:e.opportunities.filters,opportunityStatusses:e.systemData.opportunityStatus}}),(function(e){return Object(C.b)(g()({setFilterOpportunityAmountOfQuotationRequests:_,setFilterOpportunityCampaign:x,setFilterOpportunityCreatedAtStart:N,setFilterOpportunityCreatedAtEnd:A,setFilterOpportunityDesiredDateStart:w,setFilterOpportunityDesiredDateEnd:S,setFilterOpportunityMeasureCategory:I,setFilterOpportunityName:T,setFilterOpportunityNumber:O,setFilterOpportunityStatusId:R},"setFilterOpportunityAmountOfQuotationRequests",_),e)}))((function(e){return b.a.createElement("tr",{className:"thead-filter"},e.showCheckboxList?b.a.createElement("th",{width:"3%"},b.a.createElement("input",{type:"checkbox",value:e.checkedAllCheckboxes,onChange:e.selectAllCheckboxes})):b.a.createElement("th",null,b.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.number.data,onChange:function(t){e.setFilterOpportunityNumber(t.target.value)}})),b.a.createElement(re.a,{startDate:e.filters.createdAtStart.data&&e.filters.createdAtStart.data,endDate:e.filters.createdAtEnd.data&&e.filters.createdAtEnd.data,onChangeActionStart:function(t){void 0===t?e.setFilterOpportunityCreatedAtStart(""):e.setFilterOpportunityCreatedAtStart(H()(t).format("Y-MM-DD"))},onChangeActionEnd:function(t){void 0===t?e.setFilterOpportunityCreatedAtEnd(""):e.setFilterOpportunityCreatedAtEnd(H()(t).format("Y-MM-DD"))}}),b.a.createElement(re.a,{startDate:e.filters.desiredDateStart.data&&e.filters.desiredDateStart.data,endDate:e.filters.desiredDateEnd.data&&e.filters.desiredDateEnd.data,onChangeActionStart:function(t){void 0===t?e.setFilterOpportunityDesiredDateStart(""):e.setFilterOpportunityDesiredDateStart(H()(t).format("Y-MM-DD"))},onChangeActionEnd:function(t){void 0===t?e.setFilterOpportunityDesiredDateEnd(""):e.setFilterOpportunityDesiredDateEnd(H()(t).format("Y-MM-DD"))}}),b.a.createElement("th",null,b.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.name.data,onChange:function(t){e.setFilterOpportunityName(t.target.value)}})),b.a.createElement("th",null,b.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.measureCategory.data,onChange:function(t){e.setFilterOpportunityMeasureCategory(t.target.value)}})),b.a.createElement("th",null,b.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.campaign.data,onChange:function(t){e.setFilterOpportunityCampaign(t.target.value)}})),b.a.createElement("th",null,b.a.createElement("select",{className:"form-control input-sm",value:e.filters.statusId.data,onChange:function(t){e.setFilterOpportunityStatusId(t.target.value),setTimeout((function(){e.onSubmitFilter()}),100)}},b.a.createElement("option",null),e.opportunityStatusses.map((function(e){return b.a.createElement("option",{key:e.id,value:e.id},e.name)})))),b.a.createElement("th",null,b.a.createElement("input",{type:"text",className:"form-control input-sm",value:e.filters.amountOfQuotationRequests.data,onChange:function(t){e.setFilterOpportunityAmountOfQuotationRequests(t.target.value)}})),b.a.createElement("th",null),b.a.createElement("th",null))}));function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(a),!0).forEach((function(t){g()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var le=function(e){function t(e){var a;return r()(this,t),a=l()(this,u()(t).call(this,e)),g()(d()(a),"handleKeyUp",(function(e){13===e.keyCode&&a.props.onSubmitFilter()})),g()(d()(a),"showDeleteItemModal",(function(e,t,n){a.setState(se({},a.state,{showDeleteItem:!0,deleteItem:se({},a.state.deleteItem,{id:e,contactName:t,measureCategoryName:n})}))})),g()(d()(a),"closeDeleteItemModal",(function(){a.setState(se({},a.state,{showDeleteItem:!1,deleteItem:se({},a.state.deleteItem,{id:"",contactName:"",measureCategoryName:""})}))})),a.state={showDeleteItem:!1,deleteItem:{id:"",contactName:"",measureCategoryName:""}},a}return f()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=this.props.opportunities,a=t.data,n=void 0===a?[]:a,r=t.meta,o=void 0===r?{}:r,i="",s=!0;return this.props.hasError?i="Fout bij het ophalen van kansen.":this.props.isLoading?i="Gegevens aan het laden.":0===n.length?i="Geen kansen gevonden!":s=!1,b.a.createElement("div",null,b.a.createElement("form",{onKeyUp:this.handleKeyUp},b.a.createElement(q.a,null,b.a.createElement(Q.a,null,b.a.createElement(ne,{fetchOpportunitiesData:function(){return e.props.fetchOpportunitiesData()}}),b.a.createElement(oe,{onSubmitFilter:this.props.onSubmitFilter,showCheckboxList:this.props.showCheckboxList,checkedAllCheckboxes:this.props.checkedAllCheckboxes,selectAllCheckboxes:this.props.selectAllCheckboxes})),b.a.createElement(z.a,null,s?b.a.createElement("tr",null,b.a.createElement("td",{colSpan:8},i)):n.map((function(t){return b.a.createElement(X,W()({key:t.id},t,{showDeleteItemModal:e.showDeleteItemModal,showCheckbox:e.props.showCheckboxList,checkedAllCheckboxes:e.props.checkedAllCheckboxes}))})))),b.a.createElement("div",{className:"col-md-6 col-md-offset-3"},b.a.createElement(te.a,{onPageChangeAction:this.props.handlePageClick,totalRecords:o.total,initialPage:this.props.opportunitiesPagination.page})),this.state.showDeleteItem&&b.a.createElement(ee,W()({closeDeleteItemModal:this.closeDeleteItemModal,fetchOpportunitiesData:this.props.fetchOpportunitiesData},this.state.deleteItem))))}}]),t}(y.Component),ce=Object(k.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))(le),ue=a(716),pe=a(704),de=a.n(pe),me=a(722),fe=a(208),he=function(e){function t(e){var a;return r()(this,t),a=l()(this,u()(t).call(this,e)),g()(d()(a),"getCSV",(function(){a.props.blockUI(),setTimeout((function(){var e=Object(ue.a)(a.props.opportunitiesFilters),t=a.props.opportunitiesSorts;fe.a.getCSV({filters:e,sorts:t}).then((function(e){de()(e.data,"Kansen-"+H()().format("YYYY-MM-DD HH:mm:ss")+".csv"),a.props.unblockUI()})).catch((function(e){a.props.unblockUI()}))}),100)})),g()(d()(a),"toggleShowCheckboxList",(function(){a.setState({showCheckboxList:!a.state.showCheckboxList})})),g()(d()(a),"selectAllCheckboxes",(function(){a.setState({checkedAllCheckboxes:!a.state.checkedAllCheckboxes}),a.props.setCheckedOpportunityAll(!a.state.checkedAllCheckboxes)})),a.state={showCheckboxList:!1,checkedAllCheckboxes:!1},a.fetchOpportunitiesData=a.fetchOpportunitiesData.bind(d()(a)),a.resetOpportunitiesFilters=a.resetOpportunitiesFilters.bind(d()(a)),a.handlePageClick=a.handlePageClick.bind(d()(a)),a.getCSV=a.getCSV.bind(d()(a)),a}return f()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.fetchOpportunitiesData()}},{key:"componentWillUnmount",value:function(){this.props.clearOpportunities()}},{key:"fetchOpportunitiesData",value:function(){var e=this;setTimeout((function(){var t=Object(ue.a)(e.props.opportunitiesFilters),a=e.props.opportunitiesSorts,n={limit:20,offset:e.props.opportunitiesPagination.offset};e.props.fetchOpportunities(t,a,n)}),100)}},{key:"resetOpportunitiesFilters",value:function(){this.props.clearFilterOpportunity(),this.fetchOpportunitiesData()}},{key:"onSubmitFilter",value:function(){this.props.clearOpportunities(),this.props.setOpportunitiesPagination({page:0,offset:0}),this.fetchOpportunitiesData()}},{key:"handlePageClick",value:function(e){var t=e.selected,a=Math.ceil(20*t);this.props.setOpportunitiesPagination({page:t,offset:a}),this.fetchOpportunitiesData()}},{key:"render",value:function(){var e=this;return b.a.createElement("div",null,b.a.createElement("div",{className:"panel panel-default"},b.a.createElement("div",{className:"panel-body"},b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(V,{toggleShowCheckboxList:function(){return e.toggleShowCheckboxList()},resetOpportunitiesFilters:function(){return e.resetOpportunitiesFilters()},getCSV:this.getCSV})),b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(ce,{handlePageClick:this.handlePageClick,fetchOpportunitiesData:this.fetchOpportunitiesData,showCheckboxList:this.state.showCheckboxList,selectAllCheckboxes:function(){return e.selectAllCheckboxes()},checkedAllCheckboxes:this.state.checkedAllCheckboxes,onSubmitFilter:function(){return e.onSubmitFilter()},opportunitiesPagination:this.props.opportunitiesPagination,opportunities:this.props.opportunities})))))}}]),t}(y.Component);t.default=Object(k.b)((function(e){return{opportunities:e.opportunities.list,opportunitiesFilters:e.opportunities.filters,opportunitiesSorts:e.opportunities.sorts,opportunitiesPagination:e.opportunities.pagination}}),(function(e){return Object(C.b)({fetchOpportunities:E,clearOpportunities:v,setOpportunitiesPagination:P,setCheckedOpportunityAll:D,clearFilterOpportunity:L,blockUI:me.a,unblockUI:me.b},e)}))(he)},685:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),i=a.n(o),s=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,o=e.title,i=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:i,title:o},r.a.createElement("span",{className:"glyphicon ".concat(a)}))};s.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},s.propTypes={buttonClassName:i.a.string,iconName:i.a.string.isRequired,onClickAction:i.a.func,title:i.a.string,disabled:i.a.bool},t.a=s},704:function(e,t){e.exports=function(e,t,a){var n=new Blob([e],{type:a||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,t);else{var r=window.URL.createObjectURL(n),o=document.createElement("a");o.style.display="none",o.href=r,o.setAttribute("download",t),void 0===o.download&&o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(r)}}},705:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),i=a.n(o),s=a(710),l=a.n(s),c=function(e){var t=e.onPageChangeAction,a=e.initialPage,n=e.recordsPerPage,o=e.totalRecords;return r.a.createElement(l.a,{onPageChange:t,pageCount:Math.ceil(o/n)||1,pageRangeDisplayed:5,marginPagesDisplayed:2,breakLabel:r.a.createElement("a",null,"..."),breakClassName:"break-me",containerClassName:"pagination",activeClassName:"active",previousLabel:r.a.createElement("span",{"aria-hidden":"true"},"«"),nextLabel:r.a.createElement("span",{"aria-hidden":"true"},"»"),initialPage:a||0,forcePage:a,disableInitialCallback:!0})};c.defaultProps={recordsPerPage:20},c.propTypes={initialPage:i.a.number.isRequired,recordsPerPage:i.a.number,totalRecords:i.a.number,onPageChangeAction:i.a.func.isRequired},t.a=c},710:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(711),o=(n=r)&&n.__esModule?n:{default:n};t.default=o.default},711:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=c(r),i=c(a(14)),s=c(a(712)),l=c(a(713));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handlePreviousPage=function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)},a.handleNextPage=function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)},a.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))},a.callCallback=function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})},a.pagination=function(){var e=[],t=a.props,n=t.pageRangeDisplayed,r=t.pageCount,i=t.marginPagesDisplayed,s=t.breakLabel,c=t.breakClassName,u=a.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(a.getPageElement(p));else{var d=n/2,m=n-d;u>r-n/2?d=n-(m=r-u):u<n/2&&(m=n-(d=u));var f=void 0,h=void 0,g=void 0,y=function(e){return a.getPageElement(e)};for(f=0;f<r;f++)(h=f+1)<=i||h>r-i||f>=u-d&&f<=u+m?e.push(y(f)):s&&e[e.length-1]!==g&&(g=o.default.createElement(l.default,{key:f,breakLabel:s,breakClassName:c}),e.push(g))}return e},a.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback;void 0===t||a||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,i=a.activeClassName,l=a.activeLinkClassName,c=a.extraAriaContext;return o.default.createElement(s.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:i,activeLinkClassName:l,extraAriaContext:c,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.previousClassName,n=e.nextClassName,r=e.pageCount,i=e.containerClassName,s=e.previousLinkClassName,l=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,p=this.state.selected,d=a+(0===p?" "+t:""),m=n+(p===r-1?" "+t:"");return o.default.createElement("ul",{className:i},o.default.createElement("li",{className:d},o.default.createElement("a",{onClick:this.handlePreviousPage,className:s,href:this.hrefBuilder(p-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},l)),this.pagination(),o.default.createElement("li",{className:m},o.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(p+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},u)))}}]),t}(r.Component);u.propTypes={pageCount:i.default.number.isRequired,pageRangeDisplayed:i.default.number.isRequired,marginPagesDisplayed:i.default.number.isRequired,previousLabel:i.default.node,nextLabel:i.default.node,breakLabel:i.default.node,hrefBuilder:i.default.func,onPageChange:i.default.func,initialPage:i.default.number,forcePage:i.default.number,disableInitialCallback:i.default.bool,containerClassName:i.default.string,pageClassName:i.default.string,pageLinkClassName:i.default.string,activeClassName:i.default.string,activeLinkClassName:i.default.string,previousClassName:i.default.string,nextClassName:i.default.string,previousLinkClassName:i.default.string,nextLinkClassName:i.default.string,disabledClassName:i.default.string,breakClassName:i.default.string},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=u},712:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.onClick,r=e.href,i="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),s=null;return e.selected&&(s="page",i="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName,void 0!==a?(a=a,void 0!==e.activeLinkClassName&&(a=a+" "+e.activeLinkClassName)):a=e.activeLinkClassName),o.default.createElement("li",{className:t},o.default.createElement("a",{onClick:n,role:"button",className:a,href:r,tabIndex:"0","aria-label":i,"aria-current":s,onKeyPress:n},e.page))}},713:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.breakLabel,a=e.breakClassName||"break";return o.default.createElement("li",{className:a},t)}},715:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),i=a.n(o),s=function(e){var t=e.RowClassName,a=e.setSorts,n=e.sortColumn,o=e.title,i=e.width;return r.a.createElement("th",{className:t,width:i},o,r.a.createElement("span",{className:"glyphicon glyphicon-arrow-down pull-right small",role:"button",onClick:a.bind(void 0,n,"ASC")}),r.a.createElement("span",{className:"glyphicon glyphicon-arrow-up pull-right small",role:"button",onClick:a.bind(void 0,n,"DESC")}))};s.defaultProps={RowClassName:""},s.propTypes={setSorts:i.a.func.isRequired,sortColumn:i.a.string.isRequired,title:i.a.string.isRequired,width:i.a.string.isRequired,RowClassName:i.a.string},t.a=s},716:function(e,t,a){"use strict";t.a=function(e){var t=[];for(var a in e)""!==e[a].data&&t.push(e[a]);return t}},722:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n=function(){return{type:"BLOCK_UI"}},r=function(){return{type:"UNBLOCK_UI"}}},730:function(e,t,a){var n=a(731);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(204)(n,r);n.locals&&(e.exports=n.locals)},731:function(e,t,a){(e.exports=a(203)(!1)).push([e.i,'.DayPicker{display:inline-block;font-size:1rem}.DayPicker-wrapper{position:relative;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DayPicker-Months{display:flex;flex-wrap:wrap;justify-content:center}.DayPicker-Month{display:table;margin:0 1em;margin-top:1em;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DayPicker-NavButton{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:50%;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer}.DayPicker-NavButton:hover{opacity:.8}.DayPicker-NavButton--prev{margin-right:1.5em;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC")}.DayPicker-NavButton--next{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==")}.DayPicker-NavButton--interactionDisabled{display:none}.DayPicker-Caption{display:table-caption;margin-bottom:.5em;padding:0 .5em;text-align:left}.DayPicker-Caption>div{font-weight:500;font-size:1.15em}.DayPicker-Weekdays{display:table-header-group;margin-top:1em}.DayPicker-WeekdaysRow{display:table-row}.DayPicker-Weekday{display:table-cell;padding:.5em;color:#8b9898;text-align:center;font-size:.875em}.DayPicker-Weekday abbr[title]{border-bottom:none;text-decoration:none}.DayPicker-Body{display:table-row-group}.DayPicker-Week{display:table-row}.DayPicker-Day{border-radius:50%;text-align:center}.DayPicker-Day,.DayPicker-WeekNumber{display:table-cell;padding:.5em;vertical-align:middle;cursor:pointer}.DayPicker-WeekNumber{min-width:1em;border-right:1px solid #eaecec;color:#8b9898;text-align:right;font-size:.75em}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default}.DayPicker-Footer{padding-top:.5em}.DayPicker-TodayButton{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:.875em;cursor:pointer}.DayPicker-Day--today{color:#d0021b;font-weight:700}.DayPicker-Day--outside{color:#8b9898;cursor:default}.DayPicker-Day--disabled{color:#dce0e0;cursor:default}.DayPicker-Day--sunday{background-color:#f7f8f8}.DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa}.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff}.DayPickerInput{display:inline-block}.DayPickerInput-OverlayWrapper{position:relative}.DayPickerInput-Overlay{position:absolute;left:0;z-index:1;background:#fff;box-shadow:0 2px 5px rgba(0,0,0,.15)}',""])},813:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var n=function(e){return{type:"FETCH_OPPORTUNITY",id:e}},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{type:"DELETE_OPPORTUNITY",id:e,contactId:t}},o=function(){return{type:"CLEAR_OPPORTUNITY"}}},844:function(e,t,a){"use strict";var n=a(786),r=a.n(n),o=a(0),i=a.n(o),s=a(14),l=a.n(s),c=a(700),u=a.n(c),p=a(701),d=a.n(p),m=a(8),f=a.n(m),h=a(788);function g(){var e=r()(["\n    display: flex;\n\n    // & .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n    //     background-color: #f0f8ff !important;\n    //     color: #4a90e2;\n    // }\n\n    & .DayPicker-Day {\n        border-radius: 0 !important;\n    }\n    & .DayPicker-Day--start {\n        border-top-left-radius: 50% !important;\n        border-bottom-left-radius: 50% !important;\n    }\n    & .DayPicker-Day--end {\n        border-top-right-radius: 50% !important;\n        border-bottom-right-radius: 50% !important;\n    }\n    & .DayPickerInput-Overlay {\n        width: 600px;\n    }\n    .InputFromTo-to .DayPickerInput-Overlay {\n        margin-left: -198px;\n    }\n"]);return g=function(){return e},e}f.a.locale("nl");var y=function(e){var t=e.className,a=e.startDate,n=e.endDate,r=e.onChangeActionStart,o=e.onChangeActionEnd,s=(e.placeholder,a?f()(a).format("L"):""),l=n?f()(n).format("L"):"";return i.a.createElement("th",{className:"DayPicker-overflow ".concat(t)},i.a.createElement(b,null,i.a.createElement(u.a,{value:s,onDayChange:r,formatDate:p.formatDate,parseDate:p.parseDate,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:d.a},inputProps:{className:"form-control input-sm",placeholder:"Van"},placeholder:"Van"})," ","-"," ",i.a.createElement("span",{className:"InputFromTo-to"},i.a.createElement(u.a,{value:l,onDayChange:o,formatDate:p.formatDate,parseDate:p.parseDate,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:d.a},inputProps:{className:"form-control input-sm",placeholder:"tot"},placeholder:"tot"}))))};y.defaultProps={className:"",startDate:null,endDate:null,placeholder:""},y.propTypes={className:l.a.string,startDate:l.a.oneOfType([l.a.string,l.a.object]),endDate:l.a.oneOfType([l.a.string,l.a.object]),onChangeAction:l.a.func,placeholder:l.a.string},t.a=y;var b=h.a.div(g())},955:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return{type:"SET_BULK_EMAIL_TO_CONTACT_IDS",ids:e}}}}]);