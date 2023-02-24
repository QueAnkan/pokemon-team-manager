// DOM-element variabler //
const searchBtn = document.querySelector('#search-view-btn')
const viewTeamBtn = document.querySelector('#team-view-btn')
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

