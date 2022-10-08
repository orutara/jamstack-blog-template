<template>
  <nav class="hidden md:block">
    <ul class="flex">
      <li v-for="(link, i) in links" :key="i">
        <nuxt-link :to="link.path" class="mr-8 flex items-center">
          <img class="nav_icon" :src="link.iconPath" alt="" /><span>{{
            link.label
          }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: "/recommend", iconPath: require("@/assets/images/icon_recommend.svg"), label: "Recommend" },
        { path: "/categories", iconPath: require("@/assets/images/icon_category.svg"), label: "Category" }
      ]
    }
  }
}
</script>

<style scoped>
  nav a {
    font-weight: bold;
  }

  .nav_icon {
    width: auto;
    height: 18px;
    color: #ffffff;
    margin-right: 8px;
  }
</style>