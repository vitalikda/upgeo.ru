<template>
  <footer class="relative pt-8 pb-6 bg-gray-300">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mr-auto md:w-5/12">
          <g-image
            alt="UPGEO logo"
            src="~/assets/img/upgeo-logo-dark.png"
            class="w-full max-w-sm py-2"
            width="500"
            quality="100"
          />
          <h5 class="py-2 mt-0 text-gray-700 text-md">
            197110, Санкт-Петербург, ул. Ждановская, д.29, оф.13.
          </h5>
        </div>
        <div class="w-full px-4 md:w-5/12">
          <div class="flex flex-wrap mb-6 items-top">
            <div
              class="w-full pt-6 ml-auto md:w-6/12 xl:w-4/12 md:pt-0 md:px-4"
            >
              <span
                class="block mb-2 text-sm font-semibold text-gray-600 uppercase"
                >Навигация</span
              >
              <ul class="list-unstyled">
                <li>
                  <g-link
                    class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                    to="/"
                  >
                    О Компании
                  </g-link>
                </li>
                <li>
                  <g-link
                    class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                    to="/services/"
                  >
                    Услуги
                  </g-link>
                </li>
                <li>
                  <g-link
                    class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                    to="/projects/"
                  >
                    Проекты
                  </g-link>
                </li>
              </ul>
            </div>
            <div
              class="w-full pt-6 ml-auto md:w-6/12 xl:w-4/12 md:pt-0 md:px-4"
            >
              <span
                class="block mb-2 text-sm font-semibold text-gray-600 uppercase"
                >Контакты</span
              >
              <ul class="list-unstyled">
                <li>
                  <g-link
                    class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                    to="/"
                  >
                    www.upgeo.ru
                  </g-link>
                </li>
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                    href="tel:+78126681277"
                  >
                    (812) 66-812-77
                  </a>
                </li>
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                    href="mailto:office@upgeo.ru"
                  >
                    office@upgeo.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center justify-center md:justify-between"
      >
        <div class="w-full px-4 mx-auto text-center md:w-4/12">
          <div class="py-1 text-sm font-semibold text-gray-600">
            <p>Copyright © {{ date }} UPGEO LLC.</p>
            <span class="text-xs">
              Website built by
              <a
                href="https://vitaly.im"
                target="_blank"
                class="text-gray-600 hover:text-gray-900"
              >
                Vitaly</a
              >.
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
