<template>
  <header
    class="bg-dark_blue sm:flex justify-between items-center w-full top-0 z-10 shadow-xl"
  >
    <div class="flex justify-between items-center px-4 py-3">
      <div>
        <router-link to="/">
          <h1 class="logo text-white text-4xl font-bold">
            MovieFinder
          </h1>
        </router-link>
      </div>
      <div class="sm:hidden">
        <button
          type="button"
          class="focus:text-white hover:text-white text-gray-400 focus:outline-none transition duration-500 ease-in-out"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg class="w-8 fill-current" viewBox="0 0 20 20">
            <path
              v-if="isMenuOpen"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />

            <path
              v-else
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <transition name="fade">
      <nav
        :class="isMenuOpen ? 'flex bg-dark_blue' : 'hidden'"
        class="flex flex-row justify-center items-center text-gray-200 text-xl border-solid border-t border-white sm:border-none px-2 pt-2 pb-4 sm:flex"
      >
        <router-link
          v-for="(link,idx) in routes"
          :key="idx"
          class="header-menu__item hover:bg-contrast_blue rounded px-2 py-1 transition duration-500 ease-in-out"
          :to="link.to"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isMenuOpen: false
    }
  }
}
</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
    visibility: hidden;
    opacity: 0;
}
</style>
