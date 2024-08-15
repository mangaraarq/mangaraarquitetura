document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const ids = document.querySelectorAll('ul[id]')
    const botaoVoltar = document.querySelectorAll('button[id]')
    const largura = innerWidth
    const ulClass = document.querySelectorAll('.ul_projetos')
    const imgProjeto = document.querySelectorAll('.img_projetos')
    const ocultaProjeto = document.querySelectorAll('.oculta_projetos')


        if (largura < 759){
            imgProjeto.forEach(function(element){
                element.style.width='100vw'
            })
            ocultaProjeto.forEach(function(element2){
                element2.style.display='none'
            })
        } else {
        }

    
    function recarregarPagina(){
        location.reload()
    } 
    var redimensionamento
    window.onresize = function(){
        clearTimeout(redimensionamento)
        redimensionamento = setTimeout(recarregarPagina, 100)
    }


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
            const idAlvo = this.id
            const dataId = document.querySelector(`[data-tab-id=${idAlvo}]`)
                dataId.classList.add('projetos__section--is-active')
                removeCabeçalho()
                })
    }

    //programação do botão voltar
    for(let i = 0; i < botaoVoltar.length; i++){
        botaoVoltar[i].addEventListener('click', function(){
            const classSection = document.querySelectorAll('[data-tab-id]')
            for(let i = 0; i< classSection.length; i++){
                classSection[i].classList.remove('projetos__section--is-active')
            }
            const cabeçalhoAdd = document.querySelector('.projetos__content').style.display = 'grid';
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

