polymer build
rm -r build/default/bower_components/ckeditor
cp -r bower_components/ckeditor build/default/bower_components/ckeditor
mv ~/Sites/tangy-sandbox/dat.json ./
rm -r ~/Sites/tangy-sandbox/*
mv build/default/* ~/Sites/tangy-sandbox/
mv dat.json ~/Sites/tangy-sandbox/
