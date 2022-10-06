/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// GLOBAL

function deleteTag (elt) {
  elt.parentNode.parentNode.removeChild(elt.parentNode)
  app.init()
}
const filterTagArea = document.getElementById('filter-tag-display')

function filterRecipesByFilterTags (x) {
  x = filterAppliancesByTags(x)
  x = filterUstensilsByTags(x)
  x = filterIngredientsByTags(x)
  return x
}

function createAvailableFilters (x) {
  createIngredientsFilters(x)
  createApplianceFilters(x)
  createUstensilsFilters(x)
}

function activeTagsCheck () {
  const DOMTagsArray = []
  const DOMtags = document.querySelectorAll('.tag')
  DOMtags.forEach(tag => {
    const tagText = tag.innerText
    DOMTagsArray.push(tagText)
  })
  if (DOMTagsArray.length > 0) {
    return true
  } else {
    return false
  }
}

// INGREDIENTS MENU

function displayIngredientsMenu () {
  hideUstensilesMenu()
  hideAppareilsMenu()
  document.getElementById('ingredients-expanded').style.display = 'flex'
  document.getElementById('ingredients-filter').style.display = 'none'
  document.getElementById('text-input-ingredients').focus()
}

document.getElementById('ingredients-filter').addEventListener('click', displayIngredientsMenu)

function hideIngredientsMenu () {
  document.getElementById('ingredients-expanded').style.display = 'none'
  document.getElementById('ingredients-filter').style.display = 'flex'
}

document.getElementById('ingredients-filter-icon-up').addEventListener('click', hideIngredientsMenu)

// APPAREILS MENU

function displayAppareilsMenu () {
  hideUstensilesMenu()
  hideIngredientsMenu()
  document.getElementById('appareils-expanded').style.display = 'flex'
  document.getElementById('appareils-filter').style.display = 'none'
  document.getElementById('text-input-appareils').focus()
}

document.getElementById('appareils-filter').addEventListener('click', displayAppareilsMenu)

function hideAppareilsMenu () {
  document.getElementById('appareils-expanded').style.display = 'none'
  document.getElementById('appareils-filter').style.display = 'flex'
}

document.getElementById('appareils-filter-icon-up').addEventListener('click', hideAppareilsMenu)

// USTENSILES MENU

function displayUstensilesMenu () {
  hideIngredientsMenu()
  hideAppareilsMenu()
  document.getElementById('ustensiles-expanded').style.display = 'flex'
  document.getElementById('ustensiles-filter').style.display = 'none'
  document.getElementById('text-input-ustensiles').focus()
}

document.getElementById('ustensiles-filter').addEventListener('click', displayUstensilesMenu)

function hideUstensilesMenu () {
  document.getElementById('ustensiles-expanded').style.display = 'none'
  document.getElementById('ustensiles-filter').style.display = 'flex'
}

document.getElementById('ustensiles-filter-icon-up').addEventListener('click', hideUstensilesMenu)

// INGREDIENTS FILTERS DISPLAY

function createIngredientsFilters (x) {
  resetIngredientsFilterDOM()
  let ingredientsListFilter = []
  x.forEach(recipe => {
    const recipeIngredients = recipe.ingredients.map(function (a) { return a.ingredient })
    ingredientsListFilter = ingredientsListFilter.concat(recipeIngredients)
  })
  const uniqueIngredients = [...new Set(ingredientsListFilter)]
  uniqueIngredients.forEach(uniqueIngredient => {
    createIngredientListItem(uniqueIngredient)
  })
}

function resetIngredientsFilterDOM () {
  document.getElementById('ingredients-items-list').innerHTML = ''
}

function createIngredientListItem (x) {
  const ingredientHTML = document.createElement('div')
  ingredientHTML.innerText = x
  ingredientHTML.classList.add('filter-item')
  document.getElementById('ingredients-items-list').appendChild(ingredientHTML)
  ingredientHTML.addEventListener('click', function () {
    createIngredientTag(x)
    ingredientsTagSearch.value = ''
    app.init()
  })
}

function createIngredientTag (x) {
  // Mettre en global dans la superfunction de creation
  const DOMTagsArray = []
  const DOMtags = document.querySelectorAll('.tag')
  DOMtags.forEach(tag => {
    const tagText = tag.innerText
    DOMTagsArray.push(tagText)
  })
  // Fin partie globale
  const ingredientTagAlreadyExists = DOMTagsArray.some(element => {
    return x.includes(element)
  })
  if (!ingredientTagAlreadyExists) {
    const tag = document.createElement('div')
    tag.classList.add('tag')
    tag.classList.add('ingredient-tag')
    tag.innerHTML = `
        <div>
        ${x}
        </div>
        <button class="remove-filter-button" onClick="deleteTag(this)">
            <i class="fa-solid fa-xmark"></i>
        </button>
      `
    filterTagArea.appendChild(tag)
  }
}

// APPLIANCE FILTERS DISPLAY

