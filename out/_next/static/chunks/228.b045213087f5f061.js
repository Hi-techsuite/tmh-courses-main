(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},594:function(e,t,n){"use strict";var u=n(5318);t.Z=void 0;var o=u(n(4938)),r=n(5893),s=(0,o.default)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=s},4938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u.createSvgIcon}});var u=n(5633)},5633:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return r},createSvgIcon:function(){return s.Z},debounce:function(){return i},deprecatedPropType:function(){return a},isMuiElement:function(){return d},ownerDocument:function(){return m},ownerWindow:function(){return p},requirePropFactory:function(){return v},setRef:function(){return _},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return x},unsupportedProp:function(){return N},useControlled:function(){return j},useEventCallback:function(){return y.Z},useForkRef:function(){return M.Z},useIsFocusVisible:function(){return k.Z}});var u=n(8076),o=n(8216);var r=function(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))},s=n(8169);var i=function(e,t=166){let n;function u(...u){clearTimeout(n),n=setTimeout((()=>{e.apply(this,u)}),t)}return u.clear=()=>{clearTimeout(n)},u};var a=function(e,t){return()=>null},l=n(7294),c=n.t(l,2);var d=function(e,t){return l.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)};function f(e){return e&&e.ownerDocument||document}var m=f;var p=function(e){return f(e).defaultView||window};n(7462);var v=function(e,t){return()=>null},_=n(7960).Z,h=n(8974);let C=0;const b=c.useId;var x=function(e){if(void 0!==b){const t=b();return null!=e?e:t}return function(e){const[t,n]=l.useState(e),u=e||t;return l.useEffect((()=>{null==t&&(C+=1,n(`mui-${C}`))}),[t]),u}(e)};var N=function(e,t,n,u,o){return null};var j=function({controlled:e,default:t,name:n,state:u="value"}){const{current:o}=l.useRef(void 0!==e),[r,s]=l.useState(t);return[o?e:r,l.useCallback((e=>{o||s(e)}),[])]},y=n(9327),M=n(8031),k=n(8791);const g={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),u.Z.configure(e)}}},9228:function(e,t,n){"use strict";n.r(t);var u=n(5893),o=n(7294),r=n(7948),s=n(594);t.default=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],i=function(){n(!t)};return(0,u.jsxs)("section",{className:"bookConsultSection",id:"getStarted",children:[(0,u.jsx)(r.Z,{maxWidth:"lg",children:(0,u.jsxs)("div",{className:"bookConsultSection_div",children:[(0,u.jsxs)("div",{className:"bookConsultSection_div1",children:["Ready to start learning?"," ",(0,u.jsx)("div",{className:"bookConsultSection_div1_para",children:"Get a free consultation with one of our Portolfio Managers"})]}),(0,u.jsx)("div",{className:"bookConsultSection_div2",children:(0,u.jsx)("button",{className:"bookConsultSection_div2_btn",onClick:i,children:"Book Consultation"})})]})}),t?(0,u.jsx)("div",{className:"ConsultModal",children:(0,u.jsxs)("div",{className:"ConsultModal_div",children:[(0,u.jsxs)("div",{className:"ConsultModal_div_title",children:["Free Consultation ",(0,u.jsx)(s.Z,{className:"ConsultModal_div_title_icon",onClick:i})," "]}),(0,u.jsxs)("div",{className:"ConsultModal_div_body",children:[(0,u.jsx)("input",{type:"text",className:"ConsultModal_div_body_input",placeholder:"Full Name"}),(0,u.jsx)("input",{type:"text",className:"ConsultModal_div_body_input",placeholder:"Phone Number"}),(0,u.jsx)("input",{type:"text",className:"ConsultModal_div_body_input",placeholder:"Email address"}),(0,u.jsx)("input",{type:"text",className:"ConsultModal_div_body_input",placeholder:"Country"})]}),(0,u.jsx)("button",{className:"ConsultModal_div_btn",children:"Send Message"})]})}):null]})}}}]);