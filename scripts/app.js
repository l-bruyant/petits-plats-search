const searchBar = document.getElementById('search-bar')
class App {
  constructor () {
    this.recipesWrapper = document.getElementById('results')
    this.recipesApi = new RecipeApi('data/recipes-data.json')
  }

  async main () {
    const originalRecipesData = await this.recipesApi.getRecipes()
    generateCardsSequence(originalRecipesData)
    searchBar.addEventListener('input', function () {
      generateCardsSequence(originalRecipesData)
    })
  }
}

const app = new App()
app.main()

function emptyRecipesDOM () {
  document.getElementById('results').innerHTML = ''
}

function generateCardsSequence (data) {
  emptyRecipesDOM()
  hideIngredientsMenu()
  hideAppareilsMenu()
  hideUstensilesMenu()
  let recipesData = data
  const recipesFilteredByName = filterNameByInputValue(recipesData)
  const recipesFilteredByDescr = filterDescriptionByInputValue(recipesData)
  const recipesFilteredByIngr = filterIngredientsByInputValue(recipesData)
  const allFilteredRecipes = recipesFilteredByDescr.concat(recipesFilteredByName).concat(recipesFilteredByIngr)
  if (allFilteredRecipes.length === 0) {
    errorRecipesDOM()
  }
  recipesData = [...new Set(allFilteredRecipes)]
  recipesData = filterAppliancesByTags(recipesData)
  recipesData = filterUstensilsByTags(recipesData)
  recipesData = filterIngredientsByTags(recipesData)
  displayIngredientsFilters(recipesData)
  displayApplianceFilters(recipesData)
  displayUstensilsFilters(recipesData)
  const DOMTagsArray = []
  const DOMtags = document.querySelectorAll('.tag')
  DOMtags.forEach(tag => {
    const tagText = tag.innerText
    DOMTagsArray.push(tagText)
  })
  if (searchBar.value.length > 2 || DOMTagsArray.length > 0) {
    recipesData
      .forEach(recipe => {
        const Template = new RecipeCard(recipe)
        app.recipesWrapper.appendChild(Template.createRecipeCard())
      })
  }
}