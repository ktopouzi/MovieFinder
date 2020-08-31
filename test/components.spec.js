import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import MovieDetails from '@/components/Movies/MovieDetails.vue'
import Search from '@/components/Homepage/Search.vue'

describe('Components', () => {
  it('renders header', () => {
    const routes = [{ name: 'Route', to: '/' }, { name: 'Route2', to: '/route' }, { name: 'Route3', to: '/route' }]
    const wrapper = shallowMount(Header, {
      propsData: { routes },
      stubs: ['router-link']
    })
    expect(wrapper.findAll('.header-menu__item').length).toBe(3)
  })

  it('should display a movie detail view', () => {
    const movie = {
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
    const wrapper = shallowMount(MovieDetails, {
      propsData: { movie },
      stubs: ['router-link']
    })
    expect(wrapper.find('.movie-details__section__vote-counts').text()).toBe('(25)')
    expect(wrapper.find('.movie-details__title').text()).toBe(`${movie.Title} - ${movie.Year}`)
  })

  it('renders search', () => {
    const wrapper = shallowMount(Search)

    expect(wrapper.find('.submit-btn').element.value).toBe('Feeling Lucky')
  })
})
