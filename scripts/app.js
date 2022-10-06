/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class App {
  constructor () {
    this.recipesWrapper = document.getElementById('results')
    this.recipesApi = new RecipeApi('data/recipes-data.json')
  }

  async init () {
    const originalRecipesData = await this.recipesApi.getRecipes()
    generatePage(originalRecipesData)
  }

  async setTracking () {
    const originalRecipesData = await this.recipesApi.getRecipes()
    searchBar.addEventListener('input', function () {
      generatePage(originalRecipesData)
    })
  }
}

const app = new App()
app.init()
app.setTracking()
