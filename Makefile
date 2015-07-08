
build:
	@echo "Building the website..."
	@jekyll build --config _config.yml,_config.local.yml && echo "BUILD SUCCESSFUL!"

clean:
	@echo "Cleaning generated assets."
	rm -rf public_html/generated public_html/icons
