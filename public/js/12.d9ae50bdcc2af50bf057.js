(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1081:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(686),r=t(687),i=t(709);a.a=function(e){var a=e.amountOfLoanNeeded,t=e.minAmountLoan,l=e.maxAmountLoan,c=e.amountDefinitive,s=e.amountGranted,u=e.amountOptioned,d=e.amountInteressed,m=e.handleInputChange,p=a-c;return n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{style:{margin:"10px 0"}}),n.a.createElement("h4",null,"Lening"),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{label:"Lening nodig",name:"amountOfLoanNeeded",value:a,onChangeAction:m}),n.a.createElement(r.a,{label:"Lening interesse",value:Object(i.a)(d),className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{label:"Min. bedrag lening",name:"minAmountLoan",value:t,onChangeAction:m}),n.a.createElement(r.a,{label:"Lening ingeschreven",value:Object(i.a)(u),className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{label:"Max. bedrag lening",name:"maxAmountLoan",value:l,onChangeAction:m}),n.a.createElement(r.a,{label:"Lening toegekend",value:Object(i.a)(s),className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group col-md-6"}),n.a.createElement(r.a,{label:"Lening opgehaald",value:Object(i.a)(c),className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group col-md-6"}),n.a.createElement(r.a,{label:"Lening uit te geven",value:Object(i.a)(p),className:"form-group col-sm-6"})))}},1082:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(686),r=t(692),i=t(709),c=t(687);a.a=function(e){var a=e.participationWorth,t=e.totalParticipations,l=e.participationsDefinitive,s=e.participationsGranted,u=e.participationsOptioned,d=e.participationsInteressed,m=e.powerKwAvailable,p=e.minParticipations,f=e.maxParticipations,g=e.maxParticipationsYouth,b=e.isParticipationTransferable,h=e.valueCourses,v=e.handleInputChange,S=h&&h.find((function(e){return e.active})),y=t-l;return n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{style:{margin:"10px 0"}}),n.a.createElement("h4",null,"Obligatie, Kapitaal of Postcoderoos kapitaal"),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{type:"number",label:"Nominale waarde obligatie",name:"participationWorth",value:a,onChangeAction:v}),n.a.createElement(c.a,{label:"Obligaties interesse",value:d||0,className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(c.a,{label:"Huidige hoofdsom",value:S?Object(i.a)(S.bookWorth):Object(i.a)(0),className:"form-group col-sm-6"}),n.a.createElement(c.a,{label:"Obligaties ingeschreven",value:u||0,className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(c.a,{label:"Huidige overdrachtswaarde",value:S?Object(i.a)(S.transferWorth):Object(i.a)(0),className:"form-group col-sm-6"}),n.a.createElement(c.a,{label:"Obligaties toegekend",value:s||0,className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{type:"number",label:"Aantal obligaties nodig",name:"totalParticipations",value:t,onChangeAction:v}),n.a.createElement(c.a,{label:"Uitgegeven obligaties",value:l||0,className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{type:"number",label:"Min. aantal obligaties p/p",name:"minParticipations",value:p,onChangeAction:v}),n.a.createElement(c.a,{label:"Uit te geven obligaties",value:y||0,className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{type:"number",label:"Max. aantal obligaties p/p",name:"maxParticipations",value:f,onChangeAction:v}),n.a.createElement(o.a,{type:"number",label:"Opgesteld vermogen kWh",name:"powerKwAvailable",value:m,onChangeAction:v})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{type:"number",label:"Max. aantal obligaties jeugd",name:"maxParticipationsYouth",value:g,onChangeAction:v})),n.a.createElement("div",{className:"row"},n.a.createElement(r.a,{label:"Obligaties overdraagbaar",name:"isParticipationTransferable",value:b,onChangeAction:v})))}},1083:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(686),r=t(692),i=t(709),c=t(687);a.a=function(e){var a=e.participationWorth,t=e.totalParticipations,l=e.participationsDefinitive,s=e.participationsGranted,u=e.participationsOptioned,d=e.participationsInteressed,m=e.powerKwAvailable,p=e.minParticipations,f=e.maxParticipations,g=e.maxParticipationsYouth,b=e.isParticipationTransferable,h=e.valueCourses,v=e.handleInputChange,S=h&&h.find((function(e){return e.active})),y=t-l;return n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{style:{margin:"10px 0"}}),n.a.createElement("h4",null,"Participatie, Kapitaal of Postcoderoos kapitaal"),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{type:"number",label:"Nominale waarde participatie",name:"participationWorth",value:a,onChangeAction:v}),n.a.createElement(c.a,{label:"Participaties interesse",value:d||0,className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(c.a,{label:"Huidige boekwaarde",value:S?Object(i.a)(S.bookWorth):Object(i.a)(0),className:"form-group col-sm-6"}),n.a.createElement(c.a,{label:"Participaties ingeschreven",value:u||0,className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(c.a,{label:"Huidige overdrachtswaarde",value:S?Object(i.a)(S.transferWorth):Object(i.a)(0),className:"form-group col-sm-6"}),n.a.createElement(c.a,{label:"Participaties toegekend",value:s||0,className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{type:"number",label:"Aantal participaties nodig",name:"totalParticipations",value:t,onChangeAction:v}),n.a.createElement(c.a,{label:"Uitgegeven participaties",value:l||0,className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{type:"number",label:"Min. aantal participaties p/p",name:"minParticipations",value:p,onChangeAction:v}),n.a.createElement(c.a,{label:"Uit te geven participaties",value:y||0,className:"form-group col-sm-6"})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{type:"number",label:"Max. aantal participaties p/p",name:"maxParticipations",value:f,onChangeAction:v}),n.a.createElement(o.a,{type:"number",label:"Opgesteld vermogen kWh",name:"powerKwAvailable",value:m,onChangeAction:v})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{type:"number",label:"Max. aantal participaties jeugd",name:"maxParticipationsYouth",value:g,onChangeAction:v})),n.a.createElement("div",{className:"row"},n.a.createElement(r.a,{label:"Participaties overdraagbaar",name:"isParticipationTransferable",value:b,onChangeAction:v})))}},1084:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(686);a.a=function(e){var a=e.postalcodeLink,t=e.taxReferral,l=e.eanManager,r=e.ean,i=e.warrantyOrigin,c=e.eanSupply,s=e.handleInputChange;return n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{style:{margin:"10px 0"}}),n.a.createElement("h4",null,"Postcoderoos kapitaal"),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{label:"Postcoderoos",name:"postalcodeLink",value:a,onChangeAction:s}),n.a.createElement(o.a,{label:"Aanwijzing Belastingdienst",name:"taxReferral",value:t,onChangeAction:s})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{label:"EAN Adres installatie",name:"ean",value:r,onChangeAction:s}),n.a.createElement(o.a,{label:"EAN Netbeheer",name:"eanManager",value:l,onChangeAction:s})),n.a.createElement("div",{className:"row"},n.a.createElement(o.a,{label:"EAN afnemer",name:"eanSupply",value:c,onChangeAction:s}),n.a.createElement(o.a,{label:"Garantie van oorsprong (Certiq)",name:"warrantyOrigin",value:i,onChangeAction:s})))}},682:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(14),r=t.n(o),i=function(e){var a=e.children,t=e.className,l=e.onMouseEnter,o=e.onMouseLeave;return n.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:l,onMouseLeave:o},a)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:r.a.string,onMouseEnter:r.a.func,onMouseLeave:r.a.func},a.a=i},683:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(14),r=t.n(o),i=function(e){var a=e.className,t=e.children;return n.a.createElement("div",{className:"panel-body ".concat(a)},t)};i.defaultProps={className:""},i.propTypes={className:r.a.string},a.a=i},684:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(14),r=t.n(o),i=function(e){var a=e.buttonClassName,t=e.buttonText,l=e.onClickAction,o=e.type,r=e.value,i=e.loading,c=e.loadText,s=e.disabled;return i?n.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(a),value:r,disabled:i},n.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",c):n.a.createElement("button",{type:o,className:"btn btn-sm ".concat(a),onClick:l,value:r,disabled:s},t)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:r.a.string,buttonText:r.a.string.isRequired,onClickAction:r.a.func,type:r.a.string,value:r.a.string,loading:r.a.bool,loadText:r.a.string,disabled:r.a.bool},a.a=i},685:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(14),r=t.n(o),i=function(e){var a=e.buttonClassName,t=e.iconName,l=e.onClickAction,o=e.title,r=e.disabled;return n.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:l,disabled:r,title:o},n.a.createElement("span",{className:"glyphicon ".concat(t)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:r.a.string,iconName:r.a.string.isRequired,onClickAction:r.a.func,title:r.a.string,disabled:r.a.bool},a.a=i},686:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(14),r=t.n(o),i=function(e){var a=e.label,t=e.type,l=e.className,o=e.size,r=e.id,i=e.placeholder,c=e.name,s=e.value,u=e.onClickAction,d=e.onChangeAction,m=e.onBlurAction,p=e.required,f=e.readOnly,g=e.maxLength,b=e.error,h=e.min,v=e.max,S=e.step,y=e.errorMessage,x=e.divSize,E=e.divClassName,N=e.autoComplete;return n.a.createElement("div",{className:"form-group ".concat(x," ").concat(E)},n.a.createElement("label",{htmlFor:r,className:"col-sm-6 ".concat(p)},a),n.a.createElement("div",{className:"".concat(o)},n.a.createElement("input",{type:t,className:"form-control input-sm ".concat(l)+(b?"has-error":""),id:r,placeholder:i,name:c,value:s,onClick:u,onChange:d,onBlur:m,readOnly:f,maxLength:g,min:h,max:v,autoComplete:N,step:S})),b&&n.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},n.a.createElement("span",{className:"has-error-message"}," ",y)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},i.propTypes={label:r.a.oneOfType([r.a.string,r.a.object]).isRequired,type:r.a.string,className:r.a.string,divClassName:r.a.string,size:r.a.string,divSize:r.a.string,id:r.a.string,placeholder:r.a.string,name:r.a.string.isRequired,value:r.a.oneOfType([r.a.string,r.a.number]),onClickAction:r.a.func,onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,maxLength:r.a.string,error:r.a.bool,min:r.a.string,max:r.a.string,step:r.a.string,errorMessage:r.a.string,autoComplete:r.a.string},a.a=i},687:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(4),r=t(14),i=t.n(r),c=function(e){var a=e.label,t=e.className,l=e.id,r=e.value,i=e.link;return i.length>0?n.a.createElement("div",{className:t},n.a.createElement("label",{htmlFor:l,className:"col-sm-6"},a),n.a.createElement("div",{className:"col-sm-6",id:l,onClick:null},n.a.createElement(o.b,{to:i,className:"link-underline"},r))):n.a.createElement("div",{className:t},n.a.createElement("label",{htmlFor:l,className:"col-sm-6"},a),n.a.createElement("div",{className:"col-sm-6",id:l},r))};c.defaultProps={className:"col-sm-6",value:"",link:""},c.propTypes={label:i.a.oneOfType([i.a.string,i.a.object]).isRequired,className:i.a.string,id:i.a.string,value:i.a.oneOfType([i.a.string,i.a.number]),link:i.a.string},a.a=c},688:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(14),r=t.n(o),i=function(e){var a=e.label,t=e.className,l=e.size,o=e.id,r=e.name,i=e.value,c=e.options,s=e.onChangeAction,u=e.onBlurAction,d=e.required,m=e.error,p=e.errorMessage,f=e.optionValue,g=e.optionName,b=e.readOnly,h=e.placeholder,v=e.divClassName,S=e.emptyOption;return n.a.createElement("div",{className:"form-group ".concat(l," ").concat(v)},n.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(d)},a),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("select",{className:"form-control input-sm ".concat(t)+(m&&" has-error"),id:o,name:r,value:i,onChange:s,onBlur:u,readOnly:b},S&&n.a.createElement("option",{value:""},h),c.map((function(e){return n.a.createElement("option",{key:e[f],value:e[f]},e[g])})))),m&&n.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},n.a.createElement("span",{className:"has-error-message"}," ",p)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},i.propTypes={label:r.a.string.isRequired,className:r.a.string,size:r.a.string,id:r.a.string,name:r.a.string.isRequired,options:r.a.array,value:r.a.oneOfType([r.a.string,r.a.number]),onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,error:r.a.bool,errorMessage:r.a.string,emptyOption:r.a.bool,optionValue:r.a.string,optionName:r.a.string,placeholder:r.a.string},a.a=i},691:function(e,a,t){"use strict";var l=t(25),n=t.n(l),o=t(24),r=t.n(o),i=t(26),c=t.n(i),s=t(27),u=t.n(s),d=t(21),m=t.n(d),p=t(28),f=t.n(p),g=t(6),b=t.n(g),h=t(0),v=t.n(h),S=t(14),y=t.n(S),x=t(703),E=t.n(x),N=t(704),k=t.n(N),w=t(8),C=t.n(w);C.a.locale("nl");var O=function(e){function a(e){var t;return n()(this,a),t=c()(this,u()(a).call(this,e)),b()(m()(t),"validateDate",(function(e){var a=C()(e.target.value,"DD-MM-YYYY",!0),l=!1;a.isValid()||""===e.target.value||(l=!0),t.props.disabledBefore&&a.isBefore(t.props.disabledBefore)&&(l=!0),t.props.disabledAfter&&a.isAfter(t.props.disabledAfter)&&(l=!0),t.setState({errorDateFormat:l})})),b()(m()(t),"onDateChange",(function(e){var a=e?C()(e).format("Y-MM-DD"):"",l=!1;a&&t.props.disabledBefore&&C()(a).isBefore(t.props.disabledBefore)&&(l=!0),a&&t.props.disabledAfter&&C()(a).isAfter(t.props.disabledAfter)&&(l=!0),t.setState({errorDateFormat:l}),!l&&t.props.onChangeAction(a,t.props.name)})),t.state={errorDateFormat:!1},t}return f()(a,e),r()(a,[{key:"render",value:function(){var e=this.props,a=e.label,t=e.className,l=e.size,n=e.divSize,o=e.id,r=e.value,i=e.required,c=e.readOnly,s=e.name,u=e.error,d=e.errorMessage,m=e.disabledBefore,p=e.disabledAfter,f=r?C()(r).format("L"):"",g={};return m&&(g.before=new Date(m)),p&&(g.after=new Date(p)),v.a.createElement("div",{className:"form-group ".concat(n)},v.a.createElement("div",null,v.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(i)},a)),v.a.createElement("div",{className:"".concat(l)},v.a.createElement(E.a,{id:o,value:f,formatDate:N.formatDate,parseDate:N.parseDate,onDayChange:this.onDateChange,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:k.a,disabledDays:g},inputProps:{className:"form-control input-sm ".concat(t)+(this.state.errorDateFormat||u?" has-error":""),name:s,onBlur:this.validateDate,autoComplete:"off",readOnly:c,disabled:c},required:i,readOnly:c,placeholder:""})),u&&v.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},v.a.createElement("span",{className:"has-error-message"}," ",d)))}}]),a}(h.Component);O.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",readOnly:!1,value:null,error:!1,errorMessage:"",disabledBefore:null,disabledAfter:null},O.propTypes={label:y.a.string.isRequired,type:y.a.string,className:y.a.string,size:y.a.string,divSize:y.a.string,id:y.a.string,name:y.a.string,value:y.a.oneOfType([y.a.string,y.a.object]),onChangeAction:y.a.func,required:y.a.string,readOnly:y.a.bool,error:y.a.bool,errorMessage:y.a.string,disabledBefore:y.a.string,disabledAfter:y.a.string},a.a=O},692:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(14),r=t.n(o),i=t(698),c=t.n(i),s=function(e){var a=e.label,t=e.size,l=e.id,o=e.name,r=e.value,i=e.onChangeAction,s=e.required,u=e.divSize,d=e.className,m=e.disabled;return n.a.createElement("div",{className:"form-group ".concat(u," ").concat(d)},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:l,className:"col-sm-6 ".concat(s)},a)),n.a.createElement("div",{className:"".concat(t)},n.a.createElement(c.a,{id:l,name:o,onChange:i,checked:r,disabled:m})))};s.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",disabled:!1,value:null},s.propTypes={label:r.a.string.isRequired,type:r.a.string,size:r.a.string,divSize:r.a.string,id:r.a.string,name:r.a.string.isRequired,value:r.a.bool,onChangeAction:r.a.func,required:r.a.string,disabled:r.a.bool},a.a=s},695:function(e,a,t){var l=t(697);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(201)(l,n);l.locals&&(e.exports=l.locals)},696:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(14),r=t.n(o),i=function(e){var a=e.className,t=e.children;return n.a.createElement("div",{className:"panel-footer ".concat(a)},t)};i.defaultProps={className:""},i.propTypes={className:r.a.string},a.a=i},697:function(e,a,t){(e.exports=t(200)(!1)).push([e.i,".Select{position:relative}.Select input::-webkit-contacts-auto-fill-button,.Select input::-webkit-credentials-auto-fill-button{display:none!important}.Select input::-ms-clear,.Select input::-ms-reveal{display:none!important}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none;opacity:.35}.Select.is-disabled>.Select-control{background-color:#f9f9f9}.Select.is-disabled>.Select-control:hover{box-shadow:none}.Select.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.Select.is-open>.Select-control .Select-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.Select.is-searchable.is-focused:not(.is-open)>.Select-control,.Select.is-searchable.is-open>.Select-control{cursor:text}.Select.is-focused>.Select-control{background:#fff}.Select.is-focused:not(.is-open)>.Select-control{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1);background:#fff}.Select.has-value.is-clearable.Select--single>.Select-control .Select-value{padding-right:42px}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value .Select-value-label{color:#333}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus{background:#fff}.Select.has-value.is-pseudo-focused .Select-input{opacity:0}.Select.is-open .Select-arrow,.Select .Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}.Select.Select--rtl{direction:rtl;text-align:right}.Select-control{background-color:#fff;border-color:#d9d9d9 #ccc #b3b3b3;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;border-spacing:0;border-collapse:separate;height:36px;outline:none;overflow:hidden;position:relative;width:100%}.Select-control:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.Select-control .Select-input:focus{outline:none;background:#fff}.Select--single>.Select-control .Select-value,.Select-placeholder{bottom:0;color:#aaa;left:0;line-height:34px;padding-left:10px;padding-right:10px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{width:100%;background:none transparent;border:0 none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;line-height:17px;padding:8px 0 12px;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;text-align:center}.Select-loading,.Select-loading-zone{position:relative;vertical-align:middle;width:16px}.Select-loading{-webkit-animation:Select-animation-spin .4s infinite linear;-o-animation:Select-animation-spin .4s infinite linear;animation:Select-animation-spin .4s infinite linear;height:16px;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn .2s;-o-animation:Select-animation-fadeIn .2s;animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:17px}.Select-clear-zone:hover{color:#d0021b}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:25px;padding-right:5px}.Select--rtl .Select-arrow-zone{padding-right:0;padding-left:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0;position:relative}.Select-control>:last-child{padding-right:5px}.Select--multi .Select-multi-value-wrapper{display:inline-block}.Select .Select-aria-only{position:absolute;display:inline-block;height:1px;width:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden;float:left}@-webkit-keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-shadow:0 1px 0 rgba(0,0,0,.06);box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;left:0;top:100%;width:100%;z-index:1;-webkit-overflow-scrolling:touch}.Select-menu{max-height:198px;overflow-y:auto}.Select-option{box-sizing:border-box;background-color:#fff;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.Select-option.is-selected{background-color:#f5faff;background-color:rgba(0,126,255,.04);color:#333}.Select-option.is-focused{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);color:#333}.Select-option.is-disabled{color:#ccc;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.Select--rtl .Select-input{margin-left:0;margin-right:10px}.Select--multi.has-value .Select-input{margin-left:5px}.Select--multi .Select-value{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid #c2e0ff;border:1px solid rgba(0,126,255,.24);color:#007eff;display:inline-block;font-size:.9em;line-height:1.4;margin-left:5px;margin-top:5px;vertical-align:top}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c2e0ff;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px 3px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:#d8eafd;background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:#c2e0ff;background-color:rgba(0,126,255,.24)}.Select--multi.Select--rtl .Select-value{margin-left:0;margin-right:5px}.Select--multi.Select--rtl .Select-value-icon{border-right:none;border-left:1px solid #c2e0ff;border-left:1px solid rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn)}}",""])},698:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},n=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),o=t(0),r=m(o),i=m(t(699)),c=m(t(14)),s=m(t(700)),u=m(t(701)),d=t(702);function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.handleClick=t.handleClick.bind(t),t.handleTouchStart=t.handleTouchStart.bind(t),t.handleTouchMove=t.handleTouchMove.bind(t),t.handleTouchEnd=t.handleTouchEnd.bind(t),t.handleFocus=t.handleFocus.bind(t),t.handleBlur=t.handleBlur.bind(t),t.previouslyChecked=!(!e.checked&&!e.defaultChecked),t.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},t}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var a=this.input;if(e.target!==a&&!this.moved)return this.previouslyChecked=a.checked,e.preventDefault(),a.focus(),void a.click();var t=this.props.hasOwnProperty("checked")?this.props.checked:a.checked;this.setState({checked:t})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var a=(0,d.pointerCoord)(e).x;this.state.checked&&a+15<this.startX?(this.setState({checked:!1}),this.startX=a,this.activated=!0):a-15>this.startX&&(this.setState({checked:!0}),this.startX=a,this.activated=a<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var a=this.input;if(e.preventDefault(),this.startX){var t=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>t?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,a.click()):this.startX-4<t&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,a.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var a=this.props.onFocus;a&&a(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var a=this.props.onBlur;a&&a(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var t=this.props.icons;return t?void 0===t[e]?a.defaultProps.icons[e]:t[e]:null}},{key:"render",value:function(){var e=this,a=this.props,t=a.className,n=(a.icons,function(e,a){var t={};for(var l in e)a.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t}(a,["className","icons"])),o=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},t);return r.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},r.default.createElement("div",{className:"react-toggle-track"},r.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),r.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),r.default.createElement("div",{className:"react-toggle-thumb"}),r.default.createElement("input",l({},n,{ref:function(a){e.input=a},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),a}(o.PureComponent);a.default=p,p.displayName="Toggle",p.defaultProps={icons:{checked:r.default.createElement(s.default,null),unchecked:r.default.createElement(u.default,null)}},p.propTypes={checked:c.default.bool,disabled:c.default.bool,defaultChecked:c.default.bool,onChange:c.default.func,onFocus:c.default.func,onBlur:c.default.func,className:c.default.string,name:c.default.string,value:c.default.string,id:c.default.string,"aria-labelledby":c.default.string,"aria-label":c.default.string,icons:c.default.oneOfType([c.default.bool,c.default.shape({checked:c.default.node,unchecked:c.default.node})])}},700:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l,n=t(0),o=(l=n)&&l.__esModule?l:{default:l};a.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},701:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l,n=t(0),o=(l=n)&&l.__esModule?l:{default:l};a.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},702:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.pointerCoord=function(e){if(e){var a=e.changedTouches;if(a&&a.length>0){var t=a[0];return{x:t.clientX,y:t.clientY}}var l=e.pageX;if(void 0!==l)return{x:l,y:e.pageY}}return{x:0,y:0}}},709:function(e,a,t){"use strict";a.a=function(e){return e||(e=0),e=parseFloat(e),isNaN(e)?"Ongeldig bedrag":"€ ".concat(e.toLocaleString("nl",{minimumFractionDigits:2,maximumFractionDigits:2}))}},718:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(14),r=t.n(o),i=t(708),c=(t(695),function(e){var a=e.label,t=(e.className,e.size),l=e.id,o=e.name,r=e.value,c=e.options,s=e.optionId,u=e.optionName,d=e.onChangeAction,m=e.required,p=e.multi,f=e.error;return n.a.createElement("div",{className:"form-group col-sm-6"},n.a.createElement("label",{htmlFor:l,className:"col-sm-6 ".concat(m)},a),n.a.createElement("div",{className:"".concat(t)},n.a.createElement(i.default,{id:l,name:o,value:r,onChange:d,options:c,valueKey:s,labelKey:u,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:p,simpleValue:!0,removeSelected:!0,className:f?" has-error":""})))});c.defaultProps={className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0},c.propTypes={label:r.a.string.isRequired,className:r.a.string,size:r.a.string,id:r.a.string,name:r.a.string.isRequired,options:r.a.array,optionId:r.a.string,optionName:r.a.string,value:r.a.string,onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,error:r.a.bool,multi:r.a.bool},a.a=c}}]);