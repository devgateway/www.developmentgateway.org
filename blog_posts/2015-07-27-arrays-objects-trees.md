---
layout: post
author: Daniel Chapman
title: "Arrays, Objects, and Trees: A Look at JSON-formatted Contracting Data"
excerpt: "AThe Open Impact Day conference hosted in Washington, D.C. this past month highlighted examples of open data in improving trust between citizens and their governments..."
thumbnail: assets/post-thumbnails/OCDSjson.jpeg
thumbnail-alt: OCDS JSON
images:
  - url: assets/post-images/OCDSjson.jpeg
    alt: "OCDS JSON"
    thumbnail: true
  - url: assets/post-images/OCDScsv.jpeg
    alt: "OCDS CSV"
    thumbnail: true
  - url: assets/post-images/suppliers-contract-sector.jpeg
    alt: "Suppliers per contract by sector"
    thumbnail: true
  - url: assets/post-images/bids-contract-sector.jpeg
    alt: "Bids per contract by sector"
    thumbnail: true
  - url: assets/post-images/suppliers-contract-construction.jpeg
    alt: "Suppliers per contract in construction"
    thumbnail: true
categories: [Open Data][Innovation]
---
The Open Impact Day conference hosted in Washington, D.C. this past month highlighted examples of open data in improving trust between citizens and their governments. In Ukraine, a recently launched website named Prozorro gives users an unprecedented look into the government’s procurement process. The technical processes at work within websites like Prozorro, however, may still confuse some open data users. This post seeks to elaborate on this technical background by showing an example of how users can employ statistical software to analyze contracting data.

Databases following the Open Contracting Data Standard (OCDS) store their data in a format called JavaScript Object Notation (JSON). JSON, unlike other formats such as comma separated values (CSV) that use a tabular mode of displaying data, displays data in a “tree” format, nesting different objects and arrays inside each other. For example, this JSON excerpt:

{% inlineimage post-center 1 %}

Would be formatted as this table in a CSV:

{% inlineimage post-center 2 %}

Notice that this table splits the “buyer” field into four different fields, while the JSON example formats the same field into a neater tree of variables, saving space and making the data better organized. This makes JSON often the best way of formatting contracting data where even more fields and values are present. However, while JSON is the preferred language of techies and is becoming the most frequent formatting of Application Program Interfaces (APIs), many open data users may find JSON formatted data harder to use for data analysis.

In order to show how JSON-formatted data can still be analyzed, I examined our very own EU Public Contract Database, published last year. This database contains over 2,000,000 contracts from 2006 to 2014 in over 28 European countries. To extract the data, I used R, the free and open source statistical analysis software, and RJSONIO, an extension package that allows users to convert JSON content to R objects. The process enabled me to take a massive database and split it up into readable chunks.

Using ggplot2, a data visualization package for R, I was able to graph certain interesting trends hidden in the database. For all of the following graphs, I decided to focus on contracts in the United Kingdom in 2013, since this part of the database offered a diverse variety of contracts to easily analyze.

Below is a graph showing the average number of suppliers awarded for each contract in five different sectors. The fact that a wide variety of pharmaceutical companies specialize in different drug types could explain the high amount of suppliers in the Medical Equipment and Pharmaceuticals sector relative to the other sectors.

{% inlineimage post-center 3 %}

Below is a graph showing the average number of bids per contract in the same five sectors. Notice that the high number of bids correlates with a high number of suppliers per contract in the Medical Equipment sector, but seems to differ widely in the Sewage/Environmental Services sector. Explanations for this pattern will require further research of how firms within these sectors operate, and how oligopolistic/monopolistic these sectors are.

{% inlineimage post-center 4 %}

Below is a histogram of the number of suppliers per contract within the construction sector.

{% inlineimage post-center 5 %}

You can see that there’s one contract that sticks out in particular: the one with over 150 suppliers, a number that vastly exceeds the average amount of 2.735. This contract, related to construction work in Glasgow, contains zero information regarding its financial value or its bidding process. While there is still not enough information to make any conclusions about the validity of this contract or the process through which it was procured, this example shows how users can spot interesting patterns and possible anomalies quickly using JSON-formatted contracting data that follows the OCDS.

Governments and civil society will require a greater depth of information within contracting data if they want greater use out of it. Version 1.0 of the OCDS has addressed most of these concerns, but certain issues still remain. Geographical location of contracts, for example, should be fully integrated into the standard. And users will need to pressure publishers to provide more detailed information on a contract’s bidding process, since this step of the procurement process represents a significant opportunity for collusion or fraud.

As the OCDS advances, we hope that more people will take a closer look at other procurement databases and see what insights can be gained from deeper analysis.
