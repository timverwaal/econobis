(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1581:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n.n(a),o=n(24),s=n.n(o),c=n(26),i=n.n(c),l=n(27),u=n.n(l),m=n(21),p=n.n(m),h=n(28),d=n.n(h),f=n(6),E=n.n(f),b=n(0),v=n.n(b),g=n(33),w=n(815),y=n(198),N=n.n(y),D=n(144),O=n(145),T=n(199),j=n(99),M=n(4),I=function(e){function t(e){var n;return r()(this,t),(n=i()(this,u()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},n}return d()(t,e),s()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){M.f.push("/team/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.name,r=t.users,o=void 0===r?[]:r;return v.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(n)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},v.a.createElement("td",null,a),v.a.createElement("td",null,o.map((function(e){return e.fullName})).join(", ")),v.a.createElement("td",null,this.state.showActionButtons?v.a.createElement("a",{role:"button",onClick:function(){return e.openItem(n)}},v.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):"",this.state.showActionButtons&&this.props.permissions.createTeam?v.a.createElement("a",{role:"button",onClick:this.props.showDeleteItemModal.bind(this,n,a)},v.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))}}]),t}(b.Component),k=Object(g.b)((function(e){return{permissions:e.meDetails.permissions}}),null)(I),C=n(98),A=Object(g.b)(null,(function(e){return{deleteTeam:function(t){e(Object(w.b)(t))}}}))((function(e){return v.a.createElement(C.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deleteTeam(e.id),void e.closeDeleteItemModal()},title:"Verwijderen"},"Verwijder team: ",v.a.createElement("strong",null," ",e.name," "))}));function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e){function t(e){var n;return r()(this,t),n=i()(this,u()(t).call(this,e)),E()(p()(n),"showDeleteItemModal",(function(e,t){n.setState(P({},n.state,{showDeleteItem:!0,deleteItem:P({},n.state.deleteItem,{id:e,name:t})}))})),E()(p()(n),"closeDeleteItemModal",(function(){n.setState(P({},n.state,{showDeleteItem:!1,deleteItem:P({},n.state.deleteItem,{id:"",name:""})}))})),n.state={showDeleteItem:!1,deleteItem:{id:"",name:""}},n}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this,t="",n=!0;return this.props.hasError?t="Fout bij het ophalen van teams.":this.props.isLoading?t="Gegevens aan het laden.":0===this.props.teams.length?t="Geen teams gevonden!":n=!1,v.a.createElement("div",null,v.a.createElement(D.a,null,v.a.createElement(O.a,null,v.a.createElement("tr",{className:"thead-title"},v.a.createElement(j.a,{title:"Team",width:"30%"}),v.a.createElement(j.a,{title:"Gebruikers",width:"65%"}),v.a.createElement(j.a,{title:"",width:"5%"}))),v.a.createElement(T.a,null,n?v.a.createElement("tr",null,v.a.createElement("td",{colSpan:3},t)):this.props.teams.map((function(t){return v.a.createElement(k,N()({key:t.id,showDeleteItemModal:e.showDeleteItemModal},t))})))),this.state.showDeleteItem&&v.a.createElement(A,N()({closeDeleteItemModal:this.closeDeleteItemModal},this.state.deleteItem)))}}]),t}(b.Component),S=Object(g.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))(R),B=n(685),G=Object(g.b)((function(e){return{permissions:e.meDetails.permissions}}),null)((function(e){return v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-4"},v.a.createElement("div",{className:"btn-group",role:"group"},v.a.createElement(B.a,{iconName:"glyphicon-refresh",onClickAction:e.refreshTeamsData}),e.permissions.createTeam&&v.a.createElement(B.a,{iconName:"glyphicon-plus",onClickAction:function(){M.f.push("/team/nieuw")}}))),v.a.createElement("div",{className:"col-md-4"},v.a.createElement("h3",{className:"text-center table-title"},"Teams")),v.a.createElement("div",{className:"col-md-4"}))})),V=n(682),_=n(683),x=function(e){function t(e){var n;return r()(this,t),n=i()(this,u()(t).call(this,e)),E()(p()(n),"refreshTeamsData",(function(){n.props.clearTeams(),n.props.fetchTeams()})),n}return d()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.props.fetchTeams()}},{key:"componentWillUnmount",value:function(){this.props.clearTeams()}},{key:"render",value:function(){var e=this;return v.a.createElement(V.a,null,v.a.createElement(_.a,null,v.a.createElement("div",{className:"col-md-12 margin-10-top"},v.a.createElement(G,{refreshTeamsData:function(){return e.refreshTeamsData()}})),v.a.createElement("div",{className:"col-md-12 margin-10-top"},v.a.createElement(S,{teams:this.props.teams}))))}}]),t}(b.Component);t.default=Object(g.b)((function(e){return{teams:e.teams}}),(function(e){return{fetchTeams:function(){e(Object(w.c)())},clearTeams:function(){e(Object(w.a)())}}}))(x)},682:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),s=n.n(o),c=function(e){var t=e.children,n=e.className,a=e.onMouseEnter,o=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(n),onMouseEnter:a,onMouseLeave:o},t)};c.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},c.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},t.a=c},683:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),s=n.n(o),c=function(e){var t=e.className,n=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},n)};c.defaultProps={className:""},c.propTypes={className:s.a.string},t.a=c},685:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),s=n.n(o),c=function(e){var t=e.buttonClassName,n=e.iconName,a=e.onClickAction,o=e.title,s=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:a,disabled:s,title:o},r.a.createElement("span",{className:"glyphicon ".concat(n)}))};c.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},c.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},t.a=c},815:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=function(){return{type:"FETCH_TEAMS"}},r=function(){return{type:"CLEAR_TEAMS"}},o=function(e){return{type:"DELETE_TEAM",id:e}}}}]);