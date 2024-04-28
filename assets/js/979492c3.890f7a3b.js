"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8903],{6550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(4848),a=r(8453),s=r(9489),u=r(7227);const l={sidebar_label:"Start your cluster"},o="Start your cluster",c={id:"docs/reusable_snippets/start_your_cluster",title:"start_your_cluster",description:"Starting a SuperDuperDB cluster is useful in production and model development",source:"@site/content/docs/reusable_snippets/start_your_cluster.md",sourceDirName:"docs/reusable_snippets",slug:"/docs/reusable_snippets/start_your_cluster",permalink:"/docs/docs/reusable_snippets/start_your_cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/reusable_snippets/start_your_cluster.md",tags:[],version:"current",frontMatter:{sidebar_label:"Start your cluster"}},i={},d=[];function p(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"start-your-cluster",children:"Start your cluster"}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"Starting a SuperDuperDB cluster is useful in production and model development\nif you want to enable scalable compute, access to the models by multiple users for collaboration,\nmonitoring."}),(0,n.jsx)(t.p,{children:"If you don't need this, then it is simpler to start in development mode."})]}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(u.A,{value:"Experimental Cluster",label:"Experimental Cluster",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"!python -m superduperdb local-cluster up        \n"})})}),(0,n.jsx)(u.A,{value:"Docker-Compose",label:"Docker-Compose",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"!make testenv_image\n!make testenv_init        \n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},7227:(e,t,r)=>{r.d(t,{A:()=>u});r(6540);var n=r(870);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function u(e){let{children:t,hidden:r,className:u}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,u),hidden:r,children:t})}},9489:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),a=r(870),s=r(4245),u=r(6347),l=r(6494),o=r(2814),c=r(5167),i=r(1269);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,u.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[u,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=b({queryString:r,groupId:a}),[h,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,i.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=c??h;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(1062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(4848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:u,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),i=e=>{const t=e.currentTarget,r=o.indexOf(t),a=l[r].value;a!==n&&(c(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:i,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function _(e){const t=h(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,y.jsx)(_,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>u,x:()=>l});var n=r(6540);const a={},s=n.createContext(a);function u(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);