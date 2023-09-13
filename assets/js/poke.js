const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const pokemonDetailsDiv = document.getElementById('pokemonDetails');
const backButton = document.getElementById('backButton');

const maxRecords = 151;
const limit = 10;
let offset = 0;
let isDetailView = false; // Adicione esta variável

// ...

function showPokemonDetails(pokemon) {
    // Exibir detalhes do Pokémon
    pokemonDetailsDiv.innerHTML = `
        <h2>${pokemon.name}</h2>
        <p>Força: ${pokemon.strength}</p>
        <p>Habilidades: ${pokemon.abilities.join(', ')}</p>
        <p>Poderes: ${pokemon.powers.join(', ')}</p>
        <!-- Adicione mais informações aqui -->
    `;

    // Ocultar lista principal de Pokémon e exibir detalhes
    pokemonList.style.display = 'none';
    pokemonDetailsDiv.style.display = 'block';

    // Mostrar o botão "Voltar à Lista" e ocultar o botão "Load More"
    backButton.style.display = 'block';
    loadMoreButton.style.display = 'none';

    isDetailView = true;
}

// Função para obter informações detalhadas de um Pokémon (exemplo)
function getPokemonDetails(id) {
    // Suponhamos que você tenha um array de Pokémon com informações detalhadas
    // Substitua isso com sua lógica real para buscar os detalhes do servidor ou outra fonte de dados
    const pokemonDetails = {
        id: id,
        name: 'Pikachu',
        strength: '100',
        abilities: ['Choque Elétrico', 'Agilidade'],
        powers: ['Raio', 'Ataque Rápido'],
    };

    return pokemonDetails;
}

// Adicione um evento de clique para o botão "Voltar à Lista"
backButton.addEventListener('click', () => {
    // Ocultar detalhes e exibir lista principal novamente
    pokemonDetailsDiv.style.display = 'none';
    pokemonList.style.display = 'block';

    // Mostrar o botão "Load More" e ocultar o botão "Voltar à Lista"
    loadMoreButton.style.display = 'none';
    backButton.style.display = 'block';

    isDetailView = false;
});

// ...

// Adicione um evento de clique para cada Pokémon na lista
const pokemonItems = document.querySelectorAll('.pokemon');
pokemonItems.forEach((pokemonItem) => {
  pokemonItem.addEventListener('click', () => {
    // Recupere os detalhes do Pokémon (você precisará implementar isso)
    const id = pokemonItem.dataset.id; // Obtém o ID do Pokémon
    const pokemonDetails = getPokemonDetails(pokemonItem.dataset.id);
    
    // Exiba os detalhes
    showPokemonDetails(pokemonDetails);
  });
});

function convertPokemonToHTML(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}" data-id="${pokemon.id}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <a>
                <img src="${pokemon.photo}"
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

    // Adicione um evento de clique para os novos Pokémon na lista
    const newPokemonItems = document.querySelectorAll('.pokemon');
    newPokemonItems.forEach((pokemonItem) => {
        pokemonItem.addEventListener('click', () => {
            const pokemonDetails = getPokemonDetails(pokemonItem.dataset.id);
            showPokemonDetails(pokemonDetails);
      });
   });
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