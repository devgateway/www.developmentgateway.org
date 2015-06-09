# Title: Jekyll Icon Tag
#
# Description: Use SVG icons in Jekyll.
#
# Syntax:  {% icon [preset or WxH] path/to/icon.svg [attr="value"] %}
# Example: {% icon large calendar.svg alt="Click to view Calendar." %}
#          {% icon gallery calendar.svg alt="Click to view Calendar." class="cal-icon" data-special %}
#          {% icon 350xAUTO calendar.svg alt="Click to view Calendar." class="cal-icon" data-special %}
#

require 'fileutils'
require 'pathname'
require 'nokogiri'

module Jekyll

  class IconTag < Liquid::Tag

    def initialize(tag_name, markup, tokens)
      @markup = markup
      @sprite_name = 'sprite.svg'
      super
    end

    def render(context)
      # Render any liquid variables in tag arguments and unescape template code.
      render_markup = Liquid::Template.parse(@markup).render(context).gsub(/\\\{\\\{|\\\{\\%/, '\{\{' => '{{', '\{\%' => '{%')

      @tag_data = /^(?:(?<preset>[^\s.:\/]+)\s+)?(?<icon_src>[^\s]+\.[a-zA-Z0-9]{3,4})\s*(?<html_attr>[\s\S]+)?$/.match(render_markup)
      raise "IconTag can't read this tag. Try {% icon [preset or WxH] path/to/icon.svg [attr=\"value\"] %}." unless @tag_data

      # Gather settings
      @settings = {}
      site_context = context.registers[:site]
      if site_context.config['icon']
        @settings = site_context.config['icon']
      end

      # Make sure the presets hash always exists.
      @settings['presets'] = {} if @settings['presets'].nil?

      # Assign defaults
      @settings['source'] ||= '.'
      @settings['output'] ||= 'icons'

      # Prevent Jekyll from erasing our generated files
      site_context.config['keep_files'] << @settings['output'] unless site_context.config['keep_files'].include?(@settings['output'])

      preset = {}
      if @tag_data[:preset] and @settings['presets'].has_key? @tag_data[:preset]
        preset = @settings['presets'][@tag_data[:preset]]
        raise "IconTag can't find the \"#{@tag_data[:preset]}\" preset. Check icon presets in _config.yml for a list of presets." unless preset
      end

      # Prepare variables.
      @info = {
        :src => File.join(@settings['source'], @tag_data[:icon_src]),
        :url => Pathname.new(File.join('/', @settings['output'], @sprite_name)).cleanpath,
      }

      if preset
        @info[:width] = preset['width']
        @info[:height] = preset['height']
      elsif dim = /^(?:(?<width>\d+)|auto)(?:x)(?:(?<height>\d+)|auto)$/i.match(@tag_data[:preset])
        @info[:width] = dim['width']
        @info[:height] = dim['height']
      end

      # Add the file name as a symbol ID.
      # TODO: Make sure we have clean file names!
      ext = File.extname(@info[:src])
      basename = File.basename(@info[:src], ext)
      @info[:id] = basename

      # Get sprite path.
      @info[:sprite_path] = File.join(site_context.dest, @settings['output'], @sprite_name)

      sprite_document = sprite_get_document
      icon_in_sprite = sprite_document.css('#' + @info[:id]).first
      if icon_in_sprite.nil?
        image_source_path = File.join(site_context.source, @info[:src])
        puts "Adding \"#{@info[:id]}\" to sprite: #{@info[:sprite_path]}"

        sprite_add_icon(sprite_document, image_source_path)
      end

      # Generate the inline SVG
      inline_svg = get_inline_svg
      unless inline_svg
        return
      end

      # Return the markup!
      inline_svg
    end

    # @return [Nokogiri::XML::Document]
    def sprite_get_document
      # Make sure a sprite exists, even if it is empty.
      unless File.exists? @info[:sprite_path]
        Nokogiri::XML::Builder.new do |builder|
          # Add the DOCTYPE.
          builder.doc.create_internal_subset(
            'svg',
            '-//W3C//DTD SVG 1.1//EN',
            'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'
          )

          # Create a new empty SVG tag.
          builder.svg('xmlns' => 'http://www.w3.org/2000/svg')

          # Create the directory.
          FileUtils::mkdir_p(File.dirname(@info[:sprite_path]))

          # Save the sprite
          File.open(@info[:sprite_path], 'w') do |file|
            file.puts(builder.to_xml(:indent => 0))
            file.close
          end
        end
      end

      return sprite_read_file
    end

    # @return [Nokogiri::XML::Document]
    def sprite_read_file
      unless File.exist?(@info[:sprite_path])
        raise "Field does not exist #{@info[:sprite_path]}"
      end

      file = File.open(@info[:sprite_path], 'r')
      begin
        # Make sure we have valid SVG files
        document = Nokogiri::XML.parse(file) do |config|
          # http://www.nokogiri.org/tutorials/parsing_an_html_xml_document.html#parse_options
          config.options = Nokogiri::XML::ParseOptions::STRICT | Nokogiri::XML::ParseOptions::NONET | Nokogiri::XML::ParseOptions::NOBLANKS
        end
      rescue Nokogiri::XML::SyntaxError => e
        raise "SyntaxError: #{@info[:sprite_path]}: #{e}"
      end
      file.close

      raise "Could not read: #{@info[:sprite_path]}" if document.nil?
      return document
    end

    def sprite_add_icon(sprite, svg_icon_path)
      file = File.open(svg_icon_path)
      begin
        # Make sure we have valid SVG files
        document = Nokogiri::XML.parse(file) { |config| config.strict }
        source_svg_document = document.search('svg').first
      rescue Nokogiri::XML::SyntaxError => e
        raise "SyntaxError: #{svg_icon_path}: #{e}"
      end
      file.close

      # Get the SVG document.
      sprite_svg_document = sprite.search('svg').first

      # Add an empty symbol to the sprite builder.
      icon_symbol = Nokogiri::XML::Node.new 'symbol', sprite

      # Add extra symbol attributes.
      icon_symbol['id'] = @info[:id]
      source_svg_document.each do |node|
        if %w(viewBox height width).include? node[0]
          icon_symbol[node[0]] = node[1]
        end
      end

      # Copy all path elements to the symbol.
      source_svg_document.element_children.each do |node|
        icon_symbol.add_child(node.to_xml)
      end

      # Add the icon to the sprite.
      sprite_svg_document.add_child(icon_symbol)

      # Save the sprite
      File.open(@info[:sprite_path], 'w') do |file|
        file.puts(sprite.to_xml(:indent => 0))
        file.close
      end
    end

    def get_inline_svg

      # Prepare attributes
      html_attr = {}
      html_attr[:role] = 'presentation'
      html_attr[:width] = @info[:width] if @info[:width]
      html_attr[:height] = @info[:height] if @info[:height]

      # Append/override tags defined inside the icon tag.
      if @tag_data[:html_attr]
        html_attr = html_attr.merge(
          Hash[ *@tag_data[:html_attr].scan(/(?<attr>[^\s="]+)(?:="(?<value>[^"]+)")?\s?/).flatten ]
        )
      end

      html_attr_string = html_attr.inject('') { |string, attrs|
        if attrs[1]
          string << "#{attrs[0]}=\"#{attrs[1]}\" "
        else
          string << "#{attrs[0]} "
        end
      }

      return "<svg #{html_attr_string}><use xlink:href=\"#{@info[:url]}##{@info[:id]}\"></use></svg>"
    end
  end
end

Liquid::Template.register_tag('icon', Jekyll::IconTag)
