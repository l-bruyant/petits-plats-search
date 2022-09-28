class RecipeCard {
  constructor(recipe) {
    this._recipe = recipe
  }

  createRecipeCard () {
    const wrapper = document.createElement('div')
    wrapper.classList.add('recipe-card')
    wrapper.classList.add('card')
    wrapper.classList.add('col-4')

    const recipeCard = `
        <div class="recipe-card-image">
            <img class="recipe-illustration" src="/assets/recipe-image.jpg" alt="cooking book">
        </div>
        <div class="recipe-card-content card-body">
            <div class="recipe-card-content-top">
                <h3 class="card-title">${this._recipe.name}</h3>
                <div class="duration-area">
                    <i class="fa-regular fa-clock"></i>
                    <p class="duration-text card-text">${this._recipe.time}</p>
                </div>
            </div>
            <div class="recipe-card-content-bottom">
                <ul class="ingredients-list card-text list-unstyled">
                    <li class="ingredient">
                        <b>Lait de coco:</b> 400ml
                    </li>
                    <li class="ingredient">
                        <b>Jus de citron:</b> 2
                    </li>
                    <li class="ingredient">
                        <b>Crème de coco:</b> 4 cuillères
                    </li>
                    <li class="ingredient">
                        <b>Sucre:</b> 20g
                    </li>
                    <li class="ingredient">
                        <b>Glaçons:</b> 2
                    </li>
                </ul>
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
