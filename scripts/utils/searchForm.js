document.getElementById('main-form').addEventListener('submit', function(e) {
  e.preventDefault()
})

function resetRecipesDOM() {
  document.getElementById('results').innerHTML = ''
}
