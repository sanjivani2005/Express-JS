const express = require('express');

// Plugins
const PORT = 5001;

// Middleware
const sanji = express();
sanji.all('*',(req,res,next)=>{
console.log('Date ',new Date());
next();
})

// Route for front page
sanji.get('/', (req, res) => {
    res.send('Hello World! On the front page');
});

// Route for getting user data
sanji.get('/getUser', (req, res) => {
    res.send('User data page!');
});

// Route for posting user data
sanji.post('/postUser', (req, res) => {
    res.send('User data posted!');
});
sanji.put('/updateUser/:id',(req,res)=>{
    res.send(`User data updated successfully with id ${req.params.id} !`)
});

sanji.delete('/deleteUser/:id',(req,res)=>{
    res.send(`User data deleted successfully with id ${req.params.id}!`)
})


// Starting the server
sanji.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
    console.log(`Get user: http://localhost:${PORT}/getUser/`);
    console.log(`Post user: http://localhost:${PORT}/postUser/`);
    console.log(`Update user: http://localhost:${PORT}/updateUser/`);
    console.log(`Delete user: http://localhost:${PORT}/deleteUser/`)
});
