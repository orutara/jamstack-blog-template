<template>
  <div class="grid grid-cols-2 gap-3 md:gap-8">
    <div v-show="contents.length === 0" class="loader">記事がありません</div>
    <article v-for="content in contents" :key="content.id" class="mb-6 md:mb-0">
      <nuxt-link :to="`/${content.id}`" class="block">
        <img class="ogimage" :src="`${content.ogimage.url}`" alt="" />
        <div class="card-body font-bold bg-white px-2 py-4 md:px-4 md:py-6">
          <p class="line-clamp-2 mb-0 text-sm md:text-base">
            {{ content.title }}
          </p>
        </div>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $microcms }) {
    const page = params.id || '1';
    const categoryId = params.categoryId;
    const articleFilter =
      categoryId !== undefined
        ? `category[equals]${categoryId}`
        : undefined;
    const limit = 10;
    const data = await $microcms.get({
      endpoint: 'blog',
      queries: {
        limit,
        offset: (page - 1) * limit,
        filters: articleFilter,
      },
    });
    const categories = await $microcms.get({
      endpoint: 'categories',
      queries: {
        limit: 100,
      },
    });
    const selectedCategory =
      categoryId !== undefined
        ? categories.contents.find((content) => content.id === categoryId)
        : undefined;
    return {
      ...data,
      categories: categories.contents,
      selectedCategory,
      page,
    };
  },
  data() {
    return {
      contents: this.contents || [],
      pager: this.pager || [],
      loading: true,
    };
  },
  head() {
    return {
      titleTemplate: null,
      title: 'orutara Log',
    };
  },
};
</script>

<style scoped>
.ogimage {
  width: 100%;
  height: clamp(138px, 34vw, 250px);
  object-fit: cover;
  object-position: top;
}

.card-body {
  min-height: 72px;
}

@media (min-width: 768px) {
  .card-body {
    min-height: 96px;
  }
}

p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>