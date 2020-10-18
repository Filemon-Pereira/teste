let menu = document.querySelector('.menu--list')
let hamburguer = document.querySelector('.hamburguer')
let fechar = document.querySelector('.close')


hamburguer.addEventListener('click', (e)=>{
    menu.classList.add('show--menu')
    hamburguer.style.display = 'none'
    fechar.style.display = 'block'
})

fechar.addEventListener('click', (e)=>{
    menu.classList.remove('show--menu')
    fechar.style.display = 'none'
    hamburguer.style.display = 'block'
})



