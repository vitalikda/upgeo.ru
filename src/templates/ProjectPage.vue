<template>
  <Layout>
    <div
      class="relative flex items-center content-center justify-center pt-16 pb-32"
      style="min-height: 75vh;"
    >
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        :style="{
          'background-image': 'url(' + $page.project.featuredImage.src + ')',
        }"
      >
        <span
          id="blackOverlay"
          class="absolute w-full h-full bg-black opacity-75"
        ></span>
      </div>
      <div class="container relative mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
            <div class="pt-32 sm:pt-0">
              <small class="text-orange-500 uppercase">Наши проекты</small>
              <h1 class="mb-2 text-4xl font-semibold leading-normal text-white">
                {{ $page.project.title }}
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
            v-html="$page.project.content"
          ></div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  project: projectPage(id: $id) {
    title
    description
    featuredImage (quality: 90)
    content
  }
}
</page-query>

<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          key: 'description',
          name: 'description',
          content: this.$page.project.description,
        },
        {
          name: 'og:title',
          property: 'og:title',
          content: this.$page.project.title,
        },
      ],
    };
  },
};
</script>

<style>
img {
  /* tw mx-auto */
  margin-left: auto;
  margin-right: auto;
  /* tw rounded-lg */
  border-radius: 0.5rem;
}
</style>
