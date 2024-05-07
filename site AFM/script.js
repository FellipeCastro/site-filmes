
const topHeader = document.querySelector('.top-header')
const header = document.querySelector('.hdr')
const nav = document.querySelector('.nav-list')
 const abaCar = document.querySelector('.aba-carrinho-aberta')

const mostrarCarrinho = () =>{
   
    abaCar.style.transform = ' translateX(0%)' 
    document.body.style.overflowY = 'hidden'
}

const fecharCarrinho = () =>{
    const abaCar = document.querySelector('.aba-carrinho-aberta')
    abaCar.style.transform = ' translateX(100%)' 
    document.body.style.overflowY = 'scroll'
}

const activeScroll = () =>{

   if( window.scrollY > 100){
    topHeader.classList.remove('top-header')
    header.classList.remove('hdr')
    header.classList.add('header-scroll')
    nav.style.top = '10vh'
    abaCar.style.top = '0'
   }else{
    topHeader.classList.add('top-header')
    header.classList.add('hdr')
    nav.style.top = '16vh'
   }

}

window.addEventListener('scroll', activeScroll)



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

