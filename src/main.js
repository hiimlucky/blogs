import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
      // el代表的是元素
      //binding表示在哪一个标签中使用了rainbow这个指令就会触发bind这个方法
      el.style.color='red'
  }
})

Vue.directive('theme',{
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
        el.style.maxWidth = '1260px';
    } else if (binding.value == 'narrow'){
         el.style.maxWidth='560px'
    }

    if(binding.arg=='column'){
      el.style.background='#6677cc';
      el.style.padding = '20px'
    } 

  }
})

//自定义过滤器
// toUpperCase() 方法用于把字符串转换为大写。
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase()
})

Vue.filter('snippet', function(value){
  return value.slice(0,100)+'...'
})


 




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
