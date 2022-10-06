/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

document.getElementById('main-form').addEventListener('submit', function (e) {
  e.preventDefault()
})

const searchBar = document.getElementById('search-bar')

function searchRecipes (x) {
  const recipesFilteredByName = searchNameByInputValue(x)
  const recipesFilteredByDescr = searchDescriptionByInputValue(x)
  const recipesFilteredByIngr = searchIngredientsByInputValue(x)
  const allFilteredRecipes = recipesFilteredByDescr.concat(recipesFilteredByName).concat(recipesFilteredByIngr)
  if (allFilteredRecipes.length === 0) {
    errorRecipesDOM()
  }
  x = [...new Set(allFilteredRecipes)]
  return x
}

function errorRecipesDOM () {
  document.getElementById('results').innerHTML = '<div> Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc </div>'
}

// Filter search results by input

function searchNameByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    return x.name.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

function searchDescriptionByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    return x.description.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

function searchIngredientsByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    const ingredientsNamesString = x.ingredients.map(function (a) { return a.ingredient }).toString()
    return ingredientsNamesString.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

// Filter search results by tags
