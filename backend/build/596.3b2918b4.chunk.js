(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[596],{96654:(Q,re,P)=>{"use strict";Q.exports=P(42015)},42015:function(Q,re,P){var X=P(25108);(function(k,S){Q.exports=S(P(67294),P(78384),P(99962))})(this,function(k,S,y){return function(r){var u={};function e(a){if(u[a])return u[a].exports;var i=u[a]={i:a,l:!1,exports:{}};return r[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=r,e.c=u,e.d=function(a,i,p){e.o(a,i)||Object.defineProperty(a,i,{enumerable:!0,get:p})},e.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,i){if(1&i&&(a=e(a)),8&i||4&i&&typeof a=="object"&&a&&a.__esModule)return a;var p=Object.create(null);if(e.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:a}),2&i&&typeof a!="string")for(var s in a)e.d(p,s,function(o){return a[o]}.bind(null,s));return p},e.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(i,"a",i),i},e.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},e.p="",e(e.s=98)}([function(r,u,e){r.exports=e(17)()},function(r,u){r.exports=k},function(r,u){r.exports=S},function(r,u){r.exports=function(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){"use strict";e.r(u),e.d(u,"Box",function(){return l});var a,i=e(3),p=e.n(i),s=e(0),o=e.n(s),g=e(2),m=e.n(g),d=e(7),x={color:!0},l=m.a.div.withConfig({shouldForwardProp:function(n,t){return!x[n]&&t(n)}})(a||(a=p()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(n){var t=n.fontSize;return n.theme.fontSizes[t]||t},function(n){var t=n.theme,f=n.background;return t.colors[f]},function(n){var t=n.theme,f=n.color;return t.colors[f]},function(n){var t=n.theme,f=n.padding;return Object(d.a)("padding",f,t)},function(n){var t=n.theme,f=n.paddingTop;return Object(d.a)("padding-top",f,t)},function(n){var t=n.theme,f=n.paddingRight;return Object(d.a)("padding-right",f,t)},function(n){var t=n.theme,f=n.paddingBottom;return Object(d.a)("padding-bottom",f,t)},function(n){var t=n.theme,f=n.paddingLeft;return Object(d.a)("padding-left",f,t)},function(n){var t=n.theme,f=n.marginLeft;return Object(d.a)("margin-left",f,t)},function(n){var t=n.theme,f=n.marginRight;return Object(d.a)("margin-right",f,t)},function(n){var t=n.theme,f=n.marginTop;return Object(d.a)("margin-top",f,t)},function(n){var t=n.theme,f=n.marginBottom;return Object(d.a)("margin-bottom",f,t)},function(n){var t=n.theme;return n.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0},function(n){var t=n.theme;return n.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0},function(n){var t=n.theme,f=n.hasRadius,v=n.borderRadius;return f?t.borderRadius:v},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var t=n.borderColor;return n.theme.colors[t]},function(n){var t=n.theme,f=n.borderColor,v=n.borderStyle,T=n.borderWidth;if(f&&!v&&!T)return"1px solid ".concat(t.colors[f])},function(n){var t=n.theme,f=n.shadow;return t.shadows[f]},function(n){return n.pointerEvents},function(n){var t=n._hover,f=n.theme;return t?t(f):void 0},function(n){return n.display},function(n){return n.position},function(n){var t=n.left;return n.theme.spaces[t]||t},function(n){var t=n.right;return n.theme.spaces[t]||t},function(n){var t=n.top;return n.theme.spaces[t]||t},function(n){var t=n.bottom;return n.theme.spaces[t]||t},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var t=n.width;return n.theme.spaces[t]||t},function(n){var t=n.maxWidth;return n.theme.spaces[t]||t},function(n){var t=n.minWidth;return n.theme.spaces[t]||t},function(n){var t=n.height;return n.theme.spaces[t]||t},function(n){var t=n.maxHeight;return n.theme.spaces[t]||t},function(n){var t=n.minHeight;return n.theme.spaces[t]||t},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});l.displayName="Box",l.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},l.propTypes={_hover:o.a.func,background:o.a.string,basis:o.a.oneOfType([o.a.string,o.a.string]),borderColor:o.a.string,children:o.a.oneOfType([o.a.node,o.a.string]),color:o.a.string,flex:o.a.oneOfType([o.a.string,o.a.string]),grow:o.a.oneOfType([o.a.string,o.a.string]),hasRadius:o.a.bool,hiddenS:o.a.bool,hiddenXS:o.a.bool,padding:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingBottom:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingLeft:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingRight:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingTop:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),shadow:o.a.string,shrink:o.a.oneOfType([o.a.string,o.a.string])}},function(r,u,e){var a=e(22);r.exports=function(i,p){if(i==null)return{};var s,o,g=a(i,p);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);for(o=0;o<m.length;o++)s=m[o],p.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(i,s)&&(g[s]=i[s])}return g},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){function e(){return r.exports=e=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var p=arguments[i];for(var s in p)Object.prototype.hasOwnProperty.call(p,s)&&(a[s]=p[s])}return a},r.exports.default=r.exports,r.exports.__esModule=!0,e.apply(this,arguments)}r.exports=e,r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){"use strict";var a=e(10),i=e.n(a),p=e(13),s=e.n(p);u.a=function(o,g,m){var d=g;if(Array.isArray(g)||s()(g)!=="object"||(d=[g==null?void 0:g.desktop,g==null?void 0:g.tablet,g==null?void 0:g.mobile]),d!==void 0){if(Array.isArray(d)){var x=d,l=i()(x,3),n=l[0],t=l[1],f=l[2],v="".concat(o,": ").concat(m.spaces[n],";");return t!==void 0&&(v+="".concat(m.mediaQueries.tablet,`{
          `).concat(o,": ").concat(m.spaces[t],`;
        }`)),f!==void 0&&(v+="".concat(m.mediaQueries.mobile,`{
          `).concat(o,": ").concat(m.spaces[f],`;
        }`)),v}var T=m.spaces[d]||d;return"".concat(o,": ").concat(T,";")}}},function(r,u,e){"use strict";e.r(u),e.d(u,"Typography",function(){return x});var a,i=e(3),p=e.n(i),s=e(0),o=e.n(s),g=e(2),m=["alpha","beta","delta","epsilon","omega","pi","sigma"],d={fontSize:!0,fontWeight:!0},x=e.n(g).a.span.withConfig({shouldForwardProp:function(l,n){return!d[l]&&n(l)}})(a||(a=p()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(l){var n=l.theme,t=l.fontWeight;return n.fontWeights[t]},function(l){var n=l.theme,t=l.fontSize;return n.fontSizes[t]},function(l){var n=l.theme,t=l.lineHeight;return n.lineHeights[t]},function(l){var n=l.theme,t=l.textColor;return n.colors[t||"neutral800"]},function(l){return l.textTransform},function(l){return l.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(l){var n=l.variant,t=l.theme;switch(n){case"alpha":return`
        font-weight: `.concat(t.fontWeights.bold,`;
        font-size: `).concat(t.fontSizes[5],`;
        line-height: `).concat(t.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(t.fontWeights.bold,`;
        font-size: `).concat(t.fontSizes[4],`;
        line-height: `).concat(t.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(t.fontWeights.semiBold,`;
        font-size: `).concat(t.fontSizes[3],`;
        line-height: `).concat(t.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(t.fontSizes[3],`;
        line-height: `).concat(t.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(t.fontSizes[2],`;
        line-height: `).concat(t.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(t.fontSizes[1],`;
        line-height: `).concat(t.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(t.fontWeights.bold,`;
        font-size: `).concat(t.fontSizes[0],`;
        line-height: `).concat(t.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(t.fontSizes[2],`;
      `)}});x.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},x.propTypes={fontSize:o.a.oneOfType([o.a.number,o.a.string]),fontWeight:o.a.string,lineHeight:o.a.oneOfType([o.a.number,o.a.string]),textColor:o.a.string,textTransform:o.a.string,variant:o.a.oneOf(m)}},function(r,u,e){"use strict";e.r(u),e.d(u,"Flex",function(){return l});var a,i=e(3),p=e.n(i),s=e(0),o=e.n(s),g=e(2),m=e.n(g),d=e(4),x={direction:!0},l=m()(d.Box).withConfig({shouldForwardProp:function(n,t){return!x[n]&&t(n)}})(a||(a=p()([`
  display: `,`;
  flex-direction: `,`;
  justify-content: `,`;
  align-items: `,`;
  flex-wrap: `,`;
`])),function(n){return n.inline?"inline-flex":"flex"},function(n){return n.direction},function(n){return n.justifyContent},function(n){return n.alignItems},function(n){return n.wrap});l.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},l.propTypes={alignItems:o.a.string,basis:o.a.oneOfType([o.a.string,o.a.number]),direction:o.a.string,inline:o.a.bool,justifyContent:o.a.string,reverse:o.a.bool,wrap:o.a.string}},function(r,u,e){var a=e(23),i=e(24),p=e(20),s=e(25);r.exports=function(o,g){return a(o)||i(o,g)||p(o,g)||s()},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){"use strict";e.d(u,"a",function(){return a});var a={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},,function(r,u){function e(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=e=function(i){return typeof i},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=e=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},r.exports.default=r.exports,r.exports.__esModule=!0),e(a)}r.exports=e,r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){"use strict";e.d(u,"b",function(){return a}),e.d(u,"c",function(){return i}),e.d(u,"a",function(){return p});var a=function(s){return function(o){var g=o.theme,m=o.size;return g.sizes[s][m]}},i=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"&";return function(o){var g=o.theme,m=o.hasError;return`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      `.concat(s,`:focus-within {
        border: 1px solid `).concat(m?g.colors.danger600:g.colors.primary600,`;
        box-shadow: `).concat(m?g.colors.danger600:g.colors.primary600,` 0px 0px 0px 2px;
      }
    `)}},p=function(s){var o=s.theme;return`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid `.concat(o.colors.primary600,`;
    }
  }
`)}},function(r,u,e){"use strict";e.d(u,"a",function(){return p});var a=e(1),i=0,p=function(s,o){return Object(a.useRef)(o||"".concat(s,"-").concat(++i)).current}},,function(r,u,e){"use strict";var a=e(18);function i(){}function p(){}p.resetWarningCache=i,r.exports=function(){function s(m,d,x,l,n,t){if(t!==a){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}function o(){return s}s.isRequired=s;var g={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:p,resetWarningCache:i};return g.PropTypes=g,g}},function(r,u,e){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(r,u){r.exports=function(e,a){(a==null||a>e.length)&&(a=e.length);for(var i=0,p=new Array(a);i<a;i++)p[i]=e[i];return p},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){var a=e(19);r.exports=function(i,p){if(i){if(typeof i=="string")return a(i,p);var s=Object.prototype.toString.call(i).slice(8,-1);return s==="Object"&&i.constructor&&(s=i.constructor.name),s==="Map"||s==="Set"?Array.from(i):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?a(i,p):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},,function(r,u){r.exports=function(e,a){if(e==null)return{};var i,p,s={},o=Object.keys(e);for(p=0;p<o.length;p++)i=o[p],a.indexOf(i)>=0||(s[i]=e[i]);return s},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){r.exports=function(e){if(Array.isArray(e))return e},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){r.exports=function(e,a){var i=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var p,s,o=[],g=!0,m=!1;try{for(i=i.call(e);!(g=(p=i.next()).done)&&(o.push(p.value),!a||o.length!==a);g=!0);}catch(d){m=!0,s=d}finally{try{g||i.return==null||i.return()}finally{if(m)throw s}}return o}},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){"use strict";e.r(u),e.d(u,"Stack",function(){return h});var a,i,p=e(6),s=e.n(p),o=e(5),g=e.n(o),m=e(3),d=e.n(m),x=e(1),l=e.n(x),n=e(0),t=e.n(n),f=e(2),v=e.n(f),T=e(4),D=e(9),j=["horizontal","spacing","size"],N={size:!0},A=v()(T.Box).withConfig({shouldForwardProp:function(w,O){return!N[w]&&O(w)}})(a||(a=d()([`
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: `,`;
  }
`])),function(w){var O=w.theme,R=w.spacing;return O.spaces[R]}),_=v()(D.Flex).withConfig({shouldForwardProp:function(w,O){return!N[w]&&O(w)}})(i||(i=d()([`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: `,`;
  }
`])),function(w){var O=w.theme,R=w.spacing;return O.spaces[R]}),h=Object(x.forwardRef)(function(w,O){var R=w.horizontal,L=w.spacing,M=w.size,B=g()(w,j);return M&&X.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),R?l.a.createElement(_,s()({ref:O,spacing:L||M},B)):l.a.createElement(A,s()({ref:O,spacing:L||M},B))});h.displayName="Stack",h.defaultProps={horizontal:!1,size:void 0,spacing:void 0},h.propTypes={horizontal:t.a.bool,size:t.a.number,spacing:t.a.number}},,function(r,u,e){var a=e(42),i=e(43),p=e(20),s=e(44);r.exports=function(o){return a(o)||i(o)||p(o)||s()},r.exports.default=r.exports,r.exports.__esModule=!0},,function(r,u){r.exports=function(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e},r.exports.default=r.exports,r.exports.__esModule=!0},,,,,function(r,u){r.exports=y},,,,,,function(r,u,e){"use strict";e.r(u),e.d(u,"Icon",function(){return f});var a,i=e(6),p=e.n(i),s=e(3),o=e.n(s),g=e(1),m=e.n(g),d=e(0),x=e.n(d),l=e(4),n=e(2),t=e.n(n)()(l.Box)(a||(a=o()([`
  path {
    fill: `,`;
  }
  `,`
`])),function(v){var T=v.color;return v.theme.colors[T]},function(v){var T=v.theme;return(0,v.colors)(T)}),f=m.a.forwardRef(function(v,T){return m.a.createElement(t,p()({ref:T},v))});f.displayName="Icon",f.defaultProps={color:"neutral600",colors:function(){}},f.propTypes={color:x.a.string,colors:x.a.func}},function(r,u,e){var a=e(19);r.exports=function(i){if(Array.isArray(i))return a(i)},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){r.exports=function(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){r.exports=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},,,,,,,,,,,,,,,,,,function(r,u,e){"use strict";e.r(u),e.d(u,"TextButton",function(){return _});var a,i=e(6),p=e.n(i),s=e(5),o=e.n(s),g=e(3),m=e.n(g),d=e(1),x=e.n(d),l=e(0),n=e.n(l),t=e(2),f=e.n(t),v=e(4),T=e(8),D=e(9),j=e(14),N=["children","startIcon","endIcon","onClick","disabled"],A=f()(D.Flex)(a||(a=m()([`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: `,`;
    }
  }

  svg {
    display: flex;
    font-size: `,`rem;
  }

  svg path {
    fill: `,`;
  }

  `,`
`])),function(h){return h.theme.colors.neutral600},.625,function(h){return h.theme.colors.primary600},j.a),_=x.a.forwardRef(function(h,w){var O=h.children,R=h.startIcon,L=h.endIcon,M=h.onClick,B=h.disabled,q=o()(h,N),G=M&&!B?M:void 0;return x.a.createElement(A,p()({ref:w,"aria-disabled":B,onClick:G,as:"button",type:"button"},q),R&&x.a.createElement(v.Box,{as:"span",paddingRight:2,"aria-hidden":!0},R),x.a.createElement(T.Typography,{variant:"pi",textColor:B?"neutral600":"primary600"},O),L&&x.a.createElement(v.Box,{as:"span",paddingLeft:2,"aria-hidden":!0},L))});_.displayName="TextButton",_.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,onClick:void 0},_.propTypes={children:n.a.node.isRequired,disabled:n.a.bool,endIcon:n.a.element,onClick:n.a.func,startIcon:n.a.element}},,,,,,,,,,,,,,,,,,function(r,u,e){"use strict";e.r(u),e.d(u,"KeyboardNavigable",function(){return v});var a=e(6),i=e.n(a),p=e(28),s=e.n(p),o=e(5),g=e.n(o),m=e(1),d=e.n(m),x=e(0),l=e.n(x),n=e(4),t=e(11),f=["tagName","attributeName"],v=function(T){var D=T.tagName,j=T.attributeName,N=g()(T,f),A=function(){var h=document.activeElement;return D?h.tagName.toLowerCase()===D:h.hasAttribute(j)},_=function(h){return D?h.querySelectorAll(D):h.querySelectorAll("[".concat(j,"]"))};return d.a.createElement(n.Box,i()({onKeyDown:function(h){switch(h.key){case t.a.RIGHT:case t.a.DOWN:h.preventDefault();var w=document.activeElement;if(A()){h.preventDefault();var O=s()(_(h.currentTarget)),R=O.findIndex(function(G){return G===w});O[R+1<O.length?R+1:0].focus()}break;case t.a.LEFT:case t.a.UP:h.preventDefault();var L=document.activeElement;if(A()){h.preventDefault();var M=s()(_(h.currentTarget)),B=M.findIndex(function(G){return G===L});M[B-1>-1?B-1:M.length-1].focus()}break;case t.a.HOME:A()&&(h.preventDefault(),_(h.currentTarget).item(0).focus());break;case t.a.END:if(A()){h.preventDefault();var q=_(h.currentTarget);q.item(q.length-1).focus()}}}},N))};v.defaultProps={attributeName:void 0,tagName:void 0},v.propTypes={attributeName:l.a.string,tagName:l.a.string}},,,,,,,,,,,,,,,,,,function(r,u,e){"use strict";e.r(u),e.d(u,"AccordionTypography",function(){return A}),e.d(u,"Accordion",function(){return h}),e.d(u,"AccordionContent",function(){return B}),e.d(u,"AccordionToggle",function(){return te}),e.d(u,"AccordionGroup",function(){return oe});var a,i,p=e(30),s=e.n(p),o=e(3),g=e.n(o),m=e(1),d=e.n(m),x=e(0),l=e.n(x),n=e(2),t=e.n(n),f=e(8),v=Object(m.createContext)(),T=function(){return Object(m.useContext)(v)},D=e(15),j=e(4),N=e(9),A=t()(f.Typography)(a||(a=g()([""]))),_=t()(j.Box)(i||(i=g()([`
  border: `,`;

  &:hover:not([aria-disabled='true']) {
    border: 1px solid `,`;

    `,` {
      color: `,`;
    }

    `,` {
      color: `,`;
    }

    & > `,` {
      background: `,`;
    }

    [data-strapi-dropdown='true'] {
      background: `,`;
    }
  }
`])),function(c){var b=c.theme,E=c.expanded,C=c.variant,F=c.disabled;return c.error?"1px solid ".concat(b.colors.danger600," !important"):"1px solid ".concat(F?b.colors.neutral150:E?b.colors.primary600:C==="primary"?b.colors.neutral0:b.colors.neutral100)},function(c){return c.theme.colors.primary600},A,function(c){var b=c.theme;return c.expanded?void 0:b.colors.primary700},f.Typography,function(c){var b=c.theme;return c.expanded?void 0:b.colors.primary600},N.Flex,function(c){return c.theme.colors.primary100},function(c){return c.theme.colors.primary200}),h=function(c){var b=c.children,E=c.expanded,C=c.id,F=c.size,I=c.variant,U=c.disabled,H=c.error,W=c.hasErrorMessage,J=c.onToggle,Z=c.toggle,z=Object(D.a)("accordion",C);return d.a.createElement(v.Provider,{value:{expanded:E,onToggle:J,toggle:Z,id:z,size:F,variant:I,disabled:U}},d.a.createElement(_,{"data-strapi-expanded":E,disabled:U,"aria-disabled":U,expanded:E,hasRadius:!0,variant:I,error:H},b),H&&W&&d.a.createElement(j.Box,{paddingTop:1},d.a.createElement(f.Typography,{variant:"pi",textColor:"danger600"},H)))};h.defaultProps=s()({disabled:!1,error:void 0,expanded:!1,hasErrorMessage:!0,id:void 0,toggle:!1,size:"M",variant:"primary",onToggle:void 0},"toggle",void 0),h.propTypes={children:l.a.node.isRequired,disabled:l.a.bool,error:l.a.string,expanded:l.a.bool,hasErrorMessage:l.a.bool,id:l.a.string,onToggle:l.a.func,size:l.a.oneOf(["S","M"]),toggle:l.a.func,variant:l.a.oneOf(["primary","secondary"])};var w=e(6),O=e.n(w),R=e(5),L=e.n(R),M=["children"],B=function(c){var b=c.children,E=L()(c,M),C=T(),F=C.expanded,I=C.id;if(!F)return null;var U="accordion-content-".concat(I),H="accordion-label-".concat(I),W="accordion-desc-".concat(I);return d.a.createElement(j.Box,O()({role:"region",id:U,"aria-labelledby":H,"aria-describedby":W},E),b)};B.propTypes={children:l.a.node.isRequired};var q,G,xe=e(35),ye=e.n(xe),we=e(62),ie=e(26),Te=e(41),Oe=["title","description","as","togglePosition","action"],ue=t()(we.TextButton)(q||(q=g()([`
  text-align: left;

  svg {
    width: `,`rem;
    height: `,`rem;

    path {
      fill: `,`;
    }
  }
`])),.875,.875,function(c){var b=c.theme;return c.expanded?b.colors.primary600:b.colors.neutral500}),ce=t()(N.Flex)(G||(G=g()([`
  height: `,`;
  border-radius: `,`;

  &:hover {
    svg {
      path {
        fill: `,`;
      }
    }
  }
`])),function(c){var b=c.theme,E=c.size;return b.sizes.accordions[E]},function(c){var b=c.theme;return c.expanded?"".concat(b.borderRadius," ").concat(b.borderRadius," 0 0"):b.borderRadius},function(c){return c.theme.colors.primary600}),te=function(c){var b=c.title,E=c.description,C=c.as,F=c.togglePosition,I=c.action,U=L()(c,Oe),H=Object(m.useRef)(null),W=T(),J=W.onToggle,Z=W.toggle,z=W.expanded,ae=W.id,V=W.size,ze=W.variant,K=W.disabled,pe="accordion-content-".concat(ae),$="accordion-label-".concat(ae),fe="accordion-desc-".concat(ae),ee=V==="M"?6:4,ge=function(Y){var _e=Y.expanded,Re=Y.disabled,ke=Y.variant;return _e?"primary100":Re?"neutral150":ke==="primary"?"neutral0":"neutral100"}({expanded:z,disabled:K,variant:ze}),ne=z?"primary600":"neutral700",me=z?"primary600":"neutral600",Pe=z?"primary200":"neutral200",he="".concat(V==="M"?2:1.5,"rem"),be=function(){K||(Z&&!J?(X.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),Z()):J())},ve=d.a.createElement(N.Flex,{justifyContent:"center",borderRadius:"50%",height:he,width:he,transform:z?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,disabled:K,"aria-hidden":!0,as:"span",background:Pe,cursor:K?"not-allowed":"pointer",onClick:function(){var Y;return H==null||(Y=H.current)===null||Y===void 0?void 0:Y.click()}},d.a.createElement(Te.Icon,{as:ye.a,width:"".concat(V==="M"?11/16:.5,"rem"),color:z?"primary600":"neutral600"}));return F==="left"?d.a.createElement(ce,{paddingLeft:ee,paddingRight:ee,background:ge,expanded:z,justifyContent:"space-between",size:V,cursor:K?"not-allowed":""},d.a.createElement(ie.Stack,{horizontal:!0,spacing:3,flex:1},ve,d.a.createElement(ue,O()({ref:H,onClick:be,"aria-disabled":K,"aria-expanded":z,"aria-controls":pe,"aria-labelledby":$,"data-strapi-accordion-toggle":!0,expanded:z,type:"button",flex:1},U),d.a.createElement(d.a.Fragment,null,V==="S"?d.a.createElement(f.Typography,{fontWeight:"bold",as:C,id:$,textColor:ne},b):d.a.createElement(A,{variant:"delta",as:C,id:$,textColor:ne},b),E&&d.a.createElement(f.Typography,{as:"p",id:fe,textColor:me},E)))),I):d.a.createElement(ce,{paddingRight:ee,paddingLeft:ee,background:ge,expanded:z,size:V,justifyContent:"space-between",cursor:K?"not-allowed":""},d.a.createElement(ue,O()({ref:H,onClick:be,"aria-disabled":K,"aria-expanded":z,"aria-controls":pe,"aria-labelledby":$,"data-strapi-accordion-toggle":!0,expanded:z,type:"button",flex:1},U),d.a.createElement(d.a.Fragment,null,V==="S"?d.a.createElement(f.Typography,{fontWeight:"bold",as:C,id:$,textColor:ne},b):d.a.createElement(f.Typography,{variant:"delta",as:C,id:$,textColor:ne},b),E&&d.a.createElement(f.Typography,{as:"p",id:fe,textColor:me},E))),d.a.createElement(ie.Stack,{horizontal:!0,spacing:3},ve,I))};te.defaultProps={action:void 0,as:"span",description:void 0,variant:"primary",togglePosition:"right"},te.propTypes={action:l.a.node,as:l.a.string,description:l.a.string,title:l.a.string.isRequired,togglePosition:l.a.oneOf(["right","left"]),variant:l.a.oneOf(["primary","secondary"])};var se,le,de,Ee=e(80),Se=t()(j.Box)(se||(se=g()([`
  border-bottom: 1px solid `,`;
  border-right: 1px solid `,`;
  border-left: 1px solid `,`;
  border-radius: 0 0 `," ",`;
`])),function(c){return c.theme.colors.neutral200},function(c){return c.theme.colors.neutral200},function(c){return c.theme.colors.neutral200},function(c){return c.theme.borderRadius},function(c){return c.theme.borderRadius}),je=t()(j.Box)(le||(le=g()([`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid `,`;
    border-left: 1px solid `,`;
    border-bottom: 1px solid `,`;
  }

  & > *:first-of-type {
    border-top: 1px solid `,`;
    border-radius: `," ",` 0 0;
    & > * {
      border-radius: `," ",` 0 0;
    }

    &:hover {
      border-top: 1px solid `,`;
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid `,`;
  }

  `,`
`])),function(c){return c.theme.colors.neutral200},function(c){return c.theme.colors.neutral200},function(c){return c.theme.colors.neutral200},function(c){return c.theme.colors.neutral200},function(c){return c.theme.borderRadius},function(c){return c.theme.borderRadius},function(c){return c.theme.borderRadius},function(c){return c.theme.borderRadius},function(c){return c.theme.colors.primary600},function(c){return c.theme.colors.primary600},function(c){var b=c.theme,E=c.footer;return`
    &:not(`.concat(E,`) {
      & > *:last-of-type {
        border-radius: 0 0 `).concat(b.borderRadius," ").concat(b.borderRadius,`;
      }
    }
  `)}),Ce=t()(j.Box)(de||(de=g()([`
  svg path {
    fill: `,`;
  }
`])),function(c){return c.theme.colors.neutral500}),oe=function(c){var b=c.children,E=c.footer,C=c.label,F=c.labelAction,I=c.error,U=m.Children.toArray(b).map(function(H){return Object(m.cloneElement)(H,{hasErrorMessage:!1})});return d.a.createElement(Ee.KeyboardNavigable,{attributeName:"data-strapi-accordion-toggle"},C&&d.a.createElement(N.Flex,{paddingBottom:1},d.a.createElement(f.Typography,{variant:"pi",as:"label",textColor:"neutral800",fontWeight:"bold"},C),F&&d.a.createElement(Ce,{paddingLeft:1},F)),d.a.createElement(je,{footer:E},U),E&&d.a.createElement(Se,null,E),I&&d.a.createElement(j.Box,{paddingTop:1},d.a.createElement(f.Typography,{variant:"pi",textColor:"danger600"},I)))};oe.defaultProps={footer:null,error:void 0,label:null,labelAction:void 0},oe.propTypes={children:l.a.node.isRequired,error:l.a.string,footer:l.a.node,label:l.a.string,labelAction:l.a.node}}])})},68717:function(Q,re,P){(function(X,k){Q.exports=k(P(67294))})(this,function(X){return function(k){var S={};function y(r){if(S[r])return S[r].exports;var u=S[r]={i:r,l:!1,exports:{}};return k[r].call(u.exports,u,u.exports,y),u.l=!0,u.exports}return y.m=k,y.c=S,y.d=function(r,u,e){y.o(r,u)||Object.defineProperty(r,u,{enumerable:!0,get:e})},y.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},y.t=function(r,u){if(1&u&&(r=y(r)),8&u||4&u&&typeof r=="object"&&r&&r.__esModule)return r;var e=Object.create(null);if(y.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&u&&typeof r!="string")for(var a in r)y.d(e,a,function(i){return r[i]}.bind(null,a));return e},y.n=function(r){var u=r&&r.__esModule?function(){return r.default}:function(){return r};return y.d(u,"a",u),u},y.o=function(r,u){return Object.prototype.hasOwnProperty.call(r,u)},y.p="",y(y.s=5)}({0:function(k,S){k.exports=X},5:function(k,S,y){"use strict";y.r(S);var r=y(0);function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&(e[p]=i[p])}return e}).apply(this,arguments)}S.default=function(e){return r.createElement("svg",u({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}})})},35161:(Q,re,P)=>{var X=P(29932),k=P(67206),S=P(69199),y=P(1469);function r(u,e){var a=y(u)?X:S;return a(u,k(e,3))}Q.exports=r}}]);
