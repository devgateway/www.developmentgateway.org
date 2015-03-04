
module Jekyll
  class MultiColsBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
       super

       @extra_classes = nil
       if markup
         @extra_classes = markup
       end
    end

    def render(context)
      columns = super.split(/<--colbreak-->/)

      generate_markup(columns, context)
    end

    def generate_markup(columns, context)
      wrapper_classes = [
        'columns',
        "columns-" + columns.length.to_s,
        @extra_classes
      ].join(" ")

      markup = "<div class=\"#{wrapper_classes}\">"

      columns.each { |column|
        tmp = Liquid::Template.parse(column).render!(context);
        markup += '<div class="column">'
        markup += Kramdown::Document.new(tmp).to_html
        markup += '</div>'
      }

      markup += '</div>'
    end
  end
end

Liquid::Template.register_tag('multicols', Jekyll::MultiColsBlock)
