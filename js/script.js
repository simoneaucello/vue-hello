const { createApp } = Vue;

createApp({

  data(){
    return {
      message: 'Hello Vue!',
      image: 'Vue.png',
      displayClock: ''
    }
  },

  methods: {
    myClock(){
      const d = new Date();
      const h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
      const m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
      const s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
      this.displayClock = `${h}:${m}:${s}`
    },

    startClock(){
      setInterval(() => {
        this.myClock()
      },1000)

    }

  },

  mounted(){
    this.myClock();
    this.startClock();
  }




}).mount('#app')