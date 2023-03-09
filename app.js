//rewuire use of expresss
const express = require("express");
//require body parser
const bodyParser = require("body-parser")

//create an instance of express
const app = express()



//make varirable to hold the items we add to the todo list
let adds = []

let workItems = []

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/", (req, res) => {
    

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US" , options)

   
    res.render("list", {listTitle: day, newListItems: adds})
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", newListItems: workItems})
})

app.post("/", (req, res) => {
    let add = req.body.toDoAdd

    if(req.body.list === "Work"){
        workItems.push(add)
        res.redirect("/work")
    } else {
        adds.push(add)
        res.redirect("/")
    }
})

app.post("/work", (req, res) => {
    workAdd = req.body.toDoAdd
    workItems.push(workAdd)
    res.redirect("/work")
})

app.listen(3000, () => {
    console.log("Server started on Port 3000!")
})