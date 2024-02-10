const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    searchInput.classList.toggle('hide')
})