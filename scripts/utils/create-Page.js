/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// MAIN FUNCTIONS FOR PAGE CREATION

function generatePage (x) {
  const appRecipesData = x
  checkActiveFilters()
  if (searchBar.value.length > 2 || checkActiveFilters() === true) {
    createPageWithFilter(appRecipesData)
  } else if (searchBar.value.length < 3) {
    createPageNoFilter(x)
  }
}

function createPageWithFilter (x) {
  resetPage()
  x = createRecipesList(x)
  x.forEach(recipe => {
    const Template = new RecipeCard(recipe)
    app.recipesWrapper.appendChild(Template.createRecipeCard())
  })
  updateFiltersList(x)
}

function createPageNoFilter (x) {
  resetPage()
  x.forEach(recipe => {
    const Template = new RecipeCard(recipe)
    app.recipesWrapper.appendChild(Template.createRecipeCard())
  })
  updateFiltersList(x)
}

// SUPPORT FUNCTIONS FOR generatePage(x)

// Delete informations that could have been generated by previous searches
function resetPage () {
  deleteRecipesCards()
  hideIngredientsMenu()
  hideAppareilsMenu()
  hideUstensilesMenu()
}

// Delete recipes that were previously appended to the page
function deleteRecipesCards () {
  document.getElementById('results').innerHTML = ''
}

// Take all recipes data, filters it using search values and filter tags, then returns a new filtered recipes list according to user requirements
function createRecipesList (x) {
  x = searchRecipes(x)
  x = filterRecipes(x)
  if (x.length === 0) {
    errorRecipesDOM()
  }
  return x
}

// Display an error message instead of the recipes cards
function errorRecipesDOM () {
  document.getElementById('results').innerHTML = '<div> Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc </div>'
}

// Collect all active tag texts in an array, returns true if there is at least one active tag
function checkActiveFilters () {
  const DOMTagsArray = []
  const DOMtags = document.querySelectorAll('.tag')
  DOMtags.forEach(tag => {
    const tagText = tag.innerText
    DOMTagsArray.push(tagText)
  })
  if (DOMTagsArray.length > 0) {
    return true
  } else {
    return false
  }
}
