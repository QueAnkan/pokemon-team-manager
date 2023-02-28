import { renderUI } from "./fetch.js"
import { pokemonList } from "./fetch.js"

// DOM-element variabler //
const searchBtn = document.querySelector('#search-view-btn')
const viewTeamBtn = document.querySelector('#team-view-btn')
const searchViewSection = document.querySelector('.search-view_section')
const searchInput = document.querySelector('#search-input')
const pokemonsPreviewContainer = document.querySelector('#preview-pictures-container')
const teamViewSection = document.querySelector('.team-view_section')
const myTeamDivH3Container = document.querySelector('#my-team_div_h3-container')
const addedPokemonContainer = document.querySelector ('#added-pokemon-text-container')
console.log('Här ska bekräftelse visas', addedPokemonContainer);
// här ska valda pokemons hamna
let myTeam =[]
console.log('Här visas pokemon tillagd i mitt lag', myTeam);

let mySparePokemons = []
console.log('Här visas pokemon i reservlaget', mySparePokemons);



let myTeamH3 = document.createElement('h3') 
if( myTeam.length <3){
	myTeamH3.innerText = "Fyll på ditt lag! Du kan ha 3 lagmedlemmar."
console.log(myTeamH3);}
else{myTeamH3.innerText= 'Grattis ditt lag är fulltaligt!'}
	myTeamDivH3Container.append(myTeamH3)


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



// //// Här börjar kod för sök-vy ////////////////


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
	 let searchString = event.target.value.toLowerCase()
	console.log('Key up: ', searchString)
	
	
		let matches = pokemonList.filter(list => list.name.includes(searchString))
	console.log('Här sparas sökresultat', matches);

	// töm containern för varje ny matchning

	pokemonsPreviewContainer.innerHTML=''

// skapa bild/info för matchande pokemons

	matches.forEach(pokemonInfo =>{
	let pokemonCard = document.createElement('article')
	let pokemonCardImage = document.createElement('div')
	 pokemonCardImage.innerHTML = `<img src = "${pokemonInfo.picture}" alt = "${pokemonInfo.name}">`
	let pokemonCardName = document.createElement('p')
	pokemonCardName.innerText = pokemonInfo.name
	let pokemonCardAddButton = document.createElement('button')
	pokemonCardAddButton.innerText ='Lägg till'

	pokemonCard.classList ='pokemon-card'
	pokemonCardImage.classList = 'pokemon-image'
	pokemonCardName.classList = 'pokemon-card-name'
	pokemonCardAddButton.classList = 'pokemon-card-add-button'

// fäst färdiga cards i sökvyn

	pokemonCard.append(pokemonCardImage)
	pokemonCard.append(pokemonCardName)
	pokemonCard.append(pokemonCardAddButton)


	pokemonsPreviewContainer.append(pokemonCard)


	// lägger till pokemon i mitt lag 
	pokemonCardAddButton.addEventListener('click', (event) =>{
	/* 	const pokemonToAdd = matches.find(pokemonInfo =>pokemonInfo.name === event.target.previousSibling.innerText) */
		// console.log('click på add.knapp', myTeam.length, mySparePokemons.length);
		if (myTeam.length <3 ){
			myTeam.unshift(pokemonInfo)

			createAddedToTeamMessage()
			
	
// //// Här börjar kod för det som visas i lag-vy  ///////////

// visar mitt lag

		
// lägger till i reserver

		} else {
			mySparePokemons.unshift(pokemonInfo)
			createAddedToSpareMessage()
			
// visar reserver
			
		}
		renderMyTeam()
		renderSpareTeam()
	}) 

	})

})

function createAddedToTeamMessage(){
	let addedPokemon = document.createElement('p')
	addedPokemon.textContent = 'Pokémon tillagd i ditt lag!'
	addedPokemon.classList = 'added-to-team-text'
	addedPokemonContainer.append(addedPokemon)
	setTimeout(() => {
		addedPokemon.remove();
	}, 1500);
}

	function createAddedToSpareMessage(){
		let addedPokemonSpare = document.createElement('p')
				addedPokemonSpare.textContent = 'Laget är fullt! Pokémon tillagd som reserv'
				addedPokemonSpare.classList = 'added-to-spare-text'
				addedPokemonContainer.append(addedPokemonSpare)
				setTimeout(() => {
					addedPokemonSpare.remove();
				}, 2000);

	}




