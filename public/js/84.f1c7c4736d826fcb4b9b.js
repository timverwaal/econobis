(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1552:function(e,a,t){"use strict";t.r(a);var o=t(25),n=t.n(o),r=t(24),s=t.n(r),l=t(26),i=t.n(l),c=t(27),m=t.n(c),p=t(21),d=t.n(p),u=t(28),g=t.n(u),h=t(6),b=t.n(h),v=t(0),k=t.n(v),f=t(197),C=t(198),N=t.n(C),E=t(33),S=t(689),y=t.n(S),w=t(8),T=t.n(w),x=t(684),I=t(682),R=t(683),P=t(12),A=function(e){var a="".concat("setting","/multiple").concat(e);return P.a.get(a)},O=function(e){var a="".concat("setting");return P.a.post(a,e)},z=t(15),L=t(200),U=t(686),q=t(742),j=t(702),D=t(692),F=t(98),M=t(770).default,B=function(e){function a(e){var t;return n()(this,a),(t=i()(this,m()(a).call(this,e))).state={error:!1,errorMaxSize:!1},t}return g()(a,e),s()(a,[{key:"onDropAccepted",value:function(e){var a=this;this.props.addLogo(e),setTimeout((function(){a.props.toggleShowNewLogo()}),500)}},{key:"onDropRejected",value:function(){this.setState({errorMaxSize:!0})}},{key:"render",value:function(){return k.a.createElement(F.a,{closeModal:this.props.toggleShowNewLogo,showConfirmAction:!1,title:"Upload logo bestand (PNG)"},k.a.createElement("div",{className:"upload-file-content"},k.a.createElement(M,{accept:"image/png",multiple:!1,className:"dropzone",onDropAccepted:this.onDropAccepted.bind(this),onDropRejected:this.onDropRejected.bind(this),maxSize:6e6},k.a.createElement("p",null,"Klik hier voor het uploaden van een bestand"),k.a.createElement("p",null,k.a.createElement("strong",null,"of")," sleep het bestand hierheen"))),this.state.error&&k.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Probeer nogmaals een bestand te uploaden."),this.state.errorMaxSize&&k.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Het bestand moet bestandstype PNG zijn en mag maximaal 6MB groot zijn."))}}]),a}(v.Component),H=t(770).default,W=function(e){function a(e){var t;return n()(this,a),(t=i()(this,m()(a).call(this,e))).state={error:!1,errorMaxSize:!1},t}return g()(a,e),s()(a,[{key:"onDropAccepted",value:function(e){var a=this;this.props.addFavicon(e),setTimeout((function(){a.props.toggleShowNewFavicon()}),500)}},{key:"onDropRejected",value:function(){this.setState({errorMaxSize:!0})}},{key:"render",value:function(){return k.a.createElement(F.a,{closeModal:this.props.toggleShowNewFavicon,showConfirmAction:!1,title:"Upload favicon bestand (ICO)"},k.a.createElement("div",{className:"upload-file-content"},k.a.createElement(H,{accept:".ico",multiple:!1,className:"dropzone",onDropAccepted:this.onDropAccepted.bind(this),onDropRejected:this.onDropRejected.bind(this),maxSize:1e6},k.a.createElement("p",null,"Klik hier voor het uploaden van een bestand"),k.a.createElement("p",null,k.a.createElement("strong",null,"of")," sleep het bestand hierheen"))),this.state.error&&k.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Probeer nogmaals een bestand te uploaden."),this.state.errorMaxSize&&k.a.createElement("p",{className:"has-error-message"},"Uploaden mislukt. Het bestand moet bestandstype ICO zijn en mag maximaal 1MB groot zijn."))}}]),a}(v.Component),V=t(1103);function G(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function K(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?G(Object(t),!0).forEach((function(a){b()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}T.a.locale("nl");var _=function(e){function a(e){var t;return n()(this,a),t=i()(this,m()(a).call(this,e)),b()(d()(t),"toggleNewLogo",(function(){t.manageTechnicalPortalSettings&&t.setState({newLogo:!t.state.newLogo})})),b()(d()(t),"toggleNewFavicon",(function(){t.manageTechnicalPortalSettings&&t.setState({newFavicon:!t.state.newFavicon})})),b()(d()(t),"addLogo",(function(e){t.setState(K({},t.state,{attachmentLogo:e[0],filenameLogo:e[0].name}))})),b()(d()(t),"addFavicon",(function(e){t.setState(K({},t.state,{attachmentFavicon:e[0],filenameFavicon:e[0].name}))})),b()(d()(t),"handleInputChange",(function(e){var a=e.target,o="checkbox"===a.type?a.checked:a.value,n=a.name;t.setState(K({},t.state,{portalSettings:K({},t.state.portalSettings,b()({},n,o))}))})),b()(d()(t),"handleSubmit",(function(e){e.preventDefault();var a=t.state,o=a.portalSettings,n=a.attachmentLogo,r=a.attachmentFavicon,s={},l=!1;y.a.isEmpty(o.portalUrl)&&(s.portalUrl=!0,l=!0),y.a.isEmpty(o.backgroundColor)&&(s.backgroundColor=!0,l=!0),y.a.isEmpty(o.backgroundTextColor)&&(s.backgroundTextColor=!0,l=!0),y.a.isEmpty(o.backgroundImageColor)&&(s.backgroundImageColor=!0,l=!0),y.a.isEmpty(o.backgroundImageTextColor)&&(s.backgroundImageTextColor=!0,l=!0),y.a.isEmpty(o.backgroundSecondaryColor)&&(s.backgroundSecondaryColor=!0,l=!0),y.a.isEmpty(o.backgroundSecondaryTextColor)&&(s.backgroundSecondaryTextColor=!0,l=!0),y.a.isEmpty(o.buttonColor)&&(s.buttonColor=!0,l=!0),y.a.isEmpty(o.buttonTextColor)&&(s.buttonTextColor=!0,l=!0),!t.manageTechnicalPortalSettings&&y.a.isEmpty(o.responsibleUserId+"")&&(s.responsibleUserId=!0,l=!0),!t.manageTechnicalPortalSettings&&y.a.isEmpty(o.contactResponsibleOwnerUserId+"")&&(s.contactResponsibleOwnerUserId=!0,l=!0),!t.manageTechnicalPortalSettings&&y.a.isEmpty(o.checkContactTaskResponsible+"")&&(s.checkContactTaskResponsible=!0,l=!0),!t.manageTechnicalPortalSettings&&y.a.isEmpty(o.linkPrivacyPolicy)&&(s.linkPrivacyPolicy=!0,l=!0),!t.manageTechnicalPortalSettings&&y.a.isEmpty(o.emailTemplateNewAccountId+"")&&(s.emailTemplateNewAccountId=!0,l=!0),!t.manageTechnicalPortalSettings&&y.a.isEmpty(o.portalName)&&(s.portalName=!0,l=!0),!t.manageTechnicalPortalSettings&&y.a.isEmpty(o.cooperativeName)&&(s.cooperativeName=!0,l=!0),!t.manageTechnicalPortalSettings&&y.a.isEmpty(o.portalWebsite)&&(s.portalWebsite=!0,l=!0),o.checkContactTaskResponsible.search("user")>=0&&(o.checkContactTaskResponsibleUserId=o.checkContactTaskResponsible.replace("user",""),o.checkContactTaskResponsibleTeamId=""),o.checkContactTaskResponsible.search("team")>=0&&(o.checkContactTaskResponsibleUserId="",o.checkContactTaskResponsibleTeamId=o.checkContactTaskResponsible.replace("team",""));var i=new FormData;i.append("portalName",o.portalName?o.portalName:""),i.append("cooperativeName",o.cooperativeName?o.cooperativeName:""),i.append("portalWebsite",o.portalWebsite?o.portalWebsite:""),i.append("portalUrl",o.portalUrl),i.append("backgroundColor",o.backgroundColor),i.append("backgroundTextColor",o.backgroundTextColor),i.append("backgroundImageColor",o.backgroundImageColor),i.append("backgroundImageTextColor",o.backgroundImageTextColor),i.append("backgroundSecondaryColor",o.backgroundSecondaryColor),i.append("backgroundSecondaryTextColor",o.backgroundSecondaryTextColor),i.append("buttonColor",o.buttonColor),i.append("buttonTextColor",o.buttonTextColor),i.append("responsibleUserId",o.responsibleUserId?o.responsibleUserId:""),i.append("checkContactTaskResponsibleUserId",o.checkContactTaskResponsibleUserId?o.checkContactTaskResponsibleUserId:""),i.append("checkContactTaskResponsibleTeamId",o.checkContactTaskResponsibleTeamId?o.checkContactTaskResponsibleTeamId:""),i.append("contactResponsibleOwnerUserId",o.contactResponsibleOwnerUserId?o.contactResponsibleOwnerUserId:""),i.append("emailTemplateNewAccountId",o.emailTemplateNewAccountId?o.emailTemplateNewAccountId:""),i.append("linkPrivacyPolicy",o.linkPrivacyPolicy?o.linkPrivacyPolicy:""),i.append("showNewAtCooperativeLink",o.showNewAtCooperativeLink),i.append("attachmentLogo",n),i.append("attachmentFavicon",r),t.setState(K({},t.state,{errors:s})),!l&&O(i).then((function(e){t.props.updateState(o),t.props.fetchSystemData(),t.props.switchToView()})).catch((function(e){alert("Er is iets misgegaan bij opslaan. Herlaad de pagina en probeer het nogmaals.")}))})),t.manageTechnicalPortalSettings="support@econobis.nl"==t.props.meDetails.email||"info@xaris.nl"==t.props.meDetails.email,t.state={portalSettings:K({},e.portalSettings),emailTemplates:K({},e.emailTemplates),attachmentLogo:"",filenameLogo:"logo.png",newLogo:!1,attachmentFavicon:"",filenameFavicon:"favicon.ico",newFavicon:!1,errors:{portalName:!1,cooperativeName:!1,portalWebsite:!1,portalUrl:!1,backgroundColor:!1,backgroundTextColor:!1,backgroundImageColor:!1,backgroundImageTextColor:!1,backgroundSecondaryColor:!1,backgroundSecondaryTextColor:!1,buttonColor:!1,buttonTextColor:!1,responsibleUserId:!1,checkContactTaskResponsibleUserId:!1,checkContactTaskResponsibleTeamId:!1,checkContactTaskResponsible:!1,contactResponsibleOwnerUserId:!1,emailTemplateNewAccountId:!1,linkPrivacyPolicy:!1,showNewAtCooperativeLink:!1}},t.handleReactSelectChange=t.handleReactSelectChange.bind(d()(t)),t}return g()(a,e),s()(a,[{key:"handleReactSelectChange",value:function(e,a){this.setState(K({},this.state,{portalSettings:K({},this.state.portalSettings,b()({},a,e))}))}},{key:"render",value:function(){var e=this.state.portalSettings,a=e.portalName,t=e.cooperativeName,o=e.portalWebsite,n=e.portalUrl,r=e.backgroundColor,s=e.backgroundTextColor,l=e.backgroundImageColor,i=e.backgroundImageTextColor,c=e.backgroundSecondaryColor,m=e.backgroundSecondaryTextColor,p=e.buttonColor,d=e.buttonTextColor,u=e.responsibleUserId,g=e.checkContactTaskResponsible,h=e.contactResponsibleOwnerUserId,b=e.emailTemplateNewAccountId,v=e.linkPrivacyPolicy,f=e.showNewAtCooperativeLink,C="".concat(URL_API,"/portal/images/logo.png?").concat(this.props.imageHash),N="".concat(URL_API,"/portal/favicon.ico?").concat(this.props.imageHash);return k.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},k.a.createElement(I.a,null,k.a.createElement(R.a,null,k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Contacten portal URL",divSize:"col-sm-8",name:"portalUrl",value:n,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.portalUrl})),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Logo",divSize:"col-sm-8",value:this.state.attachmentLogo.name?this.state.attachmentLogo.name:"logo.png",onClickAction:this.toggleNewLogo,onChangeaction:function(){},readOnly:!this.manageTechnicalPortalSettings,required:"required"}),k.a.createElement(V.a,{src:this.state.attachmentLogo&&this.state.attachmentLogo.preview?this.state.attachmentLogo.preview:C,style:{backgroundColor:l,color:i,border:"1px solid #999",display:"inline-block",padding:"1px",borderRadius:"1px",height:"50px",boxShadow:"0 0 0 1px #fff inset"}})),this.state.newLogo&&k.a.createElement(B,{toggleShowNewLogo:this.toggleNewLogo,addLogo:this.addLogo}),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Favicon",divSize:"col-sm-8",value:"favicon.ico",onClickAction:this.toggleNewFavicon,onChangeaction:function(){},readOnly:!this.manageTechnicalPortalSettings,required:"required"}),k.a.createElement(V.a,{src:this.state.attachmentFavicon&&this.state.attachmentFavicon.preview?this.state.attachmentFavicon.preview:N,style:{border:"1px solid #999",display:"inline-block",padding:"1px",borderRadius:"1px",height:"20px",boxShadow:"0 0 0 1px #fff inset"}})),this.state.newFavicon&&k.a.createElement(W,{toggleShowNewFavicon:this.toggleNewFavicon,addFavicon:this.addFavicon}),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Login - achtergrond afbeelding kleur",divSize:"col-sm-8",name:"backgroundImageColor",value:l,readOnly:!this.manageTechnicalPortalSettings,required:"required",onChangeAction:this.handleInputChange,error:this.state.errors.backgroundImageColor}),k.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:l,color:i,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"50px",height:"30px",boxShadow:"0 0 0 2px #fff inset"}},"Tekst")),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Login - achtergrond afbeelding tekst kleur",divSize:"col-sm-8",name:"backgroundImageTextColor",value:i,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.backgroundImageTextColor})),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Login - veld achtergrond kleur",divSize:"col-sm-8",name:"backgroundSecondaryColor",value:c,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.backgroundSecondaryColor}),k.a.createElement("div",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:l,display:"inline-block"}},k.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:c,color:m,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"50px",height:"30px",boxShadow:"0 0 0 2px #fff inset"}},"Tekst"))),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Login - veld tekst kleur",divSize:"col-sm-8",name:"backgroundSecondaryTextColor",value:m,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.backgroundSecondaryTextColor})),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Achtergrond kleur",divSize:"col-sm-8",name:"backgroundColor",value:r,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.backgroundColor}),k.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:r,color:s,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"50px",height:"30px",boxShadow:"0 0 0 2px #fff inset"}},"Tekst")),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Achtergrond tekst kleur",divSize:"col-sm-8",name:"backgroundTextColor",value:s,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.backgroundTextColor})),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Buttonknop kleur",divSize:"col-sm-8",name:"buttonColor",value:p,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.buttonColor}),k.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:p,color:d,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"50px",height:"30px",boxShadow:"0 0 0 2px #fff inset"}},"Tekst")),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Buttonknop tekst kleur",divSize:"col-sm-8",name:"buttonTextColor",value:d,onChangeAction:this.handleInputChange,readOnly:!this.manageTechnicalPortalSettings,required:"required",error:this.state.errors.buttonTextColor})),k.a.createElement("hr",null),k.a.createElement("div",{className:"row"},k.a.createElement(j.a,{label:"Verantwoordelijke portal",divSize:"col-sm-8",name:"responsibleUserId",value:u,options:this.props.users,optionName:"fullName",onChangeAction:this.handleReactSelectChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.responsibleUserId,multi:!1})),k.a.createElement("div",{className:"row"},k.a.createElement(j.a,{label:"Eigenaar nieuwe contacten",divSize:"col-sm-8",name:"contactResponsibleOwnerUserId",value:h,options:this.props.users,optionName:"fullName",onChangeAction:this.handleReactSelectChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.contactResponsibleOwnerUserId,multi:!1})),k.a.createElement("div",{className:"row"},k.a.createElement(q.a,{label:"Verantwoordelijke uitvoeren taak",divSize:"col-sm-8",name:"checkContactTaskResponsible",optionsInGroups:[{name:"user",label:"Gebruikers",options:this.props.users,optionName:"fullName"},{name:"team",label:"Teams",options:this.props.teams}],value:g,onChangeAction:this.handleInputChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.checkContactTaskResponsible})),k.a.createElement("div",{className:"row"},k.a.createElement(D.a,{label:"Nieuw bij, aanmelden mogelijk",divSize:"col-sm-8",name:"showNewAtCooperativeLink",value:f,onChangeAction:this.handleInputChange})),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Privacybeleid link",divSize:"col-sm-8",name:"linkPrivacyPolicy",value:v,onChangeAction:this.handleInputChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.linkPrivacyPolicy})),k.a.createElement("div",{className:"row"},k.a.createElement(j.a,{label:"E-mail template Nieuwe account activeren",divSize:"col-sm-8",name:"emailTemplateNewAccountId",value:b,options:this.props.emailTemplates,onChangeAction:this.handleReactSelectChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.emailTemplateNewAccountId,multi:!1})),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Coöperatie portal naam",divSize:"col-sm-8",name:"portalName",value:a,onChangeAction:this.handleInputChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.portalName})),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Coöperatie naam",divSize:"col-sm-8",name:"cooperativeName",value:t,onChangeAction:this.handleInputChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.cooperativeName})),k.a.createElement("div",{className:"row"},k.a.createElement(U.a,{label:"Coöperatie website",divSize:"col-sm-8",name:"portalWebsite",value:o,onChangeAction:this.handleInputChange,required:this.manageTechnicalPortalSettings?"":"required",error:this.state.errors.portalWebsite}))),k.a.createElement(R.a,null,k.a.createElement("div",{className:"pull-right btn-group",role:"group"},k.a.createElement(x.a,{buttonClassName:"btn-default",buttonText:"Sluiten",onClickAction:this.props.switchToView}),k.a.createElement(x.a,{buttonText:"Opslaan",type:"submit",value:"Submit"})))))}}]),a}(v.Component),J=Object(E.b)(null,(function(e){return Object(z.b)({fetchSystemData:L.a},e)}))(_),Q=t(687),X=function(e){var a=e.portalName,t=e.cooperativeName,o=e.portalWebsite,n=e.portalUrl,r=e.backgroundColor,s=e.backgroundTextColor,l=e.backgroundImageColor,i=e.backgroundImageTextColor,c=e.backgroundSecondaryColor,m=e.backgroundSecondaryTextColor,p=e.buttonColor,d=e.buttonTextColor,u=e.responsibleUser,g=e.checkContactTaskResponsibleUser,h=e.checkContactTaskResponsibleTeam,b=(e.checkContactTaskResponsible,e.contactResponsibleOwnerUser),v=e.emailTemplateNewAccount,f=e.linkPrivacyPolicy,C=e.showNewAtCooperativeLink,N=e.switchToEdit,E=e.imageHash;return k.a.createElement("div",{onClick:N},k.a.createElement(I.a,null,k.a.createElement(R.a,null,k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Contacten portal URL",divSize:"col-sm-8",value:n,className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Logo",divSize:"col-sm-8",value:"logo.png",className:"col-sm-8 form-group"}),k.a.createElement(V.a,{src:"".concat(URL_API,"/portal/images/logo.png?").concat(E),style:{backgroundColor:l,color:i,border:"1px solid #999",display:"inline-block",padding:"1px",borderRadius:"1px",height:"50px",boxShadow:"0 0 0 1px #fff inset"}})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Favicon",divSize:"col-sm-8",value:"favicon.ico",className:"col-sm-8 form-group"}),k.a.createElement(V.a,{src:"".concat(URL_API,"/portal/favicon.ico?").concat(E),style:{border:"1px solid #999",display:"inline-block",padding:"1px",borderRadius:"1px",height:"20px",boxShadow:"0 0 0 1px #fff inset"}})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Login - achtergrond afbeelding kleur",divSize:"col-sm-8",value:l,className:"col-sm-8 form-group"}),k.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:l,color:i,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"50px",height:"30px",boxShadow:"0 0 0 2px #fff inset"}},"Tekst")),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Login - achtergrond afbeelding tekst kleur",divSize:"col-sm-8",value:i,className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Login - veld achtergrond kleur",divSize:"col-sm-8",value:c,className:"col-sm-8 form-group"}),k.a.createElement("div",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:l,display:"inline-block"}},k.a.createElement("span",{unselectable:"unselectable",style:{backgroundColor:c,color:m,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"50px",height:"30px",boxShadow:"0 0 0 2px #fff inset"}},"Tekst"))),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Login - veld tekst kleur",divSize:"col-sm-8",value:m,className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Achtergrond kleur",divSize:"col-sm-8",value:r,className:"col-sm-8 form-group"}),k.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:r,color:s,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"50px",height:"30px",boxShadow:"0 0 0 2px #fff inset"}},"Tekst")),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Achtergrond tekst kleur",divSize:"col-sm-8",value:s,className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Buttonknop kleur",divSize:"col-sm-8",value:p,className:"col-sm-8 form-group"}),k.a.createElement("span",{className:"rc-color-picker-trigger",unselectable:"unselectable",style:{backgroundColor:p,color:d,border:"1px solid #999",display:"inline-block",padding:"2px",borderRadius:"2px",width:"50px",height:"30px",boxShadow:"0 0 0 2px #fff inset"}},"Tekst")),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Buttonknop tekst kleur",divSize:"col-sm-8",value:d,className:"col-sm-8 form-group"})),k.a.createElement("hr",null),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Verantwoordelijke portal",divSize:"col-sm-8",value:u?u.fullName:"",className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Eigenaar nieuwe contacten",divSize:"col-sm-8",value:b?b.fullName:"",className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Verantwoordelijke uitvoeren taak",divSize:"col-sm-8",value:g?g.fullName:h?h.name:"",className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Nieuw bij, aanmelden mogelijk",divSize:"col-sm-8",value:C?"Ja":"Nee",className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Privacybeleid link",divSize:"col-sm-8",value:f,className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Email template Nieuwe account activeren",divSize:"col-sm-8",value:v?v.name:"",className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Coöperatie portal naam",divSize:"col-sm-8",value:a,className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Coöperatie naam",divSize:"col-sm-8",value:t,className:"col-sm-8 form-group"})),k.a.createElement("div",{className:"row"},k.a.createElement(Q.a,{label:"Coöperatie website",divSize:"col-sm-8",value:o,className:"col-sm-8 form-group"})))))},Y=t(101),Z=function(e){function a(e){var t;return n()(this,a),t=i()(this,m()(a).call(this,e)),b()(d()(t),"switchToEdit",(function(){t.setState({showEdit:!0})})),b()(d()(t),"switchToView",(function(){t.setState({imageHash:Date.now(),showEdit:!1,activeDiv:""})})),t.state={emailTemplates:[],imageHash:Date.now(),showEdit:!1,activeDiv:""},t}return g()(a,e),s()(a,[{key:"componentDidMount",value:function(){var e=this;Y.a.fetchEmailTemplatesPeek().then((function(a){e.setState({emailTemplates:a})}))}},{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this,a=this.props.meDetails.permissions,t=void 0===a?{}:a;return this.props.portalSettings.responsibleUser="",this.props.portalSettings.responsibleUserId&&0!=this.props.portalSettings.responsibleUserId&&(this.props.portalSettings.responsibleUser=this.props.users.find((function(a){return a.id==e.props.portalSettings.responsibleUserId}))),this.props.portalSettings.contactResponsibleOwnerUser="",this.props.portalSettings.contactResponsibleOwnerUserId&&0!=this.props.portalSettings.contactResponsibleOwnerUserId&&(this.props.portalSettings.contactResponsibleOwnerUser=this.props.users.find((function(a){return a.id==e.props.portalSettings.contactResponsibleOwnerUserId}))),this.props.portalSettings.emailTemplateNewAccount="",this.props.portalSettings.emailTemplateNewAccountId&&0!=this.props.portalSettings.emailTemplateNewAccountId&&(this.props.portalSettings.emailTemplateNewAccount=this.state.emailTemplates.find((function(a){return a.id==e.props.portalSettings.emailTemplateNewAccountId}))),this.props.portalSettings.checkContactTaskResponsible="",this.props.portalSettings.checkContactTaskResponsibleUser=null,this.props.portalSettings.checkContactTaskResponsibleTeam=null,this.props.portalSettings.checkContactTaskResponsibleUserId&&0!=this.props.portalSettings.checkContactTaskResponsibleUserId&&(this.props.portalSettings.checkContactTaskResponsible="user"+this.props.portalSettings.checkContactTaskResponsibleUserId,this.props.portalSettings.checkContactTaskResponsibleUser=this.props.users.find((function(a){return a.id==e.props.portalSettings.checkContactTaskResponsibleUserId}))),this.props.portalSettings.checkContactTaskResponsibleTeamId&&0!=this.props.portalSettings.checkContactTaskResponsibleTeamId&&(this.props.portalSettings.checkContactTaskResponsible="team"+this.props.portalSettings.checkContactTaskResponsibleTeamId,this.props.portalSettings.checkContactTaskResponsibleTeam=this.props.teams.find((function(a){return a.id==e.props.portalSettings.checkContactTaskResponsibleTeamId}))),k.a.createElement("div",{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},this.state.showEdit&&t.managePortalSettings?k.a.createElement(J,{portalSettings:this.props.portalSettings,emailTemplates:this.state.emailTemplates,switchToView:this.switchToView,imageHash:this.state.imageHash,updateState:this.props.updateState,users:this.props.users,teams:this.props.teams,meDetails:this.props.meDetails}):k.a.createElement(X,N()({},this.props.portalSettings,{switchToEdit:this.switchToEdit,imageHash:this.state.imageHash})))}}]),a}(v.Component),$=Object(E.b)((function(e){return{meDetails:e.meDetails,permissions:e.meDetails.permissions,teams:e.systemData.teams,users:e.systemData.users}}))(Z),ee=function(e){var a=e.portalSettings,t=e.hasError,o=e.isLoading,n=e.updateState,r=(e.emailTemplates,""),s=!0;return t?r="Fout bij het ophalen van portal instellingen.":o?r="Gegevens aan het laden.":Object(f.isEmpty)(a)?r="Geen portal instellingen gevonden!":s=!1,s?k.a.createElement("div",null,r):k.a.createElement("div",null,k.a.createElement($,{portalSettings:a,updateState:n}))},ae=t(4),te=t(685),oe=function(){return k.a.createElement("div",{className:"row"},k.a.createElement("div",{className:"col-md-4"},k.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},k.a.createElement(te.a,{iconName:"glyphicon-arrow-left",onClickAction:ae.e.goBack}))),k.a.createElement("div",{className:"col-md-4"},k.a.createElement("h4",{className:"text-center"},"Portal instellingen")),k.a.createElement("div",{className:"col-md-4"}))};function ne(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function re(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ne(Object(t),!0).forEach((function(a){b()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var se=function(e){function a(e){var t;return n()(this,a),t=i()(this,m()(a).call(this,e)),b()(d()(t),"callFetchPortalSettings",(function(){t.setState({isLoading:!0,hasError:!1});A("?keys[]=portalName&keys[]=cooperativeName&keys[]=portalWebsite&keys[]=portalUrl&keys[]=backgroundColor&keys[]=backgroundTextColor&keys[]=backgroundImageColor&keys[]=backgroundImageTextColor&keys[]=backgroundSecondaryColor&keys[]=backgroundSecondaryTextColor&keys[]=buttonColor&keys[]=buttonTextColor&keys[]=responsibleUserId&keys[]=checkContactTaskResponsibleUserId&keys[]=checkContactTaskResponsibleTeamId&keys[]=contactResponsibleOwnerUserId&keys[]=emailTemplateNewAccountId&keys[]=linkPrivacyPolicy&keys[]=showNewAtCooperativeLink").then((function(e){t.setState({isLoading:!1,portalSettings:re({},e.data,{showNewAtCooperativeLink:"true"==e.data.showNewAtCooperativeLink})})})).catch((function(e){t.setState({isLoading:!1,hasError:!0})}))})),b()(d()(t),"updateState",(function(e){t.setState({portalSettings:e})})),t.state={portalSettings:{},isLoading:!1,hasError:!1},t}return g()(a,e),s()(a,[{key:"componentDidMount",value:function(){this.callFetchPortalSettings()}},{key:"render",value:function(){return k.a.createElement("div",{className:"row"},k.a.createElement("div",{className:"col-md-9"},k.a.createElement("div",{className:"col-md-12 margin-10-top"},k.a.createElement(I.a,null,k.a.createElement(R.a,{className:"panel-small"},k.a.createElement(oe,null)))),k.a.createElement("div",{className:"col-md-12 margin-10-top"},k.a.createElement(ee,{portalSettings:this.state.portalSettings,isLoading:this.state.isLoading,hasError:this.state.hasError,updateState:this.updateState}))),k.a.createElement("div",{className:"col-md-3"}))}}]),a}(v.Component);a.default=se},682:function(e,a,t){"use strict";var o=t(0),n=t.n(o),r=t(14),s=t.n(r),l=function(e){var a=e.children,t=e.className,o=e.onMouseEnter,r=e.onMouseLeave;return n.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:o,onMouseLeave:r},a)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},a.a=l},683:function(e,a,t){"use strict";var o=t(0),n=t.n(o),r=t(14),s=t.n(r),l=function(e){var a=e.className,t=e.children;return n.a.createElement("div",{className:"panel-body ".concat(a)},t)};l.defaultProps={className:""},l.propTypes={className:s.a.string},a.a=l},684:function(e,a,t){"use strict";var o=t(0),n=t.n(o),r=t(14),s=t.n(r),l=function(e){var a=e.buttonClassName,t=e.buttonText,o=e.onClickAction,r=e.type,s=e.value,l=e.loading,i=e.loadText,c=e.disabled;return l?n.a.createElement("button",{type:r,className:"btn btn-sm btn-loading ".concat(a),value:s,disabled:l},n.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",i):n.a.createElement("button",{type:r,className:"btn btn-sm ".concat(a),onClick:o,value:s,disabled:c},t)};l.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},l.propTypes={buttonClassName:s.a.string,buttonText:s.a.string.isRequired,onClickAction:s.a.func,type:s.a.string,value:s.a.string,loading:s.a.bool,loadText:s.a.string,disabled:s.a.bool},a.a=l},685:function(e,a,t){"use strict";var o=t(0),n=t.n(o),r=t(14),s=t.n(r),l=function(e){var a=e.buttonClassName,t=e.iconName,o=e.onClickAction,r=e.title,s=e.disabled;return n.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:o,disabled:s,title:r},n.a.createElement("span",{className:"glyphicon ".concat(t)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},a.a=l},686:function(e,a,t){"use strict";var o=t(0),n=t.n(o),r=t(14),s=t.n(r),l=function(e){var a=e.label,t=e.type,o=e.className,r=e.size,s=e.id,l=e.placeholder,i=e.name,c=e.value,m=e.onClickAction,p=e.onChangeAction,d=e.onBlurAction,u=e.required,g=e.readOnly,h=e.maxLength,b=e.error,v=e.min,k=e.max,f=e.step,C=e.errorMessage,N=e.divSize,E=e.divClassName,S=e.autoComplete;return n.a.createElement("div",{className:"form-group ".concat(N," ").concat(E)},n.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(u)},a),n.a.createElement("div",{className:"".concat(r)},n.a.createElement("input",{type:t,className:"form-control input-sm ".concat(o)+(b?"has-error":""),id:s,placeholder:l,name:i,value:c,onClick:m,onChange:p,onBlur:d,readOnly:g,maxLength:h,min:v,max:k,autoComplete:S,step:f})),b&&n.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},n.a.createElement("span",{className:"has-error-message"}," ",C)))};l.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},l.propTypes={label:s.a.oneOfType([s.a.string,s.a.object]).isRequired,type:s.a.string,className:s.a.string,divClassName:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,placeholder:s.a.string,name:s.a.string.isRequired,value:s.a.oneOfType([s.a.string,s.a.number]),onClickAction:s.a.func,onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,maxLength:s.a.string,error:s.a.bool,min:s.a.string,max:s.a.string,step:s.a.string,errorMessage:s.a.string,autoComplete:s.a.string},a.a=l},687:function(e,a,t){"use strict";var o=t(0),n=t.n(o),r=t(4),s=t(14),l=t.n(s),i=function(e){var a=e.label,t=e.className,o=e.id,s=e.value,l=e.link,i=e.hidden;return l.length>0?n.a.createElement("div",{className:t,style:i?{display:"none"}:{}},n.a.createElement("label",{htmlFor:o,className:"col-sm-6"},a),n.a.createElement("div",{className:"col-sm-6",id:o,onClick:null},n.a.createElement(r.b,{to:l,className:"link-underline"},s))):n.a.createElement("div",{className:t,style:i?{display:"none"}:{}},n.a.createElement("label",{htmlFor:o,className:"col-sm-6"},a),n.a.createElement("div",{className:"col-sm-6",id:o},s))};i.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},i.propTypes={label:l.a.oneOfType([l.a.string,l.a.object]).isRequired,className:l.a.string,id:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number]),link:l.a.string,hidden:l.a.bool},a.a=i},692:function(e,a,t){"use strict";var o=t(0),n=t.n(o),r=t(14),s=t.n(r),l=t(696),i=t.n(l),c=function(e){var a=e.label,t=e.size,o=e.id,r=e.name,s=e.value,l=e.onChangeAction,c=e.required,m=e.divSize,p=e.className,d=e.disabled;return n.a.createElement("div",{className:"form-group ".concat(m," ").concat(p)},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(c)},a)),n.a.createElement("div",{className:"".concat(t)},n.a.createElement(i.a,{id:o,name:r,onChange:l,checked:s,disabled:d})))};c.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",disabled:!1,value:null},c.propTypes={label:s.a.string.isRequired,type:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,name:s.a.string.isRequired,value:s.a.bool,onChangeAction:s.a.func,required:s.a.string,disabled:s.a.bool},a.a=c},702:function(e,a,t){"use strict";var o=t(0),n=t.n(o),r=t(14),s=t.n(r),l=t(707),i=(t(708),function(e){var a=e.label,t=e.divSize,o=e.size,r=e.id,s=e.name,i=e.value,c=e.options,m=e.optionId,p=e.optionName,d=e.onChangeAction,u=e.required,g=e.multi,h=e.error,b=e.isLoading;return n.a.createElement("div",{className:"form-group ".concat(t)},n.a.createElement("label",{htmlFor:r,className:"col-sm-6 ".concat(u)},a),n.a.createElement("div",{className:"".concat(o)},n.a.createElement(l.a,{id:r,name:s,value:i,onChange:function(e){d(e||"",s)},options:c,valueKey:m,labelKey:p,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:g,simpleValue:!0,removeSelected:!0,className:h?" has-error":"",isLoading:b})))});i.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0,isLoading:!1},i.propTypes={label:s.a.string.isRequired,className:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,name:s.a.string.isRequired,options:s.a.array.isRequired,optionId:s.a.string,optionName:s.a.string,value:s.a.oneOfType([s.a.string,s.a.number]),onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,error:s.a.bool,multi:s.a.bool,isLoading:s.a.bool},a.a=i},742:function(e,a,t){"use strict";var o=t(0),n=t.n(o),r=t(14),s=t.n(r),l=function(e){var a=e.label,t=e.className,o=e.size,r=e.divSize,s=e.id,l=e.name,i=e.value,c=e.optionsInGroups,m=e.onChangeAction,p=e.onBlurAction,d=e.required,u=e.error,g=e.readOnly;return n.a.createElement("div",{className:"form-group ".concat(r)},n.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(d)},a),n.a.createElement("div",{className:"".concat(o)},n.a.createElement("select",{className:"form-control input-sm ".concat(t)+(u&&" has-error"),id:s,name:l,value:i,onChange:m,onBlur:p,readOnly:g},n.a.createElement("option",{value:""}),c.map((function(e,a){var t=e.optionName||"name";return n.a.createElement("optgroup",{key:a,label:e.label},e.options.map((function(a){return n.a.createElement("option",{key:a.id,value:e.name+a.id},a[t])})))})))))};l.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",readOnly:!1,required:"",error:!1,value:""},l.propTypes={label:s.a.string.isRequired,className:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,name:s.a.string.isRequired,optionsInGroups:s.a.array,value:s.a.oneOfType([s.a.string,s.a.number]),onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,error:s.a.bool,optionName:s.a.string},a.a=l}}]);