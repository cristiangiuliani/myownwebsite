<template>
  <div id="app">
	<Composer></Composer>
	<Contacts></Contacts>
  </div>
</template>

<script>
import Composer from './components/Composer.vue';
import Contacts from './components/Contacts.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components:{
	  Composer,
	  Contacts
  }
}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
@import 'scss/main.scss';
</style>
