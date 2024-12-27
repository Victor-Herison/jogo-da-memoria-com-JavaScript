let card = document.querySelectorAll('.card')
let form = document.getElementById('formulario')
let displayName = document.getElementsByClassName('name')
let name = localStorage.getItem('name') || '...'

for(let element of card){
    element.addEventListener('click', function(){
    this.classList.toggle('flipped')
})}
   

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

