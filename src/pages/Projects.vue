<template>
  <Layout>
    <div
      class="relative flex items-center content-center justify-center pt-16 pb-32"
      style="min-height: 75vh;"
    >
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style="background-image: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80');"
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
              <small class="text-orange-500 uppercase">
                {{ this.title }}
              </small>
              <h1 class="mb-2 text-4xl font-semibold leading-normal text-white">
                {{ this.description }}
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

    <section class="py-20">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap">
          <div
            v-for="(project, idx) in $page.projects.edges"
            :key="idx"
            class="w-full px-4 md:w-4/12"
          >
            <card-component
              :title="project.node.title"
              :description="project.node.description"
              :path="project.node.path"
              :image="project.node.featuredImage.src"
              :color="idx % 2 ? 'gray' : 'orange'"
            ></card-component>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  projects: allProjectPage(sortBy: "date", order: ASC) {
    edges {
      node {        
        title
        description
        path
        featuredImage(width: 350)
      }
    }
  }
}
</page-query>

<script>
import CardComponent from '~/components/Card';

export default {
  components: { CardComponent },
  data() {
    return {
      title: 'Наши проекты',
      description: 'Мы верим, что наша работа говорит сама за себя',
    };
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
};
</script>
