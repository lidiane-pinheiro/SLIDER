let btnNext = document.querySelector ('.next')

let btnBack = document.querySelector ('.back')

let container = document.querySelector ('.container')

let list = document.querySelector ('.container .list')

let thumb = document.querySelector ('.container .thumb')


btnNext.onclick = () => moverItensAoClicarOBotao ('next')

btnBack.onclick = () => moverItensAoClicarOBotao ('back')

// Ao clicar nos botões Next e Back, a função abaixo será chamada e os itens serão movidos.

function moverItensAoClicarOBotao (type) {

    let listItems = document.querySelectorAll ('.list .list-item')

    let thumbItems = document.querySelectorAll ('.thumb .thumb-item')
    
    console.log (listItems)
    console.log (thumbItems)
    
    
    if(type === 'next') {
    
        list.appendChild(listItems[0])
    
        thumb.appendChild(thumbItems[0])

        container.classList.add('next')
    
    }
    
    else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[thumbItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);


}


// APPENCHILD: COLOCA O ITEM COMO PRIMEIRO DA LISTA
// PREPEND: COLOCA O ITEM COMO O ÚLTIMO DA LISTA
// listItems.length - 1: se quiser aumentar a quantidade de itens do listItens para 5 ou mais, a propriedade LENGTH já sinaliza o úlitmo da lista automaticamente. Não precisa fazer isso manualmente.
// O mesmo se aplica para thumItems.length - 1
// querySelector: seleciona apenas um item de um elemento
// querySelectorAll: seleciona todos os itens de um elemento
// classList: cria uma classe no Java Script. Corresponde a uma classe no CSS
// classList.add: adiciona uma classe no JS
// classList.remove: remove uma classe no JS
// setTimeout: temporizador. Quando zerar o tempo, a classe é retirada para finalizar o efeito.
// 3000 = 3segundos ;  30000 = 30 segundos. Esses valores ficam no timeout entre a vírgula e os dois pontos do setTimeout













// 1. Mapear os itens - identificar quem é quem
// 2. Saber quando o botão será clicado. Para isso, é necessário criar uma função para quando o botão for clicado, executar a ação desejada.