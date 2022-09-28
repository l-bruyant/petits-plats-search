// eslint-disable-next-line no-unused-vars
class RecipeCard {
  constructor (recipe) {
    this._recipe = recipe
  }

  createRecipeCard () {
    const wrapper = document.createElement('div')
    wrapper.classList.add('recipe-card')
    wrapper.classList.add('card')
    wrapper.classList.add('col-4')
    wrapper.setAttribute('tabindex', 0)

    const recipeIngredientsList = document.createElement('ul')
    recipeIngredientsList.classList.add('ingredients-list')
    recipeIngredientsList.classList.add('card-text')
    recipeIngredientsList.classList.add('list-unstyled')

    const recipeIngredients = this._recipe.ingredients
    recipeIngredients.forEach(ingredient => {
      const ingredientElement = document.createElement('li')
      const ingredientName = ingredient.ingredient
      const ingredientQuantity = ingredient.quantity ? ': ' + ingredient.quantity : ' '
      const ingredientUnit = ingredient.unit ? ingredient.unit : ' '
      const ingredientString = '<b>' + ingredientName + '</b>' + ingredientQuantity + ' ' + ingredientUnit
      ingredientElement.innerHTML = ingredientString
      recipeIngredientsList.appendChild(ingredientElement)
    })

    const recipeCard = `
        <div class="recipe-card-image">
            <img class="recipe-illustration" src="/assets/recipe-image.jpg" alt="cooking book">
        </div>
        <div class="recipe-card-content card-body">
            <div class="recipe-card-content-top">
                <h3 class="card-title">${this._recipe.name}</h3>
                <div class="duration-area">
                    <i class="fa-regular fa-clock"></i>
                    <p class="duration-text card-text">${this._recipe.time} min</p>
                </div>
            </div>
            <div class="recipe-card-content-bottom">
                ${recipeIngredientsList.outerHTML}
                <p class="description card-text">
                    ${this._recipe.description}
                </p>
            </div>
        </div>    
        `
    wrapper.innerHTML = recipeCard
    return wrapper
  }
}
