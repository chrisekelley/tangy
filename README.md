# \<tangy\>

## Sandbox setup
- Step 0: Install prereqs of Bower components by running `bower install`.
- Step 1: Create a site in Beaker Browser, call it `tangy-sandbox` so that it will end up living at `~/Sites/tangy-sandbox`. The build script depends on that path of the sandbox.
- Step 2: Run `./build.sh` to try out your first build. You'll now see the site is no longer blank but has a bunch of files in it.


## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
