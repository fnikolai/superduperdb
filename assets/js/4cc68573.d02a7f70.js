"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4488],{5120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(4848),a=t(8453),s=t(9489),l=t(7227);const i={sidebar_label:"Build and train classifier"},o="Build and train classifier",u={id:"docs/reusable_snippets/build_and_train_classifier",title:"build_and_train_classifier",description:"The following command adds the model to the system and trains the model in one command.",source:"@site/content/docs/reusable_snippets/build_and_train_classifier.md",sourceDirName:"docs/reusable_snippets",slug:"/docs/reusable_snippets/build_and_train_classifier",permalink:"/docs/docs/reusable_snippets/build_and_train_classifier",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/reusable_snippets/build_and_train_classifier.md",tags:[],version:"current",frontMatter:{sidebar_label:"Build and train classifier"},sidebar:"tutorialSidebar",previous:{title:"Connecting listeners",permalink:"/docs/docs/reusable_snippets/connecting_listeners"},next:{title:"Data integrations",permalink:"/docs/docs/data_integrations/intro"}},c={},d=[];function m(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"build-and-train-classifier",children:"Build and train classifier"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"Scikit-Learn",label:"Scikit-Learn",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from sklearn.linear_model import LogisticRegression\nfrom superduperdb.ext.sklearn.model import SklearnTrainer, Estimator\n\n# Create a Logistic Regression model\nmodel = LogisticRegression()\nmodel = Estimator(\n    object=model,\n    identifier='my-model',\n    trainer=SklearnTrainer(\n        key=(input_key, 'y'),\n        select=Collection('clt').find(),\n    )\n)        \n"})})}),(0,r.jsx)(l.A,{value:"Torch",label:"Torch",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from torch import nn\nfrom superduperdb.ext.torch.model import TorchModel\nfrom superduperdb.ext.torch.training import TorchTrainer\n\n\nclass SimpleModel(nn.Module):\n    def __init__(self, input_size=16, hidden_size=32, num_classes=3):\n        super(SimpleModel, self).__init__()\n        self.fc1 = nn.Linear(input_size, hidden_size)\n        self.relu = nn.ReLU()\n        self.fc2 = nn.Linear(hidden_size, num_classes)\n\n    def forward(self, x):\n        out = self.fc1(x)\n        out = self.relu(out)\n        out = self.fc2(out)\n        return out\n\n# Loss function\ndef my_loss(X, y):\n    return torch.nn.functional.binary_cross_entropy_with_logits(\n        X[:, 0], y.type(torch.float)\n    )\n\n\n# Create a Logistic Regression model\nmodel = SimpleModel()\nmodel = TorchModel(\n    identifier='my-model',\n    object=model,         \n    trainer=TorchTrainer(\n        key=(input_key, 'y'),\n        identifier='my_trainer',\n        objective=my_loss,\n        loader_kwargs={'batch_size': 10},\n        max_iterations=100,\n        validation_interval=10,\n        select=Collection('clt').find(),\n    ),\n)        \n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"The following command adds the model to the system and trains the model in one command."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"db.apply(model)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(870);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(6540),a=t(870),s=t(4245),l=t(6347),i=t(6494),o=t(2814),u=t(5167),c=t(1269);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:t,groupId:a}),[h,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),_=(()=>{const e=u??h;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{_&&o(_)}),[_]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(1062);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",_.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",_.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(y,{...e,...n})]})}function k(e){const n=(0,b.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(6540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);