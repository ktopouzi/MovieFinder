<template>
  <div class="movie-details flex flex-wrap p-2 container mx-auto">
    <div class="movie-details__section-1 w-full md:w-1/2 mb-4 flex justify-center">
      <img class="w-full lg:max-w-md shadow-xl rounded" :src="movie.Poster == 'N/A' ? '/img/image-not-found.png' : movie.Poster" :alt="`${movie.Title} poster`">
    </div>
    <div
      class="movie-details__section w-full md:w-1/2 mb-4 flex flex-col justify-start items-start px-4"
    >
      <h1 class="movie-details__title text-2xl font-bold text-left">
        {{ movie.Title }} - {{ movie.Year }}
      </h1>
      <div class="flex flex-col justify-center items-start">
        <div class="flex flex-wrap text-xl">
          <p class="font-bold mr-2">
            Genre:
          </p>
          <span>{{ movie.Genre }}</span>
        </div>
        <div class="flex flex-wrap text-xl">
          <p class="font-bold mr-2">
            Director(s):
          </p>
          <span>{{ movie.Director }}</span>
        </div>
        <div class="flex flex-wrap text-xl">
          <p class="font-bold mr-2">
            Writer(s):
          </p>
          <span>{{ movie.Writer }}</span>
        </div>
        <div class="flex flex-wrap text-xl">
          <p class="font-bold mr-2">
            Actors:
          </p>
          <span>{{ movie.Actors }}</span>
        </div>
      </div>
      <div class="text-justify tracking-tighter py-4 flex flex-col">
        <div class="flex flex-wrap text-xl">
          <p class="font-bold mr-2">
            Plot:
          </p>
          <p>{{ movie.Plot }}</p>
        </div>
      </div>
      <span class="font-bold">
        Rating: {{ movie.imdbRating }}/10
        <span
          class="movie-details__section__vote-counts inline font-normal"
        >({{ movie.imdbVotes }})</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  head () {
    return {
      titleTemplate: this.movie.Title + ' - %s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Search and find details for your favourite movies, actors, producers.'
        }
      ]
    }
  }
}
</script>

<style>
</style>
