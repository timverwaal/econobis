(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1512:function(e,t,n){"use strict";n.r(t);var a=n(25),s=n.n(a),i=n(24),c=n.n(i),o=n(26),r=n.n(o),l=n(27),u=n.n(l),m=n(28),d=n.n(m),v=n(0),h=n.n(v),p=n(791),f=n(934),E=n(935),N=n(792),b=n(936),k=function(e){function t(){return s()(this,t),r()(this,u()(t).apply(this,arguments))}return d()(t,e),c()(t,[{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement("div",{className:"row"},h.a.createElement(p.a,{size:"col-xs-2"}),h.a.createElement(N.a,{size:"col-xs-2"}),h.a.createElement(f.a,{size:"col-xs-2"}),h.a.createElement(E.a,{size:"col-xs-2"}),h.a.createElement(b.a,{size:"col-xs-2"})))}}]),t}(v.Component);t.default=k},791:function(e,t,n){"use strict";var a=n(25),s=n.n(a),i=n(24),c=n.n(i),o=n(26),r=n.n(o),l=n(27),u=n.n(l),m=n(28),d=n.n(m),v=n(0),h=n.n(v),p=n(4),f=n(146),E=function(e){function t(e){var n;return s()(this,t),(n=r()(this,u()(t).call(this,e))).state={amountOpenEmails:"-"},n}return d()(t,e),c()(t,[{key:"componentWillMount",value:function(){var e=this;f.a.getAmountOpen().then((function(t){e.setState({amountOpenEmails:t})}))}},{key:"render",value:function(){return h.a.createElement("div",{className:this.props.size,onClick:function(){return p.f.push("/emails/inbox/eigen")}},h.a.createElement("div",{className:"panel panel-default",id:"dashboardbutton-1"},h.a.createElement("div",{className:"panel-body"},h.a.createElement("h4",{className:"text-center text-bold"},"E-MAIL"),h.a.createElement("h4",{className:"text-center text-bold"},this.state.amountOpenEmails))))}}]),t}(v.Component);t.a=E},792:function(e,t,n){"use strict";var a=n(25),s=n.n(a),i=n(24),c=n.n(i),o=n(26),r=n.n(o),l=n(27),u=n.n(l),m=n(28),d=n.n(m),v=n(0),h=n.n(v),p=n(4),f=n(104),E=function(e){function t(e){var n;return s()(this,t),(n=r()(this,u()(t).call(this,e))).state={amountActiveTasks:"-"},n}return d()(t,e),c()(t,[{key:"componentWillMount",value:function(){var e=this;f.a.getAmountActive().then((function(t){e.setState({amountActiveTasks:t})}))}},{key:"render",value:function(){return h.a.createElement("div",{className:this.props.size,onClick:function(){return p.f.push("/taken/eigen")}},h.a.createElement("div",{className:"panel panel-default",id:"dashboardbutton-4"},h.a.createElement("div",{className:"panel-body"},h.a.createElement("h4",{className:"text-center text-bold"},"OPEN TAKEN"),h.a.createElement("h4",{className:"text-center text-bold"},this.state.amountActiveTasks))))}}]),t}(v.Component);t.a=E},934:function(e,t,n){"use strict";var a=n(25),s=n.n(a),i=n(24),c=n.n(i),o=n(26),r=n.n(o),l=n(27),u=n.n(l),m=n(28),d=n.n(m),v=n(0),h=n.n(v),p=n(4),f=n(205),E=function(e){function t(e){var n;return s()(this,t),(n=r()(this,u()(t).call(this,e))).state={amountActiveIntakes:"-"},n}return d()(t,e),c()(t,[{key:"componentWillMount",value:function(){var e=this;f.a.getAmountActive().then((function(t){e.setState({amountActiveIntakes:t})}))}},{key:"render",value:function(){return h.a.createElement("div",{className:this.props.size,onClick:function(){return p.f.push("/intakes")}},h.a.createElement("div",{className:"panel panel-default",id:"dashboardbutton-2"},h.a.createElement("div",{className:"panel-body"},h.a.createElement("h4",{className:"text-center text-bold"},"INTAKES"),h.a.createElement("h4",{className:"text-center text-bold"},this.state.amountActiveIntakes))))}}]),t}(v.Component);t.a=E},935:function(e,t,n){"use strict";var a=n(25),s=n.n(a),i=n(24),c=n.n(i),o=n(26),r=n.n(o),l=n(27),u=n.n(l),m=n(28),d=n.n(m),v=n(0),h=n.n(v),p=n(4),f=n(208),E=function(e){function t(e){var n;return s()(this,t),(n=r()(this,u()(t).call(this,e))).state={amountActiveOpportunities:"-"},n}return d()(t,e),c()(t,[{key:"componentWillMount",value:function(){var e=this;f.a.getAmountActive().then((function(t){e.setState({amountActiveOpportunities:t})}))}},{key:"render",value:function(){return h.a.createElement("div",{className:this.props.size,onClick:function(){return p.f.push("/kansen")}},h.a.createElement("div",{className:"panel panel-default",id:"dashboardbutton-3"},h.a.createElement("div",{className:"panel-body"},h.a.createElement("h4",{className:"text-center text-bold"},"KANSEN"),h.a.createElement("h4",{className:"text-center text-bold"},this.state.amountActiveOpportunities))))}}]),t}(v.Component);t.a=E},936:function(e,t,n){"use strict";var a=n(25),s=n.n(a),i=n(24),c=n.n(i),o=n(26),r=n.n(o),l=n(27),u=n.n(l),m=n(28),d=n.n(m),v=n(0),h=n.n(v),p=n(4),f=n(210),E=function(e){function t(e){var n;return s()(this,t),(n=r()(this,u()(t).call(this,e))).state={amountActiveQuotationsRequests:"-"},n}return d()(t,e),c()(t,[{key:"componentWillMount",value:function(){var e=this;f.a.getAmountActive().then((function(t){e.setState({amountActiveQuotationsRequests:t})}))}},{key:"render",value:function(){return h.a.createElement("div",{className:this.props.size,onClick:function(){return p.f.push("/offerteverzoeken")}},h.a.createElement("div",{className:"panel panel-default",id:"dashboardbutton-5"},h.a.createElement("div",{className:"panel-body"},h.a.createElement("h4",{className:"text-center text-bold"},"OFFERTE VERZOEKEN"),h.a.createElement("h4",{className:"text-center text-bold"},this.state.amountActiveQuotationsRequests))))}}]),t}(v.Component);t.a=E}}]);