<template>
  <div class="center">
    <div class="content">
      <!-- <p>Titel {{ $store.state.result.title }}</p>
      <p>Text {{ $store.state.result.text }}</p>
      <p>Image {{ $store.state.result.image }}</p> -->
      <p>Selected Work {{ $store.state.navigation.selectedWork }}</p>
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Left extends Vue {

}
</script>

<style lang="scss">
.center {
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.content {
  display: flex;
  width: 500px;
  background-color: blue;
  flex-direction: column;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>