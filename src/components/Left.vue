<template>
  <div id="left">
    <Navigation/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';

@Component({
  components: {
    Navigation,
  },
})
export default class Left extends Vue {
  public mounted() {
    // console.log(this.$store.state.documents);
    // this.$store.dispatch('requestData');
  }
}
</script>

<style lang="scss">
#left {
  width: 350px;
  padding-top: 100px;
  border-color: red;
  border-style: solid;
}
</style>