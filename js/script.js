const { createApp } = Vue;

createApp({

  data(){
    return {
      message: 'Hello Vue!',
      image: 'Vue.png'
    }
  }
}).mount('#app')