all: test

build:
	npx @11ty/eleventy

test:
	npx @11ty/eleventy --serve
