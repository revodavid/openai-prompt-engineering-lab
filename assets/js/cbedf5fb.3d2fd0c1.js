"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[321],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(4137));const i={},r="Explore OpenAI Models",l={unversionedId:"Explore-Models",id:"Explore-Models",title:"Explore OpenAI Models",description:"Before you begin this section, navigate to your Azure OpenAI Studio homepage:",source:"@site/docs/10-Explore-Models.md",sourceDirName:".",slug:"/Explore-Models",permalink:"/openai-prompt-engineering-lab/Explore-Models",draft:!1,editUrl:"https://github.com/revodavid/openai-prompt-engineering-lab/tree/main/docs/10-Explore-Models.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Differences between OpenAI and Azure OpenAI Service",permalink:"/openai-prompt-engineering-lab/OpenAI-Setup"},next:{title:"Understanding Completions",permalink:"/openai-prompt-engineering-lab/Completions"}},p={},s=[{value:"The GPT-35 family of models",id:"the-gpt-35-family-of-models",level:2},{value:"Completions vs Chat interface",id:"completions-vs-chat-interface",level:2},{value:"Model limitations",id:"model-limitations",level:2},{value:"Which model should I use?",id:"which-model-should-i-use",level:2},{value:"Check your deployed models in Azure OpenAI Studio",id:"check-your-deployed-models-in-azure-openai-studio",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"explore-openai-models"},"Explore OpenAI Models"),(0,a.kt)("p",null,"Before you begin this section, navigate to your Azure OpenAI Studio homepage:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Azure Portal, click on the Azure OpenAI resource ",(0,a.kt)("inlineCode",{parentName:"li"},"openai-lab-build")),(0,a.kt)("li",{parentName:"ol"},'Click the "Explore" button to open the Azure OpenAI Studio')),(0,a.kt)("p",null,"Remember, you chose your own unique name to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"openai-lab-build")," above. During this workshop you will often need to return to the home page of the Azure OpenAI Studio, so refer back to this section if you need a reminder of how to get there."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you're using OpenAI, launch the OpenAI Playground. See ",(0,a.kt)("a",{parentName:"p",href:"/openai-prompt-engineering-lab/OpenAI-Setup"},"Differences between OpenAI and Azure OpenAI Service")," for details.")),(0,a.kt)("h2",{id:"the-gpt-35-family-of-models"},"The GPT-35 family of models"),(0,a.kt)("p",null,"In this lab, we will focus on the following OpenAI models:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gpt-35-turbo"),": an instance of the OpenAI GPT-3.5 chat model. This is the model most people interface with when they use the OpenAI GhatGPT service. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gpt-35-turbo-instruct"),": an instance of the OpenAI GPT-3.5 completions model. This is a very similar model, but designed for completions of text rather than conversations between a human and an AI agent.")),(0,a.kt)("p",null,"In this workshop, we will occasionally mention GPT-4, the latest model from OpenAI, but we will not deploy it. GPT-4 is more powerful than GPT-35, but it is also more expensive, and for many applications the GPT-35 models suffice."),(0,a.kt)("p",null,"OpenAI also provides some models that deal with image data as inputs or as outputs. (GPT-4 and DALL-E 3 are such models.) In this lab, we're focused only on models that solely use text as input and output."),(0,a.kt)("h2",{id:"completions-vs-chat-interface"},"Completions vs Chat interface"),(0,a.kt)("p",null,"There are two major ways that developers interact with GPT models: the ",(0,a.kt)("strong",{parentName:"p"},"completions interface")," and the ",(0,a.kt)("strong",{parentName:"p"},"chat interface"),"."),(0,a.kt)("p",null,"When using the completions interface, you provide a fragment of text (the ",(0,a.kt)("strong",{parentName:"p"},"prompt"),"), and the model provides text that completes it. For example, you might provide the prompt ",(0,a.kt)("inlineCode",{parentName:"p"},'"Once upon a time"'),", and the model might complete it with ",(0,a.kt)("inlineCode",{parentName:"p"},'" there was a princess who lived in a castle"')," -- including that leading space to make a complete sentence when you combine the prompt and response together. "),(0,a.kt)("p",null,"When using the chat interface, you don't provide a single piece of text to the model. Instead, you provide an entire sequence of conversation turns between a human and an AI agent, ending with the human's most recent prompt. The chat interface then provides the AI agent's next response. This allows for the AI response to be aware of the provided conversation history, but isn't as useful for completing text fragments."),(0,a.kt)("h2",{id:"model-limitations"},"Model limitations"),(0,a.kt)("p",null,"When using any large langauge models, you should be aware of the following details:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Training Data Cutoff. The training data used to train the model is frozen at a certain point in time. The training data cutoff for the GPT-35 models is September 2021, and we'll explore the consequences of this fact later.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Prompt Window Limit. Large language models have a maximum limit on the size of the prompt you can provide as input. The limit is measured in "tokens" (a concept we\'ll explore later in the lab) and ',(0,a.kt)("em",{parentName:"p"},"both")," the input and the generated response ",(0,a.kt)("em",{parentName:"p"},"combined")," must fit within this window. For now, know that the GPT-35 models we are using in this lab have a prompt window limit of 4,096 tokens, equivalent to about 3,000 English words."))),(0,a.kt)("h2",{id:"which-model-should-i-use"},"Which model should I use?"),(0,a.kt)("p",null,"There are many considerations when choosing a model, including cost, availability, performance, and capability. But as a general guide, we recommend the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Start with ",(0,a.kt)("inlineCode",{parentName:"p"},"gpt-35-turbo"),'. This model is widely available, very economical, has good performance, and its "Chat" interface is flexible enough to be used for a wide range of tasks beyond chat and conversation.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For applications where text completion, information extraction, or sentiment analysis is the primary task, the simpler Completions API of ",(0,a.kt)("inlineCode",{parentName:"p"},"gpt-35-turbo-instruct")," may be attractive. (There are older, simpler and cheaper models that may also serve these applications well.)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you need to generate more than 4,096 tokens, or need to support larger prompts or outputs, there is a variant of GPT-3.5 Turbo, ",(0,a.kt)("inlineCode",{parentName:"p"},"gpt-35-turbo-16k")," that supports a context window of 16,384 tokens. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The most powerful model available today is ",(0,a.kt)("inlineCode",{parentName:"p"},"gpt-4")," (supporting a token window of 8192 tokens), or the 32k variant ",(0,a.kt)("inlineCode",{parentName:"p"},"gpt-4-32k")," which supports up to 32,768 tokens. While powerful, these models are more expensive and slower than GPT-3.5, have limited availability, and you must request access to use them with Azure OpenAI Service."))),(0,a.kt)("h2",{id:"check-your-deployed-models-in-azure-openai-studio"},"Check your deployed models in Azure OpenAI Studio"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you're using OpenAI instead of Azure OpenAI Service, you don't need to pre-deploy models and can skip to the next section.")),(0,a.kt)("p",null,"Return to the Azure OpenAI Studio. (If you've closed the browser window,select your Azure OpenAI resource in the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure Portal"),', select the "Overview" tab, and click "Go to Azure OpenAI Studio".)'),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Deployments"),' in the "Management" section of the left pane. You should have two models deployed:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gpt-35-turbo-instruct"),": your instance of the OpenAI GPT-3.5 completions model"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gpt-35-turbo"),": your instance of the OpenAI GPT-3.5 chat model ")),(0,a.kt)("p",null,"You can find details about these models and other models available in Azure OpenAI Service at ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/oai/models"},"https://aka.ms/oai/models"),". There you can find information about the regions where the models are available for deployment, their training data cutoff dates, the prompt window limits, and other useful information."))}m.isMDXComponent=!0}}]);