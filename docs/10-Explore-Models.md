# Explore OpenAI Models

In this section, we'll take a high-level view of the models available from OpenAI.

## The GPT-35 family of models

In this lab, we will focus on the following OpenAI models:

* `gpt-35-turbo`: an instance of the OpenAI GPT-3.5 chat model. This is the model most people interface with when they use the OpenAI GhatGPT service. 
* `gpt-35-turbo-instruct`: an instance of the OpenAI GPT-3.5 completions model. This is a very similar model, but designed for completions of text rather than conversations between a human and an AI agent.

In this workshop, we will occasionally mention GPT-4, the latest model from OpenAI, but we will not deploy it. GPT-4 is more powerful than GPT-35, but it is also more expensive, and for many applications the GPT-35 models suffice.

OpenAI also provides some models that deal with image data as inputs or as outputs. (GPT-4 and DALL-E 3 are such models.) In this lab, we're focused only on models that solely use text as input and output.

## Completions vs Chat interface

There are two major ways that developers interact with GPT models: the **completions interface** and the **chat interface**.

When using the completions interface, you provide a fragment of text (the **prompt**), and the model provides text that completes it. For example, you might provide the prompt `"Once upon a time"`, and the model might complete it with `" there was a princess who lived in a castle"` -- including that leading space to make a complete sentence when you combine the prompt and response together. 

When using the chat interface, you don't provide a single piece of text to the model. Instead, you provide an entire sequence of conversation turns between a human and an AI agent, ending with the human's most recent prompt. The chat interface then provides the AI agent's next response. This allows for the AI response to be aware of the provided conversation history, but isn't as useful for completing text fragments.

## Model limitations

When using any large langauge models, you should be aware of the following details:

* Training Data Cutoff. The training data used to train the model is frozen at a certain point in time. The training data cutoff for the GPT-35 models is September 2021, and we'll explore the consequences of this fact later.

* Prompt Window Limit. Large language models have a maximum limit on the size of the prompt you can provide as input. The limit is measured in "tokens" (a concept we'll explore later in the lab) and *both* the input and the generated response *combined* must fit within this window. For now, know that the GPT-35 models we are using in this lab have a prompt window limit of 4,096 tokens, equivalent to about 3,000 English words.

## Check your deployed models in Azure OpenAI Studio

> If you're using OpenAI instead of Azure OpenAI Service, you don't need to pre-deploy models and can skip to the next section.

If it's not open already, navigate to your Azure OpenAI Studio homepage:

1. In the [Azure Portal](https://portal.azure.com), click on the Azure OpenAI resource `openai-lab-build` and select the Overview tab.
2. Click the "Go To Azure OpenAI Studio" link to open the Azure OpenAI Studio.

Remember, you chose your own unique name to replace `openai-lab-build` above. During this workshop you will often need to return to the home page of the Azure OpenAI Studio, so refer back to this section if you need a reminder of how to get there.

Click on **Deployments** in the "Management" section of the left pane. You should have two models deployed:

* `gpt-35-turbo-instruct`: your instance of the OpenAI GPT-3.5 completions model
* `gpt-35-turbo`: your instance of the OpenAI GPT-3.5 chat model 

You can find details about these models and other models available in Azure OpenAI Service at [https://aka.ms/oai/models](https://aka.ms/oai/models). There you can find information about the regions where the models are available for deployment, their training data cutoff dates, the prompt window limits, and other useful information.
