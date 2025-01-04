/* 
    [] deve um popup que instrua o jogador
        [] deve haver um botão de iniciar o jogo
         [] e apos iniciar, startar o timer

    [x] se o usuario clicar no msm card o card deve virar
    [x] se o usuario clicar em dois cards diferentes deve ser feita a verificação
    [x] se os cards forem iguais então esses cards n devem mais virar
        [] e contar + 1 par
            [] se houver 10 pares, o usuario ganha
    [x] se os cards forem diferentes eles devem virar
        [] e contar + 1 tentativa
    [] apos o usuario ganhar, deve ser exibido um modal com a mensagem de parabens
    [] quando o timer parar e ser reiniciado, deve ser exibido um modal com a mensagem de parabens
    [] o modal deve ter o nome do jogador, pontuaçãp, tempo, tentativas e um botão de reiniciar
    [] o botão de reiniciar deve direcionar o jogador para a tela de escolha de jogo
    [] apos a primeira partida, deve ser exibido um botão de historico de partidas no modal
    [] o botão de historico de partidas deve direcionar o jogador para a tela de historico de partidas
*/
let click = 1
let card1
let card2


function startTimer(){
    let time = 0
    setInterval(() => {
        time++
        timer.innerHTML =`Tempo: ${time}`
    }, 1000);
}

async function flipCard (element){
    // startTimer()
    console.log(click)
    if(click === 1){
        if(!element.classList.contains('pair-matched')){
        card1 = element
        element.classList.add('flipped')
        click++
        console.log(click)
        return
        } 
    }
    if(click === 2 && element.classList.contains('flipped')){
        if(!element.classList.contains('pair-matched')){
        element.classList.remove('flipped')
        console.log('entrei aqui')
        }
    }else if(click === 2 && !element.classList.contains('flipped')){
        card2 = element
        element.classList.add ('flipped')
        click++
        await setTimeout(() => { matchCards(card1, card2)}, 1000)
    }
}
function matchCards(c1, c2){
    if(c1.dataset.pair === c2.dataset.pair){
        c1.classList.add('pair-matched')
        c2.classList.add('pair-matched')
    }else{
        console.log(c1, c2)
        c1.classList.remove('flipped')
        c2.classList.remove('flipped')
    }
    click = 1
    return card1, card2 = ''
}
