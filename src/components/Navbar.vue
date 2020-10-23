<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
    :class="{
      'bg-transparent': !showMenu,
      'transition duration-700 ease-in bg-gray-900': showMenu,
    }"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <a
          class="flex text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
          href="/"
        >
          <g-image
            alt="UPGEO logo"
            src="~/assets/img/upgeo-logo.png"
            width="200"
          />
        </a>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <font-awesome-icon :icon="['fas', 'bars']" class="text-white" />
        </button>
      </div>
      <div
        class="my-4 lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none sm:-translate-y-6"
        :class="{
          hidden: !showMenu,
          'animate_bounce block': showMenu,
        }"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <g-link
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-orange-500"
              to="/"
            >
              О компании
            </g-link>
          </li>
          <li class="nav-item">
            <g-link
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-orange-500"
              to="/services/"
            >
              Услуги
            </g-link>
          </li>
          <li class="nav-item">
            <g-link
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-orange-500"
              to="/projects/"
            >
              Проекты
            </g-link>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-orange-500"
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
