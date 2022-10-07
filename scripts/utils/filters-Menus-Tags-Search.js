/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// THIS PAGE DEFINES HOW ITEMS ARE HIDDEN OR DISPLAYED ACCORDING TO USER INPUT IN THE FILTER SEARCH FIELDS

// INGREDIENTS SEARCH BAR
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

// APPLIANCE SEARCH BAR
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

// USTENSILS SEARCH BAR
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
