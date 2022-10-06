/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class App {
  constructor () {
    this.recipesWrapper = document.getElementById('results')
    this.recipesApi = new RecipeApi('data/recipes-data.json')
  }

  async createPage () {
    const jsonRecipesData = await this.recipesApi.getRecipes()
    generatePage(jsonRecipesData)
  }

  async setSearchTracking () {
    const jsonRecipesData = await this.recipesApi.getRecipes()
    searchBar.addEventListener('input', function () {
      generatePage(jsonRecipesData)
    })
  }
}

const app = new App()
app.createPage()
app.setSearchTracking()
