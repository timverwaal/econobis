(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1494:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.mailReply={viewBox:"0 0 1792 1792",children:[{name:"path",attribs:{d:"M1792 1120q0 166-127 451-3 7-10.5 24t-13.5 30-13 22q-12 17-28 17-15 0-23.5-10t-8.5-25q0-9 2.5-26.5t2.5-23.5q5-68 5-123 0-101-17.5-181t-48.5-138.5-80-101-105.5-69.5-133-42.5-154-21.5-175.5-6h-224v256q0 26-19 45t-45 19-45-19l-512-512q-19-19-19-45t19-45l512-512q19-19 45-19t45 19 19 45v256h224q713 0 875 403 53 134 53 333z"}}]}},1495:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.mailReplyAll={viewBox:"0 0 1792 1792",children:[{name:"path",attribs:{d:"M640 1082v70q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v69l-397 398q-19 19-19 45t19 45zM1792 1120q0 58-17 133.5t-38.5 138-48 125-40.5 90.5l-20 40q-8 17-28 17-6 0-9-1-25-8-23-34 43-400-106-565-64-71-170.5-110.5t-267.5-52.5v251q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v262q411 28 599 221 169 173 169 509z"}}]}},1496:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.mailForward={viewBox:"0 0 1792 1792",children:[{name:"path",attribs:{d:"M1792 640q0 26-19 45l-512 512q-19 19-45 19t-45-19-19-45v-256h-224q-98 0-175.5 6t-154 21.5-133 42.5-105.5 69.5-80 101-48.5 138.5-17.5 181q0 55 5 123 0 6 2.5 23.5t2.5 26.5q0 15-8.5 25t-23.5 10q-16 0-28-17-7-9-13-22t-13.5-30-10.5-24q-127-285-127-451 0-199 53-333 162-403 875-403h224v-256q0-26 19-45t45-19 45 19l512 512q19 19 19 45z"}}]}},1538:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),o=a(24),l=a.n(o),i=a(26),s=a.n(i),c=a(27),u=a.n(c),m=a(21),d=a.n(m),p=a(28),h=a.n(p),f=a(0),v=a.n(f),b=a(33),E=a(4),g=a(18),y=a.n(g),w=a(1494),N=a(1495),k=a(1496),C=a(682),O=a(683),T=a(685),j=Object(b.b)((function(e){return{email:e.email}}))((function(e){var t=e.email,a=e.id,n=e.removeEmail,r=t.from,o="btn-success btn-sm";return"removed"===t.folder&&(o="btn-danger btn-sm"),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-sm-12"},v.a.createElement(C.a,null,v.a.createElement(O.a,{className:"panel-small"},v.a.createElement("div",{className:"col-md-4"},v.a.createElement("div",{className:"btn-group margin-small margin-10-right",role:"group"},v.a.createElement(T.a,{iconName:"glyphicon-arrow-left",onClickAction:E.e.goBack})),v.a.createElement("div",{className:"btn-group margin-small",role:"group"},v.a.createElement("button",{type:"button",title:"Beantwoorden",className:"btn btn-success btn-sm",onClick:function(){E.f.push("/email/".concat(a,"/beantwoorden"))}},v.a.createElement(y.a,{icon:w.mailReply,size:13})),v.a.createElement("button",{type:"button",title:"Allen beantwoorden",className:"btn btn-success btn-sm",onClick:function(){E.f.push("/email/".concat(a,"/allenbeantwoorden"))}},v.a.createElement(y.a,{icon:N.mailReplyAll,size:13})),v.a.createElement("button",{type:"button",title:"Doorsturen",className:"btn btn-success btn-sm",onClick:function(){E.f.push("/email/".concat(a,"/doorsturen"))}},v.a.createElement(y.a,{icon:k.mailForward,size:13}))),v.a.createElement("div",{className:"btn-group margin-small margin-10-left",role:"group"},v.a.createElement(T.a,{iconName:"glyphicon-trash",onClickAction:n,buttonClassName:o}))),v.a.createElement("div",{className:"col-md-4"},v.a.createElement("h4",{className:"text-center text-success margin-small"},v.a.createElement("strong",null,r?"E-mail van: "+r:""))),v.a.createElement("div",{className:"col-md-4"})))))})),q=a(197),I=a(6),D=a.n(I),M=a(8),A=a.n(M),R=a(688),L=a(728),P=a(684),S=a(695),_=a(687),x=a(100),z=a(146),B=function(e){return{type:"FETCH_EMAIL",id:e}},V=a(210),Y=a(104),U=a(103),F=a(205),H=a(208),W=a(702),G=a(209),K=a(211),J=a(742),Q=a(689),X=a.n(Q);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){D()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ee=function(e){function t(e){var a;r()(this,t),a=s()(this,u()(t).call(this,e)),D()(d()(a),"handleInputChange",(function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState($({},a.state,{email:$({},a.state.email,D()({},r,n))}))})),D()(d()(a),"handleContactIds",(function(e){a.setState($({},a.state,{email:$({},a.state.email,{contactIds:e})}))})),D()(d()(a),"handleSubmit",(function(e){e.preventDefault();var t=a.state.email;t.statusId&&z.a.setStatus(t.id,t.statusId).then((function(e){a.props.fetchEmail(t.id)})),X.a.isEmpty(t.responsible.toString())&&(t.responsibleUserId="",t.responsibleTeamId=""),t.responsible.search("user")>=0&&(t.responsibleUserId=t.responsible.replace("user",""),t.responsibleTeamId=""),t.responsible.search("team")>=0&&(t.responsibleUserId="",t.responsibleTeamId=t.responsible.replace("team","")),z.a.updateEmail(t).then((function(e){a.props.fetchEmail(t.id)})),a.props.switchToView()}));var n=e.email,o=n.id,l=n.responsibleUserId,i=n.responsibleTeamId,c=n.contacts,m=n.intake,p=n.task,h=n.quotationRequest,f=n.measure,v=n.opportunity,b=n.order,E=n.invoice,g=n.status,y=(n.removedBy,n.dateRemoved,"");return l&&(y="user"+l),i&&(y="team"+i),a.state={email:{id:o,contactIds:c&&c.map((function(e){return e.id})).join(","),intakeId:m?m.id:"",taskId:p?p.id:"",quotationRequestId:h?h.id:"",measureId:f?f.id:"",statusId:g?g.id:"",opportunityId:v?v.id:"",orderId:b?b.id:"",invoiceId:E?E.id:"",responsibleUserId:l,responsibleTeamId:i,responsible:y},orders:[],invoices:[],contacts:[],quotationRequests:[],tasks:[],measures:[],intakes:[],opportunities:[],peekLoading:{contacts:!0}},a}return h()(t,e),l()(t,[{key:"componentWillMount",value:function(){var e=this;x.a.getContactsPeek().then((function(t){e.setState({contacts:t,peekLoading:$({},e.state.peekLoading,{contacts:!1})})})),V.a.peekQuotationRequests().then((function(t){e.setState({quotationRequests:t})})),Y.a.peekTasks().then((function(t){e.setState({tasks:t})})),U.a.peekMeasures().then((function(t){e.setState({measures:t})})),F.a.peekIntakes().then((function(t){e.setState({intakes:t})})),H.a.peekOpportunities().then((function(t){e.setState({opportunities:t})})),G.a.peekOrders().then((function(t){e.setState({orders:t})})),K.a.peekInvoices().then((function(t){e.setState({invoices:t})}))}},{key:"render",value:function(){var e=this.state.email,t=e.contactIds,a=e.statusId,n=e.intakeId,r=e.taskId,o=e.quotationRequestId,l=e.measureId,i=e.opportunityId,s=e.orderId,c=e.invoiceId,u=e.responsible,m=this.props.email,d=m.from,p=m.toWithGroup,h=m.cc,f=m.bcc,b=m.subject,E=m.htmlBody,g=m.createdAt,y=m.dateSent,w=m.folder,N=m.status,k=m.sentByUser,C=m.removedBy,O=m.dateRemoved;return v.a.createElement("div",null,"removed"===w?v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"row"},v.a.createElement(_.a,{label:"Verwijderd door",value:C?C.fullName:"Onbekend",link:C?"gebruiker/"+C.id:""}),v.a.createElement(_.a,{label:"Datum verwijderd",value:O?A()(O).format("DD-MM-YYYY HH:mm"):""})),v.a.createElement("hr",null)):null,v.a.createElement("div",{className:"row"},v.a.createElement(_.a,{label:"Van",value:d}),v.a.createElement(_.a,{label:"Ontvangen datum tijd",value:g?A()(g).format("DD-MM-YYYY HH:mm"):""})),v.a.createElement("div",{className:"row"},v.a.createElement(_.a,{label:"Aan",value:p&&p.map((function(e){return e})).join(", ")}),v.a.createElement(_.a,{label:"Verzonden datum tijd",value:y?A()(y).format("DD-MM-YYYY HH:mm"):""})),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"form-group col-md-6"}),v.a.createElement(_.a,{label:"Verzonden door gebruiker",value:k?k.fullName:""})),v.a.createElement("div",{className:"row"},v.a.createElement(_.a,{label:"Cc",value:h&&h.map((function(e){return e})).join(", ")}),v.a.createElement(_.a,{label:"Bcc",value:f&&f.map((function(e){return e})).join(", ")})),v.a.createElement("div",{className:"row"},v.a.createElement(W.a,{label:"Contact",name:"contactIds",options:this.state.contacts,value:t,onChangeAction:this.handleContactIds,optionName:"fullName",isLoading:this.state.peekLoading.contacts}),v.a.createElement(R.a,{label:"Intake",size:"col-sm-6",name:"intakeId",options:this.state.intakes,value:n,onChangeAction:this.handleInputChange})),v.a.createElement("div",{className:"row"},v.a.createElement(R.a,{label:"Taak",size:"col-sm-6",name:"taskId",options:this.state.tasks,value:r,onChangeAction:this.handleInputChange}),v.a.createElement(R.a,{label:"Offerteverzoek",size:"col-sm-6",name:"quotationRequestId",options:this.state.quotationRequests,value:o,onChangeAction:this.handleInputChange})),v.a.createElement("div",{className:"row"},v.a.createElement(R.a,{label:"Maatregel",size:"col-sm-6",name:"measureId",options:this.state.measures,value:l,onChangeAction:this.handleInputChange}),v.a.createElement(R.a,{label:"Kans",size:"col-sm-6",name:"opportunityId",options:this.state.opportunities,value:i,onChangeAction:this.handleInputChange})),v.a.createElement("div",{className:"row"},v.a.createElement(R.a,{label:"Order",size:"col-sm-6",name:"orderId",options:this.state.orders,value:s,onChangeAction:this.handleInputChange}),v.a.createElement(R.a,{label:"Nota",size:"col-sm-6",name:"invoiceId",options:this.state.invoices,value:c,onChangeAction:this.handleInputChange})),v.a.createElement("div",{className:"row margin-10-top"},v.a.createElement("div",{className:"col-sm-12"},v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-sm-3"},v.a.createElement("label",{className:"col-sm-12"},"Onderwerp")),v.a.createElement("div",{className:"col-sm-9"},b)))),v.a.createElement("div",{className:"row"},v.a.createElement(L.a,{label:"Tekst",value:E})),("inbox"==w&&N||"inbox"==w&&null==N)&&v.a.createElement("div",{className:"row"},v.a.createElement(R.a,{label:"Status",size:"col-sm-6",name:"statusId",options:this.props.emailStatuses,value:a,onChangeAction:this.handleInputChange})),"inbox"==w&&v.a.createElement("div",{className:"row"},v.a.createElement(J.a,{label:"Verantwoordelijke",size:"col-sm-6",name:"responsible",optionsInGroups:[{name:"user",label:"Gebruikers",options:this.props.users,optionName:"fullName"},{name:"team",label:"Teams",options:this.props.teams}],value:u,onChangeAction:this.handleInputChange})),v.a.createElement(S.a,null,v.a.createElement("div",{className:"pull-right btn-group",role:"group"},v.a.createElement(P.a,{buttonClassName:"btn-default",buttonText:"Annuleren",onClickAction:this.props.switchToView}),v.a.createElement(P.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"}))))}}]),t}(f.Component),te=Object(b.b)((function(e){return{email:e.email,emailStatuses:e.systemData.emailStatuses,teams:e.systemData.teams,users:e.systemData.users}}),(function(e){return{fetchEmail:function(t){e(B(t))}}}))(ee);A.a.locale("nl");var ae=Object(b.b)((function(e){return{email:e.email}}))((function(e){var t=e.email,a=t.from,n=t.responsibleUser,r=t.responsibleTeam,o=t.toWithGroup,l=t.cc,i=t.bcc,s=t.contacts,c=t.order,u=t.invoice,m=t.intake,d=t.task,p=t.quotationRequest,h=t.measure,f=t.opportunity,b=t.subject,g=t.htmlBody,y=t.createdAt,w=t.dateSent,N=t.sentByUser,k=t.folder,C=t.status,O=t.closedBy,T=t.dateClosed,j=t.removedBy,q=t.dateRemoved;return v.a.createElement("div",null,"removed"===k?v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement(_.a,{label:"Verwijderd door",value:j?j.fullName:"Onbekend",link:j?"gebruiker/"+j.id:""}),v.a.createElement(_.a,{label:"Datum verwijderd",value:q?A()(q).format("DD-MM-YYYY HH:mm"):""})),v.a.createElement("hr",null)):null,v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement(_.a,{label:"Van",value:a}),v.a.createElement(_.a,{label:"Ontvangen datum tijd",value:y?A()(y).format("DD-MM-YYYY HH:mm"):""})),v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement(_.a,{label:"Aan",value:o&&o.map((function(e){return e})).join(", ")}),v.a.createElement(_.a,{label:"Verzonden datum tijd",value:w?A()(w).format("DD-MM-YYYY HH:mm"):""})),"sent"===k?v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement("div",{className:"form-group col-md-6"}),v.a.createElement(_.a,{label:"Verzonden door gebruiker",value:N?N.fullName:""})):null,v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement(_.a,{label:"Cc",value:l&&l.map((function(e){return e})).join(", ")}),v.a.createElement(_.a,{label:"Bcc",value:i&&i.map((function(e){return e})).join(", ")})),v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement(_.a,{label:"Contacten",value:s&&s.map((function(e){return v.a.createElement("span",null,v.a.createElement(E.b,{to:"/contact/".concat(e.id),className:"link-underline"},e.fullName)," ")}))}),v.a.createElement(_.a,{label:"Intake",value:m?m.name:"",link:m?"intake/"+m.id:""})),v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement(_.a,{label:"Taak",value:d?d.noteSummary:"",link:d?"taak/"+d.id:""}),v.a.createElement(_.a,{label:"Offerteverzoek",value:p?p.name:"",link:p?"offerteverzoek/"+p.id:""})),v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement(_.a,{label:"Maatregel",value:h?h.name:"",link:h?"maatregel/"+h.id:""}),v.a.createElement(_.a,{label:"Kans",value:f?f.name:"",link:f?"kans/"+f.id:""})),v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement(_.a,{label:"Order",value:c?c.name:"",link:c?"order/"+c.id:""}),v.a.createElement(_.a,{label:"Nota",value:u?u.name:"",link:u?"nota/"+u.id:""})),v.a.createElement("div",{className:"row margin-10-top",onClick:e.switchToEdit},v.a.createElement("div",{className:"col-sm-12"},v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-sm-3"},v.a.createElement("label",{className:"col-sm-12"},"Onderwerp")),v.a.createElement("div",{className:"col-sm-9"},b)))),v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement(L.a,{label:"Tekst",value:g})),"inbox"==k&&v.a.createElement("div",null,v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement(_.a,{label:"Status",value:C?C.name:""}),v.a.createElement(_.a,{label:"Datum afgehandeld",value:T?A()(T).format("DD-MM-YYYY HH:mm"):""})),v.a.createElement("div",{className:"row",onClick:e.switchToEdit},v.a.createElement(_.a,{label:"Afgehandeld door",value:O?O.fullName:"",link:O?"gebruiker/"+O.id:""}),n||r?v.a.createElement(_.a,{label:"Verantwoordelijke",value:n?n.fullName:r.name,link:n?"gebruiker/"+n.id:"team/"+r.id}):v.a.createElement(_.a,{label:"Verantwoordelijke",value:""}))))})),ne=function(e){function t(e){var a;return r()(this,t),a=s()(this,u()(t).call(this,e)),D()(d()(a),"switchToEdit",(function(){a.setState({showEdit:!0})})),D()(d()(a),"switchToView",(function(){a.setState({showEdit:!1,activeDiv:""})})),a.state={showEdit:!1,activeDiv:""},a}return h()(t,e),l()(t,[{key:"onDivEnter",value:function(){this.setState({activeDiv:"panel-grey"})}},{key:"onDivLeave",value:function(){this.state.showEdit||this.setState({activeDiv:""})}},{key:"render",value:function(){var e=this;return v.a.createElement(C.a,{className:this.state.activeDiv,onMouseEnter:function(){return e.onDivEnter()},onMouseLeave:function(){return e.onDivLeave()}},v.a.createElement(O.a,null,this.state.showEdit?v.a.createElement(te,{switchToView:this.switchToView}):v.a.createElement(ae,{switchToEdit:this.switchToEdit})))}}]),t}(f.Component),re=Object(b.b)((function(e){return{email:e.email}}))(ne),oe=a(704),le=a.n(oe),ie=a(98),se=a(726),ce=function(e){function t(e){var a;return r()(this,t),a=s()(this,u()(t).call(this,e)),D()(d()(a),"downloadItem",(function(e,t){z.a.downloadAttachment(e).then((function(e){le()(e.data,t)}))})),D()(d()(a),"viewItem",(function(e,t){z.a.downloadAttachment(e).then((function(e){var n="";n=t.toLowerCase().endsWith(".pdf")?e.data:URL.createObjectURL(e.data),a.setState({item:n},(function(){return a.showViewDocument()}))}))})),D()(d()(a),"showViewDocument",(function(){a.setState({showViewDocument:!a.state.showViewDocument})})),D()(d()(a),"saveToAlfresco",(function(e){E.f.push("document/nieuw/upload/email-bijlage/".concat(e))})),a.state={showActionButtons:!1,highlightRow:"",item:"",showViewDocument:!1},a}return h()(t,e),l()(t,[{key:"render",value:function(){var e=this,t=this.props.attachment,a=t.id,n=t.name,r=!1;return(n.toLowerCase().endsWith(".pdf")||n.toLowerCase().endsWith(".jpg")||n.toLowerCase().endsWith(".png"))&&(r=!0),v.a.createElement("div",{className:"row border ".concat(this.props.highlightLine),onMouseEnter:function(){return e.props.onLineEnter()},onMouseLeave:function(){return e.props.onLineLeave()}},v.a.createElement("div",{className:"col-sm-11"},n),v.a.createElement("div",{className:"col-sm-1"},this.props.showActionButtons?v.a.createElement("a",{role:"button",onClick:function(){return e.downloadItem(a,n)}},v.a.createElement("span",{className:"glyphicon glyphicon-open-file mybtn-success"})," "):"",this.props.showActionButtons?v.a.createElement("a",{role:"button",onClick:function(){return e.saveToAlfresco(a)}},v.a.createElement("span",{className:"glyphicon glyphicon-share mybtn-success"})," "):"",this.props.showActionButtons&&r?v.a.createElement("a",{role:"button",onClick:function(){return e.viewItem(a,n)}},v.a.createElement("span",{className:"glyphicon glyphicon-eye-open mybtn-success"})," "):""),this.state.showViewDocument&&n.toLowerCase().endsWith(".pdf")&&v.a.createElement(ie.a,{closeModal:this.showViewDocument,modalClassName:"modal-lg",modalMainClassName:"email-attachment-modal ",showConfirmAction:!1,buttonCancelText:"Ok"},v.a.createElement(se.a,{file:this.state.item})),this.state.showViewDocument&&(n.toLowerCase().endsWith(".png")||n.toLowerCase().endsWith(".jpg"))&&v.a.createElement(ie.a,{closeModal:this.showViewDocument,modalClassName:"modal-lg",modalMainClassName:"email-attachment-modal ",showConfirmAction:!1,buttonCancelText:"Ok"},v.a.createElement("img",{className:"img-responsive",src:this.state.item,alt:n})))}}]),t}(f.Component);function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(a),!0).forEach((function(t){D()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var de=function(e){function t(e){var a;return r()(this,t),a=s()(this,u()(t).call(this,e)),D()(d()(a),"onLineEnter",(function(){a.setState({showActionButtons:!0,highlightLine:"highlight-line"})})),D()(d()(a),"onLineLeave",(function(){a.setState({highlightLine:"",showActionButtons:!1})})),a.state={highlightLine:"",showActionButtons:!1,attachment:me({},e.attachment)},a}return h()(t,e),l()(t,[{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement(ce,{highlightLine:this.state.highlightLine,onLineEnter:this.onLineEnter,onLineLeave:this.onLineLeave,attachment:this.state.attachment,showActionButtons:this.state.showActionButtons}))}}]),t}(f.Component),pe=Object(b.b)((function(e){return{email:e.email}}))((function(e){var t=e.email.attachments,a=void 0===t?[]:t;return v.a.createElement("div",null,v.a.createElement("div",{className:"row border header"},v.a.createElement("div",{className:"col-sm-12"},"Bestand")),a.length>0?a.map((function(e){return v.a.createElement(de,{key:e.id,attachment:e})})):v.a.createElement("div",null,"Geen bijlagen bekend."))})),he=a(690),fe=function(e){function t(e){return r()(this,t),s()(this,u()(t).call(this,e))}return h()(t,e),l()(t,[{key:"render",value:function(){return v.a.createElement(C.a,null,v.a.createElement(he.a,null,v.a.createElement("span",{className:"h5 text-bold"},"Bijlagen")),v.a.createElement(O.a,null,v.a.createElement("div",{className:"col-md-12"},v.a.createElement(pe,null))))}}]),t}(f.Component),ve=a(14),be=a.n(ve),Ee=function(e){var t=e.text,a=e.restoreAction,n=e.restoreText;return v.a.createElement(C.a,null,v.a.createElement(he.a,null,v.a.createElement("span",{className:"h5",style:{color:"#e64a4a"}},t," ",a&&v.a.createElement("a",{style:{color:"#e64a4a",cursor:"pointer"},onClick:a},v.a.createElement("strong",null,n)))))};Ee.defaultProps={text:"Dit item is verwijderd",restoreText:"Klik hier om dit item terug te zetten."},Ee.propTypes={text:be.a.string,restoreAction:be.a.func,restoreText:be.a.string};var ge=Ee,ye=function(e){function t(e){return r()(this,t),s()(this,u()(t).call(this,e))}return h()(t,e),l()(t,[{key:"render",value:function(){return Object(q.isEmpty)(this.props.email)?v.a.createElement("div",null,"Geen gegevens gevonden."):v.a.createElement("div",null,"removed"===this.props.email.folder&&v.a.createElement(ge,{text:"Deze e-mail is verwijderd.",restoreAction:this.props.restoreEmail,restoreText:"Klik hier om verwijderen ongedaan te maken."}),v.a.createElement(re,null),v.a.createElement(fe,null))}}]),t}(f.Component),we=Object(b.b)((function(e){return{email:e.email}}))(ye),Ne=function(e){function t(e){var a;return r()(this,t),(a=s()(this,u()(t).call(this,e))).restoreEmail=a.restoreEmail.bind(d()(a)),a.removeEmail=a.removeEmail.bind(d()(a)),a}return h()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.props.fetchEmail(this.props.params.id)}},{key:"componentWillUnmount",value:function(){this.props.clearEmail()}},{key:"refreshEmail",value:function(){this.props.clearEmail(),this.props.fetchEmail(this.props.params.id)}},{key:"restoreEmail",value:function(){var e=this;null===this.props.email.imapId?z.a.moveToFolder(this.props.email.id,"sent").then((function(){e.refreshEmail()})):z.a.moveToFolder(this.props.email.id,"inbox").then((function(){e.refreshEmail()}))}},{key:"removeEmail",value:function(){var e=this;"inbox"===this.props.email.folder||"sent"===this.props.email.folder?z.a.moveToFolder(this.props.email.id,"removed").then((function(){e.refreshEmail()})):"removed"===this.props.email.folder&&z.a.deleteEmail(this.props.email.id).then((function(){E.e.goBack()}))}},{key:"render",value:function(){return v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-9"},v.a.createElement("div",{className:"col-md-12"},v.a.createElement(j,{removeEmail:this.removeEmail,id:this.props.params.id})),v.a.createElement("div",{className:"col-md-12"},v.a.createElement(we,{restoreEmail:this.restoreEmail}))))}}]),t}(f.Component);t.default=Object(b.b)((function(e){return{email:e.email}}),(function(e){return{fetchEmail:function(t){e(B(t))},clearEmail:function(){e({type:"CLEAR_EMAIL"})}}}))(Ne)},682:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,o=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:o},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:l.a.string,onMouseEnter:l.a.func,onMouseLeave:l.a.func},t.a=i},683:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:l.a.string},t.a=i},684:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=function(e){var t=e.buttonClassName,a=e.buttonText,n=e.onClickAction,o=e.type,l=e.value,i=e.loading,s=e.loadText,c=e.disabled;return i?r.a.createElement("button",{type:o,className:"btn btn-sm btn-loading ".concat(t),value:l,disabled:i},r.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",s):r.a.createElement("button",{type:o,className:"btn btn-sm ".concat(t),onClick:n,value:l,disabled:c},a)};i.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},i.propTypes={buttonClassName:l.a.string,buttonText:l.a.string.isRequired,onClickAction:l.a.func,type:l.a.string,value:l.a.string,loading:l.a.bool,loadText:l.a.string,disabled:l.a.bool},t.a=i},685:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,o=e.title,l=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:l,title:o},r.a.createElement("span",{className:"glyphicon ".concat(a)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:l.a.string,iconName:l.a.string.isRequired,onClickAction:l.a.func,title:l.a.string,disabled:l.a.bool},t.a=i},687:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),l=a(14),i=a.n(l),s=function(e){var t=e.label,a=e.className,n=e.id,l=e.value,i=e.link,s=e.hidden;return i.length>0?r.a.createElement("div",{className:a,style:s?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),r.a.createElement("div",{className:"col-sm-6",id:n,onClick:null},r.a.createElement(o.b,{to:i,className:"link-underline"},l))):r.a.createElement("div",{className:a,style:s?{display:"none"}:{}},r.a.createElement("label",{htmlFor:n,className:"col-sm-6"},t),r.a.createElement("div",{className:"col-sm-6",id:n},l))};s.defaultProps={className:"col-sm-6",value:"",link:"",hidden:!1},s.propTypes={label:i.a.oneOfType([i.a.string,i.a.object]).isRequired,className:i.a.string,id:i.a.string,value:i.a.oneOfType([i.a.string,i.a.number]),link:i.a.string,hidden:i.a.bool},t.a=s},688:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=function(e){var t=e.label,a=e.className,n=e.size,o=e.id,l=e.name,i=e.value,s=e.options,c=e.onChangeAction,u=e.onBlurAction,m=e.required,d=e.error,p=e.errorMessage,h=e.optionValue,f=e.optionName,v=e.readOnly,b=e.placeholder,E=e.divClassName,g=e.emptyOption;return r.a.createElement("div",{className:"form-group ".concat(n," ").concat(E)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(m)},t),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("select",{className:"form-control input-sm ".concat(a)+(d&&" has-error"),id:o,name:l,value:i,onChange:c,onBlur:u,readOnly:v},g&&r.a.createElement("option",{value:""},b),s.map((function(e){return r.a.createElement("option",{key:e[h],value:e[h]},e[f])})))),d&&r.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},r.a.createElement("span",{className:"has-error-message"}," ",p)))};i.defaultProps={divClassName:"",className:"",size:"col-sm-6",readOnly:!1,required:"",error:!1,errorMessage:"",value:"",optionValue:"id",optionName:"name",placeholder:"",emptyOption:!0},i.propTypes={label:l.a.string.isRequired,className:l.a.string,size:l.a.string,id:l.a.string,name:l.a.string.isRequired,options:l.a.array,value:l.a.oneOfType([l.a.string,l.a.number]),onChangeAction:l.a.func,onBlurAction:l.a.func,required:l.a.string,readOnly:l.a.bool,error:l.a.bool,errorMessage:l.a.string,emptyOption:l.a.bool,optionValue:l.a.string,optionName:l.a.string,placeholder:l.a.string},t.a=i},690:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-heading ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:l.a.string},t.a=i},695:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"panel-footer ".concat(t)},a)};i.defaultProps={className:""},i.propTypes={className:l.a.string},t.a=i},702:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=a(707),s=(a(708),function(e){var t=e.label,a=e.divSize,n=e.size,o=e.id,l=e.name,s=e.value,c=e.options,u=e.optionId,m=e.optionName,d=e.onChangeAction,p=e.required,h=e.multi,f=e.error,v=e.isLoading;return r.a.createElement("div",{className:"form-group ".concat(a)},r.a.createElement("label",{htmlFor:o,className:"col-sm-6 ".concat(p)},t),r.a.createElement("div",{className:"".concat(n)},r.a.createElement(i.a,{id:o,name:l,value:s,onChange:function(e){d(e||"",l)},options:c,valueKey:u,labelKey:m,placeholder:"",noResultsText:"Geen resultaat gevonden",multi:h,simpleValue:!0,removeSelected:!0,className:f?" has-error":"",isLoading:v})))});s.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",optionId:"id",optionName:"name",readOnly:!1,required:"",error:!1,value:"",multi:!0,isLoading:!1},s.propTypes={label:l.a.string.isRequired,className:l.a.string,size:l.a.string,divSize:l.a.string,id:l.a.string,name:l.a.string.isRequired,options:l.a.array.isRequired,optionId:l.a.string,optionName:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number]),onChangeAction:l.a.func,onBlurAction:l.a.func,required:l.a.string,readOnly:l.a.bool,error:l.a.bool,multi:l.a.bool,isLoading:l.a.bool},t.a=s},704:function(e,t){e.exports=function(e,t,a){var n=new Blob([e],{type:a||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,t);else{var r=window.URL.createObjectURL(n),o=document.createElement("a");o.style.display="none",o.href=r,o.setAttribute("download",t),void 0===o.download&&o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(r)}}},726:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=a(778),s=a.n(i),c=function(e){var t=e.page,a=(e.pages,e.handlePrevClick);return 1===t?r.a.createElement("div",null):r.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginRight:24,marginTop:0},onClick:a},"<")};c.propTypes={page:l.a.number.isRequired,pages:l.a.number.isRequired,handlePrevClick:l.a.func.isRequired};var u=function(e){var t=e.page,a=e.pages,n=e.handleNextClick;return t===a?r.a.createElement("div",null):r.a.createElement("h3",{style:{cursor:"pointer",display:"inline-block",marginLeft:24,marginTop:0},onClick:n},">")};u.propTypes={page:l.a.number.isRequired,pages:l.a.number.isRequired,handleNextClick:l.a.func.isRequired};var m=function(e){var t=e.page,a=e.pages;return r.a.createElement("h3",{style:{display:"inline-block",marginTop:0}},"Pagina ",t," van ",a)};m.propTypes={page:l.a.number.isRequired,pages:l.a.number.isRequired};var d=function(e){var t=e.page,a=e.pages,n=e.handlePrevClick,o=e.handleNextClick;return r.a.createElement("div",{className:"customWrapper"},r.a.createElement(c,{page:t,pages:a,handlePrevClick:n}),r.a.createElement(m,{page:t,pages:a}),r.a.createElement(u,{page:t,pages:a,handleNextClick:o}))};d.propTypes={page:l.a.number.isRequired,pages:l.a.number.isRequired,handlePrevClick:l.a.func.isRequired,handleNextClick:l.a.func.isRequired};var p=d;s.a.defaultProps={file:"",scale:1},s.a.propTypes={file:l.a.string,scale:l.a.number};t.a=function(e){var t=e.file,a=e.scale;return r.a.createElement("div",{className:"panel-heading"},r.a.createElement(s.a,{document:{file:t},navigation:p,scale:a}))}},728:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(736),l=a.n(o),i=a(14),s=a.n(i),c=a(682),u=a(684),m=function(e){var t=e.label,a=e.className,n=e.id,o=e.value,i=e.switchToEdit;return r.a.createElement("div",{className:a},r.a.createElement("label",{htmlFor:n,className:"col-sm-3"},t,i?r.a.createElement("span",null,r.a.createElement("br",null),r.a.createElement(u.a,{buttonClassName:"btn-success btn-padding-small",buttonText:"Wijzig",onClickAction:i})):""),r.a.createElement(c.a,{className:"col-sm-9"},r.a.createElement(l.a,null,r.a.createElement("div",{id:n,dangerouslySetInnerHTML:{__html:o}}))))};m.defaultProps={className:"col-sm-12",value:""},m.propTypes={label:s.a.string.isRequired,className:s.a.string,id:s.a.string,value:s.a.oneOfType([s.a.string,s.a.number])},t.a=m},736:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(737),o=(n=r)&&n.__esModule?n:{default:n};t.default=o.default},737:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),l=u(o),i=u(a(79)),s=u(a(14)),c=u(a(738));function u(e){return e&&e.__esModule?e:{default:e}}var m,d="undefined"!=typeof window&&window.console,p=function(){},h=p,f=p;d&&(m=console.error,h=function(){console.error=function(e){/<head>/.test(e)||m.call(console,e)}},f=function(){return console.error=m});var v=function(e){function t(e,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return n._isMounted=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.renderFrameContents()}},{key:"componentDidUpdate",value:function(){this.renderFrameContents()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1;var e=this.getDoc(),t=this.getMountTarget();e&&t&&i.default.unmountComponentAtNode(t)}},{key:"getDoc",value:function(){return i.default.findDOMNode(this).contentDocument}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(this._isMounted){var e=this.getDoc();if(e&&"complete"===e.readyState){null===e.querySelector("div")&&(this._setInitialContent=!1);var t=e.defaultView||e.parentView,a=!this._setInitialContent,n=l.default.createElement(c.default,{document:e,window:t},l.default.createElement("div",{className:"frame-content"},this.props.head,this.props.children));a&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close(),this._setInitialContent=!0),h();var r=a?this.props.contentDidMount:this.props.contentDidUpdate,o=this.getMountTarget();i.default.unstable_renderSubtreeIntoContainer(this,n,o,r),f()}else setTimeout(this.renderFrameContents.bind(this),0)}}},{key:"render",value:function(){var e=n({},this.props,{children:void 0});return delete e.head,delete e.initialContent,delete e.mountTarget,delete e.contentDidMount,delete e.contentDidUpdate,l.default.createElement("iframe",e)}}]),t}(o.Component);v.propTypes={style:s.default.object,head:s.default.node,initialContent:s.default.string,mountTarget:s.default.string,contentDidMount:s.default.func,contentDidUpdate:s.default.func,children:s.default.oneOfType([s.default.element,s.default.arrayOf(s.default.element)])},v.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=v},738:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=(l(r),l(a(14)));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"getChildContext",value:function(){return{document:this.props.document,window:this.props.window}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);c.propTypes={document:o.default.object.isRequired,window:o.default.object.isRequired,children:o.default.element.isRequired},c.childContextTypes={document:o.default.object.isRequired,window:o.default.object.isRequired},t.default=c},742:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=function(e){var t=e.label,a=e.className,n=e.size,o=e.divSize,l=e.id,i=e.name,s=e.value,c=e.optionsInGroups,u=e.onChangeAction,m=e.onBlurAction,d=e.required,p=e.error,h=e.readOnly;return r.a.createElement("div",{className:"form-group ".concat(o)},r.a.createElement("label",{htmlFor:l,className:"col-sm-6 ".concat(d)},t),r.a.createElement("div",{className:"".concat(n)},r.a.createElement("select",{className:"form-control input-sm ".concat(a)+(p&&" has-error"),id:l,name:i,value:s,onChange:u,onBlur:m,readOnly:h},r.a.createElement("option",{value:""}),c.map((function(e,t){var a=e.optionName||"name";return r.a.createElement("optgroup",{key:t,label:e.label},e.options.map((function(t){return r.a.createElement("option",{key:t.id,value:e.name+t.id},t[a])})))})))))};i.defaultProps={className:"",size:"col-sm-6",divSize:"col-sm-6",readOnly:!1,required:"",error:!1,value:""},i.propTypes={label:l.a.string.isRequired,className:l.a.string,size:l.a.string,divSize:l.a.string,id:l.a.string,name:l.a.string.isRequired,optionsInGroups:l.a.array,value:l.a.oneOfType([l.a.string,l.a.number]),onChangeAction:l.a.func,onBlurAction:l.a.func,required:l.a.string,readOnly:l.a.bool,error:l.a.bool,optionName:l.a.string},t.a=i},782:function(e,t){},783:function(e,t){},784:function(e,t){},785:function(e,t){}}]);