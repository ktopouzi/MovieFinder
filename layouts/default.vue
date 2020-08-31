<template>
  <div class="flex flex-col h-screen">
    <Header :routes="myRoutes" />
    <main class="flex-1">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import links from '@/assets/data/menu.json'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      myRoutes: links
    }
  },
  head () {
    return {
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

html {
  font-family:
    Poppins,
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #383838;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 350ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
