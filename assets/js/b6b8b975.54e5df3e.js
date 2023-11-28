"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[419],{83189:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=r(85893),i=r(11151);const o={sidebar_position:19},t="Using AI APIs as Predictor descendants",d={id:"docs/walkthrough/ai_apis",title:"Using AI APIs as Predictor descendants",description:"In SuperDuperDB, developers are able to interact with popular AI API providers, in a way very similar to",source:"@site/content/docs/walkthrough/ai_apis.md",sourceDirName:"docs/walkthrough",slug:"/docs/walkthrough/ai_apis",permalink:"/docs/docs/walkthrough/ai_apis",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/walkthrough/ai_apis.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"AI Models via Model and Descendants",permalink:"/docs/docs/walkthrough/ai_models"},next:{title:"Applying models and predictors to data",permalink:"/docs/docs/walkthrough/apply_models"}},a={},l=[{value:"OpenAI",id:"openai",level:2},{value:"Cohere",id:"cohere",level:2},{value:"Anthropic",id:"anthropic",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"using-ai-apis-as-predictor-descendants",children:["Using AI APIs as ",(0,s.jsx)(n.code,{children:"Predictor"})," descendants"]}),"\n",(0,s.jsxs)(n.p,{children:["In SuperDuperDB, developers are able to interact with popular AI API providers, in a way very similar to\n",(0,s.jsx)(n.a,{href:"18_ai_models.mdx",children:"integrating with AI open-source or home-grown models"}),". Instantiating a model from\nthese providers is similar to instantiating a ",(0,s.jsx)(n.code,{children:"Model"}),":"]}),"\n",(0,s.jsx)(n.h2,{id:"openai",children:"OpenAI"}),"\n",(0,s.jsx)(n.p,{children:"Supported:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Embeddings"}),"\n",(0,s.jsx)(n.li,{children:"Chat models"}),"\n",(0,s.jsx)(n.li,{children:"Image generation models"}),"\n",(0,s.jsx)(n.li,{children:"Image edit models"}),"\n",(0,s.jsx)(n.li,{children:"Audio transcription models"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The general pattern is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.openai import OpenAI<ModelType> as ModelCls\n\ndb.add(Modelcls(identifier='my-model', **kwargs))\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cohere",children:"Cohere"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.cohere import Cohere<ModelType> as ModelCls\n\ndb.add(Modelcls(identifier='my-model', **kwargs))\n"})}),"\n",(0,s.jsx)(n.h2,{id:"anthropic",children:"Anthropic"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.anthropic import Anthropic<ModelType> as ModelCls\n\ndb.add(Modelcls(identifier='my-model', **kwargs))\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>t});var s=r(67294);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);