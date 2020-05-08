(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1555:function(e,t,a){"use strict";a.r(t);var n=a(25),l=a.n(n),o=a(24),r=a.n(o),i=a(26),s=a.n(i),c=a(27),u=a.n(c),d=a(28),m=a.n(d),p=a(0),h=a.n(p),f=a(33),v=function(e){return{type:"FETCH_DOCUMENT_TEMPLATE",id:e}},g=a(21),b=a.n(g),y=a(6),E=a.n(y),T=a(4),N=a(685),k=a(98),C=Object(f.b)(null,(function(e){return{deleteDocumentTemplate:function(t){e(function(e){return{type:"DELETE_DOCUMENT_TEMPLATE",id:e}}(t))}}}))((function(e){return h.a.createElement(k.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deleteDocumentTemplate(e.templateId),void e.closeDeleteItemModal()},title:"Verwijderen"},"Verwijder document template: ",h.a.createElement("strong",null," ",e.templateName," "))})),w=a(102),O=function(e){return h.a.createElement(k.a,{buttonConfirmText:"Dupliceer",closeModal:e.closeModal,confirmAction:function(){w.a.duplicateTemplate(e.templateId).then((function(t){var a=t.data.data.id;T.f.push("/document-template/".concat(a)),e.closeModal()}))},title:"Dupliceer template"},h.a.createElement("p",null,"Dupliceer template: ",h.a.createElement("strong",null," ","".concat(e.templateName)," ")))},D=function(e){function t(e){var a;return l()(this,t),a=s()(this,u()(t).call(this,e)),E()(b()(a),"toggleDuplicate",(function(){a.setState({showDuplicate:!a.state.showDuplicate})})),E()(b()(a),"toggleDelete",(function(){a.setState({showDelete:!a.state.showDelete})})),a.state={showDelete:!1,showDuplicate:!1},a}return m()(t,e),r()(t,[{key:"render",value:function(){var e=this.props.permissions,t=void 0===e?{}:e;return h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-4"},h.a.createElement("div",{className:"btn-group",role:"group"},h.a.createElement(N.a,{iconName:"glyphicon-arrow-left",onClickAction:T.e.goBack}),t.createDocumentTemplate&&h.a.createElement(N.a,{iconName:"glyphicon-duplicate",onClickAction:this.toggleDuplicate}),t.createDocumentTemplate&&h.a.createElement(N.a,{iconName:"glyphicon-trash",onClickAction:this.toggleDelete}))),h.a.createElement("div",{className:"col-md-4"},h.a.createElement("h4",{className:"text-center"},"Document template: "+this.props.templateName)),h.a.createElement("div",{className:"col-md-4"}),this.state.showDelete&&h.a.createElement(C,{closeDeleteItemModal:this.toggleDelete,templateName:this.props.templateName,templateId:this.props.templateId}),this.state.showDuplicate&&h.a.createElement(O,{closeModal:this.toggleDuplicate,templateName:this.props.templateName,templateId:this.props.templateId}))}}]),t}(p.Component),_=Object(f.b)((function(e){return{templateName:e.documentTemplateDetails.name,templateId:e.documentTemplateDetails.id,permissions:e.meDetails.permissions}}),null)(D),M=a(197),j=a(682),P=a(683),A=a(684),I=a(695),x=a(733),S=a(689),q=a.n(S),R=a(8),B=a.n(R),F=a(686),L=a(687),G=a(688),z=a(717),V=a(692);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){E()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var K=function(e){function t(e){var a;l()(this,t),a=s()(this,u()(t).call(this,e)),E()(b()(a),"handleInputChange",(function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(U({},a.state,{documentTemplate:U({},a.state.documentTemplate,E()({},l,n))}))})),E()(b()(a),"handleRoleIds",(function(e){a.setState(U({},a.state,{documentTemplate:U({},a.state.documentTemplate,{roleIds:e})}))})),E()(b()(a),"handleSubmit",(function(e){e.preventDefault();var t=a.state.documentTemplate,n={},l=!1;q.a.isEmpty(t.name)&&(n.name=!0,l=!0),q.a.isEmpty(t.documentGroupId)&&(n.group=!0,l=!0),a.setState(U({},a.state,{errors:n})),!l&&w.a.updateDocumentTemplate(t).then((function(e){a.props.fetchDocumentTemplate(e.id),a.props.switchToView()}))}));var n=e.documentTemplate,o=n.id,r=n.name,i=n.documentGroup,c=n.documentTemplateType,d=n.roles,m=n.characteristic,p=n.htmlBody,h=n.baseTemplate,f=n.headerTemplate,v=n.footerTemplate,g=n.active;return a.state={footerTemplates:[],headerTemplates:[],baseTemplates:[],documentTemplate:{id:o,name:r,documentGroupId:i?i.id:"",roleIds:d&&d.map((function(e){return e.id})).join(","),characteristic:m||"",htmlBody:p||"",baseTemplateId:h?h.id:"",headerTemplateId:f?f.id:"",footerTemplateId:v?v.id:"",active:g},errors:{name:!1,group:!1},isGeneral:!(!c||"general"!==c.id)},a.handleTextChange=a.handleTextChange.bind(b()(a)),a.handleRoleIds=a.handleRoleIds.bind(b()(a)),a}return m()(t,e),r()(t,[{key:"componentDidMount",value:function(){var e=this;w.a.fetchDocumentTemplatesPeekNotGeneral().then((function(t){var a=[],n=[],l=[];t.forEach((function(e){"footer"===e.type?a.push({id:e.id,name:e.name}):"header"===e.type?n.push({id:e.id,name:e.name}):"base"===e.type&&l.push({id:e.id,name:e.name})})),e.setState({footerTemplates:a,headerTemplates:n,baseTemplates:l})}))}},{key:"handleTextChange",value:function(e){this.setState(U({},this.state,{documentTemplate:U({},this.state.documentTemplate,{htmlBody:e.target.getContent({format:"raw"})})}))}},{key:"render",value:function(){var e=this.state.documentTemplate,t=e.name,a=e.documentGroupId,n=e.roleIds,l=e.characteristic,o=e.htmlBody,r=e.baseTemplateId,i=e.headerTemplateId,s=e.footerTemplateId,c=e.active,u=this.props.documentTemplate,d=u.number,m=u.createdAt,p=u.documentTemplateType,f=u.createdBy;return h.a.createElement("div",null,h.a.createElement("div",{className:"row"},h.a.createElement(F.a,{label:"Naam",size:"col-sm-6",name:"name",value:t,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.name}),h.a.createElement(L.a,{label:"Template nummer",value:d})),h.a.createElement("div",{className:"row"},h.a.createElement(G.a,{label:"Documentgroep",name:"documentGroupId",value:a,options:this.props.documentGroups,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.group}),h.a.createElement(L.a,{label:"Documenttype",value:p?p.name:""})),h.a.createElement("div",{className:"row"},h.a.createElement(F.a,{label:"Kenmerk",size:"col-sm-6",name:"characteristic",value:l,onChangeAction:this.handleInputChange}),this.state.isGeneral&&h.a.createElement(z.a,{label:"Rollen",name:"roleIds",value:n,options:this.props.roles,onChangeAction:this.handleRoleIds})),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"form-group col-sm-12"},h.a.createElement("div",{className:"row"},h.a.createElement(x.a,{label:"Tekst",value:o,onChangeAction:this.handleTextChange})))),this.state.isGeneral&&h.a.createElement("div",{className:"row"},h.a.createElement(G.a,{label:"Basis template",name:"baseTemplateId",value:r,options:this.state.baseTemplates,onChangeAction:this.handleInputChange})),this.state.isGeneral&&h.a.createElement("div",{className:"row"},h.a.createElement(G.a,{label:"Koptekst",name:"headerTemplateId",value:i,options:this.state.headerTemplates,onChangeAction:this.handleInputChange})),this.state.isGeneral&&h.a.createElement("div",{className:"row"},h.a.createElement(G.a,{label:"Footer template",name:"footerTemplateId",value:s,options:this.state.footerTemplates,onChangeAction:this.handleInputChange})),h.a.createElement("div",{className:"row"},h.a.createElement(V.a,{label:"Actief",name:"active",value:c,onChangeAction:this.handleInputChange,id:"active"})),h.a.createElement("div",{className:"row"},h.a.createElement(L.a,{label:"Gemaakt op",value:m?B()(m).format("L"):"Onbekend"}),h.a.createElement(L.a,{label:"Gemaakt door",value:f?f.fullName:"Onbekend",link:f?"gebruiker/"+f.id:""})),h.a.createElement(I.a,null,h.a.createElement("div",{className:"pull-right btn-group",role:"group"},h.a.createElement(A.a,{buttonClassName:"btn-default",buttonText:"Annuleren",onClickAction:this.props.switchToView}),h.a.createElement(A.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"}))))}}]),t}(p.Component),W=Object(f.b)((function(e){return{documentTemplate:e.documentTemplateDetails,documentGroups:e.systemData.documentGroups,roles:e.systemData.roles}}),(function(e){return{fetchDocumentTemplate:function(t){e(v(t))}}}))(K),J=a(728);B.a.locale("nl");var Y=Object(f.b)((function(e){return{documentTemplate:e.documentTemplateDetails}}))((function(e){var t=e.documentTemplate,a=t.name,n=t.number,l=t.htmlBody,o=t.characteristic,r=t.roles,i=t.documentGroup,s=t.documentTemplateType,c=t.baseTemplate,u=t.headerTemplate,d=t.footerTemplate,m=t.active,p=t.createdAt,f=t.createdBy;return h.a.createElement("div",null,h.a.createElement("div",{className:"row margin-10-top",onClick:e.switchToEdit},h.a.createElement(L.a,{label:"Template",value:a}),h.a.createElement(L.a,{label:"Template nummer",value:n})),h.a.createElement("div",{className:"row",onClick:e.switchToEdit},h.a.createElement(L.a,{label:"Documentgroep",value:i?i.name:""}),h.a.createElement(L.a,{label:"Documenttype",value:s?s.name:""})),h.a.createElement("div",{className:"row",onClick:e.switchToEdit},h.a.createElement(L.a,{label:"Kenmerk",value:o}),"general"==s.id&&h.a.createElement(L.a,{label:"Rollen",value:r&&r.map((function(e){return e.name})).join(", ")})),h.a.createElement("div",{className:"row",onClick:e.switchToEdit},h.a.createElement(J.a,{label:"Tekst",value:l,switchToEdit:e.switchToEdit})),"general"==s.id&&h.a.createElement("div",{className:"row"},h.a.createElement(L.a,{label:"Basis template",value:c?c.name:"",link:c?"document-template/"+c.id:""})),"general"==s.id&&h.a.createElement("div",{className:"row"},h.a.createElement(L.a,{label:"Koptekst",value:u?u.name:"",link:u?"document-template/"+u.id:""})),"general"==s.id&&h.a.createElement("div",{className:"row"},h.a.createElement(L.a,{label:"Voettekst",value:d?d.name:"",link:d?"document-template/"+d.id:""})),h.a.createElement("div",{className:"row",onClick:e.switchToEdit},h.a.createElement(L.a,{label:"Actief",value:m?"Ja":"Nee"})),h.a.createElement("div",{className:"row",onClick:e.switchToEdit},h.a.createElement(L.a,{label:"Gemaakt op",value:p?B()(p).format("L"):"Onbekend"}),h.a.createElement(L.a,{label:"Gemaakt door",value:f?f.fullName:"Onbekend",link:f?"gebruiker/"+f.id:""})))})),H=function(e){function t(e){var a;return l()(this,t),a=s()(this,u()(t).call(this,e)),E()(b()(a),"switchToEdit",(function(){a.setState({showEdit:!0})})),E()(b()(a),"switchToView",(function(){a.setState({showEdit:!1,activeDiv:""})})),a.state={showEdit:!1,activeDiv:""},a}return m()(t,e),r()(t,[{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this;return h.a.createElement(j.a,{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},h.a.createElement(P.a,null,this.state.showEdit&&this.props.permissions.createDocumentTemplate?h.a.createElement(W,{switchToView:this.switchToView}):h.a.createElement(Y,{switchToEdit:this.switchToEdit})))}}]),t}(p.Component),Q=Object(f.b)((function(e){return{documentTemplate:e.documentTemplateDetails,permissions:e.meDetails.permissions}}))(H),Z=function(e){function t(e){return l()(this,t),s()(this,u()(t).call(this,e))}return m()(t,e),r()(t,[{key:"render",value:function(){var e="",t=!0;return this.props.hasError?e="Fout bij het ophalen van documenttemplate.":this.props.isLoading?e="Gegevens aan het laden.":Object(M.isEmpty)(this.props.documentTemplate)?e="Geen documenttemplate gevonden!":t=!1,t?h.a.createElement("div",null,e):h.a.createElement("div",null,h.a.createElement(Q,null))}}]),t}(p.Component),$=Object(f.b)((function(e){return{documentTemplate:e.documentTemplateDetails,isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}),(function(e){return{fetchDocumentTemplate:function(t){e(v(t))}}}))(Z),ee=function(e){function t(e){return l()(this,t),s()(this,u()(t).call(this,e))}return m()(t,e),r()(t,[{key:"componentDidMount",value:function(){this.props.fetchDocumentTemplate(this.props.params.id)}},{key:"componentWillReceiveProps",value:function(e){this.props.params.id!==e.params.id&&this.props.fetchDocumentTemplate(e.params.id)}},{key:"render",value:function(){return h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-9"},h.a.createElement("div",{className:"col-md-12 margin-10-top"},h.a.createElement(j.a,null,h.a.createElement(P.a,{className:"panel-small"},h.a.createElement(_,null)))),h.a.createElement("div",{className:"col-md-12 margin-10-top"},h.a.createElement($,null))),h.a.createElement("div",{className:"col-md-3"}))}}]),t}(p.Component);t.default=Object(f.b)((function(e){return{documentTemplateDetails:e.documentTemplateDetails}}),(function(e){return{fetchDocumentTemplate:function(t){e(v(t))}}}))(ee)},682:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),r=a.n(o),i=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,o=e.onMouseLeave;return l.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:o},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:r.a.string,onMouseEnter:r.a.func,onMouseLeave:r.a.func},t.a=i},683:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),r=a.n(o),i=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-body ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:r.a.string},t.a=i},684:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),r=a.n(o),i=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,o=e.type,r=e.value,i=e.loading,s=e.loadText,c=e.disabled;return i?l.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(t),value:r,disabled:i},l.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",s):l.a.createElement("button",{type:o,className:"btn btn-sm ".concat(t),onClick:n,value:r,disabled:c},a)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:r.a.string,buttonText:r.a.string.isRequired,onClickAction:r.a.func,type:r.a.string,value:r.a.string,loading:r.a.bool,loadText:r.a.string,disabled:r.a.bool},t.a=i},685:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),r=a.n(o),i=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,o=e.title,r=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:r,title:o},l.a.createElement("span",{className:"glyphicon ".concat(a)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:r.a.string,iconName:r.a.string.isRequired,onClickAction:r.a.func,title:r.a.string,disabled:r.a.bool},t.a=i},686:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),r=a.n(o),i=function(e){var t=e.label,a=e.type,n=e.className,o=e.size,r=e.id,i=e.placeholder,s=e.name,c=e.value,u=e.onClickAction,d=e.onChangeAction,m=e.onBlurAction,p=e.required,h=e.readOnly,f=e.maxLength,v=e.error,g=e.min,b=e.max,y=e.step,E=e.errorMessage,T=e.divSize,N=e.divClassName,k=e.autoComplete;return l.a.createElement("div",{className:"form-group ".concat(T," ").concat(N)},l.a.createElement("label",{htmlFor:r,className:"col-sm-6 ".concat(p)},t),l.a.createElement("div",{className:"".concat(o)},l.a.createElement("input",{type:a,className:"form-control input-sm ".concat(n)+(v?"has-error":""),id:r,placeholder:i,name:s,value:c,onClick:u,onChange:d,onBlur:m,readOnly:h,maxLength:f,min:g,max:b,autoComplete:k,step:y})),v&&l.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},l.a.createElement("span",{className:"has-error-message"}," ",E)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},i.propTypes={label:r.a.oneOfType([r.a.string,r.a.object]).isRequired,type:r.a.string,className:r.a.string,divClassName:r.a.string,size:r.a.string,divSize:r.a.string,id:r.a.string,placeholder:r.a.string,name:r.a.string.isRequired,value:r.a.oneOfType([r.a.string,r.a.number]),onClickAction:r.a.func,onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,maxLength:r.a.string,error:r.a.bool,min:r.a.string,max:r.a.string,step:r.a.string,errorMessage:r.a.string,autoComplete:r.a.string},t.a=i},687:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(4),r=a(14),i=a.n(r),s=function(e){var t=e.label,a=e.className,n=e.id,r=e.value,i=e.link,s=e.hidden;return i.length>0?l.a.createElement("div",{className:a,style:s?{display:"none"}:{}},l.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),l.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},l.a.createElement(o.b,{to:i,className:"link-underline"},r))):l.a.createElement("div",{className:a,style:s?{display:"none"}:{}},l.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),l.a.createElement("div",{className:"col-sm-6",id:n},r))};s.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},s.propTypes={label:i.a.oneOfType([i.a.string,i.a.object]).isRequired,className:i.a.string,id:i.a.string,value:i.a.oneOfType([i.a.string,i.a.number]),link:i.a.string,hidden:i.a.bool},t.a=s},688:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),r=a.n(o),i=function(e){var t=e.label,a=e.className,n=e.size,o=e.id,r=e.name,i=e.value,s=e.options,c=e.onChangeAction,u=e.onBlurAction,d=e.required,m=e.error,p=e.errorMessage,h=e.optionValue,f=e.optionName,v=e.readOnly,g=e.placeholder,b=e.divClassName,y=e.emptyOption;return l.a.createElement("div",{className:"form-group ".concat(n," ").concat(b)},l.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(d)},t),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("select",{className:"form-control input-sm ".concat(a)+(m&&" has-error"),id:o,name:r,value:i,onChange:c,onBlur:u,readOnly:v},y&&l.a.createElement("option",{value:""},g),s.map((function(e){return l.a.createElement("option",{key:e[h],value:e[h]},e[f])})))),m&&l.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},l.a.createElement("span",{className:"has-error-message"}," ",p)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},i.propTypes={label:r.a.string.isRequired,className:r.a.string,size:r.a.string,id:r.a.string,name:r.a.string.isRequired,options:r.a.array,value:r.a.oneOfType([r.a.string,r.a.number]),onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,error:r.a.bool,errorMessage:r.a.string,emptyOption:r.a.bool,optionValue:r.a.string,optionName:r.a.string,placeholder:r.a.string},t.a=i},692:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),r=a.n(o),i=a(696),s=a.n(i),c=function(e){var t=e.label,a=e.size,n=e.id,o=e.name,r=e.value,i=e.onChangeAction,c=e.required,u=e.divSize,d=e.className,m=e.disabled;return l.a.createElement("div",{className:"form-group ".concat(u," ").concat(d)},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:n,className:"col-sm-6 ".concat(c)},t)),l.a.createElement("div",{className:"".concat(a)},l.a.createElement(s.a,{id:n,name:o,onChange:i,checked:r,disabled:m})))};c.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",disabled:!1,value:null},c.propTypes={label:r.a.string.isRequired,type:r.a.string,size:r.a.string,divSize:r.a.string,id:r.a.string,name:r.a.string.isRequired,value:r.a.bool,onChangeAction:r.a.func,required:r.a.string,disabled:r.a.bool},t.a=c},695:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),r=a.n(o),i=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-footer ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:r.a.string},t.a=i},696:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),r=m(o),i=m(a(703)),s=m(a(14)),c=m(a(697)),u=m(a(698)),d=a(699);function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,l=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),o=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return r.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},r.default.createElement("div",{className:"react-toggle-track"},r.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),r.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),r.default.createElement("div",{className:"react-toggle-thumb"}),r.default.createElement("input",n({},l,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=p,p.displayName="Toggle",p.defaultProps={icons:{checked:r.default.createElement(c.default,null),unchecked:r.default.createElement(u.default,null)}},p.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},697:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),o=(n=l)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},698:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),o=(n=l)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},699:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},717:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),r=a.n(o),i=a(707),s=(a(708),function(e){var t=e.label,a=(e.className,e.size),n=e.id,o=e.name,r=e.value,s=e.options,c=e.optionId,u=e.optionName,d=e.onChangeAction,m=e.required,p=e.multi,h=e.error;return l.a.createElement("div",{className:"form-group col-sm-6"},l.a.createElement("label",{htmlFor:n,className:"col-sm-6 ".concat(m)},t),l.a.createElement("div",{className:"".concat(a)},l.a.createElement(i.a,{id:n,name:o,value:r,onChange:d,options:s,valueKey:c,labelKey:u,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:p,simpleValue:!0,removeSelected:!0,className:h?" has-error":""})))});s.defaultProps={className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0},s.propTypes={label:r.a.string.isRequired,className:r.a.string,size:r.a.string,id:r.a.string,name:r.a.string.isRequired,options:r.a.array,optionId:r.a.string,optionName:r.a.string,value:r.a.string,onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,error:r.a.bool,multi:r.a.bool},t.a=s},728:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(736),r=a.n(o),i=a(14),s=a.n(i),c=a(682),u=a(684),d=function(e){var t=e.label,a=e.className,n=e.id,o=e.value,i=e.switchToEdit;return l.a.createElement("div",{className:a},l.a.createElement("label",{htmlFor:n,className:"col-sm-3"},t,i?l.a.createElement("span",null,l.a.createElement("br",null),l.a.createElement(u.a,{buttonClassName:"btn-success btn-padding-small",buttonText:"Wijzig",onClickAction:i})):""),l.a.createElement(c.a,{className:"col-sm-9"},l.a.createElement(r.a,null,l.a.createElement("div",{id:n,dangerouslySetInnerHTML:{__html:o}}))))};d.defaultProps={className:"col-sm-12",value:""},d.propTypes={label:s.a.string.isRequired,className:s.a.string,id:s.a.string,value:s.a.oneOfType([s.a.string,s.a.number])},t.a=d},733:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),r=a.n(o),i=(a(750),a(751),a(752),a(753),a(754),a(755),a(756),a(757),a(758),a(759),a(760),a(768)),s=function(e){var t=e.label,a=e.value,n=e.onChangeAction;return l.a.createElement("div",null,l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:"quotationText",className:"col-sm-12"},t)),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(i.a,{initialValue:a,init:{branding:!1,language:"nl",menubar:!1,plugins:"paste lists advlist link image code table textcolor pagebreak",toolbar:"undo redo | formatselect fontselect | bold italic forecolor | alignleft aligncenter alignright | pagebreak | bullist numlist outdent indent | table | link image | code",height:"300",browser_spellcheck:!0,font_formats:"Courier New=courier new;Tahoma=tahoma;Times New Roman=times new roman;Verdana=verdana;"},onChange:n})))};s.defaultProps={value:"",errorMessage:""},s.propTypes={label:r.a.string.isRequired,type:r.a.string,id:r.a.string,placeholder:r.a.string,value:r.a.string,onChangeAction:r.a.func},t.a=s},736:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(737),o=(n=l)&&n.__esModule?n:{default:n};t.default=o.default},737:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),r=u(o),i=u(a(79)),s=u(a(14)),c=u(a(738));function u(e){return e&&e.__esModule?e:{default:e}}var d,m="undefined"!=typeof window&&window.console,p=function(){},h=p,f=p;m&&(d=console.error,h=function(){console.error=function(e){/<head>/.test(e)||d.call(console,e)}},f=function(){return console.error=d});var v=function(e){function t(e,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return n._isMounted=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.renderFrameContents()}},{key:"componentDidUpdate",value:function(){this.renderFrameContents()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1;var e=this.getDoc(),t=this.getMountTarget();e&&t&&i.default.unmountComponentAtNode(t)}},{key:"getDoc",value:function(){return i.default.findDOMNode(this).contentDocument}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(this._isMounted){var e=this.getDoc();if(e&&"complete"===e.readyState){null===e.querySelector("div")&&(this._setInitialContent=!1);var t=e.defaultView||e.parentView,a=!this._setInitialContent,n=r.default.createElement(c.default,{document:e,window:t},r.default.createElement("div",{className:"frame-content"},this.props.head,this.props.children));a&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close(),this._setInitialContent=!0),h();var l=a?this.props.contentDidMount:this.props.contentDidUpdate,o=this.getMountTarget();i.default.unstable_renderSubtreeIntoContainer(this,n,o,l),f()}else setTimeout(this.renderFrameContents.bind(this),0)}}},{key:"render",value:function(){var e=n({},this.props,{children:void 0});return delete e.head,delete e.initialContent,delete e.mountTarget,delete e.contentDidMount,delete e.contentDidUpdate,r.default.createElement("iframe",e)}}]),t}(o.Component);v.propTypes={style:s.default.object,head:s.default.node,initialContent:s.default.string,mountTarget:s.default.string,contentDidMount:s.default.func,contentDidUpdate:s.default.func,children:s.default.oneOfType([s.default.element,s.default.arrayOf(s.default.element)])},v.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=v},738:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),o=(r(l),r(a(14)));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"getChildContext",value:function(){return{document:this.props.document,window:this.props.window}}},{key:"render",value:function(){return l.Children.only(this.props.children)}}]),t}(l.Component);c.propTypes={document:o.default.object.isRequired,window:o.default.object.isRequired,children:o.default.element.isRequired},c.childContextTypes={document:o.default.object.isRequired,window:o.default.object.isRequired},t.default=c}}]);