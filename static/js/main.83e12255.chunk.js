(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(4),s=n.n(c),u=n(2),o=(n(9),function(e){e.target.style.background="#8C693E"}),r=function(e){e.target.style.background="#a0d9d9"},d=n(0);function m(e){var t=e._value,n=e._handleClick,a=e._id,c=e._sound;return Object(d.jsxs)("div",{className:"drum-pad btn",onMouseOver:o,onMouseLeave:r,onClick:n,children:[Object(d.jsx)("audio",{id:a,children:Object(d.jsx)("source",{src:c,type:"audio/mp3"})}),t]})}var i=Object(a.createContext)(),l=function(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(),r=Object(u.a)(o,2),m={valueState:[c,s],soundState:[r[0],r[1]]};return Object(d.jsx)(i.Provider,{value:m,children:e.children})};n(11);function p(){var e=Object(a.useContext)(i).valueState,t=Object(u.a)(e,2),n=(t[0],t[1]),c=function(e){var t=document.getElementById(e);t.play();var n=t.getElementsByTagName("source")[0].src;s(n)},s=function(e){var t=e.split("/");n(t[t.length-1].split(".")[0].replace(/[-_]/g," "))};return Object(a.useEffect)((function(){!function(){var e=["Q","W","E","A","S","D","Z","X","C"];document.addEventListener("keydown",(function(t){e.indexOf(t.key.toUpperCase())>=0&&c(t.key.toUpperCase())}))}()}),[]),Object(d.jsx)("section",{id:"pad",children:[{value:"Q",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{value:"W",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{value:"E",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{value:"A",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{value:"S",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{value:"D",sound:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{value:"Z",sound:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{value:"X",sound:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{value:"C",sound:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}].map((function(e){return Object(d.jsx)("div",{className:"drum-pad",children:Object(d.jsx)(m,{_id:e.value,_sound:e.sound,_value:e.value,_handleClick:function(){return c(e.value)}})})}))})}n(12);function j(){var e=Object(a.useContext)(i).valueState,t=Object(u.a)(e,2),n=t[0];t[1];return Object(d.jsxs)("section",{id:"soundName",children:[Object(d.jsx)("h4",{children:"Sound's name"}),Object(d.jsx)("div",{id:"display",children:n})]})}n(13);function v(){return Object(d.jsxs)("section",{id:"drum-machine",children:[Object(d.jsx)(p,{}),Object(d.jsx)(j,{})]})}n(14);s.a.render(Object(d.jsx)(l,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.83e12255.chunk.js.map