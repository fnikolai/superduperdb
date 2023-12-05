"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2163],{49440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(85893),r=t(11151);const s={},i="How to efficiently build AI chat applications for your own documents with MongoDB Atlas",a={permalink:"/blog/2023/10/04/walkthrough-rag-app-atlas",editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/blog/2023-10-04-walkthrough-rag-app-atlas.md",source:"@site/blog/2023-10-04-walkthrough-rag-app-atlas.md",title:"How to efficiently build AI chat applications for your own documents with MongoDB Atlas",description:"*Despite the huge surge in popularity in building AI applications with LLMs and vector search,",date:"2023-10-04T00:00:00.000Z",formattedDate:"October 4, 2023",tags:[],readingTime:3.455,hasTruncateMarker:!0,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Integrating AI directly with your databases to eliminate complex MLOps and vector databases",permalink:"/blog/superduperdb-the-open-source-framework-for-bringing-ai-to-your-datastore"},nextItem:{title:"Walkthrough: How to enable and manage MongoDB Atlas Vector Search with SuperDuperDB",permalink:"/blog/2023/09/31/a-walkthrough-of-vector-search-on-mongodb-atlas-with-superduperdb/content"}},d={authorsImageUrls:[]},c=[{value:"Useful Links",id:"useful-links",level:3},{value:"Contributors are welcome!",id:"contributors-are-welcome",level:3},{value:"Become a Design Partner!",id:"become-a-design-partner",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Despite the huge surge in popularity in building AI applications with LLMs and vector search,\nwe haven't seen any walkthroughs boil this down to a super-simple, few-command process.\nWith SuperDuperDB together with MongoDB Atlas, it's easier and more flexible than ever before."})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["We have built and deployed an AI chatbot for questioning technical documentation to showcase how efficiently and flexibly you can build end-to-end Gen-AI applications on top of MongoDB with SuperDuperDB: ",(0,o.jsx)(n.a,{href:"https://www.question-the-docs.superduperdb.com/",children:"https://www.question-the-docs.superduperdb.com/"})]})}),"\n",(0,o.jsx)(n.p,{children:"Implementing a (RAG) chat application like a question-your-documents service can be a tedious and complex process. There are several steps involved in doing this:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Serve a model or forward requests to convert text-data in the database to vectors in a vector-database"}),"\n",(0,o.jsx)(n.li,{children:"Setting up a vector-index in a vector-database which efficiently finds similar vectors"}),"\n",(0,o.jsx)(n.li,{children:"Setting up an endpoint to either run a self hosted LLM  or forward requests to a question-answering LLM such as OpenAI"}),"\n",(0,o.jsxs)(n.li,{children:["Setting up an endpoint to:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Convert a question to a vector"}),"\n",(0,o.jsx)(n.li,{children:"Find relevant documents to the question using vector-search"}),"\n",(0,o.jsx)(n.li,{children:"Send the documents as context to the question-answering LLM"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This process can be tedious and complex, involving several pieces of infrastructure, especially\nif developers would like to use other models than those hosted behind OpenAI's API."}),"\n",(0,o.jsx)(n.p,{children:"What if we told you that with SuperDuperDB together with MongoDB Atlas, these challenges are a thing of the past,\nand can be done more simply than with any other solution available?"}),"\n",(0,o.jsx)(n.p,{children:"Let's dive straight into the solution:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Connect to MongoDB Atlas with SuperDuperDB"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from superduperdb.db.base.build import build_datalayer\nfrom superduperdb import CFG\nimport os\n\nATLAS_URI = "mongodb+srv://<user>@<atlas-server>/<database_name>"\nOPENAI_API_KEY = "<your-open-ai-api-key>"\n\nos.environ["OPENAI_API_KEY"] = OPENAI_API_KEY\n\nCFG.data_backend = ATLAS_URI\nCFG.vector_search = ATLAS_URI\n\ndb = build_datalayer()\n'})}),"\n",(0,o.jsx)(n.p,{children:"After connecting to SuperDuperDB, setting up question-your-documents in Python boils down to 2 commands."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Set up a vector-index"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb.container.vector_index import VectorIndex\nfrom superduperdb.container.listener import Listener\nfrom superduperdb.ext.openai.model import OpenAIEmbedding\n\ncollection = Collection('documents')\n\ndb.add(\n    VectorIndex(\n        identifier='my-index',\n        indexing_listener=Listener(\n            model=OpenAIEmbedding(model='text-embedding-ada-002'),\n            key='txt',\n            select=collection.find(),\n        ),\n    )\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this code snippet, the model used for creating vectors is ",(0,o.jsx)(n.code,{children:"OpenAIEmbedding"}),". This is completely configurable.\nYou can also use:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"CohereAI API"}),"\n",(0,o.jsxs)(n.li,{children:["Hugging-Face ",(0,o.jsx)(n.code,{children:"transformers"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"sentence-transformers"})}),"\n",(0,o.jsxs)(n.li,{children:["Self built models in ",(0,o.jsx)(n.code,{children:"torch"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Listener"})," component sets up this model to listen for new data, and compute new vectors as this data comes in."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VectorIndex"})," connects user queries with the computed vectors and the model."]}),"\n",(0,o.jsxs)(n.p,{children:["By adding this nested component to ",(0,o.jsx)(n.code,{children:"db"}),", the components are activated and ready to go for vector-search."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Add a question-answering component"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.openai.model import OpenAIChatCompletion\n\nchat = OpenAIChatCompletion(\n    model='gpt-3.5-turbo',\n    prompt=(\n        'Use the following content to answer this question\\n'\n        'Do not use any other information you might have learned\\n'\n        'Only base your answer on the content provided\\n'\n        '{context}\\n\\n'\n        'Here\\'s the question:\\n'\n    ),\n)\n\ndb.add(chat)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command creates and configures an LLM hosted on OpenAI to operate together with MongoDB.\nThe prompt can be configured to ingest the context using the ",(0,o.jsx)(n.code,{children:"{context}"})," format variable.\nThe results of the vector search are pasted into this format variable."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Question your documents!"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"input = 'Explain to me the reasons for the change of strategy in the company this year.'\n\nresponse, context = db.predict(\n    'gpt-3.5-turbo',\n    input=input,\n    context=collection.like({'txt': input}, vector_index='my-index').find()\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command executes the vector-search query in the ",(0,o.jsx)(n.code,{children:"context"})," parameter. The results of\nthis search are added to the prompt to prime the LLM to ground its answer on the documents\nin MongoDB."]}),"\n",(0,o.jsx)(n.h3,{id:"useful-links",children:"Useful Links"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://superduperdb.com/",children:"Website"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb",children:"GitHub"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://docs.superduperdb.com/docs/category/get-started",children:"Documentation"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://docs.superduperdb.com/blog",children:"Blog"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://docs.superduperdb.com/docs/category/use-cases",children:"Example Use Cases & Apps"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://join.slack.com/t/superduperdb/shared_invite/zt-1zuojj0k0-RjAYBs1TDsvEa7yaFGa6QA",children:"Slack Community"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://www.linkedin.com/company/superduperdb/",children:"LinkedIn"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://twitter.com/superduperdb",children:"Twitter"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://www.youtube.com/@superduperdb",children:"Youtube"})})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"contributors-are-welcome",children:"Contributors are welcome!"}),"\n",(0,o.jsxs)(n.p,{children:["SuperDuperDB is open-source and permissively licensed under the ",(0,o.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/LICENSE",children:"Apache 2.0 license"}),". We would like to encourage developers interested in open-source development to contribute in our discussion forums, issue boards and by making their own pull requests. We'll see you on ",(0,o.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb",children:"GitHub"}),"!"]}),"\n",(0,o.jsx)(n.h3,{id:"become-a-design-partner",children:"Become a Design Partner!"}),"\n",(0,o.jsxs)(n.p,{children:["We are looking for visionary organizations which we can help to identify and implement transformative AI applications for their business and products. We're offering this absolutely for free. If you would like to learn more about this opportunity please reach out to us via email: ",(0,o.jsx)(n.a,{href:"mailto:partnerships@superduperdb.com",children:"partnerships@superduperdb.com"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);