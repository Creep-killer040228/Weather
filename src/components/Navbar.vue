<template>
  <div class="nav">
    <a href="#" class="logo">
      <img src="@/assets/images/logo.svg" alt="" />
      <span class="logo__span">vue weather</span>
    </a>
    <div class="nav__search">
      <img src="@assets/images/kaplya.svg" alt="" @click="darkMode" />
      <input
        type="text"
        class="nav__search-input"
        placeholder="Выбрать город"
        v-model="city"
        @keydown.enter="getWeather(city), (city = '')"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      city: "",
    };
  },

  methods: {
    ...mapActions(["getWeather"]),

    darkMode() {
      let value = document.body.style.getPropertyValue("--white");
      if (value == "white") {
        document.body.style.setProperty("--white", "rgb(27,27,27)");
        document.body.style.setProperty("--text", "white");
      } else {
        document.body.style.setProperty("--white", "white");
        document.body.style.setProperty("--text", "black");
      }
    },
  },

  created() {
    document.body.style.setProperty("--white", "white");
    document.body.style.setProperty("--text", "black");
  },
};
</script>
