const express = require('express');
const app = express();

app.get('/', (req, res) => res.json('Hello ExpressJS'));

app.listen(3000, () => {
    console.log('Server runnning');
});
