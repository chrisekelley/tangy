# \<tangy\>

## Development setup

OS level dependencies:
```
npm install -g bower
npm intall -g polymer
```

Set up sandbox:
```
git clone git@github.com:tangerine-community/tangy
cd tangy
bower install
polymer serve
```

## Development setup for working on Editor functions
If you need to test any part of the application that uses the editor functions, you have two options that you may choose depending on what you need to test. If you just need to test CKEditor's abilities, turn off hiding of the `editorButtons` in `TangyApp.ready()`. Then you may click edit/view as you please. If you want the save/new page/new form buttons to work, you'll need to get the site into Beaker as a Dat that it holds the private key for. 


- Step 1: Create a site in Beaker Browser, call it `tangy-sandbox`.
- Step 2: When viewing your new dat site in Beaker's library view at `beaker://library/<dat UUID>`, click the dropdown menu in the top right of the page, click "change folder" and then select the root folder of the tangy repository.
- Step 3: Click `review changes`, then click `publish`. 
- Step 4: Click on the `index.html` file to open the site. Now you have editing capabilites and any change you make it code will be reflected on that site. You can click the lightning bolt in the URL bar to turn on live reloading.

WARNING: Remember that when you click save in the editor, it saves that files to disk. If you have made some edits to say index.html or any html directly, your changes may be overwritten with the template of the HTML files. Be sure to update the templates in `./src/tangy-app/tangy-app.html` found in the `TangyApp.templateTop` and `TangyApp.templateBottom`.

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
