
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;


function convertPokemonToHTML(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <a>
                img src="./Dio/Gif/dacanl0-6e602889-cbf4-492f-bcb-unscreen.gif"
                alt="${pokemon.name}">
            </a>


        </div>    
    </li>
`
}



function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHTML).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})







/* pokeApi.getPokemons().then((pokemons) => {

    const newList = pokemons.map((pokemon) => convertPokemonToHTML(pokemon))

    const newHTML = newList.join('')

    pokemonList.innerHTML += newHTML 
    
    é o mesmo que:


    const newHtml = pokemons.map(convertPokemonToHTML).join('')
    pokemonList.innerHTML = newHtml 

        
})*/




 


































