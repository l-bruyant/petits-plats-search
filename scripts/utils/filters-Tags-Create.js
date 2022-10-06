/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const filterTagArea = document.getElementById('filter-tag-display')

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
