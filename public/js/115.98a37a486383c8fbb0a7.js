(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1601:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(25),c=a.n(o),l=a(24),i=a.n(l),r=a(26),d=a.n(r),u=a(27),m=a.n(u),f=a(21),v=a.n(f),p=a(28),E=a.n(p),h=a(33),w=a(4),D=a(1177),g=a.n(D),N=(a(1347),a(8)),b=a.n(N),C=a(104);b.a.locale("nl");var y=g.a.momentLocalizer(b.a),M=function(e){function t(e){var a;return c()(this,t),(a=d()(this,m()(t).call(this,e))).state={events:[],selectedDate:e.calendar.date?e.calendar.date:b()().format("YYYY-MM-DD"),selectedView:e.calendar.view},a.onNavigate=a.onNavigate.bind(v()(a)),a.onViewChange=a.onViewChange.bind(v()(a)),a.loadCalendarEvents=a.loadCalendarEvents.bind(v()(a)),a.openItem=a.openItem.bind(v()(a)),a}return E()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.loadCalendarEvents(this.state.selectedDate,this.state.selectedView)}},{key:"onNavigate",value:function(e,t){this.loadCalendarEvents(e,t)}},{key:"onViewChange",value:function(e){this.loadCalendarEvents(this.state.selectedDate,e)}},{key:"loadCalendarEvents",value:function(e,t){var a=this,n=b()(e).startOf(t).format("YYYY-MM-DD"),s=b()(e).endOf(t).format("YYYY-MM-DD");"month"==t&&(n=b()(e).startOf(t).subtract(1,"w").format("YYYY-MM-DD"),s=b()(e).endOf(t).add(1,"w").format("YYYY-MM-DD")),C.a.fetchTasksCalendarEvents(n,s).then((function(n){var s=[];n.data.data.map((function(e){var t=b()(e.start),a=b()(e.end);s.push({id:e.id,title:e.noteSummary,start:new Date(t.toDate()),end:new Date(a.toDate())})})),a.setState({events:s,selectedDate:e,selectedView:t}),a.props.setSelectedDate(e),a.props.setSelectedView(t)}))}},{key:"openItem",value:function(e){var t=e.id;w.f.push("/taak/".concat(t))}},{key:"render",value:function(){return s.a.createElement(g.a,{date:new Date(this.state.selectedDate),defaultView:this.state.selectedView,endAccessor:"end",events:this.state.events,localizer:y,max:new Date("2018-01-01T23:00:00.000Z"),messages:{allDay:"Gehele dag",previous:"<",next:">",today:"Vandaag",month:"Maand",week:"Week",day:"Dag",agenda:"Agenda",date:"Datum",time:"Tijd",showMore:function(e){return"+".concat(e," meer")}},min:new Date("2018-01-01T07:00:00.000Z"),onNavigate:this.onNavigate,onSelectEvent:this.openItem,onView:this.onViewChange,popup:!0,startAccessor:"start",step:15,timeslots:4,views:["month","week","day"]})}}]),t}(n.Component),k=Object(h.b)((function(e){return{calendar:e.calendar}}),(function(e){return{setSelectedDate:function(t){e(function(e){return{type:"SET_SELECTED_DATE",date:e}}(t))},setSelectedView:function(t){e(function(e){return{type:"SET_SELECTED_VIEW",view:e}}(t))}}}))(M),Y=a(682),V=a(683),T=a(685),S=function(e){return s.a.createElement("div",{className:"row margin-10-bottom"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement("div",{className:"btn-group",role:"group"},s.a.createElement(T.a,{iconName:"glyphicon-arrow-left",onClickAction:w.e.goBack}),s.a.createElement(T.a,{iconName:"glyphicon-plus",onClickAction:function(){w.f.push("/taak/nieuw")}}))),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("h3",{className:"text-center table-title"},"Agenda")),s.a.createElement("div",{className:"col-md-4"}))};t.default=function(e){return s.a.createElement(Y.a,null,s.a.createElement(V.a,null,s.a.createElement(S,null),s.a.createElement(k,null)))}},682:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(14),c=a.n(o),l=function(e){var t=e.children,a=e.className,n=e.onMouseEnter,o=e.onMouseLeave;return s.a.createElement("div",{className:"panel panel-default ".concat(a),onMouseEnter:n,onMouseLeave:o},t)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:c.a.string,onMouseEnter:c.a.func,onMouseLeave:c.a.func},t.a=l},683:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(14),c=a.n(o),l=function(e){var t=e.className,a=e.children;return s.a.createElement("div",{className:"panel-body ".concat(t)},a)};l.defaultProps={className:""},l.propTypes={className:c.a.string},t.a=l},685:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(14),c=a.n(o),l=function(e){var t=e.buttonClassName,a=e.iconName,n=e.onClickAction,o=e.title,c=e.disabled;return s.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:n,disabled:c,title:o},s.a.createElement("span",{className:"glyphicon ".concat(a)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:c.a.string,iconName:c.a.string.isRequired,onClickAction:c.a.func,title:c.a.string,disabled:c.a.bool},t.a=l}}]);