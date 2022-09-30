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
    let applianceListFilter = []
    let ustensilsListFilter = []

    emptyRecipesDOM()
    resetIngredientsFilterDOM()
    resetAppareilsFilterDOM()
    resetUstensilesFilterDOM()
    recipesData
    // eslint-disable-next-line no-undef
      .map(recipe => new Recipe(recipe))
      .forEach(recipe => {
        const ingredientsNamesString = recipe.ingredients.map(function (a) { return a.ingredient }).toString()
        const ingredientsNames = recipe.ingredients.map(function (a) { return a.ingredient })
        const applianceName = recipe.appliance
        const ustensilsNames = recipe.ustensils
        const searchValueCondition = recipe.name.toLowerCase().includes(searchValue.toLowerCase()) || recipe.description.toLowerCase().includes(searchValue.toLowerCase()) || ingredientsNamesString.toLowerCase().includes(searchValue.toLowerCase())
        const searchLengthCondition = searchValue.length > 2
        if (searchValueCondition && searchLengthCondition) {
          // eslint-disable-next-line no-undef
          const Template = new RecipeCard(recipe)
          this.recipesWrapper.appendChild(Template.createRecipeCard())
          ingredientsListFilter = ingredientsListFilter.concat(ingredientsNames)
          applianceListFilter = applianceListFilter.concat(applianceName)
          ustensilsListFilter = ustensilsListFilter.concat(ustensilsNames)
        } else if (searchValueCondition) {
          ingredientsListFilter = ingredientsListFilter.concat(ingredientsNames)
          applianceListFilter = applianceListFilter.concat(applianceName)
          ustensilsListFilter = ustensilsListFilter.concat(ustensilsNames)
        }
      })
    const filterTagArea = document.getElementById('filter-tag-display')
    const uniqueIngredients = [...new Set(ingredientsListFilter)]
    let existingTags = []
    const tagCollect = document.querySelectorAll('.tag')
    tagCollect.forEach(tag => {
      existingTags.push(tag.textContent)
    })
    uniqueIngredients.forEach(uniqueIngredient => {
      const ingredientHTML = document.createElement('div')
      ingredientHTML.classList.add('filter-item')
      ingredientHTML.innerText = uniqueIngredient
      ingredientHTML.addEventListener('click', function () {
        if (existingTags.includes(uniqueIngredient) === false) {
          existingTags = existingTags.concat(uniqueIngredient)
          const tag = document.createElement('div')
          tag.classList.add('tag')
          tag.classList.add('ingredient-tag')
          tag.innerHTML = `
            <div>
            ${uniqueIngredient}
            </div>
            <button class="remove-filter-button" onClick="deleteTag(this)">
                <i class="fa-solid fa-xmark"></i>
            </button>
          `
          filterTagArea.appendChild(tag)
        }
      })
      document.getElementById('ingredients-items-list').appendChild(ingredientHTML)
    })
    const uniqueAppliances = [...new Set(applianceListFilter)]
    uniqueAppliances.forEach(uniqueAppliance => {
      const applianceHTML = document.createElement('div')
      applianceHTML.classList.add('filter-item')
      applianceHTML.innerText = uniqueAppliance
      applianceHTML.addEventListener('click', function () {
        if (existingTags.includes(uniqueAppliance) === false) {
          existingTags = existingTags.concat(uniqueAppliance)
          const tag = document.createElement('div')
          tag.classList.add('tag')
          tag.classList.add('appareil-tag')
          tag.innerHTML = `
            <div>
            ${uniqueAppliance}
            </div>
            <button class="remove-filter-button" onClick="deleteTag(this)">
                <i class="fa-solid fa-xmark"></i>
            </button>
          `
          filterTagArea.appendChild(tag)
        }
      })
      document.getElementById('appareils-items-list').appendChild(applianceHTML)
    })
    const uniqueUstenslils = [...new Set(ustensilsListFilter)]
    uniqueUstenslils.forEach(uniqueUstensil => {
      const ustensilHTML = document.createElement('div')
      ustensilHTML.classList.add('filter-item')
      ustensilHTML.innerText = uniqueUstensil
      ustensilHTML.addEventListener('click', function () {
        if (existingTags.includes(uniqueUstensil) === false) {
          existingTags = existingTags.concat(uniqueUstensil)
          const tag = document.createElement('div')
          tag.classList.add('tag')
          tag.classList.add('ustensile-tag')
          tag.innerHTML = `
            <div>
            ${uniqueUstensil}
            </div>
            <button class="remove-filter-button" onClick="deleteTag(this)">
                <i class="fa-solid fa-xmark"></i>
            </button>
          `
          filterTagArea.appendChild(tag)
        }
      }) 
      document.getElementById('ustensiles-items-list').appendChild(ustensilHTML)
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
  document.getElementById('results').innerHTML = '<div class="blocker-text">Veuillez préciser votre recherche</div>'
}

// function unemptyRecipesDom () {
//   document.getElementById('results').innerHTML = ''
// }

function resetIngredientsFilterDOM () {
  document.getElementById('ingredients-items-list').innerHTML = ''
}

function resetAppareilsFilterDOM () {
  document.getElementById('appareils-items-list').innerHTML = ''
}

function resetUstensilesFilterDOM () {
  document.getElementById('ustensiles-items-list').innerHTML = ''
}

// eslint-disable-next-line no-unused-vars
function deleteTag (elt) {
  elt.parentNode.parentNode.removeChild(elt.parentNode)
  app.main()
  app.setTracking()
}
