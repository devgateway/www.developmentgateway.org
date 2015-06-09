# Title: Jekyll Image Tag
# Authors: Rob Wierzbowski : @robwierzbowski
#
# Description: Better images for Jekyll.
#
# Download: https://github.com/robwierzbowski/jekyll-image-tag
# Documentation: https://github.com/robwierzbowski/jekyll-image-tag/readme.md
# Issues: https://github.com/robwierzbowski/jekyll-image-tag/issues
#
# Syntax:  {% image [preset or WxH] path/to/img.jpg [attr="value"] %}
# Example: {% image poster.jpg alt="The strange case of Dr. Jekyll" %}
#          {% image gallery poster.jpg alt="The strange case of Dr. Jekyll" class="gal-img" data-selected %}
#          {% image 350xAUTO poster.jpg alt="The strange case of Dr. Jekyll" class="gal-img" data-selected %}
#
# See the documentation for full configuration and usage instructions.

require 'fileutils'
require 'pathname'
require 'mini_magick'

module Jekyll

  class ImageTag < Liquid::Tag

    def initialize(tag_name, markup, tokens)
      @markup = markup
      super
    end

    def render(context)
      # Render any liquid variables in tag arguments and unescape template code
      render_markup = Liquid::Template.parse(@markup).render(context).gsub(/\\\{\\\{|\\\{\\%/, '\{\{' => '{{', '\{\%' => '{%')

      @tag_data = /^(?:(?<preset>[^\s.:\/\|]+)(?:\|(?<resize>(?:fill|fit)))?\s+)?(?<image_src>[^\s]+\.(jpe?g|png|svg))\s*(?<html_attr>[\s\S]+)?$/.match(render_markup)
      raise "ImageTag can't read this tag. Try {% image [preset or WxH] path/to/img.jpg [attr=\"value\"] %}." unless @tag_data

      # Gather settings.
      @settings = {}
      site_context = context.registers[:site]
      if site_context.config['image']
        @settings = site_context.config['image']
      end

      # Make sure the presets hash always exists.
      @settings['presets'] = {} if @settings['presets'].nil?

      preset = {}
      if @tag_data[:preset] and @settings['presets'].has_key? @tag_data[:preset]
        preset = @settings['presets'][@tag_data[:preset]]
        raise "ImageTag can't find the \"#{@tag_data[:preset]}\" preset. Check image presets in _config.yml for a list of presets." unless preset
      end

      # Assign defaults
      @settings['source'] ||= '.'
      @settings['output'] ||= 'generated'

      # Prevent Jekyll from erasing our generated files
      site_context.config['keep_files'] << @settings['output'] unless site_context.config['keep_files'].include?(@settings['output'])

      # Prepare variables.
      @info = {
        :src => File.join(@settings['source'], @tag_data[:image_src]),
      }

      @info[:src_path] = Pathname.new(File.join(site_context.source, @info[:src])).cleanpath.to_s
      unless File.exists?@info[:src_path]
        puts 'Missing:'.yellow + " #{@info[:src_path]}"
        return
      end

      # URL prefix for the generated file.
      @info[:url_prefix] = '/'
      if site_context.config['baseurl'] or site_context.config['url']
        @info[:url_prefix] = File.join(site_context.config['url'], site_context.config['baseurl']);
      end

      if preset
        @info[:width] = preset['width']
        @info[:height] = preset['height']
        @info[:preset] = @tag_data[:preset]
        @info[:resize] = @tag_data[:resize]
      elsif dim = /^(?:(?<width>\d+)|auto)(?:x)(?:(?<height>\d+)|auto)?$/i.match(@tag_data[:preset])
        @info[:width] = dim['width']
        @info[:height] = dim['height']
        @info[:resize] = @tag_data[:resize]
      end

      @info[:resize] = if not @tag_data[:resize].nil?
        @tag_data[:resize]
      elsif preset['resize']
        preset['resize']
      else
        'fill'
      end

      # Prepare the destination info.
      if @tag_data[:preset].nil?
        @info[:dst_folder] = Pathname.new(File.join(@settings['output'], "#{gen_width.round}x#{gen_height.round}", File.dirname(@info[:src]))).cleanpath.to_s
      else
        @info[:dst_folder] = Pathname.new(File.join(@settings['output'], @tag_data[:preset], File.dirname(@info[:src]))).cleanpath.to_s
      end

      # Print the HTML markup.
      html_markup = get_html_markup(site_context, preset)
      unless html_markup
        return
      end
      html_markup
    end


    def get_html_markup(site_context, preset)
      # Prepare attributes
      @html_attr = {}
      @html_attr[:width] = @info[:width] if @info[:width]
      @html_attr[:height] = @info[:height] if @info[:height]

      # Append/override tags defined inside the icon tag.
      if @tag_data[:html_attr]
        @html_attr = @html_attr.merge(
          Hash[ *@tag_data[:html_attr].scan(/(?<attr>[^\s="]+)(?:="(?<value>[^"]+)")?\s?/).flatten ]
        )
      end

      if preset && preset['attr']
        @html_attr = preset['attr'].merge(@html_attr)
      end

      # Generate resized images
      generate_image(site_context)
      unless @info[:dst]
        return
      end

      html_attr_string = @html_attr.inject('') { |string, attrs|
        if attrs[1]
          string << "#{attrs[0]}=\"#{attrs[1]}\" "
        else
          string << "#{attrs[0]} "
        end
      }

      # Return the markup!
      "<img src=\"#{@info[:url_prefix]}#{@info[:dst]}\" #{html_attr_string}>"
    end

    def generate_image(site_context)
      image = MiniMagick::Image.open(@info[:src_path])

      ext = File.extname(@info[:src])
      basename = File.basename(@info[:src], ext)

      # Determine the original image dimensions.
      orig_width = image[:width].to_f
      orig_height = image[:height].to_f
      orig_ratio = orig_width/orig_height

      # Determine the dimensions for the generated image.
      gen_width = if @info[:width]
        @info[:width].to_f
      elsif @info[:height]
        orig_ratio * @info[:height].to_f
      else
        orig_width
      end
      gen_height = if @info[:height]
        @info[:height].to_f
      elsif @info[:width]
        @info[:width].to_f / orig_ratio
      else
        orig_height
      end
      gen_ratio = gen_width/gen_height

      # Don't allow upscaling. If the image is smaller than the requested dimensions, recalculate.
      if ext != '.svg'
        if orig_width < gen_width || orig_height < gen_height
          undersize = true
          gen_width = if orig_ratio < gen_ratio then orig_width else orig_height * gen_ratio end
          gen_height = if orig_ratio > gen_ratio then orig_height else orig_width / gen_ratio end
        end
      end

      # Convert all SVGs to PNGs.
      if ext == '.svg'
        # Change the generated image format.
        image.format 'png'

        # Change generated image extension.
        ext = '.png'

        # Flatten layers and fill with transparent pixels.
        # @see: http://www.imagemagick.org/Usage/layers/#coalesce
        #image.layers "coalesce"
      end

      gen_name = "#{basename}#{ext}"
      gen_rel_path = File.join(@info[:dst_folder], gen_name)
      gen_full_path = File.join(site_context.dest, @info[:dst_folder], gen_name)

      # Generate resized files
      unless File.exists?(gen_full_path)
        warn 'Warning:'.yellow + " #{@info[:src]} is smaller than the requested output file. It will be resized without upscaling." if undersize

        #  If the destination directory doesn't exist, create it
        FileUtils.mkdir_p(File.dirname(gen_full_path)) unless File.exist?(File.dirname(gen_full_path))

        # Let people know their images are being generated
        puts "Creating image: #{gen_rel_path} (#{@info[:resize]})"

        # Scale and crop.
        image.combine_options do |i|
          i.layers 'Optimize'
          i.background 'white'
          i.flatten

          # Scale down the images.
          if @info[:resize] == 'scale'
            # Make the image fit inside the given dimensions.
            i.scale "#{gen_width}x#{gen_height}"
          elsif @info[:resize] == 'fit'
            # Make the image fit inside the given dimensions.
            i.resize "#{gen_width}x#{gen_height}"
            i.gravity 'center'
            i.extent "#{gen_width}x#{gen_height}"
          elsif @info[:resize] == 'fill'
            # Make the image fill the given dimensions. (cropped image)
            i.resize "#{gen_width}x#{gen_height}^"
            i.gravity 'center'
            i.extent "#{gen_width}x#{gen_height}"
          else
            warn 'Warning:'.yellow + " unknown action \"#{@info[:resize]}\" for #{@info[:src]}"
          end
        end

        image.write File.join(site_context.dest, @info[:dst_folder], gen_name)

        # Updated the image dimensions.
        @html_attr[:height] = image[:height].to_i
        @html_attr[:width] = image[:width].to_i
      end

      # Determine file path, relative to site root.

      @info[:dst] = Pathname.new(File.join(@info[:dst_folder], gen_name)).cleanpath.to_s
    end
  end
end

Liquid::Template.register_tag('image', Jekyll::ImageTag)
