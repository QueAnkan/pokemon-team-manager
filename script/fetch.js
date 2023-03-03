export {renderUI}
export {pokemonList}

// Variabel för att hämta api

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0/'

// Här sparas all hämtad data:
let pokemonList = []

console.log('Detta hämtas och sparas i variabeln pokemonList', pokemonList);




// Hämtar Data från API

async function getApi(url){
	try {
		const response = await fetch(url)
		const data = await response.json()
		const dataResults = data
		return dataResults

	} catch(error) {
		console.log(error.message, 'Något är fel');
		const errorMessage = document.createElement('p')
		errorMessage.innerText = 'Något gick fel, uppdatera sidan eller försök igen om en liten stund.'
		let bodyHeader = document.querySelector('.body_header')
		bodyHeader.append(errorMessage)
		setTimeout(() => {
			errorMessage.remove();	
		}, 3000);
		return null
	}
	
}

// Sorterar ut önskad data och samla i array

async function renderUI(){
	
	const pokemons = (await getApi(pokeUrl))?.results
	
	if (pokemons === null){
		return null
	}
	
	pokemons.forEach(async pokemon => {
		
		const data = await getApi(pokemon.url) 

		const abilitiesArray = []
	
		data.abilities.forEach(ability =>{
			const abilities = ability.ability.name

			 abilitiesArray.push(abilities)
		})

		pokemon.picture = data.sprites.front_default
		pokemon.abilities = abilitiesArray
		
		pokemonList.push(pokemon)

	})
}

