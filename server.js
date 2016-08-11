var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.listen(8080, () => {
    console.log("Server is listening on port 8080...");
});