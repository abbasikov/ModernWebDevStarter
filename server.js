const path = require('path');
const express = require('express');

const port = 3000;
const app = express();



app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'test.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
