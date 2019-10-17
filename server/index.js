const express = require('express');
const app = express();

app.get('/', (requst, response) => {
    response.send({hello: 'world'});
});

// listen for Heroku environment variable PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);