(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,5],{492:function(t,e,n){var content=n(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("279f09d1",content,!0,{sourceMap:!1})},493:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},494:function(t,e,n){var content=n(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("4946134f",content,!0,{sourceMap:!1})},495:function(t,e,n){var content=n(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("8c09dd7a",content,!0,{sourceMap:!1})},496:function(t,e,n){"use strict";n.r(e);var o={name:"TopBar"},r=(n(501),n(24)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"topNavigationContainer"},[e("div",{staticClass:"leftSection"},[e("div",{staticClass:"topBar"},[t._m(0),t._v(" "),e("div",{staticClass:"top_navigation"},[e("span",{staticClass:"navLinkContainer"},[e("Nuxt-link",{staticClass:"navLink",attrs:{to:"/"}},[t._v("\n            Home\n          ")])],1),t._v(" "),e("span",{staticClass:"navLinkContainer"},[e("Nuxt-link",{staticClass:"navLink",attrs:{to:"/blog"}},[e("del",[t._v(" Blog ")])])],1),t._v(" "),e("span",{staticClass:"navLinkContainer"},[e("Nuxt-link",{staticClass:"navLink",attrs:{to:"free-course"}},[e("del",[t._v(" Free Course ")])])],1),t._v(" "),e("span",{staticClass:"navLinkContainer"},[e("Nuxt-link",{staticClass:"navLink",attrs:{to:"contact"}},[e("del",[t._v(" Contact ")])])],1)])])]),t._v(" "),e("div",{staticClass:"rightSection"})])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"searchContainer"},[e("label",{staticClass:"searchLabel"},[t._v(" Search: ")]),t._v(" "),e("input",{attrs:{value:"  in development"}})])}],!1,null,null,null);e.default=component.exports},497:function(t,e,n){"use strict";n.r(e);n(28),n(80),n(503);var o={name:"ArticleNavigation",props:{newHeaders:{type:Array,required:!0}},data:function(){return{title:""}},methods:{convertText:function(t){var e=t.trim().replace(/\s/g,"");return console.log(e),"#"+e}}},r=(n(506),n(24)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"articleNavigationWrapper"},[e("h4",[t._v(" In this Article ")]),t._v(" "),e("div",{staticClass:"navigationLinkWrapper"},t._l(t.newHeaders,(function(title){return e("li",{key:title,staticClass:"listElement",attrs:{href:"#"}},[e("a",{staticClass:"navigationLink",attrs:{href:t.convertText(title)}},[t._v(" "+t._s(title)+" ")])])})),0)])}),[],!1,null,"08b5023c",null);e.default=component.exports},498:function(t,e,n){"use strict";n.r(e);var o={name:"FooterBar"},r=(n(508),n(24)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footerContainer"},[e("hr"),t._v(" "),e("div",{staticClass:"footerWrapper"},[e("div",[e("span",[e("NuxtLink",{staticClass:"footerLink",attrs:{to:"/"}},[t._v("\n          Home\n        ")])],1),t._v(" "),e("span",[e("NuxtLink",{staticClass:"footerLink",attrs:{to:"/blog"}},[t._v("\n          Blog\n        ")])],1),t._v(" "),e("span",[e("NuxtLink",{staticClass:"footerLink",attrs:{to:"/free-course"}},[t._v("\n          Free Course\n        ")])],1),t._v(" "),e("span",[e("NuxtLink",{staticClass:"footerLink",attrs:{to:"/contact"}},[t._v("\n          Contact\n        ")])],1)]),t._v(" "),t._m(0)])])}),[function(){var t=this._self._c;return t("div",[t("span",[this._v(" © All Rights Reserved by Vue Reference  ")])])}],!1,null,"252198ff",null);e.default=component.exports},499:function(t,e,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("00113300",content,!0,{sourceMap:!1})},500:function(t,e,n){"use strict";n.r(e);var o={},r=(n(510),n(24)),component=Object(r.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"codeBlock"},[t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript code"},[this._t("default")],2)])}),[],!1,null,"ce61e0b8",null);e.default=component.exports},501:function(t,e,n){"use strict";n(492)},502:function(t,e,n){var o=n(47)(!1);o.push([t.i,".topNavigationContainer{width:87%;height:50px;background-color:#34445c;position:fixed}.topBar,.topNavigationContainer{align-items:center;display:flex;flex-direction:row}.topBar{width:100%;justify-content:space-between}.leftSection{width:75%;height:50px;display:flex;align-items:center}.navLinkContainer{margin-left:.8em;margin-right:2em}.navLink{color:#fff;text-decoration:none}.rightSection{width:25%;height:50px}.searchContainer{margin-left:2em;margin-right:2em}.searchLabel{color:#fff}",""]),t.exports=o},503:function(t,e,n){"use strict";var o=n(2),r=n(504).trim;o({target:"String",proto:!0,forced:n(505)("trim")},{trim:function(){return r(this)}})},504:function(t,e,n){var o=n(4),r=n(25),c=n(13),l=n(493),v=o("".replace),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t){return function(e){var n=c(r(e));return 1&t&&(n=v(n,f,"")),2&t&&(n=v(n,m,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},505:function(t,e,n){var o=n(79).PROPER,r=n(3),c=n(493);t.exports=function(t){return r((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||o&&c[t].name!==t}))}},506:function(t,e,n){"use strict";n(494)},507:function(t,e,n){var o=n(47)(!1);o.push([t.i,"h4[data-v-08b5023c]{padding-top:105px!important;margin-top:0}li[data-v-08b5023c]{line-height:1.5em}.articleNavigationWrapper[data-v-08b5023c]{height:100vh;position:fixed;padding-left:1.5em}.navigationLinkWrapper[data-v-08b5023c]{display:flex;flex-direction:column}.listElement[data-v-08b5023c]{list-style:none}.navigationLink[data-v-08b5023c]{list-style:none;text-decoration:none;color:#34445c}.navigationLink[data-v-08b5023c]:hover{color:#4c6182}",""]),t.exports=o},508:function(t,e,n){"use strict";n(495)},509:function(t,e,n){var o=n(47)(!1);o.push([t.i,".footerContainer[data-v-252198ff]{margin-top:2em;padding-bottom:2em}.footerWrapper[data-v-252198ff]{display:flex;flex-direction:row;justify-content:space-between;margin-top:1em}.footerLink[data-v-252198ff]{text-decoration:none;margin-right:1em;color:#4c6182}.footerLink[data-v-252198ff]:hover{color:#202a39}",""]),t.exports=o},510:function(t,e,n){"use strict";n(499)},511:function(t,e,n){var o=n(47)(!1);o.push([t.i,".codeBlock[data-v-ce61e0b8]{margin:0 auto;padding:0!important;border-radius:5px;width:100%}pre[data-v-ce61e0b8]{padding-top:-2em!important}.javascript[data-v-ce61e0b8]{padding:0 0 0 2em;border-radius:15px;font-size:15px}",""]),t.exports=o},517:function(t,e,n){var content=n(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("b5479a98",content,!0,{sourceMap:!1})},537:function(t,e,n){"use strict";n(517)},538:function(t,e,n){var o=n(47)(!1);o.push([t.i,"h1[data-v-74b3ef52]{padding-top:100px!important;margin-top:0;font-size:1.7em}p[data-v-74b3ef52]{line-height:1.5em}mark[data-v-74b3ef52]{border-radius:5px;padding-left:5px;padding-right:5px;background-color:#d2d2ff}.contentWrapper[data-v-74b3ef52]{margin:0 auto;width:100%;display:flex;flex-direction:row}.documentationContainer[data-v-74b3ef52]{width:100%}.mainContent[data-v-74b3ef52]{width:100%;overflow:auto;height:100vh}.mainContentContainer[data-v-74b3ef52]{width:65%;height:100vh;margin:0 auto}.imageContainer[data-v-74b3ef52]{display:flex;justify-content:center}[data-v-74b3ef52]::-webkit-scrollbar{width:5px}[data-v-74b3ef52]::-webkit-scrollbar-track{background:#f1f1f1}[data-v-74b3ef52]::-webkit-scrollbar-thumb{background:#888}[data-v-74b3ef52]::-webkit-scrollbar-thumb:hover{background:#555}.articleNavigationContainer[data-v-74b3ef52]{width:25%}",""]),t.exports=o},565:function(t,e,n){"use strict";n.r(e);var o=n(496),r=n(497),c=n(500),l=n(498),v={name:"EmittedEventsDocumentation",components:{ArticleNavigation:r.default,CodeBlock:c.default,TopBar:o.default,FooterBar:l.default},layout:"documentation",data:function(){return{newHeaders:["EmittedEvents","EmitMethod","ListeningforEvents","PassingArguments","EventModifiers"]}}},d=(n(537),n(24)),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"contentWrapper"},[e("div",{staticClass:"mainContent"},[e("TopBar"),t._v(" "),e("div",{staticClass:"mainContentContainer"},[e("h1",[t._v(" Emitted Events ")]),t._v(" "),t._m(0),t._v(" "),e("h2",{attrs:{id:"emitMethod"}},[t._v("\n          Emit Method (Child)\n        ")]),t._v(" "),t._m(1),t._v(" "),e("pre",[t._v("          "),e("CodeBlock",[t._v("\n<template>\n  <button @click=\"$emit('my-event', 'some data')\">Emit event</button>\n</template>\n          ")]),t._v("\n        ")],1),t._v(" "),e("p",[t._v('\n          This will emit an event called "my-event" when the button is clicked, passing\n          the string "some data" as a payload.\n        ')]),t._v(" "),e("h2",[t._v(" Listening for Events (Parent)")]),t._v(" "),t._m(2),t._v(" "),e("pre",[t._v("          "),e("CodeBlock",[t._v('\n<template>\n  <child-component v-on:my-event="handleEvent"></child-component>\n</template>\n\n<script>\nexport default {\n  methods: {\n    handleEvent(payload) {\n      console.log(payload)\n    }\n  }\n}\n<\/script>\n          ')]),t._v("\n        ")],1),t._v(" "),t._m(3),t._v(" "),e("h2",{attrs:{id:"passingArguments"}},[t._v("\n          Passing Arguments\n        ")]),t._v(" "),e("p",[t._v("\n          You can also pass arguments to the emitted event by using the $event\n          variable. For example:\n        ")]),t._v(" "),e("pre",[t._v("          "),e("CodeBlock",[t._v("\n<template>\n  <button @click=\"$emit('my-event', $event)\">Emit event</button>\n</template>\n          ")]),t._v("\n        ")],1),t._v(" "),e("h2",{attrs:{id:"eventModifiers"}},[t._v("\n          Event Modifiers\n        ")]),t._v(" "),t._m(4),t._v(" "),e("pre",[t._v("          "),e("CodeBlock",[t._v("\n<template>\n  <button @click.prevent=\"$emit('my-event')\">Emit event</button>\n</template>\n          ")]),t._v("\n        ")],1),t._v(" "),e("p",[t._v("\n          Emitted events are a powerful way to communicate between components in a Vue\n          application, and they allow for a more modular and reusable structure. It's\n          important to keep in mind that emitted events should be used to communicate\n          between components, while props should be used to pass data down from a\n          parent component to its child components.\n        ")]),t._v(" "),e("FooterBar")],1)],1),t._v(" "),e("div",{staticClass:"articleNavigationContainer"},[e("ArticleNavigation",{attrs:{"new-headers":t.newHeaders}})],1)])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n          In Vue, emitted events are a way for a child component to communicate\n          with its parent component. The child component emits an event, which\n          the parent component can listen for and respond to. This allows for a\n          "),e("mark",[t._v("unidirectional flow")]),t._v(" of data between the parent and child components.\n        ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("\n          To emit an event in a child component, you can use the "),e("mark",[t._v("$emit")]),t._v(" method.\n          The first argument of the "),e("mark",[t._v("$emit method")]),t._v(" is the name of the event, and\n          any additional arguments (optional) will be passed as payloads to the event. For\n          example:\n        ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("\n          To listen for an emitted event in a parent component, you can use the "),e("mark",[t._v("v-on")]),t._v("\n          directive. The first argument of the "),e("mark",[t._v("v-on")]),t._v(" directive is the name of the event,\n          and the second argument is a callback function that will be called when the\n          event is emitted. For example:\n        ")])},function(){var t=this,e=t._self._c;return e("p",[t._v('\n          In this example, the parent component is listening for the "my-event"\n          event emitted by the child component and when the event is emitted, the\n          '),e("mark",[t._v("handleEvent")]),t._v(" function is called, and the payload passed by the child\n          component is logged to the console.\n        ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("\n          You can also use event modifiers with emitted events, just like you can with\n          native DOM events. For example, you can use the "),e("mark",[t._v(".prevent")]),t._v(" and "),e("mark",[t._v(".stop")]),t._v(" modifiers\n          to prevent the default behavior of the event or stop it from propagating to\n          parent components.\n        ")])}],!1,null,"74b3ef52",null);e.default=component.exports;installComponents(component,{TopBar:n(496).default,CodeBlock:n(500).default,FooterBar:n(498).default,ArticleNavigation:n(497).default})}}]);