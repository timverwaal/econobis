(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1623:function(e,a,t){"use strict";t.r(a);var n=t(25),l=t.n(n),r=t(24),s=t.n(r),c=t(26),o=t.n(c),i=t(27),m=t.n(i),u=t(21),d=t.n(u),p=t(28),b=t.n(p),h=t(6),g=t.n(h),v=t(0),f=t.n(v),N=t(689),E=t.n(N),y=(t(197),t(4)),C=t(682),T=t(683),w=t(685),k=function(e){function a(e){var t;return l()(this,a),(t=o()(this,m()(a).call(this,e))).state={showDelete:!1},t}return b()(a,e),s()(a,[{key:"render",value:function(){return f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-12"},f.a.createElement(C.a,null,f.a.createElement(T.a,{className:"panel-small"},f.a.createElement("div",{className:"col-md-4"},f.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},f.a.createElement(w.a,{iconName:"glyphicon-arrow-left",onClickAction:y.e.goBack}))),f.a.createElement("div",{className:"col-md-4"},f.a.createElement("h3",{className:"text-center table-title"},"Nieuwe e-mail template")),f.a.createElement("div",{className:"col-md-4"})))))}}]),a}(v.Component),O=(t(8),t(684)),x=t(695),j=t(733),P=function(e){var a=e.emailTemplate,t=a.name,n=a.subject,l=a.htmlBody;return f.a.createElement("form",{className:"form-horizontal col-md-12",onSubmit:e.handleSubmit},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"form-group col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-3"},f.a.createElement("label",{htmlFor:"name",className:"col-sm-12 required"},"Naam")),f.a.createElement("div",{className:"col-sm-8"},f.a.createElement("input",{name:"name",value:t,onChange:e.handleInputChange,className:"form-control input-sm "+(e.errors.name?"has-error":"")}))))),f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"form-group col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-3"},f.a.createElement("label",{htmlFor:"subject",className:"col-sm-12"},"Standaard onderwerp")),f.a.createElement("div",{className:"col-sm-8"},f.a.createElement("input",{name:"subject",value:n,onChange:e.handleInputChange,className:"form-control input-sm"}))))),f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"form-group col-sm-12"},f.a.createElement("div",{className:"row"},f.a.createElement(j.a,{label:"Tekst",value:l,onChangeAction:e.handleTextChange})))),f.a.createElement(x.a,null,f.a.createElement("div",{className:"pull-right btn-group",role:"group"},f.a.createElement(O.a,{buttonText:"Opslaan",onClickAction:e.handleSubmit,type:"submit",value:"Submit"}))))},S=t(101);function A(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function M(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?A(Object(t),!0).forEach((function(a){g()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var D=function(e){function a(e){var t;return l()(this,a),t=o()(this,m()(a).call(this,e)),g()(d()(t),"handleInputChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,l=a.name;t.setState(M({},t.state,{emailTemplate:M({},t.state.emailTemplate,g()({},l,n))}))})),g()(d()(t),"handleSubmit",(function(e){e.preventDefault();var a=t.state.emailTemplate,n={},l=!1;E.a.isEmpty(a.name)&&(n.name=!0,l=!0),t.setState(M({},t.state,{errors:n})),!l&&S.a.storeEmailTemplate(a).then((function(e){y.f.push("/email-template/".concat(e.id))}))})),t.state={emailTemplate:{name:"",subject:"",htmlBody:""},errors:{name:!1,hasErrors:!1}},t.handleTextChange=t.handleTextChange.bind(d()(t)),t}return b()(a,e),s()(a,[{key:"handleTextChange",value:function(e){this.setState(M({},this.state,{emailTemplate:M({},this.state.emailTemplate,{htmlBody:e.target.getContent({format:"raw"})})}))}},{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("div",{className:"panel panel-default"},f.a.createElement("div",{className:"panel-body"},f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(k,null)),f.a.createElement("div",{className:"col-md-12 margin-10-top"},f.a.createElement(P,{emailTemplate:this.state.emailTemplate,errors:this.state.errors,handleInputChange:this.handleInputChange,handleTextChange:this.handleTextChange,handleSubmit:this.handleSubmit})))))}}]),a}(v.Component);a.default=D},682:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),s=t.n(r),c=function(e){var a=e.children,t=e.className,n=e.onMouseEnter,r=e.onMouseLeave;return l.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:n,onMouseLeave:r},a)};c.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},c.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},a.a=c},683:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),s=t.n(r),c=function(e){var a=e.className,t=e.children;return l.a.createElement("div",{className:"panel-body ".concat(a)},t)};c.defaultProps={className:""},c.propTypes={className:s.a.string},a.a=c},684:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),s=t.n(r),c=function(e){var a=e.buttonClassName,t=e.buttonText,n=e.onClickAction,r=e.type,s=e.value,c=e.loading,o=e.loadText,i=e.disabled;return c?l.a.createElement("button",{type:r,className:"btn btn-sm btn-loading ".concat(a),value:s,disabled:c},l.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",o):l.a.createElement("button",{type:r,className:"btn btn-sm ".concat(a),onClick:n,value:s,disabled:i},t)};c.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},c.propTypes={buttonClassName:s.a.string,buttonText:s.a.string.isRequired,onClickAction:s.a.func,type:s.a.string,value:s.a.string,loading:s.a.bool,loadText:s.a.string,disabled:s.a.bool},a.a=c},685:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),s=t.n(r),c=function(e){var a=e.buttonClassName,t=e.iconName,n=e.onClickAction,r=e.title,s=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:n,disabled:s,title:r},l.a.createElement("span",{className:"glyphicon ".concat(t)}))};c.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},c.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},a.a=c},695:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),s=t.n(r),c=function(e){var a=e.className,t=e.children;return l.a.createElement("div",{className:"panel-footer ".concat(a)},t)};c.defaultProps={className:""},c.propTypes={className:s.a.string},a.a=c},733:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),s=t.n(r),c=(t(750),t(751),t(752),t(753),t(754),t(755),t(756),t(757),t(758),t(759),t(760),t(768)),o=function(e){var a=e.label,t=e.value,n=e.onChangeAction;return l.a.createElement("div",null,l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:"quotationText",className:"col-sm-12"},a)),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(c.a,{initialValue:t,init:{branding:!1,language:"nl",menubar:!1,plugins:"paste lists advlist link image code table textcolor pagebreak",toolbar:"undo redo | formatselect fontselect | bold italic forecolor | alignleft aligncenter alignright | pagebreak | bullist numlist outdent indent | table | link image | code",height:"300",browser_spellcheck:!0,font_formats:"Courier New=courier new;Tahoma=tahoma;Times New Roman=times new roman;Verdana=verdana;"},onChange:n})))};o.defaultProps={value:"",errorMessage:""},o.propTypes={label:s.a.string.isRequired,type:s.a.string,id:s.a.string,placeholder:s.a.string,value:s.a.string,onChangeAction:s.a.func},a.a=o}}]);