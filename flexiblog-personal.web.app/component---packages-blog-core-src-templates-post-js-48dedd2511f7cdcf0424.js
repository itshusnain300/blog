(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0G7+":function(t,e,r){"use strict";var n=r("cxan"),c=r("+wNj"),o=(r("ERkP"),r("pHTu")),i=r("T8kG"),a=r("Wbzz"),l=r("EPps"),s=r("l1C2"),u={button:{vertical:{variant:"cards.primary",display:"flex",alignItems:"center",textAlign:"initial",overflow:"hidden",mb:3,p:0,pr:2,svg:{color:"omegaDark",verticalAlign:"middle",size:"icon.xs"},":hover":{svg:{color:"white"},"div:first-of-type":{bg:"alpha"}}},horizontal:{variant:"cards.interactive",p:0,svg:{color:"alpha",size:"icon.sm"},":hover":{svg:{color:"omegaDark"}}}},icon:{vertical:{display:["flex","none","flex"],transition:"all 250ms ease",alignItems:"center",justifyContent:"center",alignSelf:"stretch",bg:"omegaLight",width:70},horizontal:{display:["block","none","block"],boxSizing:"content-box",transition:"all 250ms ease",borderRadius:"bottom",width:"1/3",height:"icon.sm",mx:"auto",pt:3}},text:{flex:"auto",color:"omegaDark",whiteSpace:"nowrap",p:3,m:0}},b=function(t){var e=t.variant,r=t.name,n=t.Icon,c=t.iconPath,i=t.iconColor,b=t.to;return Object(s.c)(o.c,{variant:"none",as:b&&a.Link,to:b,sx:u.button[e]},(n||c)&&Object(s.c)(o.b,{sx:u.icon[e]},c&&Object(s.c)(l.a,{src:c}),n&&Object(s.c)(n,{color:i})),Object(s.c)(o.h,{variant:"h4",as:"h4",sx:u.text},r))},p=b;b.defaultProps={variant:"horizontal",number:void 0};var f=r("EGpQ"),d={horizontal:{display:"flex",justifyContent:["flex-start","space-evenly"],flexWrap:"nowrap",overflowX:"auto",width:"auto",scrollBehavior:"smooth",m:-2,a:{flex:1,minWidth:["1/3","auto"],m:[3,2]}}},O=function(t){var e=t.variant,r=t.categories,a=Object(c.a)(t,["variant","categories"]);return Object(s.c)(f.a,Object(n.a)({aside:"vertical"===e,title:"Topics"},a),Object(s.c)(o.b,{sx:d[e]},r&&r.map((function(t){var r=t.id,n=t.name,c=t.slug,o=t.totalCount,a=t.icon,l={key:r,name:n,number:o,to:c,iconPath:a,Icon:!a&&i.a,variant:e};return 0!==o&&Object(s.c)(p,l)}))))};e.a=O;O.defaultProps={variant:"vertical"}},"0yTM":function(t,e,r){var n=r("M6MO");t.exports={MDXRenderer:n}},"695J":function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},Lisz:function(t,e,r){"use strict";r.d(e,"a",(function(){return k}));var n=r("cxan"),c=r("+wNj"),o=r("ERkP"),i=r.n(o),a=r("pHTu"),l=r("F+z2"),s=r("EGpQ"),u=r("zjfJ"),b=r("oj0F"),p=r("HuFc"),f=r("T8kG"),d=(r("bcPb"),r("xXcP"),{slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{display:["none","block"],textAlign:"center",width:"auto",top:5,left:4,p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}}),O=r("+Cos"),j=r("l1C2");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){Object(u.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=Object(O.a)((function(){return r.e(20).then(r.t.bind(null,"qnec",7))})),h=i.a.forwardRef((function(t,e){var r=t.columns,c=t.slidesToScroll,o=t.smoothAutoScroll,i=t.autoPlay,l=t.autoplaySpeed,s=t.fade,u=t.dots,O=t.arrows,g=t.centerMode,h=t.centerPadding,y=t.controlPosition,x=t.beforeChange,w=t.children,k=Object(b.e)(),P={slidesToScroll:1,autoplay:!0,cssEase:"linear"},S={centerMode:!s,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!u||!s)},D=k.theme.breakpoints.map((function(t,e){var n=r[e>=r.length?r.length-1:e],o=c[e>=c.length?c.length-1:e];return{breakpoint:parseInt(t),settings:m({slidesToShow:n,slidesToScroll:o},0===e?S:{})}})),C={ref:e,beforeChange:x,slidesToShow:r[r.length-1],slidesToScroll:c[c.length-1],speed:800,dots:u,arrows:O,centerMode:g,centerPadding:h,infinite:!0,cssEase:s?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:s,responsive:D,css:Object(p.a)(m(m(m(m({},s?d.fade:d.slide),"bottom"===y&&d.controlBottom),"center"===y&&d.controlCenter),"over"===y&&d.controlOver)),prevArrow:Object(j.c)(a.i,{sx:d.arrowPrev},Object(j.c)(f.c,null)),nextArrow:Object(j.c)(a.i,{sx:d.arrowNext},Object(j.c)(f.d,null))};o&&(C=m(m(m({},C),P),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!o&&i&&(C=m(m(m({},C),P),{},{speed:300,autoplaySpeed:l}));var T=w.slice(0,r[r.length-1]);return Object(j.c)(v,Object(n.a)({},C,{fallback:T}),w)})),y=h;h.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var x=r("kJqS"),w=i.a.forwardRef((function(t,e){var r=t.nodes,o=t.variant,i=t.title,u=t.withTitleLink,b=t.limit,p=t.skip,f=t.distinct,d=t.slider,O=t.aside,g=t.asNavFor,m=t.loading,v=Object(c.a)(t,["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"]),h=Object(l.g)(r,{distinct:f,limit:b,skip:p});if(!h||!h.length)return null;var w=u?h[0].category&&h[0].category.slug:"",k=i&&""+Object(l.e)(h.map((function(t){return t.id})).join()),P=Object(l.a)(d?"lists.cards.slider":"lists.cards.fixed",o),S=function(t){g&&g.current&&(g.current.slickPause(),g.current.slickGoTo(t))},D=h.map((function(e,r){return Object(j.c)(x.a,Object(n.a)({key:e.id,variant:o,onMouseOver:function(){return S(r)},onFocus:function(){return S(r)},loading:t.fade?0===r?m:void 0:m},e,v))})),C=function(){return Object(j.c)(a.b,{sx:{variant:P}},d?Object(j.c)(y,Object(n.a)({ref:e},v),D):D)};return i?Object(j.c)(s.a,{title:i,titleLink:w,key:k,aside:O},Object(j.c)(C,null)):Object(j.c)(C,null)})),k=w;w.defaultProps={variant:"vertical",columns:[1],aside:!1}},M6MO:function(t,e,r){var n=r("rDK1"),c=r("RhWx"),o=r("KEM+"),i=r("LdEA");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=r("ERkP"),u=r("ZVZ0"),b=u.useMDXComponents,p=u.mdx,f=r("Amv9").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,o=t.children,a=i(t,["scope","components","children"]),u=b(r),d=f(e),O=s.useMemo((function(){if(!o)return null;var t=l({React:s,mdx:p},d),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(c(e),[""+o])).apply(void 0,[{}].concat(c(r)))}),[o,e]);return s.createElement(O,l({components:u},a))}},RhWx:function(t,e,r){var n=r("tGbD"),c=r("twbh"),o=r("peMk"),i=r("d8WC");t.exports=function(t){return n(t)||c(t)||o(t)||i()}},TcdR:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},bcPb:function(t,e,r){},d8WC:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},lM26:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return $}));var n=r("cxan"),c=r("fGyu"),o=r("+wNj"),i=r("ERkP"),a=r.n(i),l=r("pHTu"),s=r("SXCM"),u=r("Lisz"),b=r("F0xQ"),p=r("s3jK"),f=r("IwSE"),d=r("Wbzz"),O=r("krTA"),j=r("EGpQ"),g=r("VpWM"),m=r("Y4WG"),v=r("l1C2"),h={wrapper:{textAlign:"center"},avatarWrapper:{mb:4},title:{color:"omegaDark"}},y=function(t){var e=t.author,r=t.omitSocial,c=Object(o.a)(t,["author","omitSocial"]);return e?Object(v.c)(j.a,Object(n.a)({aside:!0,title:"The Author"},c),Object(v.c)(l.d,{variant:"paper"},Object(v.c)(l.b,{sx:h.wrapper},e.thumbnail&&Object(v.c)(l.b,{sx:h.avatarWrapper},Object(v.c)(l.l,{as:d.Link,to:e.slug,"aria-label":e.name},Object(v.c)(g.a,{avatar:e.thumbnail,withPattern:!0}))),Object(v.c)(l.l,{as:d.Link,to:e.slug},Object(v.c)(l.h,{variant:"h3"},e.name)),Object(v.c)(l.h,{variant:"h4",sx:h.title},e.title),!r&&e.social&&Object(v.c)(O.a,{variant:"horizontal",items:Object(m.a)(e.social),iconOnly:!0})))):""},x=r("0G7+"),w=r("zjfJ"),k=r("fLID"),P=r("uQ5Q");function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){Object(w.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var C={item:{display:"inline-block"}},T=function(t){var e=t.title,r=t.author,n=t.date,c=t.timeToRead,o=t.category,i=Object(v.c)(k.a,null,r&&r.slug&&Object(v.c)(l.p,{sx:C.item},"By ",Object(v.c)(l.l,{variant:"mute",as:d.Link,to:r.slug},Object(v.c)("strong",null,r.name))),o&&o.slug&&Object(v.c)(l.p,{sx:C.item},"Published in ",Object(v.c)(l.l,{variant:"mute",as:d.Link,to:o.slug},Object(v.c)("strong",null,o.name))),n&&Object(v.c)(l.p,{sx:C.item},n),c&&Object(v.c)(l.p,{sx:D(D({},C.item),{},{color:"error"})},Object(v.c)("strong",null,c," min read")));return Object(v.c)(P.a,{header:e,running:i})},A=r("6c1n"),E=r.n(A),R=r("HuFc");function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){Object(w.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var L={regular:{minHeight:"23rem",bg:"omegaLighter",borderRadius:"lg"},wide:{borderRadius:"lg"},full:{bg:"omegaLighter"},inCard:{bg:"omegaLighter",borderRadius:function(t){return t.radii.lg+" "+t.radii.lg+" 0 0"},mt:-4,mx:-4},fullImg:{position:"static",display:"block"}},W=function(t){var e=t.thumbnail,r=t.wide,n=t.full,c=t.inCard;if(!e||!e.hero)return null;var o=(r?"wide":n&&"full")||"regular";return Object(v.c)(a.a.Fragment,null,Object(v.c)(E.a,{fluid:e.hero,css:Object(R.a)(z(z({},L[o]),c&&L.inCard)),imgStyle:("wide"===o||"full"===o)&&L.fullImg}),Object(v.c)(b.a,{space:3}))},I=r("0yTM"),Q=function(t){var e=t.body;return Object(v.c)(I.MDXRenderer,null,e)},F={wrapper:{alignItems:"center"},heading:{color:"omegaDark",mr:3,mb:0}},G=function(t){var e=t.tags;return e&&e.length>0?Object(v.c)(l.g,{sx:F.wrapper},Object(v.c)(l.h,{variant:"h5",sx:F.heading},"Tags"),Object(v.c)(l.b,{variant:"lists.badges"},e.map((function(t){var e=t.id,r=t.name,n=t.slug;return Object(v.c)(l.a,{variant:"tag",key:e,as:d.Link,to:n},r)})))):null},X=r("+Cos"),H=Object(X.a)((function(){return r.e(21).then(r.bind(null,"kD/T"))})),J=Object(X.a)((function(){return r.e(25).then(r.bind(null,"kLCX"))})),B={flex:{alignItems:["flex-start","center"],justifyContent:"space-between",flexDirection:["column","row"],"& > div + div":{mt:[3,0],flexBasis:"1/2",justifyContent:"flex-end"}}},N=function(t){return Object(v.c)(l.b,null,Object(v.c)(l.f,null),Object(v.c)(l.g,{sx:B.flex},Object(v.c)(G,t),Object(v.c)(J,t)))};function K(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?K(Object(r),!0).forEach((function(e){Object(w.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var q={wrapper:{bg:"omegaLight",borderRadius:"bottom",color:"omegaDark",borderStyle:"solid",borderWidth:"md",borderColor:"contentBg",mx:-4,mb:-4,mt:4},flex:{flexWrap:"wrap",justifyContent:"space-between",p:4},item:{flexBasis:"50%"},next:{textAlign:"right"},guide:{mb:2}},U=function(t){var e=t.title,r=t.post;return Object(v.c)(a.a.Fragment,null,Object(v.c)(l.p,{sx:q.guide},e),Object(v.c)(l.h,{variant:"h4",as:d.Link,to:r.slug},r.title))},Z=function(t){var e=t.previous,r=t.next;return r||e?Object(v.c)(l.b,{sx:q.wrapper},Object(v.c)(l.g,{sx:q.flex},Object(v.c)(l.b,{sx:q.item},e&&Object(v.c)(U,{post:e,title:"Previous Article"})),Object(v.c)(l.b,{sx:_(_({},q.item),q.next)},r&&Object(v.c)(U,{post:r,title:"Next Article"})))):null},V=r("yxrj"),Y=function(t){var e=t.data,r=e.post,i=e.tagCategoryPosts,d=e.tagPosts,O=e.categoryPosts,j=e.previous,g=e.next,m=t.location,h=Object(o.a)(t,["data","location"]),w=[].concat(Object(c.a)(i?i.nodes:[]),Object(c.a)(d?d.nodes:[]),Object(c.a)(O?O.nodes:[])),k=h.pageContext,P=(k=void 0===k?{}:k).services,S=void 0===P?{}:P,D=k.siteUrl,C=Object(V.b)();return Object(v.c)(a.a.Fragment,null,Object(v.c)(f.a,Object(n.a)({},r,{siteUrl:D})),Object(v.c)(b.a,null),Object(v.c)(s.e,{effectProps:{effect:"fadeInDown"}},Object(v.c)(T,r)),Object(v.c)(b.a,null),Object(v.c)(s.e,{effectProps:{fraction:0}},Object(v.c)(s.b,null,Object(v.c)(l.d,{variant:"paper"},Object(v.c)(W,Object(n.a)({},r,{inCard:!0})),Object(v.c)(Q,r),Object(v.c)(N,Object(n.a)({},r,{location:m})),S.disqus&&Object(v.c)(H,r),Object(v.c)(Z,{previous:j,next:g}))),Object(v.c)(s.d,null,Object(v.c)(y,{author:r.author,omitTitle:!0}),Object(v.c)(b.a,null),Object(v.c)(x.a,{categories:C}),Object(v.c)(b.a,null),r.category&&Object(v.c)(p.a,null,Object(v.c)(u.a,{title:"Related Posts",nodes:w,variant:"horizontal-aside",omitMedia:!0,omitCategory:!0,limit:6,distinct:!0,aside:!0})))))},$=(e.default=Y,"3285764155")},peMk:function(t,e,r){var n=r("iQ7j");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},rDK1:function(t,e,r){var n=r("695J"),c=r("TcdR");function o(e,r,i){return c()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,r){var c=[null];c.push.apply(c,e);var o=new(Function.bind.apply(t,c));return r&&n(o,r.prototype),o},o.apply(null,arguments)}t.exports=o},s3jK:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("ERkP");var n=r("pHTu"),c=r("l1C2"),o=function(t){var e=t.children;return Object(c.c)(n.e,{variant:"sticky"},e)}},tGbD:function(t,e,r){var n=r("iQ7j");t.exports=function(t){if(Array.isArray(t))return n(t)}},twbh:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},uQ5Q:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("ERkP");var n=r("pHTu"),c=r("l1C2"),o={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},i=function(t){var e=t.header,r=t.subheader,i=t.running,a=t.totalCount;return Object(c.c)("div",null,Object(c.c)(n.h,{variant:"h1"},e," ",a&&Object(c.c)(n.a,{variant:"tag-white",sx:o.count}," ",a)),r&&Object(c.c)(n.p,{variant:"h3",sx:o.subheader},r),i&&Object(c.c)(n.p,{variant:"h4",sx:o.runninghead},i))}},xXcP:function(t,e,r){},yxrj:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return l})),r.d(e,"c",(function(){return u}));var n=r("Wbzz"),c=r("JZmP"),o=r.n(c),i=function(){var t=Object(n.useStaticQuery)(a).allArticleCategory;return t.nodes?o()(t.nodes,(function(t){return t.slug})):null},a="4235339838",l=function(){var t=Object(n.useStaticQuery)(s).allArticleAuthor;return t.nodes?o()(t.nodes,(function(t){return t.slug})):null},s="4240507859",u=function(){return Object(n.useStaticQuery)(b).allArticleTag.nodes||[]},b="2918496967"}}]);
//# sourceMappingURL=component---packages-blog-core-src-templates-post-js-48dedd2511f7cdcf0424.js.map