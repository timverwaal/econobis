(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1585:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(25),o=t.n(s),l=t(24),i=t.n(l),c=t(26),u=t.n(c),d=t(27),m=t.n(d),p=t(28),h=t.n(p),f=t(4),g=t(685),v=t(682),b=t(683),y=function(e){function a(e){return o()(this,a),u()(this,m()(a).call(this,e))}return h()(a,e),i()(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement(v.a,null,r.a.createElement(b.a,{className:"panel-small"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},r.a.createElement(g.a,{iconName:"glyphicon-arrow-left",onClickAction:f.e.goBack}))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h4",{className:"text-center margin-small"},"Nieuw contact")),r.a.createElement("div",{className:"col-md-4"}))))}}]),a}(n.Component),E=t(21),N=t.n(E),C=t(6),k=t.n(C),A=t(33),w=t(8),I=t.n(w),O=t(689),P=t.n(O),S=t(871),T=t(686),D=t(688),x=t(691),z=t(684),j=t(696),M=t(692),q=t(690),B=function(e){function a(e){return o()(this,a),u()(this,m()(a).call(this,e))}return h()(a,e),i()(a,[{key:"render",value:function(){var e=this.props.address,a=e.street,t=e.number,n=e.addition,s=e.postalCode,o=e.city,l=e.typeId,i=e.primary,c=e.countryId;return r.a.createElement(v.a,{className:"panel-grey"},r.a.createElement(b.a,null,r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Postcode",size:"col-sm-4",name:"postalCode",value:s,onChangeAction:this.props.handleInputPicoChange,required:"required",error:this.props.errors.postalCode}),r.a.createElement("div",{className:"form-group col-sm-6"},r.a.createElement("label",{htmlFor:"number",className:"col-sm-6 required"},"Nummer"),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("input",{type:"number",className:"form-control input-sm "+(this.props.errors.number?"has-error":""),id:"number",name:"number",value:t,onChange:this.props.handleInputPicoChange})),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("input",{type:"text",className:"form-control input-sm",id:"addition",name:"addition",value:n,onChange:this.props.handleInputChange})))),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Adres",id:"adres",size:"col-sm-6",name:"street",value:a,onChangeAction:this.props.handleInputChange}),r.a.createElement(T.a,{label:"Plaats",id:"plaats",size:"col-sm-6",name:"city",value:o,onChangeAction:this.props.handleInputChange})),r.a.createElement("div",{className:"row"},r.a.createElement(D.a,{label:"Type",id:"type",size:"col-sm-6",name:"typeId",options:this.props.addressTypes,value:l,onChangeAction:this.props.handleInputChange,required:"required",error:this.props.errors.typeId}),r.a.createElement(M.a,{label:"Primair adres",name:"primary",value:i,onChangeAction:this.props.handleInputChange})),r.a.createElement("div",{className:"row"},r.a.createElement(D.a,{label:"Land",id:"countryId",size:"col-sm-6",name:"countryId",options:this.props.countries,value:c,onChangeAction:this.props.handleInputChange,error:this.props.errors.countryId}))))}}]),a}(n.Component),_=Object(A.b)((function(e){return{addressTypes:e.systemData.addressTypes,countries:e.systemData.countries}}))(B),L=function(e){function a(e){return o()(this,a),u()(this,m()(a).call(this,e))}return h()(a,e),i()(a,[{key:"render",value:function(){var e=this.props.emailAddress,a=e.email,t=e.typeId,n=e.primary;return r.a.createElement(v.a,{className:"panel-grey"},r.a.createElement(b.a,null,r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"E-mail",id:"email",size:"col-sm-6",name:"email",value:a,onChangeAction:this.props.handleInputChange,required:"required",error:this.props.errors.email}),r.a.createElement(D.a,{label:"Type",id:"type",size:"col-sm-6",name:"typeId",options:this.props.emailAddressTypes,value:t,onChangeAction:this.props.handleInputChange,required:"required",error:this.props.errors.typeId})),r.a.createElement("div",{className:"row"},r.a.createElement(M.a,{label:"Primair e-mailadres",name:"primary",value:n,onChangeAction:this.props.handleInputChange}))))}}]),a}(n.Component),F=Object(A.b)((function(e){return{emailAddressTypes:e.systemData.emailAddressTypes}}))(L),R=function(e){function a(e){return o()(this,a),u()(this,m()(a).call(this,e))}return h()(a,e),i()(a,[{key:"render",value:function(){var e=this.props.phoneNumber,a=e.number,t=e.typeId,n=e.primary;return r.a.createElement(v.a,{className:"panel-grey"},r.a.createElement(b.a,null,r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Nummer",size:"col-sm-6",name:"number",value:a,onChangeAction:this.props.handleInputChange,required:"required",error:this.props.errors.number}),r.a.createElement(D.a,{label:"Type",size:"col-sm-6",name:"typeId",options:this.props.phoneNumberTypes,value:t,onChangeAction:this.props.handleInputChange,required:"required",error:this.props.errors.typeId})),r.a.createElement("div",{className:"row"},r.a.createElement(M.a,{label:"Primair telefoonnummer",name:"primary",value:n,onChangeAction:this.props.handleInputChange}))))}}]),a}(n.Component),X=Object(A.b)((function(e){return{phoneNumberTypes:e.systemData.phoneNumberTypes}}))(R),Y=t(215),H=t(98),V=function(e){function a(e){return o()(this,a),u()(this,m()(a).call(this,e))}return h()(a,e),i()(a,[{key:"render",value:function(){return r.a.createElement(H.a,{modalClassName:"modal-lg",buttonConfirmText:"Aanmaken",closeModal:this.props.closeModal,confirmAction:this.props.confirmAction,title:"Duplicaat gevonden"},r.a.createElement("span",null,this.props.duplicateText))}}]),a}(n.Component);function U(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function W(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?U(Object(t),!0).forEach((function(a){k()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var G=function(e){function a(e){var t;return o()(this,a),t=u()(this,m()(a).call(this,e)),k()(N()(t),"toggleAddress",(function(){t.setState({showAddress:!t.state.showAddress})})),k()(N()(t),"toggleEmail",(function(){t.setState({showEmail:!t.state.showEmail})})),k()(N()(t),"togglePhone",(function(){t.setState({showPhone:!t.state.showPhone})})),k()(N()(t),"toggleShowConfirmDuplicate",(function(){t.setState({showConfirmDuplicate:!t.state.showConfirmDuplicate,buttonLoading:!1})})),k()(N()(t),"addressHandleInputPicoChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;t.setState(W({},t.state,{address:W({},t.state.address,k()({},r,n))})),setTimeout((function(){var e=t.state.address;!P.a.isEmpty(e.postalCode)&&P.a.isPostalCode(e.postalCode,"NL")&&!P.a.isEmpty(e.number)&&P.a.isEmpty(e.city)&&P.a.isEmpty(e.street)&&Y.a.getPicoAddress(e.postalCode,e.number).then((function(e){t.setState(W({},t.state,{address:W({},t.state.address,{street:e.street,city:e.city})}))}))}),100)})),k()(N()(t),"addressHandleInputChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;t.setState(W({},t.state,{address:W({},t.state.address,k()({},r,n))}))})),k()(N()(t),"emailAddressHandleInputChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;t.setState(W({},t.state,{emailAddress:W({},t.state.emailAddress,k()({},r,n))}))})),k()(N()(t),"phoneHandleInputChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;t.setState(W({},t.state,{phoneNumber:W({},t.state.phoneNumber,k()({},r,n))}))})),k()(N()(t),"handleInputChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;t.setState(W({},t.state,{person:W({},t.state.person,k()({},r,n))}))})),k()(N()(t),"handleInputChangeDate",(function(e,a){t.setState(W({},t.state,{person:W({},t.state.person,k()({},a,e))}))})),k()(N()(t),"confirmDuplicate",(function(){t.handleSubmit("dontCheckDuplicates")})),k()(N()(t),"handleSubmit",(function(e){var a=!0;"dontCheckDuplicates"===e?a=!1:e&&e.preventDefault();var n=t.state.person,r={},s=!1;P.a.isEmpty(n.firstName)&&P.a.isEmpty(n.lastName)&&(r.name=!0,s=!0);var o=t.state.address;o.postalCode&&(o.postalCode=o.postalCode.toUpperCase());var l={};if(!P.a.isEmpty(o.postalCode)){var i=o.countryId;P.a.isEmpty(o.countryId+"")&&(i="NL");P.a.isEmpty(o.postalCode+"")||("NL"==i?P.a.isPostalCode(o.postalCode,"NL"):P.a.isPostalCode(o.postalCode,"any"))||(l.postalCode=!0,l.countryId=!0,s=!0),P.a.isEmpty(o.number)&&(l.number=!0,s=!0),P.a.isEmpty(o.typeId)&&(l.typeId=!0,s=!0)}var c=t.state.phoneNumber,u={};P.a.isEmpty(c.number)||(P.a.isEmpty(c.number)&&(u.number=!0,s=!0),P.a.isEmpty(c.typeId)&&(u.typeId=!0,s=!0));var d=t.state.emailAddress,m={};if(P.a.isEmpty(d.email)||(P.a.isEmail(d.email)||(m.email=!0,s=!0),P.a.isEmpty(d.typeId)&&(m.typeId=!0,s=!0)),t.setState(W({},t.state,{errors:r,addressErrors:l,phoneErrors:u,emailErrors:m})),!s){if(t.state.buttonLoading)return!1;t.setState({buttonLoading:!0}),S.a.newPerson({person:n,address:o,emailAddress:d,phoneNumber:c,checkDuplicates:a}).then((function(e){f.f.push("/contact/".concat(e.data.data.id))})).catch((function(e){409===e.response.status&&(t.setState(W({},t.state,{duplicateText:e.response.data.message})),t.toggleShowConfirmDuplicate())}))}})),t.state={buttonLoading:!1,showAddress:!1,showEmail:!1,showPhone:!1,showConfirmDuplicate:!1,duplicateText:"",person:{id:"",number:"",createdAt:"",titleId:"",initials:"",firstName:"",lastNamePrefixId:"",lastName:"",memberSince:"",memberUntil:"",dateOfBirth:"",ownerId:e.userId,didAgreeAvg:!1},address:{street:"",number:"",addition:"",postalCode:"",city:"",typeId:"visit",primary:!0,countryId:""},emailAddress:{email:"",typeId:"home",primary:!0},phoneNumber:{number:"",typeId:"home",primary:!0},errors:{name:!1},addressErrors:{typeId:!1,postalCode:!1,number:!1,countryId:!1},emailErrors:{typeId:!1,email:!1},phoneErrors:{typeId:!1,number:!1}},t}return h()(a,e),i()(a,[{key:"render",value:function(){var e=this.state.person,a=e.titleId,t=e.initials,n=e.firstName,s=e.lastNamePrefixId,o=e.lastName,l=(e.memberSince,e.dateOfBirth),i=e.ownerId,c=e.didAgreeAvg;return r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Contactnummer",name:"number",readOnly:!0,value:""}),r.a.createElement(T.a,{label:"Gemaakt op",name:"createdAt",value:I()().format("DD-MM-Y"),readOnly:!0})),r.a.createElement("div",{className:"row"},r.a.createElement(D.a,{label:"Aanspreektitel",name:"titleId",options:this.props.titles,value:a,onChangeAction:this.handleInputChange}),r.a.createElement(x.a,{label:"Geboortedatum",name:"dateOfBirth",value:l,onChangeAction:this.handleInputChangeDate})),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Voorletters",size:"col-sm-6",name:"initials",value:t,onChangeAction:this.handleInputChange})),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Voornaam",size:"col-sm-6",name:"firstName",value:n,onChangeAction:this.handleInputChange,required:""===o&&"required",error:this.state.errors.name})),r.a.createElement("div",{className:"row"},r.a.createElement(D.a,{label:"Tussenvoegsel",name:"lastNamePrefixId",options:this.props.lastNamePrefixes,value:s,onChangeAction:this.handleInputChange})),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Achternaam",size:"col-sm-6",name:"lastName",value:o,onChangeAction:this.handleInputChange,required:""===n&&"required",error:this.state.errors.name})),r.a.createElement("div",{className:"row"},r.a.createElement(D.a,{label:"Eigenaar",size:"col-sm-6",name:"ownerId",options:this.props.users,value:i,optionName:"fullName",onChangeAction:this.handleInputChange})),r.a.createElement("div",{className:"row"},r.a.createElement(M.a,{label:"Akkoord privacybeleid",name:"didAgreeAvg",value:c,onChangeAction:this.handleInputChange})),r.a.createElement("div",{className:"margin-10-top"},r.a.createElement(q.a,null,r.a.createElement("div",{className:"row",onClick:this.toggleAddress},this.state.showAddress?r.a.createElement("span",{className:"glyphicon glyphicon-menu-down"}):r.a.createElement("span",{className:"glyphicon glyphicon-menu-right"}),r.a.createElement("span",{className:"h5"},"Adres"))),this.state.showAddress&&r.a.createElement(_,{address:this.state.address,errors:this.state.addressErrors,handleInputPicoChange:this.addressHandleInputPicoChange,handleInputChange:this.addressHandleInputChange})),r.a.createElement("div",{className:"margin-10-top"},r.a.createElement(q.a,null,r.a.createElement("div",{className:"row",onClick:this.toggleEmail},this.state.showEmail?r.a.createElement("span",{className:"glyphicon glyphicon-menu-down"}):r.a.createElement("span",{className:"glyphicon glyphicon-menu-right"}),r.a.createElement("span",{className:"h5"},"E-mail"))),this.state.showEmail&&r.a.createElement(F,{emailAddress:this.state.emailAddress,errors:this.state.emailErrors,handleInputChange:this.emailAddressHandleInputChange})),r.a.createElement("div",{className:"margin-10-top"},r.a.createElement(q.a,null,r.a.createElement("div",{className:"row",onClick:this.togglePhone},this.state.showPhone?r.a.createElement("span",{className:"glyphicon glyphicon-menu-down"}):r.a.createElement("span",{className:"glyphicon glyphicon-menu-right"}),r.a.createElement("span",{className:"h5"},"Telefoonnummer"))),this.state.showPhone&&r.a.createElement(X,{phoneNumber:this.state.phoneNumber,errors:this.state.phoneErrors,handleInputChange:this.phoneHandleInputChange})),r.a.createElement(j.a,null,r.a.createElement("div",{className:"pull-right btn-group",role:"group"},r.a.createElement(z.a,{loading:this.state.buttonLoading,loadText:"Persoon wordt aangemaakt.",buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"}))),this.state.showConfirmDuplicate&&r.a.createElement(V,{closeModal:this.toggleShowConfirmDuplicate,confirmAction:this.confirmDuplicate,duplicateText:this.state.duplicateText}))}}]),a}(n.Component),J=Object(A.b)((function(e){return{lastNamePrefixes:e.systemData.lastNamePrefixes,occupations:e.systemData.occupations,users:e.systemData.users,titles:e.systemData.titles,userId:e.meDetails.id}}))(G),K=t(740),Q=t(771);function Z(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Z(Object(t),!0).forEach((function(a){k()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var ee=function(e){function a(e){var t;return o()(this,a),t=u()(this,m()(a).call(this,e)),k()(N()(t),"handleInputChange",(function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;t.setState($({},t.state,{organisation:$({},t.state.organisation,k()({},r,n))}))})),k()(N()(t),"handleInputChangeDate",(function(e,a){t.setState($({},t.state,{organisation:$({},t.state.organisation,k()({},a,e))}))})),k()(N()(t),"handleSubmit",(function(e){e.preventDefault();var a=t.state.organisation,n={},r=!1;if(P.a.isEmpty(a.name)&&(n.name=!0,r=!0),P.a.isEmpty(a.iban)||Q.isValidIBAN(a.iban)||(n.iban=!0,r=!0),t.setState($({},t.state,{errors:n})),!r){if(t.state.buttonLoading)return!1;t.setState({buttonLoading:!0}),K.a.newOrganisation(a).then((function(e){f.f.push("/contact/".concat(e.id))}))}})),t.state={buttonLoading:!1,organisation:{id:"",number:"",createdAt:"",name:"",chamberOfCommerceNumber:"",vatNumber:"",memberSince:"",memberUntil:"",website:"",iban:"",ibanAttn:"",ownerId:e.userId,didAgreeAvg:!1},errors:{name:!1,iban:!1}},t}return h()(a,e),i()(a,[{key:"render",value:function(){var e=this.state.organisation,a=e.name,t=e.chamberOfCommerceNumber,n=e.vatNumber,s=(e.memberSince,e.website),o=e.iban,l=e.ibanAttn,i=e.ownerId,c=e.didAgreeAvg;return r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Contactnummer",name:"number",value:"",readOnly:!0}),r.a.createElement(T.a,{label:"Gemaakt op",name:"createdAt",value:I()().format("DD-MM-Y"),readOnly:!0})),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Naam",name:"name",value:a,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.name})),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"KvK",size:"col-sm-6",name:"chamberOfCommerceNumber",value:t,onChangeAction:this.handleInputChange})),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Btw nummer",name:"vatNumber",value:n,onChangeAction:this.handleInputChange})),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"IBAN",name:"iban",value:o,onChangeAction:this.handleInputChange,error:this.state.errors.iban})),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"IBAN t.n.v.",name:"ibanAttn",value:l,onChangeAction:this.handleInputChange})),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,{label:"Website",name:"website",value:s,onChangeAction:this.handleInputChange})),r.a.createElement("div",{className:"row"},r.a.createElement(D.a,{label:"Eigenaar",size:"col-sm-6",name:"ownerId",options:this.props.users,value:i,optionName:"fullName",onChangeAction:this.handleInputChange})),r.a.createElement("div",{className:"row"},r.a.createElement(M.a,{label:"Akkoord privacybeleid",name:"didAgreeAvg",value:c,onChangeAction:this.handleInputChange})),r.a.createElement(j.a,null,r.a.createElement("div",{className:"pull-right btn-group",role:"group"},r.a.createElement(z.a,{loading:this.state.buttonLoading,loadText:"Organisatie wordt aangemaakt.",buttonText:"Opslaan",onClickAction:this.handleSubmit}))))}}]),a}(n.Component),ae=Object(A.b)((function(e){return{users:e.systemData.users,userId:e.meDetails.id}}))(ee),te=function(e){return r.a.createElement(v.a,{className:"panel-grey"},r.a.createElement(b.a,null,r.a.createElement("div",{className:"col-md-12"},"persoon"===e.type&&r.a.createElement(J,null),"organisatie"===e.type&&r.a.createElement(ae,null))))},ne=function(e){return r.a.createElement("div",null,r.a.createElement(te,{type:e.type,organisationId:e.organisationId}))};a.default=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"col-md-12 margin-10-top"},r.a.createElement(y,null)),r.a.createElement("div",{className:"col-md-12 margin-10-top"},r.a.createElement(ne,{type:e.params.type}))))}},682:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.children,t=e.className,n=e.onMouseEnter,s=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:n,onMouseLeave:s},a)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},a.a=l},683:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.className,t=e.children;return r.a.createElement("div",{className:"panel-body ".concat(a)},t)};l.defaultProps={className:""},l.propTypes={className:o.a.string},a.a=l},684:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.buttonClassName,t=e.buttonText,n=e.onClickAction,s=e.type,o=e.value,l=e.loading,i=e.loadText,c=e.disabled;return l?r.a.createElement("button",{type:s,className:"btn btn-sm btn-loading ".concat(a),value:o,disabled:l},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",i):r.a.createElement("button",{type:s,className:"btn btn-sm ".concat(a),onClick:n,value:o,disabled:c},t)};l.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},l.propTypes={buttonClassName:o.a.string,buttonText:o.a.string.isRequired,onClickAction:o.a.func,type:o.a.string,value:o.a.string,loading:o.a.bool,loadText:o.a.string,disabled:o.a.bool},a.a=l},685:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.buttonClassName,t=e.iconName,n=e.onClickAction,s=e.title,o=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(a),onClick:n,disabled:o,title:s},r.a.createElement("span",{className:"glyphicon ".concat(t)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:o.a.string,iconName:o.a.string.isRequired,onClickAction:o.a.func,title:o.a.string,disabled:o.a.bool},a.a=l},686:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.label,t=e.type,n=e.className,s=e.size,o=e.id,l=e.placeholder,i=e.name,c=e.value,u=e.onClickAction,d=e.onChangeAction,m=e.onBlurAction,p=e.required,h=e.readOnly,f=e.maxLength,g=e.error,v=e.min,b=e.max,y=e.step,E=e.errorMessage,N=e.divSize,C=e.divClassName,k=e.autoComplete;return r.a.createElement("div",{className:"form-group ".concat(N," ").concat(C)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(p)},a),r.a.createElement("div",{className:"".concat(s)},r.a.createElement("input",{type:t,className:"form-control input-sm ".concat(n)+(g?"has-error":""),id:o,placeholder:l,name:i,value:c,onClick:u,onChange:d,onBlur:m,readOnly:h,maxLength:f,min:v,max:b,autoComplete:k,step:y})),g&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",E)))};l.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},l.propTypes={label:o.a.oneOfType([o.a.string,o.a.object]).isRequired,type:o.a.string,className:o.a.string,divClassName:o.a.string,size:o.a.string,divSize:o.a.string,id:o.a.string,placeholder:o.a.string,name:o.a.string.isRequired,value:o.a.oneOfType([o.a.string,o.a.number]),onClickAction:o.a.func,onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,maxLength:o.a.string,error:o.a.bool,min:o.a.string,max:o.a.string,step:o.a.string,errorMessage:o.a.string,autoComplete:o.a.string},a.a=l},688:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.label,t=e.className,n=e.size,s=e.id,o=e.name,l=e.value,i=e.options,c=e.onChangeAction,u=e.onBlurAction,d=e.required,m=e.error,p=e.errorMessage,h=e.optionValue,f=e.optionName,g=e.readOnly,v=e.placeholder,b=e.divClassName,y=e.emptyOption;return r.a.createElement("div",{className:"form-group ".concat(n," ").concat(b)},r.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(d)},a),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("select",{className:"form-control input-sm ".concat(t)+(m&&" has-error"),id:s,name:o,value:l,onChange:c,onBlur:u,readOnly:g},y&&r.a.createElement("option",{value:""},v),i.map((function(e){return r.a.createElement("option",{key:e[h],value:e[h]},e[f])})))),m&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",p)))};l.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},l.propTypes={label:o.a.string.isRequired,className:o.a.string,size:o.a.string,id:o.a.string,name:o.a.string.isRequired,options:o.a.array,value:o.a.oneOfType([o.a.string,o.a.number]),onChangeAction:o.a.func,onBlurAction:o.a.func,required:o.a.string,readOnly:o.a.bool,error:o.a.bool,errorMessage:o.a.string,emptyOption:o.a.bool,optionValue:o.a.string,optionName:o.a.string,placeholder:o.a.string},a.a=l},690:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.className,t=e.children;return r.a.createElement("div",{className:"panel-heading ".concat(a)},t)};l.defaultProps={className:""},l.propTypes={className:o.a.string},a.a=l},691:function(e,a,t){"use strict";var n=t(25),r=t.n(n),s=t(24),o=t.n(s),l=t(26),i=t.n(l),c=t(27),u=t.n(c),d=t(21),m=t.n(d),p=t(28),h=t.n(p),f=t(6),g=t.n(f),v=t(0),b=t.n(v),y=t(14),E=t.n(y),N=t(703),C=t.n(N),k=t(704),A=t.n(k),w=t(8),I=t.n(w);I.a.locale("nl");var O=function(e){function a(e){var t;return r()(this,a),t=i()(this,u()(a).call(this,e)),g()(m()(t),"validateDate",(function(e){var a=I()(e.target.value,"DD-MM-YYYY",!0),n=!1;a.isValid()||""===e.target.value||(n=!0),t.props.disabledBefore&&a.isBefore(t.props.disabledBefore)&&(n=!0),t.props.disabledAfter&&a.isAfter(t.props.disabledAfter)&&(n=!0),t.setState({errorDateFormat:n})})),g()(m()(t),"onDateChange",(function(e){var a=e?I()(e).format("Y-MM-DD"):"",n=!1;a&&t.props.disabledBefore&&I()(a).isBefore(t.props.disabledBefore)&&(n=!0),a&&t.props.disabledAfter&&I()(a).isAfter(t.props.disabledAfter)&&(n=!0),t.setState({errorDateFormat:n}),!n&&t.props.onChangeAction(a,t.props.name)})),t.state={errorDateFormat:!1},t}return h()(a,e),o()(a,[{key:"render",value:function(){var e=this.props,a=e.label,t=e.className,n=e.size,r=e.divSize,s=e.id,o=e.value,l=e.required,i=e.readOnly,c=e.name,u=e.error,d=e.errorMessage,m=e.disabledBefore,p=e.disabledAfter,h=o?I()(o).format("L"):"",f={};return m&&(f.before=new Date(m)),p&&(f.after=new Date(p)),b.a.createElement("div",{className:"form-group ".concat(r)},b.a.createElement("div",null,b.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(l)},a)),b.a.createElement("div",{className:"".concat(n)},b.a.createElement(C.a,{id:s,value:h,formatDate:k.formatDate,parseDate:k.parseDate,onDayChange:this.onDateChange,dayPickerProps:{showWeekNumbers:!0,locale:"nl",firstDayOfWeek:1,localeUtils:A.a,disabledDays:f},inputProps:{className:"form-control input-sm ".concat(t)+(this.state.errorDateFormat||u?" has-error":""),name:c,onBlur:this.validateDate,autoComplete:"off",readOnly:i,disabled:i},required:l,readOnly:i,placeholder:""})),u&&b.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},b.a.createElement("span",{className:"has-error-message"}," ",d)))}}]),a}(v.Component);O.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",readOnly:!1,value:null,error:!1,errorMessage:"",disabledBefore:null,disabledAfter:null},O.propTypes={label:E.a.string.isRequired,type:E.a.string,className:E.a.string,size:E.a.string,divSize:E.a.string,id:E.a.string,name:E.a.string,value:E.a.oneOfType([E.a.string,E.a.object]),onChangeAction:E.a.func,required:E.a.string,readOnly:E.a.bool,error:E.a.bool,errorMessage:E.a.string,disabledBefore:E.a.string,disabledAfter:E.a.string},a.a=O},692:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=t(698),i=t.n(l),c=function(e){var a=e.label,t=e.size,n=e.id,s=e.name,o=e.value,l=e.onChangeAction,c=e.required,u=e.divSize,d=e.className,m=e.disabled;return r.a.createElement("div",{className:"form-group ".concat(u," ").concat(d)},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:n,className:"col-sm-6 ".concat(c)},a)),r.a.createElement("div",{className:"".concat(t)},r.a.createElement(i.a,{id:n,name:s,onChange:l,checked:o,disabled:m})))};c.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",required:"",disabled:!1,value:null},c.propTypes={label:o.a.string.isRequired,type:o.a.string,size:o.a.string,divSize:o.a.string,id:o.a.string,name:o.a.string.isRequired,value:o.a.bool,onChangeAction:o.a.func,required:o.a.string,disabled:o.a.bool},a.a=c},696:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(14),o=t.n(s),l=function(e){var a=e.className,t=e.children;return r.a.createElement("div",{className:"panel-footer ".concat(a)},t)};l.defaultProps={className:""},l.propTypes={className:o.a.string},a.a=l},698:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),s=t(0),o=m(s),l=m(t(699)),i=m(t(14)),c=m(t(700)),u=m(t(701)),d=t(702);function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.handleClick=t.handleClick.bind(t),t.handleTouchStart=t.handleTouchStart.bind(t),t.handleTouchMove=t.handleTouchMove.bind(t),t.handleTouchEnd=t.handleTouchEnd.bind(t),t.handleFocus=t.handleFocus.bind(t),t.handleBlur=t.handleBlur.bind(t),t.previouslyChecked=!(!e.checked&&!e.defaultChecked),t.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},t}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),r(a,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var a=this.input;if(e.target!==a&&!this.moved)return this.previouslyChecked=a.checked,e.preventDefault(),a.focus(),void a.click();var t=this.props.hasOwnProperty("checked")?this.props.checked:a.checked;this.setState({checked:t})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var a=(0,d.pointerCoord)(e).x;this.state.checked&&a+15<this.startX?(this.setState({checked:!1}),this.startX=a,this.activated=!0):a-15>this.startX&&(this.setState({checked:!0}),this.startX=a,this.activated=a<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var a=this.input;if(e.preventDefault(),this.startX){var t=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>t?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,a.click()):this.startX-4<t&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,a.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var a=this.props.onFocus;a&&a(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var a=this.props.onBlur;a&&a(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var t=this.props.icons;return t?void 0===t[e]?a.defaultProps.icons[e]:t[e]:null}},{key:"render",value:function(){var e=this,a=this.props,t=a.className,r=(a.icons,function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["className","icons"])),s=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},t);return o.default.createElement("div",{className:s,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(a){e.input=a},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),a}(s.PureComponent);a.default=p,p.displayName="Toggle",p.defaultProps={icons:{checked:o.default.createElement(c.default,null),unchecked:o.default.createElement(u.default,null)}},p.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},699:function(e,a,t){var n;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n))e.push(r.apply(null,n));else if("object"===s)for(var o in n)t.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=r:void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},700:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,r=t(0),s=(n=r)&&n.__esModule?n:{default:n};a.default=function(){return s.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},s.default.createElement("title",null,"switch-check"),s.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},701:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,r=t(0),s=(n=r)&&n.__esModule?n:{default:n};a.default=function(){return s.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},s.default.createElement("title",null,"switch-x"),s.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},702:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.pointerCoord=function(e){if(e){var a=e.changedTouches;if(a&&a.length>0){var t=a[0];return{x:t.clientX,y:t.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},740:function(e,a,t){"use strict";var n=t(2),r=t.n(n),s="".concat(URL_API,"/api/organisation");a.a={newOrganisation:function(e){var a="".concat(s),t="Bearer "+localStorage.getItem("access_token");return r.a.defaults.headers.common.Authorization=t,r.a.post(a,e).then((function(e){return e.data.data})).catch((function(e){console.log(e)}))},updateOrganisation:function(e){var a="".concat(s,"/").concat(e.id),t="Bearer "+localStorage.getItem("access_token");return r.a.defaults.headers.common.Authorization=t,r.a.post(a,e)},getOrganisationPeek:function(){var e="".concat(s,"/peek"),a="Bearer "+localStorage.getItem("access_token");return r.a.defaults.headers.common.Authorization=a,r.a.get(e).then((function(e){return e.data.data})).catch((function(e){console.log(e)}))}}},871:function(e,a,t){"use strict";var n=t(2),r=t.n(n),s="".concat(URL_API,"/api/person");a.a={newPerson:function(e){var a="".concat(s),t="Bearer "+localStorage.getItem("access_token");return r.a.defaults.headers.common.Authorization=t,r.a.post(a,e)},updatePerson:function(e){var a="".concat(s,"/").concat(e.id),t="Bearer "+localStorage.getItem("access_token");return r.a.defaults.headers.common.Authorization=t,r.a.post(a,e)},getPersonPeek:function(){var e="".concat(s,"/peek"),a="Bearer "+localStorage.getItem("access_token");return r.a.defaults.headers.common.Authorization=a,r.a.get(e).then((function(e){return e.data.data})).catch((function(e){console.log(e)}))},makePrimary:function(e){var a="".concat(s,"/").concat(e.id),t="Bearer "+localStorage.getItem("access_token");return r.a.defaults.headers.common.Authorization=t,r.a.post(a,e).then((function(e){return e.data.data})).catch((function(e){console.log(e)}))}}}}]);