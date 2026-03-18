const express = require('express');
const app = express();
const apiRoutes = require('./routes/Routes');

app.use(express.json());
app.use(apiRoutes);

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ erro: err.message });
});

module.exports = app;