(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1586:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a.n(n),o=a(25),i=a.n(o),r=a(24),s=a.n(r),c=a(26),d=a.n(c),m=a(27),u=a.n(m),p=a(21),h=a.n(p),g=a(28),b=a.n(g),f=a(6),v=a.n(f),S=a(0),E=a.n(S),x=a(4),w=a(689),y=a.n(w),N=a(33),k=Object(N.b)((function(e){return{permissions:e.meDetails.permissions}}))((function(e){var t=e.attachment.name;return E.a.createElement("div",{className:"row border ".concat(e.highlightLine),onMouseEnter:function(){return e.onLineEnter()},onMouseLeave:function(){return e.onLineLeave()}},E.a.createElement("div",{className:"col-sm-11"},t),E.a.createElement("div",{className:"col-sm-1"},e.showActionButtons?E.a.createElement("a",{role:"button",onClick:e.toggleDelete},E.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))})),I=a(98),A=(a(741),function(e){return E.a.createElement(I.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.toggleDelete,confirmAction:function(){return e.deleteAttachment(e.attachment.name),void e.toggleDelete()},title:"Verwijderen"},E.a.createElement("p",null,"Wil je deze bijlage verwijderen?"))}),C=function(e){function t(e){var a;return i()(this,t),a=d()(this,u()(t).call(this,e)),v()(h()(a),"onLineEnter",(function(){a.setState({showActionButtons:!0,highlightLine:"highlight-line"})})),v()(h()(a),"onLineLeave",(function(){a.setState({showActionButtons:!1,highlightLine:""})})),v()(h()(a),"toggleDelete",(function(){a.setState({showDelete:!a.state.showDelete})})),a.state={showActionButtons:!1,highlightLine:"",showDelete:!1},a}return b()(t,e),s()(t,[{key:"render",value:function(){return E.a.createElement("div",null,E.a.createElement(k,{highlightLine:this.state.highlightLine,showActionButtons:this.state.showActionButtons,onLineEnter:this.onLineEnter,onLineLeave:this.onLineLeave,toggleDelete:this.toggleDelete,attachment:this.props.attachment}),this.state.showDelete&&E.a.createElement(A,{toggleDelete:this.toggleDelete,attachment:this.props.attachment,deleteAttachment:this.props.deleteAttachment}))}}]),t}(S.Component),T=function(e){var t=e.attachments,a=e.deleteAttachment;return E.a.createElement("div",null,E.a.createElement("div",{className:"row border header"},E.a.createElement("div",{className:"col-sm-11"},"Bestand"),E.a.createElement("div",{className:"col-sm-1"})),t.length>0?t.map((function(e){return E.a.createElement(C,{key:e.name,attachment:e,deleteAttachment:a})})):E.a.createElement("div",null,"Geen bijlagen bekend."))},B=a(769).default,j=function(e){function t(e){var a;return i()(this,t),(a=d()(this,u()(t).call(this,e))).state={error:!1,errorMaxSize:!1},a}return b()(t,e),s()(t,[{key:"onDropAccepted",value:function(e){var t=this;this.props.addAttachment(e),setTimeout((function(){t.props.toggleShowNew()}),500)}},{key:"onDropRejected",value:function(){this.setState({errorMaxSize:!0})}},{key:"render",value:function(){return E.a.createElement(I.a,{closeModal:this.props.toggleShowNew,showConfirmAction:!1,title:"Upload bestand"},E.a.createElement("div",{className:"upload-file-content"},E.a.createElement(B,{className:"dropzone",onDropAccepted:this.onDropAccepted.bind(this),onDropRejected:this.onDropRejected.bind(this),maxSize:6e6},E.a.createElement("p",null,"Klik hier voor het uploaden van een bestand"),E.a.createElement("p",null,E.a.createElement("strong",null,"of")," sleep het bestand hierheen"))),this.state.error&&E.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Probeer nogmaals een bestand te uploaden."),this.state.errorMaxSize&&E.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Het bestand mag maximaal 6MB groot zijn."))}}]),t}(S.Component),z=a(683),M=a(690),L=a(682),O=function(e){function t(e){var a;return i()(this,t),a=d()(this,u()(t).call(this,e)),v()(h()(a),"toggleShowNew",(function(){a.setState({showNew:!a.state.showNew})})),a.state={showNew:!1},a}return b()(t,e),s()(t,[{key:"render",value:function(){return E.a.createElement(L.a,null,E.a.createElement(M.a,null,E.a.createElement("span",{className:"h5 text-bold"},"Bijlagen"),E.a.createElement("a",{role:"button",className:"pull-right",onClick:this.toggleShowNew},E.a.createElement("span",{className:"glyphicon glyphicon-plus"}))),E.a.createElement(z.a,null,E.a.createElement("div",{className:"col-md-12"},E.a.createElement(T,{attachments:this.props.attachments,deleteAttachment:this.props.deleteAttachment})),E.a.createElement("div",{className:"col-md-12 margin-10-top"},this.state.showNew&&E.a.createElement(j,{toggleShowNew:this.toggleShowNew,addAttachment:this.props.addAttachment}))))}}]),t}(S.Component),D=Object(N.b)((function(e){return{permissions:e.meDetails.permissions}}))(O),q=(a(733),a(833)),P=a(718),R=a(956),_=function(e){var t=e.email,a=e.emailAddresses,n=e.mailboxAddresses,l=e.emailTemplates,o=e.errors,i=e.handleFromIds,r=e.handleToIds,s=e.handleEmailTemplates,c=e.handleCcIds,d=e.handleBccIds,m=e.handleInputChange,u=e.handleTextChange,p=t.from,h=t.to,g=t.cc,b=t.bcc,f=t.subject,v=t.htmlBody,S=t.emailTemplateId;return E.a.createElement(L.a,null,E.a.createElement(z.a,null,E.a.createElement("div",{className:"row"},E.a.createElement(P.a,{label:"Van selecteren",name:"from",value:p,options:n,optionName:"email",onChangeAction:i,required:"required",error:o.from,multi:!1})),E.a.createElement("div",{className:"row"},E.a.createElement(q.a,{label:E.a.createElement("span",null,"Aan selecteren",(h+"").split(",").length>1?E.a.createElement(E.a.Fragment,null,E.a.createElement("br",null),E.a.createElement("small",{style:{color:"red",fontWeight:"normal"}},"Meer dan 1 geselecteerd."),E.a.createElement("br",null),E.a.createElement("small",{style:{color:"red",fontWeight:"normal"}},"Samenvoegvelden contact niet mogelijk.")):""),name:"to",value:h,options:a,optionName:"name",onChangeAction:r,allowCreate:!0,required:"required",error:o.to})),E.a.createElement("div",{className:"row"},E.a.createElement(q.a,{label:"Cc selecteren",name:"cc",value:g,options:a,optionName:"name",onChangeAction:c})),E.a.createElement("div",{className:"row"},E.a.createElement(q.a,{label:"Bcc selecteren",name:"bcc",value:b,options:a,optionName:"name",onChangeAction:d})),E.a.createElement("div",{className:"row"},E.a.createElement(P.a,{label:"Template",name:"emailTemplateId",value:S,options:l,onChangeAction:s,multi:!1})),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"form-group col-sm-12"},E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-sm-3"},E.a.createElement("label",{className:"col-sm-12 required"},"Onderwerp")),E.a.createElement("div",{className:"col-sm-9"},E.a.createElement("input",{type:"text",className:"form-control input-sm ".concat(o.subject?"has-error":""),name:"subject",value:f,onChange:m}))))),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"form-group col-sm-12"},E.a.createElement("div",{className:"row"},E.a.createElement(R.a,{label:"Tekst",value:v,onChangeAction:u}))))))},F=function(e){var t=e.email,a=e.mailboxAddresses,n=e.emailAddresses,l=e.emailTemplates,o=e.errors,i=e.handleSubmit,r=e.handleFromIds,s=e.handleEmailTemplates,c=e.handleToIds,d=e.handleCcIds,m=e.handleBccIds,u=e.handleInputChange,p=e.handleTextChange,h=e.addAttachment,g=e.deleteAttachment;return E.a.createElement("form",{className:"form-horizontal",onSubmit:i},E.a.createElement(_,{email:t,emailAddresses:n,mailboxAddresses:a,emailTemplates:l,errors:o,handleSubmit:i,handleFromIds:r,handleEmailTemplates:s,handleToIds:c,handleCcIds:d,handleBccIds:m,handleInputChange:u,handleTextChange:p}),E.a.createElement(D,{attachments:t.attachments,addAttachment:h,deleteAttachment:g}))},U=a(685),V=a(684),W=function(e){var t=e.handleSubmit,a=e.loading,n=e.goBack;return E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-4"},E.a.createElement("div",{className:"btn-group margin-small margin-10-right",role:"group"},E.a.createElement(U.a,{iconName:"glyphicon-arrow-left",onClickAction:n})),E.a.createElement("div",{className:"btn-group margin-small",role:"group"},E.a.createElement(V.a,{buttonText:"Opslaan als concept",onClickAction:function(e){t(e,!0)}}),E.a.createElement(V.a,{buttonText:"Verstuur e-mail",onClickAction:t,loading:a,loadText:"E-mail verzenden"}))),E.a.createElement("div",{className:"col-md-4"},E.a.createElement("h4",{className:"text-center margin-small"},"Nieuwe e-mail")),E.a.createElement("div",{className:"col-md-4"}))},G=a(146),X=a(213),J=a(66),K=a(101),H=(a(197),a(149));function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Z=function(e){function t(e){var a;return i()(this,t),a=d()(this,u()(t).call(this,e)),v()(h()(a),"setButtonLoading",(function(){a.setState({buttonLoading:!0})})),v()(h()(a),"goBack",(function(){""!==a.state.email.htmlBody||""!==a.state.email.subject?a.toggleShowModal():x.e.goBack()})),v()(h()(a),"toggleShowModal",(function(){a.setState({showModal:!a.state.showModal})})),a.state={showModal:!1,buttonLoading:!1,emailAddresses:[],mailboxAddresses:[],emailTemplates:[],email:{from:"",to:"",cc:"",bcc:"",templateId:"",subject:"",htmlBody:"",attachments:[],quotationRequestId:e.params.quotationRequestId?e.params.quotationRequestId:"",intakeId:e.params.intakeId?e.params.intakeId:""},errors:{from:!1,to:!1,subject:!1}},a.handleInputChange=a.handleInputChange.bind(h()(a)),a.handleFromIds=a.handleFromIds.bind(h()(a)),a.handleEmailTemplates=a.handleEmailTemplates.bind(h()(a)),a.handleToIds=a.handleToIds.bind(h()(a)),a.handleCcIds=a.handleCcIds.bind(h()(a)),a.handleBccIds=a.handleBccIds.bind(h()(a)),a.handleTextChange=a.handleTextChange.bind(h()(a)),a.addAttachment=a.addAttachment.bind(h()(a)),a.deleteAttachment=a.deleteAttachment.bind(h()(a)),a.handleSubmit=a.handleSubmit.bind(h()(a)),a}return b()(t,e),s()(t,[{key:"componentDidMount",value:function(){var e=this;this.props.params.contactId&&X.a.fetchPrimaryEmailAddressId(this.props.params.contactId).then((function(t){e.setState(Y({},e.state,{email:Y({},e.state.email,{to:t.join(",")})}))})),X.a.fetchEmailAddressessPeek().then((function(t){e.setState({emailAddresses:t},(function(){e.props.params.groupId&&e.props.params.type&&G.a.fetchEmailGroup(e.props.params.groupId).then((function(t){var a=e.state.emailAddresses;a.push({id:"@group_"+e.props.params.groupId,name:t}),e.setState(Y({},e.state,{emailAddresses:a,email:Y({},e.state.email,v()({},e.props.params.type,"@group_"+e.props.params.groupId))}))}))}))})),J.a.fetchMailboxesLoggedInUserPeek().then((function(t){e.setState({mailboxAddresses:t})})),K.a.fetchEmailTemplatesPeek().then((function(t){e.setState({emailTemplates:t})})),"bulk"===this.props.params.type&&this.props.toIds&&X.a.fetchPrimaryEmailAddressId(this.props.toIds).then((function(t){e.setState(Y({},e.state,{email:Y({},e.state.email,{to:t.join(",")})}))})),this.props.params.documentId&&H.a.fetchDocumentDetails(this.props.params.documentId).then((function(t){t.data.data.contact&&X.a.fetchPrimaryEmailAddressId(t.data.data.contact.id).then((function(t){e.setState(Y({},e.state,{email:Y({},e.state.email,{to:t.join(",")})}))}));var a=t.data.data.filename?t.data.data.filename:"bijlage.pdf";H.a.download(e.props.params.documentId).then((function(t){e.addAttachment([new File([t.data],a)])}))}))}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Y({},this.state,{email:Y({},this.state.email,v()({},n,a))}))}},{key:"handleFromIds",value:function(e){this.setState(Y({},this.state,{email:Y({},this.state.email,{from:e})}))}},{key:"handleToIds",value:function(e){this.setState(Y({},this.state,{email:Y({},this.state.email,{to:e})}))}},{key:"handleEmailTemplates",value:function(e){var t=this;this.setState(Y({},this.state,{email:Y({},this.state.email,{emailTemplateId:e})})),K.a.fetchEmailTemplateWithUser(e).then((function(e){t.setState(Y({},t.state,{email:Y({},t.state.email,{subject:e.subject?e.subject:t.state.email.subject,htmlBody:e.htmlBody?e.htmlBody:t.state.email.htmlBody})}))}))}},{key:"handleCcIds",value:function(e){this.setState(Y({},this.state,{email:Y({},this.state.email,{cc:e})}))}},{key:"handleBccIds",value:function(e){this.setState(Y({},this.state,{email:Y({},this.state.email,{bcc:e})}))}},{key:"handleTextChange",value:function(e){this.setState(Y({},this.state,{email:Y({},this.state.email,{htmlBody:e.target.getContent({format:"raw"})})}))}},{key:"addAttachment",value:function(e){this.setState(Y({},this.state,{email:Y({},this.state.email,{attachments:[].concat(l()(this.state.email.attachments),l()(e))})}))}},{key:"deleteAttachment",value:function(e){this.setState(Y({},this.state,{email:Y({},this.state.email,{attachments:this.state.email.attachments.filter((function(t){return t.name!==e}))})}))}},{key:"handleSubmit",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.preventDefault();var a=this.state.email,n={},l=!1;if(y.a.isEmpty(""+a.to)&&(n.to=!0,l=!0),y.a.isEmpty(""+a.from)&&(n.from=!0,l=!0),y.a.isEmpty(""+a.subject)&&(n.subject=!0,l=!0),this.setState(Y({},this.state,{errors:n})),!l){a.to.length>0&&(a.to=a.to.split(",")),a.cc.length>0&&(a.cc=a.cc.split(",")),a.bcc.length>0&&(a.bcc=a.bcc.split(","));var o=new FormData;o.append("to",JSON.stringify(a.to)),o.append("cc",JSON.stringify(a.cc)),o.append("bcc",JSON.stringify(a.bcc)),o.append("subject",a.subject),o.append("htmlBody",a.htmlBody),o.append("quotationRequestId",a.quotationRequestId),o.append("intakeId",a.intakeId),a.attachments.map((function(e,t){o.append("attachments["+t+"]",e)})),t?G.a.newConcept(o,a.from).then((function(){x.f.push("/emails/concept")})).catch((function(e){})):(this.setButtonLoading(),G.a.newEmail(o,a.from).then((function(){x.e.goBack()})).catch((function(e){})))}}},{key:"render",value:function(){return E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-9"},E.a.createElement("div",{className:"col-md-12"},E.a.createElement(L.a,null,E.a.createElement(z.a,{className:"panel-small"},E.a.createElement(W,{loading:this.state.buttonLoading,handleSubmit:this.handleSubmit,goBack:this.goBack})))),E.a.createElement("div",{className:"col-md-12"},E.a.createElement(F,{email:this.state.email,emailAddresses:this.state.emailAddresses,mailboxAddresses:this.state.mailboxAddresses,emailTemplates:this.state.emailTemplates,errors:this.state.errors,handleSubmit:this.handleSubmit,handleFromIds:this.handleFromIds,handleEmailTemplates:this.handleEmailTemplates,handleToIds:this.handleToIds,handleCcIds:this.handleCcIds,handleBccIds:this.handleBccIds,handleInputChange:this.handleInputChange,handleTextChange:this.handleTextChange,addAttachment:this.addAttachment,deleteAttachment:this.deleteAttachment}))),E.a.createElement("div",{className:"col-md-3"}),this.state.showModal&&E.a.createElement(I.a,{buttonConfirmText:"Verlaten",closeModal:this.toggleShowModal,confirmAction:x.e.goBack,title:"Bevestigen"},E.a.createElement("p",null,"Weet u zeker dat u deze pagina wilt verlaten zonder deze e-mail op te slaan als concept?")))}}]),t}(S.Component);t.default=Object(N.b)((function(e){return{toIds:e.bulkMailTo.toIds}}))(Z)},682:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),r=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,o=e.onMouseLeave;return l.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:o},t)};r.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},r.propTypes={className:i.a.string,onMouseEnter:i.a.func,onMouseLeave:i.a.func},t.a=r},683:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),r=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-body ".concat(t)},a)};r.defaultProps={className:""},r.propTypes={className:i.a.string},t.a=r},684:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),r=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,o=e.type,i=e.value,r=e.loading,s=e.loadText,c=e.disabled;return r?l.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(t),value:i,disabled:r},l.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",s):l.a.createElement("button",{type:o,className:"btn btn-sm ".concat(t),onClick:n,value:i,disabled:c},a)};r.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},r.propTypes={buttonClassName:i.a.string,buttonText:i.a.string.isRequired,onClickAction:i.a.func,type:i.a.string,value:i.a.string,loading:i.a.bool,loadText:i.a.string,disabled:i.a.bool},t.a=r},685:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),r=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,o=e.title,i=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:i,title:o},l.a.createElement("span",{className:"glyphicon ".concat(a)}))};r.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},r.propTypes={buttonClassName:i.a.string,iconName:i.a.string.isRequired,onClickAction:i.a.func,title:i.a.string,disabled:i.a.bool},t.a=r},690:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),r=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-heading ".concat(t)},a)};r.defaultProps={className:""},r.propTypes={className:i.a.string},t.a=r},695:function(e,t,a){var n=a(697);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(201)(n,l);n.locals&&(e.exports=n.locals)},697:function(e,t,a){(e.exports=a(200)(!1)).push([e.i,".Select{position:relative}.Select input::-webkit-contacts-auto-fill-button,.Select input::-webkit-credentials-auto-fill-button{display:none!important}.Select input::-ms-clear,.Select input::-ms-reveal{display:none!important}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none;opacity:.35}.Select.is-disabled>.Select-control{background-color:#f9f9f9}.Select.is-disabled>.Select-control:hover{box-shadow:none}.Select.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.Select.is-open>.Select-control .Select-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.Select.is-searchable.is-focused:not(.is-open)>.Select-control,.Select.is-searchable.is-open>.Select-control{cursor:text}.Select.is-focused>.Select-control{background:#fff}.Select.is-focused:not(.is-open)>.Select-control{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1);background:#fff}.Select.has-value.is-clearable.Select--single>.Select-control .Select-value{padding-right:42px}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value .Select-value-label{color:#333}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus{background:#fff}.Select.has-value.is-pseudo-focused .Select-input{opacity:0}.Select.is-open .Select-arrow,.Select .Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}.Select.Select--rtl{direction:rtl;text-align:right}.Select-control{background-color:#fff;border-color:#d9d9d9 #ccc #b3b3b3;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;border-spacing:0;border-collapse:separate;height:36px;outline:none;overflow:hidden;position:relative;width:100%}.Select-control:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.Select-control .Select-input:focus{outline:none;background:#fff}.Select--single>.Select-control .Select-value,.Select-placeholder{bottom:0;color:#aaa;left:0;line-height:34px;padding-left:10px;padding-right:10px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{width:100%;background:none transparent;border:0 none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;line-height:17px;padding:8px 0 12px;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;text-align:center}.Select-loading,.Select-loading-zone{position:relative;vertical-align:middle;width:16px}.Select-loading{-webkit-animation:Select-animation-spin .4s infinite linear;-o-animation:Select-animation-spin .4s infinite linear;animation:Select-animation-spin .4s infinite linear;height:16px;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn .2s;-o-animation:Select-animation-fadeIn .2s;animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:17px}.Select-clear-zone:hover{color:#d0021b}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:25px;padding-right:5px}.Select--rtl .Select-arrow-zone{padding-right:0;padding-left:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0;position:relative}.Select-control>:last-child{padding-right:5px}.Select--multi .Select-multi-value-wrapper{display:inline-block}.Select .Select-aria-only{position:absolute;display:inline-block;height:1px;width:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden;float:left}@-webkit-keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-shadow:0 1px 0 rgba(0,0,0,.06);box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;left:0;top:100%;width:100%;z-index:1;-webkit-overflow-scrolling:touch}.Select-menu{max-height:198px;overflow-y:auto}.Select-option{box-sizing:border-box;background-color:#fff;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.Select-option.is-selected{background-color:#f5faff;background-color:rgba(0,126,255,.04);color:#333}.Select-option.is-focused{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);color:#333}.Select-option.is-disabled{color:#ccc;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.Select--rtl .Select-input{margin-left:0;margin-right:10px}.Select--multi.has-value .Select-input{margin-left:5px}.Select--multi .Select-value{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid #c2e0ff;border:1px solid rgba(0,126,255,.24);color:#007eff;display:inline-block;font-size:.9em;line-height:1.4;margin-left:5px;margin-top:5px;vertical-align:top}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c2e0ff;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px 3px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:#d8eafd;background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:#c2e0ff;background-color:rgba(0,126,255,.24)}.Select--multi.Select--rtl .Select-value{margin-left:0;margin-right:5px}.Select--multi.Select--rtl .Select-value-icon{border-right:none;border-left:1px solid #c2e0ff;border-left:1px solid rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn)}}",""])},718:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),r=a(709),s=(a(695),function(e){var t=e.label,a=(e.className,e.size),n=e.id,o=e.name,i=e.value,s=e.options,c=e.optionId,d=e.optionName,m=e.onChangeAction,u=e.required,p=e.multi,h=e.error;return l.a.createElement("div",{className:"form-group col-sm-6"},l.a.createElement("label",{htmlFor:n,className:"col-sm-6 ".concat(u)},t),l.a.createElement("div",{className:"".concat(a)},l.a.createElement(r.default,{id:n,name:o,value:i,onChange:m,options:s,valueKey:c,labelKey:d,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:p,simpleValue:!0,removeSelected:!0,className:h?" has-error":""})))});s.defaultProps={className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0},s.propTypes={label:i.a.string.isRequired,className:i.a.string,size:i.a.string,id:i.a.string,name:i.a.string.isRequired,options:i.a.array,optionId:i.a.string,optionName:i.a.string,value:i.a.string,onChangeAction:i.a.func,onBlurAction:i.a.func,required:i.a.string,readOnly:i.a.bool,error:i.a.bool,multi:i.a.bool},t.a=s},733:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),r=(a(753),a(754),a(755),a(756),a(757),a(758),a(759),a(760),a(761),a(762),a(763),a(768)),s=function(e){var t=e.label,a=e.value,n=e.onChangeAction;return l.a.createElement("div",null,l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:"quotationText",className:"col-sm-12"},t)),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(r.a,{initialValue:a,init:{branding:!1,language:"nl",menubar:!1,plugins:"paste lists advlist link image code table textcolor pagebreak",toolbar:"undo redo | formatselect fontselect | bold italic forecolor | alignleft aligncenter alignright | pagebreak | bullist numlist outdent indent | table | link image | code",height:"300",browser_spellcheck:!0,font_formats:"Courier New=courier new;Tahoma=tahoma;Times New Roman=times new roman;Verdana=verdana;"},onChange:n})))};s.defaultProps={value:"",errorMessage:""},s.propTypes={label:i.a.string.isRequired,type:i.a.string,id:i.a.string,placeholder:i.a.string,value:i.a.string,onChangeAction:i.a.func},t.a=s},741:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return s}));var n=function(e){return{type:"FETCH_MAILBOX_DETAILS",id:e}},l=function(e){return{type:"UPDATE_MAILBOX_DETAILS",mailbox:e}},o=function(e){return{type:"NEW_MAILBOX_USER",mailboxUser:e}},i=function(e,t){return{type:"DELETE_MAILBOX_USER",mailboxId:e,userId:t}},r=function(e){return{type:"NEW_MAILBOX_IGNORE",ignore:e}},s=function(e){return{type:"DELETE_MAILBOX_IGNORE",ignoreId:e}}},833:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(14),i=a.n(o),r=a(709),s=(a(695),function(e){var t=e.label,a=(e.className,e.size),n=e.id,o=e.name,i=e.value,s=e.options,c=e.optionId,d=e.optionName,m=e.onChangeAction,u=e.required,p=(e.allowCreate,e.error);return l.a.createElement("div",{className:"form-group col-sm-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:n,className:"col-sm-12 ".concat(u)},t)),l.a.createElement("div",{className:"".concat(a)},l.a.createElement(r.default.Creatable,{id:n,name:o,value:i,onChange:m,options:s,valueKey:c,labelKey:d,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:!0,simpleValue:!0,removeSelected:!0,promptTextCreator:function(e){return'Maak optie "'.concat(e,'" aan')},className:p?" has-error":""}))))});s.defaultProps={allowCreate:!1,className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:""},s.propTypes={allowCreate:i.a.bool,label:i.a.string.isRequired,className:i.a.string,size:i.a.string,id:i.a.string,name:i.a.string.isRequired,options:i.a.array,optionId:i.a.string,optionName:i.a.string,value:i.a.string,onChangeAction:i.a.func,onBlurAction:i.a.func,required:i.a.string,readOnly:i.a.bool,error:i.a.bool},t.a=s},956:function(e,t,a){"use strict";var n=a(25),l=a.n(n),o=a(24),i=a.n(o),r=a(26),s=a.n(r),c=a(27),d=a.n(c),m=a(28),u=a.n(m),p=a(0),h=a.n(p),g=a(14),b=a.n(g),f=(a(753),a(754),a(755),a(756),a(757),a(758),a(759),a(760),a(761),a(762),a(763),a(768)),v=a(197),S=function(e){function t(){return l()(this,t),s()(this,d()(t).apply(this,arguments))}return u()(t,e),i()(t,[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value){var t=window.tinymce.EditorManager.get("tinyMCEUpdateable");this.props.value&&!Object(v.isEqual)(t.getContent({format:"raw"}),this.props.value)&&(t.setContent(this.props.value),t.selection.select(t.getBody(),!0),t.selection.collapse(!1))}}},{key:"render",value:function(){var e=this.props,t=e.label,a=e.value,n=e.onChangeAction;return h.a.createElement("div",null,h.a.createElement("div",{className:"col-sm-3"},h.a.createElement("label",{htmlFor:"quotationText",className:"col-sm-12"},t)),h.a.createElement("div",{className:"col-sm-9"},h.a.createElement(f.a,{id:"tinyMCEUpdateable",initialValue:a,init:{branding:!1,language:"nl",menubar:!1,plugins:"paste lists advlist link image code table textcolor pagebreak",toolbar:"undo redo | formatselect fontselect | bold italic forecolor | alignleft aligncenter alignright | pagebreak | bullist numlist outdent indent | table | link image | code",height:"300",browser_spellcheck:!0,font_formats:"Courier New=courier new;Tahoma=tahoma;Times New Roman=times new roman;Verdana=verdana;"},onChange:n})))}}]),t}(p.Component);S.defaultProps={value:"",errorMessage:""},S.propTypes={label:b.a.string.isRequired,type:b.a.string,id:b.a.string,placeholder:b.a.string,value:b.a.string,onChangeAction:b.a.func},t.a=S}}]);