<template>
  <Layout>
    <div
      class="relative flex items-center content-center justify-center pt-16 pb-32 min-h-3/4"
    >
      <div class="absolute top-0 w-full h-full bg-white">
        <g-image
          class="absolute top-0 object-cover w-full h-full"
          :src="$page.service.featuredImage.src"
          :alt="$page.service.title"
        >
        </g-image>
        <span
          id="blackOverlay"
          class="absolute w-full h-full bg-black opacity-75"
        ></span>
      </div>

      <div class="container relative mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
            <div class="pt-32 sm:pt-0">
              <small class="text-orange-500 uppercase">Наши услуги</small>
              <h1 class="mb-2 text-4xl font-semibold leading-normal text-white">
                {{ $page.service.title }}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
        style="height: 70px; transform: translateZ(0px);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-white fill-current"
            points="2560 0 2560 100 0 100 0 0 1280 100"
          ></polygon>
        </svg>
      </div>
    </div>

    <section class="pb-20 -mt-24 bg-white">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap justify-center mt-24">
          <div
            class="w-full px-4 mt-24 lg:w-8/12"
            v-html="$page.service.content"
          ></div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  metadata {
    siteName
    siteDescription
    siteUrl
  }
  service: servicePage(id: $id) {
    title
    description
    featuredImage(quality: 90)
    content
  }
}
</page-query>

<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.service.title,
      meta: [
        {
          name: 'description',
          content: this.$page.service.description,
        },
        { property: 'og:title', content: this.$page.service.title },
        { property: 'og:site_name', content: this.$page.metadata.siteName },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: this.$page.metadata.siteUrl + this.$router.currentRoute.path,
        },
        {
          property: 'og:image',
          content: this.$page.service.featuredImage.src || '',
        },
        {
          property: 'og:description',
          content: this.$page.service.description,
        },
        {
          name: 'twitter:card',
          content: this.$page.service.featuredImage.src
            ? 'summary_large_image'
            : 'summary',
        },
        {
          name: 'twitter:site',
          content: this.$page.metadata.siteUrl + this.$router.currentRoute.path,
        },
        { name: 'twitter:title', content: this.$page.service.title },
        {
          name: 'twitter:description',
          content: this.$page.service.description,
        },
        {
          name: 'twitter:image:src',
          content: this.$page.service.featuredImage.src || '',
        },
        { itemprop: 'name', content: this.$page.service.title },
        {
          itemprop: 'description',
          content: this.$page.service.description,
        },
        {
          itemprop: 'image',
          content: this.$page.service.featuredImage.src || '',
        },
      ],
    };
  },
};
</script>
