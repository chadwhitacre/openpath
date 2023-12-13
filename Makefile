# Patch version should match https://formulae.brew.sh/formula/ruby@2.7
# Also update in Gemfile.
bundle := /opt/homebrew/Cellar/ruby@2.7/2.7.8_1/bin/bundle

default: bundle
	$(bundle) exec jekyll serve --host 0.0.0.0 --livereload --drafts

bundle: ruby
	# Installs GitHub Pages gem via Gemfile
	# https://pages.github.com/versions/
	$(bundle) install

ruby:
	brew install ruby@2.7

clean:
	rm -rf .bundle/ruby
