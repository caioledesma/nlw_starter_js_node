//importar a dependência do sqlite3

const sqlite3 = require("sqlite3").verbose()
//função quando reside dentro de um objeto chama-se método

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")//Database nesse caso é o método e dentro dos parenteses é o argumento

module.exports = db

// utilizar o objeto de banco de dados, para nossas operações 
//funções se tornam métodos quando estão juntas de um objeto
db.serialize(() => {

    //Com comandos SQL eu vou:

    //1.Criar uma tabela 
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //Syntaxe em SQL é uma bosta e é dificil de achar o erro CASO ESTEJA ERRADO, prestar mto atenção
//     //com crase `` eu consigo quebrar a linha sem prejudicar o código, se for aspas ele da problema, o nome é template literals

// //     //2. inserir dados na tabela 
// // const query = `
// //     INSERT INTO places (
// //         image,
// //         name,
// //         address,
// //         address2,
// //         state,
// //         city,
// //         items
// //     ) VALUES (?,?,?,?,?,?,?);
// // `

// // const values = [
// //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
// //     "Papersider",
// //     "Guilherme Gemballa, Jardim América",
// //     "Nº 260",
// //     "Santa Catarina",
// //     "Rio do Sul",
// //     "Resíduos Eletrônicos, Lâmpadas"
// // ]

// // //essa função dentro do run abaixo é uma função callback ela tem 2 caracteristias, 1 - essa funçaõ ela é passada como paramentro e 2- ela é passada depois de um certo tempo, e a gente nao sabe qto tempo vai demorar, com isso o JS guarda ela e chama ela de volta qdo a tarefa do passo anterior terminar 

// //     function afterInsertData(err) {
// //         if(err) {
// //             return console.log(err)
// //         }

// //         console.log("Cadastrado com sucesso")
// //         console.log(this)
// //     }

// //     db.run(query, values, afterInsertData)


// //funções:
// // db.run(query, values, afterInsertData) -> se eu passar assim a função afterInsertData vai rodar como uma callback por conta do run
// // db.run(query, values, afterInsertData()) -> se eu passar assim ela vai executar a função na hr




//     //3. consultar os dados inseridos

    
//     // db.all(` SELECT name FROM places `, function(err, rows){
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão os registros")
//     //     console.log(rows)
//     // })


   // 4. Deletar um dado da tabela, nao vamos implantar mas ele vai ensinar
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso")
        
    // })

 })