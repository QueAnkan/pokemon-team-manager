// DOM element//

const searchInput = document.querySelector('#search-input')
// console.log(searchInput);
const preViewPicture = document.querySelector('#preview-picture')



// för att hämta api

const nameUrl = 'https://pokeapi.co/api/v2/pokemon/?limit =20&offset=0' 


async function getApi(url){
	const response = await fetch(url)
	const data = await response.json()
	let dataResults = data.results
	return dataResults
}


async function renderUI(){
	let pokemons = await getApi(nameUrl)
	let pokemonsPreviewContainer = document.querySelector('#preview-picture')

	pokemons.forEach(async pokemon => {
		let response = await fetch(pokemon.url)
		let data = await response.json()
		let imgUrl = data.sprites.front_default

		pokemon.url = imgUrl
		let pokemonCard = document.createElement('article')
		pokemonCard.innerHTML = `
		<img src = "${pokemon.url}">
		<p>${pokemon.name}</p>
		`
		pokemonsPreviewContainer.append(pokemonCard)
	});

}

renderUI()

console.log(renderUI());


/* searchInput.addEventListener('keyDown', async () =>{

	console.log('keyDown');

	
	

// Skapa textlista med namn på allt som matchar det man sökt

} ) */
