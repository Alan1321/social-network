const express = require('express')
const router = express.Router();
// const Task = require('../models/Task')

const Task = require('../model/Task')

router.route('/getprofile').get((req,res)=>{
    res.send('hello world im in task router')
})

router.route('/addprofile').post(async (req,res)=>{
    console.log(req.body)
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
})

module.exports = router