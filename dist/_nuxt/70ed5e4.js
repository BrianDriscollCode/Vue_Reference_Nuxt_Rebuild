(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,4,5],{492:function(t,n,e){var content=e(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(48).default)("279f09d1",content,!0,{sourceMap:!1})},493:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},494:function(t,n,e){var content=e(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(48).default)("4946134f",content,!0,{sourceMap:!1})},495:function(t,n,e){var content=e(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(48).default)("8c09dd7a",content,!0,{sourceMap:!1})},496:function(t,n,e){"use strict";e.r(n);var o={name:"TopBar"},r=(e(501),e(24)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"topNavigationContainer"},[n("div",{staticClass:"leftSection"},[n("div",{staticClass:"topBar"},[t._m(0),t._v(" "),n("div",{staticClass:"top_navigation"},[n("span",{staticClass:"navLinkContainer"},[n("Nuxt-link",{staticClass:"navLink",attrs:{to:"/"}},[t._v("\n            Home\n          ")])],1),t._v(" "),n("span",{staticClass:"navLinkContainer"},[n("Nuxt-link",{staticClass:"navLink",attrs:{to:"/blog"}},[n("del",[t._v(" Blog ")])])],1),t._v(" "),n("span",{staticClass:"navLinkContainer"},[n("Nuxt-link",{staticClass:"navLink",attrs:{to:"free-course"}},[n("del",[t._v(" Free Course ")])])],1),t._v(" "),n("span",{staticClass:"navLinkContainer"},[n("Nuxt-link",{staticClass:"navLink",attrs:{to:"contact"}},[n("del",[t._v(" Contact ")])])],1)])])]),t._v(" "),n("div",{staticClass:"rightSection"})])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"searchContainer"},[n("label",{staticClass:"searchLabel"},[t._v(" Search: ")]),t._v(" "),n("input",{attrs:{value:"  in development"}})])}],!1,null,null,null);n.default=component.exports},497:function(t,n,e){"use strict";e.r(n);e(28),e(80),e(503);var o={name:"ArticleNavigation",props:{newHeaders:{type:Array,required:!0}},data:function(){return{title:""}},methods:{convertText:function(t){var n=t.trim().replace(/\s/g,"");return console.log(n),"#"+n}}},r=(e(506),e(24)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"articleNavigationWrapper"},[n("h4",[t._v(" In this Article ")]),t._v(" "),n("div",{staticClass:"navigationLinkWrapper"},t._l(t.newHeaders,(function(title){return n("li",{key:title,staticClass:"listElement",attrs:{href:"#"}},[n("a",{staticClass:"navigationLink",attrs:{href:t.convertText(title)}},[t._v(" "+t._s(title)+" ")])])})),0)])}),[],!1,null,"08b5023c",null);n.default=component.exports},498:function(t,n,e){"use strict";e.r(n);var o={name:"FooterBar"},r=(e(508),e(24)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"footerContainer"},[n("hr"),t._v(" "),n("div",{staticClass:"footerWrapper"},[n("div",[n("span",[n("NuxtLink",{staticClass:"footerLink",attrs:{to:"/"}},[t._v("\n          Home\n        ")])],1),t._v(" "),n("span",[n("NuxtLink",{staticClass:"footerLink",attrs:{to:"/blog"}},[t._v("\n          Blog\n        ")])],1),t._v(" "),n("span",[n("NuxtLink",{staticClass:"footerLink",attrs:{to:"/free-course"}},[t._v("\n          Free Course\n        ")])],1),t._v(" "),n("span",[n("NuxtLink",{staticClass:"footerLink",attrs:{to:"/contact"}},[t._v("\n          Contact\n        ")])],1)]),t._v(" "),t._m(0)])])}),[function(){var t=this._self._c;return t("div",[t("span",[this._v(" © All Rights Reserved by Vue Reference  ")])])}],!1,null,"252198ff",null);n.default=component.exports},499:function(t,n,e){var content=e(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(48).default)("00113300",content,!0,{sourceMap:!1})},500:function(t,n,e){"use strict";e.r(n);var o={},r=(e(510),e(24)),component=Object(r.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"codeBlock"},[t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript code"},[this._t("default")],2)])}),[],!1,null,"ce61e0b8",null);n.default=component.exports},501:function(t,n,e){"use strict";e(492)},502:function(t,n,e){var o=e(47)(!1);o.push([t.i,".topNavigationContainer{width:87%;height:50px;background-color:#34445c;position:fixed}.topBar,.topNavigationContainer{align-items:center;display:flex;flex-direction:row}.topBar{width:100%;justify-content:space-between}.leftSection{width:75%;height:50px;display:flex;align-items:center}.navLinkContainer{margin-left:.8em;margin-right:2em}.navLink{color:#fff;text-decoration:none}.rightSection{width:25%;height:50px}.searchContainer{margin-left:2em;margin-right:2em}.searchLabel{color:#fff}",""]),t.exports=o},503:function(t,n,e){"use strict";var o=e(2),r=e(504).trim;o({target:"String",proto:!0,forced:e(505)("trim")},{trim:function(){return r(this)}})},504:function(t,n,e){var o=e(4),r=e(25),c=e(13),l=e(493),d=o("".replace),v="["+l+"]",f=RegExp("^"+v+v+"*"),h=RegExp(v+v+"*$"),_=function(t){return function(n){var e=c(r(n));return 1&t&&(e=d(e,f,"")),2&t&&(e=d(e,h,"")),e}};t.exports={start:_(1),end:_(2),trim:_(3)}},505:function(t,n,e){var o=e(79).PROPER,r=e(3),c=e(493);t.exports=function(t){return r((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||o&&c[t].name!==t}))}},506:function(t,n,e){"use strict";e(494)},507:function(t,n,e){var o=e(47)(!1);o.push([t.i,"h4[data-v-08b5023c]{padding-top:105px!important;margin-top:0}li[data-v-08b5023c]{line-height:1.5em}.articleNavigationWrapper[data-v-08b5023c]{height:100vh;position:fixed;padding-left:1.5em}.navigationLinkWrapper[data-v-08b5023c]{display:flex;flex-direction:column}.listElement[data-v-08b5023c]{list-style:none}.navigationLink[data-v-08b5023c]{list-style:none;text-decoration:none;color:#34445c}.navigationLink[data-v-08b5023c]:hover{color:#4c6182}",""]),t.exports=o},508:function(t,n,e){"use strict";e(495)},509:function(t,n,e){var o=e(47)(!1);o.push([t.i,".footerContainer[data-v-252198ff]{margin-top:2em;padding-bottom:2em}.footerWrapper[data-v-252198ff]{display:flex;flex-direction:row;justify-content:space-between;margin-top:1em}.footerLink[data-v-252198ff]{text-decoration:none;margin-right:1em;color:#4c6182}.footerLink[data-v-252198ff]:hover{color:#202a39}",""]),t.exports=o},510:function(t,n,e){"use strict";e(499)},511:function(t,n,e){var o=e(47)(!1);o.push([t.i,".codeBlock[data-v-ce61e0b8]{margin:0 auto;padding:0!important;border-radius:5px;width:100%}pre[data-v-ce61e0b8]{padding-top:-2em!important}.javascript[data-v-ce61e0b8]{padding:0 0 0 2em;border-radius:15px;font-size:15px}",""]),t.exports=o},522:function(t,n,e){var content=e(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(48).default)("bd7569b6",content,!0,{sourceMap:!1})},549:function(t,n,e){t.exports=e.p+"img/props_to_child.2646e65.png"},550:function(t,n,e){"use strict";e(522)},551:function(t,n,e){var o=e(47)(!1);o.push([t.i,"h1[data-v-10d98593]{padding-top:100px!important;margin-top:0;font-size:1.7em}p[data-v-10d98593]{line-height:1.5em}mark[data-v-10d98593]{border-radius:5px;padding-left:5px;padding-right:5px;background-color:#d2d2ff}.contentWrapper[data-v-10d98593]{margin:0 auto;width:100%;display:flex;flex-direction:row}.documentationContainer[data-v-10d98593]{width:100%}.mainContent[data-v-10d98593]{width:100%;overflow:auto;height:100vh}.mainContentContainer[data-v-10d98593]{width:65%;height:100vh;margin:0 auto}.imageContainer[data-v-10d98593]{display:flex;justify-content:center}[data-v-10d98593]::-webkit-scrollbar{width:5px}[data-v-10d98593]::-webkit-scrollbar-track{background:#f1f1f1}[data-v-10d98593]::-webkit-scrollbar-thumb{background:#888}[data-v-10d98593]::-webkit-scrollbar-thumb:hover{background:#555}.articleNavigationContainer[data-v-10d98593]{width:25%}",""]),t.exports=o},570:function(t,n,e){"use strict";e.r(n);var o=e(496),r=e(497),c=e(500),l=e(498),d={name:"PropsDocumentation",components:{ArticleNavigation:r.default,CodeBlock:c.default,TopBar:o.default,FooterBar:l.default},layout:"documentation",data:function(){return{newHeaders:["Props","Passing Data as Props","One-Way Data Flow"]}}},v=(e(550),e(24)),component=Object(v.a)(d,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"contentWrapper"},[n("div",{staticClass:"mainContent"},[n("TopBar"),t._v(" "),n("div",{staticClass:"mainContentContainer"},[n("h1",{attrs:{id:"Props"}},[t._v("\n          Props\n        ")]),t._v(" "),n("p",[t._v("\n          If you are from the React world, you will be very familiar with props.\n          Vue offers similar functionality with their prop system.\n        ")]),t._v(" "),n("p",[t._v("\n          If not, here’s a short explanation of what props are: props are pieces\n          of data that you pass down to child components.\n        ")]),t._v(" "),n("img",{attrs:{src:e(549)}}),t._v(" "),n("p",[t._v("\n          There are two ways to declare a prop in a child component so that it\n          can receive data from the parent component:\n        ")]),t._v(" "),t._m(0),t._v(" "),n("pre",[t._v("          "),n("CodeBlock",[t._v("\nexport default {\n  props: ['firstString', 'secondString', 'thirdString']\n}\n          ")]),t._v("\n        ")],1),t._v(" "),n("p",[t._v("\n          Each string within the props array can now be used to pass down data to another components.\n        ")]),t._v(" "),t._m(1),t._v(" "),n("pre",[t._v("          "),n("CodeBlock",[t._v("\nexport default {\n  props: {\n    firstProp: String,\n    secondPropRandomName: Number\n  }\n}\n          ")]),t._v("\n        ")],1),t._v(" "),n("p",[t._v("\n          In this example we declare a prop name then specify a type for that\n          prop. This helps ensure type safety via static typing when passing\n          data between components.\n        ")]),t._v(" "),n("p",[t._v("\n          Now the component can display the prop to the template. Keep in\n          mind though, it will show nothing because there is no data yet\n          being displayed or passed yet. Let’s now go to the parent component\n          and pass data down to the child component.\n        ")]),t._v(" "),n("h2",{attrs:{id:"PassingDataasProps"}},[t._v("\n          Passing Data as Props\n        ")]),t._v(" "),n("p",[t._v("\n          You can pass any datatype as a prop. Of course, depending on the\n          data-type and whether we are passing something static or dynamic,\n          there different things we will have to do.\n        ")]),t._v(" "),n("p",[t._v(" First, let's pass a static string from the parent to the child. ")]),t._v(" "),n("p",[t._v(" In the parent: ")]),t._v(" "),n("pre",[t._v("          "),n("CodeBlock",[t._v('\n<Banner title="My Journey with Vue">\n          ')]),t._v("\n        ")],1),t._v(" "),n("p",[t._v(' In the code snippet above, we are passing a string as a prop called "title". ')]),t._v(" "),n("p",[t._v(" But what if the data is going to change? ")]),t._v(" "),n("pre",[t._v("          "),n("CodeBlock",[t._v('\n<Banner :title="post.title" />\n          ')]),t._v("\n        ")],1),t._v(" "),n("p",[t._v("\n          Above we are accessing the title property of a post while also using colons to tell\n          Vue that we want this prop to be reactive.\n        ")]),t._v(" "),n("pre",[t._v("          "),n("CodeBlock",[t._v("\n<Banner :title=\"post.title + ' by ' + post.author\" />\n          ")]),t._v("\n        ")],1),t._v(" "),n("p",[t._v("\n          The code snippet above shows how you can use an expression\n          inside of a reactive prop. Inside the data, or if you have\n          made an external call to a database or api, you would receive\n          an object. This expression is combining two properties of the\n          post object called title and author.\n        ")]),t._v(" "),n("p",[t._v("\n          To dive a little more in the v-bind syntax, specifically the colon,\n          when passing all types of data v-bind is necessary except for strings\n          that are not reactive.\n        ")]),t._v(" "),n("p",[t._v(" For example: ")]),t._v(" "),n("pre",[t._v("          "),n("CodeBlock",[t._v('\n\x3c!-- no v-bind --\x3e\n<Banner title="hello world" />\n\n\x3c!-- with v-bind --\x3e\n<Banner :title="32" />\n<Banner :title="[23, 23, 24]" />\n          ')]),t._v("\n        ")],1),t._v(" "),n("h2",{attrs:{id:"One-WayDataFlow"}},[t._v("\n          One-Way Data Flow\n        ")]),t._v(" "),n("p",[t._v("\n          On the main Vue documentation, it will explain that data\n          only flows one way, from parent to child. It is created this\n          way because it makes it simple to understand the data flow\n          and you lower the risk of mutating data.\n        ")]),t._v(" "),n("p",[t._v("\n          BUT, there is a way to pass data from a child component to a\n          parent component. You can pass a function down as a prop and\n          allow that function to change data in the parent component.\n        ")]),t._v(" "),n("p",[t._v("\n          If you are just learning for the first time and need a way to\n          overcome this hurdle, this is a quick band-aid fix.\n        ")]),t._v(" "),n("p",[t._v("\n          Although, if you are looking to expand your application further,\n          a state solution like Vuex or Pinia should start being explored.\n        ")]),t._v(" "),n("FooterBar")],1)],1),t._v(" "),n("div",{staticClass:"articleNavigationContainer"},[n("ArticleNavigation",{attrs:{"new-headers":t.newHeaders}})],1)])}),[function(){var t=this._self._c;return t("p",[t("strong",[this._v(" 1. Using an Array of Strings: ")])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v(" 2. Using Object and Type Syntax ")])])}],!1,null,"10d98593",null);n.default=component.exports;installComponents(component,{TopBar:e(496).default,CodeBlock:e(500).default,FooterBar:e(498).default,ArticleNavigation:e(497).default})}}]);