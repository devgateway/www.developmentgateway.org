---
layout: post
author: "Mark Irura and Diego Dimunzio"
title: "Global Goals, National Priorities: Kenya Forestry App" 
excerpt: >-
  At the United Nations General Assembly last week, government, public, and private actors signaled their intent to achieve a sustainable 2030 -- and recognition that we only have 14 more years to turn rhetoric into reality. For the past several months, we worked with the Government of Kenya to show how technology and the data revolution can support national achievement of the global goals.....
thumbnail: assets/post-images/kenyamangrove.jpg
thumbnail-alt: "Kenya mangrove"
images:
  - url: assets/post-images/kenyaforestry.png
    alt: "Kenya Forestry Prototype"
    caption: "*Figure 1: [Kenya Forestry Prototype](http://devgateway.github.io/kenya-forestry/#/?_k=9bm0v0)*"
  - url: assets/post-images/kenyaforestrytech.png
    alt: "Technologies used in the forestry application"
    caption: "*Figure 2: Technologies used in the forestry application*"
categories: [Innovation, Open Data]
published: true
---

At the United Nations General Assembly last week, [government](https://www.devex.com/news/new-platform-aims-to-bridge-gap-between-climate-data-and-climate-action-88802), [public](https://www.devex.com/news/new-un-women-gates-foundation-partnership-takes-on-gender-data-88795), and [private](http://www.philips.com/a-w/about/news/archive/standard/news/press/2016/20160921-gavi-and-philips-team-up-to-improve-immunization-data-quality-in-developing-countries.html) actors signaled their intent to achieve a sustainable 2030 -- and recognition that we only have 14 more years to turn rhetoric into reality.

For the past several months, we worked with the Government of Kenya to show how technology and the data revolution can support national achievement of the global goals. Working with the [Office of the Deputy President of Kenya](http://deputypresident.go.ke) -- fellow [GPSDD](http://www.data4sdgs.org) champions -- and the University of Eldoret, we made a prototype tool for engaging citizens to work toward [Sustainable Development Goal 15](http://www.globalgoals.org/global-goals/life-on-land/): *“Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.”* 

Why does Goal 15 matter so much in Kenya? According to 2015 data, the country has less than [7% forest cover](http://kefri.org/wp-content/uploads/PDF/Publications/Capability%20Map%20For%20Growing%20High%20Value%20Tree%20Species%20In%20The%20Coast%20Region%20of%20Kenya.pdf), a sharp decrease from earlier decades, and well below international norms. Despite having over 7,000 types of native trees, Kenyan farmers -- after cutting down trees for domestic use or export -- typically replant only three or four types of tree. And these species are often not planted in their [ecologically correct zones](http://www.infonet-biovision.org/EnvironmentalHealth/guide-tree-planting-Kenya), leading to a less diverse ecosystem, and weak or stunted tree cover.

The goal of this strategy is to reverse this trend by engaging citizens through technology -- specifically, an educational, and easy-to-use tool that shows where deforestation is the biggest problem -- and eventually (when all the data is received), assist to identify what trees should be planted where. Over the past few months, the Development Gateway team used a data set from the [Kenya Open Data Portal](https://www.opendata.go.ke/Natural-Resources/2015-Estimated-Forest-Cover-for-Counties-in-Kenya-/gnxa-6ww5) to [**visualize forest coverage by county**](http://devgateway.github.io/kenya-forestry/#/?_k=9bm0v0). By opening up and visualizing data, we are enabling further scrutiny by the academic community; visualizing the problem for civil society organizations, and citizens; and paving the way for an informed dialogue on sustainable forestry practices. 

{% inlineimage post-center 1 include-caption %}

This tool builds upon the University of Eldoret’s Forestry Department’s work, which had included a mobile Android application [MtiCalc](http://www.nation.co.ke/business/seedsofgold/Students-develop-tree-calculation-app-for-tree-farmers/2301238-3181840-wjyrxcz/index.html) -- an application to help local farmers do basic forest and woodlot calculations. Our forestry app debuted at the [Kenya National SDG Roadmap](http://akumedia.aku.edu/events/kenya-national-workshop-on-sdgs-roadmaps-and-data-ecosystems/) meetings.

**A Look at the Tech Behind the Dashboard** 

When we started developing this prototype, we did not have all features clearly defined -- but we did have a pretty clear idea about what our final product should look like. Our main challenges were time and complete data. With this in mind, we set a goal of achieving a simple tool able to give users information quickly and simply, with functionality that can easily be extended in future.

{% inlineimage post-center 2 include-caption %}

As DG has extensive experience building similar applications, and given the constraints mentioned above, we worked to leverage as much existing code as was possible. We turned to [reactjs](https://facebook.github.io/react/), our organizational go-to JavaScript library; and [leaflet](http://leafletjs.com), which pairs well with React and provides a lightweight build and fast maps for low-bandwidth connections.

Datasets we obtained were simplified and stored in JSON format. This is very convenient considering that, in the future, we could pull data from a server through an API without making many changes to the code. There are three main open datasets used in the platform to highlight different aspects of interest in the map: forest coverage, projects related to environment, and three tree species types. 

Map layers include details of forest coverage by counties. These were transformed from “shape” format to GeoJSON since this is more suitable for use in web applications. Layers were also simplified to reduce the size and speed up download time. As it was not possible to get a layer of regions, we "built" a layer generated with the counties that make up each region. [Qgis](http://www.qgis.org/en/site/) helped us to do this and also to "dissolve" polygons by attributes. Likewise, using the information we had available, we calculated the coverage for each region. 

**Conclusion and Next Steps**

In the near future, through this collaboration, we aim to expand [this tool](http://devgateway.github.io/kenya-forestry/#/?_k=9bm0v0) to include more datasets and features that helps farmers, CSOs and concerned citizens know what trees to plant where. But in the meantime, we still hope the forestry app offers a meaningful example of how simple tech and already-available data can be used to accelerate progress toward the SDGS.

*Image: [Romy Chevallier](https://www.flickr.com/photos/134781923@N06/22654391926/in/photolist-AvTFsf-a5QLw3-6tnrsU-dxZK53-a5NnAV-zShgjF-7zinBB-v7J1LW-5sazAp-3KztNE-7zDdwN-7zyS2c-CMtiiL-voLPxf-a5MVhr-a5QLiY-v7RSWx-95sPKy-a2hEti-oaVkae-CymYbw-CytyLk-ug6Q4h-bim1NX-9EaCit-9EdNns-9Eefp5-bnSBvz-4c9MxU-6TgygT-b9o3HR-bnSAiX-9EdFRs-zWJdCS-qtTFs8-bnSAra-bnSzi2-zZTp9h-bnSBbr-bnSBn2-oCgdVV-bnSB3k-bnSAwK-3nW62k-9Eb7wZ-9EbmLv-9EedU7-DfhHg-7sRqS-9Eebhh) [CC BY-NC-ND 2.0](https://creativecommons.org/licenses/by-nc-nd/2.0/)*
