"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9677],{4338:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=r(4848),l=r(8453);const t={},s="LLMs",a={id:"docs/ai_integrations/llm",title:"LLMs",description:"superduperdb allows users to work with LLM services and models",source:"@site/content/docs/ai_integrations/llm.md",sourceDirName:"docs/ai_integrations",slug:"/docs/ai_integrations/llm",permalink:"/docs/docs/ai_integrations/llm",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/ai_integrations/llm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jina",permalink:"/docs/docs/ai_integrations/jina"},next:{title:"OpenAI",permalink:"/docs/docs/ai_integrations/openai"}},o={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Quick start",id:"quick-start",level:3},{value:"Common Parameter Description",id:"common-parameter-description",level:3},{value:"<strong>prompt_template</strong>",id:"prompt_template",level:4},{value:"<strong>prompt_func</strong>",id:"prompt_func",level:4},{value:"<strong>max_batch_size</strong>",id:"max_batch_size",level:4},{value:"<strong>predict_kwargs</strong>",id:"predict_kwargs",level:4},{value:"Support Framework/API",id:"support-frameworkapi",level:2},{value:"Transformers",id:"transformers",level:3},{value:"vLLM",id:"vllm",level:3},{value:"VllmModel",id:"vllmmodel",level:4},{value:"VllmAPI",id:"vllmapi",level:4},{value:"OpenAI-style vLLM services",id:"openai-style-vllm-services",level:4},{value:"OpenAI",id:"openai",level:3},{value:"Custom Models",id:"custom-models",level:3},{value:"Non-API Type Models",id:"non-api-type-models",level:4},{value:"API Type Models",id:"api-type-models",level:4},{value:"Fine-tuning",id:"fine-tuning",level:2},{value:"Quickly Start",id:"quickly-start",level:3},{value:"Supported Features",id:"supported-features",level:3},{value:"Training Configuration",id:"training-configuration",level:3},{value:"Define The Model",id:"define-the-model",level:4},{value:"Define Training Parameter Configuration",id:"define-training-parameter-configuration",level:4},{value:"Execute Training",id:"execute-training",level:4},{value:"on_ray (str)",id:"on_ray-str",level:5},{value:"ray_address (str)",id:"ray_address-str",level:5},{value:"ray_configs (dict)",id:"ray_configs-dict",level:5}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"llms",children:"LLMs"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"superduperdb"})," allows users to work with LLM services and models"]}),"\n",(0,i.jsx)(n.p,{children:"Here's the list of supported LLM services/models:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"vLLM"}),"\n",(0,i.jsx)(n.li,{children:"OpenAI-style API services"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(n.h3,{id:"quick-start",children:"Quick start"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Using a model for prediction"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(model_name='gpt-3.5-turbo')\nmodel.predict(\"1+1=\")\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.strong,{children:"Using SuperDuperDB to connect ChatGPT with a database for inference"})})}),"\n",(0,i.jsx)(n.p,{children:"Create a database layer connection using SuperDuperDB"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from superduperdb import superduper\ndb = superduper("mongomock://test")\n'})}),"\n",(0,i.jsx)(n.p,{children:"Insert example datas"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from superduperdb.backends.mongodb.query import Collection\nfrom superduperdb.base.document import Document\n\ndatas = [Document({"question": f"1+{i}=", "id": str(i)}) for i in range(3)]\ndb.execute(Collection(\'docs\').insert_many(datas))\n'})}),"\n",(0,i.jsx)(n.p,{children:"Add the model to the database"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(model_name='gpt-4')\ndb.add(model)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Infer the ",(0,i.jsx)(n.code,{children:"question"})," field in the database"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"model.predict(X='question', db=db, select=Collection('docs').find())\n"})}),"\n",(0,i.jsx)(n.h3,{id:"common-parameter-description",children:"Common Parameter Description"}),"\n",(0,i.jsx)(n.h4,{id:"prompt_template",children:(0,i.jsx)(n.strong,{children:"prompt_template"})}),"\n",(0,i.jsxs)(n.p,{children:["Used to define the prompt, containing two special fields, default is ",(0,i.jsx)(n.code,{children:'"{input}"'})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["input: Required, will be filled with the input ",(0,i.jsx)(n.code,{children:'"X"'})]}),"\n",(0,i.jsxs)(n.li,{children:["context: Optional, the ",(0,i.jsx)(n.code,{children:"Context"})," returned by SuperDuperDB, example usage can be seen in ",(0,i.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/examples/question_the_docs_opensource.ipynb",children:"Building Private Q&A Assistant Using Mongo and Open Source Model"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(model_name=\'gpt-3.5-turbo\', prompt_template="Translate the sentence into Chinese: {input}")\nmodel.predict("Hello")\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Hello"})," will be filled in, and then the LLM model will be called after ",(0,i.jsx)(n.code,{children:"Translate the sentence into Chinese: Hello"})," is obtained."]}),"\n",(0,i.jsx)(n.h4,{id:"prompt_func",children:(0,i.jsx)(n.strong,{children:"prompt_func"})}),"\n",(0,i.jsxs)(n.p,{children:["A function for custom prompt generation. If provided, this function will be used for prompt construction, and ",(0,i.jsx)(n.code,{children:"prompt_template"})," becomes ineffective."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(model_name=\'gpt-3.5-turbo\', prompt_func=lambda x, lang:  f"Translate the sentence into {lang}: {x}")\nmodel.predict("Hello", lang="Japanese")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"max_batch_size",children:(0,i.jsx)(n.strong,{children:"max_batch_size"})}),"\n",(0,i.jsx)(n.p,{children:"Controls the maximum number of concurrent requests when using API-type LLM models."}),"\n",(0,i.jsx)(n.h4,{id:"predict_kwargs",children:(0,i.jsx)(n.strong,{children:"predict_kwargs"})}),"\n",(0,i.jsx)(n.p,{children:"All defined inference parameters, which will be sent to the model or API during inference."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(model_name='gpt-3.5-turbo', predict_kwargs={'temperature': 0.7})\nmodel.predict(\"Hello\", seed=1)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'{"temperature": 0.7, "seed": 1}'})," will be sent to the OpenAI interface."]}),"\n",(0,i.jsxs)(n.p,{children:["Parameters defined in ",(0,i.jsx)(n.code,{children:"model.predict"})," will override those in ",(0,i.jsx)(n.code,{children:"predict_kwargs"}),", but ",(0,i.jsx)(n.code,{children:"predict_kwargs"})," will be registered in the Metadata Store."]}),"\n",(0,i.jsx)(n.h2,{id:"support-frameworkapi",children:"Support Framework/API"}),"\n",(0,i.jsx)(n.h3,{id:"transformers",children:"Transformers"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/index",children:"Transformers"})," is a popular AI framework, and we have incorporated native support for Transformers to provide essential Large Language Model (LLM) capabilities."]}),"\n",(0,i.jsx)(n.p,{children:"You can quickly utilize LLM capabilities using the following Python function:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from superduperdb.ext.llm import LLM\nllm = LLM( model_name_or_path="facebook/opt-350m")\nllm.predict("What are we having for dinner?")\n'})}),"\n",(0,i.jsx)(n.p,{children:"The model can be configured with the following parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"bits: quantization bits, ranging from 4 to 8; the default is None."}),"\n",(0,i.jsx)(n.li,{children:"adapter_id: Add an adapter to the base model for inference."}),"\n",(0,i.jsx)(n.li,{children:"model_kwargs: a dictionary; all the model_kwargs will be passed to transformers.AutoModelForCausalLM.from_pretrained. You can provide parameters such as trust_remote_code=True."}),"\n",(0,i.jsx)(n.li,{children:"tokenizer_kwargs: a dictionary; all the tokenizer_kwargs will be passed to transformers.AutoTokenizer.from_pretrained."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"vllm",children:"vLLM"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/",children:"vLLM"})," is a fast and easy-to-use library for LLM inference and serving."]}),"\n",(0,i.jsxs)(n.p,{children:["Currently, ",(0,i.jsx)(n.code,{children:"superduperdb"})," supports the following methods to use vLLM:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VllmModel"}),": Use vLLM to load models."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VllmAPI"}),": Request services in the ",(0,i.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/getting_started/quickstart.html#api-server",children:"API server format"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"vllmmodel",children:"VllmModel"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VllmModel"})," supports loading models locally or to a Ray cluster."]}),"\n",(0,i.jsxs)(n.p,{children:["After instantiation using ",(0,i.jsx)(n.code,{children:"model = VllmModel(....)"}),", the model is loaded lazily and begins loading only when the ",(0,i.jsx)(n.code,{children:"model.predict"})," method is called."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Load Locally"})}),"\n",(0,i.jsxs)(n.p,{children:["To use this model, first install ",(0,i.jsx)(n.code,{children:"vllm"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install vllm\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from superduperdb.ext.llm import VllmModel\nmodel = VllmModel(model_name="mistralai/Mistral-7B-Instruct-v0.2")\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Load to a Ray Cluster"})}),"\n",(0,i.jsxs)(n.p,{children:["Requires installing ",(0,i.jsx)(n.code,{children:"ray"}),", no need for ",(0,i.jsx)(n.code,{children:"vllm"})," dependencies."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Installing ",(0,i.jsx)(n.code,{children:"vllm"})," requires a CUDA environment, which can prevent clients without CUDA from installing ",(0,i.jsx)(n.code,{children:"vllm"}),". Therefore, superduperdb has adapted so that if loading to a ray cluster, local installation of ",(0,i.jsx)(n.code,{children:"vllm"})," is not required."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install 'ray[default]'\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from superduperdb.ext.llm import VllmModel\nmodel = VllmModel(model_name="mistralai/Mistral-7B-Instruct-v0.2", ray_address="ray://ray_cluster_ip:10001")\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If this is your first time running on that ray cluster, the wait time might be a bit longer, as ",(0,i.jsx)(n.code,{children:"vllm"})," dependencies and the corresponding model will be installed on the ray cluster's server."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameter"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["model_name: Same as ",(0,i.jsx)(n.code,{children:"model"})," of vLLM"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["tensor_parallel_size: Same as ",(0,i.jsx)(n.code,{children:"tensor_parallel_size"})," of vLLM"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["trust_remote_code: Same as ",(0,i.jsx)(n.code,{children:"trust_remote_code"})," of vLLM"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"vllm_kwargs: Other initialization parameters of vLLM"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"on_ray: Whether to run on ray, default False"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["ray_address: ray cluster address, if not empty, ",(0,i.jsx)(n.code,{children:"on_ray"})," will automatically be set to True"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"vllmapi",children:"VllmAPI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.llm import VllmAPI\nmodel = VllmAPI(identifier='llm', api_url='http://localhost:8000/v1')\n"})}),"\n",(0,i.jsx)(n.h4,{id:"openai-style-vllm-services",children:"OpenAI-style vLLM services"}),"\n",(0,i.jsxs)(n.p,{children:["If you have deployed ",(0,i.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/getting_started/quickstart.html#openai-compatible-server",children:"OpenAI-style vLLM services"}),", they can be used with OpenAI as detailed in the following OpenAI format."]}),"\n",(0,i.jsx)(n.h3,{id:"openai",children:"OpenAI"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"superduperdb"})," supports OpenAI-style API services. If parameters like ",(0,i.jsx)(n.code,{children:"openai_api_base"})," are not provided, it defaults to calling OpenAI's services."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Using a custom API to initialize the model"})," (example for a vLLM-started OpenAI-style service)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from superduperdb.ext.llm import OpenAI\nmodel = OpenAI(openai_api_base="http://localhost:8000/v1", model_name="mistralai/Mistral-7B-Instruct-v0.2")\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Using OpenAI's models"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.llm import OpenAI\nmodel = OpenAI()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"custom-models",children:"Custom Models"}),"\n",(0,i.jsx)(n.p,{children:"If the above models do not meet your needs, you can define your own models as follows, for reference:"}),"\n",(0,i.jsx)(n.h4,{id:"non-api-type-models",children:"Non-API Type Models"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# https://huggingface.co/TinyLlama/TinyLlama-1.1B-Chat-v1.0\nimport dataclasses as dc\nimport torch\nfrom transformers import pipeline\n\nfrom superduperdb.ext.llm import BaseLLMModel\n\n@dc.dataclass\nclass CustomLLM(BaseLLMModel):\n    def init(self):\n        self.pipe = pipeline(\n            "text-generation",\n            model=self.model_name,\n            torch_dtype=torch.bfloat16,\n            device_map="auto",\n        )\n\n    def _generate(self, messages, **kwargs):\n        prompt = self.pipe.tokenizer.apply_chat_template(\n            messages, tokenize=False, add_generation_prompt=True\n        )\n        outputs = self.pipe(\n            prompt,\n            max_new_tokens=256,\n            do_sample=True,\n        )\n        return outputs[0]["generated_text"]\n\n\nmodel = CustomLLM(model_name="TinyLlama/TinyLlama-1.1B-Chat-v1.0")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"api-type-models",children:"API Type Models"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import dataclasses as dc\nimport os\nfrom openai import OpenAI\nfrom superduperdb.ext.llm import BaseLLMAPI\n\n@dc.dataclass\nclass CustomModel(BaseLLMAPI):\n    def init(self):\n        # https://github.com/openai/openai-python#usage\n        self.client = OpenAI(\n            # This is the default and can be omitted\n            api_key=os.environ.get("OPENAI_API_KEY"),\n        )\n\n    def _generate(self, prompt: str, **kwargs) -> str:\n        chat_completion = self.client.chat.completions.create(\n            messages=[\n                {\n                    "role": "user",\n                    "content": prompt,\n                }\n            ],\n            model="gpt-3.5-turbo",\n        )\n        return chat_completion.choices[0].message.content\n'})}),"\n",(0,i.jsx)(n.h2,{id:"fine-tuning",children:"Fine-tuning"}),"\n",(0,i.jsx)(n.p,{children:"SuperduperDB currently offers convenient support for model fine-tuning."}),"\n",(0,i.jsx)(n.h3,{id:"quickly-start",children:"Quickly Start"}),"\n",(0,i.jsx)(n.p,{children:"We can quickly run a fine-tuning example using the qlora finetune Mistral-7B model."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install Dependencies"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install transformers torch datasets peft bitsandbytes\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Training Script"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from superduperdb import superduper\nfrom superduperdb.backends.mongodb import Collection\nfrom superduperdb.base.document import Document\nfrom superduperdb.ext.llm import LLM\nfrom superduperdb.ext.llm.model import LLMTrainingConfiguration\n\nfrom datasets import load_dataset\n\nmodel = "mistralai/Mistral-7B-v0.1"\ndataset_name = "timdettmers/openassistant-guanaco"\n\ndb = superduper("mongomock://test_llm")\ndataset = load_dataset(dataset_name)\ntrain_dataset = dataset["train"]\neval_dataset = dataset["test"]\n\ntrain_documents = [\n    Document({"text": example["text"], "_fold": "train"})\n    for example in train_dataset\n]\neval_documents = [\n    Document({"text": example["text"], "_fold": "valid"})\n    for example in eval_dataset\n]\n\ndb.execute(Collection("datas").insert_many(train_documents))\ndb.execute(Collection("datas").insert_many(eval_documents))\n\nllm = LLM(\n    identifier="llm-finetune",\n    bits=4,\n    model_name_or_path=model,\n)\n\n\ntraining_configuration = LLMTrainingConfiguration(\n        identifier="llm-finetune-training-config",\n        output_dir="output/llm-finetune",\n        overwrite_output_dir=True,\n        num_train_epochs=1,\n        save_total_limit=5,\n        logging_steps=10,\n        evaluation_strategy="steps",\n        fp16=True,\n        eval_steps=100,\n        save_steps=100,\n        per_device_train_batch_size=1,\n        per_device_eval_batch_size=1,\n        gradient_accumulation_steps=4,\n        max_length=512,\n        use_lora=True,\n)\n\nllm.fit(\n    X="text",\n    select=Collection("datas").find(),\n    configuration=training_configuration,\n    db=db,\n)\n\n\nprompt = "### Human: Who are you? ### Assistant: "\n\n# Automatically load lora model for prediction, default use the latest checkpoint\nprint(llm.predict(prompt, max_new_tokens=100, do_sample=True))\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This script can be found in ",(0,i.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/examples/llm_finetune.py",children:(0,i.jsx)(n.code,{children:"llm_finetune.py"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Running Training"}),"\nYou can execute training by running ",(0,i.jsx)(n.code,{children:"python examples/llm_finetune.py"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If you have multiple GPUs, it will automatically use Ray for multi-GPU training."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If you encounter ",(0,i.jsx)(n.code,{children:"ImportError: cannot import name 'ExtensionArrayFormatter' from 'pandas.io.formats.format'"})," while using multiple GPUs, please downgrade the Pandas version with the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"pip install 'pandas<=2.1.4'\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Model Usage"}),"\nApart from directly loading and using the model at the end of the script, you can also use your model in other programs provided that you are connected to a real database rather than a mock database."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'llm = db.load("model", "llm-finetune")\nprompt = "### Human: Who are you? ### Assistant: "\nprint(llm.predict(prompt, max_new_tokens=100, do_sample=True))\n'})}),"\n",(0,i.jsx)(n.h3,{id:"supported-features",children:"Supported Features"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Training Methods"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Full fine-tuning"}),"\n",(0,i.jsx)(n.li,{children:"LoRA fine-tuning"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Parallel Training"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["Parallel training is supported using Ray, with data parallelism as the default strategy. You can also pass DeepSpeed parameters to configure parallelism through ",(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/main_classes/deepspeed#zero",children:"DeepSpeed configuration"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Multi-GPUs fine-tuning"}),"\n",(0,i.jsx)(n.li,{children:"Multi-nodes fine-tuning"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Remote Training"}),":\nYou can perform remote training by providing a ",(0,i.jsx)(n.code,{children:"ray_address"}),". Imagine you have a Ray cluster with GPUs, you can connect to it from your local machine for training."]}),"\n",(0,i.jsx)(n.h3,{id:"training-configuration",children:"Training Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The training process consists of the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Define a model."}),"\n",(0,i.jsx)(n.li,{children:"Define training parameter configurations."}),"\n",(0,i.jsx)(n.li,{children:"Execute training."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"define-the-model",children:"Define The Model"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'llm = LLM(\n    identifier="llm-finetune",\n    bits=4,\n    model_name_or_path=model,\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"LLM class model definition can be found in the above introduction."}),"\n",(0,i.jsx)(n.h4,{id:"define-training-parameter-configuration",children:"Define Training Parameter Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'training_configuration = LLMTrainingConfiguration(\n    identifier="llm-finetune-training-config",\n    output_dir="output/llm-finetune",\n    ...\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The configuration inherits from Huggingface ",(0,i.jsx)(n.code,{children:"transformers.TrainingArguments"}),", which means theoretically you can use any parameters supported by it."]}),"\n",(0,i.jsx)(n.p,{children:"Additionally, some extra parameters are provided to support LLM fine-tuning scenarios."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'use_lora (`bool`, *optional*, defaults to True):\n    Whether to use LoRA training.\n    \nlora_r (`int`, *optional*, defaults to 8):\n    Lora R dimension.\n\nlora_alpha (`int`, *optional*, defaults to 16):\n    Lora alpha.\n\nlora_dropout (`float`, *optional*, defaults to 0.05):\n    Lora dropout.\n\nlora_target_modules (`List[str]`, *optional*, defaults to None):\n    Lora target modules. If None, will be automatically inferred.\n\nlora_bias (`str`, *optional*, defaults to "none"):\n    Lora bias.\n\nmax_length (`int`, *optional*, defaults to 512):\n    Maximum source sequence length during training.\n    \nlog_to_db (`bool`, *optional*, defaults to True):\n    Log training to db.\n    If True, will log checkpoint to superduperdb,\n        but need ray cluster can access to db.\n    If can\'t access to db, please set it to False.\n'})}),"\n",(0,i.jsx)(n.h4,{id:"execute-training",children:"Execute Training"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'llm.fit(\n    X="text",\n    select=Collection("datas").find(),\n    configuration=training_configuration,\n    db=db,\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"By default, training will execute directly. However, if multiple GPUs are detected, training will be managed and performed in parallel using Ray."}),"\n",(0,i.jsx)(n.p,{children:"Additionally, you can manually configure Ray for training, either locally or on a remote Ray cluster."}),"\n",(0,i.jsx)(n.p,{children:"Provide three Ray-related parameters for configuration:"}),"\n",(0,i.jsx)(n.h5,{id:"on_ray-str",children:"on_ray (str)"}),"\n",(0,i.jsx)(n.p,{children:"Whether to perform training on Ray."}),"\n",(0,i.jsx)(n.h5,{id:"ray_address-str",children:"ray_address (str)"}),"\n",(0,i.jsx)(n.p,{children:"The address of the Ray cluster to connect to. If not provided, a Ray service will be started locally by default."}),"\n",(0,i.jsx)(n.h5,{id:"ray_configs-dict",children:"ray_configs (dict)"}),"\n",(0,i.jsxs)(n.p,{children:["All ray_configs will be passed to ",(0,i.jsx)(n.a,{href:"https://docs.ray.io/en/latest/train/api/doc/ray.train.torch.TorchTrainer.html",children:"TorchTrainer"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Except for the following three fields, which are automatically built by SuperDuperDB:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"train_loop_per_worker"}),"\n",(0,i.jsx)(n.li,{children:"train_loop_config"}),"\n",(0,i.jsx)(n.li,{children:"datasets"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, you can provide a configuration like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from ray.train import RunConfig, ScalingConfig\n\nscaling_config = ScalingConfig(\n    num_workers=4, # Number of GPUs you need\n    use_gpu=True,\n)\n\nrun_config = RunConfig(\n    storage_path="s3://llm-test/llm-finetune",\n    name="llm-finetune-test100",\n)\n\nray_configs = {\n    "scaling_config": scaling_config,\n    "run_config": run_config,\n}\n\nllm.fit(\n    X="text",\n    select=Collection("datas").find(),\n    configuration=base_config,\n    db=db,\n    on_ray=True,\n    ray_address="ray://ray_cluster_ip:10001",\n    ray_configs=ray_configs,\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"For information on how to configure Ray resources, please refer to the ray documentation, such as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.ray.io/en/latest/train/api/doc/ray.train.ScalingConfig.html#ray.train.ScalingConfig",children:"ScalingConfig"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.ray.io/en/latest/train/api/doc/ray.train.RunConfig.html#ray.train.RunConfig",children:"RunConfig"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var i=r(6540);const l={},t=i.createContext(l);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);