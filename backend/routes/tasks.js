const express = require('express')
const router = express.Router();
// const Task = require('../models/Task')

const Task = require('../model/Task')

router.route('/read').get(async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
})

router.route('/create').post(async (req,res)=>{
    console.log(req.body)
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
})

module.exports = router