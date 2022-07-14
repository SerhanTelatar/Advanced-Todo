const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const db = require("./config/dbConfig")
const { text } = require("body-parser")
const textRouter = require("./router/textRouter")
db()

app.set("view-engine", "ejs")
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/todo", textRouter)

app.listen(port, () =>{
    console.log(`Server provider servise listening at ${port}`)
})