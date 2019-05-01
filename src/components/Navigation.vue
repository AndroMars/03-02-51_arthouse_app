<template>
  <ul id="navigation">
    <li v-for="item in $store.getters.DOCUMENTS" :key="item.id">
      <a href="#" v-on:click="selectWork(item.id)">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
  public selectWork(id: number) {
    this.$store.dispatch('selectWork', id);
    // this.$store.dispatch('requestData');
  }
}
</script>

<style scoped lang="scss">
#navigation {
  list-style: none;
  border-color: yellow;
  border-style: solid;
  width: 150px;
  font-size: 0.75rem;
  text-align: right;
}
</style>

