const express = require('express');
const studentRouter = express.Router();

studentRouter.get('/', (req, res) => {
    res.send("Welcome to Student portal");
})
.get('/getStd', (req, res) => {
    res.send('Student fetched successfully');
})
.post('/postStd', (req, res) => {
    res.send('Student posted successfully');
});

module.exports = studentRouter;
