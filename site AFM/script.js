const topHeader = document.querySelector('.top-header')
const header = document.querySelector('.hdr')
const nav = document.querySelector('.nav-list')


const mostrarCarrinho = () =>{
    const abaCar = document.querySelector('.aba-carrinho-aberta')
    abaCar.style.transform = ' translateX(0%)' 
    document.body.style.overflowY = 'hidden'
}

const fecharCarrinho = () =>{
    const abaCar = document.querySelector('.aba-carrinho-aberta')
    abaCar.style.transform = ' translateX(100%)' 
    document.body.style.overflowY = 'scroll'
}

const activeScroll = () =>{
    topHeader.classList.toggle('sumir' , window.scrollY > 0)
    header.classList.toggle('sumir' ,window.scrollY > 0)
    nav.classList.toggle('nav-scroll' , window.scrollY > 0 )
    nav.style.position = 'fixed'
}

window.addEventListener('scroll', activeScroll)