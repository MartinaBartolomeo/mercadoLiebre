const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("./public"));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("servidor corriendo en el puerto ${port}"));

/* app.listen(3030, () =>{
    console.log("servidor corriendo en http://localhost:3030/")
}); */

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get('/ayuda', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/ayuda.html"))
});

app.get('/registro', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/registro.html"))
});

app.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});