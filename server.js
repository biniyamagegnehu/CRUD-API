const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product.model")
const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Hello")
})

app.post("/api/products",async (req,res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch {
        res.status(500).json({message:error.message})
    }
});

app.get("/api/products" ,async (req,res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get("/api/product/:id" ,async (req,res) => {
    try {
        const {id} = req.params; 
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.put("/api/product/:id" ,async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        
        if(!product){
            res.status(404).json({message:error.message})
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.delete("/api/product/:id" , async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            res.status(400).json({message:error.message})
        }

        res.status(200).json({message:"Deleted succefully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
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

