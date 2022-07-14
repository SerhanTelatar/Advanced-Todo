const { text } = require("express")
const textSchema = require("../models/textModel")

const textGetter = async (req, res) => {
    textSchema.find({}).exec((err, texts)=>{
        if(err) throw err
        res.render("index.ejs", {"texts": texts})
    })
}

const textPoster = async (req, res) =>{
    const newText = await new textSchema({
        text: req.body.text
    })
    try{
        newText.save()
        res.redirect("/todo")
    } catch(err){
        res.status(400).json(err)
    }
}

const textDeleter = async (req, res) =>{
    const _id = req.params.id
    textSchema.findByIdAndDelete({_id})
    .then(()=>{
        console.log(`Deleted todo successfully`)
        res.redirect("/todo")
    })
    .catch((err) =>{
        console.log(err)
    })
} 

const finishedTask = async (req, res) =>{
    const _id = req.params.id
    textSchema.findByIdAndUpdate({_id},{$set: {completed: true}})
    .then(() =>{
        console.log("Completed task successfully saved")
        res.redirect("/todo")
    })
    .catch((err)=>{
        console.log(err)
    })
}

const getBackTask = async (req, res) =>{
    const _id = req.params.id
    textSchema.findByIdAndUpdate({_id},{$set: {completed: false}})
    .then(() =>{
        console.log("Task successfully got back")
        res.redirect("/todo")
    })
    .catch((err)=>{
        console.log(err)
    })
} 

module.exports = {
    textGetter,
    textPoster,
    textDeleter,
    finishedTask,
    getBackTask
}