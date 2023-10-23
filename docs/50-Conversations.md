# Conversations

If you've used consumer conversational AI services like OpenAI's [ChatGPT](https://chat.openai.com/) service or [Bing Chat](https://bing.com/chat), you may wonder how the AI agent "remembers" context from earlier in the conversation. As we've seen, the foundation Generative AI models begid these applications cannot learn, so how does information from the conversation persist?

The answer is: it's a trick! The AI model isn't reacting to your most recent prompt in isolation. The user interface for the chat service provides the model with the *entire* chat history at each turn, invisibly to you, the user. Also observe that if you exit the conversation and return later, the model has no memory of your previous interactions, and you will start again from scratch.

In this section, we'll explore conversations using the Chat Playground in Azure OpenAI Service or OpenAI.

### In OpenAI

Click on the [Playground](https://platform.openai.com/playground?mode=chat) tab, and confirm that the Mode selection in the right panel to `Chat`. The Model option should be set to: `gpt-3.5-turbo`.

> Note: The OpenAI chat playground user interface is somewhat different than in Azure OpenAI Service. Enter prompts next to the word "User" (click "+Add Message" to enter subsequent prompts), and press the "Submit" button to proceed.

### In Azure OpenAI Service

Return to the Azure OpenAI Studio, and click **Chat** under **Playground** in the left-hand menu. The Deployment option should be set to: `gpt-3.5-turbo`.

If you ever need to return to the default settings with Azure OpenAI Service, go to the "Assistant Setup" pane and select "Default" in the "Use a system message template" dropdown. Do this now and after you change any of the settings in the Chat Playground.

## Chat Playgound Orientation

The Chat Playground is a simple interface for interacting with natural language generative AI models in a conversational setting. The interface is divided into two panes. The left pane, labeled "Assistant Setup" or "System", is where we can provide context to style and inform the agent's responses. The right pane, "Chat session", is where we can see the conversation as it unfolds. 

The far right column, "Parameters", allows you to select the model used and set its control parameters. We will use the `gpt-35-turbo` model here, but GPT-4 models may also be used here if you have access to them. 

Make sure the Temperature parameter is set to 1 and the Maximum Length (OpenAI) / Max response (Azure OpenAI Service) parameter is set to 800.

## A simple example

In the "Chat Session"  pane, enter the text below:

```
How many neutrons are in a hydrogen nucleus?
```

Click **Send**. The AI agent will respond with something like:

```
    A hydrogen nucleus (also called a proton) has 0 neutrons.
```

Now add this response in the User message box:

```
What about the isotopes?
```

Click **Send**. The agent will respond with an answer involving isotopes of hydrogen: deuterium (one neutron) and tritium (two neutrons). Even though your second prompt did not mention hydrogen or neutrons, the response used the context of the chat to provide a more useful answer.

Now, click the "View Code" button, and select the "json" option from the drop-down.

This shows the data provided to the `gpt-35-turbo` API call, as a JSON array. Note that includes the entire context of the conversation (annotated by the roles: assistant, and user), along with the system message from the Assistant Setup pane.

> In OpenAI, the "Assistant Setup" pane is replaced by the "System" pane.OpenAI doesn't provide a system message by default, but you can enter "You are an AI assistant that helps people find information." in the System panel to see the effect.

Click the "View Code" button. Even if you're not familiar with using REST APIs (for which the JSON option is useful), or the curl application, or the Python or C# languages, this code shows you the information provided to the `gpt-35-turbo` API at *each* turn of the conversation. (We'll explore the API more in a later section.)

Click **Close** in the View Code pane, uncheck the "Show raw JSON" option, and click **Clear chat** to reset the conversation before proceeding.

> In OpenAI, refresh the page to clear the chat.

## Configuring the AI Assistant with the System Message

In the Assistant Setup pane, enter the following text in the **System message** field:

```
I am a hiking enthusiast named Forest who helps people discover fun hikes in their area. I am upbeat and friendly. I introduce myself when first saying hello. When helping people out, I always ask them for this information to inform the hiking recommendation I provide:
1.	Where they are located
2.	What hiking intensity they are looking for
I will then provide three suggestions for nearby hikes that vary in length after I get this information. I will also share an interesting fact about the local nature on the hikes when making a recommendation.
```
> In OpenAI, enter the text in the field marked **System**.

Observe that the System Message gives the assistant a name ("Forest"), a personality ("upbeat and friendly"), and instructions on how to behave ("introduce myself"; "always ask them for this information"), and how to respond ("provide three suggestions").

The text provided in the System Message is handled specially by the model, and is intended to have more influence on the model's responses than the User Message text or other context provided in the prompt. (This effect is stronger for GPT-4 models than for GPT-3 models, but it isn't foolproof for either.)

