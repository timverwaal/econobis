(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1537:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),s=a(24),i=a.n(s),o=a(26),l=a.n(o),c=a(27),u=a.n(c),m=a(28),d=a.n(m),p=a(0),h=a.n(p),f=a(33),g=a(798),b=a(21),v=a.n(b),E=a(6),N=a.n(E),y=a(4),w=a(685),D=a(98),O=a(815),C=Object(f.b)(null,(function(e){return{deleteTeam:function(t){e(Object(O.b)(t))}}}))((function(e){return h.a.createElement(D.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deleteTeam(e.id),e.closeDeleteItemModal(),void y.f.push("/teams")},title:"Verwijderen"},"Verwijder team: ",h.a.createElement("strong",null," ",e.name," "))})),T=function(e){function t(e){var a;return r()(this,t),a=l()(this,u()(t).call(this,e)),N()(v()(a),"toggleDelete",(function(){a.setState({showDelete:!a.state.showDelete})})),a.state={showDelete:!1},a}return d()(t,e),i()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-4"},h.a.createElement("div",{className:"btn-group btn-group-flex margin-small",role:"group"},h.a.createElement(w.a,{iconName:"glyphicon-arrow-left",onClickAction:y.e.goBack}),h.a.createElement(w.a,{iconName:"glyphicon-trash",onClickAction:this.toggleDelete}))),h.a.createElement("div",{className:"col-md-4"},h.a.createElement("h4",{className:"text-center"},"Team: ",this.props.name)),h.a.createElement("div",{className:"col-md-4"}),this.state.showDelete&&h.a.createElement(C,{closeDeleteItemModal:this.toggleDelete,name:this.props.name,id:this.props.id}))}}]),t}(p.Component),k=Object(f.b)((function(e){return{name:e.teamDetails.name,id:e.teamDetails.id}}),null)(T),j=a(197),S=a(689),A=a.n(S),L=a(125),I=a(686),M=a(684),P=a(682),x=a(683);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){N()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=function(e){function t(e){var a;return r()(this,t),(a=l()(this,u()(t).call(this,e))).state={team:e.teamDetails,errors:{name:!1}},a.handleInputChange=a.handleInputChange.bind(v()(a)),a.handleSubmit=a.handleSubmit.bind(v()(a)),a}return d()(t,e),i()(t,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(B({},this.state,{team:B({},this.state.team,N()({},n,a))}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.team,a={},n=!1;A.a.isEmpty(t.name)&&(a.name=!0,n=!0),this.setState(B({},this.state,{errors:a})),!n&&this.props.updateTeam(t,this.props.switchToView)}},{key:"render",value:function(){var e=this.state.team.name;return h.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},h.a.createElement(P.a,null,h.a.createElement(x.a,null,h.a.createElement("div",{className:"row"},h.a.createElement(I.a,{label:"Naam",name:"name",value:e,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.name}))),h.a.createElement(x.a,null,h.a.createElement("div",{className:"pull-right btn-group",role:"group"},h.a.createElement(M.a,{buttonClassName:"btn-default",buttonText:"Sluiten",onClickAction:this.props.switchToView}),h.a.createElement(M.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"})))))}}]),t}(p.Component),z=Object(f.b)((function(e){return{teamDetails:e.teamDetails}}),(function(e){return{updateTeam:function(t,a){e(Object(g.d)(t,a))}}}))(V),R=a(687),_=Object(f.b)((function(e){return{teamDetails:e.teamDetails}}))((function(e){var t=e.teamDetails.name;return h.a.createElement("div",{onClick:e.switchToEdit},h.a.createElement(P.a,null,h.a.createElement(x.a,null,h.a.createElement("div",{className:"row"},h.a.createElement(R.a,{label:"Naam",value:t})))))})),U=function(e){function t(e){var a;return r()(this,t),a=l()(this,u()(t).call(this,e)),N()(v()(a),"switchToEdit",(function(){a.setState({showEdit:!0})})),N()(v()(a),"switchToView",(function(){a.setState({showEdit:!1,activeDiv:""})})),a.state={showEdit:!1,activeDiv:""},a}return d()(t,e),i()(t,[{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this,t=this.props.meDetails.permissions,a=void 0===t?{}:t;return h.a.createElement("div",{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},this.state.showEdit&&a.createTeam?h.a.createElement(z,{switchToView:this.switchToView}):h.a.createElement(_,{switchToEdit:this.switchToEdit}))}}]),t}(p.Component),F=Object(f.b)((function(e){return{teamDetails:e.teamDetails,meDetails:e.meDetails,permissions:e.meDetails.permissions}}))(U),G=(a(8),Object(f.b)((function(e){return{permissions:e.meDetails.permissions}}))((function(e){var t=e.user,a=(t.id,t.fullName);return h.a.createElement("div",{className:"row border ".concat(e.highlightLine),onMouseEnter:function(){return e.onLineEnter()},onMouseLeave:function(){return e.onLineLeave()}},h.a.createElement("div",{className:"col-sm-11"},a),h.a.createElement("div",{className:"col-sm-1"},e.showActionButtons&&e.permissions.createTeam?h.a.createElement("a",{role:"button",onClick:e.toggleDelete},h.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))}))),H=Object(f.b)((function(e){return{teamId:e.teamDetails.id}}),(function(e){return{deleteTeamUser:function(t,a){e(Object(g.a)(t,a))}}}))((function(e){return h.a.createElement(D.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.toggleDelete,confirmAction:function(){return e.deleteTeamUser(e.teamId,e.userId),void e.toggleDelete()},title:"Verwijderen"},h.a.createElement("p",null,"Wil je deze gebruiker ontkoppelen van dit team?"))})),J=function(e){function t(e){var a;return r()(this,t),a=l()(this,u()(t).call(this,e)),N()(v()(a),"onLineEnter",(function(){a.setState({showActionButtons:!0,highlightLine:"highlight-line"})})),N()(v()(a),"onLineLeave",(function(){a.setState({showActionButtons:!1,highlightLine:""})})),N()(v()(a),"toggleDelete",(function(){a.setState({showDelete:!a.state.showDelete})})),a.state={showActionButtons:!1,highlightLine:"",showDelete:!1,user:e.user},a}return d()(t,e),i()(t,[{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement(G,{highlightLine:this.state.highlightLine,showActionButtons:this.state.showActionButtons,onLineEnter:this.onLineEnter,onLineLeave:this.onLineLeave,toggleDelete:this.toggleDelete,user:this.state.user}),this.state.showDelete&&this.props.permissions.createTeam&&h.a.createElement(H,{toggleDelete:this.toggleDelete,userId:this.state.user.id}))}}]),t}(p.Component),W=Object(f.b)((function(e){return{permissions:e.meDetails.permissions}}))(J),K=Object(f.b)((function(e){return{users:e.teamDetails.users}}))((function(e){return h.a.createElement("div",null,h.a.createElement("div",{className:"row border header"},h.a.createElement("div",{className:"col-sm-11"},"Naam"),h.a.createElement("div",{className:"col-sm-1"})),e.users.length>0?e.users.map((function(e){return h.a.createElement(W,{key:e.id,user:e})})):h.a.createElement("div",null,"Geen gebruikers bekend."))})),Q=a(688);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Y=function(e){function t(e){var a;return r()(this,t),(a=l()(this,u()(t).call(this,e))).state={userId:"",errors:{userId:!1,hasErrors:!0}},a.handleInputChange=a.handleInputChange.bind(v()(a)),a.handleSubmit=a.handleSubmit.bind(v()(a)),a}return d()(t,e),i()(t,[{key:"handleInputChange",value:function(e){var t=e.target.value;this.setState({userId:t})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={teamId:this.props.teamId,userId:this.state.userId},n={},r=!1;A.a.isEmpty(a.userId)&&(n.userId=!0,r=!0),this.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){N()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},this.state,{errors:n})),r||L.a.newTeamUser(a).then((function(e){t.props.newTeamUser(e.data.data),t.props.toggleShowNew()})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return h.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},h.a.createElement(P.a,{className:"panel-grey"},h.a.createElement(x.a,null,h.a.createElement("div",{className:"row"},h.a.createElement(I.a,{label:"Team",name:"team",value:this.props.teamName,readOnly:!0}),h.a.createElement(Q.a,{label:"Gebruiker",size:"col-sm-6",name:"userId",options:this.props.users,optionName:"fullName",value:this.state.userId,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.userId})),h.a.createElement("div",{className:"pull-right btn-group",role:"group"},h.a.createElement(M.a,{buttonClassName:"btn-default",buttonText:"Annuleren",onClickAction:this.props.toggleShowNew}),h.a.createElement(M.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"})))))}}]),t}(p.Component),Z=Object(f.b)((function(e){return{teamId:e.teamDetails.id,teamName:e.teamDetails.name,users:e.systemData.users}}),(function(e){return{newTeamUser:function(t){e(Object(g.c)(t))}}}))(Y),$=a(690),ee=function(e){function t(e){var a;return r()(this,t),a=l()(this,u()(t).call(this,e)),N()(v()(a),"toggleShowNew",(function(){a.setState({showNew:!a.state.showNew})})),a.state={showNew:!1},a}return d()(t,e),i()(t,[{key:"render",value:function(){return h.a.createElement(P.a,null,h.a.createElement($.a,null,h.a.createElement("span",{className:"h5 text-bold"},"Gekoppelde gebruikers"),this.props.permissions.createTeam&&h.a.createElement("a",{role:"button",className:"pull-right",onClick:this.toggleShowNew},h.a.createElement("span",{className:"glyphicon glyphicon-plus"}))),h.a.createElement(x.a,null,h.a.createElement("div",{className:"col-md-12"},h.a.createElement(K,null)),h.a.createElement("div",{className:"col-md-12 margin-10-top"},this.state.showNew&&h.a.createElement(Z,{toggleShowNew:this.toggleShowNew}))))}}]),t}(p.Component),te=Object(f.b)((function(e){return{permissions:e.meDetails.permissions}}))(ee),ae=function(e){function t(e){return r()(this,t),l()(this,u()(t).call(this,e))}return d()(t,e),i()(t,[{key:"render",value:function(){var e="",t=!0;return this.props.hasError?e="Fout bij het ophalen van team.":this.props.isLoading?e="Gegevens aan het laden.":Object(j.isEmpty)(this.props.teamDetails)?e="Geen team gevonden!":t=!1,t?h.a.createElement("div",null,e):h.a.createElement("div",null,h.a.createElement(F,null),h.a.createElement(te,null))}}]),t}(p.Component),ne=Object(f.b)((function(e){return{teamDetails:e.teamDetails,isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}),(function(e){return{fetchTeamDetails:function(t){e(Object(g.b)(t))}}}))(ae),re=function(e){function t(e){return r()(this,t),l()(this,u()(t).call(this,e))}return d()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.props.fetchTeamDetails(this.props.params.id)}},{key:"render",value:function(){return h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-9"},h.a.createElement("div",{className:"col-md-12 margin-10-top"},h.a.createElement(P.a,null,h.a.createElement(x.a,{className:"panel-small"},h.a.createElement(k,null)))),h.a.createElement("div",{className:"col-md-12 margin-10-top"},h.a.createElement(ne,null))),h.a.createElement("div",{className:"col-md-3"}))}}]),t}(p.Component);t.default=Object(f.b)((function(e){return{teamDetails:e.teamDetails}}),(function(e){return{fetchTeamDetails:function(t){e(Object(g.b)(t))}}}))(re)},682:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),i=a.n(s),o=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,s=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:s},t)};o.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},o.propTypes={className:i.a.string,onMouseEnter:i.a.func,onMouseLeave:i.a.func},t.a=o},683:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),i=a.n(s),o=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},a)};o.defaultProps={className:""},o.propTypes={className:i.a.string},t.a=o},684:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),i=a.n(s),o=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,s=e.type,i=e.value,o=e.loading,l=e.loadText,c=e.disabled;return o?r.a.createElement("button",{type:s,className:"btn btn-sm btn-loading ".concat(t),value:i,disabled:o},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",l):r.a.createElement("button",{type:s,className:"btn btn-sm ".concat(t),onClick:n,value:i,disabled:c},a)};o.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},o.propTypes={buttonClassName:i.a.string,buttonText:i.a.string.isRequired,onClickAction:i.a.func,type:i.a.string,value:i.a.string,loading:i.a.bool,loadText:i.a.string,disabled:i.a.bool},t.a=o},685:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),i=a.n(s),o=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,s=e.title,i=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:i,title:s},r.a.createElement("span",{className:"glyphicon ".concat(a)}))};o.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},o.propTypes={buttonClassName:i.a.string,iconName:i.a.string.isRequired,onClickAction:i.a.func,title:i.a.string,disabled:i.a.bool},t.a=o},686:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),i=a.n(s),o=function(e){var t=e.label,a=e.type,n=e.className,s=e.size,i=e.id,o=e.placeholder,l=e.name,c=e.value,u=e.onClickAction,m=e.onChangeAction,d=e.onBlurAction,p=e.required,h=e.readOnly,f=e.maxLength,g=e.error,b=e.min,v=e.max,E=e.step,N=e.errorMessage,y=e.divSize,w=e.divClassName,D=e.autoComplete;return r.a.createElement("div",{className:"form-group ".concat(y," ").concat(w)},r.a.createElement("label",{htmlFor:i,className:"col-sm-6 ".concat(p)},t),r.a.createElement("div",{className:"".concat(s)},r.a.createElement("input",{type:a,className:"form-control input-sm ".concat(n)+(g?"has-error":""),id:i,placeholder:o,name:l,value:c,onClick:u,onChange:m,onBlur:d,readOnly:h,maxLength:f,min:b,max:v,autoComplete:D,step:E})),g&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",N)))};o.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},o.propTypes={label:i.a.oneOfType([i.a.string,i.a.object]).isRequired,type:i.a.string,className:i.a.string,divClassName:i.a.string,size:i.a.string,divSize:i.a.string,id:i.a.string,placeholder:i.a.string,name:i.a.string.isRequired,value:i.a.oneOfType([i.a.string,i.a.number]),onClickAction:i.a.func,onChangeAction:i.a.func,onBlurAction:i.a.func,required:i.a.string,readOnly:i.a.bool,maxLength:i.a.string,error:i.a.bool,min:i.a.string,max:i.a.string,step:i.a.string,errorMessage:i.a.string,autoComplete:i.a.string},t.a=o},687:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(4),i=a(14),o=a.n(i),l=function(e){var t=e.label,a=e.className,n=e.id,i=e.value,o=e.link,l=e.hidden;return o.length>0?r.a.createElement("div",{className:a,style:l?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),r.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},r.a.createElement(s.b,{to:o,className:"link-underline"},i))):r.a.createElement("div",{className:a,style:l?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),r.a.createElement("div",{className:"col-sm-6",id:n},i))};l.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},l.propTypes={label:o.a.oneOfType([o.a.string,o.a.object]).isRequired,className:o.a.string,id:o.a.string,value:o.a.oneOfType([o.a.string,o.a.number]),link:o.a.string,hidden:o.a.bool},t.a=l},688:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),i=a.n(s),o=function(e){var t=e.label,a=e.className,n=e.size,s=e.id,i=e.name,o=e.value,l=e.options,c=e.onChangeAction,u=e.onBlurAction,m=e.required,d=e.error,p=e.errorMessage,h=e.optionValue,f=e.optionName,g=e.readOnly,b=e.placeholder,v=e.divClassName,E=e.emptyOption;return r.a.createElement("div",{className:"form-group ".concat(n," ").concat(v)},r.a.createElement("label",{htmlFor:s,className:"col-sm-6 ".concat(m)},t),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("select",{className:"form-control input-sm ".concat(a)+(d&&" has-error"),id:s,name:i,value:o,onChange:c,onBlur:u,readOnly:g},E&&r.a.createElement("option",{value:""},b),l.map((function(e){return r.a.createElement("option",{key:e[h],value:e[h]},e[f])})))),d&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",p)))};o.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},o.propTypes={label:i.a.string.isRequired,className:i.a.string,size:i.a.string,id:i.a.string,name:i.a.string.isRequired,options:i.a.array,value:i.a.oneOfType([i.a.string,i.a.number]),onChangeAction:i.a.func,onBlurAction:i.a.func,required:i.a.string,readOnly:i.a.bool,error:i.a.bool,errorMessage:i.a.string,emptyOption:i.a.bool,optionValue:i.a.string,optionName:i.a.string,placeholder:i.a.string},t.a=o},690:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(14),i=a.n(s),o=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-heading ".concat(t)},a)};o.defaultProps={className:""},o.propTypes={className:i.a.string},t.a=o},798:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var n=function(e){return{type:"FETCH_TEAM_DETAILS",id:e}},r=function(e,t){return{type:"UPDATE_TEAM",team:e,switchToView:t}},s=function(e){return{type:"NEW_TEAM_USER",teamUser:e}},i=function(e,t){return{type:"DELETE_TEAM_USER",teamId:e,userId:t}}},815:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var n=function(){return{type:"FETCH_TEAMS"}},r=function(){return{type:"CLEAR_TEAMS"}},s=function(e){return{type:"DELETE_TEAM",id:e}}}}]);