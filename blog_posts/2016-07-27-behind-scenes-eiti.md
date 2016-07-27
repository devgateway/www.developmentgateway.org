---
layout: post
author: Liliana Mercado
title: "Behind the Scenes of EITI.org"
excerpt: Last winter, DG began working with the Extractives Industries Transparency Initiative (EITI) Secretariat...
thumbnail: assets/post-images/eitinew.jpg
thumbnail-alt: 'EITI website'
images:
  - url: assets/post-images/EITI-import.jpg
    alt: "import process"
    caption: "Diagram of the Automatic Summary Data Import Process"
categories: [Open Data, Innovation]
---

Last winter, DG [began working]({{ site.url }}/2015/12/08/new-partnership-eiti/) with the Extractives Industries Transparency Initiative (EITI) Secretariat on the development of a new global data portal, in support of the initiative’s work. A central tenet of EITI is that greater openness around the management of natural resources is essential for public debate, engagement, and accountability to ensure that a country’s natural resources benefit its citizens. 

**[We are pleased to announce that the EITI Data Portal was successfully launched at the secretariat’s annual board meeting, and has been populated with content over the last several weeks.](https://beta.eiti.org/)**

With each of the 51 EITI member countries disclosing extensive data and information, there was great potential to increase the accessibility and usability of this data. We sought to maximize this opportunity by building out [extensive front-end data visualizations]({{ site.url }}/2016/02/25/eiti-data-portal-demo/), to better communicate EITI’s work, and bring extractives data “to life” for technical and non-technical users. 

While “invisible,” no less important is the data portal’s back-end data management scheme. When creating these visualizations, one of the challenges we faced was ensuring data were available and up-to-date – challenging because different countries have different reporting schedules. To address this challenge, the DG team developed an **automatic summary data import process** to streamline the data input, validation, and dissemination process.

EITI candidate and member countries must send formatted summary data reports to the secretariat on a regular basis, that include data broken down by year. The automatic import process makes it easier for EITI staff to **input** this data, by allowing them to configure and automate which indicator (i.e., production or export volume) and government finance code (i.e., licenses or royalties) fields should be imported. Once the fields have been configured, the application runs an automated **process**, to determine whether or not all data included in the file has the required format, and whether existing data in the system must be updated, based on the new summary template information. The application can also apply conversions (i.e., currency, volume), and save this data to the database – EITI staff may also add non-summary report data (such as population) to the country profile, to provide additional context.

{% inlineimage post-center 1 include caption %}

The result? A mighty back-end and data management process, which serve as a cornerstone for a highly interactive portal to disseminate extractive data – with **outputs** including an [interactive map](https://beta.eiti.org/countries) and [customizable charts](https://beta.eiti.org/implementing_country/6#production-2011-2013), to a [country comparison tool](https://beta.eiti.org/data#eiti-reports-quick-summary-tool) and [data export](https://beta.eiti.org/summary-data). As an organization, we take pride in developing high-tech visualizations to foster data literacy and use; but just as importantly, we are also committed to developing back-end features and procedures to ensure sustainability and scalability.

