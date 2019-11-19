const express = require('express');
const app = express();

app.listen(5000, function() {
    console.log('Its on');
});

app.get('/', function(req,res) {
    res.send('its on!');
});