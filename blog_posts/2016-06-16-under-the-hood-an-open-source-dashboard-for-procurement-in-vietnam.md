---
layout: post
author: "Mihai Postelnicu"
title: "Under the Hood: An Open Source Dashboard for Procurement in Vietnam"
excerpt: The development community spends over $2 billion each year collecting data on...
thumbnail: assets/post-images/PPA-Screenshot.png
thumbnail-alt: "Screenshot of Public Procurement Agency"
images:
  - url: assets/post-images/PPA-Results-Data.png
    alt: "PPA Results Data Screenshot"
  - url: assets/post-images/PPA-Data-Flow.png
    alt: "PPA Data Flow Architecture"
categories: [Open Data, Innovation]
---

In partnership with the World Bank, Development Gateway has been working to [support the Government of Vietnam’s Public Procurement Agency (PPA)]({% post_url 2016-05-18-government-perspective-value-open-contracting %}) in its efforts on open contracting and procurement monitoring and statistics. The Open Contracting Vietnam (OCVN) project is based upon government priorities for monitoring and disclosing data on procurement. We co-designed a dashboard with PPA to i) analyze its key questions and performance metrics through real-time data, ii) publish open contracting data in the [Open Contracting Data Standard (OCDS)](http://standard.open-contracting.org), iii) make procurement data available and understandable to the public, and iv) identify areas for data quality improvements that PPA can target to improve its management mandate. This dashboard, which will be publicly launched in the fall, is built with open source tools and its source code is licensed under the open source [MIT](https://opensource.org/licenses/MIT) license.

Before diving into the technical details of the tool, here are a few thoughts on why this matters. By creating an open source application, based natively on OCDS JSON storage, DG (and others!) can more quickly deploy, integrate, and customize dashboard applications with a variety of existing procurement data sources and eProcurement systems. Using this application also can ensure more robust OCDS compliance, as DG has collaborated with the OCDS Help Desk to ensure that data mappings and structures are represented correctly. All in all, this means faster implementation, lower costs, and greater potential for peer learning and network benefits as more countries adopt, adapt, and benefit from this exciting new tool. Stay tuned for updates in the coming months on who and how this application is being used.

{% inlineimage post-center 1 %}

Note: The next section is for the technical-minded (if JSON sounds like a boy’s name to you, you’ve reached the end of your journey)

**DG’s Open Source Toolkit: The Core of OCVN**

[DG-Toolkit](https://github.com/devgateway/dg-toolkit) is an open source project, built as a result of an internal innovation challenge at Development Gateway. We use it as a “jump start” in many projects, frequently adding new features to the Toolkit to serve as a strong foundation to any application. The Toolkit has the aim of creating a boilerplate template for small and medium sized DG projects. It is created as a mavenized multi-module project. Each module can be started independently of the rest. All modules are based on [Spring Boot](http://projects.spring.io/spring-boot/) templates. Modules currently present, that are also being used by OCVN:

- [persistence](https://github.com/devgateway/dg-toolkit/tree/master/persistence) - this is a module responsible with [JPA 2.0](https://en.wikipedia.org/wiki/Java_Persistence_API) data persistence. It is also provides [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) services on top of the existing entities.
- persistence-mongodb - this module is responsible for persisting data to a non-RDBMS data storage, in our case MongoDB, This is achieved through the same repositories mechanism that spring-data provides, but this time for NoSQL instead of JPA.
- [web](https://github.com/devgateway/dg-toolkit/tree/master/web) - this module provides REST endpoints for the services needed, as well as basic security. It depends on the persistence module.
- [forms](https://github.com/devgateway/dg-toolkit/tree/master/forms) - this module provides a basic toolkit for quickly building forms over the entities defined in the persistence module. It uses [Apache Wicket](http://wicket.apache.org/) as the backend. We use an extension of the forms module in OCVN to manage users and drive the import process.
- [ui](https://github.com/devgateway/dg-toolkit/tree/master/ui) - this module is a template for building front-end functionality. It is supposed to work in conjunction with the webmodule as the back-end. It is based on [React](https://facebook.github.io/react/) and [NuclearJS](https://optimizely.github.io/nuclear-js/). The Maven build integration is assured by [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin) which invokes [npm](https://www.npmjs.com/) and [webpack](https://webpack.github.io/). The UI module can be used by both UI developers, with no need of knowledge or Java/Maven local setup and by the back-end developers, with no need to have [node](https://nodejs.org/) installed on their system.

**OCVN Architecture and Data Flow (from eGP to OCDS)**

Each module of OCVN can be started independently of the rest. You can, for example, start only the module that provides the endpoints, and the module that displays the dashboards, but skip anything else (like the forms module which can be used to build complex data entry/administrative forms). All modules are based on [Spring Boot](http://projects.spring.io/spring-boot/) templates.

Below, you can see an architecture diagram of the data flow, as the application imports the excel file generated by eGP (Vietnam’s procurement platform) into a relational database, where [OCDS mappings](http://www.developmentgateway.org/2016/06/02/global-standards-local-data/) are applied and the data is transformed and stored in a NoSQL (MongoDB - see below) storage as OCDS JSON. From MongoDB, the data can either be exported (as JSON or XLS) or aggregated through endpoints in the web module (see above), which fuel the visualizations in the dashboard interface (see UI above).

{% inlineimage post-center 2 %}

**Storage**

Because the OCDS format is JSON based, and the conversion mechanism is one way, importing excel files into the storage, and since the stored data is not modified later, we have chosen MongoDB as the database, with the WiredTiger storage engine, providing non-locking algorithms for accessing the data. This provides us with the very fast throughput that MongoDB provides as well as the [Aggregation Engine](https://docs.mongodb.com/manual/aggregation/) that MongoDB. Since the data is natively stored in the OCDS format, it can be readily exported in this format without any transformation required, and with great throughput.

**Analytics**

MongoDB Aggregation engine provides a lightning fast Business Intelligence (BI) stack on top of the data store which allows the system to feed the charts data in real time, directly from the database, without any buffering, caching, ETL process or extra tools. This greatly simplifies the architecture of the tool.
