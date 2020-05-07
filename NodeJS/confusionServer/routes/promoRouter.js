const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promos to you!');
})
.post((req, res, next) => {
    res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promo');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});


promoRouter.route('/:promoid')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.send('Details for promo #'+req.params.promoid);
})
.post((req, res, next) => {
    res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description+' of dish #'+req.params.promoid);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on promo '+req.params.promoid);
})
.delete((req, res, next) => {
    res.end('Deleting promo #'+req.params.promoid);
});


module.exports = promoRouter;