function renderMyTeam(){

	const myTeamDiv = document.querySelector('.my-team_div')
	myTeamDiv.innerHTML =''
	myTeam.forEach( pokemonInfo=> {
		let pokemonTeamCard = document.createElement('article')
		let pokemonTeamCardImage = document.createElement('div')
			pokemonTeamCardImage.innerHTML = `<img src = "${pokemonInfo.picture}" alt = "${pokemonInfo.name}">`
		let pokemonTeamCardName = document.createElement('p')
			pokemonTeamCardName.innerText = pokemonInfo.name
		let nameYourPokemon = document.createElement('input')
			nameYourPokemon.placeholder = 'Döp din pokémon!'
			nameYourPokemon.maxLength = 10
		let removeFromTeam = document.createElement('button')
			removeFromTeam.innerText = 'Ta bort'
		
		pokemonTeamCard.classList ='pokemon-card'
		pokemonTeamCardImage.classList = 'pokemon-image'
		pokemonTeamCardName.classList = 'pokemon-card-name'
		nameYourPokemon.classList = 'name-your-pokemon-input'
		removeFromTeam.classList = 'remove-from-team-button'
		
		pokemonTeamCard.append(pokemonTeamCardImage)
		pokemonTeamCard.append(pokemonTeamCardImage)
		pokemonTeamCard.append(pokemonTeamCardName)
		pokemonTeamCard.append(nameYourPokemon)
		pokemonTeamCard.append(removeFromTeam)
	
		myTeamDiv.append(pokemonTeamCard)
	
	})

	/* removeFromTeam.addEventListener('click', (event) =>{
		const pokemonToRemove = myTeam.find(pokemonInfo =>pokemonInfo.name === event.target.previousSibling.previousSibling.innerText)
		console.log('remove knapp');
		myTeam.pop(pokemonToRemove)
		//  for(let i=myTeam.length-1; i >=0; --i){
		// 	if( myTeam[i].field == pokemonInfo.name){
		// 		myTeam.splice(i,1)
		// 	}
		// } 
		// pokemonTeamCard.remove()
		// console.log(pokemonToRemove);
	}) */


}




function renderSpareTeam(){

	const sparePlayerDiv = document.querySelector('.spare-player_div')
sparePlayerDiv.innerHTML = ''
	mySparePokemons.forEach(pokemonInfo => {
	let pokemonTeamCard = document.createElement('article')
	let pokemonTeamCardImage = document.createElement('div')
		pokemonTeamCardImage.innerHTML = `<img src = "${pokemonInfo.picture}" alt = "${pokemonInfo.name}">`
	let pokemonNickname = document.createElement('p')
		 pokemonNickname.innerText = ''			
	let pokemonTeamCardName = document.createElement('p')
		pokemonTeamCardName.innerText = pokemonInfo.name
	let nameYourPokemon = document.createElement('input')
		nameYourPokemon.placeholder = 'Döp din pokémon!'
	let pokemonCardAddButton = document.createElement('button')
		pokemonCardAddButton.innerText ='Lägg till'


	let removeFromTeam = document.createElement('button')
		removeFromTeam.innerText = 'Ta bort'
		
		pokemonTeamCard.classList ='pokemon-card'
		pokemonTeamCardImage.classList = 'pokemon-image'
		pokemonTeamCardName.classList = 'pokemon-card-name'
		nameYourPokemon.classList = 'name-your-pokemon-input'
		pokemonCardAddButton.classList = 'pokemon-card-add-button'
		removeFromTeam.classList = 'remove-from-team-button'
		

		pokemonTeamCard.append(pokemonTeamCardImage)
		pokemonTeamCard.append(pokemonNickname)
		pokemonTeamCard.append(pokemonTeamCardName)
		pokemonTeamCard.append(nameYourPokemon)
		pokemonTeamCard.append(pokemonCardAddButton)
		pokemonTeamCard.append(removeFromTeam)
		sparePlayerDiv.append(pokemonTeamCard)

		

	});
}



















	


	