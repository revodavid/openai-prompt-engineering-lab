# Differences between OpenAI and Azure OpenAI Service

*You can skip to the next section if you plan to use Azure OpenAI Service instead of OpenAI Playground.*

If you plan to use OpenAI to complete this lab, all you will need is an OpenAI account that gives access to the OpenAI Playground at https://platform.openai.com/playground. 
 
OpenAI and Azure OpenAI Service provide exactly the same GPT models, so you should expect the interactions presented in this lab to perform similarly in either environment. However, there are some differences in the services to be aware of.

## User Interface Differences

OpenAI Playground does not have a separate Chat Playground and Completions Playground. Instead, there is a "Mode" selector in the right pane of the OpenAI Playground that controls the experience. In this lab, when you see references to:

* Completions Playground: use the OpenAI Playground, set the Mode selection to "Complete (Legacy)", and set the Model selection to `gpt-35-turbo-instruct`;
* Chat Playground: use the OpenAI Playground, set the Mode selection to "Chat", and set the Model selection to `gpt-35-turbo`.

There are a few other minor differences in the user interface:

* The equivalent to the "Generate" button the Azure OpenAI Completions playground is the "Submit" button in OpenAI Playground. 
* The "Undo" and "Regenerate" buttons in the Azure OpenAI Completions playground are symbols in the OpenAI Playground.

## Other differences between OpenAI and Azure OpenAI Service

There are a few other differences to be aware of:

* Before you can use Azure OpenAI Service, you must first deploy a resource in your subscription and in a specific region as described in the previous section. This resource is for your exclusive use. With OpenAI no prior setup is required, and everyone shares the same resource.

* Azure OpenAI Service does not provide a consumer AI chat experience like OpenAI's ChatGPT. (Microsoft provides a similar experience with [Bing Chat](https://www.bing.com/chat).)

* Your use of Azure OpenAI Service is governed by its [data, privacy and security policies](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy). In particular, your prompts and completions are not available to other users of Azure OpenAI Service or to OpenAI, and are not used to improve any Microsoft or third-party service. With OpenAI, use of your data is governed by its [Enterprise privacy at OpenAI](https://openai.com/enterprise-privacy) policy.

* Azure OpenAI Service provides additional enterprise capabilities, including [abuse monitoring](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/abuse-monitoring) and [content filtering](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/content-filter).

* For developers integrating GPT models into applications, the Azure OpenAI Service API has a slightly different authentication mechanism compared to the OpenAI API. 