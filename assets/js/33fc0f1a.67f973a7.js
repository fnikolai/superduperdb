"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2696],{56719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(85893),a=t(11151);const s={},o="Transfer Learning",i={id:"use_cases/transfer_learning",title:"Transfer Learning",description:"Transfer Learning with Sentence Transformers and Scikit-Learn",source:"@site/content/use_cases/transfer_learning.md",sourceDirName:"use_cases",slug:"/use_cases/transfer_learning",permalink:"/docs/use_cases/transfer_learning",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/use_cases/transfer_learning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sentiment Analysis",permalink:"/docs/use_cases/sentiment_analysis_use_case"},next:{title:"Glossary",permalink:"/docs/docs/fundamentals/glossary"}},d={},l=[{value:"Transfer Learning with Sentence Transformers and Scikit-Learn",id:"transfer-learning-with-sentence-transformers-and-scikit-learn",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connect to Datastore",id:"connect-to-datastore",level:2},{value:"Load Dataset",id:"load-dataset",level:2},{value:"Run Model",id:"run-model",level:2},{value:"Train Downstream Model",id:"train-downstream-model",level:2},{value:"Run Downstream Model",id:"run-downstream-model",level:2},{value:"Verification",id:"verification",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"transfer-learning",children:"Transfer Learning"}),"\n",(0,r.jsx)(n.h2,{id:"transfer-learning-with-sentence-transformers-and-scikit-learn",children:"Transfer Learning with Sentence Transformers and Scikit-Learn"}),"\n",(0,r.jsx)(n.p,{children:"In this notebook, we will explore the process of transfer learning using SuperDuperDB. We will demonstrate how to connect to a MongoDB datastore, load a dataset, create a SuperDuperDB model based on Sentence Transformers, train a downstream model using Scikit-Learn, and apply the trained model to the database. Transfer learning is a powerful technique that can be used in various applications, such as vector search and downstream learning tasks."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before diving into the implementation, ensure that you have the necessary libraries installed by running the following commands:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"!pip install superduperdb\n!pip install ipython numpy datasets sentence-transformers\n"})}),"\n",(0,r.jsx)(n.h2,{id:"connect-to-datastore",children:"Connect to Datastore"}),"\n",(0,r.jsxs)(n.p,{children:["First, we need to establish a connection to a MongoDB datastore via SuperDuperDB. You can configure the ",(0,r.jsx)(n.code,{children:"MongoDB_URI"})," based on your specific setup.\nHere are some examples of MongoDB URIs:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For testing (default connection): ",(0,r.jsx)(n.code,{children:"mongomock://test"})]}),"\n",(0,r.jsxs)(n.li,{children:["Local MongoDB instance: ",(0,r.jsx)(n.code,{children:"mongodb://localhost:27017"})]}),"\n",(0,r.jsxs)(n.li,{children:["MongoDB with authentication: ",(0,r.jsx)(n.code,{children:"mongodb://superduper:superduper@mongodb:27017/documents"})]}),"\n",(0,r.jsxs)(n.li,{children:["MongoDB Atlas: ",(0,r.jsx)(n.code,{children:"mongodb+srv://<username>:<password>@<atlas_cluster>/<database>"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from superduperdb import superduper\nfrom superduperdb.backends.mongodb import Collection\nimport os\n\nmongodb_uri = os.getenv("MONGODB_URI","mongomock://test")\n\n# SuperDuperDB, now handles your MongoDB database\n# It just super dupers your database \ndb = superduper(mongodb_uri)\n\n# Reference a collection called transfer\ncollection = Collection(\'transfer\')\n'})}),"\n",(0,r.jsx)(n.h2,{id:"load-dataset",children:"Load Dataset"}),"\n",(0,r.jsx)(n.p,{children:"Transfer learning can be applied to any data that can be processed with SuperDuperDB models.\nFor our example, we will use a labeled textual dataset with sentiment analysis.  We'll load a subset of the IMDb dataset."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import numpy\nfrom datasets import load_dataset\nfrom superduperdb import Document as D\n\n# Load IMDb dataset\ndata = load_dataset(\"imdb\")\n\n# Set the number of data points for training (adjust as needed)\nN_DATAPOINTS = 500\n\n# Prepare training data\ntrain_data = [\n    D({'_fold': 'train', **data['train'][int(i)]}) \n    for i in numpy.random.permutation(len(data['train']))\n][:N_DATAPOINTS]\n\n# Prepare validation data\nvalid_data = [\n    D({'_fold': 'valid', **data['test'][int(i)]}) \n    for i in numpy.random.permutation(len(data['test']))\n][:N_DATAPOINTS // 10]\n\n# Insert training data into the 'collection' SuperDuperDB collection\ndb.execute(collection.insert_many(train_data))\n"})}),"\n",(0,r.jsx)(n.h2,{id:"run-model",children:"Run Model"}),"\n",(0,r.jsxs)(n.p,{children:["We'll create a SuperDuperDB model based on the ",(0,r.jsx)(n.code,{children:"sentence_transformers"})," library. This demonstrates that you don't necessarily need a native SuperDuperDB integration with a model library to leverage its power. We configure the ",(0,r.jsx)(n.code,{children:"Model wrapper"})," to work with the ",(0,r.jsx)(n.code,{children:"SentenceTransformer class"}),". After configuration, we can link the model to a collection and daemonize the model with the ",(0,r.jsx)(n.code,{children:"listen=True"})," keyword."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduperdb import Model\nimport sentence_transformers\nfrom superduperdb.ext.numpy import array\n\n# Create a SuperDuperDB Model using Sentence Transformers\nm = Model(\n    identifier='all-MiniLM-L6-v2',\n    object=sentence_transformers.SentenceTransformer('all-MiniLM-L6-v2'),\n    encoder=array('float32', shape=(384,)),\n    predict_method='encode',\n    batch_predict=True,\n)\n\n# Make predictions on 'text' data from the 'collection' SuperDuperDB collection\nm.predict(\n    X='text',\n    db=db,\n    select=collection.find(),\n    listen=True\n)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"train-downstream-model",children:"Train Downstream Model"}),"\n",(0,r.jsxs)(n.p,{children:["Now that we've created and added the model that computes features for the ",(0,r.jsx)(n.code,{children:'"text"'}),", we can train a downstream model using Scikit-Learn."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Import necessary modules and classes\nfrom sklearn.svm import SVC\nfrom superduperdb import superduper\n\n# Create a SuperDuperDB model with an SVC classifier\nmodel = superduper(\n    SVC(gamma='scale', class_weight='balanced', C=100, verbose=True),\n    postprocess=lambda x: int(x)\n)\n\n# Train the model on 'text' data with corresponding labels\nmodel.fit(\n    X='text',\n    y='label',\n    db=db,\n    select=collection.find().featurize({'text': 'all-MiniLM-L6-v2'}),\n)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"run-downstream-model",children:"Run Downstream Model"}),"\n",(0,r.jsx)(n.p,{children:"With the model trained, we can now apply it to the database."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Make predictions on 'text' data with the trained SuperDuperDB model\nmodel.predict(\n    X='text',\n    db=db\n\n,\n    select=collection.find().featurize({'text': 'all-MiniLM-L6-v2'}),\n    listen=True,\n)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"verification",children:"Verification"}),"\n",(0,r.jsx)(n.p,{children:"To verify that the process has worked, we can sample a few records to inspect the sanity of the predictions."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Query a random document from the 'collection' SuperDuperDB collection\nr = next(db.execute(collection.aggregate([{'$sample': {'size': 1}}])))\n\n# Print a portion of the 'text' field from the random document\nprint(r['text'][:100])\n\n# Print the prediction made by the SVC model stored in '_outputs'\nprint(r['_outputs']['text']['svc'])\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(67294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);