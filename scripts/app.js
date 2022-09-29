class App {
  constructor () {
    this.recipesWrapper = document.getElementById('results')
    // eslint-disable-next-line no-undef
    this.recipesApi = new RecipeApi('data/recipes-data.json')
  }

  async main () {
    const recipesData = await this.recipesApi.getRecipes()
    const searchValue = document.getElementById('search-bar').value
    document.getElementById('ingredients-items-list').innerHTML = ''
    let ingredientsListFilter = []
    emptyRecipesDOM()
    recipesData
    // eslint-disable-next-line no-undef
      .map(recipe => new Recipe(recipe))
      .forEach(recipe => {
        const ingredientsNamesString = recipe.ingredients.map(function (a) { return a.ingredient }).toString()
        const ingredientsNames = recipe.ingredients.map(function (a) { return a.ingredient })
        const searchValueCondition = recipe.name.toLowerCase().includes(searchValue.toLowerCase()) || recipe.description.toLowerCase().includes(searchValue.toLowerCase()) || ingredientsNamesString.toLowerCase().includes(searchValue.toLowerCase())
        const searchLengthCondition = searchValue.length > 2
        if (searchValueCondition && searchLengthCondition) {
          unemptyRecipesDom()
          // eslint-disable-next-line no-undef
          const Template = new RecipeCard(recipe)
          this.recipesWrapper.appendChild(Template.createRecipeCard())
          ingredientsListFilter = ingredientsListFilter.concat(ingredientsNames)
        } else if (searchValueCondition) {
          ingredientsListFilter = ingredientsListFilter.concat(ingredientsNames)
        }
      })
    const uniqueIngredients = [...new Set(ingredientsListFilter)]
    // else {
    //   document.getElementById('ingredients-expanded').style.gridTemplateRows = 'repeat(6, auto)'
    // }
    uniqueIngredients.forEach(uniqueIngredient => {
      const ingredientHTML = document.createElement('div')
      ingredientHTML.classList.add('filter-item')
      ingredientHTML.innerText = uniqueIngredient
      document.getElementById('ingredients-items-list').appendChild(ingredientHTML)
    })
  }

  async setTracking () {
    const searchBar = document.getElementById('search-bar')
    searchBar.addEventListener('input', function () {
      app.main()
    })
  }
}

const app = new App()
app.main()
app.setTracking()

function emptyRecipesDOM () {
  document.getElementById('results').innerHTML = '<div>Veuillez préciser votre recherche</div>'
}

function unemptyRecipesDom () {
  document.getElementById('results').innerHTML = ''
}

// function resetIngredientsFilterDOM () {
//   document.getElementById('ingredients-items-list').innerHTML = ''
// }

// function resetAppareilsFilterDOM () {
//   document.getElementById('appareils-items-list').innerHTML = ''
// }

// function resetUstensilesFilterDOM () {
//   document.getElementById('ustensiles-items-list').innerHTML = ''
// }