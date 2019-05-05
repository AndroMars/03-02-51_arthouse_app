<template>
  <div class="center">
    <div class="content">
      <ArtWork />
      <!--<div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
        <router-view/>
      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ArtWork from '@/template/ArtWork.vue';

@Component({
  components: {
    ArtWork,
  },
})
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
  max-width: 500px;
  width: 80%;
  border-color: blue;
  border-style: solid;
  flex-direction: column;
  min-height: 95vh;
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