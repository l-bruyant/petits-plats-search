document.getElementById('main-form').addEventListener('submit', function (e) {
  e.preventDefault()
})

function errorRecipesDOM () {
  document.getElementById('results').innerHTML = '<div> Veuillez préciser votre recherche </div>'
}

// Filter search results by input

function filterNameByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    return x.name.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

function filterDescriptionByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    return x.description.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

function filterIngredientsByInputValue (x) {
  const searchValue = document.getElementById('search-bar').value
  x = x.filter(function (x) {
    const ingredientsNamesString = x.ingredients.map(function (a) { return a.ingredient }).toString()
    return ingredientsNamesString.toLowerCase().includes(searchValue.toLowerCase())
  })
  return x
}

// Filter search results by tags

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