function createApplianceFilters (x) {
  resetApplianceFilterDOM()
  let ApplianceListFilter = []
  x.forEach(recipe => {
    const recipeAppliance = recipe.appliance
    ApplianceListFilter = ApplianceListFilter.concat(recipeAppliance)
  })
  const uniqueAppliances = [...new Set(ApplianceListFilter)]
  uniqueAppliances.forEach(uniqueAppliance => {
    createApplianceListItem(uniqueAppliance)
  })
}

function resetApplianceFilterDOM () {
  document.getElementById('appareils-items-list').innerHTML = ''
}

function createApplianceListItem (x) {
  const applianceHTML = document.createElement('div')
  applianceHTML.innerText = x
  applianceHTML.classList.add('filter-item')
  document.getElementById('appareils-items-list').appendChild(applianceHTML)
  applianceHTML.addEventListener('click', function () {
    createApplianceTag(x)
    applianceTagSearch.value = ''
    app.init()
  })
}

function createApplianceTag (x) {
  // Mettre en global dans la superfunction de creation
  const DOMTagsArray = []
  const DOMtags = document.querySelectorAll('.tag')
  DOMtags.forEach(tag => {
    const tagText = tag.innerText
    DOMTagsArray.push(tagText)
  })
  // Fin partie globale
  const ApplianceTagAlreadyExists = DOMTagsArray.some(element => {
    return x.includes(element)
  })
  if (!ApplianceTagAlreadyExists) {
    const tag = document.createElement('div')
    tag.classList.add('tag')
    tag.classList.add('appareil-tag')
    tag.innerHTML = `
        <div>
        ${x}
        </div>
        <button class="remove-filter-button" onClick="deleteTag(this)">
            <i class="fa-solid fa-xmark"></i>
        </button>
      `
    filterTagArea.appendChild(tag)
  }
}

// USTENSILS FILTER

function createUstensilsFilters (x) {
  resetUstensilsFilterDOM()
  let ustensilsListFilter = []
  x.forEach(recipe => {
    const recipeUstensils = recipe.ustensils
    ustensilsListFilter = ustensilsListFilter.concat(recipeUstensils)
  })
  const uniqueUstensils = [...new Set(ustensilsListFilter)]
  uniqueUstensils.forEach(uniqueUstensil => {
    createUstensilListItem(uniqueUstensil)
  })
}

function resetUstensilsFilterDOM () {
  document.getElementById('ustensiles-items-list').innerHTML = ''
}

function createUstensilListItem (x) {
  const ustensilHTML = document.createElement('div')
  ustensilHTML.innerText = x
  ustensilHTML.classList.add('filter-item')
  document.getElementById('ustensiles-items-list').appendChild(ustensilHTML)
  ustensilHTML.addEventListener('click', function () {
    createUstensilTag(x)
    ustensilsTagSearch.value = ''
    app.init()
  })
}

function createUstensilTag (x) {
  // Mettre en global dans la superfunction de creation
  const DOMTagsArray = []
  const DOMtags = document.querySelectorAll('.tag')
  DOMtags.forEach(tag => {
    const tagText = tag.innerText
    DOMTagsArray.push(tagText)
  })
  // Fin partie globale
  const UstensilTagAlreadyExists = DOMTagsArray.some(element => {
    return x.includes(element)
  })
  if (!UstensilTagAlreadyExists) {
    const tag = document.createElement('div')
    tag.classList.add('tag')
    tag.classList.add('ustensile-tag')
    tag.innerHTML = `
        <div>
        ${x}
        </div>
        <button class="remove-filter-button" onClick="deleteTag(this)">
            <i class="fa-solid fa-xmark"></i>
        </button>
      `
    filterTagArea.appendChild(tag)
  }
}

// Filters searchbars

const ingredientsTagSearch = document.getElementById('text-input-ingredients')
ingredientsTagSearch.addEventListener('input', function () {
  const ingredientsListItems = document.querySelectorAll('#ingredients-items-list div')
  ingredientsListItems.forEach(item => {
    if (!item.innerText.toLowerCase().includes(ingredientsTagSearch.value.toLowerCase())) {
      item.style.display = 'none'
    } else {
      item.style.display = 'flex'
    }
  })
})

const applianceTagSearch = document.getElementById('text-input-appareils')
applianceTagSearch.addEventListener('input', function () {
  const applianceListItems = document.querySelectorAll('#appareils-items-list div')
  applianceListItems.forEach(item => {
    if (!item.innerText.toLowerCase().includes(applianceTagSearch.value.toLowerCase())) {
      item.style.display = 'none'
    } else {
      item.style.display = 'flex'
    }
  })
})

const ustensilsTagSearch = document.getElementById('text-input-ustensiles')
ustensilsTagSearch.addEventListener('input', function () {
  const ustensilsListItems = document.querySelectorAll('#ustensiles-items-list div')
  ustensilsListItems.forEach(item => {
    if (!item.innerText.toLowerCase().includes(ustensilsTagSearch.value.toLowerCase())) {
      item.style.display = 'none'
    } else {
      item.style.display = 'flex'
    }
  })
})
