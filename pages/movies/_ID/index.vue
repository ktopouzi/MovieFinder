<template>
  <div v-if="!extraDetails" class="flex justify-center items-center h-full">
    <Loading />
  </div>
  <div v-else>
    <div class="flex justify-start items-center cursor-pointer container mx-auto my-4 px-2 text-xl" @click="$router.go(-1)">
      <svg class="w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
      Go back
    </div>
    <MovieDetails :movie="extraDetails" />
  </div>
</template>

<script>
import MovieDetails from '@/components/Movies/MovieDetails'
import { mapGetters } from 'vuex'
import Loading from '~/components/UI/Loading'
export default {
  components: {
    MovieDetails,
    Loading
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getExtraDetails',
      'getMovie'
    ]),
    extraDetails () {
      return this.getMovie(this.$route.params.ID)
    },
    movie () {
      return this.$store.dispatch('movieExtraDetails', this.$route.params.ID)
    }
  }
}
</script>

<style>
</style>

<style>

</style>
