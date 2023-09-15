"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"building-a-documentation-chatbot-using-fastapi-react-mongodb-and-superduperdb","metadata":{"permalink":"/blog/building-a-documentation-chatbot-using-fastapi-react-mongodb-and-superduperdb","editUrl":"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/blog/2023-09-12-rag-question-answering.mdx","source":"@site/blog/2023-09-12-rag-question-answering.mdx","title":"Building a Documentation Chatbot using FastAPI, React, MongoDB and SuperDuperDB","description":"Imagine effortlessly infusing AI into your data repositories\u2014databases, data warehouses, or data lakes\u2014without breaking a sweat. With SuperDuperDB, we aim to make this dream a reality. We want to provide everyone with the tools to build AI applications directly on top of their data stores, with just a pinch of Python magic sprinkled on top! \ud83d\udc0d\u2728","date":"2023-09-12T00:00:00.000Z","formattedDate":"September 12, 2023","tags":[{"label":"RAG","permalink":"/blog/tags/rag"},{"label":"vector-search","permalink":"/blog/tags/vector-search"}],"readingTime":7.485,"hasTruncateMarker":true,"authors":[{"name":"Nick Byrne","title":"Founding Engineer at SuperDuperDB","url":"https://github.com/nenb","imageURL":"https://avatars.githubusercontent.com/u/55434794?v=4","key":"nenb"}],"frontMatter":{"slug":"building-a-documentation-chatbot-using-fastapi-react-mongodb-and-superduperdb","title":"Building a Documentation Chatbot using FastAPI, React, MongoDB and SuperDuperDB","authors":["nenb"],"tags":["RAG","vector-search"]},"nextItem":{"title":"Introduce vector search to your favourite database with SuperDuperDB","permalink":"/blog/introduce-vector-search-to-your-favourite-database-with-superduperdb"}},"content":"*Imagine effortlessly infusing AI into your data repositories\u2014databases, data warehouses, or data lakes\u2014without breaking a sweat. With SuperDuperDB, we aim to make this dream a reality. We want to provide everyone with the tools to build AI applications directly on top of their data stores, with just a pinch of Python magic sprinkled on top!* \ud83d\udc0d\u2728\\n\\n*In this latest blog post we take a dive into one such example - a Retrieval Augmented Generation (RAG) app we built directly on top of our MongoDB store.*\\n\\n\x3c!--truncate--\x3e\\n\\n-------------------------------------\\n\\nimport Bot from \\"./rag-question-answering-components/Bot\\"\\n\\n\\nSince we\u2019re in the business of building open-source software, a logical in-house application of our own technology is a question-answering app, directly on our own documentation. We built this app using SuperDuperDB together with FastAPI, React and MongoDB (the \u201cFARMS\u201d stack).\\n\\nWe use retrieval augmented generation, or RAG, to integrate an existing Large Language Model (LLM) with our own data; including documents found in vector-search in an initial pass, enables using an LLM on a domain it was not trained on. SuperDuperDB allows developers to apply RAG to their own standard database, instead of insisting that users migrate a portion of their data to a vector-search database such as Pinecone, Chroma or Milvus.\\n\\nAlthough SuperDuperDB\u2019s functionality is more general than simply RAG and vector search, if a model\u2019s output does indeed consist of vectors, it\u2019s dead easy with SuperDuperDB to use these vectors downstream in vector search and RAG applications. We\u2019ll post more about the range of possibilities with SuperDuperDB in the coming weeks.\\n\\n** \ud83e\udd16 Let\'s ask the chatbot to tell us more about SuperDuperDB.**\\n\\n<Bot question=\'What is SuperDuperDB?\' answer=\'SuperDuperDB is a Python package that provides tools for developers to apply AI and machine learning in their already deployed datastore. It also facilitates the setup of a scalable, open-source, and auditable environment for AI development. SuperDuperDB aims to make the integration of AI and data easier, extensible, and comprehensive. It allows for easy evaluation of model predictions and insertion back into the datastore and enables training deployment with a simple one-line command.\' />\\n\\n### Choosing our stack\\n\\nRight out of the box, SuperDuperDB supports MongoDB, a popular NoSQL database among full-stack developers. MongoDB\'s cloud service also provides a generous free-tier offering, and and we chose this for our storage.\\n\\n** \ud83d\udea7 SuperDuperDB has experimental support for SQL databases which will be greatly expanded in the coming weeks and months!**\\n\\nWe chose FastAPI for the web framework because it creates a self-documenting server, it\u2019s extremely full-featured, and has a large community of users - and yes, because it\u2019s trendy. The FARM stack combines both MongoDB and FastAPI, and so it seemed natural to build our RAG app by adding SuperDuperDB to FARM to make FARMS!\\n\\n### Setting up the code\\n\\nWe decided to stick fairly closely to a typical FastAPI directory structure, the major difference being that we now have a new `ai/` subdirectory that contains two new modules: `artifacts.py` and `components.py`.\\n\\n```\\nbackend\\n|___ ai\\n|   |___ __init__.py\\n\u2502   |___ artifacts.py\\n|   |___ components.py\\n\u2502   |___ utils      # AI helper functions here\\n\u2502        |__ ...\\n|___ documents      # Our REST backend has a single \'documents\' route\\n|   |___ __init__.py\\n|   |___ models.py  # Pydantic models here\\n|   |___ routes.py  # AI-enhanced CRUD logic here\\n|___ __init__.py\\n|___ app.py\\n|___ config.py\\n|___ main.py\\n```\\n\\n### Artifacts\\n\\n** \ud83e\udd16 Let\'s Question The Docs to learn more about Artifacts.**\\n\\n<Bot question=\'What is an Artifact?\' answer=\'An Artifact carries the necessary information and serialization method to save an object in a configured artifact store. The Artifact ensures that an object can be serialized and stored in a permanent and centralized location for future retrieval. An example of an artifact could be an image file named my_image.jpg that is saved in a configured artifact store, such as gridfs on MongoDB.\' />\\n\\nTo build a program, you first must understand its data, and a RAG app is no different. Here, our data source are Markdown files, and we want to process them in a way which is most suitable for answering the questions we would like the LLM to answer. Here there\'s a trade-off: splitting the text into too large chunks, makes it harder to get good specificity in the vector-search step of RAG. However, splitting the docs into larger chunks, allows the LLM to use coherently ordered text to contextualize the answer it formulates.\\n\\nSuperDuperDB supports a wide range of models for prediction and training, and flexible serialization: for instance, we might use `spacy` for pre-processing labels, `torchvision` for vectorizing images and `transformers` for multi-modal retrieval. (But the program is not dependent on all these models! \u201cDon\u2019t pay for what you don\u2019t use\u201d is our motto.)\\n\\nOnce we have our artifacts, `superduperdb` takes care of the rest. All serialization, creation and tracking of metadata, and job orchestration is handled automatically: the ultimate goal is to make the development of AI applications possible for anyone. For our RAG app, this step looks roughly like the following:\\n\\n```python\\nfrom superduperdb.container.document import Document\\nfrom superduperdb.db.mongodb.query import Collection\\n...\\n\\n# `artifacts` are chunked Markdown files\\ndocuments = [Document({\\"KEY\\": v}) for v in artifacts]\\ndb.execute(Collection(name=\\"NAME\\").insert_many(documents))\\n```\\n\\n### Components\\n\\n** \ud83e\udd16 QtD again!**\\n\\n<Bot question=\'Give examples of Components.\' answer=\\"SuperDuperDB has several components that work together to provide a unified user experience for the programmer. The DB component handles the underlying datastore and provides the functionality for storing and retrieving data. It is the core component of SuperDuperDB. The Models component defines the structure and behavior of the data to be stored in the DB. It includes classes or structures that represent different types of data and their relationships. The Encoders component is responsible for encoding and decoding data between different formats. It allows data to be transformed into a compatible format for storage in the DB. These are only some of the components that are provided by SuperDuperDB.\\" />\\n\\nWe are only going to use that first feature, and install our AI models inside our database.\\n\\n** \ud83d\udca1 But Components can also listen for specific events before performing an action, track statistics of database artifacts over time and even train models.**\\n\\nWe chose `text-embedding-ada-002` for our text embedding model, which we compute on the app\'s own server. For the chatbot, we selected the well-known `gpt-3.5-turbo`; now we can start talking to our chatbot!\\n\\n### Querying the database\\n\\nOur app is a particularly simple example of a CRUD app without the UPDATE or DELETE actions: once we have created our artifacts, we just have to READ the database for the text most similar to our question.\\n\\n### Building queries\\n\\nUsing SuperDuperDB to build a query to search for relevant text snippets is very similar to using a standard MongoDB driver such as `pymongo`, but with additional keyword arguments like n in this example, which says how many similar items to return from the database.\\n\\n```python\\nfrom superduperdb.db.mongodb.query import Collection            \\n\\ncontext = (\\n    Collection(name=\\"NAME\\")\\n    .like(\\n        {\\"KEY\\": query},  # Example: \'What is SuperDuperDB?\'\\n        n=5,\\n        vector_index=\\"NAME2\\",\\n    )\\n    .find()\\n)\\n```\\n\\n\\n### Dispatching QA queries\\n\\nUnder the hood, SuperDuperDB can be configured to perform searches and comparisons using a vector database like the open-source LanceDB, or MongoDB Atlas, which is what we used in QtD.\\n\\nExecuting a query is also very similar to a standard CRUD application, except that the database needs to be wrapped in a SuperDuperDB after it is created:\\n\\n```python\\nfrom pymongo import MongoClient\\n\\nfrom superduperdb import superduper\\n\\nMONGO_URI = ...\\n\\nmongo_db = MongoClient(MONGO_URI)\\ndb = superduper(mongo_db)  # It\'s now a super duper database!\\n\\ndb.execute(context)  # proceed as normal\\n```\\n\\n\\n### Summary\\n\\nThe FARM stack works well with SuperDuperDB in Python to build RAG applications.\\n\\nSuperDuperDB\u2019s support for vector search allows developers to minimize the problems with LLM hallucinations, as well as extending LLM coverage to domains the LLM was not trained on.\\n\\nMany RAG and question-answering applications use `langchain`, but SuperDuperDB stands out with its lightweight third-party integrations, support for \u201cbring your own model\u201d, and greater scope, incorporating scalable inference and training directly in your database.\\n\\n### SuperDuperDB into the future!\\n\\n** \ud83e\udd16 Let\'s see if the bot can help us decide what to do next.**\\n\\n<Bot question=\\"What is SuperDuperDB\'s mission?\\" answer=\\"SuperDuperDB\'s mission is to facilitate and accelerate the developer journey between data and AI models by creating an easy-to-use, extensible, and comprehensive Python framework for integrating AI and ML directly to the datastore. They aim to empower developers, data scientists, and architects to leverage the open-source ecosystem in their datastore deployments. They also aim to enable scalability and industrial scale deployment, provide easy-to-use tools for individual developers, allow continued use of already existing or deployed datastores without data migration, follow a fully open-source approach, and enable individuals and organizations to circumvent vendor lock-in strategies.\\" />\\n\\nThanks for reading! If you have any questions about this article, or SuperDuperDB in general, please don\u2019t hesitate to contact us at opensource@superduperdb.com.\\n\\n### Useful links\\n\\n- [Question the docs online](https://www.qtd.superduperdb.com/)!\\n- [SuperDuperDB on GitHub](https://github.com/SuperDuperDB/superduperdb)\\n- [Play with the code on GitHub](https://github.com/SuperDuperDB/superduperdb/tree/main/apps/question-the-docs)"},{"id":"introduce-vector-search-to-your-favourite-database-with-superduperdb","metadata":{"permalink":"/blog/introduce-vector-search-to-your-favourite-database-with-superduperdb","editUrl":"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/blog/2023-09-09-vector-search.md","source":"@site/blog/2023-09-09-vector-search.md","title":"Introduce vector search to your favourite database with SuperDuperDB","description":"In 2023 vector-databases are hugely popular; they provide the opportunity for developers to connect LLMs, such as OpenAI\u2019s GPT models, with their data, as well as providing the key to deploying \u201csearch-by-meaning\u201d on troves of documents.","date":"2023-09-09T00:00:00.000Z","formattedDate":"September 9, 2023","tags":[{"label":"AI","permalink":"/blog/tags/ai"},{"label":"vector-search","permalink":"/blog/tags/vector-search"}],"readingTime":4.79,"hasTruncateMarker":true,"authors":[{"name":"Duncan Blythe","title":"Creator of SuperDuperDB","url":"https://github.com/blythed","imageURL":"https://avatars.githubusercontent.com/u/15139331?v=4","key":"blythed"}],"frontMatter":{"slug":"introduce-vector-search-to-your-favourite-database-with-superduperdb","title":"Introduce vector search to your favourite database with SuperDuperDB","authors":["blythed"],"tags":["AI","vector-search"]},"prevItem":{"title":"Building a Documentation Chatbot using FastAPI, React, MongoDB and SuperDuperDB","permalink":"/blog/building-a-documentation-chatbot-using-fastapi-react-mongodb-and-superduperdb"},"nextItem":{"title":"Introducing SuperDuperDB: Bringing AI to your Datastore in Python","permalink":"/blog/bringing-ai-to-your-datastore-in-python"}},"content":"In 2023 vector-databases are hugely popular; they provide the opportunity for developers to connect LLMs, such as OpenAI\u2019s GPT models, with their data, as well as providing the key to deploying \u201csearch-by-meaning\u201d on troves of documents.\\n\\nHowever: a key unanswered question, for which there is no widely accepted answer, is:\\n\\nHow do the vectors in my vector-database get there in the first place?\\n\\n\x3c!--truncate--\x3e\\n\\nVectors (arrays of numbers used in vector-search) differ from the content of most databases, since they need to be calculated on the basis of other data.\\n\\nCurrently there are 2 approaches:\\n\\n** Possibility 1: models live together with the database to create vectors at insertion time **\\n\\nWhen data is inserted into a vector-database, the database may be configured to \u201ccalculate\u201d or \u201ccompute\u201d vectors on the basis of this data (generally text). This means that the database environment also has access to some compute and AI models, or access to APIs such as OpenAI, in order to obtain vectors.\\n\\nExamples of this approach are:\\n\\n- Weaviate (support for a range of pre-defined models, some support for bringing own model)\\n- Chroma (support for OpenAI and sentence_transformers)\\n\\nPros:\\n\\n- The data and compute live together, so developers don\u2019t need to create an additional app in order to use the vector-database\\n\\nCons:\\n\\n- Developers are limited by the models available in the vector-database and the compute resources on the vector-database server\\n- Primary data needs to be stored in the vector-database; classic-database + external vector-search isn\u2019t an expected pattern.\\n- Training of models is generally not supported.\\n\\n** Possibility 2: the vector-database requires developers to provide their own vectors with their own models **\\n\\nIn this approach, developers are required to build an app which deploys model computations over data which is extracted from the datastore.\\n\\nExamples of this approach are:\\n\\n- LanceDB\\n- Milvus\\n\\nPros:\\n\\n- By developing a vector-computation app, the user can use the full flexibility of the open-source landscape for computing these vectors, and can architect compute resources independently from vector-database resources\\n- The vector-database \u201cspecializes\u201d in vector-search and storage of vectors, giving better performance guarantees as a result\\n\\nCons:\\n\\n- Huge overhead of building one\u2019s own computation app.\\n- All communication between app, vector-database and datastore (if using external datastore) must be managed by the developer\\n\\n### Enter SuperDuperDB\\n\\nSuperDuperDB is a middle path to scalability, flexiblity and ease-of-use in vector-search and far beyond.\\n\\n- SuperDuperDB is an open-source Python environment which wraps databases and AI models with additional functionality to make them \u201cready\u201d to interface with one-another; developers are able to host their data in a \u201cclassical\u201d database, but use this database as a vector-database.\\n- SuperDuperDB allows users to integrate any model from the Python open source ecosystem (torch, sklearn, transformers, sentence_transformers as well as OpenAI\u2019s API), with their datastore. It uses a flexible scheme, allowing new frameworks and code-bases to be integrated without requiring the developer to add additional classes or functionality.\\n- SuperDuperDB can be co-located with the database in infrastructure, but at the same time has access to its own compute, which is scalable. This makes it vertically performant and at the same time, ready to scale horizontally to accommodate larger usage.\\n- SuperDuperDB enables training directly with the datastore: developers are only required to specify a database-query to initiate training on scalable compute.\\n- Developers are not required to program tricky boilerplate code or architectures for computing vector outputs and storing these back in the database. This is all supported natively by SuperDuperDB.\\n- SuperDuperDB supports data of arbitrary type: with its flexible serialization model, SuperDuperDB can handle text, images, tensors, audio and beyond.\\n- SuperDuperDB\u2019s scope goes far beyond vector-search; it supports models with arbitrary outputs: classification, generative AI, fore-casting and much more are all within scope and supported. This allows users to build interdependent models, where base models feed their outputs into downstream models; this enables transfer learning, and quality assurance via classification on generated outputs, to name but 2 key outcomes of SuperDuperDB\u2019s integration model.\\n\\n### Minimal boilerplate to connect to SuperDuperDB\\n\\nConnecting to MongoDB with SuperDuperDB is super easy. The connection may be used to insert documents, although insertion/ ingestion can also proceed via other sources/ client libraries.\\n\\n```python\\nimport json\\nimport pymongo\\n\\nfrom superduperdb import superduper\\nfrom superduperdb.container.document import Document\\nfrom superduperdb.db.mongodb.query import Collection\\n\\ndb = pymongo.MongoClient().documents\\ndb = superduper(db)\\n\\ncollection = Collection(\'wikipedia\')\\n\\nwith open(\'wikipedia.json\') as f:\\n    data = json.load(f)\\n\\ndb.execute(\\n    collection.insert_many([Document(r) for r in data])\\n)\\n```\\n\\n### Set up vector-search with SuperDuperDB in one command\\n\\n```python\\nfrom superduperdb.container.vector_index import VectorIndex\\nfrom superduperdb.container.listener import Listener\\nfrom superduperdb.ext.numpy.array import array\\nfrom superduperdb.ext.openai import OpenAIEmbedding\\n\\ndb.add(\\n    VectorIndex(\\n        identifier=f\'wiki-index\',\\n        indexing_listener=Listener(\\n            model=OpenAIEmbedding(model=\'text-embedding-ada-002\'),\\n            key=\'abstract\',\\n            select=collection.find(),\\n            predict_kwargs={\'max_chunk_size\': 1000},\\n        )\\n    )\\n)\\n```\\n\\nThis approach is simple enough to allow models from a vast range of libraries and sources to be implemented: open/ closed source, self-built or library based and much more.\\n\\nNow that the index has been created, queries may be dispatched in a new session to SuperDuperDB without reloading the model:\\n\\n```python\\ncur = db.execute(\\n    collection\\n        .like({\'title\': \'articles about sport\'}, n=10, vector_index=f\'wiki-index\')\\n        .find({}, {\'title\': 1})\\n)\\n\\nfor r in cur:\\n    print(r)\\n```\\n\\nThe great thing about using MongoDB or a similar battle tested database for vector-search, is that it can be easily combined with important filtering approaches. In this query, we restrict the results to a hard match involving the word \u201cAustralia\u201d:\\n\\n```python\\ncur = db.execute(\\n    collection\\n        .like({\'title\': \'articles about sport\'}, n=100, vector_index=f\'wiki-index-{model.identifier}\')\\n        .find({\'title\': {\'$regex\': \'.*Australia\'}})\\n)\\n\\nfor r in cur:\\n    print(r[\'title\'])\\n```\\n\\n### SuperDuperDB is licensed under Apache 2.0 and is a community effort!\\n\\nWe would like to encourage developers interested in the project to contribute in our discussion forums, issue boards and by making their own pull requests. We\'ll see you on\xa0GitHub!"},{"id":"bringing-ai-to-your-datastore-in-python","metadata":{"permalink":"/blog/bringing-ai-to-your-datastore-in-python","editUrl":"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/blog/2023-09-08-introducing.md","source":"@site/blog/2023-09-08-introducing.md","title":"Introducing SuperDuperDB: Bringing AI to your Datastore in Python","description":"It\'s 2023, and unless you\'ve been in cryo-sleep since mid-2022, you\'ll have heard about the explosion of powerful AI and LLMs. Leveraging these LLMs, developers are now able to connect existing data with AI using vector search.","date":"2023-09-08T00:00:00.000Z","formattedDate":"September 8, 2023","tags":[{"label":"AI","permalink":"/blog/tags/ai"},{"label":"data-store","permalink":"/blog/tags/data-store"},{"label":"Python","permalink":"/blog/tags/python"}],"readingTime":3.82,"hasTruncateMarker":true,"authors":[{"name":"Duncan Blythe","title":"Creator of SuperDuperDB","url":"https://github.com/blythed","imageURL":"https://avatars.githubusercontent.com/u/15139331?v=4","key":"blythed"}],"frontMatter":{"slug":"bringing-ai-to-your-datastore-in-python","title":"Introducing SuperDuperDB: Bringing AI to your Datastore in Python","authors":["blythed"],"tags":["AI","data-store","Python"]},"prevItem":{"title":"Introduce vector search to your favourite database with SuperDuperDB","permalink":"/blog/introduce-vector-search-to-your-favourite-database-with-superduperdb"}},"content":"It\'s 2023, and unless you\'ve been in cryo-sleep since mid-2022, you\'ll have heard about the explosion of powerful AI and LLMs. Leveraging these LLMs, developers are now able to connect existing data with AI using vector search.\\n\\n\x3c!--truncate--\x3e\\n\\nAI models can allow users to extract valuable information out of their existing data stores (databases, data lakes, data warehouses), in a host of different ways: semantic search, retrieval augmented generation, visual classification, conditional image generation, recommendation systems, anomaly and fraud detection, image search, multimodal search, time-series analysis and much, much more.\\n\\nIn the AI-powered future, a full-featured data application will have five parts:\\n\\n- Backend\\n- Frontend\\n- Data store\\n- AI models\\n- Vector search\\n\\nThere are many different solutions for AI model computations and vector search separately, but some deep pitfalls appear when you put both together.\\n\\n### A model has no natural way to talk to a datastore\\n\\nThe most flexible frameworks for building AI models, like PyTorch, don\u2019t understand text or images out-of-the-box without writing custom code.\\n\\nModel libraries containing precompiled and trained AI models often support text but not computer vision or audio classification. Worse, you can\u2019t just pass a data store connection to such a library, and tell the library to use the connection to train the model: you have to write more custom code.\\n\\nThere is no general Python abstraction bringing self-built models like PyTorch, models imported from libraries like Scikit-Learn, and models hosted behind APIs like OpenAI, together under one roof with existing data stores: even more custom code.\\n\\nThe result is that developers still must perform considerable coding to connect AI models with their data stores.\\n\\n### Vector databases mean data fragmentation and difficulties with data-lineage\\n\\nA vector database is powerful but leaves architects and developers with questions:\\n\\n- Should all data now live in the vector database?\\n- Should the vector database only contain vectors?\\n\\nIdeally, data would stay in the primary datastore, but many datastores do not have a vector search implementation.\\n\\nOn the other hand, it is problematic to make the vector database the primary datastore for an application, as most vector databases lack the specialized features of classical relational databases or document stores, and offer few consistency or performance guarantees.\\n\\n### Connect models and datastores with SuperDuperDB\\n\\n- SuperDuperDB is a framework which wraps data stores and AI models, with minimal boilerplate code.\\n- Arbitrary models from open-source are applied directly to datastore queries and the outputs can be saved right back in the datastore, keeping everything in one location. Computations scale using the rich and diverse tools in the PyData ecosystem.\\n- SuperDuperDB allows complex data types as inputs to AI models, such as images, audio and beyond.\\n- SuperDuperDB can instantly make a classical database or data store vector-searchable. SuperDuperDB wraps well-known query APIs with additional commands for vector search, and takes care of organizing the results into a consistent result set for databases without a native vector-search implementation.\\n- SuperDuperDB can use a query to train models directly on the data store. The fully open-source SuperDuperDB environment provides a scalable and serverless developer experience for model training.\\n\\n### Get started easily, and go far\\n\\nSuperDuperDB is designed to make it as simple as possible to get started. For example, to connect with SuperDuperDB using MongoDB and Python, just type:\\n\\n```python\\nfrom superduperdb import superduper\\nfrom pymongo import MongoClient\\n\\ndb = MongoClient().my_database\\ndb = superduper(db)\\n```\\n\\nAt the same time, SuperDuperDB is ready for the full range of modern AI tools. It scales horizontally and includes a flexible approach allowing arbitrary AI frameworks to be used together, including torch, transformers, sklearn and openai.\\n\\n- GitHub: https://github.com/SuperDuperDB/superduperdb\\n- Docs: https://docs.superduperdb.com\\n- Blog: https://www.superduperdb.com/blog\\n\\n### The road ahead\\n\\nIn the weeks and months to come we\u2019ll be:\\n\\n- Adding SQL support (already close to completion)\\n- Building bridges to more AI frameworks, libraries, models and API services\\n- Creating tools to manage a SuperDuperDB deployment in production\\n\\n### Contributors are welcome!\\n\\nSuperDuperDB comes with the Apache 2.0 license. We would like to encourage developers interested in open-source development to contribute in our discussion forums, issue boards and by making their own pull requests. We\'ll see you on GitHub!\\n\\n### Become a Design Partner!\\n\\nWe are in the process of selecting a few visionary organizations to become our design partners. The aim is to identify and implement AI applications that could bring transformative benefits to their product offerings. We\'re offering this at absolutely zero cost. If you would like to learn more about this opportunity please reach out to us via email: hello@superduperdb.com."}]}')}}]);