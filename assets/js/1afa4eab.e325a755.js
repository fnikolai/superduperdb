"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Multimodal search with CLIP",s={unversionedId:"use_cases/items/multimodal_image_search_clip",id:"use_cases/items/multimodal_image_search_clip",title:"Multimodal search with CLIP",description:"In this notebook we show-case SuperDuperDB's functionality for searching with multiple types of data over",source:"@site/content/use_cases/items/multimodal_image_search_clip.md",sourceDirName:"use_cases/items",slug:"/use_cases/items/multimodal_image_search_clip",permalink:"/docs/use_cases/items/multimodal_image_search_clip",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/use_cases/items/multimodal_image_search_clip.md",tags:[],version:"current",frontMatter:{},sidebar:"useCasesSidebar",previous:{title:"Training and maintaining MNIST predictions",permalink:"/docs/use_cases/items/mnist_torch"},next:{title:"Ask the docs anything about SuperDuperDB",permalink:"/docs/use_cases/items/question_the_docs"}},l={},p=[],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multimodal-search-with-clip"},"Multimodal search with CLIP"),(0,a.kt)("p",null,"In this notebook we show-case SuperDuperDB's functionality for searching with multiple types of data over\nthe same ",(0,a.kt)("inlineCode",{parentName:"p"},"VectorIndex"),". This comes out very naturally, due to the fact that SuperDuperDB allows\nusers and developers to add arbitrary models to SuperDuperDB, and (assuming they output vectors) use\nthese models at search/ inference time, to vectorize diverse queries."),(0,a.kt)("p",null,"To this end, we'll be using the ",(0,a.kt)("a",{parentName:"p",href:"https://openai.com/research/clip"},"CLIP multimodal architecture"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"!pip install git+https://github.com/openai/CLIP\n!pip install datasets\n!pip install superduperdb\n")),(0,a.kt)("p",null,"So let's start. "),(0,a.kt)("p",null,"SuperDuperDB supports MongoDB as a databackend. Correspondingly, we'll import the python MongoDB client ",(0,a.kt)("inlineCode",{parentName:"p"},"pymongo"),'\nand "wrap" our database to convert it to a SuperDuper ',(0,a.kt)("inlineCode",{parentName:"p"},"DB"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\nfrom superduperdb import CFG\nfrom superduperdb.db.base.build import build_datalayer\nfrom superduperdb.db.mongodb.query import Collection\n\n# Uncomment one of the following lines to use a bespoke MongoDB deployment\n# For testing the default connection is to mongomock\n\nmongodb_uri = os.getenv("MONGODB_URI", "mongomock://test")\n# mongodb_uri = "mongodb://localhost:27017/documents"\n# mongodb_uri = "mongodb+srv://<username>:<password>@<atlas_cluster>/<database>"\n\n# Super-Duper your Database!\nCFG.data_backend = mongodb_uri\nCFG.artifact_store = \'filesystem://./models\'\n\ndb = build_datalayer(CFG)\n\ncollection = Collection(name=\'tiny-imagenet\')\n')),(0,a.kt)("p",null,"In order to make this notebook easy to execute an play with, we'll use a sub-sample of the ",(0,a.kt)("a",{parentName:"p",href:"https://paperswithcode.com/dataset/tiny-imagenet"},"Tiny-Imagenet\ndataset"),". "),(0,a.kt)("p",null,"Everything we are doing here generalizes to much larger datasets, with higher resolution images, without\nfurther ado. For such use-cases, however, it's advisable to use a machine with a GPU, otherwise they'll\nbe some significant thumb twiddling to do."),(0,a.kt)("p",null,"To get the images into the database, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Encoder"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"Document")," framework. This allows\nus to save Python class instances as blobs in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Datalayer"),", but retrieve them as Python objects.\nThis makes it far easier to integrate Python AI-models with the datalayer."),(0,a.kt)("p",null,"To this end, SuperDuperDB contains pre-configured support for ",(0,a.kt)("inlineCode",{parentName:"p"},"PIL.Image")," instances. It's also\npossible to create your own encoders."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.container.document import Document as D\nfrom superduperdb.ext.pillow.image import pil_image as i\nfrom datasets import load_dataset\nimport random\n\ndataset = load_dataset(\"zh-plus/tiny-imagenet\")['valid']\ndataset = [D({'image': i(r['image'])}) for r in dataset]\ndataset = random.sample(dataset, 1000)\n")),(0,a.kt)("p",null,"The wrapped python dictionaries may be inserted directly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Datalayer"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"db.execute(collection.insert_many(dataset, encoders=(i,)))\n")),(0,a.kt)("p",null,"We can verify that the images are correctly stored:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"x = db.execute(collection.find_one()).unpack()['image']\ndisplay(x.resize((300, 300 * int(x.size[1] / x.size[0]))))\n")),(0,a.kt)("p",null,"We now can wrap the CLIP model, to ready it for multimodel search. It involves 2 components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"text-encoding"),(0,a.kt)("li",{parentName:"ul"},"visual-encoding")),(0,a.kt)("p",null,"Once we have installed both parts, we will be able to search with both images and text for\nmatching items:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import clip\nfrom superduperdb.ext.vector.encoder import vector\nfrom superduperdb.ext.torch.model import TorchModel\nimport torch\n\nmodel, preprocess = clip.load(\"RN50\", device='cpu')\n\ne = vector(shape=(1024,))\n\ntext_model = TorchModel(\n    identifier='clip_text',\n    object=model,\n    preprocess=lambda x: clip.tokenize(x)[0],\n    forward_method='encode_text',\n    postprocess=lambda x: x.tolist(),\n    encoder=e,\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"text_model.predict('This is a test', one=True)\n")),(0,a.kt)("p",null,"Similar procedure with the visual part, which takes ",(0,a.kt)("inlineCode",{parentName:"p"},"PIL.Image")," instances as inputs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"visual_model = TorchModel(\n    identifier='clip_image',\n    preprocess=preprocess,\n    object=model.visual,\n    postprocess=lambda x: x.tolist(),\n    encoder=e,\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"visual_model.predict(x, one=True)\n")),(0,a.kt)("p",null,"Now let's create the index for searching by vector. We register both models with the index simultaneously,\nbut specifying that it's the ",(0,a.kt)("inlineCode",{parentName:"p"},"visual_model")," which will be responsible for creating the vectors in the database\n(",(0,a.kt)("inlineCode",{parentName:"p"},"indexing_listener"),"). The ",(0,a.kt)("inlineCode",{parentName:"p"},"compatible_listener")," specifies how one can use an alternative model to search\nthe vectors. By using models which expect different types of index, we can implement multimodal search\nwithout further ado."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.container.vector_index import VectorIndex\nfrom superduperdb.container.listener import Listener\n\ndb.add(\n    VectorIndex(\n        'my-index',\n        indexing_listener=Listener(\n            model=visual_model,\n            key='image',\n            select=collection.find(),\n        ),\n        compatible_listener=Listener(\n            model=text_model,\n            key='text',\n            active=False,\n            select=None,\n        )\n    )\n)\n")),(0,a.kt)("p",null,"We can now demonstrate searching by text for images:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import clip\nfrom IPython.display import display\nfrom superduperdb.container.document import Document as D\n\nout = db.execute(\n    collection.like(D({'text': 'mushroom'}), vector_index='my-index', n=3).find({})\n)\nfor r in out:\n    x = r['image'].x\n    display(x.resize((300, 300 * int(x.size[1] / x.size[0]))))\n")))}m.isMDXComponent=!0}}]);