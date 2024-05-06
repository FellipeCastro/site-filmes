<<<<<<< HEAD
const topHeader = document.querySelector('.top-header')
const header = document.querySelector('.hdr')
const nav = document.querySelector('.nav-list')


const mostrarCarrinho = () =>{
    const abaCar = document.querySelector('.aba-carrinho-aberta')
    abaCar.style.transform = ' translateX(0%)' 
    document.body.style.overflowY = 'hidden'
=======
const mostrarCarrinho = () =>{
    const abaCar = document.querySelector('.aba-carrinho-aberta')
    abaCar.style.transform = ' translateX(0%)' 
>>>>>>> 999fad32de09e8a17ff983f744fff51a570fcc70
}

const fecharCarrinho = () =>{
    const abaCar = document.querySelector('.aba-carrinho-aberta')
    abaCar.style.transform = ' translateX(100%)' 
<<<<<<< HEAD
    document.body.style.overflowY = 'scroll'
}

const activeScroll = () =>{
    topHeader.classList.toggle('sumir' , window.scrollY > 0)
    header.classList.toggle('sumir' ,window.scrollY > 0)
    nav.classList.toggle('nav-scroll' , window.scrollY > 0 )
    nav.style.position = 'fixed'
}

window.addEventListener('scroll', activeScroll)
=======
}

// API 

let search = 'streetwear'
const apiUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${search}`

const getItems = async () => {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()

        const items = data.results

        items.map((item) => {
            // Criar cards
        })
    } catch {
        console.log('Erro ao conectar API')
    }
}

getItems()
>>>>>>> 999fad32de09e8a17ff983f744fff51a570fcc70
