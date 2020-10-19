const express = require('express');
var path = require('path');
const app = express();
const port = 3000;

// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});