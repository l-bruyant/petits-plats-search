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
  x = [...new Set(allFilteredRecipes)]
  return x
}

// Filter search results by input

function searchNameByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  const filteredData = []
  for (let i = 0; i < x.length; i++) {
    if (x[i].name.toLowerCase().includes(searchValue.toLowerCase())) {
      filteredData.push(x[i])
    }
  }
  x = filteredData
  return x
}

function searchDescriptionByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  const filteredData = []
  for (let i = 0; i < x.length; i++) {
    if (x[i].description.toLowerCase().includes(searchValue.toLowerCase())) {
      filteredData.push(x[i])
    }
  }
  x = filteredData
  return x
}

function searchIngredientsByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  const filteredData = []
  for (let i = 0; i < x.length; i++) {
    const ingredientsNamesString = x[i].ingredients.map(function (a) { return a.ingredient }).toString()
    if (ingredientsNamesString.toLowerCase().includes(searchValue.toLowerCase())) {
      filteredData.push(x[i])
    }
  }
  x = filteredData
  console.log(x)
  return x
}
