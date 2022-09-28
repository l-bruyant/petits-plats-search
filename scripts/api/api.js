class Api {
/**
 *
 * @param {string} url
 */
  constructor (url) {
    console.log(url + ' used by constructor from Api')
    this._url = url
  }

  async get () {
    console.log('started get function from api')
    return fetch(this._url)
      .then(res => res.json())
      .then(res => res.data)
      .catch(err => console.log('an error occurs', err))
  }
}

// eslint-disable-next-line no-unused-vars
class RecipeApi extends Api {
/**
 *
 * @param {string} url
 */
  // eslint-disable-next-line no-useless-constructor
  constructor (url) {
    console.log(url + ' used by constructor from RecipeApi')
    super(url)
  }

  async getRecipes () {
    console.log('started getRecipes function from RecipeApi')
    return await this.get()
  }
}
