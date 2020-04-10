(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1608:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n.n(a),o=n(24),s=n.n(o),i=n(26),l=n.n(i),c=n(27),d=n.n(c),u=n(21),m=n.n(u),h=n(28),p=n.n(h),g=n(6),f=n.n(g),v=n(0),E=n.n(v),b=n(197),y=n.n(b),w=n(144),L=n(145),N=n(199),k=n(99),C=n(4),D=n(33),j=function(e){function t(e){var n;return r()(this,t),(n=l()(this,d()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},n}return p()(t,e),s()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){C.f.push("/grootboekrekening/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.description,r=t.vatCode,o=t.twinfieldLedgerCode,s=t.permissions;return E.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:s.manageFinancial?function(){return e.openItem(n)}:null,onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},E.a.createElement("td",null,a),E.a.createElement("td",null,r&&r.description),E.a.createElement("td",null,o),E.a.createElement("td",null,this.state.showActionButtons&&s.manageFinancial?E.a.createElement("a",{role:"button",onClick:function(){return e.openItem(n)}},E.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):"",this.state.showActionButtons&&s.manageFinancial?E.a.createElement("a",{role:"button",onClick:this.props.showDeleteItemModal.bind(this,n,a)},E.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))}}]),t}(v.Component),I=Object(D.b)((function(e){return{permissions:e.meDetails.permissions}}))(j),O=n(98),M=function(e){var t=e.deleteLedger,n=e.closeDeleteItemModal,a=e.description,r=e.id;return E.a.createElement(O.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:n,confirmAction:function(){return t(r),void n()},title:"Verwijderen"},"Verwijder grootboek: ",E.a.createElement("strong",null,a),"?")},S=n(14);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e){function t(e){var n;return r()(this,t),n=l()(this,d()(t).call(this,e)),f()(m()(n),"showDeleteItemModal",(function(e,t){n.setState(A({},n.state,{showDeleteItem:!0,deleteItem:A({},n.state.deleteItem,{id:e,description:t})}))})),f()(m()(n),"closeDeleteItemModal",(function(){n.setState(A({},n.state,{showDeleteItem:!1,deleteItem:A({},n.state.deleteItem,{id:"",description:""})}))})),n.state={showDeleteItem:!1,deleteItem:{id:"",description:""}},n}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.ledgers,a=t.hasError,r=t.isLoading,o="",s=!0;return a?o="Fout bij het ophalen van grootboekrekeningen.":r?o="Gegevens aan het laden.":0===n.length?o="Geen grootboekrekeningen gevonden!":s=!1,E.a.createElement("div",null,E.a.createElement(w.a,null,E.a.createElement(L.a,null,E.a.createElement("tr",{className:"thead-title"},E.a.createElement(k.a,{title:"Omschrijving",width:"35%"}),E.a.createElement(k.a,{title:"BTW code",width:"30%"}),E.a.createElement(k.a,{title:"Nummer",width:"30%"}),E.a.createElement(k.a,{title:"",width:"5%"}))),E.a.createElement(N.a,null,s?E.a.createElement("tr",null,E.a.createElement("td",{colSpan:5},o)):n.map((function(t){return E.a.createElement(I,y()({key:t.id,showDeleteItemModal:e.showDeleteItemModal},t))})))),this.state.showDeleteItem&&E.a.createElement(M,y()({closeDeleteItemModal:this.closeDeleteItemModal},this.state.deleteItem,{deleteLedger:this.props.deleteLedger})))}}]),t}(v.Component);R.propTypes={ledgers:S.any,hasError:S.any,isLoading:S.any};var F=R,T=n(685),B=function(e){function t(){return r()(this,t),l()(this,d()(t).apply(this,arguments))}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.ledgersCount,n=e.refreshLedgersData,a=e.permissions;return E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-4"},E.a.createElement("div",{className:"btn-group",role:"group"},E.a.createElement(T.a,{iconName:"glyphicon-refresh",onClickAction:n}),a.manageFinancial&&E.a.createElement(T.a,{iconName:"glyphicon-plus",onClickAction:function(){C.f.push("/grootboekrekening/nieuw")}}))),E.a.createElement("div",{className:"col-md-4"},E.a.createElement("h3",{className:"text-center table-title"},"Grootboekrekeningen")),E.a.createElement("div",{className:"col-md-4"},E.a.createElement("div",{className:"pull-right"},"Resultaten: ",t)))}}]),t}(v.Component);B.propTypes={ledgersCount:S.any,refreshLedgersData:S.any,permissions:S.any};var G=Object(D.b)((function(e){return{permissions:e.meDetails.permissions}}),null)(B),J=n(682),V=n(683),x=n(12),q=function(){return x.a.get("jory/ledger",{params:{jory:{fld:["id","description","vatCodeId","twinfieldLedgerCode"],rlt:{vatCode:{fld:["id","description"]}}}}})},W=n(821),z=n(203),H=function(e){function t(e){var n;return r()(this,t),n=l()(this,d()(t).call(this,e)),f()(m()(n),"callFetchLedgersData",(function(){n.setState({isLoading:!0,hasError:!1}),q().then((function(e){n.setState({isLoading:!1,ledgers:e.data.data})})).catch((function(e){n.setState({isLoading:!1,hasError:!0})}))})),f()(m()(n),"deleteLedger",(function(e){W.a.deleteLedger(e).then((function(t){n.setState({ledgers:n.state.ledgers.filter((function(t){return t.id!==e}))})})).catch((function(e){n.props.setError(e.response.status,e.response.data.message)}))})),n.state={ledgers:[],isLoading:!1,hasError:!1},n}return p()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.callFetchLedgersData()}},{key:"render",value:function(){return E.a.createElement(J.a,null,E.a.createElement(V.a,null,E.a.createElement("div",{className:"col-md-12 margin-10-top"},E.a.createElement(G,{ledgersCount:this.state.ledgers?this.state.ledgers.length:0,refreshLedgersData:this.callFetchLedgersData})),E.a.createElement("div",{className:"col-md-12 margin-10-top"},E.a.createElement(F,{ledgers:this.state.ledgers,isLoading:this.state.isLoading,hasError:this.state.hasError,deleteLedger:this.deleteLedger}))))}}]),t}(v.Component);t.default=Object(D.b)(null,(function(e){return{setError:function(t,n){e(Object(z.b)(t,n))}}}))(H)},682:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),s=n.n(o),i=function(e){var t=e.children,n=e.className,a=e.onMouseEnter,o=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(n),onMouseEnter:a,onMouseLeave:o},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},t.a=i},683:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),s=n.n(o),i=function(e){var t=e.className,n=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},n)};i.defaultProps={className:""},i.propTypes={className:s.a.string},t.a=i},685:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),s=n.n(o),i=function(e){var t=e.buttonClassName,n=e.iconName,a=e.onClickAction,o=e.title,s=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:a,disabled:s,title:o},r.a.createElement("span",{className:"glyphicon ".concat(n)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},t.a=i},821:function(e,t,n){"use strict";var a=n(12);n(2);t.a={fetchLedgerDetails:function(e){var t="jory/ledger/".concat(e);return a.a.get(t,{params:{jory:{fld:["id","description","vatCodeId","twinfieldLedgerCode"],rlt:{vatCode:{fld:["id","description"]}}}}})},newLedger:function(e){return e.jory=JSON.stringify({fld:["id"]}),a.a.post("ledger",e)},updateLedger:function(e){var t="".concat("ledger","/").concat(e.id);return a.a.post(t,e)},deleteLedger:function(e){var t="".concat("ledger","/").concat(e,"/delete");return a.a.post(t)}}}}]);