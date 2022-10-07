/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// THIS PAGE DEFINES WHAT ACTIONS START WHEN THE PAGE LOADS

class App {
  // Define where recipes cards will be displayed & where we get data from
  constructor () {
    this.recipesWrapper = document.getElementById('results')
    this.recipesApi = new RecipeApi('data/recipes-data.json')
  }

  // Define how page elements are created from API data
  async createPage () {
    const jsonRecipesData = await this.recipesApi.getRecipes()
    generatePage(jsonRecipesData)
  }

  // Define tracking of the search bar to update the page
  async setSearchTracking () {
    const jsonRecipesData = await this.recipesApi.getRecipes()
    searchBar.addEventListener('input', function () {
      generatePage(jsonRecipesData)
    })
  }
}

// Sequence at page launch
const app = new App()
app.createPage()
app.setSearchTracking()
