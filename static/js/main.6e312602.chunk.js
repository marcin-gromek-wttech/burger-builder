(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[0],{10:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},11:function(e,t,n){e.exports={Header:"Header_Header__2PA5r",Logo:"Header_Logo__29ViQ",ButtonToggler:"Header_ButtonToggler__2irqb"}},14:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},15:function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},25:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},26:function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},27:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2O1l9"}},28:function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},29:function(e,t,n){e.exports={Modal:"Modal_Modal__2t6l7"}},3:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Onion:"BurgerIngredient_Onion__1vjxT",Bacon:"BurgerIngredient_Bacon__1KK6n"}},31:function(e,t,n){e.exports={Loader:"Spinner_Loader__2hakv",load2:"Spinner_load2__XNvqU"}},38:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(24),i=n.n(c),o=(n(38),n(9)),d=n.n(o),l=n(4),u=n(5),j=n(7),b=n(6),h=function(e){return e.children},g=n(11),p=n.n(g),O=n(14),_=n.n(O),x=function(e){var t=e.active,n=e.link,a=e.children;return Object(r.jsx)("li",{className:_.a.NavigationItem,children:Object(r.jsx)("a",{className:t?_.a.active:null,href:n,children:a})})},v=n(25),m=n.n(v),f=function(){return Object(r.jsxs)("ul",{className:m.a.NavigationItems,children:[Object(r.jsx)(x,{link:"/",active:"true",children:"BurgerBuilder"}),Object(r.jsx)(x,{children:"Checkout"})]})},B=function(){return Object(r.jsx)("nav",{children:Object(r.jsx)(f,{})})},C=n.p+"static/media/burger-logo.ec69c7f6.png",N=n(26),S=n.n(N),k=function(e){var t=e.openedSideDrawer;return Object(r.jsx)("div",{className:S.a.Logo,children:Object(r.jsx)("img",{src:C,alt:"logo burger",style:{transform:t?"rotateZ(-180deg)":"rotateZ(0deg)"}})})},y=function(e){var t=e.clickedLogo,n=e.openedSideDrawer;return Object(r.jsxs)("header",{className:p.a.Header,children:[Object(r.jsx)("div",{className:p.a.ButtonToggler,onClick:t,children:"Menu"}),Object(r.jsx)("div",{className:p.a.Logo,children:Object(r.jsx)(k,{openedSideDrawer:n})}),Object(r.jsx)(B,{})]})},w=n(10),L=n.n(w),T=n(27),P=n.n(T),D=function(e){var t=e.show,n=e.children,a=e.clicked;return t?Object(r.jsx)("div",{className:P.a.Backdrop,onClick:a,children:n}):null},I=function(e){var t=e.opened,n=e.closed;return Object(r.jsxs)(h,{children:[Object(r.jsx)(D,{show:t,clicked:n}),Object(r.jsxs)("div",{className:"".concat(L.a.SideDrawer," ").concat(t?L.a.Open:L.a.Close),children:[Object(r.jsx)("div",{className:L.a.Logo,children:Object(r.jsx)(k,{})}),Object(r.jsx)(B,{})]})]})},M=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isVisibleSideDrawer:!1},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{isVisibleSideDrawer:!e.isVisibleSideDrawer}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(h,{children:[Object(r.jsx)(y,{clickedLogo:this.sideDrawerToggleHandler,openedSideDrawer:this.state.isVisibleSideDrawer}),Object(r.jsx)(I,{opened:this.state.isVisibleSideDrawer,closed:this.sideDrawerToggleHandler}),Object(r.jsx)("main",{children:this.props.children})]})}}]),n}(a.Component),F=n(12),A=n(8),H=n.n(A),R=function(e){var t=e.label,n=e.added,a=e.removed,s=e.disabledNote;return Object(r.jsxs)("div",{className:H.a.BuildControl,children:[Object(r.jsx)("div",{className:H.a.Label,children:t}),Object(r.jsx)("button",{className:H.a.More,onClick:n,children:"more"}),Object(r.jsx)("button",{className:H.a.Less,disabled:s,onClick:a,children:"less"})]})},U=[{label:"Salad",type:"salad"},{label:"Meat",type:"meat"},{label:"Chesse",type:"chesse"},{label:"Onion",type:"onion"},{label:"Bacon",type:"bacon"}],X=function(e){var t=e.ingredientAdded,n=e.ingredientRemoved,a=e.disabled,s=e.totalPrice,c=e.canPurchase,i=e.order;return Object(r.jsxs)("div",{className:d.a.TextCenter,children:[Object(r.jsxs)("p",{className:d.a.TextCenter,children:["Total price: ",Object(r.jsx)("strong",{children:s})]}),U.map((function(e){return Object(r.jsx)(R,{added:function(){return t(e.type)},removed:function(){return n(e.type)},label:e.label,type:e.type,disabledNote:a[e.type]},e.label)})),Object(r.jsx)("button",{className:H.a.OrderButton,disabled:c,onClick:i,children:"Order burger"})]})},V=n(32),Y=n(3),J=n.n(Y),K=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-top":e=Object(r.jsxs)("div",{className:J.a.BreadTop,children:[Object(r.jsx)("div",{className:J.a.Seeds1}),Object(r.jsx)("div",{className:J.a.Seeds2})]});break;case"bread-bottom":e=Object(r.jsx)("div",{className:J.a.BreadBottom});break;case"meat":e=Object(r.jsx)("div",{className:J.a.Meat});break;case"chesse":e=Object(r.jsx)("div",{className:J.a.Cheese});break;case"salad":e=Object(r.jsx)("div",{className:J.a.Salad});break;case"onion":e=Object(r.jsx)("div",{className:J.a.Onion});break;case"bacon":e=Object(r.jsx)("div",{className:J.a.Bacon});break;default:e=null}return e}}]),n}(a.Component),Z=n(28),q=n.n(Z),E=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(V.a)(Array(Math.max(0,e.ingredients[t]))).map((function(e,n){return Object(r.jsx)(K,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{className:d.a.TextCenter,children:"no ingredients"})),Object(r.jsxs)("div",{className:q.a.Burger,children:[Object(r.jsx)(K,{type:"bread-top"}),t,Object(r.jsx)(K,{type:"bread-bottom"})]})},z=n(29),G=n.n(z),Q=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){var e=this.props,t=e.show,n=e.modalClose,a=e.children;return Object(r.jsxs)(h,{children:[Object(r.jsx)(D,{show:t,clicked:n}),Object(r.jsx)("div",{className:G.a.Modal,style:{transform:t?"translateY(0)":"translateY(-1000px)"},children:a}),";"]})}}]),n}(a.Component),W=n(15),$=n.n(W),ee=function(e){var t=e.children,n=e.clicked,a=e.btnType;return Object(r.jsx)("button",{className:[$.a.Button,$.a[a]].join(" "),onClick:n,children:t})},te=function(e){var t=e.ingredients,n=e.purchaseCancelled,a=e.purchaseProceed,s=e.price,c=Object.keys(t).map((function(e){return Object(r.jsxs)("li",{children:[e,": ",t[e]]},e)}));return Object(r.jsxs)(h,{children:[Object(r.jsx)("h3",{children:"Your order: "}),Object(r.jsx)("ul",{style:{listStyleType:"none",paddingLeft:"0"},children:c}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total price: ",s]})}),Object(r.jsx)(ee,{btnType:"Danger",clicked:n,children:"CANCEL"}),Object(r.jsx)(ee,{btnType:"Success",clicked:a,children:"CONTINUE"})]})},ne=n(30),re=n.n(ne).a.create({baseURL:"https://react-burger-701-default-rtdb.firebaseio.com/"}),ae=n(31),se=n.n(ae),ce=function(){return Object(r.jsx)("div",{className:se.a.Loader})},ie={meat:2,salad:.5,chesse:1,onion:.4,bacon:.9},oe=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:{meat:0,salad:0,chesse:0,onion:0,bacon:0},totalPrice:"",canPurchase:!1,purchasing:!1,loading:!1},e.ingredientAdd=function(t){var n=e.state.ingredients[t]+1,r=Object(F.a)({},e.state.ingredients);r[t]=n;var a=ie[t],s=e.state.totalPrice,c=parseFloat(a+s).toFixed(2);e.setState({ingredients:r,totalPrice:Number(c)}),e.updatePurchaseState(r)},e.ingredientRemove=function(t){var n=e.state.ingredients[t]-1,r=Object(F.a)({},e.state.ingredients);r[t]=n;var a=ie[t],s=e.state.totalPrice,c=parseFloat(s-a).toFixed(2);e.setState({ingredients:r,totalPrice:Number(c)}),e.updatePurchaseState(r)},e.updatePurchaseState=function(t){e.setState({canPurchase:Object.values(t).some((function(e){return e}))})},e.purchase=function(){e.setState({purchasing:!0})},e.purchaseCancel=function(){e.setState({purchasing:!1})},e.purchaseContinue=function(){e.setState({loading:!0});var t={ingredients:e.state.ingredients,price:e.state.totalPrice,customer:{name:"Marcin Gromek",address:{street:"teststreet",zipCode:"00-3323",country:"Poland"},email:"test@test.com"},deliveryMethod:"fast"};re.post("/orders.json",t).then((function(t){e.setState({loading:!1}),console.log(t)})).catch((function(t){e.setState({loading:!1})}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=Object(F.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=Object(r.jsx)(te,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancel,purchaseProceed:this.purchaseContinue,price:this.state.totalPrice});return this.state.loading&&(n=Object(r.jsx)(ce,{})),Object(r.jsxs)(h,{children:[Object(r.jsx)(E,{ingredients:this.state.ingredients}),Object(r.jsx)(X,{ingredientAdded:this.ingredientAdd,ingredientRemoved:this.ingredientRemove,disabled:e,totalPrice:this.state.totalPrice,canPurchase:!this.state.canPurchase,order:this.purchase}),Object(r.jsx)(Q,{show:this.state.purchasing,modalClose:this.purchaseCancel,children:n})]})}}]),n}(a.Component);var de=function(){return Object(r.jsx)(M,{children:Object(r.jsx)(oe,{})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(de,{})}),document.getElementById("root")),le()},8:function(e,t,n){e.exports={BuildControl:"BurgerControl_BuildControl__2dY5M",Label:"BurgerControl_Label__2bTIX",Less:"BurgerControl_Less__1Zoe8",More:"BurgerControl_More__15bc5",OrderButton:"BurgerControl_OrderButton__3KnM6",enable:"BurgerControl_enable__1LxsX"}},9:function(e,t,n){e.exports={TextCenter:"App_TextCenter__1OttC"}}},[[57,1,2]]]);
//# sourceMappingURL=main.6e312602.chunk.js.map