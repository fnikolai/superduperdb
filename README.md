<p align="center">
  <a href="https://www.superduperdb.com">
    <img width="90%" src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/img/SuperDuperDB_logo_color.svg">
  </a>
</p>
<div align="center">

# Bring AI to your favorite database! 

</div>

<div align="center">

## <a href="https://superduperdb.github.io/superduperdb/"><strong>Docs</strong></a> | <a href="https://docs.superduperdb.com/blog"><strong>Blog</strong></a> | <a href="https://docs.superduperdb.com/docs/category/use-cases"><strong>Showcases</strong></a> | <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples"><strong>Live Jupyter Demo</strong></a>

</div>


<p align="center">
  <a href="https://superduperdb.com"><img src="https://img.shields.io/badge/status-alpha-orange" alt="Status - Alpha"></a>	
  <a href="https://github.com/superduperdb/superduperdb/actions"><img src="https://github.com/superduperdb/superduperdb/workflows/CI/badge.svg" alt="CI"></a>
  <a href="https://codecov.io/gh/superduperdb/superduperdb/branch/main"><img src="https://codecov.io/gh/superduperdb/superduperdb/branch/main/graph/badge.svg" alt="Coverage"></a>
  <a href="https://pypi.org/project/superduperdb"><img src="https://img.shields.io/pypi/v/superduperdb?color=%23007ec6&label=pypi%20package" alt="Package version"></a>
  <a href="https://pypi.org/project/superduperdb"><img src="https://img.shields.io/pypi/pyversions/superduperdb.svg" alt="Supported Python versions"></a>      
</p>
<p align="center">  
  <a href="https://github.com/superduperdb/superduperdb/stargazers/"><img src="https://img.shields.io/github/stars/superduperdb/superduperdb?style=social&label=Star&maxAge=2592000" /></a>		
  <a href="https://twitter.com/superduperdb" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow @SuperDuperDB"></a>
  <a href="https://join.slack.com/t/superduperdb/shared_invite/zt-1zuojj0k0-RjAYBs1TDsvEa7yaFGa6QA"><img src="https://img.shields.io/badge/slack-superduperdb-8A2BE2?logo=slack" alt="slack"></a>
  <a href="https://github.com/superduperdb/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache_2.0-green" alt="License - Apache 2.0"></a>		
</p>


<div align="center">	

 `🔮 SuperDuperDB is open-source: Leave a star ⭐️ to support the project!`
 </div>


---
**SuperDuperDB isn't just another database; it's a framework that integrates AI models and APIs directly into your data infrastructure.**
With SuperDuperDB, you can achieve real-time inference, model training, and vector search effortlessly, eliminating the need for complex MLOps pipelines and specialized vector databases—all using Python!

**Key Features:**

