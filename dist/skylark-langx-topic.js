/**
 * skylark-langx-topic - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(n,r){var e=r.define,require=r.require,t="function"==typeof e&&e.amd,o=!t&&"undefined"!=typeof exports;if(!t&&!e){var i={};e=r.define=function(n,r,e){"function"==typeof e?(i[n]={factory:e,deps:r.map(function(r){return function(n,r){if("."!==n[0])return n;var e=r.split("/"),t=n.split("/");e.pop();for(var o=0;o<t.length;o++)"."!=t[o]&&(".."==t[o]?e.pop():e.push(t[o]));return e.join("/")}(r,n)}),resolved:!1,exports:null},require(n)):i[n]={factory:null,resolved:!0,exports:e}},require=r.require=function(n){if(!i.hasOwnProperty(n))throw new Error("Module "+n+" has not been defined");var module=i[n];if(!module.resolved){var e=[];module.deps.forEach(function(n){e.push(require(n))}),module.exports=module.factory.apply(r,e)||null,module.resolved=!0}return module.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(n,require){n("skylark-langx-topic/topic",["skylark-langx-ns","skylark-langx-events"],function(n,r){var e=new r.Evented;return n.attach("langx.topic",{publish:function(n,r,t){var o=[].slice.call(arguments,1);return e.trigger({type:n,data:o})},subscribe:function(n,r,t){var o=function(n){r.apply(t,n.data)};return e.on(n,o),{remove:function(){e.off(n,o)}}}})}),n("skylark-langx-topic/main",["./topic"],function(n){return n}),n("skylark-langx-topic",["skylark-langx-topic/main"],function(n){return n})}(e),!t){var a=require("skylark-langx-ns");o?module.exports=a:r.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-topic.js.map
