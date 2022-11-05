<template>
  <div class="author bg-white py-8 px-5 mb-8 lg:mt-10">
    <p class="text-center mb-4 font-bold">Category</p>
    <ul class="text-sm leading-5">
      <li v-for="(link, i) in links" :key="i" class="border-t border-solid ">
        <nuxt-link :to="link.path" class="block py-2 my-1 pl-2 hover:bg-hover">{{ link.label }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: "/category/landing-page", label: "LP" },
        { path: "/category/bunner", label: "Bunner" },
      ]
    }
  }
}
</script>

<style scoped>
li:last-child {
  border-bottom: 1px solid #ddd;
}
</style>