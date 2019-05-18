# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to add functionality to the tabs below the 'Lambda Times' logo. These tabs will act as filters for our articles, and when clicked on, should filter out all articles except those with that tag.

![Working Sprint Challenge Gif](./Sprint-Challenge.gif 'Example of working project')

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

DOM = Document Object Model. In using the name to describe it, the DOM is a model that browsers use to display an HTML document, treating each portion of HTML as an object.

Browsers create a Document Object Model for each webpage that branches out similarly to how its HTML file branches. The document is at the head of the model, branching out first to the `<html>` tag. Anytime the HTML file has a new identifier(a tag, class, id, etc), a new object is created in the DOM, and each time the HTML has a new indentation, a new branch is created.

This model is useful for developers because Javascript can use the DOM to select specific pieces within the HTML document. After selecting these specific pieces, we can then manipulate them by adding animations, creating changeable styles, and linking various events to them.


2. What is an event?

An event is a specific action(a user clicking or a webpage fully loading) that a program can recognize. With Javascript, we have a large number of pre-set events that we can link to different function or bits of code: See question 3 below.


3. What is an event listener?

Event listeners are a way for us to tell our Javascript code to detect an event when it happens. Once the event is detected, we can then call a function, or run any number of lines of code. For example, We can add an event listener to a button. This listener with listen for a `'click'` event. If the user clicks on this specific button, the program will run a code that opens up a dropdown menu.


4. Why would we convert a NodeList into an Array?

NodeLists are array-like, but they do not have full array functionality. NodeLists have index values, a `.length` property, and can utilize the `.forEach()` method just like arrays. However, if we want to use array methods ilke `.filter()`, `.map()` or the like, we must first convert the list into an Array.


5. What is a component?

As programmers, we always want to save time and save lines of code. Web components allow us to save time and code by creating reusable, customizable elements. When we write HTML, we need to type out each `<div>` tag and text, each `<h1>` tag and text, and so on. When we type our JS code, however, we can use components to auto-create objects associated with these different tags and classes. In the same way functions allow us to define reusable code, components allow us to use this reusable code with the DOM to create our elements.


### Git Set up

* [x] Fork the project into your GitHub user account
* [x] Clone the forked project into a directory on your machine
* [x] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [x] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [x] Look through the HTML code paying particular attention to the Tabs component and the Cards components. You will notice they share a data attribute. We will be using this data attribute to determine which cards should show when each tab is selected.

* [x] Following the instructions in the `Tabs.js` file, complete the `TabLink`, and `TabCard` class components. It will look and feel very similar to the last project we worked on, but with a twist. Now, instead of one `Item` to display, we will need to display a collection of `Cards`. Think about ways to iterate over an array and manipulate each item.  **Note: You will need to un-comment the code after the lines of instructions.  The code is commented out so you can work error-free**

* [x] Once you get your `Tab` component working properly add a couple more articles yourself and check out how it works.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. You have the HTML and CSS already in place, simply un-comment the HTML in the `index.html` file. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. You may reference the `Tabs.js` file for assistance.

* [x] Complete the carousel functionality in `Carousel.js`

* [x] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [x] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [x] If you have finished the above, play around with the styling on all the components, and understand how each is built.
