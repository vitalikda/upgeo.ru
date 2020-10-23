<template>
  <Layout>
    <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
      style="min-height: 50vh;"
    >
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        :style="{
          'background-image':
            'url(' + require('~/assets/img/services.jpg') + ')',
        }"
      >
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pt-32 sm:pt-0">
              <small class="text-orange-500 uppercase">НАШИ УСЛУГИ</small>
              <h3 class="text-white text-2xl mb-2 font-semibold leading-normal">
                Быть лучшими в сфере строительства и проектирования
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
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
            class="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100 0 0 1280 100"
          ></polygon>
        </svg>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Услуги',
  },
};
</script>
