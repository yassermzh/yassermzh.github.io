(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{164:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(170),c=n(171),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(c.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=u;var l="1097489062"},166:function(t,e,n){"use strict";n.d(e,"b",function(){return d});var a=n(0),r=n.n(a),o=n(5),i=n.n(o),s=n(40),c=n.n(s);n.d(e,"a",function(){return c.a});n(168);var u=r.a.createContext({});function l(t){var e=t.staticQueryData,n=t.data,a=t.query,o=t.render,i=n?n.data:e[a]&&e[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,n=t.query,a=t.render,o=t.children;return r.a.createElement(u.Consumer,null,function(t){return r.a.createElement(l,{data:e,query:n,render:a||o,staticQueryData:t})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return u});var a=n(178),r=n.n(a),o=n(179),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var s=new r.a(i.a);var c=s.rhythm,u=s.scale},168:function(t,e,n){var a;t.exports=(a=n(169))&&a.default||a},169:function(t,e,n){"use strict";n.r(e);n(41);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),s=n(64),c=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=c},170:function(t,e,n){"use strict";n(41);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(166),c=n(167),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,r,i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(i.a.Component);e.a=u},171:function(t,e,n){"use strict";var a=n(172),r=n(0),o=n.n(r),i=n(5),s=n.n(i),c=n(180),u=n.n(c),l=n(166);function d(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,s=t.title;return o.a.createElement(l.b,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d;var p="1025518380"},172:function(t){t.exports={data:{site:{siteMetadata:{title:"My Notes",description:"Random topics about programming.",author:"Yasser Zadeh"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-201d2ca8a96c33344760.js.map