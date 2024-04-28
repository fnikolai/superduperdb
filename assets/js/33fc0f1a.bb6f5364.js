"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5996],{1920:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=r(4848),s=r(8453),a=r(9489),o=r(7227);const l={sidebar_label:"Transfer learning"},d="Transfer learning",i={id:"use_cases/transfer_learning",title:"transfer_learning",description:"Configure your production system",source:"@site/content/use_cases/transfer_learning.md",sourceDirName:"use_cases",slug:"/use_cases/transfer_learning",permalink:"/docs/use_cases/transfer_learning",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/use_cases/transfer_learning.md",tags:[],version:"current",frontMatter:{sidebar_label:"Transfer learning"},sidebar:"tutorialSidebar",previous:{title:"Retrieval augmented generation",permalink:"/docs/use_cases/retrieval_augmented_generation"}},c={},u=[{value:"Configure your production system",id:"configure-your-production-system",level:2},{value:"Start your cluster",id:"start-your-cluster",level:2},{value:"Connect to SuperDuperDB",id:"connect-to-superduperdb",level:2},{value:"Get useful sample data",id:"get-useful-sample-data",level:2},{value:"Setup tables or collections",id:"setup-tables-or-collections",level:2},{value:"Insert data",id:"insert-data",level:2},{value:"Compute features",id:"compute-features",level:2},{value:"Choose input key",id:"choose-input-key",level:2},{value:"Build and train classifier",id:"build-and-train-classifier",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"transfer-learning",children:"Transfer learning"}),"\n",(0,t.jsx)(n.h2,{id:"configure-your-production-system",children:"Configure your production system"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'If you would like to use the production features\nof SuperDuperDB, then you should set the relevant\nconnections and configurations in a configuration\nfile. Otherwise you are welcome to use "development" mode\nto get going with SuperDuperDB quickly.'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import os\n\nos.makedirs('.superduperdb', exist_ok=True)\nos.environ['SUPERDUPERDB_CONFIG'] = '.superduperdb/config.yaml'\n"})}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"MongoDB Community",label:"MongoDB Community",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\ndata_backend: mongodb://127.0.0.1:27017/documents\nartifact_store: filesystem://./artifact_store\ncluster:\n  cdc:\n    strategy: null\n    uri: ray://127.0.0.1:20000\n  compute:\n    uri: ray://127.0.0.1:10001\n  vector_search:\n    backfill_batch_size: 100\n    type: in_memory\n    uri: http://127.0.0.1:21000\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"MongoDB Atlas",label:"MongoDB Atlas",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\n        type: native\ndatabackend: mongodb+srv://<user>:<password>@<mongo-host>:27017/documents\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"SQLite",label:"SQLite",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: sqlite://<path-to-db>.db\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"MySQL",label:"MySQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mysql://<user>:<password>@<host>:<port>/database\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"Oracle",label:"Oracle",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mssql://<user>:<password>@<host>:<port>\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"PostgreSQL",label:"PostgreSQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: postgres://<user>:<password>@<host>:<port</<database>\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"Snowflake",label:"Snowflake",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: snowflake://<user>:<password>@<account>/<database>\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"Clickhouse",label:"Clickhouse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: clickhouse://<user>:<password>@<host>:<port>\n'''        \n"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"with open(os.environ['SUPERDUPERDB_CONFIG'], 'w') as f:\n    f.write(CFG)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start-your-cluster",children:"Start your cluster"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Starting a SuperDuperDB cluster is useful in production and model development\nif you want to enable scalable compute, access to the models by multiple users for collaboration,\nmonitoring."}),(0,t.jsx)(n.p,{children:"If you don't need this, then it is simpler to start in development mode."})]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"Experimental Cluster",label:"Experimental Cluster",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!python -m superduperdb local-cluster up        \n"})})}),(0,t.jsx)(o.A,{value:"Docker-Compose",label:"Docker-Compose",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!make testenv_image\n!make testenv_init        \n"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"connect-to-superduperdb",children:"Connect to SuperDuperDB"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'Note that this is only relevant if you are running SuperDuperDB in development mode.\nOtherwise refer to "Configuring your production system".'})}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper('mongodb://localhost:27017/documents')        \n"})})}),(0,t.jsx)(o.A,{value:"SQLite",label:"SQLite",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\ndb = superduper('sqlite://my_db.db')        \n"})})}),(0,t.jsx)(o.A,{value:"MySQL",label:"MySQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\nuser = 'superduper'\npassword = 'superduper'\nport = 3306\nhost = 'localhost'\ndatabase = 'test_db'\n\ndb = superduper(f\"mysql://{user}:{password}@{host}:{port}/{database}\")        \n"})})}),(0,t.jsx)(o.A,{value:"Oracle",label:"Oracle",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\nuser = 'sa'\npassword = 'Superduper#1'\nport = 1433\nhost = 'localhost'\n\ndb = superduper(f\"mssql://{user}:{password}@{host}:{port}\")        \n"})})}),(0,t.jsx)(o.A,{value:"PostgreSQL",label:"PostgreSQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!pip install psycopg2\nfrom superduperdb import superduper\n\nuser = 'postgres'\npassword = 'postgres'\nport = 5432\nhost = 'localhost'\ndatabase = 'test_db'\ndb_uri = f\"postgres://{user}:{password}@{host}:{port}/{database}\"\n\ndb = superduper(db_uri, metadata_store=db_uri.replace('postgres://', 'postgresql://'))        \n"})})}),(0,t.jsx)(o.A,{value:"Snowflake",label:"Snowflake",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduperdb import superduper\n\nuser = "superduperuser"\npassword = "superduperpassword"\naccount = "XXXX-XXXX"  # ORGANIZATIONID-USERID\ndatabase = "FREE_COMPANY_DATASET/PUBLIC"\n\nsnowflake_uri = f"snowflake://{user}:{password}@{account}/{database}"\n\ndb = superduper(\n    snowflake_uri, \n    metadata_store=\'sqlite:///your_database_name.db\',\n)        \n'})})}),(0,t.jsx)(o.A,{value:"Clickhouse",label:"Clickhouse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\nuser = 'default'\npassword = ''\nport = 8123\nhost = 'localhost'\n\ndb = superduper(f\"clickhouse://{user}:{password}@{host}:{port}\", metadata_store=f'mongomock://meta')        \n"})})}),(0,t.jsx)(o.A,{value:"DuckDB",label:"DuckDB",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper('duckdb://mydb.duckdb')        \n"})})}),(0,t.jsx)(o.A,{value:"Pandas",label:"Pandas",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper(['my.csv'], metadata_store=f'mongomock://meta')        \n"})})}),(0,t.jsx)(o.A,{value:"MongoMock",label:"MongoMock",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper('mongomock:///test_db')        \n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"get-useful-sample-data",children:"Get useful sample data"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"Text",label:"Text",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/text.json\nimport json\n\nwith open('text.json', 'r') as f:\n    data = json.load(f)        \n"})})}),(0,t.jsx)(o.A,{value:"Image",label:"Image",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!curl -O s3://superduperdb-public-demo/images.zip && unzip images.zip\nimport os\n\ndata = [f'images/{x}' for x in os.listdir('./images')]        \n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"setup-tables-or-collections",children:"Setup tables or collections"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Note this is an optional step for MongoDB\n# Users can also work directly with `DataType` if they want to add\n# custom data\nfrom superduperdb import Schema, DataType\nfrom superduperdb.backends.mongodb import Collection\n\ntable_or_collection = Collection('documents')\nUSE_SCHEMA = False\ndatatype = None\n\nif USE_SCHEMA and isinstance(datatype, DataType):\n    schema = Schema(fields={'x': datatype})\n    db.apply(schema)        \n"})})}),(0,t.jsx)(o.A,{value:"SQL",label:"SQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduperdb.backends.ibis import Table\nfrom superduperdb import Schema, DataType\nfrom superduperdb.backends.ibis.field_types import dtype\n\ndatatype = "str"\n\nif isinstance(datatype, DataType):\n    schema = Schema(identifier="schema", fields={"id": dtype("str"), "x": datatype})\nelse:\n    schema = Schema(\n        identifier="schema", fields={"id": dtype("str"), "x": dtype(datatype)}\n    )\n\ntable_or_collection = Table(\'documents\', schema=schema)\n\ndb.apply(table_or_collection)        \n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"insert-data",children:"Insert data"}),"\n",(0,t.jsxs)(n.p,{children:["In order to create data, we need to create a ",(0,t.jsx)(n.code,{children:"Schema"})," for encoding our special ",(0,t.jsx)(n.code,{children:"Datatype"})," column(s) in the databackend."]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import Document\n\ndef do_insert(data):\n    schema = None\n    \n    if schema is None and datatype is None:\n        data = [Document({'x': x}) for x in data]\n        db.execute(table_or_collection.insert_many(data))\n    elif schema is None and datatype is not None:\n        data = [Document({'x': datatype(x)}) for x in data]\n        db.execute(table_or_collection.insert_many(data))\n    else:\n        data = [Document({'x': x}) for x in data]\n        db.execute(table_or_collection.insert_many(data, schema='my_schema'))        \n"})})}),(0,t.jsx)(o.A,{value:"SQL",label:"SQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import Document\n\ndef do_insert(data):\n    db.execute(table_or_collection.insert([Document({'id': str(idx), 'x': x}) for idx, x in enumerate(data)]))        \n"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"do_insert(data[:-len(data) // 4])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compute-features",children:"Compute features"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"Text",label:"Text",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'\nkey = \'txt\'\n\nimport sentence_transformers\nfrom superduperdb import vector, Listener\nfrom superduperdb.ext.sentence_transformers import SentenceTransformer\n\nsuperdupermodel = SentenceTransformer(\n    identifier="embedding",\n    object=sentence_transformers.SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2"),\n    datatype=vector(shape=(384,)),\n    postprocess=lambda x: x.tolist(),\n)\n\njobs, listener = db.apply(\n    Listener(\n        model=superdupermodel,\n        select=select,\n        key=key,\n        identifier="features"\n    )\n)        \n'})})}),(0,t.jsx)(o.A,{value:"Image",label:"Image",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"\nkey = 'image'\n\nimport torchvision.models as models\nfrom torchvision import transforms\nfrom superduperdb.ext.torch import TorchModel\nfrom superduperdb import Listener\nfrom PIL import Image\n\nclass TorchVisionEmbedding:\n    def __init__(self):\n        # Load the pre-trained ResNet-18 model\n        self.resnet = models.resnet18(pretrained=True)\n        \n        # Set the model to evaluation mode\n        self.resnet.eval()\n        \n    def preprocess(self, image_array):\n        # Preprocess the image\n        image = Image.fromarray(image_array.astype(np.uint8))\n        preprocess = preprocess = transforms.Compose([\n            transforms.Resize(256),\n            transforms.CenterCrop(224),\n            transforms.ToTensor(),\n            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),\n        ])\n        tensor_image = preprocess(image)\n        return tensor_image\n        \nmodel = TorchVisionEmbedding()\nsuperdupermodel = TorchModel(identifier='my-vision-model-torch', object=model.resnet, preprocess=model.preprocess, postprocess=lambda x: x.numpy().tolist())\n\njobs, listener = db.apply(\n    Listener(\n        model=superdupermodel,\n        select=select,\n        key=key,\n        identifier=\"features\"\n    )\n)        \n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"choose-input-key",children:"Choose input key"}),"\n",(0,t.jsx)(n.p,{children:"The input key to the fine-tuning model is the output of the previous listener:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"input_key = listener.outputs\n"})}),"\n",(0,t.jsx)(n.h2,{id:"build-and-train-classifier",children:"Build and train classifier"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"Scikit-Learn",label:"Scikit-Learn",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from sklearn.linear_model import LogisticRegression\nfrom superduperdb.ext.sklearn.model import SklearnTrainer, Estimator\n\n# Create a Logistic Regression model\nmodel = LogisticRegression()\nmodel = Estimator(\n    object=model,\n    identifier='my-model',\n    trainer=SklearnTrainer(\n        key=(input_key, 'y'),\n        select=Collection('clt').find(),\n    )\n)        \n"})})}),(0,t.jsx)(o.A,{value:"Torch",label:"Torch",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from torch import nn\nfrom superduperdb.ext.torch.model import TorchModel\nfrom superduperdb.ext.torch.training import TorchTrainer\n\n\nclass SimpleModel(nn.Module):\n    def __init__(self, input_size=16, hidden_size=32, num_classes=3):\n        super(SimpleModel, self).__init__()\n        self.fc1 = nn.Linear(input_size, hidden_size)\n        self.relu = nn.ReLU()\n        self.fc2 = nn.Linear(hidden_size, num_classes)\n\n    def forward(self, x):\n        out = self.fc1(x)\n        out = self.relu(out)\n        out = self.fc2(out)\n        return out\n\n# Loss function\ndef my_loss(X, y):\n    return torch.nn.functional.binary_cross_entropy_with_logits(\n        X[:, 0], y.type(torch.float)\n    )\n\n\n# Create a Logistic Regression model\nmodel = SimpleModel()\nmodel = TorchModel(\n    identifier='my-model',\n    object=model,         \n    trainer=TorchTrainer(\n        key=(input_key, 'y'),\n        identifier='my_trainer',\n        objective=my_loss,\n        loader_kwargs={'batch_size': 10},\n        max_iterations=100,\n        validation_interval=10,\n        select=Collection('clt').find(),\n    ),\n)        \n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"The following command adds the model to the system and trains the model in one command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db.apply(model)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},7227:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(870);const s={tabItem:"tabItem_Ymn6"};var a=r(4848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,o),hidden:r,children:n})}},9489:(e,n,r)=>{r.d(n,{A:()=>_});var t=r(6540),s=r(870),a=r(4245),o=r(6347),l=r(6494),d=r(2814),i=r(5167),c=r(1269);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=p(e),[o,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[i,u]=m({queryString:r,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),g=(()=>{const e=i??f;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&d(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=r(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(4848);function x(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),s=l[r].value;s!==t&&(i(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,y.jsx)(x,{...e,...n}),(0,y.jsx)(j,{...e,...n})]})}function _(e){const n=(0,b.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(6540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);