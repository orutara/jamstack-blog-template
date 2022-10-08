<template>
  <main class="main page-articles">
    <div class="bg-white py-14 px-5 mb-8">
      <p class="publishedAt text-center text-bg mb-8">{{ publishedAt }}</p>
      <h1 class="title text-center mb-10">{{ title }}</h1>
      <div v-for="content in contents" :key="content.id" class="mb-5 md:mb-0">
        <img class="ogimage" :src="`${content.ogimage.url}`" alt="" />
      </div>

      <!-- <p class="category">{{ category && category.name }}</p> -->
      <div class="container lg:px-12">
        <div class="post" v-html="body"></div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://logtara.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': process.env.API_KEY,
        },
      }
    )
    return data
  },
}
</script>

<style scoped>
</style>
