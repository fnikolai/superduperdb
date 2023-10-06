"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(87462),n=r(67294),o=r(86010),i=r(12466),s=r(16550),l=r(91980),u=r(67392),p=r(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:r,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var f=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),a=u[r].value;a!==s&&(c(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},4777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),i=r(85162);const s={slug:"introduce-vector-search-to-your-favourite-database-with-superduperdb",title:"Enable Vector Search in MongoDB with SuperDuperDB",authors:["blythed"],tags:["AI","vector-search"]},l=void 0,u={permalink:"/blog/introduce-vector-search-to-your-favourite-database-with-superduperdb",editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/blog/2023-09-09-vector-search.mdx",source:"@site/blog/2023-09-09-vector-search.mdx",title:"Enable Vector Search in MongoDB with SuperDuperDB",description:"*In this blog-post we show you how to easily operate vector-search in MongoDB",date:"2023-09-09T00:00:00.000Z",formattedDate:"September 9, 2023",tags:[{label:"AI",permalink:"/blog/tags/ai"},{label:"vector-search",permalink:"/blog/tags/vector-search"}],readingTime:5.66,hasTruncateMarker:!0,authors:[{name:"Duncan Blythe",title:"Creator of SuperDuperDB",url:"https://github.com/blythed",imageURL:"https://avatars.githubusercontent.com/u/15139331?v=4",key:"blythed"}],frontMatter:{slug:"introduce-vector-search-to-your-favourite-database-with-superduperdb",title:"Enable Vector Search in MongoDB with SuperDuperDB",authors:["blythed"],tags:["AI","vector-search"]},prevItem:{title:"Building a Documentation Chatbot using FastAPI, React, MongoDB and SuperDuperDB",permalink:"/blog/building-a-documentation-chatbot-using-fastapi-react-mongodb-and-superduperdb"},nextItem:{title:"Introducing SuperDuperDB: Bringing AI to your Datastore in Python",permalink:"/blog/bringing-ai-to-your-datastore-in-python"}},p={authorsImageUrls:[void 0]},c=[{value:"Possibility 1: models live together with the database to create vectors at insertion time",id:"possibility-1-models-live-together-with-the-database-to-create-vectors-at-insertion-time",level:2},{value:"Possibility 2: the vector-database requires developers to provide their own vectors with their own models",id:"possibility-2-the-vector-database-requires-developers-to-provide-their-own-vectors-with-their-own-models",level:2},{value:"Enter SuperDuperDB",id:"enter-superduperdb",level:3},{value:"Minimal boilerplate to connect to SuperDuperDB",id:"minimal-boilerplate-to-connect-to-superduperdb",level:3},{value:"Set up vector-search with SuperDuperDB in one command!",id:"set-up-vector-search-with-superduperdb-in-one-command",level:3},{value:"Useful Links",id:"useful-links",level:3},{value:"Contributors are welcome!",id:"contributors-are-welcome",level:3},{value:"Become a Design Partner!",id:"become-a-design-partner",level:3}],d={toc:c},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"In this blog-post we show you how to easily operate vector-search in MongoDB\nAtlas using SuperDuperDB, leading to many savings and efficiencies in\nyour AI development.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In 2023 vector-databases are hugely popular; they provide the opportunity for developers to connect LLMs, such as OpenAI\u2019s GPT models, with their data, as well as providing the key to deploying \u201csearch-by-meaning\u201d on troves of documents."),(0,n.kt)("p",null,"However: a key unanswered question, for which there is no widely accepted answer, is:"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"How do the vectors in my vector-database get there in the first place?")),(0,n.kt)("p",null,"Vectors (arrays of numbers used in vector-search) differ from the content of most databases, since they need to be calculated on the basis of other data."),(0,n.kt)("p",null,"Currently there are 2 approaches:"),(0,n.kt)("h2",{id:"possibility-1-models-live-together-with-the-database-to-create-vectors-at-insertion-time"},"Possibility 1: models live together with the database to create vectors at insertion time"),(0,n.kt)("p",null,"When data is inserted into a vector-database, the database may be configured to \u201ccalculate\u201d or \u201ccompute\u201d vectors on the basis of this data (generally text). This means that the database environment also has access to some compute and AI models, or access to APIs such as OpenAI, in order to obtain vectors."),(0,n.kt)("p",null,"Examples of this approach are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Weaviate")," (support for a range of pre-defined models, some support for bringing own model)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Chroma")," (support for OpenAI and sentence_transformers)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pros"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The data and compute live together, so developers don\u2019t need to create an additional app in order to use the vector-database")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cons"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Developers are limited by the models available in the vector-database and the compute resources on the vector-database server"),(0,n.kt)("li",{parentName:"ul"},"Primary data needs to be stored in the vector-database; classic-database + external vector-search isn\u2019t an expected pattern."),(0,n.kt)("li",{parentName:"ul"},"Training of models is generally not supported.")),(0,n.kt)("h2",{id:"possibility-2-the-vector-database-requires-developers-to-provide-their-own-vectors-with-their-own-models"},"Possibility 2: the vector-database requires developers to provide their own vectors with their own models"),(0,n.kt)("p",null,"In this approach, developers are required to build an app which deploys model computations over data which is extracted from the datastore."),(0,n.kt)("p",null,"Examples of this approach are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"LanceDB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Milvus"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pros"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"By developing a vector-computation app, the user can use the full flexibility of the open-source landscape for computing these vectors, and can architect compute resources independently from vector-database resources"),(0,n.kt)("li",{parentName:"ul"},"The vector-database \u201cspecializes\u201d in vector-search and storage of vectors, giving better performance guarantees as a result")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cons"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Huge overhead of building one\u2019s own computation app."),(0,n.kt)("li",{parentName:"ul"},"All communication between app, vector-database and datastore (if using external datastore) must be managed by the developer")),(0,n.kt)("h3",{id:"enter-superduperdb"},"Enter SuperDuperDB"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"SuperDuperDB is a middle path to scalability, flexiblity and ease-of-use in vector-search and far beyond.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SuperDuperDB is an open-source Python environment which wraps databases and AI models with additional functionality to make them \u201cready\u201d to interface with one-another; developers are able to host their data in a \u201cclassical\u201d database, but use this database as a vector-database."),(0,n.kt)("li",{parentName:"ul"},"SuperDuperDB allows users to integrate any model from the Python open source ecosystem (torch, sklearn, transformers, sentence_transformers as well as OpenAI\u2019s API), with their datastore. It uses a flexible scheme, allowing new frameworks and code-bases to be integrated without requiring the developer to add additional classes or functionality."),(0,n.kt)("li",{parentName:"ul"},"SuperDuperDB can be co-located with the database in infrastructure, but at the same time has access to its own compute, which is scalable. This makes it vertically performant and at the same time, ready to scale horizontally to accommodate larger usage."),(0,n.kt)("li",{parentName:"ul"},"SuperDuperDB enables training directly with the datastore: developers are only required to specify a database-query to initiate training on scalable compute."),(0,n.kt)("li",{parentName:"ul"},"Developers are not required to program tricky boilerplate code or architectures for computing vector outputs and storing these back in the database. This is all supported natively by SuperDuperDB."),(0,n.kt)("li",{parentName:"ul"},"SuperDuperDB supports data of arbitrary type: with its flexible serialization model, SuperDuperDB can handle text, images, tensors, audio and beyond."),(0,n.kt)("li",{parentName:"ul"},"SuperDuperDB\u2019s scope goes far beyond vector-search; it supports models with arbitrary outputs: classification, generative AI, fore-casting and much more are all within scope and supported. This allows users to build interdependent models, where base models feed their outputs into downstream models; this enables transfer learning, and quality assurance via classification on generated outputs, to name but 2 key outcomes of SuperDuperDB\u2019s integration model.")),(0,n.kt)("h3",{id:"minimal-boilerplate-to-connect-to-superduperdb"},"Minimal boilerplate to connect to SuperDuperDB"),(0,n.kt)("p",null,"Connecting to MongoDB with SuperDuperDB is super easy. The connection may be used to insert documents, although insertion/ ingestion can also proceed via other sources/ client libraries."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import json\nimport pymongo\n\nfrom superduperdb import superduper\nfrom superduperdb.container.document import Document\nfrom superduperdb.db.mongodb.query import Collection\n\ndb = pymongo.MongoClient().documents\ndb = superduper(db)\n\ncollection = Collection('wikipedia')\n\nwith open('wikipedia.json') as f:\n    data = json.load(f)\n\ndb.execute(\n    collection.insert_many([Document(r) for r in data])\n)\n")),(0,n.kt)("h3",{id:"set-up-vector-search-with-superduperdb-in-one-command"},"Set up vector-search with SuperDuperDB in one command!"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"openai",label:"OpenAI",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.container.vector_index import VectorIndex\nfrom superduperdb.container.listener import Listener\nfrom superduperdb.ext.numpy.array import array\nfrom superduperdb.ext.openai import OpenAIEmbedding\n\ndb.add(\n    VectorIndex(\n        identifier=f'wiki-index-openai',\n        indexing_listener=Listener(\n            model=OpenAIEmbedding(model='text-embedding-ada-002'),\n            key='abstract',\n            select=collection.find(),\n            predict_kwargs={'max_chunk_size': 1000},\n        )\n    )\n)\n"))),(0,n.kt)(i.Z,{value:"st",label:"Sentence Transformers",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.container.vector_index import VectorIndex\nfrom superduperdb.container.listener import Listener\nfrom superduperdb.ext.numpy.array import array\nfrom sentence_transformers import Pipeline\n\nmodel = Model(\n    identifier='all-MiniLM-L6-v2',\n    object=sentence_transformers.SentenceTransformer('all-MiniLM-L6-v2'),\n    encoder=array('float32', shape=(384,)),\n    predict_method='encode',\n    batch_predict=True,\n)\n\ndb.add(\n    VectorIndex(\n        identifier=f'wiki-index-sentence-transformers',\n        indexing_listener=Listener(\n            model=model,\n            key='abstract',\n            select=collection.find(),\n            predict_kwargs={'max_chunk_size': 1000},\n        )\n    )\n)\n")))),(0,n.kt)("p",null,"This approach is simple enough to allow models from a vast range of libraries and sources to be implemented: open/ closed source, self-built or library based and much more."),(0,n.kt)("p",null,"Now that the index has been created, queries may be dispatched in a new session to SuperDuperDB without reloading the model:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"cur = db.execute(\n    collection\n        .like({'title': 'articles about sport'}, n=10, vector_index=f'wiki-index')\n        .find({}, {'title': 1})\n)\n\nfor r in cur:\n    print(r)\n")),(0,n.kt)("p",null,"The great thing about using MongoDB or a similar battle tested database for vector-search, is that it can be easily combined with important filtering approaches. In this query, we restrict the results to a hard match involving the word \u201cAustralia\u201d:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"cur = db.execute(\n    collection\n        .like({'title': 'articles about sport'}, n=100, vector_index=f'wiki-index-{model.identifier}')\n        .find({'title': {'$regex': '.*Australia'}})\n)\n\nfor r in cur:\n    print(r['title'])\n")),(0,n.kt)("h3",{id:"useful-links"},"Useful Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://superduperdb.com/"},"Website"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/SuperDuperDB/superduperdb"},"GitHub"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://docs.superduperdb.com/docs/docs/intro.html"},"Documentation"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://docs.superduperdb.com/blog"},"Blog"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://docs.superduperdb.com/docs/category/use-cases"},"Example Use-Cases & Apps"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://join.slack.com/t/superduperdb/shared_invite/zt-1zuojj0k0-RjAYBs1TDsvEa7yaFGa6QA"},"Slack Community"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://www.linkedin.com/company/superduperdb/"},"LinkedIn"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://twitter.com/superduperdb"},"Twitter"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://www.youtube.com/@superduperdb"},"Youtube")))),(0,n.kt)("h3",{id:"contributors-are-welcome"},"Contributors are welcome!"),(0,n.kt)("p",null,"SuperDuperDB is open-source and permissively licensed under the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SuperDuperDB/superduperdb/blob/main/LICENSE"},"Apache 2.0 license"),". We would like to encourage developers interested in open-source development to contribute in our discussion forums, issue boards and by making their own pull requests. We'll see you on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SuperDuperDB/superduperdb"},"GitHub"),"!"),(0,n.kt)("h3",{id:"become-a-design-partner"},"Become a Design Partner!"),(0,n.kt)("p",null,"We are looking for visionary organizations which we can help to identify and implement transformative AI applications for their business and products. We're offering this absolutely for free. If you would like to learn more about this opportunity please reach out to us via email: ",(0,n.kt)("a",{parentName:"p",href:"mailto:partnerships@superduperdb.com"},"partnerships@superduperdb.com")))}h.isMDXComponent=!0}}]);