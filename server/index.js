const express = require('express');
const app = express();

app.get('/', (requst, response) => {
    response.send({hello: 'world'});
});

app.listen(5000);