"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6240],{6498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=n(4848),c=n(8453);const s={},i=void 0,d={id:"api/components/metric",title:"metric",description:"superduperdb.components.metric",source:"@site/content/api/components/metric.md",sourceDirName:"api/components",slug:"/api/components/metric",permalink:"/docs/api/components/metric",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/api/components/metric.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"listener",permalink:"/docs/api/components/listener"},next:{title:"model",permalink:"/docs/api/components/model"}},o={},a=[{value:"<code>Metric</code>",id:"metric",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"superduperdb.components.metric"})})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/superduperdb/components/metric.py",children:"Source code"})}),"\n",(0,r.jsx)(t.h2,{id:"metric",children:(0,r.jsx)(t.code,{children:"Metric"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"Metric(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = <factory>,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     object: Callable) -> None\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"identifier"}),(0,r.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"db"}),(0,r.jsx)(t.td,{children:"Datalayer instance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"uuid"}),(0,r.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"artifacts"}),(0,r.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,r.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"Callable or an Artifact to be applied to the data."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Metric base object used to evaluate performance on a dataset."}),"\n",(0,r.jsx)(t.p,{children:"These objects are callable and are applied row-wise to the data, and averaged."})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(6540);const c={},s=r.createContext(c);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);