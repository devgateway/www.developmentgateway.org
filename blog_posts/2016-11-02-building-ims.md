---
layout: post
author: "Ionut Dobre and Martha Staid"
title: "How to Build an Information Management System (one hurdle at a time)" 
excerpt: >-
  The United Nation Development Group’s Information Management System (IMS) is one of the largest software tools DG has ever built.  With users on 131 UN Country Teams, the IMS tracks progress toward core UN goals on and coherence in 165 countries and territories....
thumbnail: assets/post-images/blueprint.jpg
thumbnail-alt: "blueprint"
images:
  - url: assets/post-images/imsdatainput.png
    alt: "the data input side of IMS"
    caption: "the data input side of IMS"
  - url: assets/post-images/imswp4.png
    alt: "specialized reporting fields"
    caption: "specialized reporting fields"
  - url: assets/post-images/snippedCPdash.png
    alt: "central dashboard"
    caption: "central dashboard"
  - url: assets/post-images/beforesubmit.png
    alt: "data rollover"
    caption: "data rollover"
categories: [Innovation]
published: true
---
The United Nation Development Group’s Information Management System (IMS) is [one of the largest software tools]({% post_url 2014-10-08-coordinating-un-development-efforts-for-better-results %}) DG has ever built.  With users on 131 UN Country Teams, the IMS tracks progress toward core UN goals on and coherence in 165 countries and territories.
 
We’ve worked closely with our counterparts at the [UN Development Operations Coordination Office](https://undg.org/home/about-undg/doco/) (which serves as the Secretariat of the UNDG) to develop a system that would be flexible enough to respond to the needs of many types of users. The process of getting to that final product, what happens behind the curtain, is the fun part most people don’t get to see. (For a particularly geeky definition of fun.)
 
Building the IMS has called for creative thinking about both [the Agile software development process]({% post_url 2015-05-26-why-does-dg-use-scrum %}) and our technology choices.  Here are a few of the challenges we faced while building the data input tools, and the solutions that worked.

**The other kind of architecture**

The data input side of the IMS is made up of two separate modules. One allows UN country teams to develop their own annual workplan.  The other, the Coordination Profile (CP), helps regional and headquarters offices gather information from those country teams, so current on-the-ground data can inform policy decisions.

{% inlineimage post-center 1 %}

These modules were a new undertaking for the UN’s Development Operations Coordination Office (DOCO), and building them meant they needed to coordinate with stakeholders from across the UN to determine what information to collect.


In an ideal world, we could sit down with a set of finalized software requirements and build them out from start to finish.  Here in the real world, we needed to adapt to the UN’s changing needs and be comfortable working with a level of uncertainty as the system specifications evolved -- something the Agile methodology is made for.


To deal with this, our developers were able to **refactor** the software architecture, mid-project. This involved changing the code to make it easier to adapt and maintain, without changing the behavior of the pieces of the IMS that were already live –- so despite a major overhaul under the hood, users didn’t encounter any differences. This was true for the user interface and more complex features, like exporting user-entered data to Excel. 

This refactoring included updating some of the components that make up each form, and the way those forms are saved and displayed.  This allowed us to do more specialized things like:
 
 - Let Workplan users report last year’s progress and next year’s plan through the same interface, by hiding or revealing fields in the same record:

{% inlineimage post-center 2 %}

 - Break up the Coordination Profile into 14 separate forms.  This allowed the developers to build one, while another section’s content was still being finalized. It had the added benefit of making the module more user friendly: users can complete portions of the profile as the data is ready or when they have time, instead of needing to enter everything at once.  


 - Thanks to the refactoring, users can also navigate easily between the forms with a one-click carousel (think “next section”/”previous section” buttons), and track their progress on a central dashboard showing the status of every section:

{% inlineimage post-center 3 %}

Adapting our approach so we could handle dynamic requirements paid off down the road. When the list of questions to ask underwent a major change after the module had already been built, we were able to update 25% of the fields (nearly 100 changes) within a short timeframe so the system could be ready for the important annual reporting cycle.

**If it works for Gmail...**

To counteract this risk, DG developers implemented a feature we nicknamed “Gmail-style saving”.  **Every form saves regularly and automatically throughout the data entry process** -- so anything a user enters is backed up in realtime without requiring her to interrupt her workflow to save it manually.  


Having this mechanism as a core feature has helped the front-line users who are tackling a large data ask.  It sharply reduces the chance that data will need to be re-entered, even in low-bandwidth locations where connections can drop.  And it further enables users to break up the process of data entry: they can input information into the system as it becomes available and have it saved as a draft, so it’s not an all-or-nothing exercise.
By its nature – the UN is a big system doing a lot of things -– the IMS needs to collect a lot of information. (There are nearly 400 fields and counting in just the Coordination Profile.)  Even split up into separate sections, many of the forms remain large enough that if something went wrong in the middle of data entry -- a browser crash, a wonky internet connection – the user could be facing significant data loss.

**Ready to roll**

It’s one of the biggest challenges in monitoring and evaluation: how do you collect current, accurate data without asking too much of the people entering it?  Something we heard in [many conversations]({% post_url 2016-03-03-results-indicators-costs-benefits %}) with local staff during our [Results Data Initiative](http://rdi.developmentgateway.org/#/?_k=drk3zc) was how much of a burden it can be for them to report data on top of their other responsibilities.  Given how much information the IMS collects, both our team and the UN DOCO wanted to minimize the amount of work country officers would need to do -- while also making sure information is regularly updated.
 
To strike this balance, we developed a *targeted data rollover process*.  If you’re a desk officer in Peru, when you sit down in 2017 to submit Peru’s coordination data, you’ll find your forms are already populated with most of the information you entered in 2016.  With the UN, we identified what information was unlikely to change year-to-year and what information would need to be updated annually.  Data in that first category is rolled over to the following year for every country: users review it and make updates where necessary, but they don’t need to re-enter information that hasn’t changed.   

{% inlineimage post-center 4 %}

For data in the second category, information that must be updated every year, those fields remain blank and users enter the new values.  


On the technical side, we didn’t want this annual data migration to be a manual or one-time process.  Because of the large number of questions collected through the forms, we needed a more general implementation of the rollover feature.  Chances are high that with 400+ fields, some will need to be added or removed in the future.  This is the concept of *system entropy*, which is directly proportional to the amount of data collected: more data means more ways it will need to be accessed or changed.  So we found an elegant solution using Java annotation and reflection feature. Now we can mark which fields should be rolled over by just typing a couple of keystrokes.

This feature **saves users from mandatory re-entry of data for over 89% of fields** in the Coordination Profile.  Multiply those hours saved by 131 UN Country Teams, every year, and suddenly UN offices have a lot more time free to work on other things.


So now what happens to all that carefully collected data? Stay tuned for part 2, on how we applied this same “flexibility + usability” approach to the IMS reports and data visualizations.

*DG's IMS Team: Catalin Andrei, Carmen Cañas, Octavian Ciubotaru, Taryn Davis, Ionut Dobre, Galina Kalvatcheva, Paige Kirby, Mihai Postelnicu, Martha Staid, Llanco Talamantes*

*Image: [RHiNO NEAL](https://www.flickr.com/photos/rhinoneal/8060238470/) [CC BY-NC-ND 2.0](https://creativecommons.org/licenses/by-nc-nd/2.0/)*
