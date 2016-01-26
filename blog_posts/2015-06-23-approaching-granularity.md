---
layout: post
author: Daniel Chapman
title: "Approaching Granularity: Connecting Open Aid and Open Contracting in Timor-Leste"
excerpt: "As we move toward the Data Revolution, the role of data granularity and “joined-up” data is key to informing decision-making in development program allocations."
thumbnail: assets/post-images/open-contracting-timor-leste.png
thumbnail-alt: Open Contracting in Timor-Leste
images:
  - url: assets/post-images/timor-leste-eprocurement-database.png
    alt: "Timor-Leste’s eProcurement database"
    caption: "An example spreadsheet collected from Timor-Leste’s eProcurement database, with a procurement associated with the ADB’s Road Network Upgrading Project highlighted."
    thumbnail: true
  - url: assets/post-images/rnup-awarded-contracts.png
    alt: "RNUP awarded contracts"
    caption: "Complete list of contracts awarded that are related to the Road Network Upgrading Project (RNUP)."
    thumbnail: true
categories: [Open Data, Aid Management]
---

As we move toward the Data Revolution, the role of data granularity and “joined-up” data is key to informing decision-making in development program allocations. By making development assistance information more specific and detailed, citizens can better monitor how well that money is being spent in all parts of a country. However, even granular, project-level information on aid does not always provide insight into what occurs within an individual project over time and space. [Open Contracting](http://www.open-contracting.org/), which refers to transparency within public contracting data, creates opportunities for even greater granularity within the project implementation process. 

How does Open Aid link with Open Contracting? Once a project starts, an implementing agency — often a national ministry — will advertise tenders for services related to the project. If a project calls for the construction of various roads, for instance, then the government will allow companies to bid on a tender to build these roads. If transparency exists in both the aid and contracting process, then citizens could follow the process all the way from project conception to implementation on the ground by different companies. 

To see a real-world example of such a link, I searched through both Timor-Leste’s [eProcurement Portal](http://eprocurement.gov.tl/public/indexeprtl;jsessionid=44516B0321AA5902F385E5AF4FFE6830) and its [Aid Transparency Portal](https://www.aidtransparency.gov.tl/), examining a project sponsored by the Asian Development Bank (ADB) entitled the [Road Network Upgrading Project](http://adb.org/projects/details?proj_id=46260-001&page=overview). The project seeks to upgrade over 70 km of roads across the country and create feasibility studies for the possible upgrading of 100 km of other roads in the future.  

{% inlineimage post-center 1 include-caption %}

Within the eProcurement portal, seven contracts exist related to the project, with different bidders awarded different contracts in the process. For instance, in the component of the project which focuses on building a road between Natarbora and Laclubar, the government’s National Procurement Commission awarded China Nuclear Industry 22nd Construction Company $1.5 million for its construction. 

{% inlineimage post-center 2 include-caption %}

Below is a time-series map showing the progress of the ADB’s road project created by geo-locating each contract associated with the project in the subdistricts where the road will be upgraded. Because the contracts do not show the flow of money across specific subdistricts, each contract’s cost is split equally between the affected subdistricts. 

<div class="media-resizable-wrapper aspect-1-1">
  <iframe class="media-resizable-element" src="http://aiddatacenter.maps.arcgis.com/apps/presentation/index.html?webmap=eae95d7bbbc4407d85d45c5c81c79a8d&slide=1"></iframe>
</div>

While creating this map, I found it difficult to figure out if certain contracts were related to specific aid projects, as the overwhelming majority of contracts do not display their affiliation with parent projects. For a donor officer, government official or citizen trying to efficiently monitor the progress of a budget or aid project on the ground, this lack of project-contracting interoperability poses a significant barrier. 

Part of Development Gateway’s current work involves removing these barriers by working with the [Open Contracting Data Standard](http://standard.open-contracting.org/) (OCDS), which serves to standardize contracting data across different countries’ databases. This standard offers a major opportunity in linking together contract, aid, and budget data. As the standard continues to evolve, this post illustrates potential benefits from expansion of the “budget” field contained within the OCDS’s [schema](http://ocds.open-contracting.org/standard/r/1__0__RC/en/schema/reference/#budget), linking contracts with related project names and unique project IDs. 

For improved transparency and program management, governments can seek to advance within OCDS’s [Five Star Process](http://ocds.open-contracting.org/standard/r/1__0__RC/en/implementation/publication_levels/#how-to-publish-5-approach) by better standardizing and joining up data, which will allow for more accurate and usable information. By following these standards, greater connections—and more insights—can be established. 
