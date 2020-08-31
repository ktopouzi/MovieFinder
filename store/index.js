import axios from 'axios'
export const state = () => ({
  // helpers for loading and UX
  loading: false,
  noResultsLeft: false,
  // helpers for pagination etc.
  totalResults: 0,
  currentPage: 1,
  searchTerm: '',
  // results and their details
  searchResults: [],
  extraDetails: []
})

export const mutations = {
  // helpers
  setLoading (state, payload) {
    state.loading = payload
  },
  setNoResultsLeft (state, payload) {
    state.noResultsLeft = payload
  },
  setTotalResults (state, payload) {
    state.totalResults = payload
  },
  setCurrentPage (state, payload) {
    state.currentPage = payload
  },
  setSearchTerm (state, payload) {
    state.searchTerm = payload
  },
  clearExtraDetails (state) {
    state.extraDetails = []
  },
  setSearchMovies (state, payload) {
    state.searchResults = [...payload]
  },
  addToResults (state, payload) {
    state.searchResults.push(...payload)
  },
  addToExtra (state, payload) {
    state.extraDetails.push(payload)
  }
}

export const actions = {
  async searchMovie (vuexContext, term) {
    // initialize loading
    vuexContext.commit('setLoading', true)
    // reset state (can be done seperatly)
    vuexContext.commit('setNoResultsLeft', false)
    vuexContext.commit('setSearchTerm', term)
    vuexContext.commit('setCurrentPage', 1)
    vuexContext.commit('clearExtraDetails')

    // search the API with the given term
    const movies = await axios.get(`http://omdbapi.com/?s=${term}&apikey=${process.env.APIKEY}`)
      .then((response) => {
        if (response.data.Error) { return 'error' }
        // keep track of the total results for "pagination"
        vuexContext.commit('setTotalResults', parseInt(response.data.totalResults))
        return [...response.data.Search]
      })
    // can be done differently but the API is not that helpful with that.
    // for simplicity I just return error and I am not handling that.
    // TODO implement a fix for that.
    if (movies !== 'error') {
      vuexContext.dispatch('movieExtraDetails', movies.map(movie => movie.imdbID))
      vuexContext.commit('setSearchMovies', movies)
    }
    vuexContext.commit('setLoading', false)
  },
  async loadMoreMovies (vuexContext, term) {
    // see how many pages we need to fetch
    const totalResults = Math.ceil(parseInt(vuexContext.state.totalResults) / 10)
    // temporary hold the currentpage for the upcoming check.
    let results = vuexContext.state.currentPage
    if (vuexContext.state.currentPage < totalResults) {
      // increase the current page
      vuexContext.commit('setCurrentPage', ++results)
      // fetch the next one from the API
      const nextPage = await axios.get(`http://omdbapi.com/?s=${term}&apikey=${process.env.APIKEY}&page=${vuexContext.state.currentPage}`)
        .then((response) => {
          if (response.data.Error) {
            return 'error'
          }
          return [...response.data.Search]
        })
      vuexContext.dispatch('movieExtraDetails', nextPage.map(movie => movie.imdbID))
      vuexContext.commit('addToResults', nextPage)
    } else if (!vuexContext.state.noResultsLeft) { vuexContext.commit('setNoResultsLeft', true) }
  },
  async movieExtraDetails (vuexContext, ids) {
    // check if the incoming id is an Array so we can loop through all the ids.
    // if not just do ta single call for the spesific id
    // add the results to extra details
    if (Array.isArray(ids)) {
      ids.map(async (id) => {
        const extraDetails = await axios.get(`http://omdbapi.com/?i=${id}&apikey=${process.env.APIKEY}`)
          .then((response) => {
            if (response.data.Error) {
              return 'error'
            }
            return response.data
          })
        vuexContext.commit('addToExtra', extraDetails)
      })
    } else {
      const extraDetails = await axios.get(`http://omdbapi.com/?i=${ids}&apikey=${process.env.APIKEY}`)
        .then((response) => {
          if (response.data.Error) {
            return 'error'
          }
          return response.data
        })
      vuexContext.commit('addToExtra', extraDetails)
    }
  }
}

export const getters = {
  // helpers
  getLoading (state) {
    return state.loading
  },
  getNoResultsLeft (state) {
    return state.noResultsLeft
  },
  getSearchResults (state) {
    return state.searchResults
  },
  getExtraDetails (state) {
    return state.extraDetails
  },
  getSearchTerm: state => state.searchTerm,
  getCurrentPage: state => state.currentPage,

  getMovie: state => (id) => {
    return state.extraDetails.find(movie => movie.imdbID === id)
  }
}
