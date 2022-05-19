const express = require('express')
const router = express.Router();
const conTask = require('../controllers/tasks')

// const Task = require('../model/Task')

// router.route('/read').get(async (req,res)=>{
//     try{
//         const tasks = await Task.find({})
//         res.status(200).json({tasks})
//     }catch(error){
//         res.status(500).json({msg:error})
//     }
// })

// router.route('/create').post(async (req,res)=>{
//     console.log(req.body)
//     try{
//         const task = await Task.create(req.body)
//         res.status(201).json({task})
//     }catch(error){
//         res.status(500).json({msg:error})
//     }
// })

router.route('/read').get(async (req, res)=>{
    try{        
        const data = await conTask.getProfile();
        res.status(200).json(data)
    }catch(error){
        res.status(500).json(error)
    }
})

router.route('/create').post(async(req, res)=>{
    try{   
        var duplicate = false;
        var result = []
        const profiles = await conTask.getProfile();
        profiles.forEach((element)=>{
            if(element.email === req.body.email){
                duplicate = true;
            }
        })

        if(duplicate){
            result[0] = 'Error Email Already Exists'
            result[1] = false
            return res.status(500).json({result})
        } 
        
        const data = await conTask.setProfile(req.body)
        result[0] = 'Account successfully created'
        result[1] = data
        res.status(200).json({result})
    }catch(error){
        res.status(500).json(error)
    }
})

router.route('/validate').post(async(req, res)=>{
    try{
        const data = await conTask.getProfile();
        var login = false;
        var profile = req.body
        var other = []

        data.forEach((element)=>{
            if(element.email === req.body.email){
                if(element.password === req.body.password){
                    login=true;
                    profile=element;
                }
                //return;
            }else{
                other.push(element)
            }
        })

        res.status(200).json({login, profile,other})
    }catch(error){
        res.status(500).json(error)
    }
})



module.exports = router