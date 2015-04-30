---
layout: page
title: Innovation
title_summary: because technology should benefit the common good
permalink: /innovation/
weight: 4
---



{% multicols pageintro half %}

<img src="/images/other/innovation-graphic.png" alt="innovation points" role="banner">

<--colbreak-->

<h3 class="highlighted-title intro-title">Tackling the world’s toughest problems by challenging established boundaries and partnering to research and co-create impactful solutions.</h3>
{% endmulticols %}

<div class="page-section">
<h3>Language on DG style of Innovation, to include Research Partnership Language. Nunc arcu augue, imperdiet at leo sit amet, convallis semper nibh. Integer eu finibus risus. </h3>

<p>Proin sit amet vestibulum dui. Nam euismod sem non velit vulputate tempus. Vestibulum quam mi, tincidunt nec lectus eget, finibus imperdiet nisi. Nam eget mi vulputate, rhoncus nunc sed, elementum tortor. Phasellus tristique diam ac quam pellentesque, eget laoreet ipsum vulputate.</p>
</div>



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

          <div class="blog-lede">{{ post.lede | markdownify }}</div>

          <p class="blog-date">{{ post.date | date: '%B %d, %Y' }}</p>
        </div>
      </article>
    </div>
    {% endfor %}
  </div>
</div>
