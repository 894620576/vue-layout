(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{1887:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("动态")])])}],l=n("17cc"),r={},s=Object(l["a"])(r,a,i,!1,null,null,null);e["default"]=s.exports},"4a5b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"pa-3 mb-3 feature-pane",attrs:{sm12:"",lg3:""}},[n("v-btn",{attrs:{fab:"",outline:"",small:"",absolute:"",left:"",color:"primary"},on:{click:function(e){return t.$refs.calendar.prev()}}},[n("v-icon",{attrs:{dark:""}},[t._v("keyboard_arrow_left")])],1),n("v-btn",{attrs:{fab:"",outline:"",small:"",absolute:"",right:"",color:"primary"},on:{click:function(e){return t.$refs.calendar.next()}}},[n("v-icon",{attrs:{dark:""}},[t._v("keyboard_arrow_right")])],1),n("br"),n("br"),n("br"),n("v-select",{attrs:{items:t.typeOptions,label:"Type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),n("v-checkbox",{attrs:{label:"Dark"},model:{value:t.dark,callback:function(e){t.dark=e},expression:"dark"}}),n("v-select",{attrs:{items:t.colorOptions,label:"Color"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),n("v-menu",{ref:"startMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.start,transition:"scale-transition","min-width":"290px",lazy:"","offset-y":"","full-width":""},on:{"update:returnValue":function(e){t.start=e},"update:return-value":function(e){t.start=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-text-field",t._g({attrs:{label:"Start Date","prepend-icon":"event",readonly:""},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}},a))]}}]),model:{value:t.startMenu,callback:function(e){t.startMenu=e},expression:"startMenu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.startMenu=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.startMenu.save(t.start)}}},[t._v("OK")])],1)],1),t.hasEnd?n("v-menu",{ref:"endMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.end,transition:"scale-transition","min-width":"290px",lazy:"","offset-y":"","full-width":""},on:{"update:returnValue":function(e){t.end=e},"update:return-value":function(e){t.end=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-text-field",t._g({attrs:{label:"End Date","prepend-icon":"event",readonly:""},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}},a))]}}],null,!1,2241163769),model:{value:t.endMenu,callback:function(e){t.endMenu=e},expression:"endMenu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.endMenu=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.endMenu.save(t.end)}}},[t._v("OK")])],1)],1):t._e(),n("v-menu",{ref:"nowMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.now,transition:"scale-transition","min-width":"290px",lazy:"","offset-y":"","full-width":""},on:{"update:returnValue":function(e){t.now=e},"update:return-value":function(e){t.now=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-text-field",t._g({attrs:{label:"Today","prepend-icon":"event",readonly:""},model:{value:t.now,callback:function(e){t.now=e},expression:"now"}},a))]}}]),model:{value:t.nowMenu,callback:function(e){t.nowMenu=e},expression:"nowMenu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.now,callback:function(e){t.now=e},expression:"now"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.nowMenu=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.nowMenu.save(t.now)}}},[t._v("OK")])],1)],1),n("v-select",{attrs:{items:t.weekdaysOptions,label:"Weekdays"},model:{value:t.weekdays,callback:function(e){t.weekdays=e},expression:"weekdays"}}),"custom-weekly"===t.type?n("v-text-field",{attrs:{label:"Minimum Weeks",type:"number"},model:{value:t.minWeeks,callback:function(e){t.minWeeks=e},expression:"minWeeks"}}):t._e(),t.hasIntervals?n("v-select",{attrs:{items:t.intervalsOptions,label:"Intervals"},model:{value:t.intervals,callback:function(e){t.intervals=e},expression:"intervals"}}):t._e(),"custom-daily"===t.type?n("v-select",{attrs:{items:t.maxDaysOptions,label:"# of Days"},model:{value:t.maxDays,callback:function(e){t.maxDays=e},expression:"maxDays"}}):t._e(),t.hasIntervals?n("v-select",{attrs:{items:t.styleIntervalOptions,label:"Styling"},model:{value:t.styleInterval,callback:function(e){t.styleInterval=e},expression:"styleInterval"}}):t._e()],1),n("v-flex",{staticClass:"pl-3",attrs:{sm12:"",lg9:""}},[n("v-sheet",{attrs:{height:"calc(100vh - 150px)"}},[n("v-calendar",{ref:"calendar",attrs:{locale:"cn",type:t.type,start:t.start,end:t.end,"min-weeks":t.minWeeks,"max-days":t.maxDays,now:t.now,dark:t.dark,weekdays:t.weekdays,"first-interval":t.intervals.first,"interval-minutes":t.intervals.minutes,"interval-count":t.intervals.count,"interval-height":t.intervals.height,"interval-style":t.intervalStyle,"show-interval-label":t.showIntervalLabel,color:t.color},scopedSlots:t._u([{key:"day",fn:function(e){return[e.day%3===0?n("v-sheet",{staticClass:"white--text pa-1",attrs:{color:t.color}},[t._v("day slot "+t._s(e.date))]):t._e()]}},{key:"header",fn:function(e){return[e.weekday%2?n("div",{staticClass:"day-header"},[t._v("day-header slot "+t._s(e.date))]):t._e()]}},{key:"day-body",fn:function(e){return[e.weekday%3===2?n("div",{staticClass:"day-body"},[t._v("day-body slot "+t._s(e.date))]):t._e()]}}]),model:{value:t.start,callback:function(e){t.start=e},expression:"start"}})],1)],1)],1)},i=[],l=[0,1,2,3,4,5,6],r={first:0,minutes:60,count:24,height:40},s={default:function(){},workday:function(t){var e=0===t.weekday||6===t.weekday||t.hour<9||t.hour>=17,n=0===t.minute,a=this.dark,i=a?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)";return{backgroundColor:e?a?"rgba(0,0,0,0.4)":"rgba(0,0,0,0.05)":void 0,borderTop:n?void 0:"1px dashed "+i}},past:function(t){return{backgroundColor:t.past?this.dark?"rgba(0,0,0,0.4)":"rgba(0,0,0,0.05)":void 0}}},o={data:function(){return{dark:!1,startMenu:!1,start:"2019-01-12",endMenu:!1,end:"2019-01-27",nowMenu:!1,minWeeks:1,now:null,type:"month",typeOptions:[{text:"Day",value:"day"},{text:"4 Day",value:"4day"},{text:"Week",value:"week"},{text:"Month",value:"month"},{text:"Custom Daily",value:"custom-daily"},{text:"Custom Weekly",value:"custom-weekly"}],weekdays:l,weekdaysOptions:[{text:"Sunday - Saturday",value:l},{text:"Mon, Wed, Fri",value:[1,3,5]},{text:"Mon - Fri",value:[1,2,3,4,5]},{text:"Mon - Sun",value:[1,2,3,4,5,6,0]}],intervals:r,intervalsOptions:[{text:"Default",value:r},{text:"Workday",value:{first:16,minutes:30,count:20,height:40}}],maxDays:7,maxDaysOptions:[{text:"7 days",value:7},{text:"5 days",value:5},{text:"4 days",value:4},{text:"3 days",value:3}],styleInterval:"default",styleIntervalOptions:[{text:"Default",value:"default"},{text:"Workday",value:"workday"},{text:"Past",value:"past"}],color:"primary",colorOptions:[{text:"Primary",value:"primary"},{text:"Secondary",value:"secondary"},{text:"Accent",value:"accent"},{text:"Red",value:"red"},{text:"Pink",value:"pink"},{text:"Purple",value:"purple"},{text:"Deep Purple",value:"deep-purple"},{text:"Indigo",value:"indigo"},{text:"Blue",value:"blue"},{text:"Light Blue",value:"light-blue"},{text:"Cyan",value:"cyan"},{text:"Teal",value:"teal"},{text:"Green",value:"green"},{text:"Light Green",value:"light-green"},{text:"Lime",value:"lime"},{text:"Yellow",value:"yellow"},{text:"Amber",value:"amber"},{text:"Orange",value:"orange"},{text:"Deep Orange",value:"deep-orange"},{text:"Brown",value:"brown"},{text:"Blue Gray",value:"blue-gray"},{text:"Gray",value:"gray"},{text:"Black",value:"black"}]}},computed:{intervalStyle:function(){return s[this.styleInterval].bind(this)},hasIntervals:function(){return this.type in{week:1,day:1,"4day":1,"custom-daily":1}},hasEnd:function(){return this.type in{"custom-weekly":1,"custom-daily":1}}},methods:{showIntervalLabel:function(t){return 0===t.minute}}},c=o,u=(n("bcc4"),n("17cc")),d=Object(u["a"])(c,a,i,!1,null,"7051c41c",null);e["default"]=d.exports},"4c39":function(t,e){var n,a,i=t.exports={};function l(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===l||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}function o(t){if(a===clearTimeout)return clearTimeout(t);if((a===r||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(t);try{return a(t)}catch(e){try{return a.call(null,t)}catch(e){return a.call(this,t)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:l}catch(t){n=l}try{a="function"===typeof clearTimeout?clearTimeout:r}catch(t){a=r}})();var c,u=[],d=!1,v=-1;function f(){d&&c&&(d=!1,c.length?u=c.concat(u):v=-1,u.length&&m())}function m(){if(!d){var t=s(f);d=!0;var e=u.length;while(e){c=u,u=[];while(++v<e)c&&c[v].run();v=-1,e=u.length}c=null,d=!1,o(t)}}function p(t,e){this.fun=t,this.array=e}function h(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||d||s(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"4f45":function(t,e,n){(function(t){var a="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function l(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new l(i.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new l(i.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},l.prototype.unref=l.prototype.ref=function(){},l.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("de8a"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("66fa"))},5066:function(t,e,n){"use strict";var a=n("61c5"),i=n.n(a);i.a},"61c5":function(t,e,n){},"8d76":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"amap-page-container"},[n("el-amap",{staticClass:"amap-demo",attrs:{vid:"amapDemo",center:t.center,zoom:t.zoom,events:t.events}},t._l(t.markers,function(t,e){return n("el-amap-marker",{key:e,attrs:{position:t.position,content:t.content,events:t.events}})}),1)],1)])},i=[],l={data:function(){var t=this;return{zoom:12,center:[114.22951,22.720603],markers:[],markerRefs:[],events:{init:function(e){setTimeout(function(){console.log(t.markerRefs);var n=new AMap.MarkerClusterer(e,t.markerRefs,{gridSize:80,renderCluserMarker:t._renderCluserMarker});console.log(n)},1e3)}}}},created:function(){var t=this,e=[],n=0;while(++n<=40)e.push({position:[114.22951+.001*n,22.720603],content:'<div style="text-align:center; background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',events:{init:function(e){t.markerRefs.push(e)}}});this.markers=e},mounted:function(){},methods:{_renderCluserMarker:function(t){var e=this.markers.length,n=Math.pow(t.count/e,1/18),a=document.createElement("div"),i=180-180*n,l="hsla("+i+",100%,50%,0.7)",r="hsla("+i+",100%,20%,1)",s="hsla("+i+",100%,40%,1)",o="hsla("+i+",100%,50%,1)";a.style.backgroundColor=l;var c=Math.round(30+20*Math.pow(t.count/e,.2));a.style.width=a.style.height=c+"px",a.style.border="solid 1px "+s,a.style.borderRadius=c/2+"px",a.style.boxShadow="0 0 1px "+o,a.innerHTML=t.count,a.style.lineHeight=c+"px",a.style.color=r,a.style.fontSize="14px",a.style.textAlign="center",t.marker.setOffset(new AMap.Pixel(-c/2,-c/2)),t.marker.setContent(a)}}},r=l,s=(n("be6a"),n("17cc")),o=Object(s["a"])(r,a,i,!1,null,"32488e7d",null);e["default"]=o.exports},a863:function(t,e,n){},bcc4:function(t,e,n){"use strict";var a=n("a863"),i=n.n(a);i.a},be6a:function(t,e,n){"use strict";var a=n("c24a"),i=n.n(a);i.a},c24a:function(t,e,n){},c29e:function(t,e){},c430:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-warp"},[n("v-card",{staticClass:"left-menu"},[n("v-list",[t._l(t.menu,function(e){return[e.action?n("v-list-tile",{key:e.title,on:{click:t.click}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"blue white--text"}},[t._v(t._s(e.action))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1):t._e()]})],2),n("v-layout",{attrs:{"align-end":"","justify-center":""}},[n("v-btn",{attrs:{round:"",color:"primary",outline:""}},[t._v("create menu")])],1)],1),n("div",{staticClass:"scroll-wrap",on:{click:function(e){return e.stopPropagation(),t.handleHideDetail(e)}}},[n("div",{staticClass:"inner-head"},[n("div",{staticClass:"title"},[t._v("我的任务")]),n("v-btn",{attrs:{small:"",fab:"",dark:"",color:"indigo"},on:{click:t.click}},[n("v-icon",{attrs:{dark:""}},[t._v("add")])],1)],1),n("v-card",{class:{slider:t.slider}},[n("v-list",{attrs:{"two-line":"",subheader:""}},t._l(t.items,function(e){return n("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:function(n){return n.stopPropagation(),t.handleShowDetail(e)}}},[n("v-list-tile-avatar",[n("v-icon",{class:[e.iconClass]},[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",{attrs:{title:e.title}},[t._v(t._s(e.title))]),n("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("star")])],1)],1)],1)}),1)],1)],1),n("v-card",{staticClass:"task-detail",class:{hidetaskdetail:t.detailStatus}},[n("div",{staticClass:"toolbar"},[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:t.detail.iconClass}},[n("v-icon",{attrs:{dark:""}},[t._v(t._s(t.detail.icon))])],1),n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.detail.title))])])],1),n("div",{staticClass:"content-wrap"},[n("div",{staticClass:"content"},[n("v-card",[n("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/ali.png",height:"300px"}},[n("v-layout",{attrs:{column:"","fill-height":""}},[n("v-card-title",[n("v-btn",{attrs:{dark:"",icon:""}},[n("v-icon",[t._v("chevron_left")])],1),n("v-spacer"),n("v-btn",{staticClass:"mr-3",attrs:{dark:"",icon:""}},[n("v-icon",[t._v("edit")])],1),n("v-btn",{attrs:{dark:"",icon:""}},[n("v-icon",[t._v("more_vert")])],1)],1),n("v-spacer"),n("v-card-title",{staticClass:"white--text pl-5 pt-5"},[n("div",{staticClass:"display-1 pl-5 pt-5"},[t._v("Ali Conners")])])],1)],1),n("v-list",{attrs:{"two-line":""}},[n("v-list-tile",{on:{click:t.click}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"indigo"}},[t._v("phone")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("(650) 555-1234")]),n("v-list-tile-sub-title",[t._v("Mobile")])],1),n("v-list-tile-action",[n("v-icon",[t._v("chat")])],1)],1),n("v-list-tile",{on:{click:t.click}},[n("v-list-tile-action"),n("v-list-tile-content",[n("v-list-tile-title",[t._v("(323) 555-6789")]),n("v-list-tile-sub-title",[t._v("Work")])],1),n("v-list-tile-action",[n("v-icon",[t._v("chat")])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-tile",{on:{click:t.click}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"indigo"}},[t._v("mail")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("aliconnors@example.com")]),n("v-list-tile-sub-title",[t._v("Personal")])],1)],1),n("v-list-tile",{on:{click:t.click}},[n("v-list-tile-action"),n("v-list-tile-content",[n("v-list-tile-title",[t._v("ali_connors@example.com")]),n("v-list-tile-sub-title",[t._v("Work")])],1)],1),n("v-divider",{attrs:{inset:""}}),n("v-list-tile",{on:{click:t.click}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"indigo"}},[t._v("location_on")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("1400 Main Street")]),n("v-list-tile-sub-title",[t._v("Orlando, FL 79938")])],1)],1)],1)],1),n("h1",[t._v("111")])],1)])])],1)},i=[],l=n("4f45"),r=(n("c29e"),{data:function(){return{menu:[{action:"move_to_inbox",title:"Inbox"},{action:"send",title:"Sent"},{action:"delete",title:"Trash"},{action:"report",title:"Spam"},{divider:!0},{header:"Labels"},{action:"label",title:"Family"},{action:"label",title:"Friends"},{action:"label",title:"Work"}],items:[{icon:"folder",iconClass:"grey lighten-1 white--text",title:"Photos task",subtitle:"Jan 9, 2014"},{icon:"folder",iconClass:"grey lighten-1 white--text",title:"Recipes",subtitle:"Jan 17, 2014"},{icon:"folder",iconClass:"grey lighten-1 white--text",title:"Work",subtitle:"Jan 28, 2014"},{icon:"assignment",iconClass:"blue white--text",title:"Vacation itinerary",subtitle:"Jan 20, 2014"},{icon:"call_to_action",iconClass:"amber white--text",title:"Kitchen remodel",subtitle:"Jan 10, 2014"}],slider:!0,detailStatus:!0,detail:{title:"title"}}},computed:{isLogin:function(){return this.$store.state.isLogin}},mounted:function(){var t=this;Object(l["setTimeout"])(function(){t.slider=!1},100)},methods:{click:function(){},handleHideDetail:function(){this.detailStatus=!0},handleShowDetail:function(t){this.detail=t,this.detailStatus=!1}}}),s=r,o=(n("5066"),n("17cc")),c=Object(o["a"])(s,a,i,!1,null,"e684c348",null);e["default"]=c.exports},d415:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("文件")])])}],l=n("17cc"),r={},s=Object(l["a"])(r,a,i,!1,null,null,null);e["default"]=s.exports},de8a:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var a,i=1,l={},r=!1,s=t.document,o=Object.getPrototypeOf&&Object.getPrototypeOf(t);o=o&&o.setTimeout?o:t,"[object process]"==={}.toString.call(t.process)?f():m()?p():t.MessageChannel?h():s&&"onreadystatechange"in s.createElement("script")?y():k(),o.setImmediate=c,o.clearImmediate=u}function c(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return l[i]=r,a(i),i++}function u(t){delete l[t]}function d(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(n,a);break}}function v(t){if(r)setTimeout(v,0,t);else{var e=l[t];if(e){r=!0;try{d(e)}finally{u(t),r=!1}}}}function f(){a=function(t){e.nextTick(function(){v(t)})}}function m(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function p(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&v(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}function h(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;v(e)},a=function(e){t.port2.postMessage(e)}}function y(){var t=s.documentElement;a=function(e){var n=s.createElement("script");n.onreadystatechange=function(){v(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function k(){a=function(t){setTimeout(v,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("66fa"),n("4c39"))},f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],l=n("17cc"),r={},s=Object(l["a"])(r,a,i,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=login.bf1ab7ce.js.map