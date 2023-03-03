export{createAddedToTeamMessage}
export{createAddedToSpareMessage}
export{renderMyTeam}
export{renderSpareTeam}
export{showTeamStatus}
export{myTeam}
export{mySparePokemons}


// DOM-element variabler //
const addedPokemonContainer = document.querySelector ('#added-pokemon-text-container')
const myTeamDivH3Container = document.querySelector('#my-team_div_h3-container')

// här ska valda pokemons hamna
let myTeam =[]
let mySparePokemons = []


// skapar och fäster textelement för lagstatus i lagvy
const myTeamH3 = document.createElement('h3') 
myTeamH3.innerText = "Fyll på ditt lag! Du kan ha 3 lagmedlemmar."
const myTeamH3Full =document.createElement('h3')
myTeamH3Full.innerText= 'Grattis ditt lag är fulltaligt!'

myTeamDivH3Container.append(myTeamH3Full)
	myTeamDivH3Container.append(myTeamH3)
	myTeamH3Full.style.display = 'none'
	myTeamH3.style.display = 'block'



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


// Meddelande att du lagt till i ditt lag

function createAddedToTeamMessage(){
	let addedPokemon = document.createElement('p')
	addedPokemon.textContent = 'Pokémon tillagd i ditt lag!'
	addedPokemon.classList = 'added-to-team-text'
	addedPokemonContainer.append(addedPokemon)
	setTimeout(() => {
		addedPokemon.remove();	
	}, 1000);
}

// Meddelande att du lagt till i reserv

function createAddedToSpareMessage(){
	let addedPokemonSpare = document.createElement('p')
		addedPokemonSpare.textContent = 'Laget är fullt! Pokémon tillagd som reserv'
		addedPokemonSpare.classList = 'added-to-spare-text'
		addedPokemonContainer.append(addedPokemonSpare)
		setTimeout(() => {
			addedPokemonSpare.remove();
		}, 1000);

}


// Skapar bilder till mitt lag

