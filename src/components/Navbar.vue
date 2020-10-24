<template>
  <nav
    class="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg"
    :class="{
      'bg-transparent': !showMenu,
      'transition duration-700 ease-in bg-gray-900': showMenu,
    }"
  >
    <div
      class="container flex flex-wrap items-center justify-between px-4 mx-auto"
    >
      <div
        class="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start"
      >
        <a
          class="flex inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-no-wrap"
          href="/"
        >
          <g-image
            alt="UPGEO logo"
            src="~/assets/img/upgeo-logo.png"
            width="200"
          />
        </a>
        <button
          class="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <font-awesome-icon :icon="['fas', 'bars']" class="text-white" />
        </button>
      </div>
      <div
        class="items-center flex-grow my-4 lg:flex lg:bg-transparent lg:shadow-none sm:-translate-y-6"
        :class="{
          hidden: !showMenu,
          'animate_bounce block': showMenu,
        }"
      >
        <ul class="flex flex-col ml-auto list-none lg:flex-row">
          <li class="nav-item">
            <g-link
              class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:text-orange-500"
              to="/"
            >
              О компании
            </g-link>
          </li>
          <li class="nav-item">
            <g-link
              class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:text-orange-500"
              to="/services/"
            >
              Услуги
            </g-link>
          </li>
          <li class="nav-item">
            <g-link
              class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:text-orange-500"
              to="/projects/"
            >
              Проекты
            </g-link>
          </li>
          <li class="nav-item">
            <a
              class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:text-orange-500"
              href="/#contacts"
            >
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.animate_bounce {
  animation: slideDown 1.5s;
}

@keyframes slideDown {
  0% {
    -webkit-transform: translate3d(0, -25%, 0);
    transform: translate3d(0, -25%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>
