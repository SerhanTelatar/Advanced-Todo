const express = require("express")
const router = express.Router()
const {textGetter, textPoster, textDeleter, finishedTask, getBackTask} = require("../controllers/textController")

router.get("/", textGetter)

router.post("/", textPoster)

router.get("/delete/:id", textDeleter)

router.get("/finishedTask/:id", finishedTask)

router.get("/getBackTask/:id", getBackTask)

module.exports = router