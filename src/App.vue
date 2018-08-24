<template>
  <div id="app">

	<Composer></Composer>
  </div>
</template>

<script>
import Composer from './components/Composer.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
	  Composer
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import 'scss/main.scss';
</style>
