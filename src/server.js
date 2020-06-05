//npm = Node Package Manager

const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")


// configurar pasta publica
server.use(express.static("public"))





//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



//configurar caminhos da aplicação
//pagina inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título" })
});

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
});

server.get("/search", (req, res) => {

    //pegar os dados do banco de dados
        db.all(` SELECT * FROM places `, function(err, rows){
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão os registros")
        // mostrar a página html com os dados do bacno de dados
        return res.render("search-results.html", { places: rows})
    })
   
});

// ligar o servidor
server.listen(3000)
