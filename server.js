const express = require('express');
const app = express();

app.set("view engine", "ejs"); // Mudando da engine de HTML -> EJS

app.get("/", function(request, response) {

    response.render("home");
})

app.get("/cadastro-usuario", function(request, response) {

    response.render("cadastro");
})
app.get("/pontos", function(request, response) {

    response.render("pontos_coleta");
})
app.get("/sucesso", function(request, response) {

    response.render("sucesso");
})

app.listen(8080)
console.log("Server Rodando")
