const mostrarCarrinho = () =>{
    const abaCar = document.querySelector('.aba-carrinho-aberta')
    abaCar.style.transform = ' translateX(0%)' 
}

const fecharCarrinho = () =>{
    const abaCar = document.querySelector('.aba-carrinho-aberta')
    abaCar.style.transform = ' translateX(100%)' 
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
