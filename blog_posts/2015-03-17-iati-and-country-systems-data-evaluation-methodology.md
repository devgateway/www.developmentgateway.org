---
layout: post
nid: 1517
author: Benjamin Arancibia, Hamadoun Cisse, Paige Kirby, & Josh Powell
created: 1426597796
old_path: news/iati-and-country-systems-data-evaluation-methodology
title: 'IATI and Country Systems: Data Evaluation Methodology'
excerpt: 'Last week, we shared big-picture challenges and opportunities our team identified
  when evaluating IATI data for country-level integration. In this post, we will explain
  in more detail our data comparison and methodology used to analyze IATI and in-country
  data.Step 1: Identifying Core Fields'
thumbnail: assets/featured-images/screen_shot_2015-03-12_at_10.17.12_am.png
thumbnail-fid: "6209"
thumbnail-alt: ""
---

Last week, [we shared big-picture challenges and opportunities](/news/iati-and-country-systems-data-evaluation-results) our team identified when evaluating IATI data for country-level integration. In this post, we will explain in more detail our data comparison and methodology used to analyze IATI and in-country data.

**Step 1: Identifying Core Fields**

To begin, we worked to identify data fields that are both commonly used (in reports, dashboards, maps) and commonly required (transaction dates, sectoral information, on/off budget status) in the Aid Management Platform systems and data management plans.

To ensure that data imported from IATI is usable and provides a value-add to the country system dataset, this set of “core” fields became our focus of analysis for data completeness and quality.

![](/assets/inline-images/screen_shot_2015-03-12_at_10.17.12_am_0.png)

**Step 2: Determining Data Desirability**

Next, we compared aggregate financial data reported by development partners (DPs) to IATI and AMP. This comparison was limited to a historical 2-3 year timeframe, as (i) many DPs began reporting to IATI only recently and (ii) two AMPs (Cote d’Ivoire and Chad) only began in 2014.

This step allowed us to identify (i) which DPs report to IATI but not AMP and (ii) which DPs had significant data gaps between the two systems. We considered IATI data to be desirable for AMP import where it included substantial gains over AMP in financial coverage.

**Step 3: Assessing Data Completeness**

Thirdly, we calculated the percentage of incomplete (blank) fields across the “core” set for each of the largest IATI reporters. Particular emphasis was placed on transaction fields (e.g. date, currency, transaction type, value). Transactions without dates cannot be imported into AMP, causing IATI reporters with high rates of empty transaction date fields to be excluded from consideration. This represented an initial assessment of import feasibility.

One key challenge was the absence of two frequently required AMP fields from the IATI standard: “On/Off Budget Status” and “National Planning Objectives.”

**Step 4: Evaluating Data Timeliness**

Fourth, using the IATI Timeliness Dashboard, we determined the frequency with which publishers are updating their data. Priority was given to reporters updating at least quarterly, with annual reporters only being considered for inclusion if (i) no existing AMP data for that reporter is available, or (ii) there is a significant increase in available financial data from IATI over AMP.

This step aimed to ensure that IATI data can be imported into AMP with a similar frequency to the rate at which DP country offices report to the AMP — typically quarterly.

**Step 5: Identifying Top Reporters**

Based upon the above criteria, we selected a subset of 5 IATI reporters per country to further investigate for import into AMP.

![](/assets/inline-images/screen_shot_2015-03-13_at_1.14.44_pm_0.png)

As noted above, the identified reporters tended to be DPs that were entirely absent from AMP, although some exceptions (based on extremely high funding or data quality discrepancies) exist. Timeliness of reporting was also a factor, with DPs who report quarterly (e.g. AfDB) given preference over those reporting annually. For the results of this data analysis, [visit last week’s post](/news/iati-and-country-systems-data-evaluation-results).

While data consistency, accuracy, and timeliness continue to pose a challenge in both datastreams, this evaluation phase has demonstrated that in-country systems stand to benefit from the addition of IATI data, where quality data exist.

**What’s Next?**

Phase two of this work will include:

1. Prepping IATI data for import to AMP by creating field and value mappings between IATI and AMP definitions;
2. Final development of the new IATI-AIMS Import Tool (including extensive usability testing by country government colleagues) and deployment in all five countries; and
3. In-person meetings with government and development partner stakeholders to train on the process, perform the data integration, and update country Data Management Plans to incorporate IATI data on a sustainable basis.

Stay tuned for additional updates.


