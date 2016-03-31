---
layout: post
author: Gerald Mutuhu
title: "Development Gateway Launches the IATI Import Tool"
excerpt: "Since the launch of the IATI Data Standard, DG has been in the forefront in promoting its uptake and use..."
thumbnail: assets/post-images/IATITool5.jpg
thumbnail-alt: Successful IATI Import to AIMS
images:
  - url: assets/post-images/processors.jpg
    alt: "Processors"
  - url: assets/post-images/IATITool1.jpg
    alt: "Step 1"
  - url: assets/post-images/IATITool2.jpg
    alt: "Step 2"
  - url: assets/post-images/IATITool3.jpg
    alt: "Step 3"
  - url: assets/post-images/IATITool4.jpg
    alt: "Step 5"
  - url: assets/post-images/IATITool5.jpg
    alt: "Step 6"
categories: [Innovation, Aid Management]
---

Since the launch of the [IATI Data Standard](http://iatistandard.org/), DG has been in the forefront in promoting its uptake and use – particularly amongst national governments. 

A little over a year ago, we began a program which [sought to create sustainable integrations of IATI data]({{ site.url }}/2015/05/21/iati-and-country-systems-dg-working-paper/) across five nationally-owned Aid Information Management Systems (AIMS). One of the outcomes of this work were [recommendations](http://www.aidtransparency.net/wp-content/uploads/2015/11/Paper-8-Discussion-Paper-from-DG-Use-of-IATI-in-Country-Systems2.pdf) around proposed enhancements to the data standard and improvements to publisher quality. 

**Another result of this work, we are proud to share, has been the development of an [open source](http://www.apache.org/licenses/LICENSE-2.0) IATI Import Tool, [available to the public via GitHub](https://github.com/devgateway/iatiimport).** 

Fully integratable with AIMS – [Aid Management Platforms]({{ site.url }}/expertise/amp/) and other systems – the tool has already been used to import hundreds of millions of dollars of additional aid flow data into the AIMS of Burkina Faso, Chad, Cote d’Ivoire, Madagascar, and Senegal. Furthermore, this tool can be updated to support new versions of the IATI Standard, and now comes as a standard part of DG’s Aid Management Platform.

**Technology and Architecture**

The IATI Import Tool has been developed using the Spring Framework on the backend and ReactJS library on the frontend. The Spring Framework provides a comprehensive programming and configuration model for developing modern Java-based enterprise applications. ReactJS is an open source JavaScript library that makes it easy to develop reusable user interface components.

The tool has a flexible architecture, designed specifically to make the tool easily adaptable to future IATI versions and different AIMS. This flexibility is achieved through the use of data processing modules called “processors”. New processors can be added to support any source data or destination system.

{% inlineimage post-center 1 %}

The integration to an AIMS is done via REST API endpoints. Documentation of the endpoints that the AIMS system should provide is available on the IATI Import Tools’ GitHub page.
  
**User Workflow**

The IATI Import Tool has a user friendly user interface that is organized as a wizard, which takes users through the following steps:
 
*Step 1: Source Input*

{% inlineimage post-center 2 %}

The source input is uploaded into the system and processed. Currently we support IATI 1.03, IATI 1.04, IATI 1.05 and IATI 2.01. This can be easily expanded to support other types of data files, too – IATI and otherwise.

*Step 2: Filter Data*

{% inlineimage post-center 3 %}

The source activity/project information is then parsed and processed. The user can select the criteria of inclusion in the import process from a list of known fields, like “Status”, “Recipient Country”.

*Step 3: Choose Projects*

{% inlineimage post-center 4 %}

After applying filters, the next step returns only projects/activities that match the applied filters. In this step, a user can select which projects/activities to import. The user can also map the projects to existing projects in the destination system.

*Step 4: Choose Fields*

Users can now select and map fields that will be included in the import. The user can also save mappings for use in future imports.

*Step 5: Mapping Values*

{% inlineimage post-center 5 %}

This step allows users to map field values in the source file to values used in the destination system. These value mappings can be saved as a template, then selected from the “Load Existing Template” menu. This uses the previous mappings with the new file’s field values.

*Step 6: Importing*

{% inlineimage post-center 6 %}

Once the source files are processed and filtered, and their projects, fields, and values are mapped the destination system is contacted through a series of REST Endpoints with the new and/or updated project information

**Get Involved**

The IATI Import Tool is licensed under an [Apache 2.0 open-source license](http://www.apache.org/licenses/LICENSE-2.0), now comes as a standard part of the Aid Management Platform, and is compatible with other AIMS. If you are interested in using or extending the tool you can get it on our [GitHub repository](https://github.com/devgateway/iatiimport). Please also check the [wiki](https://github.com/devgateway/iatiimport/wiki) for additional documentation on how to integrate the tool with a target system, and [let us know about your experiences](jpowell@developmentgateway.org)!

