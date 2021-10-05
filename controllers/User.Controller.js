`use strict`;

const {userModel} =  require('../models/User.Model');
const axios = require('axios');

const getData = async (req,res)=>{
    let result = await axios.get('https://watches-world.herokuapp.com/watches-list/');
    res.status(200).json(await result.data);
}

const getFav = async (req,res) => {
    res.status(200).json(await userModel.find({}))
}

const createFav = async (req,res) => {
    let email = req.query.email;
    let fav = req.body

    let newUser = new userModel({email:email,favs:fav})
    newUser.save();

    res.status(200).json(await userModel.find({}));
}

const updateFav = async (req,res) => {
    let id = req.params.id;
    let updateFav = req.body;

    await userModel.findOne({_id:id}).then(async fav=>{
        fav.favs = updateFav;
        await fav.save();
    })

    res.status(200).json(await userModel.find({}))
}

const deleteFav = async (req,res) => {
    let id = req.params.id

    await userModel.findByIdAndDelete({_id:id})

    res.status(200).json(await userModel.find({}))
}

module.exports = {getData, createFav, getFav, updateFav, deleteFav}