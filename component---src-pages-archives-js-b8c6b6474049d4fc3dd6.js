webpackJsonp([0x61134f733b1f],{209:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=r(2),l=a(n),u=r(24),d=a(u),f=function(e){var t=e.data;console.log(t);var r=t.allMarkdownRemark.edges,a=Array.from(new Set(r.map(function(e){var t=e.node;return t.frontmatter.date.split("-")[0]}))),n=a.map(function(e){return{year:e,edges:r.filter(function(t){var r=t.node;return r.frontmatter.date.includes(e)})}});return l.default.createElement("div",null,n.map(function(e){var t=e.year,r=e.edges;return l.default.createElement("div",{key:t},l.default.createElement("h2",null,t),l.default.createElement("ul",null,r.map(function(e){var t=e.node;return l.default.createElement("li",{key:t.id},l.default.createElement("span",{style:{marginRight:8}},t.frontmatter.date),l.default.createElement(d.default,{to:t.fields.slug},t.frontmatter.title))})))}))};t.default=f;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-archives-js-b8c6b6474049d4fc3dd6.js.map