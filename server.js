const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const getData = require('./controllers/getData.js');

app.use(cors());

app.get('/', getData.do);

app.listen(5000, () => {
    console.log("Running on http://localhost:5000");
})