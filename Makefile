all: test

install:
	npm install @11ty/eleventy

build:
	npx @11ty/eleventy

test:
	npx @11ty/eleventy --serve

clean:
	rm -rf public
