<template>
  <div id="left">
    <Navigation/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";

@Component({
  components: {
    Navigation
  }
})
export default class Left extends Vue {}
</script>

<style lang="scss">
#left {
  width: 350px;
  padding-top: 100px;
  background-color: red;
}
</style>