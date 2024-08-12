document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const ids = document.querySelectorAll('ul[id]')
    const botaoVoltar = document.querySelectorAll('button[id]')

    //Programação das abas 
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas()
            aba.classList.add('projetos__content__list--is-active');
            removeBotaoAtivo()
            botao.target.classList.add('projetos__content__title-aba-button--is-active')
        })
    }

    //programação das seções
    for(let i = 0; i < ids.length; i++){
        ids[i].addEventListener('click', function(){
            const idAlvo = this.ids
            const idReturn = document.querySelectorAll(`[id="${idAlvo}"]`)
            console.log(idAlvo)
            idReturn.classList.add('projetos__section--is-active')
            //idReturn.classList.add('projetos__section--is-active')
            removeCabeçalho()
        })
    }

    for(let i = 0; i < botaoVoltar.length; i++){
        botaoVoltar[i].addEventListener('click', function(){
            console.log('ola')
        })
    }
})

function removeCabeçalho(){
    const cabeçalho = document.querySelector('.projetos__content').style.display = 'none';
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('projetos__content__title-aba-button--is-active')
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i< tabsContainer.length; i++){
        tabsContainer[i].classList.remove('projetos__content__list--is-active')
    }
}