"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1482],{97962:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(85893),o=r(11151);const i={sidebar_position:23},s="Training models directly on your datastore",a={id:"docs/walkthrough/training_models",title:"Training models directly on your datastore",description:"Similarly to applying models to create predictions, training models is possible both procedurally and declaratively in superduperdb.",source:"@site/content/docs/walkthrough/training_models.md",sourceDirName:"docs/walkthrough",slug:"/docs/walkthrough/training_models",permalink:"/docs/docs/walkthrough/training_models",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/walkthrough/training_models.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"Daemonizing .predict with listeners",permalink:"/docs/docs/walkthrough/daemonizing_models_with_listeners"},next:{title:"Configuring models to ingest features from other models",permalink:"/docs/docs/walkthrough/linking_interdependent_models"}},d={},l=[{value:"Basic pattern",id:"basic-pattern",level:2},{value:"Procedural API",id:"procedural-api",level:3},{value:"Declarative API",id:"declarative-api",level:3},{value:"Fitting/ training models by framework",id:"fitting-training-models-by-framework",level:2},{value:"Scikit-learn",id:"scikit-learn",level:3},{value:"Transformers",id:"transformers",level:3},{value:"PyTorch",id:"pytorch",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"training-models-directly-on-your-datastore",children:"Training models directly on your datastore"}),"\n",(0,t.jsxs)(n.p,{children:["Similarly to ",(0,t.jsx)(n.a,{href:"/docs/docs/walkthrough/apply_models",children:"applying models to create predictions"}),", training models is possible both procedurally and declaratively in ",(0,t.jsx)(n.code,{children:"superduperdb"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When models are trained, if ",(0,t.jsx)(n.code,{children:"CFG.cluster.dask_scheduler"})," has been configured (e.g. ",(0,t.jsx)(n.code,{children:"dask://localhost:8786"}),"), then ",(0,t.jsx)(n.code,{children:"superduperdb"})," deploys ",(0,t.jsxs)(n.a,{href:"/docs/docs/production/non_blocking_dask_jobs",children:["a job on the configured ",(0,t.jsx)(n.code,{children:"dask"})," cluster"]})]}),"\n",(0,t.jsx)(n.h2,{id:"basic-pattern",children:"Basic pattern"}),"\n",(0,t.jsx)(n.h3,{id:"procedural-api",children:"Procedural API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"model.fit(\n    X='<input-col>',\n    y='<target-col>',      # Optional, depending on whether supervised/ unsupervised,\n    select=<query>,       # query which loads the training data\n    db=db,\n)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"declarative-api",children:"Declarative API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db.add(\n    Model(\n        *args, \n        training_select=<query>,   # to be passed as `Model.fit(..., select=...)`\n        train_X='<input-col>',   # to be passed as `Model.fit(X=...)`\n        train_y='<target-col>',   # to be passed as `Model.fit(..., y=...)`\n        fit_kwargs={**...},   # kwargs to be passed to `Model.fit`\n        **kwargs,\n    )\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"fitting-training-models-by-framework",children:"Fitting/ training models by framework"}),"\n",(0,t.jsx)(n.h3,{id:"scikit-learn",children:"Scikit-learn"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.sklearn import Estimator\nfrom sklearn.svm import SVC\n\nm = Estimator(SVC(C=0.05))\n\nm.fit(\n    X='<input-col>',\n    y='<target-col>',\n    select=<query>,  # MongoDB, Ibis or SQL query\n    db=db,\n)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"transformers",children:"Transformers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.transformers import Pipeline\nfrom superduperdb import superduper\n\nm = Pipeline(task='sentiment-analysis')\n\nm.fit(\n    X='<input-col>',\n    y='<target-col>',\n    db=db,\n    select=<query>,   # MongoDB, Ibis or SQL query\n    dataloader_num_workers=4,   # **kwargs are passed to `transformers.TrainingArguments`\n)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"pytorch",children:"PyTorch"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import torch\nfrom superduperdb.ext.torch import Module\n\nmodel = Module(\n    'my-classifier',\n    preprocess=lambda x: torch.tensor(x),\n    object=torch.nn.Linear(64, 512),\n    postprocess=lambda x: x.topk(1)[0].item(),\n)\n\nmodel.fit(\n    X='<input>',\n    db=db,\n    select=<query>,  # MongoDB, Ibis or SQL query\n    batch_size=100,  # any **kwargs supported by `superduperdb.ext.torch.TorchTrainerConfiguration`\n    num_workers=4,\n)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(67294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);