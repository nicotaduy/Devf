(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{0:function(e,t){},"1+KF":function(e,t,n){"use strict";n.r(t),n.d(t,"ReducerRegistry",(function(){return b}));var r=n("hfKm"),o=n.n(r),i=n("2Eek"),a=n.n(i),c=n("XoMD"),u=n.n(c),s=n("Jo+v"),l=n.n(s),f=n("4mXO"),p=n.n(f),d=n("pLtp"),h=n.n(d),v=n("vYYK"),m=n("0iUn"),g=n("sLSF");function y(e,t){var n=h()(e);if(p.a){var r=p()(e);t&&(r=r.filter((function(t){return l()(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):u.a?a()(e,u()(n)):y(Object(n)).forEach((function(t){o()(e,t,l()(n,t))}))}return e}var b=function(){function e(){Object(m.a)(this,e),this._emitChange=null,this._reducers={}}return Object(g.a)(e,[{key:"getReducers",value:function(){return E({},this._reducers)}},{key:"register",value:function(e,t){this._reducers=E({},this._reducers,Object(v.a)({},e,t));var n=this.getReducers();"function"===typeof this._emitChange&&this._emitChange(n)}},{key:"setChangeListener",value:function(e){this._emitChange=e}}]),e}(),S=new b;t.default=S},4:function(e,t,n){n("j36g"),n("74v/"),e.exports=n("nOHt")},"4kjc":function(e,t,n){"use strict";n.r(t);var r=n("UBq+");n.d(t,"GlobalHandlers",(function(){return r.a}));var o=n("wytX");n.d(t,"TryCatch",(function(){return o.a}));var i=n("/ZhC");n.d(t,"Breadcrumbs",(function(){return i.a}));var a=n("ZAf6");n.d(t,"LinkedErrors",(function(){return a.a}));var c=n("nmNn");n.d(t,"UserAgent",(function(){return c.a}))},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("Qetd"),o=n("/HRN"),i=n("WaGi"),a=n("ZDA2"),c=n("/+P4"),u=n("N9n2"),s=n("ln6h"),l=n("KI45");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=v,t.default=void 0;var f=l(n("q1tI")),p=n("g/15");function d(e){var t,n,r;return s.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.Component,n=e.ctx,o.next=3,s.awrap((0,p.loadGetInitialProps)(t,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}))}t.AppInitialProps=p.AppInitialProps;var h=function(e){function t(){return o(this,t),a(this,c(t).apply(this,arguments))}return u(t,e),i(t,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,o=e.pageProps,i=v(t);return f.default.createElement(n,r({},o,{url:i}))}}]),t}(f.default.Component);function v(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=h,h.origGetInitialProps=d,h.getInitialProps=d},ElcZ:function(e,t,n){},FkOY:function(e,t,n){},K6nX:function(e,t,n){"use strict";t.a={__schema:{types:[{kind:"UNION",name:"CurrentUserCtas",possibleTypes:[{name:"IntroduceYourselfCta"},{name:"AnswerToEarnCyclesCta"},{name:"CompleteProfileCta"}]},{kind:"UNION",name:"RepositoriesOutput",possibleTypes:[{name:"RepositoryConnection"},{name:"UserAuthProviderError"}]},{kind:"UNION",name:"ReplQueryOutput",possibleTypes:[{name:"Repl"},{name:"ReplRedirect"},{name:"SubscriptionExpiredError"}]},{kind:"UNION",name:"Notification",possibleTypes:[{name:"BasicNotification"},{name:"RepliedToPostNotification"},{name:"RepliedToCommentNotification"},{name:"MentionedInCommentNotification"},{name:"MentionedInPostNotification"},{name:"AnswerAcceptedNotification"},{name:"MultiplayerJoinedEmailNotification"},{name:"MultiplayerJoinedLinkNotification"},{name:"MultiplayerInvitedNotification"},{name:"MultiplayerOverlimitNotification"},{name:"WarningNotification"}]},{kind:"UNION",name:"CluiOutput",possibleTypes:[{name:"CluiSuccessOutput"},{name:"CluiMarkdownOutput"},{name:"CluiTableOutput"},{name:"CluiErrorOutput"}]},{kind:"UNION",name:"CouponQueryOutput",possibleTypes:[{name:"Coupon"},{name:"UserError"}]},{kind:"UNION",name:"DashboardItem",possibleTypes:[{name:"Repl"},{name:"ReplFolder"}]},{kind:"UNION",name:"SendUserVerificationEmailOutput",possibleTypes:[{name:"UserVerificationEmailSent"},{name:"UserVerificationAlreadyVerified"}]},{kind:"UNION",name:"UpdateUserOutput",possibleTypes:[{name:"CurrentUser"},{name:"UserError"}]},{kind:"UNION",name:"CreateReplOutput",possibleTypes:[{name:"Repl"},{name:"UserError"}]}]}}},ShKv:function(e,t,n){"use strict";t.a=function(e){return"CurrentUser"===e.__typename?"CurrentUser":e.__typename&&e.id?"".concat(e.__typename,":").concat(e.id+""):void 0}},TTl7:function(e,t,n){var r=n("hfKm"),o=n("2Eek"),i=n("XoMD"),a=n("Jo+v"),c=n("4mXO"),u=n("pLtp"),s=n("xHqa");function l(e,t){var n=u(e);if(c){var r=c(e);t&&(r=r.filter((function(t){return a(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):i?o(e,i(n)):l(Object(n)).forEach((function(t){r(e,t,a(n,t))}))}return e}var p,d=n("WSEr");d.init({dsn:"https://7a292604db4d4a84a4e2a7f4ea2e403f@sentry.repl.it/2",release:"a414daf",environment:"production",ignoreErrors:[/Error connecting to server/,/You are not authorized to perform this operation/,/is being indexed/,/asDocumentLinks/,/Language Client services has been overriden/,/Connection is disposed/,/Extension context invalidated/,/Blocked a frame with origin/,/Permission denied to access property "dispatchEvent" on cross-origin object/],beforeSend:function(e,t){if(!e.exception)return null;if(t&&t.originalException instanceof window.Event&&(e.extra||(e.extra={}),e.extra.isTrusted=t.originalException.isTrusted,e.extra.detail=t.originalException.detail,e.extra.type=t.originalException.type,e.extra.reason=t.originalException.reason,e.extra.message=t.originalException.message,t.originalException.constructor&&(e.extra.constructorname=t.originalException.constructor.name),t.originalException.toString&&(e.extra.tostringed=t.originalException.toString())),window.mobileEditor&&(e.tags=f({},e.tags,{mobileEditor:"true"})),t&&t.originalException&&"CustomSentryError"===t.originalException.name&&(t.originalException.extras&&(e.extra=f({},e.extra,{},t.originalException.extras)),t.originalException.tags&&(e.tags=f({},e.tags,{},t.originalException.tags))),e.exception.values&&e.exception.values[0]&&"ChunkLoadError"===e.exception.values[0].type&&(e.fingerprint=["{{ type }}"]),e.exception.values&&e.exception.values[0]&&e.exception.values[0].stacktrace)for(var n=e.exception.values[0].stacktrace.frames,r=0;r<n.length;r++){var o=n[r].function;if(o.match(/t\._updateHistory/)||o.match(/asMarkdownString/)||o.match(/this\.unexpectedErrorHandler/)||o.match(/_updateTokensUntilLine/)||o.match(/_assertNotDisposed/))return null}var i={mobile:window.mobileTaint||!1,anon:window.anonTaint||!1,multiplayer:window.multiplayerTaint||!1,disconnected:window.disconnectedTaint||!1,unexpecteddisconnect:window.unexpecteddisconnectTaint||!1,forked:window.forkedTaint||!1,ssred:window.ssredTaint||!1,inotified:window.inotifiedTaint||!1,navigated:window.navigatedTaint||!1};return e.tags=f({},e.tags,{},i),e}});var h=function(e){var t;(t=e.reason?e.reason:e.detail&&e.detail.reason?e.detail.reason:e)&&t!==p&&(p=t,d.captureException(t))};window.onunhandledrejection=h,window.addEventListener("unhandledrejection",h)},WSEr:function(e,t,n){"use strict";n.r(t),n.d(t,"Integrations",(function(){return E}));var r=n("mrSG"),o=n("PKZu");n.d(t,"Severity",(function(){return o.a}));var i=n("g802");n.d(t,"Status",(function(){return i.a}));var a=n("Ii+B");n.d(t,"addGlobalEventProcessor",(function(){return a.b}));var c=n("g7Gn");n.d(t,"addBreadcrumb",(function(){return c.a})),n.d(t,"captureException",(function(){return c.c})),n.d(t,"captureEvent",(function(){return c.b})),n.d(t,"captureMessage",(function(){return c.d})),n.d(t,"configureScope",(function(){return c.e}));var u=n("zoce");n.d(t,"getHubFromCarrier",(function(){return u.c})),n.d(t,"getCurrentHub",(function(){return u.b})),n.d(t,"Hub",(function(){return u.a})),n.d(t,"Scope",(function(){return a.a})),n.d(t,"setContext",(function(){return c.f})),n.d(t,"setExtra",(function(){return c.g})),n.d(t,"setExtras",(function(){return c.h})),n.d(t,"setTag",(function(){return c.i})),n.d(t,"setTags",(function(){return c.j})),n.d(t,"setUser",(function(){return c.k}));var s=n("dyay");n.d(t,"Span",(function(){return s.a})),n.d(t,"withScope",(function(){return c.l}));var l=n("kWuB");n.d(t,"BrowserClient",(function(){return l.a}));var f=n("3CEA");n.d(t,"defaultIntegrations",(function(){return f.b})),n.d(t,"forceLoad",(function(){return f.d})),n.d(t,"init",(function(){return f.e})),n.d(t,"lastEventId",(function(){return f.f})),n.d(t,"onLoad",(function(){return f.g})),n.d(t,"showReportDialog",(function(){return f.h})),n.d(t,"flush",(function(){return f.c})),n.d(t,"close",(function(){return f.a})),n.d(t,"wrap",(function(){return f.i}));var p=n("omaz");n.d(t,"SDK_NAME",(function(){return p.a})),n.d(t,"SDK_VERSION",(function(){return p.b}));var d=n("ADAj"),h=n("zNuj"),v=n("4kjc"),m=n("nXHh");n.d(t,"Transports",(function(){return m}));var g={},y=Object(h.e)();y.Sentry&&y.Sentry.Integrations&&(g=y.Sentry.Integrations);var E=r.a({},g,d.a,v)},ZU0V:function(e,t){function n(e){return e&&"object"===typeof e?i(e)||a(e)?e:o(e)?function(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}(e,n):function(e,t,n){if(e.reduce)return e.reduce(t,n);for(var r=0;r<e.length;r++)n=t(n,e[r],r);return n}(u(e),(function(t,o){return t[r(o)]=n(e[o]),t}),{}):e}function r(e){return e.replace(/[_.-](\w|$)/g,(function(e,t){return t.toUpperCase()}))}e.exports=function(e){return"string"===typeof e?r(e):n(e)};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=function(e){return"[object Date]"===Object.prototype.toString.call(e)},a=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},c=Object.prototype.hasOwnProperty,u=Object.keys||function(e){var t=[];for(var n in e)c.call(e,n)&&t.push(n);return t}},cha2:function(e,t,n){"use strict";n.r(t);var r=n("kOwS"),o=n("ln6h"),i=n.n(o),a=n("0iUn"),c=n("MI3g"),u=n("a7VT"),s=n("AT/M"),l=n("sLSF"),f=n("Tit0"),p=n("vYYK"),d=(n("q7KB"),n("FkOY"),n("heRm"),n("ElcZ"),n("q1tI")),h=n("8Bbg"),v=n.n(h),m=n("dwco"),g=n.n(m),y=(n("TTl7"),n("/MKj")),E=n("lqOT"),b=n("pLtp"),S=n.n(b),O=n("g7Gn");function w(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(n,r,e):t(o)}}}}var _=w();_.withExtraArgument=w;var T=_,C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function x(e){return null!==e&&"object"===("undefined"===typeof e?"undefined":C(e))&&(e&&"function"===typeof e.then)}var I=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=["PENDING","FULFILLED","REJECTED"];function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.promiseTypeSuffixes||U,n=e.promiseTypeDelimiter||"_";return function(e){var r=e.dispatch;return function(e){return function(o){var i=void 0,a=void 0;if(!o.payload)return e(o);var c=o.payload;if(x(c))i=c;else if(x(c.promise))i=c.promise,a=c.data;else{if("function"!==typeof c&&"function"!==typeof c.promise)return e(o);if(i=c.promise?c.promise():c(),a=c.promise?c.data:void 0,!x(i))return e(N({},o,{payload:i}))}var u=o.type,s=o.meta,l=I(t,3),f=l[0],p=l[1],d=l[2],h=function(e,t){return N({type:[u,t?d:p].join(n)},null===e||"undefined"===typeof e?{}:{payload:e},void 0!==s?{meta:s}:{},t?{error:!0}:{})};return e(N({type:[u,f].join(n)},void 0!==a?{payload:a}:{},void 0!==s?{meta:s}:{})),i.then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=h(e,!1);return r(t),{value:e,action:t}}),(function(e){var t=h(e,!0);throw r(t),e}))}}}}var R=n("ANjH"),L=n("1+KF"),P=n("dfwq"),F=new(function(){function e(){Object(a.a)(this,e),this._middlewares=[],this.middleware=this.middleware.bind(this),this.register=this.register.bind(this)}return Object(l.a)(e,[{key:"middleware",value:function(e){var t=this;return function(n){return function(r){var o=t._middlewares.map((function(t){return t(e)}));R.d.apply(void 0,Object(P.a)(o))(n)(r)}}}},{key:"register",value:function(e){this._middlewares=[].concat(Object(P.a)(this._middlewares),[e])}}]),e}()),k=n("hfKm"),A=n.n(k),H=n("2Eek"),X=n.n(H),M=n("XoMD"),B=n.n(M),D=n("Jo+v"),G=n.n(D),Y=n("4mXO"),q=n.n(Y),K=n("ZU0V"),V=n.n(K),J=n("Xppb");function Q(e,t){var n=S()(e);if(q.a){var r=q()(e);t&&(r=r.filter((function(t){return G()(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):B.a?X()(e,B()(n)):Q(Object(n)).forEach((function(t){A()(e,t,G()(n,t))}))}return e}var Z=Object(R.c)({userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchState:"idle"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SIGNUP_REQUEST":case"FETCH_LOGIN_REQUEST":case"FETCH_USER_INFO_REQUEST":return W({},e,{fetchState:"fetching",fetchingPromise:t.fetchingPromise,error:""});case"FETCH_SIGNUP_SUCCESS":case"FETCH_LOGIN_SUCCESS":case"FETCH_USER_INFO_SUCCESS":case"UPDATE_USER_INFO_SUCCESS":var n=t.payload||t.user,r=W({},e,{fetchState:"done",fetchingPromise:null},V()(n),{error:"",isLoggedIn:!0});return O.k(r),Object(J.identify)({id:r.id,email:r.email,bio:r.bio,firstName:r.firstName,lastName:r.lastName,username:r.username,roles:Object(P.a)(r.roles),gating:Object(P.a)(r.gating)}),r;case"FETCH_SIGNUP_FAILURE":case"FETCH_LOGIN_FAILURE":case"FETCH_USER_INFO_FAILURE":return W({},e,{fetchState:"done",fetchingPromise:null,error:t.error,isLoggedIn:!1});case"UPDATE_USER_INFO_FAILURE":return W({},e,{fetchState:"done",fetchingPromise:null,isFetching:!1,error:t.error});case"UPDATE_USER_SUBSCRIPTION":return W({},e,{subscription:t.subscription});default:return e}},billingInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BILLING_INFO_REQUEST":return W({},e,{isFetching:!0,error:""});case"FETCH_BILLING_INFO_SUCCESS":return W({},e,{isFetching:!1},V()(t.data),{error:""});case"FETCH_BILLING_INFO_FAILURE":return W({},e,{isFetching:!1,error:t.error});case"CANCEL_SUBSCRIPTION_SUCCESS":return{isFetching:!1};case"CANCEL_SUBSCRIPTION_FAILURE":return W({},e,{error:t.error});default:return e}},authModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{promptCount:0,dismissed:!1,show:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"AUTH_MODAL_INCREMENT_PROMPT_COUNT":return W({},e,{promptCount:e.promptCount+1});case"AUTH_MODAL_SHOW":return W({},e,{show:!0,dismissed:!1});case"AUTH_MODAL_DISSMISS":return W({},e,{dismissed:!0});case"FETCH_SIGNUP_SUCCESS":case"FETCH_LOGIN_SUCCESS":return W({},e,{dismissed:!0});default:return e}}});L.default.register("user",Z),L.default.register("banners",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BANNER_MESSAGE_SUCCESS":return{message:t.message}}return e}));var z=n("/3ys"),$=function(){return function(e){return function(t){try{return O.a({category:"redux",message:"action",data:{type:t?t.type:null}}),e(t)}catch(n){throw O.l((function(e){e.setExtra("action",t),O.c(n)})),n}}}},ee=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.isServer;function o(t){var n=S()(t);return e&&S()(e).forEach((function(e){-1===n.indexOf(e)&&(t[e]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e})})),Object(R.c)(t)}if(!r&&(window.__REDUX_DEVTOOLS_EXTENSION__&&(t=window.__REDUX_DEVTOOLS_EXTENSION__()),e&&!e.user.userInfo.isLoggedIn)){var i=z.a.get("preferences");i&&(e.preferences=i)}var a=o(L.default.getReducers()),c=Object(R.e)(a,e,Object(R.d)(Object(R.a)($,j({promiseTypeSuffixes:["REQUEST","SUCCESS","FAILURE"]}),T,F.middleware),t||function(e){return e}));return L.default.setChangeListener((function(e){c.replaceReducer(o(e))})),c},te=n("nmgF"),ne=n("8Kt/"),re=n.n(ne),oe=n("M85P"),ie=d.createElement,ae=!1;ae||g.a.polyfill();var ce="__REPLIT_REDUX_STORE__";function ue(e){return ae?ee(e,{isServer:ae}):(window[ce]||(window[ce]=ee(e)),window[ce])}var se="displayName"in v.a?v.a.displayName:"App",le=function(e){function t(e){var n;if(Object(a.a)(this,t),n=Object(c.a)(this,Object(u.a)(t).call(this,e)),Object(p.a)(Object(s.a)(n),"reduxStore",void 0),Object(p.a)(Object(s.a)(n),"apolloClient",void 0),ae){if(!e.reduxStore)throw new Error("Expected reduxStore from _app getInitialProps while server side rendering");if(!e.apolloClient)throw new Error("Expected apollo from _app getInitialProps while server side rendering");Object(oe.resetIdCounter)()}return n.reduxStore=e.reduxStore||ue(e.reduxState),n.apolloClient=e.apolloClient||Object(te.b)({req:void 0},e.apolloState),n}return Object(f.a)(t,e),Object(l.a)(t,null,[{key:"getInitialProps",value:function(e){var t,r,o,a,c,u,s,l,f,p;return i.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return t=e.ctx.req,r=Object(te.b)({req:t}),o=ue({}),e.ctx.store=o,e.ctx.apolloClient=r,d.next=7,i.a.awrap(v.a.origGetInitialProps(e));case 7:if(a=d.sent,c=a.pageProps,!ae){d.next=18;break}return d.next=12,i.a.awrap(Promise.all([n.e(1),n.e(6),n.e(126)]).then(n.bind(null,"83xU")));case 12:return u=d.sent,s=u.getDataFromTree,l=e.AppTree,d.next=17,i.a.awrap(s(ie(l,{pageProps:c,apolloClient:r,reduxStore:o})));case 17:re.a.rewind();case 18:return f=o.getState(),p=r.cache.extract(),r.toJSON=function(){return null},o.toJSON=function(){return null},d.abrupt("return",{pageProps:c,reduxState:f,reduxStore:o,apolloState:p,apolloClient:r});case 23:case"end":return d.stop()}}))}}]),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return ie(y.a,{store:this.reduxStore},ie(E.b,{client:this.apolloClient},ie(t,Object(r.a)({},n,{router:this.props.router}))))}}]),t}(v.a);Object(p.a)(le,"displayName","ReplitApp(".concat(se,")"));t.default=le},dwco:function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var n,r=e.HTMLElement||e.Element,o=468,i={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||u,scrollIntoView:r.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,c=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?v.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):i.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?i.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):v.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;v.call(this,this,"undefined"===typeof e?this.scrollLeft:~~e,"undefined"===typeof t?this.scrollTop:~~t)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=d(this),r=n.getBoundingClientRect(),o=this.getBoundingClientRect();n!==t.body?(v.call(this,n,n.scrollLeft+o.left-r.left,n.scrollTop+o.top-r.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function u(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!==typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"===typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function l(e,t){return"Y"===t?e.clientHeight+c<e.scrollHeight:"X"===t?e.clientWidth+c<e.scrollWidth:void 0}function f(t,n){var r=e.getComputedStyle(t,null)["overflow"+n];return"auto"===r||"scroll"===r}function p(e){var t=l(e,"Y")&&f(e,"Y"),n=l(e,"X")&&f(e,"X");return t||n}function d(e){for(;e!==t.body&&!1===p(e);)e=e.parentNode||e.host;return e}function h(t){var n,r,i,c,u=(a()-t.startTime)/o;c=u=u>1?1:u,n=.5*(1-Math.cos(Math.PI*c)),r=t.startX+(t.x-t.startX)*n,i=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,r,i),r===t.x&&i===t.y||e.requestAnimationFrame(h.bind(e,t))}function v(n,r,o){var c,s,l,f,p=a();n===t.body?(c=e,s=e.scrollX||e.pageXOffset,l=e.scrollY||e.pageYOffset,f=i.scroll):(c=n,s=n.scrollLeft,l=n.scrollTop,f=u),h({scrollable:c,method:f,startTime:p,startX:s,startY:l,x:r,y:o})}}}}()},heRm:function(e,t,n){},nXHh:function(e,t,n){"use strict";n.r(t);var r=n("DTjN");n.d(t,"BaseTransport",(function(){return r.a}));var o=n("2O0U");n.d(t,"FetchTransport",(function(){return o.a}));var i=n("MT+3");n.d(t,"XHRTransport",(function(){return i.a}))},nmgF:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n("K/JX"),o=n("dMq0"),i=n("R44f"),a=n(0),c=n("ShKv"),u=n("K6nX"),s=n("XWHH"),l=n.n(s),f=null,p=!0;function d(e){var t,n=e.req,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(f)return f;t=n?new a.SchemaLink({schema:n.schema,context:n}):new i.a({credentials:"same-origin",uri:"/graphql",headers:{"X-Requested-With":"XMLHttpRequest"}});var l=new r.b({introspectionQueryResultData:u.a});return f=new o.a({cache:new r.a({dataIdFromObject:c.a,fragmentMatcher:l}).restore(s),ssrMode:!p,link:t,defaultOptions:{query:{errorPolicy:"all"},watchQuery:{errorPolicy:"all"}}})}p||(e.fetch=l.a)}).call(this,n("yLpj"))},q7KB:function(e,t,n){}},[[4,2,1,0,3,5,7,29,37]]]);
//# sourceMappingURL=_app.js.map