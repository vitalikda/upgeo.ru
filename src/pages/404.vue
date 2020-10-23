<template>
  <Layout>
    <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
      style="min-height: 75vh;"
    >
      <div class="absolute top-0 w-full h-full bg-center bg-cover bg-gray-900">
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pt-32 sm:pt-0">
              <small class="text-orange-500 uppercase">Ошибка 404</small>
              <h3 class="text-white text-2xl mb-2 font-semibold leading-normal">
                Приносим наши извинения, но данная страница не существует...
              </h3>
              <g-link
                to="/"
                class="inline-block mt-8 bg-transparent hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent"
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
