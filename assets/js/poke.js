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
    if (pokemon) {
      // Exibir detalhes do Pokémon
      pokemonDetailsDiv.innerHTML = `
              <img class="pokegif" src="${pokemon.image}" alt="${pokemon.name}">
              <hr/>
              <br>
              <h2 class="pokename">${pokemon.name}</h2>
              <div class="pokepower">
              <p>➣ Força: ${pokemon.strength}</p>
              <p>➣ Habilidades: ${pokemon.abilities.join(", ")}</p>
              <p>➣ Poderes: ${pokemon.powers.join(", ")}</p>
              </div>
              <!-- Adicione mais informações aqui -->
          `;
  
      // Ocultar lista principal de Pokémon e exibir detalhes
      pokemonList.style.display = "none";
      pokemonDetailsDiv.style.display = "block";
  
      // Mostrar o botão "Voltar à Lista" e ocultar o botão "Load More"
      backButton.style.display = "flex";
      loadMoreButton.style.display = "none";
  
      isDetailView = true;
    } else {
      console.error("Detalhes do Pokémon não encontrados.");
    }
  }

// Função para obter informações detalhadas de um Pokémon (exemplo)
function getPokemonDetails(id) {
    const pokemonDetailsData = {
      bulbasaur: {
        image: "./assets/image/gifs/001 - Bulbasaur.gif",
        name: "Bulbasaur",
        strength: "80",
        abilities: ["Chicote de Vinha", "Investida"],
        powers: ["Raio Solar", "Folha Navalha"],
        
      },
      ivysaur: {
        image: "./assets/image/gifs/002 - Ivysaur.gif",
        name: "Ivysaur",
        strength: "100",
        abilities: ["Chicote de Vinha", "Investida"],
        powers: ["Raio Solar", "Folha Navalha"],
        
      },
      venusaur: {
        image: "./assets/image/gifs/003 - Venusaur.gif",
        name: "Venusaur",
        strength: "120",
        abilities: ["Chicote de Vinha", "Investida"],
        powers: ["Raio Solar", "Folha Navalha"],
        
      },      
      charmander: {
        image: "./assets/image/gifs/004 - Charmander.gif",
        name: "Charmander",
        strength: "70",
        abilities: ["Chama", "Garra de Metal"],
        powers: ["Lança-chamas", " Incêndio"],
        
      },      
      charmeleon: {
        image: "./assets/image/gifs/005 - Charmeleon.gif",
        name: "Charmeleon",
        strength: "90",
        abilities: ["Chama", "Garra de Metal"],
        powers: ["Lança-chamas", " Incêndio"],
        
      },      
      charizard: {
        image: "assets/image/gifs/006 - Charizard.gif",
        name: "Charizard",
        strength: "120",
        abilities: ["Lança-chamas", "Asa de Aço"],
        powers: ["Chamas Furiosas", "Asa Cortante"],

      },
      squirtle: {
        image: "./assets/image/gifs/007 - Squirtle.gif",
        name: "Squirtle",
        strength: "70",
        abilities: ["Jato d'Água", "Tackle"],
        powers: ["Hidro Bomba", "Surf"],

      },
      wartortle: {
        image: "./assets/image/gifs/008 - Wartotle.gif",
        name: "Wartortle",
        strength: "90",
        abilities: ["Jato d'Água", "Tackle"],
        powers: ["Hidro Bomba", "Surf"],

      },
      blastoise: {
        image: "./assets/image/gifs/009 - Blastoise.gif",
        name: "Blastoise",
        strength: "130",
        abilities: ["Jato d'Água", "Tackle"],
        powers: ["Hidro Bomba", "Surf"],

      },
      caterpie: {
        image: "./assets/image/gifs/010 - Caterpie.gif",
        name: "Caterpie",
        strength: "30",
        abilities: ["Tiro de Seda", "Agilidade"],
        powers: ["Golpe de Cauda", " Ventania"],

      },
      metapod: {
        image: "./assets/image/gifs/011 - Metapod.gif",
        name: "Metapod",
        strength: "20",
        abilities: ["Endurecer", "Defesa"],
        powers: ["-", "-"],

      },
      butterfree: {
        image: "./assets/image/gifs/012 - Butterfree.gif",
        name: "Butterfree",
        strength: "130",
        abilities: ["Pó Sono", "Confusão"],
        powers: ["Raio Solar", "Vento Prateado"],

      },
      weedle: {
        image: "./assets/image/gifs/013.gif",
        name: "Weedle",
        strength: "25",
        abilities: ["Picada", "Veneno"],
        powers: ["Veneno em Pó", " Armadilha"],

      },
      kakuna: {
        image: "./assets/image/gifs/014.gif",
        name: "Kakuna",
        strength: "20",
        abilities: ["Endurecer", "Defesa"],
        powers: ["-", "-"],

      },
      beedrill: {
        image: "./assets/image/gifs/015.gif",
        name: "Beedrill",
        strength: "70",
        abilities: ["Agulhas Duplas", "Furacão"],
        powers: ["Fúria", "Ataque de Broca"],

      },
      pidgey: {
        image: "./assets/image/gifs/016.gif",
        name: "Pidgey",
        strength: "40",
        abilities: ["Investida", "Vento Cortante"],
        powers: ["Golpe de Asa", "Ataque Tornado"],

      },
      pidgeotto: {
        image: "./assets/image/gifs/017.gif",
        name: "Pidgeotto",
        strength: "63",
        abilities: ["Investida", "Vento Cortante"],
        powers: ["Golpe de Asa", "Ataque Tornado"],

      },
      pidgeot: {
        image: "./assets/image/gifs/018.gif",
        name: "Pidgeot",
        strength: "83",
        abilities: ["Investida", "Vento Cortante"],
        powers: ["Golpe de Asa", "Ataque Tornado"],

      },
      rattata: {
        image: "./assets/image/gifs/019.gif",
        name: "Rattata",
        strength: "35",
        abilities: ["Mordida", "Correr"],
        powers: ["Hiper Presa", "Ataque Rápido"],

      },
      raticate: {
        image: "./assets/image/gifs/020.gif",
        name: "Raticate",
        strength: "60",
        abilities: ["Mordida", "Correr"],
        powers: ["Hiper Presa", "Ataque Rápido"],

      },
      spearow: {
        image: "./assets/image/gifs/021 - spearow.gif",
        name: "Spearow",
        strength: "38",
        abilities: ["Picada", "Gritar"],
        powers: ["Golpe de Espora", "Ataque Furioso"],

      },
      fearow: {
        image: "./assets/image/gifs/022.gif",
        name: "Fearow",
        strength: "65",
        abilities: ["Picada", "Gritar"],
        powers: ["Golpe de Espora", "Ataque Furioso"],

      },
      ekans: {
        image: "./assets/image/gifs/023.gif",
        name: "Ekans",
        strength: "40",
        abilities: ["Mordida", "Veneno"],
        powers: ["Veneno em Pó", "Ataque de Ácido"],

      },
      arbok: {
        image: "./assets/image/gifs/024.gif",
        name: "Arbok",
        strength: "60",
        abilities: ["Mordida", "Veneno"],
        powers: ["Veneno em Pó", "Ataque de Ácido"],

      },
      pikachu: {
        image: "./assets/image/gifs/025.gif",
        name: "Pikachu",
        strength: "100",
        abilities: ["Choque Elétrico", "Agilidade"],
        powers: ["Raio", "Ataque Rápido"],
        
      },
      raichu: {
        image: "./assets/image/gifs/026.1.gif",
        name: "Raichu",
        strength: "110",
        abilities: ["Choque Elétrico", "Agilidade"],
        powers: ["Raio", "Trovão"],

      },
      sandshrew: {
        image: "./assets/image/gifs/027.gif",
        name: "Sandshrew",
        strength: "50",
        abilities: ["Arranhar", "Defesa"],
        powers: ["Golpe de Areia", "Golpe de Terra"],

      },
      sandslash: {
        image: "./assets/image/gifs/028.gif",
        name: "Sandslash",
        strength: "75",
        abilities: ["Arranhar", "Defesa"],
        powers: ["Golpe de Areia", "Golpe de Terra"],
        
      },
      nidoran: {
        image: "./assets/image/gifs/029.gif",
        name: "Nidoran♀",
        strength: "55",
        abilities: ["Peçonha", "Crescimento"],
        powers: ["Veneno em Pó", "Agulhas Duplas"],

      },
      nidorina: {
        image: "./assets/image/gifs/030.gif",
        name: "Nidorina",
        strength: "70",
        abilities: ["Peçonha", "Crescimento"],
        powers: ["Veneno em Pó", "Agulhas Duplas"],

      },
      nidoqueen: {
        image: "./assets/image/gifs/031.gif",
        name: "Nidoqueen",
        strength: "90",
        abilities: ["Peçonha", "Crescimento"],
        powers: ["Veneno em Pó", "Agulhas Duplas"],
        
      },
    };
  
    // Verifique se o Pokémon com o ID existe na lista pokemonDetailsData
    if (pokemonDetailsData[id]) {
      return pokemonDetailsData[id];
    } else {
      console.error(`Detalhes do Pokémon com ID "${id}" não encontrados.`);
      return null; // Retorna null se os detalhes não forem encontrados
    }
  }

