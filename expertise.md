---
layout: page
title: Expertise
title_summary: because data should work for people
permalink: /expertise/
weight: 2
nav_data: expertise_topics
---

{% multicols pageintro clearfix %}

![Information Management](/images/other/information-management.png)

<--colbreak-->

<h2 class="title">Analytical Dashboards
Data Visualizations
Agile Platforms
Knowledge Networks</h2>

<h3 class="title">Technical tools for better outcomes</h3>

<ul>
  <li>Making informed decisions requires understandable data</li>
  <li>Understandable data depends on organized input information and accurate impact visualization</li>
  <li>Analytics platforms, databases, dashboards, and graphics enable better organization, analysis, and results</li>
<ul>

{% endmulticols %}

<img src="/images/other/expertise-banner.png" class="page-banner" alt="amp screenshot">

{% assign featured_programs = site.programs | dg_find_all: 'featured', true %}
{% include entries-list.html entries=featured_programs class="expertise-featured-programs clearfix" %}

{% include entries-list.html entries=site.data.expertise_topics class="expertise-topics clearfix" %}

{% assign normal_programs = site.programs | dg_find_all: 'featured', false %}
{% include entries-list.html entries=normal_programs class="expertise-programs clearfix" %}
