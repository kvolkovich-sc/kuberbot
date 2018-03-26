let express = require('express');
let router = require('./router');
let config = require('./config');

let app = express();

let host = config.host;
let port = config.port;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(router(config));

app.listen(port, host, function(err) {
  if (err) {
    console.error(err);
  }

  console.info(`Server listening at http://${host}:${port}`);
});

process.on('exit', function() {
  console.warn('Server has been stopped');
});
