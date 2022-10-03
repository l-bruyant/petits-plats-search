class App {
  constructor () {
    this.recipesWrapper = document.getElementById('results')
    // eslint-disable-next-line no-undef
    this.recipesApi = new RecipeApi('data/recipes-data.json')
  }

  async main () {
    const originalRecipesData = await this.recipesApi.getRecipes()
    const searchBar = document.getElementById('search-bar')
    searchBar.addEventListener('input', function () {
      generateCards(originalRecipesData)
    })
  }
}

const app = new App()
app.main()
// app.setTracking()

function emptyRecipesDOM () {
  document.getElementById('results').innerHTML = ''
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
    console.log(ingredientsNamesString)
    return ingredientsNamesString.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

function generateCards (x) {
  emptyRecipesDOM()
  let recipesData = x
  const recipesFilteredByName = filterNameByInputValue(recipesData)
  const recipesFilteredByDescr = filterDescriptionByInputValue(recipesData)
  const recipesFilteredByIngr = filterIngredientsByInputValue(recipesData)
  const allFilteredRecipes = recipesFilteredByDescr.concat(recipesFilteredByName).concat(recipesFilteredByIngr)
  recipesData = [...new Set(allFilteredRecipes)]
  recipesData
    .forEach(recipe => {
    // eslint-disable-next-line no-undef
      const Template = new RecipeCard(recipe)
      app.recipesWrapper.appendChild(Template.createRecipeCard())
    })
}

// async secondary () {
//   // const recipesData = await this.recipesApi.getRecipes()
//   const searchValue = document.getElementById('search-bar').value
//   document.getElementById('ingredients-items-list').innerHTML = ''
//   let ingredientsListFilter = []
//   let applianceListFilter = []
//   let ustensilsListFilter = []
//   let existingTags = []
//   const tagCollect = document.querySelectorAll('.tag')
//   tagCollect.forEach(tag => {
//     const cleanTag = tag.innerText
//     existingTags.push(cleanTag)
//   })
//   emptyRecipesDOM()
//   resetIngredientsFilterDOM()
//   resetAppareilsFilterDOM()
//   resetUstensilesFilterDOM()
//   // recipesData
//   // // eslint-disable-next-line no-undef
//   //   .map(recipe => new Recipe(recipe))
//   //   .forEach(recipe => {
//   //     const tagString = existingTags.toString()
//   //     const ingredientsNamesString = recipe.ingredients.map(function (a) { return a.ingredient }).toString()
//   //     const ingredientsNames = recipe.ingredients.map(function (a) { return a.ingredient })
//   //     const applianceName = recipe.appliance
//   //     const ustensilsNames = recipe.ustensils
//   //     const searchValueCondition = recipe.name.toLowerCase().includes(searchValue.toLowerCase()) || recipe.description.toLowerCase().includes(searchValue.toLowerCase()) || ingredientsNamesString.toLowerCase().includes(searchValue.toLowerCase())
//   //     const searchLengthCondition = searchValue.length > 2
//   //     const ingredientsTagCondition = document.querySelectorAll('.ingredient-tag').length === 0 || existingTags.some(element => {
//   //       return ingredientsNames.includes(element)
//   //     })

//   //     // const ingredientsTagCondition = document.querySelectorAll('.ingredient-tag').length === 0 || tagString.toLowerCase().includes(ingredientsNames)
//   //     // const applianceTagCondition = document.querySelectorAll('.appareil-tag').length === 0 ||
//   //     // const ustensilsTagCondition = document.querySelectorAll('.ustensiles-tag').length === 0 ||
//   //     if (searchValueCondition && searchLengthCondition && ingredientsTagCondition) {
//   //       // eslint-disable-next-line no-undef
//   //       const Template = new RecipeCard(recipe)
//   //       this.recipesWrapper.appendChild(Template.createRecipeCard())
//   //       ingredientsListFilter = ingredientsListFilter.concat(ingredientsNames)
//   //       applianceListFilter = applianceListFilter.concat(applianceName)
//   //       ustensilsListFilter = ustensilsListFilter.concat(ustensilsNames)
//   //     } else if (searchValueCondition && ingredientsTagCondition) {
//   //       ingredientsListFilter = ingredientsListFilter.concat(ingredientsNames)
//   //       applianceListFilter = applianceListFilter.concat(applianceName)
//   //       ustensilsListFilter = ustensilsListFilter.concat(ustensilsNames)
//   //     }
//   //   })
//   const filterTagArea = document.getElementById('filter-tag-display')
//   const uniqueIngredients = [...new Set(ingredientsListFilter)]
//   uniqueIngredients.forEach(uniqueIngredient => {
//     const ingredientHTML = document.createElement('div')
//     ingredientHTML.classList.add('filter-item')
//     ingredientHTML.innerText = uniqueIngredient
//     ingredientHTML.addEventListener('click', function () {
//       if (existingTags.includes(uniqueIngredient) === false) {
//         existingTags = existingTags.concat(uniqueIngredient)
//         const tag = document.createElement('div')
//         tag.classList.add('tag')
//         tag.classList.add('ingredient-tag')
//         tag.innerHTML = `
//           <div>
//           ${uniqueIngredient}
//           </div>
//           <button class="remove-filter-button" onClick="deleteTag(this)">
//               <i class="fa-solid fa-xmark"></i>
//           </button>
//         `
//         filterTagArea.appendChild(tag)
//       }
//       const tagsSelectors = document.querySelectorAll('.filter-item')
//       tagsSelectors.forEach(tag => {
//         tag.addEventListener('click', function () {
//           console.log('reload')
//           app.main()
//         })
//       })
//     })
//     document.getElementById('ingredients-items-list').appendChild(ingredientHTML)
//   })
//   const uniqueAppliances = [...new Set(applianceListFilter)]
//   uniqueAppliances.forEach(uniqueAppliance => {
//     const applianceHTML = document.createElement('div')
//     applianceHTML.classList.add('filter-item')
//     applianceHTML.innerText = uniqueAppliance
//     applianceHTML.addEventListener('click', function () {
//       if (existingTags.includes(uniqueAppliance) === false) {
//         existingTags = existingTags.concat(uniqueAppliance)
//         const tag = document.createElement('div')
//         tag.classList.add('tag')
//         tag.classList.add('appareil-tag')
//         tag.innerHTML = `
//           <div>
//           ${uniqueAppliance}
//           </div>
//           <button class="remove-filter-button" onClick="deleteTag(this)">
//               <i class="fa-solid fa-xmark"></i>
//           </button>
//         `
//         filterTagArea.appendChild(tag)
//       }
//       const tagsSelectors = document.querySelectorAll('.filter-item')
//       tagsSelectors.forEach(tag => {
//         tag.addEventListener('click', function () {
//           console.log('reload')
//           app.main()
//         })
//       })
//     })
//     document.getElementById('appareils-items-list').appendChild(applianceHTML)
//   })
//   const uniqueUstenslils = [...new Set(ustensilsListFilter)]
//   uniqueUstenslils.forEach(uniqueUstensil => {
//     const ustensilHTML = document.createElement('div')
//     ustensilHTML.classList.add('filter-item')
//     ustensilHTML.innerText = uniqueUstensil
//     ustensilHTML.addEventListener('click', function () {
//       if (existingTags.includes(uniqueUstensil) === false) {
//         existingTags = existingTags.concat(uniqueUstensil)
//         const tag = document.createElement('div')
//         tag.classList.add('tag')
//         tag.classList.add('ustensile-tag')
//         tag.innerHTML = `
//           <div>
//           ${uniqueUstensil}
//           </div>
//           <button class="remove-filter-button" onClick="deleteTag(this)">
//               <i class="fa-solid fa-xmark"></i>
//           </button>
//         `
//         filterTagArea.appendChild(tag)
//       }
//       const tagsSelectors = document.querySelectorAll('.filter-item')
//       tagsSelectors.forEach(tag => {
//         tag.addEventListener('click', function () {
//           console.log('reload')
//           app.main()
//         })
//       })
//     })
//     document.getElementById('ustensiles-items-list').appendChild(ustensilHTML)
//   })
// }

//   async setTracking () {
//     const searchBar = document.getElementById('search-bar')
//     searchBar.addEventListener('input', function () {
//       app.main()
//     })
//   }

// // function unemptyRecipesDom () {
// //   document.getElementById('results').innerHTML = ''
// // }

// function resetIngredientsFilterDOM () {
//   document.getElementById('ingredients-items-list').innerHTML = ''
// }

// function resetAppareilsFilterDOM () {
//   document.getElementById('appareils-items-list').innerHTML = ''
// }

// function resetUstensilesFilterDOM () {
//   document.getElementById('ustensiles-items-list').innerHTML = ''
// }

// // eslint-disable-next-line no-unused-vars
// function deleteTag (elt) {
//   elt.parentNode.parentNode.removeChild(elt.parentNode)
//   app.main()
//   app.setTracking()
// }
