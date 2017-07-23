# Omnilogue

## Introduction
We built Omnilogue because we feel that today's world has so much information, but not enough intuition. Omnilogue is a place where you go to theask question, and can expect a community that is incentivised to go beyond providing the right information. We think it is important that the right information also comes from the right place.

The current iteration that we have is a minimum viable product of what imagined. At this stage, our focus is to showcase what we feel is the most important feature of Omnilogue. That is:

1. An online place of discussion that is lightning quick and snappy, that it feels like a chatroom;
2. A community driven to provide the right information; and
3. A reward system that incentivises positive emotions, as determined by machine learning (the irony did not get past us either!).

### A forum on React.js
We believe that technology comes second to how we use them, but this time, we think the technology matters. React.js is a framework developed by the people at Facebook to provide the best user experience for its users, by being fast at the right place.

Omnilogue is designed with the same intention, to provide a better place for discussions using the tried and tested model of the discussion, but using the latest technology to power it.

### Where humans win
We believe that for all its processing power behind it, the computer is still far behind us humans in telling what is right and what is wrong. Intuition wins when the goal is subjective (like the most relevant answer). Based on this, Omnilogue determines the most relevant answer just like how most forums do, with human votes. Because it just works.

### Where machines win
It makes sense to think that humans are better at reading sentiments because we have emotions, but we want to challenge this notion. It is emotions that cloud us from reading emotions, and we built a sentiment analysis in Omnilogue to reward good intentions.

We call it the Positivity Bar, and we're quite proud of it. The positivity bar powers a lot of Omnilogue, and it is based on our contrarian view that machines are better at telling us how we feel than our own thought. Everything in Omnilogue has the Positivity Bar, and we even use it to aggregate a collection of sentiments (belonging to users and topics).

Like we said, we believe that the right information should also comes with the right intuition.

## Future Aspirations
We have big dreams for Omnilogue, but big all big dreams begin with a first step. We like the MVP way of building small but building well, and we selected the features that we feel have the biggest impact to showcase in this MVP.

As mentioned in the project requirement, we think it makes sense to not only limit the source of information from the forum, but also social media sites. The Positivity Bar would make a perfect match to show along the with the results.

We also think having a live Positivity Bar while our users type in messages makes a lot of sense too. Like we said, we really do think that machines are better at telling us how we feel than our own minds, and they could prevent us from hitting send when we really should not have.

Lastly, we did not get a chance to display any data analysis from Omnilogue, as it would not have made much sense without context. As users begin to use Omnilogue, and we believe they will, better context would have been established for us to utilise data analysis techniques. Again, we feel sentiment analysis has a huge potential here too.

We would like to thank DRYiCE and HCL Technologies for coming up with this opportunity for us to work on Omnilogue. We hope our little app excites you in a big way like it did us.

## Using Omnilogue

Omnilogue sits on the world wide web. To access it, simply visit our URL at http://omnilogue.herokuapp.com. You can view Omnilogue as a visitor or sign up for an account. We recommend you sign up to get its full feature.

### Searching for a question
There are two ways to search for a question
1. To search for a specific category, you can use the category dropdown shown in Image #1
2. You can also use the search bar to look for a specific question as shown in Image #2

### Viewing a question
Click on a specific question to view the answers.
Image #3 shows an example question, notice the coloured bar inside the question box.
That is our Positivity Bar, it is a result of a sentiment analysis done on each response to a question to gauge the overall positivity/negativity of the thread.
Image #4 shows a collection of answers and comments, each with its own Positivity Bar.

(You have to be logged in for the features below)

### Replying to a question
There are two ways to participate in the discussion of a question
1. You can answer the question directly via the answer form at the bottom of the question page
2. To discuss an answer further, you can comment on a particular answer.To comment an answer, click on the 'Add Comment' button under the answer you want to comment on which will reveal a comment form

Once your answer/comment is posted, the result of the sentiment analysis will be displayed via the Positivity Bar

### Asking a question
Click on Ask a question and choose the category that best fits your question. Make sure your question is as specific and detailed as possible. To avoid questions that are similar, we have created a "Question Suggestion" feature that will show you similar type of questions in our forum while you are typing your question title.
