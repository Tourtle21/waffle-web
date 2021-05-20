require('dotenv').config();
const express = require('express'),
      path = require('path'),
      app = express(),
      emailCtrl = require('./controllers/emailCtrl'),
      {SERVER_PORT} = process.env

app.use(express.json());


app.post('/email', emailCtrl.email);

app.use(express.static(__dirname + '/../build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})
app.listen(SERVER_PORT, () => console.log(`Server has started on port ${SERVER_PORT}`));
