---
layout: post
author: Monicah Njonjo and Viorel Chihai
title: "Strengthening Public Financial Management in Uganda: Connecting DMFAS and AMP"
excerpt: >-
  Earlier this year, we successfully linked the Uganda Aid Management Platform (UAMP) and the country’s Debt Management and Financial Analysis System (DMFAS). This linkage represents the first integration between an aid information management system and DMFAS, a tool developed by UNCTAD and used in over 50 countries....
thumbnail: assets/post-images/finance.jpg
thumbnail-alt: "financial data"
images:
  - url: /assets/post-images/UgandaDFMAS.png
    alt: "Uganda DFMAS"
    caption: "*Figure 1: Uganda’s Budget Integration Workflow*"
categories: [Aid Management]
published: true
---

Earlier this year, we successfully linked the [Uganda Aid Management Platform]({% post_url 2014-11-21-ugandas-development-information-goes-public %}) (UAMP) and the country’s Debt Management and Financial Analysis System (DMFAS). This linkage represents **the first integration between an aid information management system and DMFAS**, a tool developed by UNCTAD and [used in over 50 countries](http://unctad.org/divs/gds/dmfas/who/Pages/Our-clients.aspx). The entire community of DMFAS and AMP users can now benefit from this experience and work. This linkage allows DMFAS to export its public debt-related project details to UAMP -- providing a fuller picture of development activities to UAMP users. We used the IATI framework to build a tool that processes data files from DMFAS. 

Connecting the two systems will (i) improve data accuracy, by eliminating the potential for human error during a data exchange; (ii) save time on data entry, making information management more efficient; and (iii) enhance the collaboration and coordination between the government’s aid and debt management divisions.

***What is DMFAS, and why did the Government want to integrate it with UAMP?***

DMFAS is a programme managed by the [United Nations Conference on Trade and Development](http://unctad.org/divs/gds/dmfas/Pages/default.aspx) (UNCTAD). It aims to assist countries in developing administrative, institutional and legal structures for effective debt management, by providing technical assistance and debt management systems. In Uganda, DMFAS supports technical cooperation between the Ministry of Finance and Economic Development (MoFED) -- home to UAMP -- and the Bank of Uganda, around monitoring and evaluating public-sector debt. 

But why link DMFAS and UAMP? Because DMFAS’ debt-related projects are an important part of Uganda’s development portfolio, and should be taken into account when determining national development priorities. Before this link, government officials had to take information from DMFAS and manually re-enter it into AMP -- representing a duplication of efforts, and a burden on staff time. 

***How did we approach the integration?***

The integration can be broken down into 3 steps:

1. Technical Assessment: This involved going on mission to Uganda in order to examine DMFAS’ architecture, and evaluate what and how data are stored in the system.This was needed in order to determine  the best way to develop an interface between the two systems.

2. Solution Design: Based on the technical assessment report, we created a “plan of action” to enable the two systems to communicate. A key component of this step was  mapping the fields and data between the systems, to ensure the terminologies of each were interpreted and “mapped” correctly.

3. Integration: Finally, we installed and configured the tool to read the data files provided by DMFAS, process each of them, and save the individual projects in UAMP.

We considered a number of technical options for the integration --  all of them file-based. So, we decided to transfer the DMFAS exported files via a shared folder. 

Using IATI as the format of exchange with DMFAS wasn’t possible, because DMFAS is not project-oriented. Therefore, we decided to create a new tool which reads the data and imports it into AMP. We reused some of the modules from our [IATI Import Tool]({% post_url 2016-03-31-launch-iati-import-tool %}), and developed a Budget Integration Tool for the Government of Uganda. 

This new tool was developed using the Spring Framework, because this provides a comprehensive programming and configuration model for developing modern Java-based enterprise applications. The tool has a flexible architecture, designed specifically to make it easily adaptable to other Budget Integrations. This flexibility is achieved through the reuse of IATI data processing modules called “processors”. New processors can be added to support different data or destination system. The integration with AMP is done via REST API endpoints. Documentation of the endpoints that the AMP system should provide is available on the IATI Import Tool’s [GitHub page](https://github.com/devgateway/iatiimport).

Once the source files are processed and filtered, and their projects, fields, and values are mapped, the destination system is contacted through a series of REST Endpoints with the new and/or updated project information.

{% inlineimage post-center 1 include-caption %}

The result? An automated import process for bringing DMFAS data into UAMP. Before this integration, MoFED staff had to manually re-enter DMFAS data into UAMP, representing (i) a burden on staff time, (ii) likely delays in updating data, and (iii) possibility of human error during data re-entry. Now, thanks to the Budget Integration Tool, data can be easily shared as-is from DMFAS to UAMP, the divisions can more easily collaborate and coordinate, and government staff can spend more time on managing and using the data for better decision-making. And in the future, other countries that have implemented an aid information management system and DMFAS can more easily integrate these systems.

*Image: [Ars Electronica](https://www.flickr.com/photos/arselectronica/7650332104/) [CC BY-NC-ND 2.0](https://creativecommons.org/licenses/by-nc-nd/2.0/)*

