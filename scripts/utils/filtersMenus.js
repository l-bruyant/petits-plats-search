function displayIngredientsMenu () {
  document.getElementById('ingredients-expanded').style.display = 'flex'
  document.getElementById('ingredients-filter').style.display = 'none'
}

document.getElementById('ingredients-filter').addEventListener('click', displayIngredientsMenu)

function hideIngredientsMenu () {
  document.getElementById('ingredients-expanded').style.display = 'none'
  document.getElementById('ingredients-filter').style.display = 'flex'
}

document.getElementById('ingredients-filter-icon-up').addEventListener('click', hideIngredientsMenu)
