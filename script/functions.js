export{createAddedToTeamMessage}
export{createAddedToSpareMessage}
export{renderMyTeam}
export{renderSpareTeam}


const addedPokemonContainer = document.querySelector ('#added-pokemon-text-container')
console.log('Här ska bekräftelse visas', addedPokemonContainer);



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
	
	