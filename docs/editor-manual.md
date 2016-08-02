
# Editor Manual

 Project directory structure and a short description of what the directories contain:
* `assets` - various images and documents for the body of pages and blogs, e.g.:
  * `careers` - PDFs containing current job openings for the [join section](http://www.developmentgateway.org/connect/) on the connect page. These files are also reused on the [careers](http://www.developmentgateway.org/careers/) page
  * `finantials` - PDFs containing financial data for the [financials section](http://www.developmentgateway.org/about/#financials) on the about page.
  * `partner-logos` - images used on the [partnerships section](http://www.developmentgateway.org/about/#partnerships) on the about page.
  * `post-images` - images used for the blog post and blog listing pages.
  * `post-resources` - documents and presentations used on blog post pages.
  * `team-photos` - pictures used on the [Board of Directors and Team sections](http://www.developmentgateway.org/about/#board-of-directors) of the about page.
* `blog_posts` - individual blog post files
* `docs` - directory containing this and other documentation files.
* `site_data` - data files that controls the behavior of the website build process and various listings. Information in these files is probably used on multiple pages, e.g.:
  * `navigation` - files containing the links for the main and footer navigation menus that are visible on all pages.
  * `partners` - files containing lists with partners for the about page.
  * `poi_reach` - files containing various POI for the [reach](http://www.developmentgateway.org/reach/) page.
  * `team` - files containing lists with bord members, staff and consultants for the about page.
  * `careers.yml` - file with current job openings for the [join section](http://www.developmentgateway.org/connect/) on the connect page.
  * `financials.yml` - file with financial data for the [financials section](http://www.developmentgateway.org/about/#financials) on the about page.
* `site_source` - Markdown, HTML, JavaScript and SASS files for building the website pages and structure.


### More information:
* for creating and updating blog posts see [this page](pages/blog-posts.md)
* for creating and updating page content see [this page](pages/page-content.md)
* for understaning the file headers (called Front Matter) see [this page](other/front-matter.md)
* for understaning the `site_data` YAML files see [this page](other/understanding-yaml.md)
* for configuring elements included in multiple pages see [page](other/include.md)


### Quick Links:
* http://jekyllrb.com/docs/frontmatter/ - info about the file headers.
* https://en.wikipedia.org/wiki/YAML - syntax for the post header and other `.yml` files.
* http://jekyllrb.com/docs/posts/ - some info about blog posts.
* http://codebeautify.org/yaml-validator - for validating the frontmatter content.
* http://kramdown.gettalong.org/syntax.html - for syntax information inside `.md` files.
