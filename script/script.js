import { renderUI } from "./fetch.js"
import { pokemonList } from "./fetch.js"
// import {createAddedToTeamMessage} from "./functions.js"
// import {createAddedToSpareMessage} from "./functions.js"
// import {renderMyTeam} from "./functions.js"
// import {renderSpareTeam} from "./functions.js"
// import {showTeamStatus} from "./functions.js"
// import {myTeam} from "./functions.js"
// import {mySparePokemons} from "./functions.js"



// DOM-element variabler //
const searchBtn = document.querySelector('#search-view-btn')
const viewTeamBtn = document.querySelector('#team-view-btn')
const searchViewSection = document.querySelector('.search-view_section')
const searchInput = document.querySelector('#search-input')
const pokemonsPreviewContainer = document.querySelector('#preview-pictures-container')
const teamViewSection = document.querySelector('.team-view_section')
const myTeamDivH3Container = document.querySelector('#my-team_div_h3-container')
const addedPokemonContainer = document.querySelector ('#added-pokemon-text-container')
// console.log('Här ska bekräftelse visas', addedPokemonContainer);


// skapar textelement för lagstatus
	const myTeamH3 = document.createElement('h3') 
	myTeamH3.innerText = "Fyll på ditt lag! Du kan ha 3 lagmedlemmar."
	const myTeamH3Full =document.createElement('h3')
	myTeamH3Full.innerText= 'Grattis ditt lag är fulltaligt!'
	
	myTeamDivH3Container.append(myTeamH3Full)
		myTeamDivH3Container.append(myTeamH3)
		myTeamH3Full.style.display = 'none'
		myTeamH3.style.display = 'none'

// här ska valda pokemons hamna
let myTeam =[]
// console.log('Här visas pokemon tillagd i mitt lag', myTeam);

let mySparePokemons = []
// console.log('Här visas pokemon i reservlaget', mySparePokemons);


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


// //// Här börjar kod för söka och lägga till pokémon ////////////////


// Kallar på funktionen för att hämta data från API och lägga i variabel

renderUI()


// Söka på valfritt ord och matcha mot sparade data

searchInput.addEventListener('keyup', async (event) =>{ 
	 let searchString = event.target.value.toLowerCase()
	// console.log('Key up: ', searchString)
	
	
		let matches = pokemonList.filter(list => list.name.includes(searchString))
	// console.log('Här sparas sökresultat', matches);

	// töm containern för varje ny matchning

	pokemonsPreviewContainer.innerHTML=''

// skapa bild/info för matchande pokemons

	matches.forEach(pokemonList =>{
	let pokemonCard = document.createElement('article')
	let pokemonCardImage = document.createElement('div')
	 pokemonCardImage.innerHTML = `<img src = "${pokemonList.picture}" alt = "${pokemonList.name}">`
	let pokemonCardName = document.createElement('p')
	pokemonCardName.innerText = pokemonList.name
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
				myTeam.unshift({...pokemonList})
				createAddedToTeamMessage()	

			// lägger till i reserver

			} else {
				mySparePokemons.unshift(pokemonList)
				createAddedToSpareMessage()
			}

			renderMyTeam()
			renderSpareTeam()
			showTeamStatus()
			
			pokemonCardAddButton.disabled = true; setTimeout(()=>{
				pokemonCardAddButton.disabled = false
			}, 1500)

		}) 
	
	})

})



// /////Här ligger funktioner just nu////////////




// Visar lagstatus, om du kan fylla på fler i laget eller ej

function showTeamStatus(){
	
	if( myTeam.length <3){
		myTeamH3.style.display ='block'
		myTeamH3Full.style.display = 'none'
	}
	else{
		myTeamH3Full.style.display ='block'
		myTeamH3.style.display = 'none'
	}
		
}


// Meddelande lagt till i ditt lag

function createAddedToTeamMessage(){
	let addedPokemon = document.createElement('p')
	addedPokemon.textContent = 'Pokémon tillagd i ditt lag!'
	addedPokemon.classList = 'added-to-team-text'
	addedPokemonContainer.append(addedPokemon)
	setTimeout(() => {
		addedPokemon.remove();	
	}, 1450);
}

// Meddelande lagt till i reserv

function createAddedToSpareMessage(){
	let addedPokemonSpare = document.createElement('p')
		addedPokemonSpare.textContent = 'Laget är fullt! Pokémon tillagd som reserv'
		addedPokemonSpare.classList = 'added-to-spare-text'
		addedPokemonContainer.append(addedPokemonSpare)
		setTimeout(() => {
			addedPokemonSpare.remove();
		}, 1450);

}


// Skapar bilder till mitt lag

