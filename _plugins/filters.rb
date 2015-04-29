
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

    # Use a default value for missing variables
    #
    # This filter is in Liquid master, but not in Jekyll v2.4.0.
    # https://github.com/Shopify/liquid/commit/5db1695694e1cbf12892d5dd67c7773282a669af
    #
    # USAGE:
    # {{ myVar | default: 'Default value' }}
    def default(input, default_value = "")
      is_blank = input.respond_to?(:empty?) ? input.empty? : !input
      is_blank ? default_value : input
    end

    # Concat lists
    #
    # It only just landed in liquid, so one day we can drop this
    # https://github.com/Shopify/liquid/pull/540
    #
    # USAGE:
    # {% assign joined = list_one | concat: list_two %}
    def concat(input, array)
      InputIterator.new(input).concat(array)
    end
    # copied from Liquid::StandardFilters because I don't know ruby...
    class InputIterator
      include Enumerable

      def initialize(input)
        @input = if input.is_a?(Array)
          input.flatten
        elsif input.is_a?(Hash)
          [input]
        elsif input.is_a?(Enumerable)
          input
        else
          Array(input)
        end
      end

      def join(glue)
        to_a.join(glue)
      end

      def concat(args)
        to_a.concat args
      end

      def reverse
        reverse_each.to_a
      end

      def each
        @input.each do |e|
          yield(e.respond_to?(:to_liquid) ? e.to_liquid : e)
        end
      end
    end
  end

end

Liquid::Template.register_filter(Jekyll::DGFilters)
