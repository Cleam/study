fis.match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
});

fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
});

/*fis.match('*.{less,css}', {
  packTo: '/static/aio.css'
});

fis.match('*.js', {
  packTo: '/static/aio.js'
});
*/

