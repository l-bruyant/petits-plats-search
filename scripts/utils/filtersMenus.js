// INGREDIENTS MENU

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

// APPAREILS MENU

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

// USTENSILES MENU

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

// INGREDIENTS FILTERS DISPLAY

function displayIngredientsFilters (x) {
  resetIngredientsFilterDOM()
  let ingredientsListFilter = []
  x.forEach(recipe => {
    const recipeIngredients = recipe.ingredients.map(function (a) { return a.ingredient })
    ingredientsListFilter = ingredientsListFilter.concat(recipeIngredients)
  })
  const uniqueIngredients = [...new Set(ingredientsListFilter)]
  uniqueIngredients.forEach(uniqueIngredient => {
    const ingredientHTML = document.createElement('div')
    ingredientHTML.innerText = uniqueIngredient
    ingredientHTML.classList.add('filter-item')
    document.getElementById('ingredients-items-list').appendChild(ingredientHTML)
  })
}

function resetIngredientsFilterDOM () {
  document.getElementById('ingredients-items-list').innerHTML = ''
}

// APPLIANCE FILTERS DISPLAY

function displayApplianceFilters (x) {
  resetApplianceFilterDOM()
  let ApplianceListFilter = []
  x.forEach(recipe => {
    const recipeAppliance = recipe.appliance
    ApplianceListFilter = ApplianceListFilter.concat(recipeAppliance)
  })
  const uniqueAppliances = [...new Set(ApplianceListFilter)]
  uniqueAppliances.forEach(uniqueAppliance => {
    const applianceHTML = document.createElement('div')
    applianceHTML.innerText = uniqueAppliance
    applianceHTML.classList.add('filter-item')
    document.getElementById('appareils-items-list').appendChild(applianceHTML)
  })
}

function resetApplianceFilterDOM () {
  document.getElementById('appareils-items-list').innerHTML = ''
}

// USTENSILS FILTER

function displayUstensilsFilters (x) {
  resetUstensilsFilterDOM()
  let ustensilsListFilter = []
  x.forEach(recipe => {
    const recipeUstensils = recipe.ustensils
    console.log(recipeUstensils)
    ustensilsListFilter = ustensilsListFilter.concat(recipeUstensils)
  })
  const uniqueUstensils = [...new Set(ustensilsListFilter)]
  uniqueUstensils.forEach(uniqueUstensil => {
    const ustensilHTML = document.createElement('div')
    ustensilHTML.innerText = uniqueUstensil
    ustensilHTML.classList.add('filter-item')
    document.getElementById('ustensiles-items-list').appendChild(ustensilHTML)
  })
}

function resetUstensilsFilterDOM () {
  document.getElementById('ustensiles-items-list').innerHTML = ''
}
