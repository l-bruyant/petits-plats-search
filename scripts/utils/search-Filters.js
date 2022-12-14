/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// THIS PAGE DEFINES HOW FILTER TAGS INFLUENCE WHAT RECIPES ARE DISPLAYED ON THE APP

// MAIN FUNCTION
// Take a list of recipes, remove recipes that do not match appliance, ustensils and ingredients filters
// Return the filtered list of recipes
function filterRecipes (x) {
  x = filterAppliancesByTags(x)
  x = filterUstensilsByTags(x)
  x = filterIngredientsByTags(x)
  return x
}

// INGREDIENTS FILTERS

// Take a list of recipes, filters it according to ingredients filter tags, return the filtered list
function filterIngredientsByTags (x) {
  const DOMIngredientsTagsArray = []
  const DOMIngredientsTags = document.querySelectorAll('.ingredient-tag')
  DOMIngredientsTags.forEach(tag => {
    const tagText = tag.innerText
    DOMIngredientsTagsArray.push(tagText)
  })
  if (DOMIngredientsTagsArray.length > 0) {
    x = x.filter(function (x) {
      const ingredientsNames = x.ingredients.map(function (a) { return a.ingredient })
      return DOMIngredientsTagsArray.every(element => {
        return ingredientsNames.includes(element)
      })
    })
    return x
  } else {
    return x
  }
}

// APPLIANCES FILTERS

// Take a list of recipes, filters it according to appliances filter tags, return the filtered list
function filterAppliancesByTags (x) {
  const DOMAppliancesTagsArray = []
  const DOMAppliancesTags = document.querySelectorAll('.appareil-tag')
  DOMAppliancesTags.forEach(tag => {
    const tagText = tag.innerText
    DOMAppliancesTagsArray.push(tagText)
  })
  if (DOMAppliancesTagsArray.length > 0) {
    const DOMAppliancesTagsString = DOMAppliancesTagsArray.toString().toLowerCase()
    x = x.filter(function (x) {
      const DOMAppliancesTagsArray = x.appliance.toString().toLowerCase()
      return DOMAppliancesTagsArray.includes(DOMAppliancesTagsString)
    })
    return x
  } else {
    return x
  }
}

// USTENSILS FILTERS

// Take a list of recipes, filters it according to ustensils filter tags, return the filtered list
function filterUstensilsByTags (x) {
  const DOMUstensilsTagsArray = []
  const DOMUstensilsTags = document.querySelectorAll('.ustensile-tag')
  DOMUstensilsTags.forEach(tag => {
    const tagText = tag.innerText
    DOMUstensilsTagsArray.push(tagText)
  })
  if (DOMUstensilsTagsArray.length > 0) {
    x = x.filter(function (x) {
      const recipeUstensils = x.ustensils
      return DOMUstensilsTagsArray.every(element => {
        return recipeUstensils.includes(element)
      })
    })
    return x
  } else {
    return x
  }
}
