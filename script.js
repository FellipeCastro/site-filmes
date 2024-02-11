const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
const cardsContainer = document.getElementById('cards-conatainer')

const apiKey = '8ed200f50a6942ca5bc8b5cdec27ff22'
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

const hanldeSearch = (e) => {
    e.preventDefault()

    searchInput.classList.toggle('hide')
}

searchBtn.addEventListener('click', hanldeSearch)

// API conection
const getPopularMovies = async () => {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()

        const filmes = data.results
        console.log(filmes)

        filmes.map((filme) => {
            console.log(filme.title)

            const card = document.createElement('div')
            card.classList.add('box-filmes')

            const img = document.createElement('img')
            img.src = `https://image.tmdb.org/t/p/w500/${filme.poster_path}`
            img.alt = filme.title
            
            const h2 = document.createElement('h2')
            h2.textContent = filme.title
            
            const p = document.createElement('p')
            const starIcon = document.createElement('i')
            starIcon.classList.add('fa', 'fa-star')
            starIcon.style.fontSize = '16px'
            const rating = document.createTextNode(` ${filme.vote_average.toFixed(1)}`)
            p.appendChild(starIcon)
            p.appendChild(rating)
            
            const button = document.createElement('button')
            button.textContent = 'Detalhes'
            
            card.appendChild(img)
            card.appendChild(h2)
            card.appendChild(p)
            card.appendChild(button)
            
            

            // card.innerHTML = `
            //     <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="${filme.title}">
            //     <h2>${filme.title}</h2>
            //     <p><i class="fa fa-star" style="font-size:16px"></i> ${filme.vote_average.toFixed(1)}</p>
            //     <button>Detalhes</button>
            // `

            cardsContainer.appendChild(card)
        })
    } catch (error) {
        console.error('Erro ao buscar filmes: ', error)
    }
}

// Chamada da função para obter filmes populares
getPopularMovies()
