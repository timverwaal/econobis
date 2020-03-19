(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1630:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n.n(a),o=n(24),c=n.n(o),i=n(26),l=n.n(i),s=n(27),u=n.n(s),m=n(21),d=n.n(m),p=n(28),h=n.n(p),f=n(6),E=n.n(f),b=n(0),g=n.n(b),v=n(33),w=n(887),y=n(197),P=n.n(y),D=n(144),N=n(145),O=n(199),j=n(99),I=n(4),C=function(e){function t(e){var n;return r()(this,t),(n=l()(this,u()(t).call(this,e))).state={showActionButtons:!1,highlightRow:""},n}return h()(t,e),c()(t,[{key:"onRowEnter",value:function(){this.setState({showActionButtons:!0,highlightRow:"highlight-row"})}},{key:"onRowLeave",value:function(){this.setState({showActionButtons:!1,highlightRow:""})}},{key:"openItem",value:function(e){I.f.push("/product/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.code,r=t.name,o=t.currentPrice,c=t.administration,i="";return o&&(i=null!==o.vatPercentage?o.vatPercentage+"%":"Geen"),g.a.createElement("tr",{className:this.state.highlightRow,onDoubleClick:function(){return e.openItem(n)},onMouseEnter:function(){return e.onRowEnter()},onMouseLeave:function(){return e.onRowLeave()}},g.a.createElement("td",null,a),g.a.createElement("td",null,r),o&&o.hasVariablePrice?g.a.createElement("td",null,"Variabel"):g.a.createElement("td",null,o?"€"+o.price.toLocaleString("nl",{minimumFractionDigits:2,maximumFractionDigits:2}):""),g.a.createElement("td",null,i),o&&o.hasVariablePrice?g.a.createElement("td",null,"Variabel"):g.a.createElement("td",null,o?"€"+o.priceInclVat.toLocaleString("nl",{minimumFractionDigits:2,maximumFractionDigits:2}):""),g.a.createElement("td",null,c?c.name:""),g.a.createElement("td",null,this.state.showActionButtons&&this.props.permissions.manageFinancial?g.a.createElement("a",{role:"button",onClick:function(){return e.openItem(n)}},g.a.createElement("span",{className:"glyphicon glyphicon-pencil mybtn-success"})," "):"",this.state.showActionButtons&&this.props.permissions.manageFinancial?g.a.createElement("a",{role:"button",onClick:this.props.showDeleteItemModal.bind(this,n,r)},g.a.createElement("span",{className:"glyphicon glyphicon-trash mybtn-danger"})," "):""))}}]),t}(b.Component),M=Object(v.b)((function(e){return{permissions:e.meDetails.permissions}}),null)(C),k=n(98),L=Object(v.b)(null,(function(e){return{deleteProduct:function(t){e(Object(w.b)(t))}}}))((function(e){return g.a.createElement(k.a,{buttonConfirmText:"Verwijder",buttonClassName:"btn-danger",closeModal:e.closeDeleteItemModal,confirmAction:function(){return e.deleteProduct(e.id),void e.closeDeleteItemModal()},title:"Verwijderen"},"Verwijder product: ",g.a.createElement("strong",null,e.name),"?")}));function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){function t(e){var n;return r()(this,t),n=l()(this,u()(t).call(this,e)),E()(d()(n),"showDeleteItemModal",(function(e,t){n.setState(A({},n.state,{showDeleteItem:!0,deleteItem:A({},n.state.deleteItem,{id:e,name:t})}))})),E()(d()(n),"closeDeleteItemModal",(function(){n.setState(A({},n.state,{showDeleteItem:!1,deleteItem:A({},n.state.deleteItem,{id:"",name:""})}))})),n.state={showDeleteItem:!1,deleteItem:{id:"",name:""}},n}return h()(t,e),c()(t,[{key:"render",value:function(){var e=this,t="",n=!0;return this.props.hasError?t="Fout bij het ophalen van producten.":this.props.isLoading?t="Gegevens aan het laden.":0===this.props.products.length?t="Geen producten gevonden!":n=!1,g.a.createElement("div",null,g.a.createElement(D.a,null,g.a.createElement(N.a,null,g.a.createElement("tr",{className:"thead-title"},g.a.createElement(j.a,{title:"Productcode",width:"15%"}),g.a.createElement(j.a,{title:"Product",width:"20%"}),g.a.createElement(j.a,{title:"Prijs ex. BTW",width:"15%"}),g.a.createElement(j.a,{title:"BTW percentage",width:"15%"}),g.a.createElement(j.a,{title:"Prijs incl. BTW",width:"15%"}),g.a.createElement(j.a,{title:"Administratie",width:"15%"}),g.a.createElement(j.a,{title:"",width:"5%"}))),g.a.createElement(O.a,null,n?g.a.createElement("tr",null,g.a.createElement("td",{colSpan:7},t)):this.props.products.map((function(t){return g.a.createElement(M,P()({key:t.id,showDeleteItemModal:e.showDeleteItemModal},t))})))),this.state.showDeleteItem&&g.a.createElement(L,P()({closeDeleteItemModal:this.closeDeleteItemModal},this.state.deleteItem)))}}]),t}(b.Component),S=Object(v.b)((function(e){return{isLoading:e.loadingData.isLoading,hasError:e.loadingData.hasError}}))(T),F=n(685),B=Object(v.b)((function(e){return{permissions:e.meDetails.permissions,products:e.products}}),null)((function(e){return g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-4"},g.a.createElement("div",{className:"btn-group",role:"group"},g.a.createElement(F.a,{iconName:"glyphicon-refresh",onClickAction:e.refreshProductsData}),e.permissions.manageFinancial&&g.a.createElement(F.a,{iconName:"glyphicon-plus",onClickAction:function(){I.f.push("/product/nieuw")}}))),g.a.createElement("div",{className:"col-md-4"},g.a.createElement("h3",{className:"text-center table-title"},"Producten")),g.a.createElement("div",{className:"col-md-4"},g.a.createElement("div",{className:"pull-right"},"Resultaten: ",e.products?e.products.length:0)))})),V=n(682),x=n(683),U=function(e){function t(e){var n;return r()(this,t),n=l()(this,u()(t).call(this,e)),E()(d()(n),"refreshProductsData",(function(){n.props.clearProducts(),n.props.fetchProducts()})),n}return h()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"componentWillUnmount",value:function(){this.props.clearProducts()}},{key:"render",value:function(){var e=this;return g.a.createElement(V.a,null,g.a.createElement(x.a,null,g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(B,{refreshProductsData:function(){return e.refreshProductsData()}})),g.a.createElement("div",{className:"col-md-12 margin-10-top"},g.a.createElement(S,{products:this.props.products}))))}}]),t}(b.Component);t.default=Object(v.b)((function(e){return{products:e.products}}),(function(e){return{fetchProducts:function(){e(Object(w.c)())},clearProducts:function(){e(Object(w.a)())}}}))(U)},682:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=function(e){var t=e.children,n=e.className,a=e.onMouseEnter,o=e.onMouseLeave;return r.a.createElement("div",{className:"panel panel-default ".concat(n),onMouseEnter:a,onMouseLeave:o},t)};i.defaultProps={className:"",onMouseEnter:function(){},onMouseLeave:function(){}},i.propTypes={className:c.a.string,onMouseEnter:c.a.func,onMouseLeave:c.a.func},t.a=i},683:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=function(e){var t=e.className,n=e.children;return r.a.createElement("div",{className:"panel-body ".concat(t)},n)};i.defaultProps={className:""},i.propTypes={className:c.a.string},t.a=i},685:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=function(e){var t=e.buttonClassName,n=e.iconName,a=e.onClickAction,o=e.title,c=e.disabled;return r.a.createElement("button",{type:"button",className:"btn ".concat(t),onClick:a,disabled:c,title:o},r.a.createElement("span",{className:"glyphicon ".concat(n)}))};i.defaultProps={buttonClassName:"btn-success btn-sm",title:"",disabled:!1},i.propTypes={buttonClassName:c.a.string,iconName:c.a.string.isRequired,onClickAction:c.a.func,title:c.a.string,disabled:c.a.bool},t.a=i},887:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=function(){return{type:"FETCH_PRODUCTS"}},r=function(){return{type:"CLEAR_PRODUCTS"}},o=function(e){return{type:"DELETE_PRODUCT",id:e}}}}]);