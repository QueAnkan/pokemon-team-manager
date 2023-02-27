import { renderUI } from "./fetch.js"
import { pokemonList } from "./fetch.js"

// DOM-element variabler //
const searchBtn = document.querySelector('#search-view-btn')
const viewTeamBtn = document.querySelector('#team-view-btn')
const searchViewSection = document.querySelector('.search-view_section')
const searchInput = document.querySelector('#search-input')
const pokemonsPreviewContainer = document.querySelector('#preview-picture')
const teamViewSection = document.querySelector('.team-view_section')
const myTeamDiv = document.querySelector('.my-team_div')
const myTeamDivH3Container = document.querySelector('#my-team_div_h3-container')
const sparePlayerDiv = document.querySelector('.spare-player_div')

// här ska valda pokemons hamna
let myTeam =[]
console.log('Här visas pokemon tillagd i mitt lag', myTeam);

let mySparePokemons = []
console.log('Här visas pokemon i reservlaget', mySparePokemons);



let myTeamH3 = document.createElement('h3') 
if( myTeam.length <3){
	myTeamH3.innerText = "Fyll på ditt lag! Du kan ha 3 lagmedlemmar."
console.log(myTeamH3);}
else{myTeamH3.innerText = 'Grattis ditt lag är fulltaligt!'}
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
		const pokemonToAdd = matches.find(pokemonInfo =>pokemonInfo.name === event.target.previousSibling.innerText)
		console.log('click på add.knapp', myTeam.length, mySparePokemons.length);
		if (myTeam.length <2 ){
			myTeam.unshift(pokemonToAdd)

// //// Här börjar kod för det som visas i lag-vy  ///////////

// lägger till i mitt lag

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
		
// lägger till i reserver

		} else {mySparePokemons.unshift(pokemonToAdd)


			let pokemonTeamCard = document.createElement('article')
			let pokemonTeamCardImage = document.createElement('div')
				pokemonTeamCardImage.innerHTML = `<img src = "${pokemonInfo.picture}" alt = "${pokemonInfo.name}">`
			let pokemonNickname = document.createElement('p')
				 pokemonNickname.innerText = ''			
			let pokemonTeamCardName = document.createElement('p')
				pokemonTeamCardName.innerText = pokemonInfo.name
			let nameYourPokemon = document.createElement('input')
				nameYourPokemon.placeholder = 'Döp din pokémon!'
			let removeFromTeam = document.createElement('button')
				removeFromTeam.innerText = 'Ta bort'
				let pokemonCardAddButton = document.createElement('button')
				pokemonCardAddButton.innerText ='Lägg till'


				pokemonTeamCard.classList ='pokemon-card'
				pokemonTeamCardImage.classList = 'pokemon-image'
				pokemonTeamCardName.classList = 'pokemon-card-name'
				nameYourPokemon.classList = 'name-your-pokemon-input'
				removeFromTeam.classList = 'remove-from-team-button'
				pokemonCardAddButton.classList = 'pokemon-card-add-button'

				pokemonTeamCard.append(pokemonTeamCardImage)
				pokemonTeamCard.append(pokemonNickname)
				pokemonTeamCard.append(pokemonTeamCardName)
				pokemonTeamCard.append(nameYourPokemon)
				pokemonTeamCard.append(removeFromTeam)
				pokemonTeamCard.append(pokemonCardAddButton)
				sparePlayerDiv.append(pokemonTeamCard)

		}
	}) 

	})

})


// ////// detta behöver göras:

/* 	
	-få det att funka så man inte får med första pokemonen två ggr
	-meddelande när man lägger till en pokemon (var den hamnar) som visas en kort stund  
	-funktioner för knapparna på team-view sidan
	
	
	*/


