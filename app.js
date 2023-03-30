const express = require("express");
const app = express();

app.use(express.static("public/frontEnd"));

//PAGES

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontEnd/html/loginPage.html");
});

app.get("/mainPage", (req, res) => {
    res.sendFile(__dirname + "/public/frontEnd/html/mainPage.html");
});

app.get("/mainPage/lesson1", (req, res) => {
    res.sendFile(__dirname + "/public/frontEnd/html/lesson1Page.html");
});

app.get("/mainPage/lesson2", (req, res) => {
    res.sendFile(__dirname + "/public/frontEnd/html/lesson2Page.html");
});

app.get("/mainPage/lesson3", (req, res) => {
    res.sendFile(__dirname + "/public/frontEnd/html/lesson3Page.html");
});

app.get("/mainPage/lesson4", (req, res) => {
    res.sendFile(__dirname + "/public/frontEnd/html/lesson4Page.html");
});

app.get("/mainPage/lesson5", (req, res) => {
    res.sendFile(__dirname + "/public/frontEnd/html/lesson5Page.html");
});

app.get("/mainPage/lesson6", (req, res) => {
    res.sendFile(__dirname + "/public/frontEnd/html/lesson6Page.html");
});

app.get("/mainPage/lesson7", (req, res) => {
    res.sendFile(__dirname + "/public/frontEnd/html/lesson7Page.html");
});

app.get("/mainPage/lesson8", (req, res) => {
    res.sendFile(__dirname + "/public/frontEnd/html/lesson8Page.html");
});


const PORT = 3000;
app.listen(PORT, (error) => {

    if (error) {
        console.log(error);
        return;
        
    }
    console.log("Server is running on port", PORT);
});