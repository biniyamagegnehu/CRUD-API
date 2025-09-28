const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.get("/", (req,res) => {
    res.send("Hello")
})

const uri = 'mongodb+srv://biniyamagegnehu2_db:%40biniyamnohaminmd@cluster0.uuk3rel.mongodb.net/crudapi?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(uri).then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
        console.log("server is running on port 3000")
    })
}).catch((err) => {
    console.error("connection failed",err);
    
})

