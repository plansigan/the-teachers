webpackJsonp([1],{"4jQs":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("mtWM"),i=n.n(r),s=function(){return i.a.create({baseURL:"http://localhost:8081"})};e.default={fetchProducts:function(){return s().get("product")},addProduct:function(t){return s().post("products",t)}}},CrhP:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},s=n("VU/8")({name:"App"},i,!1,null,null,null).exports,o=n("/ocq"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Welcome Page")]),this._v(" "),e("a",{attrs:{href:"#/products"}},[this._v("Enter")])])}]};var c=n("VU/8")({name:"WelcomePage",data:function(){return{msg:"Welcome to the Main page"}}},a,!1,function(t){n("YpsY")},"data-v-bd8a5c10",null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"products"},[e("h1",[this._v(this._s(this.title))]),this._v("\n    This file will list all the products\n")])},staticRenderFns:[]},d=n("VU/8")({name:"products",data:function(){return{title:"This is the product page"}}},u,!1,null,null,null).exports,l=n("4jQs"),p={name:"NewProduct",data:function(){return{title:"",description:""}},methods:{addProduct:function(){l.default.addProduct({title:this.title,description:this.description}),this.$router.push({name:"newProduct"})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},[n("h1",[t._v("Add Product")]),t._v(" "),n("div",{staticClass:"form"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"TITLE"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{rows:"15",cols:"15",placeholder:"DESCRIPTION"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),n("div",[n("button",{staticClass:"app_post_btn",on:{click:t.addProduct}},[t._v("Add")])])])])},staticRenderFns:[]};var v=n("VU/8")(p,h,!1,function(t){n("CrhP")},null,null).exports;r.a.use(o.a);var m=new o.a({routes:[{path:"/",name:"Main",component:c},{path:"/products",name:"products",component:d},{path:"/newProduct",name:"newProduct",component:v}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:m,components:{App:s},template:"<App/>"})},YpsY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d43225941bf373fd1307.js.map