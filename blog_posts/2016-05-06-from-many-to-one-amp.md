---
layout: post
author: Julian de Anquin
title: "From Many to One: AMP’s New Reports API"
excerpt: AMP has a highly complex technical structure to calculate...
thumbnail: assets/post-images/GISlayer.jpg
thumbnail-alt: 'GIS Layer'
images:
  - url: assets/post-images/gisconsume.jpg
    alt: "GIS consume"
    caption: "*Figure 1: GIS layer consuming a report to calculate funding information*"
  - url: assets/post-images/GISlayer.jpg
    alt: "GIS layer"
    caption: "*Figure 2: GIS module showing funding information for health sector*"
  - url: assets/post-images/GISreport.jpg
    alt: "GIS Report"
    caption: "*Figure 3: Report matching GIS figures*"
  - url: assets/post-images/execution.jpg
    alt: "Execution"
    caption: "*Figure 4: Execution time in seconds of reports after the new module was built, compared to old times*"
categories: [Innovation, Aid Management]
---

The Aid Management Platform (AMP) – the software component of DG’s [Aid Management Program]({{ site.url }}/expertise/amp/) – has a highly complex technical structure to calculate how funding information will be reported throughout the system’s modules. Given the needs of Ministries of Finance (AMP users), funding information needs to be disaggregated at activity level based on sectors, programs, and locations, and then a percentage of incidence is assigned to each activity. This disaggregation is then split among each transaction. When the transaction amount is in a currency different than the one in the report, a currency conversion process is executed.

The problem we faced was that some of AMP’s modules – like dashboards, GIS, activity preview – used to access the data layer directly, with their own funding calculation mechanisms. This approach created some performance issues, since the database was being accessed directly without any specific optimizations. It also made the code difficult to maintain, because in some cases the code that performed the calculations was not separated from the visualization layer. This means it was duplicated both in the reports engine side, as well as in the GIS layer. Having the calculation isolated and duplicated also required increased testing to ensure figures matched correctly with the ones calculated in the reports and other modules.

To address these problems, as part of an AMP software reengineering project, DG created a **Reports API**. It consists of a set of RESTful endpoints that expose the report engine which allows other modules or systems to make use of it. The Reports API was designed to have a centralized place in which AMP data is exposed, guaranteeing data integrity, accuracy, and maintainability. 

{% inlineimage post-center 1 include-caption %}

For example, in the Reengineered GIS the funding is calculated in a single place. In order to aggregate funding to be shown in the GIS layer, a programmatic report is created with the same structure and metadata as a report that you could create and run in the report module. This new approach guarantees the accuracy of data, because the funding information was calculated using a report. Hence testing, optimization, and maintenance efforts are centralized in the report module,dramatically lowering the efforts needed in each development cycle.

{% inlineimage post-center 2 include-caption %}

{% inlineimage post-center 3 include-caption %}

One of the advantages of having this centralized implementation of Reports API is that it makes a software developer’s life easier. This simple and unique way of getting data allows team members to focus on the module they are actually working on, for example GIS. DG implemented the Reports API using industry standards, such as modularized code and methods documentation

Another advantage is that it makes easier to modify the underlying report engine, as long as the API is kept compatible. 

The next release of AMP (2.12) will include a major optimization of the Report Engine, which will have minimal impact in modules that use the Reports API (Dashboards, GIS, Report Renderer, Tabs). By having this API the development team focuses its effort in optimizing the backend, leaving the front-end almost unchanged, improving reports performance by several orders of magnitude. 

{% inlineimage post-center 4 include-caption %}
