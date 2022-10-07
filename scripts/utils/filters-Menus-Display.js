/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// THIS PAGE DEFINES HOW THE FILTERS MENUS ARE SHOWN AND HIDDEN

// INGREDIENTS FILTER MENU

function displayIngredientsMenu () {
  hideUstensilesMenu()
  hideAppareilsMenu()
  document.getElementById('ingredients-expanded').style.display = 'flex'
  document.getElementById('ingredients-filter').style.display = 'none'
  document.getElementById('text-input-ingredients').focus()
}

document.getElementById('ingredients-filter').addEventListener('click', displayIngredientsMenu)

function hideIngredientsMenu () {
  document.getElementById('ingredients-expanded').style.display = 'none'
  document.getElementById('ingredients-filter').style.display = 'flex'
}

document.getElementById('ingredients-filter-icon-up').addEventListener('click', hideIngredientsMenu)

// APPAREILS FILTER MENU

function displayAppareilsMenu () {
  hideUstensilesMenu()
  hideIngredientsMenu()
  document.getElementById('appareils-expanded').style.display = 'flex'
  document.getElementById('appareils-filter').style.display = 'none'
  document.getElementById('text-input-appareils').focus()
}

document.getElementById('appareils-filter').addEventListener('click', displayAppareilsMenu)

function hideAppareilsMenu () {
  document.getElementById('appareils-expanded').style.display = 'none'
  document.getElementById('appareils-filter').style.display = 'flex'
}

document.getElementById('appareils-filter-icon-up').addEventListener('click', hideAppareilsMenu)

// USTENSILES FILTER MENU

function displayUstensilesMenu () {
  hideIngredientsMenu()
  hideAppareilsMenu()
  document.getElementById('ustensiles-expanded').style.display = 'flex'
  document.getElementById('ustensiles-filter').style.display = 'none'
  document.getElementById('text-input-ustensiles').focus()
}

document.getElementById('ustensiles-filter').addEventListener('click', displayUstensilesMenu)

function hideUstensilesMenu () {
  document.getElementById('ustensiles-expanded').style.display = 'none'
  document.getElementById('ustensiles-filter').style.display = 'flex'
}

document.getElementById('ustensiles-filter-icon-up').addEventListener('click', hideUstensilesMenu)
