(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{357:function(t,e,n){"use strict";(function(t){var r=n(13),c=(n(62),n(89)),o=n.n(c);e.a={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.params,n.next=3,o.a.get("https://logtara.microcms.io/api/v1/blog/".concat(r.slug),{headers:{"X-MICROCMS-API-KEY":t.env.API_KEY}});case 3:return c=n.sent,data=c.data,n.abrupt("return",data);case 6:case"end":return n.stop()}}),n)})))()}}}).call(this,n(155))},449:function(t,e,n){"use strict";n.r(e);var r=n(357).a,c=n(15),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main page-articles"},[n("div",{staticClass:"bg-white py-14 px-5 mb-8"},[n("p",{staticClass:"publishedAt text-center text-bg mb-8"},[t._v(t._s(t.publishedAt))]),t._v(" "),n("h1",{staticClass:"title text-center mb-10"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.contents,(function(content){return n("div",{key:content.id,staticClass:"mb-5 md:mb-0"},[n("img",{staticClass:"ogimage",attrs:{src:""+content.ogimage.url,alt:""}})])})),t._v(" "),n("div",{staticClass:"container lg:px-12"},[n("div",{staticClass:"post",domProps:{innerHTML:t._s(t.body)}})])],2)])}),[],!1,null,"b5aecf32",null);e.default=component.exports}}]);