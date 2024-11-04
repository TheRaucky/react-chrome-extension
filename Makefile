.PHONY: help install build all clean

NPM = npm
WEBPACK = npx webpack
DIST_DIR = './web-extension/popup/dist'

## —— The React-Chrome-Extension Makefile ⚡————————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Project 💻 ———————————————————————————————————————————————————————————————
install: ## Install the project
	$(NPM) install

build: ## Build the project
	$(WEBPACK) --mode production

all: ## Install and build the project
	@$(MAKE) install
	@$(MAKE) build

clean: # Remove dist directory
	rm -rf $(DIST_DIR)