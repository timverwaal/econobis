(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1545:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a.n(n),s=a(25),o=a.n(s),c=a(24),i=a.n(c),r=a(26),m=a.n(r),d=a(27),u=a.n(d),h=a(21),p=a.n(h),g=a(28),b=a.n(g),v=a(6),f=a.n(v),E=a(0),N=a.n(E),w=a(689),y=a.n(w),C=a(197),A=a(682),k=a(33),S=a(146),j=a(704),I=a.n(j),T=Object(k.b)((function(e){return{permissions:e.meDetails.permissions}}))((function(e){var t=e.attachment,a=t.id,n=t.name;return N.a.createElement("div",{className:"row border ".concat(e.highlightLine),onMouseEnter:function(){return e.onLineEnter()},onMouseLeave:function(){return e.onLineLeave()}},N.a.createElement("div",{onClick:function(){return function(e,t){S.a.downloadAttachment(e).then((function(e){I()(e.data,t)}))}(a,n)},className:"col-sm-11"},n),N.a.createElement("div",{className:"col-sm-1"},e.showActionButtons?N.a.createElement("a",{role:"button",onClick:e.toggleDelete},N.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))})),L=a(98),x=function(e){return N.a.createElement(L.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.toggleDelete,confirmAction:function(){return e.deleteAttachment(e.attachment.name,e.attachment.id),void e.toggleDelete()},title:"Verwijderen"},N.a.createElement("p",null,"Wil je deze bijlage verwijderen?"))},O=function(e){function t(e){var a;return o()(this,t),a=m()(this,u()(t).call(this,e)),f()(p()(a),"onLineEnter",(function(){a.setState({showActionButtons:!0,highlightLine:"highlight-line"})})),f()(p()(a),"onLineLeave",(function(){a.setState({showActionButtons:!1,highlightLine:""})})),f()(p()(a),"toggleDelete",(function(){a.setState({showDelete:!a.state.showDelete})})),a.state={showActionButtons:!1,highlightLine:"",showDelete:!1},a}return b()(t,e),i()(t,[{key:"render",value:function(){return N.a.createElement("div",null,N.a.createElement(T,{highlightLine:this.state.highlightLine,showActionButtons:this.state.showActionButtons,onLineEnter:this.onLineEnter,onLineLeave:this.onLineLeave,toggleDelete:this.toggleDelete,attachment:this.props.attachment}),this.state.showDelete&&N.a.createElement(x,{toggleDelete:this.toggleDelete,attachment:this.props.attachment,deleteAttachment:this.props.deleteAttachment}))}}]),t}(E.Component),B=function(e){var t=e.attachments;return N.a.createElement("div",null,N.a.createElement("div",{className:"row border header"},N.a.createElement("div",{className:"col-sm-11"},"Naam"),N.a.createElement("div",{className:"col-sm-1"})),t.length>0?t.map((function(t){return N.a.createElement(O,{key:t.name,attachment:t,deleteAttachment:e.deleteAttachment})})):N.a.createElement("div",null,"Geen bijlages bekend."))},D=a(770).default,M=function(e){function t(e){var a;return o()(this,t),(a=m()(this,u()(t).call(this,e))).state={error:!1,errorMaxSize:!1},a}return b()(t,e),i()(t,[{key:"onDropAccepted",value:function(e){this.props.addAttachment(e),this.props.toggleShowNew()}},{key:"onDropRejected",value:function(){this.setState({errorMaxSize:!0})}},{key:"render",value:function(){return N.a.createElement(L.a,{closeModal:this.props.toggleShowNew,showConfirmAction:!1,title:"Upload bestand"},N.a.createElement("div",{className:"upload-file-content"},N.a.createElement(D,{className:"dropzone",onDropAccepted:this.onDropAccepted.bind(this),onDropRejected:this.onDropRejected.bind(this),maxSize:6e6},N.a.createElement("p",null,"Klik hier voor het uploaden van een bestand"),N.a.createElement("p",null,N.a.createElement("strong",null,"of")," sleep het bestand hierheen"))),this.state.error&&N.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Probeer nogmaals een bestand te uploaden."),this.state.errorMaxSize&&N.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Het bestand mag maximaal 6MB groot zijn."))}}]),t}(E.Component),P=a(683),R=a(690),q=function(e){function t(e){var a;return o()(this,t),a=m()(this,u()(t).call(this,e)),f()(p()(a),"toggleShowNew",(function(){a.setState({showNew:!a.state.showNew})})),a.state={showNew:!1},a}return b()(t,e),i()(t,[{key:"render",value:function(){return N.a.createElement("div",null,N.a.createElement(R.a,null,N.a.createElement("span",{className:"h5 text-bold"},"Bijlages"),N.a.createElement("a",{role:"button",className:"pull-right",onClick:this.toggleShowNew},N.a.createElement("span",{className:"glyphicon glyphicon-plus"}))),N.a.createElement(P.a,null,N.a.createElement("div",{className:"col-md-12"},N.a.createElement(B,{attachments:this.props.attachments,deleteAttachment:this.props.deleteAttachment})),N.a.createElement("div",{className:"col-md-12 margin-10-top"},this.state.showNew&&N.a.createElement(M,{toggleShowNew:this.toggleShowNew,addAttachment:this.props.addAttachment}))))}}]),t}(E.Component),z=Object(k.b)((function(e){return{permissions:e.meDetails.permissions}}))(q),F=a(733),G=a(831),U=(a(687),a(8),function(e){var t=e.email,a=e.emailAddresses,n=e.errors,l=e.hasLoaded,s=(e.handleSubmit,e.handleToIds),o=e.handleCcIds,c=e.handleBccIds,i=e.handleInputChange,r=e.handleTextChange,m=t.from,d=t.to,u=t.cc,h=t.bcc,p=t.subject,g=t.htmlBody;return N.a.createElement(P.a,null,N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"row margin-10-bottom"},N.a.createElement("div",{className:"col-sm-3"},N.a.createElement("label",{htmlFor:"description",className:"col-sm-12"},"Van")),N.a.createElement("div",{className:"col-sm-9",id:"from"},m))),N.a.createElement("div",{className:"row"},N.a.createElement(G.a,{label:"Aan selecteren",name:"to",value:d,options:a,optionName:"name",onChangeAction:s,allowCreate:!0,required:"required",error:n.to})),N.a.createElement("div",{className:"row"},N.a.createElement(G.a,{label:"Cc selecteren",name:"cc",value:u,options:a,optionName:"name",onChangeAction:o,error:n.to})),N.a.createElement("div",{className:"row"},N.a.createElement(G.a,{label:"Bcc selecteren",name:"bcc",value:h,options:a,optionName:"name",onChangeAction:c,error:n.to})),N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"form-group col-sm-12"},N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-sm-3"},N.a.createElement("label",{className:"col-sm-12 required"},"Onderwerp")),N.a.createElement("div",{className:"col-sm-9"},N.a.createElement("input",{type:"text",className:"form-control input-sm ".concat(n.subject?"has-error":""),name:"subject",value:p,onChange:i}))))),N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"form-group col-sm-12"},N.a.createElement("div",{className:"row"},l&&N.a.createElement(F.a,{label:"Tekst",value:g,onChangeAction:r})))))}),V=function(e){var t=e.email,a=e.emailAddresses,n=e.errors,l=e.hasLoaded,s=e.handleSubmit,o=e.handleToIds,c=e.handleCcIds,i=e.handleBccIds,r=e.handleInputChange,m=e.handleTextChange,d=e.addAttachment,u=e.deleteAttachment;return N.a.createElement("form",{className:"form-horizontal",onSubmit:s},N.a.createElement(A.a,null,N.a.createElement(U,{email:t,emailAddresses:a,errors:n,hasLoaded:l,handleSubmit:s,handleToIds:o,handleCcIds:c,handleBccIds:i,handleInputChange:r,handleTextChange:m}),N.a.createElement(z,{attachments:t.attachments,deleteAttachment:u,addAttachment:d})))},J=a(4),_=a(685),K=a(684),H=function(e){var t=e.handleSubmit,a=e.loading,n=e.removeEmail;return N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-md-4"},N.a.createElement("div",{className:"btn-group margin-small margin-10-right",role:"group"},N.a.createElement(_.a,{iconName:"glyphicon-arrow-left",onClickAction:J.e.goBack})),N.a.createElement("div",{className:"btn-group margin-small",role:"group"},N.a.createElement(K.a,{buttonText:"Opslaan",onClickAction:function(e){t(e,!0)}}),N.a.createElement(K.a,{buttonText:"Verstuur e-mail",onClickAction:t,loading:a,loadText:"E-mail verzenden"})),N.a.createElement("div",{className:"btn-group margin-small margin-10-left",role:"group"},N.a.createElement(_.a,{iconName:"glyphicon-trash",onClickAction:n}))),N.a.createElement("div",{className:"col-md-4"},N.a.createElement("h4",{className:"text-center margin-small"},"Concept bewerken")),N.a.createElement("div",{className:"col-md-4"}))},W=a(213);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(a),!0).forEach((function(t){f()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y=function(e){function t(e){var a;return o()(this,t),a=m()(this,u()(t).call(this,e)),f()(p()(a),"setButtonLoading",(function(){a.setState({buttonLoading:!0})})),a.state={buttonLoading:!1,emailAddresses:[],email:{from:"",mailboxId:"",to:"",cc:"",bcc:"",subject:"",htmlBody:"",attachments:[]},errors:{to:!1,subject:!1},hasLoaded:!1},a.handleInputChange=a.handleInputChange.bind(p()(a)),a.handleToIds=a.handleToIds.bind(p()(a)),a.handleCcIds=a.handleCcIds.bind(p()(a)),a.handleBccIds=a.handleBccIds.bind(p()(a)),a.handleTextChange=a.handleTextChange.bind(p()(a)),a.addAttachment=a.addAttachment.bind(p()(a)),a.deleteAttachment=a.deleteAttachment.bind(p()(a)),a.handleSubmit=a.handleSubmit.bind(p()(a)),a.removeEmail=a.removeEmail.bind(p()(a)),a}return b()(t,e),i()(t,[{key:"componentDidMount",value:function(){var e=this;W.a.fetchEmailAddressessPeek().then((function(t){e.setState({emailAddresses:[].concat(l()(e.state.emailAddresses),l()(t))})})),S.a.fetchEmail(this.props.params.id).then((function(t){var a=e.createExtraOptions(t.to,t.cc,t.bcc);e.setState(X({},e.state,{email:{id:t.id,from:t.from,mailboxId:t.mailboxId,to:t.to?t.to.join(","):"",cc:t.cc?t.cc.join(","):"",bcc:t.bcc?t.bcc.join(","):"",subject:t.subject?t.subject:"",htmlBody:t.htmlBody?t.htmlBody:"",attachments:t.attachments?t.attachments:""},emailAddresses:[].concat(l()(e.state.emailAddresses),l()(a)),hasLoaded:!0}),(function(){t.contactGroupId&&S.a.fetchEmailGroup(t.contactGroupId).then((function(a){var n=e.state.emailAddresses;n.push({id:"@group_"+t.contactGroupId,name:a});var l="@group_"+t.contactGroupId;t.to.length>0&&(l=l+","+t.to.join(",")),e.setState(X({},e.state,{emailAddresses:n,email:X({},e.state.email,{to:l})}))}))}))}))}},{key:"createExtraOptions",value:function(e,t,a){var n=Object(C.union)(e,t,a),l=[];return n.map((function(e){l.push({id:e,name:e})})),l}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(X({},this.state,{email:X({},this.state.email,f()({},n,a))}))}},{key:"handleToIds",value:function(e){this.setState(X({},this.state,{email:X({},this.state.email,{to:e})}))}},{key:"handleCcIds",value:function(e){this.setState(X({},this.state,{email:X({},this.state.email,{cc:e})}))}},{key:"handleBccIds",value:function(e){this.setState(X({},this.state,{email:X({},this.state.email,{bcc:e})}))}},{key:"handleTextChange",value:function(e){this.setState(X({},this.state,{email:X({},this.state.email,{htmlBody:e.target.getContent({format:"raw"})})}))}},{key:"addAttachment",value:function(e){var t=this,a=new FormData;e.map((function(e,t){a.append("attachments["+t+"]",e)})),S.a.storeAttachment(this.state.email.id,a).then((function(e){t.setState(X({},t.state,{email:X({},t.state.email,{attachments:e.data.data})}))}))}},{key:"deleteAttachment",value:function(e,t){var a=this;S.a.deleteAttachment(t).then((function(){a.setState(X({},a.state,{email:X({},a.state.email,{attachments:a.state.email.attachments.filter((function(t){return t.name!==e}))})}))}))}},{key:"handleSubmit",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.preventDefault();var a=this.state.email,n={},l=!1;function s(e,t){S.a.updateConcept2(e,t).then((function(){J.f.push("/emails/concept")})).catch((function(e){}))}function o(e,t){S.a.sendConcept(e,t).then((function(){J.f.push("/emails/sent")})).catch((function(e){}))}if(y.a.isEmpty(a.to)&&(n.to=!0,l=!0),y.a.isEmpty(""+a.from)&&(n.from=!0,l=!0),y.a.isEmpty(""+a.subject)&&(n.subject=!0,l=!0),this.setState(X({},this.state,{errors:n})),!l){a.to.length>0&&(a.to=a.to.split(",")),a.cc.length>0&&(a.cc=a.cc.split(",")),a.bcc.length>0&&(a.bcc=a.bcc.split(","));var c=new FormData;c.append("to",JSON.stringify(a.to)),c.append("cc",JSON.stringify(a.cc)),c.append("bcc",JSON.stringify(a.bcc)),t?S.a.updateConcept(a,this.props.params.id).then((function(e){s(c,e.data)})).catch((function(e){console.log(e)})):(this.setButtonLoading(),S.a.updateConcept(a,this.props.params.id).then((function(e){o(c,e.data)})).catch((function(e){console.log(e)})))}}},{key:"removeEmail",value:function(){S.a.deleteEmail(this.props.params.id).then((function(){J.e.goBack()}))}},{key:"render",value:function(){return N.a.createElement("div",{className:"row"},N.a.createElement("div",{className:"col-md-9"},N.a.createElement("div",{className:"col-md-12 margin-10-top"},N.a.createElement(A.a,null,N.a.createElement(P.a,{className:"panel-small"},N.a.createElement(H,{loading:this.state.buttonLoading,handleSubmit:this.handleSubmit,removeEmail:this.removeEmail})))),N.a.createElement("div",{className:"col-md-12 margin-10-top"},N.a.createElement(V,{email:this.state.email,emailAddresses:this.state.emailAddresses,errors:this.state.errors,hasLoaded:this.state.hasLoaded,handleSubmit:this.handleSubmit,handleToIds:this.handleToIds,handleCcIds:this.handleCcIds,handleBccIds:this.handleBccIds,handleInputChange:this.handleInputChange,handleTextChange:this.handleTextChange,addAttachment:this.addAttachment,deleteAttachment:this.deleteAttachment}))),N.a.createElement("div",{className:"col-md-3"}))}}]),t}(E.Component);t.default=Y},682:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),c=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,s=e.onMouseLeave;return l.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:s},t)};c.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},c.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},t.a=c},683:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),c=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-body ".concat(t)},a)};c.defaultProps={className:""},c.propTypes={className:o.a.string},t.a=c},684:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),c=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,s=e.type,o=e.value,c=e.loading,i=e.loadText,r=e.disabled;return c?l.a.createElement("button",{type:s,className:"btn btn-sm btn-loading ".concat(t),value:o,disabled:c},l.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",i):l.a.createElement("button",{type:s,className:"btn btn-sm ".concat(t),onClick:n,value:o,disabled:r},a)};c.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},c.propTypes={buttonClassName:o.a.string,buttonText:o.a.string.isRequired,onClickAction:o.a.func,type:o.a.string,value:o.a.string,loading:o.a.bool,loadText:o.a.string,disabled:o.a.bool},t.a=c},685:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),c=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,s=e.title,o=e.disabled;return l.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:o,title:s},l.a.createElement("span",{className:"glyphicon ".concat(a)}))};c.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},c.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},t.a=c},687:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(4),o=a(14),c=a.n(o),i=function(e){var t=e.label,a=e.className,n=e.id,o=e.value,c=e.link,i=e.hidden;return c.length>0?l.a.createElement("div",{className:a,style:i?{display:"none"}:{}},l.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),l.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},l.a.createElement(s.b,{to:c,className:"link-underline"},o))):l.a.createElement("div",{className:a,style:i?{display:"none"}:{}},l.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),l.a.createElement("div",{className:"col-sm-6",id:n},o))};i.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},i.propTypes={label:c.a.oneOfType([c.a.string,c.a.object]).isRequired,className:c.a.string,id:c.a.string,value:c.a.oneOfType([c.a.string,c.a.number]),link:c.a.string,hidden:c.a.bool},t.a=i},690:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),c=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"panel-heading ".concat(t)},a)};c.defaultProps={className:""},c.propTypes={className:o.a.string},t.a=c},704:function(e,t){e.exports=function(e,t,a){var n=new Blob([e],{type:a||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,t);else{var l=window.URL.createObjectURL(n),s=document.createElement("a");s.style.display="none",s.href=l,s.setAttribute("download",t),void 0===s.download&&s.setAttribute("target","_blank"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(l)}}},733:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),c=(a(750),a(751),a(752),a(753),a(754),a(755),a(756),a(757),a(758),a(759),a(760),a(769)),i=function(e){var t=e.label,a=e.value,n=e.onChangeAction;return l.a.createElement("div",null,l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:"quotationText",className:"col-sm-12"},t)),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(c.a,{initialValue:a,init:{branding:!1,language:"nl",menubar:!1,plugins:"paste lists advlist link image code table textcolor pagebreak",toolbar:"undo redo | formatselect fontselect | bold italic forecolor | alignleft aligncenter alignright | pagebreak | bullist numlist outdent indent | table | link image | code",height:"300",browser_spellcheck:!0,font_formats:"Courier New=courier new;Tahoma=tahoma;Times New Roman=times new roman;Verdana=verdana;"},onChange:n})))};i.defaultProps={value:"",errorMessage:""},i.propTypes={label:o.a.string.isRequired,type:o.a.string,id:o.a.string,placeholder:o.a.string,value:o.a.string,onChangeAction:o.a.func},t.a=i},831:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(14),o=a.n(s),c=a(707),i=(a(708),function(e){var t=e.label,a=(e.className,e.size),n=e.id,s=e.name,o=e.value,i=e.options,r=e.optionId,m=e.optionName,d=e.onChangeAction,u=e.required,h=(e.allowCreate,e.error);return l.a.createElement("div",{className:"form-group col-sm-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:n,className:"col-sm-12 ".concat(u)},t)),l.a.createElement("div",{className:"".concat(a)},l.a.createElement(c.a.Creatable,{id:n,name:s,value:o,onChange:d,options:i,valueKey:r,labelKey:m,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:!0,simpleValue:!0,removeSelected:!0,promptTextCreator:function(e){return'Maak optie "'.concat(e,'" aan')},className:h?" has-error":""}))))});i.defaultProps={allowCreate:!1,className:"",size:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:""},i.propTypes={allowCreate:o.a.bool,label:o.a.string.isRequired,className:o.a.string,size:o.a.string,id:o.a.string,name:o.a.string.isRequired,options:o.a.array,optionId:o.a.string,optionName:o.a.string,value:o.a.string,onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,error:o.a.bool},t.a=i}}]);