- **[Deploy Model Predictions Directly on your Database](https://docs.superduperdb.com/docs/docs/apply_models):** Apply arbitary models to database without the need for additional pre-processing steps, ETL or boilerplate code.
- **[Difficult Data-types](https://docs.superduperdb.com/docs/docs/encoding_special_data_types)**: Work on your datastore with images, video, audio and any type which can be encoded in Python.
- **[Scalable Model Training](https://docs.superduperdb.com/docs/docs/training_models):** Utilize data and computational optimizations to train AI models on large, diverse datasets while ensuring optimal performance and ease of management.
- **[Streaming Inference](https://docs.superduperdb.com/docs/docs/daemonizing_models_with_listeners):** Continuously make predictions as new data arrive, propagating results to downstream applications in real-time. 
- **[Model Chaining](https://docs.superduperdb.com/docs/docs/linking_interdependent_models)**: Connect multiple models to create arbitrary interdependencies for the extraction of increasingly complex features and patterns.
- **[Feature Store](https://docs.superduperdb.com/docs/docs/mongodb_query_API#inserts):** No need for additional feature stores - use your datastore *as* a feature store, with arbitrary data-types supported.
- **[Your Data *is now* a Vector-search Database](https://docs.superduperdb.com/docs/docs/vector_search):** No need for migration to additional new-fangled vector-search databases - use your datastore as a vector-search database.


<p align="center">
  <img width="100%" src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/img/superduperdb.gif">
</p>



## ⚡ Integrations (*more coming soon*):

### Supported Datastores 
Unlock the power of SuperDuperDB to connect and manage various types of data sources effortlessly!
<div align="left">
<table>
    <tr>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/databases/mongodb.png" width="139px"/>
	    <pre> Full Support </pre>
        </td>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/databases/mongodb-atlas.png" width="139px"/>
	    <pre> Full Support </pre>
        </td>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/databases/aws-s3.png" width="139px"/>
	    <pre> Full Support </pre>
        </td>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/databases/postgresql.png" width="139px"/>
	    <pre> Experimental </pre>
        </td>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/databases/sqlite.png" width="139px"/>
	    <pre> Experimental </pre>
        </td>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/databases/duckdb.png" width="139px"/>
	    <pre> Experimental </pre>
        </td>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/databases/mysql.png" width="139px"/>
	    <pre> Experimental </pre>
        </td>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/databases/snowflake.png" width="139px"/>
	    <pre> Experimental </pre>
        </td>
    </tr>
</table>
</div>
<br>

### Supported AI Frameworks
Leverage SuperDuperDB to discover insights from your data using a variety of AI models!

<div align="left">
<table>
    <tr>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/frameworks/pytorch.png" width="139px"/>
	    <pre> Full Support </pre>		
        </td>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/frameworks/scikit-learn.png" width="139px"/>
	    <pre> Full Support </pre>		
        </td>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/frameworks/huggingface-transformers.png" width="139px"/>
	    <pre> Full Support </pre>		
        </td>
    </tr>
</table>
</div>

<br>

### AI APIs
Let SuperDuperDB make your applications smarter using a suite of ready-to-use AI models!

<div align="left">
<table >
    <tr>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/apis/openai.png" width="139px"/>
	    <pre> Full Support </pre>		
        </td>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/apis/cohere.png" width="139px"/>
	    <pre> Full Support </pre>		
        </td>
        <td align="center" width="140" height="112.43">
            <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/apis/anthropic.png" width="139px"/>
	    <pre> Full Support </pre>		
        </td>
    </tr>
</table>
</div>


## 🔥 Featured Examples

Try our ready-to-use notebooks [live on your browser](https://demo.superduperdb.com). 

- Generative AI & chatbots
- Vector Search
- Standard Use-Cases (classification, regression, clustering, recommendation, etc)
- Highly custom AI use cases and workflows with specialized models.


<table>
  <tr>
    <td width="30%">
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/multimodal_image_search_clip.ipynb">
        <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/featured-examples/image-search.svg" />
      </a>
    </td>
    <td width="30%">
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/video_search.ipynb">
        <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/featured-examples/video-search.svg" />
      </a>
    </td>
    <td width="30%">
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/question_the_docs.ipynb">
        <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/featured-examples/semantic-search.svg" />
      </a>
    </td>
  </tr>
  <tr>
    <th>
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/multimodal_image_search_clip.ipynb">Text-To-Image Search</a>
    </th>
    <th>
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/video_search.ipynb">Text-To-Video Search</a>
    </th>
    <th>
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/question_the_docs.ipynb">Question the Docs</a>
    </th>
  </tr>
  <tr>     
    <td width="30%">
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/vector_search.ipynb">
        <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/featured-examples/document-search.svg" />
      </a>
    </td>
    <td width="30%">
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/mnist_torch.ipynb">
        <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/featured-examples/machine-learning.svg" />
      </a>
    </td>
    <td width="30%">
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/transfer_learning.ipynb">
        <img src="https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/docs/hr/static/icons/featured-examples/transfer-learning.svg" />
      </a>
    </td>
  </tr>
  <tr>
    <th>
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/vector_search.ipynb">Semantic Search Engine</a>
    </th>
    <th>
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/mnist_torch.ipynb">Classical Machine Learning</a>
    </th>
    <th>
      <a href="https://demo.superduperdb.com/user-redirect/lab/tree/examples/transfer_learning.ipynb">Cross-Framework Transfer Learning</a>
    </th>
  </tr>
</table>



# 🚀 Installation
#### 1. Install SuperDuperDB via `pip` *(~1 minute)*
```
pip install superduperdb
```

#### 2. Try SuperDuperDB via Docker *(~2 minutes)*:
   - You need to install Docker? See the docs <a href="https://docs.docker.com/engine/install/">here</a>.

```
docker run -p 8888:8888 superduperdb/demo:latest
```

# 📚 Preview

Here are snippets which give you a sense of how `superduperdb` works and how simple it is to use.
You can visit the <a href="https://docs.superduperdb.com/docs/docs/intro">docs</a> to learn more.


#### - Deploy ML/AI models to your database:
Automatically compute outputs (inference) with your database in a single environment.

```python
import pymongo
from sklearn.svm import SVC

from superduperdb import superduper

# Make your db superduper!
db = superduper(pymongo.MongoClient().my_db)

# Models client can be converted to SuperDuperDB objects with a simple wrapper.
model = superduper(SVC())

# Add the model into the database
db.add(model)

# Predict on the selected data.
model.predict(X='input_col', db=db, select=Collection(name='test_documents').find({'_fold': 'valid'}))
```


#### - Train models directly from your database.
Simply by querying your database, without additional ingestion and pre-processing:

```python
import pymongo
from sklearn.svm import SVC

from superduperdb import superduper

# Make your db superduper!
db = superduper(pymongo.MongoClient().my_db)

# Models client can be converted to SuperDuperDB objects with a simple wrapper.
model = superduper(SVC())

# Predict on the selected data.
model.train(X='input_col', y='target_col', db=db, select=Collection(name='test_documents').find({'_fold': 'valid'}))
```

#### - Vector-Search your data:
Use your existing favorite database as a vector search database, including model management and serving. 

```python
# First a "Listener" makes sure vectors stay up-to-date
indexing_listener = Listener(model=OpenAIEmbedding(), key='text', select=collection.find())

# This "Listener" is linked with a "VectorIndex"
db.add(VectorIndex('my-index', indexing_listener=indexing_listener))

# The "VectorIndex" may be used to search data. Items to be searched against are passed
# to the registered model and vectorized. No additional app layer is required.
db.execute(collection.like({'text': 'clothing item'}, 'my-index').find({'brand': 'Nike'}))
```

#### - Integrate AI APIs to work together with other models. 
Use OpenAI, PyTorch or Hugging face model as an embedding model for vector search.

```python
# Create a ``VectorIndex`` instance with indexing listener as OpenAIEmbedding and add it to the database.
db.add(
    VectorIndex(
        identifier='my-index',
        indexing_listener=Listener(
            model=OpenAIEmbedding(identifier='text-embedding-ada-002'),
            key='abstract',
            select=Collection(name='wikipedia').find(),
        ),
    )
)
# The above also executes the embedding model (openai) with the select query on the key.

# Now we can use the vector-index to search via meaning through the wikipedia abstracts
cur = db.execute(
    Collection(name='wikipedia')
        .like({'abstract': 'philosophers'}, n=10, vector_index='my-index')
)
```


#### - Add a Llama 2 model directly into your database!:
```python
model_id = "meta-llama/Llama-2-7b-chat-hf"
tokenizer = AutoTokenizer.from_pretrained(model_id)
pipeline = transformers.pipeline(
    "text-generation",
    model=model_id,
    torch_dtype=torch.float16,
    device_map="auto",
)

model = Pipeline(
    identifier='my-sentiment-analysis',
    task='text-generation',
    preprocess=tokenizer,
    object=pipeline,
    torch_dtype=torch.float16,
    device_map="auto",
)

# You can easily predict on your collection documents.
model.predict(
    X=Collection(name='test_documents').find(),
    db=db,
    do_sample=True,
    top_k=10,
    num_return_sequences=1,
    eos_token_id=tokenizer.eos_token_id,
    max_length=200
)
```

#### - Use models outputs as inputs to downstream models:

```python
model.predict(
    X='input_col',
    db=db,
    select=coll.find().featurize({'X': '<upstream-model-id>'}),  # already registered upstream model-id
    listen=True,
)
```



# 🤝 Community & Getting Help 

#### If you have any problems, questions, comments, or ideas:
- Join <a href="https://join.slack.com/t/superduperdb/shared_invite/zt-1zuojj0k0-RjAYBs1TDsvEa7yaFGa6QA">our Slack</a> (we look forward to seeing you there).
- Search through <a href="https://github.com/SuperDuperDB/superduperdb/discussions">our GitHub Discussions</a>, or <a href="https://github.com/SuperDuperDB/superduperdb/discussions/new/choose">add a new question</a>.
- Comment <a href="https://github.com/SuperDuperDB/superduperdb/issues/">an existing issue</a> or create <a href="https://github.com/SuperDuperDB/superduperdb/issues/new/choose">a new one</a>.
- Help us to improve SuperDuperDB by providing your valuable feedback <a href="https://docs.google.com/forms/d/e/1FAIpQLScKNyLCjSEWAwc-THjC7NJVDNRxQmVR5ey30VVayPhWOIhy1Q/viewform">here</a>!
- Email us at `gethelp@superduperdb.com`.
- Feel free to contact a maintainer or community volunteer directly! 



# 🌱 Contributing  

#### There are many ways to contribute, and they are not limited to writing code. We welcome all contributions such as:


- <a href="https://github.com/SuperDuperDB/superduperdb/issues/new/choose">Bug reports</a>
- <a href="https://github.com/SuperDuperDB/superduperdb/issues/new/choose">Documentation improvements</a>
- <a href="https://github.com/SuperDuperDB/superduperdb/issues/new/choose">Enhancement suggestions</a>
- <a href="https://github.com/SuperDuperDB/superduperdb/issues/new/choose">Feature requests</a>
- <a href="https://github.com/SuperDuperDB/superduperdb/issues/new/choose">Expanding the tutorials and use case examples</a>

Please see our [Contributing Guide](CONTRIBUTING.md) for details.

# ❤️ Contributors
#### Thanks goes to these wonderful people:

<a href="https://github.com/SuperDuperDB/superduperdb/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SuperDuperDB/superduperdb" />
</a>


# License  

SuperDuperDB is open-source and intended to be a community effort, and it wouldn't be possible without your support and enthusiasm.
It is distributed under the terms of the Apache 2.0 license. Any contribution made to this project will be subject to the same provisions.

# Join Us 

We are looking for nice people who are invested in the problem we are trying to solve to join us full-time. Find roles that we are trying to fill <a href="https://join.com/companies/superduperdb">here</a>!
