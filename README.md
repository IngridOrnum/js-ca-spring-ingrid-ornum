# Square Eyes - JS1 Course Assignment
Square Eyes is a fictional movie streaming website designed to engage users in exploring and purchasing movies. This API-driven application allows users to add movies to their watchlist or cart, view detailed movie information, and proceed to checkout where the total cost and selected movies are displayed. The available movies are sourced from an API provided by Noroff.

This project represents my first assignment in JavaScript for the Front-end Development program at Noroff School of Technology and Digital Media.

## Table of contents:
* [Installation and Project Links](#installation-and-project-links)
* [Requirements](#requirements)
* [Features](#features)
* [Technical Specifications](#technical-specifications)
* [Challenges](#challenges)
* [Licence](#licence)

## Installation and Project Links
My project is deployed on Vercel: [Click here to go to the project](https://js-ca-spring-ingrid-ornum.vercel.app/) <br/>
GitHub Repo: [Visit the repository](https://github.com/IngridOrnum/js-ca-spring-ingrid-ornum)

## Requirements
The assignment had the following requirements:
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
- <strong>Homepage:</strong>
  - A hero carousel displaying three movies.
  - Section where all movies avaliable in the API are displayed (with image, title, release year) and filter function (filter by genre).
- <strong>Movie page:</strong>
  - Detailed about the chosen movie.
  - Functionable buttons: "add to cart" and "add to watchlist" button. The user is alerted when a movie is added to cart/watchlist, and when a movie already is in cart/watchlist.
- <strong>Checkout page / cart dropdown:</strong>
  - When clicking the "buy" button on the moviepage, the movie is added to (localstorage) both cart dropdown and checkoutpage. The user can only delete a movie through the cart dropdown.
  - The user is redirected to the checkoutpage when clicking on the "proceed to checkout" button in the cart.
- <strong>Checkout success:</strong> A simple page where the user is directed to after comfirming the order in the checkout page. There is also a button to redirect the user back to the homepage.
- <strong>About page:</strong> short description about the site.
- <strong>Watchlist:</strong> Page displaying movies added to watchlist. The user can also remove these from watchlist/localstorage.
- <strong>Terms of Service:</strong> Simple page with AI generated text.

## Technical specifications

### Tech
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 

### Tools
- Figma: Used to design the project - both mobile, tablet and desktop. 
- Webstorm: Code editor of choice.
- Github: Used to commit and merge to main branch. I also used GitHub board to keep a structured work flow.
- Sourcetree: Git version control was managed using Sourcetree.
- Fontawesome: For icons.
- Notion: For taking notes.
- ChatGPT: I used chatGPT when stuck on problems, or if I wanted inputs on how to improve my code. I also used ChatGPT to generate text to the pages "about" and "terms of service".
  
## Challenges
I found it challenging handeling the images so that they were visuably pleasing when seen in larger formats. I could've changed the design, so that the movie page didn't have a background image. I solved this issue in the carousel on the homepage by displaying images under 'Creative Commons-Licences'. 

This was my first time using an API, which initially presented challenges. However I learned alot by watching tutorial videos and reading helpful articles, as well as using ChatGPT as a helpful tool for debugging.

## Licence
This project is licenced under the MIT Licence.
