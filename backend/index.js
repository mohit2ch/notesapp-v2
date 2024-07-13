import express from 'express';
import { PORT, mongoDBUrl } from './config.js';
import mongoose from 'mongoose';
import chapterRoute from './Routes/chapterRoute.js'
import noteRoute from './Routes/noteRoute.js'
import cors from 'cors';


const app = express();
app.use(express.json());

app.use(cors());

app.get('/', function(req, res){
    res.send("<h1>Hello, World!</h1>")
})

app.use('/chapter', chapterRoute);

app.use('/note', noteRoute);

mongoose.connect(mongoDBUrl).then(function(){
    console.log("connected to mongodb");
    app.listen(PORT, function(){
        console.log(`App is running on port ${PORT}`);
    })
}).catch(function(error){
    console.log(error);
})