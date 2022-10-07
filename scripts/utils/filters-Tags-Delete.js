/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// THIS PAGE DEFINES HOW FILTER TAGS ARE DELETED

// Delete the current item (a tag), then refresh the page
function deleteTag (elt) {
  elt.parentNode.parentNode.removeChild(elt.parentNode)
  app.createPage()
}
