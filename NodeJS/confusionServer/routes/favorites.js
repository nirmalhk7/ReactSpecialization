const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');

const favRouter=express.Router();
favRouter.use(bodyParser.json());

favRouter.route('/')
.get(cors.cors,(req,res,next)=>{

})
.put(cors.cors,(req,res,next)=>{
    res.statusCode = 403;
    res.end('Unsupported');
})
.post(cors.cors,(req,res,next)=>{

})
.delete(cors.cors,(req,res,next)=>{

})
.catch((err) => next(err)); 

favRouter.route('/:dishId')
.get(cors.cors,(req,res,next)=>{
    res.statusCode = 403;
    res.end('Unsupported');
})
.put(cors.cors,(req,res,next)=>{
    res.statusCode = 403;
    res.end('Unsupported');
})
.post(cors.cors,(req,res,next)=>{

})
.delete(cors.cors,(req,res,next)=>{

})
.catch((err) => next(err)); 