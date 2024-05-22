"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5680],{1053:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var r=d(4848),s=d(8453);const c={},i=void 0,t={id:"api/misc/special_dicts",title:"special_dicts",description:"superduperdb.misc.special_dicts",source:"@site/content/api/misc/special_dicts.md",sourceDirName:"api/misc",slug:"/api/misc/special_dicts",permalink:"/docs/api/misc/special_dicts",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/api/misc/special_dicts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"server",permalink:"/docs/api/misc/server"},next:{title:"misc",permalink:"/docs/api/misc"}},l={},a=[{value:"<code>diff</code>",id:"diff",level:2},{value:"<code>SuperDuperFlatEncode</code>",id:"superduperflatencode",level:2},{value:"<code>MongoStyleDict</code>",id:"mongostyledict",level:2},{value:"<code>ArgumentDefaultDict</code>",id:"argumentdefaultdict",level:2},{value:"<code>IndexableDict</code>",id:"indexabledict",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"superduperdb.misc.special_dicts"})})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/superduperdb/misc/special_dicts.py",children:"Source code"})}),"\n",(0,r.jsx)(n.h2,{id:"diff",children:(0,r.jsx)(n.code,{children:"diff"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"diff(r1,\n     r2)\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"r1"}),(0,r.jsx)(n.td,{children:"Dict"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"r2"}),(0,r.jsx)(n.td,{children:"Dict"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Get the difference between two dictionaries."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"_diff({'a': 1, 'b': 2}, {'a': 2, 'b': 2})\n# {'a': (1, 2)}\n_diff({'a': {'c': 3}, 'b': 2}, {'a': 2, 'b': 2})\n# {'a': ({'c': 3}, 2)}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"superduperflatencode",children:(0,r.jsx)(n.code,{children:"SuperDuperFlatEncode"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"SuperDuperFlatEncode(self,\n     /,\n     *args,\n     **kwargs)\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"args"}),(0,r.jsxs)(n.td,{children:["*args for ",(0,r.jsx)(n.code,{children:"dict"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"kwargs"}),(0,r.jsxs)(n.td,{children:["**kwargs for ",(0,r.jsx)(n.code,{children:"dict"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Dictionary for representing flattened encoding data."}),"\n",(0,r.jsx)(n.h2,{id:"mongostyledict",children:(0,r.jsx)(n.code,{children:"MongoStyleDict"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"MongoStyleDict(self,\n     /,\n     *args,\n     **kwargs)\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"args"}),(0,r.jsxs)(n.td,{children:["*args for ",(0,r.jsx)(n.code,{children:"dict"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"kwargs"}),(0,r.jsxs)(n.td,{children:["**kwargs for ",(0,r.jsx)(n.code,{children:"dict"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Dictionary object mirroring how MongoDB handles fields."}),"\n",(0,r.jsx)(n.h2,{id:"argumentdefaultdict",children:(0,r.jsx)(n.code,{children:"ArgumentDefaultDict"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"ArgumentDefaultDict(self,\n     /,\n     *args,\n     **kwargs)\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"args"}),(0,r.jsxs)(n.td,{children:["*args for ",(0,r.jsx)(n.code,{children:"defaultdict"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"kwargs"}),(0,r.jsxs)(n.td,{children:["**kwargs for ",(0,r.jsx)(n.code,{children:"defaultdict"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"ArgumentDefaultDict."}),"\n",(0,r.jsx)(n.h2,{id:"indexabledict",children:(0,r.jsx)(n.code,{children:"IndexableDict"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"IndexableDict(self,\n     ordered_dict)\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ordered_dict"}),(0,r.jsx)(n.td,{children:"OrderedDict"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"IndexableDict."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Example:\n# -------\nd = IndexableDict({'a': 1, 'b': 2})\nd[0]\n# 1\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"d[1]\n# 2\n"})})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>t});var r=d(6540);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);