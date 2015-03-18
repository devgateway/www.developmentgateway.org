---
layout: page
title: Expertise
title_summary: because data should work for people.
permalink: /expertise/
weight: 2
nav_data: site.data.expertise_topics
---


![Information Management](/images/other/information-management.png)

<--colbreak-->

Praesent vehicula lectus tortor, non egestas magna ultricies vitae. Phasellus tristique nisl vestibulum ultricies bibendum. Nam consectetur augue et dui blandit, ac vestibulum mauris fermentum. In vulputate venenatis dui, vel malesuada lectus tristique in. Nullam rhoncus euismod varius. Maecenas ultrices urna velit, sit amet tristique est congue in. Vivamus ut orci a odio ullamcorper commodo in vel justo. Mauris mattis, felis varius tincidunt imperdiet, tellus urna luctus nisl, quis venenatis augue ante nec dolor. Nullam eu est lorem. Nam aliquam ornare dui eget bibendum. In hac habitasse platea dictumst. Vivamus sodales rutrum magna eget porttitor. Duis scelerisque tempor turpis id ullamcorper. Donec lobortis varius posuere. Ut metus mauris, viverra dignissim convallis sed, lobortis non sem.


{% assign featured_programs = site.programs | dg_find_all: 'featured', true %}
{% include entries-list.html entries=featured_programs class="expertise-featured-programs clearfix" %}

{% include entries-list.html entries=site.data.expertise_topics class="expertise-topics clearfix" %}

{% assign normal_programs = site.programs | dg_find_all: 'featured', false %}
{% include entries-list.html entries=normal_programs class="expertise-programs clearfix" %}

Fusce quis tristique libero. Quisque vitae eros faucibus, luctus turpis fermentum, eleifend arcu. Aenean volutpat rutrum orci id sagittis. Curabitur non dui dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec laoreet est in tellus ultricies venenatis. Sed congue massa ac imperdiet rutrum. Nulla ac libero vulputate, consequat odio nec, tristique magna. Sed et scelerisque orci. Mauris aliquet vitae dui a fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit
