// DOM element//

const searchInput = document.querySelector('#search-input')
const preViewPicture = document.querySelector('#preview-picture')
const pokemonsPreviewContainer = document.querySelector('#preview-picture')
const SearchButton = document.querySelector('#search-button')


// Här sparas all data:

let pokemonList = []
console.log('Detta sparas i variabeln pokemonList', pokemonList);

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
	
console.log('detta hämtas från API', pokemons);

	pokemons.forEach(async pokemon => {
		const response = await fetch(pokemon.url)
		const data = await response.json()
		
		// const imgUrl = data.sprites.front_default
		
		const pokemonInfo = {
		name: data.name,
		picture: data.sprites.front_default,
		}
		

		pokemonList.push(pokemonInfo)

	
	});

}

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
	 let searchString = event.target.value
	console.log('Key up: ', searchString)
	
	
		let matches = pokemonList.filter(list => list.name.includes(searchString))
	console.log(matches);

	pokemonsPreviewContainer.innerHTML=''


	matches.forEach(pokemonInfo =>{
	let pokemonCard = document.createElement('article')
	let pokemonCardImage = document.createElement('div')
	 pokemonCardImage.innerHTML = `<img src = "${pokemonInfo.picture}" alt = "${pokemonInfo.name}">`
	let pokemonCardName = document.createElement('p')
	pokemonCardName.innerText = pokemonInfo.name
	let choseButton = document.createElement('button')
	choseButton.innerText ='Lägg till'

	pokemonCard.classList ='pokemon-card'
	pokemonCardImage.classList = 'pokemon-image'
	pokemonCardName.classList = 'pokemon-card-name'


	pokemonCard.append(pokemonCardImage)
	pokemonCard.append(pokemonCardName)
	pokemonCard.append(choseButton)


	pokemonsPreviewContainer.append(pokemonCard)

	})

})





	







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