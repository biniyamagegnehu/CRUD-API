const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please enter the name "]
        },
        quantiy:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:false
        }
    },
    {
        Timestamp:true
    }
);

const Product = mongoose.model("Product",ProductSchema)

module.exports = Product;