function renderMyTeam(){

	const myTeamDiv = document.querySelector('.my-team_div')
	myTeamDiv.innerHTML =''
	myTeam.forEach( pokemonList=> {
		let pokemonTeamCard = document.createElement('article')
		let pokemonTeamCardImage = document.createElement('div')
			pokemonTeamCardImage.innerHTML = `<img src = "${pokemonList.picture}" alt = "${pokemonList.name}">`
		let pokemonNickname = document.createElement('p')		
		let pokemonTeamCardName = document.createElement('p')
			pokemonTeamCardName.innerText = pokemonList.name
		let nameYourPokemon = document.createElement('input')
			nameYourPokemon.placeholder = 'Skriv ett namn'
			nameYourPokemon.maxLength = 10
		let nameYourPokemonButton = document.createElement('button')
			nameYourPokemonButton.innerText = 'Döp mig!'
		let removeFromTeam = document.createElement('button')
			removeFromTeam.innerText = 'Ta bort'
		
		pokemonTeamCard.classList ='pokemon-card'
		pokemonTeamCardImage.classList = 'pokemon-image'
		pokemonTeamCardName.classList = 'pokemon-card-name'
		nameYourPokemon.classList = 'name-your-pokemon-input'
		nameYourPokemonButton.classList = 'name-your-pokemon-button'
		removeFromTeam.classList = 'remove-from-team-button'
		
		pokemonTeamCard.append(pokemonTeamCardImage)
		pokemonTeamCard.append(pokemonNickname)
		pokemonTeamCard.append(pokemonTeamCardName)
		pokemonTeamCard.append(nameYourPokemon)
		pokemonTeamCard.append(nameYourPokemonButton)
		pokemonTeamCard.append(removeFromTeam)
	
		myTeamDiv.append(pokemonTeamCard)

		// om det finns ett nickname sedan tidigare
		if(pokemonList.nickname){
			pokemonNickname.innerText = pokemonList.nickname
		}

// För att döpa pokémon

		nameYourPokemon.addEventListener('keypress', function (e){
			if (e.key === 'Enter'){
				let nickname = nameYourPokemon.value
				pokemonList.nickname = nameYourPokemon.value
				pokemonNickname.innerText = nickname
				nameYourPokemon.value =''
				}

			})
	
		nameYourPokemonButton.addEventListener('click', () =>{
				let nickname = nameYourPokemon.value
				pokemonList.nickname = nameYourPokemon.value
				pokemonNickname.innerText = nickname
				nameYourPokemon.value =''
		})	


// knapp för att ta bort från my team och lägga i reserv

		removeFromTeam.addEventListener('click', (event) =>{
			/* const pokemonToRemove = myTeam.find(pokemonInfo =>pokemonInfo.name === event.target.previousSibling.previousSibling.innerText) */
			mySparePokemons.unshift(pokemonList)
			myTeam.splice(myTeam.indexOf (pokemonList), 1)
			renderMyTeam()
			renderSpareTeam()
			showTeamStatus()
		}) 
	


	})
}

// Skapar bilder till reserver

function renderSpareTeam(){

	const sparePlayerDiv = document.querySelector('.spare-player_div')
	sparePlayerDiv.innerHTML = ''

		mySparePokemons.forEach(pokemonList => {
		let pokemonTeamCard = document.createElement('article')
		let pokemonTeamCardImage = document.createElement('div')
			pokemonTeamCardImage.innerHTML = `<img src = "${pokemonList.picture}" alt = "${pokemonList.name}">`
		let pokemonTeamCardName = document.createElement('p')
			pokemonTeamCardName.innerText = pokemonList.name
		let nameYourPokemon = document.createElement('input')
			nameYourPokemon.placeholder = 'Döp din pokémon!'
		let pokemonTeamCardAddButton = document.createElement('button')
		pokemonTeamCardAddButton.innerText ='Lägg till'


		let removeFromTeam = document.createElement('button')
			removeFromTeam.innerText = 'Ta bort'
			
			pokemonTeamCard.classList ='pokemon-card'
			pokemonTeamCardImage.classList = 'pokemon-image'
			pokemonTeamCardName.classList = 'pokemon-card-name'
			pokemonTeamCardAddButton.classList = 'pokemon-card-add-button'
			removeFromTeam.classList = 'remove-from-team-button'
			

			pokemonTeamCard.append(pokemonTeamCardImage)
			pokemonTeamCard.append(pokemonTeamCardName)
			pokemonTeamCard.append(pokemonTeamCardAddButton)
			pokemonTeamCard.append(removeFromTeam)
			sparePlayerDiv.append(pokemonTeamCard)

			
			pokemonTeamCardAddButton.addEventListener('click', (event) =>{
				/* 	const pokemonToAdd = matches.find(pokemonInfo =>pokemonInfo.name === event.target.previousSibling.innerText) */
					// console.log('click på add.knapp', myTeam.length, mySparePokemons.length);
				if (myTeam.length <3 ){
					myTeam.unshift({...pokemonList})
					mySparePokemons.splice(mySparePokemons.indexOf (pokemonList), 1)
					renderMyTeam()
					renderSpareTeam()
					showTeamStatus()
				}
			}) 

			removeFromTeam.addEventListener('click', (event) =>{
				/* const pokemonToRemove = myTeam.find(pokemonInfo =>pokemonInfo.name === event.target.previousSibling.previousSibling.innerText) */
				console.log('remove knapp')
				myTeam.pop(pokemonList)
				pokemonTeamCard.remove()
				showTeamStatus()
			}) 

	})
}
	