(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1557:function(e,t,n){"use strict";n.r(t);var o=n(25),a=n.n(o),r=n(24),s=n.n(r),c=n(26),i=n.n(c),l=n(27),u=n.n(l),p=n(21),d=n.n(p),m=n(28),h=n.n(m),f=n(6),g=n.n(f),b=n(0),E=n.n(b),v=n(33),C=n(15),y=function(e){return{type:"FETCH_CONTACTS_IN_GROUP",contactGroup:e}},w=function(){return{type:"CLEAR_CONTACTS_IN_GROUP"}},I=n(810),N=n(198),G=n.n(N),O=n(144),D=n(145),T=n(199),A=n(99),k=function(e){return E.a.createElement("tr",{className:"thead-title-quaternary"},E.a.createElement(A.a,{RowClassName:"hidden-xs",title:"#",width:"3%"}),E.a.createElement(A.a,{RowClassName:"hidden-xs hidden-sm",title:"Type",width:"5%"}),E.a.createElement(A.a,{sortColumn:"fullName",title:"Naam",width:"11%"}),E.a.createElement(A.a,{RowClassName:"hidden-xs",title:"Adres",width:"12%"}),E.a.createElement(A.a,{RowClassName:"hidden-xs",title:"Postcode",width:"7%"}),E.a.createElement(A.a,{RowClassName:"hidden-xs",title:"Plaats",width:"10%"}),E.a.createElement(A.a,{RowClassName:"hidden-xs",title:"E-mail",width:"12%"}),E.a.createElement(A.a,{sortColumn:"phoneNumber",title:"Telefoon",width:"7%"}),E.a.createElement(A.a,{RowClassName:"hidden-xs hidden-sm",title:"Gemaakt op",width:"10%"}),E.a.createElement("th",{width:"3%"}))},S=n(4),P=n(8),R=n.n(P),j=function(e){function t(e){var n;return a()(this,t),(n=i()(this,u()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},n}return h()(t,e),s()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){S.f.push("/contact/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,o=t.number,a=t.typeName,r=t.fullName,s=t.streetAndNumber,c=t.postalCode,i=t.city,l=t.emailAddress,u=t.phoneNumber,p=t.createdAt,d=t.permissions;return E.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(n)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},E.a.createElement("td",{className:"hidden-xs"},o),E.a.createElement("td",{className:"hidden-xs hidden-sm"},a," "),E.a.createElement("td",null,r),E.a.createElement("td",{className:"hidden-xs"},s),E.a.createElement("td",{className:"hidden-xs"},c),E.a.createElement("td",{className:"hidden-xs"},i),E.a.createElement("td",{className:"hidden-xs"},l),E.a.createElement("td",null,u),E.a.createElement("td",{className:"hidden-xs hidden-sm"},R()(p).format("DD-MM-Y")),E.a.createElement("td",null,this.state.showActionButtons?E.a.createElement("a",{role:"button",onClick:function(){return e.openItem(n)}},E.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):"",this.state.showActionButtons&&d.updatePerson&&d.updateOrganisation&&this.props.contactGroupType&&"static"===this.props.contactGroupType.id?E.a.createElement("a",{role:"button",onClick:this.props.showDeleteItemModal.bind(this,n,r)},E.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))}}]),t}(b.Component),M=Object(v.b)((function(e){return{permissions:e.meDetails.permissions,contactGroupType:e.contactGroupDetails.type}}))(j),L=n(98),_=Object(v.b)(null,(function(e){return{deleteContactInGroup:function(t,n){e(function(e,t){return{type:"DELETE_CONTACT_IN_GROUP",contactGroup:e,id:t}}(t,n))}}}))((function(e){return E.a.createElement(L.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deleteContactInGroup(e.groupId,e.id),void e.closeDeleteItemModal()},title:"Verwijderen"},"Verwijder contact uit groep: ",E.a.createElement("strong",null," ",e.fullName," "))}));function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){function t(e){var n;return a()(this,t),n=i()(this,u()(t).call(this,e)),g()(d()(n),"showDeleteItemModal",(function(e,t){n.setState(x({},n.state,{showDeleteItem:!0,deleteItem:x({},n.state.deleteItem,{id:e,fullName:t})}))})),g()(d()(n),"closeDeleteItemModal",(function(){n.setState(x({},n.state,{showDeleteItem:!1,deleteItem:x({},n.state.deleteItem,{id:"",fullName:""})}))})),n.state={showDeleteItem:!1,deleteItem:{id:"",fullName:""}},n}return h()(t,e),s()(t,[{key:"render",value:function(){var e=this,t="",n=!0;return this.props.hasError?t="Fout bij het ophalen van contact in groep.":this.props.isLoading?t="Gegevens aan het laden.":0===this.props.contactsInGroup.length?t="Geen contact in groep gevonden!":n=!1,E.a.createElement("div",null,E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-xs-12"},E.a.createElement("span",null,"Totaal leden in groep: ",E.a.createElement("strong",null,this.props.contactsInGroup.length)))),E.a.createElement("form",{onKeyUp:this.handleKeyUp},E.a.createElement(O.a,null,E.a.createElement(D.a,null,E.a.createElement(k,{showCheckbox:this.props.showCheckboxList,refreshContactsInGroupData:function(){return e.props.refreshContactsInGroupData()}})),E.a.createElement(T.a,null,n?E.a.createElement("tr",null,E.a.createElement("td",{colSpan:10},t)):this.props.contactsInGroup.map((function(t){return E.a.createElement(M,G()({key:t.id},t,{showDeleteItemModal:e.showDeleteItemModal}))}))))),this.state.showDeleteItem&&E.a.createElement(_,G()({closeDeleteItemModal:this.closeDeleteItemModal,groupId:this.props.groupId},this.state.deleteItem)))}}]),t}(b.Component),z=Object(v.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))(B),q=n(100),V=n(702);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e){function t(e){var n;return a()(this,t),(n=i()(this,u()(t).call(this,e))).state={people:[],personId:"",peekLoading:{people:!0}},n.handleReactSelectChange=n.handleReactSelectChange.bind(d()(n)),n}return h()(t,e),s()(t,[{key:"componentDidMount",value:function(){var e=this;q.a.getPerson().then((function(t){e.setState(H({},e.state,{people:t,peekLoading:H({},e.state.peekLoading,{people:!1})}))}))}},{key:"handleReactSelectChange",value:function(e){this.setState(H({},this.state,{personId:e}))}},{key:"render",value:function(){var e=this;return E.a.createElement(L.a,{buttonConfirmText:"Toevoegen",closeModal:this.props.closeModalAddToGroup,confirmAction:function(){return e.props.addPersonToGroup(e.state.personId)},title:"Contact toevoegen aan groep: ".concat(this.props.groupName)},E.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},E.a.createElement("div",{className:"row"},E.a.createElement(V.a,{label:"Voeg bestaand contact toe",divSize:"col-sm-12",size:"col-sm-6",id:"personId",name:"personId",value:this.state.personId,onChangeAction:this.handleReactSelectChange,options:this.state.people,optionId:"id",optionName:"fullName",multi:!1,isLoading:this.state.peekLoading.people}))))}}]),t}(b.Component),F=Object(v.b)((function(e){return{id:e.contactDetails.id}}),(function(e){return{fetchContactDetails:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(t){e(fetchContactDetails(t))}))}}))(Y),J=n(55),W=n(685),Q=n(704),X=n.n(Q),Z=n(722),$=function(e){function t(e){var n;return a()(this,t),n=i()(this,u()(t).call(this,e)),g()(d()(n),"closeModalAddToGroup",(function(){n.setState({showModalAddToGroup:!1})})),g()(d()(n),"addPersonToGroup",(function(e){var t={groupId:n.props.groupId,contactId:e};J.a.addContactToGroup(t).then((function(e){n.setState({showModalAddToGroup:!1}),n.props.refreshContactsInGroupData()}))})),g()(d()(n),"toggleModalAddToGroup",(function(){n.setState({showModalAddToGroup:!n.state.showModalAddToGroup})})),g()(d()(n),"sendEmail",(function(){S.f.push("/email/nieuw/groep/".concat(n.props.groupId,"/to"))})),g()(d()(n),"newContact",(function(){S.f.push("/contact/nieuw")})),g()(d()(n),"getCSV",(function(){n.props.blockUI(),J.a.getCsv(n.props.groupId).then((function(e){X()(e.data,"Groep-"+n.state.groupName.substring(0,20)+"-"+R()().format("YYYY-MM-DD HH:mm:ss")+".csv"),n.props.unblockUI()})).catch((function(e){n.props.unblockUI()}))})),n.state={showModalAddToGroup:!1,showModalEmail:!1,groupName:""},n}return h()(t,e),s()(t,[{key:"componentDidMount",value:function(){var e=this;J.a.fetchContactGroup(this.props.groupId).then((function(t){e.setState({groupName:t.name})}))}},{key:"openGroupDetails",value:function(){S.f.push("/contact-groep/".concat(this.props.groupId))}},{key:"render",value:function(){var e=this;this.props.permissions;return E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-4"},E.a.createElement("div",{className:"btn-group",role:"group"},E.a.createElement(W.a,{iconName:"glyphicon-refresh",onClickAction:this.props.refreshContactsInGroupData}),this.props.permissions.updatePerson&&this.props.permissions.updateOrganisation&&this.props.contactGroupType&&"static"===this.props.contactGroupType.id&&E.a.createElement("div",{className:"nav navbar-nav btn-group"},E.a.createElement("button",{onClick:this.toggleModalAddToGroup,className:"btn btn-success btn-sm"},E.a.createElement("span",{className:"glyphicon glyphicon-plus"}))),E.a.createElement(W.a,{iconName:"glyphicon-download-alt",onClickAction:this.getCSV}),E.a.createElement(W.a,{iconName:"glyphicon-envelope",onClickAction:this.sendEmail}))),E.a.createElement("div",{className:"col-md-4"},E.a.createElement("h3",{className:"text-center table-title",onClick:function(){return e.openGroupDetails()},role:"button"},"Contacten in groep: ",this.state.groupName)),E.a.createElement("div",{className:"col-md-4"}),this.state.showModalAddToGroup&&E.a.createElement(F,{closeModalAddToGroup:this.closeModalAddToGroup,addPersonToGroup:this.addPersonToGroup,groupName:this.state.groupName}))}}]),t}(b.Component),ee=Object(v.b)((function(e){return{permissions:e.meDetails.permissions,contactGroupType:e.contactGroupDetails.type}}),(function(e){return Object(C.b)({blockUI:Z.a,unblockUI:Z.b},e)}))($),te=function(e){function t(e){var n;return a()(this,t),n=i()(this,u()(t).call(this,e)),g()(d()(n),"refreshContactsInGroupData",(function(){n.props.clearContactsInGroup(),n.props.fetchContactsInGroup(n.props.params.contactGroup)})),n}return h()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.props.fetchContactsInGroup(this.props.params.contactGroup),this.props.fetchContactGroupDetails(this.props.params.contactGroup)}},{key:"componentWillUnmount",value:function(){this.props.clearContactsInGroup(),this.props.clearContactGroupDetails()}},{key:"render",value:function(){var e=this;return E.a.createElement("div",null,E.a.createElement("div",{className:"panel panel-default"},E.a.createElement("div",{className:"panel-body"},E.a.createElement("div",{className:"col-md-12 margin-10-top"},E.a.createElement(ee,{refreshContactsInGroupData:function(){return e.refreshContactsInGroupData()},groupId:this.props.params.contactGroup})),E.a.createElement("div",{className:"col-md-12 margin-10-top"},E.a.createElement(z,{contactsInGroup:this.props.contactsInGroup,groupId:this.props.params.contactGroup,refreshContactsInGroupData:function(){return e.refreshContactsInGroupData()}})))))}}]),t}(b.Component);t.default=Object(v.b)((function(e){return{contactsInGroup:e.contactsInGroup}}),(function(e){return Object(C.b)({fetchContactsInGroup:y,clearContactsInGroup:w,fetchContactGroupDetails:I.d,clearContactGroupDetails:I.b},e)}))(te)},685:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(14),s=n.n(r),c=function(e){var t=e.buttonClassName,n=e.iconName,o=e.onClickAction,r=e.title,s=e.disabled;return a.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:o,disabled:s,title:r},a.a.createElement("span",{className:"glyphicon ".concat(n)}))};c.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},c.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},t.a=c},702:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(14),s=n.n(r),c=n(707),i=(n(708),function(e){var t=e.label,n=e.divSize,o=e.size,r=e.id,s=e.name,i=e.value,l=e.options,u=e.optionId,p=e.optionName,d=e.onChangeAction,m=e.required,h=e.multi,f=e.error,g=e.isLoading;return a.a.createElement("div",{className:"form-group ".concat(n)},a.a.createElement("label",{htmlFor:r,className:"col-sm-6 ".concat(m)},t),a.a.createElement("div",{className:"".concat(o)},a.a.createElement(c.a,{id:r,name:s,value:i,onChange:function(e){d(e||"",s)},options:l,valueKey:u,labelKey:p,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:h,simpleValue:!0,removeSelected:!0,className:f?" has-error":"",isLoading:g})))});i.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0,isLoading:!1},i.propTypes={label:s.a.string.isRequired,className:s.a.string,size:s.a.string,divSize:s.a.string,id:s.a.string,name:s.a.string.isRequired,options:s.a.array.isRequired,optionId:s.a.string,optionName:s.a.string,value:s.a.oneOfType([s.a.string,s.a.number]),onChangeAction:s.a.func,onBlurAction:s.a.func,required:s.a.string,readOnly:s.a.bool,error:s.a.bool,multi:s.a.bool,isLoading:s.a.bool},t.a=i},704:function(e,t){e.exports=function(e,t,n){var o=new Blob([e],{type:n||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,t);else{var a=window.URL.createObjectURL(o),r=document.createElement("a");r.style.display="none",r.href=a,r.setAttribute("download",t),void 0===r.download&&r.setAttribute("target","_blank"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(a)}}},722:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var o=function(){return{type:"BLOCK_UI"}},a=function(){return{type:"UNBLOCK_UI"}}},810:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c}));var o=function(e){return{type:"FETCH_CONTACT_GROUP_DETAILS",id:e}},a=function(e){return{type:"UPDATE_CONTACT_GROUP_DETAILS",contactGroupDetails:e}},r=function(){return{type:"CLEAR_CONTACT_GROUP_DETAILS"}},s=function(e,t){return{type:"DELETE_COMPOSED_GROUP",contactGroupId:e,contactGroupToDetachId:t}},c=function(e,t){return{type:"ATTACH_COMPOSED_GROUP",contactGroupId:e,contactGroupToAttachId:t}}}}]);