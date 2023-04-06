const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    const apiKey =req.query.apiKey;
    // Validation pending
    //Billing pending
    res.send({data: 'API Key received'})
});

app.listen(8080);