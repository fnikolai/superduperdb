"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7916],{7571:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var i=s(4848),r=s(8453);const t={sidebar_position:2},l="Installation",d={id:"docs/get_started/installation",title:"Installation",description:"There are two ways to get started:",source:"@site/content/docs/get_started/installation.md",sourceDirName:"docs/get_started",slug:"/docs/get_started/installation",permalink:"/docs/docs/get_started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/get_started/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"First steps",permalink:"/docs/docs/get_started/first_steps"},next:{title:"Configure",permalink:"/docs/docs/get_started/configuration"}},o={},a=[{value:"Pip",id:"pip",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Operating System",id:"operating-system",level:4},{value:"Python Ecosystem",id:"python-ecosystem",level:4},{value:"Installation",id:"installation-1",level:3},{value:"Docker Image",id:"docker-image",level:2},{value:"Using Pre-built Images",id:"using-pre-built-images",level:4},{value:"Building the image yourself",id:"building-the-image-yourself",level:4},{value:"Developer&#39;s docker image and environment",id:"developers-docker-image-and-environment",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to get started:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.a,{href:"#pip",children:["A local ",(0,i.jsx)(n.code,{children:"pip"})," installation on your system"]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.a,{href:"#docker-image",children:["Running the ",(0,i.jsx)(n.code,{children:"superduperdb"})," docker image"]}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"pip",children:"Pip"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"superduperdb"})," is available on ",(0,i.jsx)(n.a,{href:"https://pypi.org/project/superduperdb/",children:"PyPi.org"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before you begin the installation process, please make sure you have the following prerequisites in place:"}),"\n",(0,i.jsx)(n.h4,{id:"operating-system",children:"Operating System"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"superduperdb"})," is compatible with several Linux distributions, including:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MacOS"}),"\n",(0,i.jsx)(n.li,{children:"Ubuntu"}),"\n",(0,i.jsx)(n.li,{children:"Debian"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"python-ecosystem",children:"Python Ecosystem"}),"\n",(0,i.jsx)(n.p,{children:"If you plan to install SuperDuperDB from source, you'll need the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"python3.10"})," or ",(0,i.jsx)(n.code,{children:"python3.11"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pip"})," 22.0.4 or later"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Your experience with ",(0,i.jsx)(n.code,{children:"superduperdb"})," on Linux may vary depending on your system and compute requirements."]}),"\n",(0,i.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["To install ",(0,i.jsx)(n.code,{children:"superduperdb"})," on your system using ",(0,i.jsx)(n.code,{children:"pip"}),", open your terminal and run the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install superduperdb\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This command will install ",(0,i.jsx)(n.code,{children:"superduperdb"})," along with a minimal set of common dependencies required for running the framework.\nIf you would like to use the ",(0,i.jsx)(n.code,{children:"superduperdb.ext"})," subpackages (e.g. ",(0,i.jsx)(n.code,{children:"superduperdb.ext.openai"}),"), you may build a requirements file\nwith this command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 -m superduperdb requirements <list-of-extensions> > requirements.txt\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For example, this builds a ",(0,i.jsx)(n.code,{children:"requirements.txt"})," file for ",(0,i.jsx)(n.code,{children:"openai"})," and ",(0,i.jsx)(n.code,{children:"torch"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 -m superduperdb requirements openai torch > requirements.txt\n"})}),"\n",(0,i.jsx)(n.h2,{id:"docker-image",children:"Docker Image"}),"\n",(0,i.jsx)(n.h4,{id:"using-pre-built-images",children:"Using Pre-built Images"}),"\n",(0,i.jsx)(n.p,{children:"If you prefer using Docker, you can pull a pre-built Docker image from Docker Hub and run it with Docker version 19.03 or later:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -p 8888:8888 superduperdb/superduperdb:latest\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This command installs the base ",(0,i.jsx)(n.code,{children:"superduperdb"})," image. If you want to run the ready-to-use examples, you'll need to download the required  dependencies at runtime."]}),"\n",(0,i.jsx)(n.h4,{id:"building-the-image-yourself",children:"Building the image yourself"}),"\n",(0,i.jsx)(n.p,{children:"For more control, you can build the Docker images yourself from the latest GitHub version as follows:"}),"\n",(0,i.jsx)(n.p,{children:"Clone the code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone --branch main --single-branch --depth 1 https://github.com/SuperDuperDB/superduperdb.git\nmake build_superduperdb\n"})}),"\n",(0,i.jsx)(n.h4,{id:"developers-docker-image-and-environment",children:"Developer's docker image and environment"}),"\n",(0,i.jsx)(n.p,{children:"If you wish to use your local copy of code with a docker build, execute the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make testenv_image\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You will see something like these lines in ",(0,i.jsx)(n.code,{children:"docker images"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"REPOSITORY                    TAG             IMAGE ID       CREATED        SIZE\nsuperduperdb/sandbox          latest          88ddab334d17   5 days ago     2.69GB\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(6540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);