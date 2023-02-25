import { renderUI } from "./fetch.js"
import { pokemonList } from "./fetch.js"

// DOM-element variabler //
const searchBtn = document.querySelector('#search-view-btn')
const viewTeamBtn = document.querySelector('#team-view-btn')
const searchViewSection = document.querySelector('.search-view_section')
const teamViewSection = document.querySelector('.team-view_section')
const searchInput = document.querySelector('#search-input')
const pokemonsPreviewContainer = document.querySelector('#preview-picture')







// Toggla mellan vyerna

searchBtn.addEventListener('click', () =>{ 
	searchViewSection.style.display = 'block'
	teamViewSection.style.display = 'none'
})
viewTeamBtn.addEventListener
('click', ()=>{
	searchViewSection.style.display = 'none'
	teamViewSection.style.display = 'block'
})

// Kallar på funktionen för att hämta data från API och lägga i variabel

renderUI()



//   console.log(renderUI());


// vad vill jag att sökfunktionen ska göra?
	// loopa igenom variabeln pokemonCard
	// Jämföra söksträng med name, med filter
	// skapa en variabel med alla namn som  matchar
	// 

// Söka på valfritt ord och matcha mot sparade data

searchInput.addEventListener('keyup', async (event) =>{ 
	 let searchString = event.target.values.toLowerCase()
	console.log('Key up: ', searchString)
	
	
		let matches = pokemonList.filter(list => list.name.includes(searchString))
	console.log(matches);

	// töm containern för varje ny matchning

	pokemonsPreviewContainer.innerHTML=''

// visa bild/info för matchande pokemons
	matches.forEach(pokemon =>{
	let pokemonCard = document.createElement('article')
	let pokemonCardImage = document.createElement('div')
	 pokemonCardImage.innerHTML = `<img src = "${pokemon.picture}" alt = "${pokemon.name}">`
	let pokemonCardName = document.createElement('p')
	pokemonCardName.innerText = pokemon.name
	let pokemonCardButton = document.createElement('button')
	pokemonCardButton.innerText ='Lägg till'

	pokemonCard.classList ='pokemon-card'
	pokemonCardImage.classList = 'pokemon-image'
	pokemonCardName.classList = 'pokemon-card-name'
	pokemonCardButton.classList = 'pokemon-card-button'

	pokemonCard.append(pokemonCardImage)
	pokemonCard.append(pokemonCardName)
	pokemonCard.append(pokemonCardButton)


	pokemonsPreviewContainer.append(pokemonCard)

	})

})

// lägg till pokemon i mitt lag
pokemonCardButton.addEventListener('click', ){

}