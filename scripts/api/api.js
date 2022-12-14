// THIS FILE DEFINES HOW WE GET DATA FROM URLS
class Api {
/**
 *
 * @param {string} url
 */
  constructor (url) {
    this._url = url
  }

  async get () {
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
    super(url)
  }

  async getRecipes () {
    return await this.get()
  }
}
