(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[7],{9158:function(e,t,n){"use strict";t.Z=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(7294)),a=(r=n(5697))&&r.__esModule?r:{default:r};function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?u(e):t}(this,c(t).call(this))).state={className:e.classNameNotInView,childProps:e.childPropsNotInView},n.onIntersectionAll=n.onIntersectionAll.bind(u(n)),n.onIntersection=n.onIntersection.bind(u(n)),n.isFirstInView=!0,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){if(window.IntersectionObserver){var e=this.props,t=e.useInviewMonitor,n=e.intoViewMargin,r=e.threshold;if(this._element&&t&&("function"!=typeof t||t())){var o={rootMargin:n,threshold:r};this.observer=new window.IntersectionObserver(this.onIntersectionAll,o),this.observer.observe(this._element)}}else console.error("react-inview-monitor found no support for IntersectionObserver.\nPerhaps use a polyfill like: https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver ?")}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.disconnect()}},{key:"onIntersectionAll",value:function(e){e.forEach(this.onIntersection)}},{key:"onIntersection",value:function(e){if(e.target===this._element){var t=this.props,n=t.classNameNotInView,r=t.classNameInView,o=t.classNameAboveView,a=t.classNameNotAboveView,i=t.toggleClassNameOnInView,s=t.childPropsInView,l=t.childPropsNotInView,c=t.toggleChildPropsOnInView,u=t.onInView,f=t.onNotInView,m=t.repeatOnInView,p=e.isIntersecting,h=p&&this.isFirstInView;h&&(this.isFirstInView=!1);var d=("string"==typeof r||"string"==typeof o)&&i,b=s&&c,v=d||b||(u||f)&&m;if(p&&!v){var y={};return"string"==typeof r&&(y.className=r),s&&(y.childProps=s),Object.keys(y).length&&this.setState(y),u&&"function"==typeof u&&u(e),void this.observer.unobserve(e.target)}if(v){if("string"==typeof o)return void(!p&&e.boundingClientRect.top<=0?this.setState({className:o}):this.setState({className:a||""}));if(p){var w={};(d||h)&&(w.className=r),(b||h)&&(w.childProps=s),Object.keys(w).length&&this.setState(w),u&&"function"==typeof u&&u(e)}else{var g={};d&&(g.className=n),b&&(g.childProps=l),Object.keys(g).length&&this.setState(g),f&&"function"==typeof f&&f(e)}}}}},{key:"render",value:function(){var e=this,t=this.state,n=t.childProps,r=t.className,a=this.props,i=(a.useInviewMonitor,a.children);return n&&Object.keys(n).length&&(i=o.default.cloneElement(i,n)),o.default.createElement("div",{className:r,ref:function(t){t&&(e._element=t)}},i)}}])&&l(n.prototype,r),a&&l(n,a),t}(o.Component);m.propTypes={classNameInView:a.default.string,classNameNotInView:a.default.string,classNameAboveView:a.default.string,classNameNotAboveView:a.default.string,toggleClassNameOnInView:a.default.bool,childPropsInView:a.default.object,childPropsNotInView:a.default.object,toggleChildPropsOnInView:a.default.bool,onInView:a.default.func,onNotInView:a.default.func,repeatOnInView:a.default.bool,useInviewMonitor:a.default.func,intoViewMargin:a.default.string,threshold:a.default.number},m.defaultProps={classNameNotInView:"",childPropsNotInView:{},useInviewMonitor:function(){return!0},intoViewMargin:"-20%",threshold:0};var p=m;t.Z=p},7073:function(e,t,n){"use strict";var r=n(7294),o=n(5444);n(6828);t.Z=function(e){var t=e.node,n=t.id,a=t.title,i=t.tag,s=t.permalink,l=t.category;t.logo;return r.createElement(o.Link,{to:s,className:"box"},r.createElement("span",{className:"box__glitch"}),r.createElement("div",{className:"header"},r.createElement("span",null,n)," ",l.map((function(e){return r.createElement(r.Fragment,null,(e.match(/[A-Z]/g)||[]).join("")," ")}))),r.createElement("hr",null),r.createElement("div",{className:"box-wrapper"},r.createElement("h3",null,a),r.createElement("div",{className:"tags"},i.slice(0,3).map((function(e){return r.createElement("span",{key:e},e)})))))}},2432:function(e,t,n){"use strict";var r=n(7294),o=n(5444);t.Z=function(e){var t=e.className,n=void 0===t?"":t,a=e.children,i=e.type,s=void 0===i?"button":i,l=e.to,c=void 0===l?"/":l,u=e.onClick,f=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);return"button"===s?r.createElement("button",{onClick:u,type:s,className:"btn button "+n},r.createElement("span",{className:"btn__content"},a||""," "),r.createElement("span",{className:"btn__glitch"}),r.createElement("span",{className:"btn__label"},f,"20")):"link"===s?r.createElement(o.Link,{to:c,className:"btn "+n},r.createElement("span",{className:"btn__content"},a||""," "),r.createElement("span",{className:"btn__glitch"}),r.createElement("span",{className:"btn__label"},f,"20")):void 0}},6828:function(e,t,n){"use strict";n(7294),n(5444)},5432:function(e,t,n){"use strict";var r=n(7294);n(5444);t.Z=function(e){e.filename,e.alt,e.style,e.className,e.caption;return r.createElement("div",null)}},3559:function(e,t,n){"use strict";var r=n(7294),o=(n(9158),n(7073)),a=n(2432);t.Z=function(e){var t=e.data,n=e.onHome,i=void 0!==n&&n;return r.createElement("section",{className:"no-bg"},r.createElement("div",{className:"wrapper"},t.map((function(e){var t=e.node.frontmatter;return r.createElement(o.Z,{key:t.id,node:t})}))),i&&r.createElement("div",{className:"center"},r.createElement(a.Z,{className:"btn--3"},"See Portfolio")))}},223:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(2176),a=n(3751),i=n(5432),s=n(3559);t.default=function(e){var t=e.data;return r.createElement(o.Z,null,r.createElement(a.Z,{title:"Developer Portfolio"}),r.createElement(i.Z,{filename:"x2.jpg"}),r.createElement("div",{className:"page-header"},r.createElement("div",{className:"wrapper"},r.createElement("h1",{className:"display"},"Blog"))),r.createElement("section",null,r.createElement("div",{className:"wrapper"},r.createElement("div",{className:"wrapper-m"},r.createElement("p",null,"I write this blog personally focused mostly on tech-related articles, but I sometimes write about my day to day experience as a web developer. I feel that this is an excellent way to channel my ideas and thoughts through this blog."),r.createElement("p",null,"I write what I feel is essential on current modern technology, or what the future technology beholds. And maybe some special tools/things that can be used to create a better internet experience"),r.createElement("p",null,"It is incredible to know what we don’t know. I think that those with the thirst for knowledge can change this world. I have that thirst, and I quench it by not only learning about new technology and other things, I also share it with you, through this blog.")))),r.createElement(s.Z,{data:t.allMarkdownRemark.edges}))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-c863bc33cc140c14ad26.js.map