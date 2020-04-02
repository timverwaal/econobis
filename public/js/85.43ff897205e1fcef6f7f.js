(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1602:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),o=a(24),s=a.n(o),i=a(26),l=a.n(i),c=a(27),d=a.n(c),u=a(21),m=a.n(u),p=a(28),g=a.n(p),h=a(6),v=a.n(h),f=a(0),b=a.n(f),E=a(4),y=a(685),N=a(14),C=a(98),w=function(e){var t=e.deleteLedger,a=e.closeDeleteItemModal,n=e.description,r=e.id;return b.a.createElement(C.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:a,confirmAction:function(){return t(r),void a()},title:"Verwijderen"},"Verwijder grootboek: ",b.a.createElement("strong",null,n),"?")},L=function(e){function t(e){var a;return r()(this,t),a=l()(this,d()(t).call(this,e)),v()(m()(a),"toggleDelete",(function(){a.setState({showDelete:!a.state.showDelete})})),a.state={showDelete:!1},a}return g()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.id;return b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-4"},b.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},b.a.createElement(y.a,{iconName:"glyphicon-arrow-left",onClickAction:E.e.goBack}),b.a.createElement(y.a,{iconName:"glyphicon-trash",onClickAction:this.toggleDelete}))),b.a.createElement("div",{className:"col-md-4"},b.a.createElement("h4",{className:"text-center"},"Grootboekrekening: ",t)),b.a.createElement("div",{className:"col-md-4"}),this.state.showDelete&&b.a.createElement(w,{closeDeleteItemModal:this.toggleDelete,description:t,id:a,deleteLedger:this.props.deleteLedger}))}}]),t}(f.Component);L.propTypes={description:N.any};var k=L,O=a(198),D=a(197),T=a.n(D),S=a(33),j=a(689),A=a.n(j),M=a(8),x=a.n(M),q=a(686),P=a(684),V=a(682),B=a(683),z=(a(820),a(688)),I=a(821),F=a(15),R=a(202);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}x.a.locale("nl");var G=function(e){function t(e){var a;return r()(this,t),a=l()(this,d()(t).call(this,e)),v()(m()(a),"handleInputChange",(function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState(W({},a.state,{ledger:W({},a.state.ledger,v()({},r,n))}))})),v()(m()(a),"handleSubmit",(function(e){e.preventDefault();var t=a.state.ledger,n={},r=!1;A.a.isEmpty(t.description)&&(n.description=!0,r=!0),t.twinfieldLedgerCode&&t.twinfieldLedgerCode!==a.props.ledger.twinfieldLedgerCode&&a.props.ledgers.map((function(e){e.twinfieldLedgerCode==t.twinfieldLedgerCode&&(r=!0,n.twinfieldLedgerCode=!0)})),a.setState(W({},a.state,{errors:n})),!r&&I.a.updateLedger(t).then((function(e){a.props.updateState(t),a.props.fetchSystemData(),a.props.switchToView()})).catch((function(e){alert("Er is iets misgegaan bij opslaan. Herlaad de pagina en probeer het nogmaals.")}))})),a.state={ledger:W({},e.ledger),errors:{description:!1,vatCodeId:!1}},a}return g()(t,e),s()(t,[{key:"render",value:function(){var e=this.state.ledger,t=e.description,a=e.vatCodeId,n=e.twinfieldLedgerCode;return b.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},b.a.createElement(V.a,null,b.a.createElement(B.a,null,b.a.createElement("div",{className:"row"},b.a.createElement(q.a,{label:"Omschrijving",name:"description",value:t,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.description}),b.a.createElement(z.a,{label:"BTW code",name:"vatCodeId",value:a,options:this.props.vatCodes,optionName:"description",onChangeAction:this.handleInputChange,placeholder:"BTW geen"})),b.a.createElement("div",{className:"row"},b.a.createElement(q.a,{label:"Twinfield grootboekcode",name:"twinfieldLedgerCode",value:n,onChangeAction:this.handleInputChange,error:this.state.errors.twinfieldLedgerCode,errorMessage:"Deze grootboekcode wordt al gebruikt."}))),b.a.createElement(B.a,null,b.a.createElement("div",{className:"pull-right btn-group",role:"group"},b.a.createElement(P.a,{buttonClassName:"btn-default",buttonText:"Sluiten",onClickAction:this.props.switchToView}),b.a.createElement(P.a,{buttonText:"Opslaan",type:"submit",value:"Submit"})))))}}]),t}(f.Component),H=Object(S.b)(null,(function(e){return Object(F.b)({fetchSystemData:R.a},e)}))(G),K=a(687),Q=function(e){var t=e.description,a=e.vatCodeId,n=e.twinfieldLedgerCode,r=e.switchToEdit,o=e.vatCodes;return b.a.createElement("div",{onClick:r},b.a.createElement(V.a,null,b.a.createElement(B.a,null,b.a.createElement("div",{className:"row"},b.a.createElement(K.a,{label:"Omschrijving",value:t}),b.a.createElement(K.a,{label:"BTW code",value:a?o.find((function(e){return e.id==a})).description:"BTW geen"})),b.a.createElement("div",{className:"row"},b.a.createElement(K.a,{label:"Twinfield grootboek code",value:n})))))},U=function(e){function t(e){var a;return r()(this,t),a=l()(this,d()(t).call(this,e)),v()(m()(a),"switchToEdit",(function(){a.setState({showEdit:!0})})),v()(m()(a),"switchToView",(function(){a.setState({showEdit:!1,activeDiv:""})})),a.state={showEdit:!1,activeDiv:""},a}return g()(t,e),s()(t,[{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this,t=this.props.meDetails.permissions,a=void 0===t?{}:t;return b.a.createElement("div",{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},this.state.showEdit&&a.manageFinancial?b.a.createElement(H,{ledger:this.props.ledger,vatCodes:this.props.vatCodes,ledgers:this.props.ledgers,switchToView:this.switchToView,updateState:this.props.updateState}):b.a.createElement(Q,T()({},this.props.ledger,{switchToEdit:this.switchToEdit,vatCodes:this.props.vatCodes})))}}]),t}(f.Component),X=Object(S.b)((function(e){return{meDetails:e.meDetails,permissions:e.meDetails.permissions,vatCodes:e.systemData.vatCodes,ledgers:e.systemData.ledgers}}))(U),Y=function(e){function t(e){return r()(this,t),l()(this,d()(t).call(this,e))}return g()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.ledger,a=e.hasError,n=e.isLoading,r=e.updateState,o="",s=!0;return a?o="Fout bij het ophalen van grootboek.":n?o="Gegevens aan het laden.":Object(O.isEmpty)(t)?o="Geen grootboek gevonden!":s=!1,s?b.a.createElement("div",null,o):b.a.createElement("div",null,b.a.createElement(X,{ledger:t,updateState:r}))}}]),t}(f.Component);Y.propTypes={ledger:N.any,hasError:N.any,isLoading:N.any,updateState:N.any};var Z=Y,$=a(203),_=function(e){function t(e){var a;return r()(this,t),a=l()(this,d()(t).call(this,e)),v()(m()(a),"callFetchLedgerDetails",(function(){a.setState({isLoading:!0,hasError:!1}),I.a.fetchLedgerDetails(a.props.params.id).then((function(e){a.setState({isLoading:!1,ledger:e.data.data})})).catch((function(e){a.setState({isLoading:!1,hasError:!0})}))})),v()(m()(a),"deleteLedger",(function(e){I.a.deleteLedger(e).then((function(e){E.f.push("/grootboekrekeningen")})).catch((function(e){a.props.setError(e.response.status,e.response.data.message)}))})),v()(m()(a),"updateState",(function(e){a.setState({ledger:e})})),a.state={ledger:{},isLoading:!1,hasError:!1},a}return g()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.callFetchLedgerDetails()}},{key:"render",value:function(){return b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-9"},b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(V.a,null,b.a.createElement(B.a,{className:"panel-small"},b.a.createElement(k,{description:this.state.ledger.description||"",id:this.state.ledger.id,deleteLedger:this.deleteLedger})))),b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(Z,{ledger:this.state.ledger,isLoading:this.state.isLoading,hasError:this.state.hasError,updateState:this.updateState}))),b.a.createElement("div",{className:"col-md-3"}))}}]),t}(f.Component);t.default=Object(S.b)(null,(function(e){return{setError:function(t,a){e(Object($.b)(t,a))}}}))(_)},682:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),i=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,o=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:o},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},t.a=i},683:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),i=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:s.a.string},t.a=i},684:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),i=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,o=e.type,s=e.value,i=e.loading,l=e.loadText,c=e.disabled;return i?r.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(t),value:s,disabled:i},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",l):r.a.createElement("button",{type:o,className:"btn btn-sm ".concat(t),onClick:n,value:s,disabled:c},a)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:s.a.string,buttonText:s.a.string.isRequired,onClickAction:s.a.func,type:s.a.string,value:s.a.string,loading:s.a.bool,loadText:s.a.string,disabled:s.a.bool},t.a=i},685:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),i=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,o=e.title,s=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:s,title:o},r.a.createElement("span",{className:"glyphicon ".concat(a)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},t.a=i},686:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),i=function(e){var t=e.label,a=e.type,n=e.className,o=e.size,s=e.id,i=e.placeholder,l=e.name,c=e.value,d=e.onClickAction,u=e.onChangeAction,m=e.onBlurAction,p=e.required,g=e.readOnly,h=e.maxLength,v=e.error,f=e.min,b=e.max,E=e.step,y=e.errorMessage,N=e.divSize,C=e.divClassName,w=e.autoComplete;return r.a.createElement("div",{className:"form-group ".concat(N," ").concat(C)},r.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(p)},t),r.a.createElement("div",{className:"".concat(o)},r.a.createElement("input",{type:a,className:"form-control input-sm ".concat(n)+(v?"has-error":""),id:s,placeholder:i,name:l,value:c,onClick:d,onChange:u,onBlur:m,readOnly:g,maxLength:h,min:f,max:b,autoComplete:w,step:E})),v&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",y)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},i.propTypes={label:s.a.oneOfType([s.a.string,s.a.object]).isRequired,type:s.a.string,className:s.a.string,divClassName:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,placeholder:s.a.string,name:s.a.string.isRequired,value:s.a.oneOfType([s.a.string,s.a.number]),onClickAction:s.a.func,onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,maxLength:s.a.string,error:s.a.bool,min:s.a.string,max:s.a.string,step:s.a.string,errorMessage:s.a.string,autoComplete:s.a.string},t.a=i},687:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),s=a(14),i=a.n(s),l=function(e){var t=e.label,a=e.className,n=e.id,s=e.value,i=e.link,l=e.hidden;return i.length>0?r.a.createElement("div",{className:a,style:l?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),r.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},r.a.createElement(o.b,{to:i,className:"link-underline"},s))):r.a.createElement("div",{className:a,style:l?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),r.a.createElement("div",{className:"col-sm-6",id:n},s))};l.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},l.propTypes={label:i.a.oneOfType([i.a.string,i.a.object]).isRequired,className:i.a.string,id:i.a.string,value:i.a.oneOfType([i.a.string,i.a.number]),link:i.a.string,hidden:i.a.bool},t.a=l},688:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),i=function(e){var t=e.label,a=e.className,n=e.size,o=e.id,s=e.name,i=e.value,l=e.options,c=e.onChangeAction,d=e.onBlurAction,u=e.required,m=e.error,p=e.errorMessage,g=e.optionValue,h=e.optionName,v=e.readOnly,f=e.placeholder,b=e.divClassName,E=e.emptyOption;return r.a.createElement("div",{className:"form-group ".concat(n," ").concat(b)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(u)},t),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("select",{className:"form-control input-sm ".concat(a)+(m&&" has-error"),id:o,name:s,value:i,onChange:c,onBlur:d,readOnly:v},E&&r.a.createElement("option",{value:""},f),l.map((function(e){return r.a.createElement("option",{key:e[g],value:e[g]},e[h])})))),m&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",p)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},i.propTypes={label:s.a.string.isRequired,className:s.a.string,size:s.a.string,id:s.a.string,name:s.a.string.isRequired,options:s.a.array,value:s.a.oneOfType([s.a.string,s.a.number]),onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,error:s.a.bool,errorMessage:s.a.string,emptyOption:s.a.bool,optionValue:s.a.string,optionName:s.a.string,placeholder:s.a.string},t.a=i},820:function(e,t,a){"use strict";var n=a(12);t.a={fetchVatCodeDetails:function(e){var t="jory/vat-code/".concat(e);return n.a.get(t,{params:{jory:{fld:["id","startDate","description","percentage","twinfieldCode","twinfieldLedgerCode"]}}})},newVatCode:function(e){return e.jory=JSON.stringify({fld:["id"]}),n.a.post("vat-code",e)},updateVatCode:function(e){var t="".concat("vat-code","/").concat(e.id);return n.a.post(t,e)}}},821:function(e,t,a){"use strict";var n=a(12);a(2);t.a={fetchLedgerDetails:function(e){var t="jory/ledger/".concat(e);return n.a.get(t,{params:{jory:{fld:["id","description","vatCodeId","twinfieldLedgerCode"],rlt:{vatCode:{fld:["id","description"]}}}}})},newLedger:function(e){return e.jory=JSON.stringify({fld:["id"]}),n.a.post("ledger",e)},updateLedger:function(e){var t="".concat("ledger","/").concat(e.id);return n.a.post(t,e)},deleteLedger:function(e){var t="".concat("ledger","/").concat(e,"/delete");return n.a.post(t)}}}}]);