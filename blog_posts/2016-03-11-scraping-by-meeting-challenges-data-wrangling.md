---
layout: post
author: Katherine Wikrent
title: "Scraping By: Meeting the Challenges of Data Wrangling"
excerpt: "A key component of DG’s Results Data Initiative (RDI) is finding innovative ways to compare results data across donors..."
thumbnail: assets/post-images/UNDPunstructure.jpg
thumbnail-alt: 'Structured Data'
images:
  - url: assets/post-images/OpenAlts.jpg
    alt: "Open Alts"
    caption: "*Figure 1: A Source of Inspiration – Open Alternatives to Non-Open Formats*"
  - url: assets/post-images/UNDPstructure.jpg
    alt: "UNDP Structure"
    caption: "*Figure 2: Documenting Excellence: UNDP Structured Documentation*"
  - url: assets/post-images/UNDPunstructure.jpg
    alt: "Bad Data"
    caption: "*Figure 3: When Good Data Go Bad*"
  - url: assets/post-images/Rankingresults.jpg
    alt: "Results Ranking"
    caption: "*Figure 4: Cross Organizational Comparison of Quality Reporting*"
categories: [Results Data, Innovation]
---

A key component of DG’s [Results Data Initiative]({{ site.url }}/expertise/results/) (RDI) is finding innovative ways to compare results data across donors and geographies. In order to support DG’s successes in [crosswalking data]({{ site.url }}/2015/12/02/crosswalk-data-relationships/) and conducting [qualitative field assessments]({{ site.url }}/2016/01/20/takeaways-from-first-ghana-country-visit/), our data team has used its collective brainpower and finest wrangling skills to meet the many challenges of finding and relating these disparate data. What follows is a summary of the key challenges we have overcome in our wrangling and scraping efforts, as well as examples of promising practices across organizations.

**I: Key data are unavailable to the public**

To crosswalk results across organizations, we search through project documentation to find information about quantitative outputs.  A primary challenge with this scraping process is that critical documents and data are often missing or unavailable publically. The availability of project and documents varies widely across donors, but a recurring trend we have seen is that within organizations, data openness and publication policies are unclear or inconsistent.

The World Bank stands out as a promising organization for its [documented commitment to data openness](http://www.worldbank.org/en/topic/opendevelopment/overview). In addition to explicitly laying out its [policy on access to information](http://www.worldbank.org/en/access-to-information/overview#1), the World Bank also maintains several publically accessible data portals, including the [World DataBank](http://databank.worldbank.org/data/home.aspx) and [Microdata Library](http://microdata.worldbank.org/index.php/home). Opening up its enormous repertoire of data to the public is an excellent strategy to promote institution-wide accountability and transparency, and may also result in the innovative use of public data by stakeholders across sectors.

**II:  Data are not available in open formats**
Even organizations that do commit to publically release data often do not offer these data in open formats. To be considered open data, a document must be both [freely available to the public as well entered in machine-readable formats](http://data.worldbank.org/node/2557). Machine-readable documents are able to be automatically read by computer software, and include formats such as .csv, .xml, and .json. A key benefit of machine-readable documents over human-readable formats such as .xls and .pdf is that they are not tied to any particular software; indeed, they can be analyzed by any member of the public using a variety of softwares, including open source tools. Offering any citizen the chance to independently access and analyze data in an unrestricted fashion further enhances transparency and accountability, and encourages the reuse of these data across the public, private, and nonprofit sectors. So important is the use of open source formats that President Obama recently released an [Executive Order](https://www.whitehouse.gov/the-press-office/2013/05/09/executive-order-making-open-and-machine-readable-new-default-government-) mandating that open data now be the government standard.  Below is a comparison of commonly used open and non-open formats.

{% inlineimage post-center 1 include-caption %}

DFID is a great example of an organization dedicated to open data formatting. In 2012, it officially declared its commitment to open data in an [Open Data Strategy](https://data.gov.uk/library/dfid-open-data-strategy), which includes a pledge to enter project data into the [IATI Registry](http://www.iatiregistry.org/). DFID now offers [project documentation in open formats](https://devtracker.dfid.gov.uk/), including project descriptions in .odt.
 
**III: Organizations utilize suboptimal reporting mechanisms**

Our analysis of both open and non-open project documentation is complicated by the absence of standardized report formats. Standardized forms allow our data analysts to quickly retrieve the information they need in a systematic and replicable way. Complicating the matter further, as discussed in Section I, some organizations that do have standardized report forms don’t always make the completed documents available to the public.

In tandem with our manual scraping efforts, the team is hard at work developing a series of [machine learning scraping algorithms](http://www.developmentgateway.org/2016/02/04/art-of-data-science/). The potential of these algorithms is enormous: the ability to accurately scrape information from projects completed across the world in a fraction of the time it would take to do so manually. Project documentation released in standardized formats would enable these algorithms to function optimally. 

UNDP does an excellent job of standardized reporting through offering project managers a set of [project documentation templates](http://web.undp.org/evaluation/handbook/templates.html), including one for annual work plans and another for results frameworks. As shown below, the annual work plan for the [Community Resilience Through Early Warning](http://open.undp.org/#project/00072067) (Crew) project clearly and systematically reports activities and sub activities and their corresponding expenditures. Due to agency-wide use of these standardized formats, UNDP annual work plans would be a prime candidate for scraping with a data-mining algorithm. 

{% inlineimage post-center 2 include-caption %}

While we applaud any organization that makes their project documentation available to the public, we find particularly challenging the methods certain organizations employ to release these data. Across organizations, we have seen instances in which even recent project documents are partially or completely illegible. Take, for instance, this standardized form employed to track outcome targets and projects. Though the form likely began as a “best practices” example—a standardized, open format spreadsheet that clearly linked achieved outputs to targets—over the course of the project cycle, it was printed, scanned, converted into an image file, and then size reduced. The result is a low-resolution, unscrapable, and almost completely illegible file. As a result, we were unable to enter this project’s information into our database for further analysis, in spite of the fact that robust data for the project does exist.

{% inlineimage post-center 3 include-caption %}

Though our body of total project documentation is vast, our sample size of quality documents remains low. Here, we define “quality” as public, free, machine-readable (or at least relatively easily convertible), standardized datasets and forms that clearly quantify numeric outputs. A summary of the project documentation we have collected for health and agriculture projects in Ghana is below.  As providing quality data can only help organizations track progress and increase accountability and transparency in the short term, and generate deeper, most sustainable outcomes in the long term, we encourage all organizations to release quality, robust output information for all their projects.

{% inlineimage post-center 4 include-caption %}

The data team at DG has gained important knowledge about the challenges of tracking down and extracting information from project documentation through its data wrangling efforts. We are pleased that for every complication we have encountered, there are examples of organizations that have committed the necessary resources to reporting their project outputs in more transparent, robust, and standardized ways. DG is looking forward to using this knowledge to improve on its own cross-project analysis and develop a set of most promising practices in results reporting.
