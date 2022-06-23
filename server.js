require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

const server = http.createServer(app);

mongoose.connection.on('connected',()=>console.log('connected'));
mongoose.connection.on('disconnected',()=>console.log('disconnected'))
mongoose.connection.on('error',(err)=>console.log(err))


server.listen(3000,async (req,res)=>{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('listening on port 3000');
})