let ralsei = document.querySelector('.inimigo')
let esqueleto = document.querySelector('.jogador')
let acabou = document.getElementById("fim").style.width = '0px'
let fundo = document.querySelector('.fundo')

let jump = () => {
    esqueleto.classList.add('jump')

        setTimeout(() => {esqueleto.classList.remove('jump')}, 1000)
}

let loop = setInterval(() => {

    let ralseiMovimento = ralsei.offsetLeft
    let esqueletoMovimento = +window.getComputedStyle(esqueleto).bottom.replace('px', '')

    console.log(esqueletoMovimento)

    if (ralseiMovimento <= 50 && ralseiMovimento > 0 && esqueletoMovimento < 100) {
let acabou = document.getElementById("fim").style.width = '830px'
let esqueleto = document.querySelector('.jogador').style.width = '0px'

        ralsei.style.animation = 'none'
        ralsei.style.left = `${70}px`
        
        esqueleto = acabou
        ralsei.style.width = '0px'
        fundo.style.width = '0px'

    } 
}, 10)

document.addEventListener('keydown', jump)