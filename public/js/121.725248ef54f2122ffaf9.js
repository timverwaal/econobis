(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1627:function(e,t,a){"use strict";a.r(t);var n=a(25),s=a.n(n),o=a(24),i=a.n(o),r=a(26),u=a.n(r),l=a(27),c=a.n(l),m=a(21),h=a.n(m),d=a(28),p=a.n(d),f=a(6),E=a.n(f),v=a(0),g=a.n(v),N=a(682),b=a(683),q=a(12),R=function(){return q.a.get("jory/quotation-request-status",{params:{jory:{fld:["id","name","usesWf","emailTemplateIdWf","numberOfDaysToSendEmail","order"]}}})},w=a(33),S=a(685),y=Object(w.b)((function(e){return{permissions:e.meDetails.permissions}}),null)((function(e){var t=e.quotationRequestStatusCount,a=e.refreshQuotationRequestStatusData;e.permissions;return g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-4"},g.a.createElement("div",{className:"btn-group",role:"group"},g.a.createElement(S.a,{iconName:"glyphicon-refresh",onClickAction:a}))),g.a.createElement("div",{className:"col-md-4"},g.a.createElement("h3",{className:"text-center table-title"},"Offerte verzoek statussen")),g.a.createElement("div",{className:"col-md-4"},g.a.createElement("div",{className:"pull-right"},"Resultaten: ",t)))})),k=a(197),L=a.n(k),C=a(144),M=a(145),D=a(199),A=a(99),j=a(4),F=function(e){function t(e){var a;return s()(this,t),(a=u()(this,c()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},a}return p()(t,e),i()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){j.f.push("/offerte-verzoek-status/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.name,s=t.permissions;return g.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:s.manageFinancial?function(){return e.openItem(a)}:null,onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},g.a.createElement("td",null,n),g.a.createElement("td",null,this.state.showActionButtons&&s.manageFinancial?g.a.createElement("a",{role:"button",onClick:function(){return e.openItem(a)}},g.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):""))}}]),t}(v.Component),O=Object(w.b)((function(e){return{permissions:e.meDetails.permissions}}))(F),Q=function(e){var t=e.quotationRequestStatus,a=e.hasError,n=e.isLoading,s="",o=!0;return a?s="Fout bij het ophalen van kans statussen.":n?s="Gegevens aan het laden.":0===t.length?s="Geen kans statussen gevonden!":o=!1,g.a.createElement("div",null,g.a.createElement(C.a,null,g.a.createElement(M.a,null,g.a.createElement("tr",{className:"thead-title"},g.a.createElement(A.a,{title:"Omschrijving",width:"100%"}))),g.a.createElement(D.a,null,o?g.a.createElement("tr",null,g.a.createElement("td",{colSpan:4},s)):t.map((function(e){return g.a.createElement(O,L()({key:e.id},e))})))))},T=function(e){function t(e){var a;return s()(this,t),a=u()(this,c()(t).call(this,e)),E()(h()(a),"callFetchQuotationRequestStatusData",(function(){a.setState({isLoading:!0,hasError:!1}),R().then((function(e){a.setState({isLoading:!1,quotationRequestStatus:e.data.data})})).catch((function(e){a.setState({isLoading:!1,hasError:!0})}))})),a.state={quotationRequestStatus:[],isLoading:!1,hasError:!1},a}return p()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.callFetchQuotationRequestStatusData()}},{key:"render",value:function(){return g.a.createElement(N.a,null,g.a.createElement(b.a,null,g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(y,{quotationRequestStatusCount:this.state.quotationRequestStatus?this.state.quotationRequestStatus.length:0,refreshQuotationRequestStatusData:this.callFetchQuotationRequestStatusData})),g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(Q,{quotationRequestStatus:this.state.quotationRequestStatus,isLoading:this.state.isLoading,hasError:this.state.hasError}))))}}]),t}(v.Component);t.default=T},682:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(14),i=a.n(o),r=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,o=e.onMouseLeave;return s.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:o},t)};r.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},r.propTypes={className:i.a.string,onMouseEnter:i.a.func,onMouseLeave:i.a.func},t.a=r},683:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(14),i=a.n(o),r=function(e){var t=e.className,a=e.children;return s.a.createElement("div",{className:"panel-body ".concat(t)},a)};r.defaultProps={className:""},r.propTypes={className:i.a.string},t.a=r},685:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(14),i=a.n(o),r=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,o=e.title,i=e.disabled;return s.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:i,title:o},s.a.createElement("span",{className:"glyphicon ".concat(a)}))};r.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},r.propTypes={buttonClassName:i.a.string,iconName:i.a.string.isRequired,onClickAction:i.a.func,title:i.a.string,disabled:i.a.bool},t.a=r}}]);