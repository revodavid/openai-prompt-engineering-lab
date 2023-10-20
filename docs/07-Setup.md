---
sidebar_position: 0
---

# Workshop Setup in Azure

*You can skip to the next section if you plan to use OpenAI instead of Azure OpenAI Service*

### Create an Azure OpenAI Service resource in Azure Portal

1. Open the Microsoft Azure Portal at https://portal.azure.com and sign into your Azure Subscription. Make sure you are viewing the Home page of the Azure portal by clicking the hamburger menu in the top-left and selecting "Home".

2. Click "+ Create a Resource"

3. In the search box, type "openai" and select "Azure OpenAI"

4. Click the "Azure OpenAI" pane, and then click "Create". (Leave the "Plan" field as "Azure OpenAI".)

NOTE: If you see the message in red, "Azure OpenAI Service is currently available to customers via an application form. The selected subscription has not been enabled for use of the service and does not have quota for any pricing tiers.", you need to apply for access to the service and wait for approval to continue. [Click here to request access to Azure OpenAI service](https://aka.ms/oai/access).

1. Choose a unique set of characters to make your resource group and domain name unique. You might choose something like `openai-lab-19800101` with your birthday to make it easy to remember. From now on, we'll use `openai-lab-build`, but remember to substitute your selection.

1. Complete the "Basics" tab as follows

  * Subscription: leave unchanged
  * Resource Group: Click "create new" and enter `openai-lab-build` 
  * Region: Select `Sweden Central`
    * or, select any other region that supports `gpt-35-turbo-instruct`; check [Azure OpenAI Service models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#gpt-35-models) for a current list of supported regions
  * Name: Enter `openai-lab-build`
  * Pricing Tier: Select `Standard S0`

3. Click Next. On the next page "Network", click Next. On the next page "Tags" also click Next. On the final tab "Create Azure OpenAI", click "Create".

1. Deployment may take up to 5 minutes. Once the deployment is complete, proceed to the next step.

## While you're waiting for the deployment to complete...

1. Review the [Code of conduct for Azure OpenAI Service](https://learn.microsoft.com/legal/cognitive-services/openai/code-of-conduct).

1. Review the information on [Data, privacy and security for Azure OpenAI Service](https://learn.microsoft.com/legal/cognitive-services/openai/data-privacy).

1. Browse the [Azure OpenAI Service Frequently Asked Questions](https://learn.microsoft.com/azure/cognitive-services/openai/faq).

## Create model deployments

Once your Azure OpenAI deployment is complete:

1. From the Azure Portal Home page, click the Resource you just created, `openai-lab-build`. (If you don't see your resource, click on "All Resources".)

2. From the Overview tab, click the button "Explore" to launch the Azure OpenAI Studio.

3. You will see the message "No deployment detected". Click the "Deployments" link under "Management" in the left navigation.

4. Click "+ Create New Deployment". Complete the "Deploy Model" form as follows, then click "Create"

  * Model Name: Select `gpt-35-turbo-instruct`
  * Deployment Name: Enter `gpt-35-turbo-instruct`

5. Once more, click "+ Create New Deployment". Complete the "Deploy Model" form as follows, then click "Create"

  * Model Name: Select `gpt-35-turbo`
   * Deployment Name: Enter `gpt-35-turbo`
