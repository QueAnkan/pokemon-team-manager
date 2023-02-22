// DOM-element variabler //
const searchBtn = document.querySelector('#search-btn')
const viewTeamBtn = document.querySelector('#view-team-btn')
const searchViewSection = document.querySelector('.search-view_section')
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

