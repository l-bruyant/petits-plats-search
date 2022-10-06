/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function generatePage (x) {
  resetInterface()
  let filteredRecipesData = x
  filteredRecipesData = searchRecipes(filteredRecipesData)
  filteredRecipesData = filterRecipes(filteredRecipesData)
  displayAvailableFilters(filteredRecipesData)
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

function activeTagsCheck () {
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
