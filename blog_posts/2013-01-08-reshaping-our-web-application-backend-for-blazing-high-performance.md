---
layout: post
nid: 1400
author: Wayan Vota
created: 1357657200
old_path: news/reshaping-our-web-application-backend-blazing-high-performance
title: Reshaping Our Web Application Backend for Blazing High Performance
excerpt: Back in the days when web application users’ demands were still basic (browsing,
  using static filtering, simple statistics results, etc) and disk space was plentiful,
  a traditional backend was usually represented by a monolithic product capable of
  performing the entire job of running a data oriented web application
thumbnail: assets/post-images/newbackend1.png
thumbnail-fid: "5939"
thumbnail-alt: ""
---

Back in the days when web application users’ demands were still basic (browsing, using static filtering, simple statistics results, etc) and disk space was plentiful, a traditional backend was usually represented by a monolithic product capable of performing the entire job of running a data oriented web application

But, users’ requirements are continuously changing, desiring higher complexity in data presentation (new data layouts, chart visualization, dashboards, etc), processing (full text search, facet navigation, complex statistics results, fast indexing, etc) and also in data persistence (data recovery & replication, etc). Furthermore, in the current context of “BigData”, every company is preparing for explosive data growth every year!

Thus, it is clear that nowadays many functionalities offered by a data oriented application have become so complex that it is a good practice to implement them as separate backend services, layers or components.

For instance, past monolithic products are now just considered bottlenecks into the system because they are “solving” performance issues by injecting extra functionality in the same component or optimizing the ones already implemented there. This approach leads to a bloated product, lower popularity as a solution, and a problem for the backends built on top of them.

**Current backend architecture**

I am [Cristi Barca](http://www.linkedin.com/in/cbarca), Consultant Software Engineer, and I've found that Development Gateway is confronting this problem now. Our applications’ main features (full-text search and data analytics), are implemented on top of an Oracle Database, and are slowing down in speed due to the size of the data we have reached.

It is hard to reach performances on top of BigData without splitting the concerns between multiple third party products (tools or components) inside our backend.

<div style="float:right;margin-left:10px;margin-bottom:10px;">![newbackend2.png](/assets/post-images/newbackend2.png)</div>

**Future backend architecture**

How to solve our bottleneck? Right now, our solution for improving the backend is to replace the all-in-one platform with multiple products such as Vertica Database and Analytics Platform, for storage and analytics, and ElasticSearch, for full text search. Each one of them is well known to perform very good in its target area.

Following the first software iteration on top of the new backend we have in plan to include a couple of new features and integrate Hadoop for data aggregation/transformation.

Though we are at the beginning of our new backend implementation, the test results are quite optimistic. In comparison with the all-in-one platform, the first results have shown 2x to 3x times faster CRUD and Analytic queries response, and 4x to almost 5x for text-searches thanks to using dedicated products for each of our key functionality.

I am sure you can agree that these results are impressive and we will continue to test and optimize the system for a better user experience.
