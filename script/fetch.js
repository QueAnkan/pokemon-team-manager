export {renderUI}
export {pokemonList}

// för att hämta api

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/?limit =20&offset=0' 


async function getApi(url){
	const response = await fetch(url)
	const data = await response.json()
	const dataResults = data.results
	return dataResults
	
}

async function renderUI(){
	const pokemons = await getApi(pokeUrl)
	
// console.log('detta hämtas från API', pokemons);

	pokemons.forEach(async pokemon => {
		const response = await fetch(pokemon.url)
		const data = await response.json()
		
		
		const pokemonInfo = {
		name: data.name,
		picture: data.sprites.front_default,
		}
		

		pokemonList.push(pokemonInfo)

	
	});

}

// Här sparas all hämtad data:
let pokemonList = []
console.log('Detta hämtas och sparas i variabeln pokemonList', pokemonList);








	







// Majas Version

	/* async function renderUI(){
		let pokemons = await getApi(nameUrl)
		 let pokemonsPreviewContainer = document.querySelector('#preview-picture')
	console.log(pokemons);
		pokemons.forEach(async pokemon => {
			let response = await fetch(pokemon.url)
			let data = await response.json()
			let imgUrl = data.sprites.front_default
			
	
		
			let pokemonCard = document.createElement('article')
			let pokemonCardImage = document.createElement('div')
			pokemonCardImage.innerHTML = `<img src = "${imgUrl}">`
			let pokemonCardName = document.createElement('p')
			pokemonCardName.innerText = pokemon.name
			let choseButton = document.createElement('button')
			choseButton.innerText ='Lägg till'
	
			pokemonCard.classList ='pokemon-card'
			pokemonCardImage.classList = 'pokemon-image'
			pokemonCardName.classList = 'pokemon-card-name'
	
	
	pokemonCard.append(pokemonCardImage)
	pokemonCard.append(pokemonCardName)
	pokemonCard.append(choseButton)
	
	
			pokemonsPreviewContainer.append(pokemonCard)
		});
	
	} */