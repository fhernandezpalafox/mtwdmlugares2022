const express = require('express')
const app = express()
var db =  require('./db');

var port = process.env.PORT || '3000';
app.set('port', port);


app.get('/lugares', (req, res) => {
  db.query('SELECT * from lugares', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))