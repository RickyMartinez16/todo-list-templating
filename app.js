const express = require("express");
const bodyParser = require("body-parser")

const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    

    let today = new Date();
    let day = ""

    if(today.getDay() === 0){
        day = "Sunday"
    } else if(today.getDay() === 1) {
        day = "Monday"
    } else if(today.getDay() === 2){
        day = "Tuesday"
    } else if(today.getDay() === 3){
        day = "Wednesday"
    } else if(today.getDay() === 4){
        day = "Thursday"
    } else if(today.getDay() === 5){
        day = "Friday"
    } else if(today.getDay() === 6){
        day = "Saturday"
    }
    res.render("list", {kindOfDay: day})
})

app.listen(3000, () => {
    console.log("Server started on Port 3000!")
})