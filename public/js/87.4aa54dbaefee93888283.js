(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1605:function(e,a,t){"use strict";t.r(a);var n=t(25),r=t.n(n),o=t(24),i=t.n(o),l=t(26),s=t.n(l),c=t(27),m=t.n(c),d=t(28),u=t.n(d),p=t(0),h=t.n(p),g=t(21),f=t.n(g),v=t(6),b=t.n(v),y=t(4),C=t(689),N=t.n(C),E=t(743),I=t(686),T=t(684),A=t(683),O=t(682),k=t(90),S=t(33),M=t(688),q=t(100),D=t(101),R=t(702),x=t(691),P=t(8),w=t.n(P);function B(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?B(Object(t),!0).forEach((function(a){b()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var F=function(e){function a(e){var t;return r()(this,a),t=s()(this,m()(a).call(this,e)),b()(f()(t),"handleInputChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;t.setState({order:L({},t.state.order,b()({},r,n))})})),b()(f()(t),"handleInputChangeAdministration",(function(e){var a,n=e.target,r="checkbox"===n.type?n.checked:n.value;a=(a=t.props.administrations.filter((function(e){return e.id==r})))[0],t.setState({order:L({},t.state.order,{administrationId:a.id,emailTemplateIdCollection:a.emailTemplateIdCollection?a.emailTemplateIdCollection:"",emailTemplateIdTransfer:a.emailTemplateIdTransfer?a.emailTemplateIdTransfer:"",emailTemplateReminderId:a.emailTemplateReminderId?a.emailTemplateReminderId:"",emailTemplateExhortationId:a.emailTemplateExhortationId?a.emailTemplateExhortationId:""})})})),b()(f()(t),"handleInputChangeParticipation",(function(e){var a,n=e.target,r="checkbox"===n.type?n.checked:n.value;a=(a=t.state.participations.filter((function(e){return e.id==r})))[0],t.setState({order:L({},t.state.order,{participationId:a.id})})})),b()(f()(t),"handleInputChangeDate",(function(e,a){t.setState({order:L({},t.state.order,b()({},a,e))})})),b()(f()(t),"handleInputChangeInvoiceDate",(function(e,a){t.setState({order:L({},t.state.order,b()({},a,e))},t.checkContactCollectMandate)})),b()(f()(t),"checkContactCollectMandate",(function(){var e=t.state.order.paymentTypeId,a=t.state.order.dateNextInvoice,n=t.state.contactCollectMandateFirstRun,r=t.state.contactCollectMandate,o=1==r;r&&n>a&&(o=!1),e=o?"collection":"transfer",t.setState({collectMandateActive:o,order:L({},t.state.order,{paymentTypeId:e})})})),b()(f()(t),"handleSubmit",(function(e){e.preventDefault();var a=t.state.order,n={},r=!1;N.a.isEmpty(a.contactId+"")&&(n.contactId=!0,r=!0),N.a.isEmpty(a.administrationId+"")&&(n.administrationId=!0,r=!0),N.a.isEmpty(a.paymentTypeId+"")&&(n.paymentTypeId=!0,r=!0),N.a.isEmpty(a.statusId+"")&&(n.statusId=!0,r=!0),N.a.isEmpty(a.subject+"")&&(n.subject=!0,r=!0),null===a.IBAN||N.a.isEmpty(a.IBAN+"")||E.isValidIBAN(a.IBAN)||(n.IBAN=!0,r=!0),t.setState({errors:n}),r||k.a.newOrder(a).then((function(e){y.f.push("/order/".concat(e.data.id))})).catch((function(e){console.log(e)}))})),t.state={contacts:[],emailTemplates:[],participations:[],contactPerson:"",contactEmail:"",contactCollectMandate:!1,contactCollectMandateFirstRun:null,collectMandateActive:!1,order:{contactId:e.contactId||"",administrationId:"",statusId:"concept",subject:"",participationId:"",emailTemplateIdCollection:"",emailTemplateIdTransfer:"",emailTemplateReminderId:"",emailTemplateExhortationId:"",paymentTypeId:"",collectionFrequencyId:"once",IBAN:"",ibanAttn:"",poNumber:"",invoiceText:"",dateRequested:w()().format("YYYY-MM-DD"),dateStart:"",dateEnd:"",dateNextInvoice:w()().format("YYYY-MM-DD")},errors:{contactId:!1,administrationId:!1,statusId:!1,subject:!1,IBAN:!1},peekLoading:{contacts:!0,emailTemplates:!0}},t.handleReactSelectChange=t.handleReactSelectChange.bind(f()(t)),t.handleReactSelectContactIdChange=t.handleReactSelectContactIdChange.bind(f()(t)),t}return u()(a,e),i()(a,[{key:"componentDidMount",value:function(){var e=this;q.a.getContactsPeek().then((function(a){e.setState({contacts:a,peekLoading:L({},e.state.peekLoading,{contacts:!1})})})),this.state.order.contactId&&k.a.fetchContactInfoForOrder(this.state.order.contactId).then((function(a){e.setState({contactPerson:a.data.contactPerson,contactEmail:a.data.email,contactCollectMandate:a.data.collectMandate,contactCollectMandateFirstRun:a.data.collectMandateFirstRun,participations:a.data.participations},e.checkContactCollectMandate)})),D.a.fetchEmailTemplatesPeek().then((function(a){e.setState({emailTemplates:a,peekLoading:L({},e.state.peekLoading,{emailTemplates:!1})})}))}},{key:"handleReactSelectContactIdChange",value:function(e,a){var t=this;k.a.fetchContactInfoForOrder(e).then((function(n){t.setState({contactPerson:n.data.contactPerson,contactEmail:n.data.email,contactCollectMandate:n.data.collectMandate,contactCollectMandateFirstRun:n.data.collectMandateFirstRun,participations:n.data.participations,order:L({},t.state.order,b()({},a,e))},t.checkContactCollectMandate)}))}},{key:"handleReactSelectChange",value:function(e,a){this.setState({order:L({},this.state.order,b()({},a,e))})}},{key:"render",value:function(){var e=this.state.order,a=e.contactId,t=e.administrationId,n=e.statusId,r=e.subject,o=e.participationId,i=e.emailTemplateIdCollection,l=e.emailTemplateIdTransfer,s=e.emailTemplateReminderId,c=e.emailTemplateExhortationId,m=e.paymentTypeId,d=e.collectionFrequencyId,u=e.poNumber,p=e.invoiceText,g=e.dateRequested,f=e.dateNextInvoice;return h.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},h.a.createElement(O.a,null,h.a.createElement(A.a,null,h.a.createElement("div",{className:"row"},h.a.createElement(R.a,{label:"Order op naam van",name:"contactId",options:this.state.contacts,value:a,onChangeAction:this.handleReactSelectContactIdChange,optionName:"fullName",isLoading:this.state.peekLoading.contacts,multi:!1,error:this.state.errors.contactId}),h.a.createElement(M.a,{label:"Administratie",id:"administrationId",name:"administrationId",options:this.props.administrations,value:t,onChangeAction:this.handleInputChangeAdministration,required:"required",error:this.state.errors.administrationId})),h.a.createElement("div",{className:"row"},h.a.createElement(I.a,{label:"Contact persoon",value:this.state.contactPerson,name:"contactPerson",readOnly:!0}),h.a.createElement(I.a,{label:"Nota wordt gemaild naar",value:this.state.contactEmail,name:"contactEmail",readOnly:!0})),h.a.createElement("div",{className:"row"},h.a.createElement(M.a,{label:"Deelname",id:"ParticipationId",name:"ParticipationId",options:this.state.participations,value:o,onChangeAction:this.handleInputChangeParticipation,optionValue:"id",optionName:"project_name"}),h.a.createElement(I.a,{label:"Betreft",name:"subject",value:r,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.subject})),h.a.createElement("div",{className:"row"},h.a.createElement(R.a,{label:"E-mail template nota incasso",name:"emailTemplateIdCollection",options:this.state.emailTemplates,value:i,onChangeAction:this.handleReactSelectChange,isLoading:this.state.peekLoading.emailTemplates,multi:!1}),h.a.createElement(M.a,{label:"Betaalwijze",id:"paymentTypeId",name:"paymentTypeId",options:this.state.collectMandateActive?this.props.orderPaymentTypes:this.props.orderPaymentTypes.filter((function(e){return"transfer"===e.id})),emptyOption:!1,value:m,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.paymentTypeId})),h.a.createElement("div",{className:"row"},h.a.createElement(R.a,{label:"E-mail template nota overboeken",name:"emailTemplateIdTransfer",options:this.state.emailTemplates,value:l,onChangeAction:this.handleReactSelectChange,isLoading:this.state.peekLoading.emailTemplates,multi:!1}),h.a.createElement(M.a,{label:"Nota frequentie",id:"collectionFrequencyId",name:"collectionFrequencyId",options:this.props.orderCollectionFrequencies,value:d,onChangeAction:this.handleInputChange,emptyOption:!1})),h.a.createElement("div",{className:"row"},h.a.createElement(R.a,{label:"E-mail template herinnering",name:"emailTemplateReminderId",options:this.state.emailTemplates,value:s,onChangeAction:this.handleReactSelectChange,isLoading:this.state.peekLoading.emailTemplates,multi:!1}),h.a.createElement(M.a,{label:"Status",id:"statusId",name:"statusId",options:this.props.orderStatuses,value:n,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.statusId})),h.a.createElement("div",{className:"row"},h.a.createElement(R.a,{label:"E-mail template aanmaning",name:"emailTemplateExhortationId",options:this.state.emailTemplates,value:c,onChangeAction:this.handleReactSelectChange,isLoading:this.state.peekLoading.emailTemplates,multi:!1}),h.a.createElement(I.a,{label:"Opdracht nummer klant",name:"poNumber",value:u,onChangeAction:this.handleInputChange})),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"form-group col-sm-12"},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-sm-3"},h.a.createElement("label",{htmlFor:"invoiceText",className:"col-sm-12"},"Opmerking")),h.a.createElement("div",{className:"col-sm-8"},h.a.createElement("textarea",{name:"invoiceText",value:p,onChange:this.handleInputChange,className:"form-control input-sm"}))))),h.a.createElement("div",{className:"row"},h.a.createElement(x.a,{label:"Aanvraag datum",name:"dateRequested",value:g,onChangeAction:this.handleInputChangeDate}),h.a.createElement(x.a,{label:"Volgende nota datum",name:"dateNextInvoice",value:f,onChangeAction:this.handleInputChangeInvoiceDate}))),h.a.createElement(A.a,null,h.a.createElement("div",{className:"pull-right btn-group",role:"group"},h.a.createElement(T.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"})))))}}]),a}(p.Component),j=Object(S.b)((function(e){return{orderStatuses:e.systemData.orderStatuses,orderPaymentTypes:e.systemData.orderPaymentTypes,orderCollectionFrequencies:e.systemData.orderCollectionFrequencies,administrations:e.meDetails.administrations}}))(F),z=t(685),Y=function(){return h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-4"},h.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},h.a.createElement(z.a,{iconName:"glyphicon-arrow-left",onClickAction:y.e.goBack}))),h.a.createElement("div",{className:"col-md-4"},h.a.createElement("h4",{className:"text-center margin-small"},"Nieuwe order")),h.a.createElement("div",{className:"col-md-4"}))},V=function(e){function a(e){return r()(this,a),s()(this,m()(a).call(this,e))}return u()(a,e),i()(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-9"},h.a.createElement("div",{className:"col-md-12 margin-10-top"},h.a.createElement(O.a,null,h.a.createElement(A.a,{className:"panel-small"},h.a.createElement(Y,null)))),h.a.createElement("div",{className:"col-md-12 margin-10-top"},h.a.createElement(j,{contactId:this.props.params.contactId}))),h.a.createElement("div",{className:"col-md-3"}))}}]),a}(p.Component);a.default=V},682:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),i=t.n(o),l=function(e){var a=e.children,t=e.className,n=e.onMouseEnter,o=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:n,onMouseLeave:o},a)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:i.a.string,onMouseEnter:i.a.func,onMouseLeave:i.a.func},a.a=l},683:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),i=t.n(o),l=function(e){var a=e.className,t=e.children;return r.a.createElement("div",{className:"panel-body ".concat(a)},t)};l.defaultProps={className:""},l.propTypes={className:i.a.string},a.a=l},684:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),i=t.n(o),l=function(e){var a=e.buttonClassName,t=e.buttonText,n=e.onClickAction,o=e.type,i=e.value,l=e.loading,s=e.loadText,c=e.disabled;return l?r.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(a),value:i,disabled:l},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",s):r.a.createElement("button",{type:o,className:"btn btn-sm ".concat(a),onClick:n,value:i,disabled:c},t)};l.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},l.propTypes={buttonClassName:i.a.string,buttonText:i.a.string.isRequired,onClickAction:i.a.func,type:i.a.string,value:i.a.string,loading:i.a.bool,loadText:i.a.string,disabled:i.a.bool},a.a=l},685:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),i=t.n(o),l=function(e){var a=e.buttonClassName,t=e.iconName,n=e.onClickAction,o=e.title,i=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:n,disabled:i,title:o},r.a.createElement("span",{className:"glyphicon ".concat(t)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:i.a.string,iconName:i.a.string.isRequired,onClickAction:i.a.func,title:i.a.string,disabled:i.a.bool},a.a=l},686:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),i=t.n(o),l=function(e){var a=e.label,t=e.type,n=e.className,o=e.size,i=e.id,l=e.placeholder,s=e.name,c=e.value,m=e.onClickAction,d=e.onChangeAction,u=e.onBlurAction,p=e.required,h=e.readOnly,g=e.maxLength,f=e.error,v=e.min,b=e.max,y=e.step,C=e.errorMessage,N=e.divSize,E=e.divClassName,I=e.autoComplete;return r.a.createElement("div",{className:"form-group ".concat(N," ").concat(E)},r.a.createElement("label",{htmlFor:i,className:"col-sm-6 ".concat(p)},a),r.a.createElement("div",{className:"".concat(o)},r.a.createElement("input",{type:t,className:"form-control input-sm ".concat(n)+(f?"has-error":""),id:i,placeholder:l,name:s,value:c,onClick:m,onChange:d,onBlur:u,readOnly:h,maxLength:g,min:v,max:b,autoComplete:I,step:y})),f&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",C)))};l.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},l.propTypes={label:i.a.oneOfType([i.a.string,i.a.object]).isRequired,type:i.a.string,className:i.a.string,divClassName:i.a.string,size:i.a.string,divSize:i.a.string,id:i.a.string,placeholder:i.a.string,name:i.a.string.isRequired,value:i.a.oneOfType([i.a.string,i.a.number]),onClickAction:i.a.func,onChangeAction:i.a.func,onBlurAction:i.a.func,required:i.a.string,readOnly:i.a.bool,maxLength:i.a.string,error:i.a.bool,min:i.a.string,max:i.a.string,step:i.a.string,errorMessage:i.a.string,autoComplete:i.a.string},a.a=l},688:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),i=t.n(o),l=function(e){var a=e.label,t=e.className,n=e.size,o=e.id,i=e.name,l=e.value,s=e.options,c=e.onChangeAction,m=e.onBlurAction,d=e.required,u=e.error,p=e.errorMessage,h=e.optionValue,g=e.optionName,f=e.readOnly,v=e.placeholder,b=e.divClassName,y=e.emptyOption;return r.a.createElement("div",{className:"form-group ".concat(n," ").concat(b)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(d)},a),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("select",{className:"form-control input-sm ".concat(t)+(u&&" has-error"),id:o,name:i,value:l,onChange:c,onBlur:m,readOnly:f},y&&r.a.createElement("option",{value:""},v),s.map((function(e){return r.a.createElement("option",{key:e[h],value:e[h]},e[g])})))),u&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",p)))};l.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},l.propTypes={label:i.a.string.isRequired,className:i.a.string,size:i.a.string,id:i.a.string,name:i.a.string.isRequired,options:i.a.array,value:i.a.oneOfType([i.a.string,i.a.number]),onChangeAction:i.a.func,onBlurAction:i.a.func,required:i.a.string,readOnly:i.a.bool,error:i.a.bool,errorMessage:i.a.string,emptyOption:i.a.bool,optionValue:i.a.string,optionName:i.a.string,placeholder:i.a.string},a.a=l},691:function(e,a,t){"use strict";var n=t(25),r=t.n(n),o=t(24),i=t.n(o),l=t(26),s=t.n(l),c=t(27),m=t.n(c),d=t(21),u=t.n(d),p=t(28),h=t.n(p),g=t(6),f=t.n(g),v=t(0),b=t.n(v),y=t(14),C=t.n(y),N=t(700),E=t.n(N),I=t(701),T=t.n(I),A=t(8),O=t.n(A);O.a.locale("nl");var k=function(e){function a(e){var t;return r()(this,a),t=s()(this,m()(a).call(this,e)),f()(u()(t),"validateDate",(function(e){var a=O()(e.target.value,"DD-MM-YYYY",!0),n=!1;a.isValid()||""===e.target.value||(n=!0),t.props.disabledBefore&&a.isBefore(t.props.disabledBefore)&&(n=!0),t.props.disabledAfter&&a.isAfter(t.props.disabledAfter)&&(n=!0),t.setState({errorDateFormat:n})})),f()(u()(t),"onDateChange",(function(e){var a=e?O()(e).format("Y-MM-DD"):"",n=!1;a&&t.props.disabledBefore&&O()(a).isBefore(t.props.disabledBefore)&&(n=!0),a&&t.props.disabledAfter&&O()(a).isAfter(t.props.disabledAfter)&&(n=!0),t.setState({errorDateFormat:n}),!n&&t.props.onChangeAction(a,t.props.name)})),t.state={errorDateFormat:!1},t}return h()(a,e),i()(a,[{key:"render",value:function(){var e=this.props,a=e.label,t=e.className,n=e.size,r=e.divSize,o=e.id,i=e.value,l=e.required,s=e.readOnly,c=e.name,m=e.error,d=e.errorMessage,u=e.disabledBefore,p=e.disabledAfter,h=i?O()(i).format("L"):"",g={};return u&&(g.before=new Date(u)),p&&(g.after=new Date(p)),b.a.createElement("div",{className:"form-group ".concat(r)},b.a.createElement("div",null,b.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(l)},a)),b.a.createElement("div",{className:"".concat(n)},b.a.createElement(E.a,{id:o,value:h,formatDate:I.formatDate,parseDate:I.parseDate,onDayChange:this.onDateChange,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:T.a,disabledDays:g},inputProps:{className:"form-control input-sm ".concat(t)+(this.state.errorDateFormat||m?" has-error":""),name:c,onBlur:this.validateDate,autoComplete:"off",readOnly:s,disabled:s},required:l,readOnly:s,placeholder:""})),m&&b.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},b.a.createElement("span",{className:"has-error-message"}," ",d)))}}]),a}(v.Component);k.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",readOnly:!1,value:null,error:!1,errorMessage:"",disabledBefore:null,disabledAfter:null},k.propTypes={label:C.a.string.isRequired,type:C.a.string,className:C.a.string,size:C.a.string,divSize:C.a.string,id:C.a.string,name:C.a.string,value:C.a.oneOfType([C.a.string,C.a.object]),onChangeAction:C.a.func,required:C.a.string,readOnly:C.a.bool,error:C.a.bool,errorMessage:C.a.string,disabledBefore:C.a.string,disabledAfter:C.a.string},a.a=k},702:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(14),i=t.n(o),l=t(707),s=(t(708),function(e){var a=e.label,t=e.divSize,n=e.size,o=e.id,i=e.name,s=e.value,c=e.options,m=e.optionId,d=e.optionName,u=e.onChangeAction,p=e.required,h=e.multi,g=e.error,f=e.isLoading;return r.a.createElement("div",{className:"form-group ".concat(t)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(p)},a),r.a.createElement("div",{className:"".concat(n)},r.a.createElement(l.a,{id:o,name:i,value:s,onChange:function(e){u(e||"",i)},options:c,valueKey:m,labelKey:d,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:h,simpleValue:!0,removeSelected:!0,className:g?" has-error":"",isLoading:f})))});s.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0,isLoading:!1},s.propTypes={label:i.a.string.isRequired,className:i.a.string,size:i.a.string,divSize:i.a.string,id:i.a.string,name:i.a.string.isRequired,options:i.a.array.isRequired,optionId:i.a.string,optionName:i.a.string,value:i.a.oneOfType([i.a.string,i.a.number]),onChangeAction:i.a.func,onBlurAction:i.a.func,required:i.a.string,readOnly:i.a.bool,error:i.a.bool,multi:i.a.bool,isLoading:i.a.bool},a.a=s}}]);