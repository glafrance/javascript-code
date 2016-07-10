var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'), (err) => {
        if (err) {
            console.log("problem serving index.html");
            res.send("problem serving index.html");
        }
    });
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080...");
});