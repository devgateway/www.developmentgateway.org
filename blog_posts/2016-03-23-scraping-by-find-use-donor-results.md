---
layout: post
author: Katherine Wikrent
title: "Scraping By: What It Takes To Find and Use Donor Results Data "
excerpt: "A key component of DG’s Results Data Initiative (RDI) is finding innovative ways to compare results data across donors..."
thumbnail: assets/post-images/UNDPstructure.jpg
thumbnail-alt: 'Structured Data'
images:
  - url: assets/post-images/DFATDProject.jpg
    alt: "Open Alts"
    caption: "*Figure 1: DFATD Project Page*"
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

A key component of DG’s [Results Data Initiative]({{ site.url }}/expertise/results/) (RDI) is finding innovative ways to compare results data across donors and geographies. In order to support DG’s successes in [crosswalking data]({{ site.url }}/2015/12/02/crosswalk-data-relationships/) and conducting [qualitative field assessments]({{ site.url }}/2016/01/20/takeaways-from-first-ghana-country-visit/), has created new approaches to find, extract and relate results data from different development organizations.  But finding – much less exporting and using – results data from across the development community is no easy task. For example, consider [Publish What You Fund’s](http://www.publishwhatyoufund.org/) (PWYF) rigorous cross-donor analysis of transparent funding, the [Aid Transparency Index (ATI)](http://ati.publishwhatyoufund.org/index-2014/results/).  In its most recent report, PWYF found that only [15 of 68 included donors](http://ati.publishwhatyoufund.org/index-2014/explore-the-data/) excel in transparent reporting, whereas over a half rank in the “Poor” and “Very Poor” categories.  PWYF notes significant challenges in transparent reporting, with major barriers to overcome in consistent publication of [activity-level and results information](http://ati.publishwhatyoufund.org/mainfinding/performance-across-indicators/); only 6 organizations scored above 80% for cohesive results data reporting. 
 
Donors across the board, from [World Bank](http://web.worldbank.org/WBSITE/EXTERNAL/COUNTRIES/LACEXT/EXTLACREGTOPPUBSECGOV/0,,contentMDK:20874483~pagePK:34004173~piPK:34003707~theSitePK:832592,00.html) to [USAID](https://www.usaid.gov/sites/default/files/documents/1868/USAIDEvaluationPolicy.pdf), recognize that M&E should be a vital tool for improving operations and staying faithful to mission statements. The ability of a donor to track progress and recalibrate efforts to be responsive to local needs starts with the collection and dissemination of robust and accurate project-level data. And many donors are working to make this results information more transparent and accessible to external users. 

Still, there are major opportunities for donors to improve the consistency and quality of their results data reporting.  Our work highlights the challenges that keep data users from easily obtaining and using information about donor results.  Here, we will highlight the key challenges we have overcome in our efforts to extract and relate results data, as well as provide examples of promising practices that reporting organizations should adopt and improve on. 


**I: Key data are unavailable to the public**

To crosswalk results across organizations, we search through project documentation to find information about quantitative outputs.  A primary challenge with this scraping process is that critical documents and data are often missing or unavailable publicly.  Of our sample of 395 Health and Agriculture projects in Ghana, for example, 88 (22%) were missing project documentation of any sort, and 222 (56%) were missing output-oriented documentation.  The availability of project and documents varies widely across donors, but a recurring trend we have seen is that within organizations, data openness and publication policies are unclear or inconsistent.

The World Bank stands out as a promising organization for its [documented commitment to data openness](http://www.worldbank.org/en/topic/opendevelopment/overview). In addition to explicitly laying out its [policy on access to information](http://www.worldbank.org/en/access-to-information/overview#1), the World Bank also maintains several publically accessible data portals, including the [World DataBank](http://databank.worldbank.org/data/home.aspx) and [Microdata Library](http://microdata.worldbank.org/index.php/home). Opening up its enormous repertoire of data to the public is an excellent strategy to promote institution-wide accountability and transparency, and may also result in the innovative use of public data by stakeholders across sectors. As a consequence of its data openness policy, World Bank scores highest on output availability: 23% of all projects boast publicly accessible output data.

DFATD scores second highest, with 17% of all projects containing output information. Unlike World Bank, however, DFATD does not report its information in through a central portal of project documents. Instead, DFATD publishes basic project information like funds allocated and start and end dates and output and outcome information directly onto individual project pages through the [Global Affairs Canada](http://www.international.gc.ca/department-ministere/open_data-donnees_ouvertes/dev/index.aspx?lang=eng) website. Though the contained information can be downloaded in CSV or XML formats, this reporting scheme isn’t as desirable as the structured, semi-standardized forms provided by World Bank because their heavy formatting and largely qualitative nature do not lend themselves to automated scraping. An example of a typical DFATD project page is below.

{% inlineimage post-center 1 include-caption %}

**II:  Data are not available in open formats**

Even organizations that do commit to publicly release performance data often do not offer these data in [open (free, public, machine readable) formats](http://opendatahandbook.org/guide/en/what-is-open-data/). Open data allow citizens to access and analyze data in an unrestricted fashion. The innovative use and reuse of open data can [spark innovation](http://www2.deloitte.com/content/dam/Deloitte/uk/Documents/deloitte-analytics/open-data-driving-growth-ingenuity-and-innovation.pdf) in both the public and private sectors. The White House estimates that the value of innovative reuse of GPS data, for example, exceeds [$90 billion USD](https://www.whitehouse.gov/blog/2012/07/12/open-data-clean-secure-energy-future) annually. This universalization of information promotes transparency and accountability, and encourages the reuse of these data across the public, private, and nonprofit sectors.  

DFID is a great example of an organization dedicated to open data formatting. In 2012, it officially declared its commitment to open data in an [Open Data Strategy](https://data.gov.uk/library/dfid-open-data-strategy), which includes a pledge to enter project data into the [IATI Registry](http://www.iatiregistry.org/), a global database of aid transparency information from nearly [400 publishers](http://iatiregistry.org/publisher). DFID now offers [project documentation in open formats](https://devtracker.dfid.gov.uk/), including project descriptions in .odt.
 
**III: Donors don’t use standardized report templates**

Our analysis of both open and non-open project documentation is complicated by the absence of standardized report formats.  Our data analysts are able to construct systematic and replicable data scrapes for donors that have an internally standardized system, avoiding the time and resource drain that comes from manually pulling data from documents not standardized at the organizational level.  Complicating the matter further, as discussed in Section I, some organizations that do have standardized report forms don’t always make the completed documents available to the public.

In tandem with our manual scraping efforts, the team is hard at work developing a series of [machine learning scraping algorithms](http://www.developmentgateway.org/2016/02/04/art-of-data-science/). The potential of these algorithms is enormous: the ability to accurately scrape information from projects completed across the world in a fraction of the time it would take to do so manually. Project documentation released in standardized formats would enable these algorithms to function optimally. 

UNDP does an excellent job of standardized reporting through offering project managers a set of [project documentation templates](http://web.undp.org/evaluation/handbook/templates.html), including one for annual work plans and another for results frameworks. As shown below, the annual work plan for the [Community Resilience Through Early Warning](http://open.undp.org/#project/00072067) (Crew) project clearly and systematically reports activities and sub activities and their corresponding expenditures. Due to agency-wide use of these standardized formats, UNDP annual work plans would be a prime candidate for scraping with a data-mining algorithm. 

{% inlineimage post-center 2 include-caption %}

While we applaud any organization that makes their project documentation available to the public, we find particularly challenging the methods certain organizations employ to release these data.  Across organizations, we have seen instances in which even recent project documents are partially or completely illegible.  Take, for instance, this standardized form employed to track outcome targets and projects.  Though the form likely began as a “best practices” example—a standardized, open format spreadsheet that clearly linked achieved outputs to targets—over the course of the project cycle, it was printed, scanned, converted into an image file, and then size reduced.  The result is a low-resolution, unscrapeable, and almost completely illegible file.  As a result, we were unable to enter this project’s information into our database for further analysis, in spite of the fact that robust data for the project does exist.

{% inlineimage post-center 3 include-caption %}

Though our body of total project documentation is vast, our sample size of quality documents remains low.  Here, we define “quality” as public, free, machine-readable (or at least relatively easily convertible), standardized datasets and forms that clearly quantify numeric outputs.  A summary of the project documentation we have collected for health and agriculture projects in Ghana is below.  Providing quality data can only help organizations [track progress and increase accountability and transparency](http://www.developmentgateway.org/2016/02/23/what-aid-donors-accomplish/) in the short term, and generate deeper, most sustainable outcomes in the long term. [Specific benefits](https://www.ifad.org/documents/10180/114b7daa-0949-412b-baeb-a7bd98294f1e) of improving M&E systems include: uniting teams around a shared vision; creating an environment of knowledge sharing; guiding project and program strategy; efficiently allocating resources; engaging local stakeholders; increasing responsiveness to local needs; learning from project setbacks and successes; recognizing and fixing flawed systems; and meeting project targets and milestones on time.  Given the massive internal and external benefits of opening data, we encourage all donors to take steps to reform their data management systems and release quality, robust output information for all their projects.

{% inlineimage post-center 4 include-caption %}

**Next Steps: (Out)putting Your Money Where Your Mouth Is**

Most donors recognize that the [benefits of democratizing data access](http://opendatahandbook.org/guide/en/why-open-data/) are colossal. In spite of this, no donor in our sample provides consistent and robust project-level data. The challenges our team has faced in extracting output data from project documents highlights just how much opportunity there is for donors to improve the quality of their monitoring systems. Fortunately, the commitments many donors have made to open their data have illuminated concrete steps that organizations can take to improve the quality of their reporting schema. DG is hard at work synthesizing these “most promising practices” into a “0-to-data” toolkit. Though this toolkit will be the subject of a separate post, we conclude by offering a list of 5 steps that development organizations can take right now to improve their reporting.

1.	Publicly release organization-wide [M&E standards and frameworks](http://web.undp.org/evaluation/guidance.shtml#handbook)
2.	Adopt [standard definitions](http://www.who.int/about/who_reform/change_at_who/results_framework/en/#.Vuhi0rxViko) of terms like “outputs” and “outcomes” and clearly designate tracking and reporting norms, including who monitors and reports data, how they do so, and when in the project cycle milestones must be met
3.	Provide project management teams with reporting [toolkits](http://www.pepfar.gov/documents/organization/79624.pdf) including templates, and checklists
4.	Upload all project documents and datasets into a publicly searchable [portal](https://data.mcc.gov/evaluations/index.php/catalog)
5.	Consider the ways project documents can begin to incorporate [quantifiable measures](http://www.worldbank.org/projects/P105092/nutrition-malaria-control-child-survival?lang=en&tab=results) and, ideally, [spatial data](http://aiddata.org/subnational-geospatial-research-datasets)
