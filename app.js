const express = require('express');

const app = express();

// whatch for incoming request of method GET to the route : http://localhost:3050/api

app.get('/api', (req, res) => {
  res.send({ hi: 'there' });
});

app.post('/api', (req, res) => {

});

app.put('/api', (req, res) => {

});

app.delete('/api', (req, res) => {

});

module.exports = app;
