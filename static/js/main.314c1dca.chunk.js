(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),c=n.n(r),i=n(8),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(caches.open("workbox-precache-v2-https://mikr13.github.io/RoboFriends/").then(function(e){return e.addAll(["https://jsonplaceholder.typicode.com/users","RoboFriends/favicon.ico","RoboFriends/favicon-32x32.png","RoboFriends/favicon-16x16.png"])}),console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=n(3),h=n(17),d={search:""},b={robots:[],isPending:!1,error:""},m=[];m.push(h.a);var p=Object(u.c)({searchARobot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{search:t.payload});default:return e}},requestRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),f=(n(27),n(28),n(5)),g=n(6),E=n(9),v=n(7),w=n(10),R=(n(29),function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(E.a)(this,Object(v.a)(t).call(this,e))).state={hasErr:!1},n}return Object(w.a)(t,e),Object(g.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasErr:!0})}},{key:"render",value:function(){return this.state.hasErr?a.a.createElement("div",null,a.a.createElement("h1",{className:"tc f1 lh-copy"},"Ooops. That didn't work.")):this.props.children}}]),t}(o.Component)),y=(n(30),function(e){var t=e.searchChange;return a.a.createElement("div",{className:"tc pa2"},a.a.createElement("label",{htmlFor:"searchrobot",className:"visuallyhidden"},"SearchRobot"),a.a.createElement("input",{className:"pa3 mb4 br-pill ba b--light-green bg-washed-green","aria-label":"searchrobot",type:"search",id:"searchrobot",name:"searchrobot",placeholder:"search a cool robot",onChange:t}))}),O=function(e){var t=Math.floor(3*Math.random())+1,n=e.robots.map(function(e){return a.a.createElement("div",{key:e.id,className:"bg-washed-green dib br3 pa2 mv3 mh2 grow bw1 shadow-5 bg-animate hover-bg-light-green"},a.a.createElement("img",{className:"w-100",alt:e.name,src:"https://robohash.org/".concat(e.id,"?size=300x300&set=set").concat(t)}),a.a.createElement("div",null,a.a.createElement("h2",null,e.name.slice(0,20)),a.a.createElement("p",null,e.email),a.a.createElement("p",null,a.a.createElement("b",null,e.username))))});return a.a.createElement("div",{className:"w-90 tc",style:{margin:"0 auto"}},n)},S=(n(31),function(e){return a.a.createElement("div",{className:"scroll"},e.children)}),j=function(e){return e.isPending?a.a.createElement("h1",{className:"tc f-subheadline lh-copy"},e.title):a.a.createElement("h1",{className:"tc f2 lh-copy"},e.title)},C=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(E.a)(this,Object(v.a)(t).call(this))).state={title:"Welcome to RoboFriends",loading:"Waiting for all the cool robots to come here...."},e}return Object(w.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.title,o=this.props,r=o.robots,c=o.search,i=o.onSearchChange,s=o.isPending,l=r.filter(function(e){return e.name.toLowerCase().includes(c.toLowerCase())});return s?a.a.createElement("div",{className:"pa2"},a.a.createElement(j,{isPending:s,title:n}),a.a.createElement("h1",{className:"tc f3 mt6 pa4"},t)):a.a.createElement("div",{className:"pa2"},a.a.createElement(R,null,a.a.createElement(j,{isPending:s,title:n}),a.a.createElement(y,{searchChange:i}),a.a.createElement(S,null,a.a.createElement(O,{robots:l}))))}}]),t}(o.Component),N=Object(i.b)(function(e){return{search:e.searchARobot.search,robots:e.requestRobotsReducer.robots,isPending:e.requestRobotsReducer.isPending,error:e.requestRobotsReducer.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(C),k=Object(u.d)(p,u.a.apply(void 0,m));c.a.render(a.a.createElement(i.a,{store:k},a.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RoboFriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/RoboFriends","/service-worker.js");s?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):l(t,e)})}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.314c1dca.chunk.js.map