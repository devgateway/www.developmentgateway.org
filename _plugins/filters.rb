
module Jekyll
  module DGFilters
    # Only display ellements that have a property with a certain value.
    #
    # USAGE:
    # {% assign NEW_VAR = OLD_VAR | dg_find_all: 'featured', true %}
    def dg_find_all(input, property, value)
      return input unless input.is_a?(Enumerable)
      input.find_all{|item| item.data.key?(property) && item.data[property] == value }
    end
  end

end

Liquid::Template.register_filter(Jekyll::DGFilters)
