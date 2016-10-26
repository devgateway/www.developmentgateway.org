---
layout: post
author: "Daniel Oliva Bianco"
title: "Open for the Public, Useful for the Government" 
excerpt: >-
  When we started to plan the technical architecture of the new GIS Portal for the Philippine National Economic and Development Agency (NEDA), we focused on a core goal: not only should information related to development assistance and public investment projects be easily accessible to the public...
thumbnail: assets/post-images/mapui-geoph.jpg
thumbnail-alt: "mapUI"
images:
  - url: assets/post-images/ui-geoph.jpg
    alt: "stack"
    caption: "*Figure 1: User Interface Technology Stack*"
  - url: assets/post-images/mapui-geoph.jpg
    alt: "map UI"
    caption: "*Figure 2: Optimized Map UI*"
  - url: assets/post-images/backend-geoph.jpg
    alt: "backend"
    caption: "*Figure 3: Backend Technology Stack*"
  - url: assets/post-images/detail-geoph.jpg
    alt: "backend"
    caption: "*Figure 4: PostGIS DB Extension Capabilities*"
categories: [Open Data, Aid Management]
published: true
---

*To learn more about the launch of the Philippines GIS Portal, [read our first post](http://www.developmentgateway.org/2016/09/30/Philippines-GIS-Launch/).*

When we started to plan the technical architecture of the [new GIS Portal for the Philippines' National Economic and Development Agency (NEDA)](http://neda.developmentgateway.org/#/map/tools?_k=w19mta), we focused on a core goal: not only should information related to development assistance and public investment projects be easily accessible to the public, in order to facilitate government transparency; the tool should be also useful to the agencies that manage the information shown in the GIS Portal. We believe that if the government finds the application practical, and can use the tool to make decisions based on the maps, charts, and layers provided, they will work to ensure the data is maintained and updated regularly. If data is updated regularly, we in turn feel that this will help citizen engagement will grow.

With the above idea in mind, we also had a list of initial technical requirements, including:  
-Ability to show project layers by ADM levels (region/province/municipality)
-Funding allocation by region
-Ability to filter the projects’ information by several fields
-Layers responsive to filters
-Charts by funding type and number of projects
-An admin module to configure specific data to show to end-users

And some non-functional requirements, like:
-Optimized for slow internet connection
-Straightforward user interface
-Separation between frontend and backend, so the backend could be replaced in the future with local REST endpoints
-Easy to update and maintain

Having those requirements in mind, we selected an appropriate technology stack.
 
{% inlineimage post-center 1 include-caption %}

For the portal’s **user interface** (UI), we developed an intuitive and powerful front-end that allows faster and easier data visualization. It is a javascript application based on several well known libraries like [React](https://facebook.github.io/react/), which automatically manages all UI updates when the underlying data changes; [Leaflet](https://github.com/Esri/esri-leaflet), which is used to draw interactive map tiles; [Plotly](https://plot.ly/), which allows us to show interactive charts; [i18next](http://i18next.com/) which provides translations support to the application; and others. The UI uses REST endpoints for the services needed from the backend, as well as basic security. The portal has a responsive design in order to support both desktop and tablet views.

By combining [D3](https://d3js.org/) and Leaflet, we could have both a solid map library and a powerful visualization tool. The image below shows SVG images added to a map in an easy way, which improves the user experience even with slow connections.

{% inlineimage post-center 2 include-caption %}

In the portal’s **backend**, we reused some of the modules provided by the [DG Toolkit](https://github.com/devgateway/dg-toolkit) to create a standalone, java-based application program interface (API) that implements a set of REST services, which provides the information needed to feed the UI module.

Some of the features provided for the services’ endpoints are:
- Aggregated data for chart visualization
- List of filters that can be applied at UI
- Specific data by location with [GeoJSON](http://geojson.org/) format
- Import of indicators
- Export of data in different formats (PDF, XLS, CSV)

{% inlineimage post-center 3 include-caption %}

In the backend stack diagram you can see two import modules. One is for dataset import (the XLS Import module), that will reduce the total cost of ownership of the application. Government agencies have been working with such datasets during the last few years. The other import module is for KML maps, which is the format that NEDA was using to store geo-located pictures of project execution.

[Hibernate](http://hibernate.org) and [Spring JPA](http://projects.spring.io/spring-data-jpa/) modules are responsible for data access, persistence and cache, this open source frameworks provides not only high performance but also scalability.

The PostGIS DB extension we used in the backend architecture permitted us to add support for geographic objects, allowing location queries to be run in SQL. For the GIS Portal we imported shapes of 3 different administrative levels (municipality, province, and region). As example of the use case of this feature, any portal user can change the level of detail for the displayed map layer -- useful when zooming in and out. 

{% inlineimage post-center 4 include-caption %}

The backend application can be installed in any operative system that supports Java 1.8, like Linux or Windows. Since communication between the UI and API is stateless, the application could be easily scaled on demand by adding more servers behind a load balancer solution. 

The result of all this technical development? A [government-owned tool](http://neda.developmentgateway.org/#/map/tools?_k=w19mta) that allows users to visualize and analyze both government and development partner-funded projects. We hope that this portal provides government agencies a new way to monitor projects through GIS and data visualization, and serves as a resource for data-driven prioritization and decision-making; and that it provides the public with transparent and accessible information, providing a complete picture of government and development partner activities in-country.  

*GIS Portal Team: Liliana Mercado, Sebastian Dimunzio, Mauricio Bertoli, Llanco Talamantes, Marina Baralo, Josh Powell, Vanessa Goas, and Daniel Oliva Bianco.*
