<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-5/12 px-4 mr-auto">
          <g-image
            alt="UPGEO logo"
            src="~/assets/img/upgeo-logo-dark.png"
            class="w-full py-2"
            width="300"
          />
          <h5 class="text-md mt-0 py-2 text-gray-700">
            197110, Санкт-Петербург, ул. Ждановская, д.29, оф.13.
          </h5>
        </div>
        <div class="w-full md:w-5/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div
              class="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto"
            >
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Навигация</span
              >
              <ul class="list-unstyled">
                <li>
                  <g-link
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    to="/"
                  >
                    О Компании
                  </g-link>
                </li>
                <li>
                  <g-link
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    to="/services/"
                  >
                    Услуги
                  </g-link>
                </li>
                <li>
                  <g-link
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    to="/projects/"
                  >
                    Проекты
                  </g-link>
                </li>
              </ul>
            </div>
            <div
              class="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto"
            >
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Контакты</span
              >
              <ul class="list-unstyled">
                <li>
                  <g-link
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    to="/"
                  >
                    www.upgeo.ru
                  </g-link>
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="tel:+78126681277"
                  >
                    (812) 66-812-77
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
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
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
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
