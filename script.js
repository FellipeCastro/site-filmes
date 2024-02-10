const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')

const hanldeSearch = (e) => {
    e.preventDefault()

    searchInput.classList.toggle('hide')
}

searchBtn.addEventListener('click', hanldeSearch)
