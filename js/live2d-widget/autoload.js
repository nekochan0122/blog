"use strict";var live2d_path="/js/live2d-widget/";function loadExternalResource(s,a){return new Promise(function(e,t){var i;switch(a){case"css":(i=document.createElement("link")).rel="stylesheet",i.href=s;break;case"js":(i=document.createElement("script")).src=s}i&&(i.onload=function(){return e(s)},i.onerror=function(){return t(s)},document.head.appendChild(i))})}768<=screen.width&&Promise.all([loadExternalResource(live2d_path+"waifu.css","css"),loadExternalResource(live2d_path+"live2d.min.js","js"),loadExternalResource(live2d_path+"waifu-tips.js","js")]).then(function(){initWidget({waifuPath:live2d_path+"waifu-tips.json",apiPath:"https://api.zsq.im/live2d"})});