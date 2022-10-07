/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// THIS PAGE DEFINES HOW THE FILTERS SYSTEM IS GENERATED
// INCLUDING SHOWING AVAILABLE FILTERS BASED ON ACTIVE RECIPES
// INCLUDING ACTIONS WHEN CLICKING FILTERS BUTTONS & TAGS

// Master function to create all filters (ingredients, appliances, ustensils)
function updateFiltersList (x) {
  createIngredientsFilters(x)
  createApplianceFilters(x)
  createUstensilsFilters(x)
}

// 1. INGREDIENTS FILTERS

// Takes recipes as input, gets all unique recipes ingredients in an array, then creates the filter items in the ingredients filter menu
function createIngredientsFilters (x) {
  resetIngredientsFilterDOM()
  let ingredientsListFilter = []
  x.forEach(recipe => {
    const recipeIngredients = recipe.ingredients.map(function (a) { return a.ingredient })
    ingredientsListFilter = ingredientsListFilter.concat(recipeIngredients)
  })
  const uniqueIngredients = [...new Set(ingredientsListFilter)]
  uniqueIngredients.forEach(uniqueIngredient => {
    createIngredientListItem(uniqueIngredient)
  })
}

// Reset the ingredients filter menu
function resetIngredientsFilterDOM () {
  document.getElementById('ingredients-items-list').innerHTML = ''
}

// Take ingredient as input, create an ingredient item in the ingredient filter menu
function createIngredientListItem (x) {
  const ingredientHTML = document.createElement('div')
  ingredientHTML.innerText = x
  ingredientHTML.classList.add('filter-item')
  document.getElementById('ingredients-items-list').appendChild(ingredientHTML)
  // Define what happens when an ingredient item from the menu is clicked : create a filter tag & refresh search results
  ingredientHTML.addEventListener('click', function () {
    createIngredientTag(x)
    ingredientsTagSearch.value = ''
    app.createPage()
  })
}

// 2. APPLIANCES FILTERS
// Works exactly as 1., please refer to 1. for explanations

function createApplianceFilters (x) {
  resetApplianceFilterDOM()
  let ApplianceListFilter = []
  x.forEach(recipe => {
    const recipeAppliance = recipe.appliance
    ApplianceListFilter = ApplianceListFilter.concat(recipeAppliance)
  })
  const uniqueAppliances = [...new Set(ApplianceListFilter)]
  uniqueAppliances.forEach(uniqueAppliance => {
    createApplianceListItem(uniqueAppliance)
  })
}

function resetApplianceFilterDOM () {
  document.getElementById('appareils-items-list').innerHTML = ''
}

function createApplianceListItem (x) {
  const applianceHTML = document.createElement('div')
  applianceHTML.innerText = x
  applianceHTML.classList.add('filter-item')
  document.getElementById('appareils-items-list').appendChild(applianceHTML)
  applianceHTML.addEventListener('click', function () {
    createApplianceTag(x)
    applianceTagSearch.value = ''
    app.createPage()
  })
}

// 3. USTENSILS FILTERS
// Works exactly as 1., please refer to 1. for explanations

function createUstensilsFilters (x) {
  resetUstensilsFilterDOM()
  let ustensilsListFilter = []
  x.forEach(recipe => {
    const recipeUstensils = recipe.ustensils
    ustensilsListFilter = ustensilsListFilter.concat(recipeUstensils)
  })
  const uniqueUstensils = [...new Set(ustensilsListFilter)]
  uniqueUstensils.forEach(uniqueUstensil => {
    createUstensilListItem(uniqueUstensil)
  })
}

function resetUstensilsFilterDOM () {
  document.getElementById('ustensiles-items-list').innerHTML = ''
}

function createUstensilListItem (x) {
  const ustensilHTML = document.createElement('div')
  ustensilHTML.innerText = x
  ustensilHTML.classList.add('filter-item')
  document.getElementById('ustensiles-items-list').appendChild(ustensilHTML)
  ustensilHTML.addEventListener('click', function () {
    createUstensilTag(x)
    ustensilsTagSearch.value = ''
    app.createPage()
  })
}
