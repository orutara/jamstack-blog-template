<template>
  <div>
    <Header />
    <div v-if="$route.path === '/category/landing-page'">
      <PageNameBarLandingPage />
    </div>
    <div v-else-if="$route.path === '/category/bunner'">
      <PageNameBarBunner />
    </div>
    <div v-else>
    </div>
    <div class="bg-bg2">
      <div class="container mx-auto lg:grid lg:grid-cols-3">
        <div class="mx-4 md:col-span-2">
          <main class="py-9 md:py-10">
            <div class="container mx-auto">
              <nuxt />
            </div>
          </main>
        </div>
        <div class="md:col-span-1">
          <SideBar />
        </div>
      </div>
    </div>
    <div class="Gnav">
      <GmenuSp />
    </div>
    <Footer />
  </div>
</template>

<script>
</script>