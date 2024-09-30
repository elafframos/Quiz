let java = document.querySelector('.java')
let python = document.querySelector('.python')
let javascript = document.querySelector('.javascript')
let css = document.querySelector('.css')
let strong = document.querySelector('.strong')
let res = document.querySelector('.res')

function tecnologia(){
    if(java.checked) {
        res.innerHTML = 'Resposta errada, tente novamente!'
    } else if (python.checked) {
        res.innerHTML = 'Resposta errada, tente novamente!'
    } else if (javascript.checked) {
        res.innerHTML = 'Resposta errada, tente novamente!'
    } else if (css.checked) {
        res.innerHTML = 'Resposta errada, tente novamente!'
    } else if (strong.checked) {
        res.innerHTML = 'Resposta certa!'
    } else {
        alert('[ERRO] Selecione uma das opções acima!')
    }
}

function proximo() {
    if(strong.checked){
        window.location = '3.html'
    } else {
        alert('[ERRO] Acerte primeiro a questão!')
    }
}