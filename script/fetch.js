export {renderUI}
export {pokemonList}

// Variabel för att hämta api

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/?limit =20&offset=0' 

// Här sparas all hämtad data:
let pokemonList = []

console.log('Detta hämtas och sparas i variabeln pokemonList', pokemonList);




// Hämtar Data från API

async function getApi(url){
	const response = await fetch(url)
	const data = await response.json()
	const dataResults = data.results
	return dataResults
	
}

// Sorterar ut önskad data och samlas i array

async function renderUI(){
	const pokemons = await getApi(pokeUrl)
	
	pokemons.forEach(async pokemon => {
		const response = await fetch(pokemon.url)
		const data = await response.json()
		
		
		const pokemonInfo = {
		name: data.name,
		picture: data.sprites.front_default,
		}
		

		pokemonList.push(pokemonInfo)

	})
}



