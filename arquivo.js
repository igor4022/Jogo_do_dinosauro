let ralsei = document.querySelector('.inimigo')
let esqueleto = document.querySelector('.jogador')

let jump = () => {
    esqueleto.classList.add('jump')

        setTimeout(() => {esqueleto.classList.remove('jump')}, 1000)
}

let loop = setInterval(() => {

    let ralseiMovimento = ralsei.offsetLeft
    let esqueletoMovimento = +window.getComputedStyle(esqueleto).bottom.replace('px', '')

    console.log(esqueletoMovimento)

    if (ralseiMovimento <= 50 && ralseiMovimento > 0 && esqueletoMovimento < 100) {

        ralsei.style.animation = 'none'
        ralsei.style.left = `${50}px`

        esqueleto.src = 'imagens/dee7a38c4c7a3b9b0653ce54cb0f2084.gif'
        esqueleto.style.width = '500px'
        ralsei.src = 'imagens/dee7a38c4c7a3b9b0653ce54cb0f2084.gif'
        ralsei.style.width = '0px'
    } 
}, 5)

document.addEventListener('keydown', jump)