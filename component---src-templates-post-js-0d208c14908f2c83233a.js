webpackJsonp([0xb1abc741118f],{223:function(e,t,n){var r,a;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===a)for(var l in r)u.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}var u={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],a=function(){return n}.apply(t,r),!(void 0!==a&&(e.exports=a)))}()},305:function(e,t){},369:function(e,t,n){function r(e){return function t(n){return 0===arguments.length||a(n)?t:e.apply(this,arguments)}}var a=n(160);e.exports=r},370:function(e,t,n){function r(e){return function t(n,r){switch(arguments.length){case 0:return t;case 1:return u(n)?t:a(function(t){return e(n,t)});default:return u(n)&&u(r)?t:u(n)?a(function(t){return e(t,r)}):u(r)?a(function(t){return e(n,t)}):e(n,r)}}}var a=n(369),u=n(160);e.exports=r},160:function(e,t){function n(e){return null!=e&&"object"==typeof e&&e["@@functional/placeholder"]===!0}e.exports=n},371:function(e,t,n){var r=n(370),a=r(function(e,t){for(var n=t,r=0;r<e.length;){if(null==n)return;n=n[e[r]],r+=1}return n});e.exports=a},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=n(2),u=r(a),l=n(223),o=(r(l),n(24)),f=r(o),c=n(371),i=r(c);n(305);var s=n(304),d=r(s),p=(0,i.default)(["data","markdownRemark"]),v=(0,i.default)(["pathContext"]),m=function(e){var t=e.prev,n=e.next;return u.default.createElement("div",{className:d.default["post-nav"]},t&&u.default.createElement(f.default,{to:"/"+t.fields.slug},"上一篇：",t.frontmatter.title),n&&u.default.createElement(f.default,{to:"/"+n.fields.slug},"下一篇：",n.frontmatter.title))};t.default=function(e){var t=p(e),n=v(e),r=n.next,a=n.prev;return u.default.createElement("div",null,u.default.createElement("header",{className:"article-header"},u.default.createElement("h1",null,t.frontmatter.title)),u.default.createElement("div",{className:"article-content",dangerouslySetInnerHTML:{__html:t.html}}),u.default.createElement(m,{prev:a,next:r}))};t.query="** extracted graphql fragment **"},304:function(e,t){e.exports={"post-nav":"src-templates----post-module---post-nav---1-5Ux"}}});
//# sourceMappingURL=component---src-templates-post-js-0d208c14908f2c83233a.js.map