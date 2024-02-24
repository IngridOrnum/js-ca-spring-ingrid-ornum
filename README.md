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
- Figma: I used figma to design the entire project. 
- Webstorm: the code editing software I used.
- Github: I github board and roadmap to keep a structured work flow. I also used Github to commit and merge to main branch.
- Sourcetree: Git version control was managed using Sourcetree.
- Webp Converter: I downloaded and used this tool to compress images to under 200kb, from jpeg to webp.
- Bing AI image generator: I used this image generator to use images more specific and suitable to the website I made.[Link to Bing image generator](https://www.bing.com/images/create?FORM=GDPGLP)
- Unsplashed: I used free images from Unsplashed, and credited the owner on my figma file.
- Fontawesome: Most of the icons used on the page is from [Fontawesome.](https://fontawesome.com/icons)
- Flaticon: Some icons used on the page is from [Flaticon.](https://www.flaticon.com/)
- Notion: I used Notion, a web application for taking notes.

### Deployment 
I used Vercel to deploy my project. [Click here to go to the project.](https://semester-project-2023.vercel.app/)
  
## Process
The process of planning the project started in Notion, github board and github roadmap because I already was familiar with these tools.

### Design process
The first week I planned the project by create pencil sketches of each site, then I did mid-fi wireframes in figma. I also used Notion to write down ideas and reflect on the target audience. In the second week I created my design in figma, where I also declarired color-scheme, font-famliies, gaps and sizes. However, in the end of the week I decided to change all of my design. The reason for this was that I wanted more lighter and childlike colors used in my website. Because of this I was some days behind the dates I had set for myself in the roadmap I created. In total I used about two weeks designing the project. I also did some changes in the design, like swaping photos and adding a new font for h1-headings while coding.

I found most of my images on unsplashed, searching for images related to science, museum, children, etc.

### Production process
I used sourcetree to set up the project and create branches locally on my mac. While working on the code, I regularly committed changes and pushed to Github. When finished with a branch, I merged with the main branch and pulled the changes to the main branch locally on my computer using sourcetree. 

I started creating the header and the footer, but I didn't complete the burger menu in the header until quite late in the work process because this required javascript and I wanted to prioritize to finish the design. I then created the the content on each page. I added all repeating styles in the "style.css" style-sheet, like gaps, font sizes, button styles, etc. 

## Reflection
I am not satisfied with the design I ended up with, even though I already changed it one time. I had many ideas of how the page could look like, but was split between a minamalistic og a maximalistic design.

I also aren't too happy with the work process with the branches, because I merged some of the pages before being completely done with the page. This resulted in some awkward and messy branches, ex: "about-page-fix". If I could do it again, I would make even more detailed issues on the github board for each page. 
