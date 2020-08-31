import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

describe('store', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store

  beforeAll(async () => {
    // note the store will mutate across tests
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })

  describe('loading', () => {
    let loading

    beforeEach(() => {
      store.commit('setLoading', true)
      loading = store.getters.getLoading
    })

    test('getter is a function', () => {
      expect(loading).toBe(true)
    })
  })

  describe('Add to extra', () => {
    let extraDetails

    beforeEach(() => {
      const mockData = {
        Poster: 'N/A',
        Title: 'Title',
        Genre: 'Drama',
        Actors: 'actor 1 actor 2',
        Writers: 'Writer',
        Director: 'Director',
        Plot: 'A small overview of the movie',
        Year: '2020',
        imdbRating: 6.3,
        imdbVotes: 25
      }
      store.commit('addToExtra', mockData)

      extraDetails = store.getters.getExtraDetails
    })

    test('is a function', () => {
      expect(extraDetails[0].Genre).toBe('Drama')
    })
  })
})
