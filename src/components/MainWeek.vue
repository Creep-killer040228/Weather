<template>
  <div class="main__week">
    <Day
    
    
    
    v-for="(day, i) in daily" :key="i"
    :day="day"
    
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Day from "./Day.vue";
export default {
  components: {
    Day,
  },

  computed: {
    ...mapState(["weather"]),

    daily() {
      return this.weather ? this.weather.daily : this.weather;
    },
  },
};
</script>