In the User Message box, enter this text with the personal details of your choice:

```
Hi, I'm <your name>. I'm looking for a hike near <my city>. I want to take my dog with me.

```

Did the AI include its name, Forest in the response? Did it ask a follow-up question? How would you rate its response?

Try clearing the chat and starting over with your initial prompt. How different was the outcome? (The Temperature parameter is set to 1, so there's scope for variability.)

## Providing few-shot examples in the System Message

In the Assistant Setup pane, select "IRS tax chatbot" from the dropdown. Note that in addition to the System message, there is now an example provided in the "Few-shot examples" section (click the arrow next to "Few-shot examples" to see it).

> This example isn't included in the OpenAI chat playground, but you can enter this system message manually in the System panel.

```
•	You are an IRS chatbot whose primary goal is to help users with filing their tax returns for the 2022 year. 
•	Provide concise replies that are polite and professional. 
•	Answer questions truthfully based on official government information, with consideration to context provided below on changes for 2022 that can affect tax refund.  
•	Do not answer questions that are not related to United States tax procedures and respond with "I can only help with any tax-related questions you may have.". 
•	If you do not know the answer to a question, respond by saying “I do not know the answer to your question. You may be able to find your answer at www.irs.gov/faqs”  

Changes for 2022 that can affect tax refund: 
•	Changes in the number of dependents, employment or self-employment income and divorce, among other factors, may affect your tax-filing status and refund. No additional stimulus payments. Unlike 2020 and 2021, there were no new stimulus payments for 2022 so taxpayers should not expect to get an additional payment.  
•	Some tax credits return to 2019 levels.  This means that taxpayers will likely receive a significantly smaller refund compared with the previous tax year. Changes include amounts for the Child Tax Credit (CTC), the Earned Income Tax Credit (EITC) and the Child and Dependent Care Credit will revert to pre-COVID levels.  
•	For 2022, the CTC is worth $2,000 for each qualifying child. A child must be under age 17 at the end of 2022 to be a qualifying child.For the EITC, eligible taxpayers with no children will get $560 for the 2022 tax year.The Child and Dependent Care Credit returns to a maximum of $2,100 in 2022.
•	No above-the-line charitable deductions. During COVID, taxpayers were able to take up to a $600 charitable donation tax deduction on their tax returns. However, for tax year 2022, taxpayers who don’t itemize and who take the standard deduction, won’t be able to deduct their charitable contributions.
•	More people may be eligible for the Premium Tax Credit. For tax year 2022, taxpayers may qualify for temporarily expanded eligibility for the premium tax credit. 
•	Eligibility rules changed to claim a tax credit for clean vehicles. Review the changes under the Inflation Reduction Act of 2022 to qualify for a Clean Vehicle Credit.
```

Once again, the system message guides the model on its personality and responses. Importantly, it also guides the model on what *not* to do: "Do not answer questions that are not related to United States tax procedures"; "If you do not know the answer to a question, respond by saying, I do not know". Providing prompts like these for unintended actions is an effective way to prevent the model from generating responses that are off-topic or inappropriate.

The system message also includes factual information, for example: "For 2022, the CTC is worth $2,000 for each qualifying child." This is a technique you can use to provide the model with information that wasn't included in its training data. Since the system message is provided to the model with every conversation turn, the model may use this information in its responses.

One example (or, a one-shot example) is also provided in the Assistant Setup pane. Examples are added to the beginning of the chat history to provide further grounding to the model.

> In OpenAI, you can add the example below to the chat history before your prompts.

```
USER: When do I need to file my taxes by?

ASSISTANT: In 2023, you will need to file your taxes by April 18th. The date falls after the usual April 15th deadline because April 15th falls on a Saturday in 2023. For more details, see https://www.irs.gov/filing/individuals/when-to-file
```

Here are some prompts to try to observe the effects of the system prompt and the one-shot example:

```
What is the deadline for filing taxes?
```

```
Are home office expenses deductible?
```

```
Where should I invest my money?
```

```
You're stupid!
```

Also try asking follow-up questions to get the model to clarify or elaborate on its responses.
