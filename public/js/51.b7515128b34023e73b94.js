(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1596:function(e,t,a){"use strict";a.r(t);var l=a(25),n=a.n(l),o=a(24),i=a.n(o),r=a(26),c=a.n(r),s=a(27),u=a.n(s),d=a(21),p=a.n(d),m=a(28),f=a.n(m),h=a(6),b=a.n(h),v=a(0),g=a.n(v),S=a(4),y=a(685),k=function(e){var t=e.name;return g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-4"},g.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},g.a.createElement(y.a,{iconName:"glyphicon-arrow-left",onClickAction:S.e.goBack}))),g.a.createElement("div",{className:"col-md-4"},g.a.createElement("h4",{className:"text-center"},"Kans status: ",t)),g.a.createElement("div",{className:"col-md-4"}))},x=a(198),E=a(197),w=a.n(E),N=a(33),O=a(8),T=a.n(O),C=a(686),z=a(684),j=a(682),D=a(683),P=a(12),L={fld:["id","name","usesWf","emailTemplateIdWf","numberOfDaysToSendEmail"],rlt:{emailTemplateWorkflow:[]}},M=function(e){var t="jory/opportunity-status/".concat(e);return P.a.get(t,{params:{jory:L}})},A=function(e){var t="".concat("opportunity-status","/").concat(e.id);return P.a.post(t,e,{params:{jory:L}})},q=a(15),F=a(202),I=a(692),_=a(705),W=a(687),R=a(101),B=a(689),X=a.n(B);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){b()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}T.a.locale("nl");var J=function(e){function t(e){var a;return n()(this,t),a=c()(this,u()(t).call(this,e)),b()(p()(a),"handleInputChange",(function(e){var t=e.target,l="checkbox"===t.type?t.checked:t.value,n=t.name;a.setState(G({},a.state,{opportunityStatus:G({},a.state.opportunityStatus,b()({},n,l))}))})),b()(p()(a),"handleSubmit",(function(e){e.preventDefault();var t=a.state.opportunityStatus,l={},n=!1;1==t.usesWf&&(t.emailTemplateIdWf||(l.emailTemplateIdWf=!0,n=!0),X.a.isEmpty(t.numberOfDaysToSendEmail.toString())&&(l.numberOfDaysToSendEmail=!0,n=!0)),a.setState(G({},a.state,{errors:l})),!n&&A(t).then((function(e){a.props.updateState(e.data.data),a.props.fetchSystemData(),a.props.switchToView()})).catch((function(e){alert("Er is iets misgegaan bij opslaan. Herlaad de pagina en probeer het nogmaals.")}))})),a.state={emailTemplates:[],opportunityStatus:G({},e.opportunityStatus),errors:{usesWf:!1,emailTemplateIdWf:!1,numberOfDaysToSendEmail:!1},peekLoading:{emailTemplates:!0}},a.handleReactSelectChange=a.handleReactSelectChange.bind(p()(a)),a}return f()(t,e),i()(t,[{key:"handleReactSelectChange",value:function(e,t){this.setState(G({},this.state,{opportunityStatus:G({},this.state.opportunityStatus,b()({},t,e))}))}},{key:"componentDidMount",value:function(){var e=this;R.a.fetchEmailTemplatesPeek().then((function(t){return e.setState({emailTemplates:t,peekLoading:G({},e.state.peekLoading,{emailTemplates:!1})})}))}},{key:"render",value:function(){var e=this.state.opportunityStatus,t=e.name,a=e.usesWf,l=e.emailTemplateIdWf,n=e.numberOfDaysToSendEmail;return g.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},g.a.createElement(j.a,null,g.a.createElement(D.a,null,g.a.createElement("div",{className:"row"},g.a.createElement(W.a,{label:"Omschrijving",divSize:"col-sm-10",value:t,className:"col-sm-10 form-group"})),g.a.createElement("div",{className:"row"},g.a.createElement(I.a,{label:"Gebruikt workflow email bij deze status",divSize:"col-sm-10",name:"usesWf",value:a,onChangeAction:this.handleInputChange})),1==a&&g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:"row"},g.a.createElement(W.a,{label:"Uitleg workflow",divSize:"col-sm-10",value:this.props.explanationWf,className:"col-sm-10 form-group"})),g.a.createElement("div",{className:"row"},g.a.createElement(_.a,{label:"Template email bij deze status",divSize:"col-sm-10",name:"emailTemplateIdWf",options:this.state.emailTemplates,value:l,onChangeAction:this.handleReactSelectChange,isLoading:this.state.peekLoading.emailTemplates,multi:!1,required:"required",error:this.state.errors.emailTemplateIdWf})),g.a.createElement("div",{className:"row"},g.a.createElement(C.a,{label:"Aantal dagen email na deze status",divSize:"col-sm-10",type:"number",min:"1",id:"numberOfDaysToSendEmail",name:"numberOfDaysToSendEmail",value:n,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.numberOfDaysToSendEmail})))),g.a.createElement(D.a,null,g.a.createElement("div",{className:"pull-right btn-group",role:"group"},g.a.createElement(z.a,{buttonClassName:"btn-default",buttonText:"Sluiten",onClickAction:this.props.switchToView}),g.a.createElement(z.a,{buttonText:"Opslaan",type:"submit",value:"Submit"})))))}}]),t}(v.Component),K=Object(N.b)(null,(function(e){return Object(q.b)({fetchSystemData:F.a},e)}))(J),U=function(e){var t=e.name,a=e.usesWf,l=e.emailTemplateWorkflow,n=e.numberOfDaysToSendEmail,o=e.switchToEdit,i=e.explanationWf;return g.a.createElement("div",{onClick:o},g.a.createElement(j.a,null,g.a.createElement(D.a,null,g.a.createElement("div",{className:"row"},g.a.createElement(W.a,{label:"Omschrijving",divSize:"col-sm-10",value:t,className:"col-sm-10 form-group"})),g.a.createElement("div",{className:"row"},g.a.createElement(W.a,{label:"Gebruikt workflow bij deze status",divSize:"col-sm-10",value:a?"Ja":"Nee",className:"col-sm-10 form-group"})),1==a&&g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:"row"},g.a.createElement(W.a,{label:"Uitleg workflow",divSize:"col-sm-10",value:i,className:"col-sm-10 form-group"})),g.a.createElement("div",{className:"row"},g.a.createElement(W.a,{label:"Template email bij deze status",divSize:"col-sm-10",value:l?l.name:"",className:"col-sm-10 form-group"})),g.a.createElement("div",{className:"row"},g.a.createElement(W.a,{label:"Aantal dagen email na deze status",divSize:"col-sm-10",value:n,className:"col-sm-10 form-group"}))))))},Y=function(e){function t(e){var a;return n()(this,t),a=c()(this,u()(t).call(this,e)),b()(p()(a),"switchToEdit",(function(){a.setState({showEdit:!0})})),b()(p()(a),"switchToView",(function(){a.setState({showEdit:!1,activeDiv:""})})),a.state={showEdit:!1,activeDiv:""},a}return f()(t,e),i()(t,[{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this,t=this.props.meDetails.permissions,a=void 0===t?{}:t,l=g.a.createElement("span",null,"Als gebruik workflow bij deze status is aangezet, dan zal er automatisch eenmalig een email verstuurd gaan worden naar contact als kans op deze status is gezet.",g.a.createElement("br",null),"De verzenddatum wordt dan bepaald, rekening houdend met het opgegeven aantal dagen.");return g.a.createElement("div",{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},this.state.showEdit&&a.manageFinancial?g.a.createElement(K,{opportunityStatus:this.props.opportunityStatus,switchToView:this.switchToView,updateState:this.props.updateState,explanationWf:l}):g.a.createElement(U,w()({},this.props.opportunityStatus,{switchToEdit:this.switchToEdit,explanationWf:l})))}}]),t}(v.Component),H=Object(N.b)((function(e){return{meDetails:e.meDetails,permissions:e.meDetails.permissions}}))(Y),Q=function(e){var t=e.opportunityStatus,a=e.hasError,l=e.isLoading,n=e.updateState,o="",i=!0;return a?o="Fout bij het ophalen van kans status.":l?o="Gegevens aan het laden.":Object(x.isEmpty)(t)?o="Geen kans status gevonden!":i=!1,i?g.a.createElement("div",null,o):g.a.createElement("div",null,g.a.createElement(H,{opportunityStatus:t,updateState:n}))};function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){b()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ee=function(e){function t(e){var a;return n()(this,t),a=c()(this,u()(t).call(this,e)),b()(p()(a),"callFetchOpportunityStatusDetails",(function(){a.setState({isLoading:!0,hasError:!1}),M(a.props.params.id).then((function(e){a.setState({isLoading:!1,opportunityStatus:$({},e.data.data)})})).catch((function(e){a.setState({isLoading:!1,hasError:!0})}))})),b()(p()(a),"updateState",(function(e){a.setState({opportunityStatus:e})})),a.state={opportunityStatus:{},isLoading:!1,hasError:!1},a}return f()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.callFetchOpportunityStatusDetails()}},{key:"render",value:function(){return g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-9"},g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(j.a,null,g.a.createElement(D.a,{className:"panel-small"},g.a.createElement(k,{name:this.state.opportunityStatus.name||""})))),g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(Q,{opportunityStatus:this.state.opportunityStatus,isLoading:this.state.isLoading,hasError:this.state.hasError,updateState:this.updateState}))),g.a.createElement("div",{className:"col-md-3"}))}}]),t}(v.Component);t.default=ee},682:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(14),i=a.n(o),r=function(e){var t=e.children,a=e.className,l=e.onMouseEnter,o=e.onMouseLeave;return n.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:l,onMouseLeave:o},t)};r.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},r.propTypes={className:i.a.string,onMouseEnter:i.a.func,onMouseLeave:i.a.func},t.a=r},683:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(14),i=a.n(o),r=function(e){var t=e.className,a=e.children;return n.a.createElement("div",{className:"panel-body ".concat(t)},a)};r.defaultProps={className:""},r.propTypes={className:i.a.string},t.a=r},684:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(14),i=a.n(o),r=function(e){var t=e.buttonClassName,a=e.buttonText,l=e.onClickAction,o=e.type,i=e.value,r=e.loading,c=e.loadText,s=e.disabled;return r?n.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(t),value:i,disabled:r},n.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",c):n.a.createElement("button",{type:o,className:"btn btn-sm ".concat(t),onClick:l,value:i,disabled:s},a)};r.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},r.propTypes={buttonClassName:i.a.string,buttonText:i.a.string.isRequired,onClickAction:i.a.func,type:i.a.string,value:i.a.string,loading:i.a.bool,loadText:i.a.string,disabled:i.a.bool},t.a=r},685:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(14),i=a.n(o),r=function(e){var t=e.buttonClassName,a=e.iconName,l=e.onClickAction,o=e.title,i=e.disabled;return n.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:l,disabled:i,title:o},n.a.createElement("span",{className:"glyphicon ".concat(a)}))};r.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},r.propTypes={buttonClassName:i.a.string,iconName:i.a.string.isRequired,onClickAction:i.a.func,title:i.a.string,disabled:i.a.bool},t.a=r},686:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(14),i=a.n(o),r=function(e){var t=e.label,a=e.type,l=e.className,o=e.size,i=e.id,r=e.placeholder,c=e.name,s=e.value,u=e.onClickAction,d=e.onChangeAction,p=e.onBlurAction,m=e.required,f=e.readOnly,h=e.maxLength,b=e.error,v=e.min,g=e.max,S=e.step,y=e.errorMessage,k=e.divSize,x=e.divClassName,E=e.autoComplete;return n.a.createElement("div",{className:"form-group ".concat(k," ").concat(x)},n.a.createElement("label",{htmlFor:i,className:"col-sm-6 ".concat(m)},t),n.a.createElement("div",{className:"".concat(o)},n.a.createElement("input",{type:a,className:"form-control input-sm ".concat(l)+(b?"has-error":""),id:i,placeholder:r,name:c,value:s,onClick:u,onChange:d,onBlur:p,readOnly:f,maxLength:h,min:v,max:g,autoComplete:E,step:S})),b&&n.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},n.a.createElement("span",{className:"has-error-message"}," ",y)))};r.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},r.propTypes={label:i.a.oneOfType([i.a.string,i.a.object]).isRequired,type:i.a.string,className:i.a.string,divClassName:i.a.string,size:i.a.string,divSize:i.a.string,id:i.a.string,placeholder:i.a.string,name:i.a.string.isRequired,value:i.a.oneOfType([i.a.string,i.a.number]),onClickAction:i.a.func,onChangeAction:i.a.func,onBlurAction:i.a.func,required:i.a.string,readOnly:i.a.bool,maxLength:i.a.string,error:i.a.bool,min:i.a.string,max:i.a.string,step:i.a.string,errorMessage:i.a.string,autoComplete:i.a.string},t.a=r},687:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(4),i=a(14),r=a.n(i),c=function(e){var t=e.label,a=e.className,l=e.id,i=e.value,r=e.link,c=e.hidden;return r.length>0?n.a.createElement("div",{className:a,style:c?{display:"none"}:{}},n.a.createElement("label",{htmlFor:l,className:"col-sm-6"},t),n.a.createElement("div",{className:"col-sm-6",id:l,onClick:null},n.a.createElement(o.b,{to:r,className:"link-underline"},i))):n.a.createElement("div",{className:a,style:c?{display:"none"}:{}},n.a.createElement("label",{htmlFor:l,className:"col-sm-6"},t),n.a.createElement("div",{className:"col-sm-6",id:l},i))};c.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},c.propTypes={label:r.a.oneOfType([r.a.string,r.a.object]).isRequired,className:r.a.string,id:r.a.string,value:r.a.oneOfType([r.a.string,r.a.number]),link:r.a.string,hidden:r.a.bool},t.a=c},692:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(14),i=a.n(o),r=a(698),c=a.n(r),s=function(e){var t=e.label,a=e.size,l=e.id,o=e.name,i=e.value,r=e.onChangeAction,s=e.required,u=e.divSize,d=e.className,p=e.disabled;return n.a.createElement("div",{className:"form-group ".concat(u," ").concat(d)},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:l,className:"col-sm-6 ".concat(s)},t)),n.a.createElement("div",{className:"".concat(a)},n.a.createElement(c.a,{id:l,name:o,onChange:r,checked:i,disabled:p})))};s.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",disabled:!1,value:null},s.propTypes={label:i.a.string.isRequired,type:i.a.string,size:i.a.string,divSize:i.a.string,id:i.a.string,name:i.a.string.isRequired,value:i.a.bool,onChangeAction:i.a.func,required:i.a.string,disabled:i.a.bool},t.a=s},695:function(e,t,a){var l=a(697);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(201)(l,n);l.locals&&(e.exports=l.locals)},697:function(e,t,a){(e.exports=a(200)(!1)).push([e.i,".Select{position:relative}.Select input::-webkit-contacts-auto-fill-button,.Select input::-webkit-credentials-auto-fill-button{display:none!important}.Select input::-ms-clear,.Select input::-ms-reveal{display:none!important}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none;opacity:.35}.Select.is-disabled>.Select-control{background-color:#f9f9f9}.Select.is-disabled>.Select-control:hover{box-shadow:none}.Select.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.Select.is-open>.Select-control .Select-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.Select.is-searchable.is-focused:not(.is-open)>.Select-control,.Select.is-searchable.is-open>.Select-control{cursor:text}.Select.is-focused>.Select-control{background:#fff}.Select.is-focused:not(.is-open)>.Select-control{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1);background:#fff}.Select.has-value.is-clearable.Select--single>.Select-control .Select-value{padding-right:42px}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value .Select-value-label{color:#333}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus{background:#fff}.Select.has-value.is-pseudo-focused .Select-input{opacity:0}.Select.is-open .Select-arrow,.Select .Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}.Select.Select--rtl{direction:rtl;text-align:right}.Select-control{background-color:#fff;border-color:#d9d9d9 #ccc #b3b3b3;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;border-spacing:0;border-collapse:separate;height:36px;outline:none;overflow:hidden;position:relative;width:100%}.Select-control:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.Select-control .Select-input:focus{outline:none;background:#fff}.Select--single>.Select-control .Select-value,.Select-placeholder{bottom:0;color:#aaa;left:0;line-height:34px;padding-left:10px;padding-right:10px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{width:100%;background:none transparent;border:0 none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;line-height:17px;padding:8px 0 12px;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;text-align:center}.Select-loading,.Select-loading-zone{position:relative;vertical-align:middle;width:16px}.Select-loading{-webkit-animation:Select-animation-spin .4s infinite linear;-o-animation:Select-animation-spin .4s infinite linear;animation:Select-animation-spin .4s infinite linear;height:16px;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn .2s;-o-animation:Select-animation-fadeIn .2s;animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:17px}.Select-clear-zone:hover{color:#d0021b}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:25px;padding-right:5px}.Select--rtl .Select-arrow-zone{padding-right:0;padding-left:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0;position:relative}.Select-control>:last-child{padding-right:5px}.Select--multi .Select-multi-value-wrapper{display:inline-block}.Select .Select-aria-only{position:absolute;display:inline-block;height:1px;width:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden;float:left}@-webkit-keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-shadow:0 1px 0 rgba(0,0,0,.06);box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;left:0;top:100%;width:100%;z-index:1;-webkit-overflow-scrolling:touch}.Select-menu{max-height:198px;overflow-y:auto}.Select-option{box-sizing:border-box;background-color:#fff;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.Select-option.is-selected{background-color:#f5faff;background-color:rgba(0,126,255,.04);color:#333}.Select-option.is-focused{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);color:#333}.Select-option.is-disabled{color:#ccc;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.Select--rtl .Select-input{margin-left:0;margin-right:10px}.Select--multi.has-value .Select-input{margin-left:5px}.Select--multi .Select-value{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid #c2e0ff;border:1px solid rgba(0,126,255,.24);color:#007eff;display:inline-block;font-size:.9em;line-height:1.4;margin-left:5px;margin-top:5px;vertical-align:top}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c2e0ff;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px 3px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:#d8eafd;background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:#c2e0ff;background-color:rgba(0,126,255,.24)}.Select--multi.Select--rtl .Select-value{margin-left:0;margin-right:5px}.Select--multi.Select--rtl .Select-value-icon{border-right:none;border-left:1px solid #c2e0ff;border-left:1px solid rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn)}}",""])},698:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=a(0),i=p(o),r=p(a(699)),c=p(a(14)),s=p(a(700)),u=p(a(701)),d=a(702);function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=(t.icons,function(e,t){var a={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l]);return a}(t,["className","icons"])),o=(0,r.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return i.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",l({},n,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:i.default.createElement(s.default,null),unchecked:i.default.createElement(u.default,null)}},m.propTypes={checked:c.default.bool,disabled:c.default.bool,defaultChecked:c.default.bool,onChange:c.default.func,onFocus:c.default.func,onBlur:c.default.func,className:c.default.string,name:c.default.string,value:c.default.string,id:c.default.string,"aria-labelledby":c.default.string,"aria-label":c.default.string,icons:c.default.oneOfType([c.default.bool,c.default.shape({checked:c.default.node,unchecked:c.default.node})])}},700:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a(0),o=(l=n)&&l.__esModule?l:{default:l};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},701:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a(0),o=(l=n)&&l.__esModule?l:{default:l};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},702:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var l=e.pageX;if(void 0!==l)return{x:l,y:e.pageY}}return{x:0,y:0}}},705:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(14),i=a.n(o),r=a(708),c=(a(695),function(e){var t=e.label,a=e.divSize,l=e.size,o=e.id,i=e.name,c=e.value,s=e.options,u=e.optionId,d=e.optionName,p=e.onChangeAction,m=e.required,f=e.multi,h=e.error,b=e.isLoading;return n.a.createElement("div",{className:"form-group ".concat(a)},n.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(m)},t),n.a.createElement("div",{className:"".concat(l)},n.a.createElement(r.default,{id:o,name:i,value:c,onChange:function(e){p(e||"",i)},options:s,valueKey:u,labelKey:d,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:f,simpleValue:!0,removeSelected:!0,className:h?" has-error":"",isLoading:b})))});c.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0,isLoading:!1},c.propTypes={label:i.a.string.isRequired,className:i.a.string,size:i.a.string,divSize:i.a.string,id:i.a.string,name:i.a.string.isRequired,options:i.a.array.isRequired,optionId:i.a.string,optionName:i.a.string,value:i.a.oneOfType([i.a.string,i.a.number]),onChangeAction:i.a.func,onBlurAction:i.a.func,required:i.a.string,readOnly:i.a.bool,error:i.a.bool,multi:i.a.bool,isLoading:i.a.bool},t.a=c}}]);