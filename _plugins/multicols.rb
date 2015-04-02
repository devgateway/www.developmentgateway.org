
module Jekyll
  class MultiColsBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
       super

       @extra_classes = nil
       @html = nil

       if markup =~ /^([a-z0-9\s-]+)\|\s*(render-as-html)\s*$?/i
         @extra_classes = $1.strip
         @html = $2
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

        markup += '<div class="column">'

        if @html == 'render-as-html'
          markup += column
        else
          tmp = Liquid::Template.parse(column).render!(context);
          markup += Kramdown::Document.new(tmp).to_html
        end

        markup += '</div>'
      }

      markup += '</div>'
    end
  end
end

Liquid::Template.register_tag('multicols', Jekyll::MultiColsBlock)
