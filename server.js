const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const expressNunjucks = require('express-nunjucks');

app = express();
app.use(serveStatic(__dirname + '/public/'));

app.set('views', __dirname + '/views');

const njk = expressNunjucks(app, {
  watch: true,
  noCache: true
});

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.render('index', {
    testTitle: 'Here is the test page title',
  });
});

app.listen(port);
console.log(`server started at port ${port}`);
