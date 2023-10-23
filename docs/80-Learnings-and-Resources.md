# Recap: What we've learned

We hope that in the last hour, you've learned what natural language generative AI models are and how they work, how to access them in Azure OpenAI Service or OpenAI, and started on the path to building applications with them. Here are some key points to remember:

* Foundation AI models can generate humanlike text, images, and code
* Foundational AI models are stateless: they do not learn, and are constrained by their training data which is frozen at a fixed point in time
* Azure OpenAI Service is a managed service that provides access to state-of-the-art natural language generative AI models, including GPT-3.5 and GPT-4 from OpenAI with the security and enterprise promise of Azure.
* Azure OpenAI Service provides a simple REST API for accessing these models
* Prompt engineering is a technique for "grounding" generative AI models, and can be used to influence the style of their output, provide factual information, and constrain their behavior.

## Additional Resources

Here are a few resources to help you learn more about Azure OpenAI Service:

* Microsoft Learn module: [Intro to Azure OpenAI Service](https://learn.microsoft.com/en-us/training/modules/explore-azure-openai/)
* [Azure OpenAI Service documentation](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/)
* [Azure OpenAI Service pricing](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service/#pricing)
* [Azure AI Hub](https://github.com/Azure-Samples/azure-ai), a curated collection with examples and applications of Azure OpenAI Serviice
* The [Transparency Note for Azure OpenAI Service](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/transparency-note) provides details on the capabilities, use cases and limitations of Azure OpenAI models. 

## Further reading

We didn't cover these topics in this short session, but here are some related topics of interest:

* Azure OpenAI Service has a new feature (in preview) that allows you to provide your own files as grounding for the model, and then ask questions about your data. Learn more at: [Azure OpenAI on your data](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/use-your-data).

* Embeddings are a useful feature for grouping similar texts or documents together. See [Tutorial: Explore Azure OpenAI Service embeddings and document search](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/tutorials/embeddings?tabs=command-line) to learn more.

* There are models that operate on data other than text, too. [Whisper](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/whisper-overview) works with speech data. [Dall-E](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#dall-e-preview) (currently in preview) works with image data. And as a "multi-modal" model, you'll soon be able to use [GPT-4](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#gpt-4) with text, audio, and image data.

## Next Steps

That's it for this module! But if you still have some time to spare, and have access to Bing Chat, we've provided some things to try in the next section.
