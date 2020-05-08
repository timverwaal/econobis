(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1616:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n.n(a),s=n(24),i=n.n(s),o=n(26),l=n.n(o),c=n(27),u=n.n(c),m=n(21),h=n.n(m),p=n(28),d=n.n(p),E=n(6),f=n.n(E),g=n(0),v=n.n(g),b=n(33),w=n(198),N=n.n(w),k=n(144),y=n(145),C=n(199),R=n(99),A=n(4),U=(n(8),function(e){function t(e){var n;return r()(this,t),(n=l()(this,u()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},n}return d()(t,e),i()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){A.f.push("/gebruiker/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.firstName,r=t.fullLastName,s=t.email,i=t.status;return v.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(n)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},v.a.createElement("td",null,a),v.a.createElement("td",null,r),v.a.createElement("td",null,s),v.a.createElement("td",null,i),v.a.createElement("td",null,this.state.showActionButtons?v.a.createElement("a",{role:"button",onClick:function(){return e.openItem(n)}},v.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):""))}}]),t}(g.Component)),D=function(e){function t(e){return r()(this,t),l()(this,u()(t).call(this,e))}return d()(t,e),i()(t,[{key:"render",value:function(){var e="",t=!0;return this.props.hasError?e="Fout bij het ophalen van gebruikers.":this.props.isLoading?e="Gegevens aan het laden.":0===this.props.users.length?e="Geen gebruikers gevonden!":t=!1,v.a.createElement("div",null,v.a.createElement(k.a,null,v.a.createElement(y.a,null,v.a.createElement("tr",{className:"thead-title"},v.a.createElement(R.a,{title:"Voornaam",width:"30%"}),v.a.createElement(R.a,{title:"Achternaam",width:"25%"}),v.a.createElement(R.a,{title:"E-mail",width:"30%"}),v.a.createElement(R.a,{title:"Status",width:"10%"}),v.a.createElement(R.a,{title:"",width:"5%"}))),v.a.createElement(C.a,null,t?v.a.createElement("tr",null,v.a.createElement("td",{colSpan:11},e)):this.props.users.map((function(e){return v.a.createElement(U,N()({key:e.id},e))})))))}}]),t}(g.Component),L=Object(b.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))(D),S=n(685),j=Object(b.b)((function(e){return{permissions:e.meDetails.permissions}}))((function(e){var t=e.permissions,n=void 0===t?{}:t;return v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-4"},v.a.createElement("div",{className:"btn-group",role:"group"},v.a.createElement(S.a,{iconName:"glyphicon-refresh",onClickAction:e.refreshContactsData}),n.manageUser&&v.a.createElement(S.a,{iconName:"glyphicon-plus",onClickAction:function(){A.f.push("/gebruiker/nieuw")}}))),v.a.createElement("div",{className:"col-md-4"},v.a.createElement("h3",{className:"text-center table-title"},"Gebruikers")),v.a.createElement("div",{className:"col-md-4"}))})),B=function(e){function t(e){var n;return r()(this,t),n=l()(this,u()(t).call(this,e)),f()(h()(n),"refreshContactsData",(function(){n.props.clearUsers(),n.props.fetchUsers()})),n}return d()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"componentWillUnmount",value:function(){this.props.clearUsers()}},{key:"render",value:function(){var e=this;return v.a.createElement("div",null,v.a.createElement("div",{className:"panel panel-default"},v.a.createElement("div",{className:"panel-body"},v.a.createElement("div",{className:"col-md-12 margin-10-top"},v.a.createElement(j,{refreshContactsData:function(){return e.refreshContactsData()}})),v.a.createElement("div",{className:"col-md-12 margin-10-top"},v.a.createElement(L,{users:this.props.users})))))}}]),t}(g.Component);t.default=Object(b.b)((function(e){return{users:e.users}}),(function(e){return{fetchUsers:function(){e({type:"FETCH_USERS"})},clearUsers:function(){e({type:"CLEAR_USERS"})}}}))(B)},685:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(14),i=n.n(s),o=function(e){var t=e.buttonClassName,n=e.iconName,a=e.onClickAction,s=e.title,i=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:a,disabled:i,title:s},r.a.createElement("span",{className:"glyphicon ".concat(n)}))};o.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},o.propTypes={buttonClassName:i.a.string,iconName:i.a.string.isRequired,onClickAction:i.a.func,title:i.a.string,disabled:i.a.bool},t.a=o}}]);