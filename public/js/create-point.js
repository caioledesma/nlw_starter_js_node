
// forma mais curta de fazer a arrow function 

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then( states => {
        

        for( const estado of states ){
            ufSelect.innerHTML += `<option value="${estado.id}">${estado.sigla}</option>`
        }
 
    }); //+= é igual a pegar você mesmo e somar esse resultado
}
populateUFs();

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value
    
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json())
    .then( cities => {

        for( const cidade of cities ){
            citySelect.innerHTML += `<option value="${cidade.nome}">${cidade.nome}</option>`
        }
    
        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//Itens de Coleta
//Vamos pegar todos os li's colocando ele numa variavel

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", funHandleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function funHandleSelectedItem(event){
    const itemLi = event.target

// add ou remove uma classe com JS é com o toggle, para isso. dá pra colocar add ou remove separados
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id 

   // console.log("item id:", itemId)
   
    //Pra fazer o selectedItems funcionar, que é a função de pegar os selecionados pelo usuario e mandar para o banco precisa de uma logica, vamos seguir o algoritmo:


    //verificar se existem itens selecionados, se sim:
    //pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId //isso será true ou false
        return itemFound

    })
    
    //se já estive selecionado,  
    if( alreadySelected >= 0 ) {
    //tirar da seleção, no caso da pessoa clicar e desclicar depois
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId 
            return itemIsDifferent
    })

    selectedItems = filteredItems
    } else {
        // se não estive selecionado, adicionar a seleção 
        selectedItems.push(itemId)
    }
    
    //console.log("selectedItems:", selectedItems )

    //atualizar o campo escondido (hidden do input) com os itens selecionados
    collectedItems.value = selectedItems
}

// IMPORTANTE SOBRE FUNÇÕES, quando chamo a função e coloco os () é porque eu quero que execute ela na hora, quand eu chamo por referencia, ou seja, sem os parenteses, é que quando mudar ou o "change" da função acima acontecer é que ela vai ser executada

// outra forma de criar função além da function() é assim: () => {} chama arrow function


//Uma forma de fazer função maior
// function populateUFs(){
//     const ufSelect = document.querySelector("select[name=uf]")

//     fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
//     .then( (res) => {return res.json() }) // aqui vc poem o nome da função e depois o return, mas como é uma linha só ele mostrou a forma de cima
// }





