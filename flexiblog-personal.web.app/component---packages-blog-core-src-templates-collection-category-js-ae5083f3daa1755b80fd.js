(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8vB4":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("cxan"),c=n("ERkP"),o=n.n(c),i=n("O8Ib"),a=n("SXCM"),l=n("uQ5Q"),s=n("lE8a"),u=n("Lisz"),d=n("F0xQ"),b=n("IwSE"),f=n("l1C2"),p=function(t){var e=t.data,n=e.posts,p=e.collectionInfo,O=Object(c.useContext)(i.a);return Object(f.c)(o.a.Fragment,null,Object(f.c)(b.a,{title:p.name}),Object(f.c)(d.a,null),Object(f.c)(a.e,{effectProps:{effect:"fadeInDown"}},Object(f.c)(l.a,{header:p.name,subheader:p.title,running:p.description,totalCount:n.totalCount})),Object(f.c)(d.a,null),Object(f.c)(a.e,null,Object(f.c)(a.b,null,n.nodes&&Object(f.c)(u.a,{nodes:n.nodes,variant:["horizontal-md","vertical"],columns:[1,2,3,3],omitCategory:O.pageContext&&"category"===O.pageContext.collectionType}))),Object(f.c)(d.a,null),Object(f.c)(a.c,null,Object(f.c)(s.a,Object(r.a)({},n.pageInfo,p))))}},A8Si:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return c}));var r=n("8vB4");e.default=r.a;var c="548613673"},Lisz:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var r=n("cxan"),c=n("+wNj"),o=n("ERkP"),i=n.n(o),a=n("pHTu"),l=n("F+z2"),s=n("EGpQ"),u=n("zjfJ"),d=n("oj0F"),b=n("HuFc"),f=n("T8kG"),p=(n("bcPb"),n("xXcP"),{slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{display:["none","block"],textAlign:"center",width:"auto",top:5,left:4,p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}}),O=n("+Cos"),j=n("l1C2");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=Object(O.a)((function(){return n.e(20).then(n.t.bind(null,"qnec",7))})),m=i.a.forwardRef((function(t,e){var n=t.columns,c=t.slidesToScroll,o=t.smoothAutoScroll,i=t.autoPlay,l=t.autoplaySpeed,s=t.fade,u=t.dots,O=t.arrows,g=t.centerMode,m=t.centerPadding,k=t.controlPosition,w=t.beforeChange,y=t.children,P=Object(d.e)(),x={slidesToScroll:1,autoplay:!0,cssEase:"linear"},S={centerMode:!s,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!u||!s)},C=P.theme.breakpoints.map((function(t,e){var r=n[e>=n.length?n.length-1:e],o=c[e>=c.length?c.length-1:e];return{breakpoint:parseInt(t),settings:v({slidesToShow:r,slidesToScroll:o},0===e?S:{})}})),T={ref:e,beforeChange:w,slidesToShow:n[n.length-1],slidesToScroll:c[c.length-1],speed:800,dots:u,arrows:O,centerMode:g,centerPadding:m,infinite:!0,cssEase:s?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:s,responsive:C,css:Object(b.a)(v(v(v(v({},s?p.fade:p.slide),"bottom"===k&&p.controlBottom),"center"===k&&p.controlCenter),"over"===k&&p.controlOver)),prevArrow:Object(j.c)(a.i,{sx:p.arrowPrev},Object(j.c)(f.c,null)),nextArrow:Object(j.c)(a.i,{sx:p.arrowNext},Object(j.c)(f.d,null))};o&&(T=v(v(v({},T),x),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!o&&i&&(T=v(v(v({},T),x),{},{speed:300,autoplaySpeed:l}));var E=y.slice(0,n[n.length-1]);return Object(j.c)(h,Object(r.a)({},T,{fallback:E}),y)})),k=m;m.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var w=n("kJqS"),y=i.a.forwardRef((function(t,e){var n=t.nodes,o=t.variant,i=t.title,u=t.withTitleLink,d=t.limit,b=t.skip,f=t.distinct,p=t.slider,O=t.aside,g=t.asNavFor,v=t.loading,h=Object(c.a)(t,["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"]),m=Object(l.g)(n,{distinct:f,limit:d,skip:b});if(!m||!m.length)return null;var y=u?m[0].category&&m[0].category.slug:"",P=i&&""+Object(l.e)(m.map((function(t){return t.id})).join()),x=Object(l.a)(p?"lists.cards.slider":"lists.cards.fixed",o),S=function(t){g&&g.current&&(g.current.slickPause(),g.current.slickGoTo(t))},C=m.map((function(e,n){return Object(j.c)(w.a,Object(r.a)({key:e.id,variant:o,onMouseOver:function(){return S(n)},onFocus:function(){return S(n)},loading:t.fade?0===n?v:void 0:v},e,h))})),T=function(){return Object(j.c)(a.b,{sx:{variant:x}},p?Object(j.c)(k,Object(r.a)({ref:e},h),C):C)};return i?Object(j.c)(s.a,{title:i,titleLink:y,key:P,aside:O},Object(j.c)(T,null)):Object(j.c)(T,null)})),P=y;y.defaultProps={variant:"vertical",columns:[1],aside:!1}},bcPb:function(t,e,n){},lE8a:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("zjfJ"),c=(n("ERkP"),n("Wbzz")),o=n("pHTu"),i=n("T8kG"),a=function(t){return t.replace(/\/*$/,"/")},l=n("l1C2");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={wrapper:{justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"full",bg:"contentBg",maxWidth:["none",500],mx:"auto",p:1},item:{width:"1/3"},number:{py:2},button:{minWidth:"full"}},b=function(t){var e=t.currentPage,n=t.pageCount,r=t.hasPreviousPage,s=t.hasNextPage,b=t.basePath,f=void 0===b?"":b,p=t.slug;if(!s&&!r)return"";var O=a(f+(void 0===p?"":p)),j=a(O+"page"),g=e>=3?""+j+(e-1):O,v=""+j+(e+1);return Object(l.c)(o.g,{sx:d.wrapper},Object(l.c)(o.b,{sx:d.item},r&&Object(l.c)(o.c,{variant:"mute",as:c.Link,to:g,sx:d.button},Object(l.c)(i.c,null),"Previous")),Object(l.c)(o.b,{sx:u(u({},d.item),d.number)},"Page ",Object(l.c)("strong",null,e)," of ",Object(l.c)("strong",null,n)),Object(l.c)(o.b,{sx:d.item},s&&Object(l.c)(o.c,{variant:"dark",as:c.Link,to:v,sx:d.button},"Next",Object(l.c)(i.d,null))))}},uQ5Q:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("ERkP");var r=n("pHTu"),c=n("l1C2"),o={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},i=function(t){var e=t.header,n=t.subheader,i=t.running,a=t.totalCount;return Object(c.c)("div",null,Object(c.c)(r.h,{variant:"h1"},e," ",a&&Object(c.c)(r.a,{variant:"tag-white",sx:o.count}," ",a)),n&&Object(c.c)(r.p,{variant:"h3",sx:o.subheader},n),i&&Object(c.c)(r.p,{variant:"h4",sx:o.runninghead},i))}},xXcP:function(t,e,n){}}]);
//# sourceMappingURL=component---packages-blog-core-src-templates-collection-category-js-ae5083f3daa1755b80fd.js.map