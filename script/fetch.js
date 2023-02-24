// DOM element//

const searchInput = document.querySelector('#search-input')
// console.log(searchInput);
// const preViewPicture = document.querySelector('#preview-picture')

const SearchButton = document.querySelector('#search-button')

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
console.log(pokemons);
	pokemons.forEach(async pokemon => {
		let response = await fetch(pokemon.url)
		let data = await response.json()
		let imgUrl = data.sprites.front_default
		
let pokemonInfo = {
	name: pokemon.name,
	picture: imgUrl,
}
//  console.log(pokemonInfo);

pokemonList.push(pokemonInfo)

		
		
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

}

  renderUI()

let pokemonList = []
console.log(pokemonList);

//   console.log(renderUI());


// vad vill jag att sökfunktionen ska göra?
	// loopa igenom variabeln pokemonCard
	// Jämföra söksträng med name, med filter?
	// skapa en variabel med alla namn som  matchar
	// 

searchInput.addEventListener('keyup', (event) =>{ 
	 let searchString = event.target.value
	console.log('Key up: ', searchString)
	let names = pokemonList.filter(listitem => listitem.name == searchString)
	console.log(names);
	/* if(matches.includes(searchString))
	console.log(pokemonList)
		 */
	


})



/* if(!searchString){
	console.log('ingen träff');
}

let matches = pokemonList.filter(list => list.name == searchString)
if (matches.length) { 
	console.log(matches)
}
 */

/* let filteredPokemons = pokemonList.filter(filtered => filtered.name == 'searchString')
console.log(filteredPokemons);
 */



/* if (pokemonList.includes(searchString)){
console.log('hej')}
 */
/* for (let i=0; i < pokemonList.length; i++){
	if (searchString == pokemonList.map(names =>names.name)){
		console.log ('hej')
	}
} */



	







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