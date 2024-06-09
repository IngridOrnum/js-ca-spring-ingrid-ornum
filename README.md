# Square Eyes - JS1 Course Assignment
Square Eyes is a fictional movie streaming website, where the user can buy and read detailed information about movies. The website is an API-driven application focused on intriguing the user to buy movies. The user can add movies to watchlist or to cart, which then automatically is updated. The user can also proceed to checkout where all the movies added to cart and the collected price is viewed. The movies displayed are the movies avaliable in the API provided by Noroff.

This is my first JavaScript course assignment while studying Front-end Development at Noroff School of Technology and Digital Media.

## Table of contents:
* [Installation and Project Links](#installation-and-project-links)
* [Requirements](#requirements)
* [Features](#features)
* [Technical specifications](#technical-specifications)
* [Challenges](#challenges)
* [Licence](#licence)

## Installation and Project Links
My project is deployed on Vercel. [Click here to go to the project.](https://js-ca-spring-ingrid-ornum.vercel.app/) <br/>
GitHub Repo: [Project Repo](https://github.com/IngridOrnum/js-ca-spring-ingrid-ornum)

## Requirements
The semester project have the following requirements:
- As a user, I want to view a list of products on the homepage.
- As a user, I want to filter products by category, gender or genre.
- As a user, I want to view a single product page with more detail.
- As a user, I want to add a product to my basket.
- As a user, I want to remove a product from my basket.
- As a user, I want to view a summary of my cart on the checkout page.
- As a user, I want to view an order-confirmation screen after checking out.

Required pages:
- Home Page containing product list
- Product Page showing all details of a specific product
- Checkout Page showing all items in the basket
- Confirmation Page

## Features
The project features seven responsive pages. These are the following:
- Homepage: An animated hero/slider with selected movie ids from the API, displaying all movies avaliable in the API (with image, title, release year) and filter function (filter by genre).
- Movie page: Details about each movie which is clicked on the homepage (fetched from the API), "add to cart" button, "add to watchlist" button. User is alerted when a movie is added twice using both "buy" button and "add to watchlist", and the user is alerted everytime a movie is added to watchlist.
- Checkout page / cart dropdown: When clicking the "buy" button on the moviepage, the movie is added to (localstorage) both cart dropdown and checkoutpage. The user can only delete a movie through the cart dropdown. The user is redirected to the checkoutpage when clicking on the "proceed to checkout" button in the cart.
- Checkout success: A simple page where the user is directed to after comfirming the order in the checkout page. There is also a button to redirect the user back to the homepage.
- About page: short description about the site.
- Watchlist: On the moviepage the user can add to watchlist. The movies are added to (localstorage) my-watchlist.html.
- Terms of Service: Simple page with AI generated text.

## Technical specifications

### Tech
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 

### Tools
- Figma: I used figma to design the project, both mobile and desktop. 
- Webstorm: the code editing software I used.
- Github: I github board to keep a structured work flow. I also used Github to commit and merge to main branch.
- Sourcetree: Git version control was managed using Sourcetree.
- Unsplashed: I used free images from Unsplashed as a backup image in the hero slider at the homepage.
- Fontawesome: Most of the icons used on the page is from [Fontawesome.](https://fontawesome.com/icons)
- Notion: I used Notion, a web application for taking notes.
- ChatGPT: I used chatGPT when stuck on bugs or if I want input on how to improve my code. I also used ChatGPT to generate text to the pages "about" and "terms of service".
- YouTube: I used youtube for inspiration to resolve tasks.
  
## Challenges
I tried different approaches to similar problems when coding with JS, like using innerhtml in the js to create html content versus using "createElement" method. I think this was a great way to figure out what I found makes more sense to me and what i prefer using.

After this course I understand JS more and feel more comfortable using it, but along the way I also figured what I need to study more to understand. 

## Licence
This project is licenced under the MIT Licence.
