# Explore OpenAI Models

Before you begin this section, navigate to your Azure OpenAI Studio homepage:

1. In the Azure Portal, click on the Azure OpenAI resource `openai-lab-build`
2. Click the "Explore" button to open the Azure OpenAI Studio

Remember, you chose your own unique name to replace `openai-lab-build` above. During this workshop you will often need to return to the home page of the Azure OpenAI Studio, so refer back to this section if you need a reminder of how to get there.

## Completions vs Chat models

TODO - also discuss Max Request limit.

## Your deployed models

Click on **Deployments** in the "Management" section of the left pane. You have two models deployed:

* `gpt-35-turbo-instruct`: an instance of the OpenAI GPT-3.5 completions model
* `gpt-35-turbo`: an instance of the OpenAI GPT-3.5 chat model 

In this workshop, we will occasionally mention GPT-4, the latest model from OpenAI, but we will not deploy it.

You can find details about these models and other models available in Azure OpenAI Service at [https://aka.ms/oai/models](https://aka.ms/oai/models). There you will learn that:

* The `gpt-35-turbo-instruct` model is currently available in the US East and Sweden Central regions, has a Max Request limit of 4,097 tokens, and is based on training data up to September 2021.
* The most recent (0613) version of `gpt-35-turbo` is currently available in more than 10 regions, has a Max Request limit of 4,096 tokens, and is based on training data up to September 2021.
* `gpt-4` is only available by request in certain regions, has a Max Request limit of 8,192 tokens (or 32,768 tokens for the `gpt-4-32k` variant), and is based on training data up to September 2021.

## Which model should I use?

There are many considerations when choosing a model, including cost, availability, performance, and capability. But as a general guide, we recommend the following:

* Start with `gpt-35-turbo`. This model is widely available, very economical, has good performance, and despite the fact that it is based on the "Chat" API it be used for a wide range of tasks beyond chat and conversation.

* For applications where text completion is the primary task, the simpler Completions API of `gpt-35-turbo-instruct` may be attractive.

* If you need to generate more than 4,096 tokens, or need to support larger prompts, there is a variant of GPT-3.5 Turbo, `gpt-35-turbo-16k` that supports a context window of 16,384 tokens. 

* The most powerful model available today is `gpt-4` (supporting a token window of 8192 tokens), or the 32k variant `gpt-4-32k` which supports up to 31,278 tokens. While powerful, these models are more expensive and slower than GPT-3.5, have limited availability, and you must request access to use them with Azure OpenAI Service.
