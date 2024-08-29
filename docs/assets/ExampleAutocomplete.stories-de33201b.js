var $=Object.defineProperty;var B=(r,e,o)=>e in r?$(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var C=(r,e,o)=>(B(r,typeof e!="symbol"?e+"":e,o),o);import{a as g,j as c}from"./jsx-runtime-c9381026.js";import{a as U}from"./client-61efaaa8.js";import{r as n}from"./index-8b3efc3f.js";import"./index-a38d0dca.js";import"./_commonjsHelpers-de833af9.js";class k{constructor(e="https://api-adresse.data.gouv.fr"){C(this,"baseURL");this.baseURL=e}buildQueryString(e){return Object.entries(e).map(([o,l])=>`${encodeURIComponent(o)}=${encodeURIComponent(l)}`).join("&")}async searchAddress(e){const o=this.buildQueryString(e),l=`${this.baseURL}/search/?${o}`;try{const i=await fetch(l);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return await i.json()}catch(i){throw new Error(`Erreur lors de la recherche d'adresse: ${i}`)}}async autocompleteAddress(e,o=5){return this.searchAddress({q:e,autocomplete:1,limit:o})}}const z=r=>c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"size-5",viewBox:"0 0 20 20",...r,children:c("path",{fillRule:"evenodd",d:"m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z",clipRule:"evenodd"})});function v({onSuggestionSelected:r,debounce:e=500,limit:o=5,hasWatermark:l=!0,containerStyle:i={},suggestionStyle:w={}}){const t=n.useRef(null),[d,y]=n.useState([]),[x,L]=n.useState(""),[b,E]=n.useState(!1),[p,j]=n.useState({top:0,left:0,width:0}),A=()=>{t.current&&L(t.current.value)};return n.useEffect(()=>{if(!x){y([]);return}const m=setTimeout(async()=>{E(!0);try{const u=await new k().autocompleteAddress(x,o);y(u.features)}catch(a){console.error("Error fetching suggestions:",a)}finally{E(!1)}},e);return()=>clearTimeout(m)},[x]),n.useEffect(()=>{const s=t.current;if(s)return s.addEventListener("input",A),()=>{s.removeEventListener("input",A)}},[t]),n.useEffect(()=>{if(t.current){const{top:s,left:m,height:a,width:u}=t.current.getBoundingClientRect();j({top:0,left:0,width:u})}},[t.current,d]),n.useEffect(()=>{var s;if(t.current&&d.length>0){const m=g("ul",{style:{position:"absolute",top:p.top,left:p.left,width:p.width,border:"1px solid #E7E7E7",backgroundColor:"white",zIndex:1e3,listStyleType:"none",margin:0,padding:0,maxHeight:"200px",overflowY:"auto",borderRadius:"4px",...i},children:[b?c("li",{style:{padding:"8px",textAlign:"center"},children:"Chargement..."}):d.map((S,V)=>g("li",{style:{padding:"8px",borderBottom:"1px solid #E7E7E7",cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap",overflow:"hidden",...w},onMouseDown:()=>{t.current&&(t.current.value=S.properties.label,y([]),r&&r(S))},children:[c(z,{width:14,color:"#cecece"})," ",S.properties.label]},V)),l&&g("li",{style:{fontSize:"0.5em",textAlign:"right",padding:"8px",textTransform:"uppercase",color:"#cecece"},children:["Propulsé par ",c("a",{href:"https://api-adresse.data.gouv.fr/",children:"adresse.data.gouv"})]})]}),a=document.createElement("div");if(a.style.position="relative",!t.current)return;(s=t.current.parentNode)==null||s.insertBefore(a,t.current.nextSibling);const u=U(a);return u.render(m),()=>{u.unmount(),a.remove()}}},[d,p,t,b]),{ref:t}}try{v.displayName="useAutocomplete",v.__docgenInfo={description:"",displayName:"useAutocomplete",props:{onSuggestionSelected:{defaultValue:null,description:"",name:"onSuggestionSelected",required:!1,type:{name:"((suggestion: AutocompleteFeature) => void)"}},debounce:{defaultValue:{value:"500"},description:"",name:"debounce",required:!1,type:{name:"number"}},limit:{defaultValue:{value:"5"},description:"",name:"limit",required:!1,type:{name:"number"}},hasWatermark:{defaultValue:{value:"true"},description:"",name:"hasWatermark",required:!1,type:{name:"boolean"}},containerStyle:{defaultValue:{value:"{}"},description:"",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},suggestionStyle:{defaultValue:{value:"{}"},description:"",name:"suggestionStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}function N(){const{ref:r}=v({});return g("div",{children:[c("h1",{children:"Test de recherche"}),c("input",{ref:r,name:"search",style:{position:"relative",width:"300px",padding:"8px",fontSize:"16px",border:"1px solid #ccc",borderRadius:"4px"}})]})}const O={title:"Example/ExampleAutocomplete",component:N,tags:["autodocs"],argTypes:{initialCount:{control:"number"}}},f={args:{}},h={args:{}};var R,I,_;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {}
}`,...(_=(I=f.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,P,T;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {}
}`,...(T=(P=h.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const Z=["Default","WithInitialCount"];export{f as Default,h as WithInitialCount,Z as __namedExportsOrder,O as default};
