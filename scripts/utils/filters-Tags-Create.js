/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// THIS PAGE DEFINES HOW FILTER TAGS ARE CREATED ACCORDING TO CLICKS IN THE FILTERS MENUS

const filterTagArea = document.getElementById('filter-tag-display')

// 1. INGREDIENTS FILTER TAGS
// Take an ingredient tag name, check if it alredy exists on the page. If it doesn't, create it.
function createIngredientTag (x) {
  const DOMTagsArray = []
  const DOMtags = document.querySelectorAll('.tag')
  DOMtags.forEach(tag => {
    const tagText = tag.innerText
    DOMTagsArray.push(tagText)
  })
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

// 2. APPLIANCE FILTER TAGS
// Works exactly as 1., please check 1. for more details
function createApplianceTag (x) {
  const DOMTagsArray = []
  const DOMtags = document.querySelectorAll('.tag')
  DOMtags.forEach(tag => {
    const tagText = tag.innerText
    DOMTagsArray.push(tagText)
  })
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

// 3. USTENSILS FILTER TAGS
// Works exactly as 1., please check 1. for more details
function createUstensilTag (x) {
  const DOMTagsArray = []
  const DOMtags = document.querySelectorAll('.tag')
  DOMtags.forEach(tag => {
    const tagText = tag.innerText
    DOMTagsArray.push(tagText)
  })
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
