# Using Generative AI

Most people are familiar with natural language generative AI from applications like ChatGPT, but you can use these models for much more than chatbots. In this section, we'll explore some other useful applications of these models.

Return to the Completions playground. We will use `gpt-35-turbo-instruct` with prompts for various kinds of applications and use cases. 

Before you begin, ensure the following settings are configured:
* Temperature: 0.7
* Max Tokens: 1000

## Translation: Human languages

Enter the following prompt:

```
Translate the following to French and Spanish. 

1. On a scale of 1 to 10, how satisfied are you with your in-store experience today?
2. How likely are you to recommend our product to others?
```

Click **Generate**. The model translates the given text into French and Spanish. Modify the prompt to some other examples of text and languages.

Natural language models are trained on a subset of data from the internet, so they can learn languages other than English and translate between languages, too. English is the most-represented langauge on the Internet, so the model performs best in English. Languages that don't appear as frequently online are less prevalent in the training data, and so the model performs worse in such languages.

## Information extraction

Enter the following prompt, then click **Generate**.

```
Extract the person name, company name, location and phone number from the text below.

Hello. My name is Robert Smith. I’m calling from Contoso Insurance, Delaware. My colleague mentioned that you are interested in learning about our comprehensive benefits policy. Could you give me a call back at (555) 346-9322 when you get a chance so we can go over the benefits?
```

This example shows how you can combine a prompt with data to extract information using natural-language instructions. In this case, the completion extracts the name, company, location, and phone number from an email. Try modifying the prompt and the source data to extract different information.

## Extract structured data from text

Enter the following prompt, then click **Generate**.

```
There are many fruits that were found on the recently discovered planet Goocrux. There are neoskizzles that grow there, which are purple and taste like candy. There are also loheckles, which are a grayish blue fruit and are very tart, a little bit like a lemon. Pounits are a bright green color and are more savory than sweet. There are also plenty of loopnovas which are a neon pink flavor and taste like cotton candy. Finally, there are fruits called glowls, which have a very sour and bitter taste which is acidic and caustic, and a pale orange tinge to them.

Please make a table summarizing the fruits from Goocrux
| Fruit | Color | Flavor |
| Neoskizzles | Purple | Sweet |
| Loheckles | Grayish blue | Tart |
```

In this example, we provide freeform narrative about fictitious fruits, and prompt the model to generate a table of all the fruits mentioned and their attributes. 

In this example, we "primed" the model with the desired output format: a header row, and a couple of examples. (This is an example of the prompt engineering technique "few-shot learning".)

Let's try "zero-shot" learning as well. Change the last part of the prompt to instead read:
```
Please make a JSON array summarizing the fruits from Goocrux:
```
Even though it was given no example to work from, did the model generate a JSON array of the all the fruits and their attributes?

## Classification

Enter the following prompt, then click **Generate**.

```
Classify the following news headline into 1 of the following categories: Business, Tech, Politics, Sport, Entertainment

Headline 1: Donna Steffensen Is Cooking Up a New Kind of Perfection. The Internet's most beloved cooking guru has a buzzy new book and a fresh new perspective
Category: Entertainment

Headline 2: Major Retailer Announces Plans to Close Over 100 Stores
Category:
```

Here we provide one example of a headline and a category, and ask the model to classify a second example. This is an example of "one-shot learning": with just one example, the model can generalize to classify a new example.

Try replacing Headline 2 with other text and regenerating the completion. Does it generate the appropriate category?

```
Jets lose, again!
```

```
Obama announces re-election bid
```

```
General Motors up in after-hours trading
```

```
20nm process offers more density and better power value
```

```
Rain likely tomorrow
```

What category did the model choose for the last example? Was it one of the categories specified at the beginning of the prompt?

## Text summarization: abstractive

Enter the following prompt, then click **Generate**.

```
Provide a summary of the text below that captures its main idea.

At Microsoft, we have been on a quest to advance AI beyond existing techniques, by taking a more holistic, human-centric approach to learning and understanding. As Chief Technology Officer of Azure AI Cognitive Services, I have been working with a team of amazing scientists and engineers to turn this quest into a reality. In my role, I enjoy a unique perspective in viewing the relationship among three attributes of human cognition: monolingual text (X), audio or visual sensory signals, (Y) and multilingual (Z). At the intersection of all three, there’s magic—what we call XYZ-code as illustrated in Figure 1—a joint representation to create more powerful AI that can speak, hear, see, and understand humans better. We believe XYZ-code will enable us to fulfill our long-term vision: cross-domain transfer learning, spanning modalities and languages. The goal is to have pre-trained models that can jointly learn representations to support a broad range of downstream AI tasks, much in the way humans do today. Over the past five years, we have achieved human performance on benchmarks in conversational speech recognition, machine translation, conversational question answering, machine reading comprehension, and image captioning. These five breakthroughs provided us with strong signals toward our more ambitious aspiration to produce a leap in AI capabilities, achieving multi-sensory and multilingual learning that is closer in line with how humans learn and understand. I believe the joint XYZ-code is a foundational component of this aspiration, if grounded with external knowledge sources in the downstream AI tasks.
```

This example shows how to create a short summary of a larger piece of text: "Provide a summary of the text below that captures its main idea." Another prompt you can try to similiar effect is:

    tl;dr

(for "too long; didn't read"). This prompt works well after the text to be summarized. Try it out.

## Text summarization: extractive

Enter the following prompt, then click **Generate**.

```
Below is an extract from the annual financial report of a company. Extract key financial number (if present), key internal risk factors, and key external risk factors.

# Start of Report
Revenue increased $7.5 billion or 16%. Commercial products and cloud services revenue increased $4.0 billion or 13%. O365 Commercial revenue grew 22% driven by seat growth of 17% and higher revenue per user. Office Consumer products and cloud services revenue increased $474 million or 10% driven by Consumer subscription revenue, on a strong prior year comparable that benefited from transactional strength in Japan. Gross margin increased $6.5 billion or 18% driven by the change in estimated useful lives of our server and network equipment. 
Our competitors range in size from diversified global companies with significant research and development resources to small, specialized firms whose narrower product lines may let them be more effective in deploying technical, marketing, and financial resources. Barriers to entry in many of our businesses are low and many of the areas in which we compete evolve rapidly with changing and disruptive technologies, shifting user needs, and frequent introductions of new products and services. Our ability to remain competitive depends on our success in making innovative products, devices, and services that appeal to businesses and consumers.
# End of Report
```

This example specifies the data to be extracted from the text: "Customer problem", "Outcome of the conversation", etc. Unlike the structured data example above, in this case we are extracting concepts as opposed to specific data points. Note the use of the "Start of Report" and "End of Report" markers to guide the model to focus on a specific block of text.

## Next steps

Many of the examples above can be found in the "Examples" dropdown in Azure OpenAI Service's Completions Playground, or the [OpenAI Examples](https://platform.openai.com/examples). Try a few other examples that interest you.

These examples are illustrative as one-off demonstrations, but their real power comes with automation. You can use the Azure OpenAI service to perform similar tasks either on-demand (say, as a customer request form is submitted) or in batch mode (say, to extract data points from a database of unstructured text responses). We'll explore the API later.