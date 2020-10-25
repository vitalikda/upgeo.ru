<template>
  <Layout>
    <div
      class="relative flex items-center content-center justify-center pt-16 pb-32 min-h-3/4"
    >
      <div class="absolute top-0 w-full h-full bg-white">
        <g-image
          class="absolute top-0 object-cover w-full h-full"
          src="../assets/img/services.jpg"
        >
        </g-image>
        <span class="absolute w-full h-full bg-black opacity-75"></span>
      </div>

      <div class="container relative mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
            <div class="pt-32 sm:pt-0">
              <small class="text-orange-500 uppercase">Письмо отправлено</small>
              <h1 class="mb-2 text-2xl font-semibold leading-normal text-white">
                Cпасибо, что заполнили нашу контактную форму.
                <br />
                Мы ответим Вам в ближайшее время!
              </h1>
              <g-link
                to="/"
                class="inline-block px-4 py-2 mt-8 font-semibold text-orange-600 bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-white hover:border-transparent"
              >
                Перейти на Главную страницу
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
    title: 'Письмо отправлено',
  },
};
</script>
