const card = document.querySelectorAll('.card')
const form = document.getElementById('formulario')
const displayName = document.getElementsByClassName('name')
const name = localStorage.getItem('name') || '...'
let timer = document.querySelector(".temporizador")

try{form.addEventListener('submit', function(){

    localStorage.setItem('name', document.getElementById('userName').value)
    return
})}catch(error){
    console.log(error)
}

displayName.innerHTML = name

function choose(params) {
    if (params === 0) {
        window.location.href = './anime.html'
    } else {
        window.location.href = './manga.html'
    }
}
card.forEach(element => {
    element.addEventListener('click', function() {
        flipCard(element)
    });
});


