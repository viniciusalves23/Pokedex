// Variável para verificar se o filtro está ativo
let isFiltering = false;
// Array que armazena todos os Pokémon originais
let allPokemons = [];

// Função para exibir os Pokémon na lista
function showAllPokemons() {
  const newHtml = allPokemons.map(convertPokemonToLi).join('');
  pokemonList.innerHTML = newHtml;
  loadMoreButton.style.display = 'block';
}
// Função de filtragem
function filterPokemonsByName(name) {
  isFiltering = name.length > 0;

  const filteredPokemons = allPokemons.filter((pokemon) => {
    const pokemonName = pokemon.name.toLowerCase();
    const filterName = name.toLowerCase();
    return pokemonName.startsWith(filterName);
  });

  // Ordena os pokemons filtrados com base nos IDs
  filteredPokemons.sort((a, b) => parseInt(a.number) - parseInt(b.number));

  const newHtml = filteredPokemons.map(convertPokemonToLi).join('');
  pokemonList.innerHTML = newHtml;
  loadMoreButton.style.display = isFiltering ? 'none' : 'block';
}

// Evento de digitação no input de pesquisa
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (event) => {
  const name = event.target.value;
  filterPokemonsByName(name);
});

// Função para limpar o filtro
function clearFilter() {
  searchInput.value = ''; // Limpa o valor do input
  showAllPokemons(); // Exibe todos os pokemons novamente
}

//efeito header
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var title = document.getElementById('title');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Verifica se o usuário rolou para baixo
  if (scrollTop > 0) {
    header.classList.add('scrolled');
    title.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    title.classList.remove('scrolled');
  }
});

//botao votlar ao topo
// Função para verificar a posição do scroll e mostrar ou ocultar o botão
function checkScrollPosition() {
  var backToTopBtn = document.getElementById('backToTopBtn');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Verifica se o usuário rolou uma certa quantidade de pixels (ajuste conforme necessário)
  if (scrollTop > 500) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

// Função para fazer o scroll suave para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Adiciona um listener de evento de scroll para chamar a função checkScrollPosition()
window.addEventListener('scroll', checkScrollPosition);