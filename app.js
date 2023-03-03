const express = require("express");
const bodyParser = require("body-parser")

const app = express()

app.get("/", (req, res) => {
    

    let day = new Date();

    if(day.getDate() === 6 || day.getDate() === 0){
        res.send("yay its the weekend")
    } else {
        res.send("boo it's a workday")
    }
})

app.listen(3000, () => {
    console.log("Server started on Port 3000!")
})