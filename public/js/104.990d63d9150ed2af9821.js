(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1595:function(e,t,n){"use strict";n.r(t);var a=n(25),o=n.n(a),s=n(24),r=n.n(s),l=n(26),i=n.n(l),c=n(27),u=n.n(c),p=n(21),d=n.n(p),m=n(28),h=n.n(m),f=n(6),g=n.n(f),C=n(0),b=n.n(C),E=n(33),k=n(197),v=n.n(k),w=n(144),L=n(145),y=n(199),N=n(99),O=n(689),P=n.n(O),S=n(686),D=n(684),M=n(683),j=n(682),A=n(188);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){function t(e){var n;return o()(this,t),n=i()(this,u()(t).call(this,e)),g()(d()(n),"handleInputChange",(function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,o=t.name;n.setState(x({},n.state,{postalCodeLink:x({},n.state.postalCodeLink,g()({},o,a))}))})),g()(d()(n),"handleSubmit",(function(e){e.preventDefault();var t=n.state.postalCodeLink,a={},o=!1;(P.a.isEmpty(t.postalCodeMain+"")||t.postalCodeMain<999||t.postalCodeMain>9999)&&(a.postalCodeMain=!0,o=!0),(P.a.isEmpty(t.postalCodeLink+"")||t.postalCodeLink<999||t.postalCodeLink>9999)&&(a.postalCodeLink=!0,o=!0),n.setState(x({},n.state,{errors:a})),!o&&A.a.updatePostalCodeLink(t).then((function(e){n.props.toggleShowEdit(),n.props.refreshPostalCodeLinksData()})).catch((function(e){console.log(e)}))})),n.state={postalCodeLink:{id:e.postalCodeLink.id,postalCodeMain:e.postalCodeLink.postalCodeMain,postalCodeLink:e.postalCodeLink.postalCodeLink},errors:{postalCodeMain:!1,postalCodeLink:!1}},n}return h()(t,e),r()(t,[{key:"render",value:function(){var e=this.state.postalCodeLink,t=e.postalCodeMain,n=e.postalCodeLink;return b.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},b.a.createElement(j.a,null,b.a.createElement(M.a,null,b.a.createElement("div",{className:"row"},b.a.createElement(S.a,{label:"Kern postcode",type:"number",min:"999",max:"9999",name:"postalCodeMain",value:t,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.postalCodeMain}),b.a.createElement(S.a,{label:"Link postcode",type:"number",min:"999",max:"9999",name:"postalCodeLink",value:n,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.postalCodeLink}))),b.a.createElement(M.a,null,b.a.createElement("div",{className:"pull-right btn-group",role:"group"},b.a.createElement(D.a,{buttonClassName:"btn-default",buttonText:"Sluiten",onClickAction:this.props.toggleShowEdit}),b.a.createElement(D.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"})))))}}]),t}(C.Component),q=function(e){function t(e){var n;return o()(this,t),n=i()(this,u()(t).call(this,e)),g()(d()(n),"toggleShowEdit",(function(){n.setState({showEdit:!n.state.showEdit})})),n.state={showEdit:!1,showActionButtons:!1,highlightRow:""},n}return h()(t,e),r()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.postalCodeMain,o=t.postalCodeLink;return this.state.showEdit?b.a.createElement("tr",null,b.a.createElement("td",{colSpan:"3"},b.a.createElement(T,{postalCodeLink:this.props,toggleShowEdit:this.toggleShowEdit,refreshPostalCodeLinksData:this.props.refreshPostalCodeLinksData}))):b.a.createElement("tr",{className:this.state.highlightRow,onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},b.a.createElement("td",null,a),b.a.createElement("td",null,o),b.a.createElement("td",null,this.state.showActionButtons?b.a.createElement("a",{role:"button",onClick:this.toggleShowEdit},b.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):"",this.state.showActionButtons?b.a.createElement("a",{role:"button",onClick:this.props.showDeleteItemModal.bind(this,n,a,o)},b.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))}}]),t}(C.Component),R=Object(E.b)((function(e){return{permissions:e.meDetails.permissions}}),null)(q),B=n(98),_=Object(E.b)(null,(function(e){return{deletePostalCodeLink:function(t){e(function(e){return{type:"DELETE_POSTAL_CODE_LINK",id:e}}(t))}}}))((function(e){return b.a.createElement(B.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deletePostalCodeLink(e.id),void e.closeDeleteItemModal()},title:"Verwijderen"},"Verwijder postcode roos: ",b.a.createElement("strong",null," ",e.postalCodeMain," "),"gelinkt met"," ",b.a.createElement("strong",null,e.postalCodeLink),"?")}));function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){function t(e){var n;return o()(this,t),n=i()(this,u()(t).call(this,e)),g()(d()(n),"handleInputChange",(function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,o=t.name;n.setState(K({},n.state,{postalCodeLink:K({},n.state.postalCodeLink,g()({},o,a))}))})),g()(d()(n),"handleSubmit",(function(e){e.preventDefault();var t=n.state.postalCodeLink,a={},o=!1;(P.a.isEmpty(t.postalCodeMain)||t.postalCodeMain<999||t.postalCodeMain>9999)&&(a.postalCodeMain=!0,o=!0),(P.a.isEmpty(t.postalCodeLink)||t.postalCodeLink<999||t.postalCodeLink>9999)&&(a.postalCodeLink=!0,o=!0),n.setState(K({},n.state,{errors:a})),!o&&A.a.newPostalCodeLink(t).then((function(e){n.props.toggleShowNew(),n.props.refreshPostalCodeLinksData()})).catch((function(e){console.log(e)}))})),n.state={postalCodeLink:{id:"",postalCodeMain:"",postalCodeLink:""},errors:{postalCodeMain:!1,postalCodeLink:!1}},n}return h()(t,e),r()(t,[{key:"render",value:function(){var e=this.state.postalCodeLink,t=e.postalCodeMain,n=e.postalCodeLink;return b.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},b.a.createElement(j.a,null,b.a.createElement(M.a,null,b.a.createElement("div",{className:"row"},b.a.createElement(S.a,{label:"Kern postcode",type:"number",min:"999",max:"9999",name:"postalCodeMain",value:t,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.postalCodeMain}),b.a.createElement(S.a,{label:"Link postcode",type:"number",min:"999",max:"9999",name:"postalCodeLink",value:n,onChangeAction:this.handleInputChange,required:"required",error:this.state.errors.postalCodeLink}))),b.a.createElement(M.a,null,b.a.createElement("div",{className:"pull-right btn-group",role:"group"},b.a.createElement(D.a,{buttonClassName:"btn-default",buttonText:"Sluiten",onClickAction:this.props.toggleShowNew}),b.a.createElement(D.a,{buttonText:"Opslaan",onClickAction:this.handleSubmit,type:"submit",value:"Submit"})))))}}]),t}(C.Component);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){function t(e){var n;return o()(this,t),n=i()(this,u()(t).call(this,e)),g()(d()(n),"showDeleteItemModal",(function(e,t,a){n.setState(G({},n.state,{showDeleteItem:!0,deleteItem:G({},n.state.deleteItem,{id:e,postalCodeMain:t,postalCodeLink:a})}))})),g()(d()(n),"closeDeleteItemModal",(function(){n.setState(G({},n.state,{showDeleteItem:!1,deleteItem:G({},n.state.deleteItem,{id:"",postalCodeMain:"",postalCodeLink:""})}))})),n.state={showDeleteItem:!1,deleteItem:{id:"",postalCodeMain:"",postalCodeLink:""}},n}return h()(t,e),r()(t,[{key:"render",value:function(){var e=this,t="",n=!0;return this.props.hasError?t="Fout bij het ophalen van postcoderoos.":this.props.isLoading?t="Gegevens aan het laden.":0===this.props.postalCodeLinks.length?t="Geen postcoderoos gevonden!":n=!1,b.a.createElement("div",null,this.props.showNew&&b.a.createElement(F,v()({toggleShowNew:this.props.toggleShowNew,refreshPostalCodeLinksData:this.props.refreshPostalCodeLinksData},this.state.deleteItem)),b.a.createElement(w.a,null,b.a.createElement(L.a,null,b.a.createElement("tr",{className:"thead-title"},b.a.createElement(N.a,{title:"Kern postcode",width:"47%"}),b.a.createElement(N.a,{title:"Link postcode",width:"47%"}),b.a.createElement(N.a,{title:"",width:"6%"}))),b.a.createElement(y.a,null,n?b.a.createElement("tr",null,b.a.createElement("td",{colSpan:11},t)):this.props.postalCodeLinks.map((function(t){return b.a.createElement(R,v()({key:t.id,showDeleteItemModal:e.showDeleteItemModal,refreshPostalCodeLinksData:e.props.refreshPostalCodeLinksData},t))})))),this.state.showDeleteItem&&b.a.createElement(_,v()({closeDeleteItemModal:this.closeDeleteItemModal},this.state.deleteItem)))}}]),t}(C.Component),H=Object(E.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))(J),U=(n(4),n(685)),W=Object(E.b)((function(e){return{permissions:e.meDetails.permissions}}),null)((function(e){return b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-4"},b.a.createElement("div",{className:"btn-group",role:"group"},b.a.createElement(U.a,{iconName:"glyphicon-refresh",onClickAction:e.refreshPostalCodeLinksData}),b.a.createElement(U.a,{iconName:"glyphicon-plus",onClickAction:e.toggleShowNew}))),b.a.createElement("div",{className:"col-md-4"},b.a.createElement("h3",{className:"text-center table-title"},"Postcoderoos")),b.a.createElement("div",{className:"col-md-4"}))})),Q=function(e){function t(e){var n;return o()(this,t),n=i()(this,u()(t).call(this,e)),g()(d()(n),"refreshPostalCodeLinksData",(function(){n.props.clearPostalCodeLinks(),n.props.fetchPostalCodeLinks()})),g()(d()(n),"toggleShowNew",(function(){n.setState({showNew:!n.state.showNew})})),n.state={showNew:!1},n}return h()(t,e),r()(t,[{key:"componentDidMount",value:function(){this.props.fetchPostalCodeLinks()}},{key:"componentWillUnmount",value:function(){this.props.clearPostalCodeLinks()}},{key:"render",value:function(){var e=this;return b.a.createElement(j.a,null,b.a.createElement(M.a,null,b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(W,{refreshPostalCodeLinksData:function(){return e.refreshPostalCodeLinksData()},toggleShowNew:function(){return e.toggleShowNew()}})),b.a.createElement("div",{className:"col-md-12 margin-10-top"},b.a.createElement(H,{postalCodeLinks:this.props.postalCodeLinks,toggleShowNew:this.toggleShowNew,showNew:this.state.showNew,refreshPostalCodeLinksData:this.refreshPostalCodeLinksData}))))}}]),t}(C.Component);t.default=Object(E.b)((function(e){return{postalCodeLinks:e.postalCodeLinks}}),(function(e){return{fetchPostalCodeLinks:function(){e({type:"FETCH_POSTAL_CODE_LINKS"})},clearPostalCodeLinks:function(){e({type:"CLEAR_POSTAL_CODE_LINKS"})}}}))(Q)},682:function(e,t,n){"use strict";var a=n(0),o=n.n(a),s=n(14),r=n.n(s),l=function(e){var t=e.children,n=e.className,a=e.onMouseEnter,s=e.onMouseLeave;return o.a.createElement("div",{className:"panel panel-default ".concat(n),onMouseEnter:a,onMouseLeave:s},t)};l.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},l.propTypes={className:r.a.string,onMouseEnter:r.a.func,onMouseLeave:r.a.func},t.a=l},683:function(e,t,n){"use strict";var a=n(0),o=n.n(a),s=n(14),r=n.n(s),l=function(e){var t=e.className,n=e.children;return o.a.createElement("div",{className:"panel-body ".concat(t)},n)};l.defaultProps={className:""},l.propTypes={className:r.a.string},t.a=l},684:function(e,t,n){"use strict";var a=n(0),o=n.n(a),s=n(14),r=n.n(s),l=function(e){var t=e.buttonClassName,n=e.buttonText,a=e.onClickAction,s=e.type,r=e.value,l=e.loading,i=e.loadText,c=e.disabled;return l?o.a.createElement("button",{type:s,className:"btn btn-sm btn-loading ".concat(t),value:r,disabled:l},o.a.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"})," ",i):o.a.createElement("button",{type:s,className:"btn btn-sm ".concat(t),onClick:a,value:r,disabled:c},n)};l.defaultProps={buttonClassName:"btn-success",type:"button",value:"",loading:!1,loadText:"Aan het laden",disabled:!1},l.propTypes={buttonClassName:r.a.string,buttonText:r.a.string.isRequired,onClickAction:r.a.func,type:r.a.string,value:r.a.string,loading:r.a.bool,loadText:r.a.string,disabled:r.a.bool},t.a=l},685:function(e,t,n){"use strict";var a=n(0),o=n.n(a),s=n(14),r=n.n(s),l=function(e){var t=e.buttonClassName,n=e.iconName,a=e.onClickAction,s=e.title,r=e.disabled;return o.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:a,disabled:r,title:s},o.a.createElement("span",{className:"glyphicon ".concat(n)}))};l.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},l.propTypes={buttonClassName:r.a.string,iconName:r.a.string.isRequired,onClickAction:r.a.func,title:r.a.string,disabled:r.a.bool},t.a=l},686:function(e,t,n){"use strict";var a=n(0),o=n.n(a),s=n(14),r=n.n(s),l=function(e){var t=e.label,n=e.type,a=e.className,s=e.size,r=e.id,l=e.placeholder,i=e.name,c=e.value,u=e.onClickAction,p=e.onChangeAction,d=e.onBlurAction,m=e.required,h=e.readOnly,f=e.maxLength,g=e.error,C=e.min,b=e.max,E=e.step,k=e.errorMessage,v=e.divSize,w=e.divClassName,L=e.autoComplete;return o.a.createElement("div",{className:"form-group ".concat(v," ").concat(w)},o.a.createElement("label",{htmlFor:r,className:"col-sm-6 ".concat(m)},t),o.a.createElement("div",{className:"".concat(s)},o.a.createElement("input",{type:n,className:"form-control input-sm ".concat(a)+(g?"has-error":""),id:r,placeholder:l,name:i,value:c,onClick:u,onChange:p,onBlur:d,readOnly:h,maxLength:f,min:C,max:b,autoComplete:L,step:E})),g&&o.a.createElement("div",{className:"col-sm-offset-6 col-sm-6"},o.a.createElement("span",{className:"has-error-message"}," ",k)))};l.defaultProps={divClassName:"",className:"",size:"col-sm-6",divSize:"col-sm-6",name:"",type:"text",value:"",required:"",readOnly:!1,maxLength:null,error:!1,min:"",max:"",step:"",errorMessage:"",autoComplete:"off",onBlurAction:function(){},onClickAction:function(){},onChangeAction:function(){}},l.propTypes={label:r.a.oneOfType([r.a.string,r.a.object]).isRequired,type:r.a.string,className:r.a.string,divClassName:r.a.string,size:r.a.string,divSize:r.a.string,id:r.a.string,placeholder:r.a.string,name:r.a.string.isRequired,value:r.a.oneOfType([r.a.string,r.a.number]),onClickAction:r.a.func,onChangeAction:r.a.func,onBlurAction:r.a.func,required:r.a.string,readOnly:r.a.bool,maxLength:r.a.string,error:r.a.bool,min:r.a.string,max:r.a.string,step:r.a.string,errorMessage:r.a.string,autoComplete:r.a.string},t.a=l}}]);