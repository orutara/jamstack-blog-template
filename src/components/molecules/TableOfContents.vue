<template>
  <ul class="lists">
    <li v-for="item in toc" :key="item.id" :class="`list ${item.name}`">
      <n-link v-scroll-to="`#${item.id}`" to>
        {{ item.text }}
      </n-link>
    </li>
  </ul>
</template>

<script>
import cheerio from 'cheerio'

export default {
  setup() {
    const $ = cheerio.load(body)
    const headings = $('h1, h2, h3').toArray()
    const toc = headings.map((data) => ({
      text: data.children[0].data,
      id: data.attribs.id,
      name: data.name,
    }))
    return toc
  }
}
</script>

<style>
</style>
