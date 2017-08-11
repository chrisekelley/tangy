# Run the standard polymer build.
polymer build
# Remove the build of ckeditor because the Polymer build process doesn't include all of the necessary ckeditor files.
rm -r build/default/bower_components/ckeditor
cp -r bower_components/ckeditor build/default/bower_components/ckeditor
# Move aside the dat.json file so we can move our build to the sites directory.
mv ~/Sites/tangy-sandbox/dat.json ./
# Remove the tangy-sandbox site and replace it with our build.
rm -r ~/Sites/tangy-sandbox/*
mv build/default/* ~/Sites/tangy-sandbox/
# Move the dat.json back into tangy sandbox so that Beaker knows what it is.
mv dat.json ~/Sites/tangy-sandbox/
