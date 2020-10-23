<template>
  <div class="layout">
    <navbar-component></navbar-component>
    <slot />
    <footer-component></footer-component>
  </div>
</template>

<static-query></static-query>

<script>
import NavbarComponent from '~/components/Navbar';
import FooterComponent from '../components/Footer';

export default {
  components: { NavbarComponent, FooterComponent },
};
</script>

<style></style>
