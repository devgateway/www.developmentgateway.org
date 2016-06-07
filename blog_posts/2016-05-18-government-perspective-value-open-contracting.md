---
layout: post
author: Josh Powell
title: "What’s in it for us? A Government Perspective on Getting Value from Open Contracting"
excerpt: As unlikely as it seems for public procurement to generate excitement worldwide, the past several years have seen the rise of...
thumbnail: assets/post-images/VN-tool.jpg
thumbnail-alt: 'VN Tool'
images:
  - url: assets/post-images/VN-tool.jpg
    alt: "VN-tool"
    caption: "*Figure 1: Vietnam e-procurement tool*"
categories: [Innovation, Open Data]
---

As introduced [last week]({{ site.url }}/2016/05/12/adding-value-government-procurement/), opening government data has tangible, and often significant implications for government in terms of staff costs, policy changes, and IT investment. Additionally, to avoid becoming one of many in the graveyard of empty, out-of-date, open data portals, governments need to plan for the sustainability of their open data project from the beginning. In Vietnam, the Public Procurement Agency (PPA) has been preparing for just that. In early 2015, our partners at the World Bank began seriously engaging PPA around the creation of a robust action plan, including goals to support the government’s priorities of **increasing the competitiveness, transparency and disclosure, time- and cost-efficiency, and compliance with the law** of public procurement in Vietnam. One part of this process was the publication of PPA’s data in the Open Contracting Data Standard (OCDS) format and through a public-facing procurement M&E dashboard. 

We’ve found that our work in Vietnam echoes lessons learned elsewhere – here are a few key steps in the process to keep in mind.

**Step 1: Defining Data Quality Through Use Cases**

Our partnership with PPA and the World Bank began in October, with an in-depth technical assessment that reviewed the existing systems used to capture public procurement information, and the data they contained. Notably, we employed a [user-focused]({{ site.url }}/2015/09/18/designing-human-centered-data-revolution/) definition of data quality together with PPA as the extent to which data are appropriate for 1) public disclosure in OCDS format, and 2) visualization of high-priority M&E indicators of procurement effectiveness. Happily, in many cases these two aligned well – and in other cases where gaps existed, we engaged with the OCDS Help Desk team on future enhancements to the standard. By tying data quality to these goals simultaneously, we can help PPA to have an ongoing internal use case to maintain quality, timely OCDS data: they need it to perform timely, comprehensive monitoring and evaluation of the public procurement system. In defining indicators, we did a detailed review of good practice in [Mexico](http://mexico.procurement-analytics.org/), Indonesia, Ukraine, and elsewhere, combined with a brainstorming of PPA ideas to create an M&E framework with 26 potential indicators.

*Note: The next 3 steps are “boring”, but critical and too often glossed over in the open data community. Bear with me!*

**Step 2: Diving Deep on Data Processes and Policies**

After gathering PPA’s requirements for its procurement M&E, selecting nearly 20 priority indicators to build into the M&E system, and assessing the data quality of each field underpinning those indicators, the next step was to determine how to address data quality gaps. Data in Vietnam come from two systems: eProcurement (eGP) and an offline procurement newspaper (Review), which the government is harmonizing into a common “core” data schema, so our recommendations to PPA’s data action plan fell under three categories:

1. Ensuring quality in key data fields within eGP,
2. Ensuring quality in key data fields within the Procurement Review, and
3. Ensuring timely “integration” of eGP and Procurement Review data (to be fed into the M&E System)

In some cases, new fields must be added to systems or made mandatory; in others, new validation processes are needed; in a select few, new circulars or policy documents requiring publication of key elements must be put in place to move things forward. PPA is currently putting many of these system, policy, and process recommendations into practice, which should ultimately result in meeting both objectives: **better open data for the public**, and **better M&E for the government**.

**Step 3: Presentation and Publication for Different Use Cases**

After deciding on M&E goals, the next step was to determine the best methods for visualizing indicators and opening data. The M&E system includes a combination of tables, graphs, and GIS mapping, each method matched as the best way to visualize a particular indicator. Filters and the ability to compare categories (e.g., procurement methods or suppliers) are also included to move beyond basic visualization to active and detailed analysis.

{% inlineimage post-center 1 include-caption %}

The [accessibility and language]({{ site.url }}/2015/09/15/data-sharing-access-language-context) of data publication are also critical. PPA committed to being one of the first countries to publish OCDS-compliant JSON, and plan to use OCDS in future integrations between the M&E system and a new eGP, showing tangible benefit to government from the use of the data standard (*Note: we will share more on the OCDS conversion process later, as well as our decision to use OCDS as the core of the M&E system – which will be open sourced for reusability in other countries*). However, to accommodate the average Vietnamese citizen, an excel export is also being built out prior to the public launch for greater usability.

**Step 4: Planning for Sustainability**

While ensuring the usefulness of data is critical in planning for sustainability, a focus on building local technical and functional capacity for long-term maintenance is equally important. Working with a local partner, DG and PPA are ensuring that the same local developers who maintain eGP are familiar with the code, and that the data updating process for the M&E system is automated with no manual effort required from PPA staff. This, combined with the use of an open source solution, will ultimately result in low cost, locally-owned, and easy-to-maintain open data *and* M&E platform.

*DG’s work in Vietnam is supported by the World Bank, through a combination of financial support and technical expertise. Up next: Road Testing OCDS.*
