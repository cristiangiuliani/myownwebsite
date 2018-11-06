import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import 'animate.css';
import 'bulma';

Vue.config.productionTip = false;
Vue.use(VueAxios, Axios);
new Vue({
  el: '#app',
  render: h => h(App),
  mounted(){
	Vue.axios.get('./api/sendMessage.php').then((response) => {
		console.log(response.data)
	})
  }
})
