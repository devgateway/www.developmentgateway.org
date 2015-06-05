
module Jekyll
  class StripWhiteSpace < Liquid::Block
    def render(context)
      # Reduce whitespace inside tags.
      super.gsub />\s+(.*?)\s+</, '> \1 <'
      # Remove whitespace between tags.
      super.gsub />\s*</, '><'
    end
  end

  class ReduceWhiteSpace < Liquid::Block
    def render(context)
      # Reduce whitespace inside tags.
      super.gsub />\s+(.*?)\s+</, '> \1 <'
      # Reduce whitespace between tags.
      super.gsub />\s+</, '> <'
    end
  end

  class ForceReduceWhiteSpace < Liquid::Block
    def render(context)
      # Reduce all whitespace.
      super.gsub /\s+/, ' '
    end
  end
end

Liquid::Template.register_tag('stripwhitespace', Jekyll::StripWhiteSpace)
Liquid::Template.register_tag('reducewhitespace', Jekyll::ReduceWhiteSpace)
Liquid::Template.register_tag('forcereducewhitespace', Jekyll::ForceReduceWhiteSpace)
