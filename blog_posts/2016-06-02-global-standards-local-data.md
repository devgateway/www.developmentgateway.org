---
layout: post
author: Josh Powell
title: "Global Standards, Local Data: OCDS in Vietnam"
excerpt: As countries line up commitments to publish data in the Open Contracting Data Standard (OCDS), an exciting and challenging...
thumbnail: assets/post-images/world.jpg
thumbnail-alt: 'World Data'
images:
  - url: assets/post-images/OC.jpg
    alt: "OC Success"
    caption: "*What success looks like*"
categories: [Innovation, Open Data]
---

As countries [line up commitments](http://www.cgdev.org/blog/huge-progress-open-contracting-london) to publish data in the Open Contracting Data Standard (OCDS), an exciting and challenging time lies ahead for the management and use of the global data standard. 

Scaling the use of any standard from a few “inner circle” early adopters to dozens of countries in the span of a few years implies a significant management challenge: balancing the need for a standard that meets the core needs of a growing user base, with the danger of developing a product unwieldy for broad access. Our experience in Vietnam working with the Ministry of Planning and Investment’s Public Procurement Agency (PPA) sheds some light on what implementing OCDS looks like for governments with pre-existing (“legacy”) systems, and provides some insight on how OCDS can remain a viable and vibrant standard for the open contracting community. 

In implementing OCDS in Vietnam, we followed a few key steps:

**Step 1: Database Diving and OCDS Mapping**

The first step was to review and understand the 100+ database tables in the government’s existing system. Our goal was to identify which tables contain fields relevant to OCDS, critical to understanding the procurement process in Vietnam (this builds on the use case identification process [discussed previously]({{ site.url }}/2016/05/18/government-perspective-value-open-contracting/). 

In the end, we pulled data from seven different tables to populate the database in the Vietnam Procurement Dashboard (more on this in a forthcoming post). Once the core fields were identified, the team mapped Vietnam’s data fields to their OCDS equivalents. Where OCDS “codelists” exist, we also mapped the values from Vietnam’s database to those OCDS codelist values. Finally, we analyzed data completeness and quality in these key fields to identify areas for improvement.

**Step 2: Tying Up Loose Ends – Extending/Updating the Standard** 

In some cases, fields that were important for Vietnam’s government use cases are not currently represented in OCDS. For these fields, the team engaged directly with the Open Contracting Partnership’s [help-desk](http://standard.open-contracting.org/latest/en/support/) (a free resource for countries and organizations who are working to adopt OCDS) to discuss whether:

a) The field is useful for many countries and should be considered for inclusion in the standard, or
b) The field is specific to Vietnam and should simply be registered as an extension to OCDS for this dataset

Based on this consultation, several new fields have been proposed for inclusion in the next upgrade to the standard (here’s one [example](https://github.com/open-contracting/standard/issues/317)). You will notice that there is a particularly active community, with each open “ticket” typically receiving feedback from multiple stakeholders - this helps to result in a sharper, more useful standard.

**Step 3: Converting and Validating**

Once we had our initial field mappings in place, we worked in two streams. First, we shared that mapping with the OCDS Help Desk for peer review/feedback. Second, we began the technical process of converting the tabular data from the government’s eGP system into OCDS JSON. To convert the data, we created a custom import process into the dashboard application being built for the government, which uses OCDS as its core data structure (more on this in our next post). 

Based upon a collaborative process with the OCP Help Desk, we have since made several updates and modifications, resulting in data that more uniformly and completely adhere to the standard. We used the free OCDS validation tool to gauge our progress.

{% inlineimage post-center 1 include-caption %}

**Step 4: Going Live – Handling Data Updates**

[Warning: caffeinate before reading] 

After creating OCDS JSON once, the next step is to enable frequent data updates. To do this, we have been working on an automated integration with the eGP system, which will result in daily updates of Vietnam’s OCDS data. However, doing live updates to the data also requires handling updates to individual records (e.g. as a bid plan is opened to tender or a tender is awarded). Doing this requires version control through handling of OCDS “releases” – which essentially function as linked “snapshots” of the same procurement activity at different periods in time. This presents its own set of challenges in meeting the needs of:

1) maintaining releases for all records, while 
2) maintaining a database that is lightweight and efficient in running queries for the dashboards. 

When adding 200,000+ new records per year and multiple releases per record requires an elegant architecture, which we will discuss in more detail in our next post. We are also building in our own validator to be run as part of the import process, ensuring that we retain OCDS compliance with each new wave of data.

**Step 5: Data for Humans – JSON’s Not for Everyone**

Of course, the goal of standards are not system interoperability or standardization alone. Ultimately, **data standards should facilitate the use of data by as many stakeholders as possible**. While many “inner circle” OC stakeholders are techie, the majority of users who we hope will benefit from these data are [lowly humans like me]({{ site.url }}/2015/09/15/data-sharing-access-language-context/). So, we are building tools to allow users to interact with the information through charts/graphs, filter through data to answer specific questions, and download through a robust CSV/XLS export functionality (using the [OCDS flattened standard](http://standard.open-contracting.org/latest/en/implementation/serialization/)) to enable true data accessibility.

*Up next: Under the Hood – Building an Open Source OC Platform.*

*Image Credit: [Michael Coghlan](https://www.flickr.com/photos/mikecogh/5280585822) [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)*

