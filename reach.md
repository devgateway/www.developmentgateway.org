---
layout: page
title: Reach
permalink: /reach/
weight: 2
hide_header: true
extrastyles: [ '/lib/leaflet/leaflet.css' ]
extrascripts: [ '/lib/leaflet/leaflet.js', '/scripts/reach-map.js' ]
---

{% include map.html countries=site.data.reach_countries %}


{% for country in site.data.reach_countries %}

<h2 id="{{ country.isoA2 }}" name="{{ country.isoA2 }}">
  <img href="/images/flags/{{ country.isoA2 }}.png" alt="Flag for {{ country.name }}" />
  {{ country.name }} &ndash; {{ country.year }}
</h2>


{{ country.summary }}

{% if country.pullQuote %}
> {{ country.pullQuote }}
{% if country.pullSource %}
>
> &mdash;{{ country.pullSource }}
{% endif %}
{% endif %}

{% endfor %}
