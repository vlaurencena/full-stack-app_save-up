(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[4121],{81610:(K,V,d)=>{"use strict";K.exports=d(96233)},96233:function(K,V,d){(function(s,O){K.exports=O(d(67294),d(78384))})(this,function(s,O){return function(r){var h={};function t(i){if(h[i])return h[i].exports;var a=h[i]={i,l:!1,exports:{}};return r[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=r,t.c=h,t.d=function(i,a,u){t.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:u})},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,a){if(1&a&&(i=t(i)),8&a||4&a&&typeof i=="object"&&i&&i.__esModule)return i;var u=Object.create(null);if(t.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:i}),2&a&&typeof i!="string")for(var l in i)t.d(u,l,function(n){return i[n]}.bind(null,l));return u},t.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(a,"a",a),a},t.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},t.p="",t(t.s=121)}({0:function(r,h,t){r.exports=t(17)()},1:function(r,h){r.exports=s},10:function(r,h,t){var i=t(23),a=t(24),u=t(20),l=t(25);r.exports=function(n,b){return i(n)||a(n,b)||u(n,b)||l()},r.exports.default=r.exports,r.exports.__esModule=!0},121:function(r,h,t){"use strict";t.r(h),t.d(h,"Switch",function(){return W});var i,a,u=t(6),l=t.n(u),n=t(5),b=t.n(n),p=t(3),g=t.n(p),S=t(1),v=t.n(S),e=t(0),o=t.n(e),c=t(2),w=t.n(c),B=t(9),Y=t(4),I=["label","onChange","onLabel","offLabel","selected","visibleLabels"],R=w.a.div(i||(i=g()([`
  background: `,`;
  border: none;
  border-radius: 16px;
  position: relative;
  height: `,`rem;
  width: `,`rem;

  & span {
    font-size: `,`;
  }

  &:before {
    content: '';
    background: `,`;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: `,`;
    top: `,`;
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`])),function(T){return T.theme.colors.danger500},1.5,2.5,function(T){return T.visibleLabels?"1rem":0},function(T){return T.theme.colors.neutral0},function(T){return T.theme.spaces[1]},function(T){return T.theme.spaces[1]}),J=w.a.button(a||(a=g()([`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] `,` {
    background: `,`;
  }

  &[aria-checked='true'] `,`:before {
    transform: translateX(1rem);
  }
`])),R,function(T){return T.theme.colors.success500},R),W=v.a.forwardRef(function(T,q){var _=T.label,ee=T.onChange,z=T.onLabel,G=T.offLabel,H=T.selected,te=T.visibleLabels,ne=b()(T,I);return v.a.createElement(J,l()({ref:q,role:"switch","aria-checked":H,"aria-label":_,onClick:ee,visibleLabels:te,type:"button"},ne),v.a.createElement(B.Flex,null,v.a.createElement(R,null,v.a.createElement("span",null,z),v.a.createElement("span",null,G)),te&&v.a.createElement(Y.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:H?"success600":"danger600"},H?z:G)))});W.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},W.propTypes={label:o.a.string.isRequired,offLabel:o.a.string,onChange:o.a.func.isRequired,onLabel:o.a.string,selected:o.a.bool.isRequired,visibleLabels:o.a.bool},W.displayName="Switch"},13:function(r,h){function t(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=t=function(a){return typeof a},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r.exports.default=r.exports,r.exports.__esModule=!0),t(i)}r.exports=t,r.exports.default=r.exports,r.exports.__esModule=!0},17:function(r,h,t){"use strict";var i=t(18);function a(){}function u(){}u.resetWarningCache=a,r.exports=function(){function l(p,g,S,v,e,o){if(o!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return l}l.isRequired=l;var b={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:n,element:l,elementType:l,instanceOf:n,node:l,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:u,resetWarningCache:a};return b.PropTypes=b,b}},18:function(r,h,t){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(r,h){r.exports=function(t,i){(i==null||i>t.length)&&(i=t.length);for(var a=0,u=new Array(i);a<i;a++)u[a]=t[a];return u},r.exports.default=r.exports,r.exports.__esModule=!0},2:function(r,h){r.exports=O},20:function(r,h,t){var i=t(19);r.exports=function(a,u){if(a){if(typeof a=="string")return i(a,u);var l=Object.prototype.toString.call(a).slice(8,-1);return l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set"?Array.from(a):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?i(a,u):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},22:function(r,h){r.exports=function(t,i){if(t==null)return{};var a,u,l={},n=Object.keys(t);for(u=0;u<n.length;u++)a=n[u],i.indexOf(a)>=0||(l[a]=t[a]);return l},r.exports.default=r.exports,r.exports.__esModule=!0},23:function(r,h){r.exports=function(t){if(Array.isArray(t))return t},r.exports.default=r.exports,r.exports.__esModule=!0},24:function(r,h){r.exports=function(t,i){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var u,l,n=[],b=!0,p=!1;try{for(a=a.call(t);!(b=(u=a.next()).done)&&(n.push(u.value),!i||n.length!==i);b=!0);}catch(g){p=!0,l=g}finally{try{b||a.return==null||a.return()}finally{if(p)throw l}}return n}},r.exports.default=r.exports,r.exports.__esModule=!0},25:function(r,h){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},3:function(r,h){r.exports=function(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},4:function(r,h,t){"use strict";t.r(h),t.d(h,"Box",function(){return v});var i,a=t(3),u=t.n(a),l=t(0),n=t.n(l),b=t(2),p=t.n(b),g=t(7),S={color:!0},v=p.a.div.withConfig({shouldForwardProp:function(e,o){return!S[e]&&o(e)}})(i||(i=u()([`
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
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,c=e.background;return o.colors[c]},function(e){var o=e.theme,c=e.color;return o.colors[c]},function(e){var o=e.theme,c=e.padding;return Object(g.a)("padding",c,o)},function(e){var o=e.theme,c=e.paddingTop;return Object(g.a)("padding-top",c,o)},function(e){var o=e.theme,c=e.paddingRight;return Object(g.a)("padding-right",c,o)},function(e){var o=e.theme,c=e.paddingBottom;return Object(g.a)("padding-bottom",c,o)},function(e){var o=e.theme,c=e.paddingLeft;return Object(g.a)("padding-left",c,o)},function(e){var o=e.theme,c=e.marginLeft;return Object(g.a)("margin-left",c,o)},function(e){var o=e.theme,c=e.marginRight;return Object(g.a)("margin-right",c,o)},function(e){var o=e.theme,c=e.marginTop;return Object(g.a)("margin-top",c,o)},function(e){var o=e.theme,c=e.marginBottom;return Object(g.a)("margin-bottom",c,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,c=e.hasRadius,w=e.borderRadius;return c?o.borderRadius:w},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,c=e.borderColor,w=e.borderStyle,B=e.borderWidth;if(c&&!w&&!B)return"1px solid ".concat(o.colors[c])},function(e){var o=e.theme,c=e.shadow;return o.shadows[c]},function(e){return e.pointerEvents},function(e){var o=e._hover,c=e.theme;return o?o(c):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});v.displayName="Box",v.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},v.propTypes={_hover:n.a.func,background:n.a.string,basis:n.a.oneOfType([n.a.string,n.a.string]),borderColor:n.a.string,children:n.a.oneOfType([n.a.node,n.a.string]),color:n.a.string,flex:n.a.oneOfType([n.a.string,n.a.string]),grow:n.a.oneOfType([n.a.string,n.a.string]),hasRadius:n.a.bool,hiddenS:n.a.bool,hiddenXS:n.a.bool,padding:n.a.oneOfType([n.a.number,n.a.arrayOf(n.a.number)]),paddingBottom:n.a.oneOfType([n.a.number,n.a.arrayOf(n.a.number)]),paddingLeft:n.a.oneOfType([n.a.number,n.a.arrayOf(n.a.number)]),paddingRight:n.a.oneOfType([n.a.number,n.a.arrayOf(n.a.number)]),paddingTop:n.a.oneOfType([n.a.number,n.a.arrayOf(n.a.number)]),shadow:n.a.string,shrink:n.a.oneOfType([n.a.string,n.a.string])}},5:function(r,h,t){var i=t(22);r.exports=function(a,u){if(a==null)return{};var l,n,b=i(a,u);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(n=0;n<p.length;n++)l=p[n],u.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(a,l)&&(b[l]=a[l])}return b},r.exports.default=r.exports,r.exports.__esModule=!0},6:function(r,h){function t(){return r.exports=t=Object.assign||function(i){for(var a=1;a<arguments.length;a++){var u=arguments[a];for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&(i[l]=u[l])}return i},r.exports.default=r.exports,r.exports.__esModule=!0,t.apply(this,arguments)}r.exports=t,r.exports.default=r.exports,r.exports.__esModule=!0},7:function(r,h,t){"use strict";var i=t(10),a=t.n(i),u=t(13),l=t.n(u);h.a=function(n,b,p){var g=b;if(Array.isArray(b)||l()(b)!=="object"||(g=[b==null?void 0:b.desktop,b==null?void 0:b.tablet,b==null?void 0:b.mobile]),g!==void 0){if(Array.isArray(g)){var S=g,v=a()(S,3),e=v[0],o=v[1],c=v[2],w="".concat(n,": ").concat(p.spaces[e],";");return o!==void 0&&(w+="".concat(p.mediaQueries.tablet,`{
          `).concat(n,": ").concat(p.spaces[o],`;
        }`)),c!==void 0&&(w+="".concat(p.mediaQueries.mobile,`{
          `).concat(n,": ").concat(p.spaces[c],`;
        }`)),w}var B=p.spaces[g]||g;return"".concat(n,": ").concat(B,";")}}},9:function(r,h,t){"use strict";t.r(h),t.d(h,"Flex",function(){return v});var i,a=t(3),u=t.n(a),l=t(0),n=t.n(l),b=t(2),p=t.n(b),g=t(4),S={direction:!0},v=p()(g.Box).withConfig({shouldForwardProp:function(e,o){return!S[e]&&o(e)}})(i||(i=u()([`
  display: `,`;
  flex-direction: `,`;
  justify-content: `,`;
  align-items: `,`;
  flex-wrap: `,`;
`])),function(e){return e.inline?"inline-flex":"flex"},function(e){return e.direction},function(e){return e.justifyContent},function(e){return e.alignItems},function(e){return e.wrap});v.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},v.propTypes={alignItems:n.a.string,basis:n.a.oneOfType([n.a.string,n.a.number]),direction:n.a.string,inline:n.a.bool,justifyContent:n.a.string,reverse:n.a.bool,wrap:n.a.string}}})})},77967:(K,V,d)=>{"use strict";d.r(V),d.d(V,{default:()=>xe});var s=d(67294),O=d(68547),r=d(92699),h=d(49656),t=d(97132),i=d(78862),a=d(62791),u=d(67826),l=d(9008),n=d(30741),b=d(59522),p=d(41798),g=d(49425),S=d(19408),v=d(26851),e=d(81610),o=d(62031),c=d(60985),w=d(84686),B=d(5493),Y=d(80768),I=d.n(Y),R=d(19352),J=d.n(R),W=d(18568),T=d.n(W),q=d(85407),_=d.n(q),ee=d(8041),z=d(36968),G=d.n(z);const H={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0},ne=(E,y)=>(0,ee.default)(E,m=>{switch(y.type){case"GET_DATA_SUCCEEDED":{m.webhooks=y.data,m.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{m.loadingWebhooks=!E.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{G()(m,["webhooks",...y.keys],y.value);break}case"SET_WEBHOOK_TO_DELETE":{m.webhookToDelete=y.id;break}case"SET_WEBHOOKS_TO_DELETE":{y.value?m.webhooksToDelete.push(y.id):m.webhooksToDelete=E.webhooksToDelete.filter(k=>k!==y.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{E.webhooksToDelete.length===0?m.webhooksToDelete=E.webhooks.map(k=>k.id):m.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{m.webhooks=E.webhooks.filter(k=>!E.webhooksToDelete.includes(k.id)),m.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{m.webhooks=E.webhooks.filter((k,j)=>j!==y.index),m.webhookToDelete=null;break}default:return m}});var pe=d(25108),he=Object.defineProperty,me=Object.defineProperties,be=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,ie=(E,y,m)=>y in E?he(E,y,{enumerable:!0,configurable:!0,writable:!0,value:m}):E[y]=m,N=(E,y)=>{for(var m in y||(y={}))ge.call(y,m)&&ie(E,m,y[m]);if(ae)for(var m of ae(y))ye.call(y,m)&&ie(E,m,y[m]);return E},ve=(E,y)=>me(E,be(y)),$=(E,y,m)=>new Promise((k,j)=>{var A=D=>{try{x(m.next(D))}catch(M){j(M)}},C=D=>{try{x(m.throw(D))}catch(M){j(M)}},x=D=>D.done?k(D.value):Promise.resolve(D.value).then(A,C);x((m=m.apply(E,y)).next())});const Ee=()=>{const{isLoading:E,allowedActions:{canCreate:y,canRead:m,canUpdate:k,canDelete:j}}=(0,O.useRBAC)(r.Z.settings.webhooks),A=(0,O.useNotification)(),C=(0,s.useRef)(!0),{formatMessage:x}=(0,t.useIntl)(),[D,M]=(0,s.useState)(!1),[{webhooks:U,webhooksToDelete:Q,webhookToDelete:oe,loadingWebhooks:re},P]=(0,s.useReducer)(ne,H),{notifyStatus:Te}=(0,w.useNotifyAT)();(0,O.useFocusWhenNavigate)();const{push:Oe}=(0,h.useHistory)(),{pathname:se}=(0,h.useLocation)(),X=U.length,F=Q.length,le=f=>U.findIndex(L=>L.id===f);(0,s.useEffect)(()=>(C.current=!0,()=>{C.current=!1}),[]),(0,s.useEffect)(()=>{m&&we()},[m]);const we=()=>$(void 0,null,function*(){try{const{data:f}=yield(0,O.request)("/admin/webhooks",{method:"GET"});C.current&&(P({type:"GET_DATA_SUCCEEDED",data:f}),Te("webhooks have been loaded"))}catch(f){pe.log(f),C.current&&(f.code!==20&&A({type:"warning",message:{id:"notification.error"}}),P({type:"TOGGLE_LOADING"}))}}),Se=()=>{M(f=>!f)},ke=()=>{oe?Le():Ce()},Le=()=>$(void 0,null,function*(){try{yield(0,O.request)(`/admin/webhooks/${oe}`,{method:"DELETE"}),P({type:"WEBHOOK_DELETED",index:le(oe)})}catch(f){f.code!==20&&A({type:"warning",message:{id:"notification.error"}})}M(!1)}),Ce=()=>$(void 0,null,function*(){const f={ids:Q};try{yield(0,O.request)("/admin/webhooks/batch-delete",{method:"POST",body:f}),C.current&&P({type:"WEBHOOKS_DELETED"})}catch(L){C.current&&L.code!==20&&A({type:"warning",message:{id:"notification.error"}})}M(!1)}),ue=f=>{M(!0),f!=="all"&&P({type:"SET_WEBHOOK_TO_DELETE",id:f})},De=(f,L)=>$(void 0,null,function*(){const ce=le(L),Be=U[ce],de=[ce,"isEnabled"],fe=ve(N({},Be),{isEnabled:f});delete fe.id;try{P({type:"SET_WEBHOOK_ENABLED",keys:de,value:f}),yield(0,O.request)(`/admin/webhooks/${L}`,{method:"PUT",body:fe})}catch(je){C.current&&(P({type:"SET_WEBHOOK_ENABLED",keys:de,value:!f}),je.code!==20&&A({type:"warning",message:{id:"notification.error"}}))}}),Pe=()=>{P({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},Me=(f,L)=>{P({type:"SET_WEBHOOKS_TO_DELETE",value:f,id:L})},Z=f=>{Oe(`${se}/${f}`)};return s.createElement(i.Layout,null,s.createElement(O.SettingsPageTitle,{name:"Webhooks"}),s.createElement(o.Main,{"aria-busy":E||re},s.createElement(i.HeaderLayout,{title:x({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:x({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:y&&!re&&s.createElement(c.LinkButton,{startIcon:s.createElement(I(),null),variant:"default",to:`${se}/create`,size:"L"},x({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),F>0&&j&&s.createElement(i.ActionLayout,{startActions:s.createElement(s.Fragment,null,s.createElement(g.Typography,{variant:"epsilon",textColor:"neutral600"},x({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:F})),s.createElement(S.Button,{onClick:()=>ue("all"),startIcon:s.createElement(T(),null),size:"L",variant:"danger-light"},x({id:"global.delete",defaultMessage:"Delete"})))}),s.createElement(i.ContentLayout,null,E||re?s.createElement(B.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},s.createElement(O.LoadingIndicatorPage,null)):s.createElement(s.Fragment,null,X>0?s.createElement(p.Table,{colCount:5,rowCount:X+1,footer:s.createElement(p.TFooter,{onClick:()=>y?Z("create"):{},icon:s.createElement(I(),null)},x({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},s.createElement(p.Thead,null,s.createElement(p.Tr,null,s.createElement(p.Th,null,s.createElement(b.BaseCheckbox,{"aria-label":x({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:F>0&&F<X,value:F===X,onValueChange:Pe})),s.createElement(p.Th,{width:"20%"},s.createElement(g.Typography,{variant:"sigma",textColor:"neutral600"},x({id:"global.name",defaultMessage:"Name"}))),s.createElement(p.Th,{width:"60%"},s.createElement(g.Typography,{variant:"sigma",textColor:"neutral600"},x({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),s.createElement(p.Th,{width:"20%"},s.createElement(g.Typography,{variant:"sigma",textColor:"neutral600"},x({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),s.createElement(p.Th,null,s.createElement(v.VisuallyHidden,null,x({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),s.createElement(p.Tbody,null,U.map(f=>s.createElement(p.Tr,N({key:f.id},(0,O.onRowClick)({fn:()=>Z(f.id),condition:k})),s.createElement(p.Td,N({},O.stopPropagation),s.createElement(b.BaseCheckbox,{"aria-label":`${x({id:"global.select",defaultMessage:"Select"})} ${f.name}`,value:Q==null?void 0:Q.includes(f.id),onValueChange:L=>Me(L,f.id),id:"select",name:"select"})),s.createElement(p.Td,null,s.createElement(g.Typography,{fontWeight:"semiBold",textColor:"neutral800"},f.name)),s.createElement(p.Td,null,s.createElement(g.Typography,{textColor:"neutral800"},f.url)),s.createElement(p.Td,null,s.createElement(u.Flex,N({},O.stopPropagation),s.createElement(e.Switch,{onLabel:x({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:x({id:"global.disabled",defaultMessage:"Disabled"}),label:`${f.name} ${x({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:f.isEnabled,onChange:()=>De(!f.isEnabled,f.id),visibleLabels:!0}))),s.createElement(p.Td,null,s.createElement(l.Stack,N({horizontal:!0,spacing:1},O.stopPropagation),k&&s.createElement(n.IconButton,{onClick:()=>{Z(f.id)},label:x({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:s.createElement(J(),null),noBorder:!0}),j&&s.createElement(n.IconButton,{onClick:()=>ue(f.id),label:x({id:"global.delete",defaultMessage:"Delete"}),icon:s.createElement(T(),null),noBorder:!0,id:`delete-${f.id}`}))))))):s.createElement(a.EmptyStateLayout,{icon:s.createElement(_(),{width:"160px"}),content:x({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:s.createElement(S.Button,{variant:"secondary",startIcon:s.createElement(I(),null),onClick:()=>y?Z("create"):{}},x({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))})))),s.createElement(O.ConfirmDialog,{isOpen:D,onToggleDialog:Se,onConfirm:ke}))},xe=()=>s.createElement(O.CheckPagePermissions,{permissions:r.Z.settings.webhooks.main},s.createElement(Ee,null))}}]);
