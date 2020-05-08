(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1508:function(e,t,a){"use strict";var n=a(1509).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},1509:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=l(a(0)),s=l(a(1510));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.CopyToClipboard=function(e){function t(){var e,a,n;i(this,t);for(var r=arguments.length,l=Array(r),u=0;u<r;u++)l[u]=arguments[u];return a=n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.onClick=function(e){var t=n.props,a=t.text,r=t.onCopy,l=t.children,i=t.options,c=o.default.Children.only(l),u=(0,s.default)(a,i);r&&r(a,u),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(e)},c(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,n({},a,{onClick:this.onClick}))}}]),t}(o.default.PureComponent)).defaultProps={onCopy:void 0,options:void 0}},1510:function(e,t,a){"use strict";var n=a(1511);e.exports=function(e,t){var a,r,o,s,l,i,c=!1;t||(t={}),a=t.debug||!1;try{if(o=n(),s=document.createRange(),l=document.getSelection(),(i=document.createElement("span")).textContent=e,i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",document.body.appendChild(i),s.selectNode(i),l.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(n){a&&console.error("unable to copy using execCommand: ",n),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),c=!0}catch(n){a&&console.error("unable to copy using clipboardData: ",n),a&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(s):l.removeAllRanges()),i&&document.body.removeChild(i),o()}return c}},1511:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},1558:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),o=a(24),s=a.n(o),l=a(26),i=a.n(l),c=a(27),u=a.n(c),m=a(28),d=a.n(m),p=a(0),f=a.n(p),b=a(33),h=function(e){return{type:"FETCH_WEBFORM_DETAILS",id:e}},v=a(21),g=a.n(v),y=a(6),E=a.n(y),w=a(4),C=a(685),N=a(98),D=a(994),k=Object(b.b)(null,(function(e){return{deleteWebform:function(t){e(Object(D.b)(t))}}}))((function(e){return f.a.createElement(N.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deleteWebform(e.id),e.closeDeleteItemModal(),void w.f.push("/webformulieren")},title:"Verwijderen"},"Verwijder webformulier: ",f.a.createElement("strong",null," ",e.name," "))})),O=function(e){function t(e){var a;return r()(this,t),a=i()(this,u()(t).call(this,e)),E()(g()(a),"toggleDelete",(function(){a.setState({showDelete:!a.state.showDelete})})),a.state={showDelete:!1},a}return d()(t,e),s()(t,[{key:"render",value:function(){return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-4"},f.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},f.a.createElement(C.a,{iconName:"glyphicon-arrow-left",onClickAction:w.e.goBack}),f.a.createElement(C.a,{iconName:"glyphicon-trash",onClickAction:this.toggleDelete}))),f.a.createElement("div",{className:"col-md-4"},f.a.createElement("h4",{className:"text-center"},"Webformulier: ",this.props.name)),f.a.createElement("div",{className:"col-md-4"}),this.state.showDelete&&f.a.createElement(k,{closeDeleteItemModal:this.toggleDelete,name:this.props.name,id:this.props.id}))}}]),t}(p.Component),A=Object(b.b)((function(e){return{name:e.webformDetails.name,id:e.webformDetails.id}}),null)(O),T=a(197),x=a(689),S=a.n(x),M=a(995),j=a.n(M),P=a(8),R=a.n(P),q=a(686),I=a(684),B=a(682),L=a(683),z=a(691),_=a(742);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){E()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}R.a.locale("nl");var K=function(e){function t(e){var a;return r()(this,t),(a=i()(this,u()(t).call(this,e))).state={webform:V({},e.webformDetails,{responsible:e.webformDetails.responsibleUserId?"user"+e.webformDetails.responsibleUserId:"team"+e.webformDetails.responsibleTeamId,dateStart:e.webformDetails.dateStart?e.webformDetails.dateStart:"",dateEnd:e.webformDetails.dateEnd?e.webformDetails.dateEnd:"",apiKeyDate:e.webformDetails.apiKeyDate?e.webformDetails.apiKeyDate:""}),errors:{name:!1}},a.handleInputChange=a.handleInputChange.bind(g()(a)),a.handleInputChangeDate=a.handleInputChangeDate.bind(g()(a)),a.handleSubmit=a.handleSubmit.bind(g()(a)),a.refreshKey=a.refreshKey.bind(g()(a)),a}return d()(t,e),s()(t,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(V({},this.state,{webform:V({},this.state.webform,E()({},n,a))}))}},{key:"refreshKey",value:function(){this.setState(V({},this.state,{webform:V({},this.state.webform,{apiKey:j()(),apiKeyDate:R()()})}))}},{key:"handleInputChangeDate",value:function(e,t){this.setState(V({},this.state,{webform:V({},this.state.webform,E()({},t,e))}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.webform,a={},n=!1;S.a.isEmpty(t.name)&&(a.name=!0,n=!0),S.a.isEmpty(t.maxRequestsPerMinute.toString())&&(a.maxRequestsPerMinute=!0,n=!0),S.a.isEmpty(t.responsible)&&(a.responsible=!0,n=!0),t.responsible.search("user")>=0&&(t.responsibleUserId=t.responsible.replace("user",""),t.responsibleTeamId=""),t.responsible.search("team")>=0&&(t.responsibleUserId="",t.responsibleTeamId=t.responsible.replace("team","")),this.setState(V({},this.state,{errors:a})),!n&&this.props.updateWebform(t,this.props.switchToView)}},{key:"render",value:function(){var e=this.state.webform,t=e.name,a=e.apiKey,n=e.apiKeyDate,r=e.maxRequestsPerMinute,o=e.dateStart,s=e.dateEnd,l=e.responsible;return f.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},f.a.createElement(B.a,null,f.a.createElement(L.a,null,f.a.createElement("div",{className:"row"},f.a.createElement(q.a,{label:"Naam",name:"name",value:t,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.name}),f.a.createElement(q.a,{label:"Sleutel",name:"apiKey",value:a,onChangeAction:this.handleInputChange,readOnly:!0}),f.a.createElement("span",{className:"glyphicon glyphicon-refresh mybtn-success",style:{top:"5px"},role:"button",onClick:this.refreshKey,title:"Ververs sleutel"})),f.a.createElement("div",{className:"row"},f.a.createElement(q.a,{label:"Aanvragen per minuut",type:"number",name:"maxRequestsPerMinute",value:r,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.maxRequestsPerMinute}),f.a.createElement(q.a,{label:"Datum sleutel",name:"apiKeyDate",value:R()(n).format("L"),onChangeAction:function(){},readOnly:!0})),f.a.createElement("div",{className:"row"},f.a.createElement(z.a,{label:"Startdatum",name:"dateStart",value:o,onChangeAction:this.handleInputChangeDate}),f.a.createElement(z.a,{label:"Einddatum",name:"dateEnd",value:s,onChangeAction:this.handleInputChangeDate})),f.a.createElement("div",{className:"row"},f.a.createElement(_.a,{label:"Verantwoordelijke",size:"col-sm-6",name:"responsible",optionsInGroups:[{name:"user",label:"Gebruikers",options:this.props.users,optionName:"fullName"},{name:"team",label:"Team",options:this.props.teams}],value:l,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.responsible}))),f.a.createElement(L.a,null,f.a.createElement("div",{className:"pull-right btn-group",role:"group"},f.a.createElement(I.a,{buttonClassName:"btn-default",buttonText:"Sluiten",onClickAction:this.props.switchToView}),f.a.createElement(I.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"})))))}}]),t}(p.Component),W=Object(b.b)((function(e){return{webformDetails:e.webformDetails,teams:e.systemData.teams,users:e.systemData.users}}),(function(e){return{updateWebform:function(t,a){e(function(e,t){return{type:"UPDATE_WEBFORM",webform:e,switchToView:t}}(t,a))}}}))(K),U=a(1508),G=a.n(U),Y=a(687),H=Object(b.b)((function(e){return{webformDetails:e.webformDetails}}))((function(e){var t=e.webformDetails,a=t.name,n=t.apiKey,r=t.apiKeyDate,o=t.maxRequestsPerMinute,s=t.dateStart,l=t.dateEnd,i=t.responsibleUser,c=t.responsibleTeam;return f.a.createElement("div",null,f.a.createElement(B.a,null,f.a.createElement(L.a,null,f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-6",onClick:e.switchToEdit},f.a.createElement("label",{className:"col-sm-6"},"Naam"),f.a.createElement("div",{className:"col-sm-6"},a)),f.a.createElement("div",{className:"col-sm-6"},f.a.createElement("label",{className:"col-sm-6",onClick:e.switchToEdit},"Sleutel"),f.a.createElement("div",{className:"col-sm-6",style:{paddingRight:"5px"},onClick:null},n,f.a.createElement(G.a,{text:n},f.a.createElement("span",{className:"glyphicon glyphicon-copy mybtn-success pull-right",style:{top:"5px"},role:"button",onClick:null,title:"Kopieer sleutel"}))))),f.a.createElement("div",{className:"row",onClick:e.switchToEdit},f.a.createElement(Y.a,{label:"Aanvragen per minuut?",value:o}),f.a.createElement(Y.a,{label:"Datum sleutel",value:r&&R()(r).format("L")})),f.a.createElement("div",{className:"row",onClick:e.switchToEdit},f.a.createElement(Y.a,{label:"Startdatum",value:s&&R()(s).format("L")}),f.a.createElement(Y.a,{label:"Einddatum",value:l&&R()(l).format("L")})),f.a.createElement("div",{className:"row",onClick:e.switchToEdit},f.a.createElement(Y.a,{label:"Verantwoordelijke",value:i?i.fullName:c.name,link:i?"gebruiker/"+i.id:"team/"+c.id})))))})),J=function(e){function t(e){var a;return r()(this,t),a=i()(this,u()(t).call(this,e)),E()(g()(a),"switchToEdit",(function(){a.setState({showEdit:!0})})),E()(g()(a),"switchToView",(function(){a.setState({showEdit:!1,activeDiv:""})})),a.state={showEdit:!1,activeDiv:""},a}return d()(t,e),s()(t,[{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this,t=this.props.meDetails.permissions,a=void 0===t?{}:t;return f.a.createElement("div",{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},this.state.showEdit&&a.manageWebform?f.a.createElement(W,{switchToView:this.switchToView}):f.a.createElement(H,{switchToEdit:this.switchToEdit}))}}]),t}(p.Component),X=Object(b.b)((function(e){return{teamDetails:e.teamDetails,meDetails:e.meDetails,permissions:e.meDetails.permissions}}))(J),Q=function(e){function t(e){return r()(this,t),i()(this,u()(t).call(this,e))}return d()(t,e),s()(t,[{key:"render",value:function(){var e="",t=!0;return this.props.hasError?e="Fout bij het ophalen van webformulier.":this.props.isLoading?e="Gegevens aan het laden.":Object(T.isEmpty)(this.props.webformDetails)?e="Geen webformulier gevonden!":t=!1,t?f.a.createElement("div",null,e):f.a.createElement("div",null,f.a.createElement(X,null))}}]),t}(p.Component),Z=Object(b.b)((function(e){return{webformDetails:e.webformDetails,isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}),(function(e){return{fetchWebformDetails:function(t){e(h(t))}}}))(Q),$=function(e){function t(e){return r()(this,t),i()(this,u()(t).call(this,e))}return d()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.props.fetchWebformDetails(this.props.params.id)}},{key:"render",value:function(){return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-9"},f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(B.a,null,f.a.createElement(L.a,{className:"panel-small"},f.a.createElement(A,null)))),f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(Z,null))),f.a.createElement("div",{className:"col-md-3"}))}}]),t}(p.Component);t.default=Object(b.b)((function(e){return{webformDetails:e.webformDetails}}),(function(e){return{fetchWebformDetails:function(t){e(h(t))}}}))($)},682:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),l=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,o=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:o},t)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},t.a=l},683:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),l=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},a)};l.defaultProps={className:""},l.propTypes={className:s.a.string},t.a=l},684:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),l=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,o=e.type,s=e.value,l=e.loading,i=e.loadText,c=e.disabled;return l?r.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(t),value:s,disabled:l},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",i):r.a.createElement("button",{type:o,className:"btn btn-sm ".concat(t),onClick:n,value:s,disabled:c},a)};l.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},l.propTypes={buttonClassName:s.a.string,buttonText:s.a.string.isRequired,onClickAction:s.a.func,type:s.a.string,value:s.a.string,loading:s.a.bool,loadText:s.a.string,disabled:s.a.bool},t.a=l},685:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),l=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,o=e.title,s=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:s,title:o},r.a.createElement("span",{className:"glyphicon ".concat(a)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},t.a=l},686:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),l=function(e){var t=e.label,a=e.type,n=e.className,o=e.size,s=e.id,l=e.placeholder,i=e.name,c=e.value,u=e.onClickAction,m=e.onChangeAction,d=e.onBlurAction,p=e.required,f=e.readOnly,b=e.maxLength,h=e.error,v=e.min,g=e.max,y=e.step,E=e.errorMessage,w=e.divSize,C=e.divClassName,N=e.autoComplete;return r.a.createElement("div",{className:"form-group ".concat(w," ").concat(C)},r.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(p)},t),r.a.createElement("div",{className:"".concat(o)},r.a.createElement("input",{type:a,className:"form-control input-sm ".concat(n)+(h?"has-error":""),id:s,placeholder:l,name:i,value:c,onClick:u,onChange:m,onBlur:d,readOnly:f,maxLength:b,min:v,max:g,autoComplete:N,step:y})),h&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",E)))};l.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},l.propTypes={label:s.a.oneOfType([s.a.string,s.a.object]).isRequired,type:s.a.string,className:s.a.string,divClassName:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,placeholder:s.a.string,name:s.a.string.isRequired,value:s.a.oneOfType([s.a.string,s.a.number]),onClickAction:s.a.func,onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,maxLength:s.a.string,error:s.a.bool,min:s.a.string,max:s.a.string,step:s.a.string,errorMessage:s.a.string,autoComplete:s.a.string},t.a=l},687:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),s=a(14),l=a.n(s),i=function(e){var t=e.label,a=e.className,n=e.id,s=e.value,l=e.link,i=e.hidden;return l.length>0?r.a.createElement("div",{className:a,style:i?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),r.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},r.a.createElement(o.b,{to:l,className:"link-underline"},s))):r.a.createElement("div",{className:a,style:i?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),r.a.createElement("div",{className:"col-sm-6",id:n},s))};i.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},i.propTypes={label:l.a.oneOfType([l.a.string,l.a.object]).isRequired,className:l.a.string,id:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number]),link:l.a.string,hidden:l.a.bool},t.a=i},691:function(e,t,a){"use strict";var n=a(25),r=a.n(n),o=a(24),s=a.n(o),l=a(26),i=a.n(l),c=a(27),u=a.n(c),m=a(21),d=a.n(m),p=a(28),f=a.n(p),b=a(6),h=a.n(b),v=a(0),g=a.n(v),y=a(14),E=a.n(y),w=a(700),C=a.n(w),N=a(701),D=a.n(N),k=a(8),O=a.n(k);O.a.locale("nl");var A=function(e){function t(e){var a;return r()(this,t),a=i()(this,u()(t).call(this,e)),h()(d()(a),"validateDate",(function(e){var t=O()(e.target.value,"DD-MM-YYYY",!0),n=!1;t.isValid()||""===e.target.value||(n=!0),a.props.disabledBefore&&t.isBefore(a.props.disabledBefore)&&(n=!0),a.props.disabledAfter&&t.isAfter(a.props.disabledAfter)&&(n=!0),a.setState({errorDateFormat:n})})),h()(d()(a),"onDateChange",(function(e){var t=e?O()(e).format("Y-MM-DD"):"",n=!1;t&&a.props.disabledBefore&&O()(t).isBefore(a.props.disabledBefore)&&(n=!0),t&&a.props.disabledAfter&&O()(t).isAfter(a.props.disabledAfter)&&(n=!0),a.setState({errorDateFormat:n}),!n&&a.props.onChangeAction(t,a.props.name)})),a.state={errorDateFormat:!1},a}return f()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.className,n=e.size,r=e.divSize,o=e.id,s=e.value,l=e.required,i=e.readOnly,c=e.name,u=e.error,m=e.errorMessage,d=e.disabledBefore,p=e.disabledAfter,f=s?O()(s).format("L"):"",b={};return d&&(b.before=new Date(d)),p&&(b.after=new Date(p)),g.a.createElement("div",{className:"form-group ".concat(r)},g.a.createElement("div",null,g.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(l)},t)),g.a.createElement("div",{className:"".concat(n)},g.a.createElement(C.a,{id:o,value:f,formatDate:N.formatDate,parseDate:N.parseDate,onDayChange:this.onDateChange,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:D.a,disabledDays:b},inputProps:{className:"form-control input-sm ".concat(a)+(this.state.errorDateFormat||u?" has-error":""),name:c,onBlur:this.validateDate,autoComplete:"off",readOnly:i,disabled:i},required:l,readOnly:i,placeholder:""})),u&&g.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},g.a.createElement("span",{className:"has-error-message"}," ",m)))}}]),t}(v.Component);A.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",readOnly:!1,value:null,error:!1,errorMessage:"",disabledBefore:null,disabledAfter:null},A.propTypes={label:E.a.string.isRequired,type:E.a.string,className:E.a.string,size:E.a.string,divSize:E.a.string,id:E.a.string,name:E.a.string,value:E.a.oneOfType([E.a.string,E.a.object]),onChangeAction:E.a.func,required:E.a.string,readOnly:E.a.bool,error:E.a.bool,errorMessage:E.a.string,disabledBefore:E.a.string,disabledAfter:E.a.string},t.a=A},742:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),s=a.n(o),l=function(e){var t=e.label,a=e.className,n=e.size,o=e.divSize,s=e.id,l=e.name,i=e.value,c=e.optionsInGroups,u=e.onChangeAction,m=e.onBlurAction,d=e.required,p=e.error,f=e.readOnly;return r.a.createElement("div",{className:"form-group ".concat(o)},r.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(d)},t),r.a.createElement("div",{className:"".concat(n)},r.a.createElement("select",{className:"form-control input-sm ".concat(a)+(p&&" has-error"),id:s,name:l,value:i,onChange:u,onBlur:m,readOnly:f},r.a.createElement("option",{value:""}),c.map((function(e,t){var a=e.optionName||"name";return r.a.createElement("optgroup",{key:t,label:e.label},e.options.map((function(t){return r.a.createElement("option",{key:t.id,value:e.name+t.id},t[a])})))})))))};l.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",readOnly:!1,required:"",error:!1,value:""},l.propTypes={label:s.a.string.isRequired,className:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,name:s.a.string.isRequired,optionsInGroups:s.a.array,value:s.a.oneOfType([s.a.string,s.a.number]),onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,error:s.a.bool,optionName:s.a.string},t.a=l},858:function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var n=new Uint8Array(16);e.exports=function(){return a(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},859:function(e,t){for(var a=[],n=0;n<256;++n)a[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,r=a;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}},994:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));var n=function(){return{type:"FETCH_WEBFORMS"}},r=function(){return{type:"CLEAR_WEBFORMS"}},o=function(e){return{type:"DELETE_WEBFORM",id:e}}},995:function(e,t,a){var n=a(996),r=a(997),o=r;o.v1=n,o.v4=r,e.exports=o},996:function(e,t,a){var n,r,o=a(858),s=a(859),l=0,i=0;e.exports=function(e,t,a){var c=t&&a||0,u=t||[],m=(e=e||{}).node||n,d=void 0!==e.clockseq?e.clockseq:r;if(null==m||null==d){var p=o();null==m&&(m=n=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==d&&(d=r=16383&(p[6]<<8|p[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),b=void 0!==e.nsecs?e.nsecs:i+1,h=f-l+(b-i)/1e4;if(h<0&&void 0===e.clockseq&&(d=d+1&16383),(h<0||f>l)&&void 0===e.nsecs&&(b=0),b>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=f,i=b,r=d;var v=(1e4*(268435455&(f+=122192928e5))+b)%4294967296;u[c++]=v>>>24&255,u[c++]=v>>>16&255,u[c++]=v>>>8&255,u[c++]=255&v;var g=f/4294967296*1e4&268435455;u[c++]=g>>>8&255,u[c++]=255&g,u[c++]=g>>>24&15|16,u[c++]=g>>>16&255,u[c++]=d>>>8|128,u[c++]=255&d;for(var y=0;y<6;++y)u[c+y]=m[y];return t||s(u)}},997:function(e,t,a){var n=a(858),r=a(859);e.exports=function(e,t,a){var o=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||n)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var l=0;l<16;++l)t[o+l]=s[l];return t||r(s)}}}]);