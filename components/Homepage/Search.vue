<template>
  <section>
    <div>
      <form action="submit" class="max-w-screen-md mx-auto" @submit.prevent="searchMovie()">
        <div class="hidden">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="searchMovie"
          >Search:</label>
        </div>
        <div class="flex bg-gray-100 my-5 rounded">
          <input
            id="searchMovie"
            v-model="searchTerm"
            class="w-3/4 bg-gray-100 appearance-none rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
            type="text"
            placeholder="ex. Lord of the Rings"
          >
          <input v-model="inputValue" class="submit-btn w-2/4 p-4 tracking-wide bg-dark_blue text-white rounded-bl-full rounded-tl-full focus:outline-none hover:bg-contrast_blue transition duration-500 ease-in-out" type="submit" value="Search">
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      movieSuggetions: ['Star wars', 'Harry Potter', 'The Lord of the Rings', 'Top Gun', 'The Notebook', 'The Joker', 'Batman', 'The Lake House'],
      searchTerm: ''
    }
  },
  computed: {
    inputValue () {
      return this.searchTerm ? 'Search' : 'Feeling Lucky'
    }
  },
  methods: {
    searchMovie () {
      this.searchTerm !== '' ? this.$router.push(`/search/${this.searchTerm}`) : this.$router.push(`/search/${this.movieSuggetions[Math.floor(Math.random() * this.movieSuggetions.length)]}`)
    }
  }

}
</script>

<style>

</style>
