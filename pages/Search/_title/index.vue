<template>
  <section class="search h-full container mx-auto">
    <div v-if="getLoading" class="flex justify-center items-center h-full">
      <Loading />
    </div>
    <div v-else-if="getSearchResults.length">
      <client-only placeholder="Slider with movies">
        <h1 class="text-center text-4xl my-4 flex flex-wrap justify-center">
          Your results for: <span class="font-bold underline ml-2">{{ getSearchTerm }}</span>
        </h1>
        <div>
          <carousel
            ref="carousel"
            :scroll-per-page="true"
            :per-page-custom="[[300, 1], [400, 1], [768, 3], [1024, 4]]"
            :mouse-drag="true"
            :loop="false"
            :navigation-enabled="false"
            :navigation-click-target-size="0"
            :pagination-enabled="true"
          >
            <slide v-for="(movie,idx) in getSearchResults" :key="idx">
              <SingleMovie
                :title="movie.Title"
                :poster="movie.Poster === 'N/A' ? 'null' : movie.Poster "
                :link="movie.imdbID"
                :year="movie.Year"
              />
            </slide>
          </carousel>
        </div>
      </client-only>
      <div class="flex justify-center items-center my-6">
        <button
          :class="[!!getNoResultsLeft ? 'cursor-not-allowed' : 'cursor-pointer']"
          class="p-3 bg-dark_blue text-white rounded font-bold hover:bg-contrast_blue transition duration-500 ease-in-out"
          :disabled="!!getNoResultsLeft"
          @click="loadMore"
        >
          Load More
        </button>
      </div>
    </div>
    <div v-else>
      No results
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import SingleMovie from '~/components/Movies/SingleMovie'
import Loading from '~/components/UI/Loading'
export default {
  components: {
    SingleMovie,
    Loading
  },
  computed: {
    ...mapGetters([
      'getSearchResults',
      'getLoading',
      'getNoResultsLeft',
      'getSearchTerm'
    ])
  },
  beforeCreate () {
    this.$store.dispatch('searchMovie', this.$route.params.title)
  },
  methods: {
    loadMore () {
      this.$store.dispatch('loadMoreMovies', this.getSearchTerm)
    }
  },
  head () {
    return {
      titleTemplate: this.getSearchTerm + ' - %s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Search results for' + this.getSearchTerm
        }
      ]
    }
  }

}
</script>
