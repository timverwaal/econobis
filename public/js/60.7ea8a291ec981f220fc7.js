(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1564:function(e,a,t){"use strict";t.r(a);var n=t(25),l=t.n(n),s=t(24),r=t.n(s),i=t(26),o=t.n(i),c=t(27),u=t.n(c),d=t(21),m=t.n(d),p=t(28),h=t.n(p),f=t(6),v=t.n(f),g=t(0),k=t.n(g),b=t(4),E=t(685),y=function(e){var a=e.name;return k.a.createElement("div",{className:"row"},k.a.createElement("div",{className:"col-md-4"},k.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},k.a.createElement(E.a,{iconName:"glyphicon-arrow-left",onClickAction:b.e.goBack}))),k.a.createElement("div",{className:"col-md-4"},k.a.createElement("h4",{className:"text-center"},"Taak type: ",a)),k.a.createElement("div",{className:"col-md-4"}))},T=t(197),N=t(198),C=t.n(N),w=t(33),S=t(8),O=t.n(S),x=t(686),j=t(684),P=t(682),z=t(683),D=t(12),W={fld:["id","name","usesWfCompletedTask","emailTemplateIdWfCompletedTask","numberOfDaysToSendEmailCompletedTask","usesWfExpiredTask","emailTemplateIdWfExpiredTask"],rlt:{emailTemplateWorkflowCompletedTask:[],emailTemplateWorkflowExpiredTask:[]}},L=function(e){var a="jory/task-type/".concat(e);return D.a.get(a,{params:{jory:W}})},M=function(e){var a="".concat("task-type","/").concat(e.id);return D.a.post(a,e,{params:{jory:W}})},A=t(15),q=t(200),F=t(692),I=t(702),_=t(687),R=t(101),B=t(689),X=t.n(B);function G(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function V(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?G(Object(t),!0).forEach((function(a){v()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}O.a.locale("nl");var J=function(e){function a(e){var t;return l()(this,a),t=o()(this,u()(a).call(this,e)),v()(m()(t),"handleInputChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,l=a.name;t.setState(V({},t.state,{taskType:V({},t.state.taskType,v()({},l,n))}))})),v()(m()(t),"handleSubmit",(function(e){e.preventDefault();var a=t.state.taskType,n={},l=!1;1==a.usesWfExpiredTask&&(a.emailTemplateIdWfExpiredTask||(n.emailTemplateIdWfExpiredTask=!0,l=!0)),1==a.usesWfCompletedTask&&(a.emailTemplateIdWfCompletedTask||(n.emailTemplateIdWfCompletedTask=!0,l=!0),X.a.isEmpty(a.numberOfDaysToSendEmailCompletedTask.toString())&&(n.numberOfDaysToSendEmailCompletedTask=!0,l=!0)),t.setState(V({},t.state,{errors:n})),!l&&M(a).then((function(e){t.props.updateState(e.data.data),t.props.fetchSystemData(),t.props.switchToView()})).catch((function(e){alert("Er is iets misgegaan bij opslaan. Herlaad de pagina en probeer het nogmaals.")}))})),t.state={emailTemplates:[],taskType:V({},e.taskType),errors:{usesWfCompletedTask:!1,emailTemplateIdWfCompletedTask:!1,numberOfDaysToSendEmailCompletedTask:!1,usesWfExpiredTask:!1,emailTemplateIdWfExpiredTask:!1},peekLoading:{emailTemplates:!0}},t.handleReactSelectChange=t.handleReactSelectChange.bind(m()(t)),t}return h()(a,e),r()(a,[{key:"handleReactSelectChange",value:function(e,a){this.setState(V({},this.state,{taskType:V({},this.state.taskType,v()({},a,e))}))}},{key:"componentDidMount",value:function(){var e=this;R.a.fetchEmailTemplatesPeek().then((function(a){return e.setState({emailTemplates:a,peekLoading:V({},e.state.peekLoading,{emailTemplates:!1})})}))}},{key:"render",value:function(){var e=this.state.taskType,a=e.name,t=e.usesWfCompletedTask,n=e.emailTemplateIdWfCompletedTask,l=e.numberOfDaysToSendEmailCompletedTask,s=e.usesWfExpiredTask,r=e.emailTemplateIdWfExpiredTask;return k.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},k.a.createElement(P.a,null,k.a.createElement(z.a,null,k.a.createElement("div",{className:"row"},k.a.createElement(_.a,{label:"Omschrijving",divSize:"col-sm-10",value:a,className:"col-sm-10 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(F.a,{label:"Gebruikt workflow verlopen taak",divSize:"col-sm-10",name:"usesWfExpiredTask",value:s,onChangeAction:this.handleInputChange})),1==s&&k.a.createElement(k.a.Fragment,null,k.a.createElement("div",{className:"row"},k.a.createElement(_.a,{label:"Uitleg workflow verlopen taak",divSize:"col-sm-10",value:this.props.explanationWfExpiredTask,className:"col-sm-10 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(I.a,{label:"Template email verlopen taak",divSize:"col-sm-10",name:"emailTemplateIdWfExpiredTask",options:this.state.emailTemplates,value:r,onChangeAction:this.handleReactSelectChange,isLoading:this.state.peekLoading.emailTemplates,multi:!1,required:"required",error:this.state.errors.emailTemplateIdWfExpiredTask}))),k.a.createElement("div",{className:"row"},k.a.createElement(F.a,{label:"Gebruikt workflow afgehandelde taak",divSize:"col-sm-10",name:"usesWfCompletedTask",value:t,onChangeAction:this.handleInputChange})),1==t&&k.a.createElement(k.a.Fragment,null,k.a.createElement("div",{className:"row"},k.a.createElement(_.a,{label:"Uitleg workflow afgehandelde taak",divSize:"col-sm-10",value:this.props.explanationWfCompletedTask,className:"col-sm-10 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(I.a,{label:"Template email afgehandelde taak",divSize:"col-sm-10",name:"emailTemplateIdWfCompletedTask",options:this.state.emailTemplates,value:n,onChangeAction:this.handleReactSelectChange,isLoading:this.state.peekLoading.emailTemplates,multi:!1,required:"required",error:this.state.errors.emailTemplateIdWfCompletedTask})),k.a.createElement("div",{className:"row"},k.a.createElement(x.a,{label:"Aantal dagen email na afgehandelde taak",divSize:"col-sm-10",type:"number",min:"1",id:"numberOfDaysToSendEmailCompletedTask",name:"numberOfDaysToSendEmailCompletedTask",value:l,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.numberOfDaysToSendEmailCompletedTask})))),k.a.createElement(z.a,null,k.a.createElement("div",{className:"pull-right btn-group",role:"group"},k.a.createElement(j.a,{buttonClassName:"btn-default",buttonText:"Sluiten",onClickAction:this.props.switchToView}),k.a.createElement(j.a,{buttonText:"Opslaan",type:"submit",value:"Submit"})))))}}]),a}(g.Component),U=Object(w.b)(null,(function(e){return Object(A.b)({fetchSystemData:q.a},e)}))(J),K=function(e){var a=e.name,t=e.usesWfCompletedTask,n=e.emailTemplateWorkflowCompletedTask,l=e.numberOfDaysToSendEmailCompletedTask,s=e.usesWfExpiredTask,r=e.emailTemplateWorkflowExpiredTask,i=e.switchToEdit,o=e.explanationWfExpiredTask,c=e.explanationWfCompletedTask;return k.a.createElement("div",{onClick:i},k.a.createElement(P.a,null,k.a.createElement(z.a,null,k.a.createElement("div",{className:"row"},k.a.createElement(_.a,{label:"Omschrijving",divSize:"col-sm-10",value:a,className:"col-sm-10 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(_.a,{label:"Gebruikt workflow verlopen taak",divSize:"col-sm-10",value:s?"Ja":"Nee",className:"col-sm-10 form-group"})),1==s&&k.a.createElement(k.a.Fragment,null,k.a.createElement("div",{className:"row"},k.a.createElement(_.a,{label:"Uitleg workflow verlopen taak",divSize:"col-sm-10",value:o,className:"col-sm-10 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(_.a,{label:"Template email verlopen taak",divSize:"col-sm-10",value:r?r.name:"",className:"col-sm-10 form-group"}))),k.a.createElement("div",{className:"row"},k.a.createElement(_.a,{label:"Gebruikt workflow afgehandelde taak",divSize:"col-sm-10",value:t?"Ja":"Nee",className:"col-sm-10 form-group"})),1==t&&k.a.createElement(k.a.Fragment,null,k.a.createElement("div",{className:"row"},k.a.createElement(_.a,{label:"Uitleg workflow afgehandelde taak",divSize:"col-sm-10",value:c,className:"col-sm-10 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(_.a,{label:"Template email afgehandelde taak",divSize:"col-sm-10",value:n?n.name:"",className:"col-sm-10 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(_.a,{label:"Aantal dagen email na afgehandelde taak",divSize:"col-sm-10",value:l,className:"col-sm-10 form-group"}))))))},Y=function(e){function a(e){var t;return l()(this,a),t=o()(this,u()(a).call(this,e)),v()(m()(t),"switchToEdit",(function(){t.setState({showEdit:!0})})),v()(m()(t),"switchToView",(function(){t.setState({showEdit:!1,activeDiv:""})})),t.state={showEdit:!1,activeDiv:""},t}return h()(a,e),r()(a,[{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this,a=this.props.meDetails.permissions,t=void 0===a?{}:a,n=k.a.createElement("span",null,"Er zal automatisch eenmalig een email verstuurd worden naar de verantwoordelijke als deze taak is verlopen."),l=k.a.createElement("span",null,"Er zal automatisch eenmalig een email verstuurd worden naar contact taak als deze taak is afgehandeld is, rekening houdend met het opgegeven aantal dagen.");return k.a.createElement("div",{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},this.state.showEdit&&t.manageFinancial?k.a.createElement(U,{taskType:this.props.taskType,switchToView:this.switchToView,updateState:this.props.updateState,explanationWfExpiredTask:n,explanationWfCompletedTask:l}):k.a.createElement(K,C()({},this.props.taskType,{switchToEdit:this.switchToEdit,explanationWfExpiredTask:n,explanationWfCompletedTask:l})))}}]),a}(g.Component),H=Object(w.b)((function(e){return{meDetails:e.meDetails,permissions:e.meDetails.permissions}}))(Y),Q=function(e){var a=e.taskType,t=e.hasError,n=e.isLoading,l=e.updateState,s="",r=!0;return t?s="Fout bij het ophalen van taak type.":n?s="Gegevens aan het laden.":Object(T.isEmpty)(a)?s="Geen taak type gevonden!":r=!1,r?k.a.createElement("div",null,s):k.a.createElement("div",null,k.a.createElement(H,{taskType:a,updateState:l}))};function Z(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Z(Object(t),!0).forEach((function(a){v()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var ee=function(e){function a(e){var t;return l()(this,a),t=o()(this,u()(a).call(this,e)),v()(m()(t),"callFetchTaskTypeDetails",(function(){t.setState({isLoading:!0,hasError:!1}),L(t.props.params.id).then((function(e){t.setState({isLoading:!1,taskType:$({},e.data.data)})})).catch((function(e){t.setState({isLoading:!1,hasError:!0})}))})),v()(m()(t),"updateState",(function(e){t.setState({taskType:e})})),t.state={taskType:{},isLoading:!1,hasError:!1},t}return h()(a,e),r()(a,[{key:"componentDidMount",value:function(){this.callFetchTaskTypeDetails()}},{key:"render",value:function(){return k.a.createElement("div",{className:"row"},k.a.createElement("div",{className:"col-md-9"},k.a.createElement("div",{className:"col-md-12 margin-10-top"},k.a.createElement(P.a,null,k.a.createElement(z.a,{className:"panel-small"},k.a.createElement(y,{name:this.state.taskType.name||""})))),k.a.createElement("div",{className:"col-md-12 margin-10-top"},k.a.createElement(Q,{taskType:this.state.taskType,isLoading:this.state.isLoading,hasError:this.state.hasError,updateState:this.updateState}))),k.a.createElement("div",{className:"col-md-3"}))}}]),a}(g.Component);a.default=ee},682:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(14),r=t.n(s),i=function(e){var a=e.children,t=e.className,n=e.onMouseEnter,s=e.onMouseLeave;return l.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:n,onMouseLeave:s},a)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:r.a.string,onMouseEnter:r.a.func,onMouseLeave:r.a.func},a.a=i},683:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(14),r=t.n(s),i=function(e){var a=e.className,t=e.children;return l.a.createElement("div",{className:"panel-body ".concat(a)},t)};i.defaultProps={className:""},i.propTypes={className:r.a.string},a.a=i},684:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(14),r=t.n(s),i=function(e){var a=e.buttonClassName,t=e.buttonText,n=e.onClickAction,s=e.type,r=e.value,i=e.loading,o=e.loadText,c=e.disabled;return i?l.a.createElement("button",{type:s,className:"btn btn-sm btn-loading ".concat(a),value:r,disabled:i},l.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",o):l.a.createElement("button",{type:s,className:"btn btn-sm ".concat(a),onClick:n,value:r,disabled:c},t)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:r.a.string,buttonText:r.a.string.isRequired,onClickAction:r.a.func,type:r.a.string,value:r.a.string,loading:r.a.bool,loadText:r.a.string,disabled:r.a.bool},a.a=i},685:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(14),r=t.n(s),i=function(e){var a=e.buttonClassName,t=e.iconName,n=e.onClickAction,s=e.title,r=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:n,disabled:r,title:s},l.a.createElement("span",{className:"glyphicon ".concat(t)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:r.a.string,iconName:r.a.string.isRequired,onClickAction:r.a.func,title:r.a.string,disabled:r.a.bool},a.a=i},686:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(14),r=t.n(s),i=function(e){var a=e.label,t=e.type,n=e.className,s=e.size,r=e.id,i=e.placeholder,o=e.name,c=e.value,u=e.onClickAction,d=e.onChangeAction,m=e.onBlurAction,p=e.required,h=e.readOnly,f=e.maxLength,v=e.error,g=e.min,k=e.max,b=e.step,E=e.errorMessage,y=e.divSize,T=e.divClassName,N=e.autoComplete;return l.a.createElement("div",{className:"form-group ".concat(y," ").concat(T)},l.a.createElement("label",{htmlFor:r,className:"col-sm-6 ".concat(p)},a),l.a.createElement("div",{className:"".concat(s)},l.a.createElement("input",{type:t,className:"form-control input-sm ".concat(n)+(v?"has-error":""),id:r,placeholder:i,name:o,value:c,onClick:u,onChange:d,onBlur:m,readOnly:h,maxLength:f,min:g,max:k,autoComplete:N,step:b})),v&&l.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},l.a.createElement("span",{className:"has-error-message"}," ",E)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},i.propTypes={label:r.a.oneOfType([r.a.string,r.a.object]).isRequired,type:r.a.string,className:r.a.string,divClassName:r.a.string,size:r.a.string,divSize:r.a.string,id:r.a.string,placeholder:r.a.string,name:r.a.string.isRequired,value:r.a.oneOfType([r.a.string,r.a.number]),onClickAction:r.a.func,onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,maxLength:r.a.string,error:r.a.bool,min:r.a.string,max:r.a.string,step:r.a.string,errorMessage:r.a.string,autoComplete:r.a.string},a.a=i},687:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(4),r=t(14),i=t.n(r),o=function(e){var a=e.label,t=e.className,n=e.id,r=e.value,i=e.link,o=e.hidden;return i.length>0?l.a.createElement("div",{className:t,style:o?{display:"none"}:{}},l.a.createElement("label",{htmlFor:n,className:"col-sm-6"},a),l.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},l.a.createElement(s.b,{to:i,className:"link-underline"},r))):l.a.createElement("div",{className:t,style:o?{display:"none"}:{}},l.a.createElement("label",{htmlFor:n,className:"col-sm-6"},a),l.a.createElement("div",{className:"col-sm-6",id:n},r))};o.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},o.propTypes={label:i.a.oneOfType([i.a.string,i.a.object]).isRequired,className:i.a.string,id:i.a.string,value:i.a.oneOfType([i.a.string,i.a.number]),link:i.a.string,hidden:i.a.bool},a.a=o},692:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(14),r=t.n(s),i=t(696),o=t.n(i),c=function(e){var a=e.label,t=e.size,n=e.id,s=e.name,r=e.value,i=e.onChangeAction,c=e.required,u=e.divSize,d=e.className,m=e.disabled;return l.a.createElement("div",{className:"form-group ".concat(u," ").concat(d)},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:n,className:"col-sm-6 ".concat(c)},a)),l.a.createElement("div",{className:"".concat(t)},l.a.createElement(o.a,{id:n,name:s,onChange:i,checked:r,disabled:m})))};c.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",disabled:!1,value:null},c.propTypes={label:r.a.string.isRequired,type:r.a.string,size:r.a.string,divSize:r.a.string,id:r.a.string,name:r.a.string.isRequired,value:r.a.bool,onChangeAction:r.a.func,required:r.a.string,disabled:r.a.bool},a.a=c},696:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),s=t(0),r=m(s),i=m(t(703)),o=m(t(14)),c=m(t(697)),u=m(t(698)),d=t(699);function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.handleClick=t.handleClick.bind(t),t.handleTouchStart=t.handleTouchStart.bind(t),t.handleTouchMove=t.handleTouchMove.bind(t),t.handleTouchEnd=t.handleTouchEnd.bind(t),t.handleFocus=t.handleFocus.bind(t),t.handleBlur=t.handleBlur.bind(t),t.previouslyChecked=!(!e.checked&&!e.defaultChecked),t.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},t}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),l(a,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var a=this.input;if(e.target!==a&&!this.moved)return this.previouslyChecked=a.checked,e.preventDefault(),a.focus(),void a.click();var t=this.props.hasOwnProperty("checked")?this.props.checked:a.checked;this.setState({checked:t})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var a=(0,d.pointerCoord)(e).x;this.state.checked&&a+15<this.startX?(this.setState({checked:!1}),this.startX=a,this.activated=!0):a-15>this.startX&&(this.setState({checked:!0}),this.startX=a,this.activated=a<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var a=this.input;if(e.preventDefault(),this.startX){var t=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>t?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,a.click()):this.startX-4<t&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,a.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var a=this.props.onFocus;a&&a(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var a=this.props.onBlur;a&&a(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var t=this.props.icons;return t?void 0===t[e]?a.defaultProps.icons[e]:t[e]:null}},{key:"render",value:function(){var e=this,a=this.props,t=a.className,l=(a.icons,function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["className","icons"])),s=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},t);return r.default.createElement("div",{className:s,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},r.default.createElement("div",{className:"react-toggle-track"},r.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),r.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),r.default.createElement("div",{className:"react-toggle-thumb"}),r.default.createElement("input",n({},l,{ref:function(a){e.input=a},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),a}(s.PureComponent);a.default=p,p.displayName="Toggle",p.defaultProps={icons:{checked:r.default.createElement(c.default,null),unchecked:r.default.createElement(u.default,null)}},p.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},697:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(0),s=(n=l)&&n.__esModule?n:{default:n};a.default=function(){return s.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},s.default.createElement("title",null,"switch-check"),s.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},698:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(0),s=(n=l)&&n.__esModule?n:{default:n};a.default=function(){return s.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},s.default.createElement("title",null,"switch-x"),s.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},699:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.pointerCoord=function(e){if(e){var a=e.changedTouches;if(a&&a.length>0){var t=a[0];return{x:t.clientX,y:t.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},702:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(14),r=t.n(s),i=t(707),o=(t(708),function(e){var a=e.label,t=e.divSize,n=e.size,s=e.id,r=e.name,o=e.value,c=e.options,u=e.optionId,d=e.optionName,m=e.onChangeAction,p=e.required,h=e.multi,f=e.error,v=e.isLoading;return l.a.createElement("div",{className:"form-group ".concat(t)},l.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(p)},a),l.a.createElement("div",{className:"".concat(n)},l.a.createElement(i.a,{id:s,name:r,value:o,onChange:function(e){m(e||"",r)},options:c,valueKey:u,labelKey:d,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:h,simpleValue:!0,removeSelected:!0,className:f?" has-error":"",isLoading:v})))});o.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0,isLoading:!1},o.propTypes={label:r.a.string.isRequired,className:r.a.string,size:r.a.string,divSize:r.a.string,id:r.a.string,name:r.a.string.isRequired,options:r.a.array.isRequired,optionId:r.a.string,optionName:r.a.string,value:r.a.oneOfType([r.a.string,r.a.number]),onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,error:r.a.bool,multi:r.a.bool,isLoading:r.a.bool},a.a=o}}]);