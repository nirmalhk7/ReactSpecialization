const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();
const multer = require('multer');
const uploadRouter = express.Router();
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'public/images');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});

const imageFileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
};


const upload= multer({ storage: storage, fileFilter: imageFileFilter});

uploadRouter.use(bodyParser.json())
uploadRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 403;
    res.end('operation not supported');
})
.delete((req, res, next) => {
    res.statusCode = 403;
    res.end('operation not supported');
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('operation not supported');
})
.post(upload.single('imageFile'),(req, res) => {
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(req.file);
});

module.exports = uploadRouter;