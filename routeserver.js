const express=require('express');

//plugings
PORT = 5003;

//middleware
const app=express();

app.route('/employee')
.get((req,res)=>{res.send("Employee fetch ")})
.post((req,res)=>{res.send("Employee posted  ")})
.put((req,res)=>{res.send("Employee Updated ")})
.delete((req,res)=>{res.send("Employee deleted  ")})

app.route('/students')
.get((req, res) => {
        res.send("Student fetch");
        }

).post((req, res) => {
    res.send("Student posted");
    }
)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}/employee`)
    console.log(`server is running on http://localhost:${PORT}/students`)
})
