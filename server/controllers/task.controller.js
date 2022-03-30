const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Task = require("../models/task.js");
const User = require("../models/user.js");

module.exports = {
    createTask : async (req, res) => {
        const task = req.body;
        const user = await User.findOne({username : req.user.username})
        const dbTask = new Task({
            name : task.name,
            comment: task.comment,
            timeframe: task.timeframe,
            duration: task.duration,
            complete: task.complete,
            user: user
        });
        console.log(dbTask)
        dbTask.save();
        res.json({message: "PogO"});
    },

    viewTasks : async (req, res) => {

        console.log("view tasks")
        const user = await User.findOne({username : req.user.username})

        let tasks = await Task.find({user : user}).lean();
        let userMap = new Map();
        userMap.set(user._id, user.username);
        for(let i = 0; i < tasks.length; i++) {
            tasks[i].user = user.username;
        }

        // for(let task in tasks) {
        //     if(!userMap.has(task.user)) {
        //         let username = await User.findOne({_id : task.user}).username;
        //         userMap.set(task.user, username);
        //         task.user = username;
        //     } else {
        //         task.user = userMap.get(task.user);
        //     }
        // }

        res.json({tasks: tasks});
    }
}