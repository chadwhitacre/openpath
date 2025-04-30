.PHONY: default bundle clean

default: bundle
	bundle exec jekyll serve --host 0.0.0.0 --livereload --drafts --future

bundle:
	bundle install

clean:
	rm -rf .bundle/ruby
