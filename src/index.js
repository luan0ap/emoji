import 'babel-polyfill'
import Vue from 'vue'
import App from 'src/components/App'

if (process.env.NOD_ENV === 'production') {
  require('./pwa')
}

new Vue({
  el: '#app',
  render: h => h(App)
})