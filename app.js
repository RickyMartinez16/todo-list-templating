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

let samsItems = []

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


//GET route for /about 
app.get("/about", (req, res) => {
    //render the about ejs file
    res.render("about")
})

//GET route for /work page
app.get("/work", (req, res) => {
    //render the "list" ejs file, pass in Work List for the list title var and new listItems as the workItems array
    res.render("list", {listTitle: "Work List", newListItems: workItems})
})

//GET route for /samslist page
app.get("/samslist", (req, res) => {
    //redner the "samslist" ejs file, change the list title
    res.render("samsList", {listTitle: "Sam's List", newListItems: samsItems})
})

//POST route for the / home route
app.post("/", (req, res) => {
    //make a var for the added item. parse thru the request body and find the toDoAdd that we named from the submit
    let add = req.body.toDoAdd

    //if the request body list is work
    if(req.body.list === "Work"){
        //we want to push the added item to the work list
        workItems.push(add)
        //then redirect to the /work page
        res.redirect("/work")
    } else if(req.body.list === "Sam's List"){
        samsItems.push(add)
        //then redirect to the /samslist page
        res.redirect("/samslist")
    } else {
        //add it to the regular list
        adds.push(add)
        //send us to the home page
        res.redirect("/")
    }
})

//POST route for /work page
app.post("/work", (req, res) => {
    //workadd var to the added item to the work list
    workAdd = req.body.toDoAdd
    //push it into thework items array
    workItems.push(workAdd)
    //bring us bacck to work page list
    res.redirect("/work")
})

//POST route for /sam page
app.post("/samslist", (req, res) => {
    //workadd var to the added item to the work list
    samAdd = req.body.toDoAdd
    //push it into thework items array
    samsItems.push(samAdd)
    //bring us bacck to work page list
    res.redirect("/samslist")
})

//run the server on port 3000
app.listen(3000, () => {
    console.log("Server started on Port 3000!")
})