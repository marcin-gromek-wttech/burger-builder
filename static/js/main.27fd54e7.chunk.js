(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[0],{12:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Onion:"BurgerIngredient_Onion__1vjxT",Bacon:"BurgerIngredient_Bacon__1KK6n"}},13:function(e,t,n){e.exports={BuildControl:"BurgerControl_BuildControl__2dY5M",Label:"BurgerControl_Label__2bTIX",Less:"BurgerControl_Less__1Zoe8",More:"BurgerControl_More__15bc5",OrderButton:"BurgerControl_OrderButton__3KnM6",enable:"BurgerControl_enable__1LxsX"}},15:function(e,t,n){e.exports={TextCenter:"App_TextCenter__1OttC"}},19:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},20:function(e,t,n){e.exports={Header:"Header_Header__2PA5r",Logo:"Header_Logo__29ViQ",ButtonToggler:"Header_ButtonToggler__2irqb"}},23:function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},24:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},36:function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},37:function(e,t,n){e.exports={Modal:"Modal_Modal__2WBTT"}},38:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2O1l9"}},40:function(e,t,n){e.exports={Loader:"Spinner_Loader__2hakv",load2:"Spinner_load2__XNvqU"}},41:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},42:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},44:function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(35),i=n.n(c),o=n(16),d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},l=n(4),u=n(5),j=n(7),b=n(6),h=n(2),p=n(17),g=n(13),O=n.n(g),x=function(e){var t=e.label,n=e.added,a=e.removed,s=e.disabledNote;return Object(r.jsxs)("div",{className:O.a.BuildControl,children:[Object(r.jsx)("div",{className:O.a.Label,children:t}),Object(r.jsx)("button",{className:O.a.More,onClick:n,children:"more"}),Object(r.jsx)("button",{className:O.a.Less,disabled:s,onClick:a,children:"less"})]})},m=n(15),_=n.n(m),v=[{label:"Salad",type:"salad"},{label:"Meat",type:"meat"},{label:"Chesse",type:"chesse"},{label:"Onion",type:"onion"},{label:"Bacon",type:"bacon"}],f=function(e){var t=e.ingredientAdded,n=e.ingredientRemoved,a=e.disabled,s=e.totalPrice,c=e.canPurchase,i=e.order;return Object(r.jsxs)("div",{className:_.a.TextCenter,children:[Object(r.jsxs)("p",{className:_.a.TextCenter,children:["Total price: ",Object(r.jsx)("strong",{children:s})]}),v.map((function(e){return Object(r.jsx)(x,{added:function(){return t(e.type)},removed:function(){return n(e.type)},label:e.label,type:e.type,disabledNote:a[e.type]},e.label)})),Object(r.jsx)("button",{className:O.a.OrderButton,disabled:c,onClick:i,children:"Order burger"})]})},C=function(e){return e.children},y=n(45),S=n(12),B=n.n(S),k=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-top":e=Object(r.jsxs)("div",{className:B.a.BreadTop,children:[Object(r.jsx)("div",{className:B.a.Seeds1}),Object(r.jsx)("div",{className:B.a.Seeds2})]});break;case"bread-bottom":e=Object(r.jsx)("div",{className:B.a.BreadBottom});break;case"meat":e=Object(r.jsx)("div",{className:B.a.Meat});break;case"chesse":e=Object(r.jsx)("div",{className:B.a.Cheese});break;case"salad":e=Object(r.jsx)("div",{className:B.a.Salad});break;case"onion":e=Object(r.jsx)("div",{className:B.a.Onion});break;case"bacon":e=Object(r.jsx)("div",{className:B.a.Bacon});break;default:e=null}return e}}]),n}(a.Component),N=n(36),w=n.n(N),T=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(y.a)(Array(Math.max(0,e.ingredients[t]))).map((function(e,n){return Object(r.jsx)(k,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{className:_.a.TextCenter,children:"Add ingredients, please"})),Object(r.jsxs)("div",{className:w.a.Burger,children:[Object(r.jsx)(k,{type:"bread-top"}),t,Object(r.jsx)(k,{type:"bread-bottom"})]})},L=n(37),I=n.n(L),D=n(38),P=n.n(D),M=function(e){var t=e.show,n=e.children,a=e.clicked;return t?Object(r.jsx)("div",{className:P.a.Backdrop,onClick:a,children:n}):null},A=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){var e=this.props,t=e.show,n=e.modalClose,a=e.children;return Object(r.jsxs)(C,{children:[Object(r.jsx)(M,{show:t,clicked:n}),Object(r.jsx)("div",{className:I.a.Modal,style:{transform:t?"translateY(0)":"translateY(-1000px)"},children:a}),";"]})}}]),n}(a.Component),H=n(23),F=n.n(H),q=function(e){var t=e.children,n=e.clicked,a=e.btnType;return Object(r.jsx)("button",{className:[F.a.Button,F.a[a]].join(" "),onClick:n,children:t})},U=function(e){var t=e.ingredients,n=e.purchaseCancelled,a=e.purchaseProceed,s=e.price,c=Object.keys(t).map((function(e){return Object(r.jsxs)("li",{children:[e,": ",t[e]]},e)}));return Object(r.jsxs)(C,{children:[Object(r.jsx)("h3",{children:"Your order: "}),Object(r.jsx)("ul",{style:{listStyleType:"none",paddingLeft:"0"},children:c}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total price: ",s]})}),Object(r.jsx)(q,{btnType:"Danger",clicked:n,children:"CANCEL"}),Object(r.jsx)(q,{btnType:"Success",clicked:a,children:"CONTINUE"})]})},X=n(39),R=n.n(X).a.create({baseURL:"https://react-burger-701-default-rtdb.firebaseio.com/"}),V=n(40),Y=n.n(V),J=function(){return Object(r.jsx)("div",{className:Y.a.Loader})},K={meat:2,salad:.5,chesse:1,onion:.4,bacon:.9},Z=function(e,t){return function(n){Object(j.a)(s,n);var a=Object(b.a)(s);function s(){var e;Object(l.a)(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null,request:null,response:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.requestInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.responseInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.requestInterceptor),t.interceptors.response.eject(this.responseInterceptor)}},{key:"render",value:function(){return Object(r.jsxs)(C,{children:[Object(r.jsx)(A,{show:this.state.error,modalClose:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(r.jsx)(e,Object(p.a)({},this.props)),";"]})}}]),s}(a.Component)}(function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:null,totalPrice:"",canPurchase:!1,purchasing:!1,loading:!1,error:!1},e.ingredientAdd=function(t){var n=e.state.ingredients[t]+1,r=Object(p.a)({},e.state.ingredients);r[t]=n;var a=K[t],s=e.state.totalPrice,c=parseFloat(a+s).toFixed(2);e.setState({ingredients:r,totalPrice:Number(c)}),e.updatePurchaseState(r)},e.ingredientRemove=function(t){var n=e.state.ingredients[t]-1,r=Object(p.a)({},e.state.ingredients);r[t]=n;var a=K[t],s=e.state.totalPrice,c=parseFloat(s-a).toFixed(2);e.setState({ingredients:r,totalPrice:Number(c)}),e.updatePurchaseState(r)},e.updatePurchaseState=function(t){e.setState({canPurchase:Object.values(t).some((function(e){return e}))})},e.purchase=function(){e.setState({purchasing:!0})},e.purchaseCancel=function(){e.setState({purchasing:!1})},e.purchaseContinue=function(){e.setState({loading:!0});var t={ingredients:e.state.ingredients,price:e.state.totalPrice,customer:{name:"Marcin Gromek",address:{street:"teststreet",zipCode:"00-3323",country:"Poland"},email:"test@test.com"},deliveryMethod:"fast"};R.post("/orders.json",t).then((function(t){e.setState({loading:!1,purchasing:!1}),console.log(t)})).catch((function(t){e.setState({loading:!1,purchasing:!1})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;R.get("/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"render",value:function(){var e=Object(p.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?Object(r.jsx)("p",{style:{marginTop:"50px",textAlign:"center"},children:"ingredients can't be loaded"}):Object(r.jsx)(J,{});return this.state.ingredients&&(a=Object(r.jsxs)(C,{children:[Object(r.jsx)(T,{ingredients:this.state.ingredients}),Object(r.jsx)(f,{ingredientAdded:this.ingredientAdd,ingredientRemoved:this.ingredientRemove,disabled:e,totalPrice:this.state.totalPrice,canPurchase:!this.state.canPurchase,order:this.purchase})]}),n=Object(r.jsx)(U,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancel,purchaseProceed:this.purchaseContinue,price:this.state.totalPrice})),this.state.loading&&(n=Object(r.jsx)(J,{})),Object(r.jsxs)(C,{children:[Object(r.jsx)(A,{show:this.state.purchasing,modalClose:this.purchaseCancel,children:n}),a]})}}]),n}(a.Component),R),E=n(41),W=n.n(E),z=function(e){var t=e.ingredients;return Object(r.jsxs)("div",{className:W.a.CheckoutSummary,children:[Object(r.jsx)("h1",{children:"Checkout Summary"}),Object(r.jsx)(T,{ingredients:t}),Object(r.jsx)(q,{btnType:"Danger",children:"Cancel"}),Object(r.jsx)(q,{btnType:"Success",children:"Continue"})]})},G=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:{salad:1,onion:1,bacon:1,cheese:1,meat:1}},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(z,{ingredients:this.state.ingredients})})}}]),n}(a.Component),Q=n(20),$=n.n(Q),ee=n(42),te=n.n(ee),ne=n(24),re=n.n(ne),ae=function(){return Object(r.jsxs)("ul",{className:te.a.NavigationItems,children:[Object(r.jsx)("li",{className:re.a.NavigationItem,children:Object(r.jsx)(o.b,{exact:!0,to:"/",children:"BurgerBuilder"})}),Object(r.jsx)("li",{className:re.a.NavigationItem,children:Object(r.jsx)(o.b,{to:"/checkout/",children:"Checkout"})})]})},se=function(){return Object(r.jsx)("nav",{children:Object(r.jsx)(ae,{})})},ce=n.p+"static/media/burger-logo.ec69c7f6.png",ie=n(44),oe=n.n(ie),de=function(e){var t=e.openedSideDrawer;return Object(r.jsx)("div",{className:oe.a.Logo,children:Object(r.jsx)("img",{src:ce,alt:"logo burger",style:{transform:t?"rotateZ(-180deg)":"rotateZ(0deg)"}})})},le=function(e){var t=e.clickedLogo,n=e.openedSideDrawer;return Object(r.jsxs)("header",{className:$.a.Header,children:[Object(r.jsx)("div",{className:$.a.ButtonToggler,onClick:t,children:"Menu"}),Object(r.jsx)("div",{className:$.a.Logo,children:Object(r.jsx)(de,{openedSideDrawer:n})}),Object(r.jsx)(se,{})]})},ue=n(19),je=n.n(ue),be=function(e){var t=e.opened,n=e.closed;return Object(r.jsxs)(C,{children:[Object(r.jsx)(M,{show:t,clicked:n}),Object(r.jsxs)("div",{className:"".concat(je.a.SideDrawer," ").concat(t?je.a.Open:je.a.Close),children:[Object(r.jsx)("div",{className:je.a.Logo,children:Object(r.jsx)(de,{})}),Object(r.jsx)(se,{})]})]})},he=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isVisibleSideDrawer:!1},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{isVisibleSideDrawer:!e.isVisibleSideDrawer}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(C,{children:[Object(r.jsx)(le,{clickedLogo:this.sideDrawerToggleHandler,openedSideDrawer:this.state.isVisibleSideDrawer}),Object(r.jsx)(be,{opened:this.state.isVisibleSideDrawer,closed:this.sideDrawerToggleHandler}),Object(r.jsx)("main",{style:{marginTop:"56px"},children:this.props.children})]})}}]),n}(a.Component),pe=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(he,{children:Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.a,{exact:!0,path:"/",component:Z}),Object(r.jsx)(h.a,{path:"/checkout/",component:G})]})})}}]),n}(a.Component);n(77);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(o.a,{children:Object(r.jsx)(pe,{})})}),document.getElementById("root")),d()}},[[78,1,2]]]);
//# sourceMappingURL=main.27fd54e7.chunk.js.map