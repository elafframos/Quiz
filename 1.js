let africa = document.querySelector('.africa')
let asia = document.querySelector('.asia')
let america = document.querySelector('.america')
let europa = document.querySelector('.europa')
let oceania = document.querySelector('.oceania')
let res = document.querySelector('.res')

function continente(){
    if(africa.checked) {
        res.innerHTML = 'Resposta errada, tente novamente!'
        //res.style.background = 'red' Para mudar a cor do secão
    } else if (asia.checked) {
        res.innerHTML = 'Resposta errada, tente novamente!'
    } else if (america.checked) {
        res.innerHTML = 'Resposta certa!'
    } else if (europa.checked) {
        res.innerHTML = 'Resposta errada, tente novamente!'
    } else if (oceania.checked) {
        res.innerHTML = 'Resposta errada, tente novamente!'
    } else {
        alert('[ERRO] Selecione uma das opções acima!')
    }
}

function proximo() {
    if(america.checked){
        window.location = '2.html'
    } else {
        alert('[ERRO] Acerte primeiro a questão!')
    }
}