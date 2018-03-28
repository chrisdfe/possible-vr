const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

app = express();
console.log('Serving from: ' + __dirname + '/dist/');
app.use(serveStatic(__dirname + '/public/'));

app.set('view engine', 'ejs');

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.render('index', {
    testTitle: 'Here is the test page title',
  });
});

app.listen(port);
console.log('server started '+ port);
