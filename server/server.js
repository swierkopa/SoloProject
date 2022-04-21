const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../src'))); //or should this be ../build?

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../src/index.html'));
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports = app;