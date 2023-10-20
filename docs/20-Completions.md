# Understanding Completions

In this section, you will experiment with creating completions with OpenAI natural language models. We will use the GPT-3.5 model `gpt-35-turbo-instruct` throughout this section.

## What is a completion?

A natural language model like OpenAI's GPT model has a simple purpose: Given a fragment of text (the "prompt"), generate additional text that is likely to follow the prompt. This is called a "completion".

The definition of "likely" is complex, but for now, you can think of it as "text similar to text in the training data that often follows text like the prompt", or simply "fancy autocomplete". Models like GPT-3.5 are trained on very large volumes of text data collected from various sources, and this data influences the model's predictions.

You can learn more details about how OpenAI's models work at Microsoft Learn: [Understand OpenAI's natural language capabilities](https://learn.microsoft.com/training/modules/explore-azure-openai/5-understand-openai-natural-language).

## Launching the completions playground

If it's not open already, navigate to your Azure OpenAI Studio homepage. 
In the left navigation of the Azure OpenAI Studio home page, click "Completions" under the "Playground" heading.

In the drop-downs under "Completions playground" make sure the following options are selected:

1. Deployments: `gpt-35-turbo-instruct`
2. Examples: `Load an example` (do not change this option yet)

> If you're using OpenAI, launch the OpenAI Playground and set the "Mode" dropdown to "Complete (legacy)". See [Differences between OpenAI and Azure OpenAI Service](08-OpenAI-Setup.md) for details.

Make sure the Temperature parameter in the right pane to is set to 1. (We'll explain what this means later.)

## Basic Prompting

In the prompt box (in Azure OpenAI Service, where you see the text "Start typing here"), you can enter any text you like, and then use one of your deployed models to generate a completion. Let's try a few examples.

Enter the following in the prompt box: 

    I climbed the apple tree and picked an
    
Now click the "Generate" button below the prompt box.

> In OpenAI Playground, the button is labelled "Submit".

The generated completion will appear in green in the prompt box, following the prompt you entered. The prompt box probably now contains: "I climbed the apple tree and picked an apple" (and likely also some additional text below).

## Useful prompts

Clear the contents of the prompt box. (Control-A and then Delete should do the trick, or you can reload the page in your browser.) Repeat this process every time you want to enter a new prompt.

By default, the Completions Playground limits the length of completions to 100 tokens (about 75 words). To allow for longer completions, change the "Max tokens" option in the right column from 100 to 1000.

Now, try a few other prompts and observe the response. Here are some examples to try, but get creative with your own prompts and see what happens! 

With each prompt, try using the Regenerate button a couple of times. In which cases do the responses vary, and in which cases is the response usually the same?

```
What is the capital of Australia?
```

```
A recipe for banana bread, and an itemized shopping list of the ingredients.
```

```
What were the 10 top movies of 2001? Respond in the form of a table listing the movie name, the box office earnings, and the studio.
```

```
Write a Python function to calculate the nth prime number.
```

## Generating novel content

Even though completions are generated based on frequencies of similar content in the training data, generative AI models are still capable of generating novel content that has never existed before.

Try a prompt like this:

```
Write a limerick about the Python programming language
```

How was the limerick? If you didn't like it, you can always click the "Regenerate" button to generate a new one.

Now, set the Temperature parameter in the top-left to zero. Click Regenerate. Click Regenerate again. What do you observe?

The Temperature parameter controls how "creative" the model is allowed to be. At low values of "Temperature", the model is very likely to respond with the completion with the highest weight, limiting the variability in the responses. At higher values of Temperature, low-weighted completions become more likely to be generated, allowing for more creative (but less precise) responses.

Here is another prompt to try with different Temperature values:

```
What is a unique and long name for a cat?
```

**Make sure the Temperature parameter is reset to 1 before you continue.**

## Less-useful prompts

Foundation natural language AI models including `gpt-35-turbo` and `gpt-35-turbo-instruct` have a number of limitations:
* They are limited by their training data, which was frozen at a fixed point in time in the past. 
* They generate text that resembles human language, but are not capable of reasoning or cognition. 
* They have no memory of prior prompts, and no capability to learn or change their behavior.

Here are some example prompts that demonstrate these weaknesses:

```
When did Queen Elizabeth II die?
```

In this case, the model is limited by training data, which is current only up to September 2021.

```
What is the square root of 98765?
```

The model will generate an answer to math questions, but there's no guarantee it will be correct. The correct answer (to 3 decimal places) is `314.269`. Try clicking Regenerate and see if you get the same answer. (If you do get the correct response to a math question from a foundation GPT model, it's only because the question and answer are well represented in the training data.)

But you could ask the model to write Python code to calculate the square root of 98765, and it would probably do a good job. (Try it!).

```
Write Python code to calculate the square root of 98765
```

Next, ask the model to solve a puzzle:

```
Steven is my uncle. Steven has two children, Sam and Lindsay. Sam's sole aunt is called Julie. What is my mother's name?
```

It's a simple puzzle, but the model cannot reason about the relationships between people and will not be able to solve it. (More advanced models like GPT-4 are more likely to get the answer right, but are still not guaranteed to do so.)

In the following section, we'll explore other aspects of completions.

## Completions are non-deterministic

Clear the contents of the prompt box. Enter the prompt below, then click "Generate".

```
Name a country:
```

Once again, your completion will appear in green. It might read "Germany", "Australia", or something else entirely. The completion is non-deterministic: the model is not guaranteed to generate the same completion for the same prompt every time. 

Click the "Regenerate" to try the completion again. Try a few more times. What do you observe?


## Generative AI models have no memory

Clear the contents of the prompt box again. Enter the following text, then click Generate. (Include your own name in the prompt instead if you like.)

```
Hello, my name is David.
```

The model will probably respond with a friendly greeting. Clear the prompt box and enter this prompt:

```
You can give me a nickname, if you like.
```

Is the nickname offered by the model a suitable one? Probably not, because the model retains no memory of the prior prompt where you provided your name. (We'll see how to improve this response with prompt engineering, later.)

## Generative AI models can't perform actions

Clear the contents of the prompt box. Enter the following text, then click Generate.

```
What are the top 5 movies listed at https://www.rottentomatoes.com/browse/movies_in_theaters/?
```

Although the model will respond with an answer, look closely: those aren't *actually* the top 5 movies you'd see if you [visited Rotten Tomatoes](https://www.rottentomatoes.com/browse/movies_in_theaters/).
Foundation AI models are not capable of performing actions, so this model can't actually visit the web page and read the list of movies. Instead, it generates a plausible response based on the prompt and the data available at the time it was trained. 

## Completions are not facts

Clear the contents of the prompt box. Enter the following text, then click Generate.

```
Write a two-paragraph obituary for Harold Bloomsbury, inventor of the fidget spinner and append two references.
```

There has never been a poet (nor indeed any person, according to web search) named Harold Bloomsbury. As a result, the model generates text in the form of an obituary, but not grounded in any facts. Even the requested references, while convincing-looking, are not real.
