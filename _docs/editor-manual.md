
# Editor Manual

## Menu Items

In order to add a new item to the main menu you need to create a Markdown file.

* The file name should have only lowercase letters, numbers and hyphens and end in `.md`
* The file should start with a [Front Matter](#front-matter).
* The file should contain only valid markdown, see [content info](#front-matter).

### Front Matter

TODO!

For more information see the Jekyll [Front Matter Documentation](http://jekyllrb.com/docs/frontmatter) page or create an issue.

## Content Info

TODO!

To link to and existing post you can use this markup
```
[Development Gateway Helps Spur Development]({% post_url 2005-04-19-development-gateway-helps-spur-development %})
```

Where `Development Gateway Helps Spur Development` is the text displayed to the user, and `2005-04-19-development-gateway-helps-spur-development` is the name of the post file without the `.md` extension. This liquid tag will output:

> [Development Gateway Helps Spur Development]({% post_url 2005-04-19-development-gateway-helps-spur-development %}).

## Blog Tags

Format reminder [here](https://en.wikipedia.org/wiki/YAML#Lists). 

For more information on how work with content see the [kramdown Quick Reference](http://kramdown.gettalong.org/quickref.html) page.

