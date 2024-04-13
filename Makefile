all: build pack test

install:
	npm install @11ty/eleventy @divriots/jampack

build:
	npx @11ty/eleventy

test:
	npx @11ty/eleventy --serve

clean:
	rm -rf public

pack: 
	npx @divriots/jampack ./public