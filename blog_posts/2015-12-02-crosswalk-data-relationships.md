---
layout: post
author: Danny Walker
title: "Crosswalking data relationships for analysis"
excerpt: In our last post we discussed the crosswalk portion of the Results Data Initiative, a project with the goal to make results data more useful and relatable across...
thumbnail: assets/post-images/chain5.jpg
thumbnail-alt: 'Raw Data'
images:
  - url: assets/post-images/chain1.jpg
    alt: "Data chain 1"
    caption: "*Figure 1: Example casual chain for reducing malaria.*"
  - url: assets/post-images/chain2.jpg
    alt: "Data chain 2"
    caption: "*Figure 2: Whether and how outputs lead to condition changes is still unclear.*"
  - url: assets/post-images/chain3.jpg
    alt: "Data chain 3"
    caption: "*Figure 3: Data types and tracked relationships.*"
  - url: assets/post-images/chain4.jpg
    alt: "Data chain 4"
    caption: "*Figure 4: Classification of projects and objectives.*"
  - url: assets/post-images/chain5.jpg
    alt: "Data chain 5"
    caption: "*Figure 5: Example using real output data.*"
categories: [Results Data]
---

In [our last post]({{ site.url }}/2015/10/20/steps-towards-crosswalking-development-data/) we discussed the crosswalk portion of the [Results Data Initiative]({{ site.url }}/expertise/results/), a project with the goal to make results data more useful and relatable across development organizations. This process involves three main steps: data gathering, data organization, and data comparing and merging (i.e. “crosswalking”).

The [first two steps]({{ site.url }}/2015/10/20/steps-towards-crosswalking-development-data/) allow us to produce a ‘microdata’ database using statistical information from several different donors and other development stakeholders. Although such a database represents a significant step forward in terms of data openness, discoverability, and usability, it doesn’t entirely engage with the question of results. Are donors producing comparable results with their projects? Are they interested in similar long-term objectives? Can we aggregate results in a given place or sector? To begin to answer these questions, we’ll need additional information about development projects and strategies.

The first step is to identify different data types, and how these types relate to each other. For our purposes we’ve identified three data types: objectives, conditions, and outputs. Objectives are large overall goals in a thematic field such as “reducing malaria” or “increasing agricultural productivity”; conditions represent the situation on the ground (i.e., infant mortality rates, crop yields); and outputs track the deliverables of development initiatives such as “1,000 household latrines built” or “10,000 vaccines administered.” The ideal is for these data types to form a causal chain of development: projects allocate resources that improve conditions that, over time, meet larger objectives.

{% inlineimage post-center 1 include-caption %}

Although identifying and validating causal pathways between donor outputs, conditions, and objectives is a key priority in development, [this](http://www.cgdev.org/page/when-will-we-ever-learn-closing-evaluation-gap) is a [much](http://www.cgdev.org/event/impact-evaluation-can-we-learn-more-better) [larger](http://www.brookings.edu/research/opinions/2011/07/26-aid-effectiveness-kharas) [debate](http://www.chrisblattman.com/documents/policy/2008.ImpactEvaluation2.DFID_talk.pdf) that goes beyond the scope of our current crosswalk activity.

{% inlineimage post-center 2 include-caption %}

For our purposes, it is more important to first create clear linkages between data types across a wide range of projects and donors, so that we can have a clearer picture of overall output trends. To do this, we will use output information, as well as a few classification algorithms.

Of these data types, condition information is the most readily abundant and comprises the entirety of the microdata database we’ve already compiled. Many donors gather it as part of ongoing initiatives, but the bulk of condition data comes from large surveys such as WHO’s Global Health Observatory (GHO), USAID’s Demographic Health Survey (DHS), and national census information and are not directly linked to individual projects. Since these data represent entities within an administrative location, indicators from many different donors can be matched and merged as we’ve discussed in [our last post]({{ site.url }}/2015/10/20/steps-towards-crosswalking-development-data/).

{% inlineimage post-center 3 include-caption %}

However, while condition data is becoming more [ubiquitous and accessible](https://www.rti.org/newsroom/news.cfm?obj=828A18D6-0E18-98ED-F515C0B1CD3922DC), output information is still largely buried in project documentation, such as progress reports or project evaluations. This is less than ideal since it represents a scenario in which outputs and conditions are only ever linked together within the context of a specific project evaluation. Instead of this, we’d like to be able to track outputs and conditions at a larger scale and across organizations. Thus, although tedious, our first order of business is extracting output data from project documentation.

Once we have these output indicators, we run two classification algorithms. The first clusters outputs into different activity themes. For example, WHO may have conducted 1,000 HIV/AIDS awareness trainings as part of a project while USAID held workshops for 450 health professionals on effective HIV/AIDS treatment procedures. Both of these activities will be grouped as “training”-type outputs.

The second round of classification uses the language in project documentation itself to determine proposed objectives. In our limited sample of health and agricultural projects, we’ve compiled a list of objective keywords from the stated priorities of the donors in our sample. For example, as part of USAID’s global health initiatives it has the goal of “[ending preventable child and maternal deaths](https://www.usaid.gov/what-we-do/global-health)”. By searching through project documentation for keywords such as “maternal deaths,” we can classify projects and programs based on their prioritized objectives.

{% inlineimage post-center 4 include-caption %}

Once we combine these two classification activities, we have a powerful way of looking at total and type of activities meant to achieve certain objectives. And furthermore, by (eventually) adding geographic information, we can link these data types up with our microdata database as a means to more comprehensively observe what is happening in development and where and how these trends are influencing outcomes worldwide.

{% inlineimage post-center 5 include-caption %}
