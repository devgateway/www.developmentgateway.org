---
layout: post
author: "Diego Dimunzio and Mark Irura"
title: "From Data Sets to Data Visualization: Tanzania Dashboards" 
excerpt: >-
  In this post, we dive into the technology behind the data visualizations....
thumbnail: assets/post-images/tzwaterpoints.png
thumbnail-alt: waterpoints
images:
  - url: assets/post-images/dashboardtech.png
    alt: "Key libraries and technology used to build the dashboards"
    caption: "*Figure 1: Key libraries and technology used to build the dashboards.*"
  - url: assets/post-images/tzwaterpoints.png
    alt: "Waterpoint Map with Prune Clusters"
    caption: "*Figure 2: Waterpoint Map with Prune Clusters.*"
  - url: assets/post-images/tzhealth.jpg
    alt: "Tanzania Health Dashboard charts"
    caption: "*Figure 3: Tanzania Health Dashboard charts.*"
categories: [Open Data, Innovation]
published: true
---

*In an [earlier post]({% post_url 2016-09-08-open-data-tanzania %}), we shared the context and intended purpose of the Tanzania Sectoral Dashboards; in this post, we dive into the technology behind the data visualizations.*

Seeking to put the [Principles for Digital Development]({% post_url 2016-04-11-putting-digital-principles-practice %}) into practice, we built the [Tanzania Dashboards](http://www.takwimu.org/#/?_k=t1r8g4) using open source tools and frameworks, which reduces the total cost of ownership. The dashboards pull data dynamically from the [Tanzania Open Data portal](http://www.takwimu.org/#/?_k=t1r8g4) APIs, and uses a powerful combination of Angular, ReactJs, CSS, and HTML for the user interface. For mapping, they use Leaflet and Open Street Maps. The resultant source code ([Water](https://github.com/WorldBank-Transport/waterdash), [Education](https://github.com/WorldBank-Transport/edudash) and [Health](https://github.com/WorldBank-Transport/healthdash)) is also open for download and further extension.

{% inlineimage post-center 1 include-caption %}

The technology stack was chosen based on needs and functionality. In the case of education, since there was already an application in place that what we had to enhance, the whole development was done in [AngularJS](https://angularjs.org); for the other two dashboards we had greater flexibility to choose the stack.

From a user experience perspective, we had determined to include both georeferenced visualizations (maps) and charts as part of the dashboard. In maps, clusters are a useful way to show data points, especially in maps with high datapoint density -- the [Water Dashboard’s waterpoints](http://maji.takwimu.org/#/dash/points/waterpoints/?_k=q6pb95) are a strong example of this. After some research, we found [Prune Cluster](https://github.com/SINTEF-9012/PruneCluster), useful because it (i) permits a category to be specified for the markers, after which (ii) a small object representing the number of markers for each category is attached to the clusters. In this way, you can create cluster icons adapted to their content -- in our case, it helped us to show water point status for a group of the points at-a-glance. 

{% inlineimage post-center 2 include-caption %}

When developing charts, our goal was to create powerful tools for data analysis -- we also needed to use a specific library, based on the government’s requirements. For these reasons, we selected the [Highcharts](http://www.highcharts.com) library. Both the charts and maps have been optimized for low-bandwidth environments.

{% inlineimage post-center 3 include-caption %}

The dashboards are built on open data released by the Government of Tanzania, and read the raw data published on the Tanzanian Government [Open Data Portal](http://opendata.go.tz) (ODP). The data are displayed on the map at the most disaggregated level possible -- some datasets from ODP only contain data that is aggregated at the region, district, or ward level. 

Data sources for each dashboard are as follows: 

- **Education Dashboard**: [Open Data Portal](http://opendata.go.tz/organization/ministry-of-education-and-vocational-training), [Ministry of Education and Vocational Training](http://www.moe.go.tz), [National Examination Council of Tanzania](http://necta.go.tz), [National Bureau of Statistics](http://nbs.go.tz)

- **Health Dashboard**: [Open Data Portal](http://opendata.go.tz/organization/ministry-of-health-and-social) (as published by the Ministry of Health, Community Development, Gender, Elderly and Children), [National Bureau of Statistics](http://nbs.go.tz) 

- **Water dashboard**: [Open Data Portal](http://opendata.go.tz/organization/ministry-of-water) (as published by the Ministry of Water and Irrigation), [National Bureau of Statistics](http://nbs.go.tz)

In some cases, the dashboards use data that has been cleaned or merged with other data to create new datasets -- but even in these cases, the data itself draws exclusively from open data released by the Government of Tanzania. All data is available for download in machine-readable format, with a license that encourages re-use.  

However, it is important to note that the dashboards are as good as the raw data sources which drive them. Consequently, an important consideration for all the dashboards should be the provision of timely and complete data by the sector ministries. We are hopeful that planned trainings and sensitizations carried so far will increase the uptake. Naturally, timely updates and relevance to the latest approved datasets will stimulate demand through increased interest and use by end users. 

In summary, we hope these dashboards help government and the public quickly sift through the government’s open data, and make it easier to understand, analyze, and use this information. But technology is just the first step in a data-driven decision-making chain: it is now for individuals to use their judgement and leadership instincts to act upon this information to progress toward national goals. We look forward to championing the Government of Tanzania’s successes, and working with our partners DataVision International and the World Bank again in future.

