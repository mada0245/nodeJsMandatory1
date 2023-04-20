import express from "express";
const app = express();

app.use(express.static("public/frontEnd"));
app.use(express.urlencoded({ extended: true }));

import templateEngine from "./util/templateEngine.js";


/*pages*/

const login = templateEngine.readPage("./public/frontEnd/html/loginPage.html");
const loginPage = templateEngine.renderPage("login",login, {
    tabTitle: "nodeJsMandatory1 | Login"
});

const main = templateEngine.readPage("./public/frontEnd/html/mainPage.html");
const mainPage = templateEngine.renderPage("main",main, {
    tabTitle: "nodeJsMandatory1 | mainPage"
});

const newP = templateEngine.readPage("./public/frontEnd/html/newPage.html");
const newPage = templateEngine.renderPage("login",newP, {
    tabTitle: "nodeJsMandatory1 | newPage"
});

const lesson1 = templateEngine.readPage("./public/frontEnd/html/lesson1Page.html");
const lessonPage1 = templateEngine.renderPage("lessonPage",lesson1, {
    tabTitle: "nodeJsMandatory1 | Lesson 1"
});

const lesson2 = templateEngine.readPage("./public/frontEnd/html/lesson2Page.html");
const lessonPage2 = templateEngine.renderPage("lessonPage",lesson2, {
    tabTitle: "nodeJsMandatory1 | Lesson 2"
});

const lesson3 = templateEngine.readPage("./public/frontEnd/html/lesson3Page.html");
const lessonPage3 = templateEngine.renderPage("lessonPage",lesson3, {
    tabTitle: "nodeJsMandatory1 | Lesson 3"
});

const lesson4 = templateEngine.readPage("./public/frontEnd/html/lesson4Page.html");
const lessonPage4 = templateEngine.renderPage("lessonPage",lesson4, {
    tabTitle: "nodeJsMandatory1 | Lesson 4"
});

const lesson5 = templateEngine.readPage("./public/frontEnd/html/lesson5Page.html");
const lessonPage5 = templateEngine.renderPage("lessonPage",lesson5, {
    tabTitle: "nodeJsMandatory1 | Lesson 5"
});

const lesson6 = templateEngine.readPage("./public/frontEnd/html/lesson6Page.html");
const lessonPage6 = templateEngine.renderPage("lessonPage",lesson6, {
    tabTitle: "nodeJsMandatory1 | Lesson 6"
});

const lesson7 = templateEngine.readPage("./public/frontEnd/html/lesson7Page.html");
const lessonPage7 = templateEngine.renderPage("lessonPage",lesson7, {
    tabTitle: "nodeJsMandatory1 | Lesson 7"
});

const lesson8 = templateEngine.readPage("./public/frontEnd/html/lesson8Page.html");
const lessonPage8 = templateEngine.renderPage("lessonPage",lesson8, {
    tabTitle: "nodeJsMandatory1 | Lesson 8"
});


/*pagePaths*/

app.get("/", (req, res) => {
    res.send(loginPage); 
});

app.get("/mainPage", (req, res) => {
    res.send(mainPage); 
});

app.get("/mainPage/newPage", (req, res) => {
    res.send(newPage); 
});

app.get("/mainPage/lesson1", (req, res) => {
    res.send(lessonPage1); 
});

app.get("/mainPage/lesson2", (req, res) => {
    res.send(lessonPage2); 
});

app.get("/mainPage/lesson3", (req, res) => {
    res.send(lessonPage3); 
});

app.get("/mainPage/lesson4", (req, res) => {
    res.send(lessonPage4); 
});

app.get("/mainPage/lesson5", (req, res) => {
    res.send(lessonPage5); 
});

app.get("/mainPage/lesson6", (req, res) => {
    res.send(lessonPage6); 
});

app.get("/mainPage/lesson7", (req, res) => {
    res.send(lessonPage7); 
});

app.get("/mainPage/lesson8", (req, res) => {
    res.send(lessonPage8); 
});

app.post('/submit-form', (req, res) => {
    const text = req.body.text;
    const description = req.body.description;
    //something 
    console.log(description, text);
  });
  

/*PORT*/

const PORT = 3000;
app.listen(PORT, (error) => {

    if (error) {
        console.log(error);
        return;
        
    }
    console.log("Server is running on port", PORT);
});