// Adicione um evento de clique para o botão "Voltar à Lista"
backButton.addEventListener('click', () => {
    // Ocultar detalhes e exibir lista principal novamente
    pokemonDetailsDiv.style.display = 'none';
    pokemonList.style.display = "grid"; // Altere para 'grid' ou o valor correto do seu layout

    // Mostrar o botão "Load More" e ocultar o botão "Voltar à Lista"
    loadMoreButton.style.display = "block";
    backButton.style.display = 'none';

    isDetailView = false;
});

// ...

// Adicione um evento de clique para cada Pokémon na lista
const pokemonItems = document.querySelectorAll('.pokemon');
pokemonItems.forEach((pokemonItem) => {
  pokemonItem.addEventListener('click', () => {
    // Recupere os detalhes do Pokémon (você precisará implementar isso)
    const id = pokemonItem.dataset.id; // Obtém o ID do Pokémon
    const pokemonDetails = getPokemonDetails(id);
    
    // Exiba os detalhes
    showPokemonDetails(pokemonDetails);
  });
});

function convertPokemonToHTML(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}" data-id="${pokemon.name}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
            ${pokemon.types
                .map((type) => `<li class="type ${type}">${type}</li>`)
                .join('')}
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
});


/* pokeApi.getPokemons().then((pokemons) => {

    const newList = pokemons.map((pokemon) => convertPokemonToHTML(pokemon))

    const newHTML = newList.join('')

    pokemonList.innerHTML += newHTML 
    
    é o mesmo que:


    const newHtml = pokemons.map(convertPokemonToHTML).join('')
    pokemonList.innerHTML = newHtml 

        
})*/