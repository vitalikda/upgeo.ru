<template>
  <Layout>
    <div
      class="relative flex items-center content-center justify-center pt-16 pb-32"
      style="min-height: 75vh;"
    >
      <div class="absolute top-0 w-full h-full bg-gray-900 bg-center bg-cover">
        <span
          id="blackOverlay"
          class="absolute w-full h-full bg-black opacity-75"
        ></span>
      </div>
      <div class="container relative mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
            <div class="pt-32 sm:pt-0">
              <small class="text-orange-500 uppercase">Ошибка 404</small>
              <h1 class="mb-2 text-2xl font-semibold leading-normal text-white">
                Приносим наши извинения, но данная страница не существует...
              </h1>
              <g-link
                to="/"
                class="inline-block px-4 py-2 mt-8 font-semibold text-orange-600 bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-white hover:border-transparent"
              >
                Вернуться на Главную
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Ошибка 404',
  },
};
</script>
