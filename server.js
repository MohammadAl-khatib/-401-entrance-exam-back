`use strict`;

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app= express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const MONGO_PORT=process.env.MONGO_PORT;
mongoose.connect(`${MONGO_PORT}/exam`,{usenewurlparser: true, useunifiedtopology: true});
const {getData, createFav, getFav, updateFav, deleteFav} = require('./controllers/User.Controller')

app.get('/data',getData);
app.get('/get-favs',getFav);
app.post('/create-fav',createFav);
app.put('/update-fav/:id',updateFav);
app.delete('/delete-fav/:id',deleteFav)


app.listen(PORT,()=>{
    console.log(`listen to ${PORT}`)
})