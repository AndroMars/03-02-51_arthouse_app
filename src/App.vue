<template>
  <div id="app">
    <Left/>
    <Center/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Left from '@/components/Left.vue';
import Center from '@/components/Center.vue';

@Component({
  components: {
    Left,
    Center,
  },
})
export default class App extends Vue {
  public mounted() {
    this.$store.dispatch('requestData');
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: row;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Open Sans", sans-serif;
}
</style>