class App {
  constructor () {
    this.recipesWrapper = document.getElementById('results')
    // eslint-disable-next-line no-undef
    this.recipesApi = new RecipeApi('../data/recipes-data.json')
    console.log(this.recipesApi)
  }

  async main () {
    const recipes = await this.recipesApi.getRecipes()
    console.log(recipes)

    recipes.forEach(recipe => {
      // eslint-disable-next-line no-undef
      const Template = new RecipeCard(recipe)
      this.recipesWrapper.appendChild(Template.createRecipeCard())
    })
  }
}

const app = new App()
app.main()
