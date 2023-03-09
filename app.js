//rewuire use of expresss
const express = require("express");
//require body parser
const bodyParser = require("body-parser")

//create an instance of express
const app = express()



//make varirable to hold the items we add to the todo list
let adds = []

//make variable to hold the items we add to the work list
let workItems = []

//able to use EJS
app.set("view engine", "ejs")

//able to use body parser
app.use(bodyParser.urlencoded({extended:true}))

//use the public folder to get the css
app.use(express.static("public"))


//ROUTES-------------------------------------------

//GET route for home page
app.get("/", (req, res) => {
    
    //make a new date var
    let today = new Date();

    //create options obj for date formatting
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    //convert the date to the string we want to render
    let day = today.toLocaleDateString("en-US" , options)

    //render the list.ejs page. pass in listTitle var as the day var wecreate. pass the newItems list as the adds var we create
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