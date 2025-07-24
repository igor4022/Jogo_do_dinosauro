let ralsei = document.querySelector('.inimigo')
let esqueleto = document.querySelector('.jogador')

let jump = () => {
    esqueleto.classList.add('jump')

        setTimeout(() => {esqueleto.classList.remove('jump')}, 1000)
}

document.addEventListener('keydown', jump)