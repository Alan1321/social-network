const Task = require('../model/Task')

async function getProfile(){
    try{
        const tasks = await Task.find({})
        return tasks
    }catch(error){
        return {msg:error}
    }
}

async function setProfile(profile) {
    try{
        const task = await Task.create(profile)
        return task
    }catch(error){
        return {msg:error}
    }
}

module.exports = {
    getProfile,
    setProfile,
}


