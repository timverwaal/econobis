(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1573:function(e,t,n){"use strict";n.r(t);var a=n(25),s=n.n(a),c=n(24),o=n.n(c),r=n(26),i=n.n(r),l=n(27),u=n.n(l),m=n(28),h=n.n(m),d=n(0),v=n.n(d),f=n(791),p=n(792),E=n(21),N=n.n(E),b=n(6),g=n.n(b),L=n(8),k=n.n(L),y=function(e){var t=e.job,n=t.value,a=t.createdAt;return v.a.createElement("div",{className:"row border ".concat(e.highlightLine),onMouseEnter:function(){return e.onLineEnter()},onMouseLeave:function(){return e.onLineLeave()}},v.a.createElement("div",{className:"col-sm-8"},n),v.a.createElement("div",{className:"col-sm-4"},k()(a).format("L")))},M=function(e){function t(e){var n;return s()(this,t),n=i()(this,u()(t).call(this,e)),g()(N()(n),"onLineEnter",(function(){n.setState({highlightLine:"highlight-line"})})),g()(N()(n),"onLineLeave",(function(){n.setState({highlightLine:""})})),n.state={job:e.job},n}return h()(t,e),o()(t,[{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement(y,{highlightLine:this.state.highlightLine,onLineEnter:this.onLineEnter,onLineLeave:this.onLineLeave,job:this.state.job}))}}]),t}(d.Component),j=function(e){return v.a.createElement("div",null,v.a.createElement("div",{className:"row border header"},v.a.createElement("div",{className:"col-sm-8"},"Melding"),v.a.createElement("div",{className:"col-sm-4"},"Datum")),e.jobs.length>0?e.jobs.map((function(e){return v.a.createElement(M,{key:e.id,job:e})})):v.a.createElement("div",null,"Geen gegevens bekend."))},x=n(682),A=n(683),w=n(690),z=n(2),C=n.n(z),T="".concat(URL_API,"/api/jobs"),P=function(){var e="".concat(T),t="Bearer ".concat(localStorage.getItem("access_token"));return C.a.defaults.headers.common.Authorization=t,C.a.get(e).then((function(e){return e.data})).catch((function(e){console.log(e)}))},S=function(e){function t(e){var n;return s()(this,t),(n=i()(this,u()(t).call(this,e))).state={jobs:[]},n}return h()(t,e),o()(t,[{key:"componentWillMount",value:function(){var e=this;P().then((function(t){e.setState({jobs:t.data})}))}},{key:"render",value:function(){return v.a.createElement("div",{className:"".concat(this.props.size)},v.a.createElement(x.a,null,v.a.createElement(w.a,null,v.a.createElement("span",{className:"h5 text-bold"},"Processen")),v.a.createElement(A.a,null,v.a.createElement("div",{className:"col-md-12"},v.a.createElement(j,{jobs:this.state.jobs})))))}}]),t}(d.Component),O=function(e){function t(){return s()(this,t),i()(this,u()(t).apply(this,arguments))}return h()(t,e),o()(t,[{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement("div",{className:"row"},v.a.createElement(f.a,{size:"col-xs-3"}),v.a.createElement(p.a,{size:"col-xs-3"})),v.a.createElement("div",{className:"row"},v.a.createElement(S,{size:"col-xs-6"})))}}]),t}(d.Component);t.default=O},682:function(e,t,n){"use strict";var a=n(0),s=n.n(a),c=n(14),o=n.n(c),r=function(e){var t=e.children,n=e.className,a=e.onMouseEnter,c=e.onMouseLeave;return s.a.createElement("div",{className:"panel panel-default ".concat(n),onMouseEnter:a,onMouseLeave:c},t)};r.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},r.propTypes={className:o.a.string,onMouseEnter:o.a.func,onMouseLeave:o.a.func},t.a=r},683:function(e,t,n){"use strict";var a=n(0),s=n.n(a),c=n(14),o=n.n(c),r=function(e){var t=e.className,n=e.children;return s.a.createElement("div",{className:"panel-body ".concat(t)},n)};r.defaultProps={className:""},r.propTypes={className:o.a.string},t.a=r},690:function(e,t,n){"use strict";var a=n(0),s=n.n(a),c=n(14),o=n.n(c),r=function(e){var t=e.className,n=e.children;return s.a.createElement("div",{className:"panel-heading ".concat(t)},n)};r.defaultProps={className:""},r.propTypes={className:o.a.string},t.a=r},791:function(e,t,n){"use strict";var a=n(25),s=n.n(a),c=n(24),o=n.n(c),r=n(26),i=n.n(r),l=n(27),u=n.n(l),m=n(28),h=n.n(m),d=n(0),v=n.n(d),f=n(4),p=n(146),E=function(e){function t(e){var n;return s()(this,t),(n=i()(this,u()(t).call(this,e))).state={amountOpenEmails:"-"},n}return h()(t,e),o()(t,[{key:"componentWillMount",value:function(){var e=this;p.a.getAmountOpen().then((function(t){e.setState({amountOpenEmails:t})}))}},{key:"render",value:function(){return v.a.createElement("div",{className:this.props.size,onClick:function(){return f.f.push("/emails/inbox/eigen")}},v.a.createElement("div",{className:"panel panel-default",id:"dashboardbutton-1"},v.a.createElement("div",{className:"panel-body"},v.a.createElement("h4",{className:"text-center text-bold"},"E-MAIL"),v.a.createElement("h4",{className:"text-center text-bold"},this.state.amountOpenEmails))))}}]),t}(d.Component);t.a=E},792:function(e,t,n){"use strict";var a=n(25),s=n.n(a),c=n(24),o=n.n(c),r=n(26),i=n.n(r),l=n(27),u=n.n(l),m=n(28),h=n.n(m),d=n(0),v=n.n(d),f=n(4),p=n(104),E=function(e){function t(e){var n;return s()(this,t),(n=i()(this,u()(t).call(this,e))).state={amountActiveTasks:"-"},n}return h()(t,e),o()(t,[{key:"componentWillMount",value:function(){var e=this;p.a.getAmountActive().then((function(t){e.setState({amountActiveTasks:t})}))}},{key:"render",value:function(){return v.a.createElement("div",{className:this.props.size,onClick:function(){return f.f.push("/taken/eigen")}},v.a.createElement("div",{className:"panel panel-default",id:"dashboardbutton-4"},v.a.createElement("div",{className:"panel-body"},v.a.createElement("h4",{className:"text-center text-bold"},"OPEN TAKEN"),v.a.createElement("h4",{className:"text-center text-bold"},this.state.amountActiveTasks))))}}]),t}(d.Component);t.a=E}}]);