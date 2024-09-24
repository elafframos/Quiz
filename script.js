let estado = document.querySelector('.estado')
let china = document.querySelector('.china')
let brasil = document.querySelector('.brasil')
let inglaterra = document.querySelector('.inglaterra')
let russia = document.querySelector('.russia')
let res = document.querySelector('.res')

function paises(){
    if(brasil.checked) {
        res.innerHTML = 'Resposta certa! Continuar'
    } else if (china.checked) {
        res.innerHTML = 'Resposta errada, tente novamente!'
    } else if (estado.checked) {
       res.innerHTML = 'Resposta errada, tente novamente!'
    } else if (inglaterra.checked) {
        res.innerHTML = 'Resposta errada, tente novamente!'
    } else if (russia.checked) {
        res.innerHTML = 'Resposta errada, tente novamente!'
    } else {
        alert('[ERRO] Selecione uma das opções acima!')
    }
}