document.getElementById('main-form').addEventListener('submit', function (e) {
  e.preventDefault()
})

function errorRecipesDOM () {
  document.getElementById('results').innerHTML = '<div> Veuillez préciser votre recherche </div>'
}

function filterNameByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    return x.name.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

function filterDescriptionByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    return x.description.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

function filterIngredientsByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    const ingredientsNamesString = x.ingredients.map(function (a) { return a.ingredient }).toString()
    return ingredientsNamesString.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

const filterTagArea = document.getElementById('filter-tag-display')

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

// const filterTagArea = document.getElementById('filter-tag-display')
// const uniqueIngredients = [...new Set(ingredientsListFilter)]
// uniqueIngredients.forEach(uniqueIngredient => {
//   const ingredientHTML = document.createElement('div')
//   ingredientHTML.classList.add('filter-item')
//   ingredientHTML.innerText = uniqueIngredient
//   ingredientHTML.addEventListener('click', function () {
//     if (existingTags.includes(uniqueIngredient) === false) {
//       existingTags = existingTags.concat(uniqueIngredient)
//       const tag = document.createElement('div')
//       tag.classList.add('tag')
//       tag.classList.add('ingredient-tag')
//       tag.innerHTML = `
//         <div>
//         ${uniqueIngredient}
//         </div>
//         <button class="remove-filter-button" onClick="deleteTag(this)">
//             <i class="fa-solid fa-xmark"></i>
//         </button>
//       `
//       filterTagArea.appendChild(tag)
//     }
//     const tagsSelectors = document.querySelectorAll('.filter-item')
//     tagsSelectors.forEach(tag => {
//       tag.addEventListener('click', function () {
//         console.log('reload')
//         app.main()
//       })
//     })
//   })
//   document.getElementById('ingredients-items-list').appendChild(ingredientHTML)
// })
//