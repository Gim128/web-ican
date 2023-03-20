<template>
  <navbar-component />
  <hero-section />
  <hero-section-two />
</template>

<script>

import HeroSection from '../components/HeroSection.vue'
import HeroSectionTwo from '../components/HeroSectionTwo.vue'
import NavbarComponent from '../components/NavbarComponent.vue'

export default {
  components: { NavbarComponent, HeroSection, HeroSectionTwo },

}
</script>

<style>

</style>