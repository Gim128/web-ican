<template>
  <navbar-component />
  <hero-section />
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import HeroSection from './components/HeroSection.vue';


export default {
  name: 'App',
  components: {
    NavbarComponent,
    HeroSection,
  }
}
</script>

<style>

</style>
