const express = require('express')
const router = express.Router();

router.route('/').get((req,res)=>{
    res.send('hello world im in task router')
})

module.exports = router