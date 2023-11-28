<template>
  <div class="container" v-if="weather">
    <Navbar />
    <Main />
  </div>
  <div class="loader" v-else>
    <img src="@assets/images/logo.svg" alt="">
  </div>
</template>

<script>
import Main from './components/Main.vue';
import Navbar from './components/Navbar.vue';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    Navbar,
    Main
  },
  computed: {
    ...mapState(['weather'])
  },
  methods: {
    ...mapActions(['getWeather'])
  },
  created() {
    this.getWeather()
  },
}
</script>
