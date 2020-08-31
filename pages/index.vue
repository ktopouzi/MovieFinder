<template>
  <div class="homepage h-full">
    <div class="flex flex-col justify-center items-center px-4 h-full bg-black bg-opacity-25">
      <h1 class="text-5xl md:text-6xl up font-extrabold text-white leading-10 xs:leading-9 md:leading-normal text-center">
        Find your favourite movie!
      </h1>
      <div class="text text-white text-xl text-center mb-6">
        <p class="tracking-tight">
          Just type the <span class="font-bold underline">title</span> below!
        </p>
      </div>
      <Search />
    </div>
  </div>
</template>

<script>
import Search from '@/components/Homepage/Search'
export default {
  components: {
    Search
  }
}
</script>

<style>
.homepage {
    background-image: url(/img/background.jpg);
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
