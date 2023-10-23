# Using the API

Note, this section assumes familiarity with developer tools including the Azure Cloud Shell, shell scripts, and environment variables. If you are not familiar with these tools, you may want to skip ahead to the next section.

The Completions Playground and the Chat Playground in the Azure OpenAI Studio are handy tools for experimenting with the OpenAI natural language models. To add the power of these models to your applications, however, you will use the Azure OpenAI Service API.

> OpenAI also provides an API for its models. The process and API format is very similar to that of Azure OpenAI Service, but we won't cover the differences in this section.

## The Completion and Conversation APIs

The Azure OpenAI Service API provides two APIs: the Completions API and the Conversation API. The Completions API takes a single prompt as input and is used to generate text completions. The Conversation API takes a conversation history as input and generates the next AI response to the conversation. The Conversation API is particularly suitable for chatbot applications but can be used for other applications as well.

You can find a more complete list at [aka.ms/oai/models](https://aka.ms/oai/models).

| Model | Model ID | API Type |
| ----| --------------- | --------------- |
| GPT-3.5 Instruct | `gpt-35-turbo-instruct` | Completions |
| GPT-3.5 Turbo | `gpt-35-turbo` | Conversation |
| GPT-4 | `gpt-4` | Conversation |

In this workshop, we have been using GPT-3.5 Instruct and GPT-3.5 Turbo. GPT-4 is also available in Azure OpenAI Service and OpenAI.

### Finding your API key

Regardless of which API you use, you will need your unique API key to successfully complete any call. You can find your API key in the [Azure Portal](https://portal.azure.com) as follows:

1. Navigate to your `openai-lab-build` resource
2. Click "Keys and Endpoint" in the left-hand menu

You can also click the "View Code" button in the playground access the Key there. (This is same as Key 1 from the Azure Portal.)

Copy the Key 1 value and keep it handy (say, in a Notepad window). You'll be needing it soon.

### The Completions API with GPT-3.5

Return to the Completions Playground in the Azure OpenAI Studio.

### Create a new prompt

1. In the "User Message" box in the right pane, enter the following text: "`A long and unusual name for a cat: `" (including the space after the colon). Do **not** click generate.
2. Select `View code`, and select `curl` from the dropdown
3. Copy the curl command to the clipboard, and open the text editor of your choice, and paste the curl command into the editor window.
4. Update the curl command with your API key. The command should look something like this:

```
curl https://openai-instruct.openai.azure.com/openai/deployments/gpt-35-turbo-instruct/completions?api-version=2023-09-15-preview \
  -H "Content-Type: application/json" \
  -H "api-key: 09c999b9999c99cda999de9999b9ca9d" \
  -d '{
  "prompt": "A long and unusual name for a cat: `",
  "max_tokens": 100,
  "temperature": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0.5,
  "best_of": 1,
  "stop": null
}'
```
### Run the CURL command

1. Open the [Azure Cloud Shell (https://shell.azure.com/)](https://shell.azure.com/), by clicking the ">" icon in the top menu bar of the Azure Portal.
2. If you see "Powershell" in the Cloud Shell menubar, switch to `Bash` using the dropdown menu.
3. Paste the updated curl command that contains your API key into the shell, and press `Enter`. (The easiest way to paste into the Cloud Shell window is by right-clicking the mouse in the window and selecting Paste from the context menu.)

> You paste the curl command into any bash terminal, too.

The curl command will return a JSON object containing the completion, and  will look similar to this:

```json
{"id":"cmpl-8DIoBARcuYBJUs2lD1mDUPpDmLj61","object":"text_completion","created":1698181255,"model":"gpt-35-turbo-instruct","prompt_filter_results":[{"prompt_index":0,"content_filter_results":{"hate":{"filtered":false,"severity":"safe"},"self_harm":{"filtered":false,"severity":"safe"},"sexual":{"filtered":false,"severity":"safe"},"violence":{"filtered":false,"severity":"safe"}}}],"choices":[{"text":"\n\n\"Sir Reginald Fluffington III, Esquire of Whiskerhaven\"","index":0,"finish_reason":"stop","logprobs":null,"content_filter_results":{"hate":{"filtered":false,"severity":"safe"},"self_harm":{"filtered":false,"severity":"safe"},"sexual":{"filtered":false,"severity":"safe"},"violence":{"filtered":false,"severity":"safe"}}}],"usage":{"completion_tokens":19,"prompt_tokens":10,"total_tokens":29}}
```

The actual completion is the first element of the `choices` tag in the array (here, "Sir Reginald Fluffington III, Esquire of Whiskerhaven" with some added whitespace). An application calling this API would likely extract and clean that element before presenting it to the user via the UI.

> Also note the fields related to `prompt_filter_results` and `content_filter_results`. The [Azure OpenAI Content Filtering](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/content-filter) system may be configured to block prompts and completions for content safety, and these fields may be used by the developer to detect that outcome.

## Which model should I use?

As a developer, there are many considerations when choosing a model, including cost, availability, performance, and capability. But as a general guide, we recommend the following:

* Start with `gpt-35-turbo`. This model is widely available, very economical, has good performance, and its "Chat" API is flexible enough to be used for a wide range of tasks beyond chat and conversation.

* For applications where text completion, information extraction, or sentiment analysis is the primary task, the simpler Completions API of `gpt-35-turbo-instruct` may be attractive. (There are older, simpler and cheaper models that may also serve these applications well.)

* If you need to generate more than 4,096 tokens, or need to support larger prompts or outputs, the `gpt-35-turbo-16k` variant of GPT-3.5 Turbo supports a context window of 16,384 tokens. 

* The most powerful model available today is `gpt-4` (supporting a token window of 8192 tokens), and its 32k variant `gpt-4-32k` which supports up to 32,768 tokens. While powerful, these models are more expensive and slower than GPT-3.5, and have more restricted availability.

## Next Steps

This section was intended to give a taste of automating prompt completions using the Azure OpenAI Service API. For more information on the API, see the [Azure OpenAI Service API Reference](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference).
