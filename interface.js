// let card = document.querySelectorAll('.card')


// card.forEach(addEventListener('click', function(){
//     this.classList.toggle('flipped')

// }))
let form = document.getElementById('formulario')
let displayName = document.getElementById('name')

try{form.addEventListener('submit', function(){

    localStorage.setItem('name', document.getElementById('userName').value)
    return
})}catch(error){
    console.log(error)
}
let name = localStorage.getItem('name') || '...'
displayName.innerHTML = name

