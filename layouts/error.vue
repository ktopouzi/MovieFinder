<template>
  <div class="container mx-auto flex flex-col justify-center h-full items-center px-4">
    <h1 v-if="error.statusCode === 404" class="text-2xl">
      Whoops. The page was not found!
    </h1>
    <h1 v-else>
      A wild error appeared
    </h1>
    <nuxt-link class="p-3 bg-dark_blue text-white rounded font-bold hover:bg-contrast_blue transition duration-500 ease-in-out mt-3" to="/">
      Back to safety
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      titleTemplate: 'Error page - %s',
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
