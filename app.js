const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("./public"));

app.listen(3030, () =>{
    console.log("servidor corriendo en http://localhost:3030/")
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get('/ayuda', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/ayuda.html"))
});

app.get('/inicioSesion', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/inicioSesion.html"))
});

app.get('/inicioSesion', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/misCompras.html"))
});

app.get('/inicioSesion', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/ofertas.html"))
});

app.get('/inicioSesion', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/registro.html"))
});

app.get('/inicioSesion', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/tiendasOficiales.html"))
});

app.get('/inicioSesion', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/vender.html"))
});