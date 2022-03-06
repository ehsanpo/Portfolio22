/*! For license information please see component---src-pages-about-js-dce57d79b120821b8bef.js.LICENSE.txt */
(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[682],{3349:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return a}})},5706:function(e,t,n){"use strict";var a=n(8812),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return a.isMemo(e)?l:i[e.$$typeof]||r}i[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[a.Memo]=l;var c=Object.defineProperty,m=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,a){if("string"!=typeof n){if(p){var r=f(n);r&&r!==p&&e(t,r,a)}var l=m(n);u&&(l=l.concat(u(n)));for(var i=s(t),h=s(n),y=0;y<l.length;++y){var v=l[y];if(!(o[v]||a&&a[v]||h&&h[v]||i&&i[v])){var g=d(n,v);try{c(t,v,g)}catch(b){}}}}return t}},9158:function(e,t,n){"use strict";t.Z=void 0;var a,r=function(e){if(e&&e.__esModule)return e;var t=l();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(7294)),o=(a=n(5697))&&a.__esModule?a:{default:a};function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?m(e):t}(this,c(t).call(this))).state={className:e.classNameNotInView,childProps:e.childPropsNotInView},n.onIntersectionAll=n.onIntersectionAll.bind(m(n)),n.onIntersection=n.onIntersection.bind(m(n)),n.isFirstInView=!0,n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){if(window.IntersectionObserver){var e=this.props,t=e.useInviewMonitor,n=e.intoViewMargin,a=e.threshold;if(this._element&&t&&("function"!=typeof t||t())){var r={rootMargin:n,threshold:a};this.observer=new window.IntersectionObserver(this.onIntersectionAll,r),this.observer.observe(this._element)}}else console.error("react-inview-monitor found no support for IntersectionObserver.\nPerhaps use a polyfill like: https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver ?")}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.disconnect()}},{key:"onIntersectionAll",value:function(e){e.forEach(this.onIntersection)}},{key:"onIntersection",value:function(e){if(e.target===this._element){var t=this.props,n=t.classNameNotInView,a=t.classNameInView,r=t.classNameAboveView,o=t.classNameNotAboveView,l=t.toggleClassNameOnInView,i=t.childPropsInView,s=t.childPropsNotInView,c=t.toggleChildPropsOnInView,m=t.onInView,u=t.onNotInView,d=t.repeatOnInView,f=e.isIntersecting,p=f&&this.isFirstInView;p&&(this.isFirstInView=!1);var h=("string"==typeof a||"string"==typeof r)&&l,y=i&&c,v=h||y||(m||u)&&d;if(f&&!v){var g={};return"string"==typeof a&&(g.className=a),i&&(g.childProps=i),Object.keys(g).length&&this.setState(g),m&&"function"==typeof m&&m(e),void this.observer.unobserve(e.target)}if(v){if("string"==typeof r)return void(!f&&e.boundingClientRect.top<=0?this.setState({className:r}):this.setState({className:o||""}));if(f){var b={};(h||p)&&(b.className=a),(y||p)&&(b.childProps=i),Object.keys(b).length&&this.setState(b),m&&"function"==typeof m&&m(e)}else{var E={};h&&(E.className=n),y&&(E.childProps=s),Object.keys(E).length&&this.setState(E),u&&"function"==typeof u&&u(e)}}}}},{key:"render",value:function(){var e=this,t=this.state,n=t.childProps,a=t.className,o=this.props,l=(o.useInviewMonitor,o.children);return n&&Object.keys(n).length&&(l=r.default.cloneElement(l,n)),r.default.createElement("div",{className:a,ref:function(t){t&&(e._element=t)}},l)}}])&&s(n.prototype,a),o&&s(n,o),t}(r.Component);d.propTypes={classNameInView:o.default.string,classNameNotInView:o.default.string,classNameAboveView:o.default.string,classNameNotAboveView:o.default.string,toggleClassNameOnInView:o.default.bool,childPropsInView:o.default.object,childPropsNotInView:o.default.object,toggleChildPropsOnInView:o.default.bool,onInView:o.default.func,onNotInView:o.default.func,repeatOnInView:o.default.bool,useInviewMonitor:o.default.func,intoViewMargin:o.default.string,threshold:o.default.number},d.defaultProps={classNameNotInView:"",childPropsNotInView:{},useInviewMonitor:function(){return!0},intoViewMargin:"-20%",threshold:0};var f=d;t.Z=f},165:function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,m=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,E=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case m:case u:case o:case i:case l:case f:return e;default:switch(e=e&&e.$$typeof){case c:case d:case y:case h:case s:return e;default:return t}}case r:return t}}}function N(e){return w(e)===u}t.AsyncMode=m,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=s,t.Element=a,t.ForwardRef=d,t.Fragment=o,t.Lazy=y,t.Memo=h,t.Portal=r,t.Profiler=i,t.StrictMode=l,t.Suspense=f,t.isAsyncMode=function(e){return N(e)||w(e)===m},t.isConcurrentMode=N,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===i},t.isStrictMode=function(e){return w(e)===l},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===i||e===l||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===g||e.$$typeof===b||e.$$typeof===E||e.$$typeof===v)},t.typeOf=w},8812:function(e,t,n){"use strict";e.exports=n(165)},8630:function(e,t,n){"use strict";var a=n(7294),r=n(5444),o=n(9158),l=n(2432);t.Z=function(){var e,t,n,i=(0,r.useStaticQuery)("1924466148");return a.createElement("section",null,a.createElement(o.Z,{intoViewMargin:"8%",classNameNotInView:"vis-hidden",classNameInView:"animated titleIn",toggleClassNameOnInView:!0},a.createElement("h2",{className:"title yellow"},"Awards")),a.createElement("div",{className:"wrapper"},a.createElement("div",{className:"Awards"},a.createElement(o.Z,{intoViewMargin:"10%",classNameNotInView:"vis-hidden",classNameInView:"animated titleIn",toggleClassNameOnInView:!0},a.createElement("img",{fixed:null==i||null===(e=i.image2)||void 0===e?void 0:e.childImageSharp.fixed,alt:""}),a.createElement("div",{class:"content"},a.createElement("h3",null,"Svenska design"),"Gold Category Digital Design"),a.createElement(r.Link,{className:"btn btn--link btn--yellow",to:"/portfolio/malmo-saluhall/"},"View project"))),a.createElement("div",{className:"Awards"},a.createElement(o.Z,{intoViewMargin:"10%",classNameNotInView:"vis-hidden",classNameInView:"animated titleIn",toggleClassNameOnInView:!0},a.createElement("img",{fixed:null===(t=i.image1)||void 0===t?void 0:t.childImageSharp.fixed,alt:""}),a.createElement("div",{class:"content"},a.createElement("h3",null,"Cannes lions"),"Silver Lion in Promo & Activation, Bronze Lion in Cyber & Shortlist in Media"),a.createElement(r.Link,{className:"btn btn--link btn--yellow",to:"/portfolio/toolpool/"},"View project"))),a.createElement("div",{className:"Awards"},a.createElement(o.Z,{intoViewMargin:"10%",classNameNotInView:"vis-hidden",classNameInView:"animated titleIn",toggleClassNameOnInView:!0},a.createElement("img",{fixed:null===(n=i.image3)||void 0===n?void 0:n.childImageSharp.fixed,alt:""}),a.createElement("div",{class:"content"},a.createElement("h3",null,"Guldägget"),"Gold Category PR & Silver Categories Digital and Alternative Media"),a.createElement(r.Link,{className:"btn btn--link btn--yellow",to:"/portfolio/toolpool/"},"View project")))),a.createElement("div",{className:"center"},a.createElement(l.Z,{className:"btn--secondary"},"About Ehsan")))}},2432:function(e,t,n){"use strict";var a=n(7294),r=n(5444);t.Z=function(e){var t=e.className,n=void 0===t?"":t,o=e.children,l=e.type,i=void 0===l?"button":l,s=e.to,c=void 0===s?"/":s,m=e.onClick,u=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);return"button"===i?a.createElement("button",{onClick:m,type:i,className:"btn button "+n},a.createElement("span",{className:"btn__content"},o||""," "),a.createElement("span",{className:"btn__glitch"}),a.createElement("span",{className:"btn__label"},u,"20")):"link"===i?a.createElement(r.Link,{to:c,className:"btn "+n},a.createElement("span",{className:"btn__content"},o||""," "),a.createElement("span",{className:"btn__glitch"}),a.createElement("span",{className:"btn__label"},u,"20")):void 0}},5322:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(7294);function r(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=n(3349),i=n(1788),s=n(8812),c=n(5706),m=n.n(c);function u(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var d=a.createContext();var f={initialChunks:{}},p="PENDING",h="REJECTED";var y=function(e){return e};function v(e){var t=e.defaultResolveComponent,n=void 0===t?y:t,c=e.render,v=e.onLoad;function g(e,t){void 0===t&&(t={});var y=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),g={};function b(e){return t.cacheKey?t.cacheKey(e):y.resolve?y.resolve(e):"static"}function E(e,a,r){var o=t.resolveComponent?t.resolveComponent(e,a):n(e);if(t.resolveComponent&&!(0,s.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return m()(r,o,{preload:!0}),o}var w,N,k=function(e){var t=b(e),n=g[t];return n&&n.status!==h||((n=y.requireAsync(e)).status=p,g[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:y.resolve(e),chunkName:y.chunkName(e),error:t?t.message:t}),n.status=h}))),n},I=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:b(n)},u(!n.__chunkExtractor||y.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(y.requireAsync(n).catch((function(){return null})),a.loadSync(),n.__chunkExtractor.addChunk(y.chunkName(n))),(0,l.Z)(a)):(!1!==t.ssr&&(y.isReady&&y.isReady(n)||y.chunkName&&f.initialChunks[y.chunkName(n)])&&a.loadSync(),a)}(0,i.Z)(n,e),n.getDerivedStateFromProps=function(e,t){var n=b(e);return o({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var a=n.prototype;return a.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===h&&this.setCache(),this.state.loading&&this.loadAsync()},a.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},a.componentWillUnmount=function(){this.mounted=!1},a.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},a.getCacheKey=function(){return b(this.props)},a.getCache=function(){return g[this.getCacheKey()]},a.setCache=function(e){void 0===e&&(e=void 0),g[this.getCacheKey()]=e},a.triggerOnLoad=function(){var e=this;v&&setTimeout((function(){v(e.state.result,e.props)}))},a.loadSync=function(){if(this.state.loading)try{var e=E(y.requireSync(this.props),this.props,V);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:y.resolve(this.props),chunkName:y.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},a.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=E(t,e.props,V);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},a.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,r(e,["__chunkExtractor","forwardedRef"]));return k(t)},a.render=function(){var e=this.props,n=e.forwardedRef,a=e.fallback,l=(e.__chunkExtractor,r(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,s=i.error,m=i.loading,u=i.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===p)throw this.loadAsync();if(s)throw s;var d=a||t.fallback||null;return m?d:c({fallback:d,result:u,options:t,props:o({},l,{ref:n})})},n}(a.Component),S=(N=function(e){return a.createElement(d.Consumer,null,(function(t){return a.createElement(w,Object.assign({__chunkExtractor:t},e))}))},(w=I).displayName&&(N.displayName=w.displayName+"WithChunkExtractor"),N),V=a.forwardRef((function(e,t){return a.createElement(S,Object.assign({forwardedRef:t},e))}));return V.displayName="Loadable",V.preload=function(e){V.load(e)},V.load=function(e){return k(e)},V}return{loadable:g,lazy:function(e,t){return g(e,o({},t,{suspense:!0}))}}}var g=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return a.createElement(t,n)}}),b=g.loadable,E=g.lazy,w=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),N=w.loadable,k=w.lazy;var I=b;I.lib=N,E.lib=k;var S=I,V=n(2176),C=n(3751),P=n(9158),O=n(8630),_=n(2432),x=function(){var e=S((function(){return Promise.all([n.e(737),n.e(934),n.e(163)]).then(n.bind(n,163))}));return a.createElement(V.Z,null,a.createElement(C.Z,{title:"Music Producent"}),a.createElement("div",{className:"page-header "},a.createElement("div",{className:"wrapper"},a.createElement("h1",{className:"display"},"About"))),a.createElement("section",null,a.createElement("div",{className:"wrapper wrapper-l"},a.createElement("div",{style:{flex:4}},a.createElement("h2",null,"Hej Hej, I’m Ehsan Pourhadi."),a.createElement("p",null,"I am a self-learned web developer, web designer & producer providing digital solutions. I have experience of over ten years, and I offer an enjoyable experience to my customers."),a.createElement("p",null,"At a young age, I started designing. It was a hobby then, but slowly grew into passion, the more I learned about it. I started as a webmaster, and then gradually branched into coding javascript and then jumping into front-end and back-end developer. Currently, I am an experienced full stack developer looking to provide you the best possible solution."),a.createElement("p",null,"My skill set consists not only of web development but also LAMP/NodeJS stacks. I have an excellent grasp of WordPress & Laravel developing on the backend while specializing in JS and HTML/CSS on the front-end."),a.createElement("p",null,"My knowledge base is extensive on user interface design, logo/identity creation. Furthermore, I also specialize in SEO. I have tremendous knowledge in multimedia and mobile development, thanks to my 10+ years of work experience. I am on the lookout for different concepts, learning new techniques, and working on various platforms to provide the best solution to you! My goal is to utilize my current skills, learn new things, incorporate into the work, and give you the best of the best possible experience.")),a.createElement("div",null,a.createElement(e,null)))),a.createElement("section",{className:"expe-block no-bg"},a.createElement("div",{className:"wrapper"},a.createElement("div",{className:"list-box"},a.createElement("h2",null,"Experience"),a.createElement("ul",{className:"timeline"},a.createElement("li",{"data-aos":"fade-left",className:"aos-init aos-animate"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Software developer at Bredband2",a.createElement("span",{className:"timelineDate"},"2020")),a.createElement("p",null,"Working with React & Ruby"))),a.createElement("li",{"data-aos":"fade-left",className:"aos-init aos-animate"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Software developer With Front-end focus at Skymill",a.createElement("span",{className:"timelineDate"},"2020")),a.createElement("p",null,"Working with React and writing end to end test for the user flow."))),a.createElement("li",{"data-aos":"fade-left",className:"aos-init aos-animate"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Frilansande Webbutvecklare",a.createElement("span",{className:"timelineDate"},"2019")),a.createElement("p",null,"As a freelance web developer, I develop and manage modern responsive websites and web applications."))),a.createElement("li",{"data-aos":"fade-left",className:"aos-init"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Web Developer/ Tech-lead at Guts & Glory"," ",a.createElement("span",{className:"timelineDate"},"2017 - 2019")),a.createElement("p",null,"Working as Tech lead for an advertisement agancy, offering clients strategic and digital communication tools in order to reach more clients and new markets."))),a.createElement("li",{"data-aos":"fade-left",className:"aos-init"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Full Stack Developer at Whitespace",a.createElement("span",{className:"timelineDate"},"2013 - 2017")),a.createElement("p",null,"Full-stack developer for a web agancy that offers web development, UX/UI design, digital marketing and strategies to clients all over the world."))),a.createElement("li",{"data-aos":"fade-left",className:"aos-init"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Web Developer/Designer at The Fan Club",a.createElement("span",{className:"timelineDate"},"2012 - 2013")),a.createElement("p",null,"Web Producer in The Fan Club."))),a.createElement("li",{"data-aos":"fade-left",className:"aos-init"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Freelance"," ",a.createElement("span",{className:"timelineDate"},"2012")),a.createElement("p",null,"I Worked as freelancer for about a year. The whole idea was started with big ambition to help local businesses."))),a.createElement("li",{"data-aos":"fade-left",className:"aos-init"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Developer/Designer at Next Generation Design",a.createElement("span",{className:"timelineDate"},"2011 - 2010")),a.createElement("p",null,"I worked as a designer/developer and also took care of management of servers and webhosting."))))),a.createElement("div",{className:"list-box"},a.createElement("h2",null,"Education"),a.createElement("ul",{className:"timeline"},a.createElement("li",{"data-aos":"fade-right",className:"aos-init"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Ruby on Rails",a.createElement("span",{className:"timelineDate"},"2021")),a.createElement("p",null,"BredBand2"))),a.createElement("li",{"data-aos":"fade-right",className:"aos-init"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Linux Academy / A Cloud Guru",a.createElement("span",{className:"timelineDate"},"2018")),a.createElement("p",null,"AWS Certified Solutions Architect"))),a.createElement("li",{"data-aos":"fade-right",className:"aos-init"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Hermods",a.createElement("span",{className:"timelineDate"},"2011")),a.createElement("p",null,"Programming A and Database management course."))),a.createElement("li",{"data-aos":"fade-right",className:"aos-init"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Glokala Folkshögskola",a.createElement("span",{className:"timelineDate"},"2009")),a.createElement("p",null,"Music production(Recording, Mixing, Mastering), Event planning and general working process in music industry."))),a.createElement("li",{"data-aos":"fade-right",className:"aos-init"},a.createElement("div",{className:"timelineUnit"},a.createElement("h4",null,"Universitetsholmen's High School",a.createElement("span",{className:"timelineDate"},"2008")),a.createElement("p",null,"Electricity Program with focus on Automation (PLC programming, Control engineering & Pneumatic). I also took a Webdesign course."))))))),a.createElement("section",{className:"links-block"},a.createElement(P.Z,{intoViewMargin:"6%",classNameNotInView:"vis-hidden",classNameInView:"animated titleIn",toggleClassNameOnInView:!0},a.createElement("h2",{className:"title red"},"Stats")),a.createElement("div",{className:"wrapper"},a.createElement("div",{className:"link"},a.createElement("div",{className:"content"},a.createElement("h3",{"data-aos":"fade-up","data-aos-delay":"200",className:"aos-init aos-animate"},"Lines of code"),a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"200",className:"aos-init aos-animate"},a.createElement("p",null,"23750691")))),a.createElement("div",{className:"link"},a.createElement("div",{className:"content"},a.createElement("h3",{"data-aos":"fade-up","data-aos-delay":"300",className:"aos-init aos-animate"},"Daytime"),a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"300",className:"aos-init aos-animate"},a.createElement("p",null,"I’m most productive during daytime")))),a.createElement("div",{className:"link"},a.createElement("div",{className:"content"},a.createElement("h3",{"data-aos":"fade-up","data-aos-delay":"400",className:"aos-init aos-animate"},"Tuesdays"),a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"400",className:"aos-init aos-animate"},a.createElement("p",null,"I’m most productive on Tuesdays")))),a.createElement("div",{className:"link"},a.createElement("div",{className:"content"},a.createElement("h3",{"data-aos":"fade-up","data-aos-delay":"500",className:"aos-init aos-animate"},"snake_case"),a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"500",className:"aos-init aos-animate"},a.createElement("p",null,"I prefer snake_case for naming variables")))))),a.createElement("section",{class:"image-text-block-boxed no-bg add_padding"},a.createElement(P.Z,{intoViewMargin:"6%",classNameNotInView:"vis-hidden",classNameInView:"animated titleIn",toggleClassNameOnInView:!0},a.createElement("h2",{className:"title red"},"My Resume")),a.createElement("div",{class:"wrapper-m"},a.createElement("div",{class:" center"},a.createElement(_.Z,{type:"link",to:"https://ehsan-pourhadi.com/site/uploads/2019/04/CV-19-SV.pdf"},"PDF - English"),a.createElement(_.Z,{to:"https://ehsan-pourhadi.com/site/uploads/2019/04/CV-19-EN.pdf",type:"link"},"PDF - Svenska"),a.createElement(_.Z,{to:"https://www.linkedin.com/in/ehsanp/",type:"link"},"My Linkedin")),a.createElement("div",{class:"itb-image"},a.createElement("img",{src:"https://ehsan-pourhadi.com/site/uploads/2020/06/wsi-imageoptim-Free-A4-Paper-in-Male-Hand-Mockup-PSD-scaled.jpg",alt:""})))),a.createElement(O.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-about-js-dce57d79b120821b8bef.js.map