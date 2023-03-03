import { renderUI } from "./fetch.js"
import { pokemonList } from "./fetch.js"
import {createAddedToTeamMessage} from "./functions.js"
import {createAddedToSpareMessage} from "./functions.js"
import {renderMyTeam} from "./functions.js"
import {renderSpareTeam} from "./functions.js"
import {showTeamStatus} from "./functions.js"
import {myTeam} from "./functions.js"
import {mySparePokemons} from "./functions.js"



// DOM-element variabler //

const searchBtn = document.querySelector('#search-view-btn')
const viewTeamBtn = document.querySelector('#team-view-btn')
const searchViewSection = document.querySelector('.search-view_section')
const searchInput = document.querySelector('#search-input')
const pokemonsPreviewContainer = document.querySelector('#preview-pictures-container')
const teamViewSection = document.querySelector('.team-view_section')


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
	
			let matches = pokemonList.filter(list => list.name.includes(searchString))

		// töm containern för varje ny matchning

		pokemonsPreviewContainer.innerHTML=''

	// skapa bild/info för matchande pokemons

		matches.forEach(pokemon =>{
		let pokemonCard = document.createElement('article')
		let pokemonCardImage = document.createElement('div')
		pokemonCardImage.innerHTML = `<img src = "${pokemon.picture}" alt = "${pokemon.name}">`
		let pokemonCardName = document.createElement('p')
		pokemonCardName.innerText = pokemon.name
		let pokemonCardAbilities = document.createElement('ul')
		pokemonCardAbilities.innerText = 'Förmågor: '

		pokemon.abilities.forEach(ability =>{
			let abilityList = document.createElement('li')
			abilityList.innerText = ability
			pokemonCardAbilities.appendChild(abilityList)
		})

		let pokemonCardAddButton = document.createElement('button')
		pokemonCardAddButton.innerText ='Lägg till'

		pokemonCard.classList ='pokemon-card'
		pokemonCardImage.classList = 'pokemon-image'
		pokemonCardName.classList = 'pokemon-card-name'
		pokemonCardAbilities.classList = 'pokemon-card-abilities'
		pokemonCardAddButton.classList = 'pokemon-card-add-button'

	// fäst färdiga cards i sökvyn
	
		pokemonCard.append(pokemonCardImage)
		pokemonCard.append(pokemonCardName)
		pokemonCard.append(pokemonCardAbilities)
		pokemonCard.append(pokemonCardAddButton)

		pokemonsPreviewContainer.append(pokemonCard)


			// lägger till pokemon i mitt lag 
			pokemonCardAddButton.addEventListener('click', () =>{
			
				if (myTeam.length <3 ){
					myTeam.push({...pokemon})
					createAddedToTeamMessage()	

				// lägger till i reserver

				} else {
					mySparePokemons.unshift(pokemon)
					createAddedToSpareMessage()
				}

				// kallar på funktioner för att visa cards och lagstatus

				renderMyTeam()
				renderSpareTeam()
				showTeamStatus()
				
				pokemonCardAddButton.disabled = true; setTimeout(()=>{
					pokemonCardAddButton.disabled = false
				}, 1000)

			}) 
		
		})
})
