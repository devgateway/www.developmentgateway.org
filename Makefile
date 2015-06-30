
build:
	time jekyll build --config _config.yml,_config.local.yml

clean:
	@echo "Cleaning generated assets."
	rm -rf public_html/generated public_html/icons
