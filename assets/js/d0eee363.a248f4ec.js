"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6318],{10179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(85893),o=t(11151);const r={},i="Chunked vector-search using multiple inputs per document",a={id:"use_cases/items/chunked_vector_search",title:"Chunked vector-search using multiple inputs per document",description:"In this example, we demonstrate how to implement vector-search, where the targets of search are envisaged",source:"@site/content/use_cases/items/chunked_vector_search.md",sourceDirName:"use_cases/items",slug:"/use_cases/items/chunked_vector_search",permalink:"/docs/use_cases/items/chunked_vector_search",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/use_cases/items/chunked_vector_search.md",tags:[],version:"current",frontMatter:{},sidebar:"useCasesSidebar",previous:{title:"Use cases",permalink:"/docs/category/use-cases"},next:{title:"Training and Maintaining MNIST Predictions with SuperDuperDB",permalink:"/docs/use_cases/items/mnist_torch"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"chunked-vector-search-using-multiple-inputs-per-document",children:"Chunked vector-search using multiple inputs per document"}),"\n",(0,s.jsx)(n.p,{children:"In this example, we demonstrate how to implement vector-search, where the targets of search are envisaged\nto be smaller units of text than the raw data. For example, a developer might like to store whole documents,\nbut search within those documents, finding substrings and references to the original document."}),"\n",(0,s.jsxs)(n.p,{children:["This workflow is much trickier to implement than vanilla vector-search. Luckily, with ",(0,s.jsx)(n.code,{children:"superduperdb"}),", it is just one extra command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import os\n\n# Uncomment one of the following lines to use a bespoke MongoDB deployment\n# For testing the default connection is to mongomock\n\nmongodb_uri = os.getenv("MONGODB_URI", "mongomock://test")\n# mongodb_uri = "mongodb://localhost:27017"\n# mongodb_uri = "mongodb://superduper:superduper@mongodb:27017/documents"\n# mongodb_uri = "mongodb://<user>:<pass>@<mongo_cluster>/<database>"\n# mongodb_uri = "mongodb+srv://<username>:<password>@<atlas_cluster>/<database>"\n\n# Super-Duper your Database!\nfrom superduperdb import superduper\ndb = superduper(mongodb_uri)\n'})}),"\n",(0,s.jsx)(n.p,{children:"To demonstrate this type of search with larger chunks of text, we use a wikipedia sample."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduperdb-public.s3.eu-west-1.amazonaws.com/wikipedia-sample.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As before we insert the data using ",(0,s.jsx)(n.code,{children:"pymongo"}),"-similar syntax:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import json\nfrom superduperdb.backends.mongodb import Collection\nfrom superduperdb import Document as D\n\nwith open('wikipedia-sample.json') as f:\n    data = json.load(f)[:100]\n\ndb.execute(Collection('wikipedia').insert_many([D(r) for r in data]))\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let's have a look at a document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"r = db.execute(Collection('wikipedia').find_one()).unpack()\nr\n"})}),"\n",(0,s.jsx)(n.p,{children:"To create the search functionality, we set up a simple model, whose sole purpose is to chunk\nthe raw text into parts, and save those parts in another collecion:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb import Model\n\ndef splitter(r):\n    out = [r['title']]\n    split = r['abstract'].split(' ')\n    for i in range(0, len(split) - 5, 5):\n        out.append(' '.join(split[i: i + 5]))\n    out = [x for x in out if x]\n    return out\n\n\nmodel = Model(\n    identifier='splitter',\n    object=splitter,\n    flatten=True,\n    model_update_kwargs={'document_embedded': False},\n)\n\nmodel.predict(r, one=True)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let's apply this model to the whole input collection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"model.predict(\n    X='_base', \n    db=db,\n    select=Collection('wikipedia').find()\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now let's look at the split data:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db.execute(Collection('_outputs._base.splitter').find_one())\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can search this data in a manner similar to previously:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb import VectorIndex, Listener\nfrom superduperdb.ext.openai import OpenAIEmbedding\n\nmodel = OpenAIEmbedding(model='text-embedding-ada-002')\n\ndb.add(\n    VectorIndex(\n        identifier=f'chunked-documents',\n        indexing_listener=Listener(\n            model=model,\n            key='_outputs._base.splitter',\n            select=Collection('_outputs._base.splitter').find(),\n            predict_kwargs={'max_chunk_size': 1000},\n        ),\n        compatible_listener=Listener(\n            model=model,\n            key='_base',\n            select=None,\n            active=False,\n        )\n    )\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now we can search through the split-text collection and recall the full original documents,\nhighlighting which text was found to be relevant:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.mongodb import Collection\nfrom superduperdb import Document as D\nfrom IPython.display import *\n\nquery = 'politics'\n\nshingle_collection = Collection('_outputs._base.splitter')\nmain_collection = Collection('wikipedia')\n\nresult = db.execute(\n    shingle_collection\n        .like(D({'_base': query}), vector_index='chunked-documents', n=5)\n        .find({}, {'_outputs._base.text-embedding-ada-002': 0})\n)\n\ndisplay(Markdown(f'---'))\nfor shingle in result:\n    original = db.execute(main_collection.find_one({'_id': shingle['_source']}))\n\n    display(Markdown(f'# {original[\"title\"]}\"'))\n    \n    start = original['abstract'].find(shingle['_outputs']['_base']['splitter'])\n\n    to_format = (\n        original[\"abstract\"][:start] + '**' + '<span style=\"color:red\">' +\n        shingle[\"_outputs\"][\"_base\"][\"splitter\"].upper() + '**' + '<span style=\"color:black\">' +\n        original[\"abstract\"][start + len(shingle[\"_outputs\"][\"_base\"][\"splitter\"]):]\n    )\n    \n    display(Markdown(to_format))\n    display(Markdown(f'---'))\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);