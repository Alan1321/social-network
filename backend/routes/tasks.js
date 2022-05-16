const express = require('express')
const router = express.Router();

router.route('/getprofile').get((req,res)=>{
    res.send('hello world im in task router')
})

router.route('/addprofile').post((req,res)=>{

})

module.exports = router