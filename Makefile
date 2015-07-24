# Determine the workspace path.
ifneq ($(words $(WORKSPACE)),0)
	# Use the provided WORKSPACE variable.
	workspace_path := "${WORKSPACE}"
else
	# Determine the working path.
	mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
	workspace_path := $(dir $(mkfile_path))
endif

build:
	@echo "Building the website from ${workspace_path}..."
	@echo rvm in ${workspace_path} do jekyll build --config _config.yml,_config.local.yml && echo "Jekyll build has finished!"

clean:
	@echo "Cleaning generated assets."
	rm -rf public_html/generated public_html/icons
