class App {
  constructor () {
    this.recipesWrapper = document.getElementById('results')
    // eslint-disable-next-line no-undef
    this.recipesApi = new RecipeApi('data/recipes-data.json')
  }

  async main () {
    const recipesData = await this.recipesApi.getRecipes()
    const searchValue = document.getElementById('search-bar').value
    if (searchValue.length < 3) {
      recipesData
        // eslint-disable-next-line no-undef
        .map(recipe => new Recipe(recipe))
        .forEach(recipe => {
          // eslint-disable-next-line no-undef
          const Template = new RecipeCard(recipe)
          this.recipesWrapper.appendChild(Template.createRecipeCard())
        })
    } else {
      resetRecipesDOM()
      recipesData
      // eslint-disable-next-line no-undef
        .map(recipe => new Recipe(recipe))
        .forEach(recipe => {
          const ingredientsNamesList = recipe.ingredients.map(function (a) { return a.ingredient }).toString()
          if (recipe.name.toLowerCase().includes(searchValue.toLowerCase()) || recipe.description.toLowerCase().includes(searchValue.toLowerCase()) || ingredientsNamesList.toLowerCase().includes(searchValue.toLowerCase())) {
          // eslint-disable-next-line no-undef
            const Template = new RecipeCard(recipe)
            this.recipesWrapper.appendChild(Template.createRecipeCard())
          }
        })
    }
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

function resetRecipesDOM () {
  document.getElementById('results').innerHTML = ''
}