function renderMyTeam(){

	const myTeamDiv = document.querySelector('.my-team_div')
	myTeamDiv.innerHTML =''
	myTeam.forEach( pokemon=> {
		let pokemonCard = document.createElement('article')
		let pokemonCardImage = document.createElement('div')
			pokemonCardImage.innerHTML = `<img src = "${pokemon.picture}" alt = "${pokemon.name}">`
		let pokemonNickname = document.createElement('p')		
		let pokemonCardName = document.createElement('p')
			pokemonCardName.innerText = pokemon.name
		let pokemonCardAbilities = document.createElement('ul')
			pokemonCardAbilities.innerText = 'Förmågor: '
	
			pokemon.abilities.forEach(ability =>{
				let abilityList = document.createElement('li')
				abilityList.innerText = ability
				pokemonCardAbilities.appendChild(abilityList)
			})
		let nameYourPokemon = document.createElement('input')
			nameYourPokemon.placeholder = 'Skriv ett namn'
			nameYourPokemon.maxLength = 10
		let nameYourPokemonButton = document.createElement('button')
			nameYourPokemonButton.innerText = 'Döp mig!'
		let removeFromTeam = document.createElement('button')
			removeFromTeam.innerText = 'Ta bort'
		let changeButtonDiv = document.createElement('div')
		let beforeButton = document.createElement('button')
			beforeButton.innerText = '<'
		let nextButton = document.createElement('button')	
			nextButton.innerText = '>'

		pokemonCard.classList ='pokemon-card'
		pokemonCardImage.classList = 'pokemon-image'
		pokemonNickname.classList = 'pokemon-nickname'
		pokemonCardName.classList = 'pokemon-card-name'
		pokemonCardAbilities.classList = 'pokemon-card-abilities'
		nameYourPokemon.classList = 'name-your-pokemon-input'
		nameYourPokemonButton.classList = 'name-your-pokemon-button'
		removeFromTeam.classList = 'remove-from-team-button'
		changeButtonDiv.classList = 'change-place-button-div'
		beforeButton.classList = 'before-button'
		nextButton.classList = 'next-button'

		// funktion på knapparna för att byta plats
		beforeButton.addEventListener('click', () =>{
			console.log('jag klickade');
			let previousSibling = pokemonCard.previousElementSibling
			if(previousSibling !== null){
				myTeamDiv.insertBefore(previousSibling, pokemonCard.nextSibling)
			}
		})

		nextButton.addEventListener('click', () =>{
			console.log('jag klickade igen');
			let nextSibling = pokemonCard.nextElementSibling
			if(nextSibling !== null){
				myTeamDiv.insertBefore(nextSibling, pokemonCard)
			}
		})
 
		// fäst färdiga cards i lagvyn
		changeButtonDiv.append(beforeButton)
		changeButtonDiv.append(nextButton)
		pokemonCard.append(pokemonCardImage)
		pokemonCard.append(pokemonNickname)
		pokemonCard.append(pokemonCardName)
		pokemonCard.append(pokemonCardAbilities)
		pokemonCard.append(nameYourPokemon)
		pokemonCard.append(nameYourPokemonButton)
		pokemonCard.append(removeFromTeam)
		pokemonCard.append(changeButtonDiv)

		myTeamDiv.append(pokemonCard)

		// om det finns ett nickname sedan tidigare
		if(pokemon.nickname){
			pokemonNickname.innerText = pokemon.nickname
		}

// För att döpa pokémon

		nameYourPokemon.addEventListener('keypress', function (e){
			if (e.key === 'Enter'){
				let nickname = nameYourPokemon.value
				pokemon.nickname = nameYourPokemon.value
				pokemonNickname.innerText = nickname
				nameYourPokemon.value =''
				}
			})
	
		nameYourPokemonButton.addEventListener('click', () =>{
				let nickname = nameYourPokemon.value
				pokemon.nickname = nameYourPokemon.value
				pokemonNickname.innerText =  nickname 
				nameYourPokemon.value =''
		})	


// knapp för att ta bort från my team och lägga i reserv

		removeFromTeam.addEventListener('click', () =>{
			mySparePokemons.unshift(pokemon)
			myTeam.splice(myTeam.indexOf (pokemon), 1)
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

		mySparePokemons.forEach(pokemon => {
		let pokemonCard = document.createElement('article')
		let pokemonCardImage = document.createElement('div')
			pokemonCardImage.innerHTML = `<img src = "${pokemon.picture}" alt = "${pokemon.name}">`
		let pokemonNickname = document.createElement('p')	
		let pokemonCardName = document.createElement('p')
			pokemonCardName.innerText = pokemon.name
		let pokemonCardAbilities = document.createElement('ul')
			pokemonCardAbilities.innerText = 'Förmågor: '

			pokemon.abilities.forEach(ability =>{
				let abilityList = document.createElement('li')
				abilityList.innerText = ability
				pokemonCardAbilities.appendChild(abilityList)
			})

		let nameYourPokemon = document.createElement('input')
			nameYourPokemon.placeholder = 'Döp din pokémon!'
		let pokemonCardAddButton = document.createElement('button')
		pokemonCardAddButton.innerText ='Lägg till'


		let removeFromTeam = document.createElement('button')
			removeFromTeam.innerText = 'Ta bort'
			
		pokemonCard.classList ='pokemon-card'
		pokemonCardImage.classList = 'pokemon-image'
		pokemonNickname.classList = 'pokemon-nickname'
		pokemonCardName.classList = 'pokemon-card-name'
		pokemonCardAbilities.classList = 'pokemon-card-abilities'
		pokemonCardAddButton.classList = 'pokemon-card-add-button'
		removeFromTeam.classList = 'remove-from-team-button'
		
		// fäst färdiga cards i lagvyn
		pokemonCard.append(pokemonCardImage)
		pokemonCard.append(pokemonNickname)
		pokemonCard.append(pokemonCardName)
		pokemonCard.append(pokemonCardAbilities)
		pokemonCard.append(pokemonCardAddButton)
		pokemonCard.append(removeFromTeam)
		sparePlayerDiv.append(pokemonCard)
		
		if(pokemon.nickname){
			pokemonNickname.innerText = pokemon.nickname
		}

		// För att lägga till i mitt lag från reservlaget
		pokemonCardAddButton.addEventListener('click', () =>{
		
			if (myTeam.length <3 ){
				myTeam.unshift({...pokemon})
				mySparePokemons.splice(mySparePokemons.indexOf (pokemon), 1)
				renderMyTeam()
				renderSpareTeam()
				showTeamStatus()
			}
		}) 

		removeFromTeam.addEventListener('click', () =>{
			
			console.log('remove knapp')
			myTeam.pop(pokemon)
			pokemonCard.remove()
			showTeamStatus()
		}) 
	})
}