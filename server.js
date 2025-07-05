import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import productRouter from './Routes/Product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'
import paymentRouter from './Routes/payment.js'
import cors from 'cors';

const app = express();

app.use(bodyParser.json())

app.use(cors({
    origin:true,
    methods:[ "GET","POST","PUT","DELETE"],
    credentials:true
}))

// home testing route
app.get('/',(req,res)=>res.json({message:'This is home route'}))

// user Router
app.use('/api/user',userRouter)

// product Router
app.use('/api/product',productRouter)

// cart Router
app.use('/api/cart',cartRouter)

// address Router
app.use('/api/address',addressRouter)

// payment Router
app.use('/api/payment',paymentRouter)

mongoose.connect(
    "mongodb+srv://akankshashree51:tzBsANgkT5HNfkiR@cluster0.z5n3ban.mongodb.net/",{
        dbName:"E_Commerce"
    }
) .then(()=>console.log("MongoDB Connected Successfully..!"));
const port = 1000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))