<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show=$route.meta.showFood />
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGide'

export default {
  components: {
    FooterGuide
  }
}
</script>
<style lang="stylus">

</style>
