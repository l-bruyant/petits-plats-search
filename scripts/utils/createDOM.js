/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function generatePage (x) {
  resetInterface()
  let filteredRecipesData = x
  filteredRecipesData = filterRecipesBySearch(filteredRecipesData)
  filteredRecipesData = filterRecipesByFilterTags(filteredRecipesData)
  createAvailableFilters(filteredRecipesData)
  activeTagsCheck()
  if (searchBar.value.length > 2 || activeTagsCheck() === true) {
    filteredRecipesData
      .forEach(recipe => {
        const Template = new RecipeCard(recipe)
        app.recipesWrapper.appendChild(Template.createRecipeCard())
      })
  }
}

function resetInterface () {
  emptyRecipesDOM()
  hideIngredientsMenu()
  hideAppareilsMenu()
  hideUstensilesMenu()
}

function emptyRecipesDOM () {
  document.getElementById('results').innerHTML = ''
}
