# JS1 Course Assignment - Spring 2024
This is the first JavaScript course assignment in Front End Development at Noroff School of Technology.

My project is deployed on Vercel. [Click here to go to the project.](https://js-ca-spring-ingrid-ornum.vercel.app/)

## Table of contents:
- [Requirements](#requirements)
- [Features](#features)
- [Technical specifications](#technical-specifications)
  - [Tech](#tech)
  - [Tools used](#tools-used)
  - [Deployment](#deployment)
- [Process](#process)
  - [Design process](#design-process)
  - [Production process](#production-process)
- [Reflection](#reflection)

## Requirements
The semester project have the following requirements:

1. Fulfill user stories:
- As a user, I want to view a list of products on the homepage.
- As a user, I want to filter products by category, gender or genre.
- As a user, I want to view a single product page with more detail.
- As a user, I want to add a product to my basket.
- As a user, I want to remove a product from my basket.
- As a user, I want to view a summary of my cart on the checkout page.
- As a user, I want to view an order-confirmation screen after checking out.

2. Required pages:
- Home Page containing product list `/index.html`
- Product Page showing all details of a specific product `/product/index.html`
- Checkout Page showing all items in the basket `/checkout/index.html`
- Confirmation Page showing a thank you message `/checkout/confirmation/index.html`

Important features:   
This list is a non-exhaustive list of important things to keep in mind before delivery:
• Errors should be handled for the user, such that they are alerted when something
goes wrong like an API call.
• A loading indicator should be shown to the user whenever they are waiting for an
asynchronous action to finish.
• There should be no hardcoded product data in your final submission.
• Although the focus on marking is on JavaScript, the site still needs to be accessible
and usable for the user. If we cannot access functionality that has been coded, it will
be marked as if the coding was not done.
• Use `async` instead of `then` syntax for asynchronous actions.
• Remove all console.log statements before delivery.

## Features
The project features seven responsive pages. These are the following:
- Homepage: animated hero/slider, all movies avaliable in the API, filter function (by genre).
- Movie page: details about each movie clicked (fetched from the API), "add to cart" button, "add to watchlist" button. User is alerted when a movie is added twice using both "buy" button and "add to watchlist", and the user is alerted everytime a movie is added to watchlist.
- Checkout page / cart dropdown: When clicking the "buy" button on the moviepage, the movie is added to (localstorage) both cart dropdown and checkoutpage. The user can only delete a movie through the cart dropdown. The user is redirected to the checkoutpage when clicking on the "proceed to checkout" button.
- Checkout success: A simple page where the user is directed to after comfirming the order in the checkout page. There is also a button to redirect the user back to the homepage.
- About page: short description about the site.
- Watchlist: On the moviepage the user can add to watchlist. The movies are added to (localstorage) my-watchlist.html.
- Terms of Service: Simple page with AI generated text.

## Technical specifications

### Tech
- HTML
- CSS
- Javascript: I used Javascript to create the burger menu in the header and dropdown content in the "about page".

### Tools used
- Figma: I used figma to design the project, both mobile and desktop. 
- Webstorm: the code editing software I used.
- Github: I github board to keep a structured work flow. I also used Github to commit and merge to main branch.
- Sourcetree: Git version control was managed using Sourcetree.
- Unsplashed: I used free images from Unsplashed as a backup image in the hero slider at the homepage.
- Fontawesome: Most of the icons used on the page is from [Fontawesome.](https://fontawesome.com/icons)
- Notion: I used Notion, a web application for taking notes.
- ChatGPT: I used chatGPT when stuck on bugs or if I want input to improve my code. I also used ChatGPT to generate text to pages "about" and "terms of service".
- YouTube: I used youtube for inspiration to resolve tasks.

### Deployment 
I used Vercel to deploy my project. [Click here to go to the project.](https://js-ca-spring-ingrid-ornum.vercel.app/index.html)
  
## Process
The process of planning the project started in Notion and github board because I already was familiar with these tools.

### Design process
I used inspiration from a project I did earlier where we only used HTML and CSS, but did some adjustments to make it work with this assignment.

### Production process
I used sourcetree to set up the project and create branches locally on my mac. While working on the code, I regularly committed changes and pushed to Github. When finished with a branch, I merged with the main branch and pulled the changes to the main branch locally on my computer using sourcetree.  

## Reflection
I learned alot during this course assignment. I fount chatGPT to be a helpful tool, both with debugging code and understanding syntaxes more. I also worked alot at school where I had discussions with my peers, which was a big help during the assignment. I talked to my peers when I was stuck with a problem and I provided help to my peers with whatever I could.

I tried different approaches to similar problems when coding with JS, like using innerhtml in the js to create html content versus using "createElement" method. 

I am not too happy with the design on all the pages, but because the design part and making the site responsive wasn't a requirement I gave myeself some slack.

My HTML files are not named the exact same as in the course assignment sheet we were provided to the project. I figured this would not be a problem as long as the content fulfill the requirements.

After this course I understand JS more and feel more comfortable using it, but along the way I also figured what I need to study more to understand. 
