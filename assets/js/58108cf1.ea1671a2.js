"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[325],{93753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(85893),o=t(11151);const s={sidebar_position:15},d="Working with external data sources",a={id:"docs/walkthrough/referring_to_data_from_diverse_sources",title:"Working with external data sources",description:"Using the MongoDB query API, superduperdb supports data added from external data-sources.",source:"@site/content/docs/walkthrough/15_referring_to_data_from_diverse_sources.md",sourceDirName:"docs/walkthrough",slug:"/docs/walkthrough/referring_to_data_from_diverse_sources",permalink:"/docs/docs/walkthrough/referring_to_data_from_diverse_sources",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/walkthrough/15_referring_to_data_from_diverse_sources.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Encoding images, audio, video and other special data",permalink:"/docs/docs/walkthrough/encoding_special_data_types"},next:{title:"Working with and inserting large pieces of data",permalink:"/docs/docs/walkthrough/using_hybrid_storage_to_handle_large_data_blobs"}},i={},c=[];function l(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"working-with-external-data-sources",children:"Working with external data sources"}),"\n",(0,r.jsxs)(n.p,{children:["Using the MongoDB query API, ",(0,r.jsx)(n.code,{children:"superduperdb"})," supports data added from external data-sources.\nThe trick is to pass the ",(0,r.jsx)(n.code,{children:"uri"})," parameter to an encoder, instead of the raw-data:"]}),"\n",(0,r.jsxs)(n.p,{children:["When doing this, ",(0,r.jsx)(n.code,{children:"superduperdb"})," supports:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"web URLs"}),"\n",(0,r.jsxs)(n.li,{children:["URIs of objects in ",(0,r.jsx)(n.code,{children:"s3"})," buckets"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example where we add a ",(0,r.jsx)(n.code,{children:".pdf"})," file directly from a location\non the public internet."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import io\nfrom PyPDF2 import PdfReader\nfrom superduperdb.backends.mongodb import Collection\n\ncollection = Collection('pdf-files')\n\n\ndef load_pdf(bytes):\n    text = []\n    for page in PdfReader(io.BytesIO(bytes)).pages:\n        text.append(page.extract_text())\n    return '\\n----NEW-PAGE----\\n'.join(text)\n\n\npdf_enc = Encoder('my-pdf-encoder', decoder=load_pdf)\n\nPDF_URI = (\n    'https://papers.nips.cc/paper_files/paper/2012/file/'\n    'c399862d3b9d6b76c8436e924a68c45b-Paper.pdf'\n)\n\ndb.execute(\n    collection.insert_one(Document({'txt': pdf_enc(uri=PDF_URI)}))\n)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now when the data is loaded from the database, it is loaded as text:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:">>> r = db.execute(collection.find_one())\n>>> print(r['txt'])\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>d});var r=t(67294);const o={},s=r.createContext(o);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);