(this.webpackJsonpspeechrecog=this.webpackJsonpspeechrecog||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),i=(n(13),n(7)),l=n(1),s=n(2),d=n(4),u=n(3);n(14);var m=function(e){var t=e.onRouteChange;return e.isSignedIn?a.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},a.a.createElement("p",{onClick:function(){return t("signout")},className:"f4 link dim white underline pa3 pointer "}," Sign Out ")):a.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},a.a.createElement("p",{onClick:function(){return t("signin")},className:"f4 link dim white underline pa3 pointer "}," Sign In "),a.a.createElement("p",{onClick:function(){return t("register")},className:"f4 link dim white underline pa3 pointer "}," Register"))};n(15);var p=function(e){var t=e.mic,n=e.record;return a.a.createElement("div",null,a.a.createElement("p",{className:"f3 white"},"Press the button to start recording"),a.a.createElement("div",{className:"center pa2"},a.a.createElement("button",{type:"button",id:"mic",onClick:t},"Get Microphone"),a.a.createElement("button",{type:"button",id:"record",onClick:n,hidden:!0},"Record"),a.a.createElement("li",{id:"clips"},a.a.createElement("audio",{id:"audio_clip"}),a.a.createElement("a",{src:"",id:"audio_tag"}," "))))};var g=function(){return a.a.createElement("div",{className:"center ma"},a.a.createElement("textarea",{id:"textoutput",rows:"4",cols:"100"}))},h=(a.a.Component,a.a.Component,function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).analyzeResponse=function(e){var t=document.getElementById("textoutput");if(0!==e.length){var n=[];e.forEach((function(e){return n.push(e.alternatives[0].transcript)})),t.innerText=n.toString(),console.log(n)}},e.renderRecording=function(t){var n=URL.createObjectURL(t,e.state.mimeType),r=document.getElementById("audio_clip"),a=document.getElementById("audio_tag");a.setAttribute("href",n);var o=new Date;a.setAttribute("download","recording-".concat(o.getFullYear(),"-").concat((o.getMonth()+1).toString().padStart(2,"0"),"-").concat(o.getDay().toString().padStart(2,"0"),"--").concat(o.getHours().toString().padStart(2,"0"),"-").concat(o.getMinutes().toString().padStart(2,"0"),"-").concat(o.getSeconds().toString().padStart(2,"0"),".webm")),a.innerText="Download",r.setAttribute("src",n),r.setAttribute("controls","controls");var c=new FormData;c.append("myFile",t),fetch("https://speech-recog-api.herokuapp.com/audio",{method:"POST",body:c}).then((function(e){return e.json()})).then((function(t){return e.analyzeResponse(t.result.results)})).catch((function(e){return console.log(e)}))},e.record=function(){var t=document.getElementById("record");"Record"===t.innerText?(t.style.background="red",t.style.color="black",t.innerText="Stop",e.state.recorder.start(),console.log("recorder started")):(t.style.background="black",t.style.color="red",t.innerText="Record",e.state.recorder.stop(),console.log("recorder stopped")),e.state.recorder.ondataavailable=function(t){return e.setState({chunks:[].concat(Object(i.a)(e.state.chunks),[t.data])})},e.state.recorder.onstop=function(){var t=new Blob(e.state.chunks,{type:e.state.mimeType});e.renderRecording(t),e.setState({chunks:[]})}},e.mic=function(){var t=document.getElementById("mic"),n=document.getElementById("record");t.setAttribute("hidden","hidden"),n.removeAttribute("hidden");navigator.mediaDevices.getUserMedia({audio:!0}).then((function(t){e.setState({recorder:new MediaRecorder(t)})}))},e.state={recorder:"",chunks:[],mimeType:"audio/webm;codecs=vp9"},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,null),a.a.createElement("div",null,a.a.createElement(p,{mic:this.mic,record:this.record}),a.a.createElement(g,null)))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.1ab97239.chunk.js.map