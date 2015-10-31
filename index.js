var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');


app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('public/index.html', { root: __dirname });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});







