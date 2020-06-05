

// Javascript

//objetos, todos objetivos possuem propriedades e funcionalidas. Teclado tem tamanho, peso, largura e numero de teclas e a funcionalidade dele é digitar na tela

// let pessoa = {
//     altura: "1,80m",
//     idade: 24,
//     solteiro: true
//     correr(){
//    document.write("run Forest")
//     }
// };

//document.write(pessoa.correr());// Esse retorna Run Forestundefined porque não tem valor na função, apenas a excução do código, para isso olhar abaixo

// document.write(pessoa) esse retorna [object Object]

// document.write(pessoa.altura) esse retorna 1,80m porque agora passamos a propriedade que queremos

// Para entender funções da forma do Mayk:


// let pessoa = {
//     altura: "1,80m",
//     idade: 24,
//     solteiro: true,
//     correr(){
//         document.write("run forest ");
//         return " resultado do return"// no return pode ser qualquer coisa, objeto, função, string, number, array
//     }
// };
// document.write(pessoa.correr());// com o return a função tem um valor e ele nao fica como undefined

// pessoa.correr()//isso aqui é chamando o objeto e executando a função dentro do objeto


// Array é uma coleção de dados, e dentro do array pode colocar o que quiser, string, numero, boolean , objetos e funções. exemplo:

// let colecao = ["blue", "green" , 1, {}] // esse último é um objeto

// document.write(colecao[2])// saída -> blue,green,1,[object Object]


// let colecao = ["blue", "green" , 1, {name:"huck"}] // esse último é um objeto

// document.write(colecao[3].name)//-> huck


//Funções
// Atalhos - funcionalidades - atalhos - reuso de código

//registrar função
// function sayMyName(name){
//     document.write(name)
// }

// //nesse caso o 'name' virou uma variável dentro da função e vc pode modificar essa variável na hr da execuação da função

// //executar função
// sayMyName("Douglas")
// sayMyName("teste") // dentro do () vai a variável

// for (i = 0; i < 10; i++){
//     document.write(i)
// }
