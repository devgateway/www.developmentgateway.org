---
layout: post
nid: 1418
author: Wayan Vota
created: 1369317645
old_path: news/dg-tech-series-why-we-are-building-web-applications-backbone-and-require-javascript
title: 'DG Tech Series: Why We Are Building Web Applications with Backbone and Require
  JavaScript'
excerpt: I'm Ionut Dobre and the evolution of browsers into powerful platforms is inspiring
  developers to write richer and more complex applications. The downside to this is
  of course that as the code becomes more complicated, problems like code maintenance
  or resolving new bugs begin to appear.
thumbnail: assets/featured-images/image02.png
thumbnail-fid: "5976"
thumbnail-alt: ""
---

I'm [Ionut Dobre](http://www.ionutdobre.com/about/) and the evolution of browsers into powerful platforms is inspiring developers to write richer and more complex applications. The downside to this is of course that as the code becomes more complicated, problems like code maintenance or resolving new bugs begin to appear.

Now you can build an entire web application just by using JavaScript and frameworks like jQuery, which is fine, because you can develop the application very fast. But as you add more and more features to the application, you risk ending up with a spaghetti code. Moreover, if your application doesn’t have a modular architecture, you will very likely reach situations when adding a new feature means breaking an older one.

**What is a modular application?**

It is an application divided into several modules that are loosely coupled together, which can be integrated into a more complex application; now, there are many different approaches and patterns that can provide developers with an easy way to organize their code and build a modular application. One of the most popular is the MVC pattern.

**What is MVC?**

MVC stands for Model-View-Controller and essentially splits your application into 3 parts:

- *The Model* is where the data stands; if the model changes it notifies the view to update itself,
- *The View* is what users see. It observes the model and presents to the user the information with which they can interact (clicking) – but the view is not too smart and it doesn’t know what to do so it notifies the controller that an event (a click) occurred,
- *The Controller* is the logical part of the application. When the Controller takes notice of an event it changes the Model accordingly, change which ends up influencing the View and so on.

**Backbone JavaScript**

[Backbone JS](http://backbonejs.org/) is a very light JavaScript library than can be used to organize big JavaScript projects (rich web applications, not just simple web pages). The big advantage that this library offers is the possibility of using the MVC pattern (it’s more like a MV* pattern because some of the Controller responsibilities are taken over by the View) to structure the project’s modules.

Traditionally, a web application stores the data in to the DOM (Document Object Model), which is a bad idea because it doesn’t respect the DRY (Don’t repeat yourself) principle. Let me give you an example of why you should use a Model to store you data: suppose you have a web application which has different parts that should have the same data; when the user makes an action and you update one of them you also have to remember to update all the related parts properly – the problem with this kind of approach is not only to make sure you will remember which parts should be updated, but also to make sure you don’t forget any.

A View in Backbone JS is typically a visual representation of the data stored in Models. Everything that is displayed in a page can be considered a View, even the whole page itself could be a View that contains other Views. In this way Backbone encourages developers to abstract the DOM manipulations into Views and to use events to change the Models.

The Controller in the Backbone terminology is called a Router because it lets you save the state of the application using hashbang URL. To better understand this concept I will give a known example: the Gmail application – after you first log in you will see a list of emails that you can read or delete, you can go to sent section or compose a new email and all of this happens in the background because the page isn’t refreshed and there is no need for a new page to be rendered.

To build a Gmail application with Backbone JS we can use a Model to store the emails (subject, from, content), which Model is used by a View to display the emails to the user. The View will listen for events (for example the user can delete one of the emails) and update the Model which in turn will refresh the View. Now, when the user switches between reading an email and viewing the inbox folder and then refreshes the page, the user will expect to see the inbox folder and not the content of an email the user just read – this behavior is called preserving application state and can be easily implemented with Backbone Routers.

**Require JavaScript**

Now that we can build our new Gmail Application we can end up with a lot of JavaScript files where we defined our Models, Views, Collections and Routers. Also we have to link the above mentioned files together so that our application functions (clearly, the order of loading this files is important, for example we can’t load the View that displays the inbox folder before loading the View that displays the application page). To solve this problem you could use [Require JS](http://requirejs.org/) JavaScript library.

Require JS is also very good at loading the JavaScript files in an asynchronous fashion. This is a fantastic feature and it means that you have the possibility to load only necessary Views. For example when logging in to Gmail, you don’t want to load all the Views at the beginning, you only need to display the inbox folder (maybe the user is just checking if the user has new emails so why let the user wait until sent emails are loaded?) and just lazy load other resources only when they are needed.

In conclusion Backbone JS and Require JS are amazing resources that can save an imaginative developer’s time and effort while also providing the end user with a great experience.


