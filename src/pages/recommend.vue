<template>
  <div class="md:grid md:grid-cols-2 md:gap-8">
    <div v-show="contents.length === 0" class="loader">記事がありません</div>
    <article class="mb-5 md:mb-0">
      <nuxt-link :to="`/${contents[0].id}`" class="block">
        <img class="ogimage" :src="`${contents[0].ogimage.url}`" alt="" />
        <div class="card-body font-bold bg-white px-2 py-4 md:px-4 md:py-6">
          <p class="mb-0 text-sm md:text-base">
            {{ contents[0].title }}
          </p>
        </div>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'blog',
      queries: { limit: 10 },
    })
    return data
  },
}
</script>

<style scoped>
.ogimage {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

.card-body {
  min-height: 96px;
}
</style>