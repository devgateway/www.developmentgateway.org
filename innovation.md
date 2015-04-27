---
layout: page
title: Innovation
title_summary: because technology should benefit the common good
permalink: /innovation/
weight: 4
---


<div class="page-section">
<img src="/images/other/innovation-banner.png" alt="innovation points" role="banner">
</section>

<div class="page-layout-element">
  <h2>Innovation stories released by Development Gateway</h2>
  <div class="columns-3 clearfix">
    {% for post in site.posts | limit: 8 %}
    <div class="blog-entry-wrapper column clearfix">
      <article class="blog-entry">
        <div class="blog-image-wrapper">
          {% image thumb_large {{ post.thumbnail | prepend: site.baseurl }} alt="{{ post.thumbnail-alt }}" %}
        </div>

        <div class="blog-info">
          <h3 class="blog-title"><a href="{{ post.url }}">{{ post.title }}</a></h3>

          <div class="blog-lede clearfix">{{ post.lede | markdownify }}</div>

          <p class="blog-date">{{ post.date | date: '%B %d, %Y' }}</p>
        </div>
      </article>
    </div>
    {% endfor %}
  </div>
</div>
