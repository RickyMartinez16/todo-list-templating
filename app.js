const express = require("express");
const bodyParser = require("body-parser")

const app = express()

let adds = []

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
    

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US" , options)

   
    res.render("list", {kindOfDay: day, newListItem: adds})
})

app.post("/", (req, res) => {
    add = req.body.toDoAdd
    adds.push(add)
    res.redirect("/")
})

app.listen(3000, () => {
    console.log("Server started on Port 3000!")
})