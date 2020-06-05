//npm = Node Package Manager

const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")


// configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended: true}))

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

    //req.query: Query strings da nossa url
    //console.log(req.query)


    return res.render("create-point.html")
});

server.post("/savepoint", (req, res) => {
    
    
    //req.body: o cordpo do nosso formulario
    //console.log(req.body)

    //inserir dados no banco

            //2. inserir dados na tabela 
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    //essa função dentro do run abaixo é uma função callback ela tem 2 caracteristias, 1 - essa funçaõ ela é passada como paramentro e 2- ela é passada depois de um certo tempo, e a gente nao sabe qto tempo vai demorar, com isso o JS guarda ela e chama ela de volta qdo a tarefa do passo anterior terminar 

        function afterInsertData(err) {
            if(err) {
                 console.log(err)
                 return res.send("Erro no cadastro")   
            }

            console.log("Cadastrado com sucesso")
            console.log(this)

            return res.render("create-point.html", {saved: true})
        }

        db.run(query, values, afterInsertData)

    
})





server.get("/search", (req, res) => {

    const search = req.query.search 

    if(search == ""){

      //pesquisa vazia
        return res.render("search-results.html", { total: 0} )
    }


    //pegar os dados do banco de dados

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        const total = rows.length

        console.log("Aqui estão os registros")
        // mostrar a página html com os dados do bacno de dados
        return res.render("search-results.html", { places: rows, total: total} )
    })
   
});

// ligar o servidor
server.listen(3000)
