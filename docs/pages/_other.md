
## Content Info

1.  To link to and existing post you can use this markup
    ```
    [Development Gateway Helps Spur Development]({{ site.url }}{% post_url 2005-04-19-development-gateway-helps-spur-development %})
    ```

    Where "Development Gateway Helps Spur Development" is the text displayed to the user, and "2005-04-19-development-gateway-helps-spur-development"
    is the name of the post file without the `.md` extension. This liquid tag will output:

    > [Development Gateway Helps Spur Development]({{ site.url }}{% post_url 2005-04-19-development-gateway-helps-spur-development %}).

2.  Instead of using the usual markdown markup to include images in the page:
    ```
    ![Information Management](/images/other/information-management.png)
    ```
    One can now use a custom tag that also resizes the image to a set of predefined presets:
    ```
    {% image thumb-large {{ 'images/posts/2005/img1.png' }} title="Just a simple image"  alt="Just a simple image" role="img" %}
    ```
    For a list of image presents check: https://github.com/devgateway/www.developmentgateway.org/blob/develop/_config.yml

3.  As per HTML5 standard, all images should have an 'alt' attribute that needs to follow [these guidelines](http://www.w3.org/html/wg/drafts/html/master/semantics.html#alt).
