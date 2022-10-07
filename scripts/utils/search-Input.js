/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// THIS PAGE DEFINES THE EFFECT OF USER INPUT IN THE RECIPES SEARCH BAR

document.getElementById('main-form').addEventListener('submit', function (e) {
  e.preventDefault()
})

const searchBar = document.getElementById('search-bar')

// MAIN FUNCTION
// Take a list of recipes, create lists of recipes that match with Name or Description or Ingredients,
// then remove duplicates and returns a list of all recipes that match user search
function searchRecipes (x) {
  const recipesFilteredByName = searchNameByInputValue(x)
  const recipesFilteredByDescr = searchDescriptionByInputValue(x)
  const recipesFilteredByIngr = searchIngredientsByInputValue(x)
  const allFilteredRecipes = recipesFilteredByDescr.concat(recipesFilteredByName).concat(recipesFilteredByIngr)
  x = [...new Set(allFilteredRecipes)]
  return x
}

// Take a list of recipes, return recipes for which the name matches user input
function searchNameByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    return x.name.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

// Take a list of recipes, return recipes for which the description matches user input
function searchDescriptionByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    return x.description.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

// Take a list of recipes, return recipes for which the ingredients match user input
function searchIngredientsByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    const ingredientsNamesString = x.ingredients.map(function (a) { return a.ingredient }).toString()
    return ingredientsNamesString.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}
