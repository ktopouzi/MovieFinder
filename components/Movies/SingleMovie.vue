<template>
  <div class="p-2">
    <nuxt-link class="relative" :to="`/movies/${link}`">
      <img class="w-full shadow-lg rounded-t-md" :src="poster == 'null' ? '/img/image-not-found.png' : poster" :alt="`${title} poster`">
    </nuxt-link>
    <div class="bg-white rounded p-4 shadow-lg flex flex-col">
      <div class="flex items-baseline">
        <p class="text-gray-600 text-xs uppercase font-semibold tracking-wide">
          {{ year }}
        </p>
      </div>
      <h4 class="mt-1 font-bold text-lg leading-tight text-left">
        {{ title }}
      </h4>
      <div v-if="extraDetails" class="details mt-4">
        <p class="flex flex-wrap">
          <span class="text-justify tracking-tight">{{ extraDetails.Plot }}</span>
        </p>
        <div class="flex flex-wrap justify-start my-2">
          <p class="mr-2">
            Directed by:
          </p>
          <span class="font-bold">{{ extraDetails.Director }}</span>
        </div>
      </div>
      <router-link
        class="flex items-center justify-start underline text-dark_blue"
        :to="`/movies/${link}`"
      >
        Read more
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    poster: {
      type: String,
      required: true
    },
    // serves as an id too
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      details: {}
    }
  },
  computed: {
    ...mapGetters([
      'getExtraDetails'
    ]),
    extraDetails () {
      return this.getExtraDetails.find(item => item.imdbID === this.link)
    }
  },
  mounted () {
    this.details = this.extraDetails
  }
}
</script>

<style>
</style>
