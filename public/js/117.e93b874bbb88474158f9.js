(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1590:function(e,n,t){"use strict";t.r(n);var a=t(25),i=t.n(a),o=t(24),s=t.n(o),l=t(26),r=t.n(l),c=t(27),u=t.n(c),m=t(21),p=t.n(m),h=t(28),d=t.n(h),g=t(6),f=t.n(g),E=t(0),v=t.n(E),D=t(33),N=t(198),b=t.n(N),M=t(144),w=t(145),y=t(199),k=t(99),C=t(4),A=function(e){function n(e){var t;return i()(this,n),(t=r()(this,u()(n).call(this,e))).state={showActionButtons:!1,highlightRow:""},t}return d()(n,e),s()(n,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){C.f.push("/mailgun-domein/".concat(e))}},{key:"render",value:function(){var e=this,n=this.props,t=n.id,a=n.domain,i=n.isVerified;return v.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(t)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},v.a.createElement("td",null,a),v.a.createElement("td",null,i?"Ja":"Nee"),v.a.createElement("td",null,this.state.showActionButtons?v.a.createElement("a",{role:"button",onClick:function(){return e.openItem(t)}},v.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):""))}}]),n}(E.Component),L=Object(D.b)((function(e){return{permissions:e.meDetails.permissions}}),null)(A),R=function(e){function n(e){var t;return i()(this,n),(t=r()(this,u()(n).call(this,e))).state={},t}return d()(n,e),s()(n,[{key:"render",value:function(){var e="",n=!0;return this.props.hasError?e="Fout bij het ophalen van mailgun domeinen.":this.props.isLoading?e="Gegevens aan het laden.":0===this.props.mailgunDomains.length?e="Geen mailgun domeinen gevonden!":n=!1,v.a.createElement("div",null,v.a.createElement(M.a,null,v.a.createElement(w.a,null,v.a.createElement("tr",{className:"thead-title"},v.a.createElement(k.a,{title:"Domeinnaam",width:"50%"}),v.a.createElement(k.a,{title:"Geverifieerd",width:"45%"}),v.a.createElement(k.a,{title:"",width:"5%"}))),v.a.createElement(y.a,null,n?v.a.createElement("tr",null,v.a.createElement("td",{colSpan:3},e)):this.props.mailgunDomains.map((function(e){return v.a.createElement(L,b()({key:e.id},e))})))))}}]),n}(E.Component),I=Object(D.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))(R),O=t(685),j=Object(D.b)((function(e){return{permissions:e.meDetails.permissions,mailgunDomains:e.mailgunDomains}}),null)((function(e){return v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-4"},v.a.createElement("div",{className:"btn-group",role:"group"},v.a.createElement(O.a,{iconName:"glyphicon-refresh",onClickAction:e.refreshMailgunDomainsData}),e.permissions.manageMailgunDomain&&v.a.createElement(O.a,{iconName:"glyphicon-plus",onClickAction:function(){C.f.push("/mailgun-domein/nieuw")}}))),v.a.createElement("div",{className:"col-md-4"},v.a.createElement("h3",{className:"text-center table-title"},"Mailgun domeinen")),v.a.createElement("div",{className:"col-md-4"},v.a.createElement("div",{className:"pull-right"},"Resultaten: ",e.mailgunDomains?e.mailgunDomains.length:0)))})),G=t(682),S=t(683),B=function(e){function n(e){var t;return i()(this,n),t=r()(this,u()(n).call(this,e)),f()(p()(t),"refreshMailgunDomainsData",(function(){t.props.clearMailgunDomains(),t.props.fetchMailgunDomains()})),t}return d()(n,e),s()(n,[{key:"componentDidMount",value:function(){this.props.fetchMailgunDomains()}},{key:"componentWillUnmount",value:function(){this.props.clearMailgunDomains()}},{key:"render",value:function(){var e=this;return v.a.createElement(G.a,null,v.a.createElement(S.a,null,v.a.createElement("div",{className:"col-md-12 margin-10-top"},v.a.createElement(j,{refreshMailgunDomainsData:function(){return e.refreshMailgunDomainsData()}})),v.a.createElement("div",{className:"col-md-12 margin-10-top"},v.a.createElement(I,{mailgunDomains:this.props.mailgunDomains}))))}}]),n}(E.Component);n.default=Object(D.b)((function(e){return{mailgunDomains:e.mailgunDomains}}),(function(e){return{fetchMailgunDomains:function(){e({type:"FETCH_MAILGUN_DOMAINS"})},clearMailgunDomains:function(){e({type:"CLEAR_MAILGUN_DOMAINS"})}}}))(B)},682:function(e,n,t){"use strict";var a=t(0),i=t.n(a),o=t(14),s=t.n(o),l=function(e){var n=e.children,t=e.className,a=e.onMouseEnter,o=e.onMouseLeave;return i.a.createElement("div",{className:"panel panel-default ".concat(t),onMouseEnter:a,onMouseLeave:o},n)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:s.a.string,onMouseEnter:s.a.func,onMouseLeave:s.a.func},n.a=l},683:function(e,n,t){"use strict";var a=t(0),i=t.n(a),o=t(14),s=t.n(o),l=function(e){var n=e.className,t=e.children;return i.a.createElement("div",{className:"panel-body ".concat(n)},t)};l.defaultProps={className:""},l.propTypes={className:s.a.string},n.a=l},685:function(e,n,t){"use strict";var a=t(0),i=t.n(a),o=t(14),s=t.n(o),l=function(e){var n=e.buttonClassName,t=e.iconName,a=e.onClickAction,o=e.title,s=e.disabled;return i.a.createElement("button",{type:"button",className:"btn ".concat(n),onClick:a,disabled:s,title:o},i.a.createElement("span",{className:"glyphicon ".concat(t)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:s.a.string,iconName:s.a.string.isRequired,onClickAction:s.a.func,title:s.a.string,disabled:s.a.bool},n.a=l}}]);