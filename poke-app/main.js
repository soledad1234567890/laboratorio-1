import './style.css'
import fetchPokemon from './src/services/api.js';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonDisplay = document.getElementById('pokemon-display');
const pokemonDisplaySprites = document.getElementById('pokemon-display-sprites');


searchButton.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (!query) return; // No buscar si el input está vacío.
    console.log('test');
    try {
        const pokemon = await fetchPokemon('https://pokeapi.co/api/v2/pokemon/', query);
        displayPokemon(pokemon);
    } catch (error) {
        console.error("Error al buscar el Pokémon:", error);
    }
});

const  displayPokemon = (pokemon) => {
    pokemonDisplay.innerHTML = '';
    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;
    pokemonDisplay.appendChild(pokemonName);
}

const  displayPokemonSprites = (pokemon) => {
  pokemonDisplaySprites.innerHTML = '';
  const pokemonName = document.createElement('img');
  pokemonName.src = pokemon.sprites.back_default;
  pokemonDisplaySprites.appendChild(pokemonName);
}
