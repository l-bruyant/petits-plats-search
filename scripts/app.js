class App {
  constructor () {
    this.recipesWrapper = document.getElementById('results')
    // eslint-disable-next-line no-undef
    this.recipesApi = new RecipeApi('../data/recipes-data.json')
    console.log(this.recipesApi)
  }

  async main () {
    const recipesData = await this.recipesApi.getRecipes()

    recipesData
      // eslint-disable-next-line no-undef
      .map(recipe => new Recipe(recipe))
      .forEach(recipe => {
        console.log('====')
        console.log(recipe)
        console.log('====')
        // eslint-disable-next-line no-undef
        const Template = new RecipeCard(recipe)
        this.recipesWrapper.appendChild(Template.createRecipeCard())
      })
  }
}

const app = new App()
app.main()
