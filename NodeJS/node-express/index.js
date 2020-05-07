const express=require('express');
const http=require('http');
const hostname= 'localhost';
const port = 3000;
const morgan= require('morgan');
const bodyParser = require('body-parser');

const app= express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));

const dishRouter=require('./routes/dishRouter');
const promoRouter=require('./routes/promoRouter');
const leaderRouter=require('./routes/leaderRouter');

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server at http://${hostname}:${port}